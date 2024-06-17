
import React, { useState } from 'react';
import "../../assets/css/style.scss";
import "./Header.scss";
import { Navbar, Container } from 'react-bootstrap';
import Logo from "../../assets/images/logo.png";
import avtarImg from "../../assets/images/avtar-img.png";
import notificationIcon from "../../assets/images/notification-icon.svg";
import chatIcon from "../../assets/images/chat-msg-icon.svg";
import chatAvtarImg from "../../assets/images/chat-avtar-img.png"
import robotImg from "../../assets/images/chatboat.png"


const Header = () => {
    const [showChat, setShowChat] = useState(false);
    const [showFullChat, setShowFullChat] = useState(false);

    const [chatMessages, setChatMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [preChat, setPreChat] = useState([
        {
            query: 'Hi',
            response: 'Hello, how may I help you?',
        },
        {
            query: 'Hello',
            response: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
        },
    ]);


    const handleSendMessage = () => {
        if (currentMessage.trim() !== '') {
            const newMessage = {
                type: 'query',
                text: currentMessage
            };
            setChatMessages([...chatMessages, newMessage]);
            setCurrentMessage('');
            setIsLoading(true);

            const foundResponse = preChat.find(item => item.query.toLowerCase() === newMessage.text.toLowerCase());

            if (foundResponse) {
                const responseMessage = {
                    type: 'response',
                    text: foundResponse.response
                };
                setTimeout(() => {
                    setChatMessages(prevMessages => [...prevMessages, responseMessage]);
                    setIsLoading(false);
                }, 1000);
            } else {
                const responseMessage = {
                    type: 'response',
                    text: 'Sorry, I do not understand that question.'
                };
                setTimeout(() => {
                    setChatMessages(prevMessages => [...prevMessages, responseMessage]);
                    setIsLoading(false);
                }, 1000);
            }
        }
    };

    const BubbleLoader = () => (
        <div className="bubble-loader">
            <span></span>
            <span></span>
            <span></span>
        </div>
    );

    return (
        <>
            <div className="header">
                <Navbar expand="lg" className="bg-body-tertiary navbar-header">
                    <Container fluid>
                        <div className='left-mtcontent'>
                            <Navbar.Brand href="#home"><img src={Logo} alt='logo' /></Navbar.Brand>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='wigt-container-heading'><h3 className='header-top-txt text-center'>Cognitive Maintenance</h3></div>
                        </Navbar.Collapse>
                        <div className='elemnt-rightmenu-web'>
                            <ul className='right-top-nv'>
                                <li className='menu-rht-item'>
                                    <button type='button' className='btn btn-iconmt-lnk p-0 dropdown-toggle'><div className='position-relative icon-notifyweb txt-msg-mt d-inline-block'>Message Center <span className='bage-icon msg-count-icon'>3</span></div></button>
                                </li>
                                <li className='menu-rht-item'>
                                    <div className='usertop-wgt d-flex align-items-center'>
                                        <div className='avtar-profile-img'>
                                            <img src={avtarImg} alt='image' />
                                        </div>
                                        {/* <div className='flex-avtar-name'>
                                            <span className='name-avt-txt'>John Smith</span>
                                        </div> */}
                                    </div>
                                </li>
                                {/* <li className='menu-rht-item'>
                                    <button type='button' className='btn btn-iconmt-lnk p-0'><i className="fas fa-cog" style={{ color: "#DDDDDD" }}></i></button>
                                </li>
                                <li className='menu-rht-item'>
                                    <button type='button' className='btn btn-iconmt-lnk p-0'><div className='position-relative icon-notifyweb'><img src={notificationIcon} alt='Notification' /><span className='bage-icon'>1</span></div></button>
                                </li> */}
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
                    <div className="chat-wigit--list">
                        {chatMessages.map((msg, index) => (
                            <div key={index} className={`chatmsg--web ${msg.type === 'query' ? 'chating-msg--out' : 'chating-msg--in'}`}>
                                <div className="chatmsg--txtarea d-flex align-items-center">
                                    {msg.type === 'response' && <img src={robotImg} alt="Chatbot Icon"  style={{width:'20px'}}className="chat-icon me-2" />}
                                    <span className="yt-txtcontent">{msg.text}</span>
                                    {msg.type === 'query' && <img src={chatAvtarImg} alt="Person Icon" style={{width:'20px'}} className="chat-icon ms-2" />}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="chatmsg--web chating-msg--in">
                                <div className="chatmsg--txtarea d-flex align-items-center">
                                    <img src={robotImg} alt="Chatbot Icon" className="chat-icon me-2" style={{width:'20px'}} />
                                    <span className="yt-txtcontent">
                                        <BubbleLoader />
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="chat-footer-wigit">
                    <div className="input-group chat-bottom-areas bg-white">
                        <input
                            type="text"
                            className="form-control chat-control pe-2"
                            placeholder="Type the message..."
                            value={currentMessage}
                            onChange={(e) => setCurrentMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button type="button" className="btn btn-send-chat" onClick={handleSendMessage}>
                            <i className="fab fa-telegram-plane"></i>
                        </button>
                    </div>
                </div>
            </div>



        </>

    );

}

export default Header;