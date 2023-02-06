import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

function left(props) {
  return (
    <Container>
        <ArtCard>
            <Profile>
                <Card/>
                <a>
                    <Photo/>
                    <span>Welcome, {props?.user?.displayName}</span>
                </a>
                <a>
                    Add a Photo
                </a>
            </Profile>
            <Widget>
                <a>
                    <div>
                        <span>Connections</span>
                        <span>Grow Your Network</span>
                    </div>
                    <img src="./images/widget-icon.svg" alt="" />
                </a>
                <a>
                    <img src="./images/item-icon.svg" alt="" />
                    <span>My items</span>
                </a>
            </Widget>
        </ArtCard>
        <CommunityCard>
            <a>
                <span>Groups</span>
            </a>
            <a>
                <span>Events</span>
                <img src="./images/plus-icon.svg" alt="" />
            </a>
            <a>
                Followed Hashtag
            </a>
            <a>
                Discover More
            </a>
        </CommunityCard>
    </Container>
  )
}


const Container = styled.div`
    text-align: center;
    grid-area : "left";
`

const Card = styled.div`
    background-image: url("./images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    /* margin: -12px -12px 0; */
    background-repeat: no-repeat;
`

const Photo = styled.div`
    background-image: url("./images/photo.svg");
    background-color: white;
    height: 50px;
    width: 50px;
    background-size: 40px;
    background-position: center;
    margin: -20px 0px 0px;
    background-repeat: no-repeat;
    border-radius: 50%;
    `
const ArtCard = styled.div`
    background-color: white;
    `

const Profile = styled.div`
    a{
        &:nth-child(2){
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                font-weight: 500;
                color: rgb(25,25,25);
            }
        }
        &:nth-child(3){
            color: #0a66c2;
            font-size: 12px;
            text-align: center;
        }
    }
`

const Widget = styled.div`
    padding: 0px 10px;
    a{
        :first-child{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            div{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                span{
                    :first-child{
                        font-size: 12px;
                        font-weight: 500;
                        color: rgb(110,110,110);
                    }
                    :last-child{
                        font-size: 12px;
                        font-weight: 500;
                        color: rgb(25,25,25);
                    }
                }
            }
        }
        :last-child{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            color: rgb(25,25,25);
            font-size: 12px;
            font-weight: 500;
            img{
                color: rgb(102,102,102);
            }
        }
    }
`

const CommunityCard = styled.div`
    padding: 0px 10px;
    background-color: white;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    color: #0a66c2;
    font-size: 12px;
    font-weight: 500;
    a{
        text-align: left;
        margin: 7px 0px;
        :nth-child(2){
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(left)