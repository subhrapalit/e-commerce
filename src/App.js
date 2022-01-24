
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DetailView from './components/ItemDetail/DetailView';
import ContextProvider from './context/ContextProvider';
import Template from './Template/Template';

function App() {
  return (
    <Template>
      <ContextProvider>
        <BrowserRouter >
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/product/:id" component={DetailView} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </Template>
  );
}

export default App;
