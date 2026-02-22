export type MediaType = 'image' | 'audio' | 'youtube';

export interface Question {
  id: number;
  type: MediaType;
  title: string;
  mediaUrl: string; // URL for image, audio file, or YouTube ID/URL
  correctAnswer: string;
  // Optional: if provided, these are used as options. 
  // If not, the app will generate random ones from other questions.
  customOptions?: string[]; 
  explanation: string;
}

export type GameStatus = 'intro' | 'playing' | 'finished';