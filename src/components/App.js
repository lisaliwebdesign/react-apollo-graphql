import React, { Component, Fragment } from 'react'
import LinkList from './link/LinkList'
import CreateLink from './link/CreateLink'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login'
import Error from './error'
import Search from './search'
import Banner from "./top/Banner";
import Footer from "./Footer";
import {AUTH_TOKEN} from "../constants";
import Competition from "./competition";
import CompetitionOverview from "./competition/Overview";
import Organisation from "./application/Organisation"
const authToken = localStorage.getItem(AUTH_TOKEN);


class App extends Component {

  state ={ error:  "" }

  handleError(error){
      this.setState({error: 'error'})
  }

  render() {
    return (
    <Fragment>
        <Header />
        <div className="govuk-width-container">
          <Banner/>
          <main className="govuk-main-wrapper" id="main-content" role="main">
            {this.error? <Error message={this.error}/>:null}
          <Switch>
            <Route exact path="/" render={() => <Redirect to={authToken?"/new/1":"/login"} />} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} handleError={this.handleError}/>
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} />
            <Route exact path="/competition" component={Competition} />
            <Route exact path="/competition/:index/overview" component={CompetitionOverview} />
            <Route exact path="/organisation/select" component={Organisation} />
          </Switch>
          </main>
        </div>
      <Footer />
    </Fragment>
    )
  }
}

export default App
