const next = document.querySelector('a.coreSpriteRightPaginationArrow');
var count = 0;

function doLike() {
  const like_btn = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
  if(like_btn){
      console.log('click\n');
      like_btn.click();
      count++;
  }
  next.click();
  console.log(`Ada like ${count} posts!`);
}

(function loop() {
    setTimeout(() => {
      doLike();
      loop();  
    }, 10000); // 10 segundos
}());