/* eslint-disable */

import React, { useState } from 'react';
import './App.css';


function App() {
  let [title, updateTitle] = useState(['남자 코트 추천', '강남 우동 맛집','영등포 오피스']);
  let [thumbs, updateThumbs] = useState(0);
  let [modal, updateModal] = useState(false);
  let [focused, updateFocused] = useState(0);
  let [inputValue, updateValue] = useState('');
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      {/* <button onClick={ newTitle }>버튼</button> */}
      

      {
        title.map((post, i) => {
          return (
            <div className="list" key={i}>
            <h3 onClick={ () => {updateFocused(i)}}>{ post } 
            <span onClick={ ()=> {updateThumbs(thumbs + 1)} }>👍🏼</span> {thumbs} </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          )
        })
      }

      {/* <input onChange={ (e)=>{ updateValue(e.target.value) }} /> */}

      <div className="publish">
        <input onChange={ (e)=>{ updateValue(e.target.value)} }/>
        <button onClick={ ()=>{
          let arrayCopy = [...title];
          arrayCopy.unshift(inputValue);
          updateTitle(arrayCopy);
          }}>저장</button>
      </div>

      <button onClick={ ()=> {updateModal(!modal)}}>열고닫기</button>
      {
        modal === true
        ? <Modal title={title} focused={focused} />
        : null
      }
      
  
  
    </div>
  
  );
}
  
function Modal(props){
  return (
    <div className="modal">
      <h2>제목 : { props.title[props.focused] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
