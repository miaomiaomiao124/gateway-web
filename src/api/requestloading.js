import Vue from 'vue'

class requestloading {
    constructor() {
        this.loading = Vue.prototype.$loading({
            lock: true,
            text: '努力加载中...',
            background: 'rgba(0,0,0,0.5)',
            target: document.querySelector('.loading-area') // 设置加载动画区域
        })
        this.needLoadingRequestCount = 0;
    }
    showFullScreenLoading() {
        if (this.needLoadingRequestCount === 0) {
            this.loading()
        }
        this.needLoadingRequestCount++
    }
    hideFullScreenLoading() {
        if (this.needLoadingRequestCount <= 0) return
        this.needLoadingRequestCount--
        if (this.needLoadingRequestCount === 0) {
            this.loading.close();
        }
    }
}
 export default requestloading