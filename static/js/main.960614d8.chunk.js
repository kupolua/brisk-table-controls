(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{313:function(e,t,a){e.exports=a(685)},685:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),r=a(24),i=a.n(r),l=a(86),n=a(38),c=a(282),u=a.n(c),d=a(26),h=a(190),p=a.n(h),g="SET_DATA_PATH",w="SET_DATA_CUSTOM_FIELDS",f="SET_INIT_STATE",m="GET_SOURCE_LIST",S="SET_SOURCE_LIST",b="INIT_DATA_HANDLER_STATE",L="SORT_DATA",v="desc",R="FILTER_DATA",y=26,E=5,O=[5,10],T="SHOW_PAGE_ROWS",D=1,C="SELECT_ROW_DATA",j="SET_ROWS_PER_PAGE",A="SET_SELECTED_ROWS",P="SET_SELECTED_ROW",k="SET_ALL_SELECTED_ROWS",H="GET_SELECTED_ROWS_DATA",N="SET_DATA_COLUMN_TEXT_LENGTH",x=a(136);function z(e,t){var a={};for(var s in t){var o=t[s];for(var r in o)e==o[r]&&(a={key:o.fieldName,label:o.columnName,sortable:!0,className:"important-column",style:{width:Math.ceil(o.columnWidth)}})}return a}function F(e,t){var a=(t.pageNumber-1)*t.rowSize,s=a+t.rowSize;return e.slice(a,s)}function _(e,t){var a=!1;return e.map(function(e){e.key==t&&(a=!0)}),a}function I(e){var t,a,s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$..teachers",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,l=arguments.length>4?arguments[4]:void 0,n=[],c={},u=[],d=function(e){if(e)return"object"===typeof e?e:JSON.parse(e)}(l);return n=x.query(e,o),a=o.replace(/^\$../,""),s=d?function(e,t){var a=[];for(var s in e){var o=z(s,t);Object.keys(o).length&&(a[a.length]=o)}return a}(n[0][0],d):function(e){var t=[],a=0;for(var s in e)t[a]={key:s,label:s,sortable:!0},a++;return t}(n[0][0]),n[0].forEach(function(e,a){c=Object.constructor(),t=p()(new Date+Math.random()+a),e=Object.assign(e,{hash:t})}),n[0].forEach(function(e,t){for(var a in c={},e)(_(s,a)||"hash"==a)&&("string"===typeof e[a]&&e[a].length>i&&"hash"!=a?c[a]=e[a].substr(0,i)+"...":c[a]=e[a]);u[u.length]=c}),function(e,t){var a=!1;e==t?(console.log("%c hashes are equal","color: green; display: block;"),a=!0):console.log("%c hashes are not equal","color: red; display: block;")}(n[0][0].hash,u[0].hash),console.log("function convertToDataTable() { headerTable",s),{originalDataSource:n[0],dataSource:u,tableTitle:a,headerTable:s,dataTable:F(u,{pageNumber:D,rowSize:r}),dataLength:n[0].length,rowsPerPage:r,pageNumber:D,selectedRows:new Array,selectedRowsData:new Map,selectedRowsHash:new Set,filterValue:"",isFiltered:!1,isSorted:!1,isAllRowsSelected:!1,toUnselectAll:!1,updatedHash:p()(Date.now())}}var V=a(40),W=a.n(V);function U(e,t){var a=[];return t.forEach(function(t,s){e.sourceList.selectedRowsHash.has(t.hash)&&(a[a.length]=s)}),a}function B(e,t){var a,s;return a=W.a.sortBy(e.sourceList.filteredData||e.sourceList.dataSource,[t.columnName]),t.sortOrder===v&&(a=W.a.reverse(a)),s=M(a,{pageNumber:a.length<t.rowSize?1:t.pageNumber,rowSize:t.rowSize}),{originalDataSource:e.sourceList.originalDataSource,dataSource:e.sourceList.dataSource,headerTable:e.sourceList.headerTable,sortedData:a,sortOptions:t,filteredData:e.sourceList.filteredData,filterValue:e.sourceList.filterValue,isFiltered:e.sourceList.isFiltered,isSorted:!0,isAllRowsSelected:e.sourceList.isAllRowsSelected,dataTable:s,dataLength:a.length,rowsPerPage:e.sourceList.rowsPerPage,pageNumber:t.pageNumber,selectedRows:U(e,s),selectedRowsData:e.sourceList.selectedRowsData,selectedRowsHash:e.sourceList.selectedRowsHash}}function M(e,t){var a=(t.pageNumber-1)*t.rowSize,s=a+t.rowSize;return e.slice(a,s)}function q(e,t){var a;return e.sourceList.originalDataSource.map(function(e){e.hash!=t||(a=e)}),a}var G=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(d.a)({},t,{sourceList:a.payload});case L:var s=B(t,a.payload);return Object(d.a)({},t,{sourceList:s});case R:var o=function(e,t){var a,s,o,r,i,l,n=new RegExp(t,"i");if(t.length<1)if(e.sourceList.filteredData=null,l=!0,t=void 0,a="",i=!1,e.sourceList.sortOptions){var c=B(e,e.sourceList.sortOptions);o=c.sortedData,s=U(e,r=c.dataTable)}else e.sourceList.isFiltered,s=U(e,r=M(e.sourceList.dataSource,{pageNumber:e.sourceList.pageNumber,rowSize:e.sourceList.rowsPerPage}));else i=!0,s=U(e,r=M(a=W.a.filter(e.sourceList.sortedData||e.sourceList.dataSource,function(e){for(var t in e){if(!e[t])return;if(e[t].toString().match(n)&&"hash"!=t)return!0}}),{pageNumber:1,rowSize:e.sourceList.rowsPerPage}));return{originalDataSource:e.sourceList.originalDataSource,dataSource:e.sourceList.dataSource,headerTable:e.sourceList.headerTable,sortedData:o||e.sourceList.sortedData,sortOptions:e.sourceList.sortOptions,filteredData:a,filterValue:t,isFiltered:i,isSorted:e.sourceList.isSorted,dataTable:r,dataLength:a?a.length:e.sourceList.dataSource.length,rowsPerPage:e.sourceList.rowsPerPage,pageNumber:e.sourceList.pageNumber,selectedRows:s,selectedRowsData:e.sourceList.selectedRowsData,selectedRowsHash:e.sourceList.selectedRowsHash,isAllRowsSelected:e.sourceList.isAllRowsSelected,toUnselectAll:l}}(t,a.payload);return Object(d.a)({},t,{sourceList:o});case T:var r=M(t.sourceList.sortedData||t.sourceList.filteredData||t.sourceList.dataSource,a.payload);return Object(d.a)({},t,{sourceList:{originalDataSource:t.sourceList.originalDataSource,dataSource:t.sourceList.dataSource,headerTable:t.sourceList.headerTable,sortedData:t.sourceList.sortedData,sortOptions:t.sourceList.sortOptions,filteredData:t.sourceList.filteredData,filterValue:t.sourceList.filterValue,isAllRowsSelected:t.sourceList.isAllRowsSelected,isFiltered:t.sourceList.isFiltered,isSorted:t.sourceList.isSorted,dataTable:r,dataLength:(e=t.sourceList,e.filteredData?e.filteredData.length:e.sortedData?e.sortedData.length:e.dataSource?e.dataSource.length:void 0),rowsPerPage:a.payload.rowSize,rowSizeList:a.payload.rowSizeList,pageNumber:a.payload.pageNumber,selectedRows:U(t,r),selectedRowsData:t.sourceList.selectedRowsData,selectedRowsHash:t.sourceList.selectedRowsHash}});case A:return function(e,t){if("all"!==t.rowsList){if("none"===t.rowsList)return e.sourceList.isFiltered?e.sourceList.filteredData.forEach(function(t){e.sourceList.selectedRowsHash.delete(t.hash)}):e.sourceList.selectedRowsHash=new Set,e.sourceList.selectedRows=[],e.sourceList.isAllRowsSelected=!1,e.sourceList.toUnselectAll=t.toUnselectAll,void(e.sourceList.selectedRowsData=new Map);e.sourceList.toUnselectAll=t.toUnselectAll,t.rowsList.forEach(function(a){var s=e.sourceList.dataTable;a>=s.length||(e.sourceList.selectedRowsHash.has(s[a].hash)?(e.sourceList.selectedRowsHash.delete(s[a].hash),e.sourceList.selectedRowsData.delete(s[a].hash),e.sourceList.selectedRows=W.a.differenceWith(e.sourceList.selectedRows,t.rowsList,W.a.isEqual)):(e.sourceList.selectedRowsHash.add(s[a].hash),e.sourceList.selectedRowsData.set(s[a].hash,q(e,s[a].hash)),e.sourceList.selectedRows[e.sourceList.selectedRows.length]=t.rowsList[0]))})}}(t,a.payload),Object(d.a)({},t);case P:return function(e,t){var a=e.sourceList.dataTable[t].hash;e.sourceList.selectedRows=t,e.sourceList.selectedRowsData=new Map,e.sourceList.selectedRowsData.set(a,q(e,a))}(t,a.payload),Object(d.a)({},t);case k:return function(e,t){"all"===t&&(e.sourceList.isAllRowsSelected=!0,e.sourceList.isFiltered?e.sourceList.filteredData.forEach(function(t,a){e.sourceList.selectedRows[a]=a,e.sourceList.selectedRowsHash.add(t.hash),e.sourceList.selectedRowsData.set(t.hash,q(e,t.hash))}):e.sourceList.isSorted?e.sourceList.sortedData.forEach(function(t,a){e.sourceList.selectedRows[a]=a,e.sourceList.selectedRowsHash.add(t.hash),e.sourceList.selectedRowsData.set(t.hash,q(e,t.hash))}):e.sourceList.dataSource.forEach(function(t,a){e.sourceList.selectedRows[a]=a,e.sourceList.selectedRowsHash.add(t.hash),e.sourceList.selectedRowsData.set(t.hash,q(e,t.hash))}))}(t,a.payload),Object(d.a)({},t);case H:var i=Array.from(t.sourceList.selectedRowsData.values());return window[a.payload].setSelectedRowsData(i),Object(d.a)({},t)}return t},$=Object(n.c)({dataSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)({},e,{sourceListOrigin:null});case g:return Object(d.a)({},e,{dataPath:t.payload});case N:return Object(d.a)({},e,{columnTextLength:t.payload});case w:return Object(d.a)({},e,{customFields:t.payload});case j:return Object(d.a)({},e,{rowsPerPage:t.payload});case m:return Object(d.a)({},e,{sourceListOrigin:I(t.payload.data,e.dataPath,e.rowsPerPage,e.columnTextLength,e.customFields)});case S:return console.log("case SET_SOURCE_LIST::",t.payload),Object(d.a)({},e,{sourceListOrigin:I(t.payload.source,t.payload.dataPath,t.payload.rowsPerPage,t.payload.columnTextLength,t.payload.customFields)})}return e},sourceList:G,sortData:G,filterData:G,showPageRows:G,selectedRows:G,selectedRow:G,selectedRowsData:G,selectRowData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return window[t.payload.hook](t.payload.row),Object(d.a)({},e)}return e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(58),X=a(59),K=a(87),Q=a(84),Y=a(88),Z=a(130),ee=a(25),te=a(699),ae=a(695),se=a(696),oe=a(701),re=a(108),ie=a(698),le=a(193),ne=a(697),ce=a(686),ue=a(302),de=a(700),he=a(104),pe=a.n(he);function ge(e){return{type:S,payload:e}}var we=a(136),fe=(window.BriskTableLogger=function(){var e=[];return{logs:function(){return e},DEBUG:function(t){e.push({level:"DEBUG",message:t})},INFO:function(t){e.push({level:"INFO",message:t})},WARN:function(t){e.push({level:"WARN",message:t})},ERROR:function(t){e.push({level:"ERROR",message:t})},reset:function(){return e=[]}}}(),function(e){function t(e){var a;return Object(J.a)(this,t),(a=Object(K.a)(this,Object(Q.a)(t).call(this,e))).state={maxLength:50,minLength:10,url:"https://raw.githubusercontent.com/kupolua/web-presentation/master/json/db.json",json:void 0,source:void 0,path:void 0,paths:[],error:void 0,loader:!1,activeIndex:0,isConfigurator:!1,dropdownText:"Select path",columnTitles:[],customFields:{},isRefresh:!1},a.fetchData=a.fetchData.bind(Object(ee.a)(Object(ee.a)(a))),a.displayConfigurator=a.displayConfigurator.bind(Object(ee.a)(Object(ee.a)(a))),a.renderBody=a.renderBody.bind(Object(ee.a)(Object(ee.a)(a))),a.createTable=a.createTable.bind(Object(ee.a)(Object(ee.a)(a))),a}return Object(Y.a)(t,e),Object(X.a)(t,[{key:"fetchData",value:function(){var e=this;if(this.setState({error:void 0,loader:!0,dropdownText:"Select path"}),0===this.state.activeIndex||this.state.url){if(!this.state.url)return void this.setState({error:"Empty url!",paths:[],loader:!1});var t=this.state.url,a=this;new Promise(function(e,s){pe.a.get(t).then(function(t){e(t)}).catch(function(e){a.setState({error:e.toString(),paths:[],loader:!1})})},this).then(function(t){var a=[];Object.keys(t.data).map(function(e){a.push({key:e,text:e,value:e})}),e.setState({paths:a,loader:!1,source:t.data})})}else{if(!this.state.json)return void this.setState({error:"Empty json!",paths:[],loader:!1});try{var s=JSON.parse(this.state.json),o=[];Object.keys(s).map(function(e){o.push({key:e,text:e,value:e})}),this.setState({paths:o,loader:!1,source:s})}catch(r){this.setState({error:r.toString(),paths:[],loader:!1})}}}},{key:"displayConfigurator",value:function(e){var t=we.query(this.state.source,e),a=Object.keys(t[0][0]),s={};a.map(function(e){s=Object(d.a)({},s,Object(Z.a)({},e,{fieldName:e,columnName:e,columnWidth:10,isColumnVisible:!0}))}),this.setState({dropdownText:e,path:"$.."+e,isConfigurator:!0,columnTitles:a,customFields:s})}},{key:"createTable",value:function(){var e=Object.values(this.state.customFields).filter(function(e){return e.isColumnVisible});console.log("createTable() {",e),this.setState({isRefresh:!0}),this.props.setSourceList({source:this.state.source,dataPath:this.state.path,rowsPerPage:10,columnTextLength:this.state.maxLength,customFields:e})}},{key:"renderBody",value:function(){var e=this;return this.state.columnTitles.map(function(t,a){return o.a.createElement(te.a.Row,{key:a},o.a.createElement(te.a.Cell,null," ",t," "),o.a.createElement(te.a.Cell,null,o.a.createElement(ae.a,{placeholder:"column name",onChange:function(a,s){var o=s.value,r=e.state.customFields;r[t].columnName=o,e.setState({customFields:r})}})),o.a.createElement(te.a.Cell,null,o.a.createElement(ae.a,{placeholder:"width",onChange:function(a,s){var o=s.value,r=e.state.customFields;r[t].columnWidth=o,e.setState({customFields:r})}})),o.a.createElement(te.a.Cell,null,o.a.createElement(se.a,{checked:e.state.customFields[t].isColumnVisible,toggle:!0,onChange:function(a,s){var o=s.checked,r=e.state.customFields;r[t].isColumnVisible=o,e.setState({customFields:r})}})),o.a.createElement(te.a.Cell,null," hide "))})}},{key:"render",value:function(){var e=this,t=[{menuItem:"Input url",render:function(){return o.a.createElement(oe.a.Pane,null,o.a.createElement(ae.a,{fluid:!0,placeholder:"url",onChange:function(t,a){var s=a.value;return e.setState({url:s})}}),e.state.error?o.a.createElement(re.a,{basic:!0,color:"red",pointing:!0},e.state.error):null)}},{menuItem:"Input json",render:function(){return o.a.createElement(oe.a.Pane,null,o.a.createElement(ie.a,null,o.a.createElement(ie.a.TextArea,{rows:"10",placeholder:"Input json",onChange:function(t,a){var s=a.value;return e.setState({json:s})}}),e.state.error?o.a.createElement(re.a,{basic:!0,color:"red",pointing:!0},e.state.error):null))}}];return o.a.createElement("div",{style:{flexDirection:"column",justifyContent:"center",alignItem:"center",marginTop:20,marginBottom:30}},o.a.createElement(le.a,null,o.a.createElement(oe.a,{panes:t,onTabChange:function(t,a){return e.setState({url:void 0,json:void 0,error:void 0,paths:[],activeIndex:a.activeIndex,isConfigurator:!1,dropdownText:"Select path",columnTitles:[],isRefresh:!1})}}),o.a.createElement(ne.a,{active:this.state.loader})),o.a.createElement("div",{style:{margin:10}},o.a.createElement(ce.a,{basic:!0,color:"green",floated:"right",onClick:function(){return e.fetchData()}},"Fetch data")),o.a.createElement("div",{style:{marginTop:90}},o.a.createElement(ue.a,{compact:!0,borderless:!0},o.a.createElement(ue.a.Item,{as:"a"},o.a.createElement(de.a,{button:!0,className:"icon",floating:!0,labeled:!0,icon:"world",options:this.state.paths,search:!0,text:this.state.dropdownText,onChange:function(t,a){var s=a.value;return e.displayConfigurator(s)}}),this.state.paths.length>0?o.a.createElement(re.a,{color:"red",floating:!0},this.state.paths.length):null))),o.a.createElement("div",{style:{flexDirection:"column",justifyContent:"center",alignItem:"center",marginTop:20}},o.a.createElement("h4",null,"Configure"),o.a.createElement(ae.a,{label:"max length",placeholder:this.state.maxLength,onChange:function(t,a){var s=a.value;return e.setState({maxLength:s})}})),o.a.createElement("div",{style:{marginTop:20}},o.a.createElement(ae.a,{label:"min length",placeholder:this.state.minLength,onChange:function(t,a){var s=a.value;return e.setState({minLength:s})}})),o.a.createElement("div",{style:{marginTop:20}},this.state.isConfigurator?o.a.createElement("div",null,o.a.createElement(te.a,{celled:!0,striped:!0},o.a.createElement(te.a.Header,null,o.a.createElement(te.a.Row,null,o.a.createElement(te.a.HeaderCell,{colSpan:"5"},"Columns"))),o.a.createElement(te.a.Body,null,this.renderBody())),o.a.createElement("div",{style:{margin:10}},o.a.createElement(ce.a,{basic:!0,color:"green",floated:"right",onClick:function(){return e.createTable()}},this.state.isRefresh?"Refresh table":"Create table"))):null))}}]),t}(s.Component));var me=Object(l.b)(function(e){return{dataSource:e.dataSource}},function(e){return Object(n.b)({setSourceList:ge},e)})(fe),Se=a(83),be=a(187),Le=a.n(be),ve=a(298),Re=a.n(ve),ye=a(299),Ee=a(300),Oe=a.n(Ee);function Te(e){return{type:g,payload:e}}function De(e){return{type:N,payload:e}}function Ce(e){return{type:w,payload:e}}function je(e,t){var a=null;return t?(console.log("%c fetch data using dataProviderFunction","color: #F7819F; display: block;"),new Promise(function(e,a){var s=window[t]();"object"===typeof s?e(s):pe.a.get(s).then(function(t){e(t)}).catch(function(e){window.showError(e)})}).then(function(e){return{type:m,payload:{data:e}}})):(console.log("%c fetch data using url","color: #F7819F; display: block;"),a=pe.a.get(e,t),{type:m,payload:a})}function Ae(e){return{type:f,payload:e}}function Pe(e){return{type:b,payload:e}}function ke(e){return{type:L,payload:e}}function He(e){return{type:R,payload:e}}function Ne(e){return{type:T,payload:e}}function xe(e){return{type:C,payload:e}}function ze(e){return{type:k,payload:e}}function Fe(e){return{type:j,payload:e}}function _e(e){return{type:A,payload:e}}function Ie(e){return{type:P,payload:e}}function Ve(e){return{type:H,payload:e}}var We={container:{textAlign:"center"},component:{margin:"10px 5px"},titleStyle:{fontSize:16,color:Se.deepOrange500},footerToolbarStyle:{padding:"0 100px"},tableStyle:{tableLayout:"auto"},tableBodyStyle:{overflowX:"auto"},tableWrapperStyle:{padding:5}},Ue=Le()({palette:{accent1Color:Se.deepOrange500},tableHeaderColumn:{height:30},style:{tableRow:{height:24}},tableHeader:{height:10}}),Be=function(e){function t(e){var a;return Object(J.a)(this,t),a=Object(K.a)(this,Object(Q.a)(t).call(this,e)),console.log("constructor(props) {"),a.handleSortOrderChange=a.handleSortOrderChange.bind(Object(ee.a)(Object(ee.a)(a))),a.handleFilterValueChange=a.handleFilterValueChange.bind(Object(ee.a)(Object(ee.a)(a))),a.handleRowSizeChange=a.handleRowSizeChange.bind(Object(ee.a)(Object(ee.a)(a))),a.handleRowSelection=a.handleRowSelection.bind(Object(ee.a)(Object(ee.a)(a))),a.handlePreviousPageClick=a.handlePreviousPageClick.bind(Object(ee.a)(Object(ee.a)(a))),a.handleNextPageClick=a.handleNextPageClick.bind(Object(ee.a)(Object(ee.a)(a))),a.state={columns:[],data:[],rowSize:E,rowSizeList:O,rowHeight:y,multiSelectable:!0,showCheckboxes:!0,selectedRows:[],page:D,filterValue:window.location.search.match(/jsontablefilter=/)?window.location.search.match(/jsontablefilter=/).input.replace(/&.*$/i,"").replace(/^.*=/,""):"",isFiltered:!1,isAllRowsSelected:!1,toUnselectAll:!1,updatedHash:void 0},a}return Object(Y.a)(t,e),Object(X.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.dataSource.sourceListOrigin)return!e.sourceList.sourceList||this.state.updatedHash&&this.state.updatedHash!==e.dataSource.sourceListOrigin.updatedHash?(console.log("initDataHandlerState, headerTable"),this.props.initDataHandlerState(e.dataSource.sourceListOrigin),void this.setState({updatedHash:e.dataSource.sourceListOrigin.updatedHash})):void this.setState({tableTitle:e.sourceList.sourceList.tableTitle,columns:e.sourceList.sourceList.headerTable,originalDataSource:e.sourceList.sourceList.originalDataSource,data:e.sourceList.sourceList.dataTable,dataLength:e.sourceList.sourceList.dataLength,page:e.sourceList.sourceList.page||e.sourceList.sourceList.pageNumber,rowSize:e.sourceList.sourceList.rowSize||e.sourceList.sourceList.rowsPerPage,selectedRows:e.sourceList.sourceList.selectedRows,filterValue:e.sourceList.sourceList.filterValue,isAllRowsSelected:e.sourceList.sourceList.isAllRowsSelected,toUnselectAll:e.sourceList.sourceList.toUnselectAll,selectedRowsHash:e.sourceList.sourceList.selectedRowsHash})}},{key:"handleSortOrderChange",value:function(e,t){this.props.sortData({columnName:e,sortOrder:t,pageNumber:this.state.page,rowSize:this.state.rowSize})}},{key:"handleFilterValueChange",value:function(e){this.props.filterData(e)}},{key:"handleRowSizeChange",value:function(e,t){var a=Math.ceil(this.state.data.length/t),s=this.state.page>a?a:this.state.page;this.props.showPageRows({pageNumber:s,rowSize:t,rowSizeList:this.state.rowSizeList}),this.setState({page:s,rowSize:t,rowSizeList:this.state.rowSizeList})}},{key:"handleRowSelection",value:function(e){var t,a,s=this;if("all"===e)return this.props.setAllSelectedRows(e),void(this.state.isAllRowsSelected=!0);if("none"===e)return this.props.setSelectedRows({rowsList:e,isAllRowsSelected:this.state.isAllRowsSelected,selectedRowsHash:this.state.selectedRowsHash,toUnselectAll:!0}),void(e=new Array);(this.state.selectedRows&&(t=this.state.selectedRows.length>e.length?[W.a.differenceWith(this.state.selectedRows,e,W.a.isEqual)[0]]:W.a.differenceWith(e,this.state.selectedRows,W.a.isEqual)),this.props.dataHook)&&(this.state.originalDataSource.map(function(e){e.hash==s.state.data[t].hash&&(a=e)}),this.props.selectRowData({row:a,hook:this.props.dataHook}));this.state.showCheckboxes?this.props.setSelectedRows({dataTable:this.state.data,pageNumber:this.state.page,rowsList:t,toUnselectAll:!1}):this.props.setSelectedRow(e.length>0?e:this.state.selectedRows)}},{key:"handlePreviousPageClick",value:function(){var e=this.state.page-1;this.props.showPageRows({pageNumber:e,rowSize:this.state.rowSize,rowSizeList:this.state.rowSizeList}),this.setState({page:e})}},{key:"handleNextPageClick",value:function(){var e=this.state.page+1;this.props.showPageRows({pageNumber:e,rowSize:this.state.rowSize,rowSizeList:this.state.rowSizeList}),this.setState({page:e})}},{key:"render",value:function(){return this.props.dataSource.sourceListOrigin?(console.log("%c render brisk table","color: orange; display: block;"),console.log("render() {, this.state.columns",this.state.columns),o.a.createElement(Re.a,{muiTheme:Ue},o.a.createElement("h2",null,"Table"),o.a.createElement("div",{style:We.container},o.a.createElement("div",{style:We.component},o.a.createElement(ye.Card,{style:{margin:12}},o.a.createElement(Oe.a,{title:this.state.tableTitle,height:"auto",selectable:!0,enableSelectAll:this.state.showCheckboxes,showRowHover:!0,columns:this.state.columns,data:this.state.data,selectedRows:this.state.selectedRows,isAllRowsSelected:this.state.isAllRowsSelected,page:this.state.page,filterValue:this.state.filterValue,tableRowStyle:{height:this.state.rowHeight},tableRowColumnStyle:{height:this.state.rowHeight},tableHeaderColumnStyle:{headerToolbar:{height:24},toolbarTitle:{lineHeight:"40px"}},tableHeaderStyle:{headerToolbar:{height:24},toolbarTitle:{lineHeight:"40px"}},rowSize:this.state.rowSize,rowSizeList:this.state.rowSizeList,showCheckboxes:this.state.showCheckboxes,multiSelectable:this.state.showCheckboxes,showHeaderToolbar:!0,showFooterToolbar:!0,onRowSizeChange:this.handleRowSizeChange,onRowSelection:this.handleRowSelection,onNextPageClick:this.handleNextPageClick,onPreviousPageClick:this.handlePreviousPageClick,onFilterValueChange:this.handleFilterValueChange,onSortOrderChange:this.handleSortOrderChange,count:this.state.dataLength})))))):o.a.createElement("div",null,"Brisk Table waiting for data ...")}}]),t}(s.Component);var Me=Object(l.b)(function(e){return{dataSource:e.dataSource,sourceList:e.sourceList,selectedRows:e.selectedRows,selectedRowsData:e.selectedRowsData}},function(e){return Object(n.b)({setDataPath:Te,setDataColumnTextLength:De,setDataCustomFields:Ce,dataFetchAction:je,setInitState:Ae,initDataHandlerState:Pe,sortData:ke,filterData:He,showPageRows:Ne,selectRowData:xe,setRowsPerPage:Fe,setSelectedRows:_e,setSelectedRow:Ie,setAllSelectedRows:ze,getSelectedRowsData:Ve},e)})(Be),qe={container:{textAlign:"left",margin:30}},Ge=function(e){function t(){return Object(J.a)(this,t),Object(K.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:qe.container},o.a.createElement("div",null,o.a.createElement(me,null)),o.a.createElement("div",{style:{marginTop:90}},o.a.createElement(Me,null)),o.a.createElement("div",{style:{marginTop:90}},"version 0.1.1"))}}]),t}(s.Component),$e=Object(n.a)(u.a)(n.d);i.a.render(o.a.createElement(l.a,{store:$e($)},o.a.createElement(Ge,null)),document.getElementById("brisk-table")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[313,1,2]]]);
//# sourceMappingURL=main.960614d8.chunk.js.map