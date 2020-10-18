function loadVideos(data, container) {
  var numvids = data.length;

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
    yt_embed.setAttribute("class", "video-player");
    yt_embed.setAttribute("data-id", data[i]["vid_id"]);
    yt_embed.setAttribute("data-site", data[i]["vid_site"]);
    vid_embed.appendChild(yt_embed);

    video_div.appendChild(vid_title);
    video_div.appendChild(vid_caption);
    video_div.appendChild(vid_embed);

    container.appendChild(video_div);

}

setupVid();
}


function importVideo(path) {
    loadCSV(path).then(function(data) {
    var container = document.getElementById("vid-container");
    loadVideos(data, container);
  });
}

/* Light YouTube Embeds by @labnol */

/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded", setupVid());

function setupVid() {
        var div, n,
            v = document.getElementsByClassName("video-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            var site = v[n].dataset.site;
            if (site == "youtube") {
                div.innerHTML = youtubeThumb(v[n].dataset.id);
                div.onclick = youtubeIframe;
                console.log(div);  
            }
            else if (site == "vimeo") {
                vimeoThumb(div, v[n].dataset.id);
                div.onclick = vimeoIframe;
            }
            v[n].appendChild(div);
        }
    }

function youtubeThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function youtubeIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}

// For vimeo embeds:

function vimeoThumb(div, id){    
    var url = "https://vimeo.com/api/v2/video/" + id + ".json";
    
    var thumb = '<img src="THUMB">',
        play = '<div class="play"></div>';
    $.getJSON(url, function(data){
        console.log(data);
        div.innerHTML = thumb.replace("THUMB", data[0].thumbnail_large) + play;

    });
}

function vimeoIframe(){
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://player.vimeo.com/video/" + this.dataset.id + "?autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}
