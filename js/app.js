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
