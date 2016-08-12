var random = function(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
var cssAnimationIn = ['bounceIn','swing','lightSpeedIn', 'flip', 'zoomIn'];
var cssAnimationOut = ['zoomOutLeft','rollOut', 'bounceOut', 'lightSpeedOut', 'hinge'];
var positions = ['top left','top right','bottom right','bottom left'];
function cssAnimation() {
    $.amaran({
        'message'   :'My animation example.',
        'cssanimationIn'  : random(cssAnimationIn),
        'cssanimationOut' : random(cssAnimationOut),
        'position'  : random(positions)
    });
}