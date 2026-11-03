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
          background: "linear-gradient(135deg, #1C1815 0%, #2A231C 50%, #1C1815 100%)",
          color: "#FAF7F2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "#381A0E",
              color: "#FFB08E",
              fontSize: "20px",
              fontWeight: "bold",
              border: "1px solid #E65C24",
            }}
          >
            UI/UX Case Study
          </span>
          <span style={{ fontSize: "24px", color: "#C8BFB5" }}>Figma Concept</span>
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
              color: "#FFB08E",
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
            borderTop: "1px solid #38312A",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#C8BFB5",
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
