import React, { useState } from 'react';
import { styles } from './styles';

interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
    // Define other props here if needed
}

const Avatar: React.FC<AvatarProps> = (props) => {
    const [hovered, setHovered] = useState<boolean>(false);
    
    return (
        <div style={props.style}>
            <div
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    opacity: hovered ? '1' : '0'
                }}
            >Hey It's Adam!!!</div>
            
            <div 
                className='transition-3'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={props.onClick}
                style={{
                    ...styles.chatWithMeButton,
                    border: hovered ? '1px' : '4px solid #7a39e0'
                }}
            />
        </div>
    );
}

export default Avatar;















// import React, { useState } from 'react';
// import { styles } from './styles.js';

// const Avatar = props => {
//     const [hovered, setHovered] = useState(false)
//     return(
//         <div style={{position: 'fixed', bottom: '24px', right: '24px'}}>
//             <div>Hey It's Adam!!!</div>
            
//             <div 
//                  className='transition-3'
//                  onMouseEnter={() => setHovered(true)}
//                  onMouseLeave={() => setHovered(false)}
//                  style={{
//                     ...styles.chatWithMeButton,
//                     ...{ border: hovered ? '1' : '4px solid #7a39e0'}
                    
//                     }}
//             />
            
//         </div>
//     )
// }

// export default Avatar;








// import React, { useState } from 'react';
// import { styles } from './styles.js';


// const Avatar = props => {
//     return(
//         <div style={{position: 'fixed', bottom: '24px', right: '24px'}}>
//             <div>Hey It's Adam!!!</div>
//             <div>
//                 style={{
//                     ...styles.chatWithMeButton
//                 }}
//             </div>
//         </div>
//     )
// }

// export default Avatar;