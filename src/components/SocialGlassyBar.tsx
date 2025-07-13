import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GITHUB_URL = "https://github.com/SarahE-Dev";
const LINKEDIN_URL = "https://linkedin.com/in/saraheatherlydev";

const SocialGlassyBar: React.FC = () => {
  return (
    <div
      className="
        fixed top-5 right-5 z-50 flex gap-4
        p-3 rounded-2xl shadow-xl
        bg-gradient-to-br from-purple-800/80 via-purple-600/60 to-indigo-700/60
        backdrop-blur-lg border border-purple-400/30
        hover:scale-105 transition-all
      "
      style={{
        boxShadow: "0 6px 24px 0 rgba(125, 74, 212, 0.25)",
      }}
    >
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="group"
      >
        <FaGithub
          size={30}
          className="
            text-purple-300 group-hover:text-white
            drop-shadow-glow transition-colors duration-200
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
          size={30}
          className="
            text-purple-300 group-hover:text-white
            drop-shadow-glow transition-colors duration-200
          "
        />
      </a>
    </div>
  );
};

export default SocialGlassyBar;
