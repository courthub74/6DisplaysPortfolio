// JavaScript Window Onload with event listener

window.onload = function () {
    window.addEventListener('scroll', function (e) {
       console.log("Do I need this?");
    });

    //////////////////////// MOBILE MENU SCRIPT /////////////////////////////////

    // HOME SECTION

    // HOME BURGER MOBILE MAIN QUERY
    const home_burger_mobile_main = document.querySelector('.hamburgermobilemain');
    // SLIDE HOME MENU QUERY
    const home_slide_menu_mobile_main = document.querySelector('.nav-mobile-main-home');

    // Adding Eventlistener to the hamburger and slide menu
    home_burger_mobile_main.addEventListener('click', function () {
        // toggle is active css state for hamburger menu
        home_burger_mobile_main.classList.toggle('is-active');
        // toggle is active css state for menu to slide in
        home_slide_menu_mobile_main.classList.toggle('is-active');
    });


    // ABOUT SECTION

    // ABOUT BURGER MOBILE MAIN QUERY
    const about_burger_mobile_main = document.querySelector('.hamburgermobileaboutmain');
    // SLIDE ABOUT MENU QUERY
    const about_slide_menu_mobile_main = document.querySelector('.nav-mobile-main-about');

    // Adding Eventlistener to the hamburger and slide menu
    about_burger_mobile_main.addEventListener('click', function () {
        // toggle is active css state for hamburger menu
        about_burger_mobile_main.classList.toggle('is-active');
        // toggle is active css state for menu to slide in
        about_slide_menu_mobile_main.classList.toggle('is-active');
        console.log("about burger pressed")
    });
}


