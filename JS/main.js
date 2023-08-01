


/* Animation type 1 (Animation 1) */
const txtAnim = document.querySelector('.changing-text')

new Typewriter(txtAnim, {
    loop : true,
    deleteSpeed : 20
    /* deleteSpeed : (10 rapide / deleteSpeed: 70 lent) */

})
    /* changeDelay : (10 rapide / changeDelay: 70 lent) */
    .changeDelay(90)
    .typeString("sans t'épuiser,")
    .pauseFor(1000)
    .deleteChars(16)
    .pauseFor(300)
    .typeString("sans prospecter,")
    .pauseFor(1000)
    .deleteChars(16)
    .pauseFor(300)
    .typeString("sans aucune connaissance technique ?")
    .pauseFor(1000)
    .deleteChars(36)
    .pauseFor(300)
    .start()




const swiper = new Swiper('.swiper', {
    // Optional parameters
    overflow: "hidden",
    slidesPerView: "auto",
    direction: 'horizontal',
    rewind: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    }
});