import React from 'react';
import './App.css';
import Container from './components/Container';

const scrollFunction = () =>{
  let mybutton = document.getElementById("scrollButton");
  if (window.innerWidth < 414){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.classList.remove('d-none');
      } else {
        mybutton.classList.add('d-none');
      }
  }else{
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      mybutton.classList.remove('d-none');
    } else {
      mybutton.classList.add('d-none');
    }
  }
};

window.addEventListener('scroll', scrollFunction);

const App = () => {
  return <Container />;
};

export default App;
