import React, { Component } from 'react'
import {AUTH_TOKEN} from "../../constants";

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul id="navigation" className="govuk-header__navigation" aria-label="Top Level Navigation">

                    <li className="govuk-header__navigation-item">
                        <a id="dashboard-navigation-link" href="https://uat.apps.prod.ifs-test-clusters.com:443"
                           className="govuk-header__link">Dashboard</a>
                    </li>
                    <li className="govuk-header__navigation-item">
                        <a href="/profile/view" className="govuk-header__link">Profile</a>
                    </li>

                    <li className="govuk-header__navigation-item">
                        <a href="/" onClick={() => {
                            localStorage.removeItem(AUTH_TOKEN)
                        }} className="govuk-header__link">Sign
                            out</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Nav



