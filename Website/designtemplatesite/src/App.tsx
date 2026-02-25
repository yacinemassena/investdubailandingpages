/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChartSection } from './components/ChartSection';
import { ReturnsGrid } from './components/ReturnsGrid';
import { MarketOpportunity } from './components/MarketOpportunity';
import { Benefits } from './components/Benefits';
import { IRASection } from './components/IRASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <ChartSection />
        <ReturnsGrid />
        <MarketOpportunity />
        <Benefits />
        <IRASection />
      </main>
      <Footer />
    </div>
  );
}
