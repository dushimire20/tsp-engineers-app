import { Service } from "./service";

const sampleData: Service[] = [
  {
    id: "1",
    name: "Web Development",
    description: "Create amazing web applications.",
    image: "https://via.placeholder.com/150",
    subServices: [
      {
        id: 1,
        name: "Frontend Development",
        description: "Build interactive user interfaces.",
        image: "https://via.placeholder.com/150",
        products: [
          {
            id: 1,
            name: "React.js Course",
            description: "Learn React.js from scratch.",
            price: 199,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            name: "Vue.js Course",
            description: "Master Vue.js for modern UIs.",
            price: 149,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            name: "Angular Course",
            description: "Comprehensive Angular training.",
            price: 249,
            image: "https://via.placeholder.com/150",
          },
        ],
      },
      {
        id: 2,
        name: "Backend Development",
        description: "Create robust server-side applications.",
        image: "https://via.placeholder.com/150",
        products: [
          {
            id: 4,
            name: "Node.js Course",
            description: "Learn backend development with Node.js.",
            price: 199,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 5,
            name: "Django Course",
            description: "Master Django for rapid backend development.",
            price: 299,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 6,
            name: "Flask Course",
            description: "Learn Flask for lightweight APIs.",
            price: 99,
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Graphic Design",
    description: "Unleash creativity through design.",
    image: "https://via.placeholder.com/150",
    subServices: [
      {
        id: 3,
        name: "Logo Design",
        description: "Craft impactful logos.",
        image: "https://via.placeholder.com/150",
        products: [
          {
            id: 7,
            name: "Basic Logo Pack",
            description: "Simple logo designs.",
            price: 50,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 8,
            name: "Premium Logo Pack",
            description: "High-quality logo designs.",
            price: 150,
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
];

export default sampleData;
