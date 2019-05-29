import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'
import NewsHeader from "./NewsHeader";
import HeaderTop from "./top/Header";
import Banner from "./top/Banner";

class Header extends Component {
  render() {
    // const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
        <Fragment>
          <HeaderTop/>
          <NewsHeader/>
        </Fragment>
    )
  }
}

export default withRouter(Header)