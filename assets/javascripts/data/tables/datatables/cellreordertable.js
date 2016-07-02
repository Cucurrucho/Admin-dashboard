$(document).on("ready pjax:success", function () {
	if (!$.fn.DataTable.isDataTable('#cellreordertable')) {
		var cellReorderDatatable = $('#cellreordertable').DataTable({
			responsive: true,
			colReorder: true
		});

	}

	$(document).on("pjax:start", function () {
		cellReorderDatatable.destroy();
	});
});
