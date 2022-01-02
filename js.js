
function dialogA() {
    var dialog = document.getElementById('mydialog');
    document.getElementById('show').onclick = function () {
        dialog.show();
    };
    document.getElementById('hide').onclick = function () {
        dialog.close();
    };
}
function dialogB() {
    var dialog = document.getElementById('mydialog2');
    document.getElementById('show2').onclick = function () {
        dialog.show();
    };
    document.getElementById('hide2').onclick = function () {
        dialog.close();
    };
};