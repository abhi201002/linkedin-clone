import React from 'react'
import styled from 'styled-components'

function hashtags(props) {
  return (
    <Container>
        <Hash></Hash>
        <Follow>
            <span># {props.name}</span>
            <button>+ Follow</button>
        </Follow>
    </Container>
  )
}

export default hashtags

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0px;
    height: 65px;
`

const Hash = styled.div`
    /* font-size: 40px; */
    background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
    height: 50px;
    width: 50px;
    background-size: contain;
    background-position: center;
    margin-right: 10px;
`

const Follow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    span{
        font-size: 14px;
        font-weight: 500;
        color: rgb(25,25,25);
    }
    button{
        height: 50%;
        width:100%;
        padding: 5px 15px;
        font-size: 16px;
        font-weight: 500;
        background-color: transparent;
        border-radius: 30px;
        margin-top: 10px;
        color: rgb(102,102,102);
        border: 1.5px solid rgb(102,102,102);
        box-sizing: border-box;
        text-align: center;
        display: inline-flex;
        align-items: center;
        :hover{
            background-color: rgb(0, 0, 0,0.1);
            box-shadow : inset 0px 0px 0px 1px rgb(0, 0, 0,0.8);
            transition:  box-shadow 167ms, background-color 167ms;
        }
    }
`