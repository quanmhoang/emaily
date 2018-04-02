import React, { Component } from 'react';


class SurveyField extends Component {
    render() {
        
        const input = this.props.input;
        const meta = this.props.meta;
        return (
            <div>
                <label>{this.props.label}</label>
                <input {...input}/>
                <div className="red-text" style={{marginBottom: "20px"}}>
                    {meta.touched && meta.error}
                </div>
               
            </div>
        );
    }
}

export default SurveyField;