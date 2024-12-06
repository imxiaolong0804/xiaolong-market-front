"use client";

import {activityStrategyArmory} from "@/apis";
import {useState} from "react";
import {motion} from "framer-motion";

export function StrategyArmory() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const strategyArmoryHandle = async () => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const queryParams = new URLSearchParams(window.location.search);
            const activityId = Number(queryParams.get('activityId'));
            if (!activityId) {
                throw new Error("请在请求地址中，配置 activityId 值，如：http://big-market.gaga.plus/?userId=xiaofuge&activityId=100301");
            }
            const res = await activityStrategyArmory(activityId);
            const {code, info} = await res.json();
            if (code !== "0000") {
                throw new Error(`抽奖活动策略装配失败 code: ${code} info: ${info}`);
            }
            setSuccess(true);
        } catch (err: any) {
            setError(err.message || "发生未知错误");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            disabled={isLoading}
            onClick={strategyArmoryHandle}
            className={`flex items-center justify-center px-6 py-3 mb-8 text-white bg-yellow-600 rounded-full shadow-lg transition 
                        duration-300 ease-in-out 
                        hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 
                        disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="装配抽奖"
        >
            {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
            ) : null}
            {isLoading ? "装配中..." : "装配抽奖「测试前点击预热数据」"}
            {/* 成功提示 */}
            {success && (
                <span className="ml-2 text-green-400">
                    ✅ 装配完成！
                </span>
            )}
            {/* 错误提示 */}
            {error && (
                <span className="ml-2 text-red-400">
                    ❌ {error}
                </span>
            )}
        </motion.button>
    );
}
