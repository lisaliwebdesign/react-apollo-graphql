import React, { Component, Fragment } from 'react'


class Form extends Component {
    render() {
        return (
            <div className="govuk-grid-column-one-third">
            <form method="GET">
                <fieldset className="govuk-fieldset">
                    <legend className="govuk-fieldset__legend govuk-fieldset__legend--s govuk-!-margin-0">
                        <h2 className="govuk-fieldset__heading">
                            Filter competitions - This section is under construction
                        </h2>
                    </legend>
                        <hr className="govuk-section-break govuk-section-break--visible"/>
                        <div className="govuk-form-group govuk-!-margin-top-6">
                            <label className="govuk-label" htmlFor="keywords">Keywords</label>
                            <input value="" className="govuk-input" id="keywords" name="keywords" type="text"/>
                        </div>
                        <div className="govuk-form-group">
                            <label className="govuk-label" htmlFor="innovation-area">Innovation area</label>
                            <select className="govuk-select" id="innovation-area" name="innovationAreaId">
                                <option value="">Any</option>
                                <option value="67">None</option>
                                <option value="39">Additive layer manufacturing (ALM)</option>
                                <option value="16">Advanced therapies</option>
                                <option value="59">Aerospace</option>
                                <option value="57">Agricultural productivity</option>
                                <option value="24">Assembly / disassembly / joining</option>
                                <option value="19">Biosciences</option>
                                <option value="38">Ceramic / electronic / functional materials</option>
                                <option value="40">Chemical / bio processes</option>
                                <option value="44">Composite materials</option>
                                <option value="56">Connected and autonomous vehicles</option>
                                <option value="27">Connected transport</option>
                                <option value="12">Creative industries</option>
                                <option value="18">Diagnostics, medical technology and devices</option>
                                <option value="20">Digital health</option>
                                <option value="5">Digital industries</option>
                                <option value="22">Digital manufacturing</option>
                                <option value="14">Digital technology</option>
                                <option value="42">Electronic materials and manufacturing</option>
                                <option value="10">Electronics, sensors and photonics</option>
                                <option value="7">Emerging technology</option>
                                <option value="37">Energy - other</option>
                                <option value="51">Energy and automotive</option>
                                <option value="36">Energy efficiency</option>
                                <option value="30">Energy systems</option>
                                <option value="58">Enhancing food quality</option>
                                <option value="23">Forming technologies</option>
                                <option value="21">Independent living and wellbeing</option>
                                <option value="52">Low carbon vehicles</option>
                                <option value="53">Marine transport</option>
                                <option value="25">Materials, process and manufacturing design technologies</option>
                                <option value="45">Metals / metallurgy</option>
                                <option value="26">Nanotechnology / nanomaterials</option>
                                <option value="31">Nuclear fission</option>
                                <option value="32">Offshore wind</option>
                                <option value="54">Other transport</option>
                                <option value="46">Polymers and plastics</option>
                                <option value="17">Precision medicine</option>
                                <option value="47">Preclinical technologies and drug target discovery</option>
                                <option value="55">Rail transport</option>
                                <option value="8">Robotics and autonomous systems</option>
                                <option value="6">Satellite applications</option>
                                <option value="29">Smart infrastructure</option>
                                <option value="15">Space technology</option>
                                <option value="41">Surface engineering, coatings and thin films</option>
                                <option value="43">Sustainable materials</option>
                                <option value="48">Therapeutic and medicine development</option>
                                <option value="28">Urban living</option>
                                <option value="60">Non-metallics</option>
                                <option value="61">Resource efficiency</option>
                                <option value="62">Surface engineering</option>
                                <option value="63">Electronics manufacturing</option>
                                <option value="64">Sensor and instrument design or manufacture</option>
                                <option value="65">Material recovery and treatment</option>
                            </select>
                        </div>
                        <div className="govuk-form-group">
                            <button className="govuk-button">Update results</button>
                        </div>
                </fieldset>
            </form>
            </div>
        )
    }
}
export default Form