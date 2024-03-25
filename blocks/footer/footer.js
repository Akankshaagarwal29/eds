import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  

  if(vw <= 900){
    console.log(vw);
    const secLastElement = block.querySelector(".footerarea > div > div:nth-last-child(2) ");
    console.log(secLastElement);
    const lastElement = block.querySelector(".footerarea > div > div:last-child > p:first-child");
    console.log(lastElement);
    lastElement.appendChild(secLastElement);
  }
  
}
