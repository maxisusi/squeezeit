

const cardHandler = document.querySelector('card-handler');
const API_URL_GET_DISLIKED_SQUEEZE = 'http://localhost:1337/get-disliked-squeeze';

document.addEventListener('DOMContentLoaded', async () => {
    
    const response = await fetch(API_URL_GET_DISLIKED_SQUEEZE);
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
    
        const noVote = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    
        noVote.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        noVote.setAttribute('width', '75');
        noVote.setAttribute('height', '75');
        noVote.setAttribute('viewBox', '0 0 24 24');
        noVote.classList.add('no');
        noVote.innerHTML = '<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/>';
    
        voteWrapper.append(noVote);
    
        card.append(cardDescriptionWrapper, voteTitle, voteWrapper);
    
        cardWrapper.appendChild(card);


    })

}