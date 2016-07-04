$(document).on("ready pjax:success",function(){
    $('.sparklines').sparkline('html', { enableTagOptions: true });
});