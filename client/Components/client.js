const API_URL_GET_SQUEEZE = 'http://localhost:1337/get-squeeze';
import  {displayCard}  from './displayElement.js';


const cardWrapper = document.querySelector('.card-handler');

document.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch(API_URL_GET_SQUEEZE);
    const data = await response.json();

    if(data.length === 0) {
        console.log('no data');
        const title = document.createElement('h1');
        title.classList.add('vote-title');
        title.textContent = "There is no squeeze...Go create one!"
        cardWrapper.appendChild(title);
    }
    else {
        displayCard(data);

        }

    console.log(data);



});


