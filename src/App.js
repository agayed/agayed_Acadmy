import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './App.module.scss';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import UnAuthorized from './pages/UnAuthorized';
import Footer from './components/Footer';
import Course from './pages/Course';
import Profile from './pages/Profile';
import About from './pages/About';
import ViewAll from './pages/ViewAll';
import AddItem from './pages/AddItem';
import Help from './pages/Help';
import Editor from './pages/Editor';
import Admin from './pages/Admin';
import Card_Title from './pages/Bootstrap/Card_Title';
import Cards from './pages/Bootstrap/Cards';
import NavBarm from './pages/Bootstrap/accorn';
import C_arousel from './pages/Bootstrap/C-arousel';
import JsonData from './pages/Bootstrap/data.json'
import abouts from './pages/Bootstrap/about'
import CourseCard from './components/CourseCard';
import NavBar from './pages/Bootstrap/NavBar';
import AddCourse from './components/Admin/AddCourse';
import AddNode from './components/Admin/AddNode';
import Aducationfactorys from './pages/Bootstrap/educationfactorys';
import Coursat from './store/Slices/course';
import Goal from './store/Slices/goal';
import Goal2 from './store/Slices/goal2';
import Goal1 from './store/Slices/goal';


function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const loading = useSelector((state) => state.apiCall.loading);
  return (
    <div className={style.app}>
      <header>
        <AppBar />
      </header>
      <div className={style.main}>
        {loading && <LinearProgress />}
        <Grid container>
          {/* <div>sidebar left</div> */}
          <Grid item xs={12}>
            <div className={style.mainContent}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/sign-in">
                  <SignIn />
                </Route>
                <Route path="/sign-up">
                  <SignUp />
                </Route>
                <Route path="/Coursat">
                  <Coursat />
                </Route>
                <Route path="/profile/:id">
                  <Profile />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/Card_Title">
                  <Card_Title />
                </Route>
                <Route path="/Cards">
                  <Cards />
                </Route>

                <Route path="/NavBarm">
                  <NavBarm />
                </Route>

                <Route path="/C_arousel">
                  <C_arousel />
                </Route>

                <Route path="/NavBar">
                  <NavBar />
                </Route>

                <Route path="/AddCourse">
                  <AddCourse />
                </Route>
                <Route path="/AddNode">
                  <AddNode />
                </Route>


                <Route path="/Aducationfactorys">
                  <Aducationfactorys />
                </Route>
                <Route path="/Course">
                  <Course />
                </Route>

                <Route path="/Goal1">
                  <Goal1 />
                </Route>
                <Route path="/Goal2">
                  <Goal2 />
                </Route>

                
               





                <Route path="/help">
                  <Help />
                </Route>
                <Route path="/view-all/:type">
                  <ViewAll />
                </Route>
                <Route path="/editor">
                  {localStorage.getItem('role') === 'admin' ? <Editor /> : <NotFound />}
                </Route>
                <Route path="/admin">
                  {localStorage.getItem('role') ? <Admin /> : <NotFound />}
                </Route>
                <Route path="/unauthorized">
                  <UnAuthorized />
                </Route>
                <Route path="/404">
                  <NotFound />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
                <CourseCard/>

              </Switch>
            </div>
          </Grid>
          {/* <div>sidebar right</div> */}

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
      <abouts/>

    </div>
  );
}

export default App;
