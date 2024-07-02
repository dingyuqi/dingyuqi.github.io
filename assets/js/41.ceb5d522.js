(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{371:function(t,a,s){"use strict";s.r(a);var v=s(0),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("数据挖掘算法通常用于为其他目的收集的数据, 或者在收集时未明确其目的. 因此, 数据挖掘常常无法控制数据的质量, 所以我们着眼于两个方面:")]),t._v(" "),a("ol",[a("li",[t._v("数据质量问题的检测和纠正")]),t._v(" "),a("li",[t._v("使用可以容忍低质量数据的算法")])]),t._v(" "),a("p",[t._v("第一步的检测和纠正通常被称为 "),a("em",[a("strong",[t._v("数据清理(data cleaning)")])]),t._v(" .\n")]),t._v(" "),a("h2",{attrs:{id:"测量和数据收集问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测量和数据收集问题"}},[t._v("#")]),t._v(" 测量和数据收集问题")]),t._v(" "),a("p",[t._v("下面我们关注数据测量和收集方面的数据质量问题. 我们先定义测量误差和数据收集错误, 然后考虑涉及测量误差的各种问题: 噪声、伪像、偏置、精度和准确率. 最后讨论同时涉及测量和数据收集的数据质量问题: 离群点、遗漏和不一致的值、重复数据.")]),t._v(" "),a("h3",{attrs:{id:"测量误差和数据收集错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测量误差和数据收集错误"}},[t._v("#")]),t._v(" 测量误差和数据收集错误")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("测量误差(measurement error)  "),a("Badge",{attrs:{text:"定义",vertical:"middle"}})],1),a("p",[t._v("指测量过程中产生的问题. 常见的是: 在某种程度上, 记录的值和实际的值不同. 对于连续属性, 测量值与实际值的差被称为: 误差(error)")])]),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("数据收集错误(data collection error)  "),a("Badge",{attrs:{text:"定义",vertical:"middle"}})],1),a("p",[t._v("指遗漏数据对象或属性值, 或者不当地包含了其他数据对象等错误.")])]),a("h3",{attrs:{id:"噪声和伪像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#噪声和伪像"}},[t._v("#")]),t._v(" 噪声和伪像")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("噪声  "),a("Badge",{attrs:{text:"定义",vertical:"middle"}})],1),a("p",[t._v("噪声是测量误差的随机部分, 通常涉及值被扭曲或加入了谬误对象.")])]),a("p",[t._v("尽管可以使用信号或图像处理技术降低噪声以发现淹没在噪声中的模式, 但是 "),a("mark",[t._v("完全消除噪声通常是困难的")]),t._v(", 所以许多数据挖掘工作都关注设计 "),a("mark",[t._v("鲁棒算法")]),t._v(", 即在噪声干扰下也可以产生可接受的结果.")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("伪像(artifact)  "),a("Badge",{attrs:{text:"定义",vertical:"middle"}})],1),a("p",[t._v("数据的确定性失真被称为伪像. 例如一组照片在同一地方出现条纹.")])]),a("h3",{attrs:{id:"精度、偏执和准确率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精度、偏执和准确率"}},[t._v("#")]),t._v(" 精度、偏执和准确率")]),t._v(" "),a("p",[t._v("对于下面的定义, 我们假定对相同的基本量进行重复测量.")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("精度(percision)  "),a("Badge",{attrs:{text:"定义",vertical:"middle"}})],1),a("p",[t._v("(同一个量的)重复测量值之间的接近程度.")])]),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("偏置(bias)  "),a("Badge",{attrs:{text:"定义",vertical:"middle"}})],1),a("p",[t._v("测量值与被测量之间的系统的变化.")])]),a("p",[t._v("精度通常使用标准差来表示, 偏置使用值集合的均值与测出的已知值之间的差来度量. 例如使用一个实验室标准的1g砝码来评估实验室的新天平的精度和偏置. 称重5次, 得到: {1.015, 0.990, 1.013, 1.001, 0.986}. 这个值集合的均值为1.001, 所以偏置为0.001. 用标准差度量精度为0.013.")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("准确率(accuracy)  "),a("Badge",{attrs:{text:"定义",vertical:"middle"}})],1),a("p",[t._v("被测量的测量值与实际值之间的接近值度.")])]),a("h3",{attrs:{id:"离群点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离群点"}},[t._v("#")]),t._v(" 离群点")]),t._v(" "),a("p",[t._v("离群点(outlier)是在某种意义上具有不同于数据集中其他大部分数据对象的特征的数据对象, 也称为"),a("strong",[t._v("异常")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("噪声和离群点的区别")]),t._v(" "),a("p",[t._v("离群点可以是合法的数据对象或值.")])]),t._v(" "),a("h3",{attrs:{id:"遗漏值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遗漏值"}},[t._v("#")]),t._v(" 遗漏值")]),t._v(" "),a("p",[t._v("一个对象遗漏一个或多个属性值的情况并不少见. 以下提供三种策略, 适合用于不同的情况.")]),t._v(" "),a("h4",{attrs:{id:"删除数据对象或属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除数据对象或属性"}},[t._v("#")]),t._v(" 删除数据对象或属性")]),t._v(" "),a("p",[t._v("优点: 如果只有少量对象具有遗漏值则这么处理会非常高效")]),t._v(" "),a("p",[t._v("缺点:")]),t._v(" "),a("ol",[a("li",[t._v("如果许多对象都有遗漏值则很难进行可靠分析")]),t._v(" "),a("li",[t._v("如果删除具有遗漏值的属性则可能被删除的属性对分析是至关重要的")])]),t._v(" "),a("h4",{attrs:{id:"估计遗漏值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#估计遗漏值"}},[t._v("#")]),t._v(" 估计遗漏值")]),t._v(" "),a("p",[t._v("有时遗漏值可以被估计. 比如平滑, 或者插值的方法, 多用于数据图像处理或者时序的数据.")]),t._v(" "),a("h4",{attrs:{id:"在分析时忽略遗漏值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在分析时忽略遗漏值"}},[t._v("#")]),t._v(" 在分析时忽略遗漏值")]),t._v(" "),a("p",[t._v("许多数据挖掘都可以修改以忽略遗漏值.")]),t._v(" "),a("h3",{attrs:{id:"不一致的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不一致的值"}},[t._v("#")]),t._v(" 不一致的值")]),t._v(" "),a("h3",{attrs:{id:"重复数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重复数据"}},[t._v("#")]),t._v(" 重复数据")]),t._v(" "),a("p",[t._v("为了检测并删除数据中的重复, 实际是在处理两个问题:")]),t._v(" "),a("ol",[a("li",[t._v("如果两个对象实际代表同一个对象, 则对应的属性值必然不同, 需要处理不一致的数据")]),t._v(" "),a("li",[t._v("避免意外地将两个相似单并非重复的数据合并\n这个过程的专业属于是"),a("strong",[t._v("去重(deduplication)")]),t._v(".")])])])}),[],!1,null,null,null);a.default=e.exports}}]);