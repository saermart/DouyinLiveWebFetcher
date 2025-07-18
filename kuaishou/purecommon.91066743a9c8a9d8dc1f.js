/*! For license information please see purecommon.91066743a9c8a9d8dc1f.js.LICENSE.txt */
(self.webpackChunkpc_live_next = self.webpackChunkpc_live_next || []).push([[926], {
    1508: e => {
        e.exports = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 .5)" fill="none" fill-rule="evenodd"><path d="M3 8h-.5A2.5 2.5 0 010 5.5V4a1 1 0 011-1h2" stroke="#FDD555"></path><path d="M11 8h.5A2.5 2.5 0 0014 5.5V4a1 1 0 00-1-1h-2" stroke="#F4B20C"></path><path d="M6.25 11h1.5c.16 1.68.493 2.68 1 3h-3.5c.483-.32.816-1.32 1-3z" fill="#FDD555"></path><path d="M3 0h8a1 1 0 011 1v6A5 5 0 112 7V1a1 1 0 011-1z" fill="#FDD555"></path><path d="M12 0a1943.81 1943.81 0 01-9.94 7.888 4.93 4.93 0 004.868 4.159H7a5 5 0 005-5V0z" fill="#F4B20C" fill-rule="nonzero"></path><rect fill="#F4B20C" x="1" width="12" height="1" rx=".5"></rect><rect fill="#FDD555" x="2" y="13.5" width="10" height="1.5" rx=".75"></rect></g></svg>'
    }
    ,
    1602: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => ae
        });
        var a = n(10467)
          , l = n(54756)
          , r = n.n(l)
          , o = n(20641)
          , i = n(90033)
          , u = n(53751)
          , c = n(50953)
          , s = n(64467);
        n(62062),
        n(23288),
        n(62010),
        n(79432),
        n(26099),
        n(76031);
        var d = {
            class: "mt-32"
        }
          , f = {
            class: "flex justify-between items-center"
        }
          , v = {
            class: "fw-5 fs-14 c-fff"
        }
          , p = {
            class: "fs-12 c-fff-7"
        }
          , m = {
            class: "flex justify-between mt-8"
        }
          , h = ["onClick"];
        const g = (0,
        o.pM)({
            __name: "item",
            props: {
                item: {}
            },
            emits: ["change"],
            setup: function(e, t) {
                var n = t.emit
                  , a = e
                  , l = n
                  , r = (0,
                c.KR)(20)
                  , u = (0,
                o.EW)((function() {
                    return 100 === a.item.totalStayLength ? "默认强度" : a.item.totalStayLength > 100 ? "加强推荐" : "减少推荐"
                }
                ));
                return function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("div", d, [(0,
                    o.Lk)("div", f, [(0,
                    o.Lk)("div", v, (0,
                    i.v_)(a.item.name), 1), (0,
                    o.Lk)("div", p, (0,
                    i.v_)(u.value), 1)]), (0,
                    o.Lk)("div", m, [((0,
                    o.uX)(!0),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(r.value, (function(e) {
                        return (0,
                        o.uX)(),
                        (0,
                        o.CE)("div", {
                            class: (0,
                            i.C4)(["w-12 h-8 rounded-2 tran-bg cursor-pointer", [e > a.item.totalStayLength / 10 ? "bg-fff-3" : "bg-fff"]]),
                            key: e,
                            onClick: function(t) {
                                return n = e,
                                void l("change", a.item.id, 10 * n);
                                var n
                            }
                        }, null, 10, h)
                    }
                    )), 128))])])
                }
            }
        });
        var b = n(90179)
          , k = n.n(b)
          , y = n(81558);
        const M = (0,
        o.pM)({
            __name: "Tag",
            props: {
                item: {},
                active: {
                    type: Boolean
                },
                choosed: {
                    type: Boolean
                }
            },
            emits: ["change"],
            setup: function(e, t) {
                var n = t.emit
                  , a = e
                  , l = n;
                return function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("span", {
                        class: (0,
                        i.C4)(["rounded-8 bg-fff-08 fs-12 lh-28 px-10 inline-block mr-14 mt-12 cursor-pointer c-f73b68-h fw-5", [a.choosed ? "c-606266" : a.active ? "c-f73b68" : "c-e6e6e6"]]),
                        onClick: t[0] || (t[0] = function(e) {
                            return t = a.item,
                            void l("change", t);
                            var t
                        }
                        )
                    }, (0,
                    i.v_)(a.item.name), 3)
                }
            }
        });
        var A = n(67357)
          , L = {
            class: "flex mt-12 items-center"
        }
          , E = {
            key: 0
        }
          , w = {
            class: "fs-14 c-fff fw-5"
        }
          , C = {
            key: 1,
            class: "search"
        }
          , R = {
            key: 2,
            class: "flex-col h-400 flex-center"
        };
        const I = (0,
        o.pM)({
            __name: "Search",
            props: {
                choosed: {}
            },
            emits: ["addItem"],
            setup: function(e, t) {
                var n = t.emit
                  , l = e
                  , s = (0,
                c.KR)([])
                  , d = (0,
                c.KR)("")
                  , f = n;
                (0,
                o.sV)((0,
                a.A)(r().mark((function e() {
                    var t;
                    return r().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                y.H5)();
                            case 2:
                                t = e.sent.data,
                                s.value = t;
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))));
                var v = (0,
                c.KR)({});
                function p(e) {
                    Object.keys(l.choosed).length + Object.keys(v.value).length >= 20 ? (0,
                    A.A)("最多选择20个", {
                        teleport: "#liveroom__sidebar"
                    }) : l.choosed[e.id] || (v.value[e.id] ? v.value = k()(v.value, e.id) : v.value[e.id] = {
                        id: e.id,
                        name: e.name
                    },
                    f("addItem", v.value))
                }
                var m = !1
                  , h = (0,
                c.KR)(!1);
                function g() {
                    m || x()
                }
                function b() {
                    m = !0
                }
                function I() {
                    m = !1,
                    x()
                }
                var S = (0,
                c.KR)([]);
                function x() {
                    return T.apply(this, arguments)
                }
                function T() {
                    return T = (0,
                    a.A)(r().mark((function e() {
                        var t;
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (d.value) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", _());
                                case 2:
                                    return h.value = !0,
                                    e.next = 5,
                                    (0,
                                    y.$P)({
                                        keyword: d.value
                                    });
                                case 5:
                                    t = e.sent.data.list,
                                    S.value = null != t ? t : [];
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    T.apply(this, arguments)
                }
                function _() {
                    h.value = !1
                }
                return function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)(o.FK, null, [t[2] || (t[2] = (0,
                    o.Lk)("div", {
                        class: "fw-5 fs-14 c-fff lh-20 mt-32 c-ff"
                    }, " 查找更多内容 ", -1)), (0,
                    o.Lk)("div", L, [(0,
                    o.bo)((0,
                    o.Lk)("input", {
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return d.value = e
                        }
                        ),
                        class: "flex-1 c-fff fm-icon fw-5 fs-12 bg-fff-08 h-40 lh-40 flex rounded-29 px-37",
                        placeholder: "请输入需要查找的内容分类",
                        onInput: g,
                        onCompositionstart: b,
                        onCompositionend: I
                    }, null, 544), [[u.Jo, d.value]]), h.value ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", {
                        key: 0,
                        class: "c-fff-7 fw-5 fs-14 ml-8",
                        onClick: _
                    }, " 取消 ")) : (0,
                    o.Q3)("", !0)]), h.value ? (0,
                    o.Q3)("", !0) : ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", E, [((0,
                    o.uX)(!0),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(s.value, (function(e) {
                        return (0,
                        o.uX)(),
                        (0,
                        o.CE)("div", {
                            key: e.id,
                            class: "mt-32"
                        }, [(0,
                        o.Lk)("div", w, (0,
                        i.v_)(e.name), 1), (0,
                        o.Lk)("div", null, [((0,
                        o.uX)(!0),
                        (0,
                        o.CE)(o.FK, null, (0,
                        o.pI)(e.list, (function(e) {
                            return (0,
                            o.uX)(),
                            (0,
                            o.Wv)(M, {
                                key: e.id,
                                item: e,
                                active: !!v.value[e.id],
                                choosed: !!l.choosed[e.id],
                                onChange: p
                            }, null, 8, ["item", "active", "choosed"])
                        }
                        )), 128))])])
                    }
                    )), 128))])), h.value && S.value.length ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", C, [((0,
                    o.uX)(!0),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(S.value, (function(e) {
                        return (0,
                        o.uX)(),
                        (0,
                        o.Wv)(M, {
                            key: e.id,
                            item: e,
                            active: !!v.value[e.id],
                            choosed: !!l.choosed[e.id],
                            onChange: p
                        }, null, 8, ["item", "active", "choosed"])
                    }
                    )), 128))])) : h.value ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", R, t[1] || (t[1] = [(0,
                    o.Lk)("img", {
                        class: "w-96",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAARVBMVEUAAADf39/n5+fk5OTq6urj4+Po6Oji4uLn5+fk5OTn5+fn5+fl5eXm5ubk5OTn5+fl5eXm5ubm5ubm5ubm5ubm5ubm5ubkCy7AAAAAFnRSTlMAECAwMEBPUF9gYH+Aj5CfoK+wv9/vGLsklQAAAWRJREFUaN7t2dFugzAMBdDgjFGGG9Lh3P//1L0MqRokkNZMIPk+ItoDAeLIcc5isSwzJLycdN/+/zveCm8CCfT63RPS5jnAO+O749cGGGCAAQYY8PeUvXXyvIA9ZAMMMMCAo+rBtQB7yAYYcFAMuCrge2bu/EEAhbnNJyPpA00EIGNgfgiATaIWaAUptPNIRUC8KnADpudrpgm4KQJ+2chkoFUDSFYapQxptICIaeXohFEJIKx2canY3K0BYuZSA4IOIPhYf3VLHeYKwEMq5Uqgw3d27HoNgLPN/FBo86sArAWEY4Gv7Af1wOcl3iKXMtNaXq4Ecl9sLE1GdXNRov1T1BlnU9cIhsXBAUJqFa3FQhiATrEm9ys1WfMOnPMCjPNCog0J0klRqN5qpAhAHsxhFABj46goMKrbsRRl3o0N9LsWKAghVfd7nfMdM/f+abUhb+y57lvP/IPQHCywOzaNs5wkP4d6QOKHGXDdAAAAAElFTkSuQmCC",
                        alt: ""
                    }, null, -1), (0,
                    o.Lk)("span", {
                        class: "c-b5b5b5 fs-16 fw-5 mt-20"
                    }, "未找到搜索内容，试试其他词语吧", -1)]))) : (0,
                    o.Q3)("", !0)], 64)
                }
            }
        });
        var S = n(45712)
          , x = n.n(S)
          , T = n(37148)
          , _ = n.n(T)
          , N = (n(33771),
        n(2008),
        n(16034),
        n(25506))
          , O = {
            class: "fw-5 c-e6e6e6 fs-16 ml-17"
        }
          , V = {
            key: 0,
            class: "mask bg-000-5 flex-center"
        };
        const j = (0,
        o.pM)({
            __name: "Edit",
            props: {
                choosed: {}
            },
            emits: ["change", "confirm"],
            setup: function(e, t) {
                var n = t.expose
                  , a = t.emit
                  , l = (0,
                c.KR)(!1)
                  , r = e
                  , u = a
                  , s = (0,
                c.KR)(Array(Object.values(r.choosed).length).fill(!1));
                function d() {
                    u("change", s.value.filter((function(e) {
                        return e
                    }
                    )).length)
                }
                function f() {
                    l.value = !1
                }
                function v() {
                    var e = s.value.map((function(e, t) {
                        if (e)
                            return Object.values(r.choosed)[t]
                    }
                    )).filter((function(e) {
                        return e
                    }
                    ));
                    u("confirm", e.map((function(e) {
                        return e.id
                    }
                    ))),
                    l.value = !1
                }
                return n({
                    openMask: function() {
                        l.value = !0
                    }
                }),
                function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)(o.FK, null, [((0,
                    o.uX)(!0),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(Object.values(r.choosed), (function(e, t) {
                        return (0,
                        o.uX)(),
                        (0,
                        o.CE)("div", {
                            class: "pt-24 pb-20 border-b border-dash border-c-2a2c2c flex",
                            key: e.id
                        }, [(0,
                        o.bF)(N.A, {
                            modelValue: s.value[t],
                            "onUpdate:modelValue": function(e) {
                                return s.value[t] = e
                            },
                            onChange: d
                        }, {
                            default: (0,
                            o.k6)((function() {
                                return [(0,
                                o.Lk)("span", O, (0,
                                i.v_)(e.name), 1)]
                            }
                            )),
                            _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])])
                    }
                    )), 128)), l.value ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", V, [(0,
                    o.Lk)("div", {
                        class: "w-280 h-144 bg-222428 rounded-12 flex-col"
                    }, [t[0] || (t[0] = (0,
                    o.Lk)("span", {
                        class: "flex-1 c-fff-7 fs-16 flex-center"
                    }, "确认移除选中的内容偏好设置吗？", -1)), (0,
                    o.Lk)("div", {
                        class: "h-48 flex border-t border-c-333337"
                    }, [(0,
                    o.Lk)("span", {
                        class: "flex-1 c-fff-5 flex-center fs-16 border-r border-c-333337 cursor-pointer",
                        onClick: f
                    }, " 取消 "), (0,
                    o.Lk)("span", {
                        class: "flex-1 flex-center fs-16 c-618eff cursor-pointer",
                        onClick: v
                    }, " 确认 ")])])])) : (0,
                    o.Q3)("", !0)], 64)
                }
            }
        });
        var W, B = n(16265), F = n(68519), D = n(97786), U = n(48870), G = n(72708), z = {
            key: 0,
            class: "mask px-24 py-16 flex-1 flex-col of-y-auto bg-17191d"
        }, P = {
            class: "flex justify-between items-center"
        }, Q = ["innerHTML"], X = {
            class: "flex-1 hide-bar of-y-auto py-16 mt-12"
        }, Z = {
            class: "c-fff fw-5 fs-16 lh-15"
        }, K = {
            class: "c-fff-7 fw-4 fs-12 mt-4"
        }, H = {
            key: 0,
            class: "new-tooltip rounded-4"
        };
        !function(e) {
            e[e.MAIN = 0] = "MAIN",
            e[e.ADD = 1] = "ADD",
            e[e.REMOVE = 2] = "REMOVE"
        }(W || (W = {}));
        const J = (0,
        o.pM)({
            __name: "index",
            setup: function(e, t) {
                var n = t.expose
                  , l = (0,
                c.KR)(!1)
                  , d = (0,
                B.Pj)(G.im)
                  , f = (0,
                D.rXt)(U.gO, {})
                  , v = (0,
                c.KR)(!1)
                  , p = (0,
                c.KR)({});
                function m(e) {
                    p.value = e
                }
                var h = (0,
                c.KR)(W.MAIN)
                  , b = (0,
                s.A)((0,
                s.A)((0,
                s.A)({}, W.MAIN, "我的内容偏好"), W.ADD, "选择想要调节的内容"), W.REMOVE, "管理系统偏好")
                  , k = (0,
                s.A)((0,
                s.A)((0,
                s.A)({}, W.MAIN, "为你推荐可能感兴趣的内容"), W.ADD, "添加至内容偏好设置"), W.REMOVE, "删除不感兴趣的内容");
                function y(e, t) {
                    f.value[e].totalStayLength = t
                }
                function M() {
                    h.value = W.REMOVE
                }
                var A = (0,
                c.KR)()
                  , L = (0,
                c.KR)(0);
                function E(e) {
                    L.value = e
                }
                var w, C = (0,
                o.EW)((function() {
                    return h.value === W.MAIN || h.value === W.REMOVE && 0 === L.value ? ["bg-fff-08", "c-b4b4b5"] : ["bg-f73b68", "c-fff"]
                }
                ));
                function R() {
                    if (h.value !== W.MAIN) {
                        if (h.value === W.ADD) {
                            for (var e in p.value)
                                f.value[e] = {
                                    id: p.value[e].id,
                                    name: p.value[e].name,
                                    totalStayLength: 100,
                                    updateTime: (0,
                                    F.A)(new Date)
                                };
                            return p.value = {},
                            void (h.value = W.MAIN)
                        }
                        h.value === W.REMOVE && A.value.openMask(),
                        _().set("kslive.player.controls.like.positive", f.value)
                    } else
                        h.value = W.ADD
                }
                function S() {
                    h.value === W.MAIN ? l.value = !1 : h.value = W.MAIN
                }
                function T(e) {
                    e.map((function(e) {
                        delete f.value[e]
                    }
                    )),
                    h.value = W.MAIN
                }
                return n({
                    show: (w = (0,
                    a.A)(r().mark((function e() {
                        var t, n, a;
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    l.value = !0,
                                    f.value = (0,
                                    D.rXt)(U.gO, {}).value,
                                    0 === Object.keys(f.value).length && (f.value = null !== (a = d.config["pcLive.webConfig.defaultPreference"]) && void 0 !== a ? a : {}),
                                    v.value = null === (t = _().get("kslive.player.controls.preferece.tip")) || void 0 === t || t,
                                    (null === (n = _().get("kslive.player.controls.preferece.tip")) || void 0 === n || n) && (setTimeout((function() {
                                        v.value = !0
                                    }
                                    ), 1e3),
                                    v.value = !0,
                                    setTimeout((function() {
                                        v.value = !1,
                                        _().set("kslive.player.controls.preferece.tip", !1)
                                    }
                                    ), 6e3));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    function() {
                        return w.apply(this, arguments)
                    }
                    ),
                    close: function() {
                        _().set(U.gO, f.value),
                        l.value = !1
                    }
                }),
                function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.Wv)(o.Im, {
                        to: "#liveroom__sidebar"
                    }, [(0,
                    o.bF)(u.eB, {
                        name: "drawer-out"
                    }, {
                        default: (0,
                        o.k6)((function() {
                            return [l.value ? ((0,
                            o.uX)(),
                            (0,
                            o.CE)("section", z, [(0,
                            o.Lk)("div", P, [(0,
                            o.Lk)("span", {
                                class: "w-20 h-20 c-fff-5 cursor-pointer",
                                innerHTML: (0,
                                c.R1)(x()),
                                onClick: S
                            }, null, 8, Q), (0,
                            o.Lk)("span", {
                                class: "fs-14 c-fff lh-18 cursor-pointer fw-5",
                                onClick: M
                            }, " 管理偏好设置 ")]), (0,
                            o.Lk)("div", X, [(0,
                            o.Lk)("div", Z, (0,
                            i.v_)(b[h.value]), 1), (0,
                            o.Lk)("div", K, (0,
                            i.v_)(k[h.value]), 1), h.value === W.MAIN ? ((0,
                            o.uX)(),
                            (0,
                            o.CE)(o.FK, {
                                key: 0
                            }, [((0,
                            o.uX)(!0),
                            (0,
                            o.CE)(o.FK, null, (0,
                            o.pI)((0,
                            c.R1)(f), (function(e) {
                                return (0,
                                o.uX)(),
                                (0,
                                o.Wv)(g, {
                                    key: e.id,
                                    item: e,
                                    onChange: y
                                }, null, 8, ["item"])
                            }
                            )), 128)), v.value ? ((0,
                            o.uX)(),
                            (0,
                            o.CE)("div", H, t[0] || (t[0] = [(0,
                            o.Lk)("p", null, "鼠标点击左右调整", -1), (0,
                            o.Lk)("p", null, "推送内容占比大小", -1)]))) : (0,
                            o.Q3)("", !0)], 64)) : h.value === W.ADD ? ((0,
                            o.uX)(),
                            (0,
                            o.Wv)(I, {
                                key: 1,
                                choosed: (0,
                                c.R1)(f),
                                onAddItem: m
                            }, null, 8, ["choosed"])) : ((0,
                            o.uX)(),
                            (0,
                            o.Wv)(j, {
                                key: 2,
                                choosed: (0,
                                c.R1)(f),
                                onChange: E,
                                onConfirm: T,
                                ref_key: "editRef",
                                ref: A
                            }, null, 8, ["choosed"]))]), (0,
                            o.Lk)("div", {
                                class: (0,
                                i.C4)(["rounded-20 fs-12 fw-5 h-40 flex-center cursor-pointer mt-16 tran", C.value]),
                                onClick: R
                            }, [h.value === W.ADD ? ((0,
                            o.uX)(),
                            (0,
                            o.CE)(o.FK, {
                                key: 0
                            }, [(0,
                            o.eW)((0,
                            i.v_)("已选".concat(Object.keys((0,
                            c.R1)(f)).length + Object.keys(p.value).length, "个")), 1)], 64)) : (0,
                            o.Q3)("", !0), h.value === W.MAIN ? ((0,
                            o.uX)(),
                            (0,
                            o.CE)(o.FK, {
                                key: 1
                            }, [t[1] || (t[1] = (0,
                            o.Lk)("img", {
                                width: "16",
                                height: "16",
                                class: "mr-8",
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAATlBMVEUAAACvr6+vr6+vr7e1tbWzs7O0tLaysrKysrW1tbW1tbi0tLS0tLa1tbezs7O0tLazs7O0tLWysrS0tLS0tLa0tLS0tLWzs7W0tLW0tLX+l9U0AAAAGXRSTlMAECAgMEBfYGBvb3Bwf4CPkJ+gv7/Pz9/vnZvnIQAAAQ5JREFUOMuNk9uCgyAMRAcrXXtZCoqa8/8/ug+6Fandbp6ATCYJmUhPc12aDGxKZ6dXO0Vjs9RUbvegssc+fAYYgm8k5y8jwFyQtDMw+O3BD8DclvF22+e82cbh5hJdss5LNw+w9rWt1tZKT8CTP0B4ZgEaST0MOgIoQ5Qc4I8BHsypg0nHAGX4Ul9UUAMCJI1lhgrgYZKBk6QQQgghQ15Oa4MmQJJUD+v38TPAlt84TOHAPhfZ140VtxskdZDfAUY4y9lfX42TYklRDyut474fAa7ruBXfCyb+T3KLaO97/9VK4bczkEvZZ/asy+JMF++kxn/nenEkF+thxXqBT33htdgc7Lfr+tHAxtQV0T92xiOi4SWxGwAAAABJRU5ErkJggg=="
                            }, null, -1)), t[2] || (t[2] = (0,
                            o.eW)(" 添加更多的内容 "))], 64)) : (0,
                            o.Q3)("", !0), h.value === W.REMOVE ? ((0,
                            o.uX)(),
                            (0,
                            o.CE)(o.FK, {
                                key: 2
                            }, [(0,
                            o.eW)((0,
                            i.v_)("删除".concat(L.value, "项")), 1)], 64)) : (0,
                            o.Q3)("", !0)], 2)])) : (0,
                            o.Q3)("", !0)]
                        }
                        )),
                        _: 1
                    })])
                }
            }
        });
        var Y = n(51916)
          , q = n.n(Y)
          , $ = n(39510)
          , ee = n(11722)
          , te = {
            class: "control-wrapper absolute"
        };
        const ne = (0,
        o.pM)({
            __name: "Control",
            props: {
                canPrev: {
                    type: Boolean
                },
                canNext: {
                    type: Boolean
                }
            },
            emits: ["switchProduct"],
            setup: function(e, t) {
                var n = t.emit
                  , l = (0,
                c.KR)(!1)
                  , s = e
                  , d = n;
                function f(e) {
                    e && !s.canNext || !e && !s.canPrev || d("switchProduct", e)
                }
                var v = (0,
                c.KR)(!1)
                  , p = (0,
                c.KR)();
                function m() {
                    var e;
                    v.value ? v.value = !1 : (q().off("change", h),
                    q().isFullscreen && (l.value = !1,
                    null === (e = p.value) || void 0 === e || e.close()))
                }
                function h() {
                    return g.apply(this, arguments)
                }
                function g() {
                    return (g = (0,
                    a.A)(r().mark((function e() {
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return l.value = !0,
                                    e.next = 3,
                                    (0,
                                    o.dY)();
                                case 3:
                                    p.value.show();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                function b() {
                    return k.apply(this, arguments)
                }
                function k() {
                    return (k = (0,
                    a.A)(r().mark((function e() {
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    q().element ? (v.value = !0,
                                    q().on("change", h),
                                    q().exit()) : h();
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
                B.G_)((function() {
                    q().on("change", m)
                }
                ));
                var y = (0,
                o.EW)((function() {
                    return !ee.E6.value
                }
                ));
                return function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("div", te, [(0,
                    o.bo)((0,
                    o.Lk)("div", {
                        class: (0,
                        i.C4)(["control flex-col items-center", {
                            active: y.value
                        }])
                    }, [(0,
                    o.Lk)("div", {
                        class: (0,
                        i.C4)(["up flex-center rotate-180", [s.canPrev ? "cursor-pointer" : "cursor-disable", s.canPrev ? "" : "opacity-3"]]),
                        onClick: t[0] || (t[0] = function(e) {
                            return f(!1)
                        }
                        )
                    }, t[2] || (t[2] = [(0,
                    o.Lk)("div", {
                        class: "icon"
                    }, null, -1)]), 2), (0,
                    o.Lk)("div", {
                        class: (0,
                        i.C4)(["down flex-center", [s.canNext ? "cursor-pointer" : "cursor-disable", s.canNext ? "" : "opacity-3"]]),
                        onClick: t[1] || (t[1] = function(e) {
                            return f(!0)
                        }
                        )
                    }, t[3] || (t[3] = [(0,
                    o.Lk)("div", {
                        class: "icon"
                    }, null, -1)]), 2), (0,
                    o.Lk)("div", {
                        class: "set flex-center cursor-pointer",
                        onClick: b
                    }, t[4] || (t[4] = [(0,
                    o.Lk)("div", {
                        class: "icon"
                    }, null, -1)]))], 2), [[u.aG, !(0,
                    c.R1)($.G_)]]), l.value ? ((0,
                    o.uX)(),
                    (0,
                    o.Wv)(J, {
                        key: 0,
                        ref_key: "settingRef",
                        ref: p
                    }, null, 512)) : (0,
                    o.Q3)("", !0)])
                }
            }
        })
          , ae = (0,
        n(66262).A)(ne, [["__scopeId", "data-v-38a6362c"]])
    }
    ,
    2191: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => d
        }),
        n(94298);
        var a = n(20641)
          , l = n(53751)
          , r = n(31921)
          , o = {
            class: "mask"
        }
          , i = {
            class: "main"
        }
          , u = {
            class: "top"
        }
          , c = {
            class: "wrapper"
        };
        const s = (0,
        a.pM)({
            __name: "index",
            props: {
                modelValue: {
                    type: Boolean
                }
            },
            emits: ["update:modelValue"],
            setup: function(e, t) {
                var n = t.emit
                  , s = (0,
                r.aL)()
                  , d = s.fixed
                  , f = s.loosen
                  , v = e
                  , p = n;
                function m() {
                    p("update:modelValue", !1)
                }
                return (0,
                a.wB)((function() {
                    return v.modelValue
                }
                ), (function() {
                    v.modelValue ? d() : f()
                }
                )),
                function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.Wv)(l.eB, {
                        name: "expand"
                    }, {
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.bo)((0,
                            a.Lk)("div", o, [(0,
                            a.Lk)("div", i, [(0,
                            a.Lk)("div", u, [(0,
                            a.Lk)("div", {
                                class: "back-icon",
                                onClick: m
                            }), (0,
                            a.RG)(e.$slots, "top")]), (0,
                            a.Lk)("div", c, [(0,
                            a.RG)(e.$slots, "container")])])], 512), [[l.aG, v.modelValue]])]
                        }
                        )),
                        _: 3
                    })
                }
            }
        })
          , d = (0,
        n(66262).A)(s, [["__scopeId", "data-v-1a10ecd3"]])
    }
    ,
    3694: e => {
        "use strict";
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0idXJsKCNwYXR0ZXJuMF8xNzNfNzc0NSkiIGQ9Ik0wIDBoMTB2MTBIMHoiLz48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybjBfMTczXzc3NDUiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTczXzc3NDUiIHRyYW5zZm9ybT0ic2NhbGUoLjAzMzMzKSIvPjwvcGF0dGVybj48aW1hZ2UgaWQ9ImltYWdlMF8xNzNfNzc0NSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFBQVhOU1IwSUFyczRjNlFBQUF0bEpSRUZVU0V2RmwwMUlWRkVVeC8vbmZkUzRpS0oyVm9TUTFrcWRtVVdMb3B4VklFaEoxQ0xvWTFGaitLUU1ON1lJWEVSdWtncFUwbHBJdEF3c0FxR1ZGaTdhT0ZPdG9nSnBrYTNzUzJpaysrYWV1Rzk4T283ejNseWZ4cnpkTU9lYzMvMmZlKzY3LzBmUWVPSTl2TTljRU8zU292TkVPQ2daTVNLUVNtVUdnL0NMR0xOazRPWE1vSDFEbzJRaE9laFJRR1BSSFpPTVl6Nm9VbEVHdVFaNDJoWHV6WGVqTmROQjhZSGdSS2NZWitDRUxyQVVvQmJBZVl5OWZXQmRMZ2N2QzA1MGlnd0k4VXJxdFA1blpEUERkcUkwZGcwNDRiaWZBTjZ2VlZRN2lENW5ocXo2NHZCVjRFMVZ1cmIzcTVRdmc1dXZ1QThOa3k5cGk0Z1N5SGlXR2JiYlZhb0hia3JuamhpMlBVbGdLMG85M1J3R0dER3JManRBWHp4dzBoR1RETFRvRnRoSUhBRlRNME4yeWdQSEhWZjhiN1grWW4zVmxPd1MvY3pvM1lpSzR0eXpLUVBKZXNMQTB6em12cGV2S3NIWGFUTW51ZmVNZ2ROSERZODJNaUV4T2lITGt4bFppanZpQndFN05xSzRkaWN3a0RiUnNLZHdTT2JtZ1k3N2JxQmlBbklVN3hReTdMV28ydlp0bmdPTE5PeFdVQXUxdXdwTHJ3UlZNV3FmS2VFSURsTGJkb2pRZDg0TWJKM2F6NTVUaGRicVF2M1lVSEJMSTNrdExDMjhrQU9jdHBYOVhDOVV4VmRzZGJyVlFFZnJpaW9mNHJkVy9mNmRBenJ1dWZqNFZXOVN2RlluSGZHSGdacXdsT0pwTFkxYkwzUnBqMzlxSDZjN2FST3B4clczYU05b0hsUHZBOGNrK0RnMU8zKzdEZERkU2szYVZnT01YRFZ4WU84S3ZPK0p4SXMzQVdjMXBLQ0VjWnVVdlVIT25kVnhHdXE4amx3ckhKMm9VT1ZNc2tPV0hlbVNVT3JWWkVkNW1QQXFPMmkzRkM0SnBYclJuYVdsYXpKS1FaMGNwVllLa1ZJbWNIbkRsTGtENGFST2dhZ3hNaytQZlBOWGZldmpxNmlLMlZ1R1Y4UGUrbkJsL3NqRXhhak94SHN0TXA3NzVxNTBMa0kvWVR3VHVNVzZCYWJEdWd2d3ZxVU12TVpXNjRJeWRVR0RHQW91VG1ycUV2Mm14SEVtMUFIWTdoODlCU0xDSWhnZkpQRmppdG5qWVVDLzVqL3g2emRKbFBQLzhnQUFBQUJKUlU1RXJrSmdnZz09Ii8+PC9kZWZzPjwvc3ZnPg=="
    }
    ,
    3866: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => N
        }),
        n(52675),
        n(2008),
        n(51629),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(26099),
        n(23500);
        var a = n(64467)
          , l = (n(62010),
        n(20641))
          , r = n(90033)
          , o = n(50953)
          , i = n(10467)
          , u = n(54756)
          , c = n.n(u)
          , s = (n(76031),
        n(53751))
          , d = n(99567)
          , f = n(28479)
          , v = n(16265)
          , p = ["src"];
        const m = (0,
        l.pM)({
            __name: "Player",
            props: {
                id: {},
                poster: {},
                goProfile: {
                    type: Boolean,
                    default: !1
                },
                openInNew: {
                    type: Boolean,
                    default: !1
                },
                author: {},
                playUrls: {
                    default: function() {
                        return []
                    }
                },
                locationValue: {},
                showLocation: {
                    default: "other"
                },
                index: {},
                showId: {
                    default: ""
                },
                showExtraInfo: {
                    default: function() {
                        return {}
                    }
                },
                landStretch: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: function(e) {
                var t, n, a = e, u = (0,
                o.KR)(!0), m = (0,
                o.KR)(!1), h = (0,
                o.KR)(!1), g = (0,
                o.KR)(!1), b = (0,
                o.KR)(null);
                function k() {
                    return y.apply(this, arguments)
                }
                function y() {
                    return (y = (0,
                    i.A)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    l.dY)();
                                case 2:
                                    u.value = !0;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                function M() {
                    !m.value && a.playUrls.length && (t = window.setTimeout((function() {
                        h.value && !m.value && L()
                    }
                    ), 15e3),
                    n = window.setTimeout((0,
                    i.A)(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!m.value) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return g.value = !0,
                                    h.value = !0,
                                    e.next = 6,
                                    (0,
                                    l.dY)();
                                case 6:
                                    if (b.value) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    b.value.loadlive({
                                        playUrls: a.playUrls,
                                        playType: "hover"
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))), 300))
                }
                function A() {
                    h.value = !1,
                    m.value = !0
                }
                function L() {
                    E()
                }
                function E() {
                    window.clearTimeout(n),
                    b.value && b.value.pause(),
                    m.value = !1,
                    h.value = !1
                }
                return (0,
                v.ML)("visibilitychange", (function() {
                    "visible" !== document.visibilityState && E()
                }
                )),
                (0,
                l.xo)((function() {
                    window.clearTimeout(t),
                    t = null,
                    window.clearTimeout(n),
                    n = null
                }
                )),
                function(e, t) {
                    var n = (0,
                    l.g2)("router-link");
                    return (0,
                    l.uX)(),
                    (0,
                    l.Wv)(n, {
                        class: (0,
                        r.C4)(["preview-video", {
                            ready: u.value,
                            "show-loading": h.value,
                            "show-preview": m.value,
                            "land-stretch": e.landStretch
                        }]),
                        target: !!e.openInNew && "_blank",
                        to: e.goProfile ? "/profile/".concat([a.author.id]) : "/u/".concat(a.author.id),
                        onMouseenter: M,
                        onMouseleave: L
                    }, {
                        default: (0,
                        l.k6)((function() {
                            return [(0,
                            l.bF)(f.A, {
                                ref_key: "player",
                                ref: b,
                                class: (0,
                                r.C4)(["player", {
                                    hidden: !m.value
                                }]),
                                type: "preview",
                                poster: a.poster,
                                onOnPlaying: A,
                                id: a.id
                            }, null, 8, ["class", "poster", "id"]), (0,
                            l.bo)((0,
                            l.Lk)("img", {
                                src: a.poster,
                                onLoad: k
                            }, null, 40, p), [[s.aG, !m.value]]), (0,
                            l.bF)(d.A, {
                                src: a.poster
                            }, null, 8, ["src"])]
                        }
                        )),
                        _: 1
                    }, 8, ["class", "target", "to"])
                }
            }
        });
        var h = n(66262);
        const g = (0,
        h.A)(m, [["__scopeId", "data-v-5e214844"]]);
        var b = n(60493)
          , k = n(18323)
          , y = n(11994)
          , M = n(17031);
        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        var L = {
            class: "live-card-main"
        }
          , E = {
            class: "live-card"
        }
          , w = ["src"]
          , C = {
            class: "card-info"
        }
          , R = {
            class: "info-main"
        }
          , I = {
            class: "info-main-info"
        }
          , S = {
            class: "game-name"
        }
          , x = {
            class: "info-user"
        }
          , T = {
            key: 0,
            class: "current-watching"
        };
        const _ = (0,
        l.pM)({
            __name: "index",
            props: {
                liveInfo: {},
                useScale: {
                    type: Boolean,
                    default: !1
                },
                bgColor: {
                    default: "transparent"
                },
                index: {},
                hideGameName: {
                    type: Boolean,
                    default: !1
                },
                openInNew: {
                    type: Boolean,
                    default: !0
                },
                withLiveLabel: {
                    type: Boolean,
                    default: !1
                },
                goProfile: {
                    type: Boolean,
                    default: !1
                },
                showLocation: {
                    default: "other"
                },
                locationValue: {},
                showExtraInfo: {},
                videoLandStrech: {
                    type: Boolean
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                b.E4)()
                  , i = (0,
                l.EW)((function() {
                    var e;
                    return null === (e = t.liveInfo) || void 0 === e ? void 0 : e.gameInfo
                }
                ))
                  , u = (0,
                l.EW)((function() {
                    var e;
                    return null === (e = t.liveInfo) || void 0 === e ? void 0 : e.author
                }
                ))
                  , c = (0,
                l.EW)((function() {
                    var e;
                    return null === (e = t.liveInfo) || void 0 === e ? void 0 : e.watchingCount
                }
                ))
                  , s = (0,
                l.EW)((function() {
                    var e;
                    return t.liveInfo.caption || "".concat(null === (e = u.value) || void 0 === e ? void 0 : e.name, "的直播间")
                }
                ))
                  , d = (0,
                l.EW)((function() {
                    return (0,
                    M.A5)("GENERAL_MODULE_ITEM", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? A(Object(n), !0).forEach((function(t) {
                                (0,
                                a.A)(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({
                        author_id: t.liveInfo.author.id,
                        live_stream_id: t.liveInfo.id,
                        is_living: !!t.liveInfo.id,
                        game_id: t.liveInfo.gameInfo.id,
                        game_name: t.liveInfo.gameInfo.name,
                        exp_tag: t.liveInfo.expTag,
                        location: t.locationValue,
                        red_packet: t.liveInfo.hasRedPack ? 1 : 0
                    }, t.showExtraInfo))
                }
                ));
                return function(e, a) {
                    var f, v, p, m = (0,
                    l.g2)("router-link"), h = (0,
                    l.gN)("log");
                    return (0,
                    l.uX)(),
                    (0,
                    l.CE)("div", L, [(0,
                    l.Lk)("div", {
                        class: (0,
                        r.C4)({
                            "live-card-scale": t.useScale
                        }),
                        style: (0,
                        r.Tr)({
                            background: t.bgColor
                        })
                    }, [(0,
                    l.bo)(((0,
                    l.uX)(),
                    (0,
                    l.CE)("div", E, [null !== (f = t.liveInfo) && void 0 !== f && f.hotIcon ? ((0,
                    l.uX)(),
                    (0,
                    l.CE)("img", {
                        key: 0,
                        class: "live-card-icon",
                        src: t.liveInfo.hotIcon
                    }, null, 8, w)) : (0,
                    l.Q3)("", !0), t.liveInfo.id ? ((0,
                    l.uX)(),
                    (0,
                    l.Wv)(g, {
                        key: 1,
                        ref: "cardPlayer",
                        id: t.liveInfo.id,
                        index: t.index,
                        author: u.value,
                        poster: t.liveInfo.poster,
                        "show-id": (0,
                        o.R1)(n),
                        "play-urls": t.liveInfo.playUrls,
                        "go-profile": t.goProfile,
                        "open-in-new": e.openInNew,
                        "show-location": t.showLocation,
                        "location-value": t.locationValue,
                        "land-stretch": e.videoLandStrech
                    }, null, 8, ["id", "index", "author", "poster", "show-id", "play-urls", "go-profile", "open-in-new", "show-location", "location-value", "land-stretch"])) : (0,
                    l.Q3)("", !0), e.withLiveLabel ? ((0,
                    l.uX)(),
                    (0,
                    l.Wv)(k.A, {
                        key: 2,
                        left: 4,
                        top: 4
                    })) : (0,
                    l.Q3)("", !0), (0,
                    l.bF)(y.A, {
                        quality: t.liveInfo.quality,
                        label: t.liveInfo.qualityLabel,
                        hero: i.value.kingHero,
                        count: i.value.survivalCount,
                        "has-red-pack": t.liveInfo.hasRedPack,
                        "has-guess": t.liveInfo.hasBet,
                        "my-follow": t.liveInfo.followed
                    }, null, 8, ["quality", "label", "hero", "count", "has-red-pack", "has-guess", "my-follow"]), (0,
                    l.Lk)("div", C, [(0,
                    l.Lk)("div", {
                        class: "info-bg",
                        style: (0,
                        r.Tr)({
                            backgroundImage: "url(".concat(null === (v = t.liveInfo) || void 0 === v ? void 0 : v.poster, ")")
                        })
                    }, null, 4), a[2] || (a[2] = (0,
                    l.Lk)("div", {
                        class: "info-bg-cover"
                    }, null, -1)), (0,
                    l.Lk)("div", R, [(0,
                    l.Lk)("div", I, [(0,
                    l.Lk)("p", null, [(0,
                    l.bF)(m, {
                        class: (0,
                        r.C4)(["info-title", {
                            "hiding-game-name": t.hideGameName
                        }]),
                        target: "_blank",
                        to: "/u/".concat(u.value.id),
                        title: s.value
                    }, {
                        default: (0,
                        l.k6)((function() {
                            return [(0,
                            l.eW)((0,
                            r.v_)(s.value), 1)]
                        }
                        )),
                        _: 1
                    }, 8, ["class", "to", "title"]), e.hideGameName ? (0,
                    l.Q3)("", !0) : ((0,
                    l.uX)(),
                    (0,
                    l.Wv)(m, {
                        key: 0,
                        target: "_blank",
                        to: "/u/".concat(u.value.id),
                        title: i.value.name
                    }, {
                        default: (0,
                        l.k6)((function() {
                            return [(0,
                            l.Lk)("span", S, (0,
                            r.v_)(i.value.name), 1)]
                        }
                        )),
                        _: 1
                    }, 8, ["to", "title"]))]), (0,
                    l.Lk)("div", x, [(0,
                    l.bF)(m, {
                        class: (0,
                        r.C4)(["user-info", {
                            "has-current-watching": c.value
                        }]),
                        title: u.value.name,
                        target: "_blank",
                        to: "/u/".concat(u.value.id)
                    }, {
                        default: (0,
                        l.k6)((function() {
                            return [a[0] || (a[0] = (0,
                            l.Lk)("div", {
                                class: "user-icon"
                            }, null, -1)), (0,
                            l.eW)(" " + (0,
                            r.v_)(u.value.name), 1)]
                        }
                        )),
                        _: 1
                    }, 8, ["title", "class", "to"]), c.value ? ((0,
                    l.uX)(),
                    (0,
                    l.CE)("div", T, [a[1] || (a[1] = (0,
                    l.Lk)("div", {
                        class: "watch-icon"
                    }, null, -1)), (0,
                    l.eW)(" " + (0,
                    r.v_)(null === (p = t.liveInfo) || void 0 === p ? void 0 : p.watchingCount), 1)])) : (0,
                    l.Q3)("", !0)])])])])])), [[h, d.value]])], 6)])
                }
            }
        })
          , N = (0,
        h.A)(_, [["__scopeId", "data-v-819a84f8"]])
    }
    ,
    5492: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => p
        }),
        n(52675),
        n(89463),
        n(62010);
        var a = n(20641)
          , l = n(90033)
          , r = n(18323)
          , o = {
            class: "profile-card box-border"
        }
          , i = {
            class: "author-info"
        }
          , u = ["src"]
          , c = {
            class: "detail"
        }
          , s = ["title"]
          , d = {
            class: "counts"
        }
          , f = ["title"];
        const v = (0,
        a.pM)({
            __name: "index",
            props: {
                author: {}
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    var v, p, m, h, g, b, k, y, M, A, L, E, w = (0,
                    a.g2)("router-link");
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", o, [null !== (v = t.author) && void 0 !== v && v.living ? ((0,
                    a.uX)(),
                    (0,
                    a.Wv)(r.A, {
                        key: 0,
                        left: 16,
                        top: 62
                    })) : (0,
                    a.Q3)("", !0), (0,
                    a.Lk)("div", i, [(0,
                    a.bF)(w, {
                        to: "/profile/".concat(null === (p = t.author) || void 0 === p ? void 0 : p.id),
                        class: "avatar",
                        target: "_blank"
                    }, {
                        default: (0,
                        a.k6)((function() {
                            var e;
                            return [(0,
                            a.Lk)("img", {
                                src: null === (e = t.author) || void 0 === e ? void 0 : e.avatar,
                                alt: ""
                            }, null, 8, u)]
                        }
                        )),
                        _: 1
                    }, 8, ["to"]), (0,
                    a.Lk)("div", c, [(0,
                    a.Lk)("div", {
                        class: "intro",
                        title: null === (m = t.author) || void 0 === m ? void 0 : m.name
                    }, [(0,
                    a.Lk)("h4", null, [(0,
                    a.bF)(w, {
                        to: "/profile/".concat(null === (h = t.author) || void 0 === h ? void 0 : h.id),
                        target: "_blank"
                    }, {
                        default: (0,
                        a.k6)((function() {
                            var e;
                            return [(0,
                            a.eW)((0,
                            l.v_)(null === (e = t.author) || void 0 === e ? void 0 : e.name), 1)]
                        }
                        )),
                        _: 1
                    }, 8, ["to"])]), "U" !== (null === (g = t.author) || void 0 === g ? void 0 : g.sex) ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", {
                        key: 0,
                        class: (0,
                        l.C4)(["sex", {
                            male: "M" === (null === (b = t.author) || void 0 === b ? void 0 : b.sex),
                            female: "F" === (null === (k = t.author) || void 0 === k ? void 0 : k.sex)
                        }])
                    }, null, 2)) : (0,
                    a.Q3)("", !0)], 8, s), (0,
                    a.Lk)("p", d, (0,
                    l.v_)(null === (y = t.author) || void 0 === y ? void 0 : y.counts.fan) + "粉丝   " + (0,
                    l.v_)(null === (M = t.author) || void 0 === M ? void 0 : M.counts.follow) + "关注   " + (0,
                    l.v_)(null === (A = t.author) || void 0 === A ? void 0 : A.counts.photo) + "作品   ", 1)])]), (0,
                    a.Lk)("p", {
                        class: "description",
                        title: null === (L = t.author) || void 0 === L ? void 0 : L.description
                    }, (0,
                    l.v_)((null === (E = t.author) || void 0 === E ? void 0 : E.description) || "主播偷懒，没有留下更多消息"), 9, f)])
                }
            }
        })
          , p = (0,
        n(66262).A)(v, [["__scopeId", "data-v-7dd0fab0"]])
    }
    ,
    8284: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => b
        }),
        n(34782);
        var a = n(20641)
          , l = n(90033)
          , r = n(53751)
          , o = n(50953)
          , i = {
            class: "billboard"
        }
          , u = ["src"]
          , c = {
            key: 0,
            class: "list"
        }
          , s = {
            class: "align-items"
        }
          , d = {
            key: 0,
            class: "crown"
        }
          , f = {
            class: "profile"
        }
          , v = ["src"]
          , p = {
            class: "name"
        }
          , m = {
            key: 0,
            class: "align-items"
        }
          , h = {
            class: "ks-coin-count"
        };
        const g = (0,
        a.pM)({
            __name: "Billboard",
            props: {
                watchingCount: {
                    default: ""
                },
                watchingList: {
                    default: function() {
                        return []
                    }
                }
            },
            setup: function(e) {
                var t = (0,
                o.KR)(!1)
                  , n = e
                  , g = (0,
                a.EW)((function() {
                    return n.watchingList.slice(0, 3)
                }
                ))
                  , b = (0,
                a.EW)((function() {
                    return 3 === g.value.length
                }
                ));
                function k() {}
                return function(e, o) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", i, [(0,
                    a.Lk)("div", {
                        class: "billboard-top flex items-center",
                        onClick: k
                    }, [o[0] || (o[0] = (0,
                    a.Lk)("h3", {
                        class: "top-text"
                    }, " 在线观众 ", -1)), (0,
                    a.Lk)("div", {
                        class: (0,
                        l.C4)(["flex items-center", {
                            offset: b.value
                        }])
                    }, [((0,
                    a.uX)(!0),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(e.watchingList, (function(e, t) {
                        return (0,
                        a.uX)(),
                        (0,
                        a.CE)("div", {
                            key: e.user.userName,
                            class: (0,
                            l.C4)(["profile flex", {
                                "profile-first": 0 === t,
                                "profile-second": 1 === t,
                                "profile-third": 2 === t
                            }])
                        }, [(0,
                        a.Lk)("img", {
                            src: e.user.headUrl
                        }, null, 8, u)], 2)
                    }
                    )), 128)), (0,
                    a.bo)((0,
                    a.Lk)("span", {
                        class: "top-count flex-center"
                    }, (0,
                    l.v_)(n.watchingCount), 513), [[r.aG, n.watchingCount]])], 2)]), t.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", c, [(0,
                    a.Lk)("ul", null, [((0,
                    a.uX)(!0),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(e.watchingList, (function(e, t) {
                        return (0,
                        a.uX)(),
                        (0,
                        a.CE)("li", {
                            class: "list-item align-items",
                            key: e.user.principalId
                        }, [(0,
                        a.Lk)("div", s, [(0,
                        a.Lk)("div", {
                            class: (0,
                            l.C4)(["rank", {
                                "rank-sencond": 1 === t && e.user.displayKsCoin,
                                "rank-third": 2 === t && e.user.displayKsCoin
                            }])
                        }, (0,
                        l.v_)(e.user.displayKsCoin ? t + 1 : "-"), 3), 0 === t && e.user.displayKsCoin ? ((0,
                        a.uX)(),
                        (0,
                        a.CE)("span", d)) : (0,
                        a.Q3)("", !0), (0,
                        a.Lk)("div", f, [(0,
                        a.Lk)("img", {
                            src: e.user.headUrl
                        }, null, 8, v)]), (0,
                        a.Lk)("div", p, (0,
                        l.v_)(e.user.userName), 1)]), e.user.displayKsCoin ? ((0,
                        a.uX)(),
                        (0,
                        a.CE)("div", m, [o[1] || (o[1] = (0,
                        a.Lk)("div", {
                            class: "ks-coin"
                        }, null, -1)), (0,
                        a.Lk)("span", h, (0,
                        l.v_)(e.user.displayKsCoin), 1)])) : (0,
                        a.Q3)("", !0)])
                    }
                    )), 128))])])) : (0,
                    a.Q3)("", !0)])
                }
            }
        })
          , b = (0,
        n(66262).A)(g, [["__scopeId", "data-v-e727f6ba"]])
    }
    ,
    9305: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => s
        }),
        n(62010);
        var a = n(20641)
          , l = n(90033)
          , r = n(53751)
          , o = n(50953)
          , i = n(17031)
          , u = ["onClick"];
        const c = (0,
        a.pM)({
            __name: "index",
            props: {
                list: {
                    default: function() {
                        return []
                    }
                },
                modelValue: {
                    default: 0
                },
                style: {},
                gameId: {},
                gameName: {},
                categoryName: {},
                categoryId: {}
            },
            emits: ["update:modelValue", "choose-tag"],
            setup: function(e, t) {
                var n = t.emit
                  , c = e
                  , s = n;
                return function(e, t) {
                    var n = (0,
                    a.gN)("log");
                    return (0,
                    a.uX)(!0),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(e.list, (function(t) {
                        return (0,
                        a.bo)(((0,
                        a.uX)(),
                        (0,
                        a.CE)("div", {
                            key: t.id,
                            style: (0,
                            l.Tr)(c.style),
                            class: (0,
                            l.C4)(["nav-tag", {
                                indicator: !!t.showIndicator,
                                active: e.modelValue === t.id
                            }]),
                            onClick: (0,
                            r.D$)((function(e) {
                                return function(e) {
                                    e.onIndicatorClick && e.onIndicatorClick(),
                                    e.id !== c.modelValue && (s("update:modelValue", e.id),
                                    s("choose-tag", e.id, e.name))
                                }(t)
                            }
                            ), ["stop"])
                        }, [(0,
                        a.eW)((0,
                        l.v_)(t.name), 1)], 14, u)), [[n, (0,
                        o.R1)(i.fU)("PARENT_CATEGORY_BUTTON", {
                            game_id: c.gameId,
                            game_name: c.gameName,
                            parent_category_name: c.categoryName,
                            parent_category_id: c.categoryId
                        })]])
                    }
                    )), 128)
                }
            }
        })
          , s = (0,
        n(66262).A)(c, [["__scopeId", "data-v-757a16a7"]])
    }
    ,
    10152: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#__3kFRu8G__clip0_215_118516)"><g clip-path="url(#__3kFRu8G__clip1_215_118516)"><mask id="__3kFRu8G__mask0_215_118516" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" style="width:22px;height:22px"><path d="M0 0H22V22H0V0Z" fill="currentColor"></path></mask><g mask="url(#__3kFRu8G__mask0_215_118516)"><path d="M18.3348 3.6665C19.2027 3.6665 19.9062 4.37006 19.9062 5.23793L19.9061 10.4759H18.3346L18.3348 5.23793H3.66811V16.7617L12.0839 16.7616V18.333L3.66811 18.3332C2.80023 18.3332 2.09668 17.6296 2.09668 16.7617V5.23793C2.09668 4.37006 2.80023 3.6665 3.66811 3.6665H18.3348Z" fill="currentColor"></path><path d="M17.495 11.8008L20.1116 13.3527C20.39 13.5178 20.5607 13.8174 20.5607 14.1411V17.2874C20.5607 17.611 20.39 17.9107 20.1116 18.0758L17.495 19.6276C17.2069 19.7985 16.8486 19.7986 16.5604 19.6279L13.9389 18.0757C13.6602 17.9107 13.4893 17.6108 13.4893 17.2869V14.1415C13.4893 13.8176 13.6602 13.5178 13.9389 13.3528L16.5604 11.8005C16.8486 11.6299 17.2069 11.63 17.495 11.8008ZM17.0271 13.3503L15.0607 14.5144V16.9137L17.0271 18.0779L18.9893 16.9143V14.5139L17.0271 13.3503Z" fill="currentColor"></path><path d="M17.0263 16.7618C17.6049 16.7618 18.074 16.2927 18.074 15.714C18.074 15.1354 17.6049 14.6663 17.0263 14.6663C16.4476 14.6663 15.9785 15.1354 15.9785 15.714C15.9785 16.2927 16.4476 16.7618 17.0263 16.7618Z" fill="currentColor"></path></g></g></g><defs><clipPath id="__3kFRu8G__clip0_215_118516"><rect style="width:22px;height:22px" fill="currentColor"></rect></clipPath><clipPath id="__3kFRu8G__clip1_215_118516"><rect style="width:22px;height:22px" fill="currentColor"></rect></clipPath></defs></svg>'
    }
    ,
    10914: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => v
        });
        var a = n(20641)
          , l = n(90033)
          , r = n(50953)
          , o = {
            key: 0,
            class: "mask"
        }
          , i = {
            class: "wrapper bg-fff rounded-12"
        }
          , u = {
            class: "title fw-5"
        }
          , c = {
            class: "content fs-16"
        }
          , s = {
            class: "bottom flex"
        }
          , d = {
            key: 0,
            class: "cancel"
        };
        const f = (0,
        a.pM)({
            __name: "index",
            props: {
                title: {},
                detail: {},
                cancelText: {},
                confirmText: {}
            },
            setup: function(e, t) {
                var n = t.expose
                  , f = e
                  , v = (0,
                r.KR)("提示")
                  , p = (0,
                r.KR)("服务器错误，请刷新重试")
                  , m = (0,
                r.KR)("")
                  , h = (0,
                r.KR)("确定")
                  , g = (0,
                r.KR)(!1);
                function b() {
                    g.value = !1,
                    p.value = "",
                    v.value = "提示",
                    m.value = "",
                    h.value = "确定"
                }
                return n({
                    show: function(e) {
                        var t = e.title
                          , n = e.msg;
                        console.log("show"),
                        g.value = !0,
                        v.value = null != t ? t : v.value,
                        p.value = null != n ? n : p.value
                    },
                    close: b
                }),
                function(e, t) {
                    var n;
                    return g.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", o, [(0,
                    a.Lk)("div", i, [(0,
                    a.Lk)("div", u, (0,
                    l.v_)(v.value), 1), (0,
                    a.Lk)("div", c, (0,
                    l.v_)(p.value), 1), (0,
                    a.Lk)("div", s, [f.cancelText ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", d, (0,
                    l.v_)(f.cancelText), 1)) : (0,
                    a.Q3)("", !0), (0,
                    a.Lk)("div", {
                        class: "confirm flex-1 flex-center",
                        onClick: b
                    }, (0,
                    l.v_)(null !== (n = f.confirmText) && void 0 !== n ? n : "确定"), 1)])])])) : (0,
                    a.Q3)("", !0)
                }
            }
        })
          , v = (0,
        n(66262).A)(f, [["__scopeId", "data-v-f7d58660"]])
    }
    ,
    11468: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => M
        });
        var a = n(10467)
          , l = n(54756)
          , r = n.n(l)
          , o = n(20641)
          , i = n(90033)
          , u = n(50953)
          , c = n(99567)
          , s = {
            class: "playback-card"
        }
          , d = {
            class: "playback-user-info"
        }
          , f = {
            class: "playback-user-main"
        }
          , v = {
            class: "playback-user-caption-info"
        }
          , p = {
            class: "playback-user-caption"
        }
          , m = {
            class: "playback-user-caption-full"
        }
          , h = {
            class: "playback-user-data"
        }
          , g = {
            class: "playback-user-time"
        }
          , b = {
            class: "playback-user-count"
        }
          , k = {
            key: 0,
            class: "playback-card-first"
        };
        const y = (0,
        o.pM)({
            __name: "index",
            props: {
                poster: {},
                viewCount: {},
                id: {},
                caption: {
                    default: ""
                },
                isFirst: {
                    type: Boolean
                },
                time: {
                    default: ""
                }
            },
            emits: ["show-product"],
            setup: function(e, t) {
                var n = t.emit
                  , l = e
                  , y = (0,
                u.KR)(!1);
                function M() {
                    return A.apply(this, arguments)
                }
                function A() {
                    return (A = (0,
                    a.A)(r().mark((function e() {
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    o.dY)();
                                case 2:
                                    y.value = !0;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                var L = n;
                function E() {
                    L("show-product", l.id)
                }
                return function(e, t) {
                    var n = (0,
                    o.gN)("lazy");
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("div", s, [(0,
                    o.Lk)("div", {
                        class: (0,
                        i.C4)(["playback-card-info", {
                            ready: y.value
                        }]),
                        onClick: E
                    }, [(0,
                    o.bo)((0,
                    o.Lk)("img", {
                        onLoad: M
                    }, null, 544), [[n, {
                        src: l.poster,
                        loading: ""
                    }]]), (0,
                    o.bF)(c.A, {
                        src: l.poster
                    }, null, 8, ["src"]), (0,
                    o.Lk)("div", d, [(0,
                    o.Lk)("div", f, [(0,
                    o.Lk)("div", v, [(0,
                    o.Lk)("div", p, (0,
                    i.v_)(e.caption), 1), (0,
                    o.Lk)("div", m, (0,
                    i.v_)(e.caption), 1)]), (0,
                    o.Lk)("div", h, [(0,
                    o.Lk)("div", g, (0,
                    i.v_)(e.time), 1), (0,
                    o.Lk)("div", b, (0,
                    i.v_)(e.viewCount) + " 观看", 1)])])])], 2), e.isFirst ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", k, "最新回放")) : (0,
                    o.Q3)("", !0)])
                }
            }
        })
          , M = (0,
        n(66262).A)(y, [["__scopeId", "data-v-393858f6"]])
    }
    ,
    11656: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => u
        }),
        n(34782),
        n(58940),
        n(27495),
        n(25440);
        var a = n(20641)
          , l = n(53751)
          , r = n(50953)
          , o = ["placeholder", "maxlength"];
        const i = (0,
        a.pM)({
            __name: "index",
            props: {
                modelValue: {
                    default: ""
                },
                intLength: {
                    default: 6
                },
                decimalLength: {
                    default: 0
                },
                placeholder: {
                    default: ""
                }
            },
            emits: ["update:modelValue", "focus", "change"],
            setup: function(e, t) {
                var n = t.emit
                  , i = e
                  , u = n
                  , c = (0,
                r.KR)(i.modelValue)
                  , s = (0,
                a.EW)((function() {
                    return i.decimalLength && parseInt(i.decimalLength, 10) > 0 ? /([^\d.])/g : /([^\d])/g
                }
                ))
                  , d = (0,
                a.EW)((function() {
                    var e = parseInt(i.intLength, 10)
                      , t = parseInt(i.decimalLength, 10);
                    return t > 0 ? e + 1 + t : e
                }
                ));
                function f(e) {
                    c.value = e
                }
                function v(e) {
                    var t = e.target.value;
                    t = t.replace(s.value, "");
                    var n = parseInt(i.intLength, 10)
                      , a = parseInt(i.decimalLength, 10)
                      , l = ""
                      , r = t.split(".");
                    l += r[0].slice(0, n),
                    r.length >= 2 && "" !== l && (l += ".".concat(r[1].slice(0, a))),
                    u("update:modelValue", l),
                    f(l)
                }
                function p() {
                    u("focus")
                }
                function m() {
                    u("change", c.value)
                }
                return (0,
                a.wB)((function() {
                    return i.modelValue
                }
                ), (function(e) {
                    f(e)
                }
                )),
                function(e, t) {
                    return (0,
                    a.bo)(((0,
                    a.uX)(),
                    (0,
                    a.CE)("input", {
                        ref: "input",
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return c.value = e
                        }
                        ),
                        placeholder: i.placeholder,
                        maxlength: d.value,
                        type: "text",
                        onInput: v,
                        onFocus: p,
                        onChange: m
                    }, null, 40, o)), [[l.Jo, c.value]])
                }
            }
        })
          , u = (0,
        n(66262).A)(i, [["__scopeId", "data-v-4c8a6e35"]])
    }
    ,
    11994: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => L
        });
        var a = n(20641)
          , l = n(50953)
          , r = n(90033)
          , o = n(12947)
          , i = n(1508)
          , u = n.n(i)
          , c = n(76285)
          , s = n.n(c)
          , d = {
            class: "tag"
        }
          , f = {
            key: 0,
            class: "row"
        }
          , v = {
            key: 1,
            class: "tag-chicken"
        }
          , p = {
            class: "tag-chicken-count"
        }
          , m = {
            key: 2,
            class: "heroname"
        }
          , h = {
            key: 3,
            class: "my-follow"
        }
          , g = {
            key: 4,
            class: "tag-my-follow"
        }
          , b = {
            key: 1,
            class: "row"
        }
          , k = ["innerHTML"]
          , y = {
            key: 2,
            class: "row"
        }
          , M = ["innerHTML"];
        const A = (0,
        a.pM)({
            __name: "index",
            props: {
                quality: {},
                count: {
                    default: 0
                },
                hero: {
                    default: ""
                },
                myFollow: {
                    type: Boolean,
                    default: !1
                },
                latestViewed: {
                    type: Boolean,
                    default: !1
                },
                hasRedPack: {
                    type: Boolean,
                    default: !1
                },
                hasGuess: {
                    type: Boolean,
                    default: !1
                },
                customLabel: {
                    type: Boolean,
                    default: !1
                },
                pro: {
                    type: Boolean,
                    default: !1
                },
                label: {}
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                a.EW)((function() {
                    return t.quality !== o.Fz.standard || t.count || t.hero || t.myFollow
                }
                ))
                  , i = (0,
                a.EW)((function() {
                    return {
                        standard: "高清",
                        high: "超清",
                        super: "蓝光 4M",
                        blueRay: "蓝光 8M",
                        auto: "自动",
                        uhd4k: "4K",
                        wqhd2k: "2K"
                    }[t.quality]
                }
                ));
                return function(e, c) {
                    var A, L;
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", d, [n.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", f, [t.quality !== (0,
                    l.R1)(o.Fz).standard ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        key: 0,
                        class: (0,
                        r.C4)(["tag-quality", {
                            "quality-high": t.quality === (0,
                            l.R1)(o.Fz).high,
                            "quality-super": t.quality === (0,
                            l.R1)(o.Fz).super,
                            "quality-blue-ray": t.quality === (0,
                            l.R1)(o.Fz).blueRay,
                            "quality-4k": t.quality === (0,
                            l.R1)(o.Fz).uhd4k,
                            "quality-2k": t.quality === (0,
                            l.R1)(o.Fz).wqhd2k
                        }])
                    }, (0,
                    r.v_)(null !== (A = t.label) && void 0 !== A ? A : (L = i.value,
                    !t.customLabel || "蓝光 8M" !== L && "蓝光 12M" !== L ? L : t.pro ? "质臻Pro" : "蓝光 质臻")), 3)) : (0,
                    a.Q3)("", !0), e.count ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", v, [(0,
                    a.Lk)("strong", p, (0,
                    r.v_)(t.count), 1), c[0] || (c[0] = (0,
                    a.Lk)("span", null, "存活", -1))])) : (0,
                    a.Q3)("", !0), t.hero ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", m, (0,
                    r.v_)(t.hero), 1)) : (0,
                    a.Q3)("", !0), t.myFollow && !t.latestViewed ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", h, " 我的关注 ")) : (0,
                    a.Q3)("", !0), t.latestViewed ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", g, " 最近观看 ")) : (0,
                    a.Q3)("", !0)])) : (0,
                    a.Q3)("", !0), t.hasGuess ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", b, [(0,
                    a.Lk)("div", {
                        class: "tag-common-bg",
                        innerHTML: (0,
                        l.R1)(u())
                    }, null, 8, k)])) : (0,
                    a.Q3)("", !0), t.hasRedPack ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", y, [(0,
                    a.Lk)("div", {
                        class: "tag-common-bg",
                        innerHTML: (0,
                        l.R1)(s())
                    }, null, 8, M)])) : (0,
                    a.Q3)("", !0)])
                }
            }
        })
          , L = (0,
        n(66262).A)(A, [["__scopeId", "data-v-0922681e"]])
    }
    ,
    12585: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => Y
        });
        var a = n(20641)
          , l = n(53751)
          , r = n(50953)
          , o = n(60680)
          , i = n.n(o)
          , u = (n(2008),
        n(62062),
        n(15086),
        n(62010),
        n(26099),
        n(84864),
        n(27495),
        n(38781),
        n(25440),
        n(90744),
        n(90033))
          , c = n(8423)
          , s = n(12947)
          , d = n(65657)
          , f = n(57142)
          , v = n(85507)
          , p = {
            key: 0,
            class: "manager"
        }
          , m = {
            key: 1,
            class: "mine"
        }
          , h = {
            key: 2,
            class: "at-me"
        }
          , g = ["src"]
          , b = {
            key: 1,
            class: "batch-size"
        }
          , k = {
            class: "comment"
        };
        const y = (0,
        a.pM)({
            __name: "ChatCell",
            props: {
                feedData: {},
                user: {
                    default: function() {
                        return {
                            name: ""
                        }
                    }
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                r.KR)()
                  , l = (0,
                a.EW)((function() {
                    return "comment" !== t.feedData.options.type ? [] : (e = t.feedData.feed.content,
                    n = (0,
                    c.A)(),
                    a = i()("@".concat(t.user.name)),
                    l = new RegExp(a,"g"),
                    e.replace(l, n).split(/(\s)|(?=\[u[a-z0-9]+?\])/).filter((function(e) {
                        return e
                    }
                    )).map((function(e) {
                        return e === n ? {
                            isAtItem: !0,
                            content: a
                        } : {
                            isAtItem: !1,
                            content: e.replace(n, a)
                        }
                    }
                    )));
                    var e, n, a, l
                }
                ))
                  , o = (0,
                a.EW)((function() {
                    var e, n = null === (e = t.feedData) || void 0 === e || null === (e = e.feed) || void 0 === e ? void 0 : e.senderState;
                    return (null == n ? void 0 : n.assistantType) && 0 !== n.assistantType
                }
                ))
                  , y = (0,
                a.EW)((function() {
                    return l.value.some((function(e) {
                        return e.isAtItem
                    }
                    ))
                }
                ))
                  , M = (0,
                a.WQ)(f.pN)
                  , A = (0,
                a.EW)((function() {
                    var e, n;
                    return (null === (e = M.value[null === (n = t.feedData) || void 0 === n || null === (n = n.feed) || void 0 === n ? void 0 : n.giftId]) || void 0 === e ? void 0 : e.giftUrl) || ""
                }
                ));
                function L(e, t) {
                    if (n.value && e) {
                        var a = n.value.getBoundingClientRect().top
                          , l = document.documentElement.clientHeight - a;
                        (0,
                        v.vX)(e, l < 290 ? a - (290 - l) : a - 40, t)
                    }
                }
                return function(e, i) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        class: (0,
                        u.C4)(["comment-cell", {
                            "gift-comment": "gift" === t.feedData.options.type,
                            system: t.feedData.options.from === (0,
                            r.R1)(s.b0).SYSTEM
                        }])
                    }, [o.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", p, " 管 ")) : (0,
                    a.Q3)("", !0), t.feedData.options.from === (0,
                    r.R1)(s.b0).SELF ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", m, " 自己 ")) : y.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", h, " @了你 ")) : (0,
                    a.Q3)("", !0), t.feedData.options.type === (0,
                    r.R1)(s.PY).LIKE ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)(a.FK, {
                        key: 3
                    }, [(0,
                    a.Lk)("span", {
                        ref_key: "cellRef",
                        ref: n,
                        class: "username",
                        onClick: i[0] || (i[0] = function(e) {
                            return L(t.feedData.feed.user.principalId, t.feedData.feed.user.userName)
                        }
                        )
                    }, (0,
                    u.v_)(t.feedData.feed.user.userName), 513), i[3] || (i[3] = (0,
                    a.Lk)("span", {
                        class: "comment light"
                    }, " 点亮了 ", -1)), i[4] || (i[4] = (0,
                    a.Lk)("span", {
                        class: "like cursor-pointer"
                    }, null, -1))], 64)) : t.feedData.options.type === (0,
                    r.R1)(s.PY).GIFT ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)(a.FK, {
                        key: 4
                    }, [(0,
                    a.Lk)("span", {
                        ref_key: "cellRef",
                        ref: n,
                        class: "username",
                        onClick: i[1] || (i[1] = function(e) {
                            return L(t.feedData.feed.user.principalId, t.feedData.feed.user.userName)
                        }
                        )
                    }, (0,
                    u.v_)(t.feedData.feed.user.userName), 513), i[5] || (i[5] = (0,
                    a.Lk)("span", {
                        class: "comment"
                    }, " 送 ", -1)), A.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("img", {
                        key: 0,
                        src: A.value,
                        class: "gift-img"
                    }, null, 8, g)) : (0,
                    a.Q3)("", !0), t.feedData.feed.batchSize > 1 ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", b, " ×" + (0,
                    u.v_)(t.feedData.feed.batchSize), 1)) : (0,
                    a.Q3)("", !0)], 64)) : ((0,
                    a.uX)(),
                    (0,
                    a.CE)(a.FK, {
                        key: 5
                    }, [(0,
                    a.Lk)("span", {
                        ref_key: "cellRef",
                        ref: n,
                        class: "username",
                        onClick: i[2] || (i[2] = function(e) {
                            return L(t.feedData.feed.user.principalId, t.feedData.feed.user.userName)
                        }
                        )
                    }, (0,
                    u.v_)("".concat(t.feedData.feed.user.userName, "：")), 513), (0,
                    a.Lk)("span", k, [((0,
                    a.uX)(!0),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(l.value, (function(e, t) {
                        return (0,
                        a.uX)(),
                        (0,
                        a.CE)("span", {
                            key: t,
                            class: (0,
                            u.C4)({
                                "at-item": e.isAtItem
                            })
                        }, [(0,
                        a.bF)(d.A, {
                            content: e.content
                        }, null, 8, ["content"])], 2)
                    }
                    )), 128))])], 64))], 2)
                }
            }
        });
        var M = n(66262);
        const A = (0,
        M.A)(y, [["__scopeId", "data-v-d3285f2e"]]);
        var L = n(30975)
          , E = n(65641)
          , w = (n(59089),
        n(23288),
        {
            class: "fold-area"
        });
        const C = (0,
        a.pM)({
            __name: "FoldMessage",
            setup: function(e) {
                var t = (0,
                r.KR)("")
                  , n = (0,
                a.WQ)(f.$m);
                function o() {
                    (0,
                    E.ds)()
                }
                return (0,
                a.wB)(E.jE, (function() {
                    t.value = Date.now().toString()
                }
                )),
                (0,
                a.wB)((function() {
                    return n.value.id
                }
                ), (function(e, t) {
                    e !== t && (0,
                    E.iI)()
                }
                )),
                function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", w, [(0,
                    a.bF)(l.eB, {
                        name: "scroll",
                        onAfterEnter: o
                    }, {
                        default: (0,
                        a.k6)((function() {
                            return [((0,
                            a.uX)(),
                            (0,
                            a.CE)("div", {
                                key: t.value,
                                class: "wrapper"
                            }, [(0,
                            r.R1)(E.jE) ? ((0,
                            a.uX)(),
                            (0,
                            a.Wv)(A, {
                                key: 0,
                                "feed-data": (0,
                                r.R1)(E.jE)
                            }, null, 8, ["feed-data"])) : (0,
                            a.Q3)("", !0)]))]
                        }
                        )),
                        _: 1
                    })])
                }
            }
        })
          , R = (0,
        M.A)(C, [["__scopeId", "data-v-78ecae41"]]);
        var I = n(45458)
          , S = n(64467)
          , x = n(10467)
          , T = n(7350)
          , _ = n.n(T)
          , N = n(60895)
          , O = n.n(N)
          , V = n(54756)
          , j = n.n(V)
          , W = (n(28706),
        n(52675),
        n(88431),
        n(51629),
        n(64346),
        n(23792),
        n(34782),
        n(54554),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(16034),
        n(3362),
        n(47764),
        n(23500),
        n(62953),
        n(76031),
        n(22720))
          , B = n(97786)
          , F = n(17031)
          , D = n(222);
        function U(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(n), !0).forEach((function(t) {
                    (0,
                    S.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var z = {
            class: "wrapper flex-1 flex-col"
        }
          , P = {
            key: 0,
            class: "status fs-14"
        };
        const Q = (0,
        a.pM)({
            __name: "Stream",
            emits: ["lock"],
            setup: function(e, t) {
                var o, i = t.emit, c = (0,
                a.WQ)(f.CM), d = (0,
                a.WQ)(f.Q4), v = (0,
                r.KR)(), p = (0,
                r.IJ)([]), m = (0,
                r.IJ)([]), h = (0,
                r.KR)(!0), g = (0,
                r.KR)(0), b = (0,
                a.WQ)(f.nc), k = (0,
                a.WQ)(f.tx), y = (0,
                a.WQ)(f.Oo), M = (0,
                a.WQ)(f.$m), A = (0,
                a.EW)((function() {
                    return Object.values(y.value).every((function(e) {
                        return -1 === e
                    }
                    ))
                }
                )), L = (0,
                r.KR)(!1), E = (0,
                r.KR)(!1), w = (0,
                r.IJ)(null), C = (0,
                r.KR)(!1), R = null, S = 0, T = i, N = (0,
                a.EW)((function() {
                    return m.value.length > 15 ? 1e3 : m.value.length > 5 ? 800 : 500
                }
                )), V = (0,
                a.EW)((function() {
                    return m.value.length > 15 ? 5 : m.value.length > 5 ? 3 : 1
                }
                )), U = (0,
                W.k3)((0,
                x.A)(j().mark((function e() {
                    return j().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (h.value) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return p.value.length >= 500 && p.value.splice(0, 50),
                                H(m.value.splice(0, V.value)),
                                e.next = 7,
                                (0,
                                a.dY)();
                            case 7:
                                Q();
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))), N, !0, !0);
                function Q() {
                    v.value && (v.value.scrollToBottom(),
                    h.value = !0,
                    g.value = 0,
                    R && clearTimeout(R),
                    H(m.value.splice(0, m.value.length)))
                }
                function X() {
                    d.value.enableWebHistoryFeed && (A.value ? E.value = !0 : k())
                }
                function Z() {
                    h.value = !0,
                    0 !== g.value && (g.value = 0,
                    R && clearTimeout(R),
                    H(m.value.splice(0, m.value.length)))
                }
                (0,
                a.wB)((function() {
                    return c.value.length
                }
                ), function() {
                    var e = (0,
                    x.A)(j().mark((function e(t, n) {
                        var l, r, o;
                        return j().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!(t < n)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if ((l = c.value.slice(n)).every((function(e) {
                                        return e.options.source !== s.aT.RECALL
                                    }
                                    ))) {
                                        e.next = 11;
                                        break
                                    }
                                    return r = 0,
                                    l.forEach((function(e) {
                                        e.options.source === s.aT.RECALL ? (r++,
                                        p.value.unshift(G({
                                            id: S++
                                        }, e))) : H(e)
                                    }
                                    )),
                                    (0,
                                    a.dY)((0,
                                    x.A)(j().mark((function e() {
                                        var t, n;
                                        return j().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return null === (t = v.value) || void 0 === t || t.forceUpdate(),
                                                    e.next = 3,
                                                    (0,
                                                    a.dY)();
                                                case 3:
                                                    null === (n = v.value) || void 0 === n || n.scrollToIndex(r);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )))),
                                    e.next = 9,
                                    (0,
                                    a.dY)();
                                case 9:
                                    return t > 0 && !n && O()(Q, 300),
                                    e.abrupt("return");
                                case 11:
                                    if (!(t > 0) || n) {
                                        e.next = 15;
                                        break
                                    }
                                    return H(l),
                                    O()(Q, 300),
                                    e.abrupt("return");
                                case 15:
                                    if (!b.value.id || 0 === l.filter((function(e) {
                                        return "SELF" === e.options.from
                                    }
                                    )).length) {
                                        e.next = 21;
                                        break
                                    }
                                    return H(l),
                                    e.next = 19,
                                    (0,
                                    a.dY)();
                                case 19:
                                    return Q(),
                                    e.abrupt("return");
                                case 21:
                                    if (l.length && (o = m.value).push.apply(o, (0,
                                    I.A)(l)),
                                    h.value) {
                                        e.next = 25;
                                        break
                                    }
                                    return g.value += l.length,
                                    e.abrupt("return");
                                case 25:
                                    U();
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(), {
                    immediate: !0
                }),
                (0,
                a.wB)(h, (function(e) {
                    e || (R && clearTimeout(R),
                    R = setTimeout((function() {
                        Q()
                    }
                    ), 6e4)),
                    T("lock", e)
                }
                )),
                (0,
                a.hi)((function() {
                    R && clearTimeout(R)
                }
                )),
                (0,
                a.sV)((0,
                x.A)(j().mark((function e() {
                    var t, l, r;
                    return j().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!D.S$) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4,
                                n.e(96).then(n.bind(n, 22949));
                            case 4:
                                return r = e.sent,
                                w.value = r.VirtList,
                                e.next = 8,
                                (0,
                                a.dY)();
                            case 8:
                                null === (t = v.value) || void 0 === t || t.forceUpdate(),
                                (0,
                                B.MLh)(null === (l = v.value) || void 0 === l ? void 0 : l.listRefEl, ["mousewheel", "wheel"], (function() {
                                    L.value = !0,
                                    K()
                                }
                                ));
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))));
                var K = _()((function() {
                    var e;
                    C.value ? h.value = !1 : 0 !== (null === (e = v.value) || void 0 === e ? void 0 : e.getOffset()) && (h.value = !1,
                    C.value = !0)
                }
                ), 50);
                function H(e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && !Array.isArray(e) && (p.value = [G({
                        id: S++
                    }, e)].concat((0,
                    I.A)(p.value))),
                    Array.isArray(e) ? p.value = [].concat((0,
                    I.A)(p.value), (0,
                    I.A)(e.map((function(e) {
                        return G({
                            id: S++
                        }, e)
                    }
                    )))) : p.value = [].concat((0,
                    I.A)(p.value), [G({
                        id: S++
                    }, e)])
                }
                return (0,
                B.MLh)(null === (o = v.value) || void 0 === o ? void 0 : o.listRefEl, ["mousewheel", "wheel"], (function() {
                    L.value = !0,
                    K()
                }
                )),
                (0,
                a.wB)(M, (function() {
                    p.value = [],
                    m.value.splice(0, m.value.length),
                    E.value = !1,
                    g.value = 0,
                    S = 0
                }
                )),
                function(e, t) {
                    var n = (0,
                    a.gN)("log");
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", z, [w.value ? ((0,
                    a.uX)(),
                    (0,
                    a.Wv)((0,
                    a.$y)(w.value), {
                        key: 0,
                        ref_key: "listRef",
                        ref: v,
                        class: "list",
                        "item-key": "id",
                        list: p.value,
                        "min-size": 20,
                        "item-gap": 8,
                        buffer: 5,
                        onToTop: X,
                        onToBottom: Z,
                        onItemResize: (0,
                        r.R1)(U)
                    }, {
                        header: (0,
                        a.k6)((function() {
                            return [(0,
                            r.R1)(d).enableWebHistoryFeed ? (0,
                            a.bo)(((0,
                            a.uX)(),
                            (0,
                            a.CE)("div", P, t[0] || (t[0] = [(0,
                            a.eW)(" 没有更多评论了～ ")]))), [[l.aG, E.value], [n, (0,
                            r.R1)(F.aG)("LIVE_NO_MORE_COMMENTS")]]) : (0,
                            a.Q3)("", !0)]
                        }
                        )),
                        default: (0,
                        a.k6)((function(t) {
                            var n = t.itemData;
                            return [(0,
                            a.RG)(e.$slots, "default", {
                                data: n
                            })]
                        }
                        )),
                        _: 3
                    }, 40, ["list", "onItemResize"])) : (0,
                    a.Q3)("", !0), g.value && !h.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        key: 1,
                        class: "new-message",
                        onClick: Q
                    }, [(0,
                    a.bo)(((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", null, [(0,
                    a.eW)((0,
                    u.v_)(g.value) + "条新消息 ", 1)])), [[n, (0,
                    r.R1)(F.A5)("LIVE_NEW_COMMENTS", {})]])])) : (0,
                    a.Q3)("", !0)])
                }
            }
        })
          , X = (0,
        M.A)(Q, [["__scopeId", "data-v-715c32cc"]]);
        var Z = {
            key: 0,
            class: "chat-history flex-col"
        }
          , K = {
            class: "fold-message"
        }
          , H = {
            key: 1,
            class: "empty"
        };
        const J = (0,
        a.pM)({
            __name: "ChatHistory",
            setup: function(e) {
                var t = (0,
                a.WQ)(f.CM)
                  , n = (0,
                a.WQ)(L.j0)
                  , o = (0,
                a.WQ)(f.az)
                  , i = (0,
                a.WQ)(f.U7)
                  , u = (0,
                a.EW)((function() {
                    var e;
                    return !o.value && (null === (e = t.value) || void 0 === e ? void 0 : e.length)
                }
                ))
                  , c = (0,
                r.KR)(!0);
                function s(e) {
                    c.value = e
                }
                return (0,
                a.wB)((function() {
                    return n
                }
                ), (function(e) {
                    e || i()
                }
                )),
                function(e, t) {
                    return u.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", H)) : ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", Z, [(0,
                    a.bF)(X, {
                        onLock: s
                    }, {
                        default: (0,
                        a.k6)((function(e) {
                            var t = e.data;
                            return [(0,
                            a.bF)(A, {
                                "feed-data": t
                            }, null, 8, ["feed-data"])]
                        }
                        )),
                        _: 1
                    }), (0,
                    a.bo)((0,
                    a.Lk)("div", K, [(0,
                    a.bF)(R)], 512), [[l.aG, (0,
                    r.R1)(E.jE)]])]))
                }
            }
        })
          , Y = (0,
        M.A)(J, [["__scopeId", "data-v-bb22dc7e"]])
    }
    ,
    14409: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => Rt
        });
        var a = n(64467)
          , l = n(10467)
          , r = n(54756)
          , o = n.n(r)
          , i = (n(52675),
        n(2008),
        n(51629),
        n(62062),
        n(34782),
        n(62010),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(26099),
        n(89907),
        n(23500),
        n(76031),
        n(20641))
          , u = n(90033)
          , c = n(50953)
          , s = n(57142)
          , d = n(98023)
          , f = n.n(d)
          , v = (n(9868),
        n(82284))
          , p = n(80296);
        n(28706),
        n(64346),
        n(48598),
        n(26910),
        n(23288),
        n(2892),
        n(5506),
        n(78459),
        n(38781);
        var m = ["viewBox"]
          , h = {
            id: "gift-circle"
        }
          , g = ["d", "stroke-linecap", "stroke-width"]
          , b = ["cx", "cy", "r"]
          , k = ["width", "height"]
          , y = ["viewBox"]
          , M = ["id"]
          , A = ["offset", "stop-color"]
          , L = ["d", "stroke", "stroke-linecap", "stroke-width"]
          , E = {
            class: "nut-circle-progress__text"
        };
        const w = (0,
        i.pM)({
            __name: "circle-progress",
            props: {
                shape: {
                    default: "circle"
                },
                rectDimensions: {
                    default: [100, 100, 10]
                },
                progress: {
                    default: 0
                },
                strokeWidth: {
                    default: 5
                },
                radius: {
                    default: 50
                },
                strokeLinecap: {
                    default: "round"
                },
                color: {
                    default: "#fa2c19"
                },
                pathColor: {
                    default: "#d9d9d9"
                },
                clockwise: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: function(e) {
                var t = e
                  , n = Math.random().toString(36).slice(-8)
                  , a = (0,
                i.EW)((function() {
                    return "circle" === t.shape ? "".concat(2 * Number(t.radius), "px") : "".concat(t.rectDimensions[1], "px")
                }
                ))
                  , l = (0,
                i.EW)((function() {
                    return "circle" === t.shape ? "".concat(2 * Number(t.radius), "px") : "".concat(t.rectDimensions[0], "px")
                }
                ))
                  , r = (0,
                i.EW)((function() {
                    if ("circle" === t.shape) {
                        var e = t.radius;
                        return "0 0 ".concat(2 * e, " ").concat(2 * e)
                    }
                    return "0 0 ".concat(t.rectDimensions[0], " ").concat(t.rectDimensions[1])
                }
                ))
                  , o = (0,
                i.EW)((function() {
                    if ("circle" === t.shape) {
                        var e = t.radius - t.strokeWidth / 2
                          , n = t.radius
                          , a = t.strokeWidth / 2
                          , l = t.clockwise ? 0 : 1;
                        return "M ".concat(n, " ").concat(a, " a ").concat(e, " ").concat(e, " 0 1 ").concat(l, " 0 ").concat(2 * e, "\n        a ").concat(e, " ").concat(e, " 0 1 ").concat(l, " 0 ").concat(-2 * e)
                    }
                    var r = (0,
                    p.A)(t.rectDimensions, 3)
                      , o = r[0]
                      , i = r[1]
                      , u = r[2]
                      , c = t.strokeWidth / 2
                      , s = u - c;
                    return "\n        M ".concat(o / 2, " ").concat(c, "\n        h ").concat(o / 2 - s - c, " \n        q ").concat(s, " 0 ").concat(s, " ").concat(s, "\n        v ").concat(i - 2 * s - 2 * c, " \n        q 0 ").concat(s, " ").concat(-s, " ").concat(s, "\n        h ").concat(-(o - 2 * s - 2 * c), "\n        q ").concat(-s, " 0 ").concat(-s, " ").concat(-s, "\n        v ").concat(-(i - 2 * s - 2 * c), "\n        q 0 ").concat(-s, " ").concat(s, " ").concat(-s, "\n        z\n        ")
                }
                ))
                  , s = (0,
                i.EW)((function() {
                    var e;
                    if ("circle" === t.shape) {
                        var a = t.radius - t.strokeWidth / 2
                          , l = (e = 2 * Math.PI * a) * Number(t.progress) / 100;
                        return {
                            strokeDasharray: "".concat(l, " ").concat(e),
                            strokeLinecap: t.strokeLinecap,
                            strokeMiterlimit: 2
                        }
                    }
                    var r = t.strokeWidth
                      , o = (0,
                    p.A)(t.rectDimensions, 3)
                      , i = o[0]
                      , u = o[1]
                      , c = o[2]
                      , s = (e = 2 * (i + u - 2 * r) - 8 * c + 2 * Math.PI * c + 2) * Number(t.progress) / 100;
                    return {
                        stroke: w(t.color) ? "url(#".concat(n, ")") : t.color,
                        strokeDasharray: "".concat(s, " ").concat(e),
                        strokeLinecap: t.strokeLinecap,
                        strokeMiterlimit: 2
                    }
                }
                ))
                  , d = (0,
                i.EW)((function() {
                    var e = Object.entries(t.color).map((function(e) {
                        var t = (0,
                        p.A)(e, 2)
                          , n = t[0]
                          , a = t[1];
                        return "".concat(a, " ").concat(n)
                    }
                    )).join(", ");
                    return "radial-gradient(circle, ".concat(e, ")")
                }
                ))
                  , f = (0,
                i.EW)((function() {
                    if (!w(t.color))
                        return [];
                    var e = t.color
                      , n = Object.keys(e).sort((function(e, t) {
                        return parseFloat(e) - parseFloat(t)
                    }
                    ))
                      , a = [];
                    return n.forEach((function(t) {
                        a.push({
                            key: t,
                            value: e[t]
                        })
                    }
                    )),
                    a
                }
                ));
                function w(e) {
                    return e && "object" === (0,
                    v.A)(e) && !Array.isArray(e)
                }
                return function(e, t) {
                    return (0,
                    i.uX)(),
                    (0,
                    i.CE)("div", {
                        class: "nut-circle-progress",
                        style: (0,
                        u.Tr)({
                            height: a.value,
                            width: l.value
                        })
                    }, ["circle" === e.$props.shape ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("svg", {
                        key: 0,
                        viewBox: r.value
                    }, [(0,
                    i.Lk)("defs", null, [(0,
                    i.Lk)("mask", h, [(0,
                    i.Lk)("path", {
                        class: "nut-circle-progress__hover",
                        style: (0,
                        u.Tr)(s.value),
                        d: o.value,
                        fill: "none",
                        stroke: "white",
                        "stroke-linecap": e.strokeLinecap,
                        "stroke-width": e.strokeWidth
                    }, null, 12, g)])]), (0,
                    i.Lk)("circle", {
                        cx: e.$props.radius,
                        cy: e.$props.radius,
                        r: e.$props.radius,
                        fill: "rgba(0, 0, 0, 0.2)"
                    }, null, 8, b), (0,
                    i.Lk)("image", {
                        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAS20lEQVQYGe3BzY6dh2Ee4Of9hrZlp4WOr0BHV+Bxl91oaCQOWwTRKHUA2rWtYRAVdutAZNEsskhIZpNdSQUIbCBFOHQcW2mBaJwGKf2DcHQFpm6gProCHS2iP3K+t9+ZoRtGoWWKIkeSdZ4nPmT6wqm50ZYT42PSOcNMzLUzMWvM3CG8Ysyr2qXBK5qXHeRlxhucWOSpv7/hQyQ+wPrC9sytNzYNfVJsajfFzKBWklAGVengrlI0aDVRtNQkGPd1uKF90can9vPU3tIHVHzA9IXtmTdf3zGMT0q2rARRSSiDWklCiTYi7q6kaNBqYmVE61DRoLT7huy6ObyYL15b+ACJD4C+sD3z+us7Bk9iS0oUEaSVhBCklYQyKElT4u4aaWulaKKljhRFTUJNWk3UvrG7+dIPr/oAiPdRX9ieeeO1Z8VZzUxaREJasRJBVKxEFDGoONSIuLuShtakiooqokFrFCtVFXWkoV1I9snFfPHawvsk3gf93qm5sefpjiiJ1KFBSaREEVFEQkpCWkQwqEoHd5XRSlUINWmNghrFSlHUSkm0VVHUbdk15GK+eG3hmMUx6gvbM//4+iX6NAklCOJIkDiUFjGoJNKqGEJMSkJK4tDQibgtVEXVKFYaWqJGUSvV0iG0mqhJadAahdBSpLs2Ni7mi9cWjkkcg17Znjnx2rPqrHgUEUVExSSREiWREkcGVREMlmIhuSHjDeP4so8PC8PNpTdmyzy1t3SHvrA988gbM7fM3bo5M5x4zOhxfEa7qZkpWoeKmgStUdSROlJVsVJLcTlf+eFFxyAesl45tSXjFfEYIo4ECWkRCUoQFbEyWIp9um/Di3nqRzc8QH3h1zaNNhmedNAtNbNSR4qG1qGahJq0RkGxMA6/kzPX9j1E8ZD0yvaM186LZxFRFYNKQh0KgjiSkC4lu8Z8P1+8tu8Y9Xu/usWwI34TM00ULbVSFfUzVVErVc/lzA/PeUjiIeiVU3Mdr5O5IIjbShSRoAyI0hcN9nziV67mqb2l91m/d2pH+rSxT6goaqWaUBqKFkGrXpbhZM5cW3jA4gHrX3z+aXUZMwlKHElIHRqURDDYd3BwMV/58b4PoP7lr27JsEOe1ppUE61JjSKqqKDqVWMu5pkfXPYAxQPUP//8eVwQBFHESpCgxJGh+2xczFeu7fsQ6JVTcyfGS2qb0FIrVVErVSvR0F7IMz+86AGJB6BXtmduvn5JuiNBSyItIggSFFnowZmc+fG+D6F++9SO9rx2riZBq6KoSWgRYtfGJ8/lzN7SexTvUa9sz9x87braNCgiiohaCeJn/phPXc6ZvaUPuV75/AWcR1XUJLQO1UrVyks+9qmTObO39B7Ee9Ar2zM3X79u7KYgiggStCQGky6kT+XMj274JdIrp+ba69q5IzWKI1VRR+KGj33qZM7sLd2nwX3qle2ZN1+/7qCbou5UtP6/cXxOPvXZnPnRDb9kcubaQt78rPY5RUWUOBIEYbTprdev98r2zH2K+9Ar2zOvv3ZdbFpJKyGoWAmi5L/mmR9c9hHQP//1s+KSllqpCqGliGpueOOTn8u5vaV3aXA/Xnv9EjYVRROjGN0W6hXGz+WZH1z2EZFnfnDZOH5WLVEVwliHEir4rI+/fsl9GLxL/bPPn8eOmrT+SRFFu/Dx4d/kmR/v+4jJf/rRDQfDZzUvE+pIQ1sNY9GdfvPz571L8S70z379WXXZoRJH4kgw+Klx+Fy+fm3hI6zfPDU39Lqxc1TFoVYTRVSGM/nP1666R3GPeunU3Mb4E4NHVcSklUSCkizIyXz92sKafvPUnPE6HlNBNbFSk1a96sTw2Xz92sI9GNyrodfJzJigGiSKlnZJTubr1xbWDuXr1xYMJ419VUMTLS0tgjzqZq/30vbMPRjcg17+9UviMW2tNBFVk1ArJ/P1awtr/0y+fm1h3HjKSkvRmNRYKmpu4/Xz7sHgF+ilU1t41pgQqooRDTXJufyXH92wdlf5vWv76pwiQUtooq2inu2lU1t+gcEvdoXQ0kQTVMWR5/KNH1y29o7yjR9cJs8ZSxOjWGkiqogrvbQ98w4G76CXTp1Xc7VSRVGTmPzUrU9esHZvbr15gSxQgpBUE8VobnzjrHcQP0cvnZob8xPpo47EShwJ6vGcu7awds966dc2DcNP2gidJAbaIpql4ROP59ze0l0Mfp5xOK9miiYoStCKCzl3bWHtXcm5H90w5mKKSqRammi0ZsY3Lvk54i56aXvu1ps/tRK3lQRlsMi5a49buy+9tD3jjZ+ouSKqiTrUkhOfeDzn9hbeZnA3N986j7YoahKTokYXrd23nNtbuuUMimooihKTg7fOu4t4m/7J9tzGW/8XoURJHCqxl//2f56y9p71v/+760ZbVmrSMkRbEh/7+Kdzbm/pDoO3y1vnFUXDmGiplbrZc9YejINeVCslNFGTRHHrrWe9zeBf2tJETWKlDUVzNX9wbWHtgcjvX9vHvjFRWhTVFqOzvbA9c4fBHfon/35HM9eaVEtJrVTGq9YesI2LtEqohkqoMTOPvPW0Owzu1DyNanRMNDRaNC/m96/tW3ug8vt/t28cXlQ1Jkobmlhptt1hcFv/ZHuu2TKKSag6FKG9au3hGLKnCbESk6KorV7Ynrlt8DPjW1tKSxuaKIpkmT/4+11rD8drJ67iFUVbtVJFceLmjtsGP9PhaZOIFK1DxUH3rD00ubC3VFdRQkNFrZQ86bbBpBe2Z+oJtVK1UtU2jLlq7eE6yPc10URRJRS11QvbM5PByomDJ1QUo1jpEE1Sy/zh3+1be6jyh3+3r5baKpooHRM1ubVpMpiMBz2JtrTREW3Vyr6145Hsa9JaqWqoYuiTJoPJkHzGmEQEoSoamu9bOx5j9jUITTRRIcimyQmTjrZSilhJRK2MBzesHY+D4UW5JWKlJaJIs2mSXtje1IOfWEloHYqVZS78709bOza98JuvMD5KQktCaMnG44Px4DGjqhqVIFrUDWvHqxaaKJooxpYwjk8M5LMESSsdy9imYXTD2rEa66U2NFTbINTK44PmMZKOpEqQKCMvWztWwzDcSFuHEkVL0Tx2Qs1NQpEUibYGGwtrx+vWwUKSjgShRE3aTw/amZokLRpGUsXS2vE6sbHQiGhNEiWNyGODZqYYSVNFacUJC2vH6w3LFmMbYWxJHJkNZKbRokIUEZOlteP1iGWKhtImiqqaDWpWlapJxzJi1FzYW1o7VrmwtyRIlFQVo0lmJ4ytJEhL2hKNWHt/FG2JSXQiychAkppEapKYpGrt/TFqmyAtmqTaMigtRioIRRNr748S0TGCmpRgaC2VIsXYKqq9sD2zdqx6dntGogQdSYOktRzCkkijI5q0CWJpZu14PWLWYlTVGBg7QbM8oVnGSpsWMYmVj5lZO163TszTgzaTmrREinQ5aBYtrVRSonTEuDG3dtweNYlJW0Vp0SxPqGWkJQlq0hJjO7d2vA46bxIlJkncNo4WJ7BAUm0lVmKSIfmMtePVzuNQJWkJQsPiBF5uUZkoQrRVm9aOV7LZVggRVEWiXjphHPdjQ01K2rqtzK0drzGfibZJtCLNRFvGxZDLewvNKzEZWxINTSKznv3tTWvHomd/e1PHWSUpGoqxVXJ578bgUF9Sk8SoJS1tueUJa8fj4GCTRGlRFA3yosngUG4Y0agk1VTTYNyydjy68WQbSkSqJFbqJZPByoHvE0VMmpAobbasHYvqVoqGUom2mhjsmwxWTty6oWTUlhZVJTLrN76wZe2h6je+sJWaESkdSdHEoYN9k8Ekl/eWar8kDUUxass4dtvawzXmaY2WCkVpUfu5vLc0Gdw2jr6fhrGNaIUkYujG0z27PbP28NS2opUSqaYROuy6bXDb8Ilbu7WSqGoUHUvNxtc+sWPtoejXfnvH2Edb0lDUStryseFFtw1uy+W9ZWq/pRVCQ0PbIeOT1h6OerqS0BbVVoxtaj+Xn1+4bXCncdiLiFAytkErmq1+7Qtb1h6ofu30Vmsr1TZJtcRKhjDsusPgTp9882pHS20VGaIRoepg47y1B+ugT6cpiZokRlLaLvLN/3nVHQZ3yOW9ZXmOxKRj6YpJorb6u6e3rD0Q/drpudpRlJjUJIjWvrcZvM3w1luXO5KiKGkoqtrz1h6Mm71UtKLRRovSkSEbF73N4G2yu7eM7BJHEis1SdRWf/f0lrX3pL9zegfbRiJalNQkIrv51vMLbzO4m41cNLYaHatFdUJTB650Z3tm7f7V+Y5EqFppVWjZyEV3MbiLfOv5BbmaaqQaraTRNq05j5y1dl/61dPntY8RLYqikVHb7OZbzy/cxeDnOXjzXA2vkqQmoSZxqP6oX/rSprV3pTun5+I8Q5SY1CSODK8OB7no5xj8HNndW0afU21JUU0jjVZ6YnyhO9sza/ekO9szY663oq3SUpKx1aCXs/v8ws8xeCfjI5fVyyYtJbpChGbu4FfOW7s3/ZXzaq6hRJpqBElY5C+ev+gdDN5BdneXOJM60lDSFZS2Zw/+4xfPWntH/fKXnu3BeFbVSmmbVlRb1Bm/QNyDg69+8fLAs6olVkqqlZgkw8l85zv71v6FfulLm42fJCZtJVKhjVDV5za+/ddn/QKDezAMn7hAF0iqahIrqSod+0JP78yt/TM9vTOvXFc6oqRtqiVpRBYb3/7rs+7B4B5kd3dpcJIsS4gUjRLF2Fl78x96emdu7VBP78x567p2pg61SSWtpCZ9xdCT7tHgHmX3+QXOaahDrahJEJPH25vXe3pn7iOup3fmevO6ekxDUUdKqsQ4+uPsPr9wjwbvQv7yu7upC4pRQ5WMbaqhaebGW//Q0ztzH1E9vTM33ryuHiOOBBE/E0YXNv7qe5e9C3EfevpLVxo7EapISxo6kWAZ48n8r+/e8BHSL3x5S/wNnTUJY2VCGxHSsYZczXe/e8a7NLgfj3z8HLnRVistabTVSpBm1nH4SX/rK2d9RPQ/fPnZ1vXWpyvRilAkMUmRvOS11865D3GfurMz8/rN62VTUUeqJGoSWpHLxo2L2dtd+iXU7Z2Z4eA8ztI2IiYlISUORW9487WT2dtbug/xHnR7Z+bjt65rPyNJi7GNaIVQR5pFDCezt7vwS6TbO5t68DcGjzckVBHRSjUihBve+seT2dtbuk/xHnV7Z+Zjt6633SRSrURRR2oSxopcyN9++6IPuW7vzIzjs40LUiuJNkIriRCtSfWl3PrHk9nbW3oP4gHo9s7MxsGl6o5JGtrKkI5FKEpM6qfiYv7221d9CPU3drakV6pzA9E2E20jVoIUbYbhqpsb57K3u/QexQPUL3z5gtEfqUmoSdKahFaqJEpHexlzLtd2Fz4E+hs7W+q8dKsmKbFSkYQqQYh25I83/uY7Fzwg8YD1t75ytnU+MjPp6FCqJUZC20RR2uwOXM213X0fQD21s1U9nyFbVWJSGaJKEMSRVHiF8Vxe+KurHqB4CLq9M6+D62pOqElkbElaR0qalmho99Ps5odXrnqfdXtn5nVPl+3EE41QgjiUgSohVBBp+9Nk43PZ2114wOIh6vZXLmnOtiipaqy0okqSaiuKhlom2dPhan78P/Ydo/7q724xPtl0R8wShCpBSiLaRsSkhETH+tNhGC5kb3fpIYiHrNs7Wx3HK0ZzQouBloaiJqGOFEVDLSP7RnsML2X/z294gLr1zOboYCtDnghb0kepDmIlSIkjIaEqA0KVZJHh4Ez2vrPvIYpj0t/46vnKs+rTqbZCKBqHiqJxqCiKRqrlVaMbkRvj6OVh6EKzdOLEgkeW2b+8dIdunZ3xxsxbBzMb41yHx8bYHNLN6lzMDCYlJq0hoQRBiLYRIdoOCZV4hfypEy5nb3fpIYtj1O2d+XjThbRPa8Sk0bElIbQUVSWGtMRk1BINRUNRFA1F/ZOhBEEQkzKYlCAIUtE2iVSoQYTGpISEIrHrY85lb3fpmMT7oKd25mNcGOqrJUoaLaqIhqJEtGirCZGxE5MhiqqDxN1slCglkmhTIoKYtAaxEoRohUakQjtIYtfoYq7tLhyzeB/11M585MLQPNGaK+pIQ1GTUDS0FI0IpUVxEHc1tAYRkzIEJSatiCCVaCNiUmJSkmWGPucRl7O3u/Q+iQ+IW7+2szPI06knWkm1klRJWjJqJdpqYmVUEmMY3V3KgKEmFUQEqUOpJJo6FJIWL47y/eFfjbvZ2116n8UHTLd25oZhS/J0xz6RmiQ1GQltE0U1khYjxriroTUIJUibSUO0jSTaCGXofgx7/vXB1eztLn2AxAdYt3ZmBza2wtYgn+loy0pRNLQIVWOi/rlgqEODSQliUpJXpC81Xhpkj1s3sr+79AEVHzL9t89s2hjnY7OpeWyIecfOjJlFHm19Wh0J4pXEq9JlWSSW0oWML9v4+H72v7XwIfL/ABEqkeK2psoPAAAAAElFTkSuQmCC",
                        width: 2 * e.$props.radius,
                        height: 2 * e.$props.radius,
                        mask: "url(#gift-circle)"
                    }, null, 8, k)], 8, m)) : ((0,
                    i.uX)(),
                    (0,
                    i.CE)("svg", {
                        key: 1,
                        viewBox: r.value
                    }, [(0,
                    i.Lk)("defs", null, [(0,
                    i.Lk)("linearGradient", {
                        id: (0,
                        c.R1)(n),
                        x1: "100%",
                        y1: "0%",
                        x2: "0%",
                        y2: "0%"
                    }, [((0,
                    i.uX)(!0),
                    (0,
                    i.CE)(i.FK, null, (0,
                    i.pI)(f.value, (function(e, t) {
                        return (0,
                        i.uX)(),
                        (0,
                        i.CE)("stop", {
                            key: t,
                            offset: e.key,
                            "stop-color": e.value
                        }, null, 8, A)
                    }
                    )), 128))], 8, M)]), (0,
                    i.Lk)("path", {
                        class: "nut-circle-progress__hover",
                        style: (0,
                        u.Tr)(s.value),
                        d: o.value,
                        fill: "none",
                        stroke: d.value,
                        "stroke-linecap": e.strokeLinecap,
                        "stroke-width": e.strokeWidth
                    }, null, 12, L)], 8, y)), (0,
                    i.Lk)("div", E, [(0,
                    i.RG)(e.$slots, "default")])], 4)
                }
            }
        });
        var C = n(66262);
        const R = (0,
        C.A)(w, [["__scopeId", "data-v-601b81a0"]]);
        var I;
        (I = R).install = function(e) {
            I.name && e.component(I.name, I)
        }
        ;
        var S = n(17031)
          , x = {
            class: "send-panel"
        }
          , T = ["onClick", "onMouseenter", "onMouseleave"]
          , _ = {
            class: "btn-sending"
        };
        const N = (0,
        i.pM)({
            __name: "SendPanel",
            props: {
                protectTime: {},
                gift: {},
                batchSizeArr: {},
                maxBatchSize: {}
            },
            emits: ["send", "setHoverBatch"],
            setup: function(e, t) {
                var n = t.emit
                  , a = e
                  , l = n
                  , r = (0,
                i.EW)((function() {
                    return a.gift.protectSingleHoverTime / a.protectTime * 100
                }
                ))
                  , o = (0,
                c.KR)([])
                  , s = {
                    "0%": "rgba(255, 255, 255, 0.7)",
                    "100%": "rgba(255, 255, 255, 0.7)"
                };
                return (0,
                i.sV)((function() {
                    var e = a.maxBatchSize || 1314
                      , t = a.batchSizeArr.filter((function(t) {
                        return t <= e
                    }
                    ));
                    o.value = t.map((function(e) {
                        return {
                            size: e,
                            isHover: !1
                        }
                    }
                    ))
                }
                )),
                function(e, t) {
                    var n, d = (0,
                    i.gN)("log");
                    return (0,
                    i.bo)(((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", x, [((0,
                    i.uX)(!0),
                    (0,
                    i.CE)(i.FK, null, (0,
                    i.pI)(o.value, (function(n, v) {
                        var p, m, h, g, b, k = n.size;
                        return (0,
                        i.uX)(),
                        (0,
                        i.CE)("div", {
                            key: k,
                            class: (0,
                            u.C4)(["send-num", {
                                "sending-num": (null === (p = a.gift) || void 0 === p ? void 0 : p.isStartContinGift) && (null === (m = e.$props.gift) || void 0 === m ? void 0 : m.sendGiftBatchLevel) === k
                            }]),
                            onClick: function(e) {
                                return t = k,
                                null !== (n = a.gift) && void 0 !== n && n.isStartContinGift && (null === (r = a.gift) || void 0 === r ? void 0 : r.sendGiftBatchLevel) === t ? (0,
                                S.TO)("LIVE_GIFT_MULTIFEEND_GIFT", {
                                    gift_id: null === (o = a.gift) || void 0 === o ? void 0 : o.id,
                                    source_type: "QUICK_SEND",
                                    count: t
                                }) : (0,
                                S.TO)("LIVE_BUCK_GIFT_PANEL", {
                                    gift_id: null === (i = a.gift) || void 0 === i ? void 0 : i.id,
                                    source_type: "QUICK_SEND",
                                    count: t
                                }),
                                void l("send", t);
                                var t, n, r, o, i
                            },
                            onMouseenter: function(e) {
                                return function(e, t) {
                                    o.value[e].isHover = !0,
                                    l("setHoverBatch", t)
                                }(v, k)
                            },
                            onMouseleave: function(e) {
                                return function(e) {
                                    o.value[e].isHover = !1,
                                    l("setHoverBatch", -1)
                                }(v)
                            }
                        }, [null !== (h = a.gift) && void 0 !== h && h.isStartContinGift && (null === (g = e.$props.gift) || void 0 === g ? void 0 : g.sendGiftBatchLevel) === k ? ((0,
                        i.uX)(),
                        (0,
                        i.Wv)((0,
                        c.R1)(R), {
                            key: 0,
                            shape: "rectangle",
                            "rect-dimensions": [70, 33, 4],
                            progress: r.value,
                            color: s,
                            "path-color": "#FE3666",
                            "stroke-width": 2,
                            clockwise: !1
                        }, {
                            default: (0,
                            i.k6)((function() {
                                var n;
                                return [(0,
                                i.bo)(((0,
                                i.uX)(),
                                (0,
                                i.CE)("div", _, t[0] || (t[0] = [(0,
                                i.Lk)("div", null, "连送", -1), (0,
                                i.Lk)("div", null, "空格", -1)]))), [[d, (0,
                                c.R1)(S.aG)("LIVE_GIFT_MULTIFEEND_GIFT", {
                                    count: k,
                                    source_type: "QUICK_SEND",
                                    gift_id: null === (n = e.$props.gift) || void 0 === n ? void 0 : n.id
                                })]])]
                            }
                            )),
                            _: 2
                        }, 1032, ["progress"])) : ((0,
                        i.uX)(),
                        (0,
                        i.CE)(i.FK, {
                            key: 1
                        }, [(0,
                        i.eW)(" 送" + (0,
                        u.v_)((b = k,
                        f()(b) && b >= 1e4 ? "".concat((b / 1e4).toFixed(0), "万") : b)) + "个 ", 1)], 64))], 42, T)
                    }
                    )), 128))])), [[d, (0,
                    c.R1)(S.aG)("LIVE_BUCK_GIFT_PANEL", {
                        gift_id: null === (n = a.gift) || void 0 === n ? void 0 : n.id,
                        source_type: "PANEL"
                    })]])
                }
            }
        })
          , O = (0,
        C.A)(N, [["__scopeId", "data-v-6f5e4f44"]]);
        var V = n(16419)
          , j = n(15415)
          , W = n(11722)
          , B = n(16265)
          , F = ["data-hidden"]
          , D = {
            class: "name"
        }
          , U = {
            key: 0,
            class: "price"
        }
          , G = {
            class: "info-float-sending"
        }
          , z = {
            key: 0,
            class: "popup-num-batch"
        }
          , P = {
            key: 1,
            class: "popup-num-sum"
        }
          , Q = {
            class: "sum-nums"
        }
          , X = {
            key: 0,
            class: "send-float-sending-btn"
        }
          , Z = {
            key: 1,
            class: "send-float"
        }
          , K = {
            class: "info-float"
        }
          , H = {
            key: 0,
            class: "price"
        };
        const J = (0,
        i.pM)({
            __name: "GiftItem",
            props: {
                gift: {},
                protectTime: {},
                name: {},
                icon: {},
                marginRight: {},
                disabled: {
                    type: Boolean
                },
                maxBatchSize: {}
            },
            emits: ["send", "updateHoverStatus", "setHoverBatch"],
            setup: function(e, t) {
                var n = t.emit
                  , a = (0,
                B.jU)().screenLevel
                  , l = e
                  , r = (0,
                c.KR)()
                  , o = (0,
                c.KR)()
                  , s = n
                  , d = [10, 30, 188, 520, 666, 1314, 1e4, 2e4]
                  , v = (0,
                c.KR)(null)
                  , p = (0,
                c.KR)(!1)
                  , m = (0,
                c.KR)(!1)
                  , h = (0,
                i.Ht)()
                  , g = (0,
                i.EW)((function() {
                    return l.disabled || l.maxBatchSize <= d[0]
                }
                ))
                  , b = (0,
                i.EW)((function() {
                    var e;
                    return null === (e = l.gift) || void 0 === e ? void 0 : e.sendGiftNums
                }
                ))
                  , k = (0,
                i.EW)((function() {
                    return l.gift.protectSingleHoverTime / l.protectTime * 100
                }
                ))
                  , y = (0,
                i.EW)((function() {
                    var e, t;
                    return (null === (e = l.gift) || void 0 === e ? void 0 : e.isPressingGift) || (null === (t = l.gift) || void 0 === t ? void 0 : t.isShowPopupNums)
                }
                ));
                (0,
                i.wB)(m, (function(e) {
                    e || (p.value = !1)
                }
                )),
                (0,
                i.wB)(p, (function(e) {
                    s("updateHoverStatus", e)
                }
                ));
                var M = function(e) {
                    var t = a.value === B.DW.W_MINI_LEVEL ? 38 : 60
                      , n = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (e >= d[3])
                            return 324;
                        var t = d.filter((function(t) {
                            return t <= e
                        }
                        )).length;
                        return 70 * t + 10 * (t + 1)
                    }(l.gift.maxBatchSize) + 5;
                    if (e && v.value) {
                        var r = v.value.getBoundingClientRect()
                          , o = r.left + r.width / 2;
                        w.value = o - n / 2 < t ? [t - o + n / 2, 0] : [0, 0]
                    }
                }
                  , A = function() {
                    var e, t;
                    null !== (e = l.gift) && void 0 !== e && e.isStartContinGift && (0,
                    S.TO)("LIVE_GIFT_MULTIFEEND_GIFT", {
                        gift_id: null === (t = l.gift) || void 0 === t ? void 0 : t.id,
                        source_type: "QUICK_SEND",
                        count: 1
                    }),
                    s("send", 1)
                }
                  , L = (0,
                i.EW)((function() {
                    var e;
                    return null === (e = l.gift) || void 0 === e ? void 0 : e.isStartContinGift
                }
                ))
                  , E = (0,
                i.EW)((function() {
                    return {
                        marginRight: "".concat(l.marginRight, "px")
                    }
                }
                ))
                  , w = (0,
                c.KR)([0, 0]);
                return (0,
                B.ML)("mousemove", W.gU, {
                    target: r
                }),
                (0,
                B.ML)("mousemove", W.gU, {
                    target: o
                }),
                (0,
                B.ML)("mouseout", W.d$, {
                    target: r
                }),
                function(e, t) {
                    var n = (0,
                    i.gN)("log");
                    return (0,
                    i.uX)(),
                    (0,
                    i.CE)("div", {
                        ref_key: "giftItemRef",
                        ref: v,
                        class: "gift-item",
                        style: (0,
                        u.Tr)(E.value)
                    }, [(0,
                    i.bF)((0,
                    c.R1)(V.A), {
                        "popup-visible": p.value,
                        "onUpdate:popupVisible": t[3] || (t[3] = function(e) {
                            return p.value = e
                        }
                        ),
                        position: "top",
                        "animation-name": "trigger-emerge",
                        "popup-offset": -83,
                        disabled: e.disabled,
                        "mouse-enter-delay": 150,
                        "mouse-leave-delay": 250,
                        onPopupVisibleChange: M
                    }, {
                        content: (0,
                        i.k6)((function() {
                            return [(0,
                            i.bF)((0,
                            c.R1)(V.A), {
                                "popup-visible": m.value,
                                "onUpdate:popupVisible": t[2] || (t[2] = function(e) {
                                    return m.value = e
                                }
                                ),
                                disabled: g.value,
                                "arrow-style": {
                                    backgroundColor: "rgba(17, 17, 17, 0.9)",
                                    clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)"
                                },
                                "popup-offset": 13,
                                "popup-translate": w.value,
                                "mouse-leave-delay": 250,
                                position: "top",
                                "animation-name": "trigger-fade-in",
                                "show-arrow": ""
                            }, {
                                content: (0,
                                i.k6)((function() {
                                    return [(0,
                                    i.bF)(O, {
                                        "protect-time": l.protectTime,
                                        gift: l.gift,
                                        "batch-size-arr": d,
                                        "max-batch-size": e.maxBatchSize,
                                        onSend: t[0] || (t[0] = function(t) {
                                            return e.$emit("send", t)
                                        }
                                        ),
                                        onSetHoverBatch: t[1] || (t[1] = function(t) {
                                            return e.$emit("setHoverBatch", t)
                                        }
                                        )
                                    }, null, 8, ["protect-time", "gift", "max-batch-size"])]
                                }
                                )),
                                default: (0,
                                i.k6)((function() {
                                    var a, l, r;
                                    return [(0,
                                    i.Lk)("div", {
                                        class: "float-panel",
                                        onClick: A
                                    }, [L.value ? ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)(i.FK, {
                                        key: 0
                                    }, [(0,
                                    i.bF)((0,
                                    c.R1)(R), {
                                        shape: "circle",
                                        progress: k.value,
                                        "path-color": "rgba(0, 0, 0, 0)",
                                        "stroke-width": 3,
                                        radius: 27,
                                        clockwise: !1
                                    }, {
                                        default: (0,
                                        i.k6)((function() {
                                            var a, l, r;
                                            return [(0,
                                            i.bo)(((0,
                                            i.uX)(),
                                            (0,
                                            i.CE)("div", G, [(0,
                                            i.bF)(j.A, {
                                                class: "icon-float-sending",
                                                src: e.icon
                                            }, null, 8, ["src"]), 1 !== (null === (a = e.gift) || void 0 === a ? void 0 : a.sendGiftBatchLevel) && y.value && b.value > 1 ? ((0,
                                            i.uX)(),
                                            (0,
                                            i.CE)("div", z, (0,
                                            u.v_)("x" + (null === (l = e.gift) || void 0 === l ? void 0 : l.sendGiftBatchLevel)), 1)) : (0,
                                            i.Q3)("", !0), b.value && y.value && b.value > 1 ? ((0,
                                            i.uX)(),
                                            (0,
                                            i.CE)("div", P, [t[4] || (t[4] = (0,
                                            i.Lk)("span", {
                                                class: "sum-icon"
                                            }, "x", -1)), (0,
                                            i.Lk)("span", Q, (0,
                                            u.v_)(b.value), 1)])) : (0,
                                            i.Q3)("", !0)])), [[n, (0,
                                            c.R1)(S.aG)("LIVE_GIFT_MULTIFEEND_GIFT", {
                                                count: 1,
                                                source_type: "QUICK_SEND",
                                                gift_id: null === (r = e.$props.gift) || void 0 === r ? void 0 : r.id
                                            })]])]
                                        }
                                        )),
                                        _: 1
                                    }, 8, ["progress"]), 1 === (null === (a = e.gift) || void 0 === a ? void 0 : a.sendGiftBatchLevel) ? ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)("div", X, t[5] || (t[5] = [(0,
                                    i.Lk)("div", null, "连送", -1), (0,
                                    i.Lk)("div", null, "空格", -1)]))) : ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)("div", Z, "送1个"))], 64)) : ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)(i.FK, {
                                        key: 1
                                    }, [(0,
                                    i.Lk)("div", K, [(0,
                                    i.bF)(j.A, {
                                        class: "icon-float",
                                        src: e.icon
                                    }, null, 8, ["src"]), (0,
                                    c.R1)(f())(null === (l = e.gift) || void 0 === l ? void 0 : l.unitPrice) ? ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)("span", H, (0,
                                    u.v_)(null === (r = e.gift) || void 0 === r ? void 0 : r.unitPrice) + "快币", 1)) : (0,
                                    i.Q3)("", !0)]), t[6] || (t[6] = (0,
                                    i.Lk)("div", {
                                        class: "send-float"
                                    }, "送1个", -1))], 64))])]
                                }
                                )),
                                _: 1
                            }, 8, ["popup-visible", "disabled", "popup-translate"])]
                        }
                        )),
                        default: (0,
                        i.k6)((function() {
                            var t, n;
                            return [(0,
                            i.Lk)("div", {
                                ref_key: "itemRef",
                                ref: o,
                                class: "info",
                                "data-hidden": p.value
                            }, [(0,
                            i.bF)(j.A, {
                                class: "icon",
                                src: e.icon
                            }, null, 8, ["src"]), (0,
                            i.Lk)("span", D, [(0,
                            i.RG)(e.$slots, "name", (0,
                            u._B)((0,
                            i.Ng)({
                                name: e.name
                            }))), (0,
                            c.R1)(h).name ? (0,
                            i.Q3)("", !0) : ((0,
                            i.uX)(),
                            (0,
                            i.CE)(i.FK, {
                                key: 0
                            }, [(0,
                            i.eW)((0,
                            u.v_)(e.name), 1)], 64))]), (0,
                            c.R1)(f())(null === (t = e.gift) || void 0 === t ? void 0 : t.unitPrice) ? ((0,
                            i.uX)(),
                            (0,
                            i.CE)("span", U, (0,
                            u.v_)(null === (n = e.gift) || void 0 === n ? void 0 : n.unitPrice) + "快币", 1)) : (0,
                            i.Q3)("", !0)], 8, F)]
                        }
                        )),
                        _: 3
                    }, 8, ["popup-visible", "disabled"])], 4)
                }
            }
        })
          , Y = (0,
        C.A)(J, [["__scopeId", "data-v-6865163f"]]);
        n(60739);
        const q = n.p + "images/3f9ee064ccd75630745f.svg";
        var $ = n(22192)
          , ee = n(39510)
          , te = (n(50113),
        n(53751))
          , ne = {
            class: "send-panel"
        }
          , ae = ["onClick", "onMouseenter", "onMouseleave"]
          , le = {
            class: "btn-sending"
        };
        const re = (0,
        i.pM)({
            __name: "SendPanel",
            props: {
                protectTime: {},
                gift: {},
                batchSizeArr: {},
                maxBatchSize: {}
            },
            emits: ["send", "setHoverBatch"],
            setup: function(e, t) {
                var n = t.emit
                  , a = e
                  , l = n
                  , r = {
                    "0%": "rgba(255, 255, 255, 0.3)",
                    "100%": "rgba(255, 255, 255, 0.7)"
                }
                  , o = (0,
                i.EW)((function() {
                    return a.gift.protectSingleHoverTime / a.protectTime * 100
                }
                ))
                  , s = (0,
                c.KR)([]);
                return (0,
                i.sV)((function() {
                    var e = a.maxBatchSize || 1314
                      , t = a.batchSizeArr.filter((function(t) {
                        return t <= e
                    }
                    ));
                    s.value = t.map((function(e) {
                        return {
                            size: e,
                            isHover: !1
                        }
                    }
                    ))
                }
                )),
                function(e, t) {
                    var n, d = (0,
                    i.gN)("log");
                    return (0,
                    i.bo)(((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", ne, [((0,
                    i.uX)(!0),
                    (0,
                    i.CE)(i.FK, null, (0,
                    i.pI)(s.value, (function(n, v) {
                        var p, m, h, g, b, k = n.size;
                        return (0,
                        i.uX)(),
                        (0,
                        i.CE)("div", {
                            key: k,
                            class: (0,
                            u.C4)(["send-num", {
                                "sending-num": (null === (p = a.gift) || void 0 === p ? void 0 : p.isStartContinGift) && (null === (m = e.$props.gift) || void 0 === m ? void 0 : m.sendGiftBatchLevel) === k
                            }]),
                            onClick: function(e) {
                                return t = k,
                                null !== (n = a.gift) && void 0 !== n && n.isStartContinGift && (null === (r = a.gift) || void 0 === r ? void 0 : r.sendGiftBatchLevel) === t ? (0,
                                S.TO)("LIVE_GIFT_MULTIFEEND_GIFT", {
                                    gift_id: null === (o = a.gift) || void 0 === o ? void 0 : o.id,
                                    source_type: "PANEL",
                                    count: t
                                }) : (0,
                                S.TO)("LIVE_BUCK_GIFT_PANEL", {
                                    gift_id: null === (i = a.gift) || void 0 === i ? void 0 : i.id,
                                    source_type: "PANEL",
                                    count: t
                                }),
                                void l("send", t);
                                var t, n, r, o, i
                            },
                            onMouseenter: function(e) {
                                return function(e, t) {
                                    s.value[e].isHover = !0,
                                    l("setHoverBatch", t)
                                }(v, k)
                            },
                            onMouseleave: function(e) {
                                return function(e) {
                                    s.value[e].isHover = !1,
                                    l("setHoverBatch", -1)
                                }(v)
                            }
                        }, [null !== (h = a.gift) && void 0 !== h && h.isStartContinGift && (null === (g = e.$props.gift) || void 0 === g ? void 0 : g.sendGiftBatchLevel) === k ? ((0,
                        i.uX)(),
                        (0,
                        i.Wv)((0,
                        c.R1)(R), {
                            key: 0,
                            shape: "rectangle",
                            "rect-dimensions": [70, 33, 4],
                            progress: o.value,
                            color: r,
                            "path-color": "#FE3666",
                            "stroke-width": 2,
                            clockwise: !1
                        }, {
                            default: (0,
                            i.k6)((function() {
                                var n;
                                return [(0,
                                i.bo)(((0,
                                i.uX)(),
                                (0,
                                i.CE)("div", le, t[0] || (t[0] = [(0,
                                i.Lk)("div", null, "连送", -1), (0,
                                i.Lk)("div", null, "空格", -1)]))), [[d, (0,
                                c.R1)(S.aG)("LIVE_GIFT_MULTIFEEND_GIFT", {
                                    count: k,
                                    source_type: "PANEL",
                                    gift_id: null === (n = e.$props.gift) || void 0 === n ? void 0 : n.id
                                })]])]
                            }
                            )),
                            _: 2
                        }, 1032, ["progress"])) : ((0,
                        i.uX)(),
                        (0,
                        i.CE)(i.FK, {
                            key: 1
                        }, [(0,
                        i.eW)(" 送" + (0,
                        u.v_)((b = k,
                        f()(b) && b >= 1e4 ? "".concat((b / 1e4).toFixed(0), "万") : b)) + "个 ", 1)], 64))], 42, ae)
                    }
                    )), 128))])), [[d, (0,
                    c.R1)(S.aG)("LIVE_BUCK_GIFT_PANEL", {
                        gift_id: null === (n = a.gift) || void 0 === n ? void 0 : n.id,
                        source_type: "PANEL"
                    })]])
                }
            }
        })
          , oe = (0,
        C.A)(re, [["__scopeId", "data-v-73363ace"]]);
        var ie = ["data-hidden"]
          , ue = {
            class: "name"
        }
          , ce = {
            key: 0,
            class: "price"
        }
          , se = ["src"]
          , de = {
            class: "info-float-sending"
        }
          , fe = {
            key: 0,
            class: "popup-num-batch"
        }
          , ve = {
            key: 1,
            class: "popup-num-sum"
        }
          , pe = {
            class: "sum-nums"
        }
          , me = {
            key: 0,
            class: "send-float-sending-btn"
        }
          , he = {
            key: 1,
            class: "sending-float-info"
        }
          , ge = {
            class: "info-float"
        }
          , be = {
            key: 0,
            class: "price"
        };
        const ke = (0,
        i.pM)({
            __name: "giftItem",
            props: {
                name: {},
                icon: {},
                gift: {},
                protectTime: {},
                price: {},
                disabled: {
                    type: Boolean
                },
                maxBatchSize: {}
            },
            emits: ["send", "updateHoverStatus", "setHoverBatch"],
            setup: function(e, t) {
                var n = t.emit
                  , a = e
                  , l = (0,
                c.KR)()
                  , r = (0,
                c.KR)()
                  , o = n
                  , s = [10, 30, 188, 520, 666, 1314, 1e4, 2e4]
                  , d = (0,
                c.KR)(null)
                  , v = (0,
                c.KR)(!1)
                  , p = (0,
                c.KR)(!1)
                  , m = (0,
                i.EW)((function() {
                    return a.disabled || a.maxBatchSize <= s[0]
                }
                ))
                  , h = (0,
                i.Ht)()
                  , g = (0,
                i.EW)((function() {
                    var e;
                    return null === (e = a.gift) || void 0 === e ? void 0 : e.sendGiftNums
                }
                ))
                  , b = (0,
                i.EW)((function() {
                    return a.gift.protectSingleHoverTime / a.protectTime * 100
                }
                ))
                  , k = (0,
                i.EW)((function() {
                    var e, t;
                    return (null === (e = a.gift) || void 0 === e ? void 0 : e.isPressingGift) || (null === (t = a.gift) || void 0 === t ? void 0 : t.isShowPopupNums)
                }
                ));
                (0,
                i.wB)(p, (function(e) {
                    e || (v.value = !1)
                }
                )),
                (0,
                i.wB)(v, (function(e) {
                    o("updateHoverStatus", e)
                }
                ));
                var y = function() {
                    var e, t;
                    null !== (e = a.gift) && void 0 !== e && e.isStartContinGift && (0,
                    S.TO)("LIVE_GIFT_MULTIFEEND_GIFT", {
                        gift_id: null === (t = a.gift) || void 0 === t ? void 0 : t.id,
                        source_type: "PANEL",
                        count: 1
                    }),
                    o("send", 1)
                }
                  , M = (0,
                i.EW)((function() {
                    var e;
                    return null === (e = a.gift) || void 0 === e ? void 0 : e.isStartContinGift
                }
                ))
                  , A = (0,
                c.KR)([0, 0]);
                return (0,
                B.ML)("mousemove", W.gU, {
                    target: l
                }),
                (0,
                B.ML)("mousemove", W.gU, {
                    target: r
                }),
                (0,
                B.ML)("mouseout", W.d$, {
                    target: l
                }),
                function(e, t) {
                    var n = (0,
                    i.gN)("log");
                    return (0,
                    i.uX)(),
                    (0,
                    i.CE)("div", {
                        ref_key: "giftItemRef",
                        ref: d,
                        class: "gift-item"
                    }, [(0,
                    i.bF)((0,
                    c.R1)(V.A), {
                        "popup-visible": v.value,
                        "onUpdate:popupVisible": t[3] || (t[3] = function(e) {
                            return v.value = e
                        }
                        ),
                        position: "top",
                        "animation-name": "trigger-emerge",
                        "popup-offset": -112,
                        "update-at-scroll": !0,
                        "scroll-to-close": !1,
                        disabled: e.disabled,
                        "mouse-enter-delay": 150,
                        "mouse-leave-delay": 250,
                        "render-to-body": !1,
                        "popup-container": d.value
                    }, {
                        content: (0,
                        i.k6)((function() {
                            return [(0,
                            i.bF)((0,
                            c.R1)(V.A), {
                                "popup-visible": p.value,
                                "onUpdate:popupVisible": t[2] || (t[2] = function(e) {
                                    return p.value = e
                                }
                                ),
                                disabled: m.value,
                                "arrow-style": {
                                    backgroundColor: "rgba(17, 17, 17, 0.9)",
                                    clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)"
                                },
                                "popup-offset": 13,
                                "popup-translate": A.value,
                                "mouse-leave-delay": 250,
                                position: "top",
                                "animation-name": "trigger-fade-in",
                                "show-arrow": ""
                            }, {
                                content: (0,
                                i.k6)((function() {
                                    return [(0,
                                    i.bF)(oe, {
                                        "protect-time": a.protectTime,
                                        gift: a.gift,
                                        "batch-size-arr": s,
                                        "max-batch-size": e.maxBatchSize,
                                        onSend: t[0] || (t[0] = function(t) {
                                            return e.$emit("send", t)
                                        }
                                        ),
                                        onSetHoverBatch: t[1] || (t[1] = function(t) {
                                            return e.$emit("setHoverBatch", t)
                                        }
                                        )
                                    }, null, 8, ["protect-time", "gift", "max-batch-size"])]
                                }
                                )),
                                default: (0,
                                i.k6)((function() {
                                    var l;
                                    return [(0,
                                    i.Lk)("div", {
                                        class: "float-panel",
                                        onClick: y
                                    }, [M.value ? ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)(i.FK, {
                                        key: 0
                                    }, [(0,
                                    i.bF)((0,
                                    c.R1)(R), {
                                        shape: "circle",
                                        progress: b.value,
                                        "path-color": "rgba(0, 0, 0, 0)",
                                        "stroke-width": 4.5,
                                        radius: 34,
                                        clockwise: !1
                                    }, {
                                        default: (0,
                                        i.k6)((function() {
                                            var l, r, o;
                                            return [(0,
                                            i.bo)(((0,
                                            i.uX)(),
                                            (0,
                                            i.CE)("div", de, [(0,
                                            i.bF)(j.A, {
                                                class: "icon-float-sending",
                                                src: e.icon
                                            }, null, 8, ["src"]), 1 !== (null === (l = a.gift) || void 0 === l ? void 0 : l.sendGiftBatchLevel) && k.value && g.value > 1 ? ((0,
                                            i.uX)(),
                                            (0,
                                            i.CE)("div", fe, (0,
                                            u.v_)("x" + (null === (r = a.gift) || void 0 === r ? void 0 : r.sendGiftBatchLevel)), 1)) : (0,
                                            i.Q3)("", !0), g.value && k.value && g.value > 1 ? ((0,
                                            i.uX)(),
                                            (0,
                                            i.CE)("div", ve, [t[4] || (t[4] = (0,
                                            i.Lk)("span", {
                                                class: "sum-icon"
                                            }, "x", -1)), (0,
                                            i.Lk)("span", pe, (0,
                                            u.v_)(g.value), 1)])) : (0,
                                            i.Q3)("", !0)])), [[n, (0,
                                            c.R1)(S.aG)("LIVE_GIFT_MULTIFEEND_GIFT", {
                                                count: 1,
                                                source_type: "PANEL",
                                                gift_id: null === (o = e.$props.gift) || void 0 === o ? void 0 : o.id
                                            })]])]
                                        }
                                        )),
                                        _: 1
                                    }, 8, ["progress"]), 1 === (null === (l = e.gift) || void 0 === l ? void 0 : l.sendGiftBatchLevel) ? ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)("div", me, t[5] || (t[5] = [(0,
                                    i.Lk)("div", null, "连送", -1), (0,
                                    i.Lk)("div", null, "空格", -1)]))) : ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)("div", he, "送1个"))], 64)) : ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)(i.FK, {
                                        key: 1
                                    }, [(0,
                                    i.Lk)("div", ge, [(0,
                                    i.bF)(j.A, {
                                        class: "icon-float",
                                        src: e.icon
                                    }, null, 8, ["src"]), (0,
                                    c.R1)(f())(e.price) ? ((0,
                                    i.uX)(),
                                    (0,
                                    i.CE)("span", be, (0,
                                    u.v_)(e.price) + "快币", 1)) : (0,
                                    i.Q3)("", !0)]), t[6] || (t[6] = (0,
                                    i.Lk)("div", {
                                        class: "send-float-info"
                                    }, "送1个", -1))], 64))])]
                                }
                                )),
                                _: 1
                            }, 8, ["popup-visible", "disabled", "popup-translate"])]
                        }
                        )),
                        default: (0,
                        i.k6)((function() {
                            var t, n;
                            return [(0,
                            i.Lk)("div", {
                                ref_key: "itemRef",
                                ref: r,
                                class: "info",
                                "data-hidden": v.value
                            }, [(0,
                            i.bF)(j.A, {
                                class: "icon",
                                src: e.icon
                            }, null, 8, ["src"]), (0,
                            i.Lk)("div", ue, [(0,
                            i.RG)(e.$slots, "name", (0,
                            u._B)((0,
                            i.Ng)({
                                name: e.name
                            }))), (0,
                            c.R1)(h).name ? (0,
                            i.Q3)("", !0) : ((0,
                            i.uX)(),
                            (0,
                            i.CE)(i.FK, {
                                key: 0
                            }, [(0,
                            i.eW)((0,
                            u.v_)(e.name), 1)], 64))]), (0,
                            c.R1)(f())(e.price) ? ((0,
                            i.uX)(),
                            (0,
                            i.CE)("div", ce, (0,
                            u.v_)(e.price) + "快币", 1)) : (0,
                            i.Q3)("", !0), null !== (t = e.gift) && void 0 !== t && t.subscriptImageUrl ? ((0,
                            i.uX)(),
                            (0,
                            i.CE)("img", {
                                key: 1,
                                class: "gift-label",
                                src: null === (n = e.gift) || void 0 === n ? void 0 : n.subscriptImageUrl[0].url
                            }, null, 8, se)) : (0,
                            i.Q3)("", !0)], 8, ie)]
                        }
                        )),
                        _: 3
                    }, 8, ["popup-visible", "disabled", "popup-container"])], 512)
                }
            }
        })
          , ye = (0,
        C.A)(ke, [["__scopeId", "data-v-28d2b028"]]);
        var Me, Ae;
        !function(e) {
            e[e.NO_SORT = 0] = "NO_SORT",
            e[e.ASCEND = 1] = "ASCEND",
            e[e.DESCEND = 2] = "DESCEND"
        }(Me || (Me = {})),
        function(e) {
            e[e.NORMAL = 0] = "NORMAL",
            e[e.OTHER = 1] = "OTHER"
        }(Ae || (Ae = {}));
        var Le = {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none"
        }
          , Ee = {
            "clip-path": "url(#clip0)"
        }
          , we = {
            mask: "url(#mask0)"
        }
          , Ce = ["fill"]
          , Re = ["fill"];
        const Ie = (0,
        i.pM)({
            __name: "sort-icon",
            props: {
                status: {},
                isActive: {
                    type: Boolean
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                i.EW)((function() {
                    return t.isActive && t.status === Me.DESCEND
                }
                ))
                  , a = (0,
                i.EW)((function() {
                    return t.isActive && t.status === Me.ASCEND
                }
                ));
                return function(e, t) {
                    return (0,
                    i.uX)(),
                    (0,
                    i.CE)("svg", Le, [(0,
                    i.Lk)("g", Ee, [t[0] || (t[0] = (0,
                    i.Lk)("mask", {
                        id: "mask0",
                        style: {
                            "mask-type": "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "16",
                        height: "16"
                    }, [(0,
                    i.Lk)("path", {
                        d: "M16 0V16H0L0 0L16 0Z",
                        fill: "#FE3666"
                    })], -1)), (0,
                    i.Lk)("g", we, [(0,
                    i.Lk)("path", {
                        d: "M8.88965 13.3335H10.223L10.2229 4.90578L12.6345 6.23314L13.2774 5.06505L8.88965 2.65002V13.3335Z",
                        fill: n.value ? "#FE3666" : "#A3A3A8"
                    }, null, 8, Ce), (0,
                    i.Lk)("path", {
                        d: "M6.88965 2.66696H5.55632L5.55632 11.0972L3.14483 9.76979L2.50191 10.9379L6.88965 13.3529L6.88965 2.66696Z",
                        fill: a.value ? "#FE3666" : "#A3A3A8"
                    }, null, 8, Re)])]), t[1] || (t[1] = (0,
                    i.Lk)("defs", null, [(0,
                    i.Lk)("clipPath", {
                        id: "clip0"
                    }, [(0,
                    i.Lk)("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    })])], -1))])
                }
            }
        });
        var Se = {
            class: "tabs-container"
        }
          , xe = {
            class: "tabs-bar"
        }
          , Te = ["onClick"]
          , _e = {
            class: "tab-title"
        };
        const Ne = (0,
        i.pM)({
            __name: "giftTab",
            props: {
                modelValue: {},
                tabList: {}
            },
            emits: ["update:modelValue", "changeTabItemExtra"],
            setup: function(e, t) {
                var n = t.expose
                  , a = t.emit
                  , l = e
                  , r = (0,
                c.KR)(l.modelValue)
                  , o = a
                  , s = function(e) {
                    e === Ae.NORMAL && (0,
                    S.TO)("GIFT_PANEL_TAB", {
                        type: "NORMAL_GIFT_PANEL"
                    }),
                    r.value = e,
                    o("update:modelValue", e)
                };
                return n({
                    handleTabClick: s
                }),
                function(e, t) {
                    return (0,
                    i.uX)(),
                    (0,
                    i.CE)("div", Se, [(0,
                    i.Lk)("div", xe, [((0,
                    i.uX)(!0),
                    (0,
                    i.CE)(i.FK, null, (0,
                    i.pI)(l.tabList, (function(e) {
                        return (0,
                        i.uX)(),
                        (0,
                        i.CE)("div", {
                            key: e.key,
                            class: (0,
                            u.C4)(["tab-header-item", {
                                "tab-active": e.key === r.value
                            }]),
                            onClick: function(t) {
                                return s(e.key)
                            }
                        }, [(0,
                        i.Lk)("div", _e, (0,
                        u.v_)(e.title), 1), e.canSort ? ((0,
                        i.uX)(),
                        (0,
                        i.Wv)(Ie, {
                            key: 0,
                            class: "sort-btn",
                            "is-active": e.key === r.value,
                            status: e.sortStatus,
                            onClick: function(t) {
                                return function(e) {
                                    o("changeTabItemExtra", {
                                        tabIndex: e.key,
                                        hasSort: !0,
                                        sortStatus: e.sortAscend ? Me.ASCEND : Me.DESCEND,
                                        sortAscend: !e.sortAscend
                                    }),
                                    e.key === Ae.NORMAL && (0,
                                    S.TO)("GIFT_PANEL_SORT_BUTTON", {
                                        type: e.sortStatus + 1
                                    })
                                }(e)
                            }
                        }, null, 8, ["is-active", "status", "onClick"])) : (0,
                        i.Q3)("", !0)], 10, Te)
                    }
                    )), 128))]), (0,
                    i.RG)(e.$slots, "default"), t[0] || (t[0] = (0,
                    i.Lk)("div", {
                        class: "placeholder"
                    }, null, -1))])
                }
            }
        })
          , Oe = (0,
        C.A)(Ne, [["__scopeId", "data-v-e38c9c18"]])
          , Ve = (0,
        i.pM)({
            __name: "giftTabItem",
            props: {
                title: {},
                index: {},
                activeIndex: {},
                cansort: {
                    type: Boolean
                }
            },
            setup: function(e) {
                var t = (0,
                c.KR)()
                  , n = e
                  , a = (0,
                i.EW)((function() {
                    return n.index === n.activeIndex
                }
                ));
                return function(e, n) {
                    return a.value ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", {
                        key: 0,
                        ref_key: "tabPanelRef",
                        ref: t,
                        class: "tab-panel"
                    }, [(0,
                    i.RG)(e.$slots, "default")], 512)) : (0,
                    i.Q3)("", !0)
                }
            }
        })
          , je = (0,
        C.A)(Ve, [["__scopeId", "data-v-4f68ee1f"]]);
        var We = n(50242)
          , Be = n(88506)
          , Fe = n(72708)
          , De = n(67357);
        function Ue(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ue(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const ze = (0,
        i.pM)(Ge(Ge({}, {
            inheritAttrs: !0
        }), {}, {
            __name: "index",
            setup: function(e) {
                var t = (0,
                B.Pj)(Fe.mH)
                  , n = (0,
                c.KR)()
                  , a = (0,
                c.KR)(1)
                  , r = (0,
                c.KR)(null)
                  , u = (0,
                c.KR)(0)
                  , d = (0,
                c.KR)([])
                  , f = (0,
                i.WQ)(s.h7)
                  , v = (0,
                i.WQ)(s.jS)
                  , p = null
                  , m = (0,
                Be.i)({
                    source: "PANEL",
                    beforeSend: function(e, t, n) {
                        var a = n.isCombo
                          , l = n.anchor
                          , r = n.liveStream;
                        (0,
                        S.TO)("QUICK_SEND_GIFT_BUTTON", {
                            gift_id: e.id,
                            is_combo: a,
                            anchor_user_id: l.id,
                            live_stream_id: r.id
                        })
                    }
                }).sendGift;
                (0,
                i.wB)(v, (function(e) {
                    d.value = e.map((function(e) {
                        return Ge(Ge({}, e), {}, {
                            protectSingleHoverTime: 0,
                            protectCrossHoverTime: 0,
                            sendGiftBatchLevel: 1,
                            sendGiftNums: 0,
                            isHover: !1,
                            isPressingGift: !1,
                            isStartContinGift: !1,
                            canContinuous: !1,
                            isClickSums: 0,
                            isShowPopupNums: !1,
                            currentHoverBatch: -1
                        })
                    }
                    ))
                }
                ), {
                    immediate: !0
                });
                var h = (0,
                c.KR)([{
                    key: Ae.NORMAL,
                    title: "礼物",
                    canSort: !0,
                    hasSort: !1,
                    sortAscend: !1,
                    sortStatus: Me.NO_SORT,
                    giftList: d
                }]);
                (0,
                i.wB)(u, (function(e, t) {
                    if (e === Ae.NORMAL && (0,
                    S.cS)("GIFT_PANEL_TAB", {
                        type: "NORMAL_GIFT_PANEL"
                    }),
                    void 0 !== t) {
                        var n = h.value[t];
                        n.hasSort = !1,
                        n.sortAscend = !1,
                        n.sortStatus = Me.NO_SORT
                    }
                }
                ), {
                    immediate: !0
                });
                var g = function() {
                    var e = (0,
                    l.A)(o().mark((function e(l, r) {
                        var i, u, c = arguments;
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = c.length > 2 && void 0 !== c[2] && c[2],
                                    e.prev = 1,
                                    "panel" !== t.longSendGiftType && t.setLongSendGiftType("panel"),
                                    n.value = l,
                                    a.value = r,
                                    l.sendGiftBatchLevel = r,
                                    i || l.isClickSums++,
                                    u = l.isStartContinGift,
                                    n.value.isShowPopupNums = !0,
                                    p && clearTimeout(p),
                                    p = setTimeout((function() {
                                        n.value.isShowPopupNums = !1,
                                        clearTimeout(p)
                                    }
                                    ), 500),
                                    l.sendGiftNums++,
                                    l.isStartContinGift = !0,
                                    (0,
                                    S.TO)("QUICK_SEND_GIFT_BUTTON", {
                                        gift_id: l.id,
                                        count: r,
                                        source_type: "PANEL"
                                    }),
                                    e.next = 16,
                                    m(l, r, u);
                                case 16:
                                    e.next = 23;
                                    break;
                                case 18:
                                    e.prev = 18,
                                    e.t0 = e.catch(1),
                                    (0,
                                    De.A)((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.error_msg) || "送礼物失败", {
                                        type: "fail",
                                        teleport: "body"
                                    }),
                                    k(),
                                    console.error("送礼失败", e.t0);
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 18]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                (0,
                i.wB)((function() {
                    return t.longSendGiftType
                }
                ), (function(e) {
                    "bar" === e && k()
                }
                )),
                (0,
                i.sV)((function() {
                    f()
                }
                ));
                var b = (0,
                We.R)(g, n, a, 1e4, 3e4)
                  , k = (b.isPressing,
                b.stopListenLongSendGift);
                return function(e, t) {
                    return (0,
                    i.bo)(((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", {
                        ref_key: "tabPanelRef",
                        ref: r,
                        class: "gift-panel"
                    }, [(0,
                    i.bF)(Oe, {
                        modelValue: u.value,
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return u.value = e
                        }
                        ),
                        "tab-list": h.value,
                        onChangeTabItemExtra: t[1] || (t[1] = function(e) {
                            return function(e) {
                                try {
                                    var t = e.tabIndex
                                      , n = e.sortAscend
                                      , a = e.hasSort
                                      , l = e.sortStatus
                                      , r = h.value.find((function(e) {
                                        return e.key === t
                                    }
                                    ));
                                    if (!r)
                                        return;
                                    r.hasSort = a,
                                    r.sortStatus = l,
                                    r.sortAscend = n,
                                    t === Ae.NORMAL && f(n ? Me.ASCEND : Me.DESCEND)
                                } catch (e) {
                                    console.error(e)
                                }
                            }(e)
                        }
                        )
                    }, {
                        default: (0,
                        i.k6)((function() {
                            return [((0,
                            i.uX)(!0),
                            (0,
                            i.CE)(i.FK, null, (0,
                            i.pI)(h.value, (function(e, n) {
                                return (0,
                                i.uX)(),
                                (0,
                                i.Wv)(je, {
                                    key: e.key,
                                    title: e.title,
                                    cansort: e.canSort,
                                    sortascend: e.sortAscend,
                                    index: n,
                                    "active-index": u.value
                                }, {
                                    default: (0,
                                    i.k6)((function() {
                                        return [((0,
                                        i.uX)(!0),
                                        (0,
                                        i.CE)(i.FK, null, (0,
                                        i.pI)(e.giftList, (function(e, t) {
                                            var n;
                                            return (0,
                                            i.uX)(),
                                            (0,
                                            i.Wv)(ye, {
                                                key: t,
                                                name: e.name,
                                                icon: null == e || null === (n = e.picUrl[0]) || void 0 === n ? void 0 : n.url,
                                                gift: e,
                                                "protect-time": 1e4,
                                                price: e.unitPrice,
                                                "max-batch-size": e.maxBatchSize,
                                                onSend: function(t) {
                                                    return g(e, t)
                                                },
                                                onUpdateHoverStatus: function(t) {
                                                    return function(e, t) {
                                                        e.isHover = t
                                                    }(e, t)
                                                },
                                                onSetHoverBatch: function(t) {
                                                    return function(e, t) {
                                                        e.currentHoverBatch = t
                                                    }(e, t)
                                                }
                                            }, null, 8, ["name", "icon", "gift", "price", "max-batch-size", "onSend", "onUpdateHoverStatus", "onSetHoverBatch"])
                                        }
                                        )), 128)), t[2] || (t[2] = (0,
                                        i.Lk)("div", {
                                            class: "later-placeholder"
                                        }, null, -1))]
                                    }
                                    )),
                                    _: 2
                                }, 1032, ["title", "cansort", "sortascend", "index", "active-index"])
                            }
                            )), 128))]
                        }
                        )),
                        _: 1
                    }, 8, ["modelValue", "tab-list"])], 512)), [[te.aG, (0,
                    c.R1)(ee.G_)]])
                }
            }
        }))
          , Pe = (0,
        C.A)(ze, [["__scopeId", "data-v-34d63eba"]]);
        var Qe = n(62535)
          , Xe = n(22720)
          , Ze = n(60240)
          , Ke = ["src"]
          , He = {
            class: "info"
        }
          , Je = ["src"]
          , Ye = {
            key: 0
        };
        const qe = (0,
        i.pM)({
            __name: "MoreGift",
            setup: function(e) {
                var t = (0,
                i.WQ)(s.O4)
                  , n = function() {
                    var e = (0,
                    l.A)(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    Qe.t)();
                                case 2:
                                    e.sent && (ee.G_.value ? (0,
                                    ee.jD)() : (0,
                                    ee.WU)());
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0,
                Xe.ZC)(t, (function() {
                    0 === t.value.length && (0,
                    Ze.ho)({
                        name: "【P0】直播间送礼",
                        src: "pure-components/Live/Footbar/GiftBar/MoreGift.vue",
                        event_type: "error",
                        extra_info: JSON.stringify({
                            event: "礼物列表数据为空"
                        })
                    })
                }
                )),
                function(e, a) {
                    return (0,
                    c.R1)(t).length ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", {
                        key: 0,
                        class: "more-gift",
                        onClick: n
                    }, [(0,
                    i.Lk)("img", {
                        class: "icon",
                        src: (0,
                        c.R1)(q),
                        alt: ""
                    }, null, 8, Ke), (0,
                    i.Lk)("div", He, [a[0] || (a[0] = (0,
                    i.Lk)("span", {
                        class: "name"
                    }, "更多礼物", -1)), (0,
                    i.Lk)("img", {
                        src: (0,
                        c.R1)($),
                        alt: ""
                    }, null, 8, Je)]), (0,
                    c.R1)(ee.G_) ? ((0,
                    i.uX)(),
                    (0,
                    i.CE)("div", Ye, [((0,
                    i.uX)(),
                    (0,
                    i.Wv)(i.Im, {
                        to: (0,
                        c.R1)(ee.id)
                    }, [(0,
                    i.bF)(Pe)], 8, ["to"]))])) : (0,
                    i.Q3)("", !0)])) : (0,
                    i.Q3)("", !0)
                }
            }
        })
          , $e = (0,
        C.A)(qe, [["__scopeId", "data-v-34e86e9d"]]);
        var et = n(85507)
          , tt = n(40303)
          , nt = n(49692)
          , at = n(77519)
          , lt = n(79628)
          , rt = {
            key: 0,
            class: "recharge"
        }
          , ot = {
            class: "con"
        }
          , it = {
            key: 0,
            class: "account"
        }
          , ut = {
            key: 1,
            class: "account"
        }
          , ct = {
            class: "con"
        }
          , st = {
            class: "kwai-ico"
        }
          , dt = {
            class: "kwai-num"
        }
          , ft = {
            key: 1,
            class: "recharge"
        };
        const vt = (0,
        i.pM)({
            __name: "RechargeResult",
            props: {
                currentUser: {}
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                B.Pj)(nt.W)
                  , a = (0,
                c.KR)(null)
                  , l = (0,
                c.KR)("");
                function r(e) {
                    (0,
                    S.TO)("pay_continue", {
                        status: e,
                        balance: n.ksCoin
                    }),
                    (0,
                    et.nn)(),
                    a.value.hide()
                }
                function o() {
                    l.value = ""
                }
                function s() {
                    (0,
                    S.cS)("charge_success", {
                        type: l.value,
                        balance: n.ksCoin
                    })
                }
                return (0,
                B.iX)(tt.mO, (function(e) {
                    var t = e.resultType;
                    "success" === t && n.refetchPayInfo(),
                    l.value = t,
                    a.value.show()
                }
                )),
                function(e, d) {
                    return (0,
                    i.uX)(),
                    (0,
                    i.Wv)(lt.A, {
                        ref_key: "modalRef",
                        ref: a,
                        width: "426px",
                        class: "result-modal",
                        onAfterHide: o,
                        onAfterShow: s
                    }, {
                        default: (0,
                        i.k6)((function() {
                            return ["success" === l.value ? ((0,
                            i.uX)(),
                            (0,
                            i.CE)("div", rt, [d[6] || (d[6] = (0,
                            i.Lk)("h3", null, [(0,
                            i.Lk)("i", {
                                class: "success"
                            }), (0,
                            i.Lk)("span", null, "充值成功")], -1)), (0,
                            i.Lk)("ul", null, [(0,
                            i.Lk)("li", null, [d[2] || (d[2] = (0,
                            i.Lk)("div", {
                                class: "title"
                            }, " 充值账号 ", -1)), (0,
                            i.Lk)("div", ot, [t.currentUser.id ? ((0,
                            i.uX)(),
                            (0,
                            i.CE)("span", it, (0,
                            u.v_)(t.currentUser.name) + "(快手号:" + (0,
                            u.v_)(t.currentUser.id) + ") ", 1)) : ((0,
                            i.uX)(),
                            (0,
                            i.CE)("span", ut, (0,
                            u.v_)(t.currentUser.name) + "(快手ID:" + (0,
                            u.v_)(t.currentUser.originUserId) + ") ", 1))])]), (0,
                            i.Lk)("li", null, [d[4] || (d[4] = (0,
                            i.Lk)("div", {
                                class: "title"
                            }, " 账号余额 ", -1)), (0,
                            i.Lk)("div", ct, [(0,
                            i.Lk)("span", st, [(0,
                            i.Lk)("i", dt, (0,
                            u.v_)((0,
                            c.R1)(n).ksCoin), 1), d[3] || (d[3] = (0,
                            i.eW)(" 个 "))])])])]), (0,
                            i.bF)(at.A, {
                                type: "primary",
                                class: "recharge-btn",
                                onClick: d[0] || (d[0] = function(e) {
                                    return r("success")
                                }
                                )
                            }, {
                                default: (0,
                                i.k6)((function() {
                                    return d[5] || (d[5] = [(0,
                                    i.eW)(" 继续充值 ")])
                                }
                                )),
                                _: 1
                            })])) : "timeout" === l.value ? ((0,
                            i.uX)(),
                            (0,
                            i.CE)("div", ft, [d[8] || (d[8] = (0,
                            i.Lk)("h3", null, [(0,
                            i.Lk)("i", {
                                class: "fail"
                            }), (0,
                            i.Lk)("span", null, "支付结果获取失败")], -1)), d[9] || (d[9] = (0,
                            i.Lk)("p", {
                                class: "timeout"
                            }, " 支付超时或支付未成功, 请重试 ", -1)), (0,
                            i.bF)(at.A, {
                                type: "primary",
                                class: "recharge-btn",
                                onClick: d[1] || (d[1] = function(e) {
                                    return r("fail")
                                }
                                )
                            }, {
                                default: (0,
                                i.k6)((function() {
                                    return d[7] || (d[7] = [(0,
                                    i.eW)(" 再次充值 ")])
                                }
                                )),
                                _: 1
                            })])) : (0,
                            i.Q3)("", !0)]
                        }
                        )),
                        _: 1
                    }, 512)
                }
            }
        })
          , pt = (0,
        C.A)(vt, [["__scopeId", "data-v-b9de1518"]]);
        var mt = {
            class: "quick-recharge"
        }
          , ht = {
            class: "username"
        }
          , gt = ["src"]
          , bt = {
            key: 0
        }
          , kt = {
            key: 1
        }
          , yt = {
            class: "info"
        }
          , Mt = ["src"];
        const At = (0,
        i.pM)({
            __name: "QuickRecharge",
            props: {
                currentUser: {}
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                B.Pj)(nt.W)
                  , a = (0,
                c.KR)(null)
                  , l = (0,
                c.KR)("")
                  , r = (0,
                c.KR)("")
                  , o = (0,
                c.KR)(0)
                  , s = (0,
                c.KR)(0);
                function d() {
                    (0,
                    S.TO)("recharge", {
                        gift_name: r.value,
                        gift_cnt: o.value,
                        position: "charge_balance"
                    }),
                    a.value.hide(),
                    (0,
                    et.nn)({
                        money: s.value / n.depositRate
                    })
                }
                return (0,
                B.iX)(tt.oF, (function(e) {
                    var t = e.giftUrl
                      , i = e.giftName
                      , u = e.giftNum
                      , c = e.ksCoinRecharge;
                    l.value = t,
                    r.value = i,
                    o.value = u,
                    s.value = Math.max(c, n.minDepositFen / 100 * n.depositRate),
                    a.value.show()
                }
                )),
                function(e, n) {
                    return (0,
                    i.uX)(),
                    (0,
                    i.Wv)(lt.A, {
                        ref_key: "modalRef",
                        ref: a,
                        class: "quick-modal",
                        title: "充值",
                        width: "426px"
                    }, {
                        default: (0,
                        i.k6)((function() {
                            var e;
                            return [(0,
                            i.Lk)("div", mt, [(0,
                            i.Lk)("div", ht, [(0,
                            i.Lk)("img", {
                                src: null === (e = t.currentUser) || void 0 === e ? void 0 : e.avatar
                            }, null, 8, gt), t.currentUser.id ? ((0,
                            i.uX)(),
                            (0,
                            i.CE)("span", bt, (0,
                            u.v_)(t.currentUser.name) + "(快手号:" + (0,
                            u.v_)(t.currentUser.id) + ") ", 1)) : ((0,
                            i.uX)(),
                            (0,
                            i.CE)("span", kt, (0,
                            u.v_)(t.currentUser.name) + "(快手ID:" + (0,
                            u.v_)(t.currentUser.originUserId) + ") ", 1))]), (0,
                            i.Lk)("div", yt, [(0,
                            i.Lk)("p", null, [n[0] || (n[0] = (0,
                            i.eW)(" 快速补充")), (0,
                            i.Lk)("span", null, (0,
                            u.v_)(s.value), 1), n[1] || (n[1] = (0,
                            i.eW)("快币 "))]), (0,
                            i.Lk)("p", null, [(0,
                            i.eW)("用于送出" + (0,
                            u.v_)(o.value) + "个", 1), (0,
                            i.Lk)("img", {
                                src: l.value
                            }, null, 8, Mt)]), (0,
                            i.bF)(at.A, {
                                type: "primary",
                                class: "recharge-btn",
                                onClick: d
                            }, {
                                default: (0,
                                i.k6)((function() {
                                    return n[2] || (n[2] = [(0,
                                    i.eW)("充值")])
                                }
                                )),
                                _: 1
                            })])])]
                        }
                        )),
                        _: 1
                    }, 512)
                }
            }
        })
          , Lt = (0,
        C.A)(At, [["__scopeId", "data-v-e9b17d40"]]);
        function Et(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function wt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Et(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        n(23418),
        n(47764);
        const Ct = (0,
        i.pM)({
            __name: "index",
            props: {
                imgSize: {}
            },
            setup: function(e) {
                var t = (0,
                B.Pj)(Fe.mH)
                  , n = null
                  , a = e
                  , r = (0,
                c.KR)()
                  , d = (0,
                c.KR)(1)
                  , f = (0,
                i.WQ)(s.j0)
                  , v = (0,
                i.WQ)(s.nc)
                  , p = (0,
                i.WQ)(s.O4)
                  , m = (0,
                i.WQ)(s.Co)
                  , h = (0,
                c.KR)()
                  , g = function(e) {
                    var t = (0,
                    c.KR)(0)
                      , n = (0,
                    c.KR)(13.5)
                      , a = (0,
                    c.KR)(0)
                      , l = function() {
                        if (e.value) {
                            var l = e.value.getBoundingClientRect().width;
                            n.value = function(e) {
                                var t = (e - a.value) / a.value;
                                return Math.min(Math.max(11.5 + 2 * t, 11.5), 13.5)
                            }(l);
                            var r = Array.from(e.value.children)
                              , o = e.value.getBoundingClientRect()
                              , i = Number.POSITIVE_INFINITY;
                            r.forEach((function(e) {
                                var t = e.getBoundingClientRect();
                                t.top < o.top + o.height && t.top < i && (i = t.top)
                            }
                            )),
                            t.value = r.filter((function(e) {
                                var t = e.getBoundingClientRect();
                                return Math.abs(t.top - i) < 1
                            }
                            )).length
                        }
                    };
                    return (0,
                    i.sV)((function() {
                        if (e.value) {
                            a.value = e.value.getBoundingClientRect().width,
                            l();
                            var t = new ResizeObserver((function() {
                                l()
                            }
                            ));
                            t.observe(e.value),
                            (0,
                            i.hi)((function() {
                                t.disconnect()
                            }
                            ))
                        }
                    }
                    )),
                    {
                        visibleChildCount: t,
                        marginRight: n
                    }
                }(h)
                  , b = g.visibleChildCount
                  , k = g.marginRight
                  , y = (0,
                c.KR)([]);
                (0,
                i.wB)(f, (function() {
                    m()
                }
                )),
                (0,
                i.Gt)(s.B9, b);
                var M = (0,
                Be.i)({
                    source: "QUICK_SEND",
                    beforeSend: function(e, t, n) {
                        var a = n.isCombo
                          , l = n.anchor
                          , r = n.liveStream;
                        (0,
                        S.TO)("QUICK_SEND_GIFT_BUTTON", {
                            gift_id: e.id,
                            is_combo: a,
                            anchor_user_id: l.id,
                            live_stream_id: r.id
                        })
                    }
                }).sendGift
                  , A = function() {
                    var e = (0,
                    l.A)(o().mark((function e(a, l) {
                        var i, u, c = arguments;
                        return o().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = c.length > 2 && void 0 !== c[2] && c[2],
                                    e.prev = 1,
                                    "bar" !== t.longSendGiftType && t.setLongSendGiftType("bar"),
                                    r.value = a,
                                    d.value = l,
                                    a.sendGiftBatchLevel = l,
                                    i || a.isClickSums++,
                                    u = a.isStartContinGift,
                                    a.isStartContinGift = !0,
                                    (0,
                                    S.TO)("QUICK_SEND_GIFT_BUTTON", {
                                        gift_id: a.id,
                                        count: l,
                                        source_type: "QUICK_SEND"
                                    }),
                                    r.value.isShowPopupNums = !0,
                                    n && clearTimeout(n),
                                    n = setTimeout((function() {
                                        r.value.isShowPopupNums = !1,
                                        clearTimeout(n)
                                    }
                                    ), 500),
                                    a.sendGiftNums++,
                                    e.next = 16,
                                    M(a, l, u);
                                case 16:
                                    e.next = 23;
                                    break;
                                case 18:
                                    e.prev = 18,
                                    e.t0 = e.catch(1),
                                    (0,
                                    De.A)((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.error_msg) || "送礼物失败", {
                                        type: "fail",
                                        teleport: "body"
                                    }),
                                    E(),
                                    console.error("送礼失败", e.t0);
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 18]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
                  , L = (0,
                We.R)(A, r, d, 1e4, 3e4)
                  , E = (L.isPressing,
                L.stopListenLongSendGift);
                return (0,
                i.wB)((function() {
                    return t.longSendGiftType
                }
                ), (function(e) {
                    "panel" === e && E()
                }
                )),
                (0,
                i.wB)(p, (function(e) {
                    y.value = e.slice(0, 22).map((function(e) {
                        return wt(wt({}, e), {}, {
                            protectSingleHoverTime: 0,
                            protectCrossHoverTime: 0,
                            sendGiftBatchLevel: 1,
                            sendGiftNums: 0,
                            isHover: !1,
                            isPressingGift: !1,
                            isStartContinGift: !1,
                            canContinuous: !1,
                            isClickSums: 0,
                            isShowPopupNums: !1,
                            currentHoverBatch: -1
                        })
                    }
                    ))
                }
                ), {
                    immediate: !0
                }),
                function(e, t) {
                    return (0,
                    i.uX)(),
                    (0,
                    i.CE)("div", {
                        class: (0,
                        u.C4)(["gift-bar", [a.imgSize]])
                    }, [(0,
                    i.Lk)("div", {
                        ref_key: "giftListRef",
                        ref: h,
                        class: "gift-list"
                    }, [((0,
                    i.uX)(!0),
                    (0,
                    i.CE)(i.FK, null, (0,
                    i.pI)(y.value, (function(e) {
                        var t;
                        return (0,
                        i.uX)(),
                        (0,
                        i.Wv)(Y, {
                            key: e.name,
                            gift: e,
                            name: e.name,
                            icon: null == e || null === (t = e.picUrl[0]) || void 0 === t ? void 0 : t.url,
                            "margin-right": (0,
                            c.R1)(k),
                            "protect-time": 1e4,
                            "max-batch-size": e.maxBatchSize,
                            onSend: function(t) {
                                return A(e, t)
                            },
                            onUpdateHoverStatus: function(t) {
                                return function(e, t) {
                                    e.isHover = t
                                }(e, t)
                            },
                            onSetHoverBatch: function(t) {
                                return function(e, t) {
                                    e.currentHoverBatch = t
                                }(e, t)
                            }
                        }, null, 8, ["gift", "name", "icon", "margin-right", "max-batch-size", "onSend", "onUpdateHoverStatus", "onSetHoverBatch"])
                    }
                    )), 128))], 512), (0,
                    i.bF)($e), (0,
                    i.bF)(Lt, {
                        "current-user": (0,
                        c.R1)(v)
                    }, null, 8, ["current-user"]), (0,
                    i.bF)(pt, {
                        "current-user": (0,
                        c.R1)(v)
                    }, null, 8, ["current-user"])], 2)
                }
            }
        })
          , Rt = (0,
        C.A)(Ct, [["__scopeId", "data-v-c52370ec"]])
    }
    ,
    14663: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => te
        }),
        n(60739);
        var a = n(20641)
          , l = n(50953)
          , r = n(36947)
          , o = n(16419)
          , i = n(90033)
          , u = n(53751)
          , c = n(48870)
          , s = n(97786)
          , d = n(72708)
          , f = {
            class: "panel"
        };
        const v = (0,
        a.pM)({
            __name: "Setting",
            setup: function(e) {
                var t = (0,
                s.rXt)(c.KP, 0)
                  , n = (0,
                s.rXt)(c.s4, 0)
                  , r = (0,
                s.rXt)(c.RM, 0);
                function o() {
                    t.value = 0 === t.value ? 1 : 0
                }
                function v() {
                    (0,
                    d.O5)(0 === n.value),
                    n.value = 0 === n.value ? 1 : 0
                }
                function p() {
                    r.value = 0 === r.value ? 1 : 0
                }
                return function(e, c) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.Wv)(u.eB, {
                        name: "fade-in-linear"
                    }, {
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("div", f, [(0,
                            a.Lk)("div", {
                                class: (0,
                                i.C4)(["item", {
                                    checked: (0,
                                    l.R1)(n)
                                }]),
                                onClick: v
                            }, c[0] || (c[0] = [(0,
                            a.Lk)("span", {
                                class: "checkbox"
                            }, null, -1), (0,
                            a.Lk)("span", null, "屏蔽评论区礼物槽位", -1)]), 2), (0,
                            a.Lk)("div", {
                                class: (0,
                                i.C4)(["item", {
                                    checked: (0,
                                    l.R1)(r)
                                }]),
                                onClick: p
                            }, c[1] || (c[1] = [(0,
                            a.Lk)("span", {
                                class: "checkbox"
                            }, null, -1), (0,
                            a.Lk)("span", null, "屏蔽评论区点赞信息", -1)]), 2), (0,
                            a.Lk)("div", {
                                class: (0,
                                i.C4)(["item", {
                                    checked: 1 === (0,
                                    l.R1)(t)
                                }]),
                                onClick: o
                            }, c[2] || (c[2] = [(0,
                            a.Lk)("span", {
                                class: "checkbox"
                            }, null, -1), (0,
                            a.Lk)("span", null, "屏蔽评论区礼物信息", -1)]), 2)])]
                        }
                        )),
                        _: 1
                    })
                }
            }
        });
        var p = n(66262);
        const m = (0,
        p.A)(v, [["__scopeId", "data-v-1670c466"]]);
        var h = n(10467)
          , g = n(54756)
          , b = n.n(g)
          , k = (n(62062),
        n(79432),
        n(26099),
        n(40758))
          , y = (0,
        n(19716).nY)("emojiPanel", {
            state: function() {
                return {
                    list: {}
                }
            },
            actions: {
                fetchData: function() {
                    var e = this;
                    return (0,
                    h.A)(b().mark((function t() {
                        var n, a;
                        return b().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== Object.keys(e.list).length) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 3,
                                    (0,
                                    k.f2)();
                                case 3:
                                    n = t.sent,
                                    a = n.data,
                                    console.log(a),
                                    e.list = a;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        })
          , M = {
            class: "pad"
        }
          , A = {
            class: "wrapper"
        }
          , L = {
            class: "container"
        }
          , E = ["onClick"]
          , w = ["src"];
        const C = (0,
        a.pM)({
            __name: "EmojiPanel",
            emits: ["close"],
            setup: function(e, t) {
                var n = t.emit
                  , l = y();
                l.fetchData();
                var r = n
                  , o = (0,
                a.EW)((function() {
                    return Object.keys(l.list).map((function(e) {
                        return {
                            key: e,
                            value: l.list[e]
                        }
                    }
                    ))
                }
                ));
                function i() {
                    return (i = (0,
                    h.A)(b().mark((function e(t) {
                        return b().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    (0,
                                    d.HN)(t),
                                    r("close");
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                return function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", M, [(0,
                    a.Lk)("div", A, [(0,
                    a.Lk)("div", L, [((0,
                    a.uX)(!0),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(o.value, (function(e, t) {
                        return (0,
                        a.uX)(),
                        (0,
                        a.CE)("div", {
                            key: t,
                            class: "bit flex-center",
                            onClick: function(t) {
                                return function(e) {
                                    return i.apply(this, arguments)
                                }(e.key)
                            }
                        }, [(0,
                        a.Lk)("img", {
                            src: e.value
                        }, null, 8, w)], 8, E)
                    }
                    )), 128))])])])
                }
            }
        })
          , R = (0,
        p.A)(C, [["__scopeId", "data-v-0201e4a3"]]);
        n(48980),
        n(74423),
        n(54554),
        n(21699);
        var I = n(32552)
          , S = n(26886)
          , x = n(57142)
          , T = {
            class: "container box-border"
        }
          , _ = {
            class: "content flex-col"
        }
          , N = {
            class: "tip"
        }
          , O = {
            class: "wrapper"
        }
          , V = ["onClick"]
          , j = ["onKeypress"];
        const W = (0,
        a.pM)({
            __name: "SensitiveWord",
            setup: function(e) {
                var t = (0,
                l.KR)("mine")
                  , n = (0,
                l.KR)("")
                  , r = (0,
                a.WQ)(x.$m)
                  , o = (0,
                a.EW)((function() {
                    return n.value.length
                }
                ))
                  , d = (0,
                a.EW)((function() {
                    var e;
                    return null !== (e = f.value[v.value]) && void 0 !== e ? e : []
                }
                ))
                  , f = (0,
                s.rXt)(c.oT, {
                    all: []
                })
                  , v = (0,
                a.EW)((function() {
                    return "all" === t.value ? "all" : r.value.id
                }
                ));
                function p() {
                    var e;
                    f.value[v.value] ? (null !== (e = f.value[v.value]) && void 0 !== e && e.includes(n.value) || f.value[v.value].push(n.value),
                    n.value = "") : f.value[v.value] = [n.value]
                }
                return function(e, l) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.Wv)(u.eB, null, {
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("div", T, [(0,
                            a.bF)(I.A, {
                                "active-tab-id": t.value,
                                "onUpdate:activeTabId": l[0] || (l[0] = function(e) {
                                    return t.value = e
                                }
                                )
                            }, {
                                default: (0,
                                a.k6)((function() {
                                    return [(0,
                                    a.bF)(S.A, {
                                        id: "mine"
                                    }, {
                                        tab: (0,
                                        a.k6)((function() {
                                            return l[2] || (l[2] = [(0,
                                            a.Lk)("span", {
                                                class: "title"
                                            }, "本房间", -1)])
                                        }
                                        )),
                                        _: 1
                                    }), (0,
                                    a.bF)(S.A, {
                                        id: "all"
                                    }, {
                                        tab: (0,
                                        a.k6)((function() {
                                            return l[3] || (l[3] = [(0,
                                            a.Lk)("span", {
                                                class: "title"
                                            }, "全站", -1)])
                                        }
                                        )),
                                        _: 1
                                    })]
                                }
                                )),
                                _: 1
                            }, 8, ["active-tab-id"]), (0,
                            a.Lk)("div", _, [(0,
                            a.Lk)("div", N, "已添加的关键词 (" + (0,
                            i.v_)(d.value.length) + "/50)", 1), (0,
                            a.Lk)("div", O, [((0,
                            a.uX)(!0),
                            (0,
                            a.CE)(a.FK, null, (0,
                            a.pI)(d.value, (function(e, t) {
                                return (0,
                                a.uX)(),
                                (0,
                                a.CE)("div", {
                                    class: "item",
                                    key: t
                                }, [(0,
                                a.eW)((0,
                                i.v_)(e) + " ", 1), (0,
                                a.Lk)("span", {
                                    onClick: function(t) {
                                        return function(e) {
                                            var t, n = null === (t = f.value[v.value]) || void 0 === t ? void 0 : t.findIndex((function(t) {
                                                return t === e
                                            }
                                            ));
                                            -1 !== n && f.value[v.value].splice(n, 1)
                                        }(e)
                                    },
                                    class: "delete-btn"
                                }, null, 8, V)])
                            }
                            )), 128))])]), (0,
                            a.Lk)("div", {
                                class: (0,
                                i.C4)(["comment-input box-border", {
                                    "is-error": o.value < 0
                                }])
                            }, [(0,
                            a.bo)((0,
                            a.Lk)("input", {
                                "onUpdate:modelValue": l[1] || (l[1] = function(e) {
                                    return n.value = e
                                }
                                ),
                                class: "box-boder",
                                placeholder: "10个字以内",
                                onKeypress: (0,
                                u.jR)((0,
                                u.D$)(p, ["prevent"]), ["enter"])
                            }, null, 40, j), [[u.Jo, n.value]]), (0,
                            a.Lk)("div", {
                                class: (0,
                                i.C4)(["submit-button", {
                                    valid: o.value >= 0
                                }]),
                                onClick: p
                            }, [l[4] || (l[4] = (0,
                            a.eW)(" 添加 ")), o.value < 0 ? ((0,
                            a.uX)(),
                            (0,
                            a.CE)(a.FK, {
                                key: 0
                            }, [(0,
                            a.eW)((0,
                            i.v_)("\n") + (0,
                            i.v_)(o.value), 1)], 64)) : (0,
                            a.Q3)("", !0)], 2)], 2)])]
                        }
                        )),
                        _: 1
                    })
                }
            }
        })
          , B = (0,
        p.A)(W, [["__scopeId", "data-v-8053f97e"]]);
        var F = n(45492)
          , D = n.n(F)
          , U = n(10152)
          , G = n.n(U)
          , z = n(27910)
          , P = n.n(z)
          , Q = n(16265)
          , X = n(60240)
          , Z = {
            class: "chat-toolkit"
        }
          , K = {
            class: "emoji"
        }
          , H = ["innerHTML"]
          , J = {
            class: "setting"
        }
          , Y = ["innerHTML"]
          , q = {
            class: "sensitive-word"
        }
          , $ = ["innerHTML"];
        const ee = (0,
        a.pM)({
            __name: "index",
            setup: function(e) {
                var t = (0,
                l.KR)(!1)
                  , n = (0,
                l.KR)("");
                function i() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    n.value = n.value !== e && e ? e : ""
                }
                function u() {
                    n.value = "",
                    t.value = !1
                }
                return (0,
                Q.G_)((function() {
                    var e = document.querySelectorAll(".chat-toolkit").length;
                    e > 1 && (0,
                    X.ho)({
                        name: "SSR_RENDER_CHAT_TOOLKIT",
                        event_type: "error",
                        message: "length: ".concat(e),
                        extra_info: JSON.stringify({
                            length: e,
                            new: !0
                        })
                    })
                }
                )),
                function(e, c) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", Z, [(0,
                    a.Lk)("section", K, [(0,
                    a.bF)((0,
                    l.R1)(o.A), {
                        "popup-visible": t.value,
                        "onUpdate:popupVisible": c[1] || (c[1] = function(e) {
                            return t.value = e
                        }
                        ),
                        trigger: "click",
                        "show-arrow": "",
                        "arrow-style": {
                            backgroundColor: "#343434"
                        },
                        "popup-translate": [169, -10]
                    }, {
                        content: (0,
                        a.k6)((function() {
                            return [(0,
                            a.bF)(R, {
                                onClose: u
                            })]
                        }
                        )),
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("span", {
                                class: "icon",
                                onClick: c[0] || (c[0] = function(e) {
                                    return i("EMOJI_PANEL")
                                }
                                ),
                                innerHTML: (0,
                                l.R1)(P())
                            }, null, 8, H)]
                        }
                        )),
                        _: 1
                    }, 8, ["popup-visible"])]), (0,
                    a.Lk)("section", J, [(0,
                    a.bF)(r.A, {
                        placement: "top"
                    }, {
                        content: (0,
                        a.k6)((function() {
                            return c[4] || (c[4] = [(0,
                            a.Lk)("p", {
                                class: "tip"
                            }, "评论屏蔽", -1)])
                        }
                        )),
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("span", {
                                class: "icon",
                                onClick: c[2] || (c[2] = function(e) {
                                    return i("SETTING")
                                }
                                ),
                                innerHTML: (0,
                                l.R1)(G())
                            }, null, 8, Y)]
                        }
                        )),
                        _: 1
                    }), "SETTING" === n.value ? ((0,
                    a.uX)(),
                    (0,
                    a.Wv)(m, {
                        key: 0
                    })) : (0,
                    a.Q3)("", !0)]), (0,
                    a.Lk)("section", q, [(0,
                    a.bF)(r.A, {
                        placement: "top"
                    }, {
                        content: (0,
                        a.k6)((function() {
                            return c[5] || (c[5] = [(0,
                            a.Lk)("p", {
                                class: "tip"
                            }, "屏蔽词设置", -1)])
                        }
                        )),
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("span", {
                                class: "icon",
                                onClick: c[3] || (c[3] = function(e) {
                                    return i("SENSITIVE_WORD")
                                }
                                ),
                                innerHTML: (0,
                                l.R1)(D())
                            }, null, 8, $)]
                        }
                        )),
                        _: 1
                    }), "SENSITIVE_WORD" === n.value ? ((0,
                    a.uX)(),
                    (0,
                    a.Wv)(B, {
                        key: 0
                    })) : (0,
                    a.Q3)("", !0)])])
                }
            }
        })
          , te = (0,
        p.A)(ee, [["__scopeId", "data-v-f8de5a94"]])
    }
    ,
    15415: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => i
        });
        var a = n(20641)
          , l = n(50953)
          , r = ["src", "data-error"];
        const o = (0,
        a.pM)({
            __name: "GiftImage",
            props: {
                src: {}
            },
            setup: function(e) {
                var t = (0,
                l.KR)(!1)
                  , n = e
                  , o = (0,
                a.EW)((function() {
                    return t.value ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+BAMAAAAQDbi7AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAEHRSTlMAAQIDBAUGBwgJCgsMDQ4PPFyWBgAAAkxJREFUWMPtl7FrFFEQh3+3iQkkUdLFQmFJkSIqphA79SxSBYyNhYWoYJtoYSv5CyRBtFHQVLGSWApRT0WwCtEIniByCIKNyaqJXI7c3mfx9i6bNNnZK0R5XzUs9+3NzXsz753k8Xg8Ho/H899QOH5lpA19oATx7dx6VwTArbzJzwNA42w+/wAJVanz7sJcaPTngZVFgGJ3BNRsL+gCXktDFXi/1MzDwJFEOEyLaxb/avL5whKpQmRniZoLTgG8OfcIGoYKFGDdRb3AVymYh5nsfie83SrkiKQe+GIq/wsXdeB+SSHidx4/gDVJUomNPH4n/JAkTTcrmoUO+Omi7ly+oma2e+GXPX+Vmss9hfMCLPXTOLyUpD0kG6enmUc2eiEOpcIUwLJUmDbtHwURbF4fve+2/p3RG0BobCBHXEmCDfMAAODVySSYsQ2gE86q9QeVHF8v6SZAvSjtj5LAyPnFlYehJA09XX1S1L/IwDN3CvF9znb6JM0XbY3fDwb9UFQOtw9f0/wOIiiHUl9aN8zvXoByqClorDoiIPMSHgWgPAjx5WZK0/DY0PwAn2A53Q9rBv+ze8Wl9ESqZvc3NQFA/9bDi9nn5zg1aQJo7Hxo8DUBcTu+Jtv09/1l/0x7/lh79RujLX9s5/4x+dxz+7eYvlBWjf0Tw7v0jWDd1r/10xC3/gBMtm5Uu9OXnBwPoL7geL69GXe9vVEvSge3zS/D9eWCO66CStqfNQzgY27hhlP6tzznx3Arg4/9+U6gQUcoj8fj8Xg8Ho8k6Q9rh0HM4vYXaQAAAABJRU5ErkJggg==" : n.src
                }
                ));
                return function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("img", {
                        src: o.value,
                        alt: "",
                        "data-error": t.value,
                        onError: n[0] || (n[0] = function(e) {
                            return t.value = !0
                        }
                        )
                    }, null, 40, r)
                }
            }
        })
          , i = (0,
        n(66262).A)(o, [["__scopeId", "data-v-3852a8a6"]])
    }
    ,
    15607: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => s
        });
        var a = n(20641)
          , l = n(50953)
          , r = n(90033)
          , o = n(57142)
          , i = n(11722)
          , u = ["data-gift-enabled"];
        const c = (0,
        a.pM)({
            __name: "index",
            props: {
                full: {
                    type: Boolean
                }
            },
            setup: function(e) {
                var t = (0,
                a.WQ)(o.Co)
                  , n = (0,
                a.WQ)(o.Q4)
                  , c = (0,
                a.WQ)(o.az)
                  , s = e
                  , d = (0,
                l.KR)();
                return (0,
                a.wB)((function() {
                    return c.value
                }
                ), (function(e) {
                    e && t()
                }
                ), {
                    immediate: !0
                }),
                function(e, t) {
                    return (0,
                    l.R1)(n).canSendGift ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        key: 0,
                        ref_key: "footRef",
                        ref: d,
                        class: (0,
                        r.C4)(["foot", {
                            full: s.full,
                            hide: (0,
                            l.R1)(i.E6) && s.full
                        }]),
                        "data-gift-enabled": !!(0,
                        l.R1)(n).canSendGift
                    }, [(0,
                    a.RG)(e.$slots, "gift"), (0,
                    a.RG)(e.$slots, "kcoin")], 10, u)) : (0,
                    a.Q3)("", !0)
                }
            }
        })
          , s = (0,
        n(66262).A)(c, [["__scopeId", "data-v-6d9dbd5a"]])
    }
    ,
    16419: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => Se
        }),
        n(62010),
        n(69085),
        n(52675),
        n(89463),
        n(2259),
        n(28706),
        n(23418),
        n(64346),
        n(23792),
        n(34782),
        n(23288),
        n(67945),
        n(84185),
        n(81278),
        n(26099),
        n(27495),
        n(38781),
        n(47764),
        n(62953);
        var a = n(20641)
          , l = Symbol("ArcoConfigProvider");
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var o = Object.defineProperty
          , i = Object.defineProperties
          , u = Object.getOwnPropertyDescriptors
          , c = Object.getOwnPropertySymbols
          , s = Object.prototype.hasOwnProperty
          , d = Object.prototype.propertyIsEnumerable
          , f = function(e, t, n) {
            return t in e ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
          , v = "$arco"
          , p = function(e, t) {
            var n, a, l;
            t && t.classPrefix && (e.config.globalProperties[v] = (a = function(e, t) {
                for (var n in t || (t = {}))
                    s.call(t, n) && f(e, n, t[n]);
                if (c) {
                    var a, l = function(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return r(e, t);
                                    var n = {}.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                                }
                            }(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var a = 0
                                  , l = function() {};
                                return {
                                    s: l,
                                    n: function() {
                                        return a >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[a++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: l
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, i = !0, u = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return i = e.done,
                                e
                            },
                            e: function(e) {
                                u = !0,
                                o = e
                            },
                            f: function() {
                                try {
                                    i || null == n.return || n.return()
                                } finally {
                                    if (u)
                                        throw o
                                }
                            }
                        }
                    }(c(t));
                    try {
                        for (l.s(); !(a = l.n()).done; )
                            n = a.value,
                            d.call(t, n) && f(e, n, t[n])
                    } catch (e) {
                        l.e(e)
                    } finally {
                        l.f()
                    }
                }
                return e
            }({}, null != (n = e.config.globalProperties[v]) ? n : {}),
            l = {
                classPrefix: t.classPrefix
            },
            i(a, u(l))))
        }
          , m = n(80296)
          , h = (n(74423),
        n(2892),
        n(31415),
        n(21699),
        n(25509),
        n(65223),
        n(60321),
        n(41927),
        n(11632),
        n(64377),
        n(66771),
        n(12516),
        n(68931),
        n(52514),
        n(35694),
        n(52774),
        n(49536),
        n(21926),
        n(94483),
        n(16215),
        n(76031),
        n(50953))
          , g = n(53751)
          , b = (n(79432),
        Object.prototype.toString);
        function k(e) {
            return "[object Array]" === b.call(e)
        }
        function y(e) {
            return "function" == typeof e
        }
        var M = function() {}
          , A = function() {
            try {
                return !("undefined" != typeof window && void 0 !== document)
            } catch (e) {
                return !0
            }
        }()
          , L = A ? M : function(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            e.addEventListener(t, n, a)
        }
          , E = A ? M : function(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            e.removeEventListener(t, n, a)
        }
          , w = function(e, t) {
            var n;
            return n = e,
            "[object String]" === b.call(n) ? function(e, t) {
                var n;
                if (!A)
                    return null != (n = (null != t ? t : document).querySelector(e)) ? n : void 0
            }("#" === e[0] ? "[id='".concat(e.slice(1), "']") : e, t) : e
        };
        function C(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var R, I, S, x, T = Object.defineProperty, _ = Object.getOwnPropertySymbols, N = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable, V = function(e, t, n) {
            return t in e ? T(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }, j = function(e, t) {
            for (var n in t || (t = {}))
                N.call(t, n) && V(e, n, t[n]);
            if (_) {
                var a, l = function(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return C(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var a = 0
                              , l = function() {};
                            return {
                                s: l,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: l
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var r, o = !0, i = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done,
                            e
                        },
                        e: function(e) {
                            i = !0,
                            r = e
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (i)
                                    throw r
                            }
                        }
                    }
                }(_(t));
                try {
                    for (l.s(); !(a = l.n()).done; )
                        n = a.value,
                        O.call(t, n) && V(e, n, t[n])
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
            }
            return e
        }, W = function(e, t) {
            var n, a, l = e.getBoundingClientRect();
            return {
                top: l.top,
                bottom: l.bottom,
                left: l.left,
                right: l.right,
                scrollTop: l.top - t.top,
                scrollBottom: l.bottom - t.top,
                scrollLeft: l.left - t.left,
                scrollRight: l.right - t.left,
                width: null != (n = e.offsetWidth) ? n : e.clientWidth,
                height: null != (a = e.offsetHeight) ? a : e.clientHeight
            }
        }, B = function(e, t) {
            switch (t) {
            case "top":
                switch (e) {
                case "bottom":
                    return "top";
                case "bl":
                    return "tl";
                case "br":
                    return "tr";
                default:
                    return e
                }
            case "bottom":
                switch (e) {
                case "top":
                    return "bottom";
                case "tl":
                    return "bl";
                case "tr":
                    return "br";
                default:
                    return e
                }
            case "left":
                switch (e) {
                case "right":
                    return "left";
                case "rt":
                    return "lt";
                case "rb":
                    return "lb";
                default:
                    return e
                }
            case "right":
                switch (e) {
                case "left":
                    return "right";
                case "lt":
                    return "rt";
                case "lb":
                    return "rb";
                default:
                    return e
                }
            default:
                return e
            }
        }, F = function(e, t, n) {
            var a, l, r, o = n.containerRect, i = n.triggerRect, u = n.popupRect, c = n.offset, s = n.translate, d = function(e) {
                switch (e) {
                case "top":
                case "tl":
                case "tr":
                default:
                    return "top";
                case "bottom":
                case "bl":
                case "br":
                    return "bottom";
                case "left":
                case "lt":
                case "lb":
                    return "left";
                case "right":
                case "rt":
                case "rb":
                    return "right"
                }
            }(e), f = (l = (a = function() {
                var e, t = document.body, n = document.documentElement;
                try {
                    e = (window.top || window.self || window).document.body
                } catch (e) {}
                return {
                    height: Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight, (null == e ? void 0 : e.scrollHeight) || 0, (null == e ? void 0 : e.clientHeight) || 0),
                    width: Math.max(t.scrollWidth, t.offsetWidth, n.clientWidth, n.scrollWidth, n.offsetWidth, (null == e ? void 0 : e.scrollWidth) || 0, (null == e ? void 0 : e.clientWidth) || 0)
                }
            }()).height,
            r = a.width,
            {
                width: Math.min(r, window.innerWidth),
                height: Math.min(l, window.innerHeight)
            }), v = o.top + t.top, p = f.height - (o.top + t.top + u.height), m = o.left + t.left, h = f.width - (o.left + t.left + u.width), g = e;
            if ("top" === d && v < 0)
                if (i.top > u.height)
                    t.top = -o.top;
                else {
                    var b = D("bottom", i, u, {
                        offset: c,
                        translate: s
                    });
                    f.height - (o.top + b.top + u.height) > 0 && (g = B(e, "bottom"),
                    t.top = b.top)
                }
            if ("bottom" === d && p < 0)
                if (f.height - i.bottom > u.height)
                    t.top = -o.top + (f.height - u.height);
                else {
                    var k = D("top", i, u, {
                        offset: c,
                        translate: s
                    });
                    o.top + k.top > 0 && (g = B(e, "top"),
                    t.top = k.top)
                }
            if ("left" === d && m < 0)
                if (i.left > u.width)
                    t.left = -o.left;
                else {
                    var y = D("right", i, u, {
                        offset: c,
                        translate: s
                    });
                    f.width - (o.left + y.left + u.width) > 0 && (g = B(e, "right"),
                    t.left = y.left)
                }
            if ("right" === d && h < 0)
                if (f.width - i.right > u.width)
                    t.left = -o.left + (f.width - u.width);
                else {
                    var M = D("left", i, u, {
                        offset: c,
                        translate: s
                    });
                    o.left + M.left > 0 && (g = B(e, "left"),
                    t.left = M.left)
                }
            return "top" !== d && "bottom" !== d || (m < 0 ? t.left = -o.left : h < 0 && (t.left = -o.left + (f.width - u.width))),
            "left" !== d && "right" !== d || (v < 0 ? t.top = -o.top : p < 0 && (t.top = -o.top + (f.height - u.height))),
            {
                popupPosition: t,
                position: g
            }
        }, D = function(e, t, n) {
            var a, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r = l.offset, o = void 0 === r ? 0 : r, i = l.translate, u = void 0 === i ? [0, 0] : i, c = null != (a = k(u) ? u : u[e]) ? a : [0, 0];
            switch (e) {
            case "top":
                return {
                    left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + c[0],
                    top: t.scrollTop - n.height - o + c[1]
                };
            case "tl":
                return {
                    left: t.scrollLeft + c[0],
                    top: t.scrollTop - n.height - o + c[1]
                };
            case "tr":
                return {
                    left: t.scrollRight - n.width + c[0],
                    top: t.scrollTop - n.height - o + c[1]
                };
            case "bottom":
                return {
                    left: t.scrollLeft + Math.round(t.width / 2) - Math.round(n.width / 2) + c[0],
                    top: t.scrollBottom + o + c[1]
                };
            case "bl":
                return {
                    left: t.scrollLeft + c[0],
                    top: t.scrollBottom + o + c[1]
                };
            case "br":
                return {
                    left: t.scrollRight - n.width + c[0],
                    top: t.scrollBottom + o + c[1]
                };
            case "left":
                return {
                    left: t.scrollLeft - n.width - o + c[0],
                    top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + c[1]
                };
            case "lt":
                return {
                    left: t.scrollLeft - n.width - o + c[0],
                    top: t.scrollTop + c[1]
                };
            case "lb":
                return {
                    left: t.scrollLeft - n.width - o + c[0],
                    top: t.scrollBottom - n.height + c[1]
                };
            case "right":
                return {
                    left: t.scrollRight + o + c[0],
                    top: t.scrollTop + Math.round(t.height / 2) - Math.round(n.height / 2) + c[1]
                };
            case "rt":
                return {
                    left: t.scrollRight + o + c[0],
                    top: t.scrollTop + c[1]
                };
            case "rb":
                return {
                    left: t.scrollRight + o + c[0],
                    top: t.scrollBottom - n.height + c[1]
                };
            default:
                return {
                    left: 0,
                    top: 0
                }
            }
        }, U = function(e) {
            var t = "0";
            ["top", "bottom"].includes(e) ? t = "50%" : ["left", "lt", "lb", "tr", "br"].includes(e) && (t = "100%");
            var n = "0";
            return ["left", "right"].includes(e) ? n = "50%" : ["top", "tl", "tr", "lb", "rb"].includes(e) && (n = "100%"),
            "".concat(t, " ").concat(n)
        }, G = function(e) {
            return e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth
        }, z = function(e) {
            for (var t, n = [], a = e; a && a !== document.documentElement; )
                G(a) && n.push(a),
                a = null != (t = a.parentElement) ? t : void 0;
            return n
        }, P = n(43591);
        function Q(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return X(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? X(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0
                      , l = function() {};
                    return {
                        s: l,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: l
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, o = !0, i = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return o = e.done,
                    e
                },
                e: function(e) {
                    i = !0,
                    r = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (i)
                            throw r
                    }
                }
            }
        }
        function X(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        n(51629),
        n(23500),
        (I = R || (R = {}))[I.ELEMENT = 1] = "ELEMENT",
        I[I.FUNCTIONAL_COMPONENT = 2] = "FUNCTIONAL_COMPONENT",
        I[I.STATEFUL_COMPONENT = 4] = "STATEFUL_COMPONENT",
        I[I.COMPONENT = 6] = "COMPONENT",
        I[I.TEXT_CHILDREN = 8] = "TEXT_CHILDREN",
        I[I.ARRAY_CHILDREN = 16] = "ARRAY_CHILDREN",
        I[I.SLOTS_CHILDREN = 32] = "SLOTS_CHILDREN",
        I[I.TELEPORT = 64] = "TELEPORT",
        I[I.SUSPENSE = 128] = "SUSPENSE",
        I[I.COMPONENT_SHOULD_KEEP_ALIVE = 256] = "COMPONENT_SHOULD_KEEP_ALIVE",
        I[I.COMPONENT_KEPT_ALIVE = 512] = "COMPONENT_KEPT_ALIVE",
        (x = S || (S = {}))[x.TEXT = 1] = "TEXT",
        x[x.CLASS = 2] = "CLASS",
        x[x.STYLE = 4] = "STYLE",
        x[x.PROPS = 8] = "PROPS",
        x[x.FULL_PROPS = 16] = "FULL_PROPS",
        x[x.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS",
        x[x.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT",
        x[x.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT",
        x[x.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT",
        x[x.NEED_PATCH = 512] = "NEED_PATCH",
        x[x.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS",
        x[x.DEV_ROOT_FRAGMENT = 2048] = "DEV_ROOT_FRAGMENT",
        x[x.HOISTED = -1] = "HOISTED",
        x[x.BAIL = -2] = "BAIL";
        var Z = function(e) {
            return Boolean(e && 1 & e.shapeFlag)
        }
          , K = function(e, t) {
            return Boolean(e && 6 & e.shapeFlag)
        }
          , H = function(e, t) {
            if (e && e.length > 0)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    if (Z(l) || K(l)) {
                        var r = y(t) ? t(l) : t;
                        return e[n] = (0,
                        a.E3)(l, r, !0),
                        !0
                    }
                    var o = J(l);
                    if (o && o.length > 0 && H(o, t))
                        return !0
                }
            return !1
        }
          , J = function(e) {
            return function(e) {
                return Boolean(e && 16 & e.shapeFlag)
            }(e, e.children) ? e.children : k(e) ? e : void 0
        }
          , Y = function(e) {
            var t, n;
            if (Z(e))
                return e.el;
            if (!K(e)) {
                var a = J(e);
                return q(a)
            }
            if (1 === (null == (t = e.el) ? void 0 : t.nodeType))
                return e.el;
            if (null == (n = e.component) ? void 0 : n.subTree) {
                var l = Y(e.component.subTree);
                if (l)
                    return l
            }
        }
          , q = function(e) {
            if (e && e.length > 0) {
                var t, n = Q(e);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var a = t.value
                          , l = Y(a);
                        if (l)
                            return l
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
            }
        }
          , $ = function() {
            var e = {}
              , t = (0,
            h.KR)()
              , n = function() {
                var n = q(e.value);
                n !== t.value && (t.value = n)
            };
            return (0,
            a.sV)((function() {
                return n()
            }
            )),
            (0,
            a.$u)((function() {
                return n()
            }
            )),
            {
                children: e,
                firstElement: t
            }
        }
          , ee = (0,
        a.pM)({
            name: "ResizeObserver",
            props: {
                watchOnUpdated: Boolean
            },
            emits: ["resize"],
            setup: function(e, t) {
                var n, l = t.emit, r = t.slots, o = $(), i = o.children, u = o.firstElement, c = function() {
                    n && (n.disconnect(),
                    n = null)
                };
                return (0,
                a.wB)(u, (function(e) {
                    n && c(),
                    e && function(e) {
                        e && (n = new P.A((function(e) {
                            var t = e[0];
                            l("resize", t)
                        }
                        ))).observe(e)
                    }(e)
                }
                )),
                (0,
                a.xo)((function() {
                    n && c()
                }
                )),
                function() {
                    var e;
                    return i.value = null == (e = r.default) ? void 0 : e.call(r),
                    i.value
                }
            }
        })
          , te = Symbol("ArcoTrigger")
          , ne = "undefined" == typeof window ? n.g : window
          , ae = ne.requestAnimationFrame
          , le = ne.cancelAnimationFrame;
        function re(e) {
            var t = 0
              , n = function() {
                for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++)
                    a[l] = arguments[l];
                t && le(t),
                t = ae((function() {
                    e.apply(void 0, a),
                    t = 0
                }
                ))
            };
            return n.cancel = function() {
                le(t),
                t = 0
            }
            ,
            n
        }
        var oe = n(92901)
          , ie = n(23029)
          , ue = new ((0,
        oe.A)((function e() {
            var t = this;
            (0,
            ie.A)(this, e),
            this.popupStack = {
                popup: new Set,
                dialog: new Set,
                message: new Set
            },
            this.getNextZIndex = function(e) {
                return ("message" === e ? Array.from(t.popupStack.message).pop() || 5e3 : Array.from(t.popupStack.popup).pop() || 1e3) + 1
            }
            ,
            this.add = function(e) {
                var n = t.getNextZIndex(e);
                return t.popupStack[e].add(n),
                "dialog" === e && t.popupStack.popup.add(n),
                n
            }
            ,
            this.delete = function(e, n) {
                t.popupStack[n].delete(e),
                "dialog" === n && t.popupStack.popup.delete(e)
            }
            ,
            this.isLastDialog = function(e) {
                return !(t.popupStack.dialog.size > 1) || e === Array.from(t.popupStack.dialog).pop()
            }
        }
        )))
          , ce = (0,
        a.pM)({
            name: "ClientOnly",
            setup: function(e, t) {
                var n = t.slots
                  , l = (0,
                h.KR)(!1);
                return (0,
                a.sV)((function() {
                    return l.value = !0
                }
                )),
                function() {
                    var e;
                    return l.value ? null == (e = n.default) ? void 0 : e.call(n) : null
                }
            }
        });
        function se(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return de(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? de(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0
                      , l = function() {};
                    return {
                        s: l,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: l
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, o = !0, i = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return o = e.done,
                    e
                },
                e: function(e) {
                    i = !0,
                    r = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (i)
                            throw r
                    }
                }
            }
        }
        function de(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var fe = Object.defineProperty
          , ve = Object.getOwnPropertySymbols
          , pe = Object.prototype.hasOwnProperty
          , me = Object.prototype.propertyIsEnumerable
          , he = function(e, t, n) {
            return t in e ? fe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        };
        function ge(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return be(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? be(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0
                      , l = function() {};
                    return {
                        s: l,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: l
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, o = !0, i = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return o = e.done,
                    e
                },
                e: function(e) {
                    i = !0,
                    r = e
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (i)
                            throw r
                    }
                }
            }
        }
        function be(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var ke = Object.defineProperty
          , ye = Object.defineProperties
          , Me = Object.getOwnPropertyDescriptors
          , Ae = Object.getOwnPropertySymbols
          , Le = Object.prototype.hasOwnProperty
          , Ee = Object.prototype.propertyIsEnumerable
          , we = function(e, t, n) {
            return t in e ? ke(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
          , Ce = function(e, t) {
            for (var n in t || (t = {}))
                Le.call(t, n) && we(e, n, t[n]);
            if (Ae) {
                var a, l = ge(Ae(t));
                try {
                    for (l.s(); !(a = l.n()).done; )
                        n = a.value,
                        Ee.call(t, n) && we(e, n, t[n])
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
            }
            return e
        }
          , Re = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"]
          , Ie = (0,
        a.pM)({
            name: "Trigger",
            inheritAttrs: !1,
            props: {
                popupVisible: {
                    type: Boolean,
                    default: void 0
                },
                defaultPopupVisible: {
                    type: Boolean,
                    default: !1
                },
                trigger: {
                    type: [String, Array],
                    default: "hover"
                },
                position: {
                    type: String,
                    default: "bottom"
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                popupOffset: {
                    type: Number,
                    default: 0
                },
                popupTranslate: {
                    type: [Array, Object]
                },
                showArrow: {
                    type: Boolean,
                    default: !1
                },
                alignPoint: {
                    type: Boolean,
                    default: !1
                },
                popupHoverStay: {
                    type: Boolean,
                    default: !0
                },
                blurToClose: {
                    type: Boolean,
                    default: !0
                },
                clickToClose: {
                    type: Boolean,
                    default: !0
                },
                clickOutsideToClose: {
                    type: Boolean,
                    default: !0
                },
                unmountOnClose: {
                    type: Boolean,
                    default: !0
                },
                contentClass: {
                    type: [String, Array, Object]
                },
                contentStyle: {
                    type: Object
                },
                arrowClass: {
                    type: [String, Array, Object]
                },
                arrowStyle: {
                    type: Object
                },
                popupStyle: {
                    type: Object
                },
                animationName: {
                    type: String,
                    default: "fade-in"
                },
                duration: {
                    type: [Number, Object]
                },
                mouseEnterDelay: {
                    type: Number,
                    default: 100
                },
                mouseLeaveDelay: {
                    type: Number,
                    default: 100
                },
                focusDelay: {
                    type: Number,
                    default: 0
                },
                autoFitPopupWidth: {
                    type: Boolean,
                    default: !1
                },
                autoFitPopupMinWidth: {
                    type: Boolean,
                    default: !1
                },
                autoFixPosition: {
                    type: Boolean,
                    default: !0
                },
                popupContainer: {
                    type: [String, Object]
                },
                updateAtScroll: {
                    type: Boolean,
                    default: !1
                },
                autoFitTransformOrigin: {
                    type: Boolean,
                    default: !1
                },
                hideEmpty: {
                    type: Boolean,
                    default: !1
                },
                openedClass: {
                    type: [String, Array, Object]
                },
                autoFitPosition: {
                    type: Boolean,
                    default: !0
                },
                renderToBody: {
                    type: Boolean,
                    default: !0
                },
                preventFocus: {
                    type: Boolean,
                    default: !1
                },
                scrollToClose: {
                    type: Boolean,
                    default: !1
                },
                scrollToCloseDistance: {
                    type: Number,
                    default: 0
                }
            },
            emits: {
                "update:popupVisible": function(e) {
                    return !0
                },
                popupVisibleChange: function(e) {
                    return !0
                },
                show: function() {
                    return !0
                },
                hide: function() {
                    return !0
                },
                resize: function() {
                    return !0
                }
            },
            setup: function(e, t) {
                var n, r, o, i, u, c, s, d = t.emit, f = t.slots, p = t.attrs, b = (0,
                h.QW)(e).popupContainer, k = (n = "trigger",
                u = (0,
                a.nI)(),
                s = null != (i = null != (o = null == (c = (0,
                a.WQ)(l, void 0)) ? void 0 : c.prefixCls) ? o : null == (r = null == u ? void 0 : u.appContext.config.globalProperties[v]) ? void 0 : r.classPrefix) ? i : "arco",
                n ? "".concat(s, "-").concat(n) : s), M = (0,
                a.EW)((function() {
                    return function(e, t) {
                        var n, a = function(e, t) {
                            for (var n in t || (t = {}))
                                pe.call(t, n) && he(e, n, t[n]);
                            if (ve) {
                                var a, l = se(ve(t));
                                try {
                                    for (l.s(); !(a = l.n()).done; )
                                        n = a.value,
                                        me.call(t, n) && he(e, n, t[n])
                                } catch (e) {
                                    l.e(e)
                                } finally {
                                    l.f()
                                }
                            }
                            return e
                        }({}, e), l = se(t);
                        try {
                            for (l.s(); !(n = l.n()).done; ) {
                                var r = n.value;
                                r in a && delete a[r]
                            }
                        } catch (e) {
                            l.e(e)
                        } finally {
                            l.f()
                        }
                        return a
                    }(p, Re)
                }
                )), A = (0,
                a.WQ)(l, void 0), C = (0,
                a.EW)((function() {
                    return [].concat(e.trigger)
                }
                )), R = new Set, I = (0,
                a.WQ)(te, void 0), S = $(), x = S.children, T = S.firstElement, _ = (0,
                h.KR)(), N = (0,
                h.KR)(e.defaultPopupVisible), O = (0,
                h.KR)(e.position), V = (0,
                h.KR)({}), B = (0,
                h.KR)({}), G = (0,
                h.KR)({}), X = (0,
                h.KR)(), Z = (0,
                h.KR)({
                    top: 0,
                    left: 0
                }), K = null, J = null, Y = (0,
                a.EW)((function() {
                    var t;
                    return null != (t = e.popupVisible) ? t : N.value
                }
                )), q = function(e) {
                    var t = e.popupContainer
                      , n = e.visible
                      , l = e.defaultContainer
                      , r = void 0 === l ? "body" : l
                      , o = e.documentContainer
                      , i = (0,
                    h.KR)(t.value)
                      , u = (0,
                    h.KR)()
                      , c = function() {
                        var e = w(t.value)
                          , n = e ? t.value : r
                          , a = null != e ? e : o ? document.documentElement : w(r);
                        n !== i.value && (i.value = n),
                        a !== u.value && (u.value = a)
                    };
                    return (0,
                    a.sV)((function() {
                        return c()
                    }
                    )),
                    (0,
                    a.wB)(n, (function(e) {
                        i.value !== t.value && e && c()
                    }
                    )),
                    {
                        teleportContainer: i,
                        containerRef: u
                    }
                }({
                    popupContainer: b,
                    visible: Y,
                    documentContainer: !0
                }), ne = q.teleportContainer, ae = q.containerRef, le = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = t.visible
                      , l = t.runOnMounted
                      , r = (0,
                    h.KR)(0)
                      , o = function() {
                        r.value = ue.add(e)
                    }
                      , i = function() {
                        ue.delete(r.value, e)
                    };
                    return (0,
                    a.wB)((function() {
                        return null == n ? void 0 : n.value
                    }
                    ), (function(e) {
                        e ? o() : i()
                    }
                    ), {
                        immediate: !0
                    }),
                    l && ((0,
                    a.sV)((function() {
                        o()
                    }
                    )),
                    (0,
                    a.xo)((function() {
                        i()
                    }
                    ))),
                    {
                        zIndex: (0,
                        h.tB)(r),
                        open: o,
                        close: i,
                        isLastDialog: function() {
                            return "dialog" === e && ue.isLastDialog(r.value)
                        }
                    }
                }("popup", {
                    visible: Y
                }), oe = le.zIndex, ie = 0, de = !1, fe = !1, be = function(t) {
                    if (e.alignPoint) {
                        var n = t.pageX
                          , a = t.pageY;
                        Z.value = {
                            top: a,
                            left: n
                        }
                    }
                }, ke = function() {
                    if (T.value && _.value && ae.value) {
                        var t = ae.value.getBoundingClientRect()
                          , n = e.alignPoint ? {
                            top: Z.value.top,
                            bottom: Z.value.top,
                            left: Z.value.left,
                            right: Z.value.left,
                            scrollTop: Z.value.top,
                            scrollBottom: Z.value.top,
                            scrollLeft: Z.value.left,
                            scrollRight: Z.value.left,
                            width: 0,
                            height: 0
                        } : W(T.value, t)
                          , l = function() {
                            return W(_.value, t)
                        }
                          , r = l()
                          , o = function(e, t, n, a) {
                            var l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
                              , r = l.offset
                              , o = void 0 === r ? 0 : r
                              , i = l.translate
                              , u = void 0 === i ? [0, 0] : i
                              , c = l.customStyle
                              , s = void 0 === c ? {} : c
                              , d = l.autoFitPosition
                              , f = void 0 !== d && d
                              , v = e
                              , p = D(e, n, a, {
                                offset: o,
                                translate: u
                            });
                            if (f) {
                                var m = F(e, p, {
                                    containerRect: t,
                                    popupRect: a,
                                    triggerRect: n,
                                    offset: o,
                                    translate: u
                                });
                                p = m.popupPosition,
                                v = m.position
                            }
                            return {
                                style: j({
                                    left: "".concat(p.left, "px"),
                                    top: "".concat(p.top, "px")
                                }, s),
                                position: v
                            }
                        }(e.position, t, n, r, {
                            offset: e.popupOffset,
                            translate: e.popupTranslate,
                            customStyle: e.popupStyle,
                            autoFitPosition: e.autoFitPosition
                        })
                          , i = o.style
                          , u = o.position;
                        e.autoFitTransformOrigin && (B.value = {
                            transformOrigin: U(u)
                        }),
                        e.autoFitPopupMinWidth ? i.minWidth = "".concat(n.width, "px") : e.autoFitPopupWidth && (i.width = "".concat(n.width, "px")),
                        O.value !== u && (O.value = u),
                        V.value = i,
                        e.showArrow && (0,
                        a.dY)((function() {
                            G.value = function(e, t, n, a) {
                                var l = a.customStyle
                                  , r = void 0 === l ? {} : l;
                                if (["top", "tl", "tr", "bottom", "bl", "br"].includes(e)) {
                                    var o = Math.abs(t.scrollLeft + t.width / 2 - n.scrollLeft);
                                    return o > n.width - 8 && (o = t.width > n.width ? n.width / 2 : n.width - 8),
                                    ["top", "tl", "tr"].includes(e) ? j({
                                        left: "".concat(o, "px"),
                                        bottom: "0",
                                        transform: "translate(-50%,50%) rotate(45deg)"
                                    }, r) : j({
                                        left: "".concat(o, "px"),
                                        top: "0",
                                        transform: "translate(-50%,-50%) rotate(45deg)"
                                    }, r)
                                }
                                var i = Math.abs(t.scrollTop + t.height / 2 - n.scrollTop);
                                return i > n.height - 8 && (i = t.height > n.height ? n.height / 2 : n.height - 8),
                                ["left", "lt", "lb"].includes(e) ? j({
                                    top: "".concat(i, "px"),
                                    right: "0",
                                    transform: "translate(50%,-50%) rotate(45deg)"
                                }, r) : j({
                                    top: "".concat(i, "px"),
                                    left: "0",
                                    transform: "translate(-50%,-50%) rotate(45deg)"
                                }, r)
                            }(u, n, l(), {
                                customStyle: e.arrowStyle
                            })
                        }
                        ))
                    }
                }, Ae = function(e, t) {
                    if (e !== Y.value || 0 !== ie) {
                        var n = function() {
                            N.value = e,
                            d("update:popupVisible", e),
                            d("popupVisibleChange", e),
                            e && (0,
                            a.dY)((function() {
                                ke()
                            }
                            ))
                        };
                        e || (K = null,
                        J = null),
                        t ? (ie && (window.clearTimeout(ie),
                        ie = 0),
                        e !== Y.value && (ie = window.setTimeout(n, t))) : n()
                    }
                }, Le = function(t) {
                    var n;
                    null == (n = p.onClick) || n.call(p, t),
                    e.disabled || Y.value && !e.clickToClose || (C.value.includes("click") ? (be(t),
                    Ae(!Y.value)) : C.value.includes("contextMenu") && Y.value && Ae(!1))
                }, Ee = function(t) {
                    var n;
                    null == (n = p.onMouseenter) || n.call(p, t),
                    !e.disabled && C.value.includes("hover") && (be(t),
                    Ae(!0, e.mouseEnterDelay))
                }, we = function(e) {
                    null == I || I.onMouseenter(e),
                    Ee(e)
                }, Ie = function(t) {
                    var n;
                    null == (n = p.onMouseleave) || n.call(p, t),
                    !e.disabled && C.value.includes("hover") && Ae(!1, e.mouseLeaveDelay)
                }, Se = function(e) {
                    null == I || I.onMouseleave(e),
                    Ie(e)
                }, xe = function(t) {
                    var n;
                    null == (n = p.onFocusin) || n.call(p, t),
                    !e.disabled && C.value.includes("focus") && Ae(!0, e.focusDelay)
                }, Te = function(t) {
                    var n;
                    null == (n = p.onFocusout) || n.call(p, t),
                    !e.disabled && C.value.includes("focus") && e.blurToClose && Ae(!1)
                }, _e = function(t) {
                    var n;
                    null == (n = p.onContextmenu) || n.call(p, t),
                    e.disabled || !C.value.includes("contextMenu") || Y.value && !e.clickToClose || (be(t),
                    Ae(!Y.value),
                    t.preventDefault())
                };
                (0,
                a.Gt)(te, (0,
                h.Kh)({
                    onMouseenter: we,
                    onMouseleave: Se,
                    addChildRef: function(e) {
                        R.add(e),
                        null == I || I.addChildRef(e)
                    },
                    removeChildRef: function(e) {
                        R.delete(e),
                        null == I || I.removeChildRef(e)
                    }
                }));
                var Ne = function() {
                    E(document.documentElement, "mousedown", je),
                    de = !1
                }
                  , Oe = function(e, t) {
                    var n = (0,
                    h.KR)(e[t]);
                    return (0,
                    a.$u)((function() {
                        var a = e[t];
                        n.value !== a && (n.value = a)
                    }
                    )),
                    n
                }(f, "content")
                  , Ve = (0,
                a.EW)((function() {
                    var t;
                    return e.hideEmpty && function(e) {
                        if (!e)
                            return !0;
                        var t, n = Q(e);
                        try {
                            for (n.s(); !(t = n.n()).done; )
                                if (t.value.children)
                                    return !1
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return !0
                    }(null == (t = Oe.value) ? void 0 : t.call(Oe))
                }
                ))
                  , je = function(e) {
                    var t, n, a;
                    if (!(null == (t = T.value) ? void 0 : t.contains(e.target)) && !(null == (n = _.value) ? void 0 : n.contains(e.target))) {
                        var l, r = ge(R);
                        try {
                            for (r.s(); !(l = r.n()).done; )
                                if (null == (a = l.value.value) ? void 0 : a.contains(e.target))
                                    return
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        Ne(),
                        Ae(!1)
                    }
                }
                  , We = function(t, n) {
                    var a = (0,
                    m.A)(t, 2)
                      , l = a[0]
                      , r = a[1]
                      , o = n.scrollTop
                      , i = n.scrollLeft;
                    return Math.abs(o - l) >= e.scrollToCloseDistance || Math.abs(i - r) >= e.scrollToCloseDistance
                }
                  , Be = re((function(t) {
                    if (Y.value)
                        if (e.scrollToClose || (null == A ? void 0 : A.scrollToClose)) {
                            var n = t.target;
                            K || (K = [n.scrollTop, n.scrollLeft]),
                            We(K, n) ? Ae(!1) : ke()
                        } else
                            ke()
                }
                ))
                  , Fe = function() {
                    E(window, "scroll", De),
                    fe = !1
                }
                  , De = re((function(e) {
                    var t = e.target.documentElement;
                    J || (J = [t.scrollTop, t.scrollLeft]),
                    We(J, t) && (Ae(!1),
                    Fe())
                }
                ))
                  , Ue = function() {
                    Y.value && ke()
                }
                  , Ge = function() {
                    Ue(),
                    d("resize")
                }
                  , ze = function(t) {
                    e.preventFocus && t.preventDefault()
                };
                null == I || I.addChildRef(_);
                var Pe, Qe = (0,
                a.EW)((function() {
                    return Y.value ? e.openedClass : void 0
                }
                ));
                (0,
                a.wB)(Y, (function(t) {
                    if (e.clickOutsideToClose && (!t && de ? Ne() : t && !de && (L(document.documentElement, "mousedown", je),
                    de = !0)),
                    (e.scrollToClose || (null == A ? void 0 : A.scrollToClose)) && (L(window, "scroll", De),
                    fe = !0),
                    e.updateAtScroll || (null == A ? void 0 : A.updateAtScroll))
                        if (t) {
                            var n, a = ge(Pe = z(T.value));
                            try {
                                for (a.s(); !(n = a.n()).done; )
                                    n.value.addEventListener("scroll", Be)
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        } else if (Pe) {
                            var l, r = ge(Pe);
                            try {
                                for (r.s(); !(l = r.n()).done; )
                                    l.value.removeEventListener("scroll", Be)
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            Pe = void 0
                        }
                    t && (He.value = !0)
                }
                )),
                (0,
                a.wB)((function() {
                    return [e.autoFitPopupWidth, e.autoFitPopupMinWidth]
                }
                ), (function() {
                    Y.value && ke()
                }
                ));
                var Xe = function(e) {
                    var t, n = e.elementRef, a = e.onResize;
                    return {
                        createResizeObserver: function() {
                            n.value && (t = new P.A((function(e) {
                                var t = e[0];
                                y(a) && a(t)
                            }
                            ))).observe(n.value)
                        },
                        destroyResizeObserver: function() {
                            t && (t.disconnect(),
                            t = null)
                        }
                    }
                }({
                    elementRef: ae,
                    onResize: Ue
                })
                  , Ze = Xe.createResizeObserver
                  , Ke = Xe.destroyResizeObserver;
                (0,
                a.sV)((function() {
                    if (Ze(),
                    Y.value && (ke(),
                    e.clickOutsideToClose && !de && (L(document.documentElement, "mousedown", je),
                    de = !0),
                    e.updateAtScroll || (null == A ? void 0 : A.updateAtScroll))) {
                        var t, n = ge(Pe = z(T.value));
                        try {
                            for (n.s(); !(t = n.n()).done; )
                                t.value.addEventListener("scroll", Be)
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }
                )),
                (0,
                a.$u)((function() {
                    Y.value && ke()
                }
                )),
                (0,
                a.Y4)((function() {
                    Ae(!1)
                }
                )),
                (0,
                a.xo)((function() {
                    if (null == I || I.removeChildRef(_),
                    Ke(),
                    de && Ne(),
                    fe && Fe(),
                    Pe) {
                        var e, t = ge(Pe);
                        try {
                            for (t.s(); !(e = t.n()).done; )
                                e.value.removeEventListener("scroll", Be)
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        Pe = void 0
                    }
                }
                ));
                var He = (0,
                h.KR)(Y.value)
                  , Je = (0,
                h.KR)(!1)
                  , Ye = function() {
                    Je.value = !0
                }
                  , qe = function() {
                    Je.value = !1,
                    Y.value && d("show")
                }
                  , $e = function() {
                    Je.value = !1,
                    Y.value || (He.value = !1,
                    d("hide"))
                };
                return function() {
                    var t, n;
                    return x.value = null != (n = null == (t = f.default) ? void 0 : t.call(f)) ? n : [],
                    H(x.value, {
                        class: Qe.value,
                        onClick: Le,
                        onMouseenter: Ee,
                        onMouseleave: Ie,
                        onFocusin: xe,
                        onFocusout: Te,
                        onContextmenu: _e
                    }),
                    (0,
                    a.bF)(a.FK, null, [e.autoFixPosition ? (0,
                    a.bF)(ee, {
                        onResize: Ge
                    }, {
                        default: function() {
                            return [x.value]
                        }
                    }) : x.value, (0,
                    a.bF)(ce, null, {
                        default: function() {
                            return [(0,
                            a.bF)(a.Im, {
                                to: ne.value,
                                disabled: !e.renderToBody
                            }, {
                                default: function() {
                                    return [(!e.unmountOnClose || Y.value || He.value) && !Ve.value && (0,
                                    a.bF)(ee, {
                                        onResize: Ue
                                    }, {
                                        default: function() {
                                            return [(0,
                                            a.bF)("div", (0,
                                            a.v6)({
                                                ref: _,
                                                class: ["".concat(k, "-popup"), "".concat(k, "-position-").concat(O.value)],
                                                style: (t = Ce({}, V.value),
                                                n = {
                                                    zIndex: oe.value,
                                                    pointerEvents: Je.value ? "none" : "auto"
                                                },
                                                ye(t, Me(n))),
                                                "trigger-placement": O.value,
                                                onMouseenter: we,
                                                onMouseleave: Se,
                                                onMousedown: ze
                                            }, M.value), [(0,
                                            a.bF)(g.eB, {
                                                name: e.animationName,
                                                duration: e.duration,
                                                appear: !0,
                                                onBeforeEnter: Ye,
                                                onAfterEnter: qe,
                                                onBeforeLeave: Ye,
                                                onAfterLeave: $e
                                            }, {
                                                default: function() {
                                                    var t;
                                                    return [(0,
                                                    a.bo)((0,
                                                    a.bF)("div", {
                                                        class: "".concat(k, "-popup-wrapper"),
                                                        style: B.value
                                                    }, [(0,
                                                    a.bF)("div", {
                                                        class: ["".concat(k, "-content"), e.contentClass],
                                                        style: e.contentStyle
                                                    }, [null == (t = f.content) ? void 0 : t.call(f)]), e.showArrow && (0,
                                                    a.bF)("div", {
                                                        ref: X,
                                                        class: ["".concat(k, "-arrow"), e.arrowClass],
                                                        style: G.value
                                                    }, null)]), [[g.aG, Y.value]])]
                                                }
                                            })])];
                                            var t, n
                                        }
                                    })]
                                }
                            })]
                        }
                    })])
                }
            }
        })
          , Se = Object.assign(Ie, {
            install: function(e, t) {
                p(e, t);
                var n = function(e) {
                    var t;
                    return null != (t = null == e ? void 0 : e.componentPrefix) ? t : "A"
                }(t);
                e.component(n + Ie.name, Ie)
            }
        })
    }
    ,
    18323: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => o
        });
        var a = n(20641)
          , l = n(90033);
        const r = (0,
        a.pM)({
            __name: "LivingTag",
            props: {
                left: {
                    default: 15
                },
                top: {
                    default: 60
                }
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        style: (0,
                        l.Tr)({
                            left: t.left + "px",
                            top: t.top + "px"
                        }),
                        class: "living-tag"
                    }, n[0] || (n[0] = [(0,
                    a.eW)(" 直播中 "), (0,
                    a.Lk)("span", {
                        class: "living-tag-icon"
                    }, null, -1)]), 4)
                }
            }
        })
          , o = (0,
        n(66262).A)(r, [["__scopeId", "data-v-15fc6a7c"]])
    }
    ,
    18883: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => C
        });
        var a = n(34921)
          , l = n.n(a)
          , r = n(20641)
          , o = n(53751)
          , i = n(90033)
          , u = n(50953)
          , c = n(57142)
          , s = (n(62010),
        n(85013))
          , d = {
            class: "user-img"
        }
          , f = ["src"]
          , v = {
            class: "gift-info"
        }
          , p = {
            class: "gift-name"
        }
          , m = {
            key: 0,
            class: "gift-img"
        }
          , h = ["src"]
          , g = {
            class: "relative slot"
        }
          , b = {
            key: 0,
            class: "batch-shadow"
        }
          , k = {
            key: 1,
            class: "batch-size"
        };
        const y = (0,
        r.pM)({
            __name: "GiftSlot",
            props: {
                gift: {},
                name: {},
                url: {},
                bgClass: {},
                index: {},
                headUrl: {}
            },
            setup: function(e) {
                var t = (0,
                u.KR)()
                  , n = e;
                return (0,
                r.wB)((function() {
                    return n.gift.comboCount
                }
                ), (function() {
                    (0,
                    s.A)(t.value, {
                        scaleX: 1.6,
                        scaleY: 1.6
                    }, {
                        duration: 0,
                        easing: [.17, .67, .83, .67]
                    }),
                    (0,
                    s.A)(t.value, {
                        scaleX: 1,
                        scaleY: 1
                    }, {
                        duration: 140,
                        easing: [.17, .67, .83, .67]
                    })
                }
                )),
                function(e, a) {
                    return (0,
                    r.uX)(),
                    (0,
                    r.CE)("div", {
                        class: (0,
                        i.C4)(["gift-slot-item", n.bgClass]),
                        style: (0,
                        i.Tr)({
                            transform: "translateY(".concat(48 * n.index + 11, "px)")
                        })
                    }, [(0,
                    r.Lk)("div", d, [n.headUrl ? ((0,
                    r.uX)(),
                    (0,
                    r.CE)("img", {
                        key: 0,
                        src: n.headUrl,
                        alt: ""
                    }, null, 8, f)) : (0,
                    r.Q3)("", !0)]), (0,
                    r.Lk)("div", v, [(0,
                    r.Lk)("h4", null, (0,
                    i.v_)(n.gift.userName), 1), (0,
                    r.Lk)("div", p, (0,
                    i.v_)("送".concat(n.name)), 1)]), n.url ? ((0,
                    r.uX)(),
                    (0,
                    r.CE)("div", m, [(0,
                    r.Lk)("img", {
                        src: n.url,
                        alt: ""
                    }, null, 8, h)])) : (0,
                    r.Q3)("", !0), (0,
                    r.Lk)("div", g, [0 !== n.gift.comboCount && n.gift.batchSize > 1 ? ((0,
                    r.uX)(),
                    (0,
                    r.CE)("div", b, [a[0] || (a[0] = (0,
                    r.eW)(" x")), (0,
                    r.Lk)("span", null, (0,
                    i.v_)(n.gift.batchSize), 1)])) : (0,
                    r.Q3)("", !0), 0 !== n.gift.comboCount && n.gift.batchSize > 1 ? ((0,
                    r.uX)(),
                    (0,
                    r.CE)("div", k, [a[1] || (a[1] = (0,
                    r.eW)(" x")), (0,
                    r.Lk)("span", null, (0,
                    i.v_)(n.gift.batchSize), 1)])) : (0,
                    r.Q3)("", !0), (0,
                    r.Lk)("div", {
                        ref_key: "comboRef",
                        ref: t,
                        class: "gift-combo"
                    }, [a[2] || (a[2] = (0,
                    r.eW)(" x")), (0,
                    r.Lk)("span", null, (0,
                    i.v_)(0 === n.gift.comboCount ? n.gift.batchSize : n.gift.comboCount), 1)], 512)])], 6)
                }
            }
        })
          , M = (0,
        n(66262).A)(y, [["__scopeId", "data-v-49b737b7"]]);
        var A = n(40303)
          , L = n(16265)
          , E = n(97786)
          , w = n(48870);
        const C = (0,
        r.pM)({
            __name: "index",
            setup: function(e) {
                var t = (0,
                r.WQ)(c.pN)
                  , n = (0,
                r.WQ)(c.bN)
                  , a = (0,
                r.EW)((function() {
                    return l()(n.value, 2)
                }
                ));
                function s(e) {
                    var n, a = e.batchSize, l = void 0 === a ? 1 : a, r = e.giftId, o = t.value[r] ? 0 : null === (n = t.value[r]) || void 0 === n ? void 0 : n.unitPrice;
                    if (1 === o)
                        return "bg-1";
                    var i = o * l;
                    return i < 10 ? "bg-1" : i < 188 ? "bg-2" : i < 1314 ? "bg-3" : 1 === l ? "bg-4" : "bg-5"
                }
                function d(e) {
                    var n = e.giftId;
                    return t.value[n] ? t.value[n].giftName : "礼物"
                }
                var f = (0,
                u.KR)(1 === (0,
                E.rXt)(w.s4, 0).value);
                return (0,
                L.iX)(A.Mu, (function(e) {
                    f.value = e
                }
                )),
                function(e, n) {
                    return f.value ? (0,
                    r.Q3)("", !0) : ((0,
                    r.uX)(),
                    (0,
                    r.Wv)(o.F, {
                        key: 0,
                        name: "zoom",
                        tag: "div",
                        class: (0,
                        i.C4)(["gift-stack", {
                            show: 0 !== a.value.length
                        }]),
                        style: (0,
                        i.Tr)({
                            height: "".concat(48 * a.value.length, "px")
                        })
                    }, {
                        default: (0,
                        r.k6)((function() {
                            return [((0,
                            r.uX)(!0),
                            (0,
                            r.CE)(r.FK, null, (0,
                            r.pI)(a.value, (function(e, n) {
                                var a, l, o;
                                return (0,
                                r.uX)(),
                                (0,
                                r.CE)("div", {
                                    key: null !== (a = e.mergeKey) && void 0 !== a ? a : e.addTime,
                                    class: "gift"
                                }, [(0,
                                r.bF)(M, {
                                    url: (l = e,
                                    o = l.giftId,
                                    t.value[o] ? t.value[o].giftUrl : ""),
                                    gift: e,
                                    name: d(e),
                                    index: n,
                                    "bg-class": s(e),
                                    "head-url": e.headUrl
                                }, null, 8, ["url", "gift", "name", "index", "bg-class", "head-url"])])
                            }
                            )), 128))]
                        }
                        )),
                        _: 1
                    }, 8, ["class", "style"]))
                }
            }
        })
    }
    ,
    22192: e => {
        "use strict";
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4xMzkgMS43MTZsLS41OS41OUw3Ljc0NCA1LjUgNC41NDkgOC42OTRsLjU5LjU5TDguOTIyIDUuNSA1LjE0IDEuNzE2eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjciLz48L3N2Zz4="
    }
    ,
    22372: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => u
        });
        var a = n(20641)
          , l = n(90033)
          , r = {
            key: 0,
            class: "announcement"
        }
          , o = {
            class: "announcement-full"
        };
        const i = (0,
        a.pM)({
            __name: "Announcement",
            props: {
                announcement: {}
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    return t.announcement ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", r, [(0,
                    a.Lk)("p", null, [n[0] || (n[0] = (0,
                    a.Lk)("strong", null, "直播公告：", -1)), (0,
                    a.eW)((0,
                    l.v_)(t.announcement), 1)]), (0,
                    a.Lk)("p", o, [n[1] || (n[1] = (0,
                    a.Lk)("strong", null, "直播公告：", -1)), (0,
                    a.eW)((0,
                    l.v_)(t.announcement), 1)])])) : (0,
                    a.Q3)("", !0)
                }
            }
        })
          , u = (0,
        n(66262).A)(i, [["__scopeId", "data-v-628c5e97"]])
    }
    ,
    23013: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => d
        });
        var a = n(222)
          , l = n(20641)
          , r = n(53751)
          , o = n(90033)
          , i = n(50953)
          , u = {
            key: 1,
            class: "empty"
        };
        const c = (0,
        l.pM)({
            __name: "Loading",
            props: {
                teleport: {
                    default: "body"
                },
                isMask: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: function(e, t) {
                var n = t.expose
                  , a = (0,
                i.KR)(!1)
                  , c = (0,
                i.KR)(!1)
                  , s = (0,
                i.KR)("#909090")
                  , d = (0,
                i.KR)("暂无主播开播")
                  , f = e;
                return n({
                    visible: a,
                    isEmpty: c
                }),
                function(e, t) {
                    return (0,
                    l.uX)(),
                    (0,
                    l.Wv)(r.eB, {
                        name: "toast-wrapper"
                    }, {
                        default: (0,
                        l.k6)((function() {
                            return [((0,
                            l.uX)(),
                            (0,
                            l.Wv)(l.Im, {
                                to: f.teleport
                            }, [(0,
                            l.bo)((0,
                            l.Lk)("div", {
                                class: (0,
                                o.C4)(["container", {
                                    mask: f.isMask
                                }])
                            }, [a.value ? ((0,
                            l.uX)(),
                            (0,
                            l.CE)("svg", {
                                key: 0,
                                lass: "svg-container",
                                width: "80",
                                height: "80",
                                viewBox: "0 0 80 80",
                                xmlns: "http://www.w3.org/2000/svg",
                                style: (0,
                                o.Tr)({
                                    color: s.value
                                })
                            }, t[0] || (t[0] = [(0,
                            l.Lk)("path", {
                                "stroke-dasharray": "160",
                                "stroke-linecap": "round",
                                d: "M40 40l8.201-8.201c4.53-4.53 11.873-4.53 16.402 0A11.598 11.598 0 0 1 68 40c0 6.405-5.193 11.598-11.598 11.598a11.598 11.598 0 0 1-8.201-3.397L40 40l-8.201-8.201c-4.53-4.53-11.873-4.53-16.402 0A11.598 11.598 0 0 0 12 40c0 6.405 5.193 11.598 11.598 11.598 3.076 0 6.026-1.222 8.201-3.397L40 40z",
                                stroke: "currentColor",
                                "stroke-width": "7",
                                fill: "none",
                                "fill-rule": "evenodd"
                            }, [(0,
                            l.Lk)("animate", {
                                id: "b",
                                attributeName: "stroke-dashoffset",
                                begin: "0s;a.end",
                                dur: "500ms",
                                from: "0",
                                to: "155",
                                calcMode: "linear"
                            }), (0,
                            l.Lk)("animate", {
                                id: "a",
                                attributeName: "stroke-dashoffset",
                                begin: "b.end",
                                dur: "500ms",
                                from: "165",
                                to: "320",
                                calcMode: "linear"
                            })], -1)]), 4)) : (0,
                            l.Q3)("", !0), c.value ? ((0,
                            l.uX)(),
                            (0,
                            l.CE)("div", u, [t[1] || (t[1] = (0,
                            l.Lk)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAAEwO1XwAAABWVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8l0s7tAAAAc3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRscHR4fICIjJCUmJykqLC0uLzAyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTlBUVVZXWFlaW1xdXl9gYWJkZWZoaWpsbnBxcnN0dXZ3eHl6e3x9fn+Ab9a3aAAACJNJREFUGBm1wetDU3ligOE3QTReCBguClQb3ZHCrtq1MmKV1K12VUDQqeB4KRhEbbIRE97//0PP75wDnhNMhJnO85CY4kBboCkxSUikTUQBAQGRSIlALO00QaZAJCYRLYGC0AR2kMgeCDQRkIiknhFITskEicI4+3wCWCOQhICAAoVRvhKRJUAEbzwW4T4ywgcQAUGhbgOQiLMFQHgFODUACJKSiG2yTLHvq6lnZOkYB14pKSVxskhCCRwjpmCVWFvAJyRu+EFJKQWJGHlMxICIjAsMCErEWaYkIkhQXQK1TuHFAJFfhWeSUPAFCYnUJKE2iP0sCS3Qy6j67/RUrpY4rOo+cgbVQYIrKt+8V77RMqmml8lqOkbslsMkTpP4KDFfEmupE8SUiJJwmJYkvAZ4noQwLYmOcF1SuqakBCWyoKAdijpIxDncAtaNEBgh4i4uAm6ARaAjKKD4EHAPJLIl2AIUd4ERIwRGiLiJEixPM6rCvRqBw5QlZQMlMSDgUxLCKUkosCkJ6ygJi0SU2CWVhBLzPXlKYto9eihpmR7U9nm+7415fMdfdvxmuUx/M6a2lhbvPFrdNbFJD7eMtM/T7amRNoc11Jf0cNbINDnv1WH6qaslDgyql8laNxghq6PbpGZUshbUjQd7KllzKrGqtslRiVzUZbLKKoFKnnoBaOs0OTP6BtjRQbp8MjFEl7YCKqmWsU9EiqeJjJq4RGJEVxjWJRLqMFxQSdW0AdR1hYRKVe8Qm9IHRNb0HAmVQCWhUtJVEmrr4nRbO6Qqau3UvFoloYJKasLYEFDruFUB3hlsk7qqf4NlvUJe0dQ7uqhEVPJUIjW9R84v+lcClRyVyLzWyHqi70ioZ8kYNLVNVlM32NfWf5Czoq0qWRV1km/K6kf6eupn8saM/Jlj2jbS+ReO55o/sMX3za3s2sMv9FIar06VCxxRedlvdv7CDz2z29cq/Wya2F19dGdxacvUDL3UDJpX+GbwiUF7kO9qG3lKt/NtI7c4rGzkFd8zZuQ93aaNnKWHl2qDvDG1SW+X1SZZJbVOP8PqezLUj+QUT58kZ1i9xYFt7ZA1YrBO1mV1kNSoWiBjwkSLrJfaJqXOkaXuPdhQF8hSZ4hd0zZZk9oChlWyxlRiapmsn/UiEZWctlaJlLRDzm2dJqKSc16/EnmjM+SMaRu4oJKnElHpYmTtg3qDvCd6HdA2XYZMfKLLoO7AnN4nNdhUd4pQ6hh5DNwwssA+FVZ0hMQlExUip4tEPhlrkVJhV0m5j32PTa2T2NICKokVrQMNrZFSL8CwSmJJh1FJqATaIVHUD0Q29CSxRZ1CJaESqCRO6xqRB3qG2M9aRSXR0ilgVrdIqUT2tEjsP3UClURVnT9VUyukOtqevthSSazpaTa1QKJhos6+kqkREl8UFvUKqW2Dd0Bly04NGDI2QUqFir5m30Dtxb0CUDdWAaaXlqscUAGVLu9MFcm7qiuAeoKcgjoLDd0hr6nngJu6Rs6ftUZEJU8lUMm5r6eIqOT8lz4jeKuPyLqu80RUclQSKllFdQrq2iTrhW6RWNfPZG2bGiTjnMo+dYGshrFLZKn/wb5JdYKsaktXyPmHdvhmVT1LX0MqWTvqOH3pCDlf1Lscz476vxzPqpG/cyyTBr8McBzrxn79qcDRvfUHShx2076e8V2VxU17OcGRVeYWVzZ3PbC7ubI4V+H/SenmG/t6c7PE7/HTW4/o7U/8FqPrZrRf3786UiCjMHL1/uu2GeujHMvktvs6z2dO0MeJmecd921PckSlVVPtR2WOpPyobWq1xI+N7Zj4PMexzH02sTNGf9O7xjp3Cxxb4W7H2JdpeivvGPs4zm80/tHYTpkeVo3Vz/A7nKkbW+V7JtsGzXF6q660jLRWqvQ23jRoT3JIzdhderrUMKNxiZ7uGqvRZd3g81l6Gdy2y/YgvZz9bLBOzqbBK3oqNg3qU0Sm6gbNAXp6ZbBJxluDR/R23WCe1LxBjd4eGbzlwDODp/Rx3+AUqVMGL+jjqcEzUjcNntPPnEGNVM3gHv08N7hJrGzQPEE/hR2DxiyR2YbBToF+TjQNygTLBlfor/jOLu+K9HfFYJlIxeA1hxUnr8/fvz03ViA2WjejXiFWGJu7fX/++mSRw14bVIBFgyt0mdj2m3dDxCq1rY52tmoVYkPv/GZ7gi5XDBaBTSO7BXJGGubVSxxSqpvXGCGnsGtkE0oGq+RUjbXmJ09N19oGnQpdKh2Ddm361OR8y1iVnFWDEuMGD8kaaBnZmyIxa7BFly2DWRJTe0ZaRbIeGoxTNbhD1pTBA/atGZwj57TBGvseGJwh645BlSmDRbJGDDbY98FIp0hOsWPkA/s2DE6Sdd9gmrLBEjkrBvVhggsNgxpdagaNCwTDdYMVcp4YnKewa2SLvHW7PeaQx3ZbJ2/LyBdgxWCYvEstsz5VSBUGBgqkRj+Z1bpE3jmDVWDOYJFugwtNEzs3igSlxx1TncclguKNHRPNhUG61QzmiOwYaQ/yA0OfzPk0xA8M7Br5SHDd4An93TDxYW3tg4kb9Ldk8K/E3hjM0M+YQfsCsQttg2n6uWrwK4nSVyN7Ffq4bTBNatpgiT5G94x0zpGqGrSH6G3e4CKpSYNlejv3xeCfOHDNoDNOT5MGrWFiwy2DKj2NdQzmyJgxNktPC8b2Nh482NgztkBPs8aukjPaNnhZoJeJljmtCXp6YdC5SJfBbYPOZXoaWffA+gg9XdkzeH+Cw24Z+1imj4GRqamRAfp5Y2yB7yq9N1Yf5nc4vWdk8yS9jDeNNf6Z367419WHQ/Qz3TTx32f4A5Xfm9oY5Q90q22q/XiYP8xgre2Bxt//dJI/yMymeV/+5/nyw3u3/+3orp3gCKrPvvq7LHJE5evLO/5GP3NchdLw+FT1T0c3Tuz/AEw/9GHdt55jAAAAAElFTkSuQmCC",
                                alt: ""
                            }, null, -1)), (0,
                            l.Lk)("span", null, (0,
                            o.v_)(d.value), 1)])) : (0,
                            l.Q3)("", !0)], 2), [[r.aG, a.value || c.value]])], 8, ["to"]))]
                        }
                        )),
                        _: 1
                    })
                }
            }
        })
          , s = (0,
        n(66262).A)(c, [["__scopeId", "data-v-adf4a226"]])
          , d = function(e, t) {
            return a.S$ ? {
                open: function() {},
                close: function() {},
                showEmpty: function() {}
            } : function(e, t) {
                var n, r = (0,
                a.bF)((0,
                l.bF)(s, {
                    teleport: e,
                    isMask: null !== (n = null == t ? void 0 : t.isMask) && void 0 !== n && n
                })), o = r.instance, i = (r.unmount,
                o.$), u = (i.proxy,
                i.exposed);
                return {
                    vm: u,
                    handler: {
                        open: function() {
                            u.visible.value = !0
                        },
                        close: function(e) {
                            u.visible.value = !1,
                            "boolean" == typeof e && (u.isEmpty.value = e)
                        }
                    }
                }
            }(e, t).handler
        }
    }
    ,
    23505: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => s
        });
        var a = n(20641)
          , l = n(90033)
          , r = n(55373)
          , o = n.n(r)
          , i = {
            key: 0,
            class: "loading"
        }
          , u = ["src"];
        const c = (0,
        a.pM)({
            __name: "index",
            props: {
                size: {
                    default: 200
                },
                text: {}
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                a.EW)((function() {
                    return t.text ? "https://ksurl.cn/createqrcode?".concat(o().stringify({
                        content: t.text,
                        width: t.size,
                        height: t.size,
                        contentType: "URL",
                        toShortUrl: !1
                    })) : ""
                }
                ));
                return function(e, r) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        class: "qrcode",
                        style: (0,
                        l.Tr)({
                            width: "".concat(t.size, "px"),
                            height: "".concat(t.size, "px")
                        })
                    }, [n.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("img", {
                        key: 1,
                        class: "img",
                        src: n.value,
                        alt: "qrcode"
                    }, null, 8, u)) : ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", i))], 4)
                }
            }
        })
          , s = (0,
        n(66262).A)(c, [["__scopeId", "data-v-32242d48"]])
    }
    ,
    25506: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => c
        });
        var a = n(82284)
          , l = (n(74423),
        n(62010),
        n(2892),
        n(21699),
        n(20641))
          , r = n(90033)
          , o = n(53751)
          , i = ["name", "value", "disabled"]
          , u = {
            class: "checkbox-label"
        };
        const c = (0,
        l.pM)({
            __name: "index",
            props: {
                value: {
                    default: ""
                },
                modelValue: {
                    type: [String, Number, Boolean],
                    default: ""
                },
                name: {
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                border: {
                    type: Boolean,
                    default: !1
                },
                indeterminate: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["update:modelValue", "change"],
            setup: function(e, t) {
                var n = t.emit
                  , c = e
                  , s = n
                  , d = (0,
                l.WQ)("CHEKBOX_COMPONENTS", null)
                  , f = (0,
                l.EW)((function() {
                    return !!d
                }
                ))
                  , v = (0,
                l.EW)({
                    get: function() {
                        var e;
                        return f.value ? (null === (e = d.modelValue) || void 0 === e ? void 0 : e.value.includes(c.value)) || !1 : "boolean" == typeof c.modelValue ? c.modelValue : c.value === c.modelValue
                    },
                    set: function(e) {
                        f.value ? d.setValue(e, c.value) : s("update:modelValue", e)
                    }
                })
                  , p = (0,
                l.EW)((function() {
                    return c.indeterminate && !v.value
                }
                ))
                  , m = (0,
                l.EW)((function() {
                    return c.disabled || f.value && d.groupDisabled.value
                }
                ));
                function h() {
                    (0,
                    l.dY)((function() {
                        s("change", v.value, c.value)
                    }
                    ))
                }
                return function(e, t) {
                    return (0,
                    l.uX)(),
                    (0,
                    l.CE)("label", {
                        class: (0,
                        r.C4)(["checkbox", {
                            disabled: m.value,
                            bordered: c.border,
                            checked: v.value,
                            indeterminate: p.value
                        }])
                    }, [(0,
                    l.Lk)("span", {
                        class: (0,
                        r.C4)(["checkbox-input", {
                            disabled: m.value,
                            checked: v.value,
                            indeterminate: p.value
                        }])
                    }, [(0,
                    l.bo)((0,
                    l.Lk)("input", {
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return v.value = e
                        }
                        ),
                        name: c.name,
                        value: c.value,
                        disabled: m.value,
                        type: "checkbox",
                        "aria-hidden": "true",
                        class: "checkbox-hidden",
                        onChange: h
                    }, null, 40, i), [[o.lH, v.value]])], 2), (0,
                    l.Lk)("span", u, [(0,
                    l.RG)(e.$slots, "default", {}, (function() {
                        return [(0,
                        l.eW)((0,
                        r.v_)(c.value) + "--" + (0,
                        r.v_)((0,
                        a.A)(c.modelValue)) + "--" + (0,
                        r.v_)(c.modelValue), 1)]
                    }
                    ))])], 2)
                }
            }
        })
    }
    ,
    26886: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => s
        });
        var a = n(20641)
          , l = n(53751)
          , r = n(90033)
          , o = n(50953)
          , i = n(16265)
          , u = n(57142);
        const c = (0,
        a.pM)({
            __name: "TabPanal",
            props: {
                id: {
                    default: {}
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                value: {
                    default: {}
                }
            },
            setup: function(e, t) {
                var n = t.expose
                  , c = e
                  , s = (0,
                o.KR)(null)
                  , d = (0,
                o.KR)(null)
                  , f = (0,
                o.KR)({})
                  , v = (0,
                a.EW)((function() {
                    return c.id || f
                }
                ));
                n({
                    computedId: v,
                    disabled: c.disabled,
                    updateActive: h
                });
                var p = (0,
                i.cJ)(u.Zs).parent
                  , m = (0,
                a.EW)((function() {
                    return p.nowActive.value === v.value
                }
                ));
                function h() {
                    c.disabled || p.updateActive(v.value)
                }
                return (0,
                a.sV)((function() {
                    p.appendTab({
                        computedId: v,
                        $el: s.value
                    })
                }
                )),
                (0,
                a.xo)((function() {
                    p.removeTab({
                        computedId: v,
                        $el: s.value,
                        $elRoot: d.value
                    })
                }
                )),
                function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        ref_key: "tabItemRoot",
                        ref: d
                    }, [(0,
                    a.bo)((0,
                    a.Lk)("div", null, [(0,
                    a.RG)(e.$slots, "default")], 512), [[l.aG, m.value]]), (0,
                    a.Lk)("li", {
                        ref_key: "tabItem",
                        ref: s,
                        class: (0,
                        r.C4)(["tab-panel", {
                            active: m.value,
                            disabled: e.disabled
                        }]),
                        onClick: h
                    }, [(0,
                    a.RG)(e.$slots, "tab")], 2)], 512)
                }
            }
        })
          , s = (0,
        n(66262).A)(c, [["__scopeId", "data-v-284f4a9d"]])
    }
    ,
    27624: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => h
        }),
        n(52675),
        n(89463),
        n(28706),
        n(62010);
        var a = n(20641)
          , l = n(90033);
        const r = n.p + "images/7141aafd4fba1a5cb899.jpg";
        var o = ["href"]
          , i = ["src"]
          , u = {
            key: 0,
            class: "status",
            src: r
        }
          , c = {
            class: "right"
        }
          , s = {
            class: "name"
        }
          , d = {
            class: "pre"
        }
          , f = {
            class: "desc"
        }
          , v = {
            class: "cate"
        }
          , p = {
            class: "game"
        };
        const m = (0,
        a.pM)({
            __name: "index",
            props: {
                card: {}
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("a", {
                        class: "card",
                        target: "_blank",
                        href: "/".concat(t.card.living ? "u" : "profile", "/").concat(t.card.author.id)
                    }, [(0,
                    a.Lk)("div", {
                        class: (0,
                        l.C4)(["left", {
                            living: t.card.living
                        }])
                    }, [(0,
                    a.Lk)("img", {
                        class: "avatar",
                        src: t.card.author.avatar
                    }, null, 8, i), t.card.living ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("img", u)) : (0,
                    a.Q3)("", !0)], 2), (0,
                    a.Lk)("div", c, [(0,
                    a.Lk)("div", s, [(0,
                    a.Lk)("span", d, (0,
                    l.v_)(t.card.author.name), 1), "U" !== t.card.author.sex ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", {
                        key: 0,
                        class: (0,
                        l.C4)(["sex", {
                            male: "M" === t.card.author.sex,
                            female: "F" === t.card.author.sex
                        }])
                    }, null, 2)) : (0,
                    a.Q3)("", !0)]), (0,
                    a.Lk)("div", f, (0,
                    l.v_)(t.card.author.description || "主播偷懒，没有留下更多信息"), 1), (0,
                    a.Lk)("div", v, [n[0] || (n[0] = (0,
                    a.eW)(" 直播： ")), (0,
                    a.Lk)("span", p, (0,
                    l.v_)(t.card.gameInfo.name), 1)])])], 8, o)
                }
            }
        })
          , h = (0,
        n(66262).A)(m, [["__scopeId", "data-v-23b2589e"]])
    }
    ,
    27910: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="__2cEmqEl__mask0_215_78737" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" style="width:23px;height:23px"><path d="M0 0.152588H22V22.1526H0V0.152588Z" fill="currentColor"></path></mask><g mask="url(#__2cEmqEl__mask0_215_78737)"><path d="M11.0192 2.00513C16.0818 2.00513 20.1859 6.10918 20.1859 11.1718C20.1859 16.2344 16.0818 20.3385 11.0192 20.3385C5.9566 20.3385 1.85254 16.2344 1.85254 11.1718C1.85254 6.10918 5.9566 2.00513 11.0192 2.00513ZM11.0192 3.83846C6.96912 3.83846 3.68587 7.12171 3.68587 11.1718C3.68587 15.2219 6.96912 18.5051 11.0192 18.5051C15.0693 18.5051 18.3525 15.2219 18.3525 11.1718C18.3525 7.12171 15.0693 3.83846 11.0192 3.83846ZM14.4374 12.5275C14.4374 14.426 12.8984 15.965 10.9999 15.965C9.13865 15.965 7.6229 14.4857 7.56417 12.6387L7.56241 12.5275H14.4374ZM8.24991 7.94416C9.0093 7.94416 9.62491 8.55977 9.62491 9.31916C9.62491 10.0786 9.0093 10.6942 8.24991 10.6942C7.49052 10.6942 6.87491 10.0786 6.87491 9.31916C6.87491 8.55977 7.49052 7.94416 8.24991 7.94416ZM13.7499 7.94416C14.5093 7.94416 15.1249 8.55977 15.1249 9.31916C15.1249 10.0786 14.5093 10.6942 13.7499 10.6942C12.9905 10.6942 12.3749 10.0786 12.3749 9.31916C12.3749 8.55977 12.9905 7.94416 13.7499 7.94416Z" fill="currentColor"></path></g></svg>'
    }
    ,
    28504: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => F
        }),
        n(74423),
        n(62010),
        n(27495),
        n(21699),
        n(25440);
        var a = n(20641)
          , l = n(90033)
          , r = n(53751)
          , o = n(75220)
          , i = n(10467)
          , u = n(54756)
          , c = n.n(u)
          , s = n(12947)
          , d = n(50953)
          , f = n(36947)
          , v = n(17031)
          , p = n(62535)
          , m = n(59663)
          , h = n(34905)
          , g = n(72708)
          , b = n(16265)
          , k = n(61122)
          , y = {
            key: 0,
            class: "keyword items-center"
        }
          , M = {
            class: "content"
        }
          , A = {
            class: "tips"
        }
          , L = {
            class: "group"
        };
        const E = (0,
        a.pM)({
            __name: "index",
            props: {
                authorId: {},
                liveStreamId: {},
                followed: {}
            },
            emits: ["change-follow"],
            setup: function(e, t) {
                var n = t.emit
                  , r = e
                  , o = n;
                (0,
                a.sV)((function() {
                    (0,
                    v.cS)("FOLLOW_BUTTON", {
                        anchor_user_id: r.authorId,
                        live_stream_id: r.liveStreamId,
                        btn_name: r.followed === s.m3.Following ? "已关注" : "关注"
                    })
                }
                ));
                var u = (0,
                d.KR)(null)
                  , E = (0,
                d.KR)(!1)
                  , w = (0,
                m.w)();
                function C() {
                    var e;
                    N.value ? ((0,
                    v.TO)("FOLLOW_BUTTON", {
                        anchor_user_id: r.authorId,
                        live_stream_id: r.liveStreamId,
                        btn_name: "已关注"
                    }),
                    null === (e = u.value) || void 0 === e || e.show()) : S()
                }
                function R(e) {
                    return I.apply(this, arguments)
                }
                function I() {
                    return (I = (0,
                    i.A)(c().mark((function e(t) {
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return E.value = !0,
                                    w.setNeedToFollow(r.authorId, t),
                                    e.next = 4,
                                    (0,
                                    p.t)("FOLLOW_BUTTON");
                                case 4:
                                    if (!e.sent) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7,
                                    w.followAuthor();
                                case 7:
                                    o("change-follow", t);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                function S() {
                    (0,
                    v.TO)("FOLLOW_BUTTON", {
                        anchor_user_id: r.authorId,
                        live_stream_id: r.liveStreamId,
                        btn_name: "关注"
                    }),
                    N.value || R(h.I6.FOLLOW)
                }
                function x() {
                    var e;
                    (0,
                    v.TO)("FOLLOW_BUTTON", {
                        anchor_user_id: r.authorId,
                        live_stream_id: r.liveStreamId,
                        btn_name: "再想想"
                    }),
                    null === (e = u.value) || void 0 === e || e.hide()
                }
                function T() {
                    var e;
                    (0,
                    v.TO)("FOLLOW_BUTTON", {
                        anchor_user_id: r.authorId,
                        live_stream_id: r.liveStreamId,
                        btn_name: "确定"
                    }),
                    R(N.value ? h.I6.UNFOLLOW : h.I6.FOLLOW),
                    null === (e = u.value) || void 0 === e || e.hide()
                }
                var _ = (0,
                g.Zz)()
                  , N = (0,
                a.EW)((function() {
                    return _.hasLogin && (E.value ? w.currentFollowStatus : r.followed) === s.m3.Following
                }
                ));
                return (0,
                b.iX)(k.rg, (function() {
                    S()
                }
                )),
                function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.Wv)(f.A, {
                        ref_key: "toolRef",
                        ref: u,
                        manual: !0,
                        trigger: "click",
                        placement: "bottom"
                    }, {
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("div", {
                                class: "main",
                                onClick: C
                            }, [(0,
                            a.Lk)("button", {
                                class: (0,
                                l.C4)(["follow-btn flex items-center", {
                                    followed: N.value
                                }])
                            }, [(0,
                            a.Lk)("span", {
                                class: (0,
                                l.C4)("follow-span focus-span ".concat(N.value ? "active" : ""))
                            }, "已关注", 2), (0,
                            a.Lk)("span", {
                                class: (0,
                                l.C4)("follow-span ".concat(N.value ? "hidden" : ""))
                            }, "关注", 2), N.value ? (0,
                            a.Q3)("", !0) : ((0,
                            a.uX)(),
                            (0,
                            a.CE)("span", y, "G"))], 2)])]
                        }
                        )),
                        content: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("div", M, [(0,
                            a.Lk)("span", A, (0,
                            l.v_)("你确定取消关注吗？"), 1), (0,
                            a.Lk)("div", L, [(0,
                            a.Lk)("div", {
                                class: "button",
                                onClick: T
                            }, [(0,
                            a.Lk)("span", null, (0,
                            l.v_)("确定"), 1)]), (0,
                            a.Lk)("div", {
                                class: "button pri",
                                onClick: x
                            }, [(0,
                            a.Lk)("span", null, (0,
                            l.v_)("再想想"), 1)])])])]
                        }
                        )),
                        _: 1
                    }, 512)
                }
            }
        });
        var w = n(66262);
        const C = (0,
        w.A)(E, [["__scopeId", "data-v-f1efccf6"]]);
        var R = n(57142)
          , I = {
            class: "left"
        }
          , S = ["src"]
          , x = {
            class: "info-group"
        }
          , T = {
            class: "name-group"
        }
          , _ = {
            class: "name"
        }
          , N = {
            class: "like-fan-group"
        }
          , O = {
            key: 0,
            class: "like-group"
        }
          , V = {
            class: "number"
        }
          , j = {
            key: 1,
            class: "fan-group"
        }
          , W = {
            class: "number"
        };
        const B = (0,
        a.pM)({
            __name: "index",
            props: {
                author: {},
                liveStream: {},
                displayLikeCount: {}
            },
            emits: ["change-follow"],
            setup: function(e, t) {
                var i = t.emit
                  , u = e
                  , c = ((0,
                a.WQ)(R.$m),
                i)
                  , s = (0,
                a.EW)((function() {
                    var e, t = null === (e = u.author) || void 0 === e || null === (e = e.counts) || void 0 === e ? void 0 : e.fan;
                    return t && t.includes("w") ? t.replace(/(\d+)w/, "$1万") : t
                }
                ))
                  , d = (0,
                a.EW)((function() {
                    var e = u.author.counts.liked;
                    return e && e.includes("w") ? e.replace(/(\d+)w\+?/, "$1万") : e
                }
                ))
                  , f = ((0,
                a.EW)((function() {
                    var e = {
                        business: {
                            url: n(3694),
                            type: [9, 10]
                        },
                        personal: {
                            url: n(31192),
                            type: [1]
                        },
                        music: {
                            url: n(95033),
                            type: []
                        }
                    }
                      , t = u.author.verifiedStatus.type
                      , a = e.personal.url;
                    for (var l in e)
                        if (e[l].type.includes(t)) {
                            a = e[l].url;
                            break
                        }
                    return a
                }
                )),
                (0,
                a.EW)((function() {
                    return "" === u.displayLikeCount ? d.value : u.displayLikeCount
                }
                )))
                  , v = (0,
                o.rd)();
                function p() {
                    var e;
                    window.open(v.resolve("/profile/".concat(null === (e = u.author) || void 0 === e ? void 0 : e.id)).href, "_blank")
                }
                return function(e, t) {
                    var o;
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        class: "container",
                        onClick: p
                    }, [(0,
                    a.Lk)("div", I, [(0,
                    a.Lk)("img", {
                        class: "avatar",
                        src: u.author.avatar || n(31024),
                        alt: "avatar"
                    }, null, 8, S), (0,
                    a.Lk)("div", x, [(0,
                    a.Lk)("div", T, [(0,
                    a.Lk)("div", _, (0,
                    l.v_)(u.author.name), 1)]), (0,
                    a.Lk)("div", N, [f.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", O, [t[2] || (t[2] = (0,
                    a.Lk)("img", {
                        class: "icon",
                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjExIj48cGF0aCBkPSJNMCAuMTM5aDEwdjEwSDB2LTEweiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBvcGFjaXR5PSIuNyIgZD0iTTYuNzQ0IDEuNTI4YzEuMzM4IDAgMi40MjMgMS4xNDQgMi40MjMgMi41MTYgMCAuNjg2LS4yNzEgMS4zMDctLjcwOSAxLjc1NmwtLjEyNy4xNS0uMTMuMTQ5Yy0uMDQzLjA1LS4wODcuMS0uMTMyLjE0OWwtLjEzNi4xNS0uMTQuMTUtLjE0NS4xNTMtLjE1LjE1NS0uMTU1LjE1Ny0uMTYyLjE2LS4xNjguMTYzLS4wODcuMDgzLS4xOC4xNy0uMTg3LjE3NC0uMTk2LjE4LS4yMDQuMTg1LS4zMjYuMjg5LS4xOTIuMTYyLS4xMjguMTA1LS4xMTQuMDkxLS4wNjkuMDUzLS4wNjMuMDQ3LS4wNTYuMDQtLjA1LjAzNS0uMDQ1LjAyOEw1LjA3OCA5QS4xOTQuMTk0IDAgMDE1IDkuMDI4LjE5My4xOTMgMCAwMTQuOTIyIDlsLS4wMzgtLjAyMi0uMDQ0LS4wMjgtLjA1LS4wMzQtLjA4Ny0uMDY0LS4wNjUtLjA1LS4wNzItLjA1Ni0uMTE4LS4wOTUtLjEzMi0uMTEtLjE0NS0uMTI0LS4yLS4xNzctLjE5My0uMTcxLS4xODQtLjE2Ni0uMTc2LS4xNi0uMTY5LS4xNTYtLjE2MS0uMTUtLjE1NS0uMTQ3LS4xNDgtLjE0My0uMTQxLS4xMzgtLjEzNi0uMTM1LS4xMy0uMTMxYTE4LjIyMiAxOC4yMjIgMCAwMS0uMDYyLS4wNjVsLS4xMjItLjEyNy0uMDU5LS4wNjItLjExNC0uMTIzYTE1LjQ0IDE1LjQ0IDAgMDEtLjA1NS0uMDYxbC0uMTA3LS4xMi0uMTAzLS4xMTgtLjA1LS4wNTgtLjA5OC0uMTE2LS4wNDctLjA1Ny0uMDkyLS4xMTRhMi41MSAyLjUxIDAgMDEtLjYzNi0xLjY3OGMwLTEuMzcyIDEuMDg1LTIuNTE2IDIuNDIzLTIuNTE2YTIuMzggMi4zOCAwIDAxMS42MjUuNjQyTDUgMi4yODhsLjExOS0uMTE4Yy40My0uNCAxLS42NDIgMS42MjUtLjY0MnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+",
                        alt: "like"
                    }, null, -1)), (0,
                    a.Lk)("div", V, (0,
                    l.v_)(f.value), 1), t[3] || (t[3] = (0,
                    a.Lk)("div", {
                        class: "vertical-line"
                    }, null, -1))])) : (0,
                    a.Q3)("", !0), s.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", j, [t[4] || (t[4] = (0,
                    a.Lk)("img", {
                        class: "icon",
                        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMSAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTI4XzEzMDUpIj48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjExIiBoZWlnaHQ9IjEwIj48cGF0aCBkPSJNLjUgMGgxMHYxMEguNVYweiIgZmlsbD0iIzIyMiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBkPSJNNS42MzkgNS4xNmEyLjE2MyAyLjE2MyAwIDEwMC00LjMyNyAyLjE2MyAyLjE2MyAwIDAwMCA0LjMyN3pNNy40MSA2LjE3SDMuODY4Yy0xLjA4OSAwLTEuOTc5Ljc3LTEuOTc5IDEuNzg0di41MjRjMCAuNDc4LjM4OC44NjYuODY2Ljg2Nmg1Ljc2OWEuODY1Ljg2NSAwIDAwLjg2NS0uODY2di0uNTI0YzAtMS4wMTUtLjg5LTEuNzg0LTEuOTc4LTEuNzg0eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuNyIvPjwvZz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMF8xMjhfMTMwNSI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjUpIiBkPSJNMCAwaDEwdjEwSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+",
                        alt: "fan"
                    }, null, -1)), (0,
                    a.Lk)("div", W, (0,
                    l.v_)(s.value), 1)])) : (0,
                    a.Q3)("", !0)])])]), (0,
                    a.Lk)("div", {
                        onClick: t[1] || (t[1] = (0,
                        r.D$)((function() {}
                        ), ["stop"]))
                    }, [(0,
                    a.bF)(C, {
                        "author-id": u.author.id,
                        "live-stream-id": u.liveStream.id,
                        followed: null === (o = u.author) || void 0 === o ? void 0 : o.followStatus,
                        onChangeFollow: t[0] || (t[0] = function(e) {
                            c("change-follow", e)
                        }
                        )
                    }, null, 8, ["author-id", "live-stream-id", "followed"])])])
                }
            }
        })
          , F = (0,
        w.A)(B, [["__scopeId", "data-v-5c524954"]])
    }
    ,
    31024: e => {
        "use strict";
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAq1BMVEUAAABwcHBoaHBwcHBqanBsbHBsbHBqanBqam5paXBra3Bqam5sbHBra29tbXBsbHBqam9sbHBqanBra29sbHBra29sbG9sbHBra29ra3Bra29ra29wcHNwcHR0dHh1dXd1dXh5eXx5eX1+foB+foGCgoWHh4mHh4qLi46QkJKQkJOVlZeZmZuZmZyampuenqCioqSjo6Snp6mrq62srK2wsLGwsLKxsbG1tbbxTULKAAAAG3RSTlMAECAgMEBQYG9wcH+Aj4+Qr6+wv7/Pz8/f3+8+uvvzAAACq0lEQVRYw62Yf3uaMBDHQUW3qHWddou5wlxFhcLUWDrz/l/ZAkpXIBcSHr7/Ej7P/UouF8fB5Y7IwzdKQYo+LR+I53SRS5YM6lpOhtYUQLScWGCmDDSi02EfmBvKgONRMBAdt5kzB0PNXR1nQMFYVBMpj4GFGOreF7DUVzVnCtaa9mIPYtMYOqmx/wasG4jVcudS6Charac5dNbcMEC/ouOJH6ONWZhQx7Zc3HXZGziHVZD/gcmVYlbN2nbYJhMVZQiJuXqD6hxJ8vUmIQaloqGz1qSJ+uteKLRTryUFCDnnMxXognSEItRI4oVSoXq1i3uWqEEJ7hviGVeDNL4hVXZVg/6iefMQkECELB85pB8QcRZgkX3UNVhgsYazGsSR5d+dH8iX2Cr9QJ018iVUg15QEHrwnW08A8BBocUO0YJUmySBLqDnS2N/+BrQ2pyk41AdCODV0C+AJ+dR2/2C8rx9P4XahSt0i3y0pDBOkmjntyxboJvWUsQZ9QPyHJf1AsKPWjutJKiXIOUDiosnbBslR84zKc6PcbTFUzdEG6S8FinOyOy032CeqXzzYy5QXRSs2+hVz9s2vQq96jcler+NzCrWpMJAVVR5rfls0v4qjJTtVePNrO3IVyluXv3+37ITYaG0FqFivrK2J1d0+6sybRWHyUZY6uV2gDRGiNQWdG6OEMVQ89YBxBoDqQxTYEnKm4FiHCW2pJxDVCOkrKbnsznnT6WC6jZVG1Bb7gk2Zo9lxHdG7r3J5sQ8/QNCYFAFr77+AUHWU16ZAddjeJDXodvyOjLOSzPErXpP85ZLTV63ZjkqiC5KY6L83GYz1+gFaVCgIDicKrDsWFCMMbfRa1V2/t0hljrsft9byIq4ds9sg5L1eVCwppT7jyxWP4sL1Hr9uCAjHeUfAe8+vvcAOxQAAAAASUVORK5CYII="
    }
    ,
    31192: e => {
        "use strict";
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0idXJsKCNwYXR0ZXJuMF8xMjhfMTI5MikiIGQ9Ik0wIDBoMTB2MTBIMHoiLz48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybjBfMTI4XzEyOTIiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTBfMTI4XzEyOTIiIHRyYW5zZm9ybT0ic2NhbGUoLjAzMzMzKSIvPjwvcGF0dGVybj48aW1hZ2UgaWQ9ImltYWdlMF8xMjhfMTI5MiIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFBQVhOU1IwSUFyczRjNlFBQUFzbEpSRUZVU0V2TlYwOUlGSEVZZlc5MmpSTFV3Sk1RaEpEU1VjMWRpUUtORGgwcVRJaW9Td201WTNwS29xaERIU0xvSDFJM2FUV1FqbDBzcWtNbk00Um9yZXdZYkNCQjRFa3FGWTJhK1gzeG0zSGMvenN6cTFGem5mZSs5NzN2OTJmZUVBRWVhYjJ3RTF1V2VwVENhWks3SVdvclNEcFVFUUg0UTRBNVErRWwzeWV2QkNnSmwxemljUVdYeDBXcHpuVWgvNm9XeVdsQXJ2SnRjcm9VdktTd3hNMEpFZWtPSVppblFZdVFjYWFTaVdMaVJZWHRtUG1CUkt1L09YK0VDR1lqTThtMmZHU0JzSFFrMGlMYzVWOHlGQ0p0cEpMTjJZd2M0YzEwbXQ5V3Z2TjFZWW1ib3dMMGhmSVJFa3pnQ1ZQSkhrMXpoS1hEM0MrQ1NRRFJrTFhDd1VXRVZtMGpaNGUvckFuM1Q0cElWN2dxbGFHVnlGUjBaclRMRVZaeDgvZGZkK3YxNmJtV1BlWk5pZUJ5WmYwWHNuanlJTkRhRExuL0dKaGZLRnJXVW1xSW03bVRlZkVVY0h4dHhVYWZROGFlRlJYV081d3FabjREc1gxRGpodnF3YnVEUU5NT3Q4ejhBbVJndUtSamdLdFVzWVFxZXkyMk5ic0ZTb3hOaXptaURmVUJSZDBQQzFYY2xKSnVEKzhGci9XNnI0dU16bG5Qb1JNWnVxL1RETFM4Y0djTGVHZWdzUER5S25pdU83T2VnY2FiYTg5MzFPdzdDaVNPNUxMMDJMM1I2amVMSzVEQllTRDlOZGhXY1VmZHZ3TEl0bktNbk4yYUR3d3I2bHlWK0I3NE9QSDJBTkRWVXRDZlhCb0JwajRHYzdxR2NvN1RyL2ErODFIRHVPZkxyS2tHUnk1a2pveHUvUG80OE9LTkx6VWZRQnUzcU9PTlJCZm5BaVVOZlY2MWVFTjl4YUlBTFNQMW9NcTVxNjFZNHBWQmRnWnV2YVlhV0ZvSkRNOEc1bndrUXJtdVNNNGowU0xsZ0E2QjJVRmdRb0JqRzZyclF5WXc1b1cvZng5OXZHYnQ5ck5wR3BGTkRYdWk3TStSZHcrYnNnZnkvOFJicnlzMy9MRVhrTXB5bUw0V3lhZGV1Q3M0eStYMmd3NkJ0cEliQm8xOWdSc1FFUVc4amxpMVozU29LMVcvN0w5VE5rbEhKR1hnRUlGR1FPcHlmdHBvL0JTUlQ3YW9SMVYyM1VRNVFhL21INnRCUmxUTmh4N2tBQUFBQUVsRlRrU3VRbUNDIi8+PC9kZWZzPjwvc3ZnPg=="
    }
    ,
    32552: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => c
        }),
        n(50113),
        n(48980),
        n(25276),
        n(54554),
        n(40150),
        n(26099);
        var a = n(20641)
          , l = n(90033)
          , r = n(50953)
          , o = n(16265)
          , i = n(57142);
        const u = (0,
        a.pM)({
            __name: "index",
            props: {
                tabAlign: {
                    default: "left"
                },
                activeTabId: {
                    default: ""
                }
            },
            emits: ["update:activeTabId", "tab-change"],
            setup: function(e, t) {
                var n = t.expose
                  , u = t.emit
                  , c = e
                  , s = (0,
                o.Py)(i.Zs)
                  , d = s.children
                  , f = s.useExpose
                  , v = (0,
                r.KR)(c.activeTabId || null)
                  , p = (0,
                r.KR)([])
                  , m = (0,
                r.KR)({
                    width: NaN,
                    left: NaN
                })
                  , h = (0,
                r.KR)(NaN)
                  , g = (0,
                r.KR)(null)
                  , b = (0,
                r.KR)(null)
                  , k = u
                  , y = (0,
                a.EW)((function() {
                    var e = p.value && d.findIndex((function(e) {
                        return e.exposed.computedId.value === v.value
                    }
                    ));
                    return -1 === e ? d.findIndex((function(e) {
                        return !e.proxy.disabled
                    }
                    )) : e
                }
                ))
                  , M = (0,
                a.EW)((function() {
                    return null !== y.value && !Number.isNaN(m.value.left) && g.value.children[y.value].offsetLeft + m.value.width / 2 - h.value / 2
                }
                ));
                function A() {
                    if (-1 !== y.value) {
                        var e = g.value.children[y.value].getBoundingClientRect().left
                          , t = g.value.children[y.value].offsetWidth;
                        m.value = {
                            width: t,
                            left: e
                        },
                        h.value = t
                    }
                }
                function L(e) {
                    p.value.push(e.computedId),
                    g.value.appendChild(e.$el)
                }
                (0,
                a.wB)(v, (function(e, t) {
                    if (null !== t) {
                        var n = d.find((function(t) {
                            return t.exposed.computedId.value === e
                        }
                        ));
                        k("tab-change", n)
                    }
                }
                )),
                (0,
                a.wB)(y, (function() {
                    void 0 === c.activeTabId && (v.value = d[y.value].exposed.computedId.value)
                }
                )),
                (0,
                a.wB)(g, (function() {
                    A()
                }
                )),
                (0,
                a.wB)((function() {
                    return c.activeTabId
                }
                ), (function(e) {
                    v.value = e
                }
                )),
                n({
                    appendTab: L
                });
                var E = (0,
                r.KR)(null);
                return (0,
                o.st)(E.value, A),
                f({
                    nowActive: v,
                    appendTab: L,
                    removeTab: function(e) {
                        e.$elRoot.appendChild(e.$el);
                        var t = p.value.indexOf(e.computedId);
                        p.value.splice(t, 1)
                    },
                    updateActive: function(e) {
                        v.value = e,
                        A(),
                        k("update:activeTabId", e)
                    }
                }),
                function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", null, [(0,
                    a.Lk)("div", {
                        ref_key: "tabResize",
                        ref: E,
                        class: "tab-header"
                    }, [(0,
                    a.Lk)("ul", {
                        ref_key: "tabDom",
                        ref: g,
                        class: "tab",
                        style: (0,
                        l.Tr)({
                            "text-align": e.tabAlign
                        })
                    }, null, 4), (0,
                    a.Lk)("div", {
                        ref_key: "tabSlide",
                        ref: b,
                        class: "tab-slide",
                        style: (0,
                        l.Tr)({
                            width: m.value.width + "px",
                            transform: "translateX(" + M.value + "px)"
                        })
                    }, null, 4)], 512), (0,
                    a.RG)(e.$slots, "default")])
                }
            }
        })
          , c = (0,
        n(66262).A)(u, [["__scopeId", "data-v-19a1ef3a"]])
    }
    ,
    32938: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => u
        });
        var a = n(20641)
          , l = ["data-enabled"]
          , r = ["checked"]
          , o = ["data-enabled"];
        const i = (0,
        a.pM)({
            __name: "index",
            props: {
                modelValue: {
                    type: Boolean
                }
            },
            emits: ["update:modelValue"],
            setup: function(e) {
                return function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        class: "switch",
                        "data-enabled": e.modelValue,
                        onClick: t[0] || (t[0] = function(t) {
                            return e.$emit("update:modelValue", !e.modelValue)
                        }
                        )
                    }, [(0,
                    a.Lk)("input", {
                        checked: e.modelValue,
                        type: "checkbox"
                    }, null, 8, r), (0,
                    a.Lk)("span", {
                        class: "ball",
                        "data-enabled": e.modelValue
                    }, null, 8, o)], 8, l)
                }
            }
        })
          , u = (0,
        n(66262).A)(i, [["__scopeId", "data-v-2e7235f8"]])
    }
    ,
    33692: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => h
        });
        var a = n(10467)
          , l = n(54756)
          , r = n.n(l)
          , o = n(20641)
          , i = n(90033)
          , u = n(50953)
          , c = n(99567)
          , s = {
            class: "feed-list-item-tag"
        }
          , d = {
            key: 0,
            class: "user-living"
        }
          , f = {
            class: "user-info"
        }
          , v = {
            class: "feed-list-item-user-main"
        }
          , p = {
            key: 0,
            class: "user-count"
        };
        const m = (0,
        o.pM)({
            __name: "index",
            props: {
                isLive: {
                    type: Boolean,
                    default: !1
                },
                feed: {}
            },
            emits: ["show-work"],
            setup: function(e, t) {
                var n = t.emit
                  , l = e
                  , m = n
                  , h = (0,
                u.KR)(!1);
                function g() {
                    return b.apply(this, arguments)
                }
                function b() {
                    return (b = (0,
                    a.A)(r().mark((function e() {
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    o.dY)();
                                case 2:
                                    h.value = !0;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                function k() {
                    "live" === l.feed.type ? window.open("/u/".concat(l.feed.author.id)) : m("show-work", l.feed.id)
                }
                var y = (0,
                o.EW)((function() {
                    var e;
                    return l.feed.likeCount || (null === (e = l.feed.counts) || void 0 === e ? void 0 : e.displayLike) || 0
                }
                ))
                  , M = (0,
                o.EW)((function() {
                    return "live" !== l.feed.type && l.feed.liked
                }
                ));
                return function(e, t) {
                    var n = (0,
                    o.gN)("lazy");
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("div", {
                        class: "info",
                        onClick: k
                    }, [(0,
                    o.Lk)("div", {
                        class: (0,
                        i.C4)(["card-info", {
                            ready: h.value
                        }])
                    }, [(0,
                    o.Lk)("div", s, ["live" === l.feed.type ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", d, t[0] || (t[0] = [(0,
                    o.Lk)("div", {
                        class: "user-living-icon"
                    }, null, -1), (0,
                    o.Lk)("div", {
                        class: "user-living-text"
                    }, "直播中", -1)]))) : (0,
                    o.Q3)("", !0)]), (0,
                    o.bo)((0,
                    o.Lk)("img", {
                        onLoad: g
                    }, null, 544), [[n, {
                        src: e.feed.poster || e.feed.coverUrl,
                        loading: ""
                    }]]), (0,
                    o.bF)(c.A, {
                        src: e.feed.poster || e.feed.coverUrl
                    }, null, 8, ["src"]), (0,
                    o.Lk)("div", f, [(0,
                    o.Lk)("div", v, ["live" === l.feed.type ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", p, (0,
                    i.v_)(y.value), 1)) : ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", {
                        key: 1,
                        class: (0,
                        i.C4)(["user-like", {
                            liked: M.value
                        }])
                    }, (0,
                    i.v_)(y.value), 3))])])], 2)])
                }
            }
        })
          , h = (0,
        n(66262).A)(m, [["__scopeId", "data-v-c57ef51a"]])
    }
    ,
    34338: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => c
        }),
        n(64346),
        n(72712),
        n(26099);
        var a = n(20641)
          , l = n(53751)
          , r = n(90033)
          , o = n(50953)
          , i = n(16265);
        const u = (0,
        a.pM)({
            __name: "index",
            props: {
                min: {
                    default: 0
                },
                max: {
                    default: 1
                },
                vertical: {
                    type: Boolean,
                    default: !1
                },
                width: {
                    default: 0
                },
                height: {
                    default: 0
                },
                modelValue: {},
                showBall: {
                    type: Boolean,
                    default: !0
                },
                activeColor: {
                    default: "#FE3566"
                },
                backgroundColor: {
                    default: ""
                },
                marks: {},
                step: {
                    default: .1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["update:modelValue"],
            setup: function(e, t) {
                var n = t.expose
                  , u = t.emit;
                (0,
                l.$9)((function(e) {
                    return {
                        "05e32a2d": e.activeColor
                    }
                }
                ));
                var c = e
                  , s = (0,
                o.KR)(null)
                  , d = (0,
                a.EW)((function() {
                    return c.vertical ? {
                        width: "4px",
                        height: "".concat(c.height, "px")
                    } : {
                        width: 0 === c.width ? "100%" : "".concat(c.width, "px"),
                        height: "100%"
                    }
                }
                ))
                  , f = (0,
                a.EW)((function() {
                    return c.vertical ? {
                        width: "4px",
                        height: "".concat(b.value, "%")
                    } : {
                        width: "".concat(b.value, "%"),
                        height: "100%",
                        backgroundColor: c.activeColor
                    }
                }
                ))
                  , v = (0,
                a.EW)((function() {
                    var e, t;
                    return c.vertical ? {
                        bottom: "".concat(null !== (t = b.value) && void 0 !== t ? t : 0, "%")
                    } : {
                        left: "calc(".concat(null !== (e = b.value) && void 0 !== e ? e : 0, "% - 4px)")
                    }
                }
                ))
                  , p = function(e) {
                    var t = 100 * (e - c.min) / (c.max - c.min);
                    return c.vertical ? {
                        bottom: "".concat(t, "%")
                    } : {
                        left: "calc(".concat(t, "% - 4px)")
                    }
                }
                  , m = {}
                  , h = !1
                  , g = u
                  , b = (0,
                a.EW)((function() {
                    return 100 * (c.modelValue - c.min) / (c.max - c.min)
                }
                ));
                function k(e) {
                    c.disabled || (m = s.value.getBoundingClientRect(),
                    M(e),
                    h = !0)
                }
                function y(e) {
                    c.disabled || (m = s.value.getBoundingClientRect(),
                    M(e))
                }
                function M(e) {
                    Array.isArray(e) && (e = e[0]);
                    var t = m;
                    if (t && (t.height || t.width)) {
                        var n = c.vertical ? 1 - (e.clientY - t.top) / t.height : (e.clientX - t.left) / t.width;
                        n = n * (c.max - c.min) + c.min,
                        (n = null === c.step ? function(e) {
                            return c.marks && c.marks.length > 0 ? c.marks.reduce((function(t, n) {
                                return Math.abs(n - e) < Math.abs(t - e) ? n : t
                            }
                            )) : e
                        }(n) : Math.round(n / c.step) * c.step) < c.min ? n = c.min : n > c.max && (n = c.max),
                        g("update:modelValue", n)
                    }
                }
                return (0,
                i.ML)("mousemove", (function(e) {
                    h && M(e)
                }
                ), {
                    capture: !0
                }),
                (0,
                i.ML)("touchmove", (function(e) {
                    h && M(e[0])
                }
                ), {
                    capture: !0
                }),
                (0,
                i.ML)("mouseup", (function() {
                    h = !1
                }
                ), {
                    capture: !0
                }),
                (0,
                i.ML)("touchend", (function() {
                    h = !1
                }
                ), {
                    capture: !0
                }),
                n({
                    el: s.value
                }),
                function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        ref_key: "slider",
                        ref: s,
                        class: (0,
                        r.C4)(["slider", {
                            vertical: c.vertical,
                            disabled: e.disabled
                        }]),
                        style: (0,
                        r.Tr)(d.value)
                    }, [(0,
                    a.Lk)("div", {
                        class: "all",
                        style: (0,
                        r.Tr)({
                            backgroundColor: c.backgroundColor
                        }),
                        onMousedown: k,
                        onTouchstart: k,
                        onClick: y
                    }, [(0,
                    a.Lk)("div", {
                        class: "active",
                        style: (0,
                        r.Tr)(f.value)
                    }, null, 4), (0,
                    a.bo)((0,
                    a.Lk)("div", {
                        class: (0,
                        r.C4)(["ball", {
                            vertical: c.vertical
                        }]),
                        style: (0,
                        r.Tr)(v.value)
                    }, null, 6), [[l.aG, e.showBall]]), ((0,
                    a.uX)(!0),
                    (0,
                    a.CE)(a.FK, null, (0,
                    a.pI)(c.marks, (function(t) {
                        return (0,
                        a.bo)(((0,
                        a.uX)(),
                        (0,
                        a.CE)("div", {
                            key: t,
                            style: (0,
                            r.Tr)(p(t)),
                            class: "mark"
                        }, null, 4)), [[l.aG, t > e.modelValue]])
                    }
                    )), 128))], 36)], 6)
                }
            }
        })
          , c = (0,
        n(66262).A)(u, [["__scopeId", "data-v-c06a1ba2"]])
    }
    ,
    35148: (e, t, n) => {
        "use strict";
        n.d(t, {
            U: () => o,
            g: () => i
        }),
        n(28706),
        n(59089),
        n(60739);
        var a = n(8423)
          , l = n(16085);
        function r(e, t, n) {
            var a = l.A.codec.base64.toBits(e)
              , r = l.A.codec.utf8String.toBits(t)
              , o = l.A.codec.utf8String.toBits(n)
              , i = new (0,
            l.A.cipher.aes)(a);
            return l.A.codec.base64.fromBits(l.A.mode.cbc.encrypt(i, o, r))
        }
        function o(e) {
            var t = e.userId
              , n = e.payKey
              , l = e.giftId
              , o = e.liveStreamId
              , i = e.count
              , u = e.comboKey
              , c = e.giftToken
              , s = (0,
            a.A)(16)
              , d = Date.now()
              , f = {
                visitorId: t,
                seqId: d,
                clientTimestamp: d,
                giftId: l,
                liveStreamId: o,
                count: i,
                comboKey: u
            };
            return {
                e: r(n, s, JSON.stringify(f)),
                iv: s,
                giftId: l,
                liveStreamId: o,
                count: i,
                comboKey: u,
                giftToken: c
            }
        }
        function i() {
            return "".concat((0,
            a.A)(16), "_").concat(Date.now())
        }
    }
    ,
    36137: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => f
        }),
        n(52675),
        n(2008),
        n(51629),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(26099),
        n(23500);
        var a = n(64467)
          , l = n(20641)
          , r = n(90033)
          , o = n(50953)
          , i = n(57142);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var s = ["data-index"];
        const d = (0,
        l.pM)(c(c({}, {
            name: "slick-carousel-item"
        }), {}, {
            props: {
                index: {
                    default: 0
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                o.KR)(null)
                  , a = (0,
                o.KR)(!1)
                  , u = (0,
                l.WQ)(i.N4, null)
                  , c = u.slideStyle
                  , d = u.currentSlide
                  , f = u.slidesToShow;
                return (0,
                l.wB)((function() {
                    return d.value
                }
                ), (function(e) {
                    var n;
                    n = e,
                    a.value = t.index >= n && t.index <= n + f - 1
                }
                ), {
                    immediate: !0
                }),
                function(e, i) {
                    return (0,
                    l.uX)(),
                    (0,
                    l.CE)("div", {
                        ref_key: "slickItem",
                        ref: n,
                        class: (0,
                        r.C4)(["slick-item", {
                            "slick-item-active": a.value
                        }]),
                        style: (0,
                        r.Tr)({
                            outline: "none",
                            width: "".concat((0,
                            o.R1)(c).slideWidth, "px")
                        }),
                        "data-index": t.index
                    }, [(0,
                    l.RG)(e.$slots, "default")], 14, s)
                }
            }
        }))
          , f = (0,
        n(66262).A)(d, [["__scopeId", "data-v-a6a87538"]])
    }
    ,
    36655: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => M
        });
        var a = n(10467)
          , l = n(54756)
          , r = n.n(l)
          , o = n(20641)
          , i = n(90033)
          , u = n(50953)
          , c = n(16265)
          , s = n(22192)
          , d = n(72708)
          , f = n(57142)
          , v = n(62535)
          , p = n(15415)
          , m = n(17031)
          , h = n(67357)
          , g = {
            class: "coin-num"
        }
          , b = {
            class: "count"
        }
          , k = ["src"];
        const y = (0,
        o.pM)({
            __name: "index",
            setup: function(e) {
                var t = (0,
                o.WQ)(f.j0)
                  , n = (0,
                c.Pj)(d.Zz)
                  , l = (0,
                c.Pj)(d.Wj)
                  , y = (0,
                o.EW)((function() {
                    return t.value ? l.ksCoin : "充值"
                }
                ))
                  , M = (0,
                o.WQ)(f.nc);
                (0,
                o.wB)((function() {
                    return n.userInfo
                }
                ), (function(e) {
                    e.id && l.getPayQuery()
                }
                ));
                var A = (0,
                o.EW)((function() {
                    var e = Math.max(0, String(l.ksCoin).length - 5);
                    return "".concat(74 + 8 * e, "px")
                }
                ));
                function L() {
                    return E.apply(this, arguments)
                }
                function E() {
                    return (E = (0,
                    a.A)(r().mark((function e() {
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    v.t)();
                                case 2:
                                    if (e.sent) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (M.value.isAdult) {
                                        e.next = 7;
                                        break
                                    }
                                    return (0,
                                    h.A)("未成年人禁止充值", {
                                        type: "fail",
                                        teleport: "body"
                                    }),
                                    e.abrupt("return");
                                case 7:
                                    (0,
                                    m.TO)("LIVE_RECRAGER_BUTTON"),
                                    l.setRechargeSource(d.jB.activeRecharge),
                                    (0,
                                    d.nn)();
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                return function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("div", {
                        class: "kcoin",
                        style: (0,
                        i.Tr)({
                            width: A.value
                        }),
                        onClick: L
                    }, [(0,
                    o.bF)(p.A, {
                        class: "icon",
                        src: (0,
                        u.R1)("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI3IDQzLjY2NmM5LjIwNSAwIDE2LjY2Ny03LjQ2MiAxNi42NjctMTYuNjY2IDAtOS4yMDUtNy40NjItMTYuNjY3LTE2LjY2Ni0xNi42NjctOS4yMDUgMC0xNi42NjcgNy40NjItMTYuNjY3IDE2LjY2NyAwIDkuMjA0IDcuNDYyIDE2LjY2NiAxNi42NjcgMTYuNjY2eiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzlfMzI5MDMpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNyA0MC4zMzRjNy4zNjMgMCAxMy4zMzMtNS45NyAxMy4zMzMtMTMuMzM0IDAtNy4zNjMtNS45Ny0xMy4zMzMtMTMuMzM0LTEzLjMzMy03LjM2MyAwLTEzLjMzMyA1Ljk3LTEzLjMzMyAxMy4zMzMgMCA3LjM2NCA1Ljk3IDEzLjMzNCAxMy4zMzMgMTMuMzM0eiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzlfMzI5MDMpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNyAzOS44MzRjNy4wODcgMCAxMi44MzMtNS43NDYgMTIuODMzLTEyLjgzNCAwLTcuMDg3LTUuNzQ2LTEyLjgzMy0xMi44MzQtMTIuODMzLTcuMDg3IDAtMTIuODMzIDUuNzQ2LTEyLjgzMyAxMi44MzMgMCA3LjA4OCA1Ljc0NiAxMi44MzQgMTIuODMzIDEyLjgzNHpNNDAuMzMyIDI3YzAgNy4zNjQtNS45NyAxMy4zMzQtMTMuMzM0IDEzLjMzNC03LjM2MyAwLTEzLjMzMy01Ljk3LTEzLjMzMy0xMy4zMzQgMC03LjM2MyA1Ljk3LTEzLjMzMyAxMy4zMzMtMTMuMzMzIDcuMzY0IDAgMTMuMzM0IDUuOTcgMTMuMzM0IDEzLjMzM3oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl85XzMyOTAzKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMjUgMzQuNXYtMTVoMi41djYuODI4bDMuOTQyLTYuODI4aDIuODg3bC00LjM0NSA3LjUyNSA0LjM0NSA3LjUyNWgtMi44ODdsLTMuOTQyLTYuODI4VjM0LjVoLTIuNXoiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl85XzMyOTAzKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl85XzMyOTAzIiB4MT0iMTguMTIzIiB5MT0iMTMuOTgxIiB4Mj0iMzcuOTI5IiB5Mj0iMzkuNTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZCRUE3RSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZFQkYxMiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzlfMzI5MDMiIHgxPSIxOS4xODciIHkxPSIxNi43MDIiIHgyPSIzNi41MDkiIHkyPSI0MC4zMzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZDMTAyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkQ5MDA1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfOV8zMjkwMyIgeDE9IjE3LjYyNCIgeTE9IjE3LjIwOSIgeDI9IjM2LjU4MyIgeTI9IjM2LjM3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkE0MUQiLz48c3RvcCBvZmZzZXQ9Ii41MjgiIHN0b3AtY29sb3I9IiNGQkNCNkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkU1NkIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl85XzMyOTAzIiB4MT0iMjUuNTkiIHkxPSIxOS41IiB4Mj0iMzQuNDA5IiB5Mj0iMjkuNDQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZDRkZFMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRkVDNyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==")
                    }, null, 8, ["src"]), (0,
                    o.Lk)("div", g, [(0,
                    o.Lk)("span", b, (0,
                    i.v_)(y.value), 1), (0,
                    o.Lk)("img", {
                        src: (0,
                        u.R1)(s),
                        alt: ""
                    }, null, 8, k)])], 4)
                }
            }
        })
          , M = (0,
        n(66262).A)(y, [["__scopeId", "data-v-0b2d4a60"]])
    }
    ,
    36947: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => E
        });
        var a = n(10467)
          , l = n(7350)
          , r = n.n(l)
          , o = n(54756)
          , i = n.n(o)
          , u = (n(52675),
        n(89463),
        n(2259),
        n(51629),
        n(23418),
        n(64346),
        n(23792),
        n(34782),
        n(23288),
        n(62010),
        n(26099),
        n(27495),
        n(38781),
        n(31415),
        n(47764),
        n(25509),
        n(65223),
        n(60321),
        n(41927),
        n(11632),
        n(64377),
        n(66771),
        n(12516),
        n(68931),
        n(52514),
        n(35694),
        n(52774),
        n(49536),
        n(21926),
        n(94483),
        n(16215),
        n(23500),
        n(62953),
        n(76031),
        n(20641))
          , c = n(53751)
          , s = n(90033)
          , d = n(50953)
          , f = n(16265)
          , v = n(222)
          , p = (n(74423),
        n(25276),
        n(48598),
        ["top", "left", "right", "bottom", "top-start", "top-end", "bottom-start", "bottom-end", "left-start", "left-end", "right-start", "right-end"])
          , m = 10;
        function h(e) {
            return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth
        }
        function g(e) {
            return e.indexOf("left") > -1 || e.indexOf("right") > -1
        }
        function b(e, t, n) {
            var a = g(e)
              , l = a ? n.height / 2 : n.width / 2
              , r = a ? t.height / 2 : t.width / 2;
            switch (e) {
            case "top-start":
            case "bottom-start":
                l >= t.width && (l = r);
                break;
            case "top-end":
            case "bottom-end":
                (l = t.width - l) <= 0 && (l = r);
                break;
            case "left-start":
            case "right-start":
                l >= t.height && (l = r);
                break;
            case "left-end":
            case "right-end":
                (l = t.height - l) <= 0 && (l = r)
            }
            return l
        }
        var k = Symbol("tooltip-injection-key");
        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        var M = ["innerHTML"]
          , A = {
            key: 1
        };
        const L = (0,
        u.pM)({
            __name: "index",
            props: {
                trigger: {
                    default: "hover"
                },
                placement: {
                    default: "bottom"
                },
                showDelay: {
                    default: 0
                },
                hideDelay: {
                    default: 100
                },
                insertToGlobal: {
                    type: Boolean,
                    default: !0
                },
                content: {
                    default: ""
                },
                rawContent: {
                    type: Boolean,
                    default: !1
                },
                showArrow: {
                    type: Boolean,
                    default: !0
                },
                maxWidth: {
                    default: 300
                },
                customClass: {
                    default: ""
                },
                manual: {
                    type: Boolean,
                    default: !1
                },
                contentOffset: {
                    default: null
                },
                arrowOffset: {
                    default: null
                },
                tooltipBg: {
                    default: "rgba(17, 17, 17, 0.9)"
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                transitionName: {
                    default: "fade"
                },
                arrowSize: {
                    default: "normal"
                }
            },
            emits: ["before-show", "after-show", "before-hide", "after-hide"],
            setup: function(e, t) {
                var n = t.expose
                  , l = t.emit;
                (0,
                c.$9)((function(e) {
                    return {
                        "66a6014e": e.tooltipBg
                    }
                }
                ));
                var o = e
                  , L = l
                  , E = (0,
                u.nI)()
                  , w = (0,
                d.KR)(!1)
                  , C = (0,
                d.KR)(!1)
                  , R = (0,
                d.KR)(null)
                  , I = (0,
                d.KR)(null)
                  , S = (0,
                d.Kh)({
                    top: 0,
                    left: 0
                })
                  , x = (0,
                d.KR)(null)
                  , T = (0,
                d.KR)("bottom")
                  , _ = (0,
                d.KR)("")
                  , N = (0,
                d.KR)({})
                  , O = new Set
                  , V = (0,
                u.WQ)(k, void 0)
                  , j = (0,
                d.KR)(!1)
                  , W = function(e, t, n) {
                    var a = {
                        left: 0,
                        top: 0
                    }
                      , l = null
                      , r = p.includes(n) ? n : "auto"
                      , o = function(e, t) {
                        if (!(0,
                        d.R1)(e) || !(0,
                        d.R1)(t))
                            return {
                                position: a,
                                arrowLeft: l,
                                placement: r
                            };
                        var n = (0,
                        d.R1)(e).getBoundingClientRect()
                          , o = function(e) {
                            var t = e.cloneNode(!0);
                            document.body.appendChild(t),
                            t.style.top = "-99999px",
                            t.style.position = "fixed",
                            t.style.display = "block",
                            t.style.width = "";
                            var n = t.offsetWidth
                              , a = t.offsetHeight;
                            return document.body.removeChild(t),
                            {
                                width: n,
                                height: a
                            }
                        }((0,
                        d.R1)(t));
                        switch ("auto" === r && (r = function(e) {
                            var t, n, a, l, r, o, i = e.tooltipSize, u = e.triggerRectInfo, c = window, s = c.innerWidth, d = c.innerHeight;
                            return n = (t = {
                                top: {
                                    avaliable: u.top >= i.height + m,
                                    avaliableSpace: u.top
                                },
                                bottom: {
                                    avaliable: d - u.bottom >= i.height + m,
                                    avaliableSpace: d - u.bottom
                                },
                                left: {
                                    avaliable: u.left >= i.width / 2,
                                    avaliableSpace: u.left
                                },
                                right: {
                                    avaliable: s - u.right >= i.width / 2,
                                    avaliableSpace: s - u.right
                                }
                            }).top,
                            a = t.right,
                            r = t.left,
                            o = [],
                            (l = t.bottom).avaliable && l.avaliableSpace >= n.avaliableSpace && o.push("bottom"),
                            n.avaliable && n.avaliableSpace > l.avaliableSpace && o.push("top"),
                            r.avaliable && a.avaliable && o.length ? o.join("-") : r.avaliable && o.length && !a.avaliable ? (o.push("start"),
                            o.join("-")) : a.avaliable && o.length && !r.avaliable ? (o.push("end"),
                            o.join("-")) : o.length ? o.join("-") : a.avaliable && a.avaliableSpace >= r.avaliableSpace ? "right" : r.avaliable && r.avaliableSpace > a.avaliableSpace ? "left" : "bottom"
                        }({
                            tooltipSize: o,
                            triggerRectInfo: n
                        })),
                        r) {
                        case "top":
                            a.left = n.left + n.width / 2 - o.width / 2,
                            a.top = n.top - o.height - m,
                            l = null;
                            break;
                        case "bottom":
                            a.left = n.left + n.width / 2 - o.width / 2,
                            a.top = n.top + n.height + m,
                            l = null;
                            break;
                        case "left":
                            a.left = n.left - o.width - m,
                            a.top = n.top + (n.height - o.height) / 2,
                            l = null;
                            break;
                        case "right":
                            a.left = n.left + n.width + m,
                            a.top = n.top + (n.height - o.height) / 2,
                            l = null;
                            break;
                        case "top-start":
                            a.left = n.left,
                            a.top = n.top - o.height - m,
                            l = b(r, o, n);
                            break;
                        case "top-end":
                            a.left = n.left + n.width - o.width,
                            a.top = n.top - o.height - m,
                            l = b(r, o, n);
                            break;
                        case "bottom-start":
                            a.left = n.left,
                            a.top = n.top + n.height + m,
                            l = b(r, o, n);
                            break;
                        case "bottom-end":
                            a.left = n.left + n.width - o.width,
                            a.top = n.top + n.height + m,
                            l = b(r, o, n);
                            break;
                        case "left-start":
                            a.left = n.left - o.width - m,
                            a.top = n.top,
                            l = b(r, o, n);
                            break;
                        case "left-end":
                            a.left = n.left - o.width - m,
                            a.top = n.top - o.height + n.height,
                            l = b(r, o, n);
                            break;
                        case "right-start":
                            a.left = n.left + n.width + m,
                            a.top = n.top,
                            l = b(r, o, n);
                            break;
                        case "right-end":
                            a.left = n.left + n.width + m,
                            a.top = n.top - o.height + n.height,
                            l = b(r, o, n)
                        }
                        return {
                            position: a,
                            arrowLeft: l,
                            placement: r
                        }
                    };
                    return (0,
                    u.sV)((function() {
                        o(e, t)
                    }
                    )),
                    {
                        calculatePos: o
                    }
                }(R, I, o.placement).calculatePos;
                function B() {
                    var e = W(R, I)
                      , t = e.position
                      , n = e.arrowLeft
                      , a = e.placement;
                    t && (S.left = t.left,
                    S.top = t.top,
                    T.value = a,
                    x.value = n)
                }
                var F = []
                  , D = null;
                function U() {
                    D && F.forEach((function(e) {
                        e.removeEventListener("scroll", D, !1)
                    }
                    ))
                }
                function G() {
                    E ? _.value = E.attrs.class || "" : console.warn("updateStaticClass is called without current active component instance.")
                }
                var z, P = (0,
                u.EW)((function() {
                    return o.insertToGlobal ? "#app" : R.value
                }
                )), Q = (0,
                u.EW)((function() {
                    var e = o.contentOffset || 0;
                    return {
                        "max-width": "".concat(o.maxWidth, "px"),
                        top: "".concat(S.top, "px"),
                        left: "".concat(S.left + e, "px"),
                        backgroundColor: o.tooltipBg
                    }
                }
                )), X = function(e) {
                    return null === e
                }, Z = (0,
                u.EW)((function() {
                    return X(x.value) && X(o.arrowOffset) ? {} : g(T.value) ? {
                        top: "".concat(o.arrowOffset || x.value, "px")
                    } : {
                        left: "".concat(o.arrowOffset || x.value, "px")
                    }
                }
                )), K = (0,
                u.EW)((function() {
                    return {
                        "--tooltip-arrow-width": "big" === o.arrowSize ? "7px" : "5px"
                    }
                }
                ));
                function H() {
                    return J.apply(this, arguments)
                }
                function J() {
                    return (J = (0,
                    a.A)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!o.disabled) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (!z) {
                                        e.next = 6;
                                        break
                                    }
                                    return clearTimeout(z),
                                    z = null,
                                    e.abrupt("return");
                                case 6:
                                    return D && F.forEach((function(e) {
                                        e.addEventListener("scroll", D, !1)
                                    }
                                    )),
                                    w.value = !0,
                                    e.next = 10,
                                    (0,
                                    u.dY)();
                                case 10:
                                    B(),
                                    o.showDelay <= 0 ? C.value = !0 : z = setTimeout((function() {
                                        C.value = !0,
                                        z = null
                                    }
                                    ), o.showDelay);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                function Y() {
                    z && (clearTimeout(z),
                    z = null),
                    o.hideDelay <= 0 ? (C.value = !1,
                    U()) : z = setTimeout((function() {
                        C.value = !1,
                        z = null,
                        U()
                    }
                    ), o.hideDelay)
                }
                function q() {
                    L("before-show")
                }
                function $() {
                    L("after-show")
                }
                function ee() {
                    L("before-hide")
                }
                function te() {
                    L("after-hide"),
                    w.value = !1
                }
                function ne(e) {
                    null == V || V.onMouseEnter(e),
                    j.value = !0,
                    o.manual || "click" === o.trigger || H()
                }
                function ae(e) {
                    null == V || V.onMouseLeave(e),
                    j.value = !1,
                    o.manual || "click" === o.trigger || Y()
                }
                return null == V || V.addChildRef(I),
                (0,
                u.Gt)(k, {
                    onMouseEnter: ne,
                    onMouseLeave: ae,
                    addChildRef: function(e) {
                        O.add(e),
                        null == V || V.addChildRef(e)
                    },
                    removeChildRef: function(e) {
                        O.delete(e),
                        null == V || V.removeChildRef(e)
                    }
                }),
                (0,
                u.sV)((function() {
                    var e, t = null === (e = E.parent) || void 0 === e || null === (e = e.type) || void 0 === e ? void 0 : e.__scopeId;
                    t && (N.value[t] = !0),
                    G(),
                    F = function(e) {
                        for (var t = [], n = e.parentNode; n && ![window, document, document.documentElement].includes(n); )
                            h(n) && t.push(n),
                            n = n.parentNode;
                        return t.push(window),
                        t
                    }(I),
                    D = r()(B, 50)
                }
                )),
                (0,
                u.Ic)((function() {
                    G()
                }
                )),
                (0,
                u.xo)((function() {
                    clearTimeout(z),
                    C.value = !1,
                    w.value = !1,
                    z = null,
                    U(),
                    F = [],
                    null == V || V.removeChildRef(I)
                }
                )),
                (0,
                f.ML)("mouseenter", (function() {
                    o.manual || "click" === o.trigger || H()
                }
                ), {
                    target: R
                }),
                (0,
                f.ML)("mouseleave", (function() {
                    o.manual || "click" === o.trigger || Y()
                }
                ), {
                    target: R
                }),
                (0,
                f.ML)("click", (function() {
                    o.manual || (C.value ? Y() : H())
                }
                ), {
                    target: R
                }),
                v.oc && (0,
                f.st)(document.body, B),
                "click" === o.trigger && (0,
                f.ML)("click", (function(e) {
                    w.value && function(e) {
                        if (!(j.value || (0,
                        v.kp)(e.target, I.value) || (0,
                        v.kp)(e.target, R.value) || o.manual)) {
                            var t, n = function(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e)
                                                return y(e, t);
                                            var n = {}.toString.call(e).slice(8, -1);
                                            return "Object" === n && e.constructor && (n = e.constructor.name),
                                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                                        }
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var a = 0
                                          , l = function() {};
                                        return {
                                            s: l,
                                            n: function() {
                                                return a >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[a++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: l
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var r, o = !0, i = !1;
                                return {
                                    s: function() {
                                        n = n.call(e)
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return o = e.done,
                                        e
                                    },
                                    e: function(e) {
                                        i = !0,
                                        r = e
                                    },
                                    f: function() {
                                        try {
                                            o || null == n.return || n.return()
                                        } finally {
                                            if (i)
                                                throw r
                                        }
                                    }
                                }
                            }(O);
                            try {
                                for (n.s(); !(t = n.n()).done; ) {
                                    var a;
                                    if (null !== (a = t.value.value) && void 0 !== a && a.contains(e.target))
                                        return
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                            Y()
                        }
                    }(e)
                }
                )),
                n({
                    show: H,
                    hide: Y
                }),
                function(e, t) {
                    return (0,
                    u.uX)(),
                    (0,
                    u.CE)(u.FK, null, [(0,
                    u.Lk)("div", (0,
                    u.v6)({
                        ref_key: "triggerRef",
                        ref: R
                    }, N.value, {
                        class: "tooltip-trigger"
                    }), [(0,
                    u.RG)(e.$slots, "default")], 16), w.value ? ((0,
                    u.uX)(),
                    (0,
                    u.Wv)(u.Im, {
                        key: 0,
                        to: P.value
                    }, [(0,
                    u.bF)(c.eB, {
                        name: e.transitionName,
                        onBeforeEnter: q,
                        onAfterEnter: $,
                        onBeforeLeave: ee,
                        onAfterLeave: te
                    }, {
                        default: (0,
                        u.k6)((function() {
                            return [(0,
                            u.bo)((0,
                            u.Lk)("div", (0,
                            u.v6)({
                                ref_key: "tooltipRef",
                                ref: I,
                                class: ["tooltip-content", T.value, o.customClass, _.value],
                                style: Q.value
                            }, N.value, {
                                onMouseenter: ne,
                                onMouseleave: ae
                            }), [(0,
                            u.RG)(e.$slots, "content", {}, (function() {
                                return [e.rawContent ? ((0,
                                u.uX)(),
                                (0,
                                u.CE)("span", {
                                    key: 0,
                                    innerHTML: e.content
                                }, null, 8, M)) : ((0,
                                u.uX)(),
                                (0,
                                u.CE)("span", A, (0,
                                s.v_)(e.content), 1))]
                            }
                            )), (0,
                            u.bo)((0,
                            u.Lk)("div", {
                                ref: "arrowRef",
                                class: "tooltip-content-arrow",
                                style: (0,
                                s.Tr)([Z.value, K.value])
                            }, null, 4), [[c.aG, o.showArrow]])], 16), [[c.aG, C.value]])]
                        }
                        )),
                        _: 3
                    }, 8, ["name"])], 8, ["to"])) : (0,
                    u.Q3)("", !0)], 64)
                }
            }
        })
          , E = (0,
        n(66262).A)(L, [["__scopeId", "data-v-6b009d68"]])
    }
    ,
    45492: e => {
        e.exports = '<svg style="width:22px;height:22px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#__2X1Gv1D__clip0_377_34677)"><mask id="__2X1Gv1D__mask0_377_34677" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" style="width:22px;height:22px"><path d="M0 0H22V22H0V0Z" fill="currentColor"></path></mask><g mask="url(#__2X1Gv1D__mask0_377_34677)"><path d="M17.3171 2.75L17.4688 2.75279L17.6055 2.75833C17.9294 2.77562 18.1248 2.81853 18.2888 2.88512L18.3529 2.91302L18.415 2.94341C18.4253 2.94869 18.4355 2.95406 18.4457 2.95954C18.7018 3.0965 18.9028 3.29747 19.0398 3.55356L19.0559 3.58431L19.0863 3.64643L19.1142 3.71055C19.1763 3.86354 19.2179 4.04401 19.2372 4.33074L19.2441 4.46035C19.245 4.48312 19.2458 4.50648 19.2465 4.53047L19.2493 4.68219C19.2497 4.70881 19.2497 4.73611 19.2497 4.76413L19.2493 17.3171L19.2465 17.4688L19.241 17.6055C19.2237 17.9294 19.1808 18.1248 19.1142 18.2888L19.0863 18.3529L19.0559 18.415C19.0506 18.4253 19.0452 18.4355 19.0398 18.4457C18.9028 18.7018 18.7018 18.9028 18.4457 19.0398L18.415 19.0559L18.3529 19.0863L18.2888 19.1142C18.1358 19.1763 17.9553 19.2179 17.6686 19.2372L17.5389 19.2441C17.5162 19.245 17.4928 19.2458 17.4688 19.2465L17.3171 19.2493C17.2905 19.2497 17.2632 19.2497 17.2352 19.2497H4.76413L4.60436 19.2483C4.57908 19.2478 4.55446 19.2472 4.53047 19.2465L4.39383 19.241C4.06993 19.2237 3.87447 19.1808 3.71055 19.1142L3.64643 19.0863L3.58431 19.0559C3.57404 19.0506 3.5638 19.0452 3.55356 19.0398C3.29747 18.9028 3.0965 18.7018 2.95954 18.4457L2.94341 18.415L2.91302 18.3529L2.88512 18.2888C2.82297 18.1358 2.78145 17.9553 2.76213 17.6686L2.75522 17.5389C2.75429 17.5162 2.75348 17.4928 2.75279 17.4688L2.75 17.3171V4.68219L2.75279 4.53047L2.75833 4.39383C2.77562 4.06993 2.81853 3.87447 2.88512 3.71055L2.91302 3.64643L2.94341 3.58431C2.94869 3.57404 2.95406 3.5638 2.95954 3.55356C3.0965 3.29747 3.29747 3.0965 3.55356 2.95954L3.58431 2.94341L3.64643 2.91302L3.71055 2.88512C3.86354 2.82297 4.04401 2.78145 4.33074 2.76213L4.46035 2.75522C4.48312 2.75429 4.50648 2.75348 4.53047 2.75279L4.68219 2.75H17.3171ZM4.70378 4.3213L4.54691 4.32437L4.46159 4.32819L4.39084 4.33323L4.33863 4.33863L4.33323 4.39084L4.32819 4.46159L4.32437 4.54691L4.3213 4.70378V17.2955L4.32437 17.4524L4.32819 17.5377L4.33323 17.6085L4.33863 17.6604L4.39084 17.6661L4.46159 17.6711L4.54691 17.6749L4.70378 17.678H17.2955L17.4524 17.6749L17.5377 17.6711L17.6085 17.6661L17.6604 17.6604L17.6661 17.6085L17.6711 17.5377L17.6749 17.4524L17.678 17.2955V4.70378L17.6749 4.54691L17.6711 4.46159L17.6661 4.39084L17.6604 4.33863L17.6085 4.33323L17.5377 4.32819L17.4524 4.32437L17.2955 4.3213H4.70378Z" fill="currentColor"></path><path d="M14.9284 6.67847V8.2499H7.07129V6.67847H14.9284Z" fill="currentColor"></path><path d="M11.7853 7.46436V15.3215H10.2139V7.46436H11.7853Z" fill="currentColor"></path></g></g><defs><clipPath id="__2X1Gv1D__clip0_377_34677"><rect style="width:22px;height:22px" fill="currentColor"></rect></clipPath></defs></svg>'
    }
    ,
    47272: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => d
        });
        var a = n(10467)
          , l = n(54756)
          , r = n.n(l)
          , o = (n(23792),
        n(26099),
        n(3362),
        n(47764),
        n(62953),
        n(20641))
          , i = n(90033)
          , u = n(50953)
          , c = n(222)
          , s = {
            class: "player-wrapper relative"
        };
        const d = (0,
        o.pM)({
            __name: "index",
            props: {
                list: {},
                theaterMode: {
                    type: Boolean
                },
                isFullScreen: {
                    type: Boolean
                }
            },
            emits: ["afterInit", "changeIndex"],
            setup: function(e, t) {
                var l = t.expose
                  , d = t.emit
                  , f = null
                  , v = null
                  , p = (0,
                u.KR)(null)
                  , m = e
                  , h = d
                  , g = !1
                  , b = (0,
                o.wB)(m.list, function() {
                    var e = (0,
                    a.A)(r().mark((function e(t) {
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!g) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (null == t || !t.length || !c.oc) {
                                        e.next = 12;
                                        break
                                    }
                                    return document.body.style.position = "fixed",
                                    g = !0,
                                    e.next = 7,
                                    (0,
                                    o.dY)();
                                case 7:
                                    return e.next = 9,
                                    n.e(96).then(n.bind(n, 35781));
                                case 9:
                                    f = e.sent,
                                    v = f ? new f.default(p.value,{
                                        direction: "vertical",
                                        slidesPerView: 1,
                                        speed: 400,
                                        threshold: 50,
                                        autoHeight: !1,
                                        on: {
                                            afterInit: function() {
                                                var e = (0,
                                                a.A)(r().mark((function e() {
                                                    return r().wrap((function(e) {
                                                        for (; ; )
                                                            switch (e.prev = e.next) {
                                                            case 0:
                                                                h("afterInit");
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                            }
                                                    }
                                                    ), e)
                                                }
                                                )));
                                                return function() {
                                                    return e.apply(this, arguments)
                                                }
                                            }(),
                                            slideChange: function(e) {
                                                h("changeIndex", e)
                                            }
                                        }
                                    }) : null,
                                    b();
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), {
                    immediate: !0
                });
                return (0,
                o.hi)((function() {
                    document.body.style.position = ""
                }
                )),
                l({
                    next: function() {
                        var e;
                        null === (e = v) || void 0 === e || e.slideNext()
                    },
                    prev: function() {
                        var e;
                        null === (e = v) || void 0 === e || e.slidePrev()
                    },
                    update: function() {
                        var e;
                        null === (e = v) || void 0 === e || e.update()
                    },
                    root: p,
                    disable: function() {
                        var e;
                        console.log("disable swiper"),
                        null === (e = v) || void 0 === e || e.disable()
                    },
                    enable: function() {
                        var e;
                        console.log("enable swiper"),
                        null === (e = v) || void 0 === e || e.enable()
                    }
                }),
                function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("div", s, [(0,
                    o.Lk)("div", {
                        ref_key: "swiperRef",
                        ref: p,
                        class: "swiper"
                    }, [(0,
                    o.Lk)("div", {
                        class: "swiper-wrapper",
                        style: (0,
                        i.Tr)({
                            width: m.isFullScreen ? "100vw" : "calc(100vw - 436px)",
                            height: "calc(100vh - ".concat(m.theaterMode || m.isFullScreen ? 0 : 50, "px)")
                        })
                    }, [((0,
                    o.uX)(!0),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(m.list, (function(t, n) {
                        return (0,
                        o.uX)(),
                        (0,
                        o.CE)("div", {
                            key: t.id,
                            class: "swiper-slide w-100-p h-100-p flex-col"
                        }, [(0,
                        o.RG)(e.$slots, "default", {
                            item: t,
                            index: n
                        })])
                    }
                    )), 128))], 4)], 512), (0,
                    o.RG)(e.$slots, "control")])
                }
            }
        })
    }
    ,
    53257: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => C
        });
        var a = n(10467)
          , l = n(54756)
          , r = n.n(l)
          , o = (n(74423),
        n(62010),
        n(20641))
          , i = n(50953)
          , u = n(90033)
          , c = n(57142)
          , s = n(50200)
          , d = n(34905)
          , f = n(62535)
          , v = n(12947)
          , p = {
            key: 0,
            class: "flex-col bg-000-2 relative min-w-640 rounded-12"
        }
          , m = {
            key: 0,
            class: "author flex items-center justify-between"
        }
          , h = {
            class: "info"
        }
          , g = ["src"]
          , b = {
            class: "c-fff flex items-center"
        }
          , k = {
            class: "item fans"
        }
          , y = {
            class: "item follow"
        }
          , M = {
            class: "item photo"
        }
          , A = {
            class: "desc"
        }
          , L = {
            class: "tip"
        }
          , E = {
            key: 1,
            class: "end"
        };
        const w = (0,
        o.pM)({
            __name: "NoLiveDetail",
            props: {
                showLiveRecos: {
                    type: Boolean,
                    default: !0
                },
                customText: {
                    default: "主播尚未开播，可以观看其他直播"
                },
                forbiddenState: {},
                isInPicture: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                o.EW)((function() {
                    return [v.vX.BE_TICK_OUT, v.vX.BE_BANNED].includes(t.forbiddenState) ? "因主播权限设置，您暂时无法进入该直播间" : t.customText
                }
                ))
                  , l = (0,
                o.WQ)(c.$m)
                  , w = (0,
                o.EW)((function() {
                    return l.value.followStatus === s.m.Following
                }
                ));
                function C() {
                    return R.apply(this, arguments)
                }
                function R() {
                    return (R = (0,
                    a.A)(r().mark((function e() {
                        var t;
                        return r().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    f.t)();
                                case 2:
                                    if (!e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 5,
                                    (0,
                                    d.Ei)(l.value.id, w.value ? 2 : 1);
                                case 5:
                                    t = e.sent.data,
                                    l.value.followStatus = (null == t ? void 0 : t.followStatus) || s.m.UnFollowed;
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                return function(e, a) {
                    var r, c, s, d = (0,
                    o.g2)("router-link");
                    return t.isInPicture ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", E, " 直播已结束 ")) : ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", p, [t.forbiddenState !== (0,
                    i.R1)(v.vX).BE_BANNED && t.forbiddenState !== (0,
                    i.R1)(v.vX).BE_TICK_OUT ? ((0,
                    o.uX)(),
                    (0,
                    o.CE)("div", m, [(0,
                    o.Lk)("div", h, [(0,
                    o.bF)(d, {
                        target: "_blank",
                        title: (0,
                        i.R1)(l).name,
                        to: "/profile/".concat((0,
                        i.R1)(l).id)
                    }, {
                        default: (0,
                        o.k6)((function() {
                            return [(0,
                            o.Lk)("img", {
                                width: "50",
                                height: "50",
                                class: "rounded mr-8 left",
                                src: (0,
                                i.R1)(l).avatar,
                                alt: ""
                            }, null, 8, g), (0,
                            o.eW)(" " + (0,
                            u.v_)((0,
                            i.R1)(l).name) + " ", 1), (0,
                            o.Lk)("span", {
                                class: (0,
                                u.C4)(["sex", "M" === (0,
                                i.R1)(l).sex ? "male" : "female"])
                            }, null, 2)]
                        }
                        )),
                        _: 1
                    }, 8, ["title", "to"])]), (0,
                    o.Lk)("div", b, [(0,
                    o.Lk)("div", k, (0,
                    u.v_)((null === (r = (0,
                    i.R1)(l).counts) || void 0 === r ? void 0 : r.fan) || 0), 1), (0,
                    o.Lk)("div", y, (0,
                    u.v_)((null === (c = (0,
                    i.R1)(l).counts) || void 0 === c ? void 0 : c.follow) || 0), 1), (0,
                    o.Lk)("div", M, (0,
                    u.v_)((null === (s = (0,
                    i.R1)(l).counts) || void 0 === s ? void 0 : s.photo) || 0), 1), (0,
                    o.Lk)("div", {
                        class: (0,
                        u.C4)(["follow-button", {
                            followed: w.value
                        }]),
                        onClick: C
                    }, (0,
                    u.v_)(w.value ? "已关注" : "关注"), 3)])])) : (0,
                    o.Q3)("", !0), (0,
                    o.Lk)("div", A, [(0,
                    o.Lk)("p", L, [(0,
                    o.Lk)("span", null, (0,
                    u.v_)(n.value), 1)])])]))
                }
            }
        })
          , C = (0,
        n(66262).A)(w, [["__scopeId", "data-v-5e26711f"]])
    }
    ,
    53638: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => c
        }),
        n(28706),
        n(74423),
        n(62010);
        var a = n(20641)
          , l = n(90033)
          , r = {
            class: "avatar"
        }
          , o = ["src", "alt"]
          , i = {
            key: 1,
            class: "img-default"
        };
        const u = (0,
        a.pM)({
            __name: "index",
            props: {
                size: {
                    default: 0
                },
                verifiedSize: {
                    default: 0
                },
                alt: {
                    default: ""
                },
                showVerified: {
                    type: Boolean,
                    default: !1
                },
                verified: {
                    type: Boolean,
                    default: !1
                },
                user: {
                    default: {}
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                a.EW)((function() {
                    var e, n;
                    return t.showVerified && (null === (e = t.user.verifiedStatus) || void 0 === e ? void 0 : e.verified) && [4, 5, 6, 7, 8, 9, 10, 11].includes(null === (n = t.user.verifiedStatus) || void 0 === n ? void 0 : n.type)
                }
                ))
                  , u = (0,
                a.EW)((function() {
                    var e;
                    return [4, 5, 7, 8, 9].includes(null === (e = t.user.verifiedStatus) || void 0 === e ? void 0 : e.type) ? "person" : "company"
                }
                ));
                return function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", r, [e.user.avatar ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("img", {
                        key: 0,
                        src: e.user.profile || e.user.avatar,
                        style: (0,
                        l.Tr)({
                            width: "".concat(e.size, "px"),
                            height: "".concat(e.size, "px")
                        }),
                        alt: e.user.name
                    }, null, 12, o)) : ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", i)), n.value ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("span", {
                        key: 2,
                        class: (0,
                        l.C4)(["avatar-verified", u.value]),
                        style: (0,
                        l.Tr)({
                            width: "".concat(e.verifiedSize, "px"),
                            height: "".concat(e.verifiedSize, "px"),
                            backgroundSize: "".concat(e.verifiedSize, "px ").concat(e.verifiedSize, "px")
                        })
                    }, null, 6)) : (0,
                    a.Q3)("", !0)])
                }
            }
        })
          , c = (0,
        n(66262).A)(u, [["__scopeId", "data-v-3c3ce953"]])
    }
    ,
    56649: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => c
        });
        var a = n(20641)
          , l = n(90033)
          , r = {
            class: "mask"
        }
          , o = {
            class: "tip"
        }
          , i = {
            class: "button"
        };
        const u = (0,
        a.pM)({
            __name: "RiskMask",
            props: {
                title: {},
                content: {},
                url: {}
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    var u = (0,
                    a.g2)("router-link");
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", r, [(0,
                    a.Lk)("div", o, [(0,
                    a.Lk)("span", null, (0,
                    l.v_)(t.title), 1), (0,
                    a.bF)(u, {
                        to: t.url
                    }, {
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.Lk)("div", i, [(0,
                            a.Lk)("span", null, (0,
                            l.v_)(t.content), 1)])]
                        }
                        )),
                        _: 1
                    }, 8, ["to"])])])
                }
            }
        })
          , c = (0,
        n(66262).A)(u, [["__scopeId", "data-v-49a2bde4"]])
    }
    ,
    57835: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => d
        }),
        n(52675),
        n(2008),
        n(51629),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(26099),
        n(23500);
        var a = n(64467)
          , l = n(20641)
          , r = n(90033)
          , o = n(16265)
          , i = n(57142);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const s = (0,
        l.pM)(c(c({}, {
            name: "p-radio-group"
        }), {}, {
            props: {
                modelValue: {
                    default: {}
                },
                type: {
                    default: ""
                }
            },
            emits: ["update:modelValue", "change"],
            setup: function(e, t) {
                var n = t.emit
                  , a = (0,
                o.Py)(i.Xb).useExpose
                  , u = e
                  , c = n;
                return a({
                    setValue: function(e) {
                        c("update:modelValue", e),
                        (0,
                        l.dY)((function() {
                            return c("change", e)
                        }
                        ))
                    },
                    modelValue: (0,
                    l.EW)((function() {
                        return u.modelValue
                    }
                    ))
                }),
                function(e, t) {
                    return (0,
                    l.uX)(),
                    (0,
                    l.CE)("div", {
                        class: (0,
                        r.C4)(["radio-group", {
                            "radio-group-button": "button" === u.type
                        }])
                    }, [(0,
                    l.RG)(e.$slots, "default")], 2)
                }
            }
        }))
          , d = (0,
        n(66262).A)(s, [["__scopeId", "data-v-4faa9628"]])
    }
    ,
    59663: (e, t, n) => {
        "use strict";
        n.d(t, {
            w: () => s
        });
        var a = n(10467)
          , l = n(54756)
          , r = n.n(l)
          , o = (n(60739),
        n(34905))
          , i = n(60240)
          , u = n(12947)
          , c = n(67357)
          , s = (0,
        n(19716).nY)("follow", {
            state: function() {
                return {
                    currentFollowStatus: u.m3.UnFollowed,
                    needToFollow: !1,
                    authorId: "",
                    data: 3
                }
            },
            actions: {
                setNeedToFollow: function(e, t) {
                    this.needToFollow = !0,
                    this.authorId = e,
                    this.data = t
                },
                followAuthor: function() {
                    var e = this;
                    return (0,
                    a.A)(r().mark((function t() {
                        var n;
                        return r().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    (0,
                                    o.Ei)(e.authorId, e.data);
                                case 3:
                                    (n = t.sent.data).followStatus === u.m3.Following ? (0,
                                    c.A)("关注成功") : n.followStatus === u.m3.UnFollowed && (0,
                                    c.A)("取关成功"),
                                    e.needToFollow = !1,
                                    e.currentFollowStatus = n.followStatus,
                                    t.next = 13;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t.catch(0),
                                    console.log("🫣【P1】直播间互动-关注失败"),
                                    (0,
                                    i.ho)({
                                        name: "【P1】直播间互动",
                                        src: "pure-components/Live/HeaderRight/FollowButton/store.ts",
                                        event_type: "error",
                                        extra_info: JSON.stringify({
                                            event: "主播关注失败",
                                            msg: t.t0
                                        })
                                    });
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 9]])
                    }
                    )))()
                }
            }
        })
    }
    ,
    65865: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => f
        }),
        n(52675),
        n(2008),
        n(51629),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(26099),
        n(23500);
        var a = n(64467)
          , l = (n(10467),
        n(54756),
        n(28706),
        n(20641))
          , r = n(90033)
          , o = n(50953)
          , i = n(75220);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        var c = ["src"]
          , s = {
            class: "room-title"
        };
        const d = (0,
        l.pM)({
            __name: "index",
            props: {
                src: {
                    default: ""
                },
                title: {
                    default: ""
                },
                id: {
                    default: ""
                },
                width: {
                    default: "152.5px"
                },
                height: {
                    default: "233px"
                },
                type: {
                    default: ""
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                o.KR)(!0)
                  , d = (0,
                i.lq)()
                  , f = (0,
                l.EW)((function() {
                    return {
                        show_name: "GENERAL_MODULE_ITEM",
                        show_value: {
                            game_name: t.title,
                            game_id: t.id,
                            module_name: d.params.type || d.meta.type,
                            module_type: "GAME_DETAIL_ENTRY"
                        }
                    }
                }
                ));
                function v() {}
                return (0,
                l.EW)((function() {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? u(Object(n), !0).forEach((function(t) {
                                (0,
                                a.A)(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({
                        type: "show"
                    }, f.value)
                }
                )),
                function(e, a) {
                    var o = (0,
                    l.g2)("router-link");
                    return (0,
                    l.uX)(),
                    (0,
                    l.CE)("div", {
                        class: "category-card",
                        onClick: v
                    }, [(0,
                    l.bF)(o, {
                        class: (0,
                        r.C4)(["category-card-preview", {
                            ready: n.value
                        }]),
                        to: "/cate/".concat(t.type, "/").concat(t.id),
                        title: t.title,
                        style: (0,
                        r.Tr)({
                            width: t.width,
                            height: "calc(".concat(t.height, " - 46px)")
                        })
                    }, {
                        default: (0,
                        l.k6)((function() {
                            return [(0,
                            l.Lk)("img", {
                                src: t.src
                            }, null, 8, c)]
                        }
                        )),
                        _: 1
                    }, 8, ["to", "title", "class", "style"]), (0,
                    l.bF)(o, {
                        class: "category-card-title",
                        to: "/cate/".concat(t.type, "/").concat(t.id),
                        title: t.title,
                        style: (0,
                        r.Tr)({
                            width: t.width
                        })
                    }, {
                        default: (0,
                        l.k6)((function() {
                            return [(0,
                            l.Lk)("p", s, (0,
                            r.v_)(e.title), 1)]
                        }
                        )),
                        _: 1
                    }, 8, ["to", "title", "style"])])
                }
            }
        })
          , f = (0,
        n(66262).A)(d, [["__scopeId", "data-v-90395486"]])
    }
    ,
    66322: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => m
        });
        var a = n(7350)
          , l = n.n(a)
          , r = n(20641)
          , o = n(50953)
          , i = n(53751)
          , u = n(36947)
          , c = n(16265)
          , s = n(85507)
          , d = n(22720)
          , f = n(222)
          , v = {
            class: "guide-widget"
        };
        const p = (0,
        r.pM)({
            __name: "index",
            props: {
                target: {
                    default: d.oc ? window : void 0
                },
                onlyTop: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                o.KR)(!1)
                  , a = 0
                  , d = l()((function() {
                    var e = t.target.scrollTop || document.body.scrollTop || document.documentElement.scrollTop;
                    n.value = e > a
                }
                ), 100);
                (0,
                r.sV)((function() {
                    var e, t;
                    a = null !== (e = null === (t = screen) || void 0 === t ? void 0 : t.availHeight) && void 0 !== e ? e : 0
                }
                )),
                (0,
                r.wB)((function() {
                    return t.target
                }
                ), (function() {
                    var e, n, l;
                    f.S$ || (a = null !== (e = null === (n = screen) || void 0 === n ? void 0 : n.availHeight) && void 0 !== e ? e : null === (l = t.target) || void 0 === l ? void 0 : l.offsetHeight)
                }
                ), {
                    immediate: !0
                }),
                (0,
                c.ML)("scroll", d, {
                    target: (0,
                    o.EW)((function() {
                        return t.target
                    }
                    ))
                });
                var p = function() {
                    t.target.scrollTop ? t.target.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }) : window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                };
                return function(e, a) {
                    return (0,
                    r.bo)(((0,
                    r.uX)(),
                    (0,
                    r.CE)("ul", v, [t.onlyTop ? (0,
                    r.Q3)("", !0) : ((0,
                    r.uX)(),
                    (0,
                    r.Wv)(u.A, {
                        key: 0,
                        placement: "left"
                    }, {
                        content: (0,
                        r.k6)((function() {
                            return a[1] || (a[1] = [(0,
                            r.Lk)("div", {
                                class: "download-tooltip"
                            }, [(0,
                            r.Lk)("img", {
                                src: "https://static.yximgs.com/static/kuaishou/static/img/qrcode-165bdb5a97.png"
                            }), (0,
                            r.Lk)("p", null, "扫码下载快手")], -1)])
                        }
                        )),
                        default: (0,
                        r.k6)((function() {
                            return [a[2] || (a[2] = (0,
                            r.Lk)("li", {
                                class: "guide-widget-item"
                            }, [(0,
                            r.Lk)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAANlBMVEUAAADm5ubt7e3////n5+fn5+fn5+fo6Ojn5+f/P273PWn2PWn3PWnn5+f3PWr3PGnm5ub2PGgJVBrqAAAAEHRSTlMA4xsB88i9ZUkb88i9tmW2v19PrAAAAOBJREFUWMPtlUEOgyAQRYuIqCjC/S9bphUT1ArpRKPJfxtkFi8gw+cFAADgyUhrej/TGyuXula1m6mVlqW+bvAJQ/etV41LaKrC9ZEvNcpPnXypsWyN1m+wVNdugy4SmmCYumX/U5ga+lLBMC67rMYwVUVCOg/yRSOdDH3QeZAvGulkioQ+sDd3gViLcwgh5Av5jX3x1eOHAz++Tg5Y/hMAzueEn89sjy2HDdwK0a6GLIdXTDgnVkOWwxAg9WrI8iumGML9IIUQwj+E92psxtVjh8NV8ZUP2Ls9AQAAAO7IG8FvNOHoBZXQAAAAAElFTkSuQmCC",
                                class: "guide-widget-item-img"
                            }), (0,
                            r.Lk)("span", {
                                class: "guide-widget-item-name"
                            }, " 下载 ")], -1))]
                        }
                        )),
                        _: 1
                    })), t.onlyTop ? (0,
                    r.Q3)("", !0) : ((0,
                    r.uX)(),
                    (0,
                    r.CE)("li", {
                        key: 1,
                        class: "guide-widget-item",
                        onClick: a[0] || (a[0] = function() {
                            return (0,
                            o.R1)(s.db) && (0,
                            o.R1)(s.db).apply(void 0, arguments)
                        }
                        )
                    }, a[3] || (a[3] = [(0,
                    r.Lk)("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAtFBMVEUAAADn5+ft7e3n5+fn5+fo6Ojn5+f+QG33PWn3PWrr6+v3PWn3PWnt7e3n5+f3PGn/////xNfn5+fn5+fr6+vm5ubn5+fn5+fn5+fq6ur/PXDn5+fn5+fo6Ojo6Ojp6env7+//RnPn5+fn5+fm5ubn5+fn5+fo6Ojn5+f3Pmno6Ojp6eno6Ojp6en2PGj3PWn2PWjn5+f3PWj2PGn3PWj3PWn3PWj5Pmno6Oj6PGvm5ub2PGjd1mNVAAAAOnRSTlMA8xzIvWW3HL1lGPTIDeu3CATcoh741oZ/IxnGp1lTMhQN8OTPrZV4a149OCsL7eLJx8GtpoV9d203sPk7mQAAAapJREFUWMPtlFd7gjAUhoOsCrIUFfdqax3dO/7//9Uc+kjaAg8hh4te5L0B4pfXjJMQhUKhUIjizXuTbt8fWMmiCd1o2qcZm+0tdnTX9Df+DW54A5rjypP3HXwKDIb7OFweZ9M1BbojWV/sp7o5X4BknRqXcr7wkjJ64c82ZwJtk1BKmFDG8E9j1IPWRMa31FjPaa45slhzP5YQDqFIvIJK2sBCSAi7rF9h0c1giPULfMG6aWHpX81qC7dQwyWLITVnOHMfpJA9++mxjsvUNU2HIpyXFDxsF2RMIZ1j0DOH4kSUBQxHQMh9tOz+o9woMF/KOVYKafWsdZayWi0L0qMyIc/olUI4cC1CWpQRlwl5RqsUQvj8dAQytYRe08KwaWHUtJD8S6GWK4mqjHhh64hM4dEzEZmiy8FAZfLXl+FgMvkL1hTKKFBEeEW747qdNklZBadghdONL04pF2P4emFv4EYAvm8j+3iFlx1uvqeM910HHg+4VQRHYNtBpr2zCQqXOZjCPvvuP0mjwme+xfgpu09vfLr4TcmXC75s8uALm4M/egqFQqEQ4QsmeHw9D4djzwAAAABJRU5ErkJggg==",
                        class: "guide-widget-item-img"
                    }, null, -1), (0,
                    r.Lk)("span", {
                        class: "guide-widget-item-name"
                    }, "反馈", -1)]))), (0,
                    r.Lk)("li", {
                        class: "guide-widget-item",
                        onClick: p
                    }, a[4] || (a[4] = [(0,
                    r.Lk)("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAaVBMVEUAAADm5ubp6enp6eno6Ojn5+f2PWnm5ubn5+fn5+f5P2nn5+fn5+fm5ubm5ubn5+fm5ub3PWno6Ojn5+fr6+vp6enr6+v////4PWn3PGjn5+fm5ubm5ub3PWj3PGn3Pmj/QG3m5ub2PGgDfdL6AAAAIXRSTlMA70Q4bkDqxMCkK/Pn2a6tmpGDXiYiDAQiyaKQKfCleBzfJoGPAAABmklEQVRYw+2X27KCMAxFuYgUEUFAwLv4/x95mtORivtc2vCA43Q/ONKGRZuENHhOTk5OTp+jsExElqaZSMpwOi0o1v2T1kUwbXGiBwn+Mnd5/6PyHXO3vrrfT6qobpo6qpLHCGvfC3XzJmr1WBtt1OjCnnfsSXEIbo170pG3voXBlJkCcBU4N7CKr0+802/Tp+9pm1jnuATcQG6Rz9pJf7nYPMNjiu9opLtcOjQxjgg8frW835cr2IRpXArK51feK5EyvDAEUn2JXnhAjKj2mIfEb8c8JLa+cVhKaXkAHhATaVYaAcmyAh4QK2mWGAHFyIV74myHn/3IicIImEnLerg6E8ojlkfE8zBRS7PMCJhKy2a4uhJPAYl4HSYaaZYygF7XeQqo/jOAestaCqilt2wZFARCUOzSBoGQNlaJjUBOYutXD4GcV08XBwTyioMuX1p7/Y4wyleA9f223d48ToHViRP/f0qIeQ4p/jE6/aCfsxXhN0v8dm7+hvOpJT48WuLD0BK/R9OuHAaKw3f68MFPMycnJyenj9EXFI5LGT9evLAAAAAASUVORK5CYII=",
                        class: "guide-widget-item-img"
                    }, null, -1), (0,
                    r.Lk)("span", {
                        class: "guide-widget-item-name"
                    }, "顶部", -1)]))], 512)), [[i.aG, n.value]])
                }
            }
        })
          , m = (0,
        n(66262).A)(p, [["__scopeId", "data-v-6d7637cd"]])
    }
    ,
    69495: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => T
        }),
        n(52675),
        n(2008),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432);
        var a = n(64467)
          , l = n(38221)
          , r = n.n(l)
          , o = (n(51629),
        n(26099),
        n(23500),
        n(76031),
        n(20641))
          , i = n(90033)
          , u = n(53751)
          , c = n(50953);
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function f(e) {
            var t = e.infinite
              , n = e.slidesToShow;
            return t ? n : 0
        }
        function v(e) {
            return f(e) + e.slideCount + function(e) {
                var t = e.infinite
                  , n = e.slideCount;
                return t ? n : 0
            }(e)
        }
        function p(e) {
            if (e.infinite)
                return !0;
            var t = !0;
            return (e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1),
            t
        }
        function m(e) {
            var t = b(e);
            return e.useTransform ? (t.transition = "transform ".concat(e.speed, "ms ").concat(e.cssEase),
            t.WebkitTransition = "-webkit-transform ".concat(e.speed, "ms ").concat(e.cssEase),
            t) : ("horizontal" === e.direction ? t.transition = "left ".concat(e.left, "px ").concat(e.speed, "ms ").concat(e.cssEase) : t.transition = "top ".concat(e.left, "px ").concat(e.speed, "ms ").concat(e.cssEase),
            t)
        }
        n(28706),
        n(2892);
        var h = function(e) {
            return e && e.offsetWidth || 0
        }
          , g = function(e) {
            return e && e.offsetHeight || 0
        };
        function b(e) {
            var t, n, a = "vertical" === e.direction;
            a ? n = v(e) * e.slideHeight : t = v(e) * e.slideWidth;
            var l = {};
            if (e.useTransform) {
                var r = a ? "translate3d(0px, ".concat(e.left, "px, 0px)") : "translate3d(".concat(e.left, "px, 0px, 0px)");
                l.WebkitTransform = r,
                l.transform = r,
                l.msTransform = r
            } else
                a ? l.top = "".concat(e.left, "px") : l.left = "".concat(e.left, "px");
            return t && (l.width = "".concat(t, "px")),
            n && (l.height = "".concat(n, "px")),
            e.fade && (l.opacity = 1),
            l
        }
        function k(e) {
            var t = e.currentSlide
              , n = e.slideWidth
              , a = e.slideHeight
              , l = e.infinite
              , r = e.slideCount
              , o = e.slidesToShow
              , i = e.slidesToScroll;
            if (1 === r || r <= o)
                return 0;
            var u = 0
              , c = r % i != 0
              , s = t + i > r;
            return l ? (u = -f(e),
            c && s && (u = -(u = t <= r ? r % i : o - (t - r)))) : c && s && (u = o - r % i),
            "horizontal" === e.direction ? (u - t) * n : (u - t) * a
        }
        const y = (0,
        o.pM)({
            __name: "arrow",
            props: {
                type: {
                    default: "prev"
                },
                disableArrowType: {
                    default: "hidden"
                },
                infinite: {
                    type: Boolean,
                    default: !1
                },
                slidesToScroll: {
                    default: 1
                },
                slidesToShow: {
                    default: 1
                },
                slideCount: {
                    default: 0
                },
                currentSlide: {
                    default: 0
                },
                arrowSlot: {
                    default: null
                },
                arrowSpace: {
                    default: "34px"
                },
                arrowSize: {
                    default: "36px"
                },
                arrowBgColor: {
                    default: "rgba(0, 0, 0, .6)"
                }
            },
            emits: ["clickArrow"],
            setup: function(e, t) {
                var n = t.emit
                  , a = e
                  , l = n
                  , r = (0,
                o.EW)((function() {
                    if ("prev" === a.type) {
                        if (!a.infinite && (0 === a.currentSlide || a.slideCount <= a.slidesToScroll))
                            return !0
                    } else if ("next" === a.type && !p(a))
                        return !0;
                    return !1
                }
                ))
                  , u = (0,
                o.EW)((function() {
                    var e = {
                        "slick-arrow": !0,
                        "arrow-prev": !1,
                        "arrow-next": !1,
                        "arrow-disabled": !1,
                        "arrow-hidden": !1
                    };
                    return "prev" === a.type ? e["arrow-prev"] = !0 : e["arrow-next"] = !0,
                    r.value ? ("disabled" === a.disableArrowType ? e["arrow-disabled"] = !0 : e["arrow-hidden"] = !0,
                    e) : e
                }
                ));
                function c() {
                    r.value || l("clickArrow")
                }
                return function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("button", {
                        class: (0,
                        i.C4)(u.value),
                        style: (0,
                        i.Tr)({
                            "--arrow-space": e.arrowSpace,
                            "--arrow-size": e.arrowSize,
                            "--arrow-bg-color": e.arrowBgColor
                        }),
                        onClick: c
                    }, (0,
                    i.v_)(a.type), 7)
                }
            }
        });
        var M = n(66262);
        const A = (0,
        M.A)(y, [["__scopeId", "data-v-378fe924"]]);
        var L = n(57142)
          , E = n(16265)
          , w = n(222);
        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var I = {
            class: "slick-dots"
        }
          , S = ["onClick"];
        const x = (0,
        o.pM)(R(R({}, {
            name: "slick-carousel"
        }), {}, {
            props: {
                initialSlide: {
                    default: 0
                },
                autoplay: {
                    type: Boolean,
                    default: !1
                },
                interval: {
                    default: 3e3
                },
                dots: {
                    type: Boolean,
                    default: !0
                },
                dotsClass: {
                    default: ""
                },
                arrow: {
                    default: "always"
                },
                disableArrowType: {
                    default: "hidden"
                },
                infinite: {
                    type: Boolean,
                    default: !1
                },
                direction: {
                    default: "horizontal"
                },
                useTransform: {
                    type: Boolean,
                    default: !0
                },
                speed: {
                    default: 500
                },
                cssEase: {
                    default: "ease"
                },
                slidesToShow: {
                    default: 1
                },
                slidesToScroll: {
                    default: 1
                },
                arrowSpace: {
                    default: "34px"
                },
                arrowSize: {
                    default: "36px"
                },
                arrowBgColor: {
                    default: "rgba(0, 0, 0, .6)"
                }
            },
            emits: ["init", "reInit", "before-change", "after-change"],
            setup: function(e, t) {
                var n, l = t.emit, s = e, f = l, v = (0,
                c.KR)(null), y = (0,
                c.KR)(null), M = (0,
                c.KR)(null), C = (0,
                c.KR)({
                    slideWidth: 0,
                    listWidth: 0,
                    trackWidth: 0,
                    slideHeight: 0,
                    listHeight: 0,
                    trackHeight: 0
                }), x = (0,
                c.KR)({}), T = (0,
                c.KR)("always" === s.arrow), _ = (0,
                c.KR)(0), N = (0,
                c.KR)(0), O = (0,
                c.KR)(0), V = (0,
                o.Ht)(), j = (0,
                o.EW)((function() {
                    return V.default ? V.default()[0] : {
                        children: []
                    }
                }
                )), W = null, B = [], F = !1;
                function D() {
                    U(),
                    _.value >= N.value && z({
                        message: "index",
                        index: N.value - s.slidesToShow
                    })
                }
                function U(e) {
                    Q(e),
                    P(s)
                }
                function G(e) {
                    z({
                        message: e
                    })
                }
                function z(e) {
                    if (!F) {
                        var t = function(e, t) {
                            var n, a = e.slideCount, l = e.slidesToScroll, r = e.slidesToShow, o = t.currentSlide, i = a % l != 0 ? 0 : (a - o) % l;
                            switch (t.message) {
                            case "prev":
                                n = o - (0 === i ? l : r - i);
                                break;
                            case "next":
                                n = o + (0 === i ? l : i);
                                break;
                            case "dots":
                                if ((n = t.dotIndex * l) === o)
                                    return null;
                                break;
                            case "children":
                                if ((n = t.slideIndex + r > a ? a - r : Number(t.slideIndex)) === o)
                                    return null;
                                break;
                            case "index":
                                if ((n = Number(t.index)) === o)
                                    return null
                            }
                            return n
                        }(s, R({
                            currentSlide: _.value,
                            slideCount: N.value
                        }, e));
                        null != t && function(e) {
                            var t = function(e) {
                                var t = e.animating
                                  , n = e.infinite
                                  , a = e.index
                                  , l = e.slideCount
                                  , r = e.currentSlide
                                  , o = e.slidesToScroll
                                  , i = e.slidesToShow;
                                if (t)
                                    return {};
                                var u, c, s = a, f = s;
                                return s < 0 ? (f = s + l,
                                n ? l % o != 0 && (f = l - l % o) : f = 0) : !p(e) && s > r ? s = f = r : s >= l && (f = s - l,
                                n ? l % o != 0 && (f = 0) : f = l - i),
                                u = k(d(d({}, e), {}, {
                                    currentSlide: s,
                                    slideCount: l
                                })),
                                c = k(d(d({}, e), {}, {
                                    currentSlide: f,
                                    slideCount: l
                                })),
                                n || (u === c && (s = f),
                                u = c),
                                {
                                    state: {
                                        isAnimating: !0,
                                        currentSlide: f,
                                        trackStyle: m(d(d({}, e), {}, {
                                            left: u
                                        }))
                                    },
                                    nextState: {
                                        isAnimating: !1,
                                        currentSlide: f,
                                        trackStyle: b(d(d({}, e), {}, {
                                            left: c
                                        }))
                                    }
                                }
                            }(R(R(R({}, s), {}, {
                                index: e,
                                currentSlide: _.value,
                                trackRef: M.value
                            }, C.value), {}, {
                                slideCount: N.value
                            }))
                              , n = t.state
                              , a = t.nextState;
                            if (n) {
                                var l = n.isAnimating
                                  , r = n.currentSlide
                                  , o = n.trackStyle;
                                f("before-change", _.value, r),
                                _.value = r,
                                x.value = o,
                                F = l,
                                a && (W = setTimeout((function() {
                                    var e = a.isAnimating
                                      , t = a.currentSlide
                                      , n = a.trackStyle;
                                    _.value = t,
                                    x.value = n,
                                    F = e,
                                    f("after-change", t),
                                    W = null
                                }
                                ), s.speed))
                            }
                        }(t)
                    }
                }
                function P(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , n = function(e) {
                        if (e.listRef && e.trackRef) {
                            var t, n, a = h(e.listRef.value), l = h(e.trackRef.value), r = g(e.listRef.value), o = g(e.trackRef.value);
                            return "horizontal" === e.direction ? (t = Math.ceil(a / e.slidesToShow),
                            n = r) : (t = a,
                            n = Math.ceil(r / e.slidesToShow)),
                            {
                                slideWidth: t,
                                listWidth: a,
                                trackWidth: l,
                                slideHeight: n,
                                listHeight: r,
                                trackHeight: o
                            }
                        }
                    }(R(R({}, e), {}, {
                        listRef: y,
                        trackRef: M
                    }));
                    C.value = n;
                    var a = {
                        currentSlide: _.value,
                        slideCount: N.value,
                        slideHeight: n.slideHeight,
                        slideWidth: n.slideWidth
                    }
                      , l = k(R(R({}, e), a))
                      , r = b(R(R({}, e), {}, {
                        left: l
                    }, a));
                    (t || N.value !== j.value.children.length) && (x.value = r)
                }
                function Q(e) {
                    var t, n;
                    N.value = (null === (t = j.value) || void 0 === t ? void 0 : t.children.length) || 0,
                    O.value = s.infinite ? Math.ceil(N.value / s.slidesToScroll) : Math.ceil((N.value - s.slidesToShow) / s.slidesToScroll) + 1,
                    s.initialSlide >= 0 && s.initialSlide < N.value && (_.value = null !== (n = null == e ? void 0 : e.currentSlide) && void 0 !== n ? n : s.initialSlide)
                }
                function X(e) {
                    return (0,
                    a.A)({
                        "slick-dot-active": _.value >= (e - 1) * s.slidesToScroll && _.value < e * s.slidesToScroll
                    }, s.dotsClass, !0)
                }
                return Q(),
                "hover" === s.arrow && ((0,
                E.ML)("mouseenter", (function() {
                    T.value = !0
                }
                ), {
                    target: v
                }),
                (0,
                E.ML)("mouseleave", (function() {
                    T.value = !1
                }
                ), {
                    target: v
                })),
                (0,
                o.wB)((function() {
                    return s
                }
                ), D, {
                    deep: !0
                }),
                (0,
                o.wB)((function() {
                    return j.value
                }
                ), (function(e, t) {
                    (null == e ? void 0 : e.children.length) !== (null == t ? void 0 : t.children.length) && D()
                }
                )),
                (0,
                o.sV)((function() {
                    P(s)
                }
                )),
                (0,
                o.xo)((function() {
                    W && (clearTimeout(W),
                    W = null),
                    B.length && (B.forEach((function(e) {
                        return clearTimeout(e)
                    }
                    )),
                    B = null)
                }
                )),
                w.oc && (0,
                E.ML)("resize", (function() {
                    n && n.cancel(),
                    (n = r()((function() {
                        y.value && M.value && (U({
                            currentSlide: _.value
                        }),
                        F = !1,
                        clearTimeout(W),
                        W = null)
                    }
                    ), 50))()
                }
                )),
                (0,
                o.Gt)(L.N4, {
                    slideStyle: C,
                    currentSlide: _,
                    slidesToShow: s.slidesToShow
                }),
                function(e, t) {
                    return (0,
                    o.uX)(),
                    (0,
                    o.CE)("div", {
                        ref_key: "root",
                        ref: v,
                        class: "slick-carousel"
                    }, [(0,
                    o.Lk)("div", {
                        ref_key: "listRef",
                        ref: y,
                        class: "slick-list"
                    }, [(0,
                    o.Lk)("div", {
                        ref_key: "trackRef",
                        ref: M,
                        class: "slick-track",
                        style: (0,
                        i.Tr)(x.value)
                    }, [(0,
                    o.RG)(e.$slots, "default")], 4)], 512), (0,
                    o.bo)((0,
                    o.bF)(A, {
                        key: "prev",
                        type: "prev",
                        "disable-arrow-type": s.disableArrowType,
                        "slides-to-scroll": s.slidesToScroll,
                        infinite: s.infinite,
                        "slide-count": N.value,
                        "slides-to-show": e.slidesToShow,
                        "current-slide": _.value,
                        "arrow-space": e.arrowSpace,
                        "arrow-size": e.arrowSize,
                        "arrow-bg-color": e.arrowBgColor,
                        onClickArrow: t[0] || (t[0] = function(e) {
                            return G("prev")
                        }
                        )
                    }, null, 8, ["disable-arrow-type", "slides-to-scroll", "infinite", "slide-count", "slides-to-show", "current-slide", "arrow-space", "arrow-size", "arrow-bg-color"]), [[u.aG, T.value]]), (0,
                    o.bo)((0,
                    o.bF)(A, {
                        key: "next",
                        type: "next",
                        "disable-arrow-type": s.disableArrowType,
                        "slides-to-scroll": s.slidesToScroll,
                        infinite: s.infinite,
                        "slide-count": N.value,
                        "current-slide": _.value,
                        "slides-to-show": e.slidesToShow,
                        "arrow-space": e.arrowSpace,
                        "arrow-size": e.arrowSize,
                        "arrow-bg-color": e.arrowBgColor,
                        onClickArrow: t[1] || (t[1] = function(e) {
                            return G("next")
                        }
                        )
                    }, null, 8, ["disable-arrow-type", "slides-to-scroll", "infinite", "slide-count", "current-slide", "slides-to-show", "arrow-space", "arrow-size", "arrow-bg-color"]), [[u.aG, T.value]]), (0,
                    o.bo)((0,
                    o.Lk)("ul", I, [((0,
                    o.uX)(!0),
                    (0,
                    o.CE)(o.FK, null, (0,
                    o.pI)(O.value, (function(e) {
                        return (0,
                        o.uX)(),
                        (0,
                        o.CE)("li", {
                            key: e,
                            class: (0,
                            i.C4)(X(e)),
                            onClick: function(t) {
                                z({
                                    message: "dots",
                                    dotIndex: e - 1
                                })
                            }
                        }, [(0,
                        o.Lk)("span", null, (0,
                        i.v_)(e), 1)], 10, S)
                    }
                    )), 128))], 512), [[u.aG, s.dots]])], 512)
                }
            }
        }))
          , T = (0,
        M.A)(x, [["__scopeId", "data-v-2982173e"]])
    }
    ,
    72691: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => u
        }),
        n(62010);
        var a = n(20641)
          , l = n(90033)
          , r = {
            class: "tag"
        }
          , o = {
            key: 0,
            class: "icon"
        };
        const i = (0,
        a.pM)({
            __name: "Follow",
            props: {
                following: {
                    type: Boolean,
                    default: !1
                },
                name: {
                    default: ""
                }
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", r, [t.following ? ((0,
                    a.uX)(),
                    (0,
                    a.CE)("div", o)) : (0,
                    a.Q3)("", !0), (0,
                    a.Lk)("p", null, (0,
                    l.v_)(t.name), 1)])
                }
            }
        })
          , u = (0,
        n(66262).A)(i, [["__scopeId", "data-v-6dfe6c41"]])
    }
    ,
    73727: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => f
        }),
        n(2008),
        n(62010),
        n(2892),
        n(26099);
        var a = n(20641)
          , l = n(90033)
          , r = n(53751)
          , o = n(50953)
          , i = {
            class: "select"
        }
          , u = ["name", "value", "disabled", "readonly"]
          , c = {
            ref: "list",
            class: "select-list select-list-bottom"
        }
          , s = ["title", "onClick"];
        const d = (0,
        a.pM)({
            __name: "index",
            props: {
                value: {
                    type: [String, Number, Boolean],
                    default: ""
                },
                list: {
                    default: function() {
                        return []
                    }
                },
                liHeight: {
                    default: 30
                },
                width: {
                    default: 80
                },
                maxHeight: {},
                name: {
                    default: ""
                },
                readonly: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["select"],
            setup: function(e, t) {
                var n = t.emit
                  , d = e
                  , f = n
                  , v = (0,
                o.KR)(!1)
                  , p = (0,
                a.EW)((function() {
                    var e;
                    if (!d.list || 0 === d.list.length)
                        return "";
                    var t = d.list.filter((function(e) {
                        return e.value === d.value
                    }
                    ));
                    return t.length > 0 && (null === (e = t[0]) || void 0 === e ? void 0 : e.text) || ""
                }
                ));
                function m() {
                    h(!0)
                }
                function h(e) {
                    v.value = e
                }
                return function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", i, [(0,
                    a.Lk)("input", {
                        type: "hidden",
                        name: d.name,
                        value: d.value,
                        disabled: d.disabled,
                        readonly: d.readonly
                    }, null, 8, u), (0,
                    a.Lk)("div", {
                        class: "select-now",
                        style: (0,
                        l.Tr)({
                            minHeight: "".concat(d.liHeight, "px"),
                            lineHeight: "".concat(d.liHeight, "px"),
                            width: "".concat(d.width, "px")
                        }),
                        onClick: m
                    }, (0,
                    l.v_)(p.value), 5), (0,
                    a.bF)(r.eB, {
                        name: "fade"
                    }, {
                        default: (0,
                        a.k6)((function() {
                            return [(0,
                            a.bo)((0,
                            a.Lk)("ul", c, [((0,
                            a.uX)(!0),
                            (0,
                            a.CE)(a.FK, null, (0,
                            a.pI)(d.list, (function(t, n) {
                                return (0,
                                a.uX)(),
                                (0,
                                a.CE)("li", {
                                    key: n,
                                    title: t.text,
                                    class: (0,
                                    l.C4)(["select-option", {
                                        selected: d.value === t.value
                                    }]),
                                    style: (0,
                                    l.Tr)({
                                        height: "".concat(d.liHeight, "px"),
                                        lineHeight: "".concat(d.liHeight, "px")
                                    }),
                                    onClick: function(e) {
                                        return function(e) {
                                            h(!1),
                                            f("select", e)
                                        }(t)
                                    }
                                }, [(0,
                                a.RG)(e.$slots, "default", {}, (function() {
                                    return [(0,
                                    a.eW)((0,
                                    l.v_)(t.text), 1)]
                                }
                                ))], 14, s)
                            }
                            )), 128))], 512), [[r.aG, v.value]])]
                        }
                        )),
                        _: 3
                    })])
                }
            }
        })
          , f = (0,
        n(66262).A)(d, [["__scopeId", "data-v-76a5ca1f"]])
    }
    ,
    76285: e => {
        e.exports = '<svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter x="-47.8%" y="-30.6%" width="195.7%" height="202.1%" filterUnits="objectBoundingBox" id="__2uVVMMR__c"><feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.809284651 0 0 0 0 0.134162305 0 0 0 0 0.153902725 0 0 0 1 0" in="shadowBlurOuter1"></feColorMatrix></filter><filter x="-24.9%" y="-81.4%" width="149.8%" height="328.1%" filterUnits="objectBoundingBox" id="__2uVVMMR__g"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.809284651 0 0 0 0 0.134162305 0 0 0 0 0.153902725 0 0 0 1 0" in="shadowBlurOuter1"></feColorMatrix></filter><rect id="__2uVVMMR__a" x="0" y="0" width="10.75" height="14.251" rx="1.5"></rect><rect id="__2uVVMMR__e" x=".17" y=".384" width="12.221" height="14.799" rx="1.5"></rect><ellipse id="__2uVVMMR__h" cx="6.969" cy="5.875" rx="7.025" ry="1.535"></ellipse><path d="M-1.772-.752V-8.77h14.294v8.018c.444.593.692 1.251.692 1.944 0 2.611-3.51 4.728-7.839 4.728-4.33 0-7.839-2.117-7.839-4.728 0-.693.248-1.35.692-1.944z" id="__2uVVMMR__d"></path></defs><g fill="none" fill-rule="evenodd"><g opacity=".6" transform="rotate(-13 11.853 1.12)"><mask id="__2uVVMMR__b" fill="#fff"><use xlink:href="#__2uVVMMR__a"></use></mask><use fill="#E0353A" xlink:href="#__2uVVMMR__a"></use><g mask="url(#__2uVVMMR__b)"><use fill="#000" filter="url(#__2uVVMMR__c)" xlink:href="#__2uVVMMR__d"></use><use fill="#F9514E" xlink:href="#__2uVVMMR__d"></use></g></g><g transform="translate(3.055 1.2)"><mask id="__2uVVMMR__f" fill="#fff"><use xlink:href="#__2uVVMMR__e"></use></mask><use fill="#E63B40" xlink:href="#__2uVVMMR__e"></use><g mask="url(#__2uVVMMR__f)"><use fill="#000" filter="url(#__2uVVMMR__g)" xlink:href="#__2uVVMMR__h"></use><use fill="#F04B48" xlink:href="#__2uVVMMR__h"></use></g><path d="M-1.676.332V-8.75h17.195V.332c.535.672.833 1.417.833 2.202 0 2.958-4.222 5.355-9.43 5.355-5.208 0-9.43-2.397-9.43-5.355 0-.785.297-1.53.832-2.202z" fill="#F04B48" mask="url(#__2uVVMMR__f)"></path><ellipse stroke="#E63B40" fill="#FFCB75" mask="url(#__2uVVMMR__f)" cx="6.28" cy="7.783" rx="3.046" ry="2.967"></ellipse></g></g></svg>'
    }
    ,
    77209: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => u
        });
        var a = n(20641)
          , l = n(90033)
          , r = {
            class: "none"
        }
          , o = {
            class: "empty"
        };
        const i = (0,
        a.pM)({
            __name: "index",
            props: {
                text: {
                    default: "暂无主播开播"
                }
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", r, [(0,
                    a.Lk)("div", o, [n[0] || (n[0] = (0,
                    a.Lk)("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAAEwO1XwAAABWVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8l0s7tAAAAc3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRscHR4fICIjJCUmJykqLC0uLzAyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTlBUVVZXWFlaW1xdXl9gYWJkZWZoaWpsbnBxcnN0dXZ3eHl6e3x9fn+Ab9a3aAAACJNJREFUGBm1wetDU3ligOE3QTReCBguClQb3ZHCrtq1MmKV1K12VUDQqeB4KRhEbbIRE97//0PP75wDnhNMhJnO85CY4kBboCkxSUikTUQBAQGRSIlALO00QaZAJCYRLYGC0AR2kMgeCDQRkIiknhFITskEicI4+3wCWCOQhICAAoVRvhKRJUAEbzwW4T4ywgcQAUGhbgOQiLMFQHgFODUACJKSiG2yTLHvq6lnZOkYB14pKSVxskhCCRwjpmCVWFvAJyRu+EFJKQWJGHlMxICIjAsMCErEWaYkIkhQXQK1TuHFAJFfhWeSUPAFCYnUJKE2iP0sCS3Qy6j67/RUrpY4rOo+cgbVQYIrKt+8V77RMqmml8lqOkbslsMkTpP4KDFfEmupE8SUiJJwmJYkvAZ4noQwLYmOcF1SuqakBCWyoKAdijpIxDncAtaNEBgh4i4uAm6ARaAjKKD4EHAPJLIl2AIUd4ERIwRGiLiJEixPM6rCvRqBw5QlZQMlMSDgUxLCKUkosCkJ6ygJi0SU2CWVhBLzPXlKYto9eihpmR7U9nm+7415fMdfdvxmuUx/M6a2lhbvPFrdNbFJD7eMtM/T7amRNoc11Jf0cNbINDnv1WH6qaslDgyql8laNxghq6PbpGZUshbUjQd7KllzKrGqtslRiVzUZbLKKoFKnnoBaOs0OTP6BtjRQbp8MjFEl7YCKqmWsU9EiqeJjJq4RGJEVxjWJRLqMFxQSdW0AdR1hYRKVe8Qm9IHRNb0HAmVQCWhUtJVEmrr4nRbO6Qqau3UvFoloYJKasLYEFDruFUB3hlsk7qqf4NlvUJe0dQ7uqhEVPJUIjW9R84v+lcClRyVyLzWyHqi70ioZ8kYNLVNVlM32NfWf5Czoq0qWRV1km/K6kf6eupn8saM/Jlj2jbS+ReO55o/sMX3za3s2sMv9FIar06VCxxRedlvdv7CDz2z29cq/Wya2F19dGdxacvUDL3UDJpX+GbwiUF7kO9qG3lKt/NtI7c4rGzkFd8zZuQ93aaNnKWHl2qDvDG1SW+X1SZZJbVOP8PqezLUj+QUT58kZ1i9xYFt7ZA1YrBO1mV1kNSoWiBjwkSLrJfaJqXOkaXuPdhQF8hSZ4hd0zZZk9oChlWyxlRiapmsn/UiEZWctlaJlLRDzm2dJqKSc16/EnmjM+SMaRu4oJKnElHpYmTtg3qDvCd6HdA2XYZMfKLLoO7AnN4nNdhUd4pQ6hh5DNwwssA+FVZ0hMQlExUip4tEPhlrkVJhV0m5j32PTa2T2NICKokVrQMNrZFSL8CwSmJJh1FJqATaIVHUD0Q29CSxRZ1CJaESqCRO6xqRB3qG2M9aRSXR0ilgVrdIqUT2tEjsP3UClURVnT9VUyukOtqevthSSazpaTa1QKJhos6+kqkREl8UFvUKqW2Dd0Bly04NGDI2QUqFir5m30Dtxb0CUDdWAaaXlqscUAGVLu9MFcm7qiuAeoKcgjoLDd0hr6nngJu6Rs6ftUZEJU8lUMm5r6eIqOT8lz4jeKuPyLqu80RUclQSKllFdQrq2iTrhW6RWNfPZG2bGiTjnMo+dYGshrFLZKn/wb5JdYKsaktXyPmHdvhmVT1LX0MqWTvqOH3pCDlf1Lscz476vxzPqpG/cyyTBr8McBzrxn79qcDRvfUHShx2076e8V2VxU17OcGRVeYWVzZ3PbC7ubI4V+H/SenmG/t6c7PE7/HTW4/o7U/8FqPrZrRf3786UiCjMHL1/uu2GeujHMvktvs6z2dO0MeJmecd921PckSlVVPtR2WOpPyobWq1xI+N7Zj4PMexzH02sTNGf9O7xjp3Cxxb4W7H2JdpeivvGPs4zm80/tHYTpkeVo3Vz/A7nKkbW+V7JtsGzXF6q660jLRWqvQ23jRoT3JIzdhderrUMKNxiZ7uGqvRZd3g81l6Gdy2y/YgvZz9bLBOzqbBK3oqNg3qU0Sm6gbNAXp6ZbBJxluDR/R23WCe1LxBjd4eGbzlwDODp/Rx3+AUqVMGL+jjqcEzUjcNntPPnEGNVM3gHv08N7hJrGzQPEE/hR2DxiyR2YbBToF+TjQNygTLBlfor/jOLu+K9HfFYJlIxeA1hxUnr8/fvz03ViA2WjejXiFWGJu7fX/++mSRw14bVIBFgyt0mdj2m3dDxCq1rY52tmoVYkPv/GZ7gi5XDBaBTSO7BXJGGubVSxxSqpvXGCGnsGtkE0oGq+RUjbXmJ09N19oGnQpdKh2Ddm361OR8y1iVnFWDEuMGD8kaaBnZmyIxa7BFly2DWRJTe0ZaRbIeGoxTNbhD1pTBA/atGZwj57TBGvseGJwh645BlSmDRbJGDDbY98FIp0hOsWPkA/s2DE6Sdd9gmrLBEjkrBvVhggsNgxpdagaNCwTDdYMVcp4YnKewa2SLvHW7PeaQx3ZbJ2/LyBdgxWCYvEstsz5VSBUGBgqkRj+Z1bpE3jmDVWDOYJFugwtNEzs3igSlxx1TncclguKNHRPNhUG61QzmiOwYaQ/yA0OfzPk0xA8M7Br5SHDd4An93TDxYW3tg4kb9Ldk8K/E3hjM0M+YQfsCsQttg2n6uWrwK4nSVyN7Ffq4bTBNatpgiT5G94x0zpGqGrSH6G3e4CKpSYNlejv3xeCfOHDNoDNOT5MGrWFiwy2DKj2NdQzmyJgxNktPC8b2Nh482NgztkBPs8aukjPaNnhZoJeJljmtCXp6YdC5SJfBbYPOZXoaWffA+gg9XdkzeH+Cw24Z+1imj4GRqamRAfp5Y2yB7yq9N1Yf5nc4vWdk8yS9jDeNNf6Z367419WHQ/Qz3TTx32f4A5Xfm9oY5Q90q22q/XiYP8xgre2Bxt//dJI/yMymeV/+5/nyw3u3/+3orp3gCKrPvvq7LHJE5evLO/5GP3NchdLw+FT1T0c3Tuz/AEw/9GHdt55jAAAAAElFTkSuQmCC",
                        alt: ""
                    }, null, -1)), (0,
                    a.Lk)("span", null, (0,
                    l.v_)(t.text), 1)])])
                }
            }
        })
          , u = (0,
        n(66262).A)(i, [["__scopeId", "data-v-1af53b42"]])
    }
    ,
    77519: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => i
        });
        var a = n(20641)
          , l = n(90033)
          , r = ["type", "disabled"];
        const o = (0,
        a.pM)({
            __name: "index",
            props: {
                type: {
                    default: "default"
                },
                size: {
                    default: "medium"
                },
                nativeType: {
                    default: "button"
                },
                radius: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["click"],
            setup: function(e, t) {
                var n = t.emit
                  , o = e
                  , i = n;
                return function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("button", {
                        type: o.nativeType,
                        disabled: o.disabled,
                        class: (0,
                        l.C4)(["btn", "btn-" + o.type, "btn-" + o.size, o.radius ? "btn-radius" : ""]),
                        onClick: t[0] || (t[0] = function(e) {
                            return function(e) {
                                i("click", e)
                            }(e)
                        }
                        )
                    }, [(0,
                    a.RG)(e.$slots, "default")], 10, r)
                }
            }
        })
          , i = (0,
        n(66262).A)(o, [["__scopeId", "data-v-06382c7c"]])
    }
    ,
    86385: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => i
        });
        var a = n(7350)
          , l = n.n(a)
          , r = n(20641)
          , o = n(50953);
        n(17427),
        n(84185),
        n(27495),
        "undefined" == typeof window || "scrollingElement"in document || function() {
            function e(e) {
                return window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle
            }
            var t;
            function n(e) {
                return "none" != e.display && !("collapse" == e.visibility && /^table-(.+-group|row|column)$/.test(e.display))
            }
            var a = function() {
                if (function() {
                    if (!/^CSS1/.test(document.compatMode))
                        return !1;
                    if (void 0 === t) {
                        var e = document.createElement("iframe");
                        e.style.height = "1px",
                        (document.body || document.documentElement || document).appendChild(e);
                        var n = e.contentWindow.document;
                        n.write('<!DOCTYPE html><div style="height:9999em">x</div>'),
                        n.close(),
                        t = n.documentElement.scrollHeight > n.body.scrollHeight,
                        e.parentNode.removeChild(e)
                    }
                    return t
                }())
                    return document.documentElement;
                var a = document.body;
                return (a = a && !/body/i.test(a.tagName) ? function(e) {
                    for (var t, n = e; n = n.nextSibling; )
                        if (1 == n.nodeType && (t = n,
                        window.HTMLBodyElement ? t instanceof HTMLBodyElement : /body/i.test(t.tagName)))
                            return n;
                    return null
                }(a) : a) && function(t) {
                    var a = e(t)
                      , l = e(document.documentElement);
                    return "visible" != a.overflow && "visible" != l.overflow && n(a) && n(l)
                }(a) ? null : a
            };
            Object.defineProperty ? Object.defineProperty(document, "scrollingElement", {
                get: a
            }) : document.__defineGetter__ ? document.__defineGetter__("scrollingElement", a) : (document.scrollingElement = a(),
            document.attachEvent && document.attachEvent("onpropertychange", (function() {
                "activeElement" == window.event.propertyName && (document.scrollingElement = a())
            }
            )))
        }();
        const i = (0,
        r.pM)({
            __name: "index",
            props: {
                threshold: {
                    default: 150
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                direction: {
                    default: "vertical"
                }
            },
            emits: ["loadData"],
            setup: function(e, t) {
                var n, a = t.emit, i = (0,
                o.KR)(null), u = e, c = a, s = l()((function(e) {
                    !u.disabled && e.target && function(e) {
                        if (!n)
                            return !1;
                        var t = e || n;
                        return "vertical" !== u.direction || t.scrollTop + t.clientHeight + u.threshold >= t.scrollHeight
                    }(e.target.scrollingElement) && c("loadData")
                }
                ), 100);
                return (0,
                r.sV)((function() {
                    (n = function() {
                        var e = i.value;
                        if ("vertical" === u.direction)
                            for (e && (e = e.parentElement); e.scrollHeight <= e.clientHeight && e !== window && e.parentElement; )
                                e = e.parentElement;
                        return e
                    }()) && ("html" === n.tagName.toLowerCase() && (n = document),
                    n.addEventListener("scroll", s))
                }
                )),
                (0,
                r.hi)((function() {
                    n.removeEventListener("scroll", s)
                }
                )),
                function(e, t) {
                    return (0,
                    r.uX)(),
                    (0,
                    r.CE)("div", {
                        ref_key: "root",
                        ref: i,
                        class: "load-more"
                    }, [(0,
                    r.RG)(e.$slots, "default")], 512)
                }
            }
        })
    }
    ,
    88888: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => p
        }),
        n(52675),
        n(2008),
        n(51629),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(26099),
        n(23500);
        var a = n(64467)
          , l = (n(48598),
        n(62010),
        n(20641))
          , r = n(90033)
          , o = n(53751)
          , i = n(16265)
          , u = n(57142);
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var d = ["name", "value", "disabled"]
          , f = {
            key: 0,
            class: "radio-label"
        };
        const v = (0,
        l.pM)(s(s({}, {
            name: "p-radio"
        }), {}, {
            props: {
                value: {
                    default: {}
                },
                name: {
                    default: ""
                },
                modelValue: {
                    default: {}
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                border: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["update:modelValue", "change"],
            setup: function(e, t) {
                var n = t.emit
                  , a = (0,
                i.cJ)(u.Xb).parent
                  , c = e;
                if (!a && void 0 === c.modelValue)
                    throw new Error(["[platform-ui radio error]: ", 'when not in radio-group, the prop "checked" is required.'].join(""));
                var s = n
                  , v = (0,
                l.EW)((function() {
                    return !!a
                }
                ))
                  , p = (0,
                l.EW)({
                    get: function() {
                        return v.value ? a.modelValue.value : c.modelValue
                    },
                    set: function(e) {
                        v.value ? a.setValue(e) : s("update:modelValue", e)
                    }
                });
                function m() {
                    (0,
                    l.dY)((function() {
                        s("change", p.value)
                    }
                    ))
                }
                return function(e, t) {
                    return (0,
                    l.uX)(),
                    (0,
                    l.CE)("label", {
                        class: (0,
                        r.C4)(["radio", {
                            checked: p.value === c.value,
                            disabled: c.disabled,
                            bordered: c.border
                        }])
                    }, [(0,
                    l.Lk)("span", {
                        class: (0,
                        r.C4)(["radio-input", {
                            checked: p.value === c.value,
                            disabled: c.disabled
                        }])
                    }, [t[1] || (t[1] = (0,
                    l.Lk)("span", {
                        class: "radio-inner"
                    }, null, -1)), (0,
                    l.bo)((0,
                    l.Lk)("input", {
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return p.value = e
                        }
                        ),
                        name: c.name,
                        value: c.value,
                        disabled: c.disabled,
                        type: "radio",
                        "aria-hidden": "true",
                        class: "radio-hidden",
                        onChange: m
                    }, null, 40, d), [[o.XL, p.value]])], 2), c.name ? ((0,
                    l.uX)(),
                    (0,
                    l.CE)("span", f, [(0,
                    l.RG)(e.$slots, "default", {}, (function() {
                        return [(0,
                        l.eW)((0,
                        r.v_)(c.name), 1)]
                    }
                    ))])) : (0,
                    l.Q3)("", !0)], 2)
                }
            }
        }))
          , p = (0,
        n(66262).A)(v, [["__scopeId", "data-v-03705366"]])
    }
    ,
    89814: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => h
        }),
        n(28706),
        n(62010);
        var a = n(20641)
          , l = n(90033)
          , r = n(50953)
          , o = n(69495)
          , i = n(36137)
          , u = n(16265)
          , c = n(17031)
          , s = {
            class: "swiper-container"
        }
          , d = {
            class: "category-item"
        }
          , f = ["href"]
          , v = ["src"]
          , p = {
            key: 0,
            class: "title"
        };
        const m = (0,
        a.pM)({
            __name: "index",
            props: {
                list: {
                    default: function() {
                        return []
                    }
                },
                name: {
                    default: ""
                },
                config: {
                    default: function() {
                        return []
                    }
                },
                categoryChoice: {
                    default: function() {
                        return {}
                    }
                },
                showName: {
                    type: Boolean,
                    default: !0
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                u.jU)((function() {
                    m.value !== t.config[n.value] && (m.value = t.config[n.value],
                    h.value = {
                        dots: !1,
                        infinite: !1,
                        slidesToShow: m.value,
                        slidesToScroll: m.value
                    })
                }
                )).screenLevel
                  , m = (0,
                r.KR)(t.config[n.value || 0])
                  , h = (0,
                r.KR)({
                    dots: !1,
                    infinite: !1,
                    slidesToShow: m.value,
                    slidesToScroll: m.value
                });
                function g(e, n) {
                    (0,
                    c.TO)("GAME_CATEGORY_MODULE_GAME_SWITCH_BUTTON", {
                        game_type: t.name,
                        switch_type: n > e ? 1 : 2
                    })
                }
                return function(e, t) {
                    var n = (0,
                    a.gN)("log");
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", s, [(0,
                    a.bF)(o.A, (0,
                    a.v6)(h.value, {
                        onBeforeChange: g
                    }), {
                        default: (0,
                        a.k6)((function() {
                            return [((0,
                            a.uX)(!0),
                            (0,
                            a.CE)(a.FK, null, (0,
                            a.pI)(e.list, (function(t, o) {
                                return (0,
                                a.uX)(),
                                (0,
                                a.Wv)(i.A, {
                                    key: t.id,
                                    index: o
                                }, {
                                    default: (0,
                                    a.k6)((function() {
                                        return [(0,
                                        a.bo)(((0,
                                        a.uX)(),
                                        (0,
                                        a.CE)("div", d, [(0,
                                        a.Lk)("a", {
                                            href: "/cate/".concat(t.categoryAbbr, "/").concat(t.id)
                                        }, [(0,
                                        a.Lk)("img", {
                                            src: t.poster,
                                            alt: ""
                                        }, null, 8, v), e.showName ? ((0,
                                        a.uX)(),
                                        (0,
                                        a.CE)("div", p, (0,
                                        l.v_)(t.name), 1)) : (0,
                                        a.Q3)("", !0)], 8, f)])), [[n, (0,
                                        r.R1)(c.A5)("GAME_CATEGORY_MODULE_ITEM", {
                                            game_id: t.id,
                                            game_name: t.name,
                                            game_type: e.name
                                        })]])]
                                    }
                                    )),
                                    _: 2
                                }, 1032, ["index"])
                            }
                            )), 128))]
                        }
                        )),
                        _: 1
                    }, 16)])
                }
            }
        })
          , h = (0,
        n(66262).A)(m, [["__scopeId", "data-v-e2a53e16"]])
    }
    ,
    92500: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => L
        });
        var a = n(10467)
          , l = n(60895)
          , r = n.n(l)
          , o = n(54756)
          , i = n.n(o)
          , u = (n(34782),
        n(60739),
        n(20641))
          , c = n(53751)
          , s = n(50953)
          , d = n(90033)
          , f = n(62535)
          , v = n(57142)
          , p = n(67357)
          , m = n(17031)
          , h = n(60240)
          , g = n(40303)
          , b = n(16265)
          , k = n(16419)
          , y = {
            class: "comment-input box-border"
        }
          , M = ["max-length", "placeholder", "onKeypress"];
        const A = (0,
        u.pM)({
            __name: "index",
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                maxLength: {
                    default: 40
                }
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                u.WQ)(v.D1)
                  , l = (0,
                u.WQ)(v.$m)
                  , o = (0,
                u.WQ)(v.qq)
                  , A = (0,
                u.WQ)(v.j0)
                  , L = (0,
                u.WQ)(v.az)
                  , E = (0,
                s.KR)("")
                  , w = (0,
                s.KR)(null)
                  , C = (0,
                u.EW)((function() {
                    return A.value ? "说点什么吧..." : "尚未登录，登录后即可参与互动哦～"
                }
                ))
                  , R = (0,
                s.KR)(!1)
                  , I = (0,
                s.KR)(!1)
                  , S = !1;
                function x() {
                    return T.apply(this, arguments)
                }
                function T() {
                    return (T = (0,
                    a.A)(i().mark((function e() {
                        var t, a, r;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    f.t)("LIVE_COMMENT");
                                case 2:
                                    if (e.sent) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (E.value.length && L.value) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if (!S) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return S = !0,
                                    e.next = 11,
                                    n(E.value);
                                case 11:
                                    t = e.sent,
                                    a = t.result,
                                    r = t.error_msg,
                                    1 !== a ? (I.value = !0,
                                    (0,
                                    p.A)(999 === a ? r : "言论错误", {
                                        teleport: "#liveroom__sidebar"
                                    }),
                                    console.log("🧐【P1】直播间互动-评论失败"),
                                    (0,
                                    h.ho)({
                                        name: "【P1】直播间互动",
                                        src: "pure-components/CommentInput/index.vue",
                                        event_type: "error",
                                        extra_info: JSON.stringify({
                                            event: "评论失败",
                                            msg: a
                                        })
                                    })) : ((0,
                                    h.UE)("COMMENT_BUTTON", {
                                        anchor_user_id: l.value.id,
                                        live_stream_id: o.value.id
                                    }),
                                    (0,
                                    h.UE)("POST_LIVE_COMMENT", {
                                        status: "SUCCESS"
                                    }),
                                    E.value = ""),
                                    S = !1;
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                return (0,
                u.wB)(E, function() {
                    var e = (0,
                    a.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return I.value = !1,
                                    e.next = 3,
                                    (0,
                                    u.dY)();
                                case 3:
                                    if (w.value) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    w.value.style.height = "auto",
                                    w.value.style.height = "".concat(w.value.scrollHeight - 20, "px"),
                                    t.length >= 40 && (E.value = t.slice(0, 40),
                                    (0,
                                    p.A)("最多输入40个字符"));
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                (0,
                b.iX)(g.eS, (function(e) {
                    var t;
                    E.value += e,
                    null === (t = w.value) || void 0 === t || t.focus()
                }
                )),
                (0,
                b.iX)(g.Qv, (function() {
                    R.value = !0,
                    r()((function() {
                        R.value = !1
                    }
                    ), 5e3)
                }
                )),
                function(e, n) {
                    var a = (0,
                    u.gN)("log");
                    return (0,
                    u.uX)(),
                    (0,
                    u.CE)("div", y, [(0,
                    u.bo)((0,
                    u.Lk)("textarea", {
                        ref_key: "textRef",
                        ref: w,
                        "onUpdate:modelValue": n[0] || (n[0] = function(e) {
                            return E.value = e
                        }
                        ),
                        rows: "1",
                        class: "box-boder",
                        "max-length": t.maxLength,
                        placeholder: C.value,
                        onKeypress: (0,
                        c.jR)((0,
                        c.D$)(x, ["prevent"]), ["enter"])
                    }, null, 40, M), [[c.Jo, E.value], [a, (0,
                    s.R1)(m.fU)("COMMENT_BUTTON", {
                        anchor_user_id: (0,
                        s.R1)(l).id,
                        live_stream_id: (0,
                        s.R1)(o).id,
                        btn_area: "BOX"
                    })]]), (0,
                    u.bF)((0,
                    s.R1)(k.A), {
                        "popup-visible": R.value,
                        "onUpdate:popupVisible": n[1] || (n[1] = function(e) {
                            return R.value = e
                        }
                        ),
                        position: "top",
                        "popup-offset": 10,
                        "show-arrow": "",
                        disabled: (0,
                        s.R1)(A),
                        "auto-fit-position": !1,
                        "popup-translate": [-48, 0]
                    }, {
                        content: (0,
                        u.k6)((function() {
                            return n[2] || (n[2] = [(0,
                            u.Lk)("span", {
                                class: "tip"
                            }, "登录后即可参与评论互动", -1)])
                        }
                        )),
                        default: (0,
                        u.k6)((function() {
                            return [(0,
                            u.bo)(((0,
                            u.uX)(),
                            (0,
                            u.CE)("div", {
                                class: (0,
                                d.C4)(["submit-button", {
                                    disabled: I.value,
                                    valid: E.value.length > 0,
                                    login: !(0,
                                    s.R1)(A)
                                }]),
                                onClick: x
                            }, [(0,
                            u.eW)((0,
                            d.v_)((0,
                            s.R1)(A) ? "发送" : "登录"), 1)], 2)), [[a, (0,
                            s.R1)(m.fU)("COMMENT_BUTTON", {
                                anchor_user_id: (0,
                                s.R1)(l).id,
                                live_stream_id: (0,
                                s.R1)(o).id,
                                btn_area: "SEND_BUTTON"
                            })]])]
                        }
                        )),
                        _: 1
                    }, 8, ["popup-visible", "disabled"])])
                }
            }
        })
          , L = (0,
        n(66262).A)(A, [["__scopeId", "data-v-3e0b7ef0"]])
    }
    ,
    94771: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => i
        });
        var a = n(20641)
          , l = {
            class: "blur"
        }
          , r = ["src"];
        const o = (0,
        a.pM)({
            __name: "new",
            props: {
                src: {}
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", l, [(0,
                    a.Lk)("img", {
                        src: t.src,
                        alt: ""
                    }, null, 8, r), n[0] || (n[0] = (0,
                    a.Lk)("div", {
                        class: "wrapper"
                    }, null, -1))])
                }
            }
        })
          , i = (0,
        n(66262).A)(o, [["__scopeId", "data-v-175eeaf1"]])
    }
    ,
    95033: e => {
        "use strict";
        e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZmlsbD0idXJsKCNwYXR0ZXJuMF8xNzNfMTc0NjIpIiBkPSJNMCAwaDEwdjEwSDB6Ii8+PGRlZnM+PHBhdHRlcm4gaWQ9InBhdHRlcm4wXzE3M18xNzQ2MiIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjx1c2UgeGxpbms6aHJlZj0iI2ltYWdlMF8xNzNfMTc0NjIiIHRyYW5zZm9ybT0ic2NhbGUoLjAzMzMzKSIvPjwvcGF0dGVybj48aW1hZ2UgaWQ9ImltYWdlMF8xNzNfMTc0NjIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFlQ0FZQUFBQTdNSzZpQUFBQUFYTlNSMElBcnM0YzZRQUFBcDFKUkVGVVNFdkZsejlvRkZFUXhyOVp2QkN4OERyVGFWQWhOa0Z0UkZSeUo1aGJLeE93VXhJTHhWS3RWRVJ1Ri94RGJHelNoRmhjUk91TDNTYUNTU1NnbFVvcVFTWGFhV1VzMUpBN2RtVDI4UzU3ZDd0Nzd5WENUWEd3ZHpQemV6UDM1cjF2Q1FiR2QwN3ZSUzQzQ3FJeEFBTUE5NEtKb2xCaUJqdS9RTHlLTUp3amYvNjJRVXFvNEJSVHdKNEtpSWNhb001WjZ3Q1d3YmhMZnJDYzVwNEs1dkp3RlE2ZHN3QTJNeGgxRUNya0JWZVM0SWxnOXQxM1lCenBYSnlCQitFOWxZT2pyWjV0WVBiY1R3QU9HS1MwY2ZsTVhuQXdIdEFFL3ErVnRwZllWSGtEeko0N0RlQ3lUUm5JN3dIV2ZwaUhjRGhML3Z4b05Benl3V1gzSkFnTEFIYVlad0V3ZEFFNGZBWlltQUZXSkx5RHllaHQxUHJwL3F0dkN1eTVFbFhvRk5mMnU0QUxGOVhYSDk4QWMxTW1IVmdpTHlob2NNMjZXb0hGd1hwVkgxNENTOC9URjZDcjV2THdRNUJ6eTdyYU9MajZDRGgwQ2hnNHJ0TEljMmJyK1FadGF5ZnJpbWR1QWw5WGdIMkRxZ3Z5bkdVeTIreWQvUWx3ZmxzVmE3QnhrdkF2c1Y4S3Qzd3N0bFpzQ2labVlzOWxJLy9lWGNDeEVkVk9NVDIvTWs3V0ZjdWxaZ0lXNlBnRTBMYy9lWTFiQXB1ME9tbHM0a3V3QlVldDl0MC9ZT3pNYlBmVnlmUnFKZEFXREZvekc2ZHJGVVRuY3ByWmd0VTRsYTREOURpell2bC85YVpLY3B3NEQ2ei9OdHFqa1pQRER5aVNOejI1MWN5UkVxakFrMnp4bVRvaVRZMVJKei9JNmJONlVVN2V6TmpCSWxBY0EvSjltMjV2WjlYRllHZXhTOEtrYXAxY3QvejdGN3YyU3J6b01LQW9JbkJUQ0lpNEkyZkVidkhXM2srMCtPdSs5TkZyNzRyWWE4QzdJVzlqbFUrRGNRbGtxY04wQWxFYUliL1E0cTUxTjJTL3dpZ1JlQStNRThZTGlONmw2RFZxRytNaTZ0SzJYeVk0SGhSSkpNY3BnYWtmRk81dWVta0RyWXZjQS9OVDFHclZMS0RPK1ErZEN4aEFTcVNwblFBQUFBQkpSVTVFcmtKZ2dnPT0iLz48L2RlZnM+PC9zdmc+"
    }
    ,
    96043: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => i
        });
        var a = n(20641)
          , l = n(90033)
          , r = {
            class: "sex-select"
        };
        const o = (0,
        a.pM)({
            __name: "index",
            props: {
                modelValue: {
                    default: ""
                }
            },
            emits: ["update:modelValue"],
            setup: function(e, t) {
                var n = t.emit
                  , o = e
                  , i = n;
                return function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("ul", r, [(0,
                    a.Lk)("li", null, [(0,
                    a.Lk)("span", {
                        class: (0,
                        l.C4)(["male", {
                            selected: "M" === o.modelValue
                        }]),
                        onClick: t[0] || (t[0] = function(e) {
                            return i("update:modelValue", "M")
                        }
                        )
                    }, " 男生 ", 2)]), (0,
                    a.Lk)("li", null, [(0,
                    a.Lk)("span", {
                        class: (0,
                        l.C4)(["female", {
                            selected: "F" === o.modelValue
                        }]),
                        onClick: t[1] || (t[1] = function(e) {
                            return i("update:modelValue", "F")
                        }
                        )
                    }, " 女生 ", 2)])])
                }
            }
        })
          , i = (0,
        n(66262).A)(o, [["__scopeId", "data-v-3718f387"]])
    }
    ,
    96263: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => c
        });
        var a = n(20641)
          , l = n(53751)
          , r = n(90033)
          , o = n(50953)
          , i = n(39510);
        const u = (0,
        a.pM)({
            __name: "index",
            props: {
                active: {
                    type: Boolean
                },
                full: {
                    type: Boolean
                },
                portrait: {
                    type: Boolean
                }
            },
            setup: function(e) {
                var t = function() {
                    u.value = !1,
                    (0,
                    i.jD)()
                }
                  , n = e
                  , u = (0,
                o.KR)(!1);
                function c() {
                    u.value = !0
                }
                function s() {
                    u.value = !1
                }
                return function(e, d) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.Wv)(l.eB, {
                        name: "expand",
                        onAfterEnter: c,
                        onBeforeLeave: s
                    }, {
                        default: (0,
                        a.k6)((function() {
                            return [n.active ? (0,
                            a.bo)(((0,
                            a.uX)(),
                            (0,
                            a.CE)("div", {
                                key: 0,
                                class: (0,
                                r.C4)(["panel flex", {
                                    full: n.full,
                                    port: n.portrait
                                }])
                            }, [d[1] || (d[1] = (0,
                            a.Lk)("div", {
                                id: "__living_panel"
                            }, null, -1)), (0,
                            a.bo)((0,
                            a.Lk)("div", {
                                class: "close flex",
                                onClick: t
                            }, d[0] || (d[0] = [(0,
                            a.Lk)("img", {
                                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjcyNzE3IDAuMjY5OTQyQzkuMzY0MjggLTAuMDkyOTUxMiA4Ljc3NTkxIC0wLjA5Mjk1MDcgOC40MTMwMiAwLjI2OTk0Mkw0Ljk5ODY0IDMuNjg0MzJMMS41ODk2OSAwLjI3NTM3MUMxLjIyNjggLTAuMDg3NTIxNCAwLjYzODQzMSAtMC4wODc1MjE0IDAuMjc1NTM5IDAuMjc1MzcxQy0wLjA4NzM1NCAwLjYzODI2NCAtMC4wODczNTQyIDEuMjI2NjMgMC4yNzU1MzkgMS41ODk1MkwzLjY4NDQ5IDQuOTk4NDdMMC4yNzAyMTYgOC40MTI3NUMtMC4wOTI2NzYzIDguNzc1NjQgLTAuMDkyNjc2MyA5LjM2NCAwLjI3MDIxNiA5LjcyNjlDMC42MzMxMDkgMTAuMDg5OCAxLjIyMTQ4IDEwLjA4OTggMS41ODQzNyA5LjcyNjlMNC45OTg2NCA2LjMxMjYyTDguNDA3NDMgOS43MjE0MkM4Ljc3MDMzIDEwLjA4NDMgOS4zNTg2OSAxMC4wODQzIDkuNzIxNTggOS43MjE0MkMxMC4wODQ1IDkuMzU4NTIgMTAuMDg0NSA4Ljc3MDE2IDkuNzIxNTkgOC40MDcyN0w2LjMxMjc5IDQuOTk4NDdMOS43MjcxNyAxLjU4NDA5QzEwLjA5MDEgMS4yMjEyIDEwLjA5MDEgMC42MzI4MzQgOS43MjcxNyAwLjI2OTk0MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
                                alt: ""
                            }, null, -1)]), 512), [[l.aG, u.value]])], 2)), [[l.aG, (0,
                            o.R1)(i.G_)]]) : (0,
                            a.Q3)("", !0)]
                        }
                        )),
                        _: 1
                    })
                }
            }
        })
          , c = (0,
        n(66262).A)(u, [["__scopeId", "data-v-2dc06916"]])
    }
    ,
    97189: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => W
        });
        var a = n(10467)
          , l = n(62193)
          , r = n.n(l)
          , o = (n(52675),
        n(89463),
        n(62010),
        n(54756))
          , i = n.n(o)
          , u = n(20641)
          , c = n(90033)
          , s = n(50953)
          , d = n(40303)
          , f = n(16265)
          , v = n(34905)
          , p = n(12947)
          , m = n(72708)
          , h = n(57142)
          , g = n(20305)
          , b = n(62535)
          , k = {
            key: 0,
            class: "loading"
        }
          , y = {
            key: 1,
            class: "info"
        }
          , M = {
            class: "flex items-center"
        }
          , A = {
            class: "name"
        }
          , L = {
            key: 2,
            class: "info"
        }
          , E = {
            class: "detail"
        }
          , w = ["href"]
          , C = ["src"]
          , R = {
            class: "intro"
        }
          , I = ["href"]
          , S = {
            class: "name"
        }
          , x = {
            key: 0,
            class: "p"
        }
          , T = {
            class: "line"
        }
          , _ = {
            class: "other"
        }
          , N = {
            class: "cc"
        }
          , O = {
            class: "desc"
        }
          , V = {
            class: "bottom"
        };
        const j = (0,
        u.pM)({
            __name: "UserCard",
            setup: function(e) {
                var t = (0,
                s.KR)({})
                  , n = (0,
                s.KR)(0)
                  , l = (0,
                s.KR)(!1)
                  , o = (0,
                s.KR)(!1)
                  , j = (0,
                s.KR)(!1)
                  , W = (0,
                u.WQ)(h.qq)
                  , B = (0,
                f.Pj)(g.Z);
                function F() {
                    l.value = !1
                }
                function D() {
                    (0,
                    m.UY)("audience", {
                        authorInfo: t.value,
                        liveStreamIdInfo: W.value.id
                    })
                }
                function U() {
                    return G.apply(this, arguments)
                }
                function G() {
                    return (G = (0,
                    a.A)(i().mark((function e() {
                        var n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    b.t)();
                                case 2:
                                    if (!e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 5,
                                    B.changeStatus(t.value.id, t.value.followStatus === p.m3.UnFollowed ? 1 : 2);
                                case 5:
                                    n = e.sent,
                                    t.value.followStatus = n;
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                return (0,
                u.EW)((function() {
                    return "U" === t.value.sex ? "TA" : "M" === t.value.sex ? "他" : "她"
                }
                )),
                (0,
                f.iX)(d.$7, function() {
                    var e = (0,
                    a.A)(i().mark((function e(a, r, u) {
                        var c;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (l.value = !0,
                                    n.value = r,
                                    o.value = !0,
                                    "OUTSIDE" !== a) {
                                        e.next = 11;
                                        break
                                    }
                                    return o.value = !1,
                                    j.value = !0,
                                    console.log(u),
                                    t.value = {
                                        name: u
                                    },
                                    e.abrupt("return");
                                case 11:
                                    return j.value = !1,
                                    e.next = 14,
                                    (0,
                                    v._I)(a);
                                case 14:
                                    c = e.sent.data.userInfo,
                                    t.value = c,
                                    o.value = !1,
                                    t.value.id || (l.value = !1);
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }()),
                function(e, a) {
                    var i, d, f;
                    return l.value ? ((0,
                    u.uX)(),
                    (0,
                    u.CE)("div", {
                        key: 0,
                        class: "tooltip",
                        style: (0,
                        c.Tr)({
                            top: "".concat(n.value, "px")
                        })
                    }, [o.value ? ((0,
                    u.uX)(),
                    (0,
                    u.CE)("div", k, [(0,
                    u.Lk)("span", {
                        class: "quit",
                        onClick: F
                    })])) : j.value ? ((0,
                    u.uX)(),
                    (0,
                    u.CE)("div", y, [(0,
                    u.Lk)("div", M, [a[0] || (a[0] = (0,
                    u.Lk)("div", {
                        class: "default"
                    }, null, -1)), (0,
                    u.Lk)("div", A, (0,
                    c.v_)(t.value.name), 1)]), a[1] || (a[1] = (0,
                    u.Lk)("p", {
                        class: "mt-12 fs-12 c-fff-8"
                    }, "该用户来自于外站", -1)), (0,
                    u.Lk)("span", {
                        class: "quit",
                        onClick: F
                    })])) : ((0,
                    u.uX)(),
                    (0,
                    u.CE)("div", L, [(0,
                    u.Lk)("div", E, [(0,
                    u.Lk)("a", {
                        href: "/profile/".concat(t.value.id),
                        target: "_blank"
                    }, [(0,
                    u.Lk)("img", {
                        class: "avatar",
                        src: t.value.avatar,
                        alt: ""
                    }, null, 8, C)], 8, w), (0,
                    u.Lk)("div", R, [(0,
                    u.Lk)("a", {
                        href: "/profile/".concat(t.value.id),
                        target: "_blank"
                    }, [(0,
                    u.Lk)("div", S, (0,
                    c.v_)(t.value.name), 1)], 8, I), (0,
                    s.R1)(r())(null === (i = t.value.counts) || void 0 === i ? void 0 : i.fans) ? (0,
                    u.Q3)("", !0) : ((0,
                    u.uX)(),
                    (0,
                    u.CE)("div", x, [(0,
                    u.Lk)("span", T, (0,
                    c.v_)((null === (d = t.value.counts) || void 0 === d ? void 0 : d.fans) || 0) + " 粉丝  ", 1), (0,
                    u.Lk)("span", null, "  " + (0,
                    c.v_)((null === (f = t.value.counts) || void 0 === f ? void 0 : f.follow) || 0) + "关注   ", 1)]))])]), (0,
                    u.Lk)("div", _, ["U" !== t.value.sex ? ((0,
                    u.uX)(),
                    (0,
                    u.CE)("span", {
                        key: 0,
                        class: (0,
                        c.C4)(["sex", {
                            male: "M" === t.value.sex,
                            female: "F" === t.value.sex
                        }])
                    }, null, 2)) : (0,
                    u.Q3)("", !0), (0,
                    u.Lk)("p", N, (0,
                    c.v_)(t.value.constellation || "未知星座") + "  " + (0,
                    c.v_)(t.value.cityName || "未知地区"), 1)]), (0,
                    u.Lk)("div", O, (0,
                    c.v_)(t.value.description || "无签名"), 1), (0,
                    u.Lk)("div", V, [(0,
                    u.Lk)("div", {
                        class: (0,
                        c.C4)(["button", {
                            isFollowing: t.value.followStatus !== (0,
                            s.R1)(p.m3).UnFollowed
                        }]),
                        onClick: U
                    }, (0,
                    c.v_)(t.value.followStatus === (0,
                    s.R1)(p.m3).UnFollowed ? "关注" : "已关注"), 3), (0,
                    u.Lk)("div", {
                        class: "button",
                        onClick: D
                    }, "举报")]), (0,
                    u.Lk)("span", {
                        class: "quit",
                        onClick: F
                    })]))], 4)) : (0,
                    u.Q3)("", !0)
                }
            }
        })
          , W = (0,
        n(66262).A)(j, [["__scopeId", "data-v-33792877"]])
    }
    ,
    97500: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => c
        });
        var a = n(20641)
          , l = n(90033)
          , r = n(50953)
          , o = n(11722)
          , i = {
            class: "left"
        };
        const u = (0,
        a.pM)({
            __name: "index",
            props: {
                full: {
                    type: Boolean
                },
                portrait: {
                    type: Boolean
                }
            },
            setup: function(e) {
                var t = e;
                return function(e, n) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("div", {
                        class: (0,
                        l.C4)(["top justify-between flex items-center", {
                            full: t.full,
                            hide: (0,
                            r.R1)(o.E6) && t.full,
                            port: t.portrait
                        }])
                    }, [(0,
                    a.Lk)("div", i, [(0,
                    a.RG)(e.$slots, "author")]), n[0] || (n[0] = (0,
                    a.Lk)("div", {
                        class: "right-part flex items-center"
                    }, null, -1))], 2)
                }
            }
        })
          , c = (0,
        n(66262).A)(u, [["__scopeId", "data-v-7a6dda9d"]])
    }
    ,
    99541: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => g
        }),
        n(52675),
        n(51629),
        n(67945),
        n(84185),
        n(83851),
        n(81278),
        n(79432),
        n(23500);
        var a = n(64467)
          , l = (n(2008),
        n(62010),
        n(26099),
        n(20641))
          , r = n(90033)
          , o = n(50953)
          , i = n(16265)
          , u = n(222)
          , c = (n(89463),
        Symbol("datalist"),
        Symbol("input"));
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    a.A)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var f = {
            class: "input"
        }
          , v = {
            key: 0,
            class: "input-prepend"
        }
          , p = ["type", "readonly", "disabled", "placeholder", "value", "maxlength", "minlength"]
          , m = {
            key: 1,
            class: "input-append"
        };
        const h = (0,
        l.pM)(d(d({}, {
            name: "p-input"
        }), {}, {
            props: {
                modelValue: {
                    default: ""
                },
                type: {
                    default: "text"
                },
                radius: {
                    type: Boolean,
                    default: !1
                },
                maxlength: {
                    default: void 0
                },
                minlength: {
                    default: 0
                },
                placeholder: {
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                readonly: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["blur", "focus", "change", "keydown", "keyup", "update:modelValue", "compositionstart", "compositionupdate", "compositionend"],
            setup: function(e, t) {
                var n = t.emit
                  , a = e
                  , s = n
                  , d = (0,
                l.Ht)()
                  , h = (0,
                o.KR)(a.modelValue)
                  , g = (0,
                o.KR)(!1)
                  , b = (0,
                o.KR)(!1)
                  , k = (0,
                o.KR)(null)
                  , y = (0,
                o.KR)(!1)
                  , M = d.prepend ? d.prepend() : null
                  , A = d.append ? d.append() : null
                  , L = (0,
                o.KR)(null);
                function E(e) {
                    b.value || (I(e),
                    s("update:modelValue", e))
                }
                function w(e, t, n) {
                    I(t),
                    s(e, n)
                }
                function C() {
                    g.value = !1,
                    s("blur", h.value)
                }
                function R() {
                    g.value = !0,
                    y.value = !0,
                    s("focus", h.value)
                }
                function I(e) {
                    h.value = e
                }
                function S(e) {
                    s("compositionstart", e),
                    b.value = !0
                }
                function x(e) {
                    var t;
                    s("compositionupdate", e);
                    var n = null === (t = e.target) || void 0 === t ? void 0 : t.value
                      , a = n[n.length - 1] || "";
                    b.value = !!a
                }
                function T(e) {
                    s("compositionend", e),
                    b.value && (b.value = !1,
                    E(e.target.value))
                }
                function _(e) {
                    e && (0,
                    u.kp)(e.target, k.value) || (y.value = !1)
                }
                return function() {
                    if (d.default) {
                        var e = d.default().filter((function(e) {
                            return "datalist" === e.type.name
                        }
                        ));
                        e.length > 0 && (L.value = e[0],
                        (0,
                        i.ML)("click", _, !1))
                    }
                }(),
                (0,
                l.wB)((function() {
                    return a.modelValue
                }
                ), (function(e) {
                    I(e)
                }
                )),
                (0,
                l.xo)((function() {
                    _(),
                    L.value = null
                }
                )),
                (0,
                l.Gt)(c, {
                    currentValue: h,
                    setCurrentValue: I,
                    isInInputDom: y,
                    hideDataList: _,
                    inputRef: k
                }),
                function(e, t) {
                    return (0,
                    l.uX)(),
                    (0,
                    l.CE)("div", {
                        ref_key: "inputRef",
                        ref: k,
                        class: (0,
                        r.C4)(["input-container", {
                            focus: g.value,
                            disabled: !!a.disabled,
                            readonly: !!a.readonly,
                            radius: a.radius
                        }])
                    }, [(0,
                    l.Lk)("div", f, [(0,
                    o.R1)(M) && (0,
                    o.R1)(M).length ? ((0,
                    l.uX)(),
                    (0,
                    l.CE)("div", v, [(0,
                    l.RG)(e.$slots, "prepend")])) : (0,
                    l.Q3)("", !0), (0,
                    l.Lk)("input", {
                        class: "input-text",
                        type: a.type,
                        readonly: a.readonly,
                        disabled: a.disabled,
                        autocomplete: "off",
                        placeholder: a.placeholder,
                        value: h.value,
                        maxlength: a.maxlength,
                        minlength: a.minlength,
                        onInput: t[0] || (t[0] = function(e) {
                            return E(e.target.value)
                        }
                        ),
                        onChange: t[1] || (t[1] = function(e) {
                            return w("change", e.target.value)
                        }
                        ),
                        onKeydown: t[2] || (t[2] = function(e) {
                            return w("keydown", e.target.value, e)
                        }
                        ),
                        onKeyup: t[3] || (t[3] = function(e) {
                            return w("keyup", e.target.value)
                        }
                        ),
                        onFocus: R,
                        onBlur: C,
                        onCompositionstart: S,
                        onCompositionupdate: x,
                        onCompositionend: T
                    }, null, 40, p), (0,
                    o.R1)(A) && (0,
                    o.R1)(A).length ? ((0,
                    l.uX)(),
                    (0,
                    l.CE)("div", m, [(0,
                    l.RG)(e.$slots, "append")])) : (0,
                    l.Q3)("", !0)]), L.value ? (0,
                    l.RG)(e.$slots, "default", {
                        key: 0
                    }) : (0,
                    l.Q3)("", !0)], 2)
                }
            }
        }))
          , g = (0,
        n(66262).A)(h, [["__scopeId", "data-v-03cff043"]])
    }
    ,
    99567: (e, t, n) => {
        "use strict";
        n.d(t, {
            A: () => o
        }),
        n(2008),
        n(26099);
        var a = n(20641)
          , l = n(50953);
        const r = (0,
        a.pM)({
            __name: "index",
            props: {
                src: {}
            },
            setup: function(e) {
                var t = e
                  , n = (0,
                l.KR)(null)
                  , r = (0,
                l.KR)(null)
                  , o = (0,
                l.KR)(!1);
                function i() {
                    var e = new Image;
                    e.src = t.src,
                    e.onload = function() {
                        if (n.value) {
                            var t = n.value.getContext("2d");
                            t.filter = "blur(30px)";
                            var a = n.value.clientWidth
                              , l = n.value.clientHeight;
                            t.drawImage(e, -15, -15, a + 30, l + 30)
                        }
                    }
                }
                return (0,
                a.wB)((function() {
                    return t.src
                }
                ), (function() {
                    o.value && i()
                }
                )),
                (0,
                a.sV)((function() {
                    r.value = new IntersectionObserver((function(e) {
                        e && e.length && e[0].intersectionRatio > 0 && (o.value || (i(),
                        o.value = !0))
                    }
                    ),{
                        threshold: [0, 1]
                    }),
                    r.value.observe(n.value)
                }
                )),
                (0,
                a.hi)((function() {
                    r.value && r.value.disconnect()
                }
                )),
                function(e, t) {
                    return (0,
                    a.uX)(),
                    (0,
                    a.CE)("canvas", {
                        ref_key: "canvas",
                        ref: n,
                        class: "blur-canvas"
                    }, null, 512)
                }
            }
        })
          , o = (0,
        n(66262).A)(r, [["__scopeId", "data-v-577101e4"]])
    }
}]);
