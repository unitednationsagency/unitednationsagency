/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, (function(e, t) {
                return n.call(e, t, e)
            }
            )))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, (function(e, t) {
                return (t + 1) % 2
            }
            )))
        },
        odd: function() {
            return this.pushStack(S.grep(this, (function(e, t) {
                return t % 2
            }
            )))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be((function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }
        ), {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        for ((f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length; o--; )
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le((function(o) {
                return o = +o,
                le((function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                }
                ))
            }
            ))
        }
        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce((function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }
            )),
            d.attributes = ce((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            d.getElementsByTagName = ce((function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce((function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }
            )),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce((function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }
            )),
            ce((function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            }
            ))),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce((function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }
            )),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                for (; l; ) {
                                    for (a = e; a = a[l]; )
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                for (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop(); )
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                a !== e)); )
                                    ;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }
                    )) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le((function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le((function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }
                    )) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }
                )),
                has: le((function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }
                )),
                contains: le((function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }
                )),
                lang: le((function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }
                )),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve((function() {
                    return [0]
                }
                )),
                last: ve((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: ve((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: ve((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: ve((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: ve((function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }
                )),
                gt: ve((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                }
                ))
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u]; )
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    for (; e = e[u]; )
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[u]; )
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le((function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v)
                    for (i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length; o--; )
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (y || d) {
                        if (y) {
                            for (i = [],
                            o = p.length; o--; )
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        for (o = p.length; o--; )
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            }
            ))
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be((function(e) {
                return e === i
            }
            ), a, !0), l = be((function(e) {
                return -1 < P(i, e)
            }
            ), a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r && !b.relative[e[n].type]; n++)
                            ;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (a = e,
            s = [],
            u = b.preFilter; a; ) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                for (t || (t = h(e)),
                n = t.length; n--; )
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E); s = v[a++]; )
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        for (a = 0; s = y[a++]; )
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--; )
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = G.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !b.relative[s = a.type]); )
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(D).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce((function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }
        )),
        ce((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || fe("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        d.attributes && ce((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || fe("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        ce((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || fe(R, (function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        )),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, (function(e, t) {
            return !!n.call(e, t, e) !== r
        }
        )) : n.nodeType ? S.grep(e, (function(e) {
            return e === n !== r
        }
        )) : "string" != typeof n ? S.grep(e, (function(e) {
            return -1 < i.call(n, e) !== r
        }
        )) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter((function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }
                )));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, (function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    }
    ));
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], (function(e, t) {
            n[t] = !0
        }
        )),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1)
                for (t = u.shift(); ++l < s.length; )
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1);
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, (function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    }
                    ))
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, (function(e, t) {
                    for (var n; -1 < (n = S.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= l && l--
                }
                )),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred((function(r) {
                        S.each(o, (function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]]((function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        i = null
                    }
                    )).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred((function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, (function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add((function() {
                    i = r
                }
                ), o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }
            )),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            for (; t--; )
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout((function() {
            throw e
        }
        ))
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e).catch((function(e) {
            S.readyException(e)
        }
        )),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--; )
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each((function() {
                Q.set(this, n)
            }
            )) : $(this, (function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) || void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each((function() {
                    Q.set(this, n, e)
                }
                ))
            }
            ), null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Q.remove(this, e)
            }
            ))
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, (function() {
                S.dequeue(e, t)
            }
            ), o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add((function() {
                    Y.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each((function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                S.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                ae(this) ? S(this).show() : S(this).hide()
            }
            ))
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n)
                for (c = 0; o = a[c++]; )
                    he.test(o.type || "") && n.push(o);
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each((function() {
            S.event.add(this, t, i, r, n)
        }
        ))
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length; l--; )
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--; )
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = S.event.handlers.call(this, u, l),
                t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }
    )),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }
    )),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each((function() {
                S.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each((function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            }
            ));
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    "input" === (l = (u = a[r]).nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, (function(e) {
                return void 0 === e ? S.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return Pe(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return Pe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return Pe(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return S.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return $(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, (function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }
            ), n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    }
    ));
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Ie = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(ne.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px",
                t.style.height = "1px",
                n.style.height = "9px",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = 3 < parseInt(r.height),
                re.removeChild(e)),
                a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = E.createElement("div").style
      , Ue = {};
    function Xe(e) {
        return S.cssProps[e] || Ue[e] || (e in ze ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--; )
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], (function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, (function() {
                        return Ze(e, u, n)
                    }
                    ))
            },
            set: function(e, t, n) {
                var r, i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Je(0, t, s)
            }
        }
    }
    )),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }
    )),
    S.fn.extend({
        css: function(e, t) {
            return $(this, (function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }
            ), e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
        S.fx.tick())
    }
    function ut() {
        return C.setTimeout((function() {
            tt = void 0
        }
        )),
        tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always((function() {
            delete u.elem
        }
        )), u = function() {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always((function() {
                p.always((function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            t)
                if (i = t[r],
                ot.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done((function() {
                    h.display = l
                }
                )),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always((function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                }
                ))),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done((function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    }
                    ))),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each((function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            }
            ))
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each((function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            }
            ))
        }
    }),
    S.each(["toggle", "show", "hide"], (function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }
    )),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }
    )),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0,
        st())
    }
    ,
    S.fx.stop = function() {
        nt = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, (function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        }
        ))
    }
    ,
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each((function() {
                S.removeAttr(this, e)
            }
            ))
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    }
    ));
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[S.propFix[e] || e]
            }
            ))
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        S.propFix[this.toLowerCase()] = this
    }
    )),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each((function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                }
                ));
            if ((e = mt(t)).length)
                for (; n = this[u++]; )
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each((function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                for (; n = this[u++]; )
                    if (i = yt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each((function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }
            )) : this.each((function() {
                var e, t, n, r;
                if (a)
                    for (t = 0,
                    n = S(this),
                    r = mt(i); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each((function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            }
            ))) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], (function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    y.focusin = "onfocusin"in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
      , wt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0; (o = p[i++]) && !e.isPropagationStopped(); )
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                S.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    }
    ));
    var Tt = C.location
      , Ct = {
        guid: Date.now()
    }
      , Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
        t
    }
    ;
    var St = /\[\]$/
      , kt = /\r?\n/g
      , At = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, (function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            }
            ));
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, (function() {
                i(this.name, this.value)
            }
            ));
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }
            )).map((function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }
            )).get()
        }
    });
    var jt = /%20/g
      , qt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Rt = {}
      , Mt = {}
      , It = "*/".concat("*")
      , Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], (function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }
            )),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n)
                            for (n = {}; t = Ht.exec(p); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Bt(Rt, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Ot.test(v.type),
            f = v.url.replace(qt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Lt, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout((function() {
                    T.abort("timeout")
                }
                ), v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], (function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }
    )),
    S.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }
    )),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each((function(e) {
                S(this).wrapInner(n.call(this, e))
            }
            )) : this.each((function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            }
            ))
        },
        wrap: function(t) {
            var n = m(t);
            return this.each((function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            }
            ))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                S(this).replaceWith(this.childNodes)
            }
            )),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var _t = {
        0: 200,
        1223: 204
    }
      , zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials"in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport((function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout((function() {
                            o && a()
                        }
                        ))
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }
    )),
    S.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    }
    )),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    S.ajaxTransport("script", (function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    }
    ));
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", (function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always((function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }
            )),
            "script"
    }
    )),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }
        )).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, (function(e) {
            return t === e.elem
        }
        )).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each((function(e) {
                    S.offset.setOffset(this, t, e)
                }
                ));
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                    e = e.offsetParent;
                return e || re
            }
            ))
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, (function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }
            ), t, e, arguments.length)
        }
    }
    )),
    S.each(["top", "left"], (function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, (function(e, t) {
            if (t)
                return t = Be(e, n),
                Me.test(t) ? S(e).position()[n] + "px" : t
        }
        ))
    }
    )),
    S.each({
        Height: "height",
        Width: "width"
    }, (function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, (function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, (function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }
                ), s, n ? e : void 0, n)
            }
        }
        ))
    }
    )),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }
    ));
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return S
    }
    ));
    var Yt = C.jQuery
      , Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt),
        e && C.jQuery === S && (C.jQuery = Yt),
        S
    }
    ,
    void 0 === e && (C.jQuery = C.$ = S),
    S
}
)),
function(e, t, n) {
    function r(e) {
        var t = _.className
          , n = Modernizr._config.classPrefix || "";
        if (w && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n),
        w ? _.className.baseVal = t : _.className = t)
    }
    function o() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function i(e, t) {
        return typeof e === t
    }
    function s(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                N(e, n) && s(n, e[n]);
        else {
            var o = (e = e.toLowerCase()).split(".")
              , i = Modernizr[o[0]];
            if (2 == o.length && (i = i[o[1]]),
            void 0 !== i)
                return Modernizr;
            t = "function" == typeof t ? t() : t,
            1 == o.length ? Modernizr[o[0]] = t : (!Modernizr[o[0]] || Modernizr[o[0]]instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
            Modernizr[o[0]][o[1]] = t),
            r([(t && 0 != t ? "" : "no-") + o.join("-")]),
            Modernizr._trigger(e, t)
        }
        return Modernizr
    }
    function u(e, n, r, i) {
        var a, s, u, f, c = "modernizr", d = o("div"), p = function() {
            var e = t.body;
            return e || ((e = o(w ? "svg" : "body")).fake = !0),
            e
        }();
        if (parseInt(r, 10))
            for (; r--; )
                (u = o("div")).id = i ? i[r] : c + (r + 1),
                d.appendChild(u);
        return (a = o("style")).type = "text/css",
        a.id = "s" + c,
        (p.fake ? p : d).appendChild(a),
        p.appendChild(d),
        a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)),
        d.id = c,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        f = _.style.overflow,
        _.style.overflow = "hidden",
        _.appendChild(p)),
        s = n(d, e),
        p.fake ? (p.parentNode.removeChild(p),
        _.style.overflow = f,
        _.offsetHeight) : d.parentNode.removeChild(d),
        !!s
    }
    function f(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function c(e) {
        return e.replace(/([a-z])-([a-z])/g, (function(e, t, n) {
            return t + n.toUpperCase()
        }
        )).replace(/^-/, "")
    }
    function d(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function m(t, n, r) {
        var o;
        if ("getComputedStyle"in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o)
                r && (o = o.getPropertyValue(r));
            else if (i) {
                i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }
    function h(e) {
        return e.replace(/([A-Z])/g, (function(e, t) {
            return "-" + t.toLowerCase()
        }
        )).replace(/^ms-/, "-ms-")
    }
    function v(t, r) {
        var o = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; o--; )
                if (e.CSS.supports(h(t[o]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var i = []; o--; )
                i.push("(" + h(t[o]) + ":" + r + ")");
            return u("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(e) {
                return "absolute" == m(e, null, "position")
            }
            ))
        }
        return n
    }
    function g(e, t, r, a) {
        function s() {
            u && (delete F.style,
            delete F.modElem)
        }
        if (a = !i(a, "undefined") && a,
        !i(r, "undefined")) {
            var l = v(e, r);
            if (!i(l, "undefined"))
                return l
        }
        for (var u, d, p, m, h, g = ["modernizr", "tspan", "samp"]; !F.style && g.length; )
            u = !0,
            F.modElem = o(g.shift()),
            F.style = F.modElem.style;
        for (p = e.length,
        d = 0; p > d; d++)
            if (m = e[d],
            h = F.style[m],
            f(m, "-") && (m = c(m)),
            F.style[m] !== n) {
                if (a || i(r, "undefined"))
                    return s(),
                    "pfx" != t || m;
                try {
                    F.style[m] = r
                } catch (y) {}
                if (F.style[m] != h)
                    return s(),
                    "pfx" != t || m
            }
        return s(),
        !1
    }
    function y(e, t, n, r, o) {
        var a = e.charAt(0).toUpperCase() + e.slice(1)
          , s = (e + " " + P.join(a + " ") + a).split(" ");
        return i(t, "string") || i(t, "undefined") ? g(s, t, r, o) : function(e, t, n) {
            var r;
            for (var o in e)
                if (e[o]in t)
                    return !1 === n ? e[o] : i(r = t[e[o]], "function") ? d(r, n || t) : r;
            return !1
        }(s = (e + " " + k.join(a + " ") + a).split(" "), t, n)
    }
    var S = []
      , C = []
      , b = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout((function() {
                t(n[e])
            }
            ), 0)
        },
        addTest: function(e, t, n) {
            C.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            C.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = b,
    Modernizr = new Modernizr;
    var N, _ = t.documentElement, w = "svg" === _.nodeName.toLowerCase(), x = function() {
        var r = !("onblur"in t.documentElement);
        return function(e, t) {
            var i;
            return !!e && (t && "string" != typeof t || (t = o(t || "div")),
            !(i = (e = "on" + e)in t) && r && (t.setAttribute || (t = o("div")),
            t.setAttribute(e, ""),
            i = "function" == typeof t[e],
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
            i)
        }
    }();
    b.hasEvent = x,
    function() {
        var e = {}.hasOwnProperty;
        N = i(e, "undefined") || i(e.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        }
        : function(t, n) {
            return e.call(t, n)
        }
    }(),
    b._l = {},
    b.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) && setTimeout((function() {
            Modernizr._trigger(e, Modernizr[e])
        }
        ), 0)
    }
    ,
    b._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout((function() {
                var e;
                for (e = 0; e < n.length; e++)
                    (0,
                    n[e])(t)
            }
            ), 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push((function() {
        b.addTest = s
    }
    )),
    w || function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = w.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function i(e) {
            var t = _[e[C]];
            return t || (t = {},
            b++,
            e[C] = b,
            _[b] = t),
            t
        }
        function a(e, n, r) {
            return n || (n = t),
            v ? n.createElement(e) : (r || (r = i(n)),
            !(o = r.cache[e] ? r.cache[e].cloneNode() : S.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)).canHaveChildren || E.test(e) || o.tagUrn ? o : r.frag.appendChild(o));
            var o
        }
        function l(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return w.shivMethods ? a(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, (function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }
            )) + ");return n}")(w, t.frag)
        }
        function u(e) {
            e || (e = t);
            var r = i(e);
            return !w.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            v || l(e, r),
            e
        }
        function f(e) {
            for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--; )
                t = n[o],
                i.test(t.nodeName) && a.push(t.applyElement(c(t)));
            return a
        }
        function c(e) {
            for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(N + ":" + e.nodeName); r--; )
                (t = n[r]).specified && o.setAttribute(t.nodeName, t.nodeValue);
            return o.style.cssText = e.style.cssText,
            o
        }
        function d(e) {
            for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + N + "\\:$2"; o--; )
                (t = n[o] = n[o].split("}"))[t.length - 1] = t[t.length - 1].replace(i, a),
                n[o] = t.join("}");
            return n.join("{")
        }
        function m(e) {
            function t() {
                clearTimeout(a._removeSheetTimer),
                r && r.removeNode(!0),
                r = null
            }
            var r, o, a = i(e), s = e.namespaces, l = e.parentWindow;
            return !T || e.printShived || (void 0 === s[N] && s.add(N),
            l.attachEvent("onbeforeprint", (function() {
                t();
                for (var i, a, s, l = e.styleSheets, u = [], c = l.length, p = Array(c); c--; )
                    p[c] = l[c];
                for (; s = p.pop(); )
                    if (!s.disabled && x.test(s.media)) {
                        try {
                            a = (i = s.imports).length
                        } catch (m) {
                            a = 0
                        }
                        for (c = 0; a > c; c++)
                            p.push(i[c]);
                        try {
                            u.push(s.cssText)
                        } catch (m) {}
                    }
                u = d(u.reverse().join("")),
                o = f(e),
                r = n(e, u)
            }
            )),
            l.attachEvent("onafterprint", (function() {
                (function(e) {
                    for (var t = e.length; t--; )
                        e[t].removeNode()
                }
                )(o),
                clearTimeout(a._removeSheetTimer),
                a._removeSheetTimer = setTimeout(t, 500)
            }
            )),
            e.printShived = !0),
            e
        }
        var h, v, y = e.html5 || {}, E = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, S = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, C = "_html5shiv", b = 0, _ = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                h = "hidden"in e,
                v = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (n) {
                h = !0,
                v = !0
            }
        }();
        var w = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== y.shivCSS,
            supportsUnknownElements: v,
            shivMethods: !1 !== y.shivMethods,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: function(e, n) {
                if (e || (e = t),
                v)
                    return e.createDocumentFragment();
                for (var o = (n = n || i(e)).frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++)
                    o.createElement(s[a]);
                return o
            },
            addElements: function(e, t) {
                var n = w.elements;
                "string" != typeof n && (n = n.join(" ")),
                "string" != typeof e && (e = e.join(" ")),
                w.elements = n + " " + e,
                u(t)
            }
        };
        e.html5 = w,
        u(t);
        var x = /^$|\b(?:all|print)\b/
          , N = "html5shiv"
          , T = !v && function() {
            var n = t.documentElement;
            return !(void 0 === t.namespaces || void 0 === t.parentWindow || void 0 === n.applyElement || void 0 === n.removeNode || void 0 === e.attachEvent)
        }();
        w.type += " print",
        w.shivPrint = m,
        m(t),
        "object" == typeof module && module.exports && (module.exports = w)
    }(void 0 !== e ? e : this, t);
    var T = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        }
        : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", (function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }
            )),
            n
        }
    }();
    b.mq = T;
    var j = (b.testStyles = u,
    "Moz O ms Webkit")
      , P = b._config.usePrefixes ? j.split(" ") : [];
    b._cssomPrefixes = P;
    b.atRule = function(t) {
        var r, o = prefixes.length, i = e.CSSRule;
        if (void 0 === i)
            return n;
        if (!t)
            return !1;
        if ((r = (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE")in i)
            return "@" + t;
        for (var a = 0; o > a; a++) {
            var s = prefixes[a];
            if (s.toUpperCase() + "_" + r in i)
                return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    }
    ;
    var k = b._config.usePrefixes ? j.toLowerCase().split(" ") : [];
    b._domPrefixes = k;
    var A = {
        elem: o("modernizr")
    };
    Modernizr._q.push((function() {
        delete A.elem
    }
    ));
    var F = {
        style: A.elem.style
    };
    Modernizr._q.unshift((function() {
        delete F.style
    }
    )),
    b.testAllProps = y,
    b.testAllProps = function(e, t, r) {
        return y(e, n, n, t, r)
    }
    ,
    b.testProp = function(e, t, r) {
        return g([e], n, t, r)
    }
    ,
    function() {
        var e, t, n, r, o, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [],
                (t = C[l]).name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (r = i(t.fn, "function") ? t.fn() : t.fn,
                o = 0; o < e.length; o++)
                    1 === (s = e[o].split(".")).length ? Modernizr[s[0]] = r : (!Modernizr[s[0]] || Modernizr[s[0]]instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                    Modernizr[s[0]][s[1]] = r),
                    S.push((r ? "" : "no-") + s.join("-"))
            }
    }(),
    r(S),
    delete b.addTest,
    delete b.addAsyncTest;
    for (var M = 0; M < Modernizr._q.length; M++)
        Modernizr._q[M]();
    e.Modernizr = Modernizr
}(window, document),
/*! jQuery UI - v1.12.1 - 2017-01-29
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}((function(t) {
    function s() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        t.extend(this._defaults, this.regional[""]),
        this.regional.en = t.extend(!0, {}, this.regional[""]),
        this.regional["en-US"] = t.extend(!0, {}, this.regional.en),
        this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, (function() {
            t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }
        )).on("mouseover", i, o)
    }
    function o() {
        t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }
    function a(e, i) {
        for (var s in t.extend(e, i),
        i)
            null == i[s] && (e[s] = i[s]);
        return e
    }
    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments),
            this._refresh(),
            e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {},
    t.ui.version = "1.12.1";
    var h = 0
      , l = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++)
                try {
                    (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
                } catch (a) {}
            e(i)
        }
    }(t.cleanData),
    t.widget = function(e, i, s) {
        var n, o, a, r = {}, h = e.split(".")[0], l = h + "-" + (e = e.split(".")[1]);
        return s || (s = i,
        i = t.Widget),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        t.expr[":"][l.toLowerCase()] = function(e) {
            return !!t.data(e, l)
        }
        ,
        t[h] = t[h] || {},
        n = t[h][e],
        o = t[h][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new o(t,e)
        }
        ,
        t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }),
        (a = new i).options = t.widget.extend({}, a.options),
        t.each(s, (function(e, s) {
            return t.isFunction(s) ? void (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }
                function n(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t,
                    this._superApply = n,
                    e = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    e
                }
            }()) : void (r[e] = s)
        }
        )),
        o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n && a.widgetEventPrefix || e
        }, r, {
            constructor: o,
            namespace: h,
            widgetName: e,
            widgetFullName: l
        }),
        n ? (t.each(n._childConstructors, (function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }
        )),
        delete n._childConstructors) : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
    }
    ,
    t.widget.extend = function(e) {
        for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
            for (i in n[o])
                s = n[o][i],
                n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
        return e
    }
    ,
    t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(n) {
            var o = "string" == typeof n
              , a = l.call(arguments, 1)
              , r = this;
            return o ? this.length || "instance" !== n ? this.each((function() {
                var i, o = t.data(this, s);
                return "instance" === n ? (r = o,
                !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a)) !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i,
                !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
            }
            )) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
            this.each((function() {
                var e = t.data(this, s);
                e ? (e.option(n || {}),
                e._init && e._init()) : t.data(this, s, new i(n,this))
            }
            ))),
            r
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0],
            this.element = t(i),
            this.uuid = h++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            this.classesElementLookup = {},
            i !== this && (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }),
            this.document = t(i.style ? i.ownerDocument : i.document || i),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(),
            t.each(this.classesElementLookup, (function(t, i) {
                e._removeClass(i, t)
            }
            )),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {},
                s = e.split("."),
                e = s.shift(),
                s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]),
                    o = 0; s.length - 1 > o; o++)
                        n[s[o]] = n[s[o]] || {},
                        n = n[s[o]];
                    if (e = s.pop(),
                    1 === arguments.length)
                        return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e)
                n = this.classesElementLookup[i],
                e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()),
                this._removeClass(n, i),
                s.addClass(this._classes({
                    element: s,
                    keys: i,
                    classes: e,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++)
                    a = n.classesElementLookup[i[r]] || t(),
                    a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()),
                    n.classesElementLookup[i[r]] = a,
                    s.push(i[r]),
                    o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }
            var s = []
              , n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e),
            this._on(e.element, {
                remove: "_untrackClassesElement"
            }),
            e.keys && i(e.keys.match(/\S+/g) || [], !0),
            e.extra && i(e.extra.match(/\S+/g) || []),
            s.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, (function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            }
            ))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t
              , o = {
                extra: n ? e : i,
                keys: n ? t : e,
                element: n ? this.element : t,
                add: s
            };
            return o.element.toggleClass(this._classes(o), s),
            this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i,
            i = e,
            e = !1),
            s ? (i = n = t(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            t.each(s, (function(s, a) {
                function r() {
                    return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/)
                  , l = h[1] + o.eventNamespace
                  , c = h[2];
                c ? n.on(l, c, r) : i.on(l, r)
            }
            ))
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.off(i).off(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            var s = this;
            return setTimeout((function() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            ), e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {},
            (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, (function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
            "number" == typeof (n = n || {}) && (n = {
                duration: n
            }),
            a = !t.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue((function(i) {
                t(this)[e](),
                o && o.call(s[0]),
                i()
            }
            ))
        }
    }
    )),
    t.widget,
    function() {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        var n, o = Math.max, a = Math.abs, r = /left|center|right/, h = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n)
                    return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                return t("body").append(s),
                e = o.offsetWidth,
                s.css("overflow", "scroll"),
                e === (i = o.offsetWidth) && (i = s[0].clientWidth),
                s.remove(),
                n = e - i
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
                  , s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
                  , n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window)
                  , s = t.isWindow(i[0])
                  , n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: !s && !n ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        },
        t.fn.position = function(n) {
            if (!n || !n.of)
                return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, g, m, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b), w = (n.collision || "flip").split(" "), k = {};
            return _ = s(v),
            v[0].preventDefault && (n.at = "left top"),
            p = _.width,
            f = _.height,
            g = _.offset,
            m = t.extend({}, g),
            t.each(["my", "at"], (function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                i[0] = r.test(i[0]) ? i[0] : "center",
                i[1] = h.test(i[1]) ? i[1] : "center",
                t = l.exec(i[0]),
                e = l.exec(i[1]),
                k[this] = [t ? t[0] : 0, e ? e[0] : 0],
                n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }
            )),
            1 === w.length && (w[1] = w[0]),
            "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2),
            "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2),
            u = e(k.at, p, f),
            m.left += u[0],
            m.top += u[1],
            this.each((function() {
                var s, r, h = t(this), l = h.outerWidth(), c = h.outerHeight(), d = i(this, "marginLeft"), _ = i(this, "marginTop"), x = l + d + i(this, "marginRight") + y.width, C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, m), I = e(k.my, h.outerWidth(), h.outerHeight());
                "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2),
                "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2),
                D.left += I[0],
                D.top += I[1],
                s = {
                    marginLeft: d,
                    marginTop: _
                },
                t.each(["left", "top"], (function(e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: l,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [u[0] + I[0], u[1] + I[1]],
                        my: n.my,
                        at: n.at,
                        within: b,
                        elem: h
                    })
                }
                )),
                n.using && (r = function(t) {
                    var e = g.left - D.left
                      , i = e + p - l
                      , s = g.top - D.top
                      , r = s + f - c
                      , u = {
                        target: {
                            element: v,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: h,
                            left: D.left,
                            top: D.top,
                            width: l,
                            height: c
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    l > p && p > a(e + i) && (u.horizontal = "center"),
                    c > f && f > a(s + r) && (u.vertical = "middle"),
                    u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical",
                    n.using.call(this, t, u)
                }
                ),
                h.offset(t.extend(D, {
                    using: r
                }))
            }
            ))
        }
        ,
        t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n,
                    t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n,
                    t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - r - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - r - o) || a(c) > i) && (t.left += d + p + f) : u > 0 && (((s = t.left - e.collisionPosition.marginLeft + d + p + f - h) > 0 || u > a(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - r - h, p = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
                    0 > c ? (0 > (s = t.top + p + f + g + e.collisionHeight - r - o) || a(c) > s) && (t.top += p + f + g) : u > 0 && (((i = t.top - e.collisionPosition.marginTop + p + f + g - h) > 0 || u > a(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments),
                    t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments),
                    t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(),
    t.ui.position,
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo((function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }
        )) : function(e, i, s) {
            return !!t.data(e, s[3])
        }
    }),
    t.fn.extend({
        disableSelection: function() {
            var t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(t + ".ui-disableSelection", (function(t) {
                    t.preventDefault()
                }
                ))
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    }),
    t.ui.focusable = function(i, s) {
        var n, o, a, r, h, l = i.nodeName.toLowerCase();
        return "area" === l ? (o = (n = i.parentNode).name,
        !(!i.href || !o || "map" !== n.nodeName.toLowerCase()) && ((a = t("img[usemap='#" + o + "']")).length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled) && ((h = t(i).closest("fieldset")[0]) && (r = !h.disabled)) : r = "a" === l && i.href || s,
        r && t(i).is(":visible") && function(t) {
            for (var e = t.css("visibility"); "inherit" === e; )
                e = (t = t.parent()).css("visibility");
            return "hidden" !== e
        }(t(i)))
    }
    ,
    t.extend(t.expr[":"], {
        focusable: function(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
        }
    }),
    t.ui.focusable,
    t.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }
    ,
    t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout((function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, (function() {
                    this.refresh()
                }
                ))
            }
            ))
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(),
            this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler),
                t.push(this),
                this.form.data("ui-form-reset-instances", t)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1),
                e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    },
    "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], (function(e, i) {
        function s(e, i, s, o) {
            return t.each(n, (function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0,
                s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }
            )),
            i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , o = i.toLowerCase()
          , a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each((function() {
                t(this).css(o, s(this, e) + "px")
            }
            ))
        }
        ,
        t.fn["outer" + i] = function(e, n) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each((function() {
                t(this).css(o, s(this, e, !0, n) + "px")
            }
            ))
        }
    }
    )),
    t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    t.ui.escapeSelector = function() {
        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(e) {
            return e.replace(t, "\\$1")
        }
    }(),
    t.fn.labels = function() {
        var e, i, s, n, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"),
        (s = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()),
        i = "label[for='" + t.ui.escapeSelector(s) + "']",
        n = n.add(o.find(i).addBack(i))),
        this.pushStack(n))
    }
    ,
    t.fn.scrollParent = function(e) {
        var i = this.css("position")
          , s = "absolute" === i
          , n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , o = this.parents().filter((function() {
            var e = t(this);
            return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
        }
        )).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }
    ,
    t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex")
              , s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s)
        }
    }),
    t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each((function() {
                    this.id || (this.id = "ui-id-" + ++t)
                }
                ))
            }
        }(),
        removeUniqueId: function() {
            return this.each((function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            }
            ))
        }
    }),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var c = !1;
    t(document).on("mouseup", (function() {
        c = !1
    }
    )),
    t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, (function(t) {
                return e._mouseDown(t)
            }
            )).on("click." + this.widgetName, (function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : void 0
            }
            )),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!c) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var i = this
                  , s = 1 === e.which
                  , n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                    i.mouseDelayMet = !0
                }
                ), this.options.delay)),
                this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e),
                !this._mouseStarted) ? (e.preventDefault(),
                !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                c = !0,
                !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)
                    return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e),
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            c = !1,
            e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    t.ui.plugin = {
        add: function(e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s)
                o.plugins[n] = o.plugins[n] || [],
                o.plugins[n].push([i, s[n]])
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; o.length > n; n++)
                    t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    },
    t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body),
        e.nodeName || (e = t.body),
        e
    }
    ,
    t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }
    ,
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this._addClass("ui-draggable"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(),
            void this._mouseDestroy())
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e),
            !!this.handle && (this._blurActiveElement(e),
            this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
            !0))
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map((function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            }
            ))
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter((function() {
                return "fixed" === t(this).css("position")
            }
            )).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(e),
            this.originalPosition = this.position = this._generatePosition(e, !1),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", e) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this._mouseDrag(e, !0),
            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
            !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(e, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s))
                    return this._mouseUp(new t.Event("mouseup",e)),
                    !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
        },
        _mouseStop: function(e) {
            var i = this
              , s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
            this.dropped && (s = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                !1 !== i._trigger("stop", e) && i._clear()
            }
            )) : !1 !== this._trigger("stop", e) && this._clear(),
            !1
        },
        _mouseUp: function(e) {
            return this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.trigger("focus"),
            t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper)
              , n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
            s && n[0] === this.element[0] && this._setPositionRelative(),
            n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"),
            n
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset()
              , i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var t = this.element.position()
              , e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options, o = this.document[0];
            return this.relativeContainer = null,
            n.containment ? "window" === n.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void (this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
            void ((s = (i = t(n.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")),
            this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = i))) : void (this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1
              , s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), h = t.pageX, l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)),
            a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY,
            l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n,
            o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX,
            h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o),
            "y" === a.axis && (h = this.originalPageX),
            "x" === a.axis && (l = this.originalPageY)),
            {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(),
            t.ui.plugin.call(this, e, [i, s, this], !0),
            /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"),
            s.offset = this.positionAbs),
            t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.sortables = [],
            t(s.options.connectToSortable).each((function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, n))
            }
            ))
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1,
            t.each(s.sortables, (function() {
                var t = this;
                t.isOver ? (t.isOver = 0,
                s.cancelHelperRemoval = !0,
                t.cancelHelperRemoval = !1,
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                },
                t._mouseStop(e),
                t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0,
                t._trigger("deactivate", e, n))
            }
            ))
        },
        drag: function(e, i, s) {
            t.each(s.sortables, (function() {
                var n = !1
                  , o = this;
                o.positionAbs = s.positionAbs,
                o.helperProportions = s.helperProportions,
                o.offset.click = s.offset.click,
                o._intersectsWith(o.containerCache) && (n = !0,
                t.each(s.sortables, (function() {
                    return this.positionAbs = s.positionAbs,
                    this.helperProportions = s.helperProportions,
                    this.offset.click = s.offset.click,
                    this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1),
                    n
                }
                ))),
                n ? (o.isOver || (o.isOver = 1,
                s._parent = i.helper.parent(),
                o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0),
                o.options._helper = o.options.helper,
                o.options.helper = function() {
                    return i.helper[0]
                }
                ,
                e.target = o.currentItem[0],
                o._mouseCapture(e, !0),
                o._mouseStart(e, !0, !0),
                o.offset.click.top = s.offset.click.top,
                o.offset.click.left = s.offset.click.left,
                o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left,
                o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top,
                s._trigger("toSortable", e),
                s.dropped = o.element,
                t.each(s.sortables, (function() {
                    this.refreshPositions()
                }
                )),
                s.currentItem = s.element,
                o.fromOutside = s),
                o.currentItem && (o._mouseDrag(e),
                i.position = o.position)) : o.isOver && (o.isOver = 0,
                o.cancelHelperRemoval = !0,
                o.options._revert = o.options.revert,
                o.options.revert = !1,
                o._trigger("out", e, o._uiHash(o)),
                o._mouseStop(e, !0),
                o.options.revert = o.options._revert,
                o.options.helper = o.options._helper,
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                i.position = s._generatePosition(e, !0),
                s._trigger("fromSortable", e),
                s.dropped = !1,
                t.each(s.sortables, (function() {
                    this.refreshPositions()
                }
                )))
            }
            ))
        }
    }),
    t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body")
              , o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")),
            n.css("cursor", o.cursor)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }),
    t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper)
              , o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")),
            n.css("opacity", o.opacity)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }),
    t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(e, i, s) {
            var n = s.options
              , o = !1
              , a = s.scrollParentNotHidden[0]
              , r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
            n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
            n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
            !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }),
    t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [],
            t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each((function() {
                var e = t(this)
                  , i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            }
            ))
        },
        drag: function(e, i, s) {
            var n, o, a, r, h, l, c, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left, _ = m + s.helperProportions.width, v = i.offset.top, b = v + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--)
                l = (h = s.snapElements[d].left - s.margins.left) + s.snapElements[d].width,
                u = (c = s.snapElements[d].top - s.margins.top) + s.snapElements[d].height,
                h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })),
                s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b),
                o = g >= Math.abs(u - v),
                a = g >= Math.abs(h - _),
                r = g >= Math.abs(l - m),
                n && (i.position.top = s._convertPositionTo("relative", {
                    top: c - s.helperProportions.height,
                    left: 0
                }).top),
                o && (i.position.top = s._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top),
                a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h - s.helperProportions.width
                }).left),
                r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)),
                p = n || o || a || r,
                "outer" !== f.snapMode && (n = g >= Math.abs(c - v),
                o = g >= Math.abs(u - b),
                a = g >= Math.abs(h - m),
                r = g >= Math.abs(l - _),
                n && (i.position.top = s._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top),
                o && (i.position.top = s._convertPositionTo("relative", {
                    top: u - s.helperProportions.height,
                    left: 0
                }).top),
                a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left),
                r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l - s.helperProportions.width
                }).left)),
                !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })),
                s.snapElements[d].snapping = n || o || a || r || p)
        }
    }),
    t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options, a = t.makeArray(t(o.stack)).sort((function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            }
            ));
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0,
            t(a).each((function(e) {
                t(this).css("zIndex", n + e)
            }
            )),
            this.css("zIndex", n + a.length))
        }
    }),
    t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper)
              , o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")),
            n.css("zIndex", o.zIndex)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    }),
    t.ui.draggable,
    t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options, s = i.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = t.isFunction(s) ? s : function(t) {
                return t.is(s)
            }
            ,
            this.proportions = function() {
                return arguments.length ? void (e = arguments[0]) : e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                })
            }
            ,
            this._addToManager(i.scope),
            i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [],
            t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function(t) {
            for (var e = 0; t.length > e; e++)
                t[e] === this && t.splice(e, 1)
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e)
                this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                }
                ;
            else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s),
                this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(),
            i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(),
            i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(),
            this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(),
            this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current
              , n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function() {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && u(s, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e) ? (n = !0,
                !1) : void 0
            }
            )),
            !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", e, this.ui(s)),
            this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var u = t.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && e + i > t
        }
        return function(e, i, s, n) {
            if (!i.offset)
                return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left
              , a = (e.positionAbs || e.position.absolute).top + e.margins.top
              , r = o + e.helperProportions.width
              , h = a + e.helperProportions.height
              , l = i.offset.left
              , c = i.offset.top
              , u = l + i.proportions().width
              , d = c + i.proportions().height;
            switch (s) {
            case "fit":
                return o >= l && u >= r && a >= c && d >= h;
            case "intersect":
                return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
            case "pointer":
                return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
            case "touch":
                return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
            default:
                return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === o[s].element[0]) {
                            o[s].proportions().height = 0;
                            continue t
                        }
                    o[s].visible = "none" !== o[s].element.css("display"),
                    o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i),
                    o[s].offset = o[s].element.offset(),
                    o[s].proportions({
                        width: o[s].element[0].offsetWidth,
                        height: o[s].element[0].offsetHeight
                    }))
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), (function() {
                this.options && (!this.options.disabled && this.visible && u(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }
            )),
            s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", (function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
            ))
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(t.ui.ddmanager.droppables[e.options.scope] || [], (function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = u(e, this, this.options.tolerance, i), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope,
                    (o = this.element.parents(":data(ui-droppable)").filter((function() {
                        return t(this).droppable("instance").options.scope === n
                    }
                    ))).length && ((s = t(o[0]).droppable("instance")).greedyChild = "isover" === r)),
                    s && "isover" === r && (s.isover = !1,
                    s.isout = !0,
                    s._out.call(s, i)),
                    this[r] = !0,
                    this["isout" === r ? "isover" : "isout"] = !1,
                    this["isover" === r ? "_over" : "_out"].call(this, i),
                    s && "isout" === r && (s.isout = !1,
                    s.isover = !0,
                    s._over.call(s, i)))
                }
            }
            ))
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    },
    !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(),
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }),
    t.ui.droppable,
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow"))
                return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop"
              , n = !1;
            return e[s] > 0 || (e[s] = 1,
            n = e[s] > 0,
            e[s] = 0,
            n)
        },
        _create: function() {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"),
            t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(e),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(e),
            this._proportionallyResize()),
            this._setupHandles(),
            i.autoHide && t(this.element).on("mouseenter", (function() {
                i.disabled || (s._removeClass("ui-resizable-autohide"),
                s._handles.show())
            }
            )).on("mouseleave", (function() {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"),
                s._handles.hide())
            }
            )),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            e = this.element,
            this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e),
            e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _setOption: function(t, e) {
            switch (this._super(t, e),
            t) {
            case "handles":
                this._removeHandles(),
                this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = t(),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                s = this.handles.split(","),
                this.handles = {},
                i = 0; s.length > i; i++)
                    n = "ui-resizable-" + (e = t.trim(s[i])),
                    o = t("<div>"),
                    this._addClass(o, "ui-resizable-handle " + n),
                    o.css({
                        zIndex: a.zIndex
                    }),
                    this.handles[e] = ".ui-resizable-" + e,
                    this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                for (i in e = e || this.element,
                this.handles)
                    this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]),
                    this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element),
                    o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(),
                    n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    e.css(n, o),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[i])
            }
            ,
            this._renderAxis(this.element),
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
            this._handles.disableSelection(),
            this._handles.on("mouseover", (function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                r.axis = o && o[1] ? o[1] : "se")
            }
            )),
            a.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles)
                ((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(e) {
            var i, s, n, o = this.options, a = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            i = this._num(this.helper.css("left")),
            s = this._num(this.helper.css("top")),
            o.containment && (i += t(o.containment).scrollLeft() || 0,
            s += t(o.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: i,
                top: s
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            },
            this.originalPosition = {
                left: i,
                top: s
            },
            this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            },
            this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            n = t(".ui-resizable-" + this.axis).css("cursor"),
            t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition, o = this.axis, a = e.pageX - n.left || 0, r = e.pageY - n.top || 0, h = this._change[o];
            return this._updatePrevProperties(),
            !!h && (i = h.apply(this, [e, a, r]),
            this._updateVirtualBoundaries(e.shiftKey),
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
            i = this._respectSize(i, e),
            this._updateCache(i),
            this._propagate("resize", e),
            s = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            t.isEmptyObject(s) || (this._updatePrevProperties(),
            this._trigger("resize", e, this.ui()),
            this._applyChanges()),
            !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, h, l = this.options, c = this;
            return this._helper && (n = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height,
            o = s ? 0 : c.sizeDiff.width,
            a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            },
            r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null,
            h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null,
            l.animate || this.element.css(t.extend(a, {
                top: h,
                left: r
            })),
            c.helper.height(c.size.height),
            c.helper.width(c.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            },
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            },
            (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio,
            s = o.minWidth / this.aspectRatio,
            i = o.maxHeight * this.aspectRatio,
            n = o.maxWidth / this.aspectRatio,
            e > o.minWidth && (o.minWidth = e),
            s > o.minHeight && (o.minHeight = s),
            o.maxWidth > i && (o.maxWidth = i),
            o.maxHeight > n && (o.maxHeight = n)),
            this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position
              , i = this.size
              , s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === s && (t.left = e.left + (i.width - t.width),
            t.top = null),
            "nw" === s && (t.top = e.top + (i.height - t.height),
            t.left = e.left + (i.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries
              , i = this.axis
              , s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width
              , n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height
              , o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width
              , a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height
              , r = this.originalPosition.left + this.originalSize.width
              , h = this.originalPosition.top + this.originalSize.height
              , l = /sw|nw|w/.test(i)
              , c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            s && (t.width = e.maxWidth),
            n && (t.height = e.maxHeight),
            o && l && (t.left = r - e.minWidth),
            s && l && (t.left = r - e.maxWidth),
            a && c && (t.top = h - e.minHeight),
            n && c && (t.top = h - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++)
                i[e] = parseFloat(s[e]) || 0,
                i[e] += parseFloat(n[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
                    t = this._proportionallyResizeElements[e],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                    t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var e = this.element
              , i = this.options;
            this.elementOffset = e.offset(),
            this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance")
              , s = i.options
              , n = i._proportionallyResizeElements
              , o = n.length && /textarea/i.test(n[0].nodeName)
              , a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
              , r = o ? 0 : i.sizeDiff.width
              , h = {
                width: i.size.width - r,
                height: i.size.height - a
            }
              , l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }),
                    i._updateCache(s),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, a, r, h = t(this).resizable("instance"), l = h.options, c = h.element, u = l.containment, d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (h.containerElement = t(d),
            /document/.test(u) || u === document ? (h.containerOffset = {
                left: 0,
                top: 0
            },
            h.containerPosition = {
                left: 0,
                top: 0
            },
            h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d),
            i = [],
            t(["Top", "Right", "Left", "Bottom"]).each((function(t, s) {
                i[t] = h._num(e.css("padding" + s))
            }
            )),
            h.containerOffset = e.offset(),
            h.containerPosition = e.position(),
            h.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            },
            s = h.containerOffset,
            n = h.containerSize.height,
            o = h.containerSize.width,
            a = h._hasScroll(d, "left") ? d.scrollWidth : o,
            r = h._hasScroll(d) ? d.scrollHeight : n,
            h.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }))
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).resizable("instance"), r = a.options, h = a.containerOffset, l = a.position, c = a._aspectRatio || e.shiftKey, u = {
                top: 0,
                left: 0
            }, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = h),
            l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left),
            c && (a.size.height = a.size.width / a.aspectRatio,
            p = !1),
            a.position.left = r.helper ? h.left : 0),
            l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top),
            c && (a.size.width = a.size.height * a.aspectRatio,
            p = !1),
            a.position.top = a._helper ? h.top : 0),
            n = a.containerElement.get(0) === a.element.parent().get(0),
            o = /relative|absolute/.test(a.containerElement.css("position")),
            n && o ? (a.offset.left = a.parentData.left + a.position.left,
            a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left,
            a.offset.top = a.element.offset().top),
            i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)),
            s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)),
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i,
            c && (a.size.height = a.size.width / a.aspectRatio,
            p = !1)),
            s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s,
            c && (a.size.width = a.size.height * a.aspectRatio,
            p = !1)),
            p || (a.position.left = a.prevPosition.left,
            a.position.top = a.prevPosition.top,
            a.size.width = a.prevSize.width,
            a.size.height = a.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance")
              , i = e.options
              , s = e.containerOffset
              , n = e.containerPosition
              , o = e.containerElement
              , a = t(e.helper)
              , r = a.offset()
              , h = a.outerWidth() - e.sizeDiff.width
              , l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }),
            e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var i = t(this).resizable("instance").options;
            t(i.alsoResize).each((function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            }
            ))
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance")
              , n = s.options
              , o = s.originalSize
              , a = s.originalPosition
              , r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            };
            t(n.alsoResize).each((function() {
                var e = t(this)
                  , s = t(this).data("ui-resizable-alsoresize")
                  , n = {}
                  , o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, (function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }
                )),
                e.css(n)
            }
            ))
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }),
    t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance")
              , i = e.size;
            e.ghost = e.originalElement.clone(),
            e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }),
            e._addClass(e.ghost, "ui-resizable-ghost"),
            !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost),
            e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }),
    t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, l = h[0] || 1, c = h[1] || 1, u = Math.round((n.width - o.width) / l) * l, d = Math.round((n.height - o.height) / c) * c, p = o.width + u, f = o.height + d, g = s.maxWidth && p > s.maxWidth, m = s.maxHeight && f > s.maxHeight, _ = s.minWidth && s.minWidth > p, v = s.minHeight && s.minHeight > f;
            s.grid = h,
            _ && (p += l),
            v && (f += c),
            g && (p -= l),
            m && (f -= c),
            /^(se|s|e)$/.test(r) ? (i.size.width = p,
            i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)),
            f - c > 0 ? (i.size.height = f,
            i.position.top = a.top - d) : (f = c - e.height,
            i.size.height = f,
            i.position.top = a.top + o.height - f),
            p - l > 0 ? (i.size.width = p,
            i.position.left = a.left - u) : (p = l - e.width,
            i.size.width = p,
            i.position.left = a.left + o.width - p))
        }
    }),
    t.ui.resizable,
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(),
                e.selectees = t(e.options.filter, e.element[0]),
                e._addClass(e.selectees, "ui-selectee"),
                e.selectees.each((function() {
                    var i = t(this)
                      , s = i.offset()
                      , n = {
                        left: s.left - e.elementPos.left,
                        top: s.top - e.elementPos.top
                    };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                }
                ))
            }
            ,
            this.refresh(),
            this._mouseInit(),
            this.helper = t("<div>"),
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"),
            this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this
              , s = this.options;
            this.opos = [e.pageX, e.pageY],
            this.elementPos = t(this.element[0]).offset(),
            this.options.disabled || (this.selectees = t(s.filter, this.element[0]),
            this._trigger("start", e),
            t(s.appendTo).append(this.helper),
            this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each((function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0,
                e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"),
                s.selected = !1,
                i._addClass(s.$element, "ui-unselecting"),
                s.unselecting = !0,
                i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }
            )),
            t(e.target).parents().addBack().each((function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"),
                i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"),
                n.unselecting = !s,
                n.selecting = s,
                n.selected = s,
                s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }),
                !1) : void 0
            }
            )))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, h = e.pageY;
                return o > r && (i = r,
                r = o,
                o = i),
                a > h && (i = h,
                h = a,
                a = i),
                this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: h - a
                }),
                this.selectees.each((function() {
                    var i = t.data(this, "selectable-item")
                      , l = !1
                      , c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left,
                    c.right = i.right + s.elementPos.left,
                    c.top = i.top + s.elementPos.top,
                    c.bottom = i.bottom + s.elementPos.top,
                    "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom),
                    l ? (i.selected && (s._removeClass(i.$element, "ui-selected"),
                    i.selected = !1),
                    i.unselecting && (s._removeClass(i.$element, "ui-unselecting"),
                    i.unselecting = !1),
                    i.selecting || (s._addClass(i.$element, "ui-selecting"),
                    i.selecting = !0,
                    s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"),
                    i.selecting = !1,
                    s._addClass(i.$element, "ui-selected"),
                    i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"),
                    i.selecting = !1,
                    i.startselected && (s._addClass(i.$element, "ui-unselecting"),
                    i.unselecting = !0),
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))),
                    i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"),
                    i.selected = !1,
                    s._addClass(i.$element, "ui-unselecting"),
                    i.unselecting = !0,
                    s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }
                )),
                !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1,
            t(".ui-unselecting", this.element[0]).each((function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"),
                s.unselecting = !1,
                s.startselected = !1,
                i._trigger("unselected", e, {
                    unselected: s.element
                })
            }
            )),
            t(".ui-selecting", this.element[0]).each((function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"),
                s.selecting = !1,
                s.selected = !0,
                s.startselected = !0,
                i._trigger("selected", e, {
                    selected: s.element
                })
            }
            )),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
        }
    }),
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {},
            this._addClass("ui-sortable"),
            this.refresh(),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
            t.each(this.items, (function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            }
            ))
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, i) {
            var s = null
              , n = !1
              , o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e),
            t(e.target).parents().each((function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this),
                !1) : void 0
            }
            )),
            t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)),
            !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each((function() {
                this === e.target && (n = !0)
            }
            )),
            !n)) && (this.currentItem = s,
            this._removeCurrentsFromItems(),
            !0))))
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(e),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            a.containment && this._setContainment(),
            a.cursor && "auto" !== a.cursor && (o = this.document.find("body"),
            this.storedCursor = o.css("cursor"),
            o.css("cursor", a.cursor),
            this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)),
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", a.opacity)),
            a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", a.zIndex)),
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !s)
                for (n = this.containers.length - 1; n >= 0; n--)
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
            e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
            !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1; i >= 0; i--)
                if (n = (s = this.items[i]).item[0],
                (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                        break;
                    this._rearrange(e, s),
                    this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                this.options.revert) {
                    var s = this
                      , n = this.placeholder.offset()
                      , o = this.options.axis
                      , a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, (function() {
                        s._clear(e)
                    }
                    ))
                } else
                    this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup",{
                    target: null
                })),
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                    this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            t(i).each((function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }
            )),
            !s.length && e.key && s.push(e.key + "="),
            s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            i.each((function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }
            )),
            s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left
              , i = e + this.helperProportions.width
              , s = this.positionAbs.top
              , n = s + this.helperProportions.height
              , o = t.left
              , a = o + t.width
              , r = t.top
              , h = r + t.height
              , l = this.offset.click.top
              , c = this.offset.click.left
              , u = "x" === this.options.axis || s + l > r && h > s + l
              , d = "y" === this.options.axis || e + c > o && a > e + c
              , p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && n) && (e = this._getDragVerticalDirection(),
            i = this._getDragHorizontalDirection(),
            this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , s = this._getDragVerticalDirection()
              , n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [], h = [], l = this._connectWith();
            if (l && e)
                for (s = l.length - 1; s >= 0; s--)
                    for (n = (o = t(l[s], this.document[0])).length - 1; n >= 0; n--)
                        (a = t.data(o[n], this.widgetFullName)) && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            s = h.length - 1; s >= 0; s--)
                h[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, (function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0])
                        return !1;
                return !0
            }
            ))
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = (n = t(d[i], this.document[0])).length - 1; s >= 0; s--)
                        (o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]),
                        this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1],
                s = 0,
                l = (r = u[i][0]).length; l > s; s++)
                    (h = t(r[s])).data(this.widgetName + "-item", a),
                    c.push({
                        item: h,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(e) {
            var i, s, n, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            i = this.items.length - 1; i >= 0; i--)
                (s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item,
                e || (s.width = n.outerWidth(),
                s.height = n.outerHeight()),
                o = n.offset(),
                s.left = o.left,
                s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    o = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = o.left,
                    this.containers[i].containerCache.top = o.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder,
            s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase()
                      , n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"),
                    "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")),
                    i || n.css("visibility", "hidden"),
                    n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                    n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each((function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            }
            ))
        },
        _contactContainers: function(e) {
            var i, s, n, o, a, r, h, l, c, u, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0]))
                            continue;
                        d = this.containers[i],
                        p = i
                    } else
                        this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)),
                        this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length)
                    this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1);
                else {
                    for (n = 1e4,
                    o = null,
                    a = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                    r = c ? "width" : "height",
                    u = c ? "pageX" : "pageY",
                    s = this.items.length - 1; s >= 0; s--)
                        t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a],
                        l = !1,
                        e[u] - h > this.items[s][r] / 2 && (l = !0),
                        n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h),
                        o = this.items[s],
                        this.direction = l ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[p])
                        return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()),
                        this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
                    this._trigger("change", e, this._uiHash()),
                    this.containers[p]._trigger("change", e, this._uiHash(this)),
                    this.currentContainer = this.containers[p],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[p]._trigger("over", e, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode),
            ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0],
            i = t(n.containment).offset(),
            s = "hidden" !== t(e).css("overflow"),
            this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
            n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1],
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i,
            s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0],
            o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)),
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay((function() {
                n === this.counter && this.refreshPositions(!s)
            }
            ))
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)
                    ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && n.push((function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }
            )),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push((function(t) {
                this._trigger("update", t, this._uiHash())
            }
            )),
            this !== this.currentContainer && (e || (n.push((function(t) {
                this._trigger("remove", t, this._uiHash())
            }
            )),
            n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            s = this.containers.length - 1; s >= 0; s--)
                e || n.push(i("deactivate", this, this.containers[s])),
                this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])),
                this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !e) {
                for (s = 0; n.length > s; s++)
                    n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }),
    t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            e.collapsible || !1 !== e.active && null != e.active || (e.active = 0),
            this._processPanels(),
            0 > e.active && (e.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"),
            this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header),
            e.prependTo(this.headers),
            i = this.active.children(".ui-accordion-header-icon"),
            this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"),
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
            this._destroyIcons(),
            t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),
            "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t || e || !1 !== this.options.active || this._activate(0),
            void ("icons" === t && (this._destroyIcons(),
            e && this._createIcons())))
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t),
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode
                  , s = this.headers.length
                  , n = this.headers.index(e.target)
                  , o = !1;
                switch (e.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    o = this.headers[(n + 1) % s];
                    break;
                case i.LEFT:
                case i.UP:
                    o = this.headers[(n - 1 + s) % s];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(e);
                    break;
                case i.HOME:
                    o = this.headers[0];
                    break;
                case i.END:
                    o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1),
                t(o).attr("tabIndex", 0),
                t(o).trigger("focus"),
                e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(),
            !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1,
            this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1,
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            var t = this.headers
              , e = this.panels;
            this.headers = this.element.find(this.options.header),
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
            e && (this._off(t.not(this.headers)),
            this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options, s = i.heightStyle, n = this.element.parent();
            this.active = this._findActive(i.active),
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers.attr("role", "tab").each((function() {
                var e = t(this)
                  , i = e.uniqueId().attr("id")
                  , s = e.next()
                  , n = s.uniqueId().attr("id");
                e.attr("aria-controls", n),
                s.attr("aria-labelledby", i)
            }
            )).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            "fill" === s ? (e = n.height(),
            this.element.siblings(":visible").each((function() {
                var i = t(this)
                  , s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }
            )),
            this.headers.each((function() {
                e -= t(this).outerHeight(!0)
            }
            )),
            this.headers.next().each((function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }
            )).css("overflow", "auto")) : "auto" === s && (e = 0,
            this.headers.next().each((function() {
                var i = t(this).is(":visible");
                i || t(this).show(),
                e = Math.max(e, t(this).css("height", "").height()),
                i || t(this).hide()
            }
            )).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), (function(t, e) {
                i[e] = "_eventHandler"
            }
            )),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, s, n = this.options, o = this.active, a = t(e.currentTarget), r = a[0] === o[0], h = r && n.collapsible, l = h ? t() : a.next(), c = o.next(), u = {
                oldHeader: o,
                oldPanel: c,
                newHeader: h ? t() : a,
                newPanel: l
            };
            e.preventDefault(),
            r && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !h && this.headers.index(a),
            this.active = r ? t() : a,
            this._toggle(u),
            this._removeClass(o, "ui-accordion-header-active", "ui-state-active"),
            n.icons && (i = o.children(".ui-accordion-header-icon"),
            this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)),
            r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"),
            n.icons && (s = a.children(".ui-accordion-header-icon"),
            this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)),
            this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel
              , s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = i,
            this.prevHide = s,
            this.options.animate ? this._animate(i, s, e) : (s.hide(),
            i.show(),
            this._toggleComplete(e)),
            s.attr({
                "aria-hidden": "true"
            }),
            s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter((function() {
                return 0 === parseInt(t(this).attr("tabIndex"), 10)
            }
            )).attr("tabIndex", -1),
            i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, i) {
            var s, n, o, a = this, r = 0, h = t.css("box-sizing"), l = t.length && (!e.length || t.index() < e.index()), c = this.options.animate || {}, u = l && c.down || c, d = function() {
                a._toggleComplete(i)
            };
            return "number" == typeof u && (o = u),
            "string" == typeof u && (n = u),
            n = n || u.easing || c.easing,
            o = o || u.duration || c.duration,
            e.length ? t.length ? (s = t.show().outerHeight(),
            e.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }),
            void t.hide().animate(this.showProps, {
                duration: o,
                easing: n,
                complete: d,
                step: function(t, i) {
                    i.now = Math.round(t),
                    "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r),
                    r = 0)
                }
            })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel
              , i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"),
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t)
        }
    }),
    t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target)
                      , s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e),
                    e.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item")
                          , s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"),
                        this.focus(e, s))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay((function() {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                    }
                    ))
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var i = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            i.children().each((function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            }
            ))
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                a = !1,
                s = this.previousFilter || "",
                o = !1,
                n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode),
                clearTimeout(this.filterTimer),
                n === s ? o = !0 : n = s + n,
                i = this._filterMenuItems(n),
                (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode),
                i = this._filterMenuItems(n)),
                i.length ? (this.focus(e, i),
                this.previousFilter = n,
                this.filterTimer = this._delay((function() {
                    delete this.previousFilter
                }
                ), 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var i, s, n, o, a = this, r = this.options.icons.submenu, h = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            s = h.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each((function() {
                var e = t(this)
                  , i = e.prev()
                  , s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r),
                i.attr("aria-haspopup", "true").prepend(s),
                e.attr("aria-labelledby", i.attr("id"))
            }
            )),
            this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"),
            (i = h.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
            }
            )),
            o = (n = i.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"),
            i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t + ""),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            s = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(s, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(n, null, "ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay((function() {
                this._close()
            }
            ), this.delay),
            (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
            n = e.offset().top - this.activeMenu.offset().top - i - s,
            o = this.activeMenu.scrollTop(),
            a = this.activeMenu.height(),
            r = e.outerHeight(),
            0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay((function() {
                this._close(),
                this._open(t)
            }
            ), this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay((function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(e),
                this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = s
            }
            ), this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element),
            t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()),
            this._delay((function() {
                this.focus(t, e)
            }
            )))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each((function() {
                return 0 > (i = t(this)).offset().top - s - n
            }
            )),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each((function() {
                return (i = t(this)).offset().top - s + n > 0
            }
            )),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            }
            ))
        }
    }),
    t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element),
            this.valueMethod = this.element[o || a ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return e = !0,
                        s = !0,
                        void (i = !0);
                    e = !1,
                    s = !1,
                    i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                    case o.PAGE_UP:
                        e = !0,
                        this._move("previousPage", n);
                        break;
                    case o.PAGE_DOWN:
                        e = !0,
                        this._move("nextPage", n);
                        break;
                    case o.UP:
                        e = !0,
                        this._keyEvent("previous", n);
                        break;
                    case o.DOWN:
                        e = !0,
                        this._keyEvent("next", n);
                        break;
                    case o.ENTER:
                        this.menu.active && (e = !0,
                        n.preventDefault(),
                        this.menu.select(n));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(n),
                        n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e)
                        return e = !1,
                        void ((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1,
                    void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t))
                }
            }),
            this._initSource(),
            this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay((function() {
                        delete this.cancelBlur,
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    }
                    ))
                },
                menufocus: function(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1,
                    e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(),
                    void this.document.one("mousemove", (function() {
                        t(e.target).trigger(e.originalEvent)
                    }
                    ))) : (n = i.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value),
                    void ((s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(),
                    t("<div>").text(s).appendTo(this.liveRegion))))
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item")
                      , n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = n,
                    this._delay((function() {
                        this.previous = n,
                        this.selectedItem = s
                    }
                    ))),
                    !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = s
                }
            }),
            this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e && e[0] || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source,
            this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(e, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching),
            this.searching = this._delay((function() {
                var e = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null,
                this.search(null, t))
            }
            ), this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy((function(t) {
                e === this.requestIndex && this.__response(t),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }
            ), this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
            this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, (function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            }
            ))
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, (function(t, i) {
                s._renderItemData(e, i)
            }
            ))
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
            void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e),
            e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length)
                return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }),
    t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, (function(t) {
                return s.test(t.label || t.value || t)
            }
            ))
        }
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            t("<div>").text(i).appendTo(this.liveRegion))
        }
    }),
    t.ui.autocomplete;
    var p, d = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"),
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"),
            this.childWidgets.removeData("ui-controlgroup-data"),
            this.element.removeAttr("role"),
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var e = this
              , i = [];
            t.each(this.options.items, (function(s, n) {
                var o, a = {};
                return n ? "controlgroupLabel" === s ? ((o = e.element.find(n)).each((function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }
                )),
                e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"),
                void (i = i.concat(o.get()))) : void (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
                    classes: {}
                },
                e.element.find(n).each((function() {
                    var n = t(this)
                      , o = n[s]("instance")
                      , r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")),
                        o && (r.classes = e._resolveClassesValues(r.classes, o)),
                        n[s](r);
                        var h = n[s]("widget");
                        t.data(h[0], "ui-controlgroup-data", o || n[s]("instance")),
                        i.push(h[0])
                    }
                }
                )))) : void 0
            }
            )),
            this.childWidgets = t(t.unique(i)),
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each((function() {
                var s = t(this).data("ui-controlgroup-data");
                s && s[e] && s[e]()
            }
            ))
        },
        _updateCornerClass: function(t, e) {
            var s = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),
            this._addClass(t, null, s)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction
              , s = {
                classes: {}
            };
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t],
            s
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "",
            e.classes["ui-spinner-down"] = "",
            e
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            }
        },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, (function(n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(d, "")),
                s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
            }
            )),
            s
        },
        _setOption: function(t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(t, e),
            "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
            "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
            this._initWidgets(),
            e = this.childWidgets,
            this.options.onlyVisible && (e = e.filter(":visible")),
            e.length && (t.each(["first", "last"], (function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n),
                    n.element[n.widgetName](o)
                } else
                    i._updateCornerClass(e[s](), s)
            }
            )),
            this._callChildMethod("refresh"))
        }
    }),
    t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var e, i, s = this, n = this._super() || {};
            return this._readType(),
            i = this.element.labels(),
            this.label = t(i[i.length - 1]),
            this.label.length || t.error("No label found for checkboxradio widget"),
            this.originalLabel = "",
            this.label.contents().not(this.element[0]).each((function() {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
            }
            )),
            this.originalLabel && (n.label = this.originalLabel),
            null != (e = this.element[0].disabled) && (n.disabled = e),
            n
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
            this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type,
            "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var i = this.element[0].name
              , s = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter((function() {
                return 0 === t(this).form().length
            }
            ))).not(this.element) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e),
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e),
            "radio" === this.type && this._getRadioGroup().each((function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            }
            ))
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(t, e) {
            return "label" !== t || e ? (this._super(t, e),
            "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e),
            void (this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"),
            this.iconSpace = t("<span> </span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", i),
            e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked
              , e = this.element[0].disabled;
            this._updateIcon(t),
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({
                disabled: e
            })
        }
    }]),
    t.ui.checkboxradio,
    t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"),
            null != (t = this.element[0].disabled) && (e.disabled = t),
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
            this.originalLabel && (e.label = this.originalLabel),
            e
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
            this.hasTitle = !!this.element.attr("title"),
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
            this._addClass("ui-button", "ui-widget"),
            this._setOption("disabled", this.options.disabled),
            this._enhance(),
            this.element.is("a") && this._on({
                keyup: function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"),
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"),
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(e, i) {
            var s = "iconPosition" !== e
              , n = s ? this.options.iconPosition : i
              , o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
            s && this._addClass(this.icon, null, i),
            this._attachIcon(n),
            o ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(n))
        },
        _destroy: function() {
            this.element.removeAttr("role"),
            this.icon && this.icon.remove(),
            this.iconSpace && this.iconSpace.remove(),
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel
              , i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0),
            this._super(t)
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove())),
            "iconPosition" === t && this._updateIcon(t, e),
            "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e),
            this._updateTooltip()),
            "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition)))),
            this._super(t, e),
            "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e),
            this.element[0].disabled = e,
            e && this.element.blur())
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }),
            this._updateTooltip()
        }
    }),
    !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end"),
            this._super()
        },
        _setOption: function(t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e),
            "icon" === t && (this.options.icons.primary = e),
            "icons" === t && (e.primary ? (this._super("icon", e.primary),
            this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary),
            this._super("iconPosition", "end"))),
            void this._superApply(arguments))
        }
    }),
    t.fn.button = function(e) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(t.fn.button),
    t.fn.buttonset = function() {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"),
        "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }),
        this.controlgroup.apply(this, arguments))
    }
    ),
    t.ui.button,
    t.extend(t.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }),
    t.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return a(this._defaults, t || {}),
            this
        },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s,
            e.id || (this.uuid += 1,
            e.id = "dp" + this.uuid),
            (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}),
            "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]),
            i.trigger = t([]),
            s.hasClass(this.markerClassName) || (this._attachments(s, i),
            s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(i),
            t.data(e, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(),
            a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"),
            e[r ? "before" : "after"](i.append)),
            e.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.on("focus", this._showDatepicker),
            ("button" === s || "both" === s) && (n = this._get(i, "buttonText"),
            o = this._get(i, "buttonImage"),
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)),
            e[r ? "before" : "after"](i.trigger),
            i.trigger.on("click", (function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(),
                t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
                !1
            }
            )))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009,11,20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0,
                    s = 0,
                    n = 0; t.length > n; n++)
                        t[n].length > i && (i = t[n].length,
                        s = n);
                    return s
                }
                ,
                o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, n, o) {
            var r, h, l, c, u, d = this._dialogInst;
            return d || (this.uuid += 1,
            r = "dp" + this.uuid,
            this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.on("keydown", this._doKeyDown),
            t("body").append(this._dialogInput),
            (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {},
            t.data(this._dialogInput[0], "datepicker", d)),
            a(d.settings, n || {}),
            i = i && i.constructor === Date ? this._formatDate(d, i) : i,
            this._dialogInput.val(i),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            this._pos || (h = document.documentElement.clientWidth,
            l = document.documentElement.clientHeight,
            c = document.documentElement.scrollLeft || document.body.scrollLeft,
            u = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            d.settings.onSelect = s,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", d),
            this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e), n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            t.removeData(e, "datepicker"),
            "input" === i ? (n.append.remove(),
            n.trigger.remove(),
            s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(),
            p === n && (p = null))
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1,
            o.trigger.filter("button").each((function() {
                this.disabled = !1
            }
            )).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = t.map(this._disabledInputs, (function(t) {
                return t === e ? null : t
            }
            )))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e), o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0,
            o.trigger.filter("button").each((function() {
                this.disabled = !0
            }
            )).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = t.map(this._disabledInputs, (function(t) {
                return t === e ? null : t
            }
            )),
            this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, i, s) {
            var n, o, r, h, l = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {},
            "string" == typeof i && ((n = {})[i] = s),
            void (l && (this._curInst === l && this._hideDatepicker(),
            o = this._getDateDatepicker(e, !0),
            r = this._getMinMaxDate(l, "min"),
            h = this._getMinMaxDate(l, "max"),
            a(l.settings, n),
            null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)),
            null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)),
            "disabled"in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
            this._attachments(t(e), l),
            this._autoSize(l),
            this._setDate(l, o),
            this._updateAlternate(l),
            this._updateDatepicker(l))))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0,
            t.datepicker._datepickerShowing)
                switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(),
                    a = !1;
                    break;
                case 13:
                    return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]),
                    (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o),
                    i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                    a = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                    a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                    a = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                    a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
                }
            else
                36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(),
            e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")),
            s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
            e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(e) {
            var s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)
                try {
                    t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)) && (t.datepicker._setDateFromField(s),
                    t.datepicker._updateAlternate(s),
                    t.datepicker._updateDatepicker(s))
                } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            var s, n, o, r, h, l, c;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
            t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (s = t.datepicker._getInst(e),
            t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0),
            s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            !1 !== (o = (n = t.datepicker._get(s, "beforeShow")) ? n.apply(e, [e, s]) : {}) && (a(s.settings, o),
            s.lastVal = null,
            t.datepicker._lastInput = e,
            t.datepicker._setDateFromField(s),
            t.datepicker._inDialog && (e.value = ""),
            t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e),
            t.datepicker._pos[1] += e.offsetHeight),
            r = !1,
            t(e).parents().each((function() {
                return !(r |= "fixed" === t(this).css("position"))
            }
            )),
            h = {
                left: t.datepicker._pos[0],
                top: t.datepicker._pos[1]
            },
            t.datepicker._pos = null,
            s.dpDiv.empty(),
            s.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }),
            t.datepicker._updateDatepicker(s),
            h = t.datepicker._checkOffset(s, h, r),
            s.dpDiv.css({
                position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                display: "none",
                left: h.left + "px",
                top: h.top + "px"
            }),
            s.inline || (l = t.datepicker._get(s, "showAnim"),
            c = t.datepicker._get(s, "duration"),
            s.dpDiv.css("z-index", function(t) {
                for (var e, i; t.length && t[0] !== document; ) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10),
                    !isNaN(i) && 0 !== i))
                        return i;
                    t = t.parent()
                }
                return 0
            }(t(e)) + 1),
            t.datepicker._datepickerShowing = !0,
            t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null),
            t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
            t.datepicker._curInst = s)))
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4,
            p = e,
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
            var i, s = this._getNumberOfMonths(e), n = s[1], r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)),
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"),
            e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"),
            e.yearshtml && (i = e.yearshtml,
            setTimeout((function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                i = e.yearshtml = null
            }
            ), 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth()
              , o = e.dpDiv.outerHeight()
              , a = e.input ? e.input.outerWidth() : 0
              , r = e.input ? e.input.outerHeight() : 0
              , h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft())
              , l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0,
            i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
            i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0),
            i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0),
            i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                e = e[n ? "previousSibling" : "nextSibling"];
            return [(i = t(e).offset()).left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"),
            s = this._get(a, "duration"),
            n = function() {
                t.datepicker._tidyDialog(a)
            }
            ,
            t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n),
            i || n(),
            this._datepickerShowing = !1,
            (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            t.blockUI && (t.unblockUI(),
            t("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target)
                  , s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e)
              , o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s),
            this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
            n.drawMonth = n.selectedMonth = n.currentMonth,
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date,
            n.selectedDay = i.getDate(),
            n.drawMonth = n.selectedMonth = i.getMonth(),
            n.drawYear = n.selectedYear = i.getFullYear()),
            this._notifyChange(n),
            this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e)
              , o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(o),
            this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o, a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", n).html(),
            o.selectedMonth = o.currentMonth = i,
            o.selectedYear = o.currentYear = s,
            this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e), o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
            o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(),
            this._lastInput = o.input[0],
            "object" != typeof o.input[0] && o.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
            s = this._getDate(e),
            n = this.formatDate(i, s, this._getFormatConfig(e)),
            t(o).val(n))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            e = i.getTime(),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i)
                throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + ""))
                return null;
            var n, o, a, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, _ = -1, v = -1, b = !1, y = function(t) {
                var i = e.length > n + 1 && e.charAt(n + 1) === t;
                return i && n++,
                i
            }, w = function(t) {
                var e = y(t)
                  , s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                  , o = RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}")
                  , a = i.substring(h).match(o);
                if (!a)
                    throw "Missing number at position " + h;
                return h += a[0].length,
                parseInt(a[0], 10)
            }, k = function(e, s, n) {
                var o = -1
                  , a = t.map(y(e) ? n : s, (function(t, e) {
                    return [[e, t]]
                }
                )).sort((function(t, e) {
                    return -(t[1].length - e[1].length)
                }
                ));
                if (t.each(a, (function(t, e) {
                    var s = e[1];
                    return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0],
                    h += s.length,
                    !1) : void 0
                }
                )),
                -1 !== o)
                    return o + 1;
                throw "Unknown name at position " + h
            }, x = function() {
                if (i.charAt(h) !== e.charAt(n))
                    throw "Unexpected literal at position " + h;
                h++
            };
            for (n = 0; e.length > n; n++)
                if (b)
                    "'" !== e.charAt(n) || y("'") ? x() : b = !1;
                else
                    switch (e.charAt(n)) {
                    case "d":
                        _ = w("d");
                        break;
                    case "D":
                        k("D", u, d);
                        break;
                    case "o":
                        v = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = k("M", p, f);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        g = (r = new Date(w("@"))).getFullYear(),
                        m = r.getMonth() + 1,
                        _ = r.getDate();
                        break;
                    case "!":
                        g = (r = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(),
                        m = r.getMonth() + 1,
                        _ = r.getDate();
                        break;
                    case "'":
                        y("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                    }
            if (i.length > h && (a = i.substr(h),
            !/^\s+/.test(a)))
                throw "Extra/unparsed characters found in date: " + a;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)),
            v > -1)
                for (m = 1,
                _ = v; !((o = this._getDaysInMonth(g, m - 1)) >= _); )
                    m++,
                    _ -= o;
            if ((r = this._daylightSavingAdjust(new Date(g,m - 1,_))).getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _)
                throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e)
                return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++,
                i
            }, l = function(t, e, i) {
                var s = "" + e;
                if (h(t))
                    for (; i > s.length; )
                        s = "0" + s;
                return s
            }, c = function(t, e, i, s) {
                return h(t) ? s[e] : i[e]
            }, u = "", d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d)
                        "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else
                        switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime() - new Date(e.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                        }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "", s = !1, n = function(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++,
                s
            };
            for (e = 0; t.length > e; e++)
                if (s)
                    "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else
                    switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
            return i
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat")
                  , s = t.lastVal = t.input ? t.input.val() : null
                  , n = this._getDefaultDate(t)
                  , o = n
                  , a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n
                } catch (r) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(),
                t.drawMonth = t.selectedMonth = o.getMonth(),
                t.drawYear = t.selectedYear = o.getFullYear(),
                t.currentDay = s ? o.getDate() : 0,
                t.currentMonth = s ? o.getMonth() : 0,
                t.currentYear = s ? o.getFullYear() : 0,
                this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var a = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
                    switch (l[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(l[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += 7 * parseInt(l[1], 10);
                        break;
                    case "m":
                    case "M":
                        a += parseInt(l[1], 10),
                        r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                        break;
                    case "y":
                    case "Y":
                        o += parseInt(l[1], 10),
                        r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                    }
                    l = h.exec(i)
                }
                return new Date(o,a,r)
            }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t),
                e
            }(i) : new Date(i.getTime());
            return (a = a && "Invalid Date" == "" + a ? s : a) && (a.setHours(0),
            a.setMinutes(0),
            a.setSeconds(0),
            a.setMilliseconds(0)),
            this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
            t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e
              , n = t.selectedMonth
              , o = t.selectedYear
              , a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(),
            t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(),
            t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(),
            n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths")
              , s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map((function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"),
                        !1
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            }
            ))
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date, B = this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())), Y = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), $ = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), Q = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear;
            if (0 > Z && (Z += 12,
            te--),
            J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth() - U[0] * U[1] + 1,J.getDate())),
                e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te,Z,1)) > e; )
                    0 > --Z && (Z = 11,
                    te--);
            for (t.drawMonth = Z,
            t.drawYear = te,
            i = this._get(t, "prevText"),
            i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te,Z - $,1)), this._getFormatConfig(t)) : i,
            s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>",
            n = this._get(t, "nextText"),
            n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te,Z + $,1)), this._getFormatConfig(t)) : n,
            o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>",
            a = this._get(t, "currentText"),
            r = this._get(t, "gotoCurrent") && t.currentDay ? G : B,
            a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
            h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
            l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "",
            c = parseInt(this._get(t, "firstDay"), 10),
            c = isNaN(c) ? 0 : c,
            u = this._get(t, "showWeek"),
            d = this._get(t, "dayNames"),
            p = this._get(t, "dayNamesMin"),
            f = this._get(t, "monthNames"),
            g = this._get(t, "monthNamesShort"),
            m = this._get(t, "beforeShowDay"),
            _ = this._get(t, "showOtherMonths"),
            v = this._get(t, "selectOtherMonths"),
            b = this._getDefaultDate(t),
            y = "",
            k = 0; U[0] > k; k++) {
                for (x = "",
                this.maxRows = 4,
                C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),
                    I = " ui-corner-all",
                    T = "",
                    X) {
                        if (T += "<div class='ui-datepicker-group",
                        U[1] > 1)
                            switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first",
                                I = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last",
                                I = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle",
                                I = ""
                            }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                    P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                    w = 0; 7 > w; w++)
                        P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M = (w + c) % 7] + "'>" + p[M] + "</span></th>";
                    for (T += P + "</tr></thead><tbody>",
                    S = this._getDaysInMonth(te, Z),
                    te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)),
                    H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7,
                    z = Math.ceil((H + S) / 7),
                    O = X && this.maxRows > z ? this.maxRows : z,
                    this.maxRows = O,
                    A = this._daylightSavingAdjust(new Date(te,Z,1 - H)),
                    N = 0; O > N; N++) {
                        for (T += "<tr>",
                        W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "",
                        w = 0; 7 > w; w++)
                            E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""],
                            L = (F = A.getMonth() !== Z) && !v || !E[0] || Q && Q > A || J && A > J,
                            W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>",
                            A.setDate(A.getDate() + 1),
                            A = this._daylightSavingAdjust(A);
                        T += W + "</tr>"
                    }
                    ++Z > 11 && (Z = 0,
                    te++),
                    x += T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                y += x
            }
            return y += l,
            t._keyEvent = !1,
            y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), _ = this._get(t, "changeYear"), v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !m)
                y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i,
                l = n && n.getFullYear() === i,
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                c = 0; 12 > c; c++)
                    (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>"
            }
            if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")),
            !t.yearshtml)
                if (t.yearshtml = "",
                o || !_)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"),
                    d = (new Date).getFullYear(),
                    f = (p = function(t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }
                    )(u[0]),
                    g = Math.max(f, p(u[1] || "")),
                    f = s ? Math.max(f, s.getFullYear()) : f,
                    g = n ? Math.min(g, n.getFullYear()) : g,
                    t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++)
                        t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>",
                    b += t.yearshtml,
                    t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"),
            v && (b += (!o && m && _ ? "" : "&#xa0;") + y),
            b + "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0)
              , n = t.selectedMonth + ("M" === i ? e : 0)
              , o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0)
              , a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s,n,o)));
            t.selectedDay = a.getDate(),
            t.drawMonth = t.selectedMonth = a.getMonth(),
            t.drawYear = t.selectedYear = a.getFullYear(),
            ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min")
              , s = this._getMinMaxDate(t, "max")
              , n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t,e,1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t)
              , o = this._daylightSavingAdjust(new Date(i,s + (0 > e ? e : n[0] * n[1]),1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"),
            s = (new Date).getFullYear(),
            a = parseInt(i[0], 10),
            r = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (a += s),
            i[1].match(/[+\-].*/) && (r += s)),
            (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay,
            t.currentMonth = t.selectedMonth,
            t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }),
    t.fn.datepicker = function(e) {
        if (!this.length)
            return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick),
        t.datepicker.initialized = !0),
        0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each((function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }
        )) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }
    ,
    t.datepicker = new s,
    t.datepicker.initialized = !1,
    t.datepicker.uuid = (new Date).getTime(),
    t.datepicker.version = "1.12.1",
    t.datepicker,
    t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
            this.options.disabled && (this.options.disabled = !1),
            this._createWrapper(),
            this.element.show().removeAttr("title").appendTo(this.uiDialog),
            this._addClass("ui-dialog-content", "ui-widget-content"),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            this._isOpen = !1,
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(),
            this._destroyOverlay(),
            this.element.removeUniqueId().css(this.originalCss).detach(),
            this.uiDialog.remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, (function() {
                i._trigger("close", e)
            }
            )))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, i) {
            var s = !1
              , n = this.uiDialog.siblings(".ui-front:visible").map((function() {
                return +t(this).css("z-index")
            }
            )).get()
              , o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1),
            s = !0),
            s && !i && this._trigger("focus", e),
            s
        },
        open: function() {
            var e = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0,
            this.opener = t(t.ui.safeActiveElement(this.document[0])),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, (function() {
                e._focusTabbable(),
                e._trigger("focus")
            }
            )),
            this._makeFocusTarget(),
            void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")),
            t.length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(),
            i.call(this),
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
            this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
                        return e.preventDefault(),
                        void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable")
                          , s = i.filter(":first")
                          , n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay((function() {
                            n.trigger("focus")
                        }
                        )),
                        e.preventDefault()) : (this._delay((function() {
                            s.trigger("focus")
                        }
                        )),
                        e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"),
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }),
            this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar),
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(),
                    this.close(t)
                }
            }),
            e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),
            this._addClass(e, "ui-dialog-title"),
            this._title(e),
            this.uiDialogTitlebar.prependTo(this.uiDialog),
            this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>"),
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane),
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
            this._createButtons()
        },
        _createButtons: function() {
            var e = this
              , i = this.options.buttons;
            return this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, (function(i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s,
                s = t.extend({
                    type: "button"
                }, s),
                n = s.click,
                o = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                },
                delete s.click,
                delete s.icon,
                delete s.iconPosition,
                delete s.showLabel,
                delete s.icons,
                "boolean" == typeof s.text && delete s.text,
                t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", (function() {
                    n.apply(e.element[0], arguments)
                }
                ))
            }
            )),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this
              , s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-dragging"),
                    i._blockFrames(),
                    i._trigger("dragStart", s, e(n))
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function(n, o) {
                    var a = o.offset.left - i.document.scrollLeft()
                      , r = o.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    },
                    i._removeClass(t(this), "ui-dialog-dragging"),
                    i._unblockFrames(),
                    i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this
              , s = this.options
              , n = s.resizable
              , o = this.uiDialog.css("position")
              , a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(s, n) {
                    i._addClass(t(this), "ui-dialog-resizing"),
                    i._blockFrames(),
                    i._trigger("resizeStart", s, e(n))
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function(n, o) {
                    var a = i.uiDialog.offset()
                      , r = a.left - i.document.scrollLeft()
                      , h = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(),
                    s.width = i.uiDialog.width(),
                    s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (h >= 0 ? "+" : "") + h,
                        of: i.window
                    },
                    i._removeClass(t(this), "ui-dialog-resizing"),
                    i._unblockFrames(),
                    i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(e) {
                    this._makeFocusTarget(),
                    this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(),
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var e = this._trackingInstances()
              , i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [],
            this.document.data("ui-dialog-instances", t)),
            t
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this
              , s = !1
              , n = {};
            t.each(e, (function(t, e) {
                i._setOption(t, e),
                t in i.sizeRelatedOptions && (s = !0),
                t in i.resizableRelatedOptions && (n[t] = e)
            }
            )),
            s && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function(e, i) {
            var s, n, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i),
            "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === e && this._createButtons(),
            "closeText" === e && this.uiDialogTitlebarClose.button({
                label: t("<a>").text("" + this.options.closeText).html()
            }),
            "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"),
            !s && i && this._makeDraggable()),
            "position" === e && this._position(),
            "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"),
            n && "string" == typeof i && o.resizable("option", "handles", i),
            n || !1 === i || this._makeResizable()),
            "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            s.minWidth > s.width && (s.width = s.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(),
            e = Math.max(0, s.minHeight - t),
            i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none",
            "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map((function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            }
            ))
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay((function() {
                    e = !1
                }
                )),
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(),
                        this._trackingInstances()[0]._focusTabbable())
                    }
                }),
                this.overlay = t("<div>").appendTo(this._appendTo()),
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }),
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"),
                this.document.removeData("ui-dialog-overlays")),
                this.overlay.remove(),
                this.overlay = null
            }
        }
    }),
    !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(),
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments)
        }
    }),
    t.ui.dialog,
    t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            this.valueDiv = t("<div>").appendTo(this.element),
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t),
            void this._refreshValue())
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value),
            this.indeterminate = !1 === t,
            "number" != typeof t && (t = 0),
            !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value,
            this._super(t),
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)),
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"),
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== e && (this.oldValue = e,
            this._trigger("change")),
            e === this.options.max && this._trigger("complete")
        }
    }),
    t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            },
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            this._rendered = !1,
            this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button),
            this._on(this.labels, {
                click: function(t) {
                    this.button.focus(),
                    t.preventDefault()
                }
            }),
            this.element.hide(),
            this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element),
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
            e = t("<span>").appendTo(this.button),
            this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
            this.buttonItem = this._renderButtonItem(s).appendTo(this.button),
            !1 !== this.options.width && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", (function() {
                i._rendered || i._refreshMenu()
            }
            ))
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }),
            this.menuWrap = t("<div>").append(this.menu),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(),
                    e._setSelection(),
                    e._select(i.item.data("ui-selectmenu-item"), t)
                },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: s
                    }),
                    e.isOpen || e._select(s, t)),
                    e.focusIndex = s.index,
                    e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"),
            this.menuInstance._off(this.menu, "mouseleave"),
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }
            ,
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(),
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})),
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(),
            this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),
            this._rendered = !0,
            e.length && (t = this._getSelectedItem(),
            this.menuInstance.focus(null, t),
            this._setAria(t.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
            this.menuItems.length && (this.isOpen = !0,
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", t)))
        },
        _position: function() {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1,
            this._toggleAttr(),
            this.range = null,
            this._off(this.document),
            this._trigger("close", t))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label),
            this._addClass(i, "ui-selectmenu-text"),
            i
        },
        _renderMenu: function(e, i) {
            var s = this
              , n = "";
            t.each(i, (function(i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", {
                    text: o.optgroup
                }),
                s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                a.appendTo(e),
                n = o.optgroup),
                s._renderItemData(e, o)
            }
            ))
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function(e, i) {
            var s = t("<li>")
              , n = t("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"),
            this._setText(n, i.label),
            s.append(n).appendTo(e)
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
            n += ":not(.ui-state-disabled)"),
            (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(),
            t.addRange(this.range)) : this.range.select(),
            this.button.focus())
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            },
            click: function(t) {
                this._setSelection(),
                this._toggle(t)
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                case t.ui.keyCode.TAB:
                case t.ui.keyCode.ESCAPE:
                    this.close(e),
                    i = !1;
                    break;
                case t.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(e);
                    break;
                case t.ui.keyCode.UP:
                    e.altKey ? this._toggle(e) : this._move("prev", e);
                    break;
                case t.ui.keyCode.DOWN:
                    e.altKey ? this._toggle(e) : this._move("next", e);
                    break;
                case t.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this._move("prev", e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this._move("next", e);
                    break;
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.PAGE_UP:
                    this._move("first", e);
                    break;
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_DOWN:
                    this._move("last", e);
                    break;
                default:
                    this.menu.trigger(e),
                    i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index,
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)),
            this._setAria(t),
            this._trigger("select", e, {
                item: t
            }),
            t.index !== i && this._trigger("change", e, {
                item: t
            }),
            this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }),
            this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t ? (this.button.attr("tabindex", -1),
            this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e && e[0] || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(),
            this.element.hide()),
            void this.button.outerWidth(t))
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"),
            t
        },
        _parseOptions: function(e) {
            var i = this
              , s = [];
            e.each((function(e, n) {
                s.push(i._parseOption(t(n), e))
            }
            )),
            this.items = s
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element)
        }
    }]),
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
            this._refresh(),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), a = [];
            for (i = s.values && s.values.length || 1,
            n.length > i && (n.slice(i).remove(),
            n = n.slice(0, i)),
            e = n.length; i > e; e++)
                a.push("<span tabindex='0'></span>");
            this.handles = n.add(t(a.join("")).appendTo(this.element)),
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
            this.handle = this.handles.eq(0),
            this.handles.each((function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            }
            ))
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, h, l, c = this, u = this.options;
            return !u.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            i = {
                x: e.pageX,
                y: e.pageY
            },
            s = this._normValueFromMouse(i),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each((function(e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i,
                o = t(this),
                a = e)
            }
            )),
            !1 !== this._start(e, a) && (this._mouseSliding = !0,
            this._handleIndex = a,
            this._addClass(o, null, "ui-state-active"),
            o.trigger("focus"),
            h = o.offset(),
            l = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - o.width() / 2,
                top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width,
            i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            (s = i / e) > 1 && (s = 1),
            0 > s && (s = 0),
            "vertical" === this.orientation && (s = 1 - s),
            n = this._valueMax() - this._valueMin(),
            o = this._valueMin() + s * n,
            this._trimAlignValue(o)
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t),
            s.values = i || this.values()),
            s
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var n, o = this.value(), a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1),
            o = this.values(e),
            2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
            a[e] = i),
            i !== o && (!1 !== this._trigger("slide", t, this._uiHash(e, i, a)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e,
            this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i),
                this._refreshValue(),
                void this._change(null, e);
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values,
            n = arguments[0],
            o = 0; s.length > o; o += 1)
                s[o] = this._trimAlignValue(n[o]),
                this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (n = this.options.values.length),
            this._super(e, i),
            e) {
            case "orientation":
                this._detectOrientation(),
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(i),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                s = n - 1; s >= 0; s--)
                    this._change(null, s);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0,
                this._calculateNewMax(),
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length)
                return e = this.options.values[t],
                this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(),
                s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1
              , i = (t - this._valueMin()) % e
              , s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
            parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max
              , e = this._valueMin()
              , i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
            this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = "" + t
              , i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }),
            "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range, r = this.options, h = this, l = !this._animateOff && r.animate, c = {};
            this._hasMultipleValues() ? this.handles.each((function(s) {
                i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100,
                c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%",
                t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate),
                !0 === h.options.range && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                e = i
            }
            )) : (s = this.value(),
            n = this._valueMin(),
            o = this._valueMax(),
            i = o !== n ? (s - n) / (o - n) * 100 : 0,
            c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate),
            "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate),
            "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate),
            "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate),
            "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (e.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    this._addClass(t(e.target), null, "ui-state-active"),
                    !1 === this._start(e, a)))
                        return
                }
                switch (o = this.options.step,
                s = n = this._hasMultipleValues() ? this.values(a) : this.value(),
                e.keyCode) {
                case t.ui.keyCode.HOME:
                    n = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    n = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (s === this._valueMax())
                        return;
                    n = this._trimAlignValue(s + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (s === this._valueMin())
                        return;
                    n = this._trimAlignValue(s - o)
                }
                this._slide(e, a, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, i),
                this._change(e, i),
                this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }),
    t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            "" !== this.value() && this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = this._super()
              , i = this.element;
            return t.each(["min", "max", "step"], (function(t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n)
            }
            )),
            e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(),
                this._refresh(),
                void (this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay((function() {
                        this.spinning && this._stop(t)
                    }
                    ), 100),
                    t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"),
                    this.previous = s,
                    this._delay((function() {
                        this.previous = s
                    }
                    )))
                }
                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(),
                e.preventDefault(),
                i.call(this),
                this.cancelBlur = !0,
                this._delay((function() {
                    delete this.cancelBlur,
                    i.call(this)
                }
                )),
                !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance(),
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
            this._addClass("ui-spinner-input"),
            this.element.attr("role", "spinbutton"),
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }),
            this._removeClass(this.buttons, "ui-corner-all"),
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }),
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }),
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(e) {
            var i = this.options
              , s = t.ui.keyCode;
            switch (e.keyCode) {
            case s.UP:
                return this._repeat(null, 1, e),
                !0;
            case s.DOWN:
                return this._repeat(null, -1, e),
                !0;
            case s.PAGE_UP:
                return this._repeat(null, i.page, e),
                !0;
            case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e),
                !0
            }
            return !1
        },
        _start: function(t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0)
        },
        _repeat: function(t, e, i) {
            t = t || 500,
            clearTimeout(this.timer),
            this.timer = this._delay((function() {
                this._repeat(40, e, i)
            }
            ), t),
            this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + t * this._increment(this.counter)),
            this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i),
            this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = "" + t
              , i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return i = t - (e = null !== s.min ? s.min : 0),
            t = e + (i = Math.round(i / s.step) * s.step),
            t = parseFloat(t.toFixed(this._precision())),
            null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()),
            this.options[t] = e,
            void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
            "icons" === t && (s = this.buttons.first().find(".ui-icon"),
            this._removeClass(s, null, this.options.icons.up),
            this._addClass(s, null, e.up),
            n = this.buttons.last().find(".ui-icon"),
            this._removeClass(n, null, this.options.icons.down),
            this._addClass(n, null, e.down)),
            void this._super(t, e))
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
            this.element.prop("disabled", !!t),
            this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: r((function(t) {
            this._super(t)
        }
        )),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
            "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function(t, e) {
            var i;
            "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)),
            t = this._format(i))),
            this.element.val(t),
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: r((function(t) {
            this._stepUp(t)
        }
        )),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step),
            this._stop())
        },
        stepDown: r((function(t) {
            this._stepDown(t)
        }
        )),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step),
            this._stop())
        },
        pageUp: r((function(t) {
            this._stepUp((t || 1) * this.options.page)
        }
        )),
        pageDown: r((function(t) {
            this._stepDown((t || 1) * this.options.page)
        }
        )),
        value: function(t) {
            return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    }),
    !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    }),
    t.ui.spinner,
    t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""),
                s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (n) {}
                try {
                    s = decodeURIComponent(s)
                } catch (n) {}
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function() {
            var e = this
              , i = this.options;
            this.running = !1,
            this._addClass("ui-tabs", "ui-widget ui-widget-content"),
            this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
            this._processTabs(),
            i.active = this._initialActive(),
            t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), (function(t) {
                return e.tabs.index(t)
            }
            )))).sort()),
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(),
            this._refresh(),
            this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active
              , i = this.options.collapsible
              , s = location.hash.substring(1);
            return null === e && (s && this.tabs.each((function(i, n) {
                return t(n).attr("aria-controls") === s ? (e = i,
                !1) : void 0
            }
            )),
            null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null === e || -1 === e) && (e = !!this.tabs.length && 0)),
            !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)),
            !i && !1 === e && this.anchors.length && (e = 0),
            e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li")
              , s = this.tabs.index(i)
              , n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                    s++;
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                    n = !1,
                    s--;
                    break;
                case t.ui.keyCode.END:
                    s = this.anchors.length - 1;
                    break;
                case t.ui.keyCode.HOME:
                    s = 0;
                    break;
                case t.ui.keyCode.SPACE:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(s);
                case t.ui.keyCode.ENTER:
                    return e.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(s !== this.options.active && s);
                default:
                    return
                }
                e.preventDefault(),
                clearTimeout(this.activating),
                s = this._focusNextTab(s, n),
                e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"),
                this.tabs.eq(s).attr("aria-selected", "true"),
                this.activating = this._delay((function() {
                    this.option("active", s)
                }
                ), this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(e, i) {
            for (var n = this.tabs.length - 1; -1 !== t.inArray((e > n && (e = 0),
            0 > e && (e = n),
            e), this.options.disabled); )
                e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).trigger("focus"),
            t
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e),
            "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e),
            e || !1 !== this.options.active || this._activate(0)),
            "event" === t && this._setupEvents(e),
            void ("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options
              , i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), (function(t) {
                return i.index(t)
            }
            )),
            this._processTabs(),
            !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1,
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1,
            this.active = t()),
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this
              , i = this.tabs
              , s = this.anchors
              , n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"),
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
            this.tablist.on("mousedown" + this.eventNamespace, "> li", (function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }
            )).on("focus" + this.eventNamespace, ".ui-tabs-anchor", (function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }
            )),
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }),
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
            this.anchors = this.tabs.map((function() {
                return t("a", this)[0]
            }
            )).attr({
                role: "presentation",
                tabIndex: -1
            }),
            this._addClass(this.anchors, "ui-tabs-anchor"),
            this.panels = t(),
            this.anchors.each((function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"), h = t(s).closest("li"), l = h.attr("aria-controls");
                e._isLocal(s) ? (a = (n = s.hash).substring(1),
                o = e.element.find(e._sanitizeSelector(n))) : (n = "#" + (a = h.attr("aria-controls") || t({}).uniqueId()[0].id),
                (o = e.element.find(n)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist),
                o.attr("aria-live", "polite")),
                o.length && (e.panels = e.panels.add(o)),
                l && h.data("ui-tabs-aria-controls", l),
                h.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }),
                o.attr("aria-labelledby", r)
            }
            )),
            this.panels.attr("role", "tabpanel"),
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
            i && (this._off(i.not(this.tabs)),
            this._off(s.not(this.anchors)),
            this._off(n.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1),
            n = 0; s = this.tabs[n]; n++)
                i = t(s),
                !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"),
                this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"),
                this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e,
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), (function(t, e) {
                i[e] = "_eventHandler"
            }
            )),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each((function() {
                var e = t(this)
                  , s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }
            )),
            this.element.children().not(this.panels).each((function() {
                i -= t(this).outerHeight(!0)
            }
            )),
            this.panels.each((function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }
            )).css("overflow", "auto")) : "auto" === e && (i = 0,
            this.panels.each((function() {
                i = Math.max(i, t(this).height("").height())
            }
            )).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options
              , s = this.active
              , o = t(e.currentTarget).closest("li")
              , a = o[0] === s[0]
              , r = a && i.collapsible
              , h = r ? t() : this._getPanelForTab(o)
              , l = s.length ? this._getPanelForTab(s) : t()
              , c = {
                oldTab: s,
                oldPanel: l,
                newTab: r ? t() : o,
                newPanel: h
            };
            e.preventDefault(),
            o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !r && this.tabs.index(o),
            this.active = a ? t() : o,
            this.xhr && this.xhr.abort(),
            l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            h.length && this.load(this.tabs.index(o), e),
            this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1,
                o._trigger("activate", e, i)
            }
            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(),
                s())
            }
            var o = this
              , a = i.newPanel
              , r = i.oldPanel;
            this.running = !0,
            r.length && this.options.hide ? this._hide(r, this.options.hide, (function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                n()
            }
            )) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            r.hide(),
            n()),
            r.attr("aria-hidden", "true"),
            i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter((function() {
                return 0 === t(this).attr("tabIndex")
            }
            )).attr("tabIndex", -1),
            a.attr("aria-hidden", "false"),
            i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active),
            i = s.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))),
            e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.tablist.removeAttr("role").off(this.eventNamespace),
            this.anchors.removeAttr("role tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each((function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }
            )),
            this.tabs.each((function() {
                var e = t(this)
                  , i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }
            )),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e),
            i = t.isArray(i) ? t.map(i, (function(t) {
                return t !== e ? t : null
            }
            )) : t.map(this.tabs, (function(t, i) {
                return i !== e ? i : null
            }
            ))),
            this._setOptionDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e)
                    i = !0;
                else {
                    if (e = this._getIndex(e),
                    -1 !== t.inArray(e, i))
                        return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this
              , n = this.tabs.eq(e)
              , o = n.find(".ui-tabs-anchor")
              , a = this._getPanelForTab(n)
              , r = {
                tab: n,
                panel: a
            }
              , h = function(t, e) {
                "abort" === e && s.panels.stop(!1, !0),
                s._removeClass(n, "ui-tabs-loading"),
                a.removeAttr("aria-busy"),
                t === s.xhr && delete s.xhr
            };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)),
            this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"),
            a.attr("aria-busy", "true"),
            this.xhr.done((function(t, e, n) {
                setTimeout((function() {
                    a.html(t),
                    s._trigger("load", i, r),
                    h(n, e)
                }
                ), 1)
            }
            )).fail((function(t, e) {
                setTimeout((function() {
                    h(t, e)
                }
                ), 1)
            }
            ))))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }),
    !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments),
            this._addClass(this.tabs, "ui-tab")
        }
    }),
    t.ui.tabs,
    t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i),
            e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id")
              , s = (e.attr("aria-describedby") || "").split(/\s+/)
              , n = t.inArray(i, s);
            -1 !== n && s.splice(n, 1),
            e.removeData("ui-tooltip-id"),
            (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this.disabledTitles = t([])
        },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i),
            "content" === e && t.each(this.tooltips, (function(t, e) {
                s._updateContent(e.element)
            }
            ))
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, (function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0],
                e.close(n, !0)
            }
            )),
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function() {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
            }
            )))
        },
        _enable: function() {
            this.disabledTitles.each((function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }
            )),
            this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this
              , s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
            s.data("ui-tooltip-open", !0),
            e && "mouseover" === e.type && s.parents().each((function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this,
                i.close(e, !0)),
                s.attr("title") && (s.uniqueId(),
                i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                },
                s.attr("title", ""))
            }
            )),
            this._registerCloseHandlers(e, s),
            this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content, n = this, o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : void ((i = s.call(t[0], (function(i) {
                n._delay((function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o),
                    this._open(e, t, i))
                }
                ))
            }
            ))) && this._open(e, t, i))
        },
        _open: function(e, i, s) {
            function n(t) {
                l.of = t,
                a.is(":hidden") || a.position(l)
            }
            var o, a, r, h, l = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i))
                    return void o.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
                o = this._tooltip(i),
                a = o.tooltip,
                this._addDescribedBy(i, a.attr("id")),
                a.find(".ui-tooltip-content").html(s),
                this.liveRegion.children().hide(),
                (h = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),
                h.removeAttr("id").find("[id]").removeAttr("id"),
                h.appendTo(this.liveRegion),
                this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: n
                }),
                n(e)) : a.position(t.extend({
                    of: i
                }, this.options.position)),
                a.hide(),
                this._show(a, this.options.show),
                this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval((function() {
                    a.is(":visible") && (n(l.of),
                    clearInterval(r))
                }
                ), t.fx.interval)),
                this._trigger("open", e, {
                    tooltip: a
                })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0],
                        this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }
            ),
            e && "mouseover" !== e.type || (s.mouseleave = "close"),
            e && "focusin" !== e.type || (s.focusout = "close"),
            this._on(!0, i, s)
        },
        close: function(e) {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
            return o ? (i = o.tooltip,
            void (o.closing || (clearInterval(this.delayedShow),
            n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")),
            this._removeDescribedBy(n),
            o.hiding = !0,
            i.stop(!0),
            this._hide(i, this.options.hide, (function() {
                s._removeTooltip(t(this))
            }
            )),
            n.removeData("ui-tooltip-open"),
            this._off(n, "mouseleave focusout keyup"),
            n[0] !== this.element[0] && this._off(n, "remove"),
            this._off(this.document, "mousemove"),
            e && "mouseleave" === e.type && t.each(this.parents, (function(e, i) {
                t(i.element).attr("title", i.title),
                delete s.parents[e]
            }
            )),
            o.closing = !0,
            this._trigger("close", e, {
                tooltip: i
            }),
            o.hiding || (o.closing = !1)))) : void n.removeData("ui-tooltip-open")
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip")
              , s = t("<div>").appendTo(i)
              , n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"),
            this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
            i.appendTo(this._appendTo(e)),
            this.tooltips[n] = {
                element: e,
                tooltip: i
            }
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        },
        _removeTooltip: function(t) {
            t.remove(),
            delete this.tooltips[t.attr("id")]
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body),
            e
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, (function(i, s) {
                var n = t.Event("blur")
                  , o = s.element;
                n.target = n.currentTarget = o[0],
                e.close(n, !0),
                t("#" + i).remove(),
                o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                o.removeData("ui-tooltip-title"))
            }
            )),
            this.liveRegion.remove()
        }
    }),
    !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass),
            t
        }
    }),
    t.ui.tooltip;
    var f = "ui-effects-"
      , g = "ui-effects-style"
      , m = "ui-effects-animated"
      , _ = t;
    t.effects = {
        effect: {}
    },
    function(t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t),
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }
        function s(i) {
            var s = l()
              , n = s._rgba = [];
            return i = i.toLowerCase(),
            f(h, (function(t, o) {
                var a, r = o.re.exec(i), h = r && o.parse(r), l = o.space || "rgba";
                return h ? (a = s[l](h),
                s[c[l].cache] = a[c[l].cache],
                n = s._rgba = a._rgba,
                !1) : e
            }
            )),
            n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent),
            s) : o[i]
        }
        function n(t, e, i) {
            return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var o, r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], l = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e,i,s,n)
        }
        , c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = l.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)",
        d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
        f(c, (function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }
        )),
        l.fn = t.extend(l.prototype, {
            parse: function(n, a, r, h) {
                if (n === e)
                    return this._rgba = [null, null, null, null],
                    this;
                (n.jquery || n.nodeType) && (n = t(n).css(a),
                a = e);
                var u = this
                  , d = t.type(n)
                  , p = this._rgba = [];
                return a !== e && (n = [n, a, r, h],
                d = "array"),
                "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, (function(t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }
                )),
                this) : "object" === d ? (f(c, n instanceof l ? function(t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }
                : function(e, s) {
                    var o = s.cache;
                    f(s.props, (function(t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t])
                                return;
                            u[o] = s.to(u._rgba)
                        }
                        u[o][e.idx] = i(n[t], e, !0)
                    }
                    )),
                    u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1,
                    s.from && (u._rgba = s.from(u[o])))
                }
                ),
                this) : e
            },
            is: function(t) {
                var i = l(t)
                  , s = !0
                  , n = this;
                return f(c, (function(t, o) {
                    var a, r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [],
                    f(o.props, (function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                    }
                    ))),
                    s
                }
                )),
                s
            },
            _space: function() {
                var t = []
                  , e = this;
                return f(c, (function(i, s) {
                    e[s.cache] && t.push(i)
                }
                )),
                t.pop()
            },
            transition: function(t, e) {
                var s = l(t)
                  , n = s._space()
                  , o = c[n]
                  , a = 0 === this.alpha() ? l("transparent") : this
                  , r = a[o.cache] || o.to(a._rgba)
                  , h = r.slice();
                return s = s[o.cache],
                f(o.props, (function(t, n) {
                    var o = n.idx
                      , a = r[o]
                      , l = s[o]
                      , c = u[n.type] || {};
                    null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)),
                    h[o] = i((l - a) * e + a, n)))
                }
                )),
                this[n](h)
            },
            blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , s = i.pop()
                  , n = l(e)._rgba;
                return l(t.map(i, (function(t, e) {
                    return (1 - s) * n[e] + s * t
                }
                )))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , i = t.map(this._rgba, (function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                }
                ));
                return 1 === i[3] && (i.pop(),
                e = "rgb("),
                e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , i = t.map(this.hsla(), (function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                }
                ));
                return 1 === i[3] && (i.pop(),
                e = "hsl("),
                e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice()
                  , s = i.pop();
                return e && i.push(~~(255 * s)),
                "#" + t.map(i, (function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                }
                )).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        l.fn.parse.prototype = l.fn,
        c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240,
            i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c),
            [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }
        ,
        c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360
              , i = t[1]
              , s = t[2]
              , o = t[3]
              , a = .5 >= s ? s * (1 + i) : s + i - s * i
              , r = 2 * s - a;
            return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
        }
        ,
        f(c, (function(s, n) {
            var o = n.props
              , a = n.cache
              , h = n.to
              , c = n.from;
            l.fn[s] = function(s) {
                if (h && !this[a] && (this[a] = h(this._rgba)),
                s === e)
                    return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return f(o, (function(t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]),
                    d[e.idx] = i(s, e)
                }
                )),
                c ? ((n = l(c(d)))[a] = d,
                n) : l(d)
            }
            ,
            f(o, (function(e, i) {
                l.fn[e] || (l.fn[e] = function(n) {
                    var o, a = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c),
                    a = t.type(n)),
                    null == n && i.empty ? this : ("string" === a && ((o = r.exec(n)) && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))),
                    l[i.idx] = n,
                    this[h](l)))
                }
                )
            }
            ))
        }
        )),
        l.hook = function(e) {
            var i = e.split(" ");
            f(i, (function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, n) {
                        var o, a, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = l(o || n),
                            !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; )
                                    try {
                                        r = t.css(a, "backgroundColor"),
                                        a = a.parentNode
                                    } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (h) {}
                    }
                },
                t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i),
                    e.end = l(e.end),
                    e.colorInit = !0),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            }
            ))
        }
        ,
        l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], (function(i, s) {
                    e["border" + s + "Color"] = t
                }
                )),
                e
            }
        },
        o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(_),
    function() {
        function e(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    "string" == typeof n[i = n[s]] && (o[t.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (o[i] = n[i]);
            return o
        }
        function i(e, i) {
            var s, o, a = {};
            for (s in i)
                o = i[s],
                e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
            return a
        }
        var s = ["add", "remove", "toggle"]
          , n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], (function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (_.style(t.elem, i, t.end),
                t.setAttr = !0)
            }
        }
        )),
        t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
        ),
        t.effects.animateClass = function(n, o, a, r) {
            var h = t.speed(o, a, r);
            return this.queue((function() {
                var o, a = t(this), r = a.attr("class") || "", l = h.children ? a.find("*").addBack() : a;
                l = l.map((function() {
                    return {
                        el: t(this),
                        start: e(this)
                    }
                }
                )),
                (o = function() {
                    t.each(s, (function(t, e) {
                        n[e] && a[e + "Class"](n[e])
                    }
                    ))
                }
                )(),
                l = l.map((function() {
                    return this.end = e(this.el[0]),
                    this.diff = i(this.start, this.end),
                    this
                }
                )),
                a.attr("class", r),
                l = l.map((function() {
                    var e = this
                      , i = t.Deferred()
                      , s = t.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s),
                    i.promise()
                }
                )),
                t.when.apply(t, l.get()).done((function() {
                    o(),
                    t.each(arguments, (function() {
                        var e = this.el;
                        t.each(this.diff, (function(t) {
                            e.css(t, "")
                        }
                        ))
                    }
                    )),
                    h.complete.call(a[0])
                }
                ))
            }
            ))
        }
        ,
        t.fn.extend({
            addClass: function(e) {
                return function(i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(i, s, n, o, a) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                        add: i
                    } : {
                        remove: i
                    }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, s, n, o)
                }
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, o)
            }
        })
    }(),
    function() {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e,
            e = e.effect),
            e = {
                effect: e
            },
            null == i && (i = {}),
            t.isFunction(i) && (n = i,
            s = null,
            i = {}),
            ("number" == typeof i || t.fx.speeds[i]) && (n = s,
            s = i,
            i = {}),
            t.isFunction(s) && (n = s,
            s = null),
            i && t.extend(e, i),
            s = s || i.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
            e.complete = n || i.complete,
            e
        }
        function i(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
        }
        function s(t, e) {
            var i = e.outerWidth()
              , s = e.outerHeight()
              , o = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            }
        }
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
            return function(i) {
                return !!t(i).data(m) || e(i)
            }
        }(t.expr.filters.animated)),
        !1 !== t.uiBackCompat && t.extend(t.effects, {
            save: function(t, e) {
                for (var i = 0, s = e.length; s > i; i++)
                    null !== e[i] && t.data(f + e[i], t[0].style[e[i]])
            },
            restore: function(t, e) {
                for (var i, s = 0, n = e.length; n > s; s++)
                    null !== e[s] && (i = t.data(f + e[s]),
                    t.css(e[s], i))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                e
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }
                  , s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , n = {
                    width: e.width(),
                    height: e.height()
                }
                  , o = document.activeElement;
                try {
                    o.id
                } catch (a) {
                    o = document.body
                }
                return e.wrap(s),
                (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                s = e.parent(),
                "static" === e.css("position") ? (s.css({
                    position: "relative"
                }),
                e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }),
                t.each(["top", "left", "bottom", "right"], (function(t, s) {
                    i[s] = e.css(s),
                    isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }
                )),
                e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(n),
                s.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")),
                e
            }
        }),
        t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, i, s) {
                return s || (s = i,
                i = "effect"),
                t.effects.effect[e] = s,
                t.effects.effect[e].mode = i,
                s
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var s = "horizontal" !== i ? (e || 100) / 100 : 1
                  , n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                }
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            },
            unshift: function(t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))),
                t.dequeue()
            },
            saveStyle: function(t) {
                t.data(g, t[0].style.cssText)
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data(g) || "",
                t.removeData(g)
            },
            mode: function(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"),
                (i ? "hide" === e : "show" === e) && (e = "none"),
                e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createPlaceholder: function(e) {
                var i, s = e.css("position"), n = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),
                /^(static|relative)/.test(s) && (s = "absolute",
                i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),
                e.data(f + "placeholder", i)),
                e.css({
                    position: s,
                    left: n.left,
                    top: n.top
                }),
                i
            },
            removePlaceholder: function(t) {
                var e = f + "placeholder"
                  , i = t.data(e);
                i && (i.remove(),
                t.removeData(e))
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e),
                t.effects.removePlaceholder(e)
            },
            setTransition: function(e, i, s, n) {
                return n = n || {},
                t.each(i, (function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }
                )),
                n
            }
        }),
        t.fn.extend({
            effect: function() {
                function i(e) {
                    function a() {
                        t.isFunction(h) && h.call(r[0]),
                        t.isFunction(e) && e()
                    }
                    var r = t(this);
                    s.mode = c.shift(),
                    !1 === t.uiBackCompat || o ? "none" === s.mode ? (r[l](),
                    a()) : n.call(r[0], s, (function() {
                        r.removeData(m),
                        t.effects.cleanUp(r),
                        "hide" === s.mode && r.hide(),
                        a()
                    }
                    )) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](),
                    a()) : n.call(r[0], s, a)
                }
                var s = e.apply(this, arguments)
                  , n = t.effects.effect[s.effect]
                  , o = n.mode
                  , a = s.queue
                  , r = a || "fx"
                  , h = s.complete
                  , l = s.mode
                  , c = []
                  , u = function(e) {
                    var i = t(this)
                      , s = t.effects.mode(i, l) || o;
                    i.data(m, !0),
                    c.push(s),
                    o && ("show" === s || s === o && "hide" === s) && i.show(),
                    o && "none" === s || t.effects.saveStyle(i),
                    t.isFunction(e) && e()
                };
                return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each((function() {
                    h && h.call(this)
                }
                )) : !1 === a ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
            },
            show: function(t) {
                return function(s) {
                    if (i(s))
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show",
                    this.effect.call(this, n)
                }
            }(t.fn.show),
            hide: function(t) {
                return function(s) {
                    if (i(s))
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide",
                    this.effect.call(this, n)
                }
            }(t.fn.hide),
            toggle: function(t) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s)
                        return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle",
                    this.effect.call(this, n)
                }
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e)
                  , s = [];
                return t.each(["em", "px", "%", "pt"], (function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }
                )),
                s
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
            },
            transfer: function(e, i) {
                var s = t(this)
                  , n = t(e.to)
                  , o = "fixed" === n.css("position")
                  , a = t("body")
                  , r = o ? a.scrollTop() : 0
                  , h = o ? a.scrollLeft() : 0
                  , l = n.offset()
                  , c = {
                    top: l.top - r,
                    left: l.left - h,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                }
                  , u = s.offset()
                  , d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: u.top - r,
                    left: u.left - h,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, (function() {
                    d.remove(),
                    t.isFunction(i) && i()
                }
                ))
            }
        }),
        t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(),
            "string" == typeof e.end && (e.end = s(e.end, e.elem)),
            e.clipInit = !0),
            t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(),
    function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], (function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }
        )),
        t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }),
        t.each(e, (function(e, i) {
            t.easing["easeIn" + e] = i,
            t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }
            ,
            t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        }
        ))
    }();
    t.effects;
    t.effects.define("blind", "hide", (function(e, i) {
        var s = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , n = t(this)
          , o = e.direction || "up"
          , a = n.cssClip()
          , r = {
            clip: t.extend({}, a)
        }
          , h = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]],
        "show" === e.mode && (n.cssClip(r.clip),
        h && h.css(t.effects.clipToBox(r)),
        r.clip = a),
        h && h.animate(t.effects.clipToBox(r), e.duration, e.easing),
        n.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
    )),
    t.effects.define("bounce", (function(e, i) {
        var s, n, o, a = t(this), r = e.mode, h = "hide" === r, l = "show" === r, c = e.direction || "up", u = e.distance, d = e.times || 5, p = 2 * d + (l || h ? 1 : 0), f = e.duration / p, g = e.easing, m = "up" === c || "down" === c ? "top" : "left", _ = "up" === c || "left" === c, v = 0, b = a.queue().length;
        for (t.effects.createPlaceholder(a),
        o = a.css(m),
        u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3),
        l && ((n = {
            opacity: 1
        })[m] = o,
        a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)),
        h && (u /= Math.pow(2, d - 1)),
        (n = {})[m] = o; d > v; v++)
            (s = {})[m] = (_ ? "-=" : "+=") + u,
            a.animate(s, f, g).animate(n, f, g),
            u = h ? 2 * u : u / 2;
        h && ((s = {
            opacity: 0
        })[m] = (_ ? "-=" : "+=") + u,
        a.animate(s, f, g)),
        a.queue(i),
        t.effects.unshift(a, b, p + 1)
    }
    )),
    t.effects.define("clip", "hide", (function(e, i) {
        var s, n = {}, o = t(this), a = e.direction || "vertical", r = "both" === a, h = r || "horizontal" === a, l = r || "vertical" === a;
        s = o.cssClip(),
        n.clip = {
            top: l ? (s.bottom - s.top) / 2 : s.top,
            right: h ? (s.right - s.left) / 2 : s.right,
            bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
            left: h ? (s.right - s.left) / 2 : s.left
        },
        t.effects.createPlaceholder(o),
        "show" === e.mode && (o.cssClip(n.clip),
        n.clip = s),
        o.animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
    )),
    t.effects.define("drop", "hide", (function(e, i) {
        var s, n = t(this), a = "show" === e.mode, r = e.direction || "left", h = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=", c = "+=" === l ? "-=" : "+=", u = {
            opacity: 0
        };
        t.effects.createPlaceholder(n),
        s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2,
        u[h] = l + s,
        a && (n.css(u),
        u[h] = c + s,
        u.opacity = 1),
        n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
    )),
    t.effects.define("explode", "hide", (function(e, i) {
        function s() {
            b.push(this),
            b.length === u * d && (p.css({
                visibility: "visible"
            }),
            t(b).remove(),
            i())
        }
        var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), g = "show" === e.mode, m = p.show().css("visibility", "hidden").offset(), _ = Math.ceil(p.outerWidth() / d), v = Math.ceil(p.outerHeight() / u), b = [];
        for (o = 0; u > o; o++)
            for (h = m.top + o * v,
            c = o - (u - 1) / 2,
            a = 0; d > a; a++)
                r = m.left + a * _,
                l = a - (d - 1) / 2,
                p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * _,
                    top: -o * v
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: _,
                    height: v,
                    left: r + (g ? l * _ : 0),
                    top: h + (g ? c * v : 0),
                    opacity: g ? 0 : 1
                }).animate({
                    left: r + (g ? 0 : l * _),
                    top: h + (g ? 0 : c * v),
                    opacity: g ? 1 : 0
                }, e.duration || 500, e.easing, s)
    }
    )),
    t.effects.define("fade", "toggle", (function(e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({
            opacity: s ? 1 : 0
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
    )),
    t.effects.define("fold", "hide", (function(e, i) {
        var s = t(this)
          , n = e.mode
          , o = "show" === n
          , a = "hide" === n
          , r = e.size || 15
          , h = /([0-9]+)%/.exec(r)
          , c = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"]
          , u = e.duration / 2
          , d = t.effects.createPlaceholder(s)
          , p = s.cssClip()
          , f = {
            clip: t.extend({}, p)
        }
          , g = {
            clip: t.extend({}, p)
        }
          , m = [p[c[0]], p[c[1]]]
          , _ = s.queue().length;
        h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]),
        f.clip[c[0]] = r,
        g.clip[c[0]] = r,
        g.clip[c[1]] = 0,
        o && (s.cssClip(g.clip),
        d && d.css(t.effects.clipToBox(g)),
        g.clip = p),
        s.queue((function(i) {
            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing),
            i()
        }
        )).animate(f, u, e.easing).animate(g, u, e.easing).queue(i),
        t.effects.unshift(s, _, 4)
    }
    )),
    t.effects.define("highlight", "show", (function(e, i) {
        var s = t(this)
          , n = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === e.mode && (n.opacity = 0),
        t.effects.saveStyle(s),
        s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(n, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
    )),
    t.effects.define("size", (function(e, i) {
        var s, n, o, a = t(this), r = ["fontSize"], h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], c = e.mode, u = "effect" !== c, d = e.scale || "both", p = e.origin || ["middle", "center"], f = a.css("position"), g = a.position(), m = t.effects.scaledDimensions(a), _ = e.from || m, v = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a),
        "show" === c && (o = _,
        _ = v,
        v = o),
        n = {
            from: {
                y: _.height / m.height,
                x: _.width / m.width
            },
            to: {
                y: v.height / m.height,
                x: v.width / m.width
            }
        },
        ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _),
        v = t.effects.setTransition(a, h, n.to.y, v)),
        n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _),
        v = t.effects.setTransition(a, l, n.to.x, v))),
        ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _),
        v = t.effects.setTransition(a, r, n.to.y, v)),
        p && (s = t.effects.getBaseline(p, m),
        _.top = (m.outerHeight - _.outerHeight) * s.y + g.top,
        _.left = (m.outerWidth - _.outerWidth) * s.x + g.left,
        v.top = (m.outerHeight - v.outerHeight) * s.y + g.top,
        v.left = (m.outerWidth - v.outerWidth) * s.x + g.left),
        a.css(_),
        ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r),
        l = l.concat(["marginLeft", "marginRight"]),
        a.find("*[width]").each((function() {
            var i = t(this)
              , s = t.effects.scaledDimensions(i)
              , o = {
                height: s.height * n.from.y,
                width: s.width * n.from.x,
                outerHeight: s.outerHeight * n.from.y,
                outerWidth: s.outerWidth * n.from.x
            }
              , a = {
                height: s.height * n.to.y,
                width: s.width * n.to.x,
                outerHeight: s.height * n.to.y,
                outerWidth: s.width * n.to.x
            };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o),
            a = t.effects.setTransition(i, h, n.to.y, a)),
            n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o),
            a = t.effects.setTransition(i, l, n.to.x, a)),
            u && t.effects.saveStyle(i),
            i.css(o),
            i.animate(a, e.duration, e.easing, (function() {
                u && t.effects.restoreStyle(i)
            }
            ))
        }
        ))),
        a.animate(v, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = a.offset();
                0 === v.opacity && a.css("opacity", _.opacity),
                u || (a.css("position", "static" === f ? "relative" : f).offset(e),
                t.effects.saveStyle(a)),
                i()
            }
        })
    }
    )),
    t.effects.define("scale", (function(e, i) {
        var s = t(this)
          , n = e.mode
          , o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) || "effect" !== n ? 0 : 100)
          , a = t.extend(!0, {
            from: t.effects.scaledDimensions(s),
            to: t.effects.scaledDimensions(s, o, e.direction || "both"),
            origin: e.origin || ["middle", "center"]
        }, e);
        e.fade && (a.from.opacity = 1,
        a.to.opacity = 0),
        t.effects.effect.size.call(this, a, i)
    }
    )),
    t.effects.define("puff", "hide", (function(e, i) {
        var s = t.extend(!0, {}, e, {
            fade: !0,
            percent: parseInt(e.percent, 10) || 150
        });
        t.effects.effect.scale.call(this, s, i)
    }
    )),
    t.effects.define("pulsate", "show", (function(e, i) {
        var s = t(this)
          , n = e.mode
          , o = "show" === n
          , r = o || "hide" === n
          , h = 2 * (e.times || 5) + (r ? 1 : 0)
          , l = e.duration / h
          , c = 0
          , u = 1
          , d = s.queue().length;
        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(),
        c = 1); h > u; u++)
            s.animate({
                opacity: c
            }, l, e.easing),
            c = 1 - c;
        s.animate({
            opacity: c
        }, l, e.easing),
        s.queue(i),
        t.effects.unshift(s, d, h + 1)
    }
    )),
    t.effects.define("shake", (function(e, i) {
        var s = 1
          , n = t(this)
          , o = e.direction || "left"
          , a = e.distance || 20
          , r = e.times || 3
          , h = 2 * r + 1
          , l = Math.round(e.duration / h)
          , c = "up" === o || "down" === o ? "top" : "left"
          , u = "up" === o || "left" === o
          , d = {}
          , p = {}
          , f = {}
          , g = n.queue().length;
        for (t.effects.createPlaceholder(n),
        d[c] = (u ? "-=" : "+=") + a,
        p[c] = (u ? "+=" : "-=") + 2 * a,
        f[c] = (u ? "-=" : "+=") + 2 * a,
        n.animate(d, l, e.easing); r > s; s++)
            n.animate(p, l, e.easing).animate(f, l, e.easing);
        n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i),
        t.effects.unshift(n, g, h + 1)
    }
    )),
    t.effects.define("slide", "show", (function(e, i) {
        var s, n, o = t(this), a = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, r = e.mode, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0), d = {};
        t.effects.createPlaceholder(o),
        s = o.cssClip(),
        n = o.position()[l],
        d[l] = (c ? -1 : 1) * u + n,
        d.clip = o.cssClip(),
        d.clip[a[h][1]] = d.clip[a[h][0]],
        "show" === r && (o.cssClip(d.clip),
        o.css(l, d[l]),
        d.clip = s,
        d[l] = n),
        o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
    )),
    !1 !== t.uiBackCompat && t.effects.define("transfer", (function(e, i) {
        t(this).transfer(e, i)
    }
    ))
}
)),
function(name, context, definition) {
    "use strict";
    "undefined" != typeof window && "function" == typeof define && define.amd ? define(definition) : "undefined" != typeof module && module.exports ? module.exports = definition() : context.exports ? context.exports = definition() : context.Fingerprint2 = definition()
}(0, this, (function() {
    "use strict";
    var x64Add = function(m, n) {
        m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]],
        n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
        var o = [0, 0, 0, 0];
        return o[3] += m[3] + n[3],
        o[2] += o[3] >>> 16,
        o[3] &= 65535,
        o[2] += m[2] + n[2],
        o[1] += o[2] >>> 16,
        o[2] &= 65535,
        o[1] += m[1] + n[1],
        o[0] += o[1] >>> 16,
        o[1] &= 65535,
        o[0] += m[0] + n[0],
        o[0] &= 65535,
        [o[0] << 16 | o[1], o[2] << 16 | o[3]]
    }
      , x64Multiply = function(m, n) {
        m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]],
        n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
        var o = [0, 0, 0, 0];
        return o[3] += m[3] * n[3],
        o[2] += o[3] >>> 16,
        o[3] &= 65535,
        o[2] += m[2] * n[3],
        o[1] += o[2] >>> 16,
        o[2] &= 65535,
        o[2] += m[3] * n[2],
        o[1] += o[2] >>> 16,
        o[2] &= 65535,
        o[1] += m[1] * n[3],
        o[0] += o[1] >>> 16,
        o[1] &= 65535,
        o[1] += m[2] * n[2],
        o[0] += o[1] >>> 16,
        o[1] &= 65535,
        o[1] += m[3] * n[1],
        o[0] += o[1] >>> 16,
        o[1] &= 65535,
        o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0],
        o[0] &= 65535,
        [o[0] << 16 | o[1], o[2] << 16 | o[3]]
    }
      , x64Rotl = function(m, n) {
        return 32 == (n %= 64) ? [m[1], m[0]] : n < 32 ? [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n] : (n -= 32,
        [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n])
    }
      , x64LeftShift = function(m, n) {
        return 0 == (n %= 64) ? m : n < 32 ? [m[0] << n | m[1] >>> 32 - n, m[1] << n] : [m[1] << n - 32, 0]
    }
      , x64Xor = function(m, n) {
        return [m[0] ^ n[0], m[1] ^ n[1]]
    }
      , x64Fmix = function(h) {
        return h = x64Xor(h, [0, h[0] >>> 1]),
        h = x64Multiply(h, [4283543511, 3981806797]),
        h = x64Xor(h, [0, h[0] >>> 1]),
        h = x64Multiply(h, [3301882366, 444984403]),
        x64Xor(h, [0, h[0] >>> 1])
    }
      , x64hash128 = function(key, seed) {
        seed = seed || 0;
        for (var remainder = (key = key || "").length % 16, bytes = key.length - remainder, h1 = [0, seed], h2 = [0, seed], k1 = [0, 0], k2 = [0, 0], c1 = [2277735313, 289559509], c2 = [1291169091, 658871167], i = 0; i < bytes; i += 16)
            k1 = [255 & key.charCodeAt(i + 4) | (255 & key.charCodeAt(i + 5)) << 8 | (255 & key.charCodeAt(i + 6)) << 16 | (255 & key.charCodeAt(i + 7)) << 24, 255 & key.charCodeAt(i) | (255 & key.charCodeAt(i + 1)) << 8 | (255 & key.charCodeAt(i + 2)) << 16 | (255 & key.charCodeAt(i + 3)) << 24],
            k2 = [255 & key.charCodeAt(i + 12) | (255 & key.charCodeAt(i + 13)) << 8 | (255 & key.charCodeAt(i + 14)) << 16 | (255 & key.charCodeAt(i + 15)) << 24, 255 & key.charCodeAt(i + 8) | (255 & key.charCodeAt(i + 9)) << 8 | (255 & key.charCodeAt(i + 10)) << 16 | (255 & key.charCodeAt(i + 11)) << 24],
            k1 = x64Multiply(k1, c1),
            k1 = x64Rotl(k1, 31),
            k1 = x64Multiply(k1, c2),
            h1 = x64Xor(h1, k1),
            h1 = x64Rotl(h1, 27),
            h1 = x64Add(h1, h2),
            h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 1390208809]),
            k2 = x64Multiply(k2, c2),
            k2 = x64Rotl(k2, 33),
            k2 = x64Multiply(k2, c1),
            h2 = x64Xor(h2, k2),
            h2 = x64Rotl(h2, 31),
            h2 = x64Add(h2, h1),
            h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 944331445]);
        switch (k1 = [0, 0],
        k2 = [0, 0],
        remainder) {
        case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
        case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
        case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
        case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
        case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
        case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
        case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]),
            k2 = x64Multiply(k2, c2),
            k2 = x64Rotl(k2, 33),
            k2 = x64Multiply(k2, c1),
            h2 = x64Xor(h2, k2);
        case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
        case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
        case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
        case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
        case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
        case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
        case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
        case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)]),
            k1 = x64Multiply(k1, c1),
            k1 = x64Rotl(k1, 31),
            k1 = x64Multiply(k1, c2),
            h1 = x64Xor(h1, k1)
        }
        return h1 = x64Xor(h1, [0, key.length]),
        h2 = x64Xor(h2, [0, key.length]),
        h1 = x64Add(h1, h2),
        h2 = x64Add(h2, h1),
        h1 = x64Fmix(h1),
        h2 = x64Fmix(h2),
        h1 = x64Add(h1, h2),
        h2 = x64Add(h2, h1),
        ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8)
    }
      , defaultOptions = {
        preprocessor: null,
        audio: {
            timeout: 1e3,
            excludeIOS11: !0
        },
        fonts: {
            swfContainerId: "fingerprintjs2",
            swfPath: "flash/compiled/FontList.swf",
            userDefinedFonts: [],
            extendedJsFonts: !1
        },
        screen: {
            detectScreenOrientation: !0
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: !1
        },
        extraComponents: [],
        excludes: {
            enumerateDevices: !0,
            pixelRatio: !0,
            doNotTrack: !0,
            fontsFlash: !0
        },
        NOT_AVAILABLE: "not available",
        ERROR: "error",
        EXCLUDED: "excluded"
    }
      , each = function(obj, iterator) {
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach)
            obj.forEach(iterator);
        else if (obj.length === +obj.length)
            for (var i = 0, l = obj.length; i < l; i++)
                iterator(obj[i], i, obj);
        else
            for (var key in obj)
                obj.hasOwnProperty(key) && iterator(obj[key], key, obj)
    }
      , map = function(obj, iterator) {
        var results = [];
        return null == obj ? results : Array.prototype.map && obj.map === Array.prototype.map ? obj.map(iterator) : (each(obj, (function(value, index, list) {
            results.push(iterator(value, index, list))
        }
        )),
        results)
    }
      , getRegularPlugins = function(options) {
        if (null == navigator.plugins)
            return options.NOT_AVAILABLE;
        for (var plugins = [], i = 0, l = navigator.plugins.length; i < l; i++)
            navigator.plugins[i] && plugins.push(navigator.plugins[i]);
        return pluginsShouldBeSorted(options) && (plugins = plugins.sort((function(a, b) {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        }
        ))),
        map(plugins, (function(p) {
            var mimeTypes = map(p, (function(mt) {
                return [mt.type, mt.suffixes]
            }
            ));
            return [p.name, p.description, mimeTypes]
        }
        ))
    }
      , pluginsShouldBeSorted = function(options) {
        for (var should = !1, i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
            var re = options.plugins.sortPluginsFor[i];
            if (navigator.userAgent.match(re)) {
                should = !0;
                break
            }
        }
        return should
    }
      , isCanvasSupported = function() {
        var elem = document.createElement("canvas");
        return !(!elem.getContext || !elem.getContext("2d"))
    }
      , isWebGlSupported = function() {
        if (!isCanvasSupported())
            return !1;
        var glContext = getWebglCanvas();
        return !!window.WebGLRenderingContext && !!glContext
    }
      , getWebglCanvas = function() {
        var canvas = document.createElement("canvas")
          , gl = null;
        try {
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        } catch (e) {}
        return gl || (gl = null),
        gl
    }
      , components = [{
        key: "userAgent",
        getData: function(done) {
            done(navigator.userAgent)
        }
    }, {
        key: "language",
        getData: function(done, options) {
            done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
        }
    }, {
        key: "colorDepth",
        getData: function(done, options) {
            done(window.screen.colorDepth || options.NOT_AVAILABLE)
        }
    }, {
        key: "deviceMemory",
        getData: function(done, options) {
            done(navigator.deviceMemory || options.NOT_AVAILABLE)
        }
    }, {
        key: "pixelRatio",
        getData: function(done, options) {
            done(window.devicePixelRatio || options.NOT_AVAILABLE)
        }
    }, {
        key: "hardwareConcurrency",
        getData: function(done, options) {
            done(function(options) {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : options.NOT_AVAILABLE
            }(options))
        }
    }, {
        key: "screenResolution",
        getData: function(done, options) {
            done(function(options) {
                var resolution = [window.screen.width, window.screen.height];
                return options.screen.detectScreenOrientation && resolution.sort().reverse(),
                resolution
            }(options))
        }
    }, {
        key: "availableScreenResolution",
        getData: function(done, options) {
            done(function(options) {
                if (window.screen.availWidth && window.screen.availHeight) {
                    var available = [window.screen.availHeight, window.screen.availWidth];
                    return options.screen.detectScreenOrientation && available.sort().reverse(),
                    available
                }
                return options.NOT_AVAILABLE
            }(options))
        }
    }, {
        key: "timezoneOffset",
        getData: function(done) {
            done((new Date).getTimezoneOffset())
        }
    }, {
        key: "timezone",
        getData: function(done, options) {
            window.Intl && window.Intl.DateTimeFormat ? done((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : done(options.NOT_AVAILABLE)
        }
    }, {
        key: "sessionStorage",
        getData: function(done, options) {
            done(function(options) {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return options.ERROR
                }
            }(options))
        }
    }, {
        key: "localStorage",
        getData: function(done, options) {
            done(function(options) {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return options.ERROR
                }
            }(options))
        }
    }, {
        key: "indexedDb",
        getData: function(done, options) {
            done(function(options) {
                try {
                    return !!window.indexedDB
                } catch (e) {
                    return options.ERROR
                }
            }(options))
        }
    }, {
        key: "addBehavior",
        getData: function(done) {
            done(!(!document.body || !document.body.addBehavior))
        }
    }, {
        key: "openDatabase",
        getData: function(done) {
            done(!!window.openDatabase)
        }
    }, {
        key: "cpuClass",
        getData: function(done, options) {
            done(function(options) {
                return navigator.cpuClass || options.NOT_AVAILABLE
            }(options))
        }
    }, {
        key: "platform",
        getData: function(done, options) {
            done(function(options) {
                return navigator.platform ? navigator.platform : options.NOT_AVAILABLE
            }(options))
        }
    }, {
        key: "doNotTrack",
        getData: function(done, options) {
            done(function(options) {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : options.NOT_AVAILABLE
            }(options))
        }
    }, {
        key: "plugins",
        getData: function(done, options) {
            "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? options.plugins.excludeIE ? done(options.EXCLUDED) : done(function(options) {
                var result = [];
                return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window ? result = map(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(name) {
                    try {
                        return new window.ActiveXObject(name),
                        name
                    } catch (e) {
                        return options.ERROR
                    }
                }
                )) : result.push(options.NOT_AVAILABLE),
                navigator.plugins && (result = result.concat(getRegularPlugins(options))),
                result
            }(options)) : done(getRegularPlugins(options))
        }
    }, {
        key: "canvas",
        getData: function(done, options) {
            isCanvasSupported() ? done(function(options) {
                var result = []
                  , canvas = document.createElement("canvas");
                canvas.width = 2e3,
                canvas.height = 200,
                canvas.style.display = "inline";
                var ctx = canvas.getContext("2d");
                return ctx.rect(0, 0, 10, 10),
                ctx.rect(2, 2, 6, 6),
                result.push("canvas winding:" + (!1 === ctx.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
                ctx.textBaseline = "alphabetic",
                ctx.fillStyle = "#f60",
                ctx.fillRect(125, 1, 62, 20),
                ctx.fillStyle = "#069",
                options.dontUseFakeFontInCanvas ? ctx.font = "11pt Arial" : ctx.font = "11pt no-real-font-123",
                ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
                ctx.fillStyle = "rgba(102, 204, 0, 0.2)",
                ctx.font = "18pt Arial",
                ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
                ctx.globalCompositeOperation = "multiply",
                ctx.fillStyle = "rgb(255,0,255)",
                ctx.beginPath(),
                ctx.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                ctx.closePath(),
                ctx.fill(),
                ctx.fillStyle = "rgb(0,255,255)",
                ctx.beginPath(),
                ctx.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                ctx.closePath(),
                ctx.fill(),
                ctx.fillStyle = "rgb(255,255,0)",
                ctx.beginPath(),
                ctx.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                ctx.closePath(),
                ctx.fill(),
                ctx.fillStyle = "rgb(255,0,255)",
                ctx.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                ctx.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                ctx.fill("evenodd"),
                canvas.toDataURL && result.push("canvas fp:" + canvas.toDataURL()),
                result
            }(options)) : done(options.NOT_AVAILABLE)
        }
    }, {
        key: "webgl",
        getData: function(done, options) {
            isWebGlSupported() ? done(function() {
                var gl, fa2s = function(fa) {
                    return gl.clearColor(0, 0, 0, 1),
                    gl.enable(gl.DEPTH_TEST),
                    gl.depthFunc(gl.LEQUAL),
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT),
                    "[" + fa[0] + ", " + fa[1] + "]"
                };
                if (!(gl = getWebglCanvas()))
                    return null;
                var result = []
                  , vertexPosBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
                var vertices = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW),
                vertexPosBuffer.itemSize = 3,
                vertexPosBuffer.numItems = 3;
                var program = gl.createProgram()
                  , vshader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vshader, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
                gl.compileShader(vshader);
                var fshader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fshader, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
                gl.compileShader(fshader),
                gl.attachShader(program, vshader),
                gl.attachShader(program, fshader),
                gl.linkProgram(program),
                gl.useProgram(program),
                program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex"),
                program.offsetUniform = gl.getUniformLocation(program, "uniformOffset"),
                gl.enableVertexAttribArray(program.vertexPosArray),
                gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0),
                gl.uniform2f(program.offsetUniform, 1, 1),
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
                try {
                    result.push(gl.canvas.toDataURL())
                } catch (e) {}
                result.push("extensions:" + (gl.getSupportedExtensions() || []).join(";")),
                result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE))),
                result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE))),
                result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS)),
                result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no")),
                result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS)),
                result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS)),
                result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS)),
                result.push("webgl max anisotropy:" + function(gl) {
                    var ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (ext) {
                        var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return 0 === anisotropy && (anisotropy = 2),
                        anisotropy
                    }
                    return null
                }(gl)),
                result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
                result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE)),
                result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS)),
                result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)),
                result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS)),
                result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE)),
                result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS)),
                result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS)),
                result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
                result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS)),
                result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS))),
                result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS)),
                result.push("webgl renderer:" + gl.getParameter(gl.RENDERER)),
                result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION)),
                result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS)),
                result.push("webgl vendor:" + gl.getParameter(gl.VENDOR)),
                result.push("webgl version:" + gl.getParameter(gl.VERSION));
                try {
                    var extensionDebugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
                    extensionDebugRendererInfo && (result.push("webgl unmasked vendor:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL)),
                    result.push("webgl unmasked renderer:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)))
                } catch (e) {}
                return gl.getShaderPrecisionFormat ? (each(["FLOAT", "INT"], (function(numType) {
                    each(["VERTEX", "FRAGMENT"], (function(shader) {
                        each(["HIGH", "MEDIUM", "LOW"], (function(numSize) {
                            each(["precision", "rangeMin", "rangeMax"], (function(key) {
                                var format = gl.getShaderPrecisionFormat(gl[shader + "_SHADER"], gl[numSize + "_" + numType])[key];
                                "precision" !== key && (key = "precision " + key);
                                var line = ["webgl ", shader.toLowerCase(), " shader ", numSize.toLowerCase(), " ", numType.toLowerCase(), " ", key, ":", format].join("");
                                result.push(line)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                )),
                result) : result
            }()) : done(options.NOT_AVAILABLE)
        }
    }, {
        key: "webglVendorAndRenderer",
        getData: function(done) {
            isWebGlSupported() ? done(function() {
                try {
                    var glContext = getWebglCanvas()
                      , extensionDebugRendererInfo = glContext.getExtension("WEBGL_debug_renderer_info");
                    return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + "~" + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
                } catch (e) {
                    return null
                }
            }()) : done()
        }
    }, {
        key: "adBlock",
        getData: function(done) {
            done(function() {
                var ads = document.createElement("div");
                ads.innerHTML = "&nbsp;",
                ads.className = "adsbox";
                var result = !1;
                try {
                    document.body.appendChild(ads),
                    result = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                    document.body.removeChild(ads)
                } catch (e) {
                    result = !1
                }
                return result
            }())
        }
    }, {
        key: "hasLiedLanguages",
        getData: function(done) {
            done(function() {
                if (void 0 !== navigator.languages)
                    try {
                        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                            return !0
                    } catch (err) {
                        return !0
                    }
                return !1
            }())
        }
    }, {
        key: "hasLiedResolution",
        getData: function(done) {
            done(window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight)
        }
    }, {
        key: "hasLiedOs",
        getData: function(done) {
            done(function() {
                var os, userAgent = navigator.userAgent.toLowerCase(), oscpu = navigator.oscpu, platform = navigator.platform.toLowerCase();
                if (os = userAgent.indexOf("windows phone") >= 0 ? "Windows Phone" : userAgent.indexOf("win") >= 0 ? "Windows" : userAgent.indexOf("android") >= 0 ? "Android" : userAgent.indexOf("linux") >= 0 ? "Linux" : userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ? "iOS" : userAgent.indexOf("mac") >= 0 ? "Mac" : "Other",
                ("ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== os && "Android" !== os && "iOS" !== os && "Other" !== os)
                    return !0;
                if (void 0 !== oscpu) {
                    if ((oscpu = oscpu.toLowerCase()).indexOf("win") >= 0 && "Windows" !== os && "Windows Phone" !== os)
                        return !0;
                    if (oscpu.indexOf("linux") >= 0 && "Linux" !== os && "Android" !== os)
                        return !0;
                    if (oscpu.indexOf("mac") >= 0 && "Mac" !== os && "iOS" !== os)
                        return !0;
                    if ((-1 === oscpu.indexOf("win") && -1 === oscpu.indexOf("linux") && -1 === oscpu.indexOf("mac")) != ("Other" === os))
                        return !0
                }
                return platform.indexOf("win") >= 0 && "Windows" !== os && "Windows Phone" !== os || (platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && "Linux" !== os && "Android" !== os || (platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && "Mac" !== os && "iOS" !== os || (-1 === platform.indexOf("win") && -1 === platform.indexOf("linux") && -1 === platform.indexOf("mac")) != ("Other" === os) || void 0 === navigator.plugins && "Windows" !== os && "Windows Phone" !== os
            }())
        }
    }, {
        key: "hasLiedBrowser",
        getData: function(done) {
            done(function() {
                var browser, userAgent = navigator.userAgent.toLowerCase(), productSub = navigator.productSub;
                if (("Chrome" == (browser = userAgent.indexOf("firefox") >= 0 ? "Firefox" : userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0 ? "Opera" : userAgent.indexOf("chrome") >= 0 ? "Chrome" : userAgent.indexOf("safari") >= 0 ? "Safari" : userAgent.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === browser || "Opera" === browser) && "20030107" !== productSub)
                    return !0;
                var errFirefox, tempRes = eval.toString().length;
                if (37 === tempRes && "Safari" !== browser && "Firefox" !== browser && "Other" !== browser)
                    return !0;
                if (39 === tempRes && "Internet Explorer" !== browser && "Other" !== browser)
                    return !0;
                if (33 === tempRes && "Chrome" !== browser && "Opera" !== browser && "Other" !== browser)
                    return !0;
                try {
                    throw "a"
                } catch (err) {
                    try {
                        err.toSource(),
                        errFirefox = !0
                    } catch (errOfErr) {
                        errFirefox = !1
                    }
                }
                return errFirefox && "Firefox" !== browser && "Other" !== browser
            }())
        }
    }, {
        key: "touchSupport",
        getData: function(done) {
            done(function() {
                var touchEvent, maxTouchPoints = 0;
                void 0 !== navigator.maxTouchPoints ? maxTouchPoints = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (maxTouchPoints = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"),
                    touchEvent = !0
                } catch (_) {
                    touchEvent = !1
                }
                return [maxTouchPoints, touchEvent, "ontouchstart"in window]
            }())
        }
    }, {
        key: "fonts",
        getData: function(done, options) {
            var baseFonts = ["monospace", "sans-serif", "serif"]
              , fontList = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
            options.fonts.extendedJsFonts && (fontList = fontList.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])),
            fontList = (fontList = fontList.concat(options.fonts.userDefinedFonts)).filter((function(font, position) {
                return fontList.indexOf(font) === position
            }
            ));
            var h = document.getElementsByTagName("body")[0]
              , baseFontsDiv = document.createElement("div")
              , fontsDiv = document.createElement("div")
              , defaultWidth = {}
              , defaultHeight = {}
              , createSpan = function() {
                var s = document.createElement("span");
                return s.style.position = "absolute",
                s.style.left = "-9999px",
                s.style.fontSize = "72px",
                s.style.fontStyle = "normal",
                s.style.fontWeight = "normal",
                s.style.letterSpacing = "normal",
                s.style.lineBreak = "auto",
                s.style.lineHeight = "normal",
                s.style.textTransform = "none",
                s.style.textAlign = "left",
                s.style.textDecoration = "none",
                s.style.textShadow = "none",
                s.style.whiteSpace = "normal",
                s.style.wordBreak = "normal",
                s.style.wordSpacing = "normal",
                s.innerHTML = "mmmmmmmmmmlli",
                s
            }
              , createSpanWithFonts = function(fontToDetect, baseFont) {
                var s = createSpan();
                return s.style.fontFamily = "'" + fontToDetect + "'," + baseFont,
                s
            }
              , isFontAvailable = function(fontSpans) {
                for (var detected = !1, i = 0; i < baseFonts.length; i++)
                    if (detected = fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
                        return detected;
                return detected
            }
              , baseFontsSpans = function() {
                for (var spans = [], index = 0, length = baseFonts.length; index < length; index++) {
                    var s = createSpan();
                    s.style.fontFamily = baseFonts[index],
                    baseFontsDiv.appendChild(s),
                    spans.push(s)
                }
                return spans
            }();
            h.appendChild(baseFontsDiv);
            for (var index = 0, length = baseFonts.length; index < length; index++)
                defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth,
                defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight;
            var fontsSpans = function() {
                for (var spans = {}, i = 0, l = fontList.length; i < l; i++) {
                    for (var fontSpans = [], j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                        var s = createSpanWithFonts(fontList[i], baseFonts[j]);
                        fontsDiv.appendChild(s),
                        fontSpans.push(s)
                    }
                    spans[fontList[i]] = fontSpans
                }
                return spans
            }();
            h.appendChild(fontsDiv);
            for (var available = [], i = 0, l = fontList.length; i < l; i++)
                isFontAvailable(fontsSpans[fontList[i]]) && available.push(fontList[i]);
            h.removeChild(fontsDiv),
            h.removeChild(baseFontsDiv),
            done(available)
        },
        pauseBefore: !0
    }, {
        key: "fontsFlash",
        getData: function(done, options) {
            return void 0 !== window.swfobject ? window.swfobject.hasFlashPlayerVersion("9.0.0") ? options.fonts.swfPath ? void function(done, options) {
                window.___fp_swf_loaded = function(fonts) {
                    done(fonts)
                }
                ;
                var node, id = options.fonts.swfContainerId;
                (node = document.createElement("div")).setAttribute("id", (void 0).fonts.swfContainerId),
                document.body.appendChild(node);
                window.swfobject.embedSWF(options.fonts.swfPath, id, "1", "1", "9.0.0", !1, {
                    onReady: "___fp_swf_loaded"
                }, {
                    allowScriptAccess: "always",
                    menu: "false"
                }, {})
            }((function(fonts) {
                done(fonts)
            }
            ), options) : done("missing options.fonts.swfPath") : done("flash not installed") : done("swf object not loaded")
        },
        pauseBefore: !0
    }, {
        key: "audio",
        getData: function(done, options) {
            var audioOptions = options.audio;
            if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
                return done(options.EXCLUDED);
            var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (null == AudioContext)
                return done(options.NOT_AVAILABLE);
            var context = new AudioContext(1,44100,44100)
              , oscillator = context.createOscillator();
            oscillator.type = "triangle",
            oscillator.frequency.setValueAtTime(1e4, context.currentTime);
            var compressor = context.createDynamicsCompressor();
            each([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], (function(item) {
                void 0 !== compressor[item[0]] && "function" == typeof compressor[item[0]].setValueAtTime && compressor[item[0]].setValueAtTime(item[1], context.currentTime)
            }
            )),
            oscillator.connect(compressor),
            compressor.connect(context.destination),
            oscillator.start(0),
            context.startRendering();
            var audioTimeoutId = setTimeout((function() {
                return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'),
                context.oncomplete = function() {}
                ,
                context = null,
                done("audioTimeout")
            }
            ), audioOptions.timeout);
            context.oncomplete = function(event) {
                var fingerprint;
                try {
                    clearTimeout(audioTimeoutId),
                    fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(acc, val) {
                        return acc + Math.abs(val)
                    }
                    ), 0).toString(),
                    oscillator.disconnect(),
                    compressor.disconnect()
                } catch (error) {
                    return void done(error)
                }
                done(fingerprint)
            }
        }
    }, {
        key: "enumerateDevices",
        getData: function(done, options) {
            if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
                return done(options.NOT_AVAILABLE);
            navigator.mediaDevices.enumerateDevices().then((function(devices) {
                done(devices.map((function(device) {
                    return "id=" + device.deviceId + ";gid=" + device.groupId + ";" + device.kind + ";" + device.label
                }
                )))
            }
            )).catch((function(error) {
                done(error)
            }
            ))
        }
    }]
      , Fingerprint2 = function(options) {
        throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    };
    return Fingerprint2.get = function(options, callback) {
        callback ? options || (options = {}) : (callback = options,
        options = {}),
        function(target, source) {
            if (null == source)
                return target;
            var value, key;
            for (key in source)
                null == (value = source[key]) || Object.prototype.hasOwnProperty.call(target, key) || (target[key] = value)
        }(options, defaultOptions),
        options.components = options.extraComponents.concat(components);
        var keys = {
            data: [],
            addPreprocessedComponent: function(key, value) {
                "function" == typeof options.preprocessor && (value = options.preprocessor(key, value)),
                keys.data.push({
                    key: key,
                    value: value
                })
            }
        }
          , i = -1
          , chainComponents = function(alreadyWaited) {
            if ((i += 1) >= options.components.length)
                callback(keys.data);
            else {
                var component = options.components[i];
                if (options.excludes[component.key])
                    chainComponents(!1);
                else {
                    if (!alreadyWaited && component.pauseBefore)
                        return i -= 1,
                        void setTimeout((function() {
                            chainComponents(!0)
                        }
                        ), 1);
                    try {
                        component.getData((function(value) {
                            keys.addPreprocessedComponent(component.key, value),
                            chainComponents(!1)
                        }
                        ), options)
                    } catch (error) {
                        keys.addPreprocessedComponent(component.key, String(error)),
                        chainComponents(!1)
                    }
                }
            }
        };
        chainComponents(!1)
    }
    ,
    Fingerprint2.getPromise = function(options) {
        return new Promise((function(resolve, reject) {
            Fingerprint2.get(options, resolve)
        }
        ))
    }
    ,
    Fingerprint2.getV18 = function(options, callback) {
        return null == callback && (callback = options,
        options = {}),
        Fingerprint2.get(options, (function(components) {
            for (var newComponents = [], i = 0; i < components.length; i++) {
                var component = components[i];
                if (component.value === (options.NOT_AVAILABLE || "not available"))
                    newComponents.push({
                        key: component.key,
                        value: "unknown"
                    });
                else if ("plugins" === component.key)
                    newComponents.push({
                        key: "plugins",
                        value: map(component.value, (function(p) {
                            var mimeTypes = map(p[2], (function(mt) {
                                return mt.join ? mt.join("~") : mt
                            }
                            )).join(",");
                            return [p[0], p[1], mimeTypes].join("::")
                        }
                        ))
                    });
                else if (-1 !== ["canvas", "webgl"].indexOf(component.key))
                    newComponents.push({
                        key: component.key,
                        value: component.value.join("~")
                    });
                else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(component.key)) {
                    if (!component.value)
                        continue;
                    newComponents.push({
                        key: component.key,
                        value: 1
                    })
                } else
                    component.value ? newComponents.push(component.value.join ? {
                        key: component.key,
                        value: component.value.join(";")
                    } : component) : newComponents.push({
                        key: component.key,
                        value: component.value
                    })
            }
            var murmur = x64hash128(map(newComponents, (function(component) {
                return component.value
            }
            )).join("~~~"), 31);
            callback(murmur, newComponents)
        }
        ))
    }
    ,
    Fingerprint2.x64hash128 = x64hash128,
    Fingerprint2.VERSION = "2.0.0",
    Fingerprint2
}
)),
function(a, b) {
    var c = function() {
        return c.get.apply(c, arguments)
    }
      , d = c.utils = {
        isArray: Array.isArray || function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }
        ,
        isPlainObject: function(a) {
            return !!a && "[object Object]" === Object.prototype.toString.call(a)
        },
        toArray: function(a) {
            return Array.prototype.slice.call(a)
        },
        getKeys: Object.keys || function(a) {
            var b = []
              , c = "";
            for (c in a)
                a.hasOwnProperty(c) && b.push(c);
            return b
        }
        ,
        encode: function(a) {
            return String(a).replace(/[,;"\\=\s%]/g, (function(a) {
                return encodeURIComponent(a)
            }
            ))
        },
        decode: function(a) {
            return decodeURIComponent(a)
        },
        retrieve: function(a, b) {
            return null == a ? b : a
        }
    };
    c.defaults = {},
    c.expiresMultiplier = 86400,
    c.set = function(c, e, f) {
        if (d.isPlainObject(c))
            for (var g in c)
                c.hasOwnProperty(g) && this.set(g, c[g], e);
        else {
            var h = (f = d.isPlainObject(f) ? f : {
                expires: f
            }).expires !== b ? f.expires : this.defaults.expires || ""
              , i = typeof h;
            "string" === i && "" !== h ? h = new Date(h) : "number" === i && (h = new Date(+new Date + 1e3 * this.expiresMultiplier * h)),
            "" !== h && "toGMTString"in h && (h = ";expires=" + h.toGMTString());
            var j = f.path || this.defaults.path;
            j = j ? ";path=" + j : "";
            var k = f.domain || this.defaults.domain;
            k = k ? ";domain=" + k : "";
            var l = f.secure || this.defaults.secure ? ";secure" : "";
            !1 === f.secure && (l = ""),
            a.cookie = d.encode(c) + "=" + d.encode(e) + h + j + k + l
        }
        return this
    }
    ,
    c.setDefault = function(a, e, f) {
        if (d.isPlainObject(a)) {
            for (var g in a)
                this.get(g) === b && this.set(g, a[g], e);
            return c
        }
        if (this.get(a) === b)
            return this.set.apply(this, arguments)
    }
    ,
    c.remove = function(a) {
        for (var b = 0, c = (a = d.isArray(a) ? a : d.toArray(arguments)).length; b < c; b++)
            this.set(a[b], "", -1);
        return this
    }
    ,
    c.removeSpecific = function(a, b) {
        if (!b)
            return this.remove(a);
        a = d.isArray(a) ? a : [a],
        b.expire = -1;
        for (var c = 0, e = a.length; c < e; c++)
            this.set(a[c], "", b);
        return this
    }
    ,
    c.empty = function() {
        return this.remove(d.getKeys(this.all()))
    }
    ,
    c.get = function(a, b) {
        var c = this.all();
        if (d.isArray(a)) {
            for (var e = {}, f = 0, g = a.length; f < g; f++) {
                var h = a[f];
                e[h] = d.retrieve(c[h], b)
            }
            return e
        }
        return d.retrieve(c[a], b)
    }
    ,
    c.all = function() {
        if ("" === a.cookie)
            return {};
        for (var b = a.cookie.split("; "), c = {}, e = 0, f = b.length; e < f; e++) {
            var g = b[e].split("=")
              , h = d.decode(g.shift())
              , i = d.decode(g.join("="));
            c[h] = i
        }
        return c
    }
    ,
    c.enabled = function() {
        if (navigator.cookieEnabled)
            return !0;
        var a = "_" === c.set("_", "_").get("_");
        return c.remove("_"),
        a
    }
    ,
    "function" == typeof define && define.amd ? define((function() {
        return {
            cookie: c
        }
    }
    )) : "undefined" != typeof exports ? exports.cookie = c : window.cookie = c
}("undefined" == typeof document ? null : document),
function(o) {
    "object" == typeof module && "object" == typeof module.exports ? o(require("jquery"), window, document) : o(jQuery, window, document)
}((function(o, t, i, e) {
    var s = []
      , l = function() {
        return s.length ? s[s.length - 1] : null
    }
      , n = function() {
        var o, t = !1;
        for (o = s.length - 1; o >= 0; o--)
            s[o].$blocker && (s[o].$blocker.toggleClass("current", !t).toggleClass("behind", t),
            t = !0)
    };
    o.modal = function(t, i) {
        var e, n;
        if (this.$body = o("body"),
        this.options = o.extend({}, o.modal.defaults, i),
        this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)),
        this.$blocker = null,
        this.options.closeExisting)
            for (; o.modal.isActive(); )
                o.modal.close();
        if (s.push(this),
        t.is("a"))
            if (n = t.attr("href"),
            this.anchor = t,
            /^#/.test(n)) {
                if (this.$elm = o(n),
                1 !== this.$elm.length)
                    return null;
                this.$body.append(this.$elm),
                this.open()
            } else
                this.$elm = o("<div>"),
                this.$body.append(this.$elm),
                e = function(o, t) {
                    t.elm.remove()
                }
                ,
                this.showSpinner(),
                t.trigger(o.modal.AJAX_SEND),
                o.get(n).done((function(i) {
                    if (o.modal.isActive()) {
                        t.trigger(o.modal.AJAX_SUCCESS);
                        var s = l();
                        s.$elm.empty().append(i).on(o.modal.CLOSE, e),
                        s.hideSpinner(),
                        s.open(),
                        t.trigger(o.modal.AJAX_COMPLETE)
                    }
                }
                )).fail((function() {
                    t.trigger(o.modal.AJAX_FAIL),
                    l().hideSpinner(),
                    s.pop(),
                    t.trigger(o.modal.AJAX_COMPLETE)
                }
                ));
        else
            this.$elm = t,
            this.anchor = t,
            this.$body.append(this.$elm),
            this.open()
    }
    ,
    o.modal.prototype = {
        constructor: o.modal,
        open: function() {
            var t = this;
            this.block(),
            this.anchor.blur(),
            this.options.doFade ? setTimeout((function() {
                t.show()
            }
            ), this.options.fadeDuration * this.options.fadeDelay) : this.show(),
            o(i).off("keydown.modal").on("keydown.modal", (function(o) {
                var t = l();
                27 === o.which && t.options.escapeClose && t.close()
            }
            )),
            this.options.clickClose && this.$blocker.click((function(t) {
                t.target === this && o.modal.close()
            }
            ))
        },
        close: function() {
            s.pop(),
            this.unblock(),
            this.hide(),
            o.modal.isActive() || o(i).off("keydown.modal")
        },
        block: function() {
            this.$elm.trigger(o.modal.BEFORE_BLOCK, [this._ctx()]),
            this.$body.css("overflow", "hidden"),
            this.$blocker = o('<div class="' + this.options.blockerClass + ' blocker current"></div>').appendTo(this.$body),
            n(),
            this.options.doFade && this.$blocker.css("opacity", 0).animate({
                opacity: 1
            }, this.options.fadeDuration),
            this.$elm.trigger(o.modal.BLOCK, [this._ctx()])
        },
        unblock: function(t) {
            !t && this.options.doFade ? this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this, !0)) : (this.$blocker.children().appendTo(this.$body),
            this.$blocker.remove(),
            this.$blocker = null,
            n(),
            o.modal.isActive() || this.$body.css("overflow", ""))
        },
        show: function() {
            this.$elm.trigger(o.modal.BEFORE_OPEN, [this._ctx()]),
            this.options.showClose && (this.closeButton = o('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"),
            this.$elm.append(this.closeButton)),
            this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),
            this.options.doFade ? this.$elm.css({
                opacity: 0,
                display: "inline-block"
            }).animate({
                opacity: 1
            }, this.options.fadeDuration) : this.$elm.css("display", "inline-block"),
            this.$elm.trigger(o.modal.OPEN, [this._ctx()])
        },
        hide: function() {
            this.$elm.trigger(o.modal.BEFORE_CLOSE, [this._ctx()]),
            this.closeButton && this.closeButton.remove();
            var t = this;
            this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, (function() {
                t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()])
            }
            )) : this.$elm.hide(0, (function() {
                t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()])
            }
            )),
            this.$elm.trigger(o.modal.CLOSE, [this._ctx()])
        },
        showSpinner: function() {
            this.options.showSpinner && (this.spinner = this.spinner || o('<div class="' + this.options.modalClass + '-spinner"></div>').append(this.options.spinnerHtml),
            this.$body.append(this.spinner),
            this.spinner.show())
        },
        hideSpinner: function() {
            this.spinner && this.spinner.remove()
        },
        _ctx: function() {
            return {
                elm: this.$elm,
                $elm: this.$elm,
                $blocker: this.$blocker,
                options: this.options,
                $anchor: this.anchor
            }
        }
    },
    o.modal.close = function(t) {
        if (o.modal.isActive()) {
            t && t.preventDefault();
            var i = l();
            return i.close(),
            i.$elm
        }
    }
    ,
    o.modal.isActive = function() {
        return s.length > 0
    }
    ,
    o.modal.getCurrent = l,
    o.modal.defaults = {
        closeExisting: !0,
        escapeClose: !0,
        clickClose: !0,
        closeText: "Close",
        closeClass: "",
        modalClass: "modal",
        blockerClass: "jquery-modal",
        spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
        showSpinner: !0,
        showClose: !0,
        fadeDuration: null,
        fadeDelay: 1
    },
    o.modal.BEFORE_BLOCK = "modal:before-block",
    o.modal.BLOCK = "modal:block",
    o.modal.BEFORE_OPEN = "modal:before-open",
    o.modal.OPEN = "modal:open",
    o.modal.BEFORE_CLOSE = "modal:before-close",
    o.modal.CLOSE = "modal:close",
    o.modal.AFTER_CLOSE = "modal:after-close",
    o.modal.AJAX_SEND = "modal:ajax:send",
    o.modal.AJAX_SUCCESS = "modal:ajax:success",
    o.modal.AJAX_FAIL = "modal:ajax:fail",
    o.modal.AJAX_COMPLETE = "modal:ajax:complete",
    o.fn.modal = function(t) {
        return 1 === this.length && new o.modal(this,t),
        this
    }
    ,
    o(i).on("click.modal", 'a[rel~="modal:close"]', o.modal.close),
    o(i).on("click.modal", 'a[rel~="modal:open"]', (function(t) {
        t.preventDefault(),
        o(this).modal()
    }
    ))
}
)),
function(t, r, e) {
    "use strict";
    var n = function(t, e) {
        this.t = this.e(t) ? r.querySelectorAll(t) : [t],
        this.n = [],
        this.i = e,
        this.r = [],
        this.o(),
        this.destroy = function() {
            this.u((function(t) {
                t.removeEventListener("reset", this.events.reset),
                this.s(t)
            }
            ), (function(t) {
                this.a(t)
            }
            ))
        }
        ,
        this.rebuild = function() {
            this.u(null, (function(t) {
                this.l(t, !0)
            }
            ))
        }
    };
    n.prototype = {
        c: {
            customEvent: null,
            customLabel: null,
            customPlaceholder: null,
            exclude: ".no-label",
            inputRegex: /email|number|password|search|tel|text|url/,
            prefix: "fl-",
            prioritize: "label",
            requiredClass: "required",
            style: 0,
            transform: "input,select,textarea"
        },
        o: function() {
            var i = this;
            i.f(),
            i.u((function(t, e) {
                var n = i.n[e].style;
                t.addEventListener("reset", i.events.reset),
                t.classList.add(i.h("form")),
                n && t.classList.add(i.h("style-" + n))
            }
            ), (function(t) {
                i.l(t)
            }
            ))
        },
        f: function() {
            var t = this;
            t.events = {
                blur: t.d.bind(t),
                change: t.v.bind(t),
                focus: t.p.bind(t),
                input: t.v.bind(t),
                reset: t._.bind(t)
            }
        },
        b: function(t) {
            return t ? "add" : "remove"
        },
        m: function(t) {
            var e = this
              , n = e.y(t);
            n && (t.classList.add(e.h(t.tagName.toLowerCase())),
            e.L(n, t),
            e.g(n, t),
            e.w(n, t),
            e.x(t, "add"),
            "function" == typeof e.n[e.S].customEvent && e.n[e.S].customEvent.call(e, t))
        },
        T: function(t, e) {
            var n = "string" == typeof t ? r.createElement(t) : t;
            for (var i in e = e || {})
                e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
            return n
        },
        C: function() {
            var t = [].slice.call(arguments)
              , n = t[0]
              , i = t.slice(1);
            return Object.keys(i).forEach((function(t) {
                for (var e in i[t])
                    i[t].hasOwnProperty(e) && (n[e] = i[t][e])
            }
            )),
            n
        },
        l: function(t, e) {
            var n = this;
            if (n.P(t)) {
                if (n.j(t)) {
                    if (!0 !== e)
                        return;
                    n.a(t)
                }
                n.m(t)
            }
        },
        y: function(t) {
            var e = 'label[for="' + t.getAttribute("id") + '"]'
              , n = this.t[this.S].querySelectorAll(e);
            return 1 < n.length && (n = t.parentNode.querySelectorAll(e)),
            1 === n.length && n[0]
        },
        q: function(t, e) {
            var n = t.textContent.replace("*", "").trim()
              , i = e.getAttribute("placeholder");
            return (!n || n && i && "placeholder" === this.n[this.S].prioritize) && (n = i),
            n
        },
        x: function(e, n) {
            var i = this.events;
            ["blur", "input", "focus"].forEach((function(t) {
                "input" !== t || "file" !== e.type && "SELECT" !== e.nodeName || (t = "change"),
                e[n + "EventListener"](t, i[t])
            }
            ))
        },
        j: function(t) {
            return t.parentNode.classList.contains(this.h("wrap"))
        },
        e: function(t) {
            return "[object String]" === Object.prototype.toString.call(t)
        },
        P: function(t) {
            var e = "INPUT" === t.tagName && !this.n[this.S].inputRegex.test(t.getAttribute("type"))
              , n = "SELECT" === t.tagName && null !== t.getAttribute("multiple");
            return t.getAttribute("id") && !e && !n
        },
        u: function(t, e) {
            for (var n = this, i = 0; i < n.t.length; ++i) {
                if (void 0 === n.r[i]) {
                    var r = n.C({}, n.c, n.i, n.t[i].getAttribute("data-options"))
                      , o = ":not(" + r.exclude.split(/[\s,]+/).join("):not(") + ")";
                    n.r[i] = r.transform.replace(/,/g, o + ",") + o,
                    n.n[i] = r
                }
                var u = n.t[i].querySelectorAll(n.r[i]);
                n.S = i,
                "function" == typeof t && t.call(n, n.t[i], i);
                for (var s = 0; s < u.length; ++s)
                    "function" == typeof e && e.call(n, u[s], i)
            }
        },
        d: function(t) {
            t.target.parentNode.classList.remove(this.h("has-focus"))
        },
        v: function(t) {
            t.target.parentNode.classList[this.b(t.target.value.length)](this.h("is-active"))
        },
        p: function(t) {
            t.target.parentNode.classList.add(this.h("has-focus"))
        },
        _: function() {
            setTimeout(this.F.bind(this))
        },
        h: function(t) {
            return this.n[this.S].prefix + t
        },
        s: function(t) {
            var e = this.n[this.S].prefix
              , n = t.className.split(" ").filter((function(t) {
                return 0 !== t.lastIndexOf(e, 0)
            }
            ));
            t.className = n.join(" ").trim()
        },
        a: function(t) {
            var e = t.parentNode;
            if (this.j(t)) {
                for (var n = r.createDocumentFragment(); e.firstElementChild; ) {
                    var i = e.firstElementChild;
                    this.s(i),
                    n.appendChild(i)
                }
                e.parentNode.replaceChild(n, e),
                this.O(t),
                this.x(t, "remove")
            }
        },
        F: function() {
            for (var t = this, e = t.t[t.S].querySelectorAll(t.r[t.S]), n = 0; n < e.length; ++n)
                e[n].parentNode.classList[t.b("SELECT" === e[n].tagName && "" !== e[n].value)](t.h("is-active"))
        },
        O: function(t) {
            var e = "data-placeholder"
              , n = t.getAttribute(e);
            null !== n && (t.removeAttribute(e),
            t.setAttribute("placeholder", n))
        },
        L: function(t, e) {
            var n = this;
            t.classList.add(n.h("label")),
            t.textContent = n.q(t, e),
            "function" == typeof n.n[n.S].customLabel && (t.textContent = n.n[n.S].customLabel.call(n, t, e))
        },
        g: function(t, e) {
            var n = this
              , i = e.getAttribute("placeholder");
            "label" !== n.n[n.S].prioritize && i || (i && e.setAttribute("data-placeholder", i),
            i = n.q(t, e)),
            "function" == typeof n.n[n.S].customPlaceholder && (i = n.n[n.S].customPlaceholder.call(n, i, e, t)),
            "SELECT" === e.tagName ? n.R(e, i) : e.setAttribute("placeholder", i)
        },
        R: function(t, e) {
            var n = t.firstElementChild;
            n.hasAttribute("value") && n.value ? (t.insertBefore(new Option(e,""), n),
            !1 === t.options[t.selectedIndex].defaultSelected && (t.selectedIndex = 0)) : n.setAttribute("value", ""),
            "" === n.textContent && (n.textContent = e)
        },
        w: function(t, e) {
            var n = this
              , i = n.T("div", {
                class: n.h("wrap") + " " + n.h("wrap-" + e.tagName.toLowerCase())
            });
            void 0 !== e.value && e.value.length && i.classList.add(n.h("is-active")),
            (null !== e.getAttribute("required") || e.classList.contains(n.n[n.S].requiredClass)) && i.classList.add(n.h("is-required")),
            e.parentNode.insertBefore(i, e),
            i.appendChild(t),
            i.appendChild(e)
        }
    },
    "function" == typeof define && define.amd ? define([], (function() {
        return n
    }
    )) : "object" == typeof module && module.exports ? module.exports = n : t.FloatLabels = n
}(window, document);
