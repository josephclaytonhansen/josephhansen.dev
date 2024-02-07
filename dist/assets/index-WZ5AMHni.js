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
function _i(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const et = {},
  gr = [],
  jt = () => {},
  d0 = () => !1,
  Ds = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ci = (e) => e.startsWith("onUpdate:"),
  bt = Object.assign,
  Ti = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  f0 = Object.prototype.hasOwnProperty,
  Ne = (e, t) => f0.call(e, t),
  _e = Array.isArray,
  vr = (e) => Hs(e) === "[object Map]",
  $u = (e) => Hs(e) === "[object Set]",
  Te = (e) => typeof e == "function",
  ot = (e) => typeof e == "string",
  Cr = (e) => typeof e == "symbol",
  rt = (e) => e !== null && typeof e == "object",
  Mu = (e) => (rt(e) || Te(e)) && Te(e.then) && Te(e.catch),
  Iu = Object.prototype.toString,
  Hs = (e) => Iu.call(e),
  p0 = (e) => Hs(e).slice(8, -1),
  Ou = (e) => Hs(e) === "[object Object]",
  Pi = (e) =>
    ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ss = _i(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Gs = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  h0 = /-(\w)/g,
  en = Gs((e) => e.replace(h0, (t, n) => (n ? n.toUpperCase() : ""))),
  g0 = /\B([A-Z])/g,
  Tr = Gs((e) => e.replace(g0, "-$1").toLowerCase()),
  Vs = Gs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  za = Gs((e) => (e ? `on${Vs(e)}` : "")),
  zn = (e, t) => !Object.is(e, t),
  Es = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  $s = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ti = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let xo
const Au = () =>
  xo ||
  (xo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function Ws(e) {
  if (_e(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ot(r) ? y0(r) : Ws(r)
      if (s) for (const a in s) t[a] = s[a]
    }
    return t
  } else if (ot(e) || rt(e)) return e
}
const v0 = /;(?![^(]*\))/g,
  m0 = /:([^]+)/,
  b0 = /\/\*[^]*?\*\//g
function y0(e) {
  const t = {}
  return (
    e
      .replace(b0, "")
      .split(v0)
      .forEach((n) => {
        if (n) {
          const r = n.split(m0)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function A(e) {
  let t = ""
  if (ot(e)) t = e
  else if (_e(e))
    for (let n = 0; n < e.length; n++) {
      const r = A(e[n])
      r && (t += r + " ")
    }
  else if (rt(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const w0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  x0 = _i(w0)
function Lu(e) {
  return !!e || e === ""
}
const kt = (e) =>
    ot(e)
      ? e
      : e == null
        ? ""
        : _e(e) || (rt(e) && (e.toString === Iu || !Te(e.toString)))
          ? JSON.stringify(e, zu, 2)
          : String(e),
  zu = (e, t) =>
    t && t.__v_isRef
      ? zu(e, t.value)
      : vr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], a) => ((n[Ba(r, a) + " =>"] = s), n),
              {},
            ),
          }
        : $u(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ba(n)) }
          : Cr(t)
            ? Ba(t)
            : rt(t) && !_e(t) && !Ou(t)
              ? String(t)
              : t,
  Ba = (e, t = "") => {
    var n
    return Cr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let Vt
class S0 {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Vt),
      !t && Vt && (this.index = (Vt.scopes || (Vt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Vt
      try {
        return (Vt = this), t()
      } finally {
        Vt = n
      }
    }
  }
  on() {
    Vt = this
  }
  off() {
    Vt = this.parent
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
function E0(e, t = Vt) {
  t && t.active && t.effects.push(e)
}
function _0() {
  return Vt
}
let Un
class ki {
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
      E0(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Zn()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (C0(n.computed), this._dirtyLevel >= 2)) break
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Qn()
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = In,
      n = Un
    try {
      return (In = !0), (Un = this), this._runnings++, So(this), this.fn()
    } finally {
      Eo(this), this._runnings--, (Un = n), (In = t)
    }
  }
  stop() {
    var t
    this.active &&
      (So(this),
      Eo(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function C0(e) {
  return e.value
}
function So(e) {
  e._trackId++, (e._depsLength = 0)
}
function Eo(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Bu(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Bu(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let In = !0,
  ni = 0
const Nu = []
function Zn() {
  Nu.push(In), (In = !1)
}
function Qn() {
  const e = Nu.pop()
  In = e === void 0 ? !0 : e
}
function $i() {
  ni++
}
function Mi() {
  for (ni--; !ni && ri.length; ) ri.shift()()
}
function Ru(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Bu(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const ri = []
function ju(e, t, n) {
  $i()
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel
      ;(r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger())
    }
  Fu(e), Mi()
}
function Fu(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), ri.push(t.scheduler))
}
const Du = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  si = new WeakMap(),
  Yn = Symbol(""),
  ai = Symbol("")
function $t(e, t, n) {
  if (In && Un) {
    let r = si.get(e)
    r || si.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = Du(() => r.delete(n)))), Ru(Un, s)
  }
}
function on(e, t, n, r, s, a) {
  const i = si.get(e)
  if (!i) return
  let l = []
  if (t === "clear") l = [...i.values()]
  else if (n === "length" && _e(e)) {
    const o = Number(r)
    i.forEach((f, c) => {
      ;(c === "length" || (!Cr(c) && c >= o)) && l.push(f)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        _e(e)
          ? Pi(n) && l.push(i.get("length"))
          : (l.push(i.get(Yn)), vr(e) && l.push(i.get(ai)))
        break
      case "delete":
        _e(e) || (l.push(i.get(Yn)), vr(e) && l.push(i.get(ai)))
        break
      case "set":
        vr(e) && l.push(i.get(Yn))
        break
    }
  $i()
  for (const o of l) o && ju(o, 2)
  Mi()
}
const T0 = _i("__proto__,__v_isRef,__isVue"),
  Hu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Cr),
  ),
  _o = P0()
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
        Zn(), $i()
        const r = He(this)[t].apply(this, n)
        return Mi(), Qn(), r
      }
    }),
    e
  )
}
function k0(e) {
  const t = He(this)
  return $t(t, "has", e), t.hasOwnProperty(e)
}
class Gu {
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
      return r === (s ? (a ? D0 : Uu) : a ? qu : Wu).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = _e(t)
    if (!s) {
      if (i && Ne(_o, n)) return Reflect.get(_o, n, r)
      if (n === "hasOwnProperty") return k0
    }
    const l = Reflect.get(t, n, r)
    return (Cr(n) ? Hu.has(n) : T0(n)) || (s || $t(t, "get", n), a)
      ? l
      : St(l)
        ? i && Pi(n)
          ? l
          : l.value
        : rt(l)
          ? s
            ? Ku(l)
            : Zr(l)
          : l
  }
}
class Vu extends Gu {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let a = t[n]
    if (!this._shallow) {
      const o = wr(a)
      if (
        (!Ms(r) && !wr(r) && ((a = He(a)), (r = He(r))),
        !_e(t) && St(a) && !St(r))
      )
        return o ? !1 : ((a.value = r), !0)
    }
    const i = _e(t) && Pi(n) ? Number(n) < t.length : Ne(t, n),
      l = Reflect.set(t, n, r, s)
    return (
      t === He(s) && (i ? zn(r, a) && on(t, "set", n, r) : on(t, "add", n, r)),
      l
    )
  }
  deleteProperty(t, n) {
    const r = Ne(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && on(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!Cr(n) || !Hu.has(n)) && $t(t, "has", n), r
  }
  ownKeys(t) {
    return $t(t, "iterate", _e(t) ? "length" : Yn), Reflect.ownKeys(t)
  }
}
class $0 extends Gu {
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
const M0 = new Vu(),
  I0 = new $0(),
  O0 = new Vu(!0),
  Ii = (e) => e,
  qs = (e) => Reflect.getPrototypeOf(e)
function fs(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = He(e),
    a = He(t)
  n || (zn(t, a) && $t(s, "get", t), $t(s, "get", a))
  const { has: i } = qs(s),
    l = r ? Ii : n ? Li : Wr
  if (i.call(s, t)) return l(e.get(t))
  if (i.call(s, a)) return l(e.get(a))
  e !== s && e.get(t)
}
function ps(e, t = !1) {
  const n = this.__v_raw,
    r = He(n),
    s = He(e)
  return (
    t || (zn(e, s) && $t(r, "has", e), $t(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function hs(e, t = !1) {
  return (
    (e = e.__v_raw), !t && $t(He(e), "iterate", Yn), Reflect.get(e, "size", e)
  )
}
function Co(e) {
  e = He(e)
  const t = He(this)
  return qs(t).has.call(t, e) || (t.add(e), on(t, "add", e, e)), this
}
function To(e, t) {
  t = He(t)
  const n = He(this),
    { has: r, get: s } = qs(n)
  let a = r.call(n, e)
  a || ((e = He(e)), (a = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), a ? zn(t, i) && on(n, "set", e, t) : on(n, "add", e, t), this
  )
}
function Po(e) {
  const t = He(this),
    { has: n, get: r } = qs(t)
  let s = n.call(t, e)
  s || ((e = He(e)), (s = n.call(t, e))), r && r.call(t, e)
  const a = t.delete(e)
  return s && on(t, "delete", e, void 0), a
}
function ko() {
  const e = He(this),
    t = e.size !== 0,
    n = e.clear()
  return t && on(e, "clear", void 0, void 0), n
}
function gs(e, t) {
  return function (r, s) {
    const a = this,
      i = a.__v_raw,
      l = He(i),
      o = t ? Ii : e ? Li : Wr
    return (
      !e && $t(l, "iterate", Yn), i.forEach((f, c) => r.call(s, o(f), o(c), a))
    )
  }
}
function vs(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      a = He(s),
      i = vr(a),
      l = e === "entries" || (e === Symbol.iterator && i),
      o = e === "keys" && i,
      f = s[e](...r),
      c = n ? Ii : t ? Li : Wr
    return (
      !t && $t(a, "iterate", o ? ai : Yn),
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
function A0() {
  const e = {
      get(a) {
        return fs(this, a)
      },
      get size() {
        return hs(this)
      },
      has: ps,
      add: Co,
      set: To,
      delete: Po,
      clear: ko,
      forEach: gs(!1, !1),
    },
    t = {
      get(a) {
        return fs(this, a, !1, !0)
      },
      get size() {
        return hs(this)
      },
      has: ps,
      add: Co,
      set: To,
      delete: Po,
      clear: ko,
      forEach: gs(!1, !0),
    },
    n = {
      get(a) {
        return fs(this, a, !0)
      },
      get size() {
        return hs(this, !0)
      },
      has(a) {
        return ps.call(this, a, !0)
      },
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear"),
      forEach: gs(!0, !1),
    },
    r = {
      get(a) {
        return fs(this, a, !0, !0)
      },
      get size() {
        return hs(this, !0)
      },
      has(a) {
        return ps.call(this, a, !0)
      },
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear"),
      forEach: gs(!0, !0),
    }
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      ;(e[a] = vs(a, !1, !1)),
        (n[a] = vs(a, !0, !1)),
        (t[a] = vs(a, !1, !0)),
        (r[a] = vs(a, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [L0, z0, B0, N0] = A0()
function Oi(e, t) {
  const n = t ? (e ? N0 : B0) : e ? z0 : L0
  return (r, s, a) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Ne(n, s) && s in r ? n : r, s, a)
}
const R0 = { get: Oi(!1, !1) },
  j0 = { get: Oi(!1, !0) },
  F0 = { get: Oi(!0, !1) },
  Wu = new WeakMap(),
  qu = new WeakMap(),
  Uu = new WeakMap(),
  D0 = new WeakMap()
function H0(e) {
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
function G0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : H0(p0(e))
}
function Zr(e) {
  return wr(e) ? e : Ai(e, !1, M0, R0, Wu)
}
function Yu(e) {
  return Ai(e, !1, O0, j0, qu)
}
function Ku(e) {
  return Ai(e, !0, I0, F0, Uu)
}
function Ai(e, t, n, r, s) {
  if (!rt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const a = s.get(e)
  if (a) return a
  const i = G0(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? r : n)
  return s.set(e, l), l
}
function mr(e) {
  return wr(e) ? mr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function wr(e) {
  return !!(e && e.__v_isReadonly)
}
function Ms(e) {
  return !!(e && e.__v_isShallow)
}
function Xu(e) {
  return mr(e) || wr(e)
}
function He(e) {
  const t = e && e.__v_raw
  return t ? He(t) : e
}
function Ju(e) {
  return $s(e, "__v_skip", !0), e
}
const Wr = (e) => (rt(e) ? Zr(e) : e),
  Li = (e) => (rt(e) ? Ku(e) : e)
class Zu {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ki(
        () => t(this._value),
        () => _s(this, 1),
        () => this.dep && Fu(this.dep),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = He(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        zn(t._value, (t._value = t.effect.run())) &&
        _s(t, 2),
      Qu(t),
      t.effect._dirtyLevel >= 1 && _s(t, 1),
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
function V0(e, t, n = !1) {
  let r, s
  const a = Te(e)
  return (
    a ? ((r = e), (s = jt)) : ((r = e.get), (s = e.set)),
    new Zu(r, s, a || !s, n)
  )
}
function Qu(e) {
  In &&
    Un &&
    ((e = He(e)),
    Ru(
      Un,
      e.dep ||
        (e.dep = Du(() => (e.dep = void 0), e instanceof Zu ? e : void 0)),
    ))
}
function _s(e, t = 2, n) {
  e = He(e)
  const r = e.dep
  r && ju(r, t)
}
function St(e) {
  return !!(e && e.__v_isRef === !0)
}
function te(e) {
  return ec(e, !1)
}
function W0(e) {
  return ec(e, !0)
}
function ec(e, t) {
  return St(e) ? e : new q0(e, t)
}
class q0 {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : He(t)),
      (this._value = n ? t : Wr(t))
  }
  get value() {
    return Qu(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Ms(t) || wr(t)
    ;(t = n ? t : He(t)),
      zn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Wr(t)), _s(this, 2))
  }
}
function we(e) {
  return St(e) ? e.value : e
}
const U0 = {
  get: (e, t, n) => we(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return St(s) && !St(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function tc(e) {
  return mr(e) ? e : new Proxy(e, U0)
}
function On(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (a) {
    Us(a, t, n)
  }
  return s
}
function qt(e, t, n, r) {
  if (Te(e)) {
    const a = On(e, t, n, r)
    return (
      a &&
        Mu(a) &&
        a.catch((i) => {
          Us(i, t, n)
        }),
      a
    )
  }
  const s = []
  for (let a = 0; a < e.length; a++) s.push(qt(e[a], t, n, r))
  return s
}
function Us(e, t, n, r = !0) {
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
  Y0(e, n, s, r)
}
function Y0(e, t, n, r = !0) {
  console.error(e)
}
let qr = !1,
  ii = !1
const wt = []
let Jt = 0
const br = []
let Cn = null,
  Wn = 0
const nc = Promise.resolve()
let zi = null
function Ys(e) {
  const t = zi || nc
  return e ? t.then(this ? e.bind(this) : e) : t
}
function K0(e) {
  let t = Jt + 1,
    n = wt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = wt[r],
      a = Ur(s)
    a < e || (a === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function Bi(e) {
  ;(!wt.length || !wt.includes(e, qr && e.allowRecurse ? Jt + 1 : Jt)) &&
    (e.id == null ? wt.push(e) : wt.splice(K0(e.id), 0, e), rc())
}
function rc() {
  !qr && !ii && ((ii = !0), (zi = nc.then(ac)))
}
function X0(e) {
  const t = wt.indexOf(e)
  t > Jt && wt.splice(t, 1)
}
function J0(e) {
  _e(e)
    ? br.push(...e)
    : (!Cn || !Cn.includes(e, e.allowRecurse ? Wn + 1 : Wn)) && br.push(e),
    rc()
}
function $o(e, t, n = qr ? Jt + 1 : 0) {
  for (; n < wt.length; n++) {
    const r = wt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      wt.splice(n, 1), n--, r()
    }
  }
}
function sc(e) {
  if (br.length) {
    const t = [...new Set(br)].sort((n, r) => Ur(n) - Ur(r))
    if (((br.length = 0), Cn)) {
      Cn.push(...t)
      return
    }
    for (Cn = t, Wn = 0; Wn < Cn.length; Wn++) Cn[Wn]()
    ;(Cn = null), (Wn = 0)
  }
}
const Ur = (e) => (e.id == null ? 1 / 0 : e.id),
  Z0 = (e, t) => {
    const n = Ur(e) - Ur(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function ac(e) {
  ;(ii = !1), (qr = !0), wt.sort(Z0)
  try {
    for (Jt = 0; Jt < wt.length; Jt++) {
      const t = wt[Jt]
      t && t.active !== !1 && On(t, null, 14)
    }
  } finally {
    ;(Jt = 0),
      (wt.length = 0),
      sc(),
      (qr = !1),
      (zi = null),
      (wt.length || br.length) && ac()
  }
}
function Q0(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || et
  let s = n
  const a = t.startsWith("update:"),
    i = a && t.slice(7)
  if (i && i in r) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: g } = r[c] || et
    g && (s = n.map((b) => (ot(b) ? b.trim() : b))), p && (s = n.map(ti))
  }
  let l,
    o = r[(l = za(t))] || r[(l = za(en(t)))]
  !o && a && (o = r[(l = za(Tr(t)))]), o && qt(o, e, 6, s)
  const f = r[l + "Once"]
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), qt(f, e, 6, s)
  }
}
function ic(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const a = e.emits
  let i = {},
    l = !1
  if (!Te(e)) {
    const o = (f) => {
      const c = ic(f, t, !0)
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
function Ks(e, t) {
  return !e || !Ds(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Ne(e, t[0].toLowerCase() + t.slice(1)) || Ne(e, Tr(t)) || Ne(e, t))
}
let pt = null,
  Xs = null
function Is(e) {
  const t = pt
  return (pt = e), (Xs = (e && e.type.__scopeId) || null), t
}
function Js(e) {
  Xs = e
}
function Zs() {
  Xs = null
}
function Xe(e, t = pt, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Fo(-1)
    const a = Is(t)
    let i
    try {
      i = e(...s)
    } finally {
      Is(a), r._d && Fo(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Na(e) {
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
    setupState: b,
    ctx: k,
    inheritAttrs: m,
  } = e
  let E, T
  const x = Is(e)
  try {
    if (n.shapeFlag & 4) {
      const M = s || r,
        z = M
      ;(E = Xt(c.call(z, M, p, a, b, g, k))), (T = o)
    } else {
      const M = t
      ;(E = Xt(
        M.length > 1 ? M(a, { attrs: o, slots: l, emit: f }) : M(a, null),
      )),
        (T = t.props ? o : eg(o))
    }
  } catch (M) {
    ;(Hr.length = 0), Us(M, e, 1), (E = he(Bn))
  }
  let w = E
  if (T && m !== !1) {
    const M = Object.keys(T),
      { shapeFlag: z } = w
    M.length && z & 7 && (i && M.some(Ci) && (T = tg(T, i)), (w = Xn(w, T)))
  }
  return (
    n.dirs && ((w = Xn(w)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (w.transition = n.transition),
    (E = w),
    Is(x),
    E
  )
}
const eg = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || Ds(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  tg = (e, t) => {
    const n = {}
    for (const r in e) (!Ci(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function ng(e, t, n) {
  const { props: r, children: s, component: a } = e,
    { props: i, children: l, patchFlag: o } = t,
    f = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return r ? Mo(r, i, f) : !!i
    if (o & 8) {
      const c = t.dynamicProps
      for (let p = 0; p < c.length; p++) {
        const g = c[p]
        if (i[g] !== r[g] && !Ks(f, g)) return !0
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === i
        ? !1
        : r
          ? i
            ? Mo(r, i, f)
            : !0
          : !!i
  return !1
}
function Mo(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const a = r[s]
    if (t[a] !== e[a] && !Ks(n, a)) return !0
  }
  return !1
}
function rg({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ni = "components",
  sg = "directives"
function lc(e, t) {
  return Ri(Ni, e, !0, t) || e
}
const oc = Symbol.for("v-ndc")
function ag(e) {
  return ot(e) ? Ri(Ni, e, !1) || e : e || oc
}
function ig(e) {
  return Ri(sg, e)
}
function Ri(e, t, n = !0, r = !1) {
  const s = pt || xt
  if (s) {
    const a = s.type
    if (e === Ni) {
      const l = Kg(a, !1)
      if (l && (l === t || l === en(t) || l === Vs(en(t)))) return a
    }
    const i = Io(s[e] || a[e], t) || Io(s.appContext[e], t)
    return !i && r ? a : i
  }
}
function Io(e, t) {
  return e && (e[t] || e[en(t)] || e[Vs(en(t))])
}
const lg = (e) => e.__isSuspense
function og(e, t) {
  t && t.pendingBranch
    ? _e(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : J0(e)
}
const ug = Symbol.for("v-scx"),
  cg = () => ht(ug)
function cn(e, t) {
  return ji(e, null, t)
}
const ms = {}
function An(e, t, n) {
  return ji(e, t, n)
}
function ji(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: a, onTrack: i, onTrigger: l } = et,
) {
  if (t && a) {
    const I = t
    t = (...re) => {
      I(...re), z()
    }
  }
  const o = xt,
    f = (I) => (r === !0 ? I : qn(I, r === !1 ? 1 : void 0))
  let c,
    p = !1,
    g = !1
  if (
    (St(e)
      ? ((c = () => e.value), (p = Ms(e)))
      : mr(e)
        ? ((c = () => f(e)), (p = !0))
        : _e(e)
          ? ((g = !0),
            (p = e.some((I) => mr(I) || Ms(I))),
            (c = () =>
              e.map((I) => {
                if (St(I)) return I.value
                if (mr(I)) return f(I)
                if (Te(I)) return On(I, o, 2)
              })))
          : Te(e)
            ? t
              ? (c = () => On(e, o, 2))
              : (c = () => (b && b(), qt(e, o, 3, [k])))
            : (c = jt),
    t && r)
  ) {
    const I = c
    c = () => qn(I())
  }
  let b,
    k = (I) => {
      b = w.onStop = () => {
        On(I, o, 4), (b = w.onStop = void 0)
      }
    },
    m
  if (na)
    if (
      ((k = jt),
      t ? n && qt(t, o, 3, [c(), g ? [] : void 0, k]) : c(),
      s === "sync")
    ) {
      const I = cg()
      m = I.__watcherHandles || (I.__watcherHandles = [])
    } else return jt
  let E = g ? new Array(e.length).fill(ms) : ms
  const T = () => {
    if (!(!w.active || !w.dirty))
      if (t) {
        const I = w.run()
        ;(r || p || (g ? I.some((re, q) => zn(re, E[q])) : zn(I, E))) &&
          (b && b(),
          qt(t, o, 3, [I, E === ms ? void 0 : g && E[0] === ms ? [] : E, k]),
          (E = I))
      } else w.run()
  }
  T.allowRecurse = !!t
  let x
  s === "sync"
    ? (x = T)
    : s === "post"
      ? (x = () => Pt(T, o && o.suspense))
      : ((T.pre = !0), o && (T.id = o.uid), (x = () => Bi(T)))
  const w = new ki(c, jt, x),
    M = _0(),
    z = () => {
      w.stop(), M && Ti(M.effects, w)
    }
  return (
    t
      ? n
        ? T()
        : (E = w.run())
      : s === "post"
        ? Pt(w.run.bind(w), o && o.suspense)
        : w.run(),
    m && m.push(z),
    z
  )
}
function dg(e, t, n) {
  const r = this.proxy,
    s = ot(e) ? (e.includes(".") ? uc(r, e) : () => r[e]) : e.bind(r, r)
  let a
  Te(t) ? (a = t) : ((a = t.handler), (n = t))
  const i = Qr(this),
    l = ji(s, a.bind(r), n)
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
function qn(e, t, n = 0, r) {
  if (!rt(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((r = r || new Set()), r.has(e))) return e
  if ((r.add(e), St(e))) qn(e.value, t, n, r)
  else if (_e(e)) for (let s = 0; s < e.length; s++) qn(e[s], t, n, r)
  else if ($u(e) || vr(e))
    e.forEach((s) => {
      qn(s, t, n, r)
    })
  else if (Ou(e)) for (const s in e) qn(e[s], t, n, r)
  return e
}
function cc(e, t) {
  if (pt === null) return e
  const n = ra(pt) || pt.proxy,
    r = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [a, i, l, o = et] = t[s]
    a &&
      (Te(a) && (a = { mounted: a, updated: a }),
      a.deep && qn(i),
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
function Gn(e, t, n, r) {
  const s = e.dirs,
    a = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const l = s[i]
    a && (l.oldValue = a[i].value)
    let o = l.dir[r]
    o && (Zn(), qt(o, n, 8, [e.el, l, e, t]), Qn())
  }
}
function Bt(e, t) {
  return Te(e) ? bt({ name: e.name }, t, { setup: e }) : e
}
const Fr = (e) => !!e.type.__asyncLoader,
  dc = (e) => e.type.__isKeepAlive
function fg(e, t) {
  fc(e, "a", t)
}
function pg(e, t) {
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
  if ((Qs(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) dc(s.parent.vnode) && hg(r, t, n, s), (s = s.parent)
  }
}
function hg(e, t, n, r) {
  const s = Qs(t, e, r, !0)
  Nn(() => {
    Ti(r[t], s)
  }, n)
}
function Qs(e, t, n = xt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          Zn()
          const l = Qr(n),
            o = qt(t, n, e, i)
          return l(), Qn(), o
        })
    return r ? s.unshift(a) : s.push(a), a
  }
}
const dn =
    (e) =>
    (t, n = xt) =>
      (!na || e === "sp") && Qs(e, (...r) => t(...r), n),
  gg = dn("bm"),
  yt = dn("m"),
  Fi = dn("bu"),
  Di = dn("u"),
  Hi = dn("bum"),
  Nn = dn("um"),
  vg = dn("sp"),
  mg = dn("rtg"),
  bg = dn("rtc")
function yg(e, t = xt) {
  Qs("ec", e, t)
}
function Ln(e, t, n, r) {
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
function tn(e, t, n = {}, r, s) {
  if (pt.isCE || (pt.parent && Fr(pt.parent) && pt.parent.isCE))
    return t !== "default" && (n.name = t), he("slot", n, r && r())
  let a = e[t]
  a && a._c && (a._d = !1), se()
  const i = a && pc(a(n)),
    l = De(
      Qe,
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
    Ls(t) ? !(t.type === Bn || (t.type === Qe && !pc(t.children))) : !0,
  )
    ? e
    : null
}
const li = (e) => (e ? (Tc(e) ? ra(e) || e.proxy : li(e.parent)) : null),
  Dr = bt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => li(e.parent),
    $root: (e) => li(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Gi(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Bi(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Ys.bind(e.proxy)),
    $watch: (e) => dg.bind(e),
  }),
  Ra = (e, t) => e !== et && !e.__isScriptSetup && Ne(e, t),
  wg = {
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
          if (Ra(r, t)) return (i[t] = 1), r[t]
          if (s !== et && Ne(s, t)) return (i[t] = 2), s[t]
          if ((f = e.propsOptions[0]) && Ne(f, t)) return (i[t] = 3), a[t]
          if (n !== et && Ne(n, t)) return (i[t] = 4), n[t]
          oi && (i[t] = 0)
        }
      }
      const c = Dr[t]
      let p, g
      if (c) return t === "$attrs" && $t(e, "get", t), c(e)
      if ((p = l.__cssModules) && (p = p[t])) return p
      if (n !== et && Ne(n, t)) return (i[t] = 4), n[t]
      if (((g = o.config.globalProperties), Ne(g, t))) return g[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: a } = e
      return Ra(s, t)
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
        Ra(t, i) ||
        ((l = a[0]) && Ne(l, i)) ||
        Ne(r, i) ||
        Ne(Dr, i) ||
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
function Oo(e) {
  return _e(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let oi = !0
function xg(e) {
  const t = Gi(e),
    n = e.proxy,
    r = e.ctx
  ;(oi = !1), t.beforeCreate && Ao(t.beforeCreate, e, "bc")
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
    beforeUpdate: b,
    updated: k,
    activated: m,
    deactivated: E,
    beforeDestroy: T,
    beforeUnmount: x,
    destroyed: w,
    unmounted: M,
    render: z,
    renderTracked: I,
    renderTriggered: re,
    errorCaptured: q,
    serverPrefetch: G,
    expose: D,
    inheritAttrs: Q,
    components: ge,
    directives: X,
    filters: xe,
  } = t
  if ((f && Sg(f, r, null), i))
    for (const oe in i) {
      const V = i[oe]
      Te(V) && (r[oe] = V.bind(n))
    }
  if (s) {
    const oe = s.call(n, n)
    rt(oe) && (e.data = Zr(oe))
  }
  if (((oi = !0), a))
    for (const oe in a) {
      const V = a[oe],
        Ye = Te(V) ? V.bind(n, n) : Te(V.get) ? V.get.bind(n, n) : jt,
        Pe = !Te(V) && Te(V.set) ? V.set.bind(n) : jt,
        tt = me({ get: Ye, set: Pe })
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
      Ft(V, oe[V])
    })
  }
  c && Ao(c, e, "c")
  function F(oe, V) {
    _e(V) ? V.forEach((Ye) => oe(Ye.bind(n))) : V && oe(V.bind(n))
  }
  if (
    (F(gg, p),
    F(yt, g),
    F(Fi, b),
    F(Di, k),
    F(fg, m),
    F(pg, E),
    F(yg, q),
    F(bg, I),
    F(mg, re),
    F(Hi, x),
    F(Nn, M),
    F(vg, G),
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
  z && e.render === jt && (e.render = z),
    Q != null && (e.inheritAttrs = Q),
    ge && (e.components = ge),
    X && (e.directives = X)
}
function Sg(e, t, n = jt) {
  _e(e) && (e = ui(e))
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
function Ao(e, t, n) {
  qt(_e(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function hc(e, t, n, r) {
  const s = r.includes(".") ? uc(n, r) : () => n[r]
  if (ot(e)) {
    const a = t[e]
    Te(a) && An(s, a)
  } else if (Te(e)) An(s, e.bind(n))
  else if (rt(e))
    if (_e(e)) e.forEach((a) => hc(a, t, n, r))
    else {
      const a = Te(e.handler) ? e.handler.bind(n) : t[e.handler]
      Te(a) && An(s, a, e)
    }
}
function Gi(e) {
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
          s.length && s.forEach((f) => Os(o, f, i, !0)),
          Os(o, t, i)),
    rt(t) && a.set(t, o),
    o
  )
}
function Os(e, t, n, r = !1) {
  const { mixins: s, extends: a } = t
  a && Os(e, a, n, !0), s && s.forEach((i) => Os(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const l = Eg[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const Eg = {
  data: Lo,
  props: zo,
  emits: zo,
  methods: jr,
  computed: jr,
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
  components: jr,
  directives: jr,
  watch: Cg,
  provide: Lo,
  inject: _g,
}
function Lo(e, t) {
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
function _g(e, t) {
  return jr(ui(e), ui(t))
}
function ui(e) {
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
function jr(e, t) {
  return e ? bt(Object.create(null), e, t) : t
}
function zo(e, t) {
  return e
    ? _e(e) && _e(t)
      ? [...new Set([...e, ...t])]
      : bt(Object.create(null), Oo(e), Oo(t ?? {}))
    : t
}
function Cg(e, t) {
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
      isNativeTag: d0,
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
let Tg = 0
function Pg(e, t) {
  return function (r, s = null) {
    Te(r) || (r = bt({}, r)), s != null && !rt(s) && (s = null)
    const a = gc(),
      i = new WeakSet()
    let l = !1
    const o = (a.app = {
      _uid: Tg++,
      _component: r,
      _props: s,
      _container: null,
      _context: a,
      _instance: null,
      version: Jg,
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
          const g = he(r, s)
          return (
            (g.appContext = a),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            c && t ? t(g, f) : e(g, f, p),
            (l = !0),
            (o._container = f),
            (f.__vue_app__ = o),
            ra(g.component) || g.component.proxy
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
        As = o
        try {
          return f()
        } finally {
          As = null
        }
      },
    })
    return o
  }
}
let As = null
function Ft(e, t) {
  if (xt) {
    let n = xt.provides
    const r = xt.parent && xt.parent.provides
    r === n && (n = xt.provides = Object.create(r)), (n[e] = t)
  }
}
function ht(e, t, n = !1) {
  const r = xt || pt
  if (r || As) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : As._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && Te(t) ? t.call(r && r.proxy) : t
  }
}
function kg(e, t, n, r = !1) {
  const s = {},
    a = {}
  $s(a, ta, 1), (e.propsDefaults = Object.create(null)), vc(e, t, s, a)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : Yu(s)) : e.type.props ? (e.props = s) : (e.props = a),
    (e.attrs = a)
}
function $g(e, t, n, r) {
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
        let g = c[p]
        if (Ks(e.emitsOptions, g)) continue
        const b = t[g]
        if (o)
          if (Ne(a, g)) b !== a[g] && ((a[g] = b), (f = !0))
          else {
            const k = en(g)
            s[k] = ci(o, l, k, b, e, !1)
          }
        else b !== a[g] && ((a[g] = b), (f = !0))
      }
    }
  } else {
    vc(e, t, s, a) && (f = !0)
    let c
    for (const p in l)
      (!t || (!Ne(t, p) && ((c = Tr(p)) === p || !Ne(t, c)))) &&
        (o
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (s[p] = ci(o, l, p, void 0, e, !0))
          : delete s[p])
    if (a !== l) for (const p in a) (!t || !Ne(t, p)) && (delete a[p], (f = !0))
  }
  f && on(e, "set", "$attrs")
}
function vc(e, t, n, r) {
  const [s, a] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let o in t) {
      if (Ss(o)) continue
      const f = t[o]
      let c
      s && Ne(s, (c = en(o)))
        ? !a || !a.includes(c)
          ? (n[c] = f)
          : ((l || (l = {}))[c] = f)
        : Ks(e.emitsOptions, o) ||
          ((!(o in r) || f !== r[o]) && ((r[o] = f), (i = !0)))
    }
  if (a) {
    const o = He(n),
      f = l || et
    for (let c = 0; c < a.length; c++) {
      const p = a[c]
      n[p] = ci(s, o, p, f[p], e, !Ne(f, p))
    }
  }
  return i
}
function ci(e, t, n, r, s, a) {
  const i = e[n]
  if (i != null) {
    const l = Ne(i, "default")
    if (l && r === void 0) {
      const o = i.default
      if (i.type !== Function && !i.skipFactory && Te(o)) {
        const { propsDefaults: f } = s
        if (n in f) r = f[n]
        else {
          const c = Qr(s)
          ;(r = f[n] = o.call(null, t)), c()
        }
      } else r = o
    }
    i[0] && (a && !l ? (r = !1) : i[1] && (r === "" || r === Tr(n)) && (r = !0))
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
      const [g, b] = mc(p, t, !0)
      bt(i, g), b && l.push(...b)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!a && !o) return rt(e) && r.set(e, gr), gr
  if (_e(a))
    for (let c = 0; c < a.length; c++) {
      const p = en(a[c])
      Bo(p) && (i[p] = et)
    }
  else if (a)
    for (const c in a) {
      const p = en(c)
      if (Bo(p)) {
        const g = a[c],
          b = (i[p] = _e(g) || Te(g) ? { type: g } : bt({}, g))
        if (b) {
          const k = jo(Boolean, b.type),
            m = jo(String, b.type)
          ;(b[0] = k > -1),
            (b[1] = m < 0 || k < m),
            (k > -1 || Ne(b, "default")) && l.push(p)
        }
      }
    }
  const f = [i, l]
  return rt(e) && r.set(e, f), f
}
function Bo(e) {
  return e[0] !== "$"
}
function No(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function Ro(e, t) {
  return No(e) === No(t)
}
function jo(e, t) {
  return _e(t) ? t.findIndex((n) => Ro(n, e)) : Te(t) && Ro(t, e) ? 0 : -1
}
const bc = (e) => e[0] === "_" || e === "$stable",
  Vi = (e) => (_e(e) ? e.map(Xt) : [Xt(e)]),
  Mg = (e, t, n) => {
    if (t._n) return t
    const r = Xe((...s) => Vi(t(...s)), n)
    return (r._c = !1), r
  },
  yc = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (bc(s)) continue
      const a = e[s]
      if (Te(a)) t[s] = Mg(s, a, r)
      else if (a != null) {
        const i = Vi(a)
        t[s] = () => i
      }
    }
  },
  wc = (e, t) => {
    const n = Vi(t)
    e.slots.default = () => n
  },
  Ig = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = He(t)), $s(t, "_", n)) : yc(t, (e.slots = {}))
    } else (e.slots = {}), t && wc(e, t)
    $s(e.slots, ta, 1)
  },
  Og = (e, t, n) => {
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
function di(e, t, n, r, s = !1) {
  if (_e(e)) {
    e.forEach((g, b) => di(g, t && (_e(t) ? t[b] : t), n, r, s))
    return
  }
  if (Fr(r) && !s) return
  const a = r.shapeFlag & 4 ? ra(r.component) || r.component.proxy : r.el,
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
    On(o, l, 12, [i, c])
  else {
    const g = ot(o),
      b = St(o),
      k = e.f
    if (g || b) {
      const m = () => {
        if (k) {
          const E = g ? (Ne(p, o) ? p[o] : c[o]) : o.value
          s
            ? _e(E) && Ti(E, a)
            : _e(E)
              ? E.includes(a) || E.push(a)
              : g
                ? ((c[o] = [a]), Ne(p, o) && (p[o] = c[o]))
                : ((o.value = [a]), e.k && (c[e.k] = o.value))
        } else
          g
            ? ((c[o] = i), Ne(p, o) && (p[o] = i))
            : b && ((o.value = i), e.k && (c[e.k] = i))
      }
      s || k ? m() : ((m.id = -1), Pt(m, n))
    }
  }
}
const Pt = og
function Ag(e) {
  return Lg(e)
}
function Lg(e, t) {
  const n = Au()
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
      setScopeId: b = jt,
      insertStaticContent: k,
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
      S && !Lr(S, C) && ((H = R(S)), nt(S, j, Z, !0), (S = null)),
        C.patchFlag === -2 && ((ee = !1), (C.dynamicChildren = null))
      const { type: U, ref: ue, shapeFlag: be } = C
      switch (U) {
        case ea:
          E(S, C, B, H)
          break
        case Bn:
          T(S, C, B, H)
          break
        case Cs:
          S == null && x(C, B, H, ae)
          break
        case Qe:
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
      ue != null && j && di(ue, S && S.ref, Z, C || S, !C)
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
      ;[S.el, S.anchor] = k(S.children, C, B, H, S.el, S.anchor)
    },
    w = ({ el: S, anchor: C }, B, H) => {
      let j
      for (; S && S !== C; ) (j = g(S)), r(S, B, H), (S = j)
      r(C, B, H)
    },
    M = ({ el: S, anchor: C }) => {
      let B
      for (; S && S !== C; ) (B = g(S)), s(S), (S = B)
      s(C)
    },
    z = (S, C, B, H, j, Z, ae, J, ee) => {
      C.type === "svg" ? (ae = "svg") : C.type === "math" && (ae = "mathml"),
        S == null ? I(C, B, H, j, Z, ae, J, ee) : G(S, C, j, Z, ae, J, ee)
    },
    I = (S, C, B, H, j, Z, ae, J) => {
      let ee, U
      const { props: ue, shapeFlag: be, transition: ve, dirs: Se } = S
      if (
        ((ee = S.el = i(S.type, Z, ue && ue.is, ue)),
        be & 8
          ? c(ee, S.children)
          : be & 16 && q(S.children, ee, null, H, j, ja(S, Z), ae, J),
        Se && Gn(S, null, H, "created"),
        re(ee, S, S.scopeId, ae, H),
        ue)
      ) {
        for (const je in ue)
          je !== "value" &&
            !Ss(je) &&
            a(ee, je, null, ue[je], Z, S.children, H, j, it)
        "value" in ue && a(ee, "value", null, ue.value, Z),
          (U = ue.onVnodeBeforeMount) && Kt(U, H, S)
      }
      Se && Gn(S, null, H, "beforeMount")
      const ke = zg(j, ve)
      ke && ve.beforeEnter(ee),
        r(ee, C, B),
        ((U = ue && ue.onVnodeMounted) || ke || Se) &&
          Pt(() => {
            U && Kt(U, H, S),
              ke && ve.enter(ee),
              Se && Gn(S, null, H, "mounted")
          }, j)
    },
    re = (S, C, B, H, j) => {
      if ((B && b(S, B), H)) for (let Z = 0; Z < H.length; Z++) b(S, H[Z])
      if (j) {
        let Z = j.subTree
        if (C === Z) {
          const ae = j.vnode
          re(S, ae, ae.scopeId, ae.slotScopeIds, j.parent)
        }
      }
    },
    q = (S, C, B, H, j, Z, ae, J, ee = 0) => {
      for (let U = ee; U < S.length; U++) {
        const ue = (S[U] = J ? Tn(S[U]) : Xt(S[U]))
        m(null, ue, C, B, H, j, Z, ae, J)
      }
    },
    G = (S, C, B, H, j, Z, ae) => {
      const J = (C.el = S.el)
      let { patchFlag: ee, dynamicChildren: U, dirs: ue } = C
      ee |= S.patchFlag & 16
      const be = S.props || et,
        ve = C.props || et
      let Se
      if (
        (B && Vn(B, !1),
        (Se = ve.onVnodeBeforeUpdate) && Kt(Se, B, C, S),
        ue && Gn(C, S, B, "beforeUpdate"),
        B && Vn(B, !0),
        U
          ? D(S.dynamicChildren, U, J, B, H, ja(C, j), Z)
          : ae || V(S, C, J, null, B, H, ja(C, j), Z, !1),
        ee > 0)
      ) {
        if (ee & 16) Q(J, C, be, ve, B, H, j)
        else if (
          (ee & 2 && be.class !== ve.class && a(J, "class", null, ve.class, j),
          ee & 4 && a(J, "style", be.style, ve.style, j),
          ee & 8)
        ) {
          const ke = C.dynamicProps
          for (let je = 0; je < ke.length; je++) {
            const Ke = ke[je],
              at = be[Ke],
              Mt = ve[Ke]
            ;(Mt !== at || Ke === "value") &&
              a(J, Ke, at, Mt, j, S.children, B, H, it)
          }
        }
        ee & 1 && S.children !== C.children && c(J, C.children)
      } else !ae && U == null && Q(J, C, be, ve, B, H, j)
      ;((Se = ve.onVnodeUpdated) || ue) &&
        Pt(() => {
          Se && Kt(Se, B, C, S), ue && Gn(C, S, B, "updated")
        }, H)
    },
    D = (S, C, B, H, j, Z, ae) => {
      for (let J = 0; J < C.length; J++) {
        const ee = S[J],
          U = C[J],
          ue =
            ee.el && (ee.type === Qe || !Lr(ee, U) || ee.shapeFlag & 70)
              ? p(ee.el)
              : B
        m(ee, U, ue, null, H, j, Z, ae, !0)
      }
    },
    Q = (S, C, B, H, j, Z, ae) => {
      if (B !== H) {
        if (B !== et)
          for (const J in B)
            !Ss(J) && !(J in H) && a(S, J, B[J], null, ae, C.children, j, Z, it)
        for (const J in H) {
          if (Ss(J)) continue
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
      let { patchFlag: be, dynamicChildren: ve, slotScopeIds: Se } = C
      Se && (J = J ? J.concat(Se) : Se),
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
            : xe(C, B, H, j, Z, ae, ee)
          : Ce(S, C, ee)
    },
    xe = (S, C, B, H, j, Z, ae) => {
      const J = (S.component = Vg(S, H, j))
      if ((dc(S) && (J.ctx.renderer = pe), Wg(J), J.asyncDep)) {
        if ((j && j.registerDep(J, F), !S.el)) {
          const ee = (J.subTree = he(Bn))
          T(null, ee, C, B)
        }
      } else F(J, S, C, B, j, Z, ae)
    },
    Ce = (S, C, B) => {
      const H = (C.component = S.component)
      if (ng(S, C, B))
        if (H.asyncDep && !H.asyncResolved) {
          oe(H, C, B)
          return
        } else (H.next = C), X0(H.update), (H.effect.dirty = !0), H.update()
      else (C.el = S.el), (H.vnode = C)
    },
    F = (S, C, B, H, j, Z, ae) => {
      const J = () => {
          if (S.isMounted) {
            let { next: ue, bu: be, u: ve, parent: Se, vnode: ke } = S
            {
              const vn = Sc(S)
              if (vn) {
                ue && ((ue.el = ke.el), oe(S, ue, ae)),
                  vn.asyncDep.then(() => {
                    S.isUnmounted || J()
                  })
                return
              }
            }
            let je = ue,
              Ke
            Vn(S, !1),
              ue ? ((ue.el = ke.el), oe(S, ue, ae)) : (ue = ke),
              be && Es(be),
              (Ke = ue.props && ue.props.onVnodeBeforeUpdate) &&
                Kt(Ke, Se, ue, ke),
              Vn(S, !0)
            const at = Na(S),
              Mt = S.subTree
            ;(S.subTree = at),
              m(Mt, at, p(Mt.el), R(Mt), S, j, Z),
              (ue.el = at.el),
              je === null && rg(S, at.el),
              ve && Pt(ve, j),
              (Ke = ue.props && ue.props.onVnodeUpdated) &&
                Pt(() => Kt(Ke, Se, ue, ke), j)
          } else {
            let ue
            const { el: be, props: ve } = C,
              { bm: Se, m: ke, parent: je } = S,
              Ke = Fr(C)
            if (
              (Vn(S, !1),
              Se && Es(Se),
              !Ke && (ue = ve && ve.onVnodeBeforeMount) && Kt(ue, je, C),
              Vn(S, !0),
              be && Je)
            ) {
              const at = () => {
                ;(S.subTree = Na(S)), Je(be, S.subTree, S, j, null)
              }
              Ke
                ? C.type.__asyncLoader().then(() => !S.isUnmounted && at())
                : at()
            } else {
              const at = (S.subTree = Na(S))
              m(null, at, B, H, S, j, Z), (C.el = at.el)
            }
            if ((ke && Pt(ke, j), !Ke && (ue = ve && ve.onVnodeMounted))) {
              const at = C
              Pt(() => Kt(ue, je, at), j)
            }
            ;(C.shapeFlag & 256 ||
              (je && Fr(je.vnode) && je.vnode.shapeFlag & 256)) &&
              S.a &&
              Pt(S.a, j),
              (S.isMounted = !0),
              (C = B = H = null)
          }
        },
        ee = (S.effect = new ki(J, jt, () => Bi(U), S.scope)),
        U = (S.update = () => {
          ee.dirty && ee.run()
        })
      ;(U.id = S.uid), Vn(S, !0), U()
    },
    oe = (S, C, B) => {
      C.component = S
      const H = S.vnode.props
      ;(S.vnode = C),
        (S.next = null),
        $g(S, C.props, H, B),
        Og(S, C.children, B),
        Zn(),
        $o(S),
        Qn()
    },
    V = (S, C, B, H, j, Z, ae, J, ee = !1) => {
      const U = S && S.children,
        ue = S ? S.shapeFlag : 0,
        be = C.children,
        { patchFlag: ve, shapeFlag: Se } = C
      if (ve > 0) {
        if (ve & 128) {
          Pe(U, be, B, H, j, Z, ae, J, ee)
          return
        } else if (ve & 256) {
          Ye(U, be, B, H, j, Z, ae, J, ee)
          return
        }
      }
      Se & 8
        ? (ue & 16 && it(U, j, Z), be !== U && c(B, be))
        : ue & 16
          ? Se & 16
            ? Pe(U, be, B, H, j, Z, ae, J, ee)
            : it(U, j, Z, !0)
          : (ue & 8 && c(B, ""), Se & 16 && q(be, B, H, j, Z, ae, J, ee))
    },
    Ye = (S, C, B, H, j, Z, ae, J, ee) => {
      ;(S = S || gr), (C = C || gr)
      const U = S.length,
        ue = C.length,
        be = Math.min(U, ue)
      let ve
      for (ve = 0; ve < be; ve++) {
        const Se = (C[ve] = ee ? Tn(C[ve]) : Xt(C[ve]))
        m(S[ve], Se, B, null, j, Z, ae, J, ee)
      }
      U > ue ? it(S, j, Z, !0, !1, be) : q(C, B, H, j, Z, ae, J, ee, be)
    },
    Pe = (S, C, B, H, j, Z, ae, J, ee) => {
      let U = 0
      const ue = C.length
      let be = S.length - 1,
        ve = ue - 1
      for (; U <= be && U <= ve; ) {
        const Se = S[U],
          ke = (C[U] = ee ? Tn(C[U]) : Xt(C[U]))
        if (Lr(Se, ke)) m(Se, ke, B, null, j, Z, ae, J, ee)
        else break
        U++
      }
      for (; U <= be && U <= ve; ) {
        const Se = S[be],
          ke = (C[ve] = ee ? Tn(C[ve]) : Xt(C[ve]))
        if (Lr(Se, ke)) m(Se, ke, B, null, j, Z, ae, J, ee)
        else break
        be--, ve--
      }
      if (U > be) {
        if (U <= ve) {
          const Se = ve + 1,
            ke = Se < ue ? C[Se].el : H
          for (; U <= ve; )
            m(null, (C[U] = ee ? Tn(C[U]) : Xt(C[U])), B, ke, j, Z, ae, J, ee),
              U++
        }
      } else if (U > ve) for (; U <= be; ) nt(S[U], j, Z, !0), U++
      else {
        const Se = U,
          ke = U,
          je = new Map()
        for (U = ke; U <= ve; U++) {
          const Et = (C[U] = ee ? Tn(C[U]) : Xt(C[U]))
          Et.key != null && je.set(Et.key, U)
        }
        let Ke,
          at = 0
        const Mt = ve - ke + 1
        let vn = !1,
          $r = 0
        const mn = new Array(Mt)
        for (U = 0; U < Mt; U++) mn[U] = 0
        for (U = Se; U <= be; U++) {
          const Et = S[U]
          if (at >= Mt) {
            nt(Et, j, Z, !0)
            continue
          }
          let It
          if (Et.key != null) It = je.get(Et.key)
          else
            for (Ke = ke; Ke <= ve; Ke++)
              if (mn[Ke - ke] === 0 && Lr(Et, C[Ke])) {
                It = Ke
                break
              }
          It === void 0
            ? nt(Et, j, Z, !0)
            : ((mn[It - ke] = U + 1),
              It >= $r ? ($r = It) : (vn = !0),
              m(Et, C[It], B, null, j, Z, ae, J, ee),
              at++)
        }
        const ns = vn ? Bg(mn) : gr
        for (Ke = ns.length - 1, U = Mt - 1; U >= 0; U--) {
          const Et = ke + U,
            It = C[Et],
            Mr = Et + 1 < ue ? C[Et + 1].el : H
          mn[U] === 0
            ? m(null, It, B, Mr, j, Z, ae, J, ee)
            : vn && (Ke < 0 || U !== ns[Ke] ? tt(It, B, Mr, 2) : Ke--)
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
      if (ae === Qe) {
        r(Z, C, B)
        for (let be = 0; be < ee.length; be++) tt(ee[be], C, B, H)
        r(S.anchor, C, B)
        return
      }
      if (ae === Cs) {
        w(S, C, B)
        return
      }
      if (H !== 2 && U & 1 && J)
        if (H === 0) J.beforeEnter(Z), r(Z, C, B), Pt(() => J.enter(Z), j)
        else {
          const { leave: be, delayLeave: ve, afterLeave: Se } = J,
            ke = () => r(Z, C, B),
            je = () => {
              be(Z, () => {
                ke(), Se && Se()
              })
            }
          ve ? ve(Z, ke, je) : je()
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
      if ((J != null && di(J, null, B, S, !0), ue & 256)) {
        C.ctx.deactivate(S)
        return
      }
      const Se = ue & 1 && ve,
        ke = !Fr(S)
      let je
      if ((ke && (je = ae && ae.onVnodeBeforeUnmount) && Kt(je, C, S), ue & 6))
        Ct(S.component, B, H)
      else {
        if (ue & 128) {
          S.suspense.unmount(B, H)
          return
        }
        Se && Gn(S, null, C, "beforeUnmount"),
          ue & 64
            ? S.type.remove(S, C, B, j, pe, H)
            : U && (Z !== Qe || (be > 0 && be & 64))
              ? it(U, C, B, !1, !0)
              : ((Z === Qe && be & 384) || (!j && ue & 16)) && it(ee, C, B),
          H && Yt(S)
      }
      ;((ke && (je = ae && ae.onVnodeUnmounted)) || Se) &&
        Pt(() => {
          je && Kt(je, C, S), Se && Gn(S, null, C, "unmounted")
        }, B)
    },
    Yt = (S) => {
      const { type: C, el: B, anchor: H, transition: j } = S
      if (C === Qe) {
        Rt(B, H)
        return
      }
      if (C === Cs) {
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
    Rt = (S, C) => {
      let B
      for (; S !== C; ) (B = g(S)), s(S), (S = B)
      s(C)
    },
    Ct = (S, C, B) => {
      const { bum: H, scope: j, update: Z, subTree: ae, um: J } = S
      H && Es(H),
        j.stop(),
        Z && ((Z.active = !1), nt(ae, S, C, B)),
        J && Pt(J, C),
        Pt(() => {
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
          : g(S.anchor || S.el)
  let le = !1
  const ne = (S, C, B) => {
      S == null
        ? C._vnode && nt(C._vnode, null, null, !0)
        : m(C._vnode || null, S, C, null, null, null, B),
        le || ((le = !0), $o(), sc(), (le = !1)),
        (C._vnode = S)
    },
    pe = {
      p: m,
      um: nt,
      m: tt,
      r: Yt,
      mt: xe,
      mc: q,
      pc: V,
      pbc: D,
      n: R,
      o: e,
    }
  let Re, Je
  return (
    t && ([Re, Je] = t(pe)), { render: ne, hydrate: Re, createApp: Pg(ne, Re) }
  )
}
function ja({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function Vn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function zg(e, t) {
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
          ((l = s[a] = Tn(s[a])), (l.el = i.el)),
        n || xc(i, l)),
        l.type === ea && (l.el = i.el)
    }
}
function Bg(e) {
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
const Ng = (e) => e.__isTeleport,
  Qe = Symbol.for("v-fgt"),
  ea = Symbol.for("v-txt"),
  Bn = Symbol.for("v-cmt"),
  Cs = Symbol.for("v-stc"),
  Hr = []
let Wt = null
function se(e = !1) {
  Hr.push((Wt = e ? null : []))
}
function Rg() {
  Hr.pop(), (Wt = Hr[Hr.length - 1] || null)
}
let Yr = 1
function Fo(e) {
  Yr += e
}
function Ec(e) {
  return (
    (e.dynamicChildren = Yr > 0 ? Wt || gr : null),
    Rg(),
    Yr > 0 && Wt && Wt.push(e),
    e
  )
}
function Ee(e, t, n, r, s, a) {
  return Ec(v(e, t, n, r, s, a, !0))
}
function De(e, t, n, r, s) {
  return Ec(he(e, t, n, r, s, !0))
}
function Ls(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Lr(e, t) {
  return e.type === t.type && e.key === t.key
}
const ta = "__vInternal",
  _c = ({ key: e }) => e ?? null,
  Ts = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? ot(e) || St(e) || Te(e)
        ? { i: pt, r: e, k: t, f: !!n }
        : e
      : null
  )
function v(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  a = e === Qe ? 0 : 1,
  i = !1,
  l = !1,
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _c(t),
    ref: t && Ts(t),
    scopeId: Xs,
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
      ? (Wi(o, n), a & 128 && e.normalize(o))
      : n && (o.shapeFlag |= ot(n) ? 8 : 16),
    Yr > 0 &&
      !i &&
      Wt &&
      (o.patchFlag > 0 || a & 6) &&
      o.patchFlag !== 32 &&
      Wt.push(o),
    o
  )
}
const he = jg
function jg(e, t = null, n = null, r = 0, s = null, a = !1) {
  if (((!e || e === oc) && (e = Bn), Ls(e))) {
    const l = Xn(e, t, !0)
    return (
      n && Wi(l, n),
      Yr > 0 &&
        !a &&
        Wt &&
        (l.shapeFlag & 6 ? (Wt[Wt.indexOf(e)] = l) : Wt.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Xg(e) && (e = e.__vccOpts), t)) {
    t = Fg(t)
    let { class: l, style: o } = t
    l && !ot(l) && (t.class = A(l)),
      rt(o) && (Xu(o) && !_e(o) && (o = bt({}, o)), (t.style = Ws(o)))
  }
  const i = ot(e) ? 1 : lg(e) ? 128 : Ng(e) ? 64 : rt(e) ? 4 : Te(e) ? 2 : 0
  return v(e, t, n, r, s, i, a, !0)
}
function Fg(e) {
  return e ? (Xu(e) || ta in e ? bt({}, e) : e) : null
}
function Xn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: a, children: i } = e,
    l = t ? Dg(r || {}, t) : r
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
            ? s.concat(Ts(t))
            : [s, Ts(t)]
          : Ts(t)
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
    ssContent: e.ssContent && Xn(e.ssContent),
    ssFallback: e.ssFallback && Xn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Ie(e = " ", t = 0) {
  return he(ea, null, e, t)
}
function Cc(e, t) {
  const n = he(Cs, null, e)
  return (n.staticCount = t), n
}
function st(e = "", t = !1) {
  return t ? (se(), De(Bn, null, e)) : he(Bn, null, e)
}
function Xt(e) {
  return e == null || typeof e == "boolean"
    ? he(Bn)
    : _e(e)
      ? he(Qe, null, e.slice())
      : typeof e == "object"
        ? Tn(e)
        : he(ea, null, String(e))
}
function Tn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Xn(e)
}
function Wi(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (_e(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), Wi(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(ta in t)
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
function Dg(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = A([t.class, r.class]))
      else if (s === "style") t.style = Ws([t.style, r.style])
      else if (Ds(s)) {
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
function Kt(e, t, n, r = null) {
  qt(e, t, 7, [n, r])
}
const Hg = gc()
let Gg = 0
function Vg(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Hg,
    a = {
      uid: Gg++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new S0(!0),
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
      emitsOptions: ic(r, s),
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
    (a.emit = Q0.bind(null, a)),
    e.ce && e.ce(a),
    a
  )
}
let xt = null,
  zs,
  fi
{
  const e = Au(),
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
  ;(zs = t("__VUE_INSTANCE_SETTERS__", (n) => (xt = n))),
    (fi = t("__VUE_SSR_SETTERS__", (n) => (na = n)))
}
const Qr = (e) => {
    const t = xt
    return (
      zs(e),
      e.scope.on(),
      () => {
        e.scope.off(), zs(t)
      }
    )
  },
  Do = () => {
    xt && xt.scope.off(), zs(null)
  }
function Tc(e) {
  return e.vnode.shapeFlag & 4
}
let na = !1
function Wg(e, t = !1) {
  t && fi(t)
  const { props: n, children: r } = e.vnode,
    s = Tc(e)
  kg(e, n, s, t), Ig(e, r)
  const a = s ? qg(e, t) : void 0
  return t && fi(!1), a
}
function qg(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Ju(new Proxy(e.ctx, wg)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Yg(e) : null),
      a = Qr(e)
    Zn()
    const i = On(r, e, 0, [e.props, s])
    if ((Qn(), a(), Mu(i))) {
      if ((i.then(Do, Do), t))
        return i
          .then((l) => {
            Ho(e, l, t)
          })
          .catch((l) => {
            Us(l, e, 0)
          })
      e.asyncDep = i
    } else Ho(e, i, t)
  } else Pc(e, t)
}
function Ho(e, t, n) {
  Te(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : rt(t) && (e.setupState = tc(t)),
    Pc(e, n)
}
let Go
function Pc(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Go && !r.render) {
      const s = r.template || Gi(e).template
      if (s) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: o } = r,
          f = bt(bt({ isCustomElement: a, delimiters: l }, i), o)
        r.render = Go(s, f)
      }
    }
    e.render = r.render || jt
  }
  {
    const s = Qr(e)
    Zn()
    try {
      xg(e)
    } finally {
      Qn(), s()
    }
  }
}
function Ug(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return $t(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function Yg(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Ug(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function ra(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(tc(Ju(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Dr) return Dr[n](e)
        },
        has(t, n) {
          return n in t || n in Dr
        },
      }))
    )
}
function Kg(e, t = !0) {
  return Te(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Xg(e) {
  return Te(e) && "__vccOpts" in e
}
const me = (e, t) => V0(e, t, na)
function Ue(e, t, n) {
  const r = arguments.length
  return r === 2
    ? rt(t) && !_e(t)
      ? Ls(t)
        ? he(e, null, [t])
        : he(e, t)
      : he(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Ls(n) && (n = [n]),
      he(e, t, n))
}
const Jg = "3.4.15"
const Zg = "http://www.w3.org/2000/svg",
  Qg = "http://www.w3.org/1998/Math/MathML",
  Pn = typeof document < "u" ? document : null,
  Vo = Pn && Pn.createElement("template"),
  ev = {
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
          ? Pn.createElementNS(Zg, e)
          : t === "mathml"
            ? Pn.createElementNS(Qg, e)
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
        Vo.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const l = Vo.content
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
  tv = Symbol("_vtc")
function nv(e, t, n) {
  const r = e[tv]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const rv = Symbol("_vod"),
  sv = Symbol("")
function av(e, t, n) {
  const r = e.style,
    s = r.display,
    a = ot(n)
  if (n && !a) {
    if (t && !ot(t)) for (const i in t) n[i] == null && pi(r, i, "")
    for (const i in n) pi(r, i, n[i])
  } else if (a) {
    if (t !== n) {
      const i = r[sv]
      i && (n += ";" + i), (r.cssText = n)
    }
  } else t && e.removeAttribute("style")
  rv in e && (r.display = s)
}
const Wo = /\s*!important$/
function pi(e, t, n) {
  if (_e(n)) n.forEach((r) => pi(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = iv(e, t)
    Wo.test(n)
      ? e.setProperty(Tr(r), n.replace(Wo, ""), "important")
      : (e[r] = n)
  }
}
const qo = ["Webkit", "Moz", "ms"],
  Fa = {}
function iv(e, t) {
  const n = Fa[t]
  if (n) return n
  let r = en(t)
  if (r !== "filter" && r in e) return (Fa[t] = r)
  r = Vs(r)
  for (let s = 0; s < qo.length; s++) {
    const a = qo[s] + r
    if (a in e) return (Fa[t] = a)
  }
  return t
}
const Uo = "http://www.w3.org/1999/xlink"
function lv(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Uo, t.slice(6, t.length))
      : e.setAttributeNS(Uo, t, n)
  else {
    const a = x0(t)
    n == null || (a && !Lu(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function ov(e, t, n, r, s, a, i) {
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
      ? (n = Lu(n))
      : n == null && f === "string"
        ? ((n = ""), (o = !0))
        : f === "number" && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(t)
}
function fr(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function uv(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Yo = Symbol("_vei")
function cv(e, t, n, r, s = null) {
  const a = e[Yo] || (e[Yo] = {}),
    i = a[t]
  if (r && i) i.value = r
  else {
    const [l, o] = dv(t)
    if (r) {
      const f = (a[t] = hv(r, s))
      fr(e, l, f, o)
    } else i && (uv(e, l, i, o), (a[t] = void 0))
  }
}
const Ko = /(?:Once|Passive|Capture)$/
function dv(e) {
  let t
  if (Ko.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Ko)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : Tr(e.slice(2)), t]
}
let Da = 0
const fv = Promise.resolve(),
  pv = () => Da || (fv.then(() => (Da = 0)), (Da = Date.now()))
function hv(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    qt(gv(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = pv()), n
}
function gv(e, t) {
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
const Xo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  vv = (e, t, n, r, s, a, i, l, o) => {
    const f = s === "svg"
    t === "class"
      ? nv(e, r, f)
      : t === "style"
        ? av(e, n, r)
        : Ds(t)
          ? Ci(t) || cv(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : mv(e, t, r, f)
              )
            ? ov(e, t, r, a, i, l, o)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              lv(e, t, r, f))
  }
function mv(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Xo(t) && Te(n))
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
  return Xo(t) && ot(n) ? !1 : t in e
}
const Jo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return _e(t) ? (n) => Es(t, n) : t
}
function bv(e) {
  e.target.composing = !0
}
function Zo(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const Ha = Symbol("_assign"),
  yv = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[Ha] = Jo(s)
      const a = r || (s.props && s.props.type === "number")
      fr(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let l = e.value
        n && (l = l.trim()), a && (l = ti(l)), e[Ha](l)
      }),
        n &&
          fr(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (fr(e, "compositionstart", bv),
          fr(e, "compositionend", Zo),
          fr(e, "change", Zo))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      a,
    ) {
      if (((e[Ha] = Jo(a)), e.composing)) return
      const i = s || e.type === "number" ? ti(e.value) : e.value,
        l = t ?? ""
      i !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === l))) ||
          (e.value = l))
    },
  },
  wv = bt({ patchProp: vv }, ev)
let Qo
function xv() {
  return Qo || (Qo = Ag(wv))
}
const Sv = (...e) => {
  const t = xv().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = _v(r)
      if (!s) return
      const a = t._component
      !Te(a) && !a.render && !a.template && (a.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, Ev(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function Ev(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function _v(e) {
  return ot(e) ? document.querySelector(e) : e
}
const Rn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  Cv = {}
function Tv(e, t) {
  const n = lc("router-view")
  return se(), De(n)
}
const Pv = Rn(Cv, [["render", Tv]])
let kv = 0
function $v() {
  return ++kv
}
function Kn() {
  return $v()
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
var Mv = Object.defineProperty,
  Iv = (e, t, n) =>
    t in e
      ? Mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  eu = (e, t, n) => (Iv(e, typeof t != "symbol" ? t + "" : t, n), n)
let Ov = class {
    constructor() {
      eu(this, "current", this.detect()), eu(this, "currentId", 0)
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
  sa = new Ov()
function Pr(e) {
  if (sa.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = fe(e)
    if (t) return t.ownerDocument
  }
  return document
}
let hi = [
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
  $n = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))($n || {}),
  Av = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Av || {})
function aa(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(hi)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var qi = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(qi || {})
function kc(e, t = 0) {
  var n
  return e === ((n = Pr(e)) == null ? void 0 : n.body)
    ? !1
    : zt(t, {
        0() {
          return e.matches(hi)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(hi)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var Lv = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Lv || {})
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
let zv = ["textarea", "input"].join(",")
function Bv(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, zv)) !=
    null
    ? n
    : !1
}
function pr(e, t = (n) => n) {
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
    l = Array.isArray(e) ? (n ? pr(e) : e) : aa(e)
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
    b
  do {
    if (p >= g || p + g <= 0) return 0
    let k = f + p
    if (t & 16) k = (k + g) % g
    else {
      if (k < 0) return 3
      if (k >= g) return 1
    }
    ;(b = l[k]), b == null || b.focus(c), (p += o)
  } while (b !== i.activeElement)
  return t & 6 && Bv(b) && b.select(), 2
}
function Nv() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Rv() {
  return /Android/gi.test(window.navigator.userAgent)
}
function jv() {
  return Nv() || Rv()
}
function bs(e, t, n) {
  sa.isServer ||
    cn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function $c(e, t, n) {
  sa.isServer ||
    cn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Fv(e, t, n = me(() => !0)) {
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
    return !kc(l, qi.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l)
  }
  let s = te(null)
  bs(
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
    bs(
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
    bs(
      "click",
      (a) => {
        jv() || (s.value && (r(a, () => s.value), (s.value = null)))
      },
      !0,
    ),
    bs(
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
function tu(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Mc(e, t) {
  let n = te(tu(e.value.type, e.value.as))
  return (
    yt(() => {
      n.value = tu(e.value.type, e.value.as)
    }),
    cn(() => {
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
var Kr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Kr || {}),
  Dv = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Dv || {})
function fn({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...s
}) {
  var a
  let i = Oc(r, n),
    l = Object.assign(s, { props: i })
  if (e || (t & 2 && i.static)) return Ga(l)
  if (t & 1) {
    let o = (a = i.unmount) == null || a ? 0 : 1
    return zt(o, {
      0() {
        return null
      },
      1() {
        return Ga({
          ...s,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Ga(l)
}
function Ga({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var a, i
  let { as: l, ...o } = Ac(e, ["unmount", "static"]),
    f = (a = n.default) == null ? void 0 : a.call(n, r),
    c = {}
  if (r) {
    let p = !1,
      g = []
    for (let [b, k] of Object.entries(r))
      typeof k == "boolean" && (p = !0), k === !0 && g.push(b)
    p && (c["data-headlessui-state"] = g.join(" "))
  }
  if (l === "template") {
    if (
      ((f = Ic(f ?? [])),
      Object.keys(o).length > 0 || Object.keys(t).length > 0)
    ) {
      let [p, ...g] = f ?? []
      if (!Hv(p) || g.length > 0)
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
        k = Xn(p, b, !0)
      for (let m in b)
        m.startsWith("on") && (k.props || (k.props = {}), (k.props[m] = b[m]))
      return k
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f
  }
  return Ue(l, Object.assign({}, o, c), { default: () => f })
}
function Ic(e) {
  return e.flatMap((t) => (t.type === Qe ? Ic(t.children) : [t]))
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
function Hv(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var xr = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(xr || {})
let Sr = Bt({
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
  Lc = Symbol("Context")
var Xr = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Xr || {})
function Gv() {
  return ht(Lc, null)
}
function Vv(e) {
  Ft(Lc, e)
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
function Wv(e) {
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
function qv(e, t, n, r) {
  sa.isServer ||
    cn((s) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, r),
        s(() => e.removeEventListener(t, n, r))
    })
}
var ln = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(ln || {})
function zc() {
  let e = te(0)
  return (
    $c("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Uv({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = te(null),
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
      return n != null ? null : Ue(Sr, { features: xr.Hidden, ref: r })
    },
  }
}
let nu = Symbol("PortalParentContext")
function Yv() {
  let e = ht(nu, null),
    t = te([])
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
          Ft(nu, s),
          () => {
            var l
            return (l = i.default) == null ? void 0 : l.call(i)
          }
        )
      },
    }),
  ]
}
var Kv = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Kv || {})
let Bc = Symbol("PopoverContext")
function Ui(e) {
  let t = ht(Bc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${gi.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Ui), n)
  }
  return t
}
let Xv = Symbol("PopoverGroupContext")
function Nc() {
  return ht(Xv, null)
}
let Rc = Symbol("PopoverPanelContext")
function Jv() {
  return ht(Rc, null)
}
let gi = Bt({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let a = te(null)
      r({ el: a, $el: a })
      let i = te(1),
        l = te(null),
        o = te(null),
        f = te(null),
        c = te(null),
        p = me(() => Pr(a)),
        g = me(() => {
          var z, I
          if (!fe(l) || !fe(c)) return !1
          for (let X of document.querySelectorAll("body > *"))
            if (
              Number(X == null ? void 0 : X.contains(fe(l))) ^
              Number(X == null ? void 0 : X.contains(fe(c)))
            )
              return !0
          let re = aa(),
            q = re.indexOf(fe(l)),
            G = (q + re.length - 1) % re.length,
            D = (q + 1) % re.length,
            Q = re[G],
            ge = re[D]
          return (
            !((z = fe(c)) != null && z.contains(Q)) &&
            !((I = fe(c)) != null && I.contains(ge))
          )
        }),
        b = {
          popoverState: i,
          buttonId: te(null),
          panelId: te(null),
          panel: c,
          button: l,
          isPortalled: g,
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
            let I = z
              ? z instanceof HTMLElement
                ? z
                : z.value instanceof HTMLElement
                  ? fe(z)
                  : fe(b.button)
              : fe(b.button)
            I == null || I.focus()
          },
        }
      Ft(Bc, b), Vv(me(() => zt(i.value, { 0: Xr.Open, 1: Xr.Closed })))
      let k = {
          buttonId: b.buttonId,
          panelId: b.panelId,
          close() {
            b.closePopover()
          },
        },
        m = Nc(),
        E = m == null ? void 0 : m.registerPopover,
        [T, x] = Yv(),
        w = Uv({
          mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef,
          portals: T,
          defaultContainers: [l, c],
        })
      function M() {
        var z, I, re, q
        return (q = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null
          ? q
          : ((z = p.value) == null ? void 0 : z.activeElement) &&
              (((I = fe(l)) == null
                ? void 0
                : I.contains(p.value.activeElement)) ||
                ((re = fe(c)) == null
                  ? void 0
                  : re.contains(p.value.activeElement)))
      }
      return (
        cn(() => (E == null ? void 0 : E(k))),
        qv(
          (s = p.value) == null ? void 0 : s.defaultView,
          "focus",
          (z) => {
            var I, re
            z.target !== window &&
              z.target instanceof HTMLElement &&
              i.value === 0 &&
              (M() ||
                (l &&
                  c &&
                  (w.contains(z.target) ||
                    ((I = fe(b.beforePanelSentinel)) != null &&
                      I.contains(z.target)) ||
                    ((re = fe(b.afterPanelSentinel)) != null &&
                      re.contains(z.target)) ||
                    b.closePopover())))
          },
          !0,
        ),
        Fv(
          w.resolveContainers,
          (z, I) => {
            var re
            b.closePopover(),
              kc(I, qi.Loose) ||
                (z.preventDefault(), (re = fe(l)) == null || re.focus())
          },
          me(() => i.value === 0),
        ),
        () => {
          let z = { open: i.value === 0, close: b.close }
          return Ue(Qe, [
            Ue(x, {}, () =>
              fn({
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
  ru = Bt({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Kn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Ui("PopoverButton"),
        a = me(() => Pr(s.button))
      r({ el: s.button, $el: s.button }),
        yt(() => {
          s.buttonId.value = e.id
        }),
        Nn(() => {
          s.buttonId.value = null
        })
      let i = Nc(),
        l = i == null ? void 0 : i.closeOthers,
        o = Jv(),
        f = me(() => (o === null ? !1 : o.value === s.panelId.value)),
        c = te(null),
        p = `headlessui-focus-sentinel-${Kn()}`
      f.value ||
        cn(() => {
          s.button.value = fe(c)
        })
      let g = Mc(
        me(() => ({ as: e.as, type: t.type })),
        c,
      )
      function b(w) {
        var M, z, I, re, q
        if (f.value) {
          if (s.popoverState.value === 1) return
          switch (w.key) {
            case ft.Space:
            case ft.Enter:
              w.preventDefault(),
                (z = (M = w.target).click) == null || z.call(M),
                s.closePopover(),
                (I = fe(s.button)) == null || I.focus()
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
                ((re = a.value) != null &&
                  re.activeElement &&
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
      function k(w) {
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
            [ln.Forwards]: () => Lt(w, ut.First),
            [ln.Backwards]: () => Lt(w, ut.Last),
          }) === $n.Error &&
            Lt(
              aa().filter((z) => z.dataset.headlessuiFocusGuard !== "true"),
              zt(T.value, {
                [ln.Forwards]: ut.Next,
                [ln.Backwards]: ut.Previous,
              }),
              { relativeTo: fe(s.button) },
            )
        }
        M()
      }
      return () => {
        let w = s.popoverState.value === 0,
          M = { open: w },
          { id: z, ...I } = e,
          re = f.value
            ? { ref: c, type: g.value, onKeydown: b, onClick: m }
            : {
                ref: c,
                id: z,
                type: g.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": fe(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: b,
                onKeyup: k,
                onClick: m,
                onMousedown: E,
              }
        return Ue(Qe, [
          fn({
            ourProps: re,
            theirProps: { ...t, ...I },
            slot: M,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          w &&
            !f.value &&
            s.isPortalled.value &&
            Ue(Sr, {
              id: p,
              features: xr.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: x,
            }),
        ])
      }
    },
  }),
  su = Bt({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${Kn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let { focus: s } = e,
        a = Ui("PopoverPanel"),
        i = me(() => Pr(a.panel)),
        l = `headlessui-focus-sentinel-before-${Kn()}`,
        o = `headlessui-focus-sentinel-after-${Kn()}`
      r({ el: a.panel, $el: a.panel }),
        yt(() => {
          a.panelId.value = e.id
        }),
        Nn(() => {
          a.panelId.value = null
        }),
        Ft(Rc, a.panelId),
        cn(() => {
          var E, T
          if (!s || a.popoverState.value !== 0 || !a.panel) return
          let x = (E = i.value) == null ? void 0 : E.activeElement
          ;((T = fe(a.panel)) != null && T.contains(x)) ||
            Lt(fe(a.panel), ut.First)
        })
      let f = Gv(),
        c = me(() =>
          f !== null
            ? (f.value & Xr.Open) === Xr.Open
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
      function g(E) {
        var T, x, w, M, z
        let I = E.relatedTarget
        I &&
          fe(a.panel) &&
          (((T = fe(a.panel)) != null && T.contains(I)) ||
            (a.closePopover(),
            (((w =
              (x = fe(a.beforePanelSentinel)) == null ? void 0 : x.contains) !=
              null &&
              w.call(x, I)) ||
              ((z =
                (M = fe(a.afterPanelSentinel)) == null ? void 0 : M.contains) !=
                null &&
                z.call(M, I))) &&
              I.focus({ preventScroll: !0 })))
      }
      let b = zc()
      function k() {
        let E = fe(a.panel)
        if (!E) return
        function T() {
          zt(b.value, {
            [ln.Forwards]: () => {
              var x
              Lt(E, ut.First) === $n.Error &&
                ((x = fe(a.afterPanelSentinel)) == null || x.focus())
            },
            [ln.Backwards]: () => {
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
            [ln.Forwards]: () => {
              let x = fe(a.button),
                w = fe(a.panel)
              if (!x) return
              let M = aa(),
                z = M.indexOf(x),
                I = M.slice(0, z + 1),
                re = [...M.slice(z + 1), ...I]
              for (let q of re.slice())
                if (
                  q.dataset.headlessuiFocusGuard === "true" ||
                  (w != null && w.contains(q))
                ) {
                  let G = re.indexOf(q)
                  G !== -1 && re.splice(G, 1)
                }
              Lt(re, ut.First, { sorted: !1 })
            },
            [ln.Backwards]: () => {
              var x
              Lt(E, ut.Previous) === $n.Error &&
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
            onFocusout: s && a.popoverState.value === 0 ? g : void 0,
            tabIndex: -1,
          }
        return fn({
          ourProps: M,
          theirProps: { ...t, ...w },
          attrs: t,
          slot: E,
          slots: {
            ...n,
            default: (...z) => {
              var I
              return [
                Ue(Qe, [
                  c.value &&
                    a.isPortalled.value &&
                    Ue(Sr, {
                      id: l,
                      ref: a.beforePanelSentinel,
                      features: xr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: k,
                    }),
                  (I = n.default) == null ? void 0 : I.call(n, ...z),
                  c.value &&
                    a.isPortalled.value &&
                    Ue(Sr, {
                      id: o,
                      ref: a.afterPanelSentinel,
                      features: xr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: m,
                    }),
                ]),
              ]
            },
          },
          features: Kr.RenderStrategy | Kr.Static,
          visible: c.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  Zv = Bt({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = te(!0)
      return () =>
        t.value
          ? Ue(Sr, {
              as: "button",
              type: "button",
              features: xr.Focusable,
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
var Qv = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(Qv || {}),
  em = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(em || {})
let jc = Symbol("TabsContext")
function es(e) {
  let t = ht(jc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, es), n)
  }
  return t
}
let Yi = Symbol("TabsSSRContext"),
  tm = Bt({
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
      let a = te((s = e.selectedIndex) != null ? s : e.defaultIndex),
        i = te([]),
        l = te([]),
        o = me(() => e.selectedIndex !== null),
        f = me(() => (o.value ? e.selectedIndex : a.value))
      function c(m) {
        var E
        let T = pr(p.tabs.value, fe),
          x = pr(p.panels.value, fe),
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
            z = [...T.slice(m), ...M].find((re) => w.includes(re))
          if (!z) return
          let I = (E = T.indexOf(z)) != null ? E : p.selectedIndex.value
          I === -1 && (I = p.selectedIndex.value),
            (a.value = I),
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
          i.value.push(m), (i.value = pr(i.value, fe))
          let x = (E = i.value.indexOf(T)) != null ? E : a.value
          x !== -1 && (a.value = x)
        },
        unregisterTab(m) {
          let E = i.value.indexOf(m)
          E !== -1 && i.value.splice(E, 1)
        },
        registerPanel(m) {
          l.value.includes(m) || (l.value.push(m), (l.value = pr(l.value, fe)))
        },
        unregisterPanel(m) {
          let E = l.value.indexOf(m)
          E !== -1 && l.value.splice(E, 1)
        },
      }
      Ft(jc, p)
      let g = te({ tabs: [], panels: [] }),
        b = te(!1)
      yt(() => {
        b.value = !0
      }),
        Ft(
          Yi,
          me(() => (b.value ? null : g.value)),
        )
      let k = me(() => e.selectedIndex)
      return (
        yt(() => {
          An(
            [k],
            () => {
              var m
              return c((m = e.selectedIndex) != null ? m : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        cn(() => {
          if (!o.value || f.value == null || p.tabs.value.length <= 0) return
          let m = pr(p.tabs.value, fe)
          m.some((E, T) => fe(p.tabs.value[T]) !== fe(E)) &&
            p.setSelectedIndex(
              m.findIndex((E) => fe(E) === fe(p.tabs.value[f.value])),
            )
        }),
        () => {
          let m = { selectedIndex: a.value }
          return Ue(Qe, [
            i.value.length <= 0 &&
              Ue(Zv, {
                onFocus: () => {
                  for (let E of i.value) {
                    let T = fe(E)
                    if ((T == null ? void 0 : T.tabIndex) === 0)
                      return T.focus(), !0
                  }
                  return !1
                },
              }),
            fn({
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
  nm = Bt({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = es("TabList")
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
  rm = Bt({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-tabs-tab-${Kn()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = es("Tab"),
        a = te(null)
      r({ el: a, $el: a }),
        yt(() => s.registerTab(a)),
        Nn(() => s.unregisterTab(a))
      let i = ht(Yi),
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
        if (x === $n.Success && s.activation.value === "auto") {
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
                    : $n.Error
              },
              horizontal() {
                return E.key === ft.ArrowLeft
                  ? Lt(T, ut.Previous | ut.WrapAround)
                  : E.key === ft.ArrowRight
                    ? Lt(T, ut.Next | ut.WrapAround)
                    : $n.Error
              },
            }),
          ) === $n.Success
        )
          return E.preventDefault()
      }
      let g = te(!1)
      function b() {
        var E
        g.value ||
          ((g.value = !0),
          !e.disabled &&
            ((E = fe(a)) == null || E.focus({ preventScroll: !0 }),
            s.setSelectedIndex(o.value),
            Wv(() => {
              g.value = !1
            })))
      }
      function k(E) {
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
            onMousedown: k,
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
        return fn({
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
  sm = Bt({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = es("TabPanels")
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
  zr = Bt({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${Kn()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = es("TabPanel"),
        a = te(null)
      r({ el: a, $el: a }),
        yt(() => s.registerPanel(a)),
        Nn(() => s.unregisterPanel(a))
      let i = ht(Yi),
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
          { id: g, tabIndex: b, ...k } = e,
          m = {
            ref: a,
            id: g,
            role: "tabpanel",
            "aria-labelledby":
              (c = fe(s.tabs.value[o.value])) == null ? void 0 : c.id,
            tabIndex: f.value ? b : -1,
          }
        return !f.value && e.unmount && !e.static
          ? Ue(Sr, { as: "span", "aria-hidden": !0, ...m })
          : fn({
              ourProps: m,
              theirProps: k,
              slot: p,
              attrs: t,
              slots: n,
              features: Kr.Static | Kr.RenderStrategy,
              visible: f.value,
              name: "TabPanel",
            })
      }
    },
  })
const hr = typeof window < "u"
function am(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const qe = Object.assign
function Va(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = Ut(s) ? s.map(e) : e(s)
  }
  return n
}
const Gr = () => {},
  Ut = Array.isArray,
  im = /\/$/,
  lm = (e) => e.replace(im, "")
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
    (r = dm(r ?? t, n)),
    { fullPath: r + (a && "?") + a + i, path: r, query: s, hash: i }
  )
}
function om(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function au(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function um(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    Er(t.matched[r], n.matched[s]) &&
    Fc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Er(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Fc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!cm(e[n], t[n])) return !1
  return !0
}
function cm(e, t) {
  return Ut(e) ? iu(e, t) : Ut(t) ? iu(t, e) : e === t
}
function iu(e, t) {
  return Ut(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function dm(e, t) {
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
var Jr
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(Jr || (Jr = {}))
var Vr
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Vr || (Vr = {}))
function fm(e) {
  if (!e)
    if (hr) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), lm(e)
}
const pm = /^[^#]+#/
function hm(e, t) {
  return e.replace(pm, "#") + t
}
function gm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const ia = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function vm(e) {
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
    t = gm(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function lu(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const vi = new Map()
function mm(e, t) {
  vi.set(e, t)
}
function bm(e) {
  const t = vi.get(e)
  return vi.delete(e), t
}
let ym = () => location.protocol + "//" + location.host
function Dc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1,
      o = s.slice(l)
    return o[0] !== "/" && (o = "/" + o), au(o, "")
  }
  return au(n, e) + r + s
}
function wm(e, t, n, r) {
  let s = [],
    a = [],
    i = null
  const l = ({ state: g }) => {
    const b = Dc(e, location),
      k = n.value,
      m = t.value
    let E = 0
    if (g) {
      if (((n.value = b), (t.value = g), i && i === k)) {
        i = null
        return
      }
      E = m ? g.position - m.position : 0
    } else r(b)
    s.forEach((T) => {
      T(n.value, k, {
        delta: E,
        type: Jr.pop,
        direction: E ? (E > 0 ? Vr.forward : Vr.back) : Vr.unknown,
      })
    })
  }
  function o() {
    i = n.value
  }
  function f(g) {
    s.push(g)
    const b = () => {
      const k = s.indexOf(g)
      k > -1 && s.splice(k, 1)
    }
    return a.push(b), b
  }
  function c() {
    const { history: g } = window
    g.state && g.replaceState(qe({}, g.state, { scroll: ia() }), "")
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
function ou(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? ia() : null,
  }
}
function xm(e) {
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
      g =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + o
          : ym() + e + o
    try {
      t[c ? "replaceState" : "pushState"](f, "", g), (s.value = f)
    } catch (b) {
      console.error(b), n[c ? "replace" : "assign"](g)
    }
  }
  function i(o, f) {
    const c = qe({}, t.state, ou(s.value.back, o, s.value.forward, !0), f, {
      position: s.value.position,
    })
    a(o, c, !0), (r.value = o)
  }
  function l(o, f) {
    const c = qe({}, s.value, t.state, { forward: o, scroll: ia() })
    a(c.current, c, !0)
    const p = qe({}, ou(r.value, o, null), { position: c.position + 1 }, f)
    a(o, p, !1), (r.value = o)
  }
  return { location: r, state: s, push: l, replace: i }
}
function Sm(e) {
  e = fm(e)
  const t = xm(e),
    n = wm(e, t.state, t.location, t.replace)
  function r(a, i = !0) {
    i || n.pauseListeners(), history.go(a)
  }
  const s = qe(
    { location: "", base: e, go: r, createHref: hm.bind(null, e) },
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
function Em(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Hc(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const En = {
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
var uu
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(uu || (uu = {}))
function _r(e, t) {
  return qe(new Error(), { type: e, [Gc]: !0 }, t)
}
function sn(e, t) {
  return e instanceof Error && Gc in e && (t == null || !!(e.type & t))
}
const cu = "[^/]+?",
  _m = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Cm = /[.+*?^${}()[\]/\\]/g
function Tm(e, t) {
  const n = qe({}, _m, t),
    r = []
  let s = n.start ? "^" : ""
  const a = []
  for (const f of e) {
    const c = f.length ? [] : [90]
    n.strict && !f.length && (s += "/")
    for (let p = 0; p < f.length; p++) {
      const g = f[p]
      let b = 40 + (n.sensitive ? 0.25 : 0)
      if (g.type === 0)
        p || (s += "/"), (s += g.value.replace(Cm, "\\$&")), (b += 40)
      else if (g.type === 1) {
        const { value: k, repeatable: m, optional: E, regexp: T } = g
        a.push({ name: k, repeatable: m, optional: E })
        const x = T || cu
        if (x !== cu) {
          b += 10
          try {
            new RegExp(`(${x})`)
          } catch (M) {
            throw new Error(
              `Invalid custom RegExp for param "${k}" (${x}): ` + M.message,
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
    for (let g = 1; g < c.length; g++) {
      const b = c[g] || "",
        k = a[g - 1]
      p[k.name] = b && k.repeatable ? b.split("/") : b
    }
    return p
  }
  function o(f) {
    let c = "",
      p = !1
    for (const g of e) {
      ;(!p || !c.endsWith("/")) && (c += "/"), (p = !1)
      for (const b of g)
        if (b.type === 0) c += b.value
        else if (b.type === 1) {
          const { value: k, repeatable: m, optional: E } = b,
            T = k in f ? f[k] : ""
          if (Ut(T) && !m)
            throw new Error(
              `Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const x = Ut(T) ? T.join("/") : T
          if (!x)
            if (E)
              g.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (p = !0))
            else throw new Error(`Missing required param "${k}"`)
          c += x
        }
    }
    return c || "/"
  }
  return { re: i, score: r, keys: a, parse: l, stringify: o }
}
function Pm(e, t) {
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
function km(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const a = Pm(r[n], s[n])
    if (a) return a
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (du(r)) return 1
    if (du(s)) return -1
  }
  return s.length - r.length
}
function du(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const $m = { type: 0, value: "" },
  Mm = /[a-zA-Z0-9_]/
function Im(e) {
  if (!e) return [[]]
  if (e === "/") return [[$m]]
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
          : Mm.test(o)
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
function Om(e, t, n) {
  const r = Tm(Im(e.path), n),
    s = qe(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function Am(e, t) {
  const n = [],
    r = new Map()
  t = hu({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(c) {
    return r.get(c)
  }
  function a(c, p, g) {
    const b = !g,
      k = Lm(c)
    k.aliasOf = g && g.record
    const m = hu(t, c),
      E = [k]
    if ("alias" in c) {
      const w = typeof c.alias == "string" ? [c.alias] : c.alias
      for (const M of w)
        E.push(
          qe({}, k, {
            components: g ? g.record.components : k.components,
            path: M,
            aliasOf: g ? g.record : k,
          }),
        )
    }
    let T, x
    for (const w of E) {
      const { path: M } = w
      if (p && M[0] !== "/") {
        const z = p.record.path,
          I = z[z.length - 1] === "/" ? "" : "/"
        w.path = p.record.path + (M && I + M)
      }
      if (
        ((T = Om(w, p, m)),
        g
          ? g.alias.push(T)
          : ((x = x || T),
            x !== T && x.alias.push(T),
            b && c.name && !pu(T) && i(c.name)),
        k.children)
      ) {
        const z = k.children
        for (let I = 0; I < z.length; I++) a(z[I], T, g && g.children[I])
      }
      ;(g = g || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          o(T)
    }
    return x
      ? () => {
          i(x)
        }
      : Gr
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
      km(c, n[p]) >= 0 &&
      (c.record.path !== n[p].record.path || !Vc(c, n[p]));

    )
      p++
    n.splice(p, 0, c), c.record.name && !pu(c) && r.set(c.record.name, c)
  }
  function f(c, p) {
    let g,
      b = {},
      k,
      m
    if ("name" in c && c.name) {
      if (((g = r.get(c.name)), !g)) throw _r(1, { location: c })
      ;(m = g.record.name),
        (b = qe(
          fu(
            p.params,
            g.keys.filter((x) => !x.optional).map((x) => x.name),
          ),
          c.params &&
            fu(
              c.params,
              g.keys.map((x) => x.name),
            ),
        )),
        (k = g.stringify(b))
    } else if ("path" in c)
      (k = c.path),
        (g = n.find((x) => x.re.test(k))),
        g && ((b = g.parse(k)), (m = g.record.name))
    else {
      if (((g = p.name ? r.get(p.name) : n.find((x) => x.re.test(p.path))), !g))
        throw _r(1, { location: c, currentLocation: p })
      ;(m = g.record.name),
        (b = qe({}, p.params, c.params)),
        (k = g.stringify(b))
    }
    const E = []
    let T = g
    for (; T; ) E.unshift(T.record), (T = T.parent)
    return { name: m, path: k, params: b, matched: E, meta: Bm(E) }
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
function fu(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function Lm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: zm(e),
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
function zm(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function pu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Bm(e) {
  return e.reduce((t, n) => qe(t, n.meta), {})
}
function hu(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function Vc(e, t) {
  return t.children.some((n) => n === e || Vc(e, n))
}
const Wc = /#/g,
  Nm = /&/g,
  Rm = /\//g,
  jm = /=/g,
  Fm = /\?/g,
  qc = /\+/g,
  Dm = /%5B/g,
  Hm = /%5D/g,
  Uc = /%5E/g,
  Gm = /%60/g,
  Yc = /%7B/g,
  Vm = /%7C/g,
  Kc = /%7D/g,
  Wm = /%20/g
function Ki(e) {
  return encodeURI("" + e)
    .replace(Vm, "|")
    .replace(Dm, "[")
    .replace(Hm, "]")
}
function qm(e) {
  return Ki(e).replace(Yc, "{").replace(Kc, "}").replace(Uc, "^")
}
function mi(e) {
  return Ki(e)
    .replace(qc, "%2B")
    .replace(Wm, "+")
    .replace(Wc, "%23")
    .replace(Nm, "%26")
    .replace(Gm, "`")
    .replace(Yc, "{")
    .replace(Kc, "}")
    .replace(Uc, "^")
}
function Um(e) {
  return mi(e).replace(jm, "%3D")
}
function Ym(e) {
  return Ki(e).replace(Wc, "%23").replace(Fm, "%3F")
}
function Km(e) {
  return e == null ? "" : Ym(e).replace(Rm, "%2F")
}
function Bs(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function Xm(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const a = r[s].replace(qc, " "),
      i = a.indexOf("="),
      l = Bs(i < 0 ? a : a.slice(0, i)),
      o = i < 0 ? null : Bs(a.slice(i + 1))
    if (l in t) {
      let f = t[l]
      Ut(f) || (f = t[l] = [f]), f.push(o)
    } else t[l] = o
  }
  return t
}
function gu(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = Um(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Ut(r) ? r.map((a) => a && mi(a)) : [r && mi(r)]).forEach((a) => {
      a !== void 0 &&
        ((t += (t.length ? "&" : "") + n), a != null && (t += "=" + a))
    })
  }
  return t
}
function Jm(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = Ut(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r)
  }
  return t
}
const Zm = Symbol(""),
  vu = Symbol(""),
  la = Symbol(""),
  Xc = Symbol(""),
  bi = Symbol("")
function Br() {
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
            ? l(_r(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : Em(p)
                ? l(_r(2, { from: t, to: p }))
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
        if (Qm(l)) {
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
              const c = am(f) ? f.default : f
              a.components[i] = c
              const g = (c.__vccOpts || c)[t]
              return g && kn(g, n, r, a, i)()
            }),
          )
        }
    }
  return s
}
function Qm(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function mu(e) {
  const t = ht(la),
    n = ht(Xc),
    r = me(() => t.resolve(we(e.to))),
    s = me(() => {
      const { matched: o } = r.value,
        { length: f } = o,
        c = o[f - 1],
        p = n.matched
      if (!c || !p.length) return -1
      const g = p.findIndex(Er.bind(null, c))
      if (g > -1) return g
      const b = bu(o[f - 2])
      return f > 1 && bu(c) === b && p[p.length - 1].path !== b
        ? p.findIndex(Er.bind(null, o[f - 2]))
        : g
    }),
    a = me(() => s.value > -1 && r1(n.params, r.value.params)),
    i = me(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Fc(n.params, r.value.params),
    )
  function l(o = {}) {
    return n1(o)
      ? t[we(e.replace) ? "replace" : "push"](we(e.to)).catch(Gr)
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
const e1 = Bt({
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
    useLink: mu,
    setup(e, { slots: t }) {
      const n = Zr(mu(e)),
        { options: r } = ht(la),
        s = me(() => ({
          [yu(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [yu(
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
  t1 = e1
function n1(e) {
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
function r1(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!Ut(s) || s.length !== r.length || r.some((a, i) => a !== s[i]))
      return !1
  }
  return !0
}
function bu(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const yu = (e, t, n) => e ?? t ?? n,
  s1 = Bt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ht(bi),
        s = me(() => e.route || r.value),
        a = ht(vu, 0),
        i = me(() => {
          let f = we(a)
          const { matched: c } = s.value
          let p
          for (; (p = c[f]) && !p.components; ) f++
          return f
        }),
        l = me(() => s.value.matched[i.value])
      Ft(
        vu,
        me(() => i.value + 1),
      ),
        Ft(Zm, l),
        Ft(bi, s)
      const o = te()
      return (
        An(
          () => [o.value, l.value, e.name],
          ([f, c, p], [g, b, k]) => {
            c &&
              ((c.instances[p] = f),
              b &&
                b !== c &&
                f &&
                f === g &&
                (c.leaveGuards.size || (c.leaveGuards = b.leaveGuards),
                c.updateGuards.size || (c.updateGuards = b.updateGuards))),
              f &&
                c &&
                (!b || !Er(c, b) || !g) &&
                (c.enterCallbacks[p] || []).forEach((m) => m(f))
          },
          { flush: "post" },
        ),
        () => {
          const f = s.value,
            c = e.name,
            p = l.value,
            g = p && p.components[c]
          if (!g) return wu(n.default, { Component: g, route: f })
          const b = p.props[c],
            k = b
              ? b === !0
                ? f.params
                : typeof b == "function"
                  ? b(f)
                  : b
              : null,
            E = Ue(
              g,
              qe({}, k, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (p.instances[c] = null)
                },
                ref: o,
              }),
            )
          return wu(n.default, { Component: E, route: f }) || E
        }
      )
    },
  })
function wu(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const a1 = s1
function i1(e) {
  const t = Am(e.routes, e),
    n = e.parseQuery || Xm,
    r = e.stringifyQuery || gu,
    s = e.history,
    a = Br(),
    i = Br(),
    l = Br(),
    o = W0(En)
  let f = En
  hr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const c = Va.bind(null, (R) => "" + R),
    p = Va.bind(null, Km),
    g = Va.bind(null, Bs)
  function b(R, le) {
    let ne, pe
    return (
      Hc(R) ? ((ne = t.getRecordMatcher(R)), (pe = le)) : (pe = R),
      t.addRoute(pe, ne)
    )
  }
  function k(R) {
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
      const C = Wa(n, R, le.path),
        B = t.resolve({ path: C.path }, le),
        H = s.createHref(C.fullPath)
      return qe(C, B, {
        params: g(B.params),
        hash: Bs(C.hash),
        redirectedFrom: void 0,
        href: H,
      })
    }
    let ne
    if ("path" in R) ne = qe({}, R, { path: Wa(n, R.path, le.path).path })
    else {
      const C = qe({}, R.params)
      for (const B in C) C[B] == null && delete C[B]
      ;(ne = qe({}, R, { params: p(C) })), (le.params = p(le.params))
    }
    const pe = t.resolve(ne, le),
      Re = R.hash || ""
    pe.params = c(g(pe.params))
    const Je = om(r, qe({}, R, { hash: qm(Re), path: pe.path })),
      S = s.createHref(Je)
    return qe(
      { fullPath: Je, hash: Re, query: r === gu ? Jm(R.query) : R.query || {} },
      pe,
      { redirectedFrom: void 0, href: S },
    )
  }
  function x(R) {
    return typeof R == "string" ? Wa(n, R, o.value.path) : qe({}, R)
  }
  function w(R, le) {
    if (f !== R) return _r(8, { from: le, to: R })
  }
  function M(R) {
    return re(R)
  }
  function z(R) {
    return M(qe(x(R), { replace: !0 }))
  }
  function I(R) {
    const le = R.matched[R.matched.length - 1]
    if (le && le.redirect) {
      const { redirect: ne } = le
      let pe = typeof ne == "function" ? ne(R) : ne
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
  function re(R, le) {
    const ne = (f = T(R)),
      pe = o.value,
      Re = R.state,
      Je = R.force,
      S = R.replace === !0,
      C = I(ne)
    if (C)
      return re(
        qe(x(C), {
          state: typeof C == "object" ? qe({}, Re, C.state) : Re,
          force: Je,
          replace: S,
        }),
        le || ne,
      )
    const B = ne
    B.redirectedFrom = le
    let H
    return (
      !Je &&
        um(r, pe, ne) &&
        ((H = _r(16, { to: B, from: pe })), tt(pe, pe, !0, !1)),
      (H ? Promise.resolve(H) : D(B, pe))
        .catch((j) => (sn(j) ? (sn(j, 2) ? j : Pe(j)) : V(j, B, pe)))
        .then((j) => {
          if (j) {
            if (sn(j, 2))
              return re(
                qe({ replace: S }, x(j.to), {
                  state: typeof j.to == "object" ? qe({}, Re, j.to.state) : Re,
                  force: Je,
                }),
                le || B,
              )
          } else j = ge(B, pe, !0, S, Re)
          return Q(B, pe, j), j
        })
    )
  }
  function q(R, le) {
    const ne = w(R, le)
    return ne ? Promise.reject(ne) : Promise.resolve()
  }
  function G(R) {
    const le = Rt.values().next().value
    return le && typeof le.runWithContext == "function"
      ? le.runWithContext(R)
      : R()
  }
  function D(R, le) {
    let ne
    const [pe, Re, Je] = l1(R, le)
    ne = qa(pe.reverse(), "beforeRouteLeave", R, le)
    for (const C of pe)
      C.leaveGuards.forEach((B) => {
        ne.push(kn(B, R, le))
      })
    const S = q.bind(null, R, le)
    return (
      ne.push(S),
      it(ne)
        .then(() => {
          ne = []
          for (const C of a.list()) ne.push(kn(C, R, le))
          return ne.push(S), it(ne)
        })
        .then(() => {
          ne = qa(Re, "beforeRouteUpdate", R, le)
          for (const C of Re)
            C.updateGuards.forEach((B) => {
              ne.push(kn(B, R, le))
            })
          return ne.push(S), it(ne)
        })
        .then(() => {
          ne = []
          for (const C of Je)
            if (C.beforeEnter)
              if (Ut(C.beforeEnter))
                for (const B of C.beforeEnter) ne.push(kn(B, R, le))
              else ne.push(kn(C.beforeEnter, R, le))
          return ne.push(S), it(ne)
        })
        .then(
          () => (
            R.matched.forEach((C) => (C.enterCallbacks = {})),
            (ne = qa(Je, "beforeRouteEnter", R, le)),
            ne.push(S),
            it(ne)
          ),
        )
        .then(() => {
          ne = []
          for (const C of i.list()) ne.push(kn(C, R, le))
          return ne.push(S), it(ne)
        })
        .catch((C) => (sn(C, 8) ? C : Promise.reject(C)))
    )
  }
  function Q(R, le, ne) {
    l.list().forEach((pe) => G(() => pe(R, le, ne)))
  }
  function ge(R, le, ne, pe, Re) {
    const Je = w(R, le)
    if (Je) return Je
    const S = le === En,
      C = hr ? history.state : {}
    ne &&
      (pe || S
        ? s.replace(R.fullPath, qe({ scroll: S && C && C.scroll }, Re))
        : s.push(R.fullPath, Re)),
      (o.value = R),
      tt(R, le, ne, S),
      Pe()
  }
  let X
  function xe() {
    X ||
      (X = s.listen((R, le, ne) => {
        if (!Ct.listening) return
        const pe = T(R),
          Re = I(pe)
        if (Re) {
          re(qe(Re, { replace: !0 }), pe).catch(Gr)
          return
        }
        f = pe
        const Je = o.value
        hr && mm(lu(Je.fullPath, ne.delta), ia()),
          D(pe, Je)
            .catch((S) =>
              sn(S, 12)
                ? S
                : sn(S, 2)
                  ? (re(S.to, pe)
                      .then((C) => {
                        sn(C, 20) &&
                          !ne.delta &&
                          ne.type === Jr.pop &&
                          s.go(-1, !1)
                      })
                      .catch(Gr),
                    Promise.reject())
                  : (ne.delta && s.go(-ne.delta, !1), V(S, pe, Je)),
            )
            .then((S) => {
              ;(S = S || ge(pe, Je, !1)),
                S &&
                  (ne.delta && !sn(S, 8)
                    ? s.go(-ne.delta, !1)
                    : ne.type === Jr.pop && sn(S, 20) && s.go(-1, !1)),
                Q(pe, Je, S)
            })
            .catch(Gr)
      }))
  }
  let Ce = Br(),
    F = Br(),
    oe
  function V(R, le, ne) {
    Pe(R)
    const pe = F.list()
    return (
      pe.length ? pe.forEach((Re) => Re(R, le, ne)) : console.error(R),
      Promise.reject(R)
    )
  }
  function Ye() {
    return oe && o.value !== En
      ? Promise.resolve()
      : new Promise((R, le) => {
          Ce.add([R, le])
        })
  }
  function Pe(R) {
    return (
      oe ||
        ((oe = !R),
        xe(),
        Ce.list().forEach(([le, ne]) => (R ? ne(R) : le())),
        Ce.reset()),
      R
    )
  }
  function tt(R, le, ne, pe) {
    const { scrollBehavior: Re } = e
    if (!hr || !Re) return Promise.resolve()
    const Je =
      (!ne && bm(lu(R.fullPath, 0))) ||
      ((pe || !ne) && history.state && history.state.scroll) ||
      null
    return Ys()
      .then(() => Re(R, le, Je))
      .then((S) => S && vm(S))
      .catch((S) => V(S, R, le))
  }
  const nt = (R) => s.go(R)
  let Yt
  const Rt = new Set(),
    Ct = {
      currentRoute: o,
      listening: !0,
      addRoute: b,
      removeRoute: k,
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
        R.component("RouterLink", t1),
          R.component("RouterView", a1),
          (R.config.globalProperties.$router = le),
          Object.defineProperty(R.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => we(o),
          }),
          hr &&
            !Yt &&
            o.value === En &&
            ((Yt = !0), M(s.location).catch((Re) => {}))
        const ne = {}
        for (const Re in En)
          Object.defineProperty(ne, Re, {
            get: () => o.value[Re],
            enumerable: !0,
          })
        R.provide(la, le), R.provide(Xc, Yu(ne)), R.provide(bi, o)
        const pe = R.unmount
        Rt.add(R),
          (R.unmount = function () {
            Rt.delete(R),
              Rt.size < 1 &&
                ((f = En),
                X && X(),
                (X = null),
                (o.value = En),
                (Yt = !1),
                (oe = !1)),
              pe()
          })
      },
    }
  function it(R) {
    return R.reduce((le, ne) => le.then(() => G(ne)), Promise.resolve())
  }
  return Ct
}
function l1(e, t) {
  const n = [],
    r = [],
    s = [],
    a = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < a; i++) {
    const l = t.matched[i]
    l && (e.matched.find((f) => Er(f, l)) ? r.push(l) : n.push(l))
    const o = e.matched[i]
    o && (t.matched.find((f) => Er(f, o)) || s.push(o))
  }
  return [n, r, s]
}
function o1() {
  return ht(la)
}
var ys = {
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
const u1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
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
          ...ys,
          width: n || ys.width,
          height: n || ys.height,
          stroke: a || ys.stroke,
          "stroke-width": s ? (Number(r) * 24) / Number(n) : r,
          ...o,
          class: ["lucide", `lucide-${u1(e)}`],
          ...l,
        },
        [...t.map((c) => Ue(...c)), ...(f.default ? [f.default()] : [])],
      )
const xu = gt("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
const c1 = gt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
const d1 = gt("CloudDrizzleIcon", [
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
const f1 = gt("CloudSunIcon", [
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
const p1 = gt("EyeIcon", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
])
const h1 = gt("FrameIcon", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }],
])
const g1 = gt("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
const v1 = gt("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
const m1 = gt("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
const b1 = gt("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
const y1 = gt("PencilRulerIcon", [
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
const w1 = gt("RabbitIcon", [
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
const Ps = gt("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
const x1 = gt("SunIcon", [
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
const Ua = gt("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
const S1 = gt("TurtleIcon", [
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
const yi = gt("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  er = (e) => (Js("data-v-e6afc4f6"), (e = e()), Zs(), e),
  E1 = { class: "flex justify-center p-5 gap-5 content-center" },
  _1 = er(() => v("div", { class: "w-1/12" }, null, -1)),
  C1 = { class: "flex justify-between gap-2 w-full content-center" },
  T1 = { class: "flex gap-1 p-2" },
  P1 = { class: "flex gap-5 p-2 relative" },
  k1 = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  $1 = er(() => v("b", null, "Art and Animation", -1)),
  M1 = [$1],
  I1 = { class: "flex gap-5 content-center" },
  O1 = { class: "lg:hidden flex" },
  A1 = { class: "flex gap-1 p-2" },
  L1 = { class: "flex flex-col gap-2 p-2" },
  z1 = { class: "flex justify-between" },
  B1 = er(() => v("div", { class: "w-1/12" }, null, -1)),
  N1 = { class: "flex justify-between items-center" },
  R1 = { class: "flex gap-1 p-2" },
  j1 = er(() => v("li", { class: "py-2 px-3 rounded" }, "Contact", -1)),
  F1 = [j1],
  D1 = er(() => v("li", { class: "py-2 px-3 rounded" }, "Web Portfolio", -1)),
  H1 = [D1],
  G1 = er(() => v("li", { class: "py-2 px-3 rounded" }, "Web Services", -1)),
  V1 = [G1],
  W1 = Cc(
    '<li class="py-2 px-3 rounded opacity-75" data-v-e6afc4f6>Creative Projects</li><ul class="ml-5" data-v-e6afc4f6><li class="py-2 px-3 rounded" data-v-e6afc4f6>Art and Animation</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Custom Software</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Cooking and Recipes</li></ul>',
    2,
  ),
  q1 = er(() => v("li", { class: "py-2 px-3 rounded" }, "About Me", -1)),
  U1 = [q1],
  Y1 = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = te(5),
        r = t,
        s = o1(),
        a = (f) => {
          ;(n.value = f.target.value), r("update:brightness", n.value)
          let c = "--swiper-navigation-color",
            p = "--swiper-pagination-color",
            g = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(c, g),
            document.documentElement.style.setProperty(p, g)
        }
      yt(() => {
        let f = window.localStorage
        if (f.getItem("brightness")) {
          n.value = Number(f.getItem("brightness"))
          let c = "--swiper-navigation-color",
            p = "--swiper-pagination-color",
            g = {
              1: "#FB923C",
              2: "#F97316",
              3: "#D97706",
              4: "#10B981",
              5: "#047857",
            }[n.value]
          document.documentElement.style.setProperty(c, g),
            document.documentElement.style.setProperty(p, g)
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
        se(),
        Ee(
          Qe,
          null,
          [
            v("div", E1, [
              _1,
              v(
                "div",
                {
                  class: A([
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
                  v("div", C1, [
                    v("div", T1, [
                      he(
                        we(Ua),
                        {
                          class: A({
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
                      v(
                        "p",
                        {
                          class: A([
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
                    v("div", P1, [
                      v(
                        "a",
                        {
                          onClick:
                            c[0] ||
                            (c[0] = (p) => f.$router.push("/portfolio")),
                          class: "cursor-pointer",
                        },
                        [
                          v(
                            "h6",
                            {
                              class: A([
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
                      v(
                        "a",
                        {
                          onClick: c[1] || (c[1] = (p) => f.$router.push("/")),
                        },
                        [
                          v(
                            "h6",
                            {
                              class: A([
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
                        we(gi),
                        { class: "relative inline-block text-left" },
                        {
                          default: Xe(() => [
                            he(
                              we(ru),
                              {
                                "aria-label": "Creative projects dropdown menu",
                                class: A([
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
                                  he(we(c1)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            he(
                              we(su),
                              {
                                class: A([
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
                                  v("div", k1, [
                                    v(
                                      "a",
                                      {
                                        href: "https://hansenstudios.art/",
                                        class: A([
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
                                      M1,
                                      2,
                                    ),
                                    v(
                                      "a",
                                      {
                                        href: "#",
                                        class: A([
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
                                    v(
                                      "a",
                                      {
                                        href: "#",
                                        class: A([
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
                                    v(
                                      "a",
                                      {
                                        href: "#",
                                        class: A([
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
                      v(
                        "a",
                        {
                          onClick:
                            c[2] || (c[2] = (p) => f.$router.push("/about-me")),
                        },
                        [
                          v(
                            "h6",
                            {
                              class: A([
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
                    v("div", I1, [
                      v(
                        "a",
                        {
                          onClick:
                            c[3] || (c[3] = (p) => f.$router.push("/contact")),
                        },
                        [
                          v(
                            "button",
                            {
                              class: A([
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
              v(
                "div",
                {
                  id: "headerRightColumn",
                  class: A([
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
                  v("div", O1, [
                    v("div", A1, [
                      he(
                        we(Ua),
                        {
                          class: A({
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
                      v(
                        "p",
                        {
                          class: A([
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
                    we(v1),
                    {
                      class: A([
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
                  he(we(gi), null, {
                    default: Xe(() => [
                      he(
                        we(ru),
                        {
                          "aria-label": "Toggle brightness dropdown menu",
                          class: A([
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
                              ? (se(),
                                De(we(x1), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (se(),
                                  De(we(f1), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (se(),
                                    De(we(d1), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (se(),
                                      De(we(b1), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (se(),
                                      De(we(m1), {
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
                        we(su),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: Xe(() => [
                            v("div", L1, [
                              v("div", z1, [
                                cc(
                                  v(
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
                                  [[yv, n.value]],
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
              B1,
            ]),
            v(
              "div",
              {
                id: "mobileMenu",
                class: A([
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
                v("div", N1, [
                  v("div", R1, [
                    he(
                      we(Ua),
                      {
                        class: A({
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
                    v(
                      "p",
                      {
                        class: A([
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
                    we(yi),
                    {
                      class: A({
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
                v(
                  "ul",
                  {
                    class: A([
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
                    v(
                      "a",
                      { onClick: c[7] || (c[7] = (p) => o("/contact")) },
                      F1,
                    ),
                    v(
                      "a",
                      { onClick: c[8] || (c[8] = (p) => o("/portfolio")) },
                      H1,
                    ),
                    v("a", { onClick: c[9] || (c[9] = (p) => o("/")) }, V1),
                    W1,
                    v(
                      "a",
                      { onClick: c[10] || (c[10] = (p) => o("/about-me")) },
                      U1,
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
  K1 = Rn(Y1, [["__scopeId", "data-v-e6afc4f6"]]),
  X1 = { class: "flex justify-center py-5 flex-col" },
  J1 = { class: "inline-block relative" },
  Z1 = { class: "font-semibold text-center px-1" },
  Q1 = { class: "flex py-5 justify-center gap-3 w-full" },
  eb = { href: "/portfolio" },
  tb = { href: "/pricing" },
  nb = {
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
  rb = Object.assign(nb, {
    __name: "Hero",
    props: { brightness: Number },
    setup(e) {
      const t = te([
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
      let n = te(0),
        r = te(!1)
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
          Nn(() => {
            window.removeEventListener("mousedown", a),
              window.removeEventListener("mouseup", i)
          })
      }),
        Fi(() => {
          r.value = !1
        })
      const s = me(() => t.value[n.value])
      return (a, i) => {
        const l = ig("typewriter")
        return (
          se(),
          Ee("div", X1, [
            v(
              "h1",
              {
                class: A([
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
                v("div", J1, [
                  cc((se(), Ee("span", Z1, [Ie(kt(s.value), 1)])), [
                    [l, s.value],
                  ]),
                  v(
                    "div",
                    {
                      class: A([
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
            v(
              "p",
              {
                class: A([
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
            v("div", Q1, [
              v("a", eb, [
                v(
                  "button",
                  {
                    "aria-label": "View my portfolio",
                    class: A([
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
              v("a", tb, [
                v(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    class: A([
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
function Su(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  )
}
function Xi(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Su(t[n]) && Su(e[n]) && Object.keys(t[n]).length > 0 && Xi(e[n], t[n])
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
function un() {
  const e = typeof document < "u" ? document : {}
  return Xi(e, Zc), e
}
const sb = {
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
  return Xi(e, sb), e
}
function ab(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  )
}
function ib(e) {
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
function wi(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function Ns() {
  return Date.now()
}
function lb(e) {
  const t = Nt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function ob(e, t) {
  t === void 0 && (t = "x")
  const n = Nt()
  let r, s, a
  const i = lb(e)
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
function ws(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  )
}
function ub(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function At() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"]
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !ub(r)) {
      const s = Object.keys(Object(r)).filter((a) => t.indexOf(a) < 0)
      for (let a = 0, i = s.length; a < i; a += 1) {
        const l = s[a],
          o = Object.getOwnPropertyDescriptor(r, l)
        o !== void 0 &&
          o.enumerable &&
          (ws(e[l]) && ws(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : At(e[l], r[l])
            : !ws(e[l]) && ws(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : At(e[l], r[l]))
              : (e[l] = r[l]))
      }
    }
  }
  return e
}
function xs(e, t, n) {
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
    c = (g, b) => (f === "next" && g >= b) || (f === "prev" && g <= b),
    p = () => {
      ;(l = new Date().getTime()), i === null && (i = l)
      const g = Math.max(Math.min((l - i) / o, 1), 0),
        b = 0.5 - Math.cos(g * Math.PI) / 2
      let k = a + b * (n - a)
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
function Rs(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function js(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : ab(t))), n
}
function cb(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function db(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function Mn(e, t) {
  return Nt().getComputedStyle(e, null).getPropertyValue(t)
}
function Fs(e) {
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
function xi(e, t, n) {
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
let Ya
function fb() {
  const e = Nt(),
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
function td() {
  return Ya || (Ya = fb()), Ya
}
let Ka
function pb(e) {
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
    g = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    b = s === "Win32"
  let k = s === "MacIntel"
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
      k &&
      n.touch &&
      m.indexOf(`${l}x${o}`) >= 0 &&
      ((c = a.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (k = !1)),
    f && !b && ((i.os = "android"), (i.android = !0)),
    (c || g || p) && ((i.os = "ios"), (i.ios = !0)),
    i
  )
}
function hb(e) {
  return e === void 0 && (e = {}), Ka || (Ka = pb(e)), Ka
}
let Xa
function gb() {
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
function vb() {
  return Xa || (Xa = gb()), Xa
}
function mb(e) {
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
            const { width: g, height: b } = t
            let k = g,
              m = b
            p.forEach((E) => {
              let { contentBoxSize: T, contentRect: x, target: w } = E
              ;(w && w !== t.el) ||
                ((k = x ? x.width : (T[0] || T).inlineSize),
                (m = x ? x.height : (T[0] || T).blockSize))
            }),
              (k !== g || m !== b) && l()
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
function bb(e) {
  let { swiper: t, extendParams: n, on: r, emit: s } = e
  const a = [],
    i = Nt(),
    l = function (c, p) {
      p === void 0 && (p = {})
      const g = i.MutationObserver || i.WebkitMutationObserver,
        b = new g((k) => {
          if (t.__preventObserver__) return
          if (k.length === 1) {
            s("observerUpdate", k[0])
            return
          }
          const m = function () {
            s("observerUpdate", k[0])
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
var yb = {
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
function wb() {
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
        parseInt(Mn(r, "padding-left") || 0, 10) -
        parseInt(Mn(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Mn(r, "padding-top") || 0, 10) -
        parseInt(Mn(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function xb() {
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
  const b = [],
    k = []
  let m = n.slidesOffsetBefore
  typeof m == "function" && (m = n.slidesOffsetBefore.call(e))
  let E = n.slidesOffsetAfter
  typeof E == "function" && (E = n.slidesOffsetAfter.call(e))
  const T = e.snapGrid.length,
    x = e.slidesGrid.length
  let w = n.spaceBetween,
    M = -m,
    z = 0,
    I = 0
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
      (xs(r, "--swiper-centered-offset-before", ""),
      xs(r, "--swiper-centered-offset-after", ""))
  const re = n.grid && n.grid.rows > 1 && e.grid
  re ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
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
      re && e.grid.updateSlide(D, Q, c),
      !(c[D] && Mn(Q, "display") === "none"))
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
          q = e.isHorizontal() ? xi(Q, "width", !0) : xi(Q, "height", !0)
        else {
          const Ce = t(ge, "width"),
            F = t(ge, "padding-left"),
            oe = t(ge, "padding-right"),
            V = t(ge, "margin-left"),
            Ye = t(ge, "margin-right"),
            Pe = ge.getPropertyValue("box-sizing")
          if (Pe && Pe === "border-box") q = Ce + V + Ye
          else {
            const { clientWidth: tt, offsetWidth: nt } = Q
            q = Ce + F + oe + V + Ye + (nt - tt)
          }
        }
        X && (Q.style.transform = X),
          xe && (Q.style.webkitTransform = xe),
          n.roundLengths && (q = Math.floor(q))
      } else
        (q = (a - (n.slidesPerView - 1) * w) / n.slidesPerView),
          n.roundLengths && (q = Math.floor(q)),
          c[D] && (c[D].style[e.getDirectionLabel("width")] = `${q}px`)
      c[D] && (c[D].swiperSlideSize = q),
        k.push(q),
        n.centeredSlides
          ? ((M = M + q / 2 + z / 2 + w),
            z === 0 && D !== 0 && (M = M - a / 2 - w),
            D === 0 && (M = M - a / 2 - w),
            Math.abs(M) < 1 / 1e3 && (M = 0),
            n.roundLengths && (M = Math.floor(M)),
            I % n.slidesPerGroup === 0 && g.push(M),
            b.push(M))
          : (n.roundLengths && (M = Math.floor(M)),
            (I - Math.min(e.params.slidesPerGroupSkip, I)) %
              e.params.slidesPerGroup ===
              0 && g.push(M),
            b.push(M),
            (M = M + q + w)),
        (e.virtualSize += q + w),
        (z = q),
        (I += 1)
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
    re && e.grid.updateWrapperSize(q, g),
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
    const D = k[0] + w
    if (n.slidesPerGroup > 1) {
      const Q = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        ge = D * n.slidesPerGroup
      for (let X = 0; X < Q; X += 1) g.push(g[g.length - 1] + ge)
    }
    for (let Q = 0; Q < e.virtual.slidesBefore + e.virtual.slidesAfter; Q += 1)
      n.slidesPerGroup === 1 && g.push(g[g.length - 1] + D),
        b.push(b[b.length - 1] + D),
        (e.virtualSize += D)
  }
  if ((g.length === 0 && (g = [0]), w !== 0)) {
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
    k.forEach((ge) => {
      D += ge + (w || 0)
    }),
      (D -= w)
    const Q = D - a
    g = g.map((ge) => (ge <= 0 ? -m : ge > Q ? Q + E : ge))
  }
  if (n.centerInsufficientSlides) {
    let D = 0
    if (
      (k.forEach((Q) => {
        D += Q + (w || 0)
      }),
      (D -= w),
      D < a)
    ) {
      const Q = (a - D) / 2
      g.forEach((ge, X) => {
        g[X] = ge - Q
      }),
        b.forEach((ge, X) => {
          b[X] = ge + Q
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: g,
      slidesGrid: b,
      slidesSizesGrid: k,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    xs(r, "--swiper-centered-offset-before", `${-g[0]}px`),
      xs(
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
function Sb(e) {
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
function Eb() {
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
function _b(e) {
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
      b = -(i - c),
      k = b + t.slidesSizesGrid[o],
      m = b >= 0 && b <= t.size - t.slidesSizesGrid[o]
    ;((b >= 0 && b < t.size - 1) ||
      (k > 1 && k <= t.size) ||
      (b <= 0 && k >= t.size)) &&
      (t.visibleSlides.push(f),
      t.visibleSlidesIndexes.push(o),
      r[o].classList.add(n.slideVisibleClass)),
      m && r[o].classList.add(n.slideFullyVisibleClass),
      (f.progress = s ? -p : p),
      (f.originalProgress = s ? -g : g)
  }
}
function Cb(e) {
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
      b = t.slidesGrid[p],
      k = t.slidesGrid[t.slidesGrid.length - 1],
      m = Math.abs(e)
    m >= g ? (l = (m - g) / k) : (l = (m + k - b) / k), l > 1 && (l -= 1)
  }
  Object.assign(t, { progress: s, progressLoop: l, isBeginning: a, isEnd: i }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !o && t.emit("reachBeginning toEdge"),
    i && !f && t.emit("reachEnd toEdge"),
    ((o && !a) || (f && !i)) && t.emit("fromEdge"),
    t.emit("progress", s)
}
function Tb() {
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
      : ((c = db(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !c && (c = t[0]),
        c && c.classList.add(n.slideNextClass),
        (f = cb(o, `.${n.slideClass}, swiper-slide`)[0]),
        n.loop && !f === 0 && (f = t[t.length - 1]),
        f && f.classList.add(n.slidePrevClass))),
    e.emitSlidesClasses()
}
const ks = (e, t) => {
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
  Ja = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  Si = (e) => {
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
          l.includes(o.column) && Ja(e, f)
        })
      return
    }
    const a = s + r - 1
    if (e.params.rewind || e.params.loop)
      for (let i = s - t; i <= a + t; i += 1) {
        const l = ((i % n) + n) % n
        ;(l < s || l > a) && Ja(e, l)
      }
    else
      for (let i = Math.max(s - t, 0); i <= Math.min(a + t, n - 1); i += 1)
        i !== s && (i > a || i < s) && Ja(e, i)
  }
function Pb(e) {
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
function kb(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: s, activeIndex: a, realIndex: i, snapIndex: l } = t
  let o = e,
    f
  const c = (b) => {
    let k = b - t.virtual.slidesBefore
    return (
      k < 0 && (k = t.virtual.slides.length + k),
      k >= t.virtual.slides.length && (k -= t.virtual.slides.length),
      k
    )
  }
  if ((typeof o > "u" && (o = Pb(t)), r.indexOf(n) >= 0)) f = r.indexOf(n)
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
  let g
  if (t.virtual && s.virtual.enabled && s.loop) g = c(o)
  else if (p) {
    const b = t.slides.filter((m) => m.column === o)[0]
    let k = parseInt(b.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN(k) && (k = Math.max(t.slides.indexOf(b), 0)),
      (g = Math.floor(k / s.grid.rows))
  } else if (t.slides[o]) {
    const b = t.slides[o].getAttribute("data-swiper-slide-index")
    b ? (g = parseInt(b, 10)) : (g = o)
  } else g = o
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: f,
    previousRealIndex: i,
    realIndex: g,
    previousIndex: a,
    activeIndex: o,
  }),
    t.initialized && Si(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (i !== g && t.emit("realIndexChange"), t.emit("slideChange"))
}
function $b(e, t) {
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
var Mb = {
  updateSize: wb,
  updateSlides: xb,
  updateAutoHeight: Sb,
  updateSlidesOffset: Eb,
  updateSlidesProgress: _b,
  updateProgress: Cb,
  updateSlidesClasses: Tb,
  updateActiveIndex: kb,
  updateClickedSlide: $b,
}
function Ib(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: r, translate: s, wrapperEl: a } = t
  if (n.virtualTranslate) return r ? -s : s
  if (n.cssMode) return s
  let i = ob(a, e)
  return (i += t.cssOverflowAdjustment()), r && (i = -i), i || 0
}
function Ob(e, t) {
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
function Ab() {
  return -this.snapGrid[0]
}
function Lb() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function zb(e, t, n, r, s) {
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
var Bb = {
  getTranslate: Ib,
  setTranslate: Ob,
  minTranslate: Ab,
  maxTranslate: Lb,
  translateTo: zb,
}
function Nb(e, t) {
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
function Rb(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    nd({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function jb(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      nd({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var Fb = { setTransition: Nb, transitionStart: Rb, transitionEnd: jb }
function Db(e, t, n, r, s) {
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
    wrapperEl: b,
    enabled: k,
  } = a
  if ((a.animating && l.preventInteractionOnTransition) || (!k && !r && !s))
    return !1
  const m = Math.min(a.params.slidesPerGroupSkip, i)
  let E = m + Math.floor((i - m) / a.params.slidesPerGroup)
  E >= o.length && (E = o.length - 1)
  const T = -o[E]
  if (l.normalizeSlideIndex)
    for (let w = 0; w < f.length; w += 1) {
      const M = -Math.floor(T * 100),
        z = Math.floor(f[w] * 100),
        I = Math.floor(f[w + 1] * 100)
      typeof f[w + 1] < "u"
        ? M >= z && M < I - (I - z) / 2
          ? (i = w)
          : M >= z && M < I && (i = w + 1)
        : M >= z && (i = w)
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
  let x
  if (
    (i > p ? (x = "next") : i < p ? (x = "prev") : (x = "reset"),
    (g && -T === a.translate) || (!g && T === a.translate))
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
      M = g ? T : -T
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
function Hb(e, t, n, r) {
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
          (b) => b.getAttribute("data-swiper-slide-index") * 1 === g,
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
          (b) => b.getAttribute("data-swiper-slide-index") * 1 === g,
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
function Gb(e, t, n) {
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
function Vb(e, t, n) {
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
  const b = g(p),
    k = a.map((T) => g(T))
  let m = a[k.indexOf(b) - 1]
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
function Wb(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const r = this
  return r.slideTo(r.activeIndex, e, t, n)
}
function qb(e, t, n, r) {
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
function Ub() {
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
            wi(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
        : s > e.slides.length - r
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              Qt(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            wi(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
  } else e.slideTo(s)
}
var Yb = {
  slideTo: Db,
  slideToLoop: Hb,
  slideNext: Gb,
  slidePrev: Vb,
  slideReset: Wb,
  slideToClosest: qb,
  slideToClickedSlide: Ub,
}
function Kb(e) {
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
          ? js("swiper-slide", [n.slideBlankClass])
          : js("div", [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(g)
      }
    }
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = i - (t.slides.length % i)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      Rs(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    s()
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      Rs(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    s()
  } else s()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  })
}
function Xb(e) {
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
      params: b,
    } = o,
    { centeredSlides: k } = b
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
      k && m % 2 === 0 && (m = m + 1))
  const E = b.slidesPerGroupAuto ? m : b.slidesPerGroup
  let T = E
  T % E !== 0 && (T += E - (T % E)),
    (T += b.loopAdditionalSlides),
    (o.loopedSlides = T)
  const x = o.grid && b.grid && b.grid.rows > 1
  f.length < m + T
    ? Rs(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : x &&
      b.grid.fill === "row" &&
      Rs(
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
  const I = r === "next" || !r,
    re = r === "prev" || !r
  let q = 0,
    G = 0
  const D = x ? Math.ceil(f.length / b.grid.rows) : f.length,
    ge = (x ? f[a].column : a) + (k && typeof s > "u" ? -m / 2 + 0.5 : 0)
  if (ge < T) {
    q = Math.max(T - ge, E)
    for (let X = 0; X < T - ge; X += 1) {
      const xe = X - Math.floor(X / D) * D
      if (x) {
        const Ce = D - xe - 1
        for (let F = f.length - 1; F >= 0; F -= 1)
          f[F].column === Ce && w.push(F)
      } else w.push(D - xe - 1)
    }
  } else if (ge + m > D - T) {
    G = Math.max(ge - (D - T * 2), E)
    for (let X = 0; X < G; X += 1) {
      const xe = X - Math.floor(X / D) * D
      x
        ? f.forEach((Ce, F) => {
            Ce.column === xe && M.push(F)
          })
        : M.push(xe)
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1
    }),
    re &&
      w.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          g.prepend(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    I &&
      M.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          g.append(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    o.recalcSlides(),
    b.slidesPerView === "auto"
      ? o.updateSlides()
      : x &&
        ((w.length > 0 && re) || (M.length > 0 && I)) &&
        o.slides.forEach((X, xe) => {
          o.grid.updateSlide(xe, X, o.slides)
        }),
    b.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (w.length > 0 && re) {
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
    } else if (M.length > 0 && I)
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
      ? o.controller.control.forEach((xe) => {
          !xe.destroyed &&
            xe.params.loop &&
            xe.loopFix({
              ...X,
              slideTo: xe.params.slidesPerView === b.slidesPerView ? n : !1,
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
function Jb() {
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
var Zb = { loopCreate: Kb, loopFix: Xb, loopDestroy: Jb }
function Qb(e) {
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
function e2() {
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
var t2 = { setGrabCursor: Qb, unsetGrabCursor: e2 }
function n2(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === un() || r === Nt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const s = r.closest(e)
    return !s && !r.getRootNode ? null : s || n(r.getRootNode().host)
  }
  return n(t)
}
function Eu(e, t, n) {
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
function r2(e) {
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
    Eu(t, r, r.targetTouches[0].pageX)
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
  if (a.noSwiping && (g ? n2(p, o) : o.closest(p))) {
    t.allowClick = !0
    return
  }
  if (a.swipeHandler && !o.closest(a.swipeHandler)) return
  ;(i.currentX = r.pageX), (i.currentY = r.pageY)
  const b = i.currentX,
    k = i.currentY
  if (!Eu(t, r, b)) return
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (i.startX = b),
    (i.startY = k),
    (s.touchStartTime = Ns()),
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
function s2(e) {
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
        (r.touchStartTime = Ns()))
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
    b = a.currentY - a.startY
  if (n.params.threshold && Math.sqrt(g ** 2 + b ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > "u") {
    let I
    ;(n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (r.isScrolling = !1)
      : g * g + b * b >= 25 &&
        ((I = (Math.atan2(Math.abs(b), Math.abs(g)) * 180) / Math.PI),
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
  let k = n.isHorizontal() ? g : b,
    m = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY
  s.oneWayMovement &&
    ((k = Math.abs(k) * (i ? 1 : -1)), (m = Math.abs(m) * (i ? 1 : -1))),
    (a.diff = k),
    (k *= s.touchRatio),
    i && ((k = -k), (m = -m))
  const E = n.touchesDirection
  ;(n.swipeDirection = k > 0 ? "prev" : "next"),
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
  let w
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      E !== n.touchesDirection &&
      T &&
      x &&
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
  let M = !0,
    z = s.resistanceRatio
  if (
    (s.touchReleaseOnEdges && (z = 0),
    k > 0
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
              (-n.minTranslate() + r.startTranslate + k) ** z)))
      : k < 0 &&
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
              (n.maxTranslate() - r.startTranslate - k) ** z))),
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
function a2(e) {
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
  const p = Ns(),
    g = p - n.touchStartTime
  if (t.allowClick) {
    const z = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((z && z[0]) || r.target, z),
      t.emit("tap click", r),
      g < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
  }
  if (
    ((n.lastClickTime = Ns()),
    wi(() => {
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
  const k = b >= -t.maxTranslate() && !t.params.loop
  let m = 0,
    E = t.slidesSizesGrid[0]
  for (
    let z = 0;
    z < f.length;
    z += z < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const I = z < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
    typeof f[z + I] < "u"
      ? (k || (b >= f[z] && b < f[z + I])) && ((m = z), (E = f[z + I] - f[z]))
      : (k || b >= f[z]) && ((m = z), (E = f[f.length - 1] - f[f.length - 2]))
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
  if (g > i.longSwipesMs) {
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
function _u() {
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
function i2(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function l2() {
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
function o2(e) {
  const t = this
  ks(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update()
}
function u2() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const rd = (e, t) => {
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
          _u,
          !0,
        )
      : e[f]("observerUpdate", _u, !0),
    s[o]("load", e.onLoad, { capture: !0 })
}
function c2() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = r2.bind(e)),
    (e.onTouchMove = s2.bind(e)),
    (e.onTouchEnd = a2.bind(e)),
    (e.onDocumentTouchStart = u2.bind(e)),
    t.cssMode && (e.onScroll = l2.bind(e)),
    (e.onClick = i2.bind(e)),
    (e.onLoad = o2.bind(e)),
    rd(e, "on")
}
function d2() {
  rd(this, "off")
}
var f2 = { attachEvents: c2, detachEvents: d2 }
const Cu = (e, t) => e.grid && t.grid && t.grid.rows > 1
function p2() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: s } = e,
    a = r.breakpoints
  if (!a || (a && Object.keys(a).length === 0)) return
  const i = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
  if (!i || e.currentBreakpoint === i) return
  const o = (i in a ? a[i] : void 0) || e.originalParams,
    f = Cu(e, r),
    c = Cu(e, o),
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
  const g = o.direction && o.direction !== r.direction,
    b = r.loop && (o.slidesPerView !== r.slidesPerView || g),
    k = r.loop
  g && n && e.changeDirection(), At(e.params, o)
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
        : !k && E
          ? (e.loopCreate(t), e.updateSlides())
          : k && !E && e.loopDestroy()),
    e.emit("breakpoint", o)
}
function h2(e, t, n) {
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
var g2 = { setBreakpoint: p2, getBreakpoint: h2 }
function v2(e, t) {
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
function m2() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: s, device: a } = e,
    i = v2(
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
function b2() {
  const e = this,
    { el: t, classNames: n } = e
  t.classList.remove(...n), e.emitContainerClasses()
}
var y2 = { addClasses: m2, removeClasses: b2 }
function w2() {
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
var x2 = { checkOverflow: w2 },
  Ei = {
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
function S2(e, t) {
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
const Za = {
    eventsEmitter: yb,
    update: Mb,
    translate: Bb,
    transition: Fb,
    slide: Yb,
    loop: Zb,
    grabCursor: t2,
    events: f2,
    breakpoints: g2,
    checkOverflow: x2,
    classes: y2,
  },
  Qa = {}
let Ji = class an {
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
    const i = un()
    if (
      n.el &&
      typeof n.el == "string" &&
      i.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        i.querySelectorAll(n.el).forEach((p) => {
          const g = At({}, n, { el: p })
          c.push(new an(g))
        }),
        c
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = td()),
      (l.device = hb({ userAgent: n.userAgent })),
      (l.browser = vb()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules)
    const o = {}
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: S2(n, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const f = At({}, Ei, o)
    return (
      (l.params = At({}, f, Qa, n)),
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
      s = Qt(n, `.${r.slideClass}, swiper-slide`),
      a = Fs(s[0])
    return Fs(t) - a
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
      for (let b = f + 1; b < a.length; b += 1)
        a[b] && !g && ((p += a[b].swiperSlideSize), (c += 1), p > o && (g = !0))
      for (let b = f - 1; b >= 0; b -= 1)
        a[b] && !g && ((p += a[b].swiperSlideSize), (c += 1), p > o && (g = !0))
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
        i.complete && ks(t, i)
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
        ((i = js("div", n.params.wrapperClass)),
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
        rtl: r.dir.toLowerCase() === "rtl" || Mn(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Mn(r, "direction") === "rtl"),
        wrongRTL: Mn(i, "display") === "-webkit-box",
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
          ? ks(n, a)
          : a.addEventListener("load", (i) => {
              ks(n, i.target)
            })
      }),
      Si(n),
      (n.initialized = !0),
      Si(n),
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
        t !== !1 && ((r.el.swiper = null), ib(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    At(Qa, t)
  }
  static get extendedDefaults() {
    return Qa
  }
  static get defaults() {
    return Ei
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
Object.keys(Za).forEach((e) => {
  Object.keys(Za[e]).forEach((t) => {
    Ji.prototype[t] = Za[e][t]
  })
})
Ji.use([mb, bb])
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
function Jn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  )
}
function yr(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Jn(t[r]) && Jn(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : yr(e[r], t[r])
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
function E2(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  )
}
function _2(e) {
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
      scrollbar: b,
      virtual: k,
      thumbs: m,
    } = t
  let E, T, x, w, M, z, I, re
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
      g &&
      !g.prevEl &&
      !g.nextEl &&
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
    (c.loop && !r.loop ? (z = !0) : !c.loop && r.loop ? (I = !0) : (re = !0)),
    f.forEach((G) => {
      if (Jn(c[G]) && Jn(r[G]))
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
    s.includes("children") && n && c.loop && (re = !0),
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
      g.init(),
      g.update()),
    s.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    s.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    s.includes("direction") && t.changeDirection(r.direction, !1),
    (z || re) && t.loopDestroy(),
    (I || re) && t.loopCreate(),
    t.update()
}
function Tu(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    s = {}
  yr(n, Ei), (n._emitClasses = !0), (n.init = !1)
  const a = {},
    i = sd.map((o) => o.replace(/_/, "")),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((o) => {
      typeof e[o] > "u" ||
        (i.indexOf(o) >= 0
          ? Jn(e[o])
            ? ((n[o] = {}), (s[o] = {}), yr(n[o], e[o]), yr(s[o], e[o]))
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
function C2(e, t) {
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
function T2(e, t, n, r, s) {
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
          if (Jn(e[o]) && Jn(t[o])) {
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
const P2 = (e) => {
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
function ei(e, t, n) {
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
function k2(e, t, n) {
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
const $2 = {
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
        i = te("swiper"),
        l = te(null),
        o = te(!1),
        f = te(!1),
        c = te(null),
        p = te(null),
        g = te(null),
        b = { value: [] },
        k = { value: [] },
        m = te(null),
        E = te(null),
        T = te(null),
        x = te(null),
        { params: w, passedParams: M } = Tu(e, !1)
      ei(n, b, k), (g.value = M), (k.value = b.value)
      const z = () => {
        ei(n, b, k), (o.value = !0)
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
      const I = { ...w }
      if (
        (delete I.wrapperClass,
        (p.value = new Ji(I)),
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
        yr(p.value.params.virtual, q), yr(p.value.originalParams.virtual, q)
      }
      Di(() => {
        !f.value && p.value && (p.value.emitSlidesClasses(), (f.value = !0))
        const { passedParams: q } = Tu(e, !1),
          G = T2(q, g.value, b.value, k.value, (D) => D.props && D.props.key)
        ;(g.value = q),
          (G.length || o.value) &&
            p.value &&
            !p.value.destroyed &&
            _2({
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
        Ft("swiper", p),
        An(l, () => {
          Ys(() => {
            P2(p.value)
          })
        }),
        yt(() => {
          c.value &&
            (C2(
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
        Hi(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        })
      function re(q) {
        return w.virtual
          ? k2(p, q, l.value)
          : (q.forEach((G, D) => {
              G.props || (G.props = {}),
                (G.props.swiperRef = p),
                (G.props.swiperSlideIndex = D)
            }),
            q)
      }
      return () => {
        const { slides: q, slots: G } = ei(n, b, k)
        return Ue(s, { ref: c, class: od(i.value) }, [
          G["container-start"],
          Ue(a, { class: E2(w.wrapperClass) }, [
            G["wrapper-start"],
            re(q),
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
  M2 = {
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
        a = te(null),
        i = te("swiper-slide"),
        l = te(!1)
      function o(p, g, b) {
        g === a.value && (i.value = b)
      }
      yt(() => {
        !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
      }),
        Fi(() => {
          r || !s || !s.value || (s.value.on("_slideClass", o), (r = !0))
        }),
        Di(() => {
          !a.value ||
            !s ||
            !s.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (a.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed &&
              i.value !== "swiper-slide" &&
              (i.value = "swiper-slide"))
        }),
        Hi(() => {
          !s || !s.value || s.value.off("_slideClass", o)
        })
      const f = me(() => ({
        isActive: i.value.indexOf("swiper-slide-active") >= 0,
        isVisible: i.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: i.value.indexOf("swiper-slide-prev") >= 0,
        isNext: i.value.indexOf("swiper-slide-next") >= 0,
      }))
      Ft("swiperSlide", f)
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
          let a = Qt(e.el, `.${r[s]}`)[0]
          a || ((a = js("div", r[s])), (a.className = r[s]), e.el.append(a)),
            (n[s] = a),
            (t[s] = a)
        }
      }),
    n
  )
}
function I2(e) {
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
  function g() {
    let { nextEl: m, prevEl: E } = t.navigation
    ;(m = a(m)), (E = a(E))
    const T = (x, w) => {
      x.removeEventListener("click", w === "next" ? c : f),
        x.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    m.forEach((x) => T(x, "next")), E.forEach((x) => T(x, "prev"))
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
    k = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        g()
    }
  Object.assign(t.navigation, {
    enable: b,
    disable: k,
    update: o,
    init: p,
    destroy: g,
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
function O2(e) {
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
    const w = x.target.closest(Nr(t.params.pagination.bulletClass))
    if (!w) return
    x.preventDefault()
    const M = Fs(w) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === M) return
      t.slideToLoop(M)
    } else t.slideTo(M)
  }
  function g() {
    const x = t.rtl,
      w = t.params.pagination
    if (f()) return
    let M = t.pagination.el
    M = o(M)
    let z, I
    const re =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      q = t.params.loop
        ? Math.ceil(re / t.params.slidesPerGroup)
        : t.snapGrid.length
    if (
      (t.params.loop
        ? ((I = t.previousRealIndex || 0),
          (z =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((z = t.snapIndex), (I = t.previousSnapIndex))
          : ((I = t.previousIndex || 0), (z = t.activeIndex || 0)),
      w.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const G = t.pagination.bullets
      let D, Q, ge
      if (
        (w.dynamicBullets &&
          ((i = xi(G[0], t.isHorizontal() ? "width" : "height", !0)),
          M.forEach((X) => {
            X.style[t.isHorizontal() ? "width" : "height"] =
              `${i * (w.dynamicMainBullets + 4)}px`
          }),
          w.dynamicMainBullets > 1 &&
            I !== void 0 &&
            ((l += z - (I || 0)),
            l > w.dynamicMainBullets - 1
              ? (l = w.dynamicMainBullets - 1)
              : l < 0 && (l = 0)),
          (D = Math.max(z - l, 0)),
          (Q = D + (Math.min(G.length, w.dynamicMainBullets) - 1)),
          (ge = (Q + D) / 2)),
        G.forEach((X) => {
          const xe = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (Ce) => `${w.bulletActiveClass}${Ce}`,
            ),
          ]
            .map((Ce) =>
              typeof Ce == "string" && Ce.includes(" ") ? Ce.split(" ") : Ce,
            )
            .flat()
          X.classList.remove(...xe)
        }),
        M.length > 1)
      )
        G.forEach((X) => {
          const xe = Fs(X)
          xe === z
            ? X.classList.add(...w.bulletActiveClass.split(" "))
            : t.isElement && X.setAttribute("part", "bullet"),
            w.dynamicBullets &&
              (xe >= D &&
                xe <= Q &&
                X.classList.add(...`${w.bulletActiveClass}-main`.split(" ")),
              xe === D && c(X, "prev"),
              xe === Q && c(X, "next"))
        })
      else {
        const X = G[z]
        if (
          (X && X.classList.add(...w.bulletActiveClass.split(" ")),
          t.isElement &&
            G.forEach((xe, Ce) => {
              xe.setAttribute("part", Ce === z ? "bullet-active" : "bullet")
            }),
          w.dynamicBullets)
        ) {
          const xe = G[D],
            Ce = G[Q]
          for (let F = D; F <= Q; F += 1)
            G[F] &&
              G[F].classList.add(...`${w.bulletActiveClass}-main`.split(" "))
          c(xe, "prev"), c(Ce, "next")
        }
      }
      if (w.dynamicBullets) {
        const X = Math.min(G.length, w.dynamicMainBullets + 4),
          xe = (i * X - i) / 2 - ge * i,
          Ce = x ? "right" : "left"
        G.forEach((F) => {
          F.style[t.isHorizontal() ? Ce : "top"] = `${xe}px`
        })
      }
    }
    M.forEach((G, D) => {
      if (
        (w.type === "fraction" &&
          (G.querySelectorAll(Nr(w.currentClass)).forEach((Q) => {
            Q.textContent = w.formatFractionCurrent(z + 1)
          }),
          G.querySelectorAll(Nr(w.totalClass)).forEach((Q) => {
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
          xe = 1
        Q === "horizontal" ? (X = ge) : (xe = ge),
          G.querySelectorAll(Nr(w.progressbarFillClass)).forEach((Ce) => {
            ;(Ce.style.transform = `translate3d(0,0,0) scaleX(${X}) scaleY(${xe})`),
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
      let I = t.params.loop
        ? Math.ceil(w / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && I > w && (I = w)
      for (let re = 0; re < I; re += 1)
        x.renderBullet
          ? (z += x.renderBullet.call(t, re, x.bulletClass))
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
      M.forEach((I) => {
        x.type !== "custom" && (I.innerHTML = z || ""),
          x.type === "bullets" &&
            t.pagination.bullets.push(...I.querySelectorAll(Nr(x.bulletClass)))
      }),
      x.type !== "custom" && s("paginationRender", M[0])
  }
  function k() {
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
      t.params.pagination.enabled === !1 ? T() : (k(), b(), g())
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && g()
    }),
    r("snapIndexChange", () => {
      g()
    }),
    r("snapGridLengthChange", () => {
      b(), g()
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
      g()
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
        const I = z[0].classList.contains(t.params.pagination.hiddenClass)
        s(I === !0 ? "paginationShow" : "paginationHide"),
          z.forEach((re) =>
            re.classList.toggle(t.params.pagination.hiddenClass),
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
        k(),
        b(),
        g()
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
    update: g,
    init: k,
    destroy: m,
  })
}
function A2(e) {
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
    b,
    k,
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
      t.autoplay.paused ? (g = !0) : g && ((f = c), (g = !1))
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
          ? (V = t.slides.filter((Pe) =>
              Pe.classList.contains("swiper-slide-active"),
            )[0])
          : (V = t.slides[t.activeIndex]),
        V ? parseInt(V.getAttribute("data-swiper-autoplay"), 10) : void 0
      )
    },
    I = (V) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(l), M()
      let Ye = typeof V > "u" ? t.params.autoplay.delay : V
      ;(o = t.params.autoplay.delay), (f = t.params.autoplay.delay)
      const Pe = z()
      !Number.isNaN(Pe) &&
        Pe > 0 &&
        typeof V > "u" &&
        ((Ye = Pe), (o = Pe), (f = Pe)),
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
                I()
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
    re = () => {
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
    G = (V, Ye) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(i), V || (T = !0)
      const Pe = () => {
        s("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", w)
            : D()
      }
      if (((t.autoplay.paused = !0), Ye)) {
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
      const V = un()
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
    xe = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", ge),
        t.el.addEventListener("pointerleave", X))
    },
    Ce = () => {
      t.el.removeEventListener("pointerenter", ge),
        t.el.removeEventListener("pointerleave", X)
    },
    F = () => {
      un().addEventListener("visibilitychange", Q)
    },
    oe = () => {
      un().removeEventListener("visibilitychange", Q)
    }
  r("init", () => {
    t.params.autoplay.enabled && (xe(), F(), re())
  }),
    r("destroy", () => {
      Ce(), oe(), t.autoplay.running && q()
    }),
    r("_freeModeStaticRelease", () => {
      ;(k || T) && D()
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? q() : G(!0, !0)
    }),
    r("beforeTransitionStart", (V, Ye, Pe) => {
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
        ;(b = !0),
          (k = !1),
          (T = !1),
          (m = setTimeout(() => {
            ;(T = !0), (k = !0), G(!0)
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
          ;(k = !1), (b = !1)
          return
        }
        k && t.params.cssMode && D(), (k = !1), (b = !1)
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (E = !0)
    }),
    Object.assign(t.autoplay, { start: re, stop: q, pause: G, resume: D })
}
const L2 = { class: "prose text-center" },
  z2 = v("br", null, null, -1),
  B2 = { href: "/pricing" },
  N2 = { id: "cta" },
  ts = {
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
                let b = p.getElementsByTagName("input")
                for (let E = 0; E < b.length; E++) b[E].style.display = "none"
                let k = p.getElementsByTagName("textarea")[0]
                k.style.display = "none"
                let m = document.getElementById("submitButton")
                m.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        se(),
        Ee(
          "div",
          {
            class: A([
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
            v("div", L2, [
              v(
                "h4",
                { class: A(["text-2xl", t(e.brightness)]) },
                [
                  Ie(" Piqued your interest?"),
                  z2,
                  Ie(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              v("a", B2, [
                v(
                  "button",
                  {
                    "aria-label":
                      "View service pricing for an existing website",
                    "aria-": "",
                    class: A([
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
              v(
                "h4",
                { class: A(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              v("form", N2, [
                v("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: A(["rounded p-2 w-full", n]),
                }),
                v("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: A(["rounded p-2 w-full mt-3", n]),
                }),
                v("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: A(["rounded p-2 w-full mt-3", n]),
                }),
                v(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    "aria-label": "Submit a contact form",
                    onClick: r,
                    class: A([
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
  R2 = {
    class:
      "flex w-full gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-between",
  },
  j2 = ["href"],
  F2 = { class: "hidden md:hidden lg:block" },
  D2 = ["href"],
  H2 = ["src", "alt"],
  G2 = ["src", "alt"],
  V2 = Cc(
    '<div id="lightbox" class="fixed inset-0 flex items-center justify-center z-50 hidden" style="background-color:rgba(0, 0, 0, 0.3);" data-v-4d27a375><div class="bg-white p-5 rounded shadow-lg" data-v-4d27a375><img id="lightbox-img" src="" alt="Lightbox Image" class="w-full h-auto" data-v-4d27a375><div class="flex justify-center" data-v-4d27a375><p class="text-sm text-gray-500 mt-2" id="lightbox-caption" data-v-4d27a375></p></div><button id="lightbox-close" style="top:30%;" class="absolute right-0 m-2 text-3xl text-orange-400" data-v-4d27a375> × </button></div></div>',
    1,
  ),
  W2 = { class: "block md:block lg:hidden py-6" },
  q2 = { class: "grid grid-cols-2 gap-4" },
  U2 = ["src", "alt"],
  Y2 = { class: "flex justify-center pt-6" },
  K2 = {
    __name: "sliderAndGallery",
    props: {
      brightness: Number,
      images: Array,
      captions: Array,
      link: String,
      title: String,
    },
    setup(e) {
      const t = te([]),
        n = [A2, O2, I2],
        r = e,
        s = te(""),
        a = te(""),
        i = te([]),
        l = (c) => {
          if (c >= 4) return "text-slate-800"
          if (c == 3) return "text-slate-200"
          if (c == 2) return "text-slate-300"
          if (c == 1) return "text-slate-300"
        },
        o = () => {
          const c = document.getElementById("lightbox"),
            p = document.getElementById("lightbox-img"),
            g = document.getElementById("lightbox-close"),
            b = document.querySelectorAll(".lightbox"),
            k = document.getElementById("lightbox-caption")
          b.forEach((m) => {
            m.addEventListener("click", () => {
              ;(p.src = m.src),
                (k.textContent = m.alt),
                c.classList.remove("hidden")
            })
          }),
            g.addEventListener("click", () => {
              c.classList.add("hidden")
            })
        }
      yt(() => {
        ;(t.value = r.captions),
          (s.value = r.link),
          (a.value = r.title),
          (i.value = r.images),
          Ys(() => {
            o()
          })
      })
      const f = (c) => {
        let p = s.value == "" ? "text-center w-full " : ""
        return (p = p + l(c)), p
      }
      return (c, p) => (
        se(),
        Ee(
          "div",
          {
            class: A([
              "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4",
              s.value == "",
            ]),
          },
          [
            v("div", R2, [
              v(
                "h2",
                {
                  class: A([
                    "text-5xl text-center text-semibold",
                    f(r.brightness),
                  ]),
                },
                kt(a.value),
                3,
              ),
              s.value != ""
                ? (se(),
                  Ee(
                    "a",
                    { key: 0, href: s.value },
                    [
                      v(
                        "button",
                        {
                          class: A([
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
                    j2,
                  ))
                : st("", !0),
            ]),
            v("div", F2, [
              he(
                we($2),
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
                    (se(!0),
                    Ee(
                      Qe,
                      null,
                      Ln(
                        i.value,
                        (g, b) => (
                          se(),
                          De(
                            we(M2),
                            { class: "image-container", key: b },
                            {
                              default: Xe(() => [
                                s.value != ""
                                  ? (se(),
                                    Ee(
                                      "a",
                                      { key: 0, href: s.value },
                                      [
                                        v(
                                          "img",
                                          {
                                            src: g,
                                            alt: t.value[b],
                                            class:
                                              "bg-slate-200 object-contain w-full rounded-xl",
                                          },
                                          null,
                                          8,
                                          H2,
                                        ),
                                      ],
                                      8,
                                      D2,
                                    ))
                                  : st("", !0),
                                s.value == ""
                                  ? (se(),
                                    Ee(
                                      "img",
                                      {
                                        key: 1,
                                        src: g,
                                        alt: t.value[b],
                                        class:
                                          "bg-slate-200 object-contain w-full rounded-xl",
                                      },
                                      null,
                                      8,
                                      G2,
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
            V2,
            v("div", W2, [
              v("div", q2, [
                (se(!0),
                Ee(
                  Qe,
                  null,
                  Ln(
                    i.value,
                    (g, b) => (
                      se(),
                      Ee("div", { class: "image-container", key: b }, [
                        v(
                          "img",
                          {
                            src: g,
                            alt: t.value[b],
                            class:
                              "bg-slate-200 object-contain w-full rounded lightbox",
                          },
                          null,
                          8,
                          U2,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
            ]),
            v(
              "div",
              { class: A([f(r.brightness), "prose pt-6"]) },
              [tn(c.$slots, "default", {}, void 0, !0)],
              2,
            ),
            v(
              "hr",
              {
                class: A([
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
            v("div", Y2, [
              he(ts, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ],
          2,
        )
      )
    },
  },
  jn = Rn(K2, [["__scopeId", "data-v-4d27a375"]]),
  Zi =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  cd =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  dd =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  Qi =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  el =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  tl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  nl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  rl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  sl =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  al =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  X2 =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843749607.webp",
  J2 =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843736104.webp",
  Z2 =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843718572.webp",
  Q2 =
    "https://images.josephhansen.dev/uploads/file2024-02-0121-1706843702718.webp",
  ey =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898383454.webp",
  ty =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898390608.webp",
  ny =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898397404.webp",
  ry =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706899554221.webp",
  sy = { class: "px-3 text-center" },
  ay = v(
    "p",
    null,
    " Whether you need a design overhaul, a modernization, a rebranding, or a new website design completely, I'm your guy! I have extensive graphic design and UI/UX experience. I minored in Visual Communication, and I love making websites beautiful. Don't just take my word for it though, here's what a UX professional has to say: ",
    -1,
  ),
  iy = v(
    "p",
    null,
    " Joseph is a good friend of mine from school. We worked closely on many projects with both pursuing degrees in design. He can design anything. This is not an exaggeration. I personally struggled to learn new design tools and manipulate pixels the way I wanted them to be. Joseph just did it. He is incredible. ...I would recommend him to anyone with utmost confidence that he will surpass all expectations. ",
    -1,
  ),
  ly = { class: "text-right italic text-sm mb-0 pb-0" },
  oy = v(
    "p",
    { class: "text-right italic text-sm mt-0 pt-0" },
    " Senior Product Designer at nCino ",
    -1,
  ),
  uy = "",
  cy = "Web Design",
  dy = {
    __name: "PanelWebDesign",
    props: { brightness: Number },
    setup(e) {
      const t = (s) => {
          if (s >= 4) return "text-slate-800"
          if (s == 3) return "text-slate-200"
          if (s == 2) return "text-slate-300"
          if (s == 1) return "text-slate-300"
        },
        n = te([Zi, tl, sl, Qi, dd, rl, nl, el, cd, al]),
        r = te([
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
        se(),
        De(
          jn,
          {
            images: n.value,
            captions: r.value,
            link: uy,
            title: cy,
            brightness: e.brightness,
          },
          {
            default: Xe(() => [
              tn(s.$slots, "default", {}, () => [
                v(
                  "h2",
                  { class: A(["text-3xl mb-1", t(e.brightness)]) },
                  " I've designed dozens of websites. ",
                  2,
                ),
                v("div", sy, [
                  ay,
                  v(
                    "div",
                    {
                      class: A([
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
                      iy,
                      v("p", ly, [
                        v("b", null, [
                          v(
                            "a",
                            {
                              class: A([t(e.brightness), "font-bold"]),
                              href: "https://www.linkedin.com/in/nathanwesjones/",
                            },
                            "Nathan Jones",
                            2,
                          ),
                        ]),
                      ]),
                      oy,
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
  il = (e) => (Js("data-v-a259bda2"), (e = e()), Zs(), e),
  fy = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  py = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  hy = il(() =>
    v(
      "div",
      { class: "image-container" },
      [
        v("img", {
          src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706989687978.webp",
          alt: "Screenshot of GalaxyIT Pricing Calculator",
          class: "bg-slate-200 object-contain w-full rounded-xl",
        }),
      ],
      -1,
    ),
  ),
  gy = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  vy = { href: "https://galaxyit.com/savings-calculator/" },
  my = il(() =>
    v(
      "div",
      { class: "image-container" },
      [
        v("img", {
          src: "https://images.josephhansen.dev/uploads/file2024-02-0313-1706990008524.webp",
          alt: "Screenshot of Build on Your Land dynamic showroom hours",
          class: "bg-slate-200 object-contain w-full rounded-xl",
        }),
      ],
      -1,
    ),
  ),
  by = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  yy = { href: "https://www.buildonyourlandllc.com/" },
  wy = il(() =>
    v(
      "div",
      { class: "image-container" },
      [
        v("img", {
          src: "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
          alt: "Screenshot of BlenderNation Bazaar",
          class: "bg-slate-200 object-contain w-full rounded-xl",
        }),
      ],
      -1,
    ),
  ),
  xy = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  Sy = { href: "https://bazaar.blendernation.com" },
  Ey = {
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
        se(),
        Ee("div", fy, [
          v("div", py, [
            v(
              "h2",
              { class: A(["text-3xl mb-1", t(e.brightness)]) },
              " Need a custom pricing calculator? ",
              2,
            ),
            hy,
            v("div", gy, [
              v(
                "h3",
                { class: A(["text-xl m-0", t(e.brightness)]) },
                " I can do that! Check out this one I made for GalaxyIT: ",
                2,
              ),
              v("a", vy, [
                v(
                  "button",
                  {
                    class: A([
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
            v(
              "h2",
              { class: A(["text-3xl mb-1", t(e.brightness)]) },
              " What about dynamic hours? ",
              2,
            ),
            my,
            v("div", by, [
              v(
                "h3",
                { class: A(["text-xl m-0", t(e.brightness)]) },
                " Been there, done that: ",
                2,
              ),
              v("a", yy, [
                v(
                  "button",
                  {
                    class: A([
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
            v(
              "h2",
              { class: A(["text-3xl mb-1", t(e.brightness)]) },
              " Maybe you need a complex WordPress theme built from scratch? ",
              2,
            ),
            wy,
            v("div", xy, [
              v(
                "h3",
                { class: A(["text-xl m-0", t(e.brightness)]) },
                " No sweat - let's make it happen! ",
                2,
              ),
              v("a", Sy, [
                v(
                  "button",
                  {
                    class: A([
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
            v(
              "h2",
              { class: A(["text-5xl mb-1", t(e.brightness)]) },
              " No matter how complex your problem may be, I can fix it. ",
              2,
            ),
            v(
              "p",
              { class: A(t(e.brightness)) },
              " I've been working on websites for over a decade, and I can do custom development for you in pretty much any language you can throw my way. Let me worry about automations, algorithims, integrations, and all that other stuff that is distracting you from your business. I'll take your problems off your plate and develop a solution. ",
              2,
            ),
          ]),
          v("hr", { class: A([t(e.brightness), "my-8"]) }, null, 2),
          he(ts, { brightness: e.brightness }, null, 8, ["brightness"]),
        ])
      )
    },
  },
  _y = Rn(Ey, [["__scopeId", "data-v-a259bda2"]])
var Cy =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {}
function Ty(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var fd = { exports: {} }
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(Cy, function () {
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
      b = function (u) {
        if (u.length < 2) return null
        var d = u.length - 1
        return g(u[d]) == "string" ? u[d].toLowerCase() : null
      },
      k = Math.PI,
      m = {
        clip_rgb: s,
        limit: n,
        type: f,
        unpack: p,
        last: b,
        PI: k,
        TWOPI: k * 2,
        PITHIRD: k / 3,
        DEG2RAD: k / 180,
        RAD2DEG: 180 / k,
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
        var P = T(d),
          $ = !1
        if (!P) {
          ;($ = !0),
            M.sorted ||
              ((M.autodetect = M.autodetect.sort(function (W, ie) {
                return ie.p - W.p
              })),
              (M.sorted = !0))
          for (var _ = 0, O = M.autodetect; _ < O.length; _ += 1) {
            var L = O[_]
            if (((P = L.test.apply(L, d)), P)) break
          }
        }
        if (M.format[P]) {
          var N = M.format[P].apply(null, $ ? d : d.slice(0, -1))
          y._rgb = x(N)
        } else throw new Error("unknown format: " + d)
        y._rgb.length === 3 && y._rgb.push(1)
      }
    z.prototype.toString = function () {
      return w(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var I = z,
      re = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(re.Color, [null].concat(u)))()
      }
    ;(re.Color = I), (re.version = "2.4.2")
    var q = re,
      G = m.unpack,
      D = Math.max,
      Q = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = G(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2]
        ;(y = y / 255), (P = P / 255), ($ = $ / 255)
        var _ = 1 - D(y, D(P, $)),
          O = _ < 1 ? 1 / (1 - _) : 0,
          L = (1 - y - _) * O,
          N = (1 - P - _) * O,
          W = (1 - $ - _) * O
        return [L, N, W, _]
      },
      ge = Q,
      X = m.unpack,
      xe = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = X(u, "cmyk")
        var h = u[0],
          y = u[1],
          P = u[2],
          $ = u[3],
          _ = u.length > 4 ? u[4] : 1
        return $ === 1
          ? [0, 0, 0, _]
          : [
              h >= 1 ? 0 : 255 * (1 - h) * (1 - $),
              y >= 1 ? 0 : 255 * (1 - y) * (1 - $),
              P >= 1 ? 0 : 255 * (1 - P) * (1 - $),
              _,
            ]
      },
      Ce = xe,
      F = q,
      oe = I,
      V = E,
      Ye = m.unpack,
      Pe = m.type,
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
          if (((u = Ye(u, "cmyk")), Pe(u) === "array" && u.length === 4))
            return "cmyk"
        },
      })
    var nt = m.unpack,
      Yt = m.last,
      Rt = function (u) {
        return Math.round(u * 100) / 100
      },
      Ct = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = nt(u, "hsla"),
          y = Yt(u) || "lsa"
        return (
          (h[0] = Rt(h[0] || 0)),
          (h[1] = Rt(h[1] * 100) + "%"),
          (h[2] = Rt(h[2] * 100) + "%"),
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
          P = u[2]
        ;(h /= 255), (y /= 255), (P /= 255)
        var $ = Math.min(h, y, P),
          _ = Math.max(h, y, P),
          O = (_ + $) / 2,
          L,
          N
        return (
          _ === $
            ? ((L = 0), (N = Number.NaN))
            : (L = O < 0.5 ? (_ - $) / (_ + $) : (_ - $) / (2 - _ - $)),
          h == _
            ? (N = (y - P) / (_ - $))
            : y == _
              ? (N = 2 + (P - h) / (_ - $))
              : P == _ && (N = 4 + (h - y) / (_ - $)),
          (N *= 60),
          N < 0 && (N += 360),
          u.length > 3 && u[3] !== void 0 ? [N, L, O, u[3]] : [N, L, O]
        )
      },
      ne = le,
      pe = m.unpack,
      Re = m.last,
      Je = it,
      S = ne,
      C = Math.round,
      B = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = pe(u, "rgba"),
          y = Re(u) || "rgb"
        return y.substr(0, 3) == "hsl"
          ? Je(S(h), y)
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
          P = d[1],
          $ = d[2],
          _,
          O,
          L
        if (P === 0) _ = O = L = $ * 255
        else {
          var N = [0, 0, 0],
            W = [0, 0, 0],
            ie = $ < 0.5 ? $ * (1 + P) : $ + P - $ * P,
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
            (O = u[1]),
            (L = u[2])
        }
        return d.length > 3 ? [_, O, L, d[3]] : [_, O, L, 1]
      },
      J = ae,
      ee = J,
      U = E,
      ue = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      be =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      ve =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Se =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      ke =
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
          for (var P = d.slice(1, 5), $ = 0; $ < 4; $++) P[$] = +P[$]
          return P
        }
        if ((d = u.match(ve))) {
          for (var _ = d.slice(1, 4), O = 0; O < 3; O++) _[O] = Ke(_[O] * 2.55)
          return (_[3] = 1), _
        }
        if ((d = u.match(Se))) {
          for (var L = d.slice(1, 5), N = 0; N < 3; N++) L[N] = Ke(L[N] * 2.55)
          return (L[3] = +L[3]), L
        }
        if ((d = u.match(ke))) {
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
        Se.test(u) ||
        ke.test(u) ||
        je.test(u)
      )
    }
    var Mt = at,
      vn = q,
      $r = I,
      mn = E,
      ns = m.type,
      Et = H,
      It = Mt
    ;($r.prototype.css = function (u) {
      return Et(this._rgb, u)
    }),
      (vn.css = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          $r,
          [null].concat(u, ["css"]),
        ))()
      }),
      (mn.format.css = It),
      mn.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && ns(u) === "string" && It.test(u)) return "css"
        },
      })
    var Mr = I,
      hd = q,
      gd = E,
      vd = m.unpack
    ;(gd.format.gl = function () {
      for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
      var h = vd(u, "rgba")
      return (h[0] *= 255), (h[1] *= 255), (h[2] *= 255), h
    }),
      (hd.gl = function () {
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
    var md = m.unpack,
      bd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = md(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2],
          _ = Math.min(y, P, $),
          O = Math.max(y, P, $),
          L = O - _,
          N = (L * 100) / 255,
          W = (_ / (255 - L)) * 100,
          ie
        return (
          L === 0
            ? (ie = Number.NaN)
            : (y === O && (ie = (P - $) / L),
              P === O && (ie = 2 + ($ - y) / L),
              $ === O && (ie = 4 + (y - P) / L),
              (ie *= 60),
              ie < 0 && (ie += 360)),
          [ie, N, W]
        )
      },
      yd = bd,
      wd = m.unpack,
      xd = Math.floor,
      Sd = function () {
        for (var u, d, h, y, P, $, _ = [], O = arguments.length; O--; )
          _[O] = arguments[O]
        _ = wd(_, "hcg")
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
          var $e = xd(L),
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
              ;(P = [vt, ze, dt]), (ie = P[0]), (Y = P[1]), (de = P[2])
              break
            case 5:
              ;($ = [dt, ze, Fe]), (ie = $[0]), (Y = $[1]), (de = $[2])
              break
          }
        }
        return [ie, Y, de, _.length > 3 ? _[3] : 1]
      },
      Ed = Sd,
      _d = m.unpack,
      Cd = m.type,
      Td = q,
      ol = I,
      ul = E,
      Pd = yd
    ;(ol.prototype.hcg = function () {
      return Pd(this._rgb)
    }),
      (Td.hcg = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ol,
          [null].concat(u, ["hcg"]),
        ))()
      }),
      (ul.format.hcg = Ed),
      ul.autodetect.push({
        p: 1,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = _d(u, "hcg")), Cd(u) === "array" && u.length === 3))
            return "hcg"
        },
      })
    var kd = m.unpack,
      $d = m.last,
      rs = Math.round,
      Md = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = kd(u, "rgba"),
          y = h[0],
          P = h[1],
          $ = h[2],
          _ = h[3],
          O = $d(u) || "auto"
        _ === void 0 && (_ = 1),
          O === "auto" && (O = _ < 1 ? "rgba" : "rgb"),
          (y = rs(y)),
          (P = rs(P)),
          ($ = rs($))
        var L = (y << 16) | (P << 8) | $,
          N = "000000" + L.toString(16)
        N = N.substr(N.length - 6)
        var W = "0" + rs(_ * 255).toString(16)
        switch (((W = W.substr(W.length - 2)), O.toLowerCase())) {
          case "rgba":
            return "#" + N + W
          case "argb":
            return "#" + W + N
          default:
            return "#" + N
        }
      },
      cl = Md,
      Id = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      Od = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      Ad = function (u) {
        if (u.match(Id)) {
          ;(u.length === 4 || u.length === 7) && (u = u.substr(1)),
            u.length === 3 &&
              ((u = u.split("")), (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2]))
          var d = parseInt(u, 16),
            h = d >> 16,
            y = (d >> 8) & 255,
            P = d & 255
          return [h, y, P, 1]
        }
        if (u.match(Od)) {
          ;(u.length === 5 || u.length === 9) && (u = u.substr(1)),
            u.length === 4 &&
              ((u = u.split("")),
              (u = u[0] + u[0] + u[1] + u[1] + u[2] + u[2] + u[3] + u[3]))
          var $ = parseInt(u, 16),
            _ = ($ >> 24) & 255,
            O = ($ >> 16) & 255,
            L = ($ >> 8) & 255,
            N = Math.round((($ & 255) / 255) * 100) / 100
          return [_, O, L, N]
        }
        throw new Error("unknown hex color: " + u)
      },
      dl = Ad,
      Ld = q,
      fl = I,
      zd = m.type,
      pl = E,
      Bd = cl
    ;(fl.prototype.hex = function (u) {
      return Bd(this._rgb, u)
    }),
      (Ld.hex = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          fl,
          [null].concat(u, ["hex"]),
        ))()
      }),
      (pl.format.hex = dl),
      pl.autodetect.push({
        p: 4,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (
            !d.length &&
            zd(u) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(u.length) >= 0
          )
            return "hex"
        },
      })
    var Nd = m.unpack,
      hl = m.TWOPI,
      Rd = Math.min,
      jd = Math.sqrt,
      Fd = Math.acos,
      Dd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Nd(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2]
        ;(y /= 255), (P /= 255), ($ /= 255)
        var _,
          O = Rd(y, P, $),
          L = (y + P + $) / 3,
          N = L > 0 ? 1 - O / L : 0
        return (
          N === 0
            ? (_ = NaN)
            : ((_ = (y - P + (y - $)) / 2),
              (_ /= jd((y - P) * (y - P) + (y - $) * (P - $))),
              (_ = Fd(_)),
              $ > P && (_ = hl - _),
              (_ /= hl)),
          [_ * 360, N, L]
        )
      },
      Hd = Dd,
      Gd = m.unpack,
      oa = m.limit,
      nr = m.TWOPI,
      ua = m.PITHIRD,
      rr = Math.cos,
      Vd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Gd(u, "hsi")
        var h = u[0],
          y = u[1],
          P = u[2],
          $,
          _,
          O
        return (
          isNaN(h) && (h = 0),
          isNaN(y) && (y = 0),
          h > 360 && (h -= 360),
          h < 0 && (h += 360),
          (h /= 360),
          h < 1 / 3
            ? ((O = (1 - y) / 3),
              ($ = (1 + (y * rr(nr * h)) / rr(ua - nr * h)) / 3),
              (_ = 1 - (O + $)))
            : h < 2 / 3
              ? ((h -= 1 / 3),
                ($ = (1 - y) / 3),
                (_ = (1 + (y * rr(nr * h)) / rr(ua - nr * h)) / 3),
                (O = 1 - ($ + _)))
              : ((h -= 2 / 3),
                (_ = (1 - y) / 3),
                (O = (1 + (y * rr(nr * h)) / rr(ua - nr * h)) / 3),
                ($ = 1 - (_ + O))),
          ($ = oa(P * $ * 3)),
          (_ = oa(P * _ * 3)),
          (O = oa(P * O * 3)),
          [$ * 255, _ * 255, O * 255, u.length > 3 ? u[3] : 1]
        )
      },
      Wd = Vd,
      qd = m.unpack,
      Ud = m.type,
      Yd = q,
      gl = I,
      vl = E,
      Kd = Hd
    ;(gl.prototype.hsi = function () {
      return Kd(this._rgb)
    }),
      (Yd.hsi = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          gl,
          [null].concat(u, ["hsi"]),
        ))()
      }),
      (vl.format.hsi = Wd),
      vl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = qd(u, "hsi")), Ud(u) === "array" && u.length === 3))
            return "hsi"
        },
      })
    var Xd = m.unpack,
      Jd = m.type,
      Zd = q,
      ml = I,
      bl = E,
      Qd = ne
    ;(ml.prototype.hsl = function () {
      return Qd(this._rgb)
    }),
      (Zd.hsl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ml,
          [null].concat(u, ["hsl"]),
        ))()
      }),
      (bl.format.hsl = J),
      bl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Xd(u, "hsl")), Jd(u) === "array" && u.length === 3))
            return "hsl"
        },
      })
    var ef = m.unpack,
      tf = Math.min,
      nf = Math.max,
      rf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = ef(u, "rgb")
        var h = u[0],
          y = u[1],
          P = u[2],
          $ = tf(h, y, P),
          _ = nf(h, y, P),
          O = _ - $,
          L,
          N,
          W
        return (
          (W = _ / 255),
          _ === 0
            ? ((L = Number.NaN), (N = 0))
            : ((N = O / _),
              h === _ && (L = (y - P) / O),
              y === _ && (L = 2 + (P - h) / O),
              P === _ && (L = 4 + (h - y) / O),
              (L *= 60),
              L < 0 && (L += 360)),
          [L, N, W]
        )
      },
      sf = rf,
      af = m.unpack,
      lf = Math.floor,
      of = function () {
        for (var u, d, h, y, P, $, _ = [], O = arguments.length; O--; )
          _[O] = arguments[O]
        _ = af(_, "hsv")
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
          var ce = lf(L),
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
              ;(P = [Fe, Ae, W]), (ie = P[0]), (Y = P[1]), (de = P[2])
              break
            case 5:
              ;($ = [W, Ae, ze]), (ie = $[0]), (Y = $[1]), (de = $[2])
              break
          }
        }
        return [ie, Y, de, _.length > 3 ? _[3] : 1]
      },
      uf = of,
      cf = m.unpack,
      df = m.type,
      ff = q,
      yl = I,
      wl = E,
      pf = sf
    ;(yl.prototype.hsv = function () {
      return pf(this._rgb)
    }),
      (ff.hsv = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          yl,
          [null].concat(u, ["hsv"]),
        ))()
      }),
      (wl.format.hsv = uf),
      wl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = cf(u, "hsv")), df(u) === "array" && u.length === 3))
            return "hsv"
        },
      })
    var ss = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      sr = ss,
      hf = m.unpack,
      xl = Math.pow,
      gf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = hf(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2],
          _ = vf(y, P, $),
          O = _[0],
          L = _[1],
          N = _[2],
          W = 116 * L - 16
        return [W < 0 ? 0 : W, 500 * (O - L), 200 * (L - N)]
      },
      ca = function (u) {
        return (u /= 255) <= 0.04045 ? u / 12.92 : xl((u + 0.055) / 1.055, 2.4)
      },
      da = function (u) {
        return u > sr.t3 ? xl(u, 1 / 3) : u / sr.t2 + sr.t0
      },
      vf = function (u, d, h) {
        ;(u = ca(u)), (d = ca(d)), (h = ca(h))
        var y = da((0.4124564 * u + 0.3575761 * d + 0.1804375 * h) / sr.Xn),
          P = da((0.2126729 * u + 0.7151522 * d + 0.072175 * h) / sr.Yn),
          $ = da((0.0193339 * u + 0.119192 * d + 0.9503041 * h) / sr.Zn)
        return [y, P, $]
      },
      Sl = gf,
      ar = ss,
      mf = m.unpack,
      bf = Math.pow,
      yf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = mf(u, "lab")
        var h = u[0],
          y = u[1],
          P = u[2],
          $,
          _,
          O,
          L,
          N,
          W
        return (
          (_ = (h + 16) / 116),
          ($ = isNaN(y) ? _ : _ + y / 500),
          (O = isNaN(P) ? _ : _ - P / 200),
          (_ = ar.Yn * pa(_)),
          ($ = ar.Xn * pa($)),
          (O = ar.Zn * pa(O)),
          (L = fa(3.2404542 * $ - 1.5371385 * _ - 0.4985314 * O)),
          (N = fa(-0.969266 * $ + 1.8760108 * _ + 0.041556 * O)),
          (W = fa(0.0556434 * $ - 0.2040259 * _ + 1.0572252 * O)),
          [L, N, W, u.length > 3 ? u[3] : 1]
        )
      },
      fa = function (u) {
        return 255 * (u <= 0.00304 ? 12.92 * u : 1.055 * bf(u, 1 / 2.4) - 0.055)
      },
      pa = function (u) {
        return u > ar.t1 ? u * u * u : ar.t2 * (u - ar.t0)
      },
      El = yf,
      wf = m.unpack,
      xf = m.type,
      Sf = q,
      _l = I,
      Cl = E,
      Ef = Sl
    ;(_l.prototype.lab = function () {
      return Ef(this._rgb)
    }),
      (Sf.lab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          _l,
          [null].concat(u, ["lab"]),
        ))()
      }),
      (Cl.format.lab = El),
      Cl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = wf(u, "lab")), xf(u) === "array" && u.length === 3))
            return "lab"
        },
      })
    var _f = m.unpack,
      Cf = m.RAD2DEG,
      Tf = Math.sqrt,
      Pf = Math.atan2,
      kf = Math.round,
      $f = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = _f(u, "lab"),
          y = h[0],
          P = h[1],
          $ = h[2],
          _ = Tf(P * P + $ * $),
          O = (Pf($, P) * Cf + 360) % 360
        return kf(_ * 1e4) === 0 && (O = Number.NaN), [y, _, O]
      },
      Tl = $f,
      Mf = m.unpack,
      If = Sl,
      Of = Tl,
      Af = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Mf(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2],
          _ = If(y, P, $),
          O = _[0],
          L = _[1],
          N = _[2]
        return Of(O, L, N)
      },
      Lf = Af,
      zf = m.unpack,
      Bf = m.DEG2RAD,
      Nf = Math.sin,
      Rf = Math.cos,
      jf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = zf(u, "lch"),
          y = h[0],
          P = h[1],
          $ = h[2]
        return isNaN($) && ($ = 0), ($ = $ * Bf), [y, Rf($) * P, Nf($) * P]
      },
      Pl = jf,
      Ff = m.unpack,
      Df = Pl,
      Hf = El,
      Gf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Ff(u, "lch")
        var h = u[0],
          y = u[1],
          P = u[2],
          $ = Df(h, y, P),
          _ = $[0],
          O = $[1],
          L = $[2],
          N = Hf(_, O, L),
          W = N[0],
          ie = N[1],
          Y = N[2]
        return [W, ie, Y, u.length > 3 ? u[3] : 1]
      },
      kl = Gf,
      Vf = m.unpack,
      Wf = kl,
      qf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Vf(u, "hcl").reverse()
        return Wf.apply(void 0, h)
      },
      Uf = qf,
      Yf = m.unpack,
      Kf = m.type,
      $l = q,
      as = I,
      ha = E,
      Ml = Lf
    ;(as.prototype.lch = function () {
      return Ml(this._rgb)
    }),
      (as.prototype.hcl = function () {
        return Ml(this._rgb).reverse()
      }),
      ($l.lch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          as,
          [null].concat(u, ["lch"]),
        ))()
      }),
      ($l.hcl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          as,
          [null].concat(u, ["hcl"]),
        ))()
      }),
      (ha.format.lch = kl),
      (ha.format.hcl = Uf),
      ["lch", "hcl"].forEach(function (u) {
        return ha.autodetect.push({
          p: 2,
          test: function () {
            for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h]
            if (((d = Yf(d, u)), Kf(d) === "array" && d.length === 3)) return u
          },
        })
      })
    var Xf = {
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
      Il = Xf,
      Jf = I,
      Ol = E,
      Zf = m.type,
      Ir = Il,
      Qf = dl,
      ep = cl
    ;(Jf.prototype.name = function () {
      for (
        var u = ep(this._rgb, "rgb"), d = 0, h = Object.keys(Ir);
        d < h.length;
        d += 1
      ) {
        var y = h[d]
        if (Ir[y] === u) return y.toLowerCase()
      }
      return u
    }),
      (Ol.format.named = function (u) {
        if (((u = u.toLowerCase()), Ir[u])) return Qf(Ir[u])
        throw new Error("unknown color name: " + u)
      }),
      Ol.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && Zf(u) === "string" && Ir[u.toLowerCase()])
            return "named"
        },
      })
    var tp = m.unpack,
      np = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = tp(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2]
        return (y << 16) + (P << 8) + $
      },
      rp = np,
      sp = m.type,
      ap = function (u) {
        if (sp(u) == "number" && u >= 0 && u <= 16777215) {
          var d = u >> 16,
            h = (u >> 8) & 255,
            y = u & 255
          return [d, h, y, 1]
        }
        throw new Error("unknown num color: " + u)
      },
      ip = ap,
      lp = q,
      Al = I,
      Ll = E,
      op = m.type,
      up = rp
    ;(Al.prototype.num = function () {
      return up(this._rgb)
    }),
      (lp.num = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Al,
          [null].concat(u, ["num"]),
        ))()
      }),
      (Ll.format.num = ip),
      Ll.autodetect.push({
        p: 5,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            u.length === 1 &&
            op(u[0]) === "number" &&
            u[0] >= 0 &&
            u[0] <= 16777215
          )
            return "num"
        },
      })
    var cp = q,
      ga = I,
      zl = E,
      Bl = m.unpack,
      Nl = m.type,
      Rl = Math.round
    ;(ga.prototype.rgb = function (u) {
      return (
        u === void 0 && (u = !0),
        u === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Rl)
      )
    }),
      (ga.prototype.rgba = function (u) {
        return (
          u === void 0 && (u = !0),
          this._rgb.slice(0, 4).map(function (d, h) {
            return h < 3 ? (u === !1 ? d : Rl(d)) : d
          })
        )
      }),
      (cp.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          ga,
          [null].concat(u, ["rgb"]),
        ))()
      }),
      (zl.format.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Bl(u, "rgba")
        return h[3] === void 0 && (h[3] = 1), h
      }),
      zl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            ((u = Bl(u, "rgba")),
            Nl(u) === "array" &&
              (u.length === 3 ||
                (u.length === 4 &&
                  Nl(u[3]) == "number" &&
                  u[3] >= 0 &&
                  u[3] <= 1)))
          )
            return "rgb"
        },
      })
    var is = Math.log,
      dp = function (u) {
        var d = u / 100,
          h,
          y,
          P
        return (
          d < 66
            ? ((h = 255),
              (y =
                d < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (y = d - 2) +
                    104.49216199393888 * is(y)),
              (P =
                d < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (P = d - 10) +
                    115.67994401066147 * is(P)))
            : ((h =
                351.97690566805693 +
                0.114206453784165 * (h = d - 55) -
                40.25366309332127 * is(h)),
              (y =
                325.4494125711974 +
                0.07943456536662342 * (y = d - 50) -
                28.0852963507957 * is(y)),
              (P = 255)),
          [h, y, P, 1]
        )
      },
      jl = dp,
      fp = jl,
      pp = m.unpack,
      hp = Math.round,
      gp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        for (
          var h = pp(u, "rgb"),
            y = h[0],
            P = h[2],
            $ = 1e3,
            _ = 4e4,
            O = 0.4,
            L;
          _ - $ > O;

        ) {
          L = (_ + $) * 0.5
          var N = fp(L)
          N[2] / N[0] >= P / y ? (_ = L) : ($ = L)
        }
        return hp(L)
      },
      vp = gp,
      va = q,
      ls = I,
      ma = E,
      mp = vp
    ;(ls.prototype.temp =
      ls.prototype.kelvin =
      ls.prototype.temperature =
        function () {
          return mp(this._rgb)
        }),
      (va.temp =
        va.kelvin =
        va.temperature =
          function () {
            for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
            return new (Function.prototype.bind.apply(
              ls,
              [null].concat(u, ["temp"]),
            ))()
          }),
      (ma.format.temp = ma.format.kelvin = ma.format.temperature = jl)
    var bp = m.unpack,
      ba = Math.cbrt,
      yp = Math.pow,
      wp = Math.sign,
      xp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = bp(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2],
          _ = [ya(y / 255), ya(P / 255), ya($ / 255)],
          O = _[0],
          L = _[1],
          N = _[2],
          W = ba(0.4122214708 * O + 0.5363325363 * L + 0.0514459929 * N),
          ie = ba(0.2119034982 * O + 0.6806995451 * L + 0.1073969566 * N),
          Y = ba(0.0883024619 * O + 0.2817188376 * L + 0.6299787005 * N)
        return [
          0.2104542553 * W + 0.793617785 * ie - 0.0040720468 * Y,
          1.9779984951 * W - 2.428592205 * ie + 0.4505937099 * Y,
          0.0259040371 * W + 0.7827717662 * ie - 0.808675766 * Y,
        ]
      },
      Fl = xp
    function ya(u) {
      var d = Math.abs(u)
      return d < 0.04045
        ? u / 12.92
        : (wp(u) || 1) * yp((d + 0.055) / 1.055, 2.4)
    }
    var Sp = m.unpack,
      os = Math.pow,
      Ep = Math.sign,
      _p = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Sp(u, "lab")
        var h = u[0],
          y = u[1],
          P = u[2],
          $ = os(h + 0.3963377774 * y + 0.2158037573 * P, 3),
          _ = os(h - 0.1055613458 * y - 0.0638541728 * P, 3),
          O = os(h - 0.0894841775 * y - 1.291485548 * P, 3)
        return [
          255 * wa(4.0767416621 * $ - 3.3077115913 * _ + 0.2309699292 * O),
          255 * wa(-1.2684380046 * $ + 2.6097574011 * _ - 0.3413193965 * O),
          255 * wa(-0.0041960863 * $ - 0.7034186147 * _ + 1.707614701 * O),
          u.length > 3 ? u[3] : 1,
        ]
      },
      Dl = _p
    function wa(u) {
      var d = Math.abs(u)
      return d > 0.0031308
        ? (Ep(u) || 1) * (1.055 * os(d, 1 / 2.4) - 0.055)
        : u * 12.92
    }
    var Cp = m.unpack,
      Tp = m.type,
      Pp = q,
      Hl = I,
      Gl = E,
      kp = Fl
    ;(Hl.prototype.oklab = function () {
      return kp(this._rgb)
    }),
      (Pp.oklab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Hl,
          [null].concat(u, ["oklab"]),
        ))()
      }),
      (Gl.format.oklab = Dl),
      Gl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Cp(u, "oklab")), Tp(u) === "array" && u.length === 3))
            return "oklab"
        },
      })
    var $p = m.unpack,
      Mp = Fl,
      Ip = Tl,
      Op = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = $p(u, "rgb"),
          y = h[0],
          P = h[1],
          $ = h[2],
          _ = Mp(y, P, $),
          O = _[0],
          L = _[1],
          N = _[2]
        return Ip(O, L, N)
      },
      Ap = Op,
      Lp = m.unpack,
      zp = Pl,
      Bp = Dl,
      Np = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Lp(u, "lch")
        var h = u[0],
          y = u[1],
          P = u[2],
          $ = zp(h, y, P),
          _ = $[0],
          O = $[1],
          L = $[2],
          N = Bp(_, O, L),
          W = N[0],
          ie = N[1],
          Y = N[2]
        return [W, ie, Y, u.length > 3 ? u[3] : 1]
      },
      Rp = Np,
      jp = m.unpack,
      Fp = m.type,
      Dp = q,
      Vl = I,
      Wl = E,
      Hp = Ap
    ;(Vl.prototype.oklch = function () {
      return Hp(this._rgb)
    }),
      (Dp.oklch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Vl,
          [null].concat(u, ["oklch"]),
        ))()
      }),
      (Wl.format.oklch = Rp),
      Wl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = jp(u, "oklch")), Fp(u) === "array" && u.length === 3))
            return "oklch"
        },
      })
    var ql = I,
      Gp = m.type
    ql.prototype.alpha = function (u, d) {
      return (
        d === void 0 && (d = !1),
        u !== void 0 && Gp(u) === "number"
          ? d
            ? ((this._rgb[3] = u), this)
            : new ql([this._rgb[0], this._rgb[1], this._rgb[2], u], "rgb")
          : this._rgb[3]
      )
    }
    var Vp = I
    Vp.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var Fn = I,
      Wp = ss
    ;(Fn.prototype.darken = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lab()
      return (h[0] -= Wp.Kn * u), new Fn(h, "lab").alpha(d.alpha(), !0)
    }),
      (Fn.prototype.brighten = function (u) {
        return u === void 0 && (u = 1), this.darken(-u)
      }),
      (Fn.prototype.darker = Fn.prototype.darken),
      (Fn.prototype.brighter = Fn.prototype.brighten)
    var qp = I
    qp.prototype.get = function (u) {
      var d = u.split("."),
        h = d[0],
        y = d[1],
        P = this[h]()
      if (y) {
        var $ = h.indexOf(y) - (h.substr(0, 2) === "ok" ? 2 : 0)
        if ($ > -1) return P[$]
        throw new Error("unknown channel " + y + " in mode " + h)
      } else return P
    }
    var ir = I,
      Up = m.type,
      Yp = Math.pow,
      Kp = 1e-7,
      Xp = 20
    ir.prototype.luminance = function (u) {
      if (u !== void 0 && Up(u) === "number") {
        if (u === 0) return new ir([0, 0, 0, this._rgb[3]], "rgb")
        if (u === 1) return new ir([255, 255, 255, this._rgb[3]], "rgb")
        var d = this.luminance(),
          h = "rgb",
          y = Xp,
          P = function (_, O) {
            var L = _.interpolate(O, 0.5, h),
              N = L.luminance()
            return Math.abs(u - N) < Kp || !y-- ? L : N > u ? P(_, L) : P(L, O)
          },
          $ = (
            d > u
              ? P(new ir([0, 0, 0]), this)
              : P(this, new ir([255, 255, 255]))
          ).rgb()
        return new ir($.concat([this._rgb[3]]))
      }
      return Jp.apply(void 0, this._rgb.slice(0, 3))
    }
    var Jp = function (u, d, h) {
        return (
          (u = xa(u)),
          (d = xa(d)),
          (h = xa(h)),
          0.2126 * u + 0.7152 * d + 0.0722 * h
        )
      },
      xa = function (u) {
        return (
          (u /= 255), u <= 0.03928 ? u / 12.92 : Yp((u + 0.055) / 1.055, 2.4)
        )
      },
      Ot = {},
      Ul = I,
      Yl = m.type,
      us = Ot,
      Kl = function (u, d, h) {
        h === void 0 && (h = 0.5)
        for (var y = [], P = arguments.length - 3; P-- > 0; )
          y[P] = arguments[P + 3]
        var $ = y[0] || "lrgb"
        if ((!us[$] && !y.length && ($ = Object.keys(us)[0]), !us[$]))
          throw new Error("interpolation mode " + $ + " is not defined")
        return (
          Yl(u) !== "object" && (u = new Ul(u)),
          Yl(d) !== "object" && (d = new Ul(d)),
          us[$](u, d, h).alpha(u.alpha() + h * (d.alpha() - u.alpha()))
        )
      },
      Xl = I,
      Zp = Kl
    Xl.prototype.mix = Xl.prototype.interpolate = function (u, d) {
      d === void 0 && (d = 0.5)
      for (var h = [], y = arguments.length - 2; y-- > 0; )
        h[y] = arguments[y + 2]
      return Zp.apply(void 0, [this, u, d].concat(h))
    }
    var Jl = I
    Jl.prototype.premultiply = function (u) {
      u === void 0 && (u = !1)
      var d = this._rgb,
        h = d[3]
      return u
        ? ((this._rgb = [d[0] * h, d[1] * h, d[2] * h, h]), this)
        : new Jl([d[0] * h, d[1] * h, d[2] * h, h], "rgb")
    }
    var Sa = I,
      Qp = ss
    ;(Sa.prototype.saturate = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lch()
      return (
        (h[1] += Qp.Kn * u),
        h[1] < 0 && (h[1] = 0),
        new Sa(h, "lch").alpha(d.alpha(), !0)
      )
    }),
      (Sa.prototype.desaturate = function (u) {
        return u === void 0 && (u = 1), this.saturate(-u)
      })
    var Zl = I,
      Ql = m.type
    Zl.prototype.set = function (u, d, h) {
      h === void 0 && (h = !1)
      var y = u.split("."),
        P = y[0],
        $ = y[1],
        _ = this[P]()
      if ($) {
        var O = P.indexOf($) - (P.substr(0, 2) === "ok" ? 2 : 0)
        if (O > -1) {
          if (Ql(d) == "string")
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
          else if (Ql(d) === "number") _[O] = d
          else throw new Error("unsupported value for Color.set")
          var L = new Zl(_, P)
          return h ? ((this._rgb = L._rgb), this) : L
        }
        throw new Error("unknown channel " + $ + " in mode " + P)
      } else return _
    }
    var eh = I,
      th = function (u, d, h) {
        var y = u._rgb,
          P = d._rgb
        return new eh(
          y[0] + h * (P[0] - y[0]),
          y[1] + h * (P[1] - y[1]),
          y[2] + h * (P[2] - y[2]),
          "rgb",
        )
      }
    Ot.rgb = th
    var nh = I,
      Ea = Math.sqrt,
      lr = Math.pow,
      rh = function (u, d, h) {
        var y = u._rgb,
          P = y[0],
          $ = y[1],
          _ = y[2],
          O = d._rgb,
          L = O[0],
          N = O[1],
          W = O[2]
        return new nh(
          Ea(lr(P, 2) * (1 - h) + lr(L, 2) * h),
          Ea(lr($, 2) * (1 - h) + lr(N, 2) * h),
          Ea(lr(_, 2) * (1 - h) + lr(W, 2) * h),
          "rgb",
        )
      }
    Ot.lrgb = rh
    var sh = I,
      ah = function (u, d, h) {
        var y = u.lab(),
          P = d.lab()
        return new sh(
          y[0] + h * (P[0] - y[0]),
          y[1] + h * (P[1] - y[1]),
          y[2] + h * (P[2] - y[2]),
          "lab",
        )
      }
    Ot.lab = ah
    var eo = I,
      or = function (u, d, h, y) {
        var P, $, _, O
        y === "hsl"
          ? ((_ = u.hsl()), (O = d.hsl()))
          : y === "hsv"
            ? ((_ = u.hsv()), (O = d.hsv()))
            : y === "hcg"
              ? ((_ = u.hcg()), (O = d.hcg()))
              : y === "hsi"
                ? ((_ = u.hsi()), (O = d.hsi()))
                : y === "lch" || y === "hcl"
                  ? ((y = "hcl"), (_ = u.hcl()), (O = d.hcl()))
                  : y === "oklch" &&
                    ((_ = u.oklch().reverse()), (O = d.oklch().reverse()))
        var L, N, W, ie, Y, de
        ;(y.substr(0, 1) === "h" || y === "oklch") &&
          ((P = _),
          (L = P[0]),
          (W = P[1]),
          (Y = P[2]),
          ($ = O),
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
          y === "oklch" ? new eo([Ae, ce, $e], y) : new eo([$e, ce, Ae], y)
        )
      },
      ih = or,
      to = function (u, d, h) {
        return ih(u, d, h, "lch")
      }
    ;(Ot.lch = to), (Ot.hcl = to)
    var lh = I,
      oh = function (u, d, h) {
        var y = u.num(),
          P = d.num()
        return new lh(y + h * (P - y), "num")
      }
    Ot.num = oh
    var uh = or,
      ch = function (u, d, h) {
        return uh(u, d, h, "hcg")
      }
    Ot.hcg = ch
    var dh = or,
      fh = function (u, d, h) {
        return dh(u, d, h, "hsi")
      }
    Ot.hsi = fh
    var ph = or,
      hh = function (u, d, h) {
        return ph(u, d, h, "hsl")
      }
    Ot.hsl = hh
    var gh = or,
      vh = function (u, d, h) {
        return gh(u, d, h, "hsv")
      }
    Ot.hsv = vh
    var mh = I,
      bh = function (u, d, h) {
        var y = u.oklab(),
          P = d.oklab()
        return new mh(
          y[0] + h * (P[0] - y[0]),
          y[1] + h * (P[1] - y[1]),
          y[2] + h * (P[2] - y[2]),
          "oklab",
        )
      }
    Ot.oklab = bh
    var yh = or,
      wh = function (u, d, h) {
        return yh(u, d, h, "oklch")
      }
    Ot.oklch = wh
    var _a = I,
      xh = m.clip_rgb,
      Ca = Math.pow,
      Ta = Math.sqrt,
      Pa = Math.PI,
      no = Math.cos,
      ro = Math.sin,
      Sh = Math.atan2,
      Eh = function (u, d, h) {
        d === void 0 && (d = "lrgb"), h === void 0 && (h = null)
        var y = u.length
        h ||
          (h = Array.from(new Array(y)).map(function () {
            return 1
          }))
        var P =
          y /
          h.reduce(function ($e, Ae) {
            return $e + Ae
          })
        if (
          (h.forEach(function ($e, Ae) {
            h[Ae] *= P
          }),
          (u = u.map(function ($e) {
            return new _a($e)
          })),
          d === "lrgb")
        )
          return _h(u, h)
        for (
          var $ = u.shift(), _ = $.get(d), O = [], L = 0, N = 0, W = 0;
          W < _.length;
          W++
        )
          if (
            ((_[W] = (_[W] || 0) * h[0]),
            O.push(isNaN(_[W]) ? 0 : h[0]),
            d.charAt(W) === "h" && !isNaN(_[W]))
          ) {
            var ie = (_[W] / 180) * Pa
            ;(L += no(ie) * h[0]), (N += ro(ie) * h[0])
          }
        var Y = $.alpha() * h[0]
        u.forEach(function ($e, Ae) {
          var ze = $e.get(d)
          Y += $e.alpha() * h[Ae + 1]
          for (var Fe = 0; Fe < _.length; Fe++)
            if (!isNaN(ze[Fe]))
              if (((O[Fe] += h[Ae + 1]), d.charAt(Fe) === "h")) {
                var vt = (ze[Fe] / 180) * Pa
                ;(L += no(vt) * h[Ae + 1]), (N += ro(vt) * h[Ae + 1])
              } else _[Fe] += ze[Fe] * h[Ae + 1]
        })
        for (var de = 0; de < _.length; de++)
          if (d.charAt(de) === "h") {
            for (var ce = (Sh(N / O[de], L / O[de]) / Pa) * 180; ce < 0; )
              ce += 360
            for (; ce >= 360; ) ce -= 360
            _[de] = ce
          } else _[de] = _[de] / O[de]
        return (Y /= y), new _a(_, d).alpha(Y > 0.99999 ? 1 : Y, !0)
      },
      _h = function (u, d) {
        for (var h = u.length, y = [0, 0, 0, 0], P = 0; P < u.length; P++) {
          var $ = u[P],
            _ = d[P] / h,
            O = $._rgb
          ;(y[0] += Ca(O[0], 2) * _),
            (y[1] += Ca(O[1], 2) * _),
            (y[2] += Ca(O[2], 2) * _),
            (y[3] += O[3] * _)
        }
        return (
          (y[0] = Ta(y[0])),
          (y[1] = Ta(y[1])),
          (y[2] = Ta(y[2])),
          y[3] > 0.9999999 && (y[3] = 1),
          new _a(xh(y))
        )
      },
      Dt = q,
      ur = m.type,
      Ch = Math.pow,
      ka = function (u) {
        var d = "rgb",
          h = Dt("#ccc"),
          y = 0,
          P = [0, 1],
          $ = [],
          _ = [0, 0],
          O = !1,
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
                ur(K) === "string" &&
                Dt.brewer &&
                Dt.brewer[K.toLowerCase()] &&
                (K = Dt.brewer[K.toLowerCase()]),
              ur(K) === "array")
            ) {
              K.length === 1 && (K = [K[0], K[0]]), (K = K.slice(0))
              for (var ye = 0; ye < K.length; ye++) K[ye] = Dt(K[ye])
              $.length = 0
              for (var Oe = 0; Oe < K.length; Oe++) $.push(Oe / (K.length - 1))
            }
            return Tt(), (L = K)
          },
          ze = function (K) {
            if (O != null) {
              for (var ye = O.length - 1, Oe = 0; Oe < ye && K >= O[Oe]; ) Oe++
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
            else if (O && O.length > 2) {
              var mt = ze(K)
              Me = mt / (O.length - 2)
            } else ie !== W ? (Me = (K - W) / (ie - W)) : (Me = 1)
            ;(Me = vt(Me)),
              ye || (Me = Fe(Me)),
              $e !== 1 && (Me = Ch(Me, $e)),
              (Me = _[0] + Me * (1 - _[0] - _[1])),
              (Me = Math.min(1, Math.max(0, Me)))
            var Ze = Math.floor(Me * 1e4)
            if (ce && de[Ze]) Oe = de[Ze]
            else {
              if (ur(L) === "array")
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
                      (Oe = Dt.interpolate(L[Be], L[Be + 1], Me, d))
                    break
                  }
                }
              else ur(L) === "function" && (Oe = L(Me))
              ce && (de[Ze] = Oe)
            }
            return Oe
          },
          Tt = function () {
            return (de = {})
          }
        Ae(u)
        var Le = function (K) {
          var ye = Dt(dt(K))
          return N && ye[N] ? ye[N]() : ye
        }
        return (
          (Le.classes = function (K) {
            if (K != null) {
              if (ur(K) === "array") (O = K), (P = [K[0], K[K.length - 1]])
              else {
                var ye = Dt.analyze(P)
                K === 0 ? (O = [ye.min, ye.max]) : (O = Dt.limits(ye, "e", K))
              }
              return Le
            }
            return O
          }),
          (Le.domain = function (K) {
            if (!arguments.length) return P
            ;(W = K[0]), (ie = K[K.length - 1]), ($ = [])
            var ye = L.length
            if (K.length === ye && W !== ie)
              for (var Oe = 0, Me = Array.from(K); Oe < Me.length; Oe += 1) {
                var mt = Me[Oe]
                $.push((mt - W) / (ie - W))
              }
            else {
              for (var Ze = 0; Ze < ye; Ze++) $.push(Ze / (ye - 1))
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
                    var Gt = (Ve - Ge[We]) / (Ge[We + 1] - Ge[We]),
                      wn = Be[We] + Gt * (Be[We + 1] - Be[We])
                    return wn
                  })
              }
            }
            return (P = [W, ie]), Le
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
                        Ze = dt(ye, !0).lab()[0],
                        Be = Oe + (Me - Oe) * ye,
                        Ge = Ze - Be,
                        Ve = 0,
                        We = 1,
                        Gt = 20;
                      Math.abs(Ge) > 0.01 && Gt-- > 0;

                    )
                      (function () {
                        return (
                          mt && (Ge *= -1),
                          Ge < 0
                            ? ((Ve = ye), (ye += (We - ye) * 0.5))
                            : ((We = ye), (ye += (Ve - ye) * 0.5)),
                          (Ze = dt(ye, !0).lab()[0]),
                          (Ge = Ze - Be)
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
              ? (ur(K) === "number" && (K = [K, K]), (_ = K), Le)
              : _
          }),
          (Le.colors = function (K, ye) {
            arguments.length < 2 && (ye = "hex")
            var Oe = []
            if (arguments.length === 0) Oe = L.slice(0)
            else if (K === 1) Oe = [Le(0.5)]
            else if (K > 1) {
              var Me = P[0],
                mt = P[1] - Me
              Oe = Th(0, K, !1).map(function (We) {
                return Le(Me + (We / (K - 1)) * mt)
              })
            } else {
              u = []
              var Ze = []
              if (O && O.length > 2)
                for (
                  var Be = 1, Ge = O.length, Ve = 1 <= Ge;
                  Ve ? Be < Ge : Be > Ge;
                  Ve ? Be++ : Be--
                )
                  Ze.push((O[Be - 1] + O[Be]) * 0.5)
              else Ze = P
              Oe = Ze.map(function (We) {
                return Le(We)
              })
            }
            return (
              Dt[ye] &&
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
            return K != null ? ((h = Dt(K)), Le) : h
          }),
          Le
        )
      }
    function Th(u, d, h) {
      for (
        var y = [], P = u < d, $ = h ? (P ? d + 1 : d - 1) : d, _ = u;
        P ? _ < $ : _ > $;
        P ? _++ : _--
      )
        y.push(_)
      return y
    }
    var Or = I,
      Ph = ka,
      kh = function (u) {
        for (var d = [1, 1], h = 1; h < u; h++) {
          for (var y = [1], P = 1; P <= d.length; P++)
            y[P] = (d[P] || 0) + d[P - 1]
          d = y
        }
        return d
      },
      $h = function (u) {
        var d, h, y, P, $, _, O
        if (
          ((u = u.map(function (Y) {
            return new Or(Y)
          })),
          u.length === 2)
        )
          (d = u.map(function (Y) {
            return Y.lab()
          })),
            ($ = d[0]),
            (_ = d[1]),
            (P = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return $[ce] + Y * (_[ce] - $[ce])
              })
              return new Or(de, "lab")
            })
        else if (u.length === 3)
          (h = u.map(function (Y) {
            return Y.lab()
          })),
            ($ = h[0]),
            (_ = h[1]),
            (O = h[2]),
            (P = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return (
                  (1 - Y) * (1 - Y) * $[ce] +
                  2 * (1 - Y) * Y * _[ce] +
                  Y * Y * O[ce]
                )
              })
              return new Or(de, "lab")
            })
        else if (u.length === 4) {
          var L
          ;(y = u.map(function (Y) {
            return Y.lab()
          })),
            ($ = y[0]),
            (_ = y[1]),
            (O = y[2]),
            (L = y[3]),
            (P = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return (
                  (1 - Y) * (1 - Y) * (1 - Y) * $[ce] +
                  3 * (1 - Y) * (1 - Y) * Y * _[ce] +
                  3 * (1 - Y) * Y * Y * O[ce] +
                  Y * Y * Y * L[ce]
                )
              })
              return new Or(de, "lab")
            })
        } else if (u.length >= 5) {
          var N, W, ie
          ;(N = u.map(function (Y) {
            return Y.lab()
          })),
            (ie = u.length - 1),
            (W = kh(ie)),
            (P = function (Y) {
              var de = 1 - Y,
                ce = [0, 1, 2].map(function ($e) {
                  return N.reduce(function (Ae, ze, Fe) {
                    return (
                      Ae +
                      W[Fe] * Math.pow(de, ie - Fe) * Math.pow(Y, Fe) * ze[$e]
                    )
                  }, 0)
                })
              return new Or(ce, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return P
      },
      Mh = function (u) {
        var d = $h(u)
        return (
          (d.scale = function () {
            return Ph(d)
          }),
          d
        )
      },
      $a = q,
      Ht = function (u, d, h) {
        if (!Ht[h]) throw new Error("unknown blend mode " + h)
        return Ht[h](u, d)
      },
      bn = function (u) {
        return function (d, h) {
          var y = $a(h).rgb(),
            P = $a(d).rgb()
          return $a.rgb(u(y, P))
        }
      },
      yn = function (u) {
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
      Ih = function (u) {
        return u
      },
      Oh = function (u, d) {
        return (u * d) / 255
      },
      Ah = function (u, d) {
        return u > d ? d : u
      },
      Lh = function (u, d) {
        return u > d ? u : d
      },
      zh = function (u, d) {
        return 255 * (1 - (1 - u / 255) * (1 - d / 255))
      },
      Bh = function (u, d) {
        return d < 128
          ? (2 * u * d) / 255
          : 255 * (1 - 2 * (1 - u / 255) * (1 - d / 255))
      },
      Nh = function (u, d) {
        return 255 * (1 - (1 - d / 255) / (u / 255))
      },
      Rh = function (u, d) {
        return u === 255
          ? 255
          : ((u = (255 * (d / 255)) / (1 - u / 255)), u > 255 ? 255 : u)
      }
    ;(Ht.normal = bn(yn(Ih))),
      (Ht.multiply = bn(yn(Oh))),
      (Ht.screen = bn(yn(zh))),
      (Ht.overlay = bn(yn(Bh))),
      (Ht.darken = bn(yn(Ah))),
      (Ht.lighten = bn(yn(Lh))),
      (Ht.dodge = bn(yn(Rh))),
      (Ht.burn = bn(yn(Nh)))
    for (
      var jh = Ht,
        Ma = m.type,
        Fh = m.clip_rgb,
        Dh = m.TWOPI,
        Hh = Math.pow,
        Gh = Math.sin,
        Vh = Math.cos,
        so = q,
        Wh = function (u, d, h, y, P) {
          u === void 0 && (u = 300),
            d === void 0 && (d = -1.5),
            h === void 0 && (h = 1),
            y === void 0 && (y = 1),
            P === void 0 && (P = [0, 1])
          var $ = 0,
            _
          Ma(P) === "array" ? (_ = P[1] - P[0]) : ((_ = 0), (P = [P, P]))
          var O = function (L) {
            var N = Dh * ((u + 120) / 360 + d * L),
              W = Hh(P[0] + _ * L, y),
              ie = $ !== 0 ? h[0] + L * $ : h,
              Y = (ie * W * (1 - W)) / 2,
              de = Vh(N),
              ce = Gh(N),
              $e = W + Y * (-0.14861 * de + 1.78277 * ce),
              Ae = W + Y * (-0.29227 * de - 0.90649 * ce),
              ze = W + Y * (1.97294 * de)
            return so(Fh([$e * 255, Ae * 255, ze * 255, 1]))
          }
          return (
            (O.start = function (L) {
              return L == null ? u : ((u = L), O)
            }),
            (O.rotations = function (L) {
              return L == null ? d : ((d = L), O)
            }),
            (O.gamma = function (L) {
              return L == null ? y : ((y = L), O)
            }),
            (O.hue = function (L) {
              return L == null
                ? h
                : ((h = L),
                  Ma(h) === "array"
                    ? (($ = h[1] - h[0]), $ === 0 && (h = h[1]))
                    : ($ = 0),
                  O)
            }),
            (O.lightness = function (L) {
              return L == null
                ? P
                : (Ma(L) === "array"
                    ? ((P = L), (_ = L[1] - L[0]))
                    : ((P = [L, L]), (_ = 0)),
                  O)
            }),
            (O.scale = function () {
              return so.scale(O)
            }),
            O.hue(h),
            O
          )
        },
        qh = I,
        Uh = "0123456789abcdef",
        Yh = Math.floor,
        Kh = Math.random,
        Xh = function () {
          for (var u = "#", d = 0; d < 6; d++) u += Uh.charAt(Yh(Kh() * 16))
          return new qh(u, "hex")
        },
        Ia = f,
        ao = Math.log,
        Jh = Math.pow,
        Zh = Math.floor,
        Qh = Math.abs,
        io = function (u, d) {
          d === void 0 && (d = null)
          var h = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0,
          }
          return (
            Ia(u) === "object" && (u = Object.values(u)),
            u.forEach(function (y) {
              d && Ia(y) === "object" && (y = y[d]),
                y != null &&
                  !isNaN(y) &&
                  (h.values.push(y),
                  (h.sum += y),
                  y < h.min && (h.min = y),
                  y > h.max && (h.max = y),
                  (h.count += 1))
            }),
            (h.domain = [h.min, h.max]),
            (h.limits = function (y, P) {
              return lo(h, y, P)
            }),
            h
          )
        },
        lo = function (u, d, h) {
          d === void 0 && (d = "equal"),
            h === void 0 && (h = 7),
            Ia(u) == "array" && (u = io(u))
          var y = u.min,
            P = u.max,
            $ = u.values.sort(function (Aa, La) {
              return Aa - La
            })
          if (h === 1) return [y, P]
          var _ = []
          if (
            (d.substr(0, 1) === "c" && (_.push(y), _.push(P)),
            d.substr(0, 1) === "e")
          ) {
            _.push(y)
            for (var O = 1; O < h; O++) _.push(y + (O / h) * (P - y))
            _.push(P)
          } else if (d.substr(0, 1) === "l") {
            if (y <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var L = Math.LOG10E * ao(y),
              N = Math.LOG10E * ao(P)
            _.push(y)
            for (var W = 1; W < h; W++) _.push(Jh(10, L + (W / h) * (N - L)))
            _.push(P)
          } else if (d.substr(0, 1) === "q") {
            _.push(y)
            for (var ie = 1; ie < h; ie++) {
              var Y = (($.length - 1) * ie) / h,
                de = Zh(Y)
              if (de === Y) _.push($[de])
              else {
                var ce = Y - de
                _.push($[de] * (1 - ce) + $[de + 1] * ce)
              }
            }
            _.push(P)
          } else if (d.substr(0, 1) === "k") {
            var $e,
              Ae = $.length,
              ze = new Array(Ae),
              Fe = new Array(h),
              vt = !0,
              dt = 0,
              Tt = null
            ;(Tt = []), Tt.push(y)
            for (var Le = 1; Le < h; Le++) Tt.push(y + (Le / h) * (P - y))
            for (Tt.push(P); vt; ) {
              for (var K = 0; K < h; K++) Fe[K] = 0
              for (var ye = 0; ye < Ae; ye++)
                for (
                  var Oe = $[ye], Me = Number.MAX_VALUE, mt = void 0, Ze = 0;
                  Ze < h;
                  Ze++
                ) {
                  var Be = Qh(Tt[Ze] - Oe)
                  Be < Me && ((Me = Be), (mt = Ze)), Fe[mt]++, (ze[ye] = mt)
                }
              for (var Ge = new Array(h), Ve = 0; Ve < h; Ve++) Ge[Ve] = null
              for (var We = 0; We < Ae; We++)
                ($e = ze[We]),
                  Ge[$e] === null ? (Ge[$e] = $[We]) : (Ge[$e] += $[We])
              for (var Gt = 0; Gt < h; Gt++) Ge[Gt] *= 1 / Fe[Gt]
              vt = !1
              for (var wn = 0; wn < h; wn++)
                if (Ge[wn] !== Tt[wn]) {
                  vt = !0
                  break
                }
              ;(Tt = Ge), dt++, dt > 200 && (vt = !1)
            }
            for (var xn = {}, cr = 0; cr < h; cr++) xn[cr] = []
            for (var dr = 0; dr < Ae; dr++) ($e = ze[dr]), xn[$e].push($[dr])
            for (var rn = [], Dn = 0; Dn < h; Dn++)
              rn.push(xn[Dn][0]), rn.push(xn[Dn][xn[Dn].length - 1])
            ;(rn = rn.sort(function (Aa, La) {
              return Aa - La
            })),
              _.push(rn[0])
            for (var Ar = 1; Ar < rn.length; Ar += 2) {
              var Hn = rn[Ar]
              !isNaN(Hn) && _.indexOf(Hn) === -1 && _.push(Hn)
            }
          }
          return _
        },
        oo = { analyze: io, limits: lo },
        uo = I,
        e0 = function (u, d) {
          ;(u = new uo(u)), (d = new uo(d))
          var h = u.luminance(),
            y = d.luminance()
          return h > y ? (h + 0.05) / (y + 0.05) : (y + 0.05) / (h + 0.05)
        },
        co = I,
        nn = Math.sqrt,
        lt = Math.pow,
        t0 = Math.min,
        n0 = Math.max,
        fo = Math.atan2,
        po = Math.abs,
        cs = Math.cos,
        ho = Math.sin,
        r0 = Math.exp,
        go = Math.PI,
        s0 = function (u, d, h, y, P) {
          h === void 0 && (h = 1),
            y === void 0 && (y = 1),
            P === void 0 && (P = 1)
          var $ = function (Hn) {
              return (360 * Hn) / (2 * go)
            },
            _ = function (Hn) {
              return (2 * go * Hn) / 360
            }
          ;(u = new co(u)), (d = new co(d))
          var O = Array.from(u.lab()),
            L = O[0],
            N = O[1],
            W = O[2],
            ie = Array.from(d.lab()),
            Y = ie[0],
            de = ie[1],
            ce = ie[2],
            $e = (L + Y) / 2,
            Ae = nn(lt(N, 2) + lt(W, 2)),
            ze = nn(lt(de, 2) + lt(ce, 2)),
            Fe = (Ae + ze) / 2,
            vt = 0.5 * (1 - nn(lt(Fe, 7) / (lt(Fe, 7) + lt(25, 7)))),
            dt = N * (1 + vt),
            Tt = de * (1 + vt),
            Le = nn(lt(dt, 2) + lt(W, 2)),
            K = nn(lt(Tt, 2) + lt(ce, 2)),
            ye = (Le + K) / 2,
            Oe = $(fo(W, dt)),
            Me = $(fo(ce, Tt)),
            mt = Oe >= 0 ? Oe : Oe + 360,
            Ze = Me >= 0 ? Me : Me + 360,
            Be = po(mt - Ze) > 180 ? (mt + Ze + 360) / 2 : (mt + Ze) / 2,
            Ge =
              1 -
              0.17 * cs(_(Be - 30)) +
              0.24 * cs(_(2 * Be)) +
              0.32 * cs(_(3 * Be + 6)) -
              0.2 * cs(_(4 * Be - 63)),
            Ve = Ze - mt
          ;(Ve = po(Ve) <= 180 ? Ve : Ze <= mt ? Ve + 360 : Ve - 360),
            (Ve = 2 * nn(Le * K) * ho(_(Ve) / 2))
          var We = Y - L,
            Gt = K - Le,
            wn = 1 + (0.015 * lt($e - 50, 2)) / nn(20 + lt($e - 50, 2)),
            xn = 1 + 0.045 * ye,
            cr = 1 + 0.015 * ye * Ge,
            dr = 30 * r0(-lt((Be - 275) / 25, 2)),
            rn = 2 * nn(lt(ye, 7) / (lt(ye, 7) + lt(25, 7))),
            Dn = -rn * ho(2 * _(dr)),
            Ar = nn(
              lt(We / (h * wn), 2) +
                lt(Gt / (y * xn), 2) +
                lt(Ve / (P * cr), 2) +
                Dn * (Gt / (y * xn)) * (Ve / (P * cr)),
            )
          return n0(0, t0(100, Ar))
        },
        vo = I,
        a0 = function (u, d, h) {
          h === void 0 && (h = "lab"), (u = new vo(u)), (d = new vo(d))
          var y = u.get(h),
            P = d.get(h),
            $ = 0
          for (var _ in y) {
            var O = (y[_] || 0) - (P[_] || 0)
            $ += O * O
          }
          return Math.sqrt($)
        },
        i0 = I,
        l0 = function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          try {
            return (
              new (Function.prototype.bind.apply(i0, [null].concat(u)))(), !0
            )
          } catch {
            return !1
          }
        },
        mo = q,
        bo = ka,
        o0 = {
          cool: function () {
            return bo([mo.hsl(180, 1, 0.9), mo.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return bo(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          },
        },
        ds = {
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
        Oa = 0,
        yo = Object.keys(ds);
      Oa < yo.length;
      Oa += 1
    ) {
      var wo = yo[Oa]
      ds[wo.toLowerCase()] = ds[wo]
    }
    var u0 = ds,
      ct = q
    ;(ct.average = Eh),
      (ct.bezier = Mh),
      (ct.blend = jh),
      (ct.cubehelix = Wh),
      (ct.mix = ct.interpolate = Kl),
      (ct.random = Xh),
      (ct.scale = ka),
      (ct.analyze = oo.analyze),
      (ct.contrast = e0),
      (ct.deltaE = s0),
      (ct.distance = a0),
      (ct.limits = oo.limits),
      (ct.valid = l0),
      (ct.scales = o0),
      (ct.colors = Il),
      (ct.brewer = u0)
    var c0 = ct
    return c0
  })
})(fd)
var Py = fd.exports
const Zt = Ty(Py),
  tr = (e) => (Js("data-v-8a92440e"), (e = e()), Zs(), e),
  ky = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  $y = { class: "flex flex-col items-center justify-center w-full" },
  My = { viewBox: "0 0 36 36", class: "chart" },
  Iy = tr(() =>
    v(
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
  Oy = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  Ay = tr(() =>
    v(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  Ly = tr(() =>
    v(
      "p",
      null,
      [
        Ie(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        v("b", null, "315 KB"),
        Ie(". That's half of the classic SNES game "),
        v("em", null, "The Legend of Zelda: A Link to The Past"),
        Ie(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  zy = tr(() => v("p", null, "You want fast? Let's make it happen.", -1)),
  By = { id: "speedTable" },
  Ny = tr(() =>
    v(
      "colgroup",
      null,
      [
        v("col", { style: { width: "30%" } }),
        v("col", { style: { width: "70%" } }),
      ],
      -1,
    ),
  ),
  Ry = { class: "flex" },
  jy = { class: "flex" },
  Fy = tr(() =>
    v(
      "tbody",
      null,
      [
        v("tr", null, [
          v("td", null, "Huge, resource-heavy images"),
          v("td", null, [
            Ie(" Optimize your images. "),
            v("b", null, "A lot. "),
            Ie(
              "Using cutting-edge techniques and algorithms, I average between 60-200% size reduction on most projects. ",
            ),
          ]),
        ]),
        v("tr", null, [
          v("td", null, "Unused code, plugins, and assets"),
          v(
            "td",
            null,
            " Clean up your website significantly without impacting any functionality. Every website has a ton of garbage- let me take your garbage out! ",
          ),
        ]),
        v("tr", null, [
          v("td", null, "Inefficient, resource-heavy platforms"),
          v(
            "td",
            null,
            " I can help you migrate to a better platform, such as Vue, and get considerably smaller pages. 10-100x or more, usually. ",
          ),
        ]),
        v("tr", null, [
          v("td", null, "Uncached resources"),
          v(
            "td",
            null,
            " Inefficient or non-existent caching can massively increase page load times, especially the Time to First Paint metric, which has a huge impact on your SEO. I can set up caching that will have an immediate impact on your search engine rankings and loading speeds. ",
          ),
        ]),
      ],
      -1,
    ),
  ),
  Dy = tr(() => v("div", { class: "h-6" }, null, -1)),
  Hy = {
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
  Gy = Object.assign(Hy, {
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
            ? (c = Zt("#e2e8f0"))
            : o == 4
              ? (c = Zt("#cbd5e1"))
              : o == 3
                ? (c = Zt("#475569"))
                : o == 2
                  ? (c = Zt("#1e293b"))
                  : o == 1 && (c = Zt("#0f172a"))
          for (let p = 1; p < f.length; p++)
            p % 2 == 0
              ? (f[p].style.backgroundColor = c.brighten(0))
              : (f[p].style.backgroundColor = c.brighten(0.2))
        }
      return (
        yt(() => {
          l(t.brightness)
        }),
        An(
          () => t.brightness,
          (o, f) => {
            l(o)
          },
        ),
        (o, f) => (
          se(),
          Ee("div", ky, [
            v("div", $y, [
              v(
                "div",
                { id: "perfChart", class: A(r(e.brightness)) },
                [
                  (se(),
                  Ee("svg", My, [
                    Iy,
                    v(
                      "path",
                      {
                        class: A(["circle", s(e.brightness)]),
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
                      Oy,
                    ),
                  ])),
                  v(
                    "div",
                    {
                      id: "chartInner",
                      class: A(["font-monospace text-6xl", n(e.brightness)]),
                    },
                    " 98 ",
                    2,
                  ),
                ],
                2,
              ),
              v(
                "p",
                {
                  class: A(["text-sm italic opacity-50 mt-3", a(e.brightness)]),
                },
                [
                  Ie(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  v(
                    "a",
                    { href: "", class: A(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              v(
                "div",
                {
                  class: A([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  v(
                    "h2",
                    { class: A(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  v(
                    "h2",
                    { class: A(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  Ay,
                  Ly,
                  zy,
                  v("h3", { class: A(a(e.brightness)) }, "How I help", 2),
                  v("table", By, [
                    Ny,
                    v("thead", null, [
                      v("tr", null, [
                        v("th", null, [
                          v("div", Ry, [
                            v(
                              "h4",
                              { class: A([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ie(" Problem "),
                                he(
                                  we(S1),
                                  {
                                    size: "3rem",
                                    class: A([n(e.brightness), "inline mb-1"]),
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
                        v("th", null, [
                          v("div", jy, [
                            v(
                              "h4",
                              { class: A([a(e.brightness), "text-lg m-0"]) },
                              [
                                Ie(" What I can do "),
                                he(
                                  we(w1),
                                  {
                                    size: "3rem",
                                    class: A([n(e.brightness), "inline mb-1"]),
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
                    Fy,
                  ]),
                ],
                2,
              ),
              Dy,
              he(ts, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  Vy = Rn(Gy, [["__scopeId", "data-v-8a92440e"]]),
  Wy = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  qy = { class: "lg:w-6/12 sm:w-12/12" },
  Uy = v(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  Yy = v("p", null, [v("b", null, " Don't worry, I can help!")], -1),
  Ky = v(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  Xy = { class: "flex items-center w-full" },
  Jy = v(
    "p",
    null,
    [
      Ie(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      v("em", null, "very"),
      Ie(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  Zy = v("div", { class: "h-3" }, null, -1),
  Qy = { class: "flex items-center w-full" },
  ew = v(
    "p",
    null,
    [
      Ie(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      v("em", null, "do"),
      Ie(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  tw = v("div", { class: "h-3" }, null, -1),
  nw = { class: "flex items-center w-full" },
  rw = v(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  sw = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  aw = { class: "prose text-center" },
  iw = v("div", { class: "h-3" }, null, -1),
  lw = v("div", { class: "h-3" }, null, -1),
  ow = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      te(9274)
      const t = te(4709),
        n = te(new Date("2023-10-01")),
        r = te(new Date()),
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
        se(),
        Ee("div", Wy, [
          v("div", qy, [
            v(
              "h2",
              { class: A(["text-left text-5xl", l(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            v(
              "p",
              {
                class: A([
                  "text-left text-sm italic opacity-50 mt-3",
                  l(e.brightness),
                ]),
              },
              [
                Ie(" Website already secure? "),
                v("b", null, [
                  v(
                    "a",
                    { href: "", class: A(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  Ie(" are you?"),
                ]),
              ],
              2,
            ),
            v(
              "hr",
              { class: A(["mb-5 mt-1 w-6/12 opacity-25", l(e.brightness)]) },
              null,
              2,
            ),
            v(
              "div",
              { class: A(["prose", l(e.brightness)]) },
              [
                Uy,
                Yy,
                Ky,
                v(
                  "div",
                  {
                    class: A([
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
                    v("div", Xy, [
                      he(
                        we(Ps),
                        { class: A(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      v(
                        "h4",
                        { class: A(["font-bold m-0", l(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    Jy,
                  ],
                  2,
                ),
                Zy,
                v(
                  "div",
                  {
                    class: A([
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
                    v("div", Qy, [
                      he(
                        we(Ps),
                        { size: "2rem", class: A(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      v(
                        "h4",
                        { class: A(["font-bold m-0", l(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    ew,
                  ],
                  2,
                ),
                tw,
                v(
                  "div",
                  {
                    class: A([
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
                    v("div", nw, [
                      he(
                        we(Ps),
                        { class: A(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      v(
                        "h4",
                        { class: A(["font-bold m-0", l(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    rw,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          v("div", sw, [
            v(
              "div",
              {
                class: A([
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
                v("div", aw, [
                  v(
                    "h3",
                    {
                      class: A([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    kt(a(s.value)) + "+ ",
                    3,
                  ),
                  v(
                    "h3",
                    { class: A(["text-xl", l(e.brightness)]) },
                    [
                      Ie(" attacks blocked on "),
                      v(
                        "a",
                        {
                          class: A(i(e.brightness)),
                          href: "https://bazaar.blendernation.com",
                        },
                        "BlenderNation Bazaar",
                        2,
                      ),
                    ],
                    2,
                  ),
                  v(
                    "p",
                    {
                      class: A(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  v(
                    "p",
                    {
                      class: A(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    [
                      v(
                        "a",
                        { href: "", class: A(i(e.brightness)) },
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
            iw,
            v("hr", { class: A(["opacity-50", l(e.brightness)]) }, null, 2),
            lw,
            he(ts, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  uw = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  cw = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  dw = { class: "flex w-full" },
  fw = { class: "flex w-full pt-4 gap-2" },
  pw = { class: "w-6/12" },
  hw = { class: "w-6/12" },
  gw = { class: "w-full flex" },
  vw = { class: "w-6/12" },
  mw = { class: "w-6/12 pb-3" },
  bw = v("em", null, "huge", -1),
  yw = v("div", { class: "h-6" }, null, -1),
  ww = {
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
        r = te(!1),
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
            ? (p = Zt("#e2e8f0"))
            : f == 4
              ? (p = Zt("#cbd5e1"))
              : f == 3
                ? (p = Zt("#475569"))
                : f == 2
                  ? (p = Zt("#1e293b"))
                  : f == 1 && (p = Zt("#0f172a"))
          for (let g = 1; g < c.length; g++)
            g % 2 == 0
              ? (c[g].style.backgroundColor = p.brighten(0))
              : (c[g].style.backgroundColor = p.brighten(0.2))
        },
        o = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        yt(() => {
          l(t.brightness)
        }),
        An(
          () => t.brightness,
          (f, c) => {
            l(f)
          },
        ),
        (f, c) => (
          se(),
          Ee("div", uw, [
            v("div", cw, [
              v(
                "h2",
                { class: A(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              v(
                "h3",
                { class: A(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              v(
                "h4",
                { class: A(i(e.brightness)) },
                [
                  Ie(" What are the "),
                  v(
                    "a",
                    {
                      class: A(["font-bold", n(e.brightness)]),
                      href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    "Web Content Accessibility Guidelines?",
                    2,
                  ),
                ],
                2,
              ),
              v(
                "p",
                { class: A(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              v(
                "p",
                { class: A(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              v(
                "h4",
                { class: A(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              v(
                "p",
                { class: A(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              v(
                "p",
                { class: A(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              v("div", dw, [
                v(
                  "button",
                  {
                    class: A([
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
                    r.value ? (se(), De(we(Jc), { key: 0 })) : st("", !0),
                    r.value ? st("", !0) : (se(), De(we(p1), { key: 1 })),
                    Ie(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              v("div", fw, [
                v("div", pw, [
                  v(
                    "button",
                    { class: A(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (se(), De(we(xu), { key: 0 })) : st("", !0)],
                    2,
                  ),
                ]),
                v("div", hw, [
                  v(
                    "button",
                    { class: A(["rounded px-5 py-2 w-full", a.value]) },
                    [r.value ? (se(), De(we(yi), { key: 0 })) : st("", !0)],
                    2,
                  ),
                ]),
              ]),
              v(
                "h4",
                { class: A(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              v("div", gw, [
                v("div", vw, [
                  v(
                    "button",
                    {
                      class: A([
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
                    [Ie(" Submit "), he(we(xu))],
                    2,
                  ),
                ]),
                v("div", mw, [
                  v(
                    "button",
                    {
                      class: A([
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
                    [Ie(" Cancel "), he(we(yi))],
                    2,
                  ),
                ]),
              ]),
              v(
                "p",
                { class: A(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              v(
                "p",
                { class: A(i(e.brightness)) },
                [
                  Ie(" Changes like these may seem small, but they make a "),
                  bw,
                  Ie(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            yw,
            he(ts, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  xw = ["onMouseover"],
  Sw = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = te([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = te(0)
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
        se(),
        De(we(tm), null, {
          default: Xe(() => [
            he(
              we(nm),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: Xe(() => [
                  (se(!0),
                  Ee(
                    Qe,
                    null,
                    Ln(
                      t.value,
                      (l) => (
                        se(),
                        De(
                          we(rm),
                          {
                            key: l.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: Xe(({ selected: o }) => [
                              v(
                                "div",
                                {
                                  class: A([
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
                                    ? (se(),
                                      De(
                                        we(Ps),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: A(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 1
                                    ? (se(),
                                      De(
                                        we(g1),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: A(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 4
                                    ? (se(),
                                      De(
                                        we(h1),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: A(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 3
                                    ? (se(),
                                      De(
                                        we(y1),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: A(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  l.id == 5
                                    ? (se(),
                                      De(
                                        we(Jc),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: A(s(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : st("", !0),
                                  v(
                                    "p",
                                    {
                                      class: A([
                                        "font-semibold cursor-pointer",
                                        s(e.brightness, o),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    kt(l.title),
                                    3,
                                  ),
                                ],
                                42,
                                xw,
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
              we(sm),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: Xe(() => [
                  he(
                    we(zr),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(Vy, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(zr),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(ow, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(zr),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(_y, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(zr),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(dy, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(zr),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Xe(() => [
                        he(ww, { brightness: e.brightness }, null, 8, [
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
  Ew = { href: "/pricing" },
  _w = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = te(!1)
      yt(() => {
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
        se(),
        Ee(
          "div",
          {
            style: { transition: "opacity 0.5s ease-in-out" },
            class: A([
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
            v(
              "p",
              { class: A(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            v("a", Ew, [
              v(
                "button",
                {
                  "aria-label":
                    "Get a free site speed audit with recommendations for optimizing",
                  class: A([
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
  kr = (e) => (Js("data-v-e20b9d11"), (e = e()), Zs(), e),
  Cw = { class: "flex-col" },
  Tw = { class: "prose py-5 flex-col w-full" },
  Pw = kr(() => v("br", null, null, -1)),
  kw = kr(() => v("br", null, null, -1)),
  $w = { class: "flex" },
  Mw = { class: "w-6/12" },
  Iw = ["name", "checked", "onClick"],
  Ow = { class: "w-6/12" },
  Aw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Lw = { class: "flex-col gap-4" },
  zw = { class: "flex items-center" },
  Bw = ["name", "checked", "onClick"],
  Nw = { key: 0 },
  Rw = { key: 1 },
  jw = { class: "" },
  Fw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Dw = { class: "flex-col" },
  Hw = { class: "flex justify-between" },
  Gw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Vw = { class: "gap-4 mt-4", name: "pricing" },
  Ww = ["value"],
  qw = ["value"],
  Uw = { class: "flex gap-4", id: "leftInputs" },
  Yw = { class: "flex gap-4", id: "rightInputs" },
  Kw = kr(() => v("br", null, null, -1)),
  Xw = kr(() => v("br", null, null, -1)),
  Jw = kr(() => v("br", null, null, -1)),
  Zw = kr(() => v("br", null, null, -1)),
  Qw = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (F) => {
          F.preventDefault()
          const oe = "pricing"
          let V = document.getElementsByName("name")[0].value,
            Ye = document.getElementsByName("email")[0].value,
            Pe = document.getElementsByName("website")[0].value,
            tt = document.getElementsByName("notes")[0].value,
            nt = document.getElementsByName("services")[0].value,
            Yt = document.getElementsByName("total")[0].value,
            Rt = window.location.href,
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
                website: Pe,
                notes: tt,
                services: nt,
                total: Yt,
                referrer: Rt,
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
                  ne = document.getElementById("rightInputs")
                ;(le.style.display = "none"), (ne.style.display = "none")
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
        l = te({
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
        k = me(
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
        re = () => {
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
                ? I()
                : F.title == "Design Overhaul" && re()
        },
        G = (F) => Object.values(F.services).some((oe) => oe.enabled),
        D = te([
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
          if (F.title === "Speed") return g.value
          if (F.title === "Security") return b.value
          if (F.title === "Accessibility") return k.value
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
        xe = me(() => {
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
        se(),
        Ee("div", Cw, [
          v("div", Tw, [
            v(
              "h2",
              {
                class: A([
                  "text-5xl text-center text-semibold",
                  i(n.brightness),
                ]),
              },
              " Services Pricing ",
              2,
            ),
            v(
              "p",
              { class: A(["text-center", i(n.brightness)]) },
              [
                Ie(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                Pw,
                kw,
                Ie(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                v(
                  "a",
                  {
                    href: "/contact",
                    class: A(["font-bold", r(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                Ie(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (se(!0),
          Ee(
            Qe,
            null,
            Ln(
              D.value,
              (V, Ye) => (
                se(),
                Ee(
                  "div",
                  {
                    key: Ye,
                    class: A([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      Ce(n.brightness),
                    ]),
                  },
                  [
                    v("div", $w, [
                      v("div", Mw, [
                        v(
                          "div",
                          {
                            class: A([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              i(n.brightness),
                            ]),
                          },
                          [
                            v(
                              "input",
                              {
                                type: "checkbox",
                                name: V.title,
                                checked: G(V),
                                onClick: (Pe) => q(V),
                                class: A([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              Iw,
                            ),
                            v("h3", null, kt(V.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      v("div", Ow, [
                        v(
                          "h3",
                          {
                            class: A([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            ge(V) != Math.floor(Q(V))
                              ? (se(), Ee("span", Aw, "$" + kt(ge(V)), 1))
                              : st("", !0),
                            Ie("$" + kt(Q(V)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    v(
                      "hr",
                      { class: A(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    v("div", Lw, [
                      (se(!0),
                      Ee(
                        Qe,
                        null,
                        Ln(
                          V.services,
                          (Pe, tt) => (
                            se(),
                            Ee(
                              "div",
                              {
                                key: tt,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                v("div", zw, [
                                  v(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: Pe.title,
                                      checked: Pe.enabled,
                                      onClick: (nt) =>
                                        (Pe.enabled = !Pe.enabled),
                                      class: A([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    Bw,
                                  ),
                                  v(
                                    "p",
                                    { class: A(["", i(n.brightness)]) },
                                    [
                                      Pe.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (se(),
                                          Ee("b", Nw, [
                                            v("em", null, kt(Pe.title), 1),
                                          ]))
                                        : (se(),
                                          Ee("span", Rw, kt(Pe.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                v("div", jw, [
                                  v(
                                    "h3",
                                    {
                                      class: A([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      Pe.price !=
                                      Math.floor(Pe.price * V.discount)
                                        ? (se(),
                                          Ee("span", Fw, "$" + kt(Pe.price), 1))
                                        : st("", !0),
                                      Ie("$" + kt(Pe.price * V.discount), 1),
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
          v("hr", { class: A(["my-4 w-full", r(n.brightness)]) }, null, 2),
          v("div", Dw, [
            v("div", Hw, [
              v(
                "h3",
                { class: A(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              v(
                "h3",
                { class: A(["text-4xl text-bold", r(n.brightness)]) },
                [
                  X.value != Math.floor(X.value)
                    ? (se(), Ee("span", Gw, "$" + kt(X.value), 1))
                    : st("", !0),
                  Ie("$" + kt(X.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          v("form", Vw, [
            v(
              "input",
              { type: "hidden", name: "services", value: xe.value },
              null,
              8,
              Ww,
            ),
            v(
              "input",
              { type: "hidden", name: "total", value: X.value },
              null,
              8,
              qw,
            ),
            v("div", Uw, [
              v(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: A([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              v(
                "input",
                {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: A([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            v("div", Yw, [
              v(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: A([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
              v(
                "textarea",
                {
                  name: "notes",
                  placeholder: "Notes",
                  class: A([
                    "rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    s(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            v(
              "button",
              {
                "aria-label": "Submit a contact form",
                id: "submitButton",
                type: "submit",
                class: A([
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
          v(
            "p",
            { class: A(["text-center mt-4", i(n.brightness)]) },
            [
              Ie(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              Kw,
              Xw,
              Ie(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              v(
                "a",
                { href: "/contact", class: A(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              Ie(" and we can get that figured out."),
              Jw,
              Zw,
              Ie("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  ex = Rn(Qw, [["__scopeId", "data-v-e20b9d11"]]),
  tx = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        se(), De(ex, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  nx = { class: "flex-col" },
  rx = { class: "py-5 flex-col w-full" },
  sx = { id: "cta" },
  ax = {
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
                let b = p.getElementsByTagName("input")
                for (let E = 0; E < b.length; E++) b[E].style.display = "none"
                let k = p.getElementsByTagName("textarea")[0]
                k.style.display = "none"
                let m = document.getElementById("submitButton")
                m.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, a) => (
        se(),
        Ee("div", nx, [
          v("div", rx, [
            v(
              "h2",
              {
                class: A([
                  "text-5xl text-center text-semibold",
                  n(t.brightness),
                ]),
              },
              " Contact Me ",
              2,
            ),
          ]),
          v("form", sx, [
            v(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: A(["rounded p-2 w-full", s.inputClass]),
              },
              null,
              2,
            ),
            v(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Email",
                class: A(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            v(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: A(["rounded p-2 w-full mt-3", s.inputClass]),
              },
              null,
              2,
            ),
            v(
              "button",
              {
                id: "submitButton",
                type: "submit",
                "aria-label": "Submit a contact form",
                onClick: r,
                class: A([
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
  ix = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  pn =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  hn = '</title><path d="',
  gn = '"/></svg>',
  Rr = {
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
  lx = {
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
  ox = {
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
  ux = {
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
  cx = {
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
  Pu = {
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
  dx = {
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
  ku = {
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
  _n = {
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
  fx = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  px = { class: "py-5 flex-col w-full" },
  hx = { class: "prose" },
  gx = ["onMouseover", "onClick"],
  vx = { class: "image-container" },
  mx = ["src", "alt"],
  bx = { class: "flex gap-2 items-center" },
  yx = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  wx = ["d"],
  xx = {
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
        s = te([
          {
            icons: [_n, Pu, ox],
            title: "BlenderNation Bazaar",
            image: Zi,
            link: "/portfolio/bazaar",
          },
          {
            icons: [ku, cx, lx],
            title: "OKC South Stake",
            image: cd,
            link: "/portfolio/okc-south-stake",
          },
        ]),
        a = te([
          {
            icons: [_n, ux],
            title: "Build On Your Land",
            image: dd,
            link: "/portfolio/build-on-your-land",
          },
          {
            icons: [_n, Pu],
            title: "Stuart Pipe and Hose",
            image: Qi,
            link: "/portfolio/stuart-pipe",
          },
          {
            icons: [_n, Rr],
            title: "Atlanta Floor One",
            image: el,
            link: "/portfolio/atlanta-floor-one",
          },
          {
            icons: [_n, Rr],
            title: "Swim State Pool",
            image: tl,
            link: "/portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [ku, dx],
            image: nl,
            link: "/portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [_n, Rr],
            image: rl,
            link: "/portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [_n, Rr],
            image: sl,
            link: "/portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [_n, Rr],
            image: al,
            link: "/portfolio/aris-search",
          },
        ]),
        i = te(null)
      return (l, o) => (
        se(),
        Ee("div", fx, [
          v("div", px, [
            v("span", hx, [
              v(
                "h2",
                {
                  class: A([
                    "text-5xl text-center text-semibold",
                    n(t.brightness),
                  ]),
                },
                " Web Portfolio ",
                2,
              ),
              v(
                "p",
                { class: A(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. Check out some of my work below! ",
                2,
              ),
              v(
                "h3",
                { class: A(["text-2xl text-center", n(t.brightness)]) },
                " Full Sites (I designed and developed) ",
                2,
              ),
            ]),
          ]),
          (se(!0),
          Ee(
            Qe,
            null,
            Ln(
              [s.value, a.value],
              (f) => (
                se(),
                Ee(
                  "div",
                  {
                    class: A([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": f == s.value,
                        "lg:grid-cols-3 mt-4": f == a.value,
                      },
                    ]),
                  },
                  [
                    (se(!0),
                    Ee(
                      Qe,
                      null,
                      Ln(
                        f,
                        (c) => (
                          se(),
                          Ee(
                            "div",
                            {
                              class:
                                "flex flex-col justify-end rounded-xl portfolioCard",
                              key: c.title,
                              onMouseover: (p) => (i.value = c.title),
                              onMouseleave:
                                o[0] || (o[0] = (p) => (i.value = null)),
                              onClick: (p) => l.$router.push(c.link),
                              style: Ws({
                                opacity:
                                  i.value === c.title || i.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              v("div", vx, [
                                v(
                                  "img",
                                  {
                                    src: c.image,
                                    alt: c.title,
                                    class:
                                      "bg-slate-200 object-contain w-full rounded-t-xl",
                                  },
                                  null,
                                  8,
                                  mx,
                                ),
                              ]),
                              v("div", null, [
                                v("div", null, [
                                  v(
                                    "div",
                                    {
                                      class: A([
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
                                      v("div", null, [
                                        v(
                                          "h5",
                                          {
                                            class: A([
                                              "text-xl m-0 p-0",
                                              r(t.brightness),
                                            ]),
                                          },
                                          kt(c.title),
                                          3,
                                        ),
                                      ]),
                                      v("div", bx, [
                                        (se(!0),
                                        Ee(
                                          Qe,
                                          null,
                                          Ln(
                                            c.icons,
                                            (p, g) => (
                                              se(),
                                              Ee(
                                                "div",
                                                {
                                                  key: g,
                                                  class: A([
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
                                                  (se(),
                                                  Ee("svg", yx, [
                                                    v(
                                                      "path",
                                                      { d: p.path },
                                                      null,
                                                      8,
                                                      wx,
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
                            gx,
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
  Sx = Rn(xx, [["__scopeId", "data-v-2bda4711"]]),
  Ex = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " The vision: a one-stop shop for Blender users ",
    -1,
  ),
  _x = v("p", null, "Lorem ipsum", -1),
  Cx = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Tight deadlines and high stakes ",
    -1,
  ),
  Tx = v("p", null, "Lorem ipsum", -1),
  Px = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "From concept to results",
    -1,
  ),
  kx = v("p", null, "Lorem ipsum", -1),
  $x = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Security- keeping the Bazaar safe ",
    -1,
  ),
  Mx = v("p", null, "Lorem ipsum", -1),
  Ix = "https://bazaar.blendernation.com",
  Ox = "BlenderNation Bazaar",
  Ax = {
    __name: "Bazaar",
    setup(e) {
      const t = te([Zi, X2, J2, Z2, Q2]),
        n = te([
          "Bazaar homepage",
          "Bazaar collection page",
          "Bazaar user page",
          "Bazaar search results",
          "Bazaar product listing",
        ])
      return (r, s) => (
        se(),
        De(
          jn,
          {
            images: t.value,
            captions: n.value,
            link: Ix,
            title: Ox,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              tn(r.$slots, "default", {}, () => [
                Ex,
                _x,
                Cx,
                Tx,
                Px,
                kx,
                $x,
                Mx,
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
  Lx = {
    __name: "OkcSouthStake",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  zx = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Stark colors + clean white and transparency ",
    -1,
  ),
  Bx = v("p", null, "Lorem ipsum", -1),
  Nx = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Geometric effects",
    -1,
  ),
  Rx = v("p", null, "Lorem ipsum", -1),
  jx = "https://arissearch.com//",
  Fx = "Aris Search",
  Dx = {
    __name: "ArisSearch",
    setup(e) {
      const t = te([al, ry]),
        n = te(["Aris Search homepage", "Aris Search image effects"])
      return (r, s) => {
        const a = lc("sliderAndGallerya")
        return (
          se(),
          De(
            a,
            {
              images: t.value,
              captions: n.value,
              link: jx,
              title: Fx,
              brightness: r.brightness,
            },
            {
              default: Xe(() => [
                tn(r.$slots, "default", {}, () => [zx, Bx, Nx, Rx]),
              ]),
              _: 3,
            },
            8,
            ["images", "captions", "brightness"],
          )
        )
      }
    },
  },
  Hx = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Clean and professional with an unusual color palette ",
    -1,
  ),
  Gx = v("p", null, "Lorem ipsum", -1),
  Vx = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Parallax architectural sketch backgrounds ",
    -1,
  ),
  Wx = v("p", null, "Lorem ipsum", -1),
  qx = "https://floorsfloors.com/",
  Ux = "Atlanta Floor One",
  Yx = {
    __name: "AtlantaFloorOne",
    setup(e) {
      const t = te([el, ey, ty, ny]),
        n = te([
          "Atlanta Floors One homepage",
          "Atlanta Floors One testimonial section",
          "Contact page (featuring parallax architectural sketch background)",
          "Atlanta Floors One image section",
        ])
      return (r, s) => (
        se(),
        De(
          jn,
          {
            images: t.value,
            captions: n.value,
            link: qx,
            title: Ux,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              tn(r.$slots, "default", {}, () => [Hx, Gx, Vx, Wx]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  Kx = {
    __name: "BuildOnYourLand",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Xx = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Priority: make services and pricing clear and accessible ",
    -1,
  ),
  Jx = v("p", null, "Lorem ipsum", -1),
  Zx = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Working with a round logo",
    -1,
  ),
  Qx = v("p", null, "Lorem ipsum", -1),
  e3 = "https://stehlfamilydental.com/",
  t3 = "Stuart Hose and Pipe",
  n3 = {
    __name: "StehlFamilyDental",
    setup(e) {
      const t = te([sl]),
        n = te(["Stehl Family Dental homepage"])
      return (r, s) => (
        se(),
        De(
          jn,
          {
            images: t.value,
            captions: n.value,
            link: e3,
            title: t3,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              tn(r.$slots, "default", {}, () => [Xx, Jx, Zx, Qx]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  r3 = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Using design to present minimal text in a compelling way ",
    -1,
  ),
  s3 = v("p", null, "Lorem ipsum", -1),
  a3 = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Image comparison sliders",
    -1,
  ),
  i3 = v("p", null, "Lorem ipsum", -1),
  l3 = "https://tub-boys.com/",
  o3 = "Tub Boys",
  u3 = {
    __name: "TubBoys",
    setup(e) {
      const t = te([rl]),
        n = te(["Tub Boys homepage"])
      return (r, s) => (
        se(),
        De(
          jn,
          {
            images: t.value,
            captions: n.value,
            link: l3,
            title: o3,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              tn(r.$slots, "default", {}, () => [r3, s3, a3, i3]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  c3 = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Extremely precise design requirements ",
    -1,
  ),
  d3 = v("p", null, "Lorem ipsum", -1),
  f3 = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Maximizing information while avoiding clutter ",
    -1,
  ),
  p3 = v("p", null, "Lorem ipsum", -1),
  h3 = "https://stuarthose.com/",
  g3 = "Stuart Hose and Pipe",
  v3 = {
    __name: "StuartPipeAndHose",
    setup(e) {
      const t = te([Qi]),
        n = te(["Stuart Hose and Pipe homepage"])
      return (r, s) => (
        se(),
        De(
          jn,
          {
            images: t.value,
            captions: n.value,
            link: h3,
            title: g3,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [
              tn(r.$slots, "default", {}, () => [c3, d3, f3, p3]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  m3 = v(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Iterative design",
    -1,
  ),
  b3 = v("p", null, "Lorem ipsum", -1),
  y3 = "https://swimstatepoolservice.com/",
  w3 = "Swim State Pool",
  x3 = {
    __name: "SwimStatePool",
    setup(e) {
      const t = te([tl]),
        n = te(["Swim State Pool Services homepage"])
      return (r, s) => (
        se(),
        De(
          jn,
          {
            images: t.value,
            captions: n.value,
            link: y3,
            title: w3,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [tn(r.$slots, "default", {}, () => [m3, b3])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  S3 = v("h3", { class: "text-2xl font-bold text-inherit" }, "Lorem ipsum", -1),
  E3 = v("p", null, "Lorem ipsum", -1),
  _3 = "/",
  C3 = "josephhansen.dev",
  T3 = {
    __name: "JosephHansenDev",
    setup(e) {
      const t = te([nl]),
        n = te(["This site's homepage"])
      return (r, s) => (
        se(),
        De(
          jn,
          {
            images: t.value,
            captions: n.value,
            link: _3,
            title: C3,
            brightness: r.brightness,
          },
          {
            default: Xe(() => [tn(r.$slots, "default", {}, () => [S3, E3])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  P3 = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  k3 = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  $3 = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = te(1),
        n = e,
        r = (l) => {
          ;(t.value = Number(l)),
            window.localStorage.setItem("brightness", t.value)
        },
        s = {
          "okc-south-stake": Lx,
          "aris-search": Dx,
          "atlanta-floor-one": Yx,
          "build-on-your-land": Kx,
          "stehl-family-dental": n3,
          "tub-boys": u3,
          "stuart-pipe": v3,
          "swim-state-pool": x3,
          "josephhansen-dev": T3,
          bazaar: Ax,
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
      const i = Zr({
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
          se(),
          Ee(
            Qe,
            null,
            [
              v(
                "main",
                {
                  class: A([["w-dvw", a.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  he(K1, { "onUpdate:brightness": r }),
                  v("div", P3, [
                    e.component == "pricing"
                      ? (se(),
                        Ee(
                          "div",
                          {
                            key: 0,
                            class: A([
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
                            he(tx, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component == "contact"
                      ? (se(),
                        Ee(
                          "div",
                          {
                            key: 1,
                            class: A([
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
                            he(ax, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component == "portfolio"
                      ? (se(),
                        Ee(
                          "div",
                          {
                            key: 2,
                            class: A([
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
                            he(Sx, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component == "about-me"
                      ? (se(),
                        Ee(
                          "div",
                          {
                            key: 3,
                            class: A([
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
                            he(ix, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                    e.component in s
                      ? (se(),
                        Ee(
                          "div",
                          {
                            key: 4,
                            class: A([
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
                            (se(),
                            De(
                              ag(s[e.component]),
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
                      ? (se(),
                        Ee(
                          "div",
                          {
                            key: 5,
                            class: A([
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
                            he(rb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : st("", !0),
                  ]),
                  v("div", k3, [
                    e.component == "home"
                      ? (se(),
                        Ee(
                          "div",
                          {
                            key: 0,
                            class: A([
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
                            he(Sw, { brightness: t.value }, null, 8, [
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
              he(_w, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  M3 = Rn($3, [["__scopeId", "data-v-f15944f1"]]),
  ll = [
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
ll.map((e) => e.path)
ll.forEach((e) => {
  e.component = M3
})
const I3 = i1({ history: Sm(), routes: ll }),
  pd = Sv(Pv)
pd.use(I3)
pd.mount("#app")
