import Header from './partials/Header';
import PagePath from '../components/pagePathComponent/PagePath';
import Catogories from '../components/catogoryComponent/Catogories';
import ProductPreview from '../components/ProductPreview/ProductPreview';
import Products from '../components/product/Products';
import Footer from './partials/Footer';

const ProductsPage = () => {
  return (
    <div className="">
      <Header />
      <div className="hidden sm:block">
        <Catogories />
      </div>
      <PagePath />
      <div className="product-layout">
        <div className="mobile-layout sm:hidden">
          <div className="productsDisplayArea">
            <div>
              <ProductPreview />
            </div>
            <div>
              <Products />
            </div>
          </div>
        </div>
        <div className="largeScreen-layout hidden  sm:flex">
          <div className="filterComponent min-h-screen h-auto w-1/4 border-r-2 border-r-themeGray p-10">
            <div className="w-full h-full  ">
              <div className="border-b py-2 w-full border-b-bgBlack">
                <h2 className="font-bold text-3xl">Filters</h2>
              </div>
              <div className="mt-4 flex flex-col  items-start">
                <h2 className="font-bold text-2xl">Price</h2>
                <div className="my-2">
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input type="radio" name="price" className="h-4 w-5" />
                    Below 10,000
                  </button>
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input type="radio" name="price" className="h-4 w-5" />
                    10,000 - 25000
                  </button>
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input type="radio" name="price" className="h-4 w-5" />
                    25,000 - 50,000
                  </button>
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input type="radio" name="price" className="h-4 w-5" />
                    50,000 - 100,000
                  </button>
                  <button className="flex items-center justify-center gap-2 font-medium ">
                    <input type="radio" name="price" className="h-4 w-5" />
                    Above 100,000
                  </button>
                </div>
              </div>
              <div className="mt-4 flex flex-col  items-start">
                <h2 className="font-bold text-2xl">Sort By Date</h2>
                <div className="my-2">
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input type="radio" name="sortByDate" className="h-4 w-5" />
                    Newest
                  </button>
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input type="radio" name="sortByDate" className="h-4 w-5" />
                    Oldest
                  </button>
                </div>
              </div>
              <div className="mt-4 flex flex-col  items-start">
                <h2 className="font-bold text-2xl">Sort By Price</h2>
                <div className="my-2">
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input
                      type="radio"
                      name="sortByPrice"
                      className="h-4 w-5"
                    />
                    High To Low
                  </button>
                  <button className="flex items-center justify-center gap-2 font-medium  ">
                    <input
                      type="radio"
                      name="sortByPrice"
                      className="h-4 w-5"
                    />
                    Low To High
                  </button>
                </div>
              </div>
              <div className='mt-10 w-full relative'>
                <button className='border border-themeBlack font-medium rounded-md py-2 px-3 absolute left-5 right-5'>
                    Reset Filter
                </button>
              </div>
            </div>
          </div>
          <div className="productsDisplayArea">
            <div>
              <ProductPreview />
            </div>
            <div>
              <Products />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
