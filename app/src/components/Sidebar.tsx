import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
  BarChart3,
  Bookmark,
  Layers,
} from 'lucide-react';
import type { Part } from '../data/courseContent';

interface SidebarProps {
  isOpen: boolean;
  parts: Part[];
  selectedPartId: string | null;
  selectedTopicId: string | null;
  onSelectTopic: (partId: string, topicId: string) => void;
  onSelectPart: (partId: string) => void;
  onShowProgress: () => void;
  onShowBookmarks: () => void;
  getPartProgress: (partId: string, totalTopics: number) => {
    completed: number;
    total: number;
    percentage: number;
  };
  isTopicComplete: (topicId: string) => boolean;
}

export function Sidebar({
  isOpen,
  parts,
  selectedPartId,
  selectedTopicId,
  onSelectTopic,
  onSelectPart,
  onShowProgress,
  onShowBookmarks,
  getPartProgress,
  isTopicComplete,
}: SidebarProps) {
  const [expandedParts, setExpandedParts] = useState<Set<string>>(new Set());

  const togglePart = (partId: string) => {
    setExpandedParts((prev) => {
      const next = new Set(prev);
      if (next.has(partId)) {
        next.delete(partId);
      } else {
        next.add(partId);
      }
      return next;
    });
  };

  if (!isOpen) return null;

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-80 bg-slate-900 border-r border-slate-800 overflow-y-auto z-40">
      <div className="p-4">
        {/* Navigation Links */}
        <div className="mb-4 space-y-1">
          <button
            onClick={onShowProgress}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Progress Overview</span>
          </button>
          <button
            onClick={onShowBookmarks}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
          >
            <Bookmark className="w-4 h-4" />
            <span className="text-sm font-medium">Bookmarks</span>
          </button>
        </div>

        <div className="h-px bg-slate-800 my-4" />

        {/* Parts List */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Layers className="w-3 h-3" />
            <span>Course Parts</span>
          </div>

          {parts.map((part) => {
            const progress = getPartProgress(part.id, part.topics.length);
            const isExpanded = expandedParts.has(part.id);
            const isSelected = selectedPartId === part.id;

            return (
              <div key={part.id} className="mb-1">
                <div
                  className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition-colors ${
                    isSelected
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <button
                    onClick={() => togglePart(part.id)}
                    className="p-0.5 hover:bg-slate-700 rounded"
                    aria-label={isExpanded ? `Collapse ${part.title}` : `Expand ${part.title}`}
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      onSelectPart(part.id);
                      if (!isExpanded) {
                        togglePart(part.id);
                      }
                    }}
                    className="flex-1 flex items-center gap-2 min-w-0"
                  >
                  <span className="flex-1 text-left text-sm font-medium truncate">
                    {part.title.replace('Part ', '').split(' - ')[1] || part.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs ${
                        progress.percentage === 100
                          ? 'text-emerald-400'
                          : 'text-slate-500'
                      }`}
                    >
                      {progress.completed}/{progress.total}
                    </span>
                    {progress.percentage === 100 && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  </button>
                </div>

                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {part.topics.map((topic) => {
                      const isTopicSelected = selectedTopicId === topic.id;
                      const complete = isTopicComplete(topic.id);

                      return (
                        <button
                          key={topic.id}
                          onClick={() => onSelectTopic(part.id, topic.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-left ${
                            isTopicSelected
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {complete ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                          )}
                          <span className="text-sm truncate">{topic.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
