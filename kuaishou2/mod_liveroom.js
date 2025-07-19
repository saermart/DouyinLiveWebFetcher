(self.webpackChunkpc_live_next = self.webpackChunkpc_live_next || []).push([[383], {
    68865: (e, n, t) => {
        "use strict";
        t.d(n, {
            n: () => m
        });
        var r, a = t(15861), i = t(64687), u = t.n(i), o = (t(92222),
        t(68309),
        t(82975)), l = t(4272), c = t(2262), s = t(66252), v = t(69649), f = t(65323), d = t(85679), p = t(58188);
        function m(e) {
            var n = (0,
            c.Vh)(e)
              , t = (0,
            c.iH)(!1)
              , i = (0,
            d.o)(f.$J)
              , m = (0,
            s.f3)(v.ob)
              , h = (0,
            s.f3)(v.QC)
              , g = (0,
            s.f3)(v.UA)
              , y = (0,
            s.f3)(v.CD)
              , w = (0,
            s.f3)(v.RQ)
              , _ = (0,
            s.f3)(v.Q$)
              , S = (0,
            s.f3)(v.m7)
              , k = (0,
            s.Fl)((function() {
                return h.value && g.value.id !== y.value.id
            }
            ))
              , x = function() {
                var e = (0,
                a.Z)(u().mark((function e(a, c) {
                    var s, v, d, h, x, b, L, Z = arguments;
                    return u().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (d = Z.length > 2 && void 0 !== Z[2] && Z[2],
                                t.value = d,
                                null === (s = n.value) || void 0 === s || null === (v = s.beforeSend) || void 0 === v || v.call(s, a, c, {
                                    isCombo: t.value,
                                    anchor: g.value,
                                    liveStream: S.value
                                }),
                                e.t0 = !k.value,
                                e.t0) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 7,
                                (0,
                                o.C)("LIVE_GIFT");
                            case 7:
                                e.t0 = !e.sent;
                            case 8:
                                if (!e.t0) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                if (y.value.isAdult || a.type === r.KSHELL) {
                                    e.next = 12;
                                    break
                                }
                                throw {
                                    error_msg: "未成年人禁止打赏"
                                };
                            case 12:
                                if (h = a.unitPrice * c,
                                x = m.value - h >= 0,
                                console.debug("hasEnoughKsCoin", x, "ksCoin", m.value, "batchSendShouldPay", h),
                                x) {
                                    e.next = 19;
                                    break
                                }
                                throw i.setRechargeSource(f.MG.passiveRecharge),
                                C(a, c),
                                {
                                    error_msg: "快币不足"
                                };
                            case 19:
                                return b = (0,
                                l.R)({
                                    userId: y.value.id,
                                    payKey: i.payKey,
                                    giftId: a.id,
                                    liveStreamId: S.value.id,
                                    count: c,
                                    comboKey: (0,
                                    l.o)(),
                                    giftToken: "PANEL" === n.value.source ? _.value : w.value
                                }),
                                e.prev = 20,
                                e.next = 23,
                                i.sendGift(b);
                            case 23:
                                return L = e.sent,
                                (0,
                                p.cE)("LIVE_SENT_GIFT", {
                                    live_stream_id: S.value.id,
                                    anchor_user_id: g.value.originUserId,
                                    is_combo: t.value,
                                    gift_id: a.id,
                                    count: c,
                                    source_type: n.value.source
                                }),
                                (0,
                                f.cW)({
                                    giftId: a.id,
                                    batchSize: c,
                                    comboCount: a.sendGiftNums,
                                    mergeKey: "__my_gift".concat(a.id, "_").concat(c),
                                    rank: a.unitPrice + 1,
                                    user: {
                                        principalId: g.value.id,
                                        userName: y.value.name,
                                        headUrl: y.value.avatar
                                    }
                                }),
                                e.abrupt("return", L);
                            case 29:
                                throw e.prev = 29,
                                e.t1 = e.catch(20),
                                console.info("送礼失败", e.t1),
                                (0,
                                p.qs)({
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
                return function(n, t) {
                    return e.apply(this, arguments)
                }
            }()
              , C = function(e, n) {
                return (0,
                f.fg)({
                    giftUrl: e.picUrl[0].url,
                    giftName: e.name,
                    giftNum: n,
                    ksCoinRecharge: e.unitPrice - m.value
                })
            };
            return {
                sendGift: x,
                recharge: C
            }
        }
        !function(e) {
            e[e.KSHELL = 128] = "KSHELL"
        }(r || (r = {}))
    }
    ,
    57042: (e, n, t) => {
        "use strict";
        t.d(n, {
            I: () => c
        });
        var r = t(70885)
          , a = (t(32564),
        t(2262))
          , i = t(66252);
        function u(e, n) {
            var t = (0,
            a.iH)(e)
              , r = (0,
            a.iH)(null)
              , u = function() {
                null === r.value && (r.value = window.setInterval((function() {
                    t.value > 0 ? t.value -= 100 : (clearInterval(r.value),
                    r.value = null)
                }
                ), 100))
            }
              , o = function() {
                null !== r.value && (clearInterval(r.value),
                r.value = null)
            };
            return (0,
            i.YP)(n, (function(e) {
                e ? u() : o()
            }
            )),
            (0,
            i.Ah)((function() {
                o()
            }
            )),
            {
                timeRemainingMs: t,
                resetCountdown: function(e) {
                    t.value = e,
                    o(),
                    n.value && u()
                }
            }
        }
        var o = t(11404)
          , l = t(19271);
        function c(e, n, t) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e4
              , s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4
              , v = (0,
            a.iH)(!1)
              , f = (0,
            a.iH)(null)
              , d = (0,
            a.iH)(null)
              , p = (0,
            i.Fl)((function() {
                var e, t;
                return !v.value && (null === (e = n.value) || void 0 === e ? void 0 : e.isHover) && (null === (t = n.value) || void 0 === t ? void 0 : t.isStartContinGift)
            }
            ))
              , m = u(c, p)
              , h = m.timeRemainingMs
              , g = m.resetCountdown
              , y = (0,
            i.Fl)((function() {
                var e;
                return !v.value && (null === (e = n.value) || void 0 === e ? void 0 : e.isStartContinGift)
            }
            ))
              , w = u(s, y)
              , _ = w.timeRemainingMs
              , S = w.resetCountdown
              , k = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.value && (e.value.protectSingleHoverTime = c,
                e.value.protectCrossHoverTime = s,
                e.value.currentGiftItem = !1,
                e.value.isClickSums = 0,
                e.value.sendGiftNums = 0,
                n || (e.value.isStartContinGift = !1)),
                g(c),
                S(s)
            };
            (0,
            i.YP)(n, (function(e, n) {
                d.value = n,
                k(d)
            }
            )),
            (0,
            i.YP)(t, (function() {
                k(n, !0),
                n.value.sendGiftNums++
            }
            )),
            (0,
            i.YP)((function() {
                var e;
                return null === (e = n.value) || void 0 === e ? void 0 : e.isClickSums
            }
            ), (function(e) {
                g(c),
                S(s)
            }
            )),
            (0,
            i.YP)([h, _], (function(e) {
                var t = (0,
                r.Z)(e, 2)
                  , a = t[0]
                  , i = t[1];
                n.value.protectSingleHoverTime = a,
                n.value.protectCrossHoverTime = i,
                (a <= 0 || i <= 0) && k(n)
            }
            ));
            var x = function() {
                try {
                    var r;
                    if (!n.value || v.value || null === (r = n.value) || void 0 === r || !r.isHover)
                        return;
                    v.value = !0,
                    n.value.isPressingGift = !0,
                    n.value.isStartContinGift = !0,
                    g(c),
                    S(s),
                    e(n.value, t.value, !0),
                    f.value = setInterval((function() {
                        e(n.value, t.value, !0)
                    }
                    ), 200)
                } catch (e) {
                    console.log(e)
                }
            }
              , C = function() {
                v.value && (v.value = !1,
                n.value.isPressingGift = !1,
                null !== f.value && (clearInterval(f.value),
                f.value = null))
            }
              , b = function() {
                n.value && (k(n),
                v.value = !1,
                n.value.isPressingGift = !1,
                null !== f.value && (clearInterval(f.value),
                f.value = null))
            };
            return (0,
            o.v1)(l.QO, C),
            (0,
            o.v1)(l.I4, x),
            {
                isPressing: v,
                stopListenLongSendGift: b
            }
        }
    }
    ,
    36305: (e, n, t) => {
        "use strict";
        t.d(n, {
            zq: () => a,
            tu: () => o,
            Ye: () => l,
            _9: () => c,
            $D: () => s
        });
        var r = t(42982)
          , a = (t(40561),
        (0,
        t(2262).iH)())
          , i = []
          , u = !1
          , o = 100;
        function l(e) {
            i.push.apply(i, (0,
            r.Z)(e)),
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
    8542: (e, n, t) => {
        "use strict";
        t.d(n, {
            id: () => u,
            Xm: () => o,
            $Z: () => c,
            Cp: () => s,
            dR: () => v,
            Un: () => f
        });
        var r = t(65323)
          , a = t(2262)
          , i = t(66252)
          , u = "#__living_panel"
          , o = (0,
        a.iH)(!1)
          , l = (0,
        a.iH)(!1);
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
        i.YP)(o, (function(e) {
            (0,
            r.zw)(!e)
        }
        ))
    }
    ,
    42112: (e, n, t) => {
        "use strict";
        t.d(n, {
            Z: () => r
        }),
        t(41539),
        t(88674);
        const r = t(53407).C5 ? t(12641) : function() {
            return Promise().resolve(!0)
        }
    }
    ,
    55231: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#__1Z6qvEG__clip0_9_64638)"><g clip-path="url(#__1Z6qvEG__clip1_9_64638)"><mask id="__1Z6qvEG__mask0_9_64638" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" style="width:22px;height:22px"><path d="M0 0H22V22H0V0Z" fill="currentColor"></path></mask><g mask="url(#__1Z6qvEG__mask0_9_64638)"><path d="M18.3343 3.6665C19.2022 3.6665 19.9057 4.37006 19.9057 5.23793L19.9056 10.4759H18.3342L18.3343 5.23793H3.66762V16.7617L12.0834 16.7616V18.333L3.66762 18.3332C2.79974 18.3332 2.09619 17.6296 2.09619 16.7617V5.23793C2.09619 4.37006 2.79974 3.6665 3.66762 3.6665H18.3343Z" fill="currentColor"></path><path d="M17.495 11.8011L20.1116 13.3529C20.39 13.518 20.5607 13.8177 20.5607 14.1413V17.2876C20.5607 17.6113 20.39 17.9109 20.1116 18.076L17.495 19.6278C17.2069 19.7987 16.8486 19.7988 16.5604 19.6282L13.9389 18.0759C13.6602 17.9109 13.4893 17.6111 13.4893 17.2872V14.1418C13.4893 13.8179 13.6602 13.518 13.9389 13.353L16.5604 11.8008C16.8486 11.6301 17.2069 11.6302 17.495 11.8011ZM17.0271 13.3505L15.0607 14.5147V16.914L17.0271 18.0782L18.9893 16.9145V14.5142L17.0271 13.3505Z" fill="currentColor"></path><path d="M17.0263 16.762C17.6049 16.762 18.074 16.2929 18.074 15.7143C18.074 15.1356 17.6049 14.6665 17.0263 14.6665C16.4476 14.6665 15.9785 15.1356 15.9785 15.7143C15.9785 16.2929 16.4476 16.762 17.0263 16.762Z" fill="currentColor"></path><path d="M14.9287 7.85693V9.42836H7.07153V7.85693H14.9287ZM12.3096 11.5236V13.095H7.07153V11.5236H12.3096Z" fill="currentColor"></path></g></g></g><defs><clipPath id="__1Z6qvEG__clip0_9_64638"><rect style="width:22px;height:22px" fill="currentColor"></rect></clipPath><clipPath id="__1Z6qvEG__clip1_9_64638"><rect style="width:22px;height:22px" fill="currentColor"></rect></clipPath></defs></svg>'
    }
    ,
    98396: e => {
        e.exports = '<svg viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#__1gmRHQx__clip0_215_114412)"><path d="M1.8418 6.99989C1.8418 9.57261 3.9274 11.6582 6.50013 11.6582C9.07286 11.6582 11.1585 9.57261 11.1585 6.99989C11.1585 4.42716 9.07286 2.34155 6.50013 2.34155C4.44898 2.34155 2.70746 3.66724 2.08564 5.50854" stroke="currentColor" stroke-width="0.9"></path><path d="M1.80591 3.02783V5.37788H4.12738" stroke="currentColor" stroke-width="0.9"></path></g><defs><clipPath id="__1gmRHQx__clip0_215_114412"><rect width="13" height="13" fill="currentColor" transform="translate(0 0.5)"></rect></clipPath></defs></svg>'
    }
    ,
    82106: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00879 3.88611C2.00879 3.02455 2.70722 2.32611 3.56879 2.32611L18.431 2.3268C19.2926 2.3268 19.991 3.02523 19.991 3.8868L19.9914 9.78098H18.4314L18.431 3.8868L3.56879 3.88611L3.56913 16.7482L10.4635 16.7489V18.3089L3.56913 18.3082C2.70757 18.3082 2.00913 17.6098 2.00913 16.7482L2.00879 3.88611Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2609 13.5009C12.2609 12.6393 12.9593 11.9409 13.8209 11.9409H19.434C20.2955 11.9409 20.9939 12.6393 20.9939 13.5009V18.1139C20.9939 18.9755 20.2955 19.6739 19.434 19.6739H13.8209C12.9593 19.6739 12.2609 18.9755 12.2609 18.1139V13.5009ZM13.8209 13.5009V18.1139H19.434V13.5009H13.8209Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.22523 10.649L11.1586 10.9814L10.6031 7.07323L7.22523 10.649Z" fill="currentColor"></path><path d="M10.1988 10.0811L5.43256 5.57861" stroke="currentColor" stroke-width="1.56"></path></svg> ·'
    }
    ,
    27241: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9596 13.6667L19.0809 13.6667C19.5272 13.6667 19.889 14.0285 19.889 14.4748C19.889 14.921 19.5272 15.2828 19.0809 15.2828H14.9596V19.081C14.9596 19.5273 14.5978 19.8891 14.1516 19.8891C13.7053 19.8891 13.3435 19.5273 13.3435 19.081V15.2828C13.3435 14.3915 14.0687 13.6667 14.9596 13.6667ZM7.68685 2.11133C8.13306 2.11133 8.4949 2.47315 8.4949 2.91948L8.4949 6.87895C8.4949 7.77032 7.76991 8.49515 6.8787 8.49515L2.91923 8.49515C2.47293 8.49515 2.11108 8.1333 2.11108 7.687C2.11108 7.24077 2.47293 6.87895 2.91923 6.87895H6.87871V2.91948C6.87871 2.47315 7.24055 2.11133 7.68685 2.11133Z" fill="currentColor"></path><path d="M14.9596 13.6667V13.7667V13.6667ZM19.0809 13.6667V13.5667V13.6667ZM19.889 14.4748H19.989H19.889ZM19.0809 15.2828V15.1828V15.2828ZM14.9596 15.2828V15.1828H14.8596V15.2828H14.9596ZM14.9596 19.081H14.8596H14.9596ZM14.1516 19.8891V19.9891V19.8891ZM13.3435 19.081H13.2435H13.3435ZM13.3435 15.2828H13.4435H13.3435ZM8.4949 2.91948H8.5949H8.4949ZM8.4949 6.87895H8.3949H8.4949ZM6.8787 8.49515V8.59515V8.49515ZM2.91923 8.49515V8.39515V8.49515ZM2.91923 6.87895V6.77895V6.87895ZM6.87871 6.87895V6.97895H6.9787V6.87895H6.87871ZM6.87871 2.91948H6.97871H6.87871ZM14.9596 13.7667H19.0809V13.5667H14.9596V13.7667ZM19.0809 13.7667C19.472 13.7667 19.789 14.0837 19.789 14.4748H19.989C19.989 13.9732 19.5825 13.5667 19.0809 13.5667V13.7667ZM19.789 14.4748C19.789 14.8658 19.472 15.1828 19.0809 15.1828V15.3828C19.5825 15.3828 19.989 14.9762 19.989 14.4748H19.789ZM19.0809 15.1828H14.9596V15.3828L19.0809 15.3828V15.1828ZM14.8596 15.2828L14.8596 19.081H15.0596V15.2828H14.8596ZM14.8596 19.081C14.8596 19.472 14.5425 19.7891 14.1516 19.7891V19.9891C14.653 19.9891 15.0596 19.5825 15.0596 19.081H14.8596ZM14.1516 19.7891C13.7605 19.7891 13.4435 19.472 13.4435 19.081H13.2435C13.2435 19.5825 13.65 19.9891 14.1516 19.9891V19.7891ZM13.4435 19.081V15.2828H13.2435V19.081H13.4435ZM13.4435 15.2828C13.4435 14.4468 14.1239 13.7667 14.9596 13.7667V13.5667C14.0135 13.5667 13.2435 14.3363 13.2435 15.2828H13.4435ZM7.68685 2.21133C8.07782 2.21133 8.3949 2.52837 8.3949 2.91948H8.5949C8.5949 2.41792 8.18829 2.01133 7.68685 2.01133V2.21133ZM8.3949 2.91948L8.3949 6.87895H8.5949L8.5949 2.91948H8.3949ZM8.3949 6.87895C8.3949 7.71509 7.71468 8.39515 6.8787 8.39515V8.59515C7.82513 8.59515 8.5949 7.82556 8.5949 6.87895H8.3949ZM6.8787 8.39515L2.91923 8.39515V8.59515L6.8787 8.59515V8.39515ZM2.91923 8.39515C2.52816 8.39515 2.21108 8.07807 2.21108 7.687H2.01108C2.01108 8.18853 2.4177 8.59515 2.91923 8.59515V8.39515ZM2.21108 7.687C2.21108 7.29601 2.52815 6.97895 2.91923 6.97895V6.77895C2.41771 6.77895 2.01108 7.18553 2.01108 7.687H2.21108ZM2.91923 6.97895L6.87871 6.97895V6.77895L2.91923 6.77895V6.97895ZM6.9787 6.87895L6.97871 2.91948H6.77871L6.7787 6.87895H6.9787ZM6.97871 2.91948C6.97871 2.52838 7.29577 2.21133 7.68685 2.21133V2.01133C7.18532 2.01133 6.77871 2.41792 6.77871 2.91948H6.97871Z" fill="currentColor"></path></svg>'
    }
    ,
    46264: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2728 19.8889H14.1514C13.7051 19.8889 13.3434 19.5271 13.3434 19.0808C13.3434 18.6346 13.7051 18.2728 14.1514 18.2728H18.2728V14.4746C18.2728 14.0283 18.6346 13.6665 19.0808 13.6665C19.5271 13.6665 19.8889 14.0283 19.8889 14.4746V18.2728C19.8889 19.1641 19.1637 19.8889 18.2728 19.8889ZM2.91913 8.4949C2.47293 8.4949 2.11108 8.13308 2.11108 7.68675V3.72728C2.11108 2.83591 2.83608 2.11108 3.72728 2.11108H7.68675C8.13306 2.11108 8.4949 2.47293 8.4949 2.91923C8.4949 3.36546 8.13306 3.72728 7.68675 3.72728H3.72728V7.68675C3.72728 8.13308 3.36544 8.4949 2.91913 8.4949Z" fill="currentColor"></path><path d="M18.2728 18.2728V18.3728H18.3728V18.2728H18.2728ZM3.72728 3.72728V3.62728H3.62728V3.72728H3.72728ZM18.2728 19.7889H14.1514V19.9889H18.2728V19.7889ZM14.1514 19.7889C13.7604 19.7889 13.4434 19.4719 13.4434 19.0808H13.2434C13.2434 19.5824 13.6499 19.9889 14.1514 19.9889V19.7889ZM13.4434 19.0808C13.4434 18.6898 13.7604 18.3728 14.1514 18.3728V18.1728C13.6499 18.1728 13.2434 18.5794 13.2434 19.0808H13.4434ZM14.1514 18.3728H18.2728V18.1728H14.1514V18.3728ZM18.3728 18.2728V14.4746H18.1728V18.2728H18.3728ZM18.3728 14.4746C18.3728 14.0836 18.6898 13.7665 19.0808 13.7665V13.5665C18.5794 13.5665 18.1728 13.9731 18.1728 14.4746H18.3728ZM19.0808 13.7665C19.4719 13.7665 19.7889 14.0836 19.7889 14.4746H19.9889C19.9889 13.9731 19.5823 13.5665 19.0808 13.5665V13.7665ZM19.7889 14.4746V18.2728H19.9889V14.4746H19.7889ZM19.7889 18.2728C19.7889 19.1088 19.1085 19.7889 18.2728 19.7889V19.9889C19.2189 19.9889 19.9889 19.2193 19.9889 18.2728H19.7889ZM2.91913 8.3949C2.52816 8.3949 2.21108 8.07786 2.21108 7.68675H2.01108C2.01108 8.18831 2.41769 8.5949 2.91913 8.5949V8.3949ZM2.21108 7.68675V3.72728H2.01108V7.68675H2.21108ZM2.21108 3.72728C2.21108 2.89114 2.8913 2.21108 3.72728 2.21108V2.01108C2.78086 2.01108 2.01108 2.78067 2.01108 3.72728H2.21108ZM3.72728 2.21108H7.68675V2.01108H3.72728V2.21108ZM7.68675 2.21108C8.07783 2.21108 8.3949 2.52816 8.3949 2.91923H8.5949C8.5949 2.4177 8.18829 2.01108 7.68675 2.01108V2.21108ZM8.3949 2.91923C8.3949 3.31022 8.07784 3.62728 7.68675 3.62728V3.82728C8.18828 3.82728 8.5949 3.4207 8.5949 2.91923H8.3949ZM7.68675 3.62728H3.72728V3.82728H7.68675V3.62728ZM3.62728 3.72728V7.68675H3.82728V3.72728H3.62728ZM3.62728 7.68675C3.62728 8.07785 3.31021 8.3949 2.91913 8.3949V8.5949C3.42066 8.5949 3.82728 8.18831 3.82728 7.68675H3.62728Z" fill="currentColor"></path></svg>'
    }
    ,
    22311: (e, n, t) => {
        "use strict";
        t.r(n),
        t.d(n, {
            default: () => tr
        }),
        t(47941),
        t(82526),
        t(57327),
        t(41539),
        t(38880),
        t(89554),
        t(54747),
        t(49337),
        t(33321),
        t(69070);
        var r = t(4942)
          , a = t(15861)
          , i = (t(68309),
        t(64687))
          , u = t.n(i)
          , o = t(66252)
          , l = t(49963)
          , c = t(2262)
          , s = t(66309)
          , v = t(47475)
          , f = t(31407)
          , d = (t(92222),
        t(41817),
        t(3577))
          , p = t(22325)
          , m = t(51930)
          , h = t(95439)
          , g = t(29281)
          , y = t(90346)
          , w = t(77872)
          , _ = t(3825)
          , S = t(69649)
          , k = t(75937)
          , x = t(51684)
          , C = t(23167)
          , b = {
            class: "flex-col flex-1 wrapper"
        }
          , L = {
            class: "flex-col relative flex-1 of-h"
        }
          , Z = {
            class: "chat-actions"
        };
        const H = (0,
        o.aZ)({
            __name: "SideBar",
            props: {
                watchingList: {},
                watchingCount: {},
                liveStream: {},
                isFullScreen: {
                    type: Boolean
                }
            },
            setup: function(e, n) {
                var t = n.expose
                  , r = e
                  , a = (0,
                c.iH)()
                  , i = (0,
                c.iH)()
                  , u = (0,
                o.f3)(S.UA)
                  , l = (0,
                k.jq)({
                    title: "".concat(u.value.name ? "".concat(u.value.name, "-") : "", "快手直播"),
                    meta: [{
                        name: "keywords",
                        content: u.value.id ? "".concat(x.H, ",").concat(u.value.name, ",").concat(u.value.id) : x.H
                    }, {
                        name: "description",
                        content: u.value.id ? "快手直播".concat(u.value.id, "，为您提供精彩直播，").concat(u.value.description) : "快手直播，为您提供精彩直播"
                    }]
                }).meta;
                return (0,
                o.YP)(u, (function(e) {
                    e && (l.title = "".concat(e.name, "-快手直播"),
                    l.keywords = e.id ? "".concat(x.H, ",").concat(e.name, ",").concat(e.id) : x.H,
                    l.description = e.id ? "快手直播".concat(e.id, "，为您提供精彩直播，").concat(e.description) : "快手直播，为您提供精彩直播")
                }
                )),
                (0,
                o.YP)(a, (function(e) {
                    (0,
                    C.H2)(e, i.value)
                }
                )),
                t({
                    coPilotRef: a
                }),
                function(e, n) {
                    var t;
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        id: "liveroom__sidebar",
                        ref_key: "chatHistoryRef",
                        ref: i,
                        class: (0,
                        d.C_)(["sidebar flex-col", {
                            hide: r.isFullScreen
                        }])
                    }, [(0,
                    o._)("div", {
                        ref_key: "coPilotRef",
                        ref: a,
                        class: (0,
                        d.C_)(["co-pilot", {
                            hide: !(0,
                            c.SU)(C.Lu) || (0,
                            c.SU)(C.XC)
                        }])
                    }, null, 2), (0,
                    o._)("div", b, [(0,
                    o.Wm)(p.Z, {
                        announcement: null === (t = e.liveStream) || void 0 === t ? void 0 : t.announcement
                    }, null, 8, ["announcement"]), (0,
                    o.Wm)(m.Z, {
                        "watching-list": null == r ? void 0 : r.watchingList,
                        "watching-count": null == r ? void 0 : r.watchingCount
                    }, null, 8, ["watching-list", "watching-count"]), (0,
                    o.Wm)(w.Z), (0,
                    o._)("div", L, [(0,
                    o.Wm)(_.Z), (0,
                    o.Wm)(h.Z), (0,
                    o._)("div", Z, [(0,
                    o.Wm)(g.Z), (0,
                    o.Wm)(y.Z)])])])], 2)
                }
            }
        });
        var E = t(83744);
        const I = (0,
        E.Z)(H, [["__scopeId", "data-v-56460e84"]]);
        var T = t(20257)
          , A = t(65736)
          , U = t(11404)
          , M = t(42982)
          , V = (t(26699),
        t(32023),
        t(21249),
        t(47042),
        t(83710),
        t(5212),
        t(40830))
          , P = t(22201)
          , O = t(48288)
          , R = t(45949)
          , F = t(42201)
          , D = t(82975)
          , N = t(53407)
          , W = t(42699)
          , J = t(28511)
          , B = t(65323)
          , Y = t(11860)
          , G = t.n(Y)
          , j = (0,
        s.y$C)(J.mK, {})
          , q = (0,
        s.y$C)(J.UA, {})
          , z = (0,
        s.y$C)(J.At, [])
          , Q = [R.yL.SUCCESS, R.yL.LIVE_AUTHOR_NOT_ON_LIVE, R.yL.BE_BANNED, R.yL.BE_TICK_OUT, R.yL.SECRET_ROOM]
          , K = (0,
        V.Q_)("liveroom", {
            state: function() {
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
                prefetch: function(e) {
                    var n = this;
                    return (0,
                    a.Z)(u().mark((function t() {
                        var r, a, i, o, l;
                        return u().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("string" != typeof e && (r = (0,
                                    P.yj)(),
                                    a = r.params,
                                    i = void 0 === a ? {} : a,
                                    o = r.query,
                                    l = void 0 === o ? {} : o,
                                    e = (null == i ? void 0 : i.principalId) || (null == l ? void 0 : l.principalId)),
                                    e && "null" !== e) {
                                        t.next = 3;
                                        break
                                    }
                                    throw R.yL.NO_AUTHOR;
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
                getLiveDetail: function(e, n) {
                    var t = this;
                    return (0,
                    a.Z)(u().mark((function r() {
                        var a, i, o, l, c, s, v, f;
                        return u().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0,
                                    r.next = 3,
                                    (0,
                                    O.UF)({
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
                                    !i || Q.includes(i)) {
                                        r.next = 13;
                                        break
                                    }
                                    throw i;
                                case 13:
                                    if (l) {
                                        r.next = 15;
                                        break
                                    }
                                    throw R.yL.NO_AUTHOR;
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
                                        N.Rp)(r.t0)
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
                loadMore: function() {
                    var e = this;
                    return (0,
                    a.Z)(u().mark((function n() {
                        var t, r, a, i, o, l, c;
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return 0 === Object.keys(j.value).length && (a = (0,
                                    U.oR)(B.PK),
                                    j.value = null !== (r = a.config["pcLive.webConfig.defaultPreference"]) && void 0 !== r ? r : {},
                                    G().set(J.mK, j.value)),
                                    i = Object.keys(j.value).map((function(e) {
                                        return {
                                            gameId: j.value[e].id,
                                            totalStayLength: j.value[e].totalStayLength
                                        }
                                    }
                                    )),
                                    n.next = 4,
                                    (0,
                                    O.Ft)({
                                        queryFollowing: !0,
                                        followingWeight: 50
                                    }, i.slice(0, 10));
                                case 4:
                                    for (l in o = n.sent.data.list,
                                    q.value)
                                        (0,
                                        W.Z)(q.value[l].updateTime + 9e5, new Date) && q.value[l].totalStayLength >= 3 && delete q.value[l];
                                    if (o && 0 !== (null == o ? void 0 : o.length)) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 8:
                                    c = o.filter((function(n) {
                                        var t, r, a = n.author, i = n.gameInfo;
                                        return !(z.value.includes(a.id) || e.playList.some((function(e) {
                                            return e.author.id === a.id
                                        }
                                        )) || (null !== (t = q.value[i.id]) && void 0 !== t && t.totalStayLength,
                                        (null === (r = q.value[i.id]) || void 0 === r ? void 0 : r.totalStayLength) > 3))
                                    }
                                    )),
                                    (t = e.playList).push.apply(t, (0,
                                    M.Z)(c));
                                case 10:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                getWebsocketInfo: function(e) {
                    var n = this;
                    return (0,
                    a.Z)(u().mark((function t() {
                        var r, a, i, o;
                        return u().wrap((function(t) {
                            for (; ; )
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
                                    O.qe)({
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
                changeFollowStatus: function(e) {
                    var n = this;
                    return (0,
                    a.Z)(u().mark((function t() {
                        var r;
                        return u().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    (0,
                                    D.C)();
                                case 2:
                                    if (!t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 5,
                                    (0,
                                    F.LU)({
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
                checkFollowStatus: function() {
                    var e = this;
                    return (0,
                    a.Z)(u().mark((function n() {
                        var t;
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    (0,
                                    F.PQ)({
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
                checkLiveStatus: function() {},
                finishLiving: function(e) {
                    this.playList[e].isLiving = !1
                },
                checkPassword: function(e) {
                    var n = this;
                    return (0,
                    a.Z)(u().mark((function t() {
                        var r, a, i;
                        return u().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    (0,
                                    O.oH)(n.playList[n.activeIndex].author.id, e);
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
                refetchLiveData: function() {
                    var e = this;
                    return (0,
                    a.Z)(u().mark((function n() {
                        var t;
                        return u().wrap((function(n) {
                            for (; ; )
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
                fetchLiveStatus: function() {
                    var e = this;
                    return (0,
                    a.Z)(u().mark((function n() {
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    (0,
                                    O.C2)(e.currentLiving.liveStream.id);
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
                clear: function() {
                    this.playList.length = 0
                },
                getCommentHistory: function(e) {
                    var n = arguments
                      , t = this;
                    return (0,
                    a.Z)(u().mark((function r() {
                        var a, i;
                        return u().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return a = n.length > 1 && void 0 !== n[1] ? n[1] : {
                                        1: 0,
                                        2: 0
                                    },
                                    r.next = 3,
                                    (0,
                                    O.O1)(e, a);
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
                currentLiving: function(e) {
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
          , X = (t(91038),
        t(78783),
        t(74916),
        t(32165),
        t(66992),
        t(33948),
        t(79753),
        t(10928))
          , $ = t.n(X)
          , ee = (t(91058),
        t(85827),
        t(48702),
        t(40561),
        t(43144))
          , ne = t(15671)
          , te = t(23493)
          , re = t.n(te)
          , ae = t(6162)
          , ie = t.n(ae)
          , ue = t(98066)
          , oe = t.n(ue)
          , le = (t(3843),
        t(19601),
        t(2707),
        t(69826),
        2e3)
          , ce = re()((function(e) {
            oe()((function() {
                return function(e) {
                    var n = Date.now();
                    e.value = e.value.filter((function(e) {
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
        ee.Z)((function e(n) {
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
            ne.Z)(this, e),
            (0,
            r.Z)(this, "batchSize", void 0),
            (0,
            r.Z)(this, "comboCount", void 0),
            (0,
            r.Z)(this, "expireDuration", void 0),
            (0,
            r.Z)(this, "giftId", void 0),
            (0,
            r.Z)(this, "mergeKey", void 0),
            (0,
            r.Z)(this, "rank", void 0),
            (0,
            r.Z)(this, "slotDisplayDuration", void 0),
            (0,
            r.Z)(this, "styleType", void 0),
            (0,
            r.Z)(this, "isShowing", void 0),
            (0,
            r.Z)(this, "startShowTime", void 0),
            (0,
            r.Z)(this, "addTime", void 0),
            (0,
            r.Z)(this, "bgClass", void 0),
            (0,
            r.Z)(this, "minGiftDisplay", void 0),
            (0,
            r.Z)(this, "unitPrice", void 0),
            (0,
            r.Z)(this, "userName", void 0),
            (0,
            r.Z)(this, "eid", void 0),
            (0,
            r.Z)(this, "headUrl", void 0),
            this.giftId = t,
            this.batchSize = a,
            this.mergeKey = i,
            this.comboCount = u,
            o || (o = 0),
            this.slotDisplayDuration = function() {
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
            for (var t = function(e, n) {
                return n.forEach((function(n) {
                    var t;
                    if (t = e.find((function(e) {
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
        var de = t(92598)
          , pe = t(36305);
        function me(e, n) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
                if (Array.isArray(e) || (t = function(e, n) {
                    if (e) {
                        if ("string" == typeof e)
                            return he(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? he(e, n) : void 0
                    }
                }(e)) || n && e && "number" == typeof e.length) {
                    t && (e = t);
                    var r = 0
                      , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, u = !0, o = !1;
            return {
                s: function() {
                    t = t.call(e)
                },
                n: function() {
                    var e = t.next();
                    return u = e.done,
                    e
                },
                e: function(e) {
                    o = !0,
                    i = e
                },
                f: function() {
                    try {
                        u || null == t.return || t.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }
        function he(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++)
                r[t] = e[t];
            return r
        }
        var ge = 1006;
        var ye, we = t(57557), _e = t.n(we), Se = (t(26833),
        t(9653),
        t(28789)), ke = (0,
        s.y$C)(J.mK, {}), xe = (0,
        s.y$C)(J.UA, {});
        function Ce(e, n, t, r) {
            var a, i, u, o;
            if (t && r) {
                var l = e === ye.PASS ? null !== (a = G().get(J.UA)) && void 0 !== a ? a : {} : null !== (i = G().get(J.mK)) && void 0 !== i ? i : {};
                if (e === ye.POS && Object.keys(l).length >= 20 && !l[t]) {
                    var c = Object.values(l).reduce((function(e, n) {
                        return e.updateTime < n.updateTime ? e : n
                    }
                    ));
                    l = _e()(l, c.gameId)
                }
                if (e === ye.PASS && Object.keys(l).length >= 50 && !l[t]) {
                    var s = Object.values(l).reduce((function(e, n) {
                        return e.updateTime < n.updateTime ? e : n
                    }
                    ));
                    l = _e()(l, s.gameId)
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
                G().set(e === ye.PASS ? J.UA : J.mK, l)
            }
        }
        !function(e) {
            e[e.POS = 0] = "POS",
            e[e.PASS = 1] = "PASS"
        }(ye || (ye = {}));
        var be = (0,
        Se.Z)(new Date);
        function Le(e) {
            return (0,
            o.YP)((function() {
                return e.value
            }
            ), (function(e, n) {
                var t = (0,
                Se.Z)(new Date)
                  , r = t - be;
                be = t;
                var a = n.gameInfo
                  , i = a.id
                  , u = a.name;
                r <= 1e4 ? Ce(ye.PASS, 1, i, u) : Ce(ye.POS, r < 3e4 ? 1 : r < 6e4 ? 2 : r < 3e4 ? 4 : 7, i, u)
            }
            )),
            {
                positiveList: ke,
                passiveList: xe,
                addPoints: Ce
            }
        }
        var Ze = t(69486)
          , He = t(21822)
          , Ee = t(21253)
          , Ie = t(28420)
          , Te = t(15732)
          , Ae = t(56696)
          , Ue = t(22560)
          , Me = t(21899)
          , Ve = t(37492)
          , Pe = t(55533)
          , Oe = t(22116)
          , Re = t(1889)
          , Fe = t(41165)
          , De = (t(32564),
        t(35612))
          , Ne = t(79312)
          , We = t.n(Ne)
          , Je = t(42641)
          , Be = t.n(Je)
          , Ye = t(19271)
          , Ge = ["innerHTML"]
          , je = {
            class: "content flex items-center"
        };
        const qe = (0,
        o.aZ)({
            __name: "ScreenLoop",
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["changeScreen"],
            setup: function(e, n) {
                n.emit;
                var t = e
                  , r = (0,
                c.iH)()
                  , i = (0,
                o.f3)(S.EH)
                  , l = (0,
                o.f3)(S.kV);
                function s() {
                    return v.apply(this, arguments)
                }
                function v() {
                    return (v = (0,
                    a.Z)(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    r.value.hide(),
                                    setTimeout((function() {
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
                U.v1)(Ye.Ym, (function() {
                    s()
                }
                )),
                function(e, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: (0,
                        d.C_)(["full-screen", {
                            "no-full": !(0,
                            c.SU)(i)
                        }])
                    }, [((0,
                    o.wg)(),
                    (0,
                    o.j4)(De.Z, {
                        key: String((0,
                        c.SU)(i)),
                        ref_key: "tooltipRef",
                        ref: r,
                        placement: "top",
                        "insert-to-global": !1
                    }, {
                        default: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", {
                                class: (0,
                                d.C_)(["screen-icon", {
                                    disabled: t.disabled
                                }]),
                                onClick: s
                            }, [(0,
                            o._)("span", {
                                innerHTML: (0,
                                c.SU)(i) ? (0,
                                c.SU)(We()) : (0,
                                c.SU)(Be())
                            }, null, 8, Ge)], 2)]
                        }
                        )),
                        content: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", je, [(0,
                            o._)("span", null, (0,
                            d.zw)((0,
                            c.SU)(i) ? "退出全屏" : "进入全屏"), 1), n[0] || (n[0] = (0,
                            o._)("div", {
                                class: "keyword flex-center"
                            }, "H", -1))])]
                        }
                        )),
                        _: 1
                    }))], 2)
                }
            }
        })
          , ze = (0,
        E.Z)(qe, [["__scopeId", "data-v-41c38f09"]]);
        var Qe = t(46264)
          , Ke = t.n(Qe)
          , Xe = t(27241)
          , $e = t.n(Xe)
          , en = t(10577)
          , nn = t.n(en)
          , tn = {
            class: "theater"
        }
          , rn = ["innerHTML"]
          , an = {
            class: "content flex items-center"
        };
        const un = (0,
        o.aZ)({
            __name: "Theater",
            setup: function(e) {
                var n = (0,
                o.f3)(S.Wq)
                  , t = (0,
                o.f3)(S.a5);
                function r() {
                    return i.apply(this, arguments)
                }
                function i() {
                    return (i = (0,
                    a.Z)(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return nn().exit(),
                                    e.next = 3,
                                    (0,
                                    o.Y3)();
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
                U.v1)(Ye.Y4, (function() {
                    r()
                }
                )),
                function(e, a) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", tn, [(0,
                    o.Wm)(De.Z, {
                        placement: "top",
                        "insert-to-global": !(0,
                        c.SU)(t)
                    }, {
                        default: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", {
                                class: "theater-icon",
                                onClick: r
                            }, [(0,
                            o._)("span", {
                                innerHTML: (0,
                                c.SU)(n) ? (0,
                                c.SU)($e()) : (0,
                                c.SU)(Ke())
                            }, null, 8, rn)])]
                        }
                        )),
                        content: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", an, [(0,
                            o._)("span", null, (0,
                            d.zw)((0,
                            c.SU)(n) ? "正常模式" : "网页全屏"), 1), a[0] || (a[0] = (0,
                            o._)("div", {
                                class: "keyword flex-center"
                            }, "Y", -1))])]
                        }
                        )),
                        _: 1
                    }, 8, ["insert-to-global"])])
                }
            }
        })
          , on = (0,
        E.Z)(un, [["__scopeId", "data-v-6f584996"]]);
        t(56977);
        var ln = t(4968)
          , cn = t(62595)
          , sn = t(55231)
          , vn = t.n(sn)
          , fn = t(98396)
          , dn = t.n(fn)
          , pn = t(7224)
          , mn = t(20697)
          , hn = {
            class: "danmaku"
        }
          , gn = {
            class: "play-icon"
        }
          , yn = ["innerHTML"]
          , wn = {
            class: "header"
        }
          , _n = {
            class: "settings"
        }
          , Sn = {
            class: "item reset"
        }
          , kn = {
            class: "right"
        }
          , xn = ["innerHTML"]
          , Cn = {
            class: "item"
        }
          , bn = {
            class: "right"
        }
          , Ln = {
            class: "desc"
        }
          , Zn = {
            class: "item"
        }
          , Hn = {
            class: "right"
        }
          , En = {
            class: "desc"
        }
          , In = {
            class: "item"
        }
          , Tn = {
            class: "right"
        }
          , An = {
            class: "desc"
        }
          , Un = {
            class: "item"
        }
          , Mn = {
            class: "right"
        }
          , Vn = {
            class: "desc"
        };
        const Pn = (0,
        o.aZ)({
            __name: "Danmaku",
            setup: function(e) {
                var n = (0,
                o.f3)(S.WK)
                  , t = (0,
                o.f3)(S.HF)
                  , r = (0,
                o.f3)(S.a5)
                  , a = (0,
                o.f3)(S.UA)
                  , i = (0,
                o.f3)(S.m7)
                  , u = (0,
                o.f3)(S.aC)
                  , l = (0,
                c.iH)()
                  , v = (0,
                c.iH)()
                  , f = (0,
                o.Fl)((function() {
                    return ["1行", "2行", "25%", "50%", "85%"][n.value.range]
                }
                ))
                  , p = (0,
                o.Fl)((function() {
                    return ["极小", "小", "适中", "大", "极大"][n.value.fontSize]
                }
                ))
                  , m = (0,
                o.Fl)((function() {
                    return ["极慢", "慢", "适中", "快", "极快"][n.value.speed]
                }
                ));
                function h() {
                    (0,
                    pn.yD)("LIVE_BARRAGE_POPUP", {
                        move_speed: m.value,
                        show_area: f.value,
                        font_size: p.value,
                        transparency: (100 * n.value.opacity).toFixed(0),
                        status: n.value.enabled ? "OPEN" : "CLOSE"
                    })
                }
                function g(e) {
                    (0,
                    pn.ut)("LIVE_BARRAGE_POPUP", {
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
                function y() {
                    t()
                }
                return (0,
                s.ORN)(l, "mousemove", u),
                (0,
                o.YP)((function() {
                    return mn.ks.value
                }
                ), (function(e) {
                    var n;
                    e && (null === (n = v.value) || void 0 === n || n.hide())
                }
                )),
                (0,
                U.v1)(Ye.a3, (function() {
                    g("SWITCH"),
                    n.value.enabled = !n.value.enabled
                }
                )),
                function(e, t) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", hn, [(0,
                    o.Wm)(De.Z, {
                        ref_key: "toolTipRef",
                        ref: v,
                        placement: "top",
                        "insert-to-global": !(0,
                        c.SU)(r),
                        "tooltip-bg": "transparent",
                        onAfterShow: h
                    }, {
                        default: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", gn, [(0,
                            o._)("span", {
                                style: {
                                    height: "22px"
                                },
                                innerHTML: (0,
                                c.SU)(vn())
                            }, null, 8, yn)])]
                        }
                        )),
                        content: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", {
                                ref_key: "settingRef",
                                ref: l,
                                class: "setting"
                            }, [(0,
                            o._)("div", wn, [t[10] || (t[10] = (0,
                            o._)("span", {
                                class: "label"
                            }, [(0,
                            o.Uk)(" 弹幕开关 "), (0,
                            o._)("div", {
                                class: "keyword flex-center"
                            }, "B")], -1)), (0,
                            o.Wm)(cn.Z, {
                                modelValue: (0,
                                c.SU)(n).enabled,
                                "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                                    return (0,
                                    c.SU)(n).enabled = e
                                }
                                ),
                                onClick: t[1] || (t[1] = function(e) {
                                    return g("SWITCH")
                                }
                                )
                            }, null, 8, ["modelValue"])]), (0,
                            o._)("div", _n, [(0,
                            o._)("div", Sn, [t[12] || (t[12] = (0,
                            o._)("span", {
                                class: "label"
                            }, " 弹幕设置 ", -1)), (0,
                            o._)("div", kn, [(0,
                            o._)("div", {
                                class: "control",
                                onClick: y
                            }, [(0,
                            o._)("span", {
                                class: "icon",
                                innerHTML: (0,
                                c.SU)(dn())
                            }, null, 8, xn), t[11] || (t[11] = (0,
                            o.Uk)(" 恢复默认 "))])])]), (0,
                            o._)("div", Cn, [t[13] || (t[13] = (0,
                            o._)("span", {
                                class: "label"
                            }, " 不透明度 ", -1)), (0,
                            o._)("div", bn, [(0,
                            o.Wm)(ln.Z, {
                                modelValue: (0,
                                c.SU)(n).opacity,
                                "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                                    return (0,
                                    c.SU)(n).opacity = e
                                }
                                ),
                                min: .2,
                                max: 1,
                                step: .01,
                                height: 80,
                                vertical: !1,
                                disabled: !(0,
                                c.SU)(n).enabled,
                                onClick: t[3] || (t[3] = function(e) {
                                    return g("TRANSPARENCY")
                                }
                                )
                            }, null, 8, ["modelValue", "disabled"]), (0,
                            o._)("span", Ln, (0,
                            d.zw)((100 * (0,
                            c.SU)(n).opacity).toFixed(0)) + "%", 1)])]), (0,
                            o._)("div", Zn, [t[14] || (t[14] = (0,
                            o._)("span", {
                                class: "label"
                            }, " 显示区域 ", -1)), (0,
                            o._)("div", Hn, [(0,
                            o.Wm)(ln.Z, {
                                modelValue: (0,
                                c.SU)(n).range,
                                "onUpdate:modelValue": t[4] || (t[4] = function(e) {
                                    return (0,
                                    c.SU)(n).range = e
                                }
                                ),
                                "background-color": "#FFFFFF33",
                                min: 0,
                                max: 4,
                                vertical: !1,
                                marks: [0, 1, 2, 3, 4],
                                step: null,
                                disabled: !(0,
                                c.SU)(n).enabled,
                                onClick: t[5] || (t[5] = function(e) {
                                    return g("SHOW_AREA")
                                }
                                )
                            }, null, 8, ["modelValue", "disabled"]), (0,
                            o._)("span", En, (0,
                            d.zw)(f.value), 1)])]), (0,
                            o._)("div", In, [t[15] || (t[15] = (0,
                            o._)("span", {
                                class: "label"
                            }, " 字体大小 ", -1)), (0,
                            o._)("div", Tn, [(0,
                            o.Wm)(ln.Z, {
                                modelValue: (0,
                                c.SU)(n).fontSize,
                                "onUpdate:modelValue": t[6] || (t[6] = function(e) {
                                    return (0,
                                    c.SU)(n).fontSize = e
                                }
                                ),
                                "background-color": "#FFFFFF33",
                                min: 0,
                                max: 4,
                                vertical: !1,
                                marks: [0, 1, 2, 3, 4],
                                step: null,
                                disabled: !(0,
                                c.SU)(n).enabled,
                                onClick: t[7] || (t[7] = function(e) {
                                    return g("FONT_SIZE")
                                }
                                )
                            }, null, 8, ["modelValue", "disabled"]), (0,
                            o._)("span", An, (0,
                            d.zw)(p.value), 1)])]), (0,
                            o._)("div", Un, [t[16] || (t[16] = (0,
                            o._)("span", {
                                class: "label"
                            }, " 移动速度 ", -1)), (0,
                            o._)("div", Mn, [(0,
                            o.Wm)(ln.Z, {
                                modelValue: (0,
                                c.SU)(n).speed,
                                "onUpdate:modelValue": t[8] || (t[8] = function(e) {
                                    return (0,
                                    c.SU)(n).speed = e
                                }
                                ),
                                "background-color": "#FFFFFF33",
                                min: 0,
                                max: 4,
                                vertical: !1,
                                marks: [0, 1, 2, 3, 4],
                                step: null,
                                disabled: !(0,
                                c.SU)(n).enabled,
                                onClick: t[9] || (t[9] = function(e) {
                                    return g("MOVE_SPEED")
                                }
                                )
                            }, null, 8, ["modelValue", "disabled"]), (0,
                            o._)("span", Vn, (0,
                            d.zw)(m.value), 1)])])])], 512)]
                        }
                        )),
                        _: 1
                    }, 8, ["insert-to-global"])])
                }
            }
        })
          , On = (0,
        E.Z)(Pn, [["__scopeId", "data-v-ece7d8f4"]]);
        var Rn = ["onAnimationend"];
        const Fn = (0,
        o.aZ)({
            __name: "LikeAnimation",
            emits: ["like"],
            setup: function(e, n) {
                var t = n.emit
                  , r = (0,
                c.iH)([]);
                function a(e) {
                    var n = {
                        x: e.offsetX,
                        y: e.offsetY
                    };
                    r.value.push(n),
                    t("like")
                }
                return function(e, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: "container",
                        onDblclick: (0,
                        l.iM)(a, ["self"])
                    }, [((0,
                    o.wg)(!0),
                    (0,
                    o.iD)(o.HY, null, (0,
                    o.Ko)(r.value, (function(e, n) {
                        return (0,
                        o.wg)(),
                        (0,
                        o.iD)("div", {
                            class: "like-in-player",
                            key: e.x + "|y",
                            style: (0,
                            d.j5)({
                                top: "".concat(e.y, "px"),
                                left: "".concat(e.x, "px")
                            }),
                            onAnimationend: function(e) {
                                return function(e) {
                                    r.value.splice(e, 1)
                                }(n)
                            }
                        }, null, 44, Rn)
                    }
                    )), 128))], 32)
                }
            }
        })
          , Dn = (0,
        E.Z)(Fn, [["__scopeId", "data-v-e99e88a8"]]);
        var Nn = t(93045)
          , Wn = t(36968)
          , Jn = t.n(Wn)
          , Bn = t(34660)
          , Yn = t(16840)
          , Gn = t(42378)
          , jn = (t(34553),
        t(59022));
        t(51532),
        t(10072),
        t(99137),
        t(71957),
        t(96306),
        t(103),
        t(74592),
        t(58276),
        t(35082),
        t(12813),
        t(18222),
        t(38563),
        t(50336),
        t(7512);
        var qn = t(70885);
        t(82772);
        var zn = ["data-id", "data-line-id"];
        const Qn = (0,
        o.aZ)({
            __name: "index",
            setup: function(e, n) {
                var t = n.expose
                  , r = (0,
                U.oR)(B.lO)
                  , a = (0,
                o.f3)(S.WK)
                  , i = (0,
                c.iH)(null)
                  , u = (0,
                s.h4X)(i)
                  , f = u.width
                  , p = u.height
                  , m = (0,
                o.Fl)((function() {
                    return a.value.opacity
                }
                ))
                  , h = (0,
                o.Fl)((function() {
                    return Bn.Dp[a.value.fontSize]
                }
                ))
                  , g = (0,
                o.Fl)((function() {
                    return Bn.xu[a.value.speed]
                }
                ))
                  , y = (0,
                o.Fl)((function() {
                    return 1.4 * h.value
                }
                ))
                  , w = (0,
                o.Fl)((function() {
                    return h.value / 2
                }
                ))
                  , _ = (0,
                o.Fl)((function() {
                    return a.value.range < Bn.S9.QUARTER_SCREEN ? a.value.range + 1 : Math.floor(p.value * [.25, .5, .85][a.value.range - 2] / (y.value + w.value))
                }
                ))
                  , k = function(e) {
                    var n, t = (0,
                    c.iH)("running"), r = (0,
                    c.iH)([]), a = (0,
                    o.Fl)(e), i = (n = new Map,
                    {
                        updateLine: function(e, t) {
                            n.set(e, t)
                        },
                        updateAll: function(e) {
                            return n.forEach((function(n, t) {
                                return e(t)
                            }
                            ))
                        },
                        getLine: function(e) {
                            for (var t = -1, r = 0; r < e; r++)
                                if (!n.has(r) || n.get(r) < Date.now()) {
                                    t = r;
                                    break
                                }
                            return t
                        },
                        removeLine: function(e) {
                            n.delete(e)
                        },
                        clearLine: function() {
                            n.clear()
                        }
                    }), u = i.updateLine, l = i.updateAll, s = i.getLine, f = i.removeLine, d = i.clearLine, p = re()((function() {
                        console.debug("update danmaku speed"),
                        r.value.forEach((function(e) {
                            var n = e.value.el;
                            if (n) {
                                var t = n.getBoundingClientRect().x;
                                n.style.transition = "none",
                                n.style.transform = "translateX(".concat(t, "px) translateY(0) translateZ(0)")
                            }
                        }
                        )),
                        setTimeout((function() {
                            r.value.forEach((function(e) {
                                var n = e.value.el;
                                if (n) {
                                    var t = n.getBoundingClientRect().x
                                      , r = -k(e.value.content)
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
                    o.YP)(a, (function(e) {
                        r.value.forEach((function(n) {
                            n.value.style.top = "".concat(n.value.line * e.lineHeight + (n.value.line + 1) * e.lineMargin, "px"),
                            n.value.style.lineHeight = "".concat(e.lineHeight, "px"),
                            n.value.style.fontSize = "".concat(e.fontSize, "px")
                        }
                        )),
                        l((function(n) {
                            var t = r.value.filter((function(e) {
                                return e.value.line === n
                            }
                            ));
                            if (0 === t.length)
                                f(n);
                            else {
                                var a = t.pop()
                                  , i = (a.value.el.getBoundingClientRect().x + k(a.value.content)) / e.speed
                                  , o = Date.now() + 1e3 * i;
                                u(n, o)
                            }
                        }
                        ))
                    }
                    )),
                    (0,
                    o.YP)((function() {
                        return a.value.speed
                    }
                    ), (function() {
                        (0,
                        o.Y3)((function() {
                            p()
                        }
                        ))
                    }
                    )),
                    (0,
                    c.EB)((function() {
                        S(),
                        w()
                    }
                    ));
                    var m = function(e) {
                        var n = (0,
                        c.iH)([])
                          , t = (0,
                        c.Vh)(200)
                          , r = (0,
                        o.Fl)((function() {
                            return !!n.value.length
                        }
                        ));
                        return (0,
                        c.EB)((function() {
                            n.value.length = 0
                        }
                        )),
                        {
                            hasBuffer: r,
                            add: function(e) {
                                n.value.length >= t.value && n.value.splice(0, n.value.length - t.value + 1),
                                n.value.push(e)
                            },
                            comsume: function(e) {
                                if (void 0 === e)
                                    return n.value.shift();
                                var t = n.value.indexOf(e);
                                if (-1 !== t) {
                                    var r = n.value.splice(t, 1);
                                    return (0,
                                    qn.Z)(r, 1)[0]
                                }
                                return null
                            },
                            clear: function() {
                                n.value.length = 0
                            }
                        }
                    }()
                      , h = m.hasBuffer
                      , g = m.add
                      , y = m.comsume
                      , w = m.clear;
                    (0,
                    v.Zv)((function() {
                        "running" === t.value && h.value && -1 !== s(a.value.maxLineCount) && _(y(), "buffer")
                    }
                    ), 500);
                    var _ = function e(n) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "external";
                        if ("paused" !== t.value) {
                            var l = s(a.value.maxLineCount);
                            if (-1 !== l) {
                                if ("external" === i && h.value) {
                                    g(n);
                                    var v = y();
                                    v && (n = v)
                                }
                                var f = (k(n) + a.value.safeSpace) / a.value.speed * 1e3;
                                u(l, Date.now() + f);
                                var d = (0,
                                jn.x)()
                                  , p = a.value.screen.width
                                  , m = (p + 2 * k(n)) / a.value.speed
                                  , w = (0,
                                c.iH)({
                                    id: d,
                                    line: l,
                                    content: n,
                                    style: {
                                        top: "".concat(l * a.value.lineHeight + (l + 1) * a.value.lineMargin, "px"),
                                        lineHeight: "".concat(a.value.lineHeight, "px"),
                                        fontSize: "".concat(a.value.fontSize, "px"),
                                        width: "".concat(n.length + 4, "em"),
                                        transform: "translateX(".concat(p, "px) translateY(0) translateZ(0)"),
                                        transition: "transform ".concat(m, "s linear")
                                    }
                                });
                                r.value.push(w),
                                (0,
                                o.Y3)((function() {
                                    var e = function() {
                                        var e = 2 * -k(n);
                                        w.value.style.transform = "translateX(".concat(e, "px) translateY(0) translateZ(0)"),
                                        w.value.el.addEventListener("transitionstart", (function() {
                                            var e = (k(n) + a.value.safeSpace) / a.value.speed * 1e3;
                                            u(l, Date.now() + e)
                                        }
                                        ), {
                                            once: !0
                                        })
                                    };
                                    requestAnimationFrame ? requestAnimationFrame((function() {
                                        requestAnimationFrame((function() {
                                            e()
                                        }
                                        ))
                                    }
                                    )) : setTimeout((function() {
                                        e()
                                    }
                                    ), 100)
                                }
                                )),
                                h.value && -1 !== s(a.value.maxLineCount) && e(y())
                            } else
                                g(n)
                        }
                    }
                      , S = function() {
                        t.value = "paused",
                        r.value = []
                    }
                      , k = function(e) {
                        return (e.length + 4) * a.value.fontSize
                    };
                    return {
                        pool: r,
                        send: _,
                        stop: S,
                        resume: function() {
                            d(),
                            t.value = "running"
                        },
                        onTransitionEnd: function(e) {
                            var n, t = null !== (n = e.target) && void 0 !== n ? n : null;
                            if (t) {
                                var a = t.dataset.id;
                                if (a) {
                                    var i = r.value.findIndex((function(e) {
                                        return e.value.id === a
                                    }
                                    ));
                                    -1 !== i && r.value.splice(i, 1)
                                }
                            }
                        }
                    }
                }((function() {
                    return {
                        safeSpace: h.value * (a.value.fontSize === Bn.TI.EXTRA_LARGE ? 2 : 5),
                        speed: g.value,
                        screen: {
                            width: f.value,
                            height: p.value
                        },
                        fontSize: h.value,
                        lineHeight: y.value,
                        lineMargin: w.value,
                        maxLineCount: _.value,
                        opacity: m.value
                    }
                }
                ))
                  , x = k.pool
                  , C = k.send
                  , b = k.stop
                  , L = k.resume
                  , Z = k.onTransitionEnd;
                return (0,
                U.OR)("visibilitychange", (function() {
                    "hidden" === document.visibilityState ? b() : L()
                }
                )),
                N.C5 && Jn()(window, "_SEND_DANMAKU_", (function(e) {
                    C(e)
                }
                )),
                t({
                    send: function(e) {
                        C(e)
                    }
                }),
                function(e, n) {
                    return (0,
                    o.wy)(((0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        ref_key: "danmakuRef",
                        ref: i,
                        class: "danmaku",
                        style: (0,
                        d.j5)({
                            opacity: (0,
                            c.SU)(a).opacity
                        }),
                        onTransitionend: n[0] || (n[0] = function() {
                            return (0,
                            c.SU)(Z) && (0,
                            c.SU)(Z).apply(void 0, arguments)
                        }
                        )
                    }, [((0,
                    o.wg)(!0),
                    (0,
                    o.iD)(o.HY, null, (0,
                    o.Ko)((0,
                    c.SU)(x), (function(e) {
                        var n = e.value;
                        return (0,
                        o.wg)(),
                        (0,
                        o.iD)("div", {
                            ref_for: !0,
                            ref: function(e) {
                                return n.el = e
                            },
                            key: n.id,
                            class: "item",
                            "data-id": n.id,
                            "data-line-id": n.line,
                            style: (0,
                            d.j5)(n.style)
                        }, [(0,
                        o.Wm)(Yn.Z, {
                            content: n.content,
                            processors: [(0,
                            c.SU)(Gn.S).EMOJI],
                            "emoji-icon-urls": (0,
                            c.SU)(r).iconUrls,
                            "emoji-style": {
                                width: h.value + "px"
                            }
                        }, null, 8, ["content", "processors", "emoji-icon-urls", "emoji-style"])], 12, zn)
                    }
                    )), 128))], 36)), [[l.F8, (0,
                    c.SU)(a).enabled]])
                }
            }
        })
          , Kn = (0,
        E.Z)(Qn, [["__scopeId", "data-v-f478b75a"]]);
        var Xn = t(14284)
          , $n = {
            class: "container"
        }
          , et = {
            class: "card"
        }
          , nt = {
            key: 0,
            class: "no-login"
        }
          , tt = {
            class: "input-container"
        }
          , rt = ["type", "disabled"]
          , at = {
            class: "input-button"
        }
          , it = {
            class: "error-msg"
        };
        const ut = (0,
        o.aZ)({
            __name: "index",
            setup: function(e) {
                var n = (0,
                o.f3)(Xn.n0)
                  , t = (0,
                o.f3)(S.Hz)
                  , r = (0,
                c.iH)("")
                  , i = (0,
                c.iH)(!1)
                  , s = (0,
                o.Fl)((function() {
                    return i.value ? "text" : "password"
                }
                ))
                  , v = (0,
                c.iH)("")
                  , f = (0,
                P.tv)();
                function p() {
                    (0,
                    B.dd)({
                        type: "login"
                    })
                }
                function m() {
                    return h.apply(this, arguments)
                }
                function h() {
                    return (h = (0,
                    a.Z)(u().mark((function e() {
                        var n;
                        return u().wrap((function(e) {
                            for (; ; )
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
                function y() {
                    i.value = !i.value
                }
                function w() {
                    f.push({
                        name: "index"
                    })
                }
                return function(e, t) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("section", $n, [(0,
                    o._)("div", et, [(0,
                    c.SU)(n) ? (0,
                    o.kq)("", !0) : ((0,
                    o.wg)(),
                    (0,
                    o.iD)("div", nt, [t[1] || (t[1] = (0,
                    o._)("span", null, "登录后可输入密码观看加密直播", -1)), (0,
                    o._)("div", {
                        class: "button login",
                        onClick: p
                    }, " 登录 ")])), (0,
                    o._)("div", {
                        class: (0,
                        d.C_)(["main", {
                            "no-active": !(0,
                            c.SU)(n)
                        }])
                    }, [t[2] || (t[2] = (0,
                    o._)("div", {
                        class: "title"
                    }, " 请输入主播设置的密码 ", -1)), (0,
                    o._)("div", tt, [(0,
                    o.wy)((0,
                    o._)("input", {
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return r.value = e
                        }
                        ),
                        class: "input",
                        type: s.value,
                        disabled: !(0,
                        c.SU)(n)
                    }, null, 8, rt), [[l.YZ, r.value]]), (0,
                    o._)("div", at, [(0,
                    o._)("div", {
                        class: "clear",
                        onClick: g
                    }), (0,
                    o._)("div", {
                        class: (0,
                        d.C_)([i.value ? "hide" : "show"]),
                        onClick: y
                    }, null, 2)])]), (0,
                    o._)("div", it, (0,
                    d.zw)(v.value), 1), (0,
                    o._)("div", {
                        class: "bottom"
                    }, [(0,
                    o._)("div", {
                        class: "button logout",
                        onClick: w
                    }, " 退出 "), (0,
                    o._)("div", {
                        class: "button join",
                        onClick: m
                    }, " 加入 ")])], 2)])])
                }
            }
        })
          , ot = (0,
        E.Z)(ut, [["__scopeId", "data-v-3fdc74e8"]]);
        var lt = {
            class: "need"
        };
        const ct = (0,
        o.aZ)({
            __name: "index",
            setup: function(e) {
                function n() {
                    (0,
                    B.dd)({
                        type: "login"
                    })
                }
                return function(e, t) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", lt, [(0,
                    o._)("div", {
                        class: "content"
                    }, [t[0] || (t[0] = (0,
                    o._)("div", {
                        class: "title"
                    }, " 当前直播间仅支持登录用户观看 ", -1)), (0,
                    o._)("div", {
                        class: "button",
                        onClick: n
                    }, " 立即登录 ")])])
                }
            }
        })
          , st = (0,
        E.Z)(ct, [["__scopeId", "data-v-653c7077"]]);
        var vt = t(32363)
          , ft = t(51190)
          , dt = t(54937)
          , pt = t(26876);
        t(44048);
        var mt = t(8542)
          , ht = (t(69600),
        t(82106))
          , gt = t.n(ht)
          , yt = t(58188)
          , wt = ["innerHTML"]
          , _t = {
            class: "flex items-center"
        }
          , St = {
            key: 0,
            class: "keyword flex-center"
        };
        const kt = (0,
        o.aZ)({
            __name: "SmallWindow",
            props: {
                isPortrait: {
                    type: Boolean
                },
                instance: {}
            },
            emits: ["cantPicture", "changePictureShow", "beforeChange", "afterLeave"],
            setup: function(e, n) {
                var t, r, i = n.expose, l = n.emit, s = (0,
                o.f3)(S.k), v = (0,
                o.f3)(S.X0), f = (0,
                o.f3)(S.XE), p = (0,
                o.f3)(S.zz), m = (0,
                o.f3)(S.gD), h = (0,
                c.iH)(!1), g = (0,
                c.iH)(), y = !1, w = e, _ = l;
                function k() {
                    return (k = (0,
                    a.Z)(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    o.Y3)();
                                case 2:
                                    if (!("documentPictureInPicture"in window)) {
                                        e.next = 5;
                                        break
                                    }
                                    return documentPictureInPicture.addEventListener("enter", (function() {
                                        _("changePictureShow", !0)
                                    }
                                    )),
                                    e.abrupt("return");
                                case 5:
                                    if (!("pictureInPictureEnabled"in document)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    _("cantPicture");
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
                    return C.apply(this, arguments)
                }
                function C() {
                    return (C = (0,
                    a.Z)(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    p.value ? (m(),
                                    oe()(b, 400)) : b();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                function b() {
                    return L.apply(this, arguments)
                }
                function L() {
                    return (L = (0,
                    a.Z)(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (_("beforeChange"),
                                    !(0,
                                    N.pE)()) {
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
                                    if (!("documentPictureInPicture"in window)) {
                                        e.next = 11;
                                        break
                                    }
                                    H(),
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
                o.bv)((function() {
                    !function() {
                        k.apply(this, arguments)
                    }()
                }
                ));
                var Z = !1;
                function H() {
                    return E.apply(this, arguments)
                }
                function E() {
                    return (E = (0,
                    a.Z)(u().mark((function e() {
                        var n, r;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!y) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return y = !0,
                                    e.prev = 3,
                                    e.next = 6,
                                    documentPictureInPicture.requestWindow({
                                        width: w.isPortrait ? 300 : 512,
                                        height: w.isPortrait ? 512 : 288
                                    });
                                case 6:
                                    (t = e.sent).document.body.append(s.value),
                                    (0,
                                    M.Z)(document.styleSheets).forEach((function(e) {
                                        try {
                                            var n = (0,
                                            M.Z)(e.cssRules).map((function(e) {
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
                                    y = !1,
                                    null === (n = t) || void 0 === n || n.addEventListener("pagehide", (function() {
                                        w.instance.prepend(s.value),
                                        f(v.value),
                                        _("changePictureShow", !1)
                                    }
                                    )),
                                    null === (r = t) || void 0 === r || r.addEventListener("resize", re()(O, 200)),
                                    O(),
                                    e.next = 19;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(3),
                                    I(),
                                    y = !1;
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
                    a.Z)(u().mark((function e() {
                        var n, t;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!Z) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return Z = !0,
                                    e.prev = 3,
                                    r = s.value.querySelector("video"),
                                    e.next = 7,
                                    null === (n = r) || void 0 === n ? void 0 : n.requestPictureInPicture();
                                case 7:
                                    null === (t = r) || void 0 === t || t.addEventListener("enterpictureinpicture", (function() {
                                        _("changePictureShow", !0)
                                    }
                                    )),
                                    r.addEventListener("leavepictureinpicture", A),
                                    Z = !1,
                                    e.next = 18;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(3),
                                    _("changePictureShow", !1),
                                    _("cantPicture"),
                                    console.log("【P2】播放器交互体验-小窗失败"),
                                    (0,
                                    yt.qs)({
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
                function A() {
                    return V.apply(this, arguments)
                }
                function V() {
                    return (V = (0,
                    a.Z)(u().mark((function e() {
                        var n, a;
                        return u().wrap((function(e) {
                            for (; ; )
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
                                    m(),
                                    _("changePictureShow", !1);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                function P() {
                    h.value = !1
                }
                function O() {
                    if (t && v.value % 180 != 0) {
                        var e = t.document.body.clientWidth
                          , n = t.document.body.clientHeight
                          , r = t.document.querySelector("video");
                        r && (r.style.cssText = ["width: ".concat(n, "px;"), "height: ".concat(e, "px;"), "max-height: ".concat(e, "px;")].join(" "))
                    }
                }
                return (0,
                U.v1)(Ye.Oz, (function() {
                    x()
                }
                )),
                (0,
                o.YP)(mn.ks, (function(e) {
                    var n;
                    e && (null === (n = g.value) || void 0 === n || n.hide())
                }
                )),
                i({
                    showTip: function() {
                        h.value = !0,
                        g.value.show()
                    },
                    exit: function() {
                        A()
                    }
                }),
                function(e, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", null, [(0,
                    o.Wm)(De.Z, {
                        ref_key: "tooltipRef",
                        ref: g,
                        placement: "top",
                        onAfterHide: P
                    }, {
                        default: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", {
                                class: "play-icon flex-center",
                                onClick: x
                            }, [(0,
                            o._)("span", {
                                innerHTML: (0,
                                c.SU)(gt())
                            }, null, 8, wt)])]
                        }
                        )),
                        content: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", _t, [(0,
                            o._)("span", null, (0,
                            d.zw)(h.value ? "小窗模式上线啦，工作摸鱼两不误" : "小窗模式"), 1), h.value ? (0,
                            o.kq)("", !0) : ((0,
                            o.wg)(),
                            (0,
                            o.iD)("div", St, "U"))])]
                        }
                        )),
                        _: 1
                    }, 512)])
                }
            }
        })
          , xt = (0,
        E.Z)(kt, [["__scopeId", "data-v-16ffe804"]]);
        var Ct = t(26806)
          , bt = {
            class: "tip absolute w-100-p h-100-p flex-center flex-col"
        };
        const Lt = (0,
        o.aZ)({
            __name: "index",
            emits: ["exit"],
            setup: function(e, n) {
                var t = n.emit;
                function r() {
                    t("exit")
                }
                return function(e, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", bt, [n[1] || (n[1] = (0,
                    o._)("div", {
                        class: "title"
                    }, "当前画面正在以小窗播放", -1)), (0,
                    o._)("div", {
                        class: "btn flex items-center cursor-pointer",
                        onClick: r
                    }, n[0] || (n[0] = [(0,
                    o._)("img", {
                        src: Ct,
                        alt: ""
                    }, null, -1), (0,
                    o._)("span", null, "恢复大窗播放", -1)]))])
                }
            }
        })
          , Zt = (0,
        E.Z)(Lt, [["__scopeId", "data-v-cd034a4e"]]);
        var Ht = t(60846)
          , Et = t(51085);
        var It = {
            class: "left-part"
        }
          , Tt = {
            class: "right-part"
        }
          , At = {
            key: 5,
            class: "mask flex-center"
        }
          , Ut = ["src"];
        const Mt = (0,
        o.aZ)({
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
                    default: function() {
                        return {
                            forbiddenState: R.yL.SUCCESS
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
            setup: function(e, n) {
                var t = n.expose
                  , r = n.emit
                  , i = (0,
                c.iH)([R.Bc.ended, R.Bc.error])
                  , v = (0,
                c.iH)(null)
                  , f = (0,
                o.AE)("player")
                  , p = (0,
                c.iH)(null)
                  , m = (0,
                c.iH)(null)
                  , h = (0,
                o.f3)(S.n0)
                  , g = (0,
                o.f3)(S.uB)
                  , y = (0,
                o.f3)(S.Q4)
                  , w = (0,
                o.f3)(S.vb)
                  , _ = (0,
                o.f3)(S.CD)
                  , k = (0,
                c.iH)(R.z3.TIP_HIDE)
                  , x = (0,
                o.f3)(S.Wq)
                  , b = (0,
                c.iH)(!0)
                  , L = (0,
                c.iH)(!0)
                  , Z = (0,
                c.iH)(!1)
                  , H = (0,
                c.iH)(null)
                  , E = (0,
                c.iH)()
                  , I = (0,
                o.Fl)((function() {
                    return x.value || e.isFull
                }
                ))
                  , T = ((0,
                o.Fl)((function() {
                    return e.liveStream.privateLive ? "私密直播间" : "直播间"
                }
                )),
                (0,
                o.Fl)((function() {
                    return e.isLiving && e.liveStream.privateLive && !e.authToken
                }
                )))
                  , A = (0,
                o.Fl)((function() {
                    return e.isLiving && e.liveStream.limitToPlay && !h.value
                }
                ))
                  , M = (0,
                o.Fl)((function() {
                    return !e.isLiving || T.value || e.status.forbiddenState === R.yL.BE_BANNED || e.status.forbiddenState === R.yL.BE_TICK_OUT
                }
                ))
                  , V = (0,
                o.Fl)((function() {
                    return e.liveStream.dynamicLayoutEnable
                }
                ))
                  , P = (0,
                c.iH)(null)
                  , F = function(e) {
                    G().set("kslive.player.controls.volume", e)
                }
                  , W = function() {
                    var e = G().get("kslive.player.controls.volume");
                    return null === e || Number.isNaN(+e) ? .5 : e
                }
                  , Y = function(e) {
                    var n = (0,
                    o.f3)(S.n0);
                    return {
                        canChangeQuality: function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return !(!["STANDARD", "HIGH", "SUPER"].includes(t.qualityType) && !n.value && (r && (0,
                            D.C)("LIVE_RESOLUTION").then((function(n) {
                                n || ((0,
                                U.f0)(de.XP, (function() {
                                    var n;
                                    console.log("quality", t.level),
                                    null == e || null === (n = e.value) || void 0 === n || n.changeQuality({
                                        level: t.level
                                    }, !0)
                                }
                                )),
                                (0,
                                U.f0)(de.s1, (function() {
                                    (0,
                                    U.M5)(de.XP)
                                }
                                )))
                            }
                            )),
                            1))
                        }
                    }
                }(P)
                  , j = Y.canChangeQuality
                  , q = (0,
                U.jh)(Ht.F).broadcast;
                function z() {
                    return Q.apply(this, arguments)
                }
                function Q() {
                    return Q = (0,
                    a.Z)(u().mark((function n() {
                        var t, r = arguments;
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (t = !(r.length > 0 && void 0 !== r[0]) || r[0],
                                    n.prev = 1,
                                    f.value && f.value.stop(),
                                    t && (0,
                                    C.lp)(!1),
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
                                    o.Y3)();
                                case 9:
                                    (0,
                                    C.lp)(!1);
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
                                    o.Y3)();
                                case 15:
                                    (0,
                                    C.lp)(!1);
                                case 16:
                                    n.next = 23;
                                    break;
                                case 18:
                                    n.prev = 18,
                                    n.t0 = n.catch(1),
                                    console.error("播放失败", n.t0),
                                    (0,
                                    yt.qs)({
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
                    Q.apply(this, arguments)
                }
                function K() {
                    return X.apply(this, arguments)
                }
                function X() {
                    return (X = (0,
                    a.Z)(u().mark((function n() {
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (V.value) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return", z());
                                case 2:
                                    if (n.prev = 2,
                                    f.value && f.value.stop(),
                                    (0,
                                    C.lp)(!0),
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
                                    yt.qs)({
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
                    a.Z)(u().mark((function n() {
                        var t;
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (b.value = !1,
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
                                    C.RQ)() ? K() : z();
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
                    a.Z)(u().mark((function n() {
                        var t;
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    (0,
                                    o.Y3)();
                                case 2:
                                    if (e.active) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 4:
                                    if ((null === (t = e.errorType) || void 0 === t ? void 0 : t.type) !== R.yL.NEED_CAPTCHA) {
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
                o.bv)((function() {
                    q(),
                    f.value.changeVolume(W()),
                    (0,
                    B.Tm)({
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
                    a.Z)(u().mark((function n() {
                        return u().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    (0,
                                    D.C)();
                                case 2:
                                    if (!n.sent) {
                                        n.next = 6;
                                        break
                                    }
                                    (0,
                                    O.XN)({
                                        liveStreamId: e.liveStream.id,
                                        count: 1
                                    }),
                                    te && (0,
                                    B.NV)({
                                        content: "点亮了[heart]",
                                        name: _.value.name,
                                        type: R.Sg.LIKE
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
                    C.lp)(!1),
                    f.value.stop(),
                    g(e.index)
                }
                function ue() {
                    return le.apply(this, arguments)
                }
                function le() {
                    return (le = (0,
                    a.Z)(u().mark((function n() {
                        var t;
                        return u().wrap((function(n) {
                            for (; ; )
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
                                    O.C2)(e.liveStream.id);
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
                    1003 === (null == e ? void 0 : e.code) && y(),
                    ue()
                }
                function se(e) {
                    r("change-follow", e)
                }
                (0,
                o.Jd)((function() {
                    var n;
                    e.isLiving && (0,
                    B.Tm)({
                        type: "play",
                        data: {
                            liveStream: e.liveStream,
                            author: e.author,
                            gameInfo: e.gameInfo
                        }
                    }),
                    Z.value && (null === (n = H.value) || void 0 === n || n.exit())
                }
                )),
                (0,
                U.v1)(de.uO, (function(e) {
                    e.forEach((function(e) {
                        var n;
                        null === (n = m.value) || void 0 === n || n.send(e.feed.content)
                    }
                    ))
                }
                )),
                (0,
                o.JJ)(S.eW, k),
                t({
                    pause: function() {
                        var e;
                        null === (e = f.value) || void 0 === e || e.stop()
                    },
                    loadLive: function() {
                        return $.apply(this, arguments)
                    },
                    getQuality: function() {
                        var e;
                        return null === (e = P.value) || void 0 === e ? void 0 : e.quality
                    },
                    changeQuality: function() {
                        var e;
                        null === (e = P.value) || void 0 === e || e.changeQuality(0, !0)
                    },
                    finish: function() {
                        ie()
                    }
                });
                var ve = (0,
                c.iH)(!1);
                function fe(e) {
                    ve.value = e
                }
                function pe() {
                    mt.Xm.value && (0,
                    mt.Cp)()
                }
                function me() {
                    V.value && (0,
                    C.RQ)() && (z(),
                    (0,
                    C.lp)(!1))
                }
                var he = 0;
                function ge(n) {
                    n ? (he = Date.now(),
                    (0,
                    mt.dR)()) : ((0,
                    yt.S9)("LIVE_WINDOWS_DURATION", {
                        total_duration: Date.now() - he,
                        live_stream_id: e.liveStream.id,
                        start_timestamp: he,
                        end_timestamp: Date.now(),
                        author_user_id: e.author.id
                    }),
                    (0,
                    mt.Un)(),
                    V.value && (0,
                    C.RQ)() && !e.isPk && ((0,
                    C.lp)(!0),
                    K())),
                    (0,
                    mt.Cp)(),
                    Z.value = n,
                    (0,
                    B.zw)(!n)
                }
                function ye() {
                    var e;
                    null === (e = H.value) || void 0 === e || e.exit()
                }
                var we, _e = (0,
                s.xKQ)();
                return (0,
                o.YP)(_e, (function(n) {
                    var t;
                    "visible" === n && e.active && (null === (t = f.value) || void 0 === t || t.play())
                }
                )),
                (0,
                o.YP)((function() {
                    return e.errorType
                }
                ), (function() {
                    e.errorType.title && y()
                }
                )),
                (0,
                o.YP)((function() {
                    return e.active
                }
                ), (function(e) {
                    N.C5 && e && function(e) {
                        var n = e.showSmallWindow
                          , t = e.showQualityTip
                          , r = e.downQuality
                          , a = e.hasLogin;
                        (0,
                        o.YP)((function() {
                            return a.value
                        }
                        ), (function(e) {
                            var a;
                            e ? (a = G().get(J.IU),
                            (0,
                            Et.Z)(a) || setTimeout((function() {
                                n(),
                                G().set(J.IU, Date.now())
                            }
                            ), 1e3)) : oe()((function() {
                                var e, n = null !== (e = G().get(J.rt)) && void 0 !== e ? e : {
                                    time: 0,
                                    count: 0
                                }, a = n.time, i = n.count;
                                i = Number(i),
                                (0,
                                Et.Z)(a) && i >= 3 ? r() : (null == t ? void 0 : t()) ? G().set(J.rt, {
                                    time: Date.now(),
                                    count: i + 1
                                }) : function() {
                                    var e, n = null !== (e = G().get(J.nM)) && void 0 !== e ? e : 0;
                                    (0,
                                    Et.Z)(n) || oe()((function() {
                                        (0,
                                        B.eW)(),
                                        G().set(J.nM, Date.now())
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
                        showQualityTip: function() {
                            var e;
                            return !!(null === (e = P.value) || void 0 === e ? void 0 : e.showTip())
                        },
                        showSmallWindow: function() {
                            var e;
                            null === (e = H.value) || void 0 === e || e.showTip()
                        },
                        downQuality: function() {
                            var e;
                            null === (e = P.value) || void 0 === e || e.downQuality()
                        },
                        hasLogin: h
                    })
                }
                ), {
                    immediate: !0
                }),
                (0,
                o.YP)(E, (function(n) {
                    e.active && (0,
                    C.zk)(n)
                }
                )),
                (0,
                o.YP)((function() {
                    return e.isPk
                }
                ), (function(e) {
                    V.value && (we && clearTimeout(we),
                    e ? z(!1) : we = oe()(K, 1e4))
                }
                )),
                function(e, n) {
                    var t = (0,
                    o.Q2)("log");
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", {
                        class: (0,
                        d.C_)(["player flex-col flex-1 relative", [Z.value ? "in-pip" : "out-pip"]])
                    }, [e.liveStream.poster ? ((0,
                    o.wg)(),
                    (0,
                    o.j4)(Te.Z, {
                        key: 0,
                        class: "blur",
                        src: e.liveStream.poster
                    }, null, 8, ["src"])) : (0,
                    o.kq)("", !0), M.value ? (0,
                    o.kq)("", !0) : ((0,
                    o.wg)(),
                    (0,
                    o.j4)(He.Z, {
                        key: 1,
                        full: I.value,
                        portrait: ve.value
                    }, {
                        author: (0,
                        o.w5)((function() {
                            return [e.active ? ((0,
                            o.wg)(),
                            (0,
                            o.j4)(ft.Z, {
                                key: 0,
                                author: e.author,
                                "live-stream": e.liveStream,
                                "display-like-count": e.displayLikeCount,
                                onChangeFollow: se
                            }, null, 8, ["author", "live-stream", "display-like-count"])) : (0,
                            o.kq)("", !0)]
                        }
                        )),
                        _: 1
                    }, 8, ["full", "portrait"])), Z.value ? ((0,
                    o.wg)(),
                    (0,
                    o.j4)(Zt, {
                        key: 2,
                        onExit: ye
                    })) : (0,
                    o.kq)("", !0), (0,
                    o._)("div", {
                        ref_key: "instanceRef",
                        ref: v,
                        class: (0,
                        d.C_)(["player-wrapper flex w-100-p flex-1", {
                            full: I.value,
                            "no-gift": !(0,
                            c.SU)(w).canSendGift
                        }])
                    }, [(0,
                    o.Wm)(Ze.Z, {
                        id: e.liveStream.id,
                        ref_key: "player",
                        ref: f,
                        "is-live": e.isLiving,
                        events: i.value,
                        class: (0,
                        d.C_)({
                            "w-100vw": Z.value,
                            "h-100vh": Z.value,
                            "player-in-pip": Z.value,
                            "double-screen": (0,
                            c.SU)(C.Lu)
                        }),
                        poster: e.liveStream.poster,
                        source: "主播间",
                        onEnded: ue,
                        onError: ce,
                        onSyncVolume: (0,
                        c.SU)(F)
                    }, {
                        canvas: (0,
                        o.w5)((function() {
                            return [(0,
                            o._)("div", {
                                ref_key: "mainDisplay",
                                ref: E,
                                class: (0,
                                d.C_)(["main-display", {
                                    hide: !(0,
                                    c.SU)(C.Lu) || e.isPk
                                }])
                            }, null, 2)]
                        }
                        )),
                        default: (0,
                        o.w5)((function() {
                            return [(0,
                            o.Wm)(Ue.Z, {
                                onMediaInfo: fe
                            }, {
                                default: (0,
                                o.w5)((function() {
                                    return [(0,
                                    o.Wm)(Ae.Z, {
                                        ref_key: "centerStateRef",
                                        ref: p,
                                        onClick: pe
                                    }, {
                                        error: (0,
                                        o.w5)((function() {
                                            var n, t, r;
                                            return [e.errorType ? ((0,
                                            o.wg)(),
                                            (0,
                                            o.j4)(vt.Z, {
                                                key: 0,
                                                url: null === (n = e.errorType) || void 0 === n ? void 0 : n.url,
                                                title: null === (t = e.errorType) || void 0 === t ? void 0 : t.title,
                                                content: null === (r = e.errorType) || void 0 === r ? void 0 : r.content
                                            }, null, 8, ["url", "title", "content"])) : (0,
                                            o.kq)("", !0)]
                                        }
                                        )),
                                        ended: (0,
                                        o.w5)((function() {
                                            var n, t, r;
                                            return [e.errorType ? ((0,
                                            o.wg)(),
                                            (0,
                                            o.j4)(vt.Z, {
                                                key: 0,
                                                url: null === (n = e.errorType) || void 0 === n ? void 0 : n.url,
                                                title: null === (t = e.errorType) || void 0 === t ? void 0 : t.title,
                                                content: null === (r = e.errorType) || void 0 === r ? void 0 : r.content
                                            }, null, 8, ["url", "title", "content"])) : e.isLiving ? (0,
                                            o.kq)("", !0) : ((0,
                                            o.wg)(),
                                            (0,
                                            o.j4)(Nn.Z, {
                                                key: 1,
                                                "is-in-picture": Z.value,
                                                "forbidden-state": e.status.forbiddenState,
                                                onNextOne: ee
                                            }, null, 8, ["is-in-picture", "forbidden-state"]))]
                                        }
                                        )),
                                        _: 1
                                    }, 512), Z.value || e.active && e.isLiving ? ((0,
                                    o.wg)(),
                                    (0,
                                    o.j4)(Me.Z, {
                                        key: 0,
                                        "auto-hide": !0
                                    }, {
                                        default: (0,
                                        o.w5)((function() {
                                            return [(0,
                                            o._)("div", It, [(0,
                                            o.wy)((0,
                                            o.Wm)(Ve.Z, {
                                                "is-in-picture": Z.value
                                            }, null, 8, ["is-in-picture"]), [[t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "播放"
                                            })]]), (0,
                                            o.wy)((0,
                                            o.Wm)(Pe.Z, {
                                                "is-in-picture": Z.value
                                            }, null, 8, ["is-in-picture"]), [[t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "刷新"
                                            })]])]), (0,
                                            o._)("div", Tt, [(0,
                                            o.wy)((0,
                                            o.Wm)(Oe.Z, {
                                                ref_key: "qualityRef",
                                                ref: P,
                                                disabled: !1,
                                                "custom-label": (0,
                                                c.SU)(w).isWorldCup,
                                                "can-change": (0,
                                                c.SU)(j)
                                            }, null, 8, ["custom-label", "can-change"]), [[l.F8, !Z.value], [t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "清晰度"
                                            })]]), (0,
                                            o.wy)((0,
                                            o.Wm)(Fe.Z, null, null, 512), [[l.F8, !Z.value && !(0,
                                            c.SU)(C.Lu)], [t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "旋转"
                                            })]]), (0,
                                            o.wy)((0,
                                            o.Wm)(On, null, null, 512), [[l.F8, !Z.value], [t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "弹幕"
                                            })]]), (0,
                                            o.wy)((0,
                                            o.Wm)(Re.Z, {
                                                "is-in-picture": Z.value
                                            }, null, 8, ["is-in-picture"]), [[t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "声音"
                                            })]]), (0,
                                            o.wy)((0,
                                            o.Wm)(xt, {
                                                ref_key: "smallScreenRef",
                                                ref: H,
                                                instance: v.value,
                                                "is-portrait": ve.value,
                                                onBeforeChange: me,
                                                onCantPicture: n[0] || (n[0] = function(e) {
                                                    return L.value = !1
                                                }
                                                ),
                                                onChangePictureShow: ge
                                            }, null, 8, ["instance", "is-portrait"]), [[l.F8, L.value && !Z.value], [t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "小屏"
                                            })]]), (0,
                                            o.wy)((0,
                                            o.Wm)(on, {
                                                "is-theater-mode": e.theaterMode
                                            }, null, 8, ["is-theater-mode"]), [[l.F8, !Z.value], [t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "网页全屏"
                                            })]]), (0,
                                            o.wy)((0,
                                            o.Wm)(ze, null, null, 512), [[l.F8, !Z.value], [t, (0,
                                            c.SU)(pn.gU)("WEB_LIVE_ROOM_PAGE_BUTTON", {
                                                button_name: "全屏"
                                            })]])])]
                                        }
                                        )),
                                        _: 1
                                    })) : (0,
                                    o.kq)("", !0), e.active && !Z.value && e.isLiving ? ((0,
                                    o.wg)(),
                                    (0,
                                    o.j4)(Kn, {
                                        key: 1,
                                        ref_key: "theDanmaku",
                                        ref: m
                                    }, null, 512)) : (0,
                                    o.kq)("", !0), T.value ? ((0,
                                    o.wg)(),
                                    (0,
                                    o.j4)(ot, {
                                        key: 2
                                    })) : (0,
                                    o.kq)("", !0), A.value ? ((0,
                                    o.wg)(),
                                    (0,
                                    o.j4)(st, {
                                        key: 3
                                    })) : (0,
                                    o.kq)("", !0), e.isLiving ? ((0,
                                    o.wg)(),
                                    (0,
                                    o.j4)(Dn, {
                                        key: 4,
                                        onLike: re
                                    })) : (0,
                                    o.kq)("", !0), b.value && 0 !== e.index ? ((0,
                                    o.wg)(),
                                    (0,
                                    o.iD)("div", At, [(0,
                                    o._)("img", {
                                        class: "flex-1 w-100-m h-100-m object-contain",
                                        src: e.liveStream.poster,
                                        alt: ""
                                    }, null, 8, Ut)])) : (0,
                                    o.kq)("", !0)]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }, 8, ["id", "is-live", "events", "class", "poster", "onSyncVolume"]), Z.value ? (0,
                    o.kq)("", !0) : ((0,
                    o.wg)(),
                    (0,
                    o.j4)(Ie.Z, {
                        key: 0,
                        active: e.active,
                        full: I.value,
                        portrait: ve.value
                    }, null, 8, ["active", "full", "portrait"]))], 2), e.active ? ((0,
                    o.wg)(),
                    (0,
                    o.j4)(Ee.Z, {
                        key: 3,
                        full: I.value
                    }, {
                        gift: (0,
                        o.w5)((function() {
                            return [(0,
                            o.Wm)(dt.Z, {
                                "img-size": "min"
                            })]
                        }
                        )),
                        kcoin: (0,
                        o.w5)((function() {
                            return [(0,
                            o.wy)((0,
                            o.Wm)(pt.Z, {
                                size: "min"
                            }, null, 512), [[t, (0,
                            c.SU)(pn.F8)("LIVE_RECRAGER_BUTTON")]])]
                        }
                        )),
                        _: 1
                    }, 8, ["full"])) : (0,
                    o.kq)("", !0)], 2)
                }
            }
        })
          , Vt = (0,
        E.Z)(Mt, [["__scopeId", "data-v-2b8d031e"]]);
        var Pt = t(89194)
          , Ot = (t(60285),
        t(41637),
        t(39714),
        t(64765),
        t(94775))
          , Rt = v.C5 && parseInt(G().session.get(J.Vc)) || 0
          , Ft = (0,
        c.iH)(Rt)
          , Dt = ["kwai-beta.corp.kuaishou.com", "www.kuaishou.com"]
          , Nt = function() {
            if (N.sk)
                return Ft.value;
            var e, n = new URLSearchParams(window.location.search).get("liveFromSource");
            return Dt.includes(Jt(document.referrer)) && Ot.W.includes(n) && (G().session.set(J.Vc, n),
            Ft.value = parseInt(n) || 0,
            (e = new URL(window.location.href)).searchParams.delete("liveFromSource"),
            window.history.replaceState({}, "", e.toString())),
            Ft.value
        };
        function Wt() {
            var e = document.referrer;
            return e ? e.includes(document.domain) ? e.includes("/cate/") ? 9 : e.includes("/my-follow/") ? 4 : e.includes("/search") ? 5 : e.includes("/match") || e.includes("/race") ? 6 : e.includes("/live/") ? 5 : 2 : Nt() : Nt() || 7
        }
        function Jt(e) {
            return "" === e || e.includes(document.domain) ? "" : new URL(e).hostname
        }
        var Bt = t(82729)
          , Yt = t.n(Bt);
        function Gt(e, n) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
                if (Array.isArray(e) || (t = function(e, n) {
                    if (e) {
                        if ("string" == typeof e)
                            return jt(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? jt(e, n) : void 0
                    }
                }(e)) || n && e && "number" == typeof e.length) {
                    t && (e = t);
                    var r = 0
                      , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, u = !0, o = !1;
            return {
                s: function() {
                    t = t.call(e)
                },
                n: function() {
                    var e = t.next();
                    return u = e.done,
                    e
                },
                e: function(e) {
                    o = !0,
                    i = e
                },
                f: function() {
                    try {
                        u || null == t.return || t.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
            }
        }
        function jt(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++)
                r[t] = e[t];
            return r
        }
        t(73210);
        var qt = "SC_WEB_COMMENT_FEED"
          , zt = "SC_WEB_COMMENT_RICH_TEXT_MESSAGE";
        function Qt(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function Kt(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? Qt(Object(t), !0).forEach((function(n) {
                    (0,
                    r.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qt(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var Xt = {
            class: "flex-col w-100vw h-100vh live-room"
        }
          , $t = {
            class: "room flex-1 flex relative of-h"
        }
          , er = {
            key: 0,
            class: "swiper-single w-100-p h-100-p flex-col"
        };
        const nr = (0,
        o.aZ)({
            __name: "index",
            setup: function(e) {
                var n, t = (0,
                P.yj)(), r = (0,
                U.oR)(K), i = (0,
                U.oR)(B.lO), d = (0,
                U.oR)(B.$J), p = (0,
                o.Fl)((function() {
                    return r.currentLiving.isLiving && !r.currentLiving.liveStream.privateLive || !!(r.currentLiving.isLiving && r.currentLiving.liveStream.privateLive && r.currentLiving.authToken)
                }
                ));
                (0,
                U.v5)(),
                n = (0,
                o.Fl)((function() {
                    return r.currentLiving
                }
                )),
                (0,
                o.YP)(n, (function(e, n) {
                    var t, r, a, i, u, o, l, c;
                    if (!N.sk && (null === (t = e.author) || void 0 === t ? void 0 : t.id) !== (null == n || null === (r = n.author) || void 0 === r ? void 0 : r.id)) {
                        var s = null !== (a = null !== (i = sessionStorage.getItem(J.Mq)) && void 0 !== i ? i : document.referrer) && void 0 !== a ? a : "";
                        (0,
                        pn.cr)("WEB_LIVE_ROOM_PAGE", {
                            author_id: null === (u = e.author) || void 0 === u ? void 0 : u.id,
                            live_stream_id: null === (o = e.liveStream) || void 0 === o ? void 0 : o.id,
                            game_id: null === (l = e.gameInfo) || void 0 === l ? void 0 : l.id,
                            game_name: null === (c = e.gameInfo) || void 0 === c ? void 0 : c.name,
                            is_living: e.isLiving ? 1 : 0,
                            browser_width: window.innerWidth,
                            browser_height: window.innerHeight,
                            source: Wt(),
                            domain_name: Jt(s),
                            url: s.includes(document.domain) ? "" : s
                        })
                    }
                }
                ), {
                    immediate: !0
                });
                var m = (0,
                c.iH)(!1)
                  , h = (0,
                o.FN)()
                  , g = (0,
                c.iH)()
                  , y = (0,
                c.iH)()
                  , w = (0,
                o.f3)(S.CD)
                  , _ = (0,
                o.f3)(S.n0)
                  , k = function(e) {
                    var n = (0,
                    c.iH)("")
                      , t = (0,
                    c.iH)("")
                      , r = (0,
                    c.XI)([])
                      , i = (0,
                    c.iH)([])
                      , l = (0,
                    c.iH)([])
                      , v = (0,
                    c.iH)("")
                      , f = (0,
                    c.iH)(!1)
                      , d = (0,
                    c.iH)("")
                      , p = (0,
                    c.iH)(!1)
                      , m = (0,
                    c.iH)(!1)
                      , h = null
                      , g = (0,
                    o.f3)(S.CD)
                      , y = (0,
                    o.Fl)((function() {
                        var e = parseInt(t.value, 10);
                        return !(!n.value.includes("w") && !n.value.includes("万")) || String(e) !== t.value && "+" !== $()(t.value) || e > pe.tu
                    }
                    ));
                    function w(a) {
                        var i, u, o = a.commentFeeds, l = a.giftFeeds, c = a.likeFeeds, v = a.displayLikeCount, f = a.displayWatchingCount;
                        o && (i = o.filter((function(n) {
                            return n && n.user && g.value.name !== n.user.userName && n.content && 2 !== n.showType && (t = n.content,
                            i = (a = (0,
                            s.y$C)(J.p, {
                                all: []
                            })).value.all,
                            u = a.value[null === (r = e.value.author) || void 0 === r ? void 0 : r.id] || [],
                            ![].concat((0,
                            M.Z)(i), (0,
                            M.Z)(u)).some((function(e) {
                                return t.includes(e)
                            }
                            )));
                            var t, r, a, i, u
                        }
                        )).map((function(e) {
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
                        M.Z)(r.value), (0,
                        M.Z)(i))).length > 200 && (u = u.slice(50, r.value.length - 50)),
                        r.value = u,
                        i.length && !p.value && (0,
                        B.$U)(i)),
                        l && function(e) {
                            C.apply(this, arguments)
                        }(l),
                        c && function(e) {
                            b.apply(this, arguments)
                        }(c),
                        n.value = v,
                        t.value = f
                    }
                    function _(e) {
                        var n = e.message.map((function(e) {
                            return e.segment.reduce((function(e, n) {
                                return {
                                    name: e.text_segment.text.trimEnd(),
                                    content: n.text_segment.text
                                }
                            }
                            ))
                        }
                        )).map((function(e) {
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
                        M.Z)(r.value), (0,
                        M.Z)(n));
                        t.length > 200 && (t = t.slice(50, r.value.length - 50)),
                        r.value = t,
                        n.length && !p.value && (0,
                        B.$U)(n)
                    }
                    function k(e) {
                        var n, t;
                        l.value = null !== (n = null === (t = e.watchingUser) || void 0 === t ? void 0 : t.splice(0, 3)) && void 0 !== n ? n : []
                    }
                    function x(e) {
                        f.value = Boolean(null == e ? void 0 : e.displayMask),
                        d.value = null != e && e.displayMask ? "".concat(null == e ? void 0 : e.warningMask.title, "，").concat(null == e ? void 0 : e.warningMask.detail) : ""
                    }
                    function C() {
                        return (C = (0,
                        a.Z)(u().mark((function e(n) {
                            var t;
                            return u().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        t = n.filter((function(e) {
                                            return (null == e ? void 0 : e.user) && g.value.name !== e.user.userName
                                        }
                                        )).map((function(e) {
                                            return {
                                                feed: e,
                                                options: {
                                                    from: "server",
                                                    type: "gift"
                                                }
                                            }
                                        }
                                        )),
                                        y.value ? (0,
                                        pe.Ye)(t) : 0 === (0,
                                        s.y$C)(J.EV, 0).value && (r.value = [].concat((0,
                                        M.Z)(r.value), (0,
                                        M.Z)(t))),
                                        1 !== (0,
                                        s.y$C)(J.di, 0).value && ve(i, t.map((function(e) {
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
                    function b() {
                        return (b = (0,
                        a.Z)(u().mark((function e(n) {
                            var t;
                            return u().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (1 !== (0,
                                        s.y$C)(J.hc, 0).value) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        t = n.map((function(e) {
                                            return {
                                                feed: e,
                                                options: {
                                                    from: "server",
                                                    type: "like"
                                                }
                                            }
                                        }
                                        )),
                                        y.value ? (0,
                                        pe.Ye)(t) : r.value = [].concat((0,
                                        M.Z)(r.value), (0,
                                        M.Z)(t));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))).apply(this, arguments)
                    }
                    function L(e) {
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
                                from: R.wo.SELF,
                                type: t
                            }
                        };
                        r.value = [].concat((0,
                        M.Z)(r.value), [a]),
                        t !== R.Sg.COMMENT || p.value || (0,
                        B.$U)([a])
                    }
                    function Z(e) {
                        var n = {
                            feed: e,
                            options: {
                                from: R.wo.SELF,
                                type: "gift"
                            }
                        };
                        r.value = [].concat((0,
                        M.Z)(r.value), [n]),
                        ve(i, [e])
                    }
                    function H() {
                        r.value = [],
                        t.value = "",
                        n.value = "",
                        l.value = [],
                        i.value = [],
                        m.value = !1
                    }
                    function E() {
                        h && h()
                    }
                    function I() {
                        return I = (0,
                        a.Z)(u().mark((function e(n, t, r) {
                            var i, o, l, c, s, v, f, d, g, y, S, C, b, L, Z;
                            return u().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return Z = function(e) {
                                            m.value = !1
                                        }
                                        ,
                                        L = function(e) {
                                            m.value || (m.value = !0)
                                        }
                                        ,
                                        b = function(e) {
                                            var n, t = me(e.configSwitchItem);
                                            try {
                                                for (t.s(); !(n = t.n()).done; ) {
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
                                        C = function() {
                                            return (C = (0,
                                            a.Z)(u().mark((function e(n) {
                                                var t;
                                                return u().wrap((function(e) {
                                                    for (; ; )
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
                                                            t.code !== ge) {
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
                                        S = function(e) {
                                            return C.apply(this, arguments)
                                        }
                                        ,
                                        y = function(e) {
                                            601 === (null == e ? void 0 : e.code) && r(),
                                            console.log("handleError", e)
                                        }
                                        ,
                                        g = function(e) {
                                            if (e)
                                                switch (e.type) {
                                                case R.Cs.SC_ENTER_ROOM_ACK:
                                                    f(e.payload.heartbeatIntervalMs);
                                                    break;
                                                case R.Cs.SC_FEED_PUSH:
                                                    w(e.payload);
                                                    break;
                                                case R.Cs.SC_LIVE_WATCHING_LIST:
                                                    k(e.payload);
                                                    break;
                                                case R.Cs.SC_LIVE_WARNING_MASK_STATUS_CHANGED_AUDIENCE:
                                                    x(e.payload);
                                                    break;
                                                case R.Cs.SC_LIVE_SPECIAL_ACCOUNT_CONFIG_STATE:
                                                    b(e.payload);
                                                    break;
                                                case R.Cs.SC_COMMENT_ZONE_RICH_TEXT:
                                                    _(e.payload);
                                                    break;
                                                case R.Cs.SC_ERROR:
                                                    y(e.payload);
                                                    break;
                                                case R.Cs.SC_INTERACTIVE_CHAT_SWITCH_BIZ:
                                                case R.Cs.SC_LIVE_MULTI_PK_STATISTIC:
                                                    L(e.payload);
                                                    break;
                                                case R.Cs.SC_INTERACTIVE_CHAT_CLOSED:
                                                    Z(e.payload)
                                                }
                                        }
                                        ,
                                        i = t.liveStreamId,
                                        o = t.token,
                                        l = (0,
                                        U.ru)(n, {
                                            onMessage: g,
                                            onClose: S
                                        }),
                                        c = l.open,
                                        s = l.send,
                                        v = l.close,
                                        f = l.heartbeat,
                                        d = l.websocketInstance,
                                        h = v,
                                        e.next = 12,
                                        c();
                                    case 12:
                                        s({
                                            type: "CS_ENTER_ROOM",
                                            payload: {
                                                liveStreamId: i,
                                                token: o,
                                                pageId: G().session.get("kslive.log.page_id")
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
                    U.v1)(de.zX, Z),
                    (0,
                    U.v1)(de.Qy, L),
                    {
                        close: E,
                        clear: H,
                        destory: function() {
                            E(),
                            H()
                        },
                        connect: function(e, n, t) {
                            return I.apply(this, arguments)
                        },
                        comment: r,
                        giftStack: i,
                        showRiskMask: f,
                        watchingList: l,
                        sendNoticeList: function(e) {
                            var n = e.map((function(e) {
                                return {
                                    feed: {
                                        content: e.content,
                                        user: {
                                            userName: e.userName
                                        }
                                    },
                                    options: {
                                        from: R.wo.SYSTEM,
                                        type: R.Sg.COMMENT
                                    }
                                }
                            }
                            ));
                            r.value = [].concat((0,
                            M.Z)(r.value), (0,
                            M.Z)(n))
                        },
                        sendSelfComment: L,
                        sendSelfGift: Z,
                        riskMaskContent: d,
                        displayWatchingCountRef: t,
                        rollingMessage: v,
                        displayLikeCountRef: n,
                        recallComment: function(e) {
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
                                    from: R.wo.SERVER,
                                    type: t,
                                    source: R.cJ.RECALL
                                }
                            };
                            r.value = [].concat((0,
                            M.Z)(r.value), [a]),
                            t !== R.Sg.COMMENT || p.value || (0,
                            B.$U)([a])
                        },
                        isPking: m
                    }
                }((0,
                o.Fl)((function() {
                    return r.currentLiving
                }
                )))
                  , x = k.clear
                  , C = k.destory
                  , b = k.comment
                  , L = k.connect
                  , Z = k.giftStack
                  , H = k.watchingList
                  , E = k.showRiskMask
                  , V = k.recallComment
                  , F = k.sendNoticeList
                  , W = k.sendSelfComment
                  , Y = k.displayWatchingCountRef
                  , j = k.displayLikeCountRef
                  , q = k.isPking
                  , z = function(e, n, t, r, i, l, f, d, p) {
                    var m, h = (0,
                    s.y$C)(J.At, []), g = (0,
                    v.eM)((function() {
                        r(f.value)
                    }
                    ), (null === (m = e.value.config) || void 0 === m ? void 0 : m.noticeDisplayDelay) || 3e3), y = g.start, w = g.stop, _ = (0,
                    c.iH)({
                        1: 0,
                        2: 0
                    }), k = !1;
                    function x() {
                        return C.apply(this, arguments)
                    }
                    function C() {
                        return (C = (0,
                        a.Z)(u().mark((function t() {
                            return u().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return d && d(),
                                        e.value.author.id && window.history.replaceState({}, null, "/u/".concat(e.value.author.id)),
                                        t.next = 4,
                                        (0,
                                        o.Y3)();
                                    case 4:
                                        if (h.value.length >= 100 && h.value.shift(),
                                        h.value.includes(e.value.author.id) && Yt()(h.value, (function(n) {
                                            return n === e.value.author.id
                                        }
                                        )),
                                        e.value.author.id || h.value.push(e.value.author.id),
                                        e.value.isLiving) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 9:
                                        return t.next = 11,
                                        (0,
                                        o.Y3)();
                                    case 11:
                                        n.value && (E(),
                                        e.value.config.enableWebHistoryFeed && Z(!0),
                                        b());
                                    case 12:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))).apply(this, arguments)
                    }
                    function b() {
                        return L.apply(this, arguments)
                    }
                    function L() {
                        return (L = (0,
                        a.Z)(u().mark((function n() {
                            var a, o, c, s, v, f, d;
                            return u().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (!k) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        if (k = !0,
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
                                        if ((d = n.sent) === R.YG.SUCCESS) {
                                            n.next = 12;
                                            break
                                        }
                                        return k = !1,
                                        (0,
                                        yt.qs)({
                                            name: "【P2】长链接地址获取失败",
                                            src: "/pages/LiveRoom/hooks/rommChange.ts",
                                            event_type: "error",
                                            extra_info: JSON.stringify({
                                                result: d
                                            })
                                        }),
                                        n.abrupt("return", r((0,
                                        N.l7)(d)));
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
                                        y(),
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
                                        k = !1;
                                    case 28:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, null, [[15, 21]])
                        }
                        )))).apply(this, arguments)
                    }
                    function Z() {
                        return H.apply(this, arguments)
                    }
                    function H() {
                        return H = (0,
                        a.Z)(u().mark((function n() {
                            var t, r, a, i, o, l, c, s = arguments;
                            return u().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return t = s.length > 0 && void 0 !== s[0] && s[0],
                                        n.next = 3,
                                        (0,
                                        O.O1)(e.value.liveStream.id, _.value);
                                    case 3:
                                        r = n.sent,
                                        _.value = r.feedTypeCursorMap,
                                        (a = r.backTraceFeedMap.sort((function(e, n) {
                                            var t = e.type === qt ? e.payload.time : e.payload.server_timestamp;
                                            return (n.type === qt ? n.payload.time : n.payload.server_timestamp) - t
                                        }
                                        ))).length > 0 && (0,
                                        pn.yD)("LIVE_BEFORE_WELCOME_AREA", {
                                            is_auto: t
                                        }),
                                        i = Gt(a);
                                        try {
                                            for (i.s(); !(o = i.n()).done; )
                                                (l = o.value).type === qt && p({
                                                    content: l.payload.content,
                                                    name: l.payload.user.userName,
                                                    type: R.Sg.COMMENT
                                                }),
                                                l.type === zt && (c = l.payload.segment[0].text_segment.text,
                                                p({
                                                    content: l.payload.segment[1].text_segment.text,
                                                    name: c.trim().slice(0, -1),
                                                    type: R.Sg.COMMENT
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
                        H.apply(this, arguments)
                    }
                    function E() {
                        _.value = {
                            1: 0,
                            2: 0
                        },
                        w()
                    }
                    return (0,
                    o.JJ)(S.J$, (0,
                    a.Z)(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return Z(),
                                    e.abrupt("return", _.value);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))),
                    (0,
                    o.JJ)(S.JP, _),
                    (0,
                    o.YP)((function() {
                        return e.value.authToken
                    }
                    ), function() {
                        var e = (0,
                        a.Z)(u().mark((function e(n) {
                            return u().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3,
                                        (0,
                                        o.Y3)();
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
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }()),
                    {
                        changeRoomEffect: x
                    }
                }((0,
                o.Fl)((function() {
                    return r.currentLiving
                }
                )), p, r.getWebsocketInfo, F, L, (function() {
                    return se.apply(this, arguments)
                }
                ), (0,
                o.Fl)((function() {
                    return r.noticeList
                }
                )), C, V)
                  , Q = z.changeRoomEffect;
                function X(e) {
                    r.activeIndex = e.activeIndex,
                    j.value = ""
                }
                var ee = (0,
                o.Fl)((function() {
                    return r.activeIndex > 0
                }
                ))
                  , ne = (0,
                o.Fl)((function() {
                    return r.activeIndex < r.playList.length - 1
                }
                ))
                  , te = Le((0,
                o.Fl)((function() {
                    return r.currentLiving
                }
                ))).addPoints
                  , re = (0,
                v.eM)((function() {
                    Q()
                }
                ), 500)
                  , ae = re.start
                  , ie = re.stop;
                function ue() {
                    return le.apply(this, arguments)
                }
                function le() {
                    return (le = (0,
                    a.Z)(u().mark((function e() {
                        var n, t;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    o.Y3)();
                                case 2:
                                    return null === (n = h.refs.player_0) || void 0 === n || n.loadLive(),
                                    ae(),
                                    e.next = 6,
                                    r.loadMore();
                                case 6:
                                    return e.next = 8,
                                    (0,
                                    o.Y3)();
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
                    a.Z)(u().mark((function e() {
                        var n;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    null === (n = h.refs["player_".concat(null == r ? void 0 : r.activeIndex)]) || void 0 === n || n.finish();
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
                o.YP)((function() {
                    return r.activeIndex
                }
                ), function() {
                    var e = (0,
                    a.Z)(u().mark((function e(n, t) {
                        var a, i, l, c;
                        return u().wrap((function(e) {
                            for (; ; )
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
                                    if (null === (l = h.refs["player_".concat(n)]) || void 0 === l || l.loadLive(),
                                    null === (c = h.refs["player_".concat(t)]) || void 0 === c || c.pause(),
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
                                    o.Y3)();
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
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }()),
                (0,
                o.YP)((function() {
                    return r.currentLiving.authToken
                }
                ), function() {
                    var e = (0,
                    a.Z)(u().mark((function e(n) {
                        var t;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!n) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3,
                                    (0,
                                    o.Y3)();
                                case 3:
                                    null === (t = h.refs["player_".concat(r.activeIndex)]) || void 0 === t || t.loadLive();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()),
                (0,
                o.YP)((function() {
                    return t.params.principalId
                }
                ), (0,
                a.Z)(u().mark((function e() {
                    var n, a;
                    return u().wrap((function(e) {
                        for (; ; )
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
                                o.Y3)();
                            case 6:
                                return r.activeIndex = 0,
                                null === (n = g.value) || void 0 === n || n.update(),
                                e.next = 10,
                                r.getLiveDetail(t.params.principalId);
                            case 10:
                                return e.next = 12,
                                (0,
                                o.Y3)();
                            case 12:
                                null === (a = h.refs["player_".concat(r.activeIndex)]) || void 0 === a || a.loadLive();
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))));
                var fe = (0,
                c.iH)(!1);
                function he() {
                    fe.value = nn().isFullscreen,
                    fe.value && (m.value = !1)
                }
                var we = (0,
                v.vA)((function(e) {
                    ce(e.deltaY > 0)
                }
                ), 1800);
                (0,
                U.FT)((function() {
                    (0,
                    s.ORN)(g.value.root, "wheel", we),
                    nn().on("change", he),
                    function(e) {
                        (0,
                        o.YP)((function() {
                            return e.value
                        }
                        ), (function(e) {
                            e || oe()((0,
                            a.Z)(u().mark((function e() {
                                var n, t, r, a;
                                return u().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (t = null !== (n = G().get(J.jB)) && void 0 !== n ? n : {
                                                time: 0,
                                                count: 0
                                            },
                                            r = t.time,
                                            a = t.count,
                                            a = Number(a),
                                            !((0,
                                            Et.Z)(r) && a >= 2)) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return e.next = 6,
                                            (0,
                                            D.C)();
                                        case 6:
                                            G().set(J.jB, {
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
                    }(_)
                }
                )),
                (0,
                U.v1)(de.h2, (function(e) {
                    e ? g.value.enable() : g.value.disable()
                }
                )),
                (0,
                Pt.do)(["/live_api/liveroom/livedetail"], function() {
                    var e = (0,
                    a.Z)(u().mark((function e(n, t) {
                        var a, i;
                        return u().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (n.result !== Pt.ux.SUCCESS) {
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
                                    Pt.ux.USER_CANCEL;
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }());
                var _e = (0,
                s.y$C)(J.TD, Kt({}, Bn.u_));
                function Se(e) {
                    var n, t;
                    te(e === R.$u.Following ? ye.POS : ye.PASS, 1, null === (n = r.currentLiving.gameInfo) || void 0 === n ? void 0 : n.id, null === (t = r.currentLiving.gameInfo) || void 0 === t ? void 0 : t.name)
                }
                return (0,
                o.YP)(_, (function(e) {
                    e || (_e.value = Kt({}, Bn.u_))
                }
                )),
                (0,
                o.JJ)(S.WK, _e),
                (0,
                o.JJ)(S.HF, (function() {
                    _e.value = Kt({}, Bn.u_)
                }
                )),
                (0,
                o.Ah)((function() {
                    nn().off("change", he),
                    ie(),
                    C && C()
                }
                )),
                (0,
                o.JJ)(S.QC, (0,
                o.Fl)((function() {
                    return r.currentLiving.isLiving
                }
                ))),
                (0,
                o.JJ)(S.Tq, p),
                (0,
                o.JJ)(S.UA, (0,
                o.Fl)((function() {
                    return r.currentLiving.author
                }
                ))),
                (0,
                o.JJ)(S.m7, (0,
                o.Fl)((function() {
                    return r.currentLiving.liveStream
                }
                ))),
                (0,
                o.JJ)(S.vb, (0,
                o.Fl)((function() {
                    var e;
                    return null !== (e = r.currentLiving.config) && void 0 !== e ? e : {}
                }
                ))),
                (0,
                o.JJ)(S.uB, r.finishLiving),
                (0,
                o.JJ)(S.Q4, r.refetchLiveData),
                (0,
                o.JJ)(S.Hz, r.checkPassword),
                (0,
                o.JJ)(S.WH, (0,
                o.Fl)((function() {
                    return i.allGifts
                }
                ))),
                (0,
                o.JJ)(S.Dt, (0,
                o.Fl)((function() {
                    return i.iconUrls
                }
                ))),
                (0,
                o.JJ)(S.ob, (0,
                o.Fl)((function() {
                    return d.ksCoin
                }
                ))),
                (0,
                o.JJ)(S.TJ, (0,
                o.Fl)((function() {
                    return d.payKey
                }
                ))),
                (0,
                o.JJ)(S.Ox, d.sendGift),
                (0,
                o.JJ)(S.Oz, (0,
                o.Fl)((function() {
                    return d.styleType
                }
                ))),
                (0,
                o.JJ)(S.zv, b),
                (0,
                o.JJ)(S.Yh, x),
                (0,
                o.JJ)(S.Wq, m),
                (0,
                o.JJ)(S.J3, (0,
                o.Fl)((function() {
                    return Z.value
                }
                ))),
                (0,
                o.JJ)(S.ic, (0,
                o.Fl)((function() {
                    return i.giftList
                }
                ))),
                (0,
                o.JJ)(S.aI, (0,
                o.Fl)((function() {
                    return i.giftPanelList
                }
                ))),
                (0,
                o.JJ)(S.WH, (0,
                o.Fl)((function() {
                    return i.allGifts
                }
                ))),
                (0,
                o.JJ)(S.RQ, (0,
                o.Fl)((function() {
                    return i.token
                }
                ))),
                (0,
                o.JJ)(S.Q$, (0,
                o.Fl)((function() {
                    return i.panelToken
                }
                ))),
                (0,
                o.JJ)(S.PC, (function() {
                    return i.getGift(r.currentLiving.liveStream.id)
                }
                )),
                (0,
                o.JJ)(S.Zl, (function(e) {
                    return i.getPanelGift(r.currentLiving.liveStream.id, e)
                }
                )),
                (0,
                o.JJ)(S.kV, (function(e) {
                    e ? nn().request(g.value.root.value) : nn().element && nn().exit()
                }
                )),
                (0,
                o.JJ)(S.EH, fe),
                (0,
                o.JJ)(S.ls, function() {
                    var e = (0,
                    a.Z)(u().mark((function e(n) {
                        var t, a, i, o;
                        return u().wrap((function(e) {
                            for (; ; )
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
                                    O.Kt)({
                                        liveStreamId: r.currentLiving.liveStream.id,
                                        content: n,
                                        color: null
                                    });
                                case 9:
                                    return a = e.sent.data,
                                    i = a.result,
                                    o = a.error_msg,
                                    1 === i && W({
                                        content: n,
                                        name: w.value.name,
                                        type: R.Sg.COMMENT
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
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()),
                (0,
                s.JLS)(["ArrowUp"], (function() {
                    ce(!1)
                }
                )),
                (0,
                s.JLS)(["ArrowDown"], (function() {
                    ce(!0)
                }
                )),
                function(e, n) {
                    return (0,
                    o.wg)(),
                    (0,
                    o.iD)("div", Xt, [(0,
                    o.wy)((0,
                    o.Wm)(T.Z, null, null, 512), [[l.F8, !m.value && !fe.value]]), (0,
                    o._)("div", $t, [(0,
                    o._)("div", null, [(0,
                    o.Wm)(f.Z, {
                        ref_key: "rotationRef",
                        ref: g,
                        list: (0,
                        c.SU)(r).playList,
                        "theater-mode": m.value,
                        "is-full-screen": fe.value,
                        onChangeIndex: X,
                        onAfterInit: ue
                    }, {
                        default: (0,
                        o.w5)((function(e) {
                            var n;
                            return [e.index === (0,
                            c.SU)(r).activeIndex || e.index === (0,
                            c.SU)(r).activeIndex - 1 || e.index === (0,
                            c.SU)(r).activeIndex + 1 ? ((0,
                            o.wg)(),
                            (0,
                            o.iD)("div", er, [(0,
                            o.Wm)(Vt, {
                                ref: "player_".concat(e.index),
                                index: e.index,
                                author: e.item.author,
                                "auth-token": null !== (n = e.item.authToken) && void 0 !== n ? n : "",
                                "is-living": e.item.isLiving,
                                "live-stream": e.item.liveStream,
                                "error-type": e.item.errorType,
                                "show-risk-mask": (0,
                                c.SU)(E),
                                status: e.item.status,
                                "display-like-count": (0,
                                c.SU)(j),
                                active: e.index === (0,
                                c.SU)(r).activeIndex,
                                "is-full": fe.value,
                                "is-pk": (0,
                                c.SU)(q),
                                onSwitchLiving: ce,
                                onChangeFollow: Se
                            }, null, 8, ["index", "author", "auth-token", "is-living", "live-stream", "error-type", "show-risk-mask", "status", "display-like-count", "active", "is-full", "is-pk"])])) : (0,
                            o.kq)("", !0)]
                        }
                        )),
                        control: (0,
                        o.w5)((function() {
                            return [!ne.value && !ee.value || (0,
                            c.SU)(mt.Xm) ? (0,
                            o.kq)("", !0) : ((0,
                            o.wg)(),
                            (0,
                            o.j4)(A.Z, {
                                key: 0,
                                "can-prev": ee.value,
                                "can-next": ne.value,
                                onSwitchProduct: ce
                            }, null, 8, ["can-prev", "can-next"]))]
                        }
                        )),
                        _: 1
                    }, 8, ["list", "theater-mode", "is-full-screen"])]), (0,
                    o.Wm)(I, {
                        ref_key: "sidebarRef",
                        ref: y,
                        "is-full-screen": fe.value,
                        "live-stream": (0,
                        c.SU)(r).currentLiving.liveStream,
                        "watching-count": (0,
                        c.SU)(Y),
                        "watching-list": (0,
                        c.SU)(H)
                    }, null, 8, ["is-full-screen", "live-stream", "watching-count", "watching-list"])])])
                }
            }
        })
          , tr = nr
    }
    ,
    26806: e => {
        "use strict";
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgB7ZlBUsIwFIb/KlsXOm70AF6AtTfAA6AH8AAcQFyre+kFmHEpF+gF2LiTA8DCJe7xf02CnTYVEpoIM/1m3tRCO/MlviQvAWhpOWwS24er1eqGlz7jCv/DjDFOkmRS/qIirGUfsB88lqWPLA/1sT9UXDqWh4ppsGBMEZcu4wJVl5zOhpen/JcMERGm5JCXXt33RzgwWuHQbMrhCsyxS6hBsWQsmONLRMRZGGrkPpsbNiAXh24AI2Uj5giET0rMSvcnUI2Q6WgeUlbwEbalwBnjjbIpAuMsrHO2KH3OOGZc6/wOiu8s8a2vp1D1yBfUQByFlvYV/tTXV8ZH4fPg0rv0sMwGT7zeQ80OhqDSvsKpGWB6Vogm7SVcnrpiSvssHFZEmnIiPcJveWikbx1WxIxRO5c3JizUSE9clm8+m0FJW2m8+CmlR9r0YtJoDxt0T7ukwdYEERbqZNkQqTm62I58i1Yc5MGEbVB2APdN7kLeo3RedEUr4HXP+uzIZfAOzE3MHce2afDnu+2eLjStcGha4dBsWji6+qzLh0wXMo1iE5YVxZwayqTdgx+ynGZoGFtKjLHHVHpYTryZBvJn0z8Z7FK5rXcyCSLBTpAToneokyJX1nV1tFlCl5t3cDvRl3deYpwotRh+AGiilzSzJ9CwAAAAAElFTkSuQmCC"
    }
}]);
