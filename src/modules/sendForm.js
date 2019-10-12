const sendForm = (element) => {
    const errorMessage = 'Извините, что-то пошло не так',
    loadMessage = 'Идёт отправка, ожидайте',
    succesMessage = 'Отправлено';
  
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 22px;`;
  
    element.appendChild(statusMessage);
    
    setTimeout(() => {
      statusMessage.textContent = '';
    }, 5000);
  
    statusMessage.textContent = loadMessage;
    const formData = new FormData(element);
    
    formData.forEach((val, key) => {
      window.globalObj[key] = val;
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
  
    postData(window.globalObj)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200.');
        }
        statusMessage.textContent = succesMessage;
        const formInputs = [...document.querySelectorAll('input')];
        formInputs.forEach(item => {
          if (item.value !== '') {
            item.value = '';
          }
        });
        window.globalObj = {};
      })
      .catch(() => statusMessage.textContent = errorMessage);
  };
  export default sendForm;