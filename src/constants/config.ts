type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sarah Eatherly",
    fullName: "Sarah Eatherly",
    email: "seatherly.prsvr@gmail.com",
  },
  hero: {
    name: "Sarah",
    p: ["I turn ideas into reality", "and make magic with code."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: ` 
          I’m a full stack developer who loves bringing ideas to life through code. I’m all about finding that sweet spot where logic meets creativity—whether it’s building sleek front-end experiences or crafting solid back-end systems. My journey into tech has been anything but traditional, and I wouldn’t have it any other way. I’m driven by curiosity, a love for problem-solving, and the magic that happens when great minds collaborate. When I’m not coding, you’ll probably find me lost in a good playlist or watching one of my favorite TV shows with my son.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Here’s a look at some of my work!
          Each project is a little piece of the magic that happens when curiosity meets code. You’ll find a mix of real-world applications, with links to code repositories and live demos. These projects reflect my ability to solve complex problems, adapt to different technologies, and bring thoughtful, user-focused ideas to life. For me, it’s all about creating experiences that connect, inspire, and maybe even add a little spark to someone’s day.`,
    },
  },
};
