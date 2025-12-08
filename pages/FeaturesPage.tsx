import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { Award, Truck, ShieldCheck, Cpu, Database, Network } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();

  // Tech-focused feature list
  const TECH_SPECS = [
    {
      title: "Predictive Bid Modeling",
      korTitle: "특허 기반 예측 모델링",
      description: "특허 제 10-2869603호. 시계열 데이터 분석 및 경쟁사 투찰 패턴 마이닝(Pattern Mining)을 통해 통계적으로 유의미한 낙찰 예가를 도출하는 수학적 예측 엔진입니다.",
      icon: Award
    },
    {
      title: "Supply Chain Optimization",
      korTitle: "공급망 최적화 알고리즘",
      description: "품목 분류 코드 기반의 매칭 엔진(Matching Engine)을 가동하여, 검증된 공급사 데이터베이스와 낙찰 기업을 자동으로 매핑하는 SCM 자동화 시스템입니다.",
      icon: Truck
    },
    {
      title: "Human-in-the-Loop",
      korTitle: "하이브리드 검증 시스템",
      description: "AI 모델의 정량적 분석 결과를 도메인 전문가(Domain Expert)가 2차 검증(Validation)하는 프로세스를 구축하여, 예외 상황 리스크를 최소화했습니다.",
      icon: ShieldCheck
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
              Data Intelligence &<br/>
              <span className="text-primary">AI Core Architecture</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              조달플러스는 단순 검색 서비스가 아닙니다.<br/>
              수십 년간 축적된 공공 조달 빅데이터(Big Data)를 전처리 및 피처 엔지니어링하여 
              구축된 <strong>엔터프라이즈급 조달 분석 플랫폼</strong>입니다.
            </p>
          </div>

          {/* 3 Core Tech Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {TECH_SPECS.map((spec, index) => (
              <div key={index} className="flex flex-col p-8 rounded-2xl border border-slate-100 bg-surface hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white border border-slate-200 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <spec.icon size={28} />
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{spec.title}</div>
                  <h3 className="text-xl font-bold text-secondary">{spec.korTitle}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
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
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Automated Financial<br/>Assessment Engine</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                재무제표 데이터를 파싱(Parsing)하여 적격심사 점수를 실시간으로 시뮬레이션하는 핀테크 알고리즘입니다. 
                유동비율, 부채비율 등 핵심 재무 지표(KPI)를 분석하고, 리스크 요인을 사전에 식별하여 최적의 입찰 전략을 수립합니다.
              </p>
              <ul className="space-y-3 mb-8 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  경영상태 평가 자동화 (Credit Rating Automation)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  실적 계수 연산 알고리즘 (Performance Scoring)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  신인도 리스크 팩터 분석 (Risk Factor Analysis)
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
              <h3 className="text-2xl font-bold mb-4">Real-Time Event<br/>Streaming Architecture</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                ETL(Extract, Transform, Load) 파이프라인을 통해 분산된 공공 데이터 소스로부터 입찰 정보를 실시간으로 수집(Ingestion)합니다. 
                사용자가 설정한 복합 필터링 규칙(Rule-based Filtering)에 따라 마이크로초 단위의 레이턴시로 맞춤형 알림을 전송하는 이벤트 구동형 아키텍처입니다.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <div className="text-xs text-slate-400 mb-1">Latency</div>
                  <div className="text-xl font-mono text-primary font-bold">&lt; 100ms</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <div className="text-xs text-slate-400 mb-1">Data Points</div>
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