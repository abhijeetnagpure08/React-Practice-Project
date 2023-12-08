// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo';
import Page from './components/Pagination/Page'
import Timer from './components/Timer/Timer';
import TodoApp from './components/Todo-using-useReducer/TodoApp';
import AllRoutes from './components/Routing/components/AllRoutes';
import Navbar from './components/Routing/components/Navbar';
import Calci from './components/BmiCalculator/Calci';
import { Form } from './components/useReducer-example/Form';
function App() {
  return (
    <div id='main'>
      <h1>Basic Todo list</h1>
      {/* <Todo /> */}
      {/* <Page /> */}
      <Calci />
    </div>
  );
}

export default App;
