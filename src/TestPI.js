import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function TestPI() {
  const [titleState, setTitleState] = useState('');
  const [bugState, setBugState] = useState('');
  const [bodyState, setBodyState] = useState('');
  const [postState, setPostState] = useState([]);

  const resetForm = () => {
    setTitleState('');
    setBugState('');
    setBodyState('')
  }

  const getBugPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        console.log('----------------------------------------------');
        console.log(response);
        // console.log('data', data);
        setPostState(data);
        console.log('Bug Post Data Successsfuly Received: ');
      })
      .catch((err) => {
        console.log('Error retreiving data!!!');
      })
  }

  // const bridgeFront = () => {
  //   console.log('BRIDGE FRONT CLICKED');
  //   const dayta = {
  //     title: 'hi',
  //     poop: 'slimy',
  //     reaction: 'eww'
  //   }

  //   axios({
  //     url: '/api/poop',
  //     method: 'POST',
  //     data: dayta
  //   })
  //   .then(() => {
  //     console.log('POOP CAME IN');
  //   })
  //   .catch(() => {
  //     console.log('this isnt poop....');
  //   })
  // }

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      title: titleState,
      error: bugState,
      body: bodyState,
      status: 0
    }

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(()=> {
      console.log('Data has been sent to the server');
      resetForm();
      getBugPost();
    })
    .catch(() => {
      console.log('Internal server error');
    })
  }

  useEffect(() => {
    console.log('rerendered');
    getBugPost();
  }, [])

  //console.log(postState);


  return (
    <div className="App">
      <header className="App-back">
        <h2>Welcome to my App</h2>
        <form>
          <div className="form-input">
            <input type="text"
                   name="title"
                   placeholder="Title"
                   value={titleState}
                   onChange={(e) => setTitleState(e.target.value)}
            />
          </div>
          <div className="form-input">
            <textarea name="bug" placeholder="What's the Error?" cols="30" rows="3" value={bugState} onChange={(e) => setBugState(e.target.value)}></textarea>
          </div>
          <div className="form-input">
            <textarea name="body" placeholder="Body" cols="30" rows="10" value={bodyState} onChange={(e) => setBodyState(e.target.value)}></textarea>
          </div>
          <button onClick={(e) => submit(e)}>Submit</button>
          <div>RANDOM DIV</div>
        </form>
        {/* <button onClick={() => bridgeFront()}>TRANSFER</button> */}
        <div className="bugpost">
          {postState.map((post, i) => (
            <div key={i}>
              <h2>TITLE: {post.title}</h2>
              <h3>ERROR: {post.error}</h3>
              <p>BODY: {post.body}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default TestPI;
