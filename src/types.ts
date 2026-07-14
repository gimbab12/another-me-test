import femaleGrade1 from './assets/images/female_grade_1_1784008239319.jpg';
import femaleGrade2 from './assets/images/female_grade_2_1784008252338.jpg';
import femaleGrade3 from './assets/images/female_grade_3_1784008265176.jpg';
import femaleGrade4 from './assets/images/female_grade_4_1784008278918.jpg';

import maleGrade1 from './assets/images/male_grade_1_1784008292802.jpg';
import maleGrade2 from './assets/images/male_grade_2_1784008306573.jpg';
import maleGrade3 from './assets/images/male_grade_3_1784008319749.jpg';
import maleGrade4 from './assets/images/male_grade_4_1784008334922.jpg';

export type Gender = 'male' | 'female';

export interface QuestionOption {
  text: string;
  gradeValue: 1 | 2 | 3 | 4;
}

export interface Question {
  id: number;
  questionText: string;
  options: QuestionOption[];
}

export interface GradeResult {
  grade: 1 | 2 | 3 | 4;
  title: string;
  subTitle: string;
  description: string;
  charms: string[];
  mbtiMatch: string;
  image: string;
}

export const QUESTIONS: Question[] = [
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
];

export const FEMALE_RESULTS: Record<1 | 2 | 3 | 4, GradeResult> = {
  1: {
    grade: 1,
    title: "천상계 1등급 여신",
    subTitle: "숨 막히는 비주얼과 압도적인 우아함",
    description: "조용히 눈만 마주쳐도 만인의 심장을 멎게 만드는 천상계 여신상입니다. 화려하면서도 기품 넘치는 아우라를 지녀 차가워 보이지만, 내면에는 섬세하고 고요한 따뜻함을 품고 있습니다. 다른 사람들은 쉽게 말도 붙이지 못할 만큼 고결한 에너지를 뿜어냅니다.",
    charms: ["만점짜리 비주얼", "차분하고 품격 있는 목소리", "고급스러운 아우라"],
    mbtiMatch: "INFJ / INTJ 형",
    image: femaleGrade1
  },
  2: {
    grade: 2,
    title: "캠퍼스 훈녀 2등급",
    subTitle: "모두가 꿈꾸는 설렘 유발 첫사랑상",
    description: "보기만 해도 마음이 훈훈해지는 캠퍼스 퀸카, 첫사랑 이미지의 주인공입니다. 부드러운 미소와 섬세한 배려심으로 주변 사람들에게 항상 설렘과 안락함을 줍니다. 호감형 비주얼과 세련된 패션 센스로 호불호가 절대 없는 완벽한 대중적 인기를 얻고 있습니다.",
    charms: ["호감도 100% 미소", "센스 있는 대화법", "따스하고 편안한 분위기"],
    mbtiMatch: "ENFJ / ESFJ 형",
    image: femaleGrade2
  },
  3: {
    grade: 3,
    title: "러블리 볼매 3등급",
    subTitle: "출구 없는 매력의 사랑스러운 댕댕이",
    description: "한 번 빠지면 절대로 헤어 나올 수 없는 인간 비글이자 러블리 그 자체! 애교 섞인 눈웃음과 긍정적인 에너지로 어두운 방안을 환하게 비추는 햇살 같은 존재입니다. 친해질수록 더 귀엽고 엉뚱한 행동으로 모두의 최애 자리를 꿰차는 스타일입니다.",
    charms: ["인간 비타민 에너지", "출구 없는 눈웃음", "볼수록 빠져드는 볼매"],
    mbtiMatch: "ENFP / ESFP 형",
    image: femaleGrade3
  },
  4: {
    grade: 4,
    title: "유쾌발랄 비글 4등급",
    subTitle: "미친 존재감! 우주 최강 유쾌한 개그 요정",
    description: "존재 자체만으로 모두를 빵 터뜨릴 수 있는 미친 텐션의 유쾌발랄 에너자이저! 엉뚱함과 깨발랄한 성격 덕분에 친구들 사이에서 절대 빠질 수 없는 핵인싸이자 분위기 메이커입니다. 장난꾸러기 같지만 눈치가 빨라 슬플 틈을 주지 않는 의리의 소유자입니다.",
    charms: ["뼈속까지 개그 유전자", "독보적인 핵인싸력", "지루할 틈 없는 신선함"],
    mbtiMatch: "ENTP / ESTP 형",
    image: femaleGrade4
  }
};

export const MALE_RESULTS: Record<1 | 2 | 3 | 4, GradeResult> = {
  1: {
    grade: 1,
    title: "천상계 1등급 남신",
    subTitle: "조각 같은 비주얼과 시크한 완벽남",
    description: "길을 걷기만 해도 모세의 기적처럼 인파가 갈라질 것 같은 압도적 아우라의 소유자입니다. 완벽한 선과 시크한 무드로 남녀노소 불문하고 동경하게 만들죠. 냉정해 보이지만 알면 알수록 진지하고 듬직하며 묵직한 매력이 넘치는 완벽한 정석 남신입니다.",
    charms: ["CG급 명품 비주얼", "차갑고 치명적인 아우라", "묵직한 신뢰감"],
    mbtiMatch: "ISTJ / INTJ 형",
    image: maleGrade1
  },
  2: {
    grade: 2,
    title: "훈훈 눈부신 2등급 훈남",
    subTitle: "다정다감한 교회 오빠 & 캠퍼스 선배상",
    description: "부드럽고 훈훈한 외모에 다정함이 뚝뚝 묻어나는 남친짤의 정석입니다. 세련된 옷핏과 다정한 말투로 주위 사람들의 마음을 따뜻하게 녹여줍니다. 예의 바르고 배려 깊은 행동으로 모임 내에서 언제나 뜨거운 인기와 사랑을 한 몸에 받습니다.",
    charms: ["설렘 가득한 남친핏", "스윗한 꿀보이스", "만인의 이상형 다정함"],
    mbtiMatch: "INFJ / ENFJ 형",
    image: maleGrade2
  },
  3: {
    grade: 3,
    title: "귀염뽀짝 댕댕 3등급",
    subTitle: "머리를 쓰다듬고 싶은 대형견 남친상",
    description: "보호본능을 무한 자극하는 귀엽고 러블리한 대형 댕댕이 스타일! 장난기 어린 표정과 귀여운 눈빛으로 주변을 항상 유쾌하고 기분 좋게 만듭니다. 지치지 않는 긍정 파워와 비글미 넘치는 친근감으로 만나는 이들에게 힐링을 선물하는 매력 만점 타입입니다.",
    charms: ["쓰담쓰담 자극 헤어핏", "애교 가득한 눈망울", "인간 무공해 힐링력"],
    mbtiMatch: "ISFP / ENFP 형",
    image: maleGrade3
  },
  4: {
    grade: 4,
    title: "유쾌 통쾌 미친존재감 4등급",
    subTitle: "뒤돌아서면 생각나는 마성의 뼈그맨",
    description: "인생을 축제처럼 살아가는 독보적 텐션의 유쾌한 마성남! 뻔한 건 절대 사절하며, 매번 상상을 초월하는 엉뚱함과 개그 본능으로 모두의 활력소가 됩니다. 다가가기 편안하고 한 번 대화하면 절대 잊을 수 없는 미친 중독성을 가진 매력 덩어리입니다.",
    charms: ["치명적인 웃음 폭격", "상상 초월 개그 드립", "끝없는 출구 무한 중독성"],
    mbtiMatch: "ENTP / ESTP 형",
    image: maleGrade4
  }
};
