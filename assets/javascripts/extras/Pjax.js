function Pjax(linkElements, pjaxContent, loadingElement, animation) {
	this.contentWrapper = pjaxContent;
	this.loadingElement = loadingElement || "";
	this.effect = {};
	this.effect[animation || "opacity"] = "toggle";
	this.animationDuration = 1000;

	$(document).on("pjax:start", function () {
		$(document).off("pjax:success");
	});

	if (this.loadingElement) {
		$(this.loadingElement).hide();
	}

	var links = $(linkElements.join()).find("a");
	var self = this;

	links.each(function () {
		if (this.host == window.location.host && $(this).attr("href")[0] != "#") {
			$(this).click(function (event) {
				history.pushState({}, null, this.href);
				self.load(event, this.href);
			});
		}
	});

	$(window).bind("popstate", function (event) {
			self.load(event, event.target.location.href);
		}
	);
}

Pjax.prototype.load = function (event, page) {
	if (typeof event != "undefined" && $.isFunction(event.stopPropagation)) {
		event.stopPropagation();
		event.preventDefault();
	}
	var self = this;

	$(self.contentWrapper).animate(self.effect, self.animationDuration, "linear", function () {
		$(document).trigger("pjax:start");
		if (self.loadingElement) {
			$(self.loadingElement).show();
		}
		self.loadContent(page);
	});
}

Pjax.prototype.loadContent = function (page) {
	var self = this;

	$.get(page, function (data) {
		var wholeContent = $(data);
		var pjaxContent = wholeContent.find(self.contentWrapper).addBack(self.contentWrapper);

		if (self.loadingElement) {
			$(self.loadingElement).hide();
		}

		$(self.contentWrapper).html(pjaxContent.html());
		$(self.contentWrapper).animate(self.effect, self.animationDuration, "linear", function () {
			$(document).off("pjax:start");
			$(document).on("pjax:start", function () {
				$(document).off("pjax:success");
			});
			$(document).trigger("pjax:success");
		});
	});
}