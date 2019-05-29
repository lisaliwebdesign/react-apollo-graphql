
import React, { Component } from 'react'


class Error extends Component {
    render(props) {
        return (
            <div className="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabIndex="-1"
                 data-module="error-summary">
                <h2 className="govuk-error-summary__title" id="error-summary-title">{this.props.error}</h2>
                <div className="govuk-error-summary__body">
                    <ul className="govuk-list govuk-error-summary__list">
                        <li>{this.props.error}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Error