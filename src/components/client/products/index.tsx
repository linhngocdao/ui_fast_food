import React from "react";
import Header from "../header";
import Footer from "../footer";
import  Pagination  from "../pagination";

const Products = () => {
  const img = '../../../src/assets/images/product1.jpg'
  return (
    <>
      <Header />

      {/* breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house" />
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right" />
        </span>
        <p className="text-gray-600 font-medium">Sản phẩm</p>
      </div>
      {/* ./breadcrumb */}


      {/* search */}
      <form action="" className="md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
        <div className="relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fas fa-search" /> {/* Thay đổi class của biểu tượng tìm kiếm */}
          </span>
          <input type="search" name="search" id="search" className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="Mời bạn tìm kiếm ..." />
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>
      </form>
      {/* end search */}

      <div className="container pb-16">
        <h2 className="text-2xl text-gray-800 uppercase mb-6 text-center pt-6 font-bold">Tất cả các sản phẩm</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <img src={img} alt="product 1" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
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
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                  King Size</h4>
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
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Couple Sofa</h4>
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
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattrass X</h4>
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
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
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
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                  King Size</h4>
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
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Couple Sofa</h4>
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
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
                <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattrass X</h4>
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

<Pagination/>


      <Footer />
    </>
  );
};

export default Products;
