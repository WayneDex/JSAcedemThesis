const accord = () => {
    const accordion = document.querySelector('.slideInDown'),
        panelBtn = document.querySelectorAll('.panel-heading'),
        content = document.querySelectorAll('.collapse');
        console.log(panelBtn);

    const accordContent = (index) => {
        content.forEach((item, i) => {
            if(index === i){
                item.style.cssText = 'display: block';
            }else{
                item.style.cssText = 'display: none';
            }
        });
    };
    
    accordion.addEventListener('click', (event) => {
        let target = event.target;
        event.preventDefault();
        target = target.closest('.panel-heading');
        if(target){
            panelBtn.forEach((item, i) => {
                if(item === target){
                    accordContent(i);
                }
            });
        }
    });
};

export default accord;