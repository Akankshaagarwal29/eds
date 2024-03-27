export default function decorate(block) {
  const trueFalse = block.querySelector('.truefalse > div:nth-child(2) > div:nth-child(2)');
  // console.log(block);
  trueFalse.classList.add('select-true-false');
  const trueRadio = document.createElement('input');
  trueRadio.type = 'radio';
  trueRadio.name = 'trueFalse';
  trueRadio.id = 'trueOption';
  trueRadio.value = 'true';
  const trueLabel = document.createElement('label');
  trueLabel.htmlFor = 'trueOption';
  trueLabel.textContent = 'True';
  trueFalse.appendChild(trueRadio);
  trueFalse.appendChild(trueLabel);
  const falseRadio = document.createElement('input');
  falseRadio.type = 'radio';
  falseRadio.name = 'trueFalse';
  falseRadio.id = 'falseOption';
  falseRadio.value = 'false';
  const falseLabel = document.createElement('label');
  falseLabel.htmlFor = 'falseOption';
  falseLabel.textContent = 'False';
  trueFalse.appendChild(falseRadio);
  trueFalse.appendChild(falseLabel);
  const defaultContent = block.querySelector('.truefalse > div:nth-child(2)');
  defaultContent.classList.add('defaultContent');
  const trueContent = block.querySelector('.truefalse > div:nth-child(3) > div');
  trueContent.classList.add('trueContent');
  trueContent.style.display = 'none';
  const falseContent = block.querySelector('.truefalse > div:nth-child(4) > div');
  falseContent.classList.add('falseContent');
  falseContent.style.display = 'none';
  trueRadio.addEventListener('click', () => {
    defaultContent.style.display = 'none';
    falseContent.style.display = 'none';
    trueContent.style.display = 'block';
  });
  falseRadio.addEventListener('click', () => {
    defaultContent.style.display = 'none';
    trueContent.style.display = 'none';
    falseContent.style.display = 'block';
  });
}
