function loadPages(data) {
  var numvids = data.length;
  var container = document.getElementById("pages-container");

  var imgpath_head = './images/installation/'
  for (i=0; i < numvids; i++) {
    var page = document.createElement("div");
    page.setAttribute("class", "page");

    var link = document.createElement("a");
    link.href = data[i]['page_name'];

    var overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");

    var img = document.createElement("img");
    img.src = imgpath_head + data[i]['img_path'];

    var title = document.createElement("div");
    title.setAttribute("class", "page-title");
    title.innerHTML = data[i]['title'];

    link.appendChild(img);
    link.appendChild(overlay);
    link.appendChild(title);


    page.appendChild(link);
    container.appendChild(page);
  }
}

function setupInstallations(path) {
    loadCSV(path).then(function(data) {
    loadPages(data);
  });
}