

const cardHandler = document.querySelector('card-handler');
const API_URL_GET_LIKED_SQUEEZE = 'http://localhost:1337/get-liked-squeeze';

document.addEventListener('DOMContentLoaded', async () => {
    
    const response = await fetch(API_URL_GET_LIKED_SQUEEZE);
    const data = await response.json();
    console.log(data);

    showCard(data);

})

function showCard(data) {

    data.forEach((element) => {
        const cardWrapper = document.querySelector('.card-handler');

        const card = document.createElement('div');
        card.classList.add('card');
    
        const cardDescriptionWrapper = document.createElement('div');
        cardDescriptionWrapper.classList.add('card-description');
    
        const cardTitle = document.createElement('h1');
        cardTitle.textContent = element.title;
    
        const cardDesc = document.createElement('p');
        cardDesc.textContent = element.description;
    
        cardDescriptionWrapper.append(cardTitle, cardDesc);
    
        const voteTitle = document.createElement('h2');
        voteTitle.classList.add('vote-title');
        voteTitle.textContent = "Do you squeeze this idea?";
    
        const voteWrapper = document.createElement('div');
        voteWrapper.classList.add('vote');
    
        const yesVote = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    
        yesVote.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
        yesVote.setAttribute('width', '75');
        yesVote.setAttribute('height', '75');
        yesVote.setAttribute('viewBox', '0 0 24 24');
        yesVote.classList.add('yes');
        yesVote.innerHTML = '<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>';
    
        voteWrapper.append(yesVote);
    
        card.append(cardDescriptionWrapper, voteTitle, voteWrapper);
    
        cardWrapper.appendChild(card);


    })

}