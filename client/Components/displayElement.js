

export function displayCard(data) {

    const cardWrapper = document.querySelector('.card-controller');

    const { title,
        dateCreated,
        description,
        _id } = data[0];

    const card = document.createElement('div');
    card.classList.add('card');

    const cardTextElement = document.createElement('div');
    cardTextElement.classList.add('card-text-element');

    const cardTextTitle = document.createElement('h1');
    cardTextTitle.classList.add('card-text-title');
    cardTextTitle.textContent = title;

    const cardTextDate = document.createElement('p');
    cardTextDate.classList.add('card-text-date');
    cardTextDate.textContent = dateCreated;

    const cardTextDesc = document.createElement('p');
    cardTextDesc.classList.add('card-text-desc');
    cardTextDesc.textContent = description;

    cardTextElement.append(cardTextTitle, cardTextDate, cardTextDesc);

    const cardVote = document.createElement('div');
    cardVote.classList.add('card-vote');

    const yesVote = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    yesVote.setAttribute('width', '75');
    yesVote.setAttribute('height', '75');
    yesVote.setAttribute('viewBox', '0 0 24 24');
    yesVote.classList.add('vote-button');
    yesVote.classList.add('yes');
    yesVote.innerHTML = '<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>';

    const separationLine = document.createElement('div');
    separationLine.classList.add('separation-line');

    const noVote = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    noVote.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    noVote.setAttribute('width', '75');
    noVote.setAttribute('height', '75');
    noVote.setAttribute('viewBox', '0 0 24 24');
    noVote.classList.add('vote-button');
    noVote.classList.add('no');
    noVote.innerHTML = '<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/>';

    cardVote.append(yesVote, separationLine, noVote);

    card.append(cardTextElement, cardVote);
    cardWrapper.appendChild(card);

    card.addEventListener('click', (event) => {

        let currentSelection = event.target;

        if (currentSelection.tagName == 'path')
            currentSelection = currentSelection.parentElement;

        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            }
        }

        let idea;
        let status;

        switch (currentSelection.classList.value) {
            case 'vote-button yes':
                console.log('Idea accepted');
                status = 'accepted';
                idea = currentSelection.parentElement.parentElement.childNodes[0].childNodes[0].textContent;
                break;

            case 'vote-button no':
                console.log('Idea rejected');
                status = 'rejected';
                idea = currentSelection.parentElement.parentElement.childNodes[0].childNodes[0].textContent;
                break;
        }

        const validation = {
            status,
            idea,
            data,
            _id
        }

        
        //sendFeedback(validation);
        //location.reload(); 
    })

    // async function sendFeedback(data) {
    //     const API_URL_POST_SQUEEZE = 'http://localhost:1337/post-squeeze';
    //     const options = {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     };

    //     const respone = await fetch(API_URL_POST_SQUEEZE, options);
    //     const answer = await respone.json();
    //     console.log(answer);


    // }

}




