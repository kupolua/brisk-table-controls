(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{313:function(e,t,a){e.exports=a(685)},685:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),r=a(25),i=a.n(r),l=a(86),n=a(38),c=a(282),u=a.n(c),d=a(26),h=a(190),g=a.n(h),p="SET_DATA_PATH",f="SET_DATA_CUSTOM_FIELDS",m="SET_INIT_STATE",w="GET_SOURCE_LIST",S="SET_SOURCE_LIST",b="INIT_DATA_HANDLER_STATE",L="SORT_DATA",v="desc",y="FILTER_DATA",R=26,E=5,O=[5,10],T="SHOW_PAGE_ROWS",C=1,j="SELECT_ROW_DATA",D="SET_ROWS_PER_PAGE",P="SET_SELECTED_ROWS",A="SET_SELECTED_ROW",k="SET_ALL_SELECTED_ROWS",N="GET_SELECTED_ROWS_DATA",F="SET_DATA_COLUMN_TEXT_LENGTH",x=a(136);function H(e,t){var a={};for(var s in t){var o=t[s];for(var r in o)e==o[r]&&(a={key:o.fieldName,label:o.columnName,sortable:!0,className:"important-column",style:{width:Math.ceil(o.columnWidth)}})}return a}function z(e,t){var a=(t.pageNumber-1)*t.rowSize,s=a+t.rowSize;return e.slice(a,s)}function _(e,t){var a=!1;return e.map(function(e){e.key==t&&(a=!0)}),a}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$..teachers",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,o=arguments.length>4?arguments[4]:void 0;console.log("convertToDataTable",e,t,typeof a,a,typeof s,s,o);var r,i,l,n=[],c={},u=[],d=function(e){if(e)return"object"===typeof e?e:JSON.parse(e)}(o);return n="$..root"===t?[e]:x.query(e,t),i=t.replace(/^\$../,""),console.log("convertToDataTable::dataSource",n,e),l=d?function(e,t){var a=[];for(var s in e){var o=H(s,t);Object.keys(o).length&&(a[a.length]=o)}return a}(n[0][0],d):function(e){var t=[],a=0;for(var s in e)t[a]={key:s,label:s,sortable:!0},a++;return t}(n[0][0]),n[0].forEach(function(e,t){c=Object.constructor(),r=g()(new Date+Math.random()+t),e=Object.assign(e,{hash:r})}),n[0].forEach(function(e,t){for(var a in c={},e)(_(l,a)||"hash"==a)&&("string"===typeof e[a]&&e[a].length>s&&"hash"!=a?c[a]=e[a].substr(0,s)+"...":c[a]=e[a]);u[u.length]=c}),function(e,t){var a=!1;e==t?(console.log("%c hashes are equal","color: green; display: block;"),a=!0):console.log("%c hashes are not equal","color: red; display: block;")}(n[0][0].hash,u[0].hash),{originalDataSource:n[0],dataSource:u,tableTitle:i,headerTable:l,dataTable:z(u,{pageNumber:C,rowSize:a}),dataLength:n[0].length,rowsPerPage:a,pageNumber:C,selectedRows:new Array,selectedRowsData:new Map,selectedRowsHash:new Set,filterValue:"",isFiltered:!1,isSorted:!1,isAllRowsSelected:!1,toUnselectAll:!1,updatedHash:g()(Date.now())}}var V=a(40),W=a.n(V);function B(e,t){var a=[];return t.forEach(function(t,s){e.sourceList.selectedRowsHash.has(t.hash)&&(a[a.length]=s)}),a}function U(e,t){var a,s;return a=W.a.sortBy(e.sourceList.filteredData||e.sourceList.dataSource,[t.columnName]),t.sortOrder===v&&(a=W.a.reverse(a)),s=J(a,{pageNumber:a.length<t.rowSize?1:t.pageNumber,rowSize:t.rowSize}),{originalDataSource:e.sourceList.originalDataSource,dataSource:e.sourceList.dataSource,headerTable:e.sourceList.headerTable,sortedData:a,sortOptions:t,filteredData:e.sourceList.filteredData,filterValue:e.sourceList.filterValue,isFiltered:e.sourceList.isFiltered,isSorted:!0,isAllRowsSelected:e.sourceList.isAllRowsSelected,dataTable:s,dataLength:a.length,rowsPerPage:e.sourceList.rowsPerPage,pageNumber:t.pageNumber,selectedRows:B(e,s),selectedRowsData:e.sourceList.selectedRowsData,selectedRowsHash:e.sourceList.selectedRowsHash}}function J(e,t){var a=(t.pageNumber-1)*t.rowSize,s=a+t.rowSize;return e.slice(a,s)}function M(e,t){var a;return e.sourceList.originalDataSource.map(function(e){e.hash!=t||(a=e)}),a}var q=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(d.a)({},t,{sourceList:a.payload});case L:var s=U(t,a.payload);return Object(d.a)({},t,{sourceList:s});case y:var o=function(e,t){var a,s,o,r,i,l,n=new RegExp(t,"i");if(t.length<1)if(e.sourceList.filteredData=null,l=!0,t=void 0,a="",i=!1,e.sourceList.sortOptions){var c=U(e,e.sourceList.sortOptions);o=c.sortedData,s=B(e,r=c.dataTable)}else e.sourceList.isFiltered,s=B(e,r=J(e.sourceList.dataSource,{pageNumber:e.sourceList.pageNumber,rowSize:e.sourceList.rowsPerPage}));else i=!0,s=B(e,r=J(a=W.a.filter(e.sourceList.sortedData||e.sourceList.dataSource,function(e){for(var t in e){if(!e[t])return;if(e[t].toString().match(n)&&"hash"!=t)return!0}}),{pageNumber:1,rowSize:e.sourceList.rowsPerPage}));return{originalDataSource:e.sourceList.originalDataSource,dataSource:e.sourceList.dataSource,headerTable:e.sourceList.headerTable,sortedData:o||e.sourceList.sortedData,sortOptions:e.sourceList.sortOptions,filteredData:a,filterValue:t,isFiltered:i,isSorted:e.sourceList.isSorted,dataTable:r,dataLength:a?a.length:e.sourceList.dataSource.length,rowsPerPage:e.sourceList.rowsPerPage,pageNumber:e.sourceList.pageNumber,selectedRows:s,selectedRowsData:e.sourceList.selectedRowsData,selectedRowsHash:e.sourceList.selectedRowsHash,isAllRowsSelected:e.sourceList.isAllRowsSelected,toUnselectAll:l}}(t,a.payload);return Object(d.a)({},t,{sourceList:o});case T:var r=J(t.sourceList.sortedData||t.sourceList.filteredData||t.sourceList.dataSource,a.payload);return Object(d.a)({},t,{sourceList:{originalDataSource:t.sourceList.originalDataSource,dataSource:t.sourceList.dataSource,headerTable:t.sourceList.headerTable,sortedData:t.sourceList.sortedData,sortOptions:t.sourceList.sortOptions,filteredData:t.sourceList.filteredData,filterValue:t.sourceList.filterValue,isAllRowsSelected:t.sourceList.isAllRowsSelected,isFiltered:t.sourceList.isFiltered,isSorted:t.sourceList.isSorted,dataTable:r,dataLength:(e=t.sourceList,e.filteredData?e.filteredData.length:e.sortedData?e.sortedData.length:e.dataSource?e.dataSource.length:void 0),rowsPerPage:a.payload.rowSize,rowSizeList:a.payload.rowSizeList,pageNumber:a.payload.pageNumber,selectedRows:B(t,r),selectedRowsData:t.sourceList.selectedRowsData,selectedRowsHash:t.sourceList.selectedRowsHash}});case P:return function(e,t){if("all"!==t.rowsList){if("none"===t.rowsList)return e.sourceList.isFiltered?e.sourceList.filteredData.forEach(function(t){e.sourceList.selectedRowsHash.delete(t.hash)}):e.sourceList.selectedRowsHash=new Set,e.sourceList.selectedRows=[],e.sourceList.isAllRowsSelected=!1,e.sourceList.toUnselectAll=t.toUnselectAll,void(e.sourceList.selectedRowsData=new Map);e.sourceList.toUnselectAll=t.toUnselectAll,t.rowsList.forEach(function(a){var s=e.sourceList.dataTable;a>=s.length||(e.sourceList.selectedRowsHash.has(s[a].hash)?(e.sourceList.selectedRowsHash.delete(s[a].hash),e.sourceList.selectedRowsData.delete(s[a].hash),e.sourceList.selectedRows=W.a.differenceWith(e.sourceList.selectedRows,t.rowsList,W.a.isEqual)):(e.sourceList.selectedRowsHash.add(s[a].hash),e.sourceList.selectedRowsData.set(s[a].hash,M(e,s[a].hash)),e.sourceList.selectedRows[e.sourceList.selectedRows.length]=t.rowsList[0]))})}}(t,a.payload),Object(d.a)({},t);case A:return function(e,t){var a=e.sourceList.dataTable[t].hash;e.sourceList.selectedRows=t,e.sourceList.selectedRowsData=new Map,e.sourceList.selectedRowsData.set(a,M(e,a))}(t,a.payload),Object(d.a)({},t);case k:return function(e,t){"all"===t&&(e.sourceList.isAllRowsSelected=!0,e.sourceList.isFiltered?e.sourceList.filteredData.forEach(function(t,a){e.sourceList.selectedRows[a]=a,e.sourceList.selectedRowsHash.add(t.hash),e.sourceList.selectedRowsData.set(t.hash,M(e,t.hash))}):e.sourceList.isSorted?e.sourceList.sortedData.forEach(function(t,a){e.sourceList.selectedRows[a]=a,e.sourceList.selectedRowsHash.add(t.hash),e.sourceList.selectedRowsData.set(t.hash,M(e,t.hash))}):e.sourceList.dataSource.forEach(function(t,a){e.sourceList.selectedRows[a]=a,e.sourceList.selectedRowsHash.add(t.hash),e.sourceList.selectedRowsData.set(t.hash,M(e,t.hash))}))}(t,a.payload),Object(d.a)({},t);case N:var i=Array.from(t.sourceList.selectedRowsData.values());return window[a.payload].setSelectedRowsData(i),Object(d.a)({},t)}return t},G=Object(n.c)({dataSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(d.a)({},e,{sourceListOrigin:null});case p:return Object(d.a)({},e,{dataPath:t.payload});case F:return Object(d.a)({},e,{columnTextLength:t.payload});case f:return Object(d.a)({},e,{customFields:t.payload});case D:return Object(d.a)({},e,{rowsPerPage:t.payload});case w:return Object(d.a)({},e,{sourceListOrigin:I(t.payload.data,e.dataPath,e.rowsPerPage,e.columnTextLength,e.customFields)});case S:return console.log("case SET_SOURCE_LIST::",t.payload),Object(d.a)({},e,{sourceListOrigin:t.payload.source?I(t.payload.source,t.payload.dataPath,t.payload.rowsPerPage,t.payload.columnTextLength,t.payload.customFields):null})}return e},sourceList:q,sortData:q,filterData:q,showPageRows:q,selectedRows:q,selectedRow:q,selectedRowsData:q,selectRowData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return window[t.payload.hook](t.payload.row),Object(d.a)({},e)}return e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(58),X=a(59),K=a(87),Q=a(84),Y=a(88),Z=a(130),ee=a(24),te=a(699),ae=a(695),se=a(696),oe=a(701),re=a(108),ie=a(698),le=a(193),ne=a(697),ce=a(686),ue=a(302),de=a(700),he=a(67),ge=a(104),pe=a.n(ge);function fe(e){return{type:S,payload:e}}var me=a(136),we=(window.BriskTableLogger=function(){var e=[];return{logs:function(){return e},DEBUG:function(t){e.push({level:"DEBUG",message:t})},INFO:function(t){e.push({level:"INFO",message:t})},WARN:function(t){e.push({level:"WARN",message:t})},ERROR:function(t){e.push({level:"ERROR",message:t})},reset:function(){return e=[]}}}(),function(e){function t(e){var a;return Object($.a)(this,t),(a=Object(K.a)(this,Object(Q.a)(t).call(this,e))).state={maxLength:50,minLength:10,url:void 0,json:void 0,source:void 0,path:void 0,jsonPaths:[],error:void 0,loader:!1,activeIndex:0,isConfigurator:!1,dropdownText:"Select path",columnTitles:[],customFields:{},isRefresh:!1,isRenderBody:!1,inputPath:""},a.fetchData=a.fetchData.bind(Object(ee.a)(Object(ee.a)(a))),a.displayConfigurator=a.displayConfigurator.bind(Object(ee.a)(Object(ee.a)(a))),a.renderBody=a.renderBody.bind(Object(ee.a)(Object(ee.a)(a))),a.createTable=a.createTable.bind(Object(ee.a)(Object(ee.a)(a))),a.fetchJSONPaths=a.fetchJSONPaths.bind(Object(ee.a)(Object(ee.a)(a))),a}return Object(Y.a)(t,e),Object(X.a)(t,[{key:"fetchJSONPaths",value:function(e,t){var a=this;if(Array.isArray(t)){var s=this.state.jsonPaths;return s.push({key:e,text:e,value:e}),this.setState({jsonPaths:s})}return Object.keys(t).map(function(e){return a.fetchJSONPaths(e,t[e])})}},{key:"fetchData",value:function(){var e=this;if(this.setState({error:void 0,loader:!0,dropdownText:"Select path",customFields:[],isRenderBody:!1}),this.props.setSourceList({source:void 0}),0===this.state.activeIndex||this.state.url){if(!this.state.url)return void this.setState({error:"Empty url!",jsonPaths:[],loader:!1});var t=this.state.url,a=this;new Promise(function(e,s){pe.a.get(t).then(function(t){e(t)}).catch(function(e){a.setState({error:e.toString(),jsonPaths:[],loader:!1})})},this).then(function(t){if(Array.isArray(t.data)){var a=e.state.jsonPaths;a.push({key:"root",text:"root",value:"root"}),e.setState({jsonPaths:a})}else e.fetchJSONPaths(void 0,t.data);e.setState({loader:!1,source:t.data}),Array.isArray(t.data)&&(console.log("fetchData()->displayConfigurator()",t.data),e.displayConfigurator("root",t.data))})}else{if(!this.state.json)return void this.setState({error:"Empty json!",jsonPaths:[],loader:!1});try{var s=JSON.parse(this.state.json);if(Array.isArray(s)){var o=this.state.jsonPaths;o.push({key:"root",text:"root",value:"root"}),this.setState({jsonPaths:o})}else this.fetchJSONPaths(void 0,s);this.setState({loader:!1,source:s}),Array.isArray(s)&&this.displayConfigurator("root",s)}catch(r){this.setState({error:r.toString(),jsonPaths:[],loader:!1})}}}},{key:"displayConfigurator",value:function(e,t){console.log("displayConfigurator\n","path",e,"\ndataSource",t);var a="$.."+e,s="root"===e?t:me.query(t,a);console.log("displayConfigurator\n","dataSource",s);var o="root"===e?Object.keys(s[0]):Object.keys(s[0][0]),r={};o.map(function(e){r=Object(d.a)({},r,Object(Z.a)({},e,{fieldName:e,columnName:e,columnWidth:10,isColumnVisible:!0}))}),console.log("displayConfigurator()->createTable(path === 'root' ? source : this.state.source, dataPath, this.state.maxLength, customFields)","root"===e,t,this.state.source,a,this.state.maxLength,r),this.setState({dropdownText:e,path:a,isConfigurator:!0,columnTitles:o,customFields:r,isRenderBody:!0}),this.createTable("root"===e?t:this.state.source,a,this.state.maxLength,r)}},{key:"createTable",value:function(e,t,a,s){s=Object.values(s).filter(function(e){return e.isColumnVisible}),console.log("createTable() {",s),this.setState({isRefresh:!0}),this.props.setSourceList({source:e,dataPath:t,rowsPerPage:10,columnTextLength:a,customFields:s})}},{key:"renderBody",value:function(){var e=this;if(console.log("renderBody() {",this.state.customFields),!Array.isArray(this.state.customFields))return this.state.columnTitles.map(function(t,a){return console.log(e.state.customFields[t].isColumnVisible),o.a.createElement(te.a.Row,{key:a},o.a.createElement(te.a.Cell,null," ",t," "),o.a.createElement(te.a.Cell,null,o.a.createElement(ae.a,{placeholder:e.state.customFields[t].columnName,disabled:!e.state.customFields[t].isColumnVisible,value:e.state.customFields[t].isColumnVisible?e.state.customFields[t].columnName:"",onChange:function(a,s){var o=s.value,r=e.state.customFields;r[t].columnName=o,e.setState({customFields:r})}})),o.a.createElement(te.a.Cell,null,o.a.createElement(ae.a,{placeholder:e.state.customFields[t].columnWidth,disabled:!e.state.customFields[t].isColumnVisible,value:e.state.customFields[t].isColumnVisible?e.state.customFields[t].columnWidth:"",onChange:function(a,s){var o=s.value,r=e.state.customFields;r[t].columnWidth=o,e.setState({customFields:r})}})),o.a.createElement(te.a.Cell,null,o.a.createElement(se.a,{checked:e.state.customFields[t].isColumnVisible,toggle:!0,onChange:function(a,s){var o=s.checked,r=e.state.customFields;r[t].isColumnVisible=o,e.setState({customFields:r})}})),o.a.createElement(te.a.Cell,null," hide "))})}},{key:"render",value:function(){var e=this,t=[{menuItem:"Input url",render:function(){return o.a.createElement(oe.a.Pane,null,o.a.createElement(ae.a,{fluid:!0,placeholder:"url",onChange:function(t,a){var s=a.value;return e.setState({url:s})}}),e.state.error?o.a.createElement(re.a,{basic:!0,color:"red",pointing:!0},e.state.error):null)}},{menuItem:"Input json",render:function(){return o.a.createElement(oe.a.Pane,null,o.a.createElement(ie.a,null,o.a.createElement(ie.a.TextArea,{rows:"10",placeholder:"Input json",onChange:function(t,a){var s=a.value;return e.setState({json:s})}}),e.state.error?o.a.createElement(re.a,{basic:!0,color:"red",pointing:!0},e.state.error):null))}}];return o.a.createElement("div",{style:{flexDirection:"column",justifyContent:"center",alignItem:"center",marginTop:20,marginBottom:30}},o.a.createElement(le.a,null,o.a.createElement(oe.a,{panes:t,onTabChange:function(t,a){e.setState({url:void 0,json:void 0,error:void 0,jsonPaths:[],activeIndex:a.activeIndex,isConfigurator:!1,dropdownText:"Select path",columnTitles:[],isRefresh:!1,isRenderBody:!1}),e.props.setSourceList({source:void 0})}}),o.a.createElement(ne.a,{active:this.state.loader})),o.a.createElement("div",{style:{margin:10}},o.a.createElement(ce.a,{basic:!0,color:"green",floated:"right",onClick:function(){return e.fetchData()}},"Fetch data")),o.a.createElement("div",{style:{marginTop:90}},o.a.createElement("h4",null,"Select JSON path"),o.a.createElement(ue.a,{compact:!0,borderless:!0,floated:!0},o.a.createElement(ue.a.Item,{as:"a"},o.a.createElement(de.a,{button:!0,className:"icon",floating:!0,labeled:!0,icon:"world",options:this.state.jsonPaths,search:!0,text:this.state.dropdownText,onChange:function(t,a){var s=a.value;return e.displayConfigurator(s,e.state.source)}}),this.state.jsonPaths.length>0?o.a.createElement(re.a,{color:"red",floating:!0},this.state.jsonPaths.length):null)),o.a.createElement("div",{style:{marginTop:20}},o.a.createElement("div",{style:{float:"left"}},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.a.createElement("div",{style:{float:"left"}},o.a.createElement(ae.a,{label:"input JSON path",placeholder:this.state.inputPath,onChange:function(t,a){var s=a.value;return e.setState({inputPath:s})}})),o.a.createElement("div",{style:{float:"left"}},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),o.a.createElement(ce.a,{onClick:function(){return e.displayConfigurator(e.state.inputPath,e.state.source)}},"Submit"))),o.a.createElement("div",{style:{flexDirection:"row",justifyContent:"centre",alignItems:"centre",marginTop:30}},o.a.createElement("div",{style:{paddingTop:5,paddingRight:20}},o.a.createElement(ce.a,{icon:!0,floated:"left",size:"mini",onClick:function(){return e.setState({isConfigurator:!e.state.isConfigurator})}},o.a.createElement(he.a,{name:this.state.isConfigurator?"caret up":"caret down"}))),o.a.createElement("div",{style:{paddingTop:5,paddingLeft:20}},o.a.createElement("h4",null,"Configure"))),this.state.isConfigurator?o.a.createElement("div",null,o.a.createElement("div",{style:{flexDirection:"column",justifyContent:"center",alignItem:"center",marginTop:20}},o.a.createElement(ae.a,{label:"max text length",placeholder:this.state.maxLength,onChange:function(t,a){var s=a.value;return e.setState({maxLength:s})}})),o.a.createElement("div",{style:{marginTop:20}},o.a.createElement(ae.a,{label:"min text length",placeholder:this.state.minLength,onChange:function(t,a){var s=a.value;return e.setState({minLength:s})}})),o.a.createElement("div",{style:{marginTop:20}},this.state.isRenderBody?o.a.createElement("div",null,o.a.createElement(te.a,{celled:!0,striped:!0},o.a.createElement(te.a.Header,null,o.a.createElement(te.a.Row,null,o.a.createElement(te.a.HeaderCell,{colSpan:"5"},"Columns"))),o.a.createElement(te.a.Body,null,this.renderBody())),o.a.createElement("div",{style:{margin:10}},o.a.createElement(ce.a,{basic:!0,color:"green",floated:"right",onClick:function(){return e.createTable(e.state.source,e.state.dataPath,e.state.maxLength,e.state.customFields)}},"Refresh table"))):null)):null)}}]),t}(s.Component));var Se=Object(l.b)(function(e){return{dataSource:e.dataSource}},function(e){return Object(n.b)({setSourceList:fe},e)})(we),be=a(83),Le=a(187),ve=a.n(Le),ye=a(298),Re=a.n(ye),Ee=a(299),Oe=a(300),Te=a.n(Oe);function Ce(e){return{type:p,payload:e}}function je(e){return{type:F,payload:e}}function De(e){return{type:f,payload:e}}function Pe(e,t){var a=null;return t?(console.log("%c fetch data using dataProviderFunction","color: #F7819F; display: block;"),new Promise(function(e,a){var s=window[t]();"object"===typeof s?e(s):pe.a.get(s).then(function(t){e(t)}).catch(function(e){window.showError(e)})}).then(function(e){return{type:w,payload:{data:e}}})):(console.log("%c fetch data using url","color: #F7819F; display: block;"),a=pe.a.get(e,t),{type:w,payload:a})}function Ae(e){return{type:m,payload:e}}function ke(e){return{type:b,payload:e}}function Ne(e){return{type:L,payload:e}}function Fe(e){return{type:y,payload:e}}function xe(e){return{type:T,payload:e}}function He(e){return{type:j,payload:e}}function ze(e){return{type:k,payload:e}}function _e(e){return{type:D,payload:e}}function Ie(e){return{type:P,payload:e}}function Ve(e){return{type:A,payload:e}}function We(e){return{type:N,payload:e}}var Be={container:{textAlign:"center",overflowX:"scroll"},component:{margin:"10px 5px"},titleStyle:{fontSize:16,color:be.deepOrange500},footerToolbarStyle:{padding:"0 100px"},tableStyle:{tableLayout:"auto"},tableBodyStyle:{overflowX:"auto"},tableWrapperStyle:{padding:5}},Ue=ve()({palette:{accent1Color:be.deepOrange500},tableHeaderColumn:{height:30},style:{tableRow:{height:24}},tableHeader:{height:10}}),Je=function(e){function t(e){var a;return Object($.a)(this,t),a=Object(K.a)(this,Object(Q.a)(t).call(this,e)),console.log("constructor(props) {"),a.handleSortOrderChange=a.handleSortOrderChange.bind(Object(ee.a)(Object(ee.a)(a))),a.handleFilterValueChange=a.handleFilterValueChange.bind(Object(ee.a)(Object(ee.a)(a))),a.handleRowSizeChange=a.handleRowSizeChange.bind(Object(ee.a)(Object(ee.a)(a))),a.handleRowSelection=a.handleRowSelection.bind(Object(ee.a)(Object(ee.a)(a))),a.handlePreviousPageClick=a.handlePreviousPageClick.bind(Object(ee.a)(Object(ee.a)(a))),a.handleNextPageClick=a.handleNextPageClick.bind(Object(ee.a)(Object(ee.a)(a))),a.state={columns:[],data:[],rowSize:E,rowSizeList:O,rowHeight:R,multiSelectable:!0,showCheckboxes:!0,selectedRows:[],page:C,filterValue:window.location.search.match(/jsontablefilter=/)?window.location.search.match(/jsontablefilter=/).input.replace(/&.*$/i,"").replace(/^.*=/,""):"",isFiltered:!1,isAllRowsSelected:!1,toUnselectAll:!1,updatedHash:void 0},a}return Object(Y.a)(t,e),Object(X.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.dataSource.sourceListOrigin)return!e.sourceList.sourceList||this.state.updatedHash&&this.state.updatedHash!==e.dataSource.sourceListOrigin.updatedHash?(console.log("initDataHandlerState, headerTable"),this.props.initDataHandlerState(e.dataSource.sourceListOrigin),void this.setState({updatedHash:e.dataSource.sourceListOrigin.updatedHash})):void this.setState({tableTitle:e.sourceList.sourceList.tableTitle,columns:e.sourceList.sourceList.headerTable,originalDataSource:e.sourceList.sourceList.originalDataSource,data:e.sourceList.sourceList.dataTable,dataLength:e.sourceList.sourceList.dataLength,page:e.sourceList.sourceList.page||e.sourceList.sourceList.pageNumber,rowSize:e.sourceList.sourceList.rowSize||e.sourceList.sourceList.rowsPerPage,selectedRows:e.sourceList.sourceList.selectedRows,filterValue:e.sourceList.sourceList.filterValue,isAllRowsSelected:e.sourceList.sourceList.isAllRowsSelected,toUnselectAll:e.sourceList.sourceList.toUnselectAll,selectedRowsHash:e.sourceList.sourceList.selectedRowsHash})}},{key:"handleSortOrderChange",value:function(e,t){this.props.sortData({columnName:e,sortOrder:t,pageNumber:this.state.page,rowSize:this.state.rowSize})}},{key:"handleFilterValueChange",value:function(e){this.props.filterData(e)}},{key:"handleRowSizeChange",value:function(e,t){var a=Math.ceil(this.state.data.length/t),s=this.state.page>a?a:this.state.page;this.props.showPageRows({pageNumber:s,rowSize:t,rowSizeList:this.state.rowSizeList}),this.setState({page:s,rowSize:t,rowSizeList:this.state.rowSizeList})}},{key:"handleRowSelection",value:function(e){var t,a,s=this;if("all"===e)return this.props.setAllSelectedRows(e),void(this.state.isAllRowsSelected=!0);if("none"===e)return this.props.setSelectedRows({rowsList:e,isAllRowsSelected:this.state.isAllRowsSelected,selectedRowsHash:this.state.selectedRowsHash,toUnselectAll:!0}),void(e=new Array);(this.state.selectedRows&&(t=this.state.selectedRows.length>e.length?[W.a.differenceWith(this.state.selectedRows,e,W.a.isEqual)[0]]:W.a.differenceWith(e,this.state.selectedRows,W.a.isEqual)),this.props.dataHook)&&(this.state.originalDataSource.map(function(e){e.hash==s.state.data[t].hash&&(a=e)}),this.props.selectRowData({row:a,hook:this.props.dataHook}));this.state.showCheckboxes?this.props.setSelectedRows({dataTable:this.state.data,pageNumber:this.state.page,rowsList:t,toUnselectAll:!1}):this.props.setSelectedRow(e.length>0?e:this.state.selectedRows)}},{key:"handlePreviousPageClick",value:function(){var e=this.state.page-1;this.props.showPageRows({pageNumber:e,rowSize:this.state.rowSize,rowSizeList:this.state.rowSizeList}),this.setState({page:e})}},{key:"handleNextPageClick",value:function(){var e=this.state.page+1;this.props.showPageRows({pageNumber:e,rowSize:this.state.rowSize,rowSizeList:this.state.rowSizeList}),this.setState({page:e})}},{key:"render",value:function(){if(!this.props.dataSource.sourceListOrigin)return o.a.createElement("div",null);var e=0;return console.log("%c render brisk table","color: orange; display: block;"),this.state.columns.length>0&&10*this.state.columns.length!==this.state.columns.reduce(function(e,t){return e+t.style.width},0)&&this.state.columns.forEach(function(t){e+=t.style.width}),console.log("tableWidth",e),o.a.createElement(Re.a,{muiTheme:Ue},o.a.createElement("h2",null,"Table"),o.a.createElement("div",{style:Be.container},o.a.createElement("div",{style:e>0?{width:2*e}:Be.component},o.a.createElement(Ee.Card,{style:{margin:12}},o.a.createElement(Te.a,{title:this.state.tableTitle,height:"auto",selectable:!0,enableSelectAll:this.state.showCheckboxes,showRowHover:!0,columns:this.state.columns,data:this.state.data,selectedRows:this.state.selectedRows,isAllRowsSelected:this.state.isAllRowsSelected,page:this.state.page,filterValue:this.state.filterValue,tableRowStyle:{height:this.state.rowHeight},tableRowColumnStyle:{height:this.state.rowHeight},tableHeaderColumnStyle:{headerToolbar:{height:24},toolbarTitle:{lineHeight:"40px"}},tableHeaderStyle:{headerToolbar:{height:24},toolbarTitle:{lineHeight:"40px"}},rowSize:this.state.rowSize,rowSizeList:this.state.rowSizeList,showCheckboxes:this.state.showCheckboxes,multiSelectable:this.state.showCheckboxes,showHeaderToolbar:!0,showFooterToolbar:!0,onRowSizeChange:this.handleRowSizeChange,onRowSelection:this.handleRowSelection,onNextPageClick:this.handleNextPageClick,onPreviousPageClick:this.handlePreviousPageClick,onFilterValueChange:this.handleFilterValueChange,onSortOrderChange:this.handleSortOrderChange,count:this.state.dataLength})))))}}]),t}(s.Component);var Me=Object(l.b)(function(e){return{dataSource:e.dataSource,sourceList:e.sourceList,selectedRows:e.selectedRows,selectedRowsData:e.selectedRowsData}},function(e){return Object(n.b)({setDataPath:Ce,setDataColumnTextLength:je,initDataHandlerState:ke,setDataCustomFields:De,dataFetchAction:Pe,setInitState:Ae,sortData:Ne,filterData:Fe,showPageRows:xe,selectRowData:He,setSelectedRow:Ve,setRowsPerPage:_e,setSelectedRows:Ie,setAllSelectedRows:ze,getSelectedRowsData:We},e)})(Je),qe={container:{margin:30}},Ge=function(e){function t(){return Object($.a)(this,t),Object(K.a)(this,Object(Q.a)(t).apply(this,arguments))}return Object(Y.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:qe.container},o.a.createElement("div",null,o.a.createElement(Se,null)),o.a.createElement("div",{style:{marginTop:90}},o.a.createElement(Me,null)),o.a.createElement("div",{style:{marginTop:90}},"version 0.1.3"))}}]),t}(s.Component),$e=Object(n.a)(u.a)(n.d);i.a.render(o.a.createElement(l.a,{store:$e(G)},o.a.createElement(Ge,null)),document.getElementById("brisk-table")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[313,1,2]]]);
//# sourceMappingURL=main.324baa34.chunk.js.map