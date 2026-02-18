import { ChevronLeft, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import type { Part } from '../data/courseContent';

interface PartOverviewProps {
  part: Part;
  isTopicComplete: (topicId: string) => boolean;
  onSelectTopic: (topicId: string) => void;
  onBack: () => void;
  getPartProgress: (partId: string, totalTopics: number) => {
    completed: number;
    total: number;
    percentage: number;
  };
}

export function PartOverview({
  part,
  isTopicComplete,
  onSelectTopic,
  onBack,
  getPartProgress,
}: PartOverviewProps) {
  const progress = getPartProgress(part.id, part.topics.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-3"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </button>
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          {part.title}
        </h1>
        <p className="text-slate-400">{part.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-slate-400">Part Progress</span>
          <span className="text-sm font-medium text-white">
            {progress.completed} / {progress.total} topics
          </span>
        </div>
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
        <p className="text-right text-sm text-emerald-400 mt-2">
          {progress.percentage}% complete
        </p>
      </div>

      {/* Topics List */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Topics</h2>
        <div className="space-y-2">
          {part.topics.map((topic, index) => {
            const complete = isTopicComplete(topic.id);

            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className="w-full flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all hover:bg-slate-800/50 text-left group"
              >
                <div className="flex-shrink-0">
                  {complete ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-600 group-hover:text-slate-500" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">
                      Topic {index + 1}
                    </span>
                    {complete && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                        Completed
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-white group-hover:text-emerald-400 transition-colors truncate">
                    {topic.title}
                  </h3>
                </div>

                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-xl p-6">
        <h3 className="font-semibold text-emerald-400 mb-2">
          About This Part
        </h3>
        <p className="text-sm text-slate-400">
          This part contains {part.topics.length} topics designed to build your
          expertise in {part.title.split(' - ')[1] || 'this area'}. Work through
          each topic at your own pace, complete the exercises, and use the
          expert checklist to verify your understanding before moving on.
        </p>
      </div>
    </div>
  );
}
