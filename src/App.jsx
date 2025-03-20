import DefaultLayout from "./layouts/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import NotFound from "./pages/NotFound";
import CreateMoviePage from "./pages/CreateMovie";
import GlobalContext from "./contexts/GlobalContext";

import { useState } from 'react';


function App() {


  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/movies/:id" Component={MoviePage} />
              <Route path="/movies/create" Component={CreateMoviePage} />
              <Route path="*" Component={NotFound} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
