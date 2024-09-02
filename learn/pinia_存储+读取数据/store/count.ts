import { defineStore } from "pinia";

// defineStore参数：
// 第一个：与文件同名的id
// 第二个：配置（对象类型）
export const useCountStore = defineStore('count', {
    // 真正存储数据的地方
    state() {
        return {
            sum: 6
        }
    }
})