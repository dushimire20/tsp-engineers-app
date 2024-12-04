import Desktop from "@/assets/Desktop.png";
import Solar from "@/assets/Solar.png"
import Machinery from "@/assets/general-machinery.png"
import Controllers from "@/assets/controllers.png"
import Swimming from "@/assets/swimming-pools.png";
import Water from "@/assets/water-treatment.png";
import Chemical from "@/assets/chemicals.png"
import SolarPanels from "/src/assets/Solars/Solar-Panel.jpg"
import SolarPumps from "/src/assets/Solars/solar-pumps--controls.jpg"
import WH from "/src/assets/Solars/water-heaters.jpg";
import DPS from "/src/assets/Solars/digital-power-solutions.jpg"
import ESS from "/src/assets/Solars/energy-storage-systems.jpg"
import I from "/src/assets/Solars/inverters.jpg"
import A from "/src/assets/Solars/accessories_2.jpg"
// pools
import P1 from "@/assets/pool/dx-filters.jpg"
import P2 from "@/assets/pool/pumps.jpg"
import P3 from "@/assets/pool/pool-chemicals_1035258276.jpg"
import P4 from "@/assets/pool/accessories_1.jpg"
import P5 from "@/assets/pool/spas.jpg"
import P6 from "@/assets/pool/fountain.jpg"
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
      path:"/service/waterPumps"
    },
    
    {
      name: "General Machinery",
      description:
        "DG-P, DG Diesel Generators,  DG Multi-4, DGW Welding Generators, DGY Generators,  DGC Generators,DGP Generators,Generators Accessories, DLV/DLA Engines,  DLY Diesel Engines,  Kohler KD Diesel Engines ...",
      image: Machinery,
      path: "service/machinery"
    },
    {
      name: "Controllers and Digital Solutions",
      description:
        "A comprehensive product showcase for digital tools and heavy machinery.",
      image: Controllers,
      path: "service/controllers"
    },
    {
      name: "Swimming Pools",
      description:
        "Filters Pumps Chemicals & Chlorinators Accessories Spas & Saunas Fountain Nozzles",
      image: Swimming,
      path:"service/swimmingPool"
    },
    {
      name: "Water Treatment",
      description:
        "Domestic Treatment Reverse Osmosis & UV Water Treatment Plants Air Blowers Filters & Softeners Chemical Dosage Water Treatment Media",
      image: Water,
      path: "service/water-treatment"
    },
    {
      name: "Chemicals",
      description:
        "A comprehensive product showcase for Chemical tools.",
      image: Chemical,
      path: "services/chemicals"
    },
  ]

  // data/menuData.js

export const menuData = [
  { name: "Home", path: "/" },
  {
    name: "Product & Solutions",
    path: "/service/solar",
    disabled:true,
    dropdown: [
      { name: "Solar Solutions", path: "/service/solar" },
      { name: "Swimming Pools", path: "/service/swimmingPool" },
      { name: "Water Treatments", path: "/service/water-treatments" },
      { name: "General Machinery", path: "/service/machinery" },
      { name: "Controllers & Digital Solutions", path: "/service/controllers" },
      { name: "Chemicals", path: "/service/chemicals" },
      { name: "Irrigation & Water Supply Accessories", path: "/service/irrigation" },
    ],
  },
  {
    name: "Partners",
    path: "/partners",
  },
 
  { name: "About Us", path: "/about" },
  {
    name: "Download",
    path: "/catalogue",
    disabled:true,
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
    path:"/solarPanels",
  },

  {
    image: SolarPumps,
    name: "Solar pumps and controls",
    discription: "Solar-powered pumps and controllers for efficient and sustainable water management.",
    oldPrice: "Price",
     path:"/solarControls"
  },
  {
    image: WH,
    name: "Water Heaters",
    discription: "High-performance solar water heaters for reliable and cost-effective hot water supply.",
    oldPrice: "Price",
    path:"/waterHeaters"   
    
  },

  {
    image: DPS,
    name: "Digital power solutions",
    discription: "Innovative digital power solutions for efficient and reliable energy management.",
    oldPrice: "Price",
    path:"/digitalSolutions"   
    
  },

  {
    image: ESS,
    name: "Energy storage systems",
    discription: "Advanced energy storage systems for reliable and sustainable power supply.",
    oldPrice: "Price",
    path:"/energySystems"   
    
  },

  {
    image: I,
    name: "Inverters/ Backup Systems",
    discription: "High-efficiency inverters for seamless conversion of DC power to AC power.",
    oldPrice: "Price",
    path:"/inverters"   
    
  },

  {
    image: A,
    name: "accessories",
    discription: "Essential accessories and components for seamless solar energy systems.",
    oldPrice: "Price",
    path:"/solarAccessories"   
    
  },

  
  
]


export const swimmingPool = [
  {
    image: P1,
    name: "Filters",
    discription: "Our high-performance pool filters efficiently remove debris and impurities, ensuring a pristine swimming experience.",
    oldPrice: "Price",
    path:"/solarPanels",
  },

  {
    image: P2,
    name: "Pumps",
    discription: "Effortless water flow, guaranteed. Our reliable pumps deliver powerful and efficient water solutions for diverse applications, from residential to industrial.",
    oldPrice: "Price",
     path:"/solarControls"
  },
  {
    image: P3,
    name: "Chemicals & Chlorinators",
    discription: "Keep your pool water sparkling clean and safe. Our high-quality chemicals and chlorinators maintain optimal water balance and eliminate harmful bacteria.",
    oldPrice: "Price",
    path:"/waterHeaters"   
    
  },

  {
    image: P4,
    name: "Accessories",
    discription: "Upgrade your pool experience. Our range of accessories, from pool covers to cleaning tools, enhance your pool's performance and your enjoyment.",
    oldPrice: "Price",
    path:"/digitalSolutions"   
    
  },

  {
    image: P5,
    name: "Spas & Saunas",
    discription: "Indulge in ultimate relaxation. Our luxurious spas and saunas offer a serene escape, rejuvenating your mind and body.",
    oldPrice: "Price",
    path:"/energySystems"   
    
  },

  {
    image: P6,
    name: "Fauntain Nozzles",
    discription: "Elevate your outdoor space with our stylish and functional fountain nozzles. Create mesmerizing water displays that add beauty and tranquility to your garden or landscape.",
    oldPrice: "Price",
    path:"/inverters"   
    
  },  
  
]

