const sendForm = (form) => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Готово!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    
    const clearForm = () => {
        let formInputs = form.querySelectorAll('input');
        formInputs.forEach((val) => {
            val.value = '';
        });
    };
    
    const clearStatusMessage = () => {
        setTimeout(() => {
            statusMessage.textContent = '';
        },5000);
    };
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            })
            .then(clearStatusMessage);
        clearForm();
    });
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
    };

};

export default sendForm;