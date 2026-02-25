import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-white text-black border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-xl font-bold tracking-[0.2em] uppercase">
              Master<span className="border border-black px-1 ml-0.5">w</span>orks
            </span>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">How It Works</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Transact With Us</a></li>
                <li><a href="#" className="hover:underline">Financial Advisors</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Trading</a></li>
                <li><a href="#" className="hover:underline">Price Database</a></li>
                <li><a href="#" className="hover:underline">Art Challenge</a></li>
                <li><a href="#" className="hover:underline">IRA Investing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Disclosure</a></li>
              </ul>
            </div>
          </div>

          <div className="max-w-xs space-y-2">
            <p className="text-sm font-bold">Masterworks, LLC</p>
            <p className="text-sm text-gray-500">1 World Trade Center, 57th Floor, New York, NY 10007.</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-[10px] text-gray-400 leading-relaxed">
          <p>
            Masterworks is “testing the waters” under Regulation A under the Securities Act of 1933. This process allows companies to determine whether there is interest in an eventual offering of its securities. Masterworks is not under any obligation to make an offering under Regulation A. It may choose to make an offering to some, all, or none of the persons who indicate an interest in investing, and at that time it will offer securities only pursuant to offering circulars or other offering materials that have been qualified by the SEC. No money or other consideration is being solicited, and if sent in response, will not be accepted. No offer to buy the securities can be accepted and no part of the purchase price can be received until the offering statement is qualified, and any such offer may be withdrawn or revoked, without obligation or commitment of any kind, at any time before notice of its acceptance given after the qualification date. An indication of interest involves no obligation or commitment of any kind.
          </p>
        </div>
      </div>
    </footer>
  );
};
