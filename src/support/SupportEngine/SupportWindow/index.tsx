// SupportWindow.tsx

import React, { useState } from 'react';
import { styles } from '../styles';
import EmailForm from './EmailForm';

interface SupportWindowProps {
    visible: boolean;
}

const SupportWindow: React.FC<SupportWindowProps> = (props) => {
    const [user, setUser] = useState<any>(null); // Change `any` to the type of your user object
    const [chat, setChat] = useState<any>(null); // Change `any` to the type of your chat object

    return (
        <div
            className='transition-5'
            style={{
                ...styles.supportWindow,  
                opacity: props.visible ? '1' : '0'               
            }}
        >
            <EmailForm
                visible={props.visible}
                setUser={user => setUser(user)}
                setChat={chat => setChat(chat)}
            />

            {user !== null && chat !== null &&
                <div>Chat Engine</div>
            }
        </div>
    );
}

export default SupportWindow;

