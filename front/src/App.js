import React, {useEffect}from 'react'
import {BrowserRouter as Router,Route}from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/Register'
import Login from './components/Login/Login'
import Help from './components/Help'
import Contact from './components/Contact'
import {connect}from 'react-redux'
import {setUser} from './reducers/user-reducer'
import Notes from './components/notepage/Notes.js'
import Navbar from './components/Navbar/Navbar'


const App = (props) => {

  useEffect(() => {
    const storeUserJSON = window.localStorage.getItem('loggedUser')
    if(storeUserJSON) {
      const user = JSON.parse(storeUserJSON)
      props.setUser(user)
    }
  }, [])

  return(
      <Router>
        <Navbar/>

        <Route exact path="/" render={() => <Home/>}/>
        <Route exact path="/login" render={() => <Login/>}/>
        <Route exact path="/register" render={() => <Register/>}/>
        <Route exact path="/help" render={() => <Help/>}/>
        <Route exact path="/contact" render={() => <Contact/>}/>
        <Route exact path="/notes" render={() => <Notes/>}/>

      </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.user
  }
}

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

/*TODO:
  login style
  fix your notes style on no notes/no login
*/