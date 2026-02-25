import React from 'react';

const benefits = [
  {
    title: 'Events',
    description: 'Access insider exhibitions and events, as well as talks with art market leaders.',
    image: 'https://picsum.photos/seed/art-event/800/600',
  },
  {
    title: 'Networking',
    description: 'Meet doctors, lawyers, CEOs, and other professionals who you can meet that have like-minded interests',
    image: 'https://picsum.photos/seed/networking/800/600',
  },
  {
    title: 'Investment Advice',
    description: 'Complimentary consultation by representatives on how art can potentially improve the performance of your portfolio.',
    image: 'https://picsum.photos/seed/advice/800/600',
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Benefits of Membership*</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With no cost to join, our 70K+ members comprised of CEOs, Lawyers, Doctors, and Business Leaders enjoy the following advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={benefit.image} 
                alt={benefit.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-1 bg-brand-blue rounded-full" />
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl bg-white rounded-full p-1 shadow-2xl border border-gray-100">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 px-6 py-3 text-black outline-none rounded-full"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue-hover transition-colors">
              Get Started
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full shadow-md border border-gray-100">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md border border-gray-100">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
