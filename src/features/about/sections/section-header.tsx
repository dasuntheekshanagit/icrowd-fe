export function SectionHeader() {
    return(
        <section
            className="relative mb-16 bg-cover bg-center rounded-3xl overflow-hidden"
            style={{backgroundImage: "url(/about-hero-banner.jpg)",}}>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 text-center px-6 py-24">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    About iCrowd
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Your premier destination for cutting-edge mobile accessories and
                    gadgets. We bring the world's best technology right to your doorstep.
                </p>
            </div>
        </section>
    );
}