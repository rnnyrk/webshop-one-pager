import { Box } from 'common/layout/Box';
import { Heading } from 'common/typography/Heading';

const Home = () => {
  return (
    <>
      <figure className="w-screen min-h-[40rem] flex items-center justify-center p-10 bg-cyan-100">
        <Heading>Shopify Webshop Op Maat</Heading>
      </figure>

      <section className="py-20 max-w-4xl mx-auto">
        <div className="relative w-full flex">
          <article className="relative z-20 max-w-[32rem] py-40 ml-40">
            <Heading
              as="h2"
              className="mb-6"
            >
              Op zoek naar een goedkope webshop op maat?
            </Heading>
            <p>
              Hier ben je aan het juiste adres! Verkoop snel je gewenste spullen met een volledig op
              maat gemaakte Shopify webshop.
            </p>
          </article>

          <Box className="z-10 top-2/4 -left-12 -translate-y-2/4" />
        </div>

        <div className="relative w-full flex justify-end">
          <article className="relative z-20 max-w-[32rem] py-40 text-right mr-40">
            <Heading
              as="h2"
              className="mb-6"
            >
              Wat is Shopify?
            </Heading>
            <p>
              Hier ben je aan het juiste adres! Verkoop snel je gewenste spullen met een volledig op
              maat gemaakte Shopify webshop.
            </p>
          </article>

          <Box className="z-10 top-2/4 -right-12 -translate-y-2/4" />
        </div>

        <div className="w-full flex justify-center">
          <article className="max-w-[32rem] pt-40">
            <Heading as="h2">Vrijblijvend een webshop aanvragen</Heading>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
