import EmailForm from "@/components/about/email-form";

export default function AboutPage() {
  return (
    <section className="mt-32">
      <article className="prose prose-zinc">
        <h1 className="text-center">ABOUT US</h1>

        <p>
          Welcome to our sustainable fashion platform, dedicated to creating a
          positive impact in the fashion industry in Indonesia. We believe that
          fashion is not just about style but also about responsibility towards
          the environment and society. As awareness of the environmental impact
          of the fashion industry grows, we are here to offer innovative and
          eco-friendly solutions.
        </p>

        <h2>Our mission</h2>

        <p>
          Our mission is to reduce fashion waste by extending the lifecycle of
          clothing through our buy and sell pre-loved clothing and clothing swap
          system features. Additionally, we provide educational content to help
          people understand the importance of sustainable fashion and how they
          can contribute to positive change.
        </p>

        <h2>What we offer</h2>

        <ul>
          <li>
            <strong>Buy & Sell Pre-Loved Clothing</strong>: Helping users sell
            and purchase second-hand clothing in an easy and secure way.
          </li>
          <li>
            <strong>Clothing Swap</strong>: Allowing users to exchange clothing
            with others, extending the life of garments without the need to buy
            new ones.
          </li>
          <li>
            <strong>Sustainable Fashion Education</strong>: Articles and
            practical guides to raise awareness and provide solutions for
            reducing the environmental impact of the fashion industry.
          </li>
        </ul>

        <h2>Why join us?</h2>

        <p>
          We aim to build a community that cares about the environment and
          understands the importance of responsible fashion consumption. By
          joining our platform, you contribute to reducing textile waste and
          supporting the transition to a more sustainable fashion industry.
        </p>

        <p>
          Together, we can create a greener and more responsible fashion future.
          Be part of this movement and start making a change today!
        </p>

        <h2 id="contact">Contact</h2>

        <p>
          If you have any questions or feedback, feel free to contact us through
          this form:
        </p>

        <EmailForm />
      </article>
    </section>
  );
}
