import { useEffect } from "react";
// router
import { Route, Switch, useLocation } from "react-router-dom";

// styles
import GlobalStyle from "./globalStyle";

// pages
import AbousUsPage from "./pages/about-us.page";
import ContactPage from "./pages/contact-page";
import ServicesPage from "./pages/services-page";

//components
import Navbar from "./components/navbar/navbar.component";
import ProductDetailsPage from "./pages/product-details-page";

//animation
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400);
  }, [location]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AbousUsPage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/services' component={ServicesPage} />
          <Route path='/services/:id' component={ProductDetailsPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
