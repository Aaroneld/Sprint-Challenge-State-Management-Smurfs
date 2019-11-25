import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


const Container = styled.section`

    margin: 2%
    border: 2px solid black;
    padding: 4% 0;

    button {

        color: white;
        background: black;
        border: none;
        outline: none;
        padding: 2% 4%;

        &:hover {

            color: black;
            background: white;
            border: 1px solid black;
        }
    }

`;


const GetSmurfs = props => {

    const getSmurfsHandler = event => {

        event.preventDefault();
        props.getSmurfs();
    } 

    return ( 
        <Container>
            <button onClick={getSmurfsHandler}>Get Smurfs</button>
        </Container>
    )


};


export default connect (null, { getSmurfs })(GetSmurfs);