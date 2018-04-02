import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const trailingCommaRe = /(^,)|(,$)/g;

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    return(
        <div>
            <h3>Please confirm your entries!</h3>
            <div>
            
            {_.map(formFields, ({ label, name }) => {
                return(
                    <div key={name}>
                        <label>{label}</label>
                        {
                           name === "recipients" ? 
                           <div>{formValues[name].trim().replace(trailingCommaRe, "")}</div>
                           :<div>{formValues[name].trim()}</div>
    
                        }
                        
                    </div>
                );
            })}
            </div>
            <button className="btn-flat white-text left yellow darken-3" onClick={onCancel}>
                Go back
            <i className="material-icons right">arrow_back</i>
            </button>
            <button onClick={() => submitSurvey(formValues, history)} className="btn-flat white-text right teal">
                Send Survey
            <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

function mapStateToProps({form}) {

    return(
        {formValues: form.surveyForm.values}
    )
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));