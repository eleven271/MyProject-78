// @ts-ignore;
import React from 'react';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Showcase } from '@/components/Showcase';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
export default function GuziCollectionWebsite(props) {
  return <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>;
}