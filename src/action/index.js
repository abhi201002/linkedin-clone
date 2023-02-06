import { async } from "@firebase/util";
import { signInWithPopup } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, orderBy } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import db, { auth, provider, storage } from "../components/firebase";
export const setLoading = (e) =>({
    type: "LOADING",
    status: e,
})
export const getArticles = (payload) =>({
    type: "GET_ARTICLE",
    payload: payload,
})
export function signInAPI(){
    return(dispatch) =>{
        signInWithPopup(auth, provider)
        .then((payload) => {
            console.log(payload.user)
            dispatch({
                type: "SET_USER",
                user: payload.user,
            })
        })
        .catch((error) =>
        alert(error.message)
        );
    }
}

export function PostArticle(payload){
    return(dispatch) => {
        dispatch(setLoading(true));
        if(payload.image != ''){
            const upload =
            ref(storage,`/images/${payload.image.name}`); 
            uploadBytesResumable(upload,payload.image)
            .on('state_changed',(snapshot) =>{
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
                console.log(`Progress: ${progress}%`);
                if(snapshot.state == 'RUNNING'){
                    console.log(`Progress: ${progress}%`);
                }
            },
            (error) => {console.log(error.code)},
            async ()  => {
                const downloadURL = await getDownloadURL(upload);
                addDoc(collection(db,"articles"),{
                    action: {
                        description: payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        image: payload.user.photoURL,
                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments: 0,
                    description: payload.description
                })
                dispatch(setLoading(false));
            }
            );
        }
        else if(payload.video){
            addDoc(collection(db,"articles"),{
                action: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: payload.video,
                sharedImg: "",
                comments: 0,
                description: payload.description
            })
            dispatch(setLoading(false));
        }
    };
}

export function getArticle(payload){
    return async (dispatch) => {
            const ref =  collection(db,"articles");
                let payload =  await getDocs(ref,orderBy("action.date","desc"));
                let article = [];
                payload.forEach(articles => {
                    article = [...article,articles.data()];
                })
                dispatch(getArticles(article));
    }
}