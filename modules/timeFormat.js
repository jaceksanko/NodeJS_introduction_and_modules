
function transformTimeFormat(el) {
	var hours = Math.floor(el / 3600);
	var minutes = Math.floor((el % 3600)/60);
	var seconds = Math.floor((el % 3600)%60);
	var time = hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.';
	if (el < 3600 && minutes > 0 && seconds > 0) {
		time = minutes + ' min. ' + seconds + ' sek.';
	}
	else if (el < 3600 && minutes == 0) {
		time = seconds + ' sek.';
	}
	else if (el < 3600 && seconds == 0) {
		time = minutes + ' min. ';
	}
	else if (el % 3600 == 0) {
		time =  hours + ' godz. ';
	}
	else if (el > 3600  && minutes == 0) {
		time = hours + ' godz. ' + seconds + ' sek.';
	}
	else if (el > 3600  && seconds == 0) {
		time = hours + ' godz. ' + minutes + ' min. '
	}
	
	return time;
}

exports.modulesTimeFormat = transformTimeFormat;