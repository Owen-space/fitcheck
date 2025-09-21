import "../styles/globals.css";

export const metadata = {
  title: "FitCheck - 옷 사이즈 계산기",
  description: "무신사처럼 옷 사이즈 계산하기",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}
