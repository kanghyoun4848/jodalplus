import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { PRICING_PLANS, FAQ_ITEMS } from '../constants';
import { Check, HelpCircle, Star, TableProperties } from 'lucide-react';

const PricingGuidePage: React.FC = () => {
  const navigate = useNavigate();

  // Comparison Data (Moved from ServiceDetailPage)
  const comparisonRows = [
    { label: "입찰 공고 분석", std: "AI 정밀 분석", gold: "AI 정밀 분석", prem: "AI 정밀 분석" },
    { label: "낙찰 예정가", std: "특허 기술 낙찰예정가", gold: "특허 기술 낙찰예정가", prem: "높은 낙찰예정가 제공" },
    { label: "전담 직원", std: "-", gold: "1:1 전담 매니저", prem: "VIP 전담 팀 배정" },
    { label: "벤더사 매칭", std: "수수료 발생", gold: "수수료 면제", prem: "수수료 면제" },
    { label: "적격 심사", std: "벤더 이용 시 제공", gold: "무료 제공", prem: "무료 제공" },
    { label: "공고 리포트", std: "-", gold: "월 1회 제공", prem: "수시 제공" },
    { label: "직접생산 증명", std: "-", gold: "-", prem: "발급 지원" },
  ];

  return (
    <Layout>
      <div className="bg-surface py-20 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-secondary mb-4">서비스 요금 안내</h1>
            <p className="text-lg text-slate-600">
              특허받은 AI 입찰 솔루션, <br/>
              <span className="text-primary font-bold">베타 서비스 기간</span> 동안 파격적인 가격으로 만나보세요.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-24 max-w-7xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <div 
                key={index} 
                className={`w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border-2 relative flex flex-col transition-all duration-300
                  ${plan.isPopular 
                    ? 'border-primary shadow-blue-200 lg:scale-110 z-10 lg:-translate-y-2' 
                    : 'border-slate-100 hover:border-slate-300'
                  }
                `}
              >
                {plan.highlight && (
                  <div className={`text-center py-2 font-bold text-sm tracking-wide ${plan.isPopular ? 'bg-primary text-white' : 'bg-slate-800 text-white'}`}>
                    {plan.highlight}
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold uppercase tracking-wider ${plan.isPopular ? 'text-primary' : 'text-slate-500'}`}>
                      {plan.name}
                    </h3>
                    {plan.isPopular && <Star className="text-yellow-400 fill-yellow-400" size={24} />}
                  </div>
                  
                  <div className="mb-8">
                    {plan.originalPrice && (
                      <div className="text-slate-400 text-sm line-through decoration-slate-400 mb-1">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${plan.isPopular ? 'text-secondary' : 'text-slate-700'}`}>
                        {plan.price}
                      </span>
                      {plan.price !== '무료' && <span className="text-slate-500 font-medium">/년</span>}
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-slate-100 mb-6"></div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? 'bg-blue-100' : 'bg-slate-100'}`}>
                          <Check className={`${plan.isPopular ? 'text-primary' : 'text-slate-500'}`} size={14} strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${plan.isPopular ? 'text-slate-700 font-medium' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                   <Button 
                    onClick={() => navigate('/apply')} 
                    size="lg" 
                    fullWidth 
                    variant={plan.isPopular ? 'primary' : 'outline'}
                    className={plan.isPopular ? 'shadow-lg shadow-blue-500/30' : ''}
                  >
                    {plan.price === '무료' ? '무료로 체험하기' : '상담 및 신청하기'}
                  </Button>
                  {plan.price !== '무료' && (
                    <p className="mt-4 text-xs text-center text-slate-400">
                      * VAT 별도 / 세금계산서 발행 가능
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Comparison Table (Added Section) */}
          <div className="max-w-7xl mx-auto mb-24">
            <div className="flex items-center gap-2 mb-8 justify-center">
               <TableProperties className="text-primary" />
               <h2 className="text-2xl font-bold text-secondary">상세 기능 비교</h2>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
               <div className="w-full">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr>
                        <th className="py-4 px-2 md:px-6 text-slate-500 font-medium w-1/4 align-bottom text-sm md:text-base bg-slate-50/50">구분</th>
                        <th className="py-4 px-2 md:px-6 text-slate-700 font-bold text-lg bg-slate-50 w-1/4 text-center border-t-2 border-slate-200 align-bottom">
                          스탠다드
                          <span className="block text-xs font-normal text-slate-400 mt-1">Basic</span>
                        </th>
                        <th className="py-4 px-2 md:px-6 bg-blue-50 w-1/4 text-center border-t-2 border-primary align-bottom relative">
                           <div className="text-primary font-bold text-lg">골드</div>
                           <span className="block text-xs font-normal text-blue-400 mt-1">Standard</span>
                        </th>
                        <th className="py-4 px-2 md:px-6 text-slate-700 font-bold text-lg bg-slate-50 w-1/4 text-center border-t-2 border-slate-300 align-bottom">
                          프리미엄
                          <span className="block text-xs font-normal text-slate-400 mt-1">Business</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {/* Pricing Row */}
                      <tr>
                        <td className="py-6 px-2 md:px-6 font-bold text-slate-700 text-sm md:text-base bg-slate-50/50">이용 요금</td>
                        <td className="py-6 px-2 md:px-6 text-center bg-slate-50/50">
                          <div className="text-xs text-slate-400 line-through mb-1">월 48,000원 상당</div>
                          <div className="font-bold text-slate-900 text-xl md:text-2xl">무료</div>
                          <div className="text-xs text-primary font-bold mt-1 bg-blue-100 inline-block px-2 py-0.5 rounded">베타 기간 한정</div>
                        </td>
                        <td className="py-6 px-2 md:px-6 text-center bg-blue-50/30 border-x border-blue-100">
                          <div className="text-xs text-slate-400 line-through mb-1">연 2,000,000원</div>
                          <div className="font-bold text-primary text-xl md:text-2xl">99만원</div>
                          <div className="text-xs text-blue-600 font-medium mt-1">50% 이상 할인</div>
                        </td>
                        <td className="py-6 px-2 md:px-6 text-center bg-slate-50/50">
                          <div className="text-xs text-slate-400 line-through mb-1">연 6,000,000원</div>
                          <div className="font-bold text-slate-900 text-xl md:text-2xl">299만원</div>
                          <div className="text-xs text-slate-500 font-medium mt-1">약 50% 할인</div>
                        </td>
                      </tr>
                      
                      {/* Comparison Rows */}
                      {comparisonRows.map((row, idx) => (
                        <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-2 md:px-6 font-medium text-slate-600 text-sm md:text-base border-r border-slate-100">{row.label}</td>
                          <td className="py-4 px-2 md:px-6 text-center text-slate-600 text-sm md:text-base">
                            {row.std === '-' ? <span className="text-slate-300">-</span> : row.std}
                          </td>
                          <td className="py-4 px-2 md:px-6 text-center text-slate-800 font-medium bg-blue-50/10 border-x border-blue-50 text-sm md:text-base">
                            {row.gold}
                          </td>
                          <td className="py-4 px-2 md:px-6 text-center text-slate-600 text-sm md:text-base">
                            {row.prem}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto border-t border-slate-100 pt-16">
            <h2 className="text-2xl font-bold text-secondary mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="text-primary" /> 자주 묻는 질문
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-secondary mb-3">{item.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingGuidePage;