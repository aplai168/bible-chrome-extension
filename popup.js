
// create an array of different background images
var wallpapers = ['1.jpg', '2.jpg'];

//jquery way to do body.css('background', img)
// wallpapers.forEach((wallpaper) => {
//   // $('body').css('background', wallpaper);
//   document.body.style.background = wallpaper;
// })

chrome.tabs.onCreated(() => {
  document.body.style.background = '2.jpg';
})
