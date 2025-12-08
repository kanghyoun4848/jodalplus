import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { SERVICE_PROCESS } from '../constants';
import { Award } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full font-semibold mb-6">
              <Award size={18} />
              <span>특허 제 10-2869603호 BM 기술</span>
            </div>
            <h1 className="text-4xl font-bold text-secondary mb-6">조달플러스 서비스 상세</h1>
            <p className="text-lg text-slate-600">
              낙찰부터 벤더사 연결까지 한 번에.<br/>
              특허받은 AI 기술과 전담 직원이 결합된 하이브리드 솔루션입니다.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            {SERVICE_PROCESS.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm h-full hover:shadow-md transition-shadow">
                  <span className="text-6xl font-bold text-slate-100 absolute right-4 top-4 select-none group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">{item.title}</h3>
                  <p className="text-slate-600 relative z-10">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-200 z-0"></div>
                )}
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-20">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-center mb-10 text-secondary">서비스 비교</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-slate-500 font-medium w-1/4 align-bottom">구분</th>
                      <th className="py-4 px-6 text-secondary font-bold text-lg bg-slate-50 w-1/4 text-center border-t-2 border-slate-200 align-bottom">기존 직원 채용</th>
                      {/* Fixed: Use flex column instead of absolute positioning to prevent clipping */}
                      <th className="py-4 px-6 bg-blue-50 w-1/4 text-center border-t-2 border-primary align-bottom">
                         <div className="flex flex-col items-center justify-end gap-2">
                            <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-bold tracking-wide">BEST</span>
                            <span className="text-primary font-bold text-lg">조달플러스 (골드)</span>
                         </div>
                      </th>
                      <th className="py-4 px-6 text-slate-700 font-bold text-lg bg-slate-50 w-1/4 text-center border-t-2 border-slate-300 align-bottom">조달플러스 (프리미엄)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { label: "연간 비용", type1: "4,500만원", type2: "99만원", type3: "299만원", highlight: true },
                      { label: "전담 인력", type1: "직접 고용", type2: "AI + 10년차 전문가", type3: "AI + 10년차 전문가", highlight: false },
                      { label: "데이터 분석", type1: "수기 분석", type2: "특허 AI 알고리즘", type3: "특허 AI 알고리즘", highlight: false },
                      { label: "벤더사 매칭", type1: "직접 섭외", type2: "낙찰 시 자동 연결", type3: "자동 연결 + 수수료 면제", highlight: false },
                      { label: "계약 형태", type1: "고용 계약", type2: "구독형 (자유 해지)", type3: "구독형 (자유 해지)", highlight: true },
                    ].map((row, idx) => (
                      <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                        <td className="py-6 px-6 font-medium text-slate-700">{row.label}</td>
                        <td className="py-6 px-6 text-center text-slate-600">
                          {row.type1}
                        </td>
                        <td className={`py-6 px-6 text-center font-bold ${row.highlight ? 'text-primary' : 'text-slate-700'} bg-blue-50/30 border-x border-blue-100`}>
                          {row.type2}
                        </td>
                        <td className="py-6 px-6 text-center text-slate-600 bg-slate-50/30">
                          {row.type3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary mb-6">이제 합리적으로 입찰을 시작하세요</h3>
            <Button onClick={() => navigate('/apply')} size="lg">
              무료 상담 신청하기
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetailPage;