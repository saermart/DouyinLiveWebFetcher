(self.webpackChunkpc_live_next = self.webpackChunkpc_live_next || []).push([[600], {
    1988: e => {
        e.exports = '<svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#__1gmRHQx__clip0_215_114412)"><path d="M1.8418 6.99989C1.8418 9.57261 3.9274 11.6582 6.50013 11.6582C9.07286 11.6582 11.1585 9.57261 11.1585 6.99989C11.1585 4.42716 9.07286 2.34155 6.50013 2.34155C4.44898 2.34155 2.70746 3.66724 2.08564 5.50854" stroke="currentColor" stroke-width="0.9"></path><path d="M1.80591 3.02783V5.37788H4.12738" stroke="currentColor" stroke-width="0.9"></path></g><defs><clipPath id="__1gmRHQx__clip0_215_114412"><rect width="13" height="13" fill="currentColor" transform="translate(0 0.5)"></rect></clipPath></defs></svg>'
    }
    ,
    29226: (e, n, t) => {
        "use strict";
        t.r(n),
            t.d(n, {
                default: () => $t
            }),
            t(52675),
            t(2008),
            t(51629),
            t(67945),
            t(84185),
            t(83851),
            t(81278),
            t(79432),
            t(26099),
            t(23500);
        var r = t(64467)
            , a = t(10467)
            , i = (t(62010),
            t(54756))
            , u = t.n(i)
            , o = t(20641)
            , l = t(53751)
            , c = t(50953)
            , s = t(22720)
            , v = t(97786)
            , f = t(47272)
            , d = (t(89463),
            t(28706),
            t(90033))
            , p = t(22372)
            , h = t(8284)
            , m = t(12585)
            , g = t(14663)
            , k = t(92500)
            , y = t(97189)
            , w = t(18883)
            , b = t(57142)
            , _ = t(36582)
            , x = t(67925)
            , L = t(71863)
            , A = {
            class: "flex-col flex-1 wrapper"
        }
            , S = {
            class: "flex-col relative flex-1 of-h"
        }
            , C = {
            class: "chat-actions"
        };
        const E = (0,
            o.pM)({
            __name: "SideBar",
            props: {
                watchingList: {},
                watchingCount: {},
                liveStream: {},
                isFullScreen: {
                    type: Boolean
                }
            },
            setup: function (e, n) {
                var t = n.expose
                    , r = e
                    , a = (0,
                    c.KR)()
                    , i = (0,
                    c.KR)()
                    , u = (0,
                    o.WQ)(b.$m)
                    , l = (0,
                    _.ZW)({
                    title: "".concat(u.value.name ? "".concat(u.value.name, "-") : "", "快手直播"),
                    meta: [{
                        name: "keywords",
                        content: u.value.id ? "".concat(x.R, ",").concat(u.value.name, ",").concat(u.value.id) : x.R
                    }, {
                        name: "description",
                        content: u.value.id ? "快手直播".concat(u.value.id, "，为您提供精彩直播，").concat(u.value.description) : "快手直播，为您提供精彩直播"
                    }]
                }).meta;
                return (0,
                    o.wB)(u, (function (e) {
                        e && (l.title = "".concat(e.name, "-快手直播"),
                            l.keywords = e.id ? "".concat(x.R, ",").concat(e.name, ",").concat(e.id) : x.R,
                            l.description = e.id ? "快手直播".concat(e.id, "，为您提供精彩直播，").concat(e.description) : "快手直播，为您提供精彩直播")
                    }
                )),
                    (0,
                        o.wB)(a, (function (e) {
                            (0,
                                L.Co)(e, i.value)
                        }
                    )),
                    t({
                        coPilotRef: a
                    }),
                    function (e, n) {
                        var t;
                        return (0,
                            o.uX)(),
                            (0,
                                o.CE)("div", {
                                id: "liveroom__sidebar",
                                ref_key: "chatHistoryRef",
                                ref: i,
                                class: (0,
                                    d.C4)(["sidebar flex-col", {
                                    hide: r.isFullScreen
                                }])
                            }, [(0,
                                o.Lk)("div", {
                                ref_key: "coPilotRef",
                                ref: a,
                                class: (0,
                                    d.C4)(["co-pilot", {
                                    hide: !(0,
                                        c.R1)(L.uk) || (0,
                                        c.R1)(L.Rz)
                                }])
                            }, null, 2), (0,
                                o.Lk)("div", A, [(0,
                                o.bF)(p.A, {
                                announcement: null === (t = e.liveStream) || void 0 === t ? void 0 : t.announcement
                            }, null, 8, ["announcement"]), (0,
                                o.bF)(h.A, {
                                "watching-list": null == r ? void 0 : r.watchingList,
                                "watching-count": null == r ? void 0 : r.watchingCount
                            }, null, 8, ["watching-list", "watching-count"]), (0,
                                o.bF)(y.A), (0,
                                o.Lk)("div", S, [(0,
                                o.bF)(w.A), (0,
                                o.bF)(m.A), (0,
                                o.Lk)("div", C, [(0,
                                o.bF)(g.A), (0,
                                o.bF)(k.A)])])])], 2)
                    }
            }
        });
        var R = t(66262);
        const I = (0,
            R.A)(E, [["__scopeId", "data-v-56460e84"]]);
        var T = t(38308)
            , M = t(1602)
            , H = t(16265)
            , W = t(45458)
            , V = (t(74423),
            t(62062),
            t(34782),
            t(15086),
            t(23288),
            t(21699),
            t(19716))
            , O = t(75220)
            , P = t(92695)
            , G = t(12947)
            , F = t(34905)
            , B = t(62535)
            , N = t(222)
            , D = t(79672)
            , Z = t(48870)
            , X = t(72708)
            , U = t(37148)
            , Q = t.n(U)
            , K = (0,
            v.rXt)(Z.gO, {})
            , j = (0,
            v.rXt)(Z.Q8, {})
            , Y = (0,
            v.rXt)(Z.v$, [])
            , q = [G.vX.SUCCESS, G.vX.LIVE_AUTHOR_NOT_ON_LIVE, G.vX.BE_BANNED, G.vX.BE_TICK_OUT, G.vX.SECRET_ROOM]
            , z = (0,
            V.nY)("liveroom", {
            state: function () {
                return {
                    activeIndex: 0,
                    websocketUrls: [],
                    token: "",
                    noticeList: [],
                    playList: [],
                    loading: !1
                }
            },
            actions: {
                prefetch: function (e) {
                    var n = this;
                    return (0,
                        a.A)(u().mark((function t() {
                            var r, a, i, o, l;
                            return u().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if ("string" != typeof e && (r = (0,
                                                    O.lq)(),
                                                    a = r.params,
                                                    i = void 0 === a ? {} : a,
                                                    o = r.query,
                                                    l = void 0 === o ? {} : o,
                                                    e = (null == i ? void 0 : i.principalId) || (null == l ? void 0 : l.principalId)),
                                                e && "null" !== e) {
                                                    t.next = 3;
                                                    break
                                                }
                                                throw G.vX.NO_AUTHOR;
                                            case 3:
                                                return t.next = 5,
                                                    n.getLiveDetail(e);
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t)
                        }
                    )))()
                },
                getLiveDetail: function (e, n) {
                    var t = this;
                    return (0,
                        a.A)(u().mark((function r() {
                            var a, i, o, l, c, s, v, f;
                            return u().wrap((function (r) {
                                    for (; ;)
                                        switch (r.prev = r.next) {
                                            case 0:
                                                return r.prev = 0,
                                                    r.next = 3,
                                                    (0,
                                                        P.gf)({
                                                        principalId: e,
                                                        authToken: n
                                                    });
                                            case 3:
                                                if (a = r.sent.data,
                                                    i = a.result,
                                                    o = a.liveStream,
                                                    l = a.author,
                                                    c = a.gameInfo,
                                                    s = a.noticeList,
                                                    v = a.config,
                                                    f = a.websocketInfo,
                                                !i || q.includes(i)) {
                                                    r.next = 13;
                                                    break
                                                }
                                                throw i;
                                            case 13:
                                                if (l) {
                                                    r.next = 15;
                                                    break
                                                }
                                                throw G.vX.NO_AUTHOR;
                                            case 15:
                                                return t.noticeList = null != s ? s : [],
                                                    t.playList[t.activeIndex] = {
                                                        liveStream: o,
                                                        author: l,
                                                        gameInfo: c,
                                                        isLiving: !!o.id,
                                                        authToken: n,
                                                        config: v,
                                                        websocketInfo: f,
                                                        status: {
                                                            forbiddenState: i
                                                        }
                                                    },
                                                    r.abrupt("return", !0);
                                            case 20:
                                                return r.prev = 20,
                                                    r.t0 = r.catch(0),
                                                    t.playList.push({
                                                        liveStream: {},
                                                        author: {},
                                                        gameInfo: {},
                                                        isLiving: !1,
                                                        errorType: (0,
                                                            N.Gs)(r.t0)
                                                    }),
                                                    r.abrupt("return", !1);
                                            case 24:
                                            case "end":
                                                return r.stop()
                                        }
                                }
                            ), r, null, [[0, 20]])
                        }
                    )))()
                },
                loadMore: function () {
                    var e = this;
                    return (0,
                        a.A)(u().mark((function n() {
                            var t, r, a, i, o, l, c;
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                return 0 === Object.keys(K.value).length && (a = (0,
                                                    H.Pj)(X.im),
                                                    K.value = null !== (r = a.config["pcLive.webConfig.defaultPreference"]) && void 0 !== r ? r : {},
                                                    Q().set(Z.gO, K.value)),
                                                    i = Object.keys(K.value).map((function (e) {
                                                            return {
                                                                gameId: K.value[e].id,
                                                                totalStayLength: K.value[e].totalStayLength
                                                            }
                                                        }
                                                    )),
                                                    n.next = 4,
                                                    (0,
                                                        P.uS)({
                                                        queryFollowing: !0,
                                                        followingWeight: 50
                                                    }, i.slice(0, 10));
                                            case 4:
                                                for (l in o = n.sent.data.list,
                                                    j.value)
                                                    (0,
                                                        D.A)(j.value[l].updateTime + 9e5, new Date) && j.value[l].totalStayLength >= 3 && delete j.value[l];
                                                if (o && 0 !== (null == o ? void 0 : o.length)) {
                                                    n.next = 8;
                                                    break
                                                }
                                                return n.abrupt("return");
                                            case 8:
                                                c = o.filter((function (n) {
                                                        var t, r, a = n.author, i = n.gameInfo;
                                                        return !(Y.value.includes(a.id) || e.playList.some((function (e) {
                                                                return e.author.id === a.id
                                                            }
                                                        )) || (null !== (t = j.value[i.id]) && void 0 !== t && t.totalStayLength,
                                                        (null === (r = j.value[i.id]) || void 0 === r ? void 0 : r.totalStayLength) > 3))
                                                    }
                                                )),
                                                    (t = e.playList).push.apply(t, (0,
                                                        W.A)(c));
                                            case 10:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))()
                },
                getWebsocketInfo: function (e) {
                    var n = this;
                    return (0, a.A)(u().mark((function t() {
                            var r, a, i, o;
                            return u().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (e) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                if (n.loading = !0,
                                                    n.playList[n.activeIndex]) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 5:
                                                return t.next = 7,
                                                    (0,
                                                        P.uZ)({
                                                        liveStreamId: e
                                                    });
                                            case 7:
                                                return r = t.sent.data,
                                                    a = r.result,
                                                    i = r.token,
                                                    o = r.websocketUrls,
                                                    n.playList[n.activeIndex].websocketInfo = {
                                                        webSocketAddresses: o,
                                                        token: i
                                                    },
                                                    n.loading = !1,
                                                    t.abrupt("return", a);
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t)
                        }
                    )))()
                },
                changeFollowStatus: function (e) {
                    var n = this;
                    return (0,
                        a.A)(u().mark((function t() {
                            var r;
                            return u().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    (0,
                                                        B.t)();
                                            case 2:
                                                if (!t.sent) {
                                                    t.next = 7;
                                                    break
                                                }
                                                return t.next = 5,
                                                    (0,
                                                        F.Yr)({
                                                        principalId: n.principalId,
                                                        type: e
                                                    });
                                            case 5:
                                                r = t.sent.data.followStatus,
                                                    n.author.followStatus = r;
                                            case 7:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t)
                        }
                    )))()
                },
                checkFollowStatus: function () {
                    var e = this;
                    return (0,
                        a.A)(u().mark((function n() {
                            var t;
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2,
                                                    (0,
                                                        F.kt)({
                                                        principalId: e.currentLiving.author.id
                                                    });
                                            case 2:
                                                t = n.sent.data,
                                                    e.author.followStatus = t.followStatus;
                                            case 4:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))()
                },
                checkLiveStatus: function () {
                },
                finishLiving: function (e) {
                    this.playList[e].isLiving = !1
                },
                checkPassword: function (e) {
                    var n = this;
                    return (0,
                        a.A)(u().mark((function t() {
                            var r, a, i;
                            return u().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    (0,
                                                        P.O7)(n.playList[n.activeIndex].author.id, e);
                                            case 2:
                                                if (r = t.sent.data,
                                                    a = r.error_msg,
                                                    !(i = r.authToken)) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.next = 8,
                                                    n.getLiveDetail(n.playList[n.activeIndex].author.id, i);
                                            case 8:
                                                return t.abrupt("return", "");
                                            case 9:
                                                return t.abrupt("return", a || "未知错误，无法成功");
                                            case 11:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), t)
                        }
                    )))()
                },
                refetchLiveData: function () {
                    var e = this;
                    return (0,
                        a.A)(u().mark((function n() {
                            var t;
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2,
                                                    e.getLiveDetail(null === (t = e.currentLiving.author) || void 0 === t ? void 0 : t.id, e.currentLiving.authToken);
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))()
                },
                fetchLiveStatus: function () {
                    var e = this;
                    return (0,
                        a.A)(u().mark((function n() {
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2,
                                                    (0,
                                                        P.px)(e.currentLiving.liveStream.id);
                                            case 2:
                                                return n.abrupt("return", n.sent);
                                            case 3:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))()
                },
                clear: function () {
                    this.playList.length = 0
                },
                getCommentHistory: function (e) {
                    var n = arguments
                        , t = this;
                    return (0,
                        a.A)(u().mark((function r() {
                            var a, i;
                            return u().wrap((function (r) {
                                    for (; ;)
                                        switch (r.prev = r.next) {
                                            case 0:
                                                return a = n.length > 1 && void 0 !== n[1] ? n[1] : {
                                                    1: 0,
                                                    2: 0
                                                },
                                                    r.next = 3,
                                                    (0,
                                                        P.iU)(e, a);
                                            case 3:
                                                return i = r.sent,
                                                    t.feedTypeCursorMap = i.feedTypeCursorMap,
                                                    r.abrupt("return", i.backTraceFeedMap);
                                            case 6:
                                            case "end":
                                                return r.stop()
                                        }
                                }
                            ), r)
                        }
                    )))()
                }
            },
            getters: {
                currentLiving: function (e) {
                    var n;
                    return null !== (n = e.playList[e.activeIndex]) && void 0 !== n ? n : {
                        liveStream: {},
                        author: {},
                        gameInfo: {},
                        isLiving: !1,
                        errorType: {},
                        authToken: "",
                        config: {
                            noticeDisplayDelay: 3e3,
                            enableWebHistoryFeed: !1
                        },
                        websocketInfo: {
                            webSocketAddresses: [],
                            token: ""
                        }
                    }
                }
            }
        })
            , J = t(68090)
            , $ = t.n(J)
            , ee = (t(2259),
            t(23418),
            t(64346),
            t(23792),
            t(72712),
            t(54554),
            t(58940),
            t(27495),
            t(38781),
            t(47764),
            t(39202),
            t(62953),
            t(92901))
            , ne = t(23029)
            , te = t(7350)
            , re = t.n(te)
            , ae = t(94506)
            , ie = t.n(ae)
            , ue = t(60895)
            , oe = t.n(ue)
            , le = (t(50113),
            t(26910),
            t(59089),
            t(69085),
            2e3)
            , ce = re()((function (e) {
                oe()((function () {
                        return function (e) {
                            var n = Date.now();
                            e.value = e.value.filter((function (e) {
                                    var t = e.startShowTime
                                        , r = e.isShowing
                                        , a = e.slotDisplayDuration;
                                    return !r || n - t < a
                                }
                            )),
                            e.value && ve(e, [])
                        }(e)
                    }
                ), le)
            }
        ), le)
            , se = (0,
            ee.A)((function e(n) {
                var t = n.giftId
                    , a = n.batchSize
                    , i = n.mergeKey
                    , u = n.comboCount
                    , o = n.slotDisplayDuration
                    , l = n.rank
                    , c = n.expireDuration
                    , s = n.styleType
                    , v = n.user;
                (0,
                    ne.A)(this, e),
                    (0,
                        r.A)(this, "batchSize", void 0),
                    (0,
                        r.A)(this, "comboCount", void 0),
                    (0,
                        r.A)(this, "expireDuration", void 0),
                    (0,
                        r.A)(this, "giftId", void 0),
                    (0,
                        r.A)(this, "mergeKey", void 0),
                    (0,
                        r.A)(this, "rank", void 0),
                    (0,
                        r.A)(this, "slotDisplayDuration", void 0),
                    (0,
                        r.A)(this, "styleType", void 0),
                    (0,
                        r.A)(this, "isShowing", void 0),
                    (0,
                        r.A)(this, "startShowTime", void 0),
                    (0,
                        r.A)(this, "addTime", void 0),
                    (0,
                        r.A)(this, "bgClass", void 0),
                    (0,
                        r.A)(this, "minGiftDisplay", void 0),
                    (0,
                        r.A)(this, "unitPrice", void 0),
                    (0,
                        r.A)(this, "userName", void 0),
                    (0,
                        r.A)(this, "eid", void 0),
                    (0,
                        r.A)(this, "headUrl", void 0),
                    this.giftId = t,
                    this.batchSize = a,
                    this.mergeKey = i,
                    this.comboCount = u,
                o || (o = 0),
                    this.slotDisplayDuration = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                            , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        if (1 === e)
                            return 1e3;
                        var t = (e - 1) * n;
                        return t < 10 ? 1e3 : t < 188 ? 2e3 : t < 1314 ? 4e3 : 1 === n ? 5e3 : 6e3
                    }(l, a),
                    this.rank = l,
                    this.expireDuration = c || 0,
                    this.styleType = s,
                    this.userName = v.userName,
                    this.addTime = Date.now(),
                    this.startShowTime = 0,
                    this.isShowing = !1,
                    this.eid = v.principalId,
                    this.headUrl = v.headUrl
            }
        ));

        function ve(e, n) {
            for (var t = function (e, n) {
                return n.forEach((function (n) {
                        var t;
                        if (t = e.find((function (e) {
                                return e.mergeKey && n.mergeKey === e.mergeKey
                            }
                        )))
                            t.rank = ie()([t.rank, n.rank]),
                                t.comboCount = ie()([t.comboCount, n.comboCount]),
                                t.expireDuration = ie()([t.expireDuration, n.expireDuration]),
                                t.isShowing ? t.startShowTime = Date.now() : t.addTime = Date.now();
                        else {
                            var r = new se(n);
                            e.push(r)
                        }
                    }
                )),
                    e
            }(e.value, n), r = 0; r < 2 && t[r]; r++)
                t[r].isShowing || (t[r] = Object.assign(t[r], {
                    isShowing: !0,
                    startShowTime: Date.now()
                }));
            ce(e),
                t.sort(fe),
                e.value = t
        }

        function fe(e, n) {
            return e.isShowing === n.isShowing ? e.rank > n.rank ? -1 : 1 : e.isShowing ? 3 * e.rank >= n.rank && e.startShowTime + le < Date.now() ? -1 : 1 : e.rank > 3 * n.rank && n.startShowTime + le < Date.now() ? -1 : 1
        }

        var de = t(40303)
            , pe = t(65641);

        function he(e, n) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
                if (Array.isArray(e) || (t = function (e, n) {
                    if (e) {
                        if ("string" == typeof e)
                            return me(e, n);
                        var t = {}.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name),
                            "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? me(e, n) : void 0
                    }
                }(e)) || n && e && "number" == typeof e.length) {
                    t && (e = t);
                    var r = 0
                        , a = function () {
                    };
                    return {
                        s: a,
                        n: function () {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, u = !0, o = !1;
            return {
                s: function () {
                    t = t.call(e)
                },
                n: function () {
                    var e = t.next();
                    return u = e.done,
                        e
                },
                e: function (e) {
                    o = !0,
                        i = e
                },
                f: function () {
                    try {
                        u || null == t.return || t.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }

        function me(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = Array(n); t < n; t++)
                r[t] = e[t];
            return r
        }

        var ge, ke = t(90179), ye = t.n(ke), we = (t(2892),
            t(16034),
            t(68519)), be = (0,
            v.rXt)(Z.gO, {}), _e = (0,
            v.rXt)(Z.Q8, {});

        function xe(e, n, t, r) {
            var a, i, u, o;
            if (t && r) {
                var l = e === ge.PASS ? null !== (a = Q().get(Z.Q8)) && void 0 !== a ? a : {} : null !== (i = Q().get(Z.gO)) && void 0 !== i ? i : {};
                if (e === ge.POS && Object.keys(l).length >= 20 && !l[t]) {
                    var c = Object.values(l).reduce((function (e, n) {
                            return e.updateTime < n.updateTime ? e : n
                        }
                    ));
                    l = ye()(l, c.gameId)
                }
                if (e === ge.PASS && Object.keys(l).length >= 50 && !l[t]) {
                    var s = Object.values(l).reduce((function (e, n) {
                            return e.updateTime < n.updateTime ? e : n
                        }
                    ));
                    l = ye()(l, s.gameId)
                }
                if (l[t] = {
                    id: t,
                    name: r,
                    totalStayLength: (null !== (u = null === (o = l[t]) || void 0 === o ? void 0 : o.totalStayLength) && void 0 !== u ? u : 0) + n,
                    updateTime: Date.now()
                },
                l[t].totalStayLength >= 200)
                    for (var v in l)
                        l[v] = {
                            id: Number(v),
                            name: l[t].name,
                            totalStayLength: Math.ceil(.5 * l[t].totalStayLength),
                            updateTime: Date.now()
                        };
                Q().set(e === ge.PASS ? Z.Q8 : Z.gO, l)
            }
        }

        !function (e) {
            e[e.POS = 0] = "POS",
                e[e.PASS = 1] = "PASS"
        }(ge || (ge = {}));
        var Le = (0,
            we.A)(new Date);

        function Ae(e) {
            return (0,
                o.wB)((function () {
                    return e.value
                }
            ), (function (e, n) {
                    var t = (0,
                        we.A)(new Date)
                        , r = t - Le;
                    Le = t;
                    var a = n.gameInfo
                        , i = a.id
                        , u = a.name;
                    r <= 1e4 ? xe(ge.PASS, 1, i, u) : xe(ge.POS, r < 3e4 ? 1 : r < 6e4 ? 2 : r < 3e4 ? 4 : 7, i, u)
                }
            )),
                {
                    positiveList: be,
                    passiveList: _e,
                    addPoints: xe
                }
        }

        t(60739);
        var Se = t(68778)
            , Ce = t(97500)
            , Ee = t(15607)
            , Re = t(96263)
            , Ie = t(94771)
            , Te = t(94679)
            , Me = t(59091)
            , He = t(16662)
            , We = t(35113)
            , Ve = t(67229)
            , Oe = t(21917)
            , Pe = t(35035)
            , Ge = t(72554)
            , Fe = (t(76031),
            t(36947))
            , Be = t(99005)
            , Ne = t.n(Be)
            , De = t(5579)
            , Ze = t.n(De)
            , Xe = t(61122)
            , Ue = ["innerHTML"]
            , Qe = {
            class: "content flex items-center"
        };
        const Ke = (0,
            o.pM)({
            __name: "ScreenLoop",
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["changeScreen"],
            setup: function (e, n) {
                n.emit;
                var t = e
                    , r = (0,
                    c.KR)()
                    , i = (0,
                    o.WQ)(b.kl)
                    , l = (0,
                    o.WQ)(b.P4);

                function s() {
                    return v.apply(this, arguments)
                }

                function v() {
                    return (v = (0,
                        a.A)(u().mark((function e() {
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                r.value.hide(),
                                                    setTimeout((function () {
                                                            l(!i.value)
                                                        }
                                                    ), 200);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                return (0,
                    H.iX)(Xe.k8, (function () {
                        s()
                    }
                )),
                    function (e, n) {
                        return (0,
                            o.uX)(),
                            (0,
                                o.CE)("div", {
                                class: (0,
                                    d.C4)(["full-screen", {
                                    "no-full": !(0,
                                        c.R1)(i)
                                }])
                            }, [((0,
                                o.uX)(),
                                (0,
                                    o.Wv)(Fe.A, {
                                    key: String((0,
                                        c.R1)(i)),
                                    ref_key: "tooltipRef",
                                    ref: r,
                                    placement: "top",
                                    "insert-to-global": !1
                                }, {
                                    default: (0,
                                        o.k6)((function () {
                                            return [(0,
                                                o.Lk)("div", {
                                                class: (0,
                                                    d.C4)(["screen-icon", {
                                                    disabled: t.disabled
                                                }]),
                                                onClick: s
                                            }, [(0,
                                                o.Lk)("span", {
                                                innerHTML: (0,
                                                    c.R1)(i) ? (0,
                                                    c.R1)(Ne()) : (0,
                                                    c.R1)(Ze())
                                            }, null, 8, Ue)], 2)]
                                        }
                                    )),
                                    content: (0,
                                        o.k6)((function () {
                                            return [(0,
                                                o.Lk)("div", Qe, [(0,
                                                o.Lk)("span", null, (0,
                                                d.v_)((0,
                                                c.R1)(i) ? "退出全屏" : "进入全屏"), 1), n[0] || (n[0] = (0,
                                                o.Lk)("div", {
                                                class: "keyword flex-center"
                                            }, "H", -1))])]
                                        }
                                    )),
                                    _: 1
                                }))], 2)
                    }
            }
        })
            , je = (0,
            R.A)(Ke, [["__scopeId", "data-v-41c38f09"]]);
        var Ye = t(55116)
            , qe = t.n(Ye)
            , ze = t(56813)
            , Je = t.n(ze)
            , $e = t(51916)
            , en = t.n($e)
            , nn = {
            class: "theater"
        }
            , tn = ["innerHTML"]
            , rn = {
            class: "content flex items-center"
        };
        const an = (0,
            o.pM)({
            __name: "Theater",
            setup: function (e) {
                var n = (0,
                    o.WQ)(b.S_)
                    , t = (0,
                    o.WQ)(b.XD);

                function r() {
                    return i.apply(this, arguments)
                }

                function i() {
                    return (i = (0,
                        a.A)(u().mark((function e() {
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return en().exit(),
                                                    e.next = 3,
                                                    (0,
                                                        o.dY)();
                                            case 3:
                                                n.value = !n.value;
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                return (0,
                    H.iX)(Xe.rN, (function () {
                        r()
                    }
                )),
                    function (e, a) {
                        return (0,
                            o.uX)(),
                            (0,
                                o.CE)("div", nn, [(0,
                                o.bF)(Fe.A, {
                                placement: "top",
                                "insert-to-global": !(0,
                                    c.R1)(t)
                            }, {
                                default: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.Lk)("div", {
                                            class: "theater-icon",
                                            onClick: r
                                        }, [(0,
                                            o.Lk)("span", {
                                            innerHTML: (0,
                                                c.R1)(n) ? (0,
                                                c.R1)(Je()) : (0,
                                                c.R1)(qe())
                                        }, null, 8, tn)])]
                                    }
                                )),
                                content: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.Lk)("div", rn, [(0,
                                            o.Lk)("span", null, (0,
                                            d.v_)((0,
                                            c.R1)(n) ? "正常模式" : "网页全屏"), 1), a[0] || (a[0] = (0,
                                            o.Lk)("div", {
                                            class: "keyword flex-center"
                                        }, "Y", -1))])]
                                    }
                                )),
                                _: 1
                            }, 8, ["insert-to-global"])])
                    }
            }
        })
            , un = (0,
            R.A)(an, [["__scopeId", "data-v-6f584996"]]);
        t(9868);
        var on = t(34338)
            , ln = t(32938)
            , cn = t(50809)
            , sn = t.n(cn)
            , vn = t(1988)
            , fn = t.n(vn)
            , dn = t(17031)
            , pn = t(11722)
            , hn = {
            class: "danmaku"
        }
            , mn = {
            class: "play-icon"
        }
            , gn = ["innerHTML"]
            , kn = {
            class: "header"
        }
            , yn = {
            class: "settings"
        }
            , wn = {
            class: "item reset"
        }
            , bn = {
            class: "right"
        }
            , _n = ["innerHTML"]
            , xn = {
            class: "item"
        }
            , Ln = {
            class: "right"
        }
            , An = {
            class: "desc"
        }
            , Sn = {
            class: "item"
        }
            , Cn = {
            class: "right"
        }
            , En = {
            class: "desc"
        }
            , Rn = {
            class: "item"
        }
            , In = {
            class: "right"
        }
            , Tn = {
            class: "desc"
        }
            , Mn = {
            class: "item"
        }
            , Hn = {
            class: "right"
        }
            , Wn = {
            class: "desc"
        };
        const Vn = (0,
            o.pM)({
            __name: "Danmaku",
            setup: function (e) {
                var n = (0,
                    o.WQ)(b.Hf)
                    , t = (0,
                    o.WQ)(b.en)
                    , r = (0,
                    o.WQ)(b.XD)
                    , a = (0,
                    o.WQ)(b.$m)
                    , i = (0,
                    o.WQ)(b.qq)
                    , u = (0,
                    o.WQ)(b.O7)
                    , l = (0,
                    c.KR)()
                    , s = (0,
                    c.KR)()
                    , f = (0,
                    o.EW)((function () {
                        return ["1行", "2行", "25%", "50%", "85%"][n.value.range]
                    }
                ))
                    , p = (0,
                    o.EW)((function () {
                        return ["极小", "小", "适中", "大", "极大"][n.value.fontSize]
                    }
                ))
                    , h = (0,
                    o.EW)((function () {
                        return ["极慢", "慢", "适中", "快", "极快"][n.value.speed]
                    }
                ));

                function m() {
                    (0,
                        dn.cS)("LIVE_BARRAGE_POPUP", {
                        move_speed: h.value,
                        show_area: f.value,
                        font_size: p.value,
                        transparency: (100 * n.value.opacity).toFixed(0),
                        status: n.value.enabled ? "OPEN" : "CLOSE"
                    })
                }

                function g(e) {
                    (0,
                        dn.TO)("LIVE_BARRAGE_POPUP", {
                        params: {
                            FONT_SIZE: "字体大小",
                            MOVE_SPEED: "移动速度",
                            TRANSPARENCY: "不透明度",
                            SWITCH: "弹幕开关",
                            SHOW_AREA: "显示区域"
                        }[e],
                        anchor_user_id: a.value.originUserId,
                        btn_name: e,
                        status: n.value.enabled ? "OPEN" : "CLOSE",
                        live_stream_id: i.value.id
                    })
                }

                function k() {
                    t()
                }

                return (0,
                    v.MLh)(l, "mousemove", u),
                    (0,
                        o.wB)((function () {
                            return pn.E6.value
                        }
                    ), (function (e) {
                            var n;
                            e && (null === (n = s.value) || void 0 === n || n.hide())
                        }
                    )),
                    (0,
                        H.iX)(Xe.kT, (function () {
                            g("SWITCH"),
                                n.value.enabled = !n.value.enabled
                        }
                    )),
                    function (e, t) {
                        return (0,
                            o.uX)(),
                            (0,
                                o.CE)("div", hn, [(0,
                                o.bF)(Fe.A, {
                                ref_key: "toolTipRef",
                                ref: s,
                                placement: "top",
                                "insert-to-global": !(0,
                                    c.R1)(r),
                                "tooltip-bg": "transparent",
                                onAfterShow: m
                            }, {
                                default: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.Lk)("div", mn, [(0,
                                            o.Lk)("span", {
                                            style: {
                                                height: "22px"
                                            },
                                            innerHTML: (0,
                                                c.R1)(sn())
                                        }, null, 8, gn)])]
                                    }
                                )),
                                content: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.Lk)("div", {
                                            ref_key: "settingRef",
                                            ref: l,
                                            class: "setting"
                                        }, [(0,
                                            o.Lk)("div", kn, [t[10] || (t[10] = (0,
                                            o.Lk)("span", {
                                            class: "label"
                                        }, [(0,
                                            o.eW)(" 弹幕开关 "), (0,
                                            o.Lk)("div", {
                                            class: "keyword flex-center"
                                        }, "B")], -1)), (0,
                                            o.bF)(ln.A, {
                                            modelValue: (0,
                                                c.R1)(n).enabled,
                                            "onUpdate:modelValue": t[0] || (t[0] = function (e) {
                                                    return (0,
                                                        c.R1)(n).enabled = e
                                                }
                                            ),
                                            onClick: t[1] || (t[1] = function (e) {
                                                    return g("SWITCH")
                                                }
                                            )
                                        }, null, 8, ["modelValue"])]), (0,
                                            o.Lk)("div", yn, [(0,
                                            o.Lk)("div", wn, [t[12] || (t[12] = (0,
                                            o.Lk)("span", {
                                            class: "label"
                                        }, " 弹幕设置 ", -1)), (0,
                                            o.Lk)("div", bn, [(0,
                                            o.Lk)("div", {
                                            class: "control",
                                            onClick: k
                                        }, [(0,
                                            o.Lk)("span", {
                                            class: "icon",
                                            innerHTML: (0,
                                                c.R1)(fn())
                                        }, null, 8, _n), t[11] || (t[11] = (0,
                                            o.eW)(" 恢复默认 "))])])]), (0,
                                            o.Lk)("div", xn, [t[13] || (t[13] = (0,
                                            o.Lk)("span", {
                                            class: "label"
                                        }, " 不透明度 ", -1)), (0,
                                            o.Lk)("div", Ln, [(0,
                                            o.bF)(on.A, {
                                            modelValue: (0,
                                                c.R1)(n).opacity,
                                            "onUpdate:modelValue": t[2] || (t[2] = function (e) {
                                                    return (0,
                                                        c.R1)(n).opacity = e
                                                }
                                            ),
                                            min: .2,
                                            max: 1,
                                            step: .01,
                                            height: 80,
                                            vertical: !1,
                                            disabled: !(0,
                                                c.R1)(n).enabled,
                                            onClick: t[3] || (t[3] = function (e) {
                                                    return g("TRANSPARENCY")
                                                }
                                            )
                                        }, null, 8, ["modelValue", "disabled"]), (0,
                                            o.Lk)("span", An, (0,
                                            d.v_)((100 * (0,
                                            c.R1)(n).opacity).toFixed(0)) + "%", 1)])]), (0,
                                            o.Lk)("div", Sn, [t[14] || (t[14] = (0,
                                            o.Lk)("span", {
                                            class: "label"
                                        }, " 显示区域 ", -1)), (0,
                                            o.Lk)("div", Cn, [(0,
                                            o.bF)(on.A, {
                                            modelValue: (0,
                                                c.R1)(n).range,
                                            "onUpdate:modelValue": t[4] || (t[4] = function (e) {
                                                    return (0,
                                                        c.R1)(n).range = e
                                                }
                                            ),
                                            "background-color": "#FFFFFF33",
                                            min: 0,
                                            max: 4,
                                            vertical: !1,
                                            marks: [0, 1, 2, 3, 4],
                                            step: null,
                                            disabled: !(0,
                                                c.R1)(n).enabled,
                                            onClick: t[5] || (t[5] = function (e) {
                                                    return g("SHOW_AREA")
                                                }
                                            )
                                        }, null, 8, ["modelValue", "disabled"]), (0,
                                            o.Lk)("span", En, (0,
                                            d.v_)(f.value), 1)])]), (0,
                                            o.Lk)("div", Rn, [t[15] || (t[15] = (0,
                                            o.Lk)("span", {
                                            class: "label"
                                        }, " 字体大小 ", -1)), (0,
                                            o.Lk)("div", In, [(0,
                                            o.bF)(on.A, {
                                            modelValue: (0,
                                                c.R1)(n).fontSize,
                                            "onUpdate:modelValue": t[6] || (t[6] = function (e) {
                                                    return (0,
                                                        c.R1)(n).fontSize = e
                                                }
                                            ),
                                            "background-color": "#FFFFFF33",
                                            min: 0,
                                            max: 4,
                                            vertical: !1,
                                            marks: [0, 1, 2, 3, 4],
                                            step: null,
                                            disabled: !(0,
                                                c.R1)(n).enabled,
                                            onClick: t[7] || (t[7] = function (e) {
                                                    return g("FONT_SIZE")
                                                }
                                            )
                                        }, null, 8, ["modelValue", "disabled"]), (0,
                                            o.Lk)("span", Tn, (0,
                                            d.v_)(p.value), 1)])]), (0,
                                            o.Lk)("div", Mn, [t[16] || (t[16] = (0,
                                            o.Lk)("span", {
                                            class: "label"
                                        }, " 移动速度 ", -1)), (0,
                                            o.Lk)("div", Hn, [(0,
                                            o.bF)(on.A, {
                                            modelValue: (0,
                                                c.R1)(n).speed,
                                            "onUpdate:modelValue": t[8] || (t[8] = function (e) {
                                                    return (0,
                                                        c.R1)(n).speed = e
                                                }
                                            ),
                                            "background-color": "#FFFFFF33",
                                            min: 0,
                                            max: 4,
                                            vertical: !1,
                                            marks: [0, 1, 2, 3, 4],
                                            step: null,
                                            disabled: !(0,
                                                c.R1)(n).enabled,
                                            onClick: t[9] || (t[9] = function (e) {
                                                    return g("MOVE_SPEED")
                                                }
                                            )
                                        }, null, 8, ["modelValue", "disabled"]), (0,
                                            o.Lk)("span", Wn, (0,
                                            d.v_)(h.value), 1)])])])], 512)]
                                    }
                                )),
                                _: 1
                            }, 8, ["insert-to-global"])])
                    }
            }
        })
            , On = (0,
            R.A)(Vn, [["__scopeId", "data-v-ece7d8f4"]]);
        var Pn = ["onAnimationend"];
        const Gn = (0,
            o.pM)({
            __name: "LikeAnimation",
            emits: ["like"],
            setup: function (e, n) {
                var t = n.emit
                    , r = (0,
                    c.KR)([]);

                function a(e) {
                    var n = {
                        x: e.offsetX,
                        y: e.offsetY
                    };
                    r.value.push(n),
                        t("like")
                }

                return function (e, n) {
                    return (0,
                        o.uX)(),
                        (0,
                            o.CE)("div", {
                            class: "container",
                            onDblclick: (0,
                                l.D$)(a, ["self"])
                        }, [((0,
                            o.uX)(!0),
                            (0,
                                o.CE)(o.FK, null, (0,
                                o.pI)(r.value, (function (e, n) {
                                    return (0,
                                        o.uX)(),
                                        (0,
                                            o.CE)("div", {
                                            class: "like-in-player",
                                            key: e.x + "|y",
                                            style: (0,
                                                d.Tr)({
                                                top: "".concat(e.y, "px"),
                                                left: "".concat(e.x, "px")
                                            }),
                                            onAnimationend: function (e) {
                                                return function (e) {
                                                    r.value.splice(e, 1)
                                                }(n)
                                            }
                                        }, null, 44, Pn)
                                }
                            )), 128))], 32)
                }
            }
        })
            , Fn = (0,
            R.A)(Gn, [["__scopeId", "data-v-e99e88a8"]]);
        var Bn = t(53257)
            , Nn = t(63560)
            , Dn = t.n(Nn)
            , Zn = t(90892)
            , Xn = t(58873)
            , Un = t(29686)
            , Qn = (t(48980),
            t(8423));
        t(36033),
            t(71517),
            t(93777),
            t(14190),
            t(12359),
            t(86097),
            t(17273),
            t(27415),
            t(19929),
            t(37583),
            t(55122),
            t(20230),
            t(57268),
            t(79733);
        var Kn = t(80296);
        t(25276);
        var jn = ["data-id", "data-line-id"];
        const Yn = (0,
            o.pM)({
            __name: "index",
            setup: function (e, n) {
                var t = n.expose
                    , r = (0,
                    H.Pj)(X.mH)
                    , a = (0,
                    o.WQ)(b.Hf)
                    , i = (0,
                    c.KR)(null)
                    , u = (0,
                    v.Lhy)(i)
                    , f = u.width
                    , p = u.height
                    , h = (0,
                    o.EW)((function () {
                        return a.value.opacity
                    }
                ))
                    , m = (0,
                    o.EW)((function () {
                        return Zn.vP[a.value.fontSize]
                    }
                ))
                    , g = (0,
                    o.EW)((function () {
                        return Zn.s4[a.value.speed]
                    }
                ))
                    , k = (0,
                    o.EW)((function () {
                        return 1.4 * m.value
                    }
                ))
                    , y = (0,
                    o.EW)((function () {
                        return m.value / 2
                    }
                ))
                    , w = (0,
                    o.EW)((function () {
                        return a.value.range < Zn._Q.QUARTER_SCREEN ? a.value.range + 1 : Math.floor(p.value * [.25, .5, .85][a.value.range - 2] / (k.value + y.value))
                    }
                ))
                    , _ = function (e) {
                    var n, t = (0,
                        c.KR)("running"), r = (0,
                        c.KR)([]), a = (0,
                        o.EW)(e), i = (n = new Map,
                        {
                            updateLine: function (e, t) {
                                n.set(e, t)
                            },
                            updateAll: function (e) {
                                return n.forEach((function (n, t) {
                                        return e(t)
                                    }
                                ))
                            },
                            getLine: function (e) {
                                for (var t = -1, r = 0; r < e; r++)
                                    if (!n.has(r) || n.get(r) < Date.now()) {
                                        t = r;
                                        break
                                    }
                                return t
                            },
                            removeLine: function (e) {
                                n.delete(e)
                            },
                            clearLine: function () {
                                n.clear()
                            }
                        }), u = i.updateLine, l = i.updateAll, v = i.getLine, f = i.removeLine, d = i.clearLine, p = re()((function () {
                            console.debug("update danmaku speed"),
                                r.value.forEach((function (e) {
                                        var n = e.value.el;
                                        if (n) {
                                            var t = n.getBoundingClientRect().x;
                                            n.style.transition = "none",
                                                n.style.transform = "translateX(".concat(t, "px) translateY(0) translateZ(0)")
                                        }
                                    }
                                )),
                                setTimeout((function () {
                                        r.value.forEach((function (e) {
                                                var n = e.value.el;
                                                if (n) {
                                                    var t = n.getBoundingClientRect().x
                                                        , r = -_(e.value.content)
                                                        , i = Math.abs(r - t) / a.value.speed;
                                                    n.style.transition = "transform ".concat(i, "s linear"),
                                                        n.style.transform = "translateX(".concat(r, "px) translateY(0) translateZ(0)"),
                                                        e.value.style.transition = "transform ".concat(i, "s linear"),
                                                        e.value.style.transform = "translateX(".concat(r, "px) translateY(0) translateZ(0)")
                                                }
                                            }
                                        ))
                                    }
                                ), 1)
                        }
                    ), 500);
                    (0,
                        o.wB)(a, (function (e) {
                            r.value.forEach((function (n) {
                                    n.value.style.top = "".concat(n.value.line * e.lineHeight + (n.value.line + 1) * e.lineMargin, "px"),
                                        n.value.style.lineHeight = "".concat(e.lineHeight, "px"),
                                        n.value.style.fontSize = "".concat(e.fontSize, "px")
                                }
                            )),
                                l((function (n) {
                                        var t = r.value.filter((function (e) {
                                                return e.value.line === n
                                            }
                                        ));
                                        if (0 === t.length)
                                            f(n);
                                        else {
                                            var a = t.pop()
                                                , i = (a.value.el.getBoundingClientRect().x + _(a.value.content)) / e.speed
                                                , o = Date.now() + 1e3 * i;
                                            u(n, o)
                                        }
                                    }
                                ))
                        }
                    )),
                        (0,
                            o.wB)((function () {
                                return a.value.speed
                            }
                        ), (function () {
                                (0,
                                    o.dY)((function () {
                                        p()
                                    }
                                ))
                            }
                        )),
                        (0,
                            c.jr)((function () {
                                b(),
                                    y()
                            }
                        ));
                    var h = function () {
                        var e = (0,
                            c.KR)([])
                            , n = (0,
                            c.lW)(200)
                            , t = (0,
                            o.EW)((function () {
                                return !!e.value.length
                            }
                        ));
                        return (0,
                            c.jr)((function () {
                                e.value.length = 0
                            }
                        )),
                            {
                                hasBuffer: t,
                                add: function (t) {
                                    e.value.length >= n.value && e.value.splice(0, e.value.length - n.value + 1),
                                        e.value.push(t)
                                },
                                comsume: function (n) {
                                    if (void 0 === n)
                                        return e.value.shift();
                                    var t = e.value.indexOf(n);
                                    if (-1 !== t) {
                                        var r = e.value.splice(t, 1);
                                        return (0,
                                            Kn.A)(r, 1)[0]
                                    }
                                    return null
                                },
                                clear: function () {
                                    e.value.length = 0
                                }
                            }
                    }()
                        , m = h.hasBuffer
                        , g = h.add
                        , k = h.comsume
                        , y = h.clear;
                    (0,
                        s.Rg)((function () {
                            "running" === t.value && m.value && -1 !== v(a.value.maxLineCount) && w(k(), "buffer")
                        }
                    ), 500);
                    var w = function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "external";
                        if ("paused" !== t.value) {
                            var i = v(a.value.maxLineCount);
                            if (-1 !== i) {
                                if ("external" === n && m.value) {
                                    g(e);
                                    var l = k();
                                    l && (e = l)
                                }
                                var s = (_(e) + a.value.safeSpace) / a.value.speed * 1e3;
                                u(i, Date.now() + s);
                                var f = (0,
                                    Qn.A)()
                                    , d = a.value.screen.width
                                    , p = (d + 2 * _(e)) / a.value.speed
                                    , h = (0,
                                    c.KR)({
                                    id: f,
                                    line: i,
                                    content: e,
                                    style: {
                                        top: "".concat(i * a.value.lineHeight + (i + 1) * a.value.lineMargin, "px"),
                                        lineHeight: "".concat(a.value.lineHeight, "px"),
                                        fontSize: "".concat(a.value.fontSize, "px"),
                                        width: "".concat(e.length + 4, "em"),
                                        transform: "translateX(".concat(d, "px) translateY(0) translateZ(0)"),
                                        transition: "transform ".concat(p, "s linear")
                                    }
                                });
                                r.value.push(h),
                                    (0,
                                        o.dY)((function () {
                                            var n = function () {
                                                var n = 2 * -_(e);
                                                h.value.style.transform = "translateX(".concat(n, "px) translateY(0) translateZ(0)"),
                                                    h.value.el.addEventListener("transitionstart", (function () {
                                                            var n = (_(e) + a.value.safeSpace) / a.value.speed * 1e3;
                                                            u(i, Date.now() + n)
                                                        }
                                                    ), {
                                                        once: !0
                                                    })
                                            };
                                            requestAnimationFrame ? requestAnimationFrame((function () {
                                                    requestAnimationFrame((function () {
                                                            n()
                                                        }
                                                    ))
                                                }
                                            )) : setTimeout((function () {
                                                    n()
                                                }
                                            ), 100)
                                        }
                                    )),
                                m.value && -1 !== v(a.value.maxLineCount) && w(k())
                            } else
                                g(e)
                        }
                    }
                        , b = function () {
                        t.value = "paused",
                            r.value = []
                    }
                        , _ = function (e) {
                        return (e.length + 4) * a.value.fontSize
                    };
                    return {
                        pool: r,
                        send: w,
                        stop: b,
                        resume: function () {
                            d(),
                                t.value = "running"
                        },
                        onTransitionEnd: function (e) {
                            var n, t = null !== (n = e.target) && void 0 !== n ? n : null;
                            if (t) {
                                var a = t.dataset.id;
                                if (a) {
                                    var i = r.value.findIndex((function (e) {
                                            return e.value.id === a
                                        }
                                    ));
                                    -1 !== i && r.value.splice(i, 1)
                                }
                            }
                        }
                    }
                }((function () {
                        return {
                            safeSpace: m.value * (a.value.fontSize === Zn.fX.EXTRA_LARGE ? 2 : 5),
                            speed: g.value,
                            screen: {
                                width: f.value,
                                height: p.value
                            },
                            fontSize: m.value,
                            lineHeight: k.value,
                            lineMargin: y.value,
                            maxLineCount: w.value,
                            opacity: h.value
                        }
                    }
                ))
                    , x = _.pool
                    , L = _.send
                    , A = _.stop
                    , S = _.resume
                    , C = _.onTransitionEnd;
                return (0,
                    H.ML)("visibilitychange", (function () {
                        "hidden" === document.visibilityState ? A() : S()
                    }
                )),
                N.oc && Dn()(window, "_SEND_DANMAKU_", (function (e) {
                        L(e)
                    }
                )),
                    t({
                        send: function (e) {
                            L(e)
                        }
                    }),
                    function (e, n) {
                        return (0,
                            o.bo)(((0,
                            o.uX)(),
                            (0,
                                o.CE)("div", {
                                ref_key: "danmakuRef",
                                ref: i,
                                class: "danmaku",
                                style: (0,
                                    d.Tr)({
                                    opacity: (0,
                                        c.R1)(a).opacity
                                }),
                                onTransitionend: n[0] || (n[0] = function () {
                                        return (0,
                                            c.R1)(C) && (0,
                                            c.R1)(C).apply(void 0, arguments)
                                    }
                                )
                            }, [((0,
                                o.uX)(!0),
                                (0,
                                    o.CE)(o.FK, null, (0,
                                    o.pI)((0,
                                    c.R1)(x), (function (e) {
                                        var n = e.value;
                                        return (0,
                                            o.uX)(),
                                            (0,
                                                o.CE)("div", {
                                                ref_for: !0,
                                                ref: function (e) {
                                                    return n.el = e
                                                },
                                                key: n.id,
                                                class: "item",
                                                "data-id": n.id,
                                                "data-line-id": n.line,
                                                style: (0,
                                                    d.Tr)(n.style)
                                            }, [(0,
                                                o.bF)(Xn.A, {
                                                content: n.content,
                                                processors: [(0,
                                                    c.R1)(Un.mu).EMOJI],
                                                "emoji-icon-urls": (0,
                                                    c.R1)(r).iconUrls,
                                                "emoji-style": {
                                                    width: m.value + "px"
                                                }
                                            }, null, 8, ["content", "processors", "emoji-icon-urls", "emoji-style"])], 12, jn)
                                    }
                                )), 128))], 36)), [[l.aG, (0,
                            c.R1)(a).enabled]])
                    }
            }
        })
            , qn = (0,
            R.A)(Yn, [["__scopeId", "data-v-f478b75a"]]);
        var zn = t(30975)
            , Jn = {
            class: "container"
        }
            , $n = {
            class: "card"
        }
            , et = {
            key: 0,
            class: "no-login"
        }
            , nt = {
            class: "input-container"
        }
            , tt = ["type", "disabled"]
            , rt = {
            class: "input-button"
        }
            , at = {
            class: "error-msg"
        };
        const it = (0,
            o.pM)({
            __name: "index",
            setup: function (e) {
                var n = (0,
                    o.WQ)(zn.j0)
                    , t = (0,
                    o.WQ)(b.FE)
                    , r = (0,
                    c.KR)("")
                    , i = (0,
                    c.KR)(!1)
                    , s = (0,
                    o.EW)((function () {
                        return i.value ? "text" : "password"
                    }
                ))
                    , v = (0,
                    c.KR)("")
                    , f = (0,
                    O.rd)();

                function p() {
                    (0,
                        X.An)({
                        type: "login"
                    })
                }

                function h() {
                    return m.apply(this, arguments)
                }

                function m() {
                    return (m = (0,
                        a.A)(u().mark((function e() {
                            var n;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    t(r.value);
                                            case 2:
                                                (n = e.sent) && (v.value = n);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                function g() {
                    r.value = ""
                }

                function k() {
                    i.value = !i.value
                }

                function y() {
                    f.push({
                        name: "index"
                    })
                }

                return function (e, t) {
                    return (0,
                        o.uX)(),
                        (0,
                            o.CE)("section", Jn, [(0,
                            o.Lk)("div", $n, [(0,
                            c.R1)(n) ? (0,
                            o.Q3)("", !0) : ((0,
                            o.uX)(),
                            (0,
                                o.CE)("div", et, [t[1] || (t[1] = (0,
                                o.Lk)("span", null, "登录后可输入密码观看加密直播", -1)), (0,
                                o.Lk)("div", {
                                class: "button login",
                                onClick: p
                            }, " 登录 ")])), (0,
                            o.Lk)("div", {
                            class: (0,
                                d.C4)(["main", {
                                "no-active": !(0,
                                    c.R1)(n)
                            }])
                        }, [t[2] || (t[2] = (0,
                            o.Lk)("div", {
                            class: "title"
                        }, " 请输入主播设置的密码 ", -1)), (0,
                            o.Lk)("div", nt, [(0,
                            o.bo)((0,
                            o.Lk)("input", {
                            "onUpdate:modelValue": t[0] || (t[0] = function (e) {
                                    return r.value = e
                                }
                            ),
                            class: "input",
                            type: s.value,
                            disabled: !(0,
                                c.R1)(n)
                        }, null, 8, tt), [[l.hp, r.value]]), (0,
                            o.Lk)("div", rt, [(0,
                            o.Lk)("div", {
                            class: "clear",
                            onClick: g
                        }), (0,
                            o.Lk)("div", {
                            class: (0,
                                d.C4)([i.value ? "hide" : "show"]),
                            onClick: k
                        }, null, 2)])]), (0,
                            o.Lk)("div", at, (0,
                            d.v_)(v.value), 1), (0,
                            o.Lk)("div", {
                            class: "bottom"
                        }, [(0,
                            o.Lk)("div", {
                            class: "button logout",
                            onClick: y
                        }, " 退出 "), (0,
                            o.Lk)("div", {
                            class: "button join",
                            onClick: h
                        }, " 加入 ")])], 2)])])
                }
            }
        })
            , ut = (0,
            R.A)(it, [["__scopeId", "data-v-3fdc74e8"]]);
        var ot = {
            class: "need"
        };
        const lt = (0,
            o.pM)({
            __name: "index",
            setup: function (e) {
                function n() {
                    (0,
                        X.An)({
                        type: "login"
                    })
                }

                return function (e, t) {
                    return (0,
                        o.uX)(),
                        (0,
                            o.CE)("div", ot, [(0,
                            o.Lk)("div", {
                            class: "content"
                        }, [t[0] || (t[0] = (0,
                            o.Lk)("div", {
                            class: "title"
                        }, " 当前直播间仅支持登录用户观看 ", -1)), (0,
                            o.Lk)("div", {
                            class: "button",
                            onClick: n
                        }, " 立即登录 ")])])
                }
            }
        })
            , ct = (0,
            R.A)(lt, [["__scopeId", "data-v-653c7077"]]);
        var st = t(56649)
            , vt = t(28504)
            , ft = t(14409)
            , dt = t(36655);
        t(40150);
        var pt = t(39510)
            , ht = (t(48598),
            t(37516))
            , mt = t.n(ht)
            , gt = t(60240)
            , kt = ["innerHTML"]
            , yt = {
            class: "flex items-center"
        }
            , wt = {
            key: 0,
            class: "keyword flex-center"
        };
        const bt = (0,
            o.pM)({
            __name: "SmallWindow",
            props: {
                isPortrait: {
                    type: Boolean
                },
                instance: {}
            },
            emits: ["cantPicture", "changePictureShow", "beforeChange", "afterLeave"],
            setup: function (e, n) {
                var t, r, i = n.expose, l = n.emit, s = (0,
                    o.WQ)(b.HI), v = (0,
                    o.WQ)(b.T8), f = (0,
                    o.WQ)(b.Io), p = (0,
                    o.WQ)(b.cA), h = (0,
                    o.WQ)(b.UG), m = (0,
                    c.KR)(!1), g = (0,
                    c.KR)(), k = !1, y = e, w = l;

                function _() {
                    return (_ = (0,
                        a.A)(u().mark((function e() {
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    (0,
                                                        o.dY)();
                                            case 2:
                                                if (!("documentPictureInPicture" in window)) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return documentPictureInPicture.addEventListener("enter", (function () {
                                                        w("changePictureShow", !0)
                                                    }
                                                )),
                                                    e.abrupt("return");
                                            case 5:
                                                if (!("pictureInPictureEnabled" in document)) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 7:
                                                w("cantPicture");
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                function x() {
                    return L.apply(this, arguments)
                }

                function L() {
                    return (L = (0,
                        a.A)(u().mark((function e() {
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                p.value ? (h(),
                                                    oe()(A, 400)) : A();
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                function A() {
                    return S.apply(this, arguments)
                }

                function S() {
                    return (S = (0,
                        a.A)(u().mark((function e() {
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (w("beforeChange"),
                                                    !(0,
                                                        N.YY)()) {
                                                    e.next = 7;
                                                    break
                                                }
                                                return console.log("检测出 360 浏览器"),
                                                    e.next = 5,
                                                    I();
                                            case 5:
                                                e.next = 13;
                                                break;
                                            case 7:
                                                if (!("documentPictureInPicture" in window)) {
                                                    e.next = 11;
                                                    break
                                                }
                                                E(),
                                                    e.next = 13;
                                                break;
                                            case 11:
                                                return e.next = 13,
                                                    I();
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                (0,
                    o.sV)((function () {
                        !function () {
                            _.apply(this, arguments)
                        }()
                    }
                ));
                var C = !1;

                function E() {
                    return R.apply(this, arguments)
                }

                function R() {
                    return (R = (0,
                        a.A)(u().mark((function e() {
                            var n, r;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!k) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return k = !0,
                                                    e.prev = 3,
                                                    e.next = 6,
                                                    documentPictureInPicture.requestWindow({
                                                        width: y.isPortrait ? 300 : 512,
                                                        height: y.isPortrait ? 512 : 288
                                                    });
                                            case 6:
                                                (t = e.sent).document.body.append(s.value),
                                                    (0,
                                                        W.A)(document.styleSheets).forEach((function (e) {
                                                            try {
                                                                var n = (0,
                                                                    W.A)(e.cssRules).map((function (e) {
                                                                        return e.cssText
                                                                    }
                                                                )).join("")
                                                                    , r = document.createElement("style");
                                                                r.textContent = n,
                                                                    t.document.head.appendChild(r)
                                                            } catch (e) {
                                                                console.log("css 跨域", e)
                                                            }
                                                        }
                                                    )),
                                                    k = !1,
                                                null === (n = t) || void 0 === n || n.addEventListener("pagehide", (function () {
                                                        y.instance.prepend(s.value),
                                                            f(v.value),
                                                            w("changePictureShow", !1)
                                                    }
                                                )),
                                                null === (r = t) || void 0 === r || r.addEventListener("resize", re()(P, 200)),
                                                    P(),
                                                    e.next = 19;
                                                break;
                                            case 15:
                                                e.prev = 15,
                                                    e.t0 = e.catch(3),
                                                    I(),
                                                    k = !1;
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, null, [[3, 15]])
                        }
                    )))).apply(this, arguments)
                }

                function I() {
                    return T.apply(this, arguments)
                }

                function T() {
                    return (T = (0,
                        a.A)(u().mark((function e() {
                            var n, t;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!C) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return C = !0,
                                                    e.prev = 3,
                                                    r = s.value.querySelector("video"),
                                                    e.next = 7,
                                                    null === (n = r) || void 0 === n ? void 0 : n.requestPictureInPicture();
                                            case 7:
                                                null === (t = r) || void 0 === t || t.addEventListener("enterpictureinpicture", (function () {
                                                        w("changePictureShow", !0)
                                                    }
                                                )),
                                                    r.addEventListener("leavepictureinpicture", M),
                                                    C = !1,
                                                    e.next = 18;
                                                break;
                                            case 12:
                                                e.prev = 12,
                                                    e.t0 = e.catch(3),
                                                    w("changePictureShow", !1),
                                                    w("cantPicture"),
                                                    console.log("【P2】播放器交互体验-小窗失败"),
                                                    (0,
                                                        gt.ho)({
                                                        name: "【P2】播放器交互体验",
                                                        src: "packages/KwaiPlayer/plugins/controls/SmallWindow",
                                                        event_type: "error",
                                                        extra_info: JSON.stringify({
                                                            event: "小窗失败",
                                                            msg: e.t0
                                                        })
                                                    });
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e, null, [[3, 12]])
                        }
                    )))).apply(this, arguments)
                }

                function M() {
                    return V.apply(this, arguments)
                }

                function V() {
                    return (V = (0,
                        a.A)(u().mark((function e() {
                            var n, a;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!t) {
                                                    e.next = 5;
                                                    break
                                                }
                                                t.close(),
                                                    t = null,
                                                    e.next = 14;
                                                break;
                                            case 5:
                                                if (r === document.pictureInPictureElement) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.next = 8,
                                                    null === (n = r) || void 0 === n || null === (a = n.exitPictureInPicture) || void 0 === a ? void 0 : a.call(n);
                                            case 8:
                                                e.next = 12;
                                                break;
                                            case 10:
                                                return e.next = 12,
                                                    document.exitPictureInPicture();
                                            case 12:
                                                h(),
                                                    w("changePictureShow", !1);
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                function O() {
                    m.value = !1
                }

                function P() {
                    if (t && v.value % 180 != 0) {
                        var e = t.document.body.clientWidth
                            , n = t.document.body.clientHeight
                            , r = t.document.querySelector("video");
                        r && (r.style.cssText = ["width: ".concat(n, "px;"), "height: ".concat(e, "px;"), "max-height: ".concat(e, "px;")].join(" "))
                    }
                }

                return (0,
                    H.iX)(Xe.do, (function () {
                        x()
                    }
                )),
                    (0,
                        o.wB)(pn.E6, (function (e) {
                            var n;
                            e && (null === (n = g.value) || void 0 === n || n.hide())
                        }
                    )),
                    i({
                        showTip: function () {
                            m.value = !0,
                                g.value.show()
                        },
                        exit: function () {
                            M()
                        }
                    }),
                    function (e, n) {
                        return (0,
                            o.uX)(),
                            (0,
                                o.CE)("div", null, [(0,
                                o.bF)(Fe.A, {
                                ref_key: "tooltipRef",
                                ref: g,
                                placement: "top",
                                onAfterHide: O
                            }, {
                                default: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.Lk)("div", {
                                            class: "play-icon flex-center",
                                            onClick: x
                                        }, [(0,
                                            o.Lk)("span", {
                                            innerHTML: (0,
                                                c.R1)(mt())
                                        }, null, 8, kt)])]
                                    }
                                )),
                                content: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.Lk)("div", yt, [(0,
                                            o.Lk)("span", null, (0,
                                            d.v_)(m.value ? "小窗模式上线啦，工作摸鱼两不误" : "小窗模式"), 1), m.value ? (0,
                                            o.Q3)("", !0) : ((0,
                                            o.uX)(),
                                            (0,
                                                o.CE)("div", wt, "U"))])]
                                    }
                                )),
                                _: 1
                            }, 512)])
                    }
            }
        })
            , _t = (0,
            R.A)(bt, [["__scopeId", "data-v-16ffe804"]]);
        var xt = {
            class: "tip absolute w-100-p h-100-p flex-center flex-col"
        };
        const Lt = (0,
            o.pM)({
            __name: "index",
            emits: ["exit"],
            setup: function (e, n) {
                var t = n.emit;

                function r() {
                    t("exit")
                }

                return function (e, n) {
                    return (0,
                        o.uX)(),
                        (0,
                            o.CE)("div", xt, [n[1] || (n[1] = (0,
                            o.Lk)("div", {
                            class: "title"
                        }, "当前画面正在以小窗播放", -1)), (0,
                            o.Lk)("div", {
                            class: "btn flex items-center cursor-pointer",
                            onClick: r
                        }, n[0] || (n[0] = [(0,
                            o.Lk)("img", {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgB7ZlBUsIwFIb/KlsXOm70AF6AtTfAA6AH8AAcQFyre+kFmHEpF+gF2LiTA8DCJe7xf02CnTYVEpoIM/1m3tRCO/MlviQvAWhpOWwS24er1eqGlz7jCv/DjDFOkmRS/qIirGUfsB88lqWPLA/1sT9UXDqWh4ppsGBMEZcu4wJVl5zOhpen/JcMERGm5JCXXt33RzgwWuHQbMrhCsyxS6hBsWQsmONLRMRZGGrkPpsbNiAXh24AI2Uj5giET0rMSvcnUI2Q6WgeUlbwEbalwBnjjbIpAuMsrHO2KH3OOGZc6/wOiu8s8a2vp1D1yBfUQByFlvYV/tTXV8ZH4fPg0rv0sMwGT7zeQ80OhqDSvsKpGWB6Vogm7SVcnrpiSvssHFZEmnIiPcJveWikbx1WxIxRO5c3JizUSE9clm8+m0FJW2m8+CmlR9r0YtJoDxt0T7ukwdYEERbqZNkQqTm62I58i1Yc5MGEbVB2APdN7kLeo3RedEUr4HXP+uzIZfAOzE3MHce2afDnu+2eLjStcGha4dBsWji6+qzLh0wXMo1iE5YVxZwayqTdgx+ynGZoGFtKjLHHVHpYTryZBvJn0z8Z7FK5rXcyCSLBTpAToneokyJX1nV1tFlCl5t3cDvRl3deYpwotRh+AGiilzSzJ9CwAAAAAElFTkSuQmCC",
                            alt: ""
                        }, null, -1), (0,
                            o.Lk)("span", null, "恢复大窗播放", -1)]))])
                }
            }
        })
            , At = (0,
            R.A)(Lt, [["__scopeId", "data-v-cd034a4e"]]);
        var St = t(21420)
            , Ct = t(21447);
        var Et = {
            class: "left-part"
        }
            , Rt = {
            class: "right-part"
        }
            , It = {
            key: 5,
            class: "mask flex-center"
        }
            , Tt = ["src"];
        const Mt = (0,
            o.pM)({
            __name: "Player",
            props: {
                index: {},
                isLiving: {
                    type: Boolean
                },
                theaterMode: {
                    type: Boolean,
                    default: !1
                },
                showRiskMask: {
                    type: Boolean
                },
                liveStream: {},
                author: {},
                gameInfo: {},
                errorType: {},
                authToken: {},
                status: {
                    default: function () {
                        return {
                            forbiddenState: G.vX.SUCCESS
                        }
                    }
                },
                displayLikeCount: {},
                active: {
                    type: Boolean
                },
                isFull: {
                    type: Boolean
                },
                isPk: {
                    type: Boolean
                }
            },
            emits: ["switchLiving", "change-follow"],
            setup: function (e, n) {
                var t = n.expose
                    , r = n.emit
                    , i = (0,
                    c.KR)([G.JW.ended, G.JW.error])
                    , s = (0,
                    c.KR)(null)
                    , f = (0,
                    o.rk)("player")
                    , p = (0,
                    c.KR)(null)
                    , h = (0,
                    c.KR)(null)
                    , m = (0,
                    o.WQ)(b.j0)
                    , g = (0,
                    o.WQ)(b.A8)
                    , k = (0,
                    o.WQ)(b.R)
                    , y = (0,
                    o.WQ)(b.Q4)
                    , w = (0,
                    o.WQ)(b.nc)
                    , _ = (0,
                    c.KR)(G.w1.TIP_HIDE)
                    , x = (0,
                    o.WQ)(b.S_)
                    , A = (0,
                    c.KR)(!0)
                    , S = (0,
                    c.KR)(!0)
                    , C = (0,
                    c.KR)(!1)
                    , E = (0,
                    c.KR)(null)
                    , R = (0,
                    c.KR)()
                    , I = (0,
                    o.EW)((function () {
                        return x.value || e.isFull
                    }
                ))
                    , T = ((0,
                    o.EW)((function () {
                        return e.liveStream.privateLive ? "私密直播间" : "直播间"
                    }
                )),
                    (0,
                        o.EW)((function () {
                            return e.isLiving && e.liveStream.privateLive && !e.authToken
                        }
                    )))
                    , M = (0,
                    o.EW)((function () {
                        return e.isLiving && e.liveStream.limitToPlay && !m.value
                    }
                ))
                    , W = (0,
                    o.EW)((function () {
                        return !e.isLiving || T.value || e.status.forbiddenState === G.vX.BE_BANNED || e.status.forbiddenState === G.vX.BE_TICK_OUT
                    }
                ))
                    , V = (0,
                    o.EW)((function () {
                        return e.liveStream.dynamicLayoutEnable
                    }
                ))
                    , O = (0,
                    c.KR)(null)
                    , F = function (e) {
                    Q().set("kslive.player.controls.volume", e)
                }
                    , D = function () {
                    var e = Q().get("kslive.player.controls.volume");
                    return null === e || Number.isNaN(+e) ? .5 : e
                }
                    , U = function (e) {
                    var n = (0,
                        o.WQ)(b.j0);
                    return {
                        canChangeQuality: function (t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return !(!["STANDARD", "HIGH", "SUPER"].includes(t.qualityType) && !n.value && (r && (0,
                                B.t)("LIVE_RESOLUTION").then((function (n) {
                                    n || ((0,
                                        H.Ms)(de._x, (function () {
                                            var n;
                                            console.log("quality", t.level),
                                            null == e || null === (n = e.value) || void 0 === n || n.changeQuality({
                                                level: t.level
                                            }, !0)
                                        }
                                    )),
                                        (0,
                                            H.Ms)(de.Fo, (function () {
                                                (0,
                                                    H.GW)(de._x)
                                            }
                                        )))
                                }
                            )),
                                1))
                        }
                    }
                }(O)
                    , K = U.canChangeQuality
                    , j = (0,
                    H.xF)(St.q).broadcast;

                function Y() {
                    return q.apply(this, arguments)
                }

                function q() {
                    return q = (0,
                        a.A)(u().mark((function n() {
                            var t, r = arguments;
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                if (t = !(r.length > 0 && void 0 !== r[0]) || r[0],
                                                    n.prev = 1,
                                                f.value && f.value.stop(),
                                                t && (0,
                                                    L.ls)(!1),
                                                !Array.isArray(e.liveStream.playUrls) || !e.liveStream.playUrls.length) {
                                                    n.next = 11;
                                                    break
                                                }
                                                if (f.value.load({
                                                    manifest: e.liveStream.playUrls[0]
                                                }),
                                                    t) {
                                                    n.next = 10;
                                                    break
                                                }
                                                return n.next = 9,
                                                    (0,
                                                        o.dY)();
                                            case 9:
                                                (0,
                                                    L.ls)(!1);
                                            case 10:
                                                return n.abrupt("return");
                                            case 11:
                                                if (f.value.load({
                                                    manifest: e.liveStream.playUrls
                                                }),
                                                    t) {
                                                    n.next = 16;
                                                    break
                                                }
                                                return n.next = 15,
                                                    (0,
                                                        o.dY)();
                                            case 15:
                                                (0,
                                                    L.ls)(!1);
                                            case 16:
                                                n.next = 23;
                                                break;
                                            case 18:
                                                n.prev = 18,
                                                    n.t0 = n.catch(1),
                                                    console.error("播放失败", n.t0),
                                                    (0,
                                                        gt.ho)({
                                                        name: "PLAYER_LOAD_ERR",
                                                        event_type: "error",
                                                        message: JSON.stringify(n.t0)
                                                    }),
                                                f.value && f.value.stop();
                                            case 23:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n, null, [[1, 18]])
                        }
                    ))),
                        q.apply(this, arguments)
                }

                function z() {
                    return J.apply(this, arguments)
                }

                function J() {
                    return (J = (0,
                        a.A)(u().mark((function n() {
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                if (V.value) {
                                                    n.next = 2;
                                                    break
                                                }
                                                return n.abrupt("return", Y());
                                            case 2:
                                                if (n.prev = 2,
                                                f.value && f.value.stop(),
                                                    (0,
                                                        L.ls)(!0),
                                                    !Array.isArray(e.liveStream.playUrls)) {
                                                    n.next = 9;
                                                    break
                                                }
                                                throw new Error("双屏非数组流");
                                            case 9:
                                                f.value.load({
                                                    manifest: e.liveStream.playUrls.dynamicLayoutPlayInfo
                                                });
                                            case 10:
                                                n.next = 17;
                                                break;
                                            case 12:
                                                n.prev = 12,
                                                    n.t0 = n.catch(2),
                                                    console.error("播放失败", n.t0),
                                                    (0,
                                                        gt.ho)({
                                                        name: "PLAYER_LOAD_ERR",
                                                        event_type: "error",
                                                        message: JSON.stringify(n.t0)
                                                    }),
                                                f.value && f.value.stop();
                                            case 17:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n, null, [[2, 12]])
                        }
                    )))).apply(this, arguments)
                }

                function $() {
                    return ($ = (0,
                        a.A)(u().mark((function n() {
                            var t;
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                if (A.value = !1,
                                                    e.isLiving) {
                                                    n.next = 4;
                                                    break
                                                }
                                                return f.value && f.value.stop(),
                                                    n.abrupt("return");
                                            case 4:
                                                if (null === (t = e.errorType) || void 0 === t || !t.title) {
                                                    n.next = 6;
                                                    break
                                                }
                                                return n.abrupt("return", p.value.playerError());
                                            case 6:
                                                V.value && (0,
                                                    L.Bs)() ? z() : Y();
                                            case 7:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))).apply(this, arguments)
                }

                function ee() {
                    return ne.apply(this, arguments)
                }

                function ne() {
                    return (ne = (0,
                        a.A)(u().mark((function n() {
                            var t;
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2,
                                                    (0,
                                                        o.dY)();
                                            case 2:
                                                if (e.active) {
                                                    n.next = 4;
                                                    break
                                                }
                                                return n.abrupt("return");
                                            case 4:
                                                if ((null === (t = e.errorType) || void 0 === t ? void 0 : t.type) !== G.vX.NEED_CAPTCHA) {
                                                    n.next = 6;
                                                    break
                                                }
                                                return n.abrupt("return");
                                            case 6:
                                                r("switchLiving", !0, e.author.id);
                                            case 7:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))).apply(this, arguments)
                }

                (0,
                    o.sV)((function () {
                        j(),
                            f.value.changeVolume(D()),
                            (0,
                                X.Mb)({
                                type: "stop"
                            })
                    }
                ));
                var te = !0;

                function re() {
                    return ae.apply(this, arguments)
                }

                function ae() {
                    return (ae = (0,
                        a.A)(u().mark((function n() {
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2,
                                                    (0,
                                                        B.t)();
                                            case 2:
                                                if (!n.sent) {
                                                    n.next = 6;
                                                    break
                                                }
                                                (0,
                                                    P.Ix)({
                                                    liveStreamId: e.liveStream.id,
                                                    count: 1
                                                }),
                                                te && (0,
                                                    X.mF)({
                                                    content: "点亮了[heart]",
                                                    name: w.value.name,
                                                    type: G.PY.LIKE
                                                }),
                                                    te = !1;
                                            case 6:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))).apply(this, arguments)
                }

                function ie() {
                    (0,
                        L.ls)(!1),
                        f.value.stop(),
                        g(e.index)
                }

                function ue() {
                    return le.apply(this, arguments)
                }

                function le() {
                    return (le = (0,
                        a.A)(u().mark((function n() {
                            var t;
                            return u().wrap((function (n) {
                                    for (; ;)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                if (e.isLiving && e.liveStream.id) {
                                                    n.next = 3;
                                                    break
                                                }
                                                return ie(),
                                                    n.abrupt("return");
                                            case 3:
                                                return n.next = 5,
                                                    (0,
                                                        P.px)(e.liveStream.id);
                                            case 5:
                                                601 === (null == (t = n.sent.data) ? void 0 : t.result) && ie();
                                            case 7:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                            ), n)
                        }
                    )))).apply(this, arguments)
                }

                function ce(e) {
                    1003 === (null == e ? void 0 : e.code) && k(),
                        ue()
                }

                function se(e) {
                    r("change-follow", e)
                }

                (0,
                    o.xo)((function () {
                        var n;
                        e.isLiving && (0,
                            X.Mb)({
                            type: "play",
                            data: {
                                liveStream: e.liveStream,
                                author: e.author,
                                gameInfo: e.gameInfo
                            }
                        }),
                        C.value && (null === (n = E.value) || void 0 === n || n.exit())
                    }
                )),
                    (0,
                        H.iX)(de.nT, (function (e) {
                            e.forEach((function (e) {
                                    var n;
                                    null === (n = h.value) || void 0 === n || n.send(e.feed.content)
                                }
                            ))
                        }
                    )),
                    (0,
                        o.Gt)(b.ti, _),
                    t({
                        pause: function () {
                            var e;
                            null === (e = f.value) || void 0 === e || e.stop()
                        },
                        loadLive: function () {
                            return $.apply(this, arguments)
                        },
                        getQuality: function () {
                            var e;
                            return null === (e = O.value) || void 0 === e ? void 0 : e.quality
                        },
                        changeQuality: function () {
                            var e;
                            null === (e = O.value) || void 0 === e || e.changeQuality(0, !0)
                        },
                        finish: function () {
                            ie()
                        }
                    });
                var ve = (0,
                    c.KR)(!1);

                function fe(e) {
                    ve.value = e
                }

                function pe() {
                    pt.G_.value && (0,
                        pt.jD)()
                }

                function he() {
                    V.value && (0,
                        L.Bs)() && (Y(),
                        (0,
                            L.ls)(!1))
                }

                var me = 0;

                function ge(n) {
                    n ? (me = Date.now(),
                        (0,
                            pt.s2)()) : ((0,
                        gt.oO)("LIVE_WINDOWS_DURATION", {
                        total_duration: Date.now() - me,
                        live_stream_id: e.liveStream.id,
                        start_timestamp: me,
                        end_timestamp: Date.now(),
                        author_user_id: e.author.id
                    }),
                        (0,
                            pt.Tl)(),
                    V.value && (0,
                        L.Bs)() && !e.isPk && ((0,
                        L.ls)(!0),
                        z())),
                        (0,
                            pt.jD)(),
                        C.value = n,
                        (0,
                            X.kJ)(!n)
                }

                function ke() {
                    var e;
                    null === (e = E.value) || void 0 === e || e.exit()
                }

                var ye, we = (0,
                    v.fho)();
                return (0,
                    o.wB)(we, (function (n) {
                        var t;
                        "visible" === n && e.active && (null === (t = f.value) || void 0 === t || t.play())
                    }
                )),
                    (0,
                        o.wB)((function () {
                            return e.errorType
                        }
                    ), (function () {
                            e.errorType.title && k()
                        }
                    )),
                    (0,
                        o.wB)((function () {
                            return e.active
                        }
                    ), (function (e) {
                            N.oc && e && function (e) {
                                var n = e.showSmallWindow
                                    , t = e.showQualityTip
                                    , r = e.downQuality
                                    , a = e.hasLogin;
                                (0,
                                    o.wB)((function () {
                                        return a.value
                                    }
                                ), (function (e) {
                                        var a;
                                        e ? (a = Q().get(Z.zH),
                                        (0,
                                            Ct.A)(a) || setTimeout((function () {
                                                n(),
                                                    Q().set(Z.zH, Date.now())
                                            }
                                        ), 1e3)) : oe()((function () {
                                                var e, n = null !== (e = Q().get(Z.BC)) && void 0 !== e ? e : {
                                                    time: 0,
                                                    count: 0
                                                }, a = n.time, i = n.count;
                                                i = Number(i),
                                                    (0,
                                                        Ct.A)(a) && i >= 3 ? r() : (null == t ? void 0 : t()) ? Q().set(Z.BC, {
                                                        time: Date.now(),
                                                        count: i + 1
                                                    }) : function () {
                                                        var e, n = null !== (e = Q().get(Z.S4)) && void 0 !== e ? e : 0;
                                                        (0,
                                                            Ct.A)(n) || oe()((function () {
                                                                (0,
                                                                    X.pL)(),
                                                                    Q().set(Z.S4, Date.now())
                                                            }
                                                        ), 3e3)
                                                    }()
                                            }
                                        ), 1e3)
                                    }
                                ), {
                                    immediate: !0
                                })
                            }({
                                showQualityTip: function () {
                                    var e;
                                    return !!(null === (e = O.value) || void 0 === e ? void 0 : e.showTip())
                                },
                                showSmallWindow: function () {
                                    var e;
                                    null === (e = E.value) || void 0 === e || e.showTip()
                                },
                                downQuality: function () {
                                    var e;
                                    null === (e = O.value) || void 0 === e || e.downQuality()
                                },
                                hasLogin: m
                            })
                        }
                    ), {
                        immediate: !0
                    }),
                    (0,
                        o.wB)(R, (function (n) {
                            e.active && (0,
                                L.$o)(n)
                        }
                    )),
                    (0,
                        o.wB)((function () {
                            return e.isPk
                        }
                    ), (function (e) {
                            V.value && (ye && clearTimeout(ye),
                                e ? Y(!1) : ye = oe()(z, 1e4))
                        }
                    )),
                    function (e, n) {
                        var t = (0,
                            o.gN)("log");
                        return (0,
                            o.uX)(),
                            (0,
                                o.CE)("div", {
                                class: (0,
                                    d.C4)(["player flex-col flex-1 relative", [C.value ? "in-pip" : "out-pip"]])
                            }, [e.liveStream.poster ? ((0,
                                o.uX)(),
                                (0,
                                    o.Wv)(Ie.A, {
                                    key: 0,
                                    class: "blur",
                                    src: e.liveStream.poster
                                }, null, 8, ["src"])) : (0,
                                o.Q3)("", !0), W.value ? (0,
                                o.Q3)("", !0) : ((0,
                                o.uX)(),
                                (0,
                                    o.Wv)(Ce.A, {
                                    key: 1,
                                    full: I.value,
                                    portrait: ve.value
                                }, {
                                    author: (0,
                                        o.k6)((function () {
                                            return [e.active ? ((0,
                                                o.uX)(),
                                                (0,
                                                    o.Wv)(vt.A, {
                                                    key: 0,
                                                    author: e.author,
                                                    "live-stream": e.liveStream,
                                                    "display-like-count": e.displayLikeCount,
                                                    onChangeFollow: se
                                                }, null, 8, ["author", "live-stream", "display-like-count"])) : (0,
                                                o.Q3)("", !0)]
                                        }
                                    )),
                                    _: 1
                                }, 8, ["full", "portrait"])), C.value ? ((0,
                                o.uX)(),
                                (0,
                                    o.Wv)(At, {
                                    key: 2,
                                    onExit: ke
                                })) : (0,
                                o.Q3)("", !0), (0,
                                o.Lk)("div", {
                                ref_key: "instanceRef",
                                ref: s,
                                class: (0,
                                    d.C4)(["player-wrapper flex w-100-p flex-1", {
                                    full: I.value,
                                    "no-gift": !(0,
                                        c.R1)(y).canSendGift
                                }])
                            }, [(0,
                                o.bF)(Se.A, {
                                id: e.liveStream.id,
                                ref_key: "player",
                                ref: f,
                                "is-live": e.isLiving,
                                events: i.value,
                                class: (0,
                                    d.C4)({
                                    "w-100vw": C.value,
                                    "h-100vh": C.value,
                                    "player-in-pip": C.value,
                                    "double-screen": (0,
                                        c.R1)(L.uk)
                                }),
                                poster: e.liveStream.poster,
                                source: "主播间",
                                onEnded: ue,
                                onError: ce,
                                onSyncVolume: (0,
                                    c.R1)(F)
                            }, {
                                canvas: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.Lk)("div", {
                                            ref_key: "mainDisplay",
                                            ref: R,
                                            class: (0,
                                                d.C4)(["main-display", {
                                                hide: !(0,
                                                    c.R1)(L.uk) || e.isPk
                                            }])
                                        }, null, 2)]
                                    }
                                )),
                                default: (0,
                                    o.k6)((function () {
                                        return [(0,
                                            o.bF)(Me.A, {
                                            onMediaInfo: fe
                                        }, {
                                            default: (0,
                                                o.k6)((function () {
                                                    return [(0,
                                                        o.bF)(Te.A, {
                                                        ref_key: "centerStateRef",
                                                        ref: p,
                                                        onClick: pe
                                                    }, {
                                                        error: (0,
                                                            o.k6)((function () {
                                                                var n, t, r;
                                                                return [e.errorType ? ((0,
                                                                    o.uX)(),
                                                                    (0,
                                                                        o.Wv)(st.A, {
                                                                        key: 0,
                                                                        url: null === (n = e.errorType) || void 0 === n ? void 0 : n.url,
                                                                        title: null === (t = e.errorType) || void 0 === t ? void 0 : t.title,
                                                                        content: null === (r = e.errorType) || void 0 === r ? void 0 : r.content
                                                                    }, null, 8, ["url", "title", "content"])) : (0,
                                                                    o.Q3)("", !0)]
                                                            }
                                                        )),
                                                        ended: (0,
                                                            o.k6)((function () {
                                                                var n, t, r;
                                                                return [e.errorType ? ((0,
                                                                    o.uX)(),
                                                                    (0,
                                                                        o.Wv)(st.A, {
                                                                        key: 0,
                                                                        url: null === (n = e.errorType) || void 0 === n ? void 0 : n.url,
                                                                        title: null === (t = e.errorType) || void 0 === t ? void 0 : t.title,
                                                                        content: null === (r = e.errorType) || void 0 === r ? void 0 : r.content
                                                                    }, null, 8, ["url", "title", "content"])) : e.isLiving ? (0,
                                                                    o.Q3)("", !0) : ((0,
                                                                    o.uX)(),
                                                                    (0,
                                                                        o.Wv)(Bn.A, {
                                                                        key: 1,
                                                                        "is-in-picture": C.value,
                                                                        "forbidden-state": e.status.forbiddenState,
                                                                        onNextOne: ee
                                                                    }, null, 8, ["is-in-picture", "forbidden-state"]))]
                                                            }
                                                        )),
                                                        _: 1
                                                    }, 512), C.value || e.active && e.isLiving ? ((0,
                                                        o.uX)(),
                                                        (0,
                                                            o.Wv)(He.A, {
                                                            key: 0,
                                                            "auto-hide": !0
                                                        }, {
                                                            default: (0,
                                                                o.k6)((function () {
                                                                    return [(0,
                                                                        o.Lk)("div", Et, [(0,
                                                                        o.bo)((0,
                                                                        o.bF)(We.A, {
                                                                        "is-in-picture": C.value
                                                                    }, null, 8, ["is-in-picture"]), [[t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "播放"
                                                                    })]]), (0,
                                                                        o.bo)((0,
                                                                        o.bF)(Ve.A, {
                                                                        "is-in-picture": C.value
                                                                    }, null, 8, ["is-in-picture"]), [[t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "刷新"
                                                                    })]])]), (0,
                                                                        o.Lk)("div", Rt, [(0,
                                                                        o.bo)((0,
                                                                        o.bF)(Oe.A, {
                                                                        ref_key: "qualityRef",
                                                                        ref: O,
                                                                        disabled: !1,
                                                                        "custom-label": (0,
                                                                            c.R1)(y).isWorldCup,
                                                                        "can-change": (0,
                                                                            c.R1)(K)
                                                                    }, null, 8, ["custom-label", "can-change"]), [[l.aG, !C.value], [t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "清晰度"
                                                                    })]]), (0,
                                                                        o.bo)((0,
                                                                        o.bF)(Ge.A, null, null, 512), [[l.aG, !C.value && !(0,
                                                                        c.R1)(L.uk)], [t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "旋转"
                                                                    })]]), (0,
                                                                        o.bo)((0,
                                                                        o.bF)(On, null, null, 512), [[l.aG, !C.value], [t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "弹幕"
                                                                    })]]), (0,
                                                                        o.bo)((0,
                                                                        o.bF)(Pe.A, {
                                                                        "is-in-picture": C.value
                                                                    }, null, 8, ["is-in-picture"]), [[t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "声音"
                                                                    })]]), (0,
                                                                        o.bo)((0,
                                                                        o.bF)(_t, {
                                                                        ref_key: "smallScreenRef",
                                                                        ref: E,
                                                                        instance: s.value,
                                                                        "is-portrait": ve.value,
                                                                        onBeforeChange: he,
                                                                        onCantPicture: n[0] || (n[0] = function (e) {
                                                                                return S.value = !1
                                                                            }
                                                                        ),
                                                                        onChangePictureShow: ge
                                                                    }, null, 8, ["instance", "is-portrait"]), [[l.aG, S.value && !C.value], [t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "小屏"
                                                                    })]]), (0,
                                                                        o.bo)((0,
                                                                        o.bF)(un, {
                                                                        "is-theater-mode": e.theaterMode
                                                                    }, null, 8, ["is-theater-mode"]), [[l.aG, !C.value], [t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "网页全屏"
                                                                    })]]), (0,
                                                                        o.bo)((0,
                                                                        o.bF)(je, null, null, 512), [[l.aG, !C.value], [t, (0,
                                                                        c.R1)(dn.A5)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                                        button_name: "全屏"
                                                                    })]])])]
                                                                }
                                                            )),
                                                            _: 1
                                                        })) : (0,
                                                        o.Q3)("", !0), e.active && !C.value && e.isLiving ? ((0,
                                                        o.uX)(),
                                                        (0,
                                                            o.Wv)(qn, {
                                                            key: 1,
                                                            ref_key: "theDanmaku",
                                                            ref: h
                                                        }, null, 512)) : (0,
                                                        o.Q3)("", !0), T.value ? ((0,
                                                        o.uX)(),
                                                        (0,
                                                            o.Wv)(ut, {
                                                            key: 2
                                                        })) : (0,
                                                        o.Q3)("", !0), M.value ? ((0,
                                                        o.uX)(),
                                                        (0,
                                                            o.Wv)(ct, {
                                                            key: 3
                                                        })) : (0,
                                                        o.Q3)("", !0), e.isLiving ? ((0,
                                                        o.uX)(),
                                                        (0,
                                                            o.Wv)(Fn, {
                                                            key: 4,
                                                            onLike: re
                                                        })) : (0,
                                                        o.Q3)("", !0), A.value && 0 !== e.index ? ((0,
                                                        o.uX)(),
                                                        (0,
                                                            o.CE)("div", It, [(0,
                                                            o.Lk)("img", {
                                                            class: "flex-1 w-100-m h-100-m object-contain",
                                                            src: e.liveStream.poster,
                                                            alt: ""
                                                        }, null, 8, Tt)])) : (0,
                                                        o.Q3)("", !0)]
                                                }
                                            )),
                                            _: 1
                                        })]
                                    }
                                )),
                                _: 1
                            }, 8, ["id", "is-live", "events", "class", "poster", "onSyncVolume"]), C.value ? (0,
                                o.Q3)("", !0) : ((0,
                                o.uX)(),
                                (0,
                                    o.Wv)(Re.A, {
                                    key: 0,
                                    active: e.active,
                                    full: I.value,
                                    portrait: ve.value
                                }, null, 8, ["active", "full", "portrait"]))], 2), e.active ? ((0,
                                o.uX)(),
                                (0,
                                    o.Wv)(Ee.A, {
                                    key: 3,
                                    full: I.value
                                }, {
                                    gift: (0,
                                        o.k6)((function () {
                                            return [(0,
                                                o.bF)(ft.A, {
                                                "img-size": "min"
                                            })]
                                        }
                                    )),
                                    kcoin: (0,
                                        o.k6)((function () {
                                            return [(0,
                                                o.bo)((0,
                                                o.bF)(dt.A, {
                                                size: "min"
                                            }, null, 512), [[t, (0,
                                                c.R1)(dn.aG)("LIVE_RECRAGER_BUTTON")]])]
                                        }
                                    )),
                                    _: 1
                                }, 8, ["full"])) : (0,
                                o.Q3)("", !0)], 2)
                    }
            }
        })
            , Ht = (0,
            R.A)(Mt, [["__scopeId", "data-v-2b8d031e"]]);
        var Wt = t(103)
            , Vt = (t(3296),
            t(27208),
            t(48408),
            t(5746),
            t(41010))
            , Ot = s.oc && parseInt(Q().session.get(Z.hk)) || 0
            , Pt = (0,
            c.KR)(Ot)
            , Gt = ["kwai-beta.corp.kuaishou.com", "www.kuaishou.com"]
            , Ft = function () {
            if (N.S$)
                return Pt.value;
            var e, n = new URLSearchParams(window.location.search).get("liveFromSource");
            return Gt.includes(Nt(document.referrer)) && Vt.A.includes(n) && (Q().session.set(Z.hk, n),
                Pt.value = parseInt(n) || 0,
                (e = new URL(window.location.href)).searchParams.delete("liveFromSource"),
                window.history.replaceState({}, "", e.toString())),
                Pt.value
        };

        function Bt() {
            var e = document.referrer;
            return e ? e.includes(document.domain) ? e.includes("/cate/") ? 9 : e.includes("/my-follow/") ? 4 : e.includes("/search") ? 5 : e.includes("/match") || e.includes("/race") ? 6 : e.includes("/live/") ? 5 : 2 : Ft() : Ft() || 7
        }

        function Nt(e) {
            return "" === e || e.includes(document.domain) ? "" : new URL(e).hostname
        }

        var Dt = t(14174)
            , Zt = t.n(Dt);

        function Xt(e, n) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
                if (Array.isArray(e) || (t = function (e, n) {
                    if (e) {
                        if ("string" == typeof e)
                            return Ut(e, n);
                        var t = {}.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name),
                            "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ut(e, n) : void 0
                    }
                }(e)) || n && e && "number" == typeof e.length) {
                    t && (e = t);
                    var r = 0
                        , a = function () {
                    };
                    return {
                        s: a,
                        n: function () {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function (e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, u = !0, o = !1;
            return {
                s: function () {
                    t = t.call(e)
                },
                n: function () {
                    var e = t.next();
                    return u = e.done,
                        e
                },
                e: function (e) {
                    o = !0,
                        i = e
                },
                f: function () {
                    try {
                        u || null == t.return || t.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }

        function Ut(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = Array(n); t < n; t++)
                r[t] = e[t];
            return r
        }

        t(42762);
        var Qt = "SC_WEB_COMMENT_FEED";

        function Kt(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function (n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }
                ))),
                    t.push.apply(t, r)
            }
            return t
        }

        function jt(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? Kt(Object(t), !0).forEach((function (n) {
                        (0,
                            r.A)(e, n, t[n])
                    }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Kt(Object(t)).forEach((function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }
                ))
            }
            return e
        }

        var Yt = {
            class: "flex-col w-100vw h-100vh live-room"
        }
            , qt = {
            class: "room flex-1 flex relative of-h"
        }
            , zt = {
            key: 0,
            class: "swiper-single w-100-p h-100-p flex-col"
        };
        const Jt = (0,
            o.pM)({
            __name: "index",
            setup: function (e) {
                var n, t = (0,
                    O.lq)(), r = (0,
                    H.Pj)(z), i = (0,
                    H.Pj)(X.mH), d = (0,
                    H.Pj)(X.Wj), p = (0,
                    o.EW)((function () {
                        return r.currentLiving.isLiving && !r.currentLiving.liveStream.privateLive || !!(r.currentLiving.isLiving && r.currentLiving.liveStream.privateLive && r.currentLiving.authToken)
                    }
                ));
                (0,
                    H.de)(),
                    n = (0,
                        o.EW)((function () {
                            return r.currentLiving
                        }
                    )),
                    (0,
                        o.wB)(n, (function (e, n) {
                            var t, r, a, i, u, o, l, c;
                            if (!N.S$ && (null === (t = e.author) || void 0 === t ? void 0 : t.id) !== (null == n || null === (r = n.author) || void 0 === r ? void 0 : r.id)) {
                                var s = null !== (a = null !== (i = sessionStorage.getItem(Z.x3)) && void 0 !== i ? i : document.referrer) && void 0 !== a ? a : "";
                                (0,
                                    dn.vI)("WEB_LIVE_ROOM_PAGE", {
                                    author_id: null === (u = e.author) || void 0 === u ? void 0 : u.id,
                                    live_stream_id: null === (o = e.liveStream) || void 0 === o ? void 0 : o.id,
                                    game_id: null === (l = e.gameInfo) || void 0 === l ? void 0 : l.id,
                                    game_name: null === (c = e.gameInfo) || void 0 === c ? void 0 : c.name,
                                    is_living: e.isLiving ? 1 : 0,
                                    browser_width: window.innerWidth,
                                    browser_height: window.innerHeight,
                                    source: Bt(),
                                    domain_name: Nt(s),
                                    url: s.includes(document.domain) ? "" : s
                                })
                            }
                        }
                    ), {
                        immediate: !0
                    });
                var h = (0,
                    c.KR)(!1)
                    , m = (0,
                    o.nI)()
                    , g = (0,
                    c.KR)()
                    , k = (0,
                    c.KR)()
                    , y = (0,
                    o.WQ)(b.nc)
                    , w = (0,
                    o.WQ)(b.j0)
                    , index_all_params = function (e) {
                    var n = (0,
                        c.KR)("")
                        , t = (0,
                        c.KR)("")
                        , r = (0,
                        c.IJ)([])
                        , i = (0,
                        c.KR)([])
                        , l = (0,
                        c.KR)([])
                        , s = (0,
                        c.KR)("")
                        , f = (0,
                        c.KR)(!1)
                        , d = (0,
                        c.KR)("")
                        , p = (0,
                        c.KR)(!1)
                        , h = (0,
                        c.KR)(!1)
                        , m = null
                        , g = (0,
                        o.WQ)(b.nc)
                        , k = (0,
                        o.EW)((function () {
                            var e = parseInt(t.value, 10);
                            return !(!n.value.includes("w") && !n.value.includes("万")) || String(e) !== t.value && "+" !== $()(t.value) || e > pe.ye
                        }
                    ));

                    function handle_chat_msg(a) {
                        var i, u, o = a.commentFeeds, l = a.giftFeeds, c = a.likeFeeds, s = a.displayLikeCount, f = a.displayWatchingCount;
                        o && (i = o.filter((function (n) {
                                return n && n.user && g.value.name !== n.user.userName && n.content && 2 !== n.showType && (t = n.content,
                                    i = (a = (0,
                                        v.rXt)(Z.oT, {
                                        all: []
                                    })).value.all,
                                    u = a.value[null === (r = e.value.author) || void 0 === r ? void 0 : r.id] || [],
                                    ![].concat((0,
                                        W.A)(i), (0,
                                        W.A)(u)).some((function (e) {
                                            return t.includes(e)
                                        }
                                    )));
                                var t, r, a, i, u
                            }
                        )).map((function (e) {
                                return {
                                    feed: e,
                                    options: {
                                        from: "server",
                                        type: "comment"
                                    }
                                }
                            }
                        )),
                        (u = [].concat((0,
                            W.A)(r.value), (0,
                            W.A)(i))).length > 200 && (u = u.slice(50, r.value.length - 50)),
                            r.value = u,
                        i.length && !p.value && (0,
                            X.JS)(i)),
                        l && function (e) {
                            L.apply(this, arguments)
                        }(l),
                        c && function (e) {
                            A.apply(this, arguments)
                        }(c),
                            n.value = s,
                            t.value = f
                    }

                    function w(e) {
                        var n = e.message.map((function (e) {
                                return e.segment.reduce((function (e, n) {
                                        return {
                                            name: e.text_segment.text.trimEnd(),
                                            content: n.text_segment.text
                                        }
                                    }
                                ))
                            }
                        )).map((function (e) {
                                var n;
                                return {
                                    feed: {
                                        content: e.content,
                                        deviceHash: "",
                                        user: {
                                            principalId: "OUTSIDE",
                                            userName: ":" === (null === (n = e.name) || void 0 === n ? void 0 : n.substr(-1)) ? e.name.slice(0, -1) : e.name
                                        }
                                    },
                                    options: {
                                        from: "server",
                                        type: "comment"
                                    }
                                }
                            }
                        ))
                            , t = [].concat((0,
                            W.A)(r.value), (0,
                            W.A)(n));
                        t.length > 200 && (t = t.slice(50, r.value.length - 50)),
                            r.value = t,
                        n.length && !p.value && (0,
                            X.JS)(n)
                    }

                    function _(e) {
                        var n, t;
                        l.value = null !== (n = null === (t = e.watchingUser) || void 0 === t ? void 0 : t.splice(0, 3)) && void 0 !== n ? n : []
                    }

                    function x(e) {
                        f.value = Boolean(null == e ? void 0 : e.displayMask),
                            d.value = null != e && e.displayMask ? "".concat(null == e ? void 0 : e.warningMask.title, "，").concat(null == e ? void 0 : e.warningMask.detail) : ""
                    }

                    function L() {
                        return (L = (0,
                            a.A)(u().mark((function e(n) {
                                var t;
                                return u().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    t = n.filter((function (e) {
                                                            return (null == e ? void 0 : e.user) && g.value.name !== e.user.userName
                                                        }
                                                    )).map((function (e) {
                                                            return {
                                                                feed: e,
                                                                options: {
                                                                    from: "server",
                                                                    type: "gift"
                                                                }
                                                            }
                                                        }
                                                    )),
                                                        k.value ? (0,
                                                            pe.LW)(t) : 0 === (0,
                                                            v.rXt)(Z.KP, 0).value && (r.value = [].concat((0,
                                                            W.A)(r.value), (0,
                                                            W.A)(t))),
                                                    1 !== (0,
                                                        v.rXt)(Z.s4, 0).value && ve(i, t.map((function (e) {
                                                            return e.feed
                                                        }
                                                    )));
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )))).apply(this, arguments)
                    }

                    function A() {
                        return (A = (0,
                            a.A)(u().mark((function e(n) {
                                var t;
                                return u().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (1 !== (0,
                                                        v.rXt)(Z.RM, 0).value) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 2:
                                                    t = n.map((function (e) {
                                                            return {
                                                                feed: e,
                                                                options: {
                                                                    from: "server",
                                                                    type: "like"
                                                                }
                                                            }
                                                        }
                                                    )),
                                                        k.value ? (0,
                                                            pe.LW)(t) : r.value = [].concat((0,
                                                            W.A)(r.value), (0,
                                                            W.A)(t));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )))).apply(this, arguments)
                    }

                    function S(e) {
                        var n = e.content
                            , t = e.type
                            , a = {
                            feed: {
                                content: n,
                                user: {
                                    userName: e.name
                                }
                            },
                            options: {
                                from: G.b0.SELF,
                                type: t
                            }
                        };
                        r.value = [].concat((0,
                            W.A)(r.value), [a]),
                        t !== G.PY.COMMENT || p.value || (0,
                            X.JS)([a])
                    }

                    function C(e) {
                        var n = {
                            feed: e,
                            options: {
                                from: G.b0.SELF,
                                type: "gift"
                            }
                        };
                        r.value = [].concat((0,
                            W.A)(r.value), [n]),
                            ve(i, [e])
                    }

                    function E() {
                        r.value = [],
                            t.value = "",
                            n.value = "",
                            l.value = [],
                            i.value = [],
                            h.value = !1
                    }

                    function R() {
                        m && m()
                    }

                    function I() {
                        return I = (0,
                            a.A)(u().mark((function e(n, t, r) {
                                var live_stream_id, _token, l, c, ws_send_msg, v, f, d, switch_msg_mmm, k, b, L, A, S, C;
                                return u().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return C = function (e) {
                                                        h.value = !1
                                                    }
                                                        ,
                                                        S = function (e) {
                                                            h.value || (h.value = !0)
                                                        }
                                                        ,
                                                        A = function (e) {
                                                            var n, t = he(e.configSwitchItem);
                                                            try {
                                                                for (t.s(); !(n = t.n()).done;) {
                                                                    var r = n.value;
                                                                    1 === r.configSwitchType && r.value && (p.value = !0)
                                                                }
                                                            } catch (e) {
                                                                t.e(e)
                                                            } finally {
                                                                t.f()
                                                            }
                                                        }
                                                        ,
                                                        L = function () {
                                                            return (L = (0,
                                                                a.A)(u().mark((function e(n) {
                                                                    var t;
                                                                    return u().wrap((function (e) {
                                                                            for (; ;)
                                                                                switch (e.prev = e.next) {
                                                                                    case 0:
                                                                                        if (t = n.event,
                                                                                            !n.isClientClose) {
                                                                                            e.next = 5;
                                                                                            break
                                                                                        }
                                                                                        console.log("".concat((new Date).toDateString(), " 主动关播")),
                                                                                            e.next = 9;
                                                                                        break;
                                                                                    case 5:
                                                                                        if (console.log("websocket连接close, code:".concat(t.code, ", reason:").concat(t.reason)),
                                                                                        1006 !== t.code) {
                                                                                            e.next = 9;
                                                                                            break
                                                                                        }
                                                                                        return e.next = 9,
                                                                                            c();
                                                                                    case 9:
                                                                                        if (d.value) {
                                                                                            e.next = 11;
                                                                                            break
                                                                                        }
                                                                                        return e.abrupt("return");
                                                                                    case 11:
                                                                                    case "end":
                                                                                        return e.stop()
                                                                                }
                                                                        }
                                                                    ), e)
                                                                }
                                                            )))).apply(this, arguments)
                                                        }
                                                        ,
                                                        b = function (e) {
                                                            return L.apply(this, arguments)
                                                        }
                                                        ,
                                                        k = function (e) {
                                                            601 === (null == e ? void 0 : e.code) && r(),
                                                                console.log("handleError", e)
                                                        }
                                                        ,
                                                        switch_msg_mmm = function (e) {
                                                            if (e)
                                                                // console.info('G=> ', e);
                                                                // if(e===undefined){
                                                                //     alert(e);
                                                                // }

                                                                switch (e.type) {
                                                                    case G.Go.SC_ENTER_ROOM_ACK:
                                                                        f(e.payload.heartbeatIntervalMs);
                                                                        break;
                                                                    case G.Go.SC_FEED_PUSH:
                                                                        handle_chat_msg(e.payload);
                                                                        break;
                                                                    case G.Go.SC_LIVE_WATCHING_LIST:
                                                                        _(e.payload);
                                                                        break;
                                                                    case G.Go.SC_LIVE_WARNING_MASK_STATUS_CHANGED_AUDIENCE:
                                                                        x(e.payload);
                                                                        break;
                                                                    case G.Go.SC_LIVE_SPECIAL_ACCOUNT_CONFIG_STATE:
                                                                        A(e.payload);
                                                                        break;
                                                                    case G.Go.SC_COMMENT_ZONE_RICH_TEXT:
                                                                        w(e.payload);
                                                                        break;
                                                                    case G.Go.SC_ERROR:
                                                                        k(e.payload);
                                                                        break;
                                                                    case G.Go.SC_INTERACTIVE_CHAT_SWITCH_BIZ:
                                                                    case G.Go.SC_LIVE_MULTI_PK_STATISTIC:
                                                                        S(e.payload);
                                                                        break;
                                                                    case G.Go.SC_INTERACTIVE_CHAT_CLOSED:
                                                                        C(e.payload)
                                                                }
                                                        }
                                                        ,
                                                        live_stream_id = t.liveStreamId,
                                                        _token = t.token,
                                                        l = (0, H.xp)(n, {
                                                            onMessage: switch_msg_mmm,
                                                            onClose: b
                                                        }),
                                                        c = l.open,
                                                        ws_send_msg = l.send,
                                                        v = l.close,
                                                        f = l.heartbeat,
                                                        d = l.websocketInstance,
                                                        m = v,
                                                        e.next = 12,
                                                        c();
                                                case 12:
                                                    ws_send_msg({
                                                        type: "CS_ENTER_ROOM",
                                                        payload: {
                                                            liveStreamId: live_stream_id,
                                                            token: _token,
                                                            pageId: Q().session.get("kslive.log.page_id")
                                                        }
                                                    });
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        ))),
                            I.apply(this, arguments)
                    }

                    return (0,
                        H.iX)(de.IW, C),
                        (0,
                            H.iX)(de.K_, S),
                        {
                            close: R,
                            clear: E,
                            destory: function () {
                                R(),
                                    E()
                            },
                            connect: function (e, n, t) {
                                return I.apply(this, arguments)
                            },
                            comment: r,
                            giftStack: i,
                            showRiskMask: f,
                            watchingList: l,
                            sendNoticeList: function (e) {
                                var n = e.map((function (e) {
                                        return {
                                            feed: {
                                                content: e.content,
                                                user: {
                                                    userName: e.userName
                                                }
                                            },
                                            options: {
                                                from: G.b0.SYSTEM,
                                                type: G.PY.COMMENT
                                            }
                                        }
                                    }
                                ));
                                r.value = [].concat((0,
                                    W.A)(r.value), (0,
                                    W.A)(n))
                            },
                            sendSelfComment: S,
                            sendSelfGift: C,
                            riskMaskContent: d,
                            displayWatchingCountRef: t,
                            rollingMessage: s,
                            displayLikeCountRef: n,
                            recallComment: function (e) {
                                var n = e.content
                                    , t = e.type
                                    , a = {
                                    feed: {
                                        content: n,
                                        user: {
                                            userName: e.name
                                        }
                                    },
                                    options: {
                                        from: G.b0.SERVER,
                                        type: t,
                                        source: G.aT.RECALL
                                    }
                                };
                                r.value = [].concat((0,
                                    W.A)(r.value), [a]),
                                t !== G.PY.COMMENT || p.value || (0,
                                    X.JS)([a])
                            },
                            isPking: h
                        }
                }((0,
                    o.EW)((function () {
                        return r.currentLiving
                    }
                )))
                    , x = index_all_params.clear
                    , L = index_all_params.destory
                    , A = index_all_params.comment
                    , s_connect = index_all_params.connect
                    , C = index_all_params.giftStack
                    , E = index_all_params.watchingList
                    , R = index_all_params.showRiskMask
                    , V = index_all_params.recallComment
                    , s_send_notice_list = index_all_params.sendNoticeList
                    , D = index_all_params.sendSelfComment
                    , U = index_all_params.displayWatchingCountRef
                    , K = index_all_params.displayLikeCountRef
                    , j = index_all_params.isPking
                    , Y = function (e, n, t, r, i, l, f, d, p) {
                    var h, m = (0,
                        v.rXt)(Z.v$, []), g = (0,
                        s.TO)((function () {
                            r(f.value)
                        }
                    ), (null === (h = e.value.config) || void 0 === h ? void 0 : h.noticeDisplayDelay) || 3e3), k = g.start, y = g.stop, w = (0,
                        c.KR)({
                        1: 0,
                        2: 0
                    }), _ = !1;

                    function x() {
                        return L.apply(this, arguments)
                    }

                    function L() {
                        return (L = (0,
                            a.A)(u().mark((function t() {
                                return u().wrap((function (t) {
                                        for (; ;)
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return d && d(),
                                                    e.value.author.id && window.history.replaceState({}, null, "/u/".concat(e.value.author.id)),
                                                        t.next = 4,
                                                        (0,
                                                            o.dY)();
                                                case 4:
                                                    if (m.value.length >= 100 && m.value.shift(),
                                                    m.value.includes(e.value.author.id) && Zt()(m.value, (function (n) {
                                                            return n === e.value.author.id
                                                        }
                                                    )),
                                                    e.value.author.id || m.value.push(e.value.author.id),
                                                        e.value.isLiving) {
                                                        t.next = 9;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 9:
                                                    return t.next = 11,
                                                        (0,
                                                            o.dY)();
                                                case 11:
                                                    n.value && (w.value = {
                                                        1: 0,
                                                        2: 0
                                                    },
                                                        y(),
                                                    e.value.config.enableWebHistoryFeed && C(!0),
                                                        A());
                                                case 12:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t)
                            }
                        )))).apply(this, arguments)
                    }

                    function A() {
                        return S.apply(this, arguments)
                    }

                    function S() {
                        return (S = (0,
                            a.A)(u().mark((function n() {
                                var a, o, c, s, v, f, d;
                                return u().wrap((function (n) {
                                        for (; ;)
                                            switch (n.prev = n.next) {
                                                case 0:
                                                    if (!_) {
                                                        n.next = 2;
                                                        break
                                                    }
                                                    return n.abrupt("return");
                                                case 2:
                                                    if (_ = !0,
                                                        o = null !== (a = e.value.websocketInfo) && void 0 !== a ? a : {},
                                                        c = o.webSocketAddresses,
                                                        s = o.token,
                                                        c) {
                                                        n.next = 14;
                                                        break
                                                    }
                                                    return n.next = 7,
                                                        t(e.value.liveStream.id);
                                                case 7:
                                                    if ((d = n.sent) === G.FR.SUCCESS) {
                                                        n.next = 12;
                                                        break
                                                    }
                                                    return _ = !1,
                                                        (0,
                                                            gt.ho)({
                                                            name: "【P2】长链接地址获取失败",
                                                            src: "/pages/LiveRoom/hooks/rommChange.ts",
                                                            event_type: "error",
                                                            extra_info: JSON.stringify({
                                                                result: d
                                                            })
                                                        }),
                                                        n.abrupt("return", r((0,
                                                            N.cX)(d)));
                                                case 12:
                                                    c = null === (v = e.value.websocketInfo) || void 0 === v ? void 0 : v.webSocketAddresses,
                                                        s = null === (f = e.value.websocketInfo) || void 0 === f ? void 0 : f.token;
                                                case 14:
                                                    if (!(c.length > 0)) {
                                                        n.next = 26;
                                                        break
                                                    }
                                                    return n.prev = 15,
                                                        n.next = 18,
                                                        i(c, {
                                                            liveStreamId: e.value.liveStream.id,
                                                            token: s
                                                        }, l);
                                                case 18:
                                                    k(),
                                                        n.next = 24;
                                                    break;
                                                case 21:
                                                    n.prev = 21,
                                                        n.t0 = n.catch(15),
                                                        r([{
                                                            userName: "系统消息",
                                                            content: "建连失败，请稍后重试"
                                                        }]);
                                                case 24:
                                                    n.next = 27;
                                                    break;
                                                case 26:
                                                    r([{
                                                        userName: "系统消息",
                                                        content: "未获取到流地址"
                                                    }]);
                                                case 27:
                                                    _ = !1;
                                                case 28:
                                                case "end":
                                                    return n.stop()
                                            }
                                    }
                                ), n, null, [[15, 21]])
                            }
                        )))).apply(this, arguments)
                    }

                    function C() {
                        return E.apply(this, arguments)
                    }

                    function E() {
                        return E = (0,
                            a.A)(u().mark((function n() {
                                var t, r, a, i, o, l, c, s = arguments;
                                return u().wrap((function (n) {
                                        for (; ;)
                                            switch (n.prev = n.next) {
                                                case 0:
                                                    return t = s.length > 0 && void 0 !== s[0] && s[0],
                                                        n.next = 3,
                                                        (0,
                                                            P.iU)(e.value.liveStream.id, w.value);
                                                case 3:
                                                    r = n.sent,
                                                        w.value = r.feedTypeCursorMap,
                                                    (a = r.backTraceFeedMap.sort((function (e, n) {
                                                            var t = e.type === Qt ? e.payload.time : e.payload.server_timestamp;
                                                            return (n.type === Qt ? n.payload.time : n.payload.server_timestamp) - t
                                                        }
                                                    ))).length > 0 && (0,
                                                        dn.cS)("LIVE_BEFORE_WELCOME_AREA", {
                                                        is_auto: t
                                                    }),
                                                        i = Xt(a);
                                                    try {
                                                        for (i.s(); !(o = i.n()).done;)
                                                            (l = o.value).type === Qt && p({
                                                                content: l.payload.content,
                                                                name: l.payload.user.userName,
                                                                type: G.PY.COMMENT
                                                            }),
                                                            "SC_WEB_COMMENT_RICH_TEXT_MESSAGE" === l.type && (c = l.payload.segment[0].text_segment.text,
                                                                p({
                                                                    content: l.payload.segment[1].text_segment.text,
                                                                    name: c.trim().slice(0, -1),
                                                                    type: G.PY.COMMENT
                                                                }))
                                                    } catch (e) {
                                                        i.e(e)
                                                    } finally {
                                                        i.f()
                                                    }
                                                case 9:
                                                case "end":
                                                    return n.stop()
                                            }
                                    }
                                ), n)
                            }
                        ))),
                            E.apply(this, arguments)
                    }

                    return (0,
                        o.Gt)(b.tx, (0,
                        a.A)(u().mark((function e() {
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return C(),
                                                    e.abrupt("return", w.value);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))),
                        (0,
                            o.Gt)(b.Oo, w),
                        (0,
                            o.wB)((function () {
                                return e.value.authToken
                            }
                        ), function () {
                            var e = (0,
                                a.A)(u().mark((function e(n) {
                                    return u().wrap((function (e) {
                                            for (; ;)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!n) {
                                                            e.next = 4;
                                                            break
                                                        }
                                                        return e.next = 3,
                                                            (0,
                                                                o.dY)();
                                                    case 3:
                                                        x();
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }()),
                        {
                            changeRoomEffect: x
                        }
                }((0,
                    o.EW)((function () {
                        return r.currentLiving
                    }
                )), p, r.getWebsocketInfo, s_send_notice_list, s_connect, (function () {
                        return se.apply(this, arguments)
                    }
                ), (0,
                    o.EW)((function () {
                        return r.noticeList
                    }
                )), L, V)
                    , q = Y.changeRoomEffect;

                function J(e) {
                    r.activeIndex = e.activeIndex,
                        K.value = ""
                }

                var ee = (0,
                    o.EW)((function () {
                        return r.activeIndex > 0
                    }
                ))
                    , ne = (0,
                    o.EW)((function () {
                        return r.activeIndex < r.playList.length - 1
                    }
                ))
                    , te = Ae((0,
                    o.EW)((function () {
                        return r.currentLiving
                    }
                ))).addPoints
                    , re = (0,
                    s.TO)((function () {
                        q()
                    }
                ), 500)
                    , ae = re.start
                    , ie = re.stop;

                function ue() {
                    return le.apply(this, arguments)
                }

                function le() {
                    return (le = (0,
                        a.A)(u().mark((function e() {
                            var n, t;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    (0,
                                                        o.dY)();
                                            case 2:
                                                return null === (n = m.refs.player_0) || void 0 === n || n.loadLive(),
                                                    ae(),
                                                    e.next = 6,
                                                    r.loadMore();
                                            case 6:
                                                return e.next = 8,
                                                    (0,
                                                        o.dY)();
                                            case 8:
                                                null === (t = g.value) || void 0 === t || t.update();
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                function ce(e, n) {
                    n && n !== r.currentLiving.author.id || (e ? g.value.next() : g.value.prev())
                }

                function se() {
                    return (se = (0,
                        a.A)(u().mark((function e() {
                            var n;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                null === (n = m.refs["player_".concat(null == r ? void 0 : r.activeIndex)]) || void 0 === n || n.finish();
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )))).apply(this, arguments)
                }

                (0,
                    o.wB)((function () {
                        return r.activeIndex
                    }
                ), function () {
                    var e = (0,
                        a.A)(u().mark((function e(n, t) {
                            var a, i, l, c;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (-1 !== n) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                if (null === (a = r.currentLiving.author) || void 0 === a || !a.id || 0 === n) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.next = 5,
                                                    r.getLiveDetail(null === (i = r.currentLiving.author) || void 0 === i ? void 0 : i.id);
                                            case 5:
                                                if (null === (l = m.refs["player_".concat(n)]) || void 0 === l || l.loadLive(),
                                                null === (c = m.refs["player_".concat(t)]) || void 0 === c || c.pause(),
                                                    ie(),
                                                    ae(),
                                                ne.value || !g.value) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return e.next = 12,
                                                    r.loadMore();
                                            case 12:
                                                return e.next = 14,
                                                    (0,
                                                        o.dY)();
                                            case 14:
                                                g.value.update();
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    )));
                    return function (n, t) {
                        return e.apply(this, arguments)
                    }
                }()),
                    (0,
                        o.wB)((function () {
                            return r.currentLiving.authToken
                        }
                    ), function () {
                        var e = (0,
                            a.A)(u().mark((function e(n) {
                                var t;
                                return u().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (!n) {
                                                        e.next = 4;
                                                        break
                                                    }
                                                    return e.next = 3,
                                                        (0,
                                                            o.dY)();
                                                case 3:
                                                    null === (t = m.refs["player_".concat(r.activeIndex)]) || void 0 === t || t.loadLive();
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function (n) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    (0,
                        o.wB)((function () {
                            return t.params.principalId
                        }
                    ), (0,
                        a.A)(u().mark((function e() {
                            var n, a;
                            return u().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (t.params.principalId) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                return r.clear(),
                                                    r.activeIndex = -1,
                                                    e.next = 6,
                                                    (0,
                                                        o.dY)();
                                            case 6:
                                                return r.activeIndex = 0,
                                                null === (n = g.value) || void 0 === n || n.update(),
                                                    e.next = 10,
                                                    r.getLiveDetail(t.params.principalId);
                                            case 10:
                                                return e.next = 12,
                                                    (0,
                                                        o.dY)();
                                            case 12:
                                                null === (a = m.refs["player_".concat(r.activeIndex)]) || void 0 === a || a.loadLive();
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                            ), e)
                        }
                    ))));
                var fe = (0,
                    c.KR)(!1);

                function me() {
                    fe.value = en().isFullscreen,
                    fe.value && (h.value = !1)
                }

                var ke = (0,
                    s.k3)((function (e) {
                        ce(e.deltaY > 0)
                    }
                ), 1800);
                (0,
                    H.G_)((function () {
                        (0,
                            v.MLh)(g.value.root, "wheel", ke),
                            en().on("change", me),
                            function (e) {
                                (0,
                                    o.wB)((function () {
                                        return e.value
                                    }
                                ), (function (e) {
                                        e || oe()((0,
                                            a.A)(u().mark((function e() {
                                                var n, t, r, a;
                                                return u().wrap((function (e) {
                                                        for (; ;)
                                                            switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (t = null !== (n = Q().get(Z.wi)) && void 0 !== n ? n : {
                                                                        time: 0,
                                                                        count: 0
                                                                    },
                                                                        r = t.time,
                                                                        a = t.count,
                                                                        a = Number(a),
                                                                        !((0,
                                                                            Ct.A)(r) && a >= 2)) {
                                                                        e.next = 4;
                                                                        break
                                                                    }
                                                                    return e.abrupt("return");
                                                                case 4:
                                                                    return e.next = 6,
                                                                        (0,
                                                                            B.t)();
                                                                case 6:
                                                                    Q().set(Z.wi, {
                                                                        time: Date.now(),
                                                                        count: a + 1
                                                                    });
                                                                case 7:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                    }
                                                ), e)
                                            }
                                        ))), 1e4)
                                    }
                                ), {
                                    immediate: !0
                                })
                            }(w)
                    }
                )),
                    (0,
                        H.iX)(de.f7, (function (e) {
                            e ? g.value.enable() : g.value.disable()
                        }
                    )),
                    (0,
                        Wt._2)(["/live_api/liveroom/livedetail"], function () {
                        var e = (0,
                            a.A)(u().mark((function e(n, t) {
                                var a, i;
                                return u().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (n.result !== Wt.fL.SUCCESS) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    return a = t.params.principalId,
                                                        r.clear(),
                                                        r.activeIndex = 0,
                                                        e.next = 6,
                                                        r.getLiveDetail(a);
                                                case 6:
                                                    e.sent && (null === (i = r.currentLiving) || void 0 === i || delete i.errorType,
                                                        ue()),
                                                        e.next = 11;
                                                    break;
                                                case 10:
                                                    n.result,
                                                        Wt.fL.USER_CANCEL;
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function (n, t) {
                            return e.apply(this, arguments)
                        }
                    }());
                var ye = (0,
                    v.rXt)(Z.FN, jt({}, Zn.sb));

                function we(e) {
                    var n, t;
                    te(e === G.m3.Following ? ge.POS : ge.PASS, 1, null === (n = r.currentLiving.gameInfo) || void 0 === n ? void 0 : n.id, null === (t = r.currentLiving.gameInfo) || void 0 === t ? void 0 : t.name)
                }

                return (0,
                    o.wB)(w, (function (e) {
                        e || (ye.value = jt({}, Zn.sb))
                    }
                )),
                    (0,
                        o.Gt)(b.Hf, ye),
                    (0,
                        o.Gt)(b.en, (function () {
                            ye.value = jt({}, Zn.sb)
                        }
                    )),
                    (0,
                        o.hi)((function () {
                            en().off("change", me),
                                ie(),
                            L && L()
                        }
                    )),
                    (0,
                        o.Gt)(b.RJ, (0,
                        o.EW)((function () {
                            return r.currentLiving.isLiving
                        }
                    ))),
                    (0,
                        o.Gt)(b.az, p),
                    (0,
                        o.Gt)(b.$m, (0,
                        o.EW)((function () {
                            return r.currentLiving.author
                        }
                    ))),
                    (0,
                        o.Gt)(b.qq, (0,
                        o.EW)((function () {
                            return r.currentLiving.liveStream
                        }
                    ))),
                    (0,
                        o.Gt)(b.Q4, (0,
                        o.EW)((function () {
                            var e;
                            return null !== (e = r.currentLiving.config) && void 0 !== e ? e : {}
                        }
                    ))),
                    (0,
                        o.Gt)(b.A8, r.finishLiving),
                    (0,
                        o.Gt)(b.R, r.refetchLiveData),
                    (0,
                        o.Gt)(b.FE, r.checkPassword),
                    (0,
                        o.Gt)(b.pN, (0,
                        o.EW)((function () {
                            return i.allGifts
                        }
                    ))),
                    (0,
                        o.Gt)(b.rc, (0,
                        o.EW)((function () {
                            return i.iconUrls
                        }
                    ))),
                    (0,
                        o.Gt)(b.VI, (0,
                        o.EW)((function () {
                            return d.ksCoin
                        }
                    ))),
                    (0,
                        o.Gt)(b.zR, (0,
                        o.EW)((function () {
                            return d.payKey
                        }
                    ))),
                    (0,
                        o.Gt)(b.MI, d.sendGift),
                    (0,
                        o.Gt)(b.NJ, (0,
                        o.EW)((function () {
                            return d.styleType
                        }
                    ))),
                    (0,
                        o.Gt)(b.CM, A),
                    (0,
                        o.Gt)(b.U7, x),
                    (0,
                        o.Gt)(b.S_, h),
                    (0,
                        o.Gt)(b.bN, (0,
                        o.EW)((function () {
                            return C.value
                        }
                    ))),
                    (0,
                        o.Gt)(b.O4, (0,
                        o.EW)((function () {
                            return i.giftList
                        }
                    ))),
                    (0,
                        o.Gt)(b.jS, (0,
                        o.EW)((function () {
                            return i.giftPanelList
                        }
                    ))),
                    (0,
                        o.Gt)(b.pN, (0,
                        o.EW)((function () {
                            return i.allGifts
                        }
                    ))),
                    (0,
                        o.Gt)(b.jj, (0,
                        o.EW)((function () {
                            return i.token
                        }
                    ))),
                    (0,
                        o.Gt)(b.GG, (0,
                        o.EW)((function () {
                            return i.panelToken
                        }
                    ))),
                    (0,
                        o.Gt)(b.Co, (function () {
                            return i.getGift(r.currentLiving.liveStream.id)
                        }
                    )),
                    (0,
                        o.Gt)(b.h7, (function (e) {
                            return i.getPanelGift(r.currentLiving.liveStream.id, e)
                        }
                    )),
                    (0,
                        o.Gt)(b.P4, (function (e) {
                            e ? en().request(g.value.root.value) : en().element && en().exit()
                        }
                    )),
                    (0,
                        o.Gt)(b.kl, fe),
                    (0,
                        o.Gt)(b.D1, function () {
                        var e = (0,
                            a.A)(u().mark((function e(n) {
                                var t, a, i, o;
                                return u().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (r.currentLiving.isLiving) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", {
                                                        result: 999,
                                                        error_msg: "主播暂时还没有开播~"
                                                    });
                                                case 2:
                                                    if (!r.currentLiving.liveStream.privateLive || 0 !== (null === (t = r.currentLiving.websocketInfo) || void 0 === t ? void 0 : t.webSocketAddresses.length)) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    return e.abrupt("return", {
                                                        result: 999,
                                                        error_msg: "进入私密直播间后，才可以正常发送弹幕~"
                                                    });
                                                case 5:
                                                    if (r.currentLiving.websocketInfo && 0 !== r.currentLiving.websocketInfo.webSocketAddresses.length) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.abrupt("return", {
                                                        result: 999,
                                                        error_msg: "进入直播间失败，请刷新后，重试~"
                                                    });
                                                case 7:
                                                    return e.next = 9,
                                                        (0,
                                                            P.S5)({
                                                            liveStreamId: r.currentLiving.liveStream.id,
                                                            content: n,
                                                            color: null
                                                        });
                                                case 9:
                                                    return a = e.sent.data,
                                                        i = a.result,
                                                        o = a.error_msg,
                                                    1 === i && D({
                                                        content: n,
                                                        name: y.value.name,
                                                        type: G.PY.COMMENT
                                                    }),
                                                        e.abrupt("return", {
                                                            result: i,
                                                            error_msg: o
                                                        });
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function (n) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    (0,
                        v.Ta5)(["ArrowUp"], (function () {
                            ce(!1)
                        }
                    )),
                    (0,
                        v.Ta5)(["ArrowDown"], (function () {
                            ce(!0)
                        }
                    )),
                    function (e, n) {
                        return (0,
                            o.uX)(),
                            (0,
                                o.CE)("div", Yt, [(0,
                                o.bo)((0,
                                o.bF)(T.A, null, null, 512), [[l.aG, !h.value && !fe.value]]), (0,
                                o.Lk)("div", qt, [(0,
                                o.Lk)("div", null, [(0,
                                o.bF)(f.A, {
                                ref_key: "rotationRef",
                                ref: g,
                                list: (0,
                                    c.R1)(r).playList,
                                "theater-mode": h.value,
                                "is-full-screen": fe.value,
                                onChangeIndex: J,
                                onAfterInit: ue
                            }, {
                                default: (0,
                                    o.k6)((function (e) {
                                        var n;
                                        return [e.index === (0,
                                            c.R1)(r).activeIndex || e.index === (0,
                                            c.R1)(r).activeIndex - 1 || e.index === (0,
                                            c.R1)(r).activeIndex + 1 ? ((0,
                                            o.uX)(),
                                            (0,
                                                o.CE)("div", zt, [(0,
                                                o.bF)(Ht, {
                                                ref: "player_".concat(e.index),
                                                index: e.index,
                                                author: e.item.author,
                                                "auth-token": null !== (n = e.item.authToken) && void 0 !== n ? n : "",
                                                "is-living": e.item.isLiving,
                                                "live-stream": e.item.liveStream,
                                                "error-type": e.item.errorType,
                                                "show-risk-mask": (0,
                                                    c.R1)(R),
                                                status: e.item.status,
                                                "display-like-count": (0,
                                                    c.R1)(K),
                                                active: e.index === (0,
                                                    c.R1)(r).activeIndex,
                                                "is-full": fe.value,
                                                "is-pk": (0,
                                                    c.R1)(j),
                                                onSwitchLiving: ce,
                                                onChangeFollow: we
                                            }, null, 8, ["index", "author", "auth-token", "is-living", "live-stream", "error-type", "show-risk-mask", "status", "display-like-count", "active", "is-full", "is-pk"])])) : (0,
                                            o.Q3)("", !0)]
                                    }
                                )),
                                control: (0,
                                    o.k6)((function () {
                                        return [!ne.value && !ee.value || (0,
                                            c.R1)(pt.G_) ? (0,
                                            o.Q3)("", !0) : ((0,
                                            o.uX)(),
                                            (0,
                                                o.Wv)(M.A, {
                                                key: 0,
                                                "can-prev": ee.value,
                                                "can-next": ne.value,
                                                onSwitchProduct: ce
                                            }, null, 8, ["can-prev", "can-next"]))]
                                    }
                                )),
                                _: 1
                            }, 8, ["list", "theater-mode", "is-full-screen"])]), (0,
                                o.bF)(I, {
                                ref_key: "sidebarRef",
                                ref: k,
                                "is-full-screen": fe.value,
                                "live-stream": (0,
                                    c.R1)(r).currentLiving.liveStream,
                                "watching-count": (0,
                                    c.R1)(U),
                                "watching-list": (0,
                                    c.R1)(E)
                            }, null, 8, ["is-full-screen", "live-stream", "watching-count", "watching-list"])])])
                    }
            }
        })
            , $t = Jt
    }
    ,
    37516: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00879 3.88611C2.00879 3.02455 2.70722 2.32611 3.56879 2.32611L18.431 2.3268C19.2926 2.3268 19.991 3.02523 19.991 3.8868L19.9914 9.78098H18.4314L18.431 3.8868L3.56879 3.88611L3.56913 16.7482L10.4635 16.7489V18.3089L3.56913 18.3082C2.70757 18.3082 2.00913 17.6098 2.00913 16.7482L2.00879 3.88611Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2609 13.5009C12.2609 12.6393 12.9593 11.9409 13.8209 11.9409H19.434C20.2955 11.9409 20.9939 12.6393 20.9939 13.5009V18.1139C20.9939 18.9755 20.2955 19.6739 19.434 19.6739H13.8209C12.9593 19.6739 12.2609 18.9755 12.2609 18.1139V13.5009ZM13.8209 13.5009V18.1139H19.434V13.5009H13.8209Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.22523 10.649L11.1586 10.9814L10.6031 7.07323L7.22523 10.649Z" fill="currentColor"></path><path d="M10.1988 10.0811L5.43256 5.57861" stroke="currentColor" stroke-width="1.56"></path></svg> ·'
    }
    ,
    39510: (e, n, t) => {
        "use strict";
        t.d(n, {
            G_: () => o,
            Tl: () => f,
            WU: () => c,
            id: () => u,
            jD: () => s,
            s2: () => v
        });
        var r = t(72708)
            , a = t(50953)
            , i = t(20641)
            , u = "#__living_panel"
            , o = (0,
            a.KR)(!1)
            , l = (0,
            a.KR)(!1);

        function c() {
            l.value || (o.value = !0)
        }

        function s() {
            o.value = !1
        }

        function v() {
            l.value = !0
        }

        function f() {
            l.value = !1
        }

        (0,
            i.wB)(o, (function (e) {
                (0,
                    r.kJ)(!e)
            }
        ))
    }
    ,
    50242: (e, n, t) => {
        "use strict";
        t.d(n, {
            R: () => c
        });
        var r = t(80296)
            , a = (t(76031),
            t(50953))
            , i = t(20641);

        function u(e, n) {
            var t = (0,
                a.KR)(e)
                , r = (0,
                a.KR)(null)
                , u = function () {
                null === r.value && (r.value = window.setInterval((function () {
                        t.value > 0 ? t.value -= 100 : (clearInterval(r.value),
                            r.value = null)
                    }
                ), 100))
            }
                , o = function () {
                null !== r.value && (clearInterval(r.value),
                    r.value = null)
            };
            return (0,
                i.wB)(n, (function (e) {
                    e ? u() : o()
                }
            )),
                (0,
                    i.hi)((function () {
                        o()
                    }
                )),
                {
                    timeRemainingMs: t,
                    resetCountdown: function (e) {
                        t.value = e,
                            o(),
                        n.value && u()
                    }
                }
        }

        var o = t(16265)
            , l = t(61122);

        function c(e, n, t) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e4
                , s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4
                , v = (0,
                a.KR)(!1)
                , f = (0,
                a.KR)(null)
                , d = (0,
                a.KR)(null)
                , p = (0,
                i.EW)((function () {
                    var e, t;
                    return !v.value && (null === (e = n.value) || void 0 === e ? void 0 : e.isHover) && (null === (t = n.value) || void 0 === t ? void 0 : t.isStartContinGift)
                }
            ))
                , h = u(c, p)
                , m = h.timeRemainingMs
                , g = h.resetCountdown
                , k = (0,
                i.EW)((function () {
                    var e;
                    return !v.value && (null === (e = n.value) || void 0 === e ? void 0 : e.isStartContinGift)
                }
            ))
                , y = u(s, k)
                , w = y.timeRemainingMs
                , b = y.resetCountdown
                , _ = function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.value && (e.value.protectSingleHoverTime = c,
                    e.value.protectCrossHoverTime = s,
                    e.value.currentGiftItem = !1,
                    e.value.isClickSums = 0,
                    e.value.sendGiftNums = 0,
                n || (e.value.isStartContinGift = !1)),
                    g(c),
                    b(s)
            };
            return (0,
                i.wB)(n, (function (e, n) {
                    d.value = n,
                        _(d)
                }
            )),
                (0,
                    i.wB)(t, (function () {
                        _(n, !0),
                            n.value.sendGiftNums++
                    }
                )),
                (0,
                    i.wB)((function () {
                        var e;
                        return null === (e = n.value) || void 0 === e ? void 0 : e.isClickSums
                    }
                ), (function (e) {
                        g(c),
                            b(s)
                    }
                )),
                (0,
                    i.wB)([m, w], (function (e) {
                        var t = (0,
                            r.A)(e, 2)
                            , a = t[0]
                            , i = t[1];
                        n.value.protectSingleHoverTime = a,
                            n.value.protectCrossHoverTime = i,
                        (a <= 0 || i <= 0) && _(n)
                    }
                )),
                (0,
                    o.iX)(l.ig, (function () {
                        v.value && (v.value = !1,
                            n.value.isPressingGift = !1,
                        null !== f.value && (clearInterval(f.value),
                            f.value = null))
                    }
                )),
                (0,
                    o.iX)(l.t4, (function () {
                        try {
                            var r;
                            if (!n.value || v.value || null === (r = n.value) || void 0 === r || !r.isHover)
                                return;
                            v.value = !0,
                                n.value.isPressingGift = !0,
                                n.value.isStartContinGift = !0,
                                g(c),
                                b(s),
                                e(n.value, t.value, !0),
                                f.value = setInterval((function () {
                                        e(n.value, t.value, !0)
                                    }
                                ), 200)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                )),
                {
                    isPressing: v,
                    stopListenLongSendGift: function () {
                        n.value && (_(n),
                            v.value = !1,
                            n.value.isPressingGift = !1,
                        null !== f.value && (clearInterval(f.value),
                            f.value = null))
                    }
                }
        }
    }
    ,
    50809: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#__1Z6qvEG__clip0_9_64638)"><g clip-path="url(#__1Z6qvEG__clip1_9_64638)"><mask id="__1Z6qvEG__mask0_9_64638" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" style="width:22px;height:22px"><path d="M0 0H22V22H0V0Z" fill="currentColor"></path></mask><g mask="url(#__1Z6qvEG__mask0_9_64638)"><path d="M18.3343 3.6665C19.2022 3.6665 19.9057 4.37006 19.9057 5.23793L19.9056 10.4759H18.3342L18.3343 5.23793H3.66762V16.7617L12.0834 16.7616V18.333L3.66762 18.3332C2.79974 18.3332 2.09619 17.6296 2.09619 16.7617V5.23793C2.09619 4.37006 2.79974 3.6665 3.66762 3.6665H18.3343Z" fill="currentColor"></path><path d="M17.495 11.8011L20.1116 13.3529C20.39 13.518 20.5607 13.8177 20.5607 14.1413V17.2876C20.5607 17.6113 20.39 17.9109 20.1116 18.076L17.495 19.6278C17.2069 19.7987 16.8486 19.7988 16.5604 19.6282L13.9389 18.0759C13.6602 17.9109 13.4893 17.6111 13.4893 17.2872V14.1418C13.4893 13.8179 13.6602 13.518 13.9389 13.353L16.5604 11.8008C16.8486 11.6301 17.2069 11.6302 17.495 11.8011ZM17.0271 13.3505L15.0607 14.5147V16.914L17.0271 18.0782L18.9893 16.9145V14.5142L17.0271 13.3505Z" fill="currentColor"></path><path d="M17.0263 16.762C17.6049 16.762 18.074 16.2929 18.074 15.7143C18.074 15.1356 17.6049 14.6665 17.0263 14.6665C16.4476 14.6665 15.9785 15.1356 15.9785 15.7143C15.9785 16.2929 16.4476 16.762 17.0263 16.762Z" fill="currentColor"></path><path d="M14.9287 7.85693V9.42836H7.07153V7.85693H14.9287ZM12.3096 11.5236V13.095H7.07153V11.5236H12.3096Z" fill="currentColor"></path></g></g></g><defs><clipPath id="__1Z6qvEG__clip0_9_64638"><rect style="width:22px;height:22px" fill="currentColor"></rect></clipPath><clipPath id="__1Z6qvEG__clip1_9_64638"><rect style="width:22px;height:22px" fill="currentColor"></rect></clipPath></defs></svg>'
    }
    ,
    55116: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2728 19.8889H14.1514C13.7051 19.8889 13.3434 19.5271 13.3434 19.0808C13.3434 18.6346 13.7051 18.2728 14.1514 18.2728H18.2728V14.4746C18.2728 14.0283 18.6346 13.6665 19.0808 13.6665C19.5271 13.6665 19.8889 14.0283 19.8889 14.4746V18.2728C19.8889 19.1641 19.1637 19.8889 18.2728 19.8889ZM2.91913 8.4949C2.47293 8.4949 2.11108 8.13308 2.11108 7.68675V3.72728C2.11108 2.83591 2.83608 2.11108 3.72728 2.11108H7.68675C8.13306 2.11108 8.4949 2.47293 8.4949 2.91923C8.4949 3.36546 8.13306 3.72728 7.68675 3.72728H3.72728V7.68675C3.72728 8.13308 3.36544 8.4949 2.91913 8.4949Z" fill="currentColor"></path><path d="M18.2728 18.2728V18.3728H18.3728V18.2728H18.2728ZM3.72728 3.72728V3.62728H3.62728V3.72728H3.72728ZM18.2728 19.7889H14.1514V19.9889H18.2728V19.7889ZM14.1514 19.7889C13.7604 19.7889 13.4434 19.4719 13.4434 19.0808H13.2434C13.2434 19.5824 13.6499 19.9889 14.1514 19.9889V19.7889ZM13.4434 19.0808C13.4434 18.6898 13.7604 18.3728 14.1514 18.3728V18.1728C13.6499 18.1728 13.2434 18.5794 13.2434 19.0808H13.4434ZM14.1514 18.3728H18.2728V18.1728H14.1514V18.3728ZM18.3728 18.2728V14.4746H18.1728V18.2728H18.3728ZM18.3728 14.4746C18.3728 14.0836 18.6898 13.7665 19.0808 13.7665V13.5665C18.5794 13.5665 18.1728 13.9731 18.1728 14.4746H18.3728ZM19.0808 13.7665C19.4719 13.7665 19.7889 14.0836 19.7889 14.4746H19.9889C19.9889 13.9731 19.5823 13.5665 19.0808 13.5665V13.7665ZM19.7889 14.4746V18.2728H19.9889V14.4746H19.7889ZM19.7889 18.2728C19.7889 19.1088 19.1085 19.7889 18.2728 19.7889V19.9889C19.2189 19.9889 19.9889 19.2193 19.9889 18.2728H19.7889ZM2.91913 8.3949C2.52816 8.3949 2.21108 8.07786 2.21108 7.68675H2.01108C2.01108 8.18831 2.41769 8.5949 2.91913 8.5949V8.3949ZM2.21108 7.68675V3.72728H2.01108V7.68675H2.21108ZM2.21108 3.72728C2.21108 2.89114 2.8913 2.21108 3.72728 2.21108V2.01108C2.78086 2.01108 2.01108 2.78067 2.01108 3.72728H2.21108ZM3.72728 2.21108H7.68675V2.01108H3.72728V2.21108ZM7.68675 2.21108C8.07783 2.21108 8.3949 2.52816 8.3949 2.91923H8.5949C8.5949 2.4177 8.18829 2.01108 7.68675 2.01108V2.21108ZM8.3949 2.91923C8.3949 3.31022 8.07784 3.62728 7.68675 3.62728V3.82728C8.18828 3.82728 8.5949 3.4207 8.5949 2.91923H8.3949ZM7.68675 3.62728H3.72728V3.82728H7.68675V3.62728ZM3.62728 3.72728V7.68675H3.82728V3.72728H3.62728ZM3.62728 7.68675C3.62728 8.07785 3.31021 8.3949 2.91913 8.3949V8.5949C3.42066 8.5949 3.82728 8.18831 3.82728 7.68675H3.62728Z" fill="currentColor"></path></svg>'
    }
    ,
    56813: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9596 13.6667L19.0809 13.6667C19.5272 13.6667 19.889 14.0285 19.889 14.4748C19.889 14.921 19.5272 15.2828 19.0809 15.2828H14.9596V19.081C14.9596 19.5273 14.5978 19.8891 14.1516 19.8891C13.7053 19.8891 13.3435 19.5273 13.3435 19.081V15.2828C13.3435 14.3915 14.0687 13.6667 14.9596 13.6667ZM7.68685 2.11133C8.13306 2.11133 8.4949 2.47315 8.4949 2.91948L8.4949 6.87895C8.4949 7.77032 7.76991 8.49515 6.8787 8.49515L2.91923 8.49515C2.47293 8.49515 2.11108 8.1333 2.11108 7.687C2.11108 7.24077 2.47293 6.87895 2.91923 6.87895H6.87871V2.91948C6.87871 2.47315 7.24055 2.11133 7.68685 2.11133Z" fill="currentColor"></path><path d="M14.9596 13.6667V13.7667V13.6667ZM19.0809 13.6667V13.5667V13.6667ZM19.889 14.4748H19.989H19.889ZM19.0809 15.2828V15.1828V15.2828ZM14.9596 15.2828V15.1828H14.8596V15.2828H14.9596ZM14.9596 19.081H14.8596H14.9596ZM14.1516 19.8891V19.9891V19.8891ZM13.3435 19.081H13.2435H13.3435ZM13.3435 15.2828H13.4435H13.3435ZM8.4949 2.91948H8.5949H8.4949ZM8.4949 6.87895H8.3949H8.4949ZM6.8787 8.49515V8.59515V8.49515ZM2.91923 8.49515V8.39515V8.49515ZM2.91923 6.87895V6.77895V6.87895ZM6.87871 6.87895V6.97895H6.9787V6.87895H6.87871ZM6.87871 2.91948H6.97871H6.87871ZM14.9596 13.7667H19.0809V13.5667H14.9596V13.7667ZM19.0809 13.7667C19.472 13.7667 19.789 14.0837 19.789 14.4748H19.989C19.989 13.9732 19.5825 13.5667 19.0809 13.5667V13.7667ZM19.789 14.4748C19.789 14.8658 19.472 15.1828 19.0809 15.1828V15.3828C19.5825 15.3828 19.989 14.9762 19.989 14.4748H19.789ZM19.0809 15.1828H14.9596V15.3828L19.0809 15.3828V15.1828ZM14.8596 15.2828L14.8596 19.081H15.0596V15.2828H14.8596ZM14.8596 19.081C14.8596 19.472 14.5425 19.7891 14.1516 19.7891V19.9891C14.653 19.9891 15.0596 19.5825 15.0596 19.081H14.8596ZM14.1516 19.7891C13.7605 19.7891 13.4435 19.472 13.4435 19.081H13.2435C13.2435 19.5825 13.65 19.9891 14.1516 19.9891V19.7891ZM13.4435 19.081V15.2828H13.2435V19.081H13.4435ZM13.4435 15.2828C13.4435 14.4468 14.1239 13.7667 14.9596 13.7667V13.5667C14.0135 13.5667 13.2435 14.3363 13.2435 15.2828H13.4435ZM7.68685 2.21133C8.07782 2.21133 8.3949 2.52837 8.3949 2.91948H8.5949C8.5949 2.41792 8.18829 2.01133 7.68685 2.01133V2.21133ZM8.3949 2.91948L8.3949 6.87895H8.5949L8.5949 2.91948H8.3949ZM8.3949 6.87895C8.3949 7.71509 7.71468 8.39515 6.8787 8.39515V8.59515C7.82513 8.59515 8.5949 7.82556 8.5949 6.87895H8.3949ZM6.8787 8.39515L2.91923 8.39515V8.59515L6.8787 8.59515V8.39515ZM2.91923 8.39515C2.52816 8.39515 2.21108 8.07807 2.21108 7.687H2.01108C2.01108 8.18853 2.4177 8.59515 2.91923 8.59515V8.39515ZM2.21108 7.687C2.21108 7.29601 2.52815 6.97895 2.91923 6.97895V6.77895C2.41771 6.77895 2.01108 7.18553 2.01108 7.687H2.21108ZM2.91923 6.97895L6.87871 6.97895V6.77895L2.91923 6.77895V6.97895ZM6.9787 6.87895L6.97871 2.91948H6.77871L6.7787 6.87895H6.9787ZM6.97871 2.91948C6.97871 2.52838 7.29577 2.21133 7.68685 2.21133V2.01133C7.18532 2.01133 6.77871 2.41792 6.77871 2.91948H6.97871Z" fill="currentColor"></path></svg>'
    }
    ,
    65641: (e, n, t) => {
        "use strict";
        t.d(n, {
            LW: () => l,
            ds: () => c,
            iI: () => s,
            jE: () => a,
            ye: () => o
        });
        var r = t(45458)
            , a = (t(54554),
            (0,
                t(50953).KR)())
            , i = []
            , u = !1
            , o = 100;

        function l(e) {
            i.push.apply(i, (0,
                r.A)(e)),
            u || c()
        }

        function c() {
            0 === i.length ? u = !1 : (i.length > 100 && i.splice(0, 50),
                a.value = i.shift(),
                u = !0)
        }

        function s() {
            i.length = 0,
                a.value = null
        }
    }
    ,
    85013: (e, n, t) => {
        "use strict";
        t.d(n, {
            A: () => r
        }),
            t(26099),
            t(3362);
        const r = t(222).oc ? t(48357) : function () {
            return Promise().resolve(!0)
        }
    }
    ,
    88506: (e, n, t) => {
        "use strict";
        t.d(n, {
            i: () => h
        });
        var r, a = t(10467), i = t(54756), u = t.n(i), o = (t(28706),
            t(60739),
            t(62010),
            t(62535)), l = t(35148), c = t(50953), s = t(20641), v = t(57142), f = t(72708), d = t(80955), p = t(60240);

        function h(e) {
            var n = (0,
                c.lW)(e)
                , t = (0,
                c.KR)(!1)
                , i = (0,
                d.P)(f.Wj)
                , h = (0,
                s.WQ)(v.VI)
                , m = (0,
                s.WQ)(v.RJ)
                , g = (0,
                s.WQ)(v.$m)
                , k = (0,
                s.WQ)(v.nc)
                , y = (0,
                s.WQ)(v.jj)
                , w = (0,
                s.WQ)(v.GG)
                , b = (0,
                s.WQ)(v.qq)
                , _ = (0,
                s.EW)((function () {
                    return m.value && g.value.id !== k.value.id
                }
            ))
                , x = function () {
                var e = (0,
                    a.A)(u().mark((function e(a, c) {
                        var s, v, d, m, x, A, S, C = arguments;
                        return u().wrap((function (e) {
                                for (; ;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (d = C.length > 2 && void 0 !== C[2] && C[2],
                                                t.value = d,
                                            null === (s = n.value) || void 0 === s || null === (v = s.beforeSend) || void 0 === v || v.call(s, a, c, {
                                                isCombo: t.value,
                                                anchor: g.value,
                                                liveStream: b.value
                                            }),
                                                e.t0 = !_.value,
                                                e.t0) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 7,
                                                (0,
                                                    o.t)("LIVE_GIFT");
                                        case 7:
                                            e.t0 = !e.sent;
                                        case 8:
                                            if (!e.t0) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 10:
                                            if (k.value.isAdult || a.type === r.KSHELL) {
                                                e.next = 12;
                                                break
                                            }
                                            throw {
                                                error_msg: "未成年人禁止打赏"
                                            };
                                        case 12:
                                            if (m = a.unitPrice * c,
                                                x = h.value - m >= 0,
                                                console.debug("hasEnoughKsCoin", x, "ksCoin", h.value, "batchSendShouldPay", m),
                                                x) {
                                                e.next = 19;
                                                break
                                            }
                                            throw i.setRechargeSource(f.jB.passiveRecharge),
                                                L(a, c),
                                                {
                                                    error_msg: "快币不足"
                                                };
                                        case 19:
                                            return A = (0,
                                                l.U)({
                                                userId: k.value.id,
                                                payKey: i.payKey,
                                                giftId: a.id,
                                                liveStreamId: b.value.id,
                                                count: c,
                                                comboKey: (0,
                                                    l.g)(),
                                                giftToken: "PANEL" === n.value.source ? w.value : y.value
                                            }),
                                                e.prev = 20,
                                                e.next = 23,
                                                i.sendGift(A);
                                        case 23:
                                            return S = e.sent,
                                                (0,
                                                    p.UE)("LIVE_SENT_GIFT", {
                                                    live_stream_id: b.value.id,
                                                    anchor_user_id: g.value.originUserId,
                                                    is_combo: t.value,
                                                    gift_id: a.id,
                                                    count: c,
                                                    source_type: n.value.source
                                                }),
                                                (0,
                                                    f.hL)({
                                                    giftId: a.id,
                                                    batchSize: c,
                                                    comboCount: a.sendGiftNums,
                                                    mergeKey: "__my_gift".concat(a.id, "_").concat(c),
                                                    rank: a.unitPrice + 1,
                                                    user: {
                                                        principalId: g.value.id,
                                                        userName: k.value.name,
                                                        headUrl: k.value.avatar
                                                    }
                                                }),
                                                e.abrupt("return", S);
                                        case 29:
                                            throw e.prev = 29,
                                                e.t1 = e.catch(20),
                                                console.info("送礼失败", e.t1),
                                                (0,
                                                    p.ho)({
                                                    name: "【P0】直播间送礼",
                                                    src: "common/hooks/useGiftSend/index.ts",
                                                    event_type: "error",
                                                    extra_info: JSON.stringify({
                                                        giftInfo: a,
                                                        batchNum: c,
                                                        res: e.t1,
                                                        event: "送礼失败"
                                                    })
                                                }),
                                                e.t1;
                                        case 34:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[20, 29]])
                    }
                )));
                return function (n, t) {
                    return e.apply(this, arguments)
                }
            }()
                , L = function (e, n) {
                return (0,
                    f.$r)({
                    giftUrl: e.picUrl[0].url,
                    giftName: e.name,
                    giftNum: n,
                    ksCoinRecharge: e.unitPrice - h.value
                })
            };
            return {
                sendGift: x,
                recharge: L
            }
        }

        !function (e) {
            e[e.KSHELL = 128] = "KSHELL"
        }(r || (r = {}))
    }
}]);
