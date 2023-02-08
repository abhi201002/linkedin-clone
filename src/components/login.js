import React from 'react'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import { signInAPI } from '../action'
import { useEffect } from 'react'

function Login(props) {
  let navigate = useNavigate();
  useEffect(() => {
    if(props.user){
      navigate("/home", { replace: true })
    }
  }, [props?.user])
  return (
    <Container>
        <Nav>
            <Link to = '/'>
                <img src="/images/login-logo.svg" alt="linkedin" />
            </Link>
            <Sign>
                <Join>
                    Join Now
                </Join>
                <Sign_in>
                    Sign In
                </Sign_in>
            </Sign>
        </Nav>
        <Page>
            <Form>
                <Hero>
                    Welcome to Your Professional Community
                </Hero>
                <Google onClick= {() => {props.signIn()}}>
                    <img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="hhh" />
                    Sign in with Google
                </Google>
            </Form>
            <img src="https://img.freepik.com/premium-vector/ergonomic-desk-working-computer-footrest_316839-3038.jpg?w=740" alt="" />
        </Page>
    </Container>
  )
}

const Container = styled.div`

`
const Nav = styled.div`
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & img{
        width: 135px
    }
    `;

const Sign = styled.div`
    display: flex;
    /* width: 100000px; */
    justify-content: space-between;
`

const Join = styled.button`
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 35px;
    background-color: transparent;
    margin-right: 20px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.04);
    }
    border: none;
`

const Sign_in = styled.button`
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 35px;
    color: #0a66c2;
    font-weight: 10;
    /* margin-left:10px;  */
    border: 1.5px solid #0a66c2;
    background-color: transparent;
    &:hover{
        background-color: rgba(112, 181, 249, 0.1);
    }
    `

const Page = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    width: 100%;
    & > img{
        position: absolute;
        height: 700px;
        right: -60px;
        @media(max-width: 768px){
            position: initial;
            width:100%;
            object-fit: contain;
        }
    }
    @media(max-width: 768px){
        flex-direction: column;
    }
`

const Form = styled.div`
padding-top: 30px;
padding-left: 60px;
display: block;
@media (max-width: 700px) {
        padding: 40px 10px;
        display: block;
        text-align: center;
    }
    `

const Hero = styled.div`
    font-weight: 15;
    font-size: 55px;
    /* margin: auto; */
    width: 60%;
    color: rgb(143,88,73);
    @media (max-width: 768px) {
        width: 100%;
        font-size: 30px;
    }
    `

const Google = styled.button`
    width: 45%;
    padding: 15px 30px;
    margin-top: 60px !important;
    justify-content: center;
    margin-top: 30px;
    font-size: 20px;
    font-weight: 10 !important;
    display: flex;
    align-items: center;
    border: 1px solid grey;
    border-radius: 40px;
    background-color: transparent;
    & img{
        margin-right: 20px;
        width: 30px;
        object-fit: contain;
    }
    @media (max-width: 700px) {
        margin: auto;
        width: initial;
    }
`

const mapStateToProps =(state) =>{
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);