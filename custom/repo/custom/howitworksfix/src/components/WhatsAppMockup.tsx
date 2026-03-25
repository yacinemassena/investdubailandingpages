import { motion } from 'motion/react';
import { Phone, Video, MoreVertical, Paperclip, Camera, Mic } from 'lucide-react';

export const WhatsAppMockup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-[280px] h-[580px] bg-[#E5DDD5] rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-gray-900 relative flex flex-col"
    >
      {/* Header */}
      <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Group" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-semibold text-[15px]">Palm Villa Project</div>
            <div className="text-[11px] text-white/80">12 participants</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Video className="w-5 h-5" />
          <Phone className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-[url('https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/wa-bg.png')] bg-cover">
        <div className="bg-[#E1F5FE] self-start max-w-[85%] rounded-lg p-2 shadow-sm relative">
          <div className="text-[12px] font-bold text-[#075E54] mb-1">Project Manager</div>
          <div className="text-[14px] text-gray-800 leading-snug">
            Good morning team! Demolition phase is complete. We are starting the new layout construction today.
          </div>
          <div className="text-[10px] text-gray-500 text-right mt-1">09:41</div>
        </div>

        <div className="bg-[#E1F5FE] self-start max-w-[85%] rounded-lg p-1 shadow-sm relative">
          <div className="text-[12px] font-bold text-[#075E54] mb-1 px-1">Project Manager</div>
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Construction" 
            className="w-full h-32 object-cover rounded-md"
          />
          <div className="text-[10px] text-gray-500 text-right mt-1 px-1">09:42</div>
        </div>

        <div className="bg-[#DCF8C6] self-end max-w-[85%] rounded-lg p-2 shadow-sm relative">
          <div className="text-[14px] text-gray-800 leading-snug">
            Looks great! Are we still on track for the plumbing next week?
          </div>
          <div className="text-[10px] text-green-700 text-right mt-1 flex items-center justify-end gap-1">
            10:15
            <svg viewBox="0 0 16 15" width="16" height="15" className="text-[#4FC3F7]"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#F0F0F0] p-2 flex items-center gap-2">
        <div className="bg-white flex-1 rounded-full flex items-center px-4 py-2 gap-3 shadow-sm">
          <svg viewBox="0 0 24 24" width="24" height="24" className="text-gray-400"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363-1.108s1.167-.34 1.554-1.224c.047-.105.08-.227.105-.365.059-.34.004-.732-.296-1.059-.183-.199-.439-.33-.74-.414-.309-.086-.67-.111-1.047-.07-.32.035-.632.116-.895.244-.16.077-.306.164-.436.263-.128.099-.234.205-.322.319-.143.19-.245.41-.307.646-.058.224-.084.464-.076.703.008.238.046.479.114.711.067.234.162.465.286.683.13.226.29.444.48.64.202.204.441.389.71.543.271.155.57.282.887.377.315.097.644.16 1.006.19.35.026.71.023 1.082-.008.368-.035.74-.096 1.118-.183.377-.089.756-.205 1.136-.346.38-.142.758-.31 1.131-.502.37-.193.733-.412 1.086-.656.35-.246.687-.517 1.008-.81.318-.296.618-.616.896-.956.276-.342.527-.706.75-1.088.22-.384.41-.788.567-1.21.154-.424.275-.866.358-1.32.08-.456.124-.928.124-1.413 0-.485-.044-.957-.124-1.413-.083-.454-.204-.896-.358-1.32-.157-.422-.347-.826-.567-1.21-.223-.382-.474-.746-.75-1.088-.278-.34-.578-.66-.896-.956-.32-.293-.658-.564-1.008-.81-.353-.244-.716-.463-1.086-.656-.373-.192-.75-.36-1.131-.502-.38-.14-.759-.257-1.136-.346-.378-.087-.75-.148-1.118-.183-.372-.03-.732-.034-1.082-.008-.362.03-.69.093-1.006.19-.317.095-.616.222-.887.377-.269.154-.508.339-.71.543-.19.196-.35.414-.48.64-.124.218-.219.449-.286.683-.068.232-.106.473-.114.711-.008.239.018.479.076.703.062.236.164.456.307.646.088.114.194.22.322.319.13.099.276.186.436.263.263.128.575.209.895.244.377.041.738.016 1.047-.07.301-.084.557-.215.74-.414.3-.327.355-.719.296-1.059-.025-.138-.058-.26-.105-.365-.387-.884-1.554-1.224-1.554-1.224s1.167.34 1.554 1.224c.047.105.08.227.105.365.059.34.004.732-.296 1.059-.183.199-.439.33-.74.414-.309.086-.67.111-1.047.07-.32-.035-.632-.116-.895-.244-.16-.077-.306-.164-.436-.263-.128-.099-.234-.205-.322-.319-.143-.19-.245-.41-.307-.646-.058-.224-.084-.464-.076-.703.008-.238.046-.479.114-.711.067-.234.162-.465.286-.683.13-.226.29-.444.48-.64.202-.204.441-.389.71-.543.271-.155.57-.282.887-.377.315-.097.644-.16 1.006-.19.35-.026.71-.023 1.082-.008.368.035.74.096 1.118.183.377.089.756.205 1.136.346.38.142.758.31 1.131.502.37.193.733.412 1.086.656.35.246.687.517 1.008.81.318.296.618.616.896.956.276.342.527.706.75 1.088.22.384.41.788.567 1.21.154.424.275.866.358 1.32.08.456.124.928.124 1.413 0 .485-.044.957-.124 1.413-.083.454-.204.896-.358 1.32-.157.422-.347.826-.567 1.21-.223.382-.474.746-.75 1.088-.278.34-.578.66-.896.956-.32.293-.658.564-1.008.81-.353.244-.716.463-1.086.656-.373.192-.75.36-1.131.502-.38.14-.759.257-1.136.346-.378.087-.75.148-1.118.183-.372.03-.732.034-1.082.008-.362-.03-.69-.093-1.006-.19-.317-.095-.616-.222-.887-.377-.269-.154-.508-.339-.71-.543-.19-.196-.35-.414-.48-.64-.124-.218-.219-.449-.286-.683-.068-.232-.106-.473-.114-.711-.008-.239.018-.479.076-.703.062-.236.164-.456.307-.646.088-.114.194-.22.322-.319.13-.099.276-.186.436-.263.263-.128.575-.209.895-.244.377-.041.738-.016 1.047-.07.301-.084.557-.215.74-.414.3-.327.355-.719.296-1.059-.025-.138-.058-.26-.105-.365z"></path></svg>
          <input type="text" placeholder="Message" className="flex-1 bg-transparent border-none outline-none text-[14px]" disabled />
          <Paperclip className="w-5 h-5 text-gray-400" />
          <Camera className="w-5 h-5 text-gray-400" />
        </div>
        <div className="w-10 h-10 bg-[#00897B] rounded-full flex items-center justify-center text-white shadow-sm">
          <Mic className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};
