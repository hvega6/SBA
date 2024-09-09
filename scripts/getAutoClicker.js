var annoyingDog = $('.annoying-dog');
var annoyingDogAudio = $('body').find('audio')[0];
var clickCount = 0; // Initialize click count

annoyingDog.hover(function(){
  annoyingDogAudio.play();
  $('.pet-me').hide();
}, function(){
  annoyingDogAudio.pause();
  $('.pet-me').show();
});

// Update the click function to count clicks
annoyingDog.click(function(){
  annoyingDogAudio.play();
  $('.pet-me').hide();
  
  clickCount++; // Increment click count
  if (clickCount >= 20) { // Check if 50 clicks have been reached
    window.location.href = "/main.html"; // Redirect to main.html
  }
  
  return false; // Prevent default action
});