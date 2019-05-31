import React, {Component} from 'react'

class Banner extends Component {
    render() {
        return (
            <div className="govuk-phase-banner">
                <p className="govuk-phase-banner__content">
                    <strong className="govuk-tag govuk-phase-banner__content__tag ">
                        BETA
                    </strong>
                    <span className="govuk-phase-banner__text">
                      This is a new service – your <a className="govuk-link" target="_blank"
                                                      href="https://www.surveymonkey.co.uk/r/innovationfundingservicefeedback">feedback</a> will help us to improve it.
                  </span>
                </p>
            </div>
        )
    }
}

export default Banner



