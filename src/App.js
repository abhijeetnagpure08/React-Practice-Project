// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo';
import Page from './components/Pagination/Page'
import Timer from './components/Timer/Timer';
import TodoApp from './components/Todo-using-useReducer/TodoApp';
import AllRoutes from './components/Routing/components/AllRoutes';
import Navbar from './components/Routing/components/Navbar';
function App() {
  return (
    <div id='main'>
      <h1>Basic Todo list</h1>
      {/* <Todo /> */}
      <Page />
    </div>
  );
}

export default App;
