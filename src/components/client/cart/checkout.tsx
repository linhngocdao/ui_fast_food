import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Checkout = () => {
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
  <p className="text-gray-600 font-medium">Thanh toán</p>
</div>
{/* ./breadcrumb */}


{/* wrapper */}
<div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
  <div className="col-span-8 border border-gray-200 p-4 rounded">
    <h3 className="text-lg font-medium capitalize mb-4">Thank toán</h3>
    <div className="space-y-4">
        <div>
          <label htmlFor="first-name" className="text-gray-600">Họ và tên  <span className="text-primary">*</span></label>
          <input type="text" name="first-name" id="first-name" className="input-box" />
        </div>
      <div>
        <label htmlFor="region" className="text-gray-600">Địa chỉ </label>
        <input type="text" name="region" id="region" className="input-box" />
      </div>
      <div>
        <label htmlFor="phone" className="text-gray-600">Số điện thoại</label>
        <input type="text" name="phone" id="phone" className="input-box" />
      </div>
      <div>
        <label htmlFor="email" className="text-gray-600">Email</label>
        <input type="email" name="email" id="email" className="input-box" />
      </div>
      <div>
        <label htmlFor="company" className="text-gray-600">Ghi chú</label>
        {/* <input type="text" name="company" id="company" className="input-box" /> */}
        <textarea name="" className="input-box" id="" ></textarea>
      </div>
    </div>
  </div>
  <div className="col-span-4 border border-gray-200 p-4 rounded">
    <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">Danh sách sản phẩm</h4>
    <div className="space-y-2">
      <div className="flex justify-between">
        <div>
          <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
          <p className="text-sm text-gray-600">Size: M</p>
        </div>
        <p className="text-gray-600">
          x3
        </p>
        <p className="text-gray-800 font-medium">$320</p>
      </div>
      <div className="flex justify-between">
        <div>
          <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
          <p className="text-sm text-gray-600">Size: M</p>
        </div>
        <p className="text-gray-600">
          x3
        </p>
        <p className="text-gray-800 font-medium">$320</p>
      </div>
      <div className="flex justify-between">
        <div>
          <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
          <p className="text-sm text-gray-600">Size: M</p>
        </div>
        <p className="text-gray-600">
          x3
        </p>
        <p className="text-gray-800 font-medium">$320</p>
      </div>
      <div className="flex justify-between">
        <div>
          <h5 className="text-gray-800 font-medium">Italian shape sofa</h5>
          <p className="text-sm text-gray-600">Size: M</p>
        </div>
        <p className="text-gray-600">
          x3
        </p>
        <p className="text-gray-800 font-medium">$320</p>
      </div>
    </div>
    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
      <p>Tạm tính</p>
      <p>$1280</p>
    </div>
    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
      <p>Tiền ship</p>
      <p>0 VNĐ</p>
    </div>
    <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
      <p className="font-semibold">Tổng tiền</p>
      <p>$1280</p>
    </div>
   
    <a href="#" className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Hoàn tất đặt hàng</a>
  </div>
</div>
{/* ./wrapper */}


    <Footer/>
    </>
  )
}

export default Checkout