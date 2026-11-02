import { ImageResponse } from "next/og";
import { SAFENEST_DATA } from "@/data/safenestData";

export const runtime = "edge";
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
          background: "linear-gradient(135deg, #0C0A14 0%, #201736 50%, #0C0A14 100%)",
          color: "#F7F5FC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              background: "#371520",
              color: "#FECDD3",
              fontSize: "18px",
              fontWeight: "bold",
              border: "1px solid #FB7185",
            }}
          >
            Figma Mobile UI Concept
          </span>
          <span style={{ fontSize: "22px", color: "#A78BFA" }}>
            Israt Jahan Mim Case Study
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "800",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            SafeNest
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#C8C2D9",
              maxWidth: "900px",
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
            borderTop: "1px solid #2C2444",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#958CAE",
          }}
        >
          <span>6-Screen Interactive Embla Carousel</span>
          <span>Accommodation Discovery &amp; Booking</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

