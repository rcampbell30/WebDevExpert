import { ChevronLeft, Bookmark, BookOpen } from 'lucide-react';
import type { Part } from '../data/courseContent';

interface BookmarksViewProps {
  parts: Part[];
  bookmarkedTopicIds: string[];
  onSelectTopic: (partId: string, topicId: string) => void;
  onToggleBookmark: (topicId: string) => void;
  onBack: () => void;
}

export function BookmarksView({
  parts,
  bookmarkedTopicIds,
  onSelectTopic,
  onToggleBookmark,
  onBack,
}: BookmarksViewProps) {
  // Find all bookmarked topics with their part info
  const bookmarkedTopics = bookmarkedTopicIds
    .map((topicId) => {
      for (const part of parts) {
        const topic = part.topics.find((t) => t.id === topicId);
        if (topic) {
          return { ...topic, partId: part.id, partTitle: part.title };
        }
      }
      return null;
    })
    .filter(Boolean);

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
        <h1 className="text-2xl lg:text-3xl font-bold text-white">Bookmarks</h1>
        <p className="text-slate-400 mt-2">
          Topics you've saved for later reference.
        </p>
      </div>

      {bookmarkedTopics.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
            <Bookmark className="w-8 h-8 text-slate-500" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            No Bookmarks Yet
          </h3>
          <p className="text-slate-400 max-w-md mx-auto mb-6">
            Bookmark topics you want to revisit later. Click the bookmark icon
            on any topic to save it here.
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Browse Topics
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarkedTopics.map((topic) => (
            <div
              key={topic!.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-1">
                    {topic!.partTitle.replace('Part ', '').split(' - ')[1]}
                  </p>
                  <h3 className="font-medium text-white mb-2">{topic!.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {topic!.whyItMatters}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => onToggleBookmark(topic!.id)}
                    className="p-2 rounded-lg bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 transition-colors"
                    title="Remove bookmark"
                  >
                    <Bookmark className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => onSelectTopic(topic!.partId, topic!.id)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  View Topic
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {bookmarkedTopics.length > 0 && (
        <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-amber-400 mb-2">
            Bookmark Tip
          </h3>
          <p className="text-sm text-slate-400">
            Bookmarks are saved locally in your browser. Use them to keep track
            of topics you want to revisit or need more practice with.
          </p>
        </div>
      )}
    </div>
  );
}
