import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "d2bgcbqohs", 
  // ↓ここを、Q473で終わる英数字だけにしてください。
  // 「ここに貼り付け」などの日本語や、前後のスペースは一切含めないのがコツです。
  apiKey: "fyYfLw46H144lbTu3quFileC2AroOMRWQ473", 
});

// 型定義はそのまま
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    name: string;
  } | null;
};

export type Product = {
  id: string;
  title: string;
  content: string; // リッチエディタの中身（HTML文字列）が入ります
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  category: {
    id: string;
    name: string;
  } | null;
  publishedAt: string;
};