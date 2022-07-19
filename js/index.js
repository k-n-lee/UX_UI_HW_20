const checkpoint = 1300;
$(window).scroll(function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 0 + currentScroll / checkpoint +0.5;
    // }
    } else {
        opacity = 1 - currentScroll/checkpoint;
    }
    if (currentScroll >= checkpoint){
        opacity2 = 0 + currentScroll/(checkpoint-6);
    // }
    } else {
        opacity2 = 0;
    };
    document.querySelector("#mySkills").style.opacity = opacity;
    document.querySelector(".flexContainer").style.opacity = opacity;
    document.querySelector("#selectWork").style.opacity = opacity2;
    document.querySelector(".workGrid").style.opacity = opacity2;
})