import React, { useEffect, useState } from "react";
// import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine';

interface ChatEngineProps {
    visible: boolean;
    user: { email: string };
    chat: { id: string };
}

const ChatEngine: React.FC<ChatEngineProps> = (props) => {
    const [showChat, setShowChat] = useState<boolean>(false);

    useEffect(() => {
        if (props.visible) {
            setTimeout(() => {
                setShowChat(true);
            }, 500);
        }
    }, [props.visible]);

    return (
        <div
            className='transition-5'
            style={{
                ...styles.chatEngineWindow,
                height: props.visible ? '100%' : '0px',
                zIndex: props.visible ? '100' : '0',
            }}
        >
            {/* {showChat && (
                <ChatEngineWrapper>
                    <Socket 
                        projectID={process.env.REACT_APP_CE_PROJECT_ID as string}
                        userName={props.user.email}
                        userSecret={props.user.email}
                    />
                    <ChatFeed activeChat={props.chat.id} />
                </ChatEngineWrapper>
            )} */}
        </div>
    );
};

export default ChatEngine;

const styles = {
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
};
