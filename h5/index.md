---
layout: compress
title: h5-list
excerpt: "作品展示"
comments: false
---
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"><!--<![endif]-->
<head>
    {% include head.html %}
</head>
<body>
    <!-- Header -->
    <header class="header" role="banner">
        <div class="wrapper animated fadeIn">
            <div class="content">
                <div class="post-title">
                    <h1>{{ page.title }}</h1>
                    <a class="btn zoombtn" href="{{site.url}}">
                        <i class="fa fa-home"></i>
                    </a>
                </div>
                <div class="post-list">
                    <ul>
                        <li class="wow fadeInLeft" data-wow-duration="1.5s">
                            <a class="zoombtn" href="./film/index.html">头尾固定全屏滚动</a>
                        </li>
                        <li class="wow fadeInLeft" data-wow-duration="1.5s">
                            <a class="zoombtn" href="./wedding/index.html">请帖</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    {% include scripts.html %}
    <script src="{{ site.url }}/assets/js/wow.min.js"></script>
    <script type="text/javascript">(new WOW).init();</script>
</body>
</html>
