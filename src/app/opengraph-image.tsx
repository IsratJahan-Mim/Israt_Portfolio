import { ImageResponse } from "next/og";
import { CANDIDATE_INFO } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${CANDIDATE_INFO.name} - SEO & Digital Marketing Specialist`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0C0A14 0%, #1A132E 50%, #0C0A14 100%)",
          color: "#F7F5FC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #E11D48, #6D28D9, #D97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            JM
          </div>
          <span style={{ fontSize: "24px", fontWeight: "600", color: "#C8C2D9" }}>
            Portfolio &amp; Case Studies
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            {CANDIDATE_INFO.name}
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "500",
              color: "#FB7185",
            }}
          >
            {CANDIDATE_INFO.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2C2444",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#958CAE",
          }}
        >
          <span>{CANDIDATE_INFO.location}</span>
          <span>isratjahanmim.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

