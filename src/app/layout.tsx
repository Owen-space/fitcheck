// src/app/layout.tsx

import "../styles/globals.css";  // 여기에 추가

export const metadata = {
  title: "FitCheck - 옷 사이즈 계산기",
  description: "무신사처럼 옷 사이즈 계산하기",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 애드센스 스크립트 (후엔 client ID로 교체) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
