import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/LogSign/LogSign'
import { setUserFromMemory } from './reducers/user-reducer'
import Notes from './pages/Notes/Notes'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const storeUserJSON = window.localStorage.getItem('loggedUser')
    console.log(storeUserJSON)
    if (storeUserJSON) {
      const user = JSON.parse(storeUserJSON)
      dispatch(setUserFromMemory(user))
    }
  }, [])

  return (
    <Layout>
      <Router>
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/notes" render={() => <Notes />} />
          </Switch>
        </AnimatePresence>
      </Router>
    </Layout>
  )
}

export default App
