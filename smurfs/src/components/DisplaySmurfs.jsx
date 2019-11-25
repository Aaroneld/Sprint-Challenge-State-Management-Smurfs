import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Smurf from './Smurf';


const Container = styled.section`

    margin: 2%;
    border: 2px solid black;
    padding: 4% 0;

    h2 {

        font-weight: bold;
        font-size: 125%;
        text-decoration: underline;
    }

    ul {

        display: flex;
    }

`;


const DisplaySmurfs = props => {


    return ( 
        <Container>
            <h2> Smurfs </h2>
            <ul>
                { props.smurfs && props.smurfs.map( smurf => {
                    return <Smurf key={smurf.id} smurf={smurf}/>
                })}
            </ul>
        </Container>
    )


};

const mapStateToProps = state => {

    return {

    smurfs: state.smurfs        

    };

};

export default connect(mapStateToProps, {})(DisplaySmurfs);