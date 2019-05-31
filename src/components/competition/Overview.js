import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TopContent from "./overview/TopContent";
import TabSection from "./overview/TabSection";
import {Link} from "react-router-dom";

export const COMPETITION_QUERY = gql`
    query CompetitionQuery{
        competitions {
            competitions {
                id
                title
                description
                openTime
                closeTime
            }
            count
        }
    }
`
class Overview extends Component {

    render() {
        const index = parseInt(this.props.match.params.index-1, 10)
        return(
            <Query query={COMPETITION_QUERY} >
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    return (
                        <Fragment>
                           <TopContent item={data.competitions.competitions[index]}/>
                            <div>
                                <Link className="govuk-button govuk-!-margin-top-6"
                                      to={{
                                          pathname:"/organisation/select",
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