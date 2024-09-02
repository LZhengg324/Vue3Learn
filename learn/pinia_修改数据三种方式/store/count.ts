import { defineStore } from "pinia";

// defineStore参数：
// 第一个：与文件同名的id
// 第二个：配置（对象类型）
export const useCountStore = defineStore('count', {
    // actions 里放置方法，用于相应组件的 “动作”
    actions: {
        increment(value: number) {
            if (this.sum < 10) {
                this.sum += value
            } 
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: 'atguigu',
            address: '宏福科技园',
        }
    }
})