
import Lottie from "lottie-react";
import animationData from "../../../public/animation.json";
import { useMobile } from "@/context/MobileContext";

export default function LoadingWrap() {
  const { isMobile } = useMobile();
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black flex flex-col justify-center items-center z-50">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ height: isMobile ? 300 : 400, width: isMobile ? 300 : 600 }}
      />
    </div>
  );
}





