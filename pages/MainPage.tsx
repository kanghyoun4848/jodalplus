import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { HERO_CONTENT, PROBLEM_ITEMS, SERVICE_PROCESS, TESTIMONIALS } from '../constants';

// Updated to compare Direct Hiring vs Premium vs Gold Plan
const costData = [
  { name: '직접 채용', cost: 4500, label: '4,500만원', fill: '#94A3B8' }, // Slate-400
  { name: '프리미엄', cost: 299, label: '299만원', fill: '#64748B' }, // Slate-500
  { name: '골드 (추천)', cost: 99, label: '99만원', fill: '#1A73E8' }, // Primary
];

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1600/900?grayscale" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          {/* Patent badge removed as requested */}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight whitespace-pre-line">
            {HERO_CONTENT.headline}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
            {HERO_CONTENT.subcopy}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full max-w-md">
              <input 
                type="email" 
                placeholder="이메일 주소를 입력하세요" 
                className="w-full h-12 md:h-14 px-5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
              />
              <Button 
                className="absolute right-1 top-1 bottom-1 rounded-full !py-0" 
                size="md"
                onClick={() => navigate('/apply')}
              >
                무료 체험
              </Button>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">2025년 6월까지 베타 서비스 혜택 제공</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              연간 200조원 시장, <br className="md:hidden" />놓치고 계신가요?
            </h2>
            <p className="text-slate-600">낙찰 실적 3,000억의 검증된 데이터로 조달 시장 진입을 도와드립니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEM_ITEMS.map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-surface border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution/Benefit Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                특허받은 BM 기술로<br/>낙찰부터 납품까지 한 번에
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                조달플러스는 단순 입찰 대행을 넘어, 낙찰 후 벤더사 연결까지 책임지는
                국내 유일의 원스톱 조달 플랫폼입니다.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { text: '특허 등록된 낙찰가 분석 시스템', highlight: false },
                  { text: '낙찰 업체 - 물품 공급 벤더 매칭', highlight: false },
                  { text: '1:1 전담 조달 직원 배정', highlight: false },
                  { text: '연 99만원 골드 요금제 (강력 추천)', highlight: true }
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 font-medium transition-all ${item.highlight ? 'text-primary text-xl font-bold bg-blue-50 p-3 rounded-lg border border-blue-100 shadow-sm' : 'text-secondary'}`}>
                    <CheckCircle2 className={item.highlight ? "text-primary flex-shrink-0 fill-blue-100" : "text-primary flex-shrink-0"} size={item.highlight ? 24 : 20} />
                    {item.text}
                  </li>
                ))}
              </ul>

              <Button onClick={() => navigate('/service-detail')} variant="outline" size="lg">
                자세히 알아보기
              </Button>
            </div>

            <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-secondary">연간 비용 효율성 비교</h3>
                <p className="text-sm text-slate-500">단위: 만원</p>
              </div>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={costData} 
                    layout="vertical" 
                    margin={{ top: 5, right: 80, left: 40, bottom: 5 }}
                    barGap={4}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={80} 
                      tick={{fill: '#475569', fontSize: 13, fontWeight: 600}} 
                    />
                    <Tooltip 
                      cursor={{fill: 'transparent'}} 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value: number) => [`${value.toLocaleString()}만원`, '비용']}
                    />
                    <Bar dataKey="cost" radius={[0, 4, 4, 0]} barSize={40}>
                      {costData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                      <LabelList 
                        dataKey="label" 
                        position="right" 
                        style={{ fill: '#334155', fontWeight: 'bold', fontSize: '14px' }} 
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-600 text-sm mb-1">직접 채용 대비</p>
                <p className="text-primary font-bold text-2xl">최대 98% 비용 절감</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Testimonial Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">이미 많은 파트너사가 경험하고 있습니다</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="bg-surface p-8 rounded-2xl relative">
                <div className="flex items-center gap-4 mb-6">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-secondary">{item.name}</div>
                    <div className="text-sm text-slate-500">{item.company}</div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">"{item.content}"</p>
                <div className="absolute top-8 right-8 text-primary/10">
                  <Award size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="text-primary">베타 서비스</span> 기간 한정 혜택<br/>
            2025년 6월까지
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            지금 신청하시면 특허받은 솔루션을 무료로 체험해보실 수 있습니다.
          </p>
          <Button onClick={() => navigate('/apply')} size="lg" className="shadow-lg shadow-blue-500/30">
            지금 무료로 시작하기 <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MainPage;