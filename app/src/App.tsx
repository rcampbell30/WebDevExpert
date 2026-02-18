import { useState, useMemo } from 'react';
import { allParts } from './data/courseContent';
import { useProgress } from './hooks/useProgress';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TopicView } from './components/TopicView';
import { ProgressOverview } from './components/ProgressOverview';
import { BookmarksView } from './components/BookmarksView';
import { WelcomeView } from './components/WelcomeView';
import { PartOverview } from './components/PartOverview';

export type ViewMode = 'welcome' | 'topic' | 'part-overview' | 'progress' | 'bookmarks';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('welcome');
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const {
    isLoaded,
    toggleTopicComplete,
    toggleBookmark,
    setLastVisited,
    isTopicComplete,
    isBookmarked,
    getPartProgress,
    getOverallProgress,
    resetProgress,
    progress,
  } = useProgress();

  const totalTopics = useMemo(
    () => allParts.reduce((acc, part) => acc + part.topics.length, 0),
    []
  );

  const overallProgress = getOverallProgress(totalTopics);

  const handleSelectTopic = (partId: string, topicId: string) => {
    setSelectedPartId(partId);
    setSelectedTopicId(topicId);
    setViewMode('topic');
    setLastVisited(topicId);
  };

  const handleSelectPart = (partId: string) => {
    setSelectedPartId(partId);
    setViewMode('part-overview');
  };

  const handleShowProgress = () => {
    setViewMode('progress');
  };

  const handleShowBookmarks = () => {
    setViewMode('bookmarks');
  };

  const handleGoHome = () => {
    setViewMode('welcome');
    setSelectedPartId(null);
    setSelectedTopicId(null);
  };

  const selectedPart = selectedPartId
    ? allParts.find((p) => p.id === selectedPartId)
    : null;

  const selectedTopic = selectedPart && selectedTopicId
    ? selectedPart.topics.find((t) => t.id === selectedTopicId)
    : null;

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
        onGoHome={handleGoHome}
        overallProgress={overallProgress}
      />

      <div className="flex pt-16">
        <Sidebar
          isOpen={sidebarOpen}
          parts={allParts}
          selectedPartId={selectedPartId}
          selectedTopicId={selectedTopicId}
          onSelectTopic={handleSelectTopic}
          onSelectPart={handleSelectPart}
          onShowProgress={handleShowProgress}
          onShowBookmarks={handleShowBookmarks}
          getPartProgress={getPartProgress}
          isTopicComplete={isTopicComplete}
        />

        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'ml-80' : 'ml-0'
          }`}
        >
          <div className="max-w-5xl mx-auto p-6 lg:p-8">
            {viewMode === 'welcome' && (
              <WelcomeView
                parts={allParts}
                overallProgress={overallProgress}
                onSelectPart={handleSelectPart}
                onShowProgress={handleShowProgress}
                lastVisited={progress.lastVisited}
                onContinueLast={handleSelectTopic}
              />
            )}

            {viewMode === 'topic' && selectedPart && selectedTopic && (
              <TopicView
                part={selectedPart}
                topic={selectedTopic}
                isComplete={isTopicComplete(selectedTopic.id)}
                isBookmarked={isBookmarked(selectedTopic.id)}
                onToggleComplete={() => toggleTopicComplete(selectedTopic.id)}
                onToggleBookmark={() => toggleBookmark(selectedTopic.id)}
                onBack={() => handleSelectPart(selectedPart.id)}
                onNext={() => {
                  const currentIndex = selectedPart.topics.findIndex(
                    (t) => t.id === selectedTopic.id
                  );
                  if (currentIndex < selectedPart.topics.length - 1) {
                    handleSelectTopic(
                      selectedPart.id,
                      selectedPart.topics[currentIndex + 1].id
                    );
                  }
                }}
                hasNext={
                  selectedPart.topics.findIndex((t) => t.id === selectedTopic.id) <
                  selectedPart.topics.length - 1
                }
              />
            )}

            {viewMode === 'part-overview' && selectedPart && (
              <PartOverview
                part={selectedPart}
                isTopicComplete={isTopicComplete}
                onSelectTopic={(topicId) =>
                  handleSelectTopic(selectedPart.id, topicId)
                }
                onBack={handleGoHome}
                getPartProgress={getPartProgress}
              />
            )}

            {viewMode === 'progress' && (
              <ProgressOverview
                parts={allParts}
                progress={progress}
                overallProgress={overallProgress}
                isTopicComplete={isTopicComplete}
                onSelectTopic={handleSelectTopic}
                onReset={resetProgress}
                onBack={handleGoHome}
              />
            )}

            {viewMode === 'bookmarks' && (
              <BookmarksView
                parts={allParts}
                bookmarkedTopicIds={progress.bookmarks}
                onSelectTopic={handleSelectTopic}
                onToggleBookmark={toggleBookmark}
                onBack={handleGoHome}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
