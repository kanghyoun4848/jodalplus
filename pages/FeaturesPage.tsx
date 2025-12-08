import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { KEY_FEATURES } from '../constants';

const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl font-bold text-secondary mb-6">강력한 AI 기술력</h1>
            <p className="text-lg text-slate-600">
              수십 년간 쌓인 조달청 데이터를 학습한 AI 엔진이 <br/>
              가장 낙찰 확률이 높은 공고를 찾아냅니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            {KEY_FEATURES.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Deep Dive 1: Qualification Calculator */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24 bg-surface rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-secondary mb-4">적격심사 자동 계산기</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                복잡한 경영상태 평가, 신인도 점수, 실적 평가를 일일이 계산할 필요가 없습니다. 
                재무제표 데이터만 입력하면 AI가 실시간으로 예상 점수를 산출하고, 
                부족한 점수를 보완할 수 있는 전략까지 제안합니다.
              </p>
              <ul className="space-y-2 mb-8 text-slate-700">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>경영상태 평가 자동화</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>실적 계수 자동 적용</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>신인도 가감점 체크리스트</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600" 
                alt="Premium Financial Calculator" 
                className="rounded-xl shadow-lg w-full h-auto object-cover transform md:rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Feature Deep Dive 2: Real-time Monitoring */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20 bg-secondary text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">실시간 입찰 모니터링</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                내가 관심 있는 키워드, 지역, 면허 조건에 맞는 공고가 뜨면 
                즉시 알림을 보내드립니다. 마감 임박 공고도 놓치지 않도록 
                스마트한 일정 관리 기능을 제공합니다.
              </p>
              <Button variant="primary" onClick={() => navigate('/apply')}>
                기능 체험해보기
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                alt="IT Data Monitoring Dashboard" 
                className="rounded-xl shadow-lg w-full h-auto object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage;