import './App.css';
import {BrowserRouter as Router,Routes,Route, useNavigate} from "react-router-dom"
import Login from "./components/login"
import Header from "./components/header"
import style from "styled-components"
import Home from './components/home';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {
            <Login/>
          }/>
          <Route path = "/home" element = {
            <>
            <Header/>
            <Home/>
            </>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps =(state) =>{
  return {
      user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
