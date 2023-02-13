import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Option from './Option'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { connect } from 'react-redux';
import PostModal from './PostModal';
import { getArticle } from '../action';
import ReactPlayer from 'react-player';

function Main(props) {
  const [status,setStatus] = useState("close");
  useEffect(() => {
    props.getArticle();
  }, [props.article])
  const handle_click = () =>{
    if(status == 'open'){
      setStatus("close");
    }
    else{
      setStatus("open");
    }
  }
  return (
<>
    <Container>
      <Share>
        <div>
        {props?.user && props?.user?.photoURL ? <img src={props?.user?.photoURL} alt="" /> : <img src="./images/user.svg" alt="" />}
          <button onClick={handle_click} disabled = {props.loading ? true:false}>Start a post</button>
        </div>
        <div>
          <Option image = "./images/pic.svg" name = "Photo"/>
          <Option image = "./images/vid.svg" name = "Video"/>
          <Option image = "./images/event.svg" name = "Event"/>
          <Option image = "./images/article.svg" name = "Write article"/>
        </div>
      </Share>
      {props.loading ? <Loading><img src='./images/loader.svg'/></Loading> : ""}
      {console.log(props.article)}
      {props.article?.map((article,key) =>{
        return(
        <Post>
        <Info>
          {/* <img src={article?.action.image} alt="" /> */}
          <User>
            {/* <div>{article?.action.title}</div>
            <div>{article?.action.description}</div>
            <div>{article?.action.date.toDate().toLocaleDateString()}</div> */}
          </User>
          <div color='rgb(10,102,194)'>+Follow</div>
        </Info>
        {/* <div>{article?.description}</div>
        {article?.sharedImg ?
          (<img src={article?.sharedImg} alt="" />)
          :
          (<ReactPlayer width={"100%"} url = {article?.video}/>)
        } */}
        <Counts>
          <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
          <img src="https://static.licdn.com/sc/h/41j9d0423ck1snej32brbuuwg" alt="" />
          <img src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="" />
          <div>75 others</div>
        </Counts>
        <hr />
        <Social>
          <button>
            <ThumbUpAltIcon/>
            <div>Like</div>
          </button>
          <button>
            <img src="./images/comment.svg" alt="" />
            <div>Comment</div>
          </button>
          <button>
            <ShortcutIcon/>
            <div>Repost</div>
          </button>
          <button>
            <img src="./images/send.svg" alt="" />
            <div>Send</div>
          </button>
        </Social>
      </Post>
      )})}
      <PostModal status = {status} handle_click = {handle_click}/>
    </Container>
</>
  )
}


const Container = styled.div`
  grid-area: "main";
`

const Share = styled.div`
  background-color: white;
  width: 100%;
  /* border: 2px solid red; */
  padding: 10px 0px;
  & > div{
    :last-child{
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      box-sizing: border-box;
      margin: 0px 5px;
    }
    :first-child{
      display: flex;
      margin: 0px 20px ;
      img{
        height: 50px;
        border-radius: 50%;
      }
      button{
        background-color: transparent;
        color: rgb(94,94,94);
        box-sizing: border-box;
        font-weight: 530;
        width: 100%;
        text-align: left;
        margin-left: 15px;
        border-radius: 40px;
        padding: 0px 15px;
      }
    }
  }
`

const Post = styled.div`
  background-color: white;
  width: 100%;
  margin: 10px 0px;
  padding: 10px 0px;
  box-sizing: border-box;
  & > img{
    /* :first-child{ */
      object-fit: contain;
      width: 100%;
    /* } */
  }
  hr{
    margin: 0px 15px;
  }
  & > div{
    :nth-child(2){
      margin: 10px 10px;
      /* background-color: red; */
    }
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  right: 0px;
  margin: 0px 20px ;
  img{
    height: 50px;
    object-fit: contain;
    border-radius: 50%;
  }
  & > div{
    :nth-child(3){
      position: absolute;
      font-weight: 600;
      right: 0px;
      color: rgb(10,102,194);
    }
  }
`

const User = styled.div`
  margin-left: 15px;
  font-weight: 100;
  font-size: 13px;
  &>div{
    :first-child{
      font-size: initial;
      font-weight:500;
    }
  }
`

const Counts = styled.div`
  display: flex;
  margin: 5px 20px ;
  font-size: 12px;
  align-items: center;
  font-weight: 300;
  color: #666;
  img{
    margin-left: -5px;
    border: none;
    border-radius: 50%;
  }
`

const Social = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 5px;
  box-sizing: border-box;
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgb(94,94,94);
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    width: 100%;
    margin: 10px 5px;
    div{
        margin-left: 10px;
    }
    :hover{
        background-color: rgb(94,94,94,0.2);
        border-radius: 4px;
        cursor: pointer;
    }
  }
  @media(max-width: 768px){
    button{
      &>div{
        display: none;
      }
    }
  }
`

const Loading = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  text-align: center;
  img{
    position: relative;
    top: 150px;
  }
`
const mapStateToProps = (state) => {
  return {
      user: state.userState.user,
      loading: state.articleState.loading,
      article: state.articleState.article
  };
};

const mapDispatchToprops = (dispatch) =>({
  getArticle: () => dispatch(getArticle())
})
export default connect(mapStateToProps,mapDispatchToprops)(Main)