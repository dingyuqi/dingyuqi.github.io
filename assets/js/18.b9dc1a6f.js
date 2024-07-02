(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{349:function(_,v,t){"use strict";t.r(v);var e=t(0),r=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("这段时间为自己的博客网站购买了一个域名, 终于摆脱了使用"),v("code",[_._v("github.io")]),_._v("这个二级域名. 但是在使用和配置的过程中还是有非常多的困惑的, 今天写个文档记录一下.\n")]),_._v(" "),v("h2",{attrs:{id:"前期准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[_._v("#")]),_._v(" 前期准备")]),_._v(" "),v("ol",[v("li",[v("em",[v("strong",[_._v("网站")])]),_._v(" : 你需要搭建一个属于自己的网站. 因为博客以文章为主, 所以我使用的是"),v("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[_._v("vuepress"),v("OutboundLink")],1),_._v("来搭建的静态网站.")]),_._v(" "),v("li",[v("em",[v("strong",[_._v("托管平台")])]),_._v(" : 当网站搭建好之后你需要将网站托管到一个服务器上. 当然你可以购买云服务器进行托管, 也可以选择许多大平台. 我选择的是"),v("a",{attrs:{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("vercel"),v("OutboundLink")],1),_._v(", 因为直接托管到"),v("a",{attrs:{href:"https://docs.github.com/zh/pages/getting-started-with-github-pages",target:"_blank",rel:"noopener noreferrer"}},[_._v("GitHub Page"),v("OutboundLink")],1),_._v("无法解决百度不收录的问题.")])]),_._v(" "),v("h2",{attrs:{id:"购买域名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#购买域名"}},[_._v("#")]),_._v(" 购买域名")]),_._v(" "),v("p",[_._v("当完成"),v("a",{attrs:{href:"#%E5%89%8D%E6%9C%9F%E5%87%86%E5%A4%87"}},[_._v("前期准备")]),_._v("之后, 你应当拥有一个可以访问的网站, 虽然这个网站可能使用的是托管平台免费送你的一个二级域名(例如GitHub Page提供的是"),v("code",[_._v("github.io")]),_._v(", vercel提供的是"),v("code",[_._v("vercel.app")]),_._v("). 现在我们需要做的就是购买一个属于自己的域名.")]),_._v(" "),v("p",[_._v("域名的购买可以有很多选择, 如果是国内的话可以选择"),v("a",{attrs:{href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("腾讯"),v("OutboundLink")],1),_._v("或者"),v("a",{attrs:{href:"https://cn.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("阿里"),v("OutboundLink")],1),_._v(", 这两个服务商的价格差不太多. 我使用的是腾讯云.")]),_._v(" "),v("ol",[v("li",[_._v("进入"),v("a",{attrs:{href:"https://dnspod.cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("域名注册"),v("OutboundLink")],1),_._v("页面.\n"),v("img",{attrs:{src:"/screen_shot/Snipaste_2024-06-20_11-11-44.png",alt:"腾讯云域名注册"}})]),_._v(" "),v("li",[_._v("输入自己想注册的域名.")]),_._v(" "),v("li",[_._v("将其加入购物车并购买该域名.")])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),v("ol",[v("li",[v("em",[v("strong",[_._v("备案")])]),_._v(" : 在我国, 需要先实名制备案后才可以注册域名. 如果你还没有完成腾讯云的备案, 在购买过程中会引导你进行. 一般需要提供你的身份证、手机号、住址等信息, 备案一般可以当天通过.")]),_._v(" "),v("li",[v("em",[v("strong",[_._v("域名的选择")])]),_._v(" : 推荐使用"),v("code",[_._v(".com")]),_._v("这个顶级域名, 虽然是最贵的, 但是也是最普及的. "),v("code",[_._v(".top")]),_._v("这个域名经常做活动, 可能一年只有1块钱. 一般不推荐域名中带有"),v("code",[_._v("-")]),_._v("等特殊字符.")]),_._v(" "),v("li",[v("em",[v("strong",[_._v("域名冲突")])]),_._v(" : 也许你想注册的域名已经被注册了, 那么这个时候你只能重新找一个新的名字或者使用其他的顶级域名.")]),_._v(" "),v("li",[v("em",[v("strong",[_._v("是否购买其他服务")])]),_._v(" : 在购买域名的时候腾讯可能提示你可以购买一些附加的服务, 例如:DNS解析、CDN服务等. 如果你的网站流量不是很大是无需额外购买其他服务的, 而且也可以在"),v("a",{attrs:{href:"https://www.cloudflare.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[_._v("CloudFlare"),v("OutboundLink")],1),_._v("等其他平台免费获得或购买.")])])]),_._v(" "),v("h2",{attrs:{id:"配置dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置dns"}},[_._v("#")]),_._v(" 配置DNS")]),_._v(" "),v("p",[_._v("现在, 你已经拥有了一个可以访问的网站和一个属于自己的域名, 我们只需要将这个自定义域名和网站进行绑定就好了.")]),_._v(" "),v("ol",[v("li",[_._v("进入vercel项目配置域名\n"),v("img",{attrs:{src:"/screen_shot/Snipaste_2024-06-20_11-36-49.png",alt:"vercel项目配置"}}),_._v("\n在"),v("strong",[_._v("Setting")]),_._v("中选择"),v("strong",[_._v("Domains")]),_._v("进行域名的配置, 在输入栏中输入自己的域名并点击"),v("strong",[_._v("Add")]),_._v(". 如果没有添加成功, vercel此时会提示你需要在域名服务提供商那里添加两条DNS解析记录.")]),_._v(" "),v("li",[_._v("进入腾讯云 DNS 解析控制台添加DNS解析记录\n在"),v("strong",[_._v("我的解析")]),_._v("页面中, 选择需要进行操作的域名, 单击操作栏的"),v("strong",[_._v("解析")]),_._v(", 进入该域名的"),v("strong",[_._v("记录管理")]),_._v("页面. 单击"),v("strong",[_._v("添加记录")]),_._v(", 即可添加.\n"),v("img",{attrs:{src:"/screen_shot/Snipaste_2024-06-20_14-40-46.png",alt:"添加域名解析记录"}})])]),_._v(" "),v("p",[_._v("解释一下我们在这两步当中所作的事情.")]),_._v(" "),v("h3",{attrs:{id:"_1-什么是dns解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是dns解析"}},[_._v("#")]),_._v(" 1. 什么是DNS解析?")]),_._v(" "),v("p",[_._v("不管你是把网站直接托管到自己的云服务器上还是利用了CloudFlare或者vercel这些平台, 其本质上还是在一个服务器上运行这个网站, 那么此时该网站拥有一个IP地址, 例如: "),v("code",[_._v("39.156.66.10")]),_._v(". 但是这个IP地址非常难记忆, 所以我们为这个IP地址起了一个名字, 例如: "),v("code",[_._v("baidu.com")]),_._v(", 这个就是"),v("strong",[_._v("域名")]),_._v(".")]),_._v(" "),v("p",[_._v("DNS解析做的事情就是当用户在访问"),v("code",[_._v("baidu.com")]),_._v("这个域名的时候, 将这个域名转换为IP地址"),v("code",[_._v("39.156.66.10")]),_._v("来进行访问, 避免了用户直接记忆IP地址.")]),_._v(" "),v("h3",{attrs:{id:"_2-什么是dns解析记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是dns解析记录"}},[_._v("#")]),_._v(" 2. 什么是DNS解析记录?")]),_._v(" "),v("p",[_._v("DNS(Domain Name System)解析记录是将域名(如example.com)映射到特定资源(如IP地址、邮件服务器等)的信息. 这些记录存储在DNS服务器中, DNS服务器负责将人类可读的域名转换为机器可读的IP地址.")]),_._v(" "),v("h3",{attrs:{id:"_3-dns解析记录中主机记录和记录值怎么填写-都是什么意思"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns解析记录中主机记录和记录值怎么填写-都是什么意思"}},[_._v("#")]),_._v(" 3. DNS解析记录中主机记录和记录值怎么填写？都是什么意思？")]),_._v(" "),v("p",[_._v("我们首先来看记录类型:")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("记录类型")]),_._v(" "),v("th",[_._v("使用目的")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("A 记录")]),_._v(" "),v("td",[_._v("将域名指向一个IP地址")])]),_._v(" "),v("tr",[v("td",[_._v("CNAME 记录")]),_._v(" "),v("td",[_._v("将域名指向另一个域名, 再由另一个域名提供IP地址")])]),_._v(" "),v("tr",[v("td",[_._v("MX 记录")]),_._v(" "),v("td",[_._v("设置邮箱, 让邮箱能收到邮件")])]),_._v(" "),v("tr",[v("td",[_._v("NS 记录")]),_._v(" "),v("td",[_._v("将子域名交给其他DNS服务商解析")])]),_._v(" "),v("tr",[v("td",[_._v("AAAA 记录")]),_._v(" "),v("td",[_._v("将域名指向一个IPv6地址")])]),_._v(" "),v("tr",[v("td",[_._v("SRV 记录")]),_._v(" "),v("td",[_._v("用来标识某台服务器使用了某个服务, 常见于微软系统的目录管理")])]),_._v(" "),v("tr",[v("td",[_._v("TXT 记录")]),_._v(" "),v("td",[_._v("对域名进行标识和说明, 绝大多数的 TXT 记录是用来做 SPF 记录(反垃圾邮件)")])]),_._v(" "),v("tr",[v("td",[_._v("隐、显性 URL 记录")]),_._v(" "),v("td",[_._v("将一个域名指向另外一个已经存在的站点")])]),_._v(" "),v("tr",[v("td",[_._v("SVCB 记录")]),_._v(" "),v("td",[_._v("用来说明服务的 IP 地址, ECH 公钥以及其他建立连接所需的信息, 通过一次 DNS 查询来加速通信连接过程")])]),_._v(" "),v("tr",[v("td",[_._v("HTTPS 记录")]),_._v(" "),v("td",[_._v("HTTPS 记录是一类特殊的 SVCB 记录, 说明 HTTPS 建联所需的信息")])]),_._v(" "),v("tr",[v("td",[_._v("CAA 记录")]),_._v(" "),v("td",[_._v("授权指定 CA 机构为域名签发 SSL 证书, 以防止 SSL 证书错误签发")])])])]),_._v(" "),v("p",[_._v("我们看到除了记录类型我们还需要填写主机记录:")]),_._v(" "),v("p",[_._v("主机记录就是域名前缀, 以 dnspod.cn 为例, 常见用法有:")]),_._v(" "),v("ol",[v("li",[v("code",[_._v("www")]),_._v(" : 解析后的域名为 www.dnspod.cn")]),_._v(" "),v("li",[v("code",[_._v("@")]),_._v(" : 直接解析主域名 dnspod.cn")]),_._v(" "),v("li",[v("code",[_._v("*")]),_._v(": 泛解析, 匹配其他所有域名 *.dnspod.cn")])]),_._v(" "),v("p",[_._v("那么在这里我自己添加了两个解析记录, 可供参考:")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("主机记录")]),_._v(" "),v("th",[_._v("记录类型")]),_._v(" "),v("th",[_._v("记录值")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("@")]),_._v(" "),v("td",[_._v("A")]),_._v(" "),v("td",[_._v("xx.xx.xx.xx")])]),_._v(" "),v("tr",[v("td",[_._v("www")]),_._v(" "),v("td",[_._v("CNAME")]),_._v(" "),v("td",[_._v("cname.vercel-dns.com.")])])])]),_._v(" "),v("p",[_._v("我首先配置了一个主机记录为"),v("code",[_._v("@")]),_._v(", 记录类型为"),v("code",[_._v("A")]),_._v("的记录, 将我的主域名"),v("code",[_._v("dingyuqi.com")]),_._v("直接解析到vercel给我的IP地址上. 紧接着我又添加了一条主机记录为"),v("code",[_._v("www")]),_._v(", 记录类型为"),v("code",[_._v("CNAME")]),_._v("的记录, 意味着如果用户想使用"),v("code",[_._v("wwww.dingyuqi.com")]),_._v("来进行访问的时候会先访问vercel提供的一个域名解析服务器"),v("code",[_._v("cname.vercel-dns.com.")]),_._v(", 由该服务器重新提供我主域名的IP地址.")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("参考资料")]),_._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://cloud.tencent.com/document/product/302/38661",target:"_blank",rel:"noopener noreferrer"}},[_._v("腾讯云解析DNS产品文档"),v("OutboundLink")],1)])])])])}),[],!1,null,null,null);v.default=r.exports}}]);