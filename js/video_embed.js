/* Light YouTube Embeds by @labnol */

/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}


function loadVideos(data) {
  var numvids = data.length;
  var container = document.getElementById("vid-container");

  for (i=0; i < numvids; i++) {
    var video_div = document.createElement("div");
    video_div.setAttribute("class", "video");

    var vid_title = document.createElement("h2");
    vid_title.innerHTML = data[i]["title"];
    vid_title.setAttribute("class","vid-title");

    var vid_caption = document.createElement("div");
    vid_caption.setAttribute("class", "vid-caption");
    var cap_text = document.createElement("p");
    cap_text.innerHTML = data[i]["caption"];
    vid_caption.appendChild(cap_text);

    var vid_embed = document.createElement("div");
    vid_embed.setAttribute("class", "vid-embed");
    var yt_embed = document.createElement("div");
    yt_embed.setAttribute("class", "youtube-player");
    yt_embed.setAttribute("data-id", data[i]["vid_id"]);
    vid_embed.appendChild(yt_embed);

    video_div.appendChild(vid_title);
    video_div.appendChild(vid_caption);
    video_div.appendChild(vid_embed);

    container.appendChild(video_div);
}
}


function loadCSV_vid(path) {
  d3.csv(path).then(function(data) {
  data.forEach(row => {
      const field =  row["column_name"];
  });
  loadVideos(data);
});
}
