import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FavouritesPage } from "./pages/FavouritesPage";
import { HomePage } from "./pages/HomePage";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
