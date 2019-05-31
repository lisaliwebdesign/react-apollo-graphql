import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import Search from './Form'
import ListItem from './Item'
import {PAGE_TITLE} from "../../constants";
import {COMPETITION_QUERY} from "../../store/Competition";



class Competition extends Component {
    render() {
        return (
            <Fragment>
                <Query query={COMPETITION_QUERY} >
                    {({ loading, error, data }) => {
                        if (loading) return <div>Fetching</div>
                        if (error) return <div>Error</div>
                        return (
                            <Fragment>
                                <h1 className="govuk-heading-l">
                                    {PAGE_TITLE.COMPETITION}
                                </h1>
                                <div className="govuk-grid-row">
                                    <Search/>
                                    <div className="govuk-grid-column-two-thirds">
                                        <h2 className="govuk-heading-s govuk-!-margin-0">{data.competitions.count} competitions</h2>
                                        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible govuk-!-margin-top-0"/>
                                        <ul className="govuk-list">
                                            {data.competitions.competitions.map((item, index) => (
                                                <ListItem
                                                    key={index}
                                                    isLastItem={data.competitions.count === index+1 ? true: false}
                                                    data={item}
                                                    index={index}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default Competition
