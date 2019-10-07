const popupCheck = () => {
    const checkBtn = document.querySelector('.popup'),
    popupCheckContent = document.querySelector('.popup-content');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.closest('.check-btn')) {
            event.preventDefault();
            let popupWindow = document.documentElement.clientWidth;
            
            if (popupWindow >= 750) {
                checkBtn.style.cssText = 'display: block';
                popupCheckContent.animate([
                    {transform: 'translateX(1000px)'},
                    {transform: 'translateX(-200px)'}
                ], {
                    duration: 750,
                    iterations: 1
                });
            } else {
                checkBtn.style.cssText = 'display: block';
            }
        } else if (target.classList.contains('popup-close')) {
            checkBtn.style.cssText = 'display: none';
        } else {
            let popup = target.closest('.popup-content');

            if (!popup) {
                checkBtn.style.cssText = 'display: none';
            }
        }
    });
};

export default popupCheck;