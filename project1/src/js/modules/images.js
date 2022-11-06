const images = () => {
    const imgPopup = document.createElement('div'), // метод document.createElement() позволяет создать и вернуть новый элемент (пустой узел Element) с указанным именем тега.
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

    imgPopup.classList.add('popup') // classList.add добоввляет класс элементу
    workSection.appendChild(imgPopup); // Метод appendChild позволяет вставить в конец какого-либо другой элемент. Чаще всего используется после создания элемента с помощью createElement.

    imgPopup.style.justifyContent = 'center'; // CSS свойство justify-contentcss3 определяет как браузер распределяет пространство между и вокруг флекс элементов вдоль главной оси контейнера (горизонтально), или производит выравнивание всего макета сетки по оси строки grid-контейнера.

    imgPopup.style.alignItems = 'center';
    imgPopup.style.desplay = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) =>{
        e.preventDefault(); // метод preventDefault() объекта Event при вызове отменяет действие события по умолчанию. Событие продолжает распространяться как обычно, только с тем исключением, что событие ничего не делает.

        let target = e.target; //Target-это элемент, который вызвал событие (например, пользователь нажал на него). currentTarget-это элемент, к которому привязан прослушиватель событий.

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href'); // свойство parentNode объекта Node возвращает узел, который является родителем данного узла. В том случае, если узел не имеет родителя, или родитель не является элементом, то это свойство вернет значение null. метод getAttribute() объекта Element возвращает значение указанного атрибута элемента
            bigImage.setAttribute('src', path); // метод setAttribute() объекта Element позволяет добавить новый атрибут, или значение атрибута с указанным именем текущему элементу.
        }

        if (target && target.matches('div.popup')){ // Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.
            imgPopup.style.display = 'none';
        }
    })
}

export default images;