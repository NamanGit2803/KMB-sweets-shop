export default function ComingSoon() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff7e6] text-center px-6">

            {/* Logo */}
            <img
                src="/image/logo2.png"
                alt="Kyal Misthan Bhandar"
                className="w-32 md:w-40 mb-6"
            />

            {/* Brand Name */}
            <h1 className="text-2xl md:text-4xl font-bold text-[#B91C2C]">
                Kyal Misthan Bhandar
            </h1>

            {/* Tagline */}
            <p className="mt-2 text-gray-600 max-w-md">
                Authentic Rajasthani sweets made with pure desi ghee & premium ingredients.
            </p>

            {/* Coming Soon */}
            <h2 className="mt-6 text-xl md:text-2xl font-semibold text-[#B91C2C]">
                🚧 Coming Soon
            </h2>

            {/* Optional WhatsApp CTA */}
            <a
                href="https://wa.me/916375922906"
                target="_blank"
                className="mt-6 px-6 py-3 rounded bg-[#B91C2C] text-[#F5C842] hover:bg-[#D42030]"
            >
                Notify Me on WhatsApp
            </a>

        </div>
    );
}