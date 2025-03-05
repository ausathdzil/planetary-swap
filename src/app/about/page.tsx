import EmailForm from '@/components/about/email-form';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Recycle, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl mt-16">
      <section className="flex flex-col items-center text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h1>
        <div className="w-24 h-1 bg-primary mb-8"></div>
        <p className="text-lg md:text-xl max-w-3xl text-muted-foreground">
          Welcome to our sustainable fashion platform, dedicated to creating a
          positive impact in the fashion industry in Indonesia.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            Our mission is to reduce fashion waste by extending the lifecycle of
            clothing through our buy and sell pre-loved clothing and clothing
            swap system features. Additionally, we provide educational content
            to help people understand the importance of sustainable fashion and
            how they can contribute to positive change.
          </p>
          <Link href="#">
            <Button variant="outline" className="group cursor-pointer">
              Learn more about our impact
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/our-mission.jpg"
            alt="Sustainable fashion"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <ShoppingBag className="h-12 w-12 text-primary flex-shrink-0 mx-auto md:mx-0 mb-2 md:mb-0 md:mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left">
                Buy & Sell Pre-Loved Clothing
              </h3>
              <p>
                Helping users sell and purchase second-hand clothing in an easy
                and secure way.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Recycle className="h-12 w-12 text-primary flex-shrink-0 mx-auto md:mx-0 mb-2 md:mb-0 md:mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left">
                Clothing Swap
              </h3>
              <p>
                Allowing users to exchange clothing with others, extending the
                life of garments without the need to buy new ones.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <BookOpen className="h-12 w-12 text-primary flex-shrink-0 mx-auto md:mx-0 mb-2 md:mb-0 md:mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left">
                Sustainable Fashion Education
              </h3>
              <p>
                Articles and practical guides to raise awareness and provide
                solutions for reducing the environmental impact of the fashion
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/community.jpg"
            alt="Community of sustainable fashion enthusiasts"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
          <p className="text-lg mb-6">
            We aim to build a community that cares about the environment and
            understands the importance of responsible fashion consumption. By
            joining our platform, you contribute to reducing textile waste and
            supporting the transition to a more sustainable fashion industry.
          </p>
          <p className="text-lg mb-6">
            Together, we can create a greener and more responsible fashion
            future. Be part of this movement and start making a change today!
          </p>
          <Link href="/register">
            <Button className="cursor-pointer">Join our community</Button>
          </Link>
        </div>
      </section>

      <section id="contact" className="border rounded-xl p-8 md:p-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-center mb-8">
            If you have any questions or feedback, feel free to contact us
            through this form:
          </p>
          <EmailForm />
        </div>
      </section>
    </div>
  );
}
