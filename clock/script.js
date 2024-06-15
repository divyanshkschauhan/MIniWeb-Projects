function setClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secDegrees = ((seconds / 60) * 360) + 90;
    const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    
    document.querySelector('.sec').style.transform = `rotate(${secDegrees}deg)`;
    document.querySelector('.min').style.transform = `rotate(${minDegrees}deg)`;
    document.querySelector('.hour').style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock, 1000);

setClock(); // Initial call to set the clock immediately
