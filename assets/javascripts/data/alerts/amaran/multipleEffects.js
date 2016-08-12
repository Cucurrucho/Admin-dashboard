var random = function(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
var Effects = ['slideRight','slideLeft','slideBottom','slideTop'];
var positions = ['top left','top right','bottom right','bottom left'];
function multipleEffects(){
    $.amaran({
        'message'   :'My positioning example.',
        'position'  : random(positions) ,
        'inEffect'  : random(Effects),
        'outEffect' : random(Effects)
    });
}