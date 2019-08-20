import React from "react";

const DateToday = props => {
	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	var hoy = new Date();
	var dd = hoy.getDate();
	var mm = hoy.getMonth() + 1;
	var yyyy = hoy.getFullYear();

	dd = addZero(dd);
	mm = addZero(mm);

	return dd + "/" + mm + "/" + yyyy;
};

export default DateToday;
