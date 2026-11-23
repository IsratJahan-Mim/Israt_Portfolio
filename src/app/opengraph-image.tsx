import { ImageResponse } from "next/og";
import { CANDIDATE_INFO } from "@/lib/constants";

export const runtime = "nodejs";
export const alt = `${CANDIDATE_INFO.brand} - ${CANDIDATE_INFO.headline}`;
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
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#B87866",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            M
          </div>
          <span style={{ fontSize: "28px", fontWeight: "700", color: "#F2E4DA" }}>
            MIM<span style={{ color: "#B87866" }}>.</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
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
              fontSize: "26px",
              fontWeight: "600",
              color: "#B87866",
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
            borderTop: "1px solid #3D2F28",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#D9C5B7",
          }}
        >
          <span>{CANDIDATE_INFO.location}</span>
          <span>{CANDIDATE_INFO.email}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
