import axios from 'axios';

import { GET_SOURCE_LIST } from '../constants/CONSTANTS';

export function dataFetchAction(url, dataProviderFunction) {
    let sourceList = null;

    if(dataProviderFunction) {
        console.log('%c fetch data using dataProviderFunction', 'color: #F7819F; display: block;');
        let sourceList = new Promise(function(resolve, reject) {
                let response = window[dataProviderFunction]();

                if(typeof response === 'object') {
                    resolve(response);
                } else {
                    axios.get(response).then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        window.showError(error);
                    });
                }
        });

        return sourceList.then(result => {
            return {
                type: GET_SOURCE_LIST,
                payload: {data: result},
            }
        });
    } else {
        console.log('%c fetch data using url', 'color: #F7819F; display: block;');
        sourceList = axios.get(url, dataProviderFunction);
    }

    return {
        type: GET_SOURCE_LIST,
        payload: sourceList,
    }
}

