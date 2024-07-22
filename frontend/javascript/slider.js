const swiper = new Swiper(".swiper-hero", {
    
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    /*effect: "fade",
     cubeEffect: {
      shadow: false,
      slideShadows: false,
    },*/

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });