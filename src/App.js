import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css';

import Card from './Card';

function App() {
  return (
    <div className='container'>
      <h1 className='h1 text-capitalize text-center my-2 text-primary'>React Price Card Task</h1>
      <div className='row bg-primary my-2 pt-3 px-3 d-flex justify-content-center'>
        <Card name={{type:'FREE', rate:0, 
        icon:["fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", 
        "fa-solid fa-xmark", "fa-solid fa-xmark", "fa-solid fa-xmark", "fa-solid fa-xmark"]}}></Card>
        <Card name={{type:'PLUS', rate:9, icon:["fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", 
        "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-xmark"]}}></Card>
        <Card name={{type:'PRO', rate:49, icon:["fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", 
        "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check"]}}></Card>
      </div>
    </div>
  );
}

export default App;
