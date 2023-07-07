// setting active link-------------------------------------------------------------------------------
let links=document.querySelectorAll(".nav-div");
for(let i=0;i<links.length;i++){
  links[i].addEventListener("click",function(){

    for(let j=0;j<links.length;j++){
      links[j].classList.remove("active-link");
    }
    
    this.classList.add("active-link");
  });
}

// owl carousel ----------------------------------------------------------------------------------------
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    dotsEach:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        },
        1100:{
          items:4,
          nav:true,
        }

    }
    
  });
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

// change nav by scroll--------------------------------------------------------------------------------
window.addEventListener('scroll',getNavScroll);
function getNavScroll(){ 
  let nav = document.getElementById("nav")
  let scrolled=window.scrollY; 
  if(scrolled>.1){
     nav.classList.add("top-fixed");
     }
  else if(scrolled<=0){
     nav.classList.remove("top-fixed");
}}

