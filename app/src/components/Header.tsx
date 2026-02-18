import { Menu, Home, BookOpen, Trophy } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
  onGoHome: () => void;
  overallProgress: {
    completed: number;
    total: number;
    percentage: number;
  };
}

export function Header({
  onToggleSidebar,
  sidebarOpen,
  onGoHome,
  overallProgress,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <Menu className="w-5 h-5 text-slate-400" />
          </button>
          <button
            onClick={onGoHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white leading-tight">
                Web Dev Systems
              </h1>
              <p className="text-xs text-slate-400">Expert Edition</p>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 bg-slate-800/50 rounded-lg px-4 py-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Progress</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                    style={{ width: `${overallProgress.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  {overallProgress.percentage}%
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onGoHome}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Go home"
          >
            <Home className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
