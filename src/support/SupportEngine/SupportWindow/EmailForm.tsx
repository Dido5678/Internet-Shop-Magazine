import React, { useState } from "react";
import axios from "axios";
import { styles } from "../styles";
import { LoadingOutlined } from '@ant-design/icons';
import Avatar from '../Avatar';


interface EmailFormProps {
    visible: boolean;
    setUser: (user: any) => void; 
    setChat: (chat: any) => void; 
}

const EmailForm: React.FC<EmailFormProps> = (props) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    

    function getOrCreateUser(callback: (data: any) => void) {
        axios.put(
            'https://api.chatengine.io/users/',
            { username: email, email: email, secret: email },
            { headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY } }
        )
        .then(r => callback(r.data))
        .catch(e => console.log('Get or create user error', e));
    }

    function getOrCreateChat(callback: (data: any) => void) {
        axios.put(
            'https://api.chatengine.io/chats/',
            { usernames: [email, 'Aida Mkrtchyan'], is_direct_chat: true },
            { headers: {
                "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
                "User-Name": email,
                "User-Secret": email,
            }}
        )
        .then(r => callback(r.data))
        .catch(e => console.log('Get or create chat error', e));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        console.log('Sending Email', email);

        getOrCreateUser(
            user => {
                props.setUser && props.setUser(user);
                getOrCreateChat(chat => {
                    setLoading(false);
                    props.setChat && props.setChat(chat);
                });
            }
        );
    }

    return (
        <div 
            style={{
                ...styles.emailFormWindow,
                ...{ 
                    height: '100%',
                    opacity: props.visible ? '1' : '0',
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>

            <div 
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{ 
                         zIndex: loading ? '10' : '-1',
                         opacity: loading ? '0.33' : '0',
                         position: 'absolute', 
                         height: '100%', 
                         width: '100%',
                         textAlign: 'center',
                         backgroundColor: 'white',
                     }  
                }}
            />
            <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{ 
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)', 
                        left: 'calc(50% - 41px)',  
                    }
                }}
            />

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar 
                    style={{ 
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                    }}
                />

                <div style={styles.topText}>
                    Welcome to my <br /> support 👋
                </div>

                <form 
                    onSubmit={handleSubmit}
                    style={{ position: 'relative', width: '100%', top: '19.75%' }}
                >
                    <input 
                        placeholder='Your Email'
                        onChange={e => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                </form>

                <div style={styles.bottomText}>
                    Enter your email <br /> to get started.
                </div>
            </div>
        </div>
    );
}

export default EmailForm;

















// import React, { useState } from 'react';
// import { styles } from "../styles";
// import { LoadingOutlined } from "@ant-design/icons";

// import Avatar from "../Avatar";
// import { AxiosResponse } from 'axios';
// import axios from 'axios'; 


// const EmailForm: React.FC = (props) => {
//     const [email, setEmail] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);

    

// function getOrCreateUser(callback: (data: any) => void) {
//     axios.put(
//         'https://api.chatengine.io/users/',
//         {
//             "username": email,
//             "secret": email,
//             "email": email,
//         },
//         { headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY } }
//     )
//     .then((r: AxiosResponse<any>) => callback(r.data))
//     .catch(e => console.log('Get or create user error', e))
// }


//     function getOrCreateChat(callback: (data: any) => void) {
//         axios.put(
//             'https://api.chatengine.io/chats/',
//             {
//                 "usernames": ["Aida Mkrtchyan", email],
//                 "is_direct_chat": false
//             },
//             { headers: { "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
//                          "User-Name": email,
//                          "User-Secret": email,
//              } }
//         )
//         .then((r: AxiosResponse<any>) => callback(r.data))
//         .catch(e => console.log('Get or create chat error', e))
//     }


//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
//         event.preventDefault();
//         setLoading(true);
//         console.log('Sending Email', email);

//         getOrCreateUser(
//             user =>{
//                 getOrCreateChat(
//                     chat => console.log('success', chat)
//                 )
//             }
//         )
        
//     }

//     return (
//         <div
//             style={{
//                 ...styles.emailFormWindow,
//                 ...{ 
//                     height: '100%',
//                     opacity: '1',
//                 }
//             }}
//         >
//             <div style={{ height: '0px'}}>
//                 <div style={styles.stripe}/>
//             </div>
//             <div 
//                 className='transition-5'
//                 style={{
//                     ...styles.loadingDiv,
//                     ...{ 
//                         zIndex: loading ? '10' : '-1',
//                         opacity: loading ? '0.33' : '0',
//                         position: 'absolute', 
//                         height: '100%', 
//                         width: '100%',
//                         textAlign: 'center',
//                         backgroundColor: 'white',
//                     }  
//                 }}
//             />
//             <LoadingOutlined 
//                 className='transition-5'
//                 style={{
//                     ...styles.loadingIcon,
//                     ...{ 
//                         zIndex: loading ? '10' : '-1',
//                         opacity: loading ? '1' : '0',
//                         fontSize: '82px',
//                         top: 'calc(50% - 41px)', 
//                         left: 'calc(50% - 41px)',  
//                     }
//                 }}
//             />
//             <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center'}}>
//                 <Avatar 
//                     style={{
//                         position: 'relative',
//                         left: 'calc(50% - 44px)',
//                         top: '10%',
//                     }}
//                 />
//             <div style={styles.topText}>
//                 Welcome to my <br /> support 👋
//             </div>

//             <form 
//                     onSubmit={handleSubmit}
//                     style={{ position: 'relative', width: '100%', top: '19.75%' }}
//                 >
//                     <input 
//                         placeholder='Your Email'
//                         onChange={e => setEmail(e.target.value)}
//                         style={styles.emailInput}
//                     />
//                 </form>
//             <div style={styles.bottomText}>
//                 Enter your email <br /> to get started.
//             </div>
//         </div>
//     </div>
//     );
// }

// export default EmailForm;
