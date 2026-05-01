"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader({ children }) {
    const [loading, setLoading] = useState(true);
    const [hide, setHide] = useState(false);
    const videoRef = useRef(null);
    const fallbackTimerRef = useRef(null);

    const dismissLoader = () => {
        if (hide) return; // prevent double-trigger
        setHide(true);
        setTimeout(() => setLoading(false), 600);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Required for iOS autoplay
        video.muted = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("x5-playsinline", ""); // WeChat/Android WebView

        const tryPlay = () => {
            const promise = video.play();
            if (promise !== undefined) {
                promise.catch(() => {
                    // Autoplay was blocked — skip loader immediately
                    dismissLoader();
                });
            }
        };

        // iOS sometimes needs a tiny delay before play() works
        const t1 = setTimeout(tryPlay, 100);
        const t2 = setTimeout(tryPlay, 500);

        // Hard fallback: if video hasn't ended in 6 seconds, skip it
        // Adjust 6000 to slightly longer than your video duration
        fallbackTimerRef.current = setTimeout(dismissLoader, 6000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(fallbackTimerRef.current);
        };
    }, []);

    const handleEnd = () => {
        clearTimeout(fallbackTimerRef.current);
        dismissLoader();
    };

    if (!loading) return children;

    return (
        <>
            {/* Hide iOS/Safari native play button overlay */}
            <style>{`
                .loader-video::-webkit-media-controls {
                    display: none !important;
                }
                .loader-video::-webkit-media-controls-start-playback-button {
                    display: none !important;
                }
                .loader-video::-webkit-media-controls-panel {
                    display: none !important;
                }
            `}</style>

            <div
                className={`fixed inset-0 flex items-center justify-center bg-white z-50 
                    transition-all duration-700 
                    ${hide ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100 blur-0"}`}
            >
                <video
                    ref={videoRef}
                    className="loader-video w-64 md:w-80"
                    muted
                    playsInline
                    autoPlay
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback        // ← prevents AirPlay button on iOS
                    poster="/image/logo2.png"
                    onEnded={handleEnd}
                    // No controls prop at all — omitting is cleaner than controls={false}
                >
                    <source src="/logo-intro.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    );
}