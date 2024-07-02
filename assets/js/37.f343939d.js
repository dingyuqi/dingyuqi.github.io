(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{367:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"里氏替换原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则"}},[t._v("#")]),t._v(" 里氏替换原则")]),t._v(" "),a("h2",{attrs:{id:"要解决什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要解决什么问题"}},[t._v("#")]),t._v(" 要解决什么问题")]),t._v(" "),a("p",[t._v("有一功能 P1, 由类 A 完成. 现需要将功能 P1 进行扩展, 扩展后的功能为 P, 其中P由原有功能 P1 与新功能 P2 组成. 新功能 P 由类 A 的子类 B 来完成, 则子类 B 在完成新功能 P2 的同时, 有可能会导致原有功能 P1 发生故障.")]),t._v(" "),a("h2",{attrs:{id:"里氏替换原则定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则定义"}},[t._v("#")]),t._v(" 里氏替换原则定义")]),t._v(" "),a("p",[t._v("如果对每一个类型为 T1的对象 o1, 都有类型为 T2 的对象o2, 使得以 T1定义的所有程序 P 在所有的对象 o1 都代换成 o2 时, 程序 P 的行为没有发生变化, 那么类型 T2 是类型 T1 的子类型")]),t._v(" "),a("p",[t._v("所有引用基类的地方必须能透明地使用其子类的对象")]),t._v(" "),a("h2",{attrs:{id:"里氏替换原则四层含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则四层含义"}},[t._v("#")]),t._v(" 里氏替换原则四层含义")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("子类可以实现父类的抽象方法, 但不能覆盖父类的非抽象方法\n子类可以实现父类的抽象方法, 但不能覆盖父类的非抽象方法, 父类中凡是已经实现好的方法(相对于抽象方法而言), 实际上是在设定一系列的规范和契约, 虽然它不强制要求所有的子类必须遵从这些契约, 但是如果子类对这些非抽象方法任意修改, 就会对整个继承体系造成破坏")])]),t._v(" "),a("li",[a("p",[t._v("子类可以有自己的个性\n在继承父类属性和方法的同时, 每个子类也都可以有自己的个性, 在父类的基础上扩展自己的功能. 前面其实已经提到, 当功能扩展时, 子类尽量不要重写父类的方法, 而是另写一个方法, 所以对上面的代码加以更改, 使其符合里氏替换原则")])]),t._v(" "),a("li",[a("p",[t._v("覆盖或实现父类的方法时输入参数可以被放大\n当子类的方法重载父类的方法时, 方法的前置条件(即方法的形参)要比父类方法的输入参数更宽松")])]),t._v(" "),a("li",[a("p",[t._v("覆写或实现父类的方法时输出结果可以被缩小\n当子类的方法实现父类的抽象方法时, 方法的后置条件(即方法的返回值)要比父类更严格")])])]),t._v(" "),a("h2",{attrs:{id:"里氏替换原则优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则优点"}},[t._v("#")]),t._v(" 里氏替换原则优点")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("保证了父类的复用性, 同时也能够降低系统出错误的故障, 防止误操作, 同时也不会破坏继承的机制, 这样继承才显得更有意义.")])]),t._v(" "),a("li",[a("p",[t._v("增强程序的健壮性,版本升级是也可以保持非常好的兼容性.即使增加子类,原有的子类还可以继续运行.在实际项目中,每个子类对应不同的业务含义,使用父类作为参数,传递不同的子类完成不同的业务逻辑")])])]),t._v(" "),a("h2",{attrs:{id:"里氏替换原则缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则缺点"}},[t._v("#")]),t._v(" 里氏替换原则缺点")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("继承是入侵性的(只要继承, 就必须拥有父类的所有属性与方法)")])]),t._v(" "),a("li",[a("p",[t._v("降低了代码的灵活性(子类拥有了父类的属性方法, 会增多约束)")])]),t._v(" "),a("li",[a("p",[t._v("增强了耦合性(当父类的常量、变量、方法被修改时, 必须考虑子类的修改)")])])]),t._v(" "),a("h2",{attrs:{id:"里氏替换原则总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#里氏替换原则总结"}},[t._v("#")]),t._v(" 里氏替换原则总结")]),t._v(" "),a("p",[t._v("继承作为面向对象三大特性之一, 在给程序设计带来巨大便利的同时, 也带来了弊端. 比如使用继承会给程序带来侵入性, 程序的可移植性降低, 增加了对象间的耦合性, 如果一个类被其他的类所继承, 则当这个类需要修改时, 必须考虑到所有的子类, 并且父类修改后, 所有涉及到子类的功能都有可能会产生故障.")]),t._v(" "),a("p",[t._v("里氏替换原则的目的就是增强程序健壮性, 版本升级时也可以保持非常好的兼容性.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("参考资料")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://geek-docs.com/design-pattern/design-principle/liskov-substitution-principle.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("liskov-subsitution-principle"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/yabay2208/article/details/73804831",target:"_blank",rel:"noopener noreferrer"}},[t._v("yabay2208"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);