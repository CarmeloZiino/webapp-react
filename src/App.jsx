import DefaultLayout from "./layouts/DefaultLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MoviePage} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
