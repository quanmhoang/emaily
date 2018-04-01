import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


class SurveyField extends Component {
    render() {
        const input = this.props.input;
        return (
            <div>
                <label>{this.props.label}</label>
                <input {...input}/>
            </div>
        );
    }
}

export default SurveyField;