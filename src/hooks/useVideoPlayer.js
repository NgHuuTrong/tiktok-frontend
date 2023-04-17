import { useEffect, useState } from 'react';

function useVideoPlayer(videoElement) {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    isMuted: true,
    progress: 0,
  });

  // Handle Playing
  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };
  useEffect(() => {
    playerState.isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  // Handle Muted
  const toggleMuted = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };
  useEffect(() => {
    videoElement.current.muted = playerState.isMuted;
  }, [playerState.isMuted, videoElement]);

  // Handle Progress
  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
    if (progress === 100)
      setPlayerState({
        ...playerState,
        progress,
        isPlaying: false,
      });
  };
  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };
  return {
    playerState,
    togglePlay,
    toggleMuted,
    handleOnTimeUpdate,
    handleVideoProgress,
  };
}

export default useVideoPlayer;
