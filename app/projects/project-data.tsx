export interface Link {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  links: Link[];  // Changed from single url to array of links with text
}

export const projects: Project[] = [
  {
    title: "Voice-Chat with David Goggins",
    date: "02-12-2024",
    description:
      "Used zero-shot voice cloning on Coqui TTS-v2 model to clone David Goggins' voice and integrates with Whisper for STT (speech-to-text) and GPT-4o to generate responses.",
    links: [
      {
        text: "Blog Post",
        url: "/blog/building-a-David-Goggins-chat-bot"
      },
      {
        text: "Hugging Face Space",
        url: "https://huggingface.co/spaces/shriniket73/goggins-chat/tree/main"
      }
    ]
  },
  {
    title: "Sales Question Generator MVP",
    date: "01-10-2024",
    description:
      "Created a quick MVP, that emails you Sales Discovery question about any company from their website. Add your email and company website and it emails you set of question to gets started for your SDRs.",
    links: [
      {
        text: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/shriniket-acharya_in-this-video-i-share-how-simple-it-is-to-activity-7246877589754052608-4NRs"
      }
    ]
  },
  {
    title: "Calorie and Protein Calculator",
    date: "25-10-2024",
    description:
      "Created an app that takes your food photo and provides you total and item wise calories and protein information",
    links: [
      {
        text: "Explainer Video",
        url: "https://www.linkedin.com/posts/shriniket-acharya_in-this-video-i-talk-about-two-things-activity-7255360993629765634-VrJM"
      },
      {
        text: "Project",
        url: "https://calorie-counter-liart.vercel.app/"
      },
      {
        text: "GitHub",
        url: "https://github.com/shriniket73/CalorieCounter"
      }
    ]
  },
  {
    title: "Spend Elon Musk Money",
    date: "28-10-2024",
    description:
      "Imagine if you could spend Elon Musk's money on fancy things. Made a fun project using Next.js where you can hypothetically buy anything from Elon Musk's fortune. Inspired by the legend https://neal.fun/spend/",
    links: [
      {
        text: "Project",
        url: "https://www.shriniket.me/projects/spend-elon-musk-money"
      },
      {
        text: "GitHub",
        url: "https://github.com/shriniket73/spend-elon-musk-money"
      }
    ]
  },
  {
    title: "Partner Probability Calculator",
    date: "12-11-2024",
    description:
      "Built a Partner Matching Probability Calculator in India backed by report from National Health Familuy Survey of India and other sources",
    links: [
    {
      text: "Explainer Video",
      url: "https://www.linkedin.com/posts/shriniket-acharya_in-this-video-i-talk-about-1-how-i-built-activity-7262205905356677120-oxw7?utm_source=share&utm_medium=member_desktop"
    },
      {
        text: "Project",
        url: "https://www.smallpp.in/" 
      },
      {
        text: "GitHub",
        url: "https://github.com/shriniket73/partner-probability"
      }
    ]
  }
];
