import Image from "next/image";

const VideoSection = () => {
  return (
    <div>
      <p className="text-6xl text-center mb-5">Swayam 2025</p>
      <Image
        className="mx-auto "
        src="/assets/VideoFrame.png"
        alt="Video Frame"
        width={1000}
        height={400}
      />
    </div>
  );
};

export default VideoSection;
