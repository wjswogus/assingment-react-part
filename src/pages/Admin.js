import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';

const TableStyle = styled.div`
border : 1px solid black;
border-radius : 2px;
`;

const Admin = () => {
    const [userList, setUserList] = useState();
    const [last, setLast] = useState('');
  	const [page, setPage] = useState(0);
    
    const prev = () =>{
        setPage(page-1);
      }
  
      const next = () =>{
        setPage(page+1);
      }

    useEffect(() => {
        fetch("", {
          method: "GET"
        }).then(res => res.json())
          .then(res => {
            console.log(res);
            setUserList(res.content);
            setLast(res.last);
          });
      }, [page]);

    const giveAuth = () =>{


        alert("승인되었습니다");
    }

    return (
        <div>
            <TableStyle>
                <tr>
                    <th>회원 번호</th>
                    <th>회원 아이디</th>
                    <th>회원 종류</th>
                    <th>회원 정보</th>
                    <th>승인 버튼</th>
                </tr>
                {userList.map((user) => (
                    <tr>
                        <td>{user.no}</td>
                        <td>{user.id}</td>
                        <td>{user.auth_pt}</td>
                        <td>{user.content}</td>
                        <td><button onClick={giveAuth} disabled={true}>승인</button></td>
                    </tr>
                ))}
                <div className="d-flex justify-content-center">
				<Pagination>
					{page === 0 ? 
						<Pagination.Item onClick={prev} disabled>Prev</Pagination.Item> : 
						<Pagination.Item onClick={prev}>Prev</Pagination.Item>}
					{last === true ? 
						<Pagination.Item onClick={next} disabled>Next</Pagination.Item> : 
						<Pagination.Item onClick={next}>Next</Pagination.Item>}
				</Pagination>
			</div>
            </TableStyle>
        </div>
    );
};


export default Admin;