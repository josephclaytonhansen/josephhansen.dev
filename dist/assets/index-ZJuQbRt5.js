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
function bi(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const Je = {},
  pr = [],
  jt = () => {},
  Qh = () => !1,
  Rs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  yi = (e) => e.startsWith("onUpdate:"),
  wt = Object.assign,
  wi = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  e0 = Object.prototype.hasOwnProperty,
  Re = (e, t) => e0.call(e, t),
  Ee = Array.isArray,
  hr = (e) => zs(e) === "[object Map]",
  bu = (e) => zs(e) === "[object Set]",
  Ce = (e) => typeof e == "function",
  ut = (e) => typeof e == "string",
  Er = (e) => typeof e == "symbol",
  nt = (e) => e !== null && typeof e == "object",
  yu = (e) => (nt(e) || Ce(e)) && Ce(e.then) && Ce(e.catch),
  wu = Object.prototype.toString,
  zs = (e) => wu.call(e),
  t0 = (e) => zs(e).slice(8, -1),
  xu = (e) => zs(e) === "[object Object]",
  xi = (e) =>
    ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  bs = bi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Fs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  n0 = /-(\w)/g,
  tn = Fs((e) => e.replace(n0, (t, n) => (n ? n.toUpperCase() : ""))),
  r0 = /\B([A-Z])/g,
  _r = Fs((e) => e.replace(r0, "-$1").toLowerCase()),
  js = Fs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ma = Fs((e) => (e ? `on${js(e)}` : "")),
  Ln = (e, t) => !Object.is(e, t),
  ys = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Cs = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Ka = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let uo
const Su = () =>
  uo ||
  (uo =
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
  if (Ee(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ut(r) ? l0(r) : Ds(r)
      if (s) for (const a in s) t[a] = s[a]
    }
    return t
  } else if (ut(e) || nt(e)) return e
}
const s0 = /;(?![^(]*\))/g,
  a0 = /:([^]+)/,
  i0 = /\/\*[^]*?\*\//g
function l0(e) {
  const t = {}
  return (
    e
      .replace(i0, "")
      .split(s0)
      .forEach((n) => {
        if (n) {
          const r = n.split(a0)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function N(e) {
  let t = ""
  if (ut(e)) t = e
  else if (Ee(e))
    for (let n = 0; n < e.length; n++) {
      const r = N(e[n])
      r && (t += r + " ")
    }
  else if (nt(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const o0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  u0 = bi(o0)
function Eu(e) {
  return !!e || e === ""
}
const Mt = (e) =>
    ut(e)
      ? e
      : e == null
        ? ""
        : Ee(e) || (nt(e) && (e.toString === wu || !Ce(e.toString)))
          ? JSON.stringify(e, _u, 2)
          : String(e),
  _u = (e, t) =>
    t && t.__v_isRef
      ? _u(e, t.value)
      : hr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], a) => ((n[$a(r, a) + " =>"] = s), n),
              {},
            ),
          }
        : bu(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => $a(n)) }
          : Er(t)
            ? $a(t)
            : nt(t) && !Ee(t) && !xu(t)
              ? String(t)
              : t,
  $a = (e, t = "") => {
    var n
    return Er(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let Wt
class c0 {
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
function d0(e, t = Wt) {
  t && t.active && t.effects.push(e)
}
function f0() {
  return Wt
}
let Vn
class Si {
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
      d0(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Kn()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (p0(n.computed), this._dirtyLevel >= 2)) break
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
    let t = In,
      n = Vn
    try {
      return (In = !0), (Vn = this), this._runnings++, co(this), this.fn()
    } finally {
      fo(this), this._runnings--, (Vn = n), (In = t)
    }
  }
  stop() {
    var t
    this.active &&
      (co(this),
      fo(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function p0(e) {
  return e.value
}
function co(e) {
  e._trackId++, (e._depsLength = 0)
}
function fo(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Cu(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Cu(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let In = !0,
  Xa = 0
const Tu = []
function Kn() {
  Tu.push(In), (In = !1)
}
function Xn() {
  const e = Tu.pop()
  In = e === void 0 ? !0 : e
}
function Ei() {
  Xa++
}
function _i() {
  for (Xa--; !Xa && Za.length; ) Za.shift()()
}
function Pu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Cu(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const Za = []
function ku(e, t, n) {
  Ei()
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel
      ;(r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger())
    }
  Mu(e), _i()
}
function Mu(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), Za.push(t.scheduler))
}
const $u = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Ja = new WeakMap(),
  Wn = Symbol(""),
  Qa = Symbol("")
function $t(e, t, n) {
  if (In && Vn) {
    let r = Ja.get(e)
    r || Ja.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = $u(() => r.delete(n)))), Pu(Vn, s)
  }
}
function on(e, t, n, r, s, a) {
  const i = Ja.get(e)
  if (!i) return
  let l = []
  if (t === "clear") l = [...i.values()]
  else if (n === "length" && Ee(e)) {
    const o = Number(r)
    i.forEach((f, c) => {
      ;(c === "length" || (!Er(c) && c >= o)) && l.push(f)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        Ee(e)
          ? xi(n) && l.push(i.get("length"))
          : (l.push(i.get(Wn)), hr(e) && l.push(i.get(Qa)))
        break
      case "delete":
        Ee(e) || (l.push(i.get(Wn)), hr(e) && l.push(i.get(Qa)))
        break
      case "set":
        hr(e) && l.push(i.get(Wn))
        break
    }
  Ei()
  for (const o of l) o && ku(o, 2)
  _i()
}
const h0 = bi("__proto__,__v_isRef,__isVue"),
  Iu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Er),
  ),
  po = g0()
function g0() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = De(this)
        for (let a = 0, i = this.length; a < i; a++) $t(r, "get", a + "")
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(De)) : s
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Kn(), Ei()
        const r = De(this)[t].apply(this, n)
        return _i(), Xn(), r
      }
    }),
    e
  )
}
function v0(e) {
  const t = De(this)
  return $t(t, "has", e), t.hasOwnProperty(e)
}
class Ou {
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
      return r === (s ? (a ? M0 : Bu) : a ? Nu : Lu).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = Ee(t)
    if (!s) {
      if (i && Re(po, n)) return Reflect.get(po, n, r)
      if (n === "hasOwnProperty") return v0
    }
    const l = Reflect.get(t, n, r)
    return (Er(n) ? Iu.has(n) : h0(n)) || (s || $t(t, "get", n), a)
      ? l
      : Et(l)
        ? i && xi(n)
          ? l
          : l.value
        : nt(l)
          ? s
            ? zu(l)
            : Kr(l)
          : l
  }
}
class Au extends Ou {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let a = t[n]
    if (!this._shallow) {
      const o = br(a)
      if (
        (!Ts(r) && !br(r) && ((a = De(a)), (r = De(r))),
        !Ee(t) && Et(a) && !Et(r))
      )
        return o ? !1 : ((a.value = r), !0)
    }
    const i = Ee(t) && xi(n) ? Number(n) < t.length : Re(t, n),
      l = Reflect.set(t, n, r, s)
    return (
      t === De(s) && (i ? Ln(r, a) && on(t, "set", n, r) : on(t, "add", n, r)),
      l
    )
  }
  deleteProperty(t, n) {
    const r = Re(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && on(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!Er(n) || !Iu.has(n)) && $t(t, "has", n), r
  }
  ownKeys(t) {
    return $t(t, "iterate", Ee(t) ? "length" : Wn), Reflect.ownKeys(t)
  }
}
class m0 extends Ou {
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
const b0 = new Au(),
  y0 = new m0(),
  w0 = new Au(!0),
  Ci = (e) => e,
  Hs = (e) => Reflect.getPrototypeOf(e)
function os(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = De(e),
    a = De(t)
  n || (Ln(t, a) && $t(s, "get", t), $t(s, "get", a))
  const { has: i } = Hs(s),
    l = r ? Ci : n ? ki : Hr
  if (i.call(s, t)) return l(e.get(t))
  if (i.call(s, a)) return l(e.get(a))
  e !== s && e.get(t)
}
function us(e, t = !1) {
  const n = this.__v_raw,
    r = De(n),
    s = De(e)
  return (
    t || (Ln(e, s) && $t(r, "has", e), $t(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function cs(e, t = !1) {
  return (
    (e = e.__v_raw), !t && $t(De(e), "iterate", Wn), Reflect.get(e, "size", e)
  )
}
function ho(e) {
  e = De(e)
  const t = De(this)
  return Hs(t).has.call(t, e) || (t.add(e), on(t, "add", e, e)), this
}
function go(e, t) {
  t = De(t)
  const n = De(this),
    { has: r, get: s } = Hs(n)
  let a = r.call(n, e)
  a || ((e = De(e)), (a = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), a ? Ln(t, i) && on(n, "set", e, t) : on(n, "add", e, t), this
  )
}
function vo(e) {
  const t = De(this),
    { has: n, get: r } = Hs(t)
  let s = n.call(t, e)
  s || ((e = De(e)), (s = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return s && on(t, "delete", e, void 0), a
}
function mo() {
  const e = De(this),
    t = e.size !== 0,
    n = e.clear()
  return t && on(e, "clear", void 0, void 0), n
}
function ds(e, t) {
  return function (r, s) {
    const a = this,
      i = a.__v_raw,
      l = De(i),
      o = t ? Ci : e ? ki : Hr
    return (
      !e && $t(l, "iterate", Wn), i.forEach((f, c) => r.call(s, o(f), o(c), a))
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
      c = n ? Ci : t ? ki : Hr
    return (
      !t && $t(a, "iterate", o ? Qa : Wn),
      {
        next() {
          const { value: p, done: g } = f.next()
          return g
            ? { value: p, done: g }
            : { value: l ? [c(p[0]), c(p[1])] : c(p), done: g }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Sn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function x0() {
  const e = {
      get(a) {
        return os(this, a)
      },
      get size() {
        return cs(this)
      },
      has: us,
      add: ho,
      set: go,
      delete: vo,
      clear: mo,
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
      add: ho,
      set: go,
      delete: vo,
      clear: mo,
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
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear"),
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
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear"),
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
const [S0, E0, _0, C0] = x0()
function Ti(e, t) {
  const n = t ? (e ? C0 : _0) : e ? E0 : S0
  return (r, s, a) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Re(n, s) && s in r ? n : r, s, a)
}
const T0 = { get: Ti(!1, !1) },
  P0 = { get: Ti(!1, !0) },
  k0 = { get: Ti(!0, !1) },
  Lu = new WeakMap(),
  Nu = new WeakMap(),
  Bu = new WeakMap(),
  M0 = new WeakMap()
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
function I0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $0(t0(e))
}
function Kr(e) {
  return br(e) ? e : Pi(e, !1, b0, T0, Lu)
}
function Ru(e) {
  return Pi(e, !1, w0, P0, Nu)
}
function zu(e) {
  return Pi(e, !0, y0, k0, Bu)
}
function Pi(e, t, n, r, s) {
  if (!nt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const a = s.get(e)
  if (a) return a
  const i = I0(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? r : n)
  return s.set(e, l), l
}
function gr(e) {
  return br(e) ? gr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function br(e) {
  return !!(e && e.__v_isReadonly)
}
function Ts(e) {
  return !!(e && e.__v_isShallow)
}
function Fu(e) {
  return gr(e) || br(e)
}
function De(e) {
  const t = e && e.__v_raw
  return t ? De(t) : e
}
function ju(e) {
  return Cs(e, "__v_skip", !0), e
}
const Hr = (e) => (nt(e) ? Kr(e) : e),
  ki = (e) => (nt(e) ? zu(e) : e)
class Du {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Si(
        () => t(this._value),
        () => ws(this, 1),
        () => this.dep && Mu(this.dep),
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
      Hu(t),
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
function O0(e, t, n = !1) {
  let r, s
  const a = Ce(e)
  return (
    a ? ((r = e), (s = jt)) : ((r = e.get), (s = e.set)),
    new Du(r, s, a || !s, n)
  )
}
function Hu(e) {
  In &&
    Vn &&
    ((e = De(e)),
    Pu(
      Vn,
      e.dep ||
        (e.dep = $u(() => (e.dep = void 0), e instanceof Du ? e : void 0)),
    ))
}
function ws(e, t = 2, n) {
  e = De(e)
  const r = e.dep
  r && ku(r, t)
}
function Et(e) {
  return !!(e && e.__v_isRef === !0)
}
function pe(e) {
  return Gu(e, !1)
}
function A0(e) {
  return Gu(e, !0)
}
function Gu(e, t) {
  return Et(e) ? e : new L0(e, t)
}
class L0 {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : De(t)),
      (this._value = n ? t : Hr(t))
  }
  get value() {
    return Hu(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Ts(t) || br(t)
    ;(t = n ? t : De(t)),
      Ln(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Hr(t)), ws(this, 2))
  }
}
function ye(e) {
  return Et(e) ? e.value : e
}
const N0 = {
  get: (e, t, n) => ye(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return Et(s) && !Et(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function Vu(e) {
  return gr(e) ? e : new Proxy(e, N0)
}
function On(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (a) {
    Gs(a, t, n)
  }
  return s
}
function Ut(e, t, n, r) {
  if (Ce(e)) {
    const a = On(e, t, n, r)
    return (
      a &&
        yu(a) &&
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
      On(o, null, 10, [e, i, l])
      return
    }
  }
  B0(e, n, s, r)
}
function B0(e, t, n, r = !0) {
  console.error(e)
}
let Gr = !1,
  ei = !1
const xt = []
let Jt = 0
const vr = []
let Cn = null,
  Hn = 0
const Wu = Promise.resolve()
let Mi = null
function Vs(e) {
  const t = Mi || Wu
  return e ? t.then(this ? e.bind(this) : e) : t
}
function R0(e) {
  let t = Jt + 1,
    n = xt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = xt[r],
      a = Vr(s)
    a < e || (a === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function $i(e) {
  ;(!xt.length || !xt.includes(e, Gr && e.allowRecurse ? Jt + 1 : Jt)) &&
    (e.id == null ? xt.push(e) : xt.splice(R0(e.id), 0, e), qu())
}
function qu() {
  !Gr && !ei && ((ei = !0), (Mi = Wu.then(Yu)))
}
function z0(e) {
  const t = xt.indexOf(e)
  t > Jt && xt.splice(t, 1)
}
function F0(e) {
  Ee(e)
    ? vr.push(...e)
    : (!Cn || !Cn.includes(e, e.allowRecurse ? Hn + 1 : Hn)) && vr.push(e),
    qu()
}
function bo(e, t, n = Gr ? Jt + 1 : 0) {
  for (; n < xt.length; n++) {
    const r = xt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      xt.splice(n, 1), n--, r()
    }
  }
}
function Uu(e) {
  if (vr.length) {
    const t = [...new Set(vr)].sort((n, r) => Vr(n) - Vr(r))
    if (((vr.length = 0), Cn)) {
      Cn.push(...t)
      return
    }
    for (Cn = t, Hn = 0; Hn < Cn.length; Hn++) Cn[Hn]()
    ;(Cn = null), (Hn = 0)
  }
}
const Vr = (e) => (e.id == null ? 1 / 0 : e.id),
  j0 = (e, t) => {
    const n = Vr(e) - Vr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Yu(e) {
  ;(ei = !1), (Gr = !0), xt.sort(j0)
  try {
    for (Jt = 0; Jt < xt.length; Jt++) {
      const t = xt[Jt]
      t && t.active !== !1 && On(t, null, 14)
    }
  } finally {
    ;(Jt = 0),
      (xt.length = 0),
      Uu(),
      (Gr = !1),
      (Mi = null),
      (xt.length || vr.length) && Yu()
  }
}
function D0(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || Je
  let s = n
  const a = t.startsWith("update:"),
    i = a && t.slice(7)
  if (i && i in r) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: g } = r[c] || Je
    g && (s = n.map((m) => (ut(m) ? m.trim() : m))), p && (s = n.map(Ka))
  }
  let l,
    o = r[(l = Ma(t))] || r[(l = Ma(tn(t)))]
  !o && a && (o = r[(l = Ma(_r(t)))]), o && Ut(o, e, 6, s)
  const f = r[l + "Once"]
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Ut(f, e, 6, s)
  }
}
function Ku(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const a = e.emits
  let i = {},
    l = !1
  if (!Ce(e)) {
    const o = (f) => {
      const c = Ku(f, t, !0)
      c && ((l = !0), wt(i, c))
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  return !a && !l
    ? (nt(e) && r.set(e, null), null)
    : (Ee(a) ? a.forEach((o) => (i[o] = null)) : wt(i, a),
      nt(e) && r.set(e, i),
      i)
}
function Ws(e, t) {
  return !e || !Rs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Re(e, t[0].toLowerCase() + t.slice(1)) || Re(e, _r(t)) || Re(e, t))
}
let vt = null,
  qs = null
function Ps(e) {
  const t = vt
  return (vt = e), (qs = (e && e.type.__scopeId) || null), t
}
function Ii(e) {
  qs = e
}
function Oi() {
  qs = null
}
function it(e, t = vt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Mo(-1)
    const a = Ps(t)
    let i
    try {
      i = e(...s)
    } finally {
      Ps(a), r._d && Mo(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Ia(e) {
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
    data: g,
    setupState: m,
    ctx: k,
    inheritAttrs: v,
  } = e
  let E, T
  const w = Ps(e)
  try {
    if (n.shapeFlag & 4) {
      const $ = s || r,
        L = $
      ;(E = Zt(c.call(L, $, p, a, m, g, k))), (T = o)
    } else {
      const $ = t
      ;(E = Zt(
        $.length > 1 ? $(a, { attrs: o, slots: l, emit: f }) : $(a, null),
      )),
        (T = t.props ? o : H0(o))
    }
  } catch ($) {
    ;(Fr.length = 0), Gs($, e, 1), (E = he(Nn))
  }
  let y = E
  if (T && v !== !1) {
    const $ = Object.keys(T),
      { shapeFlag: L } = y
    $.length && L & 7 && (i && $.some(yi) && (T = G0(T, i)), (y = Un(y, T)))
  }
  return (
    n.dirs && ((y = Un(y)), (y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (y.transition = n.transition),
    (E = y),
    Ps(w),
    E
  )
}
const H0 = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || Rs(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  G0 = (e, t) => {
    const n = {}
    for (const r in e) (!yi(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function V0(e, t, n) {
  const { props: r, children: s, component: a } = e,
    { props: i, children: l, patchFlag: o } = t,
    f = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return r ? yo(r, i, f) : !!i
    if (o & 8) {
      const c = t.dynamicProps
      for (let p = 0; p < c.length; p++) {
        const g = c[p]
        if (i[g] !== r[g] && !Ws(f, g)) return !0
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
        ? !1
        : r
          ? i
            ? yo(r, i, f)
            : !0
          : !!i
  return !1
}
function yo(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const a = r[s]
    if (t[a] !== e[a] && !Ws(n, a)) return !0
  }
  return !1
}
function W0({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ai = "components",
  q0 = "directives"
function U0(e, t) {
  return Li(Ai, e, !0, t) || e
}
const Xu = Symbol.for("v-ndc")
function Y0(e) {
  return ut(e) ? Li(Ai, e, !1) || e : e || Xu
}
function K0(e) {
  return Li(q0, e)
}
function Li(e, t, n = !0, r = !1) {
  const s = vt || St
  if (s) {
    const a = s.type
    if (e === Ai) {
      const l = zg(a, !1)
      if (l && (l === t || l === tn(t) || l === js(tn(t)))) return a
    }
    const i = wo(s[e] || a[e], t) || wo(s.appContext[e], t)
    return !i && r ? a : i
  }
}
function wo(e, t) {
  return e && (e[t] || e[tn(t)] || e[js(tn(t))])
}
const X0 = (e) => e.__isSuspense
function Z0(e, t) {
  t && t.pendingBranch
    ? Ee(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : F0(e)
}
const J0 = Symbol.for("v-scx"),
  Q0 = () => yt(J0)
function cn(e, t) {
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
  const o = St,
    f = (I) => (r === !0 ? I : Gn(I, r === !1 ? 1 : void 0))
  let c,
    p = !1,
    g = !1
  if (
    (Et(e)
      ? ((c = () => e.value), (p = Ts(e)))
      : gr(e)
        ? ((c = () => f(e)), (p = !0))
        : Ee(e)
          ? ((g = !0),
            (p = e.some((I) => gr(I) || Ts(I))),
            (c = () =>
              e.map((I) => {
                if (Et(I)) return I.value
                if (gr(I)) return f(I)
                if (Ce(I)) return On(I, o, 2)
              })))
          : Ce(e)
            ? t
              ? (c = () => On(e, o, 2))
              : (c = () => (m && m(), Ut(e, o, 3, [k])))
            : (c = jt),
    t && r)
  ) {
    const I = c
    c = () => Gn(I())
  }
  let m,
    k = (I) => {
      m = y.onStop = () => {
        On(I, o, 4), (m = y.onStop = void 0)
      }
    },
    v
  if (Xs)
    if (
      ((k = jt),
      t ? n && Ut(t, o, 3, [c(), g ? [] : void 0, k]) : c(),
      s === "sync")
    ) {
      const I = Q0()
      v = I.__watcherHandles || (I.__watcherHandles = [])
    } else return jt
  let E = g ? new Array(e.length).fill(ps) : ps
  const T = () => {
    if (!(!y.active || !y.dirty))
      if (t) {
        const I = y.run()
        ;(r || p || (g ? I.some((ne, q) => Ln(ne, E[q])) : Ln(I, E))) &&
          (m && m(),
          Ut(t, o, 3, [I, E === ps ? void 0 : g && E[0] === ps ? [] : E, k]),
          (E = I))
      } else y.run()
  }
  T.allowRecurse = !!t
  let w
  s === "sync"
    ? (w = T)
    : s === "post"
      ? (w = () => kt(T, o && o.suspense))
      : ((T.pre = !0), o && (T.id = o.uid), (w = () => $i(T)))
  const y = new Si(c, jt, w),
    $ = f0(),
    L = () => {
      y.stop(), $ && wi($.effects, y)
    }
  return (
    t
      ? n
        ? T()
        : (E = y.run())
      : s === "post"
        ? kt(y.run.bind(y), o && o.suspense)
        : y.run(),
    v && v.push(L),
    L
  )
}
function eg(e, t, n) {
  const r = this.proxy,
    s = ut(e) ? (e.includes(".") ? Zu(r, e) : () => r[e]) : e.bind(r, r)
  let a
  Ce(t) ? (a = t) : ((a = t.handler), (n = t))
  const i = Xr(this),
    l = Ni(s, a.bind(r), n)
  return i(), l
}
function Zu(e, t) {
  const n = t.split(".")
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function Gn(e, t, n = 0, r) {
  if (!nt(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((r = r || new Set()), r.has(e))) return e
  if ((r.add(e), Et(e))) Gn(e.value, t, n, r)
  else if (Ee(e)) for (let s = 0; s < e.length; s++) Gn(e[s], t, n, r)
  else if (bu(e) || hr(e))
    e.forEach((s) => {
      Gn(s, t, n, r)
    })
  else if (xu(e)) for (const s in e) Gn(e[s], t, n, r)
  return e
}
function Ju(e, t) {
  if (vt === null) return e
  const n = Zs(vt) || vt.proxy,
    r = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [a, i, l, o = Je] = t[s]
    a &&
      (Ce(a) && (a = { mounted: a, updated: a }),
      a.deep && Gn(i),
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
function jn(e, t, n, r) {
  const s = e.dirs,
    a = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const l = s[i]
    a && (l.oldValue = a[i].value)
    let o = l.dir[r]
    o && (Kn(), Ut(o, n, 8, [e.el, l, e, t]), Xn())
  }
}
function Rt(e, t) {
  return Ce(e) ? wt({ name: e.name }, t, { setup: e }) : e
}
const Rr = (e) => !!e.type.__asyncLoader,
  Qu = (e) => e.type.__isKeepAlive
function tg(e, t) {
  ec(e, "a", t)
}
function ng(e, t) {
  ec(e, "da", t)
}
function ec(e, t, n = St) {
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
  if ((Us(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) Qu(s.parent.vnode) && rg(r, t, n, s), (s = s.parent)
  }
}
function rg(e, t, n, r) {
  const s = Us(t, e, r, !0)
  Bn(() => {
    wi(r[t], s)
  }, n)
}
function Us(e, t, n = St, r = !1) {
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
const dn =
    (e) =>
    (t, n = St) =>
      (!Xs || e === "sp") && Us(e, (...r) => t(...r), n),
  sg = dn("bm"),
  dt = dn("m"),
  Bi = dn("bu"),
  Ri = dn("u"),
  zi = dn("bum"),
  Bn = dn("um"),
  ag = dn("sp"),
  ig = dn("rtg"),
  lg = dn("rtc")
function og(e, t = St) {
  Us("ec", e, t)
}
function An(e, t, n, r) {
  let s
  const a = n && n[r]
  if (Ee(e) || ut(e)) {
    s = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, a && a[i])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, a && a[i])
  } else if (nt(e))
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
function tc(e, t, n = {}, r, s) {
  if (vt.isCE || (vt.parent && Rr(vt.parent) && vt.parent.isCE))
    return t !== "default" && (n.name = t), he("slot", n, r && r())
  let a = e[t]
  a && a._c && (a._d = !1), ce()
  const i = a && nc(a(n)),
    l = tt(
      Ze,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2,
    )
  return (
    !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    a && a._c && (a._d = !0),
    l
  )
}
function nc(e) {
  return e.some((t) =>
    $s(t) ? !(t.type === Nn || (t.type === Ze && !nc(t.children))) : !0,
  )
    ? e
    : null
}
const ti = (e) => (e ? (gc(e) ? Zs(e) || e.proxy : ti(e.parent)) : null),
  zr = wt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ti(e.parent),
    $root: (e) => ti(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), $i(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Vs.bind(e.proxy)),
    $watch: (e) => eg.bind(e),
  }),
  Oa = (e, t) => e !== Je && !e.__isScriptSetup && Re(e, t),
  ug = {
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
          if (Oa(r, t)) return (i[t] = 1), r[t]
          if (s !== Je && Re(s, t)) return (i[t] = 2), s[t]
          if ((f = e.propsOptions[0]) && Re(f, t)) return (i[t] = 3), a[t]
          if (n !== Je && Re(n, t)) return (i[t] = 4), n[t]
          ni && (i[t] = 0)
        }
      }
      const c = zr[t]
      let p, g
      if (c) return t === "$attrs" && $t(e, "get", t), c(e)
      if ((p = l.__cssModules) && (p = p[t])) return p
      if (n !== Je && Re(n, t)) return (i[t] = 4), n[t]
      if (((g = o.config.globalProperties), Re(g, t))) return g[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: a } = e
      return Oa(s, t)
        ? ((s[t] = n), !0)
        : r !== Je && Re(r, t)
          ? ((r[t] = n), !0)
          : Re(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== Je && Re(e, i)) ||
        Oa(t, i) ||
        ((l = a[0]) && Re(l, i)) ||
        Re(r, i) ||
        Re(zr, i) ||
        Re(s.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function xo(e) {
  return Ee(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ni = !0
function cg(e) {
  const t = Fi(e),
    n = e.proxy,
    r = e.ctx
  ;(ni = !1), t.beforeCreate && So(t.beforeCreate, e, "bc")
  const {
    data: s,
    computed: a,
    methods: i,
    watch: l,
    provide: o,
    inject: f,
    created: c,
    beforeMount: p,
    mounted: g,
    beforeUpdate: m,
    updated: k,
    activated: v,
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
  if ((f && dg(f, r, null), i))
    for (const ie in i) {
      const V = i[ie]
      Ce(V) && (r[ie] = V.bind(n))
    }
  if (s) {
    const ie = s.call(n, n)
    nt(ie) && (e.data = Kr(ie))
  }
  if (((ni = !0), a))
    for (const ie in a) {
      const V = a[ie],
        Ue = Ce(V) ? V.bind(n, n) : Ce(V.get) ? V.get.bind(n, n) : jt,
        Te = !Ce(V) && Ce(V.set) ? V.set.bind(n) : jt,
        Qe = me({ get: Ue, set: Te })
      Object.defineProperty(r, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (et) => (Qe.value = et),
      })
    }
  if (l) for (const ie in l) rc(l[ie], r, n, ie)
  if (o) {
    const ie = Ce(o) ? o.call(n) : o
    Reflect.ownKeys(ie).forEach((V) => {
      Dt(V, ie[V])
    })
  }
  c && So(c, e, "c")
  function j(ie, V) {
    Ee(V) ? V.forEach((Ue) => ie(Ue.bind(n))) : V && ie(V.bind(n))
  }
  if (
    (j(sg, p),
    j(dt, g),
    j(Bi, m),
    j(Ri, k),
    j(tg, v),
    j(ng, E),
    j(og, q),
    j(lg, I),
    j(ig, ne),
    j(zi, w),
    j(Bn, $),
    j(ag, G),
    Ee(D))
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
function dg(e, t, n = jt) {
  Ee(e) && (e = ri(e))
  for (const r in e) {
    const s = e[r]
    let a
    nt(s)
      ? "default" in s
        ? (a = yt(s.from || r, s.default, !0))
        : (a = yt(s.from || r))
      : (a = yt(s)),
      Et(a)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (i) => (a.value = i),
          })
        : (t[r] = a)
  }
}
function So(e, t, n) {
  Ut(Ee(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function rc(e, t, n, r) {
  const s = r.includes(".") ? Zu(n, r) : () => n[r]
  if (ut(e)) {
    const a = t[e]
    Ce(a) && en(s, a)
  } else if (Ce(e)) en(s, e.bind(n))
  else if (nt(e))
    if (Ee(e)) e.forEach((a) => rc(a, t, n, r))
    else {
      const a = Ce(e.handler) ? e.handler.bind(n) : t[e.handler]
      Ce(a) && en(s, a, e)
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
          s.length && s.forEach((f) => ks(o, f, i, !0)),
          ks(o, t, i)),
    nt(t) && a.set(t, o),
    o
  )
}
function ks(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t
  a && ks(e, a, n, !0), s && s.forEach((i) => ks(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = fg[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const fg = {
  data: Eo,
  props: _o,
  emits: _o,
  methods: Br,
  computed: Br,
  beforeCreate: Ct,
  created: Ct,
  beforeMount: Ct,
  mounted: Ct,
  beforeUpdate: Ct,
  updated: Ct,
  beforeDestroy: Ct,
  beforeUnmount: Ct,
  destroyed: Ct,
  unmounted: Ct,
  activated: Ct,
  deactivated: Ct,
  errorCaptured: Ct,
  serverPrefetch: Ct,
  components: Br,
  directives: Br,
  watch: hg,
  provide: Eo,
  inject: pg,
}
function Eo(e, t) {
  return t
    ? e
      ? function () {
          return wt(
            Ce(e) ? e.call(this, this) : e,
            Ce(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function pg(e, t) {
  return Br(ri(e), ri(t))
}
function ri(e) {
  if (Ee(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Br(e, t) {
  return e ? wt(Object.create(null), e, t) : t
}
function _o(e, t) {
  return e
    ? Ee(e) && Ee(t)
      ? [...new Set([...e, ...t])]
      : wt(Object.create(null), xo(e), xo(t ?? {}))
    : t
}
function hg(e, t) {
  if (!e) return t
  if (!t) return e
  const n = wt(Object.create(null), e)
  for (const r in t) n[r] = Ct(e[r], t[r])
  return n
}
function sc() {
  return {
    app: null,
    config: {
      isNativeTag: Qh,
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
let gg = 0
function vg(e, t) {
  return function (r, s = null) {
    Ce(r) || (r = wt({}, r)), s != null && !nt(s) && (s = null)
    const a = sc(),
      i = new WeakSet()
    let l = !1
    const o = (a.app = {
      _uid: gg++,
      _component: r,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: jg,
      get config() {
        return a.config
      },
      set config(f) {},
      use(f, ...c) {
        return (
          i.has(f) ||
            (f && Ce(f.install)
              ? (i.add(f), f.install(o, ...c))
              : Ce(f) && (i.add(f), f(o, ...c))),
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
          const g = he(r, s)
          return (
            (g.appContext = a),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            c && t ? t(g, f) : e(g, f, p),
            (l = !0),
            (o._container = f),
            (f.__vue_app__ = o),
            Zs(g.component) || g.component.proxy
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
        Ms = o
        try {
          return f()
        } finally {
          Ms = null
        }
      },
    })
    return o
  }
}
let Ms = null
function Dt(e, t) {
  if (St) {
    let n = St.provides
    const r = St.parent && St.parent.provides
    r === n && (n = St.provides = Object.create(r)), (n[e] = t)
  }
}
function yt(e, t, n = !1) {
  const r = St || vt
  if (r || Ms) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Ms._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && Ce(t) ? t.call(r && r.proxy) : t
  }
}
function mg(e, t, n, r = !1) {
  const s = {},
    a = {}
  Cs(a, Ks, 1), (e.propsDefaults = Object.create(null)), ac(e, t, s, a)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : Ru(s)) : e.type.props ? (e.props = s) : (e.props = a),
    (e.attrs = a)
}
function bg(e, t, n, r) {
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
        let g = c[p]
        if (Ws(e.emitsOptions, g)) continue
        const m = t[g]
        if (o)
          if (Re(a, g)) m !== a[g] && ((a[g] = m), (f = !0))
          else {
            const k = tn(g)
            s[k] = si(o, l, k, m, e, !1)
          }
        else m !== a[g] && ((a[g] = m), (f = !0))
      }
    }
  } else {
    ac(e, t, s, a) && (f = !0)
    let c
    for (const p in l)
      (!t || (!Re(t, p) && ((c = _r(p)) === p || !Re(t, c)))) &&
        (o
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (s[p] = si(o, l, p, void 0, e, !0))
          : delete s[p])
    if (a !== l) for (const p in a) (!t || !Re(t, p)) && (delete a[p], (f = !0))
  }
  f && on(e, "set", "$attrs")
}
function ac(e, t, n, r) {
  const [s, a] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let o in t) {
      if (bs(o)) continue
      const f = t[o]
      let c
      s && Re(s, (c = tn(o)))
        ? !a || !a.includes(c)
          ? (n[c] = f)
          : ((l || (l = {}))[c] = f)
        : Ws(e.emitsOptions, o) ||
          ((!(o in r) || f !== r[o]) && ((r[o] = f), (i = !0)))
    }
  if (a) {
    const o = De(n),
      f = l || Je
    for (let c = 0; c < a.length; c++) {
      const p = a[c]
      n[p] = si(s, o, p, f[p], e, !Re(f, p))
    }
  }
  return i
}
function si(e, t, n, r, s, a) {
  const i = e[n]
  if (i != null) {
    const l = Re(i, "default")
    if (l && r === void 0) {
      const o = i.default
      if (i.type !== Function && !i.skipFactory && Ce(o)) {
        const { propsDefaults: f } = s
        if (n in f) r = f[n]
        else {
          const c = Xr(s)
          ;(r = f[n] = o.call(null, t)), c()
        }
      } else r = o
    }
    i[0] && (a && !l ? (r = !1) : i[1] && (r === "" || r === _r(n)) && (r = !0))
  }
  return r
}
function ic(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const a = e.props,
    i = {},
    l = []
  let o = !1
  if (!Ce(e)) {
    const c = (p) => {
      o = !0
      const [g, m] = ic(p, t, !0)
      wt(i, g), m && l.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!a && !o) return nt(e) && r.set(e, pr), pr
  if (Ee(a))
    for (let c = 0; c < a.length; c++) {
      const p = tn(a[c])
      Co(p) && (i[p] = Je)
    }
  else if (a)
    for (const c in a) {
      const p = tn(c)
      if (Co(p)) {
        const g = a[c],
          m = (i[p] = Ee(g) || Ce(g) ? { type: g } : wt({}, g))
        if (m) {
          const k = ko(Boolean, m.type),
            v = ko(String, m.type)
          ;(m[0] = k > -1),
            (m[1] = v < 0 || k < v),
            (k > -1 || Re(m, "default")) && l.push(p)
        }
      }
    }
  const f = [i, l]
  return nt(e) && r.set(e, f), f
}
function Co(e) {
  return e[0] !== "$"
}
function To(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function Po(e, t) {
  return To(e) === To(t)
}
function ko(e, t) {
  return Ee(t) ? t.findIndex((n) => Po(n, e)) : Ce(t) && Po(t, e) ? 0 : -1
}
const lc = (e) => e[0] === "_" || e === "$stable",
  ji = (e) => (Ee(e) ? e.map(Zt) : [Zt(e)]),
  yg = (e, t, n) => {
    if (t._n) return t
    const r = it((...s) => ji(t(...s)), n)
    return (r._c = !1), r
  },
  oc = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (lc(s)) continue
      const a = e[s]
      if (Ce(a)) t[s] = yg(s, a, r)
      else if (a != null) {
        const i = ji(a)
        t[s] = () => i
      }
    }
  },
  uc = (e, t) => {
    const n = ji(t)
    e.slots.default = () => n
  },
  wg = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = De(t)), Cs(t, "_", n)) : oc(t, (e.slots = {}))
    } else (e.slots = {}), t && uc(e, t)
    Cs(e.slots, Ks, 1)
  },
  xg = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let a = !0,
      i = Je
    if (r.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (a = !1)
          : (wt(s, t), !n && l === 1 && delete s._)
        : ((a = !t.$stable), oc(t, s)),
        (i = t)
    } else t && (uc(e, t), (i = { default: 1 }))
    if (a) for (const l in s) !lc(l) && i[l] == null && delete s[l]
  }
function ai(e, t, n, r, s = !1) {
  if (Ee(e)) {
    e.forEach((g, m) => ai(g, t && (Ee(t) ? t[m] : t), n, r, s))
    return
  }
  if (Rr(r) && !s) return
  const a = r.shapeFlag & 4 ? Zs(r.component) || r.component.proxy : r.el,
    i = s ? null : a,
    { i: l, r: o } = e,
    f = t && t.r,
    c = l.refs === Je ? (l.refs = {}) : l.refs,
    p = l.setupState
  if (
    (f != null &&
      f !== o &&
      (ut(f)
        ? ((c[f] = null), Re(p, f) && (p[f] = null))
        : Et(f) && (f.value = null)),
    Ce(o))
  )
    On(o, l, 12, [i, c])
  else {
    const g = ut(o),
      m = Et(o),
      k = e.f
    if (g || m) {
      const v = () => {
        if (k) {
          const E = g ? (Re(p, o) ? p[o] : c[o]) : o.value
          s
            ? Ee(E) && wi(E, a)
            : Ee(E)
              ? E.includes(a) || E.push(a)
              : g
                ? ((c[o] = [a]), Re(p, o) && (p[o] = c[o]))
                : ((o.value = [a]), e.k && (c[e.k] = o.value))
        } else
          g
            ? ((c[o] = i), Re(p, o) && (p[o] = i))
            : m && ((o.value = i), e.k && (c[e.k] = i))
      }
      s || k ? v() : ((v.id = -1), kt(v, n))
    }
  }
}
const kt = Z0
function Sg(e) {
  return Eg(e)
}
function Eg(e, t) {
  const n = Su()
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
      nextSibling: g,
      setScopeId: m = jt,
      insertStaticContent: k,
    } = e,
    v = (
      S,
      C,
      B,
      H = null,
      F = null,
      J = null,
      re = void 0,
      Z = null,
      ee = !!C.dynamicChildren,
    ) => {
      if (S === C) return
      S && !Or(S, C) && ((H = z(S)), et(S, F, J, !0), (S = null)),
        C.patchFlag === -2 && ((ee = !1), (C.dynamicChildren = null))
      const { type: U, ref: le, shapeFlag: be } = C
      switch (U) {
        case Ys:
          E(S, C, B, H)
          break
        case Nn:
          T(S, C, B, H)
          break
        case xs:
          S == null && w(C, B, H, re)
          break
        case Ze:
          ge(S, C, B, H, F, J, re, Z, ee)
          break
        default:
          be & 1
            ? L(S, C, B, H, F, J, re, Z, ee)
            : be & 6
              ? X(S, C, B, H, F, J, re, Z, ee)
              : (be & 64 || be & 128) &&
                U.process(S, C, B, H, F, J, re, Z, ee, fe)
      }
      le != null && F && ai(le, S && S.ref, J, C || S, !C)
    },
    E = (S, C, B, H) => {
      if (S == null) r((C.el = l(C.children)), B, H)
      else {
        const F = (C.el = S.el)
        C.children !== S.children && f(F, C.children)
      }
    },
    T = (S, C, B, H) => {
      S == null ? r((C.el = o(C.children || "")), B, H) : (C.el = S.el)
    },
    w = (S, C, B, H) => {
      ;[S.el, S.anchor] = k(S.children, C, B, H, S.el, S.anchor)
    },
    y = ({ el: S, anchor: C }, B, H) => {
      let F
      for (; S && S !== C; ) (F = g(S)), r(S, B, H), (S = F)
      r(C, B, H)
    },
    $ = ({ el: S, anchor: C }) => {
      let B
      for (; S && S !== C; ) (B = g(S)), s(S), (S = B)
      s(C)
    },
    L = (S, C, B, H, F, J, re, Z, ee) => {
      C.type === "svg" ? (re = "svg") : C.type === "math" && (re = "mathml"),
        S == null ? I(C, B, H, F, J, re, Z, ee) : G(S, C, F, J, re, Z, ee)
    },
    I = (S, C, B, H, F, J, re, Z) => {
      let ee, U
      const { props: le, shapeFlag: be, transition: ve, dirs: Se } = S
      if (
        ((ee = S.el = i(S.type, J, le && le.is, le)),
        be & 8
          ? c(ee, S.children)
          : be & 16 && q(S.children, ee, null, H, F, Aa(S, J), re, Z),
        Se && jn(S, null, H, "created"),
        ne(ee, S, S.scopeId, re, H),
        le)
      ) {
        for (const Fe in le)
          Fe !== "value" &&
            !bs(Fe) &&
            a(ee, Fe, null, le[Fe], J, S.children, H, F, st)
        "value" in le && a(ee, "value", null, le.value, J),
          (U = le.onVnodeBeforeMount) && Xt(U, H, S)
      }
      Se && jn(S, null, H, "beforeMount")
      const ke = _g(F, ve)
      ke && ve.beforeEnter(ee),
        r(ee, C, B),
        ((U = le && le.onVnodeMounted) || ke || Se) &&
          kt(() => {
            U && Xt(U, H, S),
              ke && ve.enter(ee),
              Se && jn(S, null, H, "mounted")
          }, F)
    },
    ne = (S, C, B, H, F) => {
      if ((B && m(S, B), H)) for (let J = 0; J < H.length; J++) m(S, H[J])
      if (F) {
        let J = F.subTree
        if (C === J) {
          const re = F.vnode
          ne(S, re, re.scopeId, re.slotScopeIds, F.parent)
        }
      }
    },
    q = (S, C, B, H, F, J, re, Z, ee = 0) => {
      for (let U = ee; U < S.length; U++) {
        const le = (S[U] = Z ? Tn(S[U]) : Zt(S[U]))
        v(null, le, C, B, H, F, J, re, Z)
      }
    },
    G = (S, C, B, H, F, J, re) => {
      const Z = (C.el = S.el)
      let { patchFlag: ee, dynamicChildren: U, dirs: le } = C
      ee |= S.patchFlag & 16
      const be = S.props || Je,
        ve = C.props || Je
      let Se
      if (
        (B && Dn(B, !1),
        (Se = ve.onVnodeBeforeUpdate) && Xt(Se, B, C, S),
        le && jn(C, S, B, "beforeUpdate"),
        B && Dn(B, !0),
        U
          ? D(S.dynamicChildren, U, Z, B, H, Aa(C, F), J)
          : re || V(S, C, Z, null, B, H, Aa(C, F), J, !1),
        ee > 0)
      ) {
        if (ee & 16) Q(Z, C, be, ve, B, H, F)
        else if (
          (ee & 2 && be.class !== ve.class && a(Z, "class", null, ve.class, F),
          ee & 4 && a(Z, "style", be.style, ve.style, F),
          ee & 8)
        ) {
          const ke = C.dynamicProps
          for (let Fe = 0; Fe < ke.length; Fe++) {
            const Ye = ke[Fe],
              rt = be[Ye],
              It = ve[Ye]
            ;(It !== rt || Ye === "value") &&
              a(Z, Ye, rt, It, F, S.children, B, H, st)
          }
        }
        ee & 1 && S.children !== C.children && c(Z, C.children)
      } else !re && U == null && Q(Z, C, be, ve, B, H, F)
      ;((Se = ve.onVnodeUpdated) || le) &&
        kt(() => {
          Se && Xt(Se, B, C, S), le && jn(C, S, B, "updated")
        }, H)
    },
    D = (S, C, B, H, F, J, re) => {
      for (let Z = 0; Z < C.length; Z++) {
        const ee = S[Z],
          U = C[Z],
          le =
            ee.el && (ee.type === Ze || !Or(ee, U) || ee.shapeFlag & 70)
              ? p(ee.el)
              : B
        v(ee, U, le, null, H, F, J, re, !0)
      }
    },
    Q = (S, C, B, H, F, J, re) => {
      if (B !== H) {
        if (B !== Je)
          for (const Z in B)
            !bs(Z) && !(Z in H) && a(S, Z, B[Z], null, re, C.children, F, J, st)
        for (const Z in H) {
          if (bs(Z)) continue
          const ee = H[Z],
            U = B[Z]
          ee !== U && Z !== "value" && a(S, Z, U, ee, re, C.children, F, J, st)
        }
        "value" in H && a(S, "value", B.value, H.value, re)
      }
    },
    ge = (S, C, B, H, F, J, re, Z, ee) => {
      const U = (C.el = S ? S.el : l("")),
        le = (C.anchor = S ? S.anchor : l(""))
      let { patchFlag: be, dynamicChildren: ve, slotScopeIds: Se } = C
      Se && (Z = Z ? Z.concat(Se) : Se),
        S == null
          ? (r(U, B, H),
            r(le, B, H),
            q(C.children || [], B, le, F, J, re, Z, ee))
          : be > 0 && be & 64 && ve && S.dynamicChildren
            ? (D(S.dynamicChildren, ve, B, F, J, re, Z),
              (C.key != null || (F && C === F.subTree)) && cc(S, C, !0))
            : V(S, C, B, le, F, J, re, Z, ee)
    },
    X = (S, C, B, H, F, J, re, Z, ee) => {
      ;(C.slotScopeIds = Z),
        S == null
          ? C.shapeFlag & 512
            ? F.ctx.activate(C, B, H, re, ee)
            : xe(C, B, H, F, J, re, ee)
          : _e(S, C, ee)
    },
    xe = (S, C, B, H, F, J, re) => {
      const Z = (S.component = Ag(S, H, F))
      if ((Qu(S) && (Z.ctx.renderer = fe), Lg(Z), Z.asyncDep)) {
        if ((F && F.registerDep(Z, j), !S.el)) {
          const ee = (Z.subTree = he(Nn))
          T(null, ee, C, B)
        }
      } else j(Z, S, C, B, F, J, re)
    },
    _e = (S, C, B) => {
      const H = (C.component = S.component)
      if (V0(S, C, B))
        if (H.asyncDep && !H.asyncResolved) {
          ie(H, C, B)
          return
        } else (H.next = C), z0(H.update), (H.effect.dirty = !0), H.update()
      else (C.el = S.el), (H.vnode = C)
    },
    j = (S, C, B, H, F, J, re) => {
      const Z = () => {
          if (S.isMounted) {
            let { next: le, bu: be, u: ve, parent: Se, vnode: ke } = S
            {
              const vn = dc(S)
              if (vn) {
                le && ((le.el = ke.el), ie(S, le, re)),
                  vn.asyncDep.then(() => {
                    S.isUnmounted || Z()
                  })
                return
              }
            }
            let Fe = le,
              Ye
            Dn(S, !1),
              le ? ((le.el = ke.el), ie(S, le, re)) : (le = ke),
              be && ys(be),
              (Ye = le.props && le.props.onVnodeBeforeUpdate) &&
                Xt(Ye, Se, le, ke),
              Dn(S, !0)
            const rt = Ia(S),
              It = S.subTree
            ;(S.subTree = rt),
              v(It, rt, p(It.el), z(It), S, F, J),
              (le.el = rt.el),
              Fe === null && W0(S, rt.el),
              ve && kt(ve, F),
              (Ye = le.props && le.props.onVnodeUpdated) &&
                kt(() => Xt(Ye, Se, le, ke), F)
          } else {
            let le
            const { el: be, props: ve } = C,
              { bm: Se, m: ke, parent: Fe } = S,
              Ye = Rr(C)
            if (
              (Dn(S, !1),
              Se && ys(Se),
              !Ye && (le = ve && ve.onVnodeBeforeMount) && Xt(le, Fe, C),
              Dn(S, !0),
              be && Ke)
            ) {
              const rt = () => {
                ;(S.subTree = Ia(S)), Ke(be, S.subTree, S, F, null)
              }
              Ye
                ? C.type.__asyncLoader().then(() => !S.isUnmounted && rt())
                : rt()
            } else {
              const rt = (S.subTree = Ia(S))
              v(null, rt, B, H, S, F, J), (C.el = rt.el)
            }
            if ((ke && kt(ke, F), !Ye && (le = ve && ve.onVnodeMounted))) {
              const rt = C
              kt(() => Xt(le, Fe, rt), F)
            }
            ;(C.shapeFlag & 256 ||
              (Fe && Rr(Fe.vnode) && Fe.vnode.shapeFlag & 256)) &&
              S.a &&
              kt(S.a, F),
              (S.isMounted = !0),
              (C = B = H = null)
          }
        },
        ee = (S.effect = new Si(Z, jt, () => $i(U), S.scope)),
        U = (S.update = () => {
          ee.dirty && ee.run()
        })
      ;(U.id = S.uid), Dn(S, !0), U()
    },
    ie = (S, C, B) => {
      C.component = S
      const H = S.vnode.props
      ;(S.vnode = C),
        (S.next = null),
        bg(S, C.props, H, B),
        xg(S, C.children, B),
        Kn(),
        bo(S),
        Xn()
    },
    V = (S, C, B, H, F, J, re, Z, ee = !1) => {
      const U = S && S.children,
        le = S ? S.shapeFlag : 0,
        be = C.children,
        { patchFlag: ve, shapeFlag: Se } = C
      if (ve > 0) {
        if (ve & 128) {
          Te(U, be, B, H, F, J, re, Z, ee)
          return
        } else if (ve & 256) {
          Ue(U, be, B, H, F, J, re, Z, ee)
          return
        }
      }
      Se & 8
        ? (le & 16 && st(U, F, J), be !== U && c(B, be))
        : le & 16
          ? Se & 16
            ? Te(U, be, B, H, F, J, re, Z, ee)
            : st(U, F, J, !0)
          : (le & 8 && c(B, ""), Se & 16 && q(be, B, H, F, J, re, Z, ee))
    },
    Ue = (S, C, B, H, F, J, re, Z, ee) => {
      ;(S = S || pr), (C = C || pr)
      const U = S.length,
        le = C.length,
        be = Math.min(U, le)
      let ve
      for (ve = 0; ve < be; ve++) {
        const Se = (C[ve] = ee ? Tn(C[ve]) : Zt(C[ve]))
        v(S[ve], Se, B, null, F, J, re, Z, ee)
      }
      U > le ? st(S, F, J, !0, !1, be) : q(C, B, H, F, J, re, Z, ee, be)
    },
    Te = (S, C, B, H, F, J, re, Z, ee) => {
      let U = 0
      const le = C.length
      let be = S.length - 1,
        ve = le - 1
      for (; U <= be && U <= ve; ) {
        const Se = S[U],
          ke = (C[U] = ee ? Tn(C[U]) : Zt(C[U]))
        if (Or(Se, ke)) v(Se, ke, B, null, F, J, re, Z, ee)
        else break
        U++
      }
      for (; U <= be && U <= ve; ) {
        const Se = S[be],
          ke = (C[ve] = ee ? Tn(C[ve]) : Zt(C[ve]))
        if (Or(Se, ke)) v(Se, ke, B, null, F, J, re, Z, ee)
        else break
        be--, ve--
      }
      if (U > be) {
        if (U <= ve) {
          const Se = ve + 1,
            ke = Se < le ? C[Se].el : H
          for (; U <= ve; )
            v(null, (C[U] = ee ? Tn(C[U]) : Zt(C[U])), B, ke, F, J, re, Z, ee),
              U++
        }
      } else if (U > ve) for (; U <= be; ) et(S[U], F, J, !0), U++
      else {
        const Se = U,
          ke = U,
          Fe = new Map()
        for (U = ke; U <= ve; U++) {
          const _t = (C[U] = ee ? Tn(C[U]) : Zt(C[U]))
          _t.key != null && Fe.set(_t.key, U)
        }
        let Ye,
          rt = 0
        const It = ve - ke + 1
        let vn = !1,
          Pr = 0
        const mn = new Array(It)
        for (U = 0; U < It; U++) mn[U] = 0
        for (U = Se; U <= be; U++) {
          const _t = S[U]
          if (rt >= It) {
            et(_t, F, J, !0)
            continue
          }
          let Ot
          if (_t.key != null) Ot = Fe.get(_t.key)
          else
            for (Ye = ke; Ye <= ve; Ye++)
              if (mn[Ye - ke] === 0 && Or(_t, C[Ye])) {
                Ot = Ye
                break
              }
          Ot === void 0
            ? et(_t, F, J, !0)
            : ((mn[Ot - ke] = U + 1),
              Ot >= Pr ? (Pr = Ot) : (vn = !0),
              v(_t, C[Ot], B, null, F, J, re, Z, ee),
              rt++)
        }
        const Jr = vn ? Cg(mn) : pr
        for (Ye = Jr.length - 1, U = It - 1; U >= 0; U--) {
          const _t = ke + U,
            Ot = C[_t],
            kr = _t + 1 < le ? C[_t + 1].el : H
          mn[U] === 0
            ? v(null, Ot, B, kr, F, J, re, Z, ee)
            : vn && (Ye < 0 || U !== Jr[Ye] ? Qe(Ot, B, kr, 2) : Ye--)
        }
      }
    },
    Qe = (S, C, B, H, F = null) => {
      const { el: J, type: re, transition: Z, children: ee, shapeFlag: U } = S
      if (U & 6) {
        Qe(S.component.subTree, C, B, H)
        return
      }
      if (U & 128) {
        S.suspense.move(C, B, H)
        return
      }
      if (U & 64) {
        re.move(S, C, B, fe)
        return
      }
      if (re === Ze) {
        r(J, C, B)
        for (let be = 0; be < ee.length; be++) Qe(ee[be], C, B, H)
        r(S.anchor, C, B)
        return
      }
      if (re === xs) {
        y(S, C, B)
        return
      }
      if (H !== 2 && U & 1 && Z)
        if (H === 0) Z.beforeEnter(J), r(J, C, B), kt(() => Z.enter(J), F)
        else {
          const { leave: be, delayLeave: ve, afterLeave: Se } = Z,
            ke = () => r(J, C, B),
            Fe = () => {
              be(J, () => {
                ke(), Se && Se()
              })
            }
          ve ? ve(J, ke, Fe) : Fe()
        }
      else r(J, C, B)
    },
    et = (S, C, B, H = !1, F = !1) => {
      const {
        type: J,
        props: re,
        ref: Z,
        children: ee,
        dynamicChildren: U,
        shapeFlag: le,
        patchFlag: be,
        dirs: ve,
      } = S
      if ((Z != null && ai(Z, null, B, S, !0), le & 256)) {
        C.ctx.deactivate(S)
        return
      }
      const Se = le & 1 && ve,
        ke = !Rr(S)
      let Fe
      if ((ke && (Fe = re && re.onVnodeBeforeUnmount) && Xt(Fe, C, S), le & 6))
        Tt(S.component, B, H)
      else {
        if (le & 128) {
          S.suspense.unmount(B, H)
          return
        }
        Se && jn(S, null, C, "beforeUnmount"),
          le & 64
            ? S.type.remove(S, C, B, F, fe, H)
            : U && (J !== Ze || (be > 0 && be & 64))
              ? st(U, C, B, !1, !0)
              : ((J === Ze && be & 384) || (!F && le & 16)) && st(ee, C, B),
          H && Kt(S)
      }
      ;((ke && (Fe = re && re.onVnodeUnmounted)) || Se) &&
        kt(() => {
          Fe && Xt(Fe, C, S), Se && jn(S, null, C, "unmounted")
        }, B)
    },
    Kt = (S) => {
      const { type: C, el: B, anchor: H, transition: F } = S
      if (C === Ze) {
        Ft(B, H)
        return
      }
      if (C === xs) {
        $(S)
        return
      }
      const J = () => {
        s(B), F && !F.persisted && F.afterLeave && F.afterLeave()
      }
      if (S.shapeFlag & 1 && F && !F.persisted) {
        const { leave: re, delayLeave: Z } = F,
          ee = () => re(B, J)
        Z ? Z(S.el, J, ee) : ee()
      } else J()
    },
    Ft = (S, C) => {
      let B
      for (; S !== C; ) (B = g(S)), s(S), (S = B)
      s(C)
    },
    Tt = (S, C, B) => {
      const { bum: H, scope: F, update: J, subTree: re, um: Z } = S
      H && ys(H),
        F.stop(),
        J && ((J.active = !1), et(re, S, C, B)),
        Z && kt(Z, C),
        kt(() => {
          S.isUnmounted = !0
        }, C),
        C &&
          C.pendingBranch &&
          !C.isUnmounted &&
          S.asyncDep &&
          !S.asyncResolved &&
          S.suspenseId === C.pendingId &&
          (C.deps--, C.deps === 0 && C.resolve())
    },
    st = (S, C, B, H = !1, F = !1, J = 0) => {
      for (let re = J; re < S.length; re++) et(S[re], C, B, H, F)
    },
    z = (S) =>
      S.shapeFlag & 6
        ? z(S.component.subTree)
        : S.shapeFlag & 128
          ? S.suspense.next()
          : g(S.anchor || S.el)
  let ae = !1
  const te = (S, C, B) => {
      S == null
        ? C._vnode && et(C._vnode, null, null, !0)
        : v(C._vnode || null, S, C, null, null, null, B),
        ae || ((ae = !0), bo(), Uu(), (ae = !1)),
        (C._vnode = S)
    },
    fe = {
      p: v,
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
  let ze, Ke
  return (
    t && ([ze, Ke] = t(fe)), { render: te, hydrate: ze, createApp: vg(te, ze) }
  )
}
function Aa({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function Dn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function _g(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function cc(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (Ee(r) && Ee(s))
    for (let a = 0; a < r.length; a++) {
      const i = r[a]
      let l = s[a]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[a] = Tn(s[a])), (l.el = i.el)),
        n || cc(i, l)),
        l.type === Ys && (l.el = i.el)
    }
}
function Cg(e) {
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
function dc(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : dc(t)
}
const Tg = (e) => e.__isTeleport,
  Ze = Symbol.for("v-fgt"),
  Ys = Symbol.for("v-txt"),
  Nn = Symbol.for("v-cmt"),
  xs = Symbol.for("v-stc"),
  Fr = []
let qt = null
function ce(e = !1) {
  Fr.push((qt = e ? null : []))
}
function Pg() {
  Fr.pop(), (qt = Fr[Fr.length - 1] || null)
}
let Wr = 1
function Mo(e) {
  Wr += e
}
function fc(e) {
  return (
    (e.dynamicChildren = Wr > 0 ? qt || pr : null),
    Pg(),
    Wr > 0 && qt && qt.push(e),
    e
  )
}
function Pe(e, t, n, r, s, a) {
  return fc(x(e, t, n, r, s, a, !0))
}
function tt(e, t, n, r, s) {
  return fc(he(e, t, n, r, s, !0))
}
function $s(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Or(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ks = "__vInternal",
  pc = ({ key: e }) => e ?? null,
  Ss = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ut(e) || Et(e) || Ce(e)
        ? { i: vt, r: e, k: t, f: !!n }
        : e
      : null
  )
function x(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  a = e === Ze ? 0 : 1,
  i = !1,
  l = !1,
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pc(t),
    ref: t && Ss(t),
    scopeId: qs,
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
    ctx: vt,
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
const he = kg
function kg(e, t = null, n = null, r = 0, s = null, a = !1) {
  if (((!e || e === Xu) && (e = Nn), $s(e))) {
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
  if ((Fg(e) && (e = e.__vccOpts), t)) {
    t = Mg(t)
    let { class: l, style: o } = t
    l && !ut(l) && (t.class = N(l)),
      nt(o) && (Fu(o) && !Ee(o) && (o = wt({}, o)), (t.style = Ds(o)))
  }
  const i = ut(e) ? 1 : X0(e) ? 128 : Tg(e) ? 64 : nt(e) ? 4 : Ce(e) ? 2 : 0
  return x(e, t, n, r, s, i, a, !0)
}
function Mg(e) {
  return e ? (Fu(e) || Ks in e ? wt({}, e) : e) : null
}
function Un(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: a, children: i } = e,
    l = t ? $g(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && pc(l),
    ref:
      t && t.ref
        ? n && s
          ? Ee(s)
            ? s.concat(Ss(t))
            : [s, Ss(t)]
          : Ss(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ze ? (a === -1 ? 16 : a | 16) : a,
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
function Ie(e = " ", t = 0) {
  return he(Ys, null, e, t)
}
function hc(e, t) {
  const n = he(xs, null, e)
  return (n.staticCount = t), n
}
function lt(e = "", t = !1) {
  return t ? (ce(), tt(Nn, null, e)) : he(Nn, null, e)
}
function Zt(e) {
  return e == null || typeof e == "boolean"
    ? he(Nn)
    : Ee(e)
      ? he(Ze, null, e.slice())
      : typeof e == "object"
        ? Tn(e)
        : he(Ys, null, String(e))
}
function Tn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Un(e)
}
function Di(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (Ee(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), Di(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Ks in t)
        ? (t._ctx = vt)
        : s === 3 &&
          vt &&
          (vt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Ce(t)
      ? ((t = { default: t, _ctx: vt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ie(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function $g(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = N([t.class, r.class]))
      else if (s === "style") t.style = Ds([t.style, r.style])
      else if (Rs(s)) {
        const a = t[s],
          i = r[s]
        i &&
          a !== i &&
          !(Ee(a) && a.includes(i)) &&
          (t[s] = a ? [].concat(a, i) : i)
      } else s !== "" && (t[s] = r[s])
  }
  return t
}
function Xt(e, t, n, r = null) {
  Ut(e, t, 7, [n, r])
}
const Ig = sc()
let Og = 0
function Ag(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Ig,
    a = {
      uid: Og++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new c0(!0),
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
      propsOptions: ic(r, s),
      emitsOptions: Ku(r, s),
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
    (a.emit = D0.bind(null, a)),
    e.ce && e.ce(a),
    a
  )
}
let St = null,
  Is,
  ii
{
  const e = Su(),
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
  ;(Is = t("__VUE_INSTANCE_SETTERS__", (n) => (St = n))),
    (ii = t("__VUE_SSR_SETTERS__", (n) => (Xs = n)))
}
const Xr = (e) => {
    const t = St
    return (
      Is(e),
      e.scope.on(),
      () => {
        e.scope.off(), Is(t)
      }
    )
  },
  $o = () => {
    St && St.scope.off(), Is(null)
  }
function gc(e) {
  return e.vnode.shapeFlag & 4
}
let Xs = !1
function Lg(e, t = !1) {
  t && ii(t)
  const { props: n, children: r } = e.vnode,
    s = gc(e)
  mg(e, n, s, t), wg(e, r)
  const a = s ? Ng(e, t) : void 0
  return t && ii(!1), a
}
function Ng(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = ju(new Proxy(e.ctx, ug)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Rg(e) : null),
      a = Xr(e)
    Kn()
    const i = On(r, e, 0, [e.props, s])
    if ((Xn(), a(), yu(i))) {
      if ((i.then($o, $o), t))
        return i
          .then((l) => {
            Io(e, l, t)
          })
          .catch((l) => {
            Gs(l, e, 0)
          })
      e.asyncDep = i
    } else Io(e, i, t)
  } else vc(e, t)
}
function Io(e, t, n) {
  Ce(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : nt(t) && (e.setupState = Vu(t)),
    vc(e, n)
}
let Oo
function vc(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Oo && !r.render) {
      const s = r.template || Fi(e).template
      if (s) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: o } = r,
          f = wt(wt({ isCustomElement: a, delimiters: l }, i), o)
        r.render = Oo(s, f)
      }
    }
    e.render = r.render || jt
  }
  {
    const s = Xr(e)
    Kn()
    try {
      cg(e)
    } finally {
      Xn(), s()
    }
  }
}
function Bg(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return $t(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function Rg(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Bg(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Zs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Vu(ju(e.exposed)), {
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
function zg(e, t = !0) {
  return Ce(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Fg(e) {
  return Ce(e) && "__vccOpts" in e
}
const me = (e, t) => O0(e, t, Xs)
function qe(e, t, n) {
  const r = arguments.length
  return r === 2
    ? nt(t) && !Ee(t)
      ? $s(t)
        ? he(e, null, [t])
        : he(e, t)
      : he(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && $s(n) && (n = [n]),
      he(e, t, n))
}
const jg = "3.4.15"
const Dg = "http://www.w3.org/2000/svg",
  Hg = "http://www.w3.org/1998/Math/MathML",
  Pn = typeof document < "u" ? document : null,
  Ao = Pn && Pn.createElement("template"),
  Gg = {
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
          ? Pn.createElementNS(Dg, e)
          : t === "mathml"
            ? Pn.createElementNS(Hg, e)
            : Pn.createElement(e, n ? { is: n } : void 0)
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      )
    },
    createText: (e) => Pn.createTextNode(e),
    createComment: (e) => Pn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Pn.querySelector(e),
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
        Ao.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const l = Ao.content
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
  Vg = Symbol("_vtc")
function Wg(e, t, n) {
  const r = e[Vg]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const qg = Symbol("_vod"),
  Ug = Symbol("")
function Yg(e, t, n) {
  const r = e.style,
    s = r.display,
    a = ut(n)
  if (n && !a) {
    if (t && !ut(t)) for (const i in t) n[i] == null && li(r, i, "")
    for (const i in n) li(r, i, n[i])
  } else if (a) {
    if (t !== n) {
      const i = r[Ug]
      i && (n += ";" + i), (r.cssText = n)
    }
  } else t && e.removeAttribute("style")
  qg in e && (r.display = s)
}
const Lo = /\s*!important$/
function li(e, t, n) {
  if (Ee(n)) n.forEach((r) => li(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = Kg(e, t)
    Lo.test(n)
      ? e.setProperty(_r(r), n.replace(Lo, ""), "important")
      : (e[r] = n)
  }
}
const No = ["Webkit", "Moz", "ms"],
  La = {}
function Kg(e, t) {
  const n = La[t]
  if (n) return n
  let r = tn(t)
  if (r !== "filter" && r in e) return (La[t] = r)
  r = js(r)
  for (let s = 0; s < No.length; s++) {
    const a = No[s] + r
    if (a in e) return (La[t] = a)
  }
  return t
}
const Bo = "http://www.w3.org/1999/xlink"
function Xg(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Bo, t.slice(6, t.length))
      : e.setAttributeNS(Bo, t, n)
  else {
    const a = u0(t)
    n == null || (a && !Eu(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function Zg(e, t, n, r, s, a, i) {
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
      ? (n = Eu(n))
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
function Jg(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Ro = Symbol("_vei")
function Qg(e, t, n, r, s = null) {
  const a = e[Ro] || (e[Ro] = {}),
    i = a[t]
  if (r && i) i.value = r
  else {
    const [l, o] = ev(t)
    if (r) {
      const f = (a[t] = rv(r, s))
      cr(e, l, f, o)
    } else i && (Jg(e, l, i, o), (a[t] = void 0))
  }
}
const zo = /(?:Once|Passive|Capture)$/
function ev(e) {
  let t
  if (zo.test(e)) {
    t = {}
    let r
    for (; (r = e.match(zo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : _r(e.slice(2)), t]
}
let Na = 0
const tv = Promise.resolve(),
  nv = () => Na || (tv.then(() => (Na = 0)), (Na = Date.now()))
function rv(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    Ut(sv(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = nv()), n
}
function sv(e, t) {
  if (Ee(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const Fo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  av = (e, t, n, r, s, a, i, l, o) => {
    const f = s === "svg"
    t === "class"
      ? Wg(e, r, f)
      : t === "style"
        ? Yg(e, n, r)
        : Rs(t)
          ? yi(t) || Qg(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : iv(e, t, r, f)
              )
            ? Zg(e, t, r, a, i, l, o)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              Xg(e, t, r, f))
  }
function iv(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Fo(t) && Ce(n))
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
  return Fo(t) && ut(n) ? !1 : t in e
}
const jo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return Ee(t) ? (n) => ys(t, n) : t
}
function lv(e) {
  e.target.composing = !0
}
function Do(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const Ba = Symbol("_assign"),
  ov = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[Ba] = jo(s)
      const a = r || (s.props && s.props.type === "number")
      cr(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let l = e.value
        n && (l = l.trim()), a && (l = Ka(l)), e[Ba](l)
      }),
        n &&
          cr(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (cr(e, "compositionstart", lv),
          cr(e, "compositionend", Do),
          cr(e, "change", Do))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      a,
    ) {
      if (((e[Ba] = jo(a)), e.composing)) return
      const i = s || e.type === "number" ? Ka(e.value) : e.value,
        l = t ?? ""
      i !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === l))) ||
          (e.value = l))
    },
  },
  uv = wt({ patchProp: av }, Gg)
let Ho
function cv() {
  return Ho || (Ho = Sg(uv))
}
const dv = (...e) => {
  const t = cv().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = pv(r)
      if (!s) return
      const a = t._component
      !Ce(a) && !a.render && !a.template && (a.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, fv(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function fv(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function pv(e) {
  return ut(e) ? document.querySelector(e) : e
}
const Zn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  hv = {}
function gv(e, t) {
  const n = U0("router-view")
  return ce(), tt(n)
}
const vv = Zn(hv, [["render", gv]])
let mv = 0
function bv() {
  return ++mv
}
function qn() {
  return bv()
}
function de(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function Bt(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Bt), r)
}
var yv = Object.defineProperty,
  wv = (e, t, n) =>
    t in e
      ? yv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Go = (e, t, n) => (wv(e, typeof t != "symbol" ? t + "" : t, n), n)
let xv = class {
    constructor() {
      Go(this, "current", this.detect()), Go(this, "currentId", 0)
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
  Js = new xv()
function Cr(e) {
  if (Js.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = de(e)
    if (t) return t.ownerDocument
  }
  return document
}
let oi = [
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
  Mn = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Mn || {}),
  Sv = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Sv || {})
function Qs(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(oi)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var Hi = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Hi || {})
function mc(e, t = 0) {
  var n
  return e === ((n = Cr(e)) == null ? void 0 : n.body)
    ? !1
    : Bt(t, {
        0() {
          return e.matches(oi)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(oi)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var Ev = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Ev || {})
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
let _v = ["textarea", "input"].join(",")
function Cv(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, _v)) !=
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
    l = Array.isArray(e) ? (n ? dr(e) : e) : Qs(e)
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
    g = l.length,
    m
  do {
    if (p >= g || p + g <= 0) return 0
    let k = f + p
    if (t & 16) k = (k + g) % g
    else {
      if (k < 0) return 3
      if (k >= g) return 1
    }
    ;(m = l[k]), m == null || m.focus(c), (p += o)
  } while (m !== i.activeElement)
  return t & 6 && Cv(m) && m.select(), 2
}
function Tv() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Pv() {
  return /Android/gi.test(window.navigator.userAgent)
}
function kv() {
  return Tv() || Pv()
}
function hs(e, t, n) {
  Js.isServer ||
    cn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function bc(e, t, n) {
  Js.isServer ||
    cn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Mv(e, t, n = me(() => !0)) {
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
    return !mc(l, Hi.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l)
  }
  let s = pe(null)
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
        kv() || (s.value && (r(a, () => s.value), (s.value = null)))
      },
      !0,
    ),
    hs(
      "touchend",
      (a) => r(a, () => (a.target instanceof HTMLElement ? a.target : null)),
      !0,
    ),
    bc(
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
function Vo(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function yc(e, t) {
  let n = pe(Vo(e.value.type, e.value.as))
  return (
    dt(() => {
      n.value = Vo(e.value.type, e.value.as)
    }),
    cn(() => {
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
  $v = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))($v || {})
function fn({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...s
}) {
  var a
  let i = xc(r, n),
    l = Object.assign(s, { props: i })
  if (e || (t & 2 && i.static)) return Ra(l)
  if (t & 1) {
    let o = (a = i.unmount) == null || a ? 0 : 1
    return Bt(o, {
      0() {
        return null
      },
      1() {
        return Ra({
          ...s,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Ra(l)
}
function Ra({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var a, i
  let { as: l, ...o } = Sc(e, ["unmount", "static"]),
    f = (a = n.default) == null ? void 0 : a.call(n, r),
    c = {}
  if (r) {
    let p = !1,
      g = []
    for (let [m, k] of Object.entries(r))
      typeof k == "boolean" && (p = !0), k === !0 && g.push(m)
    p && (c["data-headlessui-state"] = g.join(" "))
  }
  if (l === "template") {
    if (
      ((f = wc(f ?? [])),
      Object.keys(o).length > 0 || Object.keys(t).length > 0)
    ) {
      let [p, ...g] = f ?? []
      if (!Iv(p) || g.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${s} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(o)
              .concat(Object.keys(t))
              .map((v) => v.trim())
              .filter((v, E, T) => T.indexOf(v) === E)
              .sort((v, E) => v.localeCompare(E))
              .map((v) => `  - ${v}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((v) => `  - ${v}`).join(`
`),
          ].join(`
`),
        )
      let m = xc((i = p.props) != null ? i : {}, o, c),
        k = Un(p, m, !0)
      for (let v in m)
        v.startsWith("on") && (k.props || (k.props = {}), (k.props[v] = m[v]))
      return k
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f
  }
  return qe(l, Object.assign({}, o, c), { default: () => f })
}
function wc(e) {
  return e.flatMap((t) => (t.type === Ze ? wc(t.children) : [t]))
}
function xc(...e) {
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
function Sc(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function Iv(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var yr = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(yr || {})
let wr = Rt({
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
        return fn({
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
  Ec = Symbol("Context")
var Ur = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ur || {})
function Ov() {
  return yt(Ec, null)
}
function Av(e) {
  Dt(Ec, e)
}
var gt = ((e) => (
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
))(gt || {})
function Lv(e) {
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
function Nv(e, t, n, r) {
  Js.isServer ||
    cn((s) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, r),
        s(() => e.removeEventListener(t, n, r))
    })
}
var ln = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(ln || {})
function _c() {
  let e = pe(0)
  return (
    bc("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Bv({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = pe(null),
    s = Cr(r)
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
      return n != null ? null : qe(wr, { features: yr.Hidden, ref: r })
    },
  }
}
let Wo = Symbol("PortalParentContext")
function Rv() {
  let e = yt(Wo, null),
    t = pe([])
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
    Rt({
      name: "PortalWrapper",
      setup(a, { slots: i }) {
        return (
          Dt(Wo, s),
          () => {
            var l
            return (l = i.default) == null ? void 0 : l.call(i)
          }
        )
      },
    }),
  ]
}
var zv = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(zv || {})
let Cc = Symbol("PopoverContext")
function Gi(e) {
  let t = yt(Cc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${ui.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Gi), n)
  }
  return t
}
let Fv = Symbol("PopoverGroupContext")
function Tc() {
  return yt(Fv, null)
}
let Pc = Symbol("PopoverPanelContext")
function jv() {
  return yt(Pc, null)
}
let ui = Rt({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let a = pe(null)
      r({ el: a, $el: a })
      let i = pe(1),
        l = pe(null),
        o = pe(null),
        f = pe(null),
        c = pe(null),
        p = me(() => Cr(a)),
        g = me(() => {
          var L, I
          if (!de(l) || !de(c)) return !1
          for (let X of document.querySelectorAll("body > *"))
            if (
              Number(X == null ? void 0 : X.contains(de(l))) ^
              Number(X == null ? void 0 : X.contains(de(c)))
            )
              return !0
          let ne = Qs(),
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
          buttonId: pe(null),
          panelId: pe(null),
          panel: c,
          button: l,
          isPortalled: g,
          beforePanelSentinel: o,
          afterPanelSentinel: f,
          togglePopover() {
            i.value = Bt(i.value, { 0: 1, 1: 0 })
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
      Dt(Cc, m), Av(me(() => Bt(i.value, { 0: Ur.Open, 1: Ur.Closed })))
      let k = {
          buttonId: m.buttonId,
          panelId: m.panelId,
          close() {
            m.closePopover()
          },
        },
        v = Tc(),
        E = v == null ? void 0 : v.registerPopover,
        [T, w] = Rv(),
        y = Bv({
          mainTreeNodeRef: v == null ? void 0 : v.mainTreeNodeRef,
          portals: T,
          defaultContainers: [l, c],
        })
      function $() {
        var L, I, ne, q
        return (q = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null
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
        cn(() => (E == null ? void 0 : E(k))),
        Nv(
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
        Mv(
          y.resolveContainers,
          (L, I) => {
            var ne
            m.closePopover(),
              mc(I, Hi.Loose) ||
                (L.preventDefault(), (ne = de(l)) == null || ne.focus())
          },
          me(() => i.value === 0),
        ),
        () => {
          let L = { open: i.value === 0, close: m.close }
          return qe(Ze, [
            qe(w, {}, () =>
              fn({
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
  qo = Rt({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${qn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Gi("PopoverButton"),
        a = me(() => Cr(s.button))
      r({ el: s.button, $el: s.button }),
        dt(() => {
          s.buttonId.value = e.id
        }),
        Bn(() => {
          s.buttonId.value = null
        })
      let i = Tc(),
        l = i == null ? void 0 : i.closeOthers,
        o = jv(),
        f = me(() => (o === null ? !1 : o.value === s.panelId.value)),
        c = pe(null),
        p = `headlessui-focus-sentinel-${qn()}`
      f.value ||
        cn(() => {
          s.button.value = de(c)
        })
      let g = yc(
        me(() => ({ as: e.as, type: t.type })),
        c,
      )
      function m(y) {
        var $, L, I, ne, q
        if (f.value) {
          if (s.popoverState.value === 1) return
          switch (y.key) {
            case gt.Space:
            case gt.Enter:
              y.preventDefault(),
                (L = ($ = y.target).click) == null || L.call($),
                s.closePopover(),
                (I = de(s.button)) == null || I.focus()
              break
          }
        } else
          switch (y.key) {
            case gt.Space:
            case gt.Enter:
              y.preventDefault(),
                y.stopPropagation(),
                s.popoverState.value === 1 &&
                  (l == null || l(s.buttonId.value)),
                s.togglePopover()
              break
            case gt.Escape:
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
        f.value || (y.key === gt.Space && y.preventDefault())
      }
      function v(y) {
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
      let T = _c()
      function w() {
        let y = de(s.panel)
        if (!y) return
        function $() {
          Bt(T.value, {
            [ln.Forwards]: () => Nt(y, ct.First),
            [ln.Backwards]: () => Nt(y, ct.Last),
          }) === Mn.Error &&
            Nt(
              Qs().filter((L) => L.dataset.headlessuiFocusGuard !== "true"),
              Bt(T.value, {
                [ln.Forwards]: ct.Next,
                [ln.Backwards]: ct.Previous,
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
            ? { ref: c, type: g.value, onKeydown: m, onClick: v }
            : {
                ref: c,
                id: L,
                type: g.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": de(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: m,
                onKeyup: k,
                onClick: v,
                onMousedown: E,
              }
        return qe(Ze, [
          fn({
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
            qe(wr, {
              id: p,
              features: yr.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: w,
            }),
        ])
      }
    },
  }),
  Uo = Rt({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${qn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let { focus: s } = e,
        a = Gi("PopoverPanel"),
        i = me(() => Cr(a.panel)),
        l = `headlessui-focus-sentinel-before-${qn()}`,
        o = `headlessui-focus-sentinel-after-${qn()}`
      r({ el: a.panel, $el: a.panel }),
        dt(() => {
          a.panelId.value = e.id
        }),
        Bn(() => {
          a.panelId.value = null
        }),
        Dt(Pc, a.panelId),
        cn(() => {
          var E, T
          if (!s || a.popoverState.value !== 0 || !a.panel) return
          let w = (E = i.value) == null ? void 0 : E.activeElement
          ;((T = de(a.panel)) != null && T.contains(w)) ||
            Nt(de(a.panel), ct.First)
        })
      let f = Ov(),
        c = me(() =>
          f !== null
            ? (f.value & Ur.Open) === Ur.Open
            : a.popoverState.value === 0,
        )
      function p(E) {
        var T, w
        switch (E.key) {
          case gt.Escape:
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
      function g(E) {
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
      let m = _c()
      function k() {
        let E = de(a.panel)
        if (!E) return
        function T() {
          Bt(m.value, {
            [ln.Forwards]: () => {
              var w
              Nt(E, ct.First) === Mn.Error &&
                ((w = de(a.afterPanelSentinel)) == null || w.focus())
            },
            [ln.Backwards]: () => {
              var w
              ;(w = de(a.button)) == null || w.focus({ preventScroll: !0 })
            },
          })
        }
        T()
      }
      function v() {
        let E = de(a.panel)
        if (!E) return
        function T() {
          Bt(m.value, {
            [ln.Forwards]: () => {
              let w = de(a.button),
                y = de(a.panel)
              if (!w) return
              let $ = Qs(),
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
            [ln.Backwards]: () => {
              var w
              Nt(E, ct.Previous) === Mn.Error &&
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
            onFocusout: s && a.popoverState.value === 0 ? g : void 0,
            tabIndex: -1,
          }
        return fn({
          ourProps: $,
          theirProps: { ...t, ...y },
          attrs: t,
          slot: E,
          slots: {
            ...n,
            default: (...L) => {
              var I
              return [
                qe(Ze, [
                  c.value &&
                    a.isPortalled.value &&
                    qe(wr, {
                      id: l,
                      ref: a.beforePanelSentinel,
                      features: yr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: k,
                    }),
                  (I = n.default) == null ? void 0 : I.call(n, ...L),
                  c.value &&
                    a.isPortalled.value &&
                    qe(wr, {
                      id: o,
                      ref: a.afterPanelSentinel,
                      features: yr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: v,
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
  Dv = Rt({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = pe(!0)
      return () =>
        t.value
          ? qe(wr, {
              as: "button",
              type: "button",
              features: yr.Focusable,
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
var Hv = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(Hv || {}),
  Gv = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(Gv || {})
let kc = Symbol("TabsContext")
function Zr(e) {
  let t = yt(kc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Zr), n)
  }
  return t
}
let Vi = Symbol("TabsSSRContext"),
  Vv = Rt({
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
      let a = pe((s = e.selectedIndex) != null ? s : e.defaultIndex),
        i = pe([]),
        l = pe([]),
        o = me(() => e.selectedIndex !== null),
        f = me(() => (o.value ? e.selectedIndex : a.value))
      function c(v) {
        var E
        let T = dr(p.tabs.value, de),
          w = dr(p.panels.value, de),
          y = T.filter(($) => {
            var L
            return !((L = de($)) != null && L.hasAttribute("disabled"))
          })
        if (v < 0 || v > T.length - 1) {
          let $ = Bt(a.value === null ? 0 : Math.sign(v - a.value), {
              [-1]: () => 1,
              0: () =>
                Bt(Math.sign(v), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            L = Bt($, {
              0: () => T.indexOf(y[0]),
              1: () => T.indexOf(y[y.length - 1]),
            })
          L !== -1 && (a.value = L), (p.tabs.value = T), (p.panels.value = w)
        } else {
          let $ = T.slice(0, v),
            L = [...T.slice(v), ...$].find((ne) => y.includes(ne))
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
          var v, E
          return (E = (v = a.value) != null ? v : e.defaultIndex) != null
            ? E
            : null
        }),
        orientation: me(() => (e.vertical ? "vertical" : "horizontal")),
        activation: me(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: l,
        setSelectedIndex(v) {
          f.value !== v && r("change", v), o.value || c(v)
        },
        registerTab(v) {
          var E
          if (i.value.includes(v)) return
          let T = i.value[a.value]
          i.value.push(v), (i.value = dr(i.value, de))
          let w = (E = i.value.indexOf(T)) != null ? E : a.value
          w !== -1 && (a.value = w)
        },
        unregisterTab(v) {
          let E = i.value.indexOf(v)
          E !== -1 && i.value.splice(E, 1)
        },
        registerPanel(v) {
          l.value.includes(v) || (l.value.push(v), (l.value = dr(l.value, de)))
        },
        unregisterPanel(v) {
          let E = l.value.indexOf(v)
          E !== -1 && l.value.splice(E, 1)
        },
      }
      Dt(kc, p)
      let g = pe({ tabs: [], panels: [] }),
        m = pe(!1)
      dt(() => {
        m.value = !0
      }),
        Dt(
          Vi,
          me(() => (m.value ? null : g.value)),
        )
      let k = me(() => e.selectedIndex)
      return (
        dt(() => {
          en(
            [k],
            () => {
              var v
              return c((v = e.selectedIndex) != null ? v : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        cn(() => {
          if (!o.value || f.value == null || p.tabs.value.length <= 0) return
          let v = dr(p.tabs.value, de)
          v.some((E, T) => de(p.tabs.value[T]) !== de(E)) &&
            p.setSelectedIndex(
              v.findIndex((E) => de(E) === de(p.tabs.value[f.value])),
            )
        }),
        () => {
          let v = { selectedIndex: a.value }
          return qe(Ze, [
            i.value.length <= 0 &&
              qe(Dv, {
                onFocus: () => {
                  for (let E of i.value) {
                    let T = de(E)
                    if ((T == null ? void 0 : T.tabIndex) === 0)
                      return T.focus(), !0
                  }
                  return !1
                },
              }),
            fn({
              theirProps: {
                ...n,
                ...Sc(e, [
                  "selectedIndex",
                  "defaultIndex",
                  "manual",
                  "vertical",
                  "onChange",
                ]),
              },
              ourProps: {},
              slot: v,
              slots: t,
              attrs: n,
              name: "TabGroup",
            }),
          ])
        }
      )
    },
  }),
  Wv = Rt({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = Zr("TabList")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value },
          a = { role: "tablist", "aria-orientation": r.orientation.value }
        return fn({
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
  qv = Rt({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-tabs-tab-${qn()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Zr("Tab"),
        a = pe(null)
      r({ el: a, $el: a }),
        dt(() => s.registerTab(a)),
        Bn(() => s.unregisterTab(a))
      let i = yt(Vi),
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
        if (w === Mn.Success && s.activation.value === "auto") {
          let y = (T = Cr(a)) == null ? void 0 : T.activeElement,
            $ = s.tabs.value.findIndex((L) => de(L) === y)
          $ !== -1 && s.setSelectedIndex($)
        }
        return w
      }
      function p(E) {
        let T = s.tabs.value.map((w) => de(w)).filter(Boolean)
        if (E.key === gt.Space || E.key === gt.Enter) {
          E.preventDefault(), E.stopPropagation(), s.setSelectedIndex(o.value)
          return
        }
        switch (E.key) {
          case gt.Home:
          case gt.PageUp:
            return (
              E.preventDefault(), E.stopPropagation(), c(() => Nt(T, ct.First))
            )
          case gt.End:
          case gt.PageDown:
            return (
              E.preventDefault(), E.stopPropagation(), c(() => Nt(T, ct.Last))
            )
        }
        if (
          c(() =>
            Bt(s.orientation.value, {
              vertical() {
                return E.key === gt.ArrowUp
                  ? Nt(T, ct.Previous | ct.WrapAround)
                  : E.key === gt.ArrowDown
                    ? Nt(T, ct.Next | ct.WrapAround)
                    : Mn.Error
              },
              horizontal() {
                return E.key === gt.ArrowLeft
                  ? Nt(T, ct.Previous | ct.WrapAround)
                  : E.key === gt.ArrowRight
                    ? Nt(T, ct.Next | ct.WrapAround)
                    : Mn.Error
              },
            }),
          ) === Mn.Success
        )
          return E.preventDefault()
      }
      let g = pe(!1)
      function m() {
        var E
        g.value ||
          ((g.value = !0),
          !e.disabled &&
            ((E = de(a)) == null || E.focus({ preventScroll: !0 }),
            s.setSelectedIndex(o.value),
            Lv(() => {
              g.value = !1
            })))
      }
      function k(E) {
        E.preventDefault()
      }
      let v = yc(
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
            type: v.value,
            "aria-controls":
              (E = de(s.panels.value[o.value])) == null ? void 0 : E.id,
            "aria-selected": f.value,
            tabIndex: f.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return fn({
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
  Uv = Rt({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = Zr("TabPanels")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value }
        return fn({
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
  ur = Rt({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${qn()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Zr("TabPanel"),
        a = pe(null)
      r({ el: a, $el: a }),
        dt(() => s.registerPanel(a)),
        Bn(() => s.unregisterPanel(a))
      let i = yt(Vi),
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
          { id: g, tabIndex: m, ...k } = e,
          v = {
            ref: a,
            id: g,
            role: "tabpanel",
            "aria-labelledby":
              (c = de(s.tabs.value[o.value])) == null ? void 0 : c.id,
            tabIndex: f.value ? m : -1,
          }
        return !f.value && e.unmount && !e.static
          ? qe(wr, { as: "span", "aria-hidden": !0, ...v })
          : fn({
              ourProps: v,
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
var gs = {
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
const Yv = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ft =
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
          class: ["lucide", `lucide-${Yv(e)}`],
          ...l,
        },
        [...t.map((c) => qe(...c)), ...(f.default ? [f.default()] : [])],
      )
const Yo = ft("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
const Kv = ft("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
const Xv = ft("CloudDrizzleIcon", [
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
const Zv = ft("CloudSunIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }],
])
const Mc = ft("EyeOffIcon", [
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
const Jv = ft("EyeIcon", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
])
const Qv = ft("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
])
const em = ft("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
const tm = ft("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
const nm = ft("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
const rm = ft("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
const sm = ft("PencilRulerIcon", [
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
const am = ft("RabbitIcon", [
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
const Es = ft("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
const im = ft("ShowerHeadIcon", [
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
const lm = ft("SunIcon", [
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
const za = ft("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
const om = ft("TurtleIcon", [
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
const ci = ft("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Wi = (e) => (Ii("data-v-eae959a7"), (e = e()), Oi(), e),
  um = { class: "flex justify-center p-5 gap-5 content-center" },
  cm = Wi(() => x("div", { class: "w-1/12" }, null, -1)),
  dm = { class: "flex justify-between gap-2 w-full content-center" },
  fm = { class: "flex gap-1 p-2" },
  pm = { class: "flex gap-5 p-2 relative" },
  hm = { href: "/portfolio" },
  gm = { href: "/" },
  vm = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  mm = Wi(() => x("b", null, "Art and Animation", -1)),
  bm = [mm],
  ym = { href: "/about-me" },
  wm = { class: "flex gap-5 content-center" },
  xm = { href: "/contact" },
  Sm = { class: "lg:hidden flex" },
  Em = { class: "flex gap-1 p-2" },
  _m = { class: "flex flex-col gap-2 p-2" },
  Cm = { class: "flex justify-between" },
  Tm = Wi(() => x("div", { class: "w-1/12" }, null, -1)),
  Pm = { class: "flex justify-between items-center" },
  km = { class: "flex gap-1 p-2" },
  Mm = hc(
    '<a href="/contact" data-v-eae959a7><li class="py-2 px-3 rounded" data-v-eae959a7>Contact</li></a><a href="/portfolio" data-v-eae959a7><li class="py-2 px-3 rounded" data-v-eae959a7>Web Portfolio</li></a><a href="/" data-v-eae959a7><li class="py-2 px-3 rounded" data-v-eae959a7>Web Services</li></a><li class="py-2 px-3 rounded opacity-75" data-v-eae959a7>Creative Projects</li><ul class="ml-5" data-v-eae959a7><li class="py-2 px-3 rounded" data-v-eae959a7>Art and Animation</li><li class="py-2 px-3 rounded" data-v-eae959a7>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-eae959a7>Custom Software</li><li class="py-2 px-3 rounded" data-v-eae959a7>Cooking and Recipes</li></ul><a href="/about-me" data-v-eae959a7><li class="py-2 px-3 rounded" data-v-eae959a7>About Me</li></a>',
    6,
  ),
  $m = [Mm],
  Im = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = pe(5),
        r = t,
        s = (l) => {
          ;(n.value = l.target.value), r("update:brightness", n.value)
          let o = "--swiper-navigation-color",
            f = "--swiper-pagination-color",
            c = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(o, c),
            document.documentElement.style.setProperty(f, c)
        }
      dt(() => {
        let l = window.localStorage
        if (l.getItem("brightness")) {
          n.value = Number(l.getItem("brightness"))
          let o = "--swiper-navigation-color",
            f = "--swiper-pagination-color",
            c = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(o, c),
            document.documentElement.style.setProperty(f, c)
        }
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
        ce(),
        Pe(
          Ze,
          null,
          [
            x("div", um, [
              cm,
              x(
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
                  x("div", dm, [
                    x("div", fm, [
                      he(
                        ye(za),
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
                      x(
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
                    x("div", pm, [
                      x("a", hm, [
                        x(
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
                      x("a", gm, [
                        x(
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
                      he(
                        ye(ui),
                        { class: "relative inline-block text-left" },
                        {
                          default: it(() => [
                            he(
                              ye(qo),
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
                                default: it(() => [
                                  Ie(" Creative Projects"),
                                  he(ye(Kv)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            he(
                              ye(Uo),
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
                                default: it(() => [
                                  x("div", vm, [
                                    x(
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
                                      bm,
                                      2,
                                    ),
                                    x(
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
                                    x(
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
                                    x(
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
                      x("a", ym, [
                        x(
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
                    x("div", wm, [
                      x("a", xm, [
                        x(
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
              x(
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
                  x("div", Sm, [
                    x("div", Em, [
                      he(
                        ye(za),
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
                      x(
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
                  he(
                    ye(tm),
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
                  he(ye(ui), null, {
                    default: it(() => [
                      he(
                        ye(qo),
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
                          default: it(() => [
                            n.value == 5
                              ? (ce(),
                                tt(ye(lm), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (ce(),
                                  tt(ye(Zv), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (ce(),
                                    tt(ye(Xv), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (ce(),
                                      tt(ye(rm), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (ce(),
                                      tt(ye(nm), {
                                        key: 4,
                                        class: "text-slate-400",
                                      })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      he(
                        ye(Uo),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: it(() => [
                            x("div", _m, [
                              x("div", Cm, [
                                Ju(
                                  x(
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
                                  [[ov, n.value]],
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
              Tm,
            ]),
            x(
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
                x("div", Pm, [
                  x("div", km, [
                    he(
                      ye(za),
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
                    x(
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
                  he(
                    ye(ci),
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
                x(
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
                  $m,
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
  Om = Zn(Im, [["__scopeId", "data-v-eae959a7"]]),
  Am = { class: "flex justify-center py-5 flex-col" },
  Lm = { class: "inline-block relative" },
  Nm = { class: "font-semibold text-center px-1" },
  Bm = { class: "flex py-5 justify-center gap-3 w-full" },
  Rm = { href: "/portfolio" },
  zm = { href: "/pricing" },
  Fm = {
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
  jm = Object.assign(Fm, {
    __name: "Hero",
    props: { brightness: Number },
    setup(e) {
      const t = pe([
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
      let n = pe(0),
        r = pe(!1)
      dt(() => {
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
          Bn(() => {
            window.removeEventListener("mousedown", a),
              window.removeEventListener("mouseup", i)
          })
      }),
        Bi(() => {
          r.value = !1
        })
      const s = me(() => t.value[n.value])
      return (a, i) => {
        const l = K0("typewriter")
        return (
          ce(),
          Pe("div", Am, [
            x(
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
                Ie(" I make "),
                x("div", Lm, [
                  Ju((ce(), Pe("span", Nm, [Ie(Mt(s.value), 1)])), [
                    [l, s.value],
                  ]),
                  x(
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
                Ie(" websites. "),
              ],
              2,
            ),
            x(
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
            x("div", Bm, [
              x("a", Rm, [
                x(
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
              x("a", zm, [
                x(
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
var Dm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {}
function Hm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var $c = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(Dm, function () {
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
      g = f,
      m = function (u) {
        if (u.length < 2) return null
        var d = u.length - 1
        return g(u[d]) == "string" ? u[d].toLowerCase() : null
      },
      k = Math.PI,
      v = {
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
      T = v.last,
      w = v.clip_rgb,
      y = v.type,
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
          var R = $.format[P].apply(null, M ? d : d.slice(0, -1))
          b._rgb = w(R)
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
      G = v.unpack,
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
          R = (1 - P - _) * O,
          W = (1 - M - _) * O
        return [A, R, W, _]
      },
      ge = Q,
      X = v.unpack,
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
      _e = xe,
      j = q,
      ie = I,
      V = E,
      Ue = v.unpack,
      Te = v.type,
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
      (V.format.cmyk = _e),
      V.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Ue(u, "cmyk")), Te(u) === "array" && u.length === 4))
            return "cmyk"
        },
      })
    var et = v.unpack,
      Kt = v.last,
      Ft = function (u) {
        return Math.round(u * 100) / 100
      },
      Tt = function () {
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
      st = Tt,
      z = v.unpack,
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
          R
        return (
          _ === M
            ? ((A = 0), (R = Number.NaN))
            : (A = O < 0.5 ? (_ - M) / (_ + M) : (_ - M) / (2 - _ - M)),
          h == _
            ? (R = (b - P) / (_ - M))
            : b == _
              ? (R = 2 + (P - h) / (_ - M))
              : P == _ && (R = 4 + (h - b) / (_ - M)),
          (R *= 60),
          R < 0 && (R += 360),
          u.length > 3 && u[3] !== void 0 ? [R, A, O, u[3]] : [R, A, O]
        )
      },
      te = ae,
      fe = v.unpack,
      ze = v.last,
      Ke = st,
      S = te,
      C = Math.round,
      B = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = fe(u, "rgba"),
          b = ze(u) || "rgb"
        return b.substr(0, 3) == "hsl"
          ? Ke(S(h), b)
          : ((h[0] = C(h[0])),
            (h[1] = C(h[1])),
            (h[2] = C(h[2])),
            (b === "rgba" || (h.length > 3 && h[3] < 1)) &&
              ((h[3] = h.length > 3 ? h[3] : 1), (b = "rgba")),
            b + "(" + h.slice(0, b === "rgb" ? 3 : 4).join(",") + ")")
      },
      H = B,
      F = v.unpack,
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
          var R = [0, 0, 0],
            W = [0, 0, 0],
            se = M < 0.5 ? M * (1 + P) : M + P - M * P,
            Y = 2 * M - se,
            ue = b / 360
          ;(R[0] = ue + 1 / 3), (R[1] = ue), (R[2] = ue - 1 / 3)
          for (var oe = 0; oe < 3; oe++)
            R[oe] < 0 && (R[oe] += 1),
              R[oe] > 1 && (R[oe] -= 1),
              6 * R[oe] < 1
                ? (W[oe] = Y + (se - Y) * 6 * R[oe])
                : 2 * R[oe] < 1
                  ? (W[oe] = se)
                  : 3 * R[oe] < 2
                    ? (W[oe] = Y + (se - Y) * (2 / 3 - R[oe]) * 6)
                    : (W[oe] = Y)
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
      be =
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
        if ((d = u.match(be))) {
          for (var P = d.slice(1, 5), M = 0; M < 4; M++) P[M] = +P[M]
          return P
        }
        if ((d = u.match(ve))) {
          for (var _ = d.slice(1, 4), O = 0; O < 3; O++) _[O] = Ye(_[O] * 2.55)
          return (_[3] = 1), _
        }
        if ((d = u.match(Se))) {
          for (var A = d.slice(1, 5), R = 0; R < 3; R++) A[R] = Ye(A[R] * 2.55)
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
          var ue = ee(Y)
          return (ue[3] = +d[4]), ue
        }
      }
    rt.test = function (u) {
      return (
        le.test(u) ||
        be.test(u) ||
        ve.test(u) ||
        Se.test(u) ||
        ke.test(u) ||
        Fe.test(u)
      )
    }
    var It = rt,
      vn = q,
      Pr = I,
      mn = E,
      Jr = v.type,
      _t = H,
      Ot = It
    ;(Pr.prototype.css = function (u) {
      return _t(this._rgb, u)
    }),
      (vn.css = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Pr,
          [null].concat(u, ["css"]),
        ))()
      }),
      (mn.format.css = Ot),
      mn.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && Jr(u) === "string" && Ot.test(u)) return "css"
        },
      })
    var kr = I,
      nd = q,
      rd = E,
      sd = v.unpack
    ;(rd.format.gl = function () {
      for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
      var h = sd(u, "rgba")
      return (h[0] *= 255), (h[1] *= 255), (h[2] *= 255), h
    }),
      (nd.gl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          kr,
          [null].concat(u, ["gl"]),
        ))()
      }),
      (kr.prototype.gl = function () {
        var u = this._rgb
        return [u[0] / 255, u[1] / 255, u[2] / 255, u[3]]
      })
    var ad = v.unpack,
      id = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = ad(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = Math.min(b, P, M),
          O = Math.max(b, P, M),
          A = O - _,
          R = (A * 100) / 255,
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
          [se, R, W]
        )
      },
      ld = id,
      od = v.unpack,
      ud = Math.floor,
      cd = function () {
        for (var u, d, h, b, P, M, _ = [], O = arguments.length; O--; )
          _[O] = arguments[O]
        _ = od(_, "hcg")
        var A = _[0],
          R = _[1],
          W = _[2],
          se,
          Y,
          ue
        W = W * 255
        var oe = R * 255
        if (R === 0) se = Y = ue = W
        else {
          A === 360 && (A = 0),
            A > 360 && (A -= 360),
            A < 0 && (A += 360),
            (A /= 60)
          var Me = ud(A),
            Ae = A - Me,
            Ne = W * (1 - R),
            je = Ne + oe * (1 - Ae),
            mt = Ne + oe * Ae,
            ht = Ne + oe
          switch (Me) {
            case 0:
              ;(u = [ht, mt, Ne]), (se = u[0]), (Y = u[1]), (ue = u[2])
              break
            case 1:
              ;(d = [je, ht, Ne]), (se = d[0]), (Y = d[1]), (ue = d[2])
              break
            case 2:
              ;(h = [Ne, ht, mt]), (se = h[0]), (Y = h[1]), (ue = h[2])
              break
            case 3:
              ;(b = [Ne, je, ht]), (se = b[0]), (Y = b[1]), (ue = b[2])
              break
            case 4:
              ;(P = [mt, Ne, ht]), (se = P[0]), (Y = P[1]), (ue = P[2])
              break
            case 5:
              ;(M = [ht, Ne, je]), (se = M[0]), (Y = M[1]), (ue = M[2])
              break
          }
        }
        return [se, Y, ue, _.length > 3 ? _[3] : 1]
      },
      dd = cd,
      fd = v.unpack,
      pd = v.type,
      hd = q,
      Zi = I,
      Ji = E,
      gd = ld
    ;(Zi.prototype.hcg = function () {
      return gd(this._rgb)
    }),
      (hd.hcg = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Zi,
          [null].concat(u, ["hcg"]),
        ))()
      }),
      (Ji.format.hcg = dd),
      Ji.autodetect.push({
        p: 1,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = fd(u, "hcg")), pd(u) === "array" && u.length === 3))
            return "hcg"
        },
      })
    var vd = v.unpack,
      md = v.last,
      Qr = Math.round,
      bd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = vd(u, "rgba"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = h[3],
          O = md(u) || "auto"
        _ === void 0 && (_ = 1),
          O === "auto" && (O = _ < 1 ? "rgba" : "rgb"),
          (b = Qr(b)),
          (P = Qr(P)),
          (M = Qr(M))
        var A = (b << 16) | (P << 8) | M,
          R = "000000" + A.toString(16)
        R = R.substr(R.length - 6)
        var W = "0" + Qr(_ * 255).toString(16)
        switch (((W = W.substr(W.length - 2)), O.toLowerCase())) {
          case "rgba":
            return "#" + R + W
          case "argb":
            return "#" + W + R
          default:
            return "#" + R
        }
      },
      Qi = bd,
      yd = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      wd = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      xd = function (u) {
        if (u.match(yd)) {
          ;(u.length === 4 || u.length === 7) && (u = u.substr(1)),
            u.length === 3 &&
              ((u = u.split("")), (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]))
          var d = parseInt(u, 16),
            h = d >> 16,
            b = (d >> 8) & 255,
            P = d & 255
          return [h, b, P, 1]
        }
        if (u.match(wd)) {
          ;(u.length === 5 || u.length === 9) && (u = u.substr(1)),
            u.length === 4 &&
              ((u = u.split("")),
              (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2] + u[3] + u[3]))
          var M = parseInt(u, 16),
            _ = (M >> 24) & 255,
            O = (M >> 16) & 255,
            A = (M >> 8) & 255,
            R = Math.round(((M & 255) / 255) * 100) / 100
          return [_, O, A, R]
        }
        throw new Error("unknown hex color: " + u)
      },
      el = xd,
      Sd = q,
      tl = I,
      Ed = v.type,
      nl = E,
      _d = Qi
    ;(tl.prototype.hex = function (u) {
      return _d(this._rgb, u)
    }),
      (Sd.hex = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          tl,
          [null].concat(u, ["hex"]),
        ))()
      }),
      (nl.format.hex = el),
      nl.autodetect.push({
        p: 4,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (
            !d.length &&
            Ed(u) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(u.length) >= 0
          )
            return "hex"
        },
      })
    var Cd = v.unpack,
      rl = v.TWOPI,
      Td = Math.min,
      Pd = Math.sqrt,
      kd = Math.acos,
      Md = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Cd(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2]
        ;(b /= 255), (P /= 255), (M /= 255)
        var _,
          O = Td(b, P, M),
          A = (b + P + M) / 3,
          R = A > 0 ? 1 - O / A : 0
        return (
          R === 0
            ? (_ = NaN)
            : ((_ = (b - P + (b - M)) / 2),
              (_ /= Pd((b - P) * (b - P) + (b - M) * (P - M))),
              (_ = kd(_)),
              M > P && (_ = rl - _),
              (_ /= rl)),
          [_ * 360, R, A]
        )
      },
      $d = Md,
      Id = v.unpack,
      na = v.limit,
      Qn = v.TWOPI,
      ra = v.PITHIRD,
      er = Math.cos,
      Od = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Id(u, "hsi")
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
              (M = (1 + (b * er(Qn * h)) / er(ra - Qn * h)) / 3),
              (_ = 1 - (O + M)))
            : h < 2 / 3
              ? ((h -= 1 / 3),
                (M = (1 - b) / 3),
                (_ = (1 + (b * er(Qn * h)) / er(ra - Qn * h)) / 3),
                (O = 1 - (M + _)))
              : ((h -= 2 / 3),
                (_ = (1 - b) / 3),
                (O = (1 + (b * er(Qn * h)) / er(ra - Qn * h)) / 3),
                (M = 1 - (_ + O))),
          (M = na(P * M * 3)),
          (_ = na(P * _ * 3)),
          (O = na(P * O * 3)),
          [M * 255, _ * 255, O * 255, u.length > 3 ? u[3] : 1]
        )
      },
      Ad = Od,
      Ld = v.unpack,
      Nd = v.type,
      Bd = q,
      sl = I,
      al = E,
      Rd = $d
    ;(sl.prototype.hsi = function () {
      return Rd(this._rgb)
    }),
      (Bd.hsi = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          sl,
          [null].concat(u, ["hsi"]),
        ))()
      }),
      (al.format.hsi = Ad),
      al.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Ld(u, "hsi")), Nd(u) === "array" && u.length === 3))
            return "hsi"
        },
      })
    var zd = v.unpack,
      Fd = v.type,
      jd = q,
      il = I,
      ll = E,
      Dd = te
    ;(il.prototype.hsl = function () {
      return Dd(this._rgb)
    }),
      (jd.hsl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          il,
          [null].concat(u, ["hsl"]),
        ))()
      }),
      (ll.format.hsl = Z),
      ll.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = zd(u, "hsl")), Fd(u) === "array" && u.length === 3))
            return "hsl"
        },
      })
    var Hd = v.unpack,
      Gd = Math.min,
      Vd = Math.max,
      Wd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Hd(u, "rgb")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = Gd(h, b, P),
          _ = Vd(h, b, P),
          O = _ - M,
          A,
          R,
          W
        return (
          (W = _ / 255),
          _ === 0
            ? ((A = Number.NaN), (R = 0))
            : ((R = O / _),
              h === _ && (A = (b - P) / O),
              b === _ && (A = 2 + (P - h) / O),
              P === _ && (A = 4 + (h - b) / O),
              (A *= 60),
              A < 0 && (A += 360)),
          [A, R, W]
        )
      },
      qd = Wd,
      Ud = v.unpack,
      Yd = Math.floor,
      Kd = function () {
        for (var u, d, h, b, P, M, _ = [], O = arguments.length; O--; )
          _[O] = arguments[O]
        _ = Ud(_, "hsv")
        var A = _[0],
          R = _[1],
          W = _[2],
          se,
          Y,
          ue
        if (((W *= 255), R === 0)) se = Y = ue = W
        else {
          A === 360 && (A = 0),
            A > 360 && (A -= 360),
            A < 0 && (A += 360),
            (A /= 60)
          var oe = Yd(A),
            Me = A - oe,
            Ae = W * (1 - R),
            Ne = W * (1 - R * Me),
            je = W * (1 - R * (1 - Me))
          switch (oe) {
            case 0:
              ;(u = [W, je, Ae]), (se = u[0]), (Y = u[1]), (ue = u[2])
              break
            case 1:
              ;(d = [Ne, W, Ae]), (se = d[0]), (Y = d[1]), (ue = d[2])
              break
            case 2:
              ;(h = [Ae, W, je]), (se = h[0]), (Y = h[1]), (ue = h[2])
              break
            case 3:
              ;(b = [Ae, Ne, W]), (se = b[0]), (Y = b[1]), (ue = b[2])
              break
            case 4:
              ;(P = [je, Ae, W]), (se = P[0]), (Y = P[1]), (ue = P[2])
              break
            case 5:
              ;(M = [W, Ae, Ne]), (se = M[0]), (Y = M[1]), (ue = M[2])
              break
          }
        }
        return [se, Y, ue, _.length > 3 ? _[3] : 1]
      },
      Xd = Kd,
      Zd = v.unpack,
      Jd = v.type,
      Qd = q,
      ol = I,
      ul = E,
      ef = qd
    ;(ol.prototype.hsv = function () {
      return ef(this._rgb)
    }),
      (Qd.hsv = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ol,
          [null].concat(u, ["hsv"]),
        ))()
      }),
      (ul.format.hsv = Xd),
      ul.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Zd(u, "hsv")), Jd(u) === "array" && u.length === 3))
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
      tf = v.unpack,
      cl = Math.pow,
      nf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = tf(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = rf(b, P, M),
          O = _[0],
          A = _[1],
          R = _[2],
          W = 116 * A - 16
        return [W < 0 ? 0 : W, 500 * (O - A), 200 * (A - R)]
      },
      sa = function (u) {
        return (u /= 255) <= 0.04045 ? u / 12.92 : cl((u + 0.055) / 1.055, 2.4)
      },
      aa = function (u) {
        return u > tr.t3 ? cl(u, 1 / 3) : u / tr.t2 + tr.t0
      },
      rf = function (u, d, h) {
        ;(u = sa(u)), (d = sa(d)), (h = sa(h))
        var b = aa((0.4124564 * u + 0.3575761 * d + 0.1804375 * h) / tr.Xn),
          P = aa((0.2126729 * u + 0.7151522 * d + 0.072175 * h) / tr.Yn),
          M = aa((0.0193339 * u + 0.119192 * d + 0.9503041 * h) / tr.Zn)
        return [b, P, M]
      },
      dl = nf,
      nr = es,
      sf = v.unpack,
      af = Math.pow,
      lf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = sf(u, "lab")
        var h = u[0],
          b = u[1],
          P = u[2],
          M,
          _,
          O,
          A,
          R,
          W
        return (
          (_ = (h + 16) / 116),
          (M = isNaN(b) ? _ : _ + b / 500),
          (O = isNaN(P) ? _ : _ - P / 200),
          (_ = nr.Yn * la(_)),
          (M = nr.Xn * la(M)),
          (O = nr.Zn * la(O)),
          (A = ia(3.2404542 * M - 1.5371385 * _ - 0.4985314 * O)),
          (R = ia(-0.969266 * M + 1.8760108 * _ + 0.041556 * O)),
          (W = ia(0.0556434 * M - 0.2040259 * _ + 1.0572252 * O)),
          [A, R, W, u.length > 3 ? u[3] : 1]
        )
      },
      ia = function (u) {
        return 255 * (u <= 0.00304 ? 12.92 * u : 1.055 * af(u, 1 / 2.4) - 0.055)
      },
      la = function (u) {
        return u > nr.t1 ? u * u * u : nr.t2 * (u - nr.t0)
      },
      fl = lf,
      of = v.unpack,
      uf = v.type,
      cf = q,
      pl = I,
      hl = E,
      df = dl
    ;(pl.prototype.lab = function () {
      return df(this._rgb)
    }),
      (cf.lab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          pl,
          [null].concat(u, ["lab"]),
        ))()
      }),
      (hl.format.lab = fl),
      hl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = of(u, "lab")), uf(u) === "array" && u.length === 3))
            return "lab"
        },
      })
    var ff = v.unpack,
      pf = v.RAD2DEG,
      hf = Math.sqrt,
      gf = Math.atan2,
      vf = Math.round,
      mf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = ff(u, "lab"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = hf(P * P + M * M),
          O = (gf(M, P) * pf + 360) % 360
        return vf(_ * 1e4) === 0 && (O = Number.NaN), [b, _, O]
      },
      gl = mf,
      bf = v.unpack,
      yf = dl,
      wf = gl,
      xf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = bf(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = yf(b, P, M),
          O = _[0],
          A = _[1],
          R = _[2]
        return wf(O, A, R)
      },
      Sf = xf,
      Ef = v.unpack,
      _f = v.DEG2RAD,
      Cf = Math.sin,
      Tf = Math.cos,
      Pf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Ef(u, "lch"),
          b = h[0],
          P = h[1],
          M = h[2]
        return isNaN(M) && (M = 0), (M = M * _f), [b, Tf(M) * P, Cf(M) * P]
      },
      vl = Pf,
      kf = v.unpack,
      Mf = vl,
      $f = fl,
      If = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = kf(u, "lch")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = Mf(h, b, P),
          _ = M[0],
          O = M[1],
          A = M[2],
          R = $f(_, O, A),
          W = R[0],
          se = R[1],
          Y = R[2]
        return [W, se, Y, u.length > 3 ? u[3] : 1]
      },
      ml = If,
      Of = v.unpack,
      Af = ml,
      Lf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Of(u, "hcl").reverse()
        return Af.apply(void 0, h)
      },
      Nf = Lf,
      Bf = v.unpack,
      Rf = v.type,
      bl = q,
      ts = I,
      oa = E,
      yl = Sf
    ;(ts.prototype.lch = function () {
      return yl(this._rgb)
    }),
      (ts.prototype.hcl = function () {
        return yl(this._rgb).reverse()
      }),
      (bl.lch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ts,
          [null].concat(u, ["lch"]),
        ))()
      }),
      (bl.hcl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ts,
          [null].concat(u, ["hcl"]),
        ))()
      }),
      (oa.format.lch = ml),
      (oa.format.hcl = Nf),
      ["lch", "hcl"].forEach(function (u) {
        return oa.autodetect.push({
          p: 2,
          test: function () {
            for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h]
            if (((d = Bf(d, u)), Rf(d) === "array" && d.length === 3)) return u
          },
        })
      })
    var zf = {
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
      wl = zf,
      Ff = I,
      xl = E,
      jf = v.type,
      Mr = wl,
      Df = el,
      Hf = Qi
    ;(Ff.prototype.name = function () {
      for (
        var u = Hf(this._rgb, "rgb"), d = 0, h = Object.keys(Mr);
        d < h.length;
        d += 1
      ) {
        var b = h[d]
        if (Mr[b] === u) return b.toLowerCase()
      }
      return u
    }),
      (xl.format.named = function (u) {
        if (((u = u.toLowerCase()), Mr[u])) return Df(Mr[u])
        throw new Error("unknown color name: " + u)
      }),
      xl.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && jf(u) === "string" && Mr[u.toLowerCase()])
            return "named"
        },
      })
    var Gf = v.unpack,
      Vf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Gf(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2]
        return (b << 16) + (P << 8) + M
      },
      Wf = Vf,
      qf = v.type,
      Uf = function (u) {
        if (qf(u) == "number" && u >= 0 && u <= 16777215) {
          var d = u >> 16,
            h = (u >> 8) & 255,
            b = u & 255
          return [d, h, b, 1]
        }
        throw new Error("unknown num color: " + u)
      },
      Yf = Uf,
      Kf = q,
      Sl = I,
      El = E,
      Xf = v.type,
      Zf = Wf
    ;(Sl.prototype.num = function () {
      return Zf(this._rgb)
    }),
      (Kf.num = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Sl,
          [null].concat(u, ["num"]),
        ))()
      }),
      (El.format.num = Yf),
      El.autodetect.push({
        p: 5,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            u.length === 1 &&
            Xf(u[0]) === "number" &&
            u[0] >= 0 &&
            u[0] <= 16777215
          )
            return "num"
        },
      })
    var Jf = q,
      ua = I,
      _l = E,
      Cl = v.unpack,
      Tl = v.type,
      Pl = Math.round
    ;(ua.prototype.rgb = function (u) {
      return (
        u === void 0 && (u = !0),
        u === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Pl)
      )
    }),
      (ua.prototype.rgba = function (u) {
        return (
          u === void 0 && (u = !0),
          this._rgb.slice(0, 4).map(function (d, h) {
            return h < 3 ? (u === !1 ? d : Pl(d)) : d
          })
        )
      }),
      (Jf.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ua,
          [null].concat(u, ["rgb"]),
        ))()
      }),
      (_l.format.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Cl(u, "rgba")
        return h[3] === void 0 && (h[3] = 1), h
      }),
      _l.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            ((u = Cl(u, "rgba")),
            Tl(u) === "array" &&
              (u.length === 3 ||
                (u.length === 4 &&
                  Tl(u[3]) == "number" &&
                  u[3] >= 0 &&
                  u[3] <= 1)))
          )
            return "rgb"
        },
      })
    var ns = Math.log,
      Qf = function (u) {
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
      kl = Qf,
      ep = kl,
      tp = v.unpack,
      np = Math.round,
      rp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        for (
          var h = tp(u, "rgb"),
            b = h[0],
            P = h[2],
            M = 1e3,
            _ = 4e4,
            O = 0.4,
            A;
          _ - M > O;

        ) {
          A = (_ + M) * 0.5
          var R = ep(A)
          R[2] / R[0] >= P / b ? (_ = A) : (M = A)
        }
        return np(A)
      },
      sp = rp,
      ca = q,
      rs = I,
      da = E,
      ap = sp
    ;(rs.prototype.temp =
      rs.prototype.kelvin =
      rs.prototype.temperature =
        function () {
          return ap(this._rgb)
        }),
      (ca.temp =
        ca.kelvin =
        ca.temperature =
          function () {
            for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
            return new (Function.prototype.bind.apply(
              rs,
              [null].concat(u, ["temp"]),
            ))()
          }),
      (da.format.temp = da.format.kelvin = da.format.temperature = kl)
    var ip = v.unpack,
      fa = Math.cbrt,
      lp = Math.pow,
      op = Math.sign,
      up = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = ip(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = [pa(b / 255), pa(P / 255), pa(M / 255)],
          O = _[0],
          A = _[1],
          R = _[2],
          W = fa(0.4122214708 * O + 0.5363325363 * A + 0.0514459929 * R),
          se = fa(0.2119034982 * O + 0.6806995451 * A + 0.1073969566 * R),
          Y = fa(0.0883024619 * O + 0.2817188376 * A + 0.6299787005 * R)
        return [
          0.2104542553 * W + 0.793617785 * se - 0.0040720468 * Y,
          1.9779984951 * W - 2.428592205 * se + 0.4505937099 * Y,
          0.0259040371 * W + 0.7827717662 * se - 0.808675766 * Y,
        ]
      },
      Ml = up
    function pa(u) {
      var d = Math.abs(u)
      return d < 0.04045
        ? u / 12.92
        : (op(u) || 1) * lp((d + 0.055) / 1.055, 2.4)
    }
    var cp = v.unpack,
      ss = Math.pow,
      dp = Math.sign,
      fp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = cp(u, "lab")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = ss(h + 0.3963377774 * b + 0.2158037573 * P, 3),
          _ = ss(h - 0.1055613458 * b - 0.0638541728 * P, 3),
          O = ss(h - 0.0894841775 * b - 1.291485548 * P, 3)
        return [
          255 * ha(4.0767416621 * M - 3.3077115913 * _ + 0.2309699292 * O),
          255 * ha(-1.2684380046 * M + 2.6097574011 * _ - 0.3413193965 * O),
          255 * ha(-0.0041960863 * M - 0.7034186147 * _ + 1.707614701 * O),
          u.length > 3 ? u[3] : 1,
        ]
      },
      $l = fp
    function ha(u) {
      var d = Math.abs(u)
      return d > 0.0031308
        ? (dp(u) || 1) * (1.055 * ss(d, 1 / 2.4) - 0.055)
        : u * 12.92
    }
    var pp = v.unpack,
      hp = v.type,
      gp = q,
      Il = I,
      Ol = E,
      vp = Ml
    ;(Il.prototype.oklab = function () {
      return vp(this._rgb)
    }),
      (gp.oklab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Il,
          [null].concat(u, ["oklab"]),
        ))()
      }),
      (Ol.format.oklab = $l),
      Ol.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = pp(u, "oklab")), hp(u) === "array" && u.length === 3))
            return "oklab"
        },
      })
    var mp = v.unpack,
      bp = Ml,
      yp = gl,
      wp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = mp(u, "rgb"),
          b = h[0],
          P = h[1],
          M = h[2],
          _ = bp(b, P, M),
          O = _[0],
          A = _[1],
          R = _[2]
        return yp(O, A, R)
      },
      xp = wp,
      Sp = v.unpack,
      Ep = vl,
      _p = $l,
      Cp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Sp(u, "lch")
        var h = u[0],
          b = u[1],
          P = u[2],
          M = Ep(h, b, P),
          _ = M[0],
          O = M[1],
          A = M[2],
          R = _p(_, O, A),
          W = R[0],
          se = R[1],
          Y = R[2]
        return [W, se, Y, u.length > 3 ? u[3] : 1]
      },
      Tp = Cp,
      Pp = v.unpack,
      kp = v.type,
      Mp = q,
      Al = I,
      Ll = E,
      $p = xp
    ;(Al.prototype.oklch = function () {
      return $p(this._rgb)
    }),
      (Mp.oklch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Al,
          [null].concat(u, ["oklch"]),
        ))()
      }),
      (Ll.format.oklch = Tp),
      Ll.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Pp(u, "oklch")), kp(u) === "array" && u.length === 3))
            return "oklch"
        },
      })
    var Nl = I,
      Ip = v.type
    Nl.prototype.alpha = function (u, d) {
      return (
        d === void 0 && (d = !1),
        u !== void 0 && Ip(u) === "number"
          ? d
            ? ((this._rgb[3] = u), this)
            : new Nl([this._rgb[0], this._rgb[1], this._rgb[2], u], "rgb")
          : this._rgb[3]
      )
    }
    var Op = I
    Op.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var Rn = I,
      Ap = es
    ;(Rn.prototype.darken = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lab()
      return (h[0] -= Ap.Kn * u), new Rn(h, "lab").alpha(d.alpha(), !0)
    }),
      (Rn.prototype.brighten = function (u) {
        return u === void 0 && (u = 1), this.darken(-u)
      }),
      (Rn.prototype.darker = Rn.prototype.darken),
      (Rn.prototype.brighter = Rn.prototype.brighten)
    var Lp = I
    Lp.prototype.get = function (u) {
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
      Np = v.type,
      Bp = Math.pow,
      Rp = 1e-7,
      zp = 20
    rr.prototype.luminance = function (u) {
      if (u !== void 0 && Np(u) === "number") {
        if (u === 0) return new rr([0, 0, 0, this._rgb[3]], "rgb")
        if (u === 1) return new rr([255, 255, 255, this._rgb[3]], "rgb")
        var d = this.luminance(),
          h = "rgb",
          b = zp,
          P = function (_, O) {
            var A = _.interpolate(O, 0.5, h),
              R = A.luminance()
            return Math.abs(u - R) < Rp || !b-- ? A : R > u ? P(_, A) : P(A, O)
          },
          M = (
            d > u
              ? P(new rr([0, 0, 0]), this)
              : P(this, new rr([255, 255, 255]))
          ).rgb()
        return new rr(M.concat([this._rgb[3]]))
      }
      return Fp.apply(void 0, this._rgb.slice(0, 3))
    }
    var Fp = function (u, d, h) {
        return (
          (u = ga(u)),
          (d = ga(d)),
          (h = ga(h)),
          0.2126 * u + 0.7152 * d + 0.0722 * h
        )
      },
      ga = function (u) {
        return (
          (u /= 255), u <= 0.03928 ? u / 12.92 : Bp((u + 0.055) / 1.055, 2.4)
        )
      },
      At = {},
      Bl = I,
      Rl = v.type,
      as = At,
      zl = function (u, d, h) {
        h === void 0 && (h = 0.5)
        for (var b = [], P = arguments.length - 3; P-- > 0; )
          b[P] = arguments[P + 3]
        var M = b[0] || "lrgb"
        if ((!as[M] && !b.length && (M = Object.keys(as)[0]), !as[M]))
          throw new Error("interpolation mode " + M + " is not defined")
        return (
          Rl(u) !== "object" && (u = new Bl(u)),
          Rl(d) !== "object" && (d = new Bl(d)),
          as[M](u, d, h).alpha(u.alpha() + h * (d.alpha() - u.alpha()))
        )
      },
      Fl = I,
      jp = zl
    Fl.prototype.mix = Fl.prototype.interpolate = function (u, d) {
      d === void 0 && (d = 0.5)
      for (var h = [], b = arguments.length - 2; b-- > 0; )
        h[b] = arguments[b + 2]
      return jp.apply(void 0, [this, u, d].concat(h))
    }
    var jl = I
    jl.prototype.premultiply = function (u) {
      u === void 0 && (u = !1)
      var d = this._rgb,
        h = d[3]
      return u
        ? ((this._rgb = [d[0] * h, d[1] * h, d[2] * h, h]), this)
        : new jl([d[0] * h, d[1] * h, d[2] * h, h], "rgb")
    }
    var va = I,
      Dp = es
    ;(va.prototype.saturate = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lch()
      return (
        (h[1] += Dp.Kn * u),
        h[1] < 0 && (h[1] = 0),
        new va(h, "lch").alpha(d.alpha(), !0)
      )
    }),
      (va.prototype.desaturate = function (u) {
        return u === void 0 && (u = 1), this.saturate(-u)
      })
    var Dl = I,
      Hl = v.type
    Dl.prototype.set = function (u, d, h) {
      h === void 0 && (h = !1)
      var b = u.split("."),
        P = b[0],
        M = b[1],
        _ = this[P]()
      if (M) {
        var O = P.indexOf(M) - (P.substr(0, 2) === "ok" ? 2 : 0)
        if (O > -1) {
          if (Hl(d) == "string")
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
          else if (Hl(d) === "number") _[O] = d
          else throw new Error("unsupported value for Color.set")
          var A = new Dl(_, P)
          return h ? ((this._rgb = A._rgb), this) : A
        }
        throw new Error("unknown channel " + M + " in mode " + P)
      } else return _
    }
    var Hp = I,
      Gp = function (u, d, h) {
        var b = u._rgb,
          P = d._rgb
        return new Hp(
          b[0] + h * (P[0] - b[0]),
          b[1] + h * (P[1] - b[1]),
          b[2] + h * (P[2] - b[2]),
          "rgb",
        )
      }
    At.rgb = Gp
    var Vp = I,
      ma = Math.sqrt,
      sr = Math.pow,
      Wp = function (u, d, h) {
        var b = u._rgb,
          P = b[0],
          M = b[1],
          _ = b[2],
          O = d._rgb,
          A = O[0],
          R = O[1],
          W = O[2]
        return new Vp(
          ma(sr(P, 2) * (1 - h) + sr(A, 2) * h),
          ma(sr(M, 2) * (1 - h) + sr(R, 2) * h),
          ma(sr(_, 2) * (1 - h) + sr(W, 2) * h),
          "rgb",
        )
      }
    At.lrgb = Wp
    var qp = I,
      Up = function (u, d, h) {
        var b = u.lab(),
          P = d.lab()
        return new qp(
          b[0] + h * (P[0] - b[0]),
          b[1] + h * (P[1] - b[1]),
          b[2] + h * (P[2] - b[2]),
          "lab",
        )
      }
    At.lab = Up
    var Gl = I,
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
        var A, R, W, se, Y, ue
        ;(b.substr(0, 1) === "h" || b === "oklch") &&
          ((P = _),
          (A = P[0]),
          (W = P[1]),
          (Y = P[2]),
          (M = O),
          (R = M[0]),
          (se = M[1]),
          (ue = M[2]))
        var oe, Me, Ae, Ne
        return (
          !isNaN(A) && !isNaN(R)
            ? (R > A && R - A > 180
                ? (Ne = R - (A + 360))
                : R < A && A - R > 180
                  ? (Ne = R + 360 - A)
                  : (Ne = R - A),
              (Me = A + h * Ne))
            : isNaN(A)
              ? isNaN(R)
                ? (Me = Number.NaN)
                : ((Me = R), (Y == 1 || Y == 0) && b != "hsv" && (oe = se))
              : ((Me = A), (ue == 1 || ue == 0) && b != "hsv" && (oe = W)),
          oe === void 0 && (oe = W + h * (se - W)),
          (Ae = Y + h * (ue - Y)),
          b === "oklch" ? new Gl([Ae, oe, Me], b) : new Gl([Me, oe, Ae], b)
        )
      },
      Yp = ar,
      Vl = function (u, d, h) {
        return Yp(u, d, h, "lch")
      }
    ;(At.lch = Vl), (At.hcl = Vl)
    var Kp = I,
      Xp = function (u, d, h) {
        var b = u.num(),
          P = d.num()
        return new Kp(b + h * (P - b), "num")
      }
    At.num = Xp
    var Zp = ar,
      Jp = function (u, d, h) {
        return Zp(u, d, h, "hcg")
      }
    At.hcg = Jp
    var Qp = ar,
      eh = function (u, d, h) {
        return Qp(u, d, h, "hsi")
      }
    At.hsi = eh
    var th = ar,
      nh = function (u, d, h) {
        return th(u, d, h, "hsl")
      }
    At.hsl = nh
    var rh = ar,
      sh = function (u, d, h) {
        return rh(u, d, h, "hsv")
      }
    At.hsv = sh
    var ah = I,
      ih = function (u, d, h) {
        var b = u.oklab(),
          P = d.oklab()
        return new ah(
          b[0] + h * (P[0] - b[0]),
          b[1] + h * (P[1] - b[1]),
          b[2] + h * (P[2] - b[2]),
          "oklab",
        )
      }
    At.oklab = ih
    var lh = ar,
      oh = function (u, d, h) {
        return lh(u, d, h, "oklch")
      }
    At.oklch = oh
    var ba = I,
      uh = v.clip_rgb,
      ya = Math.pow,
      wa = Math.sqrt,
      xa = Math.PI,
      Wl = Math.cos,
      ql = Math.sin,
      ch = Math.atan2,
      dh = function (u, d, h) {
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
            return new ba(Me)
          })),
          d === "lrgb")
        )
          return fh(u, h)
        for (
          var M = u.shift(), _ = M.get(d), O = [], A = 0, R = 0, W = 0;
          W < _.length;
          W++
        )
          if (
            ((_[W] = (_[W] || 0) * h[0]),
            O.push(isNaN(_[W]) ? 0 : h[0]),
            d.charAt(W) === "h" && !isNaN(_[W]))
          ) {
            var se = (_[W] / 180) * xa
            ;(A += Wl(se) * h[0]), (R += ql(se) * h[0])
          }
        var Y = M.alpha() * h[0]
        u.forEach(function (Me, Ae) {
          var Ne = Me.get(d)
          Y += Me.alpha() * h[Ae + 1]
          for (var je = 0; je < _.length; je++)
            if (!isNaN(Ne[je]))
              if (((O[je] += h[Ae + 1]), d.charAt(je) === "h")) {
                var mt = (Ne[je] / 180) * xa
                ;(A += Wl(mt) * h[Ae + 1]), (R += ql(mt) * h[Ae + 1])
              } else _[je] += Ne[je] * h[Ae + 1]
        })
        for (var ue = 0; ue < _.length; ue++)
          if (d.charAt(ue) === "h") {
            for (var oe = (ch(R / O[ue], A / O[ue]) / xa) * 180; oe < 0; )
              oe += 360
            for (; oe >= 360; ) oe -= 360
            _[ue] = oe
          } else _[ue] = _[ue] / O[ue]
        return (Y /= b), new ba(_, d).alpha(Y > 0.99999 ? 1 : Y, !0)
      },
      fh = function (u, d) {
        for (var h = u.length, b = [0, 0, 0, 0], P = 0; P < u.length; P++) {
          var M = u[P],
            _ = d[P] / h,
            O = M._rgb
          ;(b[0] += ya(O[0], 2) * _),
            (b[1] += ya(O[1], 2) * _),
            (b[2] += ya(O[2], 2) * _),
            (b[3] += O[3] * _)
        }
        return (
          (b[0] = wa(b[0])),
          (b[1] = wa(b[1])),
          (b[2] = wa(b[2])),
          b[3] > 0.9999999 && (b[3] = 1),
          new ba(uh(b))
        )
      },
      Ht = q,
      ir = v.type,
      ph = Math.pow,
      Sa = function (u) {
        var d = "rgb",
          h = Ht("#ccc"),
          b = 0,
          P = [0, 1],
          M = [],
          _ = [0, 0],
          O = !1,
          A = [],
          R = !1,
          W = 0,
          se = 1,
          Y = !1,
          ue = {},
          oe = !0,
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
              for (var Oe = 0; Oe < K.length; Oe++) M.push(Oe / (K.length - 1))
            }
            return Pt(), (A = K)
          },
          Ne = function (K) {
            if (O != null) {
              for (var we = O.length - 1, Oe = 0; Oe < we && K >= O[Oe]; ) Oe++
              return Oe - 1
            }
            return 0
          },
          je = function (K) {
            return K
          },
          mt = function (K) {
            return K
          },
          ht = function (K, we) {
            var Oe, $e
            if ((we == null && (we = !1), isNaN(K) || K === null)) return h
            if (we) $e = K
            else if (O && O.length > 2) {
              var bt = Ne(K)
              $e = bt / (O.length - 2)
            } else se !== W ? ($e = (K - W) / (se - W)) : ($e = 1)
            ;($e = mt($e)),
              we || ($e = je($e)),
              Me !== 1 && ($e = ph($e, Me)),
              ($e = _[0] + $e * (1 - _[0] - _[1])),
              ($e = Math.min(1, Math.max(0, $e)))
            var Xe = Math.floor($e * 1e4)
            if (oe && ue[Xe]) Oe = ue[Xe]
            else {
              if (ir(A) === "array")
                for (var Be = 0; Be < M.length; Be++) {
                  var He = M[Be]
                  if ($e <= He) {
                    Oe = A[Be]
                    break
                  }
                  if ($e >= He && Be === M.length - 1) {
                    Oe = A[Be]
                    break
                  }
                  if ($e > He && $e < M[Be + 1]) {
                    ;($e = ($e - He) / (M[Be + 1] - He)),
                      (Oe = Ht.interpolate(A[Be], A[Be + 1], $e, d))
                    break
                  }
                }
              else ir(A) === "function" && (Oe = A($e))
              oe && (ue[Xe] = Oe)
            }
            return Oe
          },
          Pt = function () {
            return (ue = {})
          }
        Ae(u)
        var Le = function (K) {
          var we = Ht(ht(K))
          return R && we[R] ? we[R]() : we
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
              for (var Oe = 0, $e = Array.from(K); Oe < $e.length; Oe += 1) {
                var bt = $e[Oe]
                M.push((bt - W) / (se - W))
              }
            else {
              for (var Xe = 0; Xe < we; Xe++) M.push(Xe / (we - 1))
              if (K.length > 2) {
                var Be = K.map(function (Ge, Ve) {
                    return Ve / (K.length - 1)
                  }),
                  He = K.map(function (Ge) {
                    return (Ge - W) / (se - W)
                  })
                He.every(function (Ge, Ve) {
                  return Be[Ve] === Ge
                }) ||
                  (mt = function (Ge) {
                    if (Ge <= 0 || Ge >= 1) return Ge
                    for (var Ve = 0; Ge >= He[Ve + 1]; ) Ve++
                    var Vt = (Ge - He[Ve]) / (He[Ve + 1] - He[Ve]),
                      wn = Be[Ve] + Vt * (Be[Ve + 1] - Be[Ve])
                    return wn
                  })
              }
            }
            return (P = [W, se]), Le
          }),
          (Le.mode = function (K) {
            return arguments.length ? ((d = K), Pt(), Le) : d
          }),
          (Le.range = function (K, we) {
            return Ae(K), Le
          }),
          (Le.out = function (K) {
            return (R = K), Le
          }),
          (Le.spread = function (K) {
            return arguments.length ? ((b = K), Le) : b
          }),
          (Le.correctLightness = function (K) {
            return (
              K == null && (K = !0),
              (Y = K),
              Pt(),
              Y
                ? (je = function (we) {
                    for (
                      var Oe = ht(0, !0).lab()[0],
                        $e = ht(1, !0).lab()[0],
                        bt = Oe > $e,
                        Xe = ht(we, !0).lab()[0],
                        Be = Oe + ($e - Oe) * we,
                        He = Xe - Be,
                        Ge = 0,
                        Ve = 1,
                        Vt = 20;
                      Math.abs(He) > 0.01 && Vt-- > 0;

                    )
                      (function () {
                        return (
                          bt && (He *= -1),
                          He < 0
                            ? ((Ge = we), (we += (Ve - we) * 0.5))
                            : ((Ve = we), (we += (Ge - we) * 0.5)),
                          (Xe = ht(we, !0).lab()[0]),
                          (He = Xe - Be)
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
            var Oe = []
            if (arguments.length === 0) Oe = A.slice(0)
            else if (K === 1) Oe = [Le(0.5)]
            else if (K > 1) {
              var $e = P[0],
                bt = P[1] - $e
              Oe = hh(0, K, !1).map(function (Ve) {
                return Le($e + (Ve / (K - 1)) * bt)
              })
            } else {
              u = []
              var Xe = []
              if (O && O.length > 2)
                for (
                  var Be = 1, He = O.length, Ge = 1 <= He;
                  Ge ? Be < He : Be > He;
                  Ge ? Be++ : Be--
                )
                  Xe.push((O[Be - 1] + O[Be]) * 0.5)
              else Xe = P
              Oe = Xe.map(function (Ve) {
                return Le(Ve)
              })
            }
            return (
              Ht[we] &&
                (Oe = Oe.map(function (Ve) {
                  return Ve[we]()
                })),
              Oe
            )
          }),
          (Le.cache = function (K) {
            return K != null ? ((oe = K), Le) : oe
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
    function hh(u, d, h) {
      for (
        var b = [], P = u < d, M = h ? (P ? d + 1 : d - 1) : d, _ = u;
        P ? _ < M : _ > M;
        P ? _++ : _--
      )
        b.push(_)
      return b
    }
    var $r = I,
      gh = Sa,
      vh = function (u) {
        for (var d = [1, 1], h = 1; h < u; h++) {
          for (var b = [1], P = 1; P <= d.length; P++)
            b[P] = (d[P] || 0) + d[P - 1]
          d = b
        }
        return d
      },
      mh = function (u) {
        var d, h, b, P, M, _, O
        if (
          ((u = u.map(function (Y) {
            return new $r(Y)
          })),
          u.length === 2)
        )
          (d = u.map(function (Y) {
            return Y.lab()
          })),
            (M = d[0]),
            (_ = d[1]),
            (P = function (Y) {
              var ue = [0, 1, 2].map(function (oe) {
                return M[oe] + Y * (_[oe] - M[oe])
              })
              return new $r(ue, "lab")
            })
        else if (u.length === 3)
          (h = u.map(function (Y) {
            return Y.lab()
          })),
            (M = h[0]),
            (_ = h[1]),
            (O = h[2]),
            (P = function (Y) {
              var ue = [0, 1, 2].map(function (oe) {
                return (
                  (1 - Y) * (1 - Y) * M[oe] +
                  2 * (1 - Y) * Y * _[oe] +
                  Y * Y * O[oe]
                )
              })
              return new $r(ue, "lab")
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
              var ue = [0, 1, 2].map(function (oe) {
                return (
                  (1 - Y) * (1 - Y) * (1 - Y) * M[oe] +
                  3 * (1 - Y) * (1 - Y) * Y * _[oe] +
                  3 * (1 - Y) * Y * Y * O[oe] +
                  Y * Y * Y * A[oe]
                )
              })
              return new $r(ue, "lab")
            })
        } else if (u.length >= 5) {
          var R, W, se
          ;(R = u.map(function (Y) {
            return Y.lab()
          })),
            (se = u.length - 1),
            (W = vh(se)),
            (P = function (Y) {
              var ue = 1 - Y,
                oe = [0, 1, 2].map(function (Me) {
                  return R.reduce(function (Ae, Ne, je) {
                    return (
                      Ae +
                      W[je] * Math.pow(ue, se - je) * Math.pow(Y, je) * Ne[Me]
                    )
                  }, 0)
                })
              return new $r(oe, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return P
      },
      bh = function (u) {
        var d = mh(u)
        return (
          (d.scale = function () {
            return gh(d)
          }),
          d
        )
      },
      Ea = q,
      Gt = function (u, d, h) {
        if (!Gt[h]) throw new Error("unknown blend mode " + h)
        return Gt[h](u, d)
      },
      bn = function (u) {
        return function (d, h) {
          var b = Ea(h).rgb(),
            P = Ea(d).rgb()
          return Ea.rgb(u(b, P))
        }
      },
      yn = function (u) {
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
      yh = function (u) {
        return u
      },
      wh = function (u, d) {
        return (u * d) / 255
      },
      xh = function (u, d) {
        return u > d ? d : u
      },
      Sh = function (u, d) {
        return u > d ? u : d
      },
      Eh = function (u, d) {
        return 255 * (1 - (1 - u / 255) * (1 - d / 255))
      },
      _h = function (u, d) {
        return d < 128
          ? (2 * u * d) / 255
          : 255 * (1 - 2 * (1 - u / 255) * (1 - d / 255))
      },
      Ch = function (u, d) {
        return 255 * (1 - (1 - d / 255) / (u / 255))
      },
      Th = function (u, d) {
        return u === 255
          ? 255
          : ((u = (255 * (d / 255)) / (1 - u / 255)), u > 255 ? 255 : u)
      }
    ;(Gt.normal = bn(yn(yh))),
      (Gt.multiply = bn(yn(wh))),
      (Gt.screen = bn(yn(Eh))),
      (Gt.overlay = bn(yn(_h))),
      (Gt.darken = bn(yn(xh))),
      (Gt.lighten = bn(yn(Sh))),
      (Gt.dodge = bn(yn(Th))),
      (Gt.burn = bn(yn(Ch)))
    for (
      var Ph = Gt,
        _a = v.type,
        kh = v.clip_rgb,
        Mh = v.TWOPI,
        $h = Math.pow,
        Ih = Math.sin,
        Oh = Math.cos,
        Ul = q,
        Ah = function (u, d, h, b, P) {
          u === void 0 && (u = 300),
            d === void 0 && (d = -1.5),
            h === void 0 && (h = 1),
            b === void 0 && (b = 1),
            P === void 0 && (P = [0, 1])
          var M = 0,
            _
          _a(P) === "array" ? (_ = P[1] - P[0]) : ((_ = 0), (P = [P, P]))
          var O = function (A) {
            var R = Mh * ((u + 120) / 360 + d * A),
              W = $h(P[0] + _ * A, b),
              se = M !== 0 ? h[0] + A * M : h,
              Y = (se * W * (1 - W)) / 2,
              ue = Oh(R),
              oe = Ih(R),
              Me = W + Y * (-0.14861 * ue + 1.78277 * oe),
              Ae = W + Y * (-0.29227 * ue - 0.90649 * oe),
              Ne = W + Y * (1.97294 * ue)
            return Ul(kh([Me * 255, Ae * 255, Ne * 255, 1]))
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
                  _a(h) === "array"
                    ? ((M = h[1] - h[0]), M === 0 && (h = h[1]))
                    : (M = 0),
                  O)
            }),
            (O.lightness = function (A) {
              return A == null
                ? P
                : (_a(A) === "array"
                    ? ((P = A), (_ = A[1] - A[0]))
                    : ((P = [A, A]), (_ = 0)),
                  O)
            }),
            (O.scale = function () {
              return Ul.scale(O)
            }),
            O.hue(h),
            O
          )
        },
        Lh = I,
        Nh = "0123456789abcdef",
        Bh = Math.floor,
        Rh = Math.random,
        zh = function () {
          for (var u = "#", d = 0; d < 6; d++) u += Nh.charAt(Bh(Rh() * 16))
          return new Lh(u, "hex")
        },
        Ca = f,
        Yl = Math.log,
        Fh = Math.pow,
        jh = Math.floor,
        Dh = Math.abs,
        Kl = function (u, d) {
          d === void 0 && (d = null)
          var h = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0,
          }
          return (
            Ca(u) === "object" && (u = Object.values(u)),
            u.forEach(function (b) {
              d && Ca(b) === "object" && (b = b[d]),
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
              return Xl(h, b, P)
            }),
            h
          )
        },
        Xl = function (u, d, h) {
          d === void 0 && (d = "equal"),
            h === void 0 && (h = 7),
            Ca(u) == "array" && (u = Kl(u))
          var b = u.min,
            P = u.max,
            M = u.values.sort(function (Pa, ka) {
              return Pa - ka
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
            var A = Math.LOG10E * Yl(b),
              R = Math.LOG10E * Yl(P)
            _.push(b)
            for (var W = 1; W < h; W++) _.push(Fh(10, A + (W / h) * (R - A)))
            _.push(P)
          } else if (d.substr(0, 1) === "q") {
            _.push(b)
            for (var se = 1; se < h; se++) {
              var Y = ((M.length - 1) * se) / h,
                ue = jh(Y)
              if (ue === Y) _.push(M[ue])
              else {
                var oe = Y - ue
                _.push(M[ue] * (1 - oe) + M[ue + 1] * oe)
              }
            }
            _.push(P)
          } else if (d.substr(0, 1) === "k") {
            var Me,
              Ae = M.length,
              Ne = new Array(Ae),
              je = new Array(h),
              mt = !0,
              ht = 0,
              Pt = null
            ;(Pt = []), Pt.push(b)
            for (var Le = 1; Le < h; Le++) Pt.push(b + (Le / h) * (P - b))
            for (Pt.push(P); mt; ) {
              for (var K = 0; K < h; K++) je[K] = 0
              for (var we = 0; we < Ae; we++)
                for (
                  var Oe = M[we], $e = Number.MAX_VALUE, bt = void 0, Xe = 0;
                  Xe < h;
                  Xe++
                ) {
                  var Be = Dh(Pt[Xe] - Oe)
                  Be < $e && (($e = Be), (bt = Xe)), je[bt]++, (Ne[we] = bt)
                }
              for (var He = new Array(h), Ge = 0; Ge < h; Ge++) He[Ge] = null
              for (var Ve = 0; Ve < Ae; Ve++)
                (Me = Ne[Ve]),
                  He[Me] === null ? (He[Me] = M[Ve]) : (He[Me] += M[Ve])
              for (var Vt = 0; Vt < h; Vt++) He[Vt] *= 1 / je[Vt]
              mt = !1
              for (var wn = 0; wn < h; wn++)
                if (He[wn] !== Pt[wn]) {
                  mt = !0
                  break
                }
              ;(Pt = He), ht++, ht > 200 && (mt = !1)
            }
            for (var xn = {}, lr = 0; lr < h; lr++) xn[lr] = []
            for (var or = 0; or < Ae; or++) (Me = Ne[or]), xn[Me].push(M[or])
            for (var rn = [], zn = 0; zn < h; zn++)
              rn.push(xn[zn][0]), rn.push(xn[zn][xn[zn].length - 1])
            ;(rn = rn.sort(function (Pa, ka) {
              return Pa - ka
            })),
              _.push(rn[0])
            for (var Ir = 1; Ir < rn.length; Ir += 2) {
              var Fn = rn[Ir]
              !isNaN(Fn) && _.indexOf(Fn) === -1 && _.push(Fn)
            }
          }
          return _
        },
        Zl = { analyze: Kl, limits: Xl },
        Jl = I,
        Hh = function (u, d) {
          ;(u = new Jl(u)), (d = new Jl(d))
          var h = u.luminance(),
            b = d.luminance()
          return h > b ? (h + 0.05) / (b + 0.05) : (b + 0.05) / (h + 0.05)
        },
        Ql = I,
        nn = Math.sqrt,
        at = Math.pow,
        Gh = Math.min,
        Vh = Math.max,
        eo = Math.atan2,
        to = Math.abs,
        is = Math.cos,
        no = Math.sin,
        Wh = Math.exp,
        ro = Math.PI,
        qh = function (u, d, h, b, P) {
          h === void 0 && (h = 1),
            b === void 0 && (b = 1),
            P === void 0 && (P = 1)
          var M = function (Fn) {
              return (360 * Fn) / (2 * ro)
            },
            _ = function (Fn) {
              return (2 * ro * Fn) / 360
            }
          ;(u = new Ql(u)), (d = new Ql(d))
          var O = Array.from(u.lab()),
            A = O[0],
            R = O[1],
            W = O[2],
            se = Array.from(d.lab()),
            Y = se[0],
            ue = se[1],
            oe = se[2],
            Me = (A + Y) / 2,
            Ae = nn(at(R, 2) + at(W, 2)),
            Ne = nn(at(ue, 2) + at(oe, 2)),
            je = (Ae + Ne) / 2,
            mt = 0.5 * (1 - nn(at(je, 7) / (at(je, 7) + at(25, 7)))),
            ht = R * (1 + mt),
            Pt = ue * (1 + mt),
            Le = nn(at(ht, 2) + at(W, 2)),
            K = nn(at(Pt, 2) + at(oe, 2)),
            we = (Le + K) / 2,
            Oe = M(eo(W, ht)),
            $e = M(eo(oe, Pt)),
            bt = Oe >= 0 ? Oe : Oe + 360,
            Xe = $e >= 0 ? $e : $e + 360,
            Be = to(bt - Xe) > 180 ? (bt + Xe + 360) / 2 : (bt + Xe) / 2,
            He =
              1 -
              0.17 * is(_(Be - 30)) +
              0.24 * is(_(2 * Be)) +
              0.32 * is(_(3 * Be + 6)) -
              0.2 * is(_(4 * Be - 63)),
            Ge = Xe - bt
          ;(Ge = to(Ge) <= 180 ? Ge : Xe <= bt ? Ge + 360 : Ge - 360),
            (Ge = 2 * nn(Le * K) * no(_(Ge) / 2))
          var Ve = Y - A,
            Vt = K - Le,
            wn = 1 + (0.015 * at(Me - 50, 2)) / nn(20 + at(Me - 50, 2)),
            xn = 1 + 0.045 * we,
            lr = 1 + 0.015 * we * He,
            or = 30 * Wh(-at((Be - 275) / 25, 2)),
            rn = 2 * nn(at(we, 7) / (at(we, 7) + at(25, 7))),
            zn = -rn * no(2 * _(or)),
            Ir = nn(
              at(Ve / (h * wn), 2) +
                at(Vt / (b * xn), 2) +
                at(Ge / (P * lr), 2) +
                zn * (Vt / (b * xn)) * (Ge / (P * lr)),
            )
          return Vh(0, Gh(100, Ir))
        },
        so = I,
        Uh = function (u, d, h) {
          h === void 0 && (h = "lab"), (u = new so(u)), (d = new so(d))
          var b = u.get(h),
            P = d.get(h),
            M = 0
          for (var _ in b) {
            var O = (b[_] || 0) - (P[_] || 0)
            M += O * O
          }
          return Math.sqrt(M)
        },
        Yh = I,
        Kh = function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          try {
            return (
              new (Function.prototype.bind.apply(Yh, [null].concat(u)))(), !0
            )
          } catch {
            return !1
          }
        },
        ao = q,
        io = Sa,
        Xh = {
          cool: function () {
            return io([ao.hsl(180, 1, 0.9), ao.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return io(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
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
        Ta = 0,
        lo = Object.keys(ls);
      Ta < lo.length;
      Ta += 1
    ) {
      var oo = lo[Ta]
      ls[oo.toLowerCase()] = ls[oo]
    }
    var Zh = ls,
      pt = q
    ;(pt.average = dh),
      (pt.bezier = bh),
      (pt.blend = Ph),
      (pt.cubehelix = Ah),
      (pt.mix = pt.interpolate = zl),
      (pt.random = zh),
      (pt.scale = Sa),
      (pt.analyze = Zl.analyze),
      (pt.contrast = Hh),
      (pt.deltaE = qh),
      (pt.distance = Uh),
      (pt.limits = Zl.limits),
      (pt.valid = Kh),
      (pt.scales = Xh),
      (pt.colors = wl),
      (pt.brewer = Zh)
    var Jh = pt
    return Jh
  })
})($c)
var Gm = $c.exports
const ot = Hm(Gm),
  Vm = {
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
        dt(() => {
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
  Wm = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  qm = { class: "prose text-center" },
  Um = x("br", null, null, -1),
  Ym = { href: "/pricing" },
  Km = { id: "cta" },
  ea = {
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
                  g = document.createElement("div")
                g.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (g.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  p.appendChild(g)
                let m = p.getElementsByTagName("input")
                for (let E = 0; E < m.length; E++) m[E].style.display = "none"
                let k = p.getElementsByTagName("textarea")[0]
                k.style.display = "none"
                let v = document.getElementById("submitButton")
                v.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        ce(),
        Pe(
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
            x("div", qm, [
              x(
                "h4",
                { class: N(["text-2xl", t(e.brightness)]) },
                [
                  Ie(" Piqued your interest?"),
                  Um,
                  Ie(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              x("a", Ym, [
                x(
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
              x(
                "h4",
                { class: N(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              x("form", Km, [
                x("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: N(["rounded p-2 w-full", n]),
                }),
                x("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: N(["rounded p-2 w-full mt-3", n]),
                }),
                x("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: N(["rounded p-2 w-full mt-3", n]),
                }),
                x(
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
  Xm = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  Zm = { class: "flex flex-col items-center justify-center w-full" },
  Jm = { viewBox: "0 0 36 36", class: "chart" },
  Qm = Jn(() =>
    x(
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
  e1 = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  t1 = Jn(() =>
    x(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  n1 = Jn(() =>
    x(
      "p",
      null,
      [
        Ie(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        x("b", null, "315 KB"),
        Ie(". That's half of the classic SNES game "),
        x("em", null, "The Legend of Zelda: A Link to The Past"),
        Ie(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  r1 = Jn(() => x("p", null, "You want fast? Let's make it happen.", -1)),
  s1 = { id: "speedTable" },
  a1 = Jn(() =>
    x(
      "colgroup",
      null,
      [
        x("col", { style: { width: "30%" } }),
        x("col", { style: { width: "70%" } }),
      ],
      -1,
    ),
  ),
  i1 = { class: "flex" },
  l1 = { class: "flex" },
  o1 = Jn(() =>
    x(
      "tbody",
      null,
      [
        x("tr", null, [
          x("td", null, "Huge, resource-heavy images"),
          x("td", null, [
            Ie(" Optimize your images. "),
            x("b", null, "A lot. "),
            Ie(
              "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
            ),
          ]),
        ]),
        x("tr", null, [
          x("td", null, "Unused code, plugins, and assets"),
          x(
            "td",
            null,
            " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
          ),
        ]),
        x("tr", null, [
          x("td", null, "Inefficient, resource-heavy platforms"),
          x(
            "td",
            null,
            " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
          ),
        ]),
        x("tr", null, [
          x("td", null, "Uncached resources"),
          x(
            "td",
            null,
            " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
          ),
        ]),
      ],
      -1,
    ),
  ),
  u1 = Jn(() => x("div", { class: "h-6" }, null, -1)),
  c1 = {
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
  d1 = Object.assign(c1, {
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
        dt(() => {
          l(t.brightness)
        }),
        en(
          () => t.brightness,
          (o, f) => {
            l(o)
          },
        ),
        (o, f) => (
          ce(),
          Pe("div", Xm, [
            x("div", Zm, [
              x(
                "div",
                { id: "perfChart", class: N(r(e.brightness)) },
                [
                  (ce(),
                  Pe("svg", Jm, [
                    Qm,
                    x(
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
                      e1,
                    ),
                  ])),
                  x(
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
              x(
                "p",
                {
                  class: N(["text-sm italic opacity-50 mt-3", a(e.brightness)]),
                },
                [
                  Ie(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  x(
                    "a",
                    { href: "", class: N(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              x(
                "div",
                {
                  class: N([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  x(
                    "h2",
                    { class: N(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  x(
                    "h2",
                    { class: N(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  t1,
                  n1,
                  r1,
                  x("h3", { class: N(a(e.brightness)) }, "How I help", 2),
                  x("table", s1, [
                    a1,
                    x("thead", null, [
                      x("tr", null, [
                        x("th", null, [
                          x("div", i1, [
                            x(
                              "h4",
                              { class: N([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ie(" Problem "),
                                he(
                                  ye(om),
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
                        x("th", null, [
                          x("div", l1, [
                            x(
                              "h4",
                              { class: N([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ie(" What I can do "),
                                he(
                                  ye(am),
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
                    o1,
                  ]),
                ],
                2,
              ),
              u1,
              he(ea, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  f1 = Zn(d1, [["__scopeId", "data-v-8a92440e"]]),
  p1 = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  h1 = { class: "lg:w-6/12 sm:w-12/12" },
  g1 = x(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  v1 = x("p", null, [x("b", null, " Don't worry, I can help!")], -1),
  m1 = x(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  b1 = { class: "flex items-center w-full" },
  y1 = x(
    "p",
    null,
    [
      Ie(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      x("em", null, "very"),
      Ie(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  w1 = x("div", { class: "h-3" }, null, -1),
  x1 = { class: "flex items-center w-full" },
  S1 = x(
    "p",
    null,
    [
      Ie(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      x("em", null, "do"),
      Ie(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  E1 = x("div", { class: "h-3" }, null, -1),
  _1 = { class: "flex items-center w-full" },
  C1 = x(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  T1 = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  P1 = { class: "prose text-center" },
  k1 = x("div", { class: "h-3" }, null, -1),
  M1 = x("div", { class: "h-3" }, null, -1),
  $1 = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      pe(9274)
      const t = pe(4709),
        n = pe(new Date("2023-10-01")),
        r = pe(new Date()),
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
        ce(),
        Pe("div", p1, [
          x("div", h1, [
            x(
              "h2",
              { class: N(["text-left text-5xl", l(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            x(
              "p",
              {
                class: N([
                  "text-left text-sm italic opacity-50 mt-3",
                  l(e.brightness),
                ]),
              },
              [
                Ie(" Website already secure? "),
                x("b", null, [
                  x(
                    "a",
                    { href: "", class: N(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  Ie(" are you?"),
                ]),
              ],
              2,
            ),
            x(
              "hr",
              { class: N(["mb-5 mt-1 w-6/12 opacity-25", l(e.brightness)]) },
              null,
              2,
            ),
            x(
              "div",
              { class: N(["prose", l(e.brightness)]) },
              [
                g1,
                v1,
                m1,
                x(
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
                    x("div", b1, [
                      he(
                        ye(Es),
                        { class: N(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      x(
                        "h4",
                        { class: N(["font-bold m-0", l(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    y1,
                  ],
                  2,
                ),
                w1,
                x(
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
                    x("div", x1, [
                      he(
                        ye(Es),
                        { size: "2rem", class: N(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      x(
                        "h4",
                        { class: N(["font-bold m-0", l(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    S1,
                  ],
                  2,
                ),
                E1,
                x(
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
                    x("div", _1, [
                      he(
                        ye(Es),
                        { class: N(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      x(
                        "h4",
                        { class: N(["font-bold m-0", l(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    C1,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          x("div", T1, [
            x(
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
                x("div", P1, [
                  x(
                    "h3",
                    {
                      class: N([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    Mt(a(s.value)) + "+ ",
                    3,
                  ),
                  x(
                    "h3",
                    { class: N(["text-xl", l(e.brightness)]) },
                    [
                      Ie(" attacks blocked on "),
                      x(
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
                  x(
                    "p",
                    {
                      class: N(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  x(
                    "p",
                    {
                      class: N(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    [
                      x(
                        "a",
                        { href: "", class: N(i(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      Ie(" about the Bazaar project "),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            k1,
            x("hr", { class: N(["opacity-50", l(e.brightness)]) }, null, 2),
            M1,
            he(ea, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  I1 = {
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
        dt(() => {
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
  O1 = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  A1 = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  L1 = { class: "flex w-full" },
  N1 = { class: "flex w-full pt-4 gap-2" },
  B1 = { class: "w-6/12" },
  R1 = { class: "w-6/12" },
  z1 = { class: "w-full flex" },
  F1 = { class: "w-6/12" },
  j1 = { class: "w-6/12 pb-3" },
  D1 = x("em", null, "huge", -1),
  H1 = x("div", { class: "h-6" }, null, -1),
  G1 = {
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
        r = pe(!1),
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
          for (let g = 1; g < c.length; g++)
            g % 2 == 0
              ? (c[g].style.backgroundColor = p.brighten(0))
              : (c[g].style.backgroundColor = p.brighten(0.2))
        },
        o = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        dt(() => {
          l(t.brightness)
        }),
        en(
          () => t.brightness,
          (f, c) => {
            l(f)
          },
        ),
        (f, c) => (
          ce(),
          Pe("div", O1, [
            x("div", A1, [
              x(
                "h2",
                { class: N(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              x(
                "h3",
                { class: N(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              x(
                "h4",
                { class: N(i(e.brightness)) },
                [
                  Ie(" What are the "),
                  x(
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
              x(
                "p",
                { class: N(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              x(
                "p",
                { class: N(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              x(
                "h4",
                { class: N(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              x(
                "p",
                { class: N(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              x(
                "p",
                { class: N(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              x("div", L1, [
                x(
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
                    r.value ? (ce(), tt(ye(Mc), { key: 0 })) : lt("", !0),
                    r.value ? lt("", !0) : (ce(), tt(ye(Jv), { key: 1 })),
                    Ie(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              x("div", N1, [
                x("div", B1, [
                  x(
                    "button",
                    { class: N(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (ce(), tt(ye(Yo), { key: 0 })) : lt("", !0)],
                    2,
                  ),
                ]),
                x("div", R1, [
                  x(
                    "button",
                    { class: N(["rounded px-5 py-2 w-full", a.value]) },
                    [r.value ? (ce(), tt(ye(ci), { key: 0 })) : lt("", !0)],
                    2,
                  ),
                ]),
              ]),
              x(
                "h4",
                { class: N(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              x("div", z1, [
                x("div", F1, [
                  x(
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
                    [Ie(" Submit "), he(ye(Yo))],
                    2,
                  ),
                ]),
                x("div", j1, [
                  x(
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
                    [Ie(" Cancel "), he(ye(ci))],
                    2,
                  ),
                ]),
              ]),
              x(
                "p",
                { class: N(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              x(
                "p",
                { class: N(i(e.brightness)) },
                [
                  Ie(" Changes like these may seem small, but they make a "),
                  D1,
                  Ie(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            H1,
            he(ea, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  V1 = ["onMouseover"],
  W1 = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = pe([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 2, title: "Design Overhaul", icon: "ShowerHead" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = pe(0)
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
        ce(),
        tt(ye(Vv), null, {
          default: it(() => [
            he(
              ye(Wv),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: it(() => [
                  (ce(!0),
                  Pe(
                    Ze,
                    null,
                    An(
                      t.value,
                      (l) => (
                        ce(),
                        tt(
                          ye(qv),
                          {
                            key: l.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: it(({ selected: o }) => [
                              x(
                                "div",
                                {
                                  class: N([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, o, ye(n), l.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (f) =>
                                    Et(n) ? (n.value = l.id) : (n = l.id),
                                  onMouseleave:
                                    i[0] ||
                                    (i[0] = (f) =>
                                      Et(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  l.id == 0
                                    ? (ce(),
                                      tt(
                                        ye(Es),
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
                                    ? (ce(),
                                      tt(
                                        ye(em),
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
                                    ? (ce(),
                                      tt(
                                        ye(im),
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
                                    ? (ce(),
                                      tt(
                                        ye(sm),
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
                                    ? (ce(),
                                      tt(
                                        ye(Qv),
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
                                    ? (ce(),
                                      tt(
                                        ye(Mc),
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
                                  x(
                                    "p",
                                    {
                                      class: N([
                                        "font-semibold cursor-pointer",
                                        s(e.brightness, o),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    Mt(l.title),
                                    3,
                                  ),
                                ],
                                42,
                                V1,
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
            he(
              ye(Uv),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: it(() => [
                  he(
                    ye(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: it(() => [
                        he(f1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    ye(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: it(() => [
                        he($1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    ye(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: it(() => [
                        he(I1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    ye(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: it(() => [
                        he(Wm, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    ye(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: it(() => [
                        he(Vm, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    ye(ur),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: it(() => [
                        he(G1, { brightness: e.brightness }, null, 8, [
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
  q1 = { href: "/pricing" },
  U1 = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = pe(!1)
      dt(() => {
        const r = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", r),
          Bn(() => {
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
        ce(),
        Pe(
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
            x(
              "p",
              { class: N(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            x("a", q1, [
              x(
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
  Tr = (e) => (Ii("data-v-e20b9d11"), (e = e()), Oi(), e),
  Y1 = { class: "flex-col" },
  K1 = { class: "prose py-5 flex-col w-full" },
  X1 = Tr(() => x("br", null, null, -1)),
  Z1 = Tr(() => x("br", null, null, -1)),
  J1 = { class: "flex" },
  Q1 = { class: "w-6/12" },
  eb = ["name", "checked", "onClick"],
  tb = { class: "w-6/12" },
  nb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  rb = { class: "flex-col gap-4" },
  sb = { class: "flex items-center" },
  ab = ["name", "checked", "onClick"],
  ib = { key: 0 },
  lb = { key: 1 },
  ob = { class: "" },
  ub = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  cb = { class: "flex-col" },
  db = { class: "flex justify-between" },
  fb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  pb = { class: "gap-4 mt-4", name: "pricing" },
  hb = ["value"],
  gb = ["value"],
  vb = { class: "flex gap-4", id: "leftInputs" },
  mb = { class: "flex gap-4", id: "rightInputs" },
  bb = Tr(() => x("br", null, null, -1)),
  yb = Tr(() => x("br", null, null, -1)),
  wb = Tr(() => x("br", null, null, -1)),
  xb = Tr(() => x("br", null, null, -1)),
  Sb = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (j) => {
          j.preventDefault()
          const ie = "pricing"
          let V = document.getElementsByName("name")[0].value,
            Ue = document.getElementsByName("email")[0].value,
            Te = document.getElementsByName("website")[0].value,
            Qe = document.getElementsByName("notes")[0].value,
            et = document.getElementsByName("services")[0].value,
            Kt = document.getElementsByName("total")[0].value,
            Ft = window.location.href,
            Tt = new XMLHttpRequest()
          Tt.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            Tt.setRequestHeader("Content-Type", "application/json"),
            Tt.send(
              JSON.stringify({
                form: ie,
                name: V,
                email: Ue,
                website: Te,
                notes: Qe,
                services: et,
                total: Kt,
                referrer: Ft,
              }),
            ),
            (Tt.onloadend = function () {
              if (
                (console.log(
                  `Status: ${Tt.status}, Response: ${Tt.responseText}`,
                ),
                Tt.status == 200)
              ) {
                let st = document.getElementsByName(ie)[0],
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
                  st.appendChild(z)
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
        l = pe({
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
        g = me(
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
        v = me(
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
        D = pe([
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
          if (j.title === "Speed") return g.value
          if (j.title === "Security") return m.value
          if (j.title === "Accessibility") return k.value
          if (j.title === "Design Overhaul") return v.value
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
        _e = (j) => {
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
        ce(),
        Pe("div", Y1, [
          x("div", K1, [
            x(
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
            x(
              "p",
              { class: N(["text-center", i(n.brightness)]) },
              [
                Ie(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                X1,
                Z1,
                Ie(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                x(
                  "a",
                  {
                    href: "/contact",
                    class: N(["font-bold", r(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                Ie(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (ce(!0),
          Pe(
            Ze,
            null,
            An(
              D.value,
              (V, Ue) => (
                ce(),
                Pe(
                  "div",
                  {
                    key: Ue,
                    class: N([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      _e(n.brightness),
                    ]),
                  },
                  [
                    x("div", J1, [
                      x("div", Q1, [
                        x(
                          "div",
                          {
                            class: N([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              i(n.brightness),
                            ]),
                          },
                          [
                            x(
                              "input",
                              {
                                type: "checkbox",
                                name: V.title,
                                checked: G(V),
                                onClick: (Te) => q(V),
                                class: N([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              eb,
                            ),
                            x("h3", null, Mt(V.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      x("div", tb, [
                        x(
                          "h3",
                          {
                            class: N([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            ge(V) != Math.floor(Q(V))
                              ? (ce(), Pe("span", nb, "$" + Mt(ge(V)), 1))
                              : lt("", !0),
                            Ie("$" + Mt(Q(V)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    x(
                      "hr",
                      { class: N(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    x("div", rb, [
                      (ce(!0),
                      Pe(
                        Ze,
                        null,
                        An(
                          V.services,
                          (Te, Qe) => (
                            ce(),
                            Pe(
                              "div",
                              {
                                key: Qe,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                x("div", sb, [
                                  x(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: Te.title,
                                      checked: Te.enabled,
                                      onClick: (et) =>
                                        (Te.enabled = !Te.enabled),
                                      class: N([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    ab,
                                  ),
                                  x(
                                    "p",
                                    { class: N(["", i(n.brightness)]) },
                                    [
                                      Te.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (ce(),
                                          Pe("b", ib, [
                                            x("em", null, Mt(Te.title), 1),
                                          ]))
                                        : (ce(),
                                          Pe("span", lb, Mt(Te.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                x("div", ob, [
                                  x(
                                    "h3",
                                    {
                                      class: N([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      Te.price !=
                                      Math.floor(Te.price * V.discount)
                                        ? (ce(),
                                          Pe("span", ub, "$" + Mt(Te.price), 1))
                                        : lt("", !0),
                                      Ie("$" + Mt(Te.price * V.discount), 1),
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
          x("hr", { class: N(["my-4 w-full", r(n.brightness)]) }, null, 2),
          x("div", cb, [
            x("div", db, [
              x(
                "h3",
                { class: N(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              x(
                "h3",
                { class: N(["text-4xl text-bold", r(n.brightness)]) },
                [
                  X.value != Math.floor(X.value)
                    ? (ce(), Pe("span", fb, "$" + Mt(X.value), 1))
                    : lt("", !0),
                  Ie("$" + Mt(X.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          x("form", pb, [
            x(
              "input",
              { type: "hidden", name: "services", value: xe.value },
              null,
              8,
              hb,
            ),
            x(
              "input",
              { type: "hidden", name: "total", value: X.value },
              null,
              8,
              gb,
            ),
            x("div", vb, [
              x(
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
              x(
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
            x("div", mb, [
              x(
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
              x(
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
            x(
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
          x(
            "p",
            { class: N(["text-center mt-4", i(n.brightness)]) },
            [
              Ie(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              bb,
              yb,
              Ie(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              x(
                "a",
                { href: "/contact", class: N(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              Ie(" and we can get that figured out."),
              wb,
              xb,
              Ie("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  Eb = Zn(Sb, [["__scopeId", "data-v-e20b9d11"]]),
  _b = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        ce(), tt(Eb, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  Cb = { class: "flex-col" },
  Tb = { class: "py-5 flex-col w-full" },
  Pb = { id: "cta" },
  kb = {
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
                  g = document.createElement("div")
                g.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (g.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  p.appendChild(g)
                let m = p.getElementsByTagName("input")
                for (let E = 0; E < m.length; E++) m[E].style.display = "none"
                let k = p.getElementsByTagName("textarea")[0]
                k.style.display = "none"
                let v = document.getElementById("submitButton")
                v.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        ce(),
        Pe("div", Cb, [
          x("div", Tb, [
            x(
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
          x("form", Pb, [
            x(
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
            x(
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
            x(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: N(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            x(
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
  Mb = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Ic =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  $b =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  Ib =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  Ob =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  Ab =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  Lb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  Nb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  Bb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  Rb =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  zb =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  Fb =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843749607.webp",
  jb =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843736104.webp",
  Db =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843718572.webp",
  Hb =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843702718.webp",
  pn =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  hn = '</title><path d="',
  gn = '"/></svg>',
  Ar = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return pn + "Bootstrap" + hn + this.path + gn
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  Gb = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return pn + "Cloudflare" + hn + this.path + gn
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  Vb = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return pn + "Figma" + hn + this.path + gn
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  Wb = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return pn + "JavaScript" + hn + this.path + gn
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  qb = {
    title: "NGINX",
    slug: "nginx",
    get svg() {
      return pn + "NGINX" + hn + this.path + gn
    },
    path: "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",
    source: "https://www.nginx.com/press/",
    hex: "009639",
    guidelines: "https://www.nginx.com/press/",
  },
  Ko = {
    title: "PHP",
    slug: "php",
    get svg() {
      return pn + "PHP" + hn + this.path + gn
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  Ub = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return pn + "Tailwind CSS" + hn + this.path + gn
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  Xo = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return pn + "Vue.js" + hn + this.path + gn
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
  En = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return pn + "WordPress" + hn + this.path + gn
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  Yb = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  Kb = { class: "py-5 flex-col w-full" },
  Xb = { class: "prose" },
  Zb = ["onMouseover", "onClick"],
  Jb = { class: "image-container" },
  Qb = ["src", "alt"],
  e2 = { class: "flex gap-2 items-center" },
  t2 = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  n2 = ["d"],
  r2 = {
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
        s = pe([
          {
            icons: [En, Ko, Vb],
            title: "BlenderNation Bazaar",
            image: Ic,
            link: "/portfolio/bazaar",
          },
          {
            icons: [Xo, qb, Gb],
            title: "OKC South Stake",
            image: $b,
            link: "/portfolio/okc-south-stake",
          },
        ]),
        a = pe([
          {
            icons: [En, Wb],
            title: "Build On Your Land",
            image: Ib,
            link: "/portfolio/build-on-your-land",
          },
          {
            icons: [En, Ko],
            title: "Stuart Pipe and Hose",
            image: Ob,
            link: "/portfolio/stuart-pipe",
          },
          {
            icons: [En, Ar],
            title: "Atlanta Floor One",
            image: Ab,
            link: "/portfolio/atlanta-floor-one",
          },
          {
            icons: [En, Ar],
            title: "Swim State Pool",
            image: Lb,
            link: "/portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [Xo, Ub],
            image: Nb,
            link: "/portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [En, Ar],
            image: Bb,
            link: "/portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [En, Ar],
            image: Rb,
            link: "/portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [En, Ar],
            image: zb,
            link: "/portfolio/aris-search",
          },
        ]),
        i = pe(null)
      return (l, o) => (
        ce(),
        Pe("div", Yb, [
          x("div", Kb, [
            x("span", Xb, [
              x(
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
              x(
                "p",
                { class: N(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. Check out some of my work below! ",
                2,
              ),
              x(
                "h3",
                { class: N(["text-2xl text-center", n(t.brightness)]) },
                " Full Sites (I designed and developed) ",
                2,
              ),
            ]),
          ]),
          (ce(!0),
          Pe(
            Ze,
            null,
            An(
              [s.value, a.value],
              (f) => (
                ce(),
                Pe(
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
                    (ce(!0),
                    Pe(
                      Ze,
                      null,
                      An(
                        f,
                        (c) => (
                          ce(),
                          Pe(
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
                              x("div", Jb, [
                                x(
                                  "img",
                                  {
                                    src: c.image,
                                    alt: c.title,
                                    class:
                                      "bg-slate-200 object-contain w-full rounded-t-xl",
                                  },
                                  null,
                                  8,
                                  Qb,
                                ),
                              ]),
                              x("div", null, [
                                x("div", null, [
                                  x(
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
                                      x("div", null, [
                                        x(
                                          "h5",
                                          {
                                            class: N([
                                              "text-xl m-0 p-0",
                                              r(t.brightness),
                                            ]),
                                          },
                                          Mt(c.title),
                                          3,
                                        ),
                                      ]),
                                      x("div", e2, [
                                        (ce(!0),
                                        Pe(
                                          Ze,
                                          null,
                                          An(
                                            c.icons,
                                            (p, g) => (
                                              ce(),
                                              Pe(
                                                "div",
                                                {
                                                  key: g,
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
                                                  (ce(),
                                                  Pe("svg", t2, [
                                                    x(
                                                      "path",
                                                      { d: p.path },
                                                      null,
                                                      8,
                                                      n2,
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
                            Zb,
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
  s2 = Zn(r2, [["__scopeId", "data-v-2bda4711"]])
function Zo(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function qi(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Zo(t[n]) && Zo(e[n]) && Object.keys(t[n]).length > 0 && qi(e[n], t[n])
    })
}
const Oc = {
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
function un() {
  const e = typeof document < "u" ? document : {}
  return qi(e, Oc), e
}
const a2 = {
  document: Oc,
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
  return qi(e, a2), e
}
function i2(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  )
}
function l2(e) {
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
function di(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function Os() {
  return Date.now()
}
function o2(e) {
  const t = zt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function u2(e, t) {
  t === void 0 && (t = "x")
  const n = zt()
  let r, s, a
  const i = o2(e)
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
function c2(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function Lt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !c2(r)) {
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
function Ac(e) {
  let { swiper: t, targetPosition: n, side: r } = e
  const s = zt(),
    a = -t.translate
  let i = null,
    l
  const o = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(t.cssModeFrameID)
  const f = n > a ? "next" : "prev",
    c = (g, m) => (f === "next" && g >= m) || (f === "prev" && g <= m),
    p = () => {
      ;(l = new Date().getTime()), i === null && (i = l)
      const g = Math.max(Math.min((l - i) / o, 1), 0),
        m = 0.5 - Math.cos(g * Math.PI) / 2
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
  return n.classList.add(...(Array.isArray(t) ? t : i2(t))), n
}
function d2(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function f2(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function $n(e, t) {
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
function Lc(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement)
  return n
}
function fi(e, t, n) {
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
let Fa
function p2() {
  const e = zt(),
    t = un()
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
function Nc() {
  return Fa || (Fa = p2()), Fa
}
let ja
function h2(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = Nc(),
    r = zt(),
    s = r.navigator.platform,
    a = t || r.navigator.userAgent,
    i = { ios: !1, android: !1 },
    l = r.screen.width,
    o = r.screen.height,
    f = a.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = a.match(/(iPad).*OS\s([\d_]+)/)
  const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = s === "Win32"
  let k = s === "MacIntel"
  const v = [
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
      v.indexOf(`${l}x${o}`) >= 0 &&
      ((c = a.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (k = !1)),
    f && !m && ((i.os = "android"), (i.android = !0)),
    (c || g || p) && ((i.os = "ios"), (i.ios = !0)),
    i
  )
}
function g2(e) {
  return e === void 0 && (e = {}), ja || (ja = h2(e)), ja
}
let Da
function v2() {
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
function m2() {
  return Da || (Da = v2()), Da
}
function b2(e) {
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
            const { width: g, height: m } = t
            let k = g,
              v = m
            p.forEach((E) => {
              let { contentBoxSize: T, contentRect: w, target: y } = E
              ;(y && y !== t.el) ||
                ((k = w ? w.width : (T[0] || T).inlineSize),
                (v = w ? w.height : (T[0] || T).blockSize))
            }),
              (k !== g || v !== m) && l()
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
function y2(e) {
  let { swiper: t, extendParams: n, on: r, emit: s } = e
  const a = [],
    i = zt(),
    l = function (c, p) {
      p === void 0 && (p = {})
      const g = i.MutationObserver || i.WebkitMutationObserver,
        m = new g((k) => {
          if (t.__preventObserver__) return
          if (k.length === 1) {
            s("observerUpdate", k[0])
            return
          }
          const v = function () {
            s("observerUpdate", k[0])
          }
          i.requestAnimationFrame
            ? i.requestAnimationFrame(v)
            : i.setTimeout(v, 0)
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
          const c = Lc(t.hostEl)
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
var w2 = {
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
function x2() {
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
        parseInt($n(r, "padding-left") || 0, 10) -
        parseInt($n(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt($n(r, "padding-top") || 0, 10) -
        parseInt($n(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function S2() {
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
  let g = []
  const m = [],
    k = []
  let v = n.slidesOffsetBefore
  typeof v == "function" && (v = n.slidesOffsetBefore.call(e))
  let E = n.slidesOffsetAfter
  typeof E == "function" && (E = n.slidesOffsetAfter.call(e))
  const T = e.snapGrid.length,
    w = e.slidesGrid.length
  let y = n.spaceBetween,
    $ = -v,
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
      !(c[D] && $n(Q, "display") === "none"))
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
          q = e.isHorizontal() ? fi(Q, "width", !0) : fi(Q, "height", !0)
        else {
          const _e = t(ge, "width"),
            j = t(ge, "padding-left"),
            ie = t(ge, "padding-right"),
            V = t(ge, "margin-left"),
            Ue = t(ge, "margin-right"),
            Te = ge.getPropertyValue("box-sizing")
          if (Te && Te === "border-box") q = _e + V + Ue
          else {
            const { clientWidth: Qe, offsetWidth: et } = Q
            q = _e + j + ie + V + Ue + (et - Qe)
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
            I % n.slidesPerGroup === 0 && g.push($),
            m.push($))
          : (n.roundLengths && ($ = Math.floor($)),
            (I - Math.min(e.params.slidesPerGroupSkip, I)) %
              e.params.slidesPerGroup ===
              0 && g.push($),
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
    ne && e.grid.updateWrapperSize(q, g),
    !n.centeredSlides)
  ) {
    const D = []
    for (let Q = 0; Q < g.length; Q += 1) {
      let ge = g[Q]
      n.roundLengths && (ge = Math.floor(ge)),
        g[Q] <= e.virtualSize - a && D.push(ge)
    }
    ;(g = D),
      Math.floor(e.virtualSize - a) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - a)
  }
  if (o && n.loop) {
    const D = k[0] + y
    if (n.slidesPerGroup > 1) {
      const Q = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        ge = D * n.slidesPerGroup
      for (let X = 0; X < Q; X += 1) g.push(g[g.length - 1] + ge)
    }
    for (let Q = 0; Q < e.virtual.slidesBefore + e.virtual.slidesAfter; Q += 1)
      n.slidesPerGroup === 1 && g.push(g[g.length - 1] + D),
        m.push(m[m.length - 1] + D),
        (e.virtualSize += D)
  }
  if ((g.length === 0 && (g = [0]), y !== 0)) {
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
    g = g.map((ge) => (ge <= 0 ? -v : ge > Q ? Q + E : ge))
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
      g.forEach((ge, X) => {
        g[X] = ge - Q
      }),
        m.forEach((ge, X) => {
          m[X] = ge + Q
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: g,
      slidesGrid: m,
      slidesSizesGrid: k,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ms(r, "--swiper-centered-offset-before", `${-g[0]}px`),
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
    g.length !== T &&
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
function E2(e) {
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
function _2() {
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
function C2(e) {
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
      g =
        (i - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (f.swiperSlideSize + l),
      m = -(i - c),
      k = m + t.slidesSizesGrid[o],
      v = m >= 0 && m <= t.size - t.slidesSizesGrid[o]
    ;((m >= 0 && m < t.size - 1) ||
      (k > 1 && k <= t.size) ||
      (m <= 0 && k >= t.size)) &&
      (t.visibleSlides.push(f),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      v && r[o].classList.add(n.slideFullyVisibleClass),
      (f.progress = s ? -p : p),
      (f.originalProgress = s ? -g : g)
  }
}
function T2(e) {
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
      g = t.slidesGrid[c],
      m = t.slidesGrid[p],
      k = t.slidesGrid[t.slidesGrid.length - 1],
      v = Math.abs(e)
    v >= g ? (l = (v - g) / k) : (l = (v + k - m) / k), l > 1 && (l -= 1)
  }
  Object.assign(t, { progress: s, progressLoop: l, isBeginning: a, isEnd: i }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !o && t.emit("reachBeginning toEdge"),
    i && !f && t.emit("reachEnd toEdge"),
    ((o && !a) || (f && !i)) && t.emit("fromEdge"),
    t.emit("progress", s)
}
function P2() {
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
      : ((c = f2(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c && (c = t[0]),
        c && c.classList.add(n.slideNextClass),
        (f = d2(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !f === 0 && (f = t[t.length - 1]),
        f && f.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses()
}
const _s = (e, t) => {
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
  Ha = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  pi = (e) => {
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
          l.includes(o.column) && Ha(e, f)
        })
      return
    }
    const a = s + r - 1
    if (e.params.rewind || e.params.loop)
      for (let i = s - t; i <= a + t; i += 1) {
        const l = ((i % n) + n) % n
        ;(l < s || l > a) && Ha(e, l)
      }
    else
      for (let i = Math.max(s - t, 0); i <= Math.min(a + t, n - 1); i += 1)
        i !== s && (i > a || i < s) && Ha(e, i)
  }
function k2(e) {
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
function M2(e) {
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
  if ((typeof o > "u" && (o = k2(t)), r.indexOf(n) >= 0)) f = r.indexOf(n)
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
  let g
  if (t.virtual && s.virtual.enabled && s.loop) g = c(o)
  else if (p) {
    const m = t.slides.filter((v) => v.column === o)[0]
    let k = parseInt(m.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(k) && (k = Math.max(t.slides.indexOf(m), 0)),
      (g = Math.floor(k / s.grid.rows))
  } else if (t.slides[o]) {
    const m = t.slides[o].getAttribute("data-swiper-slide-index")
    m ? (g = parseInt(m, 10)) : (g = o)
  } else g = o
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: f,
    previousRealIndex: i,
    realIndex: g,
    previousIndex: a,
    activeIndex: o,
  }),
    t.initialized && pi(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (i !== g && t.emit("realIndexChange"), t.emit("slideChange"))
}
function $2(e, t) {
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
var I2 = {
  updateSize: x2,
  updateSlides: S2,
  updateAutoHeight: E2,
  updateSlidesOffset: _2,
  updateSlidesProgress: C2,
  updateProgress: T2,
  updateSlidesClasses: P2,
  updateActiveIndex: M2,
  updateClickedSlide: $2,
}
function O2(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: r, translate: s, wrapperEl: a } = t
  if (n.virtualTranslate) return r ? -s : s
  if (n.cssMode) return s
  let i = u2(a, e)
  return (i += t.cssOverflowAdjustment()), r && (i = -i), i || 0
}
function A2(e, t) {
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
function L2() {
  return -this.snapGrid[0]
}
function N2() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function B2(e, t, n, r, s) {
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
          Ac({ swiper: a, targetPosition: -c, side: p ? "left" : "top" }), !0
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
            (a.onTranslateToWrapperTransitionEnd = function (g) {
              !a ||
                a.destroyed ||
                (g.target === this &&
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
var R2 = {
  getTranslate: O2,
  setTranslate: A2,
  minTranslate: L2,
  maxTranslate: N2,
  translateTo: B2,
}
function z2(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function Bc(e) {
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
function F2(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Bc({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function j2(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Bc({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var D2 = { setTransition: z2, transitionStart: F2, transitionEnd: j2 }
function H2(e, t, n, r, s) {
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
    rtlTranslate: g,
    wrapperEl: m,
    enabled: k,
  } = a
  if ((a.animating && l.preventInteractionOnTransition) || (!k && !r && !s))
    return !1
  const v = Math.min(a.params.slidesPerGroupSkip, i)
  let E = v + Math.floor((i - v) / a.params.slidesPerGroup)
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
      (g
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
    (g && -T === a.translate) || (!g && T === a.translate))
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
      $ = g ? T : -T
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
          Ac({ swiper: a, targetPosition: $, side: y ? "left" : "top" }), !0
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
function G2(e, t, n, r) {
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
        const g = i * s.params.grid.rows
        l = s.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === g,
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
        const g = f
          ? l < s.activeIndex
            ? "prev"
            : "next"
          : l - s.activeIndex - 1 < s.params.slidesPerView
            ? "next"
            : "prev"
        s.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? l + 1 : l - o + 1,
          slideRealIndex: g === "next" ? s.realIndex : void 0,
        })
      }
      if (a) {
        const g = i * s.params.grid.rows
        i = s.slides.filter(
          (m) => m.getAttribute("data-swiper-slide-index") * 1 === g,
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
function V2(e, t, n) {
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
function W2(e, t, n) {
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
  function g(T) {
    return T < 0 ? -Math.floor(Math.abs(T)) : Math.floor(T)
  }
  const m = g(p),
    k = a.map((T) => g(T))
  let v = a[k.indexOf(m) - 1]
  if (typeof v > "u" && s.cssMode) {
    let T
    a.forEach((w, y) => {
      m >= w && (T = y)
    }),
      typeof T < "u" && (v = a[T > 0 ? T - 1 : T])
  }
  let E = 0
  if (
    (typeof v < "u" &&
      ((E = i.indexOf(v)),
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
function q2(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const r = this
  return r.slideTo(r.activeIndex, e, t, n)
}
function U2(e, t, n, r) {
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
function Y2() {
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
            di(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
        : s > e.slides.length - r
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              Qt(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            di(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
  } else e.slideTo(s)
}
var K2 = {
  slideTo: H2,
  slideToLoop: G2,
  slideNext: V2,
  slidePrev: W2,
  slideReset: q2,
  slideToClosest: U2,
  slideToClickedSlide: Y2,
}
function X2(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const s = () => {
      Qt(r, `.${n.slideClass}, swiper-slide`).forEach((p, g) => {
        p.setAttribute("data-swiper-slide-index", g)
      })
    },
    a = t.grid && n.grid && n.grid.rows > 1,
    i = n.slidesPerGroup * (a ? n.grid.rows : 1),
    l = t.slides.length % i !== 0,
    o = a && t.slides.length % n.grid.rows !== 0,
    f = (c) => {
      for (let p = 0; p < c; p += 1) {
        const g = t.isElement
          ? Ls("swiper-slide", [n.slideBlankClass])
          : Ls("div", [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(g)
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
function Z2(e) {
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
      slidesEl: g,
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
  let v = m.slidesPerView
  v === "auto"
    ? (v = o.slidesPerViewDynamic())
    : ((v = Math.ceil(parseFloat(m.slidesPerView, 10))),
      k && v % 2 === 0 && (v = v + 1))
  const E = m.slidesPerGroupAuto ? v : m.slidesPerGroup
  let T = E
  T % E !== 0 && (T += E - (T % E)),
    (T += m.loopAdditionalSlides),
    (o.loopedSlides = T)
  const w = o.grid && m.grid && m.grid.rows > 1
  f.length < v + T
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
    ge = (w ? f[a].column : a) + (k && typeof s > "u" ? -v / 2 + 0.5 : 0)
  if (ge < T) {
    q = Math.max(T - ge, E)
    for (let X = 0; X < T - ge; X += 1) {
      const xe = X - Math.floor(X / D) * D
      if (w) {
        const _e = D - xe - 1
        for (let j = f.length - 1; j >= 0; j -= 1)
          f[j].column === _e && y.push(j)
      } else y.push(D - xe - 1)
    }
  } else if (ge + v > D - T) {
    G = Math.max(ge - (D - T * 2), E)
    for (let X = 0; X < G; X += 1) {
      const xe = X - Math.floor(X / D) * D
      w
        ? f.forEach((_e, j) => {
            _e.column === xe && $.push(j)
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
          g.prepend(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    I &&
      $.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          g.append(f[X]),
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
          _e = o.slidesGrid[L + q] - X
        l
          ? o.setTranslate(o.translate - _e)
          : (o.slideTo(L + q, 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - _e),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - _e)))
      } else if (s) {
        const X = w ? y.length / m.grid.rows : y.length
        o.slideTo(o.activeIndex + X, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate)
      }
    } else if ($.length > 0 && I)
      if (typeof t > "u") {
        const X = o.slidesGrid[L],
          _e = o.slidesGrid[L - G] - X
        l
          ? o.setTranslate(o.translate - _e)
          : (o.slideTo(L - G, 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - _e),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - _e)))
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
function J2() {
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
var Q2 = { loopCreate: X2, loopFix: Z2, loopDestroy: J2 }
function ey(e) {
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
function ty() {
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
var ny = { setGrabCursor: ey, unsetGrabCursor: ty }
function ry(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === un() || r === zt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const s = r.closest(e)
    return !s && !r.getRootNode ? null : s || n(r.getRootNode().host)
  }
  return n(t)
}
function Jo(e, t, n) {
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
function sy(e) {
  const t = this,
    n = un()
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
    Jo(t, r, r.targetTouches[0].pageX)
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
    g = !!(r.target && r.target.shadowRoot)
  if (a.noSwiping && (g ? ry(p, o) : o.closest(p))) {
    t.allowClick = !0
    return
  }
  if (a.swipeHandler && !o.closest(a.swipeHandler)) return
  ;(i.currentX = r.pageX), (i.currentY = r.pageY)
  const m = i.currentX,
    k = i.currentY
  if (!Jo(t, r, m)) return
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
  let v = !0
  o.matches(s.focusableElements) &&
    ((v = !1), o.nodeName === "SELECT" && (s.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(s.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur()
  const E = v && t.allowTouchMove && a.touchStartPreventDefault
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
function ay(e) {
  const t = un(),
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
  const g = a.currentX - a.startX,
    m = a.currentY - a.startY
  if (n.params.threshold && Math.sqrt(g ** 2 + m ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > "u") {
    let I
    ;(n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (r.isScrolling = !1)
      : g * g + m * m >= 25 &&
        ((I = (Math.atan2(Math.abs(m), Math.abs(g)) * 180) / Math.PI),
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
  let k = n.isHorizontal() ? g : m,
    v = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY
  s.oneWayMovement &&
    ((k = Math.abs(k) * (i ? 1 : -1)), (v = Math.abs(v) * (i ? 1 : -1))),
    (a.diff = k),
    (k *= s.touchRatio),
    i && ((k = -k), (v = -v))
  const E = n.touchesDirection
  ;(n.swipeDirection = k > 0 ? "prev" : "next"),
    (n.touchesDirection = v > 0 ? "prev" : "next")
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
function iy(e) {
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
    g = p - n.touchStartTime
  if (t.allowClick) {
    const L = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((L && L[0]) || r.target, L),
      t.emit("tap click", r),
      g < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
  }
  if (
    ((n.lastClickTime = Os()),
    di(() => {
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
  let v = 0,
    E = t.slidesSizesGrid[0]
  for (
    let L = 0;
    L < f.length;
    L += L < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const I = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
    typeof f[L + I] < "u"
      ? (k || (m >= f[L] && m < f[L + I])) && ((v = L), (E = f[L + I] - f[L]))
      : (k || m >= f[L]) && ((v = L), (E = f[f.length - 1] - f[f.length - 2]))
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
  const y = (m - f[v]) / E,
    $ = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
  if (g > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (y >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? T : v + $)
        : t.slideTo(v)),
      t.swipeDirection === "prev" &&
        (y > 1 - i.longSwipesRatio
          ? t.slideTo(v + $)
          : w !== null && y < 0 && Math.abs(y) > i.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(v))
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(v + $)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(T !== null ? T : v + $),
        t.swipeDirection === "prev" && t.slideTo(w !== null ? w : v))
  }
}
function Qo() {
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
function ly(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function oy() {
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
function uy(e) {
  const t = this
  _s(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update()
}
function cy() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const Rc = (e, t) => {
  const n = un(),
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
          Qo,
          !0,
        )
      : e[f]("observerUpdate", Qo, !0),
    s[o]("load", e.onLoad, { capture: !0 })
}
function dy() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = sy.bind(e)),
    (e.onTouchMove = ay.bind(e)),
    (e.onTouchEnd = iy.bind(e)),
    (e.onDocumentTouchStart = cy.bind(e)),
    t.cssMode && (e.onScroll = oy.bind(e)),
    (e.onClick = ly.bind(e)),
    (e.onLoad = uy.bind(e)),
    Rc(e, "on")
}
function fy() {
  Rc(this, "off")
}
var py = { attachEvents: dy, detachEvents: fy }
const eu = (e, t) => e.grid && t.grid && t.grid.rows > 1
function hy() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: s } = e,
    a = r.breakpoints
  if (!a || (a && Object.keys(a).length === 0)) return
  const i = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
  if (!i || e.currentBreakpoint === i) return
  const o = (i in a ? a[i] : void 0) || e.originalParams,
    f = eu(e, r),
    c = eu(e, o),
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
  const g = o.direction && o.direction !== r.direction,
    m = r.loop && (o.slidesPerView !== r.slidesPerView || g),
    k = r.loop
  g && n && e.changeDirection(), Lt(e.params, o)
  const v = e.params.enabled,
    E = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    p && !v ? e.disable() : !p && v && e.enable(),
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
function gy(e, t, n) {
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
var vy = { setBreakpoint: hy, getBreakpoint: gy }
function my(e, t) {
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
function by() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: s, device: a } = e,
    i = my(
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
function yy() {
  const e = this,
    { el: t, classNames: n } = e
  t.classList.remove(...n), e.emitContainerClasses()
}
var wy = { addClasses: by, removeClasses: yy }
function xy() {
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
var Sy = { checkOverflow: xy },
  hi = {
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
function Ey(e, t) {
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
const Ga = {
    eventsEmitter: w2,
    update: I2,
    translate: R2,
    transition: D2,
    slide: K2,
    loop: Q2,
    grabCursor: ny,
    events: py,
    breakpoints: vy,
    checkOverflow: Sy,
    classes: wy,
  },
  Va = {}
let Ui = class an {
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
    const i = un()
    if (
      n.el &&
      typeof n.el == "string" &&
      i.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        i.querySelectorAll(n.el).forEach((p) => {
          const g = Lt({}, n, { el: p })
          c.push(new an(g))
        }),
        c
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = Nc()),
      (l.device = g2({ userAgent: n.userAgent })),
      (l.browser = m2()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules)
    const o = {}
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: Ey(n, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const f = Lt({}, hi, o)
    return (
      (l.params = Lt({}, f, Va, n)),
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
        g
      for (let m = f + 1; m < a.length; m += 1)
        a[m] && !g && ((p += a[m].swiperSlideSize), (c += 1), p > o && (g = !0))
      for (let m = f - 1; m >= 0; m -= 1)
        a[m] && !g && ((p += a[m].swiperSlideSize), (c += 1), p > o && (g = !0))
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
        i.complete && _s(t, i)
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
        rtl: r.dir.toLowerCase() === "rtl" || $n(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || $n(r, "direction") === "rtl"),
        wrongRTL: $n(i, "display") === "-webkit-box",
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
          ? _s(n, a)
          : a.addEventListener("load", (i) => {
              _s(n, i.target)
            })
      }),
      pi(n),
      (n.initialized = !0),
      pi(n),
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
        t !== !1 && ((r.el.swiper = null), l2(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    Lt(Va, t)
  }
  static get extendedDefaults() {
    return Va
  }
  static get defaults() {
    return hi
  }
  static installModule(t) {
    an.prototype.__modules__ || (an.prototype.__modules__ = [])
    const n = an.prototype.__modules__
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => an.installModule(n)), an)
      : (an.installModule(t), an)
  }
}
Object.keys(Ga).forEach((e) => {
  Object.keys(Ga[e]).forEach((t) => {
    Ui.prototype[t] = Ga[e][t]
  })
})
Ui.use([b2, y2])
const zc = [
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
function mr(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Yn(t[r]) && Yn(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : mr(e[r], t[r])
          : (e[r] = t[r])
    })
}
function Fc(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  )
}
function jc(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}
function Dc(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}
function Hc(e) {
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
function _y(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function Cy(e) {
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
      navigation: g,
      scrollbar: m,
      virtual: k,
      thumbs: v,
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
      g &&
      !g.prevEl &&
      !g.nextEl &&
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
    E && v.init() && v.update(!0),
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
      g.init(),
      g.update()),
    s.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    s.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    s.includes("direction") && t.changeDirection(r.direction, !1),
    (L || ne) && t.loopDestroy(),
    (I || ne) && t.loopCreate(),
    t.update()
}
function tu(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    s = {}
  mr(n, hi), (n._emitClasses = !0), (n.init = !1)
  const a = {},
    i = zc.map((o) => o.replace(/_/, "")),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((o) => {
      typeof e[o] > "u" ||
        (i.indexOf(o) >= 0
          ? Yn(e[o])
            ? ((n[o] = {}), (s[o] = {}), mr(n[o], e[o]), mr(s[o], e[o]))
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
function Ty(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: s,
    paginationEl: a,
    scrollbarEl: i,
    swiper: l,
  } = e
  Fc(t) &&
    r &&
    s &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = s),
    (l.originalParams.navigation.prevEl = s)),
    jc(t) &&
      a &&
      ((l.params.pagination.el = a), (l.originalParams.pagination.el = a)),
    Dc(t) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(n)
}
function Py(e, t, n, r, s) {
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
    zc
      .filter((o) => o[0] === "_")
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
const ky = (e) => {
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
function Wa(e, t, n) {
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
function My(e, t, n) {
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
const $y = {
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
        i = pe("swiper"),
        l = pe(null),
        o = pe(!1),
        f = pe(!1),
        c = pe(null),
        p = pe(null),
        g = pe(null),
        m = { value: [] },
        k = { value: [] },
        v = pe(null),
        E = pe(null),
        T = pe(null),
        w = pe(null),
        { params: y, passedParams: $ } = tu(e, !1)
      Wa(n, m, k), (g.value = $), (k.value = m.value)
      const L = () => {
        Wa(n, m, k), (o.value = !0)
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
        (p.value = new Ui(I)),
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
        mr(p.value.params.virtual, q), mr(p.value.originalParams.virtual, q)
      }
      Ri(() => {
        !f.value && p.value && (p.value.emitSlidesClasses(), (f.value = !0))
        const { passedParams: q } = tu(e, !1),
          G = Py(q, g.value, m.value, k.value, (D) => D.props && D.props.key)
        ;(g.value = q),
          (G.length || o.value) &&
            p.value &&
            !p.value.destroyed &&
            Cy({
              swiper: p.value,
              slides: m.value,
              passedParams: q,
              changedParams: G,
              nextEl: v.value,
              prevEl: E.value,
              scrollbarEl: w.value,
              paginationEl: T.value,
            }),
          (o.value = !1)
      }),
        Dt("swiper", p),
        en(l, () => {
          Vs(() => {
            ky(p.value)
          })
        }),
        dt(() => {
          c.value &&
            (Ty(
              {
                el: c.value,
                nextEl: v.value,
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
          ? My(p, q, l.value)
          : (q.forEach((G, D) => {
              G.props || (G.props = {}),
                (G.props.swiperRef = p),
                (G.props.swiperSlideIndex = D)
            }),
            q)
      }
      return () => {
        const { slides: q, slots: G } = Wa(n, m, k)
        return qe(s, { ref: c, class: Hc(i.value) }, [
          G["container-start"],
          qe(a, { class: _y(y.wrapperClass) }, [
            G["wrapper-start"],
            ne(q),
            G["wrapper-end"],
          ]),
          Fc(e) && [
            qe("div", { ref: E, class: "swiper-button-prev" }),
            qe("div", { ref: v, class: "swiper-button-next" }),
          ],
          Dc(e) && qe("div", { ref: w, class: "swiper-scrollbar" }),
          jc(e) && qe("div", { ref: T, class: "swiper-pagination" }),
          G["container-end"],
        ])
      }
    },
  },
  Iy = {
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
        a = pe(null),
        i = pe("swiper-slide"),
        l = pe(!1)
      function o(p, g, m) {
        g === a.value && (i.value = m)
      }
      dt(() => {
        !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
      }),
        Bi(() => {
          r || !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
        }),
        Ri(() => {
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
            class: Hc(`${i.value}`),
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
function Gc(e, t, n, r) {
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
function Oy(e) {
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
  const a = (v) => (Array.isArray(v) ? v : [v]).filter((E) => !!E)
  function i(v) {
    let E
    return v &&
      typeof v == "string" &&
      t.isElement &&
      ((E = t.el.querySelector(v)), E)
      ? E
      : (v &&
          (typeof v == "string" && (E = [...document.querySelectorAll(v)]),
          t.params.uniqueNavElements &&
            typeof v == "string" &&
            E.length > 1 &&
            t.el.querySelectorAll(v).length === 1 &&
            (E = t.el.querySelector(v))),
        v && !E ? v : E)
  }
  function l(v, E) {
    const T = t.params.navigation
    ;(v = a(v)),
      v.forEach((w) => {
        w &&
          (w.classList[E ? "add" : "remove"](...T.disabledClass.split(" ")),
          w.tagName === "BUTTON" && (w.disabled = E),
          t.params.watchOverflow &&
            t.enabled &&
            w.classList[t.isLocked ? "add" : "remove"](T.lockClass))
      })
  }
  function o() {
    const { nextEl: v, prevEl: E } = t.navigation
    if (t.params.loop) {
      l(E, !1), l(v, !1)
      return
    }
    l(E, t.isBeginning && !t.params.rewind), l(v, t.isEnd && !t.params.rewind)
  }
  function f(v) {
    v.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), s("navigationPrev"))
  }
  function c(v) {
    v.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), s("navigationNext"))
  }
  function p() {
    const v = t.params.navigation
    if (
      ((t.params.navigation = Gc(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(v.nextEl || v.prevEl))
    )
      return
    let E = i(v.nextEl),
      T = i(v.prevEl)
    Object.assign(t.navigation, { nextEl: E, prevEl: T }),
      (E = a(E)),
      (T = a(T))
    const w = (y, $) => {
      y && y.addEventListener("click", $ === "next" ? c : f),
        !t.enabled && y && y.classList.add(...v.lockClass.split(" "))
    }
    E.forEach((y) => w(y, "next")), T.forEach((y) => w(y, "prev"))
  }
  function g() {
    let { nextEl: v, prevEl: E } = t.navigation
    ;(v = a(v)), (E = a(E))
    const T = (w, y) => {
      w.removeEventListener("click", y === "next" ? c : f),
        w.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    v.forEach((w) => T(w, "next")), E.forEach((w) => T(w, "prev"))
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? k() : (p(), o())
  }),
    r("toEdge fromEdge lock unlock", () => {
      o()
    }),
    r("destroy", () => {
      g()
    }),
    r("enable disable", () => {
      let { nextEl: v, prevEl: E } = t.navigation
      if (((v = a(v)), (E = a(E)), t.enabled)) {
        o()
        return
      }
      ;[...v, ...E]
        .filter((T) => !!T)
        .forEach((T) => T.classList.add(t.params.navigation.lockClass))
    }),
    r("click", (v, E) => {
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
        g()
    }
  Object.assign(t.navigation, {
    enable: m,
    disable: k,
    update: o,
    init: p,
    destroy: g,
  })
}
function Lr(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  )
}
function Ay(e) {
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
    const y = w.target.closest(Lr(t.params.pagination.bulletClass))
    if (!y) return
    w.preventDefault()
    const $ = Ns(y) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === $) return
      t.slideToLoop($)
    } else t.slideTo($)
  }
  function g() {
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
          ((i = fi(G[0], t.isHorizontal() ? "width" : "height", !0)),
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
              (_e) => `${y.bulletActiveClass}${_e}`,
            ),
          ]
            .map((_e) =>
              typeof _e == "string" && _e.includes(" ") ? _e.split(" ") : _e,
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
            G.forEach((xe, _e) => {
              xe.setAttribute("part", _e === L ? "bullet-active" : "bullet")
            }),
          y.dynamicBullets)
        ) {
          const xe = G[D],
            _e = G[Q]
          for (let j = D; j <= Q; j += 1)
            G[j] &&
              G[j].classList.add(...`${y.bulletActiveClass}-main`.split(" "))
          c(xe, "prev"), c(_e, "next")
        }
      }
      if (y.dynamicBullets) {
        const X = Math.min(G.length, y.dynamicMainBullets + 4),
          xe = (i * X - i) / 2 - ge * i,
          _e = w ? "right" : "left"
        G.forEach((j) => {
          j.style[t.isHorizontal() ? _e : "top"] = `${xe}px`
        })
      }
    }
    $.forEach((G, D) => {
      if (
        (y.type === "fraction" &&
          (G.querySelectorAll(Lr(y.currentClass)).forEach((Q) => {
            Q.textContent = y.formatFractionCurrent(L + 1)
          }),
          G.querySelectorAll(Lr(y.totalClass)).forEach((Q) => {
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
          G.querySelectorAll(Lr(y.progressbarFillClass)).forEach((_e) => {
            ;(_e.style.transform = `translate3d(0,0,0) scaleX(${X}) scaleY(${xe})`),
              (_e.style.transitionDuration = `${t.params.speed}ms`)
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
            t.pagination.bullets.push(...I.querySelectorAll(Lr(w.bulletClass)))
      }),
      w.type !== "custom" && s("paginationRender", $[0])
  }
  function k() {
    t.params.pagination = Gc(
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
            (y = y.filter(($) => Lc($, ".swiper")[0] === t.el)[0])),
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
  function v() {
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
      t.params.pagination.enabled === !1 ? T() : (k(), m(), g())
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && g()
    }),
    r("snapIndexChange", () => {
      g()
    }),
    r("snapGridLengthChange", () => {
      m(), g()
    }),
    r("destroy", () => {
      v()
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
      g()
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
        g()
    },
    T = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass)
      let { el: w } = t.pagination
      w &&
        ((w = o(w)),
        w.forEach((y) =>
          y.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        v()
    }
  Object.assign(t.pagination, {
    enable: E,
    disable: T,
    render: m,
    update: g,
    init: k,
    destroy: v,
  })
}
function Ly(e) {
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
    g,
    m,
    k,
    v,
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
      t.autoplay.paused ? (g = !0) : g && ((f = c), (g = !1))
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
          ? (V = t.slides.filter((Te) =>
              Te.classList.contains("swiper-slide-active"),
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
      const Te = L()
      !Number.isNaN(Te) &&
        Te > 0 &&
        typeof V > "u" &&
        ((Ue = Te), (o = Te), (f = Te)),
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
      const Te = () => {
        s("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", y)
            : D()
      }
      if (((t.autoplay.paused = !0), Ue)) {
        E && (c = t.params.autoplay.delay), (E = !1), Te()
        return
      }
      ;(c = (c || t.params.autoplay.delay) - (new Date().getTime() - p)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), Te())
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
      const V = un()
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
    _e = () => {
      t.el.removeEventListener("pointerenter", ge),
        t.el.removeEventListener("pointerleave", X)
    },
    j = () => {
      un().addEventListener("visibilitychange", Q)
    },
    ie = () => {
      un().removeEventListener("visibilitychange", Q)
    }
  r("init", () => {
    t.params.autoplay.enabled && (xe(), j(), ne())
  }),
    r("destroy", () => {
      _e(), ie(), t.autoplay.running && q()
    }),
    r("_freeModeStaticRelease", () => {
      ;(k || T) && D()
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? q() : G(!0, !0)
    }),
    r("beforeTransitionStart", (V, Ue, Te) => {
      t.destroyed ||
        !t.autoplay.running ||
        (Te || !t.params.autoplay.disableOnInteraction ? G(!0, !0) : q())
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
          (v = setTimeout(() => {
            ;(T = !0), (k = !0), G(!0)
          }, 200))
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !m)) {
        if (
          (clearTimeout(v),
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
const Ny = { class: "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4" },
  By = {
    class:
      "flex w-full justify-center gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap",
  },
  Ry = ["href"],
  zy = { class: "hidden md:hidden lg:block" },
  Fy = ["href"],
  jy = ["src", "alt"],
  Dy = hc(
    '<div id="lightbox" class="fixed inset-0 flex items-center justify-center z-50 hidden" style="background-color:rgba(0, 0, 0, 0.3);" data-v-1fe93a0a><div class="bg-white p-5 rounded shadow-lg" data-v-1fe93a0a><img id="lightbox-img" src="" alt="Lightbox Image" class="w-full h-auto" data-v-1fe93a0a><div class="flex justify-center" data-v-1fe93a0a><p class="text-sm text-gray-500 mt-2" id="lightbox-caption" data-v-1fe93a0a></p></div><button id="lightbox-close" style="top:30%;" class="absolute right-0 m-2 text-3xl text-orange-400" data-v-1fe93a0a> × </button></div></div>',
    1,
  ),
  Hy = { class: "block md:block lg:hidden py-6" },
  Gy = { class: "grid grid-cols-2 gap-4" },
  Vy = ["src", "alt"],
  Wy = { class: "flex justify-center pt-6" },
  qy = {
    __name: "sliderAndGallery",
    props: {
      brightness: Number,
      images: Array,
      captions: Array,
      link: String,
      title: String,
    },
    setup(e) {
      const t = pe([]),
        n = [Ly, Ay, Oy],
        r = e,
        s = pe(""),
        a = pe(""),
        i = pe([]),
        l = (f) => {
          if (f >= 4) return "text-slate-800"
          if (f == 3) return "text-slate-200"
          if (f == 2) return "text-slate-300"
          if (f == 1) return "text-slate-300"
        },
        o = () => {
          const f = document.getElementById("lightbox"),
            c = document.getElementById("lightbox-img"),
            p = document.getElementById("lightbox-close"),
            g = document.querySelectorAll(".lightbox"),
            m = document.getElementById("lightbox-caption")
          g.forEach((k) => {
            k.addEventListener("click", () => {
              ;(c.src = k.src),
                (m.textContent = k.alt),
                f.classList.remove("hidden")
            })
          }),
            p.addEventListener("click", () => {
              f.classList.add("hidden")
            })
        }
      return (
        dt(() => {
          ;(t.value = r.captions),
            (s.value = r.link),
            (a.value = r.title),
            (i.value = r.images),
            Vs(() => {
              o()
            })
        }),
        (f, c) => (
          ce(),
          Pe("div", Ny, [
            x("div", By, [
              x(
                "h2",
                {
                  class: N([
                    "text-5xl text-center text-semibold",
                    l(r.brightness),
                  ]),
                },
                Mt(a.value),
                3,
              ),
              x(
                "a",
                { href: s.value },
                [
                  x(
                    "button",
                    {
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
                ],
                8,
                Ry,
              ),
            ]),
            x("div", zy, [
              he(
                ye($y),
                {
                  spaceBetween: 30,
                  centeredSlides: !0,
                  pagination: { clickable: !0 },
                  navigation: !0,
                  modules: n,
                  loop: !0,
                  class: "mt-5",
                },
                {
                  default: it(() => [
                    (ce(!0),
                    Pe(
                      Ze,
                      null,
                      An(
                        i.value,
                        (p, g) => (
                          ce(),
                          tt(
                            ye(Iy),
                            { class: "image-container", key: g },
                            {
                              default: it(() => [
                                x(
                                  "a",
                                  { href: s.value },
                                  [
                                    x(
                                      "img",
                                      {
                                        src: p,
                                        alt: t.value[g],
                                        class:
                                          "bg-slate-200 object-contain w-full rounded-xl",
                                      },
                                      null,
                                      8,
                                      jy,
                                    ),
                                  ],
                                  8,
                                  Fy,
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
            ]),
            Dy,
            x("div", Hy, [
              x("div", Gy, [
                (ce(!0),
                Pe(
                  Ze,
                  null,
                  An(
                    i.value,
                    (p, g) => (
                      ce(),
                      Pe("div", { class: "image-container", key: g }, [
                        x(
                          "img",
                          {
                            src: p,
                            alt: t.value[g],
                            class:
                              "bg-slate-200 object-contain w-full rounded lightbox",
                          },
                          null,
                          8,
                          Vy,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            x(
              "div",
              { class: N([l(r.brightness), "prose pt-6"]) },
              [tc(f.$slots, "default", {}, void 0, !0)],
              2,
            ),
            x(
              "hr",
              {
                class: N([
                  "my-12",
                  {
                    "border-slate-300": e.brightness >= 4,
                    "border-slate-200": e.brightness == 3,
                    "border-slate-100": e.brightness <= 2,
                  },
                ]),
              },
              null,
              2,
            ),
            x("div", Wy, [
              he(ea, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  },
  Uy = Zn(qy, [["__scopeId", "data-v-1fe93a0a"]]),
  Yy = x(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " The vision: a one-stop shop for Blender users ",
    -1,
  ),
  Ky = x("p", null, "Lorem ipsum", -1),
  Xy = x(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Tight deadlines and high stakes ",
    -1,
  ),
  Zy = x("p", null, "Lorem ipsum", -1),
  Jy = x(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " From concept to results ",
    -1,
  ),
  Qy = x("p", null, "Lorem ipsum", -1),
  ew = x(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Security- keeping the Bazaar safe ",
    -1,
  ),
  tw = x("p", null, "Lorem ipsum", -1),
  nw = "https://bazaar.blendernation.com",
  rw = "BlenderNation Bazaar",
  sw = {
    __name: "Bazaar",
    setup(e) {
      const t = pe([Ic, Fb, jb, Db, Hb]),
        n = pe([
          "Bazaar homepage",
          "Bazaar collection page",
          "Bazaar user page",
          "Bazaar search results",
          "Bazaar product listing",
        ])
      return (r, s) => (
        ce(),
        tt(
          Uy,
          {
            images: t.value,
            captions: n.value,
            link: nw,
            title: rw,
            brightness: r.brightness,
          },
          {
            default: it(() => [
              tc(r.$slots, "default", {}, () => [
                Yy,
                Ky,
                Xy,
                Zy,
                Jy,
                Qy,
                ew,
                tw,
              ]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  aw = {
    __name: "OkcSouthStake",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  iw = {
    __name: "ArisSearch",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  lw = {
    __name: "AtlantaFloorOne",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  ow = {
    __name: "BuildOnYourLand",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  uw = {
    __name: "StehlFamilyDental",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  cw = {
    __name: "TubBoys",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  dw = {
    __name: "StuartPipeAndHose",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  fw = {
    __name: "SwimStatePool",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  pw = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  hw = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  gw = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = pe(1),
        n = e,
        r = (l) => {
          ;(t.value = Number(l)),
            window.localStorage.setItem("brightness", t.value)
        },
        s = {
          "okc-south-stake": aw,
          "aris-search": iw,
          "atlanta-floor-one": lw,
          "build-on-your-land": ow,
          "stehl-family-dental": uw,
          "tub-boys": cw,
          "stuart-pipe": dw,
          "swim-state-pool": fw,
          bazaar: sw,
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
      dt(() => {
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
        cn(() => {
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
          ce(),
          Pe(
            Ze,
            null,
            [
              x(
                "main",
                {
                  class: N([["w-dvw", a.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  he(Om, { "onUpdate:brightness": r }),
                  x("div", pw, [
                    e.component == "pricing"
                      ? (ce(),
                        Pe(
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
                            he(_b, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component == "contact"
                      ? (ce(),
                        Pe(
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
                            he(kb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component == "portfolio"
                      ? (ce(),
                        Pe(
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
                            he(s2, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component == "about-me"
                      ? (ce(),
                        Pe(
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
                            he(Mb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                    e.component in s
                      ? (ce(),
                        Pe(
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
                            (ce(),
                            tt(
                              Y0(s[e.component]),
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
                      ? (ce(),
                        Pe(
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
                            he(jm, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : lt("", !0),
                  ]),
                  x("div", hw, [
                    e.component == "home"
                      ? (ce(),
                        Pe(
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
                            he(W1, { brightness: t.value }, null, 8, [
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
              he(U1, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  vw = Zn(gw, [["__scopeId", "data-v-bcfb28f2"]])
const fr = typeof window < "u"
function mw(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const We = Object.assign
function qa(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = Yt(s) ? s.map(e) : e(s)
  }
  return n
}
const jr = () => {},
  Yt = Array.isArray,
  bw = /\/$/,
  yw = (e) => e.replace(bw, "")
function Ua(e, t, n = "/") {
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
    (r = Ew(r ?? t, n)),
    { fullPath: r + (a && "?") + a + i, path: r, query: s, hash: i }
  )
}
function ww(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function nu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function xw(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    xr(t.matched[r], n.matched[s]) &&
    Vc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function xr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Vc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Sw(e[n], t[n])) return !1
  return !0
}
function Sw(e, t) {
  return Yt(e) ? ru(e, t) : Yt(t) ? ru(t, e) : e === t
}
function ru(e, t) {
  return Yt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Ew(e, t) {
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
function _w(e) {
  if (!e)
    if (fr) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), yw(e)
}
const Cw = /^[^#]+#/
function Tw(e, t) {
  return e.replace(Cw, "#") + t
}
function Pw(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const ta = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function kw(e) {
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
    t = Pw(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function su(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const gi = new Map()
function Mw(e, t) {
  gi.set(e, t)
}
function $w(e) {
  const t = gi.get(e)
  return gi.delete(e), t
}
let Iw = () => location.protocol + "//" + location.host
function Wc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      o = s.slice(l)
    return o[0] !== "/" && (o = "/" + o), nu(o, "")
  }
  return nu(n, e) + r + s
}
function Ow(e, t, n, r) {
  let s = [],
    a = [],
    i = null
  const l = ({ state: g }) => {
    const m = Wc(e, location),
      k = n.value,
      v = t.value
    let E = 0
    if (g) {
      if (((n.value = m), (t.value = g), i && i === k)) {
        i = null
        return
      }
      E = v ? g.position - v.position : 0
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
  function f(g) {
    s.push(g)
    const m = () => {
      const k = s.indexOf(g)
      k > -1 && s.splice(k, 1)
    }
    return a.push(m), m
  }
  function c() {
    const { history: g } = window
    g.state && g.replaceState(We({}, g.state, { scroll: ta() }), "")
  }
  function p() {
    for (const g of a) g()
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
function au(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? ta() : null,
  }
}
function Aw(e) {
  const { history: t, location: n } = window,
    r = { value: Wc(e, n) },
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
      g =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + o
          : Iw() + e + o
    try {
      t[c ? "replaceState" : "pushState"](f, "", g), (s.value = f)
    } catch (m) {
      console.error(m), n[c ? "replace" : "assign"](g)
    }
  }
  function i(o, f) {
    const c = We({}, t.state, au(s.value.back, o, s.value.forward, !0), f, {
      position: s.value.position,
    })
    a(o, c, !0), (r.value = o)
  }
  function l(o, f) {
    const c = We({}, s.value, t.state, { forward: o, scroll: ta() })
    a(c.current, c, !0)
    const p = We({}, au(r.value, o, null), { position: c.position + 1 }, f)
    a(o, p, !1), (r.value = o)
  }
  return { location: r, state: s, push: l, replace: i }
}
function Lw(e) {
  e = _w(e)
  const t = Aw(e),
    n = Ow(e, t.state, t.location, t.replace)
  function r(a, i = !0) {
    i || n.pauseListeners(), history.go(a)
  }
  const s = We(
    { location: "", base: e, go: r, createHref: Tw.bind(null, e) },
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
function Nw(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function qc(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const _n = {
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
  Uc = Symbol("")
var iu
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(iu || (iu = {}))
function Sr(e, t) {
  return We(new Error(), { type: e, [Uc]: !0 }, t)
}
function sn(e, t) {
  return e instanceof Error && Uc in e && (t == null || !!(e.type & t))
}
const lu = "[^/]+?",
  Bw = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Rw = /[.+*?^${}()[\]/\\]/g
function zw(e, t) {
  const n = We({}, Bw, t),
    r = []
  let s = n.start ? "^" : ""
  const a = []
  for (const f of e) {
    const c = f.length ? [] : [90]
    n.strict && !f.length && (s += "/")
    for (let p = 0; p < f.length; p++) {
      const g = f[p]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (g.type === 0)
        p || (s += "/"), (s += g.value.replace(Rw, "\\$&")), (m += 40)
      else if (g.type === 1) {
        const { value: k, repeatable: v, optional: E, regexp: T } = g
        a.push({ name: k, repeatable: v, optional: E })
        const w = T || lu
        if (w !== lu) {
          m += 10
          try {
            new RegExp(`(${w})`)
          } catch ($) {
            throw new Error(
              `Invalid custom RegExp for param "${k}" (${w}): ` + $.message,
            )
          }
        }
        let y = v ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`
        p || (y = E && f.length < 2 ? `(?:/${y})` : "/" + y),
          E && (y += "?"),
          (s += y),
          (m += 20),
          E && (m += -8),
          v && (m += -20),
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
    for (let g = 1; g < c.length; g++) {
      const m = c[g] || "",
        k = a[g - 1]
      p[k.name] = m && k.repeatable ? m.split("/") : m
    }
    return p
  }
  function o(f) {
    let c = "",
      p = !1
    for (const g of e) {
      ;(!p || !c.endsWith("/")) && (c += "/"), (p = !1)
      for (const m of g)
        if (m.type === 0) c += m.value
        else if (m.type === 1) {
          const { value: k, repeatable: v, optional: E } = m,
            T = k in f ? f[k] : ""
          if (Yt(T) && !v)
            throw new Error(
              `Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const w = Yt(T) ? T.join("/") : T
          if (!w)
            if (E)
              g.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (p = !0))
            else throw new Error(`Missing required param "${k}"`)
          c += w
        }
    }
    return c || "/"
  }
  return { re: i, score: r, keys: a, parse: l, stringify: o }
}
function Fw(e, t) {
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
function jw(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const a = Fw(r[n], s[n])
    if (a) return a
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (ou(r)) return 1
    if (ou(s)) return -1
  }
  return s.length - r.length
}
function ou(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Dw = { type: 0, value: "" },
  Hw = /[a-zA-Z0-9_]/
function Gw(e) {
  if (!e) return [[]]
  if (e === "/") return [[Dw]]
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
  function g() {
    f += o
  }
  for (; l < e.length; ) {
    if (((o = e[l++]), o === "\\" && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        o === "/" ? (f && p(), i()) : o === ":" ? (p(), (n = 1)) : g()
        break
      case 4:
        g(), (n = r)
        break
      case 1:
        o === "("
          ? (n = 2)
          : Hw.test(o)
            ? g()
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
function Vw(e, t, n) {
  const r = zw(Gw(e.path), n),
    s = We(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function Ww(e, t) {
  const n = [],
    r = new Map()
  t = du({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(c) {
    return r.get(c)
  }
  function a(c, p, g) {
    const m = !g,
      k = qw(c)
    k.aliasOf = g && g.record
    const v = du(t, c),
      E = [k]
    if ("alias" in c) {
      const y = typeof c.alias == "string" ? [c.alias] : c.alias
      for (const $ of y)
        E.push(
          We({}, k, {
            components: g ? g.record.components : k.components,
            path: $,
            aliasOf: g ? g.record : k,
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
        ((T = Vw(y, p, v)),
        g
          ? g.alias.push(T)
          : ((w = w || T),
            w !== T && w.alias.push(T),
            m && c.name && !cu(T) && i(c.name)),
        k.children)
      ) {
        const L = k.children
        for (let I = 0; I < L.length; I++) a(L[I], T, g && g.children[I])
      }
      ;(g = g || T),
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
    if (qc(c)) {
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
      jw(c, n[p]) >= 0 &&
      (c.record.path !== n[p].record.path || !Yc(c, n[p]));

    )
      p++
    n.splice(p, 0, c), c.record.name && !cu(c) && r.set(c.record.name, c)
  }
  function f(c, p) {
    let g,
      m = {},
      k,
      v
    if ("name" in c && c.name) {
      if (((g = r.get(c.name)), !g)) throw Sr(1, { location: c })
      ;(v = g.record.name),
        (m = We(
          uu(
            p.params,
            g.keys.filter((w) => !w.optional).map((w) => w.name),
          ),
          c.params &&
            uu(
              c.params,
              g.keys.map((w) => w.name),
            ),
        )),
        (k = g.stringify(m))
    } else if ("path" in c)
      (k = c.path),
        (g = n.find((w) => w.re.test(k))),
        g && ((m = g.parse(k)), (v = g.record.name))
    else {
      if (((g = p.name ? r.get(p.name) : n.find((w) => w.re.test(p.path))), !g))
        throw Sr(1, { location: c, currentLocation: p })
      ;(v = g.record.name),
        (m = We({}, p.params, c.params)),
        (k = g.stringify(m))
    }
    const E = []
    let T = g
    for (; T; ) E.unshift(T.record), (T = T.parent)
    return { name: v, path: k, params: m, matched: E, meta: Yw(E) }
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
function uu(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function qw(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Uw(e),
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
function Uw(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function cu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Yw(e) {
  return e.reduce((t, n) => We(t, n.meta), {})
}
function du(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function Yc(e, t) {
  return t.children.some((n) => n === e || Yc(e, n))
}
const Kc = /#/g,
  Kw = /&/g,
  Xw = /\//g,
  Zw = /=/g,
  Jw = /\?/g,
  Xc = /\+/g,
  Qw = /%5B/g,
  ex = /%5D/g,
  Zc = /%5E/g,
  tx = /%60/g,
  Jc = /%7B/g,
  nx = /%7C/g,
  Qc = /%7D/g,
  rx = /%20/g
function Yi(e) {
  return encodeURI("" + e)
    .replace(nx, "|")
    .replace(Qw, "[")
    .replace(ex, "]")
}
function sx(e) {
  return Yi(e).replace(Jc, "{").replace(Qc, "}").replace(Zc, "^")
}
function vi(e) {
  return Yi(e)
    .replace(Xc, "%2B")
    .replace(rx, "+")
    .replace(Kc, "%23")
    .replace(Kw, "%26")
    .replace(tx, "`")
    .replace(Jc, "{")
    .replace(Qc, "}")
    .replace(Zc, "^")
}
function ax(e) {
  return vi(e).replace(Zw, "%3D")
}
function ix(e) {
  return Yi(e).replace(Kc, "%23").replace(Jw, "%3F")
}
function lx(e) {
  return e == null ? "" : ix(e).replace(Xw, "%2F")
}
function Bs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function ox(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const a = r[s].replace(Xc, " "),
      i = a.indexOf("="),
      l = Bs(i < 0 ? a : a.slice(0, i)),
      o = i < 0 ? null : Bs(a.slice(i + 1))
    if (l in t) {
      let f = t[l]
      Yt(f) || (f = t[l] = [f]), f.push(o)
    } else t[l] = o
  }
  return t
}
function fu(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = ax(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Yt(r) ? r.map((a) => a && vi(a)) : [r && vi(r)]).forEach((a) => {
      a !== void 0 &&
        ((t += (t.length ? "&" : "") + n), a != null && (t += "=" + a))
    })
  }
  return t
}
function ux(e) {
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
const cx = Symbol(""),
  pu = Symbol(""),
  Ki = Symbol(""),
  ed = Symbol(""),
  mi = Symbol("")
function Nr() {
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
function kn(e, t, n, r, s) {
  const a = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((i, l) => {
      const o = (p) => {
          p === !1
            ? l(Sr(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : Nw(p)
                ? l(Sr(2, { from: t, to: p }))
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
function Ya(e, t, n, r) {
  const s = []
  for (const a of e)
    for (const i in a.components) {
      let l = a.components[i]
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (dx(l)) {
          const f = (l.__vccOpts || l)[t]
          f && s.push(kn(f, n, r, a, i))
        } else {
          let o = l()
          s.push(() =>
            o.then((f) => {
              if (!f)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${a.path}"`),
                )
              const c = mw(f) ? f.default : f
              a.components[i] = c
              const g = (c.__vccOpts || c)[t]
              return g && kn(g, n, r, a, i)()
            }),
          )
        }
    }
  return s
}
function dx(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function hu(e) {
  const t = yt(Ki),
    n = yt(ed),
    r = me(() => t.resolve(ye(e.to))),
    s = me(() => {
      const { matched: o } = r.value,
        { length: f } = o,
        c = o[f - 1],
        p = n.matched
      if (!c || !p.length) return -1
      const g = p.findIndex(xr.bind(null, c))
      if (g > -1) return g
      const m = gu(o[f - 2])
      return f > 1 && gu(c) === m && p[p.length - 1].path !== m
        ? p.findIndex(xr.bind(null, o[f - 2]))
        : g
    }),
    a = me(() => s.value > -1 && gx(n.params, r.value.params)),
    i = me(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Vc(n.params, r.value.params),
    )
  function l(o = {}) {
    return hx(o)
      ? t[ye(e.replace) ? "replace" : "push"](ye(e.to)).catch(jr)
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
const fx = Rt({
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
    useLink: hu,
    setup(e, { slots: t }) {
      const n = Kr(hu(e)),
        { options: r } = yt(Ki),
        s = me(() => ({
          [vu(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [vu(
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
  px = fx
function hx(e) {
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
function gx(e, t) {
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
function gu(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const vu = (e, t, n) => e ?? t ?? n,
  vx = Rt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = yt(mi),
        s = me(() => e.route || r.value),
        a = yt(pu, 0),
        i = me(() => {
          let f = ye(a)
          const { matched: c } = s.value
          let p
          for (; (p = c[f]) && !p.components; ) f++
          return f
        }),
        l = me(() => s.value.matched[i.value])
      Dt(
        pu,
        me(() => i.value + 1),
      ),
        Dt(cx, l),
        Dt(mi, s)
      const o = pe()
      return (
        en(
          () => [o.value, l.value, e.name],
          ([f, c, p], [g, m, k]) => {
            c &&
              ((c.instances[p] = f),
              m &&
                m !== c &&
                f &&
                f === g &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              f &&
                c &&
                (!m || !xr(c, m) || !g) &&
                (c.enterCallbacks[p] || []).forEach((v) => v(f))
          },
          { flush: "post" },
        ),
        () => {
          const f = s.value,
            c = e.name,
            p = l.value,
            g = p && p.components[c]
          if (!g) return mu(n.default, { Component: g, route: f })
          const m = p.props[c],
            k = m
              ? m === !0
                ? f.params
                : typeof m == "function"
                  ? m(f)
                  : m
              : null,
            E = qe(
              g,
              We({}, k, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (p.instances[c] = null)
                },
                ref: o,
              }),
            )
          return mu(n.default, { Component: E, route: f }) || E
        }
      )
    },
  })
function mu(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const mx = vx
function bx(e) {
  const t = Ww(e.routes, e),
    n = e.parseQuery || ox,
    r = e.stringifyQuery || fu,
    s = e.history,
    a = Nr(),
    i = Nr(),
    l = Nr(),
    o = A0(_n)
  let f = _n
  fr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const c = qa.bind(null, (z) => "" + z),
    p = qa.bind(null, lx),
    g = qa.bind(null, Bs)
  function m(z, ae) {
    let te, fe
    return (
      qc(z) ? ((te = t.getRecordMatcher(z)), (fe = ae)) : (fe = z),
      t.addRoute(fe, te)
    )
  }
  function k(z) {
    const ae = t.getRecordMatcher(z)
    ae && t.removeRoute(ae)
  }
  function v() {
    return t.getRoutes().map((z) => z.record)
  }
  function E(z) {
    return !!t.getRecordMatcher(z)
  }
  function T(z, ae) {
    if (((ae = We({}, ae || o.value)), typeof z == "string")) {
      const C = Ua(n, z, ae.path),
        B = t.resolve({ path: C.path }, ae),
        H = s.createHref(C.fullPath)
      return We(C, B, {
        params: g(B.params),
        hash: Bs(C.hash),
        redirectedFrom: void 0,
        href: H,
      })
    }
    let te
    if ("path" in z) te = We({}, z, { path: Ua(n, z.path, ae.path).path })
    else {
      const C = We({}, z.params)
      for (const B in C) C[B] == null && delete C[B]
      ;(te = We({}, z, { params: p(C) })), (ae.params = p(ae.params))
    }
    const fe = t.resolve(te, ae),
      ze = z.hash || ""
    fe.params = c(g(fe.params))
    const Ke = ww(r, We({}, z, { hash: sx(ze), path: fe.path })),
      S = s.createHref(Ke)
    return We(
      { fullPath: Ke, hash: ze, query: r === fu ? ux(z.query) : z.query || {} },
      fe,
      { redirectedFrom: void 0, href: S },
    )
  }
  function w(z) {
    return typeof z == "string" ? Ua(n, z, o.value.path) : We({}, z)
  }
  function y(z, ae) {
    if (f !== z) return Sr(8, { from: ae, to: z })
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
      Ke = z.force,
      S = z.replace === !0,
      C = I(te)
    if (C)
      return ne(
        We(w(C), {
          state: typeof C == "object" ? We({}, ze, C.state) : ze,
          force: Ke,
          replace: S,
        }),
        ae || te,
      )
    const B = te
    B.redirectedFrom = ae
    let H
    return (
      !Ke &&
        xw(r, fe, te) &&
        ((H = Sr(16, { to: B, from: fe })), Qe(fe, fe, !0, !1)),
      (H ? Promise.resolve(H) : D(B, fe))
        .catch((F) => (sn(F) ? (sn(F, 2) ? F : Te(F)) : V(F, B, fe)))
        .then((F) => {
          if (F) {
            if (sn(F, 2))
              return ne(
                We({ replace: S }, w(F.to), {
                  state: typeof F.to == "object" ? We({}, ze, F.to.state) : ze,
                  force: Ke,
                }),
                ae || B,
              )
          } else F = ge(B, fe, !0, S, ze)
          return Q(B, fe, F), F
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
    const [fe, ze, Ke] = yx(z, ae)
    te = Ya(fe.reverse(), "beforeRouteLeave", z, ae)
    for (const C of fe)
      C.leaveGuards.forEach((B) => {
        te.push(kn(B, z, ae))
      })
    const S = q.bind(null, z, ae)
    return (
      te.push(S),
      st(te)
        .then(() => {
          te = []
          for (const C of a.list()) te.push(kn(C, z, ae))
          return te.push(S), st(te)
        })
        .then(() => {
          te = Ya(ze, "beforeRouteUpdate", z, ae)
          for (const C of ze)
            C.updateGuards.forEach((B) => {
              te.push(kn(B, z, ae))
            })
          return te.push(S), st(te)
        })
        .then(() => {
          te = []
          for (const C of Ke)
            if (C.beforeEnter)
              if (Yt(C.beforeEnter))
                for (const B of C.beforeEnter) te.push(kn(B, z, ae))
              else te.push(kn(C.beforeEnter, z, ae))
          return te.push(S), st(te)
        })
        .then(
          () => (
            z.matched.forEach((C) => (C.enterCallbacks = {})),
            (te = Ya(Ke, "beforeRouteEnter", z, ae)),
            te.push(S),
            st(te)
          ),
        )
        .then(() => {
          te = []
          for (const C of i.list()) te.push(kn(C, z, ae))
          return te.push(S), st(te)
        })
        .catch((C) => (sn(C, 8) ? C : Promise.reject(C)))
    )
  }
  function Q(z, ae, te) {
    l.list().forEach((fe) => G(() => fe(z, ae, te)))
  }
  function ge(z, ae, te, fe, ze) {
    const Ke = y(z, ae)
    if (Ke) return Ke
    const S = ae === _n,
      C = fr ? history.state : {}
    te &&
      (fe || S
        ? s.replace(z.fullPath, We({ scroll: S && C && C.scroll }, ze))
        : s.push(z.fullPath, ze)),
      (o.value = z),
      Qe(z, ae, te, S),
      Te()
  }
  let X
  function xe() {
    X ||
      (X = s.listen((z, ae, te) => {
        if (!Tt.listening) return
        const fe = T(z),
          ze = I(fe)
        if (ze) {
          ne(We(ze, { replace: !0 }), fe).catch(jr)
          return
        }
        f = fe
        const Ke = o.value
        fr && Mw(su(Ke.fullPath, te.delta), ta()),
          D(fe, Ke)
            .catch((S) =>
              sn(S, 12)
                ? S
                : sn(S, 2)
                  ? (ne(S.to, fe)
                      .then((C) => {
                        sn(C, 20) &&
                          !te.delta &&
                          te.type === Yr.pop &&
                          s.go(-1, !1)
                      })
                      .catch(jr),
                    Promise.reject())
                  : (te.delta && s.go(-te.delta, !1), V(S, fe, Ke)),
            )
            .then((S) => {
              ;(S = S || ge(fe, Ke, !1)),
                S &&
                  (te.delta && !sn(S, 8)
                    ? s.go(-te.delta, !1)
                    : te.type === Yr.pop && sn(S, 20) && s.go(-1, !1)),
                Q(fe, Ke, S)
            })
            .catch(jr)
      }))
  }
  let _e = Nr(),
    j = Nr(),
    ie
  function V(z, ae, te) {
    Te(z)
    const fe = j.list()
    return (
      fe.length ? fe.forEach((ze) => ze(z, ae, te)) : console.error(z),
      Promise.reject(z)
    )
  }
  function Ue() {
    return ie && o.value !== _n
      ? Promise.resolve()
      : new Promise((z, ae) => {
          _e.add([z, ae])
        })
  }
  function Te(z) {
    return (
      ie ||
        ((ie = !z),
        xe(),
        _e.list().forEach(([ae, te]) => (z ? te(z) : ae())),
        _e.reset()),
      z
    )
  }
  function Qe(z, ae, te, fe) {
    const { scrollBehavior: ze } = e
    if (!fr || !ze) return Promise.resolve()
    const Ke =
      (!te && $w(su(z.fullPath, 0))) ||
      ((fe || !te) && history.state && history.state.scroll) ||
      null
    return Vs()
      .then(() => ze(z, ae, Ke))
      .then((S) => S && kw(S))
      .catch((S) => V(S, z, ae))
  }
  const et = (z) => s.go(z)
  let Kt
  const Ft = new Set(),
    Tt = {
      currentRoute: o,
      listening: !0,
      addRoute: m,
      removeRoute: k,
      hasRoute: E,
      getRoutes: v,
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
        z.component("RouterLink", px),
          z.component("RouterView", mx),
          (z.config.globalProperties.$router = ae),
          Object.defineProperty(z.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => ye(o),
          }),
          fr &&
            !Kt &&
            o.value === _n &&
            ((Kt = !0), $(s.location).catch((ze) => {}))
        const te = {}
        for (const ze in _n)
          Object.defineProperty(te, ze, {
            get: () => o.value[ze],
            enumerable: !0,
          })
        z.provide(Ki, ae), z.provide(ed, Ru(te)), z.provide(mi, o)
        const fe = z.unmount
        Ft.add(z),
          (z.unmount = function () {
            Ft.delete(z),
              Ft.size < 1 &&
                ((f = _n),
                X && X(),
                (X = null),
                (o.value = _n),
                (Kt = !1),
                (ie = !1)),
              fe()
          })
      },
    }
  function st(z) {
    return z.reduce((ae, te) => ae.then(() => G(te)), Promise.resolve())
  }
  return Tt
}
function yx(e, t) {
  const n = [],
    r = [],
    s = [],
    a = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < a; i++) {
    const l = t.matched[i]
    l && (e.matched.find((f) => xr(f, l)) ? r.push(l) : n.push(l))
    const o = e.matched[i]
    o && (t.matched.find((f) => xr(f, o)) || s.push(o))
  }
  return [n, r, s]
}
const Xi = [
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
Xi.map((e) => e.path)
Xi.forEach((e) => {
  e.component = vw
})
const wx = bx({ history: Lw(), routes: Xi }),
  td = dv(vv)
td.use(wx)
td.mount("#app")