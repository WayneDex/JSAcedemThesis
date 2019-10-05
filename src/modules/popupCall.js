const popupCall = () => {
    const popupCall = document.querySelector('.popup'),
        popupCallContent = document.querySelector('.popup-content');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.closest('.call-btn')) {
            event.preventDefault();
            let popupWindow = document.documentElement.clientWidth;
            
            if (popupWindow >= 750) {
                popupCall.style.display = 'block';
                popupCallContent.animate([
                    {transform: 'translateX(-1000px)'},
                    {transform: 'translateX(-200px)'}
                ], {
                    duration: 750,
                    iterations: 1
                });
            } else {
                popupCall.style.display = 'block';
            }
        } else if (target.classList.contains('popup-close')) {
            popupCall.style.display = 'none';
        } else {
            let popup = target.closest('.popup-content');

            if (!popup) {
                popupCall.style.display = 'none';
            }
        }
    });
};

export default popupCall;