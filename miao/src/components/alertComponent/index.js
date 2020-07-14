import Vue from 'vue'

import alertCom from './index.vue'

let compoennt = (function(){
    let defaults = {
        title:'',
        isShow:true,
        content:'',
        confirm:'',
        cancel:'',
        confirmFn:null,
        cancelFn:null
    }
    return function(options) {

        let initComponent = Vue.extend(alertCom)

        defaults = Object.assign(defaults,options)

        let myAlert = new initComponent({
            el:document.createElement('div'),
            data() {
                return {
                    isShow:defaults.isShow,
                    title:defaults.title,
                    content:defaults.content,
                    confirm:defaults.confirm,
                    cancel:defaults.cancel
                }
            },
            methods:{
                confirmFn() {
                    defaults.confirmFn && defaults.confirmFn.call(this)
                },
                cancelFn() {
                    defaults.cancelFn && defaults.cancelFn.call(this)
                }
            }
        })

        myAlert.$mount()
        document.body.appendChild(myAlert.$el)
    }
})()
export default compoennt