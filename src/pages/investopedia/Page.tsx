import { useDocumentHead } from '../../hooks/useDocumentHead';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Investopedia } from './Investopedia';

export default function InvestopediaPage() {
  useDocumentHead({
    title: 'Investopedia | Dubai Real Estate Investment Guides | InvestDubai',
    description: 'Deep dives, market analysis, and educational guides on Dubai real estate investing. House flipping, ROI, SPVs, taxation, neighborhoods, and more.',
    canonical: 'https://www.investdubai.com/investopedia',
  });
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
