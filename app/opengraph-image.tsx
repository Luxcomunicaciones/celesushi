import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME } from "@/lib/seo";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE_NAME;

export default async function OpengraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public/assets/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0d12",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 82% 20%, rgba(41,171,226,0.35), transparent 60%), radial-gradient(700px 450px at 5% 95%, rgba(232,25,44,0.22), transparent 60%)",
            display: "flex",
          }}
        />
        <img src={logoSrc} width={340} height={236} alt="" style={{ objectFit: "contain" }} />
        <div
          style={{
            marginTop: 36,
            fontSize: 52,
            fontWeight: 900,
            color: "#F2F5F8",
            display: "flex",
            maxWidth: 900,
            lineHeight: 1.08,
          }}
        >
          Sushi fresco, directo a tu puerta.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#9AA7B4",
            display: "flex",
          }}
        >
          7 sucursales en Santiago · Pedidos por WhatsApp
        </div>
      </div>
    ),
    { ...size }
  );
}
