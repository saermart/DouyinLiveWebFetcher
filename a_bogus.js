function get_ab(dpf, ua) {
    function enc_sum(n_str) {
        function ir(t) {
            return ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
                ir(t)
        }
        function ur(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0, "value" in n && (n.writable = !0),
                    Object.defineProperty(t, sr(n.key), n)
            }
        }
        function sr(t) {
            var r = function (t, r) {
                if ("object" != ir(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, r || "default");
                    if ("object" != ir(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(t)
            }(t, "string");
            return "symbol" == ir(r) ? r : r + ""
        }
        var gr = function () {
            function t() {
                if (function (t, r) {
                    if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                }(this, t), !(this instanceof t)) return new t;
                this.reg = new Array(8),
                    this.chunk = [],
                    this.size = 0,
                    this.reset()
            }
            return function (t, r, e) {
                r && ur(t.prototype, r),
                    e && ur(t, e),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    })
            }(t, [{
                key: "reset",
                value: function () {
                    this.reg[0] = 1937774191,
                        this.reg[1] = 1226093241,
                        this.reg[2] = 388252375,
                        this.reg[3] = 3666478592,
                        this.reg[4] = 2842636476,
                        this.reg[5] = 372324522,
                        this.reg[6] = 3817729613,
                        this.reg[7] = 2969243214,
                        this.chunk = [],
                        this.size = 0
                }
            }, {
                key: "write",
                value: function (t) {
                    var r = "string" == typeof t ? function (t) {
                        var r = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, (function (t, r) {
                            return String.fromCharCode("0x" + r)
                        })),
                            e = new Array(r.length);
                        return Array.prototype.forEach.call(r, (function (t, r) {
                            e[r] = t.charCodeAt(0)
                        })),
                            e
                    }(t) : t;
                    this.size += r.length;
                    var e = 64 - this.chunk.length;
                    if (r.length < e) this.chunk = this.chunk.concat(r);
                    else
                        for (this.chunk = this.chunk.concat(r.slice(0, e)); this.chunk.length >= 64;) this._compress(this.chunk),
                            e < r.length ? this.chunk = r.slice(e, Math.min(e + 64, r.length)) : this.chunk = [],
                            e += 64
                }
            }, {
                key: "sum",
                value: function (t, r) {
                    t && (this.reset(), this.write(t)),
                        this._fill();
                    for (var e = 0; e < this.chunk.length; e += 64) this._compress(this.chunk.slice(e, e + 64));
                    var n, o, i, u = null;
                    if ("hex" == r) {
                        u = "";
                        for (e = 0; e < 8; e++) u += (n = this.reg[e].toString(16), o = 8, i = "0", n.length >= o ? n : i.repeat(o - n.length) + n)
                    } else
                        for (u = new Array(32), e = 0; e < 8; e++) {
                            var s = this.reg[e];
                            u[4 * e + 3] = (255 & s) >>> 0,
                                s >>>= 8,
                                u[4 * e + 2] = (255 & s) >>> 0,
                                s >>>= 8,
                                u[4 * e + 1] = (255 & s) >>> 0,
                                s >>>= 8,
                                u[4 * e] = (255 & s) >>> 0
                        }
                    return this.reset(),
                        u
                }
            }, {
                key: "_compress",
                value: function (t) {
                    if (t < 64) console.error("compress error: not enough data");
                    else {
                        for (var r = function (t) {
                            for (var r = new Array(132), e = 0; e < 16; e++) r[e] = t[4 * e] << 24,
                                r[e] |= t[4 * e + 1] << 16,
                                r[e] |= t[4 * e + 2] << 8,
                                r[e] |= t[4 * e + 3],
                                r[e] >>>= 0;
                            for (var n = 16; n < 68; n++) {
                                var o = r[n - 16] ^ r[n - 9] ^ dr(r[n - 3], 15);
                                o = o ^ dr(o, 15) ^ dr(o, 23),
                                    r[n] = (o ^ dr(r[n - 13], 7) ^ r[n - 6]) >>> 0
                            }
                            for (n = 0; n < 64; n++) r[n + 68] = (r[n] ^ r[n + 4]) >>> 0;
                            return r
                        }(t), e = this.reg.slice(0), n = 0; n < 64; n++) {
                            var o = dr(e[0], 12) + e[4] + dr(yr(n), n),
                                i = ((o = dr(o = (4294967295 & o) >>> 0, 7)) ^ dr(e[0], 12)) >>> 0,
                                u = br(n, e[0], e[1], e[2]);
                            u = (4294967295 & (u = u + e[3] + i + r[n + 68])) >>> 0;
                            var s = mr(n, e[4], e[5], e[6]);
                            s = (4294967295 & (s = s + e[7] + o + r[n])) >>> 0,
                                e[3] = e[2],
                                e[2] = dr(e[1], 9),
                                e[1] = e[0],
                                e[0] = u,
                                e[7] = e[6],
                                e[6] = dr(e[5], 19),
                                e[5] = e[4],
                                e[4] = (s ^ dr(s, 9) ^ dr(s, 17)) >>> 0
                        }
                        for (var c = 0; c < 8; c++) this.reg[c] = (this.reg[c] ^ e[c]) >>> 0
                    }
                }
            }, {
                key: "_fill",
                value: function () {
                    var t = 8 * this.size,
                        r = this.chunk.push(128) % 64;
                    for (64 - r < 8 && (r -= 64); r < 56; r++) this.chunk.push(0);
                    for (var e = 0; e < 4; e++) {
                        var n = Math.floor(t / 4294967296);
                        this.chunk.push(n >>> 8 * (3 - e) & 255)
                    }
                    for (e = 0; e < 4; e++) this.chunk.push(t >>> 8 * (3 - e) & 255)
                }
            }]),
                t
        }();
        function dr(t, r) {
            return (t << (r %= 32) | t >>> 32 - r) >>> 0
        }
        function yr(t) {
            return 0 <= t && t < 16 ? 2043430169 : 16 <= t && t < 64 ? 2055708042 : void console.error("invalid j for constant Tj")
        }
        function br(t, r, e, n) {
            return 0 <= t && t < 16 ? (r ^ e ^ n) >>> 0 : 16 <= t && t < 64 ? (r & e | r & n | e & n) >>> 0 : (console.error("invalid j for bool function FF"), 0)
        }
        function mr(t, r, e, n) {
            return 0 <= t && t < 16 ? (r ^ e ^ n) >>> 0 : 16 <= t && t < 64 ? (r & e | ~r & n) >>> 0 : (console.error("invalid j for bool function GG"), 0)
        }
        enc_ = new gr;
        return enc_.sum(n_str);
    }
    function generate_lm_g_EP(ua_n = ua) {
        // function get_sz256f_2() {
        //     var r = [], k = 0, y = [0, 1, 0];
        //     for (var i = 255; i >= 0; i--) {
        //         r.push(i);
        //     }
        //     for (var i = 0; i < r.length; i++) {
        //         var a = r[i];
        //         k = (k * a + k + y[i % 3]) % 256;
        //         var b = r[k];
        //         r[i] = b, r[k] = a;
        //     }
        //     return r;
        // }
        var sz256f_2 = [233, 5, 1, 249, 162, 140, 57, 143, 19, 203, 254, 236, 99, 248, 93, 213, 79, 149, 216, 50, 145, 123, 240, 92, 23, 113, 130, 53, 235, 220, 201, 136, 223, 155, 190, 242, 243, 42, 52, 214, 151, 232, 97, 187, 163, 222, 30, 78, 47, 71, 49, 170, 247, 196, 25, 156, 183, 182, 217, 180, 147, 124, 208, 69, 215, 200, 161, 154, 91, 60, 133, 224, 119, 164, 221, 45, 98, 40, 186, 120, 51, 167, 38, 90, 194, 212, 129, 56, 87, 195, 144, 44, 75, 84, 81, 13, 197, 245, 36, 250, 115, 100, 105, 252, 206, 103, 112, 202, 114, 138, 192, 21, 116, 173, 181, 29, 82, 125, 141, 16, 211, 131, 225, 118, 31, 101, 77, 146, 135, 150, 62, 66, 67, 176, 0, 41, 46, 59, 107, 178, 43, 26, 189, 128, 8, 207, 166, 110, 3, 229, 85, 54, 63, 11, 32, 4, 234, 142, 72, 58, 33, 231, 12, 230, 102, 86, 70, 159, 226, 65, 237, 34, 244, 76, 132, 122, 111, 95, 179, 152, 175, 18, 177, 6, 126, 193, 219, 74, 134, 2, 61, 251, 191, 168, 209, 241, 137, 165, 88, 238, 160, 174, 153, 157, 199, 48, 22, 64, 246, 7, 139, 55, 27, 188, 148, 204, 127, 171, 89, 37, 172, 205, 121, 20, 28, 17, 169, 15, 227, 117, 80, 218, 198, 10, 106, 9, 39, 210, 104, 83, 109, 24, 108, 228, 184, 96, 185, 158, 14, 255, 239, 68, 94, 35, 73, 253];
        var k = 0, s = '';
        for (var i = 0; i < ua_n.length; i++) {
            var i1 = (i + 1) % 256;
            var a = sz256f_2[i1];
            k = (k + a) % 256;
            var c = sz256f_2[k];
            sz256f_2[i1] = c;
            sz256f_2[k] = a;
            s += String.fromCharCode(ua_n.charCodeAt(i) ^ sz256f_2[(a + c) % 256]);
        }
        return s;
    }
    function get_str_chr_list(one_str) {
        var r = [];  // 当然也可以用map实现
        for (var i = 0; i < one_str.length; i++) {
            r.push(one_str.charCodeAt(i));
        }
        return r;
    }
    function generate_szenc_head8p1() {
        var z = Math.random() * 65535;
        var a = z & 255;
        var b = (z >> 8) & 255, d = [];
        d.push((a & 170) | 1);
        d.push((a & 85) | 0);
        d.push((b & 170) | 0);
        d.push((b & 85) | 0);
        return d;
    }
    function generate_szenc_head8p2() {
        var a = ((Math.random() * 240) >> 0) + 1;
        var b = ((Math.random() * 255) >> 0) & 77, c = [1, 4, 5, 7], d = [];
        for (var i = 0; i < c.length; i++) {
            b = b | (1 << c[i]);
        }
        d.push((a & 170) | 1);
        d.push((a & 85) | 0);
        d.push((b & 170) | 0);
        d.push((b & 85) | 0);
        return d;
    }
    function get_szenc_tail(sz96_n) {
        key_sz_6 = [145, 110, 66, 189, 44, 211]
        var a = [];
        for (var i = 0; i < 94; i += 3) {
            var b = sz96_n[i];
            var c = sz96_n[i + 1];
            var d = sz96_n[i + 2];
            var e = (Math.random() * 1000) & 255;
            a.push((e & key_sz_6[0]) | (b & key_sz_6[1]));
            a.push((e & key_sz_6[2]) | (c & key_sz_6[3]));
            a.push((e & key_sz_6[4]) | (d & key_sz_6[5]));
            a.push(((b & key_sz_6[0]) | (c & key_sz_6[2])) | (d & key_sz_6[4]));
        }
        return a;
    }
    function generate_lm_g_ab_head4() {
        var s = '';
        var a = (Math.random() * 65535) & 255, b = (Math.random() * 40) >> 0;
        s += String.fromCharCode((a & 170) | 1);
        s += String.fromCharCode((a & 85) | 2);
        s += String.fromCharCode((b & 170) | 80);
        s += String.fromCharCode((b & 85) | 2);
        return s;
    }
    function get_list_str(one_list) {
        var s = '';
        for (var i = 0; i < one_list.length; i++) {
            s += String.fromCharCode(one_list[i]);
        }
        return s;
    }
    function get_lm_g_ab(lm_g_lm_n) {
        // function get_sz256() {
        //     var raw = [];
        //     var z = 0;
        //     for (var i = 255; i >= 0; i--) {
        //         raw.push(i);
        //     }
        //     for (var i = 0; i < raw.length; i++) {
        //         z += 211;
        //         var a = z % 256;
        //         var b = raw[i];
        //         var c = raw[a];
        //         raw[a] = b;
        //         raw[i] = c;
        //         z = (raw[i + 1] * a) + a;
        //     }
        //     return raw;
        // }
        var fixed_sz256_n = [194, 249, 255, 165, 114, 67, 251, 187, 174, 231, 164, 237, 124, 235, 68, 83, 206, 79, 142, 167, 30, 77, 0, 93, 118, 29, 32, 161, 2, 171, 243, 179, 42, 170, 223, 119, 98, 222, 219, 57, 245, 135, 197, 13, 186, 202, 88, 184, 214, 12, 76, 185, 116, 74, 54, 53, 104, 208, 158, 163, 82, 173, 253, 240, 172, 63, 191, 207, 25, 15, 201, 203, 215, 236, 183, 233, 145, 127, 72, 6, 16, 10, 228, 35, 232, 159, 66, 168, 108, 71, 217, 75, 33, 155, 112, 128, 36, 24, 138, 50, 211, 23, 107, 14, 247, 137, 175, 242, 234, 157, 199, 49, 139, 85, 81, 17, 180, 86, 120, 78, 51, 205, 169, 148, 181, 3, 94, 106, 252, 220, 150, 47, 151, 84, 212, 18, 149, 182, 100, 123, 121, 156, 154, 152, 126, 204, 60, 133, 132, 248, 7, 91, 58, 59, 20, 97, 113, 117, 131, 46, 250, 224, 21, 73, 146, 31, 193, 69, 140, 125, 9, 39, 89, 5, 65, 141, 218, 80, 1, 70, 64, 166, 87, 189, 55, 147, 22, 26, 143, 61, 144, 99, 92, 44, 129, 130, 227, 103, 90, 192, 198, 244, 136, 101, 246, 153, 56, 38, 4, 178, 221, 162, 134, 37, 111, 28, 216, 96, 102, 210, 254, 196, 195, 230, 241, 62, 11, 122, 52, 40, 41, 229, 226, 225, 48, 45, 160, 105, 8, 115, 34, 43, 209, 95, 239, 190, 188, 109, 27, 19, 176, 213, 200, 238, 177, 110];
        // var fixed_sz256_n = get_sz256();
        var z = 0;
        var st = "";
        for (var i = 0; i < lm_g_lm_n.length; i++) {
            var a = (i + 1) % 256;
            var c = fixed_sz256_n[a];
            z = (z + c) % 256;
            var e = fixed_sz256_n[z];
            fixed_sz256_n[a] = e;
            fixed_sz256_n[z] = c;
            var g = (e + c) % 256;
            var h = lm_g_lm_n.charCodeAt(i);
            var j = fixed_sz256_n[g];
            var k = h ^ j;
            var l = String.fromCharCode(k);
            st += l;
        }
        return st;
    }
    function get_raw_ab(lm_get_ab_n, key_str = info_dic.s4) {
        var s = "", bw = 0;
        for (var i = 0; i < lm_get_ab_n.length; i += 3) {
            var cl = 16;
            var tcz = 0;
            var sof = 16515072;
            for (var j = i; j < i + 3; j++) {
                if (j < lm_get_ab_n.length) {
                    var tlcy = lm_get_ab_n.charCodeAt(j) & 255;
                    tcz = tcz | (tlcy << cl);
                    cl -= 8;
                } else {
                    bw += 1;
                }
            }
            for (var h = 18; h >= (6 * bw); h -= 6) {
                var tsz = tcz & sof;
                s += key_str[tsz >> h];
                sof = sof / 64;
            }
            s += '='.repeat(bw);
        }
        return s;
    }
    function get_random_number(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var info_dic = { "s0": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        "s1": "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=",
        "s2": "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=",
        "s3": "ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe",
        "s4": "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe" }
    var t1 = Date.now();
    var s = [];

    var t2 = Date.now() - 1 + get_random_number(1, 3);

    var EP = get_raw_ab(generate_lm_g_EP(ua), key_str = info_dic.s3), eEP = enc_sum(EP);

    s.push("env_fx_list", "dpf_ua_dic", 1, 0, 8, "dpf", "", "ua", 6241, 6383, "1.0.1.19-fix.01", "ink", 3, "0X21_dic");  // 固定即可

    var t3 = Date.now() + get_random_number(4, 15);
    var eedp = enc_sum(enc_sum(dpf + 'dhzx'));

    s.push(t3, "reg_dic", 1, 0, eedp, "eedh", EP, eEP, t2, [3, 82], 41, [1, 0, 1, 0, 1]);

    var t4 = Date.now() + get_random_number(100, 1000);

    s1 = ((t4 - 1721836800000) / 1000 / 60 / 60 / 24 / 14) >> 0, szenc_o95_tail41 = [49, 52, 52, 49, 124, 56, 51, 56, 124, 49, 52, 52, 49, 124, 57, 49, 51, 124, 49, 52, 52, 49, 124, 57, 49, 51, 124, 49, 52, 52, 49, 124, 57, 54, 49, 124, 87, 105, 110, 51, 50];

    s.push(s1, 6, (t3 - t1 + 3) & 255, t3 & 255, (t3 >> 8) & 255, (t3 >> 16) & 255, (t3 >> 24) & 255, (t3 / 256 / 256 / 256 / 256) & 255);

    var s2 = (t3 / 256 / 256 / 256 / 256 / 256) & 255;

    s.push(s2, (s2 % 256) & 255, (s2 / 256) & 255, [211, 2, 5, 1, 129], 129, 0, 211, 2, 5, 1, 0, 0, 0, 0, eedp[9], eedp[18], 3, eedp[3], 82, 177, 4, 44, eEP[11], eEP[21], 5, eEP[5], t2 & 255, (t2 >> 8) & 255, (t2 >> 16) & 255, (t2 >> 24) & 255, (t2 / 256 / 256 / 256 / 256) & 255, (t2 / 256 / 256 / 256 / 256 / 256) & 255, 3, 97, 24, 0, 0, 239, 24, 0, 0, "screec_dic", "screen_str", szenc_o95_tail41, 41, 41, 0);

    var s3 = ((t3 + 3) & 255) + ',', s4 = get_str_chr_list(s3);

    s.push(s3, s4, s4.length, s4.length & 255, (s4.length >> 8) & 255);

    szenc_head8_p1 = generate_szenc_head8p1(), szenc_head8_p2 = generate_szenc_head8p2(), szenc_head8 = szenc_head8_p1.concat(szenc_head8_p2), s5 = [], s6 = [24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 79, 80, 84, 85];
    for (var i = 0; i < s6.length; i++) {
        s5.push(s[s6[i]]);
    }
    s.push(szenc_head8);
    var s7 = szenc_head8.concat(s5);

    var s8 = s7[0];
    for (var i = 1; i < s7.length; i++) {
        s8 = s8 ^ s7[i];
    }
    s.push(s8);

    enc_s_i = [34, 44, 56, 61, 73, 29, 70, 45, 35, 49, 38, 66, 51, 68, 28, 48, 64, 47, 30, 71, 26, 55, 31, 69, 59, 40, 62, 63, 27, 72, 41, 74, 57, 52, 42, 39, 33, 67, 53, 43, 65, 46, 36, 24, 60, 32, 79, 80, 84, 85];
    szenc_o95_head50 = [];
    for (var i = 0; i < enc_s_i.length; i++) {
        szenc_o95_head50.push(s[enc_s_i[i]]);
    }
    szenc_o95 = [];
    szenc_o95 = szenc_o95.concat(szenc_o95_head50, szenc_o95_tail41, s4, [s8]);

    szenc_tail = get_szenc_tail(szenc_o95);
    szenc = szenc_head8.concat(szenc_tail);

    lm_get_ab_head4 = generate_lm_g_ab_head4();

    var lm_get_lm = get_list_str(szenc);
    var lm_get_ab_tail = get_lm_g_ab(lm_get_lm);
    var lm_get_ab = lm_get_ab_head4 + lm_get_ab_tail
    return  get_raw_ab(lm_get_ab);
}
