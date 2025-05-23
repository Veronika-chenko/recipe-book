import httpProxy from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.API_URL || "http://localhost:4000";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise((resolve, reject) => {
    proxy.web(req, res, { target: API_URL, changeOrigin: true }, (error) => {
      if (error) {
        console.error("Proxy error:", error);
        res.status(500).json({ error: "Proxy request failed" });
        reject(error);
      }
    });

    proxy.on("end", resolve);
  });
}
