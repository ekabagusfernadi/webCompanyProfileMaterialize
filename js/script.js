// Javascript sidebar

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, option); // option disini adalah indikator jika ingin dicustom, dokumentasi ada dibawah web materialize
// });

const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav); // object materialize bawaan

// javascript slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  // cara penulisan option
  indicators: false,
  height: 500,
  transition: 600,
  interval: 3000,
});

// javascript parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

// javascript materialbox portfolio
const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

// javascript scrollspy (smoth scroll)
const scrollspy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollspy, {
  scrollOffset: 30,
});
