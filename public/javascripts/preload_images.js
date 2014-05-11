function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
    $('<img/>')[0].src = this;
  });
}

preload(["/images/blue_rock.jpg",
         "/images/blue_paper.jpg",
         "/images/blue_scissors.jpg",
         "/images/red_rock.jpg",
         "/images/red_paper.jpg",
         "/images/red_scissors.jpg"]);