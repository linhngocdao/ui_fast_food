import React from 'react'
import { Link } from 'react-router-dom'
const Main = () => {
    const img = '../../../src/assets/images/product1.jpg'
  return (
    <>
 {/* product  */}
  <div className="container pb-16">
  <h2 className="text-2xl text-gray-800 uppercase mb-6 text-center pt-6 font-bold">Tất cả các sản phẩm</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <Link to="/detail" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </Link>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>

    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>

    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>

    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>

    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>

    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>

    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>
    
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img src={img} alt="product 1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center  opacity-0 group-hover:opacity-100 transition">
          <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
          <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
            Chair</h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
            <span><i className="fa-solid fa-star" /></span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
        to cart</a>
    </div>
  </div>
</div>

   {/* end product */}
    </>
  )
}

export default Main




{/* <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center p-[30px]'>
            <div className='flex flex-col gap-6 lg:w-2/4 ml-[30px]'>
                <img src="https://picsum.photos/id/1/300/300" alt="" className='w-[60%] h-[60%] aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src="https://picsum.photos/id/1/600/600" alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src="https://picsum.photos/id/1/600/600" alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src="https://picsum.photos/id/1/600/600" alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src="https://picsum.photos/id/1/600/600" alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' >-</button>
                        <span className='py-4 px-6 rounded-lg'>122132</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' >+</button>
                    </div>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full '>Add to Cart</button>
                </div>
            </div>
        </div> */}

