import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormState from './context/multistepForm/FormState';

// COMPONENTS
import Main from './screens/Main';
import HomeScreen from './screens/HomeScreen';
import UsernameScreen from './screens/UsernameScreen';
import StepsLayout from './screens/StepsLayout';
import Step1Screen from './screens/Step1Screen';
import Step2Screen from './screens/Step2Screen';
import Step3Screen from './screens/Step3Screen';
import ResultScreen from './screens/ResultScreen';
import NotFoundScreen from './screens/NotFoundScreen';

import './App.css';

function App() {
  return (
    <FormState>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/username' element={<UsernameScreen />} />
            <Route element={<StepsLayout />}>
              <Route path='/step1' element={<Step1Screen />} />
              <Route path='/step2' element={<Step2Screen />} />
              <Route path='/step3' element={<Step3Screen />} />
            </Route>
            <Route path='/result' element={<ResultScreen />} />
            <Route path='*' element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FormState>
  );
}

export default App;
