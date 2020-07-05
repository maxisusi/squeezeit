const squeezeForm = document.querySelector('form');

squeezeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');

    const formData = new FormData(squeezeForm);
    const title = formData.get('title');
    const description = formData.get('description');

    const squeeze = {
        title,
        description,
    }

    console.log(squeeze);

    squeezeForm.reset();
})