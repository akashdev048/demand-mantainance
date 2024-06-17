
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../assets/css/style.scss";
import "../Header/Header.scss";
import { Navbar, Container } from 'react-bootstrap';
import Logo from "../../assets/images/logo.png";
import avtarImg from "../../assets/images/avtar-img.png";
import notificationIcon from "../../assets/images/notification-icon.svg";
import chatIcon from "../../assets/images/chat-msg-icon.svg";
import chatAvtarImg from "../../assets/images/chat-avtar-img.png"


const Header = () => {
    const [showChat, setShowChat] = useState(false);
    const [showFullChat, setShowFullChat] = useState(false);
    const navigate = useNavigate();


    return (
        <>
            <div className="header">
                <Navbar expand="lg" className="bg-body-tertiary navbar-header">
                    <Container fluid>
                        <div className='left-mtcontent'>
                            <Navbar.Brand href="#home"><img src={Logo} alt='logo' /></Navbar.Brand>
                            <div className='usertop-wgt d-flex align-items-center'>
                                <div className='avtar-profile-img'>
                                    <img src={avtarImg} alt='image' />
                                </div>
                                <div className='flex-avtar-name'>
                                    <span className='name-avt-txt'>John Smith</span>
                                </div>
                            </div>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='wigt-container-heading'><h3 className='header-top-txt text-center'>Cognitive Demand Maintenance</h3></div>
                        </Navbar.Collapse>
                        <div className='elemnt-rightmenu-web'>
                            <ul className='right-top-nv'>
                                <li className='menu-rht-item'>
                                    <button onClick = {() => navigate('/demand-manage')} type='button' className='btn btn-iconmt-lnk p-0'><div className='position-relative icon-notifyweb'><img src={notificationIcon} alt='Notification' /><span className='bage-icon'>1</span></div></button>
                                </li>
                                {/* <li className='menu-rht-item'>
                                    <button type='button' className='btn btn-iconmt-lnk p-0'><img src={chatIcon} alt='Chat Icon' /></button>
                                </li> */}
                            </ul>
                        </div>
                    </Container>
                </Navbar>
            </div>
            {/*---Chat Box area */}

            {
                !showChat ?
                    <div className='chatfooter-icon'>
                        <button onClick={() => setShowChat(true)} type='button' className='btn chaticon-mt p-0'><img src={chatIcon} alt='Chat Icon' /></button>
                    </div>

                    : null
            }
            <div className={`chat-message-body ${!showChat ? 'd-none' : ''}  ${showFullChat? 'expand-chat-body' : ''}`} style={{zIndex: 999}}>
                <div className="chat-header">
                    <div className="chat-leftside-wap">
                        {/* <div className="avtar-img"><span className="avt-img-pic"><img src={chatAvtarImg} /></span></div> */}
                        <h3 className="title-name-chat">Ask Cognitive AI!</h3>
                    </div>
                    <div className="btn-menuright">
                        {
                            !showFullChat ? <button
                                type="button"
                                className="btn btn-expand me-3"

                            >
                                <span onClick={() => setShowFullChat(false) } aria-hidden="true"><i class="fas fa-expand-alt"></i></span>

                            </button> :
                                <button
                                    type="button"
                                    aria-label="Close"
                                    className="me-3 btn-chatweb"

                                >
                                    <span onClick={() => setShowFullChat(true) } aria-hidden="true" className="text-white"><i class="fal fa-minus"></i></span>
                                </button>
                        }


                        <button
                            type="button"
                            className="close btn-chatweb"
                            aria-label="Close"

                            onClick={() => setShowChat(false)}

                        >
                            <span aria-hidden="true" className="text-white"><i class="fal fa-times"></i></span>
                        </button>

                    </div>
                </div>
                <div className="chat-content-wrapper">
                    <div class="chat-wigit--list">
                        <div className="chatmsg--web chating-msg--in">
                            <div className="chatmsg--txtarea"><span className="yt-txtcontent">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <div className='chat-time-txt'>4:11 pm</div></span></div>
                        </div>
                        <div className="chatmsg--web chating-msg--out">
                            <div className="chatmsg--txtarea"><span className="yt-txtcontent">Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum <div className='chat-time-txt'>4:11 pm</div></span></div>
                        </div>
                    </div>
                </div>
                <div className="chat-footer-wigit">
                    <div className="input-group chat-bottom-areas bg-white">
                        <input type="text" className="form-control chat-control pe-2" placeholder="Type the message..." />
                        <button type="button" className="btn btn-send-chat"><i class="fab fa-telegram-plane"></i></button>
                    </div>
                </div>
            </div>



        </>

    );

}

export default Header;