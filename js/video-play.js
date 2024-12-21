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
  console.log("Video hover script loaded");

  $(".video-porsche").hover(
    function () { // Mouse enter
      console.log("Mouse enter - playing video");
      this.play();
    },
    function () { // Mouse leave
      console.log("Mouse leave - pausing video");
      this.pause();
    }
  );
});
