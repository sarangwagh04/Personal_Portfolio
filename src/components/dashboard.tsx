export function Dashboard() {
  return (
    <div className="w-full h-[100dvh] bg-white flex items-center justify-center text-slate-900 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-[#a855f7] opacity-[0.05] blur-[120px] rounded-[100%] pointer-events-none" />
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 drop-shadow-sm">
        Dashboard
      </h1>
    </div>
  );
}
