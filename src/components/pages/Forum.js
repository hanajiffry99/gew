import React,{useState} from 'react'
import Discussion from '../Posts/Discussion';

const users = ['Hitesh', 'Jon Doe', 'Lorem Itsum', 'Bunny', 'Kim'];

function Forum() {

    <div>Discussion forum</div>
    const [post, setPost] = useState([{
        postedByUser: 'Hitesh',
        timeStamp: Date(),
        postId: 'rxgyuioer',
        content: 'Hey I am Hitesh',
        voteCount: 0,
    }]);


    const [inputText, setInput] = useState();

    const handelChanges = (e) => {
        e.preventDefault();

        let user = users[Math.floor(Math.random() * 4)];
        let userDetails = {
            postedByUser: user,
            timeStamp: Date.now(),
            postId: user,
            content: inputText,
            voteCount: 0
        }

        // This will update to array of set
        let newPosts = [...post];
        newPosts.push(userDetails);
        setPost(newPosts);
        setInput('');
    }

    const handelInputChange = (e) => {
        setInput(e.target.value);
    }

    

    return (
        <>
            <div className="container text-center mt-5">
            <form className="jumbotron" onSubmit={handelChanges}>
                    <input className="form-control" name="mainContent" 
                    placeholder="Create new discussion" onChange={handelInputChange} value={inputText} required autoComplete="off" />
            </form>
                
                {post.map((post, key) => {
                    return (<Discussion data={post}  />)
                })}
            </div>
        </>
    );
}

export default Forum
