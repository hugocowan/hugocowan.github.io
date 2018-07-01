function toggleLinks(burger){ // eslint-disable-line no-unused-vars
  const content = document.getElementById('nav-content');
  const nav = document.getElementsByTagName('nav')[0];
  if(content.className === 'nav-content'){
    content.className += ' responsive';
    nav.className += 'responsive';
  } else{
    content.className = 'nav-content';
    nav.className = '';
  }
  // console.log(burger);
  burger.classList.toggle('change');
}
