---
layout: post
title:  "Eclipse -  Source not found"
date:   2016-09-05
excerpt: "Source not found because of Tecent QQ"
tags: [Eclipse, Source not found, QQ, Maven, Jetty]
comments: true
---

### Maven Project + Jetty debug Source not found
今天在Eclipse启动一个老项目，一直提示Source not found！

然而问题是我根本没有改动过，而且并行的一个项目一直能够启动成功，在查询source文件存在的情况下十分不理解。

consle 提示 ： jetty 6.24 ， eclipse 提示 source not found 。

网上查询很多资料，各种调试最后还是没法解决。只好去问下师兄。

他很轻松的点击consle控制台的debug模式，点击断点，F8进去后consle完整的提示 port is already used。

查找后发现是qq.exe占用了8082的端口，kill 进程， clean project，its be ok。

很惊奇的听他告诉我，企鹅会有一个8080的端口监控手机qq，一旦被占领，会+1，8081、8082、8083... 一直下去。

记下，告诉自己要学会从debug查找问题。