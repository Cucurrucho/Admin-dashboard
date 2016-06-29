function Pjax (linkElements,pjaxContent,loadingElement) {
    this.contentWrapper = pjaxContent;
    this.loadingElement = loadingElement;

    var links = $(linkElements.join()).find("a");
    var self = this;

    links.each(function(){
        if(this.host == window.location.host && $(this).attr("href")[0] != "#"){
            $(this).click(function(event){
                history.pushState({}, null, this.href);
                self.load(event,this.href);
            });
        }
    });

    $(window).bind("popstate", function (event) {
            console.log(event.target.location.href);
            self.load(event,event.target.location.href);
        }
    );
}

Pjax.prototype.load = function (event,page){
    console.log(page);
    if(typeof event != "undefined" && $.isFunction(event.stopPropagation)){
        event.stopPropagation();
        event.preventDefault();
    }
    var self = this;

    $(self.contentWrapper).fadeOut('slow', function() {
        self.clearMemory();
        $.get(page,function(data){
            var state = {page : page};
            var wholeContent = $(data);
            var pjaxContent = wholeContent.find(self.contentWrapper).addBack(self.contentWrapper);

            $(self.contentWrapper).html(pjaxContent.html());
            $(self.contentWrapper).fadeIn('slow');
        });
    });
}

Pjax.prototype.clearMemory = function (){
    $.fn.dataTable.tables( { visible: false, api: true } ).destroy();
}