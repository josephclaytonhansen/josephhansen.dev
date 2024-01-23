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
function ja(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const He = {},
  er = [],
  Tt = () => {},
  Gh = () => !1,
  ds = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Fa = (e) => e.startsWith("onUpdate:"),
  dt = Object.assign,
  La = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Kh = Object.prototype.hasOwnProperty,
  Pe = (e, t) => Kh.call(e, t),
  ge = Array.isArray,
  tr = (e) => hs(e) === "[object Map]",
  Si = (e) => hs(e) === "[object Set]",
  be = (e) => typeof e == "function",
  tt = (e) => typeof e == "string",
  cr = (e) => typeof e == "symbol",
  ze = (e) => e !== null && typeof e == "object",
  Ci = (e) => (ze(e) || be(e)) && be(e.then) && be(e.catch),
  Pi = Object.prototype.toString,
  hs = (e) => Pi.call(e),
  Yh = (e) => hs(e).slice(8, -1),
  Mi = (e) => hs(e) === "[object Object]",
  Ba = (e) =>
    tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  es = ja(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  vs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Xh = /-(\w)/g,
  Yt = vs((e) => e.replace(Xh, (t, n) => (n ? n.toUpperCase() : ""))),
  Zh = /\B([A-Z])/g,
  fr = vs((e) => e.replace(Zh, "-$1").toLowerCase()),
  ps = vs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ta = vs((e) => (e ? `on${ps(e)}` : "")),
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
const Ai = () =>
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
        s = tt(r) ? t0(r) : Da(r)
      if (s) for (const a in s) t[a] = s[a]
    }
    return t
  } else if (tt(e) || ze(e)) return e
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
  else if (ge(e))
    for (let n = 0; n < e.length; n++) {
      const r = M(e[n])
      r && (t += r + " ")
    }
  else if (ze(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const n0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  r0 = ja(n0)
function Oi(e) {
  return !!e || e === ""
}
const Rt = (e) =>
    tt(e)
      ? e
      : e == null
        ? ""
        : ge(e) || (ze(e) && (e.toString === Pi || !be(e.toString)))
          ? JSON.stringify(e, Ii, 2)
          : String(e),
  Ii = (e, t) =>
    t && t.__v_isRef
      ? Ii(e, t.value)
      : tr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], a) => ((n[na(r, a) + " =>"] = s), n),
              {},
            ),
          }
        : Si(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => na(n)) }
          : cr(t)
            ? na(t)
            : ze(t) && !ge(t) && !Mi(t)
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
      ;(this._dirtyLevel = 0), this._queryings++, Fn()
      for (const t of this.deps)
        if (t.computed && (o0(t.computed), this._dirtyLevel >= 2)) break
      Ln(), this._queryings--
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
      Co(this), this._runnings--, (On = n), (wn = t)
    }
  }
  stop() {
    var t
    this.active &&
      (So(this),
      Co(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function o0(e) {
  return e.value
}
function So(e) {
  e._trackId++, (e._depsLength = 0)
}
function Co(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Ri(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Ri(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let wn = !0,
  pa = 0
const Ti = []
function Fn() {
  Ti.push(wn), (wn = !1)
}
function Ln() {
  const e = Ti.pop()
  wn = e === void 0 ? !0 : e
}
function za() {
  pa++
}
function qa() {
  for (pa--; !pa && ga.length; ) ga.shift()()
}
function Ni(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Ri(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const ga = []
function ji(e, t, n) {
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
          (r.trigger(), r.scheduler && ga.push(r.scheduler))
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
function St(e, t, n) {
  if (wn && On) {
    let r = ba.get(e)
    r || ba.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Fi(() => r.delete(n)))), Ni(On, s)
  }
}
function nn(e, t, n, r, s, a) {
  const i = ba.get(e)
  if (!i) return
  let u = []
  if (t === "clear") u = [...i.values()]
  else if (n === "length" && ge(e)) {
    const f = Number(r)
    i.forEach((d, h) => {
      ;(h === "length" || (!cr(h) && h >= f)) && u.push(d)
    })
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        ge(e)
          ? Ba(n) && u.push(i.get("length"))
          : (u.push(i.get(In)), tr(e) && u.push(i.get(ma)))
        break
      case "delete":
        ge(e) || (u.push(i.get(In)), tr(e) && u.push(i.get(ma)))
        break
      case "set":
        tr(e) && u.push(i.get(In))
        break
    }
  za()
  for (const f of u) f && ji(f, 3)
  qa()
}
const i0 = ja("__proto__,__v_isRef,__isVue"),
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
        const r = Ie(this)
        for (let a = 0, i = this.length; a < i; a++) St(r, "get", a + "")
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(Ie)) : s
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Fn(), za()
        const r = Ie(this)[t].apply(this, n)
        return qa(), Ln(), r
      }
    }),
    e
  )
}
function c0(e) {
  const t = Ie(this)
  return St(t, "has", e), t.hasOwnProperty(e)
}
class Bi {
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
      return r === (s ? (a ? k0 : qi) : a ? zi : Hi).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = ge(t)
    if (!s) {
      if (i && Pe(Po, n)) return Reflect.get(Po, n, r)
      if (n === "hasOwnProperty") return c0
    }
    const u = Reflect.get(t, n, r)
    return (cr(n) ? Li.has(n) : i0(n)) || (s || St(t, "get", n), a)
      ? u
      : pt(u)
        ? i && Ba(n)
          ? u
          : u.value
        : ze(u)
          ? s
            ? Ui(u)
            : Rr(u)
          : u
  }
}
class Di extends Bi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let a = t[n]
    if (!this._shallow) {
      const f = sr(a)
      if (
        (!os(r) && !sr(r) && ((a = Ie(a)), (r = Ie(r))),
        !ge(t) && pt(a) && !pt(r))
      )
        return f ? !1 : ((a.value = r), !0)
    }
    const i = ge(t) && Ba(n) ? Number(n) < t.length : Pe(t, n),
      u = Reflect.set(t, n, r, s)
    return (
      t === Ie(s) && (i ? _n(r, a) && nn(t, "set", n, r) : nn(t, "add", n, r)),
      u
    )
  }
  deleteProperty(t, n) {
    const r = Pe(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && nn(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!cr(n) || !Li.has(n)) && St(t, "has", n), r
  }
  ownKeys(t) {
    return St(t, "iterate", ge(t) ? "length" : In), Reflect.ownKeys(t)
  }
}
class f0 extends Bi {
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
const d0 = new Di(),
  h0 = new f0(),
  v0 = new Di(!0),
  Wa = (e) => e,
  gs = (e) => Reflect.getPrototypeOf(e)
function Vr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = Ie(e),
    a = Ie(t)
  n || (_n(t, a) && St(s, "get", t), St(s, "get", a))
  const { has: i } = gs(s),
    u = r ? Wa : n ? Ga : Sr
  if (i.call(s, t)) return u(e.get(t))
  if (i.call(s, a)) return u(e.get(a))
  e !== s && e.get(t)
}
function Gr(e, t = !1) {
  const n = this.__v_raw,
    r = Ie(n),
    s = Ie(e)
  return (
    t || (_n(e, s) && St(r, "has", e), St(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function Kr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && St(Ie(e), "iterate", In), Reflect.get(e, "size", e)
  )
}
function Mo(e) {
  e = Ie(e)
  const t = Ie(this)
  return gs(t).has.call(t, e) || (t.add(e), nn(t, "add", e, e)), this
}
function Ao(e, t) {
  t = Ie(t)
  const n = Ie(this),
    { has: r, get: s } = gs(n)
  let a = r.call(n, e)
  a || ((e = Ie(e)), (a = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), a ? _n(t, i) && nn(n, "set", e, t) : nn(n, "add", e, t), this
  )
}
function Oo(e) {
  const t = Ie(this),
    { has: n, get: r } = gs(t)
  let s = n.call(t, e)
  s || ((e = Ie(e)), (s = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return s && nn(t, "delete", e, void 0), a
}
function Io() {
  const e = Ie(this),
    t = e.size !== 0,
    n = e.clear()
  return t && nn(e, "clear", void 0, void 0), n
}
function Yr(e, t) {
  return function (r, s) {
    const a = this,
      i = a.__v_raw,
      u = Ie(i),
      f = t ? Wa : e ? Ga : Sr
    return (
      !e && St(u, "iterate", In), i.forEach((d, h) => r.call(s, f(d), f(h), a))
    )
  }
}
function Xr(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      a = Ie(s),
      i = tr(a),
      u = e === "entries" || (e === Symbol.iterator && i),
      f = e === "keys" && i,
      d = s[e](...r),
      h = n ? Wa : t ? Ga : Sr
    return (
      !t && St(a, "iterate", f ? ma : In),
      {
        next() {
          const { value: b, done: k } = d.next()
          return k
            ? { value: b, done: k }
            : { value: u ? [h(b[0]), h(b[1])] : h(b), done: k }
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
function p0() {
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
const [g0, b0, m0, y0] = p0()
function Ua(e, t) {
  const n = t ? (e ? y0 : m0) : e ? b0 : g0
  return (r, s, a) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Pe(n, s) && s in r ? n : r, s, a)
}
const w0 = { get: Ua(!1, !1) },
  x0 = { get: Ua(!1, !0) },
  _0 = { get: Ua(!0, !1) },
  Hi = new WeakMap(),
  zi = new WeakMap(),
  qi = new WeakMap(),
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
  return sr(e) ? e : Va(e, !1, d0, w0, Hi)
}
function Wi(e) {
  return Va(e, !1, v0, x0, zi)
}
function Ui(e) {
  return Va(e, !0, h0, _0, qi)
}
function Va(e, t, n, r, s) {
  if (!ze(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
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
function os(e) {
  return !!(e && e.__v_isShallow)
}
function Vi(e) {
  return nr(e) || sr(e)
}
function Ie(e) {
  const t = e && e.__v_raw
  return t ? Ie(t) : e
}
function Gi(e) {
  return ls(e, "__v_skip", !0), e
}
const Sr = (e) => (ze(e) ? Rr(e) : e),
  Ga = (e) => (ze(e) ? Ui(e) : e)
class Ki {
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
    const t = Ie(this)
    return (
      Yi(t),
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
    new Ki(r, s, a || !s, n)
  )
}
function Yi(e) {
  wn &&
    On &&
    ((e = Ie(e)),
    Ni(
      On,
      e.dep ||
        (e.dep = Fi(() => (e.dep = void 0), e instanceof Ki ? e : void 0)),
    ))
}
function ya(e, t = 3, n) {
  e = Ie(e)
  const r = e.dep
  r && ji(r, t)
}
function pt(e) {
  return !!(e && e.__v_isRef === !0)
}
function _e(e) {
  return Xi(e, !1)
}
function C0(e) {
  return Xi(e, !0)
}
function Xi(e, t) {
  return pt(e) ? e : new P0(e, t)
}
class P0 {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Ie(t)),
      (this._value = n ? t : Sr(t))
  }
  get value() {
    return Yi(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || os(t) || sr(t)
    ;(t = n ? t : Ie(t)),
      _n(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Sr(t)), ya(this, 3))
  }
}
function fe(e) {
  return pt(e) ? e.value : e
}
const M0 = {
  get: (e, t, n) => fe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return pt(s) && !pt(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function Zi(e) {
  return nr(e) ? e : new Proxy(e, M0)
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
        Ci(a) &&
        a.catch((i) => {
          bs(i, t, n)
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
      xn(f, null, 10, [e, i, u])
      return
    }
  }
  A0(e, n, s, r)
}
function A0(e, t, n, r = !0) {
  console.error(e)
}
let Cr = !1,
  wa = !1
const vt = []
let Gt = 0
const rr = []
let en = null,
  Mn = 0
const Ji = Promise.resolve()
let Ka = null
function Qi(e) {
  const t = Ka || Ji
  return e ? t.then(this ? e.bind(this) : e) : t
}
function O0(e) {
  let t = Gt + 1,
    n = vt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = vt[r],
      a = Pr(s)
    a < e || (a === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function Ya(e) {
  ;(!vt.length || !vt.includes(e, Cr && e.allowRecurse ? Gt + 1 : Gt)) &&
    (e.id == null ? vt.push(e) : vt.splice(O0(e.id), 0, e), eu())
}
function eu() {
  !Cr && !wa && ((wa = !0), (Ka = Ji.then(nu)))
}
function I0(e) {
  const t = vt.indexOf(e)
  t > Gt && vt.splice(t, 1)
}
function R0(e) {
  ge(e)
    ? rr.push(...e)
    : (!en || !en.includes(e, e.allowRecurse ? Mn + 1 : Mn)) && rr.push(e),
    eu()
}
function Ro(e, t, n = Cr ? Gt + 1 : 0) {
  for (; n < vt.length; n++) {
    const r = vt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      vt.splice(n, 1), n--, r()
    }
  }
}
function tu(e) {
  if (rr.length) {
    const t = [...new Set(rr)]
    if (((rr.length = 0), en)) {
      en.push(...t)
      return
    }
    for (en = t, en.sort((n, r) => Pr(n) - Pr(r)), Mn = 0; Mn < en.length; Mn++)
      en[Mn]()
    ;(en = null), (Mn = 0)
  }
}
const Pr = (e) => (e.id == null ? 1 / 0 : e.id),
  T0 = (e, t) => {
    const n = Pr(e) - Pr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function nu(e) {
  ;(wa = !1), (Cr = !0), vt.sort(T0)
  try {
    for (Gt = 0; Gt < vt.length; Gt++) {
      const t = vt[Gt]
      t && t.active !== !1 && xn(t, null, 14)
    }
  } finally {
    ;(Gt = 0),
      (vt.length = 0),
      tu(),
      (Cr = !1),
      (Ka = null),
      (vt.length || rr.length) && nu()
  }
}
function N0(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || He
  let s = n
  const a = t.startsWith("update:"),
    i = a && t.slice(7)
  if (i && i in r) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: b, trim: k } = r[h] || He
    k && (s = n.map((P) => (tt(P) ? P.trim() : P))), b && (s = n.map(va))
  }
  let u,
    f = r[(u = ta(t))] || r[(u = ta(Yt(t)))]
  !f && a && (f = r[(u = ta(fr(t)))]), f && Ht(f, e, 6, s)
  const d = r[u + "Once"]
  if (d) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[u]) return
    ;(e.emitted[u] = !0), Ht(d, e, 6, s)
  }
}
function ru(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const a = e.emits
  let i = {},
    u = !1
  if (!be(e)) {
    const f = (d) => {
      const h = ru(d, t, !0)
      h && ((u = !0), dt(i, h))
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  return !a && !u
    ? (ze(e) && r.set(e, null), null)
    : (ge(a) ? a.forEach((f) => (i[f] = null)) : dt(i, a),
      ze(e) && r.set(e, i),
      i)
}
function ms(e, t) {
  return !e || !ds(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Pe(e, t[0].toLowerCase() + t.slice(1)) || Pe(e, fr(t)) || Pe(e, t))
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
function ut(e, t = Nt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Wo(-1)
    const a = is(t)
    let i
    try {
      i = e(...s)
    } finally {
      is(a), r._d && Wo(1)
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
    renderCache: b,
    data: k,
    setupState: P,
    ctx: F,
    inheritAttrs: _,
  } = e
  let C, R
  const V = is(e)
  try {
    if (n.shapeFlag & 4) {
      const X = s || r,
        B = X
      ;(C = Vt(h.call(B, X, b, a, P, k, F))), (R = f)
    } else {
      const X = t
      ;(C = Vt(
        X.length > 1 ? X(a, { attrs: f, slots: u, emit: d }) : X(a, null),
      )),
        (R = t.props ? f : j0(f))
    }
  } catch (X) {
    ;(kr.length = 0), bs(X, e, 1), (C = le(Nn))
  }
  let W = C
  if (R && _ !== !1) {
    const X = Object.keys(R),
      { shapeFlag: B } = W
    X.length && B & 7 && (i && X.some(Fa) && (R = F0(R, i)), (W = jn(W, R)))
  }
  return (
    n.dirs && ((W = jn(W)), (W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (W.transition = n.transition),
    (C = W),
    is(V),
    C
  )
}
const j0 = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || ds(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  F0 = (e, t) => {
    const n = {}
    for (const r in e) (!Fa(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function L0(e, t, n) {
  const { props: r, children: s, component: a } = e,
    { props: i, children: u, patchFlag: f } = t,
    d = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && f >= 0) {
    if (f & 1024) return !0
    if (f & 16) return r ? To(r, i, d) : !!i
    if (f & 8) {
      const h = t.dynamicProps
      for (let b = 0; b < h.length; b++) {
        const k = h[b]
        if (i[k] !== r[k] && !ms(d, k)) return !0
      }
    }
  } else
    return (s || u) && (!u || !u.$stable)
      ? !0
      : r === i
        ? !1
        : r
          ? i
            ? To(r, i, d)
            : !0
          : !!i
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
const su = "components",
  D0 = "directives"
function H0(e, t) {
  return au(su, e, !0, t) || e
}
const z0 = Symbol.for("v-ndc")
function q0(e) {
  return au(D0, e)
}
function au(e, t, n = !0, r = !1) {
  const s = Nt || ct
  if (s) {
    const a = s.type
    if (e === su) {
      const u = Rv(a, !1)
      if (u && (u === t || u === Yt(t) || u === ps(Yt(t)))) return a
    }
    const i = No(s[e] || a[e], t) || No(s.appContext[e], t)
    return !i && r ? a : i
  }
}
function No(e, t) {
  return e && (e[t] || e[Yt(t)] || e[ps(Yt(t))])
}
const W0 = (e) => e.__isSuspense
function U0(e, t) {
  t && t.pendingBranch
    ? ge(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : R0(e)
}
function sn(e, t) {
  return Ja(e, null, t)
}
const Zr = {}
function rn(e, t, n) {
  return Ja(e, t, n)
}
function Ja(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: a, onTrack: i, onTrigger: u } = He,
) {
  var f
  if (t && a) {
    const B = t
    t = (...D) => {
      B(...D), X()
    }
  }
  const d = l0() === ((f = ct) == null ? void 0 : f.scope) ? ct : null
  let h,
    b = !1,
    k = !1
  if (
    (pt(e)
      ? ((h = () => e.value), (b = os(e)))
      : nr(e)
        ? ((h = () => e), (r = !0))
        : ge(e)
          ? ((k = !0),
            (b = e.some((B) => nr(B) || os(B))),
            (h = () =>
              e.map((B) => {
                if (pt(B)) return B.value
                if (nr(B)) return An(B)
                if (be(B)) return xn(B, d, 2)
              })))
          : be(e)
            ? t
              ? (h = () => xn(e, d, 2))
              : (h = () => {
                  if (!(d && d.isUnmounted)) return P && P(), Ht(e, d, 3, [F])
                })
            : (h = Tt),
    t && r)
  ) {
    const B = h
    h = () => An(B())
  }
  let P,
    F = (B) => {
      P = W.onStop = () => {
        xn(B, d, 4), (P = W.onStop = void 0)
      }
    },
    _
  if (ks)
    if (
      ((F = Tt),
      t ? n && Ht(t, d, 3, [h(), k ? [] : void 0, F]) : h(),
      s === "sync")
    ) {
      const B = jv()
      _ = B.__watcherHandles || (B.__watcherHandles = [])
    } else return Tt
  let C = k ? new Array(e.length).fill(Zr) : Zr
  const R = () => {
    if (!(!W.active || !W.dirty))
      if (t) {
        const B = W.run()
        ;(r || b || (k ? B.some((D, de) => _n(D, C[de])) : _n(B, C))) &&
          (P && P(),
          Ht(t, d, 3, [B, C === Zr ? void 0 : k && C[0] === Zr ? [] : C, F]),
          (C = B))
      } else W.run()
  }
  R.allowRecurse = !!t
  let V
  s === "sync"
    ? (V = R)
    : s === "post"
      ? (V = () => Et(R, d && d.suspense))
      : ((R.pre = !0), d && (R.id = d.uid), (V = () => Ya(R)))
  const W = new Ha(h, Tt, V),
    X = () => {
      W.stop(), d && d.scope && La(d.scope.effects, W)
    }
  return (
    t
      ? n
        ? R()
        : (C = W.run())
      : s === "post"
        ? Et(W.run.bind(W), d && d.suspense)
        : W.run(),
    _ && _.push(X),
    X
  )
}
function V0(e, t, n) {
  const r = this.proxy,
    s = tt(e) ? (e.includes(".") ? lu(r, e) : () => r[e]) : e.bind(r, r)
  let a
  be(t) ? (a = t) : ((a = t.handler), (n = t))
  const i = ct
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
  if (!ze(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), pt(e))) An(e.value, t)
  else if (ge(e)) for (let n = 0; n < e.length; n++) An(e[n], t)
  else if (Si(e) || tr(e))
    e.forEach((n) => {
      An(n, t)
    })
  else if (Mi(e)) for (const n in e) An(e[n], t)
  return e
}
function ou(e, t) {
  const n = Nt
  if (n === null) return e
  const r = $s(n) || n.proxy,
    s = e.dirs || (e.dirs = [])
  for (let a = 0; a < t.length; a++) {
    let [i, u, f, d = He] = t[a]
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
function Cn(e, t, n, r) {
  const s = e.dirs,
    a = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const u = s[i]
    a && (u.oldValue = a[i].value)
    let f = u.dir[r]
    f && (Fn(), Ht(f, n, 8, [e.el, u, e, t]), Ln())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function At(e, t) {
  return be(e) ? dt({ name: e.name }, t, { setup: e }) : e
}
const ns = (e) => !!e.type.__asyncLoader,
  iu = (e) => e.type.__isKeepAlive
function G0(e, t) {
  uu(e, "a", t)
}
function K0(e, t) {
  uu(e, "da", t)
}
function uu(e, t, n = ct) {
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
    for (; s && s.parent; ) iu(s.parent.vnode) && Y0(r, t, n, s), (s = s.parent)
  }
}
function Y0(e, t, n, r) {
  const s = ws(t, e, r, !0)
  kn(() => {
    La(r[t], s)
  }, n)
}
function ws(e, t, n = ct, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          Fn(), ar(n)
          const u = Ht(t, n, e, i)
          return Rn(), Ln(), u
        })
    return r ? s.unshift(a) : s.push(a), a
  }
}
const an =
    (e) =>
    (t, n = ct) =>
      (!ks || e === "sp") && ws(e, (...r) => t(...r), n),
  X0 = an("bm"),
  gt = an("m"),
  cu = an("bu"),
  Z0 = an("u"),
  J0 = an("bum"),
  kn = an("um"),
  Q0 = an("sp"),
  ev = an("rtg"),
  tv = an("rtc")
function nv(e, t = ct) {
  ws("ec", e, t)
}
function xa(e, t, n, r) {
  let s
  const a = n && n[r]
  if (ge(e) || tt(e)) {
    s = new Array(e.length)
    for (let i = 0, u = e.length; i < u; i++)
      s[i] = t(e[i], i, void 0, a && a[i])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, a && a[i])
  } else if (ze(e))
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
const _a = (e) => (e ? (_u(e) ? $s(e) || e.proxy : _a(e.parent)) : null),
  _r = dt(Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Qi.bind(e.proxy)),
    $watch: (e) => V0.bind(e),
  }),
  sa = (e, t) => e !== He && !e.__isScriptSetup && Pe(e, t),
  rv = {
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
        const P = i[t]
        if (P !== void 0)
          switch (P) {
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
          if (s !== He && Pe(s, t)) return (i[t] = 2), s[t]
          if ((d = e.propsOptions[0]) && Pe(d, t)) return (i[t] = 3), a[t]
          if (n !== He && Pe(n, t)) return (i[t] = 4), n[t]
          ka && (i[t] = 0)
        }
      }
      const h = _r[t]
      let b, k
      if (h) return t === "$attrs" && St(e, "get", t), h(e)
      if ((b = u.__cssModules) && (b = b[t])) return b
      if (n !== He && Pe(n, t)) return (i[t] = 4), n[t]
      if (((k = f.config.globalProperties), Pe(k, t))) return k[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: a } = e
      return sa(s, t)
        ? ((s[t] = n), !0)
        : r !== He && Pe(r, t)
          ? ((r[t] = n), !0)
          : Pe(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== He && Pe(e, i)) ||
        sa(t, i) ||
        ((u = a[0]) && Pe(u, i)) ||
        Pe(r, i) ||
        Pe(_r, i) ||
        Pe(s.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Pe(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function jo(e) {
  return ge(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ka = !0
function sv(e) {
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
    beforeMount: b,
    mounted: k,
    beforeUpdate: P,
    updated: F,
    activated: _,
    deactivated: C,
    beforeDestroy: R,
    beforeUnmount: V,
    destroyed: W,
    unmounted: X,
    render: B,
    renderTracked: D,
    renderTriggered: de,
    errorCaptured: pe,
    serverPrefetch: bt,
    expose: We,
    inheritAttrs: Xe,
    components: xt,
    directives: qe,
    filters: Xt,
  } = t
  if ((d && av(d, r, null), i))
    for (const ne in i) {
      const J = i[ne]
      be(J) && (r[ne] = J.bind(n))
    }
  if (s) {
    const ne = s.call(n, n)
    ze(ne) && (e.data = Rr(ne))
  }
  if (((ka = !0), a))
    for (const ne in a) {
      const J = a[ne],
        mt = be(J) ? J.bind(n, n) : be(J.get) ? J.get.bind(n, n) : Tt,
        De = !be(J) && be(J.set) ? J.set.bind(n) : Tt,
        ht = ie({ get: mt, set: De })
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Ze) => (ht.value = Ze),
      })
    }
  if (u) for (const ne in u) fu(u[ne], r, n, ne)
  if (f) {
    const ne = be(f) ? f.call(n) : f
    Reflect.ownKeys(ne).forEach((J) => {
      Kt(J, ne[J])
    })
  }
  h && Fo(h, e, "c")
  function q(ne, J) {
    ge(J) ? J.forEach((mt) => ne(mt.bind(n))) : J && ne(J.bind(n))
  }
  if (
    (q(X0, b),
    q(gt, k),
    q(cu, P),
    q(Z0, F),
    q(G0, _),
    q(K0, C),
    q(nv, pe),
    q(tv, D),
    q(ev, de),
    q(J0, V),
    q(kn, X),
    q(Q0, bt),
    ge(We))
  )
    if (We.length) {
      const ne = e.exposed || (e.exposed = {})
      We.forEach((J) => {
        Object.defineProperty(ne, J, {
          get: () => n[J],
          set: (mt) => (n[J] = mt),
        })
      })
    } else e.exposed || (e.exposed = {})
  B && e.render === Tt && (e.render = B),
    Xe != null && (e.inheritAttrs = Xe),
    xt && (e.components = xt),
    qe && (e.directives = qe)
}
function av(e, t, n = Tt) {
  ge(e) && (e = $a(e))
  for (const r in e) {
    const s = e[r]
    let a
    ze(s)
      ? "default" in s
        ? (a = ft(s.from || r, s.default, !0))
        : (a = ft(s.from || r))
      : (a = ft(s)),
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
  Ht(ge(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function fu(e, t, n, r) {
  const s = r.includes(".") ? lu(n, r) : () => n[r]
  if (tt(e)) {
    const a = t[e]
    be(a) && rn(s, a)
  } else if (be(e)) rn(s, e.bind(n))
  else if (ze(e))
    if (ge(e)) e.forEach((a) => fu(a, t, n, r))
    else {
      const a = be(e.handler) ? e.handler.bind(n) : t[e.handler]
      be(a) && rn(s, a, e)
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
          s.length && s.forEach((d) => us(f, d, i, !0)),
          us(f, t, i)),
    ze(t) && a.set(t, f),
    f
  )
}
function us(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t
  a && us(e, a, n, !0), s && s.forEach((i) => us(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const u = lv[i] || (n && n[i])
      e[i] = u ? u(e[i], t[i]) : t[i]
    }
  return e
}
const lv = {
  data: Lo,
  props: Bo,
  emits: Bo,
  methods: xr,
  computed: xr,
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
  components: xr,
  directives: xr,
  watch: iv,
  provide: Lo,
  inject: ov,
}
function Lo(e, t) {
  return t
    ? e
      ? function () {
          return dt(
            be(e) ? e.call(this, this) : e,
            be(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function ov(e, t) {
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
function wt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function xr(e, t) {
  return e ? dt(Object.create(null), e, t) : t
}
function Bo(e, t) {
  return e
    ? ge(e) && ge(t)
      ? [...new Set([...e, ...t])]
      : dt(Object.create(null), jo(e), jo(t ?? {}))
    : t
}
function iv(e, t) {
  if (!e) return t
  if (!t) return e
  const n = dt(Object.create(null), e)
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
let uv = 0
function cv(e, t) {
  return function (r, s = null) {
    be(r) || (r = dt({}, r)), s != null && !ze(s) && (s = null)
    const a = du(),
      i = new WeakSet()
    let u = !1
    const f = (a.app = {
      _uid: uv++,
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
      mount(d, h, b) {
        if (!u) {
          const k = le(r, s)
          return (
            (k.appContext = a),
            b === !0 ? (b = "svg") : b === !1 && (b = void 0),
            h && t ? t(k, d) : e(k, d, b),
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
function Kt(e, t) {
  if (ct) {
    let n = ct.provides
    const r = ct.parent && ct.parent.provides
    r === n && (n = ct.provides = Object.create(r)), (n[e] = t)
  }
}
function ft(e, t, n = !1) {
  const r = ct || Nt
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
function fv(e, t, n, r = !1) {
  const s = {},
    a = {}
  ls(a, _s, 1), (e.propsDefaults = Object.create(null)), hu(e, t, s, a)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : Wi(s)) : e.type.props ? (e.props = s) : (e.props = a),
    (e.attrs = a)
}
function dv(e, t, n, r) {
  const {
      props: s,
      attrs: a,
      vnode: { patchFlag: i },
    } = e,
    u = Ie(s),
    [f] = e.propsOptions
  let d = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const h = e.vnode.dynamicProps
      for (let b = 0; b < h.length; b++) {
        let k = h[b]
        if (ms(e.emitsOptions, k)) continue
        const P = t[k]
        if (f)
          if (Pe(a, k)) P !== a[k] && ((a[k] = P), (d = !0))
          else {
            const F = Yt(k)
            s[F] = Ea(f, u, F, P, e, !1)
          }
        else P !== a[k] && ((a[k] = P), (d = !0))
      }
    }
  } else {
    hu(e, t, s, a) && (d = !0)
    let h
    for (const b in u)
      (!t || (!Pe(t, b) && ((h = fr(b)) === b || !Pe(t, h)))) &&
        (f
          ? n &&
            (n[b] !== void 0 || n[h] !== void 0) &&
            (s[b] = Ea(f, u, b, void 0, e, !0))
          : delete s[b])
    if (a !== u) for (const b in a) (!t || !Pe(t, b)) && (delete a[b], (d = !0))
  }
  d && nn(e, "set", "$attrs")
}
function hu(e, t, n, r) {
  const [s, a] = e.propsOptions
  let i = !1,
    u
  if (t)
    for (let f in t) {
      if (es(f)) continue
      const d = t[f]
      let h
      s && Pe(s, (h = Yt(f)))
        ? !a || !a.includes(h)
          ? (n[h] = d)
          : ((u || (u = {}))[h] = d)
        : ms(e.emitsOptions, f) ||
          ((!(f in r) || d !== r[f]) && ((r[f] = d), (i = !0)))
    }
  if (a) {
    const f = Ie(n),
      d = u || He
    for (let h = 0; h < a.length; h++) {
      const b = a[h]
      n[b] = Ea(s, f, b, d[b], e, !Pe(d, b))
    }
  }
  return i
}
function Ea(e, t, n, r, s, a) {
  const i = e[n]
  if (i != null) {
    const u = Pe(i, "default")
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
    const h = (b) => {
      f = !0
      const [k, P] = vu(b, t, !0)
      dt(i, k), P && u.push(...P)
    }
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h)
  }
  if (!a && !f) return ze(e) && r.set(e, er), er
  if (ge(a))
    for (let h = 0; h < a.length; h++) {
      const b = Yt(a[h])
      Do(b) && (i[b] = He)
    }
  else if (a)
    for (const h in a) {
      const b = Yt(h)
      if (Do(b)) {
        const k = a[h],
          P = (i[b] = ge(k) || be(k) ? { type: k } : dt({}, k))
        if (P) {
          const F = qo(Boolean, P.type),
            _ = qo(String, P.type)
          ;(P[0] = F > -1),
            (P[1] = _ < 0 || F < _),
            (F > -1 || Pe(P, "default")) && u.push(b)
        }
      }
    }
  const d = [i, u]
  return ze(e) && r.set(e, d), d
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
const pu = (e) => e[0] === "_" || e === "$stable",
  el = (e) => (ge(e) ? e.map(Vt) : [Vt(e)]),
  hv = (e, t, n) => {
    if (t._n) return t
    const r = ut((...s) => el(t(...s)), n)
    return (r._c = !1), r
  },
  gu = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (pu(s)) continue
      const a = e[s]
      if (be(a)) t[s] = hv(s, a, r)
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
  vv = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Ie(t)), ls(t, "_", n)) : gu(t, (e.slots = {}))
    } else (e.slots = {}), t && bu(e, t)
    ls(e.slots, _s, 1)
  },
  pv = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let a = !0,
      i = He
    if (r.shapeFlag & 32) {
      const u = t._
      u
        ? n && u === 1
          ? (a = !1)
          : (dt(s, t), !n && u === 1 && delete s._)
        : ((a = !t.$stable), gu(t, s)),
        (i = t)
    } else t && (bu(e, t), (i = { default: 1 }))
    if (a) for (const u in s) !pu(u) && i[u] == null && delete s[u]
  }
function Sa(e, t, n, r, s = !1) {
  if (ge(e)) {
    e.forEach((k, P) => Sa(k, t && (ge(t) ? t[P] : t), n, r, s))
    return
  }
  if (ns(r) && !s) return
  const a = r.shapeFlag & 4 ? $s(r.component) || r.component.proxy : r.el,
    i = s ? null : a,
    { i: u, r: f } = e,
    d = t && t.r,
    h = u.refs === He ? (u.refs = {}) : u.refs,
    b = u.setupState
  if (
    (d != null &&
      d !== f &&
      (tt(d)
        ? ((h[d] = null), Pe(b, d) && (b[d] = null))
        : pt(d) && (d.value = null)),
    be(f))
  )
    xn(f, u, 12, [i, h])
  else {
    const k = tt(f),
      P = pt(f)
    if (k || P) {
      const F = () => {
        if (e.f) {
          const _ = k ? (Pe(b, f) ? b[f] : h[f]) : f.value
          s
            ? ge(_) && La(_, a)
            : ge(_)
              ? _.includes(a) || _.push(a)
              : k
                ? ((h[f] = [a]), Pe(b, f) && (b[f] = h[f]))
                : ((f.value = [a]), e.k && (h[e.k] = f.value))
        } else
          k
            ? ((h[f] = i), Pe(b, f) && (b[f] = i))
            : P && ((f.value = i), e.k && (h[e.k] = i))
      }
      i ? ((F.id = -1), Et(F, n)) : F()
    }
  }
}
const Et = U0
function gv(e) {
  return bv(e)
}
function bv(e, t) {
  const n = Ai()
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
      parentNode: b,
      nextSibling: k,
      setScopeId: P = Tt,
      insertStaticContent: F,
    } = e,
    _ = (
      p,
      y,
      E,
      A = null,
      T = null,
      j = null,
      Y = void 0,
      U = null,
      K = !!y.dynamicChildren,
    ) => {
      if (p === y) return
      p && !yr(p, y) && ((A = I(p)), Ze(p, T, j, !0), (p = null)),
        y.patchFlag === -2 && ((K = !1), (y.dynamicChildren = null))
      const { type: L, ref: ee, shapeFlag: ue } = y
      switch (L) {
        case xs:
          C(p, y, E, A)
          break
        case Nn:
          R(p, y, E, A)
          break
        case rs:
          p == null && V(y, E, A, Y)
          break
        case Qe:
          xt(p, y, E, A, T, j, Y, U, K)
          break
        default:
          ue & 1
            ? B(p, y, E, A, T, j, Y, U, K)
            : ue & 6
              ? qe(p, y, E, A, T, j, Y, U, K)
              : (ue & 64 || ue & 128) && L.process(p, y, E, A, T, j, Y, U, K, G)
      }
      ee != null && T && Sa(ee, p && p.ref, j, y || p, !y)
    },
    C = (p, y, E, A) => {
      if (p == null) r((y.el = u(y.children)), E, A)
      else {
        const T = (y.el = p.el)
        y.children !== p.children && d(T, y.children)
      }
    },
    R = (p, y, E, A) => {
      p == null ? r((y.el = f(y.children || "")), E, A) : (y.el = p.el)
    },
    V = (p, y, E, A) => {
      ;[p.el, p.anchor] = F(p.children, y, E, A, p.el, p.anchor)
    },
    W = ({ el: p, anchor: y }, E, A) => {
      let T
      for (; p && p !== y; ) (T = k(p)), r(p, E, A), (p = T)
      r(y, E, A)
    },
    X = ({ el: p, anchor: y }) => {
      let E
      for (; p && p !== y; ) (E = k(p)), s(p), (p = E)
      s(y)
    },
    B = (p, y, E, A, T, j, Y, U, K) => {
      y.type === "svg" ? (Y = "svg") : y.type === "math" && (Y = "mathml"),
        p == null ? D(y, E, A, T, j, Y, U, K) : bt(p, y, T, j, Y, U, K)
    },
    D = (p, y, E, A, T, j, Y, U) => {
      let K, L
      const { props: ee, shapeFlag: ue, transition: oe, dirs: ve } = p
      if (
        ((K = p.el = i(p.type, j, ee && ee.is, ee)),
        ue & 8
          ? h(K, p.children)
          : ue & 16 && pe(p.children, K, null, A, T, aa(p, j), Y, U),
        ve && Cn(p, null, A, "created"),
        de(K, p, p.scopeId, Y, A),
        ee)
      ) {
        for (const Ae in ee)
          Ae !== "value" &&
            !es(Ae) &&
            a(K, Ae, null, ee[Ae], j, p.children, A, T, Ve)
        "value" in ee && a(K, "value", null, ee.value, j),
          (L = ee.onVnodeBeforeMount) && Ut(L, A, p)
      }
      ve && Cn(p, null, A, "beforeMount")
      const me = mv(T, oe)
      me && oe.beforeEnter(K),
        r(K, y, E),
        ((L = ee && ee.onVnodeMounted) || me || ve) &&
          Et(() => {
            L && Ut(L, A, p), me && oe.enter(K), ve && Cn(p, null, A, "mounted")
          }, T)
    },
    de = (p, y, E, A, T) => {
      if ((E && P(p, E), A)) for (let j = 0; j < A.length; j++) P(p, A[j])
      if (T) {
        let j = T.subTree
        if (y === j) {
          const Y = T.vnode
          de(p, Y, Y.scopeId, Y.slotScopeIds, T.parent)
        }
      }
    },
    pe = (p, y, E, A, T, j, Y, U, K = 0) => {
      for (let L = K; L < p.length; L++) {
        const ee = (p[L] = U ? gn(p[L]) : Vt(p[L]))
        _(null, ee, y, E, A, T, j, Y, U)
      }
    },
    bt = (p, y, E, A, T, j, Y) => {
      const U = (y.el = p.el)
      let { patchFlag: K, dynamicChildren: L, dirs: ee } = y
      K |= p.patchFlag & 16
      const ue = p.props || He,
        oe = y.props || He
      let ve
      if (
        (E && Pn(E, !1),
        (ve = oe.onVnodeBeforeUpdate) && Ut(ve, E, y, p),
        ee && Cn(y, p, E, "beforeUpdate"),
        E && Pn(E, !0),
        L
          ? We(p.dynamicChildren, L, U, E, A, aa(y, T), j)
          : Y || J(p, y, U, null, E, A, aa(y, T), j, !1),
        K > 0)
      ) {
        if (K & 16) Xe(U, y, ue, oe, E, A, T)
        else if (
          (K & 2 && ue.class !== oe.class && a(U, "class", null, oe.class, T),
          K & 4 && a(U, "style", ue.style, oe.style, T),
          K & 8)
        ) {
          const me = y.dynamicProps
          for (let Ae = 0; Ae < me.length; Ae++) {
            const Le = me[Ae],
              Ue = ue[Le],
              kt = oe[Le]
            ;(kt !== Ue || Le === "value") &&
              a(U, Le, Ue, kt, T, p.children, E, A, Ve)
          }
        }
        K & 1 && p.children !== y.children && h(U, y.children)
      } else !Y && L == null && Xe(U, y, ue, oe, E, A, T)
      ;((ve = oe.onVnodeUpdated) || ee) &&
        Et(() => {
          ve && Ut(ve, E, y, p), ee && Cn(y, p, E, "updated")
        }, A)
    },
    We = (p, y, E, A, T, j, Y) => {
      for (let U = 0; U < y.length; U++) {
        const K = p[U],
          L = y[U],
          ee =
            K.el && (K.type === Qe || !yr(K, L) || K.shapeFlag & 70)
              ? b(K.el)
              : E
        _(K, L, ee, null, A, T, j, Y, !0)
      }
    },
    Xe = (p, y, E, A, T, j, Y) => {
      if (E !== A) {
        if (E !== He)
          for (const U in E)
            !es(U) && !(U in A) && a(p, U, E[U], null, Y, y.children, T, j, Ve)
        for (const U in A) {
          if (es(U)) continue
          const K = A[U],
            L = E[U]
          K !== L && U !== "value" && a(p, U, L, K, Y, y.children, T, j, Ve)
        }
        "value" in A && a(p, "value", E.value, A.value, Y)
      }
    },
    xt = (p, y, E, A, T, j, Y, U, K) => {
      const L = (y.el = p ? p.el : u("")),
        ee = (y.anchor = p ? p.anchor : u(""))
      let { patchFlag: ue, dynamicChildren: oe, slotScopeIds: ve } = y
      ve && (U = U ? U.concat(ve) : ve),
        p == null
          ? (r(L, E, A), r(ee, E, A), pe(y.children, E, ee, T, j, Y, U, K))
          : ue > 0 && ue & 64 && oe && p.dynamicChildren
            ? (We(p.dynamicChildren, oe, E, T, j, Y, U),
              (y.key != null || (T && y === T.subTree)) && mu(p, y, !0))
            : J(p, y, E, ee, T, j, Y, U, K)
    },
    qe = (p, y, E, A, T, j, Y, U, K) => {
      ;(y.slotScopeIds = U),
        p == null
          ? y.shapeFlag & 512
            ? T.ctx.activate(y, E, A, Y, K)
            : Xt(y, E, A, T, j, Y, K)
          : qt(p, y, K)
    },
    Xt = (p, y, E, A, T, j, Y) => {
      const U = (p.component = Pv(p, A, T))
      if ((iu(p) && (U.ctx.renderer = G), Mv(U), U.asyncDep)) {
        if ((T && T.registerDep(U, q), !p.el)) {
          const K = (U.subTree = le(Nn))
          R(null, K, y, E)
        }
      } else q(U, p, y, E, T, j, Y)
    },
    qt = (p, y, E) => {
      const A = (y.component = p.component)
      if (L0(p, y, E))
        if (A.asyncDep && !A.asyncResolved) {
          ne(A, y, E)
          return
        } else (A.next = y), I0(A.update), (A.effect.dirty = !0), A.update()
      else (y.el = p.el), (A.vnode = y)
    },
    q = (p, y, E, A, T, j, Y) => {
      const U = () => {
          if (p.isMounted) {
            let { next: ee, bu: ue, u: oe, parent: ve, vnode: me } = p
            {
              const on = yu(p)
              if (on) {
                ee && ((ee.el = me.el), ne(p, ee, Y)),
                  on.asyncDep.then(() => {
                    p.isUnmounted || U()
                  })
                return
              }
            }
            let Ae = ee,
              Le
            Pn(p, !1),
              ee ? ((ee.el = me.el), ne(p, ee, Y)) : (ee = me),
              ue && ts(ue),
              (Le = ee.props && ee.props.onVnodeBeforeUpdate) &&
                Ut(Le, ve, ee, me),
              Pn(p, !0)
            const Ue = ra(p),
              kt = p.subTree
            ;(p.subTree = Ue),
              _(kt, Ue, b(kt.el), I(kt), p, T, j),
              (ee.el = Ue.el),
              Ae === null && B0(p, Ue.el),
              oe && Et(oe, T),
              (Le = ee.props && ee.props.onVnodeUpdated) &&
                Et(() => Ut(Le, ve, ee, me), T)
          } else {
            let ee
            const { el: ue, props: oe } = y,
              { bm: ve, m: me, parent: Ae } = p,
              Le = ns(y)
            if (
              (Pn(p, !1),
              ve && ts(ve),
              !Le && (ee = oe && oe.onVnodeBeforeMount) && Ut(ee, Ae, y),
              Pn(p, !0),
              ue && Me)
            ) {
              const Ue = () => {
                ;(p.subTree = ra(p)), Me(ue, p.subTree, p, T, null)
              }
              Le
                ? y.type.__asyncLoader().then(() => !p.isUnmounted && Ue())
                : Ue()
            } else {
              const Ue = (p.subTree = ra(p))
              _(null, Ue, E, A, p, T, j), (y.el = Ue.el)
            }
            if ((me && Et(me, T), !Le && (ee = oe && oe.onVnodeMounted))) {
              const Ue = y
              Et(() => Ut(ee, Ae, Ue), T)
            }
            ;(y.shapeFlag & 256 ||
              (Ae && ns(Ae.vnode) && Ae.vnode.shapeFlag & 256)) &&
              p.a &&
              Et(p.a, T),
              (p.isMounted = !0),
              (y = E = A = null)
          }
        },
        K = (p.effect = new Ha(U, Tt, () => Ya(L), p.scope)),
        L = (p.update = () => {
          K.dirty && K.run()
        })
      ;(L.id = p.uid), Pn(p, !0), L()
    },
    ne = (p, y, E) => {
      y.component = p
      const A = p.vnode.props
      ;(p.vnode = y),
        (p.next = null),
        dv(p, y.props, A, E),
        pv(p, y.children, E),
        Fn(),
        Ro(p),
        Ln()
    },
    J = (p, y, E, A, T, j, Y, U, K = !1) => {
      const L = p && p.children,
        ee = p ? p.shapeFlag : 0,
        ue = y.children,
        { patchFlag: oe, shapeFlag: ve } = y
      if (oe > 0) {
        if (oe & 128) {
          De(L, ue, E, A, T, j, Y, U, K)
          return
        } else if (oe & 256) {
          mt(L, ue, E, A, T, j, Y, U, K)
          return
        }
      }
      ve & 8
        ? (ee & 16 && Ve(L, T, j), ue !== L && h(E, ue))
        : ee & 16
          ? ve & 16
            ? De(L, ue, E, A, T, j, Y, U, K)
            : Ve(L, T, j, !0)
          : (ee & 8 && h(E, ""), ve & 16 && pe(ue, E, A, T, j, Y, U, K))
    },
    mt = (p, y, E, A, T, j, Y, U, K) => {
      ;(p = p || er), (y = y || er)
      const L = p.length,
        ee = y.length,
        ue = Math.min(L, ee)
      let oe
      for (oe = 0; oe < ue; oe++) {
        const ve = (y[oe] = K ? gn(y[oe]) : Vt(y[oe]))
        _(p[oe], ve, E, null, T, j, Y, U, K)
      }
      L > ee ? Ve(p, T, j, !0, !1, ue) : pe(y, E, A, T, j, Y, U, K, ue)
    },
    De = (p, y, E, A, T, j, Y, U, K) => {
      let L = 0
      const ee = y.length
      let ue = p.length - 1,
        oe = ee - 1
      for (; L <= ue && L <= oe; ) {
        const ve = p[L],
          me = (y[L] = K ? gn(y[L]) : Vt(y[L]))
        if (yr(ve, me)) _(ve, me, E, null, T, j, Y, U, K)
        else break
        L++
      }
      for (; L <= ue && L <= oe; ) {
        const ve = p[ue],
          me = (y[oe] = K ? gn(y[oe]) : Vt(y[oe]))
        if (yr(ve, me)) _(ve, me, E, null, T, j, Y, U, K)
        else break
        ue--, oe--
      }
      if (L > ue) {
        if (L <= oe) {
          const ve = oe + 1,
            me = ve < ee ? y[ve].el : A
          for (; L <= oe; )
            _(null, (y[L] = K ? gn(y[L]) : Vt(y[L])), E, me, T, j, Y, U, K), L++
        }
      } else if (L > oe) for (; L <= ue; ) Ze(p[L], T, j, !0), L++
      else {
        const ve = L,
          me = L,
          Ae = new Map()
        for (L = me; L <= oe; L++) {
          const yt = (y[L] = K ? gn(y[L]) : Vt(y[L]))
          yt.key != null && Ae.set(yt.key, L)
        }
        let Le,
          Ue = 0
        const kt = oe - me + 1
        let on = !1,
          jr = 0
        const un = new Array(kt)
        for (L = 0; L < kt; L++) un[L] = 0
        for (L = ve; L <= ue; L++) {
          const yt = p[L]
          if (Ue >= kt) {
            Ze(yt, T, j, !0)
            continue
          }
          let It
          if (yt.key != null) It = Ae.get(yt.key)
          else
            for (Le = me; Le <= oe; Le++)
              if (un[Le - me] === 0 && yr(yt, y[Le])) {
                It = Le
                break
              }
          It === void 0
            ? Ze(yt, T, j, !0)
            : ((un[It - me] = L + 1),
              It >= jr ? (jr = It) : (on = !0),
              _(yt, y[It], E, null, T, j, Y, U, K),
              Ue++)
        }
        const vr = on ? yv(un) : er
        for (Le = vr.length - 1, L = kt - 1; L >= 0; L--) {
          const yt = me + L,
            It = y[yt],
            pr = yt + 1 < ee ? y[yt + 1].el : A
          un[L] === 0
            ? _(null, It, E, pr, T, j, Y, U, K)
            : on && (Le < 0 || L !== vr[Le] ? ht(It, E, pr, 2) : Le--)
        }
      }
    },
    ht = (p, y, E, A, T = null) => {
      const { el: j, type: Y, transition: U, children: K, shapeFlag: L } = p
      if (L & 6) {
        ht(p.component.subTree, y, E, A)
        return
      }
      if (L & 128) {
        p.suspense.move(y, E, A)
        return
      }
      if (L & 64) {
        Y.move(p, y, E, G)
        return
      }
      if (Y === Qe) {
        r(j, y, E)
        for (let ue = 0; ue < K.length; ue++) ht(K[ue], y, E, A)
        r(p.anchor, y, E)
        return
      }
      if (Y === rs) {
        W(p, y, E)
        return
      }
      if (A !== 2 && L & 1 && U)
        if (A === 0) U.beforeEnter(j), r(j, y, E), Et(() => U.enter(j), T)
        else {
          const { leave: ue, delayLeave: oe, afterLeave: ve } = U,
            me = () => r(j, y, E),
            Ae = () => {
              ue(j, () => {
                me(), ve && ve()
              })
            }
          oe ? oe(j, me, Ae) : Ae()
        }
      else r(j, y, E)
    },
    Ze = (p, y, E, A = !1, T = !1) => {
      const {
        type: j,
        props: Y,
        ref: U,
        children: K,
        dynamicChildren: L,
        shapeFlag: ee,
        patchFlag: ue,
        dirs: oe,
      } = p
      if ((U != null && Sa(U, null, E, p, !0), ee & 256)) {
        y.ctx.deactivate(p)
        return
      }
      const ve = ee & 1 && oe,
        me = !ns(p)
      let Ae
      if ((me && (Ae = Y && Y.onVnodeBeforeUnmount) && Ut(Ae, y, p), ee & 6))
        _t(p.component, E, A)
      else {
        if (ee & 128) {
          p.suspense.unmount(E, A)
          return
        }
        ve && Cn(p, null, y, "beforeUnmount"),
          ee & 64
            ? p.type.remove(p, y, E, T, G, A)
            : L && (j !== Qe || (ue > 0 && ue & 64))
              ? Ve(L, y, E, !1, !0)
              : ((j === Qe && ue & 384) || (!T && ee & 16)) && Ve(K, y, E),
          A && Wt(p)
      }
      ;((me && (Ae = Y && Y.onVnodeUnmounted)) || ve) &&
        Et(() => {
          Ae && Ut(Ae, y, p), ve && Cn(p, null, y, "unmounted")
        }, E)
    },
    Wt = (p) => {
      const { type: y, el: E, anchor: A, transition: T } = p
      if (y === Qe) {
        Ot(E, A)
        return
      }
      if (y === rs) {
        X(p)
        return
      }
      const j = () => {
        s(E), T && !T.persisted && T.afterLeave && T.afterLeave()
      }
      if (p.shapeFlag & 1 && T && !T.persisted) {
        const { leave: Y, delayLeave: U } = T,
          K = () => Y(E, j)
        U ? U(p.el, j, K) : K()
      } else j()
    },
    Ot = (p, y) => {
      let E
      for (; p !== y; ) (E = k(p)), s(p), (p = E)
      s(y)
    },
    _t = (p, y, E) => {
      const { bum: A, scope: T, update: j, subTree: Y, um: U } = p
      A && ts(A),
        T.stop(),
        j && ((j.active = !1), Ze(Y, p, y, E)),
        U && Et(U, y),
        Et(() => {
          p.isUnmounted = !0
        }, y),
        y &&
          y.pendingBranch &&
          !y.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === y.pendingId &&
          (y.deps--, y.deps === 0 && y.resolve())
    },
    Ve = (p, y, E, A = !1, T = !1, j = 0) => {
      for (let Y = j; Y < p.length; Y++) Ze(p[Y], y, E, A, T)
    },
    I = (p) =>
      p.shapeFlag & 6
        ? I(p.component.subTree)
        : p.shapeFlag & 128
          ? p.suspense.next()
          : k(p.anchor || p.el),
    Q = (p, y, E) => {
      p == null
        ? y._vnode && Ze(y._vnode, null, null, !0)
        : _(y._vnode || null, p, y, null, null, null, E),
        Ro(),
        tu(),
        (y._vnode = p)
    },
    G = {
      p: _,
      um: Ze,
      m: ht,
      r: Wt,
      mt: Xt,
      mc: pe,
      pc: J,
      pbc: We,
      n: I,
      o: e,
    }
  let ae, Me
  return (
    t && ([ae, Me] = t(G)), { render: Q, hydrate: ae, createApp: cv(Q, ae) }
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
function Pn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function mv(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function mu(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (ge(r) && ge(s))
    for (let a = 0; a < r.length; a++) {
      const i = r[a]
      let u = s[a]
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = s[a] = gn(s[a])), (u.el = i.el)),
        n || mu(i, u)),
        u.type === xs && (u.el = i.el)
    }
}
function yv(e) {
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
const wv = (e) => e.__isTeleport,
  Qe = Symbol.for("v-fgt"),
  xs = Symbol.for("v-txt"),
  Nn = Symbol.for("v-cmt"),
  rs = Symbol.for("v-stc"),
  kr = []
let Dt = null
function he(e = !1) {
  kr.push((Dt = e ? null : []))
}
function xv() {
  kr.pop(), (Dt = kr[kr.length - 1] || null)
}
let Mr = 1
function Wo(e) {
  Mr += e
}
function wu(e) {
  return (
    (e.dynamicChildren = Mr > 0 ? Dt || er : null),
    xv(),
    Mr > 0 && Dt && Dt.push(e),
    e
  )
}
function Fe(e, t, n, r, s, a) {
  return wu(m(e, t, n, r, s, a, !0))
}
function Ke(e, t, n, r, s) {
  return wu(le(e, t, n, r, s, !0))
}
function Ca(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function yr(e, t) {
  return e.type === t.type && e.key === t.key
}
const _s = "__vInternal",
  xu = ({ key: e }) => e ?? null,
  ss = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? tt(e) || pt(e) || be(e)
        ? { i: Nt, r: e, k: t, f: !!n }
        : e
      : null
  )
function m(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  a = e === Qe ? 0 : 1,
  i = !1,
  u = !1,
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xu(t),
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
      !i &&
      Dt &&
      (f.patchFlag > 0 || a & 6) &&
      f.patchFlag !== 32 &&
      Dt.push(f),
    f
  )
}
const le = _v
function _v(e, t = null, n = null, r = 0, s = null, a = !1) {
  if (((!e || e === z0) && (e = Nn), Ca(e))) {
    const u = jn(e, t, !0)
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
  if ((Tv(e) && (e = e.__vccOpts), t)) {
    t = kv(t)
    let { class: u, style: f } = t
    u && !tt(u) && (t.class = M(u)),
      ze(f) && (Vi(f) && !ge(f) && (f = dt({}, f)), (t.style = Da(f)))
  }
  const i = tt(e) ? 1 : W0(e) ? 128 : wv(e) ? 64 : ze(e) ? 4 : be(e) ? 2 : 0
  return m(e, t, n, r, s, i, a, !0)
}
function kv(e) {
  return e ? (Vi(e) || _s in e ? dt({}, e) : e) : null
}
function jn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: a, children: i } = e,
    u = t ? Ev(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && xu(u),
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
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Qe ? (a === -1 ? 16 : a | 16) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && jn(e.ssContent),
    ssFallback: e.ssFallback && jn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function xe(e = " ", t = 0) {
  return le(xs, null, e, t)
}
function $v(e, t) {
  const n = le(rs, null, e)
  return (n.staticCount = t), n
}
function et(e = "", t = !1) {
  return t ? (he(), Ke(Nn, null, e)) : le(Nn, null, e)
}
function Vt(e) {
  return e == null || typeof e == "boolean"
    ? le(Nn)
    : ge(e)
      ? le(Qe, null, e.slice())
      : typeof e == "object"
        ? gn(e)
        : le(xs, null, String(e))
}
function gn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : jn(e)
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
function Ev(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = M([t.class, r.class]))
      else if (s === "style") t.style = Da([t.style, r.style])
      else if (ds(s)) {
        const a = t[s],
          i = r[s]
        i &&
          a !== i &&
          !(ge(a) && a.includes(i)) &&
          (t[s] = a ? [].concat(a, i) : i)
      } else s !== "" && (t[s] = r[s])
  }
  return t
}
function Ut(e, t, n, r = null) {
  Ht(e, t, 7, [n, r])
}
const Sv = du()
let Cv = 0
function Pv(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Sv,
    a = {
      uid: Cv++,
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
      emitsOptions: ru(r, s),
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
    (a.emit = N0.bind(null, a)),
    e.ce && e.ce(a),
    a
  )
}
let ct = null,
  nl,
  Pa
{
  const e = Ai(),
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
  ;(nl = t("__VUE_INSTANCE_SETTERS__", (n) => (ct = n))),
    (Pa = t("__VUE_SSR_SETTERS__", (n) => (ks = n)))
}
const ar = (e) => {
    nl(e), e.scope.on()
  },
  Rn = () => {
    ct && ct.scope.off(), nl(null)
  }
function _u(e) {
  return e.vnode.shapeFlag & 4
}
let ks = !1
function Mv(e, t = !1) {
  t && Pa(t)
  const { props: n, children: r } = e.vnode,
    s = _u(e)
  fv(e, n, s, t), vv(e, r)
  const a = s ? Av(e, t) : void 0
  return t && Pa(!1), a
}
function Av(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Gi(new Proxy(e.ctx, rv)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Iv(e) : null)
    ar(e), Fn()
    const a = xn(r, e, 0, [e.props, s])
    if ((Ln(), Rn(), Ci(a))) {
      if ((a.then(Rn, Rn), t))
        return a
          .then((i) => {
            Uo(e, i, t)
          })
          .catch((i) => {
            bs(i, e, 0)
          })
      e.asyncDep = a
    } else Uo(e, a, t)
  } else ku(e, t)
}
function Uo(e, t, n) {
  be(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ze(t) && (e.setupState = Zi(t)),
    ku(e, n)
}
let Vo
function ku(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Vo && !r.render) {
      const s = r.template || Qa(e).template
      if (s) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: f } = r,
          d = dt(dt({ isCustomElement: a, delimiters: u }, i), f)
        r.render = Vo(s, d)
      }
    }
    e.render = r.render || Tt
  }
  {
    ar(e), Fn()
    try {
      sv(e)
    } finally {
      Ln(), Rn()
    }
  }
}
function Ov(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return St(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function Iv(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Ov(e)
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
      (e.exposeProxy = new Proxy(Zi(Gi(e.exposed)), {
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
function Rv(e, t = !0) {
  return be(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Tv(e) {
  return be(e) && "__vccOpts" in e
}
const ie = (e, t) => S0(e, t, ks)
function lt(e, t, n) {
  const r = arguments.length
  return r === 2
    ? ze(t) && !ge(t)
      ? Ca(t)
        ? le(e, null, [t])
        : le(e, t)
      : le(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Ca(n) && (n = [n]),
      le(e, t, n))
}
const Nv = Symbol.for("v-scx"),
  jv = () => ft(Nv),
  Fv = "3.4.0",
  Lv = "http://www.w3.org/2000/svg",
  Bv = "http://www.w3.org/1998/Math/MathML",
  bn = typeof document < "u" ? document : null,
  Go = bn && bn.createElement("template"),
  Dv = {
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
            ? bn.createElementNS(Bv, e)
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
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Hv = Symbol("_vtc")
function zv(e, t, n) {
  const r = e[Hv]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const qv = Symbol("_vod"),
  Wv = Symbol("")
function Uv(e, t, n) {
  const r = e.style,
    s = tt(n)
  if (n && !s) {
    if (t && !tt(t)) for (const a in t) n[a] == null && Ma(r, a, "")
    for (const a in n) Ma(r, a, n[a])
  } else {
    const a = r.display
    if (s) {
      if (t !== n) {
        const i = r[Wv]
        i && (n += ";" + i), (r.cssText = n)
      }
    } else t && e.removeAttribute("style")
    qv in e && (r.display = a)
  }
}
const Ko = /\s*!important$/
function Ma(e, t, n) {
  if (ge(n)) n.forEach((r) => Ma(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = Vv(e, t)
    Ko.test(n)
      ? e.setProperty(fr(r), n.replace(Ko, ""), "important")
      : (e[r] = n)
  }
}
const Yo = ["Webkit", "Moz", "ms"],
  la = {}
function Vv(e, t) {
  const n = la[t]
  if (n) return n
  let r = Yt(t)
  if (r !== "filter" && r in e) return (la[t] = r)
  r = ps(r)
  for (let s = 0; s < Yo.length; s++) {
    const a = Yo[s] + r
    if (a in e) return (la[t] = a)
  }
  return t
}
const Xo = "http://www.w3.org/1999/xlink"
function Gv(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Xo, t.slice(6, t.length))
      : e.setAttributeNS(Xo, t, n)
  else {
    const a = r0(t)
    n == null || (a && !Oi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function Kv(e, t, n, r, s, a, i) {
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
      ? (n = Oi(n))
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
function Yv(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Zo = Symbol("_vei")
function Xv(e, t, n, r, s = null) {
  const a = e[Zo] || (e[Zo] = {}),
    i = a[t]
  if (r && i) i.value = r
  else {
    const [u, f] = Zv(t)
    if (r) {
      const d = (a[t] = ep(r, s))
      Zn(e, u, d, f)
    } else i && (Yv(e, u, i, f), (a[t] = void 0))
  }
}
const Jo = /(?:Once|Passive|Capture)$/
function Zv(e) {
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
const Jv = Promise.resolve(),
  Qv = () => oa || (Jv.then(() => (oa = 0)), (oa = Date.now()))
function ep(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    Ht(tp(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = Qv()), n
}
function tp(e, t) {
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
  np = (e, t, n, r, s, a, i, u, f) => {
    const d = s === "svg"
    t === "class"
      ? zv(e, r, d)
      : t === "style"
        ? Uv(e, n, r)
        : ds(t)
          ? Fa(t) || Xv(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : rp(e, t, r, d)
              )
            ? Kv(e, t, r, a, i, u, f)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              Gv(e, t, r, d))
  }
function rp(e, t, n, r) {
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
function sp(e) {
  e.target.composing = !0
}
function ti(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const ia = Symbol("_assign"),
  ap = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[ia] = ei(s)
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
          (Zn(e, "compositionstart", sp),
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
      const i = s || e.type === "number" ? va(e.value) : e.value,
        u = t ?? ""
      i !== u &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === u))) ||
          (e.value = u))
    },
  },
  lp = dt({ patchProp: np }, Dv)
let ni
function op() {
  return ni || (ni = gv(lp))
}
const ip = (...e) => {
  const t = op().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = cp(r)
      if (!s) return
      const a = t._component
      !be(a) && !a.render && !a.template && (a.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, up(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function up(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function cp(e) {
  return tt(e) ? document.querySelector(e) : e
}
const Tr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  fp = {}
function dp(e, t) {
  const n = H0("router-view")
  return he(), Ke(n)
}
const hp = Tr(fp, [["render", dp]])
function Mt(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Mt), r)
}
var Ar = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Ar || {}),
  vp = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(vp || {})
function ln({
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
    return Mt(f, {
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
    let b = !1,
      k = []
    for (let [P, F] of Object.entries(r))
      typeof F == "boolean" && (b = !0), F === !0 && k.push(P)
    b && (h["data-headlessui-state"] = k.join(" "))
  }
  if (u === "template") {
    if (
      ((d = $u(d ?? [])),
      Object.keys(f).length > 0 || Object.keys(t).length > 0)
    ) {
      let [b, ...k] = d ?? []
      if (!pp(b) || k.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${s} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(f)
              .concat(Object.keys(t))
              .map((_) => _.trim())
              .filter((_, C, R) => R.indexOf(_) === C)
              .sort((_, C) => _.localeCompare(C))
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
      let P = Eu((i = b.props) != null ? i : {}, f),
        F = jn(b, P)
      for (let _ in P)
        _.startsWith("on") && (F.props || (F.props = {}), (F.props[_] = P[_]))
      return F
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d
  }
  return lt(u, Object.assign({}, f, h), { default: () => d })
}
function $u(e) {
  return e.flatMap((t) => (t.type === Qe ? $u(t.children) : [t]))
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
function pp(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
let gp = 0
function bp() {
  return ++gp
}
function Tn() {
  return bp()
}
var at = ((e) => (
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
))(at || {})
function se(e) {
  var t
  return e == null || e.value == null
    ? null
    : (t = e.value.$el) != null
      ? t
      : e.value
}
let Cu = Symbol("Context")
var Or = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Or || {})
function mp() {
  return ft(Cu, null)
}
function yp(e) {
  Kt(Cu, e)
}
function ri(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Pu(e, t) {
  let n = _e(ri(e.value.type, e.value.as))
  return (
    gt(() => {
      n.value = ri(e.value.type, e.value.as)
    }),
    sn(() => {
      var r
      n.value ||
        (se(t) &&
          se(t) instanceof HTMLButtonElement &&
          !((r = se(t)) != null && r.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var wp = Object.defineProperty,
  xp = (e, t, n) =>
    t in e
      ? wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  si = (e, t, n) => (xp(e, typeof t != "symbol" ? t + "" : t, n), n)
class _p {
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
let Es = new _p()
function dr(e) {
  if (Es.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = se(e)
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
var Je = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Je || {}),
  yn = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(yn || {}),
  kp = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(kp || {})
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
    : Mt(t, {
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
var $p = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))($p || {})
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
let Ep = ["textarea", "input"].join(",")
function Sp(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ep)) !=
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
function Pt(
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
  s.length > 0 && u.length > 1 && (u = u.filter((F) => !s.includes(F))),
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
    b = 0,
    k = u.length,
    P
  do {
    if (b >= k || b + k <= 0) return 0
    let F = d + b
    if (t & 16) F = (F + k) % k
    else {
      if (F < 0) return 3
      if (F >= k) return 1
    }
    ;(P = u[F]), P == null || P.focus(h), (b += f)
  } while (P !== i.activeElement)
  return t & 6 && Sp(P) && P.select(), 2
}
function Jr(e, t, n) {
  Es.isServer ||
    sn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function Au(e, t, n) {
  Es.isServer ||
    sn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Cp(e, t, n = ie(() => !0)) {
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
      let h = d instanceof HTMLElement ? d : se(d)
      if (
        (h != null && h.contains(u)) ||
        (a.composed && a.composedPath().includes(h))
      )
        return
    }
    return !Mu(u, rl.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u)
  }
  let s = _e(null)
  Jr(
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
    Jr(
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
let or = At({
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
      return ln({
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
function Pp(e) {
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
var tn = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(tn || {})
function Ou() {
  let e = _e(0)
  return (
    Au("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Mp(e, t, n, r) {
  Es.isServer ||
    sn((s) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, r),
        s(() => e.removeEventListener(t, n, r))
    })
}
let ai = Symbol("PortalParentContext")
function Ap() {
  let e = ft(ai, null),
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
    At({
      name: "PortalWrapper",
      setup(a, { slots: i }) {
        return (
          Kt(ai, s),
          () => {
            var u
            return (u = i.default) == null ? void 0 : u.call(i)
          }
        )
      },
    }),
  ]
}
function Op({
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
        (f.contains(se(r)) || u.some((d) => f.contains(d)) || u.push(f))
    return u
  }
  return {
    resolveContainers: a,
    contains(i) {
      return a().some((u) => u.contains(i))
    },
    mainTreeNodeRef: r,
    MainTreeNode() {
      return n != null ? null : lt(or, { features: lr.Hidden, ref: r })
    },
  }
}
var Ip = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Ip || {})
let Iu = Symbol("PopoverContext")
function sl(e) {
  let t = ft(Iu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${Oa.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, sl), n)
  }
  return t
}
let Rp = Symbol("PopoverGroupContext")
function Ru() {
  return ft(Rp, null)
}
let Tu = Symbol("PopoverPanelContext")
function Tp() {
  return ft(Tu, null)
}
let Oa = At({
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
        b = ie(() => dr(a)),
        k = ie(() => {
          var B, D
          if (!se(u) || !se(h)) return !1
          for (let qe of document.querySelectorAll("body > *"))
            if (
              Number(qe == null ? void 0 : qe.contains(se(u))) ^
              Number(qe == null ? void 0 : qe.contains(se(h)))
            )
              return !0
          let de = Ss(),
            pe = de.indexOf(se(u)),
            bt = (pe + de.length - 1) % de.length,
            We = (pe + 1) % de.length,
            Xe = de[bt],
            xt = de[We]
          return (
            !((B = se(h)) != null && B.contains(Xe)) &&
            !((D = se(h)) != null && D.contains(xt))
          )
        }),
        P = {
          popoverState: i,
          buttonId: _e(null),
          panelId: _e(null),
          panel: h,
          button: u,
          isPortalled: k,
          beforePanelSentinel: f,
          afterPanelSentinel: d,
          togglePopover() {
            i.value = Mt(i.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            i.value !== 1 && (i.value = 1)
          },
          close(B) {
            P.closePopover()
            let D = B
              ? B instanceof HTMLElement
                ? B
                : B.value instanceof HTMLElement
                  ? se(B)
                  : se(P.button)
              : se(P.button)
            D == null || D.focus()
          },
        }
      Kt(Iu, P), yp(ie(() => Mt(i.value, { 0: Or.Open, 1: Or.Closed })))
      let F = {
          buttonId: P.buttonId,
          panelId: P.panelId,
          close() {
            P.closePopover()
          },
        },
        _ = Ru(),
        C = _ == null ? void 0 : _.registerPopover,
        [R, V] = Ap(),
        W = Op({
          mainTreeNodeRef: _ == null ? void 0 : _.mainTreeNodeRef,
          portals: R,
          defaultContainers: [u, h],
        })
      function X() {
        var B, D, de, pe
        return (pe = _ == null ? void 0 : _.isFocusWithinPopoverGroup()) != null
          ? pe
          : ((B = b.value) == null ? void 0 : B.activeElement) &&
              (((D = se(u)) == null
                ? void 0
                : D.contains(b.value.activeElement)) ||
                ((de = se(h)) == null
                  ? void 0
                  : de.contains(b.value.activeElement)))
      }
      return (
        sn(() => (C == null ? void 0 : C(F))),
        Mp(
          (s = b.value) == null ? void 0 : s.defaultView,
          "focus",
          (B) => {
            var D, de
            B.target !== window &&
              B.target instanceof HTMLElement &&
              i.value === 0 &&
              (X() ||
                (u &&
                  h &&
                  (W.contains(B.target) ||
                    ((D = se(P.beforePanelSentinel)) != null &&
                      D.contains(B.target)) ||
                    ((de = se(P.afterPanelSentinel)) != null &&
                      de.contains(B.target)) ||
                    P.closePopover())))
          },
          !0,
        ),
        Cp(
          W.resolveContainers,
          (B, D) => {
            var de
            P.closePopover(),
              Mu(D, rl.Loose) ||
                (B.preventDefault(), (de = se(u)) == null || de.focus())
          },
          ie(() => i.value === 0),
        ),
        () => {
          let B = { open: i.value === 0, close: P.close }
          return lt(Qe, [
            lt(V, {}, () =>
              ln({
                theirProps: { ...e, ...n },
                ourProps: { ref: a },
                slot: B,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            lt(W.MainTreeNode),
          ])
        }
      )
    },
  }),
  li = At({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Tn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = sl("PopoverButton"),
        a = ie(() => dr(s.button))
      r({ el: s.button, $el: s.button }),
        gt(() => {
          s.buttonId.value = e.id
        }),
        kn(() => {
          s.buttonId.value = null
        })
      let i = Ru(),
        u = i == null ? void 0 : i.closeOthers,
        f = Tp(),
        d = ie(() => (f === null ? !1 : f.value === s.panelId.value)),
        h = _e(null),
        b = `headlessui-focus-sentinel-${Tn()}`
      d.value ||
        sn(() => {
          s.button.value = h.value
        })
      let k = Pu(
        ie(() => ({ as: e.as, type: t.type })),
        h,
      )
      function P(W) {
        var X, B, D, de, pe
        if (d.value) {
          if (s.popoverState.value === 1) return
          switch (W.key) {
            case at.Space:
            case at.Enter:
              W.preventDefault(),
                (B = (X = W.target).click) == null || B.call(X),
                s.closePopover(),
                (D = se(s.button)) == null || D.focus()
              break
          }
        } else
          switch (W.key) {
            case at.Space:
            case at.Enter:
              W.preventDefault(),
                W.stopPropagation(),
                s.popoverState.value === 1 &&
                  (u == null || u(s.buttonId.value)),
                s.togglePopover()
              break
            case at.Escape:
              if (s.popoverState.value !== 0)
                return u == null ? void 0 : u(s.buttonId.value)
              if (
                !se(s.button) ||
                ((de = a.value) != null &&
                  de.activeElement &&
                  !(
                    (pe = se(s.button)) != null &&
                    pe.contains(a.value.activeElement)
                  ))
              )
                return
              W.preventDefault(), W.stopPropagation(), s.closePopover()
              break
          }
      }
      function F(W) {
        d.value || (W.key === at.Space && W.preventDefault())
      }
      function _(W) {
        var X, B
        e.disabled ||
          (d.value
            ? (s.closePopover(), (X = se(s.button)) == null || X.focus())
            : (W.preventDefault(),
              W.stopPropagation(),
              s.popoverState.value === 1 && (u == null || u(s.buttonId.value)),
              s.togglePopover(),
              (B = se(s.button)) == null || B.focus()))
      }
      function C(W) {
        W.preventDefault(), W.stopPropagation()
      }
      let R = Ou()
      function V() {
        let W = se(s.panel)
        if (!W) return
        function X() {
          Mt(R.value, {
            [tn.Forwards]: () => Pt(W, Je.First),
            [tn.Backwards]: () => Pt(W, Je.Last),
          }) === yn.Error &&
            Pt(
              Ss().filter((B) => B.dataset.headlessuiFocusGuard !== "true"),
              Mt(R.value, {
                [tn.Forwards]: Je.Next,
                [tn.Backwards]: Je.Previous,
              }),
              { relativeTo: se(s.button) },
            )
        }
        X()
      }
      return () => {
        let W = s.popoverState.value === 0,
          X = { open: W },
          { id: B, ...D } = e,
          de = d.value
            ? { ref: h, type: k.value, onKeydown: P, onClick: _ }
            : {
                ref: h,
                id: B,
                type: k.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": se(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: P,
                onKeyup: F,
                onClick: _,
                onMousedown: C,
              }
        return lt(Qe, [
          ln({
            ourProps: de,
            theirProps: { ...t, ...D },
            slot: X,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          W &&
            !d.value &&
            s.isPortalled.value &&
            lt(or, {
              id: b,
              features: lr.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: V,
            }),
        ])
      }
    },
  }),
  oi = At({
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
        i = ie(() => dr(a.panel)),
        u = `headlessui-focus-sentinel-before-${Tn()}`,
        f = `headlessui-focus-sentinel-after-${Tn()}`
      r({ el: a.panel, $el: a.panel }),
        gt(() => {
          a.panelId.value = e.id
        }),
        kn(() => {
          a.panelId.value = null
        }),
        Kt(Tu, a.panelId),
        sn(() => {
          var C, R
          if (!s || a.popoverState.value !== 0 || !a.panel) return
          let V = (C = i.value) == null ? void 0 : C.activeElement
          ;((R = se(a.panel)) != null && R.contains(V)) ||
            Pt(se(a.panel), Je.First)
        })
      let d = mp(),
        h = ie(() =>
          d !== null
            ? (d.value & Or.Open) === Or.Open
            : a.popoverState.value === 0,
        )
      function b(C) {
        var R, V
        switch (C.key) {
          case at.Escape:
            if (
              a.popoverState.value !== 0 ||
              !se(a.panel) ||
              (i.value &&
                !(
                  (R = se(a.panel)) != null && R.contains(i.value.activeElement)
                ))
            )
              return
            C.preventDefault(),
              C.stopPropagation(),
              a.closePopover(),
              (V = se(a.button)) == null || V.focus()
            break
        }
      }
      function k(C) {
        var R, V, W, X, B
        let D = C.relatedTarget
        D &&
          se(a.panel) &&
          (((R = se(a.panel)) != null && R.contains(D)) ||
            (a.closePopover(),
            (((W =
              (V = se(a.beforePanelSentinel)) == null ? void 0 : V.contains) !=
              null &&
              W.call(V, D)) ||
              ((B =
                (X = se(a.afterPanelSentinel)) == null ? void 0 : X.contains) !=
                null &&
                B.call(X, D))) &&
              D.focus({ preventScroll: !0 })))
      }
      let P = Ou()
      function F() {
        let C = se(a.panel)
        if (!C) return
        function R() {
          Mt(P.value, {
            [tn.Forwards]: () => {
              var V
              Pt(C, Je.First) === yn.Error &&
                ((V = se(a.afterPanelSentinel)) == null || V.focus())
            },
            [tn.Backwards]: () => {
              var V
              ;(V = se(a.button)) == null || V.focus({ preventScroll: !0 })
            },
          })
        }
        R()
      }
      function _() {
        let C = se(a.panel)
        if (!C) return
        function R() {
          Mt(P.value, {
            [tn.Forwards]: () => {
              let V = se(a.button),
                W = se(a.panel)
              if (!V) return
              let X = Ss(),
                B = X.indexOf(V),
                D = X.slice(0, B + 1),
                de = [...X.slice(B + 1), ...D]
              for (let pe of de.slice())
                if (
                  pe.dataset.headlessuiFocusGuard === "true" ||
                  (W != null && W.contains(pe))
                ) {
                  let bt = de.indexOf(pe)
                  bt !== -1 && de.splice(bt, 1)
                }
              Pt(de, Je.First, { sorted: !1 })
            },
            [tn.Backwards]: () => {
              var V
              Pt(C, Je.Previous) === yn.Error &&
                ((V = se(a.button)) == null || V.focus())
            },
          })
        }
        R()
      }
      return () => {
        let C = { open: a.popoverState.value === 0, close: a.close },
          { id: R, focus: V, ...W } = e,
          X = {
            ref: a.panel,
            id: R,
            onKeydown: b,
            onFocusout: s && a.popoverState.value === 0 ? k : void 0,
            tabIndex: -1,
          }
        return ln({
          ourProps: X,
          theirProps: { ...t, ...W },
          attrs: t,
          slot: C,
          slots: {
            ...n,
            default: (...B) => {
              var D
              return [
                lt(Qe, [
                  h.value &&
                    a.isPortalled.value &&
                    lt(or, {
                      id: u,
                      ref: a.beforePanelSentinel,
                      features: lr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: F,
                    }),
                  (D = n.default) == null ? void 0 : D.call(n, ...B),
                  h.value &&
                    a.isPortalled.value &&
                    lt(or, {
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
  Np = At({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = _e(!0)
      return () =>
        t.value
          ? lt(or, {
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
var jp = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(jp || {}),
  Fp = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(Fp || {})
let Nu = Symbol("TabsContext")
function Nr(e) {
  let t = ft(Nu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Nr), n)
  }
  return t
}
let al = Symbol("TabsSSRContext"),
  Lp = At({
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
        f = ie(() => e.selectedIndex !== null),
        d = ie(() => (f.value ? e.selectedIndex : a.value))
      function h(_) {
        var C
        let R = Jn(b.tabs.value, se),
          V = Jn(b.panels.value, se),
          W = R.filter((X) => {
            var B
            return !((B = se(X)) != null && B.hasAttribute("disabled"))
          })
        if (_ < 0 || _ > R.length - 1) {
          let X = Mt(a.value === null ? 0 : Math.sign(_ - a.value), {
              [-1]: () => 1,
              0: () =>
                Mt(Math.sign(_), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            B = Mt(X, {
              0: () => R.indexOf(W[0]),
              1: () => R.indexOf(W[W.length - 1]),
            })
          B !== -1 && (a.value = B), (b.tabs.value = R), (b.panels.value = V)
        } else {
          let X = R.slice(0, _),
            B = [...R.slice(_), ...X].find((de) => W.includes(de))
          if (!B) return
          let D = (C = R.indexOf(B)) != null ? C : b.selectedIndex.value
          D === -1 && (D = b.selectedIndex.value),
            (a.value = D),
            (b.tabs.value = R),
            (b.panels.value = V)
        }
      }
      let b = {
        selectedIndex: ie(() => {
          var _, C
          return (C = (_ = a.value) != null ? _ : e.defaultIndex) != null
            ? C
            : null
        }),
        orientation: ie(() => (e.vertical ? "vertical" : "horizontal")),
        activation: ie(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: u,
        setSelectedIndex(_) {
          d.value !== _ && r("change", _), f.value || h(_)
        },
        registerTab(_) {
          var C
          if (i.value.includes(_)) return
          let R = i.value[a.value]
          i.value.push(_), (i.value = Jn(i.value, se))
          let V = (C = i.value.indexOf(R)) != null ? C : a.value
          V !== -1 && (a.value = V)
        },
        unregisterTab(_) {
          let C = i.value.indexOf(_)
          C !== -1 && i.value.splice(C, 1)
        },
        registerPanel(_) {
          u.value.includes(_) || (u.value.push(_), (u.value = Jn(u.value, se)))
        },
        unregisterPanel(_) {
          let C = u.value.indexOf(_)
          C !== -1 && u.value.splice(C, 1)
        },
      }
      Kt(Nu, b)
      let k = _e({ tabs: [], panels: [] }),
        P = _e(!1)
      gt(() => {
        P.value = !0
      }),
        Kt(
          al,
          ie(() => (P.value ? null : k.value)),
        )
      let F = ie(() => e.selectedIndex)
      return (
        gt(() => {
          rn(
            [F],
            () => {
              var _
              return h((_ = e.selectedIndex) != null ? _ : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        sn(() => {
          if (!f.value || d.value == null || b.tabs.value.length <= 0) return
          let _ = Jn(b.tabs.value, se)
          _.some((C, R) => se(b.tabs.value[R]) !== se(C)) &&
            b.setSelectedIndex(
              _.findIndex((C) => se(C) === se(b.tabs.value[d.value])),
            )
        }),
        () => {
          let _ = { selectedIndex: a.value }
          return lt(Qe, [
            i.value.length <= 0 &&
              lt(Np, {
                onFocus: () => {
                  for (let C of i.value) {
                    let R = se(C)
                    if ((R == null ? void 0 : R.tabIndex) === 0)
                      return R.focus(), !0
                  }
                  return !1
                },
              }),
            ln({
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
  Bp = At({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = Nr("TabList")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value },
          a = { role: "tablist", "aria-orientation": r.orientation.value }
        return ln({
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
  Dp = At({
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
        gt(() => s.registerTab(a)),
        kn(() => s.unregisterTab(a))
      let i = ft(al),
        u = ie(() => {
          if (i.value) {
            let C = i.value.tabs.indexOf(e.id)
            return C === -1 ? i.value.tabs.push(e.id) - 1 : C
          }
          return -1
        }),
        f = ie(() => {
          let C = s.tabs.value.indexOf(a)
          return C === -1 ? u.value : C
        }),
        d = ie(() => f.value === s.selectedIndex.value)
      function h(C) {
        var R
        let V = C()
        if (V === yn.Success && s.activation.value === "auto") {
          let W = (R = dr(a)) == null ? void 0 : R.activeElement,
            X = s.tabs.value.findIndex((B) => se(B) === W)
          X !== -1 && s.setSelectedIndex(X)
        }
        return V
      }
      function b(C) {
        let R = s.tabs.value.map((V) => se(V)).filter(Boolean)
        if (C.key === at.Space || C.key === at.Enter) {
          C.preventDefault(), C.stopPropagation(), s.setSelectedIndex(f.value)
          return
        }
        switch (C.key) {
          case at.Home:
          case at.PageUp:
            return (
              C.preventDefault(), C.stopPropagation(), h(() => Pt(R, Je.First))
            )
          case at.End:
          case at.PageDown:
            return (
              C.preventDefault(), C.stopPropagation(), h(() => Pt(R, Je.Last))
            )
        }
        if (
          h(() =>
            Mt(s.orientation.value, {
              vertical() {
                return C.key === at.ArrowUp
                  ? Pt(R, Je.Previous | Je.WrapAround)
                  : C.key === at.ArrowDown
                    ? Pt(R, Je.Next | Je.WrapAround)
                    : yn.Error
              },
              horizontal() {
                return C.key === at.ArrowLeft
                  ? Pt(R, Je.Previous | Je.WrapAround)
                  : C.key === at.ArrowRight
                    ? Pt(R, Je.Next | Je.WrapAround)
                    : yn.Error
              },
            }),
          ) === yn.Success
        )
          return C.preventDefault()
      }
      let k = _e(!1)
      function P() {
        var C
        k.value ||
          ((k.value = !0),
          !e.disabled &&
            ((C = se(a)) == null || C.focus({ preventScroll: !0 }),
            s.setSelectedIndex(f.value),
            Pp(() => {
              k.value = !1
            })))
      }
      function F(C) {
        C.preventDefault()
      }
      let _ = Pu(
        ie(() => ({ as: e.as, type: t.type })),
        a,
      )
      return () => {
        var C
        let R = { selected: d.value },
          { id: V, ...W } = e,
          X = {
            ref: a,
            onKeydown: b,
            onMousedown: F,
            onClick: P,
            id: V,
            role: "tab",
            type: _.value,
            "aria-controls":
              (C = se(s.panels.value[f.value])) == null ? void 0 : C.id,
            "aria-selected": d.value,
            tabIndex: d.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return ln({
          ourProps: X,
          theirProps: W,
          slot: R,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  Hp = At({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = Nr("TabPanels")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value }
        return ln({
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
  Xn = At({
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
        gt(() => s.registerPanel(a)),
        kn(() => s.unregisterPanel(a))
      let i = ft(al),
        u = ie(() => {
          if (i.value) {
            let h = i.value.panels.indexOf(e.id)
            return h === -1 ? i.value.panels.push(e.id) - 1 : h
          }
          return -1
        }),
        f = ie(() => {
          let h = s.panels.value.indexOf(a)
          return h === -1 ? u.value : h
        }),
        d = ie(() => f.value === s.selectedIndex.value)
      return () => {
        var h
        let b = { selected: d.value },
          { id: k, tabIndex: P, ...F } = e,
          _ = {
            ref: a,
            id: k,
            role: "tabpanel",
            "aria-labelledby":
              (h = se(s.tabs.value[f.value])) == null ? void 0 : h.id,
            tabIndex: d.value ? P : -1,
          }
        return !d.value && e.unmount && !e.static
          ? lt(or, { as: "span", ..._ })
          : ln({
              ourProps: _,
              theirProps: F,
              slot: b,
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
 */ const zp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  nt =
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
      lt(
        "svg",
        {
          ...Qr,
          width: n || Qr.width,
          height: n || Qr.height,
          stroke: a || Qr.stroke,
          "stroke-width": s ? (Number(r) * 24) / Number(n) : r,
          ...f,
          class: ["lucide", `lucide-${zp(e)}`],
          ...u,
        },
        [...t.map((h) => lt(...h)), ...(d.default ? [d.default()] : [])],
      )
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ii = nt("CheckIcon", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qp = nt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wp = nt("CloudDrizzleIcon", [
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
 */ const Up = nt("CloudSunIcon", [
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
 */ const ju = nt("EyeOffIcon", [
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
 */ const Vp = nt("EyeIcon", [
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
 */ const Gp = nt("FrameIcon", [
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
 */ const Kp = nt("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yp = nt("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xp = nt("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zp = nt("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jp = nt("PencilRulerIcon", [
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
 */ const Qp = nt("RabbitIcon", [
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
 */ const as = nt("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eg = nt("ShowerHeadIcon", [
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
 */ const tg = nt("SunIcon", [
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
 */ const ca = nt("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = nt("TurtleIcon", [
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
 */ const Ia = nt("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ll = (e) => (Xa("data-v-d583f98d"), (e = e()), Za(), e),
  rg = { class: "flex justify-center p-5 gap-5 content-center" },
  sg = ll(() => m("div", { class: "w-1/12" }, null, -1)),
  ag = { class: "flex justify-between gap-2 w-full content-center" },
  lg = { class: "flex gap-1 p-2" },
  og = { class: "flex gap-5 p-2 relative" },
  ig = { href: "/portfolio" },
  ug = { href: "/" },
  cg = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  fg = ll(() => m("b", null, "Art and Animation", -1)),
  dg = [fg],
  hg = { class: "flex gap-5 content-center" },
  vg = { class: "lg:hidden flex" },
  pg = { class: "flex gap-1 p-2" },
  gg = { class: "flex flex-col gap-2 p-2" },
  bg = { class: "flex justify-between" },
  mg = ll(() => m("div", { class: "w-1/12" }, null, -1)),
  yg = { class: "flex justify-between items-center" },
  wg = { class: "flex gap-1 p-2" },
  xg = $v(
    '<a href="/contact" data-v-d583f98d><li class="py-2 px-3 rounded" data-v-d583f98d>Contact</li></a><a href="/portfolio" data-v-d583f98d><li class="py-2 px-3 rounded" data-v-d583f98d>Web Portfolio</li></a><a href="/" data-v-d583f98d><li class="py-2 px-3 rounded" data-v-d583f98d>Web Services</li></a><li class="py-2 px-3 rounded opacity-75" data-v-d583f98d>Creative Projects</li><ul class="ml-5" data-v-d583f98d><li class="py-2 px-3 rounded" data-v-d583f98d>Art and Animation</li><li class="py-2 px-3 rounded" data-v-d583f98d>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-d583f98d>Custom Software</li><li class="py-2 px-3 rounded" data-v-d583f98d>Cooking and Recipes</li></ul><a href="/about-me" data-v-d583f98d><li class="py-2 px-3 rounded" data-v-d583f98d>About Me</li></a>',
    6,
  ),
  _g = [xg],
  kg = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = _e(5),
        r = t,
        s = (u) => {
          ;(n.value = u.target.value), r("update:brightness", n.value)
        }
      gt(() => {
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
        he(),
        Fe(
          Qe,
          null,
          [
            m("div", rg, [
              sg,
              m(
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
                  m("div", ag, [
                    m("div", lg, [
                      le(
                        fe(ca),
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
                      m(
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
                    m("div", og, [
                      m("a", ig, [
                        m(
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
                      ]),
                      m("a", ug, [
                        m(
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
                      ]),
                      le(
                        fe(Oa),
                        { class: "relative inline-block text-left" },
                        {
                          default: ut(() => [
                            le(
                              fe(li),
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
                                default: ut(() => [
                                  xe(" Creative Projects"),
                                  le(fe(qp)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            le(
                              fe(oi),
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
                                default: ut(() => [
                                  m("div", cg, [
                                    m(
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
                                      dg,
                                      2,
                                    ),
                                    m(
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
                                    m(
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
                                    m(
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
                      m(
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
                    m("div", hg, [
                      m(
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
                    ]),
                  ]),
                ],
                2,
              ),
              m(
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
                  m("div", vg, [
                    m("div", pg, [
                      le(
                        fe(ca),
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
                      m(
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
                    fe(Yp),
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
                  le(fe(Oa), null, {
                    default: ut(() => [
                      le(
                        fe(li),
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
                          default: ut(() => [
                            n.value == 5
                              ? (he(),
                                Ke(fe(tg), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (he(),
                                  Ke(fe(Up), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (he(),
                                    Ke(fe(Wp), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (he(),
                                      Ke(fe(Zp), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (he(),
                                      Ke(fe(Xp), {
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
                        fe(oi),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: ut(() => [
                            m("div", gg, [
                              m("div", bg, [
                                ou(
                                  m(
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
                                  [[ap, n.value]],
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
              mg,
            ]),
            m(
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
                m("div", yg, [
                  m("div", wg, [
                    le(
                      fe(ca),
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
                    m(
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
                    fe(Ia),
                    {
                      class: M({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: f[2] || (f[2] = (d) => i()),
                      "aria-label": "Close mobile menu",
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                m(
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
                  _g,
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
  $g = Tr(kg, [["__scopeId", "data-v-d583f98d"]]),
  Eg = { class: "flex justify-center py-5 flex-col" },
  Sg = { class: "inline-block relative" },
  Cg = { class: "font-semibold text-center px-1" },
  Pg = { class: "flex py-5 justify-center gap-3 w-full" },
  Mg = { href: "/pricing" },
  Ag = {
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
  Og = Object.assign(Ag, {
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
      gt(() => {
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
      const s = ie(() => t.value[n.value])
      return (a, i) => {
        const u = q0("typewriter")
        return (
          he(),
          Fe("div", Eg, [
            m(
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
                m("div", Sg, [
                  ou((he(), Fe("span", Cg, [xe(Rt(s.value), 1)])), [
                    [u, s.value],
                  ]),
                  m(
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
            m(
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
            m("div", Pg, [
              m(
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
              m("a", Mg, [
                m(
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
var Ig =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {}
function Rg(e) {
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
  })(Ig, function () {
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
      b = function (l, o) {
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
      P = function (l) {
        if (l.length < 2) return null
        var o = l.length - 1
        return k(l[o]) == "string" ? l[o].toLowerCase() : null
      },
      F = Math.PI,
      _ = {
        clip_rgb: s,
        limit: n,
        type: d,
        unpack: b,
        last: P,
        PI: F,
        TWOPI: F * 2,
        PITHIRD: F / 3,
        DEG2RAD: F / 180,
        RAD2DEG: 180 / F,
      },
      C = { format: {}, autodetect: [] },
      R = _.last,
      V = _.clip_rgb,
      W = _.type,
      X = C,
      B = function () {
        for (var o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        var v = this
        if (
          W(o[0]) === "object" &&
          o[0].constructor &&
          o[0].constructor === this.constructor
        )
          return o[0]
        var w = R(o),
          x = !1
        if (!w) {
          ;(x = !0),
            X.sorted ||
              ((X.autodetect = X.autodetect.sort(function (N, Z) {
                return Z.p - N.p
              })),
              (X.sorted = !0))
          for (var g = 0, $ = X.autodetect; g < $.length; g += 1) {
            var S = $[g]
            if (((w = S.test.apply(S, o)), w)) break
          }
        }
        if (X.format[w]) {
          var O = X.format[w].apply(null, x ? o : o.slice(0, -1))
          v._rgb = V(O)
        } else throw new Error("unknown format: " + o)
        v._rgb.length === 3 && v._rgb.push(1)
      }
    B.prototype.toString = function () {
      return W(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var D = B,
      de = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(de.Color, [null].concat(l)))()
      }
    ;(de.Color = D), (de.version = "2.4.2")
    var pe = de,
      bt = _.unpack,
      We = Math.max,
      Xe = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = bt(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2]
        ;(v = v / 255), (w = w / 255), (x = x / 255)
        var g = 1 - We(v, We(w, x)),
          $ = g < 1 ? 1 / (1 - g) : 0,
          S = (1 - v - g) * $,
          O = (1 - w - g) * $,
          N = (1 - x - g) * $
        return [S, O, N, g]
      },
      xt = Xe,
      qe = _.unpack,
      Xt = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = qe(l, "cmyk")
        var c = l[0],
          v = l[1],
          w = l[2],
          x = l[3],
          g = l.length > 4 ? l[4] : 1
        return x === 1
          ? [0, 0, 0, g]
          : [
              c >= 1 ? 0 : 255 * (1 - c) * (1 - x),
              v >= 1 ? 0 : 255 * (1 - v) * (1 - x),
              w >= 1 ? 0 : 255 * (1 - w) * (1 - x),
              g,
            ]
      },
      qt = Xt,
      q = pe,
      ne = D,
      J = C,
      mt = _.unpack,
      De = _.type,
      ht = xt
    ;(ne.prototype.cmyk = function () {
      return ht(this._rgb)
    }),
      (q.cmyk = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ne,
          [null].concat(l, ["cmyk"]),
        ))()
      }),
      (J.format.cmyk = qt),
      J.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = mt(l, "cmyk")), De(l) === "array" && l.length === 4))
            return "cmyk"
        },
      })
    var Ze = _.unpack,
      Wt = _.last,
      Ot = function (l) {
        return Math.round(l * 100) / 100
      },
      _t = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Ze(l, "hsla"),
          v = Wt(l) || "lsa"
        return (
          (c[0] = Ot(c[0] || 0)),
          (c[1] = Ot(c[1] * 100) + "%"),
          (c[2] = Ot(c[2] * 100) + "%"),
          v === "hsla" || (c.length > 3 && c[3] < 1)
            ? ((c[3] = c.length > 3 ? c[3] : 1), (v = "hsla"))
            : (c.length = 3),
          v + "(" + c.join(",") + ")"
        )
      },
      Ve = _t,
      I = _.unpack,
      Q = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = I(l, "rgba")
        var c = l[0],
          v = l[1],
          w = l[2]
        ;(c /= 255), (v /= 255), (w /= 255)
        var x = Math.min(c, v, w),
          g = Math.max(c, v, w),
          $ = (g + x) / 2,
          S,
          O
        return (
          g === x
            ? ((S = 0), (O = Number.NaN))
            : (S = $ < 0.5 ? (g - x) / (g + x) : (g - x) / (2 - g - x)),
          c == g
            ? (O = (v - w) / (g - x))
            : v == g
              ? (O = 2 + (w - c) / (g - x))
              : w == g && (O = 4 + (c - v) / (g - x)),
          (O *= 60),
          O < 0 && (O += 360),
          l.length > 3 && l[3] !== void 0 ? [O, S, $, l[3]] : [O, S, $]
        )
      },
      G = Q,
      ae = _.unpack,
      Me = _.last,
      p = Ve,
      y = G,
      E = Math.round,
      A = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = ae(l, "rgba"),
          v = Me(l) || "rgb"
        return v.substr(0, 3) == "hsl"
          ? p(y(c), v)
          : ((c[0] = E(c[0])),
            (c[1] = E(c[1])),
            (c[2] = E(c[2])),
            (v === "rgba" || (c.length > 3 && c[3] < 1)) &&
              ((c[3] = c.length > 3 ? c[3] : 1), (v = "rgba")),
            v + "(" + c.slice(0, v === "rgb" ? 3 : 4).join(",") + ")")
      },
      T = A,
      j = _.unpack,
      Y = Math.round,
      U = function () {
        for (var l, o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        o = j(o, "hsl")
        var v = o[0],
          w = o[1],
          x = o[2],
          g,
          $,
          S
        if (w === 0) g = $ = S = x * 255
        else {
          var O = [0, 0, 0],
            N = [0, 0, 0],
            Z = x < 0.5 ? x * (1 + w) : x + w - x * w,
            H = 2 * x - Z,
            re = v / 360
          ;(O[0] = re + 1 / 3), (O[1] = re), (O[2] = re - 1 / 3)
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
          ;(l = [Y(N[0] * 255), Y(N[1] * 255), Y(N[2] * 255)]),
            (g = l[0]),
            ($ = l[1]),
            (S = l[2])
        }
        return o.length > 3 ? [g, $, S, o[3]] : [g, $, S, 1]
      },
      K = U,
      L = K,
      ee = C,
      ue = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      oe =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      ve =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      me =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Ae =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Le =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Ue = Math.round,
      kt = function (l) {
        l = l.toLowerCase().trim()
        var o
        if (ee.format.named)
          try {
            return ee.format.named(l)
          } catch {}
        if ((o = l.match(ue))) {
          for (var c = o.slice(1, 4), v = 0; v < 3; v++) c[v] = +c[v]
          return (c[3] = 1), c
        }
        if ((o = l.match(oe))) {
          for (var w = o.slice(1, 5), x = 0; x < 4; x++) w[x] = +w[x]
          return w
        }
        if ((o = l.match(ve))) {
          for (var g = o.slice(1, 4), $ = 0; $ < 3; $++) g[$] = Ue(g[$] * 2.55)
          return (g[3] = 1), g
        }
        if ((o = l.match(me))) {
          for (var S = o.slice(1, 5), O = 0; O < 3; O++) S[O] = Ue(S[O] * 2.55)
          return (S[3] = +S[3]), S
        }
        if ((o = l.match(Ae))) {
          var N = o.slice(1, 4)
          ;(N[1] *= 0.01), (N[2] *= 0.01)
          var Z = L(N)
          return (Z[3] = 1), Z
        }
        if ((o = l.match(Le))) {
          var H = o.slice(1, 4)
          ;(H[1] *= 0.01), (H[2] *= 0.01)
          var re = L(H)
          return (re[3] = +o[4]), re
        }
      }
    kt.test = function (l) {
      return (
        ue.test(l) ||
        oe.test(l) ||
        ve.test(l) ||
        me.test(l) ||
        Ae.test(l) ||
        Le.test(l)
      )
    }
    var on = kt,
      jr = pe,
      un = D,
      vr = C,
      yt = _.type,
      It = T,
      pr = on
    ;(un.prototype.css = function (l) {
      return It(this._rgb, l)
    }),
      (jr.css = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          un,
          [null].concat(l, ["css"]),
        ))()
      }),
      (vr.format.css = pr),
      vr.autodetect.push({
        p: 5,
        test: function (l) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && yt(l) === "string" && pr.test(l)) return "css"
        },
      })
    var fl = D,
      Xu = pe,
      Zu = C,
      Ju = _.unpack
    ;(Zu.format.gl = function () {
      for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
      var c = Ju(l, "rgba")
      return (c[0] *= 255), (c[1] *= 255), (c[2] *= 255), c
    }),
      (Xu.gl = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          fl,
          [null].concat(l, ["gl"]),
        ))()
      }),
      (fl.prototype.gl = function () {
        var l = this._rgb
        return [l[0] / 255, l[1] / 255, l[2] / 255, l[3]]
      })
    var Qu = _.unpack,
      ec = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Qu(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2],
          g = Math.min(v, w, x),
          $ = Math.max(v, w, x),
          S = $ - g,
          O = (S * 100) / 255,
          N = (g / (255 - S)) * 100,
          Z
        return (
          S === 0
            ? (Z = Number.NaN)
            : (v === $ && (Z = (w - x) / S),
              w === $ && (Z = 2 + (x - v) / S),
              x === $ && (Z = 4 + (v - w) / S),
              (Z *= 60),
              Z < 0 && (Z += 360)),
          [Z, O, N]
        )
      },
      tc = ec,
      nc = _.unpack,
      rc = Math.floor,
      sc = function () {
        for (var l, o, c, v, w, x, g = [], $ = arguments.length; $--; )
          g[$] = arguments[$]
        g = nc(g, "hcg")
        var S = g[0],
          O = g[1],
          N = g[2],
          Z,
          H,
          re
        N = N * 255
        var te = O * 255
        if (O === 0) Z = H = re = N
        else {
          S === 360 && (S = 0),
            S > 360 && (S -= 360),
            S < 0 && (S += 360),
            (S /= 60)
          var ye = rc(S),
            $e = S - ye,
            Se = N * (1 - O),
            Oe = Se + te * (1 - $e),
            ot = Se + te * $e,
            st = Se + te
          switch (ye) {
            case 0:
              ;(l = [st, ot, Se]), (Z = l[0]), (H = l[1]), (re = l[2])
              break
            case 1:
              ;(o = [Oe, st, Se]), (Z = o[0]), (H = o[1]), (re = o[2])
              break
            case 2:
              ;(c = [Se, st, ot]), (Z = c[0]), (H = c[1]), (re = c[2])
              break
            case 3:
              ;(v = [Se, Oe, st]), (Z = v[0]), (H = v[1]), (re = v[2])
              break
            case 4:
              ;(w = [ot, Se, st]), (Z = w[0]), (H = w[1]), (re = w[2])
              break
            case 5:
              ;(x = [st, Se, Oe]), (Z = x[0]), (H = x[1]), (re = x[2])
              break
          }
        }
        return [Z, H, re, g.length > 3 ? g[3] : 1]
      },
      ac = sc,
      lc = _.unpack,
      oc = _.type,
      ic = pe,
      dl = D,
      hl = C,
      uc = tc
    ;(dl.prototype.hcg = function () {
      return uc(this._rgb)
    }),
      (ic.hcg = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          dl,
          [null].concat(l, ["hcg"]),
        ))()
      }),
      (hl.format.hcg = ac),
      hl.autodetect.push({
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
          w = c[1],
          x = c[2],
          g = c[3],
          $ = fc(l) || "auto"
        g === void 0 && (g = 1),
          $ === "auto" && ($ = g < 1 ? "rgba" : "rgb"),
          (v = Fr(v)),
          (w = Fr(w)),
          (x = Fr(x))
        var S = (v << 16) | (w << 8) | x,
          O = "000000" + S.toString(16)
        O = O.substr(O.length - 6)
        var N = "0" + Fr(g * 255).toString(16)
        switch (((N = N.substr(N.length - 2)), $.toLowerCase())) {
          case "rgba":
            return "#" + O + N
          case "argb":
            return "#" + N + O
          default:
            return "#" + O
        }
      },
      vl = dc,
      hc = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      vc = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      pc = function (l) {
        if (l.match(hc)) {
          ;(l.length === 4 || l.length === 7) && (l = l.substr(1)),
            l.length === 3 &&
              ((l = l.split("")), (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]))
          var o = parseInt(l, 16),
            c = o >> 16,
            v = (o >> 8) & 255,
            w = o & 255
          return [c, v, w, 1]
        }
        if (l.match(vc)) {
          ;(l.length === 5 || l.length === 9) && (l = l.substr(1)),
            l.length === 4 &&
              ((l = l.split("")),
              (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2] + l[3] + l[3]))
          var x = parseInt(l, 16),
            g = (x >> 24) & 255,
            $ = (x >> 16) & 255,
            S = (x >> 8) & 255,
            O = Math.round(((x & 255) / 255) * 100) / 100
          return [g, $, S, O]
        }
        throw new Error("unknown hex color: " + l)
      },
      pl = pc,
      gc = pe,
      gl = D,
      bc = _.type,
      bl = C,
      mc = vl
    ;(gl.prototype.hex = function (l) {
      return mc(this._rgb, l)
    }),
      (gc.hex = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          gl,
          [null].concat(l, ["hex"]),
        ))()
      }),
      (bl.format.hex = pl),
      bl.autodetect.push({
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
      ml = _.TWOPI,
      wc = Math.min,
      xc = Math.sqrt,
      _c = Math.acos,
      kc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = yc(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2]
        ;(v /= 255), (w /= 255), (x /= 255)
        var g,
          $ = wc(v, w, x),
          S = (v + w + x) / 3,
          O = S > 0 ? 1 - $ / S : 0
        return (
          O === 0
            ? (g = NaN)
            : ((g = (v - w + (v - x)) / 2),
              (g /= xc((v - w) * (v - w) + (v - x) * (w - x))),
              (g = _c(g)),
              x > w && (g = ml - g),
              (g /= ml)),
          [g * 360, O, S]
        )
      },
      $c = kc,
      Ec = _.unpack,
      Ps = _.limit,
      Dn = _.TWOPI,
      Ms = _.PITHIRD,
      Hn = Math.cos,
      Sc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = Ec(l, "hsi")
        var c = l[0],
          v = l[1],
          w = l[2],
          x,
          g,
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
              (g = 1 - ($ + x)))
            : c < 2 / 3
              ? ((c -= 1 / 3),
                (x = (1 - v) / 3),
                (g = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
                ($ = 1 - (x + g)))
              : ((c -= 2 / 3),
                (g = (1 - v) / 3),
                ($ = (1 + (v * Hn(Dn * c)) / Hn(Ms - Dn * c)) / 3),
                (x = 1 - (g + $))),
          (x = Ps(w * x * 3)),
          (g = Ps(w * g * 3)),
          ($ = Ps(w * $ * 3)),
          [x * 255, g * 255, $ * 255, l.length > 3 ? l[3] : 1]
        )
      },
      Cc = Sc,
      Pc = _.unpack,
      Mc = _.type,
      Ac = pe,
      yl = D,
      wl = C,
      Oc = $c
    ;(yl.prototype.hsi = function () {
      return Oc(this._rgb)
    }),
      (Ac.hsi = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          yl,
          [null].concat(l, ["hsi"]),
        ))()
      }),
      (wl.format.hsi = Cc),
      wl.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = Pc(l, "hsi")), Mc(l) === "array" && l.length === 3))
            return "hsi"
        },
      })
    var Ic = _.unpack,
      Rc = _.type,
      Tc = pe,
      xl = D,
      _l = C,
      Nc = G
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
      (_l.format.hsl = K),
      _l.autodetect.push({
        p: 2,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = Ic(l, "hsl")), Rc(l) === "array" && l.length === 3))
            return "hsl"
        },
      })
    var jc = _.unpack,
      Fc = Math.min,
      Lc = Math.max,
      Bc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = jc(l, "rgb")
        var c = l[0],
          v = l[1],
          w = l[2],
          x = Fc(c, v, w),
          g = Lc(c, v, w),
          $ = g - x,
          S,
          O,
          N
        return (
          (N = g / 255),
          g === 0
            ? ((S = Number.NaN), (O = 0))
            : ((O = $ / g),
              c === g && (S = (v - w) / $),
              v === g && (S = 2 + (w - c) / $),
              w === g && (S = 4 + (c - v) / $),
              (S *= 60),
              S < 0 && (S += 360)),
          [S, O, N]
        )
      },
      Dc = Bc,
      Hc = _.unpack,
      zc = Math.floor,
      qc = function () {
        for (var l, o, c, v, w, x, g = [], $ = arguments.length; $--; )
          g[$] = arguments[$]
        g = Hc(g, "hsv")
        var S = g[0],
          O = g[1],
          N = g[2],
          Z,
          H,
          re
        if (((N *= 255), O === 0)) Z = H = re = N
        else {
          S === 360 && (S = 0),
            S > 360 && (S -= 360),
            S < 0 && (S += 360),
            (S /= 60)
          var te = zc(S),
            ye = S - te,
            $e = N * (1 - O),
            Se = N * (1 - O * ye),
            Oe = N * (1 - O * (1 - ye))
          switch (te) {
            case 0:
              ;(l = [N, Oe, $e]), (Z = l[0]), (H = l[1]), (re = l[2])
              break
            case 1:
              ;(o = [Se, N, $e]), (Z = o[0]), (H = o[1]), (re = o[2])
              break
            case 2:
              ;(c = [$e, N, Oe]), (Z = c[0]), (H = c[1]), (re = c[2])
              break
            case 3:
              ;(v = [$e, Se, N]), (Z = v[0]), (H = v[1]), (re = v[2])
              break
            case 4:
              ;(w = [Oe, $e, N]), (Z = w[0]), (H = w[1]), (re = w[2])
              break
            case 5:
              ;(x = [N, $e, Se]), (Z = x[0]), (H = x[1]), (re = x[2])
              break
          }
        }
        return [Z, H, re, g.length > 3 ? g[3] : 1]
      },
      Wc = qc,
      Uc = _.unpack,
      Vc = _.type,
      Gc = pe,
      kl = D,
      $l = C,
      Kc = Dc
    ;(kl.prototype.hsv = function () {
      return Kc(this._rgb)
    }),
      (Gc.hsv = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          kl,
          [null].concat(l, ["hsv"]),
        ))()
      }),
      ($l.format.hsv = Wc),
      $l.autodetect.push({
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
      El = Math.pow,
      Xc = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Yc(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2],
          g = Zc(v, w, x),
          $ = g[0],
          S = g[1],
          O = g[2],
          N = 116 * S - 16
        return [N < 0 ? 0 : N, 500 * ($ - S), 200 * (S - O)]
      },
      As = function (l) {
        return (l /= 255) <= 0.04045 ? l / 12.92 : El((l + 0.055) / 1.055, 2.4)
      },
      Os = function (l) {
        return l > zn.t3 ? El(l, 1 / 3) : l / zn.t2 + zn.t0
      },
      Zc = function (l, o, c) {
        ;(l = As(l)), (o = As(o)), (c = As(c))
        var v = Os((0.4124564 * l + 0.3575761 * o + 0.1804375 * c) / zn.Xn),
          w = Os((0.2126729 * l + 0.7151522 * o + 0.072175 * c) / zn.Yn),
          x = Os((0.0193339 * l + 0.119192 * o + 0.9503041 * c) / zn.Zn)
        return [v, w, x]
      },
      Sl = Xc,
      qn = Lr,
      Jc = _.unpack,
      Qc = Math.pow,
      ef = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = Jc(l, "lab")
        var c = l[0],
          v = l[1],
          w = l[2],
          x,
          g,
          $,
          S,
          O,
          N
        return (
          (g = (c + 16) / 116),
          (x = isNaN(v) ? g : g + v / 500),
          ($ = isNaN(w) ? g : g - w / 200),
          (g = qn.Yn * Rs(g)),
          (x = qn.Xn * Rs(x)),
          ($ = qn.Zn * Rs($)),
          (S = Is(3.2404542 * x - 1.5371385 * g - 0.4985314 * $)),
          (O = Is(-0.969266 * x + 1.8760108 * g + 0.041556 * $)),
          (N = Is(0.0556434 * x - 0.2040259 * g + 1.0572252 * $)),
          [S, O, N, l.length > 3 ? l[3] : 1]
        )
      },
      Is = function (l) {
        return 255 * (l <= 0.00304 ? 12.92 * l : 1.055 * Qc(l, 1 / 2.4) - 0.055)
      },
      Rs = function (l) {
        return l > qn.t1 ? l * l * l : qn.t2 * (l - qn.t0)
      },
      Cl = ef,
      tf = _.unpack,
      nf = _.type,
      rf = pe,
      Pl = D,
      Ml = C,
      sf = Sl
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
      (Ml.format.lab = Cl),
      Ml.autodetect.push({
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
          w = c[1],
          x = c[2],
          g = of(w * w + x * x),
          $ = (uf(x, w) * lf + 360) % 360
        return cf(g * 1e4) === 0 && ($ = Number.NaN), [v, g, $]
      },
      Al = ff,
      df = _.unpack,
      hf = Sl,
      vf = Al,
      pf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = df(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2],
          g = hf(v, w, x),
          $ = g[0],
          S = g[1],
          O = g[2]
        return vf($, S, O)
      },
      gf = pf,
      bf = _.unpack,
      mf = _.DEG2RAD,
      yf = Math.sin,
      wf = Math.cos,
      xf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = bf(l, "lch"),
          v = c[0],
          w = c[1],
          x = c[2]
        return isNaN(x) && (x = 0), (x = x * mf), [v, wf(x) * w, yf(x) * w]
      },
      Ol = xf,
      _f = _.unpack,
      kf = Ol,
      $f = Cl,
      Ef = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = _f(l, "lch")
        var c = l[0],
          v = l[1],
          w = l[2],
          x = kf(c, v, w),
          g = x[0],
          $ = x[1],
          S = x[2],
          O = $f(g, $, S),
          N = O[0],
          Z = O[1],
          H = O[2]
        return [N, Z, H, l.length > 3 ? l[3] : 1]
      },
      Il = Ef,
      Sf = _.unpack,
      Cf = Il,
      Pf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Sf(l, "hcl").reverse()
        return Cf.apply(void 0, c)
      },
      Mf = Pf,
      Af = _.unpack,
      Of = _.type,
      Rl = pe,
      Br = D,
      Ts = C,
      Tl = gf
    ;(Br.prototype.lch = function () {
      return Tl(this._rgb)
    }),
      (Br.prototype.hcl = function () {
        return Tl(this._rgb).reverse()
      }),
      (Rl.lch = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Br,
          [null].concat(l, ["lch"]),
        ))()
      }),
      (Rl.hcl = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Br,
          [null].concat(l, ["hcl"]),
        ))()
      }),
      (Ts.format.lch = Il),
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
      Nl = If,
      Rf = D,
      jl = C,
      Tf = _.type,
      gr = Nl,
      Nf = pl,
      jf = vl
    ;(Rf.prototype.name = function () {
      for (
        var l = jf(this._rgb, "rgb"), o = 0, c = Object.keys(gr);
        o < c.length;
        o += 1
      ) {
        var v = c[o]
        if (gr[v] === l) return v.toLowerCase()
      }
      return l
    }),
      (jl.format.named = function (l) {
        if (((l = l.toLowerCase()), gr[l])) return Nf(gr[l])
        throw new Error("unknown color name: " + l)
      }),
      jl.autodetect.push({
        p: 5,
        test: function (l) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && Tf(l) === "string" && gr[l.toLowerCase()])
            return "named"
        },
      })
    var Ff = _.unpack,
      Lf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Ff(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2]
        return (v << 16) + (w << 8) + x
      },
      Bf = Lf,
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
      qf = pe,
      Fl = D,
      Ll = C,
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
    var Vf = pe,
      Ns = D,
      Bl = C,
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
          this._rgb.slice(0, 4).map(function (o, c) {
            return c < 3 ? (l === !1 ? o : zl(o)) : o
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
      (Bl.format.rgb = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = Dl(l, "rgba")
        return c[3] === void 0 && (c[3] = 1), c
      }),
      Bl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
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
      Gf = function (l) {
        var o = l / 100,
          c,
          v,
          w
        return (
          o < 66
            ? ((c = 255),
              (v =
                o < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (v = o - 2) +
                    104.49216199393888 * Dr(v)),
              (w =
                o < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (w = o - 10) +
                    115.67994401066147 * Dr(w)))
            : ((c =
                351.97690566805693 +
                0.114206453784165 * (c = o - 55) -
                40.25366309332127 * Dr(c)),
              (v =
                325.4494125711974 +
                0.07943456536662342 * (v = o - 50) -
                28.0852963507957 * Dr(v)),
              (w = 255)),
          [c, v, w, 1]
        )
      },
      ql = Gf,
      Kf = ql,
      Yf = _.unpack,
      Xf = Math.round,
      Zf = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        for (
          var c = Yf(l, "rgb"),
            v = c[0],
            w = c[2],
            x = 1e3,
            g = 4e4,
            $ = 0.4,
            S;
          g - x > $;

        ) {
          S = (g + x) * 0.5
          var O = Kf(S)
          O[2] / O[0] >= w / v ? (g = S) : (x = S)
        }
        return Xf(S)
      },
      Jf = Zf,
      js = pe,
      Hr = D,
      Fs = C,
      Qf = Jf
    ;(Hr.prototype.temp =
      Hr.prototype.kelvin =
      Hr.prototype.temperature =
        function () {
          return Qf(this._rgb)
        }),
      (js.temp =
        js.kelvin =
        js.temperature =
          function () {
            for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
            return new (Function.prototype.bind.apply(
              Hr,
              [null].concat(l, ["temp"]),
            ))()
          }),
      (Fs.format.temp = Fs.format.kelvin = Fs.format.temperature = ql)
    var ed = _.unpack,
      Ls = Math.cbrt,
      td = Math.pow,
      nd = Math.sign,
      rd = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = ed(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2],
          g = [Bs(v / 255), Bs(w / 255), Bs(x / 255)],
          $ = g[0],
          S = g[1],
          O = g[2],
          N = Ls(0.4122214708 * $ + 0.5363325363 * S + 0.0514459929 * O),
          Z = Ls(0.2119034982 * $ + 0.6806995451 * S + 0.1073969566 * O),
          H = Ls(0.0883024619 * $ + 0.2817188376 * S + 0.6299787005 * O)
        return [
          0.2104542553 * N + 0.793617785 * Z - 0.0040720468 * H,
          1.9779984951 * N - 2.428592205 * Z + 0.4505937099 * H,
          0.0259040371 * N + 0.7827717662 * Z - 0.808675766 * H,
        ]
      },
      Wl = rd
    function Bs(l) {
      var o = Math.abs(l)
      return o < 0.04045
        ? l / 12.92
        : (nd(l) || 1) * td((o + 0.055) / 1.055, 2.4)
    }
    var sd = _.unpack,
      zr = Math.pow,
      ad = Math.sign,
      ld = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = sd(l, "lab")
        var c = l[0],
          v = l[1],
          w = l[2],
          x = zr(c + 0.3963377774 * v + 0.2158037573 * w, 3),
          g = zr(c - 0.1055613458 * v - 0.0638541728 * w, 3),
          $ = zr(c - 0.0894841775 * v - 1.291485548 * w, 3)
        return [
          255 * Ds(4.0767416621 * x - 3.3077115913 * g + 0.2309699292 * $),
          255 * Ds(-1.2684380046 * x + 2.6097574011 * g - 0.3413193965 * $),
          255 * Ds(-0.0041960863 * x - 0.7034186147 * g + 1.707614701 * $),
          l.length > 3 ? l[3] : 1,
        ]
      },
      Ul = ld
    function Ds(l) {
      var o = Math.abs(l)
      return o > 0.0031308
        ? (ad(l) || 1) * (1.055 * zr(o, 1 / 2.4) - 0.055)
        : l * 12.92
    }
    var od = _.unpack,
      id = _.type,
      ud = pe,
      Vl = D,
      Gl = C,
      cd = Wl
    ;(Vl.prototype.oklab = function () {
      return cd(this._rgb)
    }),
      (ud.oklab = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Vl,
          [null].concat(l, ["oklab"]),
        ))()
      }),
      (Gl.format.oklab = Ul),
      Gl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = od(l, "oklab")), id(l) === "array" && l.length === 3))
            return "oklab"
        },
      })
    var fd = _.unpack,
      dd = Wl,
      hd = Al,
      vd = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        var c = fd(l, "rgb"),
          v = c[0],
          w = c[1],
          x = c[2],
          g = dd(v, w, x),
          $ = g[0],
          S = g[1],
          O = g[2]
        return hd($, S, O)
      },
      pd = vd,
      gd = _.unpack,
      bd = Ol,
      md = Ul,
      yd = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        l = gd(l, "lch")
        var c = l[0],
          v = l[1],
          w = l[2],
          x = bd(c, v, w),
          g = x[0],
          $ = x[1],
          S = x[2],
          O = md(g, $, S),
          N = O[0],
          Z = O[1],
          H = O[2]
        return [N, Z, H, l.length > 3 ? l[3] : 1]
      },
      wd = yd,
      xd = _.unpack,
      _d = _.type,
      kd = pe,
      Kl = D,
      Yl = C,
      $d = pd
    ;(Kl.prototype.oklch = function () {
      return $d(this._rgb)
    }),
      (kd.oklch = function () {
        for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Kl,
          [null].concat(l, ["oklch"]),
        ))()
      }),
      (Yl.format.oklch = wd),
      Yl.autodetect.push({
        p: 3,
        test: function () {
          for (var l = [], o = arguments.length; o--; ) l[o] = arguments[o]
          if (((l = xd(l, "oklch")), _d(l) === "array" && l.length === 3))
            return "oklch"
        },
      })
    var Xl = D,
      Ed = _.type
    Xl.prototype.alpha = function (l, o) {
      return (
        o === void 0 && (o = !1),
        l !== void 0 && Ed(l) === "number"
          ? o
            ? ((this._rgb[3] = l), this)
            : new Xl([this._rgb[0], this._rgb[1], this._rgb[2], l], "rgb")
          : this._rgb[3]
      )
    }
    var Sd = D
    Sd.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var $n = D,
      Cd = Lr
    ;($n.prototype.darken = function (l) {
      l === void 0 && (l = 1)
      var o = this,
        c = o.lab()
      return (c[0] -= Cd.Kn * l), new $n(c, "lab").alpha(o.alpha(), !0)
    }),
      ($n.prototype.brighten = function (l) {
        return l === void 0 && (l = 1), this.darken(-l)
      }),
      ($n.prototype.darker = $n.prototype.darken),
      ($n.prototype.brighter = $n.prototype.brighten)
    var Pd = D
    Pd.prototype.get = function (l) {
      var o = l.split("."),
        c = o[0],
        v = o[1],
        w = this[c]()
      if (v) {
        var x = c.indexOf(v) - (c.substr(0, 2) === "ok" ? 2 : 0)
        if (x > -1) return w[x]
        throw new Error("unknown channel " + v + " in mode " + c)
      } else return w
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
          w = function (g, $) {
            var S = g.interpolate($, 0.5, c),
              O = S.luminance()
            return Math.abs(l - O) < Od || !v-- ? S : O > l ? w(g, S) : w(S, $)
          },
          x = (
            o > l
              ? w(new Wn([0, 0, 0]), this)
              : w(this, new Wn([255, 255, 255]))
          ).rgb()
        return new Wn(x.concat([this._rgb[3]]))
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
      Zl = D,
      Jl = _.type,
      qr = Ct,
      Ql = function (l, o, c) {
        c === void 0 && (c = 0.5)
        for (var v = [], w = arguments.length - 3; w-- > 0; )
          v[w] = arguments[w + 3]
        var x = v[0] || "lrgb"
        if ((!qr[x] && !v.length && (x = Object.keys(qr)[0]), !qr[x]))
          throw new Error("interpolation mode " + x + " is not defined")
        return (
          Jl(l) !== "object" && (l = new Zl(l)),
          Jl(o) !== "object" && (o = new Zl(o)),
          qr[x](l, o, c).alpha(l.alpha() + c * (o.alpha() - l.alpha()))
        )
      },
      eo = D,
      Td = Ql
    eo.prototype.mix = eo.prototype.interpolate = function (l, o) {
      o === void 0 && (o = 0.5)
      for (var c = [], v = arguments.length - 2; v-- > 0; )
        c[v] = arguments[v + 2]
      return Td.apply(void 0, [this, l, o].concat(c))
    }
    var to = D
    to.prototype.premultiply = function (l) {
      l === void 0 && (l = !1)
      var o = this._rgb,
        c = o[3]
      return l
        ? ((this._rgb = [o[0] * c, o[1] * c, o[2] * c, c]), this)
        : new to([o[0] * c, o[1] * c, o[2] * c, c], "rgb")
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
    var no = D,
      ro = _.type
    no.prototype.set = function (l, o, c) {
      c === void 0 && (c = !1)
      var v = l.split("."),
        w = v[0],
        x = v[1],
        g = this[w]()
      if (x) {
        var $ = w.indexOf(x) - (w.substr(0, 2) === "ok" ? 2 : 0)
        if ($ > -1) {
          if (ro(o) == "string")
            switch (o.charAt(0)) {
              case "+":
                g[$] += +o
                break
              case "-":
                g[$] += +o
                break
              case "*":
                g[$] *= +o.substr(1)
                break
              case "/":
                g[$] /= +o.substr(1)
                break
              default:
                g[$] = +o
            }
          else if (ro(o) === "number") g[$] = o
          else throw new Error("unsupported value for Color.set")
          var S = new no(g, w)
          return c ? ((this._rgb = S._rgb), this) : S
        }
        throw new Error("unknown channel " + x + " in mode " + w)
      } else return g
    }
    var jd = D,
      Fd = function (l, o, c) {
        var v = l._rgb,
          w = o._rgb
        return new jd(
          v[0] + c * (w[0] - v[0]),
          v[1] + c * (w[1] - v[1]),
          v[2] + c * (w[2] - v[2]),
          "rgb",
        )
      }
    Ct.rgb = Fd
    var Ld = D,
      qs = Math.sqrt,
      Un = Math.pow,
      Bd = function (l, o, c) {
        var v = l._rgb,
          w = v[0],
          x = v[1],
          g = v[2],
          $ = o._rgb,
          S = $[0],
          O = $[1],
          N = $[2]
        return new Ld(
          qs(Un(w, 2) * (1 - c) + Un(S, 2) * c),
          qs(Un(x, 2) * (1 - c) + Un(O, 2) * c),
          qs(Un(g, 2) * (1 - c) + Un(N, 2) * c),
          "rgb",
        )
      }
    Ct.lrgb = Bd
    var Dd = D,
      Hd = function (l, o, c) {
        var v = l.lab(),
          w = o.lab()
        return new Dd(
          v[0] + c * (w[0] - v[0]),
          v[1] + c * (w[1] - v[1]),
          v[2] + c * (w[2] - v[2]),
          "lab",
        )
      }
    Ct.lab = Hd
    var so = D,
      Vn = function (l, o, c, v) {
        var w, x, g, $
        v === "hsl"
          ? ((g = l.hsl()), ($ = o.hsl()))
          : v === "hsv"
            ? ((g = l.hsv()), ($ = o.hsv()))
            : v === "hcg"
              ? ((g = l.hcg()), ($ = o.hcg()))
              : v === "hsi"
                ? ((g = l.hsi()), ($ = o.hsi()))
                : v === "lch" || v === "hcl"
                  ? ((v = "hcl"), (g = l.hcl()), ($ = o.hcl()))
                  : v === "oklch" &&
                    ((g = l.oklch().reverse()), ($ = o.oklch().reverse()))
        var S, O, N, Z, H, re
        ;(v.substr(0, 1) === "h" || v === "oklch") &&
          ((w = g),
          (S = w[0]),
          (N = w[1]),
          (H = w[2]),
          (x = $),
          (O = x[0]),
          (Z = x[1]),
          (re = x[2]))
        var te, ye, $e, Se
        return (
          !isNaN(S) && !isNaN(O)
            ? (O > S && O - S > 180
                ? (Se = O - (S + 360))
                : O < S && S - O > 180
                  ? (Se = O + 360 - S)
                  : (Se = O - S),
              (ye = S + c * Se))
            : isNaN(S)
              ? isNaN(O)
                ? (ye = Number.NaN)
                : ((ye = O), (H == 1 || H == 0) && v != "hsv" && (te = Z))
              : ((ye = S), (re == 1 || re == 0) && v != "hsv" && (te = N)),
          te === void 0 && (te = N + c * (Z - N)),
          ($e = H + c * (re - H)),
          v === "oklch" ? new so([$e, te, ye], v) : new so([ye, te, $e], v)
        )
      },
      zd = Vn,
      ao = function (l, o, c) {
        return zd(l, o, c, "lch")
      }
    ;(Ct.lch = ao), (Ct.hcl = ao)
    var qd = D,
      Wd = function (l, o, c) {
        var v = l.num(),
          w = o.num()
        return new qd(v + c * (w - v), "num")
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
          w = o.oklab()
        return new Qd(
          v[0] + c * (w[0] - v[0]),
          v[1] + c * (w[1] - v[1]),
          v[2] + c * (w[2] - v[2]),
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
      lo = Math.cos,
      oo = Math.sin,
      sh = Math.atan2,
      ah = function (l, o, c) {
        o === void 0 && (o = "lrgb"), c === void 0 && (c = null)
        var v = l.length
        c ||
          (c = Array.from(new Array(v)).map(function () {
            return 1
          }))
        var w =
          v /
          c.reduce(function (ye, $e) {
            return ye + $e
          })
        if (
          (c.forEach(function (ye, $e) {
            c[$e] *= w
          }),
          (l = l.map(function (ye) {
            return new Ws(ye)
          })),
          o === "lrgb")
        )
          return lh(l, c)
        for (
          var x = l.shift(), g = x.get(o), $ = [], S = 0, O = 0, N = 0;
          N < g.length;
          N++
        )
          if (
            ((g[N] = (g[N] || 0) * c[0]),
            $.push(isNaN(g[N]) ? 0 : c[0]),
            o.charAt(N) === "h" && !isNaN(g[N]))
          ) {
            var Z = (g[N] / 180) * Gs
            ;(S += lo(Z) * c[0]), (O += oo(Z) * c[0])
          }
        var H = x.alpha() * c[0]
        l.forEach(function (ye, $e) {
          var Se = ye.get(o)
          H += ye.alpha() * c[$e + 1]
          for (var Oe = 0; Oe < g.length; Oe++)
            if (!isNaN(Se[Oe]))
              if ((($[Oe] += c[$e + 1]), o.charAt(Oe) === "h")) {
                var ot = (Se[Oe] / 180) * Gs
                ;(S += lo(ot) * c[$e + 1]), (O += oo(ot) * c[$e + 1])
              } else g[Oe] += Se[Oe] * c[$e + 1]
        })
        for (var re = 0; re < g.length; re++)
          if (o.charAt(re) === "h") {
            for (var te = (sh(O / $[re], S / $[re]) / Gs) * 180; te < 0; )
              te += 360
            for (; te >= 360; ) te -= 360
            g[re] = te
          } else g[re] = g[re] / $[re]
        return (H /= v), new Ws(g, o).alpha(H > 0.99999 ? 1 : H, !0)
      },
      lh = function (l, o) {
        for (var c = l.length, v = [0, 0, 0, 0], w = 0; w < l.length; w++) {
          var x = l[w],
            g = o[w] / c,
            $ = x._rgb
          ;(v[0] += Us($[0], 2) * g),
            (v[1] += Us($[1], 2) * g),
            (v[2] += Us($[2], 2) * g),
            (v[3] += $[3] * g)
        }
        return (
          (v[0] = Vs(v[0])),
          (v[1] = Vs(v[1])),
          (v[2] = Vs(v[2])),
          v[3] > 0.9999999 && (v[3] = 1),
          new Ws(rh(v))
        )
      },
      jt = pe,
      Gn = _.type,
      oh = Math.pow,
      Ks = function (l) {
        var o = "rgb",
          c = jt("#ccc"),
          v = 0,
          w = [0, 1],
          x = [],
          g = [0, 0],
          $ = !1,
          S = [],
          O = !1,
          N = 0,
          Z = 1,
          H = !1,
          re = {},
          te = !0,
          ye = 1,
          $e = function (z) {
            if (
              ((z = z || ["#fff", "#000"]),
              z &&
                Gn(z) === "string" &&
                jt.brewer &&
                jt.brewer[z.toLowerCase()] &&
                (z = jt.brewer[z.toLowerCase()]),
              Gn(z) === "array")
            ) {
              z.length === 1 && (z = [z[0], z[0]]), (z = z.slice(0))
              for (var ce = 0; ce < z.length; ce++) z[ce] = jt(z[ce])
              x.length = 0
              for (var ke = 0; ke < z.length; ke++) x.push(ke / (z.length - 1))
            }
            return $t(), (S = z)
          },
          Se = function (z) {
            if ($ != null) {
              for (var ce = $.length - 1, ke = 0; ke < ce && z >= $[ke]; ) ke++
              return ke - 1
            }
            return 0
          },
          Oe = function (z) {
            return z
          },
          ot = function (z) {
            return z
          },
          st = function (z, ce) {
            var ke, we
            if ((ce == null && (ce = !1), isNaN(z) || z === null)) return c
            if (ce) we = z
            else if ($ && $.length > 2) {
              var it = Se(z)
              we = it / ($.length - 2)
            } else Z !== N ? (we = (z - N) / (Z - N)) : (we = 1)
            ;(we = ot(we)),
              ce || (we = Oe(we)),
              ye !== 1 && (we = oh(we, ye)),
              (we = g[0] + we * (1 - g[0] - g[1])),
              (we = Math.min(1, Math.max(0, we)))
            var Be = Math.floor(we * 1e4)
            if (te && re[Be]) ke = re[Be]
            else {
              if (Gn(S) === "array")
                for (var Ce = 0; Ce < x.length; Ce++) {
                  var Re = x[Ce]
                  if (we <= Re) {
                    ke = S[Ce]
                    break
                  }
                  if (we >= Re && Ce === x.length - 1) {
                    ke = S[Ce]
                    break
                  }
                  if (we > Re && we < x[Ce + 1]) {
                    ;(we = (we - Re) / (x[Ce + 1] - Re)),
                      (ke = jt.interpolate(S[Ce], S[Ce + 1], we, o))
                    break
                  }
                }
              else Gn(S) === "function" && (ke = S(we))
              te && (re[Be] = ke)
            }
            return ke
          },
          $t = function () {
            return (re = {})
          }
        $e(l)
        var Ee = function (z) {
          var ce = jt(st(z))
          return O && ce[O] ? ce[O]() : ce
        }
        return (
          (Ee.classes = function (z) {
            if (z != null) {
              if (Gn(z) === "array") ($ = z), (w = [z[0], z[z.length - 1]])
              else {
                var ce = jt.analyze(w)
                z === 0 ? ($ = [ce.min, ce.max]) : ($ = jt.limits(ce, "e", z))
              }
              return Ee
            }
            return $
          }),
          (Ee.domain = function (z) {
            if (!arguments.length) return w
            ;(N = z[0]), (Z = z[z.length - 1]), (x = [])
            var ce = S.length
            if (z.length === ce && N !== Z)
              for (var ke = 0, we = Array.from(z); ke < we.length; ke += 1) {
                var it = we[ke]
                x.push((it - N) / (Z - N))
              }
            else {
              for (var Be = 0; Be < ce; Be++) x.push(Be / (ce - 1))
              if (z.length > 2) {
                var Ce = z.map(function (Te, Ne) {
                    return Ne / (z.length - 1)
                  }),
                  Re = z.map(function (Te) {
                    return (Te - N) / (Z - N)
                  })
                Re.every(function (Te, Ne) {
                  return Ce[Ne] === Te
                }) ||
                  (ot = function (Te) {
                    if (Te <= 0 || Te >= 1) return Te
                    for (var Ne = 0; Te >= Re[Ne + 1]; ) Ne++
                    var Lt = (Te - Re[Ne]) / (Re[Ne + 1] - Re[Ne]),
                      dn = Ce[Ne] + Lt * (Ce[Ne + 1] - Ce[Ne])
                    return dn
                  })
              }
            }
            return (w = [N, Z]), Ee
          }),
          (Ee.mode = function (z) {
            return arguments.length ? ((o = z), $t(), Ee) : o
          }),
          (Ee.range = function (z, ce) {
            return $e(z), Ee
          }),
          (Ee.out = function (z) {
            return (O = z), Ee
          }),
          (Ee.spread = function (z) {
            return arguments.length ? ((v = z), Ee) : v
          }),
          (Ee.correctLightness = function (z) {
            return (
              z == null && (z = !0),
              (H = z),
              $t(),
              H
                ? (Oe = function (ce) {
                    for (
                      var ke = st(0, !0).lab()[0],
                        we = st(1, !0).lab()[0],
                        it = ke > we,
                        Be = st(ce, !0).lab()[0],
                        Ce = ke + (we - ke) * ce,
                        Re = Be - Ce,
                        Te = 0,
                        Ne = 1,
                        Lt = 20;
                      Math.abs(Re) > 0.01 && Lt-- > 0;

                    )
                      (function () {
                        return (
                          it && (Re *= -1),
                          Re < 0
                            ? ((Te = ce), (ce += (Ne - ce) * 0.5))
                            : ((Ne = ce), (ce += (Te - ce) * 0.5)),
                          (Be = st(ce, !0).lab()[0]),
                          (Re = Be - Ce)
                        )
                      })()
                    return ce
                  })
                : (Oe = function (ce) {
                    return ce
                  }),
              Ee
            )
          }),
          (Ee.padding = function (z) {
            return z != null
              ? (Gn(z) === "number" && (z = [z, z]), (g = z), Ee)
              : g
          }),
          (Ee.colors = function (z, ce) {
            arguments.length < 2 && (ce = "hex")
            var ke = []
            if (arguments.length === 0) ke = S.slice(0)
            else if (z === 1) ke = [Ee(0.5)]
            else if (z > 1) {
              var we = w[0],
                it = w[1] - we
              ke = ih(0, z, !1).map(function (Ne) {
                return Ee(we + (Ne / (z - 1)) * it)
              })
            } else {
              l = []
              var Be = []
              if ($ && $.length > 2)
                for (
                  var Ce = 1, Re = $.length, Te = 1 <= Re;
                  Te ? Ce < Re : Ce > Re;
                  Te ? Ce++ : Ce--
                )
                  Be.push(($[Ce - 1] + $[Ce]) * 0.5)
              else Be = w
              ke = Be.map(function (Ne) {
                return Ee(Ne)
              })
            }
            return (
              jt[ce] &&
                (ke = ke.map(function (Ne) {
                  return Ne[ce]()
                })),
              ke
            )
          }),
          (Ee.cache = function (z) {
            return z != null ? ((te = z), Ee) : te
          }),
          (Ee.gamma = function (z) {
            return z != null ? ((ye = z), Ee) : ye
          }),
          (Ee.nodata = function (z) {
            return z != null ? ((c = jt(z)), Ee) : c
          }),
          Ee
        )
      }
    function ih(l, o, c) {
      for (
        var v = [], w = l < o, x = c ? (w ? o + 1 : o - 1) : o, g = l;
        w ? g < x : g > x;
        w ? g++ : g--
      )
        v.push(g)
      return v
    }
    var br = D,
      uh = Ks,
      ch = function (l) {
        for (var o = [1, 1], c = 1; c < l; c++) {
          for (var v = [1], w = 1; w <= o.length; w++)
            v[w] = (o[w] || 0) + o[w - 1]
          o = v
        }
        return o
      },
      fh = function (l) {
        var o, c, v, w, x, g, $
        if (
          ((l = l.map(function (H) {
            return new br(H)
          })),
          l.length === 2)
        )
          (o = l.map(function (H) {
            return H.lab()
          })),
            (x = o[0]),
            (g = o[1]),
            (w = function (H) {
              var re = [0, 1, 2].map(function (te) {
                return x[te] + H * (g[te] - x[te])
              })
              return new br(re, "lab")
            })
        else if (l.length === 3)
          (c = l.map(function (H) {
            return H.lab()
          })),
            (x = c[0]),
            (g = c[1]),
            ($ = c[2]),
            (w = function (H) {
              var re = [0, 1, 2].map(function (te) {
                return (
                  (1 - H) * (1 - H) * x[te] +
                  2 * (1 - H) * H * g[te] +
                  H * H * $[te]
                )
              })
              return new br(re, "lab")
            })
        else if (l.length === 4) {
          var S
          ;(v = l.map(function (H) {
            return H.lab()
          })),
            (x = v[0]),
            (g = v[1]),
            ($ = v[2]),
            (S = v[3]),
            (w = function (H) {
              var re = [0, 1, 2].map(function (te) {
                return (
                  (1 - H) * (1 - H) * (1 - H) * x[te] +
                  3 * (1 - H) * (1 - H) * H * g[te] +
                  3 * (1 - H) * H * H * $[te] +
                  H * H * H * S[te]
                )
              })
              return new br(re, "lab")
            })
        } else if (l.length >= 5) {
          var O, N, Z
          ;(O = l.map(function (H) {
            return H.lab()
          })),
            (Z = l.length - 1),
            (N = ch(Z)),
            (w = function (H) {
              var re = 1 - H,
                te = [0, 1, 2].map(function (ye) {
                  return O.reduce(function ($e, Se, Oe) {
                    return (
                      $e +
                      N[Oe] * Math.pow(re, Z - Oe) * Math.pow(H, Oe) * Se[ye]
                    )
                  }, 0)
                })
              return new br(te, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return w
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
      Ys = pe,
      Ft = function (l, o, c) {
        if (!Ft[c]) throw new Error("unknown blend mode " + c)
        return Ft[c](l, o)
      },
      cn = function (l) {
        return function (o, c) {
          var v = Ys(c).rgb(),
            w = Ys(o).rgb()
          return Ys.rgb(l(v, w))
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
      ph = function (l, o) {
        return l > o ? o : l
      },
      gh = function (l, o) {
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
      wh = function (l, o) {
        return l === 255
          ? 255
          : ((l = (255 * (o / 255)) / (1 - l / 255)), l > 255 ? 255 : l)
      }
    ;(Ft.normal = cn(fn(hh))),
      (Ft.multiply = cn(fn(vh))),
      (Ft.screen = cn(fn(bh))),
      (Ft.overlay = cn(fn(mh))),
      (Ft.darken = cn(fn(ph))),
      (Ft.lighten = cn(fn(gh))),
      (Ft.dodge = cn(fn(wh))),
      (Ft.burn = cn(fn(yh)))
    for (
      var xh = Ft,
        Xs = _.type,
        _h = _.clip_rgb,
        kh = _.TWOPI,
        $h = Math.pow,
        Eh = Math.sin,
        Sh = Math.cos,
        io = pe,
        Ch = function (l, o, c, v, w) {
          l === void 0 && (l = 300),
            o === void 0 && (o = -1.5),
            c === void 0 && (c = 1),
            v === void 0 && (v = 1),
            w === void 0 && (w = [0, 1])
          var x = 0,
            g
          Xs(w) === "array" ? (g = w[1] - w[0]) : ((g = 0), (w = [w, w]))
          var $ = function (S) {
            var O = kh * ((l + 120) / 360 + o * S),
              N = $h(w[0] + g * S, v),
              Z = x !== 0 ? c[0] + S * x : c,
              H = (Z * N * (1 - N)) / 2,
              re = Sh(O),
              te = Eh(O),
              ye = N + H * (-0.14861 * re + 1.78277 * te),
              $e = N + H * (-0.29227 * re - 0.90649 * te),
              Se = N + H * (1.97294 * re)
            return io(_h([ye * 255, $e * 255, Se * 255, 1]))
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
                    ? ((x = c[1] - c[0]), x === 0 && (c = c[1]))
                    : (x = 0),
                  $)
            }),
            ($.lightness = function (S) {
              return S == null
                ? w
                : (Xs(S) === "array"
                    ? ((w = S), (g = S[1] - S[0]))
                    : ((w = [S, S]), (g = 0)),
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
        Mh = "0123456789abcdef",
        Ah = Math.floor,
        Oh = Math.random,
        Ih = function () {
          for (var l = "#", o = 0; o < 6; o++) l += Mh.charAt(Ah(Oh() * 16))
          return new Ph(l, "hex")
        },
        Zs = d,
        uo = Math.log,
        Rh = Math.pow,
        Th = Math.floor,
        Nh = Math.abs,
        co = function (l, o) {
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
            (c.limits = function (v, w) {
              return fo(c, v, w)
            }),
            c
          )
        },
        fo = function (l, o, c) {
          o === void 0 && (o = "equal"),
            c === void 0 && (c = 7),
            Zs(l) == "array" && (l = co(l))
          var v = l.min,
            w = l.max,
            x = l.values.sort(function (Qs, ea) {
              return Qs - ea
            })
          if (c === 1) return [v, w]
          var g = []
          if (
            (o.substr(0, 1) === "c" && (g.push(v), g.push(w)),
            o.substr(0, 1) === "e")
          ) {
            g.push(v)
            for (var $ = 1; $ < c; $++) g.push(v + ($ / c) * (w - v))
            g.push(w)
          } else if (o.substr(0, 1) === "l") {
            if (v <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var S = Math.LOG10E * uo(v),
              O = Math.LOG10E * uo(w)
            g.push(v)
            for (var N = 1; N < c; N++) g.push(Rh(10, S + (N / c) * (O - S)))
            g.push(w)
          } else if (o.substr(0, 1) === "q") {
            g.push(v)
            for (var Z = 1; Z < c; Z++) {
              var H = ((x.length - 1) * Z) / c,
                re = Th(H)
              if (re === H) g.push(x[re])
              else {
                var te = H - re
                g.push(x[re] * (1 - te) + x[re + 1] * te)
              }
            }
            g.push(w)
          } else if (o.substr(0, 1) === "k") {
            var ye,
              $e = x.length,
              Se = new Array($e),
              Oe = new Array(c),
              ot = !0,
              st = 0,
              $t = null
            ;($t = []), $t.push(v)
            for (var Ee = 1; Ee < c; Ee++) $t.push(v + (Ee / c) * (w - v))
            for ($t.push(w); ot; ) {
              for (var z = 0; z < c; z++) Oe[z] = 0
              for (var ce = 0; ce < $e; ce++)
                for (
                  var ke = x[ce], we = Number.MAX_VALUE, it = void 0, Be = 0;
                  Be < c;
                  Be++
                ) {
                  var Ce = Nh($t[Be] - ke)
                  Ce < we && ((we = Ce), (it = Be)), Oe[it]++, (Se[ce] = it)
                }
              for (var Re = new Array(c), Te = 0; Te < c; Te++) Re[Te] = null
              for (var Ne = 0; Ne < $e; Ne++)
                (ye = Se[Ne]),
                  Re[ye] === null ? (Re[ye] = x[Ne]) : (Re[ye] += x[Ne])
              for (var Lt = 0; Lt < c; Lt++) Re[Lt] *= 1 / Oe[Lt]
              ot = !1
              for (var dn = 0; dn < c; dn++)
                if (Re[dn] !== $t[dn]) {
                  ot = !0
                  break
                }
              ;($t = Re), st++, st > 200 && (ot = !1)
            }
            for (var hn = {}, Kn = 0; Kn < c; Kn++) hn[Kn] = []
            for (var Yn = 0; Yn < $e; Yn++) (ye = Se[Yn]), hn[ye].push(x[Yn])
            for (var Jt = [], En = 0; En < c; En++)
              Jt.push(hn[En][0]), Jt.push(hn[En][hn[En].length - 1])
            ;(Jt = Jt.sort(function (Qs, ea) {
              return Qs - ea
            })),
              g.push(Jt[0])
            for (var mr = 1; mr < Jt.length; mr += 2) {
              var Sn = Jt[mr]
              !isNaN(Sn) && g.indexOf(Sn) === -1 && g.push(Sn)
            }
          }
          return g
        },
        ho = { analyze: co, limits: fo },
        vo = D,
        jh = function (l, o) {
          ;(l = new vo(l)), (o = new vo(o))
          var c = l.luminance(),
            v = o.luminance()
          return c > v ? (c + 0.05) / (v + 0.05) : (v + 0.05) / (c + 0.05)
        },
        po = D,
        Zt = Math.sqrt,
        Ge = Math.pow,
        Fh = Math.min,
        Lh = Math.max,
        go = Math.atan2,
        bo = Math.abs,
        Wr = Math.cos,
        mo = Math.sin,
        Bh = Math.exp,
        yo = Math.PI,
        Dh = function (l, o, c, v, w) {
          c === void 0 && (c = 1),
            v === void 0 && (v = 1),
            w === void 0 && (w = 1)
          var x = function (Sn) {
              return (360 * Sn) / (2 * yo)
            },
            g = function (Sn) {
              return (2 * yo * Sn) / 360
            }
          ;(l = new po(l)), (o = new po(o))
          var $ = Array.from(l.lab()),
            S = $[0],
            O = $[1],
            N = $[2],
            Z = Array.from(o.lab()),
            H = Z[0],
            re = Z[1],
            te = Z[2],
            ye = (S + H) / 2,
            $e = Zt(Ge(O, 2) + Ge(N, 2)),
            Se = Zt(Ge(re, 2) + Ge(te, 2)),
            Oe = ($e + Se) / 2,
            ot = 0.5 * (1 - Zt(Ge(Oe, 7) / (Ge(Oe, 7) + Ge(25, 7)))),
            st = O * (1 + ot),
            $t = re * (1 + ot),
            Ee = Zt(Ge(st, 2) + Ge(N, 2)),
            z = Zt(Ge($t, 2) + Ge(te, 2)),
            ce = (Ee + z) / 2,
            ke = x(go(N, st)),
            we = x(go(te, $t)),
            it = ke >= 0 ? ke : ke + 360,
            Be = we >= 0 ? we : we + 360,
            Ce = bo(it - Be) > 180 ? (it + Be + 360) / 2 : (it + Be) / 2,
            Re =
              1 -
              0.17 * Wr(g(Ce - 30)) +
              0.24 * Wr(g(2 * Ce)) +
              0.32 * Wr(g(3 * Ce + 6)) -
              0.2 * Wr(g(4 * Ce - 63)),
            Te = Be - it
          ;(Te = bo(Te) <= 180 ? Te : Be <= it ? Te + 360 : Te - 360),
            (Te = 2 * Zt(Ee * z) * mo(g(Te) / 2))
          var Ne = H - S,
            Lt = z - Ee,
            dn = 1 + (0.015 * Ge(ye - 50, 2)) / Zt(20 + Ge(ye - 50, 2)),
            hn = 1 + 0.045 * ce,
            Kn = 1 + 0.015 * ce * Re,
            Yn = 30 * Bh(-Ge((Ce - 275) / 25, 2)),
            Jt = 2 * Zt(Ge(ce, 7) / (Ge(ce, 7) + Ge(25, 7))),
            En = -Jt * mo(2 * g(Yn)),
            mr = Zt(
              Ge(Ne / (c * dn), 2) +
                Ge(Lt / (v * hn), 2) +
                Ge(Te / (w * Kn), 2) +
                En * (Lt / (v * hn)) * (Te / (w * Kn)),
            )
          return Lh(0, Fh(100, mr))
        },
        wo = D,
        Hh = function (l, o, c) {
          c === void 0 && (c = "lab"), (l = new wo(l)), (o = new wo(o))
          var v = l.get(c),
            w = o.get(c),
            x = 0
          for (var g in v) {
            var $ = (v[g] || 0) - (w[g] || 0)
            x += $ * $
          }
          return Math.sqrt(x)
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
        xo = pe,
        _o = Ks,
        Wh = {
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
    var Uh = Ur,
      rt = pe
    ;(rt.average = ah),
      (rt.bezier = dh),
      (rt.blend = xh),
      (rt.cubehelix = Ch),
      (rt.mix = rt.interpolate = Ql),
      (rt.random = Ih),
      (rt.scale = Ks),
      (rt.analyze = ho.analyze),
      (rt.contrast = jh),
      (rt.deltaE = Dh),
      (rt.distance = Hh),
      (rt.limits = ho.limits),
      (rt.valid = qh),
      (rt.scales = Wh),
      (rt.colors = Nl),
      (rt.brewer = Uh)
    var Vh = rt
    return Vh
  })
})(Fu)
var Tg = Fu.exports
const Ye = Rg(Tg),
  Ng = {
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
          for (let i = 1; i < s.length; i++)
            i % 2 == 0
              ? (s[i].style.backgroundColor = a.brighten(0))
              : (s[i].style.backgroundColor = a.brighten(0.2))
        }
      return (
        gt(() => {
          n(t.brightness)
        }),
        rn(
          () => t.brightness,
          (r, s) => {
            n(r)
          },
        ),
        (r, s) => null
      )
    },
  },
  jg = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Fg = { class: "prose text-center" },
  Lg = m("br", null, null, -1),
  Bg = { href: "/pricing" },
  Dg = { id: "cta" },
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
                let b = document.getElementById("cta"),
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
                  b.appendChild(k)
                let P = b.getElementsByTagName("input")
                for (let C = 0; C < P.length; C++) P[C].style.display = "none"
                let F = b.getElementsByTagName("textarea")[0]
                F.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        he(),
        Fe(
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
            m("div", Fg, [
              m(
                "h4",
                { class: M(["text-2xl", t(e.brightness)]) },
                [
                  xe(" Piqued your interest?"),
                  Lg,
                  xe(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              m("a", Bg, [
                m(
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
              m(
                "h4",
                { class: M(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              m("form", Dg, [
                m("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: M(["rounded p-2 w-full", n]),
                }),
                m("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                m("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                m(
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
  Hg = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  zg = { class: "flex flex-col items-center justify-center w-full" },
  qg = { viewBox: "0 0 36 36", class: "chart" },
  Wg = Bn(() =>
    m(
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
  Ug = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  Vg = Bn(() =>
    m(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  Gg = Bn(() =>
    m(
      "p",
      null,
      [
        xe(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        m("b", null, "315 KB"),
        xe(". That's half of the classic SNES game "),
        m("em", null, "The Legend of Zelda: A Link to The Past"),
        xe(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  Kg = Bn(() => m("p", null, "You want fast? Let's make it happen.", -1)),
  Yg = { id: "speedTable" },
  Xg = Bn(() =>
    m(
      "colgroup",
      null,
      [
        m("col", { style: { width: "30%" } }),
        m("col", { style: { width: "70%" } }),
      ],
      -1,
    ),
  ),
  Zg = { class: "flex" },
  Jg = { class: "flex" },
  Qg = Bn(() =>
    m(
      "tbody",
      null,
      [
        m("tr", null, [
          m("td", null, "Huge, resource-heavy images"),
          m("td", null, [
            xe(" Optimize your images. "),
            m("b", null, "A lot. "),
            xe(
              "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
            ),
          ]),
        ]),
        m("tr", null, [
          m("td", null, "Unused code, plugins, and assets"),
          m(
            "td",
            null,
            " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
          ),
        ]),
        m("tr", null, [
          m("td", null, "Inefficient, resource-heavy platforms"),
          m(
            "td",
            null,
            " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
          ),
        ]),
        m("tr", null, [
          m("td", null, "Uncached resources"),
          m(
            "td",
            null,
            " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
          ),
        ]),
      ],
      -1,
    ),
  ),
  eb = Bn(() => m("div", { class: "h-6" }, null, -1)),
  tb = {
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
  nb = Object.assign(tb, {
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
        i = ie(() => {
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
          for (let b = 1; b < d.length; b++)
            b % 2 == 0
              ? (d[b].style.backgroundColor = h.brighten(0))
              : (d[b].style.backgroundColor = h.brighten(0.2))
        }
      return (
        gt(() => {
          u(t.brightness)
        }),
        rn(
          () => t.brightness,
          (f, d) => {
            u(f)
          },
        ),
        (f, d) => (
          he(),
          Fe("div", Hg, [
            m("div", zg, [
              m(
                "div",
                { id: "perfChart", class: M(r(e.brightness)) },
                [
                  (he(),
                  Fe("svg", qg, [
                    Wg,
                    m(
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
                      Ug,
                    ),
                  ])),
                  m(
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
              m(
                "p",
                {
                  class: M(["text-sm italic opacity-50 mt-3", a(e.brightness)]),
                },
                [
                  xe(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  m(
                    "a",
                    { href: "", class: M(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              m(
                "div",
                {
                  class: M([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  m(
                    "h2",
                    { class: M(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  m(
                    "h2",
                    { class: M(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  Vg,
                  Gg,
                  Kg,
                  m("h3", { class: M(a(e.brightness)) }, "How I help", 2),
                  m("table", Yg, [
                    Xg,
                    m("thead", null, [
                      m("tr", null, [
                        m("th", null, [
                          m("div", Zg, [
                            m(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                xe(" Problem "),
                                le(
                                  fe(ng),
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
                        m("th", null, [
                          m("div", Jg, [
                            m(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                xe(" What I can do "),
                                le(
                                  fe(Qp),
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
                    Qg,
                  ]),
                ],
                2,
              ),
              eb,
              le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  rb = Tr(nb, [["__scopeId", "data-v-8a92440e"]]),
  sb = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  ab = { class: "lg:w-6/12 sm:w-12/12" },
  lb = m(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  ob = m("p", null, [m("b", null, " Don't worry, I can help!")], -1),
  ib = m(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  ub = { class: "flex items-center w-full" },
  cb = m(
    "p",
    null,
    [
      xe(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      m("em", null, "very"),
      xe(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  fb = m("div", { class: "h-3" }, null, -1),
  db = { class: "flex items-center w-full" },
  hb = m(
    "p",
    null,
    [
      xe(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      m("em", null, "do"),
      xe(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  vb = m("div", { class: "h-3" }, null, -1),
  pb = { class: "flex items-center w-full" },
  gb = m(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  bb = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  mb = { class: "prose text-center" },
  yb = m("div", { class: "h-3" }, null, -1),
  wb = m("div", { class: "h-3" }, null, -1),
  xb = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      _e(9274)
      const t = _e(4709),
        n = _e(new Date("2023-10-01")),
        r = _e(new Date()),
        s = ie(
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
        he(),
        Fe("div", sb, [
          m("div", ab, [
            m(
              "h2",
              { class: M(["text-left text-5xl", u(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            m(
              "p",
              {
                class: M([
                  "text-left text-sm italic opacity-50 mt-3",
                  u(e.brightness),
                ]),
              },
              [
                xe(" Website already secure? "),
                m("b", null, [
                  m(
                    "a",
                    { href: "", class: M(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  xe(" are you?"),
                ]),
              ],
              2,
            ),
            m(
              "hr",
              { class: M(["mb-5 mt-1 w-6/12 opacity-25", u(e.brightness)]) },
              null,
              2,
            ),
            m(
              "div",
              { class: M(["prose", u(e.brightness)]) },
              [
                lb,
                ob,
                ib,
                m(
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
                    m("div", ub, [
                      le(
                        fe(as),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      m(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    cb,
                  ],
                  2,
                ),
                fb,
                m(
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
                    m("div", db, [
                      le(
                        fe(as),
                        { size: "2rem", class: M(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      m(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    hb,
                  ],
                  2,
                ),
                vb,
                m(
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
                    m("div", pb, [
                      le(
                        fe(as),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      m(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    gb,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          m("div", bb, [
            m(
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
                m("div", mb, [
                  m(
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
                  m(
                    "h3",
                    { class: M(["text-xl", u(e.brightness)]) },
                    [
                      xe(" attacks blocked on "),
                      m(
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
                  m(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  m(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    [
                      m(
                        "a",
                        { href: "", class: M(i(e.brightness)) },
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
            yb,
            m("hr", { class: M(["opacity-50", u(e.brightness)]) }, null, 2),
            wb,
            le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  _b = {
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
          for (let i = 1; i < s.length; i++)
            i % 2 == 0
              ? (s[i].style.backgroundColor = a.brighten(0))
              : (s[i].style.backgroundColor = a.brighten(0.2))
        }
      return (
        gt(() => {
          n(t.brightness)
        }),
        rn(
          () => t.brightness,
          (r, s) => {
            n(r)
          },
        ),
        (r, s) => null
      )
    },
  },
  kb = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  $b = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  Eb = { class: "flex w-full" },
  Sb = { class: "flex w-full pt-4 gap-2" },
  Cb = { class: "w-6/12" },
  Pb = { class: "w-6/12" },
  Mb = { class: "w-full flex" },
  Ab = { class: "w-6/12" },
  Ob = { class: "w-6/12 pb-3" },
  Ib = m("em", null, "huge", -1),
  Rb = m("div", { class: "h-6" }, null, -1),
  Tb = {
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
        s = ie(() =>
          r.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        a = ie(() =>
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
            b
          d == 5
            ? (b = Ye("#e2e8f0"))
            : d == 4
              ? (b = Ye("#cbd5e1"))
              : d == 3
                ? (b = Ye("#475569"))
                : d == 2
                  ? (b = Ye("#1e293b"))
                  : d == 1 && (b = Ye("#0f172a"))
          for (let k = 1; k < h.length; k++)
            k % 2 == 0
              ? (h[k].style.backgroundColor = b.brighten(0))
              : (h[k].style.backgroundColor = b.brighten(0.2))
        },
        f = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        gt(() => {
          u(t.brightness)
        }),
        rn(
          () => t.brightness,
          (d, h) => {
            u(d)
          },
        ),
        (d, h) => (
          he(),
          Fe("div", kb, [
            m("div", $b, [
              m(
                "h2",
                { class: M(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              m(
                "h3",
                { class: M(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              m(
                "h4",
                { class: M(i(e.brightness)) },
                [
                  xe(" What are the "),
                  m(
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
              m(
                "p",
                { class: M(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              m(
                "p",
                { class: M(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              m(
                "h4",
                { class: M(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              m(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              m(
                "p",
                { class: M(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              m("div", Eb, [
                m(
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
                    r.value ? (he(), Ke(fe(ju), { key: 0 })) : et("", !0),
                    r.value ? et("", !0) : (he(), Ke(fe(Vp), { key: 1 })),
                    xe(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              m("div", Sb, [
                m("div", Cb, [
                  m(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (he(), Ke(fe(ii), { key: 0 })) : et("", !0)],
                    2,
                  ),
                ]),
                m("div", Pb, [
                  m(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", a.value]) },
                    [r.value ? (he(), Ke(fe(Ia), { key: 0 })) : et("", !0)],
                    2,
                  ),
                ]),
              ]),
              m(
                "h4",
                { class: M(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              m("div", Mb, [
                m("div", Ab, [
                  m(
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
                    [xe(" Submit "), le(fe(ii))],
                    2,
                  ),
                ]),
                m("div", Ob, [
                  m(
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
                    [xe(" Cancel "), le(fe(Ia))],
                    2,
                  ),
                ]),
              ]),
              m(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              m(
                "p",
                { class: M(i(e.brightness)) },
                [
                  xe(" Changes like these may seem small, but they make a "),
                  Ib,
                  xe(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            Rb,
            le(ol, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  Nb = ["onMouseover"],
  jb = {
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
        he(),
        Ke(fe(Lp), null, {
          default: ut(() => [
            le(
              fe(Bp),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: ut(() => [
                  (he(!0),
                  Fe(
                    Qe,
                    null,
                    xa(
                      t.value,
                      (u) => (
                        he(),
                        Ke(
                          fe(Dp),
                          {
                            key: u.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: ut(({ selected: f }) => [
                              m(
                                "div",
                                {
                                  class: M([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, f, fe(n), u.id),
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
                                    ? (he(),
                                      Ke(
                                        fe(as),
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
                                    : et("", !0),
                                  u.id == 1
                                    ? (he(),
                                      Ke(
                                        fe(Kp),
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
                                    : et("", !0),
                                  u.id == 2
                                    ? (he(),
                                      Ke(
                                        fe(eg),
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
                                    : et("", !0),
                                  u.id == 3
                                    ? (he(),
                                      Ke(
                                        fe(Jp),
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
                                    : et("", !0),
                                  u.id == 4
                                    ? (he(),
                                      Ke(
                                        fe(Gp),
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
                                    : et("", !0),
                                  u.id == 5
                                    ? (he(),
                                      Ke(
                                        fe(ju),
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
                                    : et("", !0),
                                  m(
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
                                Nb,
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
              fe(Hp),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: ut(() => [
                  le(
                    fe(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ut(() => [
                        le(rb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    fe(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ut(() => [
                        le(xb, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    fe(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ut(() => [
                        le(_b, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    fe(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ut(() => [
                        le(jg, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    fe(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ut(() => [
                        le(Ng, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  le(
                    fe(Xn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ut(() => [
                        le(Tb, { brightness: e.brightness }, null, 8, [
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
  Fb = { href: "/pricing" },
  Lb = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = _e(!1)
      gt(() => {
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
        he(),
        Fe(
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
            m(
              "p",
              { class: M(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            m("a", Fb, [
              m(
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
  hr = (e) => (Xa("data-v-e20b9d11"), (e = e()), Za(), e),
  Bb = { class: "flex-col" },
  Db = { class: "prose py-5 flex-col w-full" },
  Hb = hr(() => m("br", null, null, -1)),
  zb = hr(() => m("br", null, null, -1)),
  qb = { class: "flex" },
  Wb = { class: "w-6/12" },
  Ub = ["name", "checked", "onClick"],
  Vb = { class: "w-6/12" },
  Gb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Kb = { class: "flex-col gap-4" },
  Yb = { class: "flex items-center" },
  Xb = ["name", "checked", "onClick"],
  Zb = { key: 0 },
  Jb = { key: 1 },
  Qb = { class: "" },
  em = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  tm = { class: "flex-col" },
  nm = { class: "flex justify-between" },
  rm = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  sm = { class: "gap-4 mt-4", name: "pricing" },
  am = ["value"],
  lm = ["value"],
  om = { class: "flex gap-4", id: "leftInputs" },
  im = { class: "flex gap-4", id: "rightInputs" },
  um = hr(() => m("br", null, null, -1)),
  cm = hr(() => m("br", null, null, -1)),
  fm = hr(() => m("br", null, null, -1)),
  dm = hr(() => m("br", null, null, -1)),
  hm = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (q) => {
          q.preventDefault()
          const ne = "pricing"
          let J = document.getElementsByName("name")[0].value,
            mt = document.getElementsByName("email")[0].value,
            De = document.getElementsByName("website")[0].value,
            ht = document.getElementsByName("notes")[0].value,
            Ze = document.getElementsByName("services")[0].value,
            Wt = document.getElementsByName("total")[0].value,
            Ot = window.location.href,
            _t = new XMLHttpRequest()
          _t.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            _t.setRequestHeader("Content-Type", "application/json"),
            _t.send(
              JSON.stringify({
                form: ne,
                name: J,
                email: mt,
                website: De,
                notes: ht,
                services: Ze,
                total: Wt,
                referrer: Ot,
              }),
            ),
            (_t.onloadend = function () {
              if (
                (console.log(
                  `Status: ${_t.status}, Response: ${_t.responseText}`,
                ),
                _t.status == 200)
              ) {
                let Ve = document.getElementsByName(ne)[0],
                  I = document.createElement("div")
                I.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (I.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  Ve.appendChild(I)
                let Q = document.getElementById("leftInputs"),
                  G = document.getElementById("rightInputs")
                ;(Q.style.display = "none"), (G.style.display = "none")
                let ae = document.getElementById("submitButton")
                ae.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        r = (q) => {
          if (q >= 4) return "text-emerald-500"
          if (q == 3) return "text-orange-200"
          if (q == 2) return "text-orange-500"
          if (q == 1) return "text-orange-400"
        },
        s = (q) => {
          if (q >= 4) return "text-emerald-500"
          if (q == 3) return "text-slate-800"
          if (q == 2) return "text-orange-500"
          if (q == 1) return "text-orange-400"
        },
        a = (q) => {
          if (q >= 4) return "border-emerald-500"
          if (q == 3) return "border-orange-200"
          if (q == 2) return "border-orange-500"
          if (q == 1) return "border-orange-400"
        },
        i = (q) => {
          if (q >= 4) return "text-slate-800"
          if (q == 3) return "text-slate-200"
          if (q == 2) return "text-slate-300"
          if (q == 1) return "text-slate-300"
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
        f = ie(() =>
          u.value.speed.audit.enabled &&
          u.value.speed.optimize.enabled &&
          u.value.speed.caching.enabled &&
          u.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        d = ie(() =>
          u.value.security.audit.enabled &&
          u.value.security.ddosprotection.enabled &&
          u.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        h = ie(() =>
          u.value.accessibility.audit.enabled &&
          u.value.accessibility.levelA.enabled &&
          u.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        b = ie(() => 3 / 3),
        k = ie(
          () =>
            Object.values(u.value.speed).reduce(
              (q, ne) => q + (ne.enabled ? ne.price : 0),
              0,
            ) * f.value,
        ),
        P = ie(
          () =>
            Object.values(u.value.security).reduce(
              (q, ne) => q + (ne.enabled ? ne.price : 0),
              0,
            ) * d.value,
        ),
        F = ie(
          () =>
            Object.values(u.value.accessibility).reduce(
              (q, ne) => q + (ne.enabled ? ne.price : 0),
              0,
            ) * h.value,
        ),
        _ = ie(
          () =>
            Object.values(u.value.designOverhaul).reduce(
              (q, ne) => q + (ne.enabled ? ne.price : 0),
              0,
            ) * b.value,
        ),
        C = ie(() => {
          let q = 0
          for (const [ne, J] of Object.entries(u.value.speed))
            J.enabled && (q += J.price)
          return q
        }),
        R = ie(() => {
          let q = 0
          for (const [ne, J] of Object.entries(u.value.security))
            J.enabled && (q += J.price)
          return q
        }),
        V = ie(() => {
          let q = 0
          for (const [ne, J] of Object.entries(u.value.accessibility))
            J.enabled && (q += J.price)
          return q
        }),
        W = ie(() => {
          let q = 0
          for (const [ne, J] of Object.entries(u.value.designOverhaul))
            J.enabled && (q += J.price)
          return q
        }),
        X = () => {
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
        de = () => {
          u.value.designOverhaul.designOverhaul.enabled
            ? (u.value.designOverhaul.designOverhaul.enabled = !1)
            : (u.value.designOverhaul.designOverhaul.enabled = !0)
        },
        pe = (q) => {
          q.title == "Speed"
            ? X()
            : q.title == "Security"
              ? B()
              : q.title == "Accessibility"
                ? D()
                : q.title == "Design Overhaul" && de()
        },
        bt = (q) => Object.values(q.services).some((ne) => ne.enabled),
        We = _e([
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
            discount: b.value,
          },
        ]),
        Xe = (q) => {
          if (q.title === "Speed") return k.value
          if (q.title === "Security") return P.value
          if (q.title === "Accessibility") return F.value
          if (q.title === "Design Overhaul") return _.value
        },
        xt = (q) => {
          if (q.title === "Speed") return C.value
          if (q.title === "Security") return R.value
          if (q.title === "Accessibility") return V.value
          if (q.title === "Design Overhaul") return W.value
        },
        qe = ie(
          () =>
            Xe(We.value[0]) +
            Xe(We.value[1]) +
            Xe(We.value[2]) +
            Xe(We.value[3]),
        ),
        Xt = ie(() => {
          let q = []
          for (const [ne, J] of Object.entries(u.value.speed))
            J.enabled && q.push(J.title)
          for (const [ne, J] of Object.entries(u.value.security))
            J.enabled && q.push(J.title)
          for (const [ne, J] of Object.entries(u.value.accessibility))
            J.enabled && q.push(J.title)
          for (const [ne, J] of Object.entries(u.value.designOverhaul))
            J.enabled && q.push(J.title)
          return q
        }),
        qt = (q) => {
          let ne = ""
          return (
            (ne += a(q)),
            q == 5
              ? (ne += " bg-slate-100")
              : q == 4
                ? (ne += " bg-slate-400")
                : q == 3
                  ? (ne += " bg-slate-500")
                  : q == 2
                    ? (ne += " bg-slate-700")
                    : q == 1 && (ne += " bg-slate-800"),
            ne
          )
        }
      return (q, ne) => (
        he(),
        Fe("div", Bb, [
          m("div", Db, [
            m(
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
            m(
              "p",
              { class: M(["text-center", i(n.brightness)]) },
              [
                xe(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                Hb,
                zb,
                xe(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                m(
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
          (he(!0),
          Fe(
            Qe,
            null,
            xa(
              We.value,
              (J, mt) => (
                he(),
                Fe(
                  "div",
                  {
                    key: mt,
                    class: M([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      qt(n.brightness),
                    ]),
                  },
                  [
                    m("div", qb, [
                      m("div", Wb, [
                        m(
                          "div",
                          {
                            class: M([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              i(n.brightness),
                            ]),
                          },
                          [
                            m(
                              "input",
                              {
                                type: "checkbox",
                                name: J.title,
                                checked: bt(J),
                                onClick: (De) => pe(J),
                                class: M([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              Ub,
                            ),
                            m("h3", null, Rt(J.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      m("div", Vb, [
                        m(
                          "h3",
                          {
                            class: M([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            xt(J) != Math.floor(Xe(J))
                              ? (he(), Fe("span", Gb, "$" + Rt(xt(J)), 1))
                              : et("", !0),
                            xe("$" + Rt(Xe(J)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    m(
                      "hr",
                      { class: M(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    m("div", Kb, [
                      (he(!0),
                      Fe(
                        Qe,
                        null,
                        xa(
                          J.services,
                          (De, ht) => (
                            he(),
                            Fe(
                              "div",
                              {
                                key: ht,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                m("div", Yb, [
                                  m(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: De.title,
                                      checked: De.enabled,
                                      onClick: (Ze) =>
                                        (De.enabled = !De.enabled),
                                      class: M([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    Xb,
                                  ),
                                  m(
                                    "p",
                                    { class: M(["", i(n.brightness)]) },
                                    [
                                      De.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (he(),
                                          Fe("b", Zb, [
                                            m("em", null, Rt(De.title), 1),
                                          ]))
                                        : (he(),
                                          Fe("span", Jb, Rt(De.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                m("div", Qb, [
                                  m(
                                    "h3",
                                    {
                                      class: M([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      De.price !=
                                      Math.floor(De.price * J.discount)
                                        ? (he(),
                                          Fe("span", em, "$" + Rt(De.price), 1))
                                        : et("", !0),
                                      xe("$" + Rt(De.price * J.discount), 1),
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
          m("hr", { class: M(["my-4 w-full", r(n.brightness)]) }, null, 2),
          m("div", tm, [
            m("div", nm, [
              m(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              m(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                [
                  qe.value != Math.floor(qe.value)
                    ? (he(), Fe("span", rm, "$" + Rt(qe.value), 1))
                    : et("", !0),
                  xe("$" + Rt(qe.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          m("form", sm, [
            m(
              "input",
              { type: "hidden", name: "services", value: Xt.value },
              null,
              8,
              am,
            ),
            m(
              "input",
              { type: "hidden", name: "total", value: qe.value },
              null,
              8,
              lm,
            ),
            m("div", om, [
              m(
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
              m(
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
            m("div", im, [
              m(
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
              m(
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
            m(
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
          m(
            "p",
            { class: M(["text-center mt-4", i(n.brightness)]) },
            [
              xe(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              um,
              cm,
              xe(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              m(
                "a",
                { href: "/contact", class: M(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              xe(" and we can get that figured out."),
              fm,
              dm,
              xe("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  vm = Tr(hm, [["__scopeId", "data-v-e20b9d11"]]),
  pm = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        he(), Ke(vm, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  gm = { class: "flex-col" },
  bm = { class: "py-5 flex-col w-full" },
  mm = { id: "cta" },
  ui = {
    __name: "Contact",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (s) => {
          if (s >= 4) return "text-slate-800"
          if (s == 3) return "text-slate-200"
          if (s == 2) return "text-slate-300"
          if (s == 1) return "text-slate-300"
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
                let b = document.getElementById("cta"),
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
                  b.appendChild(k)
                let P = b.getElementsByTagName("input")
                for (let C = 0; C < P.length; C++) P[C].style.display = "none"
                let F = b.getElementsByTagName("textarea")[0]
                F.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        he(),
        Fe("div", gm, [
          m("div", bm, [
            m(
              "h2",
              {
                class: M([
                  "text-5xl text-center text-semibold",
                  n(t.brightness),
                ]),
              },
              " Contact Me ",
              2,
            ),
          ]),
          m("form", mm, [
            m(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: M(["rounded p-2 w-full", s.inputClass]),
              },
              null,
              2,
            ),
            m(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Email",
                class: M(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            m(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: M(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            m(
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
        ])
      )
    },
  },
  ym = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  wm = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  xm = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  _m = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  km = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = _e(3),
        n = e,
        r = (i) => {
          ;(t.value = Number(i)),
            window.localStorage.setItem("brightness", t.value)
        },
        s = ie(() => {
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
      gt(() => {
        let i = window.localStorage
        i.getItem("brightness")
          ? (t.value = Number(i.getItem("brightness")))
          : i.setItem("brightness", t.value),
          n.component == "pricing"
            ? ((a.title =
                "josephhansen.dev | | web developer/designer | pricing"),
              (a.meta[1].content =
                "josephhansen.dev | | web developer/designer | pricing"),
              (a.meta[6].content =
                "josephhansen.dev | | web developer/designer | pricing"),
              (a.meta[4].content = "https://josephhansen.dev/pricing"),
              (a.meta[9].content = "https://josephhansen.dev/pricing"))
            : n.component == "about-me"
              ? ((a.title =
                  "josephhansen.dev | | web developer/designer | about me"),
                (a.meta[1].content =
                  "josephhansen.dev | | web developer/designer | about me"),
                (a.meta[6].content =
                  "josephhansen.dev | | web developer/designer | about me"),
                (a.meta[4].content = "https://josephhansen.dev/about-me"),
                (a.meta[9].content = "https://josephhansen.dev/about-me"))
              : n.component == "contact"
                ? ((a.title =
                    "josephhansen.dev | | web developer/designer | contact"),
                  (a.meta[1].content =
                    "josephhansen.dev | | web developer/designer | contact"),
                  (a.meta[6].content =
                    "josephhansen.dev | | web developer/designer | contact"),
                  (a.meta[4].content = "https://josephhansen.dev/contact"),
                  (a.meta[9].content = "https://josephhansen.dev/contact"))
                : n.component == "portfolio" &&
                  ((a.title =
                    "josephhansen.dev | | web developer/designer | portfolio"),
                  (a.meta[1].content =
                    "josephhansen.dev | | web developer/designer | portfolio"),
                  (a.meta[6].content =
                    "josephhansen.dev | | web developer/designer | portfolio"),
                  (a.meta[4].content = "https://josephhansen.dev/portfolio"),
                  (a.meta[9].content = "https://josephhansen.dev/portfolio"))
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
        sn(() => {
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
          he(),
          Fe(
            Qe,
            null,
            [
              m(
                "main",
                {
                  class: M([["w-dvw", s.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  le($g, { "onUpdate:brightness": r }),
                  m("div", wm, [
                    e.component == "pricing"
                      ? (he(),
                        Fe(
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
                            le(pm, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : et("", !0),
                    m("div", xm, [
                      e.component == "about-me"
                        ? (he(),
                          Fe(
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
                              le(ym, { brightness: t.value }, null, 8, [
                                "brightness",
                              ]),
                            ],
                            2,
                          ))
                        : et("", !0),
                    ]),
                    e.component == "contact"
                      ? (he(),
                        Fe(
                          "div",
                          {
                            key: 1,
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
                            le(ui, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : et("", !0),
                    e.component == "portfolio"
                      ? (he(),
                        Fe(
                          "div",
                          {
                            key: 2,
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
                            le(ui, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : et("", !0),
                    e.component == "home"
                      ? (he(),
                        Fe(
                          "div",
                          {
                            key: 3,
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
                            le(Og, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : et("", !0),
                  ]),
                  m("div", _m, [
                    e.component == "home"
                      ? (he(),
                        Fe(
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
                            le(jb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : et("", !0),
                  ]),
                ],
                2,
              ),
              le(Lb, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  $m = Tr(km, [["__scopeId", "data-v-b4c448cb"]])
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Qn = typeof window < "u"
function Em(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const je = Object.assign
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
  Sm = /\/$/,
  Cm = (e) => e.replace(Sm, "")
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
    (r = Om(r ?? t, n)),
    { fullPath: r + (a && "?") + a + i, path: r, query: s, hash: i }
  )
}
function Pm(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function ci(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function Mm(e, t, n) {
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
  for (const n in e) if (!Am(e[n], t[n])) return !1
  return !0
}
function Am(e, t) {
  return zt(e) ? fi(e, t) : zt(t) ? fi(t, e) : e === t
}
function fi(e, t) {
  return zt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Om(e, t) {
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
function Im(e) {
  if (!e)
    if (Qn) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cm(e)
}
const Rm = /^[^#]+#/
function Tm(e, t) {
  return e.replace(Rm, "#") + t
}
function Nm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Cs = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function jm(e) {
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
    t = Nm(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function di(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Ra = new Map()
function Fm(e, t) {
  Ra.set(e, t)
}
function Lm(e) {
  const t = Ra.get(e)
  return Ra.delete(e), t
}
let Bm = () => location.protocol + "//" + location.host
function Bu(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let u = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      f = s.slice(u)
    return f[0] !== "/" && (f = "/" + f), ci(f, "")
  }
  return ci(n, e) + r + s
}
function Dm(e, t, n, r) {
  let s = [],
    a = [],
    i = null
  const u = ({ state: k }) => {
    const P = Bu(e, location),
      F = n.value,
      _ = t.value
    let C = 0
    if (k) {
      if (((n.value = P), (t.value = k), i && i === F)) {
        i = null
        return
      }
      C = _ ? k.position - _.position : 0
    } else r(P)
    s.forEach((R) => {
      R(n.value, F, {
        delta: C,
        type: Ir.pop,
        direction: C ? (C > 0 ? Er.forward : Er.back) : Er.unknown,
      })
    })
  }
  function f() {
    i = n.value
  }
  function d(k) {
    s.push(k)
    const P = () => {
      const F = s.indexOf(k)
      F > -1 && s.splice(F, 1)
    }
    return a.push(P), P
  }
  function h() {
    const { history: k } = window
    k.state && k.replaceState(je({}, k.state, { scroll: Cs() }), "")
  }
  function b() {
    for (const k of a) k()
    ;(a = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", h)
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", h, { passive: !0 }),
    { pauseListeners: f, listen: d, destroy: b }
  )
}
function hi(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Cs() : null,
  }
}
function Hm(e) {
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
    const b = e.indexOf("#"),
      k =
        b > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(b)) + f
          : Bm() + e + f
    try {
      t[h ? "replaceState" : "pushState"](d, "", k), (s.value = d)
    } catch (P) {
      console.error(P), n[h ? "replace" : "assign"](k)
    }
  }
  function i(f, d) {
    const h = je({}, t.state, hi(s.value.back, f, s.value.forward, !0), d, {
      position: s.value.position,
    })
    a(f, h, !0), (r.value = f)
  }
  function u(f, d) {
    const h = je({}, s.value, t.state, { forward: f, scroll: Cs() })
    a(h.current, h, !0)
    const b = je({}, hi(r.value, f, null), { position: h.position + 1 }, d)
    a(f, b, !1), (r.value = f)
  }
  return { location: r, state: s, push: u, replace: i }
}
function zm(e) {
  e = Im(e)
  const t = Hm(e),
    n = Dm(e, t.state, t.location, t.replace)
  function r(a, i = !0) {
    i || n.pauseListeners(), history.go(a)
  }
  const s = je(
    { location: "", base: e, go: r, createHref: Tm.bind(null, e) },
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
function qm(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Du(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const pn = {
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
var vi
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(vi || (vi = {}))
function ur(e, t) {
  return je(new Error(), { type: e, [Hu]: !0 }, t)
}
function Qt(e, t) {
  return e instanceof Error && Hu in e && (t == null || !!(e.type & t))
}
const pi = "[^/]+?",
  Wm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Um = /[.+*?^${}()[\]/\\]/g
function Vm(e, t) {
  const n = je({}, Wm, t),
    r = []
  let s = n.start ? "^" : ""
  const a = []
  for (const d of e) {
    const h = d.length ? [] : [90]
    n.strict && !d.length && (s += "/")
    for (let b = 0; b < d.length; b++) {
      const k = d[b]
      let P = 40 + (n.sensitive ? 0.25 : 0)
      if (k.type === 0)
        b || (s += "/"), (s += k.value.replace(Um, "\\$&")), (P += 40)
      else if (k.type === 1) {
        const { value: F, repeatable: _, optional: C, regexp: R } = k
        a.push({ name: F, repeatable: _, optional: C })
        const V = R || pi
        if (V !== pi) {
          P += 10
          try {
            new RegExp(`(${V})`)
          } catch (X) {
            throw new Error(
              `Invalid custom RegExp for param "${F}" (${V}): ` + X.message,
            )
          }
        }
        let W = _ ? `((?:${V})(?:/(?:${V}))*)` : `(${V})`
        b || (W = C && d.length < 2 ? `(?:/${W})` : "/" + W),
          C && (W += "?"),
          (s += W),
          (P += 20),
          C && (P += -8),
          _ && (P += -20),
          V === ".*" && (P += -50)
      }
      h.push(P)
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
      b = {}
    if (!h) return null
    for (let k = 1; k < h.length; k++) {
      const P = h[k] || "",
        F = a[k - 1]
      b[F.name] = P && F.repeatable ? P.split("/") : P
    }
    return b
  }
  function f(d) {
    let h = "",
      b = !1
    for (const k of e) {
      ;(!b || !h.endsWith("/")) && (h += "/"), (b = !1)
      for (const P of k)
        if (P.type === 0) h += P.value
        else if (P.type === 1) {
          const { value: F, repeatable: _, optional: C } = P,
            R = F in d ? d[F] : ""
          if (zt(R) && !_)
            throw new Error(
              `Provided param "${F}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const V = zt(R) ? R.join("/") : R
          if (!V)
            if (C)
              k.length < 2 &&
                (h.endsWith("/") ? (h = h.slice(0, -1)) : (b = !0))
            else throw new Error(`Missing required param "${F}"`)
          h += V
        }
    }
    return h || "/"
  }
  return { re: i, score: r, keys: a, parse: u, stringify: f }
}
function Gm(e, t) {
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
function Km(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const a = Gm(r[n], s[n])
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
const Ym = { type: 0, value: "" },
  Xm = /[a-zA-Z0-9_]/
function Zm(e) {
  if (!e) return [[]]
  if (e === "/") return [[Ym]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(P) {
    throw new Error(`ERR (${n})/"${d}": ${P}`)
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
  function b() {
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
        f === "/" ? (d && b(), i()) : f === ":" ? (b(), (n = 1)) : k()
        break
      case 4:
        k(), (n = r)
        break
      case 1:
        f === "("
          ? (n = 2)
          : Xm.test(f)
            ? k()
            : (b(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--)
        break
      case 2:
        f === ")"
          ? h[h.length - 1] == "\\"
            ? (h = h.slice(0, -1) + f)
            : (n = 3)
          : (h += f)
        break
      case 3:
        b(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--, (h = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), b(), i(), s
}
function Jm(e, t, n) {
  const r = Vm(Zm(e.path), n),
    s = je(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function Qm(e, t) {
  const n = [],
    r = new Map()
  t = yi({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(h) {
    return r.get(h)
  }
  function a(h, b, k) {
    const P = !k,
      F = e1(h)
    F.aliasOf = k && k.record
    const _ = yi(t, h),
      C = [F]
    if ("alias" in h) {
      const W = typeof h.alias == "string" ? [h.alias] : h.alias
      for (const X of W)
        C.push(
          je({}, F, {
            components: k ? k.record.components : F.components,
            path: X,
            aliasOf: k ? k.record : F,
          }),
        )
    }
    let R, V
    for (const W of C) {
      const { path: X } = W
      if (b && X[0] !== "/") {
        const B = b.record.path,
          D = B[B.length - 1] === "/" ? "" : "/"
        W.path = b.record.path + (X && D + X)
      }
      if (
        ((R = Jm(W, b, _)),
        k
          ? k.alias.push(R)
          : ((V = V || R),
            V !== R && V.alias.push(R),
            P && h.name && !mi(R) && i(h.name)),
        F.children)
      ) {
        const B = F.children
        for (let D = 0; D < B.length; D++) a(B[D], R, k && k.children[D])
      }
      ;(k = k || R),
        ((R.record.components && Object.keys(R.record.components).length) ||
          R.record.name ||
          R.record.redirect) &&
          f(R)
    }
    return V
      ? () => {
          i(V)
        }
      : $r
  }
  function i(h) {
    if (Du(h)) {
      const b = r.get(h)
      b &&
        (r.delete(h),
        n.splice(n.indexOf(b), 1),
        b.children.forEach(i),
        b.alias.forEach(i))
    } else {
      const b = n.indexOf(h)
      b > -1 &&
        (n.splice(b, 1),
        h.record.name && r.delete(h.record.name),
        h.children.forEach(i),
        h.alias.forEach(i))
    }
  }
  function u() {
    return n
  }
  function f(h) {
    let b = 0
    for (
      ;
      b < n.length &&
      Km(h, n[b]) >= 0 &&
      (h.record.path !== n[b].record.path || !zu(h, n[b]));

    )
      b++
    n.splice(b, 0, h), h.record.name && !mi(h) && r.set(h.record.name, h)
  }
  function d(h, b) {
    let k,
      P = {},
      F,
      _
    if ("name" in h && h.name) {
      if (((k = r.get(h.name)), !k)) throw ur(1, { location: h })
      ;(_ = k.record.name),
        (P = je(
          bi(
            b.params,
            k.keys.filter((V) => !V.optional).map((V) => V.name),
          ),
          h.params &&
            bi(
              h.params,
              k.keys.map((V) => V.name),
            ),
        )),
        (F = k.stringify(P))
    } else if ("path" in h)
      (F = h.path),
        (k = n.find((V) => V.re.test(F))),
        k && ((P = k.parse(F)), (_ = k.record.name))
    else {
      if (((k = b.name ? r.get(b.name) : n.find((V) => V.re.test(b.path))), !k))
        throw ur(1, { location: h, currentLocation: b })
      ;(_ = k.record.name),
        (P = je({}, b.params, h.params)),
        (F = k.stringify(P))
    }
    const C = []
    let R = k
    for (; R; ) C.unshift(R.record), (R = R.parent)
    return { name: _, path: F, params: P, matched: C, meta: n1(C) }
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
function bi(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function e1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: t1(e),
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
function t1(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function mi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function n1(e) {
  return e.reduce((t, n) => je(t, n.meta), {})
}
function yi(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function zu(e, t) {
  return t.children.some((n) => n === e || zu(e, n))
}
const qu = /#/g,
  r1 = /&/g,
  s1 = /\//g,
  a1 = /=/g,
  l1 = /\?/g,
  Wu = /\+/g,
  o1 = /%5B/g,
  i1 = /%5D/g,
  Uu = /%5E/g,
  u1 = /%60/g,
  Vu = /%7B/g,
  c1 = /%7C/g,
  Gu = /%7D/g,
  f1 = /%20/g
function il(e) {
  return encodeURI("" + e)
    .replace(c1, "|")
    .replace(o1, "[")
    .replace(i1, "]")
}
function d1(e) {
  return il(e).replace(Vu, "{").replace(Gu, "}").replace(Uu, "^")
}
function Ta(e) {
  return il(e)
    .replace(Wu, "%2B")
    .replace(f1, "+")
    .replace(qu, "%23")
    .replace(r1, "%26")
    .replace(u1, "`")
    .replace(Vu, "{")
    .replace(Gu, "}")
    .replace(Uu, "^")
}
function h1(e) {
  return Ta(e).replace(a1, "%3D")
}
function v1(e) {
  return il(e).replace(qu, "%23").replace(l1, "%3F")
}
function p1(e) {
  return e == null ? "" : v1(e).replace(s1, "%2F")
}
function fs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function g1(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const a = r[s].replace(Wu, " "),
      i = a.indexOf("="),
      u = fs(i < 0 ? a : a.slice(0, i)),
      f = i < 0 ? null : fs(a.slice(i + 1))
    if (u in t) {
      let d = t[u]
      zt(d) || (d = t[u] = [d]), d.push(f)
    } else t[u] = f
  }
  return t
}
function wi(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = h1(n)), r == null)) {
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
function b1(e) {
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
const m1 = Symbol(""),
  xi = Symbol(""),
  ul = Symbol(""),
  Ku = Symbol(""),
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
    new Promise((i, u) => {
      const f = (b) => {
          b === !1
            ? u(ur(4, { from: n, to: t }))
            : b instanceof Error
              ? u(b)
              : qm(b)
                ? u(ur(2, { from: t, to: b }))
                : (a &&
                    r.enterCallbacks[s] === a &&
                    typeof b == "function" &&
                    a.push(b),
                  i())
        },
        d = e.call(r && r.instances[s], t, n, f)
      let h = Promise.resolve(d)
      e.length < 3 && (h = h.then(f)), h.catch((b) => u(b))
    })
}
function ha(e, t, n, r) {
  const s = []
  for (const a of e)
    for (const i in a.components) {
      let u = a.components[i]
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (y1(u)) {
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
              const h = Em(d) ? d.default : d
              a.components[i] = h
              const k = (h.__vccOpts || h)[t]
              return k && mn(k, n, r, a, i)()
            }),
          )
        }
    }
  return s
}
function y1(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function _i(e) {
  const t = ft(ul),
    n = ft(Ku),
    r = ie(() => t.resolve(fe(e.to))),
    s = ie(() => {
      const { matched: f } = r.value,
        { length: d } = f,
        h = f[d - 1],
        b = n.matched
      if (!h || !b.length) return -1
      const k = b.findIndex(ir.bind(null, h))
      if (k > -1) return k
      const P = ki(f[d - 2])
      return d > 1 && ki(h) === P && b[b.length - 1].path !== P
        ? b.findIndex(ir.bind(null, f[d - 2]))
        : k
    }),
    a = ie(() => s.value > -1 && k1(n.params, r.value.params)),
    i = ie(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Lu(n.params, r.value.params),
    )
  function u(f = {}) {
    return _1(f)
      ? t[fe(e.replace) ? "replace" : "push"](fe(e.to)).catch($r)
      : Promise.resolve()
  }
  return {
    route: r,
    href: ie(() => r.value.href),
    isActive: a,
    isExactActive: i,
    navigate: u,
  }
}
const w1 = At({
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
    useLink: _i,
    setup(e, { slots: t }) {
      const n = Rr(_i(e)),
        { options: r } = ft(ul),
        s = ie(() => ({
          [$i(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [$i(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const a = t.default && t.default(n)
        return e.custom
          ? a
          : lt(
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
  x1 = w1
function _1(e) {
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
function k1(e, t) {
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
function ki(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const $i = (e, t, n) => e ?? t ?? n,
  $1 = At({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ft(Na),
        s = ie(() => e.route || r.value),
        a = ft(xi, 0),
        i = ie(() => {
          let d = fe(a)
          const { matched: h } = s.value
          let b
          for (; (b = h[d]) && !b.components; ) d++
          return d
        }),
        u = ie(() => s.value.matched[i.value])
      Kt(
        xi,
        ie(() => i.value + 1),
      ),
        Kt(m1, u),
        Kt(Na, s)
      const f = _e()
      return (
        rn(
          () => [f.value, u.value, e.name],
          ([d, h, b], [k, P, F]) => {
            h &&
              ((h.instances[b] = d),
              P &&
                P !== h &&
                d &&
                d === k &&
                (h.leaveGuards.size || (h.leaveGuards = P.leaveGuards),
                h.updateGuards.size || (h.updateGuards = P.updateGuards))),
              d &&
                h &&
                (!P || !ir(h, P) || !k) &&
                (h.enterCallbacks[b] || []).forEach((_) => _(d))
          },
          { flush: "post" },
        ),
        () => {
          const d = s.value,
            h = e.name,
            b = u.value,
            k = b && b.components[h]
          if (!k) return Ei(n.default, { Component: k, route: d })
          const P = b.props[h],
            F = P
              ? P === !0
                ? d.params
                : typeof P == "function"
                  ? P(d)
                  : P
              : null,
            C = lt(
              k,
              je({}, F, t, {
                onVnodeUnmounted: (R) => {
                  R.component.isUnmounted && (b.instances[h] = null)
                },
                ref: f,
              }),
            )
          return Ei(n.default, { Component: C, route: d }) || C
        }
      )
    },
  })
function Ei(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const E1 = $1
function S1(e) {
  const t = Qm(e.routes, e),
    n = e.parseQuery || g1,
    r = e.stringifyQuery || wi,
    s = e.history,
    a = wr(),
    i = wr(),
    u = wr(),
    f = C0(pn)
  let d = pn
  Qn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const h = fa.bind(null, (I) => "" + I),
    b = fa.bind(null, p1),
    k = fa.bind(null, fs)
  function P(I, Q) {
    let G, ae
    return (
      Du(I) ? ((G = t.getRecordMatcher(I)), (ae = Q)) : (ae = I),
      t.addRoute(ae, G)
    )
  }
  function F(I) {
    const Q = t.getRecordMatcher(I)
    Q && t.removeRoute(Q)
  }
  function _() {
    return t.getRoutes().map((I) => I.record)
  }
  function C(I) {
    return !!t.getRecordMatcher(I)
  }
  function R(I, Q) {
    if (((Q = je({}, Q || f.value)), typeof I == "string")) {
      const E = da(n, I, Q.path),
        A = t.resolve({ path: E.path }, Q),
        T = s.createHref(E.fullPath)
      return je(E, A, {
        params: k(A.params),
        hash: fs(E.hash),
        redirectedFrom: void 0,
        href: T,
      })
    }
    let G
    if ("path" in I) G = je({}, I, { path: da(n, I.path, Q.path).path })
    else {
      const E = je({}, I.params)
      for (const A in E) E[A] == null && delete E[A]
      ;(G = je({}, I, { params: b(E) })), (Q.params = b(Q.params))
    }
    const ae = t.resolve(G, Q),
      Me = I.hash || ""
    ae.params = h(k(ae.params))
    const p = Pm(r, je({}, I, { hash: d1(Me), path: ae.path })),
      y = s.createHref(p)
    return je(
      { fullPath: p, hash: Me, query: r === wi ? b1(I.query) : I.query || {} },
      ae,
      { redirectedFrom: void 0, href: y },
    )
  }
  function V(I) {
    return typeof I == "string" ? da(n, I, f.value.path) : je({}, I)
  }
  function W(I, Q) {
    if (d !== I) return ur(8, { from: Q, to: I })
  }
  function X(I) {
    return de(I)
  }
  function B(I) {
    return X(je(V(I), { replace: !0 }))
  }
  function D(I) {
    const Q = I.matched[I.matched.length - 1]
    if (Q && Q.redirect) {
      const { redirect: G } = Q
      let ae = typeof G == "function" ? G(I) : G
      return (
        typeof ae == "string" &&
          ((ae =
            ae.includes("?") || ae.includes("#") ? (ae = V(ae)) : { path: ae }),
          (ae.params = {})),
        je(
          {
            query: I.query,
            hash: I.hash,
            params: "path" in ae ? {} : I.params,
          },
          ae,
        )
      )
    }
  }
  function de(I, Q) {
    const G = (d = R(I)),
      ae = f.value,
      Me = I.state,
      p = I.force,
      y = I.replace === !0,
      E = D(G)
    if (E)
      return de(
        je(V(E), {
          state: typeof E == "object" ? je({}, Me, E.state) : Me,
          force: p,
          replace: y,
        }),
        Q || G,
      )
    const A = G
    A.redirectedFrom = Q
    let T
    return (
      !p &&
        Mm(r, ae, G) &&
        ((T = ur(16, { to: A, from: ae })), ht(ae, ae, !0, !1)),
      (T ? Promise.resolve(T) : We(A, ae))
        .catch((j) => (Qt(j) ? (Qt(j, 2) ? j : De(j)) : J(j, A, ae)))
        .then((j) => {
          if (j) {
            if (Qt(j, 2))
              return de(
                je({ replace: y }, V(j.to), {
                  state: typeof j.to == "object" ? je({}, Me, j.to.state) : Me,
                  force: p,
                }),
                Q || A,
              )
          } else j = xt(A, ae, !0, y, Me)
          return Xe(A, ae, j), j
        })
    )
  }
  function pe(I, Q) {
    const G = W(I, Q)
    return G ? Promise.reject(G) : Promise.resolve()
  }
  function bt(I) {
    const Q = Ot.values().next().value
    return Q && typeof Q.runWithContext == "function"
      ? Q.runWithContext(I)
      : I()
  }
  function We(I, Q) {
    let G
    const [ae, Me, p] = C1(I, Q)
    G = ha(ae.reverse(), "beforeRouteLeave", I, Q)
    for (const E of ae)
      E.leaveGuards.forEach((A) => {
        G.push(mn(A, I, Q))
      })
    const y = pe.bind(null, I, Q)
    return (
      G.push(y),
      Ve(G)
        .then(() => {
          G = []
          for (const E of a.list()) G.push(mn(E, I, Q))
          return G.push(y), Ve(G)
        })
        .then(() => {
          G = ha(Me, "beforeRouteUpdate", I, Q)
          for (const E of Me)
            E.updateGuards.forEach((A) => {
              G.push(mn(A, I, Q))
            })
          return G.push(y), Ve(G)
        })
        .then(() => {
          G = []
          for (const E of p)
            if (E.beforeEnter)
              if (zt(E.beforeEnter))
                for (const A of E.beforeEnter) G.push(mn(A, I, Q))
              else G.push(mn(E.beforeEnter, I, Q))
          return G.push(y), Ve(G)
        })
        .then(
          () => (
            I.matched.forEach((E) => (E.enterCallbacks = {})),
            (G = ha(p, "beforeRouteEnter", I, Q)),
            G.push(y),
            Ve(G)
          ),
        )
        .then(() => {
          G = []
          for (const E of i.list()) G.push(mn(E, I, Q))
          return G.push(y), Ve(G)
        })
        .catch((E) => (Qt(E, 8) ? E : Promise.reject(E)))
    )
  }
  function Xe(I, Q, G) {
    u.list().forEach((ae) => bt(() => ae(I, Q, G)))
  }
  function xt(I, Q, G, ae, Me) {
    const p = W(I, Q)
    if (p) return p
    const y = Q === pn,
      E = Qn ? history.state : {}
    G &&
      (ae || y
        ? s.replace(I.fullPath, je({ scroll: y && E && E.scroll }, Me))
        : s.push(I.fullPath, Me)),
      (f.value = I),
      ht(I, Q, G, y),
      De()
  }
  let qe
  function Xt() {
    qe ||
      (qe = s.listen((I, Q, G) => {
        if (!_t.listening) return
        const ae = R(I),
          Me = D(ae)
        if (Me) {
          de(je(Me, { replace: !0 }), ae).catch($r)
          return
        }
        d = ae
        const p = f.value
        Qn && Fm(di(p.fullPath, G.delta), Cs()),
          We(ae, p)
            .catch((y) =>
              Qt(y, 12)
                ? y
                : Qt(y, 2)
                  ? (de(y.to, ae)
                      .then((E) => {
                        Qt(E, 20) &&
                          !G.delta &&
                          G.type === Ir.pop &&
                          s.go(-1, !1)
                      })
                      .catch($r),
                    Promise.reject())
                  : (G.delta && s.go(-G.delta, !1), J(y, ae, p)),
            )
            .then((y) => {
              ;(y = y || xt(ae, p, !1)),
                y &&
                  (G.delta && !Qt(y, 8)
                    ? s.go(-G.delta, !1)
                    : G.type === Ir.pop && Qt(y, 20) && s.go(-1, !1)),
                Xe(ae, p, y)
            })
            .catch($r)
      }))
  }
  let qt = wr(),
    q = wr(),
    ne
  function J(I, Q, G) {
    De(I)
    const ae = q.list()
    return (
      ae.length ? ae.forEach((Me) => Me(I, Q, G)) : console.error(I),
      Promise.reject(I)
    )
  }
  function mt() {
    return ne && f.value !== pn
      ? Promise.resolve()
      : new Promise((I, Q) => {
          qt.add([I, Q])
        })
  }
  function De(I) {
    return (
      ne ||
        ((ne = !I),
        Xt(),
        qt.list().forEach(([Q, G]) => (I ? G(I) : Q())),
        qt.reset()),
      I
    )
  }
  function ht(I, Q, G, ae) {
    const { scrollBehavior: Me } = e
    if (!Qn || !Me) return Promise.resolve()
    const p =
      (!G && Lm(di(I.fullPath, 0))) ||
      ((ae || !G) && history.state && history.state.scroll) ||
      null
    return Qi()
      .then(() => Me(I, Q, p))
      .then((y) => y && jm(y))
      .catch((y) => J(y, I, Q))
  }
  const Ze = (I) => s.go(I)
  let Wt
  const Ot = new Set(),
    _t = {
      currentRoute: f,
      listening: !0,
      addRoute: P,
      removeRoute: F,
      hasRoute: C,
      getRoutes: _,
      resolve: R,
      options: e,
      push: X,
      replace: B,
      go: Ze,
      back: () => Ze(-1),
      forward: () => Ze(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: u.add,
      onError: q.add,
      isReady: mt,
      install(I) {
        const Q = this
        I.component("RouterLink", x1),
          I.component("RouterView", E1),
          (I.config.globalProperties.$router = Q),
          Object.defineProperty(I.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => fe(f),
          }),
          Qn &&
            !Wt &&
            f.value === pn &&
            ((Wt = !0), X(s.location).catch((Me) => {}))
        const G = {}
        for (const Me in pn)
          Object.defineProperty(G, Me, {
            get: () => f.value[Me],
            enumerable: !0,
          })
        I.provide(ul, Q), I.provide(Ku, Wi(G)), I.provide(Na, f)
        const ae = I.unmount
        Ot.add(I),
          (I.unmount = function () {
            Ot.delete(I),
              Ot.size < 1 &&
                ((d = pn),
                qe && qe(),
                (qe = null),
                (f.value = pn),
                (Wt = !1),
                (ne = !1)),
              ae()
          })
      },
    }
  function Ve(I) {
    return I.reduce((Q, G) => Q.then(() => bt(G)), Promise.resolve())
  }
  return _t
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
const cl = [
  { path: "/", component: null, props: { component: "home" } },
  { path: "/pricing", component: null, props: { component: "pricing" } },
  { path: "/contact", component: null, props: { component: "contact" } },
  { path: "/contact-me", component: null, props: { component: "contact" } },
  { path: "/about", component: null, props: { component: "about-me" } },
  { path: "/about-me", component: null, props: { component: "about-me" } },
  { path: "/portfolio", component: null, props: { component: "portfolio" } },
]
cl.map((e) => e.path)
cl.forEach((e) => {
  e.component = $m
})
const P1 = S1({ history: zm(), routes: cl }),
  Yu = ip(hp)
Yu.use(P1)
Yu.mount("#app")
