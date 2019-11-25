import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';


const Container = styled.section`

    margin: 2%
    border: 2px solid black;
    padding: 4% 0;

    form { 

        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        align-items: center;

        input {

            margin-bottom: 4%;
            padding: 2% 0; 

        }

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
    }

`;


const ChangeSmurf = () => {

    const [age, setAge] = useState(null);
    const [name, setName] = useState(null);
    const [height, setHeight] = useState(null);
    const [id, setId] = useState(null);

    const handleSubmit = event => {

        event.preventDefault();

        if ( typeof parseInt(age) === 'number' && typeof parseInt(height) === 'number' 
        && typeof name === 'string' && name.length > 0 && typeof parseInt(id) === 'number') {
            
            let req = {
                url: `http://localHost:3333/smurfs/${id}`,
                method: 'PUT',
                data: {name: name,
                       age: age,
                       height: height },
                params: { id: id }
            
                };
           
            Axios(req)
            .then( response => {
                console.log(response);
            })
            .catch ( error => {
                console.log(error); 
            });   
        }
        else {
            console.log("invalid");
        }        
    } 

    const handleName = event => {

        setName(event.target.value);
    } 

    const handleAge = event => {

        setAge(parseInt(event.target.value));
    } 

    const handleHeight = event => {

        setHeight(parseInt(event.target.value));   
    } 

    const handleId = event => {

        setId(parseInt(event.target.value));
    } 

    return ( 
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="smurf id"
                onChange={handleId}
                />
                <input
                placeholder="smurf name"
                onChange={handleName}
                />
                <input
                placeholder="smurf age"
                onChange={handleAge}
                />
                <input
                placeholder="smurf height"
                onChange={handleHeight}
                />
                <button type="submit"> Change Smurf</button>
            </form>
        </Container>
    )


};


export default ChangeSmurf;