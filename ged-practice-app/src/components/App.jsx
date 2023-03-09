// CSS
import '../index.css'
import '../App.css'

// Other
import {Routes, Route} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';

// Pages ============================================
import LandingPage from '../pages/LandingPage';

import PrivateRoutes from './PrivateRoutes';
import Login from '../pages/Login'
import Signup from '../pages/Signup';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import GED from '../pages/GED/GED';
import MathCategory from '../pages/GED/JadeMath/MathCategory';
import MathTopic2 from '../pages/GED/JadeMath/MathTopic2';
import MathTopic4 from '../pages/GED/JadeMath/MathTopic4';
import MathTimesTables from '../pages/GED/JadeMath/MathTimesTables';

function App() {

  return (
    <AuthProvider>
      <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/ged" element={<GED/>}/>
            <Route exact path="/ged/math" element={<MathCategory/>}/>
            <Route exact path="/ged/math/algebra-functions-patterns" element={<MathTopic4/>}/>
            <Route exact path="/ged/math/measurement-geometry" element={<MathTopic2/>}/>
            <Route exact path="/ged/math/times-tables" element={<MathTimesTables/>}/>
          </Route>
          
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App;
