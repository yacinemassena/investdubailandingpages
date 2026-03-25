import { Camera, Phone, Video, CheckCheck } from 'lucide-react';

export const WhatsAppMockup = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-[#EFEAE2] border-4 border-gray-800 shadow-2xl aspect-[4/3] md:aspect-auto md:h-[400px] flex flex-col font-sans max-w-sm mx-auto">
      {/* Status Bar Mock */}
      <div className="bg-[#075E54] w-full h-6 flex justify-between items-center px-4 text-white/90 text-body">
        <span>09:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-white/90" />
          <div className="w-3 h-3 rounded-full bg-white/90" />
          <div className="w-4 h-3 rounded-sm bg-white/90" />
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#075E54] text-white p-3 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-1.jpg" alt="Villa" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-body leading-tight">Jumeirah Islands Villa - Updates</h3>
            <p className="text-body text-white/70">You, Sarah, Alex, +4 others</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Video className="w-5 h-5 text-white" />
          <Phone className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover bg-center">
        {/* Date badge */}
        <div className="flex justify-center">
          <span className="bg-[#E1F3FB] text-gray-600 text-body px-3 py-1 rounded-lg shadow-sm">
            Today
          </span>
        </div>

        {/* Message from Team */}
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-white rounded-lg rounded-tl-none p-2 shadow-sm text-body text-gray-800">
            <span className="text-[#075E54] font-semibold text-body mb-1 block">InvestDubai Team</span>
            <img src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-25.jpg" alt="Construction" className="w-full h-32 object-cover rounded mb-2" />
            Hi everyone! 🔨 Demolition is complete and the new layout is starting to take shape. The team is currently working on the plumbing.
            <div className="text-body text-gray-400 text-right mt-1">10:30</div>
          </div>
        </div>

        {/* Message from Investor */}
        <div className="flex flex-col items-end w-full">
          <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none p-2 shadow-sm text-body text-gray-800 max-w-[85%]">
            Looks amazing! Thanks for the update. When does the flooring start?
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-body text-gray-500">11:15</span>
              <CheckCheck className="w-3 h-3 text-[#53bdeb]" />
            </div>
          </div>
        </div>

        {/* Reply from Team */}
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-white rounded-lg rounded-tl-none p-2 shadow-sm text-body text-gray-800">
            <span className="text-[#075E54] font-semibold text-body mb-1 block">InvestDubai Team</span>
            Flooring materials arrive next Tuesday, installation begins Wednesday! 🚀
            <div className="text-body text-gray-400 text-right mt-1">11:20</div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#F0F0F0] p-2 flex items-center gap-2">
        <div className="bg-white flex-1 rounded-full px-4 py-2 flex items-center justify-between text-gray-400 text-body">
          <span>Message</span>
          <Camera className="w-5 h-5" />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <svg viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5 ml-1">
            <path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
