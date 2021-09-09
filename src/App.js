import GenrePage from "./pages/GenresPage";
import GenreDetailsPage from "./pages/GenreDetailsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpcomingPage";
import NavbarComp from "./components/NavbarComp";

import {BrowserRouter, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
                <ReactQueryDevtools initialIsOpen={false} />
                <Route exact path="/" component={GenrePage} />
                <Route exact path="/topRated" component={TopRatedPage} />
                <Route exact path="/popular" component={PopularPage} />
                <Route exact path="/upcoming" component={UpcomingPage} />
                <Route exact path="/genre/:id" component={GenreDetailsPage} />
                <Route exact path="/movie/:id" component={MovieDetailsPage} />
                <Route exact path="/actor/:id" component={ActorDetailsPage} />
            </QueryClientProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
