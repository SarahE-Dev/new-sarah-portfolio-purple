import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GITHUB_URL = "https://github.com/SarahE-Dev";
const LINKEDIN_URL = "https://linkedin.com/in/saraheatherlydev";

const SocialGlassyBar: React.FC = () => {
  return (
    <div
      className="
        fixed bottom-6 left-4
        sm:bottom-4 sm:left-4
        md:bottom-6 md:left-6
        z-50 flex gap-2
        sm:gap-3
        md:gap-4
        p-[2px]
        sm:p-[3px]
        rounded-xl
        sm:rounded-2xl
        bg-gradient-to-br from-cyan-400 via-purple-600 to-fuchsia-500
        shadow-lg
        sm:shadow-xl
        md:shadow-2xl
      "
      style={{
        boxShadow: "0 2px 20px 0 rgba(109, 40, 217, 0.25), 0 0 0 2px #0ff2",
      }}
    >
      <div className="
        rounded-xl
        sm:rounded-2xl
        bg-[#191629]/90 
        backdrop-blur-md 
        flex 
        p-2
        sm:p-3
        gap-2
        sm:gap-3
      ">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            group 
            flex 
            items-center 
            justify-center
            min-w-[40px] 
            min-h-[40px]
            sm:min-w-[44px] 
            sm:min-h-[44px]
            md:min-w-[48px] 
            md:min-h-[48px]
            rounded-lg
            sm:rounded-xl
            hover:bg-white/10
            active:scale-95
            transition-all 
            duration-200
          "
        >
          <FaGithub
            className="
              w-5 h-5
              sm:w-6 sm:h-6
              md:w-7 md:h-7
              text-cyan-300 
              group-hover:text-purple-400
              group-active:text-purple-300
              transition-all 
              duration-200
              drop-shadow-[0_0_8px_#a21caf66]
              sm:drop-shadow-[0_0_12px_#a21caf99]
            "
          />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            group 
            flex 
            items-center 
            justify-center
            min-w-[40px] 
            min-h-[40px]
            sm:min-w-[44px] 
            sm:min-h-[44px]
            md:min-w-[48px] 
            md:min-h-[48px]
            rounded-lg
            sm:rounded-xl
            hover:bg-white/10
            active:scale-95
            transition-all 
            duration-200
          "
        >
          <FaLinkedin
            className="
              w-5 h-5
              sm:w-6 sm:h-6
              md:w-7 md:h-7
              text-cyan-300 
              group-hover:text-purple-400
              group-active:text-purple-300
              transition-all 
              duration-200
              drop-shadow-[0_0_8px_#a21caf66]
              sm:drop-shadow-[0_0_12px_#a21caf99]
            "
          />
        </a>
      </div>
    </div>
  );
};

export default SocialGlassyBar;
