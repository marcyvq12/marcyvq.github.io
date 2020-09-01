function home_setup() {
	var modeling = document.getElementById("modeling");
	var ropeart = document.getElementById("ropeart");
	var mod_img = modeling.getElementsByTagName("img")[0];
	var rope_img = ropeart.getElementsByTagName("img")[0];
	mod_height = mod_img.clientHeight;
	rope_height = rope_img.clientHeight;
	modeling.style.height = mod_height.toString().concat("px");
	ropeart.style.height = rope_height.toString().concat("px");
	console.log(modeling.style.height);	
}
