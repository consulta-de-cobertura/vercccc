import React from 'react';

interface DifferentialsProps {
  onRedirect?: () => void;
}

const Differentials: React.FC<DifferentialsProps> = ({ onRedirect }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Differentials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Quality Service</h3>
            <p className="text-gray-600">
              We provide exceptional service quality that exceeds expectations.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our team consists of experienced professionals dedicated to your success.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock support to ensure you're never left without assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;