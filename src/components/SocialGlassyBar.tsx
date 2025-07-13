import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GITHUB_URL = "https://github.com/SarahE-Dev";
const LINKEDIN_URL = "https://linkedin.com/in/saraheatherlydev";

const SocialGlassyBar: React.FC = () => {
  return (
    <div
      className="
        fixed bottom-6 right-6 z-50 flex gap-4 p-[3px]
        rounded-2xl
        bg-gradient-to-br from-cyan-400 via-purple-600 to-fuchsia-500
        shadow-2xl
      "
      style={{
        // Subtle outer glow
        boxShadow: "0 4px 40px 0 rgba(109, 40, 217, 0.35), 0 0 0 4px #0ff2",
      }}
    >
      <div className="rounded-2xl bg-[#191629]/90 backdrop-blur-md flex p-3 gap-3">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group"
        >
          <FaGithub
            className="
              w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8
              text-transparent bg-clip-text
              bg-gradient-to-br from-cyan-400 via-purple-400 to-fuchsia-400
              group-hover:from-white group-hover:to-purple-300
              transition-all duration-200
              drop-shadow-[0_0_16px_#a21caf99]
            "
          />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group"
        >
          <FaLinkedin
            className="
              w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8
              text-transparent bg-clip-text
              bg-gradient-to-br from-cyan-400 via-purple-400 to-fuchsia-400
              group-hover:from-white group-hover:to-purple-300
              transition-all duration-200
              drop-shadow-[0_0_16px_#a21caf99]
            "
          />
        </a>
      </div>
    </div>
  );
};

export default SocialGlassyBar;
