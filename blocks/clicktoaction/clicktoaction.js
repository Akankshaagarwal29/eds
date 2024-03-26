export default function decorate(block) {
  const selectDiv = block.querySelectorAll('.clicktoaction > div > div');
  //  console.log(selectDiv.length);
  for (let i = 0; i < selectDiv.length; i += 1) {
    const childDiv = selectDiv[i];
    if (i === 1 || i === 3) {
      selectDiv[i].classList.add('divider');
      selectDiv[i].innerHTML = '<hr />';
    }//  else{
    //   const anchorLink = selectDiv[i].querySelector("a");
    //   console.log(anchorLink);
    //   anchorLink.appendChild(spanTag);//  }
    const anchorLinks = childDiv.querySelectorAll('a'); // Get all `<a>` elements inside the current `div`
    anchorLinks.forEach((anchorLink) => {
      const spanTag = document.createElement('span');
      spanTag.classList.add('arrow-left');
      const clonedSpanTag1 = spanTag.cloneNode(); // Create a clone of the `spanTag` element
      anchorLink.appendChild(spanTag);
      anchorLink.appendChild(clonedSpanTag1);
    });
  }
}
