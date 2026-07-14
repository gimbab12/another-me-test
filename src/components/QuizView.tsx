import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, ChevronRight, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { Gender, QuestionOption, Question } from '../types';
import { Language, UIStrings } from '../locales';

interface QuizViewProps {
  onBack: () => void;
  onComplete: (gender: Gender, photoUrl: string, choices: number[]) => void;
  lang: Language;
  ui: UIStrings;
  questions: Question[];
}

export default function QuizView({ onBack, onComplete, lang, ui, questions }: QuizViewProps) {
  const [step, setStep] = useState<'setup' | 'questions'>('setup');
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // Questionnaire states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // File handling
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg(ui.errorImageOnly);
      return;
    }
    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPhotoUrl(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  // Drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Setup completion
  const handleGoToQuestions = () => {
    if (!selectedGender) {
      setErrorMsg(ui.errorGender);
      return;
    }
    if (!photoUrl) {
      setErrorMsg(ui.errorPhoto);
      return;
    }
    setErrorMsg(null);
    setStep('questions');
  };

  // Question answer
  const handleAnswerSelect = (option: QuestionOption) => {
    const newAnswers = [...answers, option.gradeValue];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Completed all 5 questions
      if (selectedGender && photoUrl) {
        onComplete(selectedGender, photoUrl, newAnswers);
      }
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto" id="quiz-root">
      {/* Back button */}
      <div className="mb-4 flex items-center justify-between px-1" id="quiz-header">
        <button
          onClick={step === 'questions' ? () => setStep('setup') : onBack}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors py-1.5 px-2.5 rounded-xl hover:bg-slate-100"
          id="btn-back-step"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {step === 'questions' ? ui.btnBackToSetup : ui.btnBackToMain}
        </button>
        {step === 'questions' && (
          <span className="text-xs font-mono font-bold text-slate-400" id="quiz-counter">
            {ui.questionCounter} {currentQuestionIndex + 1} / {questions.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {step === 'setup' ? (
          <motion.div
            key="setup-screen"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-sm"
            id="setup-card"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-5 sm:mb-6 flex items-center gap-1.5" id="setup-title">
              {lang === 'ko' ? '성별 선택 및 사진 등록' : lang === 'en' ? 'Select Gender & Photo' : lang === 'ja' ? '性別選択と写真登録' : '选择性别与上传照片'} 
              <span className="text-rose-500 text-[10px] font-extrabold bg-rose-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                {lang === 'ko' ? '필수' : lang === 'en' ? 'Required' : lang === 'ja' ? '必須' : '必填'}
              </span>
            </h2>

            {/* Error alerts */}
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-100 flex items-start gap-2 text-xs text-rose-600 font-medium"
                id="error-alert"
              >
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* 1. Gender selection */}
            <div className="mb-5 sm:mb-6" id="gender-selection-section">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                {ui.stepGender}
              </label>
              <div className="grid grid-cols-2 gap-3" id="gender-grid">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGender('male');
                    setErrorMsg(null);
                  }}
                  className={`relative py-3.5 sm:py-4 rounded-2xl font-sans font-bold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-2 border-2 ${
                    selectedGender === 'male'
                      ? 'border-indigo-500 bg-indigo-50/40 text-indigo-700 shadow-sm'
                      : 'border-slate-100 hover:border-slate-300 bg-slate-50/50 text-slate-600'
                  }`}
                  id="btn-gender-male"
                >
                  <span className="text-2xl sm:text-3xl">👦</span>
                  <span>{ui.genderMale}</span>
                  {selectedGender === 'male' && (
                    <span className="absolute top-2.5 right-2.5 bg-indigo-500 text-white rounded-full p-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedGender('female');
                    setErrorMsg(null);
                  }}
                  className={`relative py-3.5 sm:py-4 rounded-2xl font-sans font-bold text-xs sm:text-sm transition-all flex flex-col items-center justify-center gap-2 border-2 ${
                    selectedGender === 'female'
                      ? 'border-rose-500 bg-rose-50/40 text-rose-700 shadow-sm'
                      : 'border-slate-100 hover:border-slate-300 bg-slate-50/50 text-slate-600'
                  }`}
                  id="btn-gender-female"
                >
                  <span className="text-2xl sm:text-3xl">👧</span>
                  <span>{ui.genderFemale}</span>
                  {selectedGender === 'female' && (
                    <span className="absolute top-2.5 right-2.5 bg-rose-500 text-white rounded-full p-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Drag & Drop File Upload */}
            <div className="mb-6 sm:mb-8" id="upload-section">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                {ui.stepPhoto}
              </label>
              
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-3xl p-5 sm:p-6 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[170px] sm:min-h-[180px] ${
                  isDragging
                    ? 'border-rose-400 bg-rose-50/40 scale-[0.99]'
                    : photoUrl
                    ? 'border-emerald-200 bg-emerald-50/10'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/30'
                }`}
                id="drop-zone"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                  id="file-input"
                />

                {photoUrl ? (
                  <div className="relative flex flex-col items-center w-full" id="uploaded-preview">
                    <img
                      src={photoUrl}
                      alt="User Face Preview"
                      className="h-24 w-24 sm:h-28 sm:w-28 object-cover rounded-full border-4 border-white shadow-md shadow-slate-200"
                      referrerPolicy="no-referrer"
                      id="img-preview"
                    />
                    <div className="mt-3 text-center">
                      <span className="text-xs font-bold text-slate-800 flex items-center justify-center gap-1">
                        <Check className="h-3.5 w-3.5 text-emerald-500" /> {ui.uploadSuccess}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1 font-medium">{ui.uploadChange}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center flex flex-col items-center" id="upload-placeholder">
                    <div className="h-9 w-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mb-3">
                      <Upload className="h-4.5 w-4.5" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-700">{ui.uploadTitle}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1.5 leading-relaxed">{ui.uploadDesc}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={handleGoToQuestions}
              className="w-full flex items-center justify-center gap-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 sm:py-4 px-6 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-98"
              id="btn-goto-questions"
            >
              {ui.btnStartQuiz} <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={`question-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-sm"
            id="question-card"
          >
            {/* Top progress bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-6" id="progress-bar-bg">
              <div
                className="bg-rose-500 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                id="progress-bar-fill"
              />
            </div>

            {/* Question title */}
            <div className="mb-5 sm:mb-6" id="question-text-wrapper">
              <span className="text-[10px] font-extrabold text-rose-500 tracking-wider uppercase bg-rose-50 py-1 px-2.5 rounded-full font-mono">
                QUESTION 0{questions[currentQuestionIndex].id}
              </span>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mt-3 leading-snug" id="question-title-text">
                {questions[currentQuestionIndex].questionText}
              </h3>
            </div>

            {/* Answer Options list */}
            <div className="space-y-2.5 sm:space-y-3" id="options-list">
              {questions[currentQuestionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(option)}
                  className="w-full text-left p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-slate-100/50 transition-all active:scale-99 flex items-start gap-3"
                  id={`btn-option-${idx}`}
                >
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-[10px] sm:text-xs font-bold text-slate-500 font-mono mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mt-0.5">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
