const sendForm = () => {

    const errorMessage = 'Извините, что-то пошло не так',
    loadMessage = 'Идёт отправка, ожидайте',
    succesMessage = 'Отправлено';

    const formArr = document.querySelectorAll('form');

    formArr.forEach((item) => {
        item.addEventListener('input', (elem) => {

            if (elem.target.classList.contains('phone-user')){
                elem.target.value = elem.target.value.replace(/[^0-9]/, '');
            }
            if (elem.target.getAttribute('name') === 'user_name'){
                elem.target.value = elem.target.value.replace(/[^А-яЁё]/, '');
            }

        });
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 22px';

        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(item);
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('Status network not 200');
                }
                statusMessage.textContent = succesMessage;
            })
            .then(() => event.target.querySelectorAll('input').forEach((item) => {
                item.value = '';  
            }))
            .catch(() => statusMessage.textContent = errorMessage);
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
    });

};

export default sendForm;