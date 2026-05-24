import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Velio — zarządzanie wspólnotą mieszkaniową";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#fcf8fa",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: "#000000",
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          velio
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#1b1b1d",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Zarządzaj wspólnotą mieszkaniową bez chaosu
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#76777d",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Rozliczenia, dokumenty, głosowania i komunikacja — w jednym miejscu.
        </div>
      </div>
    ),
    { ...size }
  );
}
