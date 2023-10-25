// import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <Header/>
<div className="contain py-16">
  <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
    <h2 className="text-2xl uppercase font-medium mb-1">Đăng nhập</h2>
    <p className="text-gray-600 mb-6 text-sm">
      Chào mừng bạn đến với fast food
    </p>
    <form action="#" method="post" autoComplete="off">
      <div className="space-y-2">
        <div>
          <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
          <input type="email" name="email" id="email" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="youremail.@domain.com" />
        </div>
        <div>
          <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
          <input type="password" name="password" id="password" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="*******" />
        </div>
      </div>
    
      <div className="mt-4">
        <button type="submit" className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Đăng nhập</button>
      </div>
    </form>

    <p className="mt-4 text-center text-gray-600">Bạn chưa có tài khoản? <Link to="/signup" className="text-primary">Đăng ký
        ngay</Link></p>
  </div>
</div>
<Footer/>
</>
  )
}

export default Signin