import Team1 from "@/assets/Team1.png";
import Desktop from "@/assets/Desktop.png";
import Solar from "@/assets/Solar.png"
import Machinery from "@/assets/general-machinery.png"
import Controllers from "@/assets/controllers.png"
import Swimming from "@/assets/swimming-pools.png";
import Water from "@/assets/water-treatment.png";
import Chemical from "@/assets/chemicals.png"
import SolarPanels from "/src/assets/Solars/Solar-Panel.jpg"
import SolarPumps from "/src/assets/Solars/solar-pumps--controls.jpg"

export const teamMembers = [
  {
    name: "Derin",
    role: "CEO",
    image: Team1,
    feedback:
      "Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!",
  },
  {
    name: "Gigi",
    role: "Business Manager",
    image: Team1,
    feedback:
      "Mundi Center has been a game-changer for my business. Since moving my shop here, I've seen a significant increase in foot traffic and sales. The location is great, the facilities are top-notch, and the management team is always responsive and supportive. I couldn't be happier with my decision to join this community!",
  },


  ];

  export const products = [
    {
      name: "Solar Solutions",
      description:
        "Ideal for showcasing renewable energy products, suitable for eco-friendly businesses.",
      image: Solar,
      path:"service/solar"
    },
    {
      name: "Water Pumps",
      description:
        "Dayliff,, Pedrollo, Grundfos, Davey, DAB, Rovatti, Pompe, Flowserve",
      image: Desktop,
    },
    
    {
      name: "General Machinery",
      description:
        "DG-P, DG Diesel Generators,  DG Multi-4, DGW Welding Generators, DGY Generators,  DGC Generators,DGP Generators,Generators Accessories, DLV/DLA Engines,  DLY Diesel Engines,  Kohler KD Diesel Engines ...",
      image: Machinery,
    },
    {
      name: "Controllers and Digital Solutions",
      description:
        "A comprehensive product showcase for digital tools and heavy machinery.",
      image: Controllers,
    },
    {
      name: "Swimming Pools",
      description:
        "Filters Pumps Chemicals & Chlorinators Accessories Spas & Saunas Fountain Nozzles",
      image: Swimming,
    },
    {
      name: "Water Treatment",
      description:
        "Domestic Treatment Reverse Osmosis & UV Water Treatment Plants Air Blowers Filters & Softeners Chemical Dosage Water Treatment Media",
      image: Water,
    },
    {
      name: "Chemicals",
      description:
        "A comprehensive product showcase for Chemical tools.",
      image: Chemical,
    },
  ]

  // data/menuData.js

export const menuData = [
  { name: "Home", path: "/" },
  {
    name: "Product & Solutions",
    path: "/solutions",
    dropdown: [
      { name: "Solar Solutions", path: "/service/solar" },
      { name: "Swimming Pools", path: "/service/swimming-pool" },
      { name: "Water Treatments", path: "/service/water-treatments" },
      { name: "General Machinery", path: "/service/machinery" },
      { name: "Controllers & Digital Solutions", path: "/service/controllers" },
      { name: "Chemicals", path: "/service/chemicals" },
      { name: "Irrigation & Water Supply Accessories", path: "/service/irrigation" },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
    dropdown: [
      { name: "Ongoing", path: "/project/ongoing" },
      { name: "Completed", path: "/project/completed" },
    ],
  },
 
  { name: "About Us", path: "/about" },
  {
    name: "Download",
    path: "/download",
    dropdown: [
      { name: "Catalogue", path: "/catalogue" },
      { name: "Document", path: "/document" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];


export const SolarServices = [
  {
    image: SolarPanels,
    name: "Solar panels & Support Structures",
    discription: "High-efficiency solar panels and durable support structures for optimal solar energy harvesting.",
    oldPrice: "Price",
    path:"/solar-panels",
  },

  {
    image: SolarPumps,
    name: "Solar pumps and controls",
    discription: "Solar-powered pumps and controllers for efficient and sustainable water management.",
    oldPrice: "Price",
     path:"/solar-pumps--controls"
  },
  {
    image: "/src/assets/Solars/water-heaters.jpg",
    name: "Water Heaters",
    discription: "High-performance solar water heaters for reliable and cost-effective hot water supply.",
    oldPrice: "Price",
    path:"/water-heaters"   
    
  },

  {
    image: "/src/assets/Solars/digital-power-solutions.jpg",
    name: "Digital power solutions",
    discription: "Innovative digital power solutions for efficient and reliable energy management.",
    oldPrice: "Price",
    path:"/digital-power-solutions"   
    
  },

  {
    image: "/src/assets/Solars/energy-storage-systems.jpg",
    name: "Energy storage systems",
    discription: "Advanced energy storage systems for reliable and sustainable power supply.",
    oldPrice: "Price",
    path:"/energy-storage-systems"   
    
  },

  {
    image: "/src/assets/Solars/inverters.jpg",
    name: "Inverters",
    discription: "High-efficiency inverters for seamless conversion of DC power to AC power.",
    oldPrice: "Price",
    path:"/inverters"   
    
  },

  {
    image: "/src/assets/Solars/accessories_2.jpg",
    name: "accessories",
    discription: "Essential accessories and components for seamless solar energy systems.",
    oldPrice: "Price",
    path:"/solar/Accessories"   
    
  },

  
  
]
