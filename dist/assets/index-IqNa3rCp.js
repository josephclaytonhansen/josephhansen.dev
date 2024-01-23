;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s)
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
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
const He = {},
  er = [],
  Tt = () => {},
  Vh = () => !1,
  ds = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  La = (e) => e.startsWith("onUpdate:"),
  vt = Object.assign,
  ja = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Gh = Object.prototype.hasOwnProperty,
  Me = (e, t) => Gh.call(e, t),
  ge = Array.isArray,
  tr = (e) => hs(e) === "[object Map]",
  Ei = (e) => hs(e) === "[object Set]",
  be = (e) => typeof e == "function",
  tt = (e) => typeof e == "string",
  cr = (e) => typeof e == "symbol",
  qe = (e) => e !== null && typeof e == "object",
  Si = (e) => (qe(e) || be(e)) && be(e.then) && be(e.catch),
  Pi = Object.prototype.toString,
  hs = (e) => Pi.call(e),
  Kh = (e) => hs(e).slice(8, -1),
  Ci = (e) => hs(e) === "[object Object]",
  Ba = (e) =>
    tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  es = Fa(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  vs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Yh = /-(\w)/g,
  Kt = vs((e) => e.replace(Yh, (t, n) => (n ? n.toUpperCase() : ""))),
  Xh = /\B([A-Z])/g,
  fr = vs((e) => e.replace(Xh, "-$1").toLowerCase()),
  gs = vs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ta = vs((e) => (e ? `on${gs(e)}` : "")),
  _n = (e, t) => !Object.is(e, t),
  ts = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  ls = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  va = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Eo
const Mi = () =>
  Eo ||
  (Eo =
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
  if (ge(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = tt(r) ? e0(r) : Da(r)
      if (s) for (const a in s) t[a] = s[a]
    }
    return t
  } else if (tt(e) || qe(e)) return e
}
const Zh = /;(?![^(]*\))/g,
  Jh = /:([^]+)/,
  Qh = /\/\*[^]*?\*\//g
function e0(e) {
  const t = {}
  return (
    e
      .replace(Qh, "")
      .split(Zh)
      .forEach((n) => {
        if (n) {
          const r = n.split(Jh)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function M(e) {
  let t = ""
  if (tt(e)) t = e
  else if (ge(e))
    for (let n = 0; n < e.length; n++) {
      const r = M(e[n])
      r && (t += r + " ")
    }
  else if (qe(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const t0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  n0 = Fa(t0)
function Ai(e) {
  return !!e || e === ""
}
const Rt = (e) =>
    tt(e)
      ? e
      : e == null
        ? ""
        : ge(e) || (qe(e) && (e.toString === Pi || !be(e.toString)))
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
            : qe(t) && !ge(t) && !Ci(t)
              ? String(t)
              : t,
  na = (e, t = "") => {
    var n
    return cr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let Bt
class r0 {
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
function s0(e, t = Bt) {
  t && t.active && t.effects.push(e)
}
function a0() {
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
      s0(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      ;(this._dirtyLevel = 0), this._queryings++, Ln()
      for (const t of this.deps)
        if (t.computed && (l0(t.computed), this._dirtyLevel >= 2)) break
      jn(), this._queryings--
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = wn,
      n = On
    try {
      return (wn = !0), (On = this), this._runnings++, So(this), this.fn()
    } finally {
      Po(this), this._runnings--, (On = n), (wn = t)
    }
  }
  stop() {
    var t
    this.active &&
      (So(this),
      Po(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function l0(e) {
  return e.value
}
function So(e) {
  e._trackId++, (e._depsLength = 0)
}
function Po(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Ii(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Ii(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let wn = !0,
  ga = 0
const Ri = []
function Ln() {
  Ri.push(wn), (wn = !1)
}
function jn() {
  const e = Ri.pop()
  wn = e === void 0 ? !0 : e
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
  if (wn && On) {
    let r = ba.get(e)
    r || ba.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Fi(() => r.delete(n)))), Ti(On, s)
  }
}
function tn(e, t, n, r, s, a) {
  const o = ba.get(e)
  if (!o) return
  let u = []
  if (t === "clear") u = [...o.values()]
  else if (n === "length" && ge(e)) {
    const f = Number(r)
    o.forEach((d, h) => {
      ;(h === "length" || (!cr(h) && h >= f)) && u.push(d)
    })
  } else
    switch ((n !== void 0 && u.push(o.get(n)), t)) {
      case "add":
        ge(e)
          ? Ba(n) && u.push(o.get("length"))
          : (u.push(o.get(In)), tr(e) && u.push(o.get(ma)))
        break
      case "delete":
        ge(e) || (u.push(o.get(In)), tr(e) && u.push(o.get(ma)))
        break
      case "set":
        tr(e) && u.push(o.get(In))
        break
    }
  za()
  for (const f of u) f && Ni(f, 3)
  qa()
}
const o0 = Fa("__proto__,__v_isRef,__isVue"),
  Li = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(cr),
  ),
  Co = i0()
function i0() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = Re(this)
        for (let a = 0, o = this.length; a < o; a++) Pt(r, "get", a + "")
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
function u0(e) {
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
      return r === (s ? (a ? _0 : zi) : a ? Hi : Di).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const o = ge(t)
    if (!s) {
      if (o && Me(Co, n)) return Reflect.get(Co, n, r)
      if (n === "hasOwnProperty") return u0
    }
    const u = Reflect.get(t, n, r)
    return (cr(n) ? Li.has(n) : o0(n)) || (s || Pt(t, "get", n), a)
      ? u
      : bt(u)
        ? o && Ba(n)
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
        (!os(r) && !sr(r) && ((a = Re(a)), (r = Re(r))),
        !ge(t) && bt(a) && !bt(r))
      )
        return f ? !1 : ((a.value = r), !0)
    }
    const o = ge(t) && Ba(n) ? Number(n) < t.length : Me(t, n),
      u = Reflect.set(t, n, r, s)
    return (
      t === Re(s) && (o ? _n(r, a) && tn(t, "set", n, r) : tn(t, "add", n, r)),
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
    return Pt(t, "iterate", ge(t) ? "length" : In), Reflect.ownKeys(t)
  }
}
class c0 extends ji {
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
const f0 = new Bi(),
  d0 = new c0(),
  h0 = new Bi(!0),
  Wa = (e) => e,
  ps = (e) => Reflect.getPrototypeOf(e)
function Vr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = Re(e),
    a = Re(t)
  n || (_n(t, a) && Pt(s, "get", t), Pt(s, "get", a))
  const { has: o } = ps(s),
    u = r ? Wa : n ? Ga : Sr
  if (o.call(s, t)) return u(e.get(t))
  if (o.call(s, a)) return u(e.get(a))
  e !== s && e.get(t)
}
function Gr(e, t = !1) {
  const n = this.__v_raw,
    r = Re(n),
    s = Re(e)
  return (
    t || (_n(e, s) && Pt(r, "has", e), Pt(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function Kr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Pt(Re(e), "iterate", In), Reflect.get(e, "size", e)
  )
}
function Mo(e) {
  e = Re(e)
  const t = Re(this)
  return ps(t).has.call(t, e) || (t.add(e), tn(t, "add", e, e)), this
}
function Ao(e, t) {
  t = Re(t)
  const n = Re(this),
    { has: r, get: s } = ps(n)
  let a = r.call(n, e)
  a || ((e = Re(e)), (a = r.call(n, e)))
  const o = s.call(n, e)
  return (
    n.set(e, t), a ? _n(t, o) && tn(n, "set", e, t) : tn(n, "add", e, t), this
  )
}
function Oo(e) {
  const t = Re(this),
    { has: n, get: r } = ps(t)
  let s = n.call(t, e)
  s || ((e = Re(e)), (s = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return s && tn(t, "delete", e, void 0), a
}
function Io() {
  const e = Re(this),
    t = e.size !== 0,
    n = e.clear()
  return t && tn(e, "clear", void 0, void 0), n
}
function Yr(e, t) {
  return function (r, s) {
    const a = this,
      o = a.__v_raw,
      u = Re(o),
      f = t ? Wa : e ? Ga : Sr
    return (
      !e && Pt(u, "iterate", In), o.forEach((d, h) => r.call(s, f(d), f(h), a))
    )
  }
}
function Xr(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      a = Re(s),
      o = tr(a),
      u = e === "entries" || (e === Symbol.iterator && o),
      f = e === "keys" && o,
      d = s[e](...r),
      h = n ? Wa : t ? Ga : Sr
    return (
      !t && Pt(a, "iterate", f ? ma : In),
      {
        next() {
          const { value: m, done: k } = d.next()
          return k
            ? { value: m, done: k }
            : { value: u ? [h(m[0]), h(m[1])] : h(m), done: k }
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
function v0() {
  const e = {
      get(a) {
        return Vr(this, a)
      },
      get size() {
        return Kr(this)
      },
      has: Gr,
      add: Mo,
      set: Ao,
      delete: Oo,
      clear: Io,
      forEach: Yr(!1, !1),
    },
    t = {
      get(a) {
        return Vr(this, a, !1, !0)
      },
      get size() {
        return Kr(this)
      },
      has: Gr,
      add: Mo,
      set: Ao,
      delete: Oo,
      clear: Io,
      forEach: Yr(!1, !0),
    },
    n = {
      get(a) {
        return Vr(this, a, !0)
      },
      get size() {
        return Kr(this, !0)
      },
      has(a) {
        return Gr.call(this, a, !0)
      },
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear"),
      forEach: Yr(!0, !1),
    },
    r = {
      get(a) {
        return Vr(this, a, !0, !0)
      },
      get size() {
        return Kr(this, !0)
      },
      has(a) {
        return Gr.call(this, a, !0)
      },
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear"),
      forEach: Yr(!0, !0),
    }
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      ;(e[a] = Xr(a, !1, !1)),
        (n[a] = Xr(a, !0, !1)),
        (t[a] = Xr(a, !1, !0)),
        (r[a] = Xr(a, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [g0, p0, b0, m0] = v0()
function Ua(e, t) {
  const n = t ? (e ? m0 : b0) : e ? p0 : g0
  return (r, s, a) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Me(n, s) && s in r ? n : r, s, a)
}
const y0 = { get: Ua(!1, !1) },
  w0 = { get: Ua(!1, !0) },
  x0 = { get: Ua(!0, !1) },
  Di = new WeakMap(),
  Hi = new WeakMap(),
  zi = new WeakMap(),
  _0 = new WeakMap()
function k0(e) {
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
function $0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : k0(Kh(e))
}
function Rr(e) {
  return sr(e) ? e : Va(e, !1, f0, y0, Di)
}
function qi(e) {
  return Va(e, !1, h0, w0, Hi)
}
function Wi(e) {
  return Va(e, !0, d0, x0, zi)
}
function Va(e, t, n, r, s) {
  if (!qe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const a = s.get(e)
  if (a) return a
  const o = $0(e)
  if (o === 0) return e
  const u = new Proxy(e, o === 2 ? r : n)
  return s.set(e, u), u
}
function nr(e) {
  return sr(e) ? nr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function sr(e) {
  return !!(e && e.__v_isReadonly)
}
function os(e) {
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
  return ls(e, "__v_skip", !0), e
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
function E0(e, t, n = !1) {
  let r, s
  const a = be(e)
  return (
    a ? ((r = e), (s = Tt)) : ((r = e.get), (s = e.set)),
    new Gi(r, s, a || !s, n)
  )
}
function Ki(e) {
  wn &&
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
function bt(e) {
  return !!(e && e.__v_isRef === !0)
}
function _e(e) {
  return Yi(e, !1)
}
function S0(e) {
  return Yi(e, !0)
}
function Yi(e, t) {
  return bt(e) ? e : new P0(e, t)
}
class P0 {
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
    const n = this.__v_isShallow || os(t) || sr(t)
    ;(t = n ? t : Re(t)),
      _n(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Sr(t)), ya(this, 3))
  }
}
function ue(e) {
  return bt(e) ? e.value : e
}
const C0 = {
  get: (e, t, n) => ue(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return bt(s) && !bt(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function Xi(e) {
  return nr(e) ? e : new Proxy(e, C0)
}
function xn(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (a) {
    bs(a, t, n)
  }
  return s
}
function Ht(e, t, n, r) {
  if (be(e)) {
    const a = xn(e, t, n, r)
    return (
      a &&
        Si(a) &&
        a.catch((o) => {
          bs(o, t, n)
        }),
      a
    )
  }
  const s = []
  for (let a = 0; a < e.length; a++) s.push(Ht(e[a], t, n, r))
  return s
}
function bs(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let a = t.parent
    const o = t.proxy,
      u = `https://vuejs.org/errors/#runtime-${n}`
    for (; a; ) {
      const d = a.ec
      if (d) {
        for (let h = 0; h < d.length; h++) if (d[h](e, o, u) === !1) return
      }
      a = a.parent
    }
    const f = t.appContext.config.errorHandler
    if (f) {
      xn(f, null, 10, [e, o, u])
      return
    }
  }
  M0(e, n, s, r)
}
function M0(e, t, n, r = !0) {
  console.error(e)
}
let Pr = !1,
  wa = !1
const pt = []
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
function A0(e) {
  let t = Vt + 1,
    n = pt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = pt[r],
      a = Cr(s)
    a < e || (a === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function Ya(e) {
  ;(!pt.length || !pt.includes(e, Pr && e.allowRecurse ? Vt + 1 : Vt)) &&
    (e.id == null ? pt.push(e) : pt.splice(A0(e.id), 0, e), Qi())
}
function Qi() {
  !Pr && !wa && ((wa = !0), (Ka = Zi.then(tu)))
}
function O0(e) {
  const t = pt.indexOf(e)
  t > Vt && pt.splice(t, 1)
}
function I0(e) {
  ge(e)
    ? rr.push(...e)
    : (!Qt || !Qt.includes(e, e.allowRecurse ? Mn + 1 : Mn)) && rr.push(e),
    Qi()
}
function Ro(e, t, n = Pr ? Vt + 1 : 0) {
  for (; n < pt.length; n++) {
    const r = pt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      pt.splice(n, 1), n--, r()
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
  R0 = (e, t) => {
    const n = Cr(e) - Cr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function tu(e) {
  ;(wa = !1), (Pr = !0), pt.sort(R0)
  try {
    for (Vt = 0; Vt < pt.length; Vt++) {
      const t = pt[Vt]
      t && t.active !== !1 && xn(t, null, 14)
    }
  } finally {
    ;(Vt = 0),
      (pt.length = 0),
      eu(),
      (Pr = !1),
      (Ka = null),
      (pt.length || rr.length) && tu()
  }
}
function T0(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || He
  let s = n
  const a = t.startsWith("update:"),
    o = a && t.slice(7)
  if (o && o in r) {
    const h = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: m, trim: k } = r[h] || He
    k && (s = n.map((C) => (tt(C) ? C.trim() : C))), m && (s = n.map(va))
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
  let o = {},
    u = !1
  if (!be(e)) {
    const f = (d) => {
      const h = nu(d, t, !0)
      h && ((u = !0), vt(o, h))
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  return !a && !u
    ? (qe(e) && r.set(e, null), null)
    : (ge(a) ? a.forEach((f) => (o[f] = null)) : vt(o, a),
      qe(e) && r.set(e, o),
      o)
}
function ms(e, t) {
  return !e || !ds(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, fr(t)) || Me(e, t))
}
let Nt = null,
  ys = null
function is(e) {
  const t = Nt
  return (Nt = e), (ys = (e && e.type.__scopeId) || null), t
}
function Xa(e) {
  ys = e
}
function Za() {
  ys = null
}
function ft(e, t = Nt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Wo(-1)
    const a = is(t)
    let o
    try {
      o = e(...s)
    } finally {
      is(a), r._d && Wo(1)
    }
    return o
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
    propsOptions: [o],
    slots: u,
    attrs: f,
    emit: d,
    render: h,
    renderCache: m,
    data: k,
    setupState: C,
    ctx: j,
    inheritAttrs: _,
  } = e
  let P, R
  const U = is(e)
  try {
    if (n.shapeFlag & 4) {
      const Y = s || r,
        B = Y
      ;(P = Ut(h.call(B, Y, m, a, C, k, j))), (R = f)
    } else {
      const Y = t
      ;(P = Ut(
        Y.length > 1 ? Y(a, { attrs: f, slots: u, emit: d }) : Y(a, null),
      )),
        (R = t.props ? f : N0(f))
    }
  } catch (Y) {
    ;(kr.length = 0), bs(Y, e, 1), (P = le(Nn))
  }
  let q = P
  if (R && _ !== !1) {
    const Y = Object.keys(R),
      { shapeFlag: B } = q
    Y.length && B & 7 && (o && Y.some(La) && (R = F0(R, o)), (q = Fn(q, R)))
  }
  return (
    n.dirs && ((q = Fn(q)), (q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (q.transition = n.transition),
    (P = q),
    is(U),
    P
  )
}
const N0 = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || ds(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  F0 = (e, t) => {
    const n = {}
    for (const r in e) (!La(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function L0(e, t, n) {
  const { props: r, children: s, component: a } = e,
    { props: o, children: u, patchFlag: f } = t,
    d = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && f >= 0) {
    if (f & 1024) return !0
    if (f & 16) return r ? To(r, o, d) : !!o
    if (f & 8) {
      const h = t.dynamicProps
      for (let m = 0; m < h.length; m++) {
        const k = h[m]
        if (o[k] !== r[k] && !ms(d, k)) return !0
      }
    }
  } else
    return (s || u) && (!u || !u.$stable)
      ? !0
      : r === o
        ? !1
        : r
          ? o
            ? To(r, o, d)
            : !0
          : !!o
  return !1
}
function To(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const a = r[s]
    if (t[a] !== e[a] && !ms(n, a)) return !0
  }
  return !1
}
function j0({ vnode: e, parent: t }, n) {
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
  B0 = "directives"
function D0(e, t) {
  return su(ru, e, !0, t) || e
}
const H0 = Symbol.for("v-ndc")
function z0(e) {
  return su(B0, e)
}
function su(e, t, n = !0, r = !1) {
  const s = Nt || dt
  if (s) {
    const a = s.type
    if (e === ru) {
      const u = Iv(a, !1)
      if (u && (u === t || u === Kt(t) || u === gs(Kt(t)))) return a
    }
    const o = No(s[e] || a[e], t) || No(s.appContext[e], t)
    return !o && r ? a : o
  }
}
function No(e, t) {
  return e && (e[t] || e[Kt(t)] || e[gs(Kt(t))])
}
const q0 = (e) => e.__isSuspense
function W0(e, t) {
  t && t.pendingBranch
    ? ge(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : I0(e)
}
function rn(e, t) {
  return Ja(e, null, t)
}
const Zr = {}
function nn(e, t, n) {
  return Ja(e, t, n)
}
function Ja(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: a, onTrack: o, onTrigger: u } = He,
) {
  var f
  if (t && a) {
    const B = t
    t = (...D) => {
      B(...D), Y()
    }
  }
  const d = a0() === ((f = dt) == null ? void 0 : f.scope) ? dt : null
  let h,
    m = !1,
    k = !1
  if (
    (bt(e)
      ? ((h = () => e.value), (m = os(e)))
      : nr(e)
        ? ((h = () => e), (r = !0))
        : ge(e)
          ? ((k = !0),
            (m = e.some((B) => nr(B) || os(B))),
            (h = () =>
              e.map((B) => {
                if (bt(B)) return B.value
                if (nr(B)) return An(B)
                if (be(B)) return xn(B, d, 2)
              })))
          : be(e)
            ? t
              ? (h = () => xn(e, d, 2))
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
        xn(B, d, 4), (C = q.onStop = void 0)
      }
    },
    _
  if (ks)
    if (
      ((j = Tt),
      t ? n && Ht(t, d, 3, [h(), k ? [] : void 0, j]) : h(),
      s === "sync")
    ) {
      const B = Nv()
      _ = B.__watcherHandles || (B.__watcherHandles = [])
    } else return Tt
  let P = k ? new Array(e.length).fill(Zr) : Zr
  const R = () => {
    if (!(!q.active || !q.dirty))
      if (t) {
        const B = q.run()
        ;(r || m || (k ? B.some((D, fe) => _n(D, P[fe])) : _n(B, P))) &&
          (C && C(),
          Ht(t, d, 3, [B, P === Zr ? void 0 : k && P[0] === Zr ? [] : P, j]),
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
    s = tt(e) ? (e.includes(".") ? au(r, e) : () => r[e]) : e.bind(r, r)
  let a
  be(t) ? (a = t) : ((a = t.handler), (n = t))
  const o = dt
  ar(this)
  const u = Ja(s, a.bind(r), n)
  return o ? ar(o) : Rn(), u
}
function au(e, t) {
  const n = t.split(".")
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function An(e, t) {
  if (!qe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), bt(e))) An(e.value, t)
  else if (ge(e)) for (let n = 0; n < e.length; n++) An(e[n], t)
  else if (Ei(e) || tr(e))
    e.forEach((n) => {
      An(n, t)
    })
  else if (Ci(e)) for (const n in e) An(e[n], t)
  return e
}
function lu(e, t) {
  const n = Nt
  if (n === null) return e
  const r = $s(n) || n.proxy,
    s = e.dirs || (e.dirs = [])
  for (let a = 0; a < t.length; a++) {
    let [o, u, f, d = He] = t[a]
    o &&
      (be(o) && (o = { mounted: o, updated: o }),
      o.deep && An(u),
      s.push({
        dir: o,
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
  for (let o = 0; o < s.length; o++) {
    const u = s[o]
    a && (u.oldValue = a[o].value)
    let f = u.dir[r]
    f && (Ln(), Ht(f, n, 8, [e.el, u, e, t]), jn())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Ot(e, t) {
  return be(e) ? vt({ name: e.name }, t, { setup: e }) : e
}
const ns = (e) => !!e.type.__asyncLoader,
  ou = (e) => e.type.__isKeepAlive
function V0(e, t) {
  iu(e, "a", t)
}
function G0(e, t) {
  iu(e, "da", t)
}
function iu(e, t, n = dt) {
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
  if ((ws(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) ou(s.parent.vnode) && K0(r, t, n, s), (s = s.parent)
  }
}
function K0(e, t, n, r) {
  const s = ws(t, e, r, !0)
  kn(() => {
    ja(r[t], s)
  }, n)
}
function ws(e, t, n = dt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          Ln(), ar(n)
          const u = Ht(t, n, e, o)
          return Rn(), jn(), u
        })
    return r ? s.unshift(a) : s.push(a), a
  }
}
const sn =
    (e) =>
    (t, n = dt) =>
      (!ks || e === "sp") && ws(e, (...r) => t(...r), n),
  Y0 = sn("bm"),
  mt = sn("m"),
  uu = sn("bu"),
  X0 = sn("u"),
  Z0 = sn("bum"),
  kn = sn("um"),
  J0 = sn("sp"),
  Q0 = sn("rtg"),
  ev = sn("rtc")
function tv(e, t = dt) {
  ws("ec", e, t)
}
function xa(e, t, n, r) {
  let s
  const a = n && n[r]
  if (ge(e) || tt(e)) {
    s = new Array(e.length)
    for (let o = 0, u = e.length; o < u; o++)
      s[o] = t(e[o], o, void 0, a && a[o])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, a && a[o])
  } else if (qe(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (o, u) => t(o, u, void 0, a && a[u]))
    else {
      const o = Object.keys(e)
      s = new Array(o.length)
      for (let u = 0, f = o.length; u < f; u++) {
        const d = o[u]
        s[u] = t(e[d], d, u, a && a[u])
      }
    }
  else s = []
  return n && (n[r] = s), s
}
const _a = (e) => (e ? (xu(e) ? $s(e) || e.proxy : _a(e.parent)) : null),
  _r = vt(Object.create(null), {
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
  sa = (e, t) => e !== He && !e.__isScriptSetup && Me(e, t),
  nv = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: a,
        accessCache: o,
        type: u,
        appContext: f,
      } = e
      let d
      if (t[0] !== "$") {
        const C = o[t]
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
          if (sa(r, t)) return (o[t] = 1), r[t]
          if (s !== He && Me(s, t)) return (o[t] = 2), s[t]
          if ((d = e.propsOptions[0]) && Me(d, t)) return (o[t] = 3), a[t]
          if (n !== He && Me(n, t)) return (o[t] = 4), n[t]
          ka && (o[t] = 0)
        }
      }
      const h = _r[t]
      let m, k
      if (h) return t === "$attrs" && Pt(e, "get", t), h(e)
      if ((m = u.__cssModules) && (m = m[t])) return m
      if (n !== He && Me(n, t)) return (o[t] = 4), n[t]
      if (((k = f.config.globalProperties), Me(k, t))) return k[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: a } = e
      return sa(s, t)
        ? ((s[t] = n), !0)
        : r !== He && Me(r, t)
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
      o,
    ) {
      let u
      return (
        !!n[o] ||
        (e !== He && Me(e, o)) ||
        sa(t, o) ||
        ((u = a[0]) && Me(u, o)) ||
        Me(r, o) ||
        Me(_r, o) ||
        Me(s.config.globalProperties, o)
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
function Fo(e) {
  return ge(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ka = !0
function rv(e) {
  const t = Qa(e),
    n = e.proxy,
    r = e.ctx
  ;(ka = !1), t.beforeCreate && Lo(t.beforeCreate, e, "bc")
  const {
    data: s,
    computed: a,
    methods: o,
    watch: u,
    provide: f,
    inject: d,
    created: h,
    beforeMount: m,
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
    serverPrefetch: Ze,
    expose: We,
    inheritAttrs: yt,
    components: it,
    directives: Je,
    filters: Yt,
  } = t
  if ((d && sv(d, r, null), o))
    for (const J in o) {
      const $e = o[J]
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
        wt = oe({ get: Be, set: kt })
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (nt) => (wt.value = nt),
      })
    }
  if (u) for (const J in u) cu(u[J], r, n, J)
  if (f) {
    const J = be(f) ? f.call(n) : f
    Reflect.ownKeys(J).forEach(($e) => {
      Gt($e, J[$e])
    })
  }
  h && Lo(h, e, "c")
  function ve(J, $e) {
    ge($e) ? $e.forEach((Be) => J(Be.bind(n))) : $e && J($e.bind(n))
  }
  if (
    (ve(Y0, m),
    ve(mt, k),
    ve(uu, C),
    ve(X0, j),
    ve(V0, _),
    ve(G0, P),
    ve(tv, he),
    ve(ev, D),
    ve(Q0, fe),
    ve(Z0, U),
    ve(kn, Y),
    ve(J0, Ze),
    ge(We))
  )
    if (We.length) {
      const J = e.exposed || (e.exposed = {})
      We.forEach(($e) => {
        Object.defineProperty(J, $e, {
          get: () => n[$e],
          set: (Be) => (n[$e] = Be),
        })
      })
    } else e.exposed || (e.exposed = {})
  B && e.render === Tt && (e.render = B),
    yt != null && (e.inheritAttrs = yt),
    it && (e.components = it),
    Je && (e.directives = Je)
}
function sv(e, t, n = Tt) {
  ge(e) && (e = $a(e))
  for (const r in e) {
    const s = e[r]
    let a
    qe(s)
      ? "default" in s
        ? (a = ht(s.from || r, s.default, !0))
        : (a = ht(s.from || r))
      : (a = ht(s)),
      bt(a)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (o) => (a.value = o),
          })
        : (t[r] = a)
  }
}
function Lo(e, t, n) {
  Ht(ge(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function cu(e, t, n, r) {
  const s = r.includes(".") ? au(n, r) : () => n[r]
  if (tt(e)) {
    const a = t[e]
    be(a) && nn(s, a)
  } else if (be(e)) nn(s, e.bind(n))
  else if (qe(e))
    if (ge(e)) e.forEach((a) => cu(a, t, n, r))
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
      config: { optionMergeStrategies: o },
    } = e.appContext,
    u = a.get(t)
  let f
  return (
    u
      ? (f = u)
      : !s.length && !n && !r
        ? (f = t)
        : ((f = {}),
          s.length && s.forEach((d) => us(f, d, o, !0)),
          us(f, t, o)),
    qe(t) && a.set(t, f),
    f
  )
}
function us(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t
  a && us(e, a, n, !0), s && s.forEach((o) => us(e, o, n, !0))
  for (const o in t)
    if (!(r && o === "expose")) {
      const u = av[o] || (n && n[o])
      e[o] = u ? u(e[o], t[o]) : t[o]
    }
  return e
}
const av = {
  data: jo,
  props: Bo,
  emits: Bo,
  methods: xr,
  computed: xr,
  beforeCreate: _t,
  created: _t,
  beforeMount: _t,
  mounted: _t,
  beforeUpdate: _t,
  updated: _t,
  beforeDestroy: _t,
  beforeUnmount: _t,
  destroyed: _t,
  unmounted: _t,
  activated: _t,
  deactivated: _t,
  errorCaptured: _t,
  serverPrefetch: _t,
  components: xr,
  directives: xr,
  watch: ov,
  provide: jo,
  inject: lv,
}
function jo(e, t) {
  return t
    ? e
      ? function () {
          return vt(
            be(e) ? e.call(this, this) : e,
            be(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function lv(e, t) {
  return xr($a(e), $a(t))
}
function $a(e) {
  if (ge(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function _t(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function xr(e, t) {
  return e ? vt(Object.create(null), e, t) : t
}
function Bo(e, t) {
  return e
    ? ge(e) && ge(t)
      ? [...new Set([...e, ...t])]
      : vt(Object.create(null), Fo(e), Fo(t ?? {}))
    : t
}
function ov(e, t) {
  if (!e) return t
  if (!t) return e
  const n = vt(Object.create(null), e)
  for (const r in t) n[r] = _t(e[r], t[r])
  return n
}
function fu() {
  return {
    app: null,
    config: {
      isNativeTag: Vh,
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
    be(r) || (r = vt({}, r)), s != null && !qe(s) && (s = null)
    const a = fu(),
      o = new WeakSet()
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
          o.has(d) ||
            (d && be(d.install)
              ? (o.add(d), d.install(f, ...h))
              : be(d) && (o.add(d), d(f, ...h))),
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
      mount(d, h, m) {
        if (!u) {
          const k = le(r, s)
          return (
            (k.appContext = a),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            h && t ? t(k, d) : e(k, d, m),
            (u = !0),
            (f._container = d),
            (d.__vue_app__ = f),
            $s(k.component) || k.component.proxy
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
        cs = f
        try {
          return d()
        } finally {
          cs = null
        }
      },
    })
    return f
  }
}
let cs = null
function Gt(e, t) {
  if (dt) {
    let n = dt.provides
    const r = dt.parent && dt.parent.provides
    r === n && (n = dt.provides = Object.create(r)), (n[e] = t)
  }
}
function ht(e, t, n = !1) {
  const r = dt || Nt
  if (r || cs) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : cs._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && be(t) ? t.call(r && r.proxy) : t
  }
}
function cv(e, t, n, r = !1) {
  const s = {},
    a = {}
  ls(a, _s, 1), (e.propsDefaults = Object.create(null)), du(e, t, s, a)
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0)
  n ? (e.props = r ? s : qi(s)) : e.type.props ? (e.props = s) : (e.props = a),
    (e.attrs = a)
}
function fv(e, t, n, r) {
  const {
      props: s,
      attrs: a,
      vnode: { patchFlag: o },
    } = e,
    u = Re(s),
    [f] = e.propsOptions
  let d = !1
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const h = e.vnode.dynamicProps
      for (let m = 0; m < h.length; m++) {
        let k = h[m]
        if (ms(e.emitsOptions, k)) continue
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
    du(e, t, s, a) && (d = !0)
    let h
    for (const m in u)
      (!t || (!Me(t, m) && ((h = fr(m)) === m || !Me(t, h)))) &&
        (f
          ? n &&
            (n[m] !== void 0 || n[h] !== void 0) &&
            (s[m] = Ea(f, u, m, void 0, e, !0))
          : delete s[m])
    if (a !== u) for (const m in a) (!t || !Me(t, m)) && (delete a[m], (d = !0))
  }
  d && tn(e, "set", "$attrs")
}
function du(e, t, n, r) {
  const [s, a] = e.propsOptions
  let o = !1,
    u
  if (t)
    for (let f in t) {
      if (es(f)) continue
      const d = t[f]
      let h
      s && Me(s, (h = Kt(f)))
        ? !a || !a.includes(h)
          ? (n[h] = d)
          : ((u || (u = {}))[h] = d)
        : ms(e.emitsOptions, f) ||
          ((!(f in r) || d !== r[f]) && ((r[f] = d), (o = !0)))
    }
  if (a) {
    const f = Re(n),
      d = u || He
    for (let h = 0; h < a.length; h++) {
      const m = a[h]
      n[m] = Ea(s, f, m, d[m], e, !Me(d, m))
    }
  }
  return o
}
function Ea(e, t, n, r, s, a) {
  const o = e[n]
  if (o != null) {
    const u = Me(o, "default")
    if (u && r === void 0) {
      const f = o.default
      if (o.type !== Function && !o.skipFactory && be(f)) {
        const { propsDefaults: d } = s
        n in d ? (r = d[n]) : (ar(s), (r = d[n] = f.call(null, t)), Rn())
      } else r = f
    }
    o[0] && (a && !u ? (r = !1) : o[1] && (r === "" || r === fr(n)) && (r = !0))
  }
  return r
}
function hu(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const a = e.props,
    o = {},
    u = []
  let f = !1
  if (!be(e)) {
    const h = (m) => {
      f = !0
      const [k, C] = hu(m, t, !0)
      vt(o, k), C && u.push(...C)
    }
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h)
  }
  if (!a && !f) return qe(e) && r.set(e, er), er
  if (ge(a))
    for (let h = 0; h < a.length; h++) {
      const m = Kt(a[h])
      Do(m) && (o[m] = He)
    }
  else if (a)
    for (const h in a) {
      const m = Kt(h)
      if (Do(m)) {
        const k = a[h],
          C = (o[m] = ge(k) || be(k) ? { type: k } : vt({}, k))
        if (C) {
          const j = qo(Boolean, C.type),
            _ = qo(String, C.type)
          ;(C[0] = j > -1),
            (C[1] = _ < 0 || j < _),
            (j > -1 || Me(C, "default")) && u.push(m)
        }
      }
    }
  const d = [o, u]
  return qe(e) && r.set(e, d), d
}
function Do(e) {
  return e[0] !== "$"
}
function Ho(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function zo(e, t) {
  return Ho(e) === Ho(t)
}
function qo(e, t) {
  return ge(t) ? t.findIndex((n) => zo(n, e)) : be(t) && zo(t, e) ? 0 : -1
}
const vu = (e) => e[0] === "_" || e === "$stable",
  el = (e) => (ge(e) ? e.map(Ut) : [Ut(e)]),
  dv = (e, t, n) => {
    if (t._n) return t
    const r = ft((...s) => el(t(...s)), n)
    return (r._c = !1), r
  },
  gu = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (vu(s)) continue
      const a = e[s]
      if (be(a)) t[s] = dv(s, a, r)
      else if (a != null) {
        const o = el(a)
        t[s] = () => o
      }
    }
  },
  pu = (e, t) => {
    const n = el(t)
    e.slots.default = () => n
  },
  hv = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Re(t)), ls(t, "_", n)) : gu(t, (e.slots = {}))
    } else (e.slots = {}), t && pu(e, t)
    ls(e.slots, _s, 1)
  },
  vv = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let a = !0,
      o = He
    if (r.shapeFlag & 32) {
      const u = t._
      u
        ? n && u === 1
          ? (a = !1)
          : (vt(s, t), !n && u === 1 && delete s._)
        : ((a = !t.$stable), gu(t, s)),
        (o = t)
    } else t && (pu(e, t), (o = { default: 1 }))
    if (a) for (const u in s) !vu(u) && o[u] == null && delete s[u]
  }
function Sa(e, t, n, r, s = !1) {
  if (ge(e)) {
    e.forEach((k, C) => Sa(k, t && (ge(t) ? t[C] : t), n, r, s))
    return
  }
  if (ns(r) && !s) return
  const a = r.shapeFlag & 4 ? $s(r.component) || r.component.proxy : r.el,
    o = s ? null : a,
    { i: u, r: f } = e,
    d = t && t.r,
    h = u.refs === He ? (u.refs = {}) : u.refs,
    m = u.setupState
  if (
    (d != null &&
      d !== f &&
      (tt(d)
        ? ((h[d] = null), Me(m, d) && (m[d] = null))
        : bt(d) && (d.value = null)),
    be(f))
  )
    xn(f, u, 12, [o, h])
  else {
    const k = tt(f),
      C = bt(f)
    if (k || C) {
      const j = () => {
        if (e.f) {
          const _ = k ? (Me(m, f) ? m[f] : h[f]) : f.value
          s
            ? ge(_) && ja(_, a)
            : ge(_)
              ? _.includes(a) || _.push(a)
              : k
                ? ((h[f] = [a]), Me(m, f) && (m[f] = h[f]))
                : ((f.value = [a]), e.k && (h[e.k] = f.value))
        } else
          k
            ? ((h[f] = o), Me(m, f) && (m[f] = o))
            : C && ((f.value = o), e.k && (h[e.k] = o))
      }
      o ? ((j.id = -1), St(j, n)) : j()
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
      createElement: o,
      createText: u,
      createComment: f,
      setText: d,
      setElementText: h,
      parentNode: m,
      nextSibling: k,
      setScopeId: C = Tt,
      insertStaticContent: j,
    } = e,
    _ = (
      g,
      b,
      E,
      A = null,
      T = null,
      F = null,
      K = void 0,
      W = null,
      G = !!b.dynamicChildren,
    ) => {
      if (g === b) return
      g && !yr(g, b) && ((A = I(g)), nt(g, T, F, !0), (g = null)),
        b.patchFlag === -2 && ((G = !1), (b.dynamicChildren = null))
      const { type: L, ref: ee, shapeFlag: ie } = b
      switch (L) {
        case xs:
          P(g, b, E, A)
          break
        case Nn:
          R(g, b, E, A)
          break
        case rs:
          g == null && U(b, E, A, K)
          break
        case et:
          it(g, b, E, A, T, F, K, W, G)
          break
        default:
          ie & 1
            ? B(g, b, E, A, T, F, K, W, G)
            : ie & 6
              ? Je(g, b, E, A, T, F, K, W, G)
              : (ie & 64 || ie & 128) && L.process(g, b, E, A, T, F, K, W, G, V)
      }
      ee != null && T && Sa(ee, g && g.ref, F, b || g, !b)
    },
    P = (g, b, E, A) => {
      if (g == null) r((b.el = u(b.children)), E, A)
      else {
        const T = (b.el = g.el)
        b.children !== g.children && d(T, b.children)
      }
    },
    R = (g, b, E, A) => {
      g == null ? r((b.el = f(b.children || "")), E, A) : (b.el = g.el)
    },
    U = (g, b, E, A) => {
      ;[g.el, g.anchor] = j(g.children, b, E, A, g.el, g.anchor)
    },
    q = ({ el: g, anchor: b }, E, A) => {
      let T
      for (; g && g !== b; ) (T = k(g)), r(g, E, A), (g = T)
      r(b, E, A)
    },
    Y = ({ el: g, anchor: b }) => {
      let E
      for (; g && g !== b; ) (E = k(g)), s(g), (g = E)
      s(b)
    },
    B = (g, b, E, A, T, F, K, W, G) => {
      b.type === "svg" ? (K = "svg") : b.type === "math" && (K = "mathml"),
        g == null ? D(b, E, A, T, F, K, W, G) : Ze(g, b, T, F, K, W, G)
    },
    D = (g, b, E, A, T, F, K, W) => {
      let G, L
      const { props: ee, shapeFlag: ie, transition: ae, dirs: de } = g
      if (
        ((G = g.el = o(g.type, F, ee && ee.is, ee)),
        ie & 8
          ? h(G, g.children)
          : ie & 16 && he(g.children, G, null, A, T, aa(g, F), K, W),
        de && Pn(g, null, A, "created"),
        fe(G, g, g.scopeId, K, A),
        ee)
      ) {
        for (const Oe in ee)
          Oe !== "value" &&
            !es(Oe) &&
            a(G, Oe, null, ee[Oe], F, g.children, A, T, Ue)
        "value" in ee && a(G, "value", null, ee.value, F),
          (L = ee.onVnodeBeforeMount) && Wt(L, A, g)
      }
      de && Pn(g, null, A, "beforeMount")
      const me = bv(T, ae)
      me && ae.beforeEnter(G),
        r(G, b, E),
        ((L = ee && ee.onVnodeMounted) || me || de) &&
          St(() => {
            L && Wt(L, A, g), me && ae.enter(G), de && Pn(g, null, A, "mounted")
          }, T)
    },
    fe = (g, b, E, A, T) => {
      if ((E && C(g, E), A)) for (let F = 0; F < A.length; F++) C(g, A[F])
      if (T) {
        let F = T.subTree
        if (b === F) {
          const K = T.vnode
          fe(g, K, K.scopeId, K.slotScopeIds, T.parent)
        }
      }
    },
    he = (g, b, E, A, T, F, K, W, G = 0) => {
      for (let L = G; L < g.length; L++) {
        const ee = (g[L] = W ? pn(g[L]) : Ut(g[L]))
        _(null, ee, b, E, A, T, F, K, W)
      }
    },
    Ze = (g, b, E, A, T, F, K) => {
      const W = (b.el = g.el)
      let { patchFlag: G, dynamicChildren: L, dirs: ee } = b
      G |= g.patchFlag & 16
      const ie = g.props || He,
        ae = b.props || He
      let de
      if (
        (E && Cn(E, !1),
        (de = ae.onVnodeBeforeUpdate) && Wt(de, E, b, g),
        ee && Pn(b, g, E, "beforeUpdate"),
        E && Cn(E, !0),
        L
          ? We(g.dynamicChildren, L, W, E, A, aa(b, T), F)
          : K || $e(g, b, W, null, E, A, aa(b, T), F, !1),
        G > 0)
      ) {
        if (G & 16) yt(W, b, ie, ae, E, A, T)
        else if (
          (G & 2 && ie.class !== ae.class && a(W, "class", null, ae.class, T),
          G & 4 && a(W, "style", ie.style, ae.style, T),
          G & 8)
        ) {
          const me = b.dynamicProps
          for (let Oe = 0; Oe < me.length; Oe++) {
            const je = me[Oe],
              Ve = ie[je],
              $t = ae[je]
            ;($t !== Ve || je === "value") &&
              a(W, je, Ve, $t, T, g.children, E, A, Ue)
          }
        }
        G & 1 && g.children !== b.children && h(W, b.children)
      } else !K && L == null && yt(W, b, ie, ae, E, A, T)
      ;((de = ae.onVnodeUpdated) || ee) &&
        St(() => {
          de && Wt(de, E, b, g), ee && Pn(b, g, E, "updated")
        }, A)
    },
    We = (g, b, E, A, T, F, K) => {
      for (let W = 0; W < b.length; W++) {
        const G = g[W],
          L = b[W],
          ee =
            G.el && (G.type === et || !yr(G, L) || G.shapeFlag & 70)
              ? m(G.el)
              : E
        _(G, L, ee, null, A, T, F, K, !0)
      }
    },
    yt = (g, b, E, A, T, F, K) => {
      if (E !== A) {
        if (E !== He)
          for (const W in E)
            !es(W) && !(W in A) && a(g, W, E[W], null, K, b.children, T, F, Ue)
        for (const W in A) {
          if (es(W)) continue
          const G = A[W],
            L = E[W]
          G !== L && W !== "value" && a(g, W, L, G, K, b.children, T, F, Ue)
        }
        "value" in A && a(g, "value", E.value, A.value, K)
      }
    },
    it = (g, b, E, A, T, F, K, W, G) => {
      const L = (b.el = g ? g.el : u("")),
        ee = (b.anchor = g ? g.anchor : u(""))
      let { patchFlag: ie, dynamicChildren: ae, slotScopeIds: de } = b
      de && (W = W ? W.concat(de) : de),
        g == null
          ? (r(L, E, A), r(ee, E, A), he(b.children, E, ee, T, F, K, W, G))
          : ie > 0 && ie & 64 && ae && g.dynamicChildren
            ? (We(g.dynamicChildren, ae, E, T, F, K, W),
              (b.key != null || (T && b === T.subTree)) && bu(g, b, !0))
            : $e(g, b, E, ee, T, F, K, W, G)
    },
    Je = (g, b, E, A, T, F, K, W, G) => {
      ;(b.slotScopeIds = W),
        g == null
          ? b.shapeFlag & 512
            ? T.ctx.activate(b, E, A, K, G)
            : Yt(b, E, A, T, F, K, G)
          : Z(g, b, G)
    },
    Yt = (g, b, E, A, T, F, K) => {
      const W = (g.component = Pv(g, A, T))
      if ((ou(g) && (W.ctx.renderer = V), Cv(W), W.asyncDep)) {
        if ((T && T.registerDep(W, ve), !g.el)) {
          const G = (W.subTree = le(Nn))
          R(null, G, b, E)
        }
      } else ve(W, g, b, E, T, F, K)
    },
    Z = (g, b, E) => {
      const A = (b.component = g.component)
      if (L0(g, b, E))
        if (A.asyncDep && !A.asyncResolved) {
          J(A, b, E)
          return
        } else (A.next = b), O0(A.update), (A.effect.dirty = !0), A.update()
      else (b.el = g.el), (A.vnode = b)
    },
    ve = (g, b, E, A, T, F, K) => {
      const W = () => {
          if (g.isMounted) {
            let { next: ee, bu: ie, u: ae, parent: de, vnode: me } = g
            {
              const on = mu(g)
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
              ie && ts(ie),
              (je = ee.props && ee.props.onVnodeBeforeUpdate) &&
                Wt(je, de, ee, me),
              Cn(g, !0)
            const Ve = ra(g),
              $t = g.subTree
            ;(g.subTree = Ve),
              _($t, Ve, m($t.el), I($t), g, T, F),
              (ee.el = Ve.el),
              Oe === null && j0(g, Ve.el),
              ae && St(ae, T),
              (je = ee.props && ee.props.onVnodeUpdated) &&
                St(() => Wt(je, de, ee, me), T)
          } else {
            let ee
            const { el: ie, props: ae } = b,
              { bm: de, m: me, parent: Oe } = g,
              je = ns(b)
            if (
              (Cn(g, !1),
              de && ts(de),
              !je && (ee = ae && ae.onVnodeBeforeMount) && Wt(ee, Oe, b),
              Cn(g, !0),
              ie && Ae)
            ) {
              const Ve = () => {
                ;(g.subTree = ra(g)), Ae(ie, g.subTree, g, T, null)
              }
              je
                ? b.type.__asyncLoader().then(() => !g.isUnmounted && Ve())
                : Ve()
            } else {
              const Ve = (g.subTree = ra(g))
              _(null, Ve, E, A, g, T, F), (b.el = Ve.el)
            }
            if ((me && St(me, T), !je && (ee = ae && ae.onVnodeMounted))) {
              const Ve = b
              St(() => Wt(ee, Oe, Ve), T)
            }
            ;(b.shapeFlag & 256 ||
              (Oe && ns(Oe.vnode) && Oe.vnode.shapeFlag & 256)) &&
              g.a &&
              St(g.a, T),
              (g.isMounted = !0),
              (b = E = A = null)
          }
        },
        G = (g.effect = new Ha(W, Tt, () => Ya(L), g.scope)),
        L = (g.update = () => {
          G.dirty && G.run()
        })
      ;(L.id = g.uid), Cn(g, !0), L()
    },
    J = (g, b, E) => {
      b.component = g
      const A = g.vnode.props
      ;(g.vnode = b),
        (g.next = null),
        fv(g, b.props, A, E),
        vv(g, b.children, E),
        Ln(),
        Ro(g),
        jn()
    },
    $e = (g, b, E, A, T, F, K, W, G = !1) => {
      const L = g && g.children,
        ee = g ? g.shapeFlag : 0,
        ie = b.children,
        { patchFlag: ae, shapeFlag: de } = b
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
    Be = (g, b, E, A, T, F, K, W, G) => {
      ;(g = g || er), (b = b || er)
      const L = g.length,
        ee = b.length,
        ie = Math.min(L, ee)
      let ae
      for (ae = 0; ae < ie; ae++) {
        const de = (b[ae] = G ? pn(b[ae]) : Ut(b[ae]))
        _(g[ae], de, E, null, T, F, K, W, G)
      }
      L > ee ? Ue(g, T, F, !0, !1, ie) : he(b, E, A, T, F, K, W, G, ie)
    },
    kt = (g, b, E, A, T, F, K, W, G) => {
      let L = 0
      const ee = b.length
      let ie = g.length - 1,
        ae = ee - 1
      for (; L <= ie && L <= ae; ) {
        const de = g[L],
          me = (b[L] = G ? pn(b[L]) : Ut(b[L]))
        if (yr(de, me)) _(de, me, E, null, T, F, K, W, G)
        else break
        L++
      }
      for (; L <= ie && L <= ae; ) {
        const de = g[ie],
          me = (b[ae] = G ? pn(b[ae]) : Ut(b[ae]))
        if (yr(de, me)) _(de, me, E, null, T, F, K, W, G)
        else break
        ie--, ae--
      }
      if (L > ie) {
        if (L <= ae) {
          const de = ae + 1,
            me = de < ee ? b[de].el : A
          for (; L <= ae; )
            _(null, (b[L] = G ? pn(b[L]) : Ut(b[L])), E, me, T, F, K, W, G), L++
        }
      } else if (L > ae) for (; L <= ie; ) nt(g[L], T, F, !0), L++
      else {
        const de = L,
          me = L,
          Oe = new Map()
        for (L = me; L <= ae; L++) {
          const xt = (b[L] = G ? pn(b[L]) : Ut(b[L]))
          xt.key != null && Oe.set(xt.key, L)
        }
        let je,
          Ve = 0
        const $t = ae - me + 1
        let on = !1,
          Fr = 0
        const un = new Array($t)
        for (L = 0; L < $t; L++) un[L] = 0
        for (L = de; L <= ie; L++) {
          const xt = g[L]
          if (Ve >= $t) {
            nt(xt, T, F, !0)
            continue
          }
          let It
          if (xt.key != null) It = Oe.get(xt.key)
          else
            for (je = me; je <= ae; je++)
              if (un[je - me] === 0 && yr(xt, b[je])) {
                It = je
                break
              }
          It === void 0
            ? nt(xt, T, F, !0)
            : ((un[It - me] = L + 1),
              It >= Fr ? (Fr = It) : (on = !0),
              _(xt, b[It], E, null, T, F, K, W, G),
              Ve++)
        }
        const vr = on ? mv(un) : er
        for (je = vr.length - 1, L = $t - 1; L >= 0; L--) {
          const xt = me + L,
            It = b[xt],
            gr = xt + 1 < ee ? b[xt + 1].el : A
          un[L] === 0
            ? _(null, It, E, gr, T, F, K, W, G)
            : on && (je < 0 || L !== vr[je] ? wt(It, E, gr, 2) : je--)
        }
      }
    },
    wt = (g, b, E, A, T = null) => {
      const { el: F, type: K, transition: W, children: G, shapeFlag: L } = g
      if (L & 6) {
        wt(g.component.subTree, b, E, A)
        return
      }
      if (L & 128) {
        g.suspense.move(b, E, A)
        return
      }
      if (L & 64) {
        K.move(g, b, E, V)
        return
      }
      if (K === et) {
        r(F, b, E)
        for (let ie = 0; ie < G.length; ie++) wt(G[ie], b, E, A)
        r(g.anchor, b, E)
        return
      }
      if (K === rs) {
        q(g, b, E)
        return
      }
      if (A !== 2 && L & 1 && W)
        if (A === 0) W.beforeEnter(F), r(F, b, E), St(() => W.enter(F), T)
        else {
          const { leave: ie, delayLeave: ae, afterLeave: de } = W,
            me = () => r(F, b, E),
            Oe = () => {
              ie(F, () => {
                me(), de && de()
              })
            }
          ae ? ae(F, me, Oe) : Oe()
        }
      else r(F, b, E)
    },
    nt = (g, b, E, A = !1, T = !1) => {
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
        b.ctx.deactivate(g)
        return
      }
      const de = ee & 1 && ae,
        me = !ns(g)
      let Oe
      if ((me && (Oe = K && K.onVnodeBeforeUnmount) && Wt(Oe, b, g), ee & 6))
        ln(g.component, E, A)
      else {
        if (ee & 128) {
          g.suspense.unmount(E, A)
          return
        }
        de && Pn(g, null, b, "beforeUnmount"),
          ee & 64
            ? g.type.remove(g, b, E, T, V, A)
            : L && (F !== et || (ie > 0 && ie & 64))
              ? Ue(L, b, E, !1, !0)
              : ((F === et && ie & 384) || (!T && ee & 16)) && Ue(G, b, E),
          A && qt(g)
      }
      ;((me && (Oe = K && K.onVnodeUnmounted)) || de) &&
        St(() => {
          Oe && Wt(Oe, b, g), de && Pn(g, null, b, "unmounted")
        }, E)
    },
    qt = (g) => {
      const { type: b, el: E, anchor: A, transition: T } = g
      if (b === et) {
        rt(E, A)
        return
      }
      if (b === rs) {
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
    rt = (g, b) => {
      let E
      for (; g !== b; ) (E = k(g)), s(g), (g = E)
      s(b)
    },
    ln = (g, b, E) => {
      const { bum: A, scope: T, update: F, subTree: K, um: W } = g
      A && ts(A),
        T.stop(),
        F && ((F.active = !1), nt(K, g, b, E)),
        W && St(W, b),
        St(() => {
          g.isUnmounted = !0
        }, b),
        b &&
          b.pendingBranch &&
          !b.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === b.pendingId &&
          (b.deps--, b.deps === 0 && b.resolve())
    },
    Ue = (g, b, E, A = !1, T = !1, F = 0) => {
      for (let K = F; K < g.length; K++) nt(g[K], b, E, A, T)
    },
    I = (g) =>
      g.shapeFlag & 6
        ? I(g.component.subTree)
        : g.shapeFlag & 128
          ? g.suspense.next()
          : k(g.anchor || g.el),
    Q = (g, b, E) => {
      g == null
        ? b._vnode && nt(b._vnode, null, null, !0)
        : _(b._vnode || null, g, b, null, null, null, E),
        Ro(),
        eu(),
        (b._vnode = g)
    },
    V = {
      p: _,
      um: nt,
      m: wt,
      r: qt,
      mt: Yt,
      mc: he,
      pc: $e,
      pbc: We,
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
function bu(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (ge(r) && ge(s))
    for (let a = 0; a < r.length; a++) {
      const o = r[a]
      let u = s[a]
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = s[a] = pn(s[a])), (u.el = o.el)),
        n || bu(o, u)),
        u.type === xs && (u.el = o.el)
    }
}
function mv(e) {
  const t = e.slice(),
    n = [0]
  let r, s, a, o, u
  const f = e.length
  for (r = 0; r < f; r++) {
    const d = e[r]
    if (d !== 0) {
      if (((s = n[n.length - 1]), e[s] < d)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (a = 0, o = n.length - 1; a < o; )
        (u = (a + o) >> 1), e[n[u]] < d ? (a = u + 1) : (o = u)
      d < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r))
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; ) (n[a] = o), (o = t[o])
  return n
}
function mu(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : mu(t)
}
const yv = (e) => e.__isTeleport,
  et = Symbol.for("v-fgt"),
  xs = Symbol.for("v-txt"),
  Nn = Symbol.for("v-cmt"),
  rs = Symbol.for("v-stc"),
  kr = []
let Dt = null
function pe(e = !1) {
  kr.push((Dt = e ? null : []))
}
function wv() {
  kr.pop(), (Dt = kr[kr.length - 1] || null)
}
let Mr = 1
function Wo(e) {
  Mr += e
}
function yu(e) {
  return (
    (e.dynamicChildren = Mr > 0 ? Dt || er : null),
    wv(),
    Mr > 0 && Dt && Dt.push(e),
    e
  )
}
function ze(e, t, n, r, s, a) {
  return yu(w(e, t, n, r, s, a, !0))
}
function Ke(e, t, n, r, s) {
  return yu(le(e, t, n, r, s, !0))
}
function Pa(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function yr(e, t) {
  return e.type === t.type && e.key === t.key
}
const _s = "__vInternal",
  wu = ({ key: e }) => e ?? null,
  ss = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? tt(e) || bt(e) || be(e)
        ? { i: Nt, r: e, k: t, f: !!n }
        : e
      : null
  )
function w(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  a = e === et ? 0 : 1,
  o = !1,
  u = !1,
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wu(t),
    ref: t && ss(t),
    scopeId: ys,
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
      !o &&
      Dt &&
      (f.patchFlag > 0 || a & 6) &&
      f.patchFlag !== 32 &&
      Dt.push(f),
    f
  )
}
const le = xv
function xv(e, t = null, n = null, r = 0, s = null, a = !1) {
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
      qe(f) && (Ui(f) && !ge(f) && (f = vt({}, f)), (t.style = Da(f)))
  }
  const o = tt(e) ? 1 : q0(e) ? 128 : yv(e) ? 64 : qe(e) ? 4 : be(e) ? 2 : 0
  return w(e, t, n, r, s, o, a, !0)
}
function _v(e) {
  return e ? (Ui(e) || _s in e ? vt({}, e) : e) : null
}
function Fn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: a, children: o } = e,
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
          ? ge(s)
            ? s.concat(ss(t))
            : [s, ss(t)]
          : ss(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
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
function xe(e = " ", t = 0) {
  return le(xs, null, e, t)
}
function kv(e, t) {
  const n = le(rs, null, e)
  return (n.staticCount = t), n
}
function gt(e = "", t = !1) {
  return t ? (pe(), Ke(Nn, null, e)) : le(Nn, null, e)
}
function Ut(e) {
  return e == null || typeof e == "boolean"
    ? le(Nn)
    : ge(e)
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
  else if (ge(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), tl(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(_s in t)
        ? (t._ctx = Nt)
        : s === 3 &&
          Nt &&
          (Nt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    be(t)
      ? ((t = { default: t, _ctx: Nt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [xe(t)])) : (n = 8))
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
      else if (ds(s)) {
        const a = t[s],
          o = r[s]
        o &&
          a !== o &&
          !(ge(a) && a.includes(o)) &&
          (t[s] = a ? [].concat(a, o) : o)
      } else s !== "" && (t[s] = r[s])
  }
  return t
}
function Wt(e, t, n, r = null) {
  Ht(e, t, 7, [n, r])
}
const Ev = fu()
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
      scope: new r0(!0),
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
      propsOptions: hu(r, s),
      emitsOptions: nu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: He,
      inheritAttrs: r.inheritAttrs,
      ctx: He,
      data: He,
      props: He,
      attrs: He,
      slots: He,
      refs: He,
      setupState: He,
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
    (a.emit = T0.bind(null, a)),
    e.ce && e.ce(a),
    a
  )
}
let dt = null,
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
          s.length > 1 ? s.forEach((o) => o(a)) : s[0](a)
        }
      )
    }
  ;(nl = t("__VUE_INSTANCE_SETTERS__", (n) => (dt = n))),
    (Ca = t("__VUE_SSR_SETTERS__", (n) => (ks = n)))
}
const ar = (e) => {
    nl(e), e.scope.on()
  },
  Rn = () => {
    dt && dt.scope.off(), nl(null)
  }
function xu(e) {
  return e.vnode.shapeFlag & 4
}
let ks = !1
function Cv(e, t = !1) {
  t && Ca(t)
  const { props: n, children: r } = e.vnode,
    s = xu(e)
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
    const a = xn(r, e, 0, [e.props, s])
    if ((jn(), Rn(), Si(a))) {
      if ((a.then(Rn, Rn), t))
        return a
          .then((o) => {
            Uo(e, o, t)
          })
          .catch((o) => {
            bs(o, e, 0)
          })
      e.asyncDep = a
    } else Uo(e, a, t)
  } else _u(e, t)
}
function Uo(e, t, n) {
  be(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : qe(t) && (e.setupState = Xi(t)),
    _u(e, n)
}
let Vo
function _u(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Vo && !r.render) {
      const s = r.template || Qa(e).template
      if (s) {
        const { isCustomElement: a, compilerOptions: o } = e.appContext.config,
          { delimiters: u, compilerOptions: f } = r,
          d = vt(vt({ isCustomElement: a, delimiters: u }, o), f)
        r.render = Vo(s, d)
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
function $s(e) {
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
const oe = (e, t) => E0(e, t, ks)
function ot(e, t, n) {
  const r = arguments.length
  return r === 2
    ? qe(t) && !ge(t)
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
  Nv = () => ht(Tv),
  Fv = "3.4.0",
  Lv = "http://www.w3.org/2000/svg",
  jv = "http://www.w3.org/1998/Math/MathML",
  bn = typeof document < "u" ? document : null,
  Go = bn && bn.createElement("template"),
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
      const o = n ? n.previousSibling : t.lastChild
      if (s && (s === a || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === a || !(s = s.nextSibling));

        );
      else {
        Go.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const u = Go.content
        if (r === "svg" || r === "mathml") {
          const f = u.firstChild
          for (; f.firstChild; ) u.appendChild(f.firstChild)
          u.removeChild(f)
        }
        t.insertBefore(u, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
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
        const o = r[qv]
        o && (n += ";" + o), (r.cssText = n)
      }
    } else t && e.removeAttribute("style")
    zv in e && (r.display = a)
  }
}
const Ko = /\s*!important$/
function Ma(e, t, n) {
  if (ge(n)) n.forEach((r) => Ma(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = Uv(e, t)
    Ko.test(n)
      ? e.setProperty(fr(r), n.replace(Ko, ""), "important")
      : (e[r] = n)
  }
}
const Yo = ["Webkit", "Moz", "ms"],
  la = {}
function Uv(e, t) {
  const n = la[t]
  if (n) return n
  let r = Kt(t)
  if (r !== "filter" && r in e) return (la[t] = r)
  r = gs(r)
  for (let s = 0; s < Yo.length; s++) {
    const a = Yo[s] + r
    if (a in e) return (la[t] = a)
  }
  return t
}
const Xo = "http://www.w3.org/1999/xlink"
function Vv(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Xo, t.slice(6, t.length))
      : e.setAttributeNS(Xo, t, n)
  else {
    const a = n0(t)
    n == null || (a && !Ai(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function Gv(e, t, n, r, s, a, o) {
  if (t === "innerHTML" || t === "textContent") {
    r && o(r, s, a), (e[t] = n ?? "")
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
const Zo = Symbol("_vei")
function Yv(e, t, n, r, s = null) {
  const a = e[Zo] || (e[Zo] = {}),
    o = a[t]
  if (r && o) o.value = r
  else {
    const [u, f] = Xv(t)
    if (r) {
      const d = (a[t] = Qv(r, s))
      Zn(e, u, d, f)
    } else o && (Kv(e, u, o, f), (a[t] = void 0))
  }
}
const Jo = /(?:Once|Passive|Capture)$/
function Xv(e) {
  let t
  if (Jo.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Jo)); )
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
  if (ge(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const Qo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  tg = (e, t, n, r, s, a, o, u, f) => {
    const d = s === "svg"
    t === "class"
      ? Hv(e, r, d)
      : t === "style"
        ? Wv(e, n, r)
        : ds(t)
          ? La(t) || Yv(e, t, n, r, o)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : ng(e, t, r, d)
              )
            ? Gv(e, t, r, a, o, u, f)
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
      (t in e && Qo(t) && be(n))
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
  return Qo(t) && tt(n) ? !1 : t in e
}
const ei = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return ge(t) ? (n) => ts(t, n) : t
}
function rg(e) {
  e.target.composing = !0
}
function ti(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const ia = Symbol("_assign"),
  sg = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[ia] = ei(s)
      const a = r || (s.props && s.props.type === "number")
      Zn(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return
        let u = e.value
        n && (u = u.trim()), a && (u = va(u)), e[ia](u)
      }),
        n &&
          Zn(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (Zn(e, "compositionstart", rg),
          Zn(e, "compositionend", ti),
          Zn(e, "change", ti))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      a,
    ) {
      if (((e[ia] = ei(a)), e.composing)) return
      const o = s || e.type === "number" ? va(e.value) : e.value,
        u = t ?? ""
      o !== u &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === u))) ||
          (e.value = u))
    },
  },
  ag = vt({ patchProp: tg }, Bv)
let ni
function lg() {
  return ni || (ni = gv(ag))
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
      const o = n(s, !1, ig(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        o
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
const Tr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  cg = {}
function fg(e, t) {
  const n = D0("router-view")
  return pe(), Ke(n)
}
const dg = Tr(cg, [["render", fg]])
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
  let o = $u(r, n),
    u = Object.assign(s, { props: o })
  if (e || (t & 2 && o.static)) return ua(u)
  if (t & 1) {
    let f = (a = o.unmount) == null || a ? 0 : 1
    return At(f, {
      0() {
        return null
      },
      1() {
        return ua({
          ...s,
          props: { ...o, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return ua(u)
}
function ua({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var a, o
  let { as: u, ...f } = Eu(e, ["unmount", "static"]),
    d = (a = n.default) == null ? void 0 : a.call(n, r),
    h = {}
  if (r) {
    let m = !1,
      k = []
    for (let [C, j] of Object.entries(r))
      typeof j == "boolean" && (m = !0), j === !0 && k.push(C)
    m && (h["data-headlessui-state"] = k.join(" "))
  }
  if (u === "template") {
    if (
      ((d = ku(d ?? [])),
      Object.keys(f).length > 0 || Object.keys(t).length > 0)
    ) {
      let [m, ...k] = d ?? []
      if (!vg(m) || k.length > 0)
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
      let C = $u((o = m.props) != null ? o : {}, f),
        j = Fn(m, C)
      for (let _ in C)
        _.startsWith("on") && (j.props || (j.props = {}), (j.props[_] = C[_]))
      return j
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d
  }
  return ot(u, Object.assign({}, f, h), { default: () => d })
}
function ku(e) {
  return e.flatMap((t) => (t.type === et ? ku(t.children) : [t]))
}
function $u(...e) {
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
        let o = n[r]
        for (let u of o) {
          if (s instanceof Event && s.defaultPrevented) return
          u(s, ...a)
        }
      },
    })
  return t
}
function Eu(e, t = []) {
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
let Su = Symbol("Context")
var Or = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Or || {})
function bg() {
  return ht(Su, null)
}
function mg(e) {
  Gt(Su, e)
}
function ri(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Pu(e, t) {
  let n = _e(ri(e.value.type, e.value.as))
  return (
    mt(() => {
      n.value = ri(e.value.type, e.value.as)
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
  wg = (e, t, n) =>
    t in e
      ? yg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  si = (e, t, n) => (wg(e, typeof t != "symbol" ? t + "" : t, n), n)
class xg {
  constructor() {
    si(this, "current", this.detect()), si(this, "currentId", 0)
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
let Es = new xg()
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
function Cu(e, t = 0) {
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
    let o = s.compareDocumentPosition(a)
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
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
  let o =
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
    (r = r ?? o.activeElement)
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
    m = 0,
    k = u.length,
    C
  do {
    if (m >= k || m + k <= 0) return 0
    let j = d + m
    if (t & 16) j = (j + k) % k
    else {
      if (j < 0) return 3
      if (j >= k) return 1
    }
    ;(C = u[j]), C == null || C.focus(h), (m += f)
  } while (C !== o.activeElement)
  return t & 6 && Eg(C) && C.select(), 2
}
function Jr(e, t, n) {
  Es.isServer ||
    rn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function Mu(e, t, n) {
  Es.isServer ||
    rn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Sg(e, t, n = oe(() => !0)) {
  function r(a, o) {
    if (!n.value || a.defaultPrevented) return
    let u = o(a)
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
    return !Cu(u, rl.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u)
  }
  let s = _e(null)
  Jr(
    "pointerdown",
    (a) => {
      var o, u
      n.value &&
        (s.value =
          ((u = (o = a.composedPath) == null ? void 0 : o.call(a)) == null
            ? void 0
            : u[0]) || a.target)
    },
    !0,
  ),
    Jr(
      "mousedown",
      (a) => {
        var o, u
        n.value &&
          (s.value =
            ((u = (o = a.composedPath) == null ? void 0 : o.call(a)) == null
              ? void 0
              : u[0]) || a.target)
      },
      !0,
    ),
    Jr(
      "click",
      (a) => {
        s.value && (r(a, () => s.value), (s.value = null))
      },
      !0,
    ),
    Jr(
      "touchend",
      (a) => r(a, () => (a.target instanceof HTMLElement ? a.target : null)),
      !0,
    ),
    Mu(
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
function Au() {
  let e = _e(0)
  return (
    Mu("keydown", (t) => {
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
let ai = Symbol("PortalParentContext")
function Mg() {
  let e = ht(ai, null),
    t = _e([])
  function n(a) {
    return t.value.push(a), e && e.register(a), () => r(a)
  }
  function r(a) {
    let o = t.value.indexOf(a)
    o !== -1 && t.value.splice(o, 1), e && e.unregister(a)
  }
  let s = { register: n, unregister: r, portals: t }
  return [
    t,
    Ot({
      name: "PortalWrapper",
      setup(a, { slots: o }) {
        return (
          Gt(ai, s),
          () => {
            var u
            return (u = o.default) == null ? void 0 : u.call(o)
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
    var o
    let u = []
    for (let f of e)
      f !== null &&
        (f instanceof HTMLElement
          ? u.push(f)
          : "value" in f && f.value instanceof HTMLElement && u.push(f.value))
    if (t != null && t.value) for (let f of t.value) u.push(f)
    for (let f of (o =
      s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null
      ? o
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
    contains(o) {
      return a().some((u) => u.contains(o))
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
let Ou = Symbol("PopoverContext")
function sl(e) {
  let t = ht(Ou, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${Oa.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, sl), n)
  }
  return t
}
let Ig = Symbol("PopoverGroupContext")
function Iu() {
  return ht(Ig, null)
}
let Ru = Symbol("PopoverPanelContext")
function Rg() {
  return ht(Ru, null)
}
let Oa = Ot({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let a = _e(null)
      r({ el: a, $el: a })
      let o = _e(1),
        u = _e(null),
        f = _e(null),
        d = _e(null),
        h = _e(null),
        m = oe(() => dr(a)),
        k = oe(() => {
          var B, D
          if (!re(u) || !re(h)) return !1
          for (let Je of document.querySelectorAll("body > *"))
            if (
              Number(Je == null ? void 0 : Je.contains(re(u))) ^
              Number(Je == null ? void 0 : Je.contains(re(h)))
            )
              return !0
          let fe = Ss(),
            he = fe.indexOf(re(u)),
            Ze = (he + fe.length - 1) % fe.length,
            We = (he + 1) % fe.length,
            yt = fe[Ze],
            it = fe[We]
          return (
            !((B = re(h)) != null && B.contains(yt)) &&
            !((D = re(h)) != null && D.contains(it))
          )
        }),
        C = {
          popoverState: o,
          buttonId: _e(null),
          panelId: _e(null),
          panel: h,
          button: u,
          isPortalled: k,
          beforePanelSentinel: f,
          afterPanelSentinel: d,
          togglePopover() {
            o.value = At(o.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            o.value !== 1 && (o.value = 1)
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
      Gt(Ou, C), mg(oe(() => At(o.value, { 0: Or.Open, 1: Or.Closed })))
      let j = {
          buttonId: C.buttonId,
          panelId: C.panelId,
          close() {
            C.closePopover()
          },
        },
        _ = Iu(),
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
          : ((B = m.value) == null ? void 0 : B.activeElement) &&
              (((D = re(u)) == null
                ? void 0
                : D.contains(m.value.activeElement)) ||
                ((fe = re(h)) == null
                  ? void 0
                  : fe.contains(m.value.activeElement)))
      }
      return (
        rn(() => (P == null ? void 0 : P(j))),
        Cg(
          (s = m.value) == null ? void 0 : s.defaultView,
          "focus",
          (B) => {
            var D, fe
            B.target !== window &&
              B.target instanceof HTMLElement &&
              o.value === 0 &&
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
              Cu(D, rl.Loose) ||
                (B.preventDefault(), (fe = re(u)) == null || fe.focus())
          },
          oe(() => o.value === 0),
        ),
        () => {
          let B = { open: o.value === 0, close: C.close }
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
  li = Ot({
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
        mt(() => {
          s.buttonId.value = e.id
        }),
        kn(() => {
          s.buttonId.value = null
        })
      let o = Iu(),
        u = o == null ? void 0 : o.closeOthers,
        f = Rg(),
        d = oe(() => (f === null ? !1 : f.value === s.panelId.value)),
        h = _e(null),
        m = `headlessui-focus-sentinel-${Tn()}`
      d.value ||
        rn(() => {
          s.button.value = h.value
        })
      let k = Pu(
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
      let R = Au()
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
              id: m,
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
  oi = Ot({
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
        o = oe(() => dr(a.panel)),
        u = `headlessui-focus-sentinel-before-${Tn()}`,
        f = `headlessui-focus-sentinel-after-${Tn()}`
      r({ el: a.panel, $el: a.panel }),
        mt(() => {
          a.panelId.value = e.id
        }),
        kn(() => {
          a.panelId.value = null
        }),
        Gt(Ru, a.panelId),
        rn(() => {
          var P, R
          if (!s || a.popoverState.value !== 0 || !a.panel) return
          let U = (P = o.value) == null ? void 0 : P.activeElement
          ;((R = re(a.panel)) != null && R.contains(U)) ||
            Mt(re(a.panel), Qe.First)
        })
      let d = bg(),
        h = oe(() =>
          d !== null
            ? (d.value & Or.Open) === Or.Open
            : a.popoverState.value === 0,
        )
      function m(P) {
        var R, U
        switch (P.key) {
          case lt.Escape:
            if (
              a.popoverState.value !== 0 ||
              !re(a.panel) ||
              (o.value &&
                !(
                  (R = re(a.panel)) != null && R.contains(o.value.activeElement)
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
      let C = Au()
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
                  let Ze = fe.indexOf(he)
                  Ze !== -1 && fe.splice(Ze, 1)
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
            onKeydown: m,
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
                  var o
                  if (s-- <= 0) {
                    r && cancelAnimationFrame(r)
                    return
                  }
                  if ((o = e.onFocus) != null && o.call(e)) {
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
let Tu = Symbol("TabsContext")
function Nr(e) {
  let t = ht(Tu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Nr), n)
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
        o = _e([]),
        u = _e([]),
        f = oe(() => e.selectedIndex !== null),
        d = oe(() => (f.value ? e.selectedIndex : a.value))
      function h(_) {
        var P
        let R = Jn(m.tabs.value, re),
          U = Jn(m.panels.value, re),
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
          B !== -1 && (a.value = B), (m.tabs.value = R), (m.panels.value = U)
        } else {
          let Y = R.slice(0, _),
            B = [...R.slice(_), ...Y].find((fe) => q.includes(fe))
          if (!B) return
          let D = (P = R.indexOf(B)) != null ? P : m.selectedIndex.value
          D === -1 && (D = m.selectedIndex.value),
            (a.value = D),
            (m.tabs.value = R),
            (m.panels.value = U)
        }
      }
      let m = {
        selectedIndex: oe(() => {
          var _, P
          return (P = (_ = a.value) != null ? _ : e.defaultIndex) != null
            ? P
            : null
        }),
        orientation: oe(() => (e.vertical ? "vertical" : "horizontal")),
        activation: oe(() => (e.manual ? "manual" : "auto")),
        tabs: o,
        panels: u,
        setSelectedIndex(_) {
          d.value !== _ && r("change", _), f.value || h(_)
        },
        registerTab(_) {
          var P
          if (o.value.includes(_)) return
          let R = o.value[a.value]
          o.value.push(_), (o.value = Jn(o.value, re))
          let U = (P = o.value.indexOf(R)) != null ? P : a.value
          U !== -1 && (a.value = U)
        },
        unregisterTab(_) {
          let P = o.value.indexOf(_)
          P !== -1 && o.value.splice(P, 1)
        },
        registerPanel(_) {
          u.value.includes(_) || (u.value.push(_), (u.value = Jn(u.value, re)))
        },
        unregisterPanel(_) {
          let P = u.value.indexOf(_)
          P !== -1 && u.value.splice(P, 1)
        },
      }
      Gt(Tu, m)
      let k = _e({ tabs: [], panels: [] }),
        C = _e(!1)
      mt(() => {
        C.value = !0
      }),
        Gt(
          al,
          oe(() => (C.value ? null : k.value)),
        )
      let j = oe(() => e.selectedIndex)
      return (
        mt(() => {
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
          if (!f.value || d.value == null || m.tabs.value.length <= 0) return
          let _ = Jn(m.tabs.value, re)
          _.some((P, R) => re(m.tabs.value[R]) !== re(P)) &&
            m.setSelectedIndex(
              _.findIndex((P) => re(P) === re(m.tabs.value[d.value])),
            )
        }),
        () => {
          let _ = { selectedIndex: a.value }
          return ot(et, [
            o.value.length <= 0 &&
              ot(Tg, {
                onFocus: () => {
                  for (let P of o.value) {
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
                ...Eu(e, [
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
      let r = Nr("TabList")
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
      let s = Nr("Tab"),
        a = _e(null)
      r({ el: a, $el: a }),
        mt(() => s.registerTab(a)),
        kn(() => s.unregisterTab(a))
      let o = ht(al),
        u = oe(() => {
          if (o.value) {
            let P = o.value.tabs.indexOf(e.id)
            return P === -1 ? o.value.tabs.push(e.id) - 1 : P
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
      function m(P) {
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
      let _ = Pu(
        oe(() => ({ as: e.as, type: t.type })),
        a,
      )
      return () => {
        var P
        let R = { selected: d.value },
          { id: U, ...q } = e,
          Y = {
            ref: a,
            onKeydown: m,
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
      let r = Nr("TabPanels")
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
      let s = Nr("TabPanel"),
        a = _e(null)
      r({ el: a, $el: a }),
        mt(() => s.registerPanel(a)),
        kn(() => s.unregisterPanel(a))
      let o = ht(al),
        u = oe(() => {
          if (o.value) {
            let h = o.value.panels.indexOf(e.id)
            return h === -1 ? o.value.panels.push(e.id) - 1 : h
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
        let m = { selected: d.value },
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
              slot: m,
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
 */ var Qr = {
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
  Xe =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: r = 2,
        absoluteStrokeWidth: s,
        color: a,
        class: o,
        ...u
      },
      { attrs: f, slots: d },
    ) =>
      ot(
        "svg",
        {
          ...Qr,
          width: n || Qr.width,
          height: n || Qr.height,
          stroke: a || Qr.stroke,
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
 */ const ii = Xe("CheckIcon", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zg = Xe("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = Xe("CloudDrizzleIcon", [
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
 */ const Wg = Xe("CloudSunIcon", [
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
 */ const Nu = Xe("EyeOffIcon", [
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
 */ const Ug = Xe("EyeIcon", [
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
 */ const Vg = Xe("FrameIcon", [
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
 */ const Gg = Xe("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kg = Xe("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yg = Xe("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = Xe("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zg = Xe("PencilRulerIcon", [
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
 */ const Jg = Xe("RabbitIcon", [
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
 */ const Qg = Xe("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const as = Xe("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = Xe("ShowerHeadIcon", [
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
 */ const tp = Xe("SunIcon", [
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
 */ const ca = Xe("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = Xe("TurtleIcon", [
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
 */ const Ia = Xe("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ll = (e) => (Xa("data-v-00c1949b"), (e = e()), Za(), e),
  rp = { class: "flex justify-center p-5 gap-5 content-center" },
  sp = ll(() => w("div", { class: "w-1/12" }, null, -1)),
  ap = { class: "flex justify-between gap-2 w-full content-center" },
  lp = { class: "flex gap-1 p-2" },
  op = { class: "flex gap-5 p-2 relative" },
  ip = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  up = ll(() => w("b", null, "Art and Animation", -1)),
  cp = [up],
  fp = { class: "flex gap-5 content-center" },
  dp = { class: "lg:hidden flex" },
  hp = { class: "flex gap-1 p-2" },
  vp = { class: "flex flex-col gap-2 p-2" },
  gp = { class: "flex justify-between" },
  pp = ll(() => w("div", { class: "w-1/12" }, null, -1)),
  bp = { class: "flex justify-between items-center" },
  mp = { class: "flex gap-1 p-2" },
  yp = kv(
    '<li class="py-2 px-3 rounded" data-v-00c1949b>Contact</li><li class="py-2 px-3 rounded" data-v-00c1949b>Web Portfolio</li><li class="py-2 px-3 rounded" data-v-00c1949b>Web Services</li><li class="py-2 px-3 rounded opacity-75" data-v-00c1949b>Creative Projects</li><ul class="ml-5" data-v-00c1949b><li class="py-2 px-3 rounded" data-v-00c1949b>Art and Animation</li><li class="py-2 px-3 rounded" data-v-00c1949b>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-00c1949b>Custom Software</li><li class="py-2 px-3 rounded" data-v-00c1949b>Cooking and Recipes</li></ul><li class="py-2 px-3 rounded" data-v-00c1949b>About Me</li>',
    6,
  ),
  wp = [yp],
  xp = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = _e(5),
        r = t,
        s = (u) => {
          ;(n.value = u.target.value), r("update:brightness", n.value)
        }
      mt(() => {
        let u = window.localStorage
        u.getItem("brightness") && (n.value = Number(u.getItem("brightness")))
      })
      const a = () => {
          window.location.href = "/"
        },
        o = () => {
          let u = document.getElementById("mobileMenu")
          u.classList.contains("hidden")
            ? u.classList.remove("hidden")
            : u.classList.add("hidden")
        }
      return (u, f) => (
        pe(),
        ze(
          et,
          null,
          [
            w("div", rp, [
              sp,
              w(
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
                  w("div", ap, [
                    w("div", lp, [
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
                      w(
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
                    w("div", op, [
                      w(
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
                      w(
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
                          default: ft(() => [
                            le(
                              ue(li),
                              {
                                "aria-label": "Creative projects dropdown menu",
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
                                default: ft(() => [
                                  xe(" Creative Projects"),
                                  le(ue(zg)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            le(
                              ue(oi),
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
                                default: ft(() => [
                                  w("div", ip, [
                                    w(
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
                                    w(
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
                                    w(
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
                                    w(
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
                      w(
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
                    w("div", fp, [
                      w(
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
              w(
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
                  w("div", dp, [
                    w("div", hp, [
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
                      w(
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
                      onClick: f[0] || (f[0] = (d) => o()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  le(ue(Oa), null, {
                    default: ft(() => [
                      le(
                        ue(li),
                        {
                          "aria-label": "Toggle brightness dropdown menu",
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
                          default: ft(() => [
                            n.value == 5
                              ? (pe(),
                                Ke(ue(tp), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (pe(),
                                  Ke(ue(Wg), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (pe(),
                                    Ke(ue(qg), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (pe(),
                                      Ke(ue(Xg), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (pe(),
                                      Ke(ue(Yg), {
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
                        ue(oi),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: ft(() => [
                            w("div", vp, [
                              w("div", gp, [
                                lu(
                                  w(
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
            w(
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
                w("div", bp, [
                  w("div", mp, [
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
                    w(
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
                      onClick: f[2] || (f[2] = (d) => o()),
                      "aria-label": "Close mobile menu",
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                w(
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
                  wp,
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
  _p = Tr(xp, [["__scopeId", "data-v-00c1949b"]]),
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
      mt(() => {
        ;(t.value = t.value.sort(() => Math.random() - 0.5)),
          setInterval(() => {
            r.value ||
              ((r.value = !0), (n.value = (n.value + 1) % t.value.length))
          }, 4e3)
        const a = () => {
            r.value = !1
          },
          o = () => {
            r.value = !0
          }
        window.addEventListener("mousedown", a),
          window.addEventListener("mouseup", o),
          kn(() => {
            window.removeEventListener("mousedown", a),
              window.removeEventListener("mouseup", o)
          })
      }),
        uu(() => {
          r.value = !1
        })
      const s = oe(() => t.value[n.value])
      return (a, o) => {
        const u = z0("typewriter")
        return (
          pe(),
          ze("div", kp, [
            w(
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
                xe(" I make "),
                w("div", $p, [
                  lu((pe(), ze("span", Ep, [xe(Rt(s.value), 1)])), [
                    [u, s.value],
                  ]),
                  w(
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
                xe(" websites. "),
              ],
              2,
            ),
            w(
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
            w("div", Sp, [
              w(
                "button",
                {
                  "aria-label": "View my portfolio",
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
              w("a", Pp, [
                w(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
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
var Fu = { exports: {} }
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
      var n = function (l, i, c) {
          return (
            i === void 0 && (i = 0),
            c === void 0 && (c = 1),
            l < i ? i : l > c ? c : l
          )
        },
        r = n,
        s = function (l) {
          ;(l._clipped = !1), (l._unclipped = l.slice(0))
          for (var i = 0; i <= 3; i++)
            i < 3
              ? ((l[i] < 0 || l[i] > 255) && (l._clipped = !0),
                (l[i] = r(l[i], 0, 255)))
              : i === 3 && (l[i] = r(l[i], 0, 1))
          return l
        },
        a = {},
        o = 0,
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
      o < u.length;
      o += 1
    ) {
      var f = u[o]
      a["[object " + f + "]"] = f.toLowerCase()
    }
    var d = function (l) {
        return a[Object.prototype.toString.call(l)] || "object"
      },
      h = d,
      m = function (l, i) {
        return (
          i === void 0 && (i = null),
          l.length >= 3
            ? Array.prototype.slice.call(l)
            : h(l[0]) == "object" && i
              ? i
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
        var i = l.length - 1
        return k(l[i]) == "string" ? l[i].toLowerCase() : null
      },
      j = Math.PI,
      _ = {
        clip_rgb: s,
        limit: n,
        type: d,
        unpack: m,
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
        for (var i = [], c = arguments.length; c--; ) i[c] = arguments[c]
        var v = this
        if (
          q(i[0]) === "object" &&
          i[0].constructor &&
          i[0].constructor === this.constructor
        )
          return i[0]
        var y = R(i),
          x = !1
        if (!y) {
          ;(x = !0),
            Y.sorted ||
              ((Y.autodetect = Y.autodetect.sort(function (N, X) {
                return X.p - N.p
              })),
              (Y.sorted = !0))
          for (var p = 0, $ = Y.autodetect; p < $.length; p += 1) {
            var S = $[p]
            if (((y = S.test.apply(S, i)), y)) break
          }
        }
        if (Y.format[y]) {
          var O = Y.format[y].apply(null, x ? i : i.slice(0, -1))
          v._rgb = U(O)
        } else throw new Error("unknown format: " + i)
        v._rgb.length === 3 && v._rgb.push(1)
      }
    B.prototype.toString = function () {
      return q(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var D = B,
      fe = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(fe.Color, [null].concat(l)))()
      }
    ;(fe.Color = D), (fe.version = "2.4.2")
    var he = fe,
      Ze = _.unpack,
      We = Math.max,
      yt = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = Ze(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2]
        ;(v = v / 255), (y = y / 255), (x = x / 255)
        var p = 1 - We(v, We(y, x)),
          $ = p < 1 ? 1 / (1 - p) : 0,
          S = (1 - v - p) * $,
          O = (1 - y - p) * $,
          N = (1 - x - p) * $
        return [S, O, N, p]
      },
      it = yt,
      Je = _.unpack,
      Yt = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = Je(l, "cmyk")
        var c = l[0],
          v = l[1],
          y = l[2],
          x = l[3],
          p = l.length > 4 ? l[4] : 1
        return x === 1
          ? [0, 0, 0, p]
          : [
              c >= 1 ? 0 : 255 * (1 - c) * (1 - x),
              v >= 1 ? 0 : 255 * (1 - v) * (1 - x),
              y >= 1 ? 0 : 255 * (1 - y) * (1 - x),
              p,
            ]
      },
      Z = Yt,
      ve = he,
      J = D,
      $e = P,
      Be = _.unpack,
      kt = _.type,
      wt = it
    ;(J.prototype.cmyk = function () {
      return wt(this._rgb)
    }),
      (ve.cmyk = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          J,
          [null].concat(l, ["cmyk"]),
        ))()
      }),
      ($e.format.cmyk = Z),
      $e.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
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
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
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
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = I(l, "rgba")
        var c = l[0],
          v = l[1],
          y = l[2]
        ;(c /= 255), (v /= 255), (y /= 255)
        var x = Math.min(c, v, y),
          p = Math.max(c, v, y),
          $ = (p + x) / 2,
          S,
          O
        return (
          p === x
            ? ((S = 0), (O = Number.NaN))
            : (S = $ < 0.5 ? (p - x) / (p + x) : (p - x) / (2 - p - x)),
          c == p
            ? (O = (v - y) / (p - x))
            : v == p
              ? (O = 2 + (y - c) / (p - x))
              : y == p && (O = 4 + (c - v) / (p - x)),
          (O *= 60),
          O < 0 && (O += 360),
          l.length > 3 && l[3] !== void 0 ? [O, S, $, l[3]] : [O, S, $]
        )
      },
      V = Q,
      se = _.unpack,
      Ae = _.last,
      g = Ue,
      b = V,
      E = Math.round,
      A = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = se(l, "rgba"),
          v = Ae(l) || "rgb"
        return v.substr(0, 3) == "hsl"
          ? g(b(c), v)
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
        for (var l, i = [], c = arguments.length; c--; ) i[c] = arguments[c]
        i = F(i, "hsl")
        var v = i[0],
          y = i[1],
          x = i[2],
          p,
          $,
          S
        if (y === 0) p = $ = S = x * 255
        else {
          var O = [0, 0, 0],
            N = [0, 0, 0],
            X = x < 0.5 ? x * (1 + y) : x + y - x * y,
            H = 2 * x - X,
            ne = v / 360
          ;(O[0] = ne + 1 / 3), (O[1] = ne), (O[2] = ne - 1 / 3)
          for (var te = 0; te < 3; te++)
            O[te] < 0 && (O[te] += 1),
              O[te] > 1 && (O[te] -= 1),
              6 * O[te] < 1
                ? (N[te] = H + (X - H) * 6 * O[te])
                : 2 * O[te] < 1
                  ? (N[te] = X)
                  : 3 * O[te] < 2
                    ? (N[te] = H + (X - H) * (2 / 3 - O[te]) * 6)
                    : (N[te] = H)
          ;(l = [K(N[0] * 255), K(N[1] * 255), K(N[2] * 255)]),
            (p = l[0]),
            ($ = l[1]),
            (S = l[2])
        }
        return i.length > 3 ? [p, $, S, i[3]] : [p, $, S, 1]
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
      Ve = Math.round,
      $t = function (l) {
        l = l.toLowerCase().trim()
        var i
        if (ee.format.named)
          try {
            return ee.format.named(l)
          } catch {}
        if ((i = l.match(ie))) {
          for (var c = i.slice(1, 4), v = 0; v < 3; v++) c[v] = +c[v]
          return (c[3] = 1), c
        }
        if ((i = l.match(ae))) {
          for (var y = i.slice(1, 5), x = 0; x < 4; x++) y[x] = +y[x]
          return y
        }
        if ((i = l.match(de))) {
          for (var p = i.slice(1, 4), $ = 0; $ < 3; $++) p[$] = Ve(p[$] * 2.55)
          return (p[3] = 1), p
        }
        if ((i = l.match(me))) {
          for (var S = i.slice(1, 5), O = 0; O < 3; O++) S[O] = Ve(S[O] * 2.55)
          return (S[3] = +S[3]), S
        }
        if ((i = l.match(Oe))) {
          var N = i.slice(1, 4)
          ;(N[1] *= 0.01), (N[2] *= 0.01)
          var X = L(N)
          return (X[3] = 1), X
        }
        if ((i = l.match(je))) {
          var H = i.slice(1, 4)
          ;(H[1] *= 0.01), (H[2] *= 0.01)
          var ne = L(H)
          return (ne[3] = +i[4]), ne
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
      Fr = he,
      un = D,
      vr = P,
      xt = _.type,
      It = T,
      gr = on
    ;(un.prototype.css = function (l) {
      return It(this._rgb, l)
    }),
      (Fr.css = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          un,
          [null].concat(l, ["css"]),
        ))()
      }),
      (vr.format.css = gr),
      vr.autodetect.push({
        p: 5,
        test: function (l) {
          for (var i = [], c = arguments.length - 1; c-- > 0; )
            i[c] = arguments[c + 1]
          if (!i.length && xt(l) === "string" && gr.test(l)) return "css"
        },
      })
    var fl = D,
      Yu = he,
      Xu = P,
      Zu = _.unpack
    ;(Xu.format.gl = function () {
      for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
      var c = Zu(l, "rgba")
      return (c[0] *= 255), (c[1] *= 255), (c[2] *= 255), c
    }),
      (Yu.gl = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          fl,
          [null].concat(l, ["gl"]),
        ))()
      }),
      (fl.prototype.gl = function () {
        var l = this._rgb
        return [l[0] / 255, l[1] / 255, l[2] / 255, l[3]]
      })
    var Ju = _.unpack,
      Qu = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = Ju(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2],
          p = Math.min(v, y, x),
          $ = Math.max(v, y, x),
          S = $ - p,
          O = (S * 100) / 255,
          N = (p / (255 - S)) * 100,
          X
        return (
          S === 0
            ? (X = Number.NaN)
            : (v === $ && (X = (y - x) / S),
              y === $ && (X = 2 + (x - v) / S),
              x === $ && (X = 4 + (v - y) / S),
              (X *= 60),
              X < 0 && (X += 360)),
          [X, O, N]
        )
      },
      ec = Qu,
      tc = _.unpack,
      nc = Math.floor,
      rc = function () {
        for (var l, i, c, v, y, x, p = [], $ = arguments.length; $--; )
          p[$] = arguments[$]
        p = tc(p, "hcg")
        var S = p[0],
          O = p[1],
          N = p[2],
          X,
          H,
          ne
        N = N * 255
        var te = O * 255
        if (O === 0) X = H = ne = N
        else {
          S === 360 && (S = 0),
            S > 360 && (S -= 360),
            S < 0 && (S += 360),
            (S /= 60)
          var ye = nc(S),
            Ee = S - ye,
            Pe = N * (1 - O),
            Ie = Pe + te * (1 - Ee),
            ut = Pe + te * Ee,
            at = Pe + te
          switch (ye) {
            case 0:
              ;(l = [at, ut, Pe]), (X = l[0]), (H = l[1]), (ne = l[2])
              break
            case 1:
              ;(i = [Ie, at, Pe]), (X = i[0]), (H = i[1]), (ne = i[2])
              break
            case 2:
              ;(c = [Pe, at, ut]), (X = c[0]), (H = c[1]), (ne = c[2])
              break
            case 3:
              ;(v = [Pe, Ie, at]), (X = v[0]), (H = v[1]), (ne = v[2])
              break
            case 4:
              ;(y = [ut, Pe, at]), (X = y[0]), (H = y[1]), (ne = y[2])
              break
            case 5:
              ;(x = [at, Pe, Ie]), (X = x[0]), (H = x[1]), (ne = x[2])
              break
          }
        }
        return [X, H, ne, p.length > 3 ? p[3] : 1]
      },
      sc = rc,
      ac = _.unpack,
      lc = _.type,
      oc = he,
      dl = D,
      hl = P,
      ic = ec
    ;(dl.prototype.hcg = function () {
      return ic(this._rgb)
    }),
      (oc.hcg = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          dl,
          [null].concat(l, ["hcg"]),
        ))()
      }),
      (hl.format.hcg = sc),
      hl.autodetect.push({
        p: 1,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (((l = ac(l, "hcg")), lc(l) === "array" && l.length === 3))
            return "hcg"
        },
      })
    var uc = _.unpack,
      cc = _.last,
      Lr = Math.round,
      fc = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = uc(l, "rgba"),
          v = c[0],
          y = c[1],
          x = c[2],
          p = c[3],
          $ = cc(l) || "auto"
        p === void 0 && (p = 1),
          $ === "auto" && ($ = p < 1 ? "rgba" : "rgb"),
          (v = Lr(v)),
          (y = Lr(y)),
          (x = Lr(x))
        var S = (v << 16) | (y << 8) | x,
          O = "000000" + S.toString(16)
        O = O.substr(O.length - 6)
        var N = "0" + Lr(p * 255).toString(16)
        switch (((N = N.substr(N.length - 2)), $.toLowerCase())) {
          case "rgba":
            return "#" + O + N
          case "argb":
            return "#" + N + O
          default:
            return "#" + O
        }
      },
      vl = fc,
      dc = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      hc = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      vc = function (l) {
        if (l.match(dc)) {
          ;(l.length === 4 || l.length === 7) && (l = l.substr(1)),
            l.length === 3 &&
              ((l = l.split("")), (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]))
          var i = parseInt(l, 16),
            c = i >> 16,
            v = (i >> 8) & 255,
            y = i & 255
          return [c, v, y, 1]
        }
        if (l.match(hc)) {
          ;(l.length === 5 || l.length === 9) && (l = l.substr(1)),
            l.length === 4 &&
              ((l = l.split("")),
              (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2] + l[3] + l[3]))
          var x = parseInt(l, 16),
            p = (x >> 24) & 255,
            $ = (x >> 16) & 255,
            S = (x >> 8) & 255,
            O = Math.round(((x & 255) / 255) * 100) / 100
          return [p, $, S, O]
        }
        throw new Error("unknown hex color: " + l)
      },
      gl = vc,
      gc = he,
      pl = D,
      pc = _.type,
      bl = P,
      bc = vl
    ;(pl.prototype.hex = function (l) {
      return bc(this._rgb, l)
    }),
      (gc.hex = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          pl,
          [null].concat(l, ["hex"]),
        ))()
      }),
      (bl.format.hex = gl),
      bl.autodetect.push({
        p: 4,
        test: function (l) {
          for (var i = [], c = arguments.length - 1; c-- > 0; )
            i[c] = arguments[c + 1]
          if (
            !i.length &&
            pc(l) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(l.length) >= 0
          )
            return "hex"
        },
      })
    var mc = _.unpack,
      ml = _.TWOPI,
      yc = Math.min,
      wc = Math.sqrt,
      xc = Math.acos,
      _c = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = mc(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2]
        ;(v /= 255), (y /= 255), (x /= 255)
        var p,
          $ = yc(v, y, x),
          S = (v + y + x) / 3,
          O = S > 0 ? 1 - $ / S : 0
        return (
          O === 0
            ? (p = NaN)
            : ((p = (v - y + (v - x)) / 2),
              (p /= wc((v - y) * (v - y) + (v - x) * (y - x))),
              (p = xc(p)),
              x > y && (p = ml - p),
              (p /= ml)),
          [p * 360, O, S]
        )
      },
      kc = _c,
      $c = _.unpack,
      Cs = _.limit,
      Dn = _.TWOPI,
      Ms = _.PITHIRD,
      Hn = Math.cos,
      Ec = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = $c(l, "hsi")
        var c = l[0],
          v = l[1],
          y = l[2],
          x,
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
              (x = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
              (p = 1 - ($ + x)))
            : c < 2 / 3
              ? ((c -= 1 / 3),
                (x = (1 - v) / 3),
                (p = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
                ($ = 1 - (x + p)))
              : ((c -= 2 / 3),
                (p = (1 - v) / 3),
                ($ = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
                (x = 1 - (p + $))),
          (x = Cs(y * x * 3)),
          (p = Cs(y * p * 3)),
          ($ = Cs(y * $ * 3)),
          [x * 255, p * 255, $ * 255, l.length > 3 ? l[3] : 1]
        )
      },
      Sc = Ec,
      Pc = _.unpack,
      Cc = _.type,
      Mc = he,
      yl = D,
      wl = P,
      Ac = kc
    ;(yl.prototype.hsi = function () {
      return Ac(this._rgb)
    }),
      (Mc.hsi = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          yl,
          [null].concat(l, ["hsi"]),
        ))()
      }),
      (wl.format.hsi = Sc),
      wl.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (((l = Pc(l, "hsi")), Cc(l) === "array" && l.length === 3))
            return "hsi"
        },
      })
    var Oc = _.unpack,
      Ic = _.type,
      Rc = he,
      xl = D,
      _l = P,
      Tc = V
    ;(xl.prototype.hsl = function () {
      return Tc(this._rgb)
    }),
      (Rc.hsl = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          xl,
          [null].concat(l, ["hsl"]),
        ))()
      }),
      (_l.format.hsl = G),
      _l.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (((l = Oc(l, "hsl")), Ic(l) === "array" && l.length === 3))
            return "hsl"
        },
      })
    var Nc = _.unpack,
      Fc = Math.min,
      Lc = Math.max,
      jc = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = Nc(l, "rgb")
        var c = l[0],
          v = l[1],
          y = l[2],
          x = Fc(c, v, y),
          p = Lc(c, v, y),
          $ = p - x,
          S,
          O,
          N
        return (
          (N = p / 255),
          p === 0
            ? ((S = Number.NaN), (O = 0))
            : ((O = $ / p),
              c === p && (S = (v - y) / $),
              v === p && (S = 2 + (y - c) / $),
              y === p && (S = 4 + (c - v) / $),
              (S *= 60),
              S < 0 && (S += 360)),
          [S, O, N]
        )
      },
      Bc = jc,
      Dc = _.unpack,
      Hc = Math.floor,
      zc = function () {
        for (var l, i, c, v, y, x, p = [], $ = arguments.length; $--; )
          p[$] = arguments[$]
        p = Dc(p, "hsv")
        var S = p[0],
          O = p[1],
          N = p[2],
          X,
          H,
          ne
        if (((N *= 255), O === 0)) X = H = ne = N
        else {
          S === 360 && (S = 0),
            S > 360 && (S -= 360),
            S < 0 && (S += 360),
            (S /= 60)
          var te = Hc(S),
            ye = S - te,
            Ee = N * (1 - O),
            Pe = N * (1 - O * ye),
            Ie = N * (1 - O * (1 - ye))
          switch (te) {
            case 0:
              ;(l = [N, Ie, Ee]), (X = l[0]), (H = l[1]), (ne = l[2])
              break
            case 1:
              ;(i = [Pe, N, Ee]), (X = i[0]), (H = i[1]), (ne = i[2])
              break
            case 2:
              ;(c = [Ee, N, Ie]), (X = c[0]), (H = c[1]), (ne = c[2])
              break
            case 3:
              ;(v = [Ee, Pe, N]), (X = v[0]), (H = v[1]), (ne = v[2])
              break
            case 4:
              ;(y = [Ie, Ee, N]), (X = y[0]), (H = y[1]), (ne = y[2])
              break
            case 5:
              ;(x = [N, Ee, Pe]), (X = x[0]), (H = x[1]), (ne = x[2])
              break
          }
        }
        return [X, H, ne, p.length > 3 ? p[3] : 1]
      },
      qc = zc,
      Wc = _.unpack,
      Uc = _.type,
      Vc = he,
      kl = D,
      $l = P,
      Gc = Bc
    ;(kl.prototype.hsv = function () {
      return Gc(this._rgb)
    }),
      (Vc.hsv = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          kl,
          [null].concat(l, ["hsv"]),
        ))()
      }),
      ($l.format.hsv = qc),
      $l.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (((l = Wc(l, "hsv")), Uc(l) === "array" && l.length === 3))
            return "hsv"
        },
      })
    var jr = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      zn = jr,
      Kc = _.unpack,
      El = Math.pow,
      Yc = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = Kc(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2],
          p = Xc(v, y, x),
          $ = p[0],
          S = p[1],
          O = p[2],
          N = 116 * S - 16
        return [N < 0 ? 0 : N, 500 * ($ - S), 200 * (S - O)]
      },
      As = function (l) {
        return (l /= 255) <= 0.04045 ? l / 12.92 : El((l + 0.055) / 1.055, 2.4)
      },
      Os = function (l) {
        return l > zn.t3 ? El(l, 1 / 3) : l / zn.t2 + zn.t0
      },
      Xc = function (l, i, c) {
        ;(l = As(l)), (i = As(i)), (c = As(c))
        var v = Os((0.4124564 * l + 0.3575761 * i + 0.1804375 * c) / zn.Xn),
          y = Os((0.2126729 * l + 0.7151522 * i + 0.072175 * c) / zn.Yn),
          x = Os((0.0193339 * l + 0.119192 * i + 0.9503041 * c) / zn.Zn)
        return [v, y, x]
      },
      Sl = Yc,
      qn = jr,
      Zc = _.unpack,
      Jc = Math.pow,
      Qc = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = Zc(l, "lab")
        var c = l[0],
          v = l[1],
          y = l[2],
          x,
          p,
          $,
          S,
          O,
          N
        return (
          (p = (c + 16) / 116),
          (x = isNaN(v) ? p : p + v / 500),
          ($ = isNaN(y) ? p : p - y / 200),
          (p = qn.Yn * Rs(p)),
          (x = qn.Xn * Rs(x)),
          ($ = qn.Zn * Rs($)),
          (S = Is(3.2404542 * x - 1.5371385 * p - 0.4985314 * $)),
          (O = Is(-0.969266 * x + 1.8760108 * p + 0.041556 * $)),
          (N = Is(0.0556434 * x - 0.2040259 * p + 1.0572252 * $)),
          [S, O, N, l.length > 3 ? l[3] : 1]
        )
      },
      Is = function (l) {
        return 255 * (l <= 0.00304 ? 12.92 * l : 1.055 * Jc(l, 1 / 2.4) - 0.055)
      },
      Rs = function (l) {
        return l > qn.t1 ? l * l * l : qn.t2 * (l - qn.t0)
      },
      Pl = Qc,
      ef = _.unpack,
      tf = _.type,
      nf = he,
      Cl = D,
      Ml = P,
      rf = Sl
    ;(Cl.prototype.lab = function () {
      return rf(this._rgb)
    }),
      (nf.lab = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          Cl,
          [null].concat(l, ["lab"]),
        ))()
      }),
      (Ml.format.lab = Pl),
      Ml.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (((l = ef(l, "lab")), tf(l) === "array" && l.length === 3))
            return "lab"
        },
      })
    var sf = _.unpack,
      af = _.RAD2DEG,
      lf = Math.sqrt,
      of = Math.atan2,
      uf = Math.round,
      cf = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = sf(l, "lab"),
          v = c[0],
          y = c[1],
          x = c[2],
          p = lf(y * y + x * x),
          $ = (of(x, y) * af + 360) % 360
        return uf(p * 1e4) === 0 && ($ = Number.NaN), [v, p, $]
      },
      Al = cf,
      ff = _.unpack,
      df = Sl,
      hf = Al,
      vf = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = ff(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2],
          p = df(v, y, x),
          $ = p[0],
          S = p[1],
          O = p[2]
        return hf($, S, O)
      },
      gf = vf,
      pf = _.unpack,
      bf = _.DEG2RAD,
      mf = Math.sin,
      yf = Math.cos,
      wf = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = pf(l, "lch"),
          v = c[0],
          y = c[1],
          x = c[2]
        return isNaN(x) && (x = 0), (x = x * bf), [v, yf(x) * y, mf(x) * y]
      },
      Ol = wf,
      xf = _.unpack,
      _f = Ol,
      kf = Pl,
      $f = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = xf(l, "lch")
        var c = l[0],
          v = l[1],
          y = l[2],
          x = _f(c, v, y),
          p = x[0],
          $ = x[1],
          S = x[2],
          O = kf(p, $, S),
          N = O[0],
          X = O[1],
          H = O[2]
        return [N, X, H, l.length > 3 ? l[3] : 1]
      },
      Il = $f,
      Ef = _.unpack,
      Sf = Il,
      Pf = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = Ef(l, "hcl").reverse()
        return Sf.apply(void 0, c)
      },
      Cf = Pf,
      Mf = _.unpack,
      Af = _.type,
      Rl = he,
      Br = D,
      Ts = P,
      Tl = gf
    ;(Br.prototype.lch = function () {
      return Tl(this._rgb)
    }),
      (Br.prototype.hcl = function () {
        return Tl(this._rgb).reverse()
      }),
      (Rl.lch = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          Br,
          [null].concat(l, ["lch"]),
        ))()
      }),
      (Rl.hcl = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          Br,
          [null].concat(l, ["hcl"]),
        ))()
      }),
      (Ts.format.lch = Il),
      (Ts.format.hcl = Cf),
      ["lch", "hcl"].forEach(function (l) {
        return Ts.autodetect.push({
          p: 2,
          test: function () {
            for (var i = [], c = arguments.length; c--; ) i[c] = arguments[c]
            if (((i = Mf(i, l)), Af(i) === "array" && i.length === 3)) return l
          },
        })
      })
    var Of = {
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
      Nl = Of,
      If = D,
      Fl = P,
      Rf = _.type,
      pr = Nl,
      Tf = gl,
      Nf = vl
    ;(If.prototype.name = function () {
      for (
        var l = Nf(this._rgb, "rgb"), i = 0, c = Object.keys(pr);
        i < c.length;
        i += 1
      ) {
        var v = c[i]
        if (pr[v] === l) return v.toLowerCase()
      }
      return l
    }),
      (Fl.format.named = function (l) {
        if (((l = l.toLowerCase()), pr[l])) return Tf(pr[l])
        throw new Error("unknown color name: " + l)
      }),
      Fl.autodetect.push({
        p: 5,
        test: function (l) {
          for (var i = [], c = arguments.length - 1; c-- > 0; )
            i[c] = arguments[c + 1]
          if (!i.length && Rf(l) === "string" && pr[l.toLowerCase()])
            return "named"
        },
      })
    var Ff = _.unpack,
      Lf = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = Ff(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2]
        return (v << 16) + (y << 8) + x
      },
      jf = Lf,
      Bf = _.type,
      Df = function (l) {
        if (Bf(l) == "number" && l >= 0 && l <= 16777215) {
          var i = l >> 16,
            c = (l >> 8) & 255,
            v = l & 255
          return [i, c, v, 1]
        }
        throw new Error("unknown num color: " + l)
      },
      Hf = Df,
      zf = he,
      Ll = D,
      jl = P,
      qf = _.type,
      Wf = jf
    ;(Ll.prototype.num = function () {
      return Wf(this._rgb)
    }),
      (zf.num = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          Ll,
          [null].concat(l, ["num"]),
        ))()
      }),
      (jl.format.num = Hf),
      jl.autodetect.push({
        p: 5,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (
            l.length === 1 &&
            qf(l[0]) === "number" &&
            l[0] >= 0 &&
            l[0] <= 16777215
          )
            return "num"
        },
      })
    var Uf = he,
      Ns = D,
      Bl = P,
      Dl = _.unpack,
      Hl = _.type,
      zl = Math.round
    ;(Ns.prototype.rgb = function (l) {
      return (
        l === void 0 && (l = !0),
        l === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(zl)
      )
    }),
      (Ns.prototype.rgba = function (l) {
        return (
          l === void 0 && (l = !0),
          this._rgb.slice(0, 4).map(function (i, c) {
            return c < 3 ? (l === !1 ? i : zl(i)) : i
          })
        )
      }),
      (Uf.rgb = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          Ns,
          [null].concat(l, ["rgb"]),
        ))()
      }),
      (Bl.format.rgb = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = Dl(l, "rgba")
        return c[3] === void 0 && (c[3] = 1), c
      }),
      Bl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (
            ((l = Dl(l, "rgba")),
            Hl(l) === "array" &&
              (l.length === 3 ||
                (l.length === 4 &&
                  Hl(l[3]) == "number" &&
                  l[3] >= 0 &&
                  l[3] <= 1)))
          )
            return "rgb"
        },
      })
    var Dr = Math.log,
      Vf = function (l) {
        var i = l / 100,
          c,
          v,
          y
        return (
          i < 66
            ? ((c = 255),
              (v =
                i < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (v = i - 2) +
                    104.49216199393888 * Dr(v)),
              (y =
                i < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (y = i - 10) +
                    115.67994401066147 * Dr(y)))
            : ((c =
                351.97690566805693 +
                0.114206453784165 * (c = i - 55) -
                40.25366309332127 * Dr(c)),
              (v =
                325.4494125711974 +
                0.07943456536662342 * (v = i - 50) -
                28.0852963507957 * Dr(v)),
              (y = 255)),
          [c, v, y, 1]
        )
      },
      ql = Vf,
      Gf = ql,
      Kf = _.unpack,
      Yf = Math.round,
      Xf = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        for (
          var c = Kf(l, "rgb"),
            v = c[0],
            y = c[2],
            x = 1e3,
            p = 4e4,
            $ = 0.4,
            S;
          p - x > $;

        ) {
          S = (p + x) * 0.5
          var O = Gf(S)
          O[2] / O[0] >= y / v ? (p = S) : (x = S)
        }
        return Yf(S)
      },
      Zf = Xf,
      Fs = he,
      Hr = D,
      Ls = P,
      Jf = Zf
    ;(Hr.prototype.temp =
      Hr.prototype.kelvin =
      Hr.prototype.temperature =
        function () {
          return Jf(this._rgb)
        }),
      (Fs.temp =
        Fs.kelvin =
        Fs.temperature =
          function () {
            for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
            return new (Function.prototype.bind.apply(
              Hr,
              [null].concat(l, ["temp"]),
            ))()
          }),
      (Ls.format.temp = Ls.format.kelvin = Ls.format.temperature = ql)
    var Qf = _.unpack,
      js = Math.cbrt,
      ed = Math.pow,
      td = Math.sign,
      nd = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = Qf(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2],
          p = [Bs(v / 255), Bs(y / 255), Bs(x / 255)],
          $ = p[0],
          S = p[1],
          O = p[2],
          N = js(0.4122214708 * $ + 0.5363325363 * S + 0.0514459929 * O),
          X = js(0.2119034982 * $ + 0.6806995451 * S + 0.1073969566 * O),
          H = js(0.0883024619 * $ + 0.2817188376 * S + 0.6299787005 * O)
        return [
          0.2104542553 * N + 0.793617785 * X - 0.0040720468 * H,
          1.9779984951 * N - 2.428592205 * X + 0.4505937099 * H,
          0.0259040371 * N + 0.7827717662 * X - 0.808675766 * H,
        ]
      },
      Wl = nd
    function Bs(l) {
      var i = Math.abs(l)
      return i < 0.04045
        ? l / 12.92
        : (td(l) || 1) * ed((i + 0.055) / 1.055, 2.4)
    }
    var rd = _.unpack,
      zr = Math.pow,
      sd = Math.sign,
      ad = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = rd(l, "lab")
        var c = l[0],
          v = l[1],
          y = l[2],
          x = zr(c + 0.3963377774 * v + 0.2158037573 * y, 3),
          p = zr(c - 0.1055613458 * v - 0.0638541728 * y, 3),
          $ = zr(c - 0.0894841775 * v - 1.291485548 * y, 3)
        return [
          255 * Ds(4.0767416621 * x - 3.3077115913 * p + 0.2309699292 * $),
          255 * Ds(-1.2684380046 * x + 2.6097574011 * p - 0.3413193965 * $),
          255 * Ds(-0.0041960863 * x - 0.7034186147 * p + 1.707614701 * $),
          l.length > 3 ? l[3] : 1,
        ]
      },
      Ul = ad
    function Ds(l) {
      var i = Math.abs(l)
      return i > 0.0031308
        ? (sd(l) || 1) * (1.055 * zr(i, 1 / 2.4) - 0.055)
        : l * 12.92
    }
    var ld = _.unpack,
      od = _.type,
      id = he,
      Vl = D,
      Gl = P,
      ud = Wl
    ;(Vl.prototype.oklab = function () {
      return ud(this._rgb)
    }),
      (id.oklab = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          Vl,
          [null].concat(l, ["oklab"]),
        ))()
      }),
      (Gl.format.oklab = Ul),
      Gl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (((l = ld(l, "oklab")), od(l) === "array" && l.length === 3))
            return "oklab"
        },
      })
    var cd = _.unpack,
      fd = Wl,
      dd = Al,
      hd = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        var c = cd(l, "rgb"),
          v = c[0],
          y = c[1],
          x = c[2],
          p = fd(v, y, x),
          $ = p[0],
          S = p[1],
          O = p[2]
        return dd($, S, O)
      },
      vd = hd,
      gd = _.unpack,
      pd = Ol,
      bd = Ul,
      md = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        l = gd(l, "lch")
        var c = l[0],
          v = l[1],
          y = l[2],
          x = pd(c, v, y),
          p = x[0],
          $ = x[1],
          S = x[2],
          O = bd(p, $, S),
          N = O[0],
          X = O[1],
          H = O[2]
        return [N, X, H, l.length > 3 ? l[3] : 1]
      },
      yd = md,
      wd = _.unpack,
      xd = _.type,
      _d = he,
      Kl = D,
      Yl = P,
      kd = vd
    ;(Kl.prototype.oklch = function () {
      return kd(this._rgb)
    }),
      (_d.oklch = function () {
        for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
        return new (Function.prototype.bind.apply(
          Kl,
          [null].concat(l, ["oklch"]),
        ))()
      }),
      (Yl.format.oklch = yd),
      Yl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          if (((l = wd(l, "oklch")), xd(l) === "array" && l.length === 3))
            return "oklch"
        },
      })
    var Xl = D,
      $d = _.type
    Xl.prototype.alpha = function (l, i) {
      return (
        i === void 0 && (i = !1),
        l !== void 0 && $d(l) === "number"
          ? i
            ? ((this._rgb[3] = l), this)
            : new Xl([this._rgb[0], this._rgb[1], this._rgb[2], l], "rgb")
          : this._rgb[3]
      )
    }
    var Ed = D
    Ed.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var $n = D,
      Sd = jr
    ;($n.prototype.darken = function (l) {
      l === void 0 && (l = 1)
      var i = this,
        c = i.lab()
      return (c[0] -= Sd.Kn * l), new $n(c, "lab").alpha(i.alpha(), !0)
    }),
      ($n.prototype.brighten = function (l) {
        return l === void 0 && (l = 1), this.darken(-l)
      }),
      ($n.prototype.darker = $n.prototype.darken),
      ($n.prototype.brighter = $n.prototype.brighten)
    var Pd = D
    Pd.prototype.get = function (l) {
      var i = l.split("."),
        c = i[0],
        v = i[1],
        y = this[c]()
      if (v) {
        var x = c.indexOf(v) - (c.substr(0, 2) === "ok" ? 2 : 0)
        if (x > -1) return y[x]
        throw new Error("unknown channel " + v + " in mode " + c)
      } else return y
    }
    var Wn = D,
      Cd = _.type,
      Md = Math.pow,
      Ad = 1e-7,
      Od = 20
    Wn.prototype.luminance = function (l) {
      if (l !== void 0 && Cd(l) === "number") {
        if (l === 0) return new Wn([0, 0, 0, this._rgb[3]], "rgb")
        if (l === 1) return new Wn([255, 255, 255, this._rgb[3]], "rgb")
        var i = this.luminance(),
          c = "rgb",
          v = Od,
          y = function (p, $) {
            var S = p.interpolate($, 0.5, c),
              O = S.luminance()
            return Math.abs(l - O) < Ad || !v-- ? S : O > l ? y(p, S) : y(S, $)
          },
          x = (
            i > l
              ? y(new Wn([0, 0, 0]), this)
              : y(this, new Wn([255, 255, 255]))
          ).rgb()
        return new Wn(x.concat([this._rgb[3]]))
      }
      return Id.apply(void 0, this._rgb.slice(0, 3))
    }
    var Id = function (l, i, c) {
        return (
          (l = Hs(l)),
          (i = Hs(i)),
          (c = Hs(c)),
          0.2126 * l + 0.7152 * i + 0.0722 * c
        )
      },
      Hs = function (l) {
        return (
          (l /= 255), l <= 0.03928 ? l / 12.92 : Md((l + 0.055) / 1.055, 2.4)
        )
      },
      Ct = {},
      Zl = D,
      Jl = _.type,
      qr = Ct,
      Ql = function (l, i, c) {
        c === void 0 && (c = 0.5)
        for (var v = [], y = arguments.length - 3; y-- > 0; )
          v[y] = arguments[y + 3]
        var x = v[0] || "lrgb"
        if ((!qr[x] && !v.length && (x = Object.keys(qr)[0]), !qr[x]))
          throw new Error("interpolation mode " + x + " is not defined")
        return (
          Jl(l) !== "object" && (l = new Zl(l)),
          Jl(i) !== "object" && (i = new Zl(i)),
          qr[x](l, i, c).alpha(l.alpha() + c * (i.alpha() - l.alpha()))
        )
      },
      eo = D,
      Rd = Ql
    eo.prototype.mix = eo.prototype.interpolate = function (l, i) {
      i === void 0 && (i = 0.5)
      for (var c = [], v = arguments.length - 2; v-- > 0; )
        c[v] = arguments[v + 2]
      return Rd.apply(void 0, [this, l, i].concat(c))
    }
    var to = D
    to.prototype.premultiply = function (l) {
      l === void 0 && (l = !1)
      var i = this._rgb,
        c = i[3]
      return l
        ? ((this._rgb = [i[0] * c, i[1] * c, i[2] * c, c]), this)
        : new to([i[0] * c, i[1] * c, i[2] * c, c], "rgb")
    }
    var zs = D,
      Td = jr
    ;(zs.prototype.saturate = function (l) {
      l === void 0 && (l = 1)
      var i = this,
        c = i.lch()
      return (
        (c[1] += Td.Kn * l),
        c[1] < 0 && (c[1] = 0),
        new zs(c, "lch").alpha(i.alpha(), !0)
      )
    }),
      (zs.prototype.desaturate = function (l) {
        return l === void 0 && (l = 1), this.saturate(-l)
      })
    var no = D,
      ro = _.type
    no.prototype.set = function (l, i, c) {
      c === void 0 && (c = !1)
      var v = l.split("."),
        y = v[0],
        x = v[1],
        p = this[y]()
      if (x) {
        var $ = y.indexOf(x) - (y.substr(0, 2) === "ok" ? 2 : 0)
        if ($ > -1) {
          if (ro(i) == "string")
            switch (i.charAt(0)) {
              case "+":
                p[$] += +i
                break
              case "-":
                p[$] += +i
                break
              case "*":
                p[$] *= +i.substr(1)
                break
              case "/":
                p[$] /= +i.substr(1)
                break
              default:
                p[$] = +i
            }
          else if (ro(i) === "number") p[$] = i
          else throw new Error("unsupported value for Color.set")
          var S = new no(p, y)
          return c ? ((this._rgb = S._rgb), this) : S
        }
        throw new Error("unknown channel " + x + " in mode " + y)
      } else return p
    }
    var Nd = D,
      Fd = function (l, i, c) {
        var v = l._rgb,
          y = i._rgb
        return new Nd(
          v[0] + c * (y[0] - v[0]),
          v[1] + c * (y[1] - v[1]),
          v[2] + c * (y[2] - v[2]),
          "rgb",
        )
      }
    Ct.rgb = Fd
    var Ld = D,
      qs = Math.sqrt,
      Un = Math.pow,
      jd = function (l, i, c) {
        var v = l._rgb,
          y = v[0],
          x = v[1],
          p = v[2],
          $ = i._rgb,
          S = $[0],
          O = $[1],
          N = $[2]
        return new Ld(
          qs(Un(y, 2) * (1 - c) + Un(S, 2) * c),
          qs(Un(x, 2) * (1 - c) + Un(O, 2) * c),
          qs(Un(p, 2) * (1 - c) + Un(N, 2) * c),
          "rgb",
        )
      }
    Ct.lrgb = jd
    var Bd = D,
      Dd = function (l, i, c) {
        var v = l.lab(),
          y = i.lab()
        return new Bd(
          v[0] + c * (y[0] - v[0]),
          v[1] + c * (y[1] - v[1]),
          v[2] + c * (y[2] - v[2]),
          "lab",
        )
      }
    Ct.lab = Dd
    var so = D,
      Vn = function (l, i, c, v) {
        var y, x, p, $
        v === "hsl"
          ? ((p = l.hsl()), ($ = i.hsl()))
          : v === "hsv"
            ? ((p = l.hsv()), ($ = i.hsv()))
            : v === "hcg"
              ? ((p = l.hcg()), ($ = i.hcg()))
              : v === "hsi"
                ? ((p = l.hsi()), ($ = i.hsi()))
                : v === "lch" || v === "hcl"
                  ? ((v = "hcl"), (p = l.hcl()), ($ = i.hcl()))
                  : v === "oklch" &&
                    ((p = l.oklch().reverse()), ($ = i.oklch().reverse()))
        var S, O, N, X, H, ne
        ;(v.substr(0, 1) === "h" || v === "oklch") &&
          ((y = p),
          (S = y[0]),
          (N = y[1]),
          (H = y[2]),
          (x = $),
          (O = x[0]),
          (X = x[1]),
          (ne = x[2]))
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
                : ((ye = O), (H == 1 || H == 0) && v != "hsv" && (te = X))
              : ((ye = S), (ne == 1 || ne == 0) && v != "hsv" && (te = N)),
          te === void 0 && (te = N + c * (X - N)),
          (Ee = H + c * (ne - H)),
          v === "oklch" ? new so([Ee, te, ye], v) : new so([ye, te, Ee], v)
        )
      },
      Hd = Vn,
      ao = function (l, i, c) {
        return Hd(l, i, c, "lch")
      }
    ;(Ct.lch = ao), (Ct.hcl = ao)
    var zd = D,
      qd = function (l, i, c) {
        var v = l.num(),
          y = i.num()
        return new zd(v + c * (y - v), "num")
      }
    Ct.num = qd
    var Wd = Vn,
      Ud = function (l, i, c) {
        return Wd(l, i, c, "hcg")
      }
    Ct.hcg = Ud
    var Vd = Vn,
      Gd = function (l, i, c) {
        return Vd(l, i, c, "hsi")
      }
    Ct.hsi = Gd
    var Kd = Vn,
      Yd = function (l, i, c) {
        return Kd(l, i, c, "hsl")
      }
    Ct.hsl = Yd
    var Xd = Vn,
      Zd = function (l, i, c) {
        return Xd(l, i, c, "hsv")
      }
    Ct.hsv = Zd
    var Jd = D,
      Qd = function (l, i, c) {
        var v = l.oklab(),
          y = i.oklab()
        return new Jd(
          v[0] + c * (y[0] - v[0]),
          v[1] + c * (y[1] - v[1]),
          v[2] + c * (y[2] - v[2]),
          "oklab",
        )
      }
    Ct.oklab = Qd
    var eh = Vn,
      th = function (l, i, c) {
        return eh(l, i, c, "oklch")
      }
    Ct.oklch = th
    var Ws = D,
      nh = _.clip_rgb,
      Us = Math.pow,
      Vs = Math.sqrt,
      Gs = Math.PI,
      lo = Math.cos,
      oo = Math.sin,
      rh = Math.atan2,
      sh = function (l, i, c) {
        i === void 0 && (i = "lrgb"), c === void 0 && (c = null)
        var v = l.length
        c ||
          (c = Array.from(new Array(v)).map(function () {
            return 1
          }))
        var y =
          v /
          c.reduce(function (ye, Ee) {
            return ye + Ee
          })
        if (
          (c.forEach(function (ye, Ee) {
            c[Ee] *= y
          }),
          (l = l.map(function (ye) {
            return new Ws(ye)
          })),
          i === "lrgb")
        )
          return ah(l, c)
        for (
          var x = l.shift(), p = x.get(i), $ = [], S = 0, O = 0, N = 0;
          N < p.length;
          N++
        )
          if (
            ((p[N] = (p[N] || 0) * c[0]),
            $.push(isNaN(p[N]) ? 0 : c[0]),
            i.charAt(N) === "h" && !isNaN(p[N]))
          ) {
            var X = (p[N] / 180) * Gs
            ;(S += lo(X) * c[0]), (O += oo(X) * c[0])
          }
        var H = x.alpha() * c[0]
        l.forEach(function (ye, Ee) {
          var Pe = ye.get(i)
          H += ye.alpha() * c[Ee + 1]
          for (var Ie = 0; Ie < p.length; Ie++)
            if (!isNaN(Pe[Ie]))
              if ((($[Ie] += c[Ee + 1]), i.charAt(Ie) === "h")) {
                var ut = (Pe[Ie] / 180) * Gs
                ;(S += lo(ut) * c[Ee + 1]), (O += oo(ut) * c[Ee + 1])
              } else p[Ie] += Pe[Ie] * c[Ee + 1]
        })
        for (var ne = 0; ne < p.length; ne++)
          if (i.charAt(ne) === "h") {
            for (var te = (rh(O / $[ne], S / $[ne]) / Gs) * 180; te < 0; )
              te += 360
            for (; te >= 360; ) te -= 360
            p[ne] = te
          } else p[ne] = p[ne] / $[ne]
        return (H /= v), new Ws(p, i).alpha(H > 0.99999 ? 1 : H, !0)
      },
      ah = function (l, i) {
        for (var c = l.length, v = [0, 0, 0, 0], y = 0; y < l.length; y++) {
          var x = l[y],
            p = i[y] / c,
            $ = x._rgb
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
          new Ws(nh(v))
        )
      },
      Ft = he,
      Gn = _.type,
      lh = Math.pow,
      Ks = function (l) {
        var i = "rgb",
          c = Ft("#ccc"),
          v = 0,
          y = [0, 1],
          x = [],
          p = [0, 0],
          $ = !1,
          S = [],
          O = !1,
          N = 0,
          X = 1,
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
              x.length = 0
              for (var ke = 0; ke < z.length; ke++) x.push(ke / (z.length - 1))
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
          ut = function (z) {
            return z
          },
          at = function (z, ce) {
            var ke, we
            if ((ce == null && (ce = !1), isNaN(z) || z === null)) return c
            if (ce) we = z
            else if ($ && $.length > 2) {
              var ct = Pe(z)
              we = ct / ($.length - 2)
            } else X !== N ? (we = (z - N) / (X - N)) : (we = 1)
            ;(we = ut(we)),
              ce || (we = Ie(we)),
              ye !== 1 && (we = lh(we, ye)),
              (we = p[0] + we * (1 - p[0] - p[1])),
              (we = Math.min(1, Math.max(0, we)))
            var De = Math.floor(we * 1e4)
            if (te && ne[De]) ke = ne[De]
            else {
              if (Gn(S) === "array")
                for (var Ce = 0; Ce < x.length; Ce++) {
                  var Te = x[Ce]
                  if (we <= Te) {
                    ke = S[Ce]
                    break
                  }
                  if (we >= Te && Ce === x.length - 1) {
                    ke = S[Ce]
                    break
                  }
                  if (we > Te && we < x[Ce + 1]) {
                    ;(we = (we - Te) / (x[Ce + 1] - Te)),
                      (ke = Ft.interpolate(S[Ce], S[Ce + 1], we, i))
                    break
                  }
                }
              else Gn(S) === "function" && (ke = S(we))
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
              if (Gn(z) === "array") ($ = z), (y = [z[0], z[z.length - 1]])
              else {
                var ce = Ft.analyze(y)
                z === 0 ? ($ = [ce.min, ce.max]) : ($ = Ft.limits(ce, "e", z))
              }
              return Se
            }
            return $
          }),
          (Se.domain = function (z) {
            if (!arguments.length) return y
            ;(N = z[0]), (X = z[z.length - 1]), (x = [])
            var ce = S.length
            if (z.length === ce && N !== X)
              for (var ke = 0, we = Array.from(z); ke < we.length; ke += 1) {
                var ct = we[ke]
                x.push((ct - N) / (X - N))
              }
            else {
              for (var De = 0; De < ce; De++) x.push(De / (ce - 1))
              if (z.length > 2) {
                var Ce = z.map(function (Ne, Fe) {
                    return Fe / (z.length - 1)
                  }),
                  Te = z.map(function (Ne) {
                    return (Ne - N) / (X - N)
                  })
                Te.every(function (Ne, Fe) {
                  return Ce[Fe] === Ne
                }) ||
                  (ut = function (Ne) {
                    if (Ne <= 0 || Ne >= 1) return Ne
                    for (var Fe = 0; Ne >= Te[Fe + 1]; ) Fe++
                    var jt = (Ne - Te[Fe]) / (Te[Fe + 1] - Te[Fe]),
                      dn = Ce[Fe] + jt * (Ce[Fe + 1] - Ce[Fe])
                    return dn
                  })
              }
            }
            return (y = [N, X]), Se
          }),
          (Se.mode = function (z) {
            return arguments.length ? ((i = z), Et(), Se) : i
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
                        we = at(1, !0).lab()[0],
                        ct = ke > we,
                        De = at(ce, !0).lab()[0],
                        Ce = ke + (we - ke) * ce,
                        Te = De - Ce,
                        Ne = 0,
                        Fe = 1,
                        jt = 20;
                      Math.abs(Te) > 0.01 && jt-- > 0;

                    )
                      (function () {
                        return (
                          ct && (Te *= -1),
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
              var we = y[0],
                ct = y[1] - we
              ke = oh(0, z, !1).map(function (Fe) {
                return Se(we + (Fe / (z - 1)) * ct)
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
              else De = y
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
    function oh(l, i, c) {
      for (
        var v = [], y = l < i, x = c ? (y ? i + 1 : i - 1) : i, p = l;
        y ? p < x : p > x;
        y ? p++ : p--
      )
        v.push(p)
      return v
    }
    var br = D,
      ih = Ks,
      uh = function (l) {
        for (var i = [1, 1], c = 1; c < l; c++) {
          for (var v = [1], y = 1; y <= i.length; y++)
            v[y] = (i[y] || 0) + i[y - 1]
          i = v
        }
        return i
      },
      ch = function (l) {
        var i, c, v, y, x, p, $
        if (
          ((l = l.map(function (H) {
            return new br(H)
          })),
          l.length === 2)
        )
          (i = l.map(function (H) {
            return H.lab()
          })),
            (x = i[0]),
            (p = i[1]),
            (y = function (H) {
              var ne = [0, 1, 2].map(function (te) {
                return x[te] + H * (p[te] - x[te])
              })
              return new br(ne, "lab")
            })
        else if (l.length === 3)
          (c = l.map(function (H) {
            return H.lab()
          })),
            (x = c[0]),
            (p = c[1]),
            ($ = c[2]),
            (y = function (H) {
              var ne = [0, 1, 2].map(function (te) {
                return (
                  (1 - H) * (1 - H) * x[te] +
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
            (x = v[0]),
            (p = v[1]),
            ($ = v[2]),
            (S = v[3]),
            (y = function (H) {
              var ne = [0, 1, 2].map(function (te) {
                return (
                  (1 - H) * (1 - H) * (1 - H) * x[te] +
                  3 * (1 - H) * (1 - H) * H * p[te] +
                  3 * (1 - H) * H * H * $[te] +
                  H * H * H * S[te]
                )
              })
              return new br(ne, "lab")
            })
        } else if (l.length >= 5) {
          var O, N, X
          ;(O = l.map(function (H) {
            return H.lab()
          })),
            (X = l.length - 1),
            (N = uh(X)),
            (y = function (H) {
              var ne = 1 - H,
                te = [0, 1, 2].map(function (ye) {
                  return O.reduce(function (Ee, Pe, Ie) {
                    return (
                      Ee +
                      N[Ie] * Math.pow(ne, X - Ie) * Math.pow(H, Ie) * Pe[ye]
                    )
                  }, 0)
                })
              return new br(te, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return y
      },
      fh = function (l) {
        var i = ch(l)
        return (
          (i.scale = function () {
            return ih(i)
          }),
          i
        )
      },
      Ys = he,
      Lt = function (l, i, c) {
        if (!Lt[c]) throw new Error("unknown blend mode " + c)
        return Lt[c](l, i)
      },
      cn = function (l) {
        return function (i, c) {
          var v = Ys(c).rgb(),
            y = Ys(i).rgb()
          return Ys.rgb(l(v, y))
        }
      },
      fn = function (l) {
        return function (i, c) {
          var v = []
          return (
            (v[0] = l(i[0], c[0])),
            (v[1] = l(i[1], c[1])),
            (v[2] = l(i[2], c[2])),
            v
          )
        }
      },
      dh = function (l) {
        return l
      },
      hh = function (l, i) {
        return (l * i) / 255
      },
      vh = function (l, i) {
        return l > i ? i : l
      },
      gh = function (l, i) {
        return l > i ? l : i
      },
      ph = function (l, i) {
        return 255 * (1 - (1 - l / 255) * (1 - i / 255))
      },
      bh = function (l, i) {
        return i < 128
          ? (2 * l * i) / 255
          : 255 * (1 - 2 * (1 - l / 255) * (1 - i / 255))
      },
      mh = function (l, i) {
        return 255 * (1 - (1 - i / 255) / (l / 255))
      },
      yh = function (l, i) {
        return l === 255
          ? 255
          : ((l = (255 * (i / 255)) / (1 - l / 255)), l > 255 ? 255 : l)
      }
    ;(Lt.normal = cn(fn(dh))),
      (Lt.multiply = cn(fn(hh))),
      (Lt.screen = cn(fn(ph))),
      (Lt.overlay = cn(fn(bh))),
      (Lt.darken = cn(fn(vh))),
      (Lt.lighten = cn(fn(gh))),
      (Lt.dodge = cn(fn(yh))),
      (Lt.burn = cn(fn(mh)))
    for (
      var wh = Lt,
        Xs = _.type,
        xh = _.clip_rgb,
        _h = _.TWOPI,
        kh = Math.pow,
        $h = Math.sin,
        Eh = Math.cos,
        io = he,
        Sh = function (l, i, c, v, y) {
          l === void 0 && (l = 300),
            i === void 0 && (i = -1.5),
            c === void 0 && (c = 1),
            v === void 0 && (v = 1),
            y === void 0 && (y = [0, 1])
          var x = 0,
            p
          Xs(y) === "array" ? (p = y[1] - y[0]) : ((p = 0), (y = [y, y]))
          var $ = function (S) {
            var O = _h * ((l + 120) / 360 + i * S),
              N = kh(y[0] + p * S, v),
              X = x !== 0 ? c[0] + S * x : c,
              H = (X * N * (1 - N)) / 2,
              ne = Eh(O),
              te = $h(O),
              ye = N + H * (-0.14861 * ne + 1.78277 * te),
              Ee = N + H * (-0.29227 * ne - 0.90649 * te),
              Pe = N + H * (1.97294 * ne)
            return io(xh([ye * 255, Ee * 255, Pe * 255, 1]))
          }
          return (
            ($.start = function (S) {
              return S == null ? l : ((l = S), $)
            }),
            ($.rotations = function (S) {
              return S == null ? i : ((i = S), $)
            }),
            ($.gamma = function (S) {
              return S == null ? v : ((v = S), $)
            }),
            ($.hue = function (S) {
              return S == null
                ? c
                : ((c = S),
                  Xs(c) === "array"
                    ? ((x = c[1] - c[0]), x === 0 && (c = c[1]))
                    : (x = 0),
                  $)
            }),
            ($.lightness = function (S) {
              return S == null
                ? y
                : (Xs(S) === "array"
                    ? ((y = S), (p = S[1] - S[0]))
                    : ((y = [S, S]), (p = 0)),
                  $)
            }),
            ($.scale = function () {
              return io.scale($)
            }),
            $.hue(c),
            $
          )
        },
        Ph = D,
        Ch = "0123456789abcdef",
        Mh = Math.floor,
        Ah = Math.random,
        Oh = function () {
          for (var l = "#", i = 0; i < 6; i++) l += Ch.charAt(Mh(Ah() * 16))
          return new Ph(l, "hex")
        },
        Zs = d,
        uo = Math.log,
        Ih = Math.pow,
        Rh = Math.floor,
        Th = Math.abs,
        co = function (l, i) {
          i === void 0 && (i = null)
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
              i && Zs(v) === "object" && (v = v[i]),
                v != null &&
                  !isNaN(v) &&
                  (c.values.push(v),
                  (c.sum += v),
                  v < c.min && (c.min = v),
                  v > c.max && (c.max = v),
                  (c.count += 1))
            }),
            (c.domain = [c.min, c.max]),
            (c.limits = function (v, y) {
              return fo(c, v, y)
            }),
            c
          )
        },
        fo = function (l, i, c) {
          i === void 0 && (i = "equal"),
            c === void 0 && (c = 7),
            Zs(l) == "array" && (l = co(l))
          var v = l.min,
            y = l.max,
            x = l.values.sort(function (Qs, ea) {
              return Qs - ea
            })
          if (c === 1) return [v, y]
          var p = []
          if (
            (i.substr(0, 1) === "c" && (p.push(v), p.push(y)),
            i.substr(0, 1) === "e")
          ) {
            p.push(v)
            for (var $ = 1; $ < c; $++) p.push(v + ($ / c) * (y - v))
            p.push(y)
          } else if (i.substr(0, 1) === "l") {
            if (v <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var S = Math.LOG10E * uo(v),
              O = Math.LOG10E * uo(y)
            p.push(v)
            for (var N = 1; N < c; N++) p.push(Ih(10, S + (N / c) * (O - S)))
            p.push(y)
          } else if (i.substr(0, 1) === "q") {
            p.push(v)
            for (var X = 1; X < c; X++) {
              var H = ((x.length - 1) * X) / c,
                ne = Rh(H)
              if (ne === H) p.push(x[ne])
              else {
                var te = H - ne
                p.push(x[ne] * (1 - te) + x[ne + 1] * te)
              }
            }
            p.push(y)
          } else if (i.substr(0, 1) === "k") {
            var ye,
              Ee = x.length,
              Pe = new Array(Ee),
              Ie = new Array(c),
              ut = !0,
              at = 0,
              Et = null
            ;(Et = []), Et.push(v)
            for (var Se = 1; Se < c; Se++) Et.push(v + (Se / c) * (y - v))
            for (Et.push(y); ut; ) {
              for (var z = 0; z < c; z++) Ie[z] = 0
              for (var ce = 0; ce < Ee; ce++)
                for (
                  var ke = x[ce], we = Number.MAX_VALUE, ct = void 0, De = 0;
                  De < c;
                  De++
                ) {
                  var Ce = Th(Et[De] - ke)
                  Ce < we && ((we = Ce), (ct = De)), Ie[ct]++, (Pe[ce] = ct)
                }
              for (var Te = new Array(c), Ne = 0; Ne < c; Ne++) Te[Ne] = null
              for (var Fe = 0; Fe < Ee; Fe++)
                (ye = Pe[Fe]),
                  Te[ye] === null ? (Te[ye] = x[Fe]) : (Te[ye] += x[Fe])
              for (var jt = 0; jt < c; jt++) Te[jt] *= 1 / Ie[jt]
              ut = !1
              for (var dn = 0; dn < c; dn++)
                if (Te[dn] !== Et[dn]) {
                  ut = !0
                  break
                }
              ;(Et = Te), at++, at > 200 && (ut = !1)
            }
            for (var hn = {}, Kn = 0; Kn < c; Kn++) hn[Kn] = []
            for (var Yn = 0; Yn < Ee; Yn++) (ye = Pe[Yn]), hn[ye].push(x[Yn])
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
        ho = { analyze: co, limits: fo },
        vo = D,
        Nh = function (l, i) {
          ;(l = new vo(l)), (i = new vo(i))
          var c = l.luminance(),
            v = i.luminance()
          return c > v ? (c + 0.05) / (v + 0.05) : (v + 0.05) / (c + 0.05)
        },
        go = D,
        Xt = Math.sqrt,
        Ge = Math.pow,
        Fh = Math.min,
        Lh = Math.max,
        po = Math.atan2,
        bo = Math.abs,
        Wr = Math.cos,
        mo = Math.sin,
        jh = Math.exp,
        yo = Math.PI,
        Bh = function (l, i, c, v, y) {
          c === void 0 && (c = 1),
            v === void 0 && (v = 1),
            y === void 0 && (y = 1)
          var x = function (Sn) {
              return (360 * Sn) / (2 * yo)
            },
            p = function (Sn) {
              return (2 * yo * Sn) / 360
            }
          ;(l = new go(l)), (i = new go(i))
          var $ = Array.from(l.lab()),
            S = $[0],
            O = $[1],
            N = $[2],
            X = Array.from(i.lab()),
            H = X[0],
            ne = X[1],
            te = X[2],
            ye = (S + H) / 2,
            Ee = Xt(Ge(O, 2) + Ge(N, 2)),
            Pe = Xt(Ge(ne, 2) + Ge(te, 2)),
            Ie = (Ee + Pe) / 2,
            ut = 0.5 * (1 - Xt(Ge(Ie, 7) / (Ge(Ie, 7) + Ge(25, 7)))),
            at = O * (1 + ut),
            Et = ne * (1 + ut),
            Se = Xt(Ge(at, 2) + Ge(N, 2)),
            z = Xt(Ge(Et, 2) + Ge(te, 2)),
            ce = (Se + z) / 2,
            ke = x(po(N, at)),
            we = x(po(te, Et)),
            ct = ke >= 0 ? ke : ke + 360,
            De = we >= 0 ? we : we + 360,
            Ce = bo(ct - De) > 180 ? (ct + De + 360) / 2 : (ct + De) / 2,
            Te =
              1 -
              0.17 * Wr(p(Ce - 30)) +
              0.24 * Wr(p(2 * Ce)) +
              0.32 * Wr(p(3 * Ce + 6)) -
              0.2 * Wr(p(4 * Ce - 63)),
            Ne = De - ct
          ;(Ne = bo(Ne) <= 180 ? Ne : De <= ct ? Ne + 360 : Ne - 360),
            (Ne = 2 * Xt(Se * z) * mo(p(Ne) / 2))
          var Fe = H - S,
            jt = z - Se,
            dn = 1 + (0.015 * Ge(ye - 50, 2)) / Xt(20 + Ge(ye - 50, 2)),
            hn = 1 + 0.045 * ce,
            Kn = 1 + 0.015 * ce * Te,
            Yn = 30 * jh(-Ge((Ce - 275) / 25, 2)),
            Zt = 2 * Xt(Ge(ce, 7) / (Ge(ce, 7) + Ge(25, 7))),
            En = -Zt * mo(2 * p(Yn)),
            mr = Xt(
              Ge(Fe / (c * dn), 2) +
                Ge(jt / (v * hn), 2) +
                Ge(Ne / (y * Kn), 2) +
                En * (jt / (v * hn)) * (Ne / (y * Kn)),
            )
          return Lh(0, Fh(100, mr))
        },
        wo = D,
        Dh = function (l, i, c) {
          c === void 0 && (c = "lab"), (l = new wo(l)), (i = new wo(i))
          var v = l.get(c),
            y = i.get(c),
            x = 0
          for (var p in v) {
            var $ = (v[p] || 0) - (y[p] || 0)
            x += $ * $
          }
          return Math.sqrt(x)
        },
        Hh = D,
        zh = function () {
          for (var l = [], i = arguments.length; i--; ) l[i] = arguments[i]
          try {
            return (
              new (Function.prototype.bind.apply(Hh, [null].concat(l)))(), !0
            )
          } catch {
            return !1
          }
        },
        xo = he,
        _o = Ks,
        qh = {
          cool: function () {
            return _o([xo.hsl(180, 1, 0.9), xo.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return _o(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          },
        },
        Ur = {
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
        ko = Object.keys(Ur);
      Js < ko.length;
      Js += 1
    ) {
      var $o = ko[Js]
      Ur[$o.toLowerCase()] = Ur[$o]
    }
    var Wh = Ur,
      st = he
    ;(st.average = sh),
      (st.bezier = fh),
      (st.blend = wh),
      (st.cubehelix = Sh),
      (st.mix = st.interpolate = Ql),
      (st.random = Oh),
      (st.scale = Ks),
      (st.analyze = ho.analyze),
      (st.contrast = Nh),
      (st.deltaE = Bh),
      (st.distance = Dh),
      (st.limits = ho.limits),
      (st.valid = zh),
      (st.scales = qh),
      (st.colors = Nl),
      (st.brewer = Wh)
    var Uh = st
    return Uh
  })
})(Fu)
var Ip = Fu.exports
const Ye = Op(Ip),
  Rp = {
    __name: "PanelDesign",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          let s = document.querySelectorAll("tr"),
            a
          r == 5
            ? (a = Ye("#e2e8f0"))
            : r == 4
              ? (a = Ye("#cbd5e1"))
              : r == 3
                ? (a = Ye("#475569"))
                : r == 2
                  ? (a = Ye("#1e293b"))
                  : r == 1 && (a = Ye("#0f172a"))
          for (let o = 1; o < s.length; o++)
            o % 2 == 0
              ? (s[o].style.backgroundColor = a.brighten(0))
              : (s[o].style.backgroundColor = a.brighten(0.2))
        }
      return (
        mt(() => {
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
  Tp = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Np = { class: "prose text-center" },
  Fp = w("br", null, null, -1),
  Lp = { href: "/pricing" },
  jp = { id: "cta" },
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
          let o = document.getElementsByName("name")[0].value,
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
                name: o,
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
                let m = document.getElementById("cta"),
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
                  m.appendChild(k)
                let C = m.getElementsByTagName("input")
                for (let P = 0; P < C.length; P++) C[P].style.display = "none"
                let j = m.getElementsByTagName("textarea")[0]
                j.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        pe(),
        ze(
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
            w("div", Np, [
              w(
                "h4",
                { class: M(["text-2xl", t(e.brightness)]) },
                [
                  xe(" Piqued your interest?"),
                  Fp,
                  xe(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              w("a", Lp, [
                w(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    "aria-": "",
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
              w(
                "h4",
                { class: M(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              w("form", jp, [
                w("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: M(["rounded p-2 w-full", n]),
                }),
                w("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                w("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                w(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    "aria-label": "Submit a contact form",
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
  Bp = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  Dp = { class: "flex flex-col items-center justify-center w-full" },
  Hp = { viewBox: "0 0 36 36", class: "chart" },
  zp = Bn(() =>
    w(
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
  qp = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  Wp = Bn(() =>
    w(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  Up = Bn(() =>
    w(
      "p",
      null,
      [
        xe(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        w("b", null, "315 KB"),
        xe(". That's half of the classic SNES game "),
        w("em", null, "The Legend of Zelda: A Link to The Past"),
        xe(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  Vp = Bn(() => w("p", null, "You want fast? Let's make it happen.", -1)),
  Gp = { id: "speedTable" },
  Kp = Bn(() =>
    w(
      "colgroup",
      null,
      [
        w("col", { style: { width: "30%" } }),
        w("col", { style: { width: "70%" } }),
      ],
      -1,
    ),
  ),
  Yp = { class: "flex" },
  Xp = { class: "flex" },
  Zp = Bn(() =>
    w(
      "tbody",
      null,
      [
        w("tr", null, [
          w("td", null, "Huge, resource-heavy images"),
          w("td", null, [
            xe(" Optimize your images. "),
            w("b", null, "A lot. "),
            xe(
              "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
            ),
          ]),
        ]),
        w("tr", null, [
          w("td", null, "Unused code, plugins, and assets"),
          w(
            "td",
            null,
            " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
          ),
        ]),
        w("tr", null, [
          w("td", null, "Inefficient, resource-heavy platforms"),
          w(
            "td",
            null,
            " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
          ),
        ]),
        w("tr", null, [
          w("td", null, "Uncached resources"),
          w(
            "td",
            null,
            " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
          ),
        ]),
      ],
      -1,
    ),
  ),
  Jp = Bn(() => w("div", { class: "h-6" }, null, -1)),
  Qp = {
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
  eb = Object.assign(Qp, {
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
        o = oe(() => {
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
            ? (h = Ye("#e2e8f0"))
            : f == 4
              ? (h = Ye("#cbd5e1"))
              : f == 3
                ? (h = Ye("#475569"))
                : f == 2
                  ? (h = Ye("#1e293b"))
                  : f == 1 && (h = Ye("#0f172a"))
          for (let m = 1; m < d.length; m++)
            m % 2 == 0
              ? (d[m].style.backgroundColor = h.brighten(0))
              : (d[m].style.backgroundColor = h.brighten(0.2))
        }
      return (
        mt(() => {
          u(t.brightness)
        }),
        nn(
          () => t.brightness,
          (f, d) => {
            u(f)
          },
        ),
        (f, d) => (
          pe(),
          ze("div", Bp, [
            w("div", Dp, [
              w(
                "div",
                { id: "perfChart", class: M(r(e.brightness)) },
                [
                  (pe(),
                  ze("svg", Hp, [
                    zp,
                    w(
                      "path",
                      {
                        class: M(["circle", s(e.brightness)]),
                        d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                        fill: "none",
                        stroke: o.value,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-dasharray":
                          f.circumference + " " + f.circumference,
                        "stroke-dashoffset": f.dashoffset,
                      },
                      null,
                      10,
                      qp,
                    ),
                  ])),
                  w(
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
              w(
                "p",
                {
                  class: M(["text-sm italic opacity-50 mt-3", a(e.brightness)]),
                },
                [
                  xe(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  w(
                    "a",
                    { href: "", class: M(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              w(
                "div",
                {
                  class: M([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  w(
                    "h2",
                    { class: M(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  w(
                    "h2",
                    { class: M(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  Wp,
                  Up,
                  Vp,
                  w("h3", { class: M(a(e.brightness)) }, "How I help", 2),
                  w("table", Gp, [
                    Kp,
                    w("thead", null, [
                      w("tr", null, [
                        w("th", null, [
                          w("div", Yp, [
                            w(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                xe(" Problem "),
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
                        w("th", null, [
                          w("div", Xp, [
                            w(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                xe(" What I can do "),
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
                    Zp,
                  ]),
                ],
                2,
              ),
              Jp,
              le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  tb = Tr(eb, [["__scopeId", "data-v-8a92440e"]]),
  nb = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  rb = { class: "lg:w-6/12 sm:w-12/12" },
  sb = w(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  ab = w("p", null, [w("b", null, " Don't worry, I can help!")], -1),
  lb = w(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  ob = { class: "flex items-center w-full" },
  ib = w(
    "p",
    null,
    [
      xe(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      w("em", null, "very"),
      xe(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  ub = w("div", { class: "h-3" }, null, -1),
  cb = { class: "flex items-center w-full" },
  fb = w(
    "p",
    null,
    [
      xe(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      w("em", null, "do"),
      xe(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  db = w("div", { class: "h-3" }, null, -1),
  hb = { class: "flex items-center w-full" },
  vb = w(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  gb = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  pb = { class: "prose text-center" },
  bb = w("div", { class: "h-3" }, null, -1),
  mb = w("div", { class: "h-3" }, null, -1),
  yb = {
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
        o = (f) => {
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
        pe(),
        ze("div", nb, [
          w("div", rb, [
            w(
              "h2",
              { class: M(["text-left text-5xl", u(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            w(
              "p",
              {
                class: M([
                  "text-left text-sm italic opacity-50 mt-3",
                  u(e.brightness),
                ]),
              },
              [
                xe(" Website already secure? "),
                w("b", null, [
                  w(
                    "a",
                    { href: "", class: M(o(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  xe(" are you?"),
                ]),
              ],
              2,
            ),
            w(
              "hr",
              { class: M(["mb-5 mt-1 w-6/12 opacity-25", u(e.brightness)]) },
              null,
              2,
            ),
            w(
              "div",
              { class: M(["prose", u(e.brightness)]) },
              [
                sb,
                ab,
                lb,
                w(
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
                    w("div", ob, [
                      le(
                        ue(as),
                        { class: M(["mr-2", o(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      w(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    ib,
                  ],
                  2,
                ),
                ub,
                w(
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
                    w("div", cb, [
                      le(
                        ue(as),
                        { size: "2rem", class: M(["mr-2", o(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      w(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    fb,
                  ],
                  2,
                ),
                db,
                w(
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
                    w("div", hb, [
                      le(
                        ue(as),
                        { class: M(["mr-2", o(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      w(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    vb,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          w("div", gb, [
            w(
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
                w("div", pb, [
                  w(
                    "h3",
                    {
                      class: M([
                        "text-5xl font-monospace mt-6",
                        o(e.brightness),
                      ]),
                    },
                    Rt(a(s.value)) + "+ ",
                    3,
                  ),
                  w(
                    "h3",
                    { class: M(["text-xl", u(e.brightness)]) },
                    [
                      xe(" attacks blocked on "),
                      w(
                        "a",
                        {
                          class: M(o(e.brightness)),
                          href: "https://bazaar.blendernation.com",
                        },
                        "BlenderNation Bazaar",
                        2,
                      ),
                    ],
                    2,
                  ),
                  w(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  w(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    [
                      w(
                        "a",
                        { href: "", class: M(o(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      xe(" about the Bazaar project "),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            bb,
            w("hr", { class: M(["opacity-50", u(e.brightness)]) }, null, 2),
            mb,
            le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  wb = {
    __name: "PanelDesignOverhaul",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          let s = document.querySelectorAll("tr"),
            a
          r == 5
            ? (a = Ye("#e2e8f0"))
            : r == 4
              ? (a = Ye("#cbd5e1"))
              : r == 3
                ? (a = Ye("#475569"))
                : r == 2
                  ? (a = Ye("#1e293b"))
                  : r == 1 && (a = Ye("#0f172a"))
          for (let o = 1; o < s.length; o++)
            o % 2 == 0
              ? (s[o].style.backgroundColor = a.brighten(0))
              : (s[o].style.backgroundColor = a.brighten(0.2))
        }
      return (
        mt(() => {
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
  xb = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  _b = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  kb = { class: "flex w-full" },
  $b = { class: "flex w-full pt-4 gap-2" },
  Eb = { class: "w-6/12" },
  Sb = { class: "w-6/12" },
  Pb = { class: "w-full flex" },
  Cb = { class: "w-6/12" },
  Mb = { class: "w-6/12 pb-3" },
  Ab = w("em", null, "huge", -1),
  Ob = w("div", { class: "h-6" }, null, -1),
  Ib = {
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
        o = (d) => {
          if (d >= 4) return "text-slate-800"
          if (d == 3) return "text-slate-200"
          if (d == 2) return "text-slate-300"
          if (d == 1) return "text-slate-300"
        },
        u = (d) => {
          let h = document.querySelectorAll("tr"),
            m
          d == 5
            ? (m = Ye("#e2e8f0"))
            : d == 4
              ? (m = Ye("#cbd5e1"))
              : d == 3
                ? (m = Ye("#475569"))
                : d == 2
                  ? (m = Ye("#1e293b"))
                  : d == 1 && (m = Ye("#0f172a"))
          for (let k = 1; k < h.length; k++)
            k % 2 == 0
              ? (h[k].style.backgroundColor = m.brighten(0))
              : (h[k].style.backgroundColor = m.brighten(0.2))
        },
        f = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        mt(() => {
          u(t.brightness)
        }),
        nn(
          () => t.brightness,
          (d, h) => {
            u(d)
          },
        ),
        (d, h) => (
          pe(),
          ze("div", xb, [
            w("div", _b, [
              w(
                "h2",
                { class: M(["text-5xl", o(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              w(
                "h3",
                { class: M(["text-2xl", o(e.brightness)]) },
                "Does yours?",
                2,
              ),
              w(
                "h4",
                { class: M(o(e.brightness)) },
                [
                  xe(" What are the "),
                  w(
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
              w(
                "p",
                { class: M(o(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              w(
                "p",
                { class: M(o(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              w(
                "h4",
                { class: M(o(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              w(
                "p",
                { class: M(o(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              w(
                "p",
                { class: M(o(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              w("div", kb, [
                w(
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
                    r.value ? (pe(), Ke(ue(Nu), { key: 0 })) : gt("", !0),
                    r.value ? gt("", !0) : (pe(), Ke(ue(Ug), { key: 1 })),
                    xe(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              w("div", $b, [
                w("div", Eb, [
                  w(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (pe(), Ke(ue(ii), { key: 0 })) : gt("", !0)],
                    2,
                  ),
                ]),
                w("div", Sb, [
                  w(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", a.value]) },
                    [r.value ? (pe(), Ke(ue(Ia), { key: 0 })) : gt("", !0)],
                    2,
                  ),
                ]),
              ]),
              w(
                "h4",
                { class: M(["text-2xl", o(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              w("div", Pb, [
                w("div", Cb, [
                  w(
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
                    [xe(" Submit "), le(ue(ii))],
                    2,
                  ),
                ]),
                w("div", Mb, [
                  w(
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
                    [xe(" Cancel "), le(ue(Ia))],
                    2,
                  ),
                ]),
              ]),
              w(
                "p",
                { class: M(o(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              w(
                "p",
                { class: M(o(e.brightness)) },
                [
                  xe(" Changes like these may seem small, but they make a "),
                  Ab,
                  xe(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            Ob,
            le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  Rb = ["onMouseover"],
  Tb = {
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
      const r = (a, o, u, f) => {
          if (o) {
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
        s = (a, o) => {
          if (o) return a >= 3 ? "text-slate-200" : "text-slate-800"
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-200"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        }
      return (a, o) => (
        pe(),
        Ke(ue(Lg), null, {
          default: ft(() => [
            le(
              ue(jg),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: ft(() => [
                  (pe(!0),
                  ze(
                    et,
                    null,
                    xa(
                      t.value,
                      (u) => (
                        pe(),
                        Ke(
                          ue(Bg),
                          {
                            key: u.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: ft(({ selected: f }) => [
                              w(
                                "div",
                                {
                                  class: M([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, f, ue(n), u.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (d) =>
                                    bt(n) ? (n.value = u.id) : (n = u.id),
                                  onMouseleave:
                                    o[0] ||
                                    (o[0] = (d) =>
                                      bt(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  u.id == 0
                                    ? (pe(),
                                      Ke(
                                        ue(as),
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
                                    : gt("", !0),
                                  u.id == 1
                                    ? (pe(),
                                      Ke(
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
                                    : gt("", !0),
                                  u.id == 2
                                    ? (pe(),
                                      Ke(
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
                                    : gt("", !0),
                                  u.id == 3
                                    ? (pe(),
                                      Ke(
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
                                    : gt("", !0),
                                  u.id == 4
                                    ? (pe(),
                                      Ke(
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
                                    : gt("", !0),
                                  u.id == 5
                                    ? (pe(),
                                      Ke(
                                        ue(Nu),
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
                                    : gt("", !0),
                                  w(
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
                                Rb,
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
                default: ft(() => [
                  le(
                    ue(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ft(() => [
                        le(tb, { brightness: e.brightness }, null, 8, [
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
                      default: ft(() => [
                        le(yb, { brightness: e.brightness }, null, 8, [
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
                      default: ft(() => [
                        le(wb, { brightness: e.brightness }, null, 8, [
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
                      default: ft(() => [
                        le(Tp, { brightness: e.brightness }, null, 8, [
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
                      default: ft(() => [
                        le(Rp, { brightness: e.brightness }, null, 8, [
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
                      default: ft(() => [
                        le(Ib, { brightness: e.brightness }, null, 8, [
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
  Nb = { href: "/pricing" },
  Fb = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = _e(!1)
      mt(() => {
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
        pe(),
        ze(
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
            w(
              "p",
              { class: M(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            w("a", Nb, [
              w(
                "button",
                {
                  "aria-label":
                    "Get a free site speed audit with recommendations for optimizing",
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
  hr = (e) => (Xa("data-v-23527c5f"), (e = e()), Za(), e),
  Lb = { class: "flex-col" },
  jb = { class: "prose py-5 flex-col w-full" },
  Bb = hr(() => w("br", null, null, -1)),
  Db = hr(() => w("br", null, null, -1)),
  Hb = { class: "flex" },
  zb = { class: "w-6/12" },
  qb = ["name", "checked", "onClick"],
  Wb = { class: "w-6/12" },
  Ub = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Vb = { class: "flex-col gap-4" },
  Gb = { class: "flex items-center" },
  Kb = ["name", "checked", "onClick"],
  Yb = { key: 0 },
  Xb = { key: 1 },
  Zb = { class: "" },
  Jb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Qb = { class: "flex-col" },
  em = { class: "flex justify-between" },
  tm = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  nm = { class: "gap-4 mt-4", name: "pricing" },
  rm = ["value"],
  sm = ["value"],
  am = { class: "flex gap-4", id: "leftInputs" },
  lm = { class: "flex gap-4", id: "rightInputs" },
  om = hr(() => w("br", null, null, -1)),
  im = hr(() => w("br", null, null, -1)),
  um = hr(() => w("br", null, null, -1)),
  cm = hr(() => w("br", null, null, -1)),
  fm = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (Z) => {
          Z.preventDefault()
          const ve = "pricing"
          let J = document.getElementsByName("name")[0].value,
            $e = document.getElementsByName("email")[0].value,
            Be = document.getElementsByName("website")[0].value,
            kt = document.getElementsByName("notes")[0].value,
            wt = document.getElementsByName("services")[0].value,
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
                services: wt,
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
        r = (Z) => {
          if (Z >= 4) return "text-emerald-500"
          if (Z == 3) return "text-orange-200"
          if (Z == 2) return "text-orange-500"
          if (Z == 1) return "text-orange-400"
        },
        s = (Z) => {
          if (Z >= 4) return "text-emerald-500"
          if (Z == 3) return "text-slate-800"
          if (Z == 2) return "text-orange-500"
          if (Z == 1) return "text-orange-400"
        },
        a = (Z) => {
          if (Z >= 4) return "text-slate-800"
          if (Z == 3) return "text-slate-200"
          if (Z == 2) return "text-slate-300"
          if (Z == 1) return "text-slate-300"
        },
        o = _e({
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
        u = oe(() =>
          o.value.speed.audit.enabled &&
          o.value.speed.optimize.enabled &&
          o.value.speed.caching.enabled &&
          o.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        f = oe(() =>
          o.value.security.audit.enabled &&
          o.value.security.ddosprotection.enabled &&
          o.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        d = oe(() =>
          o.value.accessibility.audit.enabled &&
          o.value.accessibility.levelA.enabled &&
          o.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        h = oe(() => 3 / 3),
        m = oe(
          () =>
            Object.values(o.value.speed).reduce(
              (Z, ve) => Z + (ve.enabled ? ve.price : 0),
              0,
            ) * u.value,
        ),
        k = oe(
          () =>
            Object.values(o.value.security).reduce(
              (Z, ve) => Z + (ve.enabled ? ve.price : 0),
              0,
            ) * f.value,
        ),
        C = oe(
          () =>
            Object.values(o.value.accessibility).reduce(
              (Z, ve) => Z + (ve.enabled ? ve.price : 0),
              0,
            ) * d.value,
        ),
        j = oe(
          () =>
            Object.values(o.value.designOverhaul).reduce(
              (Z, ve) => Z + (ve.enabled ? ve.price : 0),
              0,
            ) * h.value,
        ),
        _ = oe(() => {
          let Z = 0
          for (const [ve, J] of Object.entries(o.value.speed))
            J.enabled && (Z += J.price)
          return Z
        }),
        P = oe(() => {
          let Z = 0
          for (const [ve, J] of Object.entries(o.value.security))
            J.enabled && (Z += J.price)
          return Z
        }),
        R = oe(() => {
          let Z = 0
          for (const [ve, J] of Object.entries(o.value.accessibility))
            J.enabled && (Z += J.price)
          return Z
        }),
        U = oe(() => {
          let Z = 0
          for (const [ve, J] of Object.entries(o.value.designOverhaul))
            J.enabled && (Z += J.price)
          return Z
        }),
        q = () => {
          o.value.speed.audit.enabled &&
          o.value.speed.optimize.enabled &&
          o.value.speed.caching.enabled &&
          o.value.speed.images.enabled
            ? ((o.value.speed.audit.enabled = !1),
              (o.value.speed.optimize.enabled = !1),
              (o.value.speed.caching.enabled = !1),
              (o.value.speed.images.enabled = !1))
            : ((o.value.speed.audit.enabled = !0),
              (o.value.speed.optimize.enabled = !0),
              (o.value.speed.caching.enabled = !0),
              (o.value.speed.images.enabled = !0))
        },
        Y = () => {
          o.value.security.audit.enabled &&
          o.value.security.ddosprotection.enabled &&
          o.value.security.protection.enabled
            ? ((o.value.security.audit.enabled = !1),
              (o.value.security.ddosprotection.enabled = !1),
              (o.value.security.protection.enabled = !1))
            : ((o.value.security.audit.enabled = !0),
              (o.value.security.ddosprotection.enabled = !0),
              (o.value.security.protection.enabled = !0))
        },
        B = () => {
          o.value.accessibility.audit.enabled &&
          o.value.accessibility.levelA.enabled &&
          o.value.accessibility.levelAA.enabled
            ? ((o.value.accessibility.audit.enabled = !1),
              (o.value.accessibility.levelA.enabled = !1),
              (o.value.accessibility.levelAA.enabled = !1))
            : ((o.value.accessibility.audit.enabled = !0),
              (o.value.accessibility.levelA.enabled = !0),
              (o.value.accessibility.levelAA.enabled = !0))
        },
        D = () => {
          o.value.designOverhaul.designOverhaul.enabled
            ? (o.value.designOverhaul.designOverhaul.enabled = !1)
            : (o.value.designOverhaul.designOverhaul.enabled = !0)
        },
        fe = (Z) => {
          Z.title == "Speed"
            ? q()
            : Z.title == "Security"
              ? Y()
              : Z.title == "Accessibility"
                ? B()
                : Z.title == "Design Overhaul" && D()
        },
        he = (Z) => Object.values(Z.services).some((ve) => ve.enabled),
        Ze = _e([
          {
            title: "Speed",
            services: o.value.speed,
            enabled: !0,
            discount: u.value,
          },
          {
            title: "Security",
            services: o.value.security,
            enabled: !1,
            discount: f.value,
          },
          {
            title: "Accessibility",
            services: o.value.accessibility,
            enabled: !1,
            discount: d.value,
          },
          {
            title: "Design Overhaul",
            services: o.value.designOverhaul,
            enabled: !1,
            discount: h.value,
          },
        ]),
        We = (Z) => {
          if (Z.title === "Speed") return m.value
          if (Z.title === "Security") return k.value
          if (Z.title === "Accessibility") return C.value
          if (Z.title === "Design Overhaul") return j.value
        },
        yt = (Z) => {
          if (Z.title === "Speed") return _.value
          if (Z.title === "Security") return P.value
          if (Z.title === "Accessibility") return R.value
          if (Z.title === "Design Overhaul") return U.value
        },
        it = oe(
          () =>
            We(Ze.value[0]) +
            We(Ze.value[1]) +
            We(Ze.value[2]) +
            We(Ze.value[3]),
        ),
        Je = oe(() => {
          let Z = []
          for (const [ve, J] of Object.entries(o.value.speed))
            J.enabled && Z.push(J.title)
          for (const [ve, J] of Object.entries(o.value.security))
            J.enabled && Z.push(J.title)
          for (const [ve, J] of Object.entries(o.value.accessibility))
            J.enabled && Z.push(J.title)
          for (const [ve, J] of Object.entries(o.value.designOverhaul))
            J.enabled && Z.push(J.title)
          return Z
        }),
        Yt = (Z) => {}
      return (Z, ve) => (
        pe(),
        ze("div", Lb, [
          w("div", jb, [
            w(
              "h2",
              {
                class: M([
                  "text-5xl text-center text-semibold",
                  a(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            w(
              "p",
              { class: M(["text-center", a(n.brightness)]) },
              [
                xe(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                Bb,
                Db,
                xe(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                w(
                  "a",
                  {
                    href: "/contact",
                    class: M(["font-bold", r(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                xe(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (pe(!0),
          ze(
            et,
            null,
            xa(
              Ze.value,
              (J, $e) => (
                pe(),
                ze(
                  "div",
                  {
                    key: $e,
                    class: M([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      Yt(e.brightness),
                    ]),
                  },
                  [
                    w("div", Hb, [
                      w("div", zb, [
                        w(
                          "div",
                          {
                            class: M([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              a(n.brightness),
                            ]),
                          },
                          [
                            w(
                              "input",
                              {
                                type: "checkbox",
                                name: J.title,
                                checked: he(J),
                                onClick: (Be) => fe(J),
                                class: M([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              qb,
                            ),
                            w("h3", null, Rt(J.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      w("div", Wb, [
                        w(
                          "h3",
                          {
                            class: M([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            yt(J) != Math.floor(We(J))
                              ? (pe(), ze("span", Ub, "$" + Rt(yt(J)), 1))
                              : gt("", !0),
                            xe("$" + Rt(We(J)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    w(
                      "hr",
                      { class: M(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    w("div", Vb, [
                      (pe(!0),
                      ze(
                        et,
                        null,
                        xa(
                          J.services,
                          (Be, kt) => (
                            pe(),
                            ze(
                              "div",
                              {
                                key: kt,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                w("div", Gb, [
                                  w(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: Be.title,
                                      checked: Be.enabled,
                                      onClick: (wt) =>
                                        (Be.enabled = !Be.enabled),
                                      class: M([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    Kb,
                                  ),
                                  w(
                                    "p",
                                    { class: M(["", a(n.brightness)]) },
                                    [
                                      Be.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (pe(),
                                          ze("b", Yb, [
                                            w("em", null, Rt(Be.title), 1),
                                          ]))
                                        : (pe(),
                                          ze("span", Xb, Rt(Be.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                w("div", Zb, [
                                  w(
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
                                        ? (pe(),
                                          ze("span", Jb, "$" + Rt(Be.price), 1))
                                        : gt("", !0),
                                      xe("$" + Rt(Be.price * J.discount), 1),
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
          w("hr", { class: M(["my-4 w-full", r(n.brightness)]) }, null, 2),
          w("div", Qb, [
            w("div", em, [
              w(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              w(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                [
                  it.value != Math.floor(it.value)
                    ? (pe(), ze("span", tm, "$" + Rt(it.value), 1))
                    : gt("", !0),
                  xe("$" + Rt(it.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          w("form", nm, [
            w(
              "input",
              { type: "hidden", name: "services", value: Je.value },
              null,
              8,
              rm,
            ),
            w(
              "input",
              { type: "hidden", name: "total", value: it.value },
              null,
              8,
              sm,
            ),
            w("div", am, [
              w(
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
              w(
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
            w("div", lm, [
              w(
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
              w(
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
            w(
              "button",
              {
                "aria-label": "Submit a contact form",
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
          w(
            "p",
            { class: M(["text-center mt-4", a(n.brightness)]) },
            [
              xe(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              om,
              im,
              xe(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              w(
                "a",
                { href: "/contact", class: M(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              xe(" and we can get that figured out."),
              um,
              cm,
              xe("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  dm = Tr(fm, [["__scopeId", "data-v-23527c5f"]]),
  hm = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        pe(), Ke(dm, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  vm = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  gm = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  pm = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = _e(3),
        n = e,
        r = (o) => {
          ;(t.value = Number(o)),
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
      mt(() => {
        let o = window.localStorage
        o.getItem("brightness")
          ? (t.value = Number(o.getItem("brightness")))
          : o.setItem("brightness", t.value),
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
            a.meta.forEach((o) => {
              let u = document.querySelector(
                `meta[name="${o.name}"], meta[property="${o.property}"]`,
              )
              u
                ? u.setAttribute("content", o.content)
                : ((u = document.createElement("meta")),
                  o.name && u.setAttribute("name", o.name),
                  o.property && u.setAttribute("property", o.property),
                  u.setAttribute("content", o.content),
                  document.getElementsByTagName("head")[0].appendChild(u))
            })
        }),
        (o, u) => (
          pe(),
          ze(
            et,
            null,
            [
              w(
                "main",
                {
                  class: M([["w-dvw", s.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  le(_p, { "onUpdate:brightness": r }),
                  w("div", vm, [
                    e.component == "pricing"
                      ? (pe(),
                        ze(
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
                            le(hm, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : gt("", !0),
                    e.component == "home"
                      ? (pe(),
                        ze(
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
                      : gt("", !0),
                  ]),
                  w("div", gm, [
                    e.component == "home"
                      ? (pe(),
                        ze(
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
                            le(Tb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : gt("", !0),
                  ]),
                ],
                2,
              ),
              le(Fb, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  bm = Tr(pm, [["__scopeId", "data-v-4de8631d"]])
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Qn = typeof window < "u"
function mm(e) {
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
  ym = /\/$/,
  wm = (e) => e.replace(ym, "")
function da(e, t, n = "/") {
  let r,
    s = {},
    a = "",
    o = ""
  const u = t.indexOf("#")
  let f = t.indexOf("?")
  return (
    u < f && u >= 0 && (f = -1),
    f > -1 &&
      ((r = t.slice(0, f)),
      (a = t.slice(f + 1, u > -1 ? u : t.length)),
      (s = e(a))),
    u > -1 && ((r = r || t.slice(0, u)), (o = t.slice(u, t.length))),
    (r = $m(r ?? t, n)),
    { fullPath: r + (a && "?") + a + o, path: r, query: s, hash: o }
  )
}
function xm(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function ui(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function _m(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    ir(t.matched[r], n.matched[s]) &&
    Lu(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function ir(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Lu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!km(e[n], t[n])) return !1
  return !0
}
function km(e, t) {
  return zt(e) ? ci(e, t) : zt(t) ? ci(t, e) : e === t
}
function ci(e, t) {
  return zt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function $m(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1]
  ;(s === ".." || s === ".") && r.push("")
  let a = n.length - 1,
    o,
    u
  for (o = 0; o < r.length; o++)
    if (((u = r[o]), u !== "."))
      if (u === "..") a > 1 && a--
      else break
  return (
    n.slice(0, a).join("/") +
    "/" +
    r.slice(o - (o === r.length ? 1 : 0)).join("/")
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
function Em(e) {
  if (!e)
    if (Qn) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), wm(e)
}
const Sm = /^[^#]+#/
function Pm(e, t) {
  return e.replace(Sm, "#") + t
}
function Cm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Ps = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Mm(e) {
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
    t = Cm(s, e)
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
function Am(e, t) {
  Ra.set(e, t)
}
function Om(e) {
  const t = Ra.get(e)
  return Ra.delete(e), t
}
let Im = () => location.protocol + "//" + location.host
function ju(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let u = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      f = s.slice(u)
    return f[0] !== "/" && (f = "/" + f), ui(f, "")
  }
  return ui(n, e) + r + s
}
function Rm(e, t, n, r) {
  let s = [],
    a = [],
    o = null
  const u = ({ state: k }) => {
    const C = ju(e, location),
      j = n.value,
      _ = t.value
    let P = 0
    if (k) {
      if (((n.value = C), (t.value = k), o && o === j)) {
        o = null
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
    o = n.value
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
  function m() {
    for (const k of a) k()
    ;(a = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", h)
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", h, { passive: !0 }),
    { pauseListeners: f, listen: d, destroy: m }
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
function Tm(e) {
  const { history: t, location: n } = window,
    r = { value: ju(e, n) },
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
    const m = e.indexOf("#"),
      k =
        m > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(m)) + f
          : Im() + e + f
    try {
      t[h ? "replaceState" : "pushState"](d, "", k), (s.value = d)
    } catch (C) {
      console.error(C), n[h ? "replace" : "assign"](k)
    }
  }
  function o(f, d) {
    const h = Le({}, t.state, di(s.value.back, f, s.value.forward, !0), d, {
      position: s.value.position,
    })
    a(f, h, !0), (r.value = f)
  }
  function u(f, d) {
    const h = Le({}, s.value, t.state, { forward: f, scroll: Ps() })
    a(h.current, h, !0)
    const m = Le({}, di(r.value, f, null), { position: h.position + 1 }, d)
    a(f, m, !1), (r.value = f)
  }
  return { location: r, state: s, push: u, replace: o }
}
function Nm(e) {
  e = Em(e)
  const t = Tm(e),
    n = Rm(e, t.state, t.location, t.replace)
  function r(a, o = !0) {
    o || n.pauseListeners(), history.go(a)
  }
  const s = Le(
    { location: "", base: e, go: r, createHref: Pm.bind(null, e) },
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
function Fm(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Bu(e) {
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
  Du = Symbol("")
var hi
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(hi || (hi = {}))
function ur(e, t) {
  return Le(new Error(), { type: e, [Du]: !0 }, t)
}
function Jt(e, t) {
  return e instanceof Error && Du in e && (t == null || !!(e.type & t))
}
const vi = "[^/]+?",
  Lm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  jm = /[.+*?^${}()[\]/\\]/g
function Bm(e, t) {
  const n = Le({}, Lm, t),
    r = []
  let s = n.start ? "^" : ""
  const a = []
  for (const d of e) {
    const h = d.length ? [] : [90]
    n.strict && !d.length && (s += "/")
    for (let m = 0; m < d.length; m++) {
      const k = d[m]
      let C = 40 + (n.sensitive ? 0.25 : 0)
      if (k.type === 0)
        m || (s += "/"), (s += k.value.replace(jm, "\\$&")), (C += 40)
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
        m || (q = P && d.length < 2 ? `(?:/${q})` : "/" + q),
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
  const o = new RegExp(s, n.sensitive ? "" : "i")
  function u(d) {
    const h = d.match(o),
      m = {}
    if (!h) return null
    for (let k = 1; k < h.length; k++) {
      const C = h[k] || "",
        j = a[k - 1]
      m[j.name] = C && j.repeatable ? C.split("/") : C
    }
    return m
  }
  function f(d) {
    let h = "",
      m = !1
    for (const k of e) {
      ;(!m || !h.endsWith("/")) && (h += "/"), (m = !1)
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
                (h.endsWith("/") ? (h = h.slice(0, -1)) : (m = !0))
            else throw new Error(`Missing required param "${j}"`)
          h += U
        }
    }
    return h || "/"
  }
  return { re: o, score: r, keys: a, parse: u, stringify: f }
}
function Dm(e, t) {
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
function Hm(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const a = Dm(r[n], s[n])
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
const zm = { type: 0, value: "" },
  qm = /[a-zA-Z0-9_]/
function Wm(e) {
  if (!e) return [[]]
  if (e === "/") return [[zm]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(C) {
    throw new Error(`ERR (${n})/"${d}": ${C}`)
  }
  let n = 0,
    r = n
  const s = []
  let a
  function o() {
    a && s.push(a), (a = [])
  }
  let u = 0,
    f,
    d = "",
    h = ""
  function m() {
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
        f === "/" ? (d && m(), o()) : f === ":" ? (m(), (n = 1)) : k()
        break
      case 4:
        k(), (n = r)
        break
      case 1:
        f === "("
          ? (n = 2)
          : qm.test(f)
            ? k()
            : (m(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--)
        break
      case 2:
        f === ")"
          ? h[h.length - 1] == "\\"
            ? (h = h.slice(0, -1) + f)
            : (n = 3)
          : (h += f)
        break
      case 3:
        m(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--, (h = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), m(), o(), s
}
function Um(e, t, n) {
  const r = Bm(Wm(e.path), n),
    s = Le(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function Vm(e, t) {
  const n = [],
    r = new Map()
  t = mi({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(h) {
    return r.get(h)
  }
  function a(h, m, k) {
    const C = !k,
      j = Gm(h)
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
      if (m && Y[0] !== "/") {
        const B = m.record.path,
          D = B[B.length - 1] === "/" ? "" : "/"
        q.path = m.record.path + (Y && D + Y)
      }
      if (
        ((R = Um(q, m, _)),
        k
          ? k.alias.push(R)
          : ((U = U || R),
            U !== R && U.alias.push(R),
            C && h.name && !bi(R) && o(h.name)),
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
          o(U)
        }
      : $r
  }
  function o(h) {
    if (Bu(h)) {
      const m = r.get(h)
      m &&
        (r.delete(h),
        n.splice(n.indexOf(m), 1),
        m.children.forEach(o),
        m.alias.forEach(o))
    } else {
      const m = n.indexOf(h)
      m > -1 &&
        (n.splice(m, 1),
        h.record.name && r.delete(h.record.name),
        h.children.forEach(o),
        h.alias.forEach(o))
    }
  }
  function u() {
    return n
  }
  function f(h) {
    let m = 0
    for (
      ;
      m < n.length &&
      Hm(h, n[m]) >= 0 &&
      (h.record.path !== n[m].record.path || !Hu(h, n[m]));

    )
      m++
    n.splice(m, 0, h), h.record.name && !bi(h) && r.set(h.record.name, h)
  }
  function d(h, m) {
    let k,
      C = {},
      j,
      _
    if ("name" in h && h.name) {
      if (((k = r.get(h.name)), !k)) throw ur(1, { location: h })
      ;(_ = k.record.name),
        (C = Le(
          pi(
            m.params,
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
      if (((k = m.name ? r.get(m.name) : n.find((U) => U.re.test(m.path))), !k))
        throw ur(1, { location: h, currentLocation: m })
      ;(_ = k.record.name),
        (C = Le({}, m.params, h.params)),
        (j = k.stringify(C))
    }
    const P = []
    let R = k
    for (; R; ) P.unshift(R.record), (R = R.parent)
    return { name: _, path: j, params: C, matched: P, meta: Ym(P) }
  }
  return (
    e.forEach((h) => a(h)),
    {
      addRoute: a,
      resolve: d,
      removeRoute: o,
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
function Gm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Km(e),
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
function Km(e) {
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
function Ym(e) {
  return e.reduce((t, n) => Le(t, n.meta), {})
}
function mi(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function Hu(e, t) {
  return t.children.some((n) => n === e || Hu(e, n))
}
const zu = /#/g,
  Xm = /&/g,
  Zm = /\//g,
  Jm = /=/g,
  Qm = /\?/g,
  qu = /\+/g,
  e1 = /%5B/g,
  t1 = /%5D/g,
  Wu = /%5E/g,
  n1 = /%60/g,
  Uu = /%7B/g,
  r1 = /%7C/g,
  Vu = /%7D/g,
  s1 = /%20/g
function il(e) {
  return encodeURI("" + e)
    .replace(r1, "|")
    .replace(e1, "[")
    .replace(t1, "]")
}
function a1(e) {
  return il(e).replace(Uu, "{").replace(Vu, "}").replace(Wu, "^")
}
function Ta(e) {
  return il(e)
    .replace(qu, "%2B")
    .replace(s1, "+")
    .replace(zu, "%23")
    .replace(Xm, "%26")
    .replace(n1, "`")
    .replace(Uu, "{")
    .replace(Vu, "}")
    .replace(Wu, "^")
}
function l1(e) {
  return Ta(e).replace(Jm, "%3D")
}
function o1(e) {
  return il(e).replace(zu, "%23").replace(Qm, "%3F")
}
function i1(e) {
  return e == null ? "" : o1(e).replace(Zm, "%2F")
}
function fs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function u1(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const a = r[s].replace(qu, " "),
      o = a.indexOf("="),
      u = fs(o < 0 ? a : a.slice(0, o)),
      f = o < 0 ? null : fs(a.slice(o + 1))
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
    if (((n = l1(n)), r == null)) {
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
function c1(e) {
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
const f1 = Symbol(""),
  wi = Symbol(""),
  ul = Symbol(""),
  Gu = Symbol(""),
  Na = Symbol("")
function wr() {
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
    new Promise((o, u) => {
      const f = (m) => {
          m === !1
            ? u(ur(4, { from: n, to: t }))
            : m instanceof Error
              ? u(m)
              : Fm(m)
                ? u(ur(2, { from: t, to: m }))
                : (a &&
                    r.enterCallbacks[s] === a &&
                    typeof m == "function" &&
                    a.push(m),
                  o())
        },
        d = e.call(r && r.instances[s], t, n, f)
      let h = Promise.resolve(d)
      e.length < 3 && (h = h.then(f)), h.catch((m) => u(m))
    })
}
function ha(e, t, n, r) {
  const s = []
  for (const a of e)
    for (const o in a.components) {
      let u = a.components[o]
      if (!(t !== "beforeRouteEnter" && !a.instances[o]))
        if (d1(u)) {
          const d = (u.__vccOpts || u)[t]
          d && s.push(mn(d, n, r, a, o))
        } else {
          let f = u()
          s.push(() =>
            f.then((d) => {
              if (!d)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${a.path}"`),
                )
              const h = mm(d) ? d.default : d
              a.components[o] = h
              const k = (h.__vccOpts || h)[t]
              return k && mn(k, n, r, a, o)()
            }),
          )
        }
    }
  return s
}
function d1(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function xi(e) {
  const t = ht(ul),
    n = ht(Gu),
    r = oe(() => t.resolve(ue(e.to))),
    s = oe(() => {
      const { matched: f } = r.value,
        { length: d } = f,
        h = f[d - 1],
        m = n.matched
      if (!h || !m.length) return -1
      const k = m.findIndex(ir.bind(null, h))
      if (k > -1) return k
      const C = _i(f[d - 2])
      return d > 1 && _i(h) === C && m[m.length - 1].path !== C
        ? m.findIndex(ir.bind(null, f[d - 2]))
        : k
    }),
    a = oe(() => s.value > -1 && p1(n.params, r.value.params)),
    o = oe(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Lu(n.params, r.value.params),
    )
  function u(f = {}) {
    return g1(f)
      ? t[ue(e.replace) ? "replace" : "push"](ue(e.to)).catch($r)
      : Promise.resolve()
  }
  return {
    route: r,
    href: oe(() => r.value.href),
    isActive: a,
    isExactActive: o,
    navigate: u,
  }
}
const h1 = Ot({
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
    useLink: xi,
    setup(e, { slots: t }) {
      const n = Rr(xi(e)),
        { options: r } = ht(ul),
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
  v1 = h1
function g1(e) {
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
function p1(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!zt(s) || s.length !== r.length || r.some((a, o) => a !== s[o]))
      return !1
  }
  return !0
}
function _i(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const ki = (e, t, n) => e ?? t ?? n,
  b1 = Ot({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ht(Na),
        s = oe(() => e.route || r.value),
        a = ht(wi, 0),
        o = oe(() => {
          let d = ue(a)
          const { matched: h } = s.value
          let m
          for (; (m = h[d]) && !m.components; ) d++
          return d
        }),
        u = oe(() => s.value.matched[o.value])
      Gt(
        wi,
        oe(() => o.value + 1),
      ),
        Gt(f1, u),
        Gt(Na, s)
      const f = _e()
      return (
        nn(
          () => [f.value, u.value, e.name],
          ([d, h, m], [k, C, j]) => {
            h &&
              ((h.instances[m] = d),
              C &&
                C !== h &&
                d &&
                d === k &&
                (h.leaveGuards.size || (h.leaveGuards = C.leaveGuards),
                h.updateGuards.size || (h.updateGuards = C.updateGuards))),
              d &&
                h &&
                (!C || !ir(h, C) || !k) &&
                (h.enterCallbacks[m] || []).forEach((_) => _(d))
          },
          { flush: "post" },
        ),
        () => {
          const d = s.value,
            h = e.name,
            m = u.value,
            k = m && m.components[h]
          if (!k) return $i(n.default, { Component: k, route: d })
          const C = m.props[h],
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
                  R.component.isUnmounted && (m.instances[h] = null)
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
const m1 = b1
function y1(e) {
  const t = Vm(e.routes, e),
    n = e.parseQuery || u1,
    r = e.stringifyQuery || yi,
    s = e.history,
    a = wr(),
    o = wr(),
    u = wr(),
    f = S0(gn)
  let d = gn
  Qn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const h = fa.bind(null, (I) => "" + I),
    m = fa.bind(null, i1),
    k = fa.bind(null, fs)
  function C(I, Q) {
    let V, se
    return (
      Bu(I) ? ((V = t.getRecordMatcher(I)), (se = Q)) : (se = I),
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
        hash: fs(E.hash),
        redirectedFrom: void 0,
        href: T,
      })
    }
    let V
    if ("path" in I) V = Le({}, I, { path: da(n, I.path, Q.path).path })
    else {
      const E = Le({}, I.params)
      for (const A in E) E[A] == null && delete E[A]
      ;(V = Le({}, I, { params: m(E) })), (Q.params = m(Q.params))
    }
    const se = t.resolve(V, Q),
      Ae = I.hash || ""
    se.params = h(k(se.params))
    const g = xm(r, Le({}, I, { hash: a1(Ae), path: se.path })),
      b = s.createHref(g)
    return Le(
      { fullPath: g, hash: Ae, query: r === yi ? c1(I.query) : I.query || {} },
      se,
      { redirectedFrom: void 0, href: b },
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
      b = I.replace === !0,
      E = D(V)
    if (E)
      return fe(
        Le(U(E), {
          state: typeof E == "object" ? Le({}, Ae, E.state) : Ae,
          force: g,
          replace: b,
        }),
        Q || V,
      )
    const A = V
    A.redirectedFrom = Q
    let T
    return (
      !g &&
        _m(r, se, V) &&
        ((T = ur(16, { to: A, from: se })), wt(se, se, !0, !1)),
      (T ? Promise.resolve(T) : We(A, se))
        .catch((F) => (Jt(F) ? (Jt(F, 2) ? F : kt(F)) : $e(F, A, se)))
        .then((F) => {
          if (F) {
            if (Jt(F, 2))
              return fe(
                Le({ replace: b }, U(F.to), {
                  state: typeof F.to == "object" ? Le({}, Ae, F.to.state) : Ae,
                  force: g,
                }),
                Q || A,
              )
          } else F = it(A, se, !0, b, Ae)
          return yt(A, se, F), F
        })
    )
  }
  function he(I, Q) {
    const V = q(I, Q)
    return V ? Promise.reject(V) : Promise.resolve()
  }
  function Ze(I) {
    const Q = rt.values().next().value
    return Q && typeof Q.runWithContext == "function"
      ? Q.runWithContext(I)
      : I()
  }
  function We(I, Q) {
    let V
    const [se, Ae, g] = w1(I, Q)
    V = ha(se.reverse(), "beforeRouteLeave", I, Q)
    for (const E of se)
      E.leaveGuards.forEach((A) => {
        V.push(mn(A, I, Q))
      })
    const b = he.bind(null, I, Q)
    return (
      V.push(b),
      Ue(V)
        .then(() => {
          V = []
          for (const E of a.list()) V.push(mn(E, I, Q))
          return V.push(b), Ue(V)
        })
        .then(() => {
          V = ha(Ae, "beforeRouteUpdate", I, Q)
          for (const E of Ae)
            E.updateGuards.forEach((A) => {
              V.push(mn(A, I, Q))
            })
          return V.push(b), Ue(V)
        })
        .then(() => {
          V = []
          for (const E of g)
            if (E.beforeEnter)
              if (zt(E.beforeEnter))
                for (const A of E.beforeEnter) V.push(mn(A, I, Q))
              else V.push(mn(E.beforeEnter, I, Q))
          return V.push(b), Ue(V)
        })
        .then(
          () => (
            I.matched.forEach((E) => (E.enterCallbacks = {})),
            (V = ha(g, "beforeRouteEnter", I, Q)),
            V.push(b),
            Ue(V)
          ),
        )
        .then(() => {
          V = []
          for (const E of o.list()) V.push(mn(E, I, Q))
          return V.push(b), Ue(V)
        })
        .catch((E) => (Jt(E, 8) ? E : Promise.reject(E)))
    )
  }
  function yt(I, Q, V) {
    u.list().forEach((se) => Ze(() => se(I, Q, V)))
  }
  function it(I, Q, V, se, Ae) {
    const g = q(I, Q)
    if (g) return g
    const b = Q === gn,
      E = Qn ? history.state : {}
    V &&
      (se || b
        ? s.replace(I.fullPath, Le({ scroll: b && E && E.scroll }, Ae))
        : s.push(I.fullPath, Ae)),
      (f.value = I),
      wt(I, Q, V, b),
      kt()
  }
  let Je
  function Yt() {
    Je ||
      (Je = s.listen((I, Q, V) => {
        if (!ln.listening) return
        const se = R(I),
          Ae = D(se)
        if (Ae) {
          fe(Le(Ae, { replace: !0 }), se).catch($r)
          return
        }
        d = se
        const g = f.value
        Qn && Am(fi(g.fullPath, V.delta), Ps()),
          We(se, g)
            .catch((b) =>
              Jt(b, 12)
                ? b
                : Jt(b, 2)
                  ? (fe(b.to, se)
                      .then((E) => {
                        Jt(E, 20) &&
                          !V.delta &&
                          V.type === Ir.pop &&
                          s.go(-1, !1)
                      })
                      .catch($r),
                    Promise.reject())
                  : (V.delta && s.go(-V.delta, !1), $e(b, se, g)),
            )
            .then((b) => {
              ;(b = b || it(se, g, !1)),
                b &&
                  (V.delta && !Jt(b, 8)
                    ? s.go(-V.delta, !1)
                    : V.type === Ir.pop && Jt(b, 20) && s.go(-1, !1)),
                yt(se, g, b)
            })
            .catch($r)
      }))
  }
  let Z = wr(),
    ve = wr(),
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
          Z.add([I, Q])
        })
  }
  function kt(I) {
    return (
      J ||
        ((J = !I),
        Yt(),
        Z.list().forEach(([Q, V]) => (I ? V(I) : Q())),
        Z.reset()),
      I
    )
  }
  function wt(I, Q, V, se) {
    const { scrollBehavior: Ae } = e
    if (!Qn || !Ae) return Promise.resolve()
    const g =
      (!V && Om(fi(I.fullPath, 0))) ||
      ((se || !V) && history.state && history.state.scroll) ||
      null
    return Ji()
      .then(() => Ae(I, Q, g))
      .then((b) => b && Mm(b))
      .catch((b) => $e(b, I, Q))
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
      beforeResolve: o.add,
      afterEach: u.add,
      onError: ve.add,
      isReady: Be,
      install(I) {
        const Q = this
        I.component("RouterLink", v1),
          I.component("RouterView", m1),
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
        I.provide(ul, Q), I.provide(Gu, qi(V)), I.provide(Na, f)
        const se = I.unmount
        rt.add(I),
          (I.unmount = function () {
            rt.delete(I),
              rt.size < 1 &&
                ((d = gn),
                Je && Je(),
                (Je = null),
                (f.value = gn),
                (qt = !1),
                (J = !1)),
              se()
          })
      },
    }
  function Ue(I) {
    return I.reduce((Q, V) => Q.then(() => Ze(V)), Promise.resolve())
  }
  return ln
}
function w1(e, t) {
  const n = [],
    r = [],
    s = [],
    a = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < a; o++) {
    const u = t.matched[o]
    u && (e.matched.find((d) => ir(d, u)) ? r.push(u) : n.push(u))
    const f = e.matched[o]
    f && (t.matched.find((d) => ir(d, f)) || s.push(f))
  }
  return [n, r, s]
}
const cl = [
  { path: "/", component: null, props: { component: "home" } },
  { path: "/pricing", component: null, props: { component: "pricing" } },
  { path: "/contact", component: null, props: { component: "contact" } },
]
cl.map((e) => e.path)
cl.forEach((e) => {
  e.component = bm
})
const x1 = y1({ history: Nm(), routes: cl }),
  Ku = og(dg)
Ku.use(x1)
Ku.mount("#app")
