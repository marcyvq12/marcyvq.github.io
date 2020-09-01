function home_setup() {
	var modeling = document.getElementById("modeling");
	var ropeart = document.getElementById("ropeart");
	var mod_img = modeling.getElementsByTagName("img")[0];
	var rope_img = ropeart.getElementsByTagName("img")[0];
	mod_height = mod_img.clientHeight;
	rope_height = rope_img.clientHeight;
	modeling.style.height = mod_height;
	ropeart.style.height = rope_height;
	console.log(mod_height);
}
