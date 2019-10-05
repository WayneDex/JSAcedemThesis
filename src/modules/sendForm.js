const sendForm = () => {
    const errorMessage = 'Извините, что-то пошло не так',
        loadMessage = 'Идёт отправка, ожидайте',
        succesMessage = 'Отправлено';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 22px';

    document.body.addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.appendChild(statusMessage);

        statusMessage.textContent = loadMessage;
        
        const formData = new FormData(event.target);

        postData(formData)
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

    document.body.addEventListener('input', (event) => {
        let target = event.target;

        if (target.classList.contains('phone-user')){
            target.value = target.value.replace(/[^0-9]/, '');
        }
        if (target.getAttribute('name') === 'user_name'){
            target.value = target.value.replace(/[^А-яЁё]/, '');
        }
    });

    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData,
            credentials: 'include'
        });
    };
};

export default sendForm;