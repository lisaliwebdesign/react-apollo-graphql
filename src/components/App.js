import React, { Component, Fragment } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Search from './Search'
import Banner from "./top/Banner";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
    <Fragment>
        <Header />
        <div className="govuk-width-container">
          <Banner/>
          <main className="govuk-main-wrapper" id="main-content" role="main">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} />
          </Switch>
          </main>
        </div>
      <Footer />
    </Fragment>
    )
  }
}

export default App
