import { ChevronLeft, CheckCircle2, Trophy, RotateCcw, Target } from 'lucide-react';
import type { Part } from '../data/courseContent';
import type { ProgressData } from '../hooks/useProgress';

interface ProgressOverviewProps {
  parts: Part[];
  progress: ProgressData;
  overallProgress: {
    completed: number;
    total: number;
    percentage: number;
  };
  isTopicComplete: (topicId: string) => boolean;
  onSelectTopic: (partId: string, topicId: string) => void;
  onReset: () => void;
  onBack: () => void;
}

export function ProgressOverview({
  parts,
  progress,
  overallProgress,
  isTopicComplete,
  onSelectTopic,
  onReset,
  onBack,
}: ProgressOverviewProps) {
  const completedParts = parts.filter((part) =>
    part.topics.every((topic) => isTopicComplete(topic.id))
  ).length;

  const bookmarkedCount = progress.bookmarks.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-3"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            Progress Overview
          </h1>
        </div>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg text-sm font-medium transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Progress
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-emerald-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white">{overallProgress.percentage}%</p>
          <p className="text-sm text-slate-400">Overall Progress</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white">
            {overallProgress.completed}
          </p>
          <p className="text-sm text-slate-400">Topics Completed</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white">{completedParts}</p>
          <p className="text-sm text-slate-400">Parts Completed</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-purple-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white">{bookmarkedCount}</p>
          <p className="text-sm text-slate-400">Bookmarks</p>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-white">Total Progress</span>
          <span className="text-sm text-slate-400">
            {overallProgress.completed} / {overallProgress.total} topics
          </span>
        </div>
        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
            style={{ width: `${overallProgress.percentage}%` }}
          />
        </div>
      </div>

      {/* Part Progress */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Progress by Part</h2>
        <div className="space-y-3">
          {parts.map((part) => {
            const completedInPart = part.topics.filter((t) =>
              isTopicComplete(t.id)
            ).length;
            const percentage = Math.round(
              (completedInPart / part.topics.length) * 100
            );
            const isComplete = completedInPart === part.topics.length;

            return (
              <div
                key={part.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {isComplete ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                    )}
                    <span className="font-medium text-white">
                      {part.title.replace('Part ', '').split(' - ')[1] || part.title}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isComplete ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    {percentage}%
                  </span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isComplete
                        ? 'bg-emerald-500'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mb-3">
                  {completedInPart} of {part.topics.length} topics completed
                </p>

                {/* Topic List */}
                <div className="ml-8 space-y-1">
                  {part.topics.map((topic) => {
                    const complete = isTopicComplete(topic.id);
                    return (
                      <button
                        key={topic.id}
                        onClick={() => onSelectTopic(part.id, topic.id)}
                        className="w-full flex items-center gap-2 py-1.5 text-left hover:text-emerald-400 transition-colors"
                      >
                        {complete ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-600" />
                        )}
                        <span
                          className={`text-sm ${
                            complete ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {topic.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Motivation */}
 {overallProgress.percentage < 100 ? (
        <div className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-emerald-400 mb-2">
            Keep Going!
          </h3>
          <p className="text-sm text-slate-400">
            You're making great progress. Consistent learning is key to mastering
            web development systems. Try to complete at least one topic per day!
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-400 mb-2">
            Congratulations! 🎉
          </h3>
          <p className="text-sm text-slate-400">
            You've completed all topics in the Web Development Systems course!
            You've demonstrated expertise across networking, browser internals,
            JavaScript, databases, security, and distributed systems.
          </p>
        </div>
      )}
    </div>
  );
}
