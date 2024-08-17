const About = () => {
  return (
    <div>
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-white text-center mb-16">
            About Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-white text-justify">
                Papa Trends is a leading platform dedicated to providing
                insightful and up-to-date information on the latest shopping
                tools and trends. Our team of experts is passionate about
                discovering the best products and sharing that knowledge with
                you, our valued audience.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-white text-justify">
                At Papa Trends, our mission is to make shopping smarter, easier,
                and more enjoyable by connecting you with the most innovative
                and trending products in the market. We aim to empower consumers
                with the information they need to make informed purchasing
                decisions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-4">
                What We Do
              </h2>
              <p className="text-lg text-white text-justify">
                We research, review, and recommend a wide range of shopping
                tools, from the latest tech gadgets to essential everyday items.
                Our content is meticulously curated to ensure that you have
                access to only the best products, backed by our honest and
                transparent evaluations.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Our Values
              </h2>
              <ul className="list-disc list-inside text-lg text-white text-justify ">
                <li className="mb-2">
                  <strong>Integrity:</strong> We prioritize honesty and
                  transparency in our recommendations.
                </li>
                <li className="mb-2">
                  <strong>Innovation:</strong> We constantly explore new
                  products and trends to keep our content fresh and relevant.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-white text-justify">
              We invite you to explore Papa Trends and become part of our
              growing community of informed shoppers. Let us help you discover
              the tools that will make your shopping experience better than
              ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
