var isDownloading = false;
function download() {
    let image = document.querySelector("img")
    let cont = document.querySelector("div")
    if (isDownloading == false) {
        isDownloading = true;
        image.src = "download.gif";
        cont.lastElementChild.remove(); 
        cont.style.width = "50px";
        cont.style.borderRadius = "50%";
    } else {
        isDownloading = false;
        image.src = "before_downloading.png";
        cont.innerHTML += "<p>Download</p>"
        cont.style.width = "150px";
        cont.style.borderRadius = "10px";
    }
}