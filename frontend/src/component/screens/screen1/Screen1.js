import React from 'react';
import './Screen1.css';
import image from '../../../images/n111.png';
import cross from '../../../images/cross.png';

const Screen1 = () => {
  return (
    <div className="main__whole__login__container">
      <div className='Screen1__mainContainer'>
        <div className="screen1__upperContainer">
          <div className="screen1__image__container">
            <img src={image} className='screen1__inner__image' alt="" />
          </div>
          <div className="cross__icon">
            <img src={cross} alt="" />
          </div>
        </div>

<div className="screen1__innerContainer">
<h1 className='screen1__innerContainer__heading'>Bienvenue dans cs business game</h1>
<p>La camptabilite  pour tous </p>
<p>
Adin de comprendre le fonctionnement global de I'application, je vous invite a consulter la <br />video proposee ci-dessous
</p>
<button className="screen1__innerContainer__button">
  <span className="inner__button__text">Demarrer la video</span>
</button>


</div>

      </div>
    </div>
  );
}

export default Screen1;
