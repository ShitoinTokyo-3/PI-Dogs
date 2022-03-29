import './App.css';
import {Routes, Route} from 'react-router-dom'
import LadingPage from './Components/LadingPage/LadingPage'
import Main from './Components/Main/Main';
import DogDetails from './Components/DogDetails/DogDetails';
import AddDog from './Components/AddDog/AddDog';
// import NotFoundPage from './Components/NotFoundPage/NotFoundPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<LadingPage/>}/>
        <Route path='/dogs' element ={<Main/>}/>
        <Route path='/dogs/:idDog' element ={<DogDetails/>}/>
        <Route path='/addDog' element ={<AddDog/>}/>



        {/* <Route path='*' element ={<NotFoundPage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
