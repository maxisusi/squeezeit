import  {displayCard}  from './displayElement.js';

const API_URL_GET_SQUEEZE = 'http://localhost:1337/get-squeeze';

const cardWrapper = document.querySelector('.card-controller');

document.addEventListener('DOMContentLoaded', async () => {


    const response = await fetch(API_URL_GET_SQUEEZE);
    const data = await response.json();

    if(data.length === 0) {
        console.log('no data');
        const title = document.createElement('h1');
        title.classList.add('vote-title');
        title.innerHTML = `There is no squeeze...<br/>Go create one!`
        cardWrapper.appendChild(title);
    }
    else {
        displayCard(data);
    }

    console.log(data);



});


