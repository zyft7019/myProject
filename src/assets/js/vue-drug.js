import Vue from 'vue'
import $ from '../../../static/jquery-3.4.1.min.js'
class VueDrug {
    constructor() {
        this.p = {
            isDown: false,
            offLeft: 0,
            offTop: 0,
            srcEl: '',
            cloneEl: '',
            plane: '',
            eventFinish: ''
        }
    }

    initEvent() {
        let moveDispose = ''
        this.p.srcEl.addEventListener("mousedown", e => {
            this.p.isDown = true
            //克隆一个新的元素，代替原来的位置显示，将原始元素设置为绝对定位拖拽
            this.p.cloneEl = this.cloneAndChange(this.p.srcEl)
            //保存鼠标偏移位置
            this.p.offLeft = e.clientX - this.p.srcEl.style.left.replace('px', '')
            this.p.offTop = e.clientY - this.p.srcEl.style.top.replace('px', '')

            document.addEventListener("mousemove", moveDispose = e => {
                if (this.p.isDown) {
                    //修改拖拽位置
                    this.p.srcEl.style.left = (e.clientX - this.p.offLeft) + "px";
                    this.p.srcEl.style.top = (e.clientY - this.p.offTop) + "px";
                }
            })
            //取消原始拖拽
            e.preventDefault()
        })
        this.p.srcEl.addEventListener("mouseup", e => {
            //拖拽结束，还原样式元素
            this.p.isDown = false
            if (this.p.cloneEl) {
                this.p.srcEl.style = this.p.cloneEl.style
                this.p.cloneEl.parentNode.removeChild(this.p.cloneEl)
                this.p.eventFinish ? this.p.eventFinish(this.p.srcEl, e) : null
                this.p.cloneEl = null
            }
            document.removeEventListener('mousemove', moveDispose);
        })
    }

    cloneAndChange() {
        this.p.srcEl.parentNode.style['user-select'] = "none"
        //克隆一个节点代替显示
        let clonedNode = this.p.srcEl.cloneNode(true);
        clonedNode.setAttribute("id", "clone-move-" + new Date().getTime());
        this.p.srcEl.parentNode.insertBefore(clonedNode, this.p.srcEl.nextSibling);
        //修改当前移动节点nextSibling
        this.p.srcEl.style.left = this.p.srcEl.offsetLeft + 'px';
        this.p.srcEl.style.top = (this.p.srcEl.offsetTop-$(".equipment-box").scrollTop())+ 'px';
        this.p.srcEl.style.position = 'absolute';
        this.p.srcEl.style.zIndex = 9999999
        return clonedNode
    }

    initDrug(el, eventFinish) {
        this.p.srcEl = el
        this.p.eventFinish = eventFinish
        this.initEvent(el, eventFinish)
    }
}


Vue.directive('drug-end', {
    bind: function (el, binding,) {
        new VueDrug().initDrug(el, binding.value)
    }
})

export default VueDrug