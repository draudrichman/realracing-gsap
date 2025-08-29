import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section id="about" className="z-0 min-h-screen bg-black" />
    </main>
  );
}

export default App;