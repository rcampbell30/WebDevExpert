import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'web-dev-systems-progress';

export interface ProgressData {
  completedTopics: string[];
  completedParts: string[];
  lastVisited: string | null;
  bookmarks: string[];
}

const defaultProgress: ProgressData = {
  completedTopics: [],
  completedParts: [],
  lastVisited: null,
  bookmarks: [],
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProgress({
          ...defaultProgress,
          ...parsed,
        });
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error('Failed to save progress:', error);
      }
    }
  }, [progress, isLoaded]);

  const toggleTopicComplete = useCallback((topicId: string) => {
    setProgress((prev) => {
      const completedTopics = prev.completedTopics.includes(topicId)
        ? prev.completedTopics.filter((id) => id !== topicId)
        : [...prev.completedTopics, topicId];
      return { ...prev, completedTopics };
    });
  }, []);

  const togglePartComplete = useCallback((partId: string) => {
    setProgress((prev) => {
      const completedParts = prev.completedParts.includes(partId)
        ? prev.completedParts.filter((id) => id !== partId)
        : [...prev.completedParts, partId];
      return { ...prev, completedParts };
    });
  }, []);

  const toggleBookmark = useCallback((topicId: string) => {
    setProgress((prev) => {
      const bookmarks = prev.bookmarks.includes(topicId)
        ? prev.bookmarks.filter((id) => id !== topicId)
        : [...prev.bookmarks, topicId];
      return { ...prev, bookmarks };
    });
  }, []);

  const setLastVisited = useCallback((topicId: string | null) => {
    setProgress((prev) => ({ ...prev, lastVisited: topicId }));
  }, []);

  const isTopicComplete = useCallback(
    (topicId: string) => progress.completedTopics.includes(topicId),
    [progress.completedTopics]
  );

  const isPartComplete = useCallback(
    (partId: string) => progress.completedParts.includes(partId),
    [progress.completedParts]
  );

  const isBookmarked = useCallback(
    (topicId: string) => progress.bookmarks.includes(topicId),
    [progress.bookmarks]
  );

  const getPartProgress = useCallback(
    (partId: string, totalTopics: number) => {
      const completedInPart = progress.completedTopics.filter((topicId) =>
        topicId.startsWith(partId)
      ).length;
      return {
        completed: completedInPart,
        total: totalTopics,
        percentage: Math.round((completedInPart / totalTopics) * 100),
      };
    },
    [progress.completedTopics]
  );

  const getOverallProgress = useCallback(
    (totalTopics: number) => {
      const completed = progress.completedTopics.length;
      return {
        completed,
        total: totalTopics,
        percentage: Math.round((completed / totalTopics) * 100),
      };
    },
    [progress.completedTopics]
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    isLoaded,
    toggleTopicComplete,
    togglePartComplete,
    toggleBookmark,
    setLastVisited,
    isTopicComplete,
    isPartComplete,
    isBookmarked,
    getPartProgress,
    getOverallProgress,
    resetProgress,
  };
}
