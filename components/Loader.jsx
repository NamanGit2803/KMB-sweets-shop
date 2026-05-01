"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader({ children }) {
    const [loading, setLoading] = useState(true);

    const videoRef = useRef(null);

    useEffect(() => {

        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }


        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // duration of your animation

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500">
                <video ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    disablePictureInPicture
                    controls={false}
                    className="w-64 md:w-80"
                    onEnded={() => setLoading(false)}
                >
                    <source src="/logo-intro.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }

    return children;
}