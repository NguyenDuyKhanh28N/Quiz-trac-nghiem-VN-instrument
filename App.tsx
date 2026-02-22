import React, { useState, useEffect, useMemo } from 'react';
import { GameStatus, Question } from './types';
import { QUIZ_DATA } from './constants';
import { MediaViewer } from './components/MediaViewer';
import { 
  Play, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  Music4, 
  Trophy,
  Star
} from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState<GameStatus>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  // Initialize game
  useEffect(() => {
    if (status === 'intro') {
      const shuffled = [...QUIZ_DATA].sort(() => Math.random() - 0.5);
      setShuffledQuestions(shuffled);
    }
  }, [status]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const currentOptions = useMemo(() => {
    if (!currentQuestion) return [];

    if (currentQuestion.customOptions && currentQuestion.customOptions.length > 0) {
       return [...currentQuestion.customOptions].sort(() => Math.random() - 0.5);
    }

    const distractors = QUIZ_DATA
      .filter(q => q.correctAnswer !== currentQuestion.correctAnswer)
      .map(q => q.correctAnswer);
    
    const selectedDistractors = distractors.sort(() => Math.random() - 0.5).slice(0, 3);
    
    return [currentQuestion.correctAnswer, ...selectedDistractors].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const handleStartGame = () => {
    setStatus('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
    } else {
      setStatus('finished');
    }
  };

  // 1. INTRO SCREEN
  if (status === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 shadow-2xl border-4 border-white max-w-lg w-full text-center transform transition-all hover:scale-[1.01] relative overflow-hidden">
          {/* Decorative background blobs */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-indigo-200 ring-4 ring-indigo-50">
            <Music4 className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 tracking-tight">
            Đố Vui Âm Nhạc
          </h1>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
            Khám phá thế giới nhạc cụ dân tộc Việt Nam đầy màu sắc và âm thanh thú vị!
          </p>
          <button 
            onClick={handleStartGame}
            className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl shadow-indigo-200 hover:-translate-y-1 relative z-10"
          >
            <span className="text-xl">Bắt đầu chơi</span>
            <Play className="w-6 h-6 group-hover:rotate-12 transition-transform fill-current" />
          </button>
        </div>
      </div>
    );
  }

  // 2. FINISHED SCREEN
  if (status === 'finished') {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    let message = "";
    let title = "";
    if (percentage === 100) { title = "Tuyệt Đỉnh!"; message = "Bạn đúng là một chuyên gia âm nhạc thực thụ!"; }
    else if (percentage >= 70) { title = "Rất Tốt!"; message = "Kiến thức của bạn về nhạc cụ rất đáng nể."; }
    else { title = "Cố Lên Nhé!"; message = "Hãy thử lại để khám phá thêm nhiều điều thú vị."; }

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-4 border-white max-w-lg w-full text-center animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 pointer-events-none"></div>
          
          <div className="relative">
            <Trophy className={`w-28 h-28 mx-auto mb-6 drop-shadow-lg ${percentage > 50 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
            {percentage === 100 && <Star className="absolute top-0 right-1/3 w-8 h-8 text-yellow-300 animate-bounce" />}
          </div>
          
          <h2 className="text-3xl font-black text-slate-800 mb-2">{title}</h2>
          <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 tracking-tighter">
            {score}<span className="text-4xl text-slate-400 font-bold">/{shuffledQuestions.length}</span>
          </div>
          <p className="text-slate-600 text-lg mb-10 font-medium">{message}</p>
          
          <button 
            onClick={() => setStatus('intro')}
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Chơi lại từ đầu</span>
          </button>
        </div>
      </div>
    );
  }

  // 3. GAMEPLAY SCREEN
  return (
    <div className="min-h-screen py-8 px-4 flex flex-col items-center">
      
      {/* Header / Progress Card */}
      <div className="w-full max-w-3xl mb-8 flex items-center justify-between bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/50">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Câu hỏi</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-800">{currentQuestionIndex + 1}</span>
            <span className="text-sm font-bold text-slate-400">/ {shuffledQuestions.length}</span>
          </div>
        </div>
        
        {/* Progress Bar Container */}
        <div className="hidden md:block flex-1 mx-8">
           <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestionIndex + (isAnswered ? 1 : 0)) / shuffledQuestions.length) * 100}%` }}
              ></div>
           </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Điểm số</span>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-2xl font-black text-slate-800">{score}</span>
          </div>
        </div>
      </div>

      {/* Main Game Card */}
      <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-xl overflow-hidden border-4 border-white/50 ring-1 ring-slate-100">
        
        {/* Question & Media */}
        <div className="p-6 md:p-8 pb-4">
          <MediaViewer 
            type={currentQuestion.type} 
            url={currentQuestion.mediaUrl} 
            altText={currentQuestion.title} 
          />
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-6 text-center leading-snug">
            {currentQuestion.title}
          </h2>
        </div>

        {/* Options Grid */}
        <div className="p-6 md:p-8 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentOptions.map((option, idx) => {
            // A, B, C, D labels
            const labelChar = String.fromCharCode(65 + idx); 
            
            let btnClass = "group relative p-3 md:p-4 rounded-2xl text-left border-2 transition-all duration-200 font-medium text-lg shadow-sm flex items-center gap-3 md:gap-4 ";
            let circleClass = "w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-lg font-bold border-2 transition-colors ";
            
            if (isAnswered) {
              if (option === currentQuestion.correctAnswer) {
                // Correct Answer Style
                btnClass += "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-md ring-2 ring-emerald-200 ring-offset-1"; 
                circleClass += "bg-emerald-500 border-emerald-500 text-white";
              } else if (option === selectedAnswer) {
                // User Wrong Pick Style
                btnClass += "bg-rose-50 border-rose-500 text-rose-900 opacity-90"; 
                circleClass += "bg-rose-500 border-rose-500 text-white";
              } else {
                // Unselected Others Style
                btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50 grayscale"; 
                circleClass += "bg-slate-200 border-slate-200 text-slate-500";
              }
            } else {
              // Default Interactive Style
              btnClass += "bg-white border-slate-100 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]";
              circleClass += "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600";
            }

            return (
              <button 
                key={idx} 
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={btnClass}
              >
                {/* A, B, C, D Label Circle */}
                <div className={circleClass}>
                  {labelChar}
                </div>
                
                {/* Option Text */}
                <span className="flex-1 leading-tight">{option}</span>

                {/* Status Icons */}
                {isAnswered && option === currentQuestion.correctAnswer && (
                  <CheckCircle className="w-6 h-6 text-emerald-500 fill-emerald-100 absolute right-3" />
                )}
                {isAnswered && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                  <XCircle className="w-6 h-6 text-rose-500 fill-rose-100 absolute right-3" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation / Feedback Panel */}
        {isAnswered && (
          <div className="bg-gradient-to-b from-indigo-50 to-white p-6 md:p-8 border-t border-indigo-100 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                   <div className="bg-indigo-100 p-1 rounded-md">
                     <Star className="w-4 h-4 text-indigo-600 fill-indigo-600" />
                   </div>
                   <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-wider">Giải thích</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-base">
                  {currentQuestion.explanation}
                </p>
              </div>
              <button 
                onClick={handleNext}
                className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span>{currentQuestionIndex === shuffledQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Progress Bar (Shown at bottom if needed, but we have header one now) */}
      <div className="md:hidden w-full max-w-3xl mt-6 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${((currentQuestionIndex + (isAnswered ? 1 : 0)) / shuffledQuestions.length) * 100}%` }}
        ></div>
      </div>

    </div>
  );
}