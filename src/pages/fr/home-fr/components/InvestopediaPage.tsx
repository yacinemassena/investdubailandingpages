import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Investopedia } from './Investopedia';

export default function InvestopediaPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar dark />
      <main>
        <Investopedia />
      </main>
      <Footer dark />
    </div>
  );
}
