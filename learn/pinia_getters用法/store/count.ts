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
        },
        decrement(value: number) {
            if (this.sum > 0) {
                this.sum -= value
            }
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 1,
            school: 'atguigu',
            address: '宏福科技园',
        }
    },
    // 可对state return的数据进行加工（类似于计算属性）
    getters: {
        // 三种写法
        // 1.
        bigSum: state => state.sum * 10,

        // 2.
        // bigSum(state) {
        //     return state.sum * 10
        // },

        // 3.
        upperSchool(): string {
            return this.school.toUpperCase()
        }
    }
})