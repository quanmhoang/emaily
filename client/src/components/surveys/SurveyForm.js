import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return(
            _.map(formFields, ({label, name}) => {
                return (
                    <Field
                    key={name}
                    label={label}
                    type="text"
                    name={name}
                    component={SurveyField}
                    />
                )
            })
           
        );
    }
    render() {
        return (
            <div>
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="btn-flat white-text left red">
                    Cancel
                    <i className="material-icons right">arrow_back</i>
                </Link>
                <button type="submit" className="btn-flat white-text right teal">
                    Next
                    <i className="material-icons right">arrow_forward</i>
                </button>
            </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = [];
    _.each(formFields, ({name}) => {
        if(!values[name]) {
            errors[name] = 'You must provide a value';
        }
    })

    errors.recipients = validateEmails(values.recipients || '');
    

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);