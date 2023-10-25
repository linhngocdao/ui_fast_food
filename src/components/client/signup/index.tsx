import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
        <Header/>
            <div className="contain py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium mb-1">Tạo mới tài khoản</h2>
                    <p className="text-gray-600 mb-6 text-sm">
                        Đăng ký tài khoản cho người mới 
                    </p>
                    <form action="#" method="post" autoComplete="off">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="name" className="text-gray-600 mb-2 block">Họ và tên</label>
                                <input type="text" name="name" id="name" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="Mời nhập tên" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-gray-600 mb-2 block">Email </label>
                                <input type="email" name="email" id="email" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="Mời nhập mail " />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-gray-600 mb-2 block">Mật khẩu</label>
                                <input type="password" name="password" id="password" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="*******" />
                            </div>
                            <div>
                                <label htmlFor="confirm" className="text-gray-600 mb-2 block">Confirm password</label>
                                <input type="password" name="confirm" id="confirm" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400" placeholder="*******" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center">
                                <input type="checkbox" name="aggrement" id="aggrement" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a href="#" className="text-primary">terms &amp; conditions</a></label>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Tạo tài khoản</button>
                        </div>
                    </form>
                
                    <p className="mt-4 text-center text-gray-600">Bạn đã có tài khoản? <Link to="/login" className="text-primary">Đăng nhập ngay</Link></p>
                </div>
            </div>

<Footer/>
        </>
    )
}

export default Signup