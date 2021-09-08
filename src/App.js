import GenrePage from "./pages/GenresPage";
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
            </QueryClientProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
