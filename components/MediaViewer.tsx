import React from 'react';
import { MediaType } from '../types';
import { Music, PlayCircle } from 'lucide-react';

interface MediaViewerProps {
  type: MediaType;
  url: string;
  altText: string;
}

export const MediaViewer: React.FC<MediaViewerProps> = ({ type, url, altText }) => {
  // Helper to get YouTube Embed URL
  const getEmbedUrl = (inputUrl: string) => {
    if (inputUrl.includes('embed/')) return inputUrl;
    
    let videoId = '';
    if (inputUrl.includes('youtube.com/watch?v=')) {
      videoId = inputUrl.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    } else if (inputUrl.includes('youtu.be/')) {
      videoId = inputUrl.split('youtu.be/')[1];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : inputUrl;
  };

  if (type === 'image') {
    return (
      <div className="w-full h-64 md:h-80 bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-white ring-4 ring-indigo-50 relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <img 
          src={url} 
          alt={altText} 
          className="w-full h-full object-contain p-2 transition-transform duration-700 ease-in-out group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/600/400?grayscale';
          }}
        />
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div className="w-full h-64 md:h-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex flex-col items-center justify-center p-6 shadow-xl border-4 border-white ring-4 ring-purple-100 text-white">
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-full shadow-inner mb-6 animate-bounce-small ring-2 ring-white/50">
          <Music className="w-16 h-16 text-white drop-shadow-md" />
        </div>
        <p className="text-white/90 mb-4 font-semibold tracking-wide text-lg">Bấm để nghe giai điệu</p>
        <audio controls className="w-full max-w-md shadow-lg rounded-full opacity-90 hover:opacity-100 transition-opacity">
          <source src={url} type="audio/mpeg" />
          <source src={url} type="audio/wav" />
          Trình duyệt của bạn không hỗ trợ thẻ audio.
        </audio>
      </div>
    );
  }

  if (type === 'youtube') {
    return (
      <div className="w-full h-64 md:h-80 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-4 ring-red-50">
        <iframe
          className="w-full h-full"
          src={getEmbedUrl(url)}
          title={altText}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return null;
};