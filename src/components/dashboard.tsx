import { Search, Play, Download, Briefcase, Code, User, GraduationCap, ChevronDown, ExternalLink } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-[#000000] flex flex-col text-white font-sans overflow-x-hidden selection:bg-[#ffb800] selection:text-black">
      
      {/* HERO SECTION */}
      <section className="w-full h-[100dvh] flex flex-col relative z-10">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <img 
          src="/hero-sarang.png" 
          alt="Background Portrait" 
          className="h-[70vh] md:h-[85vh] w-auto max-w-full object-contain opacity-80"
          style={{ transform: 'translateY(-80px) scale(0.95)' }}
        />
        {/* Gradients to fade edges completely into black */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 shadow-[inset_0_0_120px_100px_black]" />
      </div>

      {/* Navigation Top Bar */}
      <nav className="w-full px-8 md:px-12 py-8 flex justify-between items-center z-30">
        <div className="font-['Bebas_Neue'] text-[#ffb800] text-2xl tracking-[0.05em] uppercase">SARANG WAGH</div>
        
        <div className="hidden md:flex items-center gap-16 text-[15px] font-normal tracking-wide text-gray-200">
          <a href="#home" className="hover:text-[#ffb800] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#ffb800] transition-colors">About</a>
          <a href="#experience" className="hover:text-[#ffb800] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#ffb800] transition-colors">Projects</a>
        </div>

        <div className="w-[52px] h-7 bg-[#ffb800] rounded-full flex items-center p-1 justify-end cursor-pointer hover:bg-[#e6a600] transition-colors">
          <div className="w-5 h-5 bg-black rounded-full shadow-sm"></div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-20 w-full mb-12">
        
        <div className="relative inline-flex flex-col items-center" style={{ transform: 'translateY(80px) scale(1.50)' }}>
          
          {/* Cursive Overlapping Text */}
          <div 
            className="absolute font-['Storm_Gust'] text-[#ffb800] text-[4rem] md:text-[6rem] lg:text-[7rem] leading-none z-30 -top-4 md:-top-6 lg:-top-8 transform -rotate-[4deg]"
            style={{ textShadow: '0px 10px 30px rgba(0,0,0,0.8)' }}
          >
            Software
          </div>
          
          {/* Huge White Text */}
          <h1 
            className="font-['Bebas_Neue'] text-[20vw] md:text-[10rem] lg:text-[12rem] leading-[0.8] tracking-normal text-white z-20 uppercase transform scale-y-[1.15] mt-6 md:mt-10 lg:mt-12"
            style={{ textShadow: '0px 20px 40px rgba(0,0,0,0.5)' }}
          >
            DEVELOPER
          </h1>

          {/* Subtitles Row placed exactly aligned to the edges of the huge text */}
          <div className="w-full flex justify-between items-center px-1 md:px-2 mt-4 md:mt-8 z-30 text-[10px] md:text-[13px] text-gray-300 tracking-wider">
            <div>Python Full-Stack Developer</div>
            <div>Presented By: Sarang Wagh</div>
          </div>
          
        </div>
        
      </main>

      {/* Very Bottom Footer Area */}
      <footer className="w-full px-8 md:px-12 pb-8 flex justify-between items-end z-30">
        
        {/* Amber Circular Icons */}
        <div className="flex gap-4">
          <button className="w-[30px] h-[30px] rounded-full bg-[#ffb800] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,184,0,0.3)]">
            <Search size={14} strokeWidth={3} />
          </button>
          <button className="w-[30px] h-[30px] rounded-full bg-[#ffb800] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,184,0,0.3)]">
            <Play size={14} strokeWidth={3} className="ml-0.5" />
          </button>
        </div>

        {/* Right Side Link */}
        <a href="https://github.com/sarangwagh04" target="_blank" rel="noreferrer" className="text-[13px] border-b border-white pb-0.5 tracking-wide text-gray-200 hover:text-[#ffb800] hover:border-[#ffb800] transition-colors">
          Hey! I'm on GitHub
        </a>
        
      </footer>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full max-w-7xl mx-auto px-8 md:px-12 py-24 relative z-20">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[2px] bg-[#ffb800]"></div>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide uppercase">About <span className="text-[#ffb800]">Me</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              I am a final-year Computer Engineering student and <strong className="text-white font-medium">Python/Django backend developer</strong> with hands-on experience architecting full-stack, AI-integrated platforms end-to-end.
            </p>
            <p>
              Currently leading a 12-member engineering team as a Full Stack Developer Intern at Indux Technology, driving backend architecture and payment-system integration for BillTea, a production SaaS billing platform.
            </p>
            <p>
              I have a track record of designing scalable systems, shipping under pressure, and winning college-level hackathons like the Smart India Hackathon (SIH).
            </p>
            
            <div className="pt-8">
              <a 
                href="/Sarang_Wagh_8180849725.pdf" 
                download
                className="inline-flex items-center gap-3 bg-[#ffb800] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all transform hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-['Bebas_Neue'] text-3xl mb-8 tracking-wide text-[#ffb800]">Technical Arsenal</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-3 font-semibold">Backend & Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'Django REST Framework', 'Node.js', 'NestJS', 'MySQL', 'PostgreSQL', 'Prisma ORM'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white/10 rounded-md text-sm border border-white/5 hover:border-[#ffb800]/50 hover:bg-[#ffb800]/10 transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-3 font-semibold">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap 5', 'HTML5/CSS3'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white/10 rounded-md text-sm border border-white/5 hover:border-[#ffb800]/50 hover:bg-[#ffb800]/10 transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-3 font-semibold">AI & APIs</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Google Gemini API', 'Tesseract OCR', 'pdfplumber', 'Razorpay Gateway', 'WhatsApp Business API'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white/10 rounded-md text-sm border border-white/5 hover:border-[#ffb800]/50 hover:bg-[#ffb800]/10 transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="w-full bg-[#0a0a0a] border-t border-b border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-24">
          <div className="flex items-center gap-4 mb-16 justify-end">
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide uppercase">Professional <span className="text-[#ffb800]">Experience</span></h2>
            <div className="w-12 h-[2px] bg-[#ffb800]"></div>
          </div>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="group relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 -ml-[1px] top-0 bottom-0 w-[2px] bg-white/10 group-last:bottom-auto group-last:h-full"></div>
              <div className="hidden md:flex absolute left-1/2 -ml-[20px] top-0 w-10 h-10 rounded-full bg-black border-2 border-[#ffb800] items-center justify-center z-10 shadow-[0_0_15px_rgba(255,184,0,0.3)]">
                <Briefcase size={18} className="text-[#ffb800]" />
              </div>
              
              <div className="md:w-[calc(50%-40px)] md:ml-auto bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#ffb800]/50 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-[#ffb800] font-mono text-sm mb-2">Jun 2026 – Present</span>
                  <h3 className="text-2xl font-bold">Full Stack Developer Intern</h3>
                  <span className="text-gray-400 text-sm mt-1">Indux Technology, Pune</span>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm font-light leading-relaxed">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800] mt-1.5 shrink-0"></div>
                    <p>Leading a 12-member engineering team building <strong className="text-white">BillTea</strong>, a full-stack SaaS billing & invoicing platform.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800] mt-1.5 shrink-0"></div>
                    <p>Top individual contributor, personally authoring ~69% of the repository's tracked GitHub commits.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800] mt-1.5 shrink-0"></div>
                    <p>Designed a multi-tenant database architecture using Prisma ORM (20+ relational models).</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800] mt-1.5 shrink-0"></div>
                    <p>Integrated WhatsApp Business API, Razorpay gateway, and a Puppeteer-based PDF generation pipeline.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="group relative pl-8 md:pl-0">
              <div className="hidden md:flex absolute left-1/2 -ml-[20px] top-0 w-10 h-10 rounded-full bg-black border-2 border-white/30 items-center justify-center z-10 group-hover:border-[#ffb800] transition-colors">
                <Briefcase size={18} className="text-white/50 group-hover:text-[#ffb800] transition-colors" />
              </div>
              
              <div className="md:w-[calc(50%-40px)] md:mr-auto bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#ffb800]/50 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-[#ffb800] font-mono text-sm mb-2">Dec 2024 – Mar 2025</span>
                  <h3 className="text-2xl font-bold">Front-End Developer Intern</h3>
                  <span className="text-gray-400 text-sm mt-1">Cloud InfoTechs</span>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm font-light leading-relaxed">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800] mt-1.5 shrink-0"></div>
                    <p>Built responsive, production-ready web interfaces using HTML5, CSS3, Bootstrap, and JavaScript.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffb800] mt-1.5 shrink-0"></div>
                    <p>Applied UI/UX best practices, cross-browser testing, and collaborated in a professional team environment.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-8 md:px-12 py-24 relative z-20">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[2px] bg-[#ffb800]"></div>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl tracking-wide uppercase">Featured <span className="text-[#ffb800]">Projects</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#ffb800]/50 transition-all duration-300">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ffb800]/10 flex items-center justify-center text-[#ffb800]">
                  <Code size={24} />
                </div>
                <span className="font-mono text-xs text-[#ffb800] bg-[#ffb800]/10 px-3 py-1 rounded-full">B.E. Final Year | 2026</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">NeoCampus</h3>
              <p className="text-[#ffb800] text-sm mb-4 font-mono">AI-Powered Academics Management</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Architected a full-stack, multi-role academic management platform. Integrated Google Gemini API for an academic chatbot and built an automated PDF result parser using Tesseract OCR and pdfplumber.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">Python</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">Django</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">Gemini API</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">MySQL</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#ffb800]/50 transition-all duration-300">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ffb800]/10 flex items-center justify-center text-[#ffb800]">
                  <Code size={24} />
                </div>
                <span className="font-mono text-xs text-[#ffb800] bg-[#ffb800]/10 px-3 py-1 rounded-full">S.E. Project | 2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">EliteMess</h3>
              <p className="text-[#ffb800] text-sm mb-4 font-mono">Mess Management System</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Designed a role-based full-stack web application with distinct panels (Owner, Student, Authority). Integrated a QR-code-based payment flow and dynamic attendance-based billing logic using Django ORM.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">Python</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">Django</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">JavaScript</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">MySQL</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="w-full bg-[#050505] border-t border-white/5 py-12 px-8 md:px-12 mt-auto z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="font-['Bebas_Neue'] text-[#ffb800] text-3xl tracking-[0.05em] uppercase">
            SARANG WAGH
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:sarangwagh54321@gmail.com" className="text-gray-400 hover:text-[#ffb800] transition-colors text-sm font-medium">
              sarangwagh54321@gmail.com
            </a>
            <div className="w-1 h-1 rounded-full bg-white/20"></div>
            <a href="https://linkedin.com/in/sarang-wagh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ffb800] transition-colors flex items-center gap-1 text-sm font-medium">
              LinkedIn <ExternalLink size={14} />
            </a>
            <div className="w-1 h-1 rounded-full bg-white/20"></div>
            <a href="https://github.com/sarangwagh04" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ffb800] transition-colors flex items-center gap-1 text-sm font-medium">
              GitHub <ExternalLink size={14} />
            </a>
          </div>
          
          <p className="text-gray-600 text-xs text-center md:text-right font-mono">
            © {new Date().getFullYear()} Sarang Wagh.<br/>All Rights Reserved.
          </p>
          
        </div>
      </footer>

    </div>
  );
}
