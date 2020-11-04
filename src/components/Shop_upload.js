import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const Shop_upload = (props) => {
    
    const [shop, setShop] = useState({
        name: '',
        address: '',
        img_name: '',
        content: '',
        price: '',
        owner: ''
    });
    
    const submitBtn = (e) =>{
        e.preventDefault();
        let form = document.getElementById("form");
        const formData = new FormData(form);       
         fetch("http://10.100.102.27:8000/pt/write", {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("Authorization"),
        },
            body: formData,
      }).then(res => {
        return res.text();
      }).then(res => {
        if (res === "ok") {
          props.history.push("/");
        } else {
          alert('글등록 실패');
        }
      });
    }

    const changeValue = (e) => {
        setShop({
          ...shop,
          [e.target.name]: e.target.value
        });
      }

    return (
        <div>
            <form id="form">
                <table>
                    <tr>센터 이름</tr>
                    <tr>
                        <input type="text" name="pt_name" onChange={changeValue}></input>
                    </tr>
                    <tr>센터 주소</tr>
                    <tr>
                        <input type="text" name="pt_address" onChange={changeValue}></input>
                    </tr>
                    <tr>센터 사진</tr>
                    <tr>
                        <input type="file" name="pt_img" onChange={changeValue}></input>
                    </tr>
                    <tr>센터 설명</tr>
                    <tr>
                        <input type="text" name="pt_content" onChange={changeValue}></input>
                    </tr>
                    <tr>가격</tr>
                    <tr>
                        <input type="text" name="pt_price" onChange={changeValue}></input>
                    </tr>
                    
                </table>
                
            </form>
            <button type="submit" onClick={submitBtn}>UPLOAD</button>
        </div>
    );
};

export default Shop_upload;