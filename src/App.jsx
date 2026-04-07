import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    // LAYOUT UTAMA: Sidebar (Kiri) + Chat (Kanan)
    <div className="flex h-screen w-full">
      <Sidebar />
      <ChatInterface />
    </div>
  );
}

export default App;