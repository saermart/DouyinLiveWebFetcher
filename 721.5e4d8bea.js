"use strict";
(self.webpackChunkreflow = self.webpackChunkreflow || []).push([[721], {
    34826: function (e, n, o) {
        o.d(n, {
            Df: function () {
                return i
            }, c4: function () {
                return t
            }, ne: function () {
                return r
            }
        });
        var t = {
            episodeRecordTypeUnknown: 0,
            0: "episodeRecordTypeUnknown",
            episodeRecordTypeNormal: 1,
            1: "episodeRecordTypeNormal",
            episodeRecordTypeLatest: 2,
            2: "episodeRecordTypeLatest",
            episodeRecordTypeGuide: 3,
            3: "episodeRecordTypeGuide"
        }, i = {
            episodeStageUnknown: 0,
            0: "episodeStageUnknown",
            episodeStageLive: 1,
            1: "episodeStageLive",
            episodeStagePremiere: 2,
            2: "episodeStagePremiere",
            episodeStageRecord: 3,
            3: "episodeStageRecord",
            episodeStageReplay: 4,
            4: "episodeStageReplay"
        }, r = {episodeDefault: 0, 0: "episodeDefault", episodeAcross: 1, 1: "episodeAcross", episodeVertical: 2, 2: "episodeVertical"}
    }, 75572: function (e, n, o) {
        o.d(n, {
            r: function () {
                return r
            }
        });
        var t = o(55791), i = o(12926);

        function r() {
            return (0, i.useMemo)(function () {
                return !/android|ip(ad|hone|od)|symbianos|windows\s(ce|phone)|openharmony/i.test((0, t.z)().navigator.userAgent.toLowerCase())
            }, [])
        }
    }, 98999: function (e, n, o) {
        o.d(n, {
            t: function () {
                return d
            }
        });
        var t = o(14147), i = o(12926), r = o(75572), a = o(98474), l = o(54272);

        function d(e, n) {
            var o, d, s, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.NB.LIVE, c = (0, r.r)(),
                v = (0, (d = (o = (0, l.IT)()).share_extra_params, s = o.extra_params, {
                    getCameraId: (0, i.useCallback)(function () {
                        var e = "";
                        try {
                            if ((null == d ? void 0 : d.length) > 0) {
                                var n, o = (0, a.jD)(null !== (n = decodeURIComponent(d)) && void 0 !== n ? n : "{}", {});
                                (null == o ? void 0 : o.camera_id) && (e = "&camera_id=".concat(null == o ? void 0 : o.camera_id))
                            }
                            if (!(null == e ? void 0 : e.length) && (null == s ? void 0 : s.length) > 0) {
                                var t, i = (0, a.jD)(null !== (t = decodeURIComponent(s)) && void 0 !== t ? t : "{}", {});
                                (null == i ? void 0 : i.camera_id) && (e = "&camera_id=".concat(null == i ? void 0 : i.camera_id))
                            }
                        } catch (e) {
                            console.error("camera_id", e)
                        }
                        return e
                    }, [d, s])
                }).getCameraId)();
            (0, i.useLayoutEffect)(function () {
                if (c) {
                    var o, i;
                    u === t.NB.RECORD || u === t.NB.REPLAY ? window.location.href = "https://www.douyin.com/vsdetail/".concat(e, "?enter_from_merge=web_share_link&enter_method=web_share_link&previous_page=app_code_link").concat(v) : (null == n ? void 0 : null === (o = n.owner) || void 0 === o ? void 0 : o.webRid) && (window.location.href = "https://live.douyin.com/".concat(null == n ? void 0 : null === (i = n.owner) || void 0 === i ? void 0 : i.webRid, "?room_id=").concat(e, "&enter_from_merge=web_share_link&enter_method=web_share_link&previous_page=app_code_link").concat(v))
                }
            }, [])
        }
    }, 40269: function (e, n, o) {
        function t(e) {
            return e.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2").toLowerCase()
        }

        o.d(n, {
            OQ: function () {
                return t
            }, _F: function () {
                return i
            }, eR: function () {
                return r
            }
        });
        var i = function (e) {
            return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(function (e) {
                return i(e)
            }) : Object.keys(e).reduce(function (n, o) {
                return n[String(o).replace(/_([a-z\d])/g, function (e, n) {
                    return n.toUpperCase()
                })] = i(e[o]), n
            }, {})
        }, r = function (e) {
            return "object" != typeof e ? e : Array.isArray(e) ? e.map(function (e) {
                return r(e)
            }) : Object.keys(e).reduce(function (n, o) {
                return n[t(String(o))] = r(e[o]), n
            }, {})
        }
    }, 98474: function (e, n, o) {
        o.d(n, {
            IW: function () {
                return r
            }, bD: function () {
                return d
            }, jD: function () {
                return s
            }, uB: function () {
                return a
            }
        });
        var t = o(20674), i = o(55791), r = function () {
            var e = "";
            return (e = window.navigator.userAgent, /android|adr/gi.test(e)) ? t.ip.Android : /\(i[^;]+;( U;)? CPU.+Mac OS X/gi.test(e) ? t.ip.IOS : /iPad/gi.test(e) ? t.ip.IPad : t.ip.PC
        }, a = function () {
            var e, n = null !== (e = (0, i.z)().location.search.split("?")[1]) && void 0 !== e ? e : "", o = {};
            return n.split("&").forEach(function (e) {
                var n = e.split("=");
                o[n[0]] = decodeURIComponent(n[1])
            }), o
        }, l = Date.now(), d = function () {
            return l++
        }, s = function (e, n) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return null != n ? n : {}
            }
        }
    }, 93804: function (e, n, o) {
        o.d(n, {
            j5: function () {
                return i
            }
        }), o(98474);
        var t = o(55791);

        function i() {
            return /ByteLocale\//g.test((0, t.z)().navigator.userAgent)
        }
    }, 4118: function (e, n, o) {
        function t(e) {
            switch (e) {
                case"aweme_hotsoon":
                    return "awemehotsoon";
                case"duoshan":
                    return "duoshan";
                default:
                    return "douyin"
            }
        }

        function i(e) {
            switch (e) {
                case"douyin":
                default:
                    return "\u6296\u97F3";
                case"duoshan":
                    return "\u591A\u95EA";
                case"huoshan":
                case"awemehotsoon":
                    return "\u706B\u5C71"
            }
        }

        function r(e) {
            return "duoshan" === e ? "\u591A\u95EA" : "\u6296\u97F3"
        }

        o.d(n, {
            N_: function () {
                return i
            }, XV: function () {
                return r
            }, _1: function () {
                return t
            }
        })
    }, 76493: function (e, n, o) {
        o.d(n, {
            Ay: function () {
                return A
            }, YJ: function () {
                return h
            }
        });
        var t = o(35584), i = o(61909), r = o(77014), a = o(25769), l = o(40269), d = o(93804), s = o(72537), u = o(14147), c = o(55791),
            v = (0, c.z)().location.host.indexOf("huoshan") > 0 ? "webcast_huoshan_webapp" : "webcast_douyin_webapp",
            m = (0, c.z)().location.host.indexOf("huoshan") > 0 ? "HUOSHAN" : "DOUYIN", p = !1;

        function f(e, n) {
            if (!p) {
                var o = (0, a.parse)(window.location.search).tea_trace;
                "1" === o ? document.cookie = "tea_trace=1; path=/" : "2" === o && (document.cookie = "tea_trace=; path=/");
                var t = document.cookie.match(/tea_trace=([^;]+)/);
                r.A.init({
                    app_id: Number(u.jf[e.toLowerCase()]),
                    event_verify_url: null !== t ? "aHR0cHM6Ly9tY3M=.Ynl0ZWRhbmNl.bmV0".split(".").map(function (e) {
                        return window.atob(e)
                    }).join(".") : void 0,
                    channel: n
                }), p = !0
            }
        }

        function A(e) {
            var n, o = e.eventName, a = e.appName, c = e.channel, p = e.product, A = e.data, h = void 0 === A ? {} : A;
            if (!o) throw Error("event name cannot empty");
            window.collectEvent && (f(void 0 === p ? m : p, void 0 === c ? "cn" : c), n = void 0 === a ? v : a, r.A.config({
                app_name: n,
                os_name: (0, s.tZ)(),
                traffic_type: (0, s.X5)(),
                device_id: r.A.getConfig("user_unique_id")
            }), r.A.filterEvent(function (e) {
                return e[0].events.forEach(function (e) {
                    e.ab_sdk_version = u.ey
                }), e
            }), r.A.start(), r.A.event(o, (0, l.eR)((0, i._)((0, t._)({}, null != h ? h : {}), {isInApp: Number((0, d.j5)()), webAbVid: u.ey}))))
        }

        (0, c.z)().collectEvent = (0, c.z)().collectEvent || {};
        var h = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {channel: "cn", product: m}, n = e.channel, o = e.product;
            return window.collectEvent ? (f(void 0 === o ? m : o, void 0 === n ? "cn" : n), r.A.getConfig("user_unique_id")) : ""
        }
    }, 68186: function (e, n, o) {
        o.d(n, {
            Ay: function () {
                return p
            }
        });
        var t = o(35584), i = o(61909), r = o(77014), a = o(25769), l = o(40269), d = o(93804), s = o(72537), u = o(14147), c = o(55791),
            v = new r.g("DOUYIN_SEARCH_WEB_APP"), m = !1;

        function p(e) {
            var n, o, r, c, p, f, A, h, g, N, E, b, I, y, w = e.eventName, L = e.data, S = void 0 === L ? {} : L;
            if (!w) throw Error("event name cannot empty");
            window.collectEvent && (!function () {
                if (!m) {
                    var e = (0, a.parse)(window.location.search).tea_trace;
                    "1" === e ? document.cookie = "tea_trace=1; path=/" : "2" === e && (document.cookie = "tea_trace=; path=/");
                    var n = document.cookie.match(/tea_trace=([^;]+)/);
                    v.init({
                        app_id: 581610, event_verify_url: null !== n ? "aHR0cHM6Ly9tY3M=.Ynl0ZWRhbmNl.bmV0".split(".").map(function (e) {
                            return window.atob(e)
                        }).join(".") : void 0, channel: "cn"
                    }), m = !0
                }
            }(), o = (n = (0, a.parse)(window.location.search)).enter_from, r = n.in_ogs, c = n.in_tfs, p = n.log_pb, f = n.original_source, A = n.rank, h = n.search_entrance, g = n.search_id, N = n.search_keyword, E = n.search_result_id, b = n.traffic_source, I = n.sec_user_id, y = n.token_type, v.config({
                os_name: (0, s.tZ)(),
                traffic_type: (0, s.X5)(),
                device_id: v.getConfig("user_unique_id"),
                evtParams: {
                    anchor_id: I,
                    live_id: 1,
                    enter_from_merge: o,
                    enter_from: o,
                    in_ogs: r,
                    in_tfs: c,
                    log_pb: p,
                    original_source: f,
                    rank: A,
                    search_entrance: h,
                    search_id: g,
                    search_keyword: N,
                    search_result_id: E,
                    traffic_source: b,
                    token_type: y
                }
            }), v.filterEvent(function (e) {
                return e[0].events.forEach(function (e) {
                    e.ab_sdk_version = u.ey
                }), e
            }), v.start(), v.event(w, (0, l.eR)((0, i._)((0, t._)({}, null != S ? S : {}), {isInApp: Number((0, d.j5)()), webAbVid: u.ey}))))
        }

        (0, c.z)().collectEvent = (0, c.z)().collectEvent || {}
    }, 72537: function (e, n, o) {
        o.d(n, {
            V6: function () {
                return v
            }, X5: function () {
                return c
            }, Xj: function () {
                return d
            }, tZ: function () {
                return u
            }, xe: function () {
                return f
            }, yb: function () {
                return s
            }
        });
        var t = o(35584), i = o(61909), r = o(17423);
        o(93804);
        var a = o(55791), l = function (e, n, o) {
            var t = new Date;
            t.setTime(t.getTime() + 864e5 * o), document.cookie = "".concat(e, "=").concat(escape(n), ";expires=").concat(t.toUTCString())
        }, d = function (e) {
            for (var n = document.cookie.split(";"), o = {}, t = 0; t < n.length; t++) {
                var i = n[t].split("=");
                o["".concat(i[0]).trim()] = unescape(i[1]), l(i[0], i[1], e)
            }
            return o
        };

        function s() {
            var e = (0, a.z)().navigator;
            if (/iP(hone|od|ad)/.test(e.platform)) {
                var n = e.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return n ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3] || "0", 10)] : []
            }
        }

        function u() {
            var e = (0, a.z)().navigator;
            if (!e) return "";
            var n = e.userAgent;
            return /android/i.test(n) ? "android" : /iPhone|iPad|iPod|iOS/i.test(n) ? "ios" : /\(Macintosh; Intel /.test(n) ? "mac" : /Win\d{2}|Windows/.test(n) ? "windows" : "unknown"
        }

        function c() {
            var e = (0, a.z)().navigator.userAgent, n = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                o = !n && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
                t = e.match(/Firefox\/([\d.]+)/), i = e.match(/ucbrowser/ig), r = e.match(/quark/ig), l = e.match(/qq/ig),
                d = e.match(/opera.([\d.]+)/);
            return n ? "Chrome" : t ? "Firefox" : i ? "UCWEB" : d ? "Opera" : r ? "Quark" : l ? "QQ" : o ? "Safari" : "unknown"
        }

        var v = function () {
            var e = (0, a.z)().location;
            return !!e && -1 !== e.search.indexOf("share_app_name=douyin_lite")
        }, m = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return -1 !== e.indexOf(".") ? e.split(".").join("") : e
        }, p = function () {
            var e = (0, a.z)().navigator;
            if (!e) return {};
            var n = "".concat(e.userAgent, " "), o = n.match(/([^\/]+)\/([^\/]*) /g).reduce(function (e, n) {
                n = n.slice(0, -1);
                var o = (0, r._)(n.split("/"), 2), t = o[0], i = o[1];
                return e[t.toLocaleLowerCase()] = i, e
            }, {});
            return (0, i._)((0, t._)({}, o), {AppVersion: m(o.app_version), uaString: n})
        }, f = function () {
            var e = p(), n = e.uaString, o = e.AppVersion;
            if (!o) return !1;
            var t = -1 !== n.indexOf("aweme_lite"), i = -1 !== n.indexOf("aweme");
            return !!t && o >= "1350" || !!i && o >= "1480"
        }
    }, 55791: function (e, n, o) {
        o.d(n, {
            z: function () {
                return t
            }
        });
        var t = function () {
            return window
        }
    }, 81971: function (e, n, o) {
        o.d(n, {
            A: function () {
                return m
            }
        });
        var t = o(35584), i = o(61909), r = o(17423), a = o(85026), l = o(76493), d = o(54272), s = o(4190), u = o(12926), c = o(14147), v = o(98474),
            m = function (e) {
                e.app;
                var n = e.user, o = e.roomId, m = e.newRoomId, p = e.status, f = e.stage, A = void 0 === f ? 0 : f, h = e.episode,
                    g = void 0 === h ? {} : h, N = e.gdLabel, E = e.userGdLabel, b = e.noAuth, I = void 0 !== b && b, y = e.commonParams, w = e.isVS,
                    L = void 0 !== w && w, S = (0, s.K)(), R = S.jumpProfile, P = S.jumpHome, k = S.jumpLive, C = S.jumpPlayer, T = (0, d.DP)(),
                    x = (0, r._)((0, d.PG)(), 2), O = x[0];
                x[1];
                var U = (0, d.N5)(), j = U.isVs, F = U.roomId, _ = U.startPlayTime, B = U.guidanceText, V = (0, u.useCallback)(function () {
                    if ((0, l.Ay)({
                        eventName: "livesdk_reflow_click",
                        data: {
                            isVs: j ? 1 : 0,
                            isPlay: O === c.rF.PLAYING ? 1 : 0,
                            osName: "android" === (0, v.IW)() ? "android" : "ios",
                            roomId: F,
                            duration: 0 !== _ ? Date.now() - _ : 0,
                            guidanceText: B,
                            clickArea: "open_app"
                        }
                    }), (0, l.Ay)({
                        eventName: "livesdk_reflow_button_click",
                        data: {
                            buttonName: c.$9.TOP_BUTTON,
                            pageName: I ? c.QX.NOT_AUTH : p === c.xM.FINISH ? c.QX.LIVE_END : c.QX.HOMEPAGE,
                            roomId: o,
                            osName: "android" === (0, v.IW)() ? "android" : "ios",
                            pageUrl: window.location.href,
                            fromShareRoomId: o
                        }
                    }), A === c.NB.RECORD || A === c.NB.REPLAY) {
                        (0, l.Ay)({
                            eventName: "vs_video_reflow_button_click",
                            data: (0, i._)((0, t._)({}, y), {buttonName: c.$9.ENTER_APP})
                        }), null == C || C({roomId: o, episodeId: g.episodeIdStr, stage: A, gdLabel: N});
                        return
                    }
                    switch (p) {
                        case c.xM.PREPARE:
                            null == R || R({uid: null == n ? void 0 : n.idStr, gdLabel: E});
                            break;
                        case c.xM.LIVING:
                        case c.xM.PAUSE:
                            A === c.NB.UNKNOWN ? null == k || k({roomId: m || o, uid: null == n ? void 0 : n.idStr}) : null == C || C({
                                roomId: o,
                                episodeId: g.episodeIdStr,
                                stage: A,
                                gdLabel: N
                            });
                            break;
                        default:
                            if (!L) {
                                null == k || k({roomId: m || o, uid: null == n ? void 0 : n.idStr});
                                return
                            }
                            null == P || P()
                    }
                }, [T, p, A, g, o, n, E, y, R, P, k, C, N, L, I, m, j, F, _, B]);
                return (0, d.rY)() ? null : "douyin" === T || "huoshan" === T || "awemehotsoon" === T || "duoshan" === T ? (0, a.jsxs)("div", {
                    className: "reflow-header",
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)("div", {className: "logo-common"}), (0, a.jsx)("div", {className: "line-wrap"}), (0, a.jsx)("div", {
                            className: "banninfo-wrap",
                            children: (0, a.jsx)("p", {
                                className: "txt-wrap",
                                children: "".concat("douyin" === T || "duoshan" === T ? "\u6253\u5F00APP, \u53D1\u73B0\u66F4\u591A\u5185\u5BB9" : "\u6253\u5F00\u8FDB\u5165APP")
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "open-app huo-back",
                        onClick: function () {
                            return V()
                        },
                        children: (0, a.jsx)("div", {
                            className: "button-txt",
                            children: "".concat("douyin" === T || "duoshan" === T ? "\u6253\u5F00\u770B\u770B" : "\u6253\u5F00")
                        })
                    })]
                }) : null
            }
    }, 34208: function (e, n, o) {
        o.d(n, {
            A: function () {
                return c
            }
        });
        var t = o(17423), i = o(85026), r = o(76493), a = o(12926), l = o(14147), d = o(54272), s = o(98474), u = o(4118), c = function (e) {
            var n = e.uid, o = void 0 === n ? "" : n, c = (0, d.Kc)().jumpLive, v = (0, d.T8)().app, m = (0, d.$b)(), p = (0, d.N5)(), f = p.isVs,
                A = p.roomId, h = p.startPlayTime, g = p.guidanceText, N = (0, t._)((0, d.PG)(), 2), E = N[0];
            N[1];
            var b = (0, a.useCallback)(function () {
                (0, r.Ay)({
                    eventName: "livesdk_reflow_click",
                    data: {
                        isVs: f ? 1 : 0,
                        isPlay: E === l.rF.PLAYING ? 1 : 0,
                        osName: "android" === (0, s.IW)() ? "android" : "ios",
                        roomId: A,
                        duration: 0 !== h ? Date.now() - h : 0,
                        guidanceText: g,
                        clickArea: "other"
                    }
                }), (0, r.Ay)({
                    eventName: "livesdk_reflow_button_click",
                    data: {
                        buttonName: l.$9.BOTTOM_BUTTON,
                        pageName: l.QX.NOT_AUTH,
                        roomId: m,
                        osName: "android" === (0, s.IW)() ? "android" : "ios",
                        pageUrl: window.location.href
                    }
                }), null == c || c({roomId: m, uid: o})
            }, [c, m, o, f, E, A, h, g]);
            return (0, i.jsxs)("div", {
                className: "default-page",
                children: [(0, i.jsx)("img", {src: "data:image/png;base64,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"}), (0, i.jsx)("div", {
                    className: "default-page-title",
                    children: "\u6682\u65F6\u65E0\u6CD5\u5728\u8BE5\u9875\u9762\u89C2\u770B"
                }), (0, i.jsxs)("div", {
                    className: "default-page-text",
                    children: ["\u5C1D\u8BD5\u5728", (0, u.XV)(v), "\u5185\u89C2\u770B"]
                }), (0, i.jsx)("div", {
                    className: "button-wrap",
                    onClick: b,
                    children: (0, i.jsx)("div", {className: "button", children: "\u6253\u5F00".concat((0, u.N_)(v))})
                })]
            })
        }
    }, 63203: function (e, n, o) {
        o.d(n, {
            A: function () {
                return s
            }
        });
        var t = o(85026), i = o(12926), r = o(37301), a = (0, i.memo)(function (e) {
            var n = e.shareInfo, o = n.icon, i = n.shareTitle, r = n.shareDesc, a = n.shareImage;
            return (0, t.jsxs)("div", {
                style: {display: "none"},
                children: [(0, t.jsx)("img", {
                    id: "weixinShareLogo",
                    src: o,
                    style: {position: "absolute", top: "-1000px", left: "-1000px"}
                }), (0, t.jsx)("input", {type: "hidden", name: "shareTitle", value: i}), (0, t.jsx)("input", {
                    type: "hidden",
                    name: "shareDesc",
                    value: r
                }), (0, t.jsx)("input", {type: "hidden", name: "shareTimelineTitle", value: i}), (0, t.jsx)("input", {
                    type: "hidden",
                    name: "shareAppTitle",
                    value: i
                }), (0, t.jsx)("input", {type: "hidden", name: "ShareAppDesc", value: r}), (0, t.jsx)("input", {
                    type: "hidden",
                    name: "shareImage",
                    value: a
                })]
            })
        }), l = o(54272), d = o(93804);

        function s(e) {
            var n = e.reportSdk, o = e.limitWidth, i = e.shareInfo, s = (e.bid, e.children), u = {};
            o && (u.maxWidth = "600px", u.marginLeft = "auto", u.marginRight = "auto");
            var c = [{type: "text/javascript", innerHTML: "window.ADAPTER_CONF = {baseline: 750};"}];
            n && c.push({
                src: "https://lf1-cdn-tos.bytescm.com/obj/venus/reflow-report-sdk.js?t=".concat(Date.parse(new Date().toString()).toString()),
                type: "text/javascript"
            }), c.push({type: "text/javascript", innerHTML: "window.Slardar && window.Slardar('send', 'pageview');"});
            var v = (0, l.$b)(), m = (0, l.Kc)().jumpLive;
            return (0, d.j5)() && (null == m || m({roomId: v}), setTimeout(function () {
                window.close()
            }, 3e3)), (0, t.jsxs)("div", {
                className: "container",
                style: u,
                children: [(0, t.jsx)(a, {shareInfo: i}), (0, t.jsx)(r.m, {
                    title: i.shareTitle || "",
                    link: [{href: i.icon, rel: "shortcut icon", type: "image/x-icon"}],
                    script: c
                }), s]
            })
        }
    }, 67599: function (e, n, o) {
        o.d(n, {
            A: function () {
                return ef
            }
        });
        var t, i, r, a = o(84189), l = o(35584), d = o(61909), s = o(17423), u = o(68470), c = o(85026), v = o(12926), m = {
            wrapper: "wrapper-zL_8CH",
            container: "container-FioJCo",
            iconLogo: "iconLogo-PGg1zD",
            moreBtn: "moreBtn-yTEk5U",
            moreAction: "moreAction-Gdt_13",
            actionIcon: "actionIcon-ocrcRN",
            finished: "finished-CrcX52"
        }, p = o(14147), f = o(31256), A = o(4158), h = o.n(A), g = o(98474), N = 1e3;

        function E(e) {
            e.preventDefault()
        }

        function b() {
            document.body.removeEventListener("touchmove", E)
        }

        var I = function (e) {
                var n = e.playState, o = e.playerSeekStart, t = e.playerPlay, i = e.playRecord, r = (0, s._)(function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.className, o = e.appendTo,
                        t = (0, v.useRef)(document.createElement("div")), i = (0, v.useRef)(N++), r = (0, v.useRef)((0, g.bD)());
                    return (0, v.useEffect)(function () {
                        var e = t.current;
                        e.id = "Portal-".concat(r.current), e.className = h()("portal", n), e.style.zIndex = "".concat(i.current);
                        var a = null != o ? o : document.body;
                        return a.appendChild(e), function () {
                            a.removeChild(e)
                        }
                    }, [t, n, o]), [(0, v.useCallback)(function (e) {
                        var n = e.children;
                        return (0, f.createPortal)(n, t.current, "Portal-".concat(r.current))
                    }, []), t]
                }({className: m.wrapper, appendTo: document.body}), 1)[0];
                return ((0, v.useEffect)(function () {
                    return document.body.addEventListener("touchmove", E, {passive: !1}), b
                }, []), n !== p.rF.PAUSED && n !== p.rF.STOPPED) ? null : (0, c.jsx)(r, {
                    children: (0, c.jsxs)("div", {
                        className: m.container,
                        children: [(0, c.jsx)("img", {
                            className: m.iconLogo,
                            src: "data:image/png;base64,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"
                        }), (0, c.jsx)("button", {
                            type: "button",
                            className: m.moreBtn,
                            onClick: i,
                            children: "\u89C2\u770B\u5B8C\u6574\u7248"
                        }), n === p.rF.PAUSED ? (0, c.jsxs)("button", {
                            type: "button",
                            className: m.moreAction,
                            onClick: t,
                            children: [(0, c.jsx)("img", {
                                className: m.actionIcon,
                                src: "data:image/png;base64,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"
                            }), "\u7EE7\u7EED\u64AD\u653E"]
                        }) : (0, c.jsxs)("button", {
                            type: "button",
                            className: m.finished,
                            onClick: o,
                            children: [(0, c.jsx)("img", {
                                className: m.actionIcon,
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARfSURBVHgB7VrdUdtAEF5l8kwaiHlPoABCAZAGMO8JKSCiAEwB2AVgFwCkAKCAmLwDeQdSgGlA2c9aJeJY+e6kk2TP6JvZETkrd/fd7d+tjqhDhw4dOnRYGkRUI5IkWePHBssuyzrLexa0vZPnI8szyxPLLcuU5S6KomeqCbUQZqKf+HFIKdk18scVyyUTP6fACEqYiX7jR0zlSGp4YBmFJB6EsOzoiKVH9QDEYyY+pYqoTJjJHvPjwPH1R5E8euS2UAmlu31CFVCaMBPFJCeU2mkR4HzOKLVJ1RlxP3hkzq3PAm1ZtABwbgfc1yOVQCnCQvaCiif2k2VYRgVlAUA8XtA/VLxfhrQ3YQtZ7OBRCCfjQLwU6TKEr0lXY+xqXFbVCsbCA/F7XDDmLY+3Sx544/MyTyCLrSbOeeC9kGQB7g+CndxhOVVe2eQ5DagOIPSw/FFkQA2Ax4lYRsr4TxIWneCs0tzpDb22JXjeHWoIIE2p/zAJPvA8nEg7qTQPBOdhkoX6fqVmAaOGEzPDW0+yPCtcbThW2oahbdYG2DSl3nlg/sTyxaELO+Gi3a0jsXeBkMbYZozvmbYML48wynLAMvfmb8kOze0PqSFIaMqyr6loVSJzuMi9ipWAJu7l/h9CGrK8tbQpGUWWwfDib6MZu7tFDUAmjVCYmRQaEP6m4sDu6eXJbMayhRRWfocW5LVzZlNpLeZWPrF4AJPeM/49YTKYF8ifGe/Pc3JZKC1DsxLWXH0rtpsDqiXIvEDm2vgNCwIT3KbXjharMCmzw3fUHDDJgdIO28TCa6WgTdJ9DLLBsY2w5p1rqzeZEI98yXKk/AzSIGbORztezisn+MNG2CzVNBp3ASENFdYO/i41s6xwMJ+77w63AiGN3Twlf5zncwYb4cbU1wYhjXKST5T4p8oZbIRntFyAeiJ/d3Gc87zbTH99d7gnMa4VyC5jE1A0fFjwKiY51kpMNsJahTFUzbkUcgeIfSomjXmr6a8vYWCDWkaONHbaNDvsbr8ofNoIXyltXjWkuiCkYcuw6SQnJ4uOrS6Hh1/0Uo2xch9kwNYhPgWmhsrLfeWvE9zhhVJHcq4hLRtcKh6a8R+26a2rwEpYVMS0CexwfxVJu9a0xkobsp51WjH4lGmx0yZBtKECsTJb7fPlQatcQrWHUk5ZCTgTFlvWTiuoag7kywAtO8p8TEMysqn8hCRgnuOGiNHm4oWK+14f0wRFiTtSTpw796vsttSS8ScYbst4661qjxS3pwUf1yA3LBnxKEdC6ysv2fvbLD9y/d1LpbIyql55yL7bFvWD+A3bR8EcKl9UUMjf5+qTfiI7Y7WOqSJCXGrBJGLHvrAAT0YbLqvZSklQj1MmfEwVEfLaElLQXqg+892TnH9DfLwLfTEN6vidwhAHURBE5WJCgVDX1UMQx3Hts+dYIAk7x9WkUYiLaCaaulwKlf9I/0tEeILYTJ7ZhTV8Oqn1cmmHDh06dOiwRPgLaXoV+ljsFZ4AAAAASUVORK5CYII="
                            }), "\u518D\u770B\u4E00\u904D"]
                        })]
                    })
                })
            }, y = o(76493), w = o(38871), L = o(65666), S = o(58503), R = o.n(S), P = o(40269), k = o(25769), C = o(20674), T = o(69865), x = o(55791),
            O = R().create({});

        function U() {
            return (U = (0, a._)(function (e) {
                var n;
                return (0, u.YH)(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return n = {roomId: e, onlyStatus: 1}, [4, O.get("/webcast/room/ping/audience/", {params: n})];
                        case 1:
                            return [2, o.sent()]
                    }
                })
            })).apply(this, arguments)
        }

        O.interceptors.request.use(function (e) {
            return e.baseURL = "https://webcast.amemv.com", e
        }), O.interceptors.request.use(function (e) {
            e.params = e.params || {};
            var n, o = (0, k.parse)((0, x.z)().location.search).share_app_name, t = C.jf.douyin;
            return "aweme_hotsoon" === o && (t = C.jf.newHuoshan), /ping\/audience|recommend_live/.test(null !== (n = null == e ? void 0 : e.url) && void 0 !== n ? n : "") ? e.params.aid = t : (e.params.version_code = "99.99.99", e.params.app_id = t), e
        }), O.interceptors.request.use((t = (0, a._)(function (e) {
            return (0, u.YH)(this, function (n) {
                return e.params = Object.keys(e.params).reduce(function (n, o) {
                    return n[(0, P.OQ)(String(o))] = e.params[o], n
                }, {}), T.getFp().then(function (n) {
                    e.params = (0, l._)({verifyFp: n}, e.params)
                }), [2, e]
            })
        }), function (e) {
            return t.apply(this, arguments)
        })), O.interceptors.response.use((i = (0, a._)(function (e) {
            var n, t, i, r;
            return (0, u.YH)(this, function (a) {
                switch (a.label) {
                    case 0:
                        if (n = e.status, t = e.data, 200 !== n) return [3, 6];
                        if ((null == t ? void 0 : t.status_code) !== 0) return [3, 1];
                        return [2, t.data];
                    case 1:
                        return [4, o.e(214).then(o.bind(o, 21214))];
                    case 2:
                        return [4, (0, a.sent().checkCode)(O, e)];
                    case 3:
                        return [2, a.sent()];
                    case 4:
                        a.label = 5;
                    case 5:
                        return [3, 7];
                    case 6:
                        throw (i = Error((null == t ? void 0 : t.prompts) || "\u672A\u77E5\u9519\u8BEF")).code = null !== (r = null == t ? void 0 : t.status_code) && void 0 !== r ? r : 500, i;
                    case 7:
                        return [2]
                }
            })
        }), function (e) {
            return i.apply(this, arguments)
        })), O.interceptors.response.use(function (e) {
            return (0, P._F)(e)
        });
        var j = o(54272), F = o(4190), _ = function (e) {
                var n, o = e.room, t = e.user, i = e.imChannelInviteId,
                    r = null == o ? void 0 : null === (n = o.owner) || void 0 === n ? void 0 : n.nickname,
                    a = r.length < 6 ? r : (null == r ? void 0 : r.substring(0, 4)) + "...", l = (0, v.useRef)(), d = (0, F.K)().jumpLive;
                return (0, c.jsx)("div", {
                    className: "chatinfo-container",
                    ref: l,
                    children: (0, c.jsxs)("div", {
                        className: "info-wrapper",
                        children: [(0, c.jsx)("div", {
                            className: "text-wrapper",
                            children: (0, c.jsx)("p", {
                                className: "text",
                                children: "\u5728@".concat(a, "\u7684\u76F4\u64AD\u95F4\uFF0C\u8DDF\u6211\u4E00\u8D77\u52A0\u5165\u804A\u5929\u9891\u9053\uFF0C\u8FB9\u770B\u8FB9\u804A")
                            })
                        }), (0, c.jsx)("hr", {className: "inline"}), (0, c.jsxs)("div", {
                            className: "more-actions",
                            children: [(0, c.jsx)("div", {
                                className: "cancel", onClick: function () {
                                    l.current.style.display = "none"
                                }, children: "\u53D6\u6D88"
                            }), (0, c.jsx)("div", {className: "vertical-line"}), (0, c.jsx)("div", {
                                className: "join", onClick: function () {
                                    null == d || d({roomId: null == o ? void 0 : o.idStr, uid: null == t ? void 0 : t.idStr, imChannelInviteId: i})
                                }, children: "\u52A0\u5165"
                            })]
                        })]
                    })
                })
            }, B = o(38258), V = o(47504), D = o(73779), Y = o(97452),
            K = {xgPlayer: "xg-player-lUEjd9", vs: "vs-QQlXUk", audioStyle: "audio-style-hiu6Dw"}, M = o(61964), H = o(68186),
            G = {fallbackCover: "fallback-cover-CKMBAE", bg: "bg-D_FAwS", bgEpisode: "bg-episode-hLJjyu", cover: "cover-_HuIYj", play: "play-G4lvLT"},
            Q = function (e) {
                var n, o, t = e.stage, i = e.episodeCover, r = e.cover, a = e.coverH, l = e.roomId;
                return (0, v.useEffect)(function () {
                    if (!window.pageShowCollectTea) {
                        var e, n, o, t = null === (e = performance.getEntriesByType("navigation")) || void 0 === e ? void 0 : e[0],
                            i = performance.now();
                        (0, y.Ay)({
                            eventName: "live_reflow_page_fmp",
                            data: {
                                duration: i,
                                wcStart: window.live_reflow_wc_start,
                                domContentLoadedEventStart: t.domContentLoadedEventStart,
                                domContentLoadedEventEnd: t.domContentLoadedEventEnd,
                                loadEventEnd: t.loadEventEnd,
                                domainLookupStart: t.domainLookupStart,
                                domainLookupEnd: t.domainLookupEnd,
                                responseEnd: t.responseEnd,
                                isNewPage: 1,
                                user_id: (0, y.YJ)(),
                                pageState: "end_live",
                                is_live: 0,
                                flv_disabled: 0,
                                room_id: l,
                                ua: window.navigator.userAgent.toLocaleLowerCase()
                            }
                        }), window.pageShowCollectTea = !0, null === (o = window.Slardar) || void 0 === o || null === (n = o.sendEvent) || void 0 === n || n.call(o, {
                            name: "live_reflow_page_fmp",
                            categories: {
                                duration: String(i),
                                wcStart: String(window.live_reflow_wc_start),
                                domContentLoadedEventStart: String(t.domContentLoadedEventStart),
                                domContentLoadedEventEnd: String(t.domContentLoadedEventEnd),
                                loadEventEnd: String(t.loadEventEnd),
                                domainLookupStart: String(t.domainLookupStart),
                                domainLookupEnd: String(t.domainLookupEnd),
                                responseEnd: String(t.responseEnd),
                                isNewPage: "1",
                                user_id: (0, y.YJ)(),
                                pageState: "end_live",
                                ua: window.navigator.userAgent.toLocaleLowerCase()
                            }
                        })
                    }
                }, []), (0, c.jsxs)("div", {
                    className: G.fallbackCover,
                    children: [(0, c.jsx)("div", {
                        className: h()((o = {}, (0, B._)(o, G.bg, !0), (0, B._)(o, G.bgEpisode, t === p.NB.RECORD || t === p.NB.REPLAY), o)),
                        style: {backgroundImage: "url(".concat(null === (n = null != i ? i : r) || void 0 === n ? void 0 : n.replace(/^https?:/, ""), ")")}
                    }), a && (0, c.jsx)("img", {className: G.cover, src: a}), (0, c.jsx)("i", {className: G.play})]
                })
            }, W = function (e, n, o) {
                return {
                    data: {
                        target: "main_video",
                        type: "video",
                        eventType: e,
                        resourceUrl: n,
                        valueNum: Date.now() - (null != o ? o : 0),
                        buffer: window.live_reflow_player_buffer,
                        streamUrl: window.live_reflow_stream_url
                    }
                }
            }, z = {}, X = function (e) {
                var n, o, t = e.rtmpPullUrl, i = e.hlsPullUrl, r = e.resolutionName, a = e.hlsPullUrlMap, l = void 0 === a ? z : a, d = e.flvPullUrl,
                    u = void 0 === d ? z : d, c = (0, s._)(Object.entries(void 0 === r ? z : r).filter(function (e) {
                        var n = (0, s._)(e, 2), o = n[0], t = n[1];
                        return /sd/i.test(o) || /sd/i.test(t)
                    }).slice(0, 1), 1)[0];
                return {
                    rtmpPullUrl: null !== (n = u[null == c ? void 0 : c[0]]) && void 0 !== n ? n : void 0 === t ? void 0 : t,
                    hlsPullUrl: null !== (o = l[null == c ? void 0 : c[0]]) && void 0 !== o ? o : void 0 === i ? void 0 : i
                }
            }, q = function (e) {
                var n, o, t = null !== (o = null === (n = e.unfoldPlayInfo) || void 0 === n ? void 0 : n.playUrls) && void 0 !== o ? o : [],
                    i = (0, s._)(t.filter(function (e) {
                        var n;
                        return /\d+/.test(null !== (n = e.definition) && void 0 !== n ? n : "")
                    }).filter(function (e) {
                        var n;
                        return !/(2|4|8)k/.test(null !== (n = e.definition) && void 0 !== n ? n : "")
                    }).sort(function (e, n) {
                        var o, t;
                        return Number.parseInt(null !== (o = e.definition) && void 0 !== o ? o : "", 10) - Number.parseInt(null !== (t = n.definition) && void 0 !== t ? t : "", 10)
                    }).slice(0, 1), 1)[0];
                return {record: null == i ? void 0 : i.main, recordBackup: null == i ? void 0 : i.backup}
            }, J = (0, v.forwardRef)(function (e, n) {
                var o = e.main, t = e.backup, i = e.cover, r = e.isRecord, a = e.style, u = e.roomId, m = e.liveUserId, f = e.room, A = e.className,
                    h = e.playLimit, g = (e.stage, e.commonParams, e.onPlay), N = e.isVs, E = e.coverH, b = (0, s._)((0, j.PG)(), 2), I = (b[0], b[1]),
                    w = (0, v.useRef)(), L = (0, j.xd)(), S = (0, j.DP)(), R = (0, j.$b)(), P = (0, j.rY)(), k = (0, j.N5)().setStartPlayTime,
                    C = (0, v.useCallback)((0, M.A)(function () {
                        (0, H.Ay)({eventName: "livesdk_live_play", data: {}})
                    }, 150), []);
                (0, v.useEffect)(function () {
                    var e = 0, n = function () {
                        e = Date.now(), (0, y.Ay)((0, d._)((0, l._)({eventName: "tap"}, W()), {
                            data: {
                                target: "video_wrap",
                                type: "start_play"
                            }
                        })), (0, y.Ay)({
                            eventName: "live_backflow_cell_click",
                            data: {eventBelong: "web", eventType: "click", eventModule: "cell", eventPage: "live_backflow", liveUserId: m, roomId: u}
                        }), k(e), null == g || g()
                    }, o = function () {
                        P && C()
                    }, t = function () {
                        if (0 !== window.live_reflow_play_time) {
                            var n;
                            (0, y.Ay)((0, d._)((0, l._)({eventName: "livesdk_live_reflow_play"}, W()), {
                                data: (0, l._)({
                                    anchorId: null === (n = f.owner) || void 0 === n ? void 0 : n.idStr,
                                    roomId: u
                                }, "xigua" === S ? {orientation: f.orientation} : {})
                            })), window.live_reflow_play_time = 0, e = 0
                        }
                    };
                    return L.once(D.PLAY, n), L.on(D.PLAY, o), L.on(D.PLAYING, t), function () {
                        L.off(D.PLAY, n), L.off(D.PLAY, o), L.off(D.PLAYING, t)
                    }
                }, []);
                var T = (0, v.useCallback)(function (e, n, o) {
                    Object.values(e).forEach(function (e) {
                        if (Array.isArray(e)) {
                            e.forEach(function (e) {
                                null == n || n.on(e, function () {
                                    for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                                    o.emit.apply(o, [e, n].concat((0, V._)(i)))
                                })
                            });
                            return
                        }
                        null == n || n.on(e, function () {
                            for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                            o.emit.apply(o, [e, n].concat((0, V._)(i)))
                        })
                    })
                }, []), x = (0, v.useCallback)(function (e) {
                    T(D, e, L), L.on(D.CANPLAY, function () {
                        Y.A.addClass(null == e ? void 0 : e.root, "xgplayer-ready")
                    }), L.on(D.PLAYING, function () {
                        setTimeout(function () {
                            P || null == e || e.unRegisterPlugin("start")
                        }, 400), I(p.rF.PLAYING)
                    }), L.on(D.PAUSE, function () {
                        if (r) {
                            I(p.rF.PAUSED);
                            return
                        }
                        I(p.rF.READY)
                    });
                    var n = null == e ? void 0 : e.video;
                    L.on(D.ENDED, function () {
                        r || (n.style.display = "none"), I(p.rF.STOPPED)
                    }), L.on(D.TIME_UPDATE, function () {
                        if (e && h && e.currentTime > h) {
                            var n;
                            null === (n = window.__player__) || void 0 === n || n.pause(), setTimeout(function () {
                                try {
                                    I(p.rF.STOPPED)
                                } catch (e) {
                                }
                            })
                        }
                    }), null == n || n.addEventListener("x5videoenterfullscreen", function () {
                        n.style.height = "".concat(document.documentElement.clientHeight, "px")
                    })
                }, [L, I, r, h, P]);
                (0, v.useEffect)(function () {
                    var e, n = function () {
                        x(window.__player__)
                    };
                    return null === (e = w.current) || void 0 === e || e.addEventListener("player-fallback", n), function () {
                        var e;
                        null === (e = w.current) || void 0 === e || e.removeEventListener("player-fallback", n)
                    }
                }, [x]);
                var O = (0, v.useCallback)(function (e) {
                    if (e) {
                        if (e.addEventListener("player-destroy", function () {
                            I(p.rF.READY)
                        }), !e.player) {
                            e.addEventListener("player-inited", function o() {
                                "function" == typeof n ? n(e.player) : n && (n.current = e.player), e.player && x(e.player), null == e || e.removeEventListener("player-inited", o)
                            });
                            return
                        }
                        w.current = e, "function" == typeof n ? n(e.player) : n && (n.current = e.player), e.player && x(e.player)
                    }
                }, [x]), U = (0, v.useMemo)(function () {
                    var e, n, o, t, i;
                    return null === (i = f.streamUrl) || void 0 === i ? void 0 : null === (t = i.liveCoreSdkData) || void 0 === t ? void 0 : null === (o = t.pullData) || void 0 === o ? void 0 : null === (n = o.options) || void 0 === n ? void 0 : null === (e = n.qualities) || void 0 === e ? void 0 : e.map(function (e) {
                        var n, o, t;
                        return {
                            resolution: e.resolution,
                            quality: e.sdkKey,
                            url: null === (t = f.streamUrl) || void 0 === t ? void 0 : null === (o = t.flvPullUrl) || void 0 === o ? void 0 : null === (n = o[p.kz[null == e ? void 0 : e.sdkKey]]) || void 0 === n ? void 0 : n.replace(/^https?:\/\//i, "//")
                        }
                    })
                }, [f]), F = (0, v.useMemo)(function () {
                    var e, n, o, t, i;
                    return null === (i = f.streamUrl) || void 0 === i ? void 0 : null === (t = i.liveCoreSdkData) || void 0 === t ? void 0 : null === (o = t.pullData) || void 0 === o ? void 0 : null === (n = o.options) || void 0 === n ? void 0 : null === (e = n.qualities) || void 0 === e ? void 0 : e.map(function (e) {
                        var n, o, t;
                        return {
                            resolution: e.resolution,
                            quality: e.sdkKey,
                            url: null === (t = f.streamUrl) || void 0 === t ? void 0 : null === (o = t.hlsPullUrlMap) || void 0 === o ? void 0 : null === (n = o[p.kz[null == e ? void 0 : e.sdkKey]]) || void 0 === n ? void 0 : n.replace(/^https?:\/\//i, "//")
                        }
                    })
                }, [f]);
                return (0, c.jsx)("webcast-reflow-player", {
                    ref: O,
                    className: A,
                    url: o,
                    backupUrl: t,
                    isRecord: r ? "1" : "",
                    playLimit: h,
                    cover: i,
                    style: a,
                    roomId: u,
                    isSearchM: P ? "1" : "",
                    flvResolution: JSON.stringify(U),
                    hlsResolution: JSON.stringify(F),
                    coverH: E,
                    fromShareRoomId: R,
                    isVs: N ? "1" : "0"
                })
            }), Z = (0, v.forwardRef)(function (e, n) {
                var o, t, i, r, a = e.roomStatus, d = void 0 === a ? p.xM.LIVING : a, u = e.room, m = e.liveUserId, f = e.playLimit,
                    A = void 0 === f ? p.WH : f, g = e.onPlay, N = e.stage, E = e.episode, b = e.commonParams, I = (0, j.$b)();
                (0, v.useImperativeHandle)(n, function () {
                    return {
                        get paused() {
                            var e, n;
                            return null !== (n = null === (e = window.__player__) || void 0 === e ? void 0 : e.paused) && void 0 !== n && n
                        }, play: function () {
                            var e;
                            null === (e = window.__player__) || void 0 === e || e.play()
                        }, pause: function () {
                            var e;
                            null === (e = window.__player__) || void 0 === e || e.pause()
                        }, seek: function (e) {
                            var n, o;
                            (N === p.NB.RECORD || N === p.NB.REPLAY) && (null === (n = window.__player__) || void 0 === n || n.seek(e), null === (o = window.__player__) || void 0 === o || o.play())
                        }
                    }
                }, [N]);
                var y = null != u ? u : {}, w = y.streamUrl, L = void 0 === w ? {} : w, S = y.episodeExtra, R = (void 0 === S ? {} : S).episodeIdStr,
                    P = y.cover, k = (void 0 === P ? {} : P).urlList, C = (0, s._)(void 0 === k ? [] : k, 1)[0], T = null != E ? E : {},
                    x = T.seasonCoverVertical, O = (void 0 === x ? {} : x).urlList, U = (0, s._)(void 0 === O ? [] : O, 1)[0], F = T.cover,
                    _ = (void 0 === F ? {} : F).urlList, V = (0, s._)(void 0 === _ ? [] : _, 1)[0], D = T.videoInfo,
                    Y = u.liveTypeAudio || u.liveTypeLinkmic, M = (0, v.useMemo)(function () {
                        return (0, l._)({}, X(L), q(null != D ? D : {}))
                    }, [L, D]), H = M.rtmpPullUrl, G = M.hlsPullUrl, W = M.record, z = M.recordBackup;
                return H && G && d === p.xM.LIVING ? (0, c.jsx)(J, {
                    className: h()((o = {}, (0, B._)(o, K.xgPlayer, !0), (0, B._)(o, K.audioStyle, Y), o)),
                    main: H,
                    backup: G,
                    cover: C,
                    style: {display: d === p.xM.LIVING ? "block" : "none"},
                    room: u,
                    isRecord: !1,
                    roomId: I,
                    liveUserId: m,
                    onPlay: g,
                    stage: N,
                    isVs: !!((null == E ? void 0 : E.episodeIdStr) || (void 0 === R ? "" : R))
                }) : (W || z) && (N === p.NB.RECORD || N === p.NB.REPLAY) ? (0, c.jsx)(J, {
                    className: h()((r = {}, (0, B._)(r, K.xgPlayer, !0), (0, B._)(r, K.audioStyle, Y), (0, B._)(r, K.vs, !0), r)),
                    main: null !== (t = null != W ? W : z) && void 0 !== t ? t : "",
                    backup: null !== (i = null != z ? z : W) && void 0 !== i ? i : "",
                    cover: U,
                    room: u,
                    roomId: I,
                    isRecord: !0,
                    liveUserId: m,
                    playLimit: A,
                    onPlay: g,
                    commonParams: b,
                    isVs: !!(null == E ? void 0 : E.episodeIdStr),
                    coverH: V
                }) : (0, c.jsx)(Q, {stage: N, episodeCover: U, cover: C, coverH: V, roomId: I})
            }), $ = o(26909), ee = {
                "full-cover": "full-cover-ddyOLe",
                fullCover: "full-cover-ddyOLe",
                "room-info": "room-info-Vzapze",
                roomInfo: "room-info-Vzapze",
                hide: "hide-WwQ9DQ",
                "living-button-box": "living-button-box-unlfdY",
                livingButtonBox: "living-button-box-unlfdY",
                "living-button": "living-button-FvX8On",
                livingButton: "living-button-FvX8On",
                "living-out-button": "living-out-button-GD4nuP",
                livingOutButton: "living-out-button-GD4nuP",
                "out-liner": "out-liner-VZ38Qe",
                outLiner: "out-liner-VZ38Qe",
                "living-inner-button": "living-inner-button-MdBgF_",
                livingInnerButton: "living-inner-button-MdBgF_",
                "inner-line": "inner-line-oGLEhO",
                innerLine: "inner-line-oGLEhO",
                "living-title": "living-title-nl3TbH",
                livingTitle: "living-title-nl3TbH",
                "bottom-info": "bottom-info-obGY3j",
                bottomInfo: "bottom-info-obGY3j",
                "bottom-username": "bottom-username-Z2X5NY",
                bottomUsername: "bottom-username-Z2X5NY",
                "bottom-title": "bottom-title-GnuDoj",
                bottomTitle: "bottom-title-GnuDoj",
                "bottom-text": "bottom-text-nr3q_s",
                bottomText: "bottom-text-nr3q_s",
                "content-label-img": "content-label-img-wxidCE",
                contentLabelImg: "content-label-img-wxidCE",
                living: "living-kRK7Xz",
                "living-first": "living-first-FcnM70",
                livingFirst: "living-first-FcnM70",
                "vs-tag": "vs-tag-SZlAWe",
                vsTag: "vs-tag-SZlAWe",
                prefix: "prefix-guV0GF",
                "prefix-1": "prefix-1-NQeTh3",
                prefix1: "prefix-1-NQeTh3",
                "prefix-2": "prefix-2-OEAfyG",
                prefix2: "prefix-2-OEAfyG",
                "prefix-3": "prefix-3-blG_C2",
                prefix3: "prefix-3-blG_C2",
                "current-period": "current-period-JNnQ8I",
                currentPeriod: "current-period-JNnQ8I",
                "record-cover": "record-cover-K0XFCf",
                recordCover: "record-cover-K0XFCf",
                "record-info": "record-info-Favtek",
                recordInfo: "record-info-Favtek",
                season: "season-TcE714",
                detail: "detail-XpwfHR",
                line: "line-R0AEra",
                date: "date-l9Ricb",
                "record-btn": "record-btn-jEty6r",
                recordBtn: "record-btn-jEty6r",
                icon: "icon-XD5k44",
                desc: "desc-sdaQLR"
            }, en = {}, eo = {};

        function et(e, n) {
            try {
                return JSON.parse(null == e ? void 0 : e[n])
            } catch (o) {
                return null == e ? void 0 : e[n]
            }
        }

        var ei = (r = (0, a._)(function (e) {
            var n, o, t, i, r, a, l, d;
            return (0, u.YH)(this, function (s) {
                switch (s.label) {
                    case 0:
                        if (o = void 0 === (n = e.serviceName) ? "webcast.douyin.reflow" : n, t = e.key, r = void 0 === (i = e.confspace) ? "default" : i, null === (a = en[l = "".concat(o, "-").concat(r)]) || void 0 === a ? void 0 : a[t]) return eo[l] = null, [2, et(en[l], t)];
                        return eo[l] || (eo[l] = R().get("https://lf3-config.bytetcc.com/obj/tcc-config-web/tcc-v2-data-".concat(o, "-").concat(r))), [4, eo[l]];
                    case 1:
                        return d = s.sent().data.data, en[l] = d, [2, et(d, t)]
                }
            })
        }), function (e) {
            return r.apply(this, arguments)
        }), er = function (e) {
            var n, o, t = e.contentLabel, i = e.operationLabel, r = e.anchorName, a = e.title, l = e.isVS, d = e.VSData, u = e.roomStage,
                m = e.onClick, f = e.btnClick, A = e.pauseClick, N = e.roomId,
                E = (0, s._)((0, v.useState)("\u70B9\u51FB\u8FDB\u5165\u76F4\u64AD\u95F4"), 2), b = E[0], I = E[1], w = (0, s._)((0, j.PG)(), 1)[0],
                L = (0, v.useMemo)(function () {
                    return function (e, n) {
                        if (e) {
                            if (e === p.NB.FIRST) return "\u9996\u64AD\u4E2D";
                            if (e === p.NB.LIVE) return "\u76F4\u64AD\u4E2D";
                            if (n === p.vc.episodeRecordTypeLatest) return "\u6700\u65B0"
                        }
                    }(null == d ? void 0 : d.stage, null == d ? void 0 : d.episodeRecordType)
                }, [null == d ? void 0 : d.stage, null == d ? void 0 : d.episodeRecordType]), S = (0, j.rY)(), R = (0, v.useMemo)(function () {
                    return !S && (null == d ? void 0 : d.stage) !== p.NB.RECORD && (null == d ? void 0 : d.stage) !== p.NB.REPLAY && w === p.rF.PLAYING
                }, [S, null == d ? void 0 : d.stage, w]), P = (0, j.N5)(), k = P.setGuidanceText, C = P.isVs;
            return (0, v.useEffect)(function () {
                R && ei({key: "player"}).then(function (e) {
                    e.button_text.forEach(function (e) {
                        setTimeout(function () {
                            I(null == e ? void 0 : e.text)
                        }, 1e3 * e.duration)
                    })
                })
            }, [R]), (0, v.useEffect)(function () {
                R && b && ((0, y.Ay)({
                    eventName: "livesdk_reflow_guidance_show",
                    data: {isVs: C ? 1 : 0, roomId: N, osName: "android" === (0, g.IW)() ? "android" : "ios"}
                }), k(b))
            }, [R, b]), (0, c.jsxs)("div", {
                className: h()((0, B._)({}, ee.fullCover, !0)), children: [(0, c.jsxs)("div", {
                    className: ee.roomInfo,
                    children: [!S && (null == d ? void 0 : d.stage) !== p.NB.RECORD && (null == d ? void 0 : d.stage) !== p.NB.REPLAY && w === p.rF.PLAYING && (0, c.jsxs)("div", {
                        className: h()((n = {}, (0, B._)(n, ee.livingButtonBox, !0), (0, B._)(n, ee.hide, w !== p.rF.PLAYING), n)),
                        onClick: function () {
                            null == m || m("guidance_text")
                        },
                        children: [(0, c.jsx)("div", {className: h()(ee.livingButton, ee.livingOutButton)}), (0, c.jsx)("div", {className: h()(ee.livingButton, ee.livingInnerButton)}), (0, c.jsx)("div", {
                            className: ee.livingTitle,
                            children: b
                        })]
                    }), !l && (0, c.jsxs)("div", {
                        className: ee.bottomInfo,
                        children: [(0, c.jsxs)("div", {
                            className: ee.bottomText,
                            children: [t ? (0, c.jsx)("img", {
                                src: t,
                                className: ee.contentLabelImg
                            }) : (0, c.jsx)("div", {
                                className: h()((o = {}, (0, B._)(o, ee.living, !0), (0, B._)(o, ee.livingFirst, u === p.BC.episodeStagePremiere), o)),
                                children: u === p.BC.episodeStagePremiere ? "\u9996\u64AD\u4E2D" : "\u76F4\u64AD\u4E2D"
                            }), i && (0, c.jsx)("img", {className: ee.contentLabelImg, src: i})]
                        }), (0, c.jsxs)("div", {className: ee.bottomUsername, children: ["@", r]}), (0, c.jsx)("div", {
                            className: ee.bottomTitle,
                            children: a || ""
                        })]
                    }), l && ((null == d ? void 0 : d.stage) === p.NB.RECORD || (null == d ? void 0 : d.stage) === p.NB.REPLAY) && (0, c.jsxs)("div", {
                        className: ee.recordCover,
                        children: [(0, c.jsxs)("div", {
                            className: ee.recordInfo,
                            children: [(0, c.jsx)("div", {
                                className: ee.season,
                                children: "".concat(r, " ").concat(null == d ? void 0 : d.multiSeasonOrder)
                            }), (0, c.jsxs)("div", {
                                className: ee.detail,
                                children: [null == d ? void 0 : d.currentPeriod, (0, c.jsx)("img", {
                                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAfCAYAAAAiPHdfAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAApSURBVHgB7cqxCQAACAPBKA7m/ktFGyUL2BlIcfCAzEjmIPoL1+xxigJ3uAO7HPmfPQAAAABJRU5ErkJggg==",
                                    className: ee.line
                                }), a]
                            }), (0, c.jsx)("div", {className: ee.date, children: null == d ? void 0 : d.releaseTime})]
                        }), (0, c.jsxs)("button", {
                            type: "button",
                            className: "".concat(ee.recordBtn, " ").concat(ee.huoBack),
                            onClick: function () {
                                null == f || f()
                            },
                            children: ["\u89C2\u770B\u5B8C\u6574\u7248", (0, c.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAA8CAYAAAAOhRhuAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB7dbRCcJAEEXRhxWkBO3AEiwhJViCHaQ0O9AOtAStwHHEBUVdxY/sDOFeeJ8hBxLYlYiIiCg+M5v7OmXIIYM9GhSZA5b2XhyqAgpHbVOhbj+zbw8KFChQoCaO2iiiL6hT7ZmZxq0re+2s1tn9VnmsfLJeLfuBWatlYNJj/GXpMAswYP4EpcIoDaaAVh8glxBMAXUFEI95QvW+ne9grU9tIiIimkBXMamDGO3ACl0AAAAASUVORK5CYII=",
                                className: ee.icon
                            })]
                        })]
                    }), l && (null == d ? void 0 : d.stage) !== p.NB.RECORD && (null == d ? void 0 : d.stage) !== p.NB.REPLAY && (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsxs)("div", {
                            className: ee.vsTag,
                            children: [L && (0, c.jsx)("span", {
                                className: h()(ee.prefix, ee["prefix-".concat(null == d ? void 0 : d.stage)]),
                                children: L
                            }), (0, c.jsx)("span", {className: ee.currentPeriod, children: null == d ? void 0 : d.currentPeriod})]
                        }), (0, c.jsx)("p", {className: ee.desc, children: null != a ? a : "".concat(r, "\u6B63\u5728\u76F4\u64AD")})]
                    })]
                }), (0, c.jsx)("div", {
                    className: ee.fullCover,
                    onClick: (null == d ? void 0 : d.stage) === p.NB.RECORD || (null == d ? void 0 : d.stage) === p.NB.REPLAY ? function () {
                        return null == A ? void 0 : A()
                    } : function () {
                        return null == m ? void 0 : m("other")
                    }
                })]
            })
        }, ea = function (e) {
            var n, o, t, i = e.room, r = e.episode, a = e.stage, u = void 0 === a ? p.NB.UNKNOWN : a, m = e.commonParams, f = e.pauseClick,
                A = (0, F.K)(), h = A.jumpLive, N = A.jumpPlayer, E = (0, j.$b)(), b = (0, j.N5)(), I = b.isVs, w = b.roomId, L = b.startPlayTime,
                S = b.guidanceText, R = (0, s._)((0, j.PG)(), 2), P = R[0];
            R[1];
            var k = null != i ? i : {}, C = k.idStr, T = k.contentLabel, x = (void 0 === T ? {} : T).urlList,
                O = (0, s._)(void 0 === x ? [] : x, 1)[0], U = k.operationLabel, _ = (void 0 === U ? {} : U).urlList,
                B = (0, s._)(void 0 === _ ? [] : _, 1)[0], V = k.owner, D = (void 0 === V ? {} : V).nickname, Y = k.title, K = null != r ? r : {},
                M = K.owner, H = (void 0 === M ? {} : M).nickname, G = void 0 === H ? void 0 : H, Q = K.title, W = K.episodeType,
                z = (void 0 === W ? {} : W).episodeRecordType, X = void 0 === z ? void 0 : z, q = K.currentPeriod, J = K.releaseTime,
                Z = K.episodeIdStr, $ = K.episodeCorrelationSeasonInfo, ee = K.videoInfo, en = (0, v.useMemo)(function () {
                    var e;
                    return {
                        stage: u,
                        currentPeriod: q,
                        releaseTime: J,
                        episodeRecordType: X,
                        multiSeasonOrder: null == $ ? void 0 : null === (e = $.seasonBriefInfo) || void 0 === e ? void 0 : e.multiSeasonTag
                    }
                }, [u, q, J, X, $]), eo = (0, v.useCallback)(function (e) {
                    if ((0, y.Ay)({
                        eventName: "livesdk_reflow_click",
                        data: {
                            isVs: I ? 1 : 0,
                            isPlay: P === p.rF.PLAYING ? 1 : 0,
                            osName: "android" === (0, g.IW)() ? "android" : "ios",
                            roomId: w,
                            duration: 0 !== L ? Date.now() - L : 0,
                            guidanceText: S,
                            clickArea: null != e ? e : "other"
                        }
                    }), (0, y.Ay)({
                        eventName: "livesdk_reflow_button_click",
                        data: {
                            buttonName: p.$9.FEED,
                            pageName: p.QX.HOMEPAGE,
                            roomId: C,
                            osName: "android" === (0, g.IW)() ? "android" : "ios",
                            pageUrl: window.location.href,
                            fromShareRoomId: E
                        }
                    }), u === p.NB.RECORD || u === p.NB.REPLAY) N({roomId: E, episodeId: Z, stage: u}); else {
                        var n;
                        h({roomId: C || E, uid: null === (n = i.owner) || void 0 === n ? void 0 : n.idStr})
                    }
                }, [h, C, E, null === (n = i.owner) || void 0 === n ? void 0 : n.idStr, Z, N, u, I, P, w, L, S]), et = (0, v.useCallback)(function () {
                    N({roomId: C, episodeId: Z, stage: u}), (0, y.Ay)({
                        eventName: "vs_video_reflow_button_click",
                        data: (0, d._)((0, l._)({}, m), {buttonName: p.$9.WATCH_FULL})
                    })
                }, [C, Z, N, u, m]);
            return (0, c.jsx)(er, {
                contentLabel: O,
                operationLabel: B,
                anchorName: null != G ? G : void 0 === D ? void 0 : D,
                title: null != Q ? Q : Y,
                isVS: !!r,
                roomStage: null == i ? void 0 : null === (t = i.episodeExtra) || void 0 === t ? void 0 : null === (o = t.mod) || void 0 === o ? void 0 : o.episodeStage,
                VSData: en,
                onClick: eo,
                btnClick: et,
                pauseClick: ee ? f : et,
                roomId: C
            })
        }, el = {
            "full-cover": "full-cover-KTpPYd",
            fullCover: "full-cover-KTpPYd",
            cover: "cover-zAtXmT",
            container: "container-Lum2U4",
            "anchor-info": "anchor-info-WsQVmx",
            anchorInfo: "anchor-info-WsQVmx",
            avatar: "avatar-TnnrEA",
            "anchor-name": "anchor-name-S7VSMP",
            anchorName: "anchor-name-S7VSMP",
            status: "status-Fp1rdx",
            reason: "reason-tnUaKc",
            enlarge: "enlarge-JHm7wC",
            "button-container": "button-container-roPiYL",
            buttonContainer: "button-container-roPiYL",
            button: "button-ULLkSi"
        }, ed = o(4118), es = {PREPARE: "PREPARE", PAUSE: "PAUSE", ENDED: "ENDED", PAY_ROOM: "PAY_ROOM"}, eu = function (e) {
            var n = e.cover, o = e.avatar, t = e.anchorName, i = e.status, r = e.stats, a = e.isHidden, l = e.title, d = e.onClick, s = (0, j.rY)(),
                u = (0, j.T8)().app;
            return (0, c.jsxs)("div", {
                className: el.fullCover,
                children: [(0, c.jsx)("div", {className: el.cover, children: (0, c.jsx)("img", {src: n, alt: "cover"})}), (0, c.jsxs)("div", {
                    className: el.container,
                    children: [(0, c.jsxs)("div", {
                        className: el.anchorInfo,
                        children: [(0, c.jsx)("div", {
                            className: el.avatar,
                            children: (0, c.jsx)("img", {src: o, alt: "avatar"})
                        }), (0, c.jsx)("h2", {className: el.anchorName, children: t}), (0, c.jsxs)("p", {
                            className: el.status,
                            children: ["ENDED" === i && !(void 0 !== a && a) && "".concat(void 0 === r ? "" : r), "PRIVILEGE" === i && "\u6682\u65E0\u89C2\u770B\u6743\u9650", "RISK" === i && "\u76F4\u64AD\u72B6\u6001\u7279\u6B8A", "PAY_ROOM" === i && (void 0 === l ? "" : l)]
                        })]
                    }), (0, c.jsxs)("div", {
                        className: h()(el.reason, (0, B._)({}, el.enlarge, "ENDED" === i)),
                        children: ["PREPARE" === i && "\u672C\u573A\u76F4\u64AD\u672A\u5F00\u59CB", "PAUSE" === i && "\u4E3B\u64AD\u79BB\u5F00\u4E00\u4F1A\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85", "ENDED" === i && "\u76F4\u64AD\u5DF2\u7ED3\u675F", "PRIVILEGE" === i && "\u4E3B\u64AD\u8BBE\u7F6E\u4E86\u6743\u9650\uFF0C\u65E0\u6CD5\u89C2\u770B", "RISK" === i && "\u9700\u5C1D\u8BD5\u5728".concat((0, ed.XV)(u), "\u5185\u89C2\u770B"), "PAY_ROOM" === i && "\u8BE5\u76F4\u64AD\u95F4\u4E3A\u4ED8\u8D39\u76F4\u64AD\uFF0C\u9700\u5728".concat((0, ed.XV)(u), "\u89C2\u770B")]
                    }), !s && (0, c.jsx)("div", {
                        className: el.buttonContainer,
                        children: (0, c.jsxs)("button", {
                            className: "".concat(el.button, " ").concat(el.huoBack),
                            type: "button",
                            onClick: d,
                            children: ["\u6253\u5F00", (0, ed.XV)(u), "RISK" !== i && "PAY_ROOM" !== i && " \u770B\u66F4\u591A\u76F4\u64AD"]
                        })
                    })]
                })]
            })
        }, ec = function (e) {
            var n, o, t, i = e.room, r = e.episode, a = e.stage, l = void 0 === a ? p.NB.UNKNOWN : a, d = (0, F.K)(), u = d.jumpProfile,
                m = d.jumpHome, f = d.jumpLive, A = d.jumpPlayer;
            null == i || null === (o = i.episodeExtra) || void 0 === o || null === (n = o.mod) || void 0 === n || n.episodeStage;
            var h = i.idStr, N = i.owner, E = i.cover, b = (void 0 === E ? {} : E).urlList, I = (0, s._)(void 0 === b ? [] : b, 1)[0],
                w = i.roomViewStats, L = void 0 === w ? {} : w, S = L.displayLong, R = L.isHidden, P = i.status, k = i.title, C = i.paidLiveData,
                T = (void 0 === C ? {} : C).paidType, x = null != r ? r : {}, O = x.episodeIdStr, U = x.owner,
                _ = null !== (t = null != U ? U : void 0 === N ? {} : N) && void 0 !== t ? t : {}, B = _.idStr, V = _.nickname, D = _.avatarThumb,
                Y = (void 0 === D ? {} : D).urlList, K = (0, s._)(void 0 === Y ? [] : Y, 1)[0], M = (0, j.$b)(), H = (0, j.N5)(), G = H.isVs,
                Q = H.roomId, W = H.startPlayTime, z = H.guidanceText, X = (0, s._)((0, j.PG)(), 2), q = X[0];
            X[1];
            var J = (0, v.useMemo)(function () {
                return 1 === T ? es.PAY_ROOM : P === p.xM.PREPARE ? es.PREPARE : P === p.xM.PAUSE ? es.PAUSE : (p.xM.FINISH, es.ENDED)
            }, [P, T]), Z = (0, v.useCallback)(function () {
                switch ((0, y.Ay)({
                    eventName: "livesdk_reflow_click",
                    data: {
                        isVs: G ? 1 : 0,
                        isPlay: q === p.rF.PLAYING ? 1 : 0,
                        osName: "android" === (0, g.IW)() ? "android" : "ios",
                        roomId: Q,
                        duration: 0 !== W ? Date.now() - W : 0,
                        guidanceText: z,
                        clickArea: "other"
                    }
                }), (0, y.Ay)({
                    eventName: "livesdk_reflow_button_click",
                    data: {
                        buttonName: p.$9.BOTTOM_BUTTON,
                        pageName: p.QX.LIVE_END,
                        roomId: h,
                        osName: "android" === (0, g.IW)() ? "android" : "ios",
                        pageUrl: window.location.href,
                        fromShareRoomId: M
                    }
                }), P) {
                    case p.xM.PREPARE:
                        u({uid: B});
                        break;
                    case p.xM.PAUSE:
                        l === p.NB.UNKNOWN ? f({roomId: M, uid: B}) : A({roomId: M, episodeId: O, stage: l});
                        break;
                    case p.xM.FINISH:
                        f({roomId: M, uid: B});
                        break;
                    default:
                        m()
                }
            }, [h, M, P, u, m, f, A, l, O, B, G, q, Q, W, z]);
            return (0, c.jsx)(eu, {cover: I, avatar: K, anchorName: V, status: J, stats: S, isHidden: R, title: k, onClick: Z})
        }, ev = (0, v.memo)(function (e) {
            var n = e.roomStatus, o = e.stage, t = (0, $._)(e, ["roomStatus", "stage"]);
            return (0, v.createElement)(n === p.xM.LIVING || o === p.NB.RECORD || o === p.NB.REPLAY ? ea : ec, (0, l._)({stage: o}, t))
        }), em = function (e) {
            (0, y.Ay)({
                eventName: "vs_video_reflow_play_click",
                data: (0, d._)((0, l._)({}, null != e ? e : {}), {pageName: p.QX.FINISH})
            }), (0, y.Ay)({
                eventName: "vs_video_reflow_button_click",
                data: (0, d._)((0, l._)({}, null != e ? e : {}), {pageName: p.QX.FINISH, buttonName: p.$9.PLAY_AGAIN})
            })
        }, ep = function (e) {
            (0, y.Ay)({
                eventName: "vs_video_reflow_button_click",
                data: (0, d._)((0, l._)({}, e), {pageName: p.QX.PAUSE, buttonName: p.$9.CONTINUE_PLAY})
            })
        }, ef = function (e) {
            var n, o, t, i, r = e.room, m = e.stage, f = void 0 === m ? p.NB.UNKNOWN : m, A = e.episode, N = e.commonParams, E = r.idStr,
                b = r.status, S = r.paidLiveData, R = decodeURIComponent((0, j.IT)().extra_params || ""), P = (0, g.jD)(R, {}).im_channel_invite_id,
                k = (null != A ? A : {}).episodeIdStr, C = (0, j.Kc)().jumpPlayer, T = (0, s._)((0, j.PG)(), 2), x = T[0], O = T[1], F = (0, j.T8)(),
                B = F.fromOppo, V = F.theme, D = (0, s._)((0, v.useState)(b), 2), Y = D[0], K = D[1], M = (0, v.useRef)(),
                H = (0, v.useCallback)(function () {
                    var e;
                    null === (e = M.current) || void 0 === e || e.seek(0), (f === p.NB.RECORD || f === p.NB.REPLAY) && em(N)
                }, [M, N, f]), G = (0, j.rY)(), Q = (0, v.useCallback)(function () {
                    var e;
                    ep(N), null === (e = M.current) || void 0 === e || e.play()
                }, [M, N]), W = (0, v.useCallback)(function () {
                    var e;
                    null === (e = M.current) || void 0 === e || e.pause()
                }, [M]);
            (0, w.A)(function () {
                Y === p.xM.FINISH && O(p.rF.STOPPED)
            });
            var z = (0, v.useCallback)((n = (0, a._)(function (e, n) {
                var o, t;
                return (0, u.YH)(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return [4, function (e) {
                                return U.apply(this, arguments)
                            }(n)];
                        case 1:
                            return (t = (null != (o = i.sent()) ? o : {}).roomStatus) && (t === p.xM.FINISH && O(p.rF.STOPPED), e(t)), [2]
                    }
                })
            }), function (e, o) {
                return n.apply(this, arguments)
            }), [O]), X = (0, v.useCallback)(function () {
                (0, y.Ay)({eventName: "vs_video_reflow_button_click", data: (0, d._)((0, l._)({}, N), {buttonName: p.$9.WATCH_FULL})}), C({
                    roomId: E,
                    episodeId: k,
                    stage: f
                })
            }, [E, k, C, f, N]);
            (0, L.A)(function () {
                E && z(function (e) {
                    return K(e)
                }, E)
            }, x === p.rF.PLAYING && f !== p.NB.RECORD ? p.aQ : void 0);
            var q = (0, v.useMemo)(function () {
                var e, n, o;
                return null === (o = r.owner) || void 0 === o ? void 0 : null === (n = o.avatarMedium) || void 0 === n ? void 0 : null === (e = n.urlList) || void 0 === e ? void 0 : e[0]
            }, [null === (i = r.owner) || void 0 === i ? void 0 : null === (t = i.avatarMedium) || void 0 === t ? void 0 : null === (o = t.urlList) || void 0 === o ? void 0 : o[0]]);
            return r ? (0, c.jsxs)("div", {
                className: h()({"reflow-content": !0, "source-from-oppo": "xigua" === V && B, "reflow-content-m": G}),
                onClick: function () {
                    if (G) {
                        var e;
                        (null === (e = M.current) || void 0 === e ? void 0 : e.paused) ? Q() : W()
                    }
                },
                children: [(0, c.jsx)(Z, {
                    ref: M,
                    roomStatus: Y,
                    isPayRoom: 1 === (void 0 === S ? {} : S).paidType,
                    room: r,
                    episode: A,
                    stage: f,
                    commonParams: N
                }), r.liveTypeAudio && x === p.rF.PLAYING && q && (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)("img", {
                        className: "audio-cover",
                        src: q
                    }), (0, c.jsx)("div", {className: "audio-cover-mask"})]
                }), (0, c.jsx)(ev, {
                    room: r,
                    episode: A,
                    stage: f,
                    roomStatus: Y,
                    commonParams: N,
                    pauseClick: W
                }), (f === p.NB.RECORD || f === p.NB.REPLAY) && (x === p.rF.STOPPED || x === p.rF.PAUSED) && (0, c.jsx)(I, {
                    playState: x,
                    playRecord: X,
                    playerPlay: Q,
                    playerSeekStart: H
                }), !!(P && "0" !== P && (null == r ? void 0 : r.status) === p.xM.LIVING) && (0, c.jsx)(_, {
                    room: r,
                    user: null == r ? void 0 : r.owner,
                    imChannelInviteId: P
                })]
            }) : (0, c.jsx)("div", {style: {height: "1.4rem"}})
        }
    }, 20674: function (e, n, o) {
        o.d(n, {
            ey: function () {
                return r
            }, ip: function () {
                return i
            }, jf: function () {
                return t
            }
        });
        var t = {douyin: 1128, 1128: "douyin", newHuoshan: 8663, 8663: "newHuoshan"}, i = {Android: "android", IOS: "ios", IPad: "ipad", PC: "pc"},
            r = "10027007"
    }, 14147: function (e, n, o) {
        o.d(n, {
            sZ: function () {
                return v.sZ
            }, jf: function () {
                return p.jf
            }, $9: function () {
                return R
            }, aQ: function () {
                return w
            }, sL: function () {
                return a
            }, yl: function () {
                return I
            }, qH: function () {
                return d
            }, o3: function () {
                return y
            }, vc: function () {
                return v.vc
            }, NB: function () {
                return v.NB
            }, BC: function () {
                return v.BC
            }, Kb: function () {
                return l
            }, uY: function () {
                return b
            }, QX: function () {
                return S
            }, rF: function () {
                return v.rF
            }, xM: function () {
                return v.xM
            }, ey: function () {
                return p.ey
            }, Qs: function () {
                return k
            }, N6: function () {
                return P
            }, l: function () {
                return C
            }, Kq: function () {
                return T
            }, kz: function () {
                return x
            }, WH: function () {
                return L
            }
        });
        var t = o(72537), i = "ios" === (0, t.tZ)() ? "https://l.douyin.com/Parc" : "https://l.douyin.com/JJQR", r = (0, t.V6)(), a = {
            BANNER_TOP: r ? i : "https://z.douyin.com/RQMU",
            BANNNER_BOTTOM: r ? i : "https://z.douyin.com/B2uf",
            POSTER_FOLLOW: r ? i : "https://z.douyin.com/2ccy",
            HOT_VIDEO: r ? i : "https://z.douyin.com/fmFP",
            POPUP: r ? i : "https://z.douyin.com/d1QN"
        }, l = {
            BANNER_TOP: "https://z.huoshan.com/DgWr",
            BANNNER_BOTTOM: "https://z.huoshan.com/RE6g",
            POSTER_FOLLOW: "https://z.huoshan.com/Bxms ",
            HOT_VIDEO: "https://z.huoshan.com/jrvp",
            POPUP: "https://z.huoshan.com/fcNG"
        }, d = {
            BANNER_TOP: "https://duoshan.zlinkurl.cn/dDmkS",
            BANNNER_BOTTOM: "https://duoshan.zlinkurl.cn/dDmkS",
            POSTER_FOLLOW: "https://duoshan.zlinkurl.cn/dDmkS",
            HOT_VIDEO: "https://duoshan.zlinkurl.cn/dDmkS",
            POPUP: "https://duoshan.zlinkurl.cn/dDmkS"
        }, s = o(35584), u = o(25769), c = o(40269), v = o(60624), m = o(98474), p = o(20674), f = (0, t.V6)() ? 2329 : 1128, A = (0, m.uB)();
        try {
            var h, g = (0, m.jD)(decodeURIComponent(null !== (h = A.extra_params) && void 0 !== h ? h : "{}"), {});
            g.web_ab_vid = p.ey, delete g.im_channel_invite_id, A.extra_params = JSON.stringify(g)
        } catch (e) {
        }
        try {
            A.share_extra_params = decodeURIComponent(A.share_extra_params), A.meta_params = decodeURIComponent(A.meta_params)
        } catch (e) {
        }
        var N = "live_reflow", E = function (e, n) {
                return "".concat(e, "?").concat((0, u.stringify)((0, c.eR)((0, s._)({
                    launchMethod: "live_reflow",
                    enterFromMerge: N,
                    from: N,
                    enterFrom: N,
                    sceneFrom: "share_reflow",
                    enterMethod: "share_connection_reflow"
                }, n))))
            }, b = {
                HOME: function (e) {
                    var n = e.gdLabel;
                    return E("snssdk8663://feed", (0, s._)({
                        refer: "web",
                        gdLabel: void 0 === n ? "click_wap_detail_download_feature" : n
                    }, null != A ? A : {}))
                }, DETAIL: function (e) {
                    var n = e.id, o = e.gdLabel, t = e.appParam;
                    return E("snssdk8663://aweme/detail/".concat(n), (0, s._)({
                        refer: "web",
                        gdLabel: void 0 === o ? "click_wap_detail_download_bottom" : o,
                        appParam: void 0 === t ? "" : t,
                        needlaunchlog: 1
                    }, null != A ? A : {}))
                }, USER: function (e) {
                    var n = e.uid, o = e.gdLabel, t = void 0 === o ? "click_wap_live_user_info" : o, i = e.type;
                    return E("snssdk8663://user/profile/".concat(n), (0, s._)({
                        refer: "web",
                        type: void 0 === i ? "user" : i,
                        needlaunchlog: "1"
                    }, null != A ? A : {}, t ? {gdLabel: t} : {}))
                }, LIVE: function (e) {
                    var n = e.roomId, o = e.uid, t = e.imChannelInviteId, i = e.gdLabel, r = void 0 === i ? "" : i;
                    return E("snssdk8663://webcast_room", (0, s._)({
                        roomId: n,
                        imChannelInviteId: void 0 === t ? "" : t,
                        userId: void 0 === o ? "" : o,
                        refer: "web"
                    }, null != A ? A : {}, r ? {gdLabel: r} : {}))
                }, PLAYER: function (e) {
                    var n = e.roomId, o = e.episodeId, t = e.stage, i = void 0 === t ? v.NB.RECORD : t, r = e.gdLabel, a = void 0 === r ? "" : r;
                    return i !== v.NB.RECORD && i !== v.NB.REPLAY ? E("snssdk8663://webcast_room", (0, s._)({
                        roomId: n,
                        episodeStage: i,
                        enterMethod: "h5"
                    }, null != A ? A : {}, a ? {gdLabel: a} : {})) : E("snssdk8663://webcast_room", (0, s._)({
                        episodeId: o,
                        episodeStage: i,
                        enterFromMerge: "share_reflow",
                        sendShowEventInside: !0
                    }, null != A ? A : {}, a ? {gdLabel: a} : {}))
                }, VSVIDEOCENTER: function () {
                    return "snssdk8663://webcast_lynxview?hide_nav_bar=1&trans_status_bar=1&status_bar_color=white&type=fullscreen&url=https%3A%2F%2Flf-webcast-sourcecdn-tos.bytegecko.com%2Fobj%2Fbyte-gurd-source%2Fwebcast%2Fmono%2Flynx%2Fdouyin_lynx_vs%2Ftemplate%2Fpages%2Fvs_video_center%2Ftemplate.js%3Fenter_from_merge%3Dshare_alert"
                }
            }, I = {
                HOME: function (e) {
                    var n = e.gdLabel;
                    return E("snssdk".concat(f, "://feed"), (0, s._)({
                        refer: "web",
                        gdLabel: void 0 === n ? "click_wap_detail_download_feature" : n
                    }, null != A ? A : {}))
                }, DETAIL: function (e) {
                    var n = e.id, o = e.gdLabel, t = e.appParam;
                    return E("snssdk".concat(f, "://aweme/detail/").concat(n), (0, s._)({
                        refer: "web",
                        gdLabel: void 0 === o ? "click_wap_detail_download_bottom" : o,
                        appParam: void 0 === t ? "" : t,
                        needlaunchlog: 1
                    }, null != A ? A : {}))
                }, USER: function (e) {
                    var n = e.uid, o = e.gdLabel, t = void 0 === o ? "click_wap_live_user_info" : o, i = e.type;
                    return E("snssdk".concat(f, "://user/profile/").concat(n), (0, s._)({
                        refer: "web",
                        type: void 0 === i ? "user" : i,
                        needlaunchlog: "1"
                    }, null != A ? A : {}, t ? {gdLabel: t} : {}))
                }, LIVE: function (e) {
                    var n = e.roomId, o = e.uid, t = e.imChannelInviteId, i = e.gdLabel, r = void 0 === i ? "" : i;
                    return E("snssdk".concat(f, "://webcast_room"), (0, s._)({
                        imChannelInviteId: void 0 === t ? "" : t,
                        userId: void 0 === o ? "" : o,
                        refer: "web"
                    }, null != A ? A : {}, r ? {gdLabel: r, roomId: n} : {roomId: n}))
                }, PLAYER: function (e) {
                    var n = e.roomId, o = e.episodeId, t = e.stage, i = void 0 === t ? v.NB.RECORD : t, r = e.gdLabel, a = void 0 === r ? "" : r;
                    return i !== v.NB.RECORD && i !== v.NB.REPLAY ? E("snssdk".concat(f, "://webcast_room"), (0, s._)({
                        roomId: n,
                        episodeStage: i,
                        enterMethod: "h5"
                    }, null != A ? A : {}, a ? {gdLabel: a} : {})) : E("snssdk".concat(f, "://webcast_room"), (0, s._)({
                        episodeId: o,
                        episodeStage: i,
                        enterFromMerge: "share_reflow",
                        sendShowEventInside: !0
                    }, null != A ? A : {}, a ? {gdLabel: a} : {}))
                }, VSVIDEOCENTER: function () {
                    return "snssdk".concat(f, "://webcast_lynxview?hide_nav_bar=1&trans_status_bar=1&status_bar_color=white&type=fullscreen&url=https%3A%2F%2Flf-webcast-sourcecdn-tos.bytegecko.com%2Fobj%2Fbyte-gurd-source%2Fwebcast%2Fmono%2Flynx%2Fdouyin_lynx_vs%2Ftemplate%2Fpages%2Fvs_video_center%2Ftemplate.js%3Fenter_from_merge%3Dshare_alert")
                }
            }, y = {
                HOME: function (e) {
                    var n = e.gdLabel;
                    return E("snssdk1349://feed", (0, s._)({
                        refer: "web",
                        gdLabel: void 0 === n ? "click_wap_detail_download_feature" : n
                    }, null != A ? A : {}))
                }, DETAIL: function (e) {
                    var n = e.id, o = e.gdLabel, t = e.appParam;
                    return E("snssdk1349://aweme/detail/".concat(n), (0, s._)({
                        refer: "web",
                        gdLabel: void 0 === o ? "click_wap_detail_download_bottom" : o,
                        appParam: void 0 === t ? "" : t,
                        needlaunchlog: 1
                    }, null != A ? A : {}))
                }, USER: function (e) {
                    var n = e.uid, o = e.gdLabel, t = void 0 === o ? "click_wap_live_user_info" : o, i = e.type;
                    return E("snssdk1349://user/profile/".concat(n), (0, s._)({
                        refer: "web",
                        type: void 0 === i ? "user" : i,
                        needlaunchlog: "1"
                    }, null != A ? A : {}, t ? {gdLabel: t} : {}))
                }, LIVE: function (e) {
                    var n = e.roomId, o = e.uid, t = e.imChannelInviteId, i = e.gdLabel, r = void 0 === i ? "" : i;
                    return E("snssdk1349://webcast_room", (0, s._)({
                        roomId: n,
                        imChannelInviteId: void 0 === t ? "" : t,
                        userId: void 0 === o ? "" : o,
                        refer: "web"
                    }, null != A ? A : {}, r ? {gdLabel: r} : {}))
                }, PLAYER: function (e) {
                    var n = e.roomId, o = e.episodeId, t = e.stage, i = void 0 === t ? v.NB.RECORD : t, r = e.gdLabel, a = void 0 === r ? "" : r;
                    return i !== v.NB.RECORD && i !== v.NB.REPLAY ? E("snssdk1349://webcast_room", (0, s._)({
                        roomId: n,
                        episodeStage: i,
                        enterMethod: "h5"
                    }, null != A ? A : {}, a ? {gdLabel: a} : {})) : E("snssdk1349://webcast_room", (0, s._)({
                        episodeId: o,
                        episodeStage: i,
                        enterFromMerge: "share_reflow",
                        sendShowEventInside: !0
                    }, null != A ? A : {}, a ? {gdLabel: a} : {}))
                }, VSVIDEOCENTER: function () {
                    return "snssdk1349://webcast_lynxview?hide_nav_bar=1&trans_status_bar=1&status_bar_color=white&type=fullscreen&url=https%3A%2F%2Flf-webcast-sourcecdn-tos.bytegecko.com%2Fobj%2Fbyte-gurd-source%2Fwebcast%2Fmono%2Flynx%2Fdouyin_lynx_vs%2Ftemplate%2Fpages%2Fvs_video_center%2Ftemplate.js%3Fenter_from_merge%3Dshare_alert"
                }
            }, w = 5e3, L = 300, S = {
                HOMEPAGE: "homepage",
                DOWNLOAD: "download",
                LIVE_END: "live_end",
                NOT_AUTH: "not_auth",
                FINISH: "finish",
                PAUSE: "pause",
                DEFAULT: "default"
            }, R = {
                TOP_BUTTON: "top_button",
                BOTTOM_BUTTON: "bottom_button",
                DOWNLOAD: "download",
                FEED: "feed",
                ENTER_APP: "enter_app",
                LOG_IN: "login_in",
                WATCH_FULL: "watch_full",
                CONTINUE_PLAY: "continue_play",
                PLAY_AGAIN: "play_again"
            }, P = {UN_KNOWN: "unknown", Formal: "formal", SPECIAL: "special"}, k = {UN_KNOWN: "unknown", NORMAL: "normal", PILOT_FILE: "pilot_file"},
            C = {IS_VERTICAL_SCREEN: 1, 1: "IS_VERTICAL_SCREEN", NOT_VERTICAL_SCREEN: 0, 0: "NOT_VERTICAL_SCREEN"},
            T = {LAST_CONTENT: "last_content", LIVING: "living", PREMIERE_ING: "premiere_ing"}, x = {ld: "SD1", sd: "SD2", hd: "HD1", uhd: "FULL_HD1"}
    }, 60624: function (e, n, o) {
        o.d(n, {
            BC: function () {
                return r
            }, NB: function () {
                return a
            }, rF: function () {
                return t
            }, sZ: function () {
                return d
            }, vc: function () {
                return l
            }, xM: function () {
                return i
            }
        });
        var t = {
            READY: 0,
            0: "READY",
            LOADING: 1,
            1: "LOADING",
            PLAYING: 2,
            2: "PLAYING",
            PAUSED: 3,
            3: "PAUSED",
            STOPPED: 4,
            4: "STOPPED",
            ERROR: 5,
            5: "ERROR"
        }, i = {PREPARE: 1, 1: "PREPARE", LIVING: 2, 2: "LIVING", PAUSE: 3, 3: "PAUSE", FINISH: 4, 4: "FINISH"}, r = {
            episodeStageUnknown: 0,
            0: "episodeStageUnknown",
            episodeStageLive: 1,
            1: "episodeStageLive",
            episodeStagePremiere: 2,
            2: "episodeStagePremiere",
            episodeStageRecord: 3,
            3: "episodeStageRecord"
        }, a = {UNKNOWN: 0, 0: "UNKNOWN", LIVE: 1, 1: "LIVE", FIRST: 2, 2: "FIRST", RECORD: 3, 3: "RECORD", REPLAY: 4, 4: "REPLAY"}, l = {
            episodeRecordTypeUnknown: 0,
            0: "episodeRecordTypeUnknown",
            episodeRecordTypeNormal: 1,
            1: "episodeRecordTypeNormal",
            episodeRecordTypeLatest: 2,
            2: "episodeRecordTypeLatest",
            episodeRecordTypeGuide: 3,
            3: "episodeRecordTypeGuide"
        }, d = 1128
    }, 68727: function (e, n, o) {
        o.d(n, {
            DP: function () {
                return a
            }, Pd: function () {
                return l
            }, T8: function () {
                return r
            }
        });
        var t = o(12926), i = (0, t.createContext)({app: "douyin", theme: "douyin", fromOppo: !1}), r = function () {
            return (0, t.useContext)(i)
        }, a = function () {
            return (0, t.useContext)(i).theme
        }, l = function (e) {
            var n = e.children, o = e.value, r = (0, t.useMemo)(function () {
                return {app: o, theme: o, fromOppo: !1}
            }, [o]);
            return (0, t.createElement)("div", {className: o}, (0, t.createElement)(i.Provider, {value: r}, n))
        };
        i.Consumer
    }, 61570: function (e, n, o) {
        o.d(n, {
            $b: function () {
                return p
            }, IT: function () {
                return v
            }, r6: function () {
                return f
            }, rY: function () {
                return m
            }, xd: function () {
                return c
            }
        });
        var t = o(26991), i = o(12926), r = o(8689), a = o.n(r), l = o(98474), d = o(55791), s = new (a()), u = (0, i.createContext)({player: {}}),
            c = function () {
                return (0, i.useContext)(u).playerEventBus
            }, v = function () {
                return (0, i.useContext)(u).query
            }, m = function () {
                return "douyin_h5_search" === v().scene_from
            }, p = function () {
                return (0, i.useContext)(u).id
            }, f = function (e) {
                var n = e.children, o = e.webId, r = void 0 === o ? "" : o, a = (0, i.useRef)(), c = (0, i.useRef)(), v = (0, i.useMemo)(function () {
                    return {
                        playerEventBus: new t.EventEmitter2({wildcard: !1}),
                        query: (0, l.uB)(),
                        id: (0, d.z)().location.pathname.split("/")[(0, d.z)().location.pathname.split("/").length - 1],
                        webId: r,
                        player: {
                            getPlayer: function () {
                                return a.current
                            }, setPlayer: function (e) {
                                a.current = e
                            }, getLogger: function () {
                                return c.current
                            }, setLogger: function (e) {
                                c.current = e
                            }
                        },
                        ua: s
                    }
                }, [r]);
                return (0, i.useEffect)(function () {
                    window.__LIVING_PLAYER_REF__ = a
                }, []), (0, i.createElement)(u.Provider, {value: v}, n)
            }
    }, 54272: function (e, n, o) {
        o.d(n, {
            Pd: function () {
                return t.Pd
            }, r6: function () {
                return u.r6
            }, m4: function () {
                return c.m
            }, Ts: function () {
                return p
            }, vf: function () {
                return s
            }, T8: function () {
                return t.T8
            }, Kc: function () {
                return c.K
            }, N5: function () {
                return m
            }, $b: function () {
                return u.$b
            }, PG: function () {
                return d
            }, xd: function () {
                return u.xd
            }, IT: function () {
                return u.IT
            }, rY: function () {
                return u.rY
            }, DP: function () {
                return t.DP
            }
        });
        var t = o(68727), i = o(17423), r = o(12926), a = o(60624).rF.READY, l = (0, r.createContext)([a, function () {
        }]), d = function () {
            return (0, r.useContext)(l)
        }, s = function (e) {
            var n = e.initialPlayState, o = e.children, t = (0, i._)((0, r.useState)(void 0 === n ? a : n), 2), d = t[0], s = t[1];
            return (0, r.createElement)(l.Provider, {
                value: (0, r.useMemo)(function () {
                    return [d, s]
                }, [d])
            }, o)
        }, u = o(61570), c = o(4190), v = (0, r.createContext)({pageShowCollectTea: !1}), m = function () {
            return (0, r.useContext)(v)
        }, p = function (e) {
            var n = e.children, o = (0, i._)((0, r.useState)(!1), 2), t = o[0], a = o[1], l = (0, i._)((0, r.useState)(""), 2), d = l[0], s = l[1],
                u = (0, i._)((0, r.useState)(0), 2), c = u[0], m = u[1], p = (0, i._)((0, r.useState)(""), 2), f = p[0], A = p[1],
                h = (0, i._)((0, r.useState)(!1), 2), g = h[0], N = h[1];
            return (0, r.createElement)(v.Provider, {
                value: {
                    pageShowCollectTea: t,
                    setPageShowCollectTea: a,
                    roomId: d,
                    setRoomId: s,
                    startPlayTime: c,
                    setStartPlayTime: m,
                    guidanceText: f,
                    setGuidanceText: A,
                    isVs: g,
                    setIsVs: N
                }
            }, n)
        }
    }, 4190: function (e, n, o) {
        o.d(n, {
            m: function () {
                return g
            }, K: function () {
                return A
            }
        });
        var t = o(69798), i = o(17423), r = o(87813), a = o(25769), l = o(40269), d = o(72537), s = o(55791), u = function () {
            function e(n) {
                var o = n.protocol;
                (0, r._)(this, e), this._osType = "iphone", this._isWeixin = !1, this._isWeibo = !1, this._isInApp = !1, this._isQQ = !1, this._isSafari = !1, this._link = "", this._vsValid = (0, d.xe)(), this._inIframe = !1, this._protocol = o, this._inIframe = (0, s.z)().self !== (0, s.z)().top
            }

            var n = e.prototype;
            return n.jump = function (e) {
                return this._link = e && "string" == typeof e ? e : "", this
            }, n.osTypeInit = function () {
                var e = (0, s.z)().navigator.userAgent.toLocaleLowerCase();
                -1 !== e.indexOf("android") ? this._osType = "android" : -1 !== e.indexOf("iphone") ? this._osType = "iphone" : this._osType = "pc", e.match(/micromessenger/gi) ? this._isWeixin = !0 : e.match(/weibo/gi) ? this._isWeibo = !0 : e.match(/qq\//gi) ? this._isQQ = !0 : e.match(/bytelocale/gi) ? this._isInApp = !0 : e.match(/Safari/gi) && (this._isSafari = !1)
            }, n.iframeHref = function (e) {
                var n = document.getElementsByTagName("body"), o = document.getElementById("app_iframe");
                if (o) {
                    var t = o.parentNode;
                    t && t.removeChild(o)
                }
                var i = document.createElement("iframe"), r = document.createElement("a");
                r.setAttribute("href", e), r.click(), i.id = "app_iframe", i.src = e, i.style.cssText = "display: none", n[0].appendChild(i)
            }, n.backToAppV2 = function (e) {
                if (this.osTypeInit(), "android" === this._osType) {
                    var n, o = new Date().valueOf(), t = "_t=".concat(o);
                    e.indexOf("?") >= 0 ? e += "&".concat(t) : e += "?".concat(t)
                }
                var i = "".concat(this._link + (this._link.indexOf("?") >= 0 ? "&" : "?"), "scheme=").concat(encodeURIComponent(e));
                document.addEventListener("visibilitychange", function () {
                    ("hidden" === document.visibilityState || document.hidden) && clearTimeout(n)
                }), this.goHerf(i)
            }, n.goHerf = function (e) {
                this._inIframe ? (window.parent.postMessage({open: e}, "*"), setTimeout(function () {
                    window.location.href = e
                }, 1500)) : location.href = e
            }, n.isNotInBrowser = function () {
                return this._isQQ || this._isWeibo || this._isWeixin
            }, n.backToApp = function () {
                var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = "".concat(this._protocol, "://").concat(n, "?").concat((0, a.stringify)((0, l.eR)(o), "&", "=", {
                        encodeURIComponent: function (e) {
                            return e
                        }
                    })), i = t;
                if (this.osTypeInit(), "iphone" === this._osType) {
                    if (this._isWeixin) {
                        var r = "".concat(this._link + (this._link.indexOf("?") >= 0 ? "&" : "?"), "ios_scheme=").concat(encodeURIComponent(t));
                        location.href = r
                    } else {
                        var s = (0, d.yb)();
                        if (s && s.length && s[0] < 9) {
                            this.iframeHref(t);
                            return
                        }
                        var u = 400;
                        s && s.length > 0 && 10 === s[0] && (u = 1e3), setTimeout(function () {
                            document.webkitHidden || (location.href = e._link)
                        }, u)
                    }
                } else if ("android" === this._osType) {
                    var c = new Date().valueOf(), v = "_t=".concat(c);
                    if (i.indexOf("?") >= 0 ? i += "&".concat(v) : i += "?".concat(v), this._isWeixin) {
                        var m = "".concat(this._link + (this._link.indexOf("?") >= 0 ? "&" : "?"), "android_scheme=").concat(encodeURIComponent(i));
                        location.href = m
                    } else this.iframeHref(i), setTimeout(function () {
                        window.document.hidden || (location.href = e._link)
                    }, 400)
                } else location.href = "https://www.kuailepipixia.com/"
            }, e
        }(), c = o(12926), v = o(14147), m = o(61570), p = o(68727), f = (0, c.createContext)({}), A = function () {
            return (0, c.useContext)(f)
        }, h = new u({}), g = function (e) {
            var n = e.children, o = (0, p.DP)(), r = (0, i._)((0, c.useState)(!1), 2), a = r[0], l = r[1];
            return ((0, c.useEffect)(function () {
                window.ToutiaoJSBridge && window.ToutiaoJSBridge.call("appInfo", {}, function (e) {
                    var n;
                    (null == e ? void 0 : null === (n = e.__data) || void 0 === n ? void 0 : n.sdkEdition) && l(!0)
                })
            }, []), (0, m.rY)()) ? (0, c.createElement)(f.Provider, {
                value: {
                    jumpProfile: function (e) {
                        (0, t._)(e)
                    }, jumpLive: function (e) {
                        (0, t._)(e)
                    }, jumpPlayer: function () {
                    }, jumpHome: function () {
                    }
                }
            }, n) : "douyin" === o ? (0, c.createElement)(f.Provider, {
                value: {
                    jumpProfile: function (e) {
                        var n = e.uid, o = e.gdLabel;
                        h.jump(a ? "https://z.douyin.com/tfTX" : v.sL.BANNER_TOP).backToAppV2(v.yl.USER({uid: n, gdLabel: void 0 === o ? "" : o}))
                    }, jumpLive: function (e) {
                        var n = e.uid, o = e.roomId, t = e.imChannelInviteId;
                        h.jump(a ? "https://z.douyin.com/tfTX" : v.sL.BANNER_TOP).backToAppV2(v.yl.LIVE({roomId: o, uid: n, imChannelInviteId: t}))
                    }, jumpPlayer: function (e) {
                        var n = e.roomId, o = e.episodeId, t = e.stage, i = e.gdLabel;
                        h.jump(a ? "https://z.douyin.com/tfTX" : v.sL.BANNER_TOP).backToAppV2(v.yl.PLAYER({
                            roomId: n,
                            episodeId: o,
                            stage: void 0 === t ? 0 : t,
                            gdLabel: i
                        }))
                    }, jumpHome: function () {
                        h.jump(a ? "https://z.douyin.com/tfTX" : v.sL.BANNER_TOP).backToAppV2(v.yl.HOME({}))
                    }, jumpVSVideoCenter: function () {
                        h.jump(a ? "https://z.douyin.com/tfTX" : v.sL.BANNER_TOP).backToAppV2(v.yl.VSVIDEOCENTER())
                    }
                }
            }, n) : "awemehotsoon" === o ? (0, c.createElement)(f.Provider, {
                value: {
                    jumpProfile: function (e) {
                        var n = e.uid, o = e.gdLabel;
                        h.jump(v.Kb.BANNER_TOP).backToAppV2(v.uY.USER({uid: n, gdLabel: void 0 === o ? "" : o}))
                    }, jumpLive: function (e) {
                        var n = e.uid, o = e.roomId, t = e.imChannelInviteId;
                        h.jump(v.Kb.BANNER_TOP).backToAppV2(v.uY.LIVE({roomId: o, uid: n, imChannelInviteId: t}))
                    }, jumpPlayer: function (e) {
                        var n = e.roomId, o = e.episodeId, t = e.stage, i = e.gdLabel;
                        h.jump(v.Kb.BANNER_TOP).backToAppV2(v.uY.PLAYER({roomId: n, episodeId: o, stage: void 0 === t ? 0 : t, gdLabel: i}))
                    }, jumpHome: function () {
                        h.jump(v.Kb.BANNER_TOP).backToAppV2(v.uY.HOME({}))
                    }, jumpVSVideoCenter: function () {
                        h.jump(v.Kb.BANNER_TOP).backToAppV2(v.uY.VSVIDEOCENTER())
                    }
                }
            }, n) : "duoshan" === o ? (0, c.createElement)(f.Provider, {
                value: {
                    jumpProfile: function (e) {
                        var n = e.uid, o = e.gdLabel;
                        h.jump(v.qH.BANNER_TOP).backToAppV2(v.o3.USER({uid: n, gdLabel: void 0 === o ? "" : o}))
                    }, jumpLive: function (e) {
                        var n = e.uid, o = e.roomId, t = e.imChannelInviteId;
                        h.jump(v.qH.BANNER_TOP).backToAppV2(v.o3.LIVE({roomId: o, uid: n, imChannelInviteId: t}))
                    }, jumpPlayer: function (e) {
                        var n = e.roomId, o = e.episodeId, t = e.stage, i = e.gdLabel;
                        h.jump(v.qH.BANNER_TOP).backToAppV2(v.uY.PLAYER({roomId: n, episodeId: o, stage: void 0 === t ? 0 : t, gdLabel: i}))
                    }, jumpHome: function () {
                        h.jump(v.qH.BANNER_TOP).backToAppV2(v.o3.HOME({}))
                    }, jumpVSVideoCenter: function () {
                        h.jump(v.qH.BANNER_TOP).backToAppV2(v.o3.VSVIDEOCENTER())
                    }
                }
            }, n) : null
        }
    }, 67663: function () {
    }
}]);