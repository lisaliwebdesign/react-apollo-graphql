import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {BUTTON_TEXT} from "../../constants";

export const ORGANISATION_QUERY = gql`
    query ORGANISATIONQUERY{
        organisations {
            organisations {
                name
                type
            }
            count
        }
    }
`


class Organisation extends Component {
    render() {
        return (
            <Fragment>
                <Query query={ORGANISATION_QUERY} >
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>
                        return (
                            <Fragment>
                                <h1 className="govuk-heading-xl">
                                    <span className="govuk-caption-l">Start new application</span>
                                    Your organisation
                                </h1>
                                <p className ="govuk-body">This is the organisation that will lead the application.</p>
                                <dl className="govuk-list readonly-data">
                                    <dt>{data.organisations.organisations[0].name}</dt>
                                    <dd>{data.organisations.organisations[0].type}</dd>
                                </dl>

                                <button type="submit" className="govuk-button govuk-!-margin-top-6">{BUTTON_TEXT.SAVE_CONTINUE}
                                </button>

                            </Fragment>
                        )
                    }}
                </Query>


            </Fragment>
        )
    }
}

export default Organisation

