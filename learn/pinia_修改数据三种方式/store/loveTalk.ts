import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore('loveTalk', {
    state() {
        return {
            talkList: [
                {id: '0001', title: '今天你有点怪，哪里怪？怪好看的'},
                {id: '0002', title: '草莓蓝莓蔓越莓，你今天想我了没'},
                {id: '0003', title: '心里给你留了一块地，我的死心塌地'}
            ]
        }
    }
})