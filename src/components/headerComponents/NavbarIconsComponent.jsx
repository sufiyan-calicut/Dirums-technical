import Logo from '../../../src/assets/icons/Logo.svg';
import CartIcon from '../../../src/assets/icons/cart.svg';
import WishlistIcon from '../../../src/assets/icons/wishlist.svg';
import ToggleIcon from '../../../src/assets/icons/toggleIcon.svg';
import SearchIcon from '../../../src/assets/icons/search.svg';

const NavbarIconsComponent = () => {
  return (
    <div>
      <div className="w-full min-h-20 h-auto bg-bgBlack sm:hidden px-5 py-1">
        <div className="h-11 w-full flex justify-between items-center">
          <div>
            <img src={ToggleIcon} alt="Logo" />
          </div>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div>
              <img src={WishlistIcon} alt="Logo" />
            </div>
            <div>
              <img src={CartIcon} alt="Cart Icon" />
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-1 p-1 w-full bg-themeGray rounded-sm">
          <div className="px-2">
            <img src={SearchIcon} alt="search icon" />
          </div>
          <div className="h-full w-full  ">
            <input
              type="search"
              className="font-light text-center bg-themeGray text-xs  w-full text-bgBlack outline-none border-none"
              placeholder="Search for artworks, artists, and many more"
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-20 h-auto bg-bgBlack hidden sm:block px-5 py-1">
        <div className="h-11 w-full flex justify-center items-end gap-2 md:gap-6 ">
          <div>
            <img src={Logo} alt="Logo" className='sm:w-28 md:w-36' />
          </div>
          <div className=" flex items-center gap-1 p-1 w-full h-7 md:h-8 max-w-2xl bg-themeGray rounded-sm">
            <div className="px-2">
              <img src={SearchIcon} alt="search icon" />
            </div>
            <div className="h-full w-full  ">
              <input
                type="search"
                className="font-light text-center bg-themeGray text-sm md:text-md  w-full text-bgBlack outline-none border-none"
                placeholder="Search for artworks, artists, and many more"
              />
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div>
              <img src={WishlistIcon} alt="Logo" className='w-7 h-7' />
            </div>
            <div>
              <img src={CartIcon} alt="Cart Icon" className='w-7 h-7' />
            </div>
          </div>
        </div>
        {/* <div className=" flex items-center gap-1 p-1 w-full bg-themeGray rounded-sm">
          <div className='px-2'>
            <img src={SearchIcon} alt="search icon" />
          </div>
          <div className="h-full w-full  ">
            <input
              type="search"
              className="font-light text-center bg-themeGray text-xs  w-full text-bgBlack outline-none border-none"
              placeholder="Search for artworks, artists, and many more"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NavbarIconsComponent;
