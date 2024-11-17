import React from 'react'
import { products } from '@/data'

interface Props {
    
}

const Products = (props: Props) => {
    return (
        <section className="py-10 md:pb-0 mx-0 items-center justify-center w-full">
            <div className="mx-auto items-center justify-center w-5/6 mt-[60px]">
            <div className='md:w-[426px]'>
                <h1 
                className="text-lg font-bold text-gray-800 mb-2"
                >Our Products</h1>

                <p
                className="text-sm text-gray-600 mb-4"
                >
                Efficient and durable water pumps for residential, agricultural, and commercial needs.
                </p>
            </div>
            <section className="py-8 bg-gray-50">
          <div className="md:flex flex-wrap w-full gap-8 justify-center mt-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full md:w-[286px] rounded-2xl shadow-md border-2 border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 p-4 mb-6"
              >
                <img
                  alt={`${item.title} showcase`}
                  className="rounded-t-2xl object-cover mb-4"
                  src={item.image}
                />
                <h1 className="font-inter font-semibold text-[21px] leading-[26.7px] tracking-[-0.13px] mb-2">
                  {item.title}
                </h1>
                <p className="font-inter font-normal text-[16px] leading-[24px] text-gray-700 mb-4">
                  {item.description}
                </p>
                <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>

         
        </section>

            </div>
            
        </section>
    )
}

export default Products;
