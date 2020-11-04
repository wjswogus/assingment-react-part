import React, { useEffect, useState } from 'react';

const Diet = () => {

    const[diet_lists, setList] = useState({
        id: '',
        title: '',
        link: '',
        content: ''
    });
    const [last, setLast] = useState('');
    const [page, setPage] = useState(0);
      
      const prev = () =>{
        setPage(page-1);
      }
  
      const next = () =>{
        setPage(page+1);
      }

    useEffect(() => {
        fetch("http://localhost:8000?"+page, {
          method: "GET"
        }).then(res => res.json())
          .then(res => {
            console.log(res);
            setList(res.content);
            setLast(res.last);
          });
      }, [page]);

    return (
        <div>
           <table>
                <th>이름</th>
                <th>설명</th>
                <th>링크</th>
                
                {diet_lists.map((diet) => (
                    <tr>
                        <td>{diet.title}</td>
                        <td>{diet.content}</td>
                        <td>{diet.link}</td>
                    </tr>
                ))}
           </table> 
        </div>
    );
};

export default Diet;