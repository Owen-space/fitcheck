export const metadata = {
  title: "FitCheck - 옷 사이즈 계산기",
  description: "무신사풍 옷 사이즈 계산기 앱",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* ✅ 구글 애드센스 스크립트 (본인 client ID로 교체) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}