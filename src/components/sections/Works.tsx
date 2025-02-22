import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { FaGlobe } from "react-icons/fa";

interface ProjectCardProps extends TProject {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
}) => {
  const handleLinkClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareColor="#aaa6c3"
        scale={1.02}
        transitionSpeed={2500}
        className="h-full"
      >
        <div className="bg-tertiary h-full rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
            />
            <div className="absolute top-3 right-3 flex gap-2">
              {sourceCodeLink && (
                <button 
                  onClick={() => handleLinkClick(sourceCodeLink)}
                  className="bg-black/80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full 
                    transition-all duration-300 hover:bg-black hover:scale-110"
                  aria-label="View Source Code"
                >
                  <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
                </button>
              )}
              {liveDemoLink && (
                <button 
                  onClick={() => handleLinkClick(liveDemoLink)}
                  className="bg-black/80 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full 
                    transition-all duration-300 hover:bg-black hover:scale-110"
                  aria-label="View Live Demo"
                >
                  <FaGlobe className="text-white text-xl" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h3 className="text-2xl font-bold text-white transition-colors hover:text-primary">
              {name}
            </h3>
            
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`rounded-full px-3 py-1 text-xs ${tag.color} bg-black/20 backdrop-blur-sm
                    transition-transform hover:scale-105`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Header useMotion={true} {...config.sections.works} />
      
      <div className="flex w-full">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-lg leading-relaxed"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");