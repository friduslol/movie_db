import GenrePage from "./pages/GenresPage";
import GenreDetailsPage from "./pages/GenreDetailsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import NavbarComp from "./components/NavbarComp";

import {BrowserRouter, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <NavbarComp />
                <Route exact path="/" component={GenrePage} />
                <Route exact path="/topRated" component={TopRatedPage} />
                <Route exact path="/popular" component={PopularPage} />
                <Route exact path="/NowPlaying" component={NowPlayingPage} />
                <Route exact path="/genre/:genre/:id" component={GenreDetailsPage} />
                <Route exact path="/movie/:id" component={MovieDetailsPage} />
                <Route exact path="/actor/:id" component={ActorDetailsPage} />
            </QueryClientProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
