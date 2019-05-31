import React, {Component, Fragment} from 'react'
import {Query} from 'react-apollo'
import TopContent from "./overview/TopContent";
import TabSection from "./overview/TabSection";
import {Link} from "react-router-dom";
import {COMPETITION_QUERY} from "../../store/Competition";

class Overview extends Component {

    render() {
        const index = parseInt(this.props.match.params.index - 1, 10)
        return (
            <Query query={COMPETITION_QUERY}>
                {({loading, error, data}) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    return (
                        <Fragment>
                            <div className="sub-header">
                                <a className="govuk-back-link" href="/competition">Back to all competitions</a>
                            </div>
                            <TopContent item={data.competitions.competitions[index]}/>
                            <div>
                                <Link className="govuk-button govuk-!-margin-top-6"
                                      to={{
                                          pathname: "/organisation/select",
                                          competitionId: data.competitions.competitions[index].id
                                      }}>Start new application
                                </Link>
                            </div>
                            <TabSection/>
                        </Fragment>
                    )
                }}
            </Query>
        )
    }
}

export default Overview