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
/**
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function mi(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const Je = {},
  pr = [],
  jt = () => {},
  Xh = () => !1,
  Bs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  bi = (e) => e.startsWith("onUpdate:"),
  yt = Object.assign,
  yi = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Zh = Object.prototype.hasOwnProperty,
  Be = (e, t) => Zh.call(e, t),
  _e = Array.isArray,
  hr = (e) => zs(e) === "[object Map]",
  yu = (e) => zs(e) === "[object Set]",
  Te = (e) => typeof e == "function",
  ut = (e) => typeof e == "string",
  _r = (e) => typeof e == "symbol",
  tt = (e) => e !== null && typeof e == "object",
  wu = (e) => (tt(e) || Te(e)) && Te(e.then) && Te(e.catch),
  xu = Object.prototype.toString,
  zs = (e) => xu.call(e),
  Jh = (e) => zs(e).slice(8, -1),
  Su = (e) => zs(e) === "[object Object]",
  wi = (e) =>
    ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  bs = mi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Fs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Qh = /-(\w)/g,
  tn = Fs((e) => e.replace(Qh, (t, n) => (n ? n.toUpperCase() : ""))),
  e0 = /\B([A-Z])/g,
  Cr = Fs((e) => e.replace(e0, "-$1").toLowerCase()),
  js = Fs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Pa = Fs((e) => (e ? `on${js(e)}` : "")),
  Ln = (e, t) => !Object.is(e, t),
  ys = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Ts = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Ua = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let co
const Eu = () =>
  co ||
  (co =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function Ds(e) {
  if (_e(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ut(r) ? s0(r) : Ds(r)
      if (s) for (const a in s) t[a] = s[a]
    }
    return t
  } else if (ut(e) || tt(e)) return e
}
const t0 = /;(?![^(]*\))/g,
  n0 = /:([^]+)/,
  r0 = /\/\*[^]*?\*\//g
function s0(e) {
  const t = {}
  return (
    e
      .replace(r0, "")
      .split(t0)
      .forEach((n) => {
        if (n) {
          const r = n.split(n0)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function N(e) {
  let t = ""
  if (ut(e)) t = e
  else if (_e(e))
    for (let n = 0; n < e.length; n++) {
      const r = N(e[n])
      r && (t += r + " ")
    }
  else if (tt(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const a0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  i0 = mi(a0)
function _u(e) {
  return !!e || e === ""
}
const At = (e) =>
    ut(e)
      ? e
      : e == null
        ? ""
        : _e(e) || (tt(e) && (e.toString === xu || !Te(e.toString)))
          ? JSON.stringify(e, Cu, 2)
          : String(e),
  Cu = (e, t) =>
    t && t.__v_isRef
      ? Cu(e, t.value)
      : hr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], a) => ((n[ka(r, a) + " =>"] = s), n),
              {},
            ),
          }
        : yu(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ka(n)) }
          : _r(t)
            ? ka(t)
            : tt(t) && !_e(t) && !Su(t)
              ? String(t)
              : t,
  ka = (e, t = "") => {
    var n
    return _r(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Wt
class l0 {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Wt),
      !t && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Wt
      try {
        return (Wt = this), t()
      } finally {
        Wt = n
      }
    }
  }
  on() {
    Wt = this
  }
  off() {
    Wt = this.parent
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
function o0(e, t = Wt) {
  t && t.active && t.effects.push(e)
}
function u0() {
  return Wt
}
let Gn
class xi {
  constructor(t, n, r, s) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 2),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      o0(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Kn()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (c0(n.computed), this._dirtyLevel >= 2)) break
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Xn()
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = On,
      n = Gn
    try {
      return (On = !0), (Gn = this), this._runnings++, fo(this), this.fn()
    } finally {
      po(this), this._runnings--, (Gn = n), (On = t)
    }
  }
  stop() {
    var t
    this.active &&
      (fo(this),
      po(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function c0(e) {
  return e.value
}
function fo(e) {
  e._trackId++, (e._depsLength = 0)
}
function po(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Tu(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Tu(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let On = !0,
  Ya = 0
const Pu = []
function Kn() {
  Pu.push(On), (On = !1)
}
function Xn() {
  const e = Pu.pop()
  On = e === void 0 ? !0 : e
}
function Si() {
  Ya++
}
function Ei() {
  for (Ya--; !Ya && Ka.length; ) Ka.shift()()
}
function ku(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Tu(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const Ka = []
function Mu(e, t, n) {
  Si()
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel
      ;(r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger())
    }
  $u(e), Ei()
}
function $u(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), Ka.push(t.scheduler))
}
const Iu = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Xa = new WeakMap(),
  Vn = Symbol(""),
  Za = Symbol("")
function Mt(e, t, n) {
  if (On && Gn) {
    let r = Xa.get(e)
    r || Xa.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Iu(() => r.delete(n)))), ku(Gn, s)
  }
}
function un(e, t, n, r, s, a) {
  const i = Xa.get(e)
  if (!i) return
  let l = []
  if (t === "clear") l = [...i.values()]
  else if (n === "length" && _e(e)) {
    const o = Number(r)
    i.forEach((f, c) => {
      ;(c === "length" || (!_r(c) && c >= o)) && l.push(f)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        _e(e)
          ? wi(n) && l.push(i.get("length"))
          : (l.push(i.get(Vn)), hr(e) && l.push(i.get(Za)))
        break
      case "delete":
        _e(e) || (l.push(i.get(Vn)), hr(e) && l.push(i.get(Za)))
        break
      case "set":
        hr(e) && l.push(i.get(Vn))
        break
    }
  Si()
  for (const o of l) o && Mu(o, 2)
  Ei()
}
const d0 = mi("__proto__,__v_isRef,__isVue"),
  Ou = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(_r),
  ),
  ho = f0()
function f0() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = De(this)
        for (let a = 0, i = this.length; a < i; a++) Mt(r, "get", a + "")
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(De)) : s
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Kn(), Si()
        const r = De(this)[t].apply(this, n)
        return Ei(), Xn(), r
      }
    }),
    e
  )
}
function p0(e) {
  const t = De(this)
  return Mt(t, "has", e), t.hasOwnProperty(e)
}
class Au {
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
      return r === (s ? (a ? T0 : Bu) : a ? Ru : Nu).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = _e(t)
    if (!s) {
      if (i && Be(ho, n)) return Reflect.get(ho, n, r)
      if (n === "hasOwnProperty") return p0
    }
    const l = Reflect.get(t, n, r)
    return (_r(n) ? Ou.has(n) : d0(n)) || (s || Mt(t, "get", n), a)
      ? l
      : St(l)
        ? i && wi(n)
          ? l
          : l.value
        : tt(l)
          ? s
            ? Fu(l)
            : Kr(l)
          : l
  }
}
class Lu extends Au {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let a = t[n]
    if (!this._shallow) {
      const o = yr(a)
      if (
        (!Ps(r) && !yr(r) && ((a = De(a)), (r = De(r))),
        !_e(t) && St(a) && !St(r))
      )
        return o ? !1 : ((a.value = r), !0)
    }
    const i = _e(t) && wi(n) ? Number(n) < t.length : Be(t, n),
      l = Reflect.set(t, n, r, s)
    return (
      t === De(s) && (i ? Ln(r, a) && un(t, "set", n, r) : un(t, "add", n, r)),
      l
    )
  }
  deleteProperty(t, n) {
    const r = Be(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && un(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!_r(n) || !Ou.has(n)) && Mt(t, "has", n), r
  }
  ownKeys(t) {
    return Mt(t, "iterate", _e(t) ? "length" : Vn), Reflect.ownKeys(t)
  }
}
class h0 extends Au {
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
const g0 = new Lu(),
  v0 = new h0(),
  m0 = new Lu(!0),
  _i = (e) => e,
  Hs = (e) => Reflect.getPrototypeOf(e)
function os(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = De(e),
    a = De(t)
  n || (Ln(t, a) && Mt(s, "get", t), Mt(s, "get", a))
  const { has: i } = Hs(s),
    l = r ? _i : n ? Pi : Hr
  if (i.call(s, t)) return l(e.get(t))
  if (i.call(s, a)) return l(e.get(a))
  e !== s && e.get(t)
}
function us(e, t = !1) {
  const n = this.__v_raw,
    r = De(n),
    s = De(e)
  return (
    t || (Ln(e, s) && Mt(r, "has", e), Mt(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function cs(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Mt(De(e), "iterate", Vn), Reflect.get(e, "size", e)
  )
}
function go(e) {
  e = De(e)
  const t = De(this)
  return Hs(t).has.call(t, e) || (t.add(e), un(t, "add", e, e)), this
}
function vo(e, t) {
  t = De(t)
  const n = De(this),
    { has: r, get: s } = Hs(n)
  let a = r.call(n, e)
  a || ((e = De(e)), (a = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), a ? Ln(t, i) && un(n, "set", e, t) : un(n, "add", e, t), this
  )
}
function mo(e) {
  const t = De(this),
    { has: n, get: r } = Hs(t)
  let s = n.call(t, e)
  s || ((e = De(e)), (s = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return s && un(t, "delete", e, void 0), a
}
function bo() {
  const e = De(this),
    t = e.size !== 0,
    n = e.clear()
  return t && un(e, "clear", void 0, void 0), n
}
function ds(e, t) {
  return function (r, s) {
    const a = this,
      i = a.__v_raw,
      l = De(i),
      o = t ? _i : e ? Pi : Hr
    return (
      !e && Mt(l, "iterate", Vn), i.forEach((f, c) => r.call(s, o(f), o(c), a))
    )
  }
}
function fs(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      a = De(s),
      i = hr(a),
      l = e === "entries" || (e === Symbol.iterator && i),
      o = e === "keys" && i,
      f = s[e](...r),
      c = n ? _i : t ? Pi : Hr
    return (
      !t && Mt(a, "iterate", o ? Za : Vn),
      {
        next() {
          const { value: p, done: v } = f.next()
          return v
            ? { value: p, done: v }
            : { value: l ? [c(p[0]), c(p[1])] : c(p), done: v }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function En(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function b0() {
  const e = {
      get(a) {
        return os(this, a)
      },
      get size() {
        return cs(this)
      },
      has: us,
      add: go,
      set: vo,
      delete: mo,
      clear: bo,
      forEach: ds(!1, !1),
    },
    t = {
      get(a) {
        return os(this, a, !1, !0)
      },
      get size() {
        return cs(this)
      },
      has: us,
      add: go,
      set: vo,
      delete: mo,
      clear: bo,
      forEach: ds(!1, !0),
    },
    n = {
      get(a) {
        return os(this, a, !0)
      },
      get size() {
        return cs(this, !0)
      },
      has(a) {
        return us.call(this, a, !0)
      },
      add: En("add"),
      set: En("set"),
      delete: En("delete"),
      clear: En("clear"),
      forEach: ds(!0, !1),
    },
    r = {
      get(a) {
        return os(this, a, !0, !0)
      },
      get size() {
        return cs(this, !0)
      },
      has(a) {
        return us.call(this, a, !0)
      },
      add: En("add"),
      set: En("set"),
      delete: En("delete"),
      clear: En("clear"),
      forEach: ds(!0, !0),
    }
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      ;(e[a] = fs(a, !1, !1)),
        (n[a] = fs(a, !0, !1)),
        (t[a] = fs(a, !1, !0)),
        (r[a] = fs(a, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [y0, w0, x0, S0] = b0()
function Ci(e, t) {
  const n = t ? (e ? S0 : x0) : e ? w0 : y0
  return (r, s, a) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Be(n, s) && s in r ? n : r, s, a)
}
const E0 = { get: Ci(!1, !1) },
  _0 = { get: Ci(!1, !0) },
  C0 = { get: Ci(!0, !1) },
  Nu = new WeakMap(),
  Ru = new WeakMap(),
  Bu = new WeakMap(),
  T0 = new WeakMap()
function P0(e) {
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
function k0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : P0(Jh(e))
}
function Kr(e) {
  return yr(e) ? e : Ti(e, !1, g0, E0, Nu)
}
function zu(e) {
  return Ti(e, !1, m0, _0, Ru)
}
function Fu(e) {
  return Ti(e, !0, v0, C0, Bu)
}
function Ti(e, t, n, r, s) {
  if (!tt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const a = s.get(e)
  if (a) return a
  const i = k0(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? r : n)
  return s.set(e, l), l
}
function gr(e) {
  return yr(e) ? gr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function yr(e) {
  return !!(e && e.__v_isReadonly)
}
function Ps(e) {
  return !!(e && e.__v_isShallow)
}
function ju(e) {
  return gr(e) || yr(e)
}
function De(e) {
  const t = e && e.__v_raw
  return t ? De(t) : e
}
function Du(e) {
  return Ts(e, "__v_skip", !0), e
}
const Hr = (e) => (tt(e) ? Kr(e) : e),
  Pi = (e) => (tt(e) ? Fu(e) : e)
class Hu {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new xi(
        () => t(this._value),
        () => ws(this, 1),
        () => this.dep && $u(this.dep),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = De(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        Ln(t._value, (t._value = t.effect.run())) &&
        ws(t, 2),
      Gu(t),
      t.effect._dirtyLevel >= 1 && ws(t, 1),
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
function M0(e, t, n = !1) {
  let r, s
  const a = Te(e)
  return (
    a ? ((r = e), (s = jt)) : ((r = e.get), (s = e.set)),
    new Hu(r, s, a || !s, n)
  )
}
function Gu(e) {
  On &&
    Gn &&
    ((e = De(e)),
    ku(
      Gn,
      e.dep ||
        (e.dep = Iu(() => (e.dep = void 0), e instanceof Hu ? e : void 0)),
    ))
}
function ws(e, t = 2, n) {
  e = De(e)
  const r = e.dep
  r && Mu(r, t)
}
function St(e) {
  return !!(e && e.__v_isRef === !0)
}
function be(e) {
  return Vu(e, !1)
}
function $0(e) {
  return Vu(e, !0)
}
function Vu(e, t) {
  return St(e) ? e : new I0(e, t)
}
class I0 {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : De(t)),
      (this._value = n ? t : Hr(t))
  }
  get value() {
    return Gu(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Ps(t) || yr(t)
    ;(t = n ? t : De(t)),
      Ln(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Hr(t)), ws(this, 2))
  }
}
function pe(e) {
  return St(e) ? e.value : e
}
const O0 = {
  get: (e, t, n) => pe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return St(s) && !St(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function Wu(e) {
  return gr(e) ? e : new Proxy(e, O0)
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function An(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (a) {
    Gs(a, t, n)
  }
  return s
}
function Ut(e, t, n, r) {
  if (Te(e)) {
    const a = An(e, t, n, r)
    return (
      a &&
        wu(a) &&
        a.catch((i) => {
          Gs(i, t, n)
        }),
      a
    )
  }
  const s = []
  for (let a = 0; a < e.length; a++) s.push(Ut(e[a], t, n, r))
  return s
}
function Gs(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let a = t.parent
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; a; ) {
      const f = a.ec
      if (f) {
        for (let c = 0; c < f.length; c++) if (f[c](e, i, l) === !1) return
      }
      a = a.parent
    }
    const o = t.appContext.config.errorHandler
    if (o) {
      An(o, null, 10, [e, i, l])
      return
    }
  }
  A0(e, n, s, r)
}
function A0(e, t, n, r = !0) {
  console.error(e)
}
let Gr = !1,
  Ja = !1
const wt = []
let Jt = 0
const vr = []
let Tn = null,
  Dn = 0
const qu = Promise.resolve()
let ki = null
function Mi(e) {
  const t = ki || qu
  return e ? t.then(this ? e.bind(this) : e) : t
}
function L0(e) {
  let t = Jt + 1,
    n = wt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = wt[r],
      a = Vr(s)
    a < e || (a === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function $i(e) {
  ;(!wt.length || !wt.includes(e, Gr && e.allowRecurse ? Jt + 1 : Jt)) &&
    (e.id == null ? wt.push(e) : wt.splice(L0(e.id), 0, e), Uu())
}
function Uu() {
  !Gr && !Ja && ((Ja = !0), (ki = qu.then(Ku)))
}
function N0(e) {
  const t = wt.indexOf(e)
  t > Jt && wt.splice(t, 1)
}
function R0(e) {
  _e(e)
    ? vr.push(...e)
    : (!Tn || !Tn.includes(e, e.allowRecurse ? Dn + 1 : Dn)) && vr.push(e),
    Uu()
}
function yo(e, t, n = Gr ? Jt + 1 : 0) {
  for (; n < wt.length; n++) {
    const r = wt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      wt.splice(n, 1), n--, r()
    }
  }
}
function Yu(e) {
  if (vr.length) {
    const t = [...new Set(vr)].sort((n, r) => Vr(n) - Vr(r))
    if (((vr.length = 0), Tn)) {
      Tn.push(...t)
      return
    }
    for (Tn = t, Dn = 0; Dn < Tn.length; Dn++) Tn[Dn]()
    ;(Tn = null), (Dn = 0)
  }
}
const Vr = (e) => (e.id == null ? 1 / 0 : e.id),
  B0 = (e, t) => {
    const n = Vr(e) - Vr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Ku(e) {
  ;(Ja = !1), (Gr = !0), wt.sort(B0)
  try {
    for (Jt = 0; Jt < wt.length; Jt++) {
      const t = wt[Jt]
      t && t.active !== !1 && An(t, null, 14)
    }
  } finally {
    ;(Jt = 0),
      (wt.length = 0),
      Yu(),
      (Gr = !1),
      (ki = null),
      (wt.length || vr.length) && Ku()
  }
}
function z0(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || Je
  let s = n
  const a = t.startsWith("update:"),
    i = a && t.slice(7)
  if (i && i in r) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: v } = r[c] || Je
    v && (s = n.map((m) => (ut(m) ? m.trim() : m))), p && (s = n.map(Ua))
  }
  let l,
    o = r[(l = Pa(t))] || r[(l = Pa(tn(t)))]
  !o && a && (o = r[(l = Pa(Cr(t)))]), o && Ut(o, e, 6, s)
  const f = r[l + "Once"]
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Ut(f, e, 6, s)
  }
}
function Xu(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const a = e.emits
  let i = {},
    l = !1
  if (!Te(e)) {
    const o = (f) => {
      const c = Xu(f, t, !0)
      c && ((l = !0), yt(i, c))
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  return !a && !l
    ? (tt(e) && r.set(e, null), null)
    : (_e(a) ? a.forEach((o) => (i[o] = null)) : yt(i, a),
      tt(e) && r.set(e, i),
      i)
}
function Vs(e, t) {
  return !e || !Bs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Be(e, t[0].toLowerCase() + t.slice(1)) || Be(e, Cr(t)) || Be(e, t))
}
let kt = null,
  Ws = null
function ks(e) {
  const t = kt
  return (kt = e), (Ws = (e && e.type.__scopeId) || null), t
}
function Ii(e) {
  Ws = e
}
function Oi() {
  Ws = null
}
function Ke(e, t = kt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && $o(-1)
    const a = ks(t)
    let i
    try {
      i = e(...s)
    } finally {
      ks(a), r._d && $o(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Ma(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: a,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: f,
    render: c,
    renderCache: p,
    data: v,
    setupState: m,
    ctx: k,
    inheritAttrs: g,
  } = e
  let E, T
  const w = ks(e)
  try {
    if (n.shapeFlag & 4) {
      const $ = s || r,
        L = $
      ;(E = Zt(c.call(L, $, p, a, m, v, k))), (T = o)
    } else {
      const $ = t
      ;(E = Zt(
        $.length > 1 ? $(a, { attrs: o, slots: l, emit: f }) : $(a, null),
      )),
        (T = t.props ? o : F0(o))
    }
  } catch ($) {
    ;(Fr.length = 0), Gs($, e, 1), (E = oe(qn))
  }
  let y = E
  if (T && g !== !1) {
    const $ = Object.keys(T),
      { shapeFlag: L } = y
    $.length && L & 7 && (i && $.some(bi) && (T = j0(T, i)), (y = Un(y, T)))
  }
  return (
    n.dirs && ((y = Un(y)), (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (y.transition = n.transition),
    (E = y),
    ks(w),
    E
  )
}
const F0 = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || Bs(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  j0 = (e, t) => {
    const n = {}
    for (const r in e) (!bi(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function D0(e, t, n) {
  const { props: r, children: s, component: a } = e,
    { props: i, children: l, patchFlag: o } = t,
    f = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return r ? wo(r, i, f) : !!i
    if (o & 8) {
      const c = t.dynamicProps
      for (let p = 0; p < c.length; p++) {
        const v = c[p]
        if (i[v] !== r[v] && !Vs(f, v)) return !0
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
        ? !1
        : r
          ? i
            ? wo(r, i, f)
            : !0
          : !!i
  return !1
}
function wo(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const a = r[s]
    if (t[a] !== e[a] && !Vs(n, a)) return !0
  }
  return !1
}
function H0({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ai = "components",
  G0 = "directives"
function V0(e, t) {
  return Li(Ai, e, !0, t) || e
}
const Zu = Symbol.for("v-ndc")
function W0(e) {
  return ut(e) ? Li(Ai, e, !1) || e : e || Zu
}
function q0(e) {
  return Li(G0, e)
}
function Li(e, t, n = !0, r = !1) {
  const s = kt || xt
  if (s) {
    const a = s.type
    if (e === Ai) {
      const l = Rg(a, !1)
      if (l && (l === t || l === tn(t) || l === js(tn(t)))) return a
    }
    const i = xo(s[e] || a[e], t) || xo(s.appContext[e], t)
    return !i && r ? a : i
  }
}
function xo(e, t) {
  return e && (e[t] || e[tn(t)] || e[js(tn(t))])
}
const U0 = (e) => e.__isSuspense
function Y0(e, t) {
  t && t.pendingBranch
    ? _e(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : R0(e)
}
const K0 = Symbol.for("v-scx"),
  X0 = () => bt(K0)
function dn(e, t) {
  return Ni(e, null, t)
}
const ps = {}
function en(e, t, n) {
  return Ni(e, t, n)
}
function Ni(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: a, onTrack: i, onTrigger: l } = Je,
) {
  if (t && a) {
    const I = t
    t = (...ne) => {
      I(...ne), L()
    }
  }
  const o = xt,
    f = (I) => (r === !0 ? I : Hn(I, r === !1 ? 1 : void 0))
  let c,
    p = !1,
    v = !1
  if (
    (St(e)
      ? ((c = () => e.value), (p = Ps(e)))
      : gr(e)
        ? ((c = () => f(e)), (p = !0))
        : _e(e)
          ? ((v = !0),
            (p = e.some((I) => gr(I) || Ps(I))),
            (c = () =>
              e.map((I) => {
                if (St(I)) return I.value
                if (gr(I)) return f(I)
                if (Te(I)) return An(I, o, 2)
              })))
          : Te(e)
            ? t
              ? (c = () => An(e, o, 2))
              : (c = () => (m && m(), Ut(e, o, 3, [k])))
            : (c = jt),
    t && r)
  ) {
    const I = c
    c = () => Hn(I())
  }
  let m,
    k = (I) => {
      m = y.onStop = () => {
        An(I, o, 4), (m = y.onStop = void 0)
      }
    },
    g
  if (Ks)
    if (
      ((k = jt),
      t ? n && Ut(t, o, 3, [c(), v ? [] : void 0, k]) : c(),
      s === "sync")
    ) {
      const I = X0()
      g = I.__watcherHandles || (I.__watcherHandles = [])
    } else return jt
  let E = v ? new Array(e.length).fill(ps) : ps
  const T = () => {
    if (!(!y.active || !y.dirty))
      if (t) {
        const I = y.run()
        ;(r || p || (v ? I.some((ne, q) => Ln(ne, E[q])) : Ln(I, E))) &&
          (m && m(),
          Ut(t, o, 3, [I, E === ps ? void 0 : v && E[0] === ps ? [] : E, k]),
          (E = I))
      } else y.run()
  }
  T.allowRecurse = !!t
  let w
  s === "sync"
    ? (w = T)
    : s === "post"
      ? (w = () => Pt(T, o && o.suspense))
      : ((T.pre = !0), o && (T.id = o.uid), (w = () => $i(T)))
  const y = new xi(c, jt, w),
    $ = u0(),
    L = () => {
      y.stop(), $ && yi($.effects, y)
    }
  return (
    t
      ? n
        ? T()
        : (E = y.run())
      : s === "post"
        ? Pt(y.run.bind(y), o && o.suspense)
        : y.run(),
    g && g.push(L),
    L
  )
}
function Z0(e, t, n) {
  const r = this.proxy,
    s = ut(e) ? (e.includes(".") ? Ju(r, e) : () => r[e]) : e.bind(r, r)
  let a
  Te(t) ? (a = t) : ((a = t.handler), (n = t))
  const i = Xr(this),
    l = Ni(s, a.bind(r), n)
  return i(), l
}
function Ju(e, t) {
  const n = t.split(".")
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function Hn(e, t, n = 0, r) {
  if (!tt(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((r = r || new Set()), r.has(e))) return e
  if ((r.add(e), St(e))) Hn(e.value, t, n, r)
  else if (_e(e)) for (let s = 0; s < e.length; s++) Hn(e[s], t, n, r)
  else if (yu(e) || hr(e))
    e.forEach((s) => {
      Hn(s, t, n, r)
    })
  else if (Su(e)) for (const s in e) Hn(e[s], t, n, r)
  return e
}
function Qu(e, t) {
  if (kt === null) return e
  const n = Xs(kt) || kt.proxy,
    r = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [a, i, l, o = Je] = t[s]
    a &&
      (Te(a) && (a = { mounted: a, updated: a }),
      a.deep && Hn(i),
      r.push({
        dir: a,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: o,
      }))
  }
  return e
}
function Fn(e, t, n, r) {
  const s = e.dirs,
    a = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const l = s[i]
    a && (l.oldValue = a[i].value)
    let o = l.dir[r]
    o && (Kn(), Ut(o, n, 8, [e.el, l, e, t]), Xn())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Bt(e, t) {
  return Te(e) ? yt({ name: e.name }, t, { setup: e }) : e
}
const xs = (e) => !!e.type.__asyncLoader,
  ec = (e) => e.type.__isKeepAlive
function J0(e, t) {
  tc(e, "a", t)
}
function Q0(e, t) {
  tc(e, "da", t)
}
function tc(e, t, n = xt) {
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
  if ((qs(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) ec(s.parent.vnode) && eg(r, t, n, s), (s = s.parent)
  }
}
function eg(e, t, n, r) {
  const s = qs(t, e, r, !0)
  Nn(() => {
    yi(r[t], s)
  }, n)
}
function qs(e, t, n = xt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          Kn()
          const l = Xr(n),
            o = Ut(t, n, e, i)
          return l(), Xn(), o
        })
    return r ? s.unshift(a) : s.push(a), a
  }
}
const fn =
    (e) =>
    (t, n = xt) =>
      (!Ks || e === "sp") && qs(e, (...r) => t(...r), n),
  tg = fn("bm"),
  gt = fn("m"),
  Ri = fn("bu"),
  Bi = fn("u"),
  zi = fn("bum"),
  Nn = fn("um"),
  ng = fn("sp"),
  rg = fn("rtg"),
  sg = fn("rtc")
function ag(e, t = xt) {
  qs("ec", e, t)
}
function mr(e, t, n, r) {
  let s
  const a = n && n[r]
  if (_e(e) || ut(e)) {
    s = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, a && a[i])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, a && a[i])
  } else if (tt(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, l) => t(i, l, void 0, a && a[l]))
    else {
      const i = Object.keys(e)
      s = new Array(i.length)
      for (let l = 0, o = i.length; l < o; l++) {
        const f = i[l]
        s[l] = t(e[f], f, l, a && a[l])
      }
    }
  else s = []
  return n && (n[r] = s), s
}
const Qa = (e) => (e ? (pc(e) ? Xs(e) || e.proxy : Qa(e.parent)) : null),
  zr = yt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Qa(e.parent),
    $root: (e) => Qa(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), $i(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Mi.bind(e.proxy)),
    $watch: (e) => Z0.bind(e),
  }),
  $a = (e, t) => e !== Je && !e.__isScriptSetup && Be(e, t),
  ig = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: a,
        accessCache: i,
        type: l,
        appContext: o,
      } = e
      let f
      if (t[0] !== "$") {
        const m = i[t]
        if (m !== void 0)
          switch (m) {
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
          if ($a(r, t)) return (i[t] = 1), r[t]
          if (s !== Je && Be(s, t)) return (i[t] = 2), s[t]
          if ((f = e.propsOptions[0]) && Be(f, t)) return (i[t] = 3), a[t]
          if (n !== Je && Be(n, t)) return (i[t] = 4), n[t]
          ei && (i[t] = 0)
        }
      }
      const c = zr[t]
      let p, v
      if (c) return t === "$attrs" && Mt(e, "get", t), c(e)
      if ((p = l.__cssModules) && (p = p[t])) return p
      if (n !== Je && Be(n, t)) return (i[t] = 4), n[t]
      if (((v = o.config.globalProperties), Be(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: a } = e
      return $a(s, t)
        ? ((s[t] = n), !0)
        : r !== Je && Be(r, t)
          ? ((r[t] = n), !0)
          : Be(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
      let l
      return (
        !!n[i] ||
        (e !== Je && Be(e, i)) ||
        $a(t, i) ||
        ((l = a[0]) && Be(l, i)) ||
        Be(r, i) ||
        Be(zr, i) ||
        Be(s.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Be(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function So(e) {
  return _e(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ei = !0
function lg(e) {
  const t = Fi(e),
    n = e.proxy,
    r = e.ctx
  ;(ei = !1), t.beforeCreate && Eo(t.beforeCreate, e, "bc")
  const {
    data: s,
    computed: a,
    methods: i,
    watch: l,
    provide: o,
    inject: f,
    created: c,
    beforeMount: p,
    mounted: v,
    beforeUpdate: m,
    updated: k,
    activated: g,
    deactivated: E,
    beforeDestroy: T,
    beforeUnmount: w,
    destroyed: y,
    unmounted: $,
    render: L,
    renderTracked: I,
    renderTriggered: ne,
    errorCaptured: q,
    serverPrefetch: G,
    expose: D,
    inheritAttrs: Q,
    components: ge,
    directives: X,
    filters: xe,
  } = t
  if ((f && og(f, r, null), i))
    for (const ie in i) {
      const V = i[ie]
      Te(V) && (r[ie] = V.bind(n))
    }
  if (s) {
    const ie = s.call(n, n)
    tt(ie) && (e.data = Kr(ie))
  }
  if (((ei = !0), a))
    for (const ie in a) {
      const V = a[ie],
        Ue = Te(V) ? V.bind(n, n) : Te(V.get) ? V.get.bind(n, n) : jt,
        Pe = !Te(V) && Te(V.set) ? V.set.bind(n) : jt,
        Qe = me({ get: Ue, set: Pe })
      Object.defineProperty(r, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (et) => (Qe.value = et),
      })
    }
  if (l) for (const ie in l) nc(l[ie], r, n, ie)
  if (o) {
    const ie = Te(o) ? o.call(n) : o
    Reflect.ownKeys(ie).forEach((V) => {
      Dt(V, ie[V])
    })
  }
  c && Eo(c, e, "c")
  function j(ie, V) {
    _e(V) ? V.forEach((Ue) => ie(Ue.bind(n))) : V && ie(V.bind(n))
  }
  if (
    (j(tg, p),
    j(gt, v),
    j(Ri, m),
    j(Bi, k),
    j(J0, g),
    j(Q0, E),
    j(ag, q),
    j(sg, I),
    j(rg, ne),
    j(zi, w),
    j(Nn, $),
    j(ng, G),
    _e(D))
  )
    if (D.length) {
      const ie = e.exposed || (e.exposed = {})
      D.forEach((V) => {
        Object.defineProperty(ie, V, {
          get: () => n[V],
          set: (Ue) => (n[V] = Ue),
        })
      })
    } else e.exposed || (e.exposed = {})
  L && e.render === jt && (e.render = L),
    Q != null && (e.inheritAttrs = Q),
    ge && (e.components = ge),
    X && (e.directives = X)
}
function og(e, t, n = jt) {
  _e(e) && (e = ti(e))
  for (const r in e) {
    const s = e[r]
    let a
    tt(s)
      ? "default" in s
        ? (a = bt(s.from || r, s.default, !0))
        : (a = bt(s.from || r))
      : (a = bt(s)),
      St(a)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (i) => (a.value = i),
          })
        : (t[r] = a)
  }
}
function Eo(e, t, n) {
  Ut(_e(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function nc(e, t, n, r) {
  const s = r.includes(".") ? Ju(n, r) : () => n[r]
  if (ut(e)) {
    const a = t[e]
    Te(a) && en(s, a)
  } else if (Te(e)) en(s, e.bind(n))
  else if (tt(e))
    if (_e(e)) e.forEach((a) => nc(a, t, n, r))
    else {
      const a = Te(e.handler) ? e.handler.bind(n) : t[e.handler]
      Te(a) && en(s, a, e)
    }
}
function Fi(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: a,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = a.get(t)
  let o
  return (
    l
      ? (o = l)
      : !s.length && !n && !r
        ? (o = t)
        : ((o = {}),
          s.length && s.forEach((f) => Ms(o, f, i, !0)),
          Ms(o, t, i)),
    tt(t) && a.set(t, o),
    o
  )
}
function Ms(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t
  a && Ms(e, a, n, !0), s && s.forEach((i) => Ms(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = ug[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const ug = {
  data: _o,
  props: Co,
  emits: Co,
  methods: Br,
  computed: Br,
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
  components: Br,
  directives: Br,
  watch: dg,
  provide: _o,
  inject: cg,
}
function _o(e, t) {
  return t
    ? e
      ? function () {
          return yt(
            Te(e) ? e.call(this, this) : e,
            Te(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function cg(e, t) {
  return Br(ti(e), ti(t))
}
function ti(e) {
  if (_e(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function _t(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Br(e, t) {
  return e ? yt(Object.create(null), e, t) : t
}
function Co(e, t) {
  return e
    ? _e(e) && _e(t)
      ? [...new Set([...e, ...t])]
      : yt(Object.create(null), So(e), So(t ?? {}))
    : t
}
function dg(e, t) {
  if (!e) return t
  if (!t) return e
  const n = yt(Object.create(null), e)
  for (const r in t) n[r] = _t(e[r], t[r])
  return n
}
function rc() {
  return {
    app: null,
    config: {
      isNativeTag: Xh,
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
let fg = 0
function pg(e, t) {
  return function (r, s = null) {
    Te(r) || (r = yt({}, r)), s != null && !tt(s) && (s = null)
    const a = rc(),
      i = new WeakSet()
    let l = !1
    const o = (a.app = {
      _uid: fg++,
      _component: r,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: zg,
      get config() {
        return a.config
      },
      set config(f) {},
      use(f, ...c) {
        return (
          i.has(f) ||
            (f && Te(f.install)
              ? (i.add(f), f.install(o, ...c))
              : Te(f) && (i.add(f), f(o, ...c))),
          o
        )
      },
      mixin(f) {
        return a.mixins.includes(f) || a.mixins.push(f), o
      },
      component(f, c) {
        return c ? ((a.components[f] = c), o) : a.components[f]
      },
      directive(f, c) {
        return c ? ((a.directives[f] = c), o) : a.directives[f]
      },
      mount(f, c, p) {
        if (!l) {
          const v = oe(r, s)
          return (
            (v.appContext = a),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            c && t ? t(v, f) : e(v, f, p),
            (l = !0),
            (o._container = f),
            (f.__vue_app__ = o),
            Xs(v.component) || v.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, o._container), delete o._container.__vue_app__)
      },
      provide(f, c) {
        return (a.provides[f] = c), o
      },
      runWithContext(f) {
        $s = o
        try {
          return f()
        } finally {
          $s = null
        }
      },
    })
    return o
  }
}
let $s = null
function Dt(e, t) {
  if (xt) {
    let n = xt.provides
    const r = xt.parent && xt.parent.provides
    r === n && (n = xt.provides = Object.create(r)), (n[e] = t)
  }
}
function bt(e, t, n = !1) {
  const r = xt || kt
  if (r || $s) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : $s._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && Te(t) ? t.call(r && r.proxy) : t
  }
}
function hg(e, t, n, r = !1) {
  const s = {},
    a = {}
  Ts(a, Ys, 1), (e.propsDefaults = Object.create(null)), sc(e, t, s, a)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : zu(s)) : e.type.props ? (e.props = s) : (e.props = a),
    (e.attrs = a)
}
function gg(e, t, n, r) {
  const {
      props: s,
      attrs: a,
      vnode: { patchFlag: i },
    } = e,
    l = De(s),
    [o] = e.propsOptions
  let f = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps
      for (let p = 0; p < c.length; p++) {
        let v = c[p]
        if (Vs(e.emitsOptions, v)) continue
        const m = t[v]
        if (o)
          if (Be(a, v)) m !== a[v] && ((a[v] = m), (f = !0))
          else {
            const k = tn(v)
            s[k] = ni(o, l, k, m, e, !1)
          }
        else m !== a[v] && ((a[v] = m), (f = !0))
      }
    }
  } else {
    sc(e, t, s, a) && (f = !0)
    let c
    for (const p in l)
      (!t || (!Be(t, p) && ((c = Cr(p)) === p || !Be(t, c)))) &&
        (o
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (s[p] = ni(o, l, p, void 0, e, !0))
          : delete s[p])
    if (a !== l) for (const p in a) (!t || !Be(t, p)) && (delete a[p], (f = !0))
  }
  f && un(e, "set", "$attrs")
}
function sc(e, t, n, r) {
  const [s, a] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let o in t) {
      if (bs(o)) continue
      const f = t[o]
      let c
      s && Be(s, (c = tn(o)))
        ? !a || !a.includes(c)
          ? (n[c] = f)
          : ((l || (l = {}))[c] = f)
        : Vs(e.emitsOptions, o) ||
          ((!(o in r) || f !== r[o]) && ((r[o] = f), (i = !0)))
    }
  if (a) {
    const o = De(n),
      f = l || Je
    for (let c = 0; c < a.length; c++) {
      const p = a[c]
      n[p] = ni(s, o, p, f[p], e, !Be(f, p))
    }
  }
  return i
}
function ni(e, t, n, r, s, a) {
  const i = e[n]
  if (i != null) {
    const l = Be(i, "default")
    if (l && r === void 0) {
      const o = i.default
      if (i.type !== Function && !i.skipFactory && Te(o)) {
        const { propsDefaults: f } = s
        if (n in f) r = f[n]
        else {
          const c = Xr(s)
          ;(r = f[n] = o.call(null, t)), c()
        }
      } else r = o
    }
    i[0] && (a && !l ? (r = !1) : i[1] && (r === "" || r === Cr(n)) && (r = !0))
  }
  return r
}
function ac(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const a = e.props,
    i = {},
    l = []
  let o = !1
  if (!Te(e)) {
    const c = (p) => {
      o = !0
      const [v, m] = ac(p, t, !0)
      yt(i, v), m && l.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!a && !o) return tt(e) && r.set(e, pr), pr
  if (_e(a))
    for (let c = 0; c < a.length; c++) {
      const p = tn(a[c])
      To(p) && (i[p] = Je)
    }
  else if (a)
    for (const c in a) {
      const p = tn(c)
      if (To(p)) {
        const v = a[c],
          m = (i[p] = _e(v) || Te(v) ? { type: v } : yt({}, v))
        if (m) {
          const k = Mo(Boolean, m.type),
            g = Mo(String, m.type)
          ;(m[0] = k > -1),
            (m[1] = g < 0 || k < g),
            (k > -1 || Be(m, "default")) && l.push(p)
        }
      }
    }
  const f = [i, l]
  return tt(e) && r.set(e, f), f
}
function To(e) {
  return e[0] !== "$"
}
function Po(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function ko(e, t) {
  return Po(e) === Po(t)
}
function Mo(e, t) {
  return _e(t) ? t.findIndex((n) => ko(n, e)) : Te(t) && ko(t, e) ? 0 : -1
}
const ic = (e) => e[0] === "_" || e === "$stable",
  ji = (e) => (_e(e) ? e.map(Zt) : [Zt(e)]),
  vg = (e, t, n) => {
    if (t._n) return t
    const r = Ke((...s) => ji(t(...s)), n)
    return (r._c = !1), r
  },
  lc = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (ic(s)) continue
      const a = e[s]
      if (Te(a)) t[s] = vg(s, a, r)
      else if (a != null) {
        const i = ji(a)
        t[s] = () => i
      }
    }
  },
  oc = (e, t) => {
    const n = ji(t)
    e.slots.default = () => n
  },
  mg = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = De(t)), Ts(t, "_", n)) : lc(t, (e.slots = {}))
    } else (e.slots = {}), t && oc(e, t)
    Ts(e.slots, Ys, 1)
  },
  bg = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let a = !0,
      i = Je
    if (r.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (a = !1)
          : (yt(s, t), !n && l === 1 && delete s._)
        : ((a = !t.$stable), lc(t, s)),
        (i = t)
    } else t && (oc(e, t), (i = { default: 1 }))
    if (a) for (const l in s) !ic(l) && i[l] == null && delete s[l]
  }
function ri(e, t, n, r, s = !1) {
  if (_e(e)) {
    e.forEach((v, m) => ri(v, t && (_e(t) ? t[m] : t), n, r, s))
    return
  }
  if (xs(r) && !s) return
  const a = r.shapeFlag & 4 ? Xs(r.component) || r.component.proxy : r.el,
    i = s ? null : a,
    { i: l, r: o } = e,
    f = t && t.r,
    c = l.refs === Je ? (l.refs = {}) : l.refs,
    p = l.setupState
  if (
    (f != null &&
      f !== o &&
      (ut(f)
        ? ((c[f] = null), Be(p, f) && (p[f] = null))
        : St(f) && (f.value = null)),
    Te(o))
  )
    An(o, l, 12, [i, c])
  else {
    const v = ut(o),
      m = St(o),
      k = e.f
    if (v || m) {
      const g = () => {
        if (k) {
          const E = v ? (Be(p, o) ? p[o] : c[o]) : o.value
          s
            ? _e(E) && yi(E, a)
            : _e(E)
              ? E.includes(a) || E.push(a)
              : v
                ? ((c[o] = [a]), Be(p, o) && (p[o] = c[o]))
                : ((o.value = [a]), e.k && (c[e.k] = o.value))
        } else
          v
            ? ((c[o] = i), Be(p, o) && (p[o] = i))
            : m && ((o.value = i), e.k && (c[e.k] = i))
      }
      s || k ? g() : ((g.id = -1), Pt(g, n))
    }
  }
}
const Pt = Y0
function yg(e) {
  return wg(e)
}
function wg(e, t) {
  const n = Eu()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: a,
      createElement: i,
      createText: l,
      createComment: o,
      setText: f,
      setElementText: c,
      parentNode: p,
      nextSibling: v,
      setScopeId: m = jt,
      insertStaticContent: k,
    } = e,
    g = (
      x,
      C,
      R,
      H = null,
      F = null,
      J = null,
      re = void 0,
      Z = null,
      ee = !!C.dynamicChildren,
    ) => {
      if (x === C) return
      x && !Ar(x, C) && ((H = z(x)), et(x, F, J, !0), (x = null)),
        C.patchFlag === -2 && ((ee = !1), (C.dynamicChildren = null))
      const { type: U, ref: le, shapeFlag: ye } = C
      switch (U) {
        case Us:
          E(x, C, R, H)
          break
        case qn:
          T(x, C, R, H)
          break
        case Ss:
          x == null && w(C, R, H, re)
          break
        case nt:
          ge(x, C, R, H, F, J, re, Z, ee)
          break
        default:
          ye & 1
            ? L(x, C, R, H, F, J, re, Z, ee)
            : ye & 6
              ? X(x, C, R, H, F, J, re, Z, ee)
              : (ye & 64 || ye & 128) &&
                U.process(x, C, R, H, F, J, re, Z, ee, fe)
      }
      le != null && F && ri(le, x && x.ref, J, C || x, !C)
    },
    E = (x, C, R, H) => {
      if (x == null) r((C.el = l(C.children)), R, H)
      else {
        const F = (C.el = x.el)
        C.children !== x.children && f(F, C.children)
      }
    },
    T = (x, C, R, H) => {
      x == null ? r((C.el = o(C.children || "")), R, H) : (C.el = x.el)
    },
    w = (x, C, R, H) => {
      ;[x.el, x.anchor] = k(x.children, C, R, H, x.el, x.anchor)
    },
    y = ({ el: x, anchor: C }, R, H) => {
      let F
      for (; x && x !== C; ) (F = v(x)), r(x, R, H), (x = F)
      r(C, R, H)
    },
    $ = ({ el: x, anchor: C }) => {
      let R
      for (; x && x !== C; ) (R = v(x)), s(x), (x = R)
      s(C)
    },
    L = (x, C, R, H, F, J, re, Z, ee) => {
      C.type === "svg" ? (re = "svg") : C.type === "math" && (re = "mathml"),
        x == null ? I(C, R, H, F, J, re, Z, ee) : G(x, C, F, J, re, Z, ee)
    },
    I = (x, C, R, H, F, J, re, Z) => {
      let ee, U
      const { props: le, shapeFlag: ye, transition: ve, dirs: Se } = x
      if (
        ((ee = x.el = i(x.type, J, le && le.is, le)),
        ye & 8
          ? c(ee, x.children)
          : ye & 16 && q(x.children, ee, null, H, F, Ia(x, J), re, Z),
        Se && Fn(x, null, H, "created"),
        ne(ee, x, x.scopeId, re, H),
        le)
      ) {
        for (const Fe in le)
          Fe !== "value" &&
            !bs(Fe) &&
            a(ee, Fe, null, le[Fe], J, x.children, H, F, at)
        "value" in le && a(ee, "value", null, le.value, J),
          (U = le.onVnodeBeforeMount) && Xt(U, H, x)
      }
      Se && Fn(x, null, H, "beforeMount")
      const ke = xg(F, ve)
      ke && ve.beforeEnter(ee),
        r(ee, C, R),
        ((U = le && le.onVnodeMounted) || ke || Se) &&
          Pt(() => {
            U && Xt(U, H, x),
              ke && ve.enter(ee),
              Se && Fn(x, null, H, "mounted")
          }, F)
    },
    ne = (x, C, R, H, F) => {
      if ((R && m(x, R), H)) for (let J = 0; J < H.length; J++) m(x, H[J])
      if (F) {
        let J = F.subTree
        if (C === J) {
          const re = F.vnode
          ne(x, re, re.scopeId, re.slotScopeIds, F.parent)
        }
      }
    },
    q = (x, C, R, H, F, J, re, Z, ee = 0) => {
      for (let U = ee; U < x.length; U++) {
        const le = (x[U] = Z ? Pn(x[U]) : Zt(x[U]))
        g(null, le, C, R, H, F, J, re, Z)
      }
    },
    G = (x, C, R, H, F, J, re) => {
      const Z = (C.el = x.el)
      let { patchFlag: ee, dynamicChildren: U, dirs: le } = C
      ee |= x.patchFlag & 16
      const ye = x.props || Je,
        ve = C.props || Je
      let Se
      if (
        (R && jn(R, !1),
        (Se = ve.onVnodeBeforeUpdate) && Xt(Se, R, C, x),
        le && Fn(C, x, R, "beforeUpdate"),
        R && jn(R, !0),
        U
          ? D(x.dynamicChildren, U, Z, R, H, Ia(C, F), J)
          : re || V(x, C, Z, null, R, H, Ia(C, F), J, !1),
        ee > 0)
      ) {
        if (ee & 16) Q(Z, C, ye, ve, R, H, F)
        else if (
          (ee & 2 && ye.class !== ve.class && a(Z, "class", null, ve.class, F),
          ee & 4 && a(Z, "style", ye.style, ve.style, F),
          ee & 8)
        ) {
          const ke = C.dynamicProps
          for (let Fe = 0; Fe < ke.length; Fe++) {
            const Ye = ke[Fe],
              rt = ye[Ye],
              $t = ve[Ye]
            ;($t !== rt || Ye === "value") &&
              a(Z, Ye, rt, $t, F, x.children, R, H, at)
          }
        }
        ee & 1 && x.children !== C.children && c(Z, C.children)
      } else !re && U == null && Q(Z, C, ye, ve, R, H, F)
      ;((Se = ve.onVnodeUpdated) || le) &&
        Pt(() => {
          Se && Xt(Se, R, C, x), le && Fn(C, x, R, "updated")
        }, H)
    },
    D = (x, C, R, H, F, J, re) => {
      for (let Z = 0; Z < C.length; Z++) {
        const ee = x[Z],
          U = C[Z],
          le =
            ee.el && (ee.type === nt || !Ar(ee, U) || ee.shapeFlag & 70)
              ? p(ee.el)
              : R
        g(ee, U, le, null, H, F, J, re, !0)
      }
    },
    Q = (x, C, R, H, F, J, re) => {
      if (R !== H) {
        if (R !== Je)
          for (const Z in R)
            !bs(Z) && !(Z in H) && a(x, Z, R[Z], null, re, C.children, F, J, at)
        for (const Z in H) {
          if (bs(Z)) continue
          const ee = H[Z],
            U = R[Z]
          ee !== U && Z !== "value" && a(x, Z, U, ee, re, C.children, F, J, at)
        }
        "value" in H && a(x, "value", R.value, H.value, re)
      }
    },
    ge = (x, C, R, H, F, J, re, Z, ee) => {
      const U = (C.el = x ? x.el : l("")),
        le = (C.anchor = x ? x.anchor : l(""))
      let { patchFlag: ye, dynamicChildren: ve, slotScopeIds: Se } = C
      Se && (Z = Z ? Z.concat(Se) : Se),
        x == null
          ? (r(U, R, H),
            r(le, R, H),
            q(C.children || [], R, le, F, J, re, Z, ee))
          : ye > 0 && ye & 64 && ve && x.dynamicChildren
            ? (D(x.dynamicChildren, ve, R, F, J, re, Z),
              (C.key != null || (F && C === F.subTree)) && uc(x, C, !0))
            : V(x, C, R, le, F, J, re, Z, ee)
    },
    X = (x, C, R, H, F, J, re, Z, ee) => {
      ;(C.slotScopeIds = Z),
        x == null
          ? C.shapeFlag & 512
            ? F.ctx.activate(C, R, H, re, ee)
            : xe(C, R, H, F, J, re, ee)
          : Ce(x, C, ee)
    },
    xe = (x, C, R, H, F, J, re) => {
      const Z = (x.component = Ig(x, H, F))
      if ((ec(x) && (Z.ctx.renderer = fe), Og(Z), Z.asyncDep)) {
        if ((F && F.registerDep(Z, j), !x.el)) {
          const ee = (Z.subTree = oe(qn))
          T(null, ee, C, R)
        }
      } else j(Z, x, C, R, F, J, re)
    },
    Ce = (x, C, R) => {
      const H = (C.component = x.component)
      if (D0(x, C, R))
        if (H.asyncDep && !H.asyncResolved) {
          ie(H, C, R)
          return
        } else (H.next = C), N0(H.update), (H.effect.dirty = !0), H.update()
      else (C.el = x.el), (H.vnode = C)
    },
    j = (x, C, R, H, F, J, re) => {
      const Z = () => {
          if (x.isMounted) {
            let { next: le, bu: ye, u: ve, parent: Se, vnode: ke } = x
            {
              const mn = cc(x)
              if (mn) {
                le && ((le.el = ke.el), ie(x, le, re)),
                  mn.asyncDep.then(() => {
                    x.isUnmounted || Z()
                  })
                return
              }
            }
            let Fe = le,
              Ye
            jn(x, !1),
              le ? ((le.el = ke.el), ie(x, le, re)) : (le = ke),
              ye && ys(ye),
              (Ye = le.props && le.props.onVnodeBeforeUpdate) &&
                Xt(Ye, Se, le, ke),
              jn(x, !0)
            const rt = Ma(x),
              $t = x.subTree
            ;(x.subTree = rt),
              g($t, rt, p($t.el), z($t), x, F, J),
              (le.el = rt.el),
              Fe === null && H0(x, rt.el),
              ve && Pt(ve, F),
              (Ye = le.props && le.props.onVnodeUpdated) &&
                Pt(() => Xt(Ye, Se, le, ke), F)
          } else {
            let le
            const { el: ye, props: ve } = C,
              { bm: Se, m: ke, parent: Fe } = x,
              Ye = xs(C)
            if (
              (jn(x, !1),
              Se && ys(Se),
              !Ye && (le = ve && ve.onVnodeBeforeMount) && Xt(le, Fe, C),
              jn(x, !0),
              ye && Xe)
            ) {
              const rt = () => {
                ;(x.subTree = Ma(x)), Xe(ye, x.subTree, x, F, null)
              }
              Ye
                ? C.type.__asyncLoader().then(() => !x.isUnmounted && rt())
                : rt()
            } else {
              const rt = (x.subTree = Ma(x))
              g(null, rt, R, H, x, F, J), (C.el = rt.el)
            }
            if ((ke && Pt(ke, F), !Ye && (le = ve && ve.onVnodeMounted))) {
              const rt = C
              Pt(() => Xt(le, Fe, rt), F)
            }
            ;(C.shapeFlag & 256 ||
              (Fe && xs(Fe.vnode) && Fe.vnode.shapeFlag & 256)) &&
              x.a &&
              Pt(x.a, F),
              (x.isMounted = !0),
              (C = R = H = null)
          }
        },
        ee = (x.effect = new xi(Z, jt, () => $i(U), x.scope)),
        U = (x.update = () => {
          ee.dirty && ee.run()
        })
      ;(U.id = x.uid), jn(x, !0), U()
    },
    ie = (x, C, R) => {
      C.component = x
      const H = x.vnode.props
      ;(x.vnode = C),
        (x.next = null),
        gg(x, C.props, H, R),
        bg(x, C.children, R),
        Kn(),
        yo(x),
        Xn()
    },
    V = (x, C, R, H, F, J, re, Z, ee = !1) => {
      const U = x && x.children,
        le = x ? x.shapeFlag : 0,
        ye = C.children,
        { patchFlag: ve, shapeFlag: Se } = C
      if (ve > 0) {
        if (ve & 128) {
          Pe(U, ye, R, H, F, J, re, Z, ee)
          return
        } else if (ve & 256) {
          Ue(U, ye, R, H, F, J, re, Z, ee)
          return
        }
      }
      Se & 8
        ? (le & 16 && at(U, F, J), ye !== U && c(R, ye))
        : le & 16
          ? Se & 16
            ? Pe(U, ye, R, H, F, J, re, Z, ee)
            : at(U, F, J, !0)
          : (le & 8 && c(R, ""), Se & 16 && q(ye, R, H, F, J, re, Z, ee))
    },
    Ue = (x, C, R, H, F, J, re, Z, ee) => {
      ;(x = x || pr), (C = C || pr)
      const U = x.length,
        le = C.length,
        ye = Math.min(U, le)
      let ve
      for (ve = 0; ve < ye; ve++) {
        const Se = (C[ve] = ee ? Pn(C[ve]) : Zt(C[ve]))
        g(x[ve], Se, R, null, F, J, re, Z, ee)
      }
      U > le ? at(x, F, J, !0, !1, ye) : q(C, R, H, F, J, re, Z, ee, ye)
    },
    Pe = (x, C, R, H, F, J, re, Z, ee) => {
      let U = 0
      const le = C.length
      let ye = x.length - 1,
        ve = le - 1
      for (; U <= ye && U <= ve; ) {
        const Se = x[U],
          ke = (C[U] = ee ? Pn(C[U]) : Zt(C[U]))
        if (Ar(Se, ke)) g(Se, ke, R, null, F, J, re, Z, ee)
        else break
        U++
      }
      for (; U <= ye && U <= ve; ) {
        const Se = x[ye],
          ke = (C[ve] = ee ? Pn(C[ve]) : Zt(C[ve]))
        if (Ar(Se, ke)) g(Se, ke, R, null, F, J, re, Z, ee)
        else break
        ye--, ve--
      }
      if (U > ye) {
        if (U <= ve) {
          const Se = ve + 1,
            ke = Se < le ? C[Se].el : H
          for (; U <= ve; )
            g(null, (C[U] = ee ? Pn(C[U]) : Zt(C[U])), R, ke, F, J, re, Z, ee),
              U++
        }
      } else if (U > ve) for (; U <= ye; ) et(x[U], F, J, !0), U++
      else {
        const Se = U,
          ke = U,
          Fe = new Map()
        for (U = ke; U <= ve; U++) {
          const Et = (C[U] = ee ? Pn(C[U]) : Zt(C[U]))
          Et.key != null && Fe.set(Et.key, U)
        }
        let Ye,
          rt = 0
        const $t = ve - ke + 1
        let mn = !1,
          kr = 0
        const bn = new Array($t)
        for (U = 0; U < $t; U++) bn[U] = 0
        for (U = Se; U <= ye; U++) {
          const Et = x[U]
          if (rt >= $t) {
            et(Et, F, J, !0)
            continue
          }
          let It
          if (Et.key != null) It = Fe.get(Et.key)
          else
            for (Ye = ke; Ye <= ve; Ye++)
              if (bn[Ye - ke] === 0 && Ar(Et, C[Ye])) {
                It = Ye
                break
              }
          It === void 0
            ? et(Et, F, J, !0)
            : ((bn[It - ke] = U + 1),
              It >= kr ? (kr = It) : (mn = !0),
              g(Et, C[It], R, null, F, J, re, Z, ee),
              rt++)
        }
        const Jr = mn ? Sg(bn) : pr
        for (Ye = Jr.length - 1, U = $t - 1; U >= 0; U--) {
          const Et = ke + U,
            It = C[Et],
            Mr = Et + 1 < le ? C[Et + 1].el : H
          bn[U] === 0
            ? g(null, It, R, Mr, F, J, re, Z, ee)
            : mn && (Ye < 0 || U !== Jr[Ye] ? Qe(It, R, Mr, 2) : Ye--)
        }
      }
    },
    Qe = (x, C, R, H, F = null) => {
      const { el: J, type: re, transition: Z, children: ee, shapeFlag: U } = x
      if (U & 6) {
        Qe(x.component.subTree, C, R, H)
        return
      }
      if (U & 128) {
        x.suspense.move(C, R, H)
        return
      }
      if (U & 64) {
        re.move(x, C, R, fe)
        return
      }
      if (re === nt) {
        r(J, C, R)
        for (let ye = 0; ye < ee.length; ye++) Qe(ee[ye], C, R, H)
        r(x.anchor, C, R)
        return
      }
      if (re === Ss) {
        y(x, C, R)
        return
      }
      if (H !== 2 && U & 1 && Z)
        if (H === 0) Z.beforeEnter(J), r(J, C, R), Pt(() => Z.enter(J), F)
        else {
          const { leave: ye, delayLeave: ve, afterLeave: Se } = Z,
            ke = () => r(J, C, R),
            Fe = () => {
              ye(J, () => {
                ke(), Se && Se()
              })
            }
          ve ? ve(J, ke, Fe) : Fe()
        }
      else r(J, C, R)
    },
    et = (x, C, R, H = !1, F = !1) => {
      const {
        type: J,
        props: re,
        ref: Z,
        children: ee,
        dynamicChildren: U,
        shapeFlag: le,
        patchFlag: ye,
        dirs: ve,
      } = x
      if ((Z != null && ri(Z, null, R, x, !0), le & 256)) {
        C.ctx.deactivate(x)
        return
      }
      const Se = le & 1 && ve,
        ke = !xs(x)
      let Fe
      if ((ke && (Fe = re && re.onVnodeBeforeUnmount) && Xt(Fe, C, x), le & 6))
        Ct(x.component, R, H)
      else {
        if (le & 128) {
          x.suspense.unmount(R, H)
          return
        }
        Se && Fn(x, null, C, "beforeUnmount"),
          le & 64
            ? x.type.remove(x, C, R, F, fe, H)
            : U && (J !== nt || (ye > 0 && ye & 64))
              ? at(U, C, R, !1, !0)
              : ((J === nt && ye & 384) || (!F && le & 16)) && at(ee, C, R),
          H && Kt(x)
      }
      ;((ke && (Fe = re && re.onVnodeUnmounted)) || Se) &&
        Pt(() => {
          Fe && Xt(Fe, C, x), Se && Fn(x, null, C, "unmounted")
        }, R)
    },
    Kt = (x) => {
      const { type: C, el: R, anchor: H, transition: F } = x
      if (C === nt) {
        Ft(R, H)
        return
      }
      if (C === Ss) {
        $(x)
        return
      }
      const J = () => {
        s(R), F && !F.persisted && F.afterLeave && F.afterLeave()
      }
      if (x.shapeFlag & 1 && F && !F.persisted) {
        const { leave: re, delayLeave: Z } = F,
          ee = () => re(R, J)
        Z ? Z(x.el, J, ee) : ee()
      } else J()
    },
    Ft = (x, C) => {
      let R
      for (; x !== C; ) (R = v(x)), s(x), (x = R)
      s(C)
    },
    Ct = (x, C, R) => {
      const { bum: H, scope: F, update: J, subTree: re, um: Z } = x
      H && ys(H),
        F.stop(),
        J && ((J.active = !1), et(re, x, C, R)),
        Z && Pt(Z, C),
        Pt(() => {
          x.isUnmounted = !0
        }, C),
        C &&
          C.pendingBranch &&
          !C.isUnmounted &&
          x.asyncDep &&
          !x.asyncResolved &&
          x.suspenseId === C.pendingId &&
          (C.deps--, C.deps === 0 && C.resolve())
    },
    at = (x, C, R, H = !1, F = !1, J = 0) => {
      for (let re = J; re < x.length; re++) et(x[re], C, R, H, F)
    },
    z = (x) =>
      x.shapeFlag & 6
        ? z(x.component.subTree)
        : x.shapeFlag & 128
          ? x.suspense.next()
          : v(x.anchor || x.el)
  let ae = !1
  const te = (x, C, R) => {
      x == null
        ? C._vnode && et(C._vnode, null, null, !0)
        : g(C._vnode || null, x, C, null, null, null, R),
        ae || ((ae = !0), yo(), Yu(), (ae = !1)),
        (C._vnode = x)
    },
    fe = {
      p: g,
      um: et,
      m: Qe,
      r: Kt,
      mt: xe,
      mc: q,
      pc: V,
      pbc: D,
      n: z,
      o: e,
    }
  let ze, Xe
  return (
    t && ([ze, Xe] = t(fe)), { render: te, hydrate: ze, createApp: pg(te, ze) }
  )
}
function Ia({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function jn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function xg(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function uc(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (_e(r) && _e(s))
    for (let a = 0; a < r.length; a++) {
      const i = r[a]
      let l = s[a]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[a] = Pn(s[a])), (l.el = i.el)),
        n || uc(i, l)),
        l.type === Us && (l.el = i.el)
    }
}
function Sg(e) {
  const t = e.slice(),
    n = [0]
  let r, s, a, i, l
  const o = e.length
  for (r = 0; r < o; r++) {
    const f = e[r]
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (a = 0, i = n.length - 1; a < i; )
        (l = (a + i) >> 1), e[n[l]] < f ? (a = l + 1) : (i = l)
      f < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), (n[a] = r))
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; ) (n[a] = i), (i = t[i])
  return n
}
function cc(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : cc(t)
}
const Eg = (e) => e.__isTeleport,
  nt = Symbol.for("v-fgt"),
  Us = Symbol.for("v-txt"),
  qn = Symbol.for("v-cmt"),
  Ss = Symbol.for("v-stc"),
  Fr = []
let qt = null
function he(e = !1) {
  Fr.push((qt = e ? null : []))
}
function _g() {
  Fr.pop(), (qt = Fr[Fr.length - 1] || null)
}
let Wr = 1
function $o(e) {
  Wr += e
}
function dc(e) {
  return (
    (e.dynamicChildren = Wr > 0 ? qt || pr : null),
    _g(),
    Wr > 0 && qt && qt.push(e),
    e
  )
}
function Oe(e, t, n, r, s, a) {
  return dc(S(e, t, n, r, s, a, !0))
}
function st(e, t, n, r, s) {
  return dc(oe(e, t, n, r, s, !0))
}
function si(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Ar(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ys = "__vInternal",
  fc = ({ key: e }) => e ?? null,
  Es = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ut(e) || St(e) || Te(e)
        ? { i: kt, r: e, k: t, f: !!n }
        : e
      : null
  )
function S(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  a = e === nt ? 0 : 1,
  i = !1,
  l = !1,
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fc(t),
    ref: t && Es(t),
    scopeId: Ws,
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
    ctx: kt,
  }
  return (
    l
      ? (Di(o, n), a & 128 && e.normalize(o))
      : n && (o.shapeFlag |= ut(n) ? 8 : 16),
    Wr > 0 &&
      !i &&
      qt &&
      (o.patchFlag > 0 || a & 6) &&
      o.patchFlag !== 32 &&
      qt.push(o),
    o
  )
}
const oe = Cg
function Cg(e, t = null, n = null, r = 0, s = null, a = !1) {
  if (((!e || e === Zu) && (e = qn), si(e))) {
    const l = Un(e, t, !0)
    return (
      n && Di(l, n),
      Wr > 0 &&
        !a &&
        qt &&
        (l.shapeFlag & 6 ? (qt[qt.indexOf(e)] = l) : qt.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Bg(e) && (e = e.__vccOpts), t)) {
    t = Tg(t)
    let { class: l, style: o } = t
    l && !ut(l) && (t.class = N(l)),
      tt(o) && (ju(o) && !_e(o) && (o = yt({}, o)), (t.style = Ds(o)))
  }
  const i = ut(e) ? 1 : U0(e) ? 128 : Eg(e) ? 64 : tt(e) ? 4 : Te(e) ? 2 : 0
  return S(e, t, n, r, s, i, a, !0)
}
function Tg(e) {
  return e ? (ju(e) || Ys in e ? yt({}, e) : e) : null
}
function Un(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: a, children: i } = e,
    l = t ? kg(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && fc(l),
    ref:
      t && t.ref
        ? n && s
          ? _e(s)
            ? s.concat(Es(t))
            : [s, Es(t)]
          : Es(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== nt ? (a === -1 ? 16 : a | 16) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Un(e.ssContent),
    ssFallback: e.ssFallback && Un(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Ee(e = " ", t = 0) {
  return oe(Us, null, e, t)
}
function Pg(e, t) {
  const n = oe(Ss, null, e)
  return (n.staticCount = t), n
}
function lt(e = "", t = !1) {
  return t ? (he(), st(qn, null, e)) : oe(qn, null, e)
}
function Zt(e) {
  return e == null || typeof e == "boolean"
    ? oe(qn)
    : _e(e)
      ? oe(nt, null, e.slice())
      : typeof e == "object"
        ? Pn(e)
        : oe(Us, null, String(e))
}
function Pn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Un(e)
}
function Di(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (_e(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), Di(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Ys in t)
        ? (t._ctx = kt)
        : s === 3 &&
          kt &&
          (kt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Te(t)
      ? ((t = { default: t, _ctx: kt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ee(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function kg(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = N([t.class, r.class]))
      else if (s === "style") t.style = Ds([t.style, r.style])
      else if (Bs(s)) {
        const a = t[s],
          i = r[s]
        i &&
          a !== i &&
          !(_e(a) && a.includes(i)) &&
          (t[s] = a ? [].concat(a, i) : i)
      } else s !== "" && (t[s] = r[s])
  }
  return t
}
function Xt(e, t, n, r = null) {
  Ut(e, t, 7, [n, r])
}
const Mg = rc()
let $g = 0
function Ig(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Mg,
    a = {
      uid: $g++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new l0(!0),
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
      propsOptions: ac(r, s),
      emitsOptions: Xu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Je,
      inheritAttrs: r.inheritAttrs,
      ctx: Je,
      data: Je,
      props: Je,
      attrs: Je,
      slots: Je,
      refs: Je,
      setupState: Je,
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
    (a.emit = z0.bind(null, a)),
    e.ce && e.ce(a),
    a
  )
}
let xt = null,
  Is,
  ai
{
  const e = Eu(),
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
  ;(Is = t("__VUE_INSTANCE_SETTERS__", (n) => (xt = n))),
    (ai = t("__VUE_SSR_SETTERS__", (n) => (Ks = n)))
}
const Xr = (e) => {
    const t = xt
    return (
      Is(e),
      e.scope.on(),
      () => {
        e.scope.off(), Is(t)
      }
    )
  },
  Io = () => {
    xt && xt.scope.off(), Is(null)
  }
function pc(e) {
  return e.vnode.shapeFlag & 4
}
let Ks = !1
function Og(e, t = !1) {
  t && ai(t)
  const { props: n, children: r } = e.vnode,
    s = pc(e)
  hg(e, n, s, t), mg(e, r)
  const a = s ? Ag(e, t) : void 0
  return t && ai(!1), a
}
function Ag(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Du(new Proxy(e.ctx, ig)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Ng(e) : null),
      a = Xr(e)
    Kn()
    const i = An(r, e, 0, [e.props, s])
    if ((Xn(), a(), wu(i))) {
      if ((i.then(Io, Io), t))
        return i
          .then((l) => {
            Oo(e, l, t)
          })
          .catch((l) => {
            Gs(l, e, 0)
          })
      e.asyncDep = i
    } else Oo(e, i, t)
  } else hc(e, t)
}
function Oo(e, t, n) {
  Te(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : tt(t) && (e.setupState = Wu(t)),
    hc(e, n)
}
let Ao
function hc(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Ao && !r.render) {
      const s = r.template || Fi(e).template
      if (s) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: o } = r,
          f = yt(yt({ isCustomElement: a, delimiters: l }, i), o)
        r.render = Ao(s, f)
      }
    }
    e.render = r.render || jt
  }
  {
    const s = Xr(e)
    Kn()
    try {
      lg(e)
    } finally {
      Xn(), s()
    }
  }
}
function Lg(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Mt(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function Ng(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Lg(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Xs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Wu(Du(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in zr) return zr[n](e)
        },
        has(t, n) {
          return n in t || n in zr
        },
      }))
    )
}
function Rg(e, t = !0) {
  return Te(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Bg(e) {
  return Te(e) && "__vccOpts" in e
}
const me = (e, t) => M0(e, t, Ks)
function qe(e, t, n) {
  const r = arguments.length
  return r === 2
    ? tt(t) && !_e(t)
      ? si(t)
        ? oe(e, null, [t])
        : oe(e, t)
      : oe(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && si(n) && (n = [n]),
      oe(e, t, n))
}
const zg = "3.4.15"
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Fg = "http://www.w3.org/2000/svg",
  jg = "http://www.w3.org/1998/Math/MathML",
  kn = typeof document < "u" ? document : null,
  Lo = kn && kn.createElement("template"),
  Dg = {
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
          ? kn.createElementNS(Fg, e)
          : t === "mathml"
            ? kn.createElementNS(jg, e)
            : kn.createElement(e, n ? { is: n } : void 0)
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      )
    },
    createText: (e) => kn.createTextNode(e),
    createComment: (e) => kn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => kn.querySelector(e),
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
        Lo.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const l = Lo.content
        if (r === "svg" || r === "mathml") {
          const o = l.firstChild
          for (; o.firstChild; ) l.appendChild(o.firstChild)
          l.removeChild(o)
        }
        t.insertBefore(l, n)
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Hg = Symbol("_vtc")
function Gg(e, t, n) {
  const r = e[Hg]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const Vg = Symbol("_vod"),
  Wg = Symbol("")
function qg(e, t, n) {
  const r = e.style,
    s = r.display,
    a = ut(n)
  if (n && !a) {
    if (t && !ut(t)) for (const i in t) n[i] == null && ii(r, i, "")
    for (const i in n) ii(r, i, n[i])
  } else if (a) {
    if (t !== n) {
      const i = r[Wg]
      i && (n += ";" + i), (r.cssText = n)
    }
  } else t && e.removeAttribute("style")
  Vg in e && (r.display = s)
}
const No = /\s*!important$/
function ii(e, t, n) {
  if (_e(n)) n.forEach((r) => ii(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = Ug(e, t)
    No.test(n)
      ? e.setProperty(Cr(r), n.replace(No, ""), "important")
      : (e[r] = n)
  }
}
const Ro = ["Webkit", "Moz", "ms"],
  Oa = {}
function Ug(e, t) {
  const n = Oa[t]
  if (n) return n
  let r = tn(t)
  if (r !== "filter" && r in e) return (Oa[t] = r)
  r = js(r)
  for (let s = 0; s < Ro.length; s++) {
    const a = Ro[s] + r
    if (a in e) return (Oa[t] = a)
  }
  return t
}
const Bo = "http://www.w3.org/1999/xlink"
function Yg(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Bo, t.slice(6, t.length))
      : e.setAttributeNS(Bo, t, n)
  else {
    const a = i0(t)
    n == null || (a && !_u(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function Kg(e, t, n, r, s, a, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, a), (e[t] = n ?? "")
    return
  }
  const l = e.tagName
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    e._value = n
    const f = l === "OPTION" ? e.getAttribute("value") : e.value,
      c = n ?? ""
    f !== c && (e.value = c), n == null && e.removeAttribute(t)
    return
  }
  let o = !1
  if (n === "" || n == null) {
    const f = typeof e[t]
    f === "boolean"
      ? (n = _u(n))
      : n == null && f === "string"
        ? ((n = ""), (o = !0))
        : f === "number" && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(t)
}
function cr(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Xg(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const zo = Symbol("_vei")
function Zg(e, t, n, r, s = null) {
  const a = e[zo] || (e[zo] = {}),
    i = a[t]
  if (r && i) i.value = r
  else {
    const [l, o] = Jg(t)
    if (r) {
      const f = (a[t] = tv(r, s))
      cr(e, l, f, o)
    } else i && (Xg(e, l, i, o), (a[t] = void 0))
  }
}
const Fo = /(?:Once|Passive|Capture)$/
function Jg(e) {
  let t
  if (Fo.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Fo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : Cr(e.slice(2)), t]
}
let Aa = 0
const Qg = Promise.resolve(),
  ev = () => Aa || (Qg.then(() => (Aa = 0)), (Aa = Date.now()))
function tv(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    Ut(nv(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = ev()), n
}
function nv(e, t) {
  if (_e(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const jo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  rv = (e, t, n, r, s, a, i, l, o) => {
    const f = s === "svg"
    t === "class"
      ? Gg(e, r, f)
      : t === "style"
        ? qg(e, n, r)
        : Bs(t)
          ? bi(t) || Zg(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : sv(e, t, r, f)
              )
            ? Kg(e, t, r, a, i, l, o)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              Yg(e, t, r, f))
  }
function sv(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && jo(t) && Te(n))
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
  return jo(t) && ut(n) ? !1 : t in e
}
const Do = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return _e(t) ? (n) => ys(t, n) : t
}
function av(e) {
  e.target.composing = !0
}
function Ho(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const La = Symbol("_assign"),
  iv = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[La] = Do(s)
      const a = r || (s.props && s.props.type === "number")
      cr(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let l = e.value
        n && (l = l.trim()), a && (l = Ua(l)), e[La](l)
      }),
        n &&
          cr(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (cr(e, "compositionstart", av),
          cr(e, "compositionend", Ho),
          cr(e, "change", Ho))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      a,
    ) {
      if (((e[La] = Do(a)), e.composing)) return
      const i = s || e.type === "number" ? Ua(e.value) : e.value,
        l = t ?? ""
      i !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === l))) ||
          (e.value = l))
    },
  },
  lv = yt({ patchProp: rv }, Dg)
let Go
function ov() {
  return Go || (Go = yg(lv))
}
const uv = (...e) => {
  const t = ov().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = dv(r)
      if (!s) return
      const a = t._component
      !Te(a) && !a.render && !a.template && (a.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, cv(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function cv(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function dv(e) {
  return ut(e) ? document.querySelector(e) : e
}
const Zn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  fv = {}
function pv(e, t) {
  const n = V0("router-view")
  return he(), st(n)
}
const hv = Zn(fv, [["render", pv]])
let gv = 0
function vv() {
  return ++gv
}
function Wn() {
  return vv()
}
function de(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function Rt(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Rt), r)
}
var mv = Object.defineProperty,
  bv = (e, t, n) =>
    t in e
      ? mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Vo = (e, t, n) => (bv(e, typeof t != "symbol" ? t + "" : t, n), n)
let yv = class {
    constructor() {
      Vo(this, "current", this.detect()), Vo(this, "currentId", 0)
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
  },
  Zs = new yv()
function Tr(e) {
  if (Zs.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = de(e)
    if (t) return t.ownerDocument
  }
  return document
}
let li = [
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
var ct = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(ct || {}),
  $n = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))($n || {}),
  wv = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(wv || {})
function Js(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(li)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var Hi = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Hi || {})
function gc(e, t = 0) {
  var n
  return e === ((n = Tr(e)) == null ? void 0 : n.body)
    ? !1
    : Rt(t, {
        0() {
          return e.matches(li)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(li)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var xv = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(xv || {})
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
let Sv = ["textarea", "input"].join(",")
function Ev(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Sv)) !=
    null
    ? n
    : !1
}
function dr(e, t = (n) => n) {
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
function Nt(
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
    l = Array.isArray(e) ? (n ? dr(e) : e) : Js(e)
  s.length > 0 && l.length > 1 && (l = l.filter((k) => !s.includes(k))),
    (r = r ?? i.activeElement)
  let o = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    f = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, l.indexOf(r)) - 1
      if (t & 4) return Math.max(0, l.indexOf(r)) + 1
      if (t & 8) return l.length - 1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    p = 0,
    v = l.length,
    m
  do {
    if (p >= v || p + v <= 0) return 0
    let k = f + p
    if (t & 16) k = (k + v) % v
    else {
      if (k < 0) return 3
      if (k >= v) return 1
    }
    ;(m = l[k]), m == null || m.focus(c), (p += o)
  } while (m !== i.activeElement)
  return t & 6 && Ev(m) && m.select(), 2
}
function _v() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Cv() {
  return /Android/gi.test(window.navigator.userAgent)
}
function Tv() {
  return _v() || Cv()
}
function hs(e, t, n) {
  Zs.isServer ||
    dn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function vc(e, t, n) {
  Zs.isServer ||
    dn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Pv(e, t, n = me(() => !0)) {
  function r(a, i) {
    if (!n.value || a.defaultPrevented) return
    let l = i(a)
    if (l === null || !l.getRootNode().contains(l)) return
    let o = (function f(c) {
      return typeof c == "function"
        ? f(c())
        : Array.isArray(c) || c instanceof Set
          ? c
          : [c]
    })(e)
    for (let f of o) {
      if (f === null) continue
      let c = f instanceof HTMLElement ? f : de(f)
      if (
        (c != null && c.contains(l)) ||
        (a.composed && a.composedPath().includes(c))
      )
        return
    }
    return !gc(l, Hi.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l)
  }
  let s = be(null)
  hs(
    "pointerdown",
    (a) => {
      var i, l
      n.value &&
        (s.value =
          ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null
            ? void 0
            : l[0]) || a.target)
    },
    !0,
  ),
    hs(
      "mousedown",
      (a) => {
        var i, l
        n.value &&
          (s.value =
            ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null
              ? void 0
              : l[0]) || a.target)
      },
      !0,
    ),
    hs(
      "click",
      (a) => {
        Tv() || (s.value && (r(a, () => s.value), (s.value = null)))
      },
      !0,
    ),
    hs(
      "touchend",
      (a) => r(a, () => (a.target instanceof HTMLElement ? a.target : null)),
      !0,
    ),
    vc(
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
function Wo(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function mc(e, t) {
  let n = be(Wo(e.value.type, e.value.as))
  return (
    gt(() => {
      n.value = Wo(e.value.type, e.value.as)
    }),
    dn(() => {
      var r
      n.value ||
        (de(t) &&
          de(t) instanceof HTMLButtonElement &&
          !((r = de(t)) != null && r.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var qr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(qr || {}),
  kv = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(kv || {})
function pn({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...s
}) {
  var a
  let i = yc(r, n),
    l = Object.assign(s, { props: i })
  if (e || (t & 2 && i.static)) return Na(l)
  if (t & 1) {
    let o = (a = i.unmount) == null || a ? 0 : 1
    return Rt(o, {
      0() {
        return null
      },
      1() {
        return Na({
          ...s,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Na(l)
}
function Na({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var a, i
  let { as: l, ...o } = wc(e, ["unmount", "static"]),
    f = (a = n.default) == null ? void 0 : a.call(n, r),
    c = {}
  if (r) {
    let p = !1,
      v = []
    for (let [m, k] of Object.entries(r))
      typeof k == "boolean" && (p = !0), k === !0 && v.push(m)
    p && (c["data-headlessui-state"] = v.join(" "))
  }
  if (l === "template") {
    if (
      ((f = bc(f ?? [])),
      Object.keys(o).length > 0 || Object.keys(t).length > 0)
    ) {
      let [p, ...v] = f ?? []
      if (!Mv(p) || v.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${s} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(o)
              .concat(Object.keys(t))
              .map((g) => g.trim())
              .filter((g, E, T) => T.indexOf(g) === E)
              .sort((g, E) => g.localeCompare(E))
              .map((g) => `  - ${g}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((g) => `  - ${g}`).join(`
`),
          ].join(`
`),
        )
      let m = yc((i = p.props) != null ? i : {}, o, c),
        k = Un(p, m, !0)
      for (let g in m)
        g.startsWith("on") && (k.props || (k.props = {}), (k.props[g] = m[g]))
      return k
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f
  }
  return qe(l, Object.assign({}, o, c), { default: () => f })
}
function bc(e) {
  return e.flatMap((t) => (t.type === nt ? bc(t.children) : [t]))
}
function yc(...e) {
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
        for (let l of i) {
          if (s instanceof Event && s.defaultPrevented) return
          l(s, ...a)
        }
      },
    })
  return t
}
function wc(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function Mv(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var wr = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(wr || {})
let xr = Bt({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var r
        let { features: s, ...a } = e,
          i = {
            "aria-hidden":
              (s & 2) === 2 ? !0 : (r = a["aria-hidden"]) != null ? r : void 0,
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
              ...((s & 4) === 4 && (s & 2) !== 2 && { display: "none" }),
            },
          }
        return pn({
          ourProps: i,
          theirProps: a,
          slot: {},
          attrs: n,
          slots: t,
          name: "Hidden",
        })
      }
    },
  }),
  xc = Symbol("Context")
var Ur = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ur || {})
function $v() {
  return bt(xc, null)
}
function Iv(e) {
  Dt(xc, e)
}
var ht = ((e) => (
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
))(ht || {})
function Ov(e) {
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
function Av(e, t, n, r) {
  Zs.isServer ||
    dn((s) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, r),
        s(() => e.removeEventListener(t, n, r))
    })
}
var on = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(on || {})
function Sc() {
  let e = be(0)
  return (
    vc("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Lv({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = be(null),
    s = Tr(r)
  function a() {
    var i, l, o
    let f = []
    for (let c of e)
      c !== null &&
        (c instanceof HTMLElement
          ? f.push(c)
          : "value" in c && c.value instanceof HTMLElement && f.push(c.value))
    if (t != null && t.value) for (let c of t.value) f.push(c)
    for (let c of (i =
      s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null
      ? i
      : [])
      c !== document.body &&
        c !== document.head &&
        c instanceof HTMLElement &&
        c.id !== "headlessui-portal-root" &&
        (c.contains(de(r)) ||
          c.contains(
            (o = (l = de(r)) == null ? void 0 : l.getRootNode()) == null
              ? void 0
              : o.host,
          ) ||
          f.some((p) => c.contains(p)) ||
          f.push(c))
    return f
  }
  return {
    resolveContainers: a,
    contains(i) {
      return a().some((l) => l.contains(i))
    },
    mainTreeNodeRef: r,
    MainTreeNode() {
      return n != null ? null : qe(xr, { features: wr.Hidden, ref: r })
    },
  }
}
let qo = Symbol("PortalParentContext")
function Nv() {
  let e = bt(qo, null),
    t = be([])
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
    Bt({
      name: "PortalWrapper",
      setup(a, { slots: i }) {
        return (
          Dt(qo, s),
          () => {
            var l
            return (l = i.default) == null ? void 0 : l.call(i)
          }
        )
      },
    }),
  ]
}
var Rv = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Rv || {})
let Ec = Symbol("PopoverContext")
function Gi(e) {
  let t = bt(Ec, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${oi.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Gi), n)
  }
  return t
}
let Bv = Symbol("PopoverGroupContext")
function _c() {
  return bt(Bv, null)
}
let Cc = Symbol("PopoverPanelContext")
function zv() {
  return bt(Cc, null)
}
let oi = Bt({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let a = be(null)
      r({ el: a, $el: a })
      let i = be(1),
        l = be(null),
        o = be(null),
        f = be(null),
        c = be(null),
        p = me(() => Tr(a)),
        v = me(() => {
          var L, I
          if (!de(l) || !de(c)) return !1
          for (let X of document.querySelectorAll("body > *"))
            if (
              Number(X == null ? void 0 : X.contains(de(l))) ^
              Number(X == null ? void 0 : X.contains(de(c)))
            )
              return !0
          let ne = Js(),
            q = ne.indexOf(de(l)),
            G = (q + ne.length - 1) % ne.length,
            D = (q + 1) % ne.length,
            Q = ne[G],
            ge = ne[D]
          return (
            !((L = de(c)) != null && L.contains(Q)) &&
            !((I = de(c)) != null && I.contains(ge))
          )
        }),
        m = {
          popoverState: i,
          buttonId: be(null),
          panelId: be(null),
          panel: c,
          button: l,
          isPortalled: v,
          beforePanelSentinel: o,
          afterPanelSentinel: f,
          togglePopover() {
            i.value = Rt(i.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            i.value !== 1 && (i.value = 1)
          },
          close(L) {
            m.closePopover()
            let I = L
              ? L instanceof HTMLElement
                ? L
                : L.value instanceof HTMLElement
                  ? de(L)
                  : de(m.button)
              : de(m.button)
            I == null || I.focus()
          },
        }
      Dt(Ec, m), Iv(me(() => Rt(i.value, { 0: Ur.Open, 1: Ur.Closed })))
      let k = {
          buttonId: m.buttonId,
          panelId: m.panelId,
          close() {
            m.closePopover()
          },
        },
        g = _c(),
        E = g == null ? void 0 : g.registerPopover,
        [T, w] = Nv(),
        y = Lv({
          mainTreeNodeRef: g == null ? void 0 : g.mainTreeNodeRef,
          portals: T,
          defaultContainers: [l, c],
        })
      function $() {
        var L, I, ne, q
        return (q = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null
          ? q
          : ((L = p.value) == null ? void 0 : L.activeElement) &&
              (((I = de(l)) == null
                ? void 0
                : I.contains(p.value.activeElement)) ||
                ((ne = de(c)) == null
                  ? void 0
                  : ne.contains(p.value.activeElement)))
      }
      return (
        dn(() => (E == null ? void 0 : E(k))),
        Av(
          (s = p.value) == null ? void 0 : s.defaultView,
          "focus",
          (L) => {
            var I, ne
            L.target !== window &&
              L.target instanceof HTMLElement &&
              i.value === 0 &&
              ($() ||
                (l &&
                  c &&
                  (y.contains(L.target) ||
                    ((I = de(m.beforePanelSentinel)) != null &&
                      I.contains(L.target)) ||
                    ((ne = de(m.afterPanelSentinel)) != null &&
                      ne.contains(L.target)) ||
                    m.closePopover())))
          },
          !0,
        ),
        Pv(
          y.resolveContainers,
          (L, I) => {
            var ne
            m.closePopover(),
              gc(I, Hi.Loose) ||
                (L.preventDefault(), (ne = de(l)) == null || ne.focus())
          },
          me(() => i.value === 0),
        ),
        () => {
          let L = { open: i.value === 0, close: m.close }
          return qe(nt, [
            qe(w, {}, () =>
              pn({
                theirProps: { ...e, ...n },
                ourProps: { ref: a },
                slot: L,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            qe(y.MainTreeNode),
          ])
        }
      )
    },
  }),
  Uo = Bt({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Wn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Gi("PopoverButton"),
        a = me(() => Tr(s.button))
      r({ el: s.button, $el: s.button }),
        gt(() => {
          s.buttonId.value = e.id
        }),
        Nn(() => {
          s.buttonId.value = null
        })
      let i = _c(),
        l = i == null ? void 0 : i.closeOthers,
        o = zv(),
        f = me(() => (o === null ? !1 : o.value === s.panelId.value)),
        c = be(null),
        p = `headlessui-focus-sentinel-${Wn()}`
      f.value ||
        dn(() => {
          s.button.value = de(c)
        })
      let v = mc(
        me(() => ({ as: e.as, type: t.type })),
        c,
      )
      function m(y) {
        var $, L, I, ne, q
        if (f.value) {
          if (s.popoverState.value === 1) return
          switch (y.key) {
            case ht.Space:
            case ht.Enter:
              y.preventDefault(),
                (L = ($ = y.target).click) == null || L.call($),
                s.closePopover(),
                (I = de(s.button)) == null || I.focus()
              break
          }
        } else
          switch (y.key) {
            case ht.Space:
            case ht.Enter:
              y.preventDefault(),
                y.stopPropagation(),
                s.popoverState.value === 1 &&
                  (l == null || l(s.buttonId.value)),
                s.togglePopover()
              break
            case ht.Escape:
              if (s.popoverState.value !== 0)
                return l == null ? void 0 : l(s.buttonId.value)
              if (
                !de(s.button) ||
                ((ne = a.value) != null &&
                  ne.activeElement &&
                  !(
                    (q = de(s.button)) != null &&
                    q.contains(a.value.activeElement)
                  ))
              )
                return
              y.preventDefault(), y.stopPropagation(), s.closePopover()
              break
          }
      }
      function k(y) {
        f.value || (y.key === ht.Space && y.preventDefault())
      }
      function g(y) {
        var $, L
        e.disabled ||
          (f.value
            ? (s.closePopover(), ($ = de(s.button)) == null || $.focus())
            : (y.preventDefault(),
              y.stopPropagation(),
              s.popoverState.value === 1 && (l == null || l(s.buttonId.value)),
              s.togglePopover(),
              (L = de(s.button)) == null || L.focus()))
      }
      function E(y) {
        y.preventDefault(), y.stopPropagation()
      }
      let T = Sc()
      function w() {
        let y = de(s.panel)
        if (!y) return
        function $() {
          Rt(T.value, {
            [on.Forwards]: () => Nt(y, ct.First),
            [on.Backwards]: () => Nt(y, ct.Last),
          }) === $n.Error &&
            Nt(
              Js().filter((L) => L.dataset.headlessuiFocusGuard !== "true"),
              Rt(T.value, {
                [on.Forwards]: ct.Next,
                [on.Backwards]: ct.Previous,
              }),
              { relativeTo: de(s.button) },
            )
        }
        $()
      }
      return () => {
        let y = s.popoverState.value === 0,
          $ = { open: y },
          { id: L, ...I } = e,
          ne = f.value
            ? { ref: c, type: v.value, onKeydown: m, onClick: g }
            : {
                ref: c,
                id: L,
                type: v.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": de(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: m,
                onKeyup: k,
                onClick: g,
                onMousedown: E,
              }
        return qe(nt, [
          pn({
            ourProps: ne,
            theirProps: { ...t, ...I },
            slot: $,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          y &&
            !f.value &&
            s.isPortalled.value &&
            qe(xr, {
              id: p,
              features: wr.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: w,
            }),
        ])
      }
    },
  }),
  Yo = Bt({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${Wn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let { focus: s } = e,
        a = Gi("PopoverPanel"),
        i = me(() => Tr(a.panel)),
        l = `headlessui-focus-sentinel-before-${Wn()}`,
        o = `headlessui-focus-sentinel-after-${Wn()}`
      r({ el: a.panel, $el: a.panel }),
        gt(() => {
          a.panelId.value = e.id
        }),
        Nn(() => {
          a.panelId.value = null
        }),
        Dt(Cc, a.panelId),
        dn(() => {
          var E, T
          if (!s || a.popoverState.value !== 0 || !a.panel) return
          let w = (E = i.value) == null ? void 0 : E.activeElement
          ;((T = de(a.panel)) != null && T.contains(w)) ||
            Nt(de(a.panel), ct.First)
        })
      let f = $v(),
        c = me(() =>
          f !== null
            ? (f.value & Ur.Open) === Ur.Open
            : a.popoverState.value === 0,
        )
      function p(E) {
        var T, w
        switch (E.key) {
          case ht.Escape:
            if (
              a.popoverState.value !== 0 ||
              !de(a.panel) ||
              (i.value &&
                !(
                  (T = de(a.panel)) != null && T.contains(i.value.activeElement)
                ))
            )
              return
            E.preventDefault(),
              E.stopPropagation(),
              a.closePopover(),
              (w = de(a.button)) == null || w.focus()
            break
        }
      }
      function v(E) {
        var T, w, y, $, L
        let I = E.relatedTarget
        I &&
          de(a.panel) &&
          (((T = de(a.panel)) != null && T.contains(I)) ||
            (a.closePopover(),
            (((y =
              (w = de(a.beforePanelSentinel)) == null ? void 0 : w.contains) !=
              null &&
              y.call(w, I)) ||
              ((L =
                ($ = de(a.afterPanelSentinel)) == null ? void 0 : $.contains) !=
                null &&
                L.call($, I))) &&
              I.focus({ preventScroll: !0 })))
      }
      let m = Sc()
      function k() {
        let E = de(a.panel)
        if (!E) return
        function T() {
          Rt(m.value, {
            [on.Forwards]: () => {
              var w
              Nt(E, ct.First) === $n.Error &&
                ((w = de(a.afterPanelSentinel)) == null || w.focus())
            },
            [on.Backwards]: () => {
              var w
              ;(w = de(a.button)) == null || w.focus({ preventScroll: !0 })
            },
          })
        }
        T()
      }
      function g() {
        let E = de(a.panel)
        if (!E) return
        function T() {
          Rt(m.value, {
            [on.Forwards]: () => {
              let w = de(a.button),
                y = de(a.panel)
              if (!w) return
              let $ = Js(),
                L = $.indexOf(w),
                I = $.slice(0, L + 1),
                ne = [...$.slice(L + 1), ...I]
              for (let q of ne.slice())
                if (
                  q.dataset.headlessuiFocusGuard === "true" ||
                  (y != null && y.contains(q))
                ) {
                  let G = ne.indexOf(q)
                  G !== -1 && ne.splice(G, 1)
                }
              Nt(ne, ct.First, { sorted: !1 })
            },
            [on.Backwards]: () => {
              var w
              Nt(E, ct.Previous) === $n.Error &&
                ((w = de(a.button)) == null || w.focus())
            },
          })
        }
        T()
      }
      return () => {
        let E = { open: a.popoverState.value === 0, close: a.close },
          { id: T, focus: w, ...y } = e,
          $ = {
            ref: a.panel,
            id: T,
            onKeydown: p,
            onFocusout: s && a.popoverState.value === 0 ? v : void 0,
            tabIndex: -1,
          }
        return pn({
          ourProps: $,
          theirProps: { ...t, ...y },
          attrs: t,
          slot: E,
          slots: {
            ...n,
            default: (...L) => {
              var I
              return [
                qe(nt, [
                  c.value &&
                    a.isPortalled.value &&
                    qe(xr, {
                      id: l,
                      ref: a.beforePanelSentinel,
                      features: wr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: k,
                    }),
                  (I = n.default) == null ? void 0 : I.call(n, ...L),
                  c.value &&
                    a.isPortalled.value &&
                    qe(xr, {
                      id: o,
                      ref: a.afterPanelSentinel,
                      features: wr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: g,
                    }),
                ]),
              ]
            },
          },
          features: qr.RenderStrategy | qr.Static,
          visible: c.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  Fv = Bt({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = be(!0)
      return () =>
        t.value
          ? qe(xr, {
              as: "button",
              type: "button",
              features: wr.Focusable,
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
var jv = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(jv || {}),
  Dv = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(Dv || {})
let Tc = Symbol("TabsContext")
function Zr(e) {
  let t = bt(Tc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Zr), n)
  }
  return t
}
let Vi = Symbol("TabsSSRContext"),
  Hv = Bt({
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
      let a = be((s = e.selectedIndex) != null ? s : e.defaultIndex),
        i = be([]),
        l = be([]),
        o = me(() => e.selectedIndex !== null),
        f = me(() => (o.value ? e.selectedIndex : a.value))
      function c(g) {
        var E
        let T = dr(p.tabs.value, de),
          w = dr(p.panels.value, de),
          y = T.filter(($) => {
            var L
            return !((L = de($)) != null && L.hasAttribute("disabled"))
          })
        if (g < 0 || g > T.length - 1) {
          let $ = Rt(a.value === null ? 0 : Math.sign(g - a.value), {
              [-1]: () => 1,
              0: () =>
                Rt(Math.sign(g), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            L = Rt($, {
              0: () => T.indexOf(y[0]),
              1: () => T.indexOf(y[y.length - 1]),
            })
          L !== -1 && (a.value = L), (p.tabs.value = T), (p.panels.value = w)
        } else {
          let $ = T.slice(0, g),
            L = [...T.slice(g), ...$].find((ne) => y.includes(ne))
          if (!L) return
          let I = (E = T.indexOf(L)) != null ? E : p.selectedIndex.value
          I === -1 && (I = p.selectedIndex.value),
            (a.value = I),
            (p.tabs.value = T),
            (p.panels.value = w)
        }
      }
      let p = {
        selectedIndex: me(() => {
          var g, E
          return (E = (g = a.value) != null ? g : e.defaultIndex) != null
            ? E
            : null
        }),
        orientation: me(() => (e.vertical ? "vertical" : "horizontal")),
        activation: me(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: l,
        setSelectedIndex(g) {
          f.value !== g && r("change", g), o.value || c(g)
        },
        registerTab(g) {
          var E
          if (i.value.includes(g)) return
          let T = i.value[a.value]
          i.value.push(g), (i.value = dr(i.value, de))
          let w = (E = i.value.indexOf(T)) != null ? E : a.value
          w !== -1 && (a.value = w)
        },
        unregisterTab(g) {
          let E = i.value.indexOf(g)
          E !== -1 && i.value.splice(E, 1)
        },
        registerPanel(g) {
          l.value.includes(g) || (l.value.push(g), (l.value = dr(l.value, de)))
        },
        unregisterPanel(g) {
          let E = l.value.indexOf(g)
          E !== -1 && l.value.splice(E, 1)
        },
      }
      Dt(Tc, p)
      let v = be({ tabs: [], panels: [] }),
        m = be(!1)
      gt(() => {
        m.value = !0
      }),
        Dt(
          Vi,
          me(() => (m.value ? null : v.value)),
        )
      let k = me(() => e.selectedIndex)
      return (
        gt(() => {
          en(
            [k],
            () => {
              var g
              return c((g = e.selectedIndex) != null ? g : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        dn(() => {
          if (!o.value || f.value == null || p.tabs.value.length <= 0) return
          let g = dr(p.tabs.value, de)
          g.some((E, T) => de(p.tabs.value[T]) !== de(E)) &&
            p.setSelectedIndex(
              g.findIndex((E) => de(E) === de(p.tabs.value[f.value])),
            )
        }),
        () => {
          let g = { selectedIndex: a.value }
          return qe(nt, [
            i.value.length <= 0 &&
              qe(Fv, {
                onFocus: () => {
                  for (let E of i.value) {
                    let T = de(E)
                    if ((T == null ? void 0 : T.tabIndex) === 0)
                      return T.focus(), !0
                  }
                  return !1
                },
              }),
            pn({
              theirProps: {
                ...n,
                ...wc(e, [
                  "selectedIndex",
                  "defaultIndex",
                  "manual",
                  "vertical",
                  "onChange",
                ]),
              },
              ourProps: {},
              slot: g,
              slots: t,
              attrs: n,
              name: "TabGroup",
            }),
          ])
        }
      )
    },
  }),
  Gv = Bt({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = Zr("TabList")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value },
          a = { role: "tablist", "aria-orientation": r.orientation.value }
        return pn({
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
  Vv = Bt({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-tabs-tab-${Wn()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Zr("Tab"),
        a = be(null)
      r({ el: a, $el: a }),
        gt(() => s.registerTab(a)),
        Nn(() => s.unregisterTab(a))
      let i = bt(Vi),
        l = me(() => {
          if (i.value) {
            let E = i.value.tabs.indexOf(e.id)
            return E === -1 ? i.value.tabs.push(e.id) - 1 : E
          }
          return -1
        }),
        o = me(() => {
          let E = s.tabs.value.indexOf(a)
          return E === -1 ? l.value : E
        }),
        f = me(() => o.value === s.selectedIndex.value)
      function c(E) {
        var T
        let w = E()
        if (w === $n.Success && s.activation.value === "auto") {
          let y = (T = Tr(a)) == null ? void 0 : T.activeElement,
            $ = s.tabs.value.findIndex((L) => de(L) === y)
          $ !== -1 && s.setSelectedIndex($)
        }
        return w
      }
      function p(E) {
        let T = s.tabs.value.map((w) => de(w)).filter(Boolean)
        if (E.key === ht.Space || E.key === ht.Enter) {
          E.preventDefault(), E.stopPropagation(), s.setSelectedIndex(o.value)
          return
        }
        switch (E.key) {
          case ht.Home:
          case ht.PageUp:
            return (
              E.preventDefault(), E.stopPropagation(), c(() => Nt(T, ct.First))
            )
          case ht.End:
          case ht.PageDown:
            return (
              E.preventDefault(), E.stopPropagation(), c(() => Nt(T, ct.Last))
            )
        }
        if (
          c(() =>
            Rt(s.orientation.value, {
              vertical() {
                return E.key === ht.ArrowUp
                  ? Nt(T, ct.Previous | ct.WrapAround)
                  : E.key === ht.ArrowDown
                    ? Nt(T, ct.Next | ct.WrapAround)
                    : $n.Error
              },
              horizontal() {
                return E.key === ht.ArrowLeft
                  ? Nt(T, ct.Previous | ct.WrapAround)
                  : E.key === ht.ArrowRight
                    ? Nt(T, ct.Next | ct.WrapAround)
                    : $n.Error
              },
            }),
          ) === $n.Success
        )
          return E.preventDefault()
      }
      let v = be(!1)
      function m() {
        var E
        v.value ||
          ((v.value = !0),
          !e.disabled &&
            ((E = de(a)) == null || E.focus({ preventScroll: !0 }),
            s.setSelectedIndex(o.value),
            Ov(() => {
              v.value = !1
            })))
      }
      function k(E) {
        E.preventDefault()
      }
      let g = mc(
        me(() => ({ as: e.as, type: t.type })),
        a,
      )
      return () => {
        var E
        let T = { selected: f.value },
          { id: w, ...y } = e,
          $ = {
            ref: a,
            onKeydown: p,
            onMousedown: k,
            onClick: m,
            id: w,
            role: "tab",
            type: g.value,
            "aria-controls":
              (E = de(s.panels.value[o.value])) == null ? void 0 : E.id,
            "aria-selected": f.value,
            tabIndex: f.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return pn({
          ourProps: $,
          theirProps: y,
          slot: T,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  Wv = Bt({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = Zr("TabPanels")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value }
        return pn({
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
  ur = Bt({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${Wn()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Zr("TabPanel"),
        a = be(null)
      r({ el: a, $el: a }),
        gt(() => s.registerPanel(a)),
        Nn(() => s.unregisterPanel(a))
      let i = bt(Vi),
        l = me(() => {
          if (i.value) {
            let c = i.value.panels.indexOf(e.id)
            return c === -1 ? i.value.panels.push(e.id) - 1 : c
          }
          return -1
        }),
        o = me(() => {
          let c = s.panels.value.indexOf(a)
          return c === -1 ? l.value : c
        }),
        f = me(() => o.value === s.selectedIndex.value)
      return () => {
        var c
        let p = { selected: f.value },
          { id: v, tabIndex: m, ...k } = e,
          g = {
            ref: a,
            id: v,
            role: "tabpanel",
            "aria-labelledby":
              (c = de(s.tabs.value[o.value])) == null ? void 0 : c.id,
            tabIndex: f.value ? m : -1,
          }
        return !f.value && e.unmount && !e.static
          ? qe(xr, { as: "span", "aria-hidden": !0, ...g })
          : pn({
              ourProps: g,
              theirProps: k,
              slot: p,
              attrs: t,
              slots: n,
              features: qr.Static | qr.RenderStrategy,
              visible: f.value,
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
 */ var gs = {
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
 */ const qv = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  dt =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: r = 2,
        absoluteStrokeWidth: s,
        color: a,
        class: i,
        ...l
      },
      { attrs: o, slots: f },
    ) =>
      qe(
        "svg",
        {
          ...gs,
          width: n || gs.width,
          height: n || gs.height,
          stroke: a || gs.stroke,
          "stroke-width": s ? (Number(r) * 24) / Number(n) : r,
          ...o,
          class: ["lucide", `lucide-${qv(e)}`],
          ...l,
        },
        [...t.map((c) => qe(...c)), ...(f.default ? [f.default()] : [])],
      )
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ko = dt("CheckIcon", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uv = dt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yv = dt("CloudDrizzleIcon", [
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
 */ const Kv = dt("CloudSunIcon", [
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
 */ const Pc = dt("EyeOffIcon", [
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
 */ const Xv = dt("EyeIcon", [
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
 */ const Zv = dt("FrameIcon", [
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
 */ const Jv = dt("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qv = dt("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const em = dt("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tm = dt("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nm = dt("PencilRulerIcon", [
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
 */ const rm = dt("RabbitIcon", [
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
 */ const _s = dt("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sm = dt("ShowerHeadIcon", [
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
 */ const am = dt("SunIcon", [
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
 */ const Ra = dt("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const im = dt("TurtleIcon", [
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
 */ const ui = dt("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Wi = (e) => (Ii("data-v-4577d950"), (e = e()), Oi(), e),
  lm = { class: "flex justify-center p-5 gap-5 content-center" },
  om = Wi(() => S("div", { class: "w-1/12" }, null, -1)),
  um = { class: "flex justify-between gap-2 w-full content-center" },
  cm = { class: "flex gap-1 p-2" },
  dm = { class: "flex gap-5 p-2 relative" },
  fm = { href: "/portfolio" },
  pm = { href: "/" },
  hm = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  gm = Wi(() => S("b", null, "Art and Animation", -1)),
  vm = [gm],
  mm = { href: "/about-me" },
  bm = { class: "flex gap-5 content-center" },
  ym = { href: "/contact" },
  wm = { class: "lg:hidden flex" },
  xm = { class: "flex gap-1 p-2" },
  Sm = { class: "flex flex-col gap-2 p-2" },
  Em = { class: "flex justify-between" },
  _m = Wi(() => S("div", { class: "w-1/12" }, null, -1)),
  Cm = { class: "flex justify-between items-center" },
  Tm = { class: "flex gap-1 p-2" },
  Pm = Pg(
    '<a href="/contact" data-v-4577d950><li class="py-2 px-3 rounded" data-v-4577d950>Contact</li></a><a href="/portfolio" data-v-4577d950><li class="py-2 px-3 rounded" data-v-4577d950>Web Portfolio</li></a><a href="/" data-v-4577d950><li class="py-2 px-3 rounded" data-v-4577d950>Web Services</li></a><li class="py-2 px-3 rounded opacity-75" data-v-4577d950>Creative Projects</li><ul class="ml-5" data-v-4577d950><li class="py-2 px-3 rounded" data-v-4577d950>Art and Animation</li><li class="py-2 px-3 rounded" data-v-4577d950>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-4577d950>Custom Software</li><li class="py-2 px-3 rounded" data-v-4577d950>Cooking and Recipes</li></ul><a href="/about-me" data-v-4577d950><li class="py-2 px-3 rounded" data-v-4577d950>About Me</li></a>',
    6,
  ),
  km = [Pm],
  Mm = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = be(5),
        r = t,
        s = (l) => {
          ;(n.value = l.target.value), r("update:brightness", n.value)
        }
      gt(() => {
        let l = window.localStorage
        l.getItem("brightness") && (n.value = Number(l.getItem("brightness")))
      })
      const a = () => {
          window.location.href = "/"
        },
        i = () => {
          let l = document.getElementById("mobileMenu")
          l.classList.contains("hidden")
            ? l.classList.remove("hidden")
            : l.classList.add("hidden")
        }
      return (l, o) => (
        he(),
        Oe(
          nt,
          null,
          [
            S("div", lm, [
              om,
              S(
                "div",
                {
                  class: N([
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
                  S("div", um, [
                    S("div", cm, [
                      oe(
                        pe(Ra),
                        {
                          class: N({
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
                      S(
                        "p",
                        {
                          class: N([
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
                    S("div", dm, [
                      S("a", fm, [
                        S(
                          "h6",
                          {
                            class: N([
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
                      S("a", pm, [
                        S(
                          "h6",
                          {
                            class: N([
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
                      oe(
                        pe(oi),
                        { class: "relative inline-block text-left" },
                        {
                          default: Ke(() => [
                            oe(
                              pe(Uo),
                              {
                                "aria-label": "Creative projects dropdown menu",
                                class: N([
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
                                default: Ke(() => [
                                  Ee(" Creative Projects"),
                                  oe(pe(Uv)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            oe(
                              pe(Yo),
                              {
                                class: N([
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
                                default: Ke(() => [
                                  S("div", hm, [
                                    S(
                                      "a",
                                      {
                                        href: "https://hansenstudios.art/",
                                        class: N([
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
                                      vm,
                                      2,
                                    ),
                                    S(
                                      "a",
                                      {
                                        href: "#",
                                        class: N([
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
                                    S(
                                      "a",
                                      {
                                        href: "#",
                                        class: N([
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
                                    S(
                                      "a",
                                      {
                                        href: "#",
                                        class: N([
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
                      S("a", mm, [
                        S(
                          "h6",
                          {
                            class: N([
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
                    ]),
                    S("div", bm, [
                      S("a", ym, [
                        S(
                          "button",
                          {
                            class: N([
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
                  ]),
                ],
                2,
              ),
              S(
                "div",
                {
                  id: "headerRightColumn",
                  class: N([
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
                  S("div", wm, [
                    S("div", xm, [
                      oe(
                        pe(Ra),
                        {
                          class: N({
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
                      S(
                        "p",
                        {
                          class: N([
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
                  oe(
                    pe(Qv),
                    {
                      class: N([
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
                      onClick: o[0] || (o[0] = (f) => i()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  oe(pe(oi), null, {
                    default: Ke(() => [
                      oe(
                        pe(Uo),
                        {
                          "aria-label": "Toggle brightness dropdown menu",
                          class: N([
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
                          default: Ke(() => [
                            n.value == 5
                              ? (he(),
                                st(pe(am), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (he(),
                                  st(pe(Kv), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (he(),
                                    st(pe(Yv), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (he(),
                                      st(pe(tm), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (he(),
                                      st(pe(em), {
                                        key: 4,
                                        class: "text-slate-400",
                                      })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      oe(
                        pe(Yo),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: Ke(() => [
                            S("div", Sm, [
                              S("div", Em, [
                                Qu(
                                  S(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        o[1] || (o[1] = (f) => (n.value = f)),
                                      onInput: s,
                                      class: "slider w-20 mx-auto",
                                      id: "myRange",
                                    },
                                    null,
                                    544,
                                  ),
                                  [[iv, n.value]],
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
              _m,
            ]),
            S(
              "div",
              {
                id: "mobileMenu",
                class: N([
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
                S("div", Cm, [
                  S("div", Tm, [
                    oe(
                      pe(Ra),
                      {
                        class: N({
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
                    S(
                      "p",
                      {
                        class: N([
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
                  oe(
                    pe(ui),
                    {
                      class: N({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: o[2] || (o[2] = (f) => i()),
                      "aria-label": "Close mobile menu",
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                S(
                  "ul",
                  {
                    class: N([
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
                  km,
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
  $m = Zn(Mm, [["__scopeId", "data-v-4577d950"]]),
  Im = { class: "flex justify-center py-5 flex-col" },
  Om = { class: "inline-block relative" },
  Am = { class: "font-semibold text-center px-1" },
  Lm = { class: "flex py-5 justify-center gap-3 w-full" },
  Nm = { href: "/portfolio" },
  Rm = { href: "/pricing" },
  Bm = {
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
  zm = Object.assign(Bm, {
    __name: "Hero",
    props: { brightness: Number },
    setup(e) {
      const t = be([
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
      let n = be(0),
        r = be(!1)
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
          Nn(() => {
            window.removeEventListener("mousedown", a),
              window.removeEventListener("mouseup", i)
          })
      }),
        Ri(() => {
          r.value = !1
        })
      const s = me(() => t.value[n.value])
      return (a, i) => {
        const l = q0("typewriter")
        return (
          he(),
          Oe("div", Im, [
            S(
              "h1",
              {
                class: N([
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
                Ee(" I make "),
                S("div", Om, [
                  Qu((he(), Oe("span", Am, [Ee(At(s.value), 1)])), [
                    [l, s.value],
                  ]),
                  S(
                    "div",
                    {
                      class: N([
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
                Ee(" websites. "),
              ],
              2,
            ),
            S(
              "p",
              {
                class: N([
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
            S("div", Lm, [
              S("a", Nm, [
                S(
                  "button",
                  {
                    "aria-label": "View my portfolio",
                    class: N([
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
              ]),
              S("a", Rm, [
                S(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    class: N([
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
var Fm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {}
function jm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var kc = { exports: {} }
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
  })(Fm, function () {
    for (
      var n = function (u, d, h) {
          return (
            d === void 0 && (d = 0),
            h === void 0 && (h = 1),
            u < d ? d : u > h ? h : u
          )
        },
        r = n,
        s = function (u) {
          ;(u._clipped = !1), (u._unclipped = u.slice(0))
          for (var d = 0; d <= 3; d++)
            d < 3
              ? ((u[d] < 0 || u[d] > 255) && (u._clipped = !0),
                (u[d] = r(u[d], 0, 255)))
              : d === 3 && (u[d] = r(u[d], 0, 1))
          return u
        },
        a = {},
        i = 0,
        l = [
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
      i < l.length;
      i += 1
    ) {
      var o = l[i]
      a["[object " + o + "]"] = o.toLowerCase()
    }
    var f = function (u) {
        return a[Object.prototype.toString.call(u)] || "object"
      },
      c = f,
      p = function (u, d) {
        return (
          d === void 0 && (d = null),
          u.length >= 3
            ? Array.prototype.slice.call(u)
            : c(u[0]) == "object" && d
              ? d
                  .split("")
                  .filter(function (h) {
                    return u[0][h] !== void 0
                  })
                  .map(function (h) {
                    return u[0][h]
                  })
              : u[0]
        )
      },
      v = f,
      m = function (u) {
        if (u.length < 2) return null
        var d = u.length - 1
        return v(u[d]) == "string" ? u[d].toLowerCase() : null
      },
      k = Math.PI,
      g = {
        clip_rgb: s,
        limit: n,
        type: f,
        unpack: p,
        last: m,
        PI: k,
        TWOPI: k * 2,
        PITHIRD: k / 3,
        DEG2RAD: k / 180,
        RAD2DEG: 180 / k,
      },
      E = { format: {}, autodetect: [] },
      T = g.last,
      w = g.clip_rgb,
      y = g.type,
      $ = E,
      L = function () {
        for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h]
        var b = this
        if (
          y(d[0]) === "object" &&
          d[0].constructor &&
          d[0].constructor === this.constructor
        )
          return d[0]
        var P = T(d),
          M = !1
        if (!P) {
          ;(M = !0),
            $.sorted ||
              (($.autodetect = $.autodetect.sort(function (W, se) {
                return se.p - W.p
              })),
              ($.sorted = !0))
          for (var _ = 0, O = $.autodetect; _ < O.length; _ += 1) {
            var A = O[_]
            if (((P = A.test.apply(A, d)), P)) break
          }
        }
        if ($.format[P]) {
          var B = $.format[P].apply(null, M ? d : d.slice(0, -1))
          b._rgb = w(B)
        } else throw new Error("unknown format: " + d)
        b._rgb.length === 3 && b._rgb.push(1)
      }
    L.prototype.toString = function () {
      return y(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var I = L,
      ne = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(ne.Color, [null].concat(u)))()
      }
    ;(ne.Color = I), (ne.version = "2.4.2")
    var q = ne,
      G = g.unpack,
      D = Math.max,
      Q = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = G(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2]
        ;(b = b / 255), (P = P / 255), (M = M / 255)
        var _ = 1 - D(b, D(P, M)),
          O = _ < 1 ? 1 / (1 - _) : 0,
          A = (1 - b - _) * O,
          B = (1 - P - _) * O,
          W = (1 - M - _) * O
        return [A, B, W, _]
      },
      ge = Q,
      X = g.unpack,
      xe = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = X(u, "cmyk")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = u[3],
          _ = u.length > 4 ? u[4] : 1
        return M === 1
          ? [0, 0, 0, _]
          : [
              h >= 1 ? 0 : 255 * (1 - h) * (1 - M),
              b >= 1 ? 0 : 255 * (1 - b) * (1 - M),
              P >= 1 ? 0 : 255 * (1 - P) * (1 - M),
              _,
            ]
      },
      Ce = xe,
      j = q,
      ie = I,
      V = E,
      Ue = g.unpack,
      Pe = g.type,
      Qe = ge
    ;(ie.prototype.cmyk = function () {
      return Qe(this._rgb)
    }),
      (j.cmyk = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ie,
          [null].concat(u, ["cmyk"]),
        ))()
      }),
      (V.format.cmyk = Ce),
      V.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Ue(u, "cmyk")), Pe(u) === "array" && u.length === 4))
            return "cmyk"
        },
      })
    var et = g.unpack,
      Kt = g.last,
      Ft = function (u) {
        return Math.round(u * 100) / 100
      },
      Ct = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = et(u, "hsla"),
          b = Kt(u) || "lsa"
        return (
          (h[0] = Ft(h[0] || 0)),
          (h[1] = Ft(h[1] * 100) + "%"),
          (h[2] = Ft(h[2] * 100) + "%"),
          b === "hsla" || (h.length > 3 && h[3] < 1)
            ? ((h[3] = h.length > 3 ? h[3] : 1), (b = "hsla"))
            : (h.length = 3),
          b + "(" + h.join(",") + ")"
        )
      },
      at = Ct,
      z = g.unpack,
      ae = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = z(u, "rgba")
        var h = u[0],
          b = u[1],
          P = u[2]
        ;(h /= 255), (b /= 255), (P /= 255)
        var M = Math.min(h, b, P),
          _ = Math.max(h, b, P),
          O = (_ + M) / 2,
          A,
          B
        return (
          _ === M
            ? ((A = 0), (B = Number.NaN))
            : (A = O < 0.5 ? (_ - M) / (_ + M) : (_ - M) / (2 - _ - M)),
          h == _
            ? (B = (b - P) / (_ - M))
            : b == _
              ? (B = 2 + (P - h) / (_ - M))
              : P == _ && (B = 4 + (h - b) / (_ - M)),
          (B *= 60),
          B < 0 && (B += 360),
          u.length > 3 && u[3] !== void 0 ? [B, A, O, u[3]] : [B, A, O]
        )
      },
      te = ae,
      fe = g.unpack,
      ze = g.last,
      Xe = at,
      x = te,
      C = Math.round,
      R = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = fe(u, "rgba"),
          b = ze(u) || "rgb"
        return b.substr(0, 3) == "hsl"
          ? Xe(x(h), b)
          : ((h[0] = C(h[0])),
            (h[1] = C(h[1])),
            (h[2] = C(h[2])),
            (b === "rgba" || (h.length > 3 && h[3] < 1)) &&
              ((h[3] = h.length > 3 ? h[3] : 1), (b = "rgba")),
            b + "(" + h.slice(0, b === "rgb" ? 3 : 4).join(",") + ")")
      },
      H = R,
      F = g.unpack,
      J = Math.round,
      re = function () {
        for (var u, d = [], h = arguments.length; h--; ) d[h] = arguments[h]
        d = F(d, "hsl")
        var b = d[0],
          P = d[1],
          M = d[2],
          _,
          O,
          A
        if (P === 0) _ = O = A = M * 255
        else {
          var B = [0, 0, 0],
            W = [0, 0, 0],
            se = M < 0.5 ? M * (1 + P) : M + P - M * P,
            Y = 2 * M - se,
            ce = b / 360
          ;(B[0] = ce + 1 / 3), (B[1] = ce), (B[2] = ce - 1 / 3)
          for (var ue = 0; ue < 3; ue++)
            B[ue] < 0 && (B[ue] += 1),
              B[ue] > 1 && (B[ue] -= 1),
              6 * B[ue] < 1
                ? (W[ue] = Y + (se - Y) * 6 * B[ue])
                : 2 * B[ue] < 1
                  ? (W[ue] = se)
                  : 3 * B[ue] < 2
                    ? (W[ue] = Y + (se - Y) * (2 / 3 - B[ue]) * 6)
                    : (W[ue] = Y)
          ;(u = [J(W[0] * 255), J(W[1] * 255), J(W[2] * 255)]),
            (_ = u[0]),
            (O = u[1]),
            (A = u[2])
        }
        return d.length > 3 ? [_, O, A, d[3]] : [_, O, A, 1]
      },
      Z = re,
      ee = Z,
      U = E,
      le = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      ye =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      ve =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Se =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      ke =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Fe =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Ye = Math.round,
      rt = function (u) {
        u = u.toLowerCase().trim()
        var d
        if (U.format.named)
          try {
            return U.format.named(u)
          } catch {}
        if ((d = u.match(le))) {
          for (var h = d.slice(1, 4), b = 0; b < 3; b++) h[b] = +h[b]
          return (h[3] = 1), h
        }
        if ((d = u.match(ye))) {
          for (var P = d.slice(1, 5), M = 0; M < 4; M++) P[M] = +P[M]
          return P
        }
        if ((d = u.match(ve))) {
          for (var _ = d.slice(1, 4), O = 0; O < 3; O++) _[O] = Ye(_[O] * 2.55)
          return (_[3] = 1), _
        }
        if ((d = u.match(Se))) {
          for (var A = d.slice(1, 5), B = 0; B < 3; B++) A[B] = Ye(A[B] * 2.55)
          return (A[3] = +A[3]), A
        }
        if ((d = u.match(ke))) {
          var W = d.slice(1, 4)
          ;(W[1] *= 0.01), (W[2] *= 0.01)
          var se = ee(W)
          return (se[3] = 1), se
        }
        if ((d = u.match(Fe))) {
          var Y = d.slice(1, 4)
          ;(Y[1] *= 0.01), (Y[2] *= 0.01)
          var ce = ee(Y)
          return (ce[3] = +d[4]), ce
        }
      }
    rt.test = function (u) {
      return (
        le.test(u) ||
        ye.test(u) ||
        ve.test(u) ||
        Se.test(u) ||
        ke.test(u) ||
        Fe.test(u)
      )
    }
    var $t = rt,
      mn = q,
      kr = I,
      bn = E,
      Jr = g.type,
      Et = H,
      It = $t
    ;(kr.prototype.css = function (u) {
      return Et(this._rgb, u)
    }),
      (mn.css = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          kr,
          [null].concat(u, ["css"]),
        ))()
      }),
      (bn.format.css = It),
      bn.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && Jr(u) === "string" && It.test(u)) return "css"
        },
      })
    var Mr = I,
      Qc = q,
      ed = E,
      td = g.unpack
    ;(ed.format.gl = function () {
      for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
      var h = td(u, "rgba")
      return (h[0] *= 255), (h[1] *= 255), (h[2] *= 255), h
    }),
      (Qc.gl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Mr,
          [null].concat(u, ["gl"]),
        ))()
      }),
      (Mr.prototype.gl = function () {
        var u = this._rgb
        return [u[0] / 255, u[1] / 255, u[2] / 255, u[3]]
      })
    var nd = g.unpack,
      rd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = nd(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = Math.min(b, P, M),
          O = Math.max(b, P, M),
          A = O - _,
          B = (A * 100) / 255,
          W = (_ / (255 - A)) * 100,
          se
        return (
          A === 0
            ? (se = Number.NaN)
            : (b === O && (se = (P - M) / A),
              P === O && (se = 2 + (M - b) / A),
              M === O && (se = 4 + (b - P) / A),
              (se *= 60),
              se < 0 && (se += 360)),
          [se, B, W]
        )
      },
      sd = rd,
      ad = g.unpack,
      id = Math.floor,
      ld = function () {
        for (var u, d, h, b, P, M, _ = [], O = arguments.length; O--; )
          _[O] = arguments[O]
        _ = ad(_, "hcg")
        var A = _[0],
          B = _[1],
          W = _[2],
          se,
          Y,
          ce
        W = W * 255
        var ue = B * 255
        if (B === 0) se = Y = ce = W
        else {
          A === 360 && (A = 0),
            A > 360 && (A -= 360),
            A < 0 && (A += 360),
            (A /= 60)
          var Me = id(A),
            Ae = A - Me,
            Ne = W * (1 - B),
            je = Ne + ue * (1 - Ae),
            vt = Ne + ue * Ae,
            pt = Ne + ue
          switch (Me) {
            case 0:
              ;(u = [pt, vt, Ne]), (se = u[0]), (Y = u[1]), (ce = u[2])
              break
            case 1:
              ;(d = [je, pt, Ne]), (se = d[0]), (Y = d[1]), (ce = d[2])
              break
            case 2:
              ;(h = [Ne, pt, vt]), (se = h[0]), (Y = h[1]), (ce = h[2])
              break
            case 3:
              ;(b = [Ne, je, pt]), (se = b[0]), (Y = b[1]), (ce = b[2])
              break
            case 4:
              ;(P = [vt, Ne, pt]), (se = P[0]), (Y = P[1]), (ce = P[2])
              break
            case 5:
              ;(M = [pt, Ne, je]), (se = M[0]), (Y = M[1]), (ce = M[2])
              break
          }
        }
        return [se, Y, ce, _.length > 3 ? _[3] : 1]
      },
      od = ld,
      ud = g.unpack,
      cd = g.type,
      dd = q,
      Ji = I,
      Qi = E,
      fd = sd
    ;(Ji.prototype.hcg = function () {
      return fd(this._rgb)
    }),
      (dd.hcg = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Ji,
          [null].concat(u, ["hcg"]),
        ))()
      }),
      (Qi.format.hcg = od),
      Qi.autodetect.push({
        p: 1,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = ud(u, "hcg")), cd(u) === "array" && u.length === 3))
            return "hcg"
        },
      })
    var pd = g.unpack,
      hd = g.last,
      Qr = Math.round,
      gd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = pd(u, "rgba"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = h[3],
          O = hd(u) || "auto"
        _ === void 0 && (_ = 1),
          O === "auto" && (O = _ < 1 ? "rgba" : "rgb"),
          (b = Qr(b)),
          (P = Qr(P)),
          (M = Qr(M))
        var A = (b << 16) | (P << 8) | M,
          B = "000000" + A.toString(16)
        B = B.substr(B.length - 6)
        var W = "0" + Qr(_ * 255).toString(16)
        switch (((W = W.substr(W.length - 2)), O.toLowerCase())) {
          case "rgba":
            return "#" + B + W
          case "argb":
            return "#" + W + B
          default:
            return "#" + B
        }
      },
      el = gd,
      vd = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      md = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      bd = function (u) {
        if (u.match(vd)) {
          ;(u.length === 4 || u.length === 7) && (u = u.substr(1)),
            u.length === 3 &&
              ((u = u.split("")), (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]))
          var d = parseInt(u, 16),
            h = d >> 16,
            b = (d >> 8) & 255,
            P = d & 255
          return [h, b, P, 1]
        }
        if (u.match(md)) {
          ;(u.length === 5 || u.length === 9) && (u = u.substr(1)),
            u.length === 4 &&
              ((u = u.split("")),
              (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2] + u[3] + u[3]))
          var M = parseInt(u, 16),
            _ = (M >> 24) & 255,
            O = (M >> 16) & 255,
            A = (M >> 8) & 255,
            B = Math.round(((M & 255) / 255) * 100) / 100
          return [_, O, A, B]
        }
        throw new Error("unknown hex color: " + u)
      },
      tl = bd,
      yd = q,
      nl = I,
      wd = g.type,
      rl = E,
      xd = el
    ;(nl.prototype.hex = function (u) {
      return xd(this._rgb, u)
    }),
      (yd.hex = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          nl,
          [null].concat(u, ["hex"]),
        ))()
      }),
      (rl.format.hex = tl),
      rl.autodetect.push({
        p: 4,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (
            !d.length &&
            wd(u) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(u.length) >= 0
          )
            return "hex"
        },
      })
    var Sd = g.unpack,
      sl = g.TWOPI,
      Ed = Math.min,
      _d = Math.sqrt,
      Cd = Math.acos,
      Td = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Sd(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2]
        ;(b /= 255), (P /= 255), (M /= 255)
        var _,
          O = Ed(b, P, M),
          A = (b + P + M) / 3,
          B = A > 0 ? 1 - O / A : 0
        return (
          B === 0
            ? (_ = NaN)
            : ((_ = (b - P + (b - M)) / 2),
              (_ /= _d((b - P) * (b - P) + (b - M) * (P - M))),
              (_ = Cd(_)),
              M > P && (_ = sl - _),
              (_ /= sl)),
          [_ * 360, B, A]
        )
      },
      Pd = Td,
      kd = g.unpack,
      ea = g.limit,
      Qn = g.TWOPI,
      ta = g.PITHIRD,
      er = Math.cos,
      Md = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = kd(u, "hsi")
        var h = u[0],
          b = u[1],
          P = u[2],
          M,
          _,
          O
        return (
          isNaN(h) && (h = 0),
          isNaN(b) && (b = 0),
          h > 360 && (h -= 360),
          h < 0 && (h += 360),
          (h /= 360),
          h < 1 / 3
            ? ((O = (1 - b) / 3),
              (M = (1 + (b * er(Qn * h)) / er(ta - Qn * h)) / 3),
              (_ = 1 - (O + M)))
            : h < 2 / 3
              ? ((h -= 1 / 3),
                (M = (1 - b) / 3),
                (_ = (1 + (b * er(Qn * h)) / er(ta - Qn * h)) / 3),
                (O = 1 - (M + _)))
              : ((h -= 2 / 3),
                (_ = (1 - b) / 3),
                (O = (1 + (b * er(Qn * h)) / er(ta - Qn * h)) / 3),
                (M = 1 - (_ + O))),
          (M = ea(P * M * 3)),
          (_ = ea(P * _ * 3)),
          (O = ea(P * O * 3)),
          [M * 255, _ * 255, O * 255, u.length > 3 ? u[3] : 1]
        )
      },
      $d = Md,
      Id = g.unpack,
      Od = g.type,
      Ad = q,
      al = I,
      il = E,
      Ld = Pd
    ;(al.prototype.hsi = function () {
      return Ld(this._rgb)
    }),
      (Ad.hsi = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          al,
          [null].concat(u, ["hsi"]),
        ))()
      }),
      (il.format.hsi = $d),
      il.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Id(u, "hsi")), Od(u) === "array" && u.length === 3))
            return "hsi"
        },
      })
    var Nd = g.unpack,
      Rd = g.type,
      Bd = q,
      ll = I,
      ol = E,
      zd = te
    ;(ll.prototype.hsl = function () {
      return zd(this._rgb)
    }),
      (Bd.hsl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ll,
          [null].concat(u, ["hsl"]),
        ))()
      }),
      (ol.format.hsl = Z),
      ol.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Nd(u, "hsl")), Rd(u) === "array" && u.length === 3))
            return "hsl"
        },
      })
    var Fd = g.unpack,
      jd = Math.min,
      Dd = Math.max,
      Hd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Fd(u, "rgb")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = jd(h, b, P),
          _ = Dd(h, b, P),
          O = _ - M,
          A,
          B,
          W
        return (
          (W = _ / 255),
          _ === 0
            ? ((A = Number.NaN), (B = 0))
            : ((B = O / _),
              h === _ && (A = (b - P) / O),
              b === _ && (A = 2 + (P - h) / O),
              P === _ && (A = 4 + (h - b) / O),
              (A *= 60),
              A < 0 && (A += 360)),
          [A, B, W]
        )
      },
      Gd = Hd,
      Vd = g.unpack,
      Wd = Math.floor,
      qd = function () {
        for (var u, d, h, b, P, M, _ = [], O = arguments.length; O--; )
          _[O] = arguments[O]
        _ = Vd(_, "hsv")
        var A = _[0],
          B = _[1],
          W = _[2],
          se,
          Y,
          ce
        if (((W *= 255), B === 0)) se = Y = ce = W
        else {
          A === 360 && (A = 0),
            A > 360 && (A -= 360),
            A < 0 && (A += 360),
            (A /= 60)
          var ue = Wd(A),
            Me = A - ue,
            Ae = W * (1 - B),
            Ne = W * (1 - B * Me),
            je = W * (1 - B * (1 - Me))
          switch (ue) {
            case 0:
              ;(u = [W, je, Ae]), (se = u[0]), (Y = u[1]), (ce = u[2])
              break
            case 1:
              ;(d = [Ne, W, Ae]), (se = d[0]), (Y = d[1]), (ce = d[2])
              break
            case 2:
              ;(h = [Ae, W, je]), (se = h[0]), (Y = h[1]), (ce = h[2])
              break
            case 3:
              ;(b = [Ae, Ne, W]), (se = b[0]), (Y = b[1]), (ce = b[2])
              break
            case 4:
              ;(P = [je, Ae, W]), (se = P[0]), (Y = P[1]), (ce = P[2])
              break
            case 5:
              ;(M = [W, Ae, Ne]), (se = M[0]), (Y = M[1]), (ce = M[2])
              break
          }
        }
        return [se, Y, ce, _.length > 3 ? _[3] : 1]
      },
      Ud = qd,
      Yd = g.unpack,
      Kd = g.type,
      Xd = q,
      ul = I,
      cl = E,
      Zd = Gd
    ;(ul.prototype.hsv = function () {
      return Zd(this._rgb)
    }),
      (Xd.hsv = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ul,
          [null].concat(u, ["hsv"]),
        ))()
      }),
      (cl.format.hsv = Ud),
      cl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Yd(u, "hsv")), Kd(u) === "array" && u.length === 3))
            return "hsv"
        },
      })
    var es = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      tr = es,
      Jd = g.unpack,
      dl = Math.pow,
      Qd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Jd(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = ef(b, P, M),
          O = _[0],
          A = _[1],
          B = _[2],
          W = 116 * A - 16
        return [W < 0 ? 0 : W, 500 * (O - A), 200 * (A - B)]
      },
      na = function (u) {
        return (u /= 255) <= 0.04045 ? u / 12.92 : dl((u + 0.055) / 1.055, 2.4)
      },
      ra = function (u) {
        return u > tr.t3 ? dl(u, 1 / 3) : u / tr.t2 + tr.t0
      },
      ef = function (u, d, h) {
        ;(u = na(u)), (d = na(d)), (h = na(h))
        var b = ra((0.4124564 * u + 0.3575761 * d + 0.1804375 * h) / tr.Xn),
          P = ra((0.2126729 * u + 0.7151522 * d + 0.072175 * h) / tr.Yn),
          M = ra((0.0193339 * u + 0.119192 * d + 0.9503041 * h) / tr.Zn)
        return [b, P, M]
      },
      fl = Qd,
      nr = es,
      tf = g.unpack,
      nf = Math.pow,
      rf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = tf(u, "lab")
        var h = u[0],
          b = u[1],
          P = u[2],
          M,
          _,
          O,
          A,
          B,
          W
        return (
          (_ = (h + 16) / 116),
          (M = isNaN(b) ? _ : _ + b / 500),
          (O = isNaN(P) ? _ : _ - P / 200),
          (_ = nr.Yn * aa(_)),
          (M = nr.Xn * aa(M)),
          (O = nr.Zn * aa(O)),
          (A = sa(3.2404542 * M - 1.5371385 * _ - 0.4985314 * O)),
          (B = sa(-0.969266 * M + 1.8760108 * _ + 0.041556 * O)),
          (W = sa(0.0556434 * M - 0.2040259 * _ + 1.0572252 * O)),
          [A, B, W, u.length > 3 ? u[3] : 1]
        )
      },
      sa = function (u) {
        return 255 * (u <= 0.00304 ? 12.92 * u : 1.055 * nf(u, 1 / 2.4) - 0.055)
      },
      aa = function (u) {
        return u > nr.t1 ? u * u * u : nr.t2 * (u - nr.t0)
      },
      pl = rf,
      sf = g.unpack,
      af = g.type,
      lf = q,
      hl = I,
      gl = E,
      of = fl
    ;(hl.prototype.lab = function () {
      return of(this._rgb)
    }),
      (lf.lab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          hl,
          [null].concat(u, ["lab"]),
        ))()
      }),
      (gl.format.lab = pl),
      gl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = sf(u, "lab")), af(u) === "array" && u.length === 3))
            return "lab"
        },
      })
    var uf = g.unpack,
      cf = g.RAD2DEG,
      df = Math.sqrt,
      ff = Math.atan2,
      pf = Math.round,
      hf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = uf(u, "lab"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = df(P * P + M * M),
          O = (ff(M, P) * cf + 360) % 360
        return pf(_ * 1e4) === 0 && (O = Number.NaN), [b, _, O]
      },
      vl = hf,
      gf = g.unpack,
      vf = fl,
      mf = vl,
      bf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = gf(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = vf(b, P, M),
          O = _[0],
          A = _[1],
          B = _[2]
        return mf(O, A, B)
      },
      yf = bf,
      wf = g.unpack,
      xf = g.DEG2RAD,
      Sf = Math.sin,
      Ef = Math.cos,
      _f = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = wf(u, "lch"),
          b = h[0],
          P = h[1],
          M = h[2]
        return isNaN(M) && (M = 0), (M = M * xf), [b, Ef(M) * P, Sf(M) * P]
      },
      ml = _f,
      Cf = g.unpack,
      Tf = ml,
      Pf = pl,
      kf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Cf(u, "lch")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = Tf(h, b, P),
          _ = M[0],
          O = M[1],
          A = M[2],
          B = Pf(_, O, A),
          W = B[0],
          se = B[1],
          Y = B[2]
        return [W, se, Y, u.length > 3 ? u[3] : 1]
      },
      bl = kf,
      Mf = g.unpack,
      $f = bl,
      If = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Mf(u, "hcl").reverse()
        return $f.apply(void 0, h)
      },
      Of = If,
      Af = g.unpack,
      Lf = g.type,
      yl = q,
      ts = I,
      ia = E,
      wl = yf
    ;(ts.prototype.lch = function () {
      return wl(this._rgb)
    }),
      (ts.prototype.hcl = function () {
        return wl(this._rgb).reverse()
      }),
      (yl.lch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ts,
          [null].concat(u, ["lch"]),
        ))()
      }),
      (yl.hcl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ts,
          [null].concat(u, ["hcl"]),
        ))()
      }),
      (ia.format.lch = bl),
      (ia.format.hcl = Of),
      ["lch", "hcl"].forEach(function (u) {
        return ia.autodetect.push({
          p: 2,
          test: function () {
            for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h]
            if (((d = Af(d, u)), Lf(d) === "array" && d.length === 3)) return u
          },
        })
      })
    var Nf = {
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
      xl = Nf,
      Rf = I,
      Sl = E,
      Bf = g.type,
      $r = xl,
      zf = tl,
      Ff = el
    ;(Rf.prototype.name = function () {
      for (
        var u = Ff(this._rgb, "rgb"), d = 0, h = Object.keys($r);
        d < h.length;
        d += 1
      ) {
        var b = h[d]
        if ($r[b] === u) return b.toLowerCase()
      }
      return u
    }),
      (Sl.format.named = function (u) {
        if (((u = u.toLowerCase()), $r[u])) return zf($r[u])
        throw new Error("unknown color name: " + u)
      }),
      Sl.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && Bf(u) === "string" && $r[u.toLowerCase()])
            return "named"
        },
      })
    var jf = g.unpack,
      Df = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = jf(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2]
        return (b << 16) + (P << 8) + M
      },
      Hf = Df,
      Gf = g.type,
      Vf = function (u) {
        if (Gf(u) == "number" && u >= 0 && u <= 16777215) {
          var d = u >> 16,
            h = (u >> 8) & 255,
            b = u & 255
          return [d, h, b, 1]
        }
        throw new Error("unknown num color: " + u)
      },
      Wf = Vf,
      qf = q,
      El = I,
      _l = E,
      Uf = g.type,
      Yf = Hf
    ;(El.prototype.num = function () {
      return Yf(this._rgb)
    }),
      (qf.num = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          El,
          [null].concat(u, ["num"]),
        ))()
      }),
      (_l.format.num = Wf),
      _l.autodetect.push({
        p: 5,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            u.length === 1 &&
            Uf(u[0]) === "number" &&
            u[0] >= 0 &&
            u[0] <= 16777215
          )
            return "num"
        },
      })
    var Kf = q,
      la = I,
      Cl = E,
      Tl = g.unpack,
      Pl = g.type,
      kl = Math.round
    ;(la.prototype.rgb = function (u) {
      return (
        u === void 0 && (u = !0),
        u === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(kl)
      )
    }),
      (la.prototype.rgba = function (u) {
        return (
          u === void 0 && (u = !0),
          this._rgb.slice(0, 4).map(function (d, h) {
            return h < 3 ? (u === !1 ? d : kl(d)) : d
          })
        )
      }),
      (Kf.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          la,
          [null].concat(u, ["rgb"]),
        ))()
      }),
      (Cl.format.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Tl(u, "rgba")
        return h[3] === void 0 && (h[3] = 1), h
      }),
      Cl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            ((u = Tl(u, "rgba")),
            Pl(u) === "array" &&
              (u.length === 3 ||
                (u.length === 4 &&
                  Pl(u[3]) == "number" &&
                  u[3] >= 0 &&
                  u[3] <= 1)))
          )
            return "rgb"
        },
      })
    var ns = Math.log,
      Xf = function (u) {
        var d = u / 100,
          h,
          b,
          P
        return (
          d < 66
            ? ((h = 255),
              (b =
                d < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (b = d - 2) +
                    104.49216199393888 * ns(b)),
              (P =
                d < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (P = d - 10) +
                    115.67994401066147 * ns(P)))
            : ((h =
                351.97690566805693 +
                0.114206453784165 * (h = d - 55) -
                40.25366309332127 * ns(h)),
              (b =
                325.4494125711974 +
                0.07943456536662342 * (b = d - 50) -
                28.0852963507957 * ns(b)),
              (P = 255)),
          [h, b, P, 1]
        )
      },
      Ml = Xf,
      Zf = Ml,
      Jf = g.unpack,
      Qf = Math.round,
      ep = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        for (
          var h = Jf(u, "rgb"),
            b = h[0],
            P = h[2],
            M = 1e3,
            _ = 4e4,
            O = 0.4,
            A;
          _ - M > O;

        ) {
          A = (_ + M) * 0.5
          var B = Zf(A)
          B[2] / B[0] >= P / b ? (_ = A) : (M = A)
        }
        return Qf(A)
      },
      tp = ep,
      oa = q,
      rs = I,
      ua = E,
      np = tp
    ;(rs.prototype.temp =
      rs.prototype.kelvin =
      rs.prototype.temperature =
        function () {
          return np(this._rgb)
        }),
      (oa.temp =
        oa.kelvin =
        oa.temperature =
          function () {
            for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
            return new (Function.prototype.bind.apply(
              rs,
              [null].concat(u, ["temp"]),
            ))()
          }),
      (ua.format.temp = ua.format.kelvin = ua.format.temperature = Ml)
    var rp = g.unpack,
      ca = Math.cbrt,
      sp = Math.pow,
      ap = Math.sign,
      ip = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = rp(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = [da(b / 255), da(P / 255), da(M / 255)],
          O = _[0],
          A = _[1],
          B = _[2],
          W = ca(0.4122214708 * O + 0.5363325363 * A + 0.0514459929 * B),
          se = ca(0.2119034982 * O + 0.6806995451 * A + 0.1073969566 * B),
          Y = ca(0.0883024619 * O + 0.2817188376 * A + 0.6299787005 * B)
        return [
          0.2104542553 * W + 0.793617785 * se - 0.0040720468 * Y,
          1.9779984951 * W - 2.428592205 * se + 0.4505937099 * Y,
          0.0259040371 * W + 0.7827717662 * se - 0.808675766 * Y,
        ]
      },
      $l = ip
    function da(u) {
      var d = Math.abs(u)
      return d < 0.04045
        ? u / 12.92
        : (ap(u) || 1) * sp((d + 0.055) / 1.055, 2.4)
    }
    var lp = g.unpack,
      ss = Math.pow,
      op = Math.sign,
      up = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = lp(u, "lab")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = ss(h + 0.3963377774 * b + 0.2158037573 * P, 3),
          _ = ss(h - 0.1055613458 * b - 0.0638541728 * P, 3),
          O = ss(h - 0.0894841775 * b - 1.291485548 * P, 3)
        return [
          255 * fa(4.0767416621 * M - 3.3077115913 * _ + 0.2309699292 * O),
          255 * fa(-1.2684380046 * M + 2.6097574011 * _ - 0.3413193965 * O),
          255 * fa(-0.0041960863 * M - 0.7034186147 * _ + 1.707614701 * O),
          u.length > 3 ? u[3] : 1,
        ]
      },
      Il = up
    function fa(u) {
      var d = Math.abs(u)
      return d > 0.0031308
        ? (op(u) || 1) * (1.055 * ss(d, 1 / 2.4) - 0.055)
        : u * 12.92
    }
    var cp = g.unpack,
      dp = g.type,
      fp = q,
      Ol = I,
      Al = E,
      pp = $l
    ;(Ol.prototype.oklab = function () {
      return pp(this._rgb)
    }),
      (fp.oklab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Ol,
          [null].concat(u, ["oklab"]),
        ))()
      }),
      (Al.format.oklab = Il),
      Al.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = cp(u, "oklab")), dp(u) === "array" && u.length === 3))
            return "oklab"
        },
      })
    var hp = g.unpack,
      gp = $l,
      vp = vl,
      mp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = hp(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = gp(b, P, M),
          O = _[0],
          A = _[1],
          B = _[2]
        return vp(O, A, B)
      },
      bp = mp,
      yp = g.unpack,
      wp = ml,
      xp = Il,
      Sp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = yp(u, "lch")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = wp(h, b, P),
          _ = M[0],
          O = M[1],
          A = M[2],
          B = xp(_, O, A),
          W = B[0],
          se = B[1],
          Y = B[2]
        return [W, se, Y, u.length > 3 ? u[3] : 1]
      },
      Ep = Sp,
      _p = g.unpack,
      Cp = g.type,
      Tp = q,
      Ll = I,
      Nl = E,
      Pp = bp
    ;(Ll.prototype.oklch = function () {
      return Pp(this._rgb)
    }),
      (Tp.oklch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Ll,
          [null].concat(u, ["oklch"]),
        ))()
      }),
      (Nl.format.oklch = Ep),
      Nl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = _p(u, "oklch")), Cp(u) === "array" && u.length === 3))
            return "oklch"
        },
      })
    var Rl = I,
      kp = g.type
    Rl.prototype.alpha = function (u, d) {
      return (
        d === void 0 && (d = !1),
        u !== void 0 && kp(u) === "number"
          ? d
            ? ((this._rgb[3] = u), this)
            : new Rl([this._rgb[0], this._rgb[1], this._rgb[2], u], "rgb")
          : this._rgb[3]
      )
    }
    var Mp = I
    Mp.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var Rn = I,
      $p = es
    ;(Rn.prototype.darken = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lab()
      return (h[0] -= $p.Kn * u), new Rn(h, "lab").alpha(d.alpha(), !0)
    }),
      (Rn.prototype.brighten = function (u) {
        return u === void 0 && (u = 1), this.darken(-u)
      }),
      (Rn.prototype.darker = Rn.prototype.darken),
      (Rn.prototype.brighter = Rn.prototype.brighten)
    var Ip = I
    Ip.prototype.get = function (u) {
      var d = u.split("."),
        h = d[0],
        b = d[1],
        P = this[h]()
      if (b) {
        var M = h.indexOf(b) - (h.substr(0, 2) === "ok" ? 2 : 0)
        if (M > -1) return P[M]
        throw new Error("unknown channel " + b + " in mode " + h)
      } else return P
    }
    var rr = I,
      Op = g.type,
      Ap = Math.pow,
      Lp = 1e-7,
      Np = 20
    rr.prototype.luminance = function (u) {
      if (u !== void 0 && Op(u) === "number") {
        if (u === 0) return new rr([0, 0, 0, this._rgb[3]], "rgb")
        if (u === 1) return new rr([255, 255, 255, this._rgb[3]], "rgb")
        var d = this.luminance(),
          h = "rgb",
          b = Np,
          P = function (_, O) {
            var A = _.interpolate(O, 0.5, h),
              B = A.luminance()
            return Math.abs(u - B) < Lp || !b-- ? A : B > u ? P(_, A) : P(A, O)
          },
          M = (
            d > u
              ? P(new rr([0, 0, 0]), this)
              : P(this, new rr([255, 255, 255]))
          ).rgb()
        return new rr(M.concat([this._rgb[3]]))
      }
      return Rp.apply(void 0, this._rgb.slice(0, 3))
    }
    var Rp = function (u, d, h) {
        return (
          (u = pa(u)),
          (d = pa(d)),
          (h = pa(h)),
          0.2126 * u + 0.7152 * d + 0.0722 * h
        )
      },
      pa = function (u) {
        return (
          (u /= 255), u <= 0.03928 ? u / 12.92 : Ap((u + 0.055) / 1.055, 2.4)
        )
      },
      Ot = {},
      Bl = I,
      zl = g.type,
      as = Ot,
      Fl = function (u, d, h) {
        h === void 0 && (h = 0.5)
        for (var b = [], P = arguments.length - 3; P-- > 0; )
          b[P] = arguments[P + 3]
        var M = b[0] || "lrgb"
        if ((!as[M] && !b.length && (M = Object.keys(as)[0]), !as[M]))
          throw new Error("interpolation mode " + M + " is not defined")
        return (
          zl(u) !== "object" && (u = new Bl(u)),
          zl(d) !== "object" && (d = new Bl(d)),
          as[M](u, d, h).alpha(u.alpha() + h * (d.alpha() - u.alpha()))
        )
      },
      jl = I,
      Bp = Fl
    jl.prototype.mix = jl.prototype.interpolate = function (u, d) {
      d === void 0 && (d = 0.5)
      for (var h = [], b = arguments.length - 2; b-- > 0; )
        h[b] = arguments[b + 2]
      return Bp.apply(void 0, [this, u, d].concat(h))
    }
    var Dl = I
    Dl.prototype.premultiply = function (u) {
      u === void 0 && (u = !1)
      var d = this._rgb,
        h = d[3]
      return u
        ? ((this._rgb = [d[0] * h, d[1] * h, d[2] * h, h]), this)
        : new Dl([d[0] * h, d[1] * h, d[2] * h, h], "rgb")
    }
    var ha = I,
      zp = es
    ;(ha.prototype.saturate = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lch()
      return (
        (h[1] += zp.Kn * u),
        h[1] < 0 && (h[1] = 0),
        new ha(h, "lch").alpha(d.alpha(), !0)
      )
    }),
      (ha.prototype.desaturate = function (u) {
        return u === void 0 && (u = 1), this.saturate(-u)
      })
    var Hl = I,
      Gl = g.type
    Hl.prototype.set = function (u, d, h) {
      h === void 0 && (h = !1)
      var b = u.split("."),
        P = b[0],
        M = b[1],
        _ = this[P]()
      if (M) {
        var O = P.indexOf(M) - (P.substr(0, 2) === "ok" ? 2 : 0)
        if (O > -1) {
          if (Gl(d) == "string")
            switch (d.charAt(0)) {
              case "+":
                _[O] += +d
                break
              case "-":
                _[O] += +d
                break
              case "*":
                _[O] *= +d.substr(1)
                break
              case "/":
                _[O] /= +d.substr(1)
                break
              default:
                _[O] = +d
            }
          else if (Gl(d) === "number") _[O] = d
          else throw new Error("unsupported value for Color.set")
          var A = new Hl(_, P)
          return h ? ((this._rgb = A._rgb), this) : A
        }
        throw new Error("unknown channel " + M + " in mode " + P)
      } else return _
    }
    var Fp = I,
      jp = function (u, d, h) {
        var b = u._rgb,
          P = d._rgb
        return new Fp(
          b[0] + h * (P[0] - b[0]),
          b[1] + h * (P[1] - b[1]),
          b[2] + h * (P[2] - b[2]),
          "rgb",
        )
      }
    Ot.rgb = jp
    var Dp = I,
      ga = Math.sqrt,
      sr = Math.pow,
      Hp = function (u, d, h) {
        var b = u._rgb,
          P = b[0],
          M = b[1],
          _ = b[2],
          O = d._rgb,
          A = O[0],
          B = O[1],
          W = O[2]
        return new Dp(
          ga(sr(P, 2) * (1 - h) + sr(A, 2) * h),
          ga(sr(M, 2) * (1 - h) + sr(B, 2) * h),
          ga(sr(_, 2) * (1 - h) + sr(W, 2) * h),
          "rgb",
        )
      }
    Ot.lrgb = Hp
    var Gp = I,
      Vp = function (u, d, h) {
        var b = u.lab(),
          P = d.lab()
        return new Gp(
          b[0] + h * (P[0] - b[0]),
          b[1] + h * (P[1] - b[1]),
          b[2] + h * (P[2] - b[2]),
          "lab",
        )
      }
    Ot.lab = Vp
    var Vl = I,
      ar = function (u, d, h, b) {
        var P, M, _, O
        b === "hsl"
          ? ((_ = u.hsl()), (O = d.hsl()))
          : b === "hsv"
            ? ((_ = u.hsv()), (O = d.hsv()))
            : b === "hcg"
              ? ((_ = u.hcg()), (O = d.hcg()))
              : b === "hsi"
                ? ((_ = u.hsi()), (O = d.hsi()))
                : b === "lch" || b === "hcl"
                  ? ((b = "hcl"), (_ = u.hcl()), (O = d.hcl()))
                  : b === "oklch" &&
                    ((_ = u.oklch().reverse()), (O = d.oklch().reverse()))
        var A, B, W, se, Y, ce
        ;(b.substr(0, 1) === "h" || b === "oklch") &&
          ((P = _),
          (A = P[0]),
          (W = P[1]),
          (Y = P[2]),
          (M = O),
          (B = M[0]),
          (se = M[1]),
          (ce = M[2]))
        var ue, Me, Ae, Ne
        return (
          !isNaN(A) && !isNaN(B)
            ? (B > A && B - A > 180
                ? (Ne = B - (A + 360))
                : B < A && A - B > 180
                  ? (Ne = B + 360 - A)
                  : (Ne = B - A),
              (Me = A + h * Ne))
            : isNaN(A)
              ? isNaN(B)
                ? (Me = Number.NaN)
                : ((Me = B), (Y == 1 || Y == 0) && b != "hsv" && (ue = se))
              : ((Me = A), (ce == 1 || ce == 0) && b != "hsv" && (ue = W)),
          ue === void 0 && (ue = W + h * (se - W)),
          (Ae = Y + h * (ce - Y)),
          b === "oklch" ? new Vl([Ae, ue, Me], b) : new Vl([Me, ue, Ae], b)
        )
      },
      Wp = ar,
      Wl = function (u, d, h) {
        return Wp(u, d, h, "lch")
      }
    ;(Ot.lch = Wl), (Ot.hcl = Wl)
    var qp = I,
      Up = function (u, d, h) {
        var b = u.num(),
          P = d.num()
        return new qp(b + h * (P - b), "num")
      }
    Ot.num = Up
    var Yp = ar,
      Kp = function (u, d, h) {
        return Yp(u, d, h, "hcg")
      }
    Ot.hcg = Kp
    var Xp = ar,
      Zp = function (u, d, h) {
        return Xp(u, d, h, "hsi")
      }
    Ot.hsi = Zp
    var Jp = ar,
      Qp = function (u, d, h) {
        return Jp(u, d, h, "hsl")
      }
    Ot.hsl = Qp
    var eh = ar,
      th = function (u, d, h) {
        return eh(u, d, h, "hsv")
      }
    Ot.hsv = th
    var nh = I,
      rh = function (u, d, h) {
        var b = u.oklab(),
          P = d.oklab()
        return new nh(
          b[0] + h * (P[0] - b[0]),
          b[1] + h * (P[1] - b[1]),
          b[2] + h * (P[2] - b[2]),
          "oklab",
        )
      }
    Ot.oklab = rh
    var sh = ar,
      ah = function (u, d, h) {
        return sh(u, d, h, "oklch")
      }
    Ot.oklch = ah
    var va = I,
      ih = g.clip_rgb,
      ma = Math.pow,
      ba = Math.sqrt,
      ya = Math.PI,
      ql = Math.cos,
      Ul = Math.sin,
      lh = Math.atan2,
      oh = function (u, d, h) {
        d === void 0 && (d = "lrgb"), h === void 0 && (h = null)
        var b = u.length
        h ||
          (h = Array.from(new Array(b)).map(function () {
            return 1
          }))
        var P =
          b /
          h.reduce(function (Me, Ae) {
            return Me + Ae
          })
        if (
          (h.forEach(function (Me, Ae) {
            h[Ae] *= P
          }),
          (u = u.map(function (Me) {
            return new va(Me)
          })),
          d === "lrgb")
        )
          return uh(u, h)
        for (
          var M = u.shift(), _ = M.get(d), O = [], A = 0, B = 0, W = 0;
          W < _.length;
          W++
        )
          if (
            ((_[W] = (_[W] || 0) * h[0]),
            O.push(isNaN(_[W]) ? 0 : h[0]),
            d.charAt(W) === "h" && !isNaN(_[W]))
          ) {
            var se = (_[W] / 180) * ya
            ;(A += ql(se) * h[0]), (B += Ul(se) * h[0])
          }
        var Y = M.alpha() * h[0]
        u.forEach(function (Me, Ae) {
          var Ne = Me.get(d)
          Y += Me.alpha() * h[Ae + 1]
          for (var je = 0; je < _.length; je++)
            if (!isNaN(Ne[je]))
              if (((O[je] += h[Ae + 1]), d.charAt(je) === "h")) {
                var vt = (Ne[je] / 180) * ya
                ;(A += ql(vt) * h[Ae + 1]), (B += Ul(vt) * h[Ae + 1])
              } else _[je] += Ne[je] * h[Ae + 1]
        })
        for (var ce = 0; ce < _.length; ce++)
          if (d.charAt(ce) === "h") {
            for (var ue = (lh(B / O[ce], A / O[ce]) / ya) * 180; ue < 0; )
              ue += 360
            for (; ue >= 360; ) ue -= 360
            _[ce] = ue
          } else _[ce] = _[ce] / O[ce]
        return (Y /= b), new va(_, d).alpha(Y > 0.99999 ? 1 : Y, !0)
      },
      uh = function (u, d) {
        for (var h = u.length, b = [0, 0, 0, 0], P = 0; P < u.length; P++) {
          var M = u[P],
            _ = d[P] / h,
            O = M._rgb
          ;(b[0] += ma(O[0], 2) * _),
            (b[1] += ma(O[1], 2) * _),
            (b[2] += ma(O[2], 2) * _),
            (b[3] += O[3] * _)
        }
        return (
          (b[0] = ba(b[0])),
          (b[1] = ba(b[1])),
          (b[2] = ba(b[2])),
          b[3] > 0.9999999 && (b[3] = 1),
          new va(ih(b))
        )
      },
      Ht = q,
      ir = g.type,
      ch = Math.pow,
      wa = function (u) {
        var d = "rgb",
          h = Ht("#ccc"),
          b = 0,
          P = [0, 1],
          M = [],
          _ = [0, 0],
          O = !1,
          A = [],
          B = !1,
          W = 0,
          se = 1,
          Y = !1,
          ce = {},
          ue = !0,
          Me = 1,
          Ae = function (K) {
            if (
              ((K = K || ["#fff", "#000"]),
              K &&
                ir(K) === "string" &&
                Ht.brewer &&
                Ht.brewer[K.toLowerCase()] &&
                (K = Ht.brewer[K.toLowerCase()]),
              ir(K) === "array")
            ) {
              K.length === 1 && (K = [K[0], K[0]]), (K = K.slice(0))
              for (var we = 0; we < K.length; we++) K[we] = Ht(K[we])
              M.length = 0
              for (var Ie = 0; Ie < K.length; Ie++) M.push(Ie / (K.length - 1))
            }
            return Tt(), (A = K)
          },
          Ne = function (K) {
            if (O != null) {
              for (var we = O.length - 1, Ie = 0; Ie < we && K >= O[Ie]; ) Ie++
              return Ie - 1
            }
            return 0
          },
          je = function (K) {
            return K
          },
          vt = function (K) {
            return K
          },
          pt = function (K, we) {
            var Ie, $e
            if ((we == null && (we = !1), isNaN(K) || K === null)) return h
            if (we) $e = K
            else if (O && O.length > 2) {
              var mt = Ne(K)
              $e = mt / (O.length - 2)
            } else se !== W ? ($e = (K - W) / (se - W)) : ($e = 1)
            ;($e = vt($e)),
              we || ($e = je($e)),
              Me !== 1 && ($e = ch($e, Me)),
              ($e = _[0] + $e * (1 - _[0] - _[1])),
              ($e = Math.min(1, Math.max(0, $e)))
            var Ze = Math.floor($e * 1e4)
            if (ue && ce[Ze]) Ie = ce[Ze]
            else {
              if (ir(A) === "array")
                for (var Re = 0; Re < M.length; Re++) {
                  var He = M[Re]
                  if ($e <= He) {
                    Ie = A[Re]
                    break
                  }
                  if ($e >= He && Re === M.length - 1) {
                    Ie = A[Re]
                    break
                  }
                  if ($e > He && $e < M[Re + 1]) {
                    ;($e = ($e - He) / (M[Re + 1] - He)),
                      (Ie = Ht.interpolate(A[Re], A[Re + 1], $e, d))
                    break
                  }
                }
              else ir(A) === "function" && (Ie = A($e))
              ue && (ce[Ze] = Ie)
            }
            return Ie
          },
          Tt = function () {
            return (ce = {})
          }
        Ae(u)
        var Le = function (K) {
          var we = Ht(pt(K))
          return B && we[B] ? we[B]() : we
        }
        return (
          (Le.classes = function (K) {
            if (K != null) {
              if (ir(K) === "array") (O = K), (P = [K[0], K[K.length - 1]])
              else {
                var we = Ht.analyze(P)
                K === 0 ? (O = [we.min, we.max]) : (O = Ht.limits(we, "e", K))
              }
              return Le
            }
            return O
          }),
          (Le.domain = function (K) {
            if (!arguments.length) return P
            ;(W = K[0]), (se = K[K.length - 1]), (M = [])
            var we = A.length
            if (K.length === we && W !== se)
              for (var Ie = 0, $e = Array.from(K); Ie < $e.length; Ie += 1) {
                var mt = $e[Ie]
                M.push((mt - W) / (se - W))
              }
            else {
              for (var Ze = 0; Ze < we; Ze++) M.push(Ze / (we - 1))
              if (K.length > 2) {
                var Re = K.map(function (Ge, Ve) {
                    return Ve / (K.length - 1)
                  }),
                  He = K.map(function (Ge) {
                    return (Ge - W) / (se - W)
                  })
                He.every(function (Ge, Ve) {
                  return Re[Ve] === Ge
                }) ||
                  (vt = function (Ge) {
                    if (Ge <= 0 || Ge >= 1) return Ge
                    for (var Ve = 0; Ge >= He[Ve + 1]; ) Ve++
                    var Vt = (Ge - He[Ve]) / (He[Ve + 1] - He[Ve]),
                      xn = Re[Ve] + Vt * (Re[Ve + 1] - Re[Ve])
                    return xn
                  })
              }
            }
            return (P = [W, se]), Le
          }),
          (Le.mode = function (K) {
            return arguments.length ? ((d = K), Tt(), Le) : d
          }),
          (Le.range = function (K, we) {
            return Ae(K), Le
          }),
          (Le.out = function (K) {
            return (B = K), Le
          }),
          (Le.spread = function (K) {
            return arguments.length ? ((b = K), Le) : b
          }),
          (Le.correctLightness = function (K) {
            return (
              K == null && (K = !0),
              (Y = K),
              Tt(),
              Y
                ? (je = function (we) {
                    for (
                      var Ie = pt(0, !0).lab()[0],
                        $e = pt(1, !0).lab()[0],
                        mt = Ie > $e,
                        Ze = pt(we, !0).lab()[0],
                        Re = Ie + ($e - Ie) * we,
                        He = Ze - Re,
                        Ge = 0,
                        Ve = 1,
                        Vt = 20;
                      Math.abs(He) > 0.01 && Vt-- > 0;

                    )
                      (function () {
                        return (
                          mt && (He *= -1),
                          He < 0
                            ? ((Ge = we), (we += (Ve - we) * 0.5))
                            : ((Ve = we), (we += (Ge - we) * 0.5)),
                          (Ze = pt(we, !0).lab()[0]),
                          (He = Ze - Re)
                        )
                      })()
                    return we
                  })
                : (je = function (we) {
                    return we
                  }),
              Le
            )
          }),
          (Le.padding = function (K) {
            return K != null
              ? (ir(K) === "number" && (K = [K, K]), (_ = K), Le)
              : _
          }),
          (Le.colors = function (K, we) {
            arguments.length < 2 && (we = "hex")
            var Ie = []
            if (arguments.length === 0) Ie = A.slice(0)
            else if (K === 1) Ie = [Le(0.5)]
            else if (K > 1) {
              var $e = P[0],
                mt = P[1] - $e
              Ie = dh(0, K, !1).map(function (Ve) {
                return Le($e + (Ve / (K - 1)) * mt)
              })
            } else {
              u = []
              var Ze = []
              if (O && O.length > 2)
                for (
                  var Re = 1, He = O.length, Ge = 1 <= He;
                  Ge ? Re < He : Re > He;
                  Ge ? Re++ : Re--
                )
                  Ze.push((O[Re - 1] + O[Re]) * 0.5)
              else Ze = P
              Ie = Ze.map(function (Ve) {
                return Le(Ve)
              })
            }
            return (
              Ht[we] &&
                (Ie = Ie.map(function (Ve) {
                  return Ve[we]()
                })),
              Ie
            )
          }),
          (Le.cache = function (K) {
            return K != null ? ((ue = K), Le) : ue
          }),
          (Le.gamma = function (K) {
            return K != null ? ((Me = K), Le) : Me
          }),
          (Le.nodata = function (K) {
            return K != null ? ((h = Ht(K)), Le) : h
          }),
          Le
        )
      }
    function dh(u, d, h) {
      for (
        var b = [], P = u < d, M = h ? (P ? d + 1 : d - 1) : d, _ = u;
        P ? _ < M : _ > M;
        P ? _++ : _--
      )
        b.push(_)
      return b
    }
    var Ir = I,
      fh = wa,
      ph = function (u) {
        for (var d = [1, 1], h = 1; h < u; h++) {
          for (var b = [1], P = 1; P <= d.length; P++)
            b[P] = (d[P] || 0) + d[P - 1]
          d = b
        }
        return d
      },
      hh = function (u) {
        var d, h, b, P, M, _, O
        if (
          ((u = u.map(function (Y) {
            return new Ir(Y)
          })),
          u.length === 2)
        )
          (d = u.map(function (Y) {
            return Y.lab()
          })),
            (M = d[0]),
            (_ = d[1]),
            (P = function (Y) {
              var ce = [0, 1, 2].map(function (ue) {
                return M[ue] + Y * (_[ue] - M[ue])
              })
              return new Ir(ce, "lab")
            })
        else if (u.length === 3)
          (h = u.map(function (Y) {
            return Y.lab()
          })),
            (M = h[0]),
            (_ = h[1]),
            (O = h[2]),
            (P = function (Y) {
              var ce = [0, 1, 2].map(function (ue) {
                return (
                  (1 - Y) * (1 - Y) * M[ue] +
                  2 * (1 - Y) * Y * _[ue] +
                  Y * Y * O[ue]
                )
              })
              return new Ir(ce, "lab")
            })
        else if (u.length === 4) {
          var A
          ;(b = u.map(function (Y) {
            return Y.lab()
          })),
            (M = b[0]),
            (_ = b[1]),
            (O = b[2]),
            (A = b[3]),
            (P = function (Y) {
              var ce = [0, 1, 2].map(function (ue) {
                return (
                  (1 - Y) * (1 - Y) * (1 - Y) * M[ue] +
                  3 * (1 - Y) * (1 - Y) * Y * _[ue] +
                  3 * (1 - Y) * Y * Y * O[ue] +
                  Y * Y * Y * A[ue]
                )
              })
              return new Ir(ce, "lab")
            })
        } else if (u.length >= 5) {
          var B, W, se
          ;(B = u.map(function (Y) {
            return Y.lab()
          })),
            (se = u.length - 1),
            (W = ph(se)),
            (P = function (Y) {
              var ce = 1 - Y,
                ue = [0, 1, 2].map(function (Me) {
                  return B.reduce(function (Ae, Ne, je) {
                    return (
                      Ae +
                      W[je] * Math.pow(ce, se - je) * Math.pow(Y, je) * Ne[Me]
                    )
                  }, 0)
                })
              return new Ir(ue, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return P
      },
      gh = function (u) {
        var d = hh(u)
        return (
          (d.scale = function () {
            return fh(d)
          }),
          d
        )
      },
      xa = q,
      Gt = function (u, d, h) {
        if (!Gt[h]) throw new Error("unknown blend mode " + h)
        return Gt[h](u, d)
      },
      yn = function (u) {
        return function (d, h) {
          var b = xa(h).rgb(),
            P = xa(d).rgb()
          return xa.rgb(u(b, P))
        }
      },
      wn = function (u) {
        return function (d, h) {
          var b = []
          return (
            (b[0] = u(d[0], h[0])),
            (b[1] = u(d[1], h[1])),
            (b[2] = u(d[2], h[2])),
            b
          )
        }
      },
      vh = function (u) {
        return u
      },
      mh = function (u, d) {
        return (u * d) / 255
      },
      bh = function (u, d) {
        return u > d ? d : u
      },
      yh = function (u, d) {
        return u > d ? u : d
      },
      wh = function (u, d) {
        return 255 * (1 - (1 - u / 255) * (1 - d / 255))
      },
      xh = function (u, d) {
        return d < 128
          ? (2 * u * d) / 255
          : 255 * (1 - 2 * (1 - u / 255) * (1 - d / 255))
      },
      Sh = function (u, d) {
        return 255 * (1 - (1 - d / 255) / (u / 255))
      },
      Eh = function (u, d) {
        return u === 255
          ? 255
          : ((u = (255 * (d / 255)) / (1 - u / 255)), u > 255 ? 255 : u)
      }
    ;(Gt.normal = yn(wn(vh))),
      (Gt.multiply = yn(wn(mh))),
      (Gt.screen = yn(wn(wh))),
      (Gt.overlay = yn(wn(xh))),
      (Gt.darken = yn(wn(bh))),
      (Gt.lighten = yn(wn(yh))),
      (Gt.dodge = yn(wn(Eh))),
      (Gt.burn = yn(wn(Sh)))
    for (
      var _h = Gt,
        Sa = g.type,
        Ch = g.clip_rgb,
        Th = g.TWOPI,
        Ph = Math.pow,
        kh = Math.sin,
        Mh = Math.cos,
        Yl = q,
        $h = function (u, d, h, b, P) {
          u === void 0 && (u = 300),
            d === void 0 && (d = -1.5),
            h === void 0 && (h = 1),
            b === void 0 && (b = 1),
            P === void 0 && (P = [0, 1])
          var M = 0,
            _
          Sa(P) === "array" ? (_ = P[1] - P[0]) : ((_ = 0), (P = [P, P]))
          var O = function (A) {
            var B = Th * ((u + 120) / 360 + d * A),
              W = Ph(P[0] + _ * A, b),
              se = M !== 0 ? h[0] + A * M : h,
              Y = (se * W * (1 - W)) / 2,
              ce = Mh(B),
              ue = kh(B),
              Me = W + Y * (-0.14861 * ce + 1.78277 * ue),
              Ae = W + Y * (-0.29227 * ce - 0.90649 * ue),
              Ne = W + Y * (1.97294 * ce)
            return Yl(Ch([Me * 255, Ae * 255, Ne * 255, 1]))
          }
          return (
            (O.start = function (A) {
              return A == null ? u : ((u = A), O)
            }),
            (O.rotations = function (A) {
              return A == null ? d : ((d = A), O)
            }),
            (O.gamma = function (A) {
              return A == null ? b : ((b = A), O)
            }),
            (O.hue = function (A) {
              return A == null
                ? h
                : ((h = A),
                  Sa(h) === "array"
                    ? ((M = h[1] - h[0]), M === 0 && (h = h[1]))
                    : (M = 0),
                  O)
            }),
            (O.lightness = function (A) {
              return A == null
                ? P
                : (Sa(A) === "array"
                    ? ((P = A), (_ = A[1] - A[0]))
                    : ((P = [A, A]), (_ = 0)),
                  O)
            }),
            (O.scale = function () {
              return Yl.scale(O)
            }),
            O.hue(h),
            O
          )
        },
        Ih = I,
        Oh = "0123456789abcdef",
        Ah = Math.floor,
        Lh = Math.random,
        Nh = function () {
          for (var u = "#", d = 0; d < 6; d++) u += Oh.charAt(Ah(Lh() * 16))
          return new Ih(u, "hex")
        },
        Ea = f,
        Kl = Math.log,
        Rh = Math.pow,
        Bh = Math.floor,
        zh = Math.abs,
        Xl = function (u, d) {
          d === void 0 && (d = null)
          var h = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0,
          }
          return (
            Ea(u) === "object" && (u = Object.values(u)),
            u.forEach(function (b) {
              d && Ea(b) === "object" && (b = b[d]),
                b != null &&
                  !isNaN(b) &&
                  (h.values.push(b),
                  (h.sum += b),
                  b < h.min && (h.min = b),
                  b > h.max && (h.max = b),
                  (h.count += 1))
            }),
            (h.domain = [h.min, h.max]),
            (h.limits = function (b, P) {
              return Zl(h, b, P)
            }),
            h
          )
        },
        Zl = function (u, d, h) {
          d === void 0 && (d = "equal"),
            h === void 0 && (h = 7),
            Ea(u) == "array" && (u = Xl(u))
          var b = u.min,
            P = u.max,
            M = u.values.sort(function (Ca, Ta) {
              return Ca - Ta
            })
          if (h === 1) return [b, P]
          var _ = []
          if (
            (d.substr(0, 1) === "c" && (_.push(b), _.push(P)),
            d.substr(0, 1) === "e")
          ) {
            _.push(b)
            for (var O = 1; O < h; O++) _.push(b + (O / h) * (P - b))
            _.push(P)
          } else if (d.substr(0, 1) === "l") {
            if (b <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var A = Math.LOG10E * Kl(b),
              B = Math.LOG10E * Kl(P)
            _.push(b)
            for (var W = 1; W < h; W++) _.push(Rh(10, A + (W / h) * (B - A)))
            _.push(P)
          } else if (d.substr(0, 1) === "q") {
            _.push(b)
            for (var se = 1; se < h; se++) {
              var Y = ((M.length - 1) * se) / h,
                ce = Bh(Y)
              if (ce === Y) _.push(M[ce])
              else {
                var ue = Y - ce
                _.push(M[ce] * (1 - ue) + M[ce + 1] * ue)
              }
            }
            _.push(P)
          } else if (d.substr(0, 1) === "k") {
            var Me,
              Ae = M.length,
              Ne = new Array(Ae),
              je = new Array(h),
              vt = !0,
              pt = 0,
              Tt = null
            ;(Tt = []), Tt.push(b)
            for (var Le = 1; Le < h; Le++) Tt.push(b + (Le / h) * (P - b))
            for (Tt.push(P); vt; ) {
              for (var K = 0; K < h; K++) je[K] = 0
              for (var we = 0; we < Ae; we++)
                for (
                  var Ie = M[we], $e = Number.MAX_VALUE, mt = void 0, Ze = 0;
                  Ze < h;
                  Ze++
                ) {
                  var Re = zh(Tt[Ze] - Ie)
                  Re < $e && (($e = Re), (mt = Ze)), je[mt]++, (Ne[we] = mt)
                }
              for (var He = new Array(h), Ge = 0; Ge < h; Ge++) He[Ge] = null
              for (var Ve = 0; Ve < Ae; Ve++)
                (Me = Ne[Ve]),
                  He[Me] === null ? (He[Me] = M[Ve]) : (He[Me] += M[Ve])
              for (var Vt = 0; Vt < h; Vt++) He[Vt] *= 1 / je[Vt]
              vt = !1
              for (var xn = 0; xn < h; xn++)
                if (He[xn] !== Tt[xn]) {
                  vt = !0
                  break
                }
              ;(Tt = He), pt++, pt > 200 && (vt = !1)
            }
            for (var Sn = {}, lr = 0; lr < h; lr++) Sn[lr] = []
            for (var or = 0; or < Ae; or++) (Me = Ne[or]), Sn[Me].push(M[or])
            for (var rn = [], Bn = 0; Bn < h; Bn++)
              rn.push(Sn[Bn][0]), rn.push(Sn[Bn][Sn[Bn].length - 1])
            ;(rn = rn.sort(function (Ca, Ta) {
              return Ca - Ta
            })),
              _.push(rn[0])
            for (var Or = 1; Or < rn.length; Or += 2) {
              var zn = rn[Or]
              !isNaN(zn) && _.indexOf(zn) === -1 && _.push(zn)
            }
          }
          return _
        },
        Jl = { analyze: Xl, limits: Zl },
        Ql = I,
        Fh = function (u, d) {
          ;(u = new Ql(u)), (d = new Ql(d))
          var h = u.luminance(),
            b = d.luminance()
          return h > b ? (h + 0.05) / (b + 0.05) : (b + 0.05) / (h + 0.05)
        },
        eo = I,
        nn = Math.sqrt,
        it = Math.pow,
        jh = Math.min,
        Dh = Math.max,
        to = Math.atan2,
        no = Math.abs,
        is = Math.cos,
        ro = Math.sin,
        Hh = Math.exp,
        so = Math.PI,
        Gh = function (u, d, h, b, P) {
          h === void 0 && (h = 1),
            b === void 0 && (b = 1),
            P === void 0 && (P = 1)
          var M = function (zn) {
              return (360 * zn) / (2 * so)
            },
            _ = function (zn) {
              return (2 * so * zn) / 360
            }
          ;(u = new eo(u)), (d = new eo(d))
          var O = Array.from(u.lab()),
            A = O[0],
            B = O[1],
            W = O[2],
            se = Array.from(d.lab()),
            Y = se[0],
            ce = se[1],
            ue = se[2],
            Me = (A + Y) / 2,
            Ae = nn(it(B, 2) + it(W, 2)),
            Ne = nn(it(ce, 2) + it(ue, 2)),
            je = (Ae + Ne) / 2,
            vt = 0.5 * (1 - nn(it(je, 7) / (it(je, 7) + it(25, 7)))),
            pt = B * (1 + vt),
            Tt = ce * (1 + vt),
            Le = nn(it(pt, 2) + it(W, 2)),
            K = nn(it(Tt, 2) + it(ue, 2)),
            we = (Le + K) / 2,
            Ie = M(to(W, pt)),
            $e = M(to(ue, Tt)),
            mt = Ie >= 0 ? Ie : Ie + 360,
            Ze = $e >= 0 ? $e : $e + 360,
            Re = no(mt - Ze) > 180 ? (mt + Ze + 360) / 2 : (mt + Ze) / 2,
            He =
              1 -
              0.17 * is(_(Re - 30)) +
              0.24 * is(_(2 * Re)) +
              0.32 * is(_(3 * Re + 6)) -
              0.2 * is(_(4 * Re - 63)),
            Ge = Ze - mt
          ;(Ge = no(Ge) <= 180 ? Ge : Ze <= mt ? Ge + 360 : Ge - 360),
            (Ge = 2 * nn(Le * K) * ro(_(Ge) / 2))
          var Ve = Y - A,
            Vt = K - Le,
            xn = 1 + (0.015 * it(Me - 50, 2)) / nn(20 + it(Me - 50, 2)),
            Sn = 1 + 0.045 * we,
            lr = 1 + 0.015 * we * He,
            or = 30 * Hh(-it((Re - 275) / 25, 2)),
            rn = 2 * nn(it(we, 7) / (it(we, 7) + it(25, 7))),
            Bn = -rn * ro(2 * _(or)),
            Or = nn(
              it(Ve / (h * xn), 2) +
                it(Vt / (b * Sn), 2) +
                it(Ge / (P * lr), 2) +
                Bn * (Vt / (b * Sn)) * (Ge / (P * lr)),
            )
          return Dh(0, jh(100, Or))
        },
        ao = I,
        Vh = function (u, d, h) {
          h === void 0 && (h = "lab"), (u = new ao(u)), (d = new ao(d))
          var b = u.get(h),
            P = d.get(h),
            M = 0
          for (var _ in b) {
            var O = (b[_] || 0) - (P[_] || 0)
            M += O * O
          }
          return Math.sqrt(M)
        },
        Wh = I,
        qh = function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          try {
            return (
              new (Function.prototype.bind.apply(Wh, [null].concat(u)))(), !0
            )
          } catch {
            return !1
          }
        },
        io = q,
        lo = wa,
        Uh = {
          cool: function () {
            return lo([io.hsl(180, 1, 0.9), io.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return lo(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          },
        },
        ls = {
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
        _a = 0,
        oo = Object.keys(ls);
      _a < oo.length;
      _a += 1
    ) {
      var uo = oo[_a]
      ls[uo.toLowerCase()] = ls[uo]
    }
    var Yh = ls,
      ft = q
    ;(ft.average = oh),
      (ft.bezier = gh),
      (ft.blend = _h),
      (ft.cubehelix = $h),
      (ft.mix = ft.interpolate = Fl),
      (ft.random = Nh),
      (ft.scale = wa),
      (ft.analyze = Jl.analyze),
      (ft.contrast = Fh),
      (ft.deltaE = Gh),
      (ft.distance = Vh),
      (ft.limits = Jl.limits),
      (ft.valid = qh),
      (ft.scales = Uh),
      (ft.colors = xl),
      (ft.brewer = Yh)
    var Kh = ft
    return Kh
  })
})(kc)
var Dm = kc.exports
const ot = jm(Dm),
  Hm = {
    __name: "PanelDesign",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          let s = document.querySelectorAll("tr"),
            a
          r == 5
            ? (a = ot("#e2e8f0"))
            : r == 4
              ? (a = ot("#cbd5e1"))
              : r == 3
                ? (a = ot("#475569"))
                : r == 2
                  ? (a = ot("#1e293b"))
                  : r == 1 && (a = ot("#0f172a"))
          for (let i = 1; i < s.length; i++)
            i % 2 == 0
              ? (s[i].style.backgroundColor = a.brighten(0))
              : (s[i].style.backgroundColor = a.brighten(0.2))
        }
      return (
        gt(() => {
          n(t.brightness)
        }),
        en(
          () => t.brightness,
          (r, s) => {
            n(r)
          },
        ),
        (r, s) => null
      )
    },
  },
  Gm = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Vm = { class: "prose text-center" },
  Wm = S("br", null, null, -1),
  qm = { href: "/pricing" },
  Um = { id: "cta" },
  qi = {
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
            l = document.getElementsByName("email")[0].value,
            o = document.getElementsByName("message")[0].value,
            f = window.location.href,
            c = new XMLHttpRequest()
          c.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            c.setRequestHeader("Content-Type", "application/json"),
            c.send(
              JSON.stringify({
                form: a,
                name: i,
                email: l,
                message: o,
                referrer: f,
              }),
            ),
            (c.onloadend = function () {
              if (
                (console.log(
                  `Status: ${c.status}, Response: ${c.responseText}`,
                ),
                c.status == 200)
              ) {
                let p = document.getElementById("cta"),
                  v = document.createElement("div")
                v.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (v.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  p.appendChild(v)
                let m = p.getElementsByTagName("input")
                for (let E = 0; E < m.length; E++) m[E].style.display = "none"
                let k = p.getElementsByTagName("textarea")[0]
                k.style.display = "none"
                let g = document.getElementById("submitButton")
                g.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        he(),
        Oe(
          "div",
          {
            class: N([
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
            S("div", Vm, [
              S(
                "h4",
                { class: N(["text-2xl", t(e.brightness)]) },
                [
                  Ee(" Piqued your interest?"),
                  Wm,
                  Ee(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              S("a", qm, [
                S(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    "aria-": "",
                    class: N([
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
              S(
                "h4",
                { class: N(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              S("form", Um, [
                S("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: N(["rounded p-2 w-full", n]),
                }),
                S("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: N(["rounded p-2 w-full mt-3", n]),
                }),
                S("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: N(["rounded p-2 w-full mt-3", n]),
                }),
                S(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    "aria-label": "Submit a contact form",
                    onClick: r,
                    class: N([
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
  Jn = (e) => (Ii("data-v-8a92440e"), (e = e()), Oi(), e),
  Ym = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  Km = { class: "flex flex-col items-center justify-center w-full" },
  Xm = { viewBox: "0 0 36 36", class: "chart" },
  Zm = Jn(() =>
    S(
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
  Jm = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  Qm = Jn(() =>
    S(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  e1 = Jn(() =>
    S(
      "p",
      null,
      [
        Ee(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        S("b", null, "315 KB"),
        Ee(". That's half of the classic SNES game "),
        S("em", null, "The Legend of Zelda: A Link to The Past"),
        Ee(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  t1 = Jn(() => S("p", null, "You want fast? Let's make it happen.", -1)),
  n1 = { id: "speedTable" },
  r1 = Jn(() =>
    S(
      "colgroup",
      null,
      [
        S("col", { style: { width: "30%" } }),
        S("col", { style: { width: "70%" } }),
      ],
      -1,
    ),
  ),
  s1 = { class: "flex" },
  a1 = { class: "flex" },
  i1 = Jn(() =>
    S(
      "tbody",
      null,
      [
        S("tr", null, [
          S("td", null, "Huge, resource-heavy images"),
          S("td", null, [
            Ee(" Optimize your images. "),
            S("b", null, "A lot. "),
            Ee(
              "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
            ),
          ]),
        ]),
        S("tr", null, [
          S("td", null, "Unused code, plugins, and assets"),
          S(
            "td",
            null,
            " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
          ),
        ]),
        S("tr", null, [
          S("td", null, "Inefficient, resource-heavy platforms"),
          S(
            "td",
            null,
            " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
          ),
        ]),
        S("tr", null, [
          S("td", null, "Uncached resources"),
          S(
            "td",
            null,
            " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
          ),
        ]),
      ],
      -1,
    ),
  ),
  l1 = Jn(() => S("div", { class: "h-6" }, null, -1)),
  o1 = {
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
  u1 = Object.assign(o1, {
    __name: "PanelSpeed",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (o) => {
          if (o >= 4) return "text-emerald-500"
          if (o == 3) return "text-orange-200"
          if (o == 2) return "text-orange-500"
          if (o == 1) return "text-orange-400"
        },
        r = (o) => {
          if (o >= 4) return "text-emerald-500 bg-emerald-950"
          if (o == 3) return "text-orange-200 bg-orange-950"
          if (o == 2) return "text-orange-500 bg-orange-950"
          if (o == 1) return "text-orange-400 bg-orange-950"
        },
        s = (o) => {
          if (o >= 4) return "border-emerald-500"
          if (o == 3) return "border-orange-200"
          if (o == 2) return "border-orange-500"
          if (o == 1) return "border-orange-400"
        },
        a = (o) => {
          if (o >= 4) return "text-slate-800"
          if (o == 3) return "text-slate-200"
          if (o == 2) return "text-slate-300"
          if (o == 1) return "text-slate-300"
        },
        i = me(() => {
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
        l = (o) => {
          let f = document.querySelectorAll("tr"),
            c
          o == 5
            ? (c = ot("#e2e8f0"))
            : o == 4
              ? (c = ot("#cbd5e1"))
              : o == 3
                ? (c = ot("#475569"))
                : o == 2
                  ? (c = ot("#1e293b"))
                  : o == 1 && (c = ot("#0f172a"))
          for (let p = 1; p < f.length; p++)
            p % 2 == 0
              ? (f[p].style.backgroundColor = c.brighten(0))
              : (f[p].style.backgroundColor = c.brighten(0.2))
        }
      return (
        gt(() => {
          l(t.brightness)
        }),
        en(
          () => t.brightness,
          (o, f) => {
            l(o)
          },
        ),
        (o, f) => (
          he(),
          Oe("div", Ym, [
            S("div", Km, [
              S(
                "div",
                { id: "perfChart", class: N(r(e.brightness)) },
                [
                  (he(),
                  Oe("svg", Xm, [
                    Zm,
                    S(
                      "path",
                      {
                        class: N(["circle", s(e.brightness)]),
                        d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                        fill: "none",
                        stroke: i.value,
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-dasharray":
                          o.circumference + " " + o.circumference,
                        "stroke-dashoffset": o.dashoffset,
                      },
                      null,
                      10,
                      Jm,
                    ),
                  ])),
                  S(
                    "div",
                    {
                      id: "chartInner",
                      class: N(["font-monospace text-6xl", n(e.brightness)]),
                    },
                    " 98 ",
                    2,
                  ),
                ],
                2,
              ),
              S(
                "p",
                {
                  class: N(["text-sm italic opacity-50 mt-3", a(e.brightness)]),
                },
                [
                  Ee(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  S(
                    "a",
                    { href: "", class: N(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              S(
                "div",
                {
                  class: N([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  S(
                    "h2",
                    { class: N(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  S(
                    "h2",
                    { class: N(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  Qm,
                  e1,
                  t1,
                  S("h3", { class: N(a(e.brightness)) }, "How I help", 2),
                  S("table", n1, [
                    r1,
                    S("thead", null, [
                      S("tr", null, [
                        S("th", null, [
                          S("div", s1, [
                            S(
                              "h4",
                              { class: N([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ee(" Problem "),
                                oe(
                                  pe(im),
                                  {
                                    size: "3rem",
                                    class: N([n(e.brightness), "inline mb-1"]),
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
                        S("th", null, [
                          S("div", a1, [
                            S(
                              "h4",
                              { class: N([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ee(" What I can do "),
                                oe(
                                  pe(rm),
                                  {
                                    size: "3rem",
                                    class: N([n(e.brightness), "inline mb-1"]),
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
                    i1,
                  ]),
                ],
                2,
              ),
              l1,
              oe(qi, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  c1 = Zn(u1, [["__scopeId", "data-v-8a92440e"]]),
  d1 = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  f1 = { class: "lg:w-6/12 sm:w-12/12" },
  p1 = S(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  h1 = S("p", null, [S("b", null, " Don't worry, I can help!")], -1),
  g1 = S(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  v1 = { class: "flex items-center w-full" },
  m1 = S(
    "p",
    null,
    [
      Ee(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      S("em", null, "very"),
      Ee(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  b1 = S("div", { class: "h-3" }, null, -1),
  y1 = { class: "flex items-center w-full" },
  w1 = S(
    "p",
    null,
    [
      Ee(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      S("em", null, "do"),
      Ee(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  x1 = S("div", { class: "h-3" }, null, -1),
  S1 = { class: "flex items-center w-full" },
  E1 = S(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  _1 = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  C1 = { class: "prose text-center" },
  T1 = S("div", { class: "h-3" }, null, -1),
  P1 = S("div", { class: "h-3" }, null, -1),
  k1 = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      be(9274)
      const t = be(4709),
        n = be(new Date("2023-10-01")),
        r = be(new Date()),
        s = me(
          () =>
            ((r.value.getFullYear() - n.value.getFullYear()) * 12 +
              (r.value.getMonth() - n.value.getMonth())) *
            t.value,
        ),
        a = (o) => (o > 1e6 ? Math.round(o / 1e6).toString() + "m" : o),
        i = (o) => {
          if (o >= 4) return "text-emerald-500"
          if (o == 3) return "text-orange-200"
          if (o == 2) return "text-orange-500"
          if (o == 1) return "text-orange-400"
        },
        l = (o) => {
          if (o >= 4) return "text-slate-800"
          if (o == 3) return "text-slate-200"
          if (o == 2) return "text-slate-300"
          if (o == 1) return "text-slate-300"
        }
      return (o, f) => (
        he(),
        Oe("div", d1, [
          S("div", f1, [
            S(
              "h2",
              { class: N(["text-left text-5xl", l(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            S(
              "p",
              {
                class: N([
                  "text-left text-sm italic opacity-50 mt-3",
                  l(e.brightness),
                ]),
              },
              [
                Ee(" Website already secure? "),
                S("b", null, [
                  S(
                    "a",
                    { href: "", class: N(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  Ee(" are you?"),
                ]),
              ],
              2,
            ),
            S(
              "hr",
              { class: N(["mb-5 mt-1 w-6/12 opacity-25", l(e.brightness)]) },
              null,
              2,
            ),
            S(
              "div",
              { class: N(["prose", l(e.brightness)]) },
              [
                p1,
                h1,
                g1,
                S(
                  "div",
                  {
                    class: N([
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
                    S("div", v1, [
                      oe(
                        pe(_s),
                        { class: N(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      S(
                        "h4",
                        { class: N(["font-bold m-0", l(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    m1,
                  ],
                  2,
                ),
                b1,
                S(
                  "div",
                  {
                    class: N([
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
                    S("div", y1, [
                      oe(
                        pe(_s),
                        { size: "2rem", class: N(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      S(
                        "h4",
                        { class: N(["font-bold m-0", l(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    w1,
                  ],
                  2,
                ),
                x1,
                S(
                  "div",
                  {
                    class: N([
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
                    S("div", S1, [
                      oe(
                        pe(_s),
                        { class: N(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      S(
                        "h4",
                        { class: N(["font-bold m-0", l(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    E1,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          S("div", _1, [
            S(
              "div",
              {
                class: N([
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
                S("div", C1, [
                  S(
                    "h3",
                    {
                      class: N([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    At(a(s.value)) + "+ ",
                    3,
                  ),
                  S(
                    "h3",
                    { class: N(["text-xl", l(e.brightness)]) },
                    [
                      Ee(" attacks blocked on "),
                      S(
                        "a",
                        {
                          class: N(i(e.brightness)),
                          href: "https://bazaar.blendernation.com",
                        },
                        "BlenderNation Bazaar",
                        2,
                      ),
                    ],
                    2,
                  ),
                  S(
                    "p",
                    {
                      class: N(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  S(
                    "p",
                    {
                      class: N(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    [
                      S(
                        "a",
                        { href: "", class: N(i(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      Ee(" about the Bazaar project "),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            T1,
            S("hr", { class: N(["opacity-50", l(e.brightness)]) }, null, 2),
            P1,
            oe(qi, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  M1 = {
    __name: "PanelDesignOverhaul",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          let s = document.querySelectorAll("tr"),
            a
          r == 5
            ? (a = ot("#e2e8f0"))
            : r == 4
              ? (a = ot("#cbd5e1"))
              : r == 3
                ? (a = ot("#475569"))
                : r == 2
                  ? (a = ot("#1e293b"))
                  : r == 1 && (a = ot("#0f172a"))
          for (let i = 1; i < s.length; i++)
            i % 2 == 0
              ? (s[i].style.backgroundColor = a.brighten(0))
              : (s[i].style.backgroundColor = a.brighten(0.2))
        }
      return (
        gt(() => {
          n(t.brightness)
        }),
        en(
          () => t.brightness,
          (r, s) => {
            n(r)
          },
        ),
        (r, s) => null
      )
    },
  },
  $1 = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  I1 = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  O1 = { class: "flex w-full" },
  A1 = { class: "flex w-full pt-4 gap-2" },
  L1 = { class: "w-6/12" },
  N1 = { class: "w-6/12" },
  R1 = { class: "w-full flex" },
  B1 = { class: "w-6/12" },
  z1 = { class: "w-6/12 pb-3" },
  F1 = S("em", null, "huge", -1),
  j1 = S("div", { class: "h-6" }, null, -1),
  D1 = {
    __name: "PanelAccessibility",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (f) => {
          if (f >= 4) return "text-emerald-500"
          if (f == 3) return "text-orange-200"
          if (f == 2) return "text-orange-500"
          if (f == 1) return "text-orange-400"
        },
        r = be(!1),
        s = me(() =>
          r.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        a = me(() =>
          r.value
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        i = (f) => {
          if (f >= 4) return "text-slate-800"
          if (f == 3) return "text-slate-200"
          if (f == 2) return "text-slate-300"
          if (f == 1) return "text-slate-300"
        },
        l = (f) => {
          let c = document.querySelectorAll("tr"),
            p
          f == 5
            ? (p = ot("#e2e8f0"))
            : f == 4
              ? (p = ot("#cbd5e1"))
              : f == 3
                ? (p = ot("#475569"))
                : f == 2
                  ? (p = ot("#1e293b"))
                  : f == 1 && (p = ot("#0f172a"))
          for (let v = 1; v < c.length; v++)
            v % 2 == 0
              ? (c[v].style.backgroundColor = p.brighten(0))
              : (c[v].style.backgroundColor = p.brighten(0.2))
        },
        o = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        gt(() => {
          l(t.brightness)
        }),
        en(
          () => t.brightness,
          (f, c) => {
            l(f)
          },
        ),
        (f, c) => (
          he(),
          Oe("div", $1, [
            S("div", I1, [
              S(
                "h2",
                { class: N(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              S(
                "h3",
                { class: N(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              S(
                "h4",
                { class: N(i(e.brightness)) },
                [
                  Ee(" What are the "),
                  S(
                    "a",
                    {
                      class: N(["font-bold", n(e.brightness)]),
                      href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    "Web Content Accessibility Guidelines?",
                    2,
                  ),
                ],
                2,
              ),
              S(
                "p",
                { class: N(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              S(
                "p",
                { class: N(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              S(
                "h4",
                { class: N(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              S(
                "p",
                { class: N(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              S(
                "p",
                { class: N(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              S("div", O1, [
                S(
                  "button",
                  {
                    class: N([
                      {
                        "bg-emerald-600 text-slate-200": e.brightness >= 4,
                        "bg-slate-500 text-slate-200": e.brightness == 3,
                        "bg-orange-600 text-slate-800": e.brightness == 2,
                        "bg-orange-500 text-slate-800": e.brightness == 1,
                      },
                      "text-xl font-semibold rounded px-5 py-2 w-full flex align-middle",
                    ]),
                    onClick: o,
                  },
                  [
                    r.value ? (he(), st(pe(Pc), { key: 0 })) : lt("", !0),
                    r.value ? lt("", !0) : (he(), st(pe(Xv), { key: 1 })),
                    Ee(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              S("div", A1, [
                S("div", L1, [
                  S(
                    "button",
                    { class: N(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (he(), st(pe(Ko), { key: 0 })) : lt("", !0)],
                    2,
                  ),
                ]),
                S("div", N1, [
                  S(
                    "button",
                    { class: N(["rounded px-5 py-2 w-full", a.value]) },
                    [r.value ? (he(), st(pe(ui), { key: 0 })) : lt("", !0)],
                    2,
                  ),
                ]),
              ]),
              S(
                "h4",
                { class: N(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              S("div", R1, [
                S("div", B1, [
                  S(
                    "button",
                    {
                      class: N([
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
                    [Ee(" Submit "), oe(pe(Ko))],
                    2,
                  ),
                ]),
                S("div", z1, [
                  S(
                    "button",
                    {
                      class: N([
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
                    [Ee(" Cancel "), oe(pe(ui))],
                    2,
                  ),
                ]),
              ]),
              S(
                "p",
                { class: N(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              S(
                "p",
                { class: N(i(e.brightness)) },
                [
                  Ee(" Changes like these may seem small, but they make a "),
                  F1,
                  Ee(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            j1,
            oe(qi, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  H1 = ["onMouseover"],
  G1 = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = be([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 2, title: "Design Overhaul", icon: "ShowerHead" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = be(0)
      const r = (a, i, l, o) => {
          if (i) {
            if (a == 5) return l === o ? "bg-emerald-600" : "bg-emerald-500"
            if (a == 4) return l === o ? "bg-emerald-600" : "bg-emerald-500"
            if (a == 3 || a == 1)
              return l === o ? "bg-orange-500" : "bg-orange-400"
            if (a == 2) return "bg-orange-600"
          } else if (l === o) {
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
        st(pe(Hv), null, {
          default: Ke(() => [
            oe(
              pe(Gv),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: Ke(() => [
                  (he(!0),
                  Oe(
                    nt,
                    null,
                    mr(
                      t.value,
                      (l) => (
                        he(),
                        st(
                          pe(Vv),
                          {
                            key: l.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: Ke(({ selected: o }) => [
                              S(
                                "div",
                                {
                                  class: N([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, o, pe(n), l.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (f) =>
                                    St(n) ? (n.value = l.id) : (n = l.id),
                                  onMouseleave:
                                    i[0] ||
                                    (i[0] = (f) =>
                                      St(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  l.id == 0
                                    ? (he(),
                                      st(
                                        pe(_s),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: N(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : lt("", !0),
                                  l.id == 1
                                    ? (he(),
                                      st(
                                        pe(Jv),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: N(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : lt("", !0),
                                  l.id == 2
                                    ? (he(),
                                      st(
                                        pe(sm),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: N(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : lt("", !0),
                                  l.id == 3
                                    ? (he(),
                                      st(
                                        pe(nm),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: N(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : lt("", !0),
                                  l.id == 4
                                    ? (he(),
                                      st(
                                        pe(Zv),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: N(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : lt("", !0),
                                  l.id == 5
                                    ? (he(),
                                      st(
                                        pe(Pc),
                                        {
                                          key: 5,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: N(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : lt("", !0),
                                  S(
                                    "p",
                                    {
                                      class: N([
                                        "font-semibold cursor-pointer",
                                        s(e.brightness, o),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    At(l.title),
                                    3,
                                  ),
                                ],
                                42,
                                H1,
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
            oe(
              pe(Wv),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: Ke(() => [
                  oe(
                    pe(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ke(() => [
                        oe(c1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  oe(
                    pe(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ke(() => [
                        oe(k1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  oe(
                    pe(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ke(() => [
                        oe(M1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  oe(
                    pe(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ke(() => [
                        oe(Gm, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  oe(
                    pe(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ke(() => [
                        oe(Hm, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  oe(
                    pe(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ke(() => [
                        oe(D1, { brightness: e.brightness }, null, 8, [
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
  V1 = { href: "/pricing" },
  W1 = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = be(!1)
      gt(() => {
        const r = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", r),
          Nn(() => {
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
        Oe(
          "div",
          {
            style: { transition: "opacity 0.5s ease-in-out" },
            class: N([
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
            S(
              "p",
              { class: N(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            S("a", V1, [
              S(
                "button",
                {
                  "aria-label":
                    "Get a free site speed audit with recommendations for optimizing",
                  class: N([
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
  Pr = (e) => (Ii("data-v-e20b9d11"), (e = e()), Oi(), e),
  q1 = { class: "flex-col" },
  U1 = { class: "prose py-5 flex-col w-full" },
  Y1 = Pr(() => S("br", null, null, -1)),
  K1 = Pr(() => S("br", null, null, -1)),
  X1 = { class: "flex" },
  Z1 = { class: "w-6/12" },
  J1 = ["name", "checked", "onClick"],
  Q1 = { class: "w-6/12" },
  eb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  tb = { class: "flex-col gap-4" },
  nb = { class: "flex items-center" },
  rb = ["name", "checked", "onClick"],
  sb = { key: 0 },
  ab = { key: 1 },
  ib = { class: "" },
  lb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  ob = { class: "flex-col" },
  ub = { class: "flex justify-between" },
  cb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  db = { class: "gap-4 mt-4", name: "pricing" },
  fb = ["value"],
  pb = ["value"],
  hb = { class: "flex gap-4", id: "leftInputs" },
  gb = { class: "flex gap-4", id: "rightInputs" },
  vb = Pr(() => S("br", null, null, -1)),
  mb = Pr(() => S("br", null, null, -1)),
  bb = Pr(() => S("br", null, null, -1)),
  yb = Pr(() => S("br", null, null, -1)),
  wb = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (j) => {
          j.preventDefault()
          const ie = "pricing"
          let V = document.getElementsByName("name")[0].value,
            Ue = document.getElementsByName("email")[0].value,
            Pe = document.getElementsByName("website")[0].value,
            Qe = document.getElementsByName("notes")[0].value,
            et = document.getElementsByName("services")[0].value,
            Kt = document.getElementsByName("total")[0].value,
            Ft = window.location.href,
            Ct = new XMLHttpRequest()
          Ct.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            Ct.setRequestHeader("Content-Type", "application/json"),
            Ct.send(
              JSON.stringify({
                form: ie,
                name: V,
                email: Ue,
                website: Pe,
                notes: Qe,
                services: et,
                total: Kt,
                referrer: Ft,
              }),
            ),
            (Ct.onloadend = function () {
              if (
                (console.log(
                  `Status: ${Ct.status}, Response: ${Ct.responseText}`,
                ),
                Ct.status == 200)
              ) {
                let at = document.getElementsByName(ie)[0],
                  z = document.createElement("div")
                z.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (z.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  at.appendChild(z)
                let ae = document.getElementById("leftInputs"),
                  te = document.getElementById("rightInputs")
                ;(ae.style.display = "none"), (te.style.display = "none")
                let fe = document.getElementById("submitButton")
                fe.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        r = (j) => {
          if (j >= 4) return "text-emerald-500"
          if (j == 3) return "text-orange-200"
          if (j == 2) return "text-orange-500"
          if (j == 1) return "text-orange-400"
        },
        s = (j) => {
          if (j >= 4) return "text-emerald-500"
          if (j == 3) return "text-slate-800"
          if (j == 2) return "text-orange-500"
          if (j == 1) return "text-orange-400"
        },
        a = (j) => {
          if (j >= 4) return "border-emerald-500"
          if (j == 3) return "border-orange-200"
          if (j == 2) return "border-orange-500"
          if (j == 1) return "border-orange-400"
        },
        i = (j) => {
          if (j >= 4) return "text-slate-800"
          if (j == 3) return "text-slate-200"
          if (j == 2) return "text-slate-300"
          if (j == 1) return "text-slate-300"
        },
        l = be({
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
        o = me(() =>
          l.value.speed.audit.enabled &&
          l.value.speed.optimize.enabled &&
          l.value.speed.caching.enabled &&
          l.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        f = me(() =>
          l.value.security.audit.enabled &&
          l.value.security.ddosprotection.enabled &&
          l.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        c = me(() =>
          l.value.accessibility.audit.enabled &&
          l.value.accessibility.levelA.enabled &&
          l.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        p = me(() => 3 / 3),
        v = me(
          () =>
            Object.values(l.value.speed).reduce(
              (j, ie) => j + (ie.enabled ? ie.price : 0),
              0,
            ) * o.value,
        ),
        m = me(
          () =>
            Object.values(l.value.security).reduce(
              (j, ie) => j + (ie.enabled ? ie.price : 0),
              0,
            ) * f.value,
        ),
        k = me(
          () =>
            Object.values(l.value.accessibility).reduce(
              (j, ie) => j + (ie.enabled ? ie.price : 0),
              0,
            ) * c.value,
        ),
        g = me(
          () =>
            Object.values(l.value.designOverhaul).reduce(
              (j, ie) => j + (ie.enabled ? ie.price : 0),
              0,
            ) * p.value,
        ),
        E = me(() => {
          let j = 0
          for (const [ie, V] of Object.entries(l.value.speed))
            V.enabled && (j += V.price)
          return j
        }),
        T = me(() => {
          let j = 0
          for (const [ie, V] of Object.entries(l.value.security))
            V.enabled && (j += V.price)
          return j
        }),
        w = me(() => {
          let j = 0
          for (const [ie, V] of Object.entries(l.value.accessibility))
            V.enabled && (j += V.price)
          return j
        }),
        y = me(() => {
          let j = 0
          for (const [ie, V] of Object.entries(l.value.designOverhaul))
            V.enabled && (j += V.price)
          return j
        }),
        $ = () => {
          l.value.speed.audit.enabled &&
          l.value.speed.optimize.enabled &&
          l.value.speed.caching.enabled &&
          l.value.speed.images.enabled
            ? ((l.value.speed.audit.enabled = !1),
              (l.value.speed.optimize.enabled = !1),
              (l.value.speed.caching.enabled = !1),
              (l.value.speed.images.enabled = !1))
            : ((l.value.speed.audit.enabled = !0),
              (l.value.speed.optimize.enabled = !0),
              (l.value.speed.caching.enabled = !0),
              (l.value.speed.images.enabled = !0))
        },
        L = () => {
          l.value.security.audit.enabled &&
          l.value.security.ddosprotection.enabled &&
          l.value.security.protection.enabled
            ? ((l.value.security.audit.enabled = !1),
              (l.value.security.ddosprotection.enabled = !1),
              (l.value.security.protection.enabled = !1))
            : ((l.value.security.audit.enabled = !0),
              (l.value.security.ddosprotection.enabled = !0),
              (l.value.security.protection.enabled = !0))
        },
        I = () => {
          l.value.accessibility.audit.enabled &&
          l.value.accessibility.levelA.enabled &&
          l.value.accessibility.levelAA.enabled
            ? ((l.value.accessibility.audit.enabled = !1),
              (l.value.accessibility.levelA.enabled = !1),
              (l.value.accessibility.levelAA.enabled = !1))
            : ((l.value.accessibility.audit.enabled = !0),
              (l.value.accessibility.levelA.enabled = !0),
              (l.value.accessibility.levelAA.enabled = !0))
        },
        ne = () => {
          l.value.designOverhaul.designOverhaul.enabled
            ? (l.value.designOverhaul.designOverhaul.enabled = !1)
            : (l.value.designOverhaul.designOverhaul.enabled = !0)
        },
        q = (j) => {
          j.title == "Speed"
            ? $()
            : j.title == "Security"
              ? L()
              : j.title == "Accessibility"
                ? I()
                : j.title == "Design Overhaul" && ne()
        },
        G = (j) => Object.values(j.services).some((ie) => ie.enabled),
        D = be([
          {
            title: "Speed",
            services: l.value.speed,
            enabled: !0,
            discount: o.value,
          },
          {
            title: "Security",
            services: l.value.security,
            enabled: !1,
            discount: f.value,
          },
          {
            title: "Accessibility",
            services: l.value.accessibility,
            enabled: !1,
            discount: c.value,
          },
          {
            title: "Design Overhaul",
            services: l.value.designOverhaul,
            enabled: !1,
            discount: p.value,
          },
        ]),
        Q = (j) => {
          if (j.title === "Speed") return v.value
          if (j.title === "Security") return m.value
          if (j.title === "Accessibility") return k.value
          if (j.title === "Design Overhaul") return g.value
        },
        ge = (j) => {
          if (j.title === "Speed") return E.value
          if (j.title === "Security") return T.value
          if (j.title === "Accessibility") return w.value
          if (j.title === "Design Overhaul") return y.value
        },
        X = me(
          () => Q(D.value[0]) + Q(D.value[1]) + Q(D.value[2]) + Q(D.value[3]),
        ),
        xe = me(() => {
          let j = []
          for (const [ie, V] of Object.entries(l.value.speed))
            V.enabled && j.push(V.title)
          for (const [ie, V] of Object.entries(l.value.security))
            V.enabled && j.push(V.title)
          for (const [ie, V] of Object.entries(l.value.accessibility))
            V.enabled && j.push(V.title)
          for (const [ie, V] of Object.entries(l.value.designOverhaul))
            V.enabled && j.push(V.title)
          return j
        }),
        Ce = (j) => {
          let ie = ""
          return (
            (ie += a(j)),
            j == 5
              ? (ie += " bg-slate-100")
              : j == 4
                ? (ie += " bg-slate-400")
                : j == 3
                  ? (ie += " bg-slate-500")
                  : j == 2
                    ? (ie += " bg-slate-700")
                    : j == 1 && (ie += " bg-slate-800"),
            ie
          )
        }
      return (j, ie) => (
        he(),
        Oe("div", q1, [
          S("div", U1, [
            S(
              "h2",
              {
                class: N([
                  "text-5xl text-center text-semibold",
                  i(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            S(
              "p",
              { class: N(["text-center", i(n.brightness)]) },
              [
                Ee(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                Y1,
                K1,
                Ee(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                S(
                  "a",
                  {
                    href: "/contact",
                    class: N(["font-bold", r(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                Ee(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (he(!0),
          Oe(
            nt,
            null,
            mr(
              D.value,
              (V, Ue) => (
                he(),
                Oe(
                  "div",
                  {
                    key: Ue,
                    class: N([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      Ce(n.brightness),
                    ]),
                  },
                  [
                    S("div", X1, [
                      S("div", Z1, [
                        S(
                          "div",
                          {
                            class: N([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              i(n.brightness),
                            ]),
                          },
                          [
                            S(
                              "input",
                              {
                                type: "checkbox",
                                name: V.title,
                                checked: G(V),
                                onClick: (Pe) => q(V),
                                class: N([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              J1,
                            ),
                            S("h3", null, At(V.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      S("div", Q1, [
                        S(
                          "h3",
                          {
                            class: N([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            ge(V) != Math.floor(Q(V))
                              ? (he(), Oe("span", eb, "$" + At(ge(V)), 1))
                              : lt("", !0),
                            Ee("$" + At(Q(V)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    S(
                      "hr",
                      { class: N(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    S("div", tb, [
                      (he(!0),
                      Oe(
                        nt,
                        null,
                        mr(
                          V.services,
                          (Pe, Qe) => (
                            he(),
                            Oe(
                              "div",
                              {
                                key: Qe,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                S("div", nb, [
                                  S(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: Pe.title,
                                      checked: Pe.enabled,
                                      onClick: (et) =>
                                        (Pe.enabled = !Pe.enabled),
                                      class: N([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    rb,
                                  ),
                                  S(
                                    "p",
                                    { class: N(["", i(n.brightness)]) },
                                    [
                                      Pe.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (he(),
                                          Oe("b", sb, [
                                            S("em", null, At(Pe.title), 1),
                                          ]))
                                        : (he(),
                                          Oe("span", ab, At(Pe.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                S("div", ib, [
                                  S(
                                    "h3",
                                    {
                                      class: N([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      Pe.price !=
                                      Math.floor(Pe.price * V.discount)
                                        ? (he(),
                                          Oe("span", lb, "$" + At(Pe.price), 1))
                                        : lt("", !0),
                                      Ee("$" + At(Pe.price * V.discount), 1),
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
          S("hr", { class: N(["my-4 w-full", r(n.brightness)]) }, null, 2),
          S("div", ob, [
            S("div", ub, [
              S(
                "h3",
                { class: N(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              S(
                "h3",
                { class: N(["text-4xl text-bold", r(n.brightness)]) },
                [
                  X.value != Math.floor(X.value)
                    ? (he(), Oe("span", cb, "$" + At(X.value), 1))
                    : lt("", !0),
                  Ee("$" + At(X.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          S("form", db, [
            S(
              "input",
              { type: "hidden", name: "services", value: xe.value },
              null,
              8,
              fb,
            ),
            S(
              "input",
              { type: "hidden", name: "total", value: X.value },
              null,
              8,
              pb,
            ),
            S("div", hb, [
              S(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: N([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              S(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: N([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            S("div", gb, [
              S(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: N([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              S(
                "textarea",
                {
                  name: "notes",
                  placeholder: "Notes",
                  class: N([
                    "rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            S(
              "button",
              {
                "aria-label": "Submit a contact form",
                id: "submitButton",
                type: "submit",
                class: N([
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
          S(
            "p",
            { class: N(["text-center mt-4", i(n.brightness)]) },
            [
              Ee(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              vb,
              mb,
              Ee(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              S(
                "a",
                { href: "/contact", class: N(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              Ee(" and we can get that figured out."),
              bb,
              yb,
              Ee("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  xb = Zn(wb, [["__scopeId", "data-v-e20b9d11"]]),
  Sb = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        he(), st(xb, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  Eb = { class: "flex-col" },
  _b = { class: "py-5 flex-col w-full" },
  Cb = { id: "cta" },
  Tb = {
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
            l = document.getElementsByName("email")[0].value,
            o = document.getElementsByName("message")[0].value,
            f = window.location.href,
            c = new XMLHttpRequest()
          c.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            c.setRequestHeader("Content-Type", "application/json"),
            c.send(
              JSON.stringify({
                form: a,
                name: i,
                email: l,
                message: o,
                referrer: f,
              }),
            ),
            (c.onloadend = function () {
              if (
                (console.log(
                  `Status: ${c.status}, Response: ${c.responseText}`,
                ),
                c.status == 200)
              ) {
                let p = document.getElementById("cta"),
                  v = document.createElement("div")
                v.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (v.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  p.appendChild(v)
                let m = p.getElementsByTagName("input")
                for (let E = 0; E < m.length; E++) m[E].style.display = "none"
                let k = p.getElementsByTagName("textarea")[0]
                k.style.display = "none"
                let g = document.getElementById("submitButton")
                g.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        he(),
        Oe("div", Eb, [
          S("div", _b, [
            S(
              "h2",
              {
                class: N([
                  "text-5xl text-center text-semibold",
                  n(t.brightness),
                ]),
              },
              " Contact Me ",
              2,
            ),
          ]),
          S("form", Cb, [
            S(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: N(["rounded p-2 w-full", s.inputClass]),
              },
              null,
              2,
            ),
            S(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Email",
                class: N(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            S(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: N(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            S(
              "button",
              {
                id: "submitButton",
                type: "submit",
                "aria-label": "Submit a contact form",
                onClick: r,
                class: N([
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
  Pb = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  kb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  Mb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  $b =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  Ib =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  Ob =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  Ab =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  Lb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  Nb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  Rb =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  Bb =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  hn =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  gn = '</title><path d="',
  vn = '"/></svg>',
  Lr = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return hn + "Bootstrap" + gn + this.path + vn
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  zb = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return hn + "Cloudflare" + gn + this.path + vn
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  Fb = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return hn + "Figma" + gn + this.path + vn
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  jb = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return hn + "JavaScript" + gn + this.path + vn
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  Db = {
    title: "NGINX",
    slug: "nginx",
    get svg() {
      return hn + "NGINX" + gn + this.path + vn
    },
    path: "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",
    source: "https://www.nginx.com/press/",
    hex: "009639",
    guidelines: "https://www.nginx.com/press/",
  },
  Xo = {
    title: "PHP",
    slug: "php",
    get svg() {
      return hn + "PHP" + gn + this.path + vn
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  Hb = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return hn + "Tailwind CSS" + gn + this.path + vn
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  Zo = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return hn + "Vue.js" + gn + this.path + vn
    },
    path: "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",
    source:
      "https://github.com/vuejs/art/blob/a1c78b74569b70a25300925b4eacfefcc143b8f6/logo.svg",
    hex: "4FC08D",
    guidelines:
      "https://github.com/vuejs/art/blob/a1c78b74569b70a25300925b4eacfefcc143b8f6/README.md",
    license: {
      type: "CC-BY-NC-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-NC-SA-4.0",
    },
  },
  _n = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return hn + "WordPress" + gn + this.path + vn
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  Gb = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  Vb = { class: "py-5 flex-col w-full" },
  Wb = { class: "prose" },
  qb = ["onMouseover", "onClick"],
  Ub = { class: "image-container" },
  Yb = ["src", "alt"],
  Kb = { class: "flex gap-2 items-center" },
  Xb = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  Zb = ["d"],
  Jb = {
    __name: "Portfolio",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (l) => {
          if (l >= 4) return "text-slate-800"
          if (l == 3) return "text-slate-200"
          if (l == 2) return "text-slate-300"
          if (l == 1) return "text-slate-300"
        },
        r = (l) => {
          if (l >= 4) return "text-emerald-500"
          if (l == 3) return "text-orange-600"
          if (l == 2) return "text-orange-500"
          if (l == 1) return "text-orange-400"
        },
        s = be([
          {
            icons: [_n, Xo, Fb],
            title: "BlenderNation Bazaar",
            image: kb,
            link: "/portfolio/bazaar",
          },
          {
            icons: [Zo, Db, zb],
            title: "OKC South Stake",
            image: Mb,
            link: "/portfolio/okc-south-stake",
          },
        ]),
        a = be([
          {
            icons: [_n, jb],
            title: "Build On Your Land",
            image: $b,
            link: "/portfolio/build-on-your-land",
          },
          {
            icons: [_n, Xo],
            title: "Stuart Pipe and Hose",
            image: Ib,
            link: "/portfolio/stuart-pipe",
          },
          {
            icons: [_n, Lr],
            title: "Atlanta Floor One",
            image: Ob,
            link: "/portfolio/atlanta-floor-one",
          },
          {
            icons: [_n, Lr],
            title: "Swim State Pool",
            image: Ab,
            link: "/portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [Zo, Hb],
            image: Lb,
            link: "/portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [_n, Lr],
            image: Nb,
            link: "/portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [_n, Lr],
            image: Rb,
            link: "/portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [_n, Lr],
            image: Bb,
            link: "/portfolio/aris-search",
          },
        ]),
        i = be(null)
      return (l, o) => (
        he(),
        Oe("div", Gb, [
          S("div", Vb, [
            S("span", Wb, [
              S(
                "h2",
                {
                  class: N([
                    "text-5xl text-center text-semibold",
                    n(t.brightness),
                  ]),
                },
                " Web Portfolio ",
                2,
              ),
              S(
                "p",
                { class: N(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. Check out some of my work below! ",
                2,
              ),
              S(
                "h3",
                { class: N(["text-2xl text-center", n(t.brightness)]) },
                " Full Sites (I designed and developed) ",
                2,
              ),
            ]),
          ]),
          (he(!0),
          Oe(
            nt,
            null,
            mr(
              [s.value, a.value],
              (f) => (
                he(),
                Oe(
                  "div",
                  {
                    class: N([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": f == s.value,
                        "lg:grid-cols-3 mt-4": f == a.value,
                      },
                    ]),
                  },
                  [
                    (he(!0),
                    Oe(
                      nt,
                      null,
                      mr(
                        f,
                        (c) => (
                          he(),
                          Oe(
                            "div",
                            {
                              class:
                                "flex flex-col justify-end rounded-xl portfolioCard",
                              key: c.title,
                              onMouseover: (p) => (i.value = c.title),
                              onMouseleave:
                                o[0] || (o[0] = (p) => (i.value = null)),
                              onClick: (p) => l.$router.push(c.link),
                              style: Ds({
                                opacity:
                                  i.value === c.title || i.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              S("div", Ub, [
                                S(
                                  "img",
                                  {
                                    src: c.image,
                                    alt: c.title,
                                    class:
                                      "bg-slate-200 object-contain w-full rounded-t-xl",
                                  },
                                  null,
                                  8,
                                  Yb,
                                ),
                              ]),
                              S("div", null, [
                                S("div", null, [
                                  S(
                                    "div",
                                    {
                                      class: N([
                                        "p-4 flex justify-between items-center rounded-b-xl",
                                        {
                                          "bg-slate-300": e.brightness == 5,
                                          "bg-slate-200": e.brightness == 4,
                                          "bg-slate-300": e.brightness == 3,
                                          "bg-slate-500": e.brightness == 2,
                                          "bg-slate-600": e.brightness == 1,
                                        },
                                      ]),
                                    },
                                    [
                                      S("div", null, [
                                        S(
                                          "h5",
                                          {
                                            class: N([
                                              "text-xl m-0 p-0",
                                              r(t.brightness),
                                            ]),
                                          },
                                          At(c.title),
                                          3,
                                        ),
                                      ]),
                                      S("div", Kb, [
                                        (he(!0),
                                        Oe(
                                          nt,
                                          null,
                                          mr(
                                            c.icons,
                                            (p, v) => (
                                              he(),
                                              Oe(
                                                "div",
                                                {
                                                  key: v,
                                                  class: N([
                                                    "block",
                                                    {
                                                      "text-slate-800":
                                                        e.brightness == 5,
                                                      "text-slate-800":
                                                        e.brightness == 4,
                                                      "text-slate-800":
                                                        e.brightness == 3,
                                                      "text-slate-200":
                                                        e.brightness == 2,
                                                      "text-slate-200":
                                                        e.brightness == 1,
                                                    },
                                                  ]),
                                                },
                                                [
                                                  (he(),
                                                  Oe("svg", Xb, [
                                                    S(
                                                      "path",
                                                      { d: p.path },
                                                      null,
                                                      8,
                                                      Zb,
                                                    ),
                                                  ])),
                                                ],
                                                2,
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]),
                                    ],
                                    2,
                                  ),
                                ]),
                              ]),
                            ],
                            44,
                            qb,
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                  2,
                )
              ),
            ),
            256,
          )),
        ])
      )
    },
  },
  Qb = Zn(Jb, [["__scopeId", "data-v-2bda4711"]])
function Jo(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function Ui(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Jo(t[n]) && Jo(e[n]) && Object.keys(t[n]).length > 0 && Ui(e[n], t[n])
    })
}
const Mc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      },
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
}
function cn() {
  const e = typeof document < "u" ? document : {}
  return Ui(e, Mc), e
}
const e2 = {
  document: Mc,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ""
      },
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e)
  },
}
function zt() {
  const e = typeof window < "u" ? window : {}
  return Ui(e, e2), e
}
function t2(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  )
}
function n2(e) {
  const t = e
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null
    } catch {}
    try {
      delete t[n]
    } catch {}
  })
}
function ci(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function Os() {
  return Date.now()
}
function r2(e) {
  const t = zt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function s2(e, t) {
  t === void 0 && (t = "x")
  const n = zt()
  let r, s, a
  const i = r2(e)
  return (
    n.WebKitCSSMatrix
      ? ((s = i.transform || i.webkitTransform),
        s.split(",").length > 6 &&
          (s = s
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (a = new n.WebKitCSSMatrix(s === "none" ? "" : s)))
      : ((a =
          i.MozTransform ||
          i.OTransform ||
          i.MsTransform ||
          i.msTransform ||
          i.transform ||
          i
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = a.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (s = a.m41)
        : r.length === 16
          ? (s = parseFloat(r[12]))
          : (s = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (s = a.m42)
        : r.length === 16
          ? (s = parseFloat(r[13]))
          : (s = parseFloat(r[5]))),
    s || 0
  )
}
function vs(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  )
}
function a2(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function Lt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !a2(r)) {
      const s = Object.keys(Object(r)).filter((a) => t.indexOf(a) < 0)
      for (let a = 0, i = s.length; a < i; a += 1) {
        const l = s[a],
          o = Object.getOwnPropertyDescriptor(r, l)
        o !== void 0 &&
          o.enumerable &&
          (vs(e[l]) && vs(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : Lt(e[l], r[l])
            : !vs(e[l]) && vs(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Lt(e[l], r[l]))
              : (e[l] = r[l]))
      }
    }
  }
  return e
}
function ms(e, t, n) {
  e.style.setProperty(t, n)
}
function $c(e) {
  let { swiper: t, targetPosition: n, side: r } = e
  const s = zt(),
    a = -t.translate
  let i = null,
    l
  const o = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(t.cssModeFrameID)
  const f = n > a ? "next" : "prev",
    c = (v, m) => (f === "next" && v >= m) || (f === "prev" && v <= m),
    p = () => {
      ;(l = new Date().getTime()), i === null && (i = l)
      const v = Math.max(Math.min((l - i) / o, 1), 0),
        m = 0.5 - Math.cos(v * Math.PI) / 2
      let k = a + m * (n - a)
      if ((c(k, n) && (k = n), t.wrapperEl.scrollTo({ [r]: k }), c(k, n))) {
        ;(t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: k })
          }),
          s.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = s.requestAnimationFrame(p)
    }
  p()
}
function Qt(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t))
}
function As(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function Ls(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : t2(t))), n
}
function i2(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function l2(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function In(e, t) {
  return zt().getComputedStyle(e, null).getPropertyValue(t)
}
function Ns(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function Ic(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement)
  return n
}
function di(e, t, n) {
  const r = zt()
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
        )
    : e.offsetWidth
}
let Ba
function o2() {
  const e = zt(),
    t = cn()
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  }
}
function Oc() {
  return Ba || (Ba = o2()), Ba
}
let za
function u2(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = Oc(),
    r = zt(),
    s = r.navigator.platform,
    a = t || r.navigator.userAgent,
    i = { ios: !1, android: !1 },
    l = r.screen.width,
    o = r.screen.height,
    f = a.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = a.match(/(iPad).*OS\s([\d_]+)/)
  const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = s === "Win32"
  let k = s === "MacIntel"
  const g = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ]
  return (
    !c &&
      k &&
      n.touch &&
      g.indexOf(`${l}x${o}`) >= 0 &&
      ((c = a.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (k = !1)),
    f && !m && ((i.os = "android"), (i.android = !0)),
    (c || v || p) && ((i.os = "ios"), (i.ios = !0)),
    i
  )
}
function c2(e) {
  return e === void 0 && (e = {}), za || (za = u2(e)), za
}
let Fa
function d2() {
  const e = zt()
  let t = !1
  function n() {
    const r = e.navigator.userAgent.toLowerCase()
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    )
  }
  if (n()) {
    const r = String(e.navigator.userAgent)
    if (r.includes("Version/")) {
      const [s, a] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((i) => Number(i))
      t = s < 16 || (s === 16 && a < 2)
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
  }
}
function f2() {
  return Fa || (Fa = d2()), Fa
}
function p2(e) {
  let { swiper: t, on: n, emit: r } = e
  const s = zt()
  let a = null,
    i = null
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"))
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((a = new ResizeObserver((p) => {
          i = s.requestAnimationFrame(() => {
            const { width: v, height: m } = t
            let k = v,
              g = m
            p.forEach((E) => {
              let { contentBoxSize: T, contentRect: w, target: y } = E
              ;(y && y !== t.el) ||
                ((k = w ? w.width : (T[0] || T).inlineSize),
                (g = w ? w.height : (T[0] || T).blockSize))
            }),
              (k !== v || g !== m) && l()
          })
        })),
        a.observe(t.el))
    },
    f = () => {
      i && s.cancelAnimationFrame(i),
        a && a.unobserve && t.el && (a.unobserve(t.el), (a = null))
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange")
    }
  n("init", () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
      o()
      return
    }
    s.addEventListener("resize", l), s.addEventListener("orientationchange", c)
  }),
    n("destroy", () => {
      f(),
        s.removeEventListener("resize", l),
        s.removeEventListener("orientationchange", c)
    })
}
function h2(e) {
  let { swiper: t, extendParams: n, on: r, emit: s } = e
  const a = [],
    i = zt(),
    l = function (c, p) {
      p === void 0 && (p = {})
      const v = i.MutationObserver || i.WebkitMutationObserver,
        m = new v((k) => {
          if (t.__preventObserver__) return
          if (k.length === 1) {
            s("observerUpdate", k[0])
            return
          }
          const g = function () {
            s("observerUpdate", k[0])
          }
          i.requestAnimationFrame
            ? i.requestAnimationFrame(g)
            : i.setTimeout(g, 0)
        })
      m.observe(c, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        a.push(m)
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Ic(t.hostEl)
          for (let p = 0; p < c.length; p += 1) l(c[p])
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 })
      }
    },
    f = () => {
      a.forEach((c) => {
        c.disconnect()
      }),
        a.splice(0, a.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", o),
    r("destroy", f)
}
var g2 = {
  on(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r
    const s = n ? "unshift" : "push"
    return (
      e.split(" ").forEach((a) => {
        r.eventsListeners[a] || (r.eventsListeners[a] = []),
          r.eventsListeners[a][s](t)
      }),
      r
    )
  },
  once(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r
    function s() {
      r.off(e, s), s.__emitterProxy && delete s.__emitterProxy
      for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
        i[l] = arguments[l]
      t.apply(r, i)
    }
    return (s.__emitterProxy = t), r.on(e, s, n)
  },
  onAny(e, t) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n
    const r = t ? "unshift" : "push"
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
  },
  offAny(e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
    const n = t.eventsAnyListeners.indexOf(e)
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
  },
  off(e, t) {
    const n = this
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((s, a) => {
                ;(s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(a, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, r
    for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
      a[i] = arguments[i]
    return (
      typeof a[0] == "string" || Array.isArray(a[0])
        ? ((t = a[0]), (n = a.slice(1, a.length)), (r = e))
        : ((t = a[0].events), (n = a[0].data), (r = a[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((f) => {
            f.apply(r, [o, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((f) => {
              f.apply(r, n)
            })
      }),
      e
    )
  },
}
function v2() {
  const e = this
  let t, n
  const r = e.el
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(In(r, "padding-left") || 0, 10) -
        parseInt(In(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(In(r, "padding-top") || 0, 10) -
        parseInt(In(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function m2() {
  const e = this
  function t(D, Q) {
    return parseFloat(D.getPropertyValue(e.getDirectionLabel(Q)) || 0)
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: s, size: a, rtlTranslate: i, wrongRTL: l } = e,
    o = e.virtual && n.virtual.enabled,
    f = o ? e.virtual.slides.length : e.slides.length,
    c = Qt(s, `.${e.params.slideClass}, swiper-slide`),
    p = o ? e.virtual.slides.length : c.length
  let v = []
  const m = [],
    k = []
  let g = n.slidesOffsetBefore
  typeof g == "function" && (g = n.slidesOffsetBefore.call(e))
  let E = n.slidesOffsetAfter
  typeof E == "function" && (E = n.slidesOffsetAfter.call(e))
  const T = e.snapGrid.length,
    w = e.slidesGrid.length
  let y = n.spaceBetween,
    $ = -g,
    L = 0,
    I = 0
  if (typeof a > "u") return
  typeof y == "string" && y.indexOf("%") >= 0
    ? (y = (parseFloat(y.replace("%", "")) / 100) * a)
    : typeof y == "string" && (y = parseFloat(y)),
    (e.virtualSize = -y),
    c.forEach((D) => {
      i ? (D.style.marginLeft = "") : (D.style.marginRight = ""),
        (D.style.marginBottom = ""),
        (D.style.marginTop = "")
    }),
    n.centeredSlides &&
      n.cssMode &&
      (ms(r, "--swiper-centered-offset-before", ""),
      ms(r, "--swiper-centered-offset-after", ""))
  const ne = n.grid && n.grid.rows > 1 && e.grid
  ne ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
  let q
  const G =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (D) => typeof n.breakpoints[D].slidesPerView < "u",
    ).length > 0
  for (let D = 0; D < p; D += 1) {
    q = 0
    let Q
    if (
      (c[D] && (Q = c[D]),
      ne && e.grid.updateSlide(D, Q, c),
      !(c[D] && In(Q, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        G && (c[D].style[e.getDirectionLabel("width")] = "")
        const ge = getComputedStyle(Q),
          X = Q.style.transform,
          xe = Q.style.webkitTransform
        if (
          (X && (Q.style.transform = "none"),
          xe && (Q.style.webkitTransform = "none"),
          n.roundLengths)
        )
          q = e.isHorizontal() ? di(Q, "width", !0) : di(Q, "height", !0)
        else {
          const Ce = t(ge, "width"),
            j = t(ge, "padding-left"),
            ie = t(ge, "padding-right"),
            V = t(ge, "margin-left"),
            Ue = t(ge, "margin-right"),
            Pe = ge.getPropertyValue("box-sizing")
          if (Pe && Pe === "border-box") q = Ce + V + Ue
          else {
            const { clientWidth: Qe, offsetWidth: et } = Q
            q = Ce + j + ie + V + Ue + (et - Qe)
          }
        }
        X && (Q.style.transform = X),
          xe && (Q.style.webkitTransform = xe),
          n.roundLengths && (q = Math.floor(q))
      } else
        (q = (a - (n.slidesPerView - 1) * y) / n.slidesPerView),
          n.roundLengths && (q = Math.floor(q)),
          c[D] && (c[D].style[e.getDirectionLabel("width")] = `${q}px`)
      c[D] && (c[D].swiperSlideSize = q),
        k.push(q),
        n.centeredSlides
          ? (($ = $ + q / 2 + L / 2 + y),
            L === 0 && D !== 0 && ($ = $ - a / 2 - y),
            D === 0 && ($ = $ - a / 2 - y),
            Math.abs($) < 1 / 1e3 && ($ = 0),
            n.roundLengths && ($ = Math.floor($)),
            I % n.slidesPerGroup === 0 && v.push($),
            m.push($))
          : (n.roundLengths && ($ = Math.floor($)),
            (I - Math.min(e.params.slidesPerGroupSkip, I)) %
              e.params.slidesPerGroup ===
              0 && v.push($),
            m.push($),
            ($ = $ + q + y)),
        (e.virtualSize += q + y),
        (L = q),
        (I += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + E),
    i &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + y}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`),
    ne && e.grid.updateWrapperSize(q, v),
    !n.centeredSlides)
  ) {
    const D = []
    for (let Q = 0; Q < v.length; Q += 1) {
      let ge = v[Q]
      n.roundLengths && (ge = Math.floor(ge)),
        v[Q] <= e.virtualSize - a && D.push(ge)
    }
    ;(v = D),
      Math.floor(e.virtualSize - a) - Math.floor(v[v.length - 1]) > 1 &&
        v.push(e.virtualSize - a)
  }
  if (o && n.loop) {
    const D = k[0] + y
    if (n.slidesPerGroup > 1) {
      const Q = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        ge = D * n.slidesPerGroup
      for (let X = 0; X < Q; X += 1) v.push(v[v.length - 1] + ge)
    }
    for (let Q = 0; Q < e.virtual.slidesBefore + e.virtual.slidesAfter; Q += 1)
      n.slidesPerGroup === 1 && v.push(v[v.length - 1] + D),
        m.push(m[m.length - 1] + D),
        (e.virtualSize += D)
  }
  if ((v.length === 0 && (v = [0]), y !== 0)) {
    const D =
      e.isHorizontal() && i ? "marginLeft" : e.getDirectionLabel("marginRight")
    c.filter((Q, ge) =>
      !n.cssMode || n.loop ? !0 : ge !== c.length - 1,
    ).forEach((Q) => {
      Q.style[D] = `${y}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let D = 0
    k.forEach((ge) => {
      D += ge + (y || 0)
    }),
      (D -= y)
    const Q = D - a
    v = v.map((ge) => (ge <= 0 ? -g : ge > Q ? Q + E : ge))
  }
  if (n.centerInsufficientSlides) {
    let D = 0
    if (
      (k.forEach((Q) => {
        D += Q + (y || 0)
      }),
      (D -= y),
      D < a)
    ) {
      const Q = (a - D) / 2
      v.forEach((ge, X) => {
        v[X] = ge - Q
      }),
        m.forEach((ge, X) => {
          m[X] = ge + Q
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: v,
      slidesGrid: m,
      slidesSizesGrid: k,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ms(r, "--swiper-centered-offset-before", `${-v[0]}px`),
      ms(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - k[k.length - 1] / 2}px`,
      )
    const D = -e.snapGrid[0],
      Q = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((ge) => ge + D)),
      (e.slidesGrid = e.slidesGrid.map((ge) => ge + Q))
  }
  if (
    (p !== f && e.emit("slidesLengthChange"),
    v.length !== T &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    m.length !== w && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const D = `${n.containerModifierClass}backface-hidden`,
      Q = e.el.classList.contains(D)
    p <= n.maxBackfaceHiddenSlides
      ? Q || e.el.classList.add(D)
      : Q && e.el.classList.remove(D)
  }
}
function b2(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled
  let s = 0,
    a
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const i = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l])
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l)
      })
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        const l = t.activeIndex + a
        if (l > t.slides.length && !r) break
        n.push(i(l))
      }
  else n.push(i(t.activeIndex))
  for (a = 0; a < n.length; a += 1)
    if (typeof n[a] < "u") {
      const l = n[a].offsetHeight
      s = l > s ? l : s
    }
  ;(s || s === 0) && (t.wrapperEl.style.height = `${s}px`)
}
function y2() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment()
}
function w2(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: s, snapGrid: a } = t
  if (r.length === 0) return
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset()
  let i = -e
  s && (i = e),
    r.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = [])
  let l = n.spaceBetween
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l))
  for (let o = 0; o < r.length; o += 1) {
    const f = r[o]
    let c = f.swiperSlideOffset
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset)
    const p =
        (i + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (f.swiperSlideSize + l),
      v =
        (i - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (f.swiperSlideSize + l),
      m = -(i - c),
      k = m + t.slidesSizesGrid[o],
      g = m >= 0 && m <= t.size - t.slidesSizesGrid[o]
    ;((m >= 0 && m < t.size - 1) ||
      (k > 1 && k <= t.size) ||
      (m <= 0 && k >= t.size)) &&
      (t.visibleSlides.push(f),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      g && r[o].classList.add(n.slideFullyVisibleClass),
      (f.progress = s ? -p : p),
      (f.originalProgress = s ? -v : v)
  }
}
function x2(e) {
  const t = this
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * c) || 0
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate()
  let { progress: s, isBeginning: a, isEnd: i, progressLoop: l } = t
  const o = a,
    f = i
  if (r === 0) (s = 0), (a = !0), (i = !0)
  else {
    s = (e - t.minTranslate()) / r
    const c = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1
    ;(a = c || s <= 0), (i = p || s >= 1), c && (s = 0), p && (s = 1)
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      v = t.slidesGrid[c],
      m = t.slidesGrid[p],
      k = t.slidesGrid[t.slidesGrid.length - 1],
      g = Math.abs(e)
    g >= v ? (l = (g - v) / k) : (l = (g + k - m) / k), l > 1 && (l -= 1)
  }
  Object.assign(t, { progress: s, progressLoop: l, isBeginning: a, isEnd: i }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !o && t.emit("reachBeginning toEdge"),
    i && !f && t.emit("reachEnd toEdge"),
    ((o && !a) || (f && !i)) && t.emit("fromEdge"),
    t.emit("progress", s)
}
function S2() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: s } = e,
    a = e.virtual && n.virtual.enabled,
    i = e.grid && n.grid && n.grid.rows > 1,
    l = (p) => Qt(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0]
  t.forEach((p) => {
    p.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
  })
  let o, f, c
  if (a)
    if (n.loop) {
      let p = s - e.virtual.slidesBefore
      p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        (o = l(`[data-swiper-slide-index="${p}"]`))
    } else o = l(`[data-swiper-slide-index="${s}"]`)
  else
    i
      ? ((o = t.filter((p) => p.column === s)[0]),
        (c = t.filter((p) => p.column === s + 1)[0]),
        (f = t.filter((p) => p.column === s - 1)[0]))
      : (o = t[s])
  o &&
    (o.classList.add(n.slideActiveClass),
    i
      ? (c && c.classList.add(n.slideNextClass),
        f && f.classList.add(n.slidePrevClass))
      : ((c = l2(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c && (c = t[0]),
        c && c.classList.add(n.slideNextClass),
        (f = i2(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !f === 0 && (f = t[t.length - 1]),
        f && f.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses()
}
const Cs = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n())
    if (r) {
      let s = r.querySelector(`.${e.params.lazyPreloaderClass}`)
      !s &&
        e.isElement &&
        (r.shadowRoot
          ? (s = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((s = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                s && s.remove())
            })),
        s && s.remove()
    }
  },
  ja = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  fi = (e) => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      s = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const i = s,
        l = [i - t]
      l.push(...Array.from({ length: t }).map((o, f) => i + r + f)),
        e.slides.forEach((o, f) => {
          l.includes(o.column) && ja(e, f)
        })
      return
    }
    const a = s + r - 1
    if (e.params.rewind || e.params.loop)
      for (let i = s - t; i <= a + t; i += 1) {
        const l = ((i % n) + n) % n
        ;(l < s || l > a) && ja(e, l)
      }
    else
      for (let i = Math.max(s - t, 0); i <= Math.min(a + t, n - 1); i += 1)
        i !== s && (i > a || i < s) && ja(e, i)
  }
function E2(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate
  let s
  for (let a = 0; a < t.length; a += 1)
    typeof t[a + 1] < "u"
      ? r >= t[a] && r < t[a + 1] - (t[a + 1] - t[a]) / 2
        ? (s = a)
        : r >= t[a] && r < t[a + 1] && (s = a + 1)
      : r >= t[a] && (s = a)
  return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s
}
function _2(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: s, activeIndex: a, realIndex: i, snapIndex: l } = t
  let o = e,
    f
  const c = (m) => {
    let k = m - t.virtual.slidesBefore
    return (
      k < 0 && (k = t.virtual.slides.length + k),
      k >= t.virtual.slides.length && (k -= t.virtual.slides.length),
      k
    )
  }
  if ((typeof o > "u" && (o = E2(t)), r.indexOf(n) >= 0)) f = r.indexOf(n)
  else {
    const m = Math.min(s.slidesPerGroupSkip, o)
    f = m + Math.floor((o - m) / s.slidesPerGroup)
  }
  if ((f >= r.length && (f = r.length - 1), o === a && !t.params.loop)) {
    f !== l && ((t.snapIndex = f), t.emit("snapIndexChange"))
    return
  }
  if (o === a && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(o)
    return
  }
  const p = t.grid && s.grid && s.grid.rows > 1
  let v
  if (t.virtual && s.virtual.enabled && s.loop) v = c(o)
  else if (p) {
    const m = t.slides.filter((g) => g.column === o)[0]
    let k = parseInt(m.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(k) && (k = Math.max(t.slides.indexOf(m), 0)),
      (v = Math.floor(k / s.grid.rows))
  } else if (t.slides[o]) {
    const m = t.slides[o].getAttribute("data-swiper-slide-index")
    m ? (v = parseInt(m, 10)) : (v = o)
  } else v = o
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: f,
    previousRealIndex: i,
    realIndex: v,
    previousIndex: a,
    activeIndex: o,
  }),
    t.initialized && fi(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (i !== v && t.emit("realIndexChange"), t.emit("slideChange"))
}
function C2(e, t) {
  const n = this,
    r = n.params
  let s = e.closest(`.${r.slideClass}, swiper-slide`)
  !s &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !s && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (s = l)
    })
  let a = !1,
    i
  if (s) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === s) {
        ;(a = !0), (i = l)
        break
      }
  }
  if (s && a)
    (n.clickedSlide = s),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            s.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = i)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var T2 = {
  updateSize: v2,
  updateSlides: m2,
  updateAutoHeight: b2,
  updateSlidesOffset: y2,
  updateSlidesProgress: w2,
  updateProgress: x2,
  updateSlidesClasses: S2,
  updateActiveIndex: _2,
  updateClickedSlide: C2,
}
function P2(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: r, translate: s, wrapperEl: a } = t
  if (n.virtualTranslate) return r ? -s : s
  if (n.cssMode) return s
  let i = s2(a, e)
  return (i += t.cssOverflowAdjustment()), r && (i = -i), i || 0
}
function k2(e, t) {
  const n = this,
    { rtlTranslate: r, params: s, wrapperEl: a, progress: i } = n
  let l = 0,
    o = 0
  const f = 0
  n.isHorizontal() ? (l = r ? -e : e) : (o = e),
    s.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : o),
    s.cssMode
      ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -o)
      : s.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (a.style.transform = `translate3d(${l}px, ${o}px, ${f}px)`))
  let c
  const p = n.maxTranslate() - n.minTranslate()
  p === 0 ? (c = 0) : (c = (e - n.minTranslate()) / p),
    c !== i && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function M2() {
  return -this.snapGrid[0]
}
function $2() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function I2(e, t, n, r, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0)
  const a = this,
    { params: i, wrapperEl: l } = a
  if (a.animating && i.preventInteractionOnTransition) return !1
  const o = a.minTranslate(),
    f = a.maxTranslate()
  let c
  if (
    (r && e > o ? (c = o) : r && e < f ? (c = f) : (c = e),
    a.updateProgress(c),
    i.cssMode)
  ) {
    const p = a.isHorizontal()
    if (t === 0) l[p ? "scrollLeft" : "scrollTop"] = -c
    else {
      if (!a.support.smoothScroll)
        return (
          $c({ swiper: a, targetPosition: -c, side: p ? "left" : "top" }), !0
        )
      l.scrollTo({ [p ? "left" : "top"]: -c, behavior: "smooth" })
    }
    return !0
  }
  return (
    t === 0
      ? (a.setTransition(0),
        a.setTranslate(c),
        n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd")))
      : (a.setTransition(t),
        a.setTranslate(c),
        n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (v) {
              !a ||
                a.destroyed ||
                (v.target === this &&
                  (a.wrapperEl.removeEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd,
                  ),
                  (a.onTranslateToWrapperTransitionEnd = null),
                  delete a.onTranslateToWrapperTransitionEnd,
                  n && a.emit("transitionEnd")))
            }),
          a.wrapperEl.addEventListener(
            "transitionend",
            a.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  )
}
var O2 = {
  getTranslate: P2,
  setTranslate: k2,
  minTranslate: M2,
  maxTranslate: $2,
  translateTo: I2,
}
function A2(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function Ac(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: s } = e
  const { activeIndex: a, previousIndex: i } = t
  let l = r
  if (
    (l || (a > i ? (l = "next") : a < i ? (l = "prev") : (l = "reset")),
    t.emit(`transition${s}`),
    n && a !== i)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${s}`)
      return
    }
    t.emit(`slideChangeTransition${s}`),
      l === "next"
        ? t.emit(`slideNextTransition${s}`)
        : t.emit(`slidePrevTransition${s}`)
  }
}
function L2(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Ac({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function N2(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Ac({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var R2 = { setTransition: A2, transitionStart: L2, transitionEnd: N2 }
function B2(e, t, n, r, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const a = this
  let i = e
  i < 0 && (i = 0)
  const {
    params: l,
    snapGrid: o,
    slidesGrid: f,
    previousIndex: c,
    activeIndex: p,
    rtlTranslate: v,
    wrapperEl: m,
    enabled: k,
  } = a
  if ((a.animating && l.preventInteractionOnTransition) || (!k && !r && !s))
    return !1
  const g = Math.min(a.params.slidesPerGroupSkip, i)
  let E = g + Math.floor((i - g) / a.params.slidesPerGroup)
  E >= o.length && (E = o.length - 1)
  const T = -o[E]
  if (l.normalizeSlideIndex)
    for (let y = 0; y < f.length; y += 1) {
      const $ = -Math.floor(T * 100),
        L = Math.floor(f[y] * 100),
        I = Math.floor(f[y + 1] * 100)
      typeof f[y + 1] < "u"
        ? $ >= L && $ < I - (I - L) / 2
          ? (i = y)
          : $ >= L && $ < I && (i = y + 1)
        : $ >= L && (i = y)
    }
  if (
    a.initialized &&
    i !== p &&
    ((!a.allowSlideNext &&
      (v
        ? T > a.translate && T > a.minTranslate()
        : T < a.translate && T < a.minTranslate())) ||
      (!a.allowSlidePrev &&
        T > a.translate &&
        T > a.maxTranslate() &&
        (p || 0) !== i))
  )
    return !1
  i !== (c || 0) && n && a.emit("beforeSlideChangeStart"), a.updateProgress(T)
  let w
  if (
    (i > p ? (w = "next") : i < p ? (w = "prev") : (w = "reset"),
    (v && -T === a.translate) || (!v && T === a.translate))
  )
    return (
      a.updateActiveIndex(i),
      l.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      l.effect !== "slide" && a.setTranslate(T),
      w !== "reset" && (a.transitionStart(n, w), a.transitionEnd(n, w)),
      !1
    )
  if (l.cssMode) {
    const y = a.isHorizontal(),
      $ = v ? T : -T
    if (t === 0) {
      const L = a.virtual && a.params.virtual.enabled
      L &&
        ((a.wrapperEl.style.scrollSnapType = "none"),
        (a._immediateVirtual = !0)),
        L && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              m[y ? "scrollLeft" : "scrollTop"] = $
            }))
          : (m[y ? "scrollLeft" : "scrollTop"] = $),
        L &&
          requestAnimationFrame(() => {
            ;(a.wrapperEl.style.scrollSnapType = ""), (a._immediateVirtual = !1)
          })
    } else {
      if (!a.support.smoothScroll)
        return (
          $c({ swiper: a, targetPosition: $, side: y ? "left" : "top" }), !0
        )
      m.scrollTo({ [y ? "left" : "top"]: $, behavior: "smooth" })
    }
    return !0
  }
  return (
    a.setTransition(t),
    a.setTranslate(T),
    a.updateActiveIndex(i),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", t, r),
    a.transitionStart(n, w),
    t === 0
      ? a.transitionEnd(n, w)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function ($) {
            !a ||
              a.destroyed ||
              ($.target === this &&
                (a.wrapperEl.removeEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd,
                ),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(n, w)))
          }),
        a.wrapperEl.addEventListener(
          "transitionend",
          a.onSlideToWrapperTransitionEnd,
        )),
    !0
  )
}
function z2(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const s = this,
    a = s.grid && s.params.grid && s.params.grid.rows > 1
  let i = e
  if (s.params.loop)
    if (s.virtual && s.params.virtual.enabled) i = i + s.virtual.slidesBefore
    else {
      let l
      if (a) {
        const v = i * s.params.grid.rows
        l = s.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === v,
        )[0].column
      } else l = s.getSlideIndexByData(i)
      const o = a
          ? Math.ceil(s.slides.length / s.params.grid.rows)
          : s.slides.length,
        { centeredSlides: f } = s.params
      let c = s.params.slidesPerView
      c === "auto"
        ? (c = s.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
          f && c % 2 === 0 && (c = c + 1))
      let p = o - l < c
      if ((f && (p = p || l < Math.ceil(c / 2)), p)) {
        const v = f
          ? l < s.activeIndex
            ? "prev"
            : "next"
          : l - s.activeIndex - 1 < s.params.slidesPerView
            ? "next"
            : "prev"
        s.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === "next" ? l + 1 : l - o + 1,
          slideRealIndex: v === "next" ? s.realIndex : void 0,
        })
      }
      if (a) {
        const v = i * s.params.grid.rows
        i = s.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === v,
        )[0].column
      } else i = s.getSlideIndexByData(i)
    }
  return (
    requestAnimationFrame(() => {
      s.slideTo(i, t, n, r)
    }),
    s
  )
}
function F2(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const r = this,
    { enabled: s, params: a, animating: i } = r
  if (!s) return r
  let l = a.slidesPerGroup
  a.slidesPerView === "auto" &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1))
  const o = r.activeIndex < a.slidesPerGroupSkip ? 1 : l,
    f = r.virtual && a.virtual.enabled
  if (a.loop) {
    if (i && !f && a.loopPreventsSliding) return !1
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && a.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + o, e, t, n)
        }),
        !0
      )
  }
  return a.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n)
}
function j2(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const r = this,
    {
      params: s,
      snapGrid: a,
      slidesGrid: i,
      rtlTranslate: l,
      enabled: o,
      animating: f,
    } = r
  if (!o) return r
  const c = r.virtual && s.virtual.enabled
  if (s.loop) {
    if (f && !c && s.loopPreventsSliding) return !1
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft)
  }
  const p = l ? r.translate : -r.translate
  function v(T) {
    return T < 0 ? -Math.floor(Math.abs(T)) : Math.floor(T)
  }
  const m = v(p),
    k = a.map((T) => v(T))
  let g = a[k.indexOf(m) - 1]
  if (typeof g > "u" && s.cssMode) {
    let T
    a.forEach((w, y) => {
      m >= w && (T = y)
    }),
      typeof T < "u" && (g = a[T > 0 ? T - 1 : T])
  }
  let E = 0
  if (
    (typeof g < "u" &&
      ((E = i.indexOf(g)),
      E < 0 && (E = r.activeIndex - 1),
      s.slidesPerView === "auto" &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((E = E - r.slidesPerViewDynamic("previous", !0) + 1),
        (E = Math.max(E, 0)))),
    s.rewind && r.isBeginning)
  ) {
    const T =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1
    return r.slideTo(T, e, t, n)
  } else if (s.loop && r.activeIndex === 0 && s.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(E, e, t, n)
      }),
      !0
    )
  return r.slideTo(E, e, t, n)
}
function D2(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const r = this
  return r.slideTo(r.activeIndex, e, t, n)
}
function H2(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5)
  const s = this
  let a = s.activeIndex
  const i = Math.min(s.params.slidesPerGroupSkip, a),
    l = i + Math.floor((a - i) / s.params.slidesPerGroup),
    o = s.rtlTranslate ? s.translate : -s.translate
  if (o >= s.snapGrid[l]) {
    const f = s.snapGrid[l],
      c = s.snapGrid[l + 1]
    o - f > (c - f) * r && (a += s.params.slidesPerGroup)
  } else {
    const f = s.snapGrid[l - 1],
      c = s.snapGrid[l]
    o - f <= (c - f) * r && (a -= s.params.slidesPerGroup)
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, s.slidesGrid.length - 1)),
    s.slideTo(a, e, t, n)
  )
}
function G2() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView
  let s = e.clickedIndex,
    a
  const i = e.isElement ? "swiper-slide" : `.${t.slideClass}`
  if (t.loop) {
    if (e.animating) return
    ;(a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? s < e.loopedSlides - r / 2 ||
          s > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              Qt(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            ci(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
        : s > e.slides.length - r
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              Qt(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            ci(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
  } else e.slideTo(s)
}
var V2 = {
  slideTo: B2,
  slideToLoop: z2,
  slideNext: F2,
  slidePrev: j2,
  slideReset: D2,
  slideToClosest: H2,
  slideToClickedSlide: G2,
}
function W2(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const s = () => {
      Qt(r, `.${n.slideClass}, swiper-slide`).forEach((p, v) => {
        p.setAttribute("data-swiper-slide-index", v)
      })
    },
    a = t.grid && n.grid && n.grid.rows > 1,
    i = n.slidesPerGroup * (a ? n.grid.rows : 1),
    l = t.slides.length % i !== 0,
    o = a && t.slides.length % n.grid.rows !== 0,
    f = (c) => {
      for (let p = 0; p < c; p += 1) {
        const v = t.isElement
          ? Ls("swiper-slide", [n.slideBlankClass])
          : Ls("div", [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(v)
      }
    }
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = i - (t.slides.length % i)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      As(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    s()
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      As(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    s()
  } else s()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  })
}
function q2(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: s,
    activeSlideIndex: a,
    byController: i,
    byMousewheel: l,
  } = e === void 0 ? {} : e
  const o = this
  if (!o.params.loop) return
  o.emit("beforeLoopFix")
  const {
      slides: f,
      allowSlidePrev: c,
      allowSlideNext: p,
      slidesEl: v,
      params: m,
    } = o,
    { centeredSlides: k } = m
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && m.virtual.enabled)
  ) {
    n &&
      (!m.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : m.centeredSlides && o.snapIndex < m.slidesPerView
          ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
          : o.snapIndex === o.snapGrid.length - 1 &&
            o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = c),
      (o.allowSlideNext = p),
      o.emit("loopFix")
    return
  }
  let g = m.slidesPerView
  g === "auto"
    ? (g = o.slidesPerViewDynamic())
    : ((g = Math.ceil(parseFloat(m.slidesPerView, 10))),
      k && g % 2 === 0 && (g = g + 1))
  const E = m.slidesPerGroupAuto ? g : m.slidesPerGroup
  let T = E
  T % E !== 0 && (T += E - (T % E)),
    (T += m.loopAdditionalSlides),
    (o.loopedSlides = T)
  const w = o.grid && m.grid && m.grid.rows > 1
  f.length < g + T
    ? As(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : w &&
      m.grid.fill === "row" &&
      As(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      )
  const y = [],
    $ = []
  let L = o.activeIndex
  typeof a > "u"
    ? (a = o.getSlideIndex(
        f.filter((X) => X.classList.contains(m.slideActiveClass))[0],
      ))
    : (L = a)
  const I = r === "next" || !r,
    ne = r === "prev" || !r
  let q = 0,
    G = 0
  const D = w ? Math.ceil(f.length / m.grid.rows) : f.length,
    ge = (w ? f[a].column : a) + (k && typeof s > "u" ? -g / 2 + 0.5 : 0)
  if (ge < T) {
    q = Math.max(T - ge, E)
    for (let X = 0; X < T - ge; X += 1) {
      const xe = X - Math.floor(X / D) * D
      if (w) {
        const Ce = D - xe - 1
        for (let j = f.length - 1; j >= 0; j -= 1)
          f[j].column === Ce && y.push(j)
      } else y.push(D - xe - 1)
    }
  } else if (ge + g > D - T) {
    G = Math.max(ge - (D - T * 2), E)
    for (let X = 0; X < G; X += 1) {
      const xe = X - Math.floor(X / D) * D
      w
        ? f.forEach((Ce, j) => {
            Ce.column === xe && $.push(j)
          })
        : $.push(xe)
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1
    }),
    ne &&
      y.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          v.prepend(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    I &&
      $.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          v.append(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    o.recalcSlides(),
    m.slidesPerView === "auto"
      ? o.updateSlides()
      : w &&
        ((y.length > 0 && ne) || ($.length > 0 && I)) &&
        o.slides.forEach((X, xe) => {
          o.grid.updateSlide(xe, X, o.slides)
        }),
    m.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (y.length > 0 && ne) {
      if (typeof t > "u") {
        const X = o.slidesGrid[L],
          Ce = o.slidesGrid[L + q] - X
        l
          ? o.setTranslate(o.translate - Ce)
          : (o.slideTo(L + q, 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - Ce),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - Ce)))
      } else if (s) {
        const X = w ? y.length / m.grid.rows : y.length
        o.slideTo(o.activeIndex + X, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate)
      }
    } else if ($.length > 0 && I)
      if (typeof t > "u") {
        const X = o.slidesGrid[L],
          Ce = o.slidesGrid[L - G] - X
        l
          ? o.setTranslate(o.translate - Ce)
          : (o.slideTo(L - G, 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - Ce),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - Ce)))
      } else {
        const X = w ? $.length / m.grid.rows : $.length
        o.slideTo(o.activeIndex - X, 0, !1, !0)
      }
  }
  if (
    ((o.allowSlidePrev = c),
    (o.allowSlideNext = p),
    o.controller && o.controller.control && !i)
  ) {
    const X = {
      slideRealIndex: t,
      direction: r,
      setTranslate: s,
      activeSlideIndex: a,
      byController: !0,
    }
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((xe) => {
          !xe.destroyed &&
            xe.params.loop &&
            xe.loopFix({
              ...X,
              slideTo: xe.params.slidesPerView === m.slidesPerView ? n : !1,
            })
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...X,
          slideTo:
            o.controller.control.params.slidesPerView === m.slidesPerView
              ? n
              : !1,
        })
  }
  o.emit("loopFix")
}
function U2() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const r = []
  e.slides.forEach((s) => {
    const a =
      typeof s.swiperSlideIndex > "u"
        ? s.getAttribute("data-swiper-slide-index") * 1
        : s.swiperSlideIndex
    r[a] = s
  }),
    e.slides.forEach((s) => {
      s.removeAttribute("data-swiper-slide-index")
    }),
    r.forEach((s) => {
      n.append(s)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var Y2 = { loopCreate: W2, loopFix: q2, loopDestroy: U2 }
function K2(e) {
  const t = this
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      })
}
function X2() {
  const e = this
  ;(e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      }))
}
var Z2 = { setGrabCursor: K2, unsetGrabCursor: X2 }
function J2(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === cn() || r === zt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const s = r.closest(e)
    return !s && !r.getRootNode ? null : s || n(r.getRootNode().host)
  }
  return n(t)
}
function Qo(e, t, n) {
  const r = zt(),
    { params: s } = e,
    a = s.edgeSwipeDetection,
    i = s.edgeSwipeThreshold
  return a && (n <= i || n >= r.innerWidth - i)
    ? a === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function Q2(e) {
  const t = this,
    n = cn()
  let r = e
  r.originalEvent && (r = r.originalEvent)
  const s = t.touchEventsData
  if (r.type === "pointerdown") {
    if (s.pointerId !== null && s.pointerId !== r.pointerId) return
    s.pointerId = r.pointerId
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (s.touchId = r.targetTouches[0].identifier)
  if (r.type === "touchstart") {
    Qo(t, r, r.targetTouches[0].pageX)
    return
  }
  const { params: a, touches: i, enabled: l } = t
  if (
    !l ||
    (!a.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && a.preventInteractionOnTransition)
  )
    return
  !t.animating && a.cssMode && a.loop && t.loopFix()
  let o = r.target
  if (
    (a.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return
  const f = !!a.noSwipingClass && a.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path
  f && r.target && r.target.shadowRoot && c && (o = c[0])
  const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    v = !!(r.target && r.target.shadowRoot)
  if (a.noSwiping && (v ? J2(p, o) : o.closest(p))) {
    t.allowClick = !0
    return
  }
  if (a.swipeHandler && !o.closest(a.swipeHandler)) return
  ;(i.currentX = r.pageX), (i.currentY = r.pageY)
  const m = i.currentX,
    k = i.currentY
  if (!Qo(t, r, m)) return
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (i.startX = m),
    (i.startY = k),
    (s.touchStartTime = Os()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (s.allowThresholdMove = !1)
  let g = !0
  o.matches(s.focusableElements) &&
    ((g = !1), o.nodeName === "SELECT" && (s.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(s.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur()
  const E = g && t.allowTouchMove && a.touchStartPreventDefault
  ;(a.touchStartForcePreventDefault || E) &&
    !o.isContentEditable &&
    r.preventDefault(),
    a.freeMode &&
      a.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r)
}
function ey(e) {
  const t = cn(),
    n = this,
    r = n.touchEventsData,
    { params: s, touches: a, rtlTranslate: i, enabled: l } = n
  if (!l || (!s.simulateTouch && e.pointerType === "mouse")) return
  let o = e
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (r.touchId !== null || o.pointerId !== r.pointerId))
  )
    return
  let f
  if (o.type === "touchmove") {
    if (
      ((f = [...o.changedTouches].filter((I) => I.identifier === r.touchId)[0]),
      !f || f.identifier !== r.touchId)
    )
      return
  } else f = o
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o)
    return
  }
  const c = f.pageX,
    p = f.pageY
  if (o.preventedByNestedSwiper) {
    ;(a.startX = c), (a.startY = p)
    return
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(a, { startX: c, startY: p, currentX: c, currentY: p }),
        (r.touchStartTime = Os()))
    return
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (n.isVertical()) {
      if (
        (p < a.startY && n.translate <= n.maxTranslate()) ||
        (p > a.startY && n.translate >= n.minTranslate())
      ) {
        ;(r.isTouched = !1), (r.isMoved = !1)
        return
      }
    } else if (
      (c < a.startX && n.translate <= n.maxTranslate()) ||
      (c > a.startX && n.translate >= n.minTranslate())
    )
      return
  }
  if (
    t.activeElement &&
    o.target === t.activeElement &&
    o.target.matches(r.focusableElements)
  ) {
    ;(r.isMoved = !0), (n.allowClick = !1)
    return
  }
  r.allowTouchCallbacks && n.emit("touchMove", o),
    (a.previousX = a.currentX),
    (a.previousY = a.currentY),
    (a.currentX = c),
    (a.currentY = p)
  const v = a.currentX - a.startX,
    m = a.currentY - a.startY
  if (n.params.threshold && Math.sqrt(v ** 2 + m ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > "u") {
    let I
    ;(n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (r.isScrolling = !1)
      : v * v + m * m >= 25 &&
        ((I = (Math.atan2(Math.abs(m), Math.abs(v)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? I > s.touchAngle
          : 90 - I > s.touchAngle))
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1
    return
  }
  if (!r.startMoving) return
  ;(n.allowClick = !1),
    !s.cssMode && o.cancelable && o.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && o.stopPropagation()
  let k = n.isHorizontal() ? v : m,
    g = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY
  s.oneWayMovement &&
    ((k = Math.abs(k) * (i ? 1 : -1)), (g = Math.abs(g) * (i ? 1 : -1))),
    (a.diff = k),
    (k *= s.touchRatio),
    i && ((k = -k), (g = -g))
  const E = n.touchesDirection
  ;(n.swipeDirection = k > 0 ? "prev" : "next"),
    (n.touchesDirection = g > 0 ? "prev" : "next")
  const T = n.params.loop && !s.cssMode,
    w =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev)
  if (!r.isMoved) {
    if (
      (T && w && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const I = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      })
      n.wrapperEl.dispatchEvent(I)
    }
    ;(r.allowMomentumBounce = !1),
      s.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o)
  }
  let y
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      E !== n.touchesDirection &&
      T &&
      w &&
      Math.abs(k) >= 1)
  ) {
    Object.assign(a, {
      startX: c,
      startY: p,
      currentX: c,
      currentY: p,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate)
    return
  }
  n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = k + r.startTranslate)
  let $ = !0,
    L = s.resistanceRatio
  if (
    (s.touchReleaseOnEdges && (L = 0),
    k > 0
      ? (T &&
          w &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (s.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          (($ = !1),
          s.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + k) ** L)))
      : k < 0 &&
        (T &&
          w &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (s.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (s.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(s.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          (($ = !1),
          s.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - k) ** L))),
    $ && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(k) > s.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        ;(r.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (r.currentTranslate = r.startTranslate),
          (a.diff = n.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        return
      }
    } else {
      r.currentTranslate = r.startTranslate
      return
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
      s.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate))
}
function ty(e) {
  const t = this,
    n = t.touchEventsData
  let r = e
  r.originalEvent && (r = r.originalEvent)
  let s
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((s = [...r.changedTouches].filter((L) => L.identifier === n.touchId)[0]),
      !s || s.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return
    s = r
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return
  ;(n.pointerId = null), (n.touchId = null)
  const {
    params: i,
    touches: l,
    rtlTranslate: o,
    slidesGrid: f,
    enabled: c,
  } = t
  if (!c || (!i.simulateTouch && r.pointerType === "mouse")) return
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const p = Os(),
    v = p - n.touchStartTime
  if (t.allowClick) {
    const L = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((L && L[0]) || r.target, L),
      t.emit("tap click", r),
      v < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
  }
  if (
    ((n.lastClickTime = Os()),
    ci(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let m
  if (
    (i.followFinger
      ? (m = o ? t.translate : -t.translate)
      : (m = -n.currentTranslate),
    i.cssMode)
  )
    return
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: m })
    return
  }
  const k = m >= -t.maxTranslate() && !t.params.loop
  let g = 0,
    E = t.slidesSizesGrid[0]
  for (
    let L = 0;
    L < f.length;
    L += L < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const I = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
    typeof f[L + I] < "u"
      ? (k || (m >= f[L] && m < f[L + I])) && ((g = L), (E = f[L + I] - f[L]))
      : (k || m >= f[L]) && ((g = L), (E = f[f.length - 1] - f[f.length - 2]))
  }
  let T = null,
    w = null
  i.rewind &&
    (t.isBeginning
      ? (w =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (T = 0))
  const y = (m - f[g]) / E,
    $ = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
  if (v > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (y >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? T : g + $)
        : t.slideTo(g)),
      t.swipeDirection === "prev" &&
        (y > 1 - i.longSwipesRatio
          ? t.slideTo(g + $)
          : w !== null && y < 0 && Math.abs(y) > i.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(g))
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(g + $)
        : t.slideTo(g)
      : (t.swipeDirection === "next" && t.slideTo(T !== null ? T : g + $),
        t.swipeDirection === "prev" && t.slideTo(w !== null ? w : g))
  }
}
function eu() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: r, allowSlidePrev: s, snapGrid: a } = e,
    i = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const l = i && t.loop
  ;(t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !i
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume()
      }, 500))),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = r),
    e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
}
function ny(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function ry() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e
  if (!r) return
  ;(e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses()
  let s
  const a = e.maxTranslate() - e.minTranslate()
  a === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / a),
    s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function sy(e) {
  const t = this
  Cs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update()
}
function ay() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Lc = (e, t) => {
  const n = cn(),
    { params: r, el: s, wrapperEl: a, device: i } = e,
    l = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    f = t
  n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    s[o]("touchstart", e.onTouchStart, { passive: !1 }),
    s[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      s[o]("click", e.onClick, !0),
    r.cssMode && a[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[f](
          i.ios || i.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          eu,
          !0,
        )
      : e[f]("observerUpdate", eu, !0),
    s[o]("load", e.onLoad, { capture: !0 })
}
function iy() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = Q2.bind(e)),
    (e.onTouchMove = ey.bind(e)),
    (e.onTouchEnd = ty.bind(e)),
    (e.onDocumentTouchStart = ay.bind(e)),
    t.cssMode && (e.onScroll = ry.bind(e)),
    (e.onClick = ny.bind(e)),
    (e.onLoad = sy.bind(e)),
    Lc(e, "on")
}
function ly() {
  Lc(this, "off")
}
var oy = { attachEvents: iy, detachEvents: ly }
const tu = (e, t) => e.grid && t.grid && t.grid.rows > 1
function uy() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: s } = e,
    a = r.breakpoints
  if (!a || (a && Object.keys(a).length === 0)) return
  const i = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
  if (!i || e.currentBreakpoint === i) return
  const o = (i in a ? a[i] : void 0) || e.originalParams,
    f = tu(e, r),
    c = tu(e, o),
    p = r.enabled
  f && !c
    ? (s.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !f &&
      c &&
      (s.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        s.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((T) => {
      if (typeof o[T] > "u") return
      const w = r[T] && r[T].enabled,
        y = o[T] && o[T].enabled
      w && !y && e[T].disable(), !w && y && e[T].enable()
    })
  const v = o.direction && o.direction !== r.direction,
    m = r.loop && (o.slidesPerView !== r.slidesPerView || v),
    k = r.loop
  v && n && e.changeDirection(), Lt(e.params, o)
  const g = e.params.enabled,
    E = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    p && !g ? e.disable() : !p && g && e.enable(),
    (e.currentBreakpoint = i),
    e.emit("_beforeBreakpoint", o),
    n &&
      (m
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !k && E
          ? (e.loopCreate(t), e.updateSlides())
          : k && !E && e.loopDestroy()),
    e.emit("breakpoint", o)
}
function cy(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return
  let r = !1
  const s = zt(),
    a = t === "window" ? s.innerHeight : n.clientHeight,
    i = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const o = parseFloat(l.substr(1))
        return { value: a * o, point: l }
      }
      return { value: l, point: l }
    })
  i.sort((l, o) => parseInt(l.value, 10) - parseInt(o.value, 10))
  for (let l = 0; l < i.length; l += 1) {
    const { point: o, value: f } = i[l]
    t === "window"
      ? s.matchMedia(`(min-width: ${f}px)`).matches && (r = o)
      : f <= n.clientWidth && (r = o)
  }
  return r || "max"
}
var dy = { setBreakpoint: uy, getBreakpoint: cy }
function fy(e, t) {
  const n = []
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((s) => {
            r[s] && n.push(t + s)
          })
        : typeof r == "string" && n.push(t + r)
    }),
    n
  )
}
function py() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: s, device: a } = e,
    i = fy(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: a.android },
        { ios: a.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    )
  t.push(...i), s.classList.add(...t), e.emitContainerClasses()
}
function hy() {
  const e = this,
    { el: t, classNames: n } = e
  t.classList.remove(...n), e.emitContainerClasses()
}
var gy = { addClasses: py, removeClasses: hy }
function vy() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n
  if (r) {
    const s = e.slides.length - 1,
      a = e.slidesGrid[s] + e.slidesSizesGrid[s] + r * 2
    e.isLocked = e.size > a
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var my = { checkOverflow: vy },
  pi = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  }
function by(e, t) {
  return function (r) {
    r === void 0 && (r = {})
    const s = Object.keys(r)[0],
      a = r[s]
    if (typeof a != "object" || a === null) {
      Lt(t, r)
      return
    }
    if (
      (e[s] === !0 && (e[s] = { enabled: !0 }),
      s === "navigation" &&
        e[s] &&
        e[s].enabled &&
        !e[s].prevEl &&
        !e[s].nextEl &&
        (e[s].auto = !0),
      ["pagination", "scrollbar"].indexOf(s) >= 0 &&
        e[s] &&
        e[s].enabled &&
        !e[s].el &&
        (e[s].auto = !0),
      !(s in e && "enabled" in a))
    ) {
      Lt(t, r)
      return
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      Lt(t, r)
  }
}
const Da = {
    eventsEmitter: g2,
    update: T2,
    translate: O2,
    transition: R2,
    slide: V2,
    loop: Y2,
    grabCursor: Z2,
    events: oy,
    breakpoints: dy,
    checkOverflow: my,
    classes: gy,
  },
  Ha = {}
let Yi = class ln {
  constructor() {
    let t, n
    for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
      s[a] = arguments[a]
    s.length === 1 &&
    s[0].constructor &&
    Object.prototype.toString.call(s[0]).slice(8, -1) === "Object"
      ? (n = s[0])
      : ([t, n] = s),
      n || (n = {}),
      (n = Lt({}, n)),
      t && !n.el && (n.el = t)
    const i = cn()
    if (
      n.el &&
      typeof n.el == "string" &&
      i.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        i.querySelectorAll(n.el).forEach((p) => {
          const v = Lt({}, n, { el: p })
          c.push(new ln(v))
        }),
        c
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = Oc()),
      (l.device = c2({ userAgent: n.userAgent })),
      (l.browser = f2()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules)
    const o = {}
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: by(n, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const f = Lt({}, pi, o)
    return (
      (l.params = Lt({}, f, Ha, n)),
      (l.originalParams = Lt({}, l.params)),
      (l.passedParams = Lt({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c])
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal"
        },
        isVertical() {
          return l.params.direction === "vertical"
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    )
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t]
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      s = Qt(n, `.${r.slideClass}, swiper-slide`),
      a = Ns(s[0])
    return Ns(t) - a
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t,
      )[0],
    )
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t
    t.slides = Qt(n, `.${r.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"))
  }
  disable() {
    const t = this
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"))
  }
  setProgress(t, n) {
    const r = this
    t = Math.min(Math.max(t, 0), 1)
    const s = r.minTranslate(),
      i = (r.maxTranslate() - s) * t + s
    r.translateTo(i, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0,
      )
    t.emit("_containerClasses", n.join(" "))
  }
  getSlideClasses(t) {
    const n = this
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0,
          )
          .join(" ")
  }
  emitSlidesClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = []
    t.slides.forEach((r) => {
      const s = t.getSlideClasses(r)
      n.push({ slideEl: r, classNames: s }), t.emit("_slideClass", r, s)
    }),
      t.emit("_slideClasses", n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1)
    const r = this,
      {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: l,
        size: o,
        activeIndex: f,
      } = r
    let c = 1
    if (typeof s.slidesPerView == "number") return s.slidesPerView
    if (s.centeredSlides) {
      let p = a[f] ? a[f].swiperSlideSize : 0,
        v
      for (let m = f + 1; m < a.length; m += 1)
        a[m] && !v && ((p += a[m].swiperSlideSize), (c += 1), p > o && (v = !0))
      for (let m = f - 1; m >= 0; m -= 1)
        a[m] && !v && ((p += a[m].swiperSlideSize), (c += 1), p > o && (v = !0))
    } else if (t === "current")
      for (let p = f + 1; p < a.length; p += 1)
        (n ? i[p] + l[p] - i[f] < o : i[p] - i[f] < o) && (c += 1)
    else for (let p = f - 1; p >= 0; p -= 1) i[f] - i[p] < o && (c += 1)
    return c
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: r } = t
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
        i.complete && Cs(t, i)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function s() {
      const i = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(i, t.maxTranslate()), t.minTranslate())
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let a
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      s(), r.autoHeight && t.updateAutoHeight()
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const i = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides
        a = t.slideTo(i.length - 1, 0, !1, !0)
      } else a = t.slideTo(t.activeIndex, 0, !1, !0)
      a || s()
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const r = this,
      s = r.params.direction
    return (
      t || (t = s === "horizontal" ? "vertical" : "horizontal"),
      t === s ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${s}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((a) => {
          t === "vertical" ? (a.style.width = "") : (a.style.height = "")
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    )
  }
  changeLanguageDirection(t) {
    const n = this
    ;(n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update())
  }
  mount(t) {
    const n = this
    if (n.mounted) return !0
    let r = t || n.params.el
    if ((typeof r == "string" && (r = document.querySelector(r)), !r)) return !1
    ;(r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0)
    const s = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`
    let i =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(s())
        : Qt(r, s())[0]
    return (
      !i &&
        n.params.createElements &&
        ((i = Ls("div", n.params.wrapperClass)),
        r.append(i),
        Qt(r, `.${n.params.slideClass}`).forEach((l) => {
          i.append(l)
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: i,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || In(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || In(r, "direction") === "rtl"),
        wrongRTL: In(i, "display") === "-webkit-box",
      }),
      !0
    )
  }
  init(t) {
    const n = this
    if (n.initialized || n.mount(t) === !1) return n
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents()
    const s = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      s.forEach((a) => {
        a.complete
          ? Cs(n, a)
          : a.addEventListener("load", (i) => {
              Cs(n, i.target)
            })
      }),
      fi(n),
      (n.initialized = !0),
      fi(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const r = this,
      { params: s, el: a, wrapperEl: i, slides: l } = r
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        s.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          a.removeAttribute("style"),
          i.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((o) => {
              o.classList.remove(
                s.slideVisibleClass,
                s.slideFullyVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass,
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index")
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o)
        }),
        t !== !1 && ((r.el.swiper = null), n2(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    Lt(Ha, t)
  }
  static get extendedDefaults() {
    return Ha
  }
  static get defaults() {
    return pi
  }
  static installModule(t) {
    ln.prototype.__modules__ || (ln.prototype.__modules__ = [])
    const n = ln.prototype.__modules__
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => ln.installModule(n)), ln)
      : (ln.installModule(t), ln)
  }
}
Object.keys(Da).forEach((e) => {
  Object.keys(Da[e]).forEach((t) => {
    Yi.prototype[t] = Da[e][t]
  })
})
Yi.use([p2, h2])
const Nc = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
]
function Yn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  )
}
function br(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Yn(t[r]) && Yn(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : br(e[r], t[r])
          : (e[r] = t[r])
    })
}
function Rc(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  )
}
function Bc(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}
function zc(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}
function Fc(e) {
  e === void 0 && (e = "")
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = []
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r)
    }),
    n.join(" ")
  )
}
function yy(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function wy(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: s,
    nextEl: a,
    prevEl: i,
    scrollbarEl: l,
    paginationEl: o,
  } = e
  const f = s.filter(
      (G) => G !== "children" && G !== "direction" && G !== "wrapperClass",
    ),
    {
      params: c,
      pagination: p,
      navigation: v,
      scrollbar: m,
      virtual: k,
      thumbs: g,
    } = t
  let E, T, w, y, $, L, I, ne
  s.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (E = !0),
    s.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (T = !0),
    s.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || o) &&
      (c.pagination || c.pagination === !1) &&
      p &&
      !p.el &&
      (w = !0),
    s.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      m &&
      !m.el &&
      (y = !0),
    s.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || i) &&
      (r.navigation.nextEl || a) &&
      (c.navigation || c.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      ($ = !0)
  const q = (G) => {
    t[G] &&
      (t[G].destroy(),
      G === "navigation"
        ? (t.isElement && (t[G].prevEl.remove(), t[G].nextEl.remove()),
          (c[G].prevEl = void 0),
          (c[G].nextEl = void 0),
          (t[G].prevEl = void 0),
          (t[G].nextEl = void 0))
        : (t.isElement && t[G].el.remove(),
          (c[G].el = void 0),
          (t[G].el = void 0)))
  }
  s.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (L = !0) : !c.loop && r.loop ? (I = !0) : (ne = !0)),
    f.forEach((G) => {
      if (Yn(c[G]) && Yn(r[G]))
        Object.assign(c[G], r[G]),
          (G === "navigation" || G === "pagination" || G === "scrollbar") &&
            "enabled" in r[G] &&
            !r[G].enabled &&
            q(G)
      else {
        const D = r[G]
        ;(D === !0 || D === !1) &&
        (G === "navigation" || G === "pagination" || G === "scrollbar")
          ? D === !1 && q(G)
          : (c[G] = r[G])
      }
    }),
    f.includes("controller") &&
      !T &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    s.includes("children") && n && k && c.virtual.enabled
      ? ((k.slides = n), k.update(!0))
      : s.includes("virtual") &&
        k &&
        c.virtual.enabled &&
        (n && (k.slides = n), k.update(!0)),
    s.includes("children") && n && c.loop && (ne = !0),
    E && g.init() && g.update(!0),
    T && (t.controller.control = c.controller.control),
    w &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (c.pagination.el = o),
      p.init(),
      p.render(),
      p.update()),
    y &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      m.init(),
      m.updateSize(),
      m.setTranslate()),
    $ &&
      (t.isElement &&
        ((!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-next"),
          (a.innerHTML = t.hostEl.constructor.nextButtonSvg),
          a.part.add("button-next"),
          t.el.appendChild(a)),
        (!i || typeof i == "string") &&
          ((i = document.createElement("div")),
          i.classList.add("swiper-button-prev"),
          (i.innerHTML = t.hostEl.constructor.prevButtonSvg),
          i.part.add("button-prev"),
          t.el.appendChild(i))),
      a && (c.navigation.nextEl = a),
      i && (c.navigation.prevEl = i),
      v.init(),
      v.update()),
    s.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    s.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    s.includes("direction") && t.changeDirection(r.direction, !1),
    (L || ne) && t.loopDestroy(),
    (I || ne) && t.loopCreate(),
    t.update()
}
function nu(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    s = {}
  br(n, pi), (n._emitClasses = !0), (n.init = !1)
  const a = {},
    i = Nc.map((o) => o.replace(/_/, "")),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((o) => {
      typeof e[o] > "u" ||
        (i.indexOf(o) >= 0
          ? Yn(e[o])
            ? ((n[o] = {}), (s[o] = {}), br(n[o], e[o]), br(s[o], e[o]))
            : ((n[o] = e[o]), (s[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? t
              ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
              : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (a[o] = e[o]))
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o]
    }),
    { params: n, passedParams: s, rest: a, events: r }
  )
}
function xy(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: s,
    paginationEl: a,
    scrollbarEl: i,
    swiper: l,
  } = e
  Rc(t) &&
    r &&
    s &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = s),
    (l.originalParams.navigation.prevEl = s)),
    Bc(t) &&
      a &&
      ((l.params.pagination.el = a), (l.originalParams.pagination.el = a)),
    zc(t) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(n)
}
function Sy(e, t, n, r, s) {
  const a = []
  if (!t) return a
  const i = (o) => {
    a.indexOf(o) < 0 && a.push(o)
  }
  if (n && r) {
    const o = r.map(s),
      f = n.map(s)
    o.join("") !== f.join("") && i("children"),
      r.length !== n.length && i("children")
  }
  return (
    Nc.filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Yn(e[o]) && Yn(t[o])) {
            const f = Object.keys(e[o]),
              c = Object.keys(t[o])
            f.length !== c.length
              ? i(o)
              : (f.forEach((p) => {
                  e[o][p] !== t[o][p] && i(o)
                }),
                c.forEach((p) => {
                  e[o][p] !== t[o][p] && i(o)
                }))
          } else e[o] !== t[o] && i(o)
      }),
    a
  )
}
const Ey = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate())
}
function Ga(e, t, n) {
  e === void 0 && (e = {})
  const r = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    a = (i, l) => {
      Array.isArray(i) &&
        i.forEach((o) => {
          const f = typeof o.type == "symbol"
          l === "default" && (l = "container-end"),
            f && o.children
              ? a(o.children, l)
              : o.type &&
                  (o.type.name === "SwiperSlide" ||
                    o.type.name === "AsyncComponentWrapper")
                ? r.push(o)
                : s[l] && s[l].push(o)
        })
    }
  return (
    Object.keys(e).forEach((i) => {
      if (typeof e[i] != "function") return
      const l = e[i]()
      a(l, i)
    }),
    (n.value = t.value),
    (t.value = r),
    { slides: r, slots: s }
  )
}
function _y(e, t, n) {
  if (!n) return null
  const r = (c) => {
      let p = c
      return c < 0 ? (p = t.length + c) : p >= t.length && (p = p - t.length), p
    },
    s = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: a, to: i } = n,
    l = e.value.params.loop ? -t.length : 0,
    o = e.value.params.loop ? t.length * 2 : t.length,
    f = []
  for (let c = l; c < o; c += 1) c >= a && c <= i && f.push(t[r(c)])
  return f.map(
    (c) => (
      c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = s),
      qe(c.type, { ...c.props }, c.children)
    ),
  )
}
const Cy = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "breakpointsBase",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: n, emit: r } = t
      const { tag: s, wrapperTag: a } = e,
        i = be("swiper"),
        l = be(null),
        o = be(!1),
        f = be(!1),
        c = be(null),
        p = be(null),
        v = be(null),
        m = { value: [] },
        k = { value: [] },
        g = be(null),
        E = be(null),
        T = be(null),
        w = be(null),
        { params: y, passedParams: $ } = nu(e, !1)
      Ga(n, m, k), (v.value = $), (k.value = m.value)
      const L = () => {
        Ga(n, m, k), (o.value = !0)
      }
      ;(y.onAny = function (q) {
        for (
          var G = arguments.length, D = new Array(G > 1 ? G - 1 : 0), Q = 1;
          Q < G;
          Q++
        )
          D[Q - 1] = arguments[Q]
        r(q, ...D)
      }),
        Object.assign(y.on, {
          _beforeBreakpoint: L,
          _containerClasses(q, G) {
            i.value = G
          },
        })
      const I = { ...y }
      if (
        (delete I.wrapperClass,
        (p.value = new Yi(I)),
        p.value.virtual && p.value.params.virtual.enabled)
      ) {
        p.value.virtual.slides = m.value
        const q = {
          cache: !1,
          slides: m.value,
          renderExternal: (G) => {
            l.value = G
          },
          renderExternalUpdate: !1,
        }
        br(p.value.params.virtual, q), br(p.value.originalParams.virtual, q)
      }
      Bi(() => {
        !f.value && p.value && (p.value.emitSlidesClasses(), (f.value = !0))
        const { passedParams: q } = nu(e, !1),
          G = Sy(q, v.value, m.value, k.value, (D) => D.props && D.props.key)
        ;(v.value = q),
          (G.length || o.value) &&
            p.value &&
            !p.value.destroyed &&
            wy({
              swiper: p.value,
              slides: m.value,
              passedParams: q,
              changedParams: G,
              nextEl: g.value,
              prevEl: E.value,
              scrollbarEl: w.value,
              paginationEl: T.value,
            }),
          (o.value = !1)
      }),
        Dt("swiper", p),
        en(l, () => {
          Mi(() => {
            Ey(p.value)
          })
        }),
        gt(() => {
          c.value &&
            (xy(
              {
                el: c.value,
                nextEl: g.value,
                prevEl: E.value,
                paginationEl: T.value,
                scrollbarEl: w.value,
                swiper: p.value,
              },
              y,
            ),
            r("swiper", p.value))
        }),
        zi(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        })
      function ne(q) {
        return y.virtual
          ? _y(p, q, l.value)
          : (q.forEach((G, D) => {
              G.props || (G.props = {}),
                (G.props.swiperRef = p),
                (G.props.swiperSlideIndex = D)
            }),
            q)
      }
      return () => {
        const { slides: q, slots: G } = Ga(n, m, k)
        return qe(s, { ref: c, class: Fc(i.value) }, [
          G["container-start"],
          qe(a, { class: yy(y.wrapperClass) }, [
            G["wrapper-start"],
            ne(q),
            G["wrapper-end"],
          ]),
          Rc(e) && [
            qe("div", { ref: E, class: "swiper-button-prev" }),
            qe("div", { ref: g, class: "swiper-button-next" }),
          ],
          zc(e) && qe("div", { ref: w, class: "swiper-scrollbar" }),
          Bc(e) && qe("div", { ref: T, class: "swiper-pagination" }),
          G["container-end"],
        ])
      }
    },
  },
  sn = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        r = !1
      const { swiperRef: s } = e,
        a = be(null),
        i = be("swiper-slide"),
        l = be(!1)
      function o(p, v, m) {
        v === a.value && (i.value = m)
      }
      gt(() => {
        !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
      }),
        Ri(() => {
          r || !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
        }),
        Bi(() => {
          !a.value ||
            !s ||
            !s.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (a.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed &&
              i.value !== "swiper-slide" &&
              (i.value = "swiper-slide"))
        }),
        zi(() => {
          !s || !s.value || s.value.off("_slideClass", o)
        })
      const f = me(() => ({
        isActive: i.value.indexOf("swiper-slide-active") >= 0,
        isVisible: i.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: i.value.indexOf("swiper-slide-prev") >= 0,
        isNext: i.value.indexOf("swiper-slide-next") >= 0,
      }))
      Dt("swiperSlide", f)
      const c = () => {
        l.value = !0
      }
      return () =>
        qe(
          e.tag,
          {
            class: Fc(`${i.value}`),
            ref: a,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && s && s.value && s.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? qe(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  n.default && n.default(f.value),
                  e.lazy &&
                    !l.value &&
                    qe("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(f.value),
                e.lazy &&
                  !l.value &&
                  qe("div", { class: "swiper-lazy-preloader" }),
              ],
        )
    },
  }
function jc(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((s) => {
        if (!n[s] && n.auto === !0) {
          let a = Qt(e.el, `.${r[s]}`)[0]
          a || ((a = Ls("div", r[s])), (a.className = r[s]), e.el.append(a)),
            (n[s] = a),
            (t[s] = a)
        }
      }),
    n
  )
}
function Ty(e) {
  let { swiper: t, extendParams: n, on: r, emit: s } = e
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null })
  const a = (g) => (Array.isArray(g) ? g : [g]).filter((E) => !!E)
  function i(g) {
    let E
    return g &&
      typeof g == "string" &&
      t.isElement &&
      ((E = t.el.querySelector(g)), E)
      ? E
      : (g &&
          (typeof g == "string" && (E = [...document.querySelectorAll(g)]),
          t.params.uniqueNavElements &&
            typeof g == "string" &&
            E.length > 1 &&
            t.el.querySelectorAll(g).length === 1 &&
            (E = t.el.querySelector(g))),
        g && !E ? g : E)
  }
  function l(g, E) {
    const T = t.params.navigation
    ;(g = a(g)),
      g.forEach((w) => {
        w &&
          (w.classList[E ? "add" : "remove"](...T.disabledClass.split(" ")),
          w.tagName === "BUTTON" && (w.disabled = E),
          t.params.watchOverflow &&
            t.enabled &&
            w.classList[t.isLocked ? "add" : "remove"](T.lockClass))
      })
  }
  function o() {
    const { nextEl: g, prevEl: E } = t.navigation
    if (t.params.loop) {
      l(E, !1), l(g, !1)
      return
    }
    l(E, t.isBeginning && !t.params.rewind), l(g, t.isEnd && !t.params.rewind)
  }
  function f(g) {
    g.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), s("navigationPrev"))
  }
  function c(g) {
    g.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), s("navigationNext"))
  }
  function p() {
    const g = t.params.navigation
    if (
      ((t.params.navigation = jc(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(g.nextEl || g.prevEl))
    )
      return
    let E = i(g.nextEl),
      T = i(g.prevEl)
    Object.assign(t.navigation, { nextEl: E, prevEl: T }),
      (E = a(E)),
      (T = a(T))
    const w = (y, $) => {
      y && y.addEventListener("click", $ === "next" ? c : f),
        !t.enabled && y && y.classList.add(...g.lockClass.split(" "))
    }
    E.forEach((y) => w(y, "next")), T.forEach((y) => w(y, "prev"))
  }
  function v() {
    let { nextEl: g, prevEl: E } = t.navigation
    ;(g = a(g)), (E = a(E))
    const T = (w, y) => {
      w.removeEventListener("click", y === "next" ? c : f),
        w.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    g.forEach((w) => T(w, "next")), E.forEach((w) => T(w, "prev"))
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? k() : (p(), o())
  }),
    r("toEdge fromEdge lock unlock", () => {
      o()
    }),
    r("destroy", () => {
      v()
    }),
    r("enable disable", () => {
      let { nextEl: g, prevEl: E } = t.navigation
      if (((g = a(g)), (E = a(E)), t.enabled)) {
        o()
        return
      }
      ;[...g, ...E]
        .filter((T) => !!T)
        .forEach((T) => T.classList.add(t.params.navigation.lockClass))
    }),
    r("click", (g, E) => {
      let { nextEl: T, prevEl: w } = t.navigation
      ;(T = a(T)), (w = a(w))
      const y = E.target
      if (t.params.navigation.hideOnClick && !w.includes(y) && !T.includes(y)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === y || t.pagination.el.contains(y))
        )
          return
        let $
        T.length
          ? ($ = T[0].classList.contains(t.params.navigation.hiddenClass))
          : w.length &&
            ($ = w[0].classList.contains(t.params.navigation.hiddenClass)),
          s($ === !0 ? "navigationShow" : "navigationHide"),
          [...T, ...w]
            .filter((L) => !!L)
            .forEach((L) => L.classList.toggle(t.params.navigation.hiddenClass))
      }
    })
  const m = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        p(),
        o()
    },
    k = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        v()
    }
  Object.assign(t.navigation, {
    enable: m,
    disable: k,
    update: o,
    init: p,
    destroy: v,
  })
}
function Nr(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  )
}
function Py(e) {
  let { swiper: t, extendParams: n, on: r, emit: s } = e
  const a = "swiper-pagination"
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (w) => w,
      formatFractionTotal: (w) => w,
      bulletClass: `${a}-bullet`,
      bulletActiveClass: `${a}-bullet-active`,
      modifierClass: `${a}-`,
      currentClass: `${a}-current`,
      totalClass: `${a}-total`,
      hiddenClass: `${a}-hidden`,
      progressbarFillClass: `${a}-progressbar-fill`,
      progressbarOppositeClass: `${a}-progressbar-opposite`,
      clickableClass: `${a}-clickable`,
      lockClass: `${a}-lock`,
      horizontalClass: `${a}-horizontal`,
      verticalClass: `${a}-vertical`,
      paginationDisabledClass: `${a}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] })
  let i,
    l = 0
  const o = (w) => (Array.isArray(w) ? w : [w]).filter((y) => !!y)
  function f() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    )
  }
  function c(w, y) {
    const { bulletActiveClass: $ } = t.params.pagination
    w &&
      ((w = w[`${y === "prev" ? "previous" : "next"}ElementSibling`]),
      w &&
        (w.classList.add(`${$}-${y}`),
        (w = w[`${y === "prev" ? "previous" : "next"}ElementSibling`]),
        w && w.classList.add(`${$}-${y}-${y}`)))
  }
  function p(w) {
    const y = w.target.closest(Nr(t.params.pagination.bulletClass))
    if (!y) return
    w.preventDefault()
    const $ = Ns(y) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === $) return
      t.slideToLoop($)
    } else t.slideTo($)
  }
  function v() {
    const w = t.rtl,
      y = t.params.pagination
    if (f()) return
    let $ = t.pagination.el
    $ = o($)
    let L, I
    const ne =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      q = t.params.loop
        ? Math.ceil(ne / t.params.slidesPerGroup)
        : t.snapGrid.length
    if (
      (t.params.loop
        ? ((I = t.previousRealIndex || 0),
          (L =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((L = t.snapIndex), (I = t.previousSnapIndex))
          : ((I = t.previousIndex || 0), (L = t.activeIndex || 0)),
      y.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const G = t.pagination.bullets
      let D, Q, ge
      if (
        (y.dynamicBullets &&
          ((i = di(G[0], t.isHorizontal() ? "width" : "height", !0)),
          $.forEach((X) => {
            X.style[t.isHorizontal() ? "width" : "height"] =
              `${i * (y.dynamicMainBullets + 4)}px`
          }),
          y.dynamicMainBullets > 1 &&
            I !== void 0 &&
            ((l += L - (I || 0)),
            l > y.dynamicMainBullets - 1
              ? (l = y.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (D = Math.max(L - l, 0)),
          (Q = D + (Math.min(G.length, y.dynamicMainBullets) - 1)),
          (ge = (Q + D) / 2)),
        G.forEach((X) => {
          const xe = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (Ce) => `${y.bulletActiveClass}${Ce}`,
            ),
          ]
            .map((Ce) =>
              typeof Ce == "string" && Ce.includes(" ") ? Ce.split(" ") : Ce,
            )
            .flat()
          X.classList.remove(...xe)
        }),
        $.length > 1)
      )
        G.forEach((X) => {
          const xe = Ns(X)
          xe === L
            ? X.classList.add(...y.bulletActiveClass.split(" "))
            : t.isElement && X.setAttribute("part", "bullet"),
            y.dynamicBullets &&
              (xe >= D &&
                xe <= Q &&
                X.classList.add(...`${y.bulletActiveClass}-main`.split(" ")),
              xe === D && c(X, "prev"),
              xe === Q && c(X, "next"))
        })
      else {
        const X = G[L]
        if (
          (X && X.classList.add(...y.bulletActiveClass.split(" ")),
          t.isElement &&
            G.forEach((xe, Ce) => {
              xe.setAttribute("part", Ce === L ? "bullet-active" : "bullet")
            }),
          y.dynamicBullets)
        ) {
          const xe = G[D],
            Ce = G[Q]
          for (let j = D; j <= Q; j += 1)
            G[j] &&
              G[j].classList.add(...`${y.bulletActiveClass}-main`.split(" "))
          c(xe, "prev"), c(Ce, "next")
        }
      }
      if (y.dynamicBullets) {
        const X = Math.min(G.length, y.dynamicMainBullets + 4),
          xe = (i * X - i) / 2 - ge * i,
          Ce = w ? "right" : "left"
        G.forEach((j) => {
          j.style[t.isHorizontal() ? Ce : "top"] = `${xe}px`
        })
      }
    }
    $.forEach((G, D) => {
      if (
        (y.type === "fraction" &&
          (G.querySelectorAll(Nr(y.currentClass)).forEach((Q) => {
            Q.textContent = y.formatFractionCurrent(L + 1)
          }),
          G.querySelectorAll(Nr(y.totalClass)).forEach((Q) => {
            Q.textContent = y.formatFractionTotal(q)
          })),
        y.type === "progressbar")
      ) {
        let Q
        y.progressbarOpposite
          ? (Q = t.isHorizontal() ? "vertical" : "horizontal")
          : (Q = t.isHorizontal() ? "horizontal" : "vertical")
        const ge = (L + 1) / q
        let X = 1,
          xe = 1
        Q === "horizontal" ? (X = ge) : (xe = ge),
          G.querySelectorAll(Nr(y.progressbarFillClass)).forEach((Ce) => {
            ;(Ce.style.transform = `translate3d(0,0,0) scaleX(${X}) scaleY(${xe})`),
              (Ce.style.transitionDuration = `${t.params.speed}ms`)
          })
      }
      y.type === "custom" && y.renderCustom
        ? ((G.innerHTML = y.renderCustom(t, L + 1, q)),
          D === 0 && s("paginationRender", G))
        : (D === 0 && s("paginationRender", G), s("paginationUpdate", G)),
        t.params.watchOverflow &&
          t.enabled &&
          G.classList[t.isLocked ? "add" : "remove"](y.lockClass)
    })
  }
  function m() {
    const w = t.params.pagination
    if (f()) return
    const y =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length
    let $ = t.pagination.el
    $ = o($)
    let L = ""
    if (w.type === "bullets") {
      let I = t.params.loop
        ? Math.ceil(y / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && I > y && (I = y)
      for (let ne = 0; ne < I; ne += 1)
        w.renderBullet
          ? (L += w.renderBullet.call(t, ne, w.bulletClass))
          : (L += `<${w.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${w.bulletClass}"></${w.bulletElement}>`)
    }
    w.type === "fraction" &&
      (w.renderFraction
        ? (L = w.renderFraction.call(t, w.currentClass, w.totalClass))
        : (L = `<span class="${w.currentClass}"></span> / <span class="${w.totalClass}"></span>`)),
      w.type === "progressbar" &&
        (w.renderProgressbar
          ? (L = w.renderProgressbar.call(t, w.progressbarFillClass))
          : (L = `<span class="${w.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      $.forEach((I) => {
        w.type !== "custom" && (I.innerHTML = L || ""),
          w.type === "bullets" &&
            t.pagination.bullets.push(...I.querySelectorAll(Nr(w.bulletClass)))
      }),
      w.type !== "custom" && s("paginationRender", $[0])
  }
  function k() {
    t.params.pagination = jc(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    )
    const w = t.params.pagination
    if (!w.el) return
    let y
    typeof w.el == "string" && t.isElement && (y = t.el.querySelector(w.el)),
      !y &&
        typeof w.el == "string" &&
        (y = [...document.querySelectorAll(w.el)]),
      y || (y = w.el),
      !(!y || y.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof w.el == "string" &&
          Array.isArray(y) &&
          y.length > 1 &&
          ((y = [...t.el.querySelectorAll(w.el)]),
          y.length > 1 &&
            (y = y.filter(($) => Ic($, ".swiper")[0] === t.el)[0])),
        Array.isArray(y) && y.length === 1 && (y = y[0]),
        Object.assign(t.pagination, { el: y }),
        (y = o(y)),
        y.forEach(($) => {
          w.type === "bullets" &&
            w.clickable &&
            $.classList.add(...(w.clickableClass || "").split(" ")),
            $.classList.add(w.modifierClass + w.type),
            $.classList.add(
              t.isHorizontal() ? w.horizontalClass : w.verticalClass,
            ),
            w.type === "bullets" &&
              w.dynamicBullets &&
              ($.classList.add(`${w.modifierClass}${w.type}-dynamic`),
              (l = 0),
              w.dynamicMainBullets < 1 && (w.dynamicMainBullets = 1)),
            w.type === "progressbar" &&
              w.progressbarOpposite &&
              $.classList.add(w.progressbarOppositeClass),
            w.clickable && $.addEventListener("click", p),
            t.enabled || $.classList.add(w.lockClass)
        }))
  }
  function g() {
    const w = t.params.pagination
    if (f()) return
    let y = t.pagination.el
    y &&
      ((y = o(y)),
      y.forEach(($) => {
        $.classList.remove(w.hiddenClass),
          $.classList.remove(w.modifierClass + w.type),
          $.classList.remove(
            t.isHorizontal() ? w.horizontalClass : w.verticalClass,
          ),
          w.clickable &&
            ($.classList.remove(...(w.clickableClass || "").split(" ")),
            $.removeEventListener("click", p))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach(($) =>
          $.classList.remove(...w.bulletActiveClass.split(" ")),
        )
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return
    const w = t.params.pagination
    let { el: y } = t.pagination
    ;(y = o(y)),
      y.forEach(($) => {
        $.classList.remove(w.horizontalClass, w.verticalClass),
          $.classList.add(
            t.isHorizontal() ? w.horizontalClass : w.verticalClass,
          )
      })
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? T() : (k(), m(), v())
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && v()
    }),
    r("snapIndexChange", () => {
      v()
    }),
    r("snapGridLengthChange", () => {
      m(), v()
    }),
    r("destroy", () => {
      g()
    }),
    r("enable disable", () => {
      let { el: w } = t.pagination
      w &&
        ((w = o(w)),
        w.forEach((y) =>
          y.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ))
    }),
    r("lock unlock", () => {
      v()
    }),
    r("click", (w, y) => {
      const $ = y.target,
        L = o(t.pagination.el)
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        L &&
        L.length > 0 &&
        !$.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && $ === t.navigation.nextEl) ||
            (t.navigation.prevEl && $ === t.navigation.prevEl))
        )
          return
        const I = L[0].classList.contains(t.params.pagination.hiddenClass)
        s(I === !0 ? "paginationShow" : "paginationHide"),
          L.forEach((ne) =>
            ne.classList.toggle(t.params.pagination.hiddenClass),
          )
      }
    })
  const E = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: w } = t.pagination
      w &&
        ((w = o(w)),
        w.forEach((y) =>
          y.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        k(),
        m(),
        v()
    },
    T = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass)
      let { el: w } = t.pagination
      w &&
        ((w = o(w)),
        w.forEach((y) =>
          y.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        g()
    }
  Object.assign(t.pagination, {
    enable: E,
    disable: T,
    render: m,
    update: v,
    init: k,
    destroy: g,
  })
}
function ky(e) {
  let { swiper: t, extendParams: n, on: r, emit: s, params: a } = e
  ;(t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    })
  let i,
    l,
    o = a && a.autoplay ? a.autoplay.delay : 3e3,
    f = a && a.autoplay ? a.autoplay.delay : 3e3,
    c,
    p = new Date().getTime(),
    v,
    m,
    k,
    g,
    E,
    T,
    w
  function y(V) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (V.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", y), !w && D()))
  }
  const $ = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (v = !0) : v && ((f = c), (v = !1))
      const V = t.autoplay.paused ? c : p + f - new Date().getTime()
      ;(t.autoplay.timeLeft = V),
        s("autoplayTimeLeft", V, V / o),
        (l = requestAnimationFrame(() => {
          $()
        }))
    },
    L = () => {
      let V
      return (
        t.virtual && t.params.virtual.enabled
          ? (V = t.slides.filter((Pe) =>
              Pe.classList.contains("swiper-slide-active"),
            )[0])
          : (V = t.slides[t.activeIndex]),
        V ? parseInt(V.getAttribute("data-swiper-autoplay"), 10) : void 0
      )
    },
    I = (V) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(l), $()
      let Ue = typeof V > "u" ? t.params.autoplay.delay : V
      ;(o = t.params.autoplay.delay), (f = t.params.autoplay.delay)
      const Pe = L()
      !Number.isNaN(Pe) &&
        Pe > 0 &&
        typeof V > "u" &&
        ((Ue = Pe), (o = Pe), (f = Pe)),
        (c = Ue)
      const Qe = t.params.speed,
        et = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(Qe, !0, !0), s("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, Qe, !0, !0), s("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(Qe, !0, !0), s("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, Qe, !0, !0), s("autoplay")),
            t.params.cssMode &&
              ((p = new Date().getTime()),
              requestAnimationFrame(() => {
                I()
              })))
        }
      return (
        Ue > 0
          ? (clearTimeout(i),
            (i = setTimeout(() => {
              et()
            }, Ue)))
          : requestAnimationFrame(() => {
              et()
            }),
        Ue
      )
    },
    ne = () => {
      ;(p = new Date().getTime()),
        (t.autoplay.running = !0),
        I(),
        s("autoplayStart")
    },
    q = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(i),
        cancelAnimationFrame(l),
        s("autoplayStop")
    },
    G = (V, Ue) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(i), V || (T = !0)
      const Pe = () => {
        s("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", y)
            : D()
      }
      if (((t.autoplay.paused = !0), Ue)) {
        E && (c = t.params.autoplay.delay), (E = !1), Pe()
        return
      }
      ;(c = (c || t.params.autoplay.delay) - (new Date().getTime() - p)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), Pe())
    },
    D = () => {
      ;(t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((p = new Date().getTime()),
        T ? ((T = !1), I(c)) : I(),
        (t.autoplay.paused = !1),
        s("autoplayResume"))
    },
    Q = () => {
      if (t.destroyed || !t.autoplay.running) return
      const V = cn()
      V.visibilityState === "hidden" && ((T = !0), G(!0)),
        V.visibilityState === "visible" && D()
    },
    ge = (V) => {
      V.pointerType === "mouse" &&
        ((T = !0), (w = !0), !(t.animating || t.autoplay.paused) && G(!0))
    },
    X = (V) => {
      V.pointerType === "mouse" && ((w = !1), t.autoplay.paused && D())
    },
    xe = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", ge),
        t.el.addEventListener("pointerleave", X))
    },
    Ce = () => {
      t.el.removeEventListener("pointerenter", ge),
        t.el.removeEventListener("pointerleave", X)
    },
    j = () => {
      cn().addEventListener("visibilitychange", Q)
    },
    ie = () => {
      cn().removeEventListener("visibilitychange", Q)
    }
  r("init", () => {
    t.params.autoplay.enabled && (xe(), j(), ne())
  }),
    r("destroy", () => {
      Ce(), ie(), t.autoplay.running && q()
    }),
    r("_freeModeStaticRelease", () => {
      ;(k || T) && D()
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? q() : G(!0, !0)
    }),
    r("beforeTransitionStart", (V, Ue, Pe) => {
      t.destroyed ||
        !t.autoplay.running ||
        (Pe || !t.params.autoplay.disableOnInteraction ? G(!0, !0) : q())
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          q()
          return
        }
        ;(m = !0),
          (k = !1),
          (T = !1),
          (g = setTimeout(() => {
            ;(T = !0), (k = !0), G(!0)
          }, 200))
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !m)) {
        if (
          (clearTimeout(g),
          clearTimeout(i),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(k = !1), (m = !1)
          return
        }
        k && t.params.cssMode && D(), (k = !1), (m = !1)
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (E = !0)
    }),
    Object.assign(t.autoplay, { start: ne, stop: q, pause: G, resume: D })
}
const My = { class: "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4" },
  $y = { class: "flex w-full justify-center gap-8 items-center" },
  Iy = { href: "https://bazaar.blendernation.com" },
  Oy = { href: "https://bazaar.blendernation.com" },
  Ay = ["src"],
  Ly = {
    __name: "Bazaar",
    props: { brightness: Number },
    setup(e) {
      const t = [ky, Py, Ty],
        n = e,
        r = (s) => {
          if (s >= 4) return "text-slate-800"
          if (s == 3) return "text-slate-200"
          if (s == 2) return "text-slate-300"
          if (s == 1) return "text-slate-300"
        }
      return (s, a) => (
        he(),
        Oe("div", My, [
          S("div", $y, [
            S(
              "h2",
              {
                class: N([
                  "text-5xl text-center text-semibold",
                  r(n.brightness),
                ]),
              },
              " BlenderNation's Bazaar ",
              2,
            ),
            S("a", Iy, [
              S(
                "button",
                {
                  "aria-label": "Visit the Bazaar website",
                  class: N([
                    "rounded px-5 py-2 text-white font-semibold",
                    {
                      "bg-slate-700": e.brightness >= 4,
                      "bg-slate-500": e.brightness == 3,
                      "bg-slate-400": e.brightness <= 2,
                    },
                  ]),
                },
                " Visit Site ",
                2,
              ),
            ]),
          ]),
          oe(
            pe(Cy),
            {
              spaceBetween: 30,
              centeredSlides: !0,
              autoplay: { delay: 2500, disableOnInteraction: !1 },
              pagination: { clickable: !0 },
              navigation: !0,
              modules: t,
              loop: !0,
              class: "mt-5",
            },
            {
              default: Ke(() => [
                oe(
                  pe(sn),
                  { class: "image-container" },
                  {
                    default: Ke(() => [
                      S("a", Oy, [
                        S(
                          "img",
                          {
                            src: "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
                            alt: "Bazaar's home page",
                            class:
                              "bg-slate-200 object-contain w-full rounded-xl",
                          },
                          null,
                          8,
                          Ay,
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 2")]), _: 1 }),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 3")]), _: 1 }),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 4")]), _: 1 }),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 5")]), _: 1 }),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 6")]), _: 1 }),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 7")]), _: 1 }),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 8")]), _: 1 }),
                oe(pe(sn), null, { default: Ke(() => [Ee("Slide 9")]), _: 1 }),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  },
  Ny = Zn(Ly, [["__scopeId", "data-v-72c8dabd"]]),
  Ry = {
    __name: "OkcSouthStake",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  By = {
    __name: "ArisSearch",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  zy = {
    __name: "AtlantaFloorOne",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Fy = {
    __name: "BuildOnYourLand",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  jy = {
    __name: "StehlFamilyDental",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Dy = {
    __name: "TubBoys",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Hy = {
    __name: "StuartPipeAndHose",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Gy = {
    __name: "SwimStatePool",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Vy = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  Wy = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  qy = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = be(1),
        n = e,
        r = (l) => {
          ;(t.value = Number(l)),
            window.localStorage.setItem("brightness", t.value)
        },
        s = {
          "okc-south-stake": Ry,
          "aris-search": By,
          "atlanta-floor-one": zy,
          "build-on-your-land": Fy,
          "stehl-family-dental": jy,
          "tub-boys": Dy,
          "stuart-pipe": Hy,
          "swim-state-pool": Gy,
          bazaar: Ny,
        },
        a = me(() => {
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
        let l = window.localStorage
        if (
          (l.getItem("brightness")
            ? (t.value = Number(l.getItem("brightness")))
            : l.setItem("brightness", t.value),
          n.component == "pricing")
        )
          (i.title = "josephhansen.dev | web developer/designer | pricing"),
            (i.meta[1].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (i.meta[6].content =
              "josephhansen.dev | web developer/designer | pricing"),
            (i.meta[4].content = "https://josephhansen.dev/pricing"),
            (i.meta[9].content = "https://josephhansen.dev/pricing")
        else if (n.component == "contact")
          (i.title = "josephhansen.dev | web developer/designer | contact"),
            (i.meta[1].content =
              "josephhansen.dev | web developer/designer | contact"),
            (i.meta[6].content =
              "josephhansen.dev | web developer/designer | contact"),
            (i.meta[4].content = "https://josephhansen.dev/contact"),
            (i.meta[9].content = "https://josephhansen.dev/contact")
        else if (n.component == "about")
          (i.title = "josephhansen.dev | web developer/designer | about"),
            (i.meta[1].content =
              "josephhansen.dev | web developer/designer | about"),
            (i.meta[6].content =
              "josephhansen.dev | web developer/designer | about"),
            (i.meta[4].content = "https://josephhansen.dev/about"),
            (i.meta[9].content = "https://josephhansen.dev/about")
        else if (n.component == "portfolio")
          (i.title = "josephhansen.dev | web developer/designer | portfolio"),
            (i.meta[1].content =
              "josephhansen.dev | web developer/designer | portfolio"),
            (i.meta[6].content =
              "josephhansen.dev | web developer/designer | portfolio"),
            (i.meta[4].content = "https://josephhansen.dev/portfolio"),
            (i.meta[9].content = "https://josephhansen.dev/portfolio")
        else if (n.component in s) {
          let o = n.component.replace(/-/g, " ")
          ;(i.title = `josephhansen.dev | web developer/designer | ${o}`),
            (i.meta[1].content = `josephhansen.dev | web developer/designer | ${o}`),
            (i.meta[6].content = `josephhansen.dev | web developer/designer | ${o}`),
            (i.meta[4].content = `https://josephhansen.dev/portfolio/${n.component}`),
            (i.meta[9].content = `https://josephhansen.dev/portfolio/${n.component}`)
        }
      })
      const i = Kr({
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
        dn(() => {
          ;(document.title = i.title),
            i.meta.forEach((l) => {
              let o = document.querySelector(
                `meta[name="${l.name}"], meta[property="${l.property}"]`,
              )
              o
                ? o.setAttribute("content", l.content)
                : ((o = document.createElement("meta")),
                  l.name && o.setAttribute("name", l.name),
                  l.property && o.setAttribute("property", l.property),
                  o.setAttribute("content", l.content),
                  document.getElementsByTagName("head")[0].appendChild(o))
            })
        }),
        (l, o) => (
          he(),
          Oe(
            nt,
            null,
            [
              S(
                "main",
                {
                  class: N([["w-dvw", a.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  oe($m, { "onUpdate:brightness": r }),
                  S("div", Vy, [
                    e.component == "pricing"
                      ? (he(),
                        Oe(
                          "div",
                          {
                            key: 0,
                            class: N([
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
                            oe(Sb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component == "contact"
                      ? (he(),
                        Oe(
                          "div",
                          {
                            key: 1,
                            class: N([
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
                            oe(Tb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component == "portfolio"
                      ? (he(),
                        Oe(
                          "div",
                          {
                            key: 2,
                            class: N([
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
                            oe(Qb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component == "about-me"
                      ? (he(),
                        Oe(
                          "div",
                          {
                            key: 3,
                            class: N([
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
                            oe(Pb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component in s
                      ? (he(),
                        Oe(
                          "div",
                          {
                            key: 4,
                            class: N([
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
                            (he(),
                            st(
                              W0(s[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component == "home"
                      ? (he(),
                        Oe(
                          "div",
                          {
                            key: 5,
                            class: N([
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
                            oe(zm, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                  ]),
                  S("div", Wy, [
                    e.component == "home"
                      ? (he(),
                        Oe(
                          "div",
                          {
                            key: 0,
                            class: N([
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
                            oe(G1, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                  ]),
                ],
                2,
              ),
              oe(W1, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  Uy = Zn(qy, [["__scopeId", "data-v-d11db5a0"]])
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const fr = typeof window < "u"
function Yy(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const We = Object.assign
function Va(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = Yt(s) ? s.map(e) : e(s)
  }
  return n
}
const jr = () => {},
  Yt = Array.isArray,
  Ky = /\/$/,
  Xy = (e) => e.replace(Ky, "")
function Wa(e, t, n = "/") {
  let r,
    s = {},
    a = "",
    i = ""
  const l = t.indexOf("#")
  let o = t.indexOf("?")
  return (
    l < o && l >= 0 && (o = -1),
    o > -1 &&
      ((r = t.slice(0, o)),
      (a = t.slice(o + 1, l > -1 ? l : t.length)),
      (s = e(a))),
    l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
    (r = ew(r ?? t, n)),
    { fullPath: r + (a && "?") + a + i, path: r, query: s, hash: i }
  )
}
function Zy(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function ru(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function Jy(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    Sr(t.matched[r], n.matched[s]) &&
    Dc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Sr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Dc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Qy(e[n], t[n])) return !1
  return !0
}
function Qy(e, t) {
  return Yt(e) ? su(e, t) : Yt(t) ? su(t, e) : e === t
}
function su(e, t) {
  return Yt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function ew(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1]
  ;(s === ".." || s === ".") && r.push("")
  let a = n.length - 1,
    i,
    l
  for (i = 0; i < r.length; i++)
    if (((l = r[i]), l !== "."))
      if (l === "..") a > 1 && a--
      else break
  return (
    n.slice(0, a).join("/") +
    "/" +
    r.slice(i - (i === r.length ? 1 : 0)).join("/")
  )
}
var Yr
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(Yr || (Yr = {}))
var Dr
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Dr || (Dr = {}))
function tw(e) {
  if (!e)
    if (fr) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Xy(e)
}
const nw = /^[^#]+#/
function rw(e, t) {
  return e.replace(nw, "#") + t
}
function sw(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Qs = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function aw(e) {
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
    t = sw(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function au(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const hi = new Map()
function iw(e, t) {
  hi.set(e, t)
}
function lw(e) {
  const t = hi.get(e)
  return hi.delete(e), t
}
let ow = () => location.protocol + "//" + location.host
function Hc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      o = s.slice(l)
    return o[0] !== "/" && (o = "/" + o), ru(o, "")
  }
  return ru(n, e) + r + s
}
function uw(e, t, n, r) {
  let s = [],
    a = [],
    i = null
  const l = ({ state: v }) => {
    const m = Hc(e, location),
      k = n.value,
      g = t.value
    let E = 0
    if (v) {
      if (((n.value = m), (t.value = v), i && i === k)) {
        i = null
        return
      }
      E = g ? v.position - g.position : 0
    } else r(m)
    s.forEach((T) => {
      T(n.value, k, {
        delta: E,
        type: Yr.pop,
        direction: E ? (E > 0 ? Dr.forward : Dr.back) : Dr.unknown,
      })
    })
  }
  function o() {
    i = n.value
  }
  function f(v) {
    s.push(v)
    const m = () => {
      const k = s.indexOf(v)
      k > -1 && s.splice(k, 1)
    }
    return a.push(m), m
  }
  function c() {
    const { history: v } = window
    v.state && v.replaceState(We({}, v.state, { scroll: Qs() }), "")
  }
  function p() {
    for (const v of a) v()
    ;(a = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", c)
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: o, listen: f, destroy: p }
  )
}
function iu(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Qs() : null,
  }
}
function cw(e) {
  const { history: t, location: n } = window,
    r = { value: Hc(e, n) },
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
  function a(o, f, c) {
    const p = e.indexOf("#"),
      v =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + o
          : ow() + e + o
    try {
      t[c ? "replaceState" : "pushState"](f, "", v), (s.value = f)
    } catch (m) {
      console.error(m), n[c ? "replace" : "assign"](v)
    }
  }
  function i(o, f) {
    const c = We({}, t.state, iu(s.value.back, o, s.value.forward, !0), f, {
      position: s.value.position,
    })
    a(o, c, !0), (r.value = o)
  }
  function l(o, f) {
    const c = We({}, s.value, t.state, { forward: o, scroll: Qs() })
    a(c.current, c, !0)
    const p = We({}, iu(r.value, o, null), { position: c.position + 1 }, f)
    a(o, p, !1), (r.value = o)
  }
  return { location: r, state: s, push: l, replace: i }
}
function dw(e) {
  e = tw(e)
  const t = cw(e),
    n = uw(e, t.state, t.location, t.replace)
  function r(a, i = !0) {
    i || n.pauseListeners(), history.go(a)
  }
  const s = We(
    { location: "", base: e, go: r, createHref: rw.bind(null, e) },
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
function fw(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Gc(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const Cn = {
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
  Vc = Symbol("")
var lu
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(lu || (lu = {}))
function Er(e, t) {
  return We(new Error(), { type: e, [Vc]: !0 }, t)
}
function an(e, t) {
  return e instanceof Error && Vc in e && (t == null || !!(e.type & t))
}
const ou = "[^/]+?",
  pw = { sensitive: !1, strict: !1, start: !0, end: !0 },
  hw = /[.+*?^${}()[\]/\\]/g
function gw(e, t) {
  const n = We({}, pw, t),
    r = []
  let s = n.start ? "^" : ""
  const a = []
  for (const f of e) {
    const c = f.length ? [] : [90]
    n.strict && !f.length && (s += "/")
    for (let p = 0; p < f.length; p++) {
      const v = f[p]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (v.type === 0)
        p || (s += "/"), (s += v.value.replace(hw, "\\$&")), (m += 40)
      else if (v.type === 1) {
        const { value: k, repeatable: g, optional: E, regexp: T } = v
        a.push({ name: k, repeatable: g, optional: E })
        const w = T || ou
        if (w !== ou) {
          m += 10
          try {
            new RegExp(`(${w})`)
          } catch ($) {
            throw new Error(
              `Invalid custom RegExp for param "${k}" (${w}): ` + $.message,
            )
          }
        }
        let y = g ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`
        p || (y = E && f.length < 2 ? `(?:/${y})` : "/" + y),
          E && (y += "?"),
          (s += y),
          (m += 20),
          E && (m += -8),
          g && (m += -20),
          w === ".*" && (m += -50)
      }
      c.push(m)
    }
    r.push(c)
  }
  if (n.strict && n.end) {
    const f = r.length - 1
    r[f][r[f].length - 1] += 0.7000000000000001
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)")
  const i = new RegExp(s, n.sensitive ? "" : "i")
  function l(f) {
    const c = f.match(i),
      p = {}
    if (!c) return null
    for (let v = 1; v < c.length; v++) {
      const m = c[v] || "",
        k = a[v - 1]
      p[k.name] = m && k.repeatable ? m.split("/") : m
    }
    return p
  }
  function o(f) {
    let c = "",
      p = !1
    for (const v of e) {
      ;(!p || !c.endsWith("/")) && (c += "/"), (p = !1)
      for (const m of v)
        if (m.type === 0) c += m.value
        else if (m.type === 1) {
          const { value: k, repeatable: g, optional: E } = m,
            T = k in f ? f[k] : ""
          if (Yt(T) && !g)
            throw new Error(
              `Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const w = Yt(T) ? T.join("/") : T
          if (!w)
            if (E)
              v.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (p = !0))
            else throw new Error(`Missing required param "${k}"`)
          c += w
        }
    }
    return c || "/"
  }
  return { re: i, score: r, keys: a, parse: l, stringify: o }
}
function vw(e, t) {
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
function mw(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const a = vw(r[n], s[n])
    if (a) return a
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (uu(r)) return 1
    if (uu(s)) return -1
  }
  return s.length - r.length
}
function uu(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const bw = { type: 0, value: "" },
  yw = /[a-zA-Z0-9_]/
function ww(e) {
  if (!e) return [[]]
  if (e === "/") return [[bw]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${f}": ${m}`)
  }
  let n = 0,
    r = n
  const s = []
  let a
  function i() {
    a && s.push(a), (a = [])
  }
  let l = 0,
    o,
    f = "",
    c = ""
  function p() {
    f &&
      (n === 0
        ? a.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
          ? (a.length > 1 &&
              (o === "*" || o === "+") &&
              t(
                `A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`,
              ),
            a.push({
              type: 1,
              value: f,
              regexp: c,
              repeatable: o === "*" || o === "+",
              optional: o === "*" || o === "?",
            }))
          : t("Invalid state to consume buffer"),
      (f = ""))
  }
  function v() {
    f += o
  }
  for (; l < e.length; ) {
    if (((o = e[l++]), o === "\\" && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        o === "/" ? (f && p(), i()) : o === ":" ? (p(), (n = 1)) : v()
        break
      case 4:
        v(), (n = r)
        break
      case 1:
        o === "("
          ? (n = 2)
          : yw.test(o)
            ? v()
            : (p(), (n = 0), o !== "*" && o !== "?" && o !== "+" && l--)
        break
      case 2:
        o === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + o)
            : (n = 3)
          : (c += o)
        break
      case 3:
        p(), (n = 0), o !== "*" && o !== "?" && o !== "+" && l--, (c = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), p(), i(), s
}
function xw(e, t, n) {
  const r = gw(ww(e.path), n),
    s = We(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function Sw(e, t) {
  const n = [],
    r = new Map()
  t = fu({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(c) {
    return r.get(c)
  }
  function a(c, p, v) {
    const m = !v,
      k = Ew(c)
    k.aliasOf = v && v.record
    const g = fu(t, c),
      E = [k]
    if ("alias" in c) {
      const y = typeof c.alias == "string" ? [c.alias] : c.alias
      for (const $ of y)
        E.push(
          We({}, k, {
            components: v ? v.record.components : k.components,
            path: $,
            aliasOf: v ? v.record : k,
          }),
        )
    }
    let T, w
    for (const y of E) {
      const { path: $ } = y
      if (p && $[0] !== "/") {
        const L = p.record.path,
          I = L[L.length - 1] === "/" ? "" : "/"
        y.path = p.record.path + ($ && I + $)
      }
      if (
        ((T = xw(y, p, g)),
        v
          ? v.alias.push(T)
          : ((w = w || T),
            w !== T && w.alias.push(T),
            m && c.name && !du(T) && i(c.name)),
        k.children)
      ) {
        const L = k.children
        for (let I = 0; I < L.length; I++) a(L[I], T, v && v.children[I])
      }
      ;(v = v || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          o(T)
    }
    return w
      ? () => {
          i(w)
        }
      : jr
  }
  function i(c) {
    if (Gc(c)) {
      const p = r.get(c)
      p &&
        (r.delete(c),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i))
    } else {
      const p = n.indexOf(c)
      p > -1 &&
        (n.splice(p, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(i),
        c.alias.forEach(i))
    }
  }
  function l() {
    return n
  }
  function o(c) {
    let p = 0
    for (
      ;
      p < n.length &&
      mw(c, n[p]) >= 0 &&
      (c.record.path !== n[p].record.path || !Wc(c, n[p]));

    )
      p++
    n.splice(p, 0, c), c.record.name && !du(c) && r.set(c.record.name, c)
  }
  function f(c, p) {
    let v,
      m = {},
      k,
      g
    if ("name" in c && c.name) {
      if (((v = r.get(c.name)), !v)) throw Er(1, { location: c })
      ;(g = v.record.name),
        (m = We(
          cu(
            p.params,
            v.keys.filter((w) => !w.optional).map((w) => w.name),
          ),
          c.params &&
            cu(
              c.params,
              v.keys.map((w) => w.name),
            ),
        )),
        (k = v.stringify(m))
    } else if ("path" in c)
      (k = c.path),
        (v = n.find((w) => w.re.test(k))),
        v && ((m = v.parse(k)), (g = v.record.name))
    else {
      if (((v = p.name ? r.get(p.name) : n.find((w) => w.re.test(p.path))), !v))
        throw Er(1, { location: c, currentLocation: p })
      ;(g = v.record.name),
        (m = We({}, p.params, c.params)),
        (k = v.stringify(m))
    }
    const E = []
    let T = v
    for (; T; ) E.unshift(T.record), (T = T.parent)
    return { name: g, path: k, params: m, matched: E, meta: Cw(E) }
  }
  return (
    e.forEach((c) => a(c)),
    {
      addRoute: a,
      resolve: f,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: s,
    }
  )
}
function cu(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function Ew(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: _w(e),
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
function _w(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function du(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Cw(e) {
  return e.reduce((t, n) => We(t, n.meta), {})
}
function fu(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function Wc(e, t) {
  return t.children.some((n) => n === e || Wc(e, n))
}
const qc = /#/g,
  Tw = /&/g,
  Pw = /\//g,
  kw = /=/g,
  Mw = /\?/g,
  Uc = /\+/g,
  $w = /%5B/g,
  Iw = /%5D/g,
  Yc = /%5E/g,
  Ow = /%60/g,
  Kc = /%7B/g,
  Aw = /%7C/g,
  Xc = /%7D/g,
  Lw = /%20/g
function Ki(e) {
  return encodeURI("" + e)
    .replace(Aw, "|")
    .replace($w, "[")
    .replace(Iw, "]")
}
function Nw(e) {
  return Ki(e).replace(Kc, "{").replace(Xc, "}").replace(Yc, "^")
}
function gi(e) {
  return Ki(e)
    .replace(Uc, "%2B")
    .replace(Lw, "+")
    .replace(qc, "%23")
    .replace(Tw, "%26")
    .replace(Ow, "`")
    .replace(Kc, "{")
    .replace(Xc, "}")
    .replace(Yc, "^")
}
function Rw(e) {
  return gi(e).replace(kw, "%3D")
}
function Bw(e) {
  return Ki(e).replace(qc, "%23").replace(Mw, "%3F")
}
function zw(e) {
  return e == null ? "" : Bw(e).replace(Pw, "%2F")
}
function Rs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function Fw(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const a = r[s].replace(Uc, " "),
      i = a.indexOf("="),
      l = Rs(i < 0 ? a : a.slice(0, i)),
      o = i < 0 ? null : Rs(a.slice(i + 1))
    if (l in t) {
      let f = t[l]
      Yt(f) || (f = t[l] = [f]), f.push(o)
    } else t[l] = o
  }
  return t
}
function pu(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = Rw(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Yt(r) ? r.map((a) => a && gi(a)) : [r && gi(r)]).forEach((a) => {
      a !== void 0 &&
        ((t += (t.length ? "&" : "") + n), a != null && (t += "=" + a))
    })
  }
  return t
}
function jw(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = Yt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r)
  }
  return t
}
const Dw = Symbol(""),
  hu = Symbol(""),
  Xi = Symbol(""),
  Zc = Symbol(""),
  vi = Symbol("")
function Rr() {
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
function Mn(e, t, n, r, s) {
  const a = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((i, l) => {
      const o = (p) => {
          p === !1
            ? l(Er(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : fw(p)
                ? l(Er(2, { from: t, to: p }))
                : (a &&
                    r.enterCallbacks[s] === a &&
                    typeof p == "function" &&
                    a.push(p),
                  i())
        },
        f = e.call(r && r.instances[s], t, n, o)
      let c = Promise.resolve(f)
      e.length < 3 && (c = c.then(o)), c.catch((p) => l(p))
    })
}
function qa(e, t, n, r) {
  const s = []
  for (const a of e)
    for (const i in a.components) {
      let l = a.components[i]
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (Hw(l)) {
          const f = (l.__vccOpts || l)[t]
          f && s.push(Mn(f, n, r, a, i))
        } else {
          let o = l()
          s.push(() =>
            o.then((f) => {
              if (!f)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${a.path}"`),
                )
              const c = Yy(f) ? f.default : f
              a.components[i] = c
              const v = (c.__vccOpts || c)[t]
              return v && Mn(v, n, r, a, i)()
            }),
          )
        }
    }
  return s
}
function Hw(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function gu(e) {
  const t = bt(Xi),
    n = bt(Zc),
    r = me(() => t.resolve(pe(e.to))),
    s = me(() => {
      const { matched: o } = r.value,
        { length: f } = o,
        c = o[f - 1],
        p = n.matched
      if (!c || !p.length) return -1
      const v = p.findIndex(Sr.bind(null, c))
      if (v > -1) return v
      const m = vu(o[f - 2])
      return f > 1 && vu(c) === m && p[p.length - 1].path !== m
        ? p.findIndex(Sr.bind(null, o[f - 2]))
        : v
    }),
    a = me(() => s.value > -1 && qw(n.params, r.value.params)),
    i = me(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Dc(n.params, r.value.params),
    )
  function l(o = {}) {
    return Ww(o)
      ? t[pe(e.replace) ? "replace" : "push"](pe(e.to)).catch(jr)
      : Promise.resolve()
  }
  return {
    route: r,
    href: me(() => r.value.href),
    isActive: a,
    isExactActive: i,
    navigate: l,
  }
}
const Gw = Bt({
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
    useLink: gu,
    setup(e, { slots: t }) {
      const n = Kr(gu(e)),
        { options: r } = bt(Xi),
        s = me(() => ({
          [mu(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [mu(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const a = t.default && t.default(n)
        return e.custom
          ? a
          : qe(
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
  Vw = Gw
function Ww(e) {
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
function qw(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!Yt(s) || s.length !== r.length || r.some((a, i) => a !== s[i]))
      return !1
  }
  return !0
}
function vu(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const mu = (e, t, n) => e ?? t ?? n,
  Uw = Bt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = bt(vi),
        s = me(() => e.route || r.value),
        a = bt(hu, 0),
        i = me(() => {
          let f = pe(a)
          const { matched: c } = s.value
          let p
          for (; (p = c[f]) && !p.components; ) f++
          return f
        }),
        l = me(() => s.value.matched[i.value])
      Dt(
        hu,
        me(() => i.value + 1),
      ),
        Dt(Dw, l),
        Dt(vi, s)
      const o = be()
      return (
        en(
          () => [o.value, l.value, e.name],
          ([f, c, p], [v, m, k]) => {
            c &&
              ((c.instances[p] = f),
              m &&
                m !== c &&
                f &&
                f === v &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              f &&
                c &&
                (!m || !Sr(c, m) || !v) &&
                (c.enterCallbacks[p] || []).forEach((g) => g(f))
          },
          { flush: "post" },
        ),
        () => {
          const f = s.value,
            c = e.name,
            p = l.value,
            v = p && p.components[c]
          if (!v) return bu(n.default, { Component: v, route: f })
          const m = p.props[c],
            k = m
              ? m === !0
                ? f.params
                : typeof m == "function"
                  ? m(f)
                  : m
              : null,
            E = qe(
              v,
              We({}, k, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (p.instances[c] = null)
                },
                ref: o,
              }),
            )
          return bu(n.default, { Component: E, route: f }) || E
        }
      )
    },
  })
function bu(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Yw = Uw
function Kw(e) {
  const t = Sw(e.routes, e),
    n = e.parseQuery || Fw,
    r = e.stringifyQuery || pu,
    s = e.history,
    a = Rr(),
    i = Rr(),
    l = Rr(),
    o = $0(Cn)
  let f = Cn
  fr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const c = Va.bind(null, (z) => "" + z),
    p = Va.bind(null, zw),
    v = Va.bind(null, Rs)
  function m(z, ae) {
    let te, fe
    return (
      Gc(z) ? ((te = t.getRecordMatcher(z)), (fe = ae)) : (fe = z),
      t.addRoute(fe, te)
    )
  }
  function k(z) {
    const ae = t.getRecordMatcher(z)
    ae && t.removeRoute(ae)
  }
  function g() {
    return t.getRoutes().map((z) => z.record)
  }
  function E(z) {
    return !!t.getRecordMatcher(z)
  }
  function T(z, ae) {
    if (((ae = We({}, ae || o.value)), typeof z == "string")) {
      const C = Wa(n, z, ae.path),
        R = t.resolve({ path: C.path }, ae),
        H = s.createHref(C.fullPath)
      return We(C, R, {
        params: v(R.params),
        hash: Rs(C.hash),
        redirectedFrom: void 0,
        href: H,
      })
    }
    let te
    if ("path" in z) te = We({}, z, { path: Wa(n, z.path, ae.path).path })
    else {
      const C = We({}, z.params)
      for (const R in C) C[R] == null && delete C[R]
      ;(te = We({}, z, { params: p(C) })), (ae.params = p(ae.params))
    }
    const fe = t.resolve(te, ae),
      ze = z.hash || ""
    fe.params = c(v(fe.params))
    const Xe = Zy(r, We({}, z, { hash: Nw(ze), path: fe.path })),
      x = s.createHref(Xe)
    return We(
      { fullPath: Xe, hash: ze, query: r === pu ? jw(z.query) : z.query || {} },
      fe,
      { redirectedFrom: void 0, href: x },
    )
  }
  function w(z) {
    return typeof z == "string" ? Wa(n, z, o.value.path) : We({}, z)
  }
  function y(z, ae) {
    if (f !== z) return Er(8, { from: ae, to: z })
  }
  function $(z) {
    return ne(z)
  }
  function L(z) {
    return $(We(w(z), { replace: !0 }))
  }
  function I(z) {
    const ae = z.matched[z.matched.length - 1]
    if (ae && ae.redirect) {
      const { redirect: te } = ae
      let fe = typeof te == "function" ? te(z) : te
      return (
        typeof fe == "string" &&
          ((fe =
            fe.includes("?") || fe.includes("#") ? (fe = w(fe)) : { path: fe }),
          (fe.params = {})),
        We(
          {
            query: z.query,
            hash: z.hash,
            params: "path" in fe ? {} : z.params,
          },
          fe,
        )
      )
    }
  }
  function ne(z, ae) {
    const te = (f = T(z)),
      fe = o.value,
      ze = z.state,
      Xe = z.force,
      x = z.replace === !0,
      C = I(te)
    if (C)
      return ne(
        We(w(C), {
          state: typeof C == "object" ? We({}, ze, C.state) : ze,
          force: Xe,
          replace: x,
        }),
        ae || te,
      )
    const R = te
    R.redirectedFrom = ae
    let H
    return (
      !Xe &&
        Jy(r, fe, te) &&
        ((H = Er(16, { to: R, from: fe })), Qe(fe, fe, !0, !1)),
      (H ? Promise.resolve(H) : D(R, fe))
        .catch((F) => (an(F) ? (an(F, 2) ? F : Pe(F)) : V(F, R, fe)))
        .then((F) => {
          if (F) {
            if (an(F, 2))
              return ne(
                We({ replace: x }, w(F.to), {
                  state: typeof F.to == "object" ? We({}, ze, F.to.state) : ze,
                  force: Xe,
                }),
                ae || R,
              )
          } else F = ge(R, fe, !0, x, ze)
          return Q(R, fe, F), F
        })
    )
  }
  function q(z, ae) {
    const te = y(z, ae)
    return te ? Promise.reject(te) : Promise.resolve()
  }
  function G(z) {
    const ae = Ft.values().next().value
    return ae && typeof ae.runWithContext == "function"
      ? ae.runWithContext(z)
      : z()
  }
  function D(z, ae) {
    let te
    const [fe, ze, Xe] = Xw(z, ae)
    te = qa(fe.reverse(), "beforeRouteLeave", z, ae)
    for (const C of fe)
      C.leaveGuards.forEach((R) => {
        te.push(Mn(R, z, ae))
      })
    const x = q.bind(null, z, ae)
    return (
      te.push(x),
      at(te)
        .then(() => {
          te = []
          for (const C of a.list()) te.push(Mn(C, z, ae))
          return te.push(x), at(te)
        })
        .then(() => {
          te = qa(ze, "beforeRouteUpdate", z, ae)
          for (const C of ze)
            C.updateGuards.forEach((R) => {
              te.push(Mn(R, z, ae))
            })
          return te.push(x), at(te)
        })
        .then(() => {
          te = []
          for (const C of Xe)
            if (C.beforeEnter)
              if (Yt(C.beforeEnter))
                for (const R of C.beforeEnter) te.push(Mn(R, z, ae))
              else te.push(Mn(C.beforeEnter, z, ae))
          return te.push(x), at(te)
        })
        .then(
          () => (
            z.matched.forEach((C) => (C.enterCallbacks = {})),
            (te = qa(Xe, "beforeRouteEnter", z, ae)),
            te.push(x),
            at(te)
          ),
        )
        .then(() => {
          te = []
          for (const C of i.list()) te.push(Mn(C, z, ae))
          return te.push(x), at(te)
        })
        .catch((C) => (an(C, 8) ? C : Promise.reject(C)))
    )
  }
  function Q(z, ae, te) {
    l.list().forEach((fe) => G(() => fe(z, ae, te)))
  }
  function ge(z, ae, te, fe, ze) {
    const Xe = y(z, ae)
    if (Xe) return Xe
    const x = ae === Cn,
      C = fr ? history.state : {}
    te &&
      (fe || x
        ? s.replace(z.fullPath, We({ scroll: x && C && C.scroll }, ze))
        : s.push(z.fullPath, ze)),
      (o.value = z),
      Qe(z, ae, te, x),
      Pe()
  }
  let X
  function xe() {
    X ||
      (X = s.listen((z, ae, te) => {
        if (!Ct.listening) return
        const fe = T(z),
          ze = I(fe)
        if (ze) {
          ne(We(ze, { replace: !0 }), fe).catch(jr)
          return
        }
        f = fe
        const Xe = o.value
        fr && iw(au(Xe.fullPath, te.delta), Qs()),
          D(fe, Xe)
            .catch((x) =>
              an(x, 12)
                ? x
                : an(x, 2)
                  ? (ne(x.to, fe)
                      .then((C) => {
                        an(C, 20) &&
                          !te.delta &&
                          te.type === Yr.pop &&
                          s.go(-1, !1)
                      })
                      .catch(jr),
                    Promise.reject())
                  : (te.delta && s.go(-te.delta, !1), V(x, fe, Xe)),
            )
            .then((x) => {
              ;(x = x || ge(fe, Xe, !1)),
                x &&
                  (te.delta && !an(x, 8)
                    ? s.go(-te.delta, !1)
                    : te.type === Yr.pop && an(x, 20) && s.go(-1, !1)),
                Q(fe, Xe, x)
            })
            .catch(jr)
      }))
  }
  let Ce = Rr(),
    j = Rr(),
    ie
  function V(z, ae, te) {
    Pe(z)
    const fe = j.list()
    return (
      fe.length ? fe.forEach((ze) => ze(z, ae, te)) : console.error(z),
      Promise.reject(z)
    )
  }
  function Ue() {
    return ie && o.value !== Cn
      ? Promise.resolve()
      : new Promise((z, ae) => {
          Ce.add([z, ae])
        })
  }
  function Pe(z) {
    return (
      ie ||
        ((ie = !z),
        xe(),
        Ce.list().forEach(([ae, te]) => (z ? te(z) : ae())),
        Ce.reset()),
      z
    )
  }
  function Qe(z, ae, te, fe) {
    const { scrollBehavior: ze } = e
    if (!fr || !ze) return Promise.resolve()
    const Xe =
      (!te && lw(au(z.fullPath, 0))) ||
      ((fe || !te) && history.state && history.state.scroll) ||
      null
    return Mi()
      .then(() => ze(z, ae, Xe))
      .then((x) => x && aw(x))
      .catch((x) => V(x, z, ae))
  }
  const et = (z) => s.go(z)
  let Kt
  const Ft = new Set(),
    Ct = {
      currentRoute: o,
      listening: !0,
      addRoute: m,
      removeRoute: k,
      hasRoute: E,
      getRoutes: g,
      resolve: T,
      options: e,
      push: $,
      replace: L,
      go: et,
      back: () => et(-1),
      forward: () => et(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: j.add,
      isReady: Ue,
      install(z) {
        const ae = this
        z.component("RouterLink", Vw),
          z.component("RouterView", Yw),
          (z.config.globalProperties.$router = ae),
          Object.defineProperty(z.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => pe(o),
          }),
          fr &&
            !Kt &&
            o.value === Cn &&
            ((Kt = !0), $(s.location).catch((ze) => {}))
        const te = {}
        for (const ze in Cn)
          Object.defineProperty(te, ze, {
            get: () => o.value[ze],
            enumerable: !0,
          })
        z.provide(Xi, ae), z.provide(Zc, zu(te)), z.provide(vi, o)
        const fe = z.unmount
        Ft.add(z),
          (z.unmount = function () {
            Ft.delete(z),
              Ft.size < 1 &&
                ((f = Cn),
                X && X(),
                (X = null),
                (o.value = Cn),
                (Kt = !1),
                (ie = !1)),
              fe()
          })
      },
    }
  function at(z) {
    return z.reduce((ae, te) => ae.then(() => G(te)), Promise.resolve())
  }
  return Ct
}
function Xw(e, t) {
  const n = [],
    r = [],
    s = [],
    a = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < a; i++) {
    const l = t.matched[i]
    l && (e.matched.find((f) => Sr(f, l)) ? r.push(l) : n.push(l))
    const o = e.matched[i]
    o && (t.matched.find((f) => Sr(f, o)) || s.push(o))
  }
  return [n, r, s]
}
const Zi = [
  { path: "/", component: null, props: { component: "home" } },
  { path: "/pricing", component: null, props: { component: "pricing" } },
  { path: "/contact", component: null, props: { component: "contact" } },
  { path: "/contact-me", component: null, props: { component: "contact" } },
  { path: "/about", component: null, props: { component: "about-me" } },
  { path: "/about-me", component: null, props: { component: "about-me" } },
  { path: "/portfolio", component: null, props: { component: "portfolio" } },
  {
    path: "/portfolio/bazaar",
    component: null,
    props: { component: "bazaar" },
  },
  {
    path: "/portfolio/okc-south-stake",
    component: null,
    props: { component: "okc-south-stake" },
  },
  {
    path: "/portfolio/build-on-your-land",
    component: null,
    props: { component: "build-on-your-land" },
  },
  {
    path: "/portfolio/aris-search",
    component: null,
    props: { component: "aris-search" },
  },
  {
    path: "/portfolio/swim-state-pool",
    component: null,
    props: { component: "swim-state-pool" },
  },
  {
    path: "/portfolio/atlanta-floor-one",
    component: null,
    props: { component: "atlanta-floor-one" },
  },
  {
    path: "/portfolio/stehl-family-dental",
    component: null,
    props: { component: "stehl-family-dental" },
  },
  {
    path: "/portfolio/stuart-pipe",
    component: null,
    props: { component: "stuart-pipe" },
  },
  {
    path: "/portfolio/tub-boys",
    component: null,
    props: { component: "tub-boys" },
  },
]
Zi.map((e) => e.path)
Zi.forEach((e) => {
  e.component = Uy
})
const Zw = Kw({ history: dw(), routes: Zi }),
  Jc = uv(hv)
Jc.use(Zw)
Jc.mount("#app")
