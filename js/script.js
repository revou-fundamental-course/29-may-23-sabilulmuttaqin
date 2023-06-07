var name = prompt("Masukkan nama anda");
var element = (document.getElementById("nama").innerText = name);

function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var birth = document.forms["message-form"]["tanggal-lahir"].value;
  var gen = document.forms["message-form"]["gender"].value;
  var mes = document.forms["message-form"]["pesan"].value;

  if (name == "" || birth == "" || gen == "" || mes == "") {
    alert("Input Tidak Boleh Kosong!!!");
    return false;
  }

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-tanggal-lahir").innerText = birth;
  document.getElementById("sender-gender").innerText = gen;
  document.getElementById("sender-pesan").innerText = mes;
  return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i = 1;
  var imgList = document.getElementsByClassName("img-slideshow");

  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = slideIndex = 3;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";

  setInterval(() => {
    plusDivs(1);
  }, 5000);
}
