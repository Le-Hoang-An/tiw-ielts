import BackgroundLayout from "../components/BackgroundLayout";
import schoolImg from "../assets/school_img.png";

function Forgot() {
  return (
    <BackgroundLayout bgImage={schoolImg}>
      <div className="text-2xl font-semibold bg-white rounded-2xl px-8 py-6 shadow-lg">
        Quên thì thua rồi
      </div>
    </BackgroundLayout>
  );
}

export default Forgot;