import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "学生学习追踪后台 MVP",
  description: "面向手机直播展示的学生学习追踪后台最小版本"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
