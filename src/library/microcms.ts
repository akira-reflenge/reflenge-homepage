import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
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
  "company-name"?: string;
  publishedAt: string;
};

export type OurProduct = {
  id: string;
  title: string;
  content: string;
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