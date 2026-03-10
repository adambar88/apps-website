import { useEffect, useState } from 'react'
import './App.css'

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
  // Add more apps here as you build them:
  // {
  //   title: 'Snake',
  //   description: 'The retro snake game, reimagined.',
  //   path: '/snake/',
  //   icon: '🐍',
  //   tags: ['game'],
  //   color: '#50f068',
  // },
]

function AppCard({ app, index }: { app: AppEntry; index: number }) {
  return (
    <a
      href={app.path}
      className="app-card"
      style={
        {
          '--card-accent': app.color,
          animationDelay: `${index * 0.1}s`,
        } as React.CSSProperties
      }
    >
      <div className="card-glow" />
      <div className="card-content">
        <div className="card-header">
          <span className="card-icon">{app.icon}</span>
          <div className="card-tags">
            {app.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h2 className="card-title">{app.title}</h2>
        <p className="card-description">{app.description}</p>
        <div className="card-footer">
          <span className="card-link">
            Open app <span className="arrow">→</span>
          </span>
        </div>
      </div>
    </a>
  )
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="hub">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <div className="bg-grid" />
      <header className="header">
        <div className="header-content">
          <div className="logo-row">
            <span className="logo-dot" />
            <span className="logo-text">apps.barczynski.dev</span>
          </div>
          <p className="header-sub">
            A collection of web experiments, tools, and games.
          </p>
        </div>
      </header>

      <main className="main">
        <div className="apps-grid">
          {apps.map((app, i) => (
            <AppCard key={app.path} app={app} index={i} />
          ))}
        </div>

        <div className="more-coming">
          <div className="more-coming-icon">+</div>
          <p>More apps coming soon</p>
        </div>
      </main>

      <footer className="footer">
        <a href="https://barczynski.dev" className="footer-link">
          barczynski.dev
        </a>
      </footer>
    </div>
  )
}

export default App
