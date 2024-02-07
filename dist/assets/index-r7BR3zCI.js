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
function Ci(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const et = {},
  vr = [],
  Ht = () => {},
  f0 = () => !1,
  Vs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ti = (e) => e.startsWith("onUpdate:"),
  bt = Object.assign,
  ki = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  p0 = Object.prototype.hasOwnProperty,
  Ne = (e, t) => p0.call(e, t),
  _e = Array.isArray,
  mr = (e) => Ws(e) === "[object Map]",
  Mu = (e) => Ws(e) === "[object Set]",
  Te = (e) => typeof e == "function",
  ot = (e) => typeof e == "string",
  Tr = (e) => typeof e == "symbol",
  rt = (e) => e !== null && typeof e == "object",
  Iu = (e) => (rt(e) || Te(e)) && Te(e.then) && Te(e.catch),
  Ou = Object.prototype.toString,
  Ws = (e) => Ou.call(e),
  h0 = (e) => Ws(e).slice(8, -1),
  Au = (e) => Ws(e) === "[object Object]",
  Pi = (e) =>
    ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Cs = Ci(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  qs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  g0 = /-(\w)/g,
  rn = qs((e) => e.replace(g0, (t, n) => (n ? n.toUpperCase() : ""))),
  v0 = /\B([A-Z])/g,
  kr = qs((e) => e.replace(v0, "-$1").toLowerCase()),
  Us = qs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ba = qs((e) => (e ? `on${Us(e)}` : "")),
  Nn = (e, t) => !Object.is(e, t),
  Ts = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Os = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ni = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let So
const Lu = () =>
  So ||
  (So =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function Ys(e) {
  if (_e(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ot(r) ? w0(r) : Ys(r)
      if (s) for (const a in s) t[a] = s[a]
    }
    return t
  } else if (ot(e) || rt(e)) return e
}
const m0 = /;(?![^(]*\))/g,
  b0 = /:([^]+)/,
  y0 = /\/\*[^]*?\*\//g
function w0(e) {
  const t = {}
  return (
    e
      .replace(y0, "")
      .split(m0)
      .forEach((n) => {
        if (n) {
          const r = n.split(b0)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function I(e) {
  let t = ""
  if (ot(e)) t = e
  else if (_e(e))
    for (let n = 0; n < e.length; n++) {
      const r = I(e[n])
      r && (t += r + " ")
    }
  else if (rt(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const x0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  S0 = Ci(x0)
function zu(e) {
  return !!e || e === ""
}
const Pt = (e) =>
    ot(e)
      ? e
      : e == null
        ? ""
        : _e(e) || (rt(e) && (e.toString === Ou || !Te(e.toString)))
          ? JSON.stringify(e, Bu, 2)
          : String(e),
  Bu = (e, t) =>
    t && t.__v_isRef
      ? Bu(e, t.value)
      : mr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], a) => ((n[Na(r, a) + " =>"] = s), n),
              {},
            ),
          }
        : Mu(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Na(n)) }
          : Tr(t)
            ? Na(t)
            : rt(t) && !_e(t) && !Au(t)
              ? String(t)
              : t,
  Na = (e, t = "") => {
    var n
    return Tr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let Ut
class E0 {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ut),
      !t && Ut && (this.index = (Ut.scopes || (Ut.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ut
      try {
        return (Ut = this), t()
      } finally {
        Ut = n
      }
    }
  }
  on() {
    Ut = this
  }
  off() {
    Ut = this.parent
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
function _0(e, t = Ut) {
  t && t.active && t.effects.push(e)
}
function C0() {
  return Ut
}
let Kn
class $i {
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
      _0(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      er()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (T0(n.computed), this._dirtyLevel >= 2)) break
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), tr()
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Ln,
      n = Kn
    try {
      return (Ln = !0), (Kn = this), this._runnings++, Eo(this), this.fn()
    } finally {
      _o(this), this._runnings--, (Kn = n), (Ln = t)
    }
  }
  stop() {
    var t
    this.active &&
      (Eo(this),
      _o(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function T0(e) {
  return e.value
}
function Eo(e) {
  e._trackId++, (e._depsLength = 0)
}
function _o(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Nu(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Nu(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Ln = !0,
  ri = 0
const Ru = []
function er() {
  Ru.push(Ln), (Ln = !1)
}
function tr() {
  const e = Ru.pop()
  Ln = e === void 0 ? !0 : e
}
function Mi() {
  ri++
}
function Ii() {
  for (ri--; !ri && si.length; ) si.shift()()
}
function ju(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Nu(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const si = []
function Fu(e, t, n) {
  Mi()
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel
      ;(r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger())
    }
  Du(e), Ii()
}
function Du(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), si.push(t.scheduler))
}
const Hu = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  ai = new WeakMap(),
  Xn = Symbol(""),
  ii = Symbol("")
function $t(e, t, n) {
  if (Ln && Kn) {
    let r = ai.get(e)
    r || ai.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Hu(() => r.delete(n)))), ju(Kn, s)
  }
}
function dn(e, t, n, r, s, a) {
  const i = ai.get(e)
  if (!i) return
  let l = []
  if (t === "clear") l = [...i.values()]
  else if (n === "length" && _e(e)) {
    const o = Number(r)
    i.forEach((f, c) => {
      ;(c === "length" || (!Tr(c) && c >= o)) && l.push(f)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        _e(e)
          ? Pi(n) && l.push(i.get("length"))
          : (l.push(i.get(Xn)), mr(e) && l.push(i.get(ii)))
        break
      case "delete":
        _e(e) || (l.push(i.get(Xn)), mr(e) && l.push(i.get(ii)))
        break
      case "set":
        mr(e) && l.push(i.get(Xn))
        break
    }
  Mi()
  for (const o of l) o && Fu(o, 2)
  Ii()
}
const k0 = Ci("__proto__,__v_isRef,__isVue"),
  Gu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Tr),
  ),
  Co = P0()
function P0() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = He(this)
        for (let a = 0, i = this.length; a < i; a++) $t(r, "get", a + "")
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(He)) : s
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        er(), Mi()
        const r = He(this)[t].apply(this, n)
        return Ii(), tr(), r
      }
    }),
    e
  )
}
function $0(e) {
  const t = He(this)
  return $t(t, "has", e), t.hasOwnProperty(e)
}
class Vu {
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
      return r === (s ? (a ? H0 : Yu) : a ? Uu : qu).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = _e(t)
    if (!s) {
      if (i && Ne(Co, n)) return Reflect.get(Co, n, r)
      if (n === "hasOwnProperty") return $0
    }
    const l = Reflect.get(t, n, r)
    return (Tr(n) ? Gu.has(n) : k0(n)) || (s || $t(t, "get", n), a)
      ? l
      : St(l)
        ? i && Pi(n)
          ? l
          : l.value
        : rt(l)
          ? s
            ? Xu(l)
            : Qr(l)
          : l
  }
}
class Wu extends Vu {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let a = t[n]
    if (!this._shallow) {
      const o = xr(a)
      if (
        (!As(r) && !xr(r) && ((a = He(a)), (r = He(r))),
        !_e(t) && St(a) && !St(r))
      )
        return o ? !1 : ((a.value = r), !0)
    }
    const i = _e(t) && Pi(n) ? Number(n) < t.length : Ne(t, n),
      l = Reflect.set(t, n, r, s)
    return (
      t === He(s) && (i ? Nn(r, a) && dn(t, "set", n, r) : dn(t, "add", n, r)),
      l
    )
  }
  deleteProperty(t, n) {
    const r = Ne(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && dn(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!Tr(n) || !Gu.has(n)) && $t(t, "has", n), r
  }
  ownKeys(t) {
    return $t(t, "iterate", _e(t) ? "length" : Xn), Reflect.ownKeys(t)
  }
}
class M0 extends Vu {
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
const I0 = new Wu(),
  O0 = new M0(),
  A0 = new Wu(!0),
  Oi = (e) => e,
  Ks = (e) => Reflect.getPrototypeOf(e)
function gs(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = He(e),
    a = He(t)
  n || (Nn(t, a) && $t(s, "get", t), $t(s, "get", a))
  const { has: i } = Ks(s),
    l = r ? Oi : n ? zi : qr
  if (i.call(s, t)) return l(e.get(t))
  if (i.call(s, a)) return l(e.get(a))
  e !== s && e.get(t)
}
function vs(e, t = !1) {
  const n = this.__v_raw,
    r = He(n),
    s = He(e)
  return (
    t || (Nn(e, s) && $t(r, "has", e), $t(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function ms(e, t = !1) {
  return (
    (e = e.__v_raw), !t && $t(He(e), "iterate", Xn), Reflect.get(e, "size", e)
  )
}
function To(e) {
  e = He(e)
  const t = He(this)
  return Ks(t).has.call(t, e) || (t.add(e), dn(t, "add", e, e)), this
}
function ko(e, t) {
  t = He(t)
  const n = He(this),
    { has: r, get: s } = Ks(n)
  let a = r.call(n, e)
  a || ((e = He(e)), (a = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), a ? Nn(t, i) && dn(n, "set", e, t) : dn(n, "add", e, t), this
  )
}
function Po(e) {
  const t = He(this),
    { has: n, get: r } = Ks(t)
  let s = n.call(t, e)
  s || ((e = He(e)), (s = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return s && dn(t, "delete", e, void 0), a
}
function $o() {
  const e = He(this),
    t = e.size !== 0,
    n = e.clear()
  return t && dn(e, "clear", void 0, void 0), n
}
function bs(e, t) {
  return function (r, s) {
    const a = this,
      i = a.__v_raw,
      l = He(i),
      o = t ? Oi : e ? zi : qr
    return (
      !e && $t(l, "iterate", Xn), i.forEach((f, c) => r.call(s, o(f), o(c), a))
    )
  }
}
function ys(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      a = He(s),
      i = mr(a),
      l = e === "entries" || (e === Symbol.iterator && i),
      o = e === "keys" && i,
      f = s[e](...r),
      c = n ? Oi : t ? zi : qr
    return (
      !t && $t(a, "iterate", o ? ii : Xn),
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
function Cn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function L0() {
  const e = {
      get(a) {
        return gs(this, a)
      },
      get size() {
        return ms(this)
      },
      has: vs,
      add: To,
      set: ko,
      delete: Po,
      clear: $o,
      forEach: bs(!1, !1),
    },
    t = {
      get(a) {
        return gs(this, a, !1, !0)
      },
      get size() {
        return ms(this)
      },
      has: vs,
      add: To,
      set: ko,
      delete: Po,
      clear: $o,
      forEach: bs(!1, !0),
    },
    n = {
      get(a) {
        return gs(this, a, !0)
      },
      get size() {
        return ms(this, !0)
      },
      has(a) {
        return vs.call(this, a, !0)
      },
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear"),
      forEach: bs(!0, !1),
    },
    r = {
      get(a) {
        return gs(this, a, !0, !0)
      },
      get size() {
        return ms(this, !0)
      },
      has(a) {
        return vs.call(this, a, !0)
      },
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear"),
      forEach: bs(!0, !0),
    }
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      ;(e[a] = ys(a, !1, !1)),
        (n[a] = ys(a, !0, !1)),
        (t[a] = ys(a, !1, !0)),
        (r[a] = ys(a, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [z0, B0, N0, R0] = L0()
function Ai(e, t) {
  const n = t ? (e ? R0 : N0) : e ? B0 : z0
  return (r, s, a) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Ne(n, s) && s in r ? n : r, s, a)
}
const j0 = { get: Ai(!1, !1) },
  F0 = { get: Ai(!1, !0) },
  D0 = { get: Ai(!0, !1) },
  qu = new WeakMap(),
  Uu = new WeakMap(),
  Yu = new WeakMap(),
  H0 = new WeakMap()
function G0(e) {
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
function V0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : G0(h0(e))
}
function Qr(e) {
  return xr(e) ? e : Li(e, !1, I0, j0, qu)
}
function Ku(e) {
  return Li(e, !1, A0, F0, Uu)
}
function Xu(e) {
  return Li(e, !0, O0, D0, Yu)
}
function Li(e, t, n, r, s) {
  if (!rt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const a = s.get(e)
  if (a) return a
  const i = V0(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? r : n)
  return s.set(e, l), l
}
function br(e) {
  return xr(e) ? br(e.__v_raw) : !!(e && e.__v_isReactive)
}
function xr(e) {
  return !!(e && e.__v_isReadonly)
}
function As(e) {
  return !!(e && e.__v_isShallow)
}
function Ju(e) {
  return br(e) || xr(e)
}
function He(e) {
  const t = e && e.__v_raw
  return t ? He(t) : e
}
function Zu(e) {
  return Os(e, "__v_skip", !0), e
}
const qr = (e) => (rt(e) ? Qr(e) : e),
  zi = (e) => (rt(e) ? Xu(e) : e)
class Qu {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new $i(
        () => t(this._value),
        () => ks(this, 1),
        () => this.dep && Du(this.dep),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = He(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        Nn(t._value, (t._value = t.effect.run())) &&
        ks(t, 2),
      ec(t),
      t.effect._dirtyLevel >= 1 && ks(t, 1),
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
function W0(e, t, n = !1) {
  let r, s
  const a = Te(e)
  return (
    a ? ((r = e), (s = Ht)) : ((r = e.get), (s = e.set)),
    new Qu(r, s, a || !s, n)
  )
}
function ec(e) {
  Ln &&
    Kn &&
    ((e = He(e)),
    ju(
      Kn,
      e.dep ||
        (e.dep = Hu(() => (e.dep = void 0), e instanceof Qu ? e : void 0)),
    ))
}
function ks(e, t = 2, n) {
  e = He(e)
  const r = e.dep
  r && Fu(r, t)
}
function St(e) {
  return !!(e && e.__v_isRef === !0)
}
function ne(e) {
  return tc(e, !1)
}
function q0(e) {
  return tc(e, !0)
}
function tc(e, t) {
  return St(e) ? e : new U0(e, t)
}
class U0 {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : He(t)),
      (this._value = n ? t : qr(t))
  }
  get value() {
    return ec(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || As(t) || xr(t)
    ;(t = n ? t : He(t)),
      Nn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : qr(t)), ks(this, 2))
  }
}
function we(e) {
  return St(e) ? e.value : e
}
const Y0 = {
  get: (e, t, n) => we(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return St(s) && !St(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function nc(e) {
  return br(e) ? e : new Proxy(e, Y0)
}
function zn(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (a) {
    Xs(a, t, n)
  }
  return s
}
function Kt(e, t, n, r) {
  if (Te(e)) {
    const a = zn(e, t, n, r)
    return (
      a &&
        Iu(a) &&
        a.catch((i) => {
          Xs(i, t, n)
        }),
      a
    )
  }
  const s = []
  for (let a = 0; a < e.length; a++) s.push(Kt(e[a], t, n, r))
  return s
}
function Xs(e, t, n, r = !0) {
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
      zn(o, null, 10, [e, i, l])
      return
    }
  }
  K0(e, n, s, r)
}
function K0(e, t, n, r = !0) {
  console.error(e)
}
let Ur = !1,
  li = !1
const wt = []
let en = 0
const yr = []
let Pn = null,
  Un = 0
const rc = Promise.resolve()
let Bi = null
function Js(e) {
  const t = Bi || rc
  return e ? t.then(this ? e.bind(this) : e) : t
}
function X0(e) {
  let t = en + 1,
    n = wt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = wt[r],
      a = Yr(s)
    a < e || (a === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function Ni(e) {
  ;(!wt.length || !wt.includes(e, Ur && e.allowRecurse ? en + 1 : en)) &&
    (e.id == null ? wt.push(e) : wt.splice(X0(e.id), 0, e), sc())
}
function sc() {
  !Ur && !li && ((li = !0), (Bi = rc.then(ic)))
}
function J0(e) {
  const t = wt.indexOf(e)
  t > en && wt.splice(t, 1)
}
function Z0(e) {
  _e(e)
    ? yr.push(...e)
    : (!Pn || !Pn.includes(e, e.allowRecurse ? Un + 1 : Un)) && yr.push(e),
    sc()
}
function Mo(e, t, n = Ur ? en + 1 : 0) {
  for (; n < wt.length; n++) {
    const r = wt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      wt.splice(n, 1), n--, r()
    }
  }
}
function ac(e) {
  if (yr.length) {
    const t = [...new Set(yr)].sort((n, r) => Yr(n) - Yr(r))
    if (((yr.length = 0), Pn)) {
      Pn.push(...t)
      return
    }
    for (Pn = t, Un = 0; Un < Pn.length; Un++) Pn[Un]()
    ;(Pn = null), (Un = 0)
  }
}
const Yr = (e) => (e.id == null ? 1 / 0 : e.id),
  Q0 = (e, t) => {
    const n = Yr(e) - Yr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function ic(e) {
  ;(li = !1), (Ur = !0), wt.sort(Q0)
  try {
    for (en = 0; en < wt.length; en++) {
      const t = wt[en]
      t && t.active !== !1 && zn(t, null, 14)
    }
  } finally {
    ;(en = 0),
      (wt.length = 0),
      ac(),
      (Ur = !1),
      (Bi = null),
      (wt.length || yr.length) && ic()
  }
}
function eg(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || et
  let s = n
  const a = t.startsWith("update:"),
    i = a && t.slice(7)
  if (i && i in r) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: v } = r[c] || et
    v && (s = n.map((b) => (ot(b) ? b.trim() : b))), p && (s = n.map(ni))
  }
  let l,
    o = r[(l = Ba(t))] || r[(l = Ba(rn(t)))]
  !o && a && (o = r[(l = Ba(kr(t)))]), o && Kt(o, e, 6, s)
  const f = r[l + "Once"]
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Kt(f, e, 6, s)
  }
}
function lc(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const a = e.emits
  let i = {},
    l = !1
  if (!Te(e)) {
    const o = (f) => {
      const c = lc(f, t, !0)
      c && ((l = !0), bt(i, c))
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  return !a && !l
    ? (rt(e) && r.set(e, null), null)
    : (_e(a) ? a.forEach((o) => (i[o] = null)) : bt(i, a),
      rt(e) && r.set(e, i),
      i)
}
function Zs(e, t) {
  return !e || !Vs(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Ne(e, t[0].toLowerCase() + t.slice(1)) || Ne(e, kr(t)) || Ne(e, t))
}
let pt = null,
  Qs = null
function Ls(e) {
  const t = pt
  return (pt = e), (Qs = (e && e.type.__scopeId) || null), t
}
function es(e) {
  Qs = e
}
function ts() {
  Qs = null
}
function Xe(e, t = pt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Do(-1)
    const a = Ls(t)
    let i
    try {
      i = e(...s)
    } finally {
      Ls(a), r._d && Do(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Ra(e) {
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
    setupState: b,
    ctx: P,
    inheritAttrs: m,
  } = e
  let E, T
  const x = Ls(e)
  try {
    if (n.shapeFlag & 4) {
      const M = s || r,
        z = M
      ;(E = Qt(c.call(z, M, p, a, b, v, P))), (T = o)
    } else {
      const M = t
      ;(E = Qt(
        M.length > 1 ? M(a, { attrs: o, slots: l, emit: f }) : M(a, null),
      )),
        (T = t.props ? o : tg(o))
    }
  } catch (M) {
    ;(Gr.length = 0), Xs(M, e, 1), (E = he(Rn))
  }
  let w = E
  if (T && m !== !1) {
    const M = Object.keys(T),
      { shapeFlag: z } = w
    M.length && z & 7 && (i && M.some(Ti) && (T = ng(T, i)), (w = Zn(w, T)))
  }
  return (
    n.dirs && ((w = Zn(w)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (w.transition = n.transition),
    (E = w),
    Ls(x),
    E
  )
}
const tg = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || Vs(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  ng = (e, t) => {
    const n = {}
    for (const r in e) (!Ti(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function rg(e, t, n) {
  const { props: r, children: s, component: a } = e,
    { props: i, children: l, patchFlag: o } = t,
    f = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return r ? Io(r, i, f) : !!i
    if (o & 8) {
      const c = t.dynamicProps
      for (let p = 0; p < c.length; p++) {
        const v = c[p]
        if (i[v] !== r[v] && !Zs(f, v)) return !0
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
        ? !1
        : r
          ? i
            ? Io(r, i, f)
            : !0
          : !!i
  return !1
}
function Io(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const a = r[s]
    if (t[a] !== e[a] && !Zs(n, a)) return !0
  }
  return !1
}
function sg({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ri = "components",
  ag = "directives"
function ig(e, t) {
  return ji(Ri, e, !0, t) || e
}
const oc = Symbol.for("v-ndc")
function lg(e) {
  return ot(e) ? ji(Ri, e, !1) || e : e || oc
}
function og(e) {
  return ji(ag, e)
}
function ji(e, t, n = !0, r = !1) {
  const s = pt || xt
  if (s) {
    const a = s.type
    if (e === Ri) {
      const l = Jg(a, !1)
      if (l && (l === t || l === rn(t) || l === Us(rn(t)))) return a
    }
    const i = Oo(s[e] || a[e], t) || Oo(s.appContext[e], t)
    return !i && r ? a : i
  }
}
function Oo(e, t) {
  return e && (e[t] || e[rn(t)] || e[Us(rn(t))])
}
const ug = (e) => e.__isSuspense
function cg(e, t) {
  t && t.pendingBranch
    ? _e(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Z0(e)
}
const dg = Symbol.for("v-scx"),
  fg = () => ht(dg)
function hn(e, t) {
  return Fi(e, null, t)
}
const ws = {}
function Bn(e, t, n) {
  return Fi(e, t, n)
}
function Fi(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: a, onTrack: i, onTrigger: l } = et,
) {
  if (t && a) {
    const O = t
    t = (...se) => {
      O(...se), z()
    }
  }
  const o = xt,
    f = (O) => (r === !0 ? O : Yn(O, r === !1 ? 1 : void 0))
  let c,
    p = !1,
    v = !1
  if (
    (St(e)
      ? ((c = () => e.value), (p = As(e)))
      : br(e)
        ? ((c = () => f(e)), (p = !0))
        : _e(e)
          ? ((v = !0),
            (p = e.some((O) => br(O) || As(O))),
            (c = () =>
              e.map((O) => {
                if (St(O)) return O.value
                if (br(O)) return f(O)
                if (Te(O)) return zn(O, o, 2)
              })))
          : Te(e)
            ? t
              ? (c = () => zn(e, o, 2))
              : (c = () => (b && b(), Kt(e, o, 3, [P])))
            : (c = Ht),
    t && r)
  ) {
    const O = c
    c = () => Yn(O())
  }
  let b,
    P = (O) => {
      b = w.onStop = () => {
        zn(O, o, 4), (b = w.onStop = void 0)
      }
    },
    m
  if (ra)
    if (
      ((P = Ht),
      t ? n && Kt(t, o, 3, [c(), v ? [] : void 0, P]) : c(),
      s === "sync")
    ) {
      const O = fg()
      m = O.__watcherHandles || (O.__watcherHandles = [])
    } else return Ht
  let E = v ? new Array(e.length).fill(ws) : ws
  const T = () => {
    if (!(!w.active || !w.dirty))
      if (t) {
        const O = w.run()
        ;(r || p || (v ? O.some((se, q) => Nn(se, E[q])) : Nn(O, E))) &&
          (b && b(),
          Kt(t, o, 3, [O, E === ws ? void 0 : v && E[0] === ws ? [] : E, P]),
          (E = O))
      } else w.run()
  }
  T.allowRecurse = !!t
  let x
  s === "sync"
    ? (x = T)
    : s === "post"
      ? (x = () => kt(T, o && o.suspense))
      : ((T.pre = !0), o && (T.id = o.uid), (x = () => Ni(T)))
  const w = new $i(c, Ht, x),
    M = C0(),
    z = () => {
      w.stop(), M && ki(M.effects, w)
    }
  return (
    t
      ? n
        ? T()
        : (E = w.run())
      : s === "post"
        ? kt(w.run.bind(w), o && o.suspense)
        : w.run(),
    m && m.push(z),
    z
  )
}
function pg(e, t, n) {
  const r = this.proxy,
    s = ot(e) ? (e.includes(".") ? uc(r, e) : () => r[e]) : e.bind(r, r)
  let a
  Te(t) ? (a = t) : ((a = t.handler), (n = t))
  const i = ns(this),
    l = Fi(s, a.bind(r), n)
  return i(), l
}
function uc(e, t) {
  const n = t.split(".")
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function Yn(e, t, n = 0, r) {
  if (!rt(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((r = r || new Set()), r.has(e))) return e
  if ((r.add(e), St(e))) Yn(e.value, t, n, r)
  else if (_e(e)) for (let s = 0; s < e.length; s++) Yn(e[s], t, n, r)
  else if (Mu(e) || mr(e))
    e.forEach((s) => {
      Yn(s, t, n, r)
    })
  else if (Au(e)) for (const s in e) Yn(e[s], t, n, r)
  return e
}
function cc(e, t) {
  if (pt === null) return e
  const n = sa(pt) || pt.proxy,
    r = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [a, i, l, o = et] = t[s]
    a &&
      (Te(a) && (a = { mounted: a, updated: a }),
      a.deep && Yn(i),
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
function Wn(e, t, n, r) {
  const s = e.dirs,
    a = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const l = s[i]
    a && (l.oldValue = a[i].value)
    let o = l.dir[r]
    o && (er(), Kt(o, n, 8, [e.el, l, e, t]), tr())
  }
}
function Bt(e, t) {
  return Te(e) ? bt({ name: e.name }, t, { setup: e }) : e
}
const Dr = (e) => !!e.type.__asyncLoader,
  dc = (e) => e.type.__isKeepAlive
function hg(e, t) {
  fc(e, "a", t)
}
function gg(e, t) {
  fc(e, "da", t)
}
function fc(e, t, n = xt) {
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
  if ((ea(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) dc(s.parent.vnode) && vg(r, t, n, s), (s = s.parent)
  }
}
function vg(e, t, n, r) {
  const s = ea(t, e, r, !0)
  jn(() => {
    ki(r[t], s)
  }, n)
}
function ea(e, t, n = xt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          er()
          const l = ns(n),
            o = Kt(t, n, e, i)
          return l(), tr(), o
        })
    return r ? s.unshift(a) : s.push(a), a
  }
}
const gn =
    (e) =>
    (t, n = xt) =>
      (!ra || e === "sp") && ea(e, (...r) => t(...r), n),
  mg = gn("bm"),
  yt = gn("m"),
  Di = gn("bu"),
  Hi = gn("u"),
  Gi = gn("bum"),
  jn = gn("um"),
  bg = gn("sp"),
  yg = gn("rtg"),
  wg = gn("rtc")
function xg(e, t = xt) {
  ea("ec", e, t)
}
function fn(e, t, n, r) {
  let s
  const a = n && n[r]
  if (_e(e) || ot(e)) {
    s = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++)
      s[i] = t(e[i], i, void 0, a && a[i])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, a && a[i])
  } else if (rt(e))
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
function sn(e, t, n = {}, r, s) {
  if (pt.isCE || (pt.parent && Dr(pt.parent) && pt.parent.isCE))
    return t !== "default" && (n.name = t), he("slot", n, r && r())
  let a = e[t]
  a && a._c && (a._d = !1), te()
  const i = a && pc(a(n)),
    l = De(
      Je,
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
function pc(e) {
  return e.some((t) =>
    Ns(t) ? !(t.type === Rn || (t.type === Je && !pc(t.children))) : !0,
  )
    ? e
    : null
}
const oi = (e) => (e ? (Tc(e) ? sa(e) || e.proxy : oi(e.parent)) : null),
  Hr = bt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => oi(e.parent),
    $root: (e) => oi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Vi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ni(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Js.bind(e.proxy)),
    $watch: (e) => pg.bind(e),
  }),
  ja = (e, t) => e !== et && !e.__isScriptSetup && Ne(e, t),
  Sg = {
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
        const b = i[t]
        if (b !== void 0)
          switch (b) {
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
          if (ja(r, t)) return (i[t] = 1), r[t]
          if (s !== et && Ne(s, t)) return (i[t] = 2), s[t]
          if ((f = e.propsOptions[0]) && Ne(f, t)) return (i[t] = 3), a[t]
          if (n !== et && Ne(n, t)) return (i[t] = 4), n[t]
          ui && (i[t] = 0)
        }
      }
      const c = Hr[t]
      let p, v
      if (c) return t === "$attrs" && $t(e, "get", t), c(e)
      if ((p = l.__cssModules) && (p = p[t])) return p
      if (n !== et && Ne(n, t)) return (i[t] = 4), n[t]
      if (((v = o.config.globalProperties), Ne(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: a } = e
      return ja(s, t)
        ? ((s[t] = n), !0)
        : r !== et && Ne(r, t)
          ? ((r[t] = n), !0)
          : Ne(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== et && Ne(e, i)) ||
        ja(t, i) ||
        ((l = a[0]) && Ne(l, i)) ||
        Ne(r, i) ||
        Ne(Hr, i) ||
        Ne(s.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Ne(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Ao(e) {
  return _e(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ui = !0
function Eg(e) {
  const t = Vi(e),
    n = e.proxy,
    r = e.ctx
  ;(ui = !1), t.beforeCreate && Lo(t.beforeCreate, e, "bc")
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
    beforeUpdate: b,
    updated: P,
    activated: m,
    deactivated: E,
    beforeDestroy: T,
    beforeUnmount: x,
    destroyed: w,
    unmounted: M,
    render: z,
    renderTracked: O,
    renderTriggered: se,
    errorCaptured: q,
    serverPrefetch: G,
    expose: D,
    inheritAttrs: Q,
    components: ge,
    directives: X,
    filters: Se,
  } = t
  if ((f && _g(f, r, null), i))
    for (const oe in i) {
      const V = i[oe]
      Te(V) && (r[oe] = V.bind(n))
    }
  if (s) {
    const oe = s.call(n, n)
    rt(oe) && (e.data = Qr(oe))
  }
  if (((ui = !0), a))
    for (const oe in a) {
      const V = a[oe],
        Ye = Te(V) ? V.bind(n, n) : Te(V.get) ? V.get.bind(n, n) : Ht,
        ke = !Te(V) && Te(V.set) ? V.set.bind(n) : Ht,
        tt = me({ get: Ye, set: ke })
      Object.defineProperty(r, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (nt) => (tt.value = nt),
      })
    }
  if (l) for (const oe in l) hc(l[oe], r, n, oe)
  if (o) {
    const oe = Te(o) ? o.call(n) : o
    Reflect.ownKeys(oe).forEach((V) => {
      Gt(V, oe[V])
    })
  }
  c && Lo(c, e, "c")
  function F(oe, V) {
    _e(V) ? V.forEach((Ye) => oe(Ye.bind(n))) : V && oe(V.bind(n))
  }
  if (
    (F(mg, p),
    F(yt, v),
    F(Di, b),
    F(Hi, P),
    F(hg, m),
    F(gg, E),
    F(xg, q),
    F(wg, O),
    F(yg, se),
    F(Gi, x),
    F(jn, M),
    F(bg, G),
    _e(D))
  )
    if (D.length) {
      const oe = e.exposed || (e.exposed = {})
      D.forEach((V) => {
        Object.defineProperty(oe, V, {
          get: () => n[V],
          set: (Ye) => (n[V] = Ye),
        })
      })
    } else e.exposed || (e.exposed = {})
  z && e.render === Ht && (e.render = z),
    Q != null && (e.inheritAttrs = Q),
    ge && (e.components = ge),
    X && (e.directives = X)
}
function _g(e, t, n = Ht) {
  _e(e) && (e = ci(e))
  for (const r in e) {
    const s = e[r]
    let a
    rt(s)
      ? "default" in s
        ? (a = ht(s.from || r, s.default, !0))
        : (a = ht(s.from || r))
      : (a = ht(s)),
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
function Lo(e, t, n) {
  Kt(_e(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function hc(e, t, n, r) {
  const s = r.includes(".") ? uc(n, r) : () => n[r]
  if (ot(e)) {
    const a = t[e]
    Te(a) && Bn(s, a)
  } else if (Te(e)) Bn(s, e.bind(n))
  else if (rt(e))
    if (_e(e)) e.forEach((a) => hc(a, t, n, r))
    else {
      const a = Te(e.handler) ? e.handler.bind(n) : t[e.handler]
      Te(a) && Bn(s, a, e)
    }
}
function Vi(e) {
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
          s.length && s.forEach((f) => zs(o, f, i, !0)),
          zs(o, t, i)),
    rt(t) && a.set(t, o),
    o
  )
}
function zs(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t
  a && zs(e, a, n, !0), s && s.forEach((i) => zs(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Cg[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const Cg = {
  data: zo,
  props: Bo,
  emits: Bo,
  methods: Fr,
  computed: Fr,
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
  components: Fr,
  directives: Fr,
  watch: kg,
  provide: zo,
  inject: Tg,
}
function zo(e, t) {
  return t
    ? e
      ? function () {
          return bt(
            Te(e) ? e.call(this, this) : e,
            Te(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function Tg(e, t) {
  return Fr(ci(e), ci(t))
}
function ci(e) {
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
function Fr(e, t) {
  return e ? bt(Object.create(null), e, t) : t
}
function Bo(e, t) {
  return e
    ? _e(e) && _e(t)
      ? [...new Set([...e, ...t])]
      : bt(Object.create(null), Ao(e), Ao(t ?? {}))
    : t
}
function kg(e, t) {
  if (!e) return t
  if (!t) return e
  const n = bt(Object.create(null), e)
  for (const r in t) n[r] = _t(e[r], t[r])
  return n
}
function gc() {
  return {
    app: null,
    config: {
      isNativeTag: f0,
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
let Pg = 0
function $g(e, t) {
  return function (r, s = null) {
    Te(r) || (r = bt({}, r)), s != null && !rt(s) && (s = null)
    const a = gc(),
      i = new WeakSet()
    let l = !1
    const o = (a.app = {
      _uid: Pg++,
      _component: r,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: Qg,
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
          const v = he(r, s)
          return (
            (v.appContext = a),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            c && t ? t(v, f) : e(v, f, p),
            (l = !0),
            (o._container = f),
            (f.__vue_app__ = o),
            sa(v.component) || v.component.proxy
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
        Bs = o
        try {
          return f()
        } finally {
          Bs = null
        }
      },
    })
    return o
  }
}
let Bs = null
function Gt(e, t) {
  if (xt) {
    let n = xt.provides
    const r = xt.parent && xt.parent.provides
    r === n && (n = xt.provides = Object.create(r)), (n[e] = t)
  }
}
function ht(e, t, n = !1) {
  const r = xt || pt
  if (r || Bs) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Bs._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && Te(t) ? t.call(r && r.proxy) : t
  }
}
function Mg(e, t, n, r = !1) {
  const s = {},
    a = {}
  Os(a, na, 1), (e.propsDefaults = Object.create(null)), vc(e, t, s, a)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : Ku(s)) : e.type.props ? (e.props = s) : (e.props = a),
    (e.attrs = a)
}
function Ig(e, t, n, r) {
  const {
      props: s,
      attrs: a,
      vnode: { patchFlag: i },
    } = e,
    l = He(s),
    [o] = e.propsOptions
  let f = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps
      for (let p = 0; p < c.length; p++) {
        let v = c[p]
        if (Zs(e.emitsOptions, v)) continue
        const b = t[v]
        if (o)
          if (Ne(a, v)) b !== a[v] && ((a[v] = b), (f = !0))
          else {
            const P = rn(v)
            s[P] = di(o, l, P, b, e, !1)
          }
        else b !== a[v] && ((a[v] = b), (f = !0))
      }
    }
  } else {
    vc(e, t, s, a) && (f = !0)
    let c
    for (const p in l)
      (!t || (!Ne(t, p) && ((c = kr(p)) === p || !Ne(t, c)))) &&
        (o
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (s[p] = di(o, l, p, void 0, e, !0))
          : delete s[p])
    if (a !== l) for (const p in a) (!t || !Ne(t, p)) && (delete a[p], (f = !0))
  }
  f && dn(e, "set", "$attrs")
}
function vc(e, t, n, r) {
  const [s, a] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let o in t) {
      if (Cs(o)) continue
      const f = t[o]
      let c
      s && Ne(s, (c = rn(o)))
        ? !a || !a.includes(c)
          ? (n[c] = f)
          : ((l || (l = {}))[c] = f)
        : Zs(e.emitsOptions, o) ||
          ((!(o in r) || f !== r[o]) && ((r[o] = f), (i = !0)))
    }
  if (a) {
    const o = He(n),
      f = l || et
    for (let c = 0; c < a.length; c++) {
      const p = a[c]
      n[p] = di(s, o, p, f[p], e, !Ne(f, p))
    }
  }
  return i
}
function di(e, t, n, r, s, a) {
  const i = e[n]
  if (i != null) {
    const l = Ne(i, "default")
    if (l && r === void 0) {
      const o = i.default
      if (i.type !== Function && !i.skipFactory && Te(o)) {
        const { propsDefaults: f } = s
        if (n in f) r = f[n]
        else {
          const c = ns(s)
          ;(r = f[n] = o.call(null, t)), c()
        }
      } else r = o
    }
    i[0] && (a && !l ? (r = !1) : i[1] && (r === "" || r === kr(n)) && (r = !0))
  }
  return r
}
function mc(e, t, n = !1) {
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
      const [v, b] = mc(p, t, !0)
      bt(i, v), b && l.push(...b)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!a && !o) return rt(e) && r.set(e, vr), vr
  if (_e(a))
    for (let c = 0; c < a.length; c++) {
      const p = rn(a[c])
      No(p) && (i[p] = et)
    }
  else if (a)
    for (const c in a) {
      const p = rn(c)
      if (No(p)) {
        const v = a[c],
          b = (i[p] = _e(v) || Te(v) ? { type: v } : bt({}, v))
        if (b) {
          const P = Fo(Boolean, b.type),
            m = Fo(String, b.type)
          ;(b[0] = P > -1),
            (b[1] = m < 0 || P < m),
            (P > -1 || Ne(b, "default")) && l.push(p)
        }
      }
    }
  const f = [i, l]
  return rt(e) && r.set(e, f), f
}
function No(e) {
  return e[0] !== "$"
}
function Ro(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function jo(e, t) {
  return Ro(e) === Ro(t)
}
function Fo(e, t) {
  return _e(t) ? t.findIndex((n) => jo(n, e)) : Te(t) && jo(t, e) ? 0 : -1
}
const bc = (e) => e[0] === "_" || e === "$stable",
  Wi = (e) => (_e(e) ? e.map(Qt) : [Qt(e)]),
  Og = (e, t, n) => {
    if (t._n) return t
    const r = Xe((...s) => Wi(t(...s)), n)
    return (r._c = !1), r
  },
  yc = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (bc(s)) continue
      const a = e[s]
      if (Te(a)) t[s] = Og(s, a, r)
      else if (a != null) {
        const i = Wi(a)
        t[s] = () => i
      }
    }
  },
  wc = (e, t) => {
    const n = Wi(t)
    e.slots.default = () => n
  },
  Ag = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = He(t)), Os(t, "_", n)) : yc(t, (e.slots = {}))
    } else (e.slots = {}), t && wc(e, t)
    Os(e.slots, na, 1)
  },
  Lg = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let a = !0,
      i = et
    if (r.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (a = !1)
          : (bt(s, t), !n && l === 1 && delete s._)
        : ((a = !t.$stable), yc(t, s)),
        (i = t)
    } else t && (wc(e, t), (i = { default: 1 }))
    if (a) for (const l in s) !bc(l) && i[l] == null && delete s[l]
  }
function fi(e, t, n, r, s = !1) {
  if (_e(e)) {
    e.forEach((v, b) => fi(v, t && (_e(t) ? t[b] : t), n, r, s))
    return
  }
  if (Dr(r) && !s) return
  const a = r.shapeFlag & 4 ? sa(r.component) || r.component.proxy : r.el,
    i = s ? null : a,
    { i: l, r: o } = e,
    f = t && t.r,
    c = l.refs === et ? (l.refs = {}) : l.refs,
    p = l.setupState
  if (
    (f != null &&
      f !== o &&
      (ot(f)
        ? ((c[f] = null), Ne(p, f) && (p[f] = null))
        : St(f) && (f.value = null)),
    Te(o))
  )
    zn(o, l, 12, [i, c])
  else {
    const v = ot(o),
      b = St(o),
      P = e.f
    if (v || b) {
      const m = () => {
        if (P) {
          const E = v ? (Ne(p, o) ? p[o] : c[o]) : o.value
          s
            ? _e(E) && ki(E, a)
            : _e(E)
              ? E.includes(a) || E.push(a)
              : v
                ? ((c[o] = [a]), Ne(p, o) && (p[o] = c[o]))
                : ((o.value = [a]), e.k && (c[e.k] = o.value))
        } else
          v
            ? ((c[o] = i), Ne(p, o) && (p[o] = i))
            : b && ((o.value = i), e.k && (c[e.k] = i))
      }
      s || P ? m() : ((m.id = -1), kt(m, n))
    }
  }
}
const kt = cg
function zg(e) {
  return Bg(e)
}
function Bg(e, t) {
  const n = Lu()
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
      setScopeId: b = Ht,
      insertStaticContent: P,
    } = e,
    m = (
      S,
      C,
      B,
      H = null,
      j = null,
      Z = null,
      ae = void 0,
      J = null,
      ee = !!C.dynamicChildren,
    ) => {
      if (S === C) return
      S && !zr(S, C) && ((H = R(S)), nt(S, j, Z, !0), (S = null)),
        C.patchFlag === -2 && ((ee = !1), (C.dynamicChildren = null))
      const { type: U, ref: ue, shapeFlag: be } = C
      switch (U) {
        case ta:
          E(S, C, B, H)
          break
        case Rn:
          T(S, C, B, H)
          break
        case Ps:
          S == null && x(C, B, H, ae)
          break
        case Je:
          ge(S, C, B, H, j, Z, ae, J, ee)
          break
        default:
          be & 1
            ? z(S, C, B, H, j, Z, ae, J, ee)
            : be & 6
              ? X(S, C, B, H, j, Z, ae, J, ee)
              : (be & 64 || be & 128) &&
                U.process(S, C, B, H, j, Z, ae, J, ee, pe)
      }
      ue != null && j && fi(ue, S && S.ref, Z, C || S, !C)
    },
    E = (S, C, B, H) => {
      if (S == null) r((C.el = l(C.children)), B, H)
      else {
        const j = (C.el = S.el)
        C.children !== S.children && f(j, C.children)
      }
    },
    T = (S, C, B, H) => {
      S == null ? r((C.el = o(C.children || "")), B, H) : (C.el = S.el)
    },
    x = (S, C, B, H) => {
      ;[S.el, S.anchor] = P(S.children, C, B, H, S.el, S.anchor)
    },
    w = ({ el: S, anchor: C }, B, H) => {
      let j
      for (; S && S !== C; ) (j = v(S)), r(S, B, H), (S = j)
      r(C, B, H)
    },
    M = ({ el: S, anchor: C }) => {
      let B
      for (; S && S !== C; ) (B = v(S)), s(S), (S = B)
      s(C)
    },
    z = (S, C, B, H, j, Z, ae, J, ee) => {
      C.type === "svg" ? (ae = "svg") : C.type === "math" && (ae = "mathml"),
        S == null ? O(C, B, H, j, Z, ae, J, ee) : G(S, C, j, Z, ae, J, ee)
    },
    O = (S, C, B, H, j, Z, ae, J) => {
      let ee, U
      const { props: ue, shapeFlag: be, transition: ve, dirs: Ee } = S
      if (
        ((ee = S.el = i(S.type, Z, ue && ue.is, ue)),
        be & 8
          ? c(ee, S.children)
          : be & 16 && q(S.children, ee, null, H, j, Fa(S, Z), ae, J),
        Ee && Wn(S, null, H, "created"),
        se(ee, S, S.scopeId, ae, H),
        ue)
      ) {
        for (const je in ue)
          je !== "value" &&
            !Cs(je) &&
            a(ee, je, null, ue[je], Z, S.children, H, j, it)
        "value" in ue && a(ee, "value", null, ue.value, Z),
          (U = ue.onVnodeBeforeMount) && Zt(U, H, S)
      }
      Ee && Wn(S, null, H, "beforeMount")
      const Pe = Ng(j, ve)
      Pe && ve.beforeEnter(ee),
        r(ee, C, B),
        ((U = ue && ue.onVnodeMounted) || Pe || Ee) &&
          kt(() => {
            U && Zt(U, H, S),
              Pe && ve.enter(ee),
              Ee && Wn(S, null, H, "mounted")
          }, j)
    },
    se = (S, C, B, H, j) => {
      if ((B && b(S, B), H)) for (let Z = 0; Z < H.length; Z++) b(S, H[Z])
      if (j) {
        let Z = j.subTree
        if (C === Z) {
          const ae = j.vnode
          se(S, ae, ae.scopeId, ae.slotScopeIds, j.parent)
        }
      }
    },
    q = (S, C, B, H, j, Z, ae, J, ee = 0) => {
      for (let U = ee; U < S.length; U++) {
        const ue = (S[U] = J ? $n(S[U]) : Qt(S[U]))
        m(null, ue, C, B, H, j, Z, ae, J)
      }
    },
    G = (S, C, B, H, j, Z, ae) => {
      const J = (C.el = S.el)
      let { patchFlag: ee, dynamicChildren: U, dirs: ue } = C
      ee |= S.patchFlag & 16
      const be = S.props || et,
        ve = C.props || et
      let Ee
      if (
        (B && qn(B, !1),
        (Ee = ve.onVnodeBeforeUpdate) && Zt(Ee, B, C, S),
        ue && Wn(C, S, B, "beforeUpdate"),
        B && qn(B, !0),
        U
          ? D(S.dynamicChildren, U, J, B, H, Fa(C, j), Z)
          : ae || V(S, C, J, null, B, H, Fa(C, j), Z, !1),
        ee > 0)
      ) {
        if (ee & 16) Q(J, C, be, ve, B, H, j)
        else if (
          (ee & 2 && be.class !== ve.class && a(J, "class", null, ve.class, j),
          ee & 4 && a(J, "style", be.style, ve.style, j),
          ee & 8)
        ) {
          const Pe = C.dynamicProps
          for (let je = 0; je < Pe.length; je++) {
            const Ke = Pe[je],
              at = be[Ke],
              Mt = ve[Ke]
            ;(Mt !== at || Ke === "value") &&
              a(J, Ke, at, Mt, j, S.children, B, H, it)
          }
        }
        ee & 1 && S.children !== C.children && c(J, C.children)
      } else !ae && U == null && Q(J, C, be, ve, B, H, j)
      ;((Ee = ve.onVnodeUpdated) || ue) &&
        kt(() => {
          Ee && Zt(Ee, B, C, S), ue && Wn(C, S, B, "updated")
        }, H)
    },
    D = (S, C, B, H, j, Z, ae) => {
      for (let J = 0; J < C.length; J++) {
        const ee = S[J],
          U = C[J],
          ue =
            ee.el && (ee.type === Je || !zr(ee, U) || ee.shapeFlag & 70)
              ? p(ee.el)
              : B
        m(ee, U, ue, null, H, j, Z, ae, !0)
      }
    },
    Q = (S, C, B, H, j, Z, ae) => {
      if (B !== H) {
        if (B !== et)
          for (const J in B)
            !Cs(J) && !(J in H) && a(S, J, B[J], null, ae, C.children, j, Z, it)
        for (const J in H) {
          if (Cs(J)) continue
          const ee = H[J],
            U = B[J]
          ee !== U && J !== "value" && a(S, J, U, ee, ae, C.children, j, Z, it)
        }
        "value" in H && a(S, "value", B.value, H.value, ae)
      }
    },
    ge = (S, C, B, H, j, Z, ae, J, ee) => {
      const U = (C.el = S ? S.el : l("")),
        ue = (C.anchor = S ? S.anchor : l(""))
      let { patchFlag: be, dynamicChildren: ve, slotScopeIds: Ee } = C
      Ee && (J = J ? J.concat(Ee) : Ee),
        S == null
          ? (r(U, B, H),
            r(ue, B, H),
            q(C.children || [], B, ue, j, Z, ae, J, ee))
          : be > 0 && be & 64 && ve && S.dynamicChildren
            ? (D(S.dynamicChildren, ve, B, j, Z, ae, J),
              (C.key != null || (j && C === j.subTree)) && xc(S, C, !0))
            : V(S, C, B, ue, j, Z, ae, J, ee)
    },
    X = (S, C, B, H, j, Z, ae, J, ee) => {
      ;(C.slotScopeIds = J),
        S == null
          ? C.shapeFlag & 512
            ? j.ctx.activate(C, B, H, ae, ee)
            : Se(C, B, H, j, Z, ae, ee)
          : Ce(S, C, ee)
    },
    Se = (S, C, B, H, j, Z, ae) => {
      const J = (S.component = qg(S, H, j))
      if ((dc(S) && (J.ctx.renderer = pe), Ug(J), J.asyncDep)) {
        if ((j && j.registerDep(J, F), !S.el)) {
          const ee = (J.subTree = he(Rn))
          T(null, ee, C, B)
        }
      } else F(J, S, C, B, j, Z, ae)
    },
    Ce = (S, C, B) => {
      const H = (C.component = S.component)
      if (rg(S, C, B))
        if (H.asyncDep && !H.asyncResolved) {
          oe(H, C, B)
          return
        } else (H.next = C), J0(H.update), (H.effect.dirty = !0), H.update()
      else (C.el = S.el), (H.vnode = C)
    },
    F = (S, C, B, H, j, Z, ae) => {
      const J = () => {
          if (S.isMounted) {
            let { next: ue, bu: be, u: ve, parent: Ee, vnode: Pe } = S
            {
              const yn = Sc(S)
              if (yn) {
                ue && ((ue.el = Pe.el), oe(S, ue, ae)),
                  yn.asyncDep.then(() => {
                    S.isUnmounted || J()
                  })
                return
              }
            }
            let je = ue,
              Ke
            qn(S, !1),
              ue ? ((ue.el = Pe.el), oe(S, ue, ae)) : (ue = Pe),
              be && Ts(be),
              (Ke = ue.props && ue.props.onVnodeBeforeUpdate) &&
                Zt(Ke, Ee, ue, Pe),
              qn(S, !0)
            const at = Ra(S),
              Mt = S.subTree
            ;(S.subTree = at),
              m(Mt, at, p(Mt.el), R(Mt), S, j, Z),
              (ue.el = at.el),
              je === null && sg(S, at.el),
              ve && kt(ve, j),
              (Ke = ue.props && ue.props.onVnodeUpdated) &&
                kt(() => Zt(Ke, Ee, ue, Pe), j)
          } else {
            let ue
            const { el: be, props: ve } = C,
              { bm: Ee, m: Pe, parent: je } = S,
              Ke = Dr(C)
            if (
              (qn(S, !1),
              Ee && Ts(Ee),
              !Ke && (ue = ve && ve.onVnodeBeforeMount) && Zt(ue, je, C),
              qn(S, !0),
              be && Ze)
            ) {
              const at = () => {
                ;(S.subTree = Ra(S)), Ze(be, S.subTree, S, j, null)
              }
              Ke
                ? C.type.__asyncLoader().then(() => !S.isUnmounted && at())
                : at()
            } else {
              const at = (S.subTree = Ra(S))
              m(null, at, B, H, S, j, Z), (C.el = at.el)
            }
            if ((Pe && kt(Pe, j), !Ke && (ue = ve && ve.onVnodeMounted))) {
              const at = C
              kt(() => Zt(ue, je, at), j)
            }
            ;(C.shapeFlag & 256 ||
              (je && Dr(je.vnode) && je.vnode.shapeFlag & 256)) &&
              S.a &&
              kt(S.a, j),
              (S.isMounted = !0),
              (C = B = H = null)
          }
        },
        ee = (S.effect = new $i(J, Ht, () => Ni(U), S.scope)),
        U = (S.update = () => {
          ee.dirty && ee.run()
        })
      ;(U.id = S.uid), qn(S, !0), U()
    },
    oe = (S, C, B) => {
      C.component = S
      const H = S.vnode.props
      ;(S.vnode = C),
        (S.next = null),
        Ig(S, C.props, H, B),
        Lg(S, C.children, B),
        er(),
        Mo(S),
        tr()
    },
    V = (S, C, B, H, j, Z, ae, J, ee = !1) => {
      const U = S && S.children,
        ue = S ? S.shapeFlag : 0,
        be = C.children,
        { patchFlag: ve, shapeFlag: Ee } = C
      if (ve > 0) {
        if (ve & 128) {
          ke(U, be, B, H, j, Z, ae, J, ee)
          return
        } else if (ve & 256) {
          Ye(U, be, B, H, j, Z, ae, J, ee)
          return
        }
      }
      Ee & 8
        ? (ue & 16 && it(U, j, Z), be !== U && c(B, be))
        : ue & 16
          ? Ee & 16
            ? ke(U, be, B, H, j, Z, ae, J, ee)
            : it(U, j, Z, !0)
          : (ue & 8 && c(B, ""), Ee & 16 && q(be, B, H, j, Z, ae, J, ee))
    },
    Ye = (S, C, B, H, j, Z, ae, J, ee) => {
      ;(S = S || vr), (C = C || vr)
      const U = S.length,
        ue = C.length,
        be = Math.min(U, ue)
      let ve
      for (ve = 0; ve < be; ve++) {
        const Ee = (C[ve] = ee ? $n(C[ve]) : Qt(C[ve]))
        m(S[ve], Ee, B, null, j, Z, ae, J, ee)
      }
      U > ue ? it(S, j, Z, !0, !1, be) : q(C, B, H, j, Z, ae, J, ee, be)
    },
    ke = (S, C, B, H, j, Z, ae, J, ee) => {
      let U = 0
      const ue = C.length
      let be = S.length - 1,
        ve = ue - 1
      for (; U <= be && U <= ve; ) {
        const Ee = S[U],
          Pe = (C[U] = ee ? $n(C[U]) : Qt(C[U]))
        if (zr(Ee, Pe)) m(Ee, Pe, B, null, j, Z, ae, J, ee)
        else break
        U++
      }
      for (; U <= be && U <= ve; ) {
        const Ee = S[be],
          Pe = (C[ve] = ee ? $n(C[ve]) : Qt(C[ve]))
        if (zr(Ee, Pe)) m(Ee, Pe, B, null, j, Z, ae, J, ee)
        else break
        be--, ve--
      }
      if (U > be) {
        if (U <= ve) {
          const Ee = ve + 1,
            Pe = Ee < ue ? C[Ee].el : H
          for (; U <= ve; )
            m(null, (C[U] = ee ? $n(C[U]) : Qt(C[U])), B, Pe, j, Z, ae, J, ee),
              U++
        }
      } else if (U > ve) for (; U <= be; ) nt(S[U], j, Z, !0), U++
      else {
        const Ee = U,
          Pe = U,
          je = new Map()
        for (U = Pe; U <= ve; U++) {
          const Et = (C[U] = ee ? $n(C[U]) : Qt(C[U]))
          Et.key != null && je.set(Et.key, U)
        }
        let Ke,
          at = 0
        const Mt = ve - Pe + 1
        let yn = !1,
          Mr = 0
        const wn = new Array(Mt)
        for (U = 0; U < Mt; U++) wn[U] = 0
        for (U = Ee; U <= be; U++) {
          const Et = S[U]
          if (at >= Mt) {
            nt(Et, j, Z, !0)
            continue
          }
          let It
          if (Et.key != null) It = je.get(Et.key)
          else
            for (Ke = Pe; Ke <= ve; Ke++)
              if (wn[Ke - Pe] === 0 && zr(Et, C[Ke])) {
                It = Ke
                break
              }
          It === void 0
            ? nt(Et, j, Z, !0)
            : ((wn[It - Pe] = U + 1),
              It >= Mr ? (Mr = It) : (yn = !0),
              m(Et, C[It], B, null, j, Z, ae, J, ee),
              at++)
        }
        const as = yn ? Rg(wn) : vr
        for (Ke = as.length - 1, U = Mt - 1; U >= 0; U--) {
          const Et = Pe + U,
            It = C[Et],
            Ir = Et + 1 < ue ? C[Et + 1].el : H
          wn[U] === 0
            ? m(null, It, B, Ir, j, Z, ae, J, ee)
            : yn && (Ke < 0 || U !== as[Ke] ? tt(It, B, Ir, 2) : Ke--)
        }
      }
    },
    tt = (S, C, B, H, j = null) => {
      const { el: Z, type: ae, transition: J, children: ee, shapeFlag: U } = S
      if (U & 6) {
        tt(S.component.subTree, C, B, H)
        return
      }
      if (U & 128) {
        S.suspense.move(C, B, H)
        return
      }
      if (U & 64) {
        ae.move(S, C, B, pe)
        return
      }
      if (ae === Je) {
        r(Z, C, B)
        for (let be = 0; be < ee.length; be++) tt(ee[be], C, B, H)
        r(S.anchor, C, B)
        return
      }
      if (ae === Ps) {
        w(S, C, B)
        return
      }
      if (H !== 2 && U & 1 && J)
        if (H === 0) J.beforeEnter(Z), r(Z, C, B), kt(() => J.enter(Z), j)
        else {
          const { leave: be, delayLeave: ve, afterLeave: Ee } = J,
            Pe = () => r(Z, C, B),
            je = () => {
              be(Z, () => {
                Pe(), Ee && Ee()
              })
            }
          ve ? ve(Z, Pe, je) : je()
        }
      else r(Z, C, B)
    },
    nt = (S, C, B, H = !1, j = !1) => {
      const {
        type: Z,
        props: ae,
        ref: J,
        children: ee,
        dynamicChildren: U,
        shapeFlag: ue,
        patchFlag: be,
        dirs: ve,
      } = S
      if ((J != null && fi(J, null, B, S, !0), ue & 256)) {
        C.ctx.deactivate(S)
        return
      }
      const Ee = ue & 1 && ve,
        Pe = !Dr(S)
      let je
      if ((Pe && (je = ae && ae.onVnodeBeforeUnmount) && Zt(je, C, S), ue & 6))
        Ct(S.component, B, H)
      else {
        if (ue & 128) {
          S.suspense.unmount(B, H)
          return
        }
        Ee && Wn(S, null, C, "beforeUnmount"),
          ue & 64
            ? S.type.remove(S, C, B, j, pe, H)
            : U && (Z !== Je || (be > 0 && be & 64))
              ? it(U, C, B, !1, !0)
              : ((Z === Je && be & 384) || (!j && ue & 16)) && it(ee, C, B),
          H && Jt(S)
      }
      ;((Pe && (je = ae && ae.onVnodeUnmounted)) || Ee) &&
        kt(() => {
          je && Zt(je, C, S), Ee && Wn(S, null, C, "unmounted")
        }, B)
    },
    Jt = (S) => {
      const { type: C, el: B, anchor: H, transition: j } = S
      if (C === Je) {
        Dt(B, H)
        return
      }
      if (C === Ps) {
        M(S)
        return
      }
      const Z = () => {
        s(B), j && !j.persisted && j.afterLeave && j.afterLeave()
      }
      if (S.shapeFlag & 1 && j && !j.persisted) {
        const { leave: ae, delayLeave: J } = j,
          ee = () => ae(B, Z)
        J ? J(S.el, Z, ee) : ee()
      } else Z()
    },
    Dt = (S, C) => {
      let B
      for (; S !== C; ) (B = v(S)), s(S), (S = B)
      s(C)
    },
    Ct = (S, C, B) => {
      const { bum: H, scope: j, update: Z, subTree: ae, um: J } = S
      H && Ts(H),
        j.stop(),
        Z && ((Z.active = !1), nt(ae, S, C, B)),
        J && kt(J, C),
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
    it = (S, C, B, H = !1, j = !1, Z = 0) => {
      for (let ae = Z; ae < S.length; ae++) nt(S[ae], C, B, H, j)
    },
    R = (S) =>
      S.shapeFlag & 6
        ? R(S.component.subTree)
        : S.shapeFlag & 128
          ? S.suspense.next()
          : v(S.anchor || S.el)
  let le = !1
  const re = (S, C, B) => {
      S == null
        ? C._vnode && nt(C._vnode, null, null, !0)
        : m(C._vnode || null, S, C, null, null, null, B),
        le || ((le = !0), Mo(), ac(), (le = !1)),
        (C._vnode = S)
    },
    pe = {
      p: m,
      um: nt,
      m: tt,
      r: Jt,
      mt: Se,
      mc: q,
      pc: V,
      pbc: D,
      n: R,
      o: e,
    }
  let Re, Ze
  return (
    t && ([Re, Ze] = t(pe)), { render: re, hydrate: Re, createApp: $g(re, Re) }
  )
}
function Fa({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function qn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Ng(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function xc(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (_e(r) && _e(s))
    for (let a = 0; a < r.length; a++) {
      const i = r[a]
      let l = s[a]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[a] = $n(s[a])), (l.el = i.el)),
        n || xc(i, l)),
        l.type === ta && (l.el = i.el)
    }
}
function Rg(e) {
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
function Sc(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Sc(t)
}
const jg = (e) => e.__isTeleport,
  Je = Symbol.for("v-fgt"),
  ta = Symbol.for("v-txt"),
  Rn = Symbol.for("v-cmt"),
  Ps = Symbol.for("v-stc"),
  Gr = []
let Yt = null
function te(e = !1) {
  Gr.push((Yt = e ? null : []))
}
function Fg() {
  Gr.pop(), (Yt = Gr[Gr.length - 1] || null)
}
let Kr = 1
function Do(e) {
  Kr += e
}
function Ec(e) {
  return (
    (e.dynamicChildren = Kr > 0 ? Yt || vr : null),
    Fg(),
    Kr > 0 && Yt && Yt.push(e),
    e
  )
}
function xe(e, t, n, r, s, a) {
  return Ec(g(e, t, n, r, s, a, !0))
}
function De(e, t, n, r, s) {
  return Ec(he(e, t, n, r, s, !0))
}
function Ns(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function zr(e, t) {
  return e.type === t.type && e.key === t.key
}
const na = "__vInternal",
  _c = ({ key: e }) => e ?? null,
  $s = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ot(e) || St(e) || Te(e)
        ? { i: pt, r: e, k: t, f: !!n }
        : e
      : null
  )
function g(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  a = e === Je ? 0 : 1,
  i = !1,
  l = !1,
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _c(t),
    ref: t && $s(t),
    scopeId: Qs,
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
    ctx: pt,
  }
  return (
    l
      ? (qi(o, n), a & 128 && e.normalize(o))
      : n && (o.shapeFlag |= ot(n) ? 8 : 16),
    Kr > 0 &&
      !i &&
      Yt &&
      (o.patchFlag > 0 || a & 6) &&
      o.patchFlag !== 32 &&
      Yt.push(o),
    o
  )
}
const he = Dg
function Dg(e, t = null, n = null, r = 0, s = null, a = !1) {
  if (((!e || e === oc) && (e = Rn), Ns(e))) {
    const l = Zn(e, t, !0)
    return (
      n && qi(l, n),
      Kr > 0 &&
        !a &&
        Yt &&
        (l.shapeFlag & 6 ? (Yt[Yt.indexOf(e)] = l) : Yt.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Zg(e) && (e = e.__vccOpts), t)) {
    t = Hg(t)
    let { class: l, style: o } = t
    l && !ot(l) && (t.class = I(l)),
      rt(o) && (Ju(o) && !_e(o) && (o = bt({}, o)), (t.style = Ys(o)))
  }
  const i = ot(e) ? 1 : ug(e) ? 128 : jg(e) ? 64 : rt(e) ? 4 : Te(e) ? 2 : 0
  return g(e, t, n, r, s, i, a, !0)
}
function Hg(e) {
  return e ? (Ju(e) || na in e ? bt({}, e) : e) : null
}
function Zn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: a, children: i } = e,
    l = t ? Gg(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && _c(l),
    ref:
      t && t.ref
        ? n && s
          ? _e(s)
            ? s.concat($s(t))
            : [s, $s(t)]
          : $s(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Je ? (a === -1 ? 16 : a | 16) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Zn(e.ssContent),
    ssFallback: e.ssFallback && Zn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Ie(e = " ", t = 0) {
  return he(ta, null, e, t)
}
function Cc(e, t) {
  const n = he(Ps, null, e)
  return (n.staticCount = t), n
}
function st(e = "", t = !1) {
  return t ? (te(), De(Rn, null, e)) : he(Rn, null, e)
}
function Qt(e) {
  return e == null || typeof e == "boolean"
    ? he(Rn)
    : _e(e)
      ? he(Je, null, e.slice())
      : typeof e == "object"
        ? $n(e)
        : he(ta, null, String(e))
}
function $n(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Zn(e)
}
function qi(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (_e(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), qi(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(na in t)
        ? (t._ctx = pt)
        : s === 3 &&
          pt &&
          (pt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Te(t)
      ? ((t = { default: t, _ctx: pt }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ie(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Gg(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = I([t.class, r.class]))
      else if (s === "style") t.style = Ys([t.style, r.style])
      else if (Vs(s)) {
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
function Zt(e, t, n, r = null) {
  Kt(e, t, 7, [n, r])
}
const Vg = gc()
let Wg = 0
function qg(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Vg,
    a = {
      uid: Wg++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new E0(!0),
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
      propsOptions: mc(r, s),
      emitsOptions: lc(r, s),
      emit: null,
      emitted: null,
      propsDefaults: et,
      inheritAttrs: r.inheritAttrs,
      ctx: et,
      data: et,
      props: et,
      attrs: et,
      slots: et,
      refs: et,
      setupState: et,
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
    (a.emit = eg.bind(null, a)),
    e.ce && e.ce(a),
    a
  )
}
let xt = null,
  Rs,
  pi
{
  const e = Lu(),
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
  ;(Rs = t("__VUE_INSTANCE_SETTERS__", (n) => (xt = n))),
    (pi = t("__VUE_SSR_SETTERS__", (n) => (ra = n)))
}
const ns = (e) => {
    const t = xt
    return (
      Rs(e),
      e.scope.on(),
      () => {
        e.scope.off(), Rs(t)
      }
    )
  },
  Ho = () => {
    xt && xt.scope.off(), Rs(null)
  }
function Tc(e) {
  return e.vnode.shapeFlag & 4
}
let ra = !1
function Ug(e, t = !1) {
  t && pi(t)
  const { props: n, children: r } = e.vnode,
    s = Tc(e)
  Mg(e, n, s, t), Ag(e, r)
  const a = s ? Yg(e, t) : void 0
  return t && pi(!1), a
}
function Yg(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Zu(new Proxy(e.ctx, Sg)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Xg(e) : null),
      a = ns(e)
    er()
    const i = zn(r, e, 0, [e.props, s])
    if ((tr(), a(), Iu(i))) {
      if ((i.then(Ho, Ho), t))
        return i
          .then((l) => {
            Go(e, l, t)
          })
          .catch((l) => {
            Xs(l, e, 0)
          })
      e.asyncDep = i
    } else Go(e, i, t)
  } else kc(e, t)
}
function Go(e, t, n) {
  Te(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : rt(t) && (e.setupState = nc(t)),
    kc(e, n)
}
let Vo
function kc(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Vo && !r.render) {
      const s = r.template || Vi(e).template
      if (s) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: o } = r,
          f = bt(bt({ isCustomElement: a, delimiters: l }, i), o)
        r.render = Vo(s, f)
      }
    }
    e.render = r.render || Ht
  }
  {
    const s = ns(e)
    er()
    try {
      Eg(e)
    } finally {
      tr(), s()
    }
  }
}
function Kg(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return $t(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function Xg(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Kg(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function sa(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(nc(Zu(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Hr) return Hr[n](e)
        },
        has(t, n) {
          return n in t || n in Hr
        },
      }))
    )
}
function Jg(e, t = !0) {
  return Te(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Zg(e) {
  return Te(e) && "__vccOpts" in e
}
const me = (e, t) => W0(e, t, ra)
function Ue(e, t, n) {
  const r = arguments.length
  return r === 2
    ? rt(t) && !_e(t)
      ? Ns(t)
        ? he(e, null, [t])
        : he(e, t)
      : he(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Ns(n) && (n = [n]),
      he(e, t, n))
}
const Qg = "3.4.15"
const ev = "http://www.w3.org/2000/svg",
  tv = "http://www.w3.org/1998/Math/MathML",
  Mn = typeof document < "u" ? document : null,
  Wo = Mn && Mn.createElement("template"),
  nv = {
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
          ? Mn.createElementNS(ev, e)
          : t === "mathml"
            ? Mn.createElementNS(tv, e)
            : Mn.createElement(e, n ? { is: n } : void 0)
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      )
    },
    createText: (e) => Mn.createTextNode(e),
    createComment: (e) => Mn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Mn.querySelector(e),
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
        Wo.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const l = Wo.content
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
  rv = Symbol("_vtc")
function sv(e, t, n) {
  const r = e[rv]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const av = Symbol("_vod"),
  iv = Symbol("")
function lv(e, t, n) {
  const r = e.style,
    s = r.display,
    a = ot(n)
  if (n && !a) {
    if (t && !ot(t)) for (const i in t) n[i] == null && hi(r, i, "")
    for (const i in n) hi(r, i, n[i])
  } else if (a) {
    if (t !== n) {
      const i = r[iv]
      i && (n += ";" + i), (r.cssText = n)
    }
  } else t && e.removeAttribute("style")
  av in e && (r.display = s)
}
const qo = /\s*!important$/
function hi(e, t, n) {
  if (_e(n)) n.forEach((r) => hi(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = ov(e, t)
    qo.test(n)
      ? e.setProperty(kr(r), n.replace(qo, ""), "important")
      : (e[r] = n)
  }
}
const Uo = ["Webkit", "Moz", "ms"],
  Da = {}
function ov(e, t) {
  const n = Da[t]
  if (n) return n
  let r = rn(t)
  if (r !== "filter" && r in e) return (Da[t] = r)
  r = Us(r)
  for (let s = 0; s < Uo.length; s++) {
    const a = Uo[s] + r
    if (a in e) return (Da[t] = a)
  }
  return t
}
const Yo = "http://www.w3.org/1999/xlink"
function uv(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Yo, t.slice(6, t.length))
      : e.setAttributeNS(Yo, t, n)
  else {
    const a = S0(t)
    n == null || (a && !zu(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function cv(e, t, n, r, s, a, i) {
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
      ? (n = zu(n))
      : n == null && f === "string"
        ? ((n = ""), (o = !0))
        : f === "number" && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(t)
}
function pr(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function dv(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Ko = Symbol("_vei")
function fv(e, t, n, r, s = null) {
  const a = e[Ko] || (e[Ko] = {}),
    i = a[t]
  if (r && i) i.value = r
  else {
    const [l, o] = pv(t)
    if (r) {
      const f = (a[t] = vv(r, s))
      pr(e, l, f, o)
    } else i && (dv(e, l, i, o), (a[t] = void 0))
  }
}
const Xo = /(?:Once|Passive|Capture)$/
function pv(e) {
  let t
  if (Xo.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Xo)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : kr(e.slice(2)), t]
}
let Ha = 0
const hv = Promise.resolve(),
  gv = () => Ha || (hv.then(() => (Ha = 0)), (Ha = Date.now()))
function vv(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    Kt(mv(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = gv()), n
}
function mv(e, t) {
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
const Jo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  bv = (e, t, n, r, s, a, i, l, o) => {
    const f = s === "svg"
    t === "class"
      ? sv(e, r, f)
      : t === "style"
        ? lv(e, n, r)
        : Vs(t)
          ? Ti(t) || fv(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : yv(e, t, r, f)
              )
            ? cv(e, t, r, a, i, l, o)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              uv(e, t, r, f))
  }
function yv(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Jo(t) && Te(n))
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
  return Jo(t) && ot(n) ? !1 : t in e
}
const Zo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return _e(t) ? (n) => Ts(t, n) : t
}
function wv(e) {
  e.target.composing = !0
}
function Qo(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const Ga = Symbol("_assign"),
  xv = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[Ga] = Zo(s)
      const a = r || (s.props && s.props.type === "number")
      pr(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let l = e.value
        n && (l = l.trim()), a && (l = ni(l)), e[Ga](l)
      }),
        n &&
          pr(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (pr(e, "compositionstart", wv),
          pr(e, "compositionend", Qo),
          pr(e, "change", Qo))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      a,
    ) {
      if (((e[Ga] = Zo(a)), e.composing)) return
      const i = s || e.type === "number" ? ni(e.value) : e.value,
        l = t ?? ""
      i !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === l))) ||
          (e.value = l))
    },
  },
  Sv = bt({ patchProp: bv }, nv)
let eu
function Ev() {
  return eu || (eu = zg(Sv))
}
const _v = (...e) => {
  const t = Ev().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = Tv(r)
      if (!s) return
      const a = t._component
      !Te(a) && !a.render && !a.template && (a.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, Cv(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function Cv(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function Tv(e) {
  return ot(e) ? document.querySelector(e) : e
}
const vn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  kv = {}
function Pv(e, t) {
  const n = ig("router-view")
  return te(), De(n)
}
const $v = vn(kv, [["render", Pv]])
let Mv = 0
function Iv() {
  return ++Mv
}
function Jn() {
  return Iv()
}
function fe(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function zt(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, zt), r)
}
var Ov = Object.defineProperty,
  Av = (e, t, n) =>
    t in e
      ? Ov(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  tu = (e, t, n) => (Av(e, typeof t != "symbol" ? t + "" : t, n), n)
let Lv = class {
    constructor() {
      tu(this, "current", this.detect()), tu(this, "currentId", 0)
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
  aa = new Lv()
function Pr(e) {
  if (aa.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = fe(e)
    if (t) return t.ownerDocument
  }
  return document
}
let gi = [
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
var ut = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(ut || {}),
  On = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(On || {}),
  zv = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(zv || {})
function ia(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(gi)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var Ui = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Ui || {})
function Pc(e, t = 0) {
  var n
  return e === ((n = Pr(e)) == null ? void 0 : n.body)
    ? !1
    : zt(t, {
        0() {
          return e.matches(gi)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(gi)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var Bv = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Bv || {})
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
let Nv = ["textarea", "input"].join(",")
function Rv(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Nv)) !=
    null
    ? n
    : !1
}
function hr(e, t = (n) => n) {
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
function Lt(
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
    l = Array.isArray(e) ? (n ? hr(e) : e) : ia(e)
  s.length > 0 && l.length > 1 && (l = l.filter((P) => !s.includes(P))),
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
    b
  do {
    if (p >= v || p + v <= 0) return 0
    let P = f + p
    if (t & 16) P = (P + v) % v
    else {
      if (P < 0) return 3
      if (P >= v) return 1
    }
    ;(b = l[P]), b == null || b.focus(c), (p += o)
  } while (b !== i.activeElement)
  return t & 6 && Rv(b) && b.select(), 2
}
function jv() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Fv() {
  return /Android/gi.test(window.navigator.userAgent)
}
function Dv() {
  return jv() || Fv()
}
function xs(e, t, n) {
  aa.isServer ||
    hn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function $c(e, t, n) {
  aa.isServer ||
    hn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Hv(e, t, n = me(() => !0)) {
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
      let c = f instanceof HTMLElement ? f : fe(f)
      if (
        (c != null && c.contains(l)) ||
        (a.composed && a.composedPath().includes(c))
      )
        return
    }
    return !Pc(l, Ui.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l)
  }
  let s = ne(null)
  xs(
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
    xs(
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
    xs(
      "click",
      (a) => {
        Dv() || (s.value && (r(a, () => s.value), (s.value = null)))
      },
      !0,
    ),
    xs(
      "touchend",
      (a) => r(a, () => (a.target instanceof HTMLElement ? a.target : null)),
      !0,
    ),
    $c(
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
function nu(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Mc(e, t) {
  let n = ne(nu(e.value.type, e.value.as))
  return (
    yt(() => {
      n.value = nu(e.value.type, e.value.as)
    }),
    hn(() => {
      var r
      n.value ||
        (fe(t) &&
          fe(t) instanceof HTMLButtonElement &&
          !((r = fe(t)) != null && r.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var Xr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Xr || {}),
  Gv = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Gv || {})
function mn({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...s
}) {
  var a
  let i = Oc(r, n),
    l = Object.assign(s, { props: i })
  if (e || (t & 2 && i.static)) return Va(l)
  if (t & 1) {
    let o = (a = i.unmount) == null || a ? 0 : 1
    return zt(o, {
      0() {
        return null
      },
      1() {
        return Va({
          ...s,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Va(l)
}
function Va({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var a, i
  let { as: l, ...o } = Ac(e, ["unmount", "static"]),
    f = (a = n.default) == null ? void 0 : a.call(n, r),
    c = {}
  if (r) {
    let p = !1,
      v = []
    for (let [b, P] of Object.entries(r))
      typeof P == "boolean" && (p = !0), P === !0 && v.push(b)
    p && (c["data-headlessui-state"] = v.join(" "))
  }
  if (l === "template") {
    if (
      ((f = Ic(f ?? [])),
      Object.keys(o).length > 0 || Object.keys(t).length > 0)
    ) {
      let [p, ...v] = f ?? []
      if (!Vv(p) || v.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${s} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(o)
              .concat(Object.keys(t))
              .map((m) => m.trim())
              .filter((m, E, T) => T.indexOf(m) === E)
              .sort((m, E) => m.localeCompare(E))
              .map((m) => `  - ${m}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((m) => `  - ${m}`).join(`
`),
          ].join(`
`),
        )
      let b = Oc((i = p.props) != null ? i : {}, o, c),
        P = Zn(p, b, !0)
      for (let m in b)
        m.startsWith("on") && (P.props || (P.props = {}), (P.props[m] = b[m]))
      return P
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f
  }
  return Ue(l, Object.assign({}, o, c), { default: () => f })
}
function Ic(e) {
  return e.flatMap((t) => (t.type === Je ? Ic(t.children) : [t]))
}
function Oc(...e) {
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
function Ac(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function Vv(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var Sr = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Sr || {})
let Er = Bt({
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
        return mn({
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
  Lc = Symbol("Context")
var Jr = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Jr || {})
function Wv() {
  return ht(Lc, null)
}
function qv(e) {
  Gt(Lc, e)
}
var ft = ((e) => (
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
))(ft || {})
function Uv(e) {
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
function Yv(e, t, n, r) {
  aa.isServer ||
    hn((s) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, r),
        s(() => e.removeEventListener(t, n, r))
    })
}
var cn = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(cn || {})
function zc() {
  let e = ne(0)
  return (
    $c("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Kv({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = ne(null),
    s = Pr(r)
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
        (c.contains(fe(r)) ||
          c.contains(
            (o = (l = fe(r)) == null ? void 0 : l.getRootNode()) == null
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
      return n != null ? null : Ue(Er, { features: Sr.Hidden, ref: r })
    },
  }
}
let ru = Symbol("PortalParentContext")
function Xv() {
  let e = ht(ru, null),
    t = ne([])
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
          Gt(ru, s),
          () => {
            var l
            return (l = i.default) == null ? void 0 : l.call(i)
          }
        )
      },
    }),
  ]
}
var Jv = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Jv || {})
let Bc = Symbol("PopoverContext")
function Yi(e) {
  let t = ht(Bc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${vi.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Yi), n)
  }
  return t
}
let Zv = Symbol("PopoverGroupContext")
function Nc() {
  return ht(Zv, null)
}
let Rc = Symbol("PopoverPanelContext")
function Qv() {
  return ht(Rc, null)
}
let vi = Bt({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let a = ne(null)
      r({ el: a, $el: a })
      let i = ne(1),
        l = ne(null),
        o = ne(null),
        f = ne(null),
        c = ne(null),
        p = me(() => Pr(a)),
        v = me(() => {
          var z, O
          if (!fe(l) || !fe(c)) return !1
          for (let X of document.querySelectorAll("body > *"))
            if (
              Number(X == null ? void 0 : X.contains(fe(l))) ^
              Number(X == null ? void 0 : X.contains(fe(c)))
            )
              return !0
          let se = ia(),
            q = se.indexOf(fe(l)),
            G = (q + se.length - 1) % se.length,
            D = (q + 1) % se.length,
            Q = se[G],
            ge = se[D]
          return (
            !((z = fe(c)) != null && z.contains(Q)) &&
            !((O = fe(c)) != null && O.contains(ge))
          )
        }),
        b = {
          popoverState: i,
          buttonId: ne(null),
          panelId: ne(null),
          panel: c,
          button: l,
          isPortalled: v,
          beforePanelSentinel: o,
          afterPanelSentinel: f,
          togglePopover() {
            i.value = zt(i.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            i.value !== 1 && (i.value = 1)
          },
          close(z) {
            b.closePopover()
            let O = z
              ? z instanceof HTMLElement
                ? z
                : z.value instanceof HTMLElement
                  ? fe(z)
                  : fe(b.button)
              : fe(b.button)
            O == null || O.focus()
          },
        }
      Gt(Bc, b), qv(me(() => zt(i.value, { 0: Jr.Open, 1: Jr.Closed })))
      let P = {
          buttonId: b.buttonId,
          panelId: b.panelId,
          close() {
            b.closePopover()
          },
        },
        m = Nc(),
        E = m == null ? void 0 : m.registerPopover,
        [T, x] = Xv(),
        w = Kv({
          mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef,
          portals: T,
          defaultContainers: [l, c],
        })
      function M() {
        var z, O, se, q
        return (q = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null
          ? q
          : ((z = p.value) == null ? void 0 : z.activeElement) &&
              (((O = fe(l)) == null
                ? void 0
                : O.contains(p.value.activeElement)) ||
                ((se = fe(c)) == null
                  ? void 0
                  : se.contains(p.value.activeElement)))
      }
      return (
        hn(() => (E == null ? void 0 : E(P))),
        Yv(
          (s = p.value) == null ? void 0 : s.defaultView,
          "focus",
          (z) => {
            var O, se
            z.target !== window &&
              z.target instanceof HTMLElement &&
              i.value === 0 &&
              (M() ||
                (l &&
                  c &&
                  (w.contains(z.target) ||
                    ((O = fe(b.beforePanelSentinel)) != null &&
                      O.contains(z.target)) ||
                    ((se = fe(b.afterPanelSentinel)) != null &&
                      se.contains(z.target)) ||
                    b.closePopover())))
          },
          !0,
        ),
        Hv(
          w.resolveContainers,
          (z, O) => {
            var se
            b.closePopover(),
              Pc(O, Ui.Loose) ||
                (z.preventDefault(), (se = fe(l)) == null || se.focus())
          },
          me(() => i.value === 0),
        ),
        () => {
          let z = { open: i.value === 0, close: b.close }
          return Ue(Je, [
            Ue(x, {}, () =>
              mn({
                theirProps: { ...e, ...n },
                ourProps: { ref: a },
                slot: z,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            Ue(w.MainTreeNode),
          ])
        }
      )
    },
  }),
  su = Bt({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Jn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Yi("PopoverButton"),
        a = me(() => Pr(s.button))
      r({ el: s.button, $el: s.button }),
        yt(() => {
          s.buttonId.value = e.id
        }),
        jn(() => {
          s.buttonId.value = null
        })
      let i = Nc(),
        l = i == null ? void 0 : i.closeOthers,
        o = Qv(),
        f = me(() => (o === null ? !1 : o.value === s.panelId.value)),
        c = ne(null),
        p = `headlessui-focus-sentinel-${Jn()}`
      f.value ||
        hn(() => {
          s.button.value = fe(c)
        })
      let v = Mc(
        me(() => ({ as: e.as, type: t.type })),
        c,
      )
      function b(w) {
        var M, z, O, se, q
        if (f.value) {
          if (s.popoverState.value === 1) return
          switch (w.key) {
            case ft.Space:
            case ft.Enter:
              w.preventDefault(),
                (z = (M = w.target).click) == null || z.call(M),
                s.closePopover(),
                (O = fe(s.button)) == null || O.focus()
              break
          }
        } else
          switch (w.key) {
            case ft.Space:
            case ft.Enter:
              w.preventDefault(),
                w.stopPropagation(),
                s.popoverState.value === 1 &&
                  (l == null || l(s.buttonId.value)),
                s.togglePopover()
              break
            case ft.Escape:
              if (s.popoverState.value !== 0)
                return l == null ? void 0 : l(s.buttonId.value)
              if (
                !fe(s.button) ||
                ((se = a.value) != null &&
                  se.activeElement &&
                  !(
                    (q = fe(s.button)) != null &&
                    q.contains(a.value.activeElement)
                  ))
              )
                return
              w.preventDefault(), w.stopPropagation(), s.closePopover()
              break
          }
      }
      function P(w) {
        f.value || (w.key === ft.Space && w.preventDefault())
      }
      function m(w) {
        var M, z
        e.disabled ||
          (f.value
            ? (s.closePopover(), (M = fe(s.button)) == null || M.focus())
            : (w.preventDefault(),
              w.stopPropagation(),
              s.popoverState.value === 1 && (l == null || l(s.buttonId.value)),
              s.togglePopover(),
              (z = fe(s.button)) == null || z.focus()))
      }
      function E(w) {
        w.preventDefault(), w.stopPropagation()
      }
      let T = zc()
      function x() {
        let w = fe(s.panel)
        if (!w) return
        function M() {
          zt(T.value, {
            [cn.Forwards]: () => Lt(w, ut.First),
            [cn.Backwards]: () => Lt(w, ut.Last),
          }) === On.Error &&
            Lt(
              ia().filter((z) => z.dataset.headlessuiFocusGuard !== "true"),
              zt(T.value, {
                [cn.Forwards]: ut.Next,
                [cn.Backwards]: ut.Previous,
              }),
              { relativeTo: fe(s.button) },
            )
        }
        M()
      }
      return () => {
        let w = s.popoverState.value === 0,
          M = { open: w },
          { id: z, ...O } = e,
          se = f.value
            ? { ref: c, type: v.value, onKeydown: b, onClick: m }
            : {
                ref: c,
                id: z,
                type: v.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": fe(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: b,
                onKeyup: P,
                onClick: m,
                onMousedown: E,
              }
        return Ue(Je, [
          mn({
            ourProps: se,
            theirProps: { ...t, ...O },
            slot: M,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          w &&
            !f.value &&
            s.isPortalled.value &&
            Ue(Er, {
              id: p,
              features: Sr.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: x,
            }),
        ])
      }
    },
  }),
  au = Bt({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${Jn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let { focus: s } = e,
        a = Yi("PopoverPanel"),
        i = me(() => Pr(a.panel)),
        l = `headlessui-focus-sentinel-before-${Jn()}`,
        o = `headlessui-focus-sentinel-after-${Jn()}`
      r({ el: a.panel, $el: a.panel }),
        yt(() => {
          a.panelId.value = e.id
        }),
        jn(() => {
          a.panelId.value = null
        }),
        Gt(Rc, a.panelId),
        hn(() => {
          var E, T
          if (!s || a.popoverState.value !== 0 || !a.panel) return
          let x = (E = i.value) == null ? void 0 : E.activeElement
          ;((T = fe(a.panel)) != null && T.contains(x)) ||
            Lt(fe(a.panel), ut.First)
        })
      let f = Wv(),
        c = me(() =>
          f !== null
            ? (f.value & Jr.Open) === Jr.Open
            : a.popoverState.value === 0,
        )
      function p(E) {
        var T, x
        switch (E.key) {
          case ft.Escape:
            if (
              a.popoverState.value !== 0 ||
              !fe(a.panel) ||
              (i.value &&
                !(
                  (T = fe(a.panel)) != null && T.contains(i.value.activeElement)
                ))
            )
              return
            E.preventDefault(),
              E.stopPropagation(),
              a.closePopover(),
              (x = fe(a.button)) == null || x.focus()
            break
        }
      }
      function v(E) {
        var T, x, w, M, z
        let O = E.relatedTarget
        O &&
          fe(a.panel) &&
          (((T = fe(a.panel)) != null && T.contains(O)) ||
            (a.closePopover(),
            (((w =
              (x = fe(a.beforePanelSentinel)) == null ? void 0 : x.contains) !=
              null &&
              w.call(x, O)) ||
              ((z =
                (M = fe(a.afterPanelSentinel)) == null ? void 0 : M.contains) !=
                null &&
                z.call(M, O))) &&
              O.focus({ preventScroll: !0 })))
      }
      let b = zc()
      function P() {
        let E = fe(a.panel)
        if (!E) return
        function T() {
          zt(b.value, {
            [cn.Forwards]: () => {
              var x
              Lt(E, ut.First) === On.Error &&
                ((x = fe(a.afterPanelSentinel)) == null || x.focus())
            },
            [cn.Backwards]: () => {
              var x
              ;(x = fe(a.button)) == null || x.focus({ preventScroll: !0 })
            },
          })
        }
        T()
      }
      function m() {
        let E = fe(a.panel)
        if (!E) return
        function T() {
          zt(b.value, {
            [cn.Forwards]: () => {
              let x = fe(a.button),
                w = fe(a.panel)
              if (!x) return
              let M = ia(),
                z = M.indexOf(x),
                O = M.slice(0, z + 1),
                se = [...M.slice(z + 1), ...O]
              for (let q of se.slice())
                if (
                  q.dataset.headlessuiFocusGuard === "true" ||
                  (w != null && w.contains(q))
                ) {
                  let G = se.indexOf(q)
                  G !== -1 && se.splice(G, 1)
                }
              Lt(se, ut.First, { sorted: !1 })
            },
            [cn.Backwards]: () => {
              var x
              Lt(E, ut.Previous) === On.Error &&
                ((x = fe(a.button)) == null || x.focus())
            },
          })
        }
        T()
      }
      return () => {
        let E = { open: a.popoverState.value === 0, close: a.close },
          { id: T, focus: x, ...w } = e,
          M = {
            ref: a.panel,
            id: T,
            onKeydown: p,
            onFocusout: s && a.popoverState.value === 0 ? v : void 0,
            tabIndex: -1,
          }
        return mn({
          ourProps: M,
          theirProps: { ...t, ...w },
          attrs: t,
          slot: E,
          slots: {
            ...n,
            default: (...z) => {
              var O
              return [
                Ue(Je, [
                  c.value &&
                    a.isPortalled.value &&
                    Ue(Er, {
                      id: l,
                      ref: a.beforePanelSentinel,
                      features: Sr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: P,
                    }),
                  (O = n.default) == null ? void 0 : O.call(n, ...z),
                  c.value &&
                    a.isPortalled.value &&
                    Ue(Er, {
                      id: o,
                      ref: a.afterPanelSentinel,
                      features: Sr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: m,
                    }),
                ]),
              ]
            },
          },
          features: Xr.RenderStrategy | Xr.Static,
          visible: c.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  em = Bt({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = ne(!0)
      return () =>
        t.value
          ? Ue(Er, {
              as: "button",
              type: "button",
              features: Sr.Focusable,
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
var tm = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(tm || {}),
  nm = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(nm || {})
let jc = Symbol("TabsContext")
function rs(e) {
  let t = ht(jc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, rs), n)
  }
  return t
}
let Ki = Symbol("TabsSSRContext"),
  rm = Bt({
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
      let a = ne((s = e.selectedIndex) != null ? s : e.defaultIndex),
        i = ne([]),
        l = ne([]),
        o = me(() => e.selectedIndex !== null),
        f = me(() => (o.value ? e.selectedIndex : a.value))
      function c(m) {
        var E
        let T = hr(p.tabs.value, fe),
          x = hr(p.panels.value, fe),
          w = T.filter((M) => {
            var z
            return !((z = fe(M)) != null && z.hasAttribute("disabled"))
          })
        if (m < 0 || m > T.length - 1) {
          let M = zt(a.value === null ? 0 : Math.sign(m - a.value), {
              [-1]: () => 1,
              0: () =>
                zt(Math.sign(m), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            z = zt(M, {
              0: () => T.indexOf(w[0]),
              1: () => T.indexOf(w[w.length - 1]),
            })
          z !== -1 && (a.value = z), (p.tabs.value = T), (p.panels.value = x)
        } else {
          let M = T.slice(0, m),
            z = [...T.slice(m), ...M].find((se) => w.includes(se))
          if (!z) return
          let O = (E = T.indexOf(z)) != null ? E : p.selectedIndex.value
          O === -1 && (O = p.selectedIndex.value),
            (a.value = O),
            (p.tabs.value = T),
            (p.panels.value = x)
        }
      }
      let p = {
        selectedIndex: me(() => {
          var m, E
          return (E = (m = a.value) != null ? m : e.defaultIndex) != null
            ? E
            : null
        }),
        orientation: me(() => (e.vertical ? "vertical" : "horizontal")),
        activation: me(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: l,
        setSelectedIndex(m) {
          f.value !== m && r("change", m), o.value || c(m)
        },
        registerTab(m) {
          var E
          if (i.value.includes(m)) return
          let T = i.value[a.value]
          i.value.push(m), (i.value = hr(i.value, fe))
          let x = (E = i.value.indexOf(T)) != null ? E : a.value
          x !== -1 && (a.value = x)
        },
        unregisterTab(m) {
          let E = i.value.indexOf(m)
          E !== -1 && i.value.splice(E, 1)
        },
        registerPanel(m) {
          l.value.includes(m) || (l.value.push(m), (l.value = hr(l.value, fe)))
        },
        unregisterPanel(m) {
          let E = l.value.indexOf(m)
          E !== -1 && l.value.splice(E, 1)
        },
      }
      Gt(jc, p)
      let v = ne({ tabs: [], panels: [] }),
        b = ne(!1)
      yt(() => {
        b.value = !0
      }),
        Gt(
          Ki,
          me(() => (b.value ? null : v.value)),
        )
      let P = me(() => e.selectedIndex)
      return (
        yt(() => {
          Bn(
            [P],
            () => {
              var m
              return c((m = e.selectedIndex) != null ? m : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        hn(() => {
          if (!o.value || f.value == null || p.tabs.value.length <= 0) return
          let m = hr(p.tabs.value, fe)
          m.some((E, T) => fe(p.tabs.value[T]) !== fe(E)) &&
            p.setSelectedIndex(
              m.findIndex((E) => fe(E) === fe(p.tabs.value[f.value])),
            )
        }),
        () => {
          let m = { selectedIndex: a.value }
          return Ue(Je, [
            i.value.length <= 0 &&
              Ue(em, {
                onFocus: () => {
                  for (let E of i.value) {
                    let T = fe(E)
                    if ((T == null ? void 0 : T.tabIndex) === 0)
                      return T.focus(), !0
                  }
                  return !1
                },
              }),
            mn({
              theirProps: {
                ...n,
                ...Ac(e, [
                  "selectedIndex",
                  "defaultIndex",
                  "manual",
                  "vertical",
                  "onChange",
                ]),
              },
              ourProps: {},
              slot: m,
              slots: t,
              attrs: n,
              name: "TabGroup",
            }),
          ])
        }
      )
    },
  }),
  sm = Bt({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = rs("TabList")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value },
          a = { role: "tablist", "aria-orientation": r.orientation.value }
        return mn({
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
  am = Bt({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-tabs-tab-${Jn()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = rs("Tab"),
        a = ne(null)
      r({ el: a, $el: a }),
        yt(() => s.registerTab(a)),
        jn(() => s.unregisterTab(a))
      let i = ht(Ki),
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
        let x = E()
        if (x === On.Success && s.activation.value === "auto") {
          let w = (T = Pr(a)) == null ? void 0 : T.activeElement,
            M = s.tabs.value.findIndex((z) => fe(z) === w)
          M !== -1 && s.setSelectedIndex(M)
        }
        return x
      }
      function p(E) {
        let T = s.tabs.value.map((x) => fe(x)).filter(Boolean)
        if (E.key === ft.Space || E.key === ft.Enter) {
          E.preventDefault(), E.stopPropagation(), s.setSelectedIndex(o.value)
          return
        }
        switch (E.key) {
          case ft.Home:
          case ft.PageUp:
            return (
              E.preventDefault(), E.stopPropagation(), c(() => Lt(T, ut.First))
            )
          case ft.End:
          case ft.PageDown:
            return (
              E.preventDefault(), E.stopPropagation(), c(() => Lt(T, ut.Last))
            )
        }
        if (
          c(() =>
            zt(s.orientation.value, {
              vertical() {
                return E.key === ft.ArrowUp
                  ? Lt(T, ut.Previous | ut.WrapAround)
                  : E.key === ft.ArrowDown
                    ? Lt(T, ut.Next | ut.WrapAround)
                    : On.Error
              },
              horizontal() {
                return E.key === ft.ArrowLeft
                  ? Lt(T, ut.Previous | ut.WrapAround)
                  : E.key === ft.ArrowRight
                    ? Lt(T, ut.Next | ut.WrapAround)
                    : On.Error
              },
            }),
          ) === On.Success
        )
          return E.preventDefault()
      }
      let v = ne(!1)
      function b() {
        var E
        v.value ||
          ((v.value = !0),
          !e.disabled &&
            ((E = fe(a)) == null || E.focus({ preventScroll: !0 }),
            s.setSelectedIndex(o.value),
            Uv(() => {
              v.value = !1
            })))
      }
      function P(E) {
        E.preventDefault()
      }
      let m = Mc(
        me(() => ({ as: e.as, type: t.type })),
        a,
      )
      return () => {
        var E
        let T = { selected: f.value },
          { id: x, ...w } = e,
          M = {
            ref: a,
            onKeydown: p,
            onMousedown: P,
            onClick: b,
            id: x,
            role: "tab",
            type: m.value,
            "aria-controls":
              (E = fe(s.panels.value[o.value])) == null ? void 0 : E.id,
            "aria-selected": f.value,
            tabIndex: f.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return mn({
          ourProps: M,
          theirProps: w,
          slot: T,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  im = Bt({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = rs("TabPanels")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value }
        return mn({
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
  Br = Bt({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${Jn()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = rs("TabPanel"),
        a = ne(null)
      r({ el: a, $el: a }),
        yt(() => s.registerPanel(a)),
        jn(() => s.unregisterPanel(a))
      let i = ht(Ki),
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
          { id: v, tabIndex: b, ...P } = e,
          m = {
            ref: a,
            id: v,
            role: "tabpanel",
            "aria-labelledby":
              (c = fe(s.tabs.value[o.value])) == null ? void 0 : c.id,
            tabIndex: f.value ? b : -1,
          }
        return !f.value && e.unmount && !e.static
          ? Ue(Er, { as: "span", "aria-hidden": !0, ...m })
          : mn({
              ourProps: m,
              theirProps: P,
              slot: p,
              attrs: t,
              slots: n,
              features: Xr.Static | Xr.RenderStrategy,
              visible: f.value,
              name: "TabPanel",
            })
      }
    },
  })
const gr = typeof window < "u"
function lm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const qe = Object.assign
function Wa(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = Xt(s) ? s.map(e) : e(s)
  }
  return n
}
const Vr = () => {},
  Xt = Array.isArray,
  om = /\/$/,
  um = (e) => e.replace(om, "")
function qa(e, t, n = "/") {
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
    (r = pm(r ?? t, n)),
    { fullPath: r + (a && "?") + a + i, path: r, query: s, hash: i }
  )
}
function cm(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function iu(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function dm(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    _r(t.matched[r], n.matched[s]) &&
    Fc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function _r(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Fc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!fm(e[n], t[n])) return !1
  return !0
}
function fm(e, t) {
  return Xt(e) ? lu(e, t) : Xt(t) ? lu(t, e) : e === t
}
function lu(e, t) {
  return Xt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function pm(e, t) {
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
var Zr
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(Zr || (Zr = {}))
var Wr
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Wr || (Wr = {}))
function hm(e) {
  if (!e)
    if (gr) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), um(e)
}
const gm = /^[^#]+#/
function vm(e, t) {
  return e.replace(gm, "#") + t
}
function mm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const la = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function bm(e) {
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
    t = mm(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function ou(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const mi = new Map()
function ym(e, t) {
  mi.set(e, t)
}
function wm(e) {
  const t = mi.get(e)
  return mi.delete(e), t
}
let xm = () => location.protocol + "//" + location.host
function Dc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      o = s.slice(l)
    return o[0] !== "/" && (o = "/" + o), iu(o, "")
  }
  return iu(n, e) + r + s
}
function Sm(e, t, n, r) {
  let s = [],
    a = [],
    i = null
  const l = ({ state: v }) => {
    const b = Dc(e, location),
      P = n.value,
      m = t.value
    let E = 0
    if (v) {
      if (((n.value = b), (t.value = v), i && i === P)) {
        i = null
        return
      }
      E = m ? v.position - m.position : 0
    } else r(b)
    s.forEach((T) => {
      T(n.value, P, {
        delta: E,
        type: Zr.pop,
        direction: E ? (E > 0 ? Wr.forward : Wr.back) : Wr.unknown,
      })
    })
  }
  function o() {
    i = n.value
  }
  function f(v) {
    s.push(v)
    const b = () => {
      const P = s.indexOf(v)
      P > -1 && s.splice(P, 1)
    }
    return a.push(b), b
  }
  function c() {
    const { history: v } = window
    v.state && v.replaceState(qe({}, v.state, { scroll: la() }), "")
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
function uu(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? la() : null,
  }
}
function Em(e) {
  const { history: t, location: n } = window,
    r = { value: Dc(e, n) },
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
          : xm() + e + o
    try {
      t[c ? "replaceState" : "pushState"](f, "", v), (s.value = f)
    } catch (b) {
      console.error(b), n[c ? "replace" : "assign"](v)
    }
  }
  function i(o, f) {
    const c = qe({}, t.state, uu(s.value.back, o, s.value.forward, !0), f, {
      position: s.value.position,
    })
    a(o, c, !0), (r.value = o)
  }
  function l(o, f) {
    const c = qe({}, s.value, t.state, { forward: o, scroll: la() })
    a(c.current, c, !0)
    const p = qe({}, uu(r.value, o, null), { position: c.position + 1 }, f)
    a(o, p, !1), (r.value = o)
  }
  return { location: r, state: s, push: l, replace: i }
}
function _m(e) {
  e = hm(e)
  const t = Em(e),
    n = Sm(e, t.state, t.location, t.replace)
  function r(a, i = !0) {
    i || n.pauseListeners(), history.go(a)
  }
  const s = qe(
    { location: "", base: e, go: r, createHref: vm.bind(null, e) },
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
function Cm(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Hc(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const Tn = {
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
  Gc = Symbol("")
var cu
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(cu || (cu = {}))
function Cr(e, t) {
  return qe(new Error(), { type: e, [Gc]: !0 }, t)
}
function on(e, t) {
  return e instanceof Error && Gc in e && (t == null || !!(e.type & t))
}
const du = "[^/]+?",
  Tm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  km = /[.+*?^${}()[\]/\\]/g
function Pm(e, t) {
  const n = qe({}, Tm, t),
    r = []
  let s = n.start ? "^" : ""
  const a = []
  for (const f of e) {
    const c = f.length ? [] : [90]
    n.strict && !f.length && (s += "/")
    for (let p = 0; p < f.length; p++) {
      const v = f[p]
      let b = 40 + (n.sensitive ? 0.25 : 0)
      if (v.type === 0)
        p || (s += "/"), (s += v.value.replace(km, "\\$&")), (b += 40)
      else if (v.type === 1) {
        const { value: P, repeatable: m, optional: E, regexp: T } = v
        a.push({ name: P, repeatable: m, optional: E })
        const x = T || du
        if (x !== du) {
          b += 10
          try {
            new RegExp(`(${x})`)
          } catch (M) {
            throw new Error(
              `Invalid custom RegExp for param "${P}" (${x}): ` + M.message,
            )
          }
        }
        let w = m ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`
        p || (w = E && f.length < 2 ? `(?:/${w})` : "/" + w),
          E && (w += "?"),
          (s += w),
          (b += 20),
          E && (b += -8),
          m && (b += -20),
          x === ".*" && (b += -50)
      }
      c.push(b)
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
      const b = c[v] || "",
        P = a[v - 1]
      p[P.name] = b && P.repeatable ? b.split("/") : b
    }
    return p
  }
  function o(f) {
    let c = "",
      p = !1
    for (const v of e) {
      ;(!p || !c.endsWith("/")) && (c += "/"), (p = !1)
      for (const b of v)
        if (b.type === 0) c += b.value
        else if (b.type === 1) {
          const { value: P, repeatable: m, optional: E } = b,
            T = P in f ? f[P] : ""
          if (Xt(T) && !m)
            throw new Error(
              `Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const x = Xt(T) ? T.join("/") : T
          if (!x)
            if (E)
              v.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (p = !0))
            else throw new Error(`Missing required param "${P}"`)
          c += x
        }
    }
    return c || "/"
  }
  return { re: i, score: r, keys: a, parse: l, stringify: o }
}
function $m(e, t) {
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
function Mm(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const a = $m(r[n], s[n])
    if (a) return a
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (fu(r)) return 1
    if (fu(s)) return -1
  }
  return s.length - r.length
}
function fu(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Im = { type: 0, value: "" },
  Om = /[a-zA-Z0-9_]/
function Am(e) {
  if (!e) return [[]]
  if (e === "/") return [[Im]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(b) {
    throw new Error(`ERR (${n})/"${f}": ${b}`)
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
          : Om.test(o)
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
function Lm(e, t, n) {
  const r = Pm(Am(e.path), n),
    s = qe(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function zm(e, t) {
  const n = [],
    r = new Map()
  t = gu({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(c) {
    return r.get(c)
  }
  function a(c, p, v) {
    const b = !v,
      P = Bm(c)
    P.aliasOf = v && v.record
    const m = gu(t, c),
      E = [P]
    if ("alias" in c) {
      const w = typeof c.alias == "string" ? [c.alias] : c.alias
      for (const M of w)
        E.push(
          qe({}, P, {
            components: v ? v.record.components : P.components,
            path: M,
            aliasOf: v ? v.record : P,
          }),
        )
    }
    let T, x
    for (const w of E) {
      const { path: M } = w
      if (p && M[0] !== "/") {
        const z = p.record.path,
          O = z[z.length - 1] === "/" ? "" : "/"
        w.path = p.record.path + (M && O + M)
      }
      if (
        ((T = Lm(w, p, m)),
        v
          ? v.alias.push(T)
          : ((x = x || T),
            x !== T && x.alias.push(T),
            b && c.name && !hu(T) && i(c.name)),
        P.children)
      ) {
        const z = P.children
        for (let O = 0; O < z.length; O++) a(z[O], T, v && v.children[O])
      }
      ;(v = v || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          o(T)
    }
    return x
      ? () => {
          i(x)
        }
      : Vr
  }
  function i(c) {
    if (Hc(c)) {
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
      Mm(c, n[p]) >= 0 &&
      (c.record.path !== n[p].record.path || !Vc(c, n[p]));

    )
      p++
    n.splice(p, 0, c), c.record.name && !hu(c) && r.set(c.record.name, c)
  }
  function f(c, p) {
    let v,
      b = {},
      P,
      m
    if ("name" in c && c.name) {
      if (((v = r.get(c.name)), !v)) throw Cr(1, { location: c })
      ;(m = v.record.name),
        (b = qe(
          pu(
            p.params,
            v.keys.filter((x) => !x.optional).map((x) => x.name),
          ),
          c.params &&
            pu(
              c.params,
              v.keys.map((x) => x.name),
            ),
        )),
        (P = v.stringify(b))
    } else if ("path" in c)
      (P = c.path),
        (v = n.find((x) => x.re.test(P))),
        v && ((b = v.parse(P)), (m = v.record.name))
    else {
      if (((v = p.name ? r.get(p.name) : n.find((x) => x.re.test(p.path))), !v))
        throw Cr(1, { location: c, currentLocation: p })
      ;(m = v.record.name),
        (b = qe({}, p.params, c.params)),
        (P = v.stringify(b))
    }
    const E = []
    let T = v
    for (; T; ) E.unshift(T.record), (T = T.parent)
    return { name: m, path: P, params: b, matched: E, meta: Rm(E) }
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
function pu(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function Bm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Nm(e),
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
function Nm(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function hu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Rm(e) {
  return e.reduce((t, n) => qe(t, n.meta), {})
}
function gu(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function Vc(e, t) {
  return t.children.some((n) => n === e || Vc(e, n))
}
const Wc = /#/g,
  jm = /&/g,
  Fm = /\//g,
  Dm = /=/g,
  Hm = /\?/g,
  qc = /\+/g,
  Gm = /%5B/g,
  Vm = /%5D/g,
  Uc = /%5E/g,
  Wm = /%60/g,
  Yc = /%7B/g,
  qm = /%7C/g,
  Kc = /%7D/g,
  Um = /%20/g
function Xi(e) {
  return encodeURI("" + e)
    .replace(qm, "|")
    .replace(Gm, "[")
    .replace(Vm, "]")
}
function Ym(e) {
  return Xi(e).replace(Yc, "{").replace(Kc, "}").replace(Uc, "^")
}
function bi(e) {
  return Xi(e)
    .replace(qc, "%2B")
    .replace(Um, "+")
    .replace(Wc, "%23")
    .replace(jm, "%26")
    .replace(Wm, "`")
    .replace(Yc, "{")
    .replace(Kc, "}")
    .replace(Uc, "^")
}
function Km(e) {
  return bi(e).replace(Dm, "%3D")
}
function Xm(e) {
  return Xi(e).replace(Wc, "%23").replace(Hm, "%3F")
}
function Jm(e) {
  return e == null ? "" : Xm(e).replace(Fm, "%2F")
}
function js(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function Zm(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const a = r[s].replace(qc, " "),
      i = a.indexOf("="),
      l = js(i < 0 ? a : a.slice(0, i)),
      o = i < 0 ? null : js(a.slice(i + 1))
    if (l in t) {
      let f = t[l]
      Xt(f) || (f = t[l] = [f]), f.push(o)
    } else t[l] = o
  }
  return t
}
function vu(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = Km(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Xt(r) ? r.map((a) => a && bi(a)) : [r && bi(r)]).forEach((a) => {
      a !== void 0 &&
        ((t += (t.length ? "&" : "") + n), a != null && (t += "=" + a))
    })
  }
  return t
}
function Qm(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = Xt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r)
  }
  return t
}
const e1 = Symbol(""),
  mu = Symbol(""),
  oa = Symbol(""),
  Xc = Symbol(""),
  yi = Symbol("")
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
function In(e, t, n, r, s) {
  const a = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((i, l) => {
      const o = (p) => {
          p === !1
            ? l(Cr(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : Cm(p)
                ? l(Cr(2, { from: t, to: p }))
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
function Ua(e, t, n, r) {
  const s = []
  for (const a of e)
    for (const i in a.components) {
      let l = a.components[i]
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (t1(l)) {
          const f = (l.__vccOpts || l)[t]
          f && s.push(In(f, n, r, a, i))
        } else {
          let o = l()
          s.push(() =>
            o.then((f) => {
              if (!f)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${a.path}"`),
                )
              const c = lm(f) ? f.default : f
              a.components[i] = c
              const v = (c.__vccOpts || c)[t]
              return v && In(v, n, r, a, i)()
            }),
          )
        }
    }
  return s
}
function t1(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function bu(e) {
  const t = ht(oa),
    n = ht(Xc),
    r = me(() => t.resolve(we(e.to))),
    s = me(() => {
      const { matched: o } = r.value,
        { length: f } = o,
        c = o[f - 1],
        p = n.matched
      if (!c || !p.length) return -1
      const v = p.findIndex(_r.bind(null, c))
      if (v > -1) return v
      const b = yu(o[f - 2])
      return f > 1 && yu(c) === b && p[p.length - 1].path !== b
        ? p.findIndex(_r.bind(null, o[f - 2]))
        : v
    }),
    a = me(() => s.value > -1 && a1(n.params, r.value.params)),
    i = me(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Fc(n.params, r.value.params),
    )
  function l(o = {}) {
    return s1(o)
      ? t[we(e.replace) ? "replace" : "push"](we(e.to)).catch(Vr)
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
const n1 = Bt({
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
    useLink: bu,
    setup(e, { slots: t }) {
      const n = Qr(bu(e)),
        { options: r } = ht(oa),
        s = me(() => ({
          [wu(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [wu(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const a = t.default && t.default(n)
        return e.custom
          ? a
          : Ue(
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
  r1 = n1
function s1(e) {
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
function a1(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!Xt(s) || s.length !== r.length || r.some((a, i) => a !== s[i]))
      return !1
  }
  return !0
}
function yu(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const wu = (e, t, n) => e ?? t ?? n,
  i1 = Bt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ht(yi),
        s = me(() => e.route || r.value),
        a = ht(mu, 0),
        i = me(() => {
          let f = we(a)
          const { matched: c } = s.value
          let p
          for (; (p = c[f]) && !p.components; ) f++
          return f
        }),
        l = me(() => s.value.matched[i.value])
      Gt(
        mu,
        me(() => i.value + 1),
      ),
        Gt(e1, l),
        Gt(yi, s)
      const o = ne()
      return (
        Bn(
          () => [o.value, l.value, e.name],
          ([f, c, p], [v, b, P]) => {
            c &&
              ((c.instances[p] = f),
              b &&
                b !== c &&
                f &&
                f === v &&
                (c.leaveGuards.size || (c.leaveGuards = b.leaveGuards),
                c.updateGuards.size || (c.updateGuards = b.updateGuards))),
              f &&
                c &&
                (!b || !_r(c, b) || !v) &&
                (c.enterCallbacks[p] || []).forEach((m) => m(f))
          },
          { flush: "post" },
        ),
        () => {
          const f = s.value,
            c = e.name,
            p = l.value,
            v = p && p.components[c]
          if (!v) return xu(n.default, { Component: v, route: f })
          const b = p.props[c],
            P = b
              ? b === !0
                ? f.params
                : typeof b == "function"
                  ? b(f)
                  : b
              : null,
            E = Ue(
              v,
              qe({}, P, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (p.instances[c] = null)
                },
                ref: o,
              }),
            )
          return xu(n.default, { Component: E, route: f }) || E
        }
      )
    },
  })
function xu(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const l1 = i1
function o1(e) {
  const t = zm(e.routes, e),
    n = e.parseQuery || Zm,
    r = e.stringifyQuery || vu,
    s = e.history,
    a = Nr(),
    i = Nr(),
    l = Nr(),
    o = q0(Tn)
  let f = Tn
  gr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const c = Wa.bind(null, (R) => "" + R),
    p = Wa.bind(null, Jm),
    v = Wa.bind(null, js)
  function b(R, le) {
    let re, pe
    return (
      Hc(R) ? ((re = t.getRecordMatcher(R)), (pe = le)) : (pe = R),
      t.addRoute(pe, re)
    )
  }
  function P(R) {
    const le = t.getRecordMatcher(R)
    le && t.removeRoute(le)
  }
  function m() {
    return t.getRoutes().map((R) => R.record)
  }
  function E(R) {
    return !!t.getRecordMatcher(R)
  }
  function T(R, le) {
    if (((le = qe({}, le || o.value)), typeof R == "string")) {
      const C = qa(n, R, le.path),
        B = t.resolve({ path: C.path }, le),
        H = s.createHref(C.fullPath)
      return qe(C, B, {
        params: v(B.params),
        hash: js(C.hash),
        redirectedFrom: void 0,
        href: H,
      })
    }
    let re
    if ("path" in R) re = qe({}, R, { path: qa(n, R.path, le.path).path })
    else {
      const C = qe({}, R.params)
      for (const B in C) C[B] == null && delete C[B]
      ;(re = qe({}, R, { params: p(C) })), (le.params = p(le.params))
    }
    const pe = t.resolve(re, le),
      Re = R.hash || ""
    pe.params = c(v(pe.params))
    const Ze = cm(r, qe({}, R, { hash: Ym(Re), path: pe.path })),
      S = s.createHref(Ze)
    return qe(
      { fullPath: Ze, hash: Re, query: r === vu ? Qm(R.query) : R.query || {} },
      pe,
      { redirectedFrom: void 0, href: S },
    )
  }
  function x(R) {
    return typeof R == "string" ? qa(n, R, o.value.path) : qe({}, R)
  }
  function w(R, le) {
    if (f !== R) return Cr(8, { from: le, to: R })
  }
  function M(R) {
    return se(R)
  }
  function z(R) {
    return M(qe(x(R), { replace: !0 }))
  }
  function O(R) {
    const le = R.matched[R.matched.length - 1]
    if (le && le.redirect) {
      const { redirect: re } = le
      let pe = typeof re == "function" ? re(R) : re
      return (
        typeof pe == "string" &&
          ((pe =
            pe.includes("?") || pe.includes("#") ? (pe = x(pe)) : { path: pe }),
          (pe.params = {})),
        qe(
          {
            query: R.query,
            hash: R.hash,
            params: "path" in pe ? {} : R.params,
          },
          pe,
        )
      )
    }
  }
  function se(R, le) {
    const re = (f = T(R)),
      pe = o.value,
      Re = R.state,
      Ze = R.force,
      S = R.replace === !0,
      C = O(re)
    if (C)
      return se(
        qe(x(C), {
          state: typeof C == "object" ? qe({}, Re, C.state) : Re,
          force: Ze,
          replace: S,
        }),
        le || re,
      )
    const B = re
    B.redirectedFrom = le
    let H
    return (
      !Ze &&
        dm(r, pe, re) &&
        ((H = Cr(16, { to: B, from: pe })), tt(pe, pe, !0, !1)),
      (H ? Promise.resolve(H) : D(B, pe))
        .catch((j) => (on(j) ? (on(j, 2) ? j : ke(j)) : V(j, B, pe)))
        .then((j) => {
          if (j) {
            if (on(j, 2))
              return se(
                qe({ replace: S }, x(j.to), {
                  state: typeof j.to == "object" ? qe({}, Re, j.to.state) : Re,
                  force: Ze,
                }),
                le || B,
              )
          } else j = ge(B, pe, !0, S, Re)
          return Q(B, pe, j), j
        })
    )
  }
  function q(R, le) {
    const re = w(R, le)
    return re ? Promise.reject(re) : Promise.resolve()
  }
  function G(R) {
    const le = Dt.values().next().value
    return le && typeof le.runWithContext == "function"
      ? le.runWithContext(R)
      : R()
  }
  function D(R, le) {
    let re
    const [pe, Re, Ze] = u1(R, le)
    re = Ua(pe.reverse(), "beforeRouteLeave", R, le)
    for (const C of pe)
      C.leaveGuards.forEach((B) => {
        re.push(In(B, R, le))
      })
    const S = q.bind(null, R, le)
    return (
      re.push(S),
      it(re)
        .then(() => {
          re = []
          for (const C of a.list()) re.push(In(C, R, le))
          return re.push(S), it(re)
        })
        .then(() => {
          re = Ua(Re, "beforeRouteUpdate", R, le)
          for (const C of Re)
            C.updateGuards.forEach((B) => {
              re.push(In(B, R, le))
            })
          return re.push(S), it(re)
        })
        .then(() => {
          re = []
          for (const C of Ze)
            if (C.beforeEnter)
              if (Xt(C.beforeEnter))
                for (const B of C.beforeEnter) re.push(In(B, R, le))
              else re.push(In(C.beforeEnter, R, le))
          return re.push(S), it(re)
        })
        .then(
          () => (
            R.matched.forEach((C) => (C.enterCallbacks = {})),
            (re = Ua(Ze, "beforeRouteEnter", R, le)),
            re.push(S),
            it(re)
          ),
        )
        .then(() => {
          re = []
          for (const C of i.list()) re.push(In(C, R, le))
          return re.push(S), it(re)
        })
        .catch((C) => (on(C, 8) ? C : Promise.reject(C)))
    )
  }
  function Q(R, le, re) {
    l.list().forEach((pe) => G(() => pe(R, le, re)))
  }
  function ge(R, le, re, pe, Re) {
    const Ze = w(R, le)
    if (Ze) return Ze
    const S = le === Tn,
      C = gr ? history.state : {}
    re &&
      (pe || S
        ? s.replace(R.fullPath, qe({ scroll: S && C && C.scroll }, Re))
        : s.push(R.fullPath, Re)),
      (o.value = R),
      tt(R, le, re, S),
      ke()
  }
  let X
  function Se() {
    X ||
      (X = s.listen((R, le, re) => {
        if (!Ct.listening) return
        const pe = T(R),
          Re = O(pe)
        if (Re) {
          se(qe(Re, { replace: !0 }), pe).catch(Vr)
          return
        }
        f = pe
        const Ze = o.value
        gr && ym(ou(Ze.fullPath, re.delta), la()),
          D(pe, Ze)
            .catch((S) =>
              on(S, 12)
                ? S
                : on(S, 2)
                  ? (se(S.to, pe)
                      .then((C) => {
                        on(C, 20) &&
                          !re.delta &&
                          re.type === Zr.pop &&
                          s.go(-1, !1)
                      })
                      .catch(Vr),
                    Promise.reject())
                  : (re.delta && s.go(-re.delta, !1), V(S, pe, Ze)),
            )
            .then((S) => {
              ;(S = S || ge(pe, Ze, !1)),
                S &&
                  (re.delta && !on(S, 8)
                    ? s.go(-re.delta, !1)
                    : re.type === Zr.pop && on(S, 20) && s.go(-1, !1)),
                Q(pe, Ze, S)
            })
            .catch(Vr)
      }))
  }
  let Ce = Nr(),
    F = Nr(),
    oe
  function V(R, le, re) {
    ke(R)
    const pe = F.list()
    return (
      pe.length ? pe.forEach((Re) => Re(R, le, re)) : console.error(R),
      Promise.reject(R)
    )
  }
  function Ye() {
    return oe && o.value !== Tn
      ? Promise.resolve()
      : new Promise((R, le) => {
          Ce.add([R, le])
        })
  }
  function ke(R) {
    return (
      oe ||
        ((oe = !R),
        Se(),
        Ce.list().forEach(([le, re]) => (R ? re(R) : le())),
        Ce.reset()),
      R
    )
  }
  function tt(R, le, re, pe) {
    const { scrollBehavior: Re } = e
    if (!gr || !Re) return Promise.resolve()
    const Ze =
      (!re && wm(ou(R.fullPath, 0))) ||
      ((pe || !re) && history.state && history.state.scroll) ||
      null
    return Js()
      .then(() => Re(R, le, Ze))
      .then((S) => S && bm(S))
      .catch((S) => V(S, R, le))
  }
  const nt = (R) => s.go(R)
  let Jt
  const Dt = new Set(),
    Ct = {
      currentRoute: o,
      listening: !0,
      addRoute: b,
      removeRoute: P,
      hasRoute: E,
      getRoutes: m,
      resolve: T,
      options: e,
      push: M,
      replace: z,
      go: nt,
      back: () => nt(-1),
      forward: () => nt(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: F.add,
      isReady: Ye,
      install(R) {
        const le = this
        R.component("RouterLink", r1),
          R.component("RouterView", l1),
          (R.config.globalProperties.$router = le),
          Object.defineProperty(R.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => we(o),
          }),
          gr &&
            !Jt &&
            o.value === Tn &&
            ((Jt = !0), M(s.location).catch((Re) => {}))
        const re = {}
        for (const Re in Tn)
          Object.defineProperty(re, Re, {
            get: () => o.value[Re],
            enumerable: !0,
          })
        R.provide(oa, le), R.provide(Xc, Ku(re)), R.provide(yi, o)
        const pe = R.unmount
        Dt.add(R),
          (R.unmount = function () {
            Dt.delete(R),
              Dt.size < 1 &&
                ((f = Tn),
                X && X(),
                (X = null),
                (o.value = Tn),
                (Jt = !1),
                (oe = !1)),
              pe()
          })
      },
    }
  function it(R) {
    return R.reduce((le, re) => le.then(() => G(re)), Promise.resolve())
  }
  return Ct
}
function u1(e, t) {
  const n = [],
    r = [],
    s = [],
    a = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < a; i++) {
    const l = t.matched[i]
    l && (e.matched.find((f) => _r(f, l)) ? r.push(l) : n.push(l))
    const o = e.matched[i]
    o && (t.matched.find((f) => _r(f, o)) || s.push(o))
  }
  return [n, r, s]
}
function c1() {
  return ht(oa)
}
var Ss = {
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
const d1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  gt =
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
      Ue(
        "svg",
        {
          ...Ss,
          width: n || Ss.width,
          height: n || Ss.height,
          stroke: a || Ss.stroke,
          "stroke-width": s ? (Number(r) * 24) / Number(n) : r,
          ...o,
          class: ["lucide", `lucide-${d1(e)}`],
          ...l,
        },
        [...t.map((c) => Ue(...c)), ...(f.default ? [f.default()] : [])],
      )
const Su = gt("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
const f1 = gt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
const p1 = gt("CloudDrizzleIcon", [
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
const h1 = gt("CloudSunIcon", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }],
])
const Jc = gt("EyeOffIcon", [
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
const g1 = gt("EyeIcon", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
])
const v1 = gt("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
])
const m1 = gt("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
const b1 = gt("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
const y1 = gt("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
const w1 = gt("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
const x1 = gt("PencilRulerIcon", [
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
const S1 = gt("RabbitIcon", [
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
const Ms = gt("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
const E1 = gt("SunIcon", [
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
const Ya = gt("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
const _1 = gt("TurtleIcon", [
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
const wi = gt("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  nr = (e) => (es("data-v-e6afc4f6"), (e = e()), ts(), e),
  C1 = { class: "flex justify-center p-5 gap-5 content-center" },
  T1 = nr(() => g("div", { class: "w-1/12" }, null, -1)),
  k1 = { class: "flex justify-between gap-2 w-full content-center" },
  P1 = { class: "flex gap-1 p-2" },
  $1 = { class: "flex gap-5 p-2 relative" },
  M1 = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  I1 = nr(() => g("b", null, "Art and Animation", -1)),
  O1 = [I1],
  A1 = { class: "flex gap-5 content-center" },
  L1 = { class: "lg:hidden flex" },
  z1 = { class: "flex gap-1 p-2" },
  B1 = { class: "flex flex-col gap-2 p-2" },
  N1 = { class: "flex justify-between" },
  R1 = nr(() => g("div", { class: "w-1/12" }, null, -1)),
  j1 = { class: "flex justify-between items-center" },
  F1 = { class: "flex gap-1 p-2" },
  D1 = nr(() => g("li", { class: "py-2 px-3 rounded" }, "Contact", -1)),
  H1 = [D1],
  G1 = nr(() => g("li", { class: "py-2 px-3 rounded" }, "Web Portfolio", -1)),
  V1 = [G1],
  W1 = nr(() => g("li", { class: "py-2 px-3 rounded" }, "Web Services", -1)),
  q1 = [W1],
  U1 = Cc(
    '<li class="py-2 px-3 rounded opacity-75" data-v-e6afc4f6>Creative Projects</li><ul class="ml-5" data-v-e6afc4f6><li class="py-2 px-3 rounded" data-v-e6afc4f6>Art and Animation</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Custom Software</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Cooking and Recipes</li></ul>',
    2,
  ),
  Y1 = nr(() => g("li", { class: "py-2 px-3 rounded" }, "About Me", -1)),
  K1 = [Y1],
  X1 = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = ne(5),
        r = t,
        s = c1(),
        a = (f) => {
          ;(n.value = f.target.value), r("update:brightness", n.value)
          let c = "--swiper-navigation-color",
            p = "--swiper-pagination-color",
            v = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(c, v),
            document.documentElement.style.setProperty(p, v)
        }
      yt(() => {
        let f = window.localStorage
        if (f.getItem("brightness")) {
          n.value = Number(f.getItem("brightness"))
          let c = "--swiper-navigation-color",
            p = "--swiper-pagination-color",
            v = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(c, v),
            document.documentElement.style.setProperty(p, v)
        }
      })
      const i = () => {
          window.location.href = "/"
        },
        l = () => {
          let f = document.getElementById("mobileMenu")
          f.classList.contains("hidden")
            ? f.classList.remove("hidden")
            : f.classList.add("hidden")
        },
        o = (f) => {
          l(), s.push(f)
        }
      return (f, c) => (
        te(),
        xe(
          Je,
          null,
          [
            g("div", C1, [
              T1,
              g(
                "div",
                {
                  class: I([
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
                  g("div", k1, [
                    g("div", P1, [
                      he(
                        we(Ya),
                        {
                          class: I({
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
                      g(
                        "p",
                        {
                          class: I([
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
                          onClick: i,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                    g("div", $1, [
                      g(
                        "a",
                        {
                          onClick:
                            c[0] ||
                            (c[0] = (p) => f.$router.push("/portfolio")),
                          class: "cursor-pointer",
                        },
                        [
                          g(
                            "h6",
                            {
                              class: I([
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
                        ],
                      ),
                      g(
                        "a",
                        {
                          onClick: c[1] || (c[1] = (p) => f.$router.push("/")),
                        },
                        [
                          g(
                            "h6",
                            {
                              class: I([
                                "font-semibold cursor-pointer",
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
                        ],
                      ),
                      he(
                        we(vi),
                        { class: "relative inline-block text-left" },
                        {
                          default: Xe(() => [
                            he(
                              we(su),
                              {
                                "aria-label": "Creative projects dropdown menu",
                                class: I([
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
                                default: Xe(() => [
                                  Ie(" Creative Projects"),
                                  he(we(f1)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            he(
                              we(au),
                              {
                                class: I([
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
                                default: Xe(() => [
                                  g("div", M1, [
                                    g(
                                      "a",
                                      {
                                        href: "https://hansenstudios.art/",
                                        class: I([
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
                                      O1,
                                      2,
                                    ),
                                    g(
                                      "a",
                                      {
                                        href: "#",
                                        class: I([
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
                                    g(
                                      "a",
                                      {
                                        href: "#",
                                        class: I([
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
                                    g(
                                      "a",
                                      {
                                        href: "#",
                                        class: I([
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
                      g(
                        "a",
                        {
                          onClick:
                            c[2] || (c[2] = (p) => f.$router.push("/about-me")),
                        },
                        [
                          g(
                            "h6",
                            {
                              class: I([
                                "font-semibold flex cursor-pointer",
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
                        ],
                      ),
                    ]),
                    g("div", A1, [
                      g(
                        "a",
                        {
                          onClick:
                            c[3] || (c[3] = (p) => f.$router.push("/contact")),
                        },
                        [
                          g(
                            "button",
                            {
                              class: I([
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
                        ],
                      ),
                    ]),
                  ]),
                ],
                2,
              ),
              g(
                "div",
                {
                  id: "headerRightColumn",
                  class: I([
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
                  g("div", L1, [
                    g("div", z1, [
                      he(
                        we(Ya),
                        {
                          class: I({
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
                      g(
                        "p",
                        {
                          class: I([
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
                          onClick: i,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                  ]),
                  he(
                    we(b1),
                    {
                      class: I([
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
                      onClick: c[4] || (c[4] = (p) => l()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  he(we(vi), null, {
                    default: Xe(() => [
                      he(
                        we(su),
                        {
                          "aria-label": "Toggle brightness dropdown menu",
                          class: I([
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
                          default: Xe(() => [
                            n.value == 5
                              ? (te(),
                                De(we(E1), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (te(),
                                  De(we(h1), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (te(),
                                    De(we(p1), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (te(),
                                      De(we(w1), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (te(),
                                      De(we(y1), {
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
                        we(au),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: Xe(() => [
                            g("div", B1, [
                              g("div", N1, [
                                cc(
                                  g(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        c[5] || (c[5] = (p) => (n.value = p)),
                                      onInput: a,
                                      class: "slider w-20 mx-auto",
                                      id: "myRange",
                                    },
                                    null,
                                    544,
                                  ),
                                  [[xv, n.value]],
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
              R1,
            ]),
            g(
              "div",
              {
                id: "mobileMenu",
                class: I([
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
                g("div", j1, [
                  g("div", F1, [
                    he(
                      we(Ya),
                      {
                        class: I({
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
                    g(
                      "p",
                      {
                        class: I([
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
                        onClick: i,
                        id: "logoText",
                      },
                      " josephhansen.dev ",
                      2,
                    ),
                  ]),
                  he(
                    we(wi),
                    {
                      class: I({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: c[6] || (c[6] = (p) => l()),
                      "aria-label": "Close mobile menu",
                    },
                    null,
                    8,
                    ["class"],
                  ),
                ]),
                g(
                  "ul",
                  {
                    class: I([
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
                  [
                    g(
                      "a",
                      { onClick: c[7] || (c[7] = (p) => o("/contact")) },
                      H1,
                    ),
                    g(
                      "a",
                      { onClick: c[8] || (c[8] = (p) => o("/portfolio")) },
                      V1,
                    ),
                    g("a", { onClick: c[9] || (c[9] = (p) => o("/")) }, q1),
                    U1,
                    g(
                      "a",
                      { onClick: c[10] || (c[10] = (p) => o("/about-me")) },
                      K1,
                    ),
                  ],
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
  J1 = vn(X1, [["__scopeId", "data-v-e6afc4f6"]]),
  Z1 = { class: "flex justify-center py-5 flex-col" },
  Q1 = { class: "inline-block relative" },
  eb = { class: "font-semibold text-center px-1" },
  tb = { class: "flex py-5 justify-center gap-3 w-full" },
  nb = { href: "/portfolio" },
  rb = { href: "/pricing" },
  sb = {
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
  ab = Object.assign(sb, {
    __name: "Hero",
    props: { brightness: Number },
    setup(e) {
      const t = ne([
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
      let n = ne(0),
        r = ne(!1)
      yt(() => {
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
          jn(() => {
            window.removeEventListener("mousedown", a),
              window.removeEventListener("mouseup", i)
          })
      }),
        Di(() => {
          r.value = !1
        })
      const s = me(() => t.value[n.value])
      return (a, i) => {
        const l = og("typewriter")
        return (
          te(),
          xe("div", Z1, [
            g(
              "h1",
              {
                class: I([
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
                g("div", Q1, [
                  cc((te(), xe("span", eb, [Ie(Pt(s.value), 1)])), [
                    [l, s.value],
                  ]),
                  g(
                    "div",
                    {
                      class: I([
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
            g(
              "p",
              {
                class: I([
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
            g("div", tb, [
              g("a", nb, [
                g(
                  "button",
                  {
                    "aria-label": "View my portfolio",
                    class: I([
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
              g("a", rb, [
                g(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    class: I([
                      "rounded px-5 py-2 text-white font-semibold",
                      {
                        "bg-slate-700": e.brightness >= 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-400": e.brightness <= 2,
                      },
                    ]),
                  },
                  " Pricing ",
                  2,
                ),
              ]),
            ]),
          ])
        )
      }
    },
  })
function Eu(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function Ji(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Eu(t[n]) && Eu(e[n]) && Object.keys(t[n]).length > 0 && Ji(e[n], t[n])
    })
}
const Zc = {
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
function pn() {
  const e = typeof document < "u" ? document : {}
  return Ji(e, Zc), e
}
const ib = {
  document: Zc,
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
function Nt() {
  const e = typeof window < "u" ? window : {}
  return Ji(e, ib), e
}
function lb(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  )
}
function ob(e) {
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
function xi(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function Fs() {
  return Date.now()
}
function ub(e) {
  const t = Nt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function cb(e, t) {
  t === void 0 && (t = "x")
  const n = Nt()
  let r, s, a
  const i = ub(e)
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
function Es(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  )
}
function db(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function At() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !db(r)) {
      const s = Object.keys(Object(r)).filter((a) => t.indexOf(a) < 0)
      for (let a = 0, i = s.length; a < i; a += 1) {
        const l = s[a],
          o = Object.getOwnPropertyDescriptor(r, l)
        o !== void 0 &&
          o.enumerable &&
          (Es(e[l]) && Es(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : At(e[l], r[l])
            : !Es(e[l]) && Es(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : At(e[l], r[l]))
              : (e[l] = r[l]))
      }
    }
  }
  return e
}
function _s(e, t, n) {
  e.style.setProperty(t, n)
}
function Qc(e) {
  let { swiper: t, targetPosition: n, side: r } = e
  const s = Nt(),
    a = -t.translate
  let i = null,
    l
  const o = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    s.cancelAnimationFrame(t.cssModeFrameID)
  const f = n > a ? "next" : "prev",
    c = (v, b) => (f === "next" && v >= b) || (f === "prev" && v <= b),
    p = () => {
      ;(l = new Date().getTime()), i === null && (i = l)
      const v = Math.max(Math.min((l - i) / o, 1), 0),
        b = 0.5 - Math.cos(v * Math.PI) / 2
      let P = a + b * (n - a)
      if ((c(P, n) && (P = n), t.wrapperEl.scrollTo({ [r]: P }), c(P, n))) {
        ;(t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: P })
          }),
          s.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = s.requestAnimationFrame(p)
    }
  p()
}
function nn(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t))
}
function Ds(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function Hs(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : lb(t))), n
}
function fb(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function pb(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function An(e, t) {
  return Nt().getComputedStyle(e, null).getPropertyValue(t)
}
function Gs(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function ed(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement)
  return n
}
function Si(e, t, n) {
  const r = Nt()
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
let Ka
function hb() {
  const e = Nt(),
    t = pn()
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
function td() {
  return Ka || (Ka = hb()), Ka
}
let Xa
function gb(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = td(),
    r = Nt(),
    s = r.navigator.platform,
    a = t || r.navigator.userAgent,
    i = { ios: !1, android: !1 },
    l = r.screen.width,
    o = r.screen.height,
    f = a.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = a.match(/(iPad).*OS\s([\d_]+)/)
  const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    b = s === "Win32"
  let P = s === "MacIntel"
  const m = [
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
      P &&
      n.touch &&
      m.indexOf(`${l}x${o}`) >= 0 &&
      ((c = a.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (P = !1)),
    f && !b && ((i.os = "android"), (i.android = !0)),
    (c || v || p) && ((i.os = "ios"), (i.ios = !0)),
    i
  )
}
function vb(e) {
  return e === void 0 && (e = {}), Xa || (Xa = gb(e)), Xa
}
let Ja
function mb() {
  const e = Nt()
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
function bb() {
  return Ja || (Ja = mb()), Ja
}
function yb(e) {
  let { swiper: t, on: n, emit: r } = e
  const s = Nt()
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
            const { width: v, height: b } = t
            let P = v,
              m = b
            p.forEach((E) => {
              let { contentBoxSize: T, contentRect: x, target: w } = E
              ;(w && w !== t.el) ||
                ((P = x ? x.width : (T[0] || T).inlineSize),
                (m = x ? x.height : (T[0] || T).blockSize))
            }),
              (P !== v || m !== b) && l()
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
function wb(e) {
  let { swiper: t, extendParams: n, on: r, emit: s } = e
  const a = [],
    i = Nt(),
    l = function (c, p) {
      p === void 0 && (p = {})
      const v = i.MutationObserver || i.WebkitMutationObserver,
        b = new v((P) => {
          if (t.__preventObserver__) return
          if (P.length === 1) {
            s("observerUpdate", P[0])
            return
          }
          const m = function () {
            s("observerUpdate", P[0])
          }
          i.requestAnimationFrame
            ? i.requestAnimationFrame(m)
            : i.setTimeout(m, 0)
        })
      b.observe(c, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: typeof p.childList > "u" ? !0 : p.childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        a.push(b)
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = ed(t.hostEl)
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
var xb = {
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
function Sb() {
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
        parseInt(An(r, "padding-left") || 0, 10) -
        parseInt(An(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(An(r, "padding-top") || 0, 10) -
        parseInt(An(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function Eb() {
  const e = this
  function t(D, Q) {
    return parseFloat(D.getPropertyValue(e.getDirectionLabel(Q)) || 0)
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: s, size: a, rtlTranslate: i, wrongRTL: l } = e,
    o = e.virtual && n.virtual.enabled,
    f = o ? e.virtual.slides.length : e.slides.length,
    c = nn(s, `.${e.params.slideClass}, swiper-slide`),
    p = o ? e.virtual.slides.length : c.length
  let v = []
  const b = [],
    P = []
  let m = n.slidesOffsetBefore
  typeof m == "function" && (m = n.slidesOffsetBefore.call(e))
  let E = n.slidesOffsetAfter
  typeof E == "function" && (E = n.slidesOffsetAfter.call(e))
  const T = e.snapGrid.length,
    x = e.slidesGrid.length
  let w = n.spaceBetween,
    M = -m,
    z = 0,
    O = 0
  if (typeof a > "u") return
  typeof w == "string" && w.indexOf("%") >= 0
    ? (w = (parseFloat(w.replace("%", "")) / 100) * a)
    : typeof w == "string" && (w = parseFloat(w)),
    (e.virtualSize = -w),
    c.forEach((D) => {
      i ? (D.style.marginLeft = "") : (D.style.marginRight = ""),
        (D.style.marginBottom = ""),
        (D.style.marginTop = "")
    }),
    n.centeredSlides &&
      n.cssMode &&
      (_s(r, "--swiper-centered-offset-before", ""),
      _s(r, "--swiper-centered-offset-after", ""))
  const se = n.grid && n.grid.rows > 1 && e.grid
  se ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
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
      se && e.grid.updateSlide(D, Q, c),
      !(c[D] && An(Q, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        G && (c[D].style[e.getDirectionLabel("width")] = "")
        const ge = getComputedStyle(Q),
          X = Q.style.transform,
          Se = Q.style.webkitTransform
        if (
          (X && (Q.style.transform = "none"),
          Se && (Q.style.webkitTransform = "none"),
          n.roundLengths)
        )
          q = e.isHorizontal() ? Si(Q, "width", !0) : Si(Q, "height", !0)
        else {
          const Ce = t(ge, "width"),
            F = t(ge, "padding-left"),
            oe = t(ge, "padding-right"),
            V = t(ge, "margin-left"),
            Ye = t(ge, "margin-right"),
            ke = ge.getPropertyValue("box-sizing")
          if (ke && ke === "border-box") q = Ce + V + Ye
          else {
            const { clientWidth: tt, offsetWidth: nt } = Q
            q = Ce + F + oe + V + Ye + (nt - tt)
          }
        }
        X && (Q.style.transform = X),
          Se && (Q.style.webkitTransform = Se),
          n.roundLengths && (q = Math.floor(q))
      } else
        (q = (a - (n.slidesPerView - 1) * w) / n.slidesPerView),
          n.roundLengths && (q = Math.floor(q)),
          c[D] && (c[D].style[e.getDirectionLabel("width")] = `${q}px`)
      c[D] && (c[D].swiperSlideSize = q),
        P.push(q),
        n.centeredSlides
          ? ((M = M + q / 2 + z / 2 + w),
            z === 0 && D !== 0 && (M = M - a / 2 - w),
            D === 0 && (M = M - a / 2 - w),
            Math.abs(M) < 1 / 1e3 && (M = 0),
            n.roundLengths && (M = Math.floor(M)),
            O % n.slidesPerGroup === 0 && v.push(M),
            b.push(M))
          : (n.roundLengths && (M = Math.floor(M)),
            (O - Math.min(e.params.slidesPerGroupSkip, O)) %
              e.params.slidesPerGroup ===
              0 && v.push(M),
            b.push(M),
            (M = M + q + w)),
        (e.virtualSize += q + w),
        (z = q),
        (O += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + E),
    i &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + w}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`),
    se && e.grid.updateWrapperSize(q, v),
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
    const D = P[0] + w
    if (n.slidesPerGroup > 1) {
      const Q = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        ge = D * n.slidesPerGroup
      for (let X = 0; X < Q; X += 1) v.push(v[v.length - 1] + ge)
    }
    for (let Q = 0; Q < e.virtual.slidesBefore + e.virtual.slidesAfter; Q += 1)
      n.slidesPerGroup === 1 && v.push(v[v.length - 1] + D),
        b.push(b[b.length - 1] + D),
        (e.virtualSize += D)
  }
  if ((v.length === 0 && (v = [0]), w !== 0)) {
    const D =
      e.isHorizontal() && i ? "marginLeft" : e.getDirectionLabel("marginRight")
    c.filter((Q, ge) =>
      !n.cssMode || n.loop ? !0 : ge !== c.length - 1,
    ).forEach((Q) => {
      Q.style[D] = `${w}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let D = 0
    P.forEach((ge) => {
      D += ge + (w || 0)
    }),
      (D -= w)
    const Q = D - a
    v = v.map((ge) => (ge <= 0 ? -m : ge > Q ? Q + E : ge))
  }
  if (n.centerInsufficientSlides) {
    let D = 0
    if (
      (P.forEach((Q) => {
        D += Q + (w || 0)
      }),
      (D -= w),
      D < a)
    ) {
      const Q = (a - D) / 2
      v.forEach((ge, X) => {
        v[X] = ge - Q
      }),
        b.forEach((ge, X) => {
          b[X] = ge + Q
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: v,
      slidesGrid: b,
      slidesSizesGrid: P,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    _s(r, "--swiper-centered-offset-before", `${-v[0]}px`),
      _s(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - P[P.length - 1] / 2}px`,
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
    b.length !== x && e.emit("slidesGridLengthChange"),
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
function _b(e) {
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
function Cb() {
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
function Tb(e) {
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
      b = -(i - c),
      P = b + t.slidesSizesGrid[o],
      m = b >= 0 && b <= t.size - t.slidesSizesGrid[o]
    ;((b >= 0 && b < t.size - 1) ||
      (P > 1 && P <= t.size) ||
      (b <= 0 && P >= t.size)) &&
      (t.visibleSlides.push(f),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      m && r[o].classList.add(n.slideFullyVisibleClass),
      (f.progress = s ? -p : p),
      (f.originalProgress = s ? -v : v)
  }
}
function kb(e) {
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
      b = t.slidesGrid[p],
      P = t.slidesGrid[t.slidesGrid.length - 1],
      m = Math.abs(e)
    m >= v ? (l = (m - v) / P) : (l = (m + P - b) / P), l > 1 && (l -= 1)
  }
  Object.assign(t, { progress: s, progressLoop: l, isBeginning: a, isEnd: i }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !o && t.emit("reachBeginning toEdge"),
    i && !f && t.emit("reachEnd toEdge"),
    ((o && !a) || (f && !i)) && t.emit("fromEdge"),
    t.emit("progress", s)
}
function Pb() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: s } = e,
    a = e.virtual && n.virtual.enabled,
    i = e.grid && n.grid && n.grid.rows > 1,
    l = (p) => nn(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0]
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
      : ((c = pb(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c && (c = t[0]),
        c && c.classList.add(n.slideNextClass),
        (f = fb(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !f === 0 && (f = t[t.length - 1]),
        f && f.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses()
}
const Is = (e, t) => {
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
  Za = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  Ei = (e) => {
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
          l.includes(o.column) && Za(e, f)
        })
      return
    }
    const a = s + r - 1
    if (e.params.rewind || e.params.loop)
      for (let i = s - t; i <= a + t; i += 1) {
        const l = ((i % n) + n) % n
        ;(l < s || l > a) && Za(e, l)
      }
    else
      for (let i = Math.max(s - t, 0); i <= Math.min(a + t, n - 1); i += 1)
        i !== s && (i > a || i < s) && Za(e, i)
  }
function $b(e) {
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
function Mb(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: s, activeIndex: a, realIndex: i, snapIndex: l } = t
  let o = e,
    f
  const c = (b) => {
    let P = b - t.virtual.slidesBefore
    return (
      P < 0 && (P = t.virtual.slides.length + P),
      P >= t.virtual.slides.length && (P -= t.virtual.slides.length),
      P
    )
  }
  if ((typeof o > "u" && (o = $b(t)), r.indexOf(n) >= 0)) f = r.indexOf(n)
  else {
    const b = Math.min(s.slidesPerGroupSkip, o)
    f = b + Math.floor((o - b) / s.slidesPerGroup)
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
    const b = t.slides.filter((m) => m.column === o)[0]
    let P = parseInt(b.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(P) && (P = Math.max(t.slides.indexOf(b), 0)),
      (v = Math.floor(P / s.grid.rows))
  } else if (t.slides[o]) {
    const b = t.slides[o].getAttribute("data-swiper-slide-index")
    b ? (v = parseInt(b, 10)) : (v = o)
  } else v = o
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: f,
    previousRealIndex: i,
    realIndex: v,
    previousIndex: a,
    activeIndex: o,
  }),
    t.initialized && Ei(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (i !== v && t.emit("realIndexChange"), t.emit("slideChange"))
}
function Ib(e, t) {
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
var Ob = {
  updateSize: Sb,
  updateSlides: Eb,
  updateAutoHeight: _b,
  updateSlidesOffset: Cb,
  updateSlidesProgress: Tb,
  updateProgress: kb,
  updateSlidesClasses: Pb,
  updateActiveIndex: Mb,
  updateClickedSlide: Ib,
}
function Ab(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: r, translate: s, wrapperEl: a } = t
  if (n.virtualTranslate) return r ? -s : s
  if (n.cssMode) return s
  let i = cb(a, e)
  return (i += t.cssOverflowAdjustment()), r && (i = -i), i || 0
}
function Lb(e, t) {
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
function zb() {
  return -this.snapGrid[0]
}
function Bb() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function Nb(e, t, n, r, s) {
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
          Qc({ swiper: a, targetPosition: -c, side: p ? "left" : "top" }), !0
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
var Rb = {
  getTranslate: Ab,
  setTranslate: Lb,
  minTranslate: zb,
  maxTranslate: Bb,
  translateTo: Nb,
}
function jb(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function nd(e) {
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
function Fb(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    nd({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function Db(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      nd({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var Hb = { setTransition: jb, transitionStart: Fb, transitionEnd: Db }
function Gb(e, t, n, r, s) {
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
    wrapperEl: b,
    enabled: P,
  } = a
  if ((a.animating && l.preventInteractionOnTransition) || (!P && !r && !s))
    return !1
  const m = Math.min(a.params.slidesPerGroupSkip, i)
  let E = m + Math.floor((i - m) / a.params.slidesPerGroup)
  E >= o.length && (E = o.length - 1)
  const T = -o[E]
  if (l.normalizeSlideIndex)
    for (let w = 0; w < f.length; w += 1) {
      const M = -Math.floor(T * 100),
        z = Math.floor(f[w] * 100),
        O = Math.floor(f[w + 1] * 100)
      typeof f[w + 1] < "u"
        ? M >= z && M < O - (O - z) / 2
          ? (i = w)
          : M >= z && M < O && (i = w + 1)
        : M >= z && (i = w)
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
  let x
  if (
    (i > p ? (x = "next") : i < p ? (x = "prev") : (x = "reset"),
    (v && -T === a.translate) || (!v && T === a.translate))
  )
    return (
      a.updateActiveIndex(i),
      l.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      l.effect !== "slide" && a.setTranslate(T),
      x !== "reset" && (a.transitionStart(n, x), a.transitionEnd(n, x)),
      !1
    )
  if (l.cssMode) {
    const w = a.isHorizontal(),
      M = v ? T : -T
    if (t === 0) {
      const z = a.virtual && a.params.virtual.enabled
      z &&
        ((a.wrapperEl.style.scrollSnapType = "none"),
        (a._immediateVirtual = !0)),
        z && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              b[w ? "scrollLeft" : "scrollTop"] = M
            }))
          : (b[w ? "scrollLeft" : "scrollTop"] = M),
        z &&
          requestAnimationFrame(() => {
            ;(a.wrapperEl.style.scrollSnapType = ""), (a._immediateVirtual = !1)
          })
    } else {
      if (!a.support.smoothScroll)
        return (
          Qc({ swiper: a, targetPosition: M, side: w ? "left" : "top" }), !0
        )
      b.scrollTo({ [w ? "left" : "top"]: M, behavior: "smooth" })
    }
    return !0
  }
  return (
    a.setTransition(t),
    a.setTranslate(T),
    a.updateActiveIndex(i),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", t, r),
    a.transitionStart(n, x),
    t === 0
      ? a.transitionEnd(n, x)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (M) {
            !a ||
              a.destroyed ||
              (M.target === this &&
                (a.wrapperEl.removeEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd,
                ),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(n, x)))
          }),
        a.wrapperEl.addEventListener(
          "transitionend",
          a.onSlideToWrapperTransitionEnd,
        )),
    !0
  )
}
function Vb(e, t, n, r) {
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
          (b) => b.getAttribute("data-swiper-slide-index") * 1 === v,
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
          (b) => b.getAttribute("data-swiper-slide-index") * 1 === v,
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
function Wb(e, t, n) {
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
function qb(e, t, n) {
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
  const b = v(p),
    P = a.map((T) => v(T))
  let m = a[P.indexOf(b) - 1]
  if (typeof m > "u" && s.cssMode) {
    let T
    a.forEach((x, w) => {
      b >= x && (T = w)
    }),
      typeof T < "u" && (m = a[T > 0 ? T - 1 : T])
  }
  let E = 0
  if (
    (typeof m < "u" &&
      ((E = i.indexOf(m)),
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
function Ub(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const r = this
  return r.slideTo(r.activeIndex, e, t, n)
}
function Yb(e, t, n, r) {
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
function Kb() {
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
              nn(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            xi(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
        : s > e.slides.length - r
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              nn(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            xi(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
  } else e.slideTo(s)
}
var Xb = {
  slideTo: Gb,
  slideToLoop: Vb,
  slideNext: Wb,
  slidePrev: qb,
  slideReset: Ub,
  slideToClosest: Yb,
  slideToClickedSlide: Kb,
}
function Jb(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const s = () => {
      nn(r, `.${n.slideClass}, swiper-slide`).forEach((p, v) => {
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
          ? Hs("swiper-slide", [n.slideBlankClass])
          : Hs("div", [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(v)
      }
    }
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = i - (t.slides.length % i)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      Ds(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    s()
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      Ds(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    s()
  } else s()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  })
}
function Zb(e) {
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
      params: b,
    } = o,
    { centeredSlides: P } = b
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && b.virtual.enabled)
  ) {
    n &&
      (!b.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : b.centeredSlides && o.snapIndex < b.slidesPerView
          ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
          : o.snapIndex === o.snapGrid.length - 1 &&
            o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = c),
      (o.allowSlideNext = p),
      o.emit("loopFix")
    return
  }
  let m = b.slidesPerView
  m === "auto"
    ? (m = o.slidesPerViewDynamic())
    : ((m = Math.ceil(parseFloat(b.slidesPerView, 10))),
      P && m % 2 === 0 && (m = m + 1))
  const E = b.slidesPerGroupAuto ? m : b.slidesPerGroup
  let T = E
  T % E !== 0 && (T += E - (T % E)),
    (T += b.loopAdditionalSlides),
    (o.loopedSlides = T)
  const x = o.grid && b.grid && b.grid.rows > 1
  f.length < m + T
    ? Ds(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : x &&
      b.grid.fill === "row" &&
      Ds(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      )
  const w = [],
    M = []
  let z = o.activeIndex
  typeof a > "u"
    ? (a = o.getSlideIndex(
        f.filter((X) => X.classList.contains(b.slideActiveClass))[0],
      ))
    : (z = a)
  const O = r === "next" || !r,
    se = r === "prev" || !r
  let q = 0,
    G = 0
  const D = x ? Math.ceil(f.length / b.grid.rows) : f.length,
    ge = (x ? f[a].column : a) + (P && typeof s > "u" ? -m / 2 + 0.5 : 0)
  if (ge < T) {
    q = Math.max(T - ge, E)
    for (let X = 0; X < T - ge; X += 1) {
      const Se = X - Math.floor(X / D) * D
      if (x) {
        const Ce = D - Se - 1
        for (let F = f.length - 1; F >= 0; F -= 1)
          f[F].column === Ce && w.push(F)
      } else w.push(D - Se - 1)
    }
  } else if (ge + m > D - T) {
    G = Math.max(ge - (D - T * 2), E)
    for (let X = 0; X < G; X += 1) {
      const Se = X - Math.floor(X / D) * D
      x
        ? f.forEach((Ce, F) => {
            Ce.column === Se && M.push(F)
          })
        : M.push(Se)
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1
    }),
    se &&
      w.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          v.prepend(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    O &&
      M.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          v.append(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    o.recalcSlides(),
    b.slidesPerView === "auto"
      ? o.updateSlides()
      : x &&
        ((w.length > 0 && se) || (M.length > 0 && O)) &&
        o.slides.forEach((X, Se) => {
          o.grid.updateSlide(Se, X, o.slides)
        }),
    b.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (w.length > 0 && se) {
      if (typeof t > "u") {
        const X = o.slidesGrid[z],
          Ce = o.slidesGrid[z + q] - X
        l
          ? o.setTranslate(o.translate - Ce)
          : (o.slideTo(z + q, 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - Ce),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - Ce)))
      } else if (s) {
        const X = x ? w.length / b.grid.rows : w.length
        o.slideTo(o.activeIndex + X, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate)
      }
    } else if (M.length > 0 && O)
      if (typeof t > "u") {
        const X = o.slidesGrid[z],
          Ce = o.slidesGrid[z - G] - X
        l
          ? o.setTranslate(o.translate - Ce)
          : (o.slideTo(z - G, 0, !1, !0),
            s &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - Ce),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - Ce)))
      } else {
        const X = x ? M.length / b.grid.rows : M.length
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
      ? o.controller.control.forEach((Se) => {
          !Se.destroyed &&
            Se.params.loop &&
            Se.loopFix({
              ...X,
              slideTo: Se.params.slidesPerView === b.slidesPerView ? n : !1,
            })
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...X,
          slideTo:
            o.controller.control.params.slidesPerView === b.slidesPerView
              ? n
              : !1,
        })
  }
  o.emit("loopFix")
}
function Qb() {
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
var e2 = { loopCreate: Jb, loopFix: Zb, loopDestroy: Qb }
function t2(e) {
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
function n2() {
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
var r2 = { setGrabCursor: t2, unsetGrabCursor: n2 }
function s2(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === pn() || r === Nt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const s = r.closest(e)
    return !s && !r.getRootNode ? null : s || n(r.getRootNode().host)
  }
  return n(t)
}
function _u(e, t, n) {
  const r = Nt(),
    { params: s } = e,
    a = s.edgeSwipeDetection,
    i = s.edgeSwipeThreshold
  return a && (n <= i || n >= r.innerWidth - i)
    ? a === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function a2(e) {
  const t = this,
    n = pn()
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
    _u(t, r, r.targetTouches[0].pageX)
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
  if (a.noSwiping && (v ? s2(p, o) : o.closest(p))) {
    t.allowClick = !0
    return
  }
  if (a.swipeHandler && !o.closest(a.swipeHandler)) return
  ;(i.currentX = r.pageX), (i.currentY = r.pageY)
  const b = i.currentX,
    P = i.currentY
  if (!_u(t, r, b)) return
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (i.startX = b),
    (i.startY = P),
    (s.touchStartTime = Fs()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (s.allowThresholdMove = !1)
  let m = !0
  o.matches(s.focusableElements) &&
    ((m = !1), o.nodeName === "SELECT" && (s.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(s.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur()
  const E = m && t.allowTouchMove && a.touchStartPreventDefault
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
function i2(e) {
  const t = pn(),
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
      ((f = [...o.changedTouches].filter((O) => O.identifier === r.touchId)[0]),
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
        (r.touchStartTime = Fs()))
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
    b = a.currentY - a.startY
  if (n.params.threshold && Math.sqrt(v ** 2 + b ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > "u") {
    let O
    ;(n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (r.isScrolling = !1)
      : v * v + b * b >= 25 &&
        ((O = (Math.atan2(Math.abs(b), Math.abs(v)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? O > s.touchAngle
          : 90 - O > s.touchAngle))
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
  let P = n.isHorizontal() ? v : b,
    m = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY
  s.oneWayMovement &&
    ((P = Math.abs(P) * (i ? 1 : -1)), (m = Math.abs(m) * (i ? 1 : -1))),
    (a.diff = P),
    (P *= s.touchRatio),
    i && ((P = -P), (m = -m))
  const E = n.touchesDirection
  ;(n.swipeDirection = P > 0 ? "prev" : "next"),
    (n.touchesDirection = m > 0 ? "prev" : "next")
  const T = n.params.loop && !s.cssMode,
    x =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev)
  if (!r.isMoved) {
    if (
      (T && x && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const O = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      })
      n.wrapperEl.dispatchEvent(O)
    }
    ;(r.allowMomentumBounce = !1),
      s.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o)
  }
  let w
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      E !== n.touchesDirection &&
      T &&
      x &&
      Math.abs(P) >= 1)
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
    (r.currentTranslate = P + r.startTranslate)
  let M = !0,
    z = s.resistanceRatio
  if (
    (s.touchReleaseOnEdges && (z = 0),
    P > 0
      ? (T &&
          x &&
          !w &&
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
          ((M = !1),
          s.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + P) ** z)))
      : P < 0 &&
        (T &&
          x &&
          !w &&
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
          ((M = !1),
          s.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - P) ** z))),
    M && (o.preventedByNestedSwiper = !0),
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
    if (Math.abs(P) > s.threshold || r.allowThresholdMove) {
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
function l2(e) {
  const t = this,
    n = t.touchEventsData
  let r = e
  r.originalEvent && (r = r.originalEvent)
  let s
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((s = [...r.changedTouches].filter((z) => z.identifier === n.touchId)[0]),
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
  const p = Fs(),
    v = p - n.touchStartTime
  if (t.allowClick) {
    const z = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((z && z[0]) || r.target, z),
      t.emit("tap click", r),
      v < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
  }
  if (
    ((n.lastClickTime = Fs()),
    xi(() => {
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
  let b
  if (
    (i.followFinger
      ? (b = o ? t.translate : -t.translate)
      : (b = -n.currentTranslate),
    i.cssMode)
  )
    return
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: b })
    return
  }
  const P = b >= -t.maxTranslate() && !t.params.loop
  let m = 0,
    E = t.slidesSizesGrid[0]
  for (
    let z = 0;
    z < f.length;
    z += z < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const O = z < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
    typeof f[z + O] < "u"
      ? (P || (b >= f[z] && b < f[z + O])) && ((m = z), (E = f[z + O] - f[z]))
      : (P || b >= f[z]) && ((m = z), (E = f[f.length - 1] - f[f.length - 2]))
  }
  let T = null,
    x = null
  i.rewind &&
    (t.isBeginning
      ? (x =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (T = 0))
  const w = (b - f[m]) / E,
    M = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
  if (v > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (w >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? T : m + M)
        : t.slideTo(m)),
      t.swipeDirection === "prev" &&
        (w > 1 - i.longSwipesRatio
          ? t.slideTo(m + M)
          : x !== null && w < 0 && Math.abs(w) > i.longSwipesRatio
            ? t.slideTo(x)
            : t.slideTo(m))
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(m + M)
        : t.slideTo(m)
      : (t.swipeDirection === "next" && t.slideTo(T !== null ? T : m + M),
        t.swipeDirection === "prev" && t.slideTo(x !== null ? x : m))
  }
}
function Cu() {
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
function o2(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function u2() {
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
function c2(e) {
  const t = this
  Is(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update()
}
function d2() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const rd = (e, t) => {
  const n = pn(),
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
          Cu,
          !0,
        )
      : e[f]("observerUpdate", Cu, !0),
    s[o]("load", e.onLoad, { capture: !0 })
}
function f2() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = a2.bind(e)),
    (e.onTouchMove = i2.bind(e)),
    (e.onTouchEnd = l2.bind(e)),
    (e.onDocumentTouchStart = d2.bind(e)),
    t.cssMode && (e.onScroll = u2.bind(e)),
    (e.onClick = o2.bind(e)),
    (e.onLoad = c2.bind(e)),
    rd(e, "on")
}
function p2() {
  rd(this, "off")
}
var h2 = { attachEvents: f2, detachEvents: p2 }
const Tu = (e, t) => e.grid && t.grid && t.grid.rows > 1
function g2() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: s } = e,
    a = r.breakpoints
  if (!a || (a && Object.keys(a).length === 0)) return
  const i = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
  if (!i || e.currentBreakpoint === i) return
  const o = (i in a ? a[i] : void 0) || e.originalParams,
    f = Tu(e, r),
    c = Tu(e, o),
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
      const x = r[T] && r[T].enabled,
        w = o[T] && o[T].enabled
      x && !w && e[T].disable(), !x && w && e[T].enable()
    })
  const v = o.direction && o.direction !== r.direction,
    b = r.loop && (o.slidesPerView !== r.slidesPerView || v),
    P = r.loop
  v && n && e.changeDirection(), At(e.params, o)
  const m = e.params.enabled,
    E = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    p && !m ? e.disable() : !p && m && e.enable(),
    (e.currentBreakpoint = i),
    e.emit("_beforeBreakpoint", o),
    n &&
      (b
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !P && E
          ? (e.loopCreate(t), e.updateSlides())
          : P && !E && e.loopDestroy()),
    e.emit("breakpoint", o)
}
function v2(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return
  let r = !1
  const s = Nt(),
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
var m2 = { setBreakpoint: g2, getBreakpoint: v2 }
function b2(e, t) {
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
function y2() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: s, device: a } = e,
    i = b2(
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
function w2() {
  const e = this,
    { el: t, classNames: n } = e
  t.classList.remove(...n), e.emitContainerClasses()
}
var x2 = { addClasses: y2, removeClasses: w2 }
function S2() {
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
var E2 = { checkOverflow: S2 },
  _i = {
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
function _2(e, t) {
  return function (r) {
    r === void 0 && (r = {})
    const s = Object.keys(r)[0],
      a = r[s]
    if (typeof a != "object" || a === null) {
      At(t, r)
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
      At(t, r)
      return
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      At(t, r)
  }
}
const Qa = {
    eventsEmitter: xb,
    update: Ob,
    translate: Rb,
    transition: Hb,
    slide: Xb,
    loop: e2,
    grabCursor: r2,
    events: h2,
    breakpoints: m2,
    checkOverflow: E2,
    classes: x2,
  },
  ei = {}
let Zi = class un {
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
      (n = At({}, n)),
      t && !n.el && (n.el = t)
    const i = pn()
    if (
      n.el &&
      typeof n.el == "string" &&
      i.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        i.querySelectorAll(n.el).forEach((p) => {
          const v = At({}, n, { el: p })
          c.push(new un(v))
        }),
        c
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = td()),
      (l.device = vb({ userAgent: n.userAgent })),
      (l.browser = bb()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules)
    const o = {}
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: _2(n, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const f = At({}, _i, o)
    return (
      (l.params = At({}, f, ei, n)),
      (l.originalParams = At({}, l.params)),
      (l.passedParams = At({}, n)),
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
      s = nn(n, `.${r.slideClass}, swiper-slide`),
      a = Gs(s[0])
    return Gs(t) - a
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
    t.slides = nn(n, `.${r.slideClass}, swiper-slide`)
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
      for (let b = f + 1; b < a.length; b += 1)
        a[b] && !v && ((p += a[b].swiperSlideSize), (c += 1), p > o && (v = !0))
      for (let b = f - 1; b >= 0; b -= 1)
        a[b] && !v && ((p += a[b].swiperSlideSize), (c += 1), p > o && (v = !0))
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
        i.complete && Is(t, i)
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
        : nn(r, s())[0]
    return (
      !i &&
        n.params.createElements &&
        ((i = Hs("div", n.params.wrapperClass)),
        r.append(i),
        nn(r, `.${n.params.slideClass}`).forEach((l) => {
          i.append(l)
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: i,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || An(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || An(r, "direction") === "rtl"),
        wrongRTL: An(i, "display") === "-webkit-box",
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
          ? Is(n, a)
          : a.addEventListener("load", (i) => {
              Is(n, i.target)
            })
      }),
      Ei(n),
      (n.initialized = !0),
      Ei(n),
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
        t !== !1 && ((r.el.swiper = null), ob(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    At(ei, t)
  }
  static get extendedDefaults() {
    return ei
  }
  static get defaults() {
    return _i
  }
  static installModule(t) {
    un.prototype.__modules__ || (un.prototype.__modules__ = [])
    const n = un.prototype.__modules__
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => un.installModule(n)), un)
      : (un.installModule(t), un)
  }
}
Object.keys(Qa).forEach((e) => {
  Object.keys(Qa[e]).forEach((t) => {
    Zi.prototype[t] = Qa[e][t]
  })
})
Zi.use([yb, wb])
const sd = [
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
function Qn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  )
}
function wr(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Qn(t[r]) && Qn(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : wr(e[r], t[r])
          : (e[r] = t[r])
    })
}
function ad(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  )
}
function id(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}
function ld(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}
function od(e) {
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
function C2(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function T2(e) {
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
      scrollbar: b,
      virtual: P,
      thumbs: m,
    } = t
  let E, T, x, w, M, z, O, se
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
      (x = !0),
    s.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      b &&
      !b.el &&
      (w = !0),
    s.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || i) &&
      (r.navigation.nextEl || a) &&
      (c.navigation || c.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (M = !0)
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
    (c.loop && !r.loop ? (z = !0) : !c.loop && r.loop ? (O = !0) : (se = !0)),
    f.forEach((G) => {
      if (Qn(c[G]) && Qn(r[G]))
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
    s.includes("children") && n && P && c.virtual.enabled
      ? ((P.slides = n), P.update(!0))
      : s.includes("virtual") &&
        P &&
        c.virtual.enabled &&
        (n && (P.slides = n), P.update(!0)),
    s.includes("children") && n && c.loop && (se = !0),
    E && m.init() && m.update(!0),
    T && (t.controller.control = c.controller.control),
    x &&
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
    w &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      b.init(),
      b.updateSize(),
      b.setTranslate()),
    M &&
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
    (z || se) && t.loopDestroy(),
    (O || se) && t.loopCreate(),
    t.update()
}
function ku(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    s = {}
  wr(n, _i), (n._emitClasses = !0), (n.init = !1)
  const a = {},
    i = sd.map((o) => o.replace(/_/, "")),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((o) => {
      typeof e[o] > "u" ||
        (i.indexOf(o) >= 0
          ? Qn(e[o])
            ? ((n[o] = {}), (s[o] = {}), wr(n[o], e[o]), wr(s[o], e[o]))
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
function k2(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: s,
    paginationEl: a,
    scrollbarEl: i,
    swiper: l,
  } = e
  ad(t) &&
    r &&
    s &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = s),
    (l.originalParams.navigation.prevEl = s)),
    id(t) &&
      a &&
      ((l.params.pagination.el = a), (l.originalParams.pagination.el = a)),
    ld(t) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(n)
}
function P2(e, t, n, r, s) {
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
    sd
      .filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Qn(e[o]) && Qn(t[o])) {
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
const $2 = (e) => {
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
function ti(e, t, n) {
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
function M2(e, t, n) {
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
      Ue(c.type, { ...c.props }, c.children)
    ),
  )
}
const I2 = {
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
        i = ne("swiper"),
        l = ne(null),
        o = ne(!1),
        f = ne(!1),
        c = ne(null),
        p = ne(null),
        v = ne(null),
        b = { value: [] },
        P = { value: [] },
        m = ne(null),
        E = ne(null),
        T = ne(null),
        x = ne(null),
        { params: w, passedParams: M } = ku(e, !1)
      ti(n, b, P), (v.value = M), (P.value = b.value)
      const z = () => {
        ti(n, b, P), (o.value = !0)
      }
      ;(w.onAny = function (q) {
        for (
          var G = arguments.length, D = new Array(G > 1 ? G - 1 : 0), Q = 1;
          Q < G;
          Q++
        )
          D[Q - 1] = arguments[Q]
        r(q, ...D)
      }),
        Object.assign(w.on, {
          _beforeBreakpoint: z,
          _containerClasses(q, G) {
            i.value = G
          },
        })
      const O = { ...w }
      if (
        (delete O.wrapperClass,
        (p.value = new Zi(O)),
        p.value.virtual && p.value.params.virtual.enabled)
      ) {
        p.value.virtual.slides = b.value
        const q = {
          cache: !1,
          slides: b.value,
          renderExternal: (G) => {
            l.value = G
          },
          renderExternalUpdate: !1,
        }
        wr(p.value.params.virtual, q), wr(p.value.originalParams.virtual, q)
      }
      Hi(() => {
        !f.value && p.value && (p.value.emitSlidesClasses(), (f.value = !0))
        const { passedParams: q } = ku(e, !1),
          G = P2(q, v.value, b.value, P.value, (D) => D.props && D.props.key)
        ;(v.value = q),
          (G.length || o.value) &&
            p.value &&
            !p.value.destroyed &&
            T2({
              swiper: p.value,
              slides: b.value,
              passedParams: q,
              changedParams: G,
              nextEl: m.value,
              prevEl: E.value,
              scrollbarEl: x.value,
              paginationEl: T.value,
            }),
          (o.value = !1)
      }),
        Gt("swiper", p),
        Bn(l, () => {
          Js(() => {
            $2(p.value)
          })
        }),
        yt(() => {
          c.value &&
            (k2(
              {
                el: c.value,
                nextEl: m.value,
                prevEl: E.value,
                paginationEl: T.value,
                scrollbarEl: x.value,
                swiper: p.value,
              },
              w,
            ),
            r("swiper", p.value))
        }),
        Gi(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        })
      function se(q) {
        return w.virtual
          ? M2(p, q, l.value)
          : (q.forEach((G, D) => {
              G.props || (G.props = {}),
                (G.props.swiperRef = p),
                (G.props.swiperSlideIndex = D)
            }),
            q)
      }
      return () => {
        const { slides: q, slots: G } = ti(n, b, P)
        return Ue(s, { ref: c, class: od(i.value) }, [
          G["container-start"],
          Ue(a, { class: C2(w.wrapperClass) }, [
            G["wrapper-start"],
            se(q),
            G["wrapper-end"],
          ]),
          ad(e) && [
            Ue("div", { ref: E, class: "swiper-button-prev" }),
            Ue("div", { ref: m, class: "swiper-button-next" }),
          ],
          ld(e) && Ue("div", { ref: x, class: "swiper-scrollbar" }),
          id(e) && Ue("div", { ref: T, class: "swiper-pagination" }),
          G["container-end"],
        ])
      }
    },
  },
  O2 = {
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
        a = ne(null),
        i = ne("swiper-slide"),
        l = ne(!1)
      function o(p, v, b) {
        v === a.value && (i.value = b)
      }
      yt(() => {
        !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
      }),
        Di(() => {
          r || !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
        }),
        Hi(() => {
          !a.value ||
            !s ||
            !s.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (a.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed &&
              i.value !== "swiper-slide" &&
              (i.value = "swiper-slide"))
        }),
        Gi(() => {
          !s || !s.value || s.value.off("_slideClass", o)
        })
      const f = me(() => ({
        isActive: i.value.indexOf("swiper-slide-active") >= 0,
        isVisible: i.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: i.value.indexOf("swiper-slide-prev") >= 0,
        isNext: i.value.indexOf("swiper-slide-next") >= 0,
      }))
      Gt("swiperSlide", f)
      const c = () => {
        l.value = !0
      }
      return () =>
        Ue(
          e.tag,
          {
            class: od(`${i.value}`),
            ref: a,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && s && s.value && s.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? Ue(
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
                    Ue("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(f.value),
                e.lazy &&
                  !l.value &&
                  Ue("div", { class: "swiper-lazy-preloader" }),
              ],
        )
    },
  }
function ud(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((s) => {
        if (!n[s] && n.auto === !0) {
          let a = nn(e.el, `.${r[s]}`)[0]
          a || ((a = Hs("div", r[s])), (a.className = r[s]), e.el.append(a)),
            (n[s] = a),
            (t[s] = a)
        }
      }),
    n
  )
}
function A2(e) {
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
  const a = (m) => (Array.isArray(m) ? m : [m]).filter((E) => !!E)
  function i(m) {
    let E
    return m &&
      typeof m == "string" &&
      t.isElement &&
      ((E = t.el.querySelector(m)), E)
      ? E
      : (m &&
          (typeof m == "string" && (E = [...document.querySelectorAll(m)]),
          t.params.uniqueNavElements &&
            typeof m == "string" &&
            E.length > 1 &&
            t.el.querySelectorAll(m).length === 1 &&
            (E = t.el.querySelector(m))),
        m && !E ? m : E)
  }
  function l(m, E) {
    const T = t.params.navigation
    ;(m = a(m)),
      m.forEach((x) => {
        x &&
          (x.classList[E ? "add" : "remove"](...T.disabledClass.split(" ")),
          x.tagName === "BUTTON" && (x.disabled = E),
          t.params.watchOverflow &&
            t.enabled &&
            x.classList[t.isLocked ? "add" : "remove"](T.lockClass))
      })
  }
  function o() {
    const { nextEl: m, prevEl: E } = t.navigation
    if (t.params.loop) {
      l(E, !1), l(m, !1)
      return
    }
    l(E, t.isBeginning && !t.params.rewind), l(m, t.isEnd && !t.params.rewind)
  }
  function f(m) {
    m.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), s("navigationPrev"))
  }
  function c(m) {
    m.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), s("navigationNext"))
  }
  function p() {
    const m = t.params.navigation
    if (
      ((t.params.navigation = ud(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(m.nextEl || m.prevEl))
    )
      return
    let E = i(m.nextEl),
      T = i(m.prevEl)
    Object.assign(t.navigation, { nextEl: E, prevEl: T }),
      (E = a(E)),
      (T = a(T))
    const x = (w, M) => {
      w && w.addEventListener("click", M === "next" ? c : f),
        !t.enabled && w && w.classList.add(...m.lockClass.split(" "))
    }
    E.forEach((w) => x(w, "next")), T.forEach((w) => x(w, "prev"))
  }
  function v() {
    let { nextEl: m, prevEl: E } = t.navigation
    ;(m = a(m)), (E = a(E))
    const T = (x, w) => {
      x.removeEventListener("click", w === "next" ? c : f),
        x.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    m.forEach((x) => T(x, "next")), E.forEach((x) => T(x, "prev"))
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? P() : (p(), o())
  }),
    r("toEdge fromEdge lock unlock", () => {
      o()
    }),
    r("destroy", () => {
      v()
    }),
    r("enable disable", () => {
      let { nextEl: m, prevEl: E } = t.navigation
      if (((m = a(m)), (E = a(E)), t.enabled)) {
        o()
        return
      }
      ;[...m, ...E]
        .filter((T) => !!T)
        .forEach((T) => T.classList.add(t.params.navigation.lockClass))
    }),
    r("click", (m, E) => {
      let { nextEl: T, prevEl: x } = t.navigation
      ;(T = a(T)), (x = a(x))
      const w = E.target
      if (t.params.navigation.hideOnClick && !x.includes(w) && !T.includes(w)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === w || t.pagination.el.contains(w))
        )
          return
        let M
        T.length
          ? (M = T[0].classList.contains(t.params.navigation.hiddenClass))
          : x.length &&
            (M = x[0].classList.contains(t.params.navigation.hiddenClass)),
          s(M === !0 ? "navigationShow" : "navigationHide"),
          [...T, ...x]
            .filter((z) => !!z)
            .forEach((z) => z.classList.toggle(t.params.navigation.hiddenClass))
      }
    })
  const b = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        p(),
        o()
    },
    P = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        v()
    }
  Object.assign(t.navigation, {
    enable: b,
    disable: P,
    update: o,
    init: p,
    destroy: v,
  })
}
function Rr(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  )
}
function L2(e) {
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
      formatFractionCurrent: (x) => x,
      formatFractionTotal: (x) => x,
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
  const o = (x) => (Array.isArray(x) ? x : [x]).filter((w) => !!w)
  function f() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    )
  }
  function c(x, w) {
    const { bulletActiveClass: M } = t.params.pagination
    x &&
      ((x = x[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
      x &&
        (x.classList.add(`${M}-${w}`),
        (x = x[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
        x && x.classList.add(`${M}-${w}-${w}`)))
  }
  function p(x) {
    const w = x.target.closest(Rr(t.params.pagination.bulletClass))
    if (!w) return
    x.preventDefault()
    const M = Gs(w) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === M) return
      t.slideToLoop(M)
    } else t.slideTo(M)
  }
  function v() {
    const x = t.rtl,
      w = t.params.pagination
    if (f()) return
    let M = t.pagination.el
    M = o(M)
    let z, O
    const se =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      q = t.params.loop
        ? Math.ceil(se / t.params.slidesPerGroup)
        : t.snapGrid.length
    if (
      (t.params.loop
        ? ((O = t.previousRealIndex || 0),
          (z =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((z = t.snapIndex), (O = t.previousSnapIndex))
          : ((O = t.previousIndex || 0), (z = t.activeIndex || 0)),
      w.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const G = t.pagination.bullets
      let D, Q, ge
      if (
        (w.dynamicBullets &&
          ((i = Si(G[0], t.isHorizontal() ? "width" : "height", !0)),
          M.forEach((X) => {
            X.style[t.isHorizontal() ? "width" : "height"] =
              `${i * (w.dynamicMainBullets + 4)}px`
          }),
          w.dynamicMainBullets > 1 &&
            O !== void 0 &&
            ((l += z - (O || 0)),
            l > w.dynamicMainBullets - 1
              ? (l = w.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (D = Math.max(z - l, 0)),
          (Q = D + (Math.min(G.length, w.dynamicMainBullets) - 1)),
          (ge = (Q + D) / 2)),
        G.forEach((X) => {
          const Se = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (Ce) => `${w.bulletActiveClass}${Ce}`,
            ),
          ]
            .map((Ce) =>
              typeof Ce == "string" && Ce.includes(" ") ? Ce.split(" ") : Ce,
            )
            .flat()
          X.classList.remove(...Se)
        }),
        M.length > 1)
      )
        G.forEach((X) => {
          const Se = Gs(X)
          Se === z
            ? X.classList.add(...w.bulletActiveClass.split(" "))
            : t.isElement && X.setAttribute("part", "bullet"),
            w.dynamicBullets &&
              (Se >= D &&
                Se <= Q &&
                X.classList.add(...`${w.bulletActiveClass}-main`.split(" ")),
              Se === D && c(X, "prev"),
              Se === Q && c(X, "next"))
        })
      else {
        const X = G[z]
        if (
          (X && X.classList.add(...w.bulletActiveClass.split(" ")),
          t.isElement &&
            G.forEach((Se, Ce) => {
              Se.setAttribute("part", Ce === z ? "bullet-active" : "bullet")
            }),
          w.dynamicBullets)
        ) {
          const Se = G[D],
            Ce = G[Q]
          for (let F = D; F <= Q; F += 1)
            G[F] &&
              G[F].classList.add(...`${w.bulletActiveClass}-main`.split(" "))
          c(Se, "prev"), c(Ce, "next")
        }
      }
      if (w.dynamicBullets) {
        const X = Math.min(G.length, w.dynamicMainBullets + 4),
          Se = (i * X - i) / 2 - ge * i,
          Ce = x ? "right" : "left"
        G.forEach((F) => {
          F.style[t.isHorizontal() ? Ce : "top"] = `${Se}px`
        })
      }
    }
    M.forEach((G, D) => {
      if (
        (w.type === "fraction" &&
          (G.querySelectorAll(Rr(w.currentClass)).forEach((Q) => {
            Q.textContent = w.formatFractionCurrent(z + 1)
          }),
          G.querySelectorAll(Rr(w.totalClass)).forEach((Q) => {
            Q.textContent = w.formatFractionTotal(q)
          })),
        w.type === "progressbar")
      ) {
        let Q
        w.progressbarOpposite
          ? (Q = t.isHorizontal() ? "vertical" : "horizontal")
          : (Q = t.isHorizontal() ? "horizontal" : "vertical")
        const ge = (z + 1) / q
        let X = 1,
          Se = 1
        Q === "horizontal" ? (X = ge) : (Se = ge),
          G.querySelectorAll(Rr(w.progressbarFillClass)).forEach((Ce) => {
            ;(Ce.style.transform = `translate3d(0,0,0) scaleX(${X}) scaleY(${Se})`),
              (Ce.style.transitionDuration = `${t.params.speed}ms`)
          })
      }
      w.type === "custom" && w.renderCustom
        ? ((G.innerHTML = w.renderCustom(t, z + 1, q)),
          D === 0 && s("paginationRender", G))
        : (D === 0 && s("paginationRender", G), s("paginationUpdate", G)),
        t.params.watchOverflow &&
          t.enabled &&
          G.classList[t.isLocked ? "add" : "remove"](w.lockClass)
    })
  }
  function b() {
    const x = t.params.pagination
    if (f()) return
    const w =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length
    let M = t.pagination.el
    M = o(M)
    let z = ""
    if (x.type === "bullets") {
      let O = t.params.loop
        ? Math.ceil(w / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && O > w && (O = w)
      for (let se = 0; se < O; se += 1)
        x.renderBullet
          ? (z += x.renderBullet.call(t, se, x.bulletClass))
          : (z += `<${x.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${x.bulletClass}"></${x.bulletElement}>`)
    }
    x.type === "fraction" &&
      (x.renderFraction
        ? (z = x.renderFraction.call(t, x.currentClass, x.totalClass))
        : (z = `<span class="${x.currentClass}"></span> / <span class="${x.totalClass}"></span>`)),
      x.type === "progressbar" &&
        (x.renderProgressbar
          ? (z = x.renderProgressbar.call(t, x.progressbarFillClass))
          : (z = `<span class="${x.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      M.forEach((O) => {
        x.type !== "custom" && (O.innerHTML = z || ""),
          x.type === "bullets" &&
            t.pagination.bullets.push(...O.querySelectorAll(Rr(x.bulletClass)))
      }),
      x.type !== "custom" && s("paginationRender", M[0])
  }
  function P() {
    t.params.pagination = ud(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    )
    const x = t.params.pagination
    if (!x.el) return
    let w
    typeof x.el == "string" && t.isElement && (w = t.el.querySelector(x.el)),
      !w &&
        typeof x.el == "string" &&
        (w = [...document.querySelectorAll(x.el)]),
      w || (w = x.el),
      !(!w || w.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof x.el == "string" &&
          Array.isArray(w) &&
          w.length > 1 &&
          ((w = [...t.el.querySelectorAll(x.el)]),
          w.length > 1 &&
            (w = w.filter((M) => ed(M, ".swiper")[0] === t.el)[0])),
        Array.isArray(w) && w.length === 1 && (w = w[0]),
        Object.assign(t.pagination, { el: w }),
        (w = o(w)),
        w.forEach((M) => {
          x.type === "bullets" &&
            x.clickable &&
            M.classList.add(...(x.clickableClass || "").split(" ")),
            M.classList.add(x.modifierClass + x.type),
            M.classList.add(
              t.isHorizontal() ? x.horizontalClass : x.verticalClass,
            ),
            x.type === "bullets" &&
              x.dynamicBullets &&
              (M.classList.add(`${x.modifierClass}${x.type}-dynamic`),
              (l = 0),
              x.dynamicMainBullets < 1 && (x.dynamicMainBullets = 1)),
            x.type === "progressbar" &&
              x.progressbarOpposite &&
              M.classList.add(x.progressbarOppositeClass),
            x.clickable && M.addEventListener("click", p),
            t.enabled || M.classList.add(x.lockClass)
        }))
  }
  function m() {
    const x = t.params.pagination
    if (f()) return
    let w = t.pagination.el
    w &&
      ((w = o(w)),
      w.forEach((M) => {
        M.classList.remove(x.hiddenClass),
          M.classList.remove(x.modifierClass + x.type),
          M.classList.remove(
            t.isHorizontal() ? x.horizontalClass : x.verticalClass,
          ),
          x.clickable &&
            (M.classList.remove(...(x.clickableClass || "").split(" ")),
            M.removeEventListener("click", p))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((M) =>
          M.classList.remove(...x.bulletActiveClass.split(" ")),
        )
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return
    const x = t.params.pagination
    let { el: w } = t.pagination
    ;(w = o(w)),
      w.forEach((M) => {
        M.classList.remove(x.horizontalClass, x.verticalClass),
          M.classList.add(
            t.isHorizontal() ? x.horizontalClass : x.verticalClass,
          )
      })
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? T() : (P(), b(), v())
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && v()
    }),
    r("snapIndexChange", () => {
      v()
    }),
    r("snapGridLengthChange", () => {
      b(), v()
    }),
    r("destroy", () => {
      m()
    }),
    r("enable disable", () => {
      let { el: x } = t.pagination
      x &&
        ((x = o(x)),
        x.forEach((w) =>
          w.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ))
    }),
    r("lock unlock", () => {
      v()
    }),
    r("click", (x, w) => {
      const M = w.target,
        z = o(t.pagination.el)
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        z &&
        z.length > 0 &&
        !M.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && M === t.navigation.nextEl) ||
            (t.navigation.prevEl && M === t.navigation.prevEl))
        )
          return
        const O = z[0].classList.contains(t.params.pagination.hiddenClass)
        s(O === !0 ? "paginationShow" : "paginationHide"),
          z.forEach((se) =>
            se.classList.toggle(t.params.pagination.hiddenClass),
          )
      }
    })
  const E = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: x } = t.pagination
      x &&
        ((x = o(x)),
        x.forEach((w) =>
          w.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        P(),
        b(),
        v()
    },
    T = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass)
      let { el: x } = t.pagination
      x &&
        ((x = o(x)),
        x.forEach((w) =>
          w.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        m()
    }
  Object.assign(t.pagination, {
    enable: E,
    disable: T,
    render: b,
    update: v,
    init: P,
    destroy: m,
  })
}
function z2(e) {
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
    b,
    P,
    m,
    E,
    T,
    x
  function w(V) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (V.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", w), !x && D()))
  }
  const M = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (v = !0) : v && ((f = c), (v = !1))
      const V = t.autoplay.paused ? c : p + f - new Date().getTime()
      ;(t.autoplay.timeLeft = V),
        s("autoplayTimeLeft", V, V / o),
        (l = requestAnimationFrame(() => {
          M()
        }))
    },
    z = () => {
      let V
      return (
        t.virtual && t.params.virtual.enabled
          ? (V = t.slides.filter((ke) =>
              ke.classList.contains("swiper-slide-active"),
            )[0])
          : (V = t.slides[t.activeIndex]),
        V ? parseInt(V.getAttribute("data-swiper-autoplay"), 10) : void 0
      )
    },
    O = (V) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(l), M()
      let Ye = typeof V > "u" ? t.params.autoplay.delay : V
      ;(o = t.params.autoplay.delay), (f = t.params.autoplay.delay)
      const ke = z()
      !Number.isNaN(ke) &&
        ke > 0 &&
        typeof V > "u" &&
        ((Ye = ke), (o = ke), (f = ke)),
        (c = Ye)
      const tt = t.params.speed,
        nt = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(tt, !0, !0), s("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, tt, !0, !0), s("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(tt, !0, !0), s("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, tt, !0, !0), s("autoplay")),
            t.params.cssMode &&
              ((p = new Date().getTime()),
              requestAnimationFrame(() => {
                O()
              })))
        }
      return (
        Ye > 0
          ? (clearTimeout(i),
            (i = setTimeout(() => {
              nt()
            }, Ye)))
          : requestAnimationFrame(() => {
              nt()
            }),
        Ye
      )
    },
    se = () => {
      ;(p = new Date().getTime()),
        (t.autoplay.running = !0),
        O(),
        s("autoplayStart")
    },
    q = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(i),
        cancelAnimationFrame(l),
        s("autoplayStop")
    },
    G = (V, Ye) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(i), V || (T = !0)
      const ke = () => {
        s("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", w)
            : D()
      }
      if (((t.autoplay.paused = !0), Ye)) {
        E && (c = t.params.autoplay.delay), (E = !1), ke()
        return
      }
      ;(c = (c || t.params.autoplay.delay) - (new Date().getTime() - p)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), ke())
    },
    D = () => {
      ;(t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((p = new Date().getTime()),
        T ? ((T = !1), O(c)) : O(),
        (t.autoplay.paused = !1),
        s("autoplayResume"))
    },
    Q = () => {
      if (t.destroyed || !t.autoplay.running) return
      const V = pn()
      V.visibilityState === "hidden" && ((T = !0), G(!0)),
        V.visibilityState === "visible" && D()
    },
    ge = (V) => {
      V.pointerType === "mouse" &&
        ((T = !0), (x = !0), !(t.animating || t.autoplay.paused) && G(!0))
    },
    X = (V) => {
      V.pointerType === "mouse" && ((x = !1), t.autoplay.paused && D())
    },
    Se = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", ge),
        t.el.addEventListener("pointerleave", X))
    },
    Ce = () => {
      t.el.removeEventListener("pointerenter", ge),
        t.el.removeEventListener("pointerleave", X)
    },
    F = () => {
      pn().addEventListener("visibilitychange", Q)
    },
    oe = () => {
      pn().removeEventListener("visibilitychange", Q)
    }
  r("init", () => {
    t.params.autoplay.enabled && (Se(), F(), se())
  }),
    r("destroy", () => {
      Ce(), oe(), t.autoplay.running && q()
    }),
    r("_freeModeStaticRelease", () => {
      ;(P || T) && D()
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? q() : G(!0, !0)
    }),
    r("beforeTransitionStart", (V, Ye, ke) => {
      t.destroyed ||
        !t.autoplay.running ||
        (ke || !t.params.autoplay.disableOnInteraction ? G(!0, !0) : q())
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          q()
          return
        }
        ;(b = !0),
          (P = !1),
          (T = !1),
          (m = setTimeout(() => {
            ;(T = !0), (P = !0), G(!0)
          }, 200))
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !b)) {
        if (
          (clearTimeout(m),
          clearTimeout(i),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(P = !1), (b = !1)
          return
        }
        P && t.params.cssMode && D(), (P = !1), (b = !1)
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (E = !0)
    }),
    Object.assign(t.autoplay, { start: se, stop: q, pause: G, resume: D })
}
const B2 = { class: "prose text-center" },
  N2 = g("br", null, null, -1),
  R2 = { href: "/pricing" },
  j2 = { id: "cta" },
  ss = {
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
                let b = p.getElementsByTagName("input")
                for (let E = 0; E < b.length; E++) b[E].style.display = "none"
                let P = p.getElementsByTagName("textarea")[0]
                P.style.display = "none"
                let m = document.getElementById("submitButton")
                m.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        te(),
        xe(
          "div",
          {
            class: I([
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
            g("div", B2, [
              g(
                "h4",
                { class: I(["text-2xl", t(e.brightness)]) },
                [
                  Ie(" Piqued your interest?"),
                  N2,
                  Ie(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              g("a", R2, [
                g(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    "aria-": "",
                    class: I([
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
              g(
                "h4",
                { class: I(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              g("form", j2, [
                g("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: I(["rounded p-2 w-full", n]),
                }),
                g("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: I(["rounded p-2 w-full mt-3", n]),
                }),
                g("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: I(["rounded p-2 w-full mt-3", n]),
                }),
                g(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    "aria-label": "Submit a contact form",
                    onClick: r,
                    class: I([
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
  F2 = {
    class:
      "flex w-full gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-between",
  },
  D2 = ["href"],
  H2 = { class: "hidden md:hidden lg:block" },
  G2 = ["href"],
  V2 = ["src", "alt"],
  W2 = ["src", "alt"],
  q2 = Cc(
    '<div id="lightbox" class="fixed inset-0 flex items-center justify-center z-50 hidden" style="background-color:rgba(0, 0, 0, 0.3);" data-v-4d27a375><div class="bg-white p-5 rounded shadow-lg" data-v-4d27a375><img id="lightbox-img" src="" alt="Lightbox Image" class="w-full h-auto" data-v-4d27a375><div class="flex justify-center" data-v-4d27a375><p class="text-sm text-gray-500 mt-2" id="lightbox-caption" data-v-4d27a375></p></div><button id="lightbox-close" style="top:30%;" class="absolute right-0 m-2 text-3xl text-orange-400" data-v-4d27a375> × </button></div></div>',
    1,
  ),
  U2 = { class: "block md:block lg:hidden py-6" },
  Y2 = { class: "grid grid-cols-2 gap-4" },
  K2 = ["src", "alt"],
  X2 = { class: "flex justify-center pt-6" },
  J2 = {
    __name: "sliderAndGallery",
    props: {
      brightness: Number,
      images: Array,
      captions: Array,
      link: String,
      title: String,
    },
    setup(e) {
      const t = ne([]),
        n = [z2, L2, A2],
        r = e,
        s = ne(""),
        a = ne(""),
        i = ne([]),
        l = (c) => {
          if (c >= 4) return "text-slate-800"
          if (c == 3) return "text-slate-200"
          if (c == 2) return "text-slate-300"
          if (c == 1) return "text-slate-300"
        },
        o = () => {
          const c = document.getElementById("lightbox"),
            p = document.getElementById("lightbox-img"),
            v = document.getElementById("lightbox-close"),
            b = document.querySelectorAll(".lightbox"),
            P = document.getElementById("lightbox-caption")
          b.forEach((m) => {
            m.addEventListener("click", () => {
              ;(p.src = m.src),
                (P.textContent = m.alt),
                c.classList.remove("hidden")
            })
          }),
            v.addEventListener("click", () => {
              c.classList.add("hidden")
            })
        }
      yt(() => {
        ;(t.value = r.captions),
          (s.value = r.link),
          (a.value = r.title),
          (i.value = r.images),
          Js(() => {
            o()
          })
      })
      const f = (c) => {
        let p = s.value == "" ? "text-center w-full " : ""
        return (p = p + l(c)), p
      }
      return (c, p) => (
        te(),
        xe(
          "div",
          {
            class: I([
              "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4",
              s.value == "",
            ]),
          },
          [
            g("div", F2, [
              g(
                "h2",
                {
                  class: I([
                    "text-5xl text-center text-semibold",
                    f(r.brightness),
                  ]),
                },
                Pt(a.value),
                3,
              ),
              s.value != ""
                ? (te(),
                  xe(
                    "a",
                    { key: 0, href: s.value },
                    [
                      g(
                        "button",
                        {
                          class: I([
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
                    D2,
                  ))
                : st("", !0),
            ]),
            g("div", H2, [
              he(
                we(I2),
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
                  default: Xe(() => [
                    (te(!0),
                    xe(
                      Je,
                      null,
                      fn(
                        i.value,
                        (v, b) => (
                          te(),
                          De(
                            we(O2),
                            { class: "image-container", key: b },
                            {
                              default: Xe(() => [
                                s.value != ""
                                  ? (te(),
                                    xe(
                                      "a",
                                      { key: 0, href: s.value },
                                      [
                                        g(
                                          "img",
                                          {
                                            src: v,
                                            alt: t.value[b],
                                            class:
                                              "bg-slate-200 object-contain w-full rounded-xl",
                                          },
                                          null,
                                          8,
                                          V2,
                                        ),
                                      ],
                                      8,
                                      G2,
                                    ))
                                  : st("", !0),
                                s.value == ""
                                  ? (te(),
                                    xe(
                                      "img",
                                      {
                                        key: 1,
                                        src: v,
                                        alt: t.value[b],
                                        class:
                                          "bg-slate-200 object-contain w-full rounded-xl",
                                      },
                                      null,
                                      8,
                                      W2,
                                    ))
                                  : st("", !0),
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
            q2,
            g("div", U2, [
              g("div", Y2, [
                (te(!0),
                xe(
                  Je,
                  null,
                  fn(
                    i.value,
                    (v, b) => (
                      te(),
                      xe("div", { class: "image-container", key: b }, [
                        g(
                          "img",
                          {
                            src: v,
                            alt: t.value[b],
                            class:
                              "bg-slate-200 object-contain w-full rounded lightbox",
                          },
                          null,
                          8,
                          K2,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            g(
              "div",
              { class: I([f(r.brightness), "prose pt-6"]) },
              [sn(c.$slots, "default", {}, void 0, !0)],
              2,
            ),
            g(
              "hr",
              {
                class: I([
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
            g("div", X2, [
              he(ss, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ],
          2,
        )
      )
    },
  },
  bn = vn(J2, [["__scopeId", "data-v-4d27a375"]]),
  Qi =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  cd =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  dd =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  el =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  tl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  nl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  rl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  sl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  al =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  il =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  Z2 =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843749607.webp",
  Q2 =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843736104.webp",
  ey =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843718572.webp",
  ty =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843702718.webp",
  ny =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898383454.webp",
  ry =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898390608.webp",
  sy =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898397404.webp",
  ay =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706899554221.webp",
  iy = { class: "px-3 text-center" },
  ly = g(
    "p",
    null,
    " Whether you need a design overhaul, a modernization, a rebranding, or a new website design completely, I'm your guy! I have extensive graphic design and UI/UX experience. I minored in Visual Communication, and I love making websites beautiful. Don't just take my word for it though, here's what a UX professional has to say: ",
    -1,
  ),
  oy = g(
    "p",
    null,
    " Joseph is a good friend of mine from school. We worked closely on many projects with both pursuing degrees in design. He can design anything. This is not an exaggeration. I personally struggled to learn new design tools and manipulate pixels the way I wanted them to be. Joseph just did it. He is incredible. ...I would recommend him to anyone with utmost confidence that he will surpass all expectations. ",
    -1,
  ),
  uy = { class: "text-right italic text-sm mb-0 pb-0" },
  cy = g(
    "p",
    { class: "text-right italic text-sm mt-0 pt-0" },
    " Senior Product Designer at nCino ",
    -1,
  ),
  dy = "",
  fy = "Web Design",
  py = {
    __name: "PanelWebDesign",
    props: { brightness: Number },
    setup(e) {
      const t = (s) => {
          if (s >= 4) return "text-slate-800"
          if (s == 3) return "text-slate-200"
          if (s == 2) return "text-slate-300"
          if (s == 1) return "text-slate-300"
        },
        n = ne([Qi, nl, al, el, dd, sl, rl, tl, cd, il]),
        r = ne([
          "BlenderNation Bazaar",
          "Swimstate Pool Services",
          "Stehl Family Dental",
          "Stuart Hose and Pipe",
          "Build on Your Land",
          "Tub Boys",
          "josephhansen.dev",
          "Atlanta Floors One",
          "OKC South Stake",
          "Aris Search",
        ])
      return (s, a) => (
        te(),
        De(
          bn,
          {
            images: n.value,
            captions: r.value,
            link: dy,
            title: fy,
            brightness: e.brightness,
          },
          {
            default: Xe(() => [
              sn(s.$slots, "default", {}, () => [
                g(
                  "h2",
                  { class: I(["text-3xl mb-1", t(e.brightness)]) },
                  " I've designed dozens of websites. I can design yours too! ",
                  2,
                ),
                g("div", iy, [
                  ly,
                  g(
                    "div",
                    {
                      class: I([
                        "rounded p-8 flex-col",
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
                      oy,
                      g("p", uy, [
                        g("b", null, [
                          g(
                            "a",
                            {
                              class: I([t(e.brightness), "font-bold"]),
                              href: "https://www.linkedin.com/in/nathanwesjones/",
                            },
                            "Nathan Jones",
                            2,
                          ),
                        ]),
                      ]),
                      cy,
                    ],
                    2,
                  ),
                ]),
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
  ll = (e) => (es("data-v-a259bda2"), (e = e()), ts(), e),
  hy = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  gy = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  vy = ll(() =>
    g(
      "div",
      { class: "image-container" },
      [
        g("img", {
          src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706989687978.webp",
          alt: "Screenshot of GalaxyIT Pricing Calculator",
          class: "bg-slate-200 object-contain w-full rounded-xl",
        }),
      ],
      -1,
    ),
  ),
  my = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  by = { href: "https://galaxyit.com/savings-calculator/" },
  yy = ll(() =>
    g(
      "div",
      { class: "image-container" },
      [
        g("img", {
          src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706990008524.webp",
          alt: "Screenshot of Build on Your Land dynamic showroom hours",
          class: "bg-slate-200 object-contain w-full rounded-xl",
        }),
      ],
      -1,
    ),
  ),
  wy = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  xy = { href: "https://www.buildonyourlandllc.com/" },
  Sy = ll(() =>
    g(
      "div",
      { class: "image-container" },
      [
        g("img", {
          src: "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
          alt: "Screenshot of BlenderNation Bazaar",
          class: "bg-slate-200 object-contain w-full rounded-xl",
        }),
      ],
      -1,
    ),
  ),
  Ey = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  _y = { href: "https://bazaar.blendernation.com" },
  Cy = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      const t = (n) => {
        if (n >= 4) return "text-slate-800"
        if (n == 3) return "text-slate-200"
        if (n == 2) return "text-slate-300"
        if (n == 1) return "text-slate-300"
      }
      return (n, r) => (
        te(),
        xe("div", hy, [
          g("div", gy, [
            g(
              "h2",
              { class: I(["text-3xl mb-1", t(e.brightness)]) },
              " Need a custom pricing calculator? ",
              2,
            ),
            vy,
            g("div", my, [
              g(
                "h3",
                { class: I(["text-xl m-0", t(e.brightness)]) },
                " I can do that! Check out this one I made for GalaxyIT: ",
                2,
              ),
              g("a", by, [
                g(
                  "button",
                  {
                    class: I([
                      "rounded px-5 py-2 text-white font-semibold",
                      {
                        "bg-slate-700": e.brightness >= 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-400": e.brightness <= 2,
                      },
                    ]),
                  },
                  " GalaxyIT Pricing Calculator ",
                  2,
                ),
              ]),
            ]),
            g(
              "h2",
              { class: I(["text-3xl mb-1", t(e.brightness)]) },
              " What about dynamic hours? ",
              2,
            ),
            yy,
            g("div", wy, [
              g(
                "h3",
                { class: I(["text-xl m-0", t(e.brightness)]) },
                " Been there, done that: ",
                2,
              ),
              g("a", xy, [
                g(
                  "button",
                  {
                    class: I([
                      "rounded px-5 py-2 text-white font-semibold",
                      {
                        "bg-slate-700": e.brightness >= 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-400": e.brightness <= 2,
                      },
                    ]),
                  },
                  " Build on Your Land site ",
                  2,
                ),
              ]),
            ]),
            g(
              "h2",
              { class: I(["text-3xl mb-1", t(e.brightness)]) },
              " Maybe you need a complex WordPress theme built from scratch? ",
              2,
            ),
            Sy,
            g("div", Ey, [
              g(
                "h3",
                { class: I(["text-xl m-0", t(e.brightness)]) },
                " No sweat - let's make it happen! ",
                2,
              ),
              g("a", _y, [
                g(
                  "button",
                  {
                    class: I([
                      "rounded px-5 py-2 text-white font-semibold",
                      {
                        "bg-slate-700": e.brightness >= 4,
                        "bg-slate-500": e.brightness == 3,
                        "bg-slate-400": e.brightness <= 2,
                      },
                    ]),
                  },
                  " Yep, done this too (Bazaar) ",
                  2,
                ),
              ]),
            ]),
            g(
              "h2",
              { class: I(["text-5xl mb-1", t(e.brightness)]) },
              " No matter how complex your problem may be, I can fix it. ",
              2,
            ),
            g(
              "p",
              { class: I(t(e.brightness)) },
              " I've been working on websites for over a decade, and I can do custom development for you in pretty much any language you can throw my way. Let me worry about automations, algorithims, integrations, and all that other stuff that is distracting you from your business. I'll take your problems off your plate and develop a solution. ",
              2,
            ),
          ]),
          g("hr", { class: I([t(e.brightness), "my-8"]) }, null, 2),
          he(ss, { brightness: e.brightness }, null, 8, ["brightness"]),
        ])
      )
    },
  },
  Ty = vn(Cy, [["__scopeId", "data-v-a259bda2"]])
var ky =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {}
function Py(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var fd = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(ky, function () {
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
      b = function (u) {
        if (u.length < 2) return null
        var d = u.length - 1
        return v(u[d]) == "string" ? u[d].toLowerCase() : null
      },
      P = Math.PI,
      m = {
        clip_rgb: s,
        limit: n,
        type: f,
        unpack: p,
        last: b,
        PI: P,
        TWOPI: P * 2,
        PITHIRD: P / 3,
        DEG2RAD: P / 180,
        RAD2DEG: 180 / P,
      },
      E = { format: {}, autodetect: [] },
      T = m.last,
      x = m.clip_rgb,
      w = m.type,
      M = E,
      z = function () {
        for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h]
        var y = this
        if (
          w(d[0]) === "object" &&
          d[0].constructor &&
          d[0].constructor === this.constructor
        )
          return d[0]
        var k = T(d),
          $ = !1
        if (!k) {
          ;($ = !0),
            M.sorted ||
              ((M.autodetect = M.autodetect.sort(function (W, ie) {
                return ie.p - W.p
              })),
              (M.sorted = !0))
          for (var _ = 0, A = M.autodetect; _ < A.length; _ += 1) {
            var L = A[_]
            if (((k = L.test.apply(L, d)), k)) break
          }
        }
        if (M.format[k]) {
          var N = M.format[k].apply(null, $ ? d : d.slice(0, -1))
          y._rgb = x(N)
        } else throw new Error("unknown format: " + d)
        y._rgb.length === 3 && y._rgb.push(1)
      }
    z.prototype.toString = function () {
      return w(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var O = z,
      se = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(se.Color, [null].concat(u)))()
      }
    ;(se.Color = O), (se.version = "2.4.2")
    var q = se,
      G = m.unpack,
      D = Math.max,
      Q = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = G(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2]
        ;(y = y / 255), (k = k / 255), ($ = $ / 255)
        var _ = 1 - D(y, D(k, $)),
          A = _ < 1 ? 1 / (1 - _) : 0,
          L = (1 - y - _) * A,
          N = (1 - k - _) * A,
          W = (1 - $ - _) * A
        return [L, N, W, _]
      },
      ge = Q,
      X = m.unpack,
      Se = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = X(u, "cmyk")
        var h = u[0],
          y = u[1],
          k = u[2],
          $ = u[3],
          _ = u.length > 4 ? u[4] : 1
        return $ === 1
          ? [0, 0, 0, _]
          : [
              h >= 1 ? 0 : 255 * (1 - h) * (1 - $),
              y >= 1 ? 0 : 255 * (1 - y) * (1 - $),
              k >= 1 ? 0 : 255 * (1 - k) * (1 - $),
              _,
            ]
      },
      Ce = Se,
      F = q,
      oe = O,
      V = E,
      Ye = m.unpack,
      ke = m.type,
      tt = ge
    ;(oe.prototype.cmyk = function () {
      return tt(this._rgb)
    }),
      (F.cmyk = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          oe,
          [null].concat(u, ["cmyk"]),
        ))()
      }),
      (V.format.cmyk = Ce),
      V.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Ye(u, "cmyk")), ke(u) === "array" && u.length === 4))
            return "cmyk"
        },
      })
    var nt = m.unpack,
      Jt = m.last,
      Dt = function (u) {
        return Math.round(u * 100) / 100
      },
      Ct = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = nt(u, "hsla"),
          y = Jt(u) || "lsa"
        return (
          (h[0] = Dt(h[0] || 0)),
          (h[1] = Dt(h[1] * 100) + "%"),
          (h[2] = Dt(h[2] * 100) + "%"),
          y === "hsla" || (h.length > 3 && h[3] < 1)
            ? ((h[3] = h.length > 3 ? h[3] : 1), (y = "hsla"))
            : (h.length = 3),
          y + "(" + h.join(",") + ")"
        )
      },
      it = Ct,
      R = m.unpack,
      le = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = R(u, "rgba")
        var h = u[0],
          y = u[1],
          k = u[2]
        ;(h /= 255), (y /= 255), (k /= 255)
        var $ = Math.min(h, y, k),
          _ = Math.max(h, y, k),
          A = (_ + $) / 2,
          L,
          N
        return (
          _ === $
            ? ((L = 0), (N = Number.NaN))
            : (L = A < 0.5 ? (_ - $) / (_ + $) : (_ - $) / (2 - _ - $)),
          h == _
            ? (N = (y - k) / (_ - $))
            : y == _
              ? (N = 2 + (k - h) / (_ - $))
              : k == _ && (N = 4 + (h - y) / (_ - $)),
          (N *= 60),
          N < 0 && (N += 360),
          u.length > 3 && u[3] !== void 0 ? [N, L, A, u[3]] : [N, L, A]
        )
      },
      re = le,
      pe = m.unpack,
      Re = m.last,
      Ze = it,
      S = re,
      C = Math.round,
      B = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = pe(u, "rgba"),
          y = Re(u) || "rgb"
        return y.substr(0, 3) == "hsl"
          ? Ze(S(h), y)
          : ((h[0] = C(h[0])),
            (h[1] = C(h[1])),
            (h[2] = C(h[2])),
            (y === "rgba" || (h.length > 3 && h[3] < 1)) &&
              ((h[3] = h.length > 3 ? h[3] : 1), (y = "rgba")),
            y + "(" + h.slice(0, y === "rgb" ? 3 : 4).join(",") + ")")
      },
      H = B,
      j = m.unpack,
      Z = Math.round,
      ae = function () {
        for (var u, d = [], h = arguments.length; h--; ) d[h] = arguments[h]
        d = j(d, "hsl")
        var y = d[0],
          k = d[1],
          $ = d[2],
          _,
          A,
          L
        if (k === 0) _ = A = L = $ * 255
        else {
          var N = [0, 0, 0],
            W = [0, 0, 0],
            ie = $ < 0.5 ? $ * (1 + k) : $ + k - $ * k,
            Y = 2 * $ - ie,
            de = y / 360
          ;(N[0] = de + 1 / 3), (N[1] = de), (N[2] = de - 1 / 3)
          for (var ce = 0; ce < 3; ce++)
            N[ce] < 0 && (N[ce] += 1),
              N[ce] > 1 && (N[ce] -= 1),
              6 * N[ce] < 1
                ? (W[ce] = Y + (ie - Y) * 6 * N[ce])
                : 2 * N[ce] < 1
                  ? (W[ce] = ie)
                  : 3 * N[ce] < 2
                    ? (W[ce] = Y + (ie - Y) * (2 / 3 - N[ce]) * 6)
                    : (W[ce] = Y)
          ;(u = [Z(W[0] * 255), Z(W[1] * 255), Z(W[2] * 255)]),
            (_ = u[0]),
            (A = u[1]),
            (L = u[2])
        }
        return d.length > 3 ? [_, A, L, d[3]] : [_, A, L, 1]
      },
      J = ae,
      ee = J,
      U = E,
      ue = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      be =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      ve =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Ee =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Pe =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      je =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Ke = Math.round,
      at = function (u) {
        u = u.toLowerCase().trim()
        var d
        if (U.format.named)
          try {
            return U.format.named(u)
          } catch {}
        if ((d = u.match(ue))) {
          for (var h = d.slice(1, 4), y = 0; y < 3; y++) h[y] = +h[y]
          return (h[3] = 1), h
        }
        if ((d = u.match(be))) {
          for (var k = d.slice(1, 5), $ = 0; $ < 4; $++) k[$] = +k[$]
          return k
        }
        if ((d = u.match(ve))) {
          for (var _ = d.slice(1, 4), A = 0; A < 3; A++) _[A] = Ke(_[A] * 2.55)
          return (_[3] = 1), _
        }
        if ((d = u.match(Ee))) {
          for (var L = d.slice(1, 5), N = 0; N < 3; N++) L[N] = Ke(L[N] * 2.55)
          return (L[3] = +L[3]), L
        }
        if ((d = u.match(Pe))) {
          var W = d.slice(1, 4)
          ;(W[1] *= 0.01), (W[2] *= 0.01)
          var ie = ee(W)
          return (ie[3] = 1), ie
        }
        if ((d = u.match(je))) {
          var Y = d.slice(1, 4)
          ;(Y[1] *= 0.01), (Y[2] *= 0.01)
          var de = ee(Y)
          return (de[3] = +d[4]), de
        }
      }
    at.test = function (u) {
      return (
        ue.test(u) ||
        be.test(u) ||
        ve.test(u) ||
        Ee.test(u) ||
        Pe.test(u) ||
        je.test(u)
      )
    }
    var Mt = at,
      yn = q,
      Mr = O,
      wn = E,
      as = m.type,
      Et = H,
      It = Mt
    ;(Mr.prototype.css = function (u) {
      return Et(this._rgb, u)
    }),
      (yn.css = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Mr,
          [null].concat(u, ["css"]),
        ))()
      }),
      (wn.format.css = It),
      wn.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && as(u) === "string" && It.test(u)) return "css"
        },
      })
    var Ir = O,
      gd = q,
      vd = E,
      md = m.unpack
    ;(vd.format.gl = function () {
      for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
      var h = md(u, "rgba")
      return (h[0] *= 255), (h[1] *= 255), (h[2] *= 255), h
    }),
      (gd.gl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Ir,
          [null].concat(u, ["gl"]),
        ))()
      }),
      (Ir.prototype.gl = function () {
        var u = this._rgb
        return [u[0] / 255, u[1] / 255, u[2] / 255, u[3]]
      })
    var bd = m.unpack,
      yd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = bd(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2],
          _ = Math.min(y, k, $),
          A = Math.max(y, k, $),
          L = A - _,
          N = (L * 100) / 255,
          W = (_ / (255 - L)) * 100,
          ie
        return (
          L === 0
            ? (ie = Number.NaN)
            : (y === A && (ie = (k - $) / L),
              k === A && (ie = 2 + ($ - y) / L),
              $ === A && (ie = 4 + (y - k) / L),
              (ie *= 60),
              ie < 0 && (ie += 360)),
          [ie, N, W]
        )
      },
      wd = yd,
      xd = m.unpack,
      Sd = Math.floor,
      Ed = function () {
        for (var u, d, h, y, k, $, _ = [], A = arguments.length; A--; )
          _[A] = arguments[A]
        _ = xd(_, "hcg")
        var L = _[0],
          N = _[1],
          W = _[2],
          ie,
          Y,
          de
        W = W * 255
        var ce = N * 255
        if (N === 0) ie = Y = de = W
        else {
          L === 360 && (L = 0),
            L > 360 && (L -= 360),
            L < 0 && (L += 360),
            (L /= 60)
          var $e = Sd(L),
            Ae = L - $e,
            ze = W * (1 - N),
            Fe = ze + ce * (1 - Ae),
            vt = ze + ce * Ae,
            dt = ze + ce
          switch ($e) {
            case 0:
              ;(u = [dt, vt, ze]), (ie = u[0]), (Y = u[1]), (de = u[2])
              break
            case 1:
              ;(d = [Fe, dt, ze]), (ie = d[0]), (Y = d[1]), (de = d[2])
              break
            case 2:
              ;(h = [ze, dt, vt]), (ie = h[0]), (Y = h[1]), (de = h[2])
              break
            case 3:
              ;(y = [ze, Fe, dt]), (ie = y[0]), (Y = y[1]), (de = y[2])
              break
            case 4:
              ;(k = [vt, ze, dt]), (ie = k[0]), (Y = k[1]), (de = k[2])
              break
            case 5:
              ;($ = [dt, ze, Fe]), (ie = $[0]), (Y = $[1]), (de = $[2])
              break
          }
        }
        return [ie, Y, de, _.length > 3 ? _[3] : 1]
      },
      _d = Ed,
      Cd = m.unpack,
      Td = m.type,
      kd = q,
      ul = O,
      cl = E,
      Pd = wd
    ;(ul.prototype.hcg = function () {
      return Pd(this._rgb)
    }),
      (kd.hcg = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ul,
          [null].concat(u, ["hcg"]),
        ))()
      }),
      (cl.format.hcg = _d),
      cl.autodetect.push({
        p: 1,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Cd(u, "hcg")), Td(u) === "array" && u.length === 3))
            return "hcg"
        },
      })
    var $d = m.unpack,
      Md = m.last,
      is = Math.round,
      Id = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = $d(u, "rgba"),
          y = h[0],
          k = h[1],
          $ = h[2],
          _ = h[3],
          A = Md(u) || "auto"
        _ === void 0 && (_ = 1),
          A === "auto" && (A = _ < 1 ? "rgba" : "rgb"),
          (y = is(y)),
          (k = is(k)),
          ($ = is($))
        var L = (y << 16) | (k << 8) | $,
          N = "000000" + L.toString(16)
        N = N.substr(N.length - 6)
        var W = "0" + is(_ * 255).toString(16)
        switch (((W = W.substr(W.length - 2)), A.toLowerCase())) {
          case "rgba":
            return "#" + N + W
          case "argb":
            return "#" + W + N
          default:
            return "#" + N
        }
      },
      dl = Id,
      Od = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      Ad = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      Ld = function (u) {
        if (u.match(Od)) {
          ;(u.length === 4 || u.length === 7) && (u = u.substr(1)),
            u.length === 3 &&
              ((u = u.split("")), (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]))
          var d = parseInt(u, 16),
            h = d >> 16,
            y = (d >> 8) & 255,
            k = d & 255
          return [h, y, k, 1]
        }
        if (u.match(Ad)) {
          ;(u.length === 5 || u.length === 9) && (u = u.substr(1)),
            u.length === 4 &&
              ((u = u.split("")),
              (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2] + u[3] + u[3]))
          var $ = parseInt(u, 16),
            _ = ($ >> 24) & 255,
            A = ($ >> 16) & 255,
            L = ($ >> 8) & 255,
            N = Math.round((($ & 255) / 255) * 100) / 100
          return [_, A, L, N]
        }
        throw new Error("unknown hex color: " + u)
      },
      fl = Ld,
      zd = q,
      pl = O,
      Bd = m.type,
      hl = E,
      Nd = dl
    ;(pl.prototype.hex = function (u) {
      return Nd(this._rgb, u)
    }),
      (zd.hex = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          pl,
          [null].concat(u, ["hex"]),
        ))()
      }),
      (hl.format.hex = fl),
      hl.autodetect.push({
        p: 4,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (
            !d.length &&
            Bd(u) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(u.length) >= 0
          )
            return "hex"
        },
      })
    var Rd = m.unpack,
      gl = m.TWOPI,
      jd = Math.min,
      Fd = Math.sqrt,
      Dd = Math.acos,
      Hd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Rd(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2]
        ;(y /= 255), (k /= 255), ($ /= 255)
        var _,
          A = jd(y, k, $),
          L = (y + k + $) / 3,
          N = L > 0 ? 1 - A / L : 0
        return (
          N === 0
            ? (_ = NaN)
            : ((_ = (y - k + (y - $)) / 2),
              (_ /= Fd((y - k) * (y - k) + (y - $) * (k - $))),
              (_ = Dd(_)),
              $ > k && (_ = gl - _),
              (_ /= gl)),
          [_ * 360, N, L]
        )
      },
      Gd = Hd,
      Vd = m.unpack,
      ua = m.limit,
      rr = m.TWOPI,
      ca = m.PITHIRD,
      sr = Math.cos,
      Wd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Vd(u, "hsi")
        var h = u[0],
          y = u[1],
          k = u[2],
          $,
          _,
          A
        return (
          isNaN(h) && (h = 0),
          isNaN(y) && (y = 0),
          h > 360 && (h -= 360),
          h < 0 && (h += 360),
          (h /= 360),
          h < 1 / 3
            ? ((A = (1 - y) / 3),
              ($ = (1 + (y * sr(rr * h)) / sr(ca - rr * h)) / 3),
              (_ = 1 - (A + $)))
            : h < 2 / 3
              ? ((h -= 1 / 3),
                ($ = (1 - y) / 3),
                (_ = (1 + (y * sr(rr * h)) / sr(ca - rr * h)) / 3),
                (A = 1 - ($ + _)))
              : ((h -= 2 / 3),
                (_ = (1 - y) / 3),
                (A = (1 + (y * sr(rr * h)) / sr(ca - rr * h)) / 3),
                ($ = 1 - (_ + A))),
          ($ = ua(k * $ * 3)),
          (_ = ua(k * _ * 3)),
          (A = ua(k * A * 3)),
          [$ * 255, _ * 255, A * 255, u.length > 3 ? u[3] : 1]
        )
      },
      qd = Wd,
      Ud = m.unpack,
      Yd = m.type,
      Kd = q,
      vl = O,
      ml = E,
      Xd = Gd
    ;(vl.prototype.hsi = function () {
      return Xd(this._rgb)
    }),
      (Kd.hsi = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          vl,
          [null].concat(u, ["hsi"]),
        ))()
      }),
      (ml.format.hsi = qd),
      ml.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Ud(u, "hsi")), Yd(u) === "array" && u.length === 3))
            return "hsi"
        },
      })
    var Jd = m.unpack,
      Zd = m.type,
      Qd = q,
      bl = O,
      yl = E,
      ef = re
    ;(bl.prototype.hsl = function () {
      return ef(this._rgb)
    }),
      (Qd.hsl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          bl,
          [null].concat(u, ["hsl"]),
        ))()
      }),
      (yl.format.hsl = J),
      yl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Jd(u, "hsl")), Zd(u) === "array" && u.length === 3))
            return "hsl"
        },
      })
    var tf = m.unpack,
      nf = Math.min,
      rf = Math.max,
      sf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = tf(u, "rgb")
        var h = u[0],
          y = u[1],
          k = u[2],
          $ = nf(h, y, k),
          _ = rf(h, y, k),
          A = _ - $,
          L,
          N,
          W
        return (
          (W = _ / 255),
          _ === 0
            ? ((L = Number.NaN), (N = 0))
            : ((N = A / _),
              h === _ && (L = (y - k) / A),
              y === _ && (L = 2 + (k - h) / A),
              k === _ && (L = 4 + (h - y) / A),
              (L *= 60),
              L < 0 && (L += 360)),
          [L, N, W]
        )
      },
      af = sf,
      lf = m.unpack,
      of = Math.floor,
      uf = function () {
        for (var u, d, h, y, k, $, _ = [], A = arguments.length; A--; )
          _[A] = arguments[A]
        _ = lf(_, "hsv")
        var L = _[0],
          N = _[1],
          W = _[2],
          ie,
          Y,
          de
        if (((W *= 255), N === 0)) ie = Y = de = W
        else {
          L === 360 && (L = 0),
            L > 360 && (L -= 360),
            L < 0 && (L += 360),
            (L /= 60)
          var ce = of(L),
            $e = L - ce,
            Ae = W * (1 - N),
            ze = W * (1 - N * $e),
            Fe = W * (1 - N * (1 - $e))
          switch (ce) {
            case 0:
              ;(u = [W, Fe, Ae]), (ie = u[0]), (Y = u[1]), (de = u[2])
              break
            case 1:
              ;(d = [ze, W, Ae]), (ie = d[0]), (Y = d[1]), (de = d[2])
              break
            case 2:
              ;(h = [Ae, W, Fe]), (ie = h[0]), (Y = h[1]), (de = h[2])
              break
            case 3:
              ;(y = [Ae, ze, W]), (ie = y[0]), (Y = y[1]), (de = y[2])
              break
            case 4:
              ;(k = [Fe, Ae, W]), (ie = k[0]), (Y = k[1]), (de = k[2])
              break
            case 5:
              ;($ = [W, Ae, ze]), (ie = $[0]), (Y = $[1]), (de = $[2])
              break
          }
        }
        return [ie, Y, de, _.length > 3 ? _[3] : 1]
      },
      cf = uf,
      df = m.unpack,
      ff = m.type,
      pf = q,
      wl = O,
      xl = E,
      hf = af
    ;(wl.prototype.hsv = function () {
      return hf(this._rgb)
    }),
      (pf.hsv = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          wl,
          [null].concat(u, ["hsv"]),
        ))()
      }),
      (xl.format.hsv = cf),
      xl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = df(u, "hsv")), ff(u) === "array" && u.length === 3))
            return "hsv"
        },
      })
    var ls = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      ar = ls,
      gf = m.unpack,
      Sl = Math.pow,
      vf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = gf(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2],
          _ = mf(y, k, $),
          A = _[0],
          L = _[1],
          N = _[2],
          W = 116 * L - 16
        return [W < 0 ? 0 : W, 500 * (A - L), 200 * (L - N)]
      },
      da = function (u) {
        return (u /= 255) <= 0.04045 ? u / 12.92 : Sl((u + 0.055) / 1.055, 2.4)
      },
      fa = function (u) {
        return u > ar.t3 ? Sl(u, 1 / 3) : u / ar.t2 + ar.t0
      },
      mf = function (u, d, h) {
        ;(u = da(u)), (d = da(d)), (h = da(h))
        var y = fa((0.4124564 * u + 0.3575761 * d + 0.1804375 * h) / ar.Xn),
          k = fa((0.2126729 * u + 0.7151522 * d + 0.072175 * h) / ar.Yn),
          $ = fa((0.0193339 * u + 0.119192 * d + 0.9503041 * h) / ar.Zn)
        return [y, k, $]
      },
      El = vf,
      ir = ls,
      bf = m.unpack,
      yf = Math.pow,
      wf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = bf(u, "lab")
        var h = u[0],
          y = u[1],
          k = u[2],
          $,
          _,
          A,
          L,
          N,
          W
        return (
          (_ = (h + 16) / 116),
          ($ = isNaN(y) ? _ : _ + y / 500),
          (A = isNaN(k) ? _ : _ - k / 200),
          (_ = ir.Yn * ha(_)),
          ($ = ir.Xn * ha($)),
          (A = ir.Zn * ha(A)),
          (L = pa(3.2404542 * $ - 1.5371385 * _ - 0.4985314 * A)),
          (N = pa(-0.969266 * $ + 1.8760108 * _ + 0.041556 * A)),
          (W = pa(0.0556434 * $ - 0.2040259 * _ + 1.0572252 * A)),
          [L, N, W, u.length > 3 ? u[3] : 1]
        )
      },
      pa = function (u) {
        return 255 * (u <= 0.00304 ? 12.92 * u : 1.055 * yf(u, 1 / 2.4) - 0.055)
      },
      ha = function (u) {
        return u > ir.t1 ? u * u * u : ir.t2 * (u - ir.t0)
      },
      _l = wf,
      xf = m.unpack,
      Sf = m.type,
      Ef = q,
      Cl = O,
      Tl = E,
      _f = El
    ;(Cl.prototype.lab = function () {
      return _f(this._rgb)
    }),
      (Ef.lab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Cl,
          [null].concat(u, ["lab"]),
        ))()
      }),
      (Tl.format.lab = _l),
      Tl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = xf(u, "lab")), Sf(u) === "array" && u.length === 3))
            return "lab"
        },
      })
    var Cf = m.unpack,
      Tf = m.RAD2DEG,
      kf = Math.sqrt,
      Pf = Math.atan2,
      $f = Math.round,
      Mf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Cf(u, "lab"),
          y = h[0],
          k = h[1],
          $ = h[2],
          _ = kf(k * k + $ * $),
          A = (Pf($, k) * Tf + 360) % 360
        return $f(_ * 1e4) === 0 && (A = Number.NaN), [y, _, A]
      },
      kl = Mf,
      If = m.unpack,
      Of = El,
      Af = kl,
      Lf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = If(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2],
          _ = Of(y, k, $),
          A = _[0],
          L = _[1],
          N = _[2]
        return Af(A, L, N)
      },
      zf = Lf,
      Bf = m.unpack,
      Nf = m.DEG2RAD,
      Rf = Math.sin,
      jf = Math.cos,
      Ff = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Bf(u, "lch"),
          y = h[0],
          k = h[1],
          $ = h[2]
        return isNaN($) && ($ = 0), ($ = $ * Nf), [y, jf($) * k, Rf($) * k]
      },
      Pl = Ff,
      Df = m.unpack,
      Hf = Pl,
      Gf = _l,
      Vf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Df(u, "lch")
        var h = u[0],
          y = u[1],
          k = u[2],
          $ = Hf(h, y, k),
          _ = $[0],
          A = $[1],
          L = $[2],
          N = Gf(_, A, L),
          W = N[0],
          ie = N[1],
          Y = N[2]
        return [W, ie, Y, u.length > 3 ? u[3] : 1]
      },
      $l = Vf,
      Wf = m.unpack,
      qf = $l,
      Uf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Wf(u, "hcl").reverse()
        return qf.apply(void 0, h)
      },
      Yf = Uf,
      Kf = m.unpack,
      Xf = m.type,
      Ml = q,
      os = O,
      ga = E,
      Il = zf
    ;(os.prototype.lch = function () {
      return Il(this._rgb)
    }),
      (os.prototype.hcl = function () {
        return Il(this._rgb).reverse()
      }),
      (Ml.lch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          os,
          [null].concat(u, ["lch"]),
        ))()
      }),
      (Ml.hcl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          os,
          [null].concat(u, ["hcl"]),
        ))()
      }),
      (ga.format.lch = $l),
      (ga.format.hcl = Yf),
      ["lch", "hcl"].forEach(function (u) {
        return ga.autodetect.push({
          p: 2,
          test: function () {
            for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h]
            if (((d = Kf(d, u)), Xf(d) === "array" && d.length === 3)) return u
          },
        })
      })
    var Jf = {
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
      Ol = Jf,
      Zf = O,
      Al = E,
      Qf = m.type,
      Or = Ol,
      ep = fl,
      tp = dl
    ;(Zf.prototype.name = function () {
      for (
        var u = tp(this._rgb, "rgb"), d = 0, h = Object.keys(Or);
        d < h.length;
        d += 1
      ) {
        var y = h[d]
        if (Or[y] === u) return y.toLowerCase()
      }
      return u
    }),
      (Al.format.named = function (u) {
        if (((u = u.toLowerCase()), Or[u])) return ep(Or[u])
        throw new Error("unknown color name: " + u)
      }),
      Al.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && Qf(u) === "string" && Or[u.toLowerCase()])
            return "named"
        },
      })
    var np = m.unpack,
      rp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = np(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2]
        return (y << 16) + (k << 8) + $
      },
      sp = rp,
      ap = m.type,
      ip = function (u) {
        if (ap(u) == "number" && u >= 0 && u <= 16777215) {
          var d = u >> 16,
            h = (u >> 8) & 255,
            y = u & 255
          return [d, h, y, 1]
        }
        throw new Error("unknown num color: " + u)
      },
      lp = ip,
      op = q,
      Ll = O,
      zl = E,
      up = m.type,
      cp = sp
    ;(Ll.prototype.num = function () {
      return cp(this._rgb)
    }),
      (op.num = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Ll,
          [null].concat(u, ["num"]),
        ))()
      }),
      (zl.format.num = lp),
      zl.autodetect.push({
        p: 5,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            u.length === 1 &&
            up(u[0]) === "number" &&
            u[0] >= 0 &&
            u[0] <= 16777215
          )
            return "num"
        },
      })
    var dp = q,
      va = O,
      Bl = E,
      Nl = m.unpack,
      Rl = m.type,
      jl = Math.round
    ;(va.prototype.rgb = function (u) {
      return (
        u === void 0 && (u = !0),
        u === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(jl)
      )
    }),
      (va.prototype.rgba = function (u) {
        return (
          u === void 0 && (u = !0),
          this._rgb.slice(0, 4).map(function (d, h) {
            return h < 3 ? (u === !1 ? d : jl(d)) : d
          })
        )
      }),
      (dp.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          va,
          [null].concat(u, ["rgb"]),
        ))()
      }),
      (Bl.format.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Nl(u, "rgba")
        return h[3] === void 0 && (h[3] = 1), h
      }),
      Bl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            ((u = Nl(u, "rgba")),
            Rl(u) === "array" &&
              (u.length === 3 ||
                (u.length === 4 &&
                  Rl(u[3]) == "number" &&
                  u[3] >= 0 &&
                  u[3] <= 1)))
          )
            return "rgb"
        },
      })
    var us = Math.log,
      fp = function (u) {
        var d = u / 100,
          h,
          y,
          k
        return (
          d < 66
            ? ((h = 255),
              (y =
                d < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (y = d - 2) +
                    104.49216199393888 * us(y)),
              (k =
                d < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (k = d - 10) +
                    115.67994401066147 * us(k)))
            : ((h =
                351.97690566805693 +
                0.114206453784165 * (h = d - 55) -
                40.25366309332127 * us(h)),
              (y =
                325.4494125711974 +
                0.07943456536662342 * (y = d - 50) -
                28.0852963507957 * us(y)),
              (k = 255)),
          [h, y, k, 1]
        )
      },
      Fl = fp,
      pp = Fl,
      hp = m.unpack,
      gp = Math.round,
      vp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        for (
          var h = hp(u, "rgb"),
            y = h[0],
            k = h[2],
            $ = 1e3,
            _ = 4e4,
            A = 0.4,
            L;
          _ - $ > A;

        ) {
          L = (_ + $) * 0.5
          var N = pp(L)
          N[2] / N[0] >= k / y ? (_ = L) : ($ = L)
        }
        return gp(L)
      },
      mp = vp,
      ma = q,
      cs = O,
      ba = E,
      bp = mp
    ;(cs.prototype.temp =
      cs.prototype.kelvin =
      cs.prototype.temperature =
        function () {
          return bp(this._rgb)
        }),
      (ma.temp =
        ma.kelvin =
        ma.temperature =
          function () {
            for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
            return new (Function.prototype.bind.apply(
              cs,
              [null].concat(u, ["temp"]),
            ))()
          }),
      (ba.format.temp = ba.format.kelvin = ba.format.temperature = Fl)
    var yp = m.unpack,
      ya = Math.cbrt,
      wp = Math.pow,
      xp = Math.sign,
      Sp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = yp(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2],
          _ = [wa(y / 255), wa(k / 255), wa($ / 255)],
          A = _[0],
          L = _[1],
          N = _[2],
          W = ya(0.4122214708 * A + 0.5363325363 * L + 0.0514459929 * N),
          ie = ya(0.2119034982 * A + 0.6806995451 * L + 0.1073969566 * N),
          Y = ya(0.0883024619 * A + 0.2817188376 * L + 0.6299787005 * N)
        return [
          0.2104542553 * W + 0.793617785 * ie - 0.0040720468 * Y,
          1.9779984951 * W - 2.428592205 * ie + 0.4505937099 * Y,
          0.0259040371 * W + 0.7827717662 * ie - 0.808675766 * Y,
        ]
      },
      Dl = Sp
    function wa(u) {
      var d = Math.abs(u)
      return d < 0.04045
        ? u / 12.92
        : (xp(u) || 1) * wp((d + 0.055) / 1.055, 2.4)
    }
    var Ep = m.unpack,
      ds = Math.pow,
      _p = Math.sign,
      Cp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Ep(u, "lab")
        var h = u[0],
          y = u[1],
          k = u[2],
          $ = ds(h + 0.3963377774 * y + 0.2158037573 * k, 3),
          _ = ds(h - 0.1055613458 * y - 0.0638541728 * k, 3),
          A = ds(h - 0.0894841775 * y - 1.291485548 * k, 3)
        return [
          255 * xa(4.0767416621 * $ - 3.3077115913 * _ + 0.2309699292 * A),
          255 * xa(-1.2684380046 * $ + 2.6097574011 * _ - 0.3413193965 * A),
          255 * xa(-0.0041960863 * $ - 0.7034186147 * _ + 1.707614701 * A),
          u.length > 3 ? u[3] : 1,
        ]
      },
      Hl = Cp
    function xa(u) {
      var d = Math.abs(u)
      return d > 0.0031308
        ? (_p(u) || 1) * (1.055 * ds(d, 1 / 2.4) - 0.055)
        : u * 12.92
    }
    var Tp = m.unpack,
      kp = m.type,
      Pp = q,
      Gl = O,
      Vl = E,
      $p = Dl
    ;(Gl.prototype.oklab = function () {
      return $p(this._rgb)
    }),
      (Pp.oklab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Gl,
          [null].concat(u, ["oklab"]),
        ))()
      }),
      (Vl.format.oklab = Hl),
      Vl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Tp(u, "oklab")), kp(u) === "array" && u.length === 3))
            return "oklab"
        },
      })
    var Mp = m.unpack,
      Ip = Dl,
      Op = kl,
      Ap = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Mp(u, "rgb"),
          y = h[0],
          k = h[1],
          $ = h[2],
          _ = Ip(y, k, $),
          A = _[0],
          L = _[1],
          N = _[2]
        return Op(A, L, N)
      },
      Lp = Ap,
      zp = m.unpack,
      Bp = Pl,
      Np = Hl,
      Rp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = zp(u, "lch")
        var h = u[0],
          y = u[1],
          k = u[2],
          $ = Bp(h, y, k),
          _ = $[0],
          A = $[1],
          L = $[2],
          N = Np(_, A, L),
          W = N[0],
          ie = N[1],
          Y = N[2]
        return [W, ie, Y, u.length > 3 ? u[3] : 1]
      },
      jp = Rp,
      Fp = m.unpack,
      Dp = m.type,
      Hp = q,
      Wl = O,
      ql = E,
      Gp = Lp
    ;(Wl.prototype.oklch = function () {
      return Gp(this._rgb)
    }),
      (Hp.oklch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Wl,
          [null].concat(u, ["oklch"]),
        ))()
      }),
      (ql.format.oklch = jp),
      ql.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Fp(u, "oklch")), Dp(u) === "array" && u.length === 3))
            return "oklch"
        },
      })
    var Ul = O,
      Vp = m.type
    Ul.prototype.alpha = function (u, d) {
      return (
        d === void 0 && (d = !1),
        u !== void 0 && Vp(u) === "number"
          ? d
            ? ((this._rgb[3] = u), this)
            : new Ul([this._rgb[0], this._rgb[1], this._rgb[2], u], "rgb")
          : this._rgb[3]
      )
    }
    var Wp = O
    Wp.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var Hn = O,
      qp = ls
    ;(Hn.prototype.darken = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lab()
      return (h[0] -= qp.Kn * u), new Hn(h, "lab").alpha(d.alpha(), !0)
    }),
      (Hn.prototype.brighten = function (u) {
        return u === void 0 && (u = 1), this.darken(-u)
      }),
      (Hn.prototype.darker = Hn.prototype.darken),
      (Hn.prototype.brighter = Hn.prototype.brighten)
    var Up = O
    Up.prototype.get = function (u) {
      var d = u.split("."),
        h = d[0],
        y = d[1],
        k = this[h]()
      if (y) {
        var $ = h.indexOf(y) - (h.substr(0, 2) === "ok" ? 2 : 0)
        if ($ > -1) return k[$]
        throw new Error("unknown channel " + y + " in mode " + h)
      } else return k
    }
    var lr = O,
      Yp = m.type,
      Kp = Math.pow,
      Xp = 1e-7,
      Jp = 20
    lr.prototype.luminance = function (u) {
      if (u !== void 0 && Yp(u) === "number") {
        if (u === 0) return new lr([0, 0, 0, this._rgb[3]], "rgb")
        if (u === 1) return new lr([255, 255, 255, this._rgb[3]], "rgb")
        var d = this.luminance(),
          h = "rgb",
          y = Jp,
          k = function (_, A) {
            var L = _.interpolate(A, 0.5, h),
              N = L.luminance()
            return Math.abs(u - N) < Xp || !y-- ? L : N > u ? k(_, L) : k(L, A)
          },
          $ = (
            d > u
              ? k(new lr([0, 0, 0]), this)
              : k(this, new lr([255, 255, 255]))
          ).rgb()
        return new lr($.concat([this._rgb[3]]))
      }
      return Zp.apply(void 0, this._rgb.slice(0, 3))
    }
    var Zp = function (u, d, h) {
        return (
          (u = Sa(u)),
          (d = Sa(d)),
          (h = Sa(h)),
          0.2126 * u + 0.7152 * d + 0.0722 * h
        )
      },
      Sa = function (u) {
        return (
          (u /= 255), u <= 0.03928 ? u / 12.92 : Kp((u + 0.055) / 1.055, 2.4)
        )
      },
      Ot = {},
      Yl = O,
      Kl = m.type,
      fs = Ot,
      Xl = function (u, d, h) {
        h === void 0 && (h = 0.5)
        for (var y = [], k = arguments.length - 3; k-- > 0; )
          y[k] = arguments[k + 3]
        var $ = y[0] || "lrgb"
        if ((!fs[$] && !y.length && ($ = Object.keys(fs)[0]), !fs[$]))
          throw new Error("interpolation mode " + $ + " is not defined")
        return (
          Kl(u) !== "object" && (u = new Yl(u)),
          Kl(d) !== "object" && (d = new Yl(d)),
          fs[$](u, d, h).alpha(u.alpha() + h * (d.alpha() - u.alpha()))
        )
      },
      Jl = O,
      Qp = Xl
    Jl.prototype.mix = Jl.prototype.interpolate = function (u, d) {
      d === void 0 && (d = 0.5)
      for (var h = [], y = arguments.length - 2; y-- > 0; )
        h[y] = arguments[y + 2]
      return Qp.apply(void 0, [this, u, d].concat(h))
    }
    var Zl = O
    Zl.prototype.premultiply = function (u) {
      u === void 0 && (u = !1)
      var d = this._rgb,
        h = d[3]
      return u
        ? ((this._rgb = [d[0] * h, d[1] * h, d[2] * h, h]), this)
        : new Zl([d[0] * h, d[1] * h, d[2] * h, h], "rgb")
    }
    var Ea = O,
      eh = ls
    ;(Ea.prototype.saturate = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lch()
      return (
        (h[1] += eh.Kn * u),
        h[1] < 0 && (h[1] = 0),
        new Ea(h, "lch").alpha(d.alpha(), !0)
      )
    }),
      (Ea.prototype.desaturate = function (u) {
        return u === void 0 && (u = 1), this.saturate(-u)
      })
    var Ql = O,
      eo = m.type
    Ql.prototype.set = function (u, d, h) {
      h === void 0 && (h = !1)
      var y = u.split("."),
        k = y[0],
        $ = y[1],
        _ = this[k]()
      if ($) {
        var A = k.indexOf($) - (k.substr(0, 2) === "ok" ? 2 : 0)
        if (A > -1) {
          if (eo(d) == "string")
            switch (d.charAt(0)) {
              case "+":
                _[A] += +d
                break
              case "-":
                _[A] += +d
                break
              case "*":
                _[A] *= +d.substr(1)
                break
              case "/":
                _[A] /= +d.substr(1)
                break
              default:
                _[A] = +d
            }
          else if (eo(d) === "number") _[A] = d
          else throw new Error("unsupported value for Color.set")
          var L = new Ql(_, k)
          return h ? ((this._rgb = L._rgb), this) : L
        }
        throw new Error("unknown channel " + $ + " in mode " + k)
      } else return _
    }
    var th = O,
      nh = function (u, d, h) {
        var y = u._rgb,
          k = d._rgb
        return new th(
          y[0] + h * (k[0] - y[0]),
          y[1] + h * (k[1] - y[1]),
          y[2] + h * (k[2] - y[2]),
          "rgb",
        )
      }
    Ot.rgb = nh
    var rh = O,
      _a = Math.sqrt,
      or = Math.pow,
      sh = function (u, d, h) {
        var y = u._rgb,
          k = y[0],
          $ = y[1],
          _ = y[2],
          A = d._rgb,
          L = A[0],
          N = A[1],
          W = A[2]
        return new rh(
          _a(or(k, 2) * (1 - h) + or(L, 2) * h),
          _a(or($, 2) * (1 - h) + or(N, 2) * h),
          _a(or(_, 2) * (1 - h) + or(W, 2) * h),
          "rgb",
        )
      }
    Ot.lrgb = sh
    var ah = O,
      ih = function (u, d, h) {
        var y = u.lab(),
          k = d.lab()
        return new ah(
          y[0] + h * (k[0] - y[0]),
          y[1] + h * (k[1] - y[1]),
          y[2] + h * (k[2] - y[2]),
          "lab",
        )
      }
    Ot.lab = ih
    var to = O,
      ur = function (u, d, h, y) {
        var k, $, _, A
        y === "hsl"
          ? ((_ = u.hsl()), (A = d.hsl()))
          : y === "hsv"
            ? ((_ = u.hsv()), (A = d.hsv()))
            : y === "hcg"
              ? ((_ = u.hcg()), (A = d.hcg()))
              : y === "hsi"
                ? ((_ = u.hsi()), (A = d.hsi()))
                : y === "lch" || y === "hcl"
                  ? ((y = "hcl"), (_ = u.hcl()), (A = d.hcl()))
                  : y === "oklch" &&
                    ((_ = u.oklch().reverse()), (A = d.oklch().reverse()))
        var L, N, W, ie, Y, de
        ;(y.substr(0, 1) === "h" || y === "oklch") &&
          ((k = _),
          (L = k[0]),
          (W = k[1]),
          (Y = k[2]),
          ($ = A),
          (N = $[0]),
          (ie = $[1]),
          (de = $[2]))
        var ce, $e, Ae, ze
        return (
          !isNaN(L) && !isNaN(N)
            ? (N > L && N - L > 180
                ? (ze = N - (L + 360))
                : N < L && L - N > 180
                  ? (ze = N + 360 - L)
                  : (ze = N - L),
              ($e = L + h * ze))
            : isNaN(L)
              ? isNaN(N)
                ? ($e = Number.NaN)
                : (($e = N), (Y == 1 || Y == 0) && y != "hsv" && (ce = ie))
              : (($e = L), (de == 1 || de == 0) && y != "hsv" && (ce = W)),
          ce === void 0 && (ce = W + h * (ie - W)),
          (Ae = Y + h * (de - Y)),
          y === "oklch" ? new to([Ae, ce, $e], y) : new to([$e, ce, Ae], y)
        )
      },
      lh = ur,
      no = function (u, d, h) {
        return lh(u, d, h, "lch")
      }
    ;(Ot.lch = no), (Ot.hcl = no)
    var oh = O,
      uh = function (u, d, h) {
        var y = u.num(),
          k = d.num()
        return new oh(y + h * (k - y), "num")
      }
    Ot.num = uh
    var ch = ur,
      dh = function (u, d, h) {
        return ch(u, d, h, "hcg")
      }
    Ot.hcg = dh
    var fh = ur,
      ph = function (u, d, h) {
        return fh(u, d, h, "hsi")
      }
    Ot.hsi = ph
    var hh = ur,
      gh = function (u, d, h) {
        return hh(u, d, h, "hsl")
      }
    Ot.hsl = gh
    var vh = ur,
      mh = function (u, d, h) {
        return vh(u, d, h, "hsv")
      }
    Ot.hsv = mh
    var bh = O,
      yh = function (u, d, h) {
        var y = u.oklab(),
          k = d.oklab()
        return new bh(
          y[0] + h * (k[0] - y[0]),
          y[1] + h * (k[1] - y[1]),
          y[2] + h * (k[2] - y[2]),
          "oklab",
        )
      }
    Ot.oklab = yh
    var wh = ur,
      xh = function (u, d, h) {
        return wh(u, d, h, "oklch")
      }
    Ot.oklch = xh
    var Ca = O,
      Sh = m.clip_rgb,
      Ta = Math.pow,
      ka = Math.sqrt,
      Pa = Math.PI,
      ro = Math.cos,
      so = Math.sin,
      Eh = Math.atan2,
      _h = function (u, d, h) {
        d === void 0 && (d = "lrgb"), h === void 0 && (h = null)
        var y = u.length
        h ||
          (h = Array.from(new Array(y)).map(function () {
            return 1
          }))
        var k =
          y /
          h.reduce(function ($e, Ae) {
            return $e + Ae
          })
        if (
          (h.forEach(function ($e, Ae) {
            h[Ae] *= k
          }),
          (u = u.map(function ($e) {
            return new Ca($e)
          })),
          d === "lrgb")
        )
          return Ch(u, h)
        for (
          var $ = u.shift(), _ = $.get(d), A = [], L = 0, N = 0, W = 0;
          W < _.length;
          W++
        )
          if (
            ((_[W] = (_[W] || 0) * h[0]),
            A.push(isNaN(_[W]) ? 0 : h[0]),
            d.charAt(W) === "h" && !isNaN(_[W]))
          ) {
            var ie = (_[W] / 180) * Pa
            ;(L += ro(ie) * h[0]), (N += so(ie) * h[0])
          }
        var Y = $.alpha() * h[0]
        u.forEach(function ($e, Ae) {
          var ze = $e.get(d)
          Y += $e.alpha() * h[Ae + 1]
          for (var Fe = 0; Fe < _.length; Fe++)
            if (!isNaN(ze[Fe]))
              if (((A[Fe] += h[Ae + 1]), d.charAt(Fe) === "h")) {
                var vt = (ze[Fe] / 180) * Pa
                ;(L += ro(vt) * h[Ae + 1]), (N += so(vt) * h[Ae + 1])
              } else _[Fe] += ze[Fe] * h[Ae + 1]
        })
        for (var de = 0; de < _.length; de++)
          if (d.charAt(de) === "h") {
            for (var ce = (Eh(N / A[de], L / A[de]) / Pa) * 180; ce < 0; )
              ce += 360
            for (; ce >= 360; ) ce -= 360
            _[de] = ce
          } else _[de] = _[de] / A[de]
        return (Y /= y), new Ca(_, d).alpha(Y > 0.99999 ? 1 : Y, !0)
      },
      Ch = function (u, d) {
        for (var h = u.length, y = [0, 0, 0, 0], k = 0; k < u.length; k++) {
          var $ = u[k],
            _ = d[k] / h,
            A = $._rgb
          ;(y[0] += Ta(A[0], 2) * _),
            (y[1] += Ta(A[1], 2) * _),
            (y[2] += Ta(A[2], 2) * _),
            (y[3] += A[3] * _)
        }
        return (
          (y[0] = ka(y[0])),
          (y[1] = ka(y[1])),
          (y[2] = ka(y[2])),
          y[3] > 0.9999999 && (y[3] = 1),
          new Ca(Sh(y))
        )
      },
      Vt = q,
      cr = m.type,
      Th = Math.pow,
      $a = function (u) {
        var d = "rgb",
          h = Vt("#ccc"),
          y = 0,
          k = [0, 1],
          $ = [],
          _ = [0, 0],
          A = !1,
          L = [],
          N = !1,
          W = 0,
          ie = 1,
          Y = !1,
          de = {},
          ce = !0,
          $e = 1,
          Ae = function (K) {
            if (
              ((K = K || ["#fff", "#000"]),
              K &&
                cr(K) === "string" &&
                Vt.brewer &&
                Vt.brewer[K.toLowerCase()] &&
                (K = Vt.brewer[K.toLowerCase()]),
              cr(K) === "array")
            ) {
              K.length === 1 && (K = [K[0], K[0]]), (K = K.slice(0))
              for (var ye = 0; ye < K.length; ye++) K[ye] = Vt(K[ye])
              $.length = 0
              for (var Oe = 0; Oe < K.length; Oe++) $.push(Oe / (K.length - 1))
            }
            return Tt(), (L = K)
          },
          ze = function (K) {
            if (A != null) {
              for (var ye = A.length - 1, Oe = 0; Oe < ye && K >= A[Oe]; ) Oe++
              return Oe - 1
            }
            return 0
          },
          Fe = function (K) {
            return K
          },
          vt = function (K) {
            return K
          },
          dt = function (K, ye) {
            var Oe, Me
            if ((ye == null && (ye = !1), isNaN(K) || K === null)) return h
            if (ye) Me = K
            else if (A && A.length > 2) {
              var mt = ze(K)
              Me = mt / (A.length - 2)
            } else ie !== W ? (Me = (K - W) / (ie - W)) : (Me = 1)
            ;(Me = vt(Me)),
              ye || (Me = Fe(Me)),
              $e !== 1 && (Me = Th(Me, $e)),
              (Me = _[0] + Me * (1 - _[0] - _[1])),
              (Me = Math.min(1, Math.max(0, Me)))
            var Qe = Math.floor(Me * 1e4)
            if (ce && de[Qe]) Oe = de[Qe]
            else {
              if (cr(L) === "array")
                for (var Be = 0; Be < $.length; Be++) {
                  var Ge = $[Be]
                  if (Me <= Ge) {
                    Oe = L[Be]
                    break
                  }
                  if (Me >= Ge && Be === $.length - 1) {
                    Oe = L[Be]
                    break
                  }
                  if (Me > Ge && Me < $[Be + 1]) {
                    ;(Me = (Me - Ge) / ($[Be + 1] - Ge)),
                      (Oe = Vt.interpolate(L[Be], L[Be + 1], Me, d))
                    break
                  }
                }
              else cr(L) === "function" && (Oe = L(Me))
              ce && (de[Qe] = Oe)
            }
            return Oe
          },
          Tt = function () {
            return (de = {})
          }
        Ae(u)
        var Le = function (K) {
          var ye = Vt(dt(K))
          return N && ye[N] ? ye[N]() : ye
        }
        return (
          (Le.classes = function (K) {
            if (K != null) {
              if (cr(K) === "array") (A = K), (k = [K[0], K[K.length - 1]])
              else {
                var ye = Vt.analyze(k)
                K === 0 ? (A = [ye.min, ye.max]) : (A = Vt.limits(ye, "e", K))
              }
              return Le
            }
            return A
          }),
          (Le.domain = function (K) {
            if (!arguments.length) return k
            ;(W = K[0]), (ie = K[K.length - 1]), ($ = [])
            var ye = L.length
            if (K.length === ye && W !== ie)
              for (var Oe = 0, Me = Array.from(K); Oe < Me.length; Oe += 1) {
                var mt = Me[Oe]
                $.push((mt - W) / (ie - W))
              }
            else {
              for (var Qe = 0; Qe < ye; Qe++) $.push(Qe / (ye - 1))
              if (K.length > 2) {
                var Be = K.map(function (Ve, We) {
                    return We / (K.length - 1)
                  }),
                  Ge = K.map(function (Ve) {
                    return (Ve - W) / (ie - W)
                  })
                Ge.every(function (Ve, We) {
                  return Be[We] === Ve
                }) ||
                  (vt = function (Ve) {
                    if (Ve <= 0 || Ve >= 1) return Ve
                    for (var We = 0; Ve >= Ge[We + 1]; ) We++
                    var qt = (Ve - Ge[We]) / (Ge[We + 1] - Ge[We]),
                      En = Be[We] + qt * (Be[We + 1] - Be[We])
                    return En
                  })
              }
            }
            return (k = [W, ie]), Le
          }),
          (Le.mode = function (K) {
            return arguments.length ? ((d = K), Tt(), Le) : d
          }),
          (Le.range = function (K, ye) {
            return Ae(K), Le
          }),
          (Le.out = function (K) {
            return (N = K), Le
          }),
          (Le.spread = function (K) {
            return arguments.length ? ((y = K), Le) : y
          }),
          (Le.correctLightness = function (K) {
            return (
              K == null && (K = !0),
              (Y = K),
              Tt(),
              Y
                ? (Fe = function (ye) {
                    for (
                      var Oe = dt(0, !0).lab()[0],
                        Me = dt(1, !0).lab()[0],
                        mt = Oe > Me,
                        Qe = dt(ye, !0).lab()[0],
                        Be = Oe + (Me - Oe) * ye,
                        Ge = Qe - Be,
                        Ve = 0,
                        We = 1,
                        qt = 20;
                      Math.abs(Ge) > 0.01 && qt-- > 0;

                    )
                      (function () {
                        return (
                          mt && (Ge *= -1),
                          Ge < 0
                            ? ((Ve = ye), (ye += (We - ye) * 0.5))
                            : ((We = ye), (ye += (Ve - ye) * 0.5)),
                          (Qe = dt(ye, !0).lab()[0]),
                          (Ge = Qe - Be)
                        )
                      })()
                    return ye
                  })
                : (Fe = function (ye) {
                    return ye
                  }),
              Le
            )
          }),
          (Le.padding = function (K) {
            return K != null
              ? (cr(K) === "number" && (K = [K, K]), (_ = K), Le)
              : _
          }),
          (Le.colors = function (K, ye) {
            arguments.length < 2 && (ye = "hex")
            var Oe = []
            if (arguments.length === 0) Oe = L.slice(0)
            else if (K === 1) Oe = [Le(0.5)]
            else if (K > 1) {
              var Me = k[0],
                mt = k[1] - Me
              Oe = kh(0, K, !1).map(function (We) {
                return Le(Me + (We / (K - 1)) * mt)
              })
            } else {
              u = []
              var Qe = []
              if (A && A.length > 2)
                for (
                  var Be = 1, Ge = A.length, Ve = 1 <= Ge;
                  Ve ? Be < Ge : Be > Ge;
                  Ve ? Be++ : Be--
                )
                  Qe.push((A[Be - 1] + A[Be]) * 0.5)
              else Qe = k
              Oe = Qe.map(function (We) {
                return Le(We)
              })
            }
            return (
              Vt[ye] &&
                (Oe = Oe.map(function (We) {
                  return We[ye]()
                })),
              Oe
            )
          }),
          (Le.cache = function (K) {
            return K != null ? ((ce = K), Le) : ce
          }),
          (Le.gamma = function (K) {
            return K != null ? (($e = K), Le) : $e
          }),
          (Le.nodata = function (K) {
            return K != null ? ((h = Vt(K)), Le) : h
          }),
          Le
        )
      }
    function kh(u, d, h) {
      for (
        var y = [], k = u < d, $ = h ? (k ? d + 1 : d - 1) : d, _ = u;
        k ? _ < $ : _ > $;
        k ? _++ : _--
      )
        y.push(_)
      return y
    }
    var Ar = O,
      Ph = $a,
      $h = function (u) {
        for (var d = [1, 1], h = 1; h < u; h++) {
          for (var y = [1], k = 1; k <= d.length; k++)
            y[k] = (d[k] || 0) + d[k - 1]
          d = y
        }
        return d
      },
      Mh = function (u) {
        var d, h, y, k, $, _, A
        if (
          ((u = u.map(function (Y) {
            return new Ar(Y)
          })),
          u.length === 2)
        )
          (d = u.map(function (Y) {
            return Y.lab()
          })),
            ($ = d[0]),
            (_ = d[1]),
            (k = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return $[ce] + Y * (_[ce] - $[ce])
              })
              return new Ar(de, "lab")
            })
        else if (u.length === 3)
          (h = u.map(function (Y) {
            return Y.lab()
          })),
            ($ = h[0]),
            (_ = h[1]),
            (A = h[2]),
            (k = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return (
                  (1 - Y) * (1 - Y) * $[ce] +
                  2 * (1 - Y) * Y * _[ce] +
                  Y * Y * A[ce]
                )
              })
              return new Ar(de, "lab")
            })
        else if (u.length === 4) {
          var L
          ;(y = u.map(function (Y) {
            return Y.lab()
          })),
            ($ = y[0]),
            (_ = y[1]),
            (A = y[2]),
            (L = y[3]),
            (k = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return (
                  (1 - Y) * (1 - Y) * (1 - Y) * $[ce] +
                  3 * (1 - Y) * (1 - Y) * Y * _[ce] +
                  3 * (1 - Y) * Y * Y * A[ce] +
                  Y * Y * Y * L[ce]
                )
              })
              return new Ar(de, "lab")
            })
        } else if (u.length >= 5) {
          var N, W, ie
          ;(N = u.map(function (Y) {
            return Y.lab()
          })),
            (ie = u.length - 1),
            (W = $h(ie)),
            (k = function (Y) {
              var de = 1 - Y,
                ce = [0, 1, 2].map(function ($e) {
                  return N.reduce(function (Ae, ze, Fe) {
                    return (
                      Ae +
                      W[Fe] * Math.pow(de, ie - Fe) * Math.pow(Y, Fe) * ze[$e]
                    )
                  }, 0)
                })
              return new Ar(ce, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return k
      },
      Ih = function (u) {
        var d = Mh(u)
        return (
          (d.scale = function () {
            return Ph(d)
          }),
          d
        )
      },
      Ma = q,
      Wt = function (u, d, h) {
        if (!Wt[h]) throw new Error("unknown blend mode " + h)
        return Wt[h](u, d)
      },
      xn = function (u) {
        return function (d, h) {
          var y = Ma(h).rgb(),
            k = Ma(d).rgb()
          return Ma.rgb(u(y, k))
        }
      },
      Sn = function (u) {
        return function (d, h) {
          var y = []
          return (
            (y[0] = u(d[0], h[0])),
            (y[1] = u(d[1], h[1])),
            (y[2] = u(d[2], h[2])),
            y
          )
        }
      },
      Oh = function (u) {
        return u
      },
      Ah = function (u, d) {
        return (u * d) / 255
      },
      Lh = function (u, d) {
        return u > d ? d : u
      },
      zh = function (u, d) {
        return u > d ? u : d
      },
      Bh = function (u, d) {
        return 255 * (1 - (1 - u / 255) * (1 - d / 255))
      },
      Nh = function (u, d) {
        return d < 128
          ? (2 * u * d) / 255
          : 255 * (1 - 2 * (1 - u / 255) * (1 - d / 255))
      },
      Rh = function (u, d) {
        return 255 * (1 - (1 - d / 255) / (u / 255))
      },
      jh = function (u, d) {
        return u === 255
          ? 255
          : ((u = (255 * (d / 255)) / (1 - u / 255)), u > 255 ? 255 : u)
      }
    ;(Wt.normal = xn(Sn(Oh))),
      (Wt.multiply = xn(Sn(Ah))),
      (Wt.screen = xn(Sn(Bh))),
      (Wt.overlay = xn(Sn(Nh))),
      (Wt.darken = xn(Sn(Lh))),
      (Wt.lighten = xn(Sn(zh))),
      (Wt.dodge = xn(Sn(jh))),
      (Wt.burn = xn(Sn(Rh)))
    for (
      var Fh = Wt,
        Ia = m.type,
        Dh = m.clip_rgb,
        Hh = m.TWOPI,
        Gh = Math.pow,
        Vh = Math.sin,
        Wh = Math.cos,
        ao = q,
        qh = function (u, d, h, y, k) {
          u === void 0 && (u = 300),
            d === void 0 && (d = -1.5),
            h === void 0 && (h = 1),
            y === void 0 && (y = 1),
            k === void 0 && (k = [0, 1])
          var $ = 0,
            _
          Ia(k) === "array" ? (_ = k[1] - k[0]) : ((_ = 0), (k = [k, k]))
          var A = function (L) {
            var N = Hh * ((u + 120) / 360 + d * L),
              W = Gh(k[0] + _ * L, y),
              ie = $ !== 0 ? h[0] + L * $ : h,
              Y = (ie * W * (1 - W)) / 2,
              de = Wh(N),
              ce = Vh(N),
              $e = W + Y * (-0.14861 * de + 1.78277 * ce),
              Ae = W + Y * (-0.29227 * de - 0.90649 * ce),
              ze = W + Y * (1.97294 * de)
            return ao(Dh([$e * 255, Ae * 255, ze * 255, 1]))
          }
          return (
            (A.start = function (L) {
              return L == null ? u : ((u = L), A)
            }),
            (A.rotations = function (L) {
              return L == null ? d : ((d = L), A)
            }),
            (A.gamma = function (L) {
              return L == null ? y : ((y = L), A)
            }),
            (A.hue = function (L) {
              return L == null
                ? h
                : ((h = L),
                  Ia(h) === "array"
                    ? (($ = h[1] - h[0]), $ === 0 && (h = h[1]))
                    : ($ = 0),
                  A)
            }),
            (A.lightness = function (L) {
              return L == null
                ? k
                : (Ia(L) === "array"
                    ? ((k = L), (_ = L[1] - L[0]))
                    : ((k = [L, L]), (_ = 0)),
                  A)
            }),
            (A.scale = function () {
              return ao.scale(A)
            }),
            A.hue(h),
            A
          )
        },
        Uh = O,
        Yh = "0123456789abcdef",
        Kh = Math.floor,
        Xh = Math.random,
        Jh = function () {
          for (var u = "#", d = 0; d < 6; d++) u += Yh.charAt(Kh(Xh() * 16))
          return new Uh(u, "hex")
        },
        Oa = f,
        io = Math.log,
        Zh = Math.pow,
        Qh = Math.floor,
        e0 = Math.abs,
        lo = function (u, d) {
          d === void 0 && (d = null)
          var h = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0,
          }
          return (
            Oa(u) === "object" && (u = Object.values(u)),
            u.forEach(function (y) {
              d && Oa(y) === "object" && (y = y[d]),
                y != null &&
                  !isNaN(y) &&
                  (h.values.push(y),
                  (h.sum += y),
                  y < h.min && (h.min = y),
                  y > h.max && (h.max = y),
                  (h.count += 1))
            }),
            (h.domain = [h.min, h.max]),
            (h.limits = function (y, k) {
              return oo(h, y, k)
            }),
            h
          )
        },
        oo = function (u, d, h) {
          d === void 0 && (d = "equal"),
            h === void 0 && (h = 7),
            Oa(u) == "array" && (u = lo(u))
          var y = u.min,
            k = u.max,
            $ = u.values.sort(function (La, za) {
              return La - za
            })
          if (h === 1) return [y, k]
          var _ = []
          if (
            (d.substr(0, 1) === "c" && (_.push(y), _.push(k)),
            d.substr(0, 1) === "e")
          ) {
            _.push(y)
            for (var A = 1; A < h; A++) _.push(y + (A / h) * (k - y))
            _.push(k)
          } else if (d.substr(0, 1) === "l") {
            if (y <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var L = Math.LOG10E * io(y),
              N = Math.LOG10E * io(k)
            _.push(y)
            for (var W = 1; W < h; W++) _.push(Zh(10, L + (W / h) * (N - L)))
            _.push(k)
          } else if (d.substr(0, 1) === "q") {
            _.push(y)
            for (var ie = 1; ie < h; ie++) {
              var Y = (($.length - 1) * ie) / h,
                de = Qh(Y)
              if (de === Y) _.push($[de])
              else {
                var ce = Y - de
                _.push($[de] * (1 - ce) + $[de + 1] * ce)
              }
            }
            _.push(k)
          } else if (d.substr(0, 1) === "k") {
            var $e,
              Ae = $.length,
              ze = new Array(Ae),
              Fe = new Array(h),
              vt = !0,
              dt = 0,
              Tt = null
            ;(Tt = []), Tt.push(y)
            for (var Le = 1; Le < h; Le++) Tt.push(y + (Le / h) * (k - y))
            for (Tt.push(k); vt; ) {
              for (var K = 0; K < h; K++) Fe[K] = 0
              for (var ye = 0; ye < Ae; ye++)
                for (
                  var Oe = $[ye], Me = Number.MAX_VALUE, mt = void 0, Qe = 0;
                  Qe < h;
                  Qe++
                ) {
                  var Be = e0(Tt[Qe] - Oe)
                  Be < Me && ((Me = Be), (mt = Qe)), Fe[mt]++, (ze[ye] = mt)
                }
              for (var Ge = new Array(h), Ve = 0; Ve < h; Ve++) Ge[Ve] = null
              for (var We = 0; We < Ae; We++)
                ($e = ze[We]),
                  Ge[$e] === null ? (Ge[$e] = $[We]) : (Ge[$e] += $[We])
              for (var qt = 0; qt < h; qt++) Ge[qt] *= 1 / Fe[qt]
              vt = !1
              for (var En = 0; En < h; En++)
                if (Ge[En] !== Tt[En]) {
                  vt = !0
                  break
                }
              ;(Tt = Ge), dt++, dt > 200 && (vt = !1)
            }
            for (var _n = {}, dr = 0; dr < h; dr++) _n[dr] = []
            for (var fr = 0; fr < Ae; fr++) ($e = ze[fr]), _n[$e].push($[fr])
            for (var ln = [], Gn = 0; Gn < h; Gn++)
              ln.push(_n[Gn][0]), ln.push(_n[Gn][_n[Gn].length - 1])
            ;(ln = ln.sort(function (La, za) {
              return La - za
            })),
              _.push(ln[0])
            for (var Lr = 1; Lr < ln.length; Lr += 2) {
              var Vn = ln[Lr]
              !isNaN(Vn) && _.indexOf(Vn) === -1 && _.push(Vn)
            }
          }
          return _
        },
        uo = { analyze: lo, limits: oo },
        co = O,
        t0 = function (u, d) {
          ;(u = new co(u)), (d = new co(d))
          var h = u.luminance(),
            y = d.luminance()
          return h > y ? (h + 0.05) / (y + 0.05) : (y + 0.05) / (h + 0.05)
        },
        fo = O,
        an = Math.sqrt,
        lt = Math.pow,
        n0 = Math.min,
        r0 = Math.max,
        po = Math.atan2,
        ho = Math.abs,
        ps = Math.cos,
        go = Math.sin,
        s0 = Math.exp,
        vo = Math.PI,
        a0 = function (u, d, h, y, k) {
          h === void 0 && (h = 1),
            y === void 0 && (y = 1),
            k === void 0 && (k = 1)
          var $ = function (Vn) {
              return (360 * Vn) / (2 * vo)
            },
            _ = function (Vn) {
              return (2 * vo * Vn) / 360
            }
          ;(u = new fo(u)), (d = new fo(d))
          var A = Array.from(u.lab()),
            L = A[0],
            N = A[1],
            W = A[2],
            ie = Array.from(d.lab()),
            Y = ie[0],
            de = ie[1],
            ce = ie[2],
            $e = (L + Y) / 2,
            Ae = an(lt(N, 2) + lt(W, 2)),
            ze = an(lt(de, 2) + lt(ce, 2)),
            Fe = (Ae + ze) / 2,
            vt = 0.5 * (1 - an(lt(Fe, 7) / (lt(Fe, 7) + lt(25, 7)))),
            dt = N * (1 + vt),
            Tt = de * (1 + vt),
            Le = an(lt(dt, 2) + lt(W, 2)),
            K = an(lt(Tt, 2) + lt(ce, 2)),
            ye = (Le + K) / 2,
            Oe = $(po(W, dt)),
            Me = $(po(ce, Tt)),
            mt = Oe >= 0 ? Oe : Oe + 360,
            Qe = Me >= 0 ? Me : Me + 360,
            Be = ho(mt - Qe) > 180 ? (mt + Qe + 360) / 2 : (mt + Qe) / 2,
            Ge =
              1 -
              0.17 * ps(_(Be - 30)) +
              0.24 * ps(_(2 * Be)) +
              0.32 * ps(_(3 * Be + 6)) -
              0.2 * ps(_(4 * Be - 63)),
            Ve = Qe - mt
          ;(Ve = ho(Ve) <= 180 ? Ve : Qe <= mt ? Ve + 360 : Ve - 360),
            (Ve = 2 * an(Le * K) * go(_(Ve) / 2))
          var We = Y - L,
            qt = K - Le,
            En = 1 + (0.015 * lt($e - 50, 2)) / an(20 + lt($e - 50, 2)),
            _n = 1 + 0.045 * ye,
            dr = 1 + 0.015 * ye * Ge,
            fr = 30 * s0(-lt((Be - 275) / 25, 2)),
            ln = 2 * an(lt(ye, 7) / (lt(ye, 7) + lt(25, 7))),
            Gn = -ln * go(2 * _(fr)),
            Lr = an(
              lt(We / (h * En), 2) +
                lt(qt / (y * _n), 2) +
                lt(Ve / (k * dr), 2) +
                Gn * (qt / (y * _n)) * (Ve / (k * dr)),
            )
          return r0(0, n0(100, Lr))
        },
        mo = O,
        i0 = function (u, d, h) {
          h === void 0 && (h = "lab"), (u = new mo(u)), (d = new mo(d))
          var y = u.get(h),
            k = d.get(h),
            $ = 0
          for (var _ in y) {
            var A = (y[_] || 0) - (k[_] || 0)
            $ += A * A
          }
          return Math.sqrt($)
        },
        l0 = O,
        o0 = function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          try {
            return (
              new (Function.prototype.bind.apply(l0, [null].concat(u)))(), !0
            )
          } catch {
            return !1
          }
        },
        bo = q,
        yo = $a,
        u0 = {
          cool: function () {
            return yo([bo.hsl(180, 1, 0.9), bo.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return yo(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          },
        },
        hs = {
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
        Aa = 0,
        wo = Object.keys(hs);
      Aa < wo.length;
      Aa += 1
    ) {
      var xo = wo[Aa]
      hs[xo.toLowerCase()] = hs[xo]
    }
    var c0 = hs,
      ct = q
    ;(ct.average = _h),
      (ct.bezier = Ih),
      (ct.blend = Fh),
      (ct.cubehelix = qh),
      (ct.mix = ct.interpolate = Xl),
      (ct.random = Jh),
      (ct.scale = $a),
      (ct.analyze = uo.analyze),
      (ct.contrast = t0),
      (ct.deltaE = a0),
      (ct.distance = i0),
      (ct.limits = uo.limits),
      (ct.valid = o0),
      (ct.scales = u0),
      (ct.colors = Ol),
      (ct.brewer = c0)
    var d0 = ct
    return d0
  })
})(fd)
var $y = fd.exports
const tn = Py($y),
  Fn = (e) => (es("data-v-3350a51b"), (e = e()), ts(), e),
  My = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  Iy = { class: "flex flex-col items-center justify-center w-full" },
  Oy = {
    class: "flex flex-row mb-12 flex-wrap sm:flex-wrap md:flex-nowrap",
    style: { gap: "5rem" },
  },
  Ay = { viewBox: "0 0 36 36", class: "chart" },
  Ly = Fn(() =>
    g(
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
  zy = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  By = { viewBox: "0 0 36 36", class: "chart" },
  Ny = Fn(() =>
    g(
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
  Ry = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  jy = Fn(() =>
    g(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  Fy = Fn(() =>
    g(
      "p",
      null,
      [
        Ie(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        g("b", null, "315 KB"),
        Ie(". That's half of the classic SNES game "),
        g("em", null, "The Legend of Zelda: A Link to The Past"),
        Ie(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  Dy = Fn(() => g("p", null, "You want fast? Let's make it happen.", -1)),
  Hy = { id: "speedTable" },
  Gy = Fn(() =>
    g(
      "colgroup",
      null,
      [
        g("col", { style: { width: "30%" } }),
        g("col", { style: { width: "70%" } }),
      ],
      -1,
    ),
  ),
  Vy = { class: "flex" },
  Wy = { class: "flex" },
  qy = Fn(() =>
    g(
      "tbody",
      null,
      [
        g("tr", null, [
          g("td", null, "Huge, resource-heavy images"),
          g("td", null, [
            Ie(" Optimize your images. "),
            g("b", null, "A lot. "),
            Ie(
              "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
            ),
          ]),
        ]),
        g("tr", null, [
          g("td", null, "Unused code, plugins, and assets"),
          g(
            "td",
            null,
            " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
          ),
        ]),
        g("tr", null, [
          g("td", null, "Inefficient, resource-heavy platforms"),
          g(
            "td",
            null,
            " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
          ),
        ]),
        g("tr", null, [
          g("td", null, "Uncached resources"),
          g(
            "td",
            null,
            " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
          ),
        ]),
      ],
      -1,
    ),
  ),
  Uy = Fn(() => g("div", { class: "h-6" }, null, -1)),
  Yy = {
    data() {
      return {
        radius: 16,
        circumference: 2 * Math.PI * 16,
        percentage: 96,
        percentage2: 97.5,
      }
    },
    computed: {
      dashoffset() {
        let e = this.percentage / 100
        return this.circumference * (1 - e)
      },
      dashoffset2() {
        let e = this.percentage2 / 100
        return this.circumference * (1 - e)
      },
    },
  },
  Ky = Object.assign(Yy, {
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
            ? (c = tn("#e2e8f0"))
            : o == 4
              ? (c = tn("#cbd5e1"))
              : o == 3
                ? (c = tn("#475569"))
                : o == 2
                  ? (c = tn("#1e293b"))
                  : o == 1 && (c = tn("#0f172a"))
          for (let p = 1; p < f.length; p++)
            p % 2 == 0
              ? (f[p].style.backgroundColor = c.brighten(0))
              : (f[p].style.backgroundColor = c.brighten(0.2))
        }
      return (
        yt(() => {
          l(t.brightness)
        }),
        Bn(
          () => t.brightness,
          (o, f) => {
            l(o)
          },
        ),
        (o, f) => (
          te(),
          xe("div", My, [
            g("div", Iy, [
              g("div", Oy, [
                g(
                  "div",
                  { id: "perfChart", class: I(r(e.brightness)) },
                  [
                    (te(),
                    xe("svg", Ay, [
                      Ly,
                      g(
                        "path",
                        {
                          class: I(["circle", s(e.brightness)]),
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
                        zy,
                      ),
                    ])),
                    g(
                      "div",
                      {
                        id: "chartInner",
                        class: I(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 96 ",
                      2,
                    ),
                    g(
                      "p",
                      {
                        class: I([
                          "text-sm italic opacity-50 mt-3",
                          a(e.brightness),
                        ]),
                        style: { "min-width": "250px" },
                      },
                      [
                        Ie(
                          " Google Page Speed desktop performance score for the Bazaar ",
                        ),
                        g(
                          "a",
                          {
                            href: "/portfolio/bazaar",
                            class: I(n(e.brightness)),
                          },
                          "site",
                          2,
                        ),
                      ],
                      2,
                    ),
                  ],
                  2,
                ),
                g(
                  "div",
                  {
                    id: "perfChart",
                    class: I([r(e.brightness), "hidden sm:hidden md:block"]),
                  },
                  [
                    (te(),
                    xe("svg", By, [
                      Ny,
                      g(
                        "path",
                        {
                          class: I(["circle", s(e.brightness)]),
                          d: `M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831`,
                          fill: "none",
                          stroke: i.value,
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-dasharray":
                            o.circumference + " " + o.circumference,
                          "stroke-dashoffset": o.dashoffset2,
                        },
                        null,
                        10,
                        Ry,
                      ),
                    ])),
                    g(
                      "div",
                      {
                        id: "chartInner",
                        class: I(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 99 ",
                      2,
                    ),
                    g(
                      "p",
                      {
                        class: I([
                          "text-sm italic opacity-50 mt-3",
                          a(e.brightness),
                        ]),
                        style: { "min-width": "250px" },
                      },
                      " Google Page Speed desktop performance score for this site ",
                      2,
                    ),
                  ],
                  2,
                ),
              ]),
              g(
                "div",
                {
                  class: I([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  g(
                    "h2",
                    { class: I(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  g(
                    "h2",
                    { class: I(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  jy,
                  Fy,
                  Dy,
                  g("h3", { class: I(a(e.brightness)) }, "How I help", 2),
                  g("table", Hy, [
                    Gy,
                    g("thead", null, [
                      g("tr", null, [
                        g("th", null, [
                          g("div", Vy, [
                            g(
                              "h4",
                              { class: I([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ie(" Problem "),
                                he(
                                  we(_1),
                                  {
                                    size: "3rem",
                                    class: I([n(e.brightness), "inline mb-1"]),
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
                        g("th", null, [
                          g("div", Wy, [
                            g(
                              "h4",
                              { class: I([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ie(" What I can do "),
                                he(
                                  we(S1),
                                  {
                                    size: "3rem",
                                    class: I([n(e.brightness), "inline mb-1"]),
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
                    qy,
                  ]),
                ],
                2,
              ),
              Uy,
              he(ss, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  Xy = vn(Ky, [["__scopeId", "data-v-3350a51b"]]),
  Jy = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  Zy = { class: "lg:w-6/12 sm:w-12/12" },
  Qy = g(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  ew = g("p", null, [g("b", null, " Don't worry, I can help!")], -1),
  tw = g(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  nw = { class: "flex items-center w-full" },
  rw = g(
    "p",
    null,
    [
      Ie(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      g("em", null, "very"),
      Ie(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  sw = g("div", { class: "h-3" }, null, -1),
  aw = { class: "flex items-center w-full" },
  iw = g(
    "p",
    null,
    [
      Ie(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      g("em", null, "do"),
      Ie(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  lw = g("div", { class: "h-3" }, null, -1),
  ow = { class: "flex items-center w-full" },
  uw = g(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  cw = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  dw = { class: "prose text-center" },
  fw = g("div", { class: "h-3" }, null, -1),
  pw = g("div", { class: "h-3" }, null, -1),
  hw = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      ne(9274)
      const t = ne(4709),
        n = ne(new Date("2023-10-01")),
        r = ne(new Date()),
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
        te(),
        xe("div", Jy, [
          g("div", Zy, [
            g(
              "h2",
              { class: I(["text-left text-5xl", l(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            g(
              "p",
              {
                class: I([
                  "text-left text-sm italic opacity-50 mt-3",
                  l(e.brightness),
                ]),
              },
              [
                Ie(" Website already secure? "),
                g("b", null, [
                  g(
                    "a",
                    { href: "", class: I(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  Ie(" are you?"),
                ]),
              ],
              2,
            ),
            g(
              "hr",
              { class: I(["mb-5 mt-1 w-6/12 opacity-25", l(e.brightness)]) },
              null,
              2,
            ),
            g(
              "div",
              { class: I(["prose", l(e.brightness)]) },
              [
                Qy,
                ew,
                tw,
                g(
                  "div",
                  {
                    class: I([
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
                    g("div", nw, [
                      he(
                        we(Ms),
                        { class: I(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: I(["font-bold m-0", l(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    rw,
                  ],
                  2,
                ),
                sw,
                g(
                  "div",
                  {
                    class: I([
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
                    g("div", aw, [
                      he(
                        we(Ms),
                        { size: "2rem", class: I(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: I(["font-bold m-0", l(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    iw,
                  ],
                  2,
                ),
                lw,
                g(
                  "div",
                  {
                    class: I([
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
                    g("div", ow, [
                      he(
                        we(Ms),
                        { class: I(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: I(["font-bold m-0", l(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    uw,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          g("div", cw, [
            g(
              "div",
              {
                class: I([
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
                g("div", dw, [
                  g(
                    "h3",
                    {
                      class: I([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    Pt(a(s.value)) + "+ ",
                    3,
                  ),
                  g(
                    "h3",
                    { class: I(["text-xl", l(e.brightness)]) },
                    [
                      Ie(" attacks blocked on "),
                      g(
                        "a",
                        {
                          class: I(i(e.brightness)),
                          href: "https://bazaar.blendernation.com",
                        },
                        "BlenderNation Bazaar",
                        2,
                      ),
                    ],
                    2,
                  ),
                  g(
                    "p",
                    {
                      class: I(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  g(
                    "p",
                    {
                      class: I(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    [
                      g(
                        "a",
                        { href: "", class: I(i(e.brightness)) },
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
            fw,
            g("hr", { class: I(["opacity-50", l(e.brightness)]) }, null, 2),
            pw,
            he(ss, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  gw = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  vw = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  mw = { class: "flex w-full" },
  bw = { class: "flex w-full pt-4 gap-2" },
  yw = { class: "w-6/12" },
  ww = { class: "w-6/12" },
  xw = { class: "w-full flex" },
  Sw = { class: "w-6/12" },
  Ew = { class: "w-6/12 pb-3" },
  _w = g("em", null, "huge", -1),
  Cw = g("div", { class: "h-6" }, null, -1),
  Tw = {
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
        r = ne(!1),
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
            ? (p = tn("#e2e8f0"))
            : f == 4
              ? (p = tn("#cbd5e1"))
              : f == 3
                ? (p = tn("#475569"))
                : f == 2
                  ? (p = tn("#1e293b"))
                  : f == 1 && (p = tn("#0f172a"))
          for (let v = 1; v < c.length; v++)
            v % 2 == 0
              ? (c[v].style.backgroundColor = p.brighten(0))
              : (c[v].style.backgroundColor = p.brighten(0.2))
        },
        o = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        yt(() => {
          l(t.brightness)
        }),
        Bn(
          () => t.brightness,
          (f, c) => {
            l(f)
          },
        ),
        (f, c) => (
          te(),
          xe("div", gw, [
            g("div", vw, [
              g(
                "h2",
                { class: I(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              g(
                "h3",
                { class: I(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              g(
                "h4",
                { class: I(i(e.brightness)) },
                [
                  Ie(" What are the "),
                  g(
                    "a",
                    {
                      class: I(["font-bold", n(e.brightness)]),
                      href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    "Web Content Accessibility Guidelines?",
                    2,
                  ),
                ],
                2,
              ),
              g(
                "p",
                { class: I(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              g(
                "p",
                { class: I(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              g(
                "h4",
                { class: I(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              g(
                "p",
                { class: I(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              g(
                "p",
                { class: I(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              g("div", mw, [
                g(
                  "button",
                  {
                    class: I([
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
                    r.value ? (te(), De(we(Jc), { key: 0 })) : st("", !0),
                    r.value ? st("", !0) : (te(), De(we(g1), { key: 1 })),
                    Ie(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              g("div", bw, [
                g("div", yw, [
                  g(
                    "button",
                    { class: I(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (te(), De(we(Su), { key: 0 })) : st("", !0)],
                    2,
                  ),
                ]),
                g("div", ww, [
                  g(
                    "button",
                    { class: I(["rounded px-5 py-2 w-full", a.value]) },
                    [r.value ? (te(), De(we(wi), { key: 0 })) : st("", !0)],
                    2,
                  ),
                ]),
              ]),
              g(
                "h4",
                { class: I(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              g("div", xw, [
                g("div", Sw, [
                  g(
                    "button",
                    {
                      class: I([
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
                    [Ie(" Submit "), he(we(Su))],
                    2,
                  ),
                ]),
                g("div", Ew, [
                  g(
                    "button",
                    {
                      class: I([
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
                    [Ie(" Cancel "), he(we(wi))],
                    2,
                  ),
                ]),
              ]),
              g(
                "p",
                { class: I(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              g(
                "p",
                { class: I(i(e.brightness)) },
                [
                  Ie(" Changes like these may seem small, but they make a "),
                  _w,
                  Ie(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            Cw,
            he(ss, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  kw = ["onMouseover"],
  Pw = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = ne([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = ne(0)
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
        te(),
        De(we(rm), null, {
          default: Xe(() => [
            he(
              we(sm),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: Xe(() => [
                  (te(!0),
                  xe(
                    Je,
                    null,
                    fn(
                      t.value,
                      (l) => (
                        te(),
                        De(
                          we(am),
                          {
                            key: l.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: Xe(({ selected: o }) => [
                              g(
                                "div",
                                {
                                  class: I([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, o, we(n), l.id),
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
                                    ? (te(),
                                      De(
                                        we(Ms),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: I(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 1
                                    ? (te(),
                                      De(
                                        we(m1),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: I(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 4
                                    ? (te(),
                                      De(
                                        we(v1),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: I(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 3
                                    ? (te(),
                                      De(
                                        we(x1),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: I(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 5
                                    ? (te(),
                                      De(
                                        we(Jc),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: I(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  g(
                                    "p",
                                    {
                                      class: I([
                                        "font-semibold cursor-pointer",
                                        s(e.brightness, o),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    Pt(l.title),
                                    3,
                                  ),
                                ],
                                42,
                                kw,
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
              we(im),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: Xe(() => [
                  he(
                    we(Br),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(Xy, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Br),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(hw, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Br),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(Ty, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Br),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(py, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Br),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(Tw, { brightness: e.brightness }, null, 8, [
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
  $w = { href: "/pricing" },
  Mw = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = ne(!1)
      yt(() => {
        const r = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", r),
          jn(() => {
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
        te(),
        xe(
          "div",
          {
            style: { transition: "opacity 0.5s ease-in-out" },
            class: I([
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
            g(
              "p",
              { class: I(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            g("a", $w, [
              g(
                "button",
                {
                  "aria-label":
                    "Get a free site speed audit with recommendations for optimizing",
                  class: I([
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
  $r = (e) => (es("data-v-e20b9d11"), (e = e()), ts(), e),
  Iw = { class: "flex-col" },
  Ow = { class: "prose py-5 flex-col w-full" },
  Aw = $r(() => g("br", null, null, -1)),
  Lw = $r(() => g("br", null, null, -1)),
  zw = { class: "flex" },
  Bw = { class: "w-6/12" },
  Nw = ["name", "checked", "onClick"],
  Rw = { class: "w-6/12" },
  jw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Fw = { class: "flex-col gap-4" },
  Dw = { class: "flex items-center" },
  Hw = ["name", "checked", "onClick"],
  Gw = { key: 0 },
  Vw = { key: 1 },
  Ww = { class: "" },
  qw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Uw = { class: "flex-col" },
  Yw = { class: "flex justify-between" },
  Kw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Xw = { class: "gap-4 mt-4", name: "pricing" },
  Jw = ["value"],
  Zw = ["value"],
  Qw = { class: "flex gap-4", id: "leftInputs" },
  e3 = { class: "flex gap-4", id: "rightInputs" },
  t3 = $r(() => g("br", null, null, -1)),
  n3 = $r(() => g("br", null, null, -1)),
  r3 = $r(() => g("br", null, null, -1)),
  s3 = $r(() => g("br", null, null, -1)),
  a3 = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (F) => {
          F.preventDefault()
          const oe = "pricing"
          let V = document.getElementsByName("name")[0].value,
            Ye = document.getElementsByName("email")[0].value,
            ke = document.getElementsByName("website")[0].value,
            tt = document.getElementsByName("notes")[0].value,
            nt = document.getElementsByName("services")[0].value,
            Jt = document.getElementsByName("total")[0].value,
            Dt = window.location.href,
            Ct = new XMLHttpRequest()
          Ct.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            Ct.setRequestHeader("Content-Type", "application/json"),
            Ct.send(
              JSON.stringify({
                form: oe,
                name: V,
                email: Ye,
                website: ke,
                notes: tt,
                services: nt,
                total: Jt,
                referrer: Dt,
              }),
            ),
            (Ct.onloadend = function () {
              if (
                (console.log(
                  `Status: ${Ct.status}, Response: ${Ct.responseText}`,
                ),
                Ct.status == 200)
              ) {
                let it = document.getElementsByName(oe)[0],
                  R = document.createElement("div")
                R.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (R.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  it.appendChild(R)
                let le = document.getElementById("leftInputs"),
                  re = document.getElementById("rightInputs")
                ;(le.style.display = "none"), (re.style.display = "none")
                let pe = document.getElementById("submitButton")
                pe.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        r = (F) => {
          if (F >= 4) return "text-emerald-500"
          if (F == 3) return "text-orange-200"
          if (F == 2) return "text-orange-500"
          if (F == 1) return "text-orange-400"
        },
        s = (F) => {
          if (F >= 4) return "text-emerald-500"
          if (F == 3) return "text-slate-800"
          if (F == 2) return "text-orange-500"
          if (F == 1) return "text-orange-400"
        },
        a = (F) => {
          if (F >= 4) return "border-emerald-500"
          if (F == 3) return "border-orange-200"
          if (F == 2) return "border-orange-500"
          if (F == 1) return "border-orange-400"
        },
        i = (F) => {
          if (F >= 4) return "text-slate-800"
          if (F == 3) return "text-slate-200"
          if (F == 2) return "text-slate-300"
          if (F == 1) return "text-slate-300"
        },
        l = ne({
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
              (F, oe) => F + (oe.enabled ? oe.price : 0),
              0,
            ) * o.value,
        ),
        b = me(
          () =>
            Object.values(l.value.security).reduce(
              (F, oe) => F + (oe.enabled ? oe.price : 0),
              0,
            ) * f.value,
        ),
        P = me(
          () =>
            Object.values(l.value.accessibility).reduce(
              (F, oe) => F + (oe.enabled ? oe.price : 0),
              0,
            ) * c.value,
        ),
        m = me(
          () =>
            Object.values(l.value.designOverhaul).reduce(
              (F, oe) => F + (oe.enabled ? oe.price : 0),
              0,
            ) * p.value,
        ),
        E = me(() => {
          let F = 0
          for (const [oe, V] of Object.entries(l.value.speed))
            V.enabled && (F += V.price)
          return F
        }),
        T = me(() => {
          let F = 0
          for (const [oe, V] of Object.entries(l.value.security))
            V.enabled && (F += V.price)
          return F
        }),
        x = me(() => {
          let F = 0
          for (const [oe, V] of Object.entries(l.value.accessibility))
            V.enabled && (F += V.price)
          return F
        }),
        w = me(() => {
          let F = 0
          for (const [oe, V] of Object.entries(l.value.designOverhaul))
            V.enabled && (F += V.price)
          return F
        }),
        M = () => {
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
        z = () => {
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
        O = () => {
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
        se = () => {
          l.value.designOverhaul.designOverhaul.enabled
            ? (l.value.designOverhaul.designOverhaul.enabled = !1)
            : (l.value.designOverhaul.designOverhaul.enabled = !0)
        },
        q = (F) => {
          F.title == "Speed"
            ? M()
            : F.title == "Security"
              ? z()
              : F.title == "Accessibility"
                ? O()
                : F.title == "Design Overhaul" && se()
        },
        G = (F) => Object.values(F.services).some((oe) => oe.enabled),
        D = ne([
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
        Q = (F) => {
          if (F.title === "Speed") return v.value
          if (F.title === "Security") return b.value
          if (F.title === "Accessibility") return P.value
          if (F.title === "Design Overhaul") return m.value
        },
        ge = (F) => {
          if (F.title === "Speed") return E.value
          if (F.title === "Security") return T.value
          if (F.title === "Accessibility") return x.value
          if (F.title === "Design Overhaul") return w.value
        },
        X = me(
          () => Q(D.value[0]) + Q(D.value[1]) + Q(D.value[2]) + Q(D.value[3]),
        ),
        Se = me(() => {
          let F = []
          for (const [oe, V] of Object.entries(l.value.speed))
            V.enabled && F.push(V.title)
          for (const [oe, V] of Object.entries(l.value.security))
            V.enabled && F.push(V.title)
          for (const [oe, V] of Object.entries(l.value.accessibility))
            V.enabled && F.push(V.title)
          for (const [oe, V] of Object.entries(l.value.designOverhaul))
            V.enabled && F.push(V.title)
          return F
        }),
        Ce = (F) => {
          let oe = ""
          return (
            (oe += a(F)),
            F == 5
              ? (oe += " bg-slate-100")
              : F == 4
                ? (oe += " bg-slate-400")
                : F == 3
                  ? (oe += " bg-slate-500")
                  : F == 2
                    ? (oe += " bg-slate-700")
                    : F == 1 && (oe += " bg-slate-800"),
            oe
          )
        }
      return (F, oe) => (
        te(),
        xe("div", Iw, [
          g("div", Ow, [
            g(
              "h2",
              {
                class: I([
                  "text-5xl text-center text-semibold",
                  i(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            g(
              "p",
              { class: I(["text-center", i(n.brightness)]) },
              [
                Ie(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                Aw,
                Lw,
                Ie(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                g(
                  "a",
                  {
                    href: "/contact",
                    class: I(["font-bold", r(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                Ie(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (te(!0),
          xe(
            Je,
            null,
            fn(
              D.value,
              (V, Ye) => (
                te(),
                xe(
                  "div",
                  {
                    key: Ye,
                    class: I([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      Ce(n.brightness),
                    ]),
                  },
                  [
                    g("div", zw, [
                      g("div", Bw, [
                        g(
                          "div",
                          {
                            class: I([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              i(n.brightness),
                            ]),
                          },
                          [
                            g(
                              "input",
                              {
                                type: "checkbox",
                                name: V.title,
                                checked: G(V),
                                onClick: (ke) => q(V),
                                class: I([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              Nw,
                            ),
                            g("h3", null, Pt(V.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      g("div", Rw, [
                        g(
                          "h3",
                          {
                            class: I([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            ge(V) != Math.floor(Q(V))
                              ? (te(), xe("span", jw, "$" + Pt(ge(V)), 1))
                              : st("", !0),
                            Ie("$" + Pt(Q(V)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    g(
                      "hr",
                      { class: I(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    g("div", Fw, [
                      (te(!0),
                      xe(
                        Je,
                        null,
                        fn(
                          V.services,
                          (ke, tt) => (
                            te(),
                            xe(
                              "div",
                              {
                                key: tt,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                g("div", Dw, [
                                  g(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: ke.title,
                                      checked: ke.enabled,
                                      onClick: (nt) =>
                                        (ke.enabled = !ke.enabled),
                                      class: I([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    Hw,
                                  ),
                                  g(
                                    "p",
                                    { class: I(["", i(n.brightness)]) },
                                    [
                                      ke.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (te(),
                                          xe("b", Gw, [
                                            g("em", null, Pt(ke.title), 1),
                                          ]))
                                        : (te(),
                                          xe("span", Vw, Pt(ke.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                g("div", Ww, [
                                  g(
                                    "h3",
                                    {
                                      class: I([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      ke.price !=
                                      Math.floor(ke.price * V.discount)
                                        ? (te(),
                                          xe("span", qw, "$" + Pt(ke.price), 1))
                                        : st("", !0),
                                      Ie("$" + Pt(ke.price * V.discount), 1),
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
          g("hr", { class: I(["my-4 w-full", r(n.brightness)]) }, null, 2),
          g("div", Uw, [
            g("div", Yw, [
              g(
                "h3",
                { class: I(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              g(
                "h3",
                { class: I(["text-4xl text-bold", r(n.brightness)]) },
                [
                  X.value != Math.floor(X.value)
                    ? (te(), xe("span", Kw, "$" + Pt(X.value), 1))
                    : st("", !0),
                  Ie("$" + Pt(X.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          g("form", Xw, [
            g(
              "input",
              { type: "hidden", name: "services", value: Se.value },
              null,
              8,
              Jw,
            ),
            g(
              "input",
              { type: "hidden", name: "total", value: X.value },
              null,
              8,
              Zw,
            ),
            g("div", Qw, [
              g(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: I([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              g(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: I([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            g("div", e3, [
              g(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: I([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              g(
                "textarea",
                {
                  name: "notes",
                  placeholder: "Notes",
                  class: I([
                    "rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            g(
              "button",
              {
                "aria-label": "Submit a contact form",
                id: "submitButton",
                type: "submit",
                class: I([
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
          g(
            "p",
            { class: I(["text-center mt-4", i(n.brightness)]) },
            [
              Ie(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              t3,
              n3,
              Ie(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              g(
                "a",
                { href: "/contact", class: I(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              Ie(" and we can get that figured out."),
              r3,
              s3,
              Ie("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  i3 = vn(a3, [["__scopeId", "data-v-e20b9d11"]]),
  l3 = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        te(), De(i3, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  o3 = { class: "flex-col" },
  u3 = { class: "py-5 flex-col w-full" },
  c3 = { id: "cta" },
  pd = {
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
                let b = p.getElementsByTagName("input")
                for (let E = 0; E < b.length; E++) b[E].style.display = "none"
                let P = p.getElementsByTagName("textarea")[0]
                P.style.display = "none"
                let m = document.getElementById("submitButton")
                m.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        te(),
        xe("div", o3, [
          g("div", u3, [
            g(
              "h2",
              {
                class: I([
                  "text-5xl text-center text-semibold",
                  n(t.brightness),
                ]),
              },
              " Contact Me ",
              2,
            ),
          ]),
          g("form", c3, [
            g(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: I(["rounded p-2 w-full", s.inputClass]),
              },
              null,
              2,
            ),
            g(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Email",
                class: I(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            g(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: I(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            g(
              "button",
              {
                id: "submitButton",
                type: "submit",
                "aria-label": "Submit a contact form",
                onClick: r,
                class: I([
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
  Rt =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  jt = '</title><path d="',
  Ft = '"/></svg>',
  d3 = {
    title: "Blender",
    slug: "blender",
    get svg() {
      return Rt + "Blender" + jt + this.path + Ft
    },
    path: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",
    source: "https://www.blender.org/about/logo",
    hex: "E87D0D",
    guidelines: "https://www.blender.org/about/logo",
  },
  jr = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return Rt + "Bootstrap" + jt + this.path + Ft
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  f3 = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return Rt + "Cloudflare" + jt + this.path + Ft
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  p3 = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return Rt + "Figma" + jt + this.path + Ft
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  h3 = {
    title: "GitHub",
    slug: "github",
    get svg() {
      return Rt + "GitHub" + jt + this.path + Ft
    },
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    source: "https://github.com/logos",
    hex: "181717",
    guidelines: "https://github.com/logos",
  },
  g3 = {
    title: "Instagram",
    slug: "instagram",
    get svg() {
      return Rt + "Instagram" + jt + this.path + Ft
    },
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    source: "https://about.meta.com/brand/resources/instagram",
    hex: "E4405F",
    guidelines: "https://about.meta.com/brand/resources/instagram",
  },
  v3 = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return Rt + "JavaScript" + jt + this.path + Ft
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  m3 = {
    title: "LinkedIn",
    slug: "linkedin",
    get svg() {
      return Rt + "LinkedIn" + jt + this.path + Ft
    },
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    source: "https://brand.linkedin.com",
    hex: "0A66C2",
    guidelines: "https://brand.linkedin.com/policies",
  },
  b3 = {
    title: "NGINX",
    slug: "nginx",
    get svg() {
      return Rt + "NGINX" + jt + this.path + Ft
    },
    path: "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",
    source: "https://www.nginx.com/press/",
    hex: "009639",
    guidelines: "https://www.nginx.com/press/",
  },
  Pu = {
    title: "PHP",
    slug: "php",
    get svg() {
      return Rt + "PHP" + jt + this.path + Ft
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  y3 = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return Rt + "Tailwind CSS" + jt + this.path + Ft
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  $u = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return Rt + "Vue.js" + jt + this.path + Ft
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
  kn = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return Rt + "WordPress" + jt + this.path + Ft
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  Dn = (e) => (es("data-v-280843f2"), (e = e()), ts(), e),
  w3 = { class: "flex-col w-full" },
  x3 = { class: "p-5 flex-col w-full" },
  S3 = { class: "grid grid-cols-6" },
  E3 = { class: "col-span-2 sm:col-span-2 md:col-span-1" },
  _3 = Dn(() =>
    g(
      "div",
      { class: "square-image-container" },
      [
        g("img", {
          class: "rounded pr-4",
          src: "https://images.josephhansen.dev/uploads/fileDSC01942-3.j-1707265732742.webp",
          alt: "Joseph Hansen",
        }),
      ],
      -1,
    ),
  ),
  C3 = { class: "flex gap-2 mt-4 justify-center items-center" },
  T3 = { class: "flex gap-2 mt-4 justify-center items-center" },
  k3 = ["href"],
  P3 = {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "100%",
    height: "100%",
  },
  $3 = ["d"],
  M3 = {
    class: "col-span-4 sm:col-span-4 md:col-span-5 prose pl-5",
    style: { "max-width": "100vw !important" },
  },
  I3 = Dn(() => g("li", null, "a 3D artist and animator", -1)),
  O3 = Dn(() => g("li", null, "a digital and traditional painter", -1)),
  A3 = Dn(() =>
    g(
      "li",
      null,
      " an avid cook who loves discovering new recipes and cuisines (my favorite seasoning: tamarind paste) ",
      -1,
    ),
  ),
  L3 = Dn(() =>
    g(
      "li",
      null,
      " a classically trained pianist and organist (with an infinite love for Rachmaninov, Kabalevsky, and Prokokiev) ",
      -1,
    ),
  ),
  z3 = Dn(() =>
    g(
      "li",
      null,
      " a huge nerd and massive DC fan (favorite fictional characters: Nightwing and Batgirl) ",
      -1,
    ),
  ),
  B3 = Dn(() => g("li", null, "a woodworker and electronic tinkerer", -1)),
  N3 = Dn(() => g("li", null, "and so much more!", -1)),
  R3 = [I3, O3, A3, L3, z3, B3, N3],
  j3 = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (i) => {
          if (i >= 4) return "text-slate-800"
          if (i == 3) return "text-slate-200"
          if (i == 2) return "text-slate-300"
          if (i == 1) return "text-slate-300"
        },
        r = (i) => {
          if (i >= 4) return "text-emerald-500"
          if (i == 3) return "text-orange-600"
          if (i == 2) return "text-orange-500"
          if (i == 1) return "text-orange-400"
        },
        s = [m3, h3, d3, g3],
        a = [
          "https://www.linkedin.com/in/josephclaytonhansen/",
          "https://www.github.com/josephclaytonhansen",
          "https://blenderartists.org/u/joseph/summary",
          "https://www.instagram.com/jhansen_art/",
        ]
      return (i, l) => (
        te(),
        xe("div", w3, [
          g("div", x3, [
            g("div", S3, [
              g("div", E3, [
                _3,
                g("div", C3, [
                  g("div", T3, [
                    (te(),
                    xe(
                      Je,
                      null,
                      fn(s, (o, f) =>
                        g(
                          "div",
                          { key: f, class: I(["flex-1", r(t.brightness)]) },
                          [
                            g(
                              "a",
                              { href: a[f] },
                              [
                                (te(),
                                xe("svg", P3, [
                                  g("path", { d: o.path }, null, 8, $3),
                                ])),
                              ],
                              8,
                              k3,
                            ),
                          ],
                          2,
                        ),
                      ),
                      64,
                    )),
                  ]),
                ]),
              ]),
              g("div", M3, [
                g(
                  "h1",
                  { class: I(["text-5xl font-bold mb-0", n(t.brightness)]) },
                  " Joseph Hansen ",
                  2,
                ),
                g(
                  "h3",
                  { class: I(["text-lg", n(t.brightness)]) },
                  " Professionally... ",
                  2,
                ),
                g(
                  "p",
                  { class: I(n(t.brightness)) },
                  " I'm a full-stack web developer with a Strategic Communications degree (and a Visual Communications minor), training in design, extensive marketing experience, and a decade of web design and development experience. My specialities are WordPress and Vue, and I'm also proficient in Django, Ruby on Rails, React, and a massive slate of CMS platforms (including Drupal, Joomla, Caffeine, Shopify, and others.) ",
                  2,
                ),
                g(
                  "p",
                  { class: I(n(t.brightness)) },
                  " I've worked with every WordPress theme or builder under the sun- Divi, Flatsome, Avada, WP Bakery, Gutenburg, Elementor, and more. I'm experienced in JavaScript, HTML, CSS, PHP, Python, C++, Ruby, and other languages, and I'm passionate about problem-solving through code. ",
                  2,
                ),
                g(
                  "p",
                  { class: I(n(t.brightness)) },
                  " I've been working for marketing agencies for 5 years, and I have extensive freelance experience as well. I've worked with clients in a variety of industries, including healthcare, finance, real estate, and more. I've also worked with a variety of non-profits and educational institutions. ",
                  2,
                ),
                g(
                  "p",
                  { class: I(n(t.brightness)) },
                  " I love problem-solving and I'm passionate about having a good impact. I learn quickly, adapt rapidly, and fit into a team instantaneously. ",
                  2,
                ),
                g(
                  "h3",
                  { class: I(["text-lg", n(t.brightness)]) },
                  " Personally... ",
                  2,
                ),
                g(
                  "p",
                  { class: I(n(t.brightness)) },
                  " If that section above bored you, me too. Luckily, there's a lot more to me than what I do for work. I'd call myself an artist, and that covers a lot of things I'm passionate about and love to do. I'm: ",
                  2,
                ),
                g("ul", { class: I(n(t.brightness)) }, R3, 2),
                g(
                  "p",
                  { class: I(n(t.brightness)) },
                  " I'm also passionate about social justice, advocacy, and equality. I volunteer extensively (including as a crisis counselor for the Trevor Project), spent many years as the assistant director of a regional non-profit organization, and I'm always looking for ways to make the world a better place. ",
                  2,
                ),
                g(
                  "h3",
                  { class: I(["text-lg", n(t.brightness)]) },
                  " That's me! So... what can I do for you? ",
                  2,
                ),
                he(
                  pd,
                  {
                    brightness: e.brightness,
                    style: { "margin-top": "-7rem" },
                  },
                  null,
                  8,
                  ["brightness"],
                ),
              ]),
            ]),
          ]),
        ])
      )
    },
  },
  F3 = vn(j3, [["__scopeId", "data-v-280843f2"]]),
  D3 = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  H3 = { class: "py-5 flex-col w-full" },
  G3 = { class: "prose" },
  V3 = ["onMouseover", "onClick"],
  W3 = { class: "image-container" },
  q3 = ["src", "alt"],
  U3 = { class: "flex gap-2 items-center" },
  Y3 = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  K3 = ["d"],
  X3 = {
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
        s = ne([
          {
            icons: [kn, Pu, p3],
            title: "BlenderNation Bazaar",
            image: Qi,
            link: "/portfolio/bazaar",
          },
          {
            icons: [$u, b3, f3],
            title: "OKC South Stake",
            image: cd,
            link: "/portfolio/okc-south-stake",
          },
        ]),
        a = ne([
          {
            icons: [kn, v3],
            title: "Build On Your Land",
            image: dd,
            link: "/portfolio/build-on-your-land",
          },
          {
            icons: [kn, Pu],
            title: "Stuart Pipe and Hose",
            image: el,
            link: "/portfolio/stuart-pipe",
          },
          {
            icons: [kn, jr],
            title: "Atlanta Floor One",
            image: tl,
            link: "/portfolio/atlanta-floor-one",
          },
          {
            icons: [kn, jr],
            title: "Swim State Pool",
            image: nl,
            link: "/portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [$u, y3],
            image: rl,
            link: "/portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [kn, jr],
            image: sl,
            link: "/portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [kn, jr],
            image: al,
            link: "/portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [kn, jr],
            image: il,
            link: "/portfolio/aris-search",
          },
        ]),
        i = ne(null)
      return (l, o) => (
        te(),
        xe("div", D3, [
          g("div", H3, [
            g("span", G3, [
              g(
                "h2",
                {
                  class: I([
                    "text-5xl text-center text-semibold",
                    n(t.brightness),
                  ]),
                },
                " Web Portfolio ",
                2,
              ),
              g(
                "p",
                { class: I(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. Check out some of my work below! ",
                2,
              ),
              g(
                "h3",
                { class: I(["text-2xl text-center", n(t.brightness)]) },
                " Full Sites (I designed and developed) ",
                2,
              ),
            ]),
          ]),
          (te(!0),
          xe(
            Je,
            null,
            fn(
              [s.value, a.value],
              (f) => (
                te(),
                xe(
                  "div",
                  {
                    class: I([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": f == s.value,
                        "lg:grid-cols-3 mt-4": f == a.value,
                      },
                    ]),
                  },
                  [
                    (te(!0),
                    xe(
                      Je,
                      null,
                      fn(
                        f,
                        (c) => (
                          te(),
                          xe(
                            "div",
                            {
                              class:
                                "flex flex-col justify-end rounded-xl portfolioCard",
                              key: c.title,
                              onMouseover: (p) => (i.value = c.title),
                              onMouseleave:
                                o[0] || (o[0] = (p) => (i.value = null)),
                              onClick: (p) => l.$router.push(c.link),
                              style: Ys({
                                opacity:
                                  i.value === c.title || i.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              g("div", W3, [
                                g(
                                  "img",
                                  {
                                    src: c.image,
                                    alt: c.title,
                                    class:
                                      "bg-slate-200 object-contain w-full rounded-t-xl",
                                  },
                                  null,
                                  8,
                                  q3,
                                ),
                              ]),
                              g("div", null, [
                                g("div", null, [
                                  g(
                                    "div",
                                    {
                                      class: I([
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
                                      g("div", null, [
                                        g(
                                          "h5",
                                          {
                                            class: I([
                                              "text-xl m-0 p-0",
                                              r(t.brightness),
                                            ]),
                                          },
                                          Pt(c.title),
                                          3,
                                        ),
                                      ]),
                                      g("div", U3, [
                                        (te(!0),
                                        xe(
                                          Je,
                                          null,
                                          fn(
                                            c.icons,
                                            (p, v) => (
                                              te(),
                                              xe(
                                                "div",
                                                {
                                                  key: v,
                                                  class: I([
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
                                                  (te(),
                                                  xe("svg", Y3, [
                                                    g(
                                                      "path",
                                                      { d: p.path },
                                                      null,
                                                      8,
                                                      K3,
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
                            V3,
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
  J3 = vn(X3, [["__scopeId", "data-v-2bda4711"]]),
  Z3 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " The vision: a one-stop shop for Blender users ",
    -1,
  ),
  Q3 = g("p", null, "Lorem ipsum", -1),
  ex = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Tight deadlines and high stakes ",
    -1,
  ),
  tx = g("p", null, "Lorem ipsum", -1),
  nx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "From concept to results",
    -1,
  ),
  rx = g("p", null, "Lorem ipsum", -1),
  sx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Security- keeping the Bazaar safe ",
    -1,
  ),
  ax = g("p", null, "Lorem ipsum", -1),
  ix = "https://bazaar.blendernation.com",
  lx = "BlenderNation Bazaar",
  ox = {
    __name: "Bazaar",
    setup(e) {
      const t = ne([Qi, Z2, Q2, ey, ty]),
        n = ne([
          "Bazaar homepage",
          "Bazaar collection page",
          "Bazaar user page",
          "Bazaar search results",
          "Bazaar product listing",
        ])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: ix,
            title: lx,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              sn(r.$slots, "default", {}, () => [
                Z3,
                Q3,
                ex,
                tx,
                nx,
                rx,
                sx,
                ax,
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
  ux = {
    __name: "OkcSouthStake",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  cx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Stark colors + clean white and transparency ",
    -1,
  ),
  dx = g("p", null, "Lorem ipsum", -1),
  fx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Geometric effects",
    -1,
  ),
  px = g("p", null, "Lorem ipsum", -1),
  hx = "https://arissearch.com//",
  gx = "Aris Search",
  vx = {
    __name: "ArisSearch",
    setup(e) {
      const t = ne([il, ay]),
        n = ne(["Aris Search homepage", "Aris Search image effects"])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: hx,
            title: gx,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              sn(r.$slots, "default", {}, () => [cx, dx, fx, px]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  mx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Clean and professional with an unusual color palette ",
    -1,
  ),
  bx = g("p", null, "Lorem ipsum", -1),
  yx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Parallax architectural sketch backgrounds ",
    -1,
  ),
  wx = g("p", null, "Lorem ipsum", -1),
  xx = "https://floorsfloors.com/",
  Sx = "Atlanta Floor One",
  Ex = {
    __name: "AtlantaFloorOne",
    setup(e) {
      const t = ne([tl, ny, ry, sy]),
        n = ne([
          "Atlanta Floors One homepage",
          "Atlanta Floors One testimonial section",
          "Contact page (featuring parallax architectural sketch background)",
          "Atlanta Floors One image section",
        ])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: xx,
            title: Sx,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              sn(r.$slots, "default", {}, () => [mx, bx, yx, wx]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  _x = {
    __name: "BuildOnYourLand",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Cx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Priority: make services and pricing clear and accessible ",
    -1,
  ),
  Tx = g("p", null, "Lorem ipsum", -1),
  kx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Working with a round logo",
    -1,
  ),
  Px = g("p", null, "Lorem ipsum", -1),
  $x = "https://stehlfamilydental.com/",
  Mx = "Stuart Hose and Pipe",
  Ix = {
    __name: "StehlFamilyDental",
    setup(e) {
      const t = ne([al]),
        n = ne(["Stehl Family Dental homepage"])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: $x,
            title: Mx,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              sn(r.$slots, "default", {}, () => [Cx, Tx, kx, Px]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  Ox = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Using design to present minimal text in a compelling way ",
    -1,
  ),
  Ax = g("p", null, "Lorem ipsum", -1),
  Lx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Image comparison sliders",
    -1,
  ),
  zx = g("p", null, "Lorem ipsum", -1),
  Bx = "https://tub-boys.com/",
  Nx = "Tub Boys",
  Rx = {
    __name: "TubBoys",
    setup(e) {
      const t = ne([sl]),
        n = ne(["Tub Boys homepage"])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: Bx,
            title: Nx,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              sn(r.$slots, "default", {}, () => [Ox, Ax, Lx, zx]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  jx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Extremely precise design requirements ",
    -1,
  ),
  Fx = g("p", null, "Lorem ipsum", -1),
  Dx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Maximizing information while avoiding clutter ",
    -1,
  ),
  Hx = g("p", null, "Lorem ipsum", -1),
  Gx = "https://stuarthose.com/",
  Vx = "Stuart Hose and Pipe",
  Wx = {
    __name: "StuartPipeAndHose",
    setup(e) {
      const t = ne([el]),
        n = ne(["Stuart Hose and Pipe homepage"])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: Gx,
            title: Vx,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              sn(r.$slots, "default", {}, () => [jx, Fx, Dx, Hx]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  qx = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Iterative design",
    -1,
  ),
  Ux = g("p", null, "Lorem ipsum", -1),
  Yx = "https://swimstatepoolservice.com/",
  Kx = "Swim State Pool",
  Xx = {
    __name: "SwimStatePool",
    setup(e) {
      const t = ne([nl]),
        n = ne(["Swim State Pool Services homepage"])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: Yx,
            title: Kx,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [sn(r.$slots, "default", {}, () => [qx, Ux])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  Jx = g("h3", { class: "text-2xl font-bold text-inherit" }, "Lorem ipsum", -1),
  Zx = g("p", null, "Lorem ipsum", -1),
  Qx = "/",
  e5 = "josephhansen.dev",
  t5 = {
    __name: "JosephHansenDev",
    setup(e) {
      const t = ne([rl]),
        n = ne(["This site's homepage"])
      return (r, s) => (
        te(),
        De(
          bn,
          {
            images: t.value,
            captions: n.value,
            link: Qx,
            title: e5,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [sn(r.$slots, "default", {}, () => [Jx, Zx])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  n5 = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  r5 = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  s5 = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = ne(1),
        n = e,
        r = (l) => {
          ;(t.value = Number(l)),
            window.localStorage.setItem("brightness", t.value)
        },
        s = {
          "okc-south-stake": ux,
          "aris-search": vx,
          "atlanta-floor-one": Ex,
          "build-on-your-land": _x,
          "stehl-family-dental": Ix,
          "tub-boys": Rx,
          "stuart-pipe": Wx,
          "swim-state-pool": Xx,
          "josephhansen-dev": t5,
          bazaar: ox,
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
      yt(() => {
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
      const i = Qr({
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
        hn(() => {
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
          te(),
          xe(
            Je,
            null,
            [
              g(
                "main",
                {
                  class: I([["w-dvw", a.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  he(J1, { "onUpdate:brightness": r }),
                  g("div", n5, [
                    e.component == "pricing"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 0,
                            class: I([
                              "w-full md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center",
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
                            he(l3, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component == "contact"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 1,
                            class: I([
                              "w-full md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center",
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
                            he(pd, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component == "portfolio"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 2,
                            class: I([
                              "w-full md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center",
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
                            he(J3, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component == "about-me"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 3,
                            class: I([
                              "w-full md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center",
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
                            he(F3, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component in s
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 4,
                            class: I([
                              "w-full md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center",
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
                            (te(),
                            De(
                              lg(s[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component == "home"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 5,
                            class: I([
                              "w-full md:w-10/12 sm:w-12/12 rounded p-3",
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
                            he(ab, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                  ]),
                  g("div", r5, [
                    e.component == "home"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 0,
                            class: I([
                              "w-full md:w-10/12 sm:w-12/12 rounded p-3",
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
                            he(Pw, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                  ]),
                ],
                2,
              ),
              he(Mw, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  a5 = vn(s5, [["__scopeId", "data-v-7c607880"]]),
  ol = [
    { path: "/", component: null, props: { component: "home" } },
    { path: "/pricing", component: null, props: { component: "pricing" } },
    { path: "/contact", component: null, props: { component: "contact" } },
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
    {
      path: "/portfolio/josephhansen-dev",
      component: null,
      props: { component: "josephhansen-dev" },
    },
  ]
ol.map((e) => e.path)
ol.forEach((e) => {
  e.component = a5
})
const i5 = o1({ history: _m(), routes: ol }),
  hd = _v($v)
hd.use(i5)
hd.mount("#app")
