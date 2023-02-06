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
            <p>Lorem ipsum dolor sit.</p>
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
    justify-content: center;
    align-items: center;
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
    display: grid;
    grid-template-areas : "left main right";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 20px 50px;
`