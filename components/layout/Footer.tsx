import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 text-white">
              <BarChart2 size={24} className="text-primary" />
              <span className="text-xl font-bold">조달플러스</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              AI 기술과 전문가의 노하우를 결합하여<br/>
              누구나 쉽게 공공조달 시장에 진입할 수 있도록 돕습니다.
            </p>
            <div className="text-xs text-slate-500">
              © 2024 JodalPlus Inc. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/service-detail" className="hover:text-primary transition-colors">서비스 소개</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">핵심 기능</Link></li>
              <li><Link to="/pricing-guide" className="hover:text-primary transition-colors">요금 안내</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/apply" className="hover:text-primary transition-colors">문의하기</Link></li>
              <li><Link to="/apply" className="hover:text-primary transition-colors">베타 신청</Link></li>
              <li className="text-slate-500">paran6008@naver.com</li>
              <li className="text-slate-500">1555-1229</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;