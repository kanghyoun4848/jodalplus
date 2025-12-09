import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award, Database, Cpu, Shield, Globe, Phone, RefreshCw, Package, FileCheck, Truck, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { PROBLEM_ITEMS } from '../constants';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  // Flyer Page 1: Participating Business Categories
  const BUSINESS_CATEGORIES = [
    "일반소모품", "정보 IT기기", "통신장비류", "기계/설비류",
    "차량·운반기기", "건축·설비자재", "위생·안전장비", "식음료·소모품",
    "의료 장비/물품", "정보화 사업 용역", "폐기물처리용역", "시설물 유지·관리용역",
    "육상운송용역", "전시·행사대행 용역", "건설기술용역", "광고 및 디자인 용역",
    "엔지니어링 기술용역", "학술 용역", "소방시설용역"
  ];

  return (
    <Layout>
      {/* Hero Section - Bright, Modern, Tech-focused */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-slate-50 pt-20 lg:pt-0">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent z-0 skew-x-[-12deg] translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl z-0 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm px-4 py-1.5 rounded-full text-sm font-semibold text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                특허 제 10-2869603호 기술 보유
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                데이터로 증명하는<br />
                <span className="text-primary relative inline-block">
                  스마트 조달 플랫폼
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                수십 년간 축적된 공공조달 빅데이터를 AI로 분석하여<br className="hidden md:block"/>
                최적의 낙찰 예정가를 산출합니다. 전문가와 기술의 결합을 경험하세요.
              </p>
              
              {/* Special Guarantee Badge */}
              <div className="mb-8 inline-block bg-blue-50 border border-blue-100 rounded-lg p-3">
                 <div className="flex items-center gap-2 text-primary font-bold text-sm sm:text-base">
                    <RefreshCw size={18} />
                    <span>골드/프리미엄 가입 후 1년간 미낙찰 시, 1년 무료 연장!</span>
                 </div>
              </div>

              {/* Updated Hero CTA: Buttons & Phone */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <Button 
                  onClick={() => navigate('/apply')} 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-4 shadow-blue-500/25 shadow-lg bg-primary hover:bg-blue-700 text-white border-0"
                >
                  무료 상담 신청하기
                </Button>
                <div className="w-full sm:w-auto flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-default group">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={20} fill="currentColor" className="ml-0.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium leading-tight">지금 문의하세요</span>
                    <span className="text-xl font-bold text-slate-900 leading-tight">1555-1229</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>24시간 분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>벤더사 자동매칭</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>전담 매니저 배정</span>
                </div>
              </div>
            </div>

            {/* Right Visual (IT/Dashboard Vibe) */}
            <div className="w-full lg:w-1/2 relative hidden md:block">
              <div className="relative z-10 rounded-2xl shadow-2xl bg-white border border-slate-100 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" 
                  alt="AI Analytics Dashboard" 
                  className="w-full h-auto object-cover"
                />
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">낙찰 확률</div>
                    <div className="text-lg font-bold text-slate-800">+ 124%</div>
                  </div>
                </div>
                <div className="absolute top-10 -right-6 bg-secondary text-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                  <Shield size={20} className="text-primary" />
                  <div className="text-sm font-medium">Verified by AI</div>
                </div>
              </div>
              {/* Backing Pattern */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-[3deg] -z-10 scale-95"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <div className="bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { label: "연간 조달 시장", value: "200조+" },
              { label: "누적 분석 데이터", value: "3.5억+" },
              { label: "평균 절감 비용", value: "90%" },
              { label: "파트너 만족도", value: "4.9/5" },
            ].map((stat, idx) => (
              <div key={idx} className="py-8 text-center group hover:bg-slate-50 transition-colors cursor-default">
                <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature/Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Why JodalPlus</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              복잡한 조달 입찰, <br/>
              기술로 단순하게 혁신했습니다.
            </h2>
            <p className="text-slate-600 text-lg">
              기존의 비효율적인 인력 중심 방식을 벗어나, <br/>
              데이터 기반의 의사결정으로 성공 확률을 높이세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEM_ITEMS.map((item, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
                <div className="w-8 h-1 bg-slate-200 rounded-full group-hover:w-16 group-hover:bg-primary transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Process Visualization (Replaces Code Section) */}
      <section className="py-24 bg-secondary overflow-hidden relative">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/10">
              <Cpu size={16} />
              <span>CORE PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              검증된 낙찰 데이터 기반<br/>
              <span className="text-primary">원스톱 조달 솔루션</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              공고 분석부터 낙찰, 벤더사 연결, 납품까지.<br/>
              조달플러스의 AI 시스템과 전문가가 모든 과정을 함께합니다.
            </p>
          </div>

          {/* Process Flow Chart (Based on Flyer) */}
          <div className="relative">
             {/* Desktop Flow Line */}
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-700 via-primary/50 to-slate-700 -translate-y-1/2 z-0"></div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center hover:border-primary/50 transition-colors">
                   <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30 text-blue-400">
                      <Database size={32} />
                   </div>
                   <div className="text-primary font-bold mb-2 text-sm">STEP 01</div>
                   <h3 className="text-xl font-bold text-white mb-2">맞춤 공고 분석</h3>
                   <p className="text-slate-400 text-sm">
                      AI 최적화 낙찰예정가 제공<br/>
                      실시간 입찰 공고 리스트업
                   </p>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center hover:border-primary/50 transition-colors">
                   <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30 text-purple-400">
                      <FileCheck size={32} />
                   </div>
                   <div className="text-primary font-bold mb-2 text-sm">STEP 02</div>
                   <h3 className="text-xl font-bold text-white mb-2">투찰 및 낙찰</h3>
                   <p className="text-slate-400 text-sm">
                      전담 직원 밀착 관리<br/>
                      나라장터 입찰 및 낙찰 성공
                   </p>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center hover:border-primary/50 transition-colors">
                   <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30 text-green-400">
                      <Users size={32} />
                   </div>
                   <div className="text-primary font-bold mb-2 text-sm">STEP 03</div>
                   <h3 className="text-xl font-bold text-white mb-2">벤더사 매칭</h3>
                   <p className="text-slate-400 text-sm">
                      낙찰 업체와 공급망(벤더) 매칭<br/>
                      물품 공급 제안서 및 서류 지원
                   </p>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl text-center hover:border-primary/50 transition-colors">
                   <div className="w-16 h-16 bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30 text-orange-400">
                      <Truck size={32} />
                   </div>
                   <div className="text-primary font-bold mb-2 text-sm">STEP 04</div>
                   <h3 className="text-xl font-bold text-white mb-2">납품 및 정산</h3>
                   <p className="text-slate-400 text-sm">
                      제조/유통 벤더사를 통한 납품<br/>
                      최종 수수료 정산 및 완료
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Participating Business List (Flyer Bottom Section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Who Can Join?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              사업자 등록증만 있으면<br/>
              <span className="text-blue-600 underline decoration-4 decoration-blue-200 underline-offset-4">누구나 참여 가능합니다</span>
            </h2>
            <p className="text-slate-600 text-lg">
              제조업, 도소매업, 서비스업, 건설업 등 모든 업종이 조달 시장의 주인공입니다.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {BUSINESS_CATEGORIES.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 text-slate-700 px-6 py-3 rounded-lg font-medium border border-blue-100 shadow-sm hover:shadow-md hover:bg-white hover:text-primary transition-all cursor-default text-sm md:text-base"
                >
                  {category}
                </div>
              ))}
              {/* Highlighted 'All Others' Button */}
              <div className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold border border-red-600 shadow-md hover:shadow-lg hover:bg-red-600 transition-all cursor-default text-sm md:text-base animate-pulse">
                그 외 모든 사업자
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Chart Section - Replaced Chart with Numbers */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            
            {/* Left: Numeric Comparison Cards */}
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="mb-6 border-b border-slate-100 pb-4">
                   <h3 className="text-xl font-bold text-slate-900">연간 운영 비용 비교</h3>
                   <div className="text-sm text-slate-500 mt-1">전문가 채용 vs 조달플러스</div>
                </div>
                
                <div className="space-y-4">
                  {/* Direct Hiring */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-500">직접 채용 (인건비)</span>
                      <span className="text-xs text-slate-400">연봉 + 4대보험 + 퇴직금</span>
                    </div>
                    <div className="text-xl font-bold text-slate-400 line-through decoration-slate-400">
                      4,500만원
                    </div>
                  </div>

                  {/* Standard (New) */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200">
                     <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-700">스탠다드 멤버십</span>
                      <span className="text-xs text-slate-500">베타 서비스 체험</span>
                    </div>
                    <div className="text-xl font-bold text-slate-700">
                      0원
                    </div>
                  </div>

                  {/* Premium */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200">
                     <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-700">프리미엄 멤버십</span>
                      <span className="text-xs text-slate-500">VIP 전용 케어</span>
                    </div>
                    <div className="text-xl font-bold text-slate-700">
                      299만원
                    </div>
                  </div>

                  {/* Gold (Hero) */}
                  <div className="relative flex items-center justify-between p-5 rounded-xl bg-blue-50 border-2 border-primary shadow-sm overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                      추천
                    </div>
                    <div className="flex flex-col relative z-10">
                      <span className="text-base font-bold text-primary">골드 멤버십</span>
                      <span className="text-xs text-blue-600">AI + 전문가 전담</span>
                    </div>
                    <div className="text-3xl font-extrabold text-primary relative z-10">
                      99만원
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 flex items-center justify-between">
                   <div className="text-sm text-slate-500">연간 절감액</div>
                   <div className="text-2xl font-bold text-slate-900">
                     약 <span className="text-green-600">4,400만원</span> Save
                   </div>
                </div>
              </div>

              {/* Added Guarantee Text Block */}
              <div className="mt-6 bg-slate-800 text-white p-5 rounded-2xl shadow-lg flex items-start gap-3">
                 <Shield className="text-yellow-400 shrink-0 mt-1" size={24} />
                 <div>
                   <h4 className="font-bold text-lg text-yellow-400 mb-1">안심 보장 서비스</h4>
                   <p className="text-slate-300 text-sm leading-relaxed">
                     골드/프리미엄 가입 후 1년간 미낙찰 시,<br/>
                     <span className="text-white font-bold underline decoration-yellow-400 underline-offset-2">동일 서비스 1년 무료 연장</span>해 드립니다.
                   </p>
                 </div>
              </div>
            </div>

            {/* Right: Text Description */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Cost Efficiency</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                인건비 부담은 줄이고,<br/>
                전문성은 높였습니다.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                전문 조달 담당자 한 명의 연봉이면, 조달플러스 골드 멤버십을 
                <span className="text-slate-900 font-bold"> 45년 동안</span> 이용하실 수 있습니다.
                단순 비용 절감을 넘어, 10년 차 이상의 전문가들이 귀사의 입찰을 
                전담 케어합니다.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: '인건비 98% 절감 효과', highlight: true },
                  { text: '특허 AI 낙찰가 분석', highlight: true },
                  { text: '업무 공백 없는 365일 케어', highlight: false },
                  { text: '복잡한 서류 업무 대행', highlight: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${item.highlight ? 'bg-blue-50 border-blue-100' : 'bg-white border-slate-100'}`}>
                    <div className={`p-1 rounded-full ${item.highlight ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'}`}>
                      <CheckCircle2 size={16} />
                    </div>
                    <span className={`font-medium ${item.highlight ? 'text-slate-900' : 'text-slate-600'}`}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button onClick={() => navigate('/service-detail')} variant="outline" size="lg">
                  서비스 상세 보기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Blue */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            지금이 가장 저렴하게 도입할 기회입니다
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            베타 서비스 기간(2025년 6월까지)에 가입하시면<br/>
            평생 할인된 가격으로 AI 조달 파트너를 고용하실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Updated Bottom CTA Button for high visibility - Yellow Accent - Forced Style with !important */}
            <Button 
              onClick={() => navigate('/apply')} 
              size="lg" 
              className="!bg-yellow-400 !text-slate-900 hover:!bg-yellow-500 !border-yellow-400 shadow-xl font-bold px-10"
              style={{ backgroundColor: '#FACC15', color: '#0F172A' }}
            >
              지금 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => navigate('/pricing-guide')} 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              요금제 알아보기
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MainPage;