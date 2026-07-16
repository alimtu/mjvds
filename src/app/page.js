import { Hero } from '@/components/villa/hero';
import { Gallery } from '@/components/villa/gallery';
import { Terrace } from '@/components/villa/terrace';
import { Amenities } from '@/components/villa/amenities';
import { StayInfo } from '@/components/villa/stay-info';
import { Location } from '@/components/villa/location';
import { Footer } from '@/components/villa/footer';
import { CallBar } from '@/components/villa/call-bar';

export default function Home() {
  return (
    <main className="bg-cream">
      <Hero />
      <Gallery />
      <Terrace />
      <Amenities />
      <StayInfo />
      <Location />
      <Footer />
      <CallBar />
    </main>
  );
}
