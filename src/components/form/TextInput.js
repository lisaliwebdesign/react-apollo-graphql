import React, { Component} from 'react'


class TextInput extends Component {
    render(props) {
        return (
            <div className="govuk-form-group">
                <label className="govuk-label" htmlFor={this.props.for}>
                    {this.props.label} </label>
                <div className="password-toggle">
                    <input className="govuk-input" id={this.props.for} name={'j_'+this.props.for} type={this.props.type} value={this.props.value}/>
                </div>
            </div>
        )
    }
}

export default TextInput



