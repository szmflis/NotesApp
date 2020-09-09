import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import { setUserFromMemory } from './reducers/user-reducer'
import Notes from './pages/Notes/Notes'
import Navbar from './components/Navbar/Navbar'
import LogSign from './pages/LogSign/LogSign'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const storeUserJSON = window.localStorage.getItem('loggedUser')
    if (storeUserJSON) {
      const user = JSON.parse(storeUserJSON)
      console.log(user)
      dispatch(setUserFromMemory(user))
    }
  }, [dispatch])

  return (
    <Layout>
      <Router>
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/logsign" render={() => <LogSign />} />
            <Route exact path="/notes" render={() => <Notes />} />
          </Switch>
        </AnimatePresence>
      </Router>
    </Layout>
  )
}

export default App
