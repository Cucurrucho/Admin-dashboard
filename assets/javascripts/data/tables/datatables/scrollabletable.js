$(document).on("ready pjax:success", function () {
	if (!$.fn.DataTable.isDataTable('#scrollabletable')) {
		var scrollableDatatable = $('#scrollabletable').DataTable({
			"scrollY": 200,
			"scrollX": true,
			responsive: true
		});
	}

	$(document).on("pjax:start", function () {
		scrollableDatatable.destroy();
	});
});
