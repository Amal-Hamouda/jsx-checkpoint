import './App.css';
import './style.css'
import React from 'react';
import myImg from './imageInSrc.jpg'

function App() {
  return (
    
    <React.Fragment>
  <div className="All" alt='1'>

<h1 className="title red">Amal H</h1>

<br />

<img src={myImg} alt='2'/>

<br />

<img src="imageInPublic.jpg" alt='3'/>

<video width="320" height="240" controls >

<source src="myVideo.mp4" type="video/mp4" />

</video>

</div>
 
</React.Fragment>
  );
}

export default App;
