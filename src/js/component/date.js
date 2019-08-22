import React from "react";

const DateToday = props => {
	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	let hoy = new Date();
	let dd = hoy.getDate();
	let mm = hoy.getMonth() + 1;
	let yyyy = hoy.getFullYear();

	dd = addZero(dd);
	mm = addZero(mm);

	return yyyy + "/" + mm + "/" + dd;
};

export default DateToday;
