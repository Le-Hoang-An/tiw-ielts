import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ProgressPage from "./progress";
import { useState, useEffect } from "react";
// Import các page placeholder cho các tab còn lại
import NewsPage from "./news";
import StatisticPage from "./statistic";
import FeedbackPage from "./feedback";
import AttendancePage from "./attendance";
import TournamentPage from "./tournament";
import LuckySpinPage from "./luckyspin";
import PromotionPage from "./promotion";
import SchedulePage from "./schedule";
import WarningInfoPage from "./warninginfo";
import ClassListPage from "./classlist";
import PracticePage from "./practice";
import TestInfoPage from "./testinfo";
import VideoCoursePage from "./videocourse";
import LibraryPage from "./library";
import FAQPage from "./faq";
import ExamSetPage from "./examset";
import ActivationCodeListPage from "./activationcodelist";
import ReviewListPage from "./reviewlist";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectedTab, setSelectedTab] = useState("progress");
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  // Hàm render nội dung theo tab
  const renderContent = () => {
    switch (selectedTab) {
      case "progress":
        return <ProgressPage />;
      case "news":
        return <NewsPage />;
      case "statistic":
        return <StatisticPage />;
      case "feedback":
        return <FeedbackPage />;
      case "attendance":
        return <AttendancePage />;
      case "tournament":
        return <TournamentPage />;
      case "luckyspin":
        return <LuckySpinPage />;
      case "promotion":
        return <PromotionPage />;
      case "schedule":
        return <SchedulePage />;
      case "warninginfo":
        return <WarningInfoPage />;
      case "classlist":
        return <ClassListPage />;
      case "practice":
        return <PracticePage />;
      case "testinfo":
        return <TestInfoPage />;
      case "videocourse":
        return <VideoCoursePage />;
      case "library":
        return <LibraryPage />;
      case "faq":
        return <FAQPage />;
      case "examset":
        return <ExamSetPage />;
      case "activationcodelist":
        return <ActivationCodeListPage />;
      case "reviewlist":
        return <ReviewListPage />;
      default:
        return <div>Chọn một tab</div>;
    }
  };

  return (
    <>
      <Header onHamburgerClick={() => setShowSidebar(!showSidebar)} />
      <div className="flex pt-20 h-screen bg-gray-100">
        {/* Sidebar: hiện dạng overlay trên mobile, luôn hiện trên md */}
        <div
          className={`z-20 transition-transform duration-300 md:static fixed top-20 left-0 h-screen ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
          style={{ height: "calc(100vh - 80px)" }}
        >
          <div className="md:block hidden h-full overflow-y-auto">
            <Sidebar onTabChange={setSelectedTab} selectedTab={selectedTab} />
          </div>
          <div className="md:hidden block h-full overflow-y-auto">
            {showSidebar && <Sidebar onTabChange={setSelectedTab} selectedTab={selectedTab} />}
          </div>
        </div>
        {/* Main content */}
        <main
          className="flex-1 p-4 h-full overflow-y-auto"
          style={{ height: "calc(100vh - 80px)" }}
        >
          {renderContent()}
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
