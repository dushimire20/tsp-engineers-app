import Desktop from "@/assets/Desktop.png";
import WaterTreatment from "@/assets/waterTreatments/cover.jpeg"
import Machinery from "@/assets/general-machinery.png"
import Controllers from "@/assets/controllers.png"
import Swimming from "@/assets/swimming-pools.png";
import Water from "@/assets/water-treatment.png";
import Chemical from "@/assets/chemicals.png"



  export const products = [
    {
      name: "Well Water Treatment",
      description:
        "water treatment systems may be applied in vessels where there is no potable water, ships, hotels, and living quarters. Sea water sources way vary according to region where water sources take place. ",
      image: WaterTreatment,
      path:"service/seaWaterTreatment"
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
      path: "/service/grayWaterTreatment"
    },
    {
      name: "Recycling and WasteWater Treatment",
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
      { name: "Sea Water Treatment", path: "/service/seaWaterTreatment" },
      { name: "SeaWater Desalination", path: "/service/waterDesalination" },
      { name: "Grey Water Treatment Solutions", path: "/service/grayWaterTreatment" },
      { name: "Recycling and Waste water Treatment", path: "/service/waterRecycling" },
      { name: "Surface water Treatment", path: "/service/surfaceWaterTreatment" },
      { name: "Spring water Treatment", path: "/service/springWaterTreatment" },
      { name: "Rain water Treatment Solutions", path: "/service/rainwaterTreatment" },
      { name: "Portable Purification", path: "/service/portablePurification" },
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




