export default (function () {
    var p = {
        network: '',
        gridLineSize: 50, //网格边长
        srcWidth: 0,
        srcHeight: 0,
        width: 0,   //绘制宽
        height: 0,  //绘制高
        isStartCountPoint: false,   //是否开始计算坐标
        isMoveNode: false,          //是否处于移动节点状态
        isMoveLink: false,          //是否处于移动链接状态
        maxSizeLine: 0,            //刻度尺长度
        offset: {
            x: 0,     //画布x偏移
            y: 0,     //画布y偏移
            lastX: 0, //上次偏移x
            lastY: 0, //上次偏移y
            vG: 0,    //x移动方向
            hG: 0     //y移动方向
        },
        events: [],
        scale: 1
    }

    //初始化画布拖放
    var initCanvasTouch = () => {
        let startMouse = {x: 0, y: 0}

        //画布拖动之前
        p.network.on('dragStart', p.events[0] = e => {
            //保存起始坐标
            startMouse = {
                x: e.pointer.DOM.x,  //可视坐标x
                y: e.pointer.DOM.y,  //可视坐标y
            }
            p.offset.lastX = p.offset.x;  //缓存上次坐标
            p.offset.lastY = p.offset.y;
            p.isStartCountPoint = true    //开始计算
        })
        //拖动
        p.network.on('dragging', p.events[1] = e => {
            //处于开始计算 且 鼠标不再节点上
            if (p.isStartCountPoint && e.nodes.length == 0 && e.edges.length == 0) {
                let curPoint = {
                    x: e.pointer.DOM.x,
                    y: e.pointer.DOM.y,
                }
                //方向
                p.offset.vG = curPoint.y > startMouse.y ? 1 : -1
                p.offset.hG = curPoint.x > startMouse.x ? 1 : -1
                //修改画布偏移x
                p.offset.x = p.offset.lastX + ((Math.abs(curPoint.x - startMouse.x) * p.offset.hG) * (1 / p.scale))
                //修改画布偏移y
                p.offset.y = p.offset.lastY + ((Math.abs(curPoint.y - startMouse.y) * p.offset.vG) * (1 / p.scale))
            }
        })
        //节点绘制之前
        p.network.on("beforeDrawing", p.events[2] = c2d => {
            //将可视坐标转换为 canvas坐标
            let srcPoint = p.network.DOMtoCanvas({x: 0, y: 0})
            let offsetPoint = {
                x: p.offset.x,
                y: p.offset.y,
                hg: p.offset.hG,
                vg: p.offset.vG
            }
            //绘制网格
            drawGridLine(c2d, offsetPoint, srcPoint)
            //绘制图片
            //绘制卡尺
            // drawSizeLine(c2d, offsetPoint, srcPoint)
        });
        // 拖动结束
        p.network.on('dragEnd', p.events[4] = () => {
            p.isStartCountPoint = false
        })
        p.network.on('zoom', e => {
            p.scale = e.scale
            p.width = p.srcWidth * (1 / (p.scale))
            p.height = p.srcHeight * (1 / (p.scale))
        })

    }
    //绘制刻度
    var img = new Image();
    img.src = require("../img/fangge.png");
//  var drawSizeLine = function (ctx2d, offsetPoint, srcPoint) {
//      drawReSet(ctx2d, true, 1, '', "#cacaca")
//
//      //原始点坐标 0,0
//      srcPoint = Object.assign({x: 0, y: 0}, srcPoint)
//      //x y 偏移坐标
//      offsetPoint = Object.assign({x: 0, y: 0, hg: 1, vg: 1}, offsetPoint)
//      offsetPoint.srcx = offsetPoint.x
//      offsetPoint.srcy = offsetPoint.y
//      offsetPoint.x = offsetPoint.x % p.gridLineSize  //网格大小为50， 将偏移坐标控制在 1-50之前
//      offsetPoint.y = offsetPoint.y % p.gridLineSize
//
//      //顶部/左侧 背景块
//      ctx2d.fillRect(srcPoint.x, srcPoint.y, p.width, p.maxSizeLine);
//      ctx2d.fillRect(srcPoint.x, srcPoint.y, p.maxSizeLine, p.height);
//
//      drawReSet(ctx2d, true, '', '#4d4d4d')
//
//      //坐标计算
//      let countPoint = (xy) => {
//          // 用于绘制 不同长度线段的 计数器
//          let drawLineNum = drawLineNum = Math.round((offsetPoint[xy] ? offsetPoint[xy] / (p.gridLineSize / 10) : 0)) * -1;
//          // 卡尺数字， 将当前x 总偏移 转换为 卡尺起始数字， 50为网格像素， 50像素 为 10 卡尺长度
//          let textNum = textNum = parseInt((offsetPoint['src' + xy] * -1) / p.gridLineSize) + 1
//          //调整 textNum
//          offsetPoint['src' + xy] != 0 && drawLineNum == 10 ? textNum++ : null
//          offsetPoint['src' + xy] > 0 && drawLineNum < 0 ? textNum-- : null
//          return {
//              drawLineNum: drawLineNum,
//              textNum: textNum,
//              padding: p.maxSizeLine + 5 //空出上卡尺和左卡尺的 交叉点
//          }
//      }
//      let xParams = countPoint('x');
//      let yParams = countPoint('y');
//      let stepLenAdd = p.gridLineSize / 10;
//      for (let stepLen = 1; stepLen <= p.width; stepLen += stepLenAdd) {
//          xParams.drawLineNum++
//          yParams.drawLineNum++
//          let dx = srcPoint.x + stepLen + xParams.padding;
//          let dy = srcPoint.y + stepLen + yParams.padding;
//
//          //顶部标尺
//          switch (true) {
//              case xParams.drawLineNum % 10 == 0: //最长线 绘制文字
//                  ctx2d.moveTo(dx, srcPoint.y + 0);
//                  ctx2d.lineTo(dx, srcPoint.y + p.maxSizeLine);
//                  //每10个卡尺长度 绘制一个数字，绘制时偏移25，绘制到中间 25为网格长度的一半
//                  var textX = srcPoint.x + xParams.padding + stepLen - (p.gridLineSize / 2);
//                  if (textX > srcPoint.x + (p.gridLineSize / 2)) {
//                      drawSizeText(ctx2d, textX, srcPoint.y + (p.maxSizeLine / 2) - 2, (xParams.textNum) * 100);
//                  }
//                  xParams.textNum++;
//                  break;
//              case xParams.drawLineNum % 5 == 0: //中间线
//                  ctx2d.moveTo(dx, srcPoint.y + 12);
//                  ctx2d.lineTo(dx, srcPoint.y + p.maxSizeLine);
//                  break;
//              default: //最短线
//                  ctx2d.moveTo(dx, srcPoint.y + 15);
//                  ctx2d.lineTo(dx, srcPoint.y + p.maxSizeLine);
//                  break;
//          }
//
//          //左侧标尺
//          switch (true) {
//              case yParams.drawLineNum % 10 == 0:
//                  ctx2d.moveTo(srcPoint.x + 0, dy);
//                  ctx2d.lineTo(srcPoint.x + p.maxSizeLine, dy);
//                  var textY = srcPoint.y + yParams.padding + stepLen - (p.gridLineSize / 2);
//                  if (textY > srcPoint.y + (p.gridLineSize / 2)) {
//                      drawSizeText(ctx2d, srcPoint.x + (p.maxSizeLine / 2) - 2, textY, yParams.textNum * 100, true);
//                  }
//                  yParams.textNum++;
//                  break;
//              case yParams.drawLineNum % 5 == 0:
//                  ctx2d.moveTo(srcPoint.x + 12, dy);
//                  ctx2d.lineTo(srcPoint.x + p.maxSizeLine, dy);
//
//                  break;
//              default:
//                  ctx2d.moveTo(srcPoint.x + 15, dy);
//                  ctx2d.lineTo(srcPoint.x + p.maxSizeLine, dy);
//                  break;
//          }
//          // 绘制图片
//          ctx2d.drawImage(img,srcPoint.x,srcPoint.y,20,20);
//          ctx2d.stroke();
//      }
//
//      drawReSet(ctx2d, false)
//  }
    // 绘制刻度文字
//  var drawSizeText = function (ctx2d, x, y, text, g) {
//      ctx2d.save();
//      ctx2d.font = "11px bold 黑体"
//      ctx2d.fillStyle = "#ffffff"
//      if (!g) {
//          ctx2d.textAlign = "center"
//          ctx2d.textBaseline = "middle"
//          ctx2d.fillText(text, x, y)
//      } else {
//          //旋转角度，竖排文字
//          ctx2d.translate(x - 8, y - p.maxSizeLine / 2);
//          ctx2d.rotate(Math.PI / 180 * 90);
//          ctx2d.textBaseline = 'bottom';
//          ctx2d.fillText(text, 0, 0);
//      }
//      ctx2d.restore();
//  }
    //绘制网格
    var drawGridLine = (ctx2d, offsetPoint, srcPoint) => {
        drawReSet(ctx2d, true, 1, '#e7e7e7')
		drawBack(ctx2d,srcPoint,"#fff")
        //网格需要 将 卡尺的位置空出来   + p.maxSizeLine
        srcPoint = Object.assign({x: 0, y: 0}, srcPoint)
        srcPoint.y = srcPoint.y + p.maxSizeLine
        srcPoint.x = srcPoint.x + p.maxSizeLine
        //x y 偏移，将 x y 偏移控制在 1-gridLineSize之前
        offsetPoint = Object.assign({x: 0, y: 0, hg: 1, vg: 1}, offsetPoint)
        offsetPoint.x = offsetPoint.x % p.gridLineSize
        offsetPoint.y = offsetPoint.y % p.gridLineSize

        for (let stepLen = -p.gridLineSize; stepLen <= p.width + p.gridLineSize; stepLen += p.gridLineSize) {
            //纵向
            let dx = srcPoint.x + offsetPoint.x + stepLen  //零点X坐标 + 画布拖动X偏移 + 步长
            ctx2d.moveTo(dx, srcPoint.y);
            ctx2d.lineTo(dx, srcPoint.y + p.height);
            ctx2d.stroke();

            //横向
            let dy = srcPoint.y + stepLen + offsetPoint.y; //零点Y坐标 + 画布拖动Y偏移 + 步长
            ctx2d.moveTo(srcPoint.x, dy);
            ctx2d.lineTo(srcPoint.x + p.width, dy);
            ctx2d.stroke();
        }

    }
    // 绘制背景色
    var drawBack = function (ctx2d,srcPoint,fillstyle) {
        ctx2d.fillStyle = fillstyle;
        ctx2d.beginPath();
        ctx2d.fillRect(srcPoint.x,srcPoint.y,p.width,p.height);
        ctx2d.closePath();
        ctx2d.fill();
    }
    //绘制重置
    var drawReSet = (ctx2d, isStart, lineWidth, strokeStyle, fillStyle) => {
        if (isStart) {
            ctx2d.save()
            ctx2d.beginPath()
            lineWidth ? ctx2d.lineWidth = lineWidth : ''
            strokeStyle ? ctx2d.strokeStyle = strokeStyle : ''
            fillStyle ? ctx2d.fillStyle = fillStyle : ''
        } else {
            ctx2d.closePath()
            ctx2d.restore();
        }
    }
    return {
        //加载
        load: function (network, width, height) {
            if (p.network) {
                //删除事件
                p.events.forEach(e => {
                    p.network.off(e)
                })
            }
            p.width = p.srcWidth = width
            p.height = p.srcHeight = height
            p.network = network
            initCanvasTouch()
        },
        //缩放使用此方法， moveTo方法 触发不了 zoom事件
        zoom: function (scale) {
            p.network.moveTo({scale: scale})
            p.width = p.srcWidth * (1 / (p.scale = scale))
            p.height = p.srcHeight * (1 / (p.scale = scale))
        }
    }
})()
