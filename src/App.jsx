import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Game from "./components/game/Game";
import HowToPlayBox from "./components/how-to-play/HowToPlayBox";

function App() {
  return (
    <div>
      <Header />

      <main className="min-h-[90vh] mt-16 flex justify-center">
        <div className="w-[40%]"></div>
        <div className="max-w-[768px] w-full flex justify-center gap-16">
          <div className="flex flex-col items-center">
            <Game />
          </div>
        </div>
        <div className="w-[40%] flex justify-start">
          <HowToPlayBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
