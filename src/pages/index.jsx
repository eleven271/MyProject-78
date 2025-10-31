// @ts-ignore;
import React from 'react';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
export default function Home(props) {
  return <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>;
}