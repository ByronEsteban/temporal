import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {

  const [hiddenForm, setHiddenForm] = useState(true);

  const changeHiddenForm = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenRandom, setHiddenRandom] = useState(true);

  const changeHiddenRandom = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenMatematica, setHiddenMatematica] = useState(true);

  const changeHiddenMatematica = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenIngles, setHiddenIngles] = useState(true);

  const changeHiddenIngles = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenAjedrez, setHiddenAjedrez] = useState(true);

  const changeHiddenAjedrez = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenDb, setHiddenDb] = useState(true);

  const changeHiddenDb = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenMarvel, setHiddenMarvel] = useState(true);

  const changeHiddenMarvel = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenMf, setHiddenMf] = useState(true);

  const changeHiddenMf = () => {
    setHiddenForm(prev => !prev)
  }

  const [hiddenArg, setHiddenArg] = useState(true);

  const changeHiddenArg = () => {
    setHiddenForm(prev => !prev)
  }

  const [answerData, setAnswerData] = useState({
    answer1: {text: '', correct: false},
    answer2: {text: '', correct: false},
    answer3: {text: 'pINGUINO RA', correct: false},
    answer4: {text: '', correct: false}
  });

  const [formData, setFormData] = useState({
    text: '',
    answers: [answerData]
  });
  const [temp5, setTemp5] = useState({
    text: '', text1: '', text2: '', text3: '', text4: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sending data to server...', formData);
  };

  // const handleRadio = e => {
  //   console.log(e.target.previousSibling.name);
  //   const name = e.target.previousSibling.name;
  // }

  const handleChange = e => {
    const name = e.target.previousSibling.name;
    answerData.answer1.correct = false;
    answerData.answer2.correct = false;
    answerData.answer3.correct = false;
    answerData.answer4.correct = false;
    answerData[name].correct = true;
    console.log(answerData.answer1.correct);
    console.log(answerData.answer2.correct);
    console.log(answerData.answer3.correct);
    console.log(answerData.answer4.correct);
  };

  const addAnswer = e => {
    setFormData({...formData, text: temp5.text});
    answerData.answer1.text = temp5.text1;
    answerData.answer2.text = temp5.text2;
    answerData.answer3.text = temp5.text3;
    answerData.answer4.text = temp5.text4;
    axios.post('/question/preguntas', formData)
      .then(res => {
        setTemp5({text: '', text1: '', text2: '', text3: '', text4: ''});
    });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div id="myCarousel" className="carousel slide text-bg-dark" data-bs-ride="carousel">
    <div className="carousel-indicators text-bg-dark">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className="active" aria-current="true"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" className=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" className=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7" className=""></button>
    </div>
    <div className="carousel-inner text-bg-dark">
    <div className="carousel-item">
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

    <div className="container">
    <div className="carousel-caption text-start text-bg-dark">
    <p className = "text-center text-bg-dark fs-3">Matematicas</p>
    <p className="text-center">
    <p className="btn btn-warning"><a href="#ingles" className="nav-link px-2 text-dark">Jugar</a></p>
    </p>
    </div>
    </div>
    </div>
    <div className="carousel-item">
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

    <div className="container">
    <div className="carousel-caption text-end">
    <p className="text-center">
    <p className="text-center fs-3">Historia Argentina</p>
    <p className="btn btn-warning"><a href="#historiarg" className="nav-link px-2 text-dark">Jugar</a></p>
    </p>
    </div>
    </div>
    </div>
    <div className="carousel-item">
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

    <div className="container">
    <div className="carousel-caption text-end">
    <p className="text-center">
    <p className="text-center fs-3">Marvel</p>
    <p className="btn btn-warning"><a href="#marvel" className="nav-link px-2 text-dark">Jugar</a></p>
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
    <p className="btn btn-warning"><a href="#random" className="nav-link px-2 text-dark">¡Sorprendeme!</a></p>
    </div>
    </div>
    </div>
    <div className="carousel-item">
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

    <div className="container">
    <div className="carousel-caption text-end">
    <p className="text-center">
    <p className="text-center fs-3">Dragon Ball</p>
    <p className="btn btn-warning"><a href="#db" className="nav-link px-2 text-dark">Jugar</a></p>
    </p>
    </div>
    </div>
    </div>
    <div className="carousel-item">
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

    <div className="container">
    <div className="carousel-caption text-end">
    </div>
    <p className="text-center">
    <p className="text-center fs-3">Ingles</p>
    <p className="btn btn-warning"><a href="#ingles" className="nav-link px-2 text-dark">Jugar</a></p>
    </p>
    </div>
    </div>
    <div className="carousel-item">
    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

    <div className="container">
    <div className="carousel-caption text-end">
    <p className="text-center">
    <p className="text-center fs-3">Ajedrez</p>
    <p className="btn btn-warning"><a href="#ajedrez" className="nav-link px-2 text-dark">Jugar</a></p>
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

    <div className="text-bg-dark"><svg></svg></div>
    <div className="text-bg-dark"hidden={!hiddenForm}>
    <div className="text-center">
      <button className="btn btn-warning" onClick={changeHiddenForm}>Hacer Pregunta</button>
      </div>
      <svg>
      </svg>
    </div>

    <div id="preguntas"className="text-bg-dark text-center" hidden={hiddenForm}>
      <button  onClick={changeHiddenForm}>Me arrepentí</button>
      <br/>
      <label>¿Cúal es tu pregunta? : </label>
      <br />
      <input
        required
        type="text"
        name="text"
        onChange={e => setTemp5({...temp5, text: e.target.value})}
        value={temp5.text}
        />
      <br />
      <br />
      <label>Respuesta 1:</label>
      <input
        type="text"
        name="answer1"
        required
        onChange={e => setTemp5({...temp5, text1: e.target.value})}
        value={temp5.text1}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />
      <br />
      <label>Respuesta 2:</label>
      <input
        type="text"
        name="answer2"
        required
        onChange={e => setTemp5({...temp5, text2: e.target.value})}
        value={temp5.text2}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 3:</label>
      <input
        type="text"
        name="answer3"
        required
        onChange={e => setTemp5({...temp5, text3: e.target.value})}
        value={temp5.text3}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 4:</label>
      <input
        type="text"
        name="answer4"
        required
        onChange={e => setTemp5({...temp5, text4: e.target.value})}
        value={temp5.text4}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />

      <button onClick={addAnswer, changeHiddenForm}>Mandar</button>
      </div>
      <div className="text-bg-dark"> <svg></svg></div>

      <div id="random" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

      <div className="text-bg-dark"> <svg></svg></div>


      <div id="db" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

      <div className="text-bg-dark"> <svg></svg></div>

      <div id="ingles" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

      <div className="text-bg-dark"> <svg></svg></div>

      <div id="ajedrez" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

      <div className="text-bg-dark text-center"> <svg></svg></div>

      <div id="matematicas" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

      <div className="text-bg-dark"> <svg></svg></div>

      <div id="historiarg" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>

      <div className="text-bg-dark"> <svg></svg></div>

      <div id="marvel" className="text-bg-dark text-center"><p className="btn btn-warning"><a href="#" className="nav-link px-2 text-dark">volver</a></p></div>
      </form>
    </div>
  );
};

export default Form;
