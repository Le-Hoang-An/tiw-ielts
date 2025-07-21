import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { useState } from "react";

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Header onHamburgerClick={() => setShowSidebar(!showSidebar)} />
      <div className="flex pt-20 h-screen">
        {/* Sidebar: hiện dạng overlay trên mobile, luôn hiện trên md */}
        <div className={`z-20 transition-transform duration-300 md:static fixed top-20 left-0 h-screen ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="md:block hidden h-screen">
            <Sidebar />
          </div>
          <div className="md:hidden block h-screen">
            {showSidebar && <Sidebar />}
          </div>
        </div>
        {/* Main content */}
        <main className="flex-1 p-4">
          {/* Nội dung chính */}
        </main>
      </div>
      {/* Nền mờ khi mở sidebar trên mobile */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden" onClick={() => setShowSidebar(false)}></div>
      )}
    </>
  );
}

export default Home;
