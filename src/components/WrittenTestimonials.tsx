import React from 'react';

interface WrittenTestimonialsProps {
  onRedirect?: () => void;
}

const WrittenTestimonials: React.FC<WrittenTestimonialsProps> = ({ onRedirect }) => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Customer",
      content: "Excellent service! Highly recommend to everyone.",
      rating: 5
    },
    {
      id: 2,
      name: "João Santos",
      role: "Client",
      content: "Professional team and outstanding results.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "User",
      content: "Amazing experience from start to finish.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WrittenTestimonials;