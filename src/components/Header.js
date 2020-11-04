import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoginForm from '../pages/user/LoginForm.js';
import Test from '../Test.js';
import MenuBtn from './MenuBtn.js';



const linkStyle = {
    fontSize:"1px",
}

const listStyle ={
    left:"10%",
}

const navbarSearch={
   
}

const searchStyle ={
    
}

const searchBlank={

}

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

    


const Header = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  


    const body = (
      <div style={modalStyle} className={classes.paper}>
        
        <LoginForm />
      </div>
    );

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <ul className="navbar-nav">
                        <li><MenuBtn/></li>
                        <li class="nav-item active">
                        <Link to="/pthome" className="navbar-brand" >PT</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/profilehome" className="navbar-brand" >Profile</Link>
                        </li>
                    </ul>
                    
                   
                    <div className="collapse navbar-collapse" id="navbarResponsive" style={listStyle}>
                        <div style={navbarSearch}>
                            <div style={searchStyle}>
                             <SearchIcon />
                            </div>
                            <div style={searchBlank}>  
                                <input type="search" placeholder="Search"></input>
                            </div>
                        </div>
                        <ul className="navbar-nav ml-auto" style={linkStyle}>
                            <li className="nav-item">
                                <button type="button" onClick={handleOpen}>로그인</button>
                                
                            </li>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              
                            >
                              {body}
                            </Modal>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">회원가입</Link>
                            </li>  

                            <li className="nav-item">                             
                                <Link to="#" className="nav-link"><AccountCircleIcon/></Link>                               
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                <ShoppingCartOutlinedIcon/>
                                </Link>                               
                            </li>  
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;