import React from 'react'
import styled from 'styled-components'
import Left from './left'
import Main from './main'
import Right from './right'

function home() {
  return (
    <>
        <Container>
        <Ad>
            <h5><a href="">Hiring in Hurry!!</a></h5>
            <p>Find Talented pros in the record time with Upwork and keep business moving.</p>
        </Ad>
        <Content>
            <Left/>
            <Main/>
            <Right/>
        </Content>
        </Container>
    </>
  )
}

export default home

const Container = styled.div`
background-color: rgb(243,242,239);

`
const Ad = styled.div`
    padding-top: 15px;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    margin: auto;
    text-align: center;
    width: 50%;
    text-decoration-style: underline;
    p{
        font-weight: 500;
    }
`
const Text = styled.div`
    background-color: red;
    width: 0px;
    margin: auto;
    /* text-align: center; */
`

const Content = styled.div`
    /* background-color: red; */
    /* overflow: auto; */
    display: grid;
    grid-template-areas : "left main right";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 20px 50px;
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        /* width: 100%; */
    }
`

// To attend our meeting on sunday 
// details 