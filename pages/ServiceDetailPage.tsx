import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { SERVICE_PROCESS } from '../constants';
import { Award, Quote, CheckCircle2, Building2, TrendingUp, Users } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const navigate = useNavigate();

  // Custom testimonials based on user request
  const CUSTOM_REVIEWS = [
    {
      id: 1,
      tag: "매출 돌파구",
      title: "막막했던 공공조달, 이제는 회사의 핵심 파이프라인이 되었습니다.",
      content: "경기 침체로 회사 매출이 계속 떨어져 막연하게 '나라장터 입찰이라도 해볼까?' 생각했습니다. 하지만 용어도 어렵고 절차가 복잡해 엄두를 못 내고 있었죠. 조달플러스는 복잡한 공부 없이도 바로 입찰에 참여할 수 있게 떠먹여 주는 느낌이었습니다. 덕분에 첫달부터 꾸준히 투찰하며 새로운 희망을 보고 있습니다.",
      author: "제조업 K 대표님",
      icon: TrendingUp
    },
    {
      id: 2,
      tag: "비용 절감",
      title: "연봉 4,500만원 직원보다 더 든든한 파트너입니다.",
      content: "과거에 조달 업무를 위해 전담 직원을 채용했었습니다. 하지만 1년이 지나도 낙찰 소식은 없고, 인건비와 4대 보험료만 계속 나가서 결국 정리를 했었죠. 조달플러스를 만나고 나서는 비용은 1/10도 안 되는데, 마치 10년 차 베테랑 팀이 우리 회사에 생긴 것 같은 효과를 보고 있습니다. 진작 알았더라면 좋았을 겁니다.",
      author: "정보통신공사업 P 이사님",
      icon: Users
    },
    {
      id: 3,
      tag: "납품 및 자금 확보",
      title: "낙찰 후 벤더사 매칭 덕분에 정책 자금까지 해결했습니다.",
      content: "운 좋게 1순위 낙찰을 받았을 때의 기쁨도 잠시, 물건을 납품해줄 제조사를 찾지 못해 계약을 포기할 뻔했습니다. 그때 조달플러스가 검증된 벤더사를 즉시 연결해줘서 무사히 납품을 마쳤습니다. 이 실적 덕분에 회사 신용도가 올라가서 그토록 원하던 정책 자금 대출까지 승인받게 되었습니다.",
      author: "도소매업 L 대표님",
      icon: Building2
    }
  ];

  return (
    <Layout>
      <div className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full font-semibold mb-6">
              <Award size={18} />
              <span>특허 제 10-2869603호 BM 기술</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              복잡한 조달 업무,<br/>
              <span className="text-primary">조달플러스</span> 하나로 끝내세요
            </h1>
            <p className="text-lg text-slate-600">
              분석부터 낙찰, 그리고 납품까지.<br/>
              사장님은 사업 확장에만 집중하세요. 나머지는 저희가 해결합니다.
            </p>
          </div>

          {/* Process Steps Visualized */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
            {SERVICE_PROCESS.map((item, index) => (
              <div key={index} className="relative group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-slate-50 text-slate-200 text-5xl font-black p-4 rounded-bl-3xl leading-none select-none group-hover:text-blue-50 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4 h-12">{item.desc}</p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    <CheckCircle2 size={16} className="mr-1" />
                    <span>핵심 솔루션</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Service Explanation Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 mb-24">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                   <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Service Detail</span>
                   <h2 className="text-3xl font-bold text-secondary mb-6">왜 많은 기업이<br/>조달플러스를 선택할까요?</h2>
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                            <TrendingUp size={24} />
                         </div>
                         <div>
                            <h4 className="font-bold text-lg text-slate-800 mb-1">매출 상승의 기회 제공</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                               민간 시장의 경쟁 심화로 매출 부진을 겪는 기업에게 
                               연간 200조 원 규모의 공공 조달 시장이라는 새로운 판로를 열어드립니다.
                            </p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                            <Users size={24} />
                         </div>
                         <div>
                            <h4 className="font-bold text-lg text-slate-800 mb-1">인건비 걱정 없는 전문성</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                               4대 보험, 퇴직금, 연차 걱정 없이 월 10만원 이하(골드 기준)의 비용으로 
                               전문 입찰 분석팀을 고용하는 것과 동일한 효과를 누리실 수 있습니다.
                            </p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                            <Building2 size={24} />
                         </div>
                         <div>
                            <h4 className="font-bold text-lg text-slate-800 mb-1">실적 쌓고 정책 자금까지</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                               단순한 입찰 대행을 넘어, 낙찰 후 납품 완료를 통해 기업의 공공 실적(Track Record)을 
                               만들어 드립니다. 이는 향후 정책 자금 확보나 신용 등급 향상에 큰 도움이 됩니다.
                            </p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="relative">
                   <div className="bg-slate-100 rounded-2xl p-6 md:p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border-l-4 border-primary">
                         <div className="text-xs text-slate-400 mb-1">2024.03.15 낙찰 성공</div>
                         <div className="font-bold text-slate-800">교육청 스마트 기기 보급 사업</div>
                         <div className="text-right text-primary font-bold mt-2">287,000,000원</div>
                      </div>
                      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border-l-4 border-green-500">
                         <div className="text-xs text-slate-400 mb-1">2024.04.02 벤더 매칭 완료</div>
                         <div className="font-bold text-slate-800">(주)삼성전자 공식 대리점 연결</div>
                         <div className="text-right text-green-600 font-bold mt-2">공급 확약서 발급</div>
                      </div>
                      <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-purple-500">
                         <div className="text-xs text-slate-400 mb-1">2024.05.20 정책 자금 승인</div>
                         <div className="font-bold text-slate-800">중소벤처기업진흥공단 운전 자금</div>
                         <div className="text-right text-purple-600 font-bold mt-2">1.5억 승인 완료</div>
                      </div>
                   </div>
                   <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg">
                      실제 고객 성공 사례
                   </div>
                </div>
             </div>
          </div>

          {/* New Testimonials Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              먼저 경험한 대표님들의 <span className="text-primary">진짜 이야기</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CUSTOM_REVIEWS.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                       <review.icon size={24} />
                    </div>
                    <Quote className="text-slate-200" size={40} />
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                      {review.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">
                    "{review.title}"
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {review.content}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <div className="font-bold text-slate-800">{review.author}</div>
                    <div className="text-xs text-slate-400">조달플러스 6개월 이용</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary mb-6">성공적인 조달 진입, 지금이 기회입니다</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button onClick={() => navigate('/apply')} size="lg" className="shadow-lg shadow-blue-500/20">
                 무료 상담 신청하기
               </Button>
               <Button onClick={() => navigate('/pricing-guide')} variant="outline" size="lg">
                 요금제 자세히 보기
               </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetailPage;