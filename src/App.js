
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { useState } from 'react';
import Test from './Test';
import List from './List';
import MapInfo from './MapInfo';
import Shop from './Shop';
import Header from './components/Header';
import Shop_upload from './components/Shop_upload';
import { Route } from 'react-router-dom';

import Etc from './Etc';



function App() {
  
  
  return (
    <div>
      
      <div className="header">
      <Header/>
      </div>
   {/*    
      <List type="gym / studio "/>
     
      <Shop/>
     
      <Shop_upload/>
*/}  
      <Route path="/pthome" exact={true} component={List} type="gym / studio "/>
      
      <Route path="/shop/:id" exact={true} component={Shop} />
      <Route path="/etc" exact={true} component={Etc}/>


    </div>
  );
}

export default App;
