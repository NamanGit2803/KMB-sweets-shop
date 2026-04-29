"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // duration of your animation

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500">
                <video autoPlay
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    controls={false}
                    className="w-64 md:w-80"
                    onEnded={() => setLoading(false)}>
                    <source src="/logo-intro.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }

    return children;
}