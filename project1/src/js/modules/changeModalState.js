import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfil = document.querySelectorAll('.checkbox');

    checkNumInputs('#width'); // функция проверки того что вводятся только числа, эта фукнция отедльный модуль     
    checkNumInputs('#height'); // функция проверки того что вводятся только числа, эта фукнция отедльный модуль     

    function bindActionToElems(event, elem, prop){ // функция которая на каждый элемент навешивает обработчик события и записывает в определенное свойство prop
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName){ // свойство nodeName объекта Node возвращает строку (DOMString), содержащую имя текущего узла. Свойство доступно только для чтения
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox'){ //метод getAttribute() объекта Element возвращает значение указанного атрибута элемента. Если данный атрибут не существует у указанного элемента, то возвращаемое значение будет соответствовать значению null
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) => { // что бы можно было поставить только одну галку
                                box.checked = false;
                                if (i == j){
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state)
            })
            
        })
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfil, 'profile');
};

export default changeModalState;