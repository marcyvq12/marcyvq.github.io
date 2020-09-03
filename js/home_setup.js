function setCategoryHeights() {
	var pages = document.getElementsByClassName("page-ref");
	for (page in pages) {
		var img = page.getElementsByTagName("img")[0];
		var img_height = img.clientHeight;
		page.style.height = img_height.toString().concat("px");
	}
}

function home_setup() {
	// loadCSV(path).then(function(data) {console.log(data)});
	setCategoryHeights();
}