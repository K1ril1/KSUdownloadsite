function setBackgroundByTime() {
  const now = new Date();
  const hour = now.getHours();
  const container = document.getElementById('background-container');
  

  if (hour >= 4 && hour < 12) {
    container.style.backgroundImage = "url('morning.png')";
  } else if (hour >= 12 && hour < 18) {
    container.style.backgroundImage = "url('day.png')";
  } else if (hour >= 18 && hour < 23) {
    container.style.backgroundImage = "url('vecher.png')";
  } else {
    container.style.backgroundImage = "url('night.png')";
  }
}


setBackgroundByTime();


let lastHour = null;

function checkHour() {
    const hour = new Date().getHours();
    if (hour !== lastHour) {
        setBackgroundByTime();
        lastHour = hour;
    }
    setTimeout(checkHour, 1000); 
}

checkHour();


function preloadImages() {
    const images = [
        'images/morning.png',
        'images/day.png',
        'images/vecher.png',
		'images/night.png'
    ];
    images.forEach(img => {
        new Image().src = img;
    });
}

preloadImages();