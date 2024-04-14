import React, { useRef, useEffect, useState } from "react";
import Avatar from './Avatar';
import SupportWindow from "./SupportWindow";

const SupportEngine: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && 'contains' in ref.current && !ref.current.contains(event.target as Node)) {
                setVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref}>
            <SupportWindow 
                visible={visible}
            />
            <Avatar
                onClick={() => setVisible(true)}
                style={{ position: 'fixed', bottom: '24px', right: '24px' }}
            />
        </div>
    );
}

export default SupportEngine;
