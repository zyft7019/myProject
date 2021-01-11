<template>
  <div id="myGplot" :style="{ width: '800px', height: '800px' }">myGplot</div>
</template>

<script>
export default {
  data() {
    return {
      c: 3,
      nodes: [
        {
          x: "200",
          y: "700",
          name: "服务器A"
          // img: "data-1547632686885-o5Rfi3tyk.png"
        },
        {
          x: "400",
          y: "700",
          name: "服务器B",
          img: "data-1547632686885-o5Rfi3tyk.png"
        },
        {
          x: "100",
          y: "100",
          name: "服务器Aa",
          img: "data-1547633192258-2EYYUDdcd.png"
        },
        {
          x: "300",
          y: "100",
          name: "服务器Ab",
          img: "data-1547633192258-2EYYUDdcd.png",
          alarm: "产生告警了哦"
        },
        {
          x: "400",
          y: "200",
          name: "服务器Ba",
          img: "data-1547633192258-2EYYUDdcd.png",
          alarm: "产生告警了哦"
        },
        {
          x: "0",
          y: "400",
          name: "服务器C",
          img: "data-1547633192258-2EYYUDdcd.png",
          alarm: "产生告警了哦"
        }
      ],
      links: [
        {
          source: "服务器A",
          target: "服务器Aa",
          name: "连通"
        },
        {
          source: "服务器B",
          target: "服务器Aa",
          name: "不连通"
        },
        {
          source: "服务器A",
          target: "服务器Ab",
          name: "不连通"
        },
        {
          source: "服务器Ba",
          target: "服务器Ab",
          name: "连通"
        },
        {
          source: "服务器Ba",
          target: "服务器C",
          name: "连通"
        }
      ]
    };
  },
  methods: {
    gplotInit() {
      var charts = {
        nodes: [],
        links: [],
        linesData: []
      };
      var dataMap = new Map();
      for (var j = 0; j < this.nodes.length; j++) {
        var x = parseInt(this.nodes[j].x);
        var y = parseInt(this.nodes[j].y);
        var node = {
          name: this.nodes[j].name,
          value: [x, y],
          symbolSize: 50, // 控制原点的大小
          alarm: this.nodes[j].alarm,
          //symbol: 'image://./images/' + nodes[j].img,//图片路径
          itemStyle: {
            normal: {
              color: "#12b5d0"
            }
          }
        };
        dataMap.set(this.nodes[j].name, [x, y]);
        charts.nodes.push(node);
      }

      for (var i = 0; i < this.links.length; i++) {
        if (this.links[i].name == "不连通") {
          var link = {
            source: this.links[i].source,
            target: this.links[i].target,
            label: {
              normal: {
                show: true,
                formatter: this.links[i].name
              }
            },
            lineStyle: {
              normal: {
                // color: "red",
                color: { // 添加线的渐变色
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0.4,
                      color: "#fff" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#12b5d0" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                width: 5,
                curveness: 0.2
              }
            }
          };
          charts.links.push(link);
          // 组装动态移动的效果数据
          var lines = [
            { coord: dataMap.get(this.links[i].source) },
            { coord: dataMap.get(this.links[i].target) }
          ];
          charts.linesData.push(lines);
        } else {
          var link = {
            source: this.links[i].source,
            target: this.links[i].target,
            label: {
              normal: {
                show: true,
                formatter: this.links[i].name
              }
            },
            lineStyle: {
              normal: {
                color: "#00FFFF",
                curveness: 0.2
              }
            }
          };
          charts.links.push(link);
          // 组装动态移动的效果数据
          var lines = [
            { coord: dataMap.get(this.links[i].source) },
            { coord: dataMap.get(this.links[i].target) }
          ];
          charts.linesData.push(lines);
        }
      }
      console.log(dataMap);
      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      // 初始化echarts
      let myGplot = this.$echarts.init(document.getElementById("myGplot"));
      let option = {
        // title: {
        //   text: "网络拓扑图",
        //   textStyle: {
        //     fontWeight: "normal",
        //     color: "#00FFFF"
        //   }
        // },
        backgroundColor: "#1b2735",
        xAxis: {
          show: false,
          type: "value"
        },
        yAxis: {
          show: false,
          type: "value"
        },
        series: [
          {
            type: "graph",
            layout: "none",
            coordinateSystem: "cartesian2d",
            zlevel: 10,
            symbolSize: 50,
            label: {
              // 设置圆点显示文字的样式
              normal: {
                show: true, // 是否显示
                position: "bottom", // 显示的位置
                color: "#00FFFF" // 字体颜色
              }
            },
            lineStyle: {
              normal: {
                width: 2, // 点与点之间的连线的
                shadowColor: "none"
              }
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            data: charts.nodes,
            links: charts.links,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: function(item) {
                    return item.data.name;
                  }
                }
              }
            }
          },
          {
            name: "A",
            type: "lines",
            zlevel: 1,
            coordinateSystem: "cartesian2d",
            effect: {
              //
              show: true, // 是否显示圆点
              period: 5, // 动画时长
              trailLength: 0.6,
              // symbol: "arrow",
              color: "#00FFFF",
              symbolSize: 5
            },
            lineStyle: {
              normal: {
                color: "#00FFFF",
                width: 0,
                // opacity: 0.6,
                curveness: 0.2
              }
            },
            data: charts.linesData
          },
          // 上层标记
          {
            name: "B",
            type: "lines",
            zlevel: 10,
            coordinateSystem: "cartesian2d",
            effect: {
              show: true,
              period: 5, // 动画时长
              trailLength: 0,
              // symbol: "arrow",
              symbol: planePath,
              // color: "#00FFFF",
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: "red", // 运动标记颜色
                width: 0,
                // opacity: 0.6,
                curveness: 0.2
              }
            },
            data: charts.linesData
          }
        ]
      };
      myGplot.setOption(option);
      window.addEventListener("resize", () => {
        myGplot.resize();
      });
    }
  },
  mounted() {
    this.gplotInit();
  }
};
</script>

<style>
</style>
