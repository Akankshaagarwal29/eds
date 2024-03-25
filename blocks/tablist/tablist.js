export default function decorate(block){
    const tablist = document.querySelector('.tablist-wrapper .tablist > div:first-child');
    tablist.classList.add("tabs");

    for(let i=0; i < tablist.children.length; i++ ){
        const child = tablist.children[i];
        child.classList.add('tab');
        child.setAttribute("data-target", `tab-${i}`);
    }
    
    const tabContentlist = document.querySelector('.tablist-wrapper .tablist > div:last-child');
    tabContentlist.classList.add("tabContent");
    for(let i =0; i<tabContentlist.children.length; i++){
        const child = tabContentlist.children[i];
        child.classList.add("panel", `tab-${i}`);
        // child.setAttribute("data-target", `panel-${i}`);
    }
    
    tablist.children[0].classList.add('active');
    tabContentlist.children[0].classList.add('active');
    const tabs= document.querySelectorAll('.tabs');
    const tab = document.querySelectorAll(".tab");
    const panel = document.querySelectorAll(".panel");
    
    function onTabClick(event){
    
        for(let i=0; i<tab.length; i++){
            tab[i].classList.remove("active");
        }
        for(let i=0; i<panel.length; i++){
            panel[i].classList.remove("active");
        }
   
  // activate new tabs and panel
  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  
  
 
  tabContentlist.getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}

    
}
