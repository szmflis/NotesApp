import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Register from './components/Register'
import Login from './components/Login/Login'
import Help from './components/Help'
import Contact from './components/Contact'
import { setUser } from './reducers/user-reducer'
import Notes from './pages/Notes/Notes'
import Navbar from './components/Navbar/Navbar'

const App = (props) => {
  useEffect(() => {
    const storeUserJSON = window.localStorage.getItem('loggedUser')
    if (storeUserJSON) {
      const user = JSON.parse(storeUserJSON)
      props.setUser(user)
    }
  }, [])

  return (
    <Layout>
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/help" render={() => <Help />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/notes" render={() => <Notes />} />
      </Router>
    </Layout>
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
