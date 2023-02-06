import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { PostArticle } from '../action';
import ReactPlayer from 'react-player'
// import { set } from 'firebase/database';
function PostModal(props) {
    const [talk,settalk] = useState("");
    const [pic,setpic] = useState("");
    const [vid,setvid] = useState("");
    const [asset,setAsset] = useState("");
    const postArticle = (e) =>{
        e.preventDefault();
        if(e.target != e.currentTarget){
            return;
        }
        const payload = {
            image: pic,
            video: vid,
            user: props.user,
            description: talk,
            timestamp: Timestamp.now(),
        }
        reset(e);
        props.postArticle(payload);
    }
    const reset = (e) =>{
        settalk("");
        setpic("");
        setvid("");
        setAsset("");
        props.handle_click();
    }
    const handle_change = (e) =>{
        const image = e.target.files[0];
        if(image == "" || image == undefined){
            alert("Lauda mera!");
            return;
        }
        setpic(image);
    }
    const switchAsset = (state) =>{
        setpic("");
        setvid("");
        setAsset(state);
    }
  return (
    <>
    {props.status == "open" ? <Container>
        <Content>
            <Create>
            <div>Create a post</div> 
            <button onClick={(e) => {reset(e)}}><img src="./images/close.svg" alt="" /></button>
            </Create>
            <hr />
            <User>
                {props?.user && props?.user?.photoURL ? <img src={props?.user?.photoURL} alt="" /> : <img src="./images/user.svg" alt="" />}
                {props?.user?.displayName}
            </User>
            <textarea placeholder='What do you want to talk about?' value = {talk} onChange = {(e) => {settalk(e.target.value)}}></textarea>
            {asset === "image" ? 
            (<UploadPic>
                <input type="file" accept='image/gif image/jpg image/png' name='image' id='file' style={{display: "none"}} onChange = {handle_change}/>
                <p>
                    <label htmlFor="file">Select an image to Post</label>
                </p>
                {pic && <img src= { URL.createObjectURL(pic)}/>}
            </UploadPic>)
            :
            asset === "media" && 
            (<>
                <input type="text" placeholder='Add the Video Link' value={vid} onChange = { (e) => {setvid(e.target.value)}}/>
                {vid && (<ReactPlayer width={"100%"} url = {vid} height = {"100%"}/>)}
            </>)
            }
            <Option>
                <Items>
                    <button onClick={() => {switchAsset("image")}}>
                        <img src="./images/images.svg" alt="" />
                    </button>
                    <button onClick={() => {switchAsset("media")}}>  
                        <img src="./images/video.svg" alt="" />
                    </button>
                </Items>
                <Post>
                    <button>
                        Anyone
                    </button>
                    <button disabled = {!(talk) ? true:false} onClick = {(event) => {postArticle(event)}}>
                        Post
                    </button>
                </Post>
            </Option>
        </Content>
    </Container>: ""}
    </>
  )
}


const Container = styled.div`
    display: block;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background-color: rgb(0, 0, 0,0.8);
    `

const Content = styled.div`
    margin: auto auto;
    position: relative;
    padding: 10px 20px;
    top: 52px;
    background-color: white;
    width:40%;
    height: 50%;
    textarea{
        /* min-height: 40%; */
        padding: 10px 0px;
        font-size: 15px;
        width: 100%;
        height:20%;
        text-align: start;
        /* border: none; */
        border-width: 0px;
        word-wrap: break-word;
        overflow: hidden;
        outline: none;
        resize: none;
    }
    & > div{
        
    }
`

const Create = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    color: #191919;
    button{
        background-color: transparent;
        border: none;
        border-radius: 50%;
    }
`
const User = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
    font-weight: 600;
    img{
        height: 45px;
        border-radius: 50%;
        margin-right: 15px;
    }
`

const UploadPic = styled.div`
    img{
        width: 100%;
    }
`
const Option = styled.div`
    position: relative;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Post = styled.div`
    padding-left: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        background-color: transparent;
        border: none;
        :nth-child(2){
            background-color: #0a66c2;
            padding: 10px 15px;
            text-align: center;
            font-weight: 600;
            font-size: 15px;
            color: white;
            border-radius: 40px;
        }
    }
`

const Items = styled.div`
    display: flex;
    padding-right: 20px;
    border-right: 0.1px solid black;
    & > button{
        background-color: white;
        border: none;
        :nth-child(1){
            margin-right: 15px;
        }
    }
`

const mapStateToProps = (state) => {
    return{
        user : state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) =>({
    postArticle: (payload) =>{dispatch(PostArticle(payload))}
})

export default connect(mapStateToProps,mapDispatchToProps)(PostModal)