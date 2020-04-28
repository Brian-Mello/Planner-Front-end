import React from 'react';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { connect } from 'react-redux';
import { StyledBody, StyledMain } from './styled';
import Header from '../../components/header';
import Footer from '../../components/footer';

export class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render() {
        return(
            <StyledBody>
                <Header/>
                <StyledMain>
                    
                </StyledMain>
                <Footer/>
            </StyledBody>
        )
    }
}

export default connect(
    null,
    null
)(HomePage);