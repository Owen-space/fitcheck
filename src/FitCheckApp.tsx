import React, { useState } from "react";

// ===== 타입 정의 =====
type Category = "아우터" | "상의" | "하의";
type FitGrade = "슬림핏" | "레귤러핏" | "세미오버핏" | "오버핏" | "판단 불가";

interface Profile {
  height?: number;
  weight?: number;
  chestCircumference?: number;
  waistCircumference?: number;
  bodyNotes?: string;
}

interface GarmentBase {
  brandFit?: "Slim" | "Regular" | "Loose" | "Oversized" | "없음";
}

interface GarmentTop extends GarmentBase {
  totalLength?: number;
  chestHalf?: number;
  sleeve?: number;
  shoulder?: number;
}

interface GarmentBottom extends GarmentBase {
  totalLength?: number;
  waistHalf?: number;
  hipHalf?: number;
  thighHalf?: number;
  rise?: number;
  hemHalf?: number;
}

// ===== 상의 핏 계산 =====
function gradeTopByChest(
  chestHalf?: number,
  bodyChestCircum?: number,
  brandFit?: string
): FitGrade {
  if (!chestHalf) return "판단 불가";
  let ease = bodyChestCircum ? chestHalf - bodyChestCircum / 2 : chestHalf - 50;
  let grade: FitGrade;

  if (ease <= 2) grade = "슬림핏";
  else if (ease <= 6) grade = "레귤러핏";
  else if (ease <= 12) grade = "세미오버핏";
  else grade = "오버핏";

  if (brandFit === "Slim" && grade !== "슬림핏") grade = "레귤러핏";
  if (brandFit === "Loose" && grade === "레귤러핏") grade = "세미오버핏";
  if (brandFit === "Oversized") grade = "오버핏";

  return grade;
}

// ===== 하의 핏 계산 =====
function gradeBottomByWaist(
  waistHalf?: number,
  bodyWaistCircum?: number,
  brandFit?: string
): FitGrade {
  if (!waistHalf) return "판단 불가";
  const assumedWaist = bodyWaistCircum || waistHalf * 2;
  const ease = waistHalf - assumedWaist / 2;
  let grade: FitGrade;

  if (ease <= 2) grade = "슬림핏";
  else if (ease <= 5) grade = "레귤러핏";
  else if (ease <= 10) grade = "세미오버핏";
  else grade = "오버핏";

  if (brandFit === "Slim" && grade !== "슬림핏") grade = "레귤러핏";
  if (brandFit === "Loose" && grade === "레귤러핏") grade = "세미오버핏";
  if (brandFit === "Oversized") grade = "오버핏";

  return grade;
}

// ===== 메인 컴포넌트 =====
export default function FitCheckApp() {
  const [page, setPage] = useState<"form" | "result">("form");
  const [profile, setProfile] = useState<Profile>({});
  const [category, setCategory] = useState<Category>("상의");
  const [top, setTop] = useState<GarmentTop>({ brandFit: "없음" });
  const [bottom, setBottom] = useState<GarmentBottom>({ brandFit: "없음" });
  const [fit, setFit] = useState<FitGrade>("판단 불가");
  const [noteMessage, setNoteMessage] = useState<string>("");

  function handleCheck() {
    let grade: FitGrade = "판단 불가";
    if (category === "하의") {
      grade = gradeBottomByWaist(
        bottom.waistHalf,
        profile.waistCircumference,
        bottom.brandFit
      );
    } else {
      grade = gradeTopByChest(
        top.chestHalf,
        profile.chestCircumference,
        top.brandFit
      );
    }
    setFit(grade);

    if (!profile.bodyNotes || profile.bodyNotes.trim() === "") {
      setNoteMessage("체형 메모를 입력하지 않아 기본 기준만으로 계산한 결과입니다.");
    } else {
      setNoteMessage(`체형 메모 (${profile.bodyNotes})를 고려했습니다.`);
    }

    setPage("result");
  }

  // 결과 페이지
  if (page === "result") {
    return (
      <div className="min-h-screen w-full bg-gray-50 text-slate-800 flex flex-col items-center py-12 px-6">
        <div className="bg-white w-full max-w-lg border border-black rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">핏 결과</h1>
          <div className="mb-4">
            <span
              className={`inline-block px-6 py-3 text-white text-lg font-semibold ${fitColor(
                fit
              )}`}
            >
              {fit}
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-6">{noteMessage}</p>
          <div className="bg-gray-100 p-4 border border-black rounded-lg mb-6">
            <p className="text-sm text-slate-700">
              추천 코멘트: {fitRecommendation(fit)}
            </p>
          </div>
          <img
            src={fitImage(fit)}
            alt="샘플 착장"
            className="w-full rounded-lg border border-black mb-6 shadow-sm"
          />
          <button
            className="w-full py-3 border border-black text-black font-semibold rounded-lg hover:bg-gray-100"
            onClick={() => setPage("form")}
          >
            다시 입력하기
          </button>
        </div>
      </div>
    );
  }

  // 입력 페이지
  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <header className="sticky top-0 z-10 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* 심플한 티셔츠 아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="white"
              className="w-6 h-6"
            >
              <path d="M16 3h-1a4 4 0 0 1-6 0H8L4 6l2 3v12h12V9l2-3-4-3z" />
            </svg>
            <div className="font-extrabold text-xl">FitCheck</div>
          </div>
          <div className="text-xs text-gray-300 font-medium">옷 사이즈 계산기</div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {/* 입력 카드 (예시) */}
        {/* ... 네가 올려준 Input / Card / Select / TextArea 컴포넌트 활용 부분 이어짐 ... */}
      </main>
    </div>
  );
}

// ===== 보조 함수 =====
function fitColor(fit: FitGrade) {
  switch (fit) {
    case "슬림핏":
      return "bg-blue-500";
    case "레귤러핏":
      return "bg-green-500";
    case "세미오버핏":
      return "bg-yellow-500";
    case "오버핏":
      return "bg-purple-500";
    default:
      return "bg-gray-400";
  }
}

function fitRecommendation(fit: FitGrade) {
  switch (fit) {
    case "슬림핏":
      return "몸에 밀착되어 깔끔한 실루엣을 연출합니다.";
    case "레귤러핏":
      return "대부분의 체형에 무난하게 어울리는 기본 핏입니다.";
    case "세미오버핏":
      return "여유로운 느낌을 주면서도 깔끔하게 떨어집니다.";
    case "오버핏":
      return "트렌디하고 박시한 실루엣을 연출할 수 있습니다.";
    default:
      return "입력값이 부족해 추천이 어렵습니다.";
  }
}

function fitImage(fit: FitGrade) {
  switch (fit) {
    case "슬림핏":
      return "/images/fit-slim.png";
    case "레귤러핏":
      return "/images/fit-regular.png";
    case "세미오버핏":
      return "/images/fit-semi.png";
    case "오버핏":
      return "/images/fit-oversize.png";
    default:
      return "/images/fit-default.png";
  }
}
