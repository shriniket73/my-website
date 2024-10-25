export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Sales Question Generator MVP",
    year: 2024,
    description:
      "Created a quick MVP, that emails you Sales Discovery question about any company from their website. Add your email and company website and it emails you set of question to gets started for your SDRs",
    url: "https://www.linkedin.com/posts/shriniket-acharya_in-this-video-i-share-how-simple-it-is-to-activity-7246877589754052608-4NRs?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Calorie and Protein Calculator",
    year: 2024,
    description:
      "Created an app that takes your food photo and provides you total and item wise calories and protein information",
    url: "https://www.linkedin.com/posts/shriniket-acharya_in-this-video-i-talk-about-two-things-activity-7255360993629765634-VrJM?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];
