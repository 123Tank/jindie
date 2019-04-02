jQuery(document).ready(function ($) {
    $('#menu-item-18').removeClass('has-mega-menu');

    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        $("#menu-item-39217").addClass("bf-lefe");
        $("#menu-item-39219").addClass("bf-lefe1");
        $("#menu-item-39222").addClass("bf-lefe2");
        $("#menu-item-39226").addClass("bf-lefe3");
    }

    $("#mk-footer").find(".mk-col-1-3").eq(2).addClass("linf");
    $(".footer-link-site-city").hover(function () {
        $(".footer-uplink-site-city").show();
    }, function () {
        $(".footer-uplink-site-city").hide();
    });

    var ment1;
    var third_menu_timeout;
    // $('.menu01 .menu-left1').addClass('menu01-active');
    $('.menu02 .menu-right1').addClass('menu-right-active');
    $('.menu01 > p').bind('mouseover', function () {
        clearTimeout(third_menu_timeout);
        var cls = $(this).attr('class');
        var idx = cls.split(' ')[0].split('left')[1];
        var mr = '.menu-right' + idx;
        var sub_ul = $(this).parent().parent().parent().parent().parent().parent();
        var _this = $(this);
        if (!$(this).hasClass('menu01-active')) {
            third_menu_timeout = setTimeout(function () {
                _this.parent().find('p').removeClass('menu01-active');
                _this.addClass('menu01-active');
                sub_ul.find('.menu02').find('div').removeClass('menu-right-active');
                sub_ul.find('.menu02').find(mr).addClass('menu-right-active');
            }, 400);
        }

    })
    $('.menu01').bind('mouseout', function () {
        clearTimeout(third_menu_timeout);
    })

    $(".search-ajax-input").attr("placeholder", "搜索内容");

    $(".header-search-icon").click(function () {
        $(this).addClass("hdfe");
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                $(this).addClass("ie8-hdfe");
                $('form.header-searchform-input').show();
            }
        }

    });
    $(".header-search-close").click(function () {
        $(".header-search-icon").removeClass("hdfe");
        // $(".header-searchform-input").hide();
        //  $("#s").css("width","16%");
        $(".header-search-icon").removeClass("ie8-hdfe");

    });
    $("body").click(function (e) {
        $(".header-search-icon").removeClass("hdfe");
    });


    $(".header-search-icon").hover(function () {
        $(this).addClass("active");

    }, function () {
        $(this).removeClass("active");

    });

    $(".menu-close1").click(function (event) {
        event.stopPropagation();
        $('.dropdownOpen').removeClass("dropdownOpen");
        $('#mk-header').removeClass("dropdownMenuBg");
        $('.sub-menu-effect').removeClass("sub-menu-effect");
    });
    var time_out_leave, time_out_enter;
    $('#mk-main-navigation>ul>li.menu-item.has-mega-menu').bind('mouseleave', function () {
        var _this = $(this);
        time_out_leave = setTimeout(function () {
            _this.removeClass("dropdownOpen");
            $('#mk-header').removeClass("dropdownMenuBg");
            $('.sub-menu-effect').removeClass("sub-menu-effect");
        }, 300)
        $(this).parent().addClass('ul-menu-hover');
    })
    $('#mk-main-navigation>ul>li.menu-item.has-mega-menu').bind('mouseenter', function () {
        clearTimeout(time_out_enter);
        var _this = $(this);
        time_out_enter = setTimeout(function () {
            _this.siblings().removeClass("dropdownOpen");
        }, 300)
        clearTimeout(time_out_leave);
        $(this).parent().addClass('ul-menu-hover');
    })
    $('#mk-main-navigation>ul').bind('mouseenter', function () {
        $(this).addClass('ul-menu-hover');
    })
    $('#mk-main-navigation>ul').bind('mouseleave', function () {
        $(this).removeClass('ul-menu-hover');
    })

    /* 手机端  二级菜单  点击 */
    if ($(window).width() <= 1140) {
        $('.mk-responsive-nav>li.menu-item-has-children').each(function () {
            var third_menu = $(this).find('ul.sub-menu').find('.menu-item-has-children').eq(0);
            third_menu.addClass('third-menu-active');
            third_menu.find('.sub-menu').slideToggle();
        })

        $('.mk-responsive-nav .mk-nav-arrow').bind('click', function () {
            if ($(this).parent().parent().hasClass('sub-menu-active')) {
                $(this).parent().parent().removeClass('sub-menu-active');
            } else {
                $(this).parent().parent().addClass('sub-menu-active');
            }
        })

        $('.mk-responsive-nav>li>ul>li.menu-item-has-children>a').bind('click', function () {
            $(this).parent().find('.sub-menu').slideToggle();
            if ($(this).parent().hasClass('third-menu-active')) {
                $(this).parent().removeClass('third-menu-active');
            } else {
                $(this).parent().addClass('third-menu-active');
            }
        })
    }

    $(".rt04").hover(function () {
        clearTimeout(rt_time);
        rt_time = setTimeout(function () {
            $(".rt-img1").find("img").attr("src", "http://www.kingdee.com/wp-content/uploads/2018/12/rc1-2.jpg");
            $(".new-two-need").removeClass("yuandian");
        }, 10)
    }, function () {
        clearTimeout(rt_time);
        $(".rt-img1").find("img").attr("src", "http://www.kingdee.com/wp-content/uploads/2018/12/rc1.jpg")
    });

    var rt_time;
    $(".rt02").hover(function () {
        console.log("tr03");
        clearTimeout(rt_time);
        rt_time = setTimeout(function () {
            $(".rt-img2").find("img").attr("src", "http://www.kingdee.com/wp-content/uploads/2018/12/rc2-1.jpg");
            $(".new-two-need").addClass("yuandian");
        }, 10)
    }, function () {
        clearTimeout(rt_time);
        $(".rt-img2").find("img").attr("src", "http://www.kingdee.com/wp-content/uploads/2018/12/rc2.jpg")

    });
    $(".kj-clort").click(function () {
        $(".new-two-need").removeClass("yuandian");
    });

    $(".rt03").hover(function () {
        clearTimeout(rt_time);
        rt_time = setTimeout(function () {
            $(".rt-img3").find("img").attr("src", "http://www.kingdee.com/wp-content/uploads/2018/12/rc3-1.jpg");
            $(".new-th-contact").addClass("yuandian");
            $(".new-two-need").removeClass("yuandian");
        }, 10)
    }, function () {
        clearTimeout(rt_time);
        $(".rt-img3").find("img").attr("src", "http://www.kingdee.com/wp-content/uploads/2018/12/rc3.jpg")
        $(".new-th-contact").removeClass("yuandian");

    });
    $(".rt05").hover(function () {
        clearTimeout(rt_time);
        rt_time = setTimeout(function () {
            $(".rt-img5").find("img").attr("src", "/wp-content/uploads/2019/03/ers3.jpg");
            $(".new-five-context").addClass("yuandian");
            $(".new-two-need").removeClass("yuandian");
        }, 10)
    }, function () {
        clearTimeout(rt_time);
        $(".rt-img5").find("img").attr("src", "/wp-content/uploads/2019/03/ers.jpg");
        $(".new-five-context").removeClass("yuandian");

    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.rttop').addClass("rttop-show");
        } else {
            $('.rttop').removeClass("rttop-show");
        }
    });

    $('.rt-imgtop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        return false;
    });
    //m-footer-tab
    $('.tab-title').bind('click', function () {
        if (!$(this).parent().hasClass('footer-active-tab')) {
            $('.footer-active-tab').find('ul').slideToggle();
            $('.footer-active-tab').removeClass('footer-active-tab');
            $(this).parent().addClass('footer-active-tab');
        } else {
            $(this).parent().removeClass('footer-active-tab');
        }
        $(this).parent().find('ul').slideToggle();
        return false;
    })
    //m-search
    $('form.header-searchform-input input[type=submit]').attr('value', '搜索');
    //ie-8
    var ie8_t;
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
            $(".menu-left1").addClass('iehtop');
            $("#menu-item-39431").css('margin-top', '-15px !important');
            $('#mk-main-navigation>ul>li.menu-item.has-mega-menu').on('mouseenter', function () {
                clearTimeout(ie8_t);
                if (!$(this).hasClass('dropdownOpen')) {
                    $('.dropdownOpen').removeClass('dropdownOpen');
                    $(this).addClass('dropdownOpen');
                    if (!$('#mk-header').hasClass('dropdownMenuBg')) {
                        $('#mk-header').addClass('dropdownMenuBg');
                    }
                }
            })
            $('#mk-main-navigation>ul>li.menu-item.has-mega-menu').on('mouseleave', function () {
                if ($(this).hasClass('dropdownOpen')) {
                    $(this).removeClass('dropdownOpen');
                    if ($('#mk-header').hasClass('dropdownMenuBg')) {
                        ie8_t = setTimeout(function () {
                            $('#mk-header').removeClass('dropdownMenuBg');
                        }, 100);
                    }
                }
            })
        }
    }

    $('#menu-item-477').find("a").attr("target", "_blank");
    $('#menu-item-477').find("a").attr("rel", "nofollow");
    $('#menu-item-19').find("a").attr("target", "_blank");
    $('#menu-item-19').find("a").attr("rel", "nofollow");
    $('.mk-header-search').find("a").attr("href", "##");
    $('.new-two-need').show();
    $('.new-th-contact').show();
    $('.new-five-context').show();

    $('.header-search-user-icon').hover(function () {
        $('.login-xian').fadeIn();
    }, function () {
        $('.login-xian').fadeOut();
    });

    $(".sc-kingdee").find(".mk-icon-search").find("input").attr("value", "开始搜索");

    if (window.ActiveXObject || "ActiveXObject" in window) {
        $(".header-search-close").addClass("iedf");
        $(".search-ajax-input").addClass("iebbn");
    }


    $(".qyiye").find("a").text("上一页");
    $(".hyiye").find("a").text("下一页");
    $(".current-page").parent().css("background", "#ffffff");



    if ($(".qyiye").find('a').length == 0) {
        $(".qyiye").text("上一页");

    }
    if ($(".hyiye").find('a').length == 0) {
        $(".hyiye").text("下一页");


    }
    $(".mk-pagination").show();



    $(".has-mega-menu").each(function () {
        $(this).hover(function () {
            $(this).addClass("menu-befpt");
        }, function () {
            $(this).removeClass("menu-befpt");
        });
    });


    /*神策代码*/
    var newceseurl = decodeURIComponent(window.location.href);

    $('#menu-item-39217').find('.new-menu-p3').find("div").eq(0).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '领域云',
            buttonName: '财务云',

        });
    });
    $('#menu-item-39217').find('.new-menu-p3').find("div").eq(1).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '领域云',
            buttonName: '供应链云',

        });
    });

    $('#menu-item-39217').find('.new-menu-p3').find("div").eq(2).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '领域云',
            buttonName: '全渠道云',

        });
    });

    $('#menu-item-39217').find('.new-menu-p3').find("div").eq(3).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '领域云',
            buttonName: '制造云',

        });
    });

    $('#menu-item-39217').find('.new-menu-p3').find("div").eq(4).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '领域云',
            buttonName: '办公云',

        });
    });

    $('#menu-item-39217').find('.new-menu-p3').find("div").eq(5).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '领域云',
            buttonName: 'HR云',

        });
    });

    $('#menu-item-39217').find('.new-menu-p3').find("div").eq(6).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '领域云',
            buttonName: '电商云',

        });
    });

    /*云产品*/
    $('#menu-item-39217').find('.new-menu-p1').find("div").eq(0).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '云产品',
            buttonName: '金蝶云苍穹',

        });
    });

    $('#menu-item-39217').find('.new-menu-p1').find("div").eq(1).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '云产品',
            buttonName: '金蝶云星空',

        });
    });

    $('#menu-item-39217').find('.new-menu-p1').find("div").eq(2).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '云产品',
            buttonName: '云之家',

        });
    });

    $('#menu-item-39217').find('.new-menu-p1').find("div").eq(3).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '云产品',
            buttonName: '精斗云',

        });
    });

    $('#menu-item-39217').find('.new-menu-p1').find("div").eq(4).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: '云产品',
            buttonName: '管易云',

        });
    });
    /*云产品*/
    $('#menu-item-39217').find('.new-menu-p5').find("div").eq(0).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: 'ERP',
            buttonName: '金蝶EAS',

        });
    });

    $('#menu-item-39217').find('.new-menu-p5').find("div").eq(1).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: 'ERP',
            buttonName: '金蝶K/3 WISE',

        });
    });

    $('#menu-item-39217').find('.new-menu-p5').find("div").eq(2).on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '产品',
            secondModel: 'ERP',
            buttonName: '金蝶KIS系列',

        });
    });

    /*行业方案*/
    $('.newzzy1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '制造业',
            buttonName: '工业制造',

        });
    });

    $('.newzzy2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '制造业',
            buttonName: '医药',

        });
    });

    $('.newzzy3').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '制造业',
            buttonName: '电子',

        });
    });

    $('.newzzy4').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '制造业',
            buttonName: '食品',

        });
    });

    $('.newzzy5').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '制造业',
            buttonName: '日化',

        });
    });

    $('.newzzy6').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '制造业',
            buttonName: '家具',

        });
    });

    /*服务业*/
    $('.newfwy1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '服务业',
            buttonName: '汽车经销服务',

        });
    });

    $('.newfwy2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '服务业',
            buttonName: '医院',

        });
    });

    $('.newfwy3').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '服务业',
            buttonName: '餐饮',

        });
    });

    $('.newfwy4').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '服务业',
            buttonName: '教育',

        });
    });

    $('.newfwy5').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '服务业',
            buttonName: '财税服务',

        });
    });

    $('.newfwy6').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '服务业',
            buttonName: '金融服务',

        });
    });

    /*零售业*/

    $('.newls1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '零售业',
            buttonName: '电商企业',

        });
    });

    $('.newls2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '零售业',
            buttonName: '全渠道零售',

        });
    });

    /*建筑与房地产*/
    $('.newjz1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '建筑与房地产',
            buttonName: '房地产',

        });
    });

    $('.newjz2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '行业方案',
            secondModel: '建筑与房地产',
            buttonName: '物业管理',

        });
    });

    /*服务与认证*/
    $('.newzc1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '支持',
            buttonName: '服务支持',

        });
    });

    $('.newzc2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '支持',
            buttonName: '产品注册',

        });
    });

    $('.newzc3').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '支持',
            buttonName: '伙伴资质查询',

        });
    });

    $('.newzc4').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '支持',
            buttonName: '正版验证',

        });
    });

    $('.newrz1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: 'ERP认证',
            buttonName: '认证中心',

        });
    });
    $('.newrz2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: 'ERP认证',
            buttonName: '财务管理师',

        });
    });

    $('.newrz3').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: 'ERP认证',
            buttonName: '供应链管理师',

        });
    });

    $('.newrz4').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: 'ERP认证',
            buttonName: '生产制造管理师',

        });
    });

    $('.newzy1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '资源中心',
            buttonName: '资讯专栏',

        });
    });

    $('.newzy2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '资源中心',
            buttonName: '文档下载',

        });
    });

    $('.newsq1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '社区',
            buttonName: '产品社区',

        });
    });

    $('.newsq2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '服务与认证',
            secondModel: '社区',
            buttonName: '金蝶云社区',

        });
    });
    /*关于*/
    $('.newjt1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '集团介绍',
            buttonName: '了解金蝶',

        });
    });

    $('.newjt2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '集团介绍',
            buttonName: '社会责任',

        });
    });

    $('.newjt3').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '集团介绍',
            buttonName: '董事及管理层',

        });
    });

    $('.newjt4').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '集团介绍',
            buttonName: '投资者关系',

        });
    });


    $('.newjt5').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '集团介绍',
            buttonName: '金蝶历程',

        });
    });


    $('.newjt6').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '集团介绍',
            buttonName: '金蝶荣誉',

        });
    });


    $('.newjt7').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '集团介绍',
            buttonName: '品牌理念',

        });
    });

    $('.newxw1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '新闻动态',
            buttonName: '新闻中心',

        });
    });

    $('.newxw2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '新闻动态',
            buttonName: '市场活动',

        });
    });

    $('.newzp1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '金蝶招聘',
            buttonName: '校园招聘',

        });
    });

    $('.newzp2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '金蝶招聘',
            buttonName: '社会招聘',

        });
    });

    $('.newlx1').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '联系金蝶',
            buttonName: '集团成员',

        });
    });

    $('.newlx2').on('click', function () {
        sensors.track('buttonClick', {
            pageOfButton: newceseurl,
            firstModel: '关于',
            secondModel: '联系金蝶',
            buttonName: '分支机构',

        });
    });

    /*页脚提交表单*/
    $("#field_7cztv3").focus(function () {
        sensors.track('PhoneInput', {
            entrance: newceseurl,
        });
    });


});


