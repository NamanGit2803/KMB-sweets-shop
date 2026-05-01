"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader({ children }) {
    const [loading, setLoading] = useState(true);
    const [hide, setHide] = useState(false);

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.muted = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");

        const tryPlay = () => {
            video.play().catch(() => { });
        };

        // Try immediately
        tryPlay();

        // Try again after slight delay (important for iOS)
        const t = setTimeout(tryPlay, 200);

        return () => clearTimeout(t);
    }, []);

    const handleEnd = () => {
        // Start smooth exit animation
        setHide(true);

        // Wait for animation to finish, then remove loader
        setTimeout(() => {
            setLoading(false);
        }, 600);
    };

    if (loading) {
        return (
            <div
                className={`fixed inset-0 flex items-center justify-center bg-white z-50 
        transition-all duration-700 
        ${hide ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100 blur-0"}`}
            >
                <video
                    ref={videoRef}
                    muted
                    poster="/image/logo2.png"
                    playsInline
                    autoPlay
                    preload="auto"
                    disablePictureInPicture
                    controls={false}
                    className="w-64 md:w-80"
                    onEnded={handleEnd}
                >
                    <source src="/logo-intro.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }

    return children;
}