import Header from './partials/Header';
import PagePath from '../components/pagePathComponent/PagePath';
import Catogories from '../components/catogoryComponent/Catogories';

const ProductsPage = () => {
  return (
    <div className="">
      <Header />
      <div className="hidden sm:block">
        <Catogories />
      </div>
      <PagePath />
      <div className="product-layout">
        <div className="mobile-layout sm:hidden"> Mobile Layout</div>
        <div className="largeScreen-layout hidden  sm:flex">
          <div className="filterComponent min-h-screen h-auto w-1/4 border border-r-bgBlack">
            Filter
          </div>
          <div className="productsDisplayArea">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
