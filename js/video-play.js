// const videos = document.querySelectorAll("video")

// videos.forEach(video => {
//   video.addEventListener("mouseover", function () {
//     this.play()
//   })
  
//   video.addEventListener("mouseout", function () {
//     this.pause()
//   })
  
//   video.addEventListener("touchstart", function () {
//     this.play()
//   })
  
//   video.addEventListener("touchend", function () {
//     this.pause()
//   })
// })
$(document).ready(function () {

  $(".video-porsche").hover(
    function () { // Mouse enter
      this.play();
    },
    function () { // Mouse leave
      this.pause();
    }
  );
});
