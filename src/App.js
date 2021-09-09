import GenrePage from "./pages/GenresPage";
import GenreDetailsPage from "./pages/GenreDetailsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import PopularPage from "./pages/PopularPage"
import Navbar from "./components/Navbar";

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
                <Navbar />
                <ReactQueryDevtools initialIsOpen={false} />
                <Route exact path="/" component={GenrePage} />
                <Route exact path="/popular" component={PopularPage} />
                <Route exact path="/genre/:id" component={GenreDetailsPage} />
                <Route exact path="/movie/:id" component={MovieDetailsPage} />
                <Route exact path="/actor/:id" component={ActorDetailsPage} />
            </QueryClientProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
