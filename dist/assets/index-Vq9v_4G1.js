;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s)
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const a = {}
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    )
  }
  function r(s) {
    if (s.ep) return
    s.ep = !0
    const a = n(s)
    fetch(s.href, a)
  }
})()
function Fa(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const ze = {},
  er = [],
  Tt = () => {},
  Gh = () => !1,
  fs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  La = (e) => e.startsWith("onUpdate:"),
  ht = Object.assign,
  ja = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Kh = Object.prototype.hasOwnProperty,
  Me = (e, t) => Kh.call(e, t),
  pe = Array.isArray,
  tr = (e) => ds(e) === "[object Map]",
  Ei = (e) => ds(e) === "[object Set]",
  be = (e) => typeof e == "function",
  tt = (e) => typeof e == "string",
  cr = (e) => typeof e == "symbol",
  qe = (e) => e !== null && typeof e == "object",
  Si = (e) => (qe(e) || be(e)) && be(e.then) && be(e.catch),
  Pi = Object.prototype.toString,
  ds = (e) => Pi.call(e),
  Yh = (e) => ds(e).slice(8, -1),
  Ci = (e) => ds(e) === "[object Object]",
  Ba = (e) =>
    tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Qr = Fa(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  hs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Xh = /-(\w)/g,
  Kt = hs((e) => e.replace(Xh, (t, n) => (n ? n.toUpperCase() : ""))),
  Zh = /\B([A-Z])/g,
  fr = hs((e) => e.replace(Zh, "-$1").toLowerCase()),
  vs = hs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ta = hs((e) => (e ? `on${vs(e)}` : "")),
  _n = (e, t) => !Object.is(e, t),
  es = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  as = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  va = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let $o
const Mi = () =>
  $o ||
  ($o =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function Da(e) {
  if (pe(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = tt(r) ? t0(r) : Da(r)
      if (s) for (const a in s) t[a] = s[a]
    }
    return t
  } else if (tt(e) || qe(e)) return e
}
const Jh = /;(?![^(]*\))/g,
  Qh = /:([^]+)/,
  e0 = /\/\*[^]*?\*\//g
function t0(e) {
  const t = {}
  return (
    e
      .replace(e0, "")
      .split(Jh)
      .forEach((n) => {
        if (n) {
          const r = n.split(Qh)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function M(e) {
  let t = ""
  if (tt(e)) t = e
  else if (pe(e))
    for (let n = 0; n < e.length; n++) {
      const r = M(e[n])
      r && (t += r + " ")
    }
  else if (qe(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const n0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  r0 = Fa(n0)
function Ai(e) {
  return !!e || e === ""
}
const Rt = (e) =>
    tt(e)
      ? e
      : e == null
        ? ""
        : pe(e) || (qe(e) && (e.toString === Pi || !be(e.toString)))
          ? JSON.stringify(e, Oi, 2)
          : String(e),
  Oi = (e, t) =>
    t && t.__v_isRef
      ? Oi(e, t.value)
      : tr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], a) => ((n[na(r, a) + " =>"] = s), n),
              {},
            ),
          }
        : Ei(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => na(n)) }
          : cr(t)
            ? na(t)
            : qe(t) && !pe(t) && !Ci(t)
              ? String(t)
              : t,
  na = (e, t = "") => {
    var n
    return cr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let Bt
class s0 {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Bt),
      !t && Bt && (this.index = (Bt.scopes || (Bt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Bt
      try {
        return (Bt = this), t()
      } finally {
        Bt = n
      }
    }
  }
  on() {
    Bt = this
  }
  off() {
    Bt = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function a0(e, t = Bt) {
  t && t.active && t.effects.push(e)
}
function l0() {
  return Bt
}
let On
class Ha {
  constructor(t, n, r, s) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 3),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._queryings = 0),
      (this._depsLength = 0),
      a0(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      ;(this._dirtyLevel = 0), this._queryings++, Ln()
      for (const t of this.deps)
        if (t.computed && (o0(t.computed), this._dirtyLevel >= 2)) break
      jn(), this._queryings--
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = xn,
      n = On
    try {
      return (xn = !0), (On = this), this._runnings++, Eo(this), this.fn()
    } finally {
      So(this), this._runnings--, (On = n), (xn = t)
    }
  }
  stop() {
    var t
    this.active &&
      (Eo(this),
      So(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function o0(e) {
  return e.value
}
function Eo(e) {
  e._trackId++, (e._depsLength = 0)
}
function So(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Ii(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Ii(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let xn = !0,
  ga = 0
const Ri = []
function Ln() {
  Ri.push(xn), (xn = !1)
}
function jn() {
  const e = Ri.pop()
  xn = e === void 0 ? !0 : e
}
function za() {
  ga++
}
function qa() {
  for (ga--; !ga && pa.length; ) pa.shift()()
}
function Ti(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Ii(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const pa = []
function Ni(e, t, n) {
  za()
  for (const r of e.keys())
    if (
      !(!r.allowRecurse && r._runnings) &&
      r._dirtyLevel < t &&
      (!r._runnings || t !== 2)
    ) {
      const s = r._dirtyLevel
      ;(r._dirtyLevel = t),
        s === 0 &&
          (!r._queryings || t !== 2) &&
          (r.trigger(), r.scheduler && pa.push(r.scheduler))
    }
  qa()
}
const Fi = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  ba = new WeakMap(),
  In = Symbol(""),
  ma = Symbol("")
function Pt(e, t, n) {
  if (xn && On) {
    let r = ba.get(e)
    r || ba.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Fi(() => r.delete(n)))), Ti(On, s)
  }
}
function tn(e, t, n, r, s, a) {
  const i = ba.get(e)
  if (!i) return
  let u = []
  if (t === "clear") u = [...i.values()]
  else if (n === "length" && pe(e)) {
    const f = Number(r)
    i.forEach((d, h) => {
      ;(h === "length" || (!cr(h) && h >= f)) && u.push(d)
    })
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        pe(e)
          ? Ba(n) && u.push(i.get("length"))
          : (u.push(i.get(In)), tr(e) && u.push(i.get(ma)))
        break
      case "delete":
        pe(e) || (u.push(i.get(In)), tr(e) && u.push(i.get(ma)))
        break
      case "set":
        tr(e) && u.push(i.get(In))
        break
    }
  za()
  for (const f of u) f && Ni(f, 3)
  qa()
}
const i0 = Fa("__proto__,__v_isRef,__isVue"),
  Li = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(cr),
  ),
  Po = u0()
function u0() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = Re(this)
        for (let a = 0, i = this.length; a < i; a++) Pt(r, "get", a + "")
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(Re)) : s
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Ln(), za()
        const r = Re(this)[t].apply(this, n)
        return qa(), jn(), r
      }
    }),
    e
  )
}
function c0(e) {
  const t = Re(this)
  return Pt(t, "has", e), t.hasOwnProperty(e)
}
class ji {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._shallow = n)
  }
  get(t, n, r) {
    const s = this._isReadonly,
      a = this._shallow
    if (n === "__v_isReactive") return !s
    if (n === "__v_isReadonly") return s
    if (n === "__v_isShallow") return a
    if (n === "__v_raw")
      return r === (s ? (a ? k0 : zi) : a ? Hi : Di).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = pe(t)
    if (!s) {
      if (i && Me(Po, n)) return Reflect.get(Po, n, r)
      if (n === "hasOwnProperty") return c0
    }
    const u = Reflect.get(t, n, r)
    return (cr(n) ? Li.has(n) : i0(n)) || (s || Pt(t, "get", n), a)
      ? u
      : pt(u)
        ? i && Ba(n)
          ? u
          : u.value
        : qe(u)
          ? s
            ? Wi(u)
            : Rr(u)
          : u
  }
}
class Bi extends ji {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let a = t[n]
    if (!this._shallow) {
      const f = sr(a)
      if (
        (!ls(r) && !sr(r) && ((a = Re(a)), (r = Re(r))),
        !pe(t) && pt(a) && !pt(r))
      )
        return f ? !1 : ((a.value = r), !0)
    }
    const i = pe(t) && Ba(n) ? Number(n) < t.length : Me(t, n),
      u = Reflect.set(t, n, r, s)
    return (
      t === Re(s) && (i ? _n(r, a) && tn(t, "set", n, r) : tn(t, "add", n, r)),
      u
    )
  }
  deleteProperty(t, n) {
    const r = Me(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && tn(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!cr(n) || !Li.has(n)) && Pt(t, "has", n), r
  }
  ownKeys(t) {
    return Pt(t, "iterate", pe(t) ? "length" : In), Reflect.ownKeys(t)
  }
}
class f0 extends ji {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const d0 = new Bi(),
  h0 = new f0(),
  v0 = new Bi(!0),
  Wa = (e) => e,
  gs = (e) => Reflect.getPrototypeOf(e)
function Ur(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = Re(e),
    a = Re(t)
  n || (_n(t, a) && Pt(s, "get", t), Pt(s, "get", a))
  const { has: i } = gs(s),
    u = r ? Wa : n ? Ga : Sr
  if (i.call(s, t)) return u(e.get(t))
  if (i.call(s, a)) return u(e.get(a))
  e !== s && e.get(t)
}
function Vr(e, t = !1) {
  const n = this.__v_raw,
    r = Re(n),
    s = Re(e)
  return (
    t || (_n(e, s) && Pt(r, "has", e), Pt(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function Gr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Pt(Re(e), "iterate", In), Reflect.get(e, "size", e)
  )
}
function Co(e) {
  e = Re(e)
  const t = Re(this)
  return gs(t).has.call(t, e) || (t.add(e), tn(t, "add", e, e)), this
}
function Mo(e, t) {
  t = Re(t)
  const n = Re(this),
    { has: r, get: s } = gs(n)
  let a = r.call(n, e)
  a || ((e = Re(e)), (a = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), a ? _n(t, i) && tn(n, "set", e, t) : tn(n, "add", e, t), this
  )
}
function Ao(e) {
  const t = Re(this),
    { has: n, get: r } = gs(t)
  let s = n.call(t, e)
  s || ((e = Re(e)), (s = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return s && tn(t, "delete", e, void 0), a
}
function Oo() {
  const e = Re(this),
    t = e.size !== 0,
    n = e.clear()
  return t && tn(e, "clear", void 0, void 0), n
}
function Kr(e, t) {
  return function (r, s) {
    const a = this,
      i = a.__v_raw,
      u = Re(i),
      f = t ? Wa : e ? Ga : Sr
    return (
      !e && Pt(u, "iterate", In), i.forEach((d, h) => r.call(s, f(d), f(h), a))
    )
  }
}
function Yr(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      a = Re(s),
      i = tr(a),
      u = e === "entries" || (e === Symbol.iterator && i),
      f = e === "keys" && i,
      d = s[e](...r),
      h = n ? Wa : t ? Ga : Sr
    return (
      !t && Pt(a, "iterate", f ? ma : In),
      {
        next() {
          const { value: y, done: k } = d.next()
          return k
            ? { value: y, done: k }
            : { value: u ? [h(y[0]), h(y[1])] : h(y), done: k }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function vn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function g0() {
  const e = {
      get(a) {
        return Ur(this, a)
      },
      get size() {
        return Gr(this)
      },
      has: Vr,
      add: Co,
      set: Mo,
      delete: Ao,
      clear: Oo,
      forEach: Kr(!1, !1),
    },
    t = {
      get(a) {
        return Ur(this, a, !1, !0)
      },
      get size() {
        return Gr(this)
      },
      has: Vr,
      add: Co,
      set: Mo,
      delete: Ao,
      clear: Oo,
      forEach: Kr(!1, !0),
    },
    n = {
      get(a) {
        return Ur(this, a, !0)
      },
      get size() {
        return Gr(this, !0)
      },
      has(a) {
        return Vr.call(this, a, !0)
      },
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear"),
      forEach: Kr(!0, !1),
    },
    r = {
      get(a) {
        return Ur(this, a, !0, !0)
      },
      get size() {
        return Gr(this, !0)
      },
      has(a) {
        return Vr.call(this, a, !0)
      },
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear"),
      forEach: Kr(!0, !0),
    }
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      ;(e[a] = Yr(a, !1, !1)),
        (n[a] = Yr(a, !0, !1)),
        (t[a] = Yr(a, !1, !0)),
        (r[a] = Yr(a, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [p0, b0, m0, y0] = g0()
function Ua(e, t) {
  const n = t ? (e ? y0 : m0) : e ? b0 : p0
  return (r, s, a) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Me(n, s) && s in r ? n : r, s, a)
}
const x0 = { get: Ua(!1, !1) },
  w0 = { get: Ua(!1, !0) },
  _0 = { get: Ua(!0, !1) },
  Di = new WeakMap(),
  Hi = new WeakMap(),
  zi = new WeakMap(),
  k0 = new WeakMap()
function $0(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2
    default:
      return 0
  }
}
function E0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $0(Yh(e))
}
function Rr(e) {
  return sr(e) ? e : Va(e, !1, d0, x0, Di)
}
function qi(e) {
  return Va(e, !1, v0, w0, Hi)
}
function Wi(e) {
  return Va(e, !0, h0, _0, zi)
}
function Va(e, t, n, r, s) {
  if (!qe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const a = s.get(e)
  if (a) return a
  const i = E0(e)
  if (i === 0) return e
  const u = new Proxy(e, i === 2 ? r : n)
  return s.set(e, u), u
}
function nr(e) {
  return sr(e) ? nr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function sr(e) {
  return !!(e && e.__v_isReadonly)
}
function ls(e) {
  return !!(e && e.__v_isShallow)
}
function Ui(e) {
  return nr(e) || sr(e)
}
function Re(e) {
  const t = e && e.__v_raw
  return t ? Re(t) : e
}
function Vi(e) {
  return as(e, "__v_skip", !0), e
}
const Sr = (e) => (qe(e) ? Rr(e) : e),
  Ga = (e) => (qe(e) ? Wi(e) : e)
class Gi {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ha(
        () => t(this._value),
        () => ya(this, 1),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = Re(this)
    return (
      Ki(t),
      (!t._cacheable || t.effect.dirty) &&
        _n(t._value, (t._value = t.effect.run())) &&
        ya(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function S0(e, t, n = !1) {
  let r, s
  const a = be(e)
  return (
    a ? ((r = e), (s = Tt)) : ((r = e.get), (s = e.set)),
    new Gi(r, s, a || !s, n)
  )
}
function Ki(e) {
  xn &&
    On &&
    ((e = Re(e)),
    Ti(
      On,
      e.dep ||
        (e.dep = Fi(() => (e.dep = void 0), e instanceof Gi ? e : void 0)),
    ))
}
function ya(e, t = 3, n) {
  e = Re(e)
  const r = e.dep
  r && Ni(r, t)
}
function pt(e) {
  return !!(e && e.__v_isRef === !0)
}
function _e(e) {
  return Yi(e, !1)
}
function P0(e) {
  return Yi(e, !0)
}
function Yi(e, t) {
  return pt(e) ? e : new C0(e, t)
}
class C0 {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Re(t)),
      (this._value = n ? t : Sr(t))
  }
  get value() {
    return Ki(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || ls(t) || sr(t)
    ;(t = n ? t : Re(t)),
      _n(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Sr(t)), ya(this, 3))
  }
}
function ue(e) {
  return pt(e) ? e.value : e
}
const M0 = {
  get: (e, t, n) => ue(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return pt(s) && !pt(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function Xi(e) {
  return nr(e) ? e : new Proxy(e, M0)
}
function wn(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (a) {
    ps(a, t, n)
  }
  return s
}
function Ht(e, t, n, r) {
  if (be(e)) {
    const a = wn(e, t, n, r)
    return (
      a &&
        Si(a) &&
        a.catch((i) => {
          ps(i, t, n)
        }),
      a
    )
  }
  const s = []
  for (let a = 0; a < e.length; a++) s.push(Ht(e[a], t, n, r))
  return s
}
function ps(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let a = t.parent
    const i = t.proxy,
      u = `https://vuejs.org/errors/#runtime-${n}`
    for (; a; ) {
      const d = a.ec
      if (d) {
        for (let h = 0; h < d.length; h++) if (d[h](e, i, u) === !1) return
      }
      a = a.parent
    }
    const f = t.appContext.config.errorHandler
    if (f) {
      wn(f, null, 10, [e, i, u])
      return
    }
  }
  A0(e, n, s, r)
}
function A0(e, t, n, r = !0) {
  console.error(e)
}
let Pr = !1,
  xa = !1
const gt = []
let Vt = 0
const rr = []
let Qt = null,
  Mn = 0
const Zi = Promise.resolve()
let Ka = null
function Ji(e) {
  const t = Ka || Zi
  return e ? t.then(this ? e.bind(this) : e) : t
}
function O0(e) {
  let t = Vt + 1,
    n = gt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = gt[r],
      a = Cr(s)
    a < e || (a === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function Ya(e) {
  ;(!gt.length || !gt.includes(e, Pr && e.allowRecurse ? Vt + 1 : Vt)) &&
    (e.id == null ? gt.push(e) : gt.splice(O0(e.id), 0, e), Qi())
}
function Qi() {
  !Pr && !xa && ((xa = !0), (Ka = Zi.then(tu)))
}
function I0(e) {
  const t = gt.indexOf(e)
  t > Vt && gt.splice(t, 1)
}
function R0(e) {
  pe(e)
    ? rr.push(...e)
    : (!Qt || !Qt.includes(e, e.allowRecurse ? Mn + 1 : Mn)) && rr.push(e),
    Qi()
}
function Io(e, t, n = Pr ? Vt + 1 : 0) {
  for (; n < gt.length; n++) {
    const r = gt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      gt.splice(n, 1), n--, r()
    }
  }
}
function eu(e) {
  if (rr.length) {
    const t = [...new Set(rr)]
    if (((rr.length = 0), Qt)) {
      Qt.push(...t)
      return
    }
    for (Qt = t, Qt.sort((n, r) => Cr(n) - Cr(r)), Mn = 0; Mn < Qt.length; Mn++)
      Qt[Mn]()
    ;(Qt = null), (Mn = 0)
  }
}
const Cr = (e) => (e.id == null ? 1 / 0 : e.id),
  T0 = (e, t) => {
    const n = Cr(e) - Cr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function tu(e) {
  ;(xa = !1), (Pr = !0), gt.sort(T0)
  try {
    for (Vt = 0; Vt < gt.length; Vt++) {
      const t = gt[Vt]
      t && t.active !== !1 && wn(t, null, 14)
    }
  } finally {
    ;(Vt = 0),
      (gt.length = 0),
      eu(),
      (Pr = !1),
      (Ka = null),
      (gt.length || rr.length) && tu()
  }
}
function N0(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || ze
  let s = n
  const a = t.startsWith("update:"),
    i = a && t.slice(7)
  if (i && i in r) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: y, trim: k } = r[h] || ze
    k && (s = n.map((C) => (tt(C) ? C.trim() : C))), y && (s = n.map(va))
  }
  let u,
    f = r[(u = ta(t))] || r[(u = ta(Kt(t)))]
  !f && a && (f = r[(u = ta(fr(t)))]), f && Ht(f, e, 6, s)
  const d = r[u + "Once"]
  if (d) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[u]) return
    ;(e.emitted[u] = !0), Ht(d, e, 6, s)
  }
}
function nu(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const a = e.emits
  let i = {},
    u = !1
  if (!be(e)) {
    const f = (d) => {
      const h = nu(d, t, !0)
      h && ((u = !0), ht(i, h))
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  return !a && !u
    ? (qe(e) && r.set(e, null), null)
    : (pe(a) ? a.forEach((f) => (i[f] = null)) : ht(i, a),
      qe(e) && r.set(e, i),
      i)
}
function bs(e, t) {
  return !e || !fs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, fr(t)) || Me(e, t))
}
let Nt = null,
  ms = null
function os(e) {
  const t = Nt
  return (Nt = e), (ms = (e && e.type.__scopeId) || null), t
}
function Xa(e) {
  ms = e
}
function Za() {
  ms = null
}
function ct(e, t = Nt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && qo(-1)
    const a = os(t)
    let i
    try {
      i = e(...s)
    } finally {
      os(a), r._d && qo(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function ra(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: a,
    propsOptions: [i],
    slots: u,
    attrs: f,
    emit: d,
    render: h,
    renderCache: y,
    data: k,
    setupState: C,
    ctx: j,
    inheritAttrs: _,
  } = e
  let P, R
  const U = os(e)
  try {
    if (n.shapeFlag & 4) {
      const Y = s || r,
        B = Y
      ;(P = Ut(h.call(B, Y, y, a, C, k, j))), (R = f)
    } else {
      const Y = t
      ;(P = Ut(
        Y.length > 1 ? Y(a, { attrs: f, slots: u, emit: d }) : Y(a, null),
      )),
        (R = t.props ? f : F0(f))
    }
  } catch (Y) {
    ;(kr.length = 0), ps(Y, e, 1), (P = le(Nn))
  }
  let q = P
  if (R && _ !== !1) {
    const Y = Object.keys(R),
      { shapeFlag: B } = q
    Y.length && B & 7 && (i && Y.some(La) && (R = L0(R, i)), (q = Fn(q, R)))
  }
  return (
    n.dirs && ((q = Fn(q)), (q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (q.transition = n.transition),
    (P = q),
    os(U),
    P
  )
}
const F0 = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || fs(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  L0 = (e, t) => {
    const n = {}
    for (const r in e) (!La(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function j0(e, t, n) {
  const { props: r, children: s, component: a } = e,
    { props: i, children: u, patchFlag: f } = t,
    d = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && f >= 0) {
    if (f & 1024) return !0
    if (f & 16) return r ? Ro(r, i, d) : !!i
    if (f & 8) {
      const h = t.dynamicProps
      for (let y = 0; y < h.length; y++) {
        const k = h[y]
        if (i[k] !== r[k] && !bs(d, k)) return !0
      }
    }
  } else
    return (s || u) && (!u || !u.$stable)
      ? !0
      : r === i
        ? !1
        : r
          ? i
            ? Ro(r, i, d)
            : !0
          : !!i
  return !1
}
function Ro(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const a = r[s]
    if (t[a] !== e[a] && !bs(n, a)) return !0
  }
  return !1
}
function B0({ vnode: e, parent: t }, n) {
  if (n)
    for (; t; ) {
      const r = t.subTree
      if (
        (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      )
        ((e = t.vnode).el = n), (t = t.parent)
      else break
    }
}
const ru = "components",
  D0 = "directives"
function su(e, t) {
  return au(ru, e, !0, t) || e
}
const H0 = Symbol.for("v-ndc")
function z0(e) {
  return au(D0, e)
}
function au(e, t, n = !0, r = !1) {
  const s = Nt || ft
  if (s) {
    const a = s.type
    if (e === ru) {
      const u = Iv(a, !1)
      if (u && (u === t || u === Kt(t) || u === vs(Kt(t)))) return a
    }
    const i = To(s[e] || a[e], t) || To(s.appContext[e], t)
    return !i && r ? a : i
  }
}
function To(e, t) {
  return e && (e[t] || e[Kt(t)] || e[vs(Kt(t))])
}
const q0 = (e) => e.__isSuspense
function W0(e, t) {
  t && t.pendingBranch
    ? pe(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : R0(e)
}
function rn(e, t) {
  return Ja(e, null, t)
}
const Xr = {}
function nn(e, t, n) {
  return Ja(e, t, n)
}
function Ja(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: a, onTrack: i, onTrigger: u } = ze,
) {
  var f
  if (t && a) {
    const B = t
    t = (...D) => {
      B(...D), Y()
    }
  }
  const d = l0() === ((f = ft) == null ? void 0 : f.scope) ? ft : null
  let h,
    y = !1,
    k = !1
  if (
    (pt(e)
      ? ((h = () => e.value), (y = ls(e)))
      : nr(e)
        ? ((h = () => e), (r = !0))
        : pe(e)
          ? ((k = !0),
            (y = e.some((B) => nr(B) || ls(B))),
            (h = () =>
              e.map((B) => {
                if (pt(B)) return B.value
                if (nr(B)) return An(B)
                if (be(B)) return wn(B, d, 2)
              })))
          : be(e)
            ? t
              ? (h = () => wn(e, d, 2))
              : (h = () => {
                  if (!(d && d.isUnmounted)) return C && C(), Ht(e, d, 3, [j])
                })
            : (h = Tt),
    t && r)
  ) {
    const B = h
    h = () => An(B())
  }
  let C,
    j = (B) => {
      C = q.onStop = () => {
        wn(B, d, 4), (C = q.onStop = void 0)
      }
    },
    _
  if (_s)
    if (
      ((j = Tt),
      t ? n && Ht(t, d, 3, [h(), k ? [] : void 0, j]) : h(),
      s === "sync")
    ) {
      const B = Nv()
      _ = B.__watcherHandles || (B.__watcherHandles = [])
    } else return Tt
  let P = k ? new Array(e.length).fill(Xr) : Xr
  const R = () => {
    if (!(!q.active || !q.dirty))
      if (t) {
        const B = q.run()
        ;(r || y || (k ? B.some((D, fe) => _n(D, P[fe])) : _n(B, P))) &&
          (C && C(),
          Ht(t, d, 3, [B, P === Xr ? void 0 : k && P[0] === Xr ? [] : P, j]),
          (P = B))
      } else q.run()
  }
  R.allowRecurse = !!t
  let U
  s === "sync"
    ? (U = R)
    : s === "post"
      ? (U = () => St(R, d && d.suspense))
      : ((R.pre = !0), d && (R.id = d.uid), (U = () => Ya(R)))
  const q = new Ha(h, Tt, U),
    Y = () => {
      q.stop(), d && d.scope && ja(d.scope.effects, q)
    }
  return (
    t
      ? n
        ? R()
        : (P = q.run())
      : s === "post"
        ? St(q.run.bind(q), d && d.suspense)
        : q.run(),
    _ && _.push(Y),
    Y
  )
}
function U0(e, t, n) {
  const r = this.proxy,
    s = tt(e) ? (e.includes(".") ? lu(r, e) : () => r[e]) : e.bind(r, r)
  let a
  be(t) ? (a = t) : ((a = t.handler), (n = t))
  const i = ft
  ar(this)
  const u = Ja(s, a.bind(r), n)
  return i ? ar(i) : Rn(), u
}
function lu(e, t) {
  const n = t.split(".")
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function An(e, t) {
  if (!qe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), pt(e))) An(e.value, t)
  else if (pe(e)) for (let n = 0; n < e.length; n++) An(e[n], t)
  else if (Ei(e) || tr(e))
    e.forEach((n) => {
      An(n, t)
    })
  else if (Ci(e)) for (const n in e) An(e[n], t)
  return e
}
function ou(e, t) {
  const n = Nt
  if (n === null) return e
  const r = ks(n) || n.proxy,
    s = e.dirs || (e.dirs = [])
  for (let a = 0; a < t.length; a++) {
    let [i, u, f, d = ze] = t[a]
    i &&
      (be(i) && (i = { mounted: i, updated: i }),
      i.deep && An(u),
      s.push({
        dir: i,
        instance: r,
        value: u,
        oldValue: void 0,
        arg: f,
        modifiers: d,
      }))
  }
  return e
}
function Pn(e, t, n, r) {
  const s = e.dirs,
    a = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const u = s[i]
    a && (u.oldValue = a[i].value)
    let f = u.dir[r]
    f && (Ln(), Ht(f, n, 8, [e.el, u, e, t]), jn())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Ot(e, t) {
  return be(e) ? ht({ name: e.name }, t, { setup: e }) : e
}
const ts = (e) => !!e.type.__asyncLoader,
  iu = (e) => e.type.__isKeepAlive
function V0(e, t) {
  uu(e, "a", t)
}
function G0(e, t) {
  uu(e, "da", t)
}
function uu(e, t, n = ft) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((ys(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) iu(s.parent.vnode) && K0(r, t, n, s), (s = s.parent)
  }
}
function K0(e, t, n, r) {
  const s = ys(t, e, r, !0)
  kn(() => {
    ja(r[t], s)
  }, n)
}
function ys(e, t, n = ft, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          Ln(), ar(n)
          const u = Ht(t, n, e, i)
          return Rn(), jn(), u
        })
    return r ? s.unshift(a) : s.push(a), a
  }
}
const sn =
    (e) =>
    (t, n = ft) =>
      (!_s || e === "sp") && ys(e, (...r) => t(...r), n),
  Y0 = sn("bm"),
  bt = sn("m"),
  cu = sn("bu"),
  X0 = sn("u"),
  Z0 = sn("bum"),
  kn = sn("um"),
  J0 = sn("sp"),
  Q0 = sn("rtg"),
  ev = sn("rtc")
function tv(e, t = ft) {
  ys("ec", e, t)
}
function wa(e, t, n, r) {
  let s
  const a = n && n[r]
  if (pe(e) || tt(e)) {
    s = new Array(e.length)
    for (let i = 0, u = e.length; i < u; i++)
      s[i] = t(e[i], i, void 0, a && a[i])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, a && a[i])
  } else if (qe(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, u) => t(i, u, void 0, a && a[u]))
    else {
      const i = Object.keys(e)
      s = new Array(i.length)
      for (let u = 0, f = i.length; u < f; u++) {
        const d = i[u]
        s[u] = t(e[d], d, u, a && a[u])
      }
    }
  else s = []
  return n && (n[r] = s), s
}
const _a = (e) => (e ? (_u(e) ? ks(e) || e.proxy : _a(e.parent)) : null),
  _r = ht(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _a(e.parent),
    $root: (e) => _a(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Qa(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ya(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Ji.bind(e.proxy)),
    $watch: (e) => U0.bind(e),
  }),
  sa = (e, t) => e !== ze && !e.__isScriptSetup && Me(e, t),
  nv = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: a,
        accessCache: i,
        type: u,
        appContext: f,
      } = e
      let d
      if (t[0] !== "$") {
        const C = i[t]
        if (C !== void 0)
          switch (C) {
            case 1:
              return r[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return a[t]
          }
        else {
          if (sa(r, t)) return (i[t] = 1), r[t]
          if (s !== ze && Me(s, t)) return (i[t] = 2), s[t]
          if ((d = e.propsOptions[0]) && Me(d, t)) return (i[t] = 3), a[t]
          if (n !== ze && Me(n, t)) return (i[t] = 4), n[t]
          ka && (i[t] = 0)
        }
      }
      const h = _r[t]
      let y, k
      if (h) return t === "$attrs" && Pt(e, "get", t), h(e)
      if ((y = u.__cssModules) && (y = y[t])) return y
      if (n !== ze && Me(n, t)) return (i[t] = 4), n[t]
      if (((k = f.config.globalProperties), Me(k, t))) return k[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: a } = e
      return sa(s, t)
        ? ((s[t] = n), !0)
        : r !== ze && Me(r, t)
          ? ((r[t] = n), !0)
          : Me(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((a[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: a,
        },
      },
      i,
    ) {
      let u
      return (
        !!n[i] ||
        (e !== ze && Me(e, i)) ||
        sa(t, i) ||
        ((u = a[0]) && Me(u, i)) ||
        Me(r, i) ||
        Me(_r, i) ||
        Me(s.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Me(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function No(e) {
  return pe(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ka = !0
function rv(e) {
  const t = Qa(e),
    n = e.proxy,
    r = e.ctx
  ;(ka = !1), t.beforeCreate && Fo(t.beforeCreate, e, "bc")
  const {
    data: s,
    computed: a,
    methods: i,
    watch: u,
    provide: f,
    inject: d,
    created: h,
    beforeMount: y,
    mounted: k,
    beforeUpdate: C,
    updated: j,
    activated: _,
    deactivated: P,
    beforeDestroy: R,
    beforeUnmount: U,
    destroyed: q,
    unmounted: Y,
    render: B,
    renderTracked: D,
    renderTriggered: fe,
    errorCaptured: he,
    serverPrefetch: mt,
    expose: Ve,
    inheritAttrs: Je,
    components: _t,
    directives: We,
    filters: Yt,
  } = t
  if ((d && sv(d, r, null), i))
    for (const J in i) {
      const $e = i[J]
      be($e) && (r[J] = $e.bind(n))
    }
  if (s) {
    const J = s.call(n, n)
    qe(J) && (e.data = Rr(J))
  }
  if (((ka = !0), a))
    for (const J in a) {
      const $e = a[J],
        Be = be($e) ? $e.bind(n, n) : be($e.get) ? $e.get.bind(n, n) : Tt,
        kt = !be($e) && be($e.set) ? $e.set.bind(n) : Tt,
        yt = oe({ get: Be, set: kt })
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (nt) => (yt.value = nt),
      })
    }
  if (u) for (const J in u) fu(u[J], r, n, J)
  if (f) {
    const J = be(f) ? f.call(n) : f
    Reflect.ownKeys(J).forEach(($e) => {
      Gt($e, J[$e])
    })
  }
  h && Fo(h, e, "c")
  function ve(J, $e) {
    pe($e) ? $e.forEach((Be) => J(Be.bind(n))) : $e && J($e.bind(n))
  }
  if (
    (ve(Y0, y),
    ve(bt, k),
    ve(cu, C),
    ve(X0, j),
    ve(V0, _),
    ve(G0, P),
    ve(tv, he),
    ve(ev, D),
    ve(Q0, fe),
    ve(Z0, U),
    ve(kn, Y),
    ve(J0, mt),
    pe(Ve))
  )
    if (Ve.length) {
      const J = e.exposed || (e.exposed = {})
      Ve.forEach(($e) => {
        Object.defineProperty(J, $e, {
          get: () => n[$e],
          set: (Be) => (n[$e] = Be),
        })
      })
    } else e.exposed || (e.exposed = {})
  B && e.render === Tt && (e.render = B),
    Je != null && (e.inheritAttrs = Je),
    _t && (e.components = _t),
    We && (e.directives = We)
}
function sv(e, t, n = Tt) {
  pe(e) && (e = $a(e))
  for (const r in e) {
    const s = e[r]
    let a
    qe(s)
      ? "default" in s
        ? (a = dt(s.from || r, s.default, !0))
        : (a = dt(s.from || r))
      : (a = dt(s)),
      pt(a)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (i) => (a.value = i),
          })
        : (t[r] = a)
  }
}
function Fo(e, t, n) {
  Ht(pe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function fu(e, t, n, r) {
  const s = r.includes(".") ? lu(n, r) : () => n[r]
  if (tt(e)) {
    const a = t[e]
    be(a) && nn(s, a)
  } else if (be(e)) nn(s, e.bind(n))
  else if (qe(e))
    if (pe(e)) e.forEach((a) => fu(a, t, n, r))
    else {
      const a = be(e.handler) ? e.handler.bind(n) : t[e.handler]
      be(a) && nn(s, a, e)
    }
}
function Qa(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: a,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    u = a.get(t)
  let f
  return (
    u
      ? (f = u)
      : !s.length && !n && !r
        ? (f = t)
        : ((f = {}),
          s.length && s.forEach((d) => is(f, d, i, !0)),
          is(f, t, i)),
    qe(t) && a.set(t, f),
    f
  )
}
function is(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t
  a && is(e, a, n, !0), s && s.forEach((i) => is(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const u = av[i] || (n && n[i])
      e[i] = u ? u(e[i], t[i]) : t[i]
    }
  return e
}
const av = {
  data: Lo,
  props: jo,
  emits: jo,
  methods: wr,
  computed: wr,
  beforeCreate: wt,
  created: wt,
  beforeMount: wt,
  mounted: wt,
  beforeUpdate: wt,
  updated: wt,
  beforeDestroy: wt,
  beforeUnmount: wt,
  destroyed: wt,
  unmounted: wt,
  activated: wt,
  deactivated: wt,
  errorCaptured: wt,
  serverPrefetch: wt,
  components: wr,
  directives: wr,
  watch: ov,
  provide: Lo,
  inject: lv,
}
function Lo(e, t) {
  return t
    ? e
      ? function () {
          return ht(
            be(e) ? e.call(this, this) : e,
            be(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function lv(e, t) {
  return wr($a(e), $a(t))
}
function $a(e) {
  if (pe(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function wt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function wr(e, t) {
  return e ? ht(Object.create(null), e, t) : t
}
function jo(e, t) {
  return e
    ? pe(e) && pe(t)
      ? [...new Set([...e, ...t])]
      : ht(Object.create(null), No(e), No(t ?? {}))
    : t
}
function ov(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ht(Object.create(null), e)
  for (const r in t) n[r] = wt(e[r], t[r])
  return n
}
function du() {
  return {
    app: null,
    config: {
      isNativeTag: Gh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let iv = 0
function uv(e, t) {
  return function (r, s = null) {
    be(r) || (r = ht({}, r)), s != null && !qe(s) && (s = null)
    const a = du(),
      i = new WeakSet()
    let u = !1
    const f = (a.app = {
      _uid: iv++,
      _component: r,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: Fv,
      get config() {
        return a.config
      },
      set config(d) {},
      use(d, ...h) {
        return (
          i.has(d) ||
            (d && be(d.install)
              ? (i.add(d), d.install(f, ...h))
              : be(d) && (i.add(d), d(f, ...h))),
          f
        )
      },
      mixin(d) {
        return a.mixins.includes(d) || a.mixins.push(d), f
      },
      component(d, h) {
        return h ? ((a.components[d] = h), f) : a.components[d]
      },
      directive(d, h) {
        return h ? ((a.directives[d] = h), f) : a.directives[d]
      },
      mount(d, h, y) {
        if (!u) {
          const k = le(r, s)
          return (
            (k.appContext = a),
            y === !0 ? (y = "svg") : y === !1 && (y = void 0),
            h && t ? t(k, d) : e(k, d, y),
            (u = !0),
            (f._container = d),
            (d.__vue_app__ = f),
            ks(k.component) || k.component.proxy
          )
        }
      },
      unmount() {
        u && (e(null, f._container), delete f._container.__vue_app__)
      },
      provide(d, h) {
        return (a.provides[d] = h), f
      },
      runWithContext(d) {
        us = f
        try {
          return d()
        } finally {
          us = null
        }
      },
    })
    return f
  }
}
let us = null
function Gt(e, t) {
  if (ft) {
    let n = ft.provides
    const r = ft.parent && ft.parent.provides
    r === n && (n = ft.provides = Object.create(r)), (n[e] = t)
  }
}
function dt(e, t, n = !1) {
  const r = ft || Nt
  if (r || us) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : us._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && be(t) ? t.call(r && r.proxy) : t
  }
}
function cv(e, t, n, r = !1) {
  const s = {},
    a = {}
  as(a, ws, 1), (e.propsDefaults = Object.create(null)), hu(e, t, s, a)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : qi(s)) : e.type.props ? (e.props = s) : (e.props = a),
    (e.attrs = a)
}
function fv(e, t, n, r) {
  const {
      props: s,
      attrs: a,
      vnode: { patchFlag: i },
    } = e,
    u = Re(s),
    [f] = e.propsOptions
  let d = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps
      for (let y = 0; y < h.length; y++) {
        let k = h[y]
        if (bs(e.emitsOptions, k)) continue
        const C = t[k]
        if (f)
          if (Me(a, k)) C !== a[k] && ((a[k] = C), (d = !0))
          else {
            const j = Kt(k)
            s[j] = Ea(f, u, j, C, e, !1)
          }
        else C !== a[k] && ((a[k] = C), (d = !0))
      }
    }
  } else {
    hu(e, t, s, a) && (d = !0)
    let h
    for (const y in u)
      (!t || (!Me(t, y) && ((h = fr(y)) === y || !Me(t, h)))) &&
        (f
          ? n &&
            (n[y] !== void 0 || n[h] !== void 0) &&
            (s[y] = Ea(f, u, y, void 0, e, !0))
          : delete s[y])
    if (a !== u) for (const y in a) (!t || !Me(t, y)) && (delete a[y], (d = !0))
  }
  d && tn(e, "set", "$attrs")
}
function hu(e, t, n, r) {
  const [s, a] = e.propsOptions
  let i = !1,
    u
  if (t)
    for (let f in t) {
      if (Qr(f)) continue
      const d = t[f]
      let h
      s && Me(s, (h = Kt(f)))
        ? !a || !a.includes(h)
          ? (n[h] = d)
          : ((u || (u = {}))[h] = d)
        : bs(e.emitsOptions, f) ||
          ((!(f in r) || d !== r[f]) && ((r[f] = d), (i = !0)))
    }
  if (a) {
    const f = Re(n),
      d = u || ze
    for (let h = 0; h < a.length; h++) {
      const y = a[h]
      n[y] = Ea(s, f, y, d[y], e, !Me(d, y))
    }
  }
  return i
}
function Ea(e, t, n, r, s, a) {
  const i = e[n]
  if (i != null) {
    const u = Me(i, "default")
    if (u && r === void 0) {
      const f = i.default
      if (i.type !== Function && !i.skipFactory && be(f)) {
        const { propsDefaults: d } = s
        n in d ? (r = d[n]) : (ar(s), (r = d[n] = f.call(null, t)), Rn())
      } else r = f
    }
    i[0] && (a && !u ? (r = !1) : i[1] && (r === "" || r === fr(n)) && (r = !0))
  }
  return r
}
function vu(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const a = e.props,
    i = {},
    u = []
  let f = !1
  if (!be(e)) {
    const h = (y) => {
      f = !0
      const [k, C] = vu(y, t, !0)
      ht(i, k), C && u.push(...C)
    }
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h)
  }
  if (!a && !f) return qe(e) && r.set(e, er), er
  if (pe(a))
    for (let h = 0; h < a.length; h++) {
      const y = Kt(a[h])
      Bo(y) && (i[y] = ze)
    }
  else if (a)
    for (const h in a) {
      const y = Kt(h)
      if (Bo(y)) {
        const k = a[h],
          C = (i[y] = pe(k) || be(k) ? { type: k } : ht({}, k))
        if (C) {
          const j = zo(Boolean, C.type),
            _ = zo(String, C.type)
          ;(C[0] = j > -1),
            (C[1] = _ < 0 || j < _),
            (j > -1 || Me(C, "default")) && u.push(y)
        }
      }
    }
  const d = [i, u]
  return qe(e) && r.set(e, d), d
}
function Bo(e) {
  return e[0] !== "$"
}
function Do(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function Ho(e, t) {
  return Do(e) === Do(t)
}
function zo(e, t) {
  return pe(t) ? t.findIndex((n) => Ho(n, e)) : be(t) && Ho(t, e) ? 0 : -1
}
const gu = (e) => e[0] === "_" || e === "$stable",
  el = (e) => (pe(e) ? e.map(Ut) : [Ut(e)]),
  dv = (e, t, n) => {
    if (t._n) return t
    const r = ct((...s) => el(t(...s)), n)
    return (r._c = !1), r
  },
  pu = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (gu(s)) continue
      const a = e[s]
      if (be(a)) t[s] = dv(s, a, r)
      else if (a != null) {
        const i = el(a)
        t[s] = () => i
      }
    }
  },
  bu = (e, t) => {
    const n = el(t)
    e.slots.default = () => n
  },
  hv = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Re(t)), as(t, "_", n)) : pu(t, (e.slots = {}))
    } else (e.slots = {}), t && bu(e, t)
    as(e.slots, ws, 1)
  },
  vv = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let a = !0,
      i = ze
    if (r.shapeFlag & 32) {
      const u = t._
      u
        ? n && u === 1
          ? (a = !1)
          : (ht(s, t), !n && u === 1 && delete s._)
        : ((a = !t.$stable), pu(t, s)),
        (i = t)
    } else t && (bu(e, t), (i = { default: 1 }))
    if (a) for (const u in s) !gu(u) && i[u] == null && delete s[u]
  }
function Sa(e, t, n, r, s = !1) {
  if (pe(e)) {
    e.forEach((k, C) => Sa(k, t && (pe(t) ? t[C] : t), n, r, s))
    return
  }
  if (ts(r) && !s) return
  const a = r.shapeFlag & 4 ? ks(r.component) || r.component.proxy : r.el,
    i = s ? null : a,
    { i: u, r: f } = e,
    d = t && t.r,
    h = u.refs === ze ? (u.refs = {}) : u.refs,
    y = u.setupState
  if (
    (d != null &&
      d !== f &&
      (tt(d)
        ? ((h[d] = null), Me(y, d) && (y[d] = null))
        : pt(d) && (d.value = null)),
    be(f))
  )
    wn(f, u, 12, [i, h])
  else {
    const k = tt(f),
      C = pt(f)
    if (k || C) {
      const j = () => {
        if (e.f) {
          const _ = k ? (Me(y, f) ? y[f] : h[f]) : f.value
          s
            ? pe(_) && ja(_, a)
            : pe(_)
              ? _.includes(a) || _.push(a)
              : k
                ? ((h[f] = [a]), Me(y, f) && (y[f] = h[f]))
                : ((f.value = [a]), e.k && (h[e.k] = f.value))
        } else
          k
            ? ((h[f] = i), Me(y, f) && (y[f] = i))
            : C && ((f.value = i), e.k && (h[e.k] = i))
      }
      i ? ((j.id = -1), St(j, n)) : j()
    }
  }
}
const St = W0
function gv(e) {
  return pv(e)
}
function pv(e, t) {
  const n = Mi()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: a,
      createElement: i,
      createText: u,
      createComment: f,
      setText: d,
      setElementText: h,
      parentNode: y,
      nextSibling: k,
      setScopeId: C = Tt,
      insertStaticContent: j,
    } = e,
    _ = (
      g,
      m,
      E,
      A = null,
      T = null,
      F = null,
      K = void 0,
      W = null,
      G = !!m.dynamicChildren,
    ) => {
      if (g === m) return
      g && !yr(g, m) && ((A = I(g)), nt(g, T, F, !0), (g = null)),
        m.patchFlag === -2 && ((G = !1), (m.dynamicChildren = null))
      const { type: L, ref: ee, shapeFlag: ie } = m
      switch (L) {
        case xs:
          P(g, m, E, A)
          break
        case Nn:
          R(g, m, E, A)
          break
        case ns:
          g == null && U(m, E, A, K)
          break
        case et:
          _t(g, m, E, A, T, F, K, W, G)
          break
        default:
          ie & 1
            ? B(g, m, E, A, T, F, K, W, G)
            : ie & 6
              ? We(g, m, E, A, T, F, K, W, G)
              : (ie & 64 || ie & 128) && L.process(g, m, E, A, T, F, K, W, G, V)
      }
      ee != null && T && Sa(ee, g && g.ref, F, m || g, !m)
    },
    P = (g, m, E, A) => {
      if (g == null) r((m.el = u(m.children)), E, A)
      else {
        const T = (m.el = g.el)
        m.children !== g.children && d(T, m.children)
      }
    },
    R = (g, m, E, A) => {
      g == null ? r((m.el = f(m.children || "")), E, A) : (m.el = g.el)
    },
    U = (g, m, E, A) => {
      ;[g.el, g.anchor] = j(g.children, m, E, A, g.el, g.anchor)
    },
    q = ({ el: g, anchor: m }, E, A) => {
      let T
      for (; g && g !== m; ) (T = k(g)), r(g, E, A), (g = T)
      r(m, E, A)
    },
    Y = ({ el: g, anchor: m }) => {
      let E
      for (; g && g !== m; ) (E = k(g)), s(g), (g = E)
      s(m)
    },
    B = (g, m, E, A, T, F, K, W, G) => {
      m.type === "svg" ? (K = "svg") : m.type === "math" && (K = "mathml"),
        g == null ? D(m, E, A, T, F, K, W, G) : mt(g, m, T, F, K, W, G)
    },
    D = (g, m, E, A, T, F, K, W) => {
      let G, L
      const { props: ee, shapeFlag: ie, transition: ae, dirs: de } = g
      if (
        ((G = g.el = i(g.type, F, ee && ee.is, ee)),
        ie & 8
          ? h(G, g.children)
          : ie & 16 && he(g.children, G, null, A, T, aa(g, F), K, W),
        de && Pn(g, null, A, "created"),
        fe(G, g, g.scopeId, K, A),
        ee)
      ) {
        for (const Oe in ee)
          Oe !== "value" &&
            !Qr(Oe) &&
            a(G, Oe, null, ee[Oe], F, g.children, A, T, Ue)
        "value" in ee && a(G, "value", null, ee.value, F),
          (L = ee.onVnodeBeforeMount) && Wt(L, A, g)
      }
      de && Pn(g, null, A, "beforeMount")
      const me = bv(T, ae)
      me && ae.beforeEnter(G),
        r(G, m, E),
        ((L = ee && ee.onVnodeMounted) || me || de) &&
          St(() => {
            L && Wt(L, A, g), me && ae.enter(G), de && Pn(g, null, A, "mounted")
          }, T)
    },
    fe = (g, m, E, A, T) => {
      if ((E && C(g, E), A)) for (let F = 0; F < A.length; F++) C(g, A[F])
      if (T) {
        let F = T.subTree
        if (m === F) {
          const K = T.vnode
          fe(g, K, K.scopeId, K.slotScopeIds, T.parent)
        }
      }
    },
    he = (g, m, E, A, T, F, K, W, G = 0) => {
      for (let L = G; L < g.length; L++) {
        const ee = (g[L] = W ? pn(g[L]) : Ut(g[L]))
        _(null, ee, m, E, A, T, F, K, W)
      }
    },
    mt = (g, m, E, A, T, F, K) => {
      const W = (m.el = g.el)
      let { patchFlag: G, dynamicChildren: L, dirs: ee } = m
      G |= g.patchFlag & 16
      const ie = g.props || ze,
        ae = m.props || ze
      let de
      if (
        (E && Cn(E, !1),
        (de = ae.onVnodeBeforeUpdate) && Wt(de, E, m, g),
        ee && Pn(m, g, E, "beforeUpdate"),
        E && Cn(E, !0),
        L
          ? Ve(g.dynamicChildren, L, W, E, A, aa(m, T), F)
          : K || $e(g, m, W, null, E, A, aa(m, T), F, !1),
        G > 0)
      ) {
        if (G & 16) Je(W, m, ie, ae, E, A, T)
        else if (
          (G & 2 && ie.class !== ae.class && a(W, "class", null, ae.class, T),
          G & 4 && a(W, "style", ie.style, ae.style, T),
          G & 8)
        ) {
          const me = m.dynamicProps
          for (let Oe = 0; Oe < me.length; Oe++) {
            const je = me[Oe],
              Ge = ie[je],
              $t = ae[je]
            ;($t !== Ge || je === "value") &&
              a(W, je, Ge, $t, T, g.children, E, A, Ue)
          }
        }
        G & 1 && g.children !== m.children && h(W, m.children)
      } else !K && L == null && Je(W, m, ie, ae, E, A, T)
      ;((de = ae.onVnodeUpdated) || ee) &&
        St(() => {
          de && Wt(de, E, m, g), ee && Pn(m, g, E, "updated")
        }, A)
    },
    Ve = (g, m, E, A, T, F, K) => {
      for (let W = 0; W < m.length; W++) {
        const G = g[W],
          L = m[W],
          ee =
            G.el && (G.type === et || !yr(G, L) || G.shapeFlag & 70)
              ? y(G.el)
              : E
        _(G, L, ee, null, A, T, F, K, !0)
      }
    },
    Je = (g, m, E, A, T, F, K) => {
      if (E !== A) {
        if (E !== ze)
          for (const W in E)
            !Qr(W) && !(W in A) && a(g, W, E[W], null, K, m.children, T, F, Ue)
        for (const W in A) {
          if (Qr(W)) continue
          const G = A[W],
            L = E[W]
          G !== L && W !== "value" && a(g, W, L, G, K, m.children, T, F, Ue)
        }
        "value" in A && a(g, "value", E.value, A.value, K)
      }
    },
    _t = (g, m, E, A, T, F, K, W, G) => {
      const L = (m.el = g ? g.el : u("")),
        ee = (m.anchor = g ? g.anchor : u(""))
      let { patchFlag: ie, dynamicChildren: ae, slotScopeIds: de } = m
      de && (W = W ? W.concat(de) : de),
        g == null
          ? (r(L, E, A), r(ee, E, A), he(m.children, E, ee, T, F, K, W, G))
          : ie > 0 && ie & 64 && ae && g.dynamicChildren
            ? (Ve(g.dynamicChildren, ae, E, T, F, K, W),
              (m.key != null || (T && m === T.subTree)) && mu(g, m, !0))
            : $e(g, m, E, ee, T, F, K, W, G)
    },
    We = (g, m, E, A, T, F, K, W, G) => {
      ;(m.slotScopeIds = W),
        g == null
          ? m.shapeFlag & 512
            ? T.ctx.activate(m, E, A, K, G)
            : Yt(m, E, A, T, F, K, G)
          : X(g, m, G)
    },
    Yt = (g, m, E, A, T, F, K) => {
      const W = (g.component = Pv(g, A, T))
      if ((iu(g) && (W.ctx.renderer = V), Cv(W), W.asyncDep)) {
        if ((T && T.registerDep(W, ve), !g.el)) {
          const G = (W.subTree = le(Nn))
          R(null, G, m, E)
        }
      } else ve(W, g, m, E, T, F, K)
    },
    X = (g, m, E) => {
      const A = (m.component = g.component)
      if (j0(g, m, E))
        if (A.asyncDep && !A.asyncResolved) {
          J(A, m, E)
          return
        } else (A.next = m), I0(A.update), (A.effect.dirty = !0), A.update()
      else (m.el = g.el), (A.vnode = m)
    },
    ve = (g, m, E, A, T, F, K) => {
      const W = () => {
          if (g.isMounted) {
            let { next: ee, bu: ie, u: ae, parent: de, vnode: me } = g
            {
              const on = yu(g)
              if (on) {
                ee && ((ee.el = me.el), J(g, ee, K)),
                  on.asyncDep.then(() => {
                    g.isUnmounted || W()
                  })
                return
              }
            }
            let Oe = ee,
              je
            Cn(g, !1),
              ee ? ((ee.el = me.el), J(g, ee, K)) : (ee = me),
              ie && es(ie),
              (je = ee.props && ee.props.onVnodeBeforeUpdate) &&
                Wt(je, de, ee, me),
              Cn(g, !0)
            const Ge = ra(g),
              $t = g.subTree
            ;(g.subTree = Ge),
              _($t, Ge, y($t.el), I($t), g, T, F),
              (ee.el = Ge.el),
              Oe === null && B0(g, Ge.el),
              ae && St(ae, T),
              (je = ee.props && ee.props.onVnodeUpdated) &&
                St(() => Wt(je, de, ee, me), T)
          } else {
            let ee
            const { el: ie, props: ae } = m,
              { bm: de, m: me, parent: Oe } = g,
              je = ts(m)
            if (
              (Cn(g, !1),
              de && es(de),
              !je && (ee = ae && ae.onVnodeBeforeMount) && Wt(ee, Oe, m),
              Cn(g, !0),
              ie && Ae)
            ) {
              const Ge = () => {
                ;(g.subTree = ra(g)), Ae(ie, g.subTree, g, T, null)
              }
              je
                ? m.type.__asyncLoader().then(() => !g.isUnmounted && Ge())
                : Ge()
            } else {
              const Ge = (g.subTree = ra(g))
              _(null, Ge, E, A, g, T, F), (m.el = Ge.el)
            }
            if ((me && St(me, T), !je && (ee = ae && ae.onVnodeMounted))) {
              const Ge = m
              St(() => Wt(ee, Oe, Ge), T)
            }
            ;(m.shapeFlag & 256 ||
              (Oe && ts(Oe.vnode) && Oe.vnode.shapeFlag & 256)) &&
              g.a &&
              St(g.a, T),
              (g.isMounted = !0),
              (m = E = A = null)
          }
        },
        G = (g.effect = new Ha(W, Tt, () => Ya(L), g.scope)),
        L = (g.update = () => {
          G.dirty && G.run()
        })
      ;(L.id = g.uid), Cn(g, !0), L()
    },
    J = (g, m, E) => {
      m.component = g
      const A = g.vnode.props
      ;(g.vnode = m),
        (g.next = null),
        fv(g, m.props, A, E),
        vv(g, m.children, E),
        Ln(),
        Io(g),
        jn()
    },
    $e = (g, m, E, A, T, F, K, W, G = !1) => {
      const L = g && g.children,
        ee = g ? g.shapeFlag : 0,
        ie = m.children,
        { patchFlag: ae, shapeFlag: de } = m
      if (ae > 0) {
        if (ae & 128) {
          kt(L, ie, E, A, T, F, K, W, G)
          return
        } else if (ae & 256) {
          Be(L, ie, E, A, T, F, K, W, G)
          return
        }
      }
      de & 8
        ? (ee & 16 && Ue(L, T, F), ie !== L && h(E, ie))
        : ee & 16
          ? de & 16
            ? kt(L, ie, E, A, T, F, K, W, G)
            : Ue(L, T, F, !0)
          : (ee & 8 && h(E, ""), de & 16 && he(ie, E, A, T, F, K, W, G))
    },
    Be = (g, m, E, A, T, F, K, W, G) => {
      ;(g = g || er), (m = m || er)
      const L = g.length,
        ee = m.length,
        ie = Math.min(L, ee)
      let ae
      for (ae = 0; ae < ie; ae++) {
        const de = (m[ae] = G ? pn(m[ae]) : Ut(m[ae]))
        _(g[ae], de, E, null, T, F, K, W, G)
      }
      L > ee ? Ue(g, T, F, !0, !1, ie) : he(m, E, A, T, F, K, W, G, ie)
    },
    kt = (g, m, E, A, T, F, K, W, G) => {
      let L = 0
      const ee = m.length
      let ie = g.length - 1,
        ae = ee - 1
      for (; L <= ie && L <= ae; ) {
        const de = g[L],
          me = (m[L] = G ? pn(m[L]) : Ut(m[L]))
        if (yr(de, me)) _(de, me, E, null, T, F, K, W, G)
        else break
        L++
      }
      for (; L <= ie && L <= ae; ) {
        const de = g[ie],
          me = (m[ae] = G ? pn(m[ae]) : Ut(m[ae]))
        if (yr(de, me)) _(de, me, E, null, T, F, K, W, G)
        else break
        ie--, ae--
      }
      if (L > ie) {
        if (L <= ae) {
          const de = ae + 1,
            me = de < ee ? m[de].el : A
          for (; L <= ae; )
            _(null, (m[L] = G ? pn(m[L]) : Ut(m[L])), E, me, T, F, K, W, G), L++
        }
      } else if (L > ae) for (; L <= ie; ) nt(g[L], T, F, !0), L++
      else {
        const de = L,
          me = L,
          Oe = new Map()
        for (L = me; L <= ae; L++) {
          const xt = (m[L] = G ? pn(m[L]) : Ut(m[L]))
          xt.key != null && Oe.set(xt.key, L)
        }
        let je,
          Ge = 0
        const $t = ae - me + 1
        let on = !1,
          Nr = 0
        const un = new Array($t)
        for (L = 0; L < $t; L++) un[L] = 0
        for (L = de; L <= ie; L++) {
          const xt = g[L]
          if (Ge >= $t) {
            nt(xt, T, F, !0)
            continue
          }
          let It
          if (xt.key != null) It = Oe.get(xt.key)
          else
            for (je = me; je <= ae; je++)
              if (un[je - me] === 0 && yr(xt, m[je])) {
                It = je
                break
              }
          It === void 0
            ? nt(xt, T, F, !0)
            : ((un[It - me] = L + 1),
              It >= Nr ? (Nr = It) : (on = !0),
              _(xt, m[It], E, null, T, F, K, W, G),
              Ge++)
        }
        const vr = on ? mv(un) : er
        for (je = vr.length - 1, L = $t - 1; L >= 0; L--) {
          const xt = me + L,
            It = m[xt],
            gr = xt + 1 < ee ? m[xt + 1].el : A
          un[L] === 0
            ? _(null, It, E, gr, T, F, K, W, G)
            : on && (je < 0 || L !== vr[je] ? yt(It, E, gr, 2) : je--)
        }
      }
    },
    yt = (g, m, E, A, T = null) => {
      const { el: F, type: K, transition: W, children: G, shapeFlag: L } = g
      if (L & 6) {
        yt(g.component.subTree, m, E, A)
        return
      }
      if (L & 128) {
        g.suspense.move(m, E, A)
        return
      }
      if (L & 64) {
        K.move(g, m, E, V)
        return
      }
      if (K === et) {
        r(F, m, E)
        for (let ie = 0; ie < G.length; ie++) yt(G[ie], m, E, A)
        r(g.anchor, m, E)
        return
      }
      if (K === ns) {
        q(g, m, E)
        return
      }
      if (A !== 2 && L & 1 && W)
        if (A === 0) W.beforeEnter(F), r(F, m, E), St(() => W.enter(F), T)
        else {
          const { leave: ie, delayLeave: ae, afterLeave: de } = W,
            me = () => r(F, m, E),
            Oe = () => {
              ie(F, () => {
                me(), de && de()
              })
            }
          ae ? ae(F, me, Oe) : Oe()
        }
      else r(F, m, E)
    },
    nt = (g, m, E, A = !1, T = !1) => {
      const {
        type: F,
        props: K,
        ref: W,
        children: G,
        dynamicChildren: L,
        shapeFlag: ee,
        patchFlag: ie,
        dirs: ae,
      } = g
      if ((W != null && Sa(W, null, E, g, !0), ee & 256)) {
        m.ctx.deactivate(g)
        return
      }
      const de = ee & 1 && ae,
        me = !ts(g)
      let Oe
      if ((me && (Oe = K && K.onVnodeBeforeUnmount) && Wt(Oe, m, g), ee & 6))
        ln(g.component, E, A)
      else {
        if (ee & 128) {
          g.suspense.unmount(E, A)
          return
        }
        de && Pn(g, null, m, "beforeUnmount"),
          ee & 64
            ? g.type.remove(g, m, E, T, V, A)
            : L && (F !== et || (ie > 0 && ie & 64))
              ? Ue(L, m, E, !1, !0)
              : ((F === et && ie & 384) || (!T && ee & 16)) && Ue(G, m, E),
          A && qt(g)
      }
      ;((me && (Oe = K && K.onVnodeUnmounted)) || de) &&
        St(() => {
          Oe && Wt(Oe, m, g), de && Pn(g, null, m, "unmounted")
        }, E)
    },
    qt = (g) => {
      const { type: m, el: E, anchor: A, transition: T } = g
      if (m === et) {
        rt(E, A)
        return
      }
      if (m === ns) {
        Y(g)
        return
      }
      const F = () => {
        s(E), T && !T.persisted && T.afterLeave && T.afterLeave()
      }
      if (g.shapeFlag & 1 && T && !T.persisted) {
        const { leave: K, delayLeave: W } = T,
          G = () => K(E, F)
        W ? W(g.el, F, G) : G()
      } else F()
    },
    rt = (g, m) => {
      let E
      for (; g !== m; ) (E = k(g)), s(g), (g = E)
      s(m)
    },
    ln = (g, m, E) => {
      const { bum: A, scope: T, update: F, subTree: K, um: W } = g
      A && es(A),
        T.stop(),
        F && ((F.active = !1), nt(K, g, m, E)),
        W && St(W, m),
        St(() => {
          g.isUnmounted = !0
        }, m),
        m &&
          m.pendingBranch &&
          !m.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === m.pendingId &&
          (m.deps--, m.deps === 0 && m.resolve())
    },
    Ue = (g, m, E, A = !1, T = !1, F = 0) => {
      for (let K = F; K < g.length; K++) nt(g[K], m, E, A, T)
    },
    I = (g) =>
      g.shapeFlag & 6
        ? I(g.component.subTree)
        : g.shapeFlag & 128
          ? g.suspense.next()
          : k(g.anchor || g.el),
    Q = (g, m, E) => {
      g == null
        ? m._vnode && nt(m._vnode, null, null, !0)
        : _(m._vnode || null, g, m, null, null, null, E),
        Io(),
        eu(),
        (m._vnode = g)
    },
    V = {
      p: _,
      um: nt,
      m: yt,
      r: qt,
      mt: Yt,
      mc: he,
      pc: $e,
      pbc: Ve,
      n: I,
      o: e,
    }
  let se, Ae
  return (
    t && ([se, Ae] = t(V)), { render: Q, hydrate: se, createApp: uv(Q, se) }
  )
}
function aa({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function Cn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function bv(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function mu(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (pe(r) && pe(s))
    for (let a = 0; a < r.length; a++) {
      const i = r[a]
      let u = s[a]
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = s[a] = pn(s[a])), (u.el = i.el)),
        n || mu(i, u)),
        u.type === xs && (u.el = i.el)
    }
}
function mv(e) {
  const t = e.slice(),
    n = [0]
  let r, s, a, i, u
  const f = e.length
  for (r = 0; r < f; r++) {
    const d = e[r]
    if (d !== 0) {
      if (((s = n[n.length - 1]), e[s] < d)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (a = 0, i = n.length - 1; a < i; )
        (u = (a + i) >> 1), e[n[u]] < d ? (a = u + 1) : (i = u)
      d < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r))
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; ) (n[a] = i), (i = t[i])
  return n
}
function yu(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : yu(t)
}
const yv = (e) => e.__isTeleport,
  et = Symbol.for("v-fgt"),
  xs = Symbol.for("v-txt"),
  Nn = Symbol.for("v-cmt"),
  ns = Symbol.for("v-stc"),
  kr = []
let Dt = null
function ge(e = !1) {
  kr.push((Dt = e ? null : []))
}
function xv() {
  kr.pop(), (Dt = kr[kr.length - 1] || null)
}
let Mr = 1
function qo(e) {
  Mr += e
}
function xu(e) {
  return (
    (e.dynamicChildren = Mr > 0 ? Dt || er : null),
    xv(),
    Mr > 0 && Dt && Dt.push(e),
    e
  )
}
function He(e, t, n, r, s, a) {
  return xu(b(e, t, n, r, s, a, !0))
}
function Ye(e, t, n, r, s) {
  return xu(le(e, t, n, r, s, !0))
}
function Pa(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function yr(e, t) {
  return e.type === t.type && e.key === t.key
}
const ws = "__vInternal",
  wu = ({ key: e }) => e ?? null,
  rs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? tt(e) || pt(e) || be(e)
        ? { i: Nt, r: e, k: t, f: !!n }
        : e
      : null
  )
function b(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  a = e === et ? 0 : 1,
  i = !1,
  u = !1,
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wu(t),
    ref: t && rs(t),
    scopeId: ms,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Nt,
  }
  return (
    u
      ? (tl(f, n), a & 128 && e.normalize(f))
      : n && (f.shapeFlag |= tt(n) ? 8 : 16),
    Mr > 0 &&
      !i &&
      Dt &&
      (f.patchFlag > 0 || a & 6) &&
      f.patchFlag !== 32 &&
      Dt.push(f),
    f
  )
}
const le = wv
function wv(e, t = null, n = null, r = 0, s = null, a = !1) {
  if (((!e || e === H0) && (e = Nn), Pa(e))) {
    const u = Fn(e, t, !0)
    return (
      n && tl(u, n),
      Mr > 0 &&
        !a &&
        Dt &&
        (u.shapeFlag & 6 ? (Dt[Dt.indexOf(e)] = u) : Dt.push(u)),
      (u.patchFlag |= -2),
      u
    )
  }
  if ((Rv(e) && (e = e.__vccOpts), t)) {
    t = _v(t)
    let { class: u, style: f } = t
    u && !tt(u) && (t.class = M(u)),
      qe(f) && (Ui(f) && !pe(f) && (f = ht({}, f)), (t.style = Da(f)))
  }
  const i = tt(e) ? 1 : q0(e) ? 128 : yv(e) ? 64 : qe(e) ? 4 : be(e) ? 2 : 0
  return b(e, t, n, r, s, i, a, !0)
}
function _v(e) {
  return e ? (Ui(e) || ws in e ? ht({}, e) : e) : null
}
function Fn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: a, children: i } = e,
    u = t ? $v(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && wu(u),
    ref:
      t && t.ref
        ? n && s
          ? pe(s)
            ? s.concat(rs(t))
            : [s, rs(t)]
          : rs(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== et ? (a === -1 ? 16 : a | 16) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Fn(e.ssContent),
    ssFallback: e.ssFallback && Fn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function we(e = " ", t = 0) {
  return le(xs, null, e, t)
}
function kv(e, t) {
  const n = le(ns, null, e)
  return (n.staticCount = t), n
}
function vt(e = "", t = !1) {
  return t ? (ge(), Ye(Nn, null, e)) : le(Nn, null, e)
}
function Ut(e) {
  return e == null || typeof e == "boolean"
    ? le(Nn)
    : pe(e)
      ? le(et, null, e.slice())
      : typeof e == "object"
        ? pn(e)
        : le(xs, null, String(e))
}
function pn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Fn(e)
}
function tl(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (pe(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), tl(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(ws in t)
        ? (t._ctx = Nt)
        : s === 3 &&
          Nt &&
          (Nt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    be(t)
      ? ((t = { default: t, _ctx: Nt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [we(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function $v(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = M([t.class, r.class]))
      else if (s === "style") t.style = Da([t.style, r.style])
      else if (fs(s)) {
        const a = t[s],
          i = r[s]
        i &&
          a !== i &&
          !(pe(a) && a.includes(i)) &&
          (t[s] = a ? [].concat(a, i) : i)
      } else s !== "" && (t[s] = r[s])
  }
  return t
}
function Wt(e, t, n, r = null) {
  Ht(e, t, 7, [n, r])
}
const Ev = du()
let Sv = 0
function Pv(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Ev,
    a = {
      uid: Sv++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new s0(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: vu(r, s),
      emitsOptions: nu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ze,
      inheritAttrs: r.inheritAttrs,
      ctx: ze,
      data: ze,
      props: ze,
      attrs: ze,
      slots: ze,
      refs: ze,
      setupState: ze,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (a.ctx = { _: a }),
    (a.root = t ? t.root : a),
    (a.emit = N0.bind(null, a)),
    e.ce && e.ce(a),
    a
  )
}
let ft = null,
  nl,
  Ca
{
  const e = Mi(),
    t = (n, r) => {
      let s
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (a) => {
          s.length > 1 ? s.forEach((i) => i(a)) : s[0](a)
        }
      )
    }
  ;(nl = t("__VUE_INSTANCE_SETTERS__", (n) => (ft = n))),
    (Ca = t("__VUE_SSR_SETTERS__", (n) => (_s = n)))
}
const ar = (e) => {
    nl(e), e.scope.on()
  },
  Rn = () => {
    ft && ft.scope.off(), nl(null)
  }
function _u(e) {
  return e.vnode.shapeFlag & 4
}
let _s = !1
function Cv(e, t = !1) {
  t && Ca(t)
  const { props: n, children: r } = e.vnode,
    s = _u(e)
  cv(e, n, s, t), hv(e, r)
  const a = s ? Mv(e, t) : void 0
  return t && Ca(!1), a
}
function Mv(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Vi(new Proxy(e.ctx, nv)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Ov(e) : null)
    ar(e), Ln()
    const a = wn(r, e, 0, [e.props, s])
    if ((jn(), Rn(), Si(a))) {
      if ((a.then(Rn, Rn), t))
        return a
          .then((i) => {
            Wo(e, i, t)
          })
          .catch((i) => {
            ps(i, e, 0)
          })
      e.asyncDep = a
    } else Wo(e, a, t)
  } else ku(e, t)
}
function Wo(e, t, n) {
  be(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : qe(t) && (e.setupState = Xi(t)),
    ku(e, n)
}
let Uo
function ku(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Uo && !r.render) {
      const s = r.template || Qa(e).template
      if (s) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: f } = r,
          d = ht(ht({ isCustomElement: a, delimiters: u }, i), f)
        r.render = Uo(s, d)
      }
    }
    e.render = r.render || Tt
  }
  {
    ar(e), Ln()
    try {
      rv(e)
    } finally {
      jn(), Rn()
    }
  }
}
function Av(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Pt(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function Ov(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Av(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function ks(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Xi(Vi(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in _r) return _r[n](e)
        },
        has(t, n) {
          return n in t || n in _r
        },
      }))
    )
}
function Iv(e, t = !0) {
  return be(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Rv(e) {
  return be(e) && "__vccOpts" in e
}
const oe = (e, t) => S0(e, t, _s)
function ot(e, t, n) {
  const r = arguments.length
  return r === 2
    ? qe(t) && !pe(t)
      ? Pa(t)
        ? le(e, null, [t])
        : le(e, t)
      : le(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Pa(n) && (n = [n]),
      le(e, t, n))
}
const Tv = Symbol.for("v-scx"),
  Nv = () => dt(Tv),
  Fv = "3.4.0",
  Lv = "http://www.w3.org/2000/svg",
  jv = "http://www.w3.org/1998/Math/MathML",
  bn = typeof document < "u" ? document : null,
  Vo = bn && bn.createElement("template"),
  Bv = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? bn.createElementNS(Lv, e)
          : t === "mathml"
            ? bn.createElementNS(jv, e)
            : bn.createElement(e, n ? { is: n } : void 0)
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      )
    },
    createText: (e) => bn.createTextNode(e),
    createComment: (e) => bn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => bn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, a) {
      const i = n ? n.previousSibling : t.lastChild
      if (s && (s === a || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === a || !(s = s.nextSibling));

        );
      else {
        Vo.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const u = Vo.content
        if (r === "svg" || r === "mathml") {
          const f = u.firstChild
          for (; f.firstChild; ) u.appendChild(f.firstChild)
          u.removeChild(f)
        }
        t.insertBefore(u, n)
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Dv = Symbol("_vtc")
function Hv(e, t, n) {
  const r = e[Dv]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const zv = Symbol("_vod"),
  qv = Symbol("")
function Wv(e, t, n) {
  const r = e.style,
    s = tt(n)
  if (n && !s) {
    if (t && !tt(t)) for (const a in t) n[a] == null && Ma(r, a, "")
    for (const a in n) Ma(r, a, n[a])
  } else {
    const a = r.display
    if (s) {
      if (t !== n) {
        const i = r[qv]
        i && (n += ";" + i), (r.cssText = n)
      }
    } else t && e.removeAttribute("style")
    zv in e && (r.display = a)
  }
}
const Go = /\s*!important$/
function Ma(e, t, n) {
  if (pe(n)) n.forEach((r) => Ma(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = Uv(e, t)
    Go.test(n)
      ? e.setProperty(fr(r), n.replace(Go, ""), "important")
      : (e[r] = n)
  }
}
const Ko = ["Webkit", "Moz", "ms"],
  la = {}
function Uv(e, t) {
  const n = la[t]
  if (n) return n
  let r = Kt(t)
  if (r !== "filter" && r in e) return (la[t] = r)
  r = vs(r)
  for (let s = 0; s < Ko.length; s++) {
    const a = Ko[s] + r
    if (a in e) return (la[t] = a)
  }
  return t
}
const Yo = "http://www.w3.org/1999/xlink"
function Vv(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Yo, t.slice(6, t.length))
      : e.setAttributeNS(Yo, t, n)
  else {
    const a = r0(t)
    n == null || (a && !Ai(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function Gv(e, t, n, r, s, a, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, a), (e[t] = n ?? "")
    return
  }
  const u = e.tagName
  if (t === "value" && u !== "PROGRESS" && !u.includes("-")) {
    e._value = n
    const d = u === "OPTION" ? e.getAttribute("value") : e.value,
      h = n ?? ""
    d !== h && (e.value = h), n == null && e.removeAttribute(t)
    return
  }
  let f = !1
  if (n === "" || n == null) {
    const d = typeof e[t]
    d === "boolean"
      ? (n = Ai(n))
      : n == null && d === "string"
        ? ((n = ""), (f = !0))
        : d === "number" && ((n = 0), (f = !0))
  }
  try {
    e[t] = n
  } catch {}
  f && e.removeAttribute(t)
}
function Zn(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Kv(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Xo = Symbol("_vei")
function Yv(e, t, n, r, s = null) {
  const a = e[Xo] || (e[Xo] = {}),
    i = a[t]
  if (r && i) i.value = r
  else {
    const [u, f] = Xv(t)
    if (r) {
      const d = (a[t] = Qv(r, s))
      Zn(e, u, d, f)
    } else i && (Kv(e, u, i, f), (a[t] = void 0))
  }
}
const Zo = /(?:Once|Passive|Capture)$/
function Xv(e) {
  let t
  if (Zo.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Zo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : fr(e.slice(2)), t]
}
let oa = 0
const Zv = Promise.resolve(),
  Jv = () => oa || (Zv.then(() => (oa = 0)), (oa = Date.now()))
function Qv(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    Ht(eg(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = Jv()), n
}
function eg(e, t) {
  if (pe(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const Jo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  tg = (e, t, n, r, s, a, i, u, f) => {
    const d = s === "svg"
    t === "class"
      ? Hv(e, r, d)
      : t === "style"
        ? Wv(e, n, r)
        : fs(t)
          ? La(t) || Yv(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : ng(e, t, r, d)
              )
            ? Gv(e, t, r, a, i, u, f)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              Vv(e, t, r, d))
  }
function ng(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Jo(t) && be(n))
    )
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1
  if (t === "width" || t === "height") {
    const s = e.tagName
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1
  }
  return Jo(t) && tt(n) ? !1 : t in e
}
const Qo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return pe(t) ? (n) => es(t, n) : t
}
function rg(e) {
  e.target.composing = !0
}
function ei(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const ia = Symbol("_assign"),
  sg = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[ia] = Qo(s)
      const a = r || (s.props && s.props.type === "number")
      Zn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let u = e.value
        n && (u = u.trim()), a && (u = va(u)), e[ia](u)
      }),
        n &&
          Zn(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (Zn(e, "compositionstart", rg),
          Zn(e, "compositionend", ei),
          Zn(e, "change", ei))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      a,
    ) {
      if (((e[ia] = Qo(a)), e.composing)) return
      const i = s || e.type === "number" ? va(e.value) : e.value,
        u = t ?? ""
      i !== u &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === u))) ||
          (e.value = u))
    },
  },
  ag = ht({ patchProp: tg }, Bv)
let ti
function lg() {
  return ti || (ti = gv(ag))
}
const og = (...e) => {
  const t = lg().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = ug(r)
      if (!s) return
      const a = t._component
      !be(a) && !a.render && !a.template && (a.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, ig(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function ig(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function ug(e) {
  return tt(e) ? document.querySelector(e) : e
}
const $s = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  cg = {}
function fg(e, t) {
  const n = su("router-view")
  return ge(), Ye(n)
}
const dg = $s(cg, [["render", fg]])
function At(e, t, ...n) {
  if (e in t) {
    let s = t[e]
    return typeof s == "function" ? s(...n) : s
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((s) => `"${s}"`)
      .join(", ")}.`,
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(r, At), r)
}
var Ar = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Ar || {}),
  hg = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(hg || {})
function an({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...s
}) {
  var a
  let i = Eu(r, n),
    u = Object.assign(s, { props: i })
  if (e || (t & 2 && i.static)) return ua(u)
  if (t & 1) {
    let f = (a = i.unmount) == null || a ? 0 : 1
    return At(f, {
      0() {
        return null
      },
      1() {
        return ua({
          ...s,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return ua(u)
}
function ua({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var a, i
  let { as: u, ...f } = Su(e, ["unmount", "static"]),
    d = (a = n.default) == null ? void 0 : a.call(n, r),
    h = {}
  if (r) {
    let y = !1,
      k = []
    for (let [C, j] of Object.entries(r))
      typeof j == "boolean" && (y = !0), j === !0 && k.push(C)
    y && (h["data-headlessui-state"] = k.join(" "))
  }
  if (u === "template") {
    if (
      ((d = $u(d ?? [])),
      Object.keys(f).length > 0 || Object.keys(t).length > 0)
    ) {
      let [y, ...k] = d ?? []
      if (!vg(y) || k.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${s} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(f)
              .concat(Object.keys(t))
              .map((_) => _.trim())
              .filter((_, P, R) => R.indexOf(_) === P)
              .sort((_, P) => _.localeCompare(P))
              .map((_) => `  - ${_}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((_) => `  - ${_}`).join(`
`),
          ].join(`
`),
        )
      let C = Eu((i = y.props) != null ? i : {}, f),
        j = Fn(y, C)
      for (let _ in C)
        _.startsWith("on") && (j.props || (j.props = {}), (j.props[_] = C[_]))
      return j
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d
  }
  return ot(u, Object.assign({}, f, h), { default: () => d })
}
function $u(e) {
  return e.flatMap((t) => (t.type === et ? $u(t.children) : [t]))
}
function Eu(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let r of e)
    for (let s in r)
      s.startsWith("on") && typeof r[s] == "function"
        ? (n[s] != null || (n[s] = []), n[s].push(r[s]))
        : (t[s] = r[s])
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0])),
    )
  for (let r in n)
    Object.assign(t, {
      [r](s, ...a) {
        let i = n[r]
        for (let u of i) {
          if (s instanceof Event && s.defaultPrevented) return
          u(s, ...a)
        }
      },
    })
  return t
}
function Su(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function vg(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
let gg = 0
function pg() {
  return ++gg
}
function Tn() {
  return pg()
}
var lt = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(lt || {})
function re(e) {
  var t
  return e == null || e.value == null
    ? null
    : (t = e.value.$el) != null
      ? t
      : e.value
}
let Pu = Symbol("Context")
var Or = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Or || {})
function bg() {
  return dt(Pu, null)
}
function mg(e) {
  Gt(Pu, e)
}
function ni(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Cu(e, t) {
  let n = _e(ni(e.value.type, e.value.as))
  return (
    bt(() => {
      n.value = ni(e.value.type, e.value.as)
    }),
    rn(() => {
      var r
      n.value ||
        (re(t) &&
          re(t) instanceof HTMLButtonElement &&
          !((r = re(t)) != null && r.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var yg = Object.defineProperty,
  xg = (e, t, n) =>
    t in e
      ? yg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ri = (e, t, n) => (xg(e, typeof t != "symbol" ? t + "" : t, n), n)
class wg {
  constructor() {
    ri(this, "current", this.detect()), ri(this, "currentId", 0)
  }
  set(t) {
    this.current !== t && ((this.currentId = 0), (this.current = t))
  }
  reset() {
    this.set(this.detect())
  }
  nextId() {
    return ++this.currentId
  }
  get isServer() {
    return this.current === "server"
  }
  get isClient() {
    return this.current === "client"
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client"
  }
}
let Es = new wg()
function dr(e) {
  if (Es.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = re(e)
    if (t) return t.ownerDocument
  }
  return document
}
let Aa = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",")
var Qe = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Qe || {}),
  yn = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(yn || {}),
  _g = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(_g || {})
function Ss(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Aa)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var rl = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(rl || {})
function Mu(e, t = 0) {
  var n
  return e === ((n = dr(e)) == null ? void 0 : n.body)
    ? !1
    : At(t, {
        0() {
          return e.matches(Aa)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(Aa)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var kg = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(kg || {})
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "")
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "")
    },
    !0,
  ))
let $g = ["textarea", "input"].join(",")
function Eg(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, $g)) !=
    null
    ? n
    : !1
}
function Jn(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let s = t(n),
      a = t(r)
    if (s === null || a === null) return 0
    let i = s.compareDocumentPosition(a)
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0
  })
}
function Mt(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: s = [] } = {},
) {
  var a
  let i =
      (a = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e == null
          ? void 0
          : e.ownerDocument) != null
        ? a
        : document,
    u = Array.isArray(e) ? (n ? Jn(e) : e) : Ss(e)
  s.length > 0 && u.length > 1 && (u = u.filter((j) => !s.includes(j))),
    (r = r ?? i.activeElement)
  let f = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    d = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, u.indexOf(r)) - 1
      if (t & 4) return Math.max(0, u.indexOf(r)) + 1
      if (t & 8) return u.length - 1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    h = t & 32 ? { preventScroll: !0 } : {},
    y = 0,
    k = u.length,
    C
  do {
    if (y >= k || y + k <= 0) return 0
    let j = d + y
    if (t & 16) j = (j + k) % k
    else {
      if (j < 0) return 3
      if (j >= k) return 1
    }
    ;(C = u[j]), C == null || C.focus(h), (y += f)
  } while (C !== i.activeElement)
  return t & 6 && Eg(C) && C.select(), 2
}
function Zr(e, t, n) {
  Es.isServer ||
    rn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function Au(e, t, n) {
  Es.isServer ||
    rn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Sg(e, t, n = oe(() => !0)) {
  function r(a, i) {
    if (!n.value || a.defaultPrevented) return
    let u = i(a)
    if (u === null || !u.getRootNode().contains(u)) return
    let f = (function d(h) {
      return typeof h == "function"
        ? d(h())
        : Array.isArray(h) || h instanceof Set
          ? h
          : [h]
    })(e)
    for (let d of f) {
      if (d === null) continue
      let h = d instanceof HTMLElement ? d : re(d)
      if (
        (h != null && h.contains(u)) ||
        (a.composed && a.composedPath().includes(h))
      )
        return
    }
    return !Mu(u, rl.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u)
  }
  let s = _e(null)
  Zr(
    "pointerdown",
    (a) => {
      var i, u
      n.value &&
        (s.value =
          ((u = (i = a.composedPath) == null ? void 0 : i.call(a)) == null
            ? void 0
            : u[0]) || a.target)
    },
    !0,
  ),
    Zr(
      "mousedown",
      (a) => {
        var i, u
        n.value &&
          (s.value =
            ((u = (i = a.composedPath) == null ? void 0 : i.call(a)) == null
              ? void 0
              : u[0]) || a.target)
      },
      !0,
    ),
    Zr(
      "click",
      (a) => {
        s.value && (r(a, () => s.value), (s.value = null))
      },
      !0,
    ),
    Zr(
      "touchend",
      (a) => r(a, () => (a.target instanceof HTMLElement ? a.target : null)),
      !0,
    ),
    Au(
      "blur",
      (a) =>
        r(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    )
}
var lr = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(lr || {})
let or = Ot({
  name: "Hidden",
  props: {
    as: { type: [Object, String], default: "div" },
    features: { type: Number, default: 1 },
  },
  setup(e, { slots: t, attrs: n }) {
    return () => {
      let { features: r, ...s } = e,
        a = {
          "aria-hidden": (r & 2) === 2 ? !0 : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
          },
        }
      return an({
        ourProps: a,
        theirProps: s,
        slot: {},
        attrs: n,
        slots: t,
        name: "Hidden",
      })
    }
  },
})
function Pg(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t
          }),
        )
}
var en = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(en || {})
function Ou() {
  let e = _e(0)
  return (
    Au("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Cg(e, t, n, r) {
  Es.isServer ||
    rn((s) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, r),
        s(() => e.removeEventListener(t, n, r))
    })
}
let si = Symbol("PortalParentContext")
function Mg() {
  let e = dt(si, null),
    t = _e([])
  function n(a) {
    return t.value.push(a), e && e.register(a), () => r(a)
  }
  function r(a) {
    let i = t.value.indexOf(a)
    i !== -1 && t.value.splice(i, 1), e && e.unregister(a)
  }
  let s = { register: n, unregister: r, portals: t }
  return [
    t,
    Ot({
      name: "PortalWrapper",
      setup(a, { slots: i }) {
        return (
          Gt(si, s),
          () => {
            var u
            return (u = i.default) == null ? void 0 : u.call(i)
          }
        )
      },
    }),
  ]
}
function Ag({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = _e(null),
    s = dr(r)
  function a() {
    var i
    let u = []
    for (let f of e)
      f !== null &&
        (f instanceof HTMLElement
          ? u.push(f)
          : "value" in f && f.value instanceof HTMLElement && u.push(f.value))
    if (t != null && t.value) for (let f of t.value) u.push(f)
    for (let f of (i =
      s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null
      ? i
      : [])
      f !== document.body &&
        f !== document.head &&
        f instanceof HTMLElement &&
        f.id !== "headlessui-portal-root" &&
        (f.contains(re(r)) || u.some((d) => f.contains(d)) || u.push(f))
    return u
  }
  return {
    resolveContainers: a,
    contains(i) {
      return a().some((u) => u.contains(i))
    },
    mainTreeNodeRef: r,
    MainTreeNode() {
      return n != null ? null : ot(or, { features: lr.Hidden, ref: r })
    },
  }
}
var Og = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Og || {})
let Iu = Symbol("PopoverContext")
function sl(e) {
  let t = dt(Iu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${Oa.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, sl), n)
  }
  return t
}
let Ig = Symbol("PopoverGroupContext")
function Ru() {
  return dt(Ig, null)
}
let Tu = Symbol("PopoverPanelContext")
function Rg() {
  return dt(Tu, null)
}
let Oa = Ot({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let a = _e(null)
      r({ el: a, $el: a })
      let i = _e(1),
        u = _e(null),
        f = _e(null),
        d = _e(null),
        h = _e(null),
        y = oe(() => dr(a)),
        k = oe(() => {
          var B, D
          if (!re(u) || !re(h)) return !1
          for (let We of document.querySelectorAll("body > *"))
            if (
              Number(We == null ? void 0 : We.contains(re(u))) ^
              Number(We == null ? void 0 : We.contains(re(h)))
            )
              return !0
          let fe = Ss(),
            he = fe.indexOf(re(u)),
            mt = (he + fe.length - 1) % fe.length,
            Ve = (he + 1) % fe.length,
            Je = fe[mt],
            _t = fe[Ve]
          return (
            !((B = re(h)) != null && B.contains(Je)) &&
            !((D = re(h)) != null && D.contains(_t))
          )
        }),
        C = {
          popoverState: i,
          buttonId: _e(null),
          panelId: _e(null),
          panel: h,
          button: u,
          isPortalled: k,
          beforePanelSentinel: f,
          afterPanelSentinel: d,
          togglePopover() {
            i.value = At(i.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            i.value !== 1 && (i.value = 1)
          },
          close(B) {
            C.closePopover()
            let D = B
              ? B instanceof HTMLElement
                ? B
                : B.value instanceof HTMLElement
                  ? re(B)
                  : re(C.button)
              : re(C.button)
            D == null || D.focus()
          },
        }
      Gt(Iu, C), mg(oe(() => At(i.value, { 0: Or.Open, 1: Or.Closed })))
      let j = {
          buttonId: C.buttonId,
          panelId: C.panelId,
          close() {
            C.closePopover()
          },
        },
        _ = Ru(),
        P = _ == null ? void 0 : _.registerPopover,
        [R, U] = Mg(),
        q = Ag({
          mainTreeNodeRef: _ == null ? void 0 : _.mainTreeNodeRef,
          portals: R,
          defaultContainers: [u, h],
        })
      function Y() {
        var B, D, fe, he
        return (he = _ == null ? void 0 : _.isFocusWithinPopoverGroup()) != null
          ? he
          : ((B = y.value) == null ? void 0 : B.activeElement) &&
              (((D = re(u)) == null
                ? void 0
                : D.contains(y.value.activeElement)) ||
                ((fe = re(h)) == null
                  ? void 0
                  : fe.contains(y.value.activeElement)))
      }
      return (
        rn(() => (P == null ? void 0 : P(j))),
        Cg(
          (s = y.value) == null ? void 0 : s.defaultView,
          "focus",
          (B) => {
            var D, fe
            B.target !== window &&
              B.target instanceof HTMLElement &&
              i.value === 0 &&
              (Y() ||
                (u &&
                  h &&
                  (q.contains(B.target) ||
                    ((D = re(C.beforePanelSentinel)) != null &&
                      D.contains(B.target)) ||
                    ((fe = re(C.afterPanelSentinel)) != null &&
                      fe.contains(B.target)) ||
                    C.closePopover())))
          },
          !0,
        ),
        Sg(
          q.resolveContainers,
          (B, D) => {
            var fe
            C.closePopover(),
              Mu(D, rl.Loose) ||
                (B.preventDefault(), (fe = re(u)) == null || fe.focus())
          },
          oe(() => i.value === 0),
        ),
        () => {
          let B = { open: i.value === 0, close: C.close }
          return ot(et, [
            ot(U, {}, () =>
              an({
                theirProps: { ...e, ...n },
                ourProps: { ref: a },
                slot: B,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            ot(q.MainTreeNode),
          ])
        }
      )
    },
  }),
  ai = Ot({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Tn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = sl("PopoverButton"),
        a = oe(() => dr(s.button))
      r({ el: s.button, $el: s.button }),
        bt(() => {
          s.buttonId.value = e.id
        }),
        kn(() => {
          s.buttonId.value = null
        })
      let i = Ru(),
        u = i == null ? void 0 : i.closeOthers,
        f = Rg(),
        d = oe(() => (f === null ? !1 : f.value === s.panelId.value)),
        h = _e(null),
        y = `headlessui-focus-sentinel-${Tn()}`
      d.value ||
        rn(() => {
          s.button.value = h.value
        })
      let k = Cu(
        oe(() => ({ as: e.as, type: t.type })),
        h,
      )
      function C(q) {
        var Y, B, D, fe, he
        if (d.value) {
          if (s.popoverState.value === 1) return
          switch (q.key) {
            case lt.Space:
            case lt.Enter:
              q.preventDefault(),
                (B = (Y = q.target).click) == null || B.call(Y),
                s.closePopover(),
                (D = re(s.button)) == null || D.focus()
              break
          }
        } else
          switch (q.key) {
            case lt.Space:
            case lt.Enter:
              q.preventDefault(),
                q.stopPropagation(),
                s.popoverState.value === 1 &&
                  (u == null || u(s.buttonId.value)),
                s.togglePopover()
              break
            case lt.Escape:
              if (s.popoverState.value !== 0)
                return u == null ? void 0 : u(s.buttonId.value)
              if (
                !re(s.button) ||
                ((fe = a.value) != null &&
                  fe.activeElement &&
                  !(
                    (he = re(s.button)) != null &&
                    he.contains(a.value.activeElement)
                  ))
              )
                return
              q.preventDefault(), q.stopPropagation(), s.closePopover()
              break
          }
      }
      function j(q) {
        d.value || (q.key === lt.Space && q.preventDefault())
      }
      function _(q) {
        var Y, B
        e.disabled ||
          (d.value
            ? (s.closePopover(), (Y = re(s.button)) == null || Y.focus())
            : (q.preventDefault(),
              q.stopPropagation(),
              s.popoverState.value === 1 && (u == null || u(s.buttonId.value)),
              s.togglePopover(),
              (B = re(s.button)) == null || B.focus()))
      }
      function P(q) {
        q.preventDefault(), q.stopPropagation()
      }
      let R = Ou()
      function U() {
        let q = re(s.panel)
        if (!q) return
        function Y() {
          At(R.value, {
            [en.Forwards]: () => Mt(q, Qe.First),
            [en.Backwards]: () => Mt(q, Qe.Last),
          }) === yn.Error &&
            Mt(
              Ss().filter((B) => B.dataset.headlessuiFocusGuard !== "true"),
              At(R.value, {
                [en.Forwards]: Qe.Next,
                [en.Backwards]: Qe.Previous,
              }),
              { relativeTo: re(s.button) },
            )
        }
        Y()
      }
      return () => {
        let q = s.popoverState.value === 0,
          Y = { open: q },
          { id: B, ...D } = e,
          fe = d.value
            ? { ref: h, type: k.value, onKeydown: C, onClick: _ }
            : {
                ref: h,
                id: B,
                type: k.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": re(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: C,
                onKeyup: j,
                onClick: _,
                onMousedown: P,
              }
        return ot(et, [
          an({
            ourProps: fe,
            theirProps: { ...t, ...D },
            slot: Y,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          q &&
            !d.value &&
            s.isPortalled.value &&
            ot(or, {
              id: y,
              features: lr.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: U,
            }),
        ])
      }
    },
  }),
  li = Ot({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${Tn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let { focus: s } = e,
        a = sl("PopoverPanel"),
        i = oe(() => dr(a.panel)),
        u = `headlessui-focus-sentinel-before-${Tn()}`,
        f = `headlessui-focus-sentinel-after-${Tn()}`
      r({ el: a.panel, $el: a.panel }),
        bt(() => {
          a.panelId.value = e.id
        }),
        kn(() => {
          a.panelId.value = null
        }),
        Gt(Tu, a.panelId),
        rn(() => {
          var P, R
          if (!s || a.popoverState.value !== 0 || !a.panel) return
          let U = (P = i.value) == null ? void 0 : P.activeElement
          ;((R = re(a.panel)) != null && R.contains(U)) ||
            Mt(re(a.panel), Qe.First)
        })
      let d = bg(),
        h = oe(() =>
          d !== null
            ? (d.value & Or.Open) === Or.Open
            : a.popoverState.value === 0,
        )
      function y(P) {
        var R, U
        switch (P.key) {
          case lt.Escape:
            if (
              a.popoverState.value !== 0 ||
              !re(a.panel) ||
              (i.value &&
                !(
                  (R = re(a.panel)) != null && R.contains(i.value.activeElement)
                ))
            )
              return
            P.preventDefault(),
              P.stopPropagation(),
              a.closePopover(),
              (U = re(a.button)) == null || U.focus()
            break
        }
      }
      function k(P) {
        var R, U, q, Y, B
        let D = P.relatedTarget
        D &&
          re(a.panel) &&
          (((R = re(a.panel)) != null && R.contains(D)) ||
            (a.closePopover(),
            (((q =
              (U = re(a.beforePanelSentinel)) == null ? void 0 : U.contains) !=
              null &&
              q.call(U, D)) ||
              ((B =
                (Y = re(a.afterPanelSentinel)) == null ? void 0 : Y.contains) !=
                null &&
                B.call(Y, D))) &&
              D.focus({ preventScroll: !0 })))
      }
      let C = Ou()
      function j() {
        let P = re(a.panel)
        if (!P) return
        function R() {
          At(C.value, {
            [en.Forwards]: () => {
              var U
              Mt(P, Qe.First) === yn.Error &&
                ((U = re(a.afterPanelSentinel)) == null || U.focus())
            },
            [en.Backwards]: () => {
              var U
              ;(U = re(a.button)) == null || U.focus({ preventScroll: !0 })
            },
          })
        }
        R()
      }
      function _() {
        let P = re(a.panel)
        if (!P) return
        function R() {
          At(C.value, {
            [en.Forwards]: () => {
              let U = re(a.button),
                q = re(a.panel)
              if (!U) return
              let Y = Ss(),
                B = Y.indexOf(U),
                D = Y.slice(0, B + 1),
                fe = [...Y.slice(B + 1), ...D]
              for (let he of fe.slice())
                if (
                  he.dataset.headlessuiFocusGuard === "true" ||
                  (q != null && q.contains(he))
                ) {
                  let mt = fe.indexOf(he)
                  mt !== -1 && fe.splice(mt, 1)
                }
              Mt(fe, Qe.First, { sorted: !1 })
            },
            [en.Backwards]: () => {
              var U
              Mt(P, Qe.Previous) === yn.Error &&
                ((U = re(a.button)) == null || U.focus())
            },
          })
        }
        R()
      }
      return () => {
        let P = { open: a.popoverState.value === 0, close: a.close },
          { id: R, focus: U, ...q } = e,
          Y = {
            ref: a.panel,
            id: R,
            onKeydown: y,
            onFocusout: s && a.popoverState.value === 0 ? k : void 0,
            tabIndex: -1,
          }
        return an({
          ourProps: Y,
          theirProps: { ...t, ...q },
          attrs: t,
          slot: P,
          slots: {
            ...n,
            default: (...B) => {
              var D
              return [
                ot(et, [
                  h.value &&
                    a.isPortalled.value &&
                    ot(or, {
                      id: u,
                      ref: a.beforePanelSentinel,
                      features: lr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: j,
                    }),
                  (D = n.default) == null ? void 0 : D.call(n, ...B),
                  h.value &&
                    a.isPortalled.value &&
                    ot(or, {
                      id: f,
                      ref: a.afterPanelSentinel,
                      features: lr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: _,
                    }),
                ]),
              ]
            },
          },
          features: Ar.RenderStrategy | Ar.Static,
          visible: h.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  Tg = Ot({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = _e(!0)
      return () =>
        t.value
          ? ot(or, {
              as: "button",
              type: "button",
              features: lr.Focusable,
              onFocus(n) {
                n.preventDefault()
                let r,
                  s = 50
                function a() {
                  var i
                  if (s-- <= 0) {
                    r && cancelAnimationFrame(r)
                    return
                  }
                  if ((i = e.onFocus) != null && i.call(e)) {
                    ;(t.value = !1), cancelAnimationFrame(r)
                    return
                  }
                  r = requestAnimationFrame(a)
                }
                r = requestAnimationFrame(a)
              },
            })
          : null
    },
  })
var Ng = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(Ng || {}),
  Fg = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(Fg || {})
let Nu = Symbol("TabsContext")
function Tr(e) {
  let t = dt(Nu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Tr), n)
  }
  return t
}
let al = Symbol("TabsSSRContext"),
  Lg = Ot({
    name: "TabGroup",
    emits: { change: (e) => !0 },
    props: {
      as: { type: [Object, String], default: "template" },
      selectedIndex: { type: [Number], default: null },
      defaultIndex: { type: [Number], default: 0 },
      vertical: { type: [Boolean], default: !1 },
      manual: { type: [Boolean], default: !1 },
    },
    inheritAttrs: !1,
    setup(e, { slots: t, attrs: n, emit: r }) {
      var s
      let a = _e((s = e.selectedIndex) != null ? s : e.defaultIndex),
        i = _e([]),
        u = _e([]),
        f = oe(() => e.selectedIndex !== null),
        d = oe(() => (f.value ? e.selectedIndex : a.value))
      function h(_) {
        var P
        let R = Jn(y.tabs.value, re),
          U = Jn(y.panels.value, re),
          q = R.filter((Y) => {
            var B
            return !((B = re(Y)) != null && B.hasAttribute("disabled"))
          })
        if (_ < 0 || _ > R.length - 1) {
          let Y = At(a.value === null ? 0 : Math.sign(_ - a.value), {
              [-1]: () => 1,
              0: () =>
                At(Math.sign(_), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            B = At(Y, {
              0: () => R.indexOf(q[0]),
              1: () => R.indexOf(q[q.length - 1]),
            })
          B !== -1 && (a.value = B), (y.tabs.value = R), (y.panels.value = U)
        } else {
          let Y = R.slice(0, _),
            B = [...R.slice(_), ...Y].find((fe) => q.includes(fe))
          if (!B) return
          let D = (P = R.indexOf(B)) != null ? P : y.selectedIndex.value
          D === -1 && (D = y.selectedIndex.value),
            (a.value = D),
            (y.tabs.value = R),
            (y.panels.value = U)
        }
      }
      let y = {
        selectedIndex: oe(() => {
          var _, P
          return (P = (_ = a.value) != null ? _ : e.defaultIndex) != null
            ? P
            : null
        }),
        orientation: oe(() => (e.vertical ? "vertical" : "horizontal")),
        activation: oe(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: u,
        setSelectedIndex(_) {
          d.value !== _ && r("change", _), f.value || h(_)
        },
        registerTab(_) {
          var P
          if (i.value.includes(_)) return
          let R = i.value[a.value]
          i.value.push(_), (i.value = Jn(i.value, re))
          let U = (P = i.value.indexOf(R)) != null ? P : a.value
          U !== -1 && (a.value = U)
        },
        unregisterTab(_) {
          let P = i.value.indexOf(_)
          P !== -1 && i.value.splice(P, 1)
        },
        registerPanel(_) {
          u.value.includes(_) || (u.value.push(_), (u.value = Jn(u.value, re)))
        },
        unregisterPanel(_) {
          let P = u.value.indexOf(_)
          P !== -1 && u.value.splice(P, 1)
        },
      }
      Gt(Nu, y)
      let k = _e({ tabs: [], panels: [] }),
        C = _e(!1)
      bt(() => {
        C.value = !0
      }),
        Gt(
          al,
          oe(() => (C.value ? null : k.value)),
        )
      let j = oe(() => e.selectedIndex)
      return (
        bt(() => {
          nn(
            [j],
            () => {
              var _
              return h((_ = e.selectedIndex) != null ? _ : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        rn(() => {
          if (!f.value || d.value == null || y.tabs.value.length <= 0) return
          let _ = Jn(y.tabs.value, re)
          _.some((P, R) => re(y.tabs.value[R]) !== re(P)) &&
            y.setSelectedIndex(
              _.findIndex((P) => re(P) === re(y.tabs.value[d.value])),
            )
        }),
        () => {
          let _ = { selectedIndex: a.value }
          return ot(et, [
            i.value.length <= 0 &&
              ot(Tg, {
                onFocus: () => {
                  for (let P of i.value) {
                    let R = re(P)
                    if ((R == null ? void 0 : R.tabIndex) === 0)
                      return R.focus(), !0
                  }
                  return !1
                },
              }),
            an({
              theirProps: {
                ...n,
                ...Su(e, [
                  "selectedIndex",
                  "defaultIndex",
                  "manual",
                  "vertical",
                  "onChange",
                ]),
              },
              ourProps: {},
              slot: _,
              slots: t,
              attrs: n,
              name: "TabGroup",
            }),
          ])
        }
      )
    },
  }),
  jg = Ot({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = Tr("TabList")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value },
          a = { role: "tablist", "aria-orientation": r.orientation.value }
        return an({
          ourProps: a,
          theirProps: e,
          slot: s,
          attrs: t,
          slots: n,
          name: "TabList",
        })
      }
    },
  }),
  Bg = Ot({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-tabs-tab-${Tn()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Tr("Tab"),
        a = _e(null)
      r({ el: a, $el: a }),
        bt(() => s.registerTab(a)),
        kn(() => s.unregisterTab(a))
      let i = dt(al),
        u = oe(() => {
          if (i.value) {
            let P = i.value.tabs.indexOf(e.id)
            return P === -1 ? i.value.tabs.push(e.id) - 1 : P
          }
          return -1
        }),
        f = oe(() => {
          let P = s.tabs.value.indexOf(a)
          return P === -1 ? u.value : P
        }),
        d = oe(() => f.value === s.selectedIndex.value)
      function h(P) {
        var R
        let U = P()
        if (U === yn.Success && s.activation.value === "auto") {
          let q = (R = dr(a)) == null ? void 0 : R.activeElement,
            Y = s.tabs.value.findIndex((B) => re(B) === q)
          Y !== -1 && s.setSelectedIndex(Y)
        }
        return U
      }
      function y(P) {
        let R = s.tabs.value.map((U) => re(U)).filter(Boolean)
        if (P.key === lt.Space || P.key === lt.Enter) {
          P.preventDefault(), P.stopPropagation(), s.setSelectedIndex(f.value)
          return
        }
        switch (P.key) {
          case lt.Home:
          case lt.PageUp:
            return (
              P.preventDefault(), P.stopPropagation(), h(() => Mt(R, Qe.First))
            )
          case lt.End:
          case lt.PageDown:
            return (
              P.preventDefault(), P.stopPropagation(), h(() => Mt(R, Qe.Last))
            )
        }
        if (
          h(() =>
            At(s.orientation.value, {
              vertical() {
                return P.key === lt.ArrowUp
                  ? Mt(R, Qe.Previous | Qe.WrapAround)
                  : P.key === lt.ArrowDown
                    ? Mt(R, Qe.Next | Qe.WrapAround)
                    : yn.Error
              },
              horizontal() {
                return P.key === lt.ArrowLeft
                  ? Mt(R, Qe.Previous | Qe.WrapAround)
                  : P.key === lt.ArrowRight
                    ? Mt(R, Qe.Next | Qe.WrapAround)
                    : yn.Error
              },
            }),
          ) === yn.Success
        )
          return P.preventDefault()
      }
      let k = _e(!1)
      function C() {
        var P
        k.value ||
          ((k.value = !0),
          !e.disabled &&
            ((P = re(a)) == null || P.focus({ preventScroll: !0 }),
            s.setSelectedIndex(f.value),
            Pg(() => {
              k.value = !1
            })))
      }
      function j(P) {
        P.preventDefault()
      }
      let _ = Cu(
        oe(() => ({ as: e.as, type: t.type })),
        a,
      )
      return () => {
        var P
        let R = { selected: d.value },
          { id: U, ...q } = e,
          Y = {
            ref: a,
            onKeydown: y,
            onMousedown: j,
            onClick: C,
            id: U,
            role: "tab",
            type: _.value,
            "aria-controls":
              (P = re(s.panels.value[f.value])) == null ? void 0 : P.id,
            "aria-selected": d.value,
            tabIndex: d.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return an({
          ourProps: Y,
          theirProps: q,
          slot: R,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  Dg = Ot({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = Tr("TabPanels")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value }
        return an({
          theirProps: e,
          ourProps: {},
          slot: s,
          attrs: n,
          slots: t,
          name: "TabPanels",
        })
      }
    },
  }),
  Xn = Ot({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${Tn()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Tr("TabPanel"),
        a = _e(null)
      r({ el: a, $el: a }),
        bt(() => s.registerPanel(a)),
        kn(() => s.unregisterPanel(a))
      let i = dt(al),
        u = oe(() => {
          if (i.value) {
            let h = i.value.panels.indexOf(e.id)
            return h === -1 ? i.value.panels.push(e.id) - 1 : h
          }
          return -1
        }),
        f = oe(() => {
          let h = s.panels.value.indexOf(a)
          return h === -1 ? u.value : h
        }),
        d = oe(() => f.value === s.selectedIndex.value)
      return () => {
        var h
        let y = { selected: d.value },
          { id: k, tabIndex: C, ...j } = e,
          _ = {
            ref: a,
            id: k,
            role: "tabpanel",
            "aria-labelledby":
              (h = re(s.tabs.value[f.value])) == null ? void 0 : h.id,
            tabIndex: d.value ? C : -1,
          }
        return !d.value && e.unmount && !e.static
          ? ot(or, { as: "span", ..._ })
          : an({
              ourProps: _,
              theirProps: j,
              slot: y,
              attrs: t,
              slots: n,
              features: Ar.Static | Ar.RenderStrategy,
              visible: d.value,
              name: "TabPanel",
            })
      }
    },
  })
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Jr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
}
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ze =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: r = 2,
        absoluteStrokeWidth: s,
        color: a,
        class: i,
        ...u
      },
      { attrs: f, slots: d },
    ) =>
      ot(
        "svg",
        {
          ...Jr,
          width: n || Jr.width,
          height: n || Jr.height,
          stroke: a || Jr.stroke,
          "stroke-width": s ? (Number(r) * 24) / Number(n) : r,
          ...f,
          class: ["lucide", `lucide-${Hg(e)}`],
          ...u,
        },
        [...t.map((h) => ot(...h)), ...(d.default ? [d.default()] : [])],
      )
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oi = Ze("CheckIcon", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zg = Ze("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = Ze("CloudDrizzleIcon", [
  [
    "path",
    {
      d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
      key: "1pljnt",
    },
  ],
  ["path", { d: "M8 19v1", key: "1dk2by" }],
  ["path", { d: "M8 14v1", key: "84yxot" }],
  ["path", { d: "M16 19v1", key: "v220m7" }],
  ["path", { d: "M16 14v1", key: "g12gj6" }],
  ["path", { d: "M12 21v1", key: "q8vafk" }],
  ["path", { d: "M12 16v1", key: "1mx6rx" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wg = Ze("CloudSunIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fu = Ze("EyeOffIcon", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4",
    },
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej",
    },
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ug = Ze("EyeIcon", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = Ze("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gg = Ze("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kg = Ze("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yg = Ze("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = Ze("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zg = Ze("PencilRulerIcon", [
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  [
    "path",
    {
      d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",
      key: "orapub",
    },
  ],
  ["path", { d: "m8 6 2-2", key: "115y1s" }],
  [
    "path",
    {
      d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",
      key: "hes763",
    },
  ],
  ["path", { d: "m18 16 2-2", key: "ee94s4" }],
  [
    "path",
    {
      d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
      key: "cfq27r",
    },
  ],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = Ze("RabbitIcon", [
  ["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  [
    "path",
    {
      d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
      key: "ue9ozu",
    },
  ],
  ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }],
  ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qg = Ze("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ss = Ze("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = Ze("ShowerHeadIcon", [
  ["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }],
  ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }],
  ["path", { d: "M15 5 5 15", key: "1ag8rq" }],
  ["path", { d: "M14 17v.01", key: "eokfpp" }],
  ["path", { d: "M10 16v.01", key: "14uyyl" }],
  ["path", { d: "M13 13v.01", key: "1v1k97" }],
  ["path", { d: "M16 10v.01", key: "5169yg" }],
  ["path", { d: "M11 20v.01", key: "cj92p8" }],
  ["path", { d: "M17 14v.01", key: "11cswd" }],
  ["path", { d: "M20 11v.01", key: "19e0od" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = Ze("SunIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ca = Ze("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = Ze("TurtleIcon", [
  [
    "path",
    {
      d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
      key: "1lbbv7",
    },
  ],
  ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }],
  ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }],
  ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ia = Ze("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ll = (e) => (Xa("data-v-4d2e762f"), (e = e()), Za(), e),
  rp = { class: "flex justify-center p-5 gap-5 content-center" },
  sp = ll(() => b("div", { class: "w-1/12" }, null, -1)),
  ap = { class: "flex justify-between gap-2 w-full content-center" },
  lp = { class: "flex gap-1 p-2" },
  op = { class: "flex gap-5 p-2 relative" },
  ip = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  up = ll(() => b("b", null, "Art and Animation", -1)),
  cp = [up],
  fp = { class: "flex gap-5 content-center" },
  dp = { class: "lg:hidden flex" },
  hp = { class: "flex gap-1 p-2" },
  vp = { class: "flex flex-col gap-2 p-2" },
  gp = { class: "flex justify-between" },
  pp = ll(() => b("div", { class: "w-1/12" }, null, -1)),
  bp = { class: "flex justify-between items-center" },
  mp = { class: "flex gap-1 p-2" },
  yp = kv(
    '<li class="py-2 px-3 rounded" data-v-4d2e762f>Contact</li><li class="py-2 px-3 rounded" data-v-4d2e762f>Web Portfolio</li><li class="py-2 px-3 rounded" data-v-4d2e762f>Web Services</li><li class="py-2 px-3 rounded opacity-75" data-v-4d2e762f>Creative Projects</li><ul class="ml-5" data-v-4d2e762f><li class="py-2 px-3 rounded" data-v-4d2e762f>Art and Animation</li><li class="py-2 px-3 rounded" data-v-4d2e762f>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-4d2e762f>Custom Software</li><li class="py-2 px-3 rounded" data-v-4d2e762f>Cooking and Recipes</li></ul><li class="py-2 px-3 rounded" data-v-4d2e762f>About Me</li>',
    6,
  ),
  xp = [yp],
  wp = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = _e(5),
        r = t,
        s = (u) => {
          ;(n.value = u.target.value), r("update:brightness", n.value)
        }
      bt(() => {
        let u = window.localStorage
        u.getItem("brightness") && (n.value = Number(u.getItem("brightness")))
      })
      const a = () => {
          window.location.href = "/"
        },
        i = () => {
          let u = document.getElementById("mobileMenu")
          u.classList.contains("hidden")
            ? u.classList.remove("hidden")
            : u.classList.add("hidden")
        }
      return (u, f) => (
        ge(),
        He(
          et,
          null,
          [
            b("div", rp, [
              sp,
              b(
                "div",
                {
                  class: M([
                    "grow rounded lg:flex justify-between p-3 hidden",
                    {
                      "bg-slate-200": n.value == 5,
                      "bg-slate-300": n.value == 4,
                      "bg-slate-600": n.value == 3,
                      "bg-slate-800": n.value == 2,
                      "bg-slate-900": n.value == 1,
                    },
                  ]),
                },
                [
                  b("div", ap, [
                    b("div", lp, [
                      le(
                        ue(ca),
                        {
                          class: M({
                            "text-emerald-500": n.value >= 4,
                            "text-orange-200": n.value == 3,
                            "text-orange-500": n.value == 2,
                            "text-orange-400": n.value == 1,
                          }),
                          "stroke-width": "3",
                        },
                        null,
                        8,
                        ["class"],
                      ),
                      b(
                        "p",
                        {
                          class: M([
                            {
                              "text-emerald-500 hover:text-emerald-400":
                                n.value >= 4,
                              "text-orange-200 hover:text-orange-100":
                                n.value == 3,
                              "text-orange-500 hover:text-orange-400":
                                n.value == 2,
                              "text-orange-400 hover:text-orange-300":
                                n.value == 1,
                            },
                            "font-monospace font-bold cursor-pointer",
                          ]),
                          onClick: a,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                    b("div", op, [
                      b(
                        "h6",
                        {
                          class: M([
                            "font-semibold",
                            {
                              "text-slate-900": n.value == 5,
                              "text-slate-800": n.value == 4,
                              "text-slate-300": n.value == 3,
                              "text-slate-200": n.value == 2,
                              "text-slate-400": n.value == 1,
                            },
                          ]),
                        },
                        " Web Portfolio ",
                        2,
                      ),
                      b(
                        "h6",
                        {
                          class: M([
                            "font-semibold",
                            {
                              "text-slate-900": n.value == 5,
                              "text-slate-800": n.value == 4,
                              "text-slate-300": n.value == 3,
                              "text-slate-200": n.value == 2,
                              "text-slate-400": n.value == 1,
                            },
                          ]),
                        },
                        " Web Services ",
                        2,
                      ),
                      le(
                        ue(Oa),
                        { class: "relative inline-block text-left" },
                        {
                          default: ct(() => [
                            le(
                              ue(ai),
                              {
                                class: M([
                                  "font-semibold flex hover:outline-none focus:outline-none",
                                  {
                                    "text-slate-900": n.value == 5,
                                    "text-slate-800": n.value == 4,
                                    "text-slate-300": n.value == 3,
                                    "text-slate-200": n.value == 2,
                                    "text-slate-400": n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: ct(() => [
                                  we(" Creative Projects"),
                                  le(ue(zg)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            le(
                              ue(li),
                              {
                                class: M([
                                  "absolute z-10 mt-1 w-56 rounded",
                                  {
                                    "bg-slate-100": n.value == 5,
                                    "bg-slate-200": n.value == 4,
                                    "bg-slate-500": n.value == 3,
                                    "bg-slate-700": n.value == 2,
                                    "bg-slate-800": n.value == 1,
                                  },
                                ]),
                              },
                              {
                                default: ct(() => [
                                  b("div", ip, [
                                    b(
                                      "a",
                                      {
                                        href: "#",
                                        class: M([
                                          "block px-4 py-2",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                        role: "menuitem",
                                      },
                                      cp,
                                      2,
                                    ),
                                    b(
                                      "a",
                                      {
                                        href: "#",
                                        class: M([
                                          "block px-4 py-2",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                        role: "menuitem",
                                      },
                                      "Blog / Non-Fiction Writings",
                                      2,
                                    ),
                                    b(
                                      "a",
                                      {
                                        href: "#",
                                        class: M([
                                          "block px-4 py-2",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                        role: "menuitem",
                                      },
                                      "Custom Software",
                                      2,
                                    ),
                                    b(
                                      "a",
                                      {
                                        href: "#",
                                        class: M([
                                          "block px-4 py-2",
                                          {
                                            "text-slate-900": n.value == 5,
                                            "text-slate-800": n.value == 4,
                                            "text-slate-300": n.value == 3,
                                            "text-slate-200": n.value == 2,
                                            "text-slate-400": n.value == 1,
                                          },
                                        ]),
                                        role: "menuitem",
                                      },
                                      "Cooking and Recipes",
                                      2,
                                    ),
                                  ]),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      b(
                        "h6",
                        {
                          class: M([
                            "font-semibold flex",
                            {
                              "text-slate-900": n.value == 5,
                              "text-slate-800": n.value == 4,
                              "text-slate-300": n.value == 3,
                              "text-slate-200": n.value == 2,
                              "text-slate-400": n.value == 1,
                            },
                          ]),
                        },
                        " About Me ",
                        2,
                      ),
                    ]),
                    b("div", fp, [
                      b(
                        "button",
                        {
                          class: M([
                            {
                              "bg-emerald-600": n.value >= 4,
                              "bg-slate-500": n.value == 3,
                              "bg-orange-600": n.value == 2,
                              "bg-orange-500": n.value == 1,
                            },
                            "py-2 px-3 rounded text-white",
                          ]),
                        },
                        " Contact ",
                        2,
                      ),
                      le(
                        ue(Qg),
                        {
                          class: M([
                            "m-2 mr-2",
                            {
                              "text-slate-900": n.value == 5,
                              "text-slate-800": n.value == 4,
                              "text-slate-300": n.value == 3,
                              "text-slate-200": n.value == 2,
                              "text-slate-400": n.value == 1,
                            },
                          ]),
                          "stroke-width": "2",
                        },
                        null,
                        8,
                        ["class"],
                      ),
                    ]),
                  ]),
                ],
                2,
              ),
              b(
                "div",
                {
                  id: "headerRightColumn",
                  class: M([
                    "rounded relative lg:px-3 lg:pt-3 flex items-center",
                    {
                      "bg-slate-200": n.value == 5,
                      "bg-slate-300": n.value == 4,
                      "bg-slate-600": n.value == 3,
                      "bg-slate-800": n.value == 2,
                      "bg-slate-900": n.value == 1,
                    },
                  ]),
                },
                [
                  b("div", dp, [
                    b("div", hp, [
                      le(
                        ue(ca),
                        {
                          class: M({
                            "text-emerald-500": n.value >= 4,
                            "text-orange-200": n.value == 3,
                            "text-orange-500": n.value == 2,
                            "text-orange-400": n.value == 1,
                          }),
                          "stroke-width": "3",
                        },
                        null,
                        8,
                        ["class"],
                      ),
                      b(
                        "p",
                        {
                          class: M([
                            {
                              "text-emerald-500 hover:text-emerald-400":
                                n.value >= 4,
                              "text-orange-200 hover:text-orange-100":
                                n.value == 3,
                              "text-orange-500 hover:text-orange-400":
                                n.value == 2,
                              "text-orange-400 hover:text-orange-300":
                                n.value == 1,
                            },
                            "font-monospace font-bold cursor-pointer",
                          ]),
                          onClick: a,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                  ]),
                  le(
                    ue(Kg),
                    {
                      class: M([
                        "block lg:hidden",
                        {
                          "text-slate-900": n.value == 5,
                          "text-slate-800": n.value == 4,
                          "text-slate-300": n.value == 3,
                          "text-slate-200": n.value == 2,
                          "text-slate-400": n.value == 1,
                        },
                      ]),
                      "stroke-width": "2",
                      onClick: f[0] || (f[0] = (d) => i()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  le(ue(Oa), null, {
                    default: ct(() => [
                      le(
                        ue(ai),
                        {
                          class: M([
                            "rounded mt-2 lg:mt-0 px-2",
                            {
                              "bg-slate-200": n.value == 5,
                              "bg-slate-300": n.value == 4,
                              "bg-slate-600": n.value == 3,
                              "bg-slate-800": n.value == 2,
                              "bg-slate-900": n.value == 1,
                            },
                          ]),
                        },
                        {
                          default: ct(() => [
                            n.value == 5
                              ? (ge(),
                                Ye(ue(tp), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (ge(),
                                  Ye(ue(Wg), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (ge(),
                                    Ye(ue(qg), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (ge(),
                                      Ye(ue(Xg), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (ge(),
                                      Ye(ue(Yg), {
                                        key: 4,
                                        class: "text-slate-400",
                                      })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      le(
                        ue(li),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: ct(() => [
                            b("div", vp, [
                              b("div", gp, [
                                ou(
                                  b(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        f[1] || (f[1] = (d) => (n.value = d)),
                                      onInput: s,
                                      class: "slider w-20 mx-auto",
                                      id: "myRange",
                                    },
                                    null,
                                    544,
                                  ),
                                  [[sg, n.value]],
                                ),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  }),
                ],
                2,
              ),
              pp,
            ]),
            b(
              "div",
              {
                id: "mobileMenu",
                class: M([
                  "w-full fixed h-full p-4 top-0 z-50 overflow-hidden hidden",
                  {
                    "bg-slate-200": n.value == 5,
                    "bg-slate-300": n.value == 4,
                    "bg-slate-600": n.value == 3,
                    "bg-slate-800": n.value == 2,
                    "bg-slate-900": n.value == 1,
                  },
                ]),
              },
              [
                b("div", bp, [
                  b("div", mp, [
                    le(
                      ue(ca),
                      {
                        class: M({
                          "text-emerald-500": n.value >= 4,
                          "text-orange-200": n.value == 3,
                          "text-orange-500": n.value == 2,
                          "text-orange-400": n.value == 1,
                        }),
                        "stroke-width": "3",
                      },
                      null,
                      8,
                      ["class"],
                    ),
                    b(
                      "p",
                      {
                        class: M([
                          {
                            "text-emerald-500 hover:text-emerald-400":
                              n.value >= 4,
                            "text-orange-200 hover:text-orange-100":
                              n.value == 3,
                            "text-orange-500 hover:text-orange-400":
                              n.value == 2,
                            "text-orange-400 hover:text-orange-300":
                              n.value == 1,
                          },
                          "font-monospace font-bold cursor-pointer",
                        ]),
                        onClick: a,
                        id: "logoText",
                      },
                      " josephhansen.dev ",
                      2,
                    ),
                  ]),
                  le(
                    ue(Ia),
                    {
                      class: M({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: f[2] || (f[2] = (d) => i()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                b(
                  "ul",
                  {
                    class: M([
                      "mt-4",
                      {
                        "text-slate-900": n.value == 5,
                        "text-slate-800": n.value == 4,
                        "text-slate-300": n.value == 3,
                        "text-slate-200": n.value == 2,
                        "text-slate-400": n.value == 1,
                      },
                    ]),
                  },
                  xp,
                  2,
                ),
              ],
              2,
            ),
          ],
          64,
        )
      )
    },
  },
  _p = $s(wp, [["__scopeId", "data-v-4d2e762f"]]),
  kp = { class: "flex justify-center py-5 flex-col" },
  $p = { class: "inline-block relative" },
  Ep = { class: "font-semibold text-center px-1" },
  Sp = { class: "flex py-5 justify-center gap-3 w-full" },
  Pp = { href: "/pricing" },
  Cp = {
    directives: {
      typewriter: {
        beforeUpdate(e, t) {
          if (t.oldValue !== t.value) {
            let n = t.value,
              r = Math.random() * 100 + 25
            ;(e.textContent = ""),
              n.split("").forEach((s, a) => {
                setTimeout(() => {
                  e.textContent += s
                }, r * a)
              })
          }
        },
      },
    },
  },
  Mp = Object.assign(Cp, {
    __name: "Hero",
    props: { brightness: Number },
    setup(e) {
      const t = _e([
        "super fast",
        "responsive",
        "beautiful",
        "secure",
        "accessible",
        "easy to use",
        "efficient",
        "ultra-functional",
        "simple to use",
        "powerful",
        "optimized",
        "SEO-optimized",
        "lightning fast",
        "lightweight",
        "perfectly customized",
        "perfectly tailored",
        "blazing fast",
        "extremely secure",
        "beautifully designed",
        "high-quality",
        "precisely optimized",
        "precisely tailored",
        "your dream",
        "your perfect",
        "your ideal",
        "your projects'",
      ])
      let n = _e(0),
        r = _e(!1)
      bt(() => {
        ;(t.value = t.value.sort(() => Math.random() - 0.5)),
          setInterval(() => {
            r.value ||
              ((r.value = !0), (n.value = (n.value + 1) % t.value.length))
          }, 4e3)
        const a = () => {
            r.value = !1
          },
          i = () => {
            r.value = !0
          }
        window.addEventListener("mousedown", a),
          window.addEventListener("mouseup", i),
          kn(() => {
            window.removeEventListener("mousedown", a),
              window.removeEventListener("mouseup", i)
          })
      }),
        cu(() => {
          r.value = !1
        })
      const s = oe(() => t.value[n.value])
      return (a, i) => {
        const u = z0("typewriter")
        return (
          ge(),
          He("div", kp, [
            b(
              "h1",
              {
                class: M([
                  "text-4xl font-semibold font-sans relative align-top text-center py-5",
                  {
                    "text-slate-900": e.brightness == 5,
                    "text-slate-800": e.brightness == 4,
                    "text-slate-300": e.brightness == 3,
                    "text-slate-200": e.brightness == 2,
                    "text-slate-400": e.brightness == 1,
                  },
                ]),
              },
              [
                we(" I make "),
                b("div", $p, [
                  ou((ge(), He("span", Ep, [we(Rt(s.value), 1)])), [
                    [u, s.value],
                  ]),
                  b(
                    "div",
                    {
                      class: M([
                        "absolute bottom-1 left-0 right-0 border-b-2",
                        {
                          "border-emerald-500 ": e.brightness >= 4,
                          "border-orange-200": e.brightness == 3,
                          "border-orange-500": e.brightness == 2,
                          "border-orange-400": e.brightness == 1,
                        },
                      ]),
                    },
                    null,
                    2,
                  ),
                ]),
                we(" websites. "),
              ],
              2,
            ),
            b(
              "p",
              {
                class: M([
                  "text-center font-sans pt-5",
                  {
                    "text-slate-800": e.brightness == 5,
                    "text-slate-700": e.brightness == 4,
                    "text-slate-400": e.brightness == 3,
                    "text-slate-300": e.brightness == 2,
                    "text-slate-500": e.brightness == 1,
                  },
                ]),
              },
              " Hi, I'm Joseph. I'm a full-stack web developer. What can I do for you? ",
              2,
            ),
            b("div", Sp, [
              b(
                "button",
                {
                  class: M([
                    "rounded px-5 py-2 text-white font-semibold",
                    {
                      "bg-emerald-600": e.brightness >= 4,
                      "bg-slate-500": e.brightness == 3,
                      "bg-orange-600": e.brightness == 2,
                      "bg-orange-500": e.brightness == 1,
                    },
                  ]),
                },
                " Portfolio ",
                2,
              ),
              b("a", Pp, [
                b(
                  "button",
                  {
                    class: M([
                      "rounded px-5 py-2 text-white font-semibold",
                      {
                        "bg-slate-700": e.brightness >= 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-400": e.brightness <= 2,
                      },
                    ]),
                  },
                  " Get a Quote ",
                  2,
                ),
              ]),
            ]),
          ])
        )
      }
    },
  })
var Ap =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {}
function Op(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var Lu = { exports: {} }
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */ ;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(Ap, function () {
    for (
      var n = function (l, o, c) {
          return (
            o === void 0 && (o = 0),
            c === void 0 && (c = 1),
            l < o ? o : l > c ? c : l
          )
        },
        r = n,
        s = function (l) {
          ;(l._clipped = !1), (l._unclipped = l.slice(0))
          for (var o = 0; o <= 3; o++)
            o < 3
              ? ((l[o] < 0 || l[o] > 255) && (l._clipped = !0),
                (l[o] = r(l[o], 0, 255)))
              : o === 3 && (l[o] = r(l[o], 0, 1))
          return l
        },
        a = {},
        i = 0,
        u = [
          "Boolean",
          "Number",
          "String",
          "Function",
          "Array",
          "Date",
          "RegExp",
          "Undefined",
          "Null",
        ];
      i < u.length;
      i += 1
    ) {
      var f = u[i]
      a["[object " + f + "]"] = f.toLowerCase()
    }
    var d = function (l) {
        return a[Object.prototype.toString.call(l)] || "object"
      },
      h = d,
      y = function (l, o) {
        return (
          o === void 0 && (o = null),
          l.length >= 3
            ? Array.prototype.slice.call(l)
            : h(l[0]) == "object" && o
              ? o
                  .split("")
                  .filter(function (c) {
                    return l[0][c] !== void 0
                  })
                  .map(function (c) {
                    return l[0][c]
                  })
              : l[0]
        )
      },
      k = d,
      C = function (l) {
        if (l.length < 2) return null
        var o = l.length - 1
        return k(l[o]) == "string" ? l[o].toLowerCase() : null
      },
      j = Math.PI,
      _ = {
        clip_rgb: s,
        limit: n,
        type: d,
        unpack: y,
        last: C,
        PI: j,
        TWOPI: j * 2,
        PITHIRD: j / 3,
        DEG2RAD: j / 180,
        RAD2DEG: 180 / j,
      },
      P = { format: {}, autodetect: [] },
      R = _.last,
      U = _.clip_rgb,
      q = _.type,
      Y = P,
      B = function () {
        for (var o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        var v = this
        if (
          q(o[0]) === "object" &&
          o[0].constructor &&
          o[0].constructor === this.constructor
        )
          return o[0]
        var x = R(o),
          w = !1
        if (!x) {
          ;(w = !0),
            Y.sorted ||
              ((Y.autodetect = Y.autodetect.sort(function (N, Z) {
                return Z.p - N.p
              })),
              (Y.sorted = !0))
          for (var p = 0, $ = Y.autodetect; p < $.length; p += 1) {
            var S = $[p]
            if (((x = S.test.apply(S, o)), x)) break
          }
        }
        if (Y.format[x]) {
          var O = Y.format[x].apply(null, w ? o : o.slice(0, -1))
          v._rgb = U(O)
        } else throw new Error("unknown format: " + o)
        v._rgb.length === 3 && v._rgb.push(1)
      }
    B.prototype.toString = function () {
      return q(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var D = B,
      fe = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(fe.Color, [null].concat(l)))()
      }
    ;(fe.Color = D), (fe.version = "2.4.2")
    var he = fe,
      mt = _.unpack,
      Ve = Math.max,
      Je = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = mt(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2]
        ;(v = v / 255), (x = x / 255), (w = w / 255)
        var p = 1 - Ve(v, Ve(x, w)),
          $ = p < 1 ? 1 / (1 - p) : 0,
          S = (1 - v - p) * $,
          O = (1 - x - p) * $,
          N = (1 - w - p) * $
        return [S, O, N, p]
      },
      _t = Je,
      We = _.unpack,
      Yt = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = We(l, "cmyk")
        var c = l[0],
          v = l[1],
          x = l[2],
          w = l[3],
          p = l.length > 4 ? l[4] : 1
        return w === 1
          ? [0, 0, 0, p]
          : [
              c >= 1 ? 0 : 255 * (1 - c) * (1 - w),
              v >= 1 ? 0 : 255 * (1 - v) * (1 - w),
              x >= 1 ? 0 : 255 * (1 - x) * (1 - w),
              p,
            ]
      },
      X = Yt,
      ve = he,
      J = D,
      $e = P,
      Be = _.unpack,
      kt = _.type,
      yt = _t
    ;(J.prototype.cmyk = function () {
      return yt(this._rgb)
    }),
      (ve.cmyk = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          J,
          [null].concat(l, ["cmyk"]),
        ))()
      }),
      ($e.format.cmyk = X),
      $e.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = Be(l, "cmyk")), kt(l) === "array" && l.length === 4))
            return "cmyk"
        },
      })
    var nt = _.unpack,
      qt = _.last,
      rt = function (l) {
        return Math.round(l * 100) / 100
      },
      ln = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = nt(l, "hsla"),
          v = qt(l) || "lsa"
        return (
          (c[0] = rt(c[0] || 0)),
          (c[1] = rt(c[1] * 100) + "%"),
          (c[2] = rt(c[2] * 100) + "%"),
          v === "hsla" || (c.length > 3 && c[3] < 1)
            ? ((c[3] = c.length > 3 ? c[3] : 1), (v = "hsla"))
            : (c.length = 3),
          v + "(" + c.join(",") + ")"
        )
      },
      Ue = ln,
      I = _.unpack,
      Q = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = I(l, "rgba")
        var c = l[0],
          v = l[1],
          x = l[2]
        ;(c /= 255), (v /= 255), (x /= 255)
        var w = Math.min(c, v, x),
          p = Math.max(c, v, x),
          $ = (p + w) / 2,
          S,
          O
        return (
          p === w
            ? ((S = 0), (O = Number.NaN))
            : (S = $ < 0.5 ? (p - w) / (p + w) : (p - w) / (2 - p - w)),
          c == p
            ? (O = (v - x) / (p - w))
            : v == p
              ? (O = 2 + (x - c) / (p - w))
              : x == p && (O = 4 + (c - v) / (p - w)),
          (O *= 60),
          O < 0 && (O += 360),
          l.length > 3 && l[3] !== void 0 ? [O, S, $, l[3]] : [O, S, $]
        )
      },
      V = Q,
      se = _.unpack,
      Ae = _.last,
      g = Ue,
      m = V,
      E = Math.round,
      A = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = se(l, "rgba"),
          v = Ae(l) || "rgb"
        return v.substr(0, 3) == "hsl"
          ? g(m(c), v)
          : ((c[0] = E(c[0])),
            (c[1] = E(c[1])),
            (c[2] = E(c[2])),
            (v === "rgba" || (c.length > 3 && c[3] < 1)) &&
              ((c[3] = c.length > 3 ? c[3] : 1), (v = "rgba")),
            v + "(" + c.slice(0, v === "rgb" ? 3 : 4).join(",") + ")")
      },
      T = A,
      F = _.unpack,
      K = Math.round,
      W = function () {
        for (var l, o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        o = F(o, "hsl")
        var v = o[0],
          x = o[1],
          w = o[2],
          p,
          $,
          S
        if (x === 0) p = $ = S = w * 255
        else {
          var O = [0, 0, 0],
            N = [0, 0, 0],
            Z = w < 0.5 ? w * (1 + x) : w + x - w * x,
            H = 2 * w - Z,
            ne = v / 360
          ;(O[0] = ne + 1 / 3), (O[1] = ne), (O[2] = ne - 1 / 3)
          for (var te = 0; te < 3; te++)
            O[te] < 0 && (O[te] += 1),
              O[te] > 1 && (O[te] -= 1),
              6 * O[te] < 1
                ? (N[te] = H + (Z - H) * 6 * O[te])
                : 2 * O[te] < 1
                  ? (N[te] = Z)
                  : 3 * O[te] < 2
                    ? (N[te] = H + (Z - H) * (2 / 3 - O[te]) * 6)
                    : (N[te] = H)
          ;(l = [K(N[0] * 255), K(N[1] * 255), K(N[2] * 255)]),
            (p = l[0]),
            ($ = l[1]),
            (S = l[2])
        }
        return o.length > 3 ? [p, $, S, o[3]] : [p, $, S, 1]
      },
      G = W,
      L = G,
      ee = P,
      ie = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      ae =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      de =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      me =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Oe =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      je =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Ge = Math.round,
      $t = function (l) {
        l = l.toLowerCase().trim()
        var o
        if (ee.format.named)
          try {
            return ee.format.named(l)
          } catch {}
        if ((o = l.match(ie))) {
          for (var c = o.slice(1, 4), v = 0; v < 3; v++) c[v] = +c[v]
          return (c[3] = 1), c
        }
        if ((o = l.match(ae))) {
          for (var x = o.slice(1, 5), w = 0; w < 4; w++) x[w] = +x[w]
          return x
        }
        if ((o = l.match(de))) {
          for (var p = o.slice(1, 4), $ = 0; $ < 3; $++) p[$] = Ge(p[$] * 2.55)
          return (p[3] = 1), p
        }
        if ((o = l.match(me))) {
          for (var S = o.slice(1, 5), O = 0; O < 3; O++) S[O] = Ge(S[O] * 2.55)
          return (S[3] = +S[3]), S
        }
        if ((o = l.match(Oe))) {
          var N = o.slice(1, 4)
          ;(N[1] *= 0.01), (N[2] *= 0.01)
          var Z = L(N)
          return (Z[3] = 1), Z
        }
        if ((o = l.match(je))) {
          var H = o.slice(1, 4)
          ;(H[1] *= 0.01), (H[2] *= 0.01)
          var ne = L(H)
          return (ne[3] = +o[4]), ne
        }
      }
    $t.test = function (l) {
      return (
        ie.test(l) ||
        ae.test(l) ||
        de.test(l) ||
        me.test(l) ||
        Oe.test(l) ||
        je.test(l)
      )
    }
    var on = $t,
      Nr = he,
      un = D,
      vr = P,
      xt = _.type,
      It = T,
      gr = on
    ;(un.prototype.css = function (l) {
      return It(this._rgb, l)
    }),
      (Nr.css = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          un,
          [null].concat(l, ["css"]),
        ))()
      }),
      (vr.format.css = gr),
      vr.autodetect.push({
        p: 5,
        test: function (l) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && xt(l) === "string" && gr.test(l)) return "css"
        },
      })
    var cl = D,
      Xu = he,
      Zu = P,
      Ju = _.unpack
    ;(Zu.format.gl = function () {
      for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
      var c = Ju(l, "rgba")
      return (c[0] *= 255), (c[1] *= 255), (c[2] *= 255), c
    }),
      (Xu.gl = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          cl,
          [null].concat(l, ["gl"]),
        ))()
      }),
      (cl.prototype.gl = function () {
        var l = this._rgb
        return [l[0] / 255, l[1] / 255, l[2] / 255, l[3]]
      })
    var Qu = _.unpack,
      ec = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Qu(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2],
          p = Math.min(v, x, w),
          $ = Math.max(v, x, w),
          S = $ - p,
          O = (S * 100) / 255,
          N = (p / (255 - S)) * 100,
          Z
        return (
          S === 0
            ? (Z = Number.NaN)
            : (v === $ && (Z = (x - w) / S),
              x === $ && (Z = 2 + (w - v) / S),
              w === $ && (Z = 4 + (v - x) / S),
              (Z *= 60),
              Z < 0 && (Z += 360)),
          [Z, O, N]
        )
      },
      tc = ec,
      nc = _.unpack,
      rc = Math.floor,
      sc = function () {
        for (var l, o, c, v, x, w, p = [], $ = arguments.length; $--; )
          p[$] = arguments[$]
        p = nc(p, "hcg")
        var S = p[0],
          O = p[1],
          N = p[2],
          Z,
          H,
          ne
        N = N * 255
        var te = O * 255
        if (O === 0) Z = H = ne = N
        else {
          S === 360 && (S = 0),
            S > 360 && (S -= 360),
            S < 0 && (S += 360),
            (S /= 60)
          var ye = rc(S),
            Ee = S - ye,
            Pe = N * (1 - O),
            Ie = Pe + te * (1 - Ee),
            it = Pe + te * Ee,
            at = Pe + te
          switch (ye) {
            case 0:
              ;(l = [at, it, Pe]), (Z = l[0]), (H = l[1]), (ne = l[2])
              break
            case 1:
              ;(o = [Ie, at, Pe]), (Z = o[0]), (H = o[1]), (ne = o[2])
              break
            case 2:
              ;(c = [Pe, at, it]), (Z = c[0]), (H = c[1]), (ne = c[2])
              break
            case 3:
              ;(v = [Pe, Ie, at]), (Z = v[0]), (H = v[1]), (ne = v[2])
              break
            case 4:
              ;(x = [it, Pe, at]), (Z = x[0]), (H = x[1]), (ne = x[2])
              break
            case 5:
              ;(w = [at, Pe, Ie]), (Z = w[0]), (H = w[1]), (ne = w[2])
              break
          }
        }
        return [Z, H, ne, p.length > 3 ? p[3] : 1]
      },
      ac = sc,
      lc = _.unpack,
      oc = _.type,
      ic = he,
      fl = D,
      dl = P,
      uc = tc
    ;(fl.prototype.hcg = function () {
      return uc(this._rgb)
    }),
      (ic.hcg = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          fl,
          [null].concat(l, ["hcg"]),
        ))()
      }),
      (dl.format.hcg = ac),
      dl.autodetect.push({
        p: 1,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = lc(l, "hcg")), oc(l) === "array" && l.length === 3))
            return "hcg"
        },
      })
    var cc = _.unpack,
      fc = _.last,
      Fr = Math.round,
      dc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = cc(l, "rgba"),
          v = c[0],
          x = c[1],
          w = c[2],
          p = c[3],
          $ = fc(l) || "auto"
        p === void 0 && (p = 1),
          $ === "auto" && ($ = p < 1 ? "rgba" : "rgb"),
          (v = Fr(v)),
          (x = Fr(x)),
          (w = Fr(w))
        var S = (v << 16) | (x << 8) | w,
          O = "000000" + S.toString(16)
        O = O.substr(O.length - 6)
        var N = "0" + Fr(p * 255).toString(16)
        switch (((N = N.substr(N.length - 2)), $.toLowerCase())) {
          case "rgba":
            return "#" + O + N
          case "argb":
            return "#" + N + O
          default:
            return "#" + O
        }
      },
      hl = dc,
      hc = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      vc = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      gc = function (l) {
        if (l.match(hc)) {
          ;(l.length === 4 || l.length === 7) && (l = l.substr(1)),
            l.length === 3 &&
              ((l = l.split("")), (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]))
          var o = parseInt(l, 16),
            c = o >> 16,
            v = (o >> 8) & 255,
            x = o & 255
          return [c, v, x, 1]
        }
        if (l.match(vc)) {
          ;(l.length === 5 || l.length === 9) && (l = l.substr(1)),
            l.length === 4 &&
              ((l = l.split("")),
              (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2] + l[3] + l[3]))
          var w = parseInt(l, 16),
            p = (w >> 24) & 255,
            $ = (w >> 16) & 255,
            S = (w >> 8) & 255,
            O = Math.round(((w & 255) / 255) * 100) / 100
          return [p, $, S, O]
        }
        throw new Error("unknown hex color: " + l)
      },
      vl = gc,
      pc = he,
      gl = D,
      bc = _.type,
      pl = P,
      mc = hl
    ;(gl.prototype.hex = function (l) {
      return mc(this._rgb, l)
    }),
      (pc.hex = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          gl,
          [null].concat(l, ["hex"]),
        ))()
      }),
      (pl.format.hex = vl),
      pl.autodetect.push({
        p: 4,
        test: function (l) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (
            !o.length &&
            bc(l) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(l.length) >= 0
          )
            return "hex"
        },
      })
    var yc = _.unpack,
      bl = _.TWOPI,
      xc = Math.min,
      wc = Math.sqrt,
      _c = Math.acos,
      kc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = yc(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2]
        ;(v /= 255), (x /= 255), (w /= 255)
        var p,
          $ = xc(v, x, w),
          S = (v + x + w) / 3,
          O = S > 0 ? 1 - $ / S : 0
        return (
          O === 0
            ? (p = NaN)
            : ((p = (v - x + (v - w)) / 2),
              (p /= wc((v - x) * (v - x) + (v - w) * (x - w))),
              (p = _c(p)),
              w > x && (p = bl - p),
              (p /= bl)),
          [p * 360, O, S]
        )
      },
      $c = kc,
      Ec = _.unpack,
      Cs = _.limit,
      Dn = _.TWOPI,
      Ms = _.PITHIRD,
      Hn = Math.cos,
      Sc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = Ec(l, "hsi")
        var c = l[0],
          v = l[1],
          x = l[2],
          w,
          p,
          $
        return (
          isNaN(c) && (c = 0),
          isNaN(v) && (v = 0),
          c > 360 && (c -= 360),
          c < 0 && (c += 360),
          (c /= 360),
          c < 1 / 3
            ? (($ = (1 - v) / 3),
              (w = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
              (p = 1 - ($ + w)))
            : c < 2 / 3
              ? ((c -= 1 / 3),
                (w = (1 - v) / 3),
                (p = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
                ($ = 1 - (w + p)))
              : ((c -= 2 / 3),
                (p = (1 - v) / 3),
                ($ = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
                (w = 1 - (p + $))),
          (w = Cs(x * w * 3)),
          (p = Cs(x * p * 3)),
          ($ = Cs(x * $ * 3)),
          [w * 255, p * 255, $ * 255, l.length > 3 ? l[3] : 1]
        )
      },
      Pc = Sc,
      Cc = _.unpack,
      Mc = _.type,
      Ac = he,
      ml = D,
      yl = P,
      Oc = $c
    ;(ml.prototype.hsi = function () {
      return Oc(this._rgb)
    }),
      (Ac.hsi = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ml,
          [null].concat(l, ["hsi"]),
        ))()
      }),
      (yl.format.hsi = Pc),
      yl.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = Cc(l, "hsi")), Mc(l) === "array" && l.length === 3))
            return "hsi"
        },
      })
    var Ic = _.unpack,
      Rc = _.type,
      Tc = he,
      xl = D,
      wl = P,
      Nc = V
    ;(xl.prototype.hsl = function () {
      return Nc(this._rgb)
    }),
      (Tc.hsl = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          xl,
          [null].concat(l, ["hsl"]),
        ))()
      }),
      (wl.format.hsl = G),
      wl.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = Ic(l, "hsl")), Rc(l) === "array" && l.length === 3))
            return "hsl"
        },
      })
    var Fc = _.unpack,
      Lc = Math.min,
      jc = Math.max,
      Bc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = Fc(l, "rgb")
        var c = l[0],
          v = l[1],
          x = l[2],
          w = Lc(c, v, x),
          p = jc(c, v, x),
          $ = p - w,
          S,
          O,
          N
        return (
          (N = p / 255),
          p === 0
            ? ((S = Number.NaN), (O = 0))
            : ((O = $ / p),
              c === p && (S = (v - x) / $),
              v === p && (S = 2 + (x - c) / $),
              x === p && (S = 4 + (c - v) / $),
              (S *= 60),
              S < 0 && (S += 360)),
          [S, O, N]
        )
      },
      Dc = Bc,
      Hc = _.unpack,
      zc = Math.floor,
      qc = function () {
        for (var l, o, c, v, x, w, p = [], $ = arguments.length; $--; )
          p[$] = arguments[$]
        p = Hc(p, "hsv")
        var S = p[0],
          O = p[1],
          N = p[2],
          Z,
          H,
          ne
        if (((N *= 255), O === 0)) Z = H = ne = N
        else {
          S === 360 && (S = 0),
            S > 360 && (S -= 360),
            S < 0 && (S += 360),
            (S /= 60)
          var te = zc(S),
            ye = S - te,
            Ee = N * (1 - O),
            Pe = N * (1 - O * ye),
            Ie = N * (1 - O * (1 - ye))
          switch (te) {
            case 0:
              ;(l = [N, Ie, Ee]), (Z = l[0]), (H = l[1]), (ne = l[2])
              break
            case 1:
              ;(o = [Pe, N, Ee]), (Z = o[0]), (H = o[1]), (ne = o[2])
              break
            case 2:
              ;(c = [Ee, N, Ie]), (Z = c[0]), (H = c[1]), (ne = c[2])
              break
            case 3:
              ;(v = [Ee, Pe, N]), (Z = v[0]), (H = v[1]), (ne = v[2])
              break
            case 4:
              ;(x = [Ie, Ee, N]), (Z = x[0]), (H = x[1]), (ne = x[2])
              break
            case 5:
              ;(w = [N, Ee, Pe]), (Z = w[0]), (H = w[1]), (ne = w[2])
              break
          }
        }
        return [Z, H, ne, p.length > 3 ? p[3] : 1]
      },
      Wc = qc,
      Uc = _.unpack,
      Vc = _.type,
      Gc = he,
      _l = D,
      kl = P,
      Kc = Dc
    ;(_l.prototype.hsv = function () {
      return Kc(this._rgb)
    }),
      (Gc.hsv = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          _l,
          [null].concat(l, ["hsv"]),
        ))()
      }),
      (kl.format.hsv = Wc),
      kl.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = Uc(l, "hsv")), Vc(l) === "array" && l.length === 3))
            return "hsv"
        },
      })
    var Lr = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      zn = Lr,
      Yc = _.unpack,
      $l = Math.pow,
      Xc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Yc(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2],
          p = Zc(v, x, w),
          $ = p[0],
          S = p[1],
          O = p[2],
          N = 116 * S - 16
        return [N < 0 ? 0 : N, 500 * ($ - S), 200 * (S - O)]
      },
      As = function (l) {
        return (l /= 255) <= 0.04045 ? l / 12.92 : $l((l + 0.055) / 1.055, 2.4)
      },
      Os = function (l) {
        return l > zn.t3 ? $l(l, 1 / 3) : l / zn.t2 + zn.t0
      },
      Zc = function (l, o, c) {
        ;(l = As(l)), (o = As(o)), (c = As(c))
        var v = Os((0.4124564 * l + 0.3575761 * o + 0.1804375 * c) / zn.Xn),
          x = Os((0.2126729 * l + 0.7151522 * o + 0.072175 * c) / zn.Yn),
          w = Os((0.0193339 * l + 0.119192 * o + 0.9503041 * c) / zn.Zn)
        return [v, x, w]
      },
      El = Xc,
      qn = Lr,
      Jc = _.unpack,
      Qc = Math.pow,
      ef = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = Jc(l, "lab")
        var c = l[0],
          v = l[1],
          x = l[2],
          w,
          p,
          $,
          S,
          O,
          N
        return (
          (p = (c + 16) / 116),
          (w = isNaN(v) ? p : p + v / 500),
          ($ = isNaN(x) ? p : p - x / 200),
          (p = qn.Yn * Rs(p)),
          (w = qn.Xn * Rs(w)),
          ($ = qn.Zn * Rs($)),
          (S = Is(3.2404542 * w - 1.5371385 * p - 0.4985314 * $)),
          (O = Is(-0.969266 * w + 1.8760108 * p + 0.041556 * $)),
          (N = Is(0.0556434 * w - 0.2040259 * p + 1.0572252 * $)),
          [S, O, N, l.length > 3 ? l[3] : 1]
        )
      },
      Is = function (l) {
        return 255 * (l <= 0.00304 ? 12.92 * l : 1.055 * Qc(l, 1 / 2.4) - 0.055)
      },
      Rs = function (l) {
        return l > qn.t1 ? l * l * l : qn.t2 * (l - qn.t0)
      },
      Sl = ef,
      tf = _.unpack,
      nf = _.type,
      rf = he,
      Pl = D,
      Cl = P,
      sf = El
    ;(Pl.prototype.lab = function () {
      return sf(this._rgb)
    }),
      (rf.lab = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Pl,
          [null].concat(l, ["lab"]),
        ))()
      }),
      (Cl.format.lab = Sl),
      Cl.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = tf(l, "lab")), nf(l) === "array" && l.length === 3))
            return "lab"
        },
      })
    var af = _.unpack,
      lf = _.RAD2DEG,
      of = Math.sqrt,
      uf = Math.atan2,
      cf = Math.round,
      ff = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = af(l, "lab"),
          v = c[0],
          x = c[1],
          w = c[2],
          p = of(x * x + w * w),
          $ = (uf(w, x) * lf + 360) % 360
        return cf(p * 1e4) === 0 && ($ = Number.NaN), [v, p, $]
      },
      Ml = ff,
      df = _.unpack,
      hf = El,
      vf = Ml,
      gf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = df(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2],
          p = hf(v, x, w),
          $ = p[0],
          S = p[1],
          O = p[2]
        return vf($, S, O)
      },
      pf = gf,
      bf = _.unpack,
      mf = _.DEG2RAD,
      yf = Math.sin,
      xf = Math.cos,
      wf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = bf(l, "lch"),
          v = c[0],
          x = c[1],
          w = c[2]
        return isNaN(w) && (w = 0), (w = w * mf), [v, xf(w) * x, yf(w) * x]
      },
      Al = wf,
      _f = _.unpack,
      kf = Al,
      $f = Sl,
      Ef = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = _f(l, "lch")
        var c = l[0],
          v = l[1],
          x = l[2],
          w = kf(c, v, x),
          p = w[0],
          $ = w[1],
          S = w[2],
          O = $f(p, $, S),
          N = O[0],
          Z = O[1],
          H = O[2]
        return [N, Z, H, l.length > 3 ? l[3] : 1]
      },
      Ol = Ef,
      Sf = _.unpack,
      Pf = Ol,
      Cf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Sf(l, "hcl").reverse()
        return Pf.apply(void 0, c)
      },
      Mf = Cf,
      Af = _.unpack,
      Of = _.type,
      Il = he,
      jr = D,
      Ts = P,
      Rl = pf
    ;(jr.prototype.lch = function () {
      return Rl(this._rgb)
    }),
      (jr.prototype.hcl = function () {
        return Rl(this._rgb).reverse()
      }),
      (Il.lch = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          jr,
          [null].concat(l, ["lch"]),
        ))()
      }),
      (Il.hcl = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          jr,
          [null].concat(l, ["hcl"]),
        ))()
      }),
      (Ts.format.lch = Ol),
      (Ts.format.hcl = Mf),
      ["lch", "hcl"].forEach(function (l) {
        return Ts.autodetect.push({
          p: 2,
          test: function () {
            for (var o = [], c = arguments.length; c--; ) o[c] = arguments[c]
            if (((o = Af(o, l)), Of(o) === "array" && o.length === 3)) return l
          },
        })
      })
    var If = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
      },
      Tl = If,
      Rf = D,
      Nl = P,
      Tf = _.type,
      pr = Tl,
      Nf = vl,
      Ff = hl
    ;(Rf.prototype.name = function () {
      for (
        var l = Ff(this._rgb, "rgb"), o = 0, c = Object.keys(pr);
        o < c.length;
        o += 1
      ) {
        var v = c[o]
        if (pr[v] === l) return v.toLowerCase()
      }
      return l
    }),
      (Nl.format.named = function (l) {
        if (((l = l.toLowerCase()), pr[l])) return Nf(pr[l])
        throw new Error("unknown color name: " + l)
      }),
      Nl.autodetect.push({
        p: 5,
        test: function (l) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && Tf(l) === "string" && pr[l.toLowerCase()])
            return "named"
        },
      })
    var Lf = _.unpack,
      jf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Lf(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2]
        return (v << 16) + (x << 8) + w
      },
      Bf = jf,
      Df = _.type,
      Hf = function (l) {
        if (Df(l) == "number" && l >= 0 && l <= 16777215) {
          var o = l >> 16,
            c = (l >> 8) & 255,
            v = l & 255
          return [o, c, v, 1]
        }
        throw new Error("unknown num color: " + l)
      },
      zf = Hf,
      qf = he,
      Fl = D,
      Ll = P,
      Wf = _.type,
      Uf = Bf
    ;(Fl.prototype.num = function () {
      return Uf(this._rgb)
    }),
      (qf.num = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Fl,
          [null].concat(l, ["num"]),
        ))()
      }),
      (Ll.format.num = zf),
      Ll.autodetect.push({
        p: 5,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (
            l.length === 1 &&
            Wf(l[0]) === "number" &&
            l[0] >= 0 &&
            l[0] <= 16777215
          )
            return "num"
        },
      })
    var Vf = he,
      Ns = D,
      jl = P,
      Bl = _.unpack,
      Dl = _.type,
      Hl = Math.round
    ;(Ns.prototype.rgb = function (l) {
      return (
        l === void 0 && (l = !0),
        l === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Hl)
      )
    }),
      (Ns.prototype.rgba = function (l) {
        return (
          l === void 0 && (l = !0),
          this._rgb.slice(0, 4).map(function (o, c) {
            return c < 3 ? (l === !1 ? o : Hl(o)) : o
          })
        )
      }),
      (Vf.rgb = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ns,
          [null].concat(l, ["rgb"]),
        ))()
      }),
      (jl.format.rgb = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Bl(l, "rgba")
        return c[3] === void 0 && (c[3] = 1), c
      }),
      jl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (
            ((l = Bl(l, "rgba")),
            Dl(l) === "array" &&
              (l.length === 3 ||
                (l.length === 4 &&
                  Dl(l[3]) == "number" &&
                  l[3] >= 0 &&
                  l[3] <= 1)))
          )
            return "rgb"
        },
      })
    var Br = Math.log,
      Gf = function (l) {
        var o = l / 100,
          c,
          v,
          x
        return (
          o < 66
            ? ((c = 255),
              (v =
                o < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (v = o - 2) +
                    104.49216199393888 * Br(v)),
              (x =
                o < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (x = o - 10) +
                    115.67994401066147 * Br(x)))
            : ((c =
                351.97690566805693 +
                0.114206453784165 * (c = o - 55) -
                40.25366309332127 * Br(c)),
              (v =
                325.4494125711974 +
                0.07943456536662342 * (v = o - 50) -
                28.0852963507957 * Br(v)),
              (x = 255)),
          [c, v, x, 1]
        )
      },
      zl = Gf,
      Kf = zl,
      Yf = _.unpack,
      Xf = Math.round,
      Zf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        for (
          var c = Yf(l, "rgb"),
            v = c[0],
            x = c[2],
            w = 1e3,
            p = 4e4,
            $ = 0.4,
            S;
          p - w > $;

        ) {
          S = (p + w) * 0.5
          var O = Kf(S)
          O[2] / O[0] >= x / v ? (p = S) : (w = S)
        }
        return Xf(S)
      },
      Jf = Zf,
      Fs = he,
      Dr = D,
      Ls = P,
      Qf = Jf
    ;(Dr.prototype.temp =
      Dr.prototype.kelvin =
      Dr.prototype.temperature =
        function () {
          return Qf(this._rgb)
        }),
      (Fs.temp =
        Fs.kelvin =
        Fs.temperature =
          function () {
            for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
            return new (Function.prototype.bind.apply(
              Dr,
              [null].concat(l, ["temp"]),
            ))()
          }),
      (Ls.format.temp = Ls.format.kelvin = Ls.format.temperature = zl)
    var ed = _.unpack,
      js = Math.cbrt,
      td = Math.pow,
      nd = Math.sign,
      rd = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = ed(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2],
          p = [Bs(v / 255), Bs(x / 255), Bs(w / 255)],
          $ = p[0],
          S = p[1],
          O = p[2],
          N = js(0.4122214708 * $ + 0.5363325363 * S + 0.0514459929 * O),
          Z = js(0.2119034982 * $ + 0.6806995451 * S + 0.1073969566 * O),
          H = js(0.0883024619 * $ + 0.2817188376 * S + 0.6299787005 * O)
        return [
          0.2104542553 * N + 0.793617785 * Z - 0.0040720468 * H,
          1.9779984951 * N - 2.428592205 * Z + 0.4505937099 * H,
          0.0259040371 * N + 0.7827717662 * Z - 0.808675766 * H,
        ]
      },
      ql = rd
    function Bs(l) {
      var o = Math.abs(l)
      return o < 0.04045
        ? l / 12.92
        : (nd(l) || 1) * td((o + 0.055) / 1.055, 2.4)
    }
    var sd = _.unpack,
      Hr = Math.pow,
      ad = Math.sign,
      ld = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = sd(l, "lab")
        var c = l[0],
          v = l[1],
          x = l[2],
          w = Hr(c + 0.3963377774 * v + 0.2158037573 * x, 3),
          p = Hr(c - 0.1055613458 * v - 0.0638541728 * x, 3),
          $ = Hr(c - 0.0894841775 * v - 1.291485548 * x, 3)
        return [
          255 * Ds(4.0767416621 * w - 3.3077115913 * p + 0.2309699292 * $),
          255 * Ds(-1.2684380046 * w + 2.6097574011 * p - 0.3413193965 * $),
          255 * Ds(-0.0041960863 * w - 0.7034186147 * p + 1.707614701 * $),
          l.length > 3 ? l[3] : 1,
        ]
      },
      Wl = ld
    function Ds(l) {
      var o = Math.abs(l)
      return o > 0.0031308
        ? (ad(l) || 1) * (1.055 * Hr(o, 1 / 2.4) - 0.055)
        : l * 12.92
    }
    var od = _.unpack,
      id = _.type,
      ud = he,
      Ul = D,
      Vl = P,
      cd = ql
    ;(Ul.prototype.oklab = function () {
      return cd(this._rgb)
    }),
      (ud.oklab = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ul,
          [null].concat(l, ["oklab"]),
        ))()
      }),
      (Vl.format.oklab = Wl),
      Vl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = od(l, "oklab")), id(l) === "array" && l.length === 3))
            return "oklab"
        },
      })
    var fd = _.unpack,
      dd = ql,
      hd = Ml,
      vd = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = fd(l, "rgb"),
          v = c[0],
          x = c[1],
          w = c[2],
          p = dd(v, x, w),
          $ = p[0],
          S = p[1],
          O = p[2]
        return hd($, S, O)
      },
      gd = vd,
      pd = _.unpack,
      bd = Al,
      md = Wl,
      yd = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = pd(l, "lch")
        var c = l[0],
          v = l[1],
          x = l[2],
          w = bd(c, v, x),
          p = w[0],
          $ = w[1],
          S = w[2],
          O = md(p, $, S),
          N = O[0],
          Z = O[1],
          H = O[2]
        return [N, Z, H, l.length > 3 ? l[3] : 1]
      },
      xd = yd,
      wd = _.unpack,
      _d = _.type,
      kd = he,
      Gl = D,
      Kl = P,
      $d = gd
    ;(Gl.prototype.oklch = function () {
      return $d(this._rgb)
    }),
      (kd.oklch = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Gl,
          [null].concat(l, ["oklch"]),
        ))()
      }),
      (Kl.format.oklch = xd),
      Kl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = wd(l, "oklch")), _d(l) === "array" && l.length === 3))
            return "oklch"
        },
      })
    var Yl = D,
      Ed = _.type
    Yl.prototype.alpha = function (l, o) {
      return (
        o === void 0 && (o = !1),
        l !== void 0 && Ed(l) === "number"
          ? o
            ? ((this._rgb[3] = l), this)
            : new Yl([this._rgb[0], this._rgb[1], this._rgb[2], l], "rgb")
          : this._rgb[3]
      )
    }
    var Sd = D
    Sd.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var $n = D,
      Pd = Lr
    ;($n.prototype.darken = function (l) {
      l === void 0 && (l = 1)
      var o = this,
        c = o.lab()
      return (c[0] -= Pd.Kn * l), new $n(c, "lab").alpha(o.alpha(), !0)
    }),
      ($n.prototype.brighten = function (l) {
        return l === void 0 && (l = 1), this.darken(-l)
      }),
      ($n.prototype.darker = $n.prototype.darken),
      ($n.prototype.brighter = $n.prototype.brighten)
    var Cd = D
    Cd.prototype.get = function (l) {
      var o = l.split("."),
        c = o[0],
        v = o[1],
        x = this[c]()
      if (v) {
        var w = c.indexOf(v) - (c.substr(0, 2) === "ok" ? 2 : 0)
        if (w > -1) return x[w]
        throw new Error("unknown channel " + v + " in mode " + c)
      } else return x
    }
    var Wn = D,
      Md = _.type,
      Ad = Math.pow,
      Od = 1e-7,
      Id = 20
    Wn.prototype.luminance = function (l) {
      if (l !== void 0 && Md(l) === "number") {
        if (l === 0) return new Wn([0, 0, 0, this._rgb[3]], "rgb")
        if (l === 1) return new Wn([255, 255, 255, this._rgb[3]], "rgb")
        var o = this.luminance(),
          c = "rgb",
          v = Id,
          x = function (p, $) {
            var S = p.interpolate($, 0.5, c),
              O = S.luminance()
            return Math.abs(l - O) < Od || !v-- ? S : O > l ? x(p, S) : x(S, $)
          },
          w = (
            o > l
              ? x(new Wn([0, 0, 0]), this)
              : x(this, new Wn([255, 255, 255]))
          ).rgb()
        return new Wn(w.concat([this._rgb[3]]))
      }
      return Rd.apply(void 0, this._rgb.slice(0, 3))
    }
    var Rd = function (l, o, c) {
        return (
          (l = Hs(l)),
          (o = Hs(o)),
          (c = Hs(c)),
          0.2126 * l + 0.7152 * o + 0.0722 * c
        )
      },
      Hs = function (l) {
        return (
          (l /= 255), l <= 0.03928 ? l / 12.92 : Ad((l + 0.055) / 1.055, 2.4)
        )
      },
      Ct = {},
      Xl = D,
      Zl = _.type,
      zr = Ct,
      Jl = function (l, o, c) {
        c === void 0 && (c = 0.5)
        for (var v = [], x = arguments.length - 3; x-- > 0; )
          v[x] = arguments[x + 3]
        var w = v[0] || "lrgb"
        if ((!zr[w] && !v.length && (w = Object.keys(zr)[0]), !zr[w]))
          throw new Error("interpolation mode " + w + " is not defined")
        return (
          Zl(l) !== "object" && (l = new Xl(l)),
          Zl(o) !== "object" && (o = new Xl(o)),
          zr[w](l, o, c).alpha(l.alpha() + c * (o.alpha() - l.alpha()))
        )
      },
      Ql = D,
      Td = Jl
    Ql.prototype.mix = Ql.prototype.interpolate = function (l, o) {
      o === void 0 && (o = 0.5)
      for (var c = [], v = arguments.length - 2; v-- > 0; )
        c[v] = arguments[v + 2]
      return Td.apply(void 0, [this, l, o].concat(c))
    }
    var eo = D
    eo.prototype.premultiply = function (l) {
      l === void 0 && (l = !1)
      var o = this._rgb,
        c = o[3]
      return l
        ? ((this._rgb = [o[0] * c, o[1] * c, o[2] * c, c]), this)
        : new eo([o[0] * c, o[1] * c, o[2] * c, c], "rgb")
    }
    var zs = D,
      Nd = Lr
    ;(zs.prototype.saturate = function (l) {
      l === void 0 && (l = 1)
      var o = this,
        c = o.lch()
      return (
        (c[1] += Nd.Kn * l),
        c[1] < 0 && (c[1] = 0),
        new zs(c, "lch").alpha(o.alpha(), !0)
      )
    }),
      (zs.prototype.desaturate = function (l) {
        return l === void 0 && (l = 1), this.saturate(-l)
      })
    var to = D,
      no = _.type
    to.prototype.set = function (l, o, c) {
      c === void 0 && (c = !1)
      var v = l.split("."),
        x = v[0],
        w = v[1],
        p = this[x]()
      if (w) {
        var $ = x.indexOf(w) - (x.substr(0, 2) === "ok" ? 2 : 0)
        if ($ > -1) {
          if (no(o) == "string")
            switch (o.charAt(0)) {
              case "+":
                p[$] += +o
                break
              case "-":
                p[$] += +o
                break
              case "*":
                p[$] *= +o.substr(1)
                break
              case "/":
                p[$] /= +o.substr(1)
                break
              default:
                p[$] = +o
            }
          else if (no(o) === "number") p[$] = o
          else throw new Error("unsupported value for Color.set")
          var S = new to(p, x)
          return c ? ((this._rgb = S._rgb), this) : S
        }
        throw new Error("unknown channel " + w + " in mode " + x)
      } else return p
    }
    var Fd = D,
      Ld = function (l, o, c) {
        var v = l._rgb,
          x = o._rgb
        return new Fd(
          v[0] + c * (x[0] - v[0]),
          v[1] + c * (x[1] - v[1]),
          v[2] + c * (x[2] - v[2]),
          "rgb",
        )
      }
    Ct.rgb = Ld
    var jd = D,
      qs = Math.sqrt,
      Un = Math.pow,
      Bd = function (l, o, c) {
        var v = l._rgb,
          x = v[0],
          w = v[1],
          p = v[2],
          $ = o._rgb,
          S = $[0],
          O = $[1],
          N = $[2]
        return new jd(
          qs(Un(x, 2) * (1 - c) + Un(S, 2) * c),
          qs(Un(w, 2) * (1 - c) + Un(O, 2) * c),
          qs(Un(p, 2) * (1 - c) + Un(N, 2) * c),
          "rgb",
        )
      }
    Ct.lrgb = Bd
    var Dd = D,
      Hd = function (l, o, c) {
        var v = l.lab(),
          x = o.lab()
        return new Dd(
          v[0] + c * (x[0] - v[0]),
          v[1] + c * (x[1] - v[1]),
          v[2] + c * (x[2] - v[2]),
          "lab",
        )
      }
    Ct.lab = Hd
    var ro = D,
      Vn = function (l, o, c, v) {
        var x, w, p, $
        v === "hsl"
          ? ((p = l.hsl()), ($ = o.hsl()))
          : v === "hsv"
            ? ((p = l.hsv()), ($ = o.hsv()))
            : v === "hcg"
              ? ((p = l.hcg()), ($ = o.hcg()))
              : v === "hsi"
                ? ((p = l.hsi()), ($ = o.hsi()))
                : v === "lch" || v === "hcl"
                  ? ((v = "hcl"), (p = l.hcl()), ($ = o.hcl()))
                  : v === "oklch" &&
                    ((p = l.oklch().reverse()), ($ = o.oklch().reverse()))
        var S, O, N, Z, H, ne
        ;(v.substr(0, 1) === "h" || v === "oklch") &&
          ((x = p),
          (S = x[0]),
          (N = x[1]),
          (H = x[2]),
          (w = $),
          (O = w[0]),
          (Z = w[1]),
          (ne = w[2]))
        var te, ye, Ee, Pe
        return (
          !isNaN(S) && !isNaN(O)
            ? (O > S && O - S > 180
                ? (Pe = O - (S + 360))
                : O < S && S - O > 180
                  ? (Pe = O + 360 - S)
                  : (Pe = O - S),
              (ye = S + c * Pe))
            : isNaN(S)
              ? isNaN(O)
                ? (ye = Number.NaN)
                : ((ye = O), (H == 1 || H == 0) && v != "hsv" && (te = Z))
              : ((ye = S), (ne == 1 || ne == 0) && v != "hsv" && (te = N)),
          te === void 0 && (te = N + c * (Z - N)),
          (Ee = H + c * (ne - H)),
          v === "oklch" ? new ro([Ee, te, ye], v) : new ro([ye, te, Ee], v)
        )
      },
      zd = Vn,
      so = function (l, o, c) {
        return zd(l, o, c, "lch")
      }
    ;(Ct.lch = so), (Ct.hcl = so)
    var qd = D,
      Wd = function (l, o, c) {
        var v = l.num(),
          x = o.num()
        return new qd(v + c * (x - v), "num")
      }
    Ct.num = Wd
    var Ud = Vn,
      Vd = function (l, o, c) {
        return Ud(l, o, c, "hcg")
      }
    Ct.hcg = Vd
    var Gd = Vn,
      Kd = function (l, o, c) {
        return Gd(l, o, c, "hsi")
      }
    Ct.hsi = Kd
    var Yd = Vn,
      Xd = function (l, o, c) {
        return Yd(l, o, c, "hsl")
      }
    Ct.hsl = Xd
    var Zd = Vn,
      Jd = function (l, o, c) {
        return Zd(l, o, c, "hsv")
      }
    Ct.hsv = Jd
    var Qd = D,
      eh = function (l, o, c) {
        var v = l.oklab(),
          x = o.oklab()
        return new Qd(
          v[0] + c * (x[0] - v[0]),
          v[1] + c * (x[1] - v[1]),
          v[2] + c * (x[2] - v[2]),
          "oklab",
        )
      }
    Ct.oklab = eh
    var th = Vn,
      nh = function (l, o, c) {
        return th(l, o, c, "oklch")
      }
    Ct.oklch = nh
    var Ws = D,
      rh = _.clip_rgb,
      Us = Math.pow,
      Vs = Math.sqrt,
      Gs = Math.PI,
      ao = Math.cos,
      lo = Math.sin,
      sh = Math.atan2,
      ah = function (l, o, c) {
        o === void 0 && (o = "lrgb"), c === void 0 && (c = null)
        var v = l.length
        c ||
          (c = Array.from(new Array(v)).map(function () {
            return 1
          }))
        var x =
          v /
          c.reduce(function (ye, Ee) {
            return ye + Ee
          })
        if (
          (c.forEach(function (ye, Ee) {
            c[Ee] *= x
          }),
          (l = l.map(function (ye) {
            return new Ws(ye)
          })),
          o === "lrgb")
        )
          return lh(l, c)
        for (
          var w = l.shift(), p = w.get(o), $ = [], S = 0, O = 0, N = 0;
          N < p.length;
          N++
        )
          if (
            ((p[N] = (p[N] || 0) * c[0]),
            $.push(isNaN(p[N]) ? 0 : c[0]),
            o.charAt(N) === "h" && !isNaN(p[N]))
          ) {
            var Z = (p[N] / 180) * Gs
            ;(S += ao(Z) * c[0]), (O += lo(Z) * c[0])
          }
        var H = w.alpha() * c[0]
        l.forEach(function (ye, Ee) {
          var Pe = ye.get(o)
          H += ye.alpha() * c[Ee + 1]
          for (var Ie = 0; Ie < p.length; Ie++)
            if (!isNaN(Pe[Ie]))
              if ((($[Ie] += c[Ee + 1]), o.charAt(Ie) === "h")) {
                var it = (Pe[Ie] / 180) * Gs
                ;(S += ao(it) * c[Ee + 1]), (O += lo(it) * c[Ee + 1])
              } else p[Ie] += Pe[Ie] * c[Ee + 1]
        })
        for (var ne = 0; ne < p.length; ne++)
          if (o.charAt(ne) === "h") {
            for (var te = (sh(O / $[ne], S / $[ne]) / Gs) * 180; te < 0; )
              te += 360
            for (; te >= 360; ) te -= 360
            p[ne] = te
          } else p[ne] = p[ne] / $[ne]
        return (H /= v), new Ws(p, o).alpha(H > 0.99999 ? 1 : H, !0)
      },
      lh = function (l, o) {
        for (var c = l.length, v = [0, 0, 0, 0], x = 0; x < l.length; x++) {
          var w = l[x],
            p = o[x] / c,
            $ = w._rgb
          ;(v[0] += Us($[0], 2) * p),
            (v[1] += Us($[1], 2) * p),
            (v[2] += Us($[2], 2) * p),
            (v[3] += $[3] * p)
        }
        return (
          (v[0] = Vs(v[0])),
          (v[1] = Vs(v[1])),
          (v[2] = Vs(v[2])),
          v[3] > 0.9999999 && (v[3] = 1),
          new Ws(rh(v))
        )
      },
      Ft = he,
      Gn = _.type,
      oh = Math.pow,
      Ks = function (l) {
        var o = "rgb",
          c = Ft("#ccc"),
          v = 0,
          x = [0, 1],
          w = [],
          p = [0, 0],
          $ = !1,
          S = [],
          O = !1,
          N = 0,
          Z = 1,
          H = !1,
          ne = {},
          te = !0,
          ye = 1,
          Ee = function (z) {
            if (
              ((z = z || ["#fff", "#000"]),
              z &&
                Gn(z) === "string" &&
                Ft.brewer &&
                Ft.brewer[z.toLowerCase()] &&
                (z = Ft.brewer[z.toLowerCase()]),
              Gn(z) === "array")
            ) {
              z.length === 1 && (z = [z[0], z[0]]), (z = z.slice(0))
              for (var ce = 0; ce < z.length; ce++) z[ce] = Ft(z[ce])
              w.length = 0
              for (var ke = 0; ke < z.length; ke++) w.push(ke / (z.length - 1))
            }
            return Et(), (S = z)
          },
          Pe = function (z) {
            if ($ != null) {
              for (var ce = $.length - 1, ke = 0; ke < ce && z >= $[ke]; ) ke++
              return ke - 1
            }
            return 0
          },
          Ie = function (z) {
            return z
          },
          it = function (z) {
            return z
          },
          at = function (z, ce) {
            var ke, xe
            if ((ce == null && (ce = !1), isNaN(z) || z === null)) return c
            if (ce) xe = z
            else if ($ && $.length > 2) {
              var ut = Pe(z)
              xe = ut / ($.length - 2)
            } else Z !== N ? (xe = (z - N) / (Z - N)) : (xe = 1)
            ;(xe = it(xe)),
              ce || (xe = Ie(xe)),
              ye !== 1 && (xe = oh(xe, ye)),
              (xe = p[0] + xe * (1 - p[0] - p[1])),
              (xe = Math.min(1, Math.max(0, xe)))
            var De = Math.floor(xe * 1e4)
            if (te && ne[De]) ke = ne[De]
            else {
              if (Gn(S) === "array")
                for (var Ce = 0; Ce < w.length; Ce++) {
                  var Te = w[Ce]
                  if (xe <= Te) {
                    ke = S[Ce]
                    break
                  }
                  if (xe >= Te && Ce === w.length - 1) {
                    ke = S[Ce]
                    break
                  }
                  if (xe > Te && xe < w[Ce + 1]) {
                    ;(xe = (xe - Te) / (w[Ce + 1] - Te)),
                      (ke = Ft.interpolate(S[Ce], S[Ce + 1], xe, o))
                    break
                  }
                }
              else Gn(S) === "function" && (ke = S(xe))
              te && (ne[De] = ke)
            }
            return ke
          },
          Et = function () {
            return (ne = {})
          }
        Ee(l)
        var Se = function (z) {
          var ce = Ft(at(z))
          return O && ce[O] ? ce[O]() : ce
        }
        return (
          (Se.classes = function (z) {
            if (z != null) {
              if (Gn(z) === "array") ($ = z), (x = [z[0], z[z.length - 1]])
              else {
                var ce = Ft.analyze(x)
                z === 0 ? ($ = [ce.min, ce.max]) : ($ = Ft.limits(ce, "e", z))
              }
              return Se
            }
            return $
          }),
          (Se.domain = function (z) {
            if (!arguments.length) return x
            ;(N = z[0]), (Z = z[z.length - 1]), (w = [])
            var ce = S.length
            if (z.length === ce && N !== Z)
              for (var ke = 0, xe = Array.from(z); ke < xe.length; ke += 1) {
                var ut = xe[ke]
                w.push((ut - N) / (Z - N))
              }
            else {
              for (var De = 0; De < ce; De++) w.push(De / (ce - 1))
              if (z.length > 2) {
                var Ce = z.map(function (Ne, Fe) {
                    return Fe / (z.length - 1)
                  }),
                  Te = z.map(function (Ne) {
                    return (Ne - N) / (Z - N)
                  })
                Te.every(function (Ne, Fe) {
                  return Ce[Fe] === Ne
                }) ||
                  (it = function (Ne) {
                    if (Ne <= 0 || Ne >= 1) return Ne
                    for (var Fe = 0; Ne >= Te[Fe + 1]; ) Fe++
                    var jt = (Ne - Te[Fe]) / (Te[Fe + 1] - Te[Fe]),
                      dn = Ce[Fe] + jt * (Ce[Fe + 1] - Ce[Fe])
                    return dn
                  })
              }
            }
            return (x = [N, Z]), Se
          }),
          (Se.mode = function (z) {
            return arguments.length ? ((o = z), Et(), Se) : o
          }),
          (Se.range = function (z, ce) {
            return Ee(z), Se
          }),
          (Se.out = function (z) {
            return (O = z), Se
          }),
          (Se.spread = function (z) {
            return arguments.length ? ((v = z), Se) : v
          }),
          (Se.correctLightness = function (z) {
            return (
              z == null && (z = !0),
              (H = z),
              Et(),
              H
                ? (Ie = function (ce) {
                    for (
                      var ke = at(0, !0).lab()[0],
                        xe = at(1, !0).lab()[0],
                        ut = ke > xe,
                        De = at(ce, !0).lab()[0],
                        Ce = ke + (xe - ke) * ce,
                        Te = De - Ce,
                        Ne = 0,
                        Fe = 1,
                        jt = 20;
                      Math.abs(Te) > 0.01 && jt-- > 0;

                    )
                      (function () {
                        return (
                          ut && (Te *= -1),
                          Te < 0
                            ? ((Ne = ce), (ce += (Fe - ce) * 0.5))
                            : ((Fe = ce), (ce += (Ne - ce) * 0.5)),
                          (De = at(ce, !0).lab()[0]),
                          (Te = De - Ce)
                        )
                      })()
                    return ce
                  })
                : (Ie = function (ce) {
                    return ce
                  }),
              Se
            )
          }),
          (Se.padding = function (z) {
            return z != null
              ? (Gn(z) === "number" && (z = [z, z]), (p = z), Se)
              : p
          }),
          (Se.colors = function (z, ce) {
            arguments.length < 2 && (ce = "hex")
            var ke = []
            if (arguments.length === 0) ke = S.slice(0)
            else if (z === 1) ke = [Se(0.5)]
            else if (z > 1) {
              var xe = x[0],
                ut = x[1] - xe
              ke = ih(0, z, !1).map(function (Fe) {
                return Se(xe + (Fe / (z - 1)) * ut)
              })
            } else {
              l = []
              var De = []
              if ($ && $.length > 2)
                for (
                  var Ce = 1, Te = $.length, Ne = 1 <= Te;
                  Ne ? Ce < Te : Ce > Te;
                  Ne ? Ce++ : Ce--
                )
                  De.push(($[Ce - 1] + $[Ce]) * 0.5)
              else De = x
              ke = De.map(function (Fe) {
                return Se(Fe)
              })
            }
            return (
              Ft[ce] &&
                (ke = ke.map(function (Fe) {
                  return Fe[ce]()
                })),
              ke
            )
          }),
          (Se.cache = function (z) {
            return z != null ? ((te = z), Se) : te
          }),
          (Se.gamma = function (z) {
            return z != null ? ((ye = z), Se) : ye
          }),
          (Se.nodata = function (z) {
            return z != null ? ((c = Ft(z)), Se) : c
          }),
          Se
        )
      }
    function ih(l, o, c) {
      for (
        var v = [], x = l < o, w = c ? (x ? o + 1 : o - 1) : o, p = l;
        x ? p < w : p > w;
        x ? p++ : p--
      )
        v.push(p)
      return v
    }
    var br = D,
      uh = Ks,
      ch = function (l) {
        for (var o = [1, 1], c = 1; c < l; c++) {
          for (var v = [1], x = 1; x <= o.length; x++)
            v[x] = (o[x] || 0) + o[x - 1]
          o = v
        }
        return o
      },
      fh = function (l) {
        var o, c, v, x, w, p, $
        if (
          ((l = l.map(function (H) {
            return new br(H)
          })),
          l.length === 2)
        )
          (o = l.map(function (H) {
            return H.lab()
          })),
            (w = o[0]),
            (p = o[1]),
            (x = function (H) {
              var ne = [0, 1, 2].map(function (te) {
                return w[te] + H * (p[te] - w[te])
              })
              return new br(ne, "lab")
            })
        else if (l.length === 3)
          (c = l.map(function (H) {
            return H.lab()
          })),
            (w = c[0]),
            (p = c[1]),
            ($ = c[2]),
            (x = function (H) {
              var ne = [0, 1, 2].map(function (te) {
                return (
                  (1 - H) * (1 - H) * w[te] +
                  2 * (1 - H) * H * p[te] +
                  H * H * $[te]
                )
              })
              return new br(ne, "lab")
            })
        else if (l.length === 4) {
          var S
          ;(v = l.map(function (H) {
            return H.lab()
          })),
            (w = v[0]),
            (p = v[1]),
            ($ = v[2]),
            (S = v[3]),
            (x = function (H) {
              var ne = [0, 1, 2].map(function (te) {
                return (
                  (1 - H) * (1 - H) * (1 - H) * w[te] +
                  3 * (1 - H) * (1 - H) * H * p[te] +
                  3 * (1 - H) * H * H * $[te] +
                  H * H * H * S[te]
                )
              })
              return new br(ne, "lab")
            })
        } else if (l.length >= 5) {
          var O, N, Z
          ;(O = l.map(function (H) {
            return H.lab()
          })),
            (Z = l.length - 1),
            (N = ch(Z)),
            (x = function (H) {
              var ne = 1 - H,
                te = [0, 1, 2].map(function (ye) {
                  return O.reduce(function (Ee, Pe, Ie) {
                    return (
                      Ee +
                      N[Ie] * Math.pow(ne, Z - Ie) * Math.pow(H, Ie) * Pe[ye]
                    )
                  }, 0)
                })
              return new br(te, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return x
      },
      dh = function (l) {
        var o = fh(l)
        return (
          (o.scale = function () {
            return uh(o)
          }),
          o
        )
      },
      Ys = he,
      Lt = function (l, o, c) {
        if (!Lt[c]) throw new Error("unknown blend mode " + c)
        return Lt[c](l, o)
      },
      cn = function (l) {
        return function (o, c) {
          var v = Ys(c).rgb(),
            x = Ys(o).rgb()
          return Ys.rgb(l(v, x))
        }
      },
      fn = function (l) {
        return function (o, c) {
          var v = []
          return (
            (v[0] = l(o[0], c[0])),
            (v[1] = l(o[1], c[1])),
            (v[2] = l(o[2], c[2])),
            v
          )
        }
      },
      hh = function (l) {
        return l
      },
      vh = function (l, o) {
        return (l * o) / 255
      },
      gh = function (l, o) {
        return l > o ? o : l
      },
      ph = function (l, o) {
        return l > o ? l : o
      },
      bh = function (l, o) {
        return 255 * (1 - (1 - l / 255) * (1 - o / 255))
      },
      mh = function (l, o) {
        return o < 128
          ? (2 * l * o) / 255
          : 255 * (1 - 2 * (1 - l / 255) * (1 - o / 255))
      },
      yh = function (l, o) {
        return 255 * (1 - (1 - o / 255) / (l / 255))
      },
      xh = function (l, o) {
        return l === 255
          ? 255
          : ((l = (255 * (o / 255)) / (1 - l / 255)), l > 255 ? 255 : l)
      }
    ;(Lt.normal = cn(fn(hh))),
      (Lt.multiply = cn(fn(vh))),
      (Lt.screen = cn(fn(bh))),
      (Lt.overlay = cn(fn(mh))),
      (Lt.darken = cn(fn(gh))),
      (Lt.lighten = cn(fn(ph))),
      (Lt.dodge = cn(fn(xh))),
      (Lt.burn = cn(fn(yh)))
    for (
      var wh = Lt,
        Xs = _.type,
        _h = _.clip_rgb,
        kh = _.TWOPI,
        $h = Math.pow,
        Eh = Math.sin,
        Sh = Math.cos,
        oo = he,
        Ph = function (l, o, c, v, x) {
          l === void 0 && (l = 300),
            o === void 0 && (o = -1.5),
            c === void 0 && (c = 1),
            v === void 0 && (v = 1),
            x === void 0 && (x = [0, 1])
          var w = 0,
            p
          Xs(x) === "array" ? (p = x[1] - x[0]) : ((p = 0), (x = [x, x]))
          var $ = function (S) {
            var O = kh * ((l + 120) / 360 + o * S),
              N = $h(x[0] + p * S, v),
              Z = w !== 0 ? c[0] + S * w : c,
              H = (Z * N * (1 - N)) / 2,
              ne = Sh(O),
              te = Eh(O),
              ye = N + H * (-0.14861 * ne + 1.78277 * te),
              Ee = N + H * (-0.29227 * ne - 0.90649 * te),
              Pe = N + H * (1.97294 * ne)
            return oo(_h([ye * 255, Ee * 255, Pe * 255, 1]))
          }
          return (
            ($.start = function (S) {
              return S == null ? l : ((l = S), $)
            }),
            ($.rotations = function (S) {
              return S == null ? o : ((o = S), $)
            }),
            ($.gamma = function (S) {
              return S == null ? v : ((v = S), $)
            }),
            ($.hue = function (S) {
              return S == null
                ? c
                : ((c = S),
                  Xs(c) === "array"
                    ? ((w = c[1] - c[0]), w === 0 && (c = c[1]))
                    : (w = 0),
                  $)
            }),
            ($.lightness = function (S) {
              return S == null
                ? x
                : (Xs(S) === "array"
                    ? ((x = S), (p = S[1] - S[0]))
                    : ((x = [S, S]), (p = 0)),
                  $)
            }),
            ($.scale = function () {
              return oo.scale($)
            }),
            $.hue(c),
            $
          )
        },
        Ch = D,
        Mh = "0123456789abcdef",
        Ah = Math.floor,
        Oh = Math.random,
        Ih = function () {
          for (var l = "#", o = 0; o < 6; o++) l += Mh.charAt(Ah(Oh() * 16))
          return new Ch(l, "hex")
        },
        Zs = d,
        io = Math.log,
        Rh = Math.pow,
        Th = Math.floor,
        Nh = Math.abs,
        uo = function (l, o) {
          o === void 0 && (o = null)
          var c = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0,
          }
          return (
            Zs(l) === "object" && (l = Object.values(l)),
            l.forEach(function (v) {
              o && Zs(v) === "object" && (v = v[o]),
                v != null &&
                  !isNaN(v) &&
                  (c.values.push(v),
                  (c.sum += v),
                  v < c.min && (c.min = v),
                  v > c.max && (c.max = v),
                  (c.count += 1))
            }),
            (c.domain = [c.min, c.max]),
            (c.limits = function (v, x) {
              return co(c, v, x)
            }),
            c
          )
        },
        co = function (l, o, c) {
          o === void 0 && (o = "equal"),
            c === void 0 && (c = 7),
            Zs(l) == "array" && (l = uo(l))
          var v = l.min,
            x = l.max,
            w = l.values.sort(function (Qs, ea) {
              return Qs - ea
            })
          if (c === 1) return [v, x]
          var p = []
          if (
            (o.substr(0, 1) === "c" && (p.push(v), p.push(x)),
            o.substr(0, 1) === "e")
          ) {
            p.push(v)
            for (var $ = 1; $ < c; $++) p.push(v + ($ / c) * (x - v))
            p.push(x)
          } else if (o.substr(0, 1) === "l") {
            if (v <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var S = Math.LOG10E * io(v),
              O = Math.LOG10E * io(x)
            p.push(v)
            for (var N = 1; N < c; N++) p.push(Rh(10, S + (N / c) * (O - S)))
            p.push(x)
          } else if (o.substr(0, 1) === "q") {
            p.push(v)
            for (var Z = 1; Z < c; Z++) {
              var H = ((w.length - 1) * Z) / c,
                ne = Th(H)
              if (ne === H) p.push(w[ne])
              else {
                var te = H - ne
                p.push(w[ne] * (1 - te) + w[ne + 1] * te)
              }
            }
            p.push(x)
          } else if (o.substr(0, 1) === "k") {
            var ye,
              Ee = w.length,
              Pe = new Array(Ee),
              Ie = new Array(c),
              it = !0,
              at = 0,
              Et = null
            ;(Et = []), Et.push(v)
            for (var Se = 1; Se < c; Se++) Et.push(v + (Se / c) * (x - v))
            for (Et.push(x); it; ) {
              for (var z = 0; z < c; z++) Ie[z] = 0
              for (var ce = 0; ce < Ee; ce++)
                for (
                  var ke = w[ce], xe = Number.MAX_VALUE, ut = void 0, De = 0;
                  De < c;
                  De++
                ) {
                  var Ce = Nh(Et[De] - ke)
                  Ce < xe && ((xe = Ce), (ut = De)), Ie[ut]++, (Pe[ce] = ut)
                }
              for (var Te = new Array(c), Ne = 0; Ne < c; Ne++) Te[Ne] = null
              for (var Fe = 0; Fe < Ee; Fe++)
                (ye = Pe[Fe]),
                  Te[ye] === null ? (Te[ye] = w[Fe]) : (Te[ye] += w[Fe])
              for (var jt = 0; jt < c; jt++) Te[jt] *= 1 / Ie[jt]
              it = !1
              for (var dn = 0; dn < c; dn++)
                if (Te[dn] !== Et[dn]) {
                  it = !0
                  break
                }
              ;(Et = Te), at++, at > 200 && (it = !1)
            }
            for (var hn = {}, Kn = 0; Kn < c; Kn++) hn[Kn] = []
            for (var Yn = 0; Yn < Ee; Yn++) (ye = Pe[Yn]), hn[ye].push(w[Yn])
            for (var Zt = [], En = 0; En < c; En++)
              Zt.push(hn[En][0]), Zt.push(hn[En][hn[En].length - 1])
            ;(Zt = Zt.sort(function (Qs, ea) {
              return Qs - ea
            })),
              p.push(Zt[0])
            for (var mr = 1; mr < Zt.length; mr += 2) {
              var Sn = Zt[mr]
              !isNaN(Sn) && p.indexOf(Sn) === -1 && p.push(Sn)
            }
          }
          return p
        },
        fo = { analyze: uo, limits: co },
        ho = D,
        Fh = function (l, o) {
          ;(l = new ho(l)), (o = new ho(o))
          var c = l.luminance(),
            v = o.luminance()
          return c > v ? (c + 0.05) / (v + 0.05) : (v + 0.05) / (c + 0.05)
        },
        vo = D,
        Xt = Math.sqrt,
        Ke = Math.pow,
        Lh = Math.min,
        jh = Math.max,
        go = Math.atan2,
        po = Math.abs,
        qr = Math.cos,
        bo = Math.sin,
        Bh = Math.exp,
        mo = Math.PI,
        Dh = function (l, o, c, v, x) {
          c === void 0 && (c = 1),
            v === void 0 && (v = 1),
            x === void 0 && (x = 1)
          var w = function (Sn) {
              return (360 * Sn) / (2 * mo)
            },
            p = function (Sn) {
              return (2 * mo * Sn) / 360
            }
          ;(l = new vo(l)), (o = new vo(o))
          var $ = Array.from(l.lab()),
            S = $[0],
            O = $[1],
            N = $[2],
            Z = Array.from(o.lab()),
            H = Z[0],
            ne = Z[1],
            te = Z[2],
            ye = (S + H) / 2,
            Ee = Xt(Ke(O, 2) + Ke(N, 2)),
            Pe = Xt(Ke(ne, 2) + Ke(te, 2)),
            Ie = (Ee + Pe) / 2,
            it = 0.5 * (1 - Xt(Ke(Ie, 7) / (Ke(Ie, 7) + Ke(25, 7)))),
            at = O * (1 + it),
            Et = ne * (1 + it),
            Se = Xt(Ke(at, 2) + Ke(N, 2)),
            z = Xt(Ke(Et, 2) + Ke(te, 2)),
            ce = (Se + z) / 2,
            ke = w(go(N, at)),
            xe = w(go(te, Et)),
            ut = ke >= 0 ? ke : ke + 360,
            De = xe >= 0 ? xe : xe + 360,
            Ce = po(ut - De) > 180 ? (ut + De + 360) / 2 : (ut + De) / 2,
            Te =
              1 -
              0.17 * qr(p(Ce - 30)) +
              0.24 * qr(p(2 * Ce)) +
              0.32 * qr(p(3 * Ce + 6)) -
              0.2 * qr(p(4 * Ce - 63)),
            Ne = De - ut
          ;(Ne = po(Ne) <= 180 ? Ne : De <= ut ? Ne + 360 : Ne - 360),
            (Ne = 2 * Xt(Se * z) * bo(p(Ne) / 2))
          var Fe = H - S,
            jt = z - Se,
            dn = 1 + (0.015 * Ke(ye - 50, 2)) / Xt(20 + Ke(ye - 50, 2)),
            hn = 1 + 0.045 * ce,
            Kn = 1 + 0.015 * ce * Te,
            Yn = 30 * Bh(-Ke((Ce - 275) / 25, 2)),
            Zt = 2 * Xt(Ke(ce, 7) / (Ke(ce, 7) + Ke(25, 7))),
            En = -Zt * bo(2 * p(Yn)),
            mr = Xt(
              Ke(Fe / (c * dn), 2) +
                Ke(jt / (v * hn), 2) +
                Ke(Ne / (x * Kn), 2) +
                En * (jt / (v * hn)) * (Ne / (x * Kn)),
            )
          return jh(0, Lh(100, mr))
        },
        yo = D,
        Hh = function (l, o, c) {
          c === void 0 && (c = "lab"), (l = new yo(l)), (o = new yo(o))
          var v = l.get(c),
            x = o.get(c),
            w = 0
          for (var p in v) {
            var $ = (v[p] || 0) - (x[p] || 0)
            w += $ * $
          }
          return Math.sqrt(w)
        },
        zh = D,
        qh = function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          try {
            return (
              new (Function.prototype.bind.apply(zh, [null].concat(l)))(), !0
            )
          } catch {
            return !1
          }
        },
        xo = he,
        wo = Ks,
        Wh = {
          cool: function () {
            return wo([xo.hsl(180, 1, 0.9), xo.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return wo(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          },
        },
        Wr = {
          OrRd: [
            "#fff7ec",
            "#fee8c8",
            "#fdd49e",
            "#fdbb84",
            "#fc8d59",
            "#ef6548",
            "#d7301f",
            "#b30000",
            "#7f0000",
          ],
          PuBu: [
            "#fff7fb",
            "#ece7f2",
            "#d0d1e6",
            "#a6bddb",
            "#74a9cf",
            "#3690c0",
            "#0570b0",
            "#045a8d",
            "#023858",
          ],
          BuPu: [
            "#f7fcfd",
            "#e0ecf4",
            "#bfd3e6",
            "#9ebcda",
            "#8c96c6",
            "#8c6bb1",
            "#88419d",
            "#810f7c",
            "#4d004b",
          ],
          Oranges: [
            "#fff5eb",
            "#fee6ce",
            "#fdd0a2",
            "#fdae6b",
            "#fd8d3c",
            "#f16913",
            "#d94801",
            "#a63603",
            "#7f2704",
          ],
          BuGn: [
            "#f7fcfd",
            "#e5f5f9",
            "#ccece6",
            "#99d8c9",
            "#66c2a4",
            "#41ae76",
            "#238b45",
            "#006d2c",
            "#00441b",
          ],
          YlOrBr: [
            "#ffffe5",
            "#fff7bc",
            "#fee391",
            "#fec44f",
            "#fe9929",
            "#ec7014",
            "#cc4c02",
            "#993404",
            "#662506",
          ],
          YlGn: [
            "#ffffe5",
            "#f7fcb9",
            "#d9f0a3",
            "#addd8e",
            "#78c679",
            "#41ab5d",
            "#238443",
            "#006837",
            "#004529",
          ],
          Reds: [
            "#fff5f0",
            "#fee0d2",
            "#fcbba1",
            "#fc9272",
            "#fb6a4a",
            "#ef3b2c",
            "#cb181d",
            "#a50f15",
            "#67000d",
          ],
          RdPu: [
            "#fff7f3",
            "#fde0dd",
            "#fcc5c0",
            "#fa9fb5",
            "#f768a1",
            "#dd3497",
            "#ae017e",
            "#7a0177",
            "#49006a",
          ],
          Greens: [
            "#f7fcf5",
            "#e5f5e0",
            "#c7e9c0",
            "#a1d99b",
            "#74c476",
            "#41ab5d",
            "#238b45",
            "#006d2c",
            "#00441b",
          ],
          YlGnBu: [
            "#ffffd9",
            "#edf8b1",
            "#c7e9b4",
            "#7fcdbb",
            "#41b6c4",
            "#1d91c0",
            "#225ea8",
            "#253494",
            "#081d58",
          ],
          Purples: [
            "#fcfbfd",
            "#efedf5",
            "#dadaeb",
            "#bcbddc",
            "#9e9ac8",
            "#807dba",
            "#6a51a3",
            "#54278f",
            "#3f007d",
          ],
          GnBu: [
            "#f7fcf0",
            "#e0f3db",
            "#ccebc5",
            "#a8ddb5",
            "#7bccc4",
            "#4eb3d3",
            "#2b8cbe",
            "#0868ac",
            "#084081",
          ],
          Greys: [
            "#ffffff",
            "#f0f0f0",
            "#d9d9d9",
            "#bdbdbd",
            "#969696",
            "#737373",
            "#525252",
            "#252525",
            "#000000",
          ],
          YlOrRd: [
            "#ffffcc",
            "#ffeda0",
            "#fed976",
            "#feb24c",
            "#fd8d3c",
            "#fc4e2a",
            "#e31a1c",
            "#bd0026",
            "#800026",
          ],
          PuRd: [
            "#f7f4f9",
            "#e7e1ef",
            "#d4b9da",
            "#c994c7",
            "#df65b0",
            "#e7298a",
            "#ce1256",
            "#980043",
            "#67001f",
          ],
          Blues: [
            "#f7fbff",
            "#deebf7",
            "#c6dbef",
            "#9ecae1",
            "#6baed6",
            "#4292c6",
            "#2171b5",
            "#08519c",
            "#08306b",
          ],
          PuBuGn: [
            "#fff7fb",
            "#ece2f0",
            "#d0d1e6",
            "#a6bddb",
            "#67a9cf",
            "#3690c0",
            "#02818a",
            "#016c59",
            "#014636",
          ],
          Viridis: [
            "#440154",
            "#482777",
            "#3f4a8a",
            "#31678e",
            "#26838f",
            "#1f9d8a",
            "#6cce5a",
            "#b6de2b",
            "#fee825",
          ],
          Spectral: [
            "#9e0142",
            "#d53e4f",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#e6f598",
            "#abdda4",
            "#66c2a5",
            "#3288bd",
            "#5e4fa2",
          ],
          RdYlGn: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#d9ef8b",
            "#a6d96a",
            "#66bd63",
            "#1a9850",
            "#006837",
          ],
          RdBu: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#f7f7f7",
            "#d1e5f0",
            "#92c5de",
            "#4393c3",
            "#2166ac",
            "#053061",
          ],
          PiYG: [
            "#8e0152",
            "#c51b7d",
            "#de77ae",
            "#f1b6da",
            "#fde0ef",
            "#f7f7f7",
            "#e6f5d0",
            "#b8e186",
            "#7fbc41",
            "#4d9221",
            "#276419",
          ],
          PRGn: [
            "#40004b",
            "#762a83",
            "#9970ab",
            "#c2a5cf",
            "#e7d4e8",
            "#f7f7f7",
            "#d9f0d3",
            "#a6dba0",
            "#5aae61",
            "#1b7837",
            "#00441b",
          ],
          RdYlBu: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee090",
            "#ffffbf",
            "#e0f3f8",
            "#abd9e9",
            "#74add1",
            "#4575b4",
            "#313695",
          ],
          BrBG: [
            "#543005",
            "#8c510a",
            "#bf812d",
            "#dfc27d",
            "#f6e8c3",
            "#f5f5f5",
            "#c7eae5",
            "#80cdc1",
            "#35978f",
            "#01665e",
            "#003c30",
          ],
          RdGy: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#ffffff",
            "#e0e0e0",
            "#bababa",
            "#878787",
            "#4d4d4d",
            "#1a1a1a",
          ],
          PuOr: [
            "#7f3b08",
            "#b35806",
            "#e08214",
            "#fdb863",
            "#fee0b6",
            "#f7f7f7",
            "#d8daeb",
            "#b2abd2",
            "#8073ac",
            "#542788",
            "#2d004b",
          ],
          Set2: [
            "#66c2a5",
            "#fc8d62",
            "#8da0cb",
            "#e78ac3",
            "#a6d854",
            "#ffd92f",
            "#e5c494",
            "#b3b3b3",
          ],
          Accent: [
            "#7fc97f",
            "#beaed4",
            "#fdc086",
            "#ffff99",
            "#386cb0",
            "#f0027f",
            "#bf5b17",
            "#666666",
          ],
          Set1: [
            "#e41a1c",
            "#377eb8",
            "#4daf4a",
            "#984ea3",
            "#ff7f00",
            "#ffff33",
            "#a65628",
            "#f781bf",
            "#999999",
          ],
          Set3: [
            "#8dd3c7",
            "#ffffb3",
            "#bebada",
            "#fb8072",
            "#80b1d3",
            "#fdb462",
            "#b3de69",
            "#fccde5",
            "#d9d9d9",
            "#bc80bd",
            "#ccebc5",
            "#ffed6f",
          ],
          Dark2: [
            "#1b9e77",
            "#d95f02",
            "#7570b3",
            "#e7298a",
            "#66a61e",
            "#e6ab02",
            "#a6761d",
            "#666666",
          ],
          Paired: [
            "#a6cee3",
            "#1f78b4",
            "#b2df8a",
            "#33a02c",
            "#fb9a99",
            "#e31a1c",
            "#fdbf6f",
            "#ff7f00",
            "#cab2d6",
            "#6a3d9a",
            "#ffff99",
            "#b15928",
          ],
          Pastel2: [
            "#b3e2cd",
            "#fdcdac",
            "#cbd5e8",
            "#f4cae4",
            "#e6f5c9",
            "#fff2ae",
            "#f1e2cc",
            "#cccccc",
          ],
          Pastel1: [
            "#fbb4ae",
            "#b3cde3",
            "#ccebc5",
            "#decbe4",
            "#fed9a6",
            "#ffffcc",
            "#e5d8bd",
            "#fddaec",
            "#f2f2f2",
          ],
        },
        Js = 0,
        _o = Object.keys(Wr);
      Js < _o.length;
      Js += 1
    ) {
      var ko = _o[Js]
      Wr[ko.toLowerCase()] = Wr[ko]
    }
    var Uh = Wr,
      st = he
    ;(st.average = ah),
      (st.bezier = dh),
      (st.blend = wh),
      (st.cubehelix = Ph),
      (st.mix = st.interpolate = Jl),
      (st.random = Ih),
      (st.scale = Ks),
      (st.analyze = fo.analyze),
      (st.contrast = Fh),
      (st.deltaE = Dh),
      (st.distance = Hh),
      (st.limits = fo.limits),
      (st.valid = qh),
      (st.scales = Wh),
      (st.colors = Tl),
      (st.brewer = Uh)
    var Vh = st
    return Vh
  })
})(Lu)
var Ip = Lu.exports
const Xe = Op(Ip),
  Rp = "/assets/bazaarFigma-8HdYNvi1.webp",
  Tp = "/assets/bazaarHero-x57x_m1S.webp",
  Np = { class: "flex flex-col w-full" },
  Fp = {
    class: "flex w-full gap-4 p-8 items-center justify-center",
    id: "panelSpeed",
  },
  Lp = { class: "flex w-full" },
  jp = { class: "w-auto" },
  Bp = ["src"],
  Dp = { class: "w-auto p-3 items-center flex" },
  Hp = { class: "w-auto" },
  zp = ["src"],
  qp = {
    __name: "PanelDesign",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (a) => {
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-200"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        },
        r = (a) => {
          if (a >= 4) return "text-slate-800"
          if (a == 3) return "text-slate-200"
          if (a == 2) return "text-slate-300"
          if (a == 1) return "text-slate-300"
        },
        s = (a) => {
          let i = document.querySelectorAll("tr"),
            u
          a == 5
            ? (u = Xe("#e2e8f0"))
            : a == 4
              ? (u = Xe("#cbd5e1"))
              : a == 3
                ? (u = Xe("#475569"))
                : a == 2
                  ? (u = Xe("#1e293b"))
                  : a == 1 && (u = Xe("#0f172a"))
          for (let f = 1; f < i.length; f++)
            f % 2 == 0
              ? (i[f].style.backgroundColor = u.brighten(0))
              : (i[f].style.backgroundColor = u.brighten(0.2))
        }
      return (
        bt(() => {
          s(t.brightness)
        }),
        nn(
          () => t.brightness,
          (a, i) => {
            s(a)
          },
        ),
        (a, i) => {
          const u = su("moveRight")
          return (
            ge(),
            He("div", Np, [
              b("div", Fp, [
                b(
                  "h2",
                  { class: M(["text-left text-5xl", r(e.brightness)]) },
                  " Looking for a beautiful design? ",
                  2,
                ),
              ]),
              b("div", Lp, [
                b("div", jp, [
                  b(
                    "img",
                    {
                      src: ue(Rp),
                      class: "rounded",
                      style: { height: "500px", width: "auto" },
                    },
                    null,
                    8,
                    Bp,
                  ),
                ]),
                b("div", Dp, [
                  le(u, { size: "5rem", class: M(n(e.brightness)) }, null, 8, [
                    "class",
                  ]),
                ]),
                b("div", Hp, [
                  b(
                    "img",
                    {
                      src: ue(Tp),
                      class: "rounded",
                      style: { height: "500px", width: "auto" },
                    },
                    null,
                    8,
                    zp,
                  ),
                ]),
              ]),
            ])
          )
        }
      )
    },
  },
  Wp = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Up = { class: "prose text-center" },
  Vp = b("br", null, null, -1),
  Gp = { href: "/pricing" },
  Kp = { id: "cta" },
  ol = {
    __name: "ctaForm",
    props: { brightness: Number },
    setup(e) {
      const t = (s) => {
          if (s >= 4) return "text-slate-800"
          if (s == 3) return "text-slate-200"
          if (s == 2) return "text-slate-300"
          if (s == 1) return "text-slate-300"
        },
        n = (s) => {
          if (s >= 4) return "text-emerald-500"
          if (s == 3) return "text-slate-800"
          if (s == 2) return "text-orange-500"
          if (s == 1) return "text-orange-400"
        },
        r = async (s) => {
          s.preventDefault()
          const a = "contact"
          let i = document.getElementsByName("name")[0].value,
            u = document.getElementsByName("email")[0].value,
            f = document.getElementsByName("message")[0].value,
            d = window.location.href,
            h = new XMLHttpRequest()
          h.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            h.setRequestHeader("Content-Type", "application/json"),
            h.send(
              JSON.stringify({
                form: a,
                name: i,
                email: u,
                message: f,
                referrer: d,
              }),
            ),
            (h.onloadend = function () {
              if (
                (console.log(
                  `Status: ${h.status}, Response: ${h.responseText}`,
                ),
                h.status == 200)
              ) {
                let y = document.getElementById("cta"),
                  k = document.createElement("div")
                k.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (k.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  y.appendChild(k)
                let C = y.getElementsByTagName("input")
                for (let P = 0; P < C.length; P++) C[P].style.display = "none"
                let j = y.getElementsByTagName("textarea")[0]
                j.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        ge(),
        He(
          "div",
          {
            class: M([
              "rounded p-8 flex",
              {
                "bg-slate-100": e.brightness == 5,
                "bg-slate-400": e.brightness == 4,
                "bg-slate-500": e.brightness == 3,
                "bg-slate-700": e.brightness == 2,
                "bg-slate-800": e.brightness == 1,
              },
            ]),
          },
          [
            b("div", Up, [
              b(
                "h4",
                { class: M(["text-2xl", t(e.brightness)]) },
                [
                  we(" Piqued your interest?"),
                  Vp,
                  we(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              b("a", Gp, [
                b(
                  "button",
                  {
                    class: M([
                      "rounded px-5 py-2 text-white font-semibold mt-4",
                      {
                        "bg-emerald-600": e.brightness >= 4,
                        "bg-orange-700": e.brightness == 3,
                        "bg-orange-600": e.brightness == 2,
                        "bg-orange-500": e.brightness == 1,
                      },
                    ]),
                  },
                  " I already have a site ",
                  2,
                ),
              ]),
              b(
                "h4",
                { class: M(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              b("form", Kp, [
                b("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: M(["rounded p-2 w-full", n]),
                }),
                b("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                b("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                b(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    onClick: r,
                    class: M([
                      "rounded px-5 py-2 text-white font-semibold w-full mt-2",
                      {
                        "bg-emerald-600": e.brightness >= 4,
                        "bg-slate-400": e.brightness == 3,
                        "bg-orange-600": e.brightness == 2,
                        "bg-orange-500": e.brightness == 1,
                      },
                    ]),
                  },
                  " Contact Me ",
                  2,
                ),
              ]),
            ]),
          ],
          2,
        )
      )
    },
  },
  Bn = (e) => (Xa("data-v-8a92440e"), (e = e()), Za(), e),
  Yp = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  Xp = { class: "flex flex-col items-center justify-center w-full" },
  Zp = { viewBox: "0 0 36 36", class: "chart" },
  Jp = Bn(() =>
    b(
      "path",
      {
        class: "circle-bg",
        d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
        fill: "none",
        stroke: "none",
        "stroke-width": "0",
        "stroke-linecap": "round",
      },
      null,
      -1,
    ),
  ),
  Qp = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  eb = Bn(() =>
    b(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  tb = Bn(() =>
    b(
      "p",
      null,
      [
        we(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        b("b", null, "315 KB"),
        we(". That's half of the classic SNES game "),
        b("em", null, "The Legend of Zelda: A Link to The Past"),
        we(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  nb = Bn(() => b("p", null, "You want fast? Let's make it happen.", -1)),
  rb = { id: "speedTable" },
  sb = Bn(() =>
    b(
      "colgroup",
      null,
      [
        b("col", { style: { width: "30%" } }),
        b("col", { style: { width: "70%" } }),
      ],
      -1,
    ),
  ),
  ab = { class: "flex" },
  lb = { class: "flex" },
  ob = Bn(() =>
    b(
      "tbody",
      null,
      [
        b("tr", null, [
          b("td", null, "Huge, resource-heavy images"),
          b("td", null, [
            we(" Optimize your images. "),
            b("b", null, "A lot. "),
            we(
              "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
            ),
          ]),
        ]),
        b("tr", null, [
          b("td", null, "Unused code, plugins, and assets"),
          b(
            "td",
            null,
            " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
          ),
        ]),
        b("tr", null, [
          b("td", null, "Inefficient, resource-heavy platforms"),
          b(
            "td",
            null,
            " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
          ),
        ]),
        b("tr", null, [
          b("td", null, "Uncached resources"),
          b(
            "td",
            null,
            " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
          ),
        ]),
      ],
      -1,
    ),
  ),
  ib = Bn(() => b("div", { class: "h-6" }, null, -1)),
  ub = {
    data() {
      return { radius: 16, circumference: 2 * Math.PI * 16, percentage: 97 }
    },
    computed: {
      dashoffset() {
        let e = this.percentage / 100
        return this.circumference * (1 - e)
      },
    },
  },
  cb = Object.assign(ub, {
    __name: "PanelSpeed",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (f) => {
          if (f >= 4) return "text-emerald-500"
          if (f == 3) return "text-orange-200"
          if (f == 2) return "text-orange-500"
          if (f == 1) return "text-orange-400"
        },
        r = (f) => {
          if (f >= 4) return "text-emerald-500 bg-emerald-950"
          if (f == 3) return "text-orange-200 bg-orange-950"
          if (f == 2) return "text-orange-500 bg-orange-950"
          if (f == 1) return "text-orange-400 bg-orange-950"
        },
        s = (f) => {
          if (f >= 4) return "border-emerald-500"
          if (f == 3) return "border-orange-200"
          if (f == 2) return "border-orange-500"
          if (f == 1) return "border-orange-400"
        },
        a = (f) => {
          if (f >= 4) return "text-slate-800"
          if (f == 3) return "text-slate-200"
          if (f == 2) return "text-slate-300"
          if (f == 1) return "text-slate-300"
        },
        i = oe(() => {
          switch (t.brightness) {
            case 5:
              return "#10B981"
            case 4:
              return "#10B981"
            case 3:
              return "#F59E0B"
            case 2:
              return "#F59E0B"
            case 1:
              return "#F59E0B"
            default:
              return ""
          }
        }),
        u = (f) => {
          let d = document.querySelectorAll("tr"),
            h
          f == 5
            ? (h = Xe("#e2e8f0"))
            : f == 4
              ? (h = Xe("#cbd5e1"))
              : f == 3
                ? (h = Xe("#475569"))
                : f == 2
                  ? (h = Xe("#1e293b"))
                  : f == 1 && (h = Xe("#0f172a"))
          for (let y = 1; y < d.length; y++)
            y % 2 == 0
              ? (d[y].style.backgroundColor = h.brighten(0))
              : (d[y].style.backgroundColor = h.brighten(0.2))
        }
      return (
        bt(() => {
          u(t.brightness)
        }),
        nn(
          () => t.brightness,
          (f, d) => {
            u(f)
          },
        ),
        (f, d) => (
          ge(),
          He("div", Yp, [
            b("div", Xp, [
              b(
                "div",
                { id: "perfChart", class: M(r(e.brightness)) },
                [
                  (ge(),
                  He("svg", Zp, [
                    Jp,
                    b(
                      "path",
                      {
                        class: M(["circle", s(e.brightness)]),
                        d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                        fill: "none",
                        stroke: i.value,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-dasharray":
                          f.circumference + " " + f.circumference,
                        "stroke-dashoffset": f.dashoffset,
                      },
                      null,
                      10,
                      Qp,
                    ),
                  ])),
                  b(
                    "div",
                    {
                      id: "chartInner",
                      class: M(["font-monospace text-6xl", n(e.brightness)]),
                    },
                    " 98 ",
                    2,
                  ),
                ],
                2,
              ),
              b(
                "p",
                {
                  class: M(["text-sm italic opacity-50 mt-3", a(e.brightness)]),
                },
                [
                  we(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  b(
                    "a",
                    { href: "", class: M(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              b(
                "div",
                {
                  class: M([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  b(
                    "h2",
                    { class: M(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  b(
                    "h2",
                    { class: M(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  eb,
                  tb,
                  nb,
                  b("h3", { class: M(a(e.brightness)) }, "How I help", 2),
                  b("table", rb, [
                    sb,
                    b("thead", null, [
                      b("tr", null, [
                        b("th", null, [
                          b("div", ab, [
                            b(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                we(" Problem "),
                                le(
                                  ue(np),
                                  {
                                    size: "3rem",
                                    class: M([n(e.brightness), "inline mb-1"]),
                                  },
                                  null,
                                  8,
                                  ["class"],
                                ),
                              ],
                              2,
                            ),
                          ]),
                        ]),
                        b("th", null, [
                          b("div", lb, [
                            b(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                we(" What I can do "),
                                le(
                                  ue(Jg),
                                  {
                                    size: "3rem",
                                    class: M([n(e.brightness), "inline mb-1"]),
                                  },
                                  null,
                                  8,
                                  ["class"],
                                ),
                              ],
                              2,
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    ob,
                  ]),
                ],
                2,
              ),
              ib,
              le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  fb = $s(cb, [["__scopeId", "data-v-8a92440e"]]),
  db = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  hb = { class: "lg:w-6/12 sm:w-12/12" },
  vb = b(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  gb = b("p", null, [b("b", null, " Don't worry, I can help!")], -1),
  pb = b(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  bb = { class: "flex items-center w-full" },
  mb = b(
    "p",
    null,
    [
      we(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      b("em", null, "very"),
      we(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  yb = b("div", { class: "h-3" }, null, -1),
  xb = { class: "flex items-center w-full" },
  wb = b(
    "p",
    null,
    [
      we(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      b("em", null, "do"),
      we(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  _b = b("div", { class: "h-3" }, null, -1),
  kb = { class: "flex items-center w-full" },
  $b = b(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  Eb = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  Sb = { class: "prose text-center" },
  Pb = b("div", { class: "h-3" }, null, -1),
  Cb = b("div", { class: "h-3" }, null, -1),
  Mb = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      _e(9274)
      const t = _e(4709),
        n = _e(new Date("2023-10-01")),
        r = _e(new Date()),
        s = oe(
          () =>
            ((r.value.getFullYear() - n.value.getFullYear()) * 12 +
              (r.value.getMonth() - n.value.getMonth())) *
            t.value,
        ),
        a = (f) => (f > 1e6 ? Math.round(f / 1e6).toString() + "m" : f),
        i = (f) => {
          if (f >= 4) return "text-emerald-500"
          if (f == 3) return "text-orange-200"
          if (f == 2) return "text-orange-500"
          if (f == 1) return "text-orange-400"
        },
        u = (f) => {
          if (f >= 4) return "text-slate-800"
          if (f == 3) return "text-slate-200"
          if (f == 2) return "text-slate-300"
          if (f == 1) return "text-slate-300"
        }
      return (f, d) => (
        ge(),
        He("div", db, [
          b("div", hb, [
            b(
              "h2",
              { class: M(["text-left text-5xl", u(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            b(
              "p",
              {
                class: M([
                  "text-left text-sm italic opacity-50 mt-3",
                  u(e.brightness),
                ]),
              },
              [
                we(" Website already secure? "),
                b("b", null, [
                  b(
                    "a",
                    { href: "", class: M(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  we(" are you?"),
                ]),
              ],
              2,
            ),
            b(
              "hr",
              { class: M(["mb-5 mt-1 w-6/12 opacity-25", u(e.brightness)]) },
              null,
              2,
            ),
            b(
              "div",
              { class: M(["prose", u(e.brightness)]) },
              [
                vb,
                gb,
                pb,
                b(
                  "div",
                  {
                    class: M([
                      "rounded p-2 flex items-center flex-col",
                      {
                        "bg-slate-100": e.brightness == 5,
                        "bg-slate-400": e.brightness == 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-700": e.brightness == 2,
                        "bg-slate-800": e.brightness == 1,
                      },
                    ]),
                  },
                  [
                    b("div", bb, [
                      le(
                        ue(ss),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      b(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    mb,
                  ],
                  2,
                ),
                yb,
                b(
                  "div",
                  {
                    class: M([
                      "rounded p-2 flex items-center flex-col",
                      {
                        "bg-slate-100": e.brightness == 5,
                        "bg-slate-400": e.brightness == 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-700": e.brightness == 2,
                        "bg-slate-800": e.brightness == 1,
                      },
                    ]),
                  },
                  [
                    b("div", xb, [
                      le(
                        ue(ss),
                        { size: "2rem", class: M(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      b(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    wb,
                  ],
                  2,
                ),
                _b,
                b(
                  "div",
                  {
                    class: M([
                      "rounded p-2 flex items-center flex-col",
                      {
                        "bg-slate-100": e.brightness == 5,
                        "bg-slate-400": e.brightness == 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-700": e.brightness == 2,
                        "bg-slate-800": e.brightness == 1,
                      },
                    ]),
                  },
                  [
                    b("div", kb, [
                      le(
                        ue(ss),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      b(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    $b,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          b("div", Eb, [
            b(
              "div",
              {
                class: M([
                  "rounded p-8 flex",
                  {
                    "bg-slate-100": e.brightness == 5,
                    "bg-slate-400": e.brightness == 4,
                    "bg-slate-500": e.brightness == 3,
                    "bg-slate-700": e.brightness == 2,
                    "bg-slate-800": e.brightness == 1,
                  },
                ]),
              },
              [
                b("div", Sb, [
                  b(
                    "h3",
                    {
                      class: M([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    Rt(a(s.value)) + "+ ",
                    3,
                  ),
                  b(
                    "h3",
                    { class: M(["text-xl", u(e.brightness)]) },
                    [
                      we(" attacks blocked on "),
                      b(
                        "a",
                        {
                          class: M(i(e.brightness)),
                          href: "https://bazaar.blendernation.com",
                        },
                        "BlenderNation Bazaar",
                        2,
                      ),
                    ],
                    2,
                  ),
                  b(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  b(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    [
                      b(
                        "a",
                        { href: "", class: M(i(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      we(" about the Bazaar project "),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            Pb,
            b("hr", { class: M(["opacity-50", u(e.brightness)]) }, null, 2),
            Cb,
            le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  Ab = {
    __name: "PanelDesignOverhaul",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          let s = document.querySelectorAll("tr"),
            a
          r == 5
            ? (a = Xe("#e2e8f0"))
            : r == 4
              ? (a = Xe("#cbd5e1"))
              : r == 3
                ? (a = Xe("#475569"))
                : r == 2
                  ? (a = Xe("#1e293b"))
                  : r == 1 && (a = Xe("#0f172a"))
          for (let i = 1; i < s.length; i++)
            i % 2 == 0
              ? (s[i].style.backgroundColor = a.brighten(0))
              : (s[i].style.backgroundColor = a.brighten(0.2))
        }
      return (
        bt(() => {
          n(t.brightness)
        }),
        nn(
          () => t.brightness,
          (r, s) => {
            n(r)
          },
        ),
        (r, s) => null
      )
    },
  },
  Ob = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  Ib = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  Rb = { class: "flex w-full" },
  Tb = { class: "flex w-full pt-4 gap-2" },
  Nb = { class: "w-6/12" },
  Fb = { class: "w-6/12" },
  Lb = { class: "w-full flex" },
  jb = { class: "w-6/12" },
  Bb = { class: "w-6/12 pb-3" },
  Db = b("em", null, "huge", -1),
  Hb = b("div", { class: "h-6" }, null, -1),
  zb = {
    __name: "PanelAccessibility",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (d) => {
          if (d >= 4) return "text-emerald-500"
          if (d == 3) return "text-orange-200"
          if (d == 2) return "text-orange-500"
          if (d == 1) return "text-orange-400"
        },
        r = _e(!1),
        s = oe(() =>
          r.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        a = oe(() =>
          r.value
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        i = (d) => {
          if (d >= 4) return "text-slate-800"
          if (d == 3) return "text-slate-200"
          if (d == 2) return "text-slate-300"
          if (d == 1) return "text-slate-300"
        },
        u = (d) => {
          let h = document.querySelectorAll("tr"),
            y
          d == 5
            ? (y = Xe("#e2e8f0"))
            : d == 4
              ? (y = Xe("#cbd5e1"))
              : d == 3
                ? (y = Xe("#475569"))
                : d == 2
                  ? (y = Xe("#1e293b"))
                  : d == 1 && (y = Xe("#0f172a"))
          for (let k = 1; k < h.length; k++)
            k % 2 == 0
              ? (h[k].style.backgroundColor = y.brighten(0))
              : (h[k].style.backgroundColor = y.brighten(0.2))
        },
        f = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        bt(() => {
          u(t.brightness)
        }),
        nn(
          () => t.brightness,
          (d, h) => {
            u(d)
          },
        ),
        (d, h) => (
          ge(),
          He("div", Ob, [
            b("div", Ib, [
              b(
                "h2",
                { class: M(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              b(
                "h3",
                { class: M(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              b(
                "h4",
                { class: M(i(e.brightness)) },
                [
                  we(" What are the "),
                  b(
                    "a",
                    {
                      class: M(["font-bold", n(e.brightness)]),
                      href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    "Web Content Accessibility Guidelines?",
                    2,
                  ),
                ],
                2,
              ),
              b(
                "p",
                { class: M(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              b(
                "p",
                { class: M(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              b(
                "h4",
                { class: M(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              b(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              b(
                "p",
                { class: M(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              b("div", Rb, [
                b(
                  "button",
                  {
                    class: M([
                      {
                        "bg-emerald-600 text-slate-200": e.brightness >= 4,
                        "bg-slate-500 text-slate-200": e.brightness == 3,
                        "bg-orange-600 text-slate-800": e.brightness == 2,
                        "bg-orange-500 text-slate-800": e.brightness == 1,
                      },
                      "text-xl font-semibold rounded px-5 py-2 w-full flex align-middle",
                    ]),
                    onClick: f,
                  },
                  [
                    r.value ? (ge(), Ye(ue(Fu), { key: 0 })) : vt("", !0),
                    r.value ? vt("", !0) : (ge(), Ye(ue(Ug), { key: 1 })),
                    we(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              b("div", Tb, [
                b("div", Nb, [
                  b(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (ge(), Ye(ue(oi), { key: 0 })) : vt("", !0)],
                    2,
                  ),
                ]),
                b("div", Fb, [
                  b(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", a.value]) },
                    [r.value ? (ge(), Ye(ue(Ia), { key: 0 })) : vt("", !0)],
                    2,
                  ),
                ]),
              ]),
              b(
                "h4",
                { class: M(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              b("div", Lb, [
                b("div", jb, [
                  b(
                    "button",
                    {
                      class: M([
                        "text-xl font-semibold rounded px-5 py-2 flex align-middle",
                        {
                          "bg-emerald-600 text-slate-200": e.brightness >= 4,
                          "bg-slate-500 text-slate-200": e.brightness == 3,
                          "bg-orange-600 text-slate-800": e.brightness == 2,
                          "bg-orange-500 text-slate-800": e.brightness == 1,
                        },
                      ]),
                      "aria-label": "Submit",
                    },
                    [we(" Submit "), le(ue(oi))],
                    2,
                  ),
                ]),
                b("div", Bb, [
                  b(
                    "button",
                    {
                      class: M([
                        "text-xl font-semibold rounded px-5 py-2 flex align-middle",
                        {
                          "bg-emerald-600 text-slate-200": e.brightness >= 4,
                          "bg-slate-500 text-slate-200": e.brightness == 3,
                          "bg-orange-600 text-slate-800": e.brightness == 2,
                          "bg-orange-500 text-slate-800": e.brightness == 1,
                        },
                      ]),
                      "aria-label": "Cancel",
                    },
                    [we(" Cancel "), le(ue(Ia))],
                    2,
                  ),
                ]),
              ]),
              b(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              b(
                "p",
                { class: M(i(e.brightness)) },
                [
                  we(" Changes like these may seem small, but they make a "),
                  Db,
                  we(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            Hb,
            le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  qb = ["onMouseover"],
  Wb = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = _e([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 2, title: "Design Overhaul", icon: "ShowerHead" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = _e(0)
      const r = (a, i, u, f) => {
          if (i) {
            if (a == 5) return u === f ? "bg-emerald-600" : "bg-emerald-500"
            if (a == 4) return u === f ? "bg-emerald-600" : "bg-emerald-500"
            if (a == 3 || a == 1)
              return u === f ? "bg-orange-500" : "bg-orange-400"
            if (a == 2) return "bg-orange-600"
          } else if (u === f) {
            if (a == 5) return "bg-slate-300"
            if (a == 4) return "bg-slate-400"
            if (a == 3) return "bg-slate-700"
            if (a == 2) return "bg-slate-900"
            if (a == 1) return "bg-black"
          } else {
            if (a == 5) return "bg-slate-200"
            if (a == 4) return "bg-slate-300"
            if (a == 3) return "bg-slate-600"
            if (a == 2) return "bg-slate-800"
            if (a == 1) return "bg-slate-900"
          }
        },
        s = (a, i) => {
          if (i) return a >= 3 ? "text-slate-200" : "text-slate-800"
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-200"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        }
      return (a, i) => (
        ge(),
        Ye(ue(Lg), null, {
          default: ct(() => [
            le(
              ue(jg),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: ct(() => [
                  (ge(!0),
                  He(
                    et,
                    null,
                    wa(
                      t.value,
                      (u) => (
                        ge(),
                        Ye(
                          ue(Bg),
                          {
                            key: u.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: ct(({ selected: f }) => [
                              b(
                                "div",
                                {
                                  class: M([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, f, ue(n), u.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (d) =>
                                    pt(n) ? (n.value = u.id) : (n = u.id),
                                  onMouseleave:
                                    i[0] ||
                                    (i[0] = (d) =>
                                      pt(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  u.id == 0
                                    ? (ge(),
                                      Ye(
                                        ue(ss),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(s(e.brightness, f)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : vt("", !0),
                                  u.id == 1
                                    ? (ge(),
                                      Ye(
                                        ue(Gg),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(s(e.brightness, f)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : vt("", !0),
                                  u.id == 2
                                    ? (ge(),
                                      Ye(
                                        ue(ep),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(s(e.brightness, f)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : vt("", !0),
                                  u.id == 3
                                    ? (ge(),
                                      Ye(
                                        ue(Zg),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(s(e.brightness, f)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : vt("", !0),
                                  u.id == 4
                                    ? (ge(),
                                      Ye(
                                        ue(Vg),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(s(e.brightness, f)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : vt("", !0),
                                  u.id == 5
                                    ? (ge(),
                                      Ye(
                                        ue(Fu),
                                        {
                                          key: 5,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(s(e.brightness, f)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : vt("", !0),
                                  b(
                                    "p",
                                    {
                                      class: M([
                                        "font-semibold cursor-pointer",
                                        s(e.brightness, f),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    Rt(u.title),
                                    3,
                                  ),
                                ],
                                42,
                                qb,
                              ),
                            ]),
                            _: 2,
                          },
                          1024,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
            ),
            le(
              ue(Dg),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: ct(() => [
                  le(
                    ue(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        le(fb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    ue(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        le(Mb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    ue(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        le(Ab, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    ue(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        le(Wp, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    ue(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        le(qp, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    ue(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        le(zb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  },
  Ub = { href: "/pricing" },
  Vb = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = _e(!1)
      bt(() => {
        const r = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", r),
          kn(() => {
            window.removeEventListener("scroll", r)
          })
      })
      const n = (r) => {
        if (r >= 4) return "text-slate-800"
        if (r == 3) return "text-slate-200"
        if (r == 2) return "text-slate-300"
        if (r == 1) return "text-slate-300"
      }
      return (r, s) => (
        ge(),
        He(
          "div",
          {
            style: { transition: "opacity 0.5s ease-in-out" },
            class: M([
              "fixed bottom-0 left-0 w-screen p-2 overflow-hidden flex flex-wrap justify-center items-center gap-3 sm:text-xs md:text-sm",
              {
                "bg-slate-100": e.brightness == 5,
                "bg-slate-400": e.brightness == 4,
                "bg-slate-500": e.brightness == 3,
                "bg-slate-700": e.brightness == 2,
                "bg-slate-800": e.brightness == 1,
                "opacity-0": !t.value,
                "opacity-100": t.value,
              },
            ]),
          },
          [
            b(
              "p",
              { class: M(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            b("a", Ub, [
              b(
                "button",
                {
                  class: M([
                    "rounded px-5 py-2 text-white font-semibold",
                    {
                      "bg-emerald-600": e.brightness >= 4,
                      "bg-orange-700": e.brightness == 3,
                      "bg-orange-600": e.brightness == 2,
                      "bg-orange-500": e.brightness == 1,
                    },
                  ]),
                },
                " Get a Free Audit ",
                2,
              ),
            ]),
          ],
          2,
        )
      )
    },
  },
  hr = (e) => (Xa("data-v-59a95949"), (e = e()), Za(), e),
  Gb = { class: "flex-col" },
  Kb = { class: "prose py-5 flex-col w-full" },
  Yb = hr(() => b("br", null, null, -1)),
  Xb = hr(() => b("br", null, null, -1)),
  Zb = { class: "flex" },
  Jb = { class: "w-6/12" },
  Qb = ["name", "checked", "onClick"],
  em = { class: "w-6/12" },
  tm = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  nm = { class: "flex-col gap-4" },
  rm = { class: "flex items-center" },
  sm = ["name", "checked", "onClick"],
  am = { key: 0 },
  lm = { key: 1 },
  om = { class: "" },
  im = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  um = { class: "flex-col" },
  cm = { class: "flex justify-between" },
  fm = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  dm = { class: "gap-4 mt-4", name: "pricing" },
  hm = ["value"],
  vm = ["value"],
  gm = { class: "flex gap-4", id: "leftInputs" },
  pm = { class: "flex gap-4", id: "rightInputs" },
  bm = hr(() => b("br", null, null, -1)),
  mm = hr(() => b("br", null, null, -1)),
  ym = hr(() => b("br", null, null, -1)),
  xm = hr(() => b("br", null, null, -1)),
  wm = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (X) => {
          X.preventDefault()
          const ve = "pricing"
          let J = document.getElementsByName("name")[0].value,
            $e = document.getElementsByName("email")[0].value,
            Be = document.getElementsByName("website")[0].value,
            kt = document.getElementsByName("notes")[0].value,
            yt = document.getElementsByName("services")[0].value,
            nt = document.getElementsByName("total")[0].value,
            qt = window.location.href,
            rt = new XMLHttpRequest()
          rt.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            rt.setRequestHeader("Content-Type", "application/json"),
            rt.send(
              JSON.stringify({
                form: ve,
                name: J,
                email: $e,
                website: Be,
                notes: kt,
                services: yt,
                total: nt,
                referrer: qt,
              }),
            ),
            (rt.onloadend = function () {
              if (
                (console.log(
                  `Status: ${rt.status}, Response: ${rt.responseText}`,
                ),
                rt.status == 200)
              ) {
                let ln = document.getElementsByName(ve)[0],
                  Ue = document.createElement("div")
                Ue.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (Ue.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  ln.appendChild(Ue)
                let I = document.getElementById("leftInputs"),
                  Q = document.getElementById("rightInputs")
                ;(I.style.display = "none"), (Q.style.display = "none")
                let V = document.getElementById("submitButton")
                V.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        r = (X) => {
          if (X >= 4) return "text-emerald-500"
          if (X == 3) return "text-orange-200"
          if (X == 2) return "text-orange-500"
          if (X == 1) return "text-orange-400"
        },
        s = (X) => {
          if (X >= 4) return "text-emerald-500"
          if (X == 3) return "text-slate-800"
          if (X == 2) return "text-orange-500"
          if (X == 1) return "text-orange-400"
        },
        a = (X) => {
          if (X >= 4) return "border-emerald-500"
          if (X == 3) return "border-orange-200"
          if (X == 2) return "border-orange-500"
          if (X == 1) return "border-orange-400"
        },
        i = (X) => {
          if (X >= 4) return "text-slate-800"
          if (X == 3) return "text-slate-200"
          if (X == 2) return "text-slate-300"
          if (X == 1) return "text-slate-300"
        },
        u = _e({
          speed: {
            audit: {
              price: 0,
              title: "Detailed speed audit (100% free)",
              enabled: !0,
            },
            optimize: {
              price: 300,
              title: "Optimize your website for speed",
              enabled: !0,
            },
            caching: {
              price: 300,
              title: "Setup efficient caching and always online",
              enabled: !0,
            },
            images: {
              price: 150,
              title: "Optimize images for speed and efficiency",
              enabled: !0,
            },
          },
          security: {
            audit: {
              price: 100,
              title: "Detailed security audit and report",
              enabled: !1,
            },
            protection: {
              price: 500,
              title: "Top-of-the-line bot protection and attack shielding",
              enabled: !1,
            },
            ddosprotection: {
              price: 100,
              title: "DDoS protection",
              enabled: !1,
            },
          },
          accessibility: {
            audit: {
              price: 200,
              title: "Accessibility audit and report",
              enabled: !1,
            },
            levelA: {
              price: 300,
              title: "Level A accessibility, across your site",
              enabled: !1,
            },
            levelAA: {
              price: 300,
              title: "Level AA accessibility, across your site",
              enabled: !1,
            },
          },
          designOverhaul: {
            designOverhaul: {
              price: 1e3,
              title: "Design overhaul",
              enabled: !1,
            },
          },
        }),
        f = oe(() =>
          u.value.speed.audit.enabled &&
          u.value.speed.optimize.enabled &&
          u.value.speed.caching.enabled &&
          u.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        d = oe(() =>
          u.value.security.audit.enabled &&
          u.value.security.ddosprotection.enabled &&
          u.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        h = oe(() =>
          u.value.accessibility.audit.enabled &&
          u.value.accessibility.levelA.enabled &&
          u.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        y = oe(() => 3 / 3),
        k = oe(
          () =>
            Object.values(u.value.speed).reduce(
              (X, ve) => X + (ve.enabled ? ve.price : 0),
              0,
            ) * f.value,
        ),
        C = oe(
          () =>
            Object.values(u.value.security).reduce(
              (X, ve) => X + (ve.enabled ? ve.price : 0),
              0,
            ) * d.value,
        ),
        j = oe(
          () =>
            Object.values(u.value.accessibility).reduce(
              (X, ve) => X + (ve.enabled ? ve.price : 0),
              0,
            ) * h.value,
        ),
        _ = oe(
          () =>
            Object.values(u.value.designOverhaul).reduce(
              (X, ve) => X + (ve.enabled ? ve.price : 0),
              0,
            ) * y.value,
        ),
        P = oe(() => {
          let X = 0
          for (const [ve, J] of Object.entries(u.value.speed))
            J.enabled && (X += J.price)
          return X
        }),
        R = oe(() => {
          let X = 0
          for (const [ve, J] of Object.entries(u.value.security))
            J.enabled && (X += J.price)
          return X
        }),
        U = oe(() => {
          let X = 0
          for (const [ve, J] of Object.entries(u.value.accessibility))
            J.enabled && (X += J.price)
          return X
        }),
        q = oe(() => {
          let X = 0
          for (const [ve, J] of Object.entries(u.value.designOverhaul))
            J.enabled && (X += J.price)
          return X
        }),
        Y = () => {
          u.value.speed.audit.enabled &&
          u.value.speed.optimize.enabled &&
          u.value.speed.caching.enabled &&
          u.value.speed.images.enabled
            ? ((u.value.speed.audit.enabled = !1),
              (u.value.speed.optimize.enabled = !1),
              (u.value.speed.caching.enabled = !1),
              (u.value.speed.images.enabled = !1))
            : ((u.value.speed.audit.enabled = !0),
              (u.value.speed.optimize.enabled = !0),
              (u.value.speed.caching.enabled = !0),
              (u.value.speed.images.enabled = !0))
        },
        B = () => {
          u.value.security.audit.enabled &&
          u.value.security.ddosprotection.enabled &&
          u.value.security.protection.enabled
            ? ((u.value.security.audit.enabled = !1),
              (u.value.security.ddosprotection.enabled = !1),
              (u.value.security.protection.enabled = !1))
            : ((u.value.security.audit.enabled = !0),
              (u.value.security.ddosprotection.enabled = !0),
              (u.value.security.protection.enabled = !0))
        },
        D = () => {
          u.value.accessibility.audit.enabled &&
          u.value.accessibility.levelA.enabled &&
          u.value.accessibility.levelAA.enabled
            ? ((u.value.accessibility.audit.enabled = !1),
              (u.value.accessibility.levelA.enabled = !1),
              (u.value.accessibility.levelAA.enabled = !1))
            : ((u.value.accessibility.audit.enabled = !0),
              (u.value.accessibility.levelA.enabled = !0),
              (u.value.accessibility.levelAA.enabled = !0))
        },
        fe = () => {
          u.value.designOverhaul.designOverhaul.enabled
            ? (u.value.designOverhaul.designOverhaul.enabled = !1)
            : (u.value.designOverhaul.designOverhaul.enabled = !0)
        },
        he = (X) => {
          X.title == "Speed"
            ? Y()
            : X.title == "Security"
              ? B()
              : X.title == "Accessibility"
                ? D()
                : X.title == "Design Overhaul" && fe()
        },
        mt = (X) => Object.values(X.services).some((ve) => ve.enabled),
        Ve = _e([
          {
            title: "Speed",
            services: u.value.speed,
            enabled: !0,
            discount: f.value,
          },
          {
            title: "Security",
            services: u.value.security,
            enabled: !1,
            discount: d.value,
          },
          {
            title: "Accessibility",
            services: u.value.accessibility,
            enabled: !1,
            discount: h.value,
          },
          {
            title: "Design Overhaul",
            services: u.value.designOverhaul,
            enabled: !1,
            discount: y.value,
          },
        ]),
        Je = (X) => {
          if (X.title === "Speed") return k.value
          if (X.title === "Security") return C.value
          if (X.title === "Accessibility") return j.value
          if (X.title === "Design Overhaul") return _.value
        },
        _t = (X) => {
          if (X.title === "Speed") return P.value
          if (X.title === "Security") return R.value
          if (X.title === "Accessibility") return U.value
          if (X.title === "Design Overhaul") return q.value
        },
        We = oe(
          () =>
            Je(Ve.value[0]) +
            Je(Ve.value[1]) +
            Je(Ve.value[2]) +
            Je(Ve.value[3]),
        ),
        Yt = oe(() => {
          let X = []
          for (const [ve, J] of Object.entries(u.value.speed))
            J.enabled && X.push(J.title)
          for (const [ve, J] of Object.entries(u.value.security))
            J.enabled && X.push(J.title)
          for (const [ve, J] of Object.entries(u.value.accessibility))
            J.enabled && X.push(J.title)
          for (const [ve, J] of Object.entries(u.value.designOverhaul))
            J.enabled && X.push(J.title)
          return X
        })
      return (X, ve) => (
        ge(),
        He("div", Gb, [
          b("div", Kb, [
            b(
              "h2",
              {
                class: M([
                  "text-5xl text-center text-semibold",
                  i(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            b(
              "p",
              { class: M(["text-center", i(n.brightness)]) },
              [
                we(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                Yb,
                Xb,
                we(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                b(
                  "a",
                  {
                    href: "/contact",
                    class: M(["font-bold", r(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                we(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (ge(!0),
          He(
            et,
            null,
            wa(
              Ve.value,
              (J, $e) => (
                ge(),
                He(
                  "div",
                  {
                    key: $e,
                    class: M([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      {
                        "bg-slate-100": e.brightness == 5,
                        "bg-slate-400": e.brightness == 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-700": e.brightness == 2,
                        "bg-slate-800": e.brightness == 1,
                      },
                      a(e.brightness),
                    ]),
                  },
                  [
                    b("div", Zb, [
                      b("div", Jb, [
                        b(
                          "div",
                          {
                            class: M([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              i(n.brightness),
                            ]),
                          },
                          [
                            b(
                              "input",
                              {
                                type: "checkbox",
                                name: J.title,
                                checked: mt(J),
                                onClick: (Be) => he(J),
                                class: M([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              Qb,
                            ),
                            b("h3", null, Rt(J.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      b("div", em, [
                        b(
                          "h3",
                          {
                            class: M([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            _t(J) != Math.floor(Je(J))
                              ? (ge(), He("span", tm, "$" + Rt(_t(J)), 1))
                              : vt("", !0),
                            we("$" + Rt(Je(J)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    b(
                      "hr",
                      { class: M(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    b("div", nm, [
                      (ge(!0),
                      He(
                        et,
                        null,
                        wa(
                          J.services,
                          (Be, kt) => (
                            ge(),
                            He(
                              "div",
                              {
                                key: kt,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                b("div", rm, [
                                  b(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: Be.title,
                                      checked: Be.enabled,
                                      onClick: (yt) =>
                                        (Be.enabled = !Be.enabled),
                                      class: M([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    sm,
                                  ),
                                  b(
                                    "p",
                                    { class: M(["", i(n.brightness)]) },
                                    [
                                      Be.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (ge(),
                                          He("b", am, [
                                            b("em", null, Rt(Be.title), 1),
                                          ]))
                                        : (ge(),
                                          He("span", lm, Rt(Be.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                b("div", om, [
                                  b(
                                    "h3",
                                    {
                                      class: M([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      Be.price !=
                                      Math.floor(Be.price * J.discount)
                                        ? (ge(),
                                          He("span", im, "$" + Rt(Be.price), 1))
                                        : vt("", !0),
                                      we("$" + Rt(Be.price * J.discount), 1),
                                    ],
                                    2,
                                  ),
                                ]),
                              ],
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ],
                  2,
                )
              ),
            ),
            128,
          )),
          b("hr", { class: M(["my-4 w-full", r(n.brightness)]) }, null, 2),
          b("div", um, [
            b("div", cm, [
              b(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              b(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                [
                  We.value != Math.floor(We.value)
                    ? (ge(), He("span", fm, "$" + Rt(We.value), 1))
                    : vt("", !0),
                  we("$" + Rt(We.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          b("form", dm, [
            b(
              "input",
              { type: "hidden", name: "services", value: Yt.value },
              null,
              8,
              hm,
            ),
            b(
              "input",
              { type: "hidden", name: "total", value: We.value },
              null,
              8,
              vm,
            ),
            b("div", gm, [
              b(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: M([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              b(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: M([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            b("div", pm, [
              b(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: M([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              b(
                "textarea",
                {
                  name: "notes",
                  placeholder: "Notes",
                  class: M([
                    "rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            b(
              "button",
              {
                id: "submitButton",
                type: "submit",
                class: M([
                  "rounded px-5 py-2 text-white font-semibold mt-4 w-full",
                  {
                    "bg-emerald-600": e.brightness >= 4,
                    "bg-orange-700": e.brightness == 3,
                    "bg-orange-600": e.brightness == 2,
                    "bg-orange-500": e.brightness == 1,
                  },
                ]),
                onClick: t,
              },
              " Submit ",
              2,
            ),
          ]),
          b(
            "p",
            { class: M(["text-center mt-4", i(n.brightness)]) },
            [
              we(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              bm,
              mm,
              we(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              b(
                "a",
                { href: "/contact", class: M(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              we(" and we can get that figured out."),
              ym,
              xm,
              we("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  _m = $s(wm, [["__scopeId", "data-v-59a95949"]]),
  km = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        ge(), Ye(_m, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  $m = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  Em = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  ii = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = _e(3),
        n = e,
        r = (i) => {
          ;(t.value = Number(i)),
            window.localStorage.setItem("brightness", t.value)
        },
        s = oe(() => {
          switch (t.value) {
            case 5:
              return "bg-gradient-to-br from-sky-300 to-sky-500"
            case 4:
              return "bg-gradient-to-br from-sky-400 to-sky-600"
            case 3:
              return "bg-gradient-to-br from-slate-400 to-slate-600"
            case 2:
              return "bg-gradient-to-br from-sky-800 to-slate-800"
            case 1:
              return "bg-gradient-to-br from-slate-700 to-slate-900"
            default:
              return ""
          }
        })
      bt(() => {
        let i = window.localStorage
        i.getItem("brightness")
          ? (t.value = Number(i.getItem("brightness")))
          : i.setItem("brightness", t.value),
          n.component == "pricing" &&
            ((a.title =
              "josephhansen.dev | | web developer/designer | pricing"),
            (a.meta[1].content =
              "josephhansen.dev | | web developer/designer | pricing"),
            (a.meta[6].content =
              "josephhansen.dev | | web developer/designer | pricing"),
            (a.meta[4].content = "https://josephhansen.dev/pricing"),
            (a.meta[9].content = "https://josephhansen.dev/pricing"))
      })
      const a = Rr({
        title: "josephhansen.dev | web developer/designer",
        meta: [
          {
            name: "description",
            content:
              "Better, cheaper, and faster than an agency. Let me help you make your website incredible. | Expert in WordPress, Shopify, Vue, React, and more | Website speedups, optimizations, web security, web accessibility, design, custom web development",
          },
          {
            property: "og:title",
            content: "josephhansen.dev | web developer/designer",
          },
          {
            property: "og:description",
            content:
              "Better, cheaper, and faster than an agency. Let me help you make your website incredible. | Expert in WordPress, Shopify, Vue, React, and more | Website speedups, optimizations, web security, web accessibility, design, custom web development",
          },
          { property: "og:image", content: "" },
          { property: "og:url", content: "https://josephhansen.dev" },
          { property: "og:type", content: "website" },
          {
            property: "twitter:title",
            content: "josephhansen.dev | web developer/designer",
          },
          {
            property: "twitter:description",
            content:
              "Better, cheaper, and faster than an agency. Let me help you make your website incredible. | Expert in WordPress, Shopify, Vue, React, and more | Website speedups, optimizations, web security, web accessibility, design, custom web development",
          },
          { property: "twitter:image", content: "" },
          { property: "twitter:url", content: "https://josephhansen.dev" },
          { property: "twitter:card", content: "summary_large_image" },
          {
            name: "keywords",
            content:
              "web development, custom website, website creation, website design, website creation oklahoma, web development oklahoma, web development oklahoma city, web design oklahoma, vue developer, react developer, wordpress developer, shopify developer, web security, web security audit, site security audity, seo optimization, seo optimization oklahoma, web speed audit",
          },
        ],
      })
      return (
        rn(() => {
          ;(document.title = a.title),
            a.meta.forEach((i) => {
              let u = document.querySelector(
                `meta[name="${i.name}"], meta[property="${i.property}"]`,
              )
              u
                ? u.setAttribute("content", i.content)
                : ((u = document.createElement("meta")),
                  i.name && u.setAttribute("name", i.name),
                  i.property && u.setAttribute("property", i.property),
                  u.setAttribute("content", i.content),
                  document.getElementsByTagName("head")[0].appendChild(u))
            })
        }),
        (i, u) => (
          ge(),
          He(
            et,
            null,
            [
              b(
                "main",
                {
                  class: M([["w-dvw", s.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  le(_p, { "onUpdate:brightness": r }),
                  b("div", $m, [
                    e.component == "pricing"
                      ? (ge(),
                        He(
                          "div",
                          {
                            key: 0,
                            class: M([
                              "md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center",
                              {
                                "bg-slate-200": t.value == 5,
                                "bg-slate-300": t.value == 4,
                                "bg-slate-600": t.value == 3,
                                "bg-slate-800": t.value == 2,
                                "bg-slate-900": t.value == 1,
                              },
                            ]),
                          },
                          [
                            le(km, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : vt("", !0),
                    e.component == "home"
                      ? (ge(),
                        He(
                          "div",
                          {
                            key: 1,
                            class: M([
                              "md:w-10/12 sm:w-12/12 rounded p-3",
                              {
                                "bg-slate-200": t.value == 5,
                                "bg-slate-300": t.value == 4,
                                "bg-slate-600": t.value == 3,
                                "bg-slate-800": t.value == 2,
                                "bg-slate-900": t.value == 1,
                              },
                            ]),
                          },
                          [
                            le(Mp, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : vt("", !0),
                  ]),
                  b("div", Em, [
                    e.component == "home"
                      ? (ge(),
                        He(
                          "div",
                          {
                            key: 0,
                            class: M([
                              "md:w-10/12 sm:w-12/12 rounded p-3",
                              {
                                "bg-slate-200": t.value == 5,
                                "bg-slate-300": t.value == 4,
                                "bg-slate-600": t.value == 3,
                                "bg-slate-800": t.value == 2,
                                "bg-slate-900": t.value == 1,
                              },
                            ]),
                          },
                          [
                            le(Wb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : vt("", !0),
                  ]),
                ],
                2,
              ),
              le(Vb, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  }
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Qn = typeof window < "u"
function Sm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Le = Object.assign
function fa(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = zt(s) ? s.map(e) : e(s)
  }
  return n
}
const $r = () => {},
  zt = Array.isArray,
  Pm = /\/$/,
  Cm = (e) => e.replace(Pm, "")
function da(e, t, n = "/") {
  let r,
    s = {},
    a = "",
    i = ""
  const u = t.indexOf("#")
  let f = t.indexOf("?")
  return (
    u < f && u >= 0 && (f = -1),
    f > -1 &&
      ((r = t.slice(0, f)),
      (a = t.slice(f + 1, u > -1 ? u : t.length)),
      (s = e(a))),
    u > -1 && ((r = r || t.slice(0, u)), (i = t.slice(u, t.length))),
    (r = Im(r ?? t, n)),
    { fullPath: r + (a && "?") + a + i, path: r, query: s, hash: i }
  )
}
function Mm(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function ui(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function Am(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    ir(t.matched[r], n.matched[s]) &&
    ju(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function ir(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function ju(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Om(e[n], t[n])) return !1
  return !0
}
function Om(e, t) {
  return zt(e) ? ci(e, t) : zt(t) ? ci(t, e) : e === t
}
function ci(e, t) {
  return zt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Im(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1]
  ;(s === ".." || s === ".") && r.push("")
  let a = n.length - 1,
    i,
    u
  for (i = 0; i < r.length; i++)
    if (((u = r[i]), u !== "."))
      if (u === "..") a > 1 && a--
      else break
  return (
    n.slice(0, a).join("/") +
    "/" +
    r.slice(i - (i === r.length ? 1 : 0)).join("/")
  )
}
var Ir
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(Ir || (Ir = {}))
var Er
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Er || (Er = {}))
function Rm(e) {
  if (!e)
    if (Qn) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cm(e)
}
const Tm = /^[^#]+#/
function Nm(e, t) {
  return e.replace(Tm, "#") + t
}
function Fm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Ps = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Lm(e) {
  let t
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      s =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!s) return
    t = Fm(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function fi(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Ra = new Map()
function jm(e, t) {
  Ra.set(e, t)
}
function Bm(e) {
  const t = Ra.get(e)
  return Ra.delete(e), t
}
let Dm = () => location.protocol + "//" + location.host
function Bu(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let u = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      f = s.slice(u)
    return f[0] !== "/" && (f = "/" + f), ui(f, "")
  }
  return ui(n, e) + r + s
}
function Hm(e, t, n, r) {
  let s = [],
    a = [],
    i = null
  const u = ({ state: k }) => {
    const C = Bu(e, location),
      j = n.value,
      _ = t.value
    let P = 0
    if (k) {
      if (((n.value = C), (t.value = k), i && i === j)) {
        i = null
        return
      }
      P = _ ? k.position - _.position : 0
    } else r(C)
    s.forEach((R) => {
      R(n.value, j, {
        delta: P,
        type: Ir.pop,
        direction: P ? (P > 0 ? Er.forward : Er.back) : Er.unknown,
      })
    })
  }
  function f() {
    i = n.value
  }
  function d(k) {
    s.push(k)
    const C = () => {
      const j = s.indexOf(k)
      j > -1 && s.splice(j, 1)
    }
    return a.push(C), C
  }
  function h() {
    const { history: k } = window
    k.state && k.replaceState(Le({}, k.state, { scroll: Ps() }), "")
  }
  function y() {
    for (const k of a) k()
    ;(a = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", h)
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", h, { passive: !0 }),
    { pauseListeners: f, listen: d, destroy: y }
  )
}
function di(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Ps() : null,
  }
}
function zm(e) {
  const { history: t, location: n } = window,
    r = { value: Bu(e, n) },
    s = { value: t.state }
  s.value ||
    a(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function a(f, d, h) {
    const y = e.indexOf("#"),
      k =
        y > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(y)) + f
          : Dm() + e + f
    try {
      t[h ? "replaceState" : "pushState"](d, "", k), (s.value = d)
    } catch (C) {
      console.error(C), n[h ? "replace" : "assign"](k)
    }
  }
  function i(f, d) {
    const h = Le({}, t.state, di(s.value.back, f, s.value.forward, !0), d, {
      position: s.value.position,
    })
    a(f, h, !0), (r.value = f)
  }
  function u(f, d) {
    const h = Le({}, s.value, t.state, { forward: f, scroll: Ps() })
    a(h.current, h, !0)
    const y = Le({}, di(r.value, f, null), { position: h.position + 1 }, d)
    a(f, y, !1), (r.value = f)
  }
  return { location: r, state: s, push: u, replace: i }
}
function qm(e) {
  e = Rm(e)
  const t = zm(e),
    n = Hm(e, t.state, t.location, t.replace)
  function r(a, i = !0) {
    i || n.pauseListeners(), history.go(a)
  }
  const s = Le(
    { location: "", base: e, go: r, createHref: Nm.bind(null, e) },
    t,
    n,
  )
  return (
    Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  )
}
function Wm(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Du(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const gn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Hu = Symbol("")
var hi
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(hi || (hi = {}))
function ur(e, t) {
  return Le(new Error(), { type: e, [Hu]: !0 }, t)
}
function Jt(e, t) {
  return e instanceof Error && Hu in e && (t == null || !!(e.type & t))
}
const vi = "[^/]+?",
  Um = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Vm = /[.+*?^${}()[\]/\\]/g
function Gm(e, t) {
  const n = Le({}, Um, t),
    r = []
  let s = n.start ? "^" : ""
  const a = []
  for (const d of e) {
    const h = d.length ? [] : [90]
    n.strict && !d.length && (s += "/")
    for (let y = 0; y < d.length; y++) {
      const k = d[y]
      let C = 40 + (n.sensitive ? 0.25 : 0)
      if (k.type === 0)
        y || (s += "/"), (s += k.value.replace(Vm, "\\$&")), (C += 40)
      else if (k.type === 1) {
        const { value: j, repeatable: _, optional: P, regexp: R } = k
        a.push({ name: j, repeatable: _, optional: P })
        const U = R || vi
        if (U !== vi) {
          C += 10
          try {
            new RegExp(`(${U})`)
          } catch (Y) {
            throw new Error(
              `Invalid custom RegExp for param "${j}" (${U}): ` + Y.message,
            )
          }
        }
        let q = _ ? `((?:${U})(?:/(?:${U}))*)` : `(${U})`
        y || (q = P && d.length < 2 ? `(?:/${q})` : "/" + q),
          P && (q += "?"),
          (s += q),
          (C += 20),
          P && (C += -8),
          _ && (C += -20),
          U === ".*" && (C += -50)
      }
      h.push(C)
    }
    r.push(h)
  }
  if (n.strict && n.end) {
    const d = r.length - 1
    r[d][r[d].length - 1] += 0.7000000000000001
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)")
  const i = new RegExp(s, n.sensitive ? "" : "i")
  function u(d) {
    const h = d.match(i),
      y = {}
    if (!h) return null
    for (let k = 1; k < h.length; k++) {
      const C = h[k] || "",
        j = a[k - 1]
      y[j.name] = C && j.repeatable ? C.split("/") : C
    }
    return y
  }
  function f(d) {
    let h = "",
      y = !1
    for (const k of e) {
      ;(!y || !h.endsWith("/")) && (h += "/"), (y = !1)
      for (const C of k)
        if (C.type === 0) h += C.value
        else if (C.type === 1) {
          const { value: j, repeatable: _, optional: P } = C,
            R = j in d ? d[j] : ""
          if (zt(R) && !_)
            throw new Error(
              `Provided param "${j}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const U = zt(R) ? R.join("/") : R
          if (!U)
            if (P)
              k.length < 2 &&
                (h.endsWith("/") ? (h = h.slice(0, -1)) : (y = !0))
            else throw new Error(`Missing required param "${j}"`)
          h += U
        }
    }
    return h || "/"
  }
  return { re: i, score: r, keys: a, parse: u, stringify: f }
}
function Km(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function Ym(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const a = Km(r[n], s[n])
    if (a) return a
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (gi(r)) return 1
    if (gi(s)) return -1
  }
  return s.length - r.length
}
function gi(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Xm = { type: 0, value: "" },
  Zm = /[a-zA-Z0-9_]/
function Jm(e) {
  if (!e) return [[]]
  if (e === "/") return [[Xm]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(C) {
    throw new Error(`ERR (${n})/"${d}": ${C}`)
  }
  let n = 0,
    r = n
  const s = []
  let a
  function i() {
    a && s.push(a), (a = [])
  }
  let u = 0,
    f,
    d = "",
    h = ""
  function y() {
    d &&
      (n === 0
        ? a.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
          ? (a.length > 1 &&
              (f === "*" || f === "+") &&
              t(
                `A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`,
              ),
            a.push({
              type: 1,
              value: d,
              regexp: h,
              repeatable: f === "*" || f === "+",
              optional: f === "*" || f === "?",
            }))
          : t("Invalid state to consume buffer"),
      (d = ""))
  }
  function k() {
    d += f
  }
  for (; u < e.length; ) {
    if (((f = e[u++]), f === "\\" && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        f === "/" ? (d && y(), i()) : f === ":" ? (y(), (n = 1)) : k()
        break
      case 4:
        k(), (n = r)
        break
      case 1:
        f === "("
          ? (n = 2)
          : Zm.test(f)
            ? k()
            : (y(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--)
        break
      case 2:
        f === ")"
          ? h[h.length - 1] == "\\"
            ? (h = h.slice(0, -1) + f)
            : (n = 3)
          : (h += f)
        break
      case 3:
        y(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--, (h = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), y(), i(), s
}
function Qm(e, t, n) {
  const r = Gm(Jm(e.path), n),
    s = Le(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function e1(e, t) {
  const n = [],
    r = new Map()
  t = mi({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(h) {
    return r.get(h)
  }
  function a(h, y, k) {
    const C = !k,
      j = t1(h)
    j.aliasOf = k && k.record
    const _ = mi(t, h),
      P = [j]
    if ("alias" in h) {
      const q = typeof h.alias == "string" ? [h.alias] : h.alias
      for (const Y of q)
        P.push(
          Le({}, j, {
            components: k ? k.record.components : j.components,
            path: Y,
            aliasOf: k ? k.record : j,
          }),
        )
    }
    let R, U
    for (const q of P) {
      const { path: Y } = q
      if (y && Y[0] !== "/") {
        const B = y.record.path,
          D = B[B.length - 1] === "/" ? "" : "/"
        q.path = y.record.path + (Y && D + Y)
      }
      if (
        ((R = Qm(q, y, _)),
        k
          ? k.alias.push(R)
          : ((U = U || R),
            U !== R && U.alias.push(R),
            C && h.name && !bi(R) && i(h.name)),
        j.children)
      ) {
        const B = j.children
        for (let D = 0; D < B.length; D++) a(B[D], R, k && k.children[D])
      }
      ;(k = k || R),
        ((R.record.components && Object.keys(R.record.components).length) ||
          R.record.name ||
          R.record.redirect) &&
          f(R)
    }
    return U
      ? () => {
          i(U)
        }
      : $r
  }
  function i(h) {
    if (Du(h)) {
      const y = r.get(h)
      y &&
        (r.delete(h),
        n.splice(n.indexOf(y), 1),
        y.children.forEach(i),
        y.alias.forEach(i))
    } else {
      const y = n.indexOf(h)
      y > -1 &&
        (n.splice(y, 1),
        h.record.name && r.delete(h.record.name),
        h.children.forEach(i),
        h.alias.forEach(i))
    }
  }
  function u() {
    return n
  }
  function f(h) {
    let y = 0
    for (
      ;
      y < n.length &&
      Ym(h, n[y]) >= 0 &&
      (h.record.path !== n[y].record.path || !zu(h, n[y]));

    )
      y++
    n.splice(y, 0, h), h.record.name && !bi(h) && r.set(h.record.name, h)
  }
  function d(h, y) {
    let k,
      C = {},
      j,
      _
    if ("name" in h && h.name) {
      if (((k = r.get(h.name)), !k)) throw ur(1, { location: h })
      ;(_ = k.record.name),
        (C = Le(
          pi(
            y.params,
            k.keys.filter((U) => !U.optional).map((U) => U.name),
          ),
          h.params &&
            pi(
              h.params,
              k.keys.map((U) => U.name),
            ),
        )),
        (j = k.stringify(C))
    } else if ("path" in h)
      (j = h.path),
        (k = n.find((U) => U.re.test(j))),
        k && ((C = k.parse(j)), (_ = k.record.name))
    else {
      if (((k = y.name ? r.get(y.name) : n.find((U) => U.re.test(y.path))), !k))
        throw ur(1, { location: h, currentLocation: y })
      ;(_ = k.record.name),
        (C = Le({}, y.params, h.params)),
        (j = k.stringify(C))
    }
    const P = []
    let R = k
    for (; R; ) P.unshift(R.record), (R = R.parent)
    return { name: _, path: j, params: C, matched: P, meta: r1(P) }
  }
  return (
    e.forEach((h) => a(h)),
    {
      addRoute: a,
      resolve: d,
      removeRoute: i,
      getRoutes: u,
      getRecordMatcher: s,
    }
  )
}
function pi(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function t1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: n1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  }
}
function n1(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function bi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function r1(e) {
  return e.reduce((t, n) => Le(t, n.meta), {})
}
function mi(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function zu(e, t) {
  return t.children.some((n) => n === e || zu(e, n))
}
const qu = /#/g,
  s1 = /&/g,
  a1 = /\//g,
  l1 = /=/g,
  o1 = /\?/g,
  Wu = /\+/g,
  i1 = /%5B/g,
  u1 = /%5D/g,
  Uu = /%5E/g,
  c1 = /%60/g,
  Vu = /%7B/g,
  f1 = /%7C/g,
  Gu = /%7D/g,
  d1 = /%20/g
function il(e) {
  return encodeURI("" + e)
    .replace(f1, "|")
    .replace(i1, "[")
    .replace(u1, "]")
}
function h1(e) {
  return il(e).replace(Vu, "{").replace(Gu, "}").replace(Uu, "^")
}
function Ta(e) {
  return il(e)
    .replace(Wu, "%2B")
    .replace(d1, "+")
    .replace(qu, "%23")
    .replace(s1, "%26")
    .replace(c1, "`")
    .replace(Vu, "{")
    .replace(Gu, "}")
    .replace(Uu, "^")
}
function v1(e) {
  return Ta(e).replace(l1, "%3D")
}
function g1(e) {
  return il(e).replace(qu, "%23").replace(o1, "%3F")
}
function p1(e) {
  return e == null ? "" : g1(e).replace(a1, "%2F")
}
function cs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function b1(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const a = r[s].replace(Wu, " "),
      i = a.indexOf("="),
      u = cs(i < 0 ? a : a.slice(0, i)),
      f = i < 0 ? null : cs(a.slice(i + 1))
    if (u in t) {
      let d = t[u]
      zt(d) || (d = t[u] = [d]), d.push(f)
    } else t[u] = f
  }
  return t
}
function yi(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = v1(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(zt(r) ? r.map((a) => a && Ta(a)) : [r && Ta(r)]).forEach((a) => {
      a !== void 0 &&
        ((t += (t.length ? "&" : "") + n), a != null && (t += "=" + a))
    })
  }
  return t
}
function m1(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = zt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r)
  }
  return t
}
const y1 = Symbol(""),
  xi = Symbol(""),
  ul = Symbol(""),
  Ku = Symbol(""),
  Na = Symbol("")
function xr() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function mn(e, t, n, r, s) {
  const a = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((i, u) => {
      const f = (y) => {
          y === !1
            ? u(ur(4, { from: n, to: t }))
            : y instanceof Error
              ? u(y)
              : Wm(y)
                ? u(ur(2, { from: t, to: y }))
                : (a &&
                    r.enterCallbacks[s] === a &&
                    typeof y == "function" &&
                    a.push(y),
                  i())
        },
        d = e.call(r && r.instances[s], t, n, f)
      let h = Promise.resolve(d)
      e.length < 3 && (h = h.then(f)), h.catch((y) => u(y))
    })
}
function ha(e, t, n, r) {
  const s = []
  for (const a of e)
    for (const i in a.components) {
      let u = a.components[i]
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (x1(u)) {
          const d = (u.__vccOpts || u)[t]
          d && s.push(mn(d, n, r, a, i))
        } else {
          let f = u()
          s.push(() =>
            f.then((d) => {
              if (!d)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${a.path}"`),
                )
              const h = Sm(d) ? d.default : d
              a.components[i] = h
              const k = (h.__vccOpts || h)[t]
              return k && mn(k, n, r, a, i)()
            }),
          )
        }
    }
  return s
}
function x1(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function wi(e) {
  const t = dt(ul),
    n = dt(Ku),
    r = oe(() => t.resolve(ue(e.to))),
    s = oe(() => {
      const { matched: f } = r.value,
        { length: d } = f,
        h = f[d - 1],
        y = n.matched
      if (!h || !y.length) return -1
      const k = y.findIndex(ir.bind(null, h))
      if (k > -1) return k
      const C = _i(f[d - 2])
      return d > 1 && _i(h) === C && y[y.length - 1].path !== C
        ? y.findIndex(ir.bind(null, f[d - 2]))
        : k
    }),
    a = oe(() => s.value > -1 && $1(n.params, r.value.params)),
    i = oe(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        ju(n.params, r.value.params),
    )
  function u(f = {}) {
    return k1(f)
      ? t[ue(e.replace) ? "replace" : "push"](ue(e.to)).catch($r)
      : Promise.resolve()
  }
  return {
    route: r,
    href: oe(() => r.value.href),
    isActive: a,
    isExactActive: i,
    navigate: u,
  }
}
const w1 = Ot({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: wi,
    setup(e, { slots: t }) {
      const n = Rr(wi(e)),
        { options: r } = dt(ul),
        s = oe(() => ({
          [ki(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ki(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const a = t.default && t.default(n)
        return e.custom
          ? a
          : ot(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              a,
            )
      }
    },
  }),
  _1 = w1
function k1(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target")
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function $1(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!zt(s) || s.length !== r.length || r.some((a, i) => a !== s[i]))
      return !1
  }
  return !0
}
function _i(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const ki = (e, t, n) => e ?? t ?? n,
  E1 = Ot({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = dt(Na),
        s = oe(() => e.route || r.value),
        a = dt(xi, 0),
        i = oe(() => {
          let d = ue(a)
          const { matched: h } = s.value
          let y
          for (; (y = h[d]) && !y.components; ) d++
          return d
        }),
        u = oe(() => s.value.matched[i.value])
      Gt(
        xi,
        oe(() => i.value + 1),
      ),
        Gt(y1, u),
        Gt(Na, s)
      const f = _e()
      return (
        nn(
          () => [f.value, u.value, e.name],
          ([d, h, y], [k, C, j]) => {
            h &&
              ((h.instances[y] = d),
              C &&
                C !== h &&
                d &&
                d === k &&
                (h.leaveGuards.size || (h.leaveGuards = C.leaveGuards),
                h.updateGuards.size || (h.updateGuards = C.updateGuards))),
              d &&
                h &&
                (!C || !ir(h, C) || !k) &&
                (h.enterCallbacks[y] || []).forEach((_) => _(d))
          },
          { flush: "post" },
        ),
        () => {
          const d = s.value,
            h = e.name,
            y = u.value,
            k = y && y.components[h]
          if (!k) return $i(n.default, { Component: k, route: d })
          const C = y.props[h],
            j = C
              ? C === !0
                ? d.params
                : typeof C == "function"
                  ? C(d)
                  : C
              : null,
            P = ot(
              k,
              Le({}, j, t, {
                onVnodeUnmounted: (R) => {
                  R.component.isUnmounted && (y.instances[h] = null)
                },
                ref: f,
              }),
            )
          return $i(n.default, { Component: P, route: d }) || P
        }
      )
    },
  })
function $i(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const S1 = E1
function P1(e) {
  const t = e1(e.routes, e),
    n = e.parseQuery || b1,
    r = e.stringifyQuery || yi,
    s = e.history,
    a = xr(),
    i = xr(),
    u = xr(),
    f = P0(gn)
  let d = gn
  Qn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const h = fa.bind(null, (I) => "" + I),
    y = fa.bind(null, p1),
    k = fa.bind(null, cs)
  function C(I, Q) {
    let V, se
    return (
      Du(I) ? ((V = t.getRecordMatcher(I)), (se = Q)) : (se = I),
      t.addRoute(se, V)
    )
  }
  function j(I) {
    const Q = t.getRecordMatcher(I)
    Q && t.removeRoute(Q)
  }
  function _() {
    return t.getRoutes().map((I) => I.record)
  }
  function P(I) {
    return !!t.getRecordMatcher(I)
  }
  function R(I, Q) {
    if (((Q = Le({}, Q || f.value)), typeof I == "string")) {
      const E = da(n, I, Q.path),
        A = t.resolve({ path: E.path }, Q),
        T = s.createHref(E.fullPath)
      return Le(E, A, {
        params: k(A.params),
        hash: cs(E.hash),
        redirectedFrom: void 0,
        href: T,
      })
    }
    let V
    if ("path" in I) V = Le({}, I, { path: da(n, I.path, Q.path).path })
    else {
      const E = Le({}, I.params)
      for (const A in E) E[A] == null && delete E[A]
      ;(V = Le({}, I, { params: y(E) })), (Q.params = y(Q.params))
    }
    const se = t.resolve(V, Q),
      Ae = I.hash || ""
    se.params = h(k(se.params))
    const g = Mm(r, Le({}, I, { hash: h1(Ae), path: se.path })),
      m = s.createHref(g)
    return Le(
      { fullPath: g, hash: Ae, query: r === yi ? m1(I.query) : I.query || {} },
      se,
      { redirectedFrom: void 0, href: m },
    )
  }
  function U(I) {
    return typeof I == "string" ? da(n, I, f.value.path) : Le({}, I)
  }
  function q(I, Q) {
    if (d !== I) return ur(8, { from: Q, to: I })
  }
  function Y(I) {
    return fe(I)
  }
  function B(I) {
    return Y(Le(U(I), { replace: !0 }))
  }
  function D(I) {
    const Q = I.matched[I.matched.length - 1]
    if (Q && Q.redirect) {
      const { redirect: V } = Q
      let se = typeof V == "function" ? V(I) : V
      return (
        typeof se == "string" &&
          ((se =
            se.includes("?") || se.includes("#") ? (se = U(se)) : { path: se }),
          (se.params = {})),
        Le(
          {
            query: I.query,
            hash: I.hash,
            params: "path" in se ? {} : I.params,
          },
          se,
        )
      )
    }
  }
  function fe(I, Q) {
    const V = (d = R(I)),
      se = f.value,
      Ae = I.state,
      g = I.force,
      m = I.replace === !0,
      E = D(V)
    if (E)
      return fe(
        Le(U(E), {
          state: typeof E == "object" ? Le({}, Ae, E.state) : Ae,
          force: g,
          replace: m,
        }),
        Q || V,
      )
    const A = V
    A.redirectedFrom = Q
    let T
    return (
      !g &&
        Am(r, se, V) &&
        ((T = ur(16, { to: A, from: se })), yt(se, se, !0, !1)),
      (T ? Promise.resolve(T) : Ve(A, se))
        .catch((F) => (Jt(F) ? (Jt(F, 2) ? F : kt(F)) : $e(F, A, se)))
        .then((F) => {
          if (F) {
            if (Jt(F, 2))
              return fe(
                Le({ replace: m }, U(F.to), {
                  state: typeof F.to == "object" ? Le({}, Ae, F.to.state) : Ae,
                  force: g,
                }),
                Q || A,
              )
          } else F = _t(A, se, !0, m, Ae)
          return Je(A, se, F), F
        })
    )
  }
  function he(I, Q) {
    const V = q(I, Q)
    return V ? Promise.reject(V) : Promise.resolve()
  }
  function mt(I) {
    const Q = rt.values().next().value
    return Q && typeof Q.runWithContext == "function"
      ? Q.runWithContext(I)
      : I()
  }
  function Ve(I, Q) {
    let V
    const [se, Ae, g] = C1(I, Q)
    V = ha(se.reverse(), "beforeRouteLeave", I, Q)
    for (const E of se)
      E.leaveGuards.forEach((A) => {
        V.push(mn(A, I, Q))
      })
    const m = he.bind(null, I, Q)
    return (
      V.push(m),
      Ue(V)
        .then(() => {
          V = []
          for (const E of a.list()) V.push(mn(E, I, Q))
          return V.push(m), Ue(V)
        })
        .then(() => {
          V = ha(Ae, "beforeRouteUpdate", I, Q)
          for (const E of Ae)
            E.updateGuards.forEach((A) => {
              V.push(mn(A, I, Q))
            })
          return V.push(m), Ue(V)
        })
        .then(() => {
          V = []
          for (const E of g)
            if (E.beforeEnter)
              if (zt(E.beforeEnter))
                for (const A of E.beforeEnter) V.push(mn(A, I, Q))
              else V.push(mn(E.beforeEnter, I, Q))
          return V.push(m), Ue(V)
        })
        .then(
          () => (
            I.matched.forEach((E) => (E.enterCallbacks = {})),
            (V = ha(g, "beforeRouteEnter", I, Q)),
            V.push(m),
            Ue(V)
          ),
        )
        .then(() => {
          V = []
          for (const E of i.list()) V.push(mn(E, I, Q))
          return V.push(m), Ue(V)
        })
        .catch((E) => (Jt(E, 8) ? E : Promise.reject(E)))
    )
  }
  function Je(I, Q, V) {
    u.list().forEach((se) => mt(() => se(I, Q, V)))
  }
  function _t(I, Q, V, se, Ae) {
    const g = q(I, Q)
    if (g) return g
    const m = Q === gn,
      E = Qn ? history.state : {}
    V &&
      (se || m
        ? s.replace(I.fullPath, Le({ scroll: m && E && E.scroll }, Ae))
        : s.push(I.fullPath, Ae)),
      (f.value = I),
      yt(I, Q, V, m),
      kt()
  }
  let We
  function Yt() {
    We ||
      (We = s.listen((I, Q, V) => {
        if (!ln.listening) return
        const se = R(I),
          Ae = D(se)
        if (Ae) {
          fe(Le(Ae, { replace: !0 }), se).catch($r)
          return
        }
        d = se
        const g = f.value
        Qn && jm(fi(g.fullPath, V.delta), Ps()),
          Ve(se, g)
            .catch((m) =>
              Jt(m, 12)
                ? m
                : Jt(m, 2)
                  ? (fe(m.to, se)
                      .then((E) => {
                        Jt(E, 20) &&
                          !V.delta &&
                          V.type === Ir.pop &&
                          s.go(-1, !1)
                      })
                      .catch($r),
                    Promise.reject())
                  : (V.delta && s.go(-V.delta, !1), $e(m, se, g)),
            )
            .then((m) => {
              ;(m = m || _t(se, g, !1)),
                m &&
                  (V.delta && !Jt(m, 8)
                    ? s.go(-V.delta, !1)
                    : V.type === Ir.pop && Jt(m, 20) && s.go(-1, !1)),
                Je(se, g, m)
            })
            .catch($r)
      }))
  }
  let X = xr(),
    ve = xr(),
    J
  function $e(I, Q, V) {
    kt(I)
    const se = ve.list()
    return (
      se.length ? se.forEach((Ae) => Ae(I, Q, V)) : console.error(I),
      Promise.reject(I)
    )
  }
  function Be() {
    return J && f.value !== gn
      ? Promise.resolve()
      : new Promise((I, Q) => {
          X.add([I, Q])
        })
  }
  function kt(I) {
    return (
      J ||
        ((J = !I),
        Yt(),
        X.list().forEach(([Q, V]) => (I ? V(I) : Q())),
        X.reset()),
      I
    )
  }
  function yt(I, Q, V, se) {
    const { scrollBehavior: Ae } = e
    if (!Qn || !Ae) return Promise.resolve()
    const g =
      (!V && Bm(fi(I.fullPath, 0))) ||
      ((se || !V) && history.state && history.state.scroll) ||
      null
    return Ji()
      .then(() => Ae(I, Q, g))
      .then((m) => m && Lm(m))
      .catch((m) => $e(m, I, Q))
  }
  const nt = (I) => s.go(I)
  let qt
  const rt = new Set(),
    ln = {
      currentRoute: f,
      listening: !0,
      addRoute: C,
      removeRoute: j,
      hasRoute: P,
      getRoutes: _,
      resolve: R,
      options: e,
      push: Y,
      replace: B,
      go: nt,
      back: () => nt(-1),
      forward: () => nt(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: u.add,
      onError: ve.add,
      isReady: Be,
      install(I) {
        const Q = this
        I.component("RouterLink", _1),
          I.component("RouterView", S1),
          (I.config.globalProperties.$router = Q),
          Object.defineProperty(I.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ue(f),
          }),
          Qn &&
            !qt &&
            f.value === gn &&
            ((qt = !0), Y(s.location).catch((Ae) => {}))
        const V = {}
        for (const Ae in gn)
          Object.defineProperty(V, Ae, {
            get: () => f.value[Ae],
            enumerable: !0,
          })
        I.provide(ul, Q), I.provide(Ku, qi(V)), I.provide(Na, f)
        const se = I.unmount
        rt.add(I),
          (I.unmount = function () {
            rt.delete(I),
              rt.size < 1 &&
                ((d = gn),
                We && We(),
                (We = null),
                (f.value = gn),
                (qt = !1),
                (J = !1)),
              se()
          })
      },
    }
  function Ue(I) {
    return I.reduce((Q, V) => Q.then(() => mt(V)), Promise.resolve())
  }
  return ln
}
function C1(e, t) {
  const n = [],
    r = [],
    s = [],
    a = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < a; i++) {
    const u = t.matched[i]
    u && (e.matched.find((d) => ir(d, u)) ? r.push(u) : n.push(u))
    const f = e.matched[i]
    f && (t.matched.find((d) => ir(d, f)) || s.push(f))
  }
  return [n, r, s]
}
const M1 = [
    { path: "/", component: ii, props: { component: "home" } },
    { path: "/pricing", component: ii, props: { component: "pricing" } },
  ],
  A1 = P1({ history: qm(), routes: M1 }),
  Yu = og(dg)
Yu.use(A1)
Yu.mount("#app")
