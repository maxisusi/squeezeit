const squeezeForm = document.querySelector('form');
const API_URL = 'http://localhost:1337/squeeze';

squeezeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('Form submitted');

    const formData = new FormData(squeezeForm);
    const title = formData.get('title');
    const description = formData.get('description');

    const squeeze = {
        title,
        description,
    }
    squeezeForm.reset();

    const options = {
        method: 'POST',
        body: JSON.stringify(squeeze),
        headers: {
            'Content-type': 'application/json'
        },
    };

    const response = await fetch(API_URL, options);
    const answer = response.json();
    console.log(answer);

})