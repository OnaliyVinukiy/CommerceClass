import React from "react";
import { Carousel } from 'flowbite-react';
import Header from "../components/Header";
import { useEffect, useState } from 'react';
// Assuming the Header component is in a file named Header.js inside a directory named components


export default function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const getHeightStyle = () => {
        if (windowWidth < 640) {
            // Set the height for mobile view
            return { height: '15rem' };
        } else {
            // Set the height for larger screens
            return { height: '35rem' };
        }
    };


    return (
        <div className="relative">
            <div className="relative z-0 mt-14" style={getHeightStyle()}>{/* Set a lower z-index for the carousel */}
                <Carousel slideInterval={5000} theme={{
                    "item": {
                        "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                        "wrapper": {
                            "off": "w-full flex-shrink-0 transform cursor-default snap-center",
                            "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
                        }
                    },
                    "scrollContainer": {
                        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
                        "snap": "snap-x",
                    }
                }}>
                    <img src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/class3.jpeg" alt="..." style={{ width: '100%', height: '100%' }} />
                    <img src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/class2.jpeg" alt="..." style={{ width: '100%', height: '100%' }} />
                    <img src="https://raw.githubusercontent.com/OnaliyVinukiy/CommerceClass/main/commerceclass/src/pages/class1.jpeg" alt="..." style={{ width: '100%', height: '100%' }} />
                </Carousel>

            </div>
            
        </div>
                    
    );
}