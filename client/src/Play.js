import axios from 'axios';
import { useState, useEffect } from 'react';

let racha = 0;

const Play = props => {

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState([
    {correct: false}, {correct: false}, {correct: false}, {correct: false}]);

  const [hiddenForm, setHiddenForm] = useState(true);
  const changeHiddenForm = () => {
    setHiddenForm(prev => !prev)
  }

  const handleChange = e => {
    const name = e.target.id;
    console.log(name);
    for (let i = 0; i < 4; i++)
      trueAnswer[i].correct = false;
    trueAnswer[name].correct = true;
    console.log(trueAnswer);
  }

  const tryAgain = e => {
    setHidden(false);
    racha = 0;
  }

  const handleClick = e => {
    const topic = document.getElementById('select').value;
    setFilteredQuestions(questions.filter(question =>
      question.tema == topic
    ));
    console.log(filteredQuestions);
    document.getElementById('jugar').disabled = true;
  }

  const lala = () => {
    filteredQuestions.map((question,idx) => {
      if (r === idx){
        console.log(idx);
        return (<div>
          <Question key={idx} question={question} />
          <input type="button" value="Enviar" onClick={sendAnswer}/>
          </div>)
      }
    }
    )
  }

  const sendAnswer = e => {
    let j = 0;
    for (let i = 0; i < 4; i++) {
      if (trueAnswer[i].correct == true && filteredQuestions[r].answers[i].correct == true) {
        j = 1;
      }
    }
    if (j) {
      alert("Biennn!!! No sos tan bruto");
      console.log("bieeennn");
      racha++;
      console.log(racha);
      const topic = document.getElementById('select').value;
      setFilteredQuestions(questions.filter(question =>
        question.tema == topic
      ));
      console.log(filteredQuestions);
    }
    else {
      alert("Tremendo maloooo");
      console.log("malll");
      setHidden(true);
    }
  }

  const Question = props => {

    const { text, tema, answers } = props.question;

    return (
      <div>
        <h2>{text}</h2>
        {answers.map((answer, idx) => (
          <div key={idx}>
            <label>{answer.text}</label>
            <input type="radio" name={text} id={idx} onChange={handleChange}/>
            <br />
          </div>
        ))}
        <h4>Tema: {tema}</h4>
    </div>
    );
  };

  useEffect(() => {
    axios.get('/question')
      .then(res => {
       console.log(res.data);
       setQuestions(res.data);
     });
  },[]);

  const r = Math.floor(Math.random()*filteredQuestions.length);

  return (

  <div className="text-center">
  <div hidden={!hiddenForm}>
  <br/>
  <br/>
  <button className="btn btn-warning" onClick={changeHiddenForm}>Jugar</button>
  <br/>
  <br/>
  <br/>
  </div>
    <div hidden={ hiddenForm }>
      <br />
      <select className="selectem text-center"id="select" onChange={e => {document.getElementById('jugar').disabled = false}}>
        <option className="selectemop">Seleccionar Tema</option>
        <option className="dbop">Dragon Ball</option>
        <option className="mop">Marvel</option>
        <option className="ingop">Inglés</option>
        <option className="dcop">DC</option>
        <option className="stop">Stranger Things</option>
        <option className="twdop">The Walking Dead</option>
        <option className="44">4to 4ta</option>
      </select>
      <br/>
      <br/>
      <input className="btn btn-warning"id="jugar" type="button" value="Jugar" onClick={handleClick}/>
      <div>
        {filteredQuestions.map((question,idx) => {
          if (r === idx){
            console.log(idx);
            return (<div>
              <Question key={idx} question={question} />
              <input type="button" value="Enviar" onClick={sendAnswer} hidden={hidden}/>
              <br /><br />
              <label>Racha: {racha}</label>
              <br /><br />
              <input className="reintentar" type="button" value="Reintentar" onClick={tryAgain} hidden={!hidden}/>
              </div>
            )
          }
        }
        )}
        </div>
      </div>
    </div>
  );
}

export default Play;
