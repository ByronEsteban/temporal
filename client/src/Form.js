import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    //NO ANDA
    const question = { text: text};
    const image = { img: img };
    axios.post('/question/preguntas', question)
      .then(res => {
        console.log(res.question);
        setText('');
      });

    axios.post('/question/preguntas', image)
      .then(res => {
        console.log(res.image);
        setImg('');
      });
  };

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleChange1 = e => {
    setImg(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div id="myCarousel" className="carousel slide text-bg-dark" data-bs-ride="carousel">
        <div className="carousel-indicators text-bg-dark">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner text-bg-dark">
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

            <div className="container">
              <div className="carousel-caption text-start text-bg-dark">
                <p className = "text-center text-bg-dark fs-3">Matematicas</p>
                <p className="text-center">
                <p className="justify-content-center text-align-center"><a className="btn btn-lg btn-primary" href="#">Jugar</a></p>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

            <div className="container">
              <div className="carousel-caption">
                <h1>Preguntados la35</h1>
                <p>Para jugar y elegir el tema de las preguntas o preguntar pase la pagina</p>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

            <div className="container">
              <div className="carousel-caption text-end">
              <p className="text-center">
                <p className="text-center fs-3">Ajedrez</p>
                <p><a className="btn btn-lg btn-primary btn btn-lg btn-primary" href="#">Jugar</a></p>
              </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </form >
  );
}

export default Form;
