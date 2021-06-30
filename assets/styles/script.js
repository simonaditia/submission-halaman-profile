console.log('TEST');
// Get the modal
var modalA = document.getElementById("myModalA");
var modalB = document.getElementById("myModalB");
var modalC = document.getElementById("myModalC");
var modalD = document.getElementById("myModalD");
var modalE = document.getElementById("myModalE");
var modalF = document.getElementById("myModalF");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgA = document.getElementById("myImgA");
var imgB = document.getElementById("myImgB");
var imgC = document.getElementById("myImgC");
var imgD = document.getElementById("myImgD");
var imgE = document.getElementById("myImgE");
var imgF = document.getElementById("myImgF");
var modalImgA = document.getElementById("img01");
var modalImgB = document.getElementById("img02");
var modalImgC = document.getElementById("img03");
var modalImgD = document.getElementById("img04");
var modalImgE = document.getElementById("img05");
var modalImgF = document.getElementById("img06");
var captionTextA = document.getElementById("captionA");
var captionTextB = document.getElementById("captionB");
var captionTextC = document.getElementById("captionC");
var captionTextD = document.getElementById("captionD");
var captionTextE = document.getElementById("captionE");
var captionTextF = document.getElementById("captionF");
imgA.onclick = function () {
    modalA.style.display = "block";
    modalImgA.src = this.src;
    captionTextA.innerHTML = this.alt;
}
imgB.onclick = function () {
    modalB.style.display = "block";
    modalImgB.src = this.src;
    captionTextB.innerHTML = this.alt;
}
imgC.onclick = function () {
    modalC.style.display = "block";
    modalImgC.src = this.src;
    captionTextC.innerHTML = this.alt;
}
imgD.onclick = function () {
    modalD.style.display = "block";
    modalImgD.src = this.src;
    captionTextD.innerHTML = this.alt;
}
imgE.onclick = function () {
    modalE.style.display = "block";
    modalImgE.src = this.src;
    captionTextE.innerHTML = this.alt;
}
imgF.onclick = function () {
    modalF.style.display = "block";
    modalImgF.src = this.src;
    captionTextF.innerHTML = this.alt;
}

// closes the modal
var spanA = document.getElementsByClassName("closeA")[0];
var spanB = document.getElementsByClassName("closeB")[0];
var spanC = document.getElementsByClassName("closeC")[0];
var spanD = document.getElementsByClassName("closeD")[0];
var spanE = document.getElementsByClassName("closeE")[0];
var spanF = document.getElementsByClassName("closeF")[0];

// close the modal
spanA.onclick = function () {
    modalA.style.display = "none";
}
spanB.onclick = function () {
    modalB.style.display = "none";
}
spanC.onclick = function () {
    modalC.style.display = "none";
}
spanD.onclick = function () {
    modalD.style.display = "none";
}
spanE.onclick = function () {
    modalE.style.display = "none";
}
spanF.onclick = function () {
    modalF.style.display = "none";
}