import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { PRICING_PLANS, FAQ_ITEMS } from '../constants';
import { Check, HelpCircle, Star } from 'lucide-react';

const PricingGuidePage: React.FC = () => {
  const navigate = useNavigate();

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