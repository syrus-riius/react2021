
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
function Detail(props){
    let history = useHistory();
    let { id } = useParams();
    let prodNum = props.shoes.find(function(prod) {
        return prod.id === id;
    })
    console.log(prodNum);

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt=""/>
            </div>
            <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[prodNum].title}</h4>
            <p>{props.shoes[prodNum].content}</p>
            <p>{props.shoes[prodNum].price}</p>
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