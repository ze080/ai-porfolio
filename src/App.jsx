import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-5xl font-bold text-purple-400 mb-4">Zayed Binjad</h1>
      <p className="text-xl text-gray-300 mb-8">Aspiring AI Engineer | Passionate about ML, Neural Networks & Innovation 🤖</p>
      
      <section className="w-full max-w-3xl bg-gray-800 rounded-2xl p-6 shadow-lg mt-6">
        <h2 className="text-2xl font-semibold text-white mb-4">🧠 Projects Coming Soon...</h2>
        <p className="text-gray-400">Stay tuned — exciting AI projects are on the way!</p>
      </section>

      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Zayed Binjad. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
