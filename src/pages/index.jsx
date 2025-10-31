// @ts-ignore;
import React from 'react';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Showcase } from '@/components/Showcase';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
export default function Index(props) {
  return <div className="min-h-screen bg-gradient-to-br from-[#F7CAC9] via-[#F4C2C1] to-[#92A8D1]">
    <Header />
    <Hero />
    <About />
    <Features />
    <Showcase />
    <Contact />
    <Footer />
  </div>;
}