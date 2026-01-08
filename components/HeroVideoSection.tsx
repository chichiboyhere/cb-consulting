// components/HeroVideoSection.jsx

const HeroVideoSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline // Required for autoplay on mobile devices
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://res.cloudinary.com/doidxxag9/video/upload/v1767898433/hero-video_cyfo0r.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-20 text-center text-white bg-blue-950 bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Strategic Insight. Measurable Growth.
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          CrownBridge Consulting partners with ambitious organisations across
          the UK to unlock sustainable performance.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 pt-3 pb-2 rounded-4xl font-semibold">
          <a href="#contact">Book a Consultation</a>
        </button>
      </div>
    </div>
  );
};

export default HeroVideoSection;
