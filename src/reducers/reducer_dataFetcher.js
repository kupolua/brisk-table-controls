import md5 from 'md5';
import { SET_DATA_PATH } from '../constants/CONSTANTS';
import { SET_DATA_CUSTOM_FIELDS } from '../constants/CONSTANTS';
import { SET_INIT_STATE } from '../constants/CONSTANTS';
import { GET_SOURCE_LIST } from '../constants/CONSTANTS';
import { SET_SOURCE_LIST } from '../constants/CONSTANTS';
import { PAGE_NUMBER } from '../constants/CONSTANTS';
import { SET_ROWS_PER_PAGE } from '../constants/CONSTANTS';
import { SET_DATA_COLUMN_TEXT_LENGTH } from '../constants/CONSTANTS';

const jp = require('jsonpath');

function parseToList(customFields) {
    let customFieldsList = [];

    if(!customFields) {return}
    customFieldsList = typeof customFields === "object" ? customFields : JSON.parse(customFields);

    return customFieldsList;
}

function getCustomField(fieldKey, customFieldsList) {
    let customField = {};

    for (var key in customFieldsList) {
        let rowData = customFieldsList[key];

        for (var rowKey in rowData) {
            if(fieldKey == rowData[rowKey]) {
                customField = {
                    key: rowData.fieldName,
                    label: rowData.columnName,
                    sortable: true,
                    className: 'important-column',
                    style: {
                        width: Math.ceil(rowData.columnWidth),
                    },
                };

            }
        }
    }

    return customField;
}

function getCustomHeaderTable(dataSource, customFieldsList) {
    let headerTable = [];

    for (var key in dataSource) {

        let customField = getCustomField(key, customFieldsList);

        if(Object.keys(customField).length) {
            headerTable[headerTable.length] = customField;
        }
    }

    return headerTable;
}

function getHeaderTable(dataSource) {
    let headerTable = [];
    let i = 0;

    for (var key in dataSource) {
        headerTable[i] = {
            key: key,
            label: key,
            sortable: true
        };
        i++;
    }

    return headerTable;
}

function showPageRows(data, pageRowsOption) {
    let tableRows;
    let startIndex = ((pageRowsOption.pageNumber - 1) * pageRowsOption.rowSize);
    let endIndex = startIndex + pageRowsOption.rowSize;

    tableRows = data.slice(startIndex, endIndex);

    return tableRows;
}

function isVisibleField(fieldsList, field) {
    let isVisibleField = false;

    fieldsList.map((customField) => {
        if(customField.key == field) {
            isVisibleField = true;
        }
    });

    return isVisibleField;
}

function isEqualHashes(origin, children) {
    let isEqualHashes = false;

    if(origin == children) {
        console.log('%c hashes are equal', 'color: green; display: block;');
        isEqualHashes = true;
    } else {
        console.log('%c hashes are not equal', 'color: red; display: block;');
    }

    return isEqualHashes;
}

function convertToDataTable(data, dataPath = '$..teachers', rowsPerPage = 5, columnTextLength = 20, customFields) {
    // console.log('customFields', customFields);
    console.log('convertToDataTable', data, dataPath, typeof rowsPerPage, rowsPerPage, typeof columnTextLength, columnTextLength, customFields);
    let dataSource = [];
    let dataRow = {};
    let hash;
    let tableTitle;
    let dataTable = [];
    let customFieldsList = parseToList(customFields);
    let headerTable;

    dataSource = dataPath === '$..root' ? [data] : jp.query(data, dataPath);
    tableTitle = dataPath.replace(/^\$../, '');
    console.log('convertToDataTable::dataSource', dataSource, data);
    headerTable = customFieldsList ? getCustomHeaderTable(dataSource[0][0], customFieldsList) : getHeaderTable(dataSource[0][0]);

    dataSource[0].forEach((dataSourceRow, i) => {
        dataRow = Object.constructor();
        hash = md5(new Date() + Math.random() + i);

        dataSourceRow = Object.assign(dataSourceRow, {hash: hash});
    });

    dataSource[0].forEach((dataSourceRow, i) => {
        dataRow ={};

        for (let key in dataSourceRow) {
            if(isVisibleField(headerTable, key) || key == 'hash') {
                if(typeof dataSourceRow[key] === 'string' && dataSourceRow[key].length > columnTextLength && key != 'hash') {
                    dataRow[key] = dataSourceRow[key].substr(0, columnTextLength) + '...';

                } else {
                    dataRow[key] = dataSourceRow[key];
                }
            }
        }

        dataTable[dataTable.length] = dataRow;
    });

    isEqualHashes(dataSource[0][0].hash, dataTable[0].hash);

    // console.log('function convertToDataTable() { headerTable', headerTable);

    return {
        originalDataSource: dataSource[0],
        dataSource: dataTable,
        tableTitle: tableTitle,
        headerTable: headerTable,
        dataTable: showPageRows(dataTable, {pageNumber: PAGE_NUMBER, rowSize: rowsPerPage}),
        dataLength: dataSource[0].length,
        rowsPerPage: rowsPerPage,
        pageNumber: PAGE_NUMBER,
        selectedRows: new Array(),
        selectedRowsData: new Map(),
        selectedRowsHash: new Set(),
        filterValue: '',
        isFiltered: false,
        isSorted: false,
        isAllRowsSelected: false,
        toUnselectAll: false,
        updatedHash: md5(Date.now())
    };
}

export default function (state = {}, action) {
    switch (action.type) {
        case SET_INIT_STATE:
            return { ...state, sourceListOrigin: null};

        case SET_DATA_PATH:
            return { ...state, dataPath: action.payload};

        case SET_DATA_COLUMN_TEXT_LENGTH:
            return { ...state, columnTextLength: action.payload};

        case SET_DATA_CUSTOM_FIELDS:
            return { ...state, customFields: action.payload};

        case SET_ROWS_PER_PAGE:
            return { ...state, rowsPerPage: action.payload };

        case GET_SOURCE_LIST:
            return { ...state, sourceListOrigin: convertToDataTable(action.payload.data, state.dataPath, state.rowsPerPage, state.columnTextLength, state.customFields)};

        case SET_SOURCE_LIST:
            console.log('case SET_SOURCE_LIST::', action.payload);

            return {
                ...state,
                sourceListOrigin:
                    action.payload.source
                    ? convertToDataTable(
                        action.payload.source,
                        action.payload.dataPath,
                        action.payload.rowsPerPage,
                        action.payload.columnTextLength,
                        action.payload.customFields
                    )
                    : null
            };
    }

    return state
}
