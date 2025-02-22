import React from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

interface ExperienceCardProps extends TExperience {
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  companyName,
  icon,
  iconBg,
  date,
  points,
  index,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        visible={isInView}
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
          opacity: isInView ? 1 : 0,
          transform: `translateX(${isInView ? 0 : (isEven ? -100 : 100)}px)`,
          transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          marginBottom: '20px', // Add margin between elements
        }}
        contentArrowStyle={{
          borderRight: "7px solid #232631",
        }}
        date={date}
        dateClassName={`${isEven ? 'text-left' : 'text-right'} md:!text-white/75`}
        iconStyle={{
          background: iconBg,
          opacity: isInView ? 1 : 0,
          transform: `scale(${isInView ? 1 : 0.5})`,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)',
        }}
        icon={
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={icon}
              alt={companyName}
              className="h-[60%] w-[60%] object-contain"
            />
          </div>
        }
        position={isEven ? "left" : "right"}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-[24px] font-bold text-white">{title}</h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {companyName}
            </p>
          </div>
          <ul className="ml-5 mt-5 list-disc space-y-2">
            {points.map((point, pointIndex) => (
              <motion.li
                key={`experience-point-${pointIndex}`}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + pointIndex * 0.1 }}
                className="text-white-100 pl-1 text-[14px] tracking-wider"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />
      <div className="mt-20 flex flex-col" ref={ref}>
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: '#915EFF',
            scaleX: scaleProgress,
            transformOrigin: '0%',
          }}
        />
        <VerticalTimeline animate={true} lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              {...experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div className="mt-20 flex justify-center">
        <motion.a
          href="https://docs.google.com/document/d/1YrQ7RJELXeyKyP1DXocmnWFnikgDp3Pc/edit?usp=sharing&ouid=118371788299299392953&rtpof=true&sd=true"
          className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 hover:from-purple-700 hover:via-indigo-600 hover:to-blue-600 transition-all duration-300 text-white py-3 px-8 rounded-lg font-medium shadow-lg"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </motion.a>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
