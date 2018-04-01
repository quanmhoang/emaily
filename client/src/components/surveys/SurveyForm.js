import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    {label:"Survey Title" , name:"title"},
    {label:"Subject Line" , name:"subject"},
    {label:"Email Body" , name:"body"},
    {label:"Recipient List" , name:"emails"}
];

class SurveyForm extends Component {
    renderFields() {
        return(
            _.map(FIELDS, ({label, name}) => {
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
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);