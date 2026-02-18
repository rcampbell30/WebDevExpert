import { ArrowRight, BookOpen, Play, Trophy, Zap } from 'lucide-react';
import type { Part } from '../data/courseContent';

interface WelcomeViewProps {
  parts: Part[];
  overallProgress: {
    completed: number;
    total: number;
    percentage: number;
  };
  onSelectPart: (partId: string) => void;
  onShowProgress: () => void;
  lastVisited: string | null;
  onContinueLast: (partId: string, topicId: string) => void;
}

export function WelcomeView({
  parts,
  overallProgress,
  onSelectPart,
  onShowProgress,
  lastVisited,
  onContinueLast,
}: WelcomeViewProps) {
  // Find the last visited topic
  const lastVisitedTopic = lastVisited
    ? parts
        .flatMap((p) => p.topics.map((t) => ({ ...t, partId: p.id })))
        .find((t) => t.id === lastVisited)
    : null;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              Expert Edition
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Web Development Systems
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-6">
            A comprehensive guide to building production-ready web applications.
            Master networking, browser internals, JavaScript, databases, security,
            and distributed systems.
          </p>

          <div className="flex flex-wrap gap-4">
            {lastVisitedTopic ? (
              <button
                onClick={() =>
                  onContinueLast(lastVisitedTopic.partId, lastVisitedTopic.id)
                }
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors"
              >
                <Play className="w-4 h-4" />
                Continue Learning
              </button>
            ) : (
              <button
                onClick={() => onSelectPart(parts[0].id)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors"
              >
                <Play className="w-4 h-4" />
                Start Learning
              </button>
            )}
            <button
              onClick={onShowProgress}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors"
            >
              <Trophy className="w-4 h-4" />
              View Progress
            </button>
          </div>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-slate-400">Total Topics</span>
          </div>
          <p className="text-3xl font-bold text-white">{overallProgress.total}</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <span className="text-slate-400">Completed</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {overallProgress.completed}
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-slate-400">Progress</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {overallProgress.percentage}%
          </p>
        </div>
      </div>

      {/* Parts Grid */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Course Parts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {parts.map((part, index) => (
            <button
              key={part.id}
              onClick={() => onSelectPart(part.id)}
              className="group text-left bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all hover:bg-slate-800/50"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-emerald-500/10 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:text-emerald-500 transition-colors">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {part.title.replace('Part ', '').split(' - ')[1] || part.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                {part.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>{part.topics.length} topics</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Learning Tips */}
      <div className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-xl p-6">
        <h3 className="font-semibold text-emerald-400 mb-3">Learning Tips</h3>
        <ul className="space-y-2 text-sm text-slate-400">
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <span>
              Each topic includes practical exercises to reinforce your understanding.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <span>
              Use the bookmark feature to save topics you want to revisit later.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <span>
              Track your progress with the completion markers on each topic.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            <span>
              Focus on understanding the "why" behind each concept, not just the
              implementation.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
