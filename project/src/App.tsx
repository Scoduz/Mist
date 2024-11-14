import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AiSection from './components/AiSection';
import CloudSync from './components/CloudSync';
import Footer from './components/Footer';
import DownloadModal from './components/Download';
import Nav from './components/Nav';

function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav onDownload={() => setIsDownloadOpen(true)} />
      <Hero onDownload={() => setIsDownloadOpen(true)} />
      <Features />
      <AiSection />
      <CloudSync />
      <Footer founderInfo={{
        name: "Sriyansh Chandragiri",
        age: 12,
        date: "Aug 8, 2012",
        social: "@scoduz"
      }} />
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </div>
  );
}

export default App;