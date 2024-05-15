import { useCallback, useEffect, useState } from "react";
const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = ['https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjA0a3xlbnwwfDB8MHx8fDA%3D', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhcnklMjBwcm9kdWN0fGVufDB8fDB8fHww', 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXVhcnklMjBwcm9kdWN0fGVufDB8MHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHF1YXJ5JTIwcHJvZHVjdHxlbnwwfDB8MHx8fDA%3D', 'https://images.unsplash.com/photo-1542598953-41310c43f54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHF1YXJ5JTIwcHJvZHVjdHxlbnwwfDB8MHx8fDA%3D'];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
            <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
            </button>
            <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                {carouselImages.map((_, inx) => (
                    <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full  duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
                ))}
            </div>
            <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                {carouselImages.map((slide, inx) => (
                    <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
