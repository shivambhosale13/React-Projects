import {createRoot} from 'react-dom/client';
import Info from './components/info';
import About from './components/about'

const root = createRoot(document.querySelector('#root'));


root.render(
  <>
    <Info />
    <About />
  </>
  

)

