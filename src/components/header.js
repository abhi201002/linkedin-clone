import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListIcon from '@mui/icons-material/List';
import styled from 'styled-components'
import { connect } from 'react-redux';

function Header(props) {
    let navigate = useNavigate()
    useEffect(() => {
        if(!props.user){
            navigate("/", { replace: true })
        }
    }, [props?.user])
  return (
    <>
    <Nav>
        <Search>
            <img src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png" alt="linkedin logo design" />
            <input type="text" placeholder='Search'/>
        </Search>
        <Option>
            <OptionItem>
                <HomeIcon/>
                Home
            </OptionItem>
            <OptionItem>
                <PeopleIcon/>
                My Network
            </OptionItem>
            <OptionItem>
                <WorkIcon/>
                Jobs
            </OptionItem>
            <OptionItem>
                <TextsmsIcon/>
                Messaging
            </OptionItem>
            <OptionItem>
                <NotificationsIcon/>
                Notification
            </OptionItem>
            <OptionItem>
                {props?.user && props?.user?.photoURL ? <img src={props?.user?.photoURL} alt="hjhj" /> : <img src="./images/user.svg" alt="" />}
                {props?.user?.displayName}
                <SignOut onClick={() => props.signOut()}>
                    Sign Out
                </SignOut>
            </OptionItem>
            <OptionItem>
                <ListIcon/>
                Work
            </OptionItem>
        </Option>
    </Nav>
    </>
  )
}


const Nav = styled.div`
    /* width: 100%; */
    display: flex;
    /* background-color: red; */
    align-items: center;
    justify-content: space-between;
`

const Search = styled.div`
    padding: 5px 60px;
    display: flex;
    justify-content: flex-start;
    /* width: 45%; */
    img{
        height: 35px;
        object-fit: contain;
    }
    input{
        width: 268px;
        /* height: initial; */
        border: none;
        background-color: rgb(238,243,248);
        padding: 0px 20px;
    }
    @media(max-width: 768px){
        margin: auto;
    }
`

const Option = styled.div`
    padding: 5px 60px;
    display: flex;
    background-color: white;
    width: 55%;
    justify-content: space-between;
    @media(max-width: 768px){
        position: fixed;
        z-index: 999;
        padding: 0px 10px;
        bottom:0px;
        width: 100%;
        box-sizing: border-box;
    }
`

const SignOut = styled.button`
    background-color: white;
    position: absolute;
    top: 45px;
    border: none;
    /* width: 100px; */
    padding: 10px 20px;
    display: none;
    :hover{
        cursor: pointer;
    }
    @media(max-width: 768px){
        position: absolute;
        top:-35px;
        /* bottom: 00px; */
    }
`
const OptionItem = styled.div`
    color: rgb(102,102,102);
    font-size: 13px;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 0px 10px;
    img{
        border-radius: 50%;
        width: 25px;
    }
    :nth-child(6){
        :hover{
            ${SignOut}{
                display: flex;
            }
        }
    }
    @media (max-width: 768px){
        margin: 0px;
    }
`


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToprops = (dispatch) =>({
    signOut: () => {dispatch({
        type: "Sign_Out",
    })}
})
export default connect(mapStateToProps,mapDispatchToprops)(Header)