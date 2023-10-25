// import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'

const Cart = () => {
    const img = '../../../src/assets/images/product1.jpg'
  return (
    <>

    <Header/>

    {/* breadcrumb */}
    <div className="container py-4 flex items-center gap-3">
    <a href="../index.html" className="text-primary text-base">
        <i className="fa-solid fa-house" />
    </a>
    <span className="text-sm text-gray-400">
        <i className="fa-solid fa-chevron-right" />
    </span>
    <p className="text-gray-600 font-medium">Profile</p>
    </div>
    {/* ./breadcrumb */}

{/* wrapper */}
<div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
  {/* sidebar */}
  <div className="col-span-3">

    <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">

      <div className="space-y-1 pl-8 pt-4">
        <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="fa-solid fa-box-archive" />
          </span>
          My order history
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          My returns
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          My Cancellations
        </a>
        <a href="#" className="relative hover:text-primary block capitalize transition">
          My reviews
        </a>
      </div>
    </div>
  </div>
  {/* ./sidebar */}
  {/* wishlist */}
  <div className="col-span-9 space-y-4">
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img src={img} alt="product 6" className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
        <p className="text-gray-500 text-sm">Availability: <span className="text-green-600">In Stock</span></p>
      </div>
      <div>
        <button className='bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black font-bold"'>+</button>
        <input type="number" className='w-[70px] h-[32px] !border-[rgba(0,0,0,.09)]  border-2 text-center' name="" id="" />
        <button className='bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black font-bold'>-</button>
      </div>
      <div className="text-primary text-lg font-semibold">$320.00</div>
      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash" />
      </div>
    </div>

    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img src={img} alt="product 6" className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
        <p className="text-gray-500 text-sm">Availability: <span className="text-green-600">In Stock</span></p>
      </div>
      <div>
        <button className='bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black font-bold"'>+</button>
        <input type="number" className='w-[70px] h-[32px] !border-[rgba(0,0,0,.09)]  border-2 text-center' name="" id="" />
        <button className='bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black font-bold'>-</button>
      </div>
      <div className="text-primary text-lg font-semibold">$320.00</div>
      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash" />
      </div>
    </div>

    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img src={img} alt="product 6" className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
        <p className="text-gray-500 text-sm">Availability: <span className="text-green-600">In Stock</span></p>
      </div>
      <div>
        <button className='bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black font-bold"'>+</button>
        <input type="number" className='w-[70px] h-[32px] !border-[rgba(0,0,0,.09)]  border-2 text-center' name="" id="" />
        <button className='bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black font-bold'>-</button>
      </div>
      <div className="text-primary text-lg font-semibold">$320.00</div>
      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash" />
      </div>
    </div>

        <div>
        <section className="basis-2/6 w-full">
          <section className="bg-zinc-100 mt-12">
            <div className="p-10">
              <div className=" pt-5 flex">
                <span className="grow">Tổng tiền</span>
                <span className="text-right font-bold">
                 12 triệu VNĐ
                </span>
              </div>
              <div className="pt-5 flex ">
                <Link to='/checkout'>
              <button className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium" >
                Thanh toán
              </button>
              </Link>
              </div>
             
            </div>
          </section>
        </section>
        </div>
        
  </div>
  {/* ./wishlist */}
</div>
{/* ./wrapper */}



    <Footer/>
    </>
  )
}

export default Cart