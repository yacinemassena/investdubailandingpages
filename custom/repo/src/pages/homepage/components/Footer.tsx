import { homepageConfig } from '../config';

const { footer } = homepageConfig;

export const Footer = () => {
  return (
    <footer className="py-8 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">{footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footer.links.map((link, i) => (
              <a 
                key={i}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
