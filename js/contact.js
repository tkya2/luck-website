var textWrapper = document.querySelector('.ml6 .letters ,ml7');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 70 * i     //動くスピード
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,  //切り替えスピード
    easing: "easeOutExpo",
    delay: 1000
  });
