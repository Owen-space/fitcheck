"use client";
import React, { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";
import { Select } from "./components/Select";
import { fitColor, fitRecommendation } from "./utils/fitUtils";

type FitGrade = "슬림핏" | "레귤러핏" | "세미오버핏" | "오버핏" | "판단 불가";

export default function FitCheckApp() {
  const [page, setPage] = useState<"form" | "result">("form");

  const [fit, setFit] = useState<FitGrade>("판단 불가");

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsense init error:", e);
    }
  }, [page]);

  if (page === "result") {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="bg-white max-w-lg w-full p-6 border border-black rounded-xl shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">핏 결과</h1>
            <span className={`px-5 py-2 text-white font-semibold rounded-lg ${fitColor(fit)}`}>
              {fit}
            </span>
            <p className="mt-4 text-sm">{fitRecommendation(fit)}</p>

            {/* ✅ 구글 애드센스 광고 */}
            <ins className="adsbygoogle"
              style={{ display: "block", marginTop: "20px" }}
              data-ad-client="ca-pub-XXXXXXXXXXXX"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>

            <button
              className="mt-6 w-full py-3 border border-black rounded-lg hover:bg-gray-100"
              onClick={() => setPage("form")}
            >
              다시 입력하기
            </button>
          </div>
        </main>

        <footer className="w-full bg-gray-100 border-t border-gray-300 py-4">
          <div className="max-w-4xl mx-auto px-6 flex justify-between text-sm text-gray-600">
            <span>© 2025 FitCheck</span>
            <a href="/privacy" className="hover:underline">개인정보 처리방침</a>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto p-6 space-y-6">
        <Card title="FitCheck 입력">
          <Input label="가슴단면 (상의)" placeholder="예: 55" onChange={() => {}} />
          <Input label="허리단면 (하의)" placeholder="예: 37" onChange={() => {}} />
          <Select label="브랜드 핏" options={["없음", "Slim", "Regular", "Loose", "Oversized"]} onChange={() => {}} />
        </Card>
        <button
          className="w-full py-3 bg-black text-white rounded-lg"
          onClick={() => {
            setFit("레귤러핏");
            setPage("result"); // ✅ 수정된 부분: 두 줄로 분리
          }}
        >
          결과 확인하기
        </button>
      </main>

      <footer className="w-full bg-gray-100 border-t border-gray-300 py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-between text-sm text-gray-600">
          <span>© 2025 FitCheck</span>
          <a href="/privacy" className="hover:underline">개인정보 처리방침</a>
        </div>
      </footer>
    </div>
  );
}