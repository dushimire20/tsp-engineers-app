import React from "react";
import Wap from "@/assets/whatsapp.png";

type Props = {};

const Whatsapp = (props: Props) => {
  const openWhatsAppChat = () => {
    // Replace the number with your WhatsApp number
    const phoneNumber = "+250781184618"; 
    const message = encodeURIComponent("Hello, I would like to chat!");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative">
      <button
        onClick={openWhatsAppChat}
        className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 right-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
      >
        <div className="p-3 rounded-full border-4 border-white bg-green-600">
          <img src={Wap} className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />
        </div>
      </button>
    </div>
  );
};

export default Whatsapp;
