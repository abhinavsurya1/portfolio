import { useState, useEffect } from "react";
import { projects } from "@/Utills/projectsData";
import Image from "next/image";
import HeadingTextContainer from "@/atoms/HeadingTextContainer";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const cardClass =
  "bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer w-full max-w-sm mx-auto h-[240px] flex flex-col";

interface ProjectCardProps {
  project: any;
}

export default function PolygonProjects() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    const swiperInstance = new Swiper(".projects-swiper", {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    setSwiper(swiperInstance);

    return () => {
      swiperInstance.destroy();
    };
  }, []);

  return (
    <div className="h-full w-full relative">
      <HeadingTextContainer id="projects-title" index={2} text="Projects" />
      
      <div className="h-[100dvh] w-full flex justify-center items-center pt-32 px-8">
        <div className="w-full max-w-6xl">
          <div className="swiper projects-swiper">
            <div className="swiper-wrapper">
              {projects.map((project, idx) => (
                <div key={idx} className="swiper-slide">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <div className="swiper-button-next text-cyan-500"></div>
            <div className="swiper-button-prev text-cyan-500"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={cardClass}>
      <div className="flex items-center gap-3 mb-4">
        <Image src={project.image} alt={project.title} width={40} height={40} className="rounded-lg" />
        <h3 className="text-white font-bold text-lg">{project.title}</h3>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech: string, i: number) => (
          <span key={i} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-600/30">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs font-medium">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex gap-2 mt-auto">
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-400 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
        >
          View Project
        </a>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
} 