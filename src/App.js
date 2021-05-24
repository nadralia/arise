import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/Blog-details'
import EventDetail from './components/Events/EventDetail';
import Events from './components/Events/Events';
import Campaigns from './components/Campaigns/Campaigns';
import AboutUs from './components/AboutUs'
import './App.css';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery'


export default function App() {
  return (
    <Router>
      <div>
        {/* Add your Route below inside the switch */}
        <Switch>
          <Route path="/campaigns">
            <Campaigns/>
          </Route>
          <Route path="/blog/blogDetails">
            <BlogDetails />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/event/eventDetail" >
            <EventDetail />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
