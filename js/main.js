const config = {
  type: "carousel",
  perView: 3,
  autoplay: 2000,
  breakpoints: {
    767: {
      perView: 1
    },
    1023: {
      perView: 2
    }
  }
};

new Glide(".glide", config).mount();
