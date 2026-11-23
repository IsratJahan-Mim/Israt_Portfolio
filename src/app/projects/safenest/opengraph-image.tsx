import { ImageResponse } from "next/og";
import { SAFENEST_DATA } from "@/data/safenestData";

export const runtime = "nodejs";
export const alt = `${SAFENEST_DATA.title} - UI/UX Case Study`;
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
          background: "linear-gradient(135deg, #1C1613 0%, #2A201A 50%, #1C1613 100%)",
          color: "#F2E4DA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "#3B2620",
              color: "#F2C1B4",
              fontSize: "20px",
              fontWeight: "bold",
              border: "1px solid #B87866",
            }}
          >
            UI/UX Case Study
          </span>
          <span style={{ fontSize: "24px", color: "#D9C5B7" }}>Figma Concept</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: "800",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            SafeNest
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "500",
              color: "#F2C1B4",
              maxWidth: "800px",
            }}
          >
            {SAFENEST_DATA.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #3D2F28",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#D9C5B7",
          }}
        >
          <span>Role: {SAFENEST_DATA.role}</span>
          <span>MIM. Portfolio</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
