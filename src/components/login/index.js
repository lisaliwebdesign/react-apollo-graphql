import React, { Component } from 'react'
import { AUTH_TOKEN, ERROR,SIGN_IN_ISSUE_TITLE} from '../../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import LoginHelp from "./Help";

const SIGNUP_MUTATION = gql`
    mutation SignupMutation($email: String!, $password: String!, $name: String!) {
        signup(email: $email, password: $password, name: $name) {
            token
        }
    }
`

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: true, // switch between Login and SignUp
            email: '',
            password: '',
            name: '',
            error: ''
        }
    }

    errorType =(error)=> {
        let errorMsg = ''
        if (error.toString().includes("Field name = email")) {
            errorMsg = ERROR.HAS_USER
        }
        if (error.toString().includes("Invalid password")) {
            errorMsg = ERROR.INVALID_PASSWORD
        }
        this.props.handleError(errorMsg).bind(this)
    };

    render() {
        const { login, email, password, name } = this.state;
        const handleError = this.props.handleError;
        return (
            <div>
                <h1 className="govuk-heading-l">
                    <span className="govuk-caption-l">Innovation Funding Service</span>
                    {login ? 'Sing in' : 'Sign Up'}
                </h1>
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-one-half">
                        <div className="govuk-form-group">
                            <label className="govuk-label" htmlFor="username">
                                Email address
                            </label>
                            <input
                                className="govuk-input"
                                id="username"
                                name="j_username"
                                value={email}
                                onChange={e => this.setState({ email: e.target.value })}
                                type="email"
                                required
                                placeholder="Your email address"
                            />
                            {!login && (
                                <input
                                    value={this.state.email}
                                    type="hidden"
                                />
                            )}
                        </div>
                        <div className="govuk-form-group">
                            <label className="govuk-label" htmlFor="password">
                                Password
                            </label>
                            <div className="password-toggle">
                                <input
                                    className="govuk-input"
                                    id="password"
                                    name="j_password"
                                    value={password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    type="password"
                                    placeholder="Choose a safe password"
                                />
                                <button type="button" role="switch" aria-checked="false" aria-label="Show password">Show</button>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginHelp/>
                <div className="govuk-form-group govuk-margin-!-top-6">
                    <Mutation
                        mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                        variables={{ email, password, name }}
                        onCompleted={data => this._confirm(data)}
                    >
                        {(mutation, {loading,error}) => (
                            <button className="govuk-button" onClick={mutation}>
                                {login ? 'Sign in' : 'Create account'}
                                {error ? this.props.handleError(error): null}
                            </button>
                        )}
                    </Mutation>
                </div>
            </div>
        )
    }

    _confirm = async data => {
        const {token} = this.state.login ? data.login : data.signup
        this._saveUserData(token)
        this.props.history.push("/new/1")
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login
