import './App.css';
import './todolist.css'

import Header from './Header'
import Todolist from './Todolist'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Todolist />
    </div>
  );
}

export default App;
