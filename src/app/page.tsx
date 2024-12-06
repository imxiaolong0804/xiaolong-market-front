"use client";

import {LuckyWheelPage} from "@/app/pages/lucky/lucky-wheel-page";
import {LuckyGridPage} from "@/app/pages/lucky/lucky-grid-page";
import dynamic from "next/dynamic";
import {useState} from "react";

const StrategyArmoryButton = dynamic(async () => (await import("./components/StrategyArmory")).StrategyArmory)
const StrategyRuleWeightButton = dynamic(async () => (await import("./components/StrategyRuleWeight")).StrategyRuleWeight)
const MemberCardButton = dynamic(async () => (await import("./components/MemberCard")).MemberCard)
const SkuProductButton = dynamic(async () => (await import("./components/SkuProduct")).SkuProduct)


export default function Home() {

    const [refresh, setRefresh] = useState(0);

    const handleRefresh = () => {
        setRefresh(refresh + 1)
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#e7305e]"
             style={{
                 backgroundImage: "url('/wsy.jpg')",
                 backgroundSize: "contain",
                 backgroundRepeat: "no-repeat",
                 backgroundPosition: "center",
                 aspectRatio: "16 / 9", // 调整为图片宽高比
                 minHeight: "100vh",
             }}
        >
            {/* 头部文案 */}
            <header
                className="text-center my-8 p-4"
                style={{
                    color: "#FFD700", // 金色字体
                    fontFamily: "'Poppins', sans-serif", // 更现代的字体
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // 阴影增强对比度
                    fontSize: "3rem", // 调整字体大小
                    fontWeight: "bold", // 加粗标题
                    // background: "rgba(0, 0, 0, 0.6)", // 半透明背景
                    borderRadius: "10px", // 圆角
                }}
            >
                imxiaolong - 抽奖系统
            </header>

            {/* 会员卡 */}
            <MemberCardButton allRefresh={refresh}/>

            {/* 装配抽奖 */}
            <StrategyArmoryButton/>

            {/* 商品 */}
            <SkuProductButton handleRefresh={handleRefresh}/>

            {/* 中间的两个div元素 */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
                    <div className="text-gray-700">
                        <LuckyWheelPage handleRefresh={handleRefresh}/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
                    <div className="text-gray-700">
                        <LuckyGridPage handleRefresh={handleRefresh}/>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <StrategyRuleWeightButton refresh={refresh}/>
            </div>

            {/* 底部文案 */}
            <footer className="text-center my-8 p-4"
                    style={{
                        color: "#ffffff", // 白色字体
                        fontFamily: "Arial, sans-serif", // 字体为 Arial
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)", // 添加阴影提升对比
                        background: "rgba(0, 0, 0, 0.5)", // 半透明背景
                        borderRadius: "10px", // 圆角样式
                        lineHeight: "1.8", // 增加行间距
                    }}
            >
                <div className="mb-4 text-lg font-bold">
                    本项目为测试项目，抽奖内容无法兑换
                </div>

                <div className="mb-4 text-sm">
                    <span>项目地址：</span>
                    <a
                        href="https://github.com/imxiaolong0804/xiaolong-bigmarket.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        https://github.com/imxiaolong0804/xiaolong-bigmarket.git
                    </a>
                </div>

                <div className="text-sm">
                    <span>致谢：</span>
                    <span className="font-semibold text-yellow-300">
                        感谢 WSY 对项目的背景做出的贡献
                    </span>
                </div>
            </footer>
        </div>
    );
}
