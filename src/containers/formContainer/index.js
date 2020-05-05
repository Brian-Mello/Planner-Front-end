import React from 'react';
import { connect } from 'react-redux';
import SelectDay from '../../components/selectDay';
import { FormDiv, Form, StyledTextField, StyledButtonForms} from './styled';
import { createTask } from '../../actions'

export class FormContainer extends React.Component{
    constructor(props){
        super(props)

        this.state={
            text: "",
            day: ""
        }
    }

    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const { text, day } = this.state;

        this.props.createTask( text, day )
        this.setState({
            text: "",
            day:""
        })
    }

    handleSelectDayOnChange = event => {
        const { value } = event.target;

        this.setState ({ day: value});
    }

    render(){

        const { text, day } = this.state
        return(
            <FormDiv>
                <Form onSubmit={this.handleFormSubmit}>
                    <StyledTextField 
                        placeholder="Comprei pão..." 
                        onChange={this.handleFieldChange}
                        value={text}
                        name="text"
                        type="text"
                        label="Tarefa"
                        required
                    />
                    <SelectDay
                        name="day"
                        value={day}
                        onChange={this.handleSelectDayOnChange}
                        required
                    />
                    <StyledButtonForms type="submit">Enviar</StyledButtonForms>
                </Form>
            </FormDiv>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    createTask: (text, day) => dispatch(createTask(text, day))
})

export default connect(
    null,
    mapDispatchToProps
)(FormContainer);