function changeIcon(icon) {
    icon.classList.toggle("change");
}

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-equipment', {
        perPage: 1,
        perMove: 1,
        type    : 'loop',
        autoplay: true,
    }).mount();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

function playSound() {
    var audio = new Audio('sound/success.mp3');
    audio.play();
    audio.addEventListener('ended', function() {
        window.location.href = 'becomeMember.html';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var popUp = document.querySelector('#popUp');
    var popUpText = document.querySelector('#popUpElement');
  
    popUp.addEventListener('click', function () {
        var leftValue = getComputedStyle(popUpText).left;
        if (leftValue === '0px') {
            popUpText.style.left = '-150%';
            popUpText.style.animation = 'slideOut 0.5s ease-in-out';
        } else {
            popUpText.style.left = '0';
            popUpText.style.animation = 'slideIn 0.5s ease-in-out';
          }
    });
});
  

document.getElementById('cart').addEventListener('click', cartHandler);

function playMessageSound(socialNetwork) {
    var audio = new Audio('sound/twitter.mp3');
    audio.play();
    audio.addEventListener('ended', function() {
        if(socialNetwork.id == "instagram"){
            window.location.href = 'https://www.instagram.com/';
        }
        else if(socialNetwork.id == "facebook"){
            window.location.href = 'https://www.facebook.com/';
        }
        else if(socialNetwork.id == "twitter"){
            window.location.href = 'https://twitter.com/?lang=ru';
        }
    });
    
}

