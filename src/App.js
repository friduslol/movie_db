import GenrePage from "./pages/GenrePage";
import Movie from "./pages/MoveListPage";
import Navbar from "./components/Navbar";

import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={GenrePage} />
            <Route exact path="/topp" component={Movie} />
        </BrowserRouter>
    </div>
  );
}

export default App;
