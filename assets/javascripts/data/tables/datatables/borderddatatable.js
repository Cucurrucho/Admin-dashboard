$(document).on("ready pjax:success",function() {
    if ( ! $.fn.DataTable.isDataTable( '#borderddatatable' ) ) {
        var borderDatatable = $('#borderddatatable').DataTable({
            responsive: true
        });
    }

    $(document).on("pjax:start", function(){
        borderDatatable.destroy();
    });
});
