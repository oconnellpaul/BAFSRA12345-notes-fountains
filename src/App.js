import { Authenticator } from '@aws-amplify/ui-react';
// if you change the Component file name you'll need to change the imports below ...
import { Protected } from './components/Protected';
import { RequireAuth } from './RequireAuth';
import { Login } from './components/Login';
import { ProtectedSecond } from './components/ProtectSecond';
import { UnProtected } from './components/UnProtected-ListFountains';
import { Home } from './components/Home';
import { Layout } from './components/Layout';

// npm install RRM ... 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

        <Route
          path="/protected"
          element={
            <RequireAuth>
              <Protected />
            </RequireAuth>
          }
        />

      <Route
          path="/unprotected"
          element={
           
              <UnProtected />
         
          }
        />  

        <Route
          path="/protected2"
          element={
            <RequireAuth>
              <ProtectedSecond />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;
