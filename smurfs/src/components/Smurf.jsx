import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Container = styled.section`

    margin: 2%;
    border: 2px solid black;
    padding: 3%;
    flex-basis: 30%;
    
    h3 {

        font-weight: bold;
        font-size: 115%;
        margin-bottom: 2%;
    }
    
    p {

        margin-bottom: 2%;
    }

`;


const Smurf = props => {


    return ( 
        <Container>
            <h3>{props.smurf.name}</h3>
            <p>{`Height: ${props.smurf.height}`}</p>
            <p>{`Age: ${props.smurf.age}`}</p>
        </Container>
    )


};


export default Smurf;