export default function decorate(block){
    const btnContainer = block.querySelector('.button-container');
    // console.log(btnContainer);
    const spanTag = document.createElement("span");
    spanTag.classList.add('arrow-left');
btnContainer.appendChild(spanTag);
const cloneNode = spanTag.cloneNode(true)
btnContainer.appendChild(cloneNode);
    // console.log(spanTag);

}