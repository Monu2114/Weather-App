const container = document.querySelector('.container');
const img = document.createElement('img');
const form = document.querySelector('form');
const input = document.querySelector('input');
const card = document.querySelector('.card');
const cloud = document.querySelector('.cloud');
const content = document.querySelector('.content');
const time = document.querySelector('.time');
async function getWeather(place){
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7eb784e77fd045e3bc0164711240307&q=${place}`);
        const data = await response.json();
        return{
          temp_c: data.current.temp_c,
          temp_f: data.current.temp_f,
            weather: data.current.condition.text,
            icon: data.current.condition.icon
    
        };

    }
    catch(error){
        console.log(error);
    }

}
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const place = input.value;
    const weatherData = await getWeather(place);
    console.log(weatherData);
     displayData(weatherData);
})
function displayData(data){
    cloud.style.display = 'flex';
    cloud.innerHTML=`
    <img src="${data.icon}" alt="weather icon">
    <h1>${data.temp_c}°C /</h1>
    <h1>${data.temp_f}°F</h1>
    `
    card.appendChild(cloud);
    content.innerHTML=`<h1>${data.weather}</h1>`
    if (data.weather.toLowerCase().includes('sunny')) {
        container.style.backgroundImage = 'url("https://miro.medium.com/v2/resize:fit:1400/0*SsC2eAfmZAmPVMUe.jpg")';
    } else if(data.weather.toLowerCase().includes('rain')) {
        container.style.backgroundImage =  'url("https://c4.wallpaperflare.com/wallpaper/146/76/2/autumn-leaves-love-rain-wallpaper-preview.jpg")';
    }
    else if(data.weather.toLowerCase().includes('cloudy')) {
        container.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPwNC6rS6RF8vWHp8xr9GGEWRbQKJi6DCFg&s")';
    }
    else if(data.weather.toLowerCase().includes('clear')) {
        container.style.backgroundImage = 'url("https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-lakescape-landscape-nature-scenery-hd-image_2950137.jpg")';
    }
    else if(data.weather.toLowerCase().includes('snow')) {
        container.style.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/814/791/615/ice-snow-snowfall-winter-wallpaper-preview.jpg")';
    }
    else if(data.weather.toLowerCase().includes('mist')) {
        container.style.backgroundImage = 'url("https://images.nationalgeographic.org/image/upload/v1638884972/EducationHub/photos/blue-mist.jpg")';
    }

    card.appendChild(content);
    container.appendChild(card);
    card.value = '';   
}
// time.innerHTML = new Date().toLocaleTimeString();

 function playAudioOnce() {
            new Audio('music.mp3').play().then(() => {
                console.log('Playing audio');
            }).catch(error => {
                console.error('Error playing audio:', error);
            });

            // Remove the event listener after the first click
            input.removeEventListener('click', playAudioOnce);
        }

        input.addEventListener('click', playAudioOnce);
