'use client';

import ReactPlayer from 'react-player';
import { useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

export default function Video({ src }: { src: string }) {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  return (
    <div className="relative w-full max-h-[650px] aspect-[9/16] rounded-3xl overflow-hidden">
      <ReactPlayer
        src={src}
        playing={playing}
        loop
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        playsInline
        muted={muted}
        width="100%"
        height="100%"
        className="absolute top-0 left-0 object-cover"
      />
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 transition p-4 rounded-full z-10 cursor-pointer"
      >
        {muted ? <VolumeX strokeWidth={2.5} size={36} /> : <Volume2 strokeWidth={2.5} size={36} />}
      </button>
      <button
        onClick={() => setPlaying(!playing)}
        className="absolute bottom-4 left-4 bg-black/50 p-4 rounded-full z-10 hover:bg-black/70 transition cursor-pointer"
      >
        {playing ? <Pause strokeWidth={2.5} size={36} /> : <Play strokeWidth={2.5} size={36} />}
      </button>
    </div>
  );
}
