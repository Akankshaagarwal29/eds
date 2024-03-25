export default function decorate(block){
  const container = block.querySelector('.riskfactor > div:first-child');
  const divElement = document.createElement('div');
  container.prepend(divElement);
  divElement.classList.add('riskHead');
  const riskHeadChild = block.querySelector('.riskfactor > div:first-child > div:nth-child(2) ');
  divElement.appendChild(riskHeadChild);
  // console.log(block);
}