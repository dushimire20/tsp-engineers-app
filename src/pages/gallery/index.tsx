import React, { useRef, useState } from 'react'
import Image1 from "@/assets/gallery/Aku Plakaları İmalat  Makineleri (1).jpg"
import Image2 from "@/assets/gallery/Aku Plakaları İmalat  Makineleri.jpg"
import Image3 from "@/assets/gallery/Devlet Malzeme Ofisi Ataç Makinesi (1).jpg"
import Image4 from "@/assets/gallery/Devlet Malzeme Ofisi Ataç Makinesi-2.jpg"
import Image5 from "@/assets/gallery/Devlet Malzeme Ofisi Ataç Makinesi.jpg"
import Image6 from "@/assets/gallery/Gako Rwanda Sığır Yetiştirme Projesi-2.jpg"
import Image7 from "@/assets/gallery/Gako Rwanda Sığır Yetiştirme Projesi.jpg"
import Image8 from "@/assets/gallery/Gako Rwanda Sığır Yetiştirme Tesisi Fantom Yapısı.jpg"
import Image9 from "@/assets/gallery/Gihira I Rwanda İçme Suyu Arıtma Tesisi (Rehabilitasyon).jpg"
import Image10 from "@/assets/gallery/Gihira II Rwanda İçme Suyu Arıtma Tesisi.jpg"
import Image11 from "@/assets/gallery/Logic Automation Sistemleri-2.jpg"
import Image12 from "@/assets/gallery/Logic Automation Sistemleri.jpg"
import Image13 from "@/assets/gallery/Nzove İçme Suyu Arıtma Projesi.jpg"
import Image14 from "@/assets/gallery/Pano İmalat.jpg"

interface Props {
    
}



const Gallery = (props: Props) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
const [activeImageUrl, setActiveImageUrl] = useState(null);
const [imageIndex, setImageIndex] = useState(null);
const galleryRef = useRef(null);

const openGallery = (event, index) => {
  setImageIndex(index);
  setActiveImageUrl(event.target.src);
  setIsGalleryOpen(true);
};

const closeGallery = () => {
  setIsGalleryOpen(false);
  setTimeout(() => setActiveImageUrl(null), 300);
};

const nextImage = () => {
  const totalImages = galleryRef.current.childElementCount;
  const newIndex = imageIndex === totalImages - 1 ? 0 : imageIndex + 1;
  updateActiveImage(newIndex);
};

const prevImage = () => {
  const totalImages = galleryRef.current.childElementCount;
  const newIndex = imageIndex === 0 ? totalImages - 1 : imageIndex - 1;
  updateActiveImage(newIndex);
};

const updateActiveImage = (index) => {
  const image = galleryRef.current.querySelectorAll("img")[index];
  setActiveImageUrl(image.src);
  setImageIndex(index);
};
    return (
        <div className="w-full h-full select-none py-32">
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-800">
                Here's our Gallery
              </span>
            </h1>
          </div>
        </section>
  
        <div className="max-w-6xl mx-auto">
          <ul
            ref={galleryRef}
            className="grid grid-cols-2 gap-5 lg:grid-cols-5"
          >
            {[
              Image1,
              Image2,
              Image3,
              Image4,
              Image5,
              Image6,
              Image7,
              Image8,
              Image9,
              Image10,
              Image11,
              Image12,
              Image13,
              Image14,

            ].map((src, index) => (
              <li key={index}>
                <img
                  src={src}
                  onClick={(e) => openGallery(e, index)}
                  className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                  alt={`Photo ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
  
        {isGalleryOpen && (
          <div
            onClick={closeGallery}
            className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 cursor-zoom-out"
          >
            <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-0 flex items-center justify-center text-white bg-white/10 rounded-full hover:bg-white/20 w-14 h-14"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
  
              <img
                src={activeImageUrl}
                alt=""
                className="object-contain w-full h-full cursor-zoom-out"
              />
  
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-0 flex items-center justify-center text-white bg-white/10 rounded-full hover:bg-white/20 w-14 h-14"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    )
}

export default Gallery;
