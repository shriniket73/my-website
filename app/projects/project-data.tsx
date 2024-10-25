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
        text: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/shriniket-acharya_in-this-video-i-talk-about-two-things-activity-7255360993629765634-VrJM"
      },
      {
        text: "GitHub",
        url: "https://github.com/shriniket73/CalorieCounter"  // Replace with actual URL
      }
    ]
  },
  {
    title: "Project Three",
    date: "01-06-2069",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    links: [
      {
        text: "Demo",
        url: "https://example.com/"
      }
    ]
  },
];