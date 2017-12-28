var menu = document.getElementsByClassName ("button");
var menuLength = menu.length;

for ( i=0 ; i < menuLength ; i++) {
	var text = menu[i].innerText;
	alert(text);
}
