const sendForm = (form, question = null) => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Готово!',
        incorrectMessage = 'Данные введены некорректно!';

    const formInputs = form.querySelectorAll('input');
    let count = 0,
        body;

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    
    const clearForm = () => {
        formInputs.forEach((val) => {
            val.value = '';
        });
    };
    
    const validator = () => {
        count = 0;
        let validation = [(/[а-я].|ё/i), /[0-9]./];
        for (let i = 0; i < formInputs.length; i++) {
            if (formInputs.length === 1) {
                validation = validation.reverse();
            }
            if(!validation[i].test(`/${formInputs[i].value}/`)) {
                formInputs[i].value = '';
                formInputs[i].style.borderColor = 'red';
                count++;
            }
        }
    };
    
    const clearStatusMessage = () => {
        setTimeout(() => {
            statusMessage.textContent = '';
        },5000);
    };
    
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        
        validator();

        if (question) {
            body = Object.assign(body, question);
        }
        if (count > 0) {
            statusMessage.textContent = incorrectMessage;
            clearStatusMessage();
            return;
        }
        
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
            .then(() => {
                for (let i = 0; i < formInputs.length; i++) {
                    formInputs[i].style.borderColor = '';
                }
                clearStatusMessage();
                clearForm();
            });
    });

};

export default sendForm;