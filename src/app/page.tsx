import { Heading } from 'common/typography/Heading';

const Home = () => {
  return (
    <>
      <figure className="w-screen min-h-[40rem] flex items-center justify-center p-10 bg-cyan-100">
        <Heading>Shopify Webshop Op Maat</Heading>
      </figure>

      <section className="py-20 max-w-4xl mx-auto">
        <div className="w-full flex">
          <article className="max-w-[32rem] mb-40">
            <Heading
              as="h2"
              className="mb-4"
            >
              Op zoek naar een goedkope webshop op maat?
            </Heading>
            <p className="mb-4">
              Hier ben je aan het juiste adres! Verkoop snel je gewenste spullen met een volledig op
              maat gemaakte Shopify webshop.
            </p>
          </article>
        </div>

        <div className="w-full flex justify-end">
          <article className="max-w-[32rem] mb-40">
            <Heading
              as="h2"
              className="mb-4"
            >
              Wat is Shopify?
            </Heading>
            <p className="mb-4">
              Hier ben je aan het juiste adres! Verkoop snel je gewenste spullen met een volledig op
              maat gemaakte Shopify webshop.
            </p>
          </article>
        </div>

        <div className="w-full flex justify-center">
          <article className="max-w-[32rem]">
            <Heading
              as="h2"
              className="mb-4"
            >
              Vrijblijvend een webshop aanvragen
            </Heading>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
