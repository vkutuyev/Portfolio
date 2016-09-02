// Dependencies
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browHist = ReactRouter.browserHistory;


// Views
var BasePage = require('./components/pages/BasePage.jsx');
var HomePage = require('./components/pages/HomePage.jsx');
var ProjectPage = require('./components/pages/projects/ProjectPage.jsx');
var SkillsPage = require('./components/pages/skills/SkillsPage.jsx');
var ResumePage = require('./components/pages/ResumePage.jsx');
var AboutPage = require('./components/pages/AboutPage.jsx');


// Routes
var Routes = (
    <Router history={browHist}>
        <Route path='/' component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path='/projects' component={ProjectPage} />
            <Route path='/skills' component={SkillsPage} />
            <Route path='/resume' component={ResumePage} />
            <Route path='/about' component={AboutPage} />
        </Route>
    </Router>
);

module.exports = Routes;
