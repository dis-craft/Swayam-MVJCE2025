import FadeInBlock from "@/components/FadeInBlock";
import { Video } from "@/components/Video";

const VideoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-10 p-4">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center m-0">Swayam 2025</p>
      <Video className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]" />
    </div>
  );
};

export default VideoSection;
