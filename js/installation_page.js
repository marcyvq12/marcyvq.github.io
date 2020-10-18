function mapper(value) {
    console.log(value['row']);
    return value['row'];
}

function checkGallery(row) {
    for (i = 0; i < row.length; i++){
        if (row[i]['type'] != 'image') {
            return false;
        }
    }
    return true;
}

function makeSpacer(element, container) {
    var spacer_div = document.createElement("div");
    spacer_div.setAttribute('class', 'spacer');
    spacer_div.setAttribute('width', element['width']);
    container.appendChild(spacer_div);
}

function makeText(element, container) {
    var text_container = document.createElement("div");
    text_container.setAttribute('class', 'text-container');
    text_container.setAttribute('width', element['width']);
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
    loadImages([element], container);
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
    console.log(content_type);
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
    var numrows = Math.max(data.map(mapper));
    console.log(numrows);
    for (i=0; i < numrows; i++) {
        row = data.filter(element => element['row'] == i);
        console.log(row);
        row_container = document.createElement("div");
        row_container.setAttribute('class', 'row');
        // First check if the row will be a gallery (special case)
        if (row.length > 1 && checkGallery(row)) {
            makeGallery(row, row_container);
            console.log('gallery');
        }
        else {
            for (j=0; j<row.length; j++) {
                type_selector(row[j], row_container);
                console.log('not gallery');
            }
        }
        container.appendChild(row_container);
    }
});
}