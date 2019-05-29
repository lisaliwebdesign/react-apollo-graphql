import React, { Component, Fragment } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Error from './error'
import Search from './Search'
import Banner from "./top/Banner";
import Footer from "./Footer";
import {AUTH_TOKEN} from "../constants";
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
          </Switch>
          </main>
        </div>
      <Footer />
    </Fragment>
    )
  }
}

export default App
