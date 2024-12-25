import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Home1 from './components/Home1';
import AddJobPage from './components/AddJobPage';
import JobList from './components/JobList';
import JobDetailPage from './components/JobDetailPage';
import Signup from './components/Signup';
import Login from './components/Login';
import JobProviderLogin from './components/JobProviderLogin';
import JobSeekerLogin from './components/JobSeekerLogin';
import JobProviderSignup from './components/JobProviderSignup'; 
import JobSeekerSignup from './components/JobSeekerSignup';
import SubmittedJobs from './components/SubmittedJobs';
import ApplicationForm from './components/ApplicationForm';
import ApplicantPage from './components/ApplicantPage';
// import BlurHomePage from './components/BlurHomePage';

const Navigation = () => {
  // const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('token');
    
    window.location.reload();
    window.location.href = '/';
    
  };

  const handleReload = () => {
    window.location.reload();
   
  };

  return (
    <Router>
      <nav>
        <h1 className='head'>Part-time Job Portal</h1>
        <ul>
          
          {localStorage.getItem('token') ? (
  <>
  <li><Link to="/" className="aa">Home</Link></li>
    <li><Link to="/home" className="aa">Sectors</Link></li>
    <li><Link to="/applicant" className="aa">Applicants</Link></li>
    <li><Link to="/logout" className="aa" onClick={handleLogout}>Logout</Link></li>
  </>
) : (
  <>
  <li><Link to="/" className="aa">Home</Link></li>
  <li><Link to="/" className="aa"onClick={handleReload}>Go to website</Link></li>
    <li><Link to="/jobseekerlogin" className="aa">Login</Link></li>
    <li><Link to="/jobseekersignup" className="aa">Sign Up</Link></li>
  </>
)}



          <li><Link to="/about" className="aa">About</Link></li>

        </ul>
      </nav>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Home1} />
        <Route path="/about" component={About} />
        <Route path="/jobs-list" component={JobList} />
        <Route path="/job/:id" component={JobDetailPage} />
        <Route path="/applicant" component={ApplicantPage}/>
        <Route path="/job-detail" component={JobDetailPage}/>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} /> 
        <Route path="/add-job" component={AddJobPage} />
        <Route path="/application" exact component={ApplicationForm} />
        <Route path="/submitted-jobs" component={SubmittedJobs} />
        <Route path="/JobProviderLogin" component={JobProviderLogin} />
        <Route path="/JobSeekerLogin" component={JobSeekerLogin} /> 
        <Route path="/JobProviderSignup" component={JobProviderSignup} />
        <Route path="/JobSeekerSignup" component={JobSeekerSignup} /> 
        <Route path="/logout" component={Home1} />

      </Switch>
    </Router>
  );
};

export default Navigation;
