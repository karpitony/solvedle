import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Game from "./components/game/Game";
import HowToPlayBox from "./components/how-to-play/HowToPlayBox";

function App() {
  return (
    <div>
      <Header />

      <main className="min-h-[90vh] flex justify-center">
        <div className="max-w-[1024px] flex justify-between gap-16">
          <div className="flex flex-col items-center">
            <Game />
          </div>
          <HowToPlayBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
