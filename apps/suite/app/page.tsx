import Image from 'next/image';
import { Navbar } from '../components';
import traveling_img from '@repo/ui/assets/traveling.svg';

export default function Web() {
  return (
    <>
      <Navbar />
      <main className="home__container">
        <div className="home__title">
          <h1 className="heading--1">
            Simplify your travels, maximize your experiences
          </h1>
          <h5 className="subtitle--1">
            Destination, budget, activities, and more - all integrated into a
            single app
          </h5>
        </div>
        <Image
          src={traveling_img}
          alt="traveling image"
          width={550}
          height={550}
        />
      </main>
    </>
  );
}
