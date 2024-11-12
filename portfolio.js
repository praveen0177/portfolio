$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer","Fresher", "Designer", "Freelancer","Web Devloper","AWS & DevOps Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



// project section start //


// Function to open popup
function openPopup(element) {
    const imgSrc = element.parentNode.parentNode.getAttribute("data-img");
    const title = element.parentNode.parentNode.getAttribute("data-title");
    const description = element.parentNode.parentNode.getAttribute("data-description");

    // Set popup content
    document.querySelector("#popupWindow .popup-header").innerText = title;
    document.querySelector("#popupWindow .popup-img").src = imgSrc;
    document.querySelector("#popupWindow .popup-description").innerText = description;

    // Show popup and backdrop
    document.getElementById("popupBackdrop").style.display = "block";
    document.getElementById("popupWindow").style.display = "block";
}

// Function to close popup
function closePopup() {
    document.getElementById("popupBackdrop").style.display = "none";
    document.getElementById("popupWindow").style.display = "none";
}

// Optional: close popup when clicking outside of it
document.getElementById("popupBackdrop").addEventListener("click", closePopup);

