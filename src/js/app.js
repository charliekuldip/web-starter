import 'vanilla-tilt';
import VanillaTilt from 'vanilla-tilt';

jQuery(document).ready(function($) {
    // VIDEO CONTAINER
    var videoContainer = document.getElementById('b-video-container');
    var video = videoContainer.children[0];
    // ADD PAUSED STATE TO VIDEO
    videoContainer.classList.add('paused');
    
    function Play() {
        if(video.paused) {
            video.play();
            videoContainer.classList.remove('paused'); 
        } else {
            video.pause();
            videoContainer.classList.add('paused'); 
        }
    }

    videoContainer.addEventListener('click', Play);
    // END VIDEO

    // VANILLA TILT
    let heroBox = document.querySelector('.b-hero1');
    heroBox.tiltSet = false;

    function setVanillaClass() {
        if(heroBox.tiltSet) {
            $(heroBox).on('mouseover', function() {
                heroBox.classList.add('vanilla-tilt');
            });
        }
    }

    function setVanilla(e) {
        let size = $(window).width();

        if(size >= 768 && heroBox.tiltSet === false ) {
            VanillaTilt.init(heroBox, {
                max: 12,
                speed: 400
            });
            heroBox.tiltSet = true;     
            setVanillaClass();
        } else if(size < 768 && heroBox.tiltSet ) {
            heroBox.vanillaTilt.destroy();
            heroBox.tiltSet = false;
            heroBox.classList.remove('vanilla-tilt');
            $(heroBox).off('mouseover');
        }
    }
    

    $(window).on('resize load', setVanilla);
    // END VANILLA TILT

    // START REGISTRATION
    let registerButton = document.querySelectorAll('.register-modal');
    let registrationOverlay = document.querySelector('.registration-overlay');
    let registrationBox = registrationOverlay.querySelector('.registration-box');
    let siteOverlay = document.querySelector('.site');

    const showModal = function(){
        console.log('SHOW MODAL!');
        registrationOverlay.classList.remove('registration-overlay-hidden');
        registrationOverlay.classList.remove('registration-overlay-out');
        registrationBox.classList.remove('registration-box-out');
        siteOverlay.classList.remove('site-out');

        registrationOverlay.classList.add('registration-overlay-in');
        registrationBox.classList.add('registration-box-in');
        siteOverlay.classList.add('site-in');
    };

    const hideModal = function(){
        registrationOverlay.classList.remove('registration-overlay-in');

        registrationBox.classList.remove('registration-box-in');
        siteOverlay.classList.remove('site-in');

        registrationOverlay.classList.add('registration-overlay-out');
        registrationBox.classList.add('registration-box-out');
        siteOverlay.classList.add('site-out');
        setTimeout(function(){ 
            registrationOverlay.classList.add('registration-overlay-hidden'); }, 600);
        
    };


    for (var button of registerButton) {
        button.addEventListener('click', function(){
            showModal();
        });
    }

    registrationOverlay.addEventListener('click', function(e){
        if(e.target.classList.contains('modal--close')){
            hideModal();
        }
    });
});