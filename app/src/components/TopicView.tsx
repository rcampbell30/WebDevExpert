import {
  CheckCircle2,
  Circle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  Wrench,
  Bug,
  Dumbbell,
  Award,
  Code,
} from 'lucide-react';
import type { Part, Topic } from '../data/courseContent';

interface TopicViewProps {
  part: Part;
  topic: Topic;
  isComplete: boolean;
  isBookmarked: boolean;
  onToggleComplete: () => void;
  onToggleBookmark: () => void;
  onBack: () => void;
  onNext: () => void;
  hasNext: boolean;
}

export function TopicView({
  part,
  topic,
  isComplete,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onBack,
  onNext,
  hasNext,
}: TopicViewProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-emerald-400 transition-colors mb-3"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to {part.title.replace('Part ', '').split(' - ')[1]}
          </button>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            {topic.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-lg transition-colors ${
              isBookmarked
                ? 'bg-amber-500/10 text-amber-500'
                : 'bg-slate-800 text-slate-400 hover:text-amber-400'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            <Bookmark
              className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`}
            />
          </button>
          <button
            onClick={onToggleComplete}
            className={`p-2 rounded-lg transition-colors ${
              isComplete
                ? 'bg-emerald-500/10 text-emerald-500'
                : 'bg-slate-800 text-slate-400 hover:text-emerald-400'
            }`}
            title={isComplete ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {isComplete ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Why It Matters */}
      <section className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-emerald-500" />
          <h2 className="text-lg font-semibold text-emerald-400">
            Why It Matters
          </h2>
        </div>
        <p className="text-slate-300 leading-relaxed">{topic.whyItMatters}</p>
      </section>

      {/* Core Concepts */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-white">Core Concepts</h2>
        </div>
        <ul className="space-y-3">
          {topic.coreConcepts.map((concept, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-blue-500">
                  {index + 1}
                </span>
              </span>
              <span className="text-slate-300">{concept}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Common Failure Modes */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-semibold text-white">
            Common Failure Modes
          </h2>
        </div>
        <ul className="space-y-3">
          {topic.commonFailureModes.map((failure, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span className="text-slate-300">{failure}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Implementation Notes */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Wrench className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-semibold text-white">
            Implementation Notes
          </h2>
        </div>
        <ul className="space-y-3">
          {topic.implementationNotes.map((note, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
              <span className="text-slate-300">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Debugging Playbook */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bug className="w-5 h-5 text-rose-500" />
          <h2 className="text-lg font-semibold text-white">
            Debugging Playbook
          </h2>
        </div>
        <ul className="space-y-3">
          {topic.debuggingPlaybook.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-rose-500">
                  {index + 1}
                </span>
              </span>
              <span className="text-slate-300">{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Code Example */}
      {topic.codeExample && (
        <section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-slate-800">
            <Code className="w-5 h-5 text-cyan-500" />
            <h2 className="text-lg font-semibold text-white">Code Example</h2>
          </div>
          <pre className="p-6 overflow-x-auto">
            <code className="text-sm text-slate-300 font-mono whitespace-pre">
              {topic.codeExample}
            </code>
          </pre>
        </section>
      )}

      {/* Exercises */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Dumbbell className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-white">Exercises</h2>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Complete these exercises to prove mastery of this topic.
        </p>
        <ul className="space-y-3">
          {topic.exercises.map((exercise, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-orange-500">
                  {index + 1}
                </span>
              </span>
              <span className="text-slate-300">{exercise}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Expert Checklist */}
      <section className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-semibold text-amber-400">
            Expert Checklist
          </h2>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Before moving on, ensure you can:
        </p>
        <ul className="space-y-3">
          {topic.expertChecklist.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-amber-500">✓</span>
              </span>
              <span className="text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Part
        </button>

        <button
          onClick={onToggleComplete}
          className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors ${
            isComplete
              ? 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20'
              : 'bg-emerald-500 hover:bg-emerald-600 text-white'
          }`}
        >
          {isComplete ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Completed
            </>
          ) : (
            <>
              <Circle className="w-4 h-4" />
              Mark Complete
            </>
          )}
        </button>

        {hasNext ? (
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
          >
            Next Topic
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <div className="w-32" />
        )}
      </div>
    </div>
  );
}
