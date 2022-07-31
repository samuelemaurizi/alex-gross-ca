import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormState from './context/multistepForm/FormState';

// COMPONENTS
import Main from './screens/Main';
import HomeScreen from './screens/HomeScreen';
import UsernameScreen from './screens/UsernameScreen';

import './App.css';

function App() {
  return (
    <FormState>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/username' element={<UsernameScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FormState>
  );
}

export default App;
