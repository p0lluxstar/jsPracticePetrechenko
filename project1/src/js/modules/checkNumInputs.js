const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item =>{ // функция проверка ввода номера телефона, если вводится не цифра то ничего не будет прописываться
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    }); 
};

export default checkNumInputs;