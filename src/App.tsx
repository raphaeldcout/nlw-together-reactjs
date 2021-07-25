import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from './views/Home';
import { NewRoom } from './views/NewRoom';
import { Room } from "./views/Room";
import { AdminRoom } from './views/AdminRoom';

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/new' exact component={NewRoom} />
          <Route path='/rooms/:id' component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
