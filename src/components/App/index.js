import React from 'react'
import { Container } from 'reactstrap'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Collection from "../Collection";
import store from '../../store'
import history from '../../utils/history'
import '../../service'

const AppContent = () => {
  return (
    <>
      <Container role='main'>
        <Switch>
          <Route path='/' component={Collection} />
        </Switch>
      </Container>
    </>
  )
}

const App = () =>
  <Provider store={store}>
    <Router history={history}>
      <AppContent />
    </Router>
  </Provider>

export default App;
