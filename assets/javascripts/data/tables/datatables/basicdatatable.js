$(document).on("ready pjax:success",function() {
    if ( ! $.fn.DataTable.isDataTable( '#basicdatatable' ) ) {
        var basicDatatable = $('#basicdatatable').DataTable({
            responsive: true
        });
    }

    $(document).on("pjax:start", function(){
        basicDatatable.destroy();
    });
} );
