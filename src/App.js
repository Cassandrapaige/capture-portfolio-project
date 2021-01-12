import { Route, Switch } from "react-router-dom";

// styles
import GlobalStyle from "./globalStyle";

// pages
import AbousUsPage from "./pages/about-us.page";
import ContactPage from "./pages/contact-page";
import ServicesPage from "./pages/services-page";

//components
import Navbar from "./components/navbar/navbar.component";

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={AbousUsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/services' component={ServicesPage} />
      </Switch>
    </div>
  );
};

export default App;
