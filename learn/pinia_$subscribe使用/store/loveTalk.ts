import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

export const useLoveTalkStore = defineStore('loveTalk', {
    actions: {
         async getLoveTalk() {
            try {
                //连续解构赋值 + 重命名
                const {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
                this.talkList.unshift({id: nanoid(), title})
            } catch (error) {
                console.error(error)
            }
        }
    },
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})