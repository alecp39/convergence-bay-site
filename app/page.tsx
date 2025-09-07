// @ts-nocheck
'use client';
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-rose-50 text-slate-800">
      <SiteHeader />
      <Landing />
      <ConvergenceBay />
      <CapeElephant />
      <FairRoots />
      <PremiumWines />
      <Contact />
      <SiteFooter />
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-lg">Convergence Bay USA</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#convergence" className="hover:text-slate-900 text-slate-600 transition">Convergence Bay</a>
            <a href="#capeelephant" className="hover:text-slate-900 text-slate-600 transition">Cape Elephant</a>
            <a href="#fairroots" className="hover:text-slate-900 text-slate-600 transition">Fair Roots</a>
            <a href="#premium" className="hover:text-slate-900 text-slate-600 transition">Premium Wines</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600 transition">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

function Landing() {
  return (
    <section id="home" className="relative overflow-hidden">
      <Container>
        <div className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Convergence Bay USA</h1>
            <p className="mt-4 text-lg text-slate-600">A masterbrand uniting approachable to super-premium wines with a strong sense of place.</p>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl px-6 bg-sky-600 hover:bg-sky-700">Explore Our Wines</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img src="/images/2CA0CB75-66B2-4A6E-9203-6C1E247AF563.png" alt="Landing visual" className="rounded-2xl shadow-xl bg-white" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function SectionTitle({ eyebrow, title, subtitle, id }: { eyebrow?: string; title: string; subtitle?: string; id?: string; }) {
  return (
    <div id={id} className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-xs uppercase tracking-widest text-slate-500">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function ConvergenceBay() {
  return (
    <section id="convergence" className="py-16 sm:py-24">
      <Container>
        <SectionTitle title="Convergence Bay" subtitle="Popular premium range evoking Cape West Coast life—quality, typicity, and value." />
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/2CA0CB75-66B2-4A6E-9203-6C1E247AF563.png" alt="Convergence Bay Bottle Lineup" className="rounded-2xl shadow-lg bg-white" />
          <div className="text-slate-700 leading-relaxed">
            <ul className="space-y-2">
              <li><span className="font-medium">Product characteristics:</span> Solid varietals with strong QPR.</li>
              <li><span className="font-medium">Target segment:</span> Popular premium.</li>
              <li><span className="font-medium">Target market:</span> Engaged explorers, social newbies, kitchen casuals.</li>
              <li><span className="font-medium">Proposition:</span> Captures imagination with West Coast lifestyle at exceptional value.</li>
            </ul>
            <details className="mt-4">
              <summary className="cursor-pointer font-medium text-emerald-700">View Tasting Notes</summary>
              <p className="mt-2 text-sm">Crisp Sauvignon Blanc, fresh Chenin, smooth Cab/Merlot, bold Shiraz, classic Pinotage.</p>
            </details>
          </div>
        </div>
        <div className="mt-12">
          <Card className="rounded-2xl overflow-hidden">
            <CardHeader><CardTitle>Brand Assets</CardTitle></CardHeader>
            <CardContent>
              <details>
                <summary className="cursor-pointer font-medium text-sky-700">View Brand Assets</summary>
                <img src="/images/6BAFE256-4EF1-4D6B-9CA7-42C0C2F87D91.png" alt="Convergence Bay Brand Assets" className="mt-2 w-full object-contain bg-white rounded-lg" />
              </details>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function CapeElephant() {
  return (
    <section id="capeelephant" className="py-16 sm:py-24">
      <Container>
        <SectionTitle title="Cape Elephant" subtitle="Entry-level, easy-drinking wines delivering everyday value." />
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/45E6B245-A6D1-4FE7-9AC0-29AFA30A875D.png" alt="Cape Elephant Bottle Lineup" className="rounded-2xl shadow-lg bg-white" />
          <div className="text-slate-700 leading-relaxed">
            <ul className="space-y-2">
              <li><span className="font-medium">Product characteristics:</span> Large production, approachable.</li>
              <li><span className="font-medium">Target segment:</span> Entry level.</li>
              <li><span className="font-medium">Target market:</span> Bargain hunters.</li>
              <li><span className="font-medium">Proposition:</span> Friendly flavors at a friendly price.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <Card className="rounded-2xl overflow-hidden">
            <CardHeader><CardTitle>Brand Assets</CardTitle></CardHeader>
            <CardContent>
              <details>
                <summary className="cursor-pointer font-medium text-sky-700">View Brand Assets</summary>
                <img src="/images/933C593F-1149-45F5-868E-ADB2078E0C24.png" alt="Cape Elephant Brand Assets" className="mt-2 w-full object-contain bg-white rounded-lg" />
              </details>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function FairRoots() {
  return (
    <section id="fairroots" className="py-16 sm:py-24">
      <Container>
        <SectionTitle title="Fair Roots" subtitle="Premium wines with conscience and terroir—Fairtrade-minded and quality driven." />
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <img src="/images/D5B3B44D-0852-4674-B093-3FCCB41A8633.png" alt="FairRoots Bottle Lineup" className="rounded-2xl shadow-lg bg-white" />
          <div className="text-slate-700 leading-relaxed">
            <ul className="space-y-2">
              <li><span className="font-medium">Product characteristics:</span> Clear sense of place, reliable quality.</li>
              <li><span className="font-medium">Target segment:</span> Premium.</li>
              <li><span className="font-medium">Target market:</span> Engaged explorers, social newbies, healthy security seekers.</li>
              <li><span className="font-medium">Proposition:</span> Wines with a conscience—made by those who care, for those who care.</li>
            </ul>
            <details className="mt-4">
              <summary className="cursor-pointer font-medium text-emerald-700">View Tasting Notes</summary>
              <p className="mt-2 text-sm">Fresh Sauv Blanc, structured Chenin, velvety Merlot, earthy Pinotage, spicy Shiraz, classic Cab Sauv.</p>
            </details>
          </div>
        </div>
        <div className="mt-12">
          <Card className="rounded-2xl overflow-hidden">
            <CardHeader><CardTitle>Brand Assets</CardTitle></CardHeader>
            <CardContent>
              <details>
                <summary className="cursor-pointer font-medium text-sky-700">View Brand Assets</summary>
                <img src="/images/E74B4276-2471-4FC3-B455-AA30D7A1C87B.png" alt="FairRoots Brand Assets" className="mt-2 w-full object-contain bg-white rounded-lg" />
              </details>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function PremiumWines() {
  return (
    <section id="premium" className="py-16 sm:py-24">
      <Container>
        <SectionTitle title="Our Premium Wines" subtitle="Sweef Sauvignon Blanc, Erfgenaam Chenin Blanc, and The Fog Merlot form the pinnacle of our collection." />
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl overflow-hidden">
            <img src="/images/30C48801-4888-42B4-B98C-9D899BFB41CC.png" alt="Sweef Bottle" className="w-full h-60 object-contain bg-white" />
            <CardHeader><CardTitle>Sweef</CardTitle></CardHeader>
            <CardContent className="text-slate-700">
              Crisp Sauvignon Blanc with fruit and minerality.
              <details className="mt-3">
                <summary className="cursor-pointer font-medium text-sky-700">View Brand Assets</summary>
                <img src="/images/924773AF-38EA-4A0B-8A24-89863F6DA9F1.png" alt="Sweef Brand Assets" className="mt-2 w-full object-contain bg-white rounded-lg" />
              </details>
              <details className="mt-3">
                <summary className="cursor-pointer font-medium text-emerald-700">View Tasting Notes</summary>
                <p className="mt-2 text-sm">Bright citrus, gooseberry, mineral finish.</p>
              </details>
            </CardContent>
          </Card>
          <Card className="rounded-2xl overflow-hidden">
            <img src="/images/A2315C94-440B-4E35-AA7E-3F8637D5F2B5.png" alt="Erfgenaam Bottle" className="w-full h-60 object-contain bg-white" />
            <CardHeader><CardTitle>Erfgenaam</CardTitle></CardHeader>
            <CardContent className="text-slate-700">
              Old-vine Chenin Blanc with depth and structure.
              <details className="mt-3">
                <summary className="cursor-pointer font-medium text-sky-700">View Brand Assets</summary>
                <img src="/images/9A731EAF-19A5-482F-AF81-BBED7D27F274.png" alt="Erfgenaam Brand Assets" className="mt-2 w-full object-contain bg-white rounded-lg" />
              </details>
              <details className="mt-3">
                <summary className="cursor-pointer font-medium text-emerald-700">View Tasting Notes</summary>
                <p className="mt-2 text-sm">Pear, quince, honeycomb; spice and acidity.</p>
              </details>
            </CardContent>
          </Card>
          <Card className="rounded-2xl overflow-hidden">
            <img src="/images/9A731EAF-19A5-482F-AF81-BBED7D27F274.png" alt="The Fog Bottle" className="w-full h-60 object-contain bg-white" />
            <CardHeader><CardTitle>The Fog</CardTitle></CardHeader>
            <CardContent className="text-slate-700">
              Elegant cool-climate Merlot—refined and layered.
              <details className="mt-3">
                <summary className="cursor-pointer font-medium text-sky-700">View Brand Assets</summary>
                <img src="/images/58DD7554-41D0-444E-9759-53B16B529192.png" alt="The Fog Brand Assets" className="mt-2 w-full object-contain bg-white rounded-lg" />
              </details>
              <details className="mt-3">
                <summary className="cursor-pointer font-medium text-emerald-700">View Tasting Notes</summary>
                <p className="mt-2 text-sm">Plum, cassis, subtle oak; silky tannins.</p>
              </details>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <SectionTitle eyebrow="Contact" title="Let's talk about your project" subtitle="Drop a message and we'll get back to you within 1–2 business days." />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Send a message</CardTitle></CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <Input placeholder="Your name" required />
                <Input type="email" placeholder="Your email" required />
                <Textarea placeholder="How can we help?" rows={5} required />
                <Button type="submit" className="rounded-2xl bg-emerald-600 hover:bg-emerald-700">Send</Button>
              </form>
              <p className="mt-3 text-xs text-slate-500">* This demo form is static. We can wire it to email later.</p>
            </CardContent>
          </Card>
          <div className="grid gap-4">
            <InfoRow icon={Mail} label="Email" value="brianmichaelpowell@gmail.com" />
            <InfoRow icon={Phone} label="Phone" value="215-290-3556" />
            <InfoRow icon={MapPin} label="Location" value="Philadelphia, PA" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string; }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-white p-4">
      <Icon className="h-5 w-5" />
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-slate-600">{value}</p>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} Convergence Bay USA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#convergence" className="hover:text-slate-800">Convergence Bay</a>
            <a href="#capeelephant" className="hover:text-slate-800">Cape Elephant</a>
            <a href="#fairroots" className="hover:text-slate-800">Fair Roots</a>
            <a href="#premium" className="hover:text-slate-800">Premium Wines</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
