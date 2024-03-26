export default function decorate(block) {
  const tablist = block.querySelector('.tablist-wrapper .tablist > div:first-child');
  tablist.classList.add('tabs');
  for (let i = 0; i < tablist.children.length; i += 1) {
    const child = tablist.children[i];
    child.classList.add('tab');
    child.setAttribute('data-target', `tab-${i}`);
  }
  const tabContentlist = block.querySelector('.tablist-wrapper .tablist > div:last-child');
  tabContentlist.classList.add('tabContent');
  for (let i = 0; i < tabContentlist.children.length; i += 1) {
    const child = tabContentlist.children[i];
    child.classList.add('panel', `tab-${i}`);
    // child.setAttribute('data-target', `panel-${i}`);
  }
  tablist.children[0].classList.add('active');
  tabContentlist.children[0].classList.add('active');
  // const tabs = block.querySelectorAll('.tabs');
  const tab = block.querySelectorAll('.tab');
  const panel = block.querySelectorAll('.panel');
  function onTabClick(event) {
    for (let i = 0; i < tab.length; i += 1) {
      tab[i].classList.remove('active');
    }
    for (let i = 0; i < panel.length; i += 1) {
      panel[i].classList.remove('active');
    }
    // activate new tabs and panel
    event.target.classList.add('active');
    const classString = event.target.getAttribute('data-target');
    // console.log(classString);
    tabContentlist.getElementsByClassName(classString)[0].classList.add('active');
  }
  for (let i = 0; i < tab.length; i += 1) {
    tab[i].addEventListener('click', onTabClick, false);
  }
}
