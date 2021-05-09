import logo from '../static/images/logo.svg';
import {Checkbox} from './UI/Checkbox'

export const App = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Checkbox />
    </div>
  );
}
