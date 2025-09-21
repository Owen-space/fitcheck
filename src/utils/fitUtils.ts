export function fitColor(fit: string) {
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

export function fitRecommendation(fit: string) {
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