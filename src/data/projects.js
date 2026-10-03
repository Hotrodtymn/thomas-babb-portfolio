const projects = [
  {
    id: 5,
    slug: "summarist",
    title: "Summarist",
    date: "2026-09-28",
    featured: true,
    description:
      "A modern book summary platform built with React, Firebase authentication, REST APIs, and audio playback.",
    details:
      "Summarist is a responsive book summary application inspired by modern reading platforms. The project integrates external APIs to dynamically load book content, Firebase authentication for account management, Google sign-in, and an audio player for listening to book descriptions and summaries. The application focuses on reusable React components, responsive design, routing, authentication, and API-driven content.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Firebase",
      "REST API",
    ],
    image: "/assets/summarist.png",
    screenshots: [
      "/assets/summarist-home.png",
      "/assets/summarist-books.png",
      "/assets/summarist-details.png",
    ],
    github: "",
    live: "https://summarist-ebon.vercel.app/",
  },

  {
    id: 6,
    slug: "youtube-clone",
    title: "YouTube Clone",
    date: "2026-09-27",
    featured: true,
    description:
      "A responsive video platform built with React that recreates the core experience of a modern video streaming website.",
    details:
      "The YouTube Clone is a React-based video platform focused on recreating the structure and functionality of a modern video streaming experience. The project uses reusable components, responsive layouts, navigation, video-focused content displays, and a media-oriented user interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "REST API",
    ],
    image: "/assets/youtube-clone.png",
    screenshots: [
      "/assets/youtube-clone-home.png",
      "/assets/youtube-clone-browse.png",
      "/assets/youtube-clone-video.png",
    ],
    github: "",
    live: "https://youtube-clone-mmn7.vercel.app/",
  },

  {
    id: 1,
    slug: "cinevault",
    title: "CineVault",
    date: "2026-09-26",
    featured: true,
    description:
      "A responsive movie discovery application built with React and the OMDb API.",
    details:
      "CineVault is a movie discovery application that allows users to search for movies, explore popular titles, and view detailed movie information. The project focuses on working with APIs, React components, routing, and responsive UI design.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "REST API",
    ],
    image: "/assets/cinevault.png",
    screenshots: [
      "/assets/cinevault-home.png",
      "/assets/cinevault-search.png",
      "/assets/cinevault-details.png",
    ],
    github: "https://github.com/Hotrodtymn/CineVault-React",
    live: "https://cinevault-sage-alpha.vercel.app/",
  },

  {
    id: 3,
    slug: "rockstreamer",
    title: "Rockstreamer",
    date: "2026-05-15",
    featured: true,
    description:
      "A modern video streaming platform built with React and designed around a unique media-focused user experience.",
    details:
      "Rockstreamer is a video streaming platform concept focused on creating a modern, visually engaging experience for discovering and watching content. The project explores component-based design and responsive layouts in React.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    image: "/assets/rockstreamer.png",
    screenshots: [
      "/assets/rockstreamer-home.png",
      "/assets/rockstreamer-browse.png",
    ],
    github: "",
    live: "",
  },

  {
    id: 2,
    slug: "library",
    title: "Library",
    date: "2026-03-15",
    featured: false,
    description:
      "A responsive online library application built with React, React Router, and reusable components.",
    details:
      "The Library project is a React application designed to display and organize books. It includes dynamic routes, reusable components, sorting functionality, book details, and a shopping-cart style system for managing selected books.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "React Router",
    ],
    image: "/assets/library.png",
    screenshots: [
      "/assets/library-home.png",
      "/assets/library-books.png",
      "/assets/library-details.png",
      "/assets/library-cart.png",
    ],
    github: "",
    live: "",
  },
];

export default projects;