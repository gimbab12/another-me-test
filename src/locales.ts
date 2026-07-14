import { Gender, GradeResult, Question } from './types';

export type Language = 'ko' | 'en' | 'ja' | 'zh';

export interface UIStrings {
  title1: string;
  title2: string;
  subtitle: string;
  stepGender: string;
  stepPhoto: string;
  genderMale: string;
  genderFemale: string;
  uploadTitle: string;
  uploadDesc: string;
  uploadSuccess: string;
  uploadChange: string;
  btnStartQuiz: string;
  btnBackToSetup: string;
  btnBackToMain: string;
  questionCounter: string;
  scanTitle: string;
  scanSub: string;
  scanStatus1: string;
  scanStatus2: string;
  scanStatus3: string;
  scanStatus4: string;
  scanStatus5: string;
  heartRate: string;
  genderSync: string;
  reportTitle: string;
  visualMatchTitle: string;
  originalSelf: string;
  anotherSelf: string;
  visualGrade: string;
  charmTitle: string;
  mbtiMatchTitle: string;
  btnShare: string;
  btnRestart: string;
  copySuccess: string;
  copyFail: string;
  errorGender: string;
  errorPhoto: string;
  errorImageOnly: string;
  pwaTitle: string;
  pwaDesc: string;
  pwaGuideBtn: string;
  pwaInstallBtn: string;
  pwaDismiss: string;
  pwaAndroidStep: string;
  pwaIosStep: string;
  pwaDesktopStep: string;
}

export const LOCALES: Record<Language, { ui: UIStrings; questions: Question[]; femaleResults: Record<1 | 2 | 3 | 4, GradeResult>; maleResults: Record<1 | 2 | 3 | 4, GradeResult> }> = {
  ko: {
    ui: {
      title1: "또다른 나의 모습",
      title2: "페이스 테스트",
      subtitle: "나의 사진과 5가지 질문을 토대로 분석하여, 만약 내가 이성(남자/여자)으로 태어났다면 어땠을지 숨겨진 싱크로율과 매력 등급을 찾아보세요!",
      stepGender: "내 원래 성별 선택",
      stepPhoto: "나의 정면 사진 업로드 (자아 분석 스캔용)",
      genderMale: "남 자 (Male)",
      genderFemale: "여 자 (Female)",
      uploadTitle: "이곳에 얼굴 사진 드래그 또는 클릭",
      uploadDesc: "정면이 잘 나온 셀카 사진을 추천합니다",
      uploadSuccess: "사진 업로드 완료",
      uploadChange: "클릭하여 다른 사진으로 교체",
      btnStartQuiz: "질문 시작하기",
      btnBackToSetup: "성별/사진 설정으로",
      btnBackToMain: "메인화면으로",
      questionCounter: "질문",
      scanTitle: "또다른 나의 자아 탐색 중",
      scanSub: "두근두근! 당신의 얼굴과 답변을 조율하여 또다른 자아를 매칭합니다.",
      scanStatus1: "얼굴 윤곽선 검출 및 특징점 정렬 중...",
      scanStatus2: "이목구비 대칭 비율 및 황금비 매칭 중...",
      scanStatus3: "성격 성향 분석 및 가상 자아 매핑 중...",
      scanStatus4: "또다른 나의 유전자 합성 및 아바타 렌더링 중...",
      scanStatus5: "정밀 매칭 완료! 자아 동기화 중...",
      heartRate: "심박수",
      genderSync: "성별 동기화 완료",
      reportTitle: "자아 스캔 분석 결과 리포트",
      visualMatchTitle: "페이스 듀얼 자아 매칭",
      originalSelf: "원래 나의 모습",
      anotherSelf: "또다른 나의 모습",
      visualGrade: "Visual Grade",
      charmTitle: "대표적인 나의 매력 포인트",
      mbtiMatchTitle: "어울리는 성격 유형",
      btnShare: "결과 공유하기",
      btnRestart: "테스트 다시하기",
      copySuccess: "링크가 클립보드에 복사되었습니다! 친구들에게 공유해보세요.",
      copyFail: "링크를 복사하는 데 실패했습니다. 주소창의 URL을 공유해주세요.",
      errorGender: "나의 원래 성별을 먼저 선택해주세요.",
      errorPhoto: "자아를 분석할 정면 얼굴 사진을 올려주세요.",
      errorImageOnly: "이미지 파일만 등록할 수 있습니다.",
      pwaTitle: "홈 화면에 앱 추가하기",
      pwaDesc: "더 편리하게 언제 어디서나 또다른 자아 매칭 테스트를 이용해보세요! 설치하시면 앱처럼 실행됩니다.",
      pwaGuideBtn: "설치 가이드 보기",
      pwaInstallBtn: "홈 화면에 바로 추가",
      pwaDismiss: "나중에 하기",
      pwaAndroidStep: "크롬(Chrome) 브라우저 우측 상단 메뉴(점 3개) -> '홈 화면에 추가' 선택",
      pwaIosStep: "사파리(Safari) 브라우저 하단 '공유(내보내기)' 버튼 -> '홈 화면에 추가' 선택",
      pwaDesktopStep: "브라우저 주소창 우측 끝의 설치 아이콘(⊕)을 누르거나 설정에서 '설치'를 눌러주세요"
    },
    questions: [
      {
        id: 1,
        questionText: "나의 평소 일상 속 에너지는?",
        options: [
          { text: "조용하고 차분하지만 은근히 존재감 있는 타입", gradeValue: 1 },
          { text: "어디서나 친근하고 대화를 부드럽게 이끄는 타입", gradeValue: 2 },
          { text: "웃음이 많고 댕댕이처럼 통통 튀는 매력 타입", gradeValue: 3 },
          { text: "넘치는 광기와 개그 욕심을 참을 수 없는 타입", gradeValue: 4 },
        ]
      },
      {
        id: 2,
        questionText: "친구가 갑자기 울며 '나 슬퍼서 화분 샀어'라고 할 때 반응은?",
        options: [
          { text: "'무슨 화분 샀어? 기분 풀리는 향기 나는 거니?' (디테일과 감성)", gradeValue: 1 },
          { text: "'왜 슬퍼ㅠㅠ 무슨 일이야? 얘기해봐' (다정한 공감)", gradeValue: 2 },
          { text: "'우와 화분! 이름 지어줬어? 슬픔은 귀여운 걸로 날리자!' (초긍정 텐션)", gradeValue: 3 },
          { text: "'화분? 너 어차피 또 일주일 만에 저세상 보낼 거잖아...' (극사실주의 태클)", gradeValue: 4 },
        ]
      },
      {
        id: 3,
        questionText: "길을 걷다가 완전 내 스타일인 사람을 마주쳤을 때 나는?",
        options: [
          { text: "그윽한 눈빛을 교환한 뒤, 기품 있게 스쳐 지나간다", gradeValue: 1 },
          { text: "미소와 함께 조심스럽고 세련되게 다가가 연락처를 묻는다", gradeValue: 2 },
          { text: "친구 등짝을 때리며 '헐 대박 귀여워!' 소리 없는 비명을 지른다", gradeValue: 3 },
          { text: "당황해서 순간 고장 난 로봇처럼 삐그덕대며 이상한 걸음걸이로 걷는다", gradeValue: 4 },
        ]
      },
      {
        id: 4,
        questionText: "주말 약속이 취소되었을 때 드는 솔직한 내 생각은?",
        options: [
          { text: "조용히 클래식이나 유튜브를 보며 혼자만의 홈스파를 즐긴다", gradeValue: 1 },
          { text: "아쉽지만 밀린 방 청소도 하고 다른 약속을 잡아볼까 탐색한다", gradeValue: 2 },
          { text: "침대와 합체하여 뒹굴뒹굴 귀엽게 귤 까먹으며 힐링한다", gradeValue: 3 },
          { text: "이미 양말까지 다 신었는데..! 집 앞 편의점이라도 나가서 광기를 해소한다", gradeValue: 4 },
        ]
      },
      {
        id: 5,
        questionText: "거울 속 내 모습을 볼 때 머릿속을 스치는 생각은?",
        options: [
          { text: "음, 이 정도 선과 분위기면 솔직히 작품 하나 아닌가?", gradeValue: 1 },
          { text: "깔끔하고 훈훈하게 생겼네! 오늘도 호감형으로 가볼까?", gradeValue: 2 },
          { text: "헤헤, 좀 귀엽네? 볼 꼬집어보고 싶은 매력이지!", gradeValue: 3 },
          { text: "어이구, 이 개구쟁이 녀석! 오늘도 한 건 해보자고!", gradeValue: 4 },
        ]
      }
    ],
    femaleResults: {
      1: {
        grade: 1,
        title: "천상계 1등급 여신",
        subTitle: "숨 막히는 비주얼과 압도적인 우아함",
        description: "조용히 눈만 마주쳐도 만인의 심장을 멎게 만드는 천상계 여신상입니다. 화려하면서도 기품 넘치는 아우라를 지녀 차가워 보이지만, 내면에는 섬세하고 고요한 따뜻함을 품고 있습니다. 다른 사람들은 쉽게 말도 붙이지 못할 만큼 고결한 에너지를 뿜어냅니다.",
        charms: ["만점짜리 비주얼", "차분하고 품격 있는 목소리", "고급스러운 아우라"],
        mbtiMatch: "INFJ / INTJ 형",
        image: ""
      },
      2: {
        grade: 2,
        title: "캠퍼스 훈녀 2등급",
        subTitle: "모두가 꿈꾸는 설렘 유발 첫사랑상",
        description: "보기만 해도 마음이 훈훈해지는 캠퍼스 퀸카, 첫사랑 이미지의 주인공입니다. 부드러운 미소와 섬세한 배려심으로 주변 사람들에게 항상 설렘과 안락함을 줍니다. 호감형 비주얼과 세련된 패션 센스로 호불호가 절대 없는 완벽한 대중적 인기를 얻고 있습니다.",
        charms: ["호감도 100% 미소", "센스 있는 대화법", "따스하고 편안한 분위기"],
        mbtiMatch: "ENFJ / ESFJ 형",
        image: ""
      },
      3: {
        grade: 3,
        title: "러블리 볼매 3등급",
        subTitle: "출구 없는 매력의 사랑스러운 댕댕이",
        description: "한 번 빠지면 절대로 헤어 나올 수 없는 인간 비글이자 러블리 그 자체! 애교 섞인 눈웃음과 긍정적인 에너지로 어두운 방안을 환하게 비추는 햇살 같은 존재입니다. 친해질수록 더 귀엽고 엉뚱한 행동으로 모두의 최애 자리를 꿰차는 스타일입니다.",
        charms: ["인간 비타민 에너지", "출구 없는 눈웃음", "볼수록 빠져드는 볼매"],
        mbtiMatch: "ENFP / ESFP 형",
        image: ""
      },
      4: {
        grade: 4,
        title: "유쾌발랄 비글 4등급",
        subTitle: "미친 존재감! 우주 최강 유쾌한 개그 요정",
        description: "존재 자체만으로 모두를 빵 터뜨릴 수 있는 미친 텐션의 유쾌발랄 에너자이저! 엉뚱함과 깨발랄한 성격 덕분에 친구들 사이에서 절대 빠질 수 없는 핵인싸이자 분위기 메이커입니다. 장난꾸러기 같지만 눈치가 빨라 슬플 틈을 주지 않는 의리의 소유자입니다.",
        charms: ["뼈속까지 개그 유전자", "독보적인 핵인싸력", "지루할 틈 없는 신선함"],
        mbtiMatch: "ENTP / ESTP 형",
        image: ""
      }
    },
    maleResults: {
      1: {
        grade: 1,
        title: "천상계 1등급 남신",
        subTitle: "조각 같은 비주얼과 시크한 완벽남",
        description: "길을 걷기만 해도 모세의 기적처럼 인파가 갈라질 것 같은 압도적 아우라의 소유자입니다. 완벽한 선과 시크한 무드로 남녀노소 불문하고 동경하게 만들죠. 냉정해 보이지만 알면 알수록 진지하고 듬직하며 묵직한 매력이 넘치는 완벽한 정석 남신입니다.",
        charms: ["CG급 명품 비주얼", "차갑고 치명적인 아우라", "묵직한 신뢰감"],
        mbtiMatch: "ISTJ / INTJ 형",
        image: ""
      },
      2: {
        grade: 2,
        title: "훈훈 눈부신 2등급 훈남",
        subTitle: "다정다감한 교회 오빠 & 캠퍼스 선배상",
        description: "부드럽고 훈훈한 외모에 다정함이 뚝뚝 묻어나는 남친짤의 정석입니다. 세련된 옷핏과 다정한 말투로 주위 사람들의 마음을 따뜻하게 녹여줍니다. 예의 바르고 배려 깊은 행동으로 모임 내에서 언제나 뜨거운 인기와 사랑을 한 몸에 받습니다.",
        charms: ["설렘 가득한 남친핏", "스윗한 꿀보이스", "만인의 이상형 다정함"],
        mbtiMatch: "INFJ / ENFJ 형",
        image: ""
      },
      3: {
        grade: 3,
        title: "귀염뽀짝 댕댕 3등급",
        subTitle: "머리를 쓰다듬고 싶은 대형견 남친상",
        description: "보호본능을 무한 자극하는 귀엽고 러블리한 대형 댕댕이 스타일! 장난기 어린 표정과 귀여운 눈빛으로 주변을 항상 유쾌하고 기분 좋게 만듭니다. 지치지 않는 긍정 파워와 비글미 넘치는 친근감으로 만나는 이들에게 힐링을 선물하는 매력 만점 타입입니다.",
        charms: ["쓰담쓰담 자극 헤어핏", "애교 가득한 눈망울", "인간 무공해 힐링력"],
        mbtiMatch: "ISFP / ENFP 형",
        image: ""
      },
      4: {
        grade: 4,
        title: "유쾌 통쾌 미친존재감 4등급",
        subTitle: "뒤돌아서면 생각나는 마성의 뼈그맨",
        description: "인생을 축제처럼 살아가는 독보적 텐션의 유쾌한 마성남! 뻔한 건 절대 사절하며, 매번 상상을 초월하는 엉뚱함과 개그 본능으로 모두의 활력소가 됩니다. 다가가기 편안하고 한 번 대화하면 절대 잊을 수 없는 미친 중독성을 가진 매력 덩어리입니다.",
        charms: ["치명적인 웃음 폭격", "상상 초월 개그 드립", "끝없는 출구 무한 중독성"],
        mbtiMatch: "ENTP / ESTP 형",
        image: ""
      }
    }
  },
  en: {
    ui: {
      title1: "Another Me",
      title2: "Face Test",
      subtitle: "Analyze your photo and answer 5 quick questions to discover your alter-ego of the opposite gender! Find your hidden style, look, and charm grade.",
      stepGender: "Choose Your Original Gender",
      stepPhoto: "Upload Front Face Photo (For Scan)",
      genderMale: "Male (👦)",
      genderFemale: "Female (👧)",
      uploadTitle: "Drag & drop your face photo here, or click to browse",
      uploadDesc: "A front-facing clear selfie is highly recommended",
      uploadSuccess: "Photo Upload Completed",
      uploadChange: "Click to change photo",
      btnStartQuiz: "Start Scanning Quiz",
      btnBackToSetup: "Back to Settings",
      btnBackToMain: "Back to Main",
      questionCounter: "Question",
      scanTitle: "Searching Your Alter-Ego",
      scanSub: "Beat-beat! Tuning your face and answers to map your custom visual avatar.",
      scanStatus1: "Detecting facial contours and aligning landmarks...",
      scanStatus2: "Analyzing facial symmetry and golden ratio...",
      scanStatus3: "Evaluating personality traits and mapping virtual ego...",
      scanStatus4: "Synthesizing alter-ego DNA & rendering custom avatar...",
      scanStatus5: "Scan completed! Syncing match reports...",
      heartRate: "Heart Rate",
      genderSync: "Gender Sync Complete",
      reportTitle: "Alter-Ego Face Scan Report",
      visualMatchTitle: "Face Dual Alter-Ego Matching",
      originalSelf: "Original Self",
      anotherSelf: "Another Me",
      visualGrade: "Visual Grade",
      charmTitle: "Key Attraction Points",
      mbtiMatchTitle: "Matching Personalities",
      btnShare: "Share Results",
      btnRestart: "Retake Test",
      copySuccess: "Link copied to clipboard! Share it with your friends.",
      copyFail: "Failed to copy link. Please copy the URL from the address bar.",
      errorGender: "Please select your original gender first.",
      errorPhoto: "Please upload your front-facing face photo.",
      errorImageOnly: "Only image files can be uploaded.",
      pwaTitle: "Add App to Home Screen",
      pwaDesc: "Access the Alter-Ego Face Matcher more conveniently from your home screen. Runs smoothly like a native app!",
      pwaGuideBtn: "How to Install",
      pwaInstallBtn: "Add directly to Home Screen",
      pwaDismiss: "Later",
      pwaAndroidStep: "Open Chrome, tap settings menu (3 dots) -> Select 'Add to Home Screen'",
      pwaIosStep: "Open Safari, tap Share button (upload icon) -> Select 'Add to Home Screen'",
      pwaDesktopStep: "Click the Install icon (⊕) on the right of the address bar or search 'Install' in your browser menu"
    },
    questions: [
      {
        id: 1,
        questionText: "What is your typical energy level in daily life?",
        options: [
          { text: "Quiet and calm, but possessing a strong underlying presence", gradeValue: 1 },
          { text: "Friendly and approachable, leading conversations smoothly", gradeValue: 2 },
          { text: "Bubbly and cheerful, bouncing around with cute energy", gradeValue: 3 },
          { text: "Wild and comical, can't resist making hilarious jokes", gradeValue: 4 },
        ]
      },
      {
        id: 2,
        questionText: "A friend cries and says, 'I bought a plant because I was sad.' How do you react?",
        options: [
          { text: "'What kind of plant did you buy? Does it have a healing scent?' (Detail & Vibe)", gradeValue: 1 },
          { text: "'Oh no, why are you sad? What happened? Tell me everything!' (Warm Empathy)", gradeValue: 2 },
          { text: "'Wow, a plant! Did you give it a name? Cute things blow sadness away!' (Super Positive)", gradeValue: 3 },
          { text: "'A plant? You're probably going to kill it in a week anyway...' (Strict Realist)", gradeValue: 4 },
        ]
      },
      {
        id: 3,
        questionText: "You spot someone who is completely your ideal type on the street. What do you do?",
        options: [
          { text: "Lock eyes gracefully, then walk past with a dignified aura", gradeValue: 1 },
          { text: "Approach them politely with a warm smile and ask for their contact", gradeValue: 2 },
          { text: "Slap your friend's shoulder and scream internally: 'Oh my god, so cute!'", gradeValue: 3 },
          { text: "Freeze up like a broken robot and walk away in a hilariously weird posture", gradeValue: 4 },
        ]
      },
      {
        id: 4,
        questionText: "When weekend plans are suddenly canceled, what is your honest reaction?",
        options: [
          { text: "Perfect. Enjoy peaceful classical music or YouTube with a home spa.", gradeValue: 1 },
          { text: "A bit disappointed, but clean up the room and look for other meetups.", gradeValue: 2 },
          { text: "Merge into the bed, roll around happily, and eat sweet snacks in cozy comfort.", gradeValue: 3 },
          { text: "Already put socks on! Head to the nearest store to release my wild energy.", gradeValue: 4 },
        ]
      },
      {
        id: 5,
        questionText: "What crosses your mind when you look at yourself in the mirror?",
        options: [
          { text: "Honestly, with these elegant features and mood, I look like a masterpiece.", gradeValue: 1 },
          { text: "Clean and attractive! Ready to present my friendly, charming self today.", gradeValue: 2 },
          { text: "Hehe, quite cute! Anyone would want to pinch these adorable cheeks.", gradeValue: 3 },
          { text: "Look at this mischievous troublemaker! Let's make today hilarious!", gradeValue: 4 },
        ]
      }
    ],
    femaleResults: {
      1: {
        grade: 1,
        title: "S-Tier Celestial Goddess",
        subTitle: "Breathtaking visual with ultimate elegance",
        description: "A heavenly goddess look that halts everyone's heart with just a single glance. Elegant, mysterious, and sophisticated. You radiate an aura of dignity and grace that makes others respect and admire you from afar, while hiding a deeply thoughtful, warm inner soul.",
        charms: ["Flawless S-tier facial features", "Calm and refined tone", "Luxurious, sophisticated aura"],
        mbtiMatch: "INFJ / INTJ",
        image: ""
      },
      2: {
        grade: 2,
        title: "Campus Sweetheart",
        subTitle: "The dream-like classic first love aesthetic",
        description: "A warm-hearted campus queen embodying the classic 'first-love' vibe. Friendly, highly styled, and kind, you naturally spark romantic flutter in anyone you meet. Your gentle smile and polite gestures make you universally loved in any community.",
        charms: ["100% charming heart-melting smile", "Smart and kind conversational style", "Warm and cozy presence"],
        mbtiMatch: "ENFJ / ESFJ",
        image: ""
      },
      3: {
        grade: 3,
        title: "Lovely Puppy-like Charm",
        subTitle: "Irresistibly cute puppy look with endless charm",
        description: "Bright, energetic, and endlessly cute! You light up the entire room with your adorable eye-smile and playful positive energy. Once people experience your cheerful antics, there is absolutely no escape from your magnetic puppy charm.",
        charms: ["Human multivitamin energy", "Unbeatable cute eye-smile", "Addictive, lovely personality"],
        mbtiMatch: "ENFP / ESFP",
        image: ""
      },
      4: {
        grade: 4,
        title: "Witty & Wild Energetic",
        subTitle: "Ultimate mood maker and comical genius",
        description: "A true entertainment powerhouse! Your presence alone triggers smiles and laughter. You are the ultimate life of the party, bringing chaotic but deeply joyful energy. Highly observant and loyal, you never let anyone feel sad.",
        charms: ["Natural-born comedy genes", "Overwhelming social confidence", "Zero-boredom fresh interactions"],
        mbtiMatch: "ENTP / ESTP",
        image: ""
      }
    },
    maleResults: {
      1: {
        grade: 1,
        title: "S-Tier Celestial God",
        subTitle: "Sculpted features with a chic, magnetic charisma",
        description: "An outstanding S-tier god-like visual with an overwhelming aura. Highly dignified, quiet, and deeply trustworthy. You look like a sculpture carved by gods; though you seem cold on the outside, you carry a solid, profound sense of loyalty and passion.",
        charms: ["CG-level masterpiece features", "Chic and mysterious charisma", "Solid, dependable presence"],
        mbtiMatch: "ISTJ / INTJ",
        image: ""
      },
      2: {
        grade: 2,
        title: "Warm & Charming Seonbae",
        subTitle: "Sweet boyfriend material & college senior look",
        description: "The absolute standard of sweet, boyfriend material. Gentle, friendly, and incredibly handsome with a warm demeanor that instantly melts hearts. You possess a great fashion sense and impeccable manners, making you highly popular.",
        charms: ["Dashing boyfriend style outfit", "Sweet, warm-toned voice", "Impeccable manners and empathy"],
        mbtiMatch: "INFJ / ENFJ",
        image: ""
      },
      3: {
        grade: 3,
        title: "Playful Golden Retriever",
        subTitle: "Fluffy puppy-like boyfriend who sparks protective instincts",
        description: "A cute, lovely giant puppy-dog who loves playful banter! Full of positive vibes and refreshing, healing charms. Your sweet puppy eyes and energetic nature bring comfort, laughter, and healing to everyone in your orbit.",
        charms: ["Fluffy, strokeable hairstyle vibe", "Adorable, bright puppy eyes", "Eco-friendly, pure healing power"],
        mbtiMatch: "ISFP / ENFP",
        image: ""
      },
      4: {
        grade: 4,
        title: "Ultimate Fun & Moody Rebel",
        subTitle: "Addictive sense of humor & scene stealer",
        description: "You live life like a festival! Completely unique, hyper-active, and hilariously funny. You hate standard routines and always surprise people with your out-of-this-world humor. Once people talk to you, they are hooked on your crazy charms.",
        charms: ["Mind-blowing comedy punchlines", "Unstoppable wild charisma", "Addictive personality loop"],
        mbtiMatch: "ENTP / ESTP",
        image: ""
      }
    }
  },
  ja: {
    ui: {
      title1: "もう一人の私",
      title2: "フェイス診断",
      subtitle: "写真アップロードと5つの質問から、もしあなたが異性として生まれたらどうなるかを診断！隠された魅力ランクと相性タイプを探りましょう！",
      stepGender: "あなたの元の性別を選択",
      stepPhoto: "正面写真をアップロード (顔スキャン用)",
      genderMale: "男性 (👦)",
      genderFemale: "女性 (👧)",
      uploadTitle: "ここに顔写真をドラッグするか、クリックして選択",
      uploadDesc: "正面がはっきりと写っている自撮り写真をおすすめします",
      uploadSuccess: "写真アップロード完了",
      uploadChange: "クリックして別の写真に変更",
      btnStartQuiz: "質問をスタートする",
      btnBackToSetup: "性別/写真設定へ",
      btnBackToMain: "メイン画面へ",
      questionCounter: "質問",
      scanTitle: "もう一人の自我を探索中",
      scanSub: "ドキドキ！あなたの顔と回答を解析して、もう一人のアバターを生成しています。",
      scanStatus1: "顔の輪郭検出および特徴点の配置中...",
      scanStatus2: "目鼻立ちの対称比率および黄金比をマッチング中...",
      scanStatus3: "性格傾向の分析およびバーチャル自我をマッピング中...",
      scanStatus4: "もう一人の遺伝子合成およびアバターのレンダリング中...",
      scanStatus5: "マッチング完了！自我の同期化中...",
      heartRate: "心拍数",
      genderSync: "性別同期完了",
      reportTitle: "もう一人の私・フェイススキャン診断書",
      visualMatchTitle: "フェイスデュアル自我マッチング",
      originalSelf: "本来の自分",
      anotherSelf: "もう一人の私",
      visualGrade: "ビジュアル等級",
      charmTitle: "代表的な魅力ポイント",
      mbtiMatchTitle: "お似合いの性格タイプ",
      btnShare: "結果をシェアする",
      btnRestart: "もう一度テストする",
      copySuccess: "リンクがクリップボードにコピーされました！友達にシェアしましょう。",
      copyFail: "リンクのコピーに失敗しました。アドレスバーのURLを共有してください。",
      errorGender: "先に元の性別を選択してください。",
      errorPhoto: "顔スキャン用の正面写真をアップロードしてください。",
      errorImageOnly: "画像ファイルのみアップロード可能です。",
      pwaTitle: "ホーム画面にアプリを追加",
      pwaDesc: "「もう一人の私」フェイス診断をスマホのホーム画面に追加して、もっと便利に使いましょう！本物のアプリのようにサクサク起動します。",
      pwaGuideBtn: "インストール方法",
      pwaInstallBtn: "ホーム画面に追加する",
      pwaDismiss: "後でする",
      pwaAndroidStep: "Chromeブラウザ右上のメニュー(縦の3点リーダー) -> 「ホーム画面に追加」を選択",
      pwaIosStep: "Safariブラウザ下部の「共有(上矢印)」ボタン -> 「ホーム画面に追加」を選択",
      pwaDesktopStep: "アドレスバー右端のインストールアイコン(⊕)をクリックするか、ブラウザメニューから「インストール」を選択してください"
    },
    questions: [
      {
        id: 1,
        questionText: "普段の日常生活でのあなたのエネルギーは？",
        options: [
          { text: "静かで落ち着いているが、確かな存在感を放つタイプ", gradeValue: 1 },
          { text: "誰にでも親しみやすく、会話を穏やかにリードするタイプ", gradeValue: 2 },
          { text: "いつも笑顔で、子犬のように人懐っこく弾けるタイプ", gradeValue: 3 },
          { text: "溢れるユーモアとお笑いセンスを隠しきれないタイプ", gradeValue: 4 },
        ]
      },
      {
        id: 2,
        questionText: "友人が泣きながら「悲しくて植木鉢買った」と言ってきたら？",
        options: [
          { text: "「どんな鉢を買ったの？癒やされる香りはする？」(詳細と感性)", gradeValue: 1 },
          { text: "「どうして悲しいの…？何かあったの？話して」(温かい共感)", gradeValue: 2 },
          { text: "「わぁ鉢植え！名前つけた？可愛いもので悲しみを吹き飛ばそう！」(超ポジティブ)", gradeValue: 3 },
          { text: "「鉢植え？どうせまた1週間で枯らしちゃうんでしょ…」(超現実的なツッコミ)", gradeValue: 4 },
        ]
      },
      {
        id: 3,
        questionText: "街中で完全にドストライクなタイプの人と目が合ったら？",
        options: [
          { text: "優雅に視線を交わし、気品を漂わせて通り過ぎる", gradeValue: 1 },
          { text: "笑顔でスマートに近づき、丁寧に連絡先を尋ねる", gradeValue: 2 },
          { text: "友達の背中を叩きながら「やばい、超可愛い！」と心の中で叫ぶ", gradeValue: 3 },
          { text: "焦りすぎてロボットのようにカチコチになり、おかしな歩き方になる", gradeValue: 4 },
        ]
      },
      {
        id: 4,
        questionText: "週末の予定が急にキャンセルされた時の本音は？",
        options: [
          { text: "よし！静かにクラシックを聴くか、YouTubeを見ながらホームスパを楽しむ", gradeValue: 1 },
          { text: "少し残念だけど、部屋の掃除をして他の予定が組めるか探る", gradeValue: 2 },
          { text: "ベッドと一体化してゴロゴロ、可愛いおやつを食べながら癒やされる", gradeValue: 3 },
          { text: "靴下まで履いてたのに！コンビニにでも行って発散する", gradeValue: 4 },
        ]
      },
      {
        id: 5,
        questionText: "鏡の中の自分を見る時にふと思うことは？",
        options: [
          { text: "うーん、この洗練されたラインと雰囲気、正直かなりいけてるのでは？", gradeValue: 1 },
          { text: "清潔感があって好印象！今日も笑顔で爽やかにいこう！", gradeValue: 2 },
          { text: "へへ、ちょっと可愛いかも？思わずツンツンしたくなる魅力！", gradeValue: 3 },
          { text: "よお、いたずらっ子！今日も楽しいことをやらかしてやろう！", gradeValue: 4 },
        ]
      }
    ],
    femaleResults: {
      1: {
        grade: 1,
        title: "天界の最高峰女神",
        subTitle: "息をのむ美しさと圧倒的な気品",
        description: "静かに目を合わせるだけで誰もが心を奪われる天界の女神。華やかで洗練された気品を持ち、クールに見えますが、内面はとても繊細で温かい人です。他の人は気軽に話しかけられないほどの神聖なオーラを放ちます。",
        charms: ["完璧な美しさとフェイスライン", "落ち着いた知的な話し方", "高級感あふれる独特なオーラ"],
        mbtiMatch: "INFJ / INTJ 型",
        image: ""
      },
      2: {
        grade: 2,
        title: "キャンパスの人気美女",
        subTitle: "みんなが憧れる初恋の代名詞",
        description: "見るだけで心が和むキャンパスのヒロイン。優しい笑顔と細やかな気配りで、周囲をいつもときめかせます。洗練されたスタイルと親しみやすさで、絶大な大衆的人気を誇っています。",
        charms: ["好感度100%の極上スマイル", "気配り上手な会話術", "温かく心地よい空気感"],
        mbtiMatch: "ENFJ / ESFJ 型",
        image: ""
      },
      3: {
        grade: 3,
        title: "愛され子犬系女子",
        subTitle: "抜け出せない底なしの可愛さ",
        description: "一度ハマると抜け出せない愛嬌抜群の存在。明るい笑顔とポジティブなエネルギーで、みんなのアイドルです。親しくなるほどに可愛らしく、お茶目な行動で魅了します。",
        charms: ["人間ビタミンと呼ばれる元気さ", "愛くるしい胸キュン目笑い", "見れば見るほどハマる愛嬌"],
        mbtiMatch: "ENFP / ESFP 型",
        image: ""
      },
      4: {
        grade: 4,
        title: "ハッピー全開おてんば娘",
        subTitle: "圧倒的存在感の爆笑メーカー",
        description: "そこにいるだけで周りを笑顔にするハッピーガール。ユーモアに溢れ、友達思いの優しさを秘めた人気者です。お茶目でおしゃべりですが、実は空気が読める気配り上手です。",
        charms: ["お笑いセンス抜群のワードセンス", "誰とでも馴染む抜群の社交性", "飽きさせないフレッシュな魅力"],
        mbtiMatch: "ENTP / ESTP 型",
        image: ""
      }
    },
    maleResults: {
      1: {
        grade: 1,
        title: "天界の最高峰男神",
        subTitle: "彫刻のような美しさとクールな魅力",
        description: "圧倒的なオーラを放つS級の男神。クールで完璧に見えますが、知れば知るほど誠実で頼りがいのある、正真正銘のハンサムです。完璧なシルエットで、男女問わず憧れの的です。",
        charms: ["CGレベルの彫刻のようなビジュアル", "シックで謎めいたカリスマ", "圧倒的な頼りがいと誠実さ"],
        mbtiMatch: "ISTJ / INTJ 型",
        image: ""
      },
      2: {
        grade: 2,
        title: "爽やかキャンパス先輩",
        subTitle: "優しさに満ちた理想の彼氏像",
        description: "柔らかく爽やかな外見に、優しさが溢れるモテ男。センスの良い着こなしと親切な振る舞いで、誰からも愛されます。気遣いに満ちた大人っぽい態度が魅力的です。",
        charms: ["好感度の高いきれいめな装い", "包容力のある甘いハニーボイス", "誰もが恋に落ちる優しさ"],
        mbtiMatch: "INFJ / ENFJ 型",
        image: ""
      },
      3: {
        grade: 3,
        title: "愛嬌満点の子犬系男子",
        subTitle: "母性本能をくすぐる大型犬彼氏",
        description: "お茶目で愛嬌たっぷり、大型犬のように人懐っこい癒やし系。いつもハッピーで、周囲の人々を穏やかに癒やします。コロコロ変わる表情が放っておけない可愛さです。",
        charms: ["ふんわりとした親しみやすい髪型", "純粋でまっすぐな澄んだ瞳", "いるだけで癒やされる森林浴パワー"],
        mbtiMatch: "ISFP / ENFP 型",
        image: ""
      },
      4: {
        grade: 4,
        title: "お笑いセンス抜群の愛されキャラ",
        subTitle: "一度話すと忘れられない魔性の男",
        description: "人生を全力で楽しむ圧倒的ハイテンションな男性。予想の斜め上をいく面白さと親しみやすさで、中毒性が抜群です。おもしろくて陽気ですが、いざという時の頼もしさとのギャップも最高です。",
        charms: ["破壊力抜群の爆笑トーク力", "予想不可能な面白いアイデア", "中毒性の高い唯一無二の存在感"],
        mbtiMatch: "ENTP / ESTP 型",
        image: ""
      }
    }
  },
  zh: {
    ui: {
      title1: "另一个我",
      title2: "颜值测试",
      subtitle: "上传你的正面照片并回答5个趣味问题，探索你如果转生为异性（男生/女生）会是什么样！发现你的隐藏魅力等级与性格契合度！",
      stepGender: "选择你原本的性别",
      stepPhoto: "上传正面照片（用于人脸分析）",
      genderMale: "男生 (👦)",
      genderFemale: "女生 (👧)",
      uploadTitle: "将照片拖拽到此处，或点击选择照片",
      uploadDesc: "强烈推荐使用正面清晰的自拍照",
      uploadSuccess: "照片上传成功",
      uploadChange: "点击更换其他照片",
      btnStartQuiz: "开始趣味测试",
      btnBackToSetup: "返回设置",
      btnBackToMain: "返回主页",
      questionCounter: "问题",
      scanTitle: "正在探索另一个自我",
      scanSub: "噗通噗通！正在结合您的脸部特征和回答，为您定制虚拟形象。",
      scanStatus1: "正在检测脸部轮廓及关键特征点...",
      scanStatus2: "正在比对五官对称比例与黄金比例...",
      scanStatus3: "正在分析性格倾向并绘制虚拟人格...",
      scanStatus4: "正在合成异性基因并渲染生成头像...",
      scanStatus5: "匹配成功！正在同步核心数据...",
      heartRate: "心率",
      genderSync: "性别数据同步完成",
      reportTitle: "另一个我·脸部扫描分析报告",
      visualMatchTitle: "脸部双重自我匹配",
      originalSelf: "原本的我",
      anotherSelf: "另一个我",
      visualGrade: "颜值等级",
      charmTitle: "代表性的魅力特质",
      mbtiMatchTitle: "最契合的性格类型",
      btnShare: "分享测试结果",
      btnRestart: "重新测试",
      copySuccess: "链接已成功复制到剪贴板！快分享给朋友们吧。",
      copyFail: "复制链接失败，请直接复制浏览器地址栏的URL。",
      errorGender: "请先选择你原本的性别。",
      errorPhoto: "请上传用于扫描分析的正面人脸照片。",
      errorImageOnly: "仅支持上传图片文件。",
      pwaTitle: "添加到主屏幕",
      pwaDesc: "把「另一个我」添加到手机桌面，随时随地测试！安装后将像原生应用一样流畅运行。",
      pwaGuideBtn: "安装指南",
      pwaInstallBtn: "立即添加至主屏幕",
      pwaDismiss: "暂不添加",
      pwaAndroidStep: "使用Chrome浏览器，点击右上角菜单(3个点) -> 选择「添加到主屏幕」",
      pwaIosStep: "使用Safari浏览器，点击底部「分享(导出)」按钮 -> 选择「添加到主屏幕」",
      pwaDesktopStep: "点击地址栏右侧的安装图标(⊕)，或在浏览器菜单中选择「安装」"
    },
    questions: [
      {
        id: 1,
        questionText: "你平时的日常生活状态更偏向哪种能量？",
        options: [
          { text: "安静低调，但举手投足间极具气场和存在感", gradeValue: 1 },
          { text: "亲切大方，擅长倾听并能温柔地引导话题", gradeValue: 2 },
          { text: "开朗爱笑，像小太阳一样充满朝气与活力", gradeValue: 3 },
          { text: "放飞自我，满脑子都是搞笑段子和鬼点子", gradeValue: 4 },
        ]
      },
      {
        id: 2,
        questionText: "朋友哭着对你说：“我今天太难过了，所以买了个花盆。” 你的反应是？",
        options: [
          { text: "“买的什么花盆呀？里面种了带香气的植物吗？” (注重细节与品味)", gradeValue: 1 },
          { text: "“怎么会难过呀？发生什么事了吗，跟我说说吧” (感同身受的温柔抚慰)", gradeValue: 2 },
          { text: "“哇，花盆！起名字了吗？快让可爱的新事物吹走坏心情！” (转移注意的元气治愈)", gradeValue: 3 },
          { text: "“花盆？反正你肯定一星期之后就会把它养死吧…” (一针见血的现实吐槽)", gradeValue: 4 },
        ]
      },
      {
        id: 3,
        questionText: "在街上偶遇完全符合你审美标准的理想型，你会？",
        options: [
          { text: "优雅地对视一眼，然后气场十足地擦肩而过", gradeValue: 1 },
          { text: "带着温暖得体的笑容大方走上前，礼貌地询问联系方式", gradeValue: 2 },
          { text: "疯狂拍打旁边朋友的肩膀并内心尖叫：“天呐！太帅/美了吧！”", gradeValue: 3 },
          { text: "瞬间慌乱，像个坏掉的机器人一样僵硬地走路，表现得超级滑稽", gradeValue: 4 },
        ]
      },
      {
        id: 4,
        questionText: "周末的聚会因故突然取消，你的第一反应是？",
        options: [
          { text: "棒极了！可以安安静静听着古典乐或者看看视频，做个居家香薰SPA", gradeValue: 1 },
          { text: "稍微有点遗憾，但正好可以打扫一下房间，或者看看能跟谁再约", gradeValue: 2 },
          { text: "与床融为一体，抱着零食暖和地滚来滚去，享受慵懒闲暇", gradeValue: 3 },
          { text: "连袜子都穿好了！不管怎样都要出门，去附近的便利店散散心", gradeValue: 4 },
        ]
      },
      {
        id: 5,
        questionText: "当你在镜子中端详自己的容颜时，脑海里会想些什么？",
        options: [
          { text: "说实话，凭这温润如玉/高贵冷艳的轮廓和气质，简直就是一件艺术品", gradeValue: 1 },
          { text: "干净得体很帅/美！今天也要元气满满地展现优雅的一面", gradeValue: 2 },
          { text: "嘿嘿，感觉自己有点可爱呢，好想捏一下这饱满的脸颊", gradeValue: 3 },
          { text: "看这机灵调皮的小表情！今天也要给身边的人带来无尽的欢乐", gradeValue: 4 },
        ]
      }
    ],
    femaleResults: {
      1: {
        grade: 1,
        title: "天仙级殿堂女神",
        subTitle: "令人窒息的高颜值与极致优雅",
        description: "只需静静对视就能让人心跳停止的天仙级女神。自带高贵冷艳的画风，外冷内热，散发着让人无法轻易接近的高洁气场。内心其实深邃而温柔，拥有无与伦比的美感表现力。",
        charms: ["无可挑剔的精致轮廓", "温婉从容的清冷嗓音", "自带高级感的矜贵气场"],
        mbtiMatch: "INFJ / INTJ 型",
        image: ""
      },
      2: {
        grade: 2,
        title: "校园初恋级女神",
        subTitle: "人人都向往的温柔白月光",
        description: "令人倍感温馨的校园女神，代表着青春里最美好的初恋形象。温柔的笑容与体贴的心思总能让人如沐春风。极具美学品味与亲和力，在任何人际交往中都处于绝对的好评中心。",
        charms: ["100%好感度的白月光笑容", "优雅得体的谈吐技巧", "令人安心和煦的温馨氛围"],
        mbtiMatch: "ENFJ / ESFJ 型",
        image: ""
      },
      3: {
        grade: 3,
        title: "元气治愈系甜妹",
        subTitle: "一入坑就出不来的可爱小奶狗",
        description: "撒娇与可爱化身的活力甜心！凭借招牌月牙眼和满满正能量，总能照亮身边的每一个人，是大家无可替代的开心果。越接触就越觉得她鬼马精灵、惹人怜爱。",
        charms: ["人间元气维他命能量", "笑起来超级治愈的笑眼", "让人无法抗拒的奶萌属性"],
        mbtiMatch: "ENFP / ESFP 型",
        image: ""
      },
      4: {
        grade: 4,
        title: "幽默风趣搞笑女",
        subTitle: "存在感爆棚的快乐源泉",
        description: "天生自带幽默细胞的快乐制造机！性格大大咧咧、精灵古怪，有她在的地方绝对充满欢声笑语。看似没心没肺，实际上心思细腻、极重义气，从不给朋友难过的机会。",
        charms: ["刻在骨子里的一流段子手", "所向披靡的社交自来熟", "百听不厌的活力话题"],
        mbtiMatch: "ENTP / ESTP 型",
        image: ""
      }
    },
    maleResults: {
      1: {
        grade: 1,
        title: "天仙级殿堂男神",
        subTitle: "雕刻般的高清神颜与清冷气场",
        description: "仿佛走在路上都会引起交通堵塞的高能男神。五官深邃，自带清冷禁欲气场。冷俊而神秘的外表下，藏着极度专注、沉稳与靠谱的人格魅力，是所有人心目中神殿般的视觉典范。",
        charms: ["CG级鬼斧神工的神颜", "清冷且摄人心魄的磁性魅力", "极为沉稳靠谱的踏实感"],
        mbtiMatch: "ISTJ / INTJ 型",
        image: ""
      },
      2: {
        grade: 2,
        title: "温柔治愈系学长",
        subTitle: "超级温柔的理想男友模板",
        description: "温润如玉、举手投足间满是温柔的治愈系暖男。穿搭干净帅气，说话如和煦的微风，懂得贴心地照顾所有人的感受。无可挑剔的涵养与举止，堪称最完美的恋人范本。",
        charms: ["干净整洁的衣品帅哥", "苏到骨子里的温柔蜜糖音", "令人心折的极度体贴"],
        mbtiMatch: "INFJ / ENFJ 型",
        image: ""
      },
      3: {
        grade: 3,
        title: "奶萌粘人小奶狗",
        subTitle: "让人想要摸头杀的大型犬男友",
        description: "激发无限保护欲的黏人大型犬男友！调皮可爱、眼神澄澈，充满了无污染的治愈能量。像金毛一样温暖贴心，时刻渴望陪伴，能为疲惫的日常带来纯天然的疗愈感。",
        charms: ["阳光蓬松的摸头杀发型", "真诚澄澈的灵动双眼", "随身携带的人类净土属性"],
        mbtiMatch: "ISFP / ENFP 型",
        image: ""
      },
      4: {
        grade: 4,
        title: "快乐风趣社交达人",
        subTitle: "极具幽默感的魔性存在",
        description: "把生活当做游乐场、超高情商的幽默高手。极具个性、不拘小节，一开口就笑点不断。极其随和，相处起来零压力，带有令人深陷其中、无法自拔的独特磁场。",
        charms: ["笑倒一片的超强造梗能力", "天马行空的荒诞搞笑脑洞", "极具中毒性的欢脱感染力"],
        mbtiMatch: "ENTP / ESTP 型",
        image: ""
      }
    }
  }
};
