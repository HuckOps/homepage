import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Layout() {
  useEffect(() => {
    const tr = (window as unknown as { translate?: any }).translate;
    if (!tr || (window as unknown as { __trInited?: boolean }).__trInited) return;
    (window as unknown as { __trInited?: boolean }).__trInited = true;
    try {
      tr.language.setLocal("chinese_simplified"); // 当前页面语种
      tr.service.use("client.edge"); // 纯客户端翻译，不依赖服务端
      tr.listener.start(); // 监听 DOM 变化，React 动态内容也能翻
      tr.request.listener.start(); // 监听 ajax 请求
      tr.execute(); // 执行翻译
      const nav = navigator.language?.toLowerCase() || "";
      if (!nav.startsWith("zh")) tr.changeLanguage("english"); // 非中文浏览器自动翻译
    } catch {
      /* 翻译失败时不影响页面其余功能 */
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#faf8f5]">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-5 py-10 sm:px-8 sm:py-16">
        <SiteNav />
        <div className="flex-1">
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </div>
  );
}
