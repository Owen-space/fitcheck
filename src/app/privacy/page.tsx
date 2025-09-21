export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-slate-800">
      <h1 className="text-3xl font-bold mb-4">개인정보 처리방침</h1>
      <p>
        FitCheck(이하 “서비스”)는 이용자의 개인정보를 소중하게 생각하며, 관련 법령을 준수합니다.
      </p>
      <h2 className="text-xl font-semibold mt-6">1. 수집하는 개인정보 항목</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>서비스 이용 시 입력되는 신체 사이즈 정보</li>
        <li>자동 수집 정보: 브라우저 종류, 접속 IP, 쿠키 정보</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">2. 개인정보의 이용 목적</h2>
      <p>맞춤형 옷 사이즈 추천, 서비스 개선, 광고 제공</p>
      <h2 className="text-xl font-semibold mt-6">3. 개인정보 보관 및 파기</h2>
      <p>입력 데이터는 서버에 저장되지 않고 브라우저 내에서만 사용됩니다.</p>
      <h2 className="text-xl font-semibold mt-6">4. 제3자 제공</h2>
      <p>구글 애드센스를 통한 광고 제공에 한해 비식별 정보가 활용될 수 있습니다.</p>
      <h2 className="text-xl font-semibold mt-6">5. 쿠키 사용 안내</h2>
      <p>구글 등 광고 네트워크에서 쿠키를 활용할 수 있으며, 사용자는 차단할 수 있습니다.</p>
      <h2 className="text-xl font-semibold mt-6">6. 개인정보 보호 책임자</h2>
      <p>문의: example@email.com</p>
      <p className="mt-8 text-sm text-gray-500">최종 업데이트: 2025년 9월 21일</p>
    </div>
  );
}