import React, { useState } from 'react';
import { styles } from './styles';

interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
    onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    const [hovered, setHovered] = useState<boolean>(false);
    
    return (
        <div style={props.style}>
            <div
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >
                Hey It's Adam 🤙
            </div>
            
            <div 
                className='transition-3'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' }
                }}
            >
            </div>
        </div>
    );
}

export default Avatar;















// import React, { useState } from 'react';
// import { styles } from './styles';

// interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
//     onClick?: () => void;
// }

// const Avatar: React.FC<AvatarProps> = (props) => {
//     const [hovered, setHovered] = useState<boolean>(false);
    
//     return (
//         <div style={props.style}>
//             <div
//                 className='transition-3'
//                 style={{
//                     ...styles.avatarHello,
//                     ...{ opacity: hovered ? '1' : '0' }
//                 }}
//             >
//                 Hey It's Adam 🤙</div>
            
//             <div 
//                 className='transition-3'
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//                 onClick={() => props.onClick && props.onClick()}
//                 style={{
//                     ...styles.chatWithMeButton,
//                     ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' }
//                 }}
//             />
//         </div>
//     );
// }

// export default Avatar;















