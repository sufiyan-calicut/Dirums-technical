import React, {useState} from 'react';
import productsData from '../../data/productData';
import cartIcon from '../../assets/icons/cartIcon.png';

const Products = () => {
  const [isSingleView, setSingleView] = useState(true);
  return (
    <div className="w-full p-6  h-auto  ">
      <div className="gridCatogories sm:hidden w-full flex items-center justify-end gap-2 bg-themeWhite">
        <button
          onClick={() => {
            if (isSingleView) {
              setSingleView(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8 1H1V8H8V1Z"
              stroke={isSingleView ? 'black' : '#E09C59'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500 ease-in-out"
            />
            <path
              d="M19 1H12V8H19V1Z"
              stroke={isSingleView ? 'black' : '#E09C59'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500 ease-in-out"
            />
            <path
              d="M19 12H12V19H19V12Z"
              stroke={isSingleView ? 'black' : '#E09C59'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500 ease-in-out"
            />
            <path
              d="M8 12H1V19H8V12Z"
              stroke={isSingleView ? 'black' : '#E09C59'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500 ease-in-out"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            if (!isSingleView) {
              setSingleView(true);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19 1H1V19H19V1Z"
              stroke={isSingleView ? '#E09C59' : 'black'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500 ease-in-out"
            />
          </svg>
        </button>
      </div>
      <div
        className={`ProductsContainer w-full  h-auto mt-2 sm:mt-0 relative grid grid-cols-${
          isSingleView ? '1' : '2'
        } sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 `}
      >
        {productsData.map(product => {
          return (
            <div
              key={product.id}
              className={`max-w-fit min-h-fit mt-4 sm:mt-4  ${
                isSingleView ? 'w-singleProductWidth' : 'w-doubleProductWidth'
              } transition-all duration-700  left-0 right-0 mx-auto text-wrap  `}
            >
              <div
                className={` ${
                  isSingleView ? 'h-60' : 'h-40'
                }    max-h-70 max-w-3/4 relative`}
              >
                <div className="w-8 h-8 bg-gradient-to-b from-white to-gray-300 rounded-full absolute right-2 top-2  shadow-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 28 24"
                    fill="none"
                  >
                    <path
                      d="M12.0054 21.7803L12.0047 21.7797C8.4831 18.8307 5.60033 16.4128 3.59235 14.1442C1.58811 11.8797 0.516698 9.83022 0.516698 7.627C0.516698 4.03641 3.56471 1.18039 7.53715 1.18039C9.77854 1.18039 11.9279 2.14638 13.3223 3.64668L13.6739 4.02501L14.0255 3.64668C15.4199 2.14638 17.5693 1.18039 19.8106 1.18039C23.7831 1.18039 26.8311 4.03641 26.8311 7.627C26.8311 9.83022 25.7597 11.8797 23.7555 14.1442C21.7475 16.4128 18.8647 18.8307 15.3431 21.7797L15.3424 21.7803L13.6739 23.183L12.0054 21.7803Z"
                      stroke="black"
                      strokeWidth="0.960033"
                    />
                  </svg>
                </div>
                <img
                  src={product.image}
                  alt="product img"
                  className="rounded-md w-full h-full object-cover "
                />
              </div>
              <div className="p-2">
                <h3
                  className={`text-darkFontOrange font-bold ${
                    isSingleView ? 'text-base' : 'text-sm'
                  }`}
                >
                  {product.productName}
                </h3>
                <p
                  className={`text-themeBlack ${
                    isSingleView ? 'text-base' : 'text-xs'
                  }`}
                >
                  {product.artistName}
                </p>
                <p
                  className={`text-themeBlack ${
                    isSingleView ? 'text-base' : 'text-xs'
                  }`}
                >
                  {product.category}
                </p>
                <div className="flex w-full justify-between items-end">
                  <div className="priceArea flex gap-2 items-end w-full overflow-clip">
                    <p
                      className={`text-themeBlack ${
                        isSingleView ? 'text-xl' : 'text-xs'
                      } font-bold`}
                    >
                      ₹{product.offerPrice}/-
                    </p>
                    <p
                      className={`${
                        isSingleView ? 'text-sm' : 'text-xs'
                      } text-nowrap `}
                    >
                      <span className={`line-through `}>₹{product.price} </span>
                      /-
                    </p>
                  </div>
                  <div className="buttonArea bg-AddToCart p-1 rounded-md">
                    <button
                      className={`bg-AddToCart  flex justify-center gap-1 items-center rounded-md w-36 font-bold overflow-clip  text-sm h-6 ${
                        !isSingleView && 'w-20 h-4 '
                      }`}
                    >
                      <img src={cartIcon} alt="cartIcon" />
                      <div className={`${!isSingleView && 'text-2xs'}`}>
                        ADD TO CART
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
