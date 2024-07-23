`use strict`;

// ****** PALE BLUE DOT ****** //

var imageSources = [
  "indir.png",
  "maxresdefault.webp",
  "JfTWcaPlXFw-1024x640.jpg",
];

var index = 0;
setInterval(function () {
  // aralıklarla text ya da görsel koymak için setinterval komutu kullanılır
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("pale").src = imageSources[index];
  index++;
}, 2000);

// FULL SCREEN AÇMA

function openNav(target) {
  // Close all overlays
  closeNav();

  // Open the selected overlay
  document.getElementById(target).style.width = "100%";
}

function closeNav() {
  var overlays = document.getElementsByClassName("overlay");
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].style.width = "0%";
  }
}

// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }

// // FULL SCREEN KAPAMA
// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }
