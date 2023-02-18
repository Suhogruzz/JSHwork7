const tabs = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

[...tabs].forEach( tab => {
    tab.addEventListener('click', tabsChange);
}) 
    
function tabsChange(event) {

    [...tabs].forEach( tab => {
        tab.className = 'tab';
    })
    event.target.className = 'tab tab_active';

    [...content].forEach(textBlock => {
        textBlock.className = 'tab__content';
    })

    let index = [...tabs].indexOf(event.target);
    content[index].className = 'tab__content tab__content_active';
}