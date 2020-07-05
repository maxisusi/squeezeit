const cardWrapper = document.querySelector('.card-handler');
const API_URL = 'http://localhost:1337/get-squeeze';

document.addEventListener('DOMContentLoaded', async() =>{
    
    const response = await fetch(API_URL);
    const data = await response.json();
    displayCard(data);
    console.log(data);

    
    
});

function displayCard(data) {
    let counter = 0;



    if(counter < data.length) {
        const { title, description} = data[counter];
        console.log(title);
    }

}









{/* <div class="card">
    <div class="card-description">
        <h1>69</h1>
        <p>This can't excites me more</p>
    </div>
    <h2 class="vote-title">Do you squeeze this idea?</h2>
    <div class="vote">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" class="yes"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" class="no"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" /></svg>
    </div>
</div> */}