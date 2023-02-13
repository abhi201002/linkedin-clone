import React from 'react'
import styled from 'styled-components'

function Option(props) {
  return (
    <Container>
        <img src={props.image} alt="" />
        <div>{props.name}</div>
    </Container>
  )
}

export default Option

const Container = styled.button`
    display: flex;
    align-items: center !important;
    font-weight: 500;
    color:rgb(94,94,94);
    background-color: transparent;
    word-wrap: normal;
    border: none;
    box-sizing: border-box;
    /* border-left: 0.5px solid grey;
    border-right: 0.5px solid grey; */
    padding: 10px 5px;
    div{
        /* margin-left: 14px; */
    }
    :hover{
        background-color: rgb(94,94,94,0.2);
        border-radius: 4px;
        cursor: pointer;
    }
`