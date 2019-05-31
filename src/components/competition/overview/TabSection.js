import React, { Component, Fragment } from 'react'


class TabSection extends Component {

    render(props) {

return(
        <div className="govuk-tabs" data-module="tabs">
            <h2 className="govuk-tabs__title">
                Competition sections
            </h2>
            <ul className="govuk-tabs__list" role="tablist">
                <li className="govuk-tabs__list-item" role="presentation">
                    <a className="govuk-tabs__tab" href="#summary" id="tab_summary" role="tab" aria-controls="summary"
                       tabIndex="0" aria-selected="true">Summary</a>
                </li>
                <li className="govuk-tabs__list-item" role="presentation">
                    <a className="govuk-tabs__tab" href="#eligibility" id="tab_eligibility" role="tab"
                       aria-controls="eligibility" tabIndex="-1" aria-selected="false">Eligibility</a>
                </li>
                <li className="govuk-tabs__list-item" role="presentation">
                    <a className="govuk-tabs__tab" href="#scope" id="tab_scope" role="tab" aria-controls="scope"
                       tabIndex="-1"
                       aria-selected="false">Scope</a>
                </li>
                <li className="govuk-tabs__list-item" role="presentation">
                    <a className="govuk-tabs__tab" href="#dates" id="tab_dates" role="tab" aria-controls="dates"
                       tabIndex="-1"
                       aria-selected="false">Dates</a>
                </li>
                <li className="govuk-tabs__list-item" role="presentation">
                    <a className="govuk-tabs__tab" href="#how-to-apply" id="tab_how-to-apply" role="tab"
                       aria-controls="how-to-apply" tabIndex="-1" aria-selected="false">How to apply</a>
                </li>
                <li className="govuk-tabs__list-item" role="presentation">
                    <a className="govuk-tabs__tab" href="#supporting-information" id="tab_supporting-information"
                       role="tab"
                       aria-controls="supporting-information" tabIndex="-1" aria-selected="false">Supporting
                        information</a>
                </li>
            </ul>


            <section className="govuk-tabs__panel" id="summary" role="tabpanel" aria-labelledby="tab_summary">
                <div className="govuk-grid-row govuk-!-margin-bottom-6">
                    <div className="govuk-grid-column-one-third">
                        <h3 className="govuk-heading-m govuk-!-margin-0">Description</h3>
                    </div>
                    <div className="govuk-grid-column-two-thirds">
                        <div className="govuk-body wysiwyg-styles">Innovate UK is investing up to £15 million in
                            innovation
                            projects to stimulate the new products and services of tomorrow. The aim of this competition
                            is to
                            help businesses innovate to find new revenue sources. Proposals should show how to achieve a
                            step
                            change in business growth, productivity and export opportunities for at least one UK small
                            and
                            medium-sized enterprise (SME). We expect projects to range from total costs of £35,000 to £2
                            million. Projects should last between 6 months and 3 years. There are 2 options to apply
                            into this
                            competition, dependent on project size and length, these are referred to as streams. Stream
                            1 is for
                            projects under 12 months duration and under £100,000. Stream 2 is for projects lasting
                            longer than
                            12 months or costing over £100,000.
                        </div>
                    </div>
                </div>
                <div className="govuk-grid-row govuk-!-margin-bottom-6">
                    <div className="govuk-grid-column-one-third">
                        <h3 className="govuk-heading-m govuk-!-margin-0">Funding type</h3>
                    </div>
                    <div className="govuk-grid-column-two-thirds">
                        <p className="govuk-body">Grant</p>
                    </div>
                </div>
                <div className="govuk-grid-row govuk-!-margin-bottom-6">
                    <div className="govuk-grid-column-one-third">
                        <h3 className="govuk-heading-m govuk-!-margin-0">Project size</h3>
                    </div>
                    <div className="govuk-grid-column-two-thirds">
                        <p className="govuk-body">£15 million</p>
                    </div>
                </div>


            </section>


            <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="eligibility" role="tabpanel"
                     aria-labelledby="tab_eligibility">

                <div className="govuk-grid-row govuk-!-margin-bottom-6">
                    <div className="govuk-grid-column-one-third">
                        <h3 className="govuk-heading-m govuk-!-margin-0">Lead applicant eligibility</h3>
                    </div>
                    <div className="govuk-grid-column-two-thirds">
                        <div className="govuk-body wysiwyg-styles">To lead a project, you must: be a UK-based business
                            (of any
                            size) have at least one SME involved in your proposal carry out your project work, and
                            intend to
                            exploit the results, in the UK work alone or in collaboration with others (businesses,
                            research base
                            and third sector)
                        </div>

                    </div>
                </div>

            </section>


            <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="scope" role="tabpanel"
                     aria-labelledby="tab_scope">

                <div className="govuk-grid-row govuk-!-margin-bottom-6">
                    <div className="govuk-grid-column-one-third">
                        <h3 className="govuk-heading-m govuk-!-margin-0">Project scope</h3>
                    </div>
                    <div className="govuk-grid-column-two-thirds">
                        <div className="govuk-body wysiwyg-styles">Our Emerging and Enabling Technologies programme
                            (E&amp;E)
                            identifies and invests in new technologies and the underpinning capabilities that improve
                            existing
                            industries. Our aim is to inspire the new products, processes and services of tomorrow;
                            those with
                            the potential to unlock billions of pounds of value to industry and disrupt existing
                            markets. An
                            emerging technology is one that is progressing in, or has recently emerged from, the
                            research base.
                            It allows us to do something that was not possible before. Because of this, it disrupts
                            existing
                            markets and enhances value to customers. It can improve our lives and lead to new sources of
                            wealth
                            generation. Enabling technologies underpin the development of high-value products and
                            services in
                            many industrial sectors and markets. They improve performance and productivity. The aim of
                            this
                            competition is to help businesses broaden out innovation activities, to find new sources of
                            revenue
                            from new products, processes or services. Projects will: harness E&amp;E technologies across
                            the
                            economy develop and scale-up research and development to bring ideas, processes and products
                            closer
                            to availability at scale and commercial release use design processes to understand customer
                            motivations and behaviour and use that insight to create better products, services and
                            processes We
                            are looking to fund a portfolio of projects that include: technical feasibility industrial
                            research
                            experimental development we will choose a portfolio that achieves a balance across topic
                            areas,
                            timing and costs If your project falls outside these guidelines, please contact us at least
                            5
                            working days before the registration deadline to discuss further. Projects must clearly show
                            high-growth potential innovations in one or more of the following areas: any emerging
                            technology
                            that can demonstrate a step change in performance and the potential to disrupt existing
                            industrial
                            approaches we are particularly looking to fund projects in energy harvesting, imaging
                            technologies,
                            graphene or biofilms any enabling technology in: satellite applications; electronics
                            sensors;
                            photonics; digital; internet of things; data; cybersecurity virtual or augmented reality;
                            and
                            distributed ledger technology The type of innovation project will depend on the challenges
                            and
                            opportunities your business faces. Proposals must show how project success will improve
                            business
                            growth and productivity and/or encourage export opportunities, including for at least one UK
                            small
                            and medium-sized enterprise (SME) involved in the project.
                        </div>

                    </div>
                </div>

            </section>


            <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="dates" role="tabpanel"
                     aria-labelledby="tab_dates">
                <dl className="standard-definition-list column-definition-list">

                    <dt className="govuk-!-margin-top-6"><span className="govuk-heading-m">12 May 2016</span></dt>


                    <dd className="govuk-!-margin-top-6">Briefing event in Belfast.</dd>


                    <dt className="govuk-!-margin-top-6"><span className="govuk-heading-m">1 March 2021</span></dt>

                    <dd className="govuk-!-margin-top-6"><strong>Competition opens</strong></dd>


                    <dt className="govuk-!-margin-top-6"><span className="govuk-heading-m">21 March 2021 12:00pm</span>
                    </dt>


                    <dd className="govuk-!-margin-top-6">Competition closes</dd>


                    <dt className="govuk-!-margin-top-6"><span className="govuk-heading-m">19 June 2021</span></dt>


                    <dd className="govuk-!-margin-top-6">Applicants notified</dd>


                </dl>
            </section>


            <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="how-to-apply" role="tabpanel"
                     aria-labelledby="tab_how-to-apply">

                <div className="govuk-grid-row govuk-!-margin-bottom-6">
                    <div className="govuk-grid-column-one-third">
                        <h3 className="govuk-heading-m govuk-!-margin-0">How to apply</h3>
                    </div>
                    <div className="govuk-grid-column-two-thirds">
                        <div className="govuk-body wysiwyg-styles">The lead applicant must register for an account using
                            the
                            link on this page. This will start the application process. During this process the lead
                            applicant
                            will be able to invite all other collaborators. Collaborators will be sent a link, which
                            will help
                            them to create an account and give them access to the application.
                        </div>

                    </div>
                </div>

            </section>


            <section className="govuk-tabs__panel govuk-tabs__panel--hidden" id="supporting-information" role="tabpanel"
                     aria-labelledby="tab_supporting-information">

                <div className="govuk-grid-row govuk-!-margin-bottom-6">
                    <div className="govuk-grid-column-one-third">
                        <h3 className="govuk-heading-m govuk-!-margin-0">Background and further information</h3>
                    </div>
                    <div className="govuk-grid-column-two-thirds">
                        <div className="govuk-body wysiwyg-styles">Technology is transforming our lives and brings great
                            opportunity. The UK is strong in fundamental research across many different disciplines.
                            However, we
                            sometimes struggle to fully commercialise the opportunities. The most promising emerging
                            technologies and industries need to be guided through the innovation process to market
                            success.
                        </div>

                    </div>
                </div>

            </section>


        </div>
)
    }
}

export default TabSection