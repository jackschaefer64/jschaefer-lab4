var changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', loadDoc);
function loadDoc() {
var req = new XMLHttpRequest();
req.open("GET", "ajax_info.txt", false);
req.send(null);
alert(req.responseText);
}
