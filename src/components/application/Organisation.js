import React, { Component, Fragment } from 'react'
import { Query, Mutation} from 'react-apollo'
import {BUTTON_TEXT} from "../../constants";
import {ORGANISATION_QUERY} from "../../store/Organisation";
import {CREATE_APPLICATION_MUTATION} from "../../store/Application";

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
                                <div className="sub-header">
                                    <a className="govuk-back-link" href="competition/1/overview">Back to application</a>
                                </div>
                                <h1 className="govuk-heading-xl">
                                    <span className="govuk-caption-l">Start new application</span>
                                    Your organisation
                                </h1>
                                <p className ="govuk-body">This is the organisation that will lead the application.</p>
                                <dl className="govuk-list readonly-data">
                                    <dt>{data.organisations.organisations[0].name}</dt>
                                    <dd>{data.organisations.organisations[0].type}</dd>
                                </dl>
                                
                                <Mutation
                                    mutation={CREATE_APPLICATION_MUTATION}
                                    variables={{ competitionId: this.props.location.competitionId }}
                                    update={(store, { data: { vote } }) =>
                                        this.props.updateStoreAfterVote(store, vote, this.props.link.id)
                                    }
                                >
                                    {createApplicationMutation => (
                                        <button type="submit" className="govuk-button govuk-!-margin-top-6" onClick={createApplicationMutation}>{BUTTON_TEXT.SAVE_CONTINUE}
                                        </button>
                                    )}
                                </Mutation>
                            </Fragment>
                        )
                    }}
                </Query>


            </Fragment>
        )
    }
}

export default Organisation

