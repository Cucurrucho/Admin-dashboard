$(document).ready(function() {
    if ( ! $.fn.DataTable.isDataTable( '#basicdatatable' ) ) {
        $('#basicdatatable').DataTable({
            responsive: true
        });
    }
} );
