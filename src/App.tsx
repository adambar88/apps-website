interface AppEntry {
  title: string
  description: string
  path: string
  icon: string
  tags: string[]
  color: string
}

const apps: AppEntry[] = [
  {
    title: '2048',
    description: 'The classic sliding puzzle game. Merge tiles to reach 2048 — with multiple grid sizes and a challenge mode.',
    path: '/2048/',
    icon: '🎮',
    tags: ['game', 'react'],
    color: '#f0c850',
  },
]

function AppCard({ app, index }: { key?: string; app: AppEntry; index: number }) {
  return (
    <a
      href={app.path}
      className="bento-card rounded-[32px] p-8 block group relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: app.color }}
      />
      <div className="flex justify-between items-start mb-6">
        <span className="text-3xl">{app.icon}</span>
        <div className="flex gap-2">
          {app.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-lg text-[10px] uppercase tracking-widest font-bold text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-3">{app.title}</h2>
      <p className="text-muted text-sm leading-relaxed mb-8">
        {app.description}
      </p>
      <div className="flex items-center justify-between text-sm font-bold mt-auto">
        <span style={{ color: app.color }}>Launch app</span>
        <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </div>
      </div>
    </a>
  )
}

function App() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="font-outfit font-bold text-2xl">apps.barczynski<span className="text-muted">.dev</span></div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted">
          <a href="https://barczynski.dev" className="hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            Back to main site
          </a>
        </div>
        <a href="https://barczynski.dev" className="md:hidden px-4 py-2 bg-neutral-900 text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors">
          Back
        </a>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center mb-16 w-full max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] uppercase tracking-widest font-bold text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Interactive Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6 leading-[1.1]">
            Web experiments, <span className="text-muted italic">tools</span>, and <span className="text-white">games.</span>
          </h1>
          <p className="text-muted text-lg">
            A collection of interactive projects built by Adam Barczynski.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {apps.map((app, i) => (
            <AppCard key={app.path} app={app} index={i} />
          ))}
          
          {/* Coming Soon Card */}
          <div className="bento-card rounded-[32px] p-8 flex flex-col items-center justify-center text-center min-h-[300px] border-dashed border-neutral-800 opacity-50">
            <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-muted mb-4 text-xl">
              +
            </div>
            <h3 className="font-bold text-lg mb-2">More coming soon</h3>
            <p className="text-xs text-muted">New experiments are constantly in development.</p>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="mt-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-muted text-xs font-medium uppercase tracking-[0.2em] border-t border-neutral-900">
        <div>&copy; 2026 apps.barczynski.dev</div>
        <div className="flex gap-8">
          <a href="https://github.com/adambar88" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://barczynski.dev" className="hover:text-white transition-colors">Portfolio</a>
        </div>
      </footer>
    </div>
  )
}

export default App
