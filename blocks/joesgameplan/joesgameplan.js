export default function decorate(block) {
  const videoSection = block.querySelector('.joesgameplan > div > div:first-child');
  videoSection.classList.add('videoContainer');
  videoSection.removeChild(videoSection.firstElementChild);
  const video = document.createElement('video');
  // Set video attributes
  video.src = 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4';
  video.poster = 'https://cf-images.eu-west-1.prod.boltdns.net/v1/static/1852113022001/d88eeb20-aa49-44d7-8b9a-06da5895dec7/16e74424-7cd6-4ba4-8e3e-2a1408d4fa3c/1611x897/match/image.jpg';
  video.autoplay = false;
  video.controls = true;
  video.muted = false;
  videoSection.appendChild(video);
  const txtContent = block.querySelector('.joesgameplan > div > div:nth-child(2)');
  txtContent.classList.add('txtContent');
  // txtContent.style.display = none;
  const transcript = block.querySelector('.joesgameplan > div:nth-child(2)');
  transcript.classList.add('transcriptWrapper');
  transcript.style.display = 'none';
  const getAnchor = document.querySelector('.joesgameplan > div .videoContainer > p a');
  // console.log(getAnchor);
  getAnchor.setAttribute('id', 'toggleBtn');
  getAnchor.addEventListener('click', (event) => {
    event.preventDefault();
    // let eleToToggle = document.getElementsByClassName('transcriptWrapper');
    if (transcript.style.display === 'none') {
      transcript.style.display = 'block';
      getAnchor.parentNode.classList.add('blueBorder');
      getAnchor.innerHTML = 'Hide Transcript x';
    } else {
      transcript.style.display = 'none';
      getAnchor.parentNode.classList.remove('blueBorder');
      getAnchor.innerHTML = 'View Transcript';
    }
  });
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (vw <= 767) {
    // console.log('small device');
    const ptxtContent = document.querySelector('.joesgameplan > div');
    ptxtContent.removeChild(ptxtContent.lastElementChild);
    const smallTxtContent = document.createElement('div');
    // const divNode = transcript.after(smallTxtContent);
    smallTxtContent.classList.add('small-txtContenr');
    smallTxtContent.appendChild(txtContent);
    // divNode.innerHTML = 'txtContent';
    // console.log(divNode);
  } else {
    // console.log('large')
  }
}
