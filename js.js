var $dialog = document.getElementById('mydialog');
	if (!('show' in $dialog)) {
		document.getElementById('promptCompat').className = 'no_dialog';
	}
	$dialog.addEventListener('close', function () {
		console.log('Fermeture. ', this.returnValue);
	});


	var $dialog2 = document.getElementById('mydialog2');
	if (!('show' in $dialog2)) {
		document.getElementById('promptCompat2').className = 'no_dialog2';
	}
	$dialog2.addEventListener('close', function () {
		console.log('Fermeture. ', this.returnValue);
	});