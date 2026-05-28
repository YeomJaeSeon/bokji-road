import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#059669",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Pin circle (top round part) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: "#059669",
                borderRadius: "50%",
              }}
            />
          </div>
          {/* Pin tail */}
          <div
            style={{
              width: 22,
              height: 34,
              background: "white",
              borderRadius: "0 0 14px 14px",
              marginTop: -4,
            }}
          />
        </div>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
