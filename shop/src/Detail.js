
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let Vox = styled.div `
    padding : 20px;
`;

let Topic = styled.h4 `
    font-size : 25px;
    color : ${ props => props.color }
    `;

function Detail(props){
    let history = useHistory();
    let { id } = useParams();
    return (
        <div className="container">
        <div className="row">
            <Vox>
                <Topic color={'Grey'}>상세페이지</Topic>
            </Vox>
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt=""/>
            </div>
            <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.goBack();
            }}>뒤로가기</button> 
            <button className="btn btn-danger" onClick={()=>{
                history.push('/');
            }}>메인으로</button> 
            </div>
        </div>
    </div>  
    )
};

export default Detail 