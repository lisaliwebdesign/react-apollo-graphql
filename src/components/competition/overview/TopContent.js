import React, { Component, Fragment } from 'react'
import {PAGE_TITLE} from "../../../constants";

class TopContent extends Component {
   
    render(props) {
        const {item} = this.props;
        return(
            <Fragment>
                <h1 className="govuk-heading-l">
                    <span className="govuk-caption-l">{PAGE_TITLE.COMPETITION_OVERVIEW}</span>
                    {item.title}
                </h1>
                <p className="govuk-body wysiwyg-styles">{item.description}</p>
                <ul className="govuk-list">
                    <li>
                        <strong>Competition opens:</strong>
                        <span>{item.openTime}</span>
                    </li>
                    <li>
                        <strong>Registration closes:</strong>
                        <span>{item.closeTime}</span>
                    </li>

                </ul>
            </Fragment>
        )
    }}
export default TopContent