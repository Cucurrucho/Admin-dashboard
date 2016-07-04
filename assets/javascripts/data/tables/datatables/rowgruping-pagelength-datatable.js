$(document).on("ready pjax:success", function () {
	if (!$.fn.DataTable.isDataTable('#example')) {
		var rowgroupingPagelengthDatatable = $('#example').DataTable({
			"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
			responsive: true,
			"columnDefs": [
				{ "visible": false, "targets": 2 }
			],
			"order": [[ 2, 'asc' ]],
			"displayLength": 25,
			"drawCallback": function ( settings ) {
				var api = this.api();
				var rows = api.rows( {page:'current'} ).nodes();
				var last=null;

				api.column(2, {page:'current'} ).data().each( function ( group, i ) {
					if ( last !== group ) {
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan="5">'+group+'</td></tr>'
						);

						last = group;
					}
				} );
			}
		} );

		// Order by the grouping
		$('#example tbody').on( 'click', 'tr.group', function () {
			var currentOrder = rowgroupingPagelengthDatatable.order()[0];
			if ( currentOrder[0] === 2 && currentOrder[1] === 'asc' ) {
				rowgroupingPagelengthDatatable.order( [ 2, 'desc' ] ).draw();
			}
			else {
				rowgroupingPagelengthDatatable.order( [ 2, 'asc' ] ).draw();
			}
		} );


	}

	$(document).on("pjax:start", function () {
		rowgroupingPagelengthDatatable.destroy();
	});
});
