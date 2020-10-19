function mapper(value) {
    return parseInt(value['row']);
}

function checkGallery(row) {
    for (k = 0; k < row.length; k++){
        if (row[k]['type'] != 'image') {
            return false;
        }
    }
    return true;
}

function makeSpacer(element, container) {
    var spacer_div = document.createElement("div");
    spacer_div.setAttribute('class', 'spacer');
    spacer_div.style.width = element['width'];
    container.appendChild(spacer_div);
}

function makeText(element, container) {
    var text_container = document.createElement("div");
    text_container.setAttribute('class', 'text-container');
    text_container.style.width = element['width'];
    if (element['title']) {
        var title = document.createElement("h2");
        title.setAttribute('class', 'text-title');
        title.innerHTML = element['title'];
        text_container.appendChild(title);
    }
    if (element['caption']) {
        var caption = document.createElement("p");
        caption.setAttribute('class', 'text-caption');
        caption.innerHTML = element['caption'];
        text_container.appendChild(caption);
    }
    container.appendChild(text_container);
}

function makeImage(element, container) {
    img_container = document.createElement("div");
    img_container.setAttribute('class', 'image-container');
    img_container.style.width = element['width'];
    container.appendChild(img_container);
    loadImages([element], img_container);
}

function makeVideo(element, container) {
    loadVideos([element], container);
}

function makeGallery(row, container) {
    var col1 = document.createElement("div");
    var col2 = document.createElement("div");
    col1.setAttribute('class', 'gallery-column');
    col2.setAttribute('class', 'gallery-column');
    container.appendChild(col1);
    container.appendChild(col2);
    var columns = [col1, col2];
    loadImages(row, columns);
}

function type_selector(element, container) {
    var content_type = element['type'];
    if (content_type == 'spacer') {
        makeSpacer(element, container);
    }
    else if (content_type == 'text') {
        makeText(element, container);
    }
    else if (content_type == 'image') {
        makeImage(element, container);
    }
    else if (content_type == 'video') {
        makeVideo(element, container);
    }
}


function importProject(path) {
    loadCSV(path).then(function(data) {
    var container = document.getElementById("project-container");
    var numrows = Math.max(...data.map(mapper));
    for (fuck=1; fuck < numrows+1; fuck++) {
        console.log(fuck);
        var row = data.filter(element => element['row'] == fuck);
        var row_container = document.createElement("div");
        container.appendChild(row_container);
        // First check if the row will be a gallery (special case)
        if (row.length > 1 && checkGallery(row)) {
            makeGallery(row, row_container);
            row_container.setAttribute('class', 'gallery-row');
        }
        else {
            for (j=0; j<row.length; j++) {
                row_container.setAttribute('class', 'row');
                type_selector(row[j], row_container);
            }
        }
    }
});
}


document.addEventListener("DOMContentLoaded", setupVid());
