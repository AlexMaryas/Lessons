const sendForm = (form, additionalForm, inp, sel) => {
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
        if (sel) {
            sel.forEach( item => item.selectedIndex = 0);
            document.getElementById('calc-result').value = '';
            inp[0].checked = false;
            inp[1].checked = true;
            inp[2].value = '';
        } else if (inp) {
            inp[0].value = '';
        }

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
    let i = 0;
    form.addEventListener('submit', (event) => {
        if (i === 0 || !additionalForm) {

            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            validator();

            if (additionalForm) {
                body = Object.assign(body, additionalForm);
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
                i++;
        }
        
    });

};

export default sendForm;