import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';

// import CommentList from './chapter_05/CommentList';
// import Counter from './chapter_07/Counter';
// import Accommodate from './chapter_07/Accommodate';

//const root = ReactDOM.createRoot(document.getElementById('root'));

//import ConfirmButton from './chapter_08/ConfirmButton';
// import LandingPage from './chapter_09/LandingPage';

//import List from './chapter_10/List';

//import AttendanceBook from './chapter_10/AttendanceBook';

//import NameForm from './chapter_11/NameForm';
//import FruitSelect from './chapter_11/FruitSelect';

//import Calculator from './chapter_12/Calculater';

//import MainPage from './chapter_15/MainPage';

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
ReactDOM.render(

  <React.StrictMode >
  <App/>   
  </React.StrictMode>,document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();