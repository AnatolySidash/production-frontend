import { Counter } from './components/counter';
import './index.scss'

const App = () => {
   return (
      <div className='app'>
         <p>Counter</p>
         <Counter />
      </div>
   );
};

export default App;