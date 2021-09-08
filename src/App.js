import GenrePage from "./pages/GenresPage";
import GenreDetailsPage from "./pages/GenreDetailsPage";
import Movie from "./pages/MoveListPage";
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
                <Route exact path="/topp" component={Movie} />
                <Route exact path="/:genre/:id" component={GenreDetailsPage} />
            </QueryClientProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
