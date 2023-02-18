const mainValue = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('a');



mainValue.addEventListener('click', show);

[...links].forEach( link => {
    link.addEventListener('click', rename);
})

function show() {

    if (list.className === 'dropdown__list') {
        list.className = 'dropdown__list dropdown__list_active';
    } else {
        list.className = 'dropdown__list';
    }

}
    

function rename(event) {
    event.preventDefault();
    mainValue.textContent = event.target.textContent;
    list.className = 'dropdown__list';
}