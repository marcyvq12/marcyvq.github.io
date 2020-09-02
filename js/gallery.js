function loadCSV(path) {
  d3.csv(path).then(function(data) {
  data.forEach(row => {
      const field =  row["column_name"];
  });
  console.log(data[0]);
  return data;
});
  console.log(data);
}

function loadImages(path) {
  var col1 = document.getElementById("col1");
  var col2 = document.getElementById("col2");
  var modal_content = document.getElementById("modalcontent");
  var captionbox = document.getElementById("captionbox");

  data = loadCSV(path);
  console.log(data[0]);
  var numimages = data.length;
  for (i=0; i < numimages; i++) {
    fname = data[i]['fname'];
    credits = data[i]['credits'];
    alt = data[i]['alt'];
    folder = data[i]['category'];
    var numstr = (i+1).toString();
    var onclickstr = "openModal();currentSlide(".concat(numstr, ")");
    var img = document.createElement("img");
    var img_path = "images/".concat(folder, "/", fname);
    img.src = img_path;
    img.setAttribute("title", credits);
    img.setAttribute("class", "hover-shadow");
    img.setAttribute("onclick", onclickstr);
    img.setAttribute("alt", alt);

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
    img_big.src = img_path;
    img_big.setAttribute("title", credits);
    img_big.setAttribute("alt", alt);

    slide.appendChild(numbertext);
    slide.appendChild(img_big);
    modal_content.insertBefore(slide, captionbox);
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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  try {
    slides[slideIndex-1].style.display = "block";
  }
  catch (err) {
    console.log(slideIndex);
    console.log(slides[slideIndex-1]);
  }
  var current_image = slides[slideIndex-1].getElementsByTagName("img")[0];
  
  captionText.innerHTML = current_image.title;
}
