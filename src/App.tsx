import { useState } from 'react';
import EntryScreen from './components/EntryScreen';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [showEntry, setShowEntry] = useState(true);

  return (
    <>
      {showEntry ? (
        <EntryScreen onComplete={() => setShowEntry(false)} />
      ) : (
        <Layout>
          <Hero />
          <Profile />
          <Work />
          <Contact />
        </Layout>
      )}
    </>
  );
}

export default App;
