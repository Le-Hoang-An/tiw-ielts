import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Home() {
  return (
    <>
      <Header />
      <div className="flex pt-20 h-[calc(100vh)]">
        <Sidebar />
        <main className="flex-1 p-4 overflow-hidden">
          {/* Nội dung chính */}
        </main>
      </div>
    </>
  );
}

export default Home;
