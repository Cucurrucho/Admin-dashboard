$(document).on("ready pjax:success", function () {
	if (!$.fn.DataTable.isDataTable('#buttontable')) {
		var buttonDatatable = $('#buttontable').DataTable({
			responsive: true,
			dom: 'Bfrtip',
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			]
		});

	}

	$(document).on("pjax:start", function () {
		buttonDatatable.destroy();
	});
});
