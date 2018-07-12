function wrapper() {
  function toggleLinks(burger){ // eslint-disable-line no-unused-vars
    const content = document.getElementById('nav-content');
    if(content.className === 'nav-content'){
      content.className += ' responsive';
    } else{
      content.className = 'nav-content';
    }
    // console.log(burger);
    burger.classList.toggle('change');
  }

  // let oldPosition;
  window.addEventListener('scroll', () => {

    const navbar = document.getElementsByTagName('nav')[0];
    const newPosition = window.scrollY;

    console.log(window.scrollY);
    if (newPosition <= 0) {
      console.log('new position <= old one.');
      // oldPosition = newPosition;
      navbar.style.cssText =
      'position: absolute; color: black';

    } else {
      console.log('old position > new one.');
      // oldPosition = newPosition;
      navbar.style.cssText =
      'position: fixed; color: black';
    }

  });
}

wrapper();
