import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #059669 0%, #0d9488 50%, #0891b2 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "60px",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 24 }}>🗺️</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          복지로드
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            textAlign: "center",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.4,
            marginBottom: 40,
          }}
        >
          내 생애주기별 복지혜택 한눈에 보기
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            fontSize: 24,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <span>✅ 50가지+ 혜택</span>
          <span>🔒 로그인 없음</span>
          <span>⚡ 1분 확인</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
