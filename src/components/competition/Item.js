import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom";


class Item extends Component {
    render() {
        const {data,isLastItem,index} = this.props;
        return(
            <ul className="govuk-list">
                <li>
                    <h2 className="govuk-heading-m govuk-!-margin-top-0 govuk-!-margin-bottom-6">
                        <Link className="govuk-link"
                              to={{
                                  pathname:'/competition/'+ (index+1) +'/overview',
                                  competitionId: data.id
                              }}> {data.title}
                        </Link>
                        
                    </h2>
                    <div className="wysiwyg-styles govuk-!-margin-bottom-4">{data.description}
                    </div>
                    <h3 className="govuk-heading-s govuk-!-margin-bottom-0">Eligibility</h3>
                    <div className="wysiwyg-styles govuk-!-margin-bottom-4">{data.projectSize}
                    </div>
                    <h3 className="govuk-heading-s govuk-!-margin-bottom-0">{data.open?'Opening soon':'Opening Now'}</h3>
                    <dl className="date-definition-list govuk-!-margin-top-0">
                        <dt>Opens:</dt>
                        <dd>{data.openTime}</dd>
                        <dt>Closes:</dt>
                        <dd>{data.closeTime}</dd>
                    </dl>
                    {!isLastItem?
                        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible"/>:null
                    }
                </li>

            </ul>
        )
    }
}
export default Item