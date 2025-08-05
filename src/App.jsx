import { BrowserRouter } from 'react-router';
import Navbar from "./components/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import { AuthContext } from './components/context/context.js';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setAuth]=useState(false);
  const [isLoading, setLoading]=useState(true);
  useEffect(()=> {
    if (localStorage.getItem('auth')){
      setAuth(true);
    }
    setLoading(false);
  })

  return (
    <AuthContext.Provider value={{
      isAuth,
      setAuth,
      isLoading,
    }}>
      <BrowserRouter>
          <Navbar />
          <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App