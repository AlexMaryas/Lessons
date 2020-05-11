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
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        
        const arrInpId = ['name', 'phone', 'message'];
        let userInputs = [];
        for (let i = 0; i < arrInpId.length; i++) {
            let input = form.querySelector(`[name="user_${arrInpId[i]}"]`);
            if(input) {
                userInputs[i] = input.value;
            }
        }
        let nameValues = `/${userInputs[0]}/`.match(/[\s]|[a-z]|[а-я]/gi),
            phoneValues = `/${userInputs[1]}/`.match(/[8|\+]|[\d]/g),
            messageValues = `/${userInputs[2]}/`.match(/[\s]|[a-z]|[а-я]/gi),
            userValues = [nameValues, phoneValues, messageValues];

        for (let i = 0; i < userInputs.length; i++) {
            let count = 0;
            if(userValues[i] === null || userInputs[i] !== userValues[i].join('')) {
                count++;
            }
            if (count !== 0) {
                statusMessage.textContent = 'Данные введены некорректно!';
                return;
            }
        }
        
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status not 200')
                }
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
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