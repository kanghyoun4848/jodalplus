import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { Award, Truck, ShieldCheck, Cpu, Database, Network } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();

  // Tech-focused feature list - Updated patent title
  const TECH_SPECS = [
    {
      title: "Predictive Bid Modeling",
      korTitle: "공공입찰 맞춤형 솔루션 제공 방법 및 시스템",
      badge: "특허 등록 완료",
      patentNumber: "제 10-2869603호",
      description: "경쟁사의 투찰 패턴과 과거 데이터를 정밀 분석하여, 통계적으로 가장 유력한 '낙찰 예정가'를 도출합니다. 국가가 인정한 특허 기술로 낙찰 확률을 높이세요.",
      icon: Award,
      highlight: true
    },
    {
      title: "Supply Chain Optimization",
      korTitle: "최적 공급망 매칭 시스템",
      description: "낙찰 후 가장 어려운 '물품 구하기', 이제 걱정 마세요. AI가 물품 코드를 분석해 검증된 제조사와 유통사를 자동으로 연결해 드립니다.",
      icon: Truck,
      highlight: false
    },
    {
      title: "Human-in-the-Loop",
      korTitle: "전문가 교차 검증 시스템",
      description: "AI의 분석 결과를 10년 경력의 전문가가 한 번 더 꼼꼼하게 확인합니다. 시스템의 신속함과 사람의 정확함, 두 가지 장점을 모두 갖췄습니다.",
      icon: ShieldCheck,
      highlight: false
    }
  ];

  return (
    <Layout>
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-4">
              Technology Stack
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              압도적인 데이터 인텔리전스 &<br/>
              <span className="text-primary">AI 핵심 아키텍처</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              조달플러스는 단순 검색 서비스가 아닙니다.<br/>
              수십 년간 축적된 공공 조달 빅데이터를 정밀 분석하여 
              구축된 <strong>엔터프라이즈급 조달 분석 플랫폼</strong>입니다.
            </p>
          </div>

          {/* 3 Core Tech Grid - Highlighted Patent Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-start">
            {TECH_SPECS.map((spec, index) => (
              <div 
                key={index} 
                className={`flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300 group relative
                  ${spec.highlight 
                    ? 'bg-blue-50/60 border-blue-200 shadow-xl lg:-mt-4 lg:mb-4 z-10' 
                    : 'bg-white border-slate-100 hover:shadow-lg hover:-translate-y-1'
                  }`}
              >
                {/* Highlight Badge */}
                {spec.highlight && (
                   <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl shadow-sm">
                      CORE TECH
                   </div>
                )}

                {/* Icon Area - Enlarged */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors 
                  ${spec.highlight 
                    ? 'bg-primary text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-white border-2 border-slate-100 text-slate-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white'
                  }`}
                >
                  <spec.icon size={40} strokeWidth={1.5} />
                </div>

                <div className="mb-6">
                  {spec.badge && (
                    <span className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
                      <Award size={12} />
                      {spec.badge}
                    </span>
                  )}
                  <h3 className={`font-bold text-secondary leading-tight ${spec.highlight ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                    {spec.korTitle}
                  </h3>
                  {spec.patentNumber && (
                     <div className="text-primary font-bold text-base mt-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {spec.patentNumber}
                     </div>
                  )}
                </div>
                
                <p className={`leading-relaxed ${spec.highlight ? 'text-slate-700 font-medium text-lg' : 'text-slate-500 text-base'}`}>
                  {spec.description}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Dive 1: Financial Calculator */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24 bg-slate-50 rounded-3xl p-8 md:p-12 overflow-hidden border border-slate-100">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="flex items-center gap-2 text-primary font-bold mb-2">
                <Cpu size={20} />
                <span>FINTECH ENGINE</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">적격심사 자동 평가 엔진</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                재무제표 데이터를 분석하여 적격심사 점수를 실시간으로 시뮬레이션하는 알고리즘입니다. 
                유동비율, 부채비율 등 핵심 재무 지표를 분석하고, 리스크 요인을 사전에 파악하여 최적의 입찰 전략을 수립합니다.
              </p>
              <ul className="space-y-3 mb-8 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  경영상태 평가 자동화
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  실적 점수 계산 알고리즘
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  신인도 감점 요인 분석
                </li>
              </ul>
              <Button variant="outline" onClick={() => navigate('/apply')}>
                엔진 성능 테스트 요청
              </Button>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                 <div className="absolute inset-0 bg-slate-900/5 z-10"></div>
                 <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600" 
                  alt="Financial Assessment Simulation" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay UI Mockup */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 z-20 shadow-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-500">SIMULATION RESULT</span>
                    <span className="text-xs font-bold text-green-600">PASS</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dive 2: Real-time Monitoring */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-secondary text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
            {/* Background Tech Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="w-full md:w-1/2 relative z-10">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                  alt="Real-time Data Pipeline" 
                  className="w-full h-auto object-cover opacity-80"
                />
                 <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="text-[10px] font-mono text-white">LIVE STREAMING</div>
                 </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative z-10">
              <div className="flex items-center gap-2 text-primary font-bold mb-2">
                <Network size={20} />
                <span>DATA PIPELINE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">실시간 공고 모니터링 시스템</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                데이터 파이프라인을 통해 나라장터 등 여러 공공 데이터 소스로부터 입찰 정보를 실시간으로 수집합니다. 
                사용자가 설정한 조건에 맞는 공고가 올라오는 즉시 알림을 전송하는 이벤트 구동형 아키텍처입니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <div className="text-xs text-slate-400 mb-1">응답 속도</div>
                  <div className="text-xl font-mono text-primary font-bold">&lt; 100ms</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <div className="text-xs text-slate-400 mb-1">데이터 처리량</div>
                  <div className="text-xl font-mono text-primary font-bold">3.5B+</div>
                </div>
              </div>

              <Button variant="primary" onClick={() => navigate('/apply')}>
                모니터링 시스템 도입 문의
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage;