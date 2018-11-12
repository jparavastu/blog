import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import CreateArticle from './components/CreateArticle';
import SingleArticle from './components/SingleArticle';

const Main = withRouter(({location}) => {

    return (
        <div>

    { 
        location.pathname !== '/login' && location.pathname !== '/register' &&
        <Navbar />
    }
    
    <Route exact path ="/" component={Welcome}></Route>
    <Route path ="/login" component={Login}></Route>
    <Route path ="/register" component={Register}></Route>
    <Route path ="/article/:slug" component={SingleArticle}></Route>
    <Route path ="/articles/create" component={CreateArticle}></Route>
    {
        location.pathname !== '/login' && location.pathname !== '/register' &&
        <Footer />
    }
   
    </div>
    );

});


ReactDOM.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


