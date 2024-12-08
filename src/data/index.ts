import P1 from "@/assets/P1.jpg"
import P2 from "@/assets/P2.jpg"
import P3 from "@/assets/P3.jpg"
import P4 from "@/assets/P4.jpg"
import P5 from "@/assets/P5.jpg"
import P6 from "@/assets/P6.jpg"
import P7 from "@/assets/P7.jpg"




export const products = [
  {
    name: "Well Water Treatment",
    description:
      "Well water purification systems are systems where the well is preferred as a source in places where there is no or insufficient mains water and the purification system is applied according to the raw water characteristics. Well waters vary in different regions, different provinces and countries. For example, while the salinity rate may be high in wells located in areas close to the sea, well water in different regions may contain iron, manganese, arsenic and similar elements depending on the content of the area where it is located.",
    image: P1,
    path: "/service/seaWaterTreatment"
  },
  {
    name: "SeaWater Desalination",
    description:
      "Seawater purification systems can be applied to ships, boats, hotels, and sites where there is no clean water source. Seawater varies depending on the region where the source is located. For example, while the TDS value in the Marmara Sea is around 15,000-20,000 ppm, this value can reach 42,000 ppm for the Red Sea.",
    image: P2,
    path: "/service/waterDesalination"
  },

  {
    name: "Grey Water Treatment",
    description:
      "In domestic wastewater, the water collected by the sewer system, the wastewater originating from sinks, bathtubs and showers, is called grey water. If the grey water line can be separated from the sewer line during construction, this water can be recovered with the purification systems that can be applied and can be reused in garden irrigation or reservoirs.",
    image: P3,
    path: "/service/grayWaterTreatment"
  },
  {
    name: " WasteWater Treatment",
    description:
      "Contaminated water originating from domestic and industrial use is called wastewater. Since the content of wastewater in domestic use is in a harmonious balance in terms of carbon, nitrogen and phosphorus, we can make the treated wastewater usable for garden and recreational area irrigation by applying physical and biological wastewater treatment systems and subsequent filtration and disinfection systems.",
    image: P4,
    path: "/service/waterRecycling"
  },
  {
    name: "Surface Water Treatment",
    description:
      "Surface water treatment systems are the systems selected when streams, lakes, rivers and similar sources are used as sources. Since surface waters will vary with natural events such as rain, snow and the like, for the treatment of the source, the raw water characteristics should be examined seasonally and the treatment system should be selected according to the worst possible analysis value.",
    image: P5,
    path: "/service/surfaceWaterTreatment"
  },
  {
    name: "Spring Water Treatment",
    description:
      "Spring waters are waters that are suitable for drinking in terms of minerals and pH and are bottled and offered as drinking water. However, spring waters may contain turbidity or bacteria, viruses and microorganisms due to physical contact before reaching the point of use and bottling. Therefore, before being supplied or offered as drinking water, we can check its compliance with drinking water standards according to analysis values ​​and recommend, produce and implement the necessary treatment system for unsuitable sources.",
    image: P6,
    path: "/service/springWaterTreatment"
  },
  // {
  //   name: "Rainwater Treatment",
  //   description:
  //     "In our world where clean water resources are decreasing, we can filter the rainwater collected from the roofs of domestic and industrial facilities and make it suitable for use in recreational areas, gardens or agricultural irrigation or reservoirs. If preferred, we can purify rainwater using different advanced purification technologies to make it drinking and utility water.",
  //   image: P7,
  //   path: "/service/rainwaterTreatment"
  // },


]

// data/menuData.js

export const menuData = [
  { name: "Home", path: "/" },
  {
    name: "Product & Solutions",
    path: "/service/seaWaterTreatment",
    disabled: true,
    dropdown: [
      { name: "Well Water Treatment", path: "/service/seaWaterTreatment" },
      { name: "SeaWater Desalination", path: "/service/waterDesalination" },
      { name: "Grey Water Treatment Solutions", path: "/service/grayWaterTreatment" },
      { name: "Recycling and Waste water Treatment", path: "/service/waterRecycling" },
      { name: "Surface water Treatment", path: "/service/surfaceWaterTreatment" },
      { name: "Spring water Treatment", path: "/service/springWaterTreatment" },
      // { name: "Rain water Treatment Solutions", path: "/service/rainwaterTreatment" },
      // { name: "Portable Purification", path: "/service/portablePurification" },
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
    disabled: true,
    dropdown: [
      { name: "Catalogue", path: "/catalogue" },
      { name: "Document", path: "/document" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];




