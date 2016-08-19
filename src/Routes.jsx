// Dependencies
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browHist = ReactRouter.browserHistory;
// var hashHist = ReactRouter.hashHistory;


// Views
var BasePage = require('./components/pages/BasePage.jsx');
var HomePage = require('./components/pages/HomePage.jsx');
var AboutPage = require('./components/pages/AboutPage.jsx');
var ProjectPage = require('./components/pages/ProjectPage.jsx');
var SkillsPage = require('./components/pages/SkillsPage.jsx');
var ResumePage = require('./components/pages/ResumePage.jsx');


// Routes
var Routes = (
    <Router history={browHist}>
        <Route path='/' component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/projects' component={ProjectPage} />
            <Route path='/resume' component={ResumePage} />
            <Route path='/skills' component={SkillsPage} />
        </Route>
    </Router>
);

module.exports = Routes;
