import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ==============================================================================
// [중요] EmailJS 설정 영역
// 1. Service ID: service_paran4848 (설정 완료)
// 2. Template ID: template_2pes9v6 (설정 완료)
// 3. Public Key: 8YLrHXeYtswAc_Ql3 (설정 완료)
// ==============================================================================
const SERVICE_ID = 'service_paran4848';
const TEMPLATE_ID = 'template_2pes9v6'; 
const PUBLIC_KEY = '8YLrHXeYtswAc_Ql3'; 

const ApplyPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    interests: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, interests: [...prev.interests, value] }));
    } else {
      setFormData(prev => ({ ...prev, interests: prev.interests.filter(item => item !== value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    // EmailJS로 보낼 데이터 객체 매핑
    const templateParams = {
      company_name: formData.companyName,
      contact_person: formData.contactPerson,
      phone: formData.phone,
      reply_to: formData.email,
      interests: formData.interests.join(', '),
      to_email: 'paran6008@naver.com'
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Email send failed:', error);
      alert('접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center bg-surface px-4">
          <div className="text-center max-w-lg bg-white p-12 rounded-3xl shadow-lg border border-slate-100">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">신청이 완료되었습니다!</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              성공적으로 접수되었습니다. <br/>
              담당자가 <strong>{formData.companyName}</strong>의 신청 내용을 확인 후<br/> 
              <strong>24시간 이내</strong>에 안내 드리겠습니다.
            </p>
            <Button onClick={() => window.location.href = '/'} variant="outline">
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-surface py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-secondary p-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-2">베타 서비스 무료 체험 신청</h1>
              <p className="text-slate-300">간단한 정보만 입력하면 담당자가 배정됩니다.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-sm font-medium text-slate-700">기업명</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="(주)조달플러스"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contactPerson" className="text-sm font-medium text-slate-700">담당자명</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="홍길동"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">연락처</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="010-1234-5678"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <label className="text-sm font-medium text-slate-700 block">관심 분야 (중복 선택 가능)</label>
                <div className="grid grid-cols-2 gap-3">
                  {['공사 입찰', '용역 입찰', '물품 구매', '기타 관급자재'].map((item) => (
                    <label key={item} className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        value={item}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary"
                      />
                      <span className="text-slate-700">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  fullWidth 
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      전송 중...
                    </>
                  ) : (
                    '무료 상담 및 체험 신청하기'
                  )}
                </Button>
                <p className="text-xs text-center text-slate-400 mt-4">
                  제출 시 개인정보 처리방침에 동의하는 것으로 간주합니다.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplyPage;