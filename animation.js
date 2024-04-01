function navAnimation(){
    document.querySelector("nav").addEventListener("mouseenter",function(){
        let timeline = gsap.timeline();
    
        timeline.to("nav", {
            height: "30vh",
        });
        timeline.to(".notSee-div h3", {
            display: "block"
        });
        timeline.from(".notSee-div h3",{
            y:100,
            opacity:0,
            duration:0.35,
            stagger:{
                amount:0.7
            }
        });
    
    
    },false)
    
    document.querySelector("nav").addEventListener("mouseleave",function(){
        let timeline = gsap.timeline();
    
        timeline.to(".notSee-div h3",{
            y:10,
            duration:0.1,
            stagger:{
                amount:0.3
            }
        });
        timeline.to(".notSee-div h3", {
            duration:0.1,
            display :"none"
        });
        timeline.to("nav", {
            duration:0.1,
            height: "11vh",
        });
    
    },false)
}

function pageTwoAnimation(){
    document.querySelectorAll(".right-ele").forEach(function(ele) {
    
        ele.addEventListener("mouseenter",function(){ 
            gsap.to(ele.childNodes[3], {
                opacity:1,
                scale:1.5,
            });
        },false);
    
        ele.addEventListener("mouseleave",function(){
             
            gsap.to(ele.childNodes[3], {
                opacity:0,
                scale:0,
            });
    
        },false);
    
        ele.addEventListener("mousemove",function(e){
            gsap.to(ele.childNodes[3], {
                x:e.x - ele.getBoundingClientRect().x -400 ,
                y:e.y - ele.getBoundingClientRect().y - 35,
            })
        },false);
    })
}

function pageThreeVideoAnimation(){

    let video = document.querySelector("#page-3 video");
    document.querySelector("#page-3").addEventListener("click",function(){
        video.play();
        gsap.to(video, {
            transition: "all ease 0.5",
            transform:"scaleX(1) scaleY(1)",
            borderRadius:0,
            opacity:1,
        });
    },true);

    video.addEventListener("click",function(){
        console.log(video);
        video.pause();
        video.currentTime = 0;
        gsap.to(video, {
            transition: "all ease 0.5",
            transform:"scaleX(0.7) scaleY(0)",
            borderRadius:"30px",
            opacity:0,
        });

    },true);

}

if(window.innerWidth < 750){
    navAnimation();
}

pageTwoAnimation();

pageThreeVideoAnimation();




  



