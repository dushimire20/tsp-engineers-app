import Team1 from "@/assets/Team1.png";
import OurProject from "@/assets/OurProject.png";
import Desktop from "@/assets/Desktop.png";
import Solar from "@/assets/Solar.png"
import Machinery from "@/assets/general-machinery.png"
import Controllers from "@/assets/controllers.png"
import Swimming from "@/assets/swimming-pools.png";
import Water from "@/assets/water-treatment.png";
import Chemical from "@/assets/chemicals.png"
import WaterPump from "@/assets/water_Pump.png";
import SmartIrrigation from "@/assets/Smart_Irrigation.jpg"

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

  export const projects = [
    {
      id: 1,
      title: "Water Pump",
      description:
        "This template contains product showcase of the business, suitable for business with large number of products or services.",
      image: WaterPump,
    },
    {
      id: 2,
      title: "Solar Panel",
      description:
        "Solar Panels & Support Structures Solar Water Heaters Inverters / Backup Systems Solar Pumps and Controls Accessories Digital Power Solutions Energy Storage Systems",
      image: OurProject,
    },
    {
      id: 3,
      title: "Smart Irrigation",
      description:
        "Automated irrigation systems to optimize water usage for agriculture.",
      image: SmartIrrigation,
    },
  
    {
      id: 4,
      title: "Smart Irrigation",
      description:
        "Automated irrigation systems to optimize water usage for agriculture.",
      image: OurProject,
    },
  ];

  export const products = [
    {
      title: "Water Pump",
      description:
        "Dayliff,, Pedrollo, Grundfos, Davey, DAB, Rovatti, Pompe, Flowserve",
      image: Desktop,
    },
    {
      title: "Solar Panels",
      description:
        "Ideal for showcasing renewable energy products, suitable for eco-friendly businesses.",
      image: Solar,
    },
    {
      title: "General Machinery",
      description:
        "DG-P, DG Diesel Generators,  DG Multi-4, DGW Welding Generators, DGY Generators,  DGC Generators,DGP Generators,Generators Accessories, DLV/DLA Engines,  DLY Diesel Engines,  Kohler KD Diesel Engines ...",
      image: Machinery,
    },
    {
      title: "Controllers and Digital Solutions",
      description:
        "A comprehensive product showcase for digital tools and heavy machinery.",
      image: Controllers,
    },
    {
      title: "Swimming Pools",
      description:
        "Filters Pumps Chemicals & Chlorinators Accessories Spas & Saunas Fountain Nozzles",
      image: Swimming,
    },
    {
      title: "Water Treatment",
      description:
        "Domestic Treatment Reverse Osmosis & UV Water Treatment Plants Air Blowers Filters & Softeners Chemical Dosage Water Treatment Media",
      image: Water,
    },
    {
      title: "Chemical",
      description:
        "A comprehensive product showcase for Chemical tools.",
      image: Chemical,
    },
  ]

  // data/menuData.js

export const menuData = [
  { name: "Home", path: "/" },
  {
    name: "Service",
    path: "/service",
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
  { name: "Product", path: "/product" },
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
