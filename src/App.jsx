import "./App.css";
import ChooseUs from "./layouts/ChooseUs";
import FirstLesson from "./layouts/FirstLesson";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import Packages from "./layouts/Packages";
import Questions from "./layouts/Questions";
import Quizzes from "./layouts/Quizzes";
import Teachers from "./layouts/Teachers";
import WhyTrust from "./layouts/WhyTrust";

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Hero />
      <Packages />
      <ChooseUs />
      <Teachers/>
      <WhyTrust />
      <Quizzes/>
      <FirstLesson />
      <Questions />
      <Footer/>
    </div>
  );
}

export default App;
