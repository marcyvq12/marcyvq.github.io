var csv = require("./node_modules/jquery.csv.js");

modeling_array = $.csv.toArray(csv);

function loadImages(imglist) {
  var col1 = document.getElementById("col1");
  var col2 = document.getElementById("col2");
  var modal_content = document.getElementById("modalcontent");

  var numimages = imglist.length;
  for (i=0; i < imglist.length; i++) {
    var numstr = (i+1).toString();
    var onclickstr = "openModal();currentSlide(".concat(numstr, ")");
    var img = document.createElement("img");
    img.src = "images/modeling/".concat(imglist[i]);
    img.setAttribute("class", "hover-shadow");
    img.setAttribute("onclick", onclickstr);
    // img.setAttribute("title", descriptions[i]);
    img.setAttribute("alt", descriptions[i]);

    if (i % 2 == 0) {
      col1.appendChild(img);
    } else {
      col2.appendChild(img);
    }

    var slide = document.createElement("div");
    slide.setAttribute("class", "mySlides");
    var numbertext = document.createElement("div");
    numbertext.setAttribute("class", "numbertext");
    numbertext.innerHTML = numstr.concat('/', numimages.toString());
    var img_big = document.createElement("img");
    img_big.src = "images/modeling/".concat(imglist[i]);
    img_big.setAttribute("style", "height: 75vh");
    // img_big.setAttribute("title", descriptions[i]);
    img_big.setAttribute("alt", descriptions[i]);

    slide.appendChild(numbertext);
    slide.appendChild(img_big);
    modal_content.appendChild(slide);
  }
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) 
    {plusSlides(-1);}
  else if (event.keyCode == 39) 
    {plusSlides(1);}
  else if (event.keyCode == 27)
    {closeModal();}
})

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  captionText.innerHTML = captions[slideIndex-1];
}