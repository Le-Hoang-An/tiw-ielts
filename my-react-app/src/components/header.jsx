import logo from "../assets/logo-dark.png";
import avt from "../assets/default-avatar.png";
import bell from "../assets/bell.svg";
import cart from "../assets/cart.svg";

function Header({ onHamburgerClick }) {
  return (
    <>
      <div className="fixed w-full border shadow-lg pb-2 bg-white z-30">
        <div className="flex justify-between px-3 mt-3 items-center">
          {/* Hamburger chỉ hiện trên mobile */}
          <button
            className="md:hidden mr-2 text-2xl p-2 rounded hover:bg-gray-200"
            onClick={onHamburgerClick}
          >
            &#9776;
          </button>
          <img src={logo} alt="Logo" className="h-12 px-3 mt-3 cursor-pointer" />
          {/* Banner chỉ hiện trên md trở lên */}
          <p className="px-3 mt-3 flex-1 flex justify-center items-center text-lg font-bold hidden md:flex">
            Chào mừng bạn đến với website lớp học IELTS
          </p>
          <div className="flex justify-center items-center">
            <hr className="w-0.5 bg-gray-300 py-3 mt-3" />
            <img src={cart} alt="Cart" className="h-10 px-3 pt-3" />
            <img src={bell} alt="Bell" className="h-10 px-3 pt-3" />
            <img src={avt} alt="Avatar" className="h-12 px-3 mt-3" />
            {/* Ẩn thông tin user trên mobile */}
            <div className="hidden md:block">
              <p>Lê Hoàng An</p>
              <p className="text-sm text-customGold">Học viên</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
