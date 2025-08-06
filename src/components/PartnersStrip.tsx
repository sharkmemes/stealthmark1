export const PartnersStrip = () => {
  const partners = [
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
    { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com' },
    { name: 'Spotify', logo: 'https://logo.clearbit.com/spotify.com' },
  ];

  return (
    <section className="py-12 bg-brand-light-gray">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold text-brand-gray mb-8">
          Trusted by Leading Organizations
        </h3>
        
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap opacity-60 hover:opacity-80 transition-opacity">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-8 md:h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};