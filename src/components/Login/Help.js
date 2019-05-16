import React, { Component } from 'react'


class LoginHelp extends Component {
    state = {
        expanded: false
    }
    toggleClass =()=> {
        const currentState = this.state.expanded;
        this.setState({ expanded: !currentState });
    };
    render() {
        return (
            <details className="govuk-details" role="group">
                <summary className="govuk-details__summary" role="button"
                         aria-controls="details-content-017b0715-17fd-48bd-a6bf-0829441cdafa" aria-expanded={this.state.expanded} onClick={this.toggleClass} >
                    <span className="govuk-details__summary-text">Need help signing in or creating an account?</span>
                </summary>
                <div className="govuk-details__text" id="details-content-017b0715-17fd-48bd-a6bf-0829441cdafa"
                     aria-hidden={!this.state.expanded}>

                    <h2 className="govuk-heading-s">My email and/or password isn't working</h2>
                    <p className="govuk-body">If you applied previously using the old service, you will need to create a
                        new account.</p>
                    <p className="govuk-body"><a className="govuk-link"
                                                 href="https://uat.apps.prod.ifs-test-clusters.com/login/reset-password">Forgotten
                        your password?</a></p>
                    <h2 className="govuk-heading-s">I don't have an Innovation Funding Service Account</h2>
                    <p className="govuk-body">Please create a new account by visiting our <a className="govuk-link"
                                                                                             href="https://uat.apps.prod.ifs-test-clusters.com/competition/search">competitions
                        listings page</a>.</p>
                </div>
            </details>
        )
    }
}

export default LoginHelp



