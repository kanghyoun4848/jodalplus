import { 
  BarChart3, 
  Search, 
  Users, 
  ShieldCheck, 
  Clock, 
  Target, 
  Cpu,
  FileText,
  Award,
  Truck
} from 'lucide-react';
import { NavItem, FeatureItem, PricingPlan, FaqItem, TestimonialItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '서비스 소개', path: '/service-detail' },
  { label: '핵심 기능', path: '/features' },
  { label: '요금 안내', path: '/pricing-guide' },
  { label: '문의하기', path: '/apply' },
];

export const HERO_CONTENT = {
  headline: "연간 200조원 조달 시장,\n특허받은 기술로 정복하다",
  subcopy: "특허 제 10-2869603호 등록 완료.\n낙찰 실적 3,000억의 검증된 데이터와 BM 특허 기술로\n최적의 낙찰 예정가를 제공합니다.",
  cta: "베타 서비스 무료 체험 신청하기"
};

export const PROBLEM_ITEMS: FeatureItem[] = [
  {
    title: "높은 인건비 부담",
    description: "전문 입찰 담당자 채용 시 연봉 4,500만원 이상의 비용이 발생합니다.",
    icon: Users
  },
  {
    title: "검증되지 않은 데이터",
    description: "단순 통계가 아닌 특허받은 AI 알고리즘(공공입찰 시스템) 분석이 필요합니다.",
    icon: Search
  },
  {
    title: "판로 개척의 어려움",
    description: "낙찰 후에도 물품 공급 업체(벤더)를 찾지 못해 계약을 포기하셨나요?",
    icon: Truck
  }
];

export const SERVICE_PROCESS = [
  { step: "01", title: "맞춤 공고 분석", desc: "AI 알고리즘으로 실시간 입찰 공고 분석" },
  { step: "02", title: "낙찰가 제공", desc: "3,000억 실적 기반 최적의 투찰 금액 산정" },
  { step: "03", title: "투찰 및 낙찰", desc: "전담 직원의 밀착 관리로 최종 낙찰 성공" },
  { step: "04", title: "벤더사 매칭", desc: "낙찰 업체와 제조/유통 벤더사 자동 연결" }
];

export const KEY_FEATURES: FeatureItem[] = [
  {
    title: "특허받은 AI 분석",
    description: "특허 제 10-2869603호. 공공입찰 시스템으로 최적의 낙찰 예정가를 산출합니다.",
    icon: Award
  },
  {
    title: "벤더사 자동 매칭",
    description: "낙찰만 받으세요. 납품은 조달플러스가 검증된 제조/유통사를 연결해 드립니다.",
    icon: Truck
  },
  {
    title: "전담 직원 배정",
    description: "단순 프로그램이 아닙니다. 입찰 전문 직원이 귀사의 조달 업무를 전담 마크합니다.",
    icon: ShieldCheck
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "스탠다드",
    price: "무료",
    features: [
      "기본 입찰 가이드 제공",
      "낙찰 시 벤더사 자동 연결",
      "입찰 기초 교육 VOD",
      "이메일 지원"
    ],
    isPopular: false
  },
  {
    name: "골드",
    price: "990,000원",
    originalPrice: "2,000,000원",
    features: [
      "스탠다드 기능 포함",
      "적격심사 제공",
      "공고 리포트 월 1회 제공",
      "전담 직원 배정",
      "실시간 AI 공고 추천"
    ],
    isPopular: true,
    highlight: "BEST CHOICE"
  },
  {
    name: "프리미엄",
    price: "2,990,000원",
    originalPrice: "6,000,000원",
    features: [
      "골드 기능 포함",
      "높은 낙찰예정가 우선 제공",
      "벤더사 등록 (견적참여 기회)",
      "벤더 수수료 면제",
      "제조업체 MAS 등록 지원"
    ],
    isPopular: false,
    highlight: "VIP 전용"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "조달청 입찰 경험이 전혀 없어도 이용 가능한가요?",
    answer: "네, 가능합니다. 나라장터 등록부터 지문 보안 토큰 설정까지 초기 세팅 가이드를 완벽하게 제공해 드립니다."
  },
  {
    question: "베타 서비스 기간은 언제까지인가요?",
    answer: "베타 서비스는 2025년 6월까지 운영되며, 이 기간 동안 가입 시 평생 할인 혜택이 적용됩니다."
  },
  {
    question: "벤더사 매칭은 무엇인가요?",
    answer: "조달플러스만의 BM 특허 기술로, 낙찰받은 업체에게 최적의 물품 공급 업체(제조/유통사)를 자동으로 매칭해주는 원스톱 서비스입니다."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "김민수 대표",
    company: "(주)태광건설",
    content: "직원 채용 부담이 컸는데, 연 99만원으로 전담 직원을 둔 효과를 보고 있습니다. 특허받은 기술이라 더 신뢰가 갑니다.",
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "이영희 이사",
    company: "디지털솔루션",
    content: "낙찰은 받았는데 물품 구할 곳이 막막했거든요. 조달플러스가 벤더사까지 연결해줘서 편하게 납품했습니다.",
    avatar: "https://picsum.photos/seed/user2/100/100"
  }
];