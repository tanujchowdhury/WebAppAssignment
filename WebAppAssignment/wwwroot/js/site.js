// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var id = null;
function moveAnimation() {
    var elem = document.getElementById("animation-element");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 1050) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
