class BriskTableFunctions {
    constructor(props) {
        this.properties = props;
    }

    setSelectedRowsData(setSelectedRowsData) {
        this.selectedRowsData = setSelectedRowsData;

        return;
    }

     refresh() {
         this.properties.filterData('');
         this.properties.setInitState({});
         this.properties.dataFetchAction(this.properties.dataUrl, this.properties.dataProviderFunction);
         this.properties.initDataHandlerState();

         return this;
    }

    fetchSelectedRows(id) {
        this.properties.getSelectedRowsData(id);

        return this;
    }

    filterData(id, filterValue) {
        this.properties.filterData(filterValue);

        return this;
    }

    handleCustomData() {
        this.properties.dataFetchAction(this.properties.dataUrl, this.properties.dataProviderFunction);

        return this;
    }
}

export default BriskTableFunctions;
