interface AppEntry {
  title: string
  description: string
  path: string
  tags: string[]
}

const apps: AppEntry[] = [
  {
    title: '2048',
    description: 'The classic sliding puzzle game. Merge tiles to reach 2048 — with multiple grid sizes and a challenge mode.',
    path: '/2048/',
    tags: ['game', 'react'],
  },
]

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16">
      <div className="w-full max-w-[700px] flex flex-col flex-1">

        {/* Header */}
        <header className="mb-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">
            apps.barczynski<span style={{ color: '#888', fontWeight: 400 }}>.dev</span>
          </div>
          <a href="https://barczynski.dev" className="text-xs transition-colors" style={{ color: '#888' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
            ← barczynski.dev
          </a>
        </header>

        {/* Apps list */}
        <main className="flex-1">
          <div style={{ borderTop: '1px solid #1a1a1a' }}>
            {apps.map((app) => (
              <a
                key={app.path}
                href={app.path}
                className="group flex items-center justify-between py-6 transition-colors"
                style={{ borderBottom: '1px solid #1a1a1a', textDecoration: 'none', color: 'inherit' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold">{app.title}</span>
                    <div className="flex gap-1.5">
                      {app.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: '#111', color: '#555', border: '1px solid #222' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: '#888' }}>{app.description}</p>
                </div>
                <svg className="w-4 h-4 ml-6 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" style={{ color: '#555' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            ))}

            {/* Coming soon */}
            <div className="py-6" style={{ borderBottom: '1px solid #1a1a1a', color: '#333' }}>
              <span className="text-sm">More coming soon...</span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: '1px solid #1a1a1a' }}>
          <span className="text-xs" style={{ color: '#888' }}>&copy; 2026 Adam Barczynski</span>
          <div className="flex gap-3">
            <a href="https://github.com/adambar88" target="_blank" rel="noreferrer" className="transition-colors" style={{ color: '#888' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/adambarczynski88" target="_blank" rel="noreferrer" className="transition-colors" style={{ color: '#888' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App

