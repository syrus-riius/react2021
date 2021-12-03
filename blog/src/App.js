/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function num () {
  return 100;
}


function App() {
  let [title, updateTitle] = useState(['남자 코트 추천', '강남 우동 맛집','영등포 오피스']);
  let [thumbs, updateThumbs] = useState(0);
  // function newTitle () {
  //   let newArray = [...title];
  //   // newArray[0] = '여자 코트 추천';
  //   updateTitle(newArray.sort());
  // }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/* <button onClick={ newTitle }>버튼</button> */}
      <div className="list">
        <h3>{ title[0] } <span onClick={ ()=> {updateThumbs(thumbs + 1)} }>👍🏼</span> {thumbs} </h3>
        <p>2월 17일 발행</p>
        <p>{}</p>
        <hr />
      </div>

      <div className="list">
        <h3>{ title[1] }</h3>
        <p>2월 17일 발행</p>
        <p>{}</p>
        <hr />
      </div>

      <div className="list">
        <h3>{ title[2] }</h3>
        <p>2월 17일 발행</p>
        <p>{}</p>
        <hr />
      </div>
      
      <Modal />

    </div>

  );
}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
