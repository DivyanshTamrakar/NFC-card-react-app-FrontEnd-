import './App.css';
import AboutUs from './Pages/AboutUs';
import Analytics from './Pages/Analytics';
import Contact from './Pages/Contact';
import ContactCardLinks from './Pages/ContactCardLinks';
import ContactUs from './Pages/ContactUs';
import Dashboard from './Pages/Dashboard';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import LinkCard from './Pages/LinkCard';
import Login from './Pages/Login';
import MyAccount from './Pages/MyAccount';
import Pricing from './Pages/Pricing';
import ProfileScreens from './Pages/ProfileScreens';
import Register from './Pages/Register';
import Report from './Pages/Report';
import SentMessage from './Pages/SentMessage';
import NotFound from './Pages/NotFound';
import ForgotPassword from './Pages/ForgotPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <Switch>        
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/report-violation" component={Report} />
          <Route exact path="/profile/:slug" component={ProfileScreens} />
          <Route exact path="/message-sent/:slug" component={SentMessage} />
          <Route exact path="/contact/:slug" component={Contact} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          {/* Private Routes */}
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/contact-card" component={LinkCard} />
          <Route exact path="/admin/link-card" component={ContactCardLinks} />
          <Route exact path="/admin/analytics" component={Analytics} />
          <Route exact path="/admin/account" component={MyAccount} />
          {/* 404 */}
          <Route component={NotFound} />
       </Switch>
    </Router>
  );
}

export default App;
