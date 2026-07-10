


window.addEventListener("load", function(){

    document.body.style.opacity = "1";

});





// =============================
// PROPOSAL BUTTON MESSAGE
// =============================


function yesLove(){


    let message = document.getElementById("response");


    if(message){

        message.innerHTML =
        "You made me the happiest person ❤️💍<br><br>Forever together!";

    }

    else{

        alert(
        "You made me the happiest person ❤️💍\n\nForever together!"
        );

    }

}






// =============================
// VIDEO COMPLETE REDIRECT
// =============================


let video = document.getElementById("myVideo");


if(video){


    video.onended = function(){


        window.location.href = "proposal.html";


    };


}







// =============================
// CREATE FLOATING HEARTS
// =============================


function createHeart(){


    let heart = document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";


    heart.style.left=Math.random()*100+"%";


    heart.style.bottom="-20px";


    heart.style.fontSize=
    Math.random()*20+20+"px";


    heart.style.animation=
    "floatHeart 5s linear";


    heart.style.zIndex="999";



    document.body.appendChild(heart);



    setTimeout(function(){


        heart.remove();


    },5000);



}




setInterval(createHeart,1500);






// =============================
// IMAGE LOADING EFFECT
// =============================


let images=document.querySelectorAll("img");


images.forEach(function(image){


    image.addEventListener("click",function(){


        image.style.transform="scale(1.2)";


    });


});







// =============================
// MUSIC PLAY SUPPORT
// =============================


let music=document.querySelector("audio");


if(music){


    document.addEventListener("click",function(){


        music.play();


    },{once:true});


}
