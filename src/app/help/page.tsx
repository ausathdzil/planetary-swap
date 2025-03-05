import {
  Camera,
  Repeat,
  ShoppingBag,
  Star,
  Users,
  Award,
  TrendingUp,
  ThumbsUp,
  Calendar,
  UserPlus,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HelpPage() {
  return (
    <div className="container mx-auto mt-16 px-4 py-16 max-w-5xl">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">HOW IT WORKS</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <h3 className="text-xl md:text-2xl mb-6">
          Your guide to trading fashion across the universe
        </h3>
        <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
          Planetary Swap is revolutionizing the way we think about fashion by
          creating a sustainable, community-driven marketplace for clothing
          exchange. Our platform makes it easy to refresh your wardrobe while
          reducing waste and earning rewards.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          The Interstellar Swapping Process
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Camera className="h-8 w-8 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">List your items</h3>
            <p>
              Take photos of your clothing items, add descriptions, and set your
              swap preferences.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Repeat className="h-8 w-8 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Connect & exchange</h3>
            <p>
              Match with other users, arrange swaps, and sell items to earn
              Cosmic Points.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <ShoppingBag className="h-8 w-8 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">Earn & explore</h3>
            <p>
              Use earned Cosmic Points to shop for secondhand clothings in the
              marketplace.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <Card className="bg-primary/5 border-none">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-10 w-10 text-primary mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">
                The Cosmic Points Economy
              </h2>
            </div>

            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              Our platform operates on a unique points system called Cosmic
              Points. Unlike traditional marketplaces, Planetary Swap uses
              Cosmic Points to create a balanced ecosystem where everyone can
              participate regardless of their budget.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  How to Earn Cosmic Points
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Camera className="h-3 w-3 text-primary" />
                    </div>
                    <span>List quality items for swap or sale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Repeat className="h-3 w-3 text-primary" />
                    </div>
                    <span>Complete successful trades</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <ThumbsUp className="h-3 w-3 text-primary" />
                    </div>
                    <span>Receive positive reviews from other users</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Calendar className="h-3 w-3 text-primary" />
                    </div>
                    <span>
                      Participate in monthly sustainability challenges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <UserPlus className="h-3 w-3 text-primary" />
                    </div>
                    <span>Refer friends to join the platform</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <ShoppingBag className="h-6 w-6 text-primary mr-2" />
                  Using your points
                </h3>
                <p className="mb-4">
                  Cosmic Points can be used to &ldquo;purchase&ldquo; items from other
                  users, boost your listings for more visibility, or unlock
                  premium features like priority shipping and advanced filtering
                  options.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <ShoppingBag className="h-4 w-4 mr-2" /> Purchase items
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" /> Boost listings
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Rocket className="h-4 w-4 mr-2" /> Premium features
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center justify-center">
          <Users className="h-7 w-7 text-primary mr-3" />
          Ready to join the fashion revolution?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Planetary Swap is more than just a marketplace—it&apos;s a community of
          fashion enthusiasts committed to sustainable consumption. By joining,
          you&apos;re not only refreshing your wardrobe but also making a positive
          impact on the planet.
        </p>
        <Button size="lg" className="group">
          Get Started Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </section>
    </div>
  );
}
