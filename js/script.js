document.addEventListener('DOMContentLoaded',function(){
  let  button = document.querySelectorAll(".play");

    for (let i =0; i<button.length; i++){
      button[i].addEventListener("click",function(){
      let audioId = this.getAttribute('data-id');
      let playedAudio = document.getElementById(audioId);
      playedAudio.play();
      this.classList.add("lucid"); 
      })
    }
    
    
  function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
  }
  
  const countDownDate = addDays(new Date(), 4).getTime();

  setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    let dateDay = document.querySelector(".date-day");
    days > 9 ? dateDay.innerHTML = days : dateDay.innerHTML = "0"+ days;
  
    let dateHours = document.querySelector(".date-hours");
    
    hours > 9 ? dateHours.innerHTML = hours : dateHours.innerHTML = "0" + hours;

    let dateMinutes = document.querySelector(".date-minutes");
    
    minutes>9 ? dateMinutes.innerHTML = minutes : dateMinutes.innerHTML = "0" + minutes;

    let dateSeconds = document.querySelector(".date-seconds");
    
    seconds>9 ? dateSeconds.innerHTML = seconds : dateSeconds.innerHTML = "0" + seconds;

    if (distance < 0) {
      document.querySelector('.date-day').innerHTML = "00";
      document.querySelector('.date-hours').innerHTML = "00";
      document.querySelector('.date-minutes').innerHTML = "00";
      document.querySelector('.date-seconds').innerHTML = "00";
    }
  }, 1000);
          
  $('.prev').click(function(){
    $('.slider').slick('slickPrev');
  })
    
  $('.next').click(function(){
    $('.slider').slick('slickNext');
  })

  $('.slider').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            autoplaySpeed: 600
          }
        }
      ]
  });

  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
  });

  let counter = 0;
  let popup = document.querySelectorAll('.popup');

  for(let i=0; i<popup.length; i++) {
    popup[i].addEventListener("click", function(){
      this.setAttribute('disabled', 'disabled');
      counter++;
      setTimeout(function () {
        $('.popup').popover('hide');
      }, 1000);
      if (counter === 10) {
        for (let i = 0; i < popup.length; i++) {
          popup[i].setAttribute('disabled', 'disabled');
          const modal = document.querySelector(".modal");
          modal.classList.add("visible");
        }
      }
    })
  }

  const cross = document.querySelector('.close');
  const close = document.querySelector(".close-modal");

  function hideModal(item) {
    item.addEventListener("click", function() {
      const modal = document.querySelector(".modal");
      modal.classList.remove("visible");
    })
  }

  hideModal(cross);
  hideModal(close);

  let vote = document.querySelector(".vote-btn");
  vote.addEventListener("click", function(){
    const votingModal = document.querySelector(".vote-modal");
    votingModal.classList.toggle("visible");
  })

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});