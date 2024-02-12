;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const a = {}
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const a = n(r)
    fetch(r.href, a)
  }
})()
function Ci(e, t) {
  const n = new Set(e.split(","))
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s)
}
const et = {},
  vs = [],
  Ht = () => {},
  f0 = () => !1,
  Vr = (e) =>
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
  je = (e, t) => p0.call(e, t),
  Ee = Array.isArray,
  ms = (e) => Wr(e) === "[object Map]",
  Ou = (e) => Wr(e) === "[object Set]",
  Te = (e) => typeof e == "function",
  ot = (e) => typeof e == "string",
  Ts = (e) => typeof e == "symbol",
  st = (e) => e !== null && typeof e == "object",
  Au = (e) => (st(e) || Te(e)) && Te(e.then) && Te(e.catch),
  Lu = Object.prototype.toString,
  Wr = (e) => Lu.call(e),
  h0 = (e) => Wr(e).slice(8, -1),
  zu = (e) => Wr(e) === "[object Object]",
  $i = (e) =>
    ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Cr = Ci(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  qr = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  g0 = /-(\w)/g,
  an = qr((e) => e.replace(g0, (t, n) => (n ? n.toUpperCase() : ""))),
  v0 = /\B([A-Z])/g,
  ks = qr((e) => e.replace(v0, "-$1").toLowerCase()),
  Ur = qr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ba = qr((e) => (e ? `on${Ur(e)}` : "")),
  Rn = (e, t) => !Object.is(e, t),
  Tr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Or = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ni = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Eo
const Bu = () =>
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
function Yr(e) {
  if (Ee(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ot(s) ? w0(s) : Yr(s)
      if (r) for (const a in r) t[a] = r[a]
    }
    return t
  } else if (ot(e) || st(e)) return e
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
          const s = n.split(b0)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function M(e) {
  let t = ""
  if (ot(e)) t = e
  else if (Ee(e))
    for (let n = 0; n < e.length; n++) {
      const s = M(e[n])
      s && (t += s + " ")
    }
  else if (st(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const x0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  S0 = Ci(x0)
function ju(e) {
  return !!e || e === ""
}
const $t = (e) =>
    ot(e)
      ? e
      : e == null
        ? ""
        : Ee(e) || (st(e) && (e.toString === Lu || !Te(e.toString)))
          ? JSON.stringify(e, Nu, 2)
          : String(e),
  Nu = (e, t) =>
    t && t.__v_isRef
      ? Nu(e, t.value)
      : ms(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], a) => ((n[ja(s, a) + " =>"] = r), n),
              {},
            ),
          }
        : Ou(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => ja(n)) }
          : Ts(t)
            ? ja(t)
            : st(t) && !Ee(t) && !zu(t)
              ? String(t)
              : t,
  ja = (e, t = "") => {
    var n
    return Ts(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
let Yt
class _0 {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Yt),
      !t && Yt && (this.index = (Yt.scopes || (Yt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Yt
      try {
        return (Yt = this), t()
      } finally {
        Yt = n
      }
    }
  }
  on() {
    Yt = this
  }
  off() {
    Yt = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function E0(e, t = Yt) {
  t && t.active && t.effects.push(e)
}
function C0() {
  return Yt
}
let Kn
class Pi {
  constructor(t, n, s, r) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 2),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      E0(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      es()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (T0(n.computed), this._dirtyLevel >= 2)) break
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), ts()
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Bn,
      n = Kn
    try {
      return (Bn = !0), (Kn = this), this._runnings++, Co(this), this.fn()
    } finally {
      To(this), this._runnings--, (Kn = n), (Bn = t)
    }
  }
  stop() {
    var t
    this.active &&
      (Co(this),
      To(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function T0(e) {
  return e.value
}
function Co(e) {
  e._trackId++, (e._depsLength = 0)
}
function To(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Ru(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Ru(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Bn = !0,
  si = 0
const Fu = []
function es() {
  Fu.push(Bn), (Bn = !1)
}
function ts() {
  const e = Fu.pop()
  Bn = e === void 0 ? !0 : e
}
function Ii() {
  si++
}
function Mi() {
  for (si--; !si && ri.length; ) ri.shift()()
}
function Du(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && Ru(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const ri = []
function Hu(e, t, n) {
  Ii()
  for (const s of e.keys())
    if (s._dirtyLevel < t && e.get(s) === s._trackId) {
      const r = s._dirtyLevel
      ;(s._dirtyLevel = t), r === 0 && ((s._shouldSchedule = !0), s.trigger())
    }
  Gu(e), Mi()
}
function Gu(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), ri.push(t.scheduler))
}
const Vu = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  ai = new WeakMap(),
  Xn = Symbol(""),
  ii = Symbol("")
function Pt(e, t, n) {
  if (Bn && Kn) {
    let s = ai.get(e)
    s || ai.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = Vu(() => s.delete(n)))), Du(Kn, r)
  }
}
function pn(e, t, n, s, r, a) {
  const i = ai.get(e)
  if (!i) return
  let l = []
  if (t === "clear") l = [...i.values()]
  else if (n === "length" && Ee(e)) {
    const o = Number(s)
    i.forEach((f, c) => {
      ;(c === "length" || (!Ts(c) && c >= o)) && l.push(f)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        Ee(e)
          ? $i(n) && l.push(i.get("length"))
          : (l.push(i.get(Xn)), ms(e) && l.push(i.get(ii)))
        break
      case "delete":
        Ee(e) || (l.push(i.get(Xn)), ms(e) && l.push(i.get(ii)))
        break
      case "set":
        ms(e) && l.push(i.get(Xn))
        break
    }
  Ii()
  for (const o of l) o && Hu(o, 2)
  Mi()
}
const k0 = Ci("__proto__,__v_isRef,__isVue"),
  Wu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Ts),
  ),
  ko = $0()
function $0() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = He(this)
        for (let a = 0, i = this.length; a < i; a++) Pt(s, "get", a + "")
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(He)) : r
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        es(), Ii()
        const s = He(this)[t].apply(this, n)
        return Mi(), ts(), s
      }
    }),
    e
  )
}
function P0(e) {
  const t = He(this)
  return Pt(t, "has", e), t.hasOwnProperty(e)
}
class qu {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._shallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      a = this._shallow
    if (n === "__v_isReactive") return !r
    if (n === "__v_isReadonly") return r
    if (n === "__v_isShallow") return a
    if (n === "__v_raw")
      return s === (r ? (a ? H0 : Xu) : a ? Ku : Yu).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = Ee(t)
    if (!r) {
      if (i && je(ko, n)) return Reflect.get(ko, n, s)
      if (n === "hasOwnProperty") return P0
    }
    const l = Reflect.get(t, n, s)
    return (Ts(n) ? Wu.has(n) : k0(n)) || (r || Pt(t, "get", n), a)
      ? l
      : St(l)
        ? i && $i(n)
          ? l
          : l.value
        : st(l)
          ? r
            ? Zu(l)
            : Qs(l)
          : l
  }
}
class Uu extends qu {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let a = t[n]
    if (!this._shallow) {
      const o = xs(a)
      if (
        (!Ar(s) && !xs(s) && ((a = He(a)), (s = He(s))),
        !Ee(t) && St(a) && !St(s))
      )
        return o ? !1 : ((a.value = s), !0)
    }
    const i = Ee(t) && $i(n) ? Number(n) < t.length : je(t, n),
      l = Reflect.set(t, n, s, r)
    return (
      t === He(r) && (i ? Rn(s, a) && pn(t, "set", n, s) : pn(t, "add", n, s)),
      l
    )
  }
  deleteProperty(t, n) {
    const s = je(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && pn(t, "delete", n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!Ts(n) || !Wu.has(n)) && Pt(t, "has", n), s
  }
  ownKeys(t) {
    return Pt(t, "iterate", Ee(t) ? "length" : Xn), Reflect.ownKeys(t)
  }
}
class I0 extends qu {
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
const M0 = new Uu(),
  O0 = new I0(),
  A0 = new Uu(!0),
  Oi = (e) => e,
  Kr = (e) => Reflect.getPrototypeOf(e)
function gr(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = He(e),
    a = He(t)
  n || (Rn(t, a) && Pt(r, "get", t), Pt(r, "get", a))
  const { has: i } = Kr(r),
    l = s ? Oi : n ? zi : qs
  if (i.call(r, t)) return l(e.get(t))
  if (i.call(r, a)) return l(e.get(a))
  e !== r && e.get(t)
}
function vr(e, t = !1) {
  const n = this.__v_raw,
    s = He(n),
    r = He(e)
  return (
    t || (Rn(e, r) && Pt(s, "has", e), Pt(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function mr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Pt(He(e), "iterate", Xn), Reflect.get(e, "size", e)
  )
}
function $o(e) {
  e = He(e)
  const t = He(this)
  return Kr(t).has.call(t, e) || (t.add(e), pn(t, "add", e, e)), this
}
function Po(e, t) {
  t = He(t)
  const n = He(this),
    { has: s, get: r } = Kr(n)
  let a = s.call(n, e)
  a || ((e = He(e)), (a = s.call(n, e)))
  const i = r.call(n, e)
  return (
    n.set(e, t), a ? Rn(t, i) && pn(n, "set", e, t) : pn(n, "add", e, t), this
  )
}
function Io(e) {
  const t = He(this),
    { has: n, get: s } = Kr(t)
  let r = n.call(t, e)
  r || ((e = He(e)), (r = n.call(t, e))), s && s.call(t, e)
  const a = t.delete(e)
  return r && pn(t, "delete", e, void 0), a
}
function Mo() {
  const e = He(this),
    t = e.size !== 0,
    n = e.clear()
  return t && pn(e, "clear", void 0, void 0), n
}
function br(e, t) {
  return function (s, r) {
    const a = this,
      i = a.__v_raw,
      l = He(i),
      o = t ? Oi : e ? zi : qs
    return (
      !e && Pt(l, "iterate", Xn), i.forEach((f, c) => s.call(r, o(f), o(c), a))
    )
  }
}
function yr(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      a = He(r),
      i = ms(a),
      l = e === "entries" || (e === Symbol.iterator && i),
      o = e === "keys" && i,
      f = r[e](...s),
      c = n ? Oi : t ? zi : qs
    return (
      !t && Pt(a, "iterate", o ? ii : Xn),
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
function kn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function L0() {
  const e = {
      get(a) {
        return gr(this, a)
      },
      get size() {
        return mr(this)
      },
      has: vr,
      add: $o,
      set: Po,
      delete: Io,
      clear: Mo,
      forEach: br(!1, !1),
    },
    t = {
      get(a) {
        return gr(this, a, !1, !0)
      },
      get size() {
        return mr(this)
      },
      has: vr,
      add: $o,
      set: Po,
      delete: Io,
      clear: Mo,
      forEach: br(!1, !0),
    },
    n = {
      get(a) {
        return gr(this, a, !0)
      },
      get size() {
        return mr(this, !0)
      },
      has(a) {
        return vr.call(this, a, !0)
      },
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear"),
      forEach: br(!0, !1),
    },
    s = {
      get(a) {
        return gr(this, a, !0, !0)
      },
      get size() {
        return mr(this, !0)
      },
      has(a) {
        return vr.call(this, a, !0)
      },
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear"),
      forEach: br(!0, !0),
    }
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      ;(e[a] = yr(a, !1, !1)),
        (n[a] = yr(a, !0, !1)),
        (t[a] = yr(a, !1, !0)),
        (s[a] = yr(a, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [z0, B0, j0, N0] = L0()
function Ai(e, t) {
  const n = t ? (e ? N0 : j0) : e ? B0 : z0
  return (s, r, a) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(je(n, r) && r in s ? n : s, r, a)
}
const R0 = { get: Ai(!1, !1) },
  F0 = { get: Ai(!1, !0) },
  D0 = { get: Ai(!0, !1) },
  Yu = new WeakMap(),
  Ku = new WeakMap(),
  Xu = new WeakMap(),
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
function Qs(e) {
  return xs(e) ? e : Li(e, !1, M0, R0, Yu)
}
function Ju(e) {
  return Li(e, !1, A0, F0, Ku)
}
function Zu(e) {
  return Li(e, !0, O0, D0, Xu)
}
function Li(e, t, n, s, r) {
  if (!st(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const a = r.get(e)
  if (a) return a
  const i = V0(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? s : n)
  return r.set(e, l), l
}
function bs(e) {
  return xs(e) ? bs(e.__v_raw) : !!(e && e.__v_isReactive)
}
function xs(e) {
  return !!(e && e.__v_isReadonly)
}
function Ar(e) {
  return !!(e && e.__v_isShallow)
}
function Qu(e) {
  return bs(e) || xs(e)
}
function He(e) {
  const t = e && e.__v_raw
  return t ? He(t) : e
}
function ec(e) {
  return Or(e, "__v_skip", !0), e
}
const qs = (e) => (st(e) ? Qs(e) : e),
  zi = (e) => (st(e) ? Zu(e) : e)
class tc {
  constructor(t, n, s, r) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Pi(
        () => t(this._value),
        () => kr(this, 1),
        () => this.dep && Gu(this.dep),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = He(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        Rn(t._value, (t._value = t.effect.run())) &&
        kr(t, 2),
      nc(t),
      t.effect._dirtyLevel >= 1 && kr(t, 1),
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
  let s, r
  const a = Te(e)
  return (
    a ? ((s = e), (r = Ht)) : ((s = e.get), (r = e.set)),
    new tc(s, r, a || !r, n)
  )
}
function nc(e) {
  Bn &&
    Kn &&
    ((e = He(e)),
    Du(
      Kn,
      e.dep ||
        (e.dep = Vu(() => (e.dep = void 0), e instanceof tc ? e : void 0)),
    ))
}
function kr(e, t = 2, n) {
  e = He(e)
  const s = e.dep
  s && Hu(s, t)
}
function St(e) {
  return !!(e && e.__v_isRef === !0)
}
function ee(e) {
  return sc(e, !1)
}
function q0(e) {
  return sc(e, !0)
}
function sc(e, t) {
  return St(e) ? e : new U0(e, t)
}
class U0 {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : He(t)),
      (this._value = n ? t : qs(t))
  }
  get value() {
    return nc(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Ar(t) || xs(t)
    ;(t = n ? t : He(t)),
      Rn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : qs(t)), kr(this, 2))
  }
}
function we(e) {
  return St(e) ? e.value : e
}
const Y0 = {
  get: (e, t, n) => we(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return St(r) && !St(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function rc(e) {
  return bs(e) ? e : new Proxy(e, Y0)
}
function jn(e, t, n, s) {
  let r
  try {
    r = s ? e(...s) : e()
  } catch (a) {
    Xr(a, t, n)
  }
  return r
}
function Xt(e, t, n, s) {
  if (Te(e)) {
    const a = jn(e, t, n, s)
    return (
      a &&
        Au(a) &&
        a.catch((i) => {
          Xr(i, t, n)
        }),
      a
    )
  }
  const r = []
  for (let a = 0; a < e.length; a++) r.push(Xt(e[a], t, n, s))
  return r
}
function Xr(e, t, n, s = !0) {
  const r = t ? t.vnode : null
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
      jn(o, null, 10, [e, i, l])
      return
    }
  }
  K0(e, n, r, s)
}
function K0(e, t, n, s = !0) {
  console.error(e)
}
let Us = !1,
  li = !1
const wt = []
let nn = 0
const ys = []
let In = null,
  Un = 0
const ac = Promise.resolve()
let Bi = null
function Jr(e) {
  const t = Bi || ac
  return e ? t.then(this ? e.bind(this) : e) : t
}
function X0(e) {
  let t = nn + 1,
    n = wt.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = wt[s],
      a = Ys(r)
    a < e || (a === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function ji(e) {
  ;(!wt.length || !wt.includes(e, Us && e.allowRecurse ? nn + 1 : nn)) &&
    (e.id == null ? wt.push(e) : wt.splice(X0(e.id), 0, e), ic())
}
function ic() {
  !Us && !li && ((li = !0), (Bi = ac.then(oc)))
}
function J0(e) {
  const t = wt.indexOf(e)
  t > nn && wt.splice(t, 1)
}
function Z0(e) {
  Ee(e)
    ? ys.push(...e)
    : (!In || !In.includes(e, e.allowRecurse ? Un + 1 : Un)) && ys.push(e),
    ic()
}
function Oo(e, t, n = Us ? nn + 1 : 0) {
  for (; n < wt.length; n++) {
    const s = wt[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      wt.splice(n, 1), n--, s()
    }
  }
}
function lc(e) {
  if (ys.length) {
    const t = [...new Set(ys)].sort((n, s) => Ys(n) - Ys(s))
    if (((ys.length = 0), In)) {
      In.push(...t)
      return
    }
    for (In = t, Un = 0; Un < In.length; Un++) In[Un]()
    ;(In = null), (Un = 0)
  }
}
const Ys = (e) => (e.id == null ? 1 / 0 : e.id),
  Q0 = (e, t) => {
    const n = Ys(e) - Ys(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function oc(e) {
  ;(li = !1), (Us = !0), wt.sort(Q0)
  try {
    for (nn = 0; nn < wt.length; nn++) {
      const t = wt[nn]
      t && t.active !== !1 && jn(t, null, 14)
    }
  } finally {
    ;(nn = 0),
      (wt.length = 0),
      lc(),
      (Us = !1),
      (Bi = null),
      (wt.length || ys.length) && oc()
  }
}
function eg(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || et
  let r = n
  const a = t.startsWith("update:"),
    i = a && t.slice(7)
  if (i && i in s) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: v } = s[c] || et
    v && (r = n.map((b) => (ot(b) ? b.trim() : b))), p && (r = n.map(ni))
  }
  let l,
    o = s[(l = Ba(t))] || s[(l = Ba(an(t)))]
  !o && a && (o = s[(l = Ba(ks(t)))]), o && Xt(o, e, 6, r)
  const f = s[l + "Once"]
  if (f) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Xt(f, e, 6, r)
  }
}
function uc(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const a = e.emits
  let i = {},
    l = !1
  if (!Te(e)) {
    const o = (f) => {
      const c = uc(f, t, !0)
      c && ((l = !0), bt(i, c))
    }
    !n && t.mixins.length && t.mixins.forEach(o),
      e.extends && o(e.extends),
      e.mixins && e.mixins.forEach(o)
  }
  return !a && !l
    ? (st(e) && s.set(e, null), null)
    : (Ee(a) ? a.forEach((o) => (i[o] = null)) : bt(i, a),
      st(e) && s.set(e, i),
      i)
}
function Zr(e, t) {
  return !e || !Vr(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      je(e, t[0].toLowerCase() + t.slice(1)) || je(e, ks(t)) || je(e, t))
}
let pt = null,
  Qr = null
function Lr(e) {
  const t = pt
  return (pt = e), (Qr = (e && e.type.__scopeId) || null), t
}
function er(e) {
  Qr = e
}
function tr() {
  Qr = null
}
function Ue(e, t = pt, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Go(-1)
    const a = Lr(t)
    let i
    try {
      i = e(...r)
    } finally {
      Lr(a), s._d && Go(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Na(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: a,
    propsOptions: [i],
    slots: l,
    attrs: o,
    emit: f,
    render: c,
    renderCache: p,
    data: v,
    setupState: b,
    ctx: $,
    inheritAttrs: m,
  } = e
  let _, T
  const x = Lr(e)
  try {
    if (n.shapeFlag & 4) {
      const I = r || s,
        z = I
      ;(_ = tn(c.call(z, I, p, a, b, v, $))), (T = o)
    } else {
      const I = t
      ;(_ = tn(
        I.length > 1 ? I(a, { attrs: o, slots: l, emit: f }) : I(a, null),
      )),
        (T = t.props ? o : tg(o))
    }
  } catch (I) {
    ;(Gs.length = 0), Xr(I, e, 1), (_ = he(Fn))
  }
  let w = _
  if (T && m !== !1) {
    const I = Object.keys(T),
      { shapeFlag: z } = w
    I.length && z & 7 && (i && I.some(Ti) && (T = ng(T, i)), (w = Zn(w, T)))
  }
  return (
    n.dirs && ((w = Zn(w)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (w.transition = n.transition),
    (_ = w),
    Lr(x),
    _
  )
}
const tg = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || Vr(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  ng = (e, t) => {
    const n = {}
    for (const s in e) (!Ti(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function sg(e, t, n) {
  const { props: s, children: r, component: a } = e,
    { props: i, children: l, patchFlag: o } = t,
    f = a.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return s ? Ao(s, i, f) : !!i
    if (o & 8) {
      const c = t.dynamicProps
      for (let p = 0; p < c.length; p++) {
        const v = c[p]
        if (i[v] !== s[v] && !Zr(f, v)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
        ? !1
        : s
          ? i
            ? Ao(s, i, f)
            : !0
          : !!i
  return !1
}
function Ao(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const a = s[r]
    if (t[a] !== e[a] && !Zr(n, a)) return !0
  }
  return !1
}
function rg({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ni = "components",
  ag = "directives"
function ig(e, t) {
  return Ri(Ni, e, !0, t) || e
}
const cc = Symbol.for("v-ndc")
function lg(e) {
  return ot(e) ? Ri(Ni, e, !1) || e : e || cc
}
function og(e) {
  return Ri(ag, e)
}
function Ri(e, t, n = !0, s = !1) {
  const r = pt || xt
  if (r) {
    const a = r.type
    if (e === Ni) {
      const l = Jg(a, !1)
      if (l && (l === t || l === an(t) || l === Ur(an(t)))) return a
    }
    const i = Lo(r[e] || a[e], t) || Lo(r.appContext[e], t)
    return !i && s ? a : i
  }
}
function Lo(e, t) {
  return e && (e[t] || e[an(t)] || e[Ur(an(t))])
}
const ug = (e) => e.__isSuspense
function cg(e, t) {
  t && t.pendingBranch
    ? Ee(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Z0(e)
}
const dg = Symbol.for("v-scx"),
  fg = () => ht(dg)
function vn(e, t) {
  return Fi(e, null, t)
}
const wr = {}
function Nn(e, t, n) {
  return Fi(e, t, n)
}
function Fi(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: a, onTrack: i, onTrigger: l } = et,
) {
  if (t && a) {
    const O = t
    t = (...re) => {
      O(...re), z()
    }
  }
  const o = xt,
    f = (O) => (s === !0 ? O : Yn(O, s === !1 ? 1 : void 0))
  let c,
    p = !1,
    v = !1
  if (
    (St(e)
      ? ((c = () => e.value), (p = Ar(e)))
      : bs(e)
        ? ((c = () => f(e)), (p = !0))
        : Ee(e)
          ? ((v = !0),
            (p = e.some((O) => bs(O) || Ar(O))),
            (c = () =>
              e.map((O) => {
                if (St(O)) return O.value
                if (bs(O)) return f(O)
                if (Te(O)) return jn(O, o, 2)
              })))
          : Te(e)
            ? t
              ? (c = () => jn(e, o, 2))
              : (c = () => (b && b(), Xt(e, o, 3, [$])))
            : (c = Ht),
    t && s)
  ) {
    const O = c
    c = () => Yn(O())
  }
  let b,
    $ = (O) => {
      b = w.onStop = () => {
        jn(O, o, 4), (b = w.onStop = void 0)
      }
    },
    m
  if (sa)
    if (
      (($ = Ht),
      t ? n && Xt(t, o, 3, [c(), v ? [] : void 0, $]) : c(),
      r === "sync")
    ) {
      const O = fg()
      m = O.__watcherHandles || (O.__watcherHandles = [])
    } else return Ht
  let _ = v ? new Array(e.length).fill(wr) : wr
  const T = () => {
    if (!(!w.active || !w.dirty))
      if (t) {
        const O = w.run()
        ;(s || p || (v ? O.some((re, q) => Rn(re, _[q])) : Rn(O, _))) &&
          (b && b(),
          Xt(t, o, 3, [O, _ === wr ? void 0 : v && _[0] === wr ? [] : _, $]),
          (_ = O))
      } else w.run()
  }
  T.allowRecurse = !!t
  let x
  r === "sync"
    ? (x = T)
    : r === "post"
      ? (x = () => kt(T, o && o.suspense))
      : ((T.pre = !0), o && (T.id = o.uid), (x = () => ji(T)))
  const w = new Pi(c, Ht, x),
    I = C0(),
    z = () => {
      w.stop(), I && ki(I.effects, w)
    }
  return (
    t
      ? n
        ? T()
        : (_ = w.run())
      : r === "post"
        ? kt(w.run.bind(w), o && o.suspense)
        : w.run(),
    m && m.push(z),
    z
  )
}
function pg(e, t, n) {
  const s = this.proxy,
    r = ot(e) ? (e.includes(".") ? dc(s, e) : () => s[e]) : e.bind(s, s)
  let a
  Te(t) ? (a = t) : ((a = t.handler), (n = t))
  const i = nr(this),
    l = Fi(r, a.bind(s), n)
  return i(), l
}
function dc(e, t) {
  const n = t.split(".")
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function Yn(e, t, n = 0, s) {
  if (!st(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), St(e))) Yn(e.value, t, n, s)
  else if (Ee(e)) for (let r = 0; r < e.length; r++) Yn(e[r], t, n, s)
  else if (Ou(e) || ms(e))
    e.forEach((r) => {
      Yn(r, t, n, s)
    })
  else if (zu(e)) for (const r in e) Yn(e[r], t, n, s)
  return e
}
function fc(e, t) {
  if (pt === null) return e
  const n = ra(pt) || pt.proxy,
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [a, i, l, o = et] = t[r]
    a &&
      (Te(a) && (a = { mounted: a, updated: a }),
      a.deep && Yn(i),
      s.push({
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
function Wn(e, t, n, s) {
  const r = e.dirs,
    a = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const l = r[i]
    a && (l.oldValue = a[i].value)
    let o = l.dir[s]
    o && (es(), Xt(o, n, 8, [e.el, l, e, t]), ts())
  }
}
function Bt(e, t) {
  return Te(e) ? bt({ name: e.name }, t, { setup: e }) : e
}
const Ds = (e) => !!e.type.__asyncLoader,
  pc = (e) => e.type.__isKeepAlive
function hg(e, t) {
  hc(e, "a", t)
}
function gg(e, t) {
  hc(e, "da", t)
}
function hc(e, t, n = xt) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((ea(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) pc(r.parent.vnode) && vg(s, t, n, r), (r = r.parent)
  }
}
function vg(e, t, n, s) {
  const r = ea(t, e, s, !0)
  Dn(() => {
    ki(s[t], r)
  }, n)
}
function ea(e, t, n = xt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          es()
          const l = nr(n),
            o = Xt(t, n, e, i)
          return l(), ts(), o
        })
    return s ? r.unshift(a) : r.push(a), a
  }
}
const mn =
    (e) =>
    (t, n = xt) =>
      (!sa || e === "sp") && ea(e, (...s) => t(...s), n),
  mg = mn("bm"),
  yt = mn("m"),
  Di = mn("bu"),
  Hi = mn("u"),
  Gi = mn("bum"),
  Dn = mn("um"),
  bg = mn("sp"),
  yg = mn("rtg"),
  wg = mn("rtc")
function xg(e, t = xt) {
  ea("ec", e, t)
}
function hn(e, t, n, s) {
  let r
  const a = n && n[s]
  if (Ee(e) || ot(e)) {
    r = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, a && a[i])
  } else if (typeof e == "number") {
    r = new Array(e)
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, a && a[i])
  } else if (st(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, a && a[l]))
    else {
      const i = Object.keys(e)
      r = new Array(i.length)
      for (let l = 0, o = i.length; l < o; l++) {
        const f = i[l]
        r[l] = t(e[f], f, l, a && a[l])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function Vt(e, t, n = {}, s, r) {
  if (pt.isCE || (pt.parent && Ds(pt.parent) && pt.parent.isCE))
    return t !== "default" && (n.name = t), he("slot", n, s && s())
  let a = e[t]
  a && a._c && (a._d = !1), te()
  const i = a && gc(a(n)),
    l = Ne(
      Je,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2,
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    a && a._c && (a._d = !0),
    l
  )
}
function gc(e) {
  return e.some((t) =>
    jr(t) ? !(t.type === Fn || (t.type === Je && !gc(t.children))) : !0,
  )
    ? e
    : null
}
const oi = (e) => (e ? ($c(e) ? ra(e) || e.proxy : oi(e.parent)) : null),
  Hs = bt(Object.create(null), {
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
        ;(e.effect.dirty = !0), ji(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Jr.bind(e.proxy)),
    $watch: (e) => pg.bind(e),
  }),
  Ra = (e, t) => e !== et && !e.__isScriptSetup && je(e, t),
  Sg = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
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
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return a[t]
          }
        else {
          if (Ra(s, t)) return (i[t] = 1), s[t]
          if (r !== et && je(r, t)) return (i[t] = 2), r[t]
          if ((f = e.propsOptions[0]) && je(f, t)) return (i[t] = 3), a[t]
          if (n !== et && je(n, t)) return (i[t] = 4), n[t]
          ui && (i[t] = 0)
        }
      }
      const c = Hs[t]
      let p, v
      if (c) return t === "$attrs" && Pt(e, "get", t), c(e)
      if ((p = l.__cssModules) && (p = p[t])) return p
      if (n !== et && je(n, t)) return (i[t] = 4), n[t]
      if (((v = o.config.globalProperties), je(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: a } = e
      return Ra(r, t)
        ? ((r[t] = n), !0)
        : s !== et && je(s, t)
          ? ((s[t] = n), !0)
          : je(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((a[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: a,
        },
      },
      i,
    ) {
      let l
      return (
        !!n[i] ||
        (e !== et && je(e, i)) ||
        Ra(t, i) ||
        ((l = a[0]) && je(l, i)) ||
        je(s, i) ||
        je(Hs, i) ||
        je(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : je(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function zo(e) {
  return Ee(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ui = !0
function _g(e) {
  const t = Vi(e),
    n = e.proxy,
    s = e.ctx
  ;(ui = !1), t.beforeCreate && Bo(t.beforeCreate, e, "bc")
  const {
    data: r,
    computed: a,
    methods: i,
    watch: l,
    provide: o,
    inject: f,
    created: c,
    beforeMount: p,
    mounted: v,
    beforeUpdate: b,
    updated: $,
    activated: m,
    deactivated: _,
    beforeDestroy: T,
    beforeUnmount: x,
    destroyed: w,
    unmounted: I,
    render: z,
    renderTracked: O,
    renderTriggered: re,
    errorCaptured: q,
    serverPrefetch: G,
    expose: D,
    inheritAttrs: Q,
    components: ge,
    directives: X,
    filters: Se,
  } = t
  if ((f && Eg(f, s, null), i))
    for (const oe in i) {
      const V = i[oe]
      Te(V) && (s[oe] = V.bind(n))
    }
  if (r) {
    const oe = r.call(n, n)
    st(oe) && (e.data = Qs(oe))
  }
  if (((ui = !0), a))
    for (const oe in a) {
      const V = a[oe],
        Ke = Te(V) ? V.bind(n, n) : Te(V.get) ? V.get.bind(n, n) : Ht,
        ke = !Te(V) && Te(V.set) ? V.set.bind(n) : Ht,
        tt = me({ get: Ke, set: ke })
      Object.defineProperty(s, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (nt) => (tt.value = nt),
      })
    }
  if (l) for (const oe in l) vc(l[oe], s, n, oe)
  if (o) {
    const oe = Te(o) ? o.call(n) : o
    Reflect.ownKeys(oe).forEach((V) => {
      Gt(V, oe[V])
    })
  }
  c && Bo(c, e, "c")
  function F(oe, V) {
    Ee(V) ? V.forEach((Ke) => oe(Ke.bind(n))) : V && oe(V.bind(n))
  }
  if (
    (F(mg, p),
    F(yt, v),
    F(Di, b),
    F(Hi, $),
    F(hg, m),
    F(gg, _),
    F(xg, q),
    F(wg, O),
    F(yg, re),
    F(Gi, x),
    F(Dn, I),
    F(bg, G),
    Ee(D))
  )
    if (D.length) {
      const oe = e.exposed || (e.exposed = {})
      D.forEach((V) => {
        Object.defineProperty(oe, V, {
          get: () => n[V],
          set: (Ke) => (n[V] = Ke),
        })
      })
    } else e.exposed || (e.exposed = {})
  z && e.render === Ht && (e.render = z),
    Q != null && (e.inheritAttrs = Q),
    ge && (e.components = ge),
    X && (e.directives = X)
}
function Eg(e, t, n = Ht) {
  Ee(e) && (e = ci(e))
  for (const s in e) {
    const r = e[s]
    let a
    st(r)
      ? "default" in r
        ? (a = ht(r.from || s, r.default, !0))
        : (a = ht(r.from || s))
      : (a = ht(r)),
      St(a)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (i) => (a.value = i),
          })
        : (t[s] = a)
  }
}
function Bo(e, t, n) {
  Xt(Ee(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function vc(e, t, n, s) {
  const r = s.includes(".") ? dc(n, s) : () => n[s]
  if (ot(e)) {
    const a = t[e]
    Te(a) && Nn(r, a)
  } else if (Te(e)) Nn(r, e.bind(n))
  else if (st(e))
    if (Ee(e)) e.forEach((a) => vc(a, t, n, s))
    else {
      const a = Te(e.handler) ? e.handler.bind(n) : t[e.handler]
      Te(a) && Nn(r, a, e)
    }
}
function Vi(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: a,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = a.get(t)
  let o
  return (
    l
      ? (o = l)
      : !r.length && !n && !s
        ? (o = t)
        : ((o = {}),
          r.length && r.forEach((f) => zr(o, f, i, !0)),
          zr(o, t, i)),
    st(t) && a.set(t, o),
    o
  )
}
function zr(e, t, n, s = !1) {
  const { mixins: r, extends: a } = t
  a && zr(e, a, n, !0), r && r.forEach((i) => zr(e, i, n, !0))
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = Cg[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const Cg = {
  data: jo,
  props: No,
  emits: No,
  methods: Fs,
  computed: Fs,
  beforeCreate: Et,
  created: Et,
  beforeMount: Et,
  mounted: Et,
  beforeUpdate: Et,
  updated: Et,
  beforeDestroy: Et,
  beforeUnmount: Et,
  destroyed: Et,
  unmounted: Et,
  activated: Et,
  deactivated: Et,
  errorCaptured: Et,
  serverPrefetch: Et,
  components: Fs,
  directives: Fs,
  watch: kg,
  provide: jo,
  inject: Tg,
}
function jo(e, t) {
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
  return Fs(ci(e), ci(t))
}
function ci(e) {
  if (Ee(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Fs(e, t) {
  return e ? bt(Object.create(null), e, t) : t
}
function No(e, t) {
  return e
    ? Ee(e) && Ee(t)
      ? [...new Set([...e, ...t])]
      : bt(Object.create(null), zo(e), zo(t ?? {}))
    : t
}
function kg(e, t) {
  if (!e) return t
  if (!t) return e
  const n = bt(Object.create(null), e)
  for (const s in t) n[s] = Et(e[s], t[s])
  return n
}
function mc() {
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
let $g = 0
function Pg(e, t) {
  return function (s, r = null) {
    Te(s) || (s = bt({}, s)), r != null && !st(r) && (r = null)
    const a = mc(),
      i = new WeakSet()
    let l = !1
    const o = (a.app = {
      _uid: $g++,
      _component: s,
      _props: r,
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
          const v = he(s, r)
          return (
            (v.appContext = a),
            p === !0 ? (p = "svg") : p === !1 && (p = void 0),
            c && t ? t(v, f) : e(v, f, p),
            (l = !0),
            (o._container = f),
            (f.__vue_app__ = o),
            ra(v.component) || v.component.proxy
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
        Br = o
        try {
          return f()
        } finally {
          Br = null
        }
      },
    })
    return o
  }
}
let Br = null
function Gt(e, t) {
  if (xt) {
    let n = xt.provides
    const s = xt.parent && xt.parent.provides
    s === n && (n = xt.provides = Object.create(s)), (n[e] = t)
  }
}
function ht(e, t, n = !1) {
  const s = xt || pt
  if (s || Br) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Br._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && Te(t) ? t.call(s && s.proxy) : t
  }
}
function Ig(e, t, n, s = !1) {
  const r = {},
    a = {}
  Or(a, na, 1), (e.propsDefaults = Object.create(null)), bc(e, t, r, a)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : Ju(r)) : e.type.props ? (e.props = r) : (e.props = a),
    (e.attrs = a)
}
function Mg(e, t, n, s) {
  const {
      props: r,
      attrs: a,
      vnode: { patchFlag: i },
    } = e,
    l = He(r),
    [o] = e.propsOptions
  let f = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps
      for (let p = 0; p < c.length; p++) {
        let v = c[p]
        if (Zr(e.emitsOptions, v)) continue
        const b = t[v]
        if (o)
          if (je(a, v)) b !== a[v] && ((a[v] = b), (f = !0))
          else {
            const $ = an(v)
            r[$] = di(o, l, $, b, e, !1)
          }
        else b !== a[v] && ((a[v] = b), (f = !0))
      }
    }
  } else {
    bc(e, t, r, a) && (f = !0)
    let c
    for (const p in l)
      (!t || (!je(t, p) && ((c = ks(p)) === p || !je(t, c)))) &&
        (o
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (r[p] = di(o, l, p, void 0, e, !0))
          : delete r[p])
    if (a !== l) for (const p in a) (!t || !je(t, p)) && (delete a[p], (f = !0))
  }
  f && pn(e, "set", "$attrs")
}
function bc(e, t, n, s) {
  const [r, a] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let o in t) {
      if (Cr(o)) continue
      const f = t[o]
      let c
      r && je(r, (c = an(o)))
        ? !a || !a.includes(c)
          ? (n[c] = f)
          : ((l || (l = {}))[c] = f)
        : Zr(e.emitsOptions, o) ||
          ((!(o in s) || f !== s[o]) && ((s[o] = f), (i = !0)))
    }
  if (a) {
    const o = He(n),
      f = l || et
    for (let c = 0; c < a.length; c++) {
      const p = a[c]
      n[p] = di(r, o, p, f[p], e, !je(f, p))
    }
  }
  return i
}
function di(e, t, n, s, r, a) {
  const i = e[n]
  if (i != null) {
    const l = je(i, "default")
    if (l && s === void 0) {
      const o = i.default
      if (i.type !== Function && !i.skipFactory && Te(o)) {
        const { propsDefaults: f } = r
        if (n in f) s = f[n]
        else {
          const c = nr(r)
          ;(s = f[n] = o.call(null, t)), c()
        }
      } else s = o
    }
    i[0] && (a && !l ? (s = !1) : i[1] && (s === "" || s === ks(n)) && (s = !0))
  }
  return s
}
function yc(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const a = e.props,
    i = {},
    l = []
  let o = !1
  if (!Te(e)) {
    const c = (p) => {
      o = !0
      const [v, b] = yc(p, t, !0)
      bt(i, v), b && l.push(...b)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!a && !o) return st(e) && s.set(e, vs), vs
  if (Ee(a))
    for (let c = 0; c < a.length; c++) {
      const p = an(a[c])
      Ro(p) && (i[p] = et)
    }
  else if (a)
    for (const c in a) {
      const p = an(c)
      if (Ro(p)) {
        const v = a[c],
          b = (i[p] = Ee(v) || Te(v) ? { type: v } : bt({}, v))
        if (b) {
          const $ = Ho(Boolean, b.type),
            m = Ho(String, b.type)
          ;(b[0] = $ > -1),
            (b[1] = m < 0 || $ < m),
            ($ > -1 || je(b, "default")) && l.push(p)
        }
      }
    }
  const f = [i, l]
  return st(e) && s.set(e, f), f
}
function Ro(e) {
  return e[0] !== "$"
}
function Fo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function Do(e, t) {
  return Fo(e) === Fo(t)
}
function Ho(e, t) {
  return Ee(t) ? t.findIndex((n) => Do(n, e)) : Te(t) && Do(t, e) ? 0 : -1
}
const wc = (e) => e[0] === "_" || e === "$stable",
  Wi = (e) => (Ee(e) ? e.map(tn) : [tn(e)]),
  Og = (e, t, n) => {
    if (t._n) return t
    const s = Ue((...r) => Wi(t(...r)), n)
    return (s._c = !1), s
  },
  xc = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (wc(r)) continue
      const a = e[r]
      if (Te(a)) t[r] = Og(r, a, s)
      else if (a != null) {
        const i = Wi(a)
        t[r] = () => i
      }
    }
  },
  Sc = (e, t) => {
    const n = Wi(t)
    e.slots.default = () => n
  },
  Ag = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = He(t)), Or(t, "_", n)) : xc(t, (e.slots = {}))
    } else (e.slots = {}), t && Sc(e, t)
    Or(e.slots, na, 1)
  },
  Lg = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let a = !0,
      i = et
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (a = !1)
          : (bt(r, t), !n && l === 1 && delete r._)
        : ((a = !t.$stable), xc(t, r)),
        (i = t)
    } else t && (Sc(e, t), (i = { default: 1 }))
    if (a) for (const l in r) !wc(l) && i[l] == null && delete r[l]
  }
function fi(e, t, n, s, r = !1) {
  if (Ee(e)) {
    e.forEach((v, b) => fi(v, t && (Ee(t) ? t[b] : t), n, s, r))
    return
  }
  if (Ds(s) && !r) return
  const a = s.shapeFlag & 4 ? ra(s.component) || s.component.proxy : s.el,
    i = r ? null : a,
    { i: l, r: o } = e,
    f = t && t.r,
    c = l.refs === et ? (l.refs = {}) : l.refs,
    p = l.setupState
  if (
    (f != null &&
      f !== o &&
      (ot(f)
        ? ((c[f] = null), je(p, f) && (p[f] = null))
        : St(f) && (f.value = null)),
    Te(o))
  )
    jn(o, l, 12, [i, c])
  else {
    const v = ot(o),
      b = St(o),
      $ = e.f
    if (v || b) {
      const m = () => {
        if ($) {
          const _ = v ? (je(p, o) ? p[o] : c[o]) : o.value
          r
            ? Ee(_) && ki(_, a)
            : Ee(_)
              ? _.includes(a) || _.push(a)
              : v
                ? ((c[o] = [a]), je(p, o) && (p[o] = c[o]))
                : ((o.value = [a]), e.k && (c[e.k] = o.value))
        } else
          v
            ? ((c[o] = i), je(p, o) && (p[o] = i))
            : b && ((o.value = i), e.k && (c[e.k] = i))
      }
      r || $ ? m() : ((m.id = -1), kt(m, n))
    }
  }
}
const kt = cg
function zg(e) {
  return Bg(e)
}
function Bg(e, t) {
  const n = Bu()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: a,
      createElement: i,
      createText: l,
      createComment: o,
      setText: f,
      setElementText: c,
      parentNode: p,
      nextSibling: v,
      setScopeId: b = Ht,
      insertStaticContent: $,
    } = e,
    m = (
      S,
      C,
      B,
      H = null,
      R = null,
      Z = null,
      ae = void 0,
      J = null,
      ne = !!C.dynamicChildren,
    ) => {
      if (S === C) return
      S && !zs(S, C) && ((H = N(S)), nt(S, R, Z, !0), (S = null)),
        C.patchFlag === -2 && ((ne = !1), (C.dynamicChildren = null))
      const { type: U, ref: ue, shapeFlag: be } = C
      switch (U) {
        case ta:
          _(S, C, B, H)
          break
        case Fn:
          T(S, C, B, H)
          break
        case $r:
          S == null && x(C, B, H, ae)
          break
        case Je:
          ge(S, C, B, H, R, Z, ae, J, ne)
          break
        default:
          be & 1
            ? z(S, C, B, H, R, Z, ae, J, ne)
            : be & 6
              ? X(S, C, B, H, R, Z, ae, J, ne)
              : (be & 64 || be & 128) &&
                U.process(S, C, B, H, R, Z, ae, J, ne, pe)
      }
      ue != null && R && fi(ue, S && S.ref, Z, C || S, !C)
    },
    _ = (S, C, B, H) => {
      if (S == null) s((C.el = l(C.children)), B, H)
      else {
        const R = (C.el = S.el)
        C.children !== S.children && f(R, C.children)
      }
    },
    T = (S, C, B, H) => {
      S == null ? s((C.el = o(C.children || "")), B, H) : (C.el = S.el)
    },
    x = (S, C, B, H) => {
      ;[S.el, S.anchor] = $(S.children, C, B, H, S.el, S.anchor)
    },
    w = ({ el: S, anchor: C }, B, H) => {
      let R
      for (; S && S !== C; ) (R = v(S)), s(S, B, H), (S = R)
      s(C, B, H)
    },
    I = ({ el: S, anchor: C }) => {
      let B
      for (; S && S !== C; ) (B = v(S)), r(S), (S = B)
      r(C)
    },
    z = (S, C, B, H, R, Z, ae, J, ne) => {
      C.type === "svg" ? (ae = "svg") : C.type === "math" && (ae = "mathml"),
        S == null ? O(C, B, H, R, Z, ae, J, ne) : G(S, C, R, Z, ae, J, ne)
    },
    O = (S, C, B, H, R, Z, ae, J) => {
      let ne, U
      const { props: ue, shapeFlag: be, transition: ve, dirs: _e } = S
      if (
        ((ne = S.el = i(S.type, Z, ue && ue.is, ue)),
        be & 8
          ? c(ne, S.children)
          : be & 16 && q(S.children, ne, null, H, R, Fa(S, Z), ae, J),
        _e && Wn(S, null, H, "created"),
        re(ne, S, S.scopeId, ae, H),
        ue)
      ) {
        for (const Fe in ue)
          Fe !== "value" &&
            !Cr(Fe) &&
            a(ne, Fe, null, ue[Fe], Z, S.children, H, R, it)
        "value" in ue && a(ne, "value", null, ue.value, Z),
          (U = ue.onVnodeBeforeMount) && en(U, H, S)
      }
      _e && Wn(S, null, H, "beforeMount")
      const Pe = jg(R, ve)
      Pe && ve.beforeEnter(ne),
        s(ne, C, B),
        ((U = ue && ue.onVnodeMounted) || Pe || _e) &&
          kt(() => {
            U && en(U, H, S),
              Pe && ve.enter(ne),
              _e && Wn(S, null, H, "mounted")
          }, R)
    },
    re = (S, C, B, H, R) => {
      if ((B && b(S, B), H)) for (let Z = 0; Z < H.length; Z++) b(S, H[Z])
      if (R) {
        let Z = R.subTree
        if (C === Z) {
          const ae = R.vnode
          re(S, ae, ae.scopeId, ae.slotScopeIds, R.parent)
        }
      }
    },
    q = (S, C, B, H, R, Z, ae, J, ne = 0) => {
      for (let U = ne; U < S.length; U++) {
        const ue = (S[U] = J ? Mn(S[U]) : tn(S[U]))
        m(null, ue, C, B, H, R, Z, ae, J)
      }
    },
    G = (S, C, B, H, R, Z, ae) => {
      const J = (C.el = S.el)
      let { patchFlag: ne, dynamicChildren: U, dirs: ue } = C
      ne |= S.patchFlag & 16
      const be = S.props || et,
        ve = C.props || et
      let _e
      if (
        (B && qn(B, !1),
        (_e = ve.onVnodeBeforeUpdate) && en(_e, B, C, S),
        ue && Wn(C, S, B, "beforeUpdate"),
        B && qn(B, !0),
        U
          ? D(S.dynamicChildren, U, J, B, H, Fa(C, R), Z)
          : ae || V(S, C, J, null, B, H, Fa(C, R), Z, !1),
        ne > 0)
      ) {
        if (ne & 16) Q(J, C, be, ve, B, H, R)
        else if (
          (ne & 2 && be.class !== ve.class && a(J, "class", null, ve.class, R),
          ne & 4 && a(J, "style", be.style, ve.style, R),
          ne & 8)
        ) {
          const Pe = C.dynamicProps
          for (let Fe = 0; Fe < Pe.length; Fe++) {
            const Xe = Pe[Fe],
              at = be[Xe],
              It = ve[Xe]
            ;(It !== at || Xe === "value") &&
              a(J, Xe, at, It, R, S.children, B, H, it)
          }
        }
        ne & 1 && S.children !== C.children && c(J, C.children)
      } else !ae && U == null && Q(J, C, be, ve, B, H, R)
      ;((_e = ve.onVnodeUpdated) || ue) &&
        kt(() => {
          _e && en(_e, B, C, S), ue && Wn(C, S, B, "updated")
        }, H)
    },
    D = (S, C, B, H, R, Z, ae) => {
      for (let J = 0; J < C.length; J++) {
        const ne = S[J],
          U = C[J],
          ue =
            ne.el && (ne.type === Je || !zs(ne, U) || ne.shapeFlag & 70)
              ? p(ne.el)
              : B
        m(ne, U, ue, null, H, R, Z, ae, !0)
      }
    },
    Q = (S, C, B, H, R, Z, ae) => {
      if (B !== H) {
        if (B !== et)
          for (const J in B)
            !Cr(J) && !(J in H) && a(S, J, B[J], null, ae, C.children, R, Z, it)
        for (const J in H) {
          if (Cr(J)) continue
          const ne = H[J],
            U = B[J]
          ne !== U && J !== "value" && a(S, J, U, ne, ae, C.children, R, Z, it)
        }
        "value" in H && a(S, "value", B.value, H.value, ae)
      }
    },
    ge = (S, C, B, H, R, Z, ae, J, ne) => {
      const U = (C.el = S ? S.el : l("")),
        ue = (C.anchor = S ? S.anchor : l(""))
      let { patchFlag: be, dynamicChildren: ve, slotScopeIds: _e } = C
      _e && (J = J ? J.concat(_e) : _e),
        S == null
          ? (s(U, B, H),
            s(ue, B, H),
            q(C.children || [], B, ue, R, Z, ae, J, ne))
          : be > 0 && be & 64 && ve && S.dynamicChildren
            ? (D(S.dynamicChildren, ve, B, R, Z, ae, J),
              (C.key != null || (R && C === R.subTree)) && _c(S, C, !0))
            : V(S, C, B, ue, R, Z, ae, J, ne)
    },
    X = (S, C, B, H, R, Z, ae, J, ne) => {
      ;(C.slotScopeIds = J),
        S == null
          ? C.shapeFlag & 512
            ? R.ctx.activate(C, B, H, ae, ne)
            : Se(C, B, H, R, Z, ae, ne)
          : Ce(S, C, ne)
    },
    Se = (S, C, B, H, R, Z, ae) => {
      const J = (S.component = qg(S, H, R))
      if ((pc(S) && (J.ctx.renderer = pe), Ug(J), J.asyncDep)) {
        if ((R && R.registerDep(J, F), !S.el)) {
          const ne = (J.subTree = he(Fn))
          T(null, ne, C, B)
        }
      } else F(J, S, C, B, R, Z, ae)
    },
    Ce = (S, C, B) => {
      const H = (C.component = S.component)
      if (sg(S, C, B))
        if (H.asyncDep && !H.asyncResolved) {
          oe(H, C, B)
          return
        } else (H.next = C), J0(H.update), (H.effect.dirty = !0), H.update()
      else (C.el = S.el), (H.vnode = C)
    },
    F = (S, C, B, H, R, Z, ae) => {
      const J = () => {
          if (S.isMounted) {
            let { next: ue, bu: be, u: ve, parent: _e, vnode: Pe } = S
            {
              const xn = Ec(S)
              if (xn) {
                ue && ((ue.el = Pe.el), oe(S, ue, ae)),
                  xn.asyncDep.then(() => {
                    S.isUnmounted || J()
                  })
                return
              }
            }
            let Fe = ue,
              Xe
            qn(S, !1),
              ue ? ((ue.el = Pe.el), oe(S, ue, ae)) : (ue = Pe),
              be && Tr(be),
              (Xe = ue.props && ue.props.onVnodeBeforeUpdate) &&
                en(Xe, _e, ue, Pe),
              qn(S, !0)
            const at = Na(S),
              It = S.subTree
            ;(S.subTree = at),
              m(It, at, p(It.el), N(It), S, R, Z),
              (ue.el = at.el),
              Fe === null && rg(S, at.el),
              ve && kt(ve, R),
              (Xe = ue.props && ue.props.onVnodeUpdated) &&
                kt(() => en(Xe, _e, ue, Pe), R)
          } else {
            let ue
            const { el: be, props: ve } = C,
              { bm: _e, m: Pe, parent: Fe } = S,
              Xe = Ds(C)
            if (
              (qn(S, !1),
              _e && Tr(_e),
              !Xe && (ue = ve && ve.onVnodeBeforeMount) && en(ue, Fe, C),
              qn(S, !0),
              be && Ze)
            ) {
              const at = () => {
                ;(S.subTree = Na(S)), Ze(be, S.subTree, S, R, null)
              }
              Xe
                ? C.type.__asyncLoader().then(() => !S.isUnmounted && at())
                : at()
            } else {
              const at = (S.subTree = Na(S))
              m(null, at, B, H, S, R, Z), (C.el = at.el)
            }
            if ((Pe && kt(Pe, R), !Xe && (ue = ve && ve.onVnodeMounted))) {
              const at = C
              kt(() => en(ue, Fe, at), R)
            }
            ;(C.shapeFlag & 256 ||
              (Fe && Ds(Fe.vnode) && Fe.vnode.shapeFlag & 256)) &&
              S.a &&
              kt(S.a, R),
              (S.isMounted = !0),
              (C = B = H = null)
          }
        },
        ne = (S.effect = new Pi(J, Ht, () => ji(U), S.scope)),
        U = (S.update = () => {
          ne.dirty && ne.run()
        })
      ;(U.id = S.uid), qn(S, !0), U()
    },
    oe = (S, C, B) => {
      C.component = S
      const H = S.vnode.props
      ;(S.vnode = C),
        (S.next = null),
        Mg(S, C.props, H, B),
        Lg(S, C.children, B),
        es(),
        Oo(S),
        ts()
    },
    V = (S, C, B, H, R, Z, ae, J, ne = !1) => {
      const U = S && S.children,
        ue = S ? S.shapeFlag : 0,
        be = C.children,
        { patchFlag: ve, shapeFlag: _e } = C
      if (ve > 0) {
        if (ve & 128) {
          ke(U, be, B, H, R, Z, ae, J, ne)
          return
        } else if (ve & 256) {
          Ke(U, be, B, H, R, Z, ae, J, ne)
          return
        }
      }
      _e & 8
        ? (ue & 16 && it(U, R, Z), be !== U && c(B, be))
        : ue & 16
          ? _e & 16
            ? ke(U, be, B, H, R, Z, ae, J, ne)
            : it(U, R, Z, !0)
          : (ue & 8 && c(B, ""), _e & 16 && q(be, B, H, R, Z, ae, J, ne))
    },
    Ke = (S, C, B, H, R, Z, ae, J, ne) => {
      ;(S = S || vs), (C = C || vs)
      const U = S.length,
        ue = C.length,
        be = Math.min(U, ue)
      let ve
      for (ve = 0; ve < be; ve++) {
        const _e = (C[ve] = ne ? Mn(C[ve]) : tn(C[ve]))
        m(S[ve], _e, B, null, R, Z, ae, J, ne)
      }
      U > ue ? it(S, R, Z, !0, !1, be) : q(C, B, H, R, Z, ae, J, ne, be)
    },
    ke = (S, C, B, H, R, Z, ae, J, ne) => {
      let U = 0
      const ue = C.length
      let be = S.length - 1,
        ve = ue - 1
      for (; U <= be && U <= ve; ) {
        const _e = S[U],
          Pe = (C[U] = ne ? Mn(C[U]) : tn(C[U]))
        if (zs(_e, Pe)) m(_e, Pe, B, null, R, Z, ae, J, ne)
        else break
        U++
      }
      for (; U <= be && U <= ve; ) {
        const _e = S[be],
          Pe = (C[ve] = ne ? Mn(C[ve]) : tn(C[ve]))
        if (zs(_e, Pe)) m(_e, Pe, B, null, R, Z, ae, J, ne)
        else break
        be--, ve--
      }
      if (U > be) {
        if (U <= ve) {
          const _e = ve + 1,
            Pe = _e < ue ? C[_e].el : H
          for (; U <= ve; )
            m(null, (C[U] = ne ? Mn(C[U]) : tn(C[U])), B, Pe, R, Z, ae, J, ne),
              U++
        }
      } else if (U > ve) for (; U <= be; ) nt(S[U], R, Z, !0), U++
      else {
        const _e = U,
          Pe = U,
          Fe = new Map()
        for (U = Pe; U <= ve; U++) {
          const _t = (C[U] = ne ? Mn(C[U]) : tn(C[U]))
          _t.key != null && Fe.set(_t.key, U)
        }
        let Xe,
          at = 0
        const It = ve - Pe + 1
        let xn = !1,
          Is = 0
        const Sn = new Array(It)
        for (U = 0; U < It; U++) Sn[U] = 0
        for (U = _e; U <= be; U++) {
          const _t = S[U]
          if (at >= It) {
            nt(_t, R, Z, !0)
            continue
          }
          let Mt
          if (_t.key != null) Mt = Fe.get(_t.key)
          else
            for (Xe = Pe; Xe <= ve; Xe++)
              if (Sn[Xe - Pe] === 0 && zs(_t, C[Xe])) {
                Mt = Xe
                break
              }
          Mt === void 0
            ? nt(_t, R, Z, !0)
            : ((Sn[Mt - Pe] = U + 1),
              Mt >= Is ? (Is = Mt) : (xn = !0),
              m(_t, C[Mt], B, null, R, Z, ae, J, ne),
              at++)
        }
        const ar = xn ? Ng(Sn) : vs
        for (Xe = ar.length - 1, U = It - 1; U >= 0; U--) {
          const _t = Pe + U,
            Mt = C[_t],
            Ms = _t + 1 < ue ? C[_t + 1].el : H
          Sn[U] === 0
            ? m(null, Mt, B, Ms, R, Z, ae, J, ne)
            : xn && (Xe < 0 || U !== ar[Xe] ? tt(Mt, B, Ms, 2) : Xe--)
        }
      }
    },
    tt = (S, C, B, H, R = null) => {
      const { el: Z, type: ae, transition: J, children: ne, shapeFlag: U } = S
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
        s(Z, C, B)
        for (let be = 0; be < ne.length; be++) tt(ne[be], C, B, H)
        s(S.anchor, C, B)
        return
      }
      if (ae === $r) {
        w(S, C, B)
        return
      }
      if (H !== 2 && U & 1 && J)
        if (H === 0) J.beforeEnter(Z), s(Z, C, B), kt(() => J.enter(Z), R)
        else {
          const { leave: be, delayLeave: ve, afterLeave: _e } = J,
            Pe = () => s(Z, C, B),
            Fe = () => {
              be(Z, () => {
                Pe(), _e && _e()
              })
            }
          ve ? ve(Z, Pe, Fe) : Fe()
        }
      else s(Z, C, B)
    },
    nt = (S, C, B, H = !1, R = !1) => {
      const {
        type: Z,
        props: ae,
        ref: J,
        children: ne,
        dynamicChildren: U,
        shapeFlag: ue,
        patchFlag: be,
        dirs: ve,
      } = S
      if ((J != null && fi(J, null, B, S, !0), ue & 256)) {
        C.ctx.deactivate(S)
        return
      }
      const _e = ue & 1 && ve,
        Pe = !Ds(S)
      let Fe
      if ((Pe && (Fe = ae && ae.onVnodeBeforeUnmount) && en(Fe, C, S), ue & 6))
        Ct(S.component, B, H)
      else {
        if (ue & 128) {
          S.suspense.unmount(B, H)
          return
        }
        _e && Wn(S, null, C, "beforeUnmount"),
          ue & 64
            ? S.type.remove(S, C, B, R, pe, H)
            : U && (Z !== Je || (be > 0 && be & 64))
              ? it(U, C, B, !1, !0)
              : ((Z === Je && be & 384) || (!R && ue & 16)) && it(ne, C, B),
          H && Qt(S)
      }
      ;((Pe && (Fe = ae && ae.onVnodeUnmounted)) || _e) &&
        kt(() => {
          Fe && en(Fe, C, S), _e && Wn(S, null, C, "unmounted")
        }, B)
    },
    Qt = (S) => {
      const { type: C, el: B, anchor: H, transition: R } = S
      if (C === Je) {
        Dt(B, H)
        return
      }
      if (C === $r) {
        I(S)
        return
      }
      const Z = () => {
        r(B), R && !R.persisted && R.afterLeave && R.afterLeave()
      }
      if (S.shapeFlag & 1 && R && !R.persisted) {
        const { leave: ae, delayLeave: J } = R,
          ne = () => ae(B, Z)
        J ? J(S.el, Z, ne) : ne()
      } else Z()
    },
    Dt = (S, C) => {
      let B
      for (; S !== C; ) (B = v(S)), r(S), (S = B)
      r(C)
    },
    Ct = (S, C, B) => {
      const { bum: H, scope: R, update: Z, subTree: ae, um: J } = S
      H && Tr(H),
        R.stop(),
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
    it = (S, C, B, H = !1, R = !1, Z = 0) => {
      for (let ae = Z; ae < S.length; ae++) nt(S[ae], C, B, H, R)
    },
    N = (S) =>
      S.shapeFlag & 6
        ? N(S.component.subTree)
        : S.shapeFlag & 128
          ? S.suspense.next()
          : v(S.anchor || S.el)
  let le = !1
  const se = (S, C, B) => {
      S == null
        ? C._vnode && nt(C._vnode, null, null, !0)
        : m(C._vnode || null, S, C, null, null, null, B),
        le || ((le = !0), Oo(), lc(), (le = !1)),
        (C._vnode = S)
    },
    pe = {
      p: m,
      um: nt,
      m: tt,
      r: Qt,
      mt: Se,
      mc: q,
      pc: V,
      pbc: D,
      n: N,
      o: e,
    }
  let Re, Ze
  return (
    t && ([Re, Ze] = t(pe)), { render: se, hydrate: Re, createApp: Pg(se, Re) }
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
function jg(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function _c(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (Ee(s) && Ee(r))
    for (let a = 0; a < s.length; a++) {
      const i = s[a]
      let l = r[a]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[a] = Mn(r[a])), (l.el = i.el)),
        n || _c(i, l)),
        l.type === ta && (l.el = i.el)
    }
}
function Ng(e) {
  const t = e.slice(),
    n = [0]
  let s, r, a, i, l
  const o = e.length
  for (s = 0; s < o; s++) {
    const f = e[s]
    if (f !== 0) {
      if (((r = n[n.length - 1]), e[r] < f)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (a = 0, i = n.length - 1; a < i; )
        (l = (a + i) >> 1), e[n[l]] < f ? (a = l + 1) : (i = l)
      f < e[n[a]] && (a > 0 && (t[s] = n[a - 1]), (n[a] = s))
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; ) (n[a] = i), (i = t[i])
  return n
}
function Ec(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ec(t)
}
const Rg = (e) => e.__isTeleport,
  Je = Symbol.for("v-fgt"),
  ta = Symbol.for("v-txt"),
  Fn = Symbol.for("v-cmt"),
  $r = Symbol.for("v-stc"),
  Gs = []
let Kt = null
function te(e = !1) {
  Gs.push((Kt = e ? null : []))
}
function Fg() {
  Gs.pop(), (Kt = Gs[Gs.length - 1] || null)
}
let Ks = 1
function Go(e) {
  Ks += e
}
function Cc(e) {
  return (
    (e.dynamicChildren = Ks > 0 ? Kt || vs : null),
    Fg(),
    Ks > 0 && Kt && Kt.push(e),
    e
  )
}
function xe(e, t, n, s, r, a) {
  return Cc(g(e, t, n, s, r, a, !0))
}
function Ne(e, t, n, s, r) {
  return Cc(he(e, t, n, s, r, !0))
}
function jr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function zs(e, t) {
  return e.type === t.type && e.key === t.key
}
const na = "__vInternal",
  Tc = ({ key: e }) => e ?? null,
  Pr = ({ ref: e, ref_key: t, ref_for: n }) => (
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
  s = 0,
  r = null,
  a = e === Je ? 0 : 1,
  i = !1,
  l = !1,
) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Tc(t),
    ref: t && Pr(t),
    scopeId: Qr,
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
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pt,
  }
  return (
    l
      ? (qi(o, n), a & 128 && e.normalize(o))
      : n && (o.shapeFlag |= ot(n) ? 8 : 16),
    Ks > 0 &&
      !i &&
      Kt &&
      (o.patchFlag > 0 || a & 6) &&
      o.patchFlag !== 32 &&
      Kt.push(o),
    o
  )
}
const he = Dg
function Dg(e, t = null, n = null, s = 0, r = null, a = !1) {
  if (((!e || e === cc) && (e = Fn), jr(e))) {
    const l = Zn(e, t, !0)
    return (
      n && qi(l, n),
      Ks > 0 &&
        !a &&
        Kt &&
        (l.shapeFlag & 6 ? (Kt[Kt.indexOf(e)] = l) : Kt.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Zg(e) && (e = e.__vccOpts), t)) {
    t = Hg(t)
    let { class: l, style: o } = t
    l && !ot(l) && (t.class = M(l)),
      st(o) && (Qu(o) && !Ee(o) && (o = bt({}, o)), (t.style = Yr(o)))
  }
  const i = ot(e) ? 1 : ug(e) ? 128 : Rg(e) ? 64 : st(e) ? 4 : Te(e) ? 2 : 0
  return g(e, t, n, s, r, i, a, !0)
}
function Hg(e) {
  return e ? (Qu(e) || na in e ? bt({}, e) : e) : null
}
function Zn(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: a, children: i } = e,
    l = t ? Gg(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Tc(l),
    ref:
      t && t.ref
        ? n && r
          ? Ee(r)
            ? r.concat(Pr(t))
            : [r, Pr(t)]
          : Pr(t)
        : r,
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
function $e(e = " ", t = 0) {
  return he(ta, null, e, t)
}
function kc(e, t) {
  const n = he($r, null, e)
  return (n.staticCount = t), n
}
function rt(e = "", t = !1) {
  return t ? (te(), Ne(Fn, null, e)) : he(Fn, null, e)
}
function tn(e) {
  return e == null || typeof e == "boolean"
    ? he(Fn)
    : Ee(e)
      ? he(Je, null, e.slice())
      : typeof e == "object"
        ? Mn(e)
        : he(ta, null, String(e))
}
function Mn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Zn(e)
}
function qi(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (Ee(t)) n = 16
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), qi(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(na in t)
        ? (t._ctx = pt)
        : r === 3 &&
          pt &&
          (pt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Te(t)
      ? ((t = { default: t, _ctx: pt }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [$e(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Gg(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = M([t.class, s.class]))
      else if (r === "style") t.style = Yr([t.style, s.style])
      else if (Vr(r)) {
        const a = t[r],
          i = s[r]
        i &&
          a !== i &&
          !(Ee(a) && a.includes(i)) &&
          (t[r] = a ? [].concat(a, i) : i)
      } else r !== "" && (t[r] = s[r])
  }
  return t
}
function en(e, t, n, s = null) {
  Xt(e, t, 7, [n, s])
}
const Vg = mc()
let Wg = 0
function qg(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Vg,
    a = {
      uid: Wg++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new _0(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: yc(s, r),
      emitsOptions: uc(s, r),
      emit: null,
      emitted: null,
      propsDefaults: et,
      inheritAttrs: s.inheritAttrs,
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
  Nr,
  pi
{
  const e = Bu(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (a) => {
          r.length > 1 ? r.forEach((i) => i(a)) : r[0](a)
        }
      )
    }
  ;(Nr = t("__VUE_INSTANCE_SETTERS__", (n) => (xt = n))),
    (pi = t("__VUE_SSR_SETTERS__", (n) => (sa = n)))
}
const nr = (e) => {
    const t = xt
    return (
      Nr(e),
      e.scope.on(),
      () => {
        e.scope.off(), Nr(t)
      }
    )
  },
  Vo = () => {
    xt && xt.scope.off(), Nr(null)
  }
function $c(e) {
  return e.vnode.shapeFlag & 4
}
let sa = !1
function Ug(e, t = !1) {
  t && pi(t)
  const { props: n, children: s } = e.vnode,
    r = $c(e)
  Ig(e, n, r, t), Ag(e, s)
  const a = r ? Yg(e, t) : void 0
  return t && pi(!1), a
}
function Yg(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = ec(new Proxy(e.ctx, Sg)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Xg(e) : null),
      a = nr(e)
    es()
    const i = jn(s, e, 0, [e.props, r])
    if ((ts(), a(), Au(i))) {
      if ((i.then(Vo, Vo), t))
        return i
          .then((l) => {
            Wo(e, l, t)
          })
          .catch((l) => {
            Xr(l, e, 0)
          })
      e.asyncDep = i
    } else Wo(e, i, t)
  } else Pc(e, t)
}
function Wo(e, t, n) {
  Te(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : st(t) && (e.setupState = rc(t)),
    Pc(e, n)
}
let qo
function Pc(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && qo && !s.render) {
      const r = s.template || Vi(e).template
      if (r) {
        const { isCustomElement: a, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: o } = s,
          f = bt(bt({ isCustomElement: a, delimiters: l }, i), o)
        s.render = qo(r, f)
      }
    }
    e.render = s.render || Ht
  }
  {
    const r = nr(e)
    es()
    try {
      _g(e)
    } finally {
      ts(), r()
    }
  }
}
function Kg(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Pt(e, "get", "$attrs"), t[n]
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
function ra(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(rc(ec(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Hs) return Hs[n](e)
        },
        has(t, n) {
          return n in t || n in Hs
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
const me = (e, t) => W0(e, t, sa)
function Ye(e, t, n) {
  const s = arguments.length
  return s === 2
    ? st(t) && !Ee(t)
      ? jr(t)
        ? he(e, null, [t])
        : he(e, t)
      : he(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && jr(n) && (n = [n]),
      he(e, t, n))
}
const Qg = "3.4.15"
const ev = "http://www.w3.org/2000/svg",
  tv = "http://www.w3.org/1998/Math/MathML",
  On = typeof document < "u" ? document : null,
  Uo = On && On.createElement("template"),
  nv = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? On.createElementNS(ev, e)
          : t === "mathml"
            ? On.createElementNS(tv, e)
            : On.createElement(e, n ? { is: n } : void 0)
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      )
    },
    createText: (e) => On.createTextNode(e),
    createComment: (e) => On.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => On.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, r, a) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === a || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === a || !(r = r.nextSibling));

        );
      else {
        Uo.innerHTML =
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
              ? `<math>${e}</math>`
              : e
        const l = Uo.content
        if (s === "svg" || s === "mathml") {
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
  sv = Symbol("_vtc")
function rv(e, t, n) {
  const s = e[sv]
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const av = Symbol("_vod"),
  iv = Symbol("")
function lv(e, t, n) {
  const s = e.style,
    r = s.display,
    a = ot(n)
  if (n && !a) {
    if (t && !ot(t)) for (const i in t) n[i] == null && hi(s, i, "")
    for (const i in n) hi(s, i, n[i])
  } else if (a) {
    if (t !== n) {
      const i = s[iv]
      i && (n += ";" + i), (s.cssText = n)
    }
  } else t && e.removeAttribute("style")
  av in e && (s.display = r)
}
const Yo = /\s*!important$/
function hi(e, t, n) {
  if (Ee(n)) n.forEach((s) => hi(e, t, s))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const s = ov(e, t)
    Yo.test(n)
      ? e.setProperty(ks(s), n.replace(Yo, ""), "important")
      : (e[s] = n)
  }
}
const Ko = ["Webkit", "Moz", "ms"],
  Da = {}
function ov(e, t) {
  const n = Da[t]
  if (n) return n
  let s = an(t)
  if (s !== "filter" && s in e) return (Da[t] = s)
  s = Ur(s)
  for (let r = 0; r < Ko.length; r++) {
    const a = Ko[r] + s
    if (a in e) return (Da[t] = a)
  }
  return t
}
const Xo = "http://www.w3.org/1999/xlink"
function uv(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Xo, t.slice(6, t.length))
      : e.setAttributeNS(Xo, t, n)
  else {
    const a = S0(t)
    n == null || (a && !ju(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n)
  }
}
function cv(e, t, n, s, r, a, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, a), (e[t] = n ?? "")
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
      ? (n = ju(n))
      : n == null && f === "string"
        ? ((n = ""), (o = !0))
        : f === "number" && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(t)
}
function ps(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function dv(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Jo = Symbol("_vei")
function fv(e, t, n, s, r = null) {
  const a = e[Jo] || (e[Jo] = {}),
    i = a[t]
  if (s && i) i.value = s
  else {
    const [l, o] = pv(t)
    if (s) {
      const f = (a[t] = vv(s, r))
      ps(e, l, f, o)
    } else i && (dv(e, l, i, o), (a[t] = void 0))
  }
}
const Zo = /(?:Once|Passive|Capture)$/
function pv(e) {
  let t
  if (Zo.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Zo)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : ks(e.slice(2)), t]
}
let Ha = 0
const hv = Promise.resolve(),
  gv = () => Ha || (hv.then(() => (Ha = 0)), (Ha = Date.now()))
function vv(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Xt(mv(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = gv()), n
}
function mv(e, t) {
  if (Ee(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Qo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  bv = (e, t, n, s, r, a, i, l, o) => {
    const f = r === "svg"
    t === "class"
      ? rv(e, s, f)
      : t === "style"
        ? lv(e, n, s)
        : Vr(t)
          ? Ti(t) || fv(e, t, n, s, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : yv(e, t, s, f)
              )
            ? cv(e, t, s, a, i, l, o)
            : (t === "true-value"
                ? (e._trueValue = s)
                : t === "false-value" && (e._falseValue = s),
              uv(e, t, s, f))
  }
function yv(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Qo(t) && Te(n))
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
    const r = e.tagName
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1
  }
  return Qo(t) && ot(n) ? !1 : t in e
}
const eu = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return Ee(t) ? (n) => Tr(t, n) : t
}
function wv(e) {
  e.target.composing = !0
}
function tu(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const Ga = Symbol("_assign"),
  xv = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[Ga] = eu(r)
      const a = s || (r.props && r.props.type === "number")
      ps(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let l = e.value
        n && (l = l.trim()), a && (l = ni(l)), e[Ga](l)
      }),
        n &&
          ps(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (ps(e, "compositionstart", wv),
          ps(e, "compositionend", tu),
          ps(e, "change", tu))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: r } },
      a,
    ) {
      if (((e[Ga] = eu(a)), e.composing)) return
      const i = r || e.type === "number" ? ni(e.value) : e.value,
        l = t ?? ""
      i !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (s && e.value.trim() === l))) ||
          (e.value = l))
    },
  },
  Sv = bt({ patchProp: bv }, nv)
let nu
function _v() {
  return nu || (nu = zg(Sv))
}
const Ev = (...e) => {
  const t = _v().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = Tv(s)
      if (!r) return
      const a = t._component
      !Te(a) && !a.render && !a.template && (a.template = r.innerHTML),
        (r.innerHTML = "")
      const i = n(r, !1, Cv(r))
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
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
const bn = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  kv = {}
function $v(e, t) {
  const n = ig("router-view")
  return te(), Ne(n)
}
const Pv = bn(kv, [["render", $v]])
let Iv = 0
function Mv() {
  return ++Iv
}
function Jn() {
  return Mv()
}
function fe(e) {
  var t
  if (e == null || e.value == null) return null
  let n = (t = e.value.$el) != null ? t : e.value
  return n instanceof Node ? n : null
}
function zt(e, t, ...n) {
  if (e in t) {
    let r = t[e]
    return typeof r == "function" ? r(...n) : r
  }
  let s = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((r) => `"${r}"`)
      .join(", ")}.`,
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(s, zt), s)
}
var Ov = Object.defineProperty,
  Av = (e, t, n) =>
    t in e
      ? Ov(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  su = (e, t, n) => (Av(e, typeof t != "symbol" ? t + "" : t, n), n)
let Lv = class {
    constructor() {
      su(this, "current", this.detect()), su(this, "currentId", 0)
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
function $s(e) {
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
  Ln = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Ln || {}),
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
function Ic(e, t = 0) {
  var n
  return e === ((n = $s(e)) == null ? void 0 : n.body)
    ? !1
    : zt(t, {
        0() {
          return e.matches(gi)
        },
        1() {
          let s = e
          for (; s !== null; ) {
            if (s.matches(gi)) return !0
            s = s.parentElement
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
let jv = ["textarea", "input"].join(",")
function Nv(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, jv)) !=
    null
    ? n
    : !1
}
function hs(e, t = (n) => n) {
  return e.slice().sort((n, s) => {
    let r = t(n),
      a = t(s)
    if (r === null || a === null) return 0
    let i = r.compareDocumentPosition(a)
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
  { sorted: n = !0, relativeTo: s = null, skipElements: r = [] } = {},
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
    l = Array.isArray(e) ? (n ? hs(e) : e) : ia(e)
  r.length > 0 && l.length > 1 && (l = l.filter(($) => !r.includes($))),
    (s = s ?? i.activeElement)
  let o = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    f = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, l.indexOf(s)) - 1
      if (t & 4) return Math.max(0, l.indexOf(s)) + 1
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
    let $ = f + p
    if (t & 16) $ = ($ + v) % v
    else {
      if ($ < 0) return 3
      if ($ >= v) return 1
    }
    ;(b = l[$]), b == null || b.focus(c), (p += o)
  } while (b !== i.activeElement)
  return t & 6 && Nv(b) && b.select(), 2
}
function Rv() {
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
  return Rv() || Fv()
}
function xr(e, t, n) {
  aa.isServer ||
    vn((s) => {
      document.addEventListener(e, t, n),
        s(() => document.removeEventListener(e, t, n))
    })
}
function Mc(e, t, n) {
  aa.isServer ||
    vn((s) => {
      window.addEventListener(e, t, n),
        s(() => window.removeEventListener(e, t, n))
    })
}
function Hv(e, t, n = me(() => !0)) {
  function s(a, i) {
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
    return !Ic(l, Ui.Loose) && l.tabIndex !== -1 && a.preventDefault(), t(a, l)
  }
  let r = ee(null)
  xr(
    "pointerdown",
    (a) => {
      var i, l
      n.value &&
        (r.value =
          ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null
            ? void 0
            : l[0]) || a.target)
    },
    !0,
  ),
    xr(
      "mousedown",
      (a) => {
        var i, l
        n.value &&
          (r.value =
            ((l = (i = a.composedPath) == null ? void 0 : i.call(a)) == null
              ? void 0
              : l[0]) || a.target)
      },
      !0,
    ),
    xr(
      "click",
      (a) => {
        Dv() || (r.value && (s(a, () => r.value), (r.value = null)))
      },
      !0,
    ),
    xr(
      "touchend",
      (a) => s(a, () => (a.target instanceof HTMLElement ? a.target : null)),
      !0,
    ),
    Mc(
      "blur",
      (a) =>
        s(a, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    )
}
function ru(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Oc(e, t) {
  let n = ee(ru(e.value.type, e.value.as))
  return (
    yt(() => {
      n.value = ru(e.value.type, e.value.as)
    }),
    vn(() => {
      var s
      n.value ||
        (fe(t) &&
          fe(t) instanceof HTMLButtonElement &&
          !((s = fe(t)) != null && s.hasAttribute("type")) &&
          (n.value = "button"))
    }),
    n
  )
}
var Xs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Xs || {}),
  Gv = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Gv || {})
function yn({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: s,
  ...r
}) {
  var a
  let i = Lc(s, n),
    l = Object.assign(r, { props: i })
  if (e || (t & 2 && i.static)) return Va(l)
  if (t & 1) {
    let o = (a = i.unmount) == null || a ? 0 : 1
    return zt(o, {
      0() {
        return null
      },
      1() {
        return Va({
          ...r,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return Va(l)
}
function Va({ props: e, attrs: t, slots: n, slot: s, name: r }) {
  var a, i
  let { as: l, ...o } = zc(e, ["unmount", "static"]),
    f = (a = n.default) == null ? void 0 : a.call(n, s),
    c = {}
  if (s) {
    let p = !1,
      v = []
    for (let [b, $] of Object.entries(s))
      typeof $ == "boolean" && (p = !0), $ === !0 && v.push(b)
    p && (c["data-headlessui-state"] = v.join(" "))
  }
  if (l === "template") {
    if (
      ((f = Ac(f ?? [])),
      Object.keys(o).length > 0 || Object.keys(t).length > 0)
    ) {
      let [p, ...v] = f ?? []
      if (!Vv(p) || v.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${r} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(o)
              .concat(Object.keys(t))
              .map((m) => m.trim())
              .filter((m, _, T) => T.indexOf(m) === _)
              .sort((m, _) => m.localeCompare(_))
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
      let b = Lc((i = p.props) != null ? i : {}, o, c),
        $ = Zn(p, b, !0)
      for (let m in b)
        m.startsWith("on") && ($.props || ($.props = {}), ($.props[m] = b[m]))
      return $
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f
  }
  return Ye(l, Object.assign({}, o, c), { default: () => f })
}
function Ac(e) {
  return e.flatMap((t) => (t.type === Je ? Ac(t.children) : [t]))
}
function Lc(...e) {
  if (e.length === 0) return {}
  if (e.length === 1) return e[0]
  let t = {},
    n = {}
  for (let s of e)
    for (let r in s)
      r.startsWith("on") && typeof s[r] == "function"
        ? (n[r] != null || (n[r] = []), n[r].push(s[r]))
        : (t[r] = s[r])
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((s) => [s, void 0])),
    )
  for (let s in n)
    Object.assign(t, {
      [s](r, ...a) {
        let i = n[s]
        for (let l of i) {
          if (r instanceof Event && r.defaultPrevented) return
          l(r, ...a)
        }
      },
    })
  return t
}
function zc(e, t = []) {
  let n = Object.assign({}, e)
  for (let s of t) s in n && delete n[s]
  return n
}
function Vv(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var Ss = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Ss || {})
let _s = Bt({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var s
        let { features: r, ...a } = e,
          i = {
            "aria-hidden":
              (r & 2) === 2 ? !0 : (s = a["aria-hidden"]) != null ? s : void 0,
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
        return yn({
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
  Bc = Symbol("Context")
var Js = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Js || {})
function Wv() {
  return ht(Bc, null)
}
function qv(e) {
  Gt(Bc, e)
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
function Yv(e, t, n, s) {
  aa.isServer ||
    vn((r) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, s),
        r(() => e.removeEventListener(t, n, s))
    })
}
var fn = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(fn || {})
function jc() {
  let e = ee(0)
  return (
    Mc("keydown", (t) => {
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
  let s = ee(null),
    r = $s(s)
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
      r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null
      ? i
      : [])
      c !== document.body &&
        c !== document.head &&
        c instanceof HTMLElement &&
        c.id !== "headlessui-portal-root" &&
        (c.contains(fe(s)) ||
          c.contains(
            (o = (l = fe(s)) == null ? void 0 : l.getRootNode()) == null
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
    mainTreeNodeRef: s,
    MainTreeNode() {
      return n != null ? null : Ye(_s, { features: Ss.Hidden, ref: s })
    },
  }
}
let au = Symbol("PortalParentContext")
function Xv() {
  let e = ht(au, null),
    t = ee([])
  function n(a) {
    return t.value.push(a), e && e.register(a), () => s(a)
  }
  function s(a) {
    let i = t.value.indexOf(a)
    i !== -1 && t.value.splice(i, 1), e && e.unregister(a)
  }
  let r = { register: n, unregister: s, portals: t }
  return [
    t,
    Bt({
      name: "PortalWrapper",
      setup(a, { slots: i }) {
        return (
          Gt(au, r),
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
let Nc = Symbol("PopoverContext")
function Yi(e) {
  let t = ht(Nc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${vi.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Yi), n)
  }
  return t
}
let Zv = Symbol("PopoverGroupContext")
function Rc() {
  return ht(Zv, null)
}
let Fc = Symbol("PopoverPanelContext")
function Qv() {
  return ht(Fc, null)
}
let vi = Bt({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: s }) {
      var r
      let a = ee(null)
      s({ el: a, $el: a })
      let i = ee(1),
        l = ee(null),
        o = ee(null),
        f = ee(null),
        c = ee(null),
        p = me(() => $s(a)),
        v = me(() => {
          var z, O
          if (!fe(l) || !fe(c)) return !1
          for (let X of document.querySelectorAll("body > *"))
            if (
              Number(X == null ? void 0 : X.contains(fe(l))) ^
              Number(X == null ? void 0 : X.contains(fe(c)))
            )
              return !0
          let re = ia(),
            q = re.indexOf(fe(l)),
            G = (q + re.length - 1) % re.length,
            D = (q + 1) % re.length,
            Q = re[G],
            ge = re[D]
          return (
            !((z = fe(c)) != null && z.contains(Q)) &&
            !((O = fe(c)) != null && O.contains(ge))
          )
        }),
        b = {
          popoverState: i,
          buttonId: ee(null),
          panelId: ee(null),
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
      Gt(Nc, b), qv(me(() => zt(i.value, { 0: Js.Open, 1: Js.Closed })))
      let $ = {
          buttonId: b.buttonId,
          panelId: b.panelId,
          close() {
            b.closePopover()
          },
        },
        m = Rc(),
        _ = m == null ? void 0 : m.registerPopover,
        [T, x] = Xv(),
        w = Kv({
          mainTreeNodeRef: m == null ? void 0 : m.mainTreeNodeRef,
          portals: T,
          defaultContainers: [l, c],
        })
      function I() {
        var z, O, re, q
        return (q = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null
          ? q
          : ((z = p.value) == null ? void 0 : z.activeElement) &&
              (((O = fe(l)) == null
                ? void 0
                : O.contains(p.value.activeElement)) ||
                ((re = fe(c)) == null
                  ? void 0
                  : re.contains(p.value.activeElement)))
      }
      return (
        vn(() => (_ == null ? void 0 : _($))),
        Yv(
          (r = p.value) == null ? void 0 : r.defaultView,
          "focus",
          (z) => {
            var O, re
            z.target !== window &&
              z.target instanceof HTMLElement &&
              i.value === 0 &&
              (I() ||
                (l &&
                  c &&
                  (w.contains(z.target) ||
                    ((O = fe(b.beforePanelSentinel)) != null &&
                      O.contains(z.target)) ||
                    ((re = fe(b.afterPanelSentinel)) != null &&
                      re.contains(z.target)) ||
                    b.closePopover())))
          },
          !0,
        ),
        Hv(
          w.resolveContainers,
          (z, O) => {
            var re
            b.closePopover(),
              Ic(O, Ui.Loose) ||
                (z.preventDefault(), (re = fe(l)) == null || re.focus())
          },
          me(() => i.value === 0),
        ),
        () => {
          let z = { open: i.value === 0, close: b.close }
          return Ye(Je, [
            Ye(x, {}, () =>
              yn({
                theirProps: { ...e, ...n },
                ourProps: { ref: a },
                slot: z,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            Ye(w.MainTreeNode),
          ])
        }
      )
    },
  }),
  iu = Bt({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Jn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
      let r = Yi("PopoverButton"),
        a = me(() => $s(r.button))
      s({ el: r.button, $el: r.button }),
        yt(() => {
          r.buttonId.value = e.id
        }),
        Dn(() => {
          r.buttonId.value = null
        })
      let i = Rc(),
        l = i == null ? void 0 : i.closeOthers,
        o = Qv(),
        f = me(() => (o === null ? !1 : o.value === r.panelId.value)),
        c = ee(null),
        p = `headlessui-focus-sentinel-${Jn()}`
      f.value ||
        vn(() => {
          r.button.value = fe(c)
        })
      let v = Oc(
        me(() => ({ as: e.as, type: t.type })),
        c,
      )
      function b(w) {
        var I, z, O, re, q
        if (f.value) {
          if (r.popoverState.value === 1) return
          switch (w.key) {
            case ft.Space:
            case ft.Enter:
              w.preventDefault(),
                (z = (I = w.target).click) == null || z.call(I),
                r.closePopover(),
                (O = fe(r.button)) == null || O.focus()
              break
          }
        } else
          switch (w.key) {
            case ft.Space:
            case ft.Enter:
              w.preventDefault(),
                w.stopPropagation(),
                r.popoverState.value === 1 &&
                  (l == null || l(r.buttonId.value)),
                r.togglePopover()
              break
            case ft.Escape:
              if (r.popoverState.value !== 0)
                return l == null ? void 0 : l(r.buttonId.value)
              if (
                !fe(r.button) ||
                ((re = a.value) != null &&
                  re.activeElement &&
                  !(
                    (q = fe(r.button)) != null &&
                    q.contains(a.value.activeElement)
                  ))
              )
                return
              w.preventDefault(), w.stopPropagation(), r.closePopover()
              break
          }
      }
      function $(w) {
        f.value || (w.key === ft.Space && w.preventDefault())
      }
      function m(w) {
        var I, z
        e.disabled ||
          (f.value
            ? (r.closePopover(), (I = fe(r.button)) == null || I.focus())
            : (w.preventDefault(),
              w.stopPropagation(),
              r.popoverState.value === 1 && (l == null || l(r.buttonId.value)),
              r.togglePopover(),
              (z = fe(r.button)) == null || z.focus()))
      }
      function _(w) {
        w.preventDefault(), w.stopPropagation()
      }
      let T = jc()
      function x() {
        let w = fe(r.panel)
        if (!w) return
        function I() {
          zt(T.value, {
            [fn.Forwards]: () => Lt(w, ut.First),
            [fn.Backwards]: () => Lt(w, ut.Last),
          }) === Ln.Error &&
            Lt(
              ia().filter((z) => z.dataset.headlessuiFocusGuard !== "true"),
              zt(T.value, {
                [fn.Forwards]: ut.Next,
                [fn.Backwards]: ut.Previous,
              }),
              { relativeTo: fe(r.button) },
            )
        }
        I()
      }
      return () => {
        let w = r.popoverState.value === 0,
          I = { open: w },
          { id: z, ...O } = e,
          re = f.value
            ? { ref: c, type: v.value, onKeydown: b, onClick: m }
            : {
                ref: c,
                id: z,
                type: v.value,
                "aria-expanded": r.popoverState.value === 0,
                "aria-controls": fe(r.panel) ? r.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: b,
                onKeyup: $,
                onClick: m,
                onMousedown: _,
              }
        return Ye(Je, [
          yn({
            ourProps: re,
            theirProps: { ...t, ...O },
            slot: I,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          w &&
            !f.value &&
            r.isPortalled.value &&
            Ye(_s, {
              id: p,
              features: Ss.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: x,
            }),
        ])
      }
    },
  }),
  lu = Bt({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${Jn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: s }) {
      let { focus: r } = e,
        a = Yi("PopoverPanel"),
        i = me(() => $s(a.panel)),
        l = `headlessui-focus-sentinel-before-${Jn()}`,
        o = `headlessui-focus-sentinel-after-${Jn()}`
      s({ el: a.panel, $el: a.panel }),
        yt(() => {
          a.panelId.value = e.id
        }),
        Dn(() => {
          a.panelId.value = null
        }),
        Gt(Fc, a.panelId),
        vn(() => {
          var _, T
          if (!r || a.popoverState.value !== 0 || !a.panel) return
          let x = (_ = i.value) == null ? void 0 : _.activeElement
          ;((T = fe(a.panel)) != null && T.contains(x)) ||
            Lt(fe(a.panel), ut.First)
        })
      let f = Wv(),
        c = me(() =>
          f !== null
            ? (f.value & Js.Open) === Js.Open
            : a.popoverState.value === 0,
        )
      function p(_) {
        var T, x
        switch (_.key) {
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
            _.preventDefault(),
              _.stopPropagation(),
              a.closePopover(),
              (x = fe(a.button)) == null || x.focus()
            break
        }
      }
      function v(_) {
        var T, x, w, I, z
        let O = _.relatedTarget
        O &&
          fe(a.panel) &&
          (((T = fe(a.panel)) != null && T.contains(O)) ||
            (a.closePopover(),
            (((w =
              (x = fe(a.beforePanelSentinel)) == null ? void 0 : x.contains) !=
              null &&
              w.call(x, O)) ||
              ((z =
                (I = fe(a.afterPanelSentinel)) == null ? void 0 : I.contains) !=
                null &&
                z.call(I, O))) &&
              O.focus({ preventScroll: !0 })))
      }
      let b = jc()
      function $() {
        let _ = fe(a.panel)
        if (!_) return
        function T() {
          zt(b.value, {
            [fn.Forwards]: () => {
              var x
              Lt(_, ut.First) === Ln.Error &&
                ((x = fe(a.afterPanelSentinel)) == null || x.focus())
            },
            [fn.Backwards]: () => {
              var x
              ;(x = fe(a.button)) == null || x.focus({ preventScroll: !0 })
            },
          })
        }
        T()
      }
      function m() {
        let _ = fe(a.panel)
        if (!_) return
        function T() {
          zt(b.value, {
            [fn.Forwards]: () => {
              let x = fe(a.button),
                w = fe(a.panel)
              if (!x) return
              let I = ia(),
                z = I.indexOf(x),
                O = I.slice(0, z + 1),
                re = [...I.slice(z + 1), ...O]
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
            [fn.Backwards]: () => {
              var x
              Lt(_, ut.Previous) === Ln.Error &&
                ((x = fe(a.button)) == null || x.focus())
            },
          })
        }
        T()
      }
      return () => {
        let _ = { open: a.popoverState.value === 0, close: a.close },
          { id: T, focus: x, ...w } = e,
          I = {
            ref: a.panel,
            id: T,
            onKeydown: p,
            onFocusout: r && a.popoverState.value === 0 ? v : void 0,
            tabIndex: -1,
          }
        return yn({
          ourProps: I,
          theirProps: { ...t, ...w },
          attrs: t,
          slot: _,
          slots: {
            ...n,
            default: (...z) => {
              var O
              return [
                Ye(Je, [
                  c.value &&
                    a.isPortalled.value &&
                    Ye(_s, {
                      id: l,
                      ref: a.beforePanelSentinel,
                      features: Ss.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: $,
                    }),
                  (O = n.default) == null ? void 0 : O.call(n, ...z),
                  c.value &&
                    a.isPortalled.value &&
                    Ye(_s, {
                      id: o,
                      ref: a.afterPanelSentinel,
                      features: Ss.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: m,
                    }),
                ]),
              ]
            },
          },
          features: Xs.RenderStrategy | Xs.Static,
          visible: c.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  em = Bt({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = ee(!0)
      return () =>
        t.value
          ? Ye(_s, {
              as: "button",
              type: "button",
              features: Ss.Focusable,
              onFocus(n) {
                n.preventDefault()
                let s,
                  r = 50
                function a() {
                  var i
                  if (r-- <= 0) {
                    s && cancelAnimationFrame(s)
                    return
                  }
                  if ((i = e.onFocus) != null && i.call(e)) {
                    ;(t.value = !1), cancelAnimationFrame(s)
                    return
                  }
                  s = requestAnimationFrame(a)
                }
                s = requestAnimationFrame(a)
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
let Dc = Symbol("TabsContext")
function sr(e) {
  let t = ht(Dc, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, sr), n)
  }
  return t
}
let Ki = Symbol("TabsSSRContext"),
  sm = Bt({
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
    setup(e, { slots: t, attrs: n, emit: s }) {
      var r
      let a = ee((r = e.selectedIndex) != null ? r : e.defaultIndex),
        i = ee([]),
        l = ee([]),
        o = me(() => e.selectedIndex !== null),
        f = me(() => (o.value ? e.selectedIndex : a.value))
      function c(m) {
        var _
        let T = hs(p.tabs.value, fe),
          x = hs(p.panels.value, fe),
          w = T.filter((I) => {
            var z
            return !((z = fe(I)) != null && z.hasAttribute("disabled"))
          })
        if (m < 0 || m > T.length - 1) {
          let I = zt(a.value === null ? 0 : Math.sign(m - a.value), {
              [-1]: () => 1,
              0: () =>
                zt(Math.sign(m), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            z = zt(I, {
              0: () => T.indexOf(w[0]),
              1: () => T.indexOf(w[w.length - 1]),
            })
          z !== -1 && (a.value = z), (p.tabs.value = T), (p.panels.value = x)
        } else {
          let I = T.slice(0, m),
            z = [...T.slice(m), ...I].find((re) => w.includes(re))
          if (!z) return
          let O = (_ = T.indexOf(z)) != null ? _ : p.selectedIndex.value
          O === -1 && (O = p.selectedIndex.value),
            (a.value = O),
            (p.tabs.value = T),
            (p.panels.value = x)
        }
      }
      let p = {
        selectedIndex: me(() => {
          var m, _
          return (_ = (m = a.value) != null ? m : e.defaultIndex) != null
            ? _
            : null
        }),
        orientation: me(() => (e.vertical ? "vertical" : "horizontal")),
        activation: me(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: l,
        setSelectedIndex(m) {
          f.value !== m && s("change", m), o.value || c(m)
        },
        registerTab(m) {
          var _
          if (i.value.includes(m)) return
          let T = i.value[a.value]
          i.value.push(m), (i.value = hs(i.value, fe))
          let x = (_ = i.value.indexOf(T)) != null ? _ : a.value
          x !== -1 && (a.value = x)
        },
        unregisterTab(m) {
          let _ = i.value.indexOf(m)
          _ !== -1 && i.value.splice(_, 1)
        },
        registerPanel(m) {
          l.value.includes(m) || (l.value.push(m), (l.value = hs(l.value, fe)))
        },
        unregisterPanel(m) {
          let _ = l.value.indexOf(m)
          _ !== -1 && l.value.splice(_, 1)
        },
      }
      Gt(Dc, p)
      let v = ee({ tabs: [], panels: [] }),
        b = ee(!1)
      yt(() => {
        b.value = !0
      }),
        Gt(
          Ki,
          me(() => (b.value ? null : v.value)),
        )
      let $ = me(() => e.selectedIndex)
      return (
        yt(() => {
          Nn(
            [$],
            () => {
              var m
              return c((m = e.selectedIndex) != null ? m : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        vn(() => {
          if (!o.value || f.value == null || p.tabs.value.length <= 0) return
          let m = hs(p.tabs.value, fe)
          m.some((_, T) => fe(p.tabs.value[T]) !== fe(_)) &&
            p.setSelectedIndex(
              m.findIndex((_) => fe(_) === fe(p.tabs.value[f.value])),
            )
        }),
        () => {
          let m = { selectedIndex: a.value }
          return Ye(Je, [
            i.value.length <= 0 &&
              Ye(em, {
                onFocus: () => {
                  for (let _ of i.value) {
                    let T = fe(_)
                    if ((T == null ? void 0 : T.tabIndex) === 0)
                      return T.focus(), !0
                  }
                  return !1
                },
              }),
            yn({
              theirProps: {
                ...n,
                ...zc(e, [
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
  rm = Bt({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let s = sr("TabList")
      return () => {
        let r = { selectedIndex: s.selectedIndex.value },
          a = { role: "tablist", "aria-orientation": s.orientation.value }
        return yn({
          ourProps: a,
          theirProps: e,
          slot: r,
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
    setup(e, { attrs: t, slots: n, expose: s }) {
      let r = sr("Tab"),
        a = ee(null)
      s({ el: a, $el: a }),
        yt(() => r.registerTab(a)),
        Dn(() => r.unregisterTab(a))
      let i = ht(Ki),
        l = me(() => {
          if (i.value) {
            let _ = i.value.tabs.indexOf(e.id)
            return _ === -1 ? i.value.tabs.push(e.id) - 1 : _
          }
          return -1
        }),
        o = me(() => {
          let _ = r.tabs.value.indexOf(a)
          return _ === -1 ? l.value : _
        }),
        f = me(() => o.value === r.selectedIndex.value)
      function c(_) {
        var T
        let x = _()
        if (x === Ln.Success && r.activation.value === "auto") {
          let w = (T = $s(a)) == null ? void 0 : T.activeElement,
            I = r.tabs.value.findIndex((z) => fe(z) === w)
          I !== -1 && r.setSelectedIndex(I)
        }
        return x
      }
      function p(_) {
        let T = r.tabs.value.map((x) => fe(x)).filter(Boolean)
        if (_.key === ft.Space || _.key === ft.Enter) {
          _.preventDefault(), _.stopPropagation(), r.setSelectedIndex(o.value)
          return
        }
        switch (_.key) {
          case ft.Home:
          case ft.PageUp:
            return (
              _.preventDefault(), _.stopPropagation(), c(() => Lt(T, ut.First))
            )
          case ft.End:
          case ft.PageDown:
            return (
              _.preventDefault(), _.stopPropagation(), c(() => Lt(T, ut.Last))
            )
        }
        if (
          c(() =>
            zt(r.orientation.value, {
              vertical() {
                return _.key === ft.ArrowUp
                  ? Lt(T, ut.Previous | ut.WrapAround)
                  : _.key === ft.ArrowDown
                    ? Lt(T, ut.Next | ut.WrapAround)
                    : Ln.Error
              },
              horizontal() {
                return _.key === ft.ArrowLeft
                  ? Lt(T, ut.Previous | ut.WrapAround)
                  : _.key === ft.ArrowRight
                    ? Lt(T, ut.Next | ut.WrapAround)
                    : Ln.Error
              },
            }),
          ) === Ln.Success
        )
          return _.preventDefault()
      }
      let v = ee(!1)
      function b() {
        var _
        v.value ||
          ((v.value = !0),
          !e.disabled &&
            ((_ = fe(a)) == null || _.focus({ preventScroll: !0 }),
            r.setSelectedIndex(o.value),
            Uv(() => {
              v.value = !1
            })))
      }
      function $(_) {
        _.preventDefault()
      }
      let m = Oc(
        me(() => ({ as: e.as, type: t.type })),
        a,
      )
      return () => {
        var _
        let T = { selected: f.value },
          { id: x, ...w } = e,
          I = {
            ref: a,
            onKeydown: p,
            onMousedown: $,
            onClick: b,
            id: x,
            role: "tab",
            type: m.value,
            "aria-controls":
              (_ = fe(r.panels.value[o.value])) == null ? void 0 : _.id,
            "aria-selected": f.value,
            tabIndex: f.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return yn({
          ourProps: I,
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
      let s = sr("TabPanels")
      return () => {
        let r = { selectedIndex: s.selectedIndex.value }
        return yn({
          theirProps: e,
          ourProps: {},
          slot: r,
          attrs: n,
          slots: t,
          name: "TabPanels",
        })
      }
    },
  }),
  Bs = Bt({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${Jn()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: s }) {
      let r = sr("TabPanel"),
        a = ee(null)
      s({ el: a, $el: a }),
        yt(() => r.registerPanel(a)),
        Dn(() => r.unregisterPanel(a))
      let i = ht(Ki),
        l = me(() => {
          if (i.value) {
            let c = i.value.panels.indexOf(e.id)
            return c === -1 ? i.value.panels.push(e.id) - 1 : c
          }
          return -1
        }),
        o = me(() => {
          let c = r.panels.value.indexOf(a)
          return c === -1 ? l.value : c
        }),
        f = me(() => o.value === r.selectedIndex.value)
      return () => {
        var c
        let p = { selected: f.value },
          { id: v, tabIndex: b, ...$ } = e,
          m = {
            ref: a,
            id: v,
            role: "tabpanel",
            "aria-labelledby":
              (c = fe(r.tabs.value[o.value])) == null ? void 0 : c.id,
            tabIndex: f.value ? b : -1,
          }
        return !f.value && e.unmount && !e.static
          ? Ye(_s, { as: "span", "aria-hidden": !0, ...m })
          : yn({
              ourProps: m,
              theirProps: $,
              slot: p,
              attrs: t,
              slots: n,
              features: Xs.Static | Xs.RenderStrategy,
              visible: f.value,
              name: "TabPanel",
            })
      }
    },
  })
const gs = typeof window < "u"
function lm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const qe = Object.assign
function Wa(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Jt(r) ? r.map(e) : e(r)
  }
  return n
}
const Vs = () => {},
  Jt = Array.isArray,
  om = /\/$/,
  um = (e) => e.replace(om, "")
function qa(e, t, n = "/") {
  let s,
    r = {},
    a = "",
    i = ""
  const l = t.indexOf("#")
  let o = t.indexOf("?")
  return (
    l < o && l >= 0 && (o = -1),
    o > -1 &&
      ((s = t.slice(0, o)),
      (a = t.slice(o + 1, l > -1 ? l : t.length)),
      (r = e(a))),
    l > -1 && ((s = s || t.slice(0, l)), (i = t.slice(l, t.length))),
    (s = pm(s ?? t, n)),
    { fullPath: s + (a && "?") + a + i, path: s, query: r, hash: i }
  )
}
function cm(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function ou(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function dm(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Es(t.matched[s], n.matched[r]) &&
    Hc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Es(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Hc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!fm(e[n], t[n])) return !1
  return !0
}
function fm(e, t) {
  return Jt(e) ? uu(e, t) : Jt(t) ? uu(t, e) : e === t
}
function uu(e, t) {
  return Jt(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function pm(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1]
  ;(r === ".." || r === ".") && s.push("")
  let a = n.length - 1,
    i,
    l
  for (i = 0; i < s.length; i++)
    if (((l = s[i]), l !== "."))
      if (l === "..") a > 1 && a--
      else break
  return (
    n.slice(0, a).join("/") +
    "/" +
    s.slice(i - (i === s.length ? 1 : 0)).join("/")
  )
}
var Zs
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(Zs || (Zs = {}))
var Ws
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Ws || (Ws = {}))
function hm(e) {
  if (!e)
    if (gs) {
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
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const la = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function bm(e) {
  let t
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = mm(r, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function cu(e, t) {
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
function Gc(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    a = e.indexOf("#")
  if (a > -1) {
    let l = r.includes(e.slice(a)) ? e.slice(a).length : 1,
      o = r.slice(l)
    return o[0] !== "/" && (o = "/" + o), ou(o, "")
  }
  return ou(n, e) + s + r
}
function Sm(e, t, n, s) {
  let r = [],
    a = [],
    i = null
  const l = ({ state: v }) => {
    const b = Gc(e, location),
      $ = n.value,
      m = t.value
    let _ = 0
    if (v) {
      if (((n.value = b), (t.value = v), i && i === $)) {
        i = null
        return
      }
      _ = m ? v.position - m.position : 0
    } else s(b)
    r.forEach((T) => {
      T(n.value, $, {
        delta: _,
        type: Zs.pop,
        direction: _ ? (_ > 0 ? Ws.forward : Ws.back) : Ws.unknown,
      })
    })
  }
  function o() {
    i = n.value
  }
  function f(v) {
    r.push(v)
    const b = () => {
      const $ = r.indexOf(v)
      $ > -1 && r.splice($, 1)
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
function du(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? la() : null,
  }
}
function _m(e) {
  const { history: t, location: n } = window,
    s = { value: Gc(e, n) },
    r = { value: t.state }
  r.value ||
    a(
      s.value,
      {
        back: null,
        current: s.value,
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
      t[c ? "replaceState" : "pushState"](f, "", v), (r.value = f)
    } catch (b) {
      console.error(b), n[c ? "replace" : "assign"](v)
    }
  }
  function i(o, f) {
    const c = qe({}, t.state, du(r.value.back, o, r.value.forward, !0), f, {
      position: r.value.position,
    })
    a(o, c, !0), (s.value = o)
  }
  function l(o, f) {
    const c = qe({}, r.value, t.state, { forward: o, scroll: la() })
    a(c.current, c, !0)
    const p = qe({}, du(s.value, o, null), { position: c.position + 1 }, f)
    a(o, p, !1), (s.value = o)
  }
  return { location: s, state: r, push: l, replace: i }
}
function Em(e) {
  e = hm(e)
  const t = _m(e),
    n = Sm(e, t.state, t.location, t.replace)
  function s(a, i = !0) {
    i || n.pauseListeners(), history.go(a)
  }
  const r = qe(
    { location: "", base: e, go: s, createHref: vm.bind(null, e) },
    t,
    n,
  )
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  )
}
function Cm(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Vc(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const $n = {
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
  Wc = Symbol("")
var fu
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(fu || (fu = {}))
function Cs(e, t) {
  return qe(new Error(), { type: e, [Wc]: !0 }, t)
}
function cn(e, t) {
  return e instanceof Error && Wc in e && (t == null || !!(e.type & t))
}
const pu = "[^/]+?",
  Tm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  km = /[.+*?^${}()[\]/\\]/g
function $m(e, t) {
  const n = qe({}, Tm, t),
    s = []
  let r = n.start ? "^" : ""
  const a = []
  for (const f of e) {
    const c = f.length ? [] : [90]
    n.strict && !f.length && (r += "/")
    for (let p = 0; p < f.length; p++) {
      const v = f[p]
      let b = 40 + (n.sensitive ? 0.25 : 0)
      if (v.type === 0)
        p || (r += "/"), (r += v.value.replace(km, "\\$&")), (b += 40)
      else if (v.type === 1) {
        const { value: $, repeatable: m, optional: _, regexp: T } = v
        a.push({ name: $, repeatable: m, optional: _ })
        const x = T || pu
        if (x !== pu) {
          b += 10
          try {
            new RegExp(`(${x})`)
          } catch (I) {
            throw new Error(
              `Invalid custom RegExp for param "${$}" (${x}): ` + I.message,
            )
          }
        }
        let w = m ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`
        p || (w = _ && f.length < 2 ? `(?:/${w})` : "/" + w),
          _ && (w += "?"),
          (r += w),
          (b += 20),
          _ && (b += -8),
          m && (b += -20),
          x === ".*" && (b += -50)
      }
      c.push(b)
    }
    s.push(c)
  }
  if (n.strict && n.end) {
    const f = s.length - 1
    s[f][s[f].length - 1] += 0.7000000000000001
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)")
  const i = new RegExp(r, n.sensitive ? "" : "i")
  function l(f) {
    const c = f.match(i),
      p = {}
    if (!c) return null
    for (let v = 1; v < c.length; v++) {
      const b = c[v] || "",
        $ = a[v - 1]
      p[$.name] = b && $.repeatable ? b.split("/") : b
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
          const { value: $, repeatable: m, optional: _ } = b,
            T = $ in f ? f[$] : ""
          if (Jt(T) && !m)
            throw new Error(
              `Provided param "${$}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const x = Jt(T) ? T.join("/") : T
          if (!x)
            if (_)
              v.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (p = !0))
            else throw new Error(`Missing required param "${$}"`)
          c += x
        }
    }
    return c || "/"
  }
  return { re: i, score: s, keys: a, parse: l, stringify: o }
}
function Pm(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
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
function Im(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const a = Pm(s[n], r[n])
    if (a) return a
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (hu(s)) return 1
    if (hu(r)) return -1
  }
  return r.length - s.length
}
function hu(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Mm = { type: 0, value: "" },
  Om = /[a-zA-Z0-9_]/
function Am(e) {
  if (!e) return [[]]
  if (e === "/") return [[Mm]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(b) {
    throw new Error(`ERR (${n})/"${f}": ${b}`)
  }
  let n = 0,
    s = n
  const r = []
  let a
  function i() {
    a && r.push(a), (a = [])
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
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        o === "/" ? (f && p(), i()) : o === ":" ? (p(), (n = 1)) : v()
        break
      case 4:
        v(), (n = s)
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
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), p(), i(), r
}
function Lm(e, t, n) {
  const s = $m(Am(e.path), n),
    r = qe(s, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
function zm(e, t) {
  const n = [],
    s = new Map()
  t = mu({ strict: !1, end: !0, sensitive: !1 }, t)
  function r(c) {
    return s.get(c)
  }
  function a(c, p, v) {
    const b = !v,
      $ = Bm(c)
    $.aliasOf = v && v.record
    const m = mu(t, c),
      _ = [$]
    if ("alias" in c) {
      const w = typeof c.alias == "string" ? [c.alias] : c.alias
      for (const I of w)
        _.push(
          qe({}, $, {
            components: v ? v.record.components : $.components,
            path: I,
            aliasOf: v ? v.record : $,
          }),
        )
    }
    let T, x
    for (const w of _) {
      const { path: I } = w
      if (p && I[0] !== "/") {
        const z = p.record.path,
          O = z[z.length - 1] === "/" ? "" : "/"
        w.path = p.record.path + (I && O + I)
      }
      if (
        ((T = Lm(w, p, m)),
        v
          ? v.alias.push(T)
          : ((x = x || T),
            x !== T && x.alias.push(T),
            b && c.name && !vu(T) && i(c.name)),
        $.children)
      ) {
        const z = $.children
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
      : Vs
  }
  function i(c) {
    if (Vc(c)) {
      const p = s.get(c)
      p &&
        (s.delete(c),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i))
    } else {
      const p = n.indexOf(c)
      p > -1 &&
        (n.splice(p, 1),
        c.record.name && s.delete(c.record.name),
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
      Im(c, n[p]) >= 0 &&
      (c.record.path !== n[p].record.path || !qc(c, n[p]));

    )
      p++
    n.splice(p, 0, c), c.record.name && !vu(c) && s.set(c.record.name, c)
  }
  function f(c, p) {
    let v,
      b = {},
      $,
      m
    if ("name" in c && c.name) {
      if (((v = s.get(c.name)), !v)) throw Cs(1, { location: c })
      ;(m = v.record.name),
        (b = qe(
          gu(
            p.params,
            v.keys.filter((x) => !x.optional).map((x) => x.name),
          ),
          c.params &&
            gu(
              c.params,
              v.keys.map((x) => x.name),
            ),
        )),
        ($ = v.stringify(b))
    } else if ("path" in c)
      ($ = c.path),
        (v = n.find((x) => x.re.test($))),
        v && ((b = v.parse($)), (m = v.record.name))
    else {
      if (((v = p.name ? s.get(p.name) : n.find((x) => x.re.test(p.path))), !v))
        throw Cs(1, { location: c, currentLocation: p })
      ;(m = v.record.name),
        (b = qe({}, p.params, c.params)),
        ($ = v.stringify(b))
    }
    const _ = []
    let T = v
    for (; T; ) _.unshift(T.record), (T = T.parent)
    return { name: m, path: $, params: b, matched: _, meta: Nm(_) }
  }
  return (
    e.forEach((c) => a(c)),
    {
      addRoute: a,
      resolve: f,
      removeRoute: i,
      getRoutes: l,
      getRecordMatcher: r,
    }
  )
}
function gu(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
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
    props: jm(e),
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
function jm(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n
  return t
}
function vu(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Nm(e) {
  return e.reduce((t, n) => qe(t, n.meta), {})
}
function mu(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function qc(e, t) {
  return t.children.some((n) => n === e || qc(e, n))
}
const Uc = /#/g,
  Rm = /&/g,
  Fm = /\//g,
  Dm = /=/g,
  Hm = /\?/g,
  Yc = /\+/g,
  Gm = /%5B/g,
  Vm = /%5D/g,
  Kc = /%5E/g,
  Wm = /%60/g,
  Xc = /%7B/g,
  qm = /%7C/g,
  Jc = /%7D/g,
  Um = /%20/g
function Xi(e) {
  return encodeURI("" + e)
    .replace(qm, "|")
    .replace(Gm, "[")
    .replace(Vm, "]")
}
function Ym(e) {
  return Xi(e).replace(Xc, "{").replace(Jc, "}").replace(Kc, "^")
}
function bi(e) {
  return Xi(e)
    .replace(Yc, "%2B")
    .replace(Um, "+")
    .replace(Uc, "%23")
    .replace(Rm, "%26")
    .replace(Wm, "`")
    .replace(Xc, "{")
    .replace(Jc, "}")
    .replace(Kc, "^")
}
function Km(e) {
  return bi(e).replace(Dm, "%3D")
}
function Xm(e) {
  return Xi(e).replace(Uc, "%23").replace(Hm, "%3F")
}
function Jm(e) {
  return e == null ? "" : Xm(e).replace(Fm, "%2F")
}
function Rr(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function Zm(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const s = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let r = 0; r < s.length; ++r) {
    const a = s[r].replace(Yc, " "),
      i = a.indexOf("="),
      l = Rr(i < 0 ? a : a.slice(0, i)),
      o = i < 0 ? null : Rr(a.slice(i + 1))
    if (l in t) {
      let f = t[l]
      Jt(f) || (f = t[l] = [f]), f.push(o)
    } else t[l] = o
  }
  return t
}
function bu(e) {
  let t = ""
  for (let n in e) {
    const s = e[n]
    if (((n = Km(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Jt(s) ? s.map((a) => a && bi(a)) : [s && bi(s)]).forEach((a) => {
      a !== void 0 &&
        ((t += (t.length ? "&" : "") + n), a != null && (t += "=" + a))
    })
  }
  return t
}
function Qm(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Jt(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
          ? s
          : "" + s)
  }
  return t
}
const e1 = Symbol(""),
  yu = Symbol(""),
  oa = Symbol(""),
  Zc = Symbol(""),
  yi = Symbol("")
function js() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function An(e, t, n, s, r) {
  const a = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((i, l) => {
      const o = (p) => {
          p === !1
            ? l(Cs(4, { from: n, to: t }))
            : p instanceof Error
              ? l(p)
              : Cm(p)
                ? l(Cs(2, { from: t, to: p }))
                : (a &&
                    s.enterCallbacks[r] === a &&
                    typeof p == "function" &&
                    a.push(p),
                  i())
        },
        f = e.call(s && s.instances[r], t, n, o)
      let c = Promise.resolve(f)
      e.length < 3 && (c = c.then(o)), c.catch((p) => l(p))
    })
}
function Ua(e, t, n, s) {
  const r = []
  for (const a of e)
    for (const i in a.components) {
      let l = a.components[i]
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (t1(l)) {
          const f = (l.__vccOpts || l)[t]
          f && r.push(An(f, n, s, a, i))
        } else {
          let o = l()
          r.push(() =>
            o.then((f) => {
              if (!f)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${a.path}"`),
                )
              const c = lm(f) ? f.default : f
              a.components[i] = c
              const v = (c.__vccOpts || c)[t]
              return v && An(v, n, s, a, i)()
            }),
          )
        }
    }
  return r
}
function t1(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function wu(e) {
  const t = ht(oa),
    n = ht(Zc),
    s = me(() => t.resolve(we(e.to))),
    r = me(() => {
      const { matched: o } = s.value,
        { length: f } = o,
        c = o[f - 1],
        p = n.matched
      if (!c || !p.length) return -1
      const v = p.findIndex(Es.bind(null, c))
      if (v > -1) return v
      const b = xu(o[f - 2])
      return f > 1 && xu(c) === b && p[p.length - 1].path !== b
        ? p.findIndex(Es.bind(null, o[f - 2]))
        : v
    }),
    a = me(() => r.value > -1 && a1(n.params, s.value.params)),
    i = me(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Hc(n.params, s.value.params),
    )
  function l(o = {}) {
    return r1(o)
      ? t[we(e.replace) ? "replace" : "push"](we(e.to)).catch(Vs)
      : Promise.resolve()
  }
  return {
    route: s,
    href: me(() => s.value.href),
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
    useLink: wu,
    setup(e, { slots: t }) {
      const n = Qs(wu(e)),
        { options: s } = ht(oa),
        r = me(() => ({
          [Su(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Su(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const a = t.default && t.default(n)
        return e.custom
          ? a
          : Ye(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              a,
            )
      }
    },
  }),
  s1 = n1
function r1(e) {
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
    const s = t[n],
      r = e[n]
    if (typeof s == "string") {
      if (s !== r) return !1
    } else if (!Jt(r) || r.length !== s.length || s.some((a, i) => a !== r[i]))
      return !1
  }
  return !0
}
function xu(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const Su = (e, t, n) => e ?? t ?? n,
  i1 = Bt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = ht(yi),
        r = me(() => e.route || s.value),
        a = ht(yu, 0),
        i = me(() => {
          let f = we(a)
          const { matched: c } = r.value
          let p
          for (; (p = c[f]) && !p.components; ) f++
          return f
        }),
        l = me(() => r.value.matched[i.value])
      Gt(
        yu,
        me(() => i.value + 1),
      ),
        Gt(e1, l),
        Gt(yi, r)
      const o = ee()
      return (
        Nn(
          () => [o.value, l.value, e.name],
          ([f, c, p], [v, b, $]) => {
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
                (!b || !Es(c, b) || !v) &&
                (c.enterCallbacks[p] || []).forEach((m) => m(f))
          },
          { flush: "post" },
        ),
        () => {
          const f = r.value,
            c = e.name,
            p = l.value,
            v = p && p.components[c]
          if (!v) return _u(n.default, { Component: v, route: f })
          const b = p.props[c],
            $ = b
              ? b === !0
                ? f.params
                : typeof b == "function"
                  ? b(f)
                  : b
              : null,
            _ = Ye(
              v,
              qe({}, $, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (p.instances[c] = null)
                },
                ref: o,
              }),
            )
          return _u(n.default, { Component: _, route: f }) || _
        }
      )
    },
  })
function _u(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const l1 = i1
function o1(e) {
  const t = zm(e.routes, e),
    n = e.parseQuery || Zm,
    s = e.stringifyQuery || bu,
    r = e.history,
    a = js(),
    i = js(),
    l = js(),
    o = q0($n)
  let f = $n
  gs &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const c = Wa.bind(null, (N) => "" + N),
    p = Wa.bind(null, Jm),
    v = Wa.bind(null, Rr)
  function b(N, le) {
    let se, pe
    return (
      Vc(N) ? ((se = t.getRecordMatcher(N)), (pe = le)) : (pe = N),
      t.addRoute(pe, se)
    )
  }
  function $(N) {
    const le = t.getRecordMatcher(N)
    le && t.removeRoute(le)
  }
  function m() {
    return t.getRoutes().map((N) => N.record)
  }
  function _(N) {
    return !!t.getRecordMatcher(N)
  }
  function T(N, le) {
    if (((le = qe({}, le || o.value)), typeof N == "string")) {
      const C = qa(n, N, le.path),
        B = t.resolve({ path: C.path }, le),
        H = r.createHref(C.fullPath)
      return qe(C, B, {
        params: v(B.params),
        hash: Rr(C.hash),
        redirectedFrom: void 0,
        href: H,
      })
    }
    let se
    if ("path" in N) se = qe({}, N, { path: qa(n, N.path, le.path).path })
    else {
      const C = qe({}, N.params)
      for (const B in C) C[B] == null && delete C[B]
      ;(se = qe({}, N, { params: p(C) })), (le.params = p(le.params))
    }
    const pe = t.resolve(se, le),
      Re = N.hash || ""
    pe.params = c(v(pe.params))
    const Ze = cm(s, qe({}, N, { hash: Ym(Re), path: pe.path })),
      S = r.createHref(Ze)
    return qe(
      { fullPath: Ze, hash: Re, query: s === bu ? Qm(N.query) : N.query || {} },
      pe,
      { redirectedFrom: void 0, href: S },
    )
  }
  function x(N) {
    return typeof N == "string" ? qa(n, N, o.value.path) : qe({}, N)
  }
  function w(N, le) {
    if (f !== N) return Cs(8, { from: le, to: N })
  }
  function I(N) {
    return re(N)
  }
  function z(N) {
    return I(qe(x(N), { replace: !0 }))
  }
  function O(N) {
    const le = N.matched[N.matched.length - 1]
    if (le && le.redirect) {
      const { redirect: se } = le
      let pe = typeof se == "function" ? se(N) : se
      return (
        typeof pe == "string" &&
          ((pe =
            pe.includes("?") || pe.includes("#") ? (pe = x(pe)) : { path: pe }),
          (pe.params = {})),
        qe(
          {
            query: N.query,
            hash: N.hash,
            params: "path" in pe ? {} : N.params,
          },
          pe,
        )
      )
    }
  }
  function re(N, le) {
    const se = (f = T(N)),
      pe = o.value,
      Re = N.state,
      Ze = N.force,
      S = N.replace === !0,
      C = O(se)
    if (C)
      return re(
        qe(x(C), {
          state: typeof C == "object" ? qe({}, Re, C.state) : Re,
          force: Ze,
          replace: S,
        }),
        le || se,
      )
    const B = se
    B.redirectedFrom = le
    let H
    return (
      !Ze &&
        dm(s, pe, se) &&
        ((H = Cs(16, { to: B, from: pe })), tt(pe, pe, !0, !1)),
      (H ? Promise.resolve(H) : D(B, pe))
        .catch((R) => (cn(R) ? (cn(R, 2) ? R : ke(R)) : V(R, B, pe)))
        .then((R) => {
          if (R) {
            if (cn(R, 2))
              return re(
                qe({ replace: S }, x(R.to), {
                  state: typeof R.to == "object" ? qe({}, Re, R.to.state) : Re,
                  force: Ze,
                }),
                le || B,
              )
          } else R = ge(B, pe, !0, S, Re)
          return Q(B, pe, R), R
        })
    )
  }
  function q(N, le) {
    const se = w(N, le)
    return se ? Promise.reject(se) : Promise.resolve()
  }
  function G(N) {
    const le = Dt.values().next().value
    return le && typeof le.runWithContext == "function"
      ? le.runWithContext(N)
      : N()
  }
  function D(N, le) {
    let se
    const [pe, Re, Ze] = u1(N, le)
    se = Ua(pe.reverse(), "beforeRouteLeave", N, le)
    for (const C of pe)
      C.leaveGuards.forEach((B) => {
        se.push(An(B, N, le))
      })
    const S = q.bind(null, N, le)
    return (
      se.push(S),
      it(se)
        .then(() => {
          se = []
          for (const C of a.list()) se.push(An(C, N, le))
          return se.push(S), it(se)
        })
        .then(() => {
          se = Ua(Re, "beforeRouteUpdate", N, le)
          for (const C of Re)
            C.updateGuards.forEach((B) => {
              se.push(An(B, N, le))
            })
          return se.push(S), it(se)
        })
        .then(() => {
          se = []
          for (const C of Ze)
            if (C.beforeEnter)
              if (Jt(C.beforeEnter))
                for (const B of C.beforeEnter) se.push(An(B, N, le))
              else se.push(An(C.beforeEnter, N, le))
          return se.push(S), it(se)
        })
        .then(
          () => (
            N.matched.forEach((C) => (C.enterCallbacks = {})),
            (se = Ua(Ze, "beforeRouteEnter", N, le)),
            se.push(S),
            it(se)
          ),
        )
        .then(() => {
          se = []
          for (const C of i.list()) se.push(An(C, N, le))
          return se.push(S), it(se)
        })
        .catch((C) => (cn(C, 8) ? C : Promise.reject(C)))
    )
  }
  function Q(N, le, se) {
    l.list().forEach((pe) => G(() => pe(N, le, se)))
  }
  function ge(N, le, se, pe, Re) {
    const Ze = w(N, le)
    if (Ze) return Ze
    const S = le === $n,
      C = gs ? history.state : {}
    se &&
      (pe || S
        ? r.replace(N.fullPath, qe({ scroll: S && C && C.scroll }, Re))
        : r.push(N.fullPath, Re)),
      (o.value = N),
      tt(N, le, se, S),
      ke()
  }
  let X
  function Se() {
    X ||
      (X = r.listen((N, le, se) => {
        if (!Ct.listening) return
        const pe = T(N),
          Re = O(pe)
        if (Re) {
          re(qe(Re, { replace: !0 }), pe).catch(Vs)
          return
        }
        f = pe
        const Ze = o.value
        gs && ym(cu(Ze.fullPath, se.delta), la()),
          D(pe, Ze)
            .catch((S) =>
              cn(S, 12)
                ? S
                : cn(S, 2)
                  ? (re(S.to, pe)
                      .then((C) => {
                        cn(C, 20) &&
                          !se.delta &&
                          se.type === Zs.pop &&
                          r.go(-1, !1)
                      })
                      .catch(Vs),
                    Promise.reject())
                  : (se.delta && r.go(-se.delta, !1), V(S, pe, Ze)),
            )
            .then((S) => {
              ;(S = S || ge(pe, Ze, !1)),
                S &&
                  (se.delta && !cn(S, 8)
                    ? r.go(-se.delta, !1)
                    : se.type === Zs.pop && cn(S, 20) && r.go(-1, !1)),
                Q(pe, Ze, S)
            })
            .catch(Vs)
      }))
  }
  let Ce = js(),
    F = js(),
    oe
  function V(N, le, se) {
    ke(N)
    const pe = F.list()
    return (
      pe.length ? pe.forEach((Re) => Re(N, le, se)) : console.error(N),
      Promise.reject(N)
    )
  }
  function Ke() {
    return oe && o.value !== $n
      ? Promise.resolve()
      : new Promise((N, le) => {
          Ce.add([N, le])
        })
  }
  function ke(N) {
    return (
      oe ||
        ((oe = !N),
        Se(),
        Ce.list().forEach(([le, se]) => (N ? se(N) : le())),
        Ce.reset()),
      N
    )
  }
  function tt(N, le, se, pe) {
    const { scrollBehavior: Re } = e
    if (!gs || !Re) return Promise.resolve()
    const Ze =
      (!se && wm(cu(N.fullPath, 0))) ||
      ((pe || !se) && history.state && history.state.scroll) ||
      null
    return Jr()
      .then(() => Re(N, le, Ze))
      .then((S) => S && bm(S))
      .catch((S) => V(S, N, le))
  }
  const nt = (N) => r.go(N)
  let Qt
  const Dt = new Set(),
    Ct = {
      currentRoute: o,
      listening: !0,
      addRoute: b,
      removeRoute: $,
      hasRoute: _,
      getRoutes: m,
      resolve: T,
      options: e,
      push: I,
      replace: z,
      go: nt,
      back: () => nt(-1),
      forward: () => nt(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: F.add,
      isReady: Ke,
      install(N) {
        const le = this
        N.component("RouterLink", s1),
          N.component("RouterView", l1),
          (N.config.globalProperties.$router = le),
          Object.defineProperty(N.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => we(o),
          }),
          gs &&
            !Qt &&
            o.value === $n &&
            ((Qt = !0), I(r.location).catch((Re) => {}))
        const se = {}
        for (const Re in $n)
          Object.defineProperty(se, Re, {
            get: () => o.value[Re],
            enumerable: !0,
          })
        N.provide(oa, le), N.provide(Zc, Ju(se)), N.provide(yi, o)
        const pe = N.unmount
        Dt.add(N),
          (N.unmount = function () {
            Dt.delete(N),
              Dt.size < 1 &&
                ((f = $n),
                X && X(),
                (X = null),
                (o.value = $n),
                (Qt = !1),
                (oe = !1)),
              pe()
          })
      },
    }
  function it(N) {
    return N.reduce((le, se) => le.then(() => G(se)), Promise.resolve())
  }
  return Ct
}
function u1(e, t) {
  const n = [],
    s = [],
    r = [],
    a = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < a; i++) {
    const l = t.matched[i]
    l && (e.matched.find((f) => Es(f, l)) ? s.push(l) : n.push(l))
    const o = e.matched[i]
    o && (t.matched.find((f) => Es(f, o)) || r.push(o))
  }
  return [n, s, r]
}
function c1() {
  return ht(oa)
}
var Sr = {
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
        strokeWidth: s = 2,
        absoluteStrokeWidth: r,
        color: a,
        class: i,
        ...l
      },
      { attrs: o, slots: f },
    ) =>
      Ye(
        "svg",
        {
          ...Sr,
          width: n || Sr.width,
          height: n || Sr.height,
          stroke: a || Sr.stroke,
          "stroke-width": r ? (Number(s) * 24) / Number(n) : s,
          ...o,
          class: ["lucide", `lucide-${d1(e)}`],
          ...l,
        },
        [...t.map((c) => Ye(...c)), ...(f.default ? [f.default()] : [])],
      )
const Eu = gt("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]])
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
const Qc = gt("EyeOffIcon", [
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
const Ir = gt("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
const _1 = gt("SunIcon", [
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
const E1 = gt("TurtleIcon", [
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
  ns = (e) => (er("data-v-e6afc4f6"), (e = e()), tr(), e),
  C1 = { class: "flex justify-center p-5 gap-5 content-center" },
  T1 = ns(() => g("div", { class: "w-1/12" }, null, -1)),
  k1 = { class: "flex justify-between gap-2 w-full content-center" },
  $1 = { class: "flex gap-1 p-2" },
  P1 = { class: "flex gap-5 p-2 relative" },
  I1 = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  M1 = ns(() => g("b", null, "Art and Animation", -1)),
  O1 = [M1],
  A1 = { class: "flex gap-5 content-center" },
  L1 = { class: "lg:hidden flex" },
  z1 = { class: "flex gap-1 p-2" },
  B1 = { class: "flex flex-col gap-2 p-2" },
  j1 = { class: "flex justify-between" },
  N1 = ns(() => g("div", { class: "w-1/12" }, null, -1)),
  R1 = { class: "flex justify-between items-center" },
  F1 = { class: "flex gap-1 p-2" },
  D1 = ns(() => g("li", { class: "py-2 px-3 rounded" }, "Contact", -1)),
  H1 = [D1],
  G1 = ns(() => g("li", { class: "py-2 px-3 rounded" }, "Web Portfolio", -1)),
  V1 = [G1],
  W1 = ns(() => g("li", { class: "py-2 px-3 rounded" }, "Web Services", -1)),
  q1 = [W1],
  U1 = kc(
    '<li class="py-2 px-3 rounded opacity-75" data-v-e6afc4f6>Creative Projects</li><ul class="ml-5" data-v-e6afc4f6><li class="py-2 px-3 rounded" data-v-e6afc4f6>Art and Animation</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Custom Software</li><li class="py-2 px-3 rounded" data-v-e6afc4f6>Cooking and Recipes</li></ul>',
    2,
  ),
  Y1 = ns(() => g("li", { class: "py-2 px-3 rounded" }, "About Me", -1)),
  K1 = [Y1],
  X1 = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = ee(5),
        s = t,
        r = c1(),
        a = (f) => {
          ;(n.value = f.target.value), s("update:brightness", n.value)
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
          l(), r.push(f)
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
                  g("div", k1, [
                    g("div", $1, [
                      he(
                        we(Ya),
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
                      g(
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
                          onClick: i,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                    g("div", P1, [
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
                              class: M([
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
                          default: Ue(() => [
                            he(
                              we(iu),
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
                                default: Ue(() => [
                                  $e(" Creative Projects"),
                                  he(we(f1)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            he(
                              we(lu),
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
                                default: Ue(() => [
                                  g("div", I1, [
                                    g(
                                      "a",
                                      {
                                        href: "https://hansenstudios.art/",
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
                                      O1,
                                      2,
                                    ),
                                    g(
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
                                    g(
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
                                    g(
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
                              class: M([
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
                  g("div", L1, [
                    g("div", z1, [
                      he(
                        we(Ya),
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
                      g(
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
                      onClick: c[4] || (c[4] = (p) => l()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  he(we(vi), null, {
                    default: Ue(() => [
                      he(
                        we(iu),
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
                          default: Ue(() => [
                            n.value == 5
                              ? (te(),
                                Ne(we(_1), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (te(),
                                  Ne(we(h1), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (te(),
                                    Ne(we(p1), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (te(),
                                      Ne(we(w1), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (te(),
                                      Ne(we(y1), {
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
                        we(lu),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: Ue(() => [
                            g("div", B1, [
                              g("div", j1, [
                                fc(
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
              N1,
            ]),
            g(
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
                g("div", R1, [
                  g("div", F1, [
                    he(
                      we(Ya),
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
                    g(
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
                      class: M({
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
  J1 = bn(X1, [["__scopeId", "data-v-e6afc4f6"]]),
  Z1 = { class: "flex justify-center py-5 flex-col" },
  Q1 = { class: "inline-block relative" },
  eb = { class: "font-semibold text-center px-1" },
  tb = { class: "flex py-5 justify-center gap-3 w-full" },
  nb = { href: "/portfolio" },
  sb = { href: "/pricing" },
  rb = {
    directives: {
      typewriter: {
        beforeUpdate(e, t) {
          if (t.oldValue !== t.value) {
            let n = t.value,
              s = Math.random() * 100 + 25
            ;(e.textContent = ""),
              n.split("").forEach((r, a) => {
                setTimeout(() => {
                  e.textContent += r
                }, s * a)
              })
          }
        },
      },
    },
  },
  ab = Object.assign(rb, {
    __name: "Hero",
    props: { brightness: Number },
    setup(e) {
      const t = ee([
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
      let n = ee(0),
        s = ee(!1)
      yt(() => {
        ;(t.value = t.value.sort(() => Math.random() - 0.5)),
          setInterval(() => {
            s.value ||
              ((s.value = !0), (n.value = (n.value + 1) % t.value.length))
          }, 4e3)
        const a = () => {
            s.value = !1
          },
          i = () => {
            s.value = !0
          }
        window.addEventListener("mousedown", a),
          window.addEventListener("mouseup", i),
          Dn(() => {
            window.removeEventListener("mousedown", a),
              window.removeEventListener("mouseup", i)
          })
      }),
        Di(() => {
          s.value = !1
        })
      const r = me(() => t.value[n.value])
      return (a, i) => {
        const l = og("typewriter")
        return (
          te(),
          xe("div", Z1, [
            g(
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
                $e(" I make "),
                g("div", Q1, [
                  fc((te(), xe("span", eb, [$e($t(r.value), 1)])), [
                    [l, r.value],
                  ]),
                  g(
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
                $e(" websites. "),
              ],
              2,
            ),
            g(
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
            g("div", tb, [
              g("a", nb, [
                g(
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
              ]),
              g("a", sb, [
                g(
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
function Cu(e) {
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
        : Cu(t[n]) && Cu(e[n]) && Object.keys(t[n]).length > 0 && Ji(e[n], t[n])
    })
}
const ed = {
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
function gn() {
  const e = typeof document < "u" ? document : {}
  return Ji(e, ed), e
}
const ib = {
  document: ed,
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
function jt() {
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
function Fr() {
  return Date.now()
}
function ub(e) {
  const t = jt()
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
  const n = jt()
  let s, r, a
  const i = ub(e)
  return (
    n.WebKitCSSMatrix
      ? ((r = i.transform || i.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (a = new n.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((a =
          i.MozTransform ||
          i.OTransform ||
          i.MsTransform ||
          i.msTransform ||
          i.transform ||
          i
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = a.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (r = a.m41)
        : s.length === 16
          ? (r = parseFloat(s[12]))
          : (r = parseFloat(s[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (r = a.m42)
        : s.length === 16
          ? (r = parseFloat(s[13]))
          : (r = parseFloat(s[5]))),
    r || 0
  )
}
function _r(e) {
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
    const s = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (s != null && !db(s)) {
      const r = Object.keys(Object(s)).filter((a) => t.indexOf(a) < 0)
      for (let a = 0, i = r.length; a < i; a += 1) {
        const l = r[a],
          o = Object.getOwnPropertyDescriptor(s, l)
        o !== void 0 &&
          o.enumerable &&
          (_r(e[l]) && _r(s[l])
            ? s[l].__swiper__
              ? (e[l] = s[l])
              : At(e[l], s[l])
            : !_r(e[l]) && _r(s[l])
              ? ((e[l] = {}), s[l].__swiper__ ? (e[l] = s[l]) : At(e[l], s[l]))
              : (e[l] = s[l]))
      }
    }
  }
  return e
}
function Er(e, t, n) {
  e.style.setProperty(t, n)
}
function td(e) {
  let { swiper: t, targetPosition: n, side: s } = e
  const r = jt(),
    a = -t.translate
  let i = null,
    l
  const o = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(t.cssModeFrameID)
  const f = n > a ? "next" : "prev",
    c = (v, b) => (f === "next" && v >= b) || (f === "prev" && v <= b),
    p = () => {
      ;(l = new Date().getTime()), i === null && (i = l)
      const v = Math.max(Math.min((l - i) / o, 1), 0),
        b = 0.5 - Math.cos(v * Math.PI) / 2
      let $ = a + b * (n - a)
      if ((c($, n) && ($ = n), t.wrapperEl.scrollTo({ [s]: $ }), c($, n))) {
        ;(t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: $ })
          }),
          r.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = r.requestAnimationFrame(p)
    }
  p()
}
function rn(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t))
}
function Dr(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function Hr(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : lb(t))), n
}
function fb(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const s = e.previousElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function pb(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const s = e.nextElementSibling
    t ? s.matches(t) && n.push(s) : n.push(s), (e = s)
  }
  return n
}
function zn(e, t) {
  return jt().getComputedStyle(e, null).getPropertyValue(t)
}
function Gr(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function nd(e, t) {
  const n = []
  let s = e.parentElement
  for (; s; ) t ? s.matches(t) && n.push(s) : n.push(s), (s = s.parentElement)
  return n
}
function Si(e, t, n) {
  const s = jt()
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
        ) +
        parseFloat(
          s
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
        )
    : e.offsetWidth
}
let Ka
function hb() {
  const e = jt(),
    t = gn()
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
function sd() {
  return Ka || (Ka = hb()), Ka
}
let Xa
function gb(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = sd(),
    s = jt(),
    r = s.navigator.platform,
    a = t || s.navigator.userAgent,
    i = { ios: !1, android: !1 },
    l = s.screen.width,
    o = s.screen.height,
    f = a.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = a.match(/(iPad).*OS\s([\d_]+)/)
  const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    b = r === "Win32"
  let $ = r === "MacIntel"
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
      $ &&
      n.touch &&
      m.indexOf(`${l}x${o}`) >= 0 &&
      ((c = a.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      ($ = !1)),
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
  const e = jt()
  let t = !1
  function n() {
    const s = e.navigator.userAgent.toLowerCase()
    return (
      s.indexOf("safari") >= 0 &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0
    )
  }
  if (n()) {
    const s = String(e.navigator.userAgent)
    if (s.includes("Version/")) {
      const [r, a] = s
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((i) => Number(i))
      t = r < 16 || (r === 16 && a < 2)
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
  let { swiper: t, on: n, emit: s } = e
  const r = jt()
  let a = null,
    i = null
  const l = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"))
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((a = new ResizeObserver((p) => {
          i = r.requestAnimationFrame(() => {
            const { width: v, height: b } = t
            let $ = v,
              m = b
            p.forEach((_) => {
              let { contentBoxSize: T, contentRect: x, target: w } = _
              ;(w && w !== t.el) ||
                (($ = x ? x.width : (T[0] || T).inlineSize),
                (m = x ? x.height : (T[0] || T).blockSize))
            }),
              ($ !== v || m !== b) && l()
          })
        })),
        a.observe(t.el))
    },
    f = () => {
      i && r.cancelAnimationFrame(i),
        a && a.unobserve && t.el && (a.unobserve(t.el), (a = null))
    },
    c = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange")
    }
  n("init", () => {
    if (t.params.resizeObserver && typeof r.ResizeObserver < "u") {
      o()
      return
    }
    r.addEventListener("resize", l), r.addEventListener("orientationchange", c)
  }),
    n("destroy", () => {
      f(),
        r.removeEventListener("resize", l),
        r.removeEventListener("orientationchange", c)
    })
}
function wb(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
  const a = [],
    i = jt(),
    l = function (c, p) {
      p === void 0 && (p = {})
      const v = i.MutationObserver || i.WebkitMutationObserver,
        b = new v(($) => {
          if (t.__preventObserver__) return
          if ($.length === 1) {
            r("observerUpdate", $[0])
            return
          }
          const m = function () {
            r("observerUpdate", $[0])
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
          const c = nd(t.hostEl)
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
    s("init", o),
    s("destroy", f)
}
var xb = {
  on(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    const r = n ? "unshift" : "push"
    return (
      e.split(" ").forEach((a) => {
        s.eventsListeners[a] || (s.eventsListeners[a] = []),
          s.eventsListeners[a][r](t)
      }),
      s
    )
  },
  once(e, t, n) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s
    function r() {
      s.off(e, r), r.__emitterProxy && delete r.__emitterProxy
      for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
        i[l] = arguments[l]
      t.apply(s, i)
    }
    return (r.__emitterProxy = t), s.on(e, r, n)
  },
  onAny(e, t) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n
    const s = t ? "unshift" : "push"
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
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
        e.split(" ").forEach((s) => {
          typeof t > "u"
            ? (n.eventsListeners[s] = [])
            : n.eventsListeners[s] &&
              n.eventsListeners[s].forEach((r, a) => {
                ;(r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                  n.eventsListeners[s].splice(a, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, s
    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
      a[i] = arguments[i]
    return (
      typeof a[0] == "string" || Array.isArray(a[0])
        ? ((t = a[0]), (n = a.slice(1, a.length)), (s = e))
        : ((t = a[0].events), (n = a[0].data), (s = a[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((f) => {
            f.apply(s, [o, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((f) => {
              f.apply(s, n)
            })
      }),
      e
    )
  },
}
function Sb() {
  const e = this
  let t, n
  const s = e.el
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(zn(s, "padding-left") || 0, 10) -
        parseInt(zn(s, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(zn(s, "padding-top") || 0, 10) -
        parseInt(zn(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function _b() {
  const e = this
  function t(D, Q) {
    return parseFloat(D.getPropertyValue(e.getDirectionLabel(Q)) || 0)
  }
  const n = e.params,
    { wrapperEl: s, slidesEl: r, size: a, rtlTranslate: i, wrongRTL: l } = e,
    o = e.virtual && n.virtual.enabled,
    f = o ? e.virtual.slides.length : e.slides.length,
    c = rn(r, `.${e.params.slideClass}, swiper-slide`),
    p = o ? e.virtual.slides.length : c.length
  let v = []
  const b = [],
    $ = []
  let m = n.slidesOffsetBefore
  typeof m == "function" && (m = n.slidesOffsetBefore.call(e))
  let _ = n.slidesOffsetAfter
  typeof _ == "function" && (_ = n.slidesOffsetAfter.call(e))
  const T = e.snapGrid.length,
    x = e.slidesGrid.length
  let w = n.spaceBetween,
    I = -m,
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
      (Er(s, "--swiper-centered-offset-before", ""),
      Er(s, "--swiper-centered-offset-after", ""))
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
      !(c[D] && zn(Q, "display") === "none"))
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
            Ke = t(ge, "margin-right"),
            ke = ge.getPropertyValue("box-sizing")
          if (ke && ke === "border-box") q = Ce + V + Ke
          else {
            const { clientWidth: tt, offsetWidth: nt } = Q
            q = Ce + F + oe + V + Ke + (nt - tt)
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
        $.push(q),
        n.centeredSlides
          ? ((I = I + q / 2 + z / 2 + w),
            z === 0 && D !== 0 && (I = I - a / 2 - w),
            D === 0 && (I = I - a / 2 - w),
            Math.abs(I) < 1 / 1e3 && (I = 0),
            n.roundLengths && (I = Math.floor(I)),
            O % n.slidesPerGroup === 0 && v.push(I),
            b.push(I))
          : (n.roundLengths && (I = Math.floor(I)),
            (O - Math.min(e.params.slidesPerGroupSkip, O)) %
              e.params.slidesPerGroup ===
              0 && v.push(I),
            b.push(I),
            (I = I + q + w)),
        (e.virtualSize += q + w),
        (z = q),
        (O += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + _),
    i &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + w}px`),
    n.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`),
    re && e.grid.updateWrapperSize(q, v),
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
    const D = $[0] + w
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
    $.forEach((ge) => {
      D += ge + (w || 0)
    }),
      (D -= w)
    const Q = D - a
    v = v.map((ge) => (ge <= 0 ? -m : ge > Q ? Q + _ : ge))
  }
  if (n.centerInsufficientSlides) {
    let D = 0
    if (
      ($.forEach((Q) => {
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
      slidesSizesGrid: $,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Er(s, "--swiper-centered-offset-before", `${-v[0]}px`),
      Er(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - $[$.length - 1] / 2}px`,
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
function Eb(e) {
  const t = this,
    n = [],
    s = t.virtual && t.params.virtual.enabled
  let r = 0,
    a
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const i = (l) => (s ? t.slides[t.getSlideIndexByData(l)] : t.slides[l])
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l)
      })
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        const l = t.activeIndex + a
        if (l > t.slides.length && !s) break
        n.push(i(l))
      }
  else n.push(i(t.activeIndex))
  for (a = 0; a < n.length; a += 1)
    if (typeof n[a] < "u") {
      const l = n[a].offsetHeight
      r = l > r ? l : r
    }
  ;(r || r === 0) && (t.wrapperEl.style.height = `${r}px`)
}
function Cb() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
      n -
      e.cssOverflowAdjustment()
}
function Tb(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: s, rtlTranslate: r, snapGrid: a } = t
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset()
  let i = -e
  r && (i = e),
    s.forEach((o) => {
      o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = [])
  let l = n.spaceBetween
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l))
  for (let o = 0; o < s.length; o += 1) {
    const f = s[o]
    let c = f.swiperSlideOffset
    n.cssMode && n.centeredSlides && (c -= s[0].swiperSlideOffset)
    const p =
        (i + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (f.swiperSlideSize + l),
      v =
        (i - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (f.swiperSlideSize + l),
      b = -(i - c),
      $ = b + t.slidesSizesGrid[o],
      m = b >= 0 && b <= t.size - t.slidesSizesGrid[o]
    ;((b >= 0 && b < t.size - 1) ||
      ($ > 1 && $ <= t.size) ||
      (b <= 0 && $ >= t.size)) &&
      (t.visibleSlides.push(f),
      t.visibleSlidesIndexes.push(o),
      s[o].classList.add(n.slideVisibleClass)),
      m && s[o].classList.add(n.slideFullyVisibleClass),
      (f.progress = r ? -p : p),
      (f.originalProgress = r ? -v : v)
  }
}
function kb(e) {
  const t = this
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * c) || 0
  }
  const n = t.params,
    s = t.maxTranslate() - t.minTranslate()
  let { progress: r, isBeginning: a, isEnd: i, progressLoop: l } = t
  const o = a,
    f = i
  if (s === 0) (r = 0), (a = !0), (i = !0)
  else {
    r = (e - t.minTranslate()) / s
    const c = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1
    ;(a = c || r <= 0), (i = p || r >= 1), c && (r = 0), p && (r = 1)
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      v = t.slidesGrid[c],
      b = t.slidesGrid[p],
      $ = t.slidesGrid[t.slidesGrid.length - 1],
      m = Math.abs(e)
    m >= v ? (l = (m - v) / $) : (l = (m + $ - b) / $), l > 1 && (l -= 1)
  }
  Object.assign(t, { progress: r, progressLoop: l, isBeginning: a, isEnd: i }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !o && t.emit("reachBeginning toEdge"),
    i && !f && t.emit("reachEnd toEdge"),
    ((o && !a) || (f && !i)) && t.emit("fromEdge"),
    t.emit("progress", r)
}
function $b() {
  const e = this,
    { slides: t, params: n, slidesEl: s, activeIndex: r } = e,
    a = e.virtual && n.virtual.enabled,
    i = e.grid && n.grid && n.grid.rows > 1,
    l = (p) => rn(s, `.${n.slideClass}${p}, swiper-slide${p}`)[0]
  t.forEach((p) => {
    p.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
  })
  let o, f, c
  if (a)
    if (n.loop) {
      let p = r - e.virtual.slidesBefore
      p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        (o = l(`[data-swiper-slide-index="${p}"]`))
    } else o = l(`[data-swiper-slide-index="${r}"]`)
  else
    i
      ? ((o = t.filter((p) => p.column === r)[0]),
        (c = t.filter((p) => p.column === r + 1)[0]),
        (f = t.filter((p) => p.column === r - 1)[0]))
      : (o = t[r])
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
const Mr = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      s = t.closest(n())
    if (s) {
      let r = s.querySelector(`.${e.params.lazyPreloaderClass}`)
      !r &&
        e.isElement &&
        (s.shadowRoot
          ? (r = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((r = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                r && r.remove())
            })),
        r && r.remove()
    }
  },
  Za = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute("loading")
  },
  _i = (e) => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const s =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      r = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const i = r,
        l = [i - t]
      l.push(...Array.from({ length: t }).map((o, f) => i + s + f)),
        e.slides.forEach((o, f) => {
          l.includes(o.column) && Za(e, f)
        })
      return
    }
    const a = r + s - 1
    if (e.params.rewind || e.params.loop)
      for (let i = r - t; i <= a + t; i += 1) {
        const l = ((i % n) + n) % n
        ;(l < r || l > a) && Za(e, l)
      }
    else
      for (let i = Math.max(r - t, 0); i <= Math.min(a + t, n - 1); i += 1)
        i !== r && (i > a || i < r) && Za(e, i)
  }
function Pb(e) {
  const { slidesGrid: t, params: n } = e,
    s = e.rtlTranslate ? e.translate : -e.translate
  let r
  for (let a = 0; a < t.length; a += 1)
    typeof t[a + 1] < "u"
      ? s >= t[a] && s < t[a + 1] - (t[a + 1] - t[a]) / 2
        ? (r = a)
        : s >= t[a] && s < t[a + 1] && (r = a + 1)
      : s >= t[a] && (r = a)
  return n.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r
}
function Ib(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: r, activeIndex: a, realIndex: i, snapIndex: l } = t
  let o = e,
    f
  const c = (b) => {
    let $ = b - t.virtual.slidesBefore
    return (
      $ < 0 && ($ = t.virtual.slides.length + $),
      $ >= t.virtual.slides.length && ($ -= t.virtual.slides.length),
      $
    )
  }
  if ((typeof o > "u" && (o = Pb(t)), s.indexOf(n) >= 0)) f = s.indexOf(n)
  else {
    const b = Math.min(r.slidesPerGroupSkip, o)
    f = b + Math.floor((o - b) / r.slidesPerGroup)
  }
  if ((f >= s.length && (f = s.length - 1), o === a && !t.params.loop)) {
    f !== l && ((t.snapIndex = f), t.emit("snapIndexChange"))
    return
  }
  if (o === a && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(o)
    return
  }
  const p = t.grid && r.grid && r.grid.rows > 1
  let v
  if (t.virtual && r.virtual.enabled && r.loop) v = c(o)
  else if (p) {
    const b = t.slides.filter((m) => m.column === o)[0]
    let $ = parseInt(b.getAttribute("data-swiper-slide-index"), 10)
    Number.isNaN($) && ($ = Math.max(t.slides.indexOf(b), 0)),
      (v = Math.floor($ / r.grid.rows))
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
    t.initialized && _i(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (i !== v && t.emit("realIndexChange"), t.emit("slideChange"))
}
function Mb(e, t) {
  const n = this,
    s = n.params
  let r = e.closest(`.${s.slideClass}, swiper-slide`)
  !r &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !r && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (r = l)
    })
  let a = !1,
    i
  if (r) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === r) {
        ;(a = !0), (i = l)
        break
      }
  }
  if (r && a)
    (n.clickedSlide = r),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = i)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  s.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var Ob = {
  updateSize: Sb,
  updateSlides: _b,
  updateAutoHeight: Eb,
  updateSlidesOffset: Cb,
  updateSlidesProgress: Tb,
  updateProgress: kb,
  updateSlidesClasses: $b,
  updateActiveIndex: Ib,
  updateClickedSlide: Mb,
}
function Ab(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y")
  const t = this,
    { params: n, rtlTranslate: s, translate: r, wrapperEl: a } = t
  if (n.virtualTranslate) return s ? -r : r
  if (n.cssMode) return r
  let i = cb(a, e)
  return (i += t.cssOverflowAdjustment()), s && (i = -i), i || 0
}
function Lb(e, t) {
  const n = this,
    { rtlTranslate: s, params: r, wrapperEl: a, progress: i } = n
  let l = 0,
    o = 0
  const f = 0
  n.isHorizontal() ? (l = s ? -e : e) : (o = e),
    r.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : o),
    r.cssMode
      ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -o)
      : r.virtualTranslate ||
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
function jb(e, t, n, s, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    s === void 0 && (s = !0)
  const a = this,
    { params: i, wrapperEl: l } = a
  if (a.animating && i.preventInteractionOnTransition) return !1
  const o = a.minTranslate(),
    f = a.maxTranslate()
  let c
  if (
    (s && e > o ? (c = o) : s && e < f ? (c = f) : (c = e),
    a.updateProgress(c),
    i.cssMode)
  ) {
    const p = a.isHorizontal()
    if (t === 0) l[p ? "scrollLeft" : "scrollTop"] = -c
    else {
      if (!a.support.smoothScroll)
        return (
          td({ swiper: a, targetPosition: -c, side: p ? "left" : "top" }), !0
        )
      l.scrollTo({ [p ? "left" : "top"]: -c, behavior: "smooth" })
    }
    return !0
  }
  return (
    t === 0
      ? (a.setTransition(0),
        a.setTranslate(c),
        n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd")))
      : (a.setTransition(t),
        a.setTranslate(c),
        n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")),
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
var Nb = {
  getTranslate: Ab,
  setTranslate: Lb,
  minTranslate: zb,
  maxTranslate: Bb,
  translateTo: jb,
}
function Rb(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t)
}
function rd(e) {
  let { swiper: t, runCallbacks: n, direction: s, step: r } = e
  const { activeIndex: a, previousIndex: i } = t
  let l = s
  if (
    (l || (a > i ? (l = "next") : a < i ? (l = "prev") : (l = "reset")),
    t.emit(`transition${r}`),
    n && a !== i)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${r}`)
      return
    }
    t.emit(`slideChangeTransition${r}`),
      l === "next"
        ? t.emit(`slideNextTransition${r}`)
        : t.emit(`slidePrevTransition${r}`)
  }
}
function Fb(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  s.cssMode ||
    (s.autoHeight && n.updateAutoHeight(),
    rd({ swiper: n, runCallbacks: e, direction: t, step: "Start" }))
}
function Db(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: s } = n
  ;(n.animating = !1),
    !s.cssMode &&
      (n.setTransition(0),
      rd({ swiper: n, runCallbacks: e, direction: t, step: "End" }))
}
var Hb = { setTransition: Rb, transitionStart: Fb, transitionEnd: Db }
function Gb(e, t, n, s, r) {
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
    enabled: $,
  } = a
  if ((a.animating && l.preventInteractionOnTransition) || (!$ && !s && !r))
    return !1
  const m = Math.min(a.params.slidesPerGroupSkip, i)
  let _ = m + Math.floor((i - m) / a.params.slidesPerGroup)
  _ >= o.length && (_ = o.length - 1)
  const T = -o[_]
  if (l.normalizeSlideIndex)
    for (let w = 0; w < f.length; w += 1) {
      const I = -Math.floor(T * 100),
        z = Math.floor(f[w] * 100),
        O = Math.floor(f[w + 1] * 100)
      typeof f[w + 1] < "u"
        ? I >= z && I < O - (O - z) / 2
          ? (i = w)
          : I >= z && I < O && (i = w + 1)
        : I >= z && (i = w)
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
      I = v ? T : -T
    if (t === 0) {
      const z = a.virtual && a.params.virtual.enabled
      z &&
        ((a.wrapperEl.style.scrollSnapType = "none"),
        (a._immediateVirtual = !0)),
        z && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              b[w ? "scrollLeft" : "scrollTop"] = I
            }))
          : (b[w ? "scrollLeft" : "scrollTop"] = I),
        z &&
          requestAnimationFrame(() => {
            ;(a.wrapperEl.style.scrollSnapType = ""), (a._immediateVirtual = !1)
          })
    } else {
      if (!a.support.smoothScroll)
        return (
          td({ swiper: a, targetPosition: I, side: w ? "left" : "top" }), !0
        )
      b.scrollTo({ [w ? "left" : "top"]: I, behavior: "smooth" })
    }
    return !0
  }
  return (
    a.setTransition(t),
    a.setTranslate(T),
    a.updateActiveIndex(i),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", t, s),
    a.transitionStart(n, x),
    t === 0
      ? a.transitionEnd(n, x)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (I) {
            !a ||
              a.destroyed ||
              (I.target === this &&
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
function Vb(e, t, n, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10))
  const r = this,
    a = r.grid && r.params.grid && r.params.grid.rows > 1
  let i = e
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) i = i + r.virtual.slidesBefore
    else {
      let l
      if (a) {
        const v = i * r.params.grid.rows
        l = r.slides.filter(
          (b) => b.getAttribute("data-swiper-slide-index") * 1 === v,
        )[0].column
      } else l = r.getSlideIndexByData(i)
      const o = a
          ? Math.ceil(r.slides.length / r.params.grid.rows)
          : r.slides.length,
        { centeredSlides: f } = r.params
      let c = r.params.slidesPerView
      c === "auto"
        ? (c = r.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
          f && c % 2 === 0 && (c = c + 1))
      let p = o - l < c
      if ((f && (p = p || l < Math.ceil(c / 2)), p)) {
        const v = f
          ? l < r.activeIndex
            ? "prev"
            : "next"
          : l - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev"
        r.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === "next" ? l + 1 : l - o + 1,
          slideRealIndex: v === "next" ? r.realIndex : void 0,
        })
      }
      if (a) {
        const v = i * r.params.grid.rows
        i = r.slides.filter(
          (b) => b.getAttribute("data-swiper-slide-index") * 1 === v,
        )[0].column
      } else i = r.getSlideIndexByData(i)
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(i, t, n, s)
    }),
    r
  )
}
function Wb(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const s = this,
    { enabled: r, params: a, animating: i } = s
  if (!r) return s
  let l = a.slidesPerGroup
  a.slidesPerView === "auto" &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic("current", !0), 1))
  const o = s.activeIndex < a.slidesPerGroupSkip ? 1 : l,
    f = s.virtual && a.virtual.enabled
  if (a.loop) {
    if (i && !f && a.loopPreventsSliding) return !1
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && a.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + o, e, t, n)
        }),
        !0
      )
  }
  return a.rewind && s.isEnd
    ? s.slideTo(0, e, t, n)
    : s.slideTo(s.activeIndex + o, e, t, n)
}
function qb(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const s = this,
    {
      params: r,
      snapGrid: a,
      slidesGrid: i,
      rtlTranslate: l,
      enabled: o,
      animating: f,
    } = s
  if (!o) return s
  const c = s.virtual && r.virtual.enabled
  if (r.loop) {
    if (f && !c && r.loopPreventsSliding) return !1
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  const p = l ? s.translate : -s.translate
  function v(T) {
    return T < 0 ? -Math.floor(Math.abs(T)) : Math.floor(T)
  }
  const b = v(p),
    $ = a.map((T) => v(T))
  let m = a[$.indexOf(b) - 1]
  if (typeof m > "u" && r.cssMode) {
    let T
    a.forEach((x, w) => {
      b >= x && (T = w)
    }),
      typeof T < "u" && (m = a[T > 0 ? T - 1 : T])
  }
  let _ = 0
  if (
    (typeof m < "u" &&
      ((_ = i.indexOf(m)),
      _ < 0 && (_ = s.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((_ = _ - s.slidesPerViewDynamic("previous", !0) + 1),
        (_ = Math.max(_, 0)))),
    r.rewind && s.isBeginning)
  ) {
    const T =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1
    return s.slideTo(T, e, t, n)
  } else if (r.loop && s.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(_, e, t, n)
      }),
      !0
    )
  return s.slideTo(_, e, t, n)
}
function Ub(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0)
  const s = this
  return s.slideTo(s.activeIndex, e, t, n)
}
function Yb(e, t, n, s) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = 0.5)
  const r = this
  let a = r.activeIndex
  const i = Math.min(r.params.slidesPerGroupSkip, a),
    l = i + Math.floor((a - i) / r.params.slidesPerGroup),
    o = r.rtlTranslate ? r.translate : -r.translate
  if (o >= r.snapGrid[l]) {
    const f = r.snapGrid[l],
      c = r.snapGrid[l + 1]
    o - f > (c - f) * s && (a += r.params.slidesPerGroup)
  } else {
    const f = r.snapGrid[l - 1],
      c = r.snapGrid[l]
    o - f <= (c - f) * s && (a -= r.params.slidesPerGroup)
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, r.slidesGrid.length - 1)),
    r.slideTo(a, e, t, n)
  )
}
function Kb() {
  const e = this,
    { params: t, slidesEl: n } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView
  let r = e.clickedIndex,
    a
  const i = e.isElement ? "swiper-slide" : `.${t.slideClass}`
  if (t.loop) {
    if (e.animating) return
    ;(a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? r < e.loopedSlides - s / 2 ||
          r > e.slides.length - e.loopedSlides + s / 2
          ? (e.loopFix(),
            (r = e.getSlideIndex(
              rn(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            xi(() => {
              e.slideTo(r)
            }))
          : e.slideTo(r)
        : r > e.slides.length - s
          ? (e.loopFix(),
            (r = e.getSlideIndex(
              rn(n, `${i}[data-swiper-slide-index="${a}"]`)[0],
            )),
            xi(() => {
              e.slideTo(r)
            }))
          : e.slideTo(r)
  } else e.slideTo(r)
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
    { params: n, slidesEl: s } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const r = () => {
      rn(s, `.${n.slideClass}, swiper-slide`).forEach((p, v) => {
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
          ? Hr("swiper-slide", [n.slideBlankClass])
          : Hr("div", [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(v)
      }
    }
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = i - (t.slides.length % i)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      Dr(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    r()
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows)
      f(c), t.recalcSlides(), t.updateSlides()
    } else
      Dr(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      )
    r()
  } else r()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  })
}
function Zb(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: s,
    setTranslate: r,
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
    { centeredSlides: $ } = b
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
      $ && m % 2 === 0 && (m = m + 1))
  const _ = b.slidesPerGroupAuto ? m : b.slidesPerGroup
  let T = _
  T % _ !== 0 && (T += _ - (T % _)),
    (T += b.loopAdditionalSlides),
    (o.loopedSlides = T)
  const x = o.grid && b.grid && b.grid.rows > 1
  f.length < m + T
    ? Dr(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : x &&
      b.grid.fill === "row" &&
      Dr(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      )
  const w = [],
    I = []
  let z = o.activeIndex
  typeof a > "u"
    ? (a = o.getSlideIndex(
        f.filter((X) => X.classList.contains(b.slideActiveClass))[0],
      ))
    : (z = a)
  const O = s === "next" || !s,
    re = s === "prev" || !s
  let q = 0,
    G = 0
  const D = x ? Math.ceil(f.length / b.grid.rows) : f.length,
    ge = (x ? f[a].column : a) + ($ && typeof r > "u" ? -m / 2 + 0.5 : 0)
  if (ge < T) {
    q = Math.max(T - ge, _)
    for (let X = 0; X < T - ge; X += 1) {
      const Se = X - Math.floor(X / D) * D
      if (x) {
        const Ce = D - Se - 1
        for (let F = f.length - 1; F >= 0; F -= 1)
          f[F].column === Ce && w.push(F)
      } else w.push(D - Se - 1)
    }
  } else if (ge + m > D - T) {
    G = Math.max(ge - (D - T * 2), _)
    for (let X = 0; X < G; X += 1) {
      const Se = X - Math.floor(X / D) * D
      x
        ? f.forEach((Ce, F) => {
            Ce.column === Se && I.push(F)
          })
        : I.push(Se)
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
          v.prepend(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    O &&
      I.forEach((X) => {
        ;(f[X].swiperLoopMoveDOM = !0),
          v.append(f[X]),
          (f[X].swiperLoopMoveDOM = !1)
      }),
    o.recalcSlides(),
    b.slidesPerView === "auto"
      ? o.updateSlides()
      : x &&
        ((w.length > 0 && re) || (I.length > 0 && O)) &&
        o.slides.forEach((X, Se) => {
          o.grid.updateSlide(Se, X, o.slides)
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
            r &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - Ce),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - Ce)))
      } else if (r) {
        const X = x ? w.length / b.grid.rows : w.length
        o.slideTo(o.activeIndex + X, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate)
      }
    } else if (I.length > 0 && O)
      if (typeof t > "u") {
        const X = o.slidesGrid[z],
          Ce = o.slidesGrid[z - G] - X
        l
          ? o.setTranslate(o.translate - Ce)
          : (o.slideTo(z - G, 0, !1, !0),
            r &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - Ce),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - Ce)))
      } else {
        const X = x ? I.length / b.grid.rows : I.length
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
      direction: s,
      setTranslate: r,
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
  const s = []
  e.slides.forEach((r) => {
    const a =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex
    s[a] = r
  }),
    e.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index")
    }),
    s.forEach((r) => {
      n.append(r)
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
var s2 = { setGrabCursor: t2, unsetGrabCursor: n2 }
function r2(e, t) {
  t === void 0 && (t = this)
  function n(s) {
    if (!s || s === gn() || s === jt()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const r = s.closest(e)
    return !r && !s.getRootNode ? null : r || n(s.getRootNode().host)
  }
  return n(t)
}
function Tu(e, t, n) {
  const s = jt(),
    { params: r } = e,
    a = r.edgeSwipeDetection,
    i = r.edgeSwipeThreshold
  return a && (n <= i || n >= s.innerWidth - i)
    ? a === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function a2(e) {
  const t = this,
    n = gn()
  let s = e
  s.originalEvent && (s = s.originalEvent)
  const r = t.touchEventsData
  if (s.type === "pointerdown") {
    if (r.pointerId !== null && r.pointerId !== s.pointerId) return
    r.pointerId = s.pointerId
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (r.touchId = s.targetTouches[0].identifier)
  if (s.type === "touchstart") {
    Tu(t, s, s.targetTouches[0].pageX)
    return
  }
  const { params: a, touches: i, enabled: l } = t
  if (
    !l ||
    (!a.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && a.preventInteractionOnTransition)
  )
    return
  !t.animating && a.cssMode && a.loop && t.loopFix()
  let o = s.target
  if (
    (a.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return
  const f = !!a.noSwipingClass && a.noSwipingClass !== "",
    c = s.composedPath ? s.composedPath() : s.path
  f && s.target && s.target.shadowRoot && c && (o = c[0])
  const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    v = !!(s.target && s.target.shadowRoot)
  if (a.noSwiping && (v ? r2(p, o) : o.closest(p))) {
    t.allowClick = !0
    return
  }
  if (a.swipeHandler && !o.closest(a.swipeHandler)) return
  ;(i.currentX = s.pageX), (i.currentY = s.pageY)
  const b = i.currentX,
    $ = i.currentY
  if (!Tu(t, s, b)) return
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (i.startX = b),
    (i.startY = $),
    (r.touchStartTime = Fr()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (r.allowThresholdMove = !1)
  let m = !0
  o.matches(r.focusableElements) &&
    ((m = !1), o.nodeName === "SELECT" && (r.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(r.focusableElements) &&
      n.activeElement !== o &&
      n.activeElement.blur()
  const _ = m && t.allowTouchMove && a.touchStartPreventDefault
  ;(a.touchStartForcePreventDefault || _) &&
    !o.isContentEditable &&
    s.preventDefault(),
    a.freeMode &&
      a.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s)
}
function i2(e) {
  const t = gn(),
    n = this,
    s = n.touchEventsData,
    { params: r, touches: a, rtlTranslate: i, enabled: l } = n
  if (!l || (!r.simulateTouch && e.pointerType === "mouse")) return
  let o = e
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (s.touchId !== null || o.pointerId !== s.pointerId))
  )
    return
  let f
  if (o.type === "touchmove") {
    if (
      ((f = [...o.changedTouches].filter((O) => O.identifier === s.touchId)[0]),
      !f || f.identifier !== s.touchId)
    )
      return
  } else f = o
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && n.emit("touchMoveOpposite", o)
    return
  }
  const c = f.pageX,
    p = f.pageY
  if (o.preventedByNestedSwiper) {
    ;(a.startX = c), (a.startY = p)
    return
  }
  if (!n.allowTouchMove) {
    o.target.matches(s.focusableElements) || (n.allowClick = !1),
      s.isTouched &&
        (Object.assign(a, { startX: c, startY: p, currentX: c, currentY: p }),
        (s.touchStartTime = Fr()))
    return
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (n.isVertical()) {
      if (
        (p < a.startY && n.translate <= n.maxTranslate()) ||
        (p > a.startY && n.translate >= n.minTranslate())
      ) {
        ;(s.isTouched = !1), (s.isMoved = !1)
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
    o.target.matches(s.focusableElements)
  ) {
    ;(s.isMoved = !0), (n.allowClick = !1)
    return
  }
  s.allowTouchCallbacks && n.emit("touchMove", o),
    (a.previousX = a.currentX),
    (a.previousY = a.currentY),
    (a.currentX = c),
    (a.currentY = p)
  const v = a.currentX - a.startX,
    b = a.currentY - a.startY
  if (n.params.threshold && Math.sqrt(v ** 2 + b ** 2) < n.params.threshold)
    return
  if (typeof s.isScrolling > "u") {
    let O
    ;(n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (s.isScrolling = !1)
      : v * v + b * b >= 25 &&
        ((O = (Math.atan2(Math.abs(b), Math.abs(v)) * 180) / Math.PI),
        (s.isScrolling = n.isHorizontal()
          ? O > r.touchAngle
          : 90 - O > r.touchAngle))
  }
  if (
    (s.isScrolling && n.emit("touchMoveOpposite", o),
    typeof s.startMoving > "u" &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (s.startMoving = !0),
    s.isScrolling)
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;(n.allowClick = !1),
    !r.cssMode && o.cancelable && o.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && o.stopPropagation()
  let $ = n.isHorizontal() ? v : b,
    m = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY
  r.oneWayMovement &&
    (($ = Math.abs($) * (i ? 1 : -1)), (m = Math.abs(m) * (i ? 1 : -1))),
    (a.diff = $),
    ($ *= r.touchRatio),
    i && (($ = -$), (m = -m))
  const _ = n.touchesDirection
  ;(n.swipeDirection = $ > 0 ? "prev" : "next"),
    (n.touchesDirection = m > 0 ? "prev" : "next")
  const T = n.params.loop && !r.cssMode,
    x =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev)
  if (!s.isMoved) {
    if (
      (T && x && n.loopFix({ direction: n.swipeDirection }),
      (s.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const O = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      })
      n.wrapperEl.dispatchEvent(O)
    }
    ;(s.allowMomentumBounce = !1),
      r.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o)
  }
  let w
  if (
    (new Date().getTime(),
    s.isMoved &&
      s.allowThresholdMove &&
      _ !== n.touchesDirection &&
      T &&
      x &&
      Math.abs($) >= 1)
  ) {
    Object.assign(a, {
      startX: c,
      startY: p,
      currentX: c,
      currentY: p,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate)
    return
  }
  n.emit("sliderMove", o),
    (s.isMoved = !0),
    (s.currentTranslate = $ + s.startTranslate)
  let I = !0,
    z = r.resistanceRatio
  if (
    (r.touchReleaseOnEdges && (z = 0),
    $ > 0
      ? (T &&
          x &&
          !w &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (r.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > n.minTranslate() &&
          ((I = !1),
          r.resistance &&
            (s.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + s.startTranslate + $) ** z)))
      : $ < 0 &&
        (T &&
          x &&
          !w &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (r.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (r.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        s.currentTranslate < n.maxTranslate() &&
          ((I = !1),
          r.resistance &&
            (s.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - s.startTranslate - $) ** z))),
    I && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs($) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ;(s.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (s.currentTranslate = s.startTranslate),
          (a.diff = n.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        return
      }
    } else {
      s.currentTranslate = s.startTranslate
      return
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
      r.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(s.currentTranslate),
    n.setTranslate(s.currentTranslate))
}
function l2(e) {
  const t = this,
    n = t.touchEventsData
  let s = e
  s.originalEvent && (s = s.originalEvent)
  let r
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((r = [...s.changedTouches].filter((z) => z.identifier === n.touchId)[0]),
      !r || r.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || s.pointerId !== n.pointerId) return
    r = s
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
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
  if (!c || (!i.simulateTouch && s.pointerType === "mouse")) return
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", s),
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
  const p = Fr(),
    v = p - n.touchStartTime
  if (t.allowClick) {
    const z = s.path || (s.composedPath && s.composedPath())
    t.updateClickedSlide((z && z[0]) || s.target, z),
      t.emit("tap click", s),
      v < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", s)
  }
  if (
    ((n.lastClickTime = Fr()),
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
  const $ = b >= -t.maxTranslate() && !t.params.loop
  let m = 0,
    _ = t.slidesSizesGrid[0]
  for (
    let z = 0;
    z < f.length;
    z += z < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const O = z < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
    typeof f[z + O] < "u"
      ? ($ || (b >= f[z] && b < f[z + O])) && ((m = z), (_ = f[z + O] - f[z]))
      : ($ || b >= f[z]) && ((m = z), (_ = f[f.length - 1] - f[f.length - 2]))
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
  const w = (b - f[m]) / _,
    I = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
  if (v > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === "next" &&
      (w >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? T : m + I)
        : t.slideTo(m)),
      t.swipeDirection === "prev" &&
        (w > 1 - i.longSwipesRatio
          ? t.slideTo(m + I)
          : x !== null && w < 0 && Math.abs(w) > i.longSwipesRatio
            ? t.slideTo(x)
            : t.slideTo(m))
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(m + I)
        : t.slideTo(m)
      : (t.swipeDirection === "next" && t.slideTo(T !== null ? T : m + I),
        t.swipeDirection === "prev" && t.slideTo(x !== null ? x : m))
  }
}
function ku() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: a } = e,
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
    (e.allowSlidePrev = r),
    (e.allowSlideNext = s),
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
    { wrapperEl: t, rtlTranslate: n, enabled: s } = e
  if (!s) return
  ;(e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses()
  let r
  const a = e.maxTranslate() - e.minTranslate()
  a === 0 ? (r = 0) : (r = (e.translate - e.minTranslate()) / a),
    r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function c2(e) {
  const t = this
  Mr(t, e.target),
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
const ad = (e, t) => {
  const n = gn(),
    { params: s, el: r, wrapperEl: a, device: i } = e,
    l = !!s.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    f = t
  n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    r[o]("touchstart", e.onTouchStart, { passive: !1 }),
    r[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      r[o]("click", e.onClick, !0),
    s.cssMode && a[o]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[f](
          i.ios || i.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          ku,
          !0,
        )
      : e[f]("observerUpdate", ku, !0),
    r[o]("load", e.onLoad, { capture: !0 })
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
    ad(e, "on")
}
function p2() {
  ad(this, "off")
}
var h2 = { attachEvents: f2, detachEvents: p2 }
const $u = (e, t) => e.grid && t.grid && t.grid.rows > 1
function g2() {
  const e = this,
    { realIndex: t, initialized: n, params: s, el: r } = e,
    a = s.breakpoints
  if (!a || (a && Object.keys(a).length === 0)) return
  const i = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
  if (!i || e.currentBreakpoint === i) return
  const o = (i in a ? a[i] : void 0) || e.originalParams,
    f = $u(e, s),
    c = $u(e, o),
    p = s.enabled
  f && !c
    ? (r.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !f &&
      c &&
      (r.classList.add(`${s.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && s.grid.fill === "column")) &&
        r.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((T) => {
      if (typeof o[T] > "u") return
      const x = s[T] && s[T].enabled,
        w = o[T] && o[T].enabled
      x && !w && e[T].disable(), !x && w && e[T].enable()
    })
  const v = o.direction && o.direction !== s.direction,
    b = s.loop && (o.slidesPerView !== s.slidesPerView || v),
    $ = s.loop
  v && n && e.changeDirection(), At(e.params, o)
  const m = e.params.enabled,
    _ = e.params.loop
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
        : !$ && _
          ? (e.loopCreate(t), e.updateSlides())
          : $ && !_ && e.loopDestroy()),
    e.emit("breakpoint", o)
}
function v2(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return
  let s = !1
  const r = jt(),
    a = t === "window" ? r.innerHeight : n.clientHeight,
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
      ? r.matchMedia(`(min-width: ${f}px)`).matches && (s = o)
      : f <= n.clientWidth && (s = o)
  }
  return s || "max"
}
var m2 = { setBreakpoint: g2, getBreakpoint: v2 }
function b2(e, t) {
  const n = []
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((r) => {
            s[r] && n.push(t + r)
          })
        : typeof s == "string" && n.push(t + s)
    }),
    n
  )
}
function y2() {
  const e = this,
    { classNames: t, params: n, rtl: s, el: r, device: a } = e,
    i = b2(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: s },
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
  t.push(...i), r.classList.add(...t), e.emitContainerClasses()
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
    { slidesOffsetBefore: s } = n
  if (s) {
    const r = e.slides.length - 1,
      a = e.slidesGrid[r] + e.slidesSizesGrid[r] + s * 2
    e.isLocked = e.size > a
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var _2 = { checkOverflow: S2 },
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
function E2(e, t) {
  return function (s) {
    s === void 0 && (s = {})
    const r = Object.keys(s)[0],
      a = s[r]
    if (typeof a != "object" || a === null) {
      At(t, s)
      return
    }
    if (
      (e[r] === !0 && (e[r] = { enabled: !0 }),
      r === "navigation" &&
        e[r] &&
        e[r].enabled &&
        !e[r].prevEl &&
        !e[r].nextEl &&
        (e[r].auto = !0),
      ["pagination", "scrollbar"].indexOf(r) >= 0 &&
        e[r] &&
        e[r].enabled &&
        !e[r].el &&
        (e[r].auto = !0),
      !(r in e && "enabled" in a))
    ) {
      At(t, s)
      return
    }
    typeof e[r] == "object" && !("enabled" in e[r]) && (e[r].enabled = !0),
      e[r] || (e[r] = { enabled: !1 }),
      At(t, s)
  }
}
const Qa = {
    eventsEmitter: xb,
    update: Ob,
    translate: Nb,
    transition: Hb,
    slide: Xb,
    loop: e2,
    grabCursor: s2,
    events: h2,
    breakpoints: m2,
    checkOverflow: _2,
    classes: x2,
  },
  ei = {}
let Zi = class dn {
  constructor() {
    let t, n
    for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
      r[a] = arguments[a]
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? (n = r[0])
      : ([t, n] = r),
      n || (n = {}),
      (n = At({}, n)),
      t && !n.el && (n.el = t)
    const i = gn()
    if (
      n.el &&
      typeof n.el == "string" &&
      i.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        i.querySelectorAll(n.el).forEach((p) => {
          const v = At({}, n, { el: p })
          c.push(new dn(v))
        }),
        c
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = sd()),
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
        extendParams: E2(n, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      })
    })
    const f = At({}, Ei, o)
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
    const { slidesEl: n, params: s } = this,
      r = rn(n, `.${s.slideClass}, swiper-slide`),
      a = Gr(r[0])
    return Gr(t) - a
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
      { slidesEl: n, params: s } = t
    t.slides = rn(n, `.${s.slideClass}, swiper-slide`)
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
    const s = this
    t = Math.min(Math.max(t, 0), 1)
    const r = s.minTranslate(),
      i = (s.maxTranslate() - r) * t + r
    s.translateTo(i, typeof n > "u" ? 0 : n),
      s.updateActiveIndex(),
      s.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0,
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
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(n.params.slideClass) === 0,
          )
          .join(" ")
  }
  emitSlidesClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = []
    t.slides.forEach((s) => {
      const r = t.getSlideClasses(s)
      n.push({ slideEl: s, classNames: r }), t.emit("_slideClass", s, r)
    }),
      t.emit("_slideClasses", n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1)
    const s = this,
      {
        params: r,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: l,
        size: o,
        activeIndex: f,
      } = s
    let c = 1
    if (typeof r.slidesPerView == "number") return r.slidesPerView
    if (r.centeredSlides) {
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
    const { snapGrid: n, params: s } = t
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
        i.complete && Mr(t, i)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function r() {
      const i = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(i, t.maxTranslate()), t.minTranslate())
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let a
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      r(), s.autoHeight && t.updateAutoHeight()
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides
        a = t.slideTo(i.length - 1, 0, !1, !0)
      } else a = t.slideTo(t.activeIndex, 0, !1, !0)
      a || r()
    }
    s.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const s = this,
      r = s.params.direction
    return (
      t || (t = r === "horizontal" ? "vertical" : "horizontal"),
      t === r ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((a) => {
          t === "vertical" ? (a.style.width = "") : (a.style.height = "")
        }),
        s.emit("changeDirection"),
        n && s.update()),
      s
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
    let s = t || n.params.el
    if ((typeof s == "string" && (s = document.querySelector(s)), !s)) return !1
    ;(s.swiper = n),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0)
    const r = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`
    let i =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(r())
        : rn(s, r())[0]
    return (
      !i &&
        n.params.createElements &&
        ((i = Hr("div", n.params.wrapperClass)),
        s.append(i),
        rn(s, `.${n.params.slideClass}`).forEach((l) => {
          i.append(l)
        })),
      Object.assign(n, {
        el: s,
        wrapperEl: i,
        slidesEl:
          n.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
        hostEl: n.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || zn(s, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || zn(s, "direction") === "rtl"),
        wrongRTL: zn(i, "display") === "-webkit-box",
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
    const r = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((a) => {
        a.complete
          ? Mr(n, a)
          : a.addEventListener("load", (i) => {
              Mr(n, i.target)
            })
      }),
      _i(n),
      (n.initialized = !0),
      _i(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const s = this,
      { params: r, el: a, wrapperEl: i, slides: l } = s
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        n &&
          (s.removeClasses(),
          a.removeAttribute("style"),
          i.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((o) => {
              o.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass,
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index")
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((o) => {
          s.off(o)
        }),
        t !== !1 && ((s.el.swiper = null), ob(s)),
        (s.destroyed = !0)),
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
    return Ei
  }
  static installModule(t) {
    dn.prototype.__modules__ || (dn.prototype.__modules__ = [])
    const n = dn.prototype.__modules__
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => dn.installModule(n)), dn)
      : (dn.installModule(t), dn)
  }
}
Object.keys(Qa).forEach((e) => {
  Object.keys(Qa[e]).forEach((t) => {
    Zi.prototype[t] = Qa[e][t]
  })
})
Zi.use([yb, wb])
const id = [
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
function ws(e, t) {
  const n = ["__proto__", "constructor", "prototype"]
  Object.keys(t)
    .filter((s) => n.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Qn(t[s]) && Qn(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : ws(e[s], t[s])
          : (e[s] = t[s])
    })
}
function ld(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  )
}
function od(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}
function ud(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}
function cd(e) {
  e === void 0 && (e = "")
  const t = e
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    n = []
  return (
    t.forEach((s) => {
      n.indexOf(s) < 0 && n.push(s)
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
    passedParams: s,
    changedParams: r,
    nextEl: a,
    prevEl: i,
    scrollbarEl: l,
    paginationEl: o,
  } = e
  const f = r.filter(
      (G) => G !== "children" && G !== "direction" && G !== "wrapperClass",
    ),
    {
      params: c,
      pagination: p,
      navigation: v,
      scrollbar: b,
      virtual: $,
      thumbs: m,
    } = t
  let _, T, x, w, I, z, O, re
  r.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (_ = !0),
    r.includes("controller") &&
      s.controller &&
      s.controller.control &&
      c.controller &&
      !c.controller.control &&
      (T = !0),
    r.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || o) &&
      (c.pagination || c.pagination === !1) &&
      p &&
      !p.el &&
      (x = !0),
    r.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      b &&
      !b.el &&
      (w = !0),
    r.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || i) &&
      (s.navigation.nextEl || a) &&
      (c.navigation || c.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (I = !0)
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
  r.includes("loop") &&
    t.isElement &&
    (c.loop && !s.loop ? (z = !0) : !c.loop && s.loop ? (O = !0) : (re = !0)),
    f.forEach((G) => {
      if (Qn(c[G]) && Qn(s[G]))
        Object.assign(c[G], s[G]),
          (G === "navigation" || G === "pagination" || G === "scrollbar") &&
            "enabled" in s[G] &&
            !s[G].enabled &&
            q(G)
      else {
        const D = s[G]
        ;(D === !0 || D === !1) &&
        (G === "navigation" || G === "pagination" || G === "scrollbar")
          ? D === !1 && q(G)
          : (c[G] = s[G])
      }
    }),
    f.includes("controller") &&
      !T &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    r.includes("children") && n && $ && c.virtual.enabled
      ? (($.slides = n), $.update(!0))
      : r.includes("virtual") &&
        $ &&
        c.virtual.enabled &&
        (n && ($.slides = n), $.update(!0)),
    r.includes("children") && n && c.loop && (re = !0),
    _ && m.init() && m.update(!0),
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
    I &&
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
    r.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    r.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    r.includes("direction") && t.changeDirection(s.direction, !1),
    (z || re) && t.loopDestroy(),
    (O || re) && t.loopCreate(),
    t.update()
}
function Pu(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    s = {},
    r = {}
  ws(n, Ei), (n._emitClasses = !0), (n.init = !1)
  const a = {},
    i = id.map((o) => o.replace(/_/, "")),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((o) => {
      typeof e[o] > "u" ||
        (i.indexOf(o) >= 0
          ? Qn(e[o])
            ? ((n[o] = {}), (r[o] = {}), ws(n[o], e[o]), ws(r[o], e[o]))
            : ((n[o] = e[o]), (r[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? t
              ? (s[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
              : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (a[o] = e[o]))
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o]
    }),
    { params: n, passedParams: r, rest: a, events: s }
  )
}
function k2(e, t) {
  let {
    el: n,
    nextEl: s,
    prevEl: r,
    paginationEl: a,
    scrollbarEl: i,
    swiper: l,
  } = e
  ld(t) &&
    s &&
    r &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = r),
    (l.originalParams.navigation.prevEl = r)),
    od(t) &&
      a &&
      ((l.params.pagination.el = a), (l.originalParams.pagination.el = a)),
    ud(t) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(n)
}
function $2(e, t, n, s, r) {
  const a = []
  if (!t) return a
  const i = (o) => {
    a.indexOf(o) < 0 && a.push(o)
  }
  if (n && s) {
    const o = s.map(r),
      f = n.map(r)
    o.join("") !== f.join("") && i("children"),
      s.length !== n.length && i("children")
  }
  return (
    id
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
function ti(e, t, n) {
  e === void 0 && (e = {})
  const s = [],
    r = {
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
                ? s.push(o)
                : r[l] && r[l].push(o)
        })
    }
  return (
    Object.keys(e).forEach((i) => {
      if (typeof e[i] != "function") return
      const l = e[i]()
      a(l, i)
    }),
    (n.value = t.value),
    (t.value = s),
    { slides: s, slots: r }
  )
}
function I2(e, t, n) {
  if (!n) return null
  const s = (c) => {
      let p = c
      return c < 0 ? (p = t.length + c) : p >= t.length && (p = p - t.length), p
    },
    r = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: a, to: i } = n,
    l = e.value.params.loop ? -t.length : 0,
    o = e.value.params.loop ? t.length * 2 : t.length,
    f = []
  for (let c = l; c < o; c += 1) c >= a && c <= i && f.push(t[s(c)])
  return f.map(
    (c) => (
      c.props || (c.props = {}),
      c.props.style || (c.props.style = {}),
      (c.props.swiperRef = e),
      (c.props.style = r),
      Ye(c.type, { ...c.props }, c.children)
    ),
  )
}
const M2 = {
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
      let { slots: n, emit: s } = t
      const { tag: r, wrapperTag: a } = e,
        i = ee("swiper"),
        l = ee(null),
        o = ee(!1),
        f = ee(!1),
        c = ee(null),
        p = ee(null),
        v = ee(null),
        b = { value: [] },
        $ = { value: [] },
        m = ee(null),
        _ = ee(null),
        T = ee(null),
        x = ee(null),
        { params: w, passedParams: I } = Pu(e, !1)
      ti(n, b, $), (v.value = I), ($.value = b.value)
      const z = () => {
        ti(n, b, $), (o.value = !0)
      }
      ;(w.onAny = function (q) {
        for (
          var G = arguments.length, D = new Array(G > 1 ? G - 1 : 0), Q = 1;
          Q < G;
          Q++
        )
          D[Q - 1] = arguments[Q]
        s(q, ...D)
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
        ws(p.value.params.virtual, q), ws(p.value.originalParams.virtual, q)
      }
      Hi(() => {
        !f.value && p.value && (p.value.emitSlidesClasses(), (f.value = !0))
        const { passedParams: q } = Pu(e, !1),
          G = $2(q, v.value, b.value, $.value, (D) => D.props && D.props.key)
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
              prevEl: _.value,
              scrollbarEl: x.value,
              paginationEl: T.value,
            }),
          (o.value = !1)
      }),
        Gt("swiper", p),
        Nn(l, () => {
          Jr(() => {
            P2(p.value)
          })
        }),
        yt(() => {
          c.value &&
            (k2(
              {
                el: c.value,
                nextEl: m.value,
                prevEl: _.value,
                paginationEl: T.value,
                scrollbarEl: x.value,
                swiper: p.value,
              },
              w,
            ),
            s("swiper", p.value))
        }),
        Gi(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        })
      function re(q) {
        return w.virtual
          ? I2(p, q, l.value)
          : (q.forEach((G, D) => {
              G.props || (G.props = {}),
                (G.props.swiperRef = p),
                (G.props.swiperSlideIndex = D)
            }),
            q)
      }
      return () => {
        const { slides: q, slots: G } = ti(n, b, $)
        return Ye(r, { ref: c, class: cd(i.value) }, [
          G["container-start"],
          Ye(a, { class: C2(w.wrapperClass) }, [
            G["wrapper-start"],
            re(q),
            G["wrapper-end"],
          ]),
          ld(e) && [
            Ye("div", { ref: _, class: "swiper-button-prev" }),
            Ye("div", { ref: m, class: "swiper-button-next" }),
          ],
          ud(e) && Ye("div", { ref: x, class: "swiper-scrollbar" }),
          od(e) && Ye("div", { ref: T, class: "swiper-pagination" }),
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
        s = !1
      const { swiperRef: r } = e,
        a = ee(null),
        i = ee("swiper-slide"),
        l = ee(!1)
      function o(p, v, b) {
        v === a.value && (i.value = b)
      }
      yt(() => {
        !r || !r.value || (r.value.on("_slideClass", o), (s = !0))
      }),
        Di(() => {
          s || !r || !r.value || (r.value.on("_slideClass", o), (s = !0))
        }),
        Hi(() => {
          !a.value ||
            !r ||
            !r.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (a.value.swiperSlideIndex = e.swiperSlideIndex),
            r.value.destroyed &&
              i.value !== "swiper-slide" &&
              (i.value = "swiper-slide"))
        }),
        Gi(() => {
          !r || !r.value || r.value.off("_slideClass", o)
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
        Ye(
          e.tag,
          {
            class: cd(`${i.value}`),
            ref: a,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && r && r.value && r.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: c,
          },
          e.zoom
            ? Ye(
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
                    Ye("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                n.default && n.default(f.value),
                e.lazy &&
                  !l.value &&
                  Ye("div", { class: "swiper-lazy-preloader" }),
              ],
        )
    },
  }
function dd(e, t, n, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((r) => {
        if (!n[r] && n.auto === !0) {
          let a = rn(e.el, `.${s[r]}`)[0]
          a || ((a = Hr("div", s[r])), (a.className = s[r]), e.el.append(a)),
            (n[r] = a),
            (t[r] = a)
        }
      }),
    n
  )
}
function A2(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
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
  const a = (m) => (Array.isArray(m) ? m : [m]).filter((_) => !!_)
  function i(m) {
    let _
    return m &&
      typeof m == "string" &&
      t.isElement &&
      ((_ = t.el.querySelector(m)), _)
      ? _
      : (m &&
          (typeof m == "string" && (_ = [...document.querySelectorAll(m)]),
          t.params.uniqueNavElements &&
            typeof m == "string" &&
            _.length > 1 &&
            t.el.querySelectorAll(m).length === 1 &&
            (_ = t.el.querySelector(m))),
        m && !_ ? m : _)
  }
  function l(m, _) {
    const T = t.params.navigation
    ;(m = a(m)),
      m.forEach((x) => {
        x &&
          (x.classList[_ ? "add" : "remove"](...T.disabledClass.split(" ")),
          x.tagName === "BUTTON" && (x.disabled = _),
          t.params.watchOverflow &&
            t.enabled &&
            x.classList[t.isLocked ? "add" : "remove"](T.lockClass))
      })
  }
  function o() {
    const { nextEl: m, prevEl: _ } = t.navigation
    if (t.params.loop) {
      l(_, !1), l(m, !1)
      return
    }
    l(_, t.isBeginning && !t.params.rewind), l(m, t.isEnd && !t.params.rewind)
  }
  function f(m) {
    m.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), r("navigationPrev"))
  }
  function c(m) {
    m.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), r("navigationNext"))
  }
  function p() {
    const m = t.params.navigation
    if (
      ((t.params.navigation = dd(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(m.nextEl || m.prevEl))
    )
      return
    let _ = i(m.nextEl),
      T = i(m.prevEl)
    Object.assign(t.navigation, { nextEl: _, prevEl: T }),
      (_ = a(_)),
      (T = a(T))
    const x = (w, I) => {
      w && w.addEventListener("click", I === "next" ? c : f),
        !t.enabled && w && w.classList.add(...m.lockClass.split(" "))
    }
    _.forEach((w) => x(w, "next")), T.forEach((w) => x(w, "prev"))
  }
  function v() {
    let { nextEl: m, prevEl: _ } = t.navigation
    ;(m = a(m)), (_ = a(_))
    const T = (x, w) => {
      x.removeEventListener("click", w === "next" ? c : f),
        x.classList.remove(...t.params.navigation.disabledClass.split(" "))
    }
    m.forEach((x) => T(x, "next")), _.forEach((x) => T(x, "prev"))
  }
  s("init", () => {
    t.params.navigation.enabled === !1 ? $() : (p(), o())
  }),
    s("toEdge fromEdge lock unlock", () => {
      o()
    }),
    s("destroy", () => {
      v()
    }),
    s("enable disable", () => {
      let { nextEl: m, prevEl: _ } = t.navigation
      if (((m = a(m)), (_ = a(_)), t.enabled)) {
        o()
        return
      }
      ;[...m, ..._]
        .filter((T) => !!T)
        .forEach((T) => T.classList.add(t.params.navigation.lockClass))
    }),
    s("click", (m, _) => {
      let { nextEl: T, prevEl: x } = t.navigation
      ;(T = a(T)), (x = a(x))
      const w = _.target
      if (t.params.navigation.hideOnClick && !x.includes(w) && !T.includes(w)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === w || t.pagination.el.contains(w))
        )
          return
        let I
        T.length
          ? (I = T[0].classList.contains(t.params.navigation.hiddenClass))
          : x.length &&
            (I = x[0].classList.contains(t.params.navigation.hiddenClass)),
          r(I === !0 ? "navigationShow" : "navigationHide"),
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
    $ = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        v()
    }
  Object.assign(t.navigation, {
    enable: b,
    disable: $,
    update: o,
    init: p,
    destroy: v,
  })
}
function Ns(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  )
}
function L2(e) {
  let { swiper: t, extendParams: n, on: s, emit: r } = e
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
    const { bulletActiveClass: I } = t.params.pagination
    x &&
      ((x = x[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
      x &&
        (x.classList.add(`${I}-${w}`),
        (x = x[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
        x && x.classList.add(`${I}-${w}-${w}`)))
  }
  function p(x) {
    const w = x.target.closest(Ns(t.params.pagination.bulletClass))
    if (!w) return
    x.preventDefault()
    const I = Gr(w) * t.params.slidesPerGroup
    if (t.params.loop) {
      if (t.realIndex === I) return
      t.slideToLoop(I)
    } else t.slideTo(I)
  }
  function v() {
    const x = t.rtl,
      w = t.params.pagination
    if (f()) return
    let I = t.pagination.el
    I = o(I)
    let z, O
    const re =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      q = t.params.loop
        ? Math.ceil(re / t.params.slidesPerGroup)
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
          I.forEach((X) => {
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
        I.length > 1)
      )
        G.forEach((X) => {
          const Se = Gr(X)
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
    I.forEach((G, D) => {
      if (
        (w.type === "fraction" &&
          (G.querySelectorAll(Ns(w.currentClass)).forEach((Q) => {
            Q.textContent = w.formatFractionCurrent(z + 1)
          }),
          G.querySelectorAll(Ns(w.totalClass)).forEach((Q) => {
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
          G.querySelectorAll(Ns(w.progressbarFillClass)).forEach((Ce) => {
            ;(Ce.style.transform = `translate3d(0,0,0) scaleX(${X}) scaleY(${Se})`),
              (Ce.style.transitionDuration = `${t.params.speed}ms`)
          })
      }
      w.type === "custom" && w.renderCustom
        ? ((G.innerHTML = w.renderCustom(t, z + 1, q)),
          D === 0 && r("paginationRender", G))
        : (D === 0 && r("paginationRender", G), r("paginationUpdate", G)),
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
    let I = t.pagination.el
    I = o(I)
    let z = ""
    if (x.type === "bullets") {
      let O = t.params.loop
        ? Math.ceil(w / t.params.slidesPerGroup)
        : t.snapGrid.length
      t.params.freeMode && t.params.freeMode.enabled && O > w && (O = w)
      for (let re = 0; re < O; re += 1)
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
      I.forEach((O) => {
        x.type !== "custom" && (O.innerHTML = z || ""),
          x.type === "bullets" &&
            t.pagination.bullets.push(...O.querySelectorAll(Ns(x.bulletClass)))
      }),
      x.type !== "custom" && r("paginationRender", I[0])
  }
  function $() {
    t.params.pagination = dd(
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
            (w = w.filter((I) => nd(I, ".swiper")[0] === t.el)[0])),
        Array.isArray(w) && w.length === 1 && (w = w[0]),
        Object.assign(t.pagination, { el: w }),
        (w = o(w)),
        w.forEach((I) => {
          x.type === "bullets" &&
            x.clickable &&
            I.classList.add(...(x.clickableClass || "").split(" ")),
            I.classList.add(x.modifierClass + x.type),
            I.classList.add(
              t.isHorizontal() ? x.horizontalClass : x.verticalClass,
            ),
            x.type === "bullets" &&
              x.dynamicBullets &&
              (I.classList.add(`${x.modifierClass}${x.type}-dynamic`),
              (l = 0),
              x.dynamicMainBullets < 1 && (x.dynamicMainBullets = 1)),
            x.type === "progressbar" &&
              x.progressbarOpposite &&
              I.classList.add(x.progressbarOppositeClass),
            x.clickable && I.addEventListener("click", p),
            t.enabled || I.classList.add(x.lockClass)
        }))
  }
  function m() {
    const x = t.params.pagination
    if (f()) return
    let w = t.pagination.el
    w &&
      ((w = o(w)),
      w.forEach((I) => {
        I.classList.remove(x.hiddenClass),
          I.classList.remove(x.modifierClass + x.type),
          I.classList.remove(
            t.isHorizontal() ? x.horizontalClass : x.verticalClass,
          ),
          x.clickable &&
            (I.classList.remove(...(x.clickableClass || "").split(" ")),
            I.removeEventListener("click", p))
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((I) =>
          I.classList.remove(...x.bulletActiveClass.split(" ")),
        )
  }
  s("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return
    const x = t.params.pagination
    let { el: w } = t.pagination
    ;(w = o(w)),
      w.forEach((I) => {
        I.classList.remove(x.horizontalClass, x.verticalClass),
          I.classList.add(
            t.isHorizontal() ? x.horizontalClass : x.verticalClass,
          )
      })
  }),
    s("init", () => {
      t.params.pagination.enabled === !1 ? T() : ($(), b(), v())
    }),
    s("activeIndexChange", () => {
      typeof t.snapIndex > "u" && v()
    }),
    s("snapIndexChange", () => {
      v()
    }),
    s("snapGridLengthChange", () => {
      b(), v()
    }),
    s("destroy", () => {
      m()
    }),
    s("enable disable", () => {
      let { el: x } = t.pagination
      x &&
        ((x = o(x)),
        x.forEach((w) =>
          w.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ))
    }),
    s("lock unlock", () => {
      v()
    }),
    s("click", (x, w) => {
      const I = w.target,
        z = o(t.pagination.el)
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        z &&
        z.length > 0 &&
        !I.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && I === t.navigation.nextEl) ||
            (t.navigation.prevEl && I === t.navigation.prevEl))
        )
          return
        const O = z[0].classList.contains(t.params.pagination.hiddenClass)
        r(O === !0 ? "paginationShow" : "paginationHide"),
          z.forEach((re) =>
            re.classList.toggle(t.params.pagination.hiddenClass),
          )
      }
    })
  const _ = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass)
      let { el: x } = t.pagination
      x &&
        ((x = o(x)),
        x.forEach((w) =>
          w.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        $(),
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
    enable: _,
    disable: T,
    render: b,
    update: v,
    init: $,
    destroy: m,
  })
}
function z2(e) {
  let { swiper: t, extendParams: n, on: s, emit: r, params: a } = e
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
    $,
    m,
    _,
    T,
    x
  function w(V) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (V.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", w), !x && D()))
  }
  const I = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (v = !0) : v && ((f = c), (v = !1))
      const V = t.autoplay.paused ? c : p + f - new Date().getTime()
      ;(t.autoplay.timeLeft = V),
        r("autoplayTimeLeft", V, V / o),
        (l = requestAnimationFrame(() => {
          I()
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
      cancelAnimationFrame(l), I()
      let Ke = typeof V > "u" ? t.params.autoplay.delay : V
      ;(o = t.params.autoplay.delay), (f = t.params.autoplay.delay)
      const ke = z()
      !Number.isNaN(ke) &&
        ke > 0 &&
        typeof V > "u" &&
        ((Ke = ke), (o = ke), (f = ke)),
        (c = Ke)
      const tt = t.params.speed,
        nt = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(tt, !0, !0), r("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, tt, !0, !0), r("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(tt, !0, !0), r("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, tt, !0, !0), r("autoplay")),
            t.params.cssMode &&
              ((p = new Date().getTime()),
              requestAnimationFrame(() => {
                O()
              })))
        }
      return (
        Ke > 0
          ? (clearTimeout(i),
            (i = setTimeout(() => {
              nt()
            }, Ke)))
          : requestAnimationFrame(() => {
              nt()
            }),
        Ke
      )
    },
    re = () => {
      ;(p = new Date().getTime()),
        (t.autoplay.running = !0),
        O(),
        r("autoplayStart")
    },
    q = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(i),
        cancelAnimationFrame(l),
        r("autoplayStop")
    },
    G = (V, Ke) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(i), V || (T = !0)
      const ke = () => {
        r("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", w)
            : D()
      }
      if (((t.autoplay.paused = !0), Ke)) {
        _ && (c = t.params.autoplay.delay), (_ = !1), ke()
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
        r("autoplayResume"))
    },
    Q = () => {
      if (t.destroyed || !t.autoplay.running) return
      const V = gn()
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
      gn().addEventListener("visibilitychange", Q)
    },
    oe = () => {
      gn().removeEventListener("visibilitychange", Q)
    }
  s("init", () => {
    t.params.autoplay.enabled && (Se(), F(), re())
  }),
    s("destroy", () => {
      Ce(), oe(), t.autoplay.running && q()
    }),
    s("_freeModeStaticRelease", () => {
      ;($ || T) && D()
    }),
    s("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? q() : G(!0, !0)
    }),
    s("beforeTransitionStart", (V, Ke, ke) => {
      t.destroyed ||
        !t.autoplay.running ||
        (ke || !t.params.autoplay.disableOnInteraction ? G(!0, !0) : q())
    }),
    s("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          q()
          return
        }
        ;(b = !0),
          ($ = !1),
          (T = !1),
          (m = setTimeout(() => {
            ;(T = !0), ($ = !0), G(!0)
          }, 200))
      }
    }),
    s("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !b)) {
        if (
          (clearTimeout(m),
          clearTimeout(i),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;($ = !1), (b = !1)
          return
        }
        $ && t.params.cssMode && D(), ($ = !1), (b = !1)
      }
    }),
    s("slideChange", () => {
      t.destroyed || !t.autoplay.running || (_ = !0)
    }),
    Object.assign(t.autoplay, { start: re, stop: q, pause: G, resume: D })
}
const B2 = { class: "prose text-center" },
  j2 = g("br", null, null, -1),
  N2 = { href: "/pricing" },
  R2 = { id: "cta" },
  rr = {
    __name: "ctaForm",
    props: { brightness: Number },
    setup(e) {
      const t = (r) => {
          if (r >= 4) return "text-slate-800"
          if (r == 3) return "text-slate-200"
          if (r == 2) return "text-slate-300"
          if (r == 1) return "text-slate-300"
        },
        n = (r) => {
          if (r >= 4) return "text-emerald-500"
          if (r == 3) return "text-slate-800"
          if (r == 2) return "text-orange-500"
          if (r == 1) return "text-orange-400"
        },
        s = async (r) => {
          r.preventDefault()
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
                for (let _ = 0; _ < b.length; _++) b[_].style.display = "none"
                let $ = p.getElementsByTagName("textarea")[0]
                $.style.display = "none"
                let m = document.getElementById("submitButton")
                m.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (r, a) => (
        te(),
        xe(
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
            g("div", B2, [
              g(
                "h4",
                { class: M(["text-2xl", t(e.brightness)]) },
                [
                  $e(" Piqued your interest?"),
                  j2,
                  $e(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              g("a", N2, [
                g(
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
              g(
                "h4",
                { class: M(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              g("form", R2, [
                g("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: M(["rounded p-2 w-full", n]),
                }),
                g("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                g("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                g(
                  "button",
                  {
                    id: "submitButton",
                    type: "submit",
                    "aria-label": "Submit a contact form",
                    onClick: s,
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
  F2 = {
    class:
      "flex w-full gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap justify-between",
  },
  D2 = ["href"],
  H2 = { class: "hidden md:hidden lg:block" },
  G2 = ["href"],
  V2 = ["src", "alt"],
  W2 = ["src", "alt"],
  q2 = kc(
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
      const t = ee([]),
        n = [z2, L2, A2],
        s = e,
        r = ee(""),
        a = ee(""),
        i = ee([]),
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
            $ = document.getElementById("lightbox-caption")
          b.forEach((m) => {
            m.addEventListener("click", () => {
              ;(p.src = m.src),
                ($.textContent = m.alt),
                c.classList.remove("hidden")
            })
          }),
            v.addEventListener("click", () => {
              c.classList.add("hidden")
            })
        }
      yt(() => {
        ;(t.value = s.captions),
          (r.value = s.link),
          (a.value = s.title),
          (i.value = s.images),
          Jr(() => {
            o()
          })
      })
      const f = (c) => {
        let p = r.value == "" ? "text-center w-full " : ""
        return (p = p + l(c)), p
      }
      return (c, p) => (
        te(),
        xe(
          "div",
          {
            class: M([
              "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4",
              r.value == "",
            ]),
          },
          [
            g("div", F2, [
              g(
                "h2",
                {
                  class: M([
                    "text-5xl text-center text-semibold",
                    f(s.brightness),
                  ]),
                },
                $t(a.value),
                3,
              ),
              r.value != ""
                ? (te(),
                  xe(
                    "a",
                    { key: 0, href: r.value },
                    [
                      g(
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
                        " Visit Site ",
                        2,
                      ),
                    ],
                    8,
                    D2,
                  ))
                : rt("", !0),
            ]),
            g("div", H2, [
              he(
                we(M2),
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
                  default: Ue(() => [
                    (te(!0),
                    xe(
                      Je,
                      null,
                      hn(
                        i.value,
                        (v, b) => (
                          te(),
                          Ne(
                            we(O2),
                            { class: "image-container", key: b },
                            {
                              default: Ue(() => [
                                r.value != ""
                                  ? (te(),
                                    xe(
                                      "a",
                                      { key: 0, href: r.value },
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
                                  : rt("", !0),
                                r.value == ""
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
                                  : rt("", !0),
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
                  hn(
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
              { class: M([f(s.brightness), "prose pt-6"]) },
              [Vt(c.$slots, "default", {}, void 0, !0)],
              2,
            ),
            g(
              "hr",
              {
                class: M([
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
              he(rr, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ],
          2,
        )
      )
    },
  },
  Zt = bn(J2, [["__scopeId", "data-v-4d27a375"]]),
  Qi =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  el =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  tl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  nl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  sl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  rl =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  al =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  il =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  ll =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  ol =
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
  sy =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898390608.webp",
  ry =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706898397404.webp",
  ay =
    "https://images.josephhansen.dev/uploads/file2024-02-0212-1706899554221.webp",
  iy = { class: "px-3 text-center" },
  ly = g(
    "p",
    null,
    " Whether you need a design overhaul, a modernization, a rebranding, or a new website design completely, I'm your guy! I have extensive graphic design and UI/UX experience. I minored in Visual Communication, and I love making websites beautiful. ",
    -1,
  ),
  oy = g(
    "p",
    null,
    " Don't just take my word for it though, here's what a UX professional has to say: ",
    -1,
  ),
  uy = g(
    "p",
    null,
    " Joseph is a good friend of mine from school. We worked closely on many projects with both pursuing degrees in design. He can design anything. This is not an exaggeration. I personally struggled to learn new design tools and manipulate pixels the way I wanted them to be. Joseph just did it. He is incredible. ...I would recommend him to anyone with utmost confidence that he will surpass all expectations. ",
    -1,
  ),
  cy = { class: "text-right italic text-sm mb-0 pb-0" },
  dy = g(
    "p",
    { class: "text-right italic text-sm mt-0 pt-0" },
    " Senior Product Designer at nCino ",
    -1,
  ),
  fy = "",
  py = "Web Design",
  hy = {
    __name: "PanelWebDesign",
    props: { brightness: Number },
    setup(e) {
      const t = (r) => {
          if (r >= 4) return "text-slate-800"
          if (r == 3) return "text-slate-200"
          if (r == 2) return "text-slate-300"
          if (r == 1) return "text-slate-300"
        },
        n = ee([Qi, rl, ll, nl, tl, il, al, sl, el, ol]),
        s = ee([
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
      return (r, a) => (
        te(),
        Ne(
          Zt,
          {
            images: n.value,
            captions: s.value,
            link: fy,
            title: py,
            brightness: e.brightness,
          },
          {
            default: Ue(() => [
              Vt(r.$slots, "default", {}, () => [
                g(
                  "h2",
                  { class: M(["text-3xl mb-1", t(e.brightness)]) },
                  " I've designed dozens of websites. I'll design yours too! ",
                  2,
                ),
                g("div", iy, [
                  ly,
                  oy,
                  g(
                    "div",
                    {
                      class: M([
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
                      uy,
                      g("p", cy, [
                        g("b", null, [
                          g(
                            "a",
                            {
                              class: M([t(e.brightness), "font-bold"]),
                              href: "https://www.linkedin.com/in/nathanwesjones/",
                            },
                            "Nathan Jones",
                            2,
                          ),
                        ]),
                      ]),
                      dy,
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
  ul = (e) => (er("data-v-c1141d27"), (e = e()), tr(), e),
  gy = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  vy = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  my = ul(() =>
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
  by = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  yy = { href: "https://galaxyit.com/savings-calculator/" },
  wy = ul(() =>
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
  xy = {
    class:
      "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12",
  },
  Sy = { href: "https://www.buildonyourlandllc.com/" },
  _y = ul(() =>
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
  Cy = { href: "https://bazaar.blendernation.com" },
  Ty = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      const t = (n) => {
        if (n >= 4) return "text-slate-800"
        if (n == 3) return "text-slate-200"
        if (n == 2) return "text-slate-300"
        if (n == 1) return "text-slate-300"
      }
      return (n, s) => (
        te(),
        xe("div", gy, [
          g("div", vy, [
            g(
              "h2",
              { class: M(["text-3xl mb-1", t(e.brightness)]) },
              " Need a custom pricing calculator? ",
              2,
            ),
            my,
            g("div", by, [
              g(
                "h3",
                { class: M(["text-xl m-0", t(e.brightness)]) },
                " I can do that! Check out this one I made for GalaxyIT ",
                2,
              ),
              g("a", yy, [
                g(
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
                  " GalaxyIT Pricing Calculator ",
                  2,
                ),
              ]),
            ]),
            g(
              "h2",
              { class: M(["text-3xl mb-1", t(e.brightness)]) },
              " What about dynamic hours? ",
              2,
            ),
            wy,
            g("div", xy, [
              g(
                "h3",
                { class: M(["text-xl m-0", t(e.brightness)]) },
                " Been there, done that ",
                2,
              ),
              g("a", Sy, [
                g(
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
                  " Build on Your Land site ",
                  2,
                ),
              ]),
            ]),
            g(
              "h2",
              { class: M(["text-3xl mb-1", t(e.brightness)]) },
              " Maybe you need a complex WordPress theme built from scratch? ",
              2,
            ),
            _y,
            g("div", Ey, [
              g(
                "h3",
                { class: M(["text-xl m-0", t(e.brightness)]) },
                " No sweat - let's make it happen! ",
                2,
              ),
              g("a", Cy, [
                g(
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
                  " Yep, done this too (Bazaar) ",
                  2,
                ),
              ]),
            ]),
            g(
              "h2",
              { class: M(["text-5xl mb-1", t(e.brightness)]) },
              " No matter how complex your problem may be, I can fix it. ",
              2,
            ),
            g(
              "p",
              { class: M([t(e.brightness), "mt-2"]) },
              " I've been working on websites for over a decade, and I can do custom development for you in pretty much any language you can throw my way. Let me worry about automations, algorithims, integrations, and all that other stuff distracting you from your business. I'll take your problems off your plate and develop a solution. ",
              2,
            ),
          ]),
          g("hr", { class: M([t(e.brightness), "my-8"]) }, null, 2),
          he(rr, { brightness: e.brightness }, null, 8, ["brightness"]),
        ])
      )
    },
  },
  ky = bn(Ty, [["__scopeId", "data-v-c1141d27"]])
var $y =
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
  ;(function (n, s) {
    e.exports = s()
  })($y, function () {
    for (
      var n = function (u, d, h) {
          return (
            d === void 0 && (d = 0),
            h === void 0 && (h = 1),
            u < d ? d : u > h ? h : u
          )
        },
        s = n,
        r = function (u) {
          ;(u._clipped = !1), (u._unclipped = u.slice(0))
          for (var d = 0; d <= 3; d++)
            d < 3
              ? ((u[d] < 0 || u[d] > 255) && (u._clipped = !0),
                (u[d] = s(u[d], 0, 255)))
              : d === 3 && (u[d] = s(u[d], 0, 1))
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
      $ = Math.PI,
      m = {
        clip_rgb: r,
        limit: n,
        type: f,
        unpack: p,
        last: b,
        PI: $,
        TWOPI: $ * 2,
        PITHIRD: $ / 3,
        DEG2RAD: $ / 180,
        RAD2DEG: 180 / $,
      },
      _ = { format: {}, autodetect: [] },
      T = m.last,
      x = m.clip_rgb,
      w = m.type,
      I = _,
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
          P = !1
        if (!k) {
          ;(P = !0),
            I.sorted ||
              ((I.autodetect = I.autodetect.sort(function (W, ie) {
                return ie.p - W.p
              })),
              (I.sorted = !0))
          for (var E = 0, A = I.autodetect; E < A.length; E += 1) {
            var L = A[E]
            if (((k = L.test.apply(L, d)), k)) break
          }
        }
        if (I.format[k]) {
          var j = I.format[k].apply(null, P ? d : d.slice(0, -1))
          y._rgb = x(j)
        } else throw new Error("unknown format: " + d)
        y._rgb.length === 3 && y._rgb.push(1)
      }
    z.prototype.toString = function () {
      return w(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var O = z,
      re = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(re.Color, [null].concat(u)))()
      }
    ;(re.Color = O), (re.version = "2.4.2")
    var q = re,
      G = m.unpack,
      D = Math.max,
      Q = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = G(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2]
        ;(y = y / 255), (k = k / 255), (P = P / 255)
        var E = 1 - D(y, D(k, P)),
          A = E < 1 ? 1 / (1 - E) : 0,
          L = (1 - y - E) * A,
          j = (1 - k - E) * A,
          W = (1 - P - E) * A
        return [L, j, W, E]
      },
      ge = Q,
      X = m.unpack,
      Se = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = X(u, "cmyk")
        var h = u[0],
          y = u[1],
          k = u[2],
          P = u[3],
          E = u.length > 4 ? u[4] : 1
        return P === 1
          ? [0, 0, 0, E]
          : [
              h >= 1 ? 0 : 255 * (1 - h) * (1 - P),
              y >= 1 ? 0 : 255 * (1 - y) * (1 - P),
              k >= 1 ? 0 : 255 * (1 - k) * (1 - P),
              E,
            ]
      },
      Ce = Se,
      F = q,
      oe = O,
      V = _,
      Ke = m.unpack,
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
          if (((u = Ke(u, "cmyk")), ke(u) === "array" && u.length === 4))
            return "cmyk"
        },
      })
    var nt = m.unpack,
      Qt = m.last,
      Dt = function (u) {
        return Math.round(u * 100) / 100
      },
      Ct = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = nt(u, "hsla"),
          y = Qt(u) || "lsa"
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
      N = m.unpack,
      le = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = N(u, "rgba")
        var h = u[0],
          y = u[1],
          k = u[2]
        ;(h /= 255), (y /= 255), (k /= 255)
        var P = Math.min(h, y, k),
          E = Math.max(h, y, k),
          A = (E + P) / 2,
          L,
          j
        return (
          E === P
            ? ((L = 0), (j = Number.NaN))
            : (L = A < 0.5 ? (E - P) / (E + P) : (E - P) / (2 - E - P)),
          h == E
            ? (j = (y - k) / (E - P))
            : y == E
              ? (j = 2 + (k - h) / (E - P))
              : k == E && (j = 4 + (h - y) / (E - P)),
          (j *= 60),
          j < 0 && (j += 360),
          u.length > 3 && u[3] !== void 0 ? [j, L, A, u[3]] : [j, L, A]
        )
      },
      se = le,
      pe = m.unpack,
      Re = m.last,
      Ze = it,
      S = se,
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
      R = m.unpack,
      Z = Math.round,
      ae = function () {
        for (var u, d = [], h = arguments.length; h--; ) d[h] = arguments[h]
        d = R(d, "hsl")
        var y = d[0],
          k = d[1],
          P = d[2],
          E,
          A,
          L
        if (k === 0) E = A = L = P * 255
        else {
          var j = [0, 0, 0],
            W = [0, 0, 0],
            ie = P < 0.5 ? P * (1 + k) : P + k - P * k,
            Y = 2 * P - ie,
            de = y / 360
          ;(j[0] = de + 1 / 3), (j[1] = de), (j[2] = de - 1 / 3)
          for (var ce = 0; ce < 3; ce++)
            j[ce] < 0 && (j[ce] += 1),
              j[ce] > 1 && (j[ce] -= 1),
              6 * j[ce] < 1
                ? (W[ce] = Y + (ie - Y) * 6 * j[ce])
                : 2 * j[ce] < 1
                  ? (W[ce] = ie)
                  : 3 * j[ce] < 2
                    ? (W[ce] = Y + (ie - Y) * (2 / 3 - j[ce]) * 6)
                    : (W[ce] = Y)
          ;(u = [Z(W[0] * 255), Z(W[1] * 255), Z(W[2] * 255)]),
            (E = u[0]),
            (A = u[1]),
            (L = u[2])
        }
        return d.length > 3 ? [E, A, L, d[3]] : [E, A, L, 1]
      },
      J = ae,
      ne = J,
      U = _,
      ue = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      be =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      ve =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      _e =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Pe =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Fe =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Xe = Math.round,
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
          for (var k = d.slice(1, 5), P = 0; P < 4; P++) k[P] = +k[P]
          return k
        }
        if ((d = u.match(ve))) {
          for (var E = d.slice(1, 4), A = 0; A < 3; A++) E[A] = Xe(E[A] * 2.55)
          return (E[3] = 1), E
        }
        if ((d = u.match(_e))) {
          for (var L = d.slice(1, 5), j = 0; j < 3; j++) L[j] = Xe(L[j] * 2.55)
          return (L[3] = +L[3]), L
        }
        if ((d = u.match(Pe))) {
          var W = d.slice(1, 4)
          ;(W[1] *= 0.01), (W[2] *= 0.01)
          var ie = ne(W)
          return (ie[3] = 1), ie
        }
        if ((d = u.match(Fe))) {
          var Y = d.slice(1, 4)
          ;(Y[1] *= 0.01), (Y[2] *= 0.01)
          var de = ne(Y)
          return (de[3] = +d[4]), de
        }
      }
    at.test = function (u) {
      return (
        ue.test(u) ||
        be.test(u) ||
        ve.test(u) ||
        _e.test(u) ||
        Pe.test(u) ||
        Fe.test(u)
      )
    }
    var It = at,
      xn = q,
      Is = O,
      Sn = _,
      ar = m.type,
      _t = H,
      Mt = It
    ;(Is.prototype.css = function (u) {
      return _t(this._rgb, u)
    }),
      (xn.css = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Is,
          [null].concat(u, ["css"]),
        ))()
      }),
      (Sn.format.css = Mt),
      Sn.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && ar(u) === "string" && Mt.test(u)) return "css"
        },
      })
    var Ms = O,
      gd = q,
      vd = _,
      md = m.unpack
    ;(vd.format.gl = function () {
      for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
      var h = md(u, "rgba")
      return (h[0] *= 255), (h[1] *= 255), (h[2] *= 255), h
    }),
      (gd.gl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Ms,
          [null].concat(u, ["gl"]),
        ))()
      }),
      (Ms.prototype.gl = function () {
        var u = this._rgb
        return [u[0] / 255, u[1] / 255, u[2] / 255, u[3]]
      })
    var bd = m.unpack,
      yd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = bd(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2],
          E = Math.min(y, k, P),
          A = Math.max(y, k, P),
          L = A - E,
          j = (L * 100) / 255,
          W = (E / (255 - L)) * 100,
          ie
        return (
          L === 0
            ? (ie = Number.NaN)
            : (y === A && (ie = (k - P) / L),
              k === A && (ie = 2 + (P - y) / L),
              P === A && (ie = 4 + (y - k) / L),
              (ie *= 60),
              ie < 0 && (ie += 360)),
          [ie, j, W]
        )
      },
      wd = yd,
      xd = m.unpack,
      Sd = Math.floor,
      _d = function () {
        for (var u, d, h, y, k, P, E = [], A = arguments.length; A--; )
          E[A] = arguments[A]
        E = xd(E, "hcg")
        var L = E[0],
          j = E[1],
          W = E[2],
          ie,
          Y,
          de
        W = W * 255
        var ce = j * 255
        if (j === 0) ie = Y = de = W
        else {
          L === 360 && (L = 0),
            L > 360 && (L -= 360),
            L < 0 && (L += 360),
            (L /= 60)
          var Ie = Sd(L),
            Ae = L - Ie,
            ze = W * (1 - j),
            De = ze + ce * (1 - Ae),
            vt = ze + ce * Ae,
            dt = ze + ce
          switch (Ie) {
            case 0:
              ;(u = [dt, vt, ze]), (ie = u[0]), (Y = u[1]), (de = u[2])
              break
            case 1:
              ;(d = [De, dt, ze]), (ie = d[0]), (Y = d[1]), (de = d[2])
              break
            case 2:
              ;(h = [ze, dt, vt]), (ie = h[0]), (Y = h[1]), (de = h[2])
              break
            case 3:
              ;(y = [ze, De, dt]), (ie = y[0]), (Y = y[1]), (de = y[2])
              break
            case 4:
              ;(k = [vt, ze, dt]), (ie = k[0]), (Y = k[1]), (de = k[2])
              break
            case 5:
              ;(P = [dt, ze, De]), (ie = P[0]), (Y = P[1]), (de = P[2])
              break
          }
        }
        return [ie, Y, de, E.length > 3 ? E[3] : 1]
      },
      Ed = _d,
      Cd = m.unpack,
      Td = m.type,
      kd = q,
      dl = O,
      fl = _,
      $d = wd
    ;(dl.prototype.hcg = function () {
      return $d(this._rgb)
    }),
      (kd.hcg = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          dl,
          [null].concat(u, ["hcg"]),
        ))()
      }),
      (fl.format.hcg = Ed),
      fl.autodetect.push({
        p: 1,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Cd(u, "hcg")), Td(u) === "array" && u.length === 3))
            return "hcg"
        },
      })
    var Pd = m.unpack,
      Id = m.last,
      ir = Math.round,
      Md = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Pd(u, "rgba"),
          y = h[0],
          k = h[1],
          P = h[2],
          E = h[3],
          A = Id(u) || "auto"
        E === void 0 && (E = 1),
          A === "auto" && (A = E < 1 ? "rgba" : "rgb"),
          (y = ir(y)),
          (k = ir(k)),
          (P = ir(P))
        var L = (y << 16) | (k << 8) | P,
          j = "000000" + L.toString(16)
        j = j.substr(j.length - 6)
        var W = "0" + ir(E * 255).toString(16)
        switch (((W = W.substr(W.length - 2)), A.toLowerCase())) {
          case "rgba":
            return "#" + j + W
          case "argb":
            return "#" + W + j
          default:
            return "#" + j
        }
      },
      pl = Md,
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
          var P = parseInt(u, 16),
            E = (P >> 24) & 255,
            A = (P >> 16) & 255,
            L = (P >> 8) & 255,
            j = Math.round(((P & 255) / 255) * 100) / 100
          return [E, A, L, j]
        }
        throw new Error("unknown hex color: " + u)
      },
      hl = Ld,
      zd = q,
      gl = O,
      Bd = m.type,
      vl = _,
      jd = pl
    ;(gl.prototype.hex = function (u) {
      return jd(this._rgb, u)
    }),
      (zd.hex = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          gl,
          [null].concat(u, ["hex"]),
        ))()
      }),
      (vl.format.hex = hl),
      vl.autodetect.push({
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
    var Nd = m.unpack,
      ml = m.TWOPI,
      Rd = Math.min,
      Fd = Math.sqrt,
      Dd = Math.acos,
      Hd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Nd(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2]
        ;(y /= 255), (k /= 255), (P /= 255)
        var E,
          A = Rd(y, k, P),
          L = (y + k + P) / 3,
          j = L > 0 ? 1 - A / L : 0
        return (
          j === 0
            ? (E = NaN)
            : ((E = (y - k + (y - P)) / 2),
              (E /= Fd((y - k) * (y - k) + (y - P) * (k - P))),
              (E = Dd(E)),
              P > k && (E = ml - E),
              (E /= ml)),
          [E * 360, j, L]
        )
      },
      Gd = Hd,
      Vd = m.unpack,
      ua = m.limit,
      ss = m.TWOPI,
      ca = m.PITHIRD,
      rs = Math.cos,
      Wd = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Vd(u, "hsi")
        var h = u[0],
          y = u[1],
          k = u[2],
          P,
          E,
          A
        return (
          isNaN(h) && (h = 0),
          isNaN(y) && (y = 0),
          h > 360 && (h -= 360),
          h < 0 && (h += 360),
          (h /= 360),
          h < 1 / 3
            ? ((A = (1 - y) / 3),
              (P = (1 + (y * rs(ss * h)) / rs(ca - ss * h)) / 3),
              (E = 1 - (A + P)))
            : h < 2 / 3
              ? ((h -= 1 / 3),
                (P = (1 - y) / 3),
                (E = (1 + (y * rs(ss * h)) / rs(ca - ss * h)) / 3),
                (A = 1 - (P + E)))
              : ((h -= 2 / 3),
                (E = (1 - y) / 3),
                (A = (1 + (y * rs(ss * h)) / rs(ca - ss * h)) / 3),
                (P = 1 - (E + A))),
          (P = ua(k * P * 3)),
          (E = ua(k * E * 3)),
          (A = ua(k * A * 3)),
          [P * 255, E * 255, A * 255, u.length > 3 ? u[3] : 1]
        )
      },
      qd = Wd,
      Ud = m.unpack,
      Yd = m.type,
      Kd = q,
      bl = O,
      yl = _,
      Xd = Gd
    ;(bl.prototype.hsi = function () {
      return Xd(this._rgb)
    }),
      (Kd.hsi = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          bl,
          [null].concat(u, ["hsi"]),
        ))()
      }),
      (yl.format.hsi = qd),
      yl.autodetect.push({
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
      wl = O,
      xl = _,
      ef = se
    ;(wl.prototype.hsl = function () {
      return ef(this._rgb)
    }),
      (Qd.hsl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          wl,
          [null].concat(u, ["hsl"]),
        ))()
      }),
      (xl.format.hsl = J),
      xl.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Jd(u, "hsl")), Zd(u) === "array" && u.length === 3))
            return "hsl"
        },
      })
    var tf = m.unpack,
      nf = Math.min,
      sf = Math.max,
      rf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = tf(u, "rgb")
        var h = u[0],
          y = u[1],
          k = u[2],
          P = nf(h, y, k),
          E = sf(h, y, k),
          A = E - P,
          L,
          j,
          W
        return (
          (W = E / 255),
          E === 0
            ? ((L = Number.NaN), (j = 0))
            : ((j = A / E),
              h === E && (L = (y - k) / A),
              y === E && (L = 2 + (k - h) / A),
              k === E && (L = 4 + (h - y) / A),
              (L *= 60),
              L < 0 && (L += 360)),
          [L, j, W]
        )
      },
      af = rf,
      lf = m.unpack,
      of = Math.floor,
      uf = function () {
        for (var u, d, h, y, k, P, E = [], A = arguments.length; A--; )
          E[A] = arguments[A]
        E = lf(E, "hsv")
        var L = E[0],
          j = E[1],
          W = E[2],
          ie,
          Y,
          de
        if (((W *= 255), j === 0)) ie = Y = de = W
        else {
          L === 360 && (L = 0),
            L > 360 && (L -= 360),
            L < 0 && (L += 360),
            (L /= 60)
          var ce = of(L),
            Ie = L - ce,
            Ae = W * (1 - j),
            ze = W * (1 - j * Ie),
            De = W * (1 - j * (1 - Ie))
          switch (ce) {
            case 0:
              ;(u = [W, De, Ae]), (ie = u[0]), (Y = u[1]), (de = u[2])
              break
            case 1:
              ;(d = [ze, W, Ae]), (ie = d[0]), (Y = d[1]), (de = d[2])
              break
            case 2:
              ;(h = [Ae, W, De]), (ie = h[0]), (Y = h[1]), (de = h[2])
              break
            case 3:
              ;(y = [Ae, ze, W]), (ie = y[0]), (Y = y[1]), (de = y[2])
              break
            case 4:
              ;(k = [De, Ae, W]), (ie = k[0]), (Y = k[1]), (de = k[2])
              break
            case 5:
              ;(P = [W, Ae, ze]), (ie = P[0]), (Y = P[1]), (de = P[2])
              break
          }
        }
        return [ie, Y, de, E.length > 3 ? E[3] : 1]
      },
      cf = uf,
      df = m.unpack,
      ff = m.type,
      pf = q,
      Sl = O,
      _l = _,
      hf = af
    ;(Sl.prototype.hsv = function () {
      return hf(this._rgb)
    }),
      (pf.hsv = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Sl,
          [null].concat(u, ["hsv"]),
        ))()
      }),
      (_l.format.hsv = cf),
      _l.autodetect.push({
        p: 2,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = df(u, "hsv")), ff(u) === "array" && u.length === 3))
            return "hsv"
        },
      })
    var lr = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      as = lr,
      gf = m.unpack,
      El = Math.pow,
      vf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = gf(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2],
          E = mf(y, k, P),
          A = E[0],
          L = E[1],
          j = E[2],
          W = 116 * L - 16
        return [W < 0 ? 0 : W, 500 * (A - L), 200 * (L - j)]
      },
      da = function (u) {
        return (u /= 255) <= 0.04045 ? u / 12.92 : El((u + 0.055) / 1.055, 2.4)
      },
      fa = function (u) {
        return u > as.t3 ? El(u, 1 / 3) : u / as.t2 + as.t0
      },
      mf = function (u, d, h) {
        ;(u = da(u)), (d = da(d)), (h = da(h))
        var y = fa((0.4124564 * u + 0.3575761 * d + 0.1804375 * h) / as.Xn),
          k = fa((0.2126729 * u + 0.7151522 * d + 0.072175 * h) / as.Yn),
          P = fa((0.0193339 * u + 0.119192 * d + 0.9503041 * h) / as.Zn)
        return [y, k, P]
      },
      Cl = vf,
      is = lr,
      bf = m.unpack,
      yf = Math.pow,
      wf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = bf(u, "lab")
        var h = u[0],
          y = u[1],
          k = u[2],
          P,
          E,
          A,
          L,
          j,
          W
        return (
          (E = (h + 16) / 116),
          (P = isNaN(y) ? E : E + y / 500),
          (A = isNaN(k) ? E : E - k / 200),
          (E = is.Yn * ha(E)),
          (P = is.Xn * ha(P)),
          (A = is.Zn * ha(A)),
          (L = pa(3.2404542 * P - 1.5371385 * E - 0.4985314 * A)),
          (j = pa(-0.969266 * P + 1.8760108 * E + 0.041556 * A)),
          (W = pa(0.0556434 * P - 0.2040259 * E + 1.0572252 * A)),
          [L, j, W, u.length > 3 ? u[3] : 1]
        )
      },
      pa = function (u) {
        return 255 * (u <= 0.00304 ? 12.92 * u : 1.055 * yf(u, 1 / 2.4) - 0.055)
      },
      ha = function (u) {
        return u > is.t1 ? u * u * u : is.t2 * (u - is.t0)
      },
      Tl = wf,
      xf = m.unpack,
      Sf = m.type,
      _f = q,
      kl = O,
      $l = _,
      Ef = Cl
    ;(kl.prototype.lab = function () {
      return Ef(this._rgb)
    }),
      (_f.lab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          kl,
          [null].concat(u, ["lab"]),
        ))()
      }),
      ($l.format.lab = Tl),
      $l.autodetect.push({
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
      $f = Math.atan2,
      Pf = Math.round,
      If = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Cf(u, "lab"),
          y = h[0],
          k = h[1],
          P = h[2],
          E = kf(k * k + P * P),
          A = ($f(P, k) * Tf + 360) % 360
        return Pf(E * 1e4) === 0 && (A = Number.NaN), [y, E, A]
      },
      Pl = If,
      Mf = m.unpack,
      Of = Cl,
      Af = Pl,
      Lf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Mf(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2],
          E = Of(y, k, P),
          A = E[0],
          L = E[1],
          j = E[2]
        return Af(A, L, j)
      },
      zf = Lf,
      Bf = m.unpack,
      jf = m.DEG2RAD,
      Nf = Math.sin,
      Rf = Math.cos,
      Ff = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Bf(u, "lch"),
          y = h[0],
          k = h[1],
          P = h[2]
        return isNaN(P) && (P = 0), (P = P * jf), [y, Rf(P) * k, Nf(P) * k]
      },
      Il = Ff,
      Df = m.unpack,
      Hf = Il,
      Gf = Tl,
      Vf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = Df(u, "lch")
        var h = u[0],
          y = u[1],
          k = u[2],
          P = Hf(h, y, k),
          E = P[0],
          A = P[1],
          L = P[2],
          j = Gf(E, A, L),
          W = j[0],
          ie = j[1],
          Y = j[2]
        return [W, ie, Y, u.length > 3 ? u[3] : 1]
      },
      Ml = Vf,
      Wf = m.unpack,
      qf = Ml,
      Uf = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Wf(u, "hcl").reverse()
        return qf.apply(void 0, h)
      },
      Yf = Uf,
      Kf = m.unpack,
      Xf = m.type,
      Ol = q,
      or = O,
      ga = _,
      Al = zf
    ;(or.prototype.lch = function () {
      return Al(this._rgb)
    }),
      (or.prototype.hcl = function () {
        return Al(this._rgb).reverse()
      }),
      (Ol.lch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          or,
          [null].concat(u, ["lch"]),
        ))()
      }),
      (Ol.hcl = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          or,
          [null].concat(u, ["hcl"]),
        ))()
      }),
      (ga.format.lch = Ml),
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
      Ll = Jf,
      Zf = O,
      zl = _,
      Qf = m.type,
      Os = Ll,
      ep = hl,
      tp = pl
    ;(Zf.prototype.name = function () {
      for (
        var u = tp(this._rgb, "rgb"), d = 0, h = Object.keys(Os);
        d < h.length;
        d += 1
      ) {
        var y = h[d]
        if (Os[y] === u) return y.toLowerCase()
      }
      return u
    }),
      (zl.format.named = function (u) {
        if (((u = u.toLowerCase()), Os[u])) return ep(Os[u])
        throw new Error("unknown color name: " + u)
      }),
      zl.autodetect.push({
        p: 5,
        test: function (u) {
          for (var d = [], h = arguments.length - 1; h-- > 0; )
            d[h] = arguments[h + 1]
          if (!d.length && Qf(u) === "string" && Os[u.toLowerCase()])
            return "named"
        },
      })
    var np = m.unpack,
      sp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = np(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2]
        return (y << 16) + (k << 8) + P
      },
      rp = sp,
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
      Bl = O,
      jl = _,
      up = m.type,
      cp = rp
    ;(Bl.prototype.num = function () {
      return cp(this._rgb)
    }),
      (op.num = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Bl,
          [null].concat(u, ["num"]),
        ))()
      }),
      (jl.format.num = lp),
      jl.autodetect.push({
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
      Nl = _,
      Rl = m.unpack,
      Fl = m.type,
      Dl = Math.round
    ;(va.prototype.rgb = function (u) {
      return (
        u === void 0 && (u = !0),
        u === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Dl)
      )
    }),
      (va.prototype.rgba = function (u) {
        return (
          u === void 0 && (u = !0),
          this._rgb.slice(0, 4).map(function (d, h) {
            return h < 3 ? (u === !1 ? d : Dl(d)) : d
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
      (Nl.format.rgb = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Rl(u, "rgba")
        return h[3] === void 0 && (h[3] = 1), h
      }),
      Nl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (
            ((u = Rl(u, "rgba")),
            Fl(u) === "array" &&
              (u.length === 3 ||
                (u.length === 4 &&
                  Fl(u[3]) == "number" &&
                  u[3] >= 0 &&
                  u[3] <= 1)))
          )
            return "rgb"
        },
      })
    var ur = Math.log,
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
                    104.49216199393888 * ur(y)),
              (k =
                d < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (k = d - 10) +
                    115.67994401066147 * ur(k)))
            : ((h =
                351.97690566805693 +
                0.114206453784165 * (h = d - 55) -
                40.25366309332127 * ur(h)),
              (y =
                325.4494125711974 +
                0.07943456536662342 * (y = d - 50) -
                28.0852963507957 * ur(y)),
              (k = 255)),
          [h, y, k, 1]
        )
      },
      Hl = fp,
      pp = Hl,
      hp = m.unpack,
      gp = Math.round,
      vp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        for (
          var h = hp(u, "rgb"),
            y = h[0],
            k = h[2],
            P = 1e3,
            E = 4e4,
            A = 0.4,
            L;
          E - P > A;

        ) {
          L = (E + P) * 0.5
          var j = pp(L)
          j[2] / j[0] >= k / y ? (E = L) : (P = L)
        }
        return gp(L)
      },
      mp = vp,
      ma = q,
      cr = O,
      ba = _,
      bp = mp
    ;(cr.prototype.temp =
      cr.prototype.kelvin =
      cr.prototype.temperature =
        function () {
          return bp(this._rgb)
        }),
      (ma.temp =
        ma.kelvin =
        ma.temperature =
          function () {
            for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
            return new (Function.prototype.bind.apply(
              cr,
              [null].concat(u, ["temp"]),
            ))()
          }),
      (ba.format.temp = ba.format.kelvin = ba.format.temperature = Hl)
    var yp = m.unpack,
      ya = Math.cbrt,
      wp = Math.pow,
      xp = Math.sign,
      Sp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = yp(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2],
          E = [wa(y / 255), wa(k / 255), wa(P / 255)],
          A = E[0],
          L = E[1],
          j = E[2],
          W = ya(0.4122214708 * A + 0.5363325363 * L + 0.0514459929 * j),
          ie = ya(0.2119034982 * A + 0.6806995451 * L + 0.1073969566 * j),
          Y = ya(0.0883024619 * A + 0.2817188376 * L + 0.6299787005 * j)
        return [
          0.2104542553 * W + 0.793617785 * ie - 0.0040720468 * Y,
          1.9779984951 * W - 2.428592205 * ie + 0.4505937099 * Y,
          0.0259040371 * W + 0.7827717662 * ie - 0.808675766 * Y,
        ]
      },
      Gl = Sp
    function wa(u) {
      var d = Math.abs(u)
      return d < 0.04045
        ? u / 12.92
        : (xp(u) || 1) * wp((d + 0.055) / 1.055, 2.4)
    }
    var _p = m.unpack,
      dr = Math.pow,
      Ep = Math.sign,
      Cp = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = _p(u, "lab")
        var h = u[0],
          y = u[1],
          k = u[2],
          P = dr(h + 0.3963377774 * y + 0.2158037573 * k, 3),
          E = dr(h - 0.1055613458 * y - 0.0638541728 * k, 3),
          A = dr(h - 0.0894841775 * y - 1.291485548 * k, 3)
        return [
          255 * xa(4.0767416621 * P - 3.3077115913 * E + 0.2309699292 * A),
          255 * xa(-1.2684380046 * P + 2.6097574011 * E - 0.3413193965 * A),
          255 * xa(-0.0041960863 * P - 0.7034186147 * E + 1.707614701 * A),
          u.length > 3 ? u[3] : 1,
        ]
      },
      Vl = Cp
    function xa(u) {
      var d = Math.abs(u)
      return d > 0.0031308
        ? (Ep(u) || 1) * (1.055 * dr(d, 1 / 2.4) - 0.055)
        : u * 12.92
    }
    var Tp = m.unpack,
      kp = m.type,
      $p = q,
      Wl = O,
      ql = _,
      Pp = Gl
    ;(Wl.prototype.oklab = function () {
      return Pp(this._rgb)
    }),
      ($p.oklab = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Wl,
          [null].concat(u, ["oklab"]),
        ))()
      }),
      (ql.format.oklab = Vl),
      ql.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Tp(u, "oklab")), kp(u) === "array" && u.length === 3))
            return "oklab"
        },
      })
    var Ip = m.unpack,
      Mp = Gl,
      Op = Pl,
      Ap = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        var h = Ip(u, "rgb"),
          y = h[0],
          k = h[1],
          P = h[2],
          E = Mp(y, k, P),
          A = E[0],
          L = E[1],
          j = E[2]
        return Op(A, L, j)
      },
      Lp = Ap,
      zp = m.unpack,
      Bp = Il,
      jp = Vl,
      Np = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        u = zp(u, "lch")
        var h = u[0],
          y = u[1],
          k = u[2],
          P = Bp(h, y, k),
          E = P[0],
          A = P[1],
          L = P[2],
          j = jp(E, A, L),
          W = j[0],
          ie = j[1],
          Y = j[2]
        return [W, ie, Y, u.length > 3 ? u[3] : 1]
      },
      Rp = Np,
      Fp = m.unpack,
      Dp = m.type,
      Hp = q,
      Ul = O,
      Yl = _,
      Gp = Lp
    ;(Ul.prototype.oklch = function () {
      return Gp(this._rgb)
    }),
      (Hp.oklch = function () {
        for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
        return new (Function.prototype.bind.apply(
          Ul,
          [null].concat(u, ["oklch"]),
        ))()
      }),
      (Yl.format.oklch = Rp),
      Yl.autodetect.push({
        p: 3,
        test: function () {
          for (var u = [], d = arguments.length; d--; ) u[d] = arguments[d]
          if (((u = Fp(u, "oklch")), Dp(u) === "array" && u.length === 3))
            return "oklch"
        },
      })
    var Kl = O,
      Vp = m.type
    Kl.prototype.alpha = function (u, d) {
      return (
        d === void 0 && (d = !1),
        u !== void 0 && Vp(u) === "number"
          ? d
            ? ((this._rgb[3] = u), this)
            : new Kl([this._rgb[0], this._rgb[1], this._rgb[2], u], "rgb")
          : this._rgb[3]
      )
    }
    var Wp = O
    Wp.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var Hn = O,
      qp = lr
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
        var P = h.indexOf(y) - (h.substr(0, 2) === "ok" ? 2 : 0)
        if (P > -1) return k[P]
        throw new Error("unknown channel " + y + " in mode " + h)
      } else return k
    }
    var ls = O,
      Yp = m.type,
      Kp = Math.pow,
      Xp = 1e-7,
      Jp = 20
    ls.prototype.luminance = function (u) {
      if (u !== void 0 && Yp(u) === "number") {
        if (u === 0) return new ls([0, 0, 0, this._rgb[3]], "rgb")
        if (u === 1) return new ls([255, 255, 255, this._rgb[3]], "rgb")
        var d = this.luminance(),
          h = "rgb",
          y = Jp,
          k = function (E, A) {
            var L = E.interpolate(A, 0.5, h),
              j = L.luminance()
            return Math.abs(u - j) < Xp || !y-- ? L : j > u ? k(E, L) : k(L, A)
          },
          P = (
            d > u
              ? k(new ls([0, 0, 0]), this)
              : k(this, new ls([255, 255, 255]))
          ).rgb()
        return new ls(P.concat([this._rgb[3]]))
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
      Xl = O,
      Jl = m.type,
      fr = Ot,
      Zl = function (u, d, h) {
        h === void 0 && (h = 0.5)
        for (var y = [], k = arguments.length - 3; k-- > 0; )
          y[k] = arguments[k + 3]
        var P = y[0] || "lrgb"
        if ((!fr[P] && !y.length && (P = Object.keys(fr)[0]), !fr[P]))
          throw new Error("interpolation mode " + P + " is not defined")
        return (
          Jl(u) !== "object" && (u = new Xl(u)),
          Jl(d) !== "object" && (d = new Xl(d)),
          fr[P](u, d, h).alpha(u.alpha() + h * (d.alpha() - u.alpha()))
        )
      },
      Ql = O,
      Qp = Zl
    Ql.prototype.mix = Ql.prototype.interpolate = function (u, d) {
      d === void 0 && (d = 0.5)
      for (var h = [], y = arguments.length - 2; y-- > 0; )
        h[y] = arguments[y + 2]
      return Qp.apply(void 0, [this, u, d].concat(h))
    }
    var eo = O
    eo.prototype.premultiply = function (u) {
      u === void 0 && (u = !1)
      var d = this._rgb,
        h = d[3]
      return u
        ? ((this._rgb = [d[0] * h, d[1] * h, d[2] * h, h]), this)
        : new eo([d[0] * h, d[1] * h, d[2] * h, h], "rgb")
    }
    var _a = O,
      eh = lr
    ;(_a.prototype.saturate = function (u) {
      u === void 0 && (u = 1)
      var d = this,
        h = d.lch()
      return (
        (h[1] += eh.Kn * u),
        h[1] < 0 && (h[1] = 0),
        new _a(h, "lch").alpha(d.alpha(), !0)
      )
    }),
      (_a.prototype.desaturate = function (u) {
        return u === void 0 && (u = 1), this.saturate(-u)
      })
    var to = O,
      no = m.type
    to.prototype.set = function (u, d, h) {
      h === void 0 && (h = !1)
      var y = u.split("."),
        k = y[0],
        P = y[1],
        E = this[k]()
      if (P) {
        var A = k.indexOf(P) - (k.substr(0, 2) === "ok" ? 2 : 0)
        if (A > -1) {
          if (no(d) == "string")
            switch (d.charAt(0)) {
              case "+":
                E[A] += +d
                break
              case "-":
                E[A] += +d
                break
              case "*":
                E[A] *= +d.substr(1)
                break
              case "/":
                E[A] /= +d.substr(1)
                break
              default:
                E[A] = +d
            }
          else if (no(d) === "number") E[A] = d
          else throw new Error("unsupported value for Color.set")
          var L = new to(E, k)
          return h ? ((this._rgb = L._rgb), this) : L
        }
        throw new Error("unknown channel " + P + " in mode " + k)
      } else return E
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
    var sh = O,
      Ea = Math.sqrt,
      os = Math.pow,
      rh = function (u, d, h) {
        var y = u._rgb,
          k = y[0],
          P = y[1],
          E = y[2],
          A = d._rgb,
          L = A[0],
          j = A[1],
          W = A[2]
        return new sh(
          Ea(os(k, 2) * (1 - h) + os(L, 2) * h),
          Ea(os(P, 2) * (1 - h) + os(j, 2) * h),
          Ea(os(E, 2) * (1 - h) + os(W, 2) * h),
          "rgb",
        )
      }
    Ot.lrgb = rh
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
    var so = O,
      us = function (u, d, h, y) {
        var k, P, E, A
        y === "hsl"
          ? ((E = u.hsl()), (A = d.hsl()))
          : y === "hsv"
            ? ((E = u.hsv()), (A = d.hsv()))
            : y === "hcg"
              ? ((E = u.hcg()), (A = d.hcg()))
              : y === "hsi"
                ? ((E = u.hsi()), (A = d.hsi()))
                : y === "lch" || y === "hcl"
                  ? ((y = "hcl"), (E = u.hcl()), (A = d.hcl()))
                  : y === "oklch" &&
                    ((E = u.oklch().reverse()), (A = d.oklch().reverse()))
        var L, j, W, ie, Y, de
        ;(y.substr(0, 1) === "h" || y === "oklch") &&
          ((k = E),
          (L = k[0]),
          (W = k[1]),
          (Y = k[2]),
          (P = A),
          (j = P[0]),
          (ie = P[1]),
          (de = P[2]))
        var ce, Ie, Ae, ze
        return (
          !isNaN(L) && !isNaN(j)
            ? (j > L && j - L > 180
                ? (ze = j - (L + 360))
                : j < L && L - j > 180
                  ? (ze = j + 360 - L)
                  : (ze = j - L),
              (Ie = L + h * ze))
            : isNaN(L)
              ? isNaN(j)
                ? (Ie = Number.NaN)
                : ((Ie = j), (Y == 1 || Y == 0) && y != "hsv" && (ce = ie))
              : ((Ie = L), (de == 1 || de == 0) && y != "hsv" && (ce = W)),
          ce === void 0 && (ce = W + h * (ie - W)),
          (Ae = Y + h * (de - Y)),
          y === "oklch" ? new so([Ae, ce, Ie], y) : new so([Ie, ce, Ae], y)
        )
      },
      lh = us,
      ro = function (u, d, h) {
        return lh(u, d, h, "lch")
      }
    ;(Ot.lch = ro), (Ot.hcl = ro)
    var oh = O,
      uh = function (u, d, h) {
        var y = u.num(),
          k = d.num()
        return new oh(y + h * (k - y), "num")
      }
    Ot.num = uh
    var ch = us,
      dh = function (u, d, h) {
        return ch(u, d, h, "hcg")
      }
    Ot.hcg = dh
    var fh = us,
      ph = function (u, d, h) {
        return fh(u, d, h, "hsi")
      }
    Ot.hsi = ph
    var hh = us,
      gh = function (u, d, h) {
        return hh(u, d, h, "hsl")
      }
    Ot.hsl = gh
    var vh = us,
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
    var wh = us,
      xh = function (u, d, h) {
        return wh(u, d, h, "oklch")
      }
    Ot.oklch = xh
    var Ca = O,
      Sh = m.clip_rgb,
      Ta = Math.pow,
      ka = Math.sqrt,
      $a = Math.PI,
      ao = Math.cos,
      io = Math.sin,
      _h = Math.atan2,
      Eh = function (u, d, h) {
        d === void 0 && (d = "lrgb"), h === void 0 && (h = null)
        var y = u.length
        h ||
          (h = Array.from(new Array(y)).map(function () {
            return 1
          }))
        var k =
          y /
          h.reduce(function (Ie, Ae) {
            return Ie + Ae
          })
        if (
          (h.forEach(function (Ie, Ae) {
            h[Ae] *= k
          }),
          (u = u.map(function (Ie) {
            return new Ca(Ie)
          })),
          d === "lrgb")
        )
          return Ch(u, h)
        for (
          var P = u.shift(), E = P.get(d), A = [], L = 0, j = 0, W = 0;
          W < E.length;
          W++
        )
          if (
            ((E[W] = (E[W] || 0) * h[0]),
            A.push(isNaN(E[W]) ? 0 : h[0]),
            d.charAt(W) === "h" && !isNaN(E[W]))
          ) {
            var ie = (E[W] / 180) * $a
            ;(L += ao(ie) * h[0]), (j += io(ie) * h[0])
          }
        var Y = P.alpha() * h[0]
        u.forEach(function (Ie, Ae) {
          var ze = Ie.get(d)
          Y += Ie.alpha() * h[Ae + 1]
          for (var De = 0; De < E.length; De++)
            if (!isNaN(ze[De]))
              if (((A[De] += h[Ae + 1]), d.charAt(De) === "h")) {
                var vt = (ze[De] / 180) * $a
                ;(L += ao(vt) * h[Ae + 1]), (j += io(vt) * h[Ae + 1])
              } else E[De] += ze[De] * h[Ae + 1]
        })
        for (var de = 0; de < E.length; de++)
          if (d.charAt(de) === "h") {
            for (var ce = (_h(j / A[de], L / A[de]) / $a) * 180; ce < 0; )
              ce += 360
            for (; ce >= 360; ) ce -= 360
            E[de] = ce
          } else E[de] = E[de] / A[de]
        return (Y /= y), new Ca(E, d).alpha(Y > 0.99999 ? 1 : Y, !0)
      },
      Ch = function (u, d) {
        for (var h = u.length, y = [0, 0, 0, 0], k = 0; k < u.length; k++) {
          var P = u[k],
            E = d[k] / h,
            A = P._rgb
          ;(y[0] += Ta(A[0], 2) * E),
            (y[1] += Ta(A[1], 2) * E),
            (y[2] += Ta(A[2], 2) * E),
            (y[3] += A[3] * E)
        }
        return (
          (y[0] = ka(y[0])),
          (y[1] = ka(y[1])),
          (y[2] = ka(y[2])),
          y[3] > 0.9999999 && (y[3] = 1),
          new Ca(Sh(y))
        )
      },
      Wt = q,
      cs = m.type,
      Th = Math.pow,
      Pa = function (u) {
        var d = "rgb",
          h = Wt("#ccc"),
          y = 0,
          k = [0, 1],
          P = [],
          E = [0, 0],
          A = !1,
          L = [],
          j = !1,
          W = 0,
          ie = 1,
          Y = !1,
          de = {},
          ce = !0,
          Ie = 1,
          Ae = function (K) {
            if (
              ((K = K || ["#fff", "#000"]),
              K &&
                cs(K) === "string" &&
                Wt.brewer &&
                Wt.brewer[K.toLowerCase()] &&
                (K = Wt.brewer[K.toLowerCase()]),
              cs(K) === "array")
            ) {
              K.length === 1 && (K = [K[0], K[0]]), (K = K.slice(0))
              for (var ye = 0; ye < K.length; ye++) K[ye] = Wt(K[ye])
              P.length = 0
              for (var Oe = 0; Oe < K.length; Oe++) P.push(Oe / (K.length - 1))
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
          De = function (K) {
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
              ye || (Me = De(Me)),
              Ie !== 1 && (Me = Th(Me, Ie)),
              (Me = E[0] + Me * (1 - E[0] - E[1])),
              (Me = Math.min(1, Math.max(0, Me)))
            var Qe = Math.floor(Me * 1e4)
            if (ce && de[Qe]) Oe = de[Qe]
            else {
              if (cs(L) === "array")
                for (var Be = 0; Be < P.length; Be++) {
                  var Ge = P[Be]
                  if (Me <= Ge) {
                    Oe = L[Be]
                    break
                  }
                  if (Me >= Ge && Be === P.length - 1) {
                    Oe = L[Be]
                    break
                  }
                  if (Me > Ge && Me < P[Be + 1]) {
                    ;(Me = (Me - Ge) / (P[Be + 1] - Ge)),
                      (Oe = Wt.interpolate(L[Be], L[Be + 1], Me, d))
                    break
                  }
                }
              else cs(L) === "function" && (Oe = L(Me))
              ce && (de[Qe] = Oe)
            }
            return Oe
          },
          Tt = function () {
            return (de = {})
          }
        Ae(u)
        var Le = function (K) {
          var ye = Wt(dt(K))
          return j && ye[j] ? ye[j]() : ye
        }
        return (
          (Le.classes = function (K) {
            if (K != null) {
              if (cs(K) === "array") (A = K), (k = [K[0], K[K.length - 1]])
              else {
                var ye = Wt.analyze(k)
                K === 0 ? (A = [ye.min, ye.max]) : (A = Wt.limits(ye, "e", K))
              }
              return Le
            }
            return A
          }),
          (Le.domain = function (K) {
            if (!arguments.length) return k
            ;(W = K[0]), (ie = K[K.length - 1]), (P = [])
            var ye = L.length
            if (K.length === ye && W !== ie)
              for (var Oe = 0, Me = Array.from(K); Oe < Me.length; Oe += 1) {
                var mt = Me[Oe]
                P.push((mt - W) / (ie - W))
              }
            else {
              for (var Qe = 0; Qe < ye; Qe++) P.push(Qe / (ye - 1))
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
                    var Ut = (Ve - Ge[We]) / (Ge[We + 1] - Ge[We]),
                      Cn = Be[We] + Ut * (Be[We + 1] - Be[We])
                    return Cn
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
            return (j = K), Le
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
                ? (De = function (ye) {
                    for (
                      var Oe = dt(0, !0).lab()[0],
                        Me = dt(1, !0).lab()[0],
                        mt = Oe > Me,
                        Qe = dt(ye, !0).lab()[0],
                        Be = Oe + (Me - Oe) * ye,
                        Ge = Qe - Be,
                        Ve = 0,
                        We = 1,
                        Ut = 20;
                      Math.abs(Ge) > 0.01 && Ut-- > 0;

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
                : (De = function (ye) {
                    return ye
                  }),
              Le
            )
          }),
          (Le.padding = function (K) {
            return K != null
              ? (cs(K) === "number" && (K = [K, K]), (E = K), Le)
              : E
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
              Wt[ye] &&
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
            return K != null ? ((Ie = K), Le) : Ie
          }),
          (Le.nodata = function (K) {
            return K != null ? ((h = Wt(K)), Le) : h
          }),
          Le
        )
      }
    function kh(u, d, h) {
      for (
        var y = [], k = u < d, P = h ? (k ? d + 1 : d - 1) : d, E = u;
        k ? E < P : E > P;
        k ? E++ : E--
      )
        y.push(E)
      return y
    }
    var As = O,
      $h = Pa,
      Ph = function (u) {
        for (var d = [1, 1], h = 1; h < u; h++) {
          for (var y = [1], k = 1; k <= d.length; k++)
            y[k] = (d[k] || 0) + d[k - 1]
          d = y
        }
        return d
      },
      Ih = function (u) {
        var d, h, y, k, P, E, A
        if (
          ((u = u.map(function (Y) {
            return new As(Y)
          })),
          u.length === 2)
        )
          (d = u.map(function (Y) {
            return Y.lab()
          })),
            (P = d[0]),
            (E = d[1]),
            (k = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return P[ce] + Y * (E[ce] - P[ce])
              })
              return new As(de, "lab")
            })
        else if (u.length === 3)
          (h = u.map(function (Y) {
            return Y.lab()
          })),
            (P = h[0]),
            (E = h[1]),
            (A = h[2]),
            (k = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return (
                  (1 - Y) * (1 - Y) * P[ce] +
                  2 * (1 - Y) * Y * E[ce] +
                  Y * Y * A[ce]
                )
              })
              return new As(de, "lab")
            })
        else if (u.length === 4) {
          var L
          ;(y = u.map(function (Y) {
            return Y.lab()
          })),
            (P = y[0]),
            (E = y[1]),
            (A = y[2]),
            (L = y[3]),
            (k = function (Y) {
              var de = [0, 1, 2].map(function (ce) {
                return (
                  (1 - Y) * (1 - Y) * (1 - Y) * P[ce] +
                  3 * (1 - Y) * (1 - Y) * Y * E[ce] +
                  3 * (1 - Y) * Y * Y * A[ce] +
                  Y * Y * Y * L[ce]
                )
              })
              return new As(de, "lab")
            })
        } else if (u.length >= 5) {
          var j, W, ie
          ;(j = u.map(function (Y) {
            return Y.lab()
          })),
            (ie = u.length - 1),
            (W = Ph(ie)),
            (k = function (Y) {
              var de = 1 - Y,
                ce = [0, 1, 2].map(function (Ie) {
                  return j.reduce(function (Ae, ze, De) {
                    return (
                      Ae +
                      W[De] * Math.pow(de, ie - De) * Math.pow(Y, De) * ze[Ie]
                    )
                  }, 0)
                })
              return new As(ce, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return k
      },
      Mh = function (u) {
        var d = Ih(u)
        return (
          (d.scale = function () {
            return $h(d)
          }),
          d
        )
      },
      Ia = q,
      qt = function (u, d, h) {
        if (!qt[h]) throw new Error("unknown blend mode " + h)
        return qt[h](u, d)
      },
      _n = function (u) {
        return function (d, h) {
          var y = Ia(h).rgb(),
            k = Ia(d).rgb()
          return Ia.rgb(u(y, k))
        }
      },
      En = function (u) {
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
      jh = function (u, d) {
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
    ;(qt.normal = _n(En(Oh))),
      (qt.multiply = _n(En(Ah))),
      (qt.screen = _n(En(Bh))),
      (qt.overlay = _n(En(jh))),
      (qt.darken = _n(En(Lh))),
      (qt.lighten = _n(En(zh))),
      (qt.dodge = _n(En(Rh))),
      (qt.burn = _n(En(Nh)))
    for (
      var Fh = qt,
        Ma = m.type,
        Dh = m.clip_rgb,
        Hh = m.TWOPI,
        Gh = Math.pow,
        Vh = Math.sin,
        Wh = Math.cos,
        lo = q,
        qh = function (u, d, h, y, k) {
          u === void 0 && (u = 300),
            d === void 0 && (d = -1.5),
            h === void 0 && (h = 1),
            y === void 0 && (y = 1),
            k === void 0 && (k = [0, 1])
          var P = 0,
            E
          Ma(k) === "array" ? (E = k[1] - k[0]) : ((E = 0), (k = [k, k]))
          var A = function (L) {
            var j = Hh * ((u + 120) / 360 + d * L),
              W = Gh(k[0] + E * L, y),
              ie = P !== 0 ? h[0] + L * P : h,
              Y = (ie * W * (1 - W)) / 2,
              de = Wh(j),
              ce = Vh(j),
              Ie = W + Y * (-0.14861 * de + 1.78277 * ce),
              Ae = W + Y * (-0.29227 * de - 0.90649 * ce),
              ze = W + Y * (1.97294 * de)
            return lo(Dh([Ie * 255, Ae * 255, ze * 255, 1]))
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
                  Ma(h) === "array"
                    ? ((P = h[1] - h[0]), P === 0 && (h = h[1]))
                    : (P = 0),
                  A)
            }),
            (A.lightness = function (L) {
              return L == null
                ? k
                : (Ma(L) === "array"
                    ? ((k = L), (E = L[1] - L[0]))
                    : ((k = [L, L]), (E = 0)),
                  A)
            }),
            (A.scale = function () {
              return lo.scale(A)
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
        oo = Math.log,
        Zh = Math.pow,
        Qh = Math.floor,
        e0 = Math.abs,
        uo = function (u, d) {
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
              return co(h, y, k)
            }),
            h
          )
        },
        co = function (u, d, h) {
          d === void 0 && (d = "equal"),
            h === void 0 && (h = 7),
            Oa(u) == "array" && (u = uo(u))
          var y = u.min,
            k = u.max,
            P = u.values.sort(function (La, za) {
              return La - za
            })
          if (h === 1) return [y, k]
          var E = []
          if (
            (d.substr(0, 1) === "c" && (E.push(y), E.push(k)),
            d.substr(0, 1) === "e")
          ) {
            E.push(y)
            for (var A = 1; A < h; A++) E.push(y + (A / h) * (k - y))
            E.push(k)
          } else if (d.substr(0, 1) === "l") {
            if (y <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var L = Math.LOG10E * oo(y),
              j = Math.LOG10E * oo(k)
            E.push(y)
            for (var W = 1; W < h; W++) E.push(Zh(10, L + (W / h) * (j - L)))
            E.push(k)
          } else if (d.substr(0, 1) === "q") {
            E.push(y)
            for (var ie = 1; ie < h; ie++) {
              var Y = ((P.length - 1) * ie) / h,
                de = Qh(Y)
              if (de === Y) E.push(P[de])
              else {
                var ce = Y - de
                E.push(P[de] * (1 - ce) + P[de + 1] * ce)
              }
            }
            E.push(k)
          } else if (d.substr(0, 1) === "k") {
            var Ie,
              Ae = P.length,
              ze = new Array(Ae),
              De = new Array(h),
              vt = !0,
              dt = 0,
              Tt = null
            ;(Tt = []), Tt.push(y)
            for (var Le = 1; Le < h; Le++) Tt.push(y + (Le / h) * (k - y))
            for (Tt.push(k); vt; ) {
              for (var K = 0; K < h; K++) De[K] = 0
              for (var ye = 0; ye < Ae; ye++)
                for (
                  var Oe = P[ye], Me = Number.MAX_VALUE, mt = void 0, Qe = 0;
                  Qe < h;
                  Qe++
                ) {
                  var Be = e0(Tt[Qe] - Oe)
                  Be < Me && ((Me = Be), (mt = Qe)), De[mt]++, (ze[ye] = mt)
                }
              for (var Ge = new Array(h), Ve = 0; Ve < h; Ve++) Ge[Ve] = null
              for (var We = 0; We < Ae; We++)
                (Ie = ze[We]),
                  Ge[Ie] === null ? (Ge[Ie] = P[We]) : (Ge[Ie] += P[We])
              for (var Ut = 0; Ut < h; Ut++) Ge[Ut] *= 1 / De[Ut]
              vt = !1
              for (var Cn = 0; Cn < h; Cn++)
                if (Ge[Cn] !== Tt[Cn]) {
                  vt = !0
                  break
                }
              ;(Tt = Ge), dt++, dt > 200 && (vt = !1)
            }
            for (var Tn = {}, ds = 0; ds < h; ds++) Tn[ds] = []
            for (var fs = 0; fs < Ae; fs++) (Ie = ze[fs]), Tn[Ie].push(P[fs])
            for (var un = [], Gn = 0; Gn < h; Gn++)
              un.push(Tn[Gn][0]), un.push(Tn[Gn][Tn[Gn].length - 1])
            ;(un = un.sort(function (La, za) {
              return La - za
            })),
              E.push(un[0])
            for (var Ls = 1; Ls < un.length; Ls += 2) {
              var Vn = un[Ls]
              !isNaN(Vn) && E.indexOf(Vn) === -1 && E.push(Vn)
            }
          }
          return E
        },
        fo = { analyze: uo, limits: co },
        po = O,
        t0 = function (u, d) {
          ;(u = new po(u)), (d = new po(d))
          var h = u.luminance(),
            y = d.luminance()
          return h > y ? (h + 0.05) / (y + 0.05) : (y + 0.05) / (h + 0.05)
        },
        ho = O,
        on = Math.sqrt,
        lt = Math.pow,
        n0 = Math.min,
        s0 = Math.max,
        go = Math.atan2,
        vo = Math.abs,
        pr = Math.cos,
        mo = Math.sin,
        r0 = Math.exp,
        bo = Math.PI,
        a0 = function (u, d, h, y, k) {
          h === void 0 && (h = 1),
            y === void 0 && (y = 1),
            k === void 0 && (k = 1)
          var P = function (Vn) {
              return (360 * Vn) / (2 * bo)
            },
            E = function (Vn) {
              return (2 * bo * Vn) / 360
            }
          ;(u = new ho(u)), (d = new ho(d))
          var A = Array.from(u.lab()),
            L = A[0],
            j = A[1],
            W = A[2],
            ie = Array.from(d.lab()),
            Y = ie[0],
            de = ie[1],
            ce = ie[2],
            Ie = (L + Y) / 2,
            Ae = on(lt(j, 2) + lt(W, 2)),
            ze = on(lt(de, 2) + lt(ce, 2)),
            De = (Ae + ze) / 2,
            vt = 0.5 * (1 - on(lt(De, 7) / (lt(De, 7) + lt(25, 7)))),
            dt = j * (1 + vt),
            Tt = de * (1 + vt),
            Le = on(lt(dt, 2) + lt(W, 2)),
            K = on(lt(Tt, 2) + lt(ce, 2)),
            ye = (Le + K) / 2,
            Oe = P(go(W, dt)),
            Me = P(go(ce, Tt)),
            mt = Oe >= 0 ? Oe : Oe + 360,
            Qe = Me >= 0 ? Me : Me + 360,
            Be = vo(mt - Qe) > 180 ? (mt + Qe + 360) / 2 : (mt + Qe) / 2,
            Ge =
              1 -
              0.17 * pr(E(Be - 30)) +
              0.24 * pr(E(2 * Be)) +
              0.32 * pr(E(3 * Be + 6)) -
              0.2 * pr(E(4 * Be - 63)),
            Ve = Qe - mt
          ;(Ve = vo(Ve) <= 180 ? Ve : Qe <= mt ? Ve + 360 : Ve - 360),
            (Ve = 2 * on(Le * K) * mo(E(Ve) / 2))
          var We = Y - L,
            Ut = K - Le,
            Cn = 1 + (0.015 * lt(Ie - 50, 2)) / on(20 + lt(Ie - 50, 2)),
            Tn = 1 + 0.045 * ye,
            ds = 1 + 0.015 * ye * Ge,
            fs = 30 * r0(-lt((Be - 275) / 25, 2)),
            un = 2 * on(lt(ye, 7) / (lt(ye, 7) + lt(25, 7))),
            Gn = -un * mo(2 * E(fs)),
            Ls = on(
              lt(We / (h * Cn), 2) +
                lt(Ut / (y * Tn), 2) +
                lt(Ve / (k * ds), 2) +
                Gn * (Ut / (y * Tn)) * (Ve / (k * ds)),
            )
          return s0(0, n0(100, Ls))
        },
        yo = O,
        i0 = function (u, d, h) {
          h === void 0 && (h = "lab"), (u = new yo(u)), (d = new yo(d))
          var y = u.get(h),
            k = d.get(h),
            P = 0
          for (var E in y) {
            var A = (y[E] || 0) - (k[E] || 0)
            P += A * A
          }
          return Math.sqrt(P)
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
        wo = q,
        xo = Pa,
        u0 = {
          cool: function () {
            return xo([wo.hsl(180, 1, 0.9), wo.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return xo(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          },
        },
        hr = {
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
        So = Object.keys(hr);
      Aa < So.length;
      Aa += 1
    ) {
      var _o = So[Aa]
      hr[_o.toLowerCase()] = hr[_o]
    }
    var c0 = hr,
      ct = q
    ;(ct.average = Eh),
      (ct.bezier = Mh),
      (ct.blend = Fh),
      (ct.cubehelix = qh),
      (ct.mix = ct.interpolate = Zl),
      (ct.random = Jh),
      (ct.scale = Pa),
      (ct.analyze = fo.analyze),
      (ct.contrast = t0),
      (ct.deltaE = a0),
      (ct.distance = i0),
      (ct.limits = fo.limits),
      (ct.valid = o0),
      (ct.scales = u0),
      (ct.colors = Ll),
      (ct.brewer = c0)
    var d0 = ct
    return d0
  })
})(fd)
var Iy = fd.exports
const sn = Py(Iy),
  ln = (e) => (er("data-v-a139c5c2"), (e = e()), tr(), e),
  My = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  Oy = { class: "flex flex-col items-center justify-center w-full" },
  Ay = {
    class: "flex flex-row mb-12 flex-wrap sm:flex-wrap md:flex-nowrap",
    style: { gap: "5rem" },
  },
  Ly = { viewBox: "0 0 36 36", class: "chart" },
  zy = ln(() =>
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
  By = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  jy = { viewBox: "0 0 36 36", class: "chart" },
  Ny = ln(() =>
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
  Fy = ln(() =>
    g(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  Dy = ln(() =>
    g(
      "p",
      null,
      [
        $e(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        g("b", null, "315 KB"),
        $e(". That's half of the classic SNES game "),
        g("em", null, "The Legend of Zelda: A Link to The Past"),
        $e(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  Hy = ln(() => g("p", null, "You want fast? Let's make it happen.", -1)),
  Gy = ln(() => g("p", null, "DAMN your sites load fast...", -1)),
  Vy = ln(() =>
    g(
      "p",
      { class: "text-right italic text-sm mb-0 pb-0" },
      [g("b", null, "- T. N., one of my clients")],
      -1,
    ),
  ),
  Wy = [Gy, Vy],
  qy = { id: "speedTable" },
  Uy = ln(() =>
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
  Yy = { class: "flex" },
  Ky = { class: "flex" },
  Xy = ln(() =>
    g(
      "tbody",
      null,
      [
        g("tr", null, [
          g("td", null, "Huge, resource-heavy images"),
          g("td", null, [
            $e(" Optimize your images. "),
            g("b", null, "A lot. "),
            $e(
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
  Jy = ln(() => g("div", { class: "h-6" }, null, -1)),
  Zy = {
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
  Qy = Object.assign(Zy, {
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
        s = (o) => {
          if (o >= 4) return "text-emerald-500 bg-emerald-950"
          if (o == 3) return "text-orange-200 bg-orange-950"
          if (o == 2) return "text-orange-500 bg-orange-950"
          if (o == 1) return "text-orange-400 bg-orange-950"
        },
        r = (o) => {
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
            ? (c = sn("#e2e8f0"))
            : o == 4
              ? (c = sn("#cbd5e1"))
              : o == 3
                ? (c = sn("#475569"))
                : o == 2
                  ? (c = sn("#1e293b"))
                  : o == 1 && (c = sn("#0f172a"))
          for (let p = 1; p < f.length; p++)
            p % 2 == 0
              ? (f[p].style.backgroundColor = c.brighten(0))
              : (f[p].style.backgroundColor = c.brighten(0.2))
        }
      return (
        yt(() => {
          l(t.brightness)
        }),
        Nn(
          () => t.brightness,
          (o, f) => {
            l(o)
          },
        ),
        (o, f) => (
          te(),
          xe("div", My, [
            g("div", Oy, [
              g("div", Ay, [
                g(
                  "div",
                  { id: "perfChart", class: M(s(e.brightness)) },
                  [
                    (te(),
                    xe("svg", Ly, [
                      zy,
                      g(
                        "path",
                        {
                          class: M(["circle", r(e.brightness)]),
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
                        By,
                      ),
                    ])),
                    g(
                      "div",
                      {
                        id: "chartInner",
                        class: M(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 96 ",
                      2,
                    ),
                    g(
                      "p",
                      {
                        class: M([
                          "text-sm italic opacity-50 mt-3",
                          a(e.brightness),
                        ]),
                        style: { "min-width": "250px" },
                      },
                      [
                        $e(
                          " Google Page Speed desktop performance score for the Bazaar ",
                        ),
                        g(
                          "a",
                          {
                            href: "/portfolio/bazaar",
                            class: M(n(e.brightness)),
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
                    class: M([s(e.brightness), "hidden sm:hidden md:block"]),
                  },
                  [
                    (te(),
                    xe("svg", jy, [
                      Ny,
                      g(
                        "path",
                        {
                          class: M(["circle", r(e.brightness)]),
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
                        class: M(["font-monospace text-6xl", n(e.brightness)]),
                      },
                      " 99 ",
                      2,
                    ),
                    g(
                      "p",
                      {
                        class: M([
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
                  class: M([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    a(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  g(
                    "h2",
                    { class: M(["text-2xl m-0", a(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  g(
                    "h2",
                    { class: M(["text-5xl", a(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  Fy,
                  Dy,
                  Hy,
                  g(
                    "div",
                    {
                      class: M([
                        "rounded px-8 py-3 flex-col",
                        {
                          "bg-slate-100": e.brightness == 5,
                          "bg-slate-400": e.brightness == 4,
                          "bg-slate-500": e.brightness == 3,
                          "bg-slate-700": e.brightness == 2,
                          "bg-slate-800": e.brightness == 1,
                        },
                      ]),
                    },
                    Wy,
                    2,
                  ),
                  g("h3", { class: M(a(e.brightness)) }, "How I help", 2),
                  g("table", qy, [
                    Uy,
                    g("thead", null, [
                      g("tr", null, [
                        g("th", null, [
                          g("div", Yy, [
                            g(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                $e(" Problem "),
                                he(
                                  we(E1),
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
                        g("th", null, [
                          g("div", Ky, [
                            g(
                              "h4",
                              { class: M([a(e.brightness), "text-lg m-0"]) },
                              [
                                $e(" What I can do "),
                                he(
                                  we(S1),
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
                    Xy,
                  ]),
                ],
                2,
              ),
              Jy,
              he(rr, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  ew = bn(Qy, [["__scopeId", "data-v-a139c5c2"]]),
  tw = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  nw = { class: "lg:w-6/12 sm:w-12/12" },
  sw = g(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  rw = g("p", null, [g("b", null, " Don't worry, I can help!")], -1),
  aw = g(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  iw = { class: "flex items-center w-full" },
  lw = g(
    "p",
    null,
    [
      $e(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      g("em", null, "very"),
      $e(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  ow = g("div", { class: "h-3" }, null, -1),
  uw = { class: "flex items-center w-full" },
  cw = g(
    "p",
    null,
    [
      $e(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      g("em", null, "do"),
      $e(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  dw = g("div", { class: "h-3" }, null, -1),
  fw = { class: "flex items-center w-full" },
  pw = g(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  hw = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  gw = { class: "prose text-center" },
  vw = g("div", { class: "h-3" }, null, -1),
  mw = g("div", { class: "h-3" }, null, -1),
  bw = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      ee(9274)
      const t = ee(4709),
        n = ee(new Date("2023-10-01")),
        s = ee(new Date()),
        r = me(
          () =>
            ((s.value.getFullYear() - n.value.getFullYear()) * 12 +
              (s.value.getMonth() - n.value.getMonth())) *
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
        xe("div", tw, [
          g("div", nw, [
            g(
              "h2",
              { class: M(["text-left text-5xl", l(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            g(
              "p",
              {
                class: M([
                  "text-left text-sm italic opacity-50 mt-3",
                  l(e.brightness),
                ]),
              },
              [
                $e(" Website already secure? "),
                g("b", null, [
                  g(
                    "a",
                    { href: "", class: M(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  $e(" are you?"),
                ]),
              ],
              2,
            ),
            g(
              "hr",
              { class: M(["mb-5 mt-1 w-6/12 opacity-25", l(e.brightness)]) },
              null,
              2,
            ),
            g(
              "div",
              { class: M(["prose", l(e.brightness)]) },
              [
                sw,
                rw,
                aw,
                g(
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
                    g("div", iw, [
                      he(
                        we(Ir),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: M(["font-bold m-0", l(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    lw,
                  ],
                  2,
                ),
                ow,
                g(
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
                    g("div", uw, [
                      he(
                        we(Ir),
                        { size: "2rem", class: M(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: M(["font-bold m-0", l(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    cw,
                  ],
                  2,
                ),
                dw,
                g(
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
                    g("div", fw, [
                      he(
                        we(Ir),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: M(["font-bold m-0", l(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    pw,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          g("div", hw, [
            g(
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
                g("div", gw, [
                  g(
                    "h3",
                    {
                      class: M([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    $t(a(r.value)) + "+ ",
                    3,
                  ),
                  g(
                    "h3",
                    { class: M(["text-xl", l(e.brightness)]) },
                    [
                      $e(" attacks blocked on "),
                      g(
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
                  g(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  g(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", l(e.brightness)]),
                    },
                    [
                      g(
                        "a",
                        { href: "", class: M(i(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      $e(" about the Bazaar project "),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            vw,
            g("hr", { class: M(["opacity-50", l(e.brightness)]) }, null, 2),
            mw,
            he(rr, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  yw = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  ww = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  xw = { class: "flex w-full" },
  Sw = { class: "flex w-full pt-4 gap-2" },
  _w = { class: "w-6/12" },
  Ew = { class: "w-6/12" },
  Cw = { class: "w-full flex" },
  Tw = { class: "w-6/12" },
  kw = { class: "w-6/12 pb-3" },
  $w = g("em", null, "huge", -1),
  Pw = g("div", { class: "h-6" }, null, -1),
  Iw = {
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
        s = ee(!1),
        r = me(() =>
          s.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        a = me(() =>
          s.value
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
            ? (p = sn("#e2e8f0"))
            : f == 4
              ? (p = sn("#cbd5e1"))
              : f == 3
                ? (p = sn("#475569"))
                : f == 2
                  ? (p = sn("#1e293b"))
                  : f == 1 && (p = sn("#0f172a"))
          for (let v = 1; v < c.length; v++)
            v % 2 == 0
              ? (c[v].style.backgroundColor = p.brighten(0))
              : (c[v].style.backgroundColor = p.brighten(0.2))
        },
        o = () => {
          ;(s.value = !s.value), s.value
        }
      return (
        yt(() => {
          l(t.brightness)
        }),
        Nn(
          () => t.brightness,
          (f, c) => {
            l(f)
          },
        ),
        (f, c) => (
          te(),
          xe("div", yw, [
            g("div", ww, [
              g(
                "h2",
                { class: M(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              g(
                "h3",
                { class: M(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              g(
                "h4",
                { class: M(i(e.brightness)) },
                [
                  $e(" What are the "),
                  g(
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
              g(
                "p",
                { class: M(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              g(
                "p",
                { class: M(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              g(
                "h4",
                { class: M(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              g(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              g(
                "p",
                { class: M(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              g("div", xw, [
                g(
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
                    onClick: o,
                  },
                  [
                    s.value ? (te(), Ne(we(Qc), { key: 0 })) : rt("", !0),
                    s.value ? rt("", !0) : (te(), Ne(we(g1), { key: 1 })),
                    $e(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              g("div", Sw, [
                g("div", _w, [
                  g(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", r.value]) },
                    [s.value ? (te(), Ne(we(Eu), { key: 0 })) : rt("", !0)],
                    2,
                  ),
                ]),
                g("div", Ew, [
                  g(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", a.value]) },
                    [s.value ? (te(), Ne(we(wi), { key: 0 })) : rt("", !0)],
                    2,
                  ),
                ]),
              ]),
              g(
                "h4",
                { class: M(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              g("div", Cw, [
                g("div", Tw, [
                  g(
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
                    [$e(" Submit "), he(we(Eu))],
                    2,
                  ),
                ]),
                g("div", kw, [
                  g(
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
                    [$e(" Cancel "), he(we(wi))],
                    2,
                  ),
                ]),
              ]),
              g(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              g(
                "p",
                { class: M(i(e.brightness)) },
                [
                  $e(" Changes like these may seem small, but they make a "),
                  $w,
                  $e(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            Pw,
            he(rr, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  Mw = ["onMouseover"],
  Ow = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = ee([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = ee(0)
      const s = (a, i, l, o) => {
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
        r = (a, i) => {
          if (i) return a >= 3 ? "text-slate-200" : "text-slate-800"
          if (a >= 4) return "text-emerald-500"
          if (a == 3) return "text-orange-200"
          if (a == 2) return "text-orange-500"
          if (a == 1) return "text-orange-400"
        }
      return (a, i) => (
        te(),
        Ne(we(sm), null, {
          default: Ue(() => [
            he(
              we(rm),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: Ue(() => [
                  (te(!0),
                  xe(
                    Je,
                    null,
                    hn(
                      t.value,
                      (l) => (
                        te(),
                        Ne(
                          we(am),
                          {
                            key: l.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: Ue(({ selected: o }) => [
                              g(
                                "div",
                                {
                                  class: M([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    s(e.brightness, o, we(n), l.id),
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
                                      Ne(
                                        we(Ir),
                                        {
                                          key: 0,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(r(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : rt("", !0),
                                  l.id == 1
                                    ? (te(),
                                      Ne(
                                        we(m1),
                                        {
                                          key: 1,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(r(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : rt("", !0),
                                  l.id == 4
                                    ? (te(),
                                      Ne(
                                        we(v1),
                                        {
                                          key: 2,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(r(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : rt("", !0),
                                  l.id == 3
                                    ? (te(),
                                      Ne(
                                        we(x1),
                                        {
                                          key: 3,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(r(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : rt("", !0),
                                  l.id == 5
                                    ? (te(),
                                      Ne(
                                        we(Qc),
                                        {
                                          key: 4,
                                          size: "3rem",
                                          style: { transition: "all 0.2s" },
                                          class: M(r(e.brightness, o)),
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ))
                                    : rt("", !0),
                                  g(
                                    "p",
                                    {
                                      class: M([
                                        "font-semibold cursor-pointer",
                                        r(e.brightness, o),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    $t(l.title),
                                    3,
                                  ),
                                ],
                                42,
                                Mw,
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
                default: Ue(() => [
                  he(
                    we(Bs),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ue(() => [
                        he(ew, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Bs),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ue(() => [
                        he(bw, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Bs),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ue(() => [
                        he(ky, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Bs),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ue(() => [
                        he(hy, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  he(
                    we(Bs),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: Ue(() => [
                        he(Iw, { brightness: e.brightness }, null, 8, [
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
  Aw = { href: "/pricing" },
  Lw = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = ee(!1)
      yt(() => {
        const s = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", s),
          Dn(() => {
            window.removeEventListener("scroll", s)
          })
      })
      const n = (s) => {
        if (s >= 4) return "text-slate-800"
        if (s == 3) return "text-slate-200"
        if (s == 2) return "text-slate-300"
        if (s == 1) return "text-slate-300"
      }
      return (s, r) => (
        te(),
        xe(
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
            g(
              "p",
              { class: M(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            g("a", Aw, [
              g(
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
  Ps = (e) => (er("data-v-e20b9d11"), (e = e()), tr(), e),
  zw = { class: "flex-col" },
  Bw = { class: "prose py-5 flex-col w-full" },
  jw = Ps(() => g("br", null, null, -1)),
  Nw = Ps(() => g("br", null, null, -1)),
  Rw = { class: "flex" },
  Fw = { class: "w-6/12" },
  Dw = ["name", "checked", "onClick"],
  Hw = { class: "w-6/12" },
  Gw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Vw = { class: "flex-col gap-4" },
  Ww = { class: "flex items-center" },
  qw = ["name", "checked", "onClick"],
  Uw = { key: 0 },
  Yw = { key: 1 },
  Kw = { class: "" },
  Xw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  Jw = { class: "flex-col" },
  Zw = { class: "flex justify-between" },
  Qw = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  ex = { class: "gap-4 mt-4", name: "pricing" },
  tx = ["value"],
  nx = ["value"],
  sx = { class: "flex gap-4", id: "leftInputs" },
  rx = { class: "flex gap-4", id: "rightInputs" },
  ax = Ps(() => g("br", null, null, -1)),
  ix = Ps(() => g("br", null, null, -1)),
  lx = Ps(() => g("br", null, null, -1)),
  ox = Ps(() => g("br", null, null, -1)),
  ux = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (F) => {
          F.preventDefault()
          const oe = "pricing"
          let V = document.getElementsByName("name")[0].value,
            Ke = document.getElementsByName("email")[0].value,
            ke = document.getElementsByName("website")[0].value,
            tt = document.getElementsByName("notes")[0].value,
            nt = document.getElementsByName("services")[0].value,
            Qt = document.getElementsByName("total")[0].value,
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
                email: Ke,
                website: ke,
                notes: tt,
                services: nt,
                total: Qt,
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
                  N = document.createElement("div")
                N.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (N.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  it.appendChild(N)
                let le = document.getElementById("leftInputs"),
                  se = document.getElementById("rightInputs")
                ;(le.style.display = "none"), (se.style.display = "none")
                let pe = document.getElementById("submitButton")
                pe.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        s = (F) => {
          if (F >= 4) return "text-emerald-500"
          if (F == 3) return "text-orange-200"
          if (F == 2) return "text-orange-500"
          if (F == 1) return "text-orange-400"
        },
        r = (F) => {
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
        l = ee({
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
        $ = me(
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
        _ = me(() => {
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
        I = () => {
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
        re = () => {
          l.value.designOverhaul.designOverhaul.enabled
            ? (l.value.designOverhaul.designOverhaul.enabled = !1)
            : (l.value.designOverhaul.designOverhaul.enabled = !0)
        },
        q = (F) => {
          F.title == "Speed"
            ? I()
            : F.title == "Security"
              ? z()
              : F.title == "Accessibility"
                ? O()
                : F.title == "Design Overhaul" && re()
        },
        G = (F) => Object.values(F.services).some((oe) => oe.enabled),
        D = ee([
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
          if (F.title === "Accessibility") return $.value
          if (F.title === "Design Overhaul") return m.value
        },
        ge = (F) => {
          if (F.title === "Speed") return _.value
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
        xe("div", zw, [
          g("div", Bw, [
            g(
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
            g(
              "p",
              { class: M(["text-center", i(n.brightness)]) },
              [
                $e(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                jw,
                Nw,
                $e(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                g(
                  "a",
                  {
                    href: "/contact",
                    class: M(["font-bold", s(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                $e(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (te(!0),
          xe(
            Je,
            null,
            hn(
              D.value,
              (V, Ke) => (
                te(),
                xe(
                  "div",
                  {
                    key: Ke,
                    class: M([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      Ce(n.brightness),
                    ]),
                  },
                  [
                    g("div", Rw, [
                      g("div", Fw, [
                        g(
                          "div",
                          {
                            class: M([
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
                                class: M([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  s(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              Dw,
                            ),
                            g("h3", null, $t(V.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      g("div", Hw, [
                        g(
                          "h3",
                          {
                            class: M([
                              "text-4xl text-bold text-right",
                              s(n.brightness),
                            ]),
                          },
                          [
                            ge(V) != Math.floor(Q(V))
                              ? (te(), xe("span", Gw, "$" + $t(ge(V)), 1))
                              : rt("", !0),
                            $e("$" + $t(Q(V)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    g(
                      "hr",
                      { class: M(["my-4 w-full", s(n.brightness)]) },
                      null,
                      2,
                    ),
                    g("div", Vw, [
                      (te(!0),
                      xe(
                        Je,
                        null,
                        hn(
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
                                g("div", Ww, [
                                  g(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: ke.title,
                                      checked: ke.enabled,
                                      onClick: (nt) =>
                                        (ke.enabled = !ke.enabled),
                                      class: M([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        s(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    qw,
                                  ),
                                  g(
                                    "p",
                                    { class: M(["", i(n.brightness)]) },
                                    [
                                      ke.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (te(),
                                          xe("b", Uw, [
                                            g("em", null, $t(ke.title), 1),
                                          ]))
                                        : (te(),
                                          xe("span", Yw, $t(ke.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                g("div", Kw, [
                                  g(
                                    "h3",
                                    {
                                      class: M([
                                        "text-bold text-right",
                                        s(n.brightness),
                                      ]),
                                    },
                                    [
                                      ke.price !=
                                      Math.floor(ke.price * V.discount)
                                        ? (te(),
                                          xe("span", Xw, "$" + $t(ke.price), 1))
                                        : rt("", !0),
                                      $e("$" + $t(ke.price * V.discount), 1),
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
          g("hr", { class: M(["my-4 w-full", s(n.brightness)]) }, null, 2),
          g("div", Jw, [
            g("div", Zw, [
              g(
                "h3",
                { class: M(["text-4xl text-bold", s(n.brightness)]) },
                " Total ",
                2,
              ),
              g(
                "h3",
                { class: M(["text-4xl text-bold", s(n.brightness)]) },
                [
                  X.value != Math.floor(X.value)
                    ? (te(), xe("span", Qw, "$" + $t(X.value), 1))
                    : rt("", !0),
                  $e("$" + $t(X.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          g("form", ex, [
            g(
              "input",
              { type: "hidden", name: "services", value: Se.value },
              null,
              8,
              tx,
            ),
            g(
              "input",
              { type: "hidden", name: "total", value: X.value },
              null,
              8,
              nx,
            ),
            g("div", sx, [
              g(
                "input",
                {
                  type: "email",
                  name: "email",
                  required: "",
                  placeholder: "Email",
                  class: M([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    r(e.brightness),
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
                  class: M([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    r(e.brightness),
                  ]),
                },
                null,
                2,
              ),
            ]),
            g("div", rx, [
              g(
                "input",
                {
                  type: "text",
                  name: "website",
                  required: "",
                  placeholder: "Website",
                  class: M([
                    "rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    r(e.brightness),
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
                  class: M([
                    "rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4",
                    r(e.brightness),
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
          g(
            "p",
            { class: M(["text-center mt-4", i(n.brightness)]) },
            [
              $e(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              ax,
              ix,
              $e(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              g(
                "a",
                { href: "/contact", class: M(["font-bold", s(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              $e(" and we can get that figured out."),
              lx,
              ox,
              $e("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  cx = bn(ux, [["__scopeId", "data-v-e20b9d11"]]),
  dx = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        te(), Ne(cx, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  fx = { class: "flex-col" },
  px = { class: "py-5 flex-col w-full" },
  hx = { id: "cta" },
  pd = {
    __name: "Contact",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          if (r >= 4) return "text-slate-800"
          if (r == 3) return "text-slate-200"
          if (r == 2) return "text-slate-300"
          if (r == 1) return "text-slate-300"
        },
        s = async (r) => {
          r.preventDefault()
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
                for (let _ = 0; _ < b.length; _++) b[_].style.display = "none"
                let $ = p.getElementsByTagName("textarea")[0]
                $.style.display = "none"
                let m = document.getElementById("submitButton")
                m.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (r, a) => (
        te(),
        xe("div", fx, [
          g("div", px, [
            g(
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
          g("form", hx, [
            g(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Name",
                class: M(["rounded p-2 w-full", r.inputClass]),
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
                class: M(["rounded p-2 w-full mt-3", r.inputClass]),
              },
              null,
              2,
            ),
            g(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: M(["rounded p-2 w-full mt-3", r.inputClass]),
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
                onClick: s,
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
  Nt =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  Rt = '</title><path d="',
  Ft = '"/></svg>',
  gx = {
    title: "Blender",
    slug: "blender",
    get svg() {
      return Nt + "Blender" + Rt + this.path + Ft
    },
    path: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",
    source: "https://www.blender.org/about/logo",
    hex: "E87D0D",
    guidelines: "https://www.blender.org/about/logo",
  },
  Rs = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return Nt + "Bootstrap" + Rt + this.path + Ft
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  vx = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return Nt + "Cloudflare" + Rt + this.path + Ft
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  mx = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return Nt + "Figma" + Rt + this.path + Ft
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  bx = {
    title: "GitHub",
    slug: "github",
    get svg() {
      return Nt + "GitHub" + Rt + this.path + Ft
    },
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    source: "https://github.com/logos",
    hex: "181717",
    guidelines: "https://github.com/logos",
  },
  yx = {
    title: "Instagram",
    slug: "instagram",
    get svg() {
      return Nt + "Instagram" + Rt + this.path + Ft
    },
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    source: "https://about.meta.com/brand/resources/instagram",
    hex: "E4405F",
    guidelines: "https://about.meta.com/brand/resources/instagram",
  },
  wx = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return Nt + "JavaScript" + Rt + this.path + Ft
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  xx = {
    title: "LinkedIn",
    slug: "linkedin",
    get svg() {
      return Nt + "LinkedIn" + Rt + this.path + Ft
    },
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    source: "https://brand.linkedin.com",
    hex: "0A66C2",
    guidelines: "https://brand.linkedin.com/policies",
  },
  Sx = {
    title: "NGINX",
    slug: "nginx",
    get svg() {
      return Nt + "NGINX" + Rt + this.path + Ft
    },
    path: "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",
    source: "https://www.nginx.com/press/",
    hex: "009639",
    guidelines: "https://www.nginx.com/press/",
  },
  Iu = {
    title: "PHP",
    slug: "php",
    get svg() {
      return Nt + "PHP" + Rt + this.path + Ft
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  _x = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return Nt + "Tailwind CSS" + Rt + this.path + Ft
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  Mu = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return Nt + "Vue.js" + Rt + this.path + Ft
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
  Pn = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return Nt + "WordPress" + Rt + this.path + Ft
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  wn = (e) => (er("data-v-16a9d0a6"), (e = e()), tr(), e),
  Ex = { class: "flex-col w-full" },
  Cx = { class: "p-5 flex-col w-full" },
  Tx = { class: "grid grid-cols-6" },
  kx = { class: "col-span-2 sm:col-span-2 md:col-span-1" },
  $x = wn(() =>
    g(
      "div",
      { class: "square-image-container rounded" },
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
  Px = { class: "flex gap-2 mt-4 justify-center items-center" },
  Ix = { class: "flex gap-2 mt-4 justify-center items-center" },
  Mx = ["href"],
  Ox = {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "100%",
    height: "100%",
  },
  Ax = ["d"],
  Lx = {
    class: "col-span-4 sm:col-span-4 md:col-span-5 prose pl-5",
    style: { "max-width": "100vw !important" },
  },
  zx = wn(() => g("li", null, "a 3D artist and animator", -1)),
  Bx = wn(() => g("li", null, "a digital and traditional painter", -1)),
  jx = wn(() =>
    g(
      "li",
      null,
      " an avid cook who loves discovering new recipes and cuisines (my favorite seasoning: tamarind paste) ",
      -1,
    ),
  ),
  Nx = wn(() =>
    g(
      "li",
      null,
      " a classically trained pianist and organist (with an infinite love for Rachmaninov, Kabalevsky, and Prokokiev) ",
      -1,
    ),
  ),
  Rx = wn(() =>
    g(
      "li",
      null,
      " a huge nerd and massive DC fan (favorite fictional characters: Nightwing and Batgirl) ",
      -1,
    ),
  ),
  Fx = wn(() => g("li", null, "a woodworker and electronic tinkerer", -1)),
  Dx = wn(() => g("li", null, "and so much more!", -1)),
  Hx = [zx, Bx, jx, Nx, Rx, Fx, Dx],
  Gx = wn(() =>
    g(
      "img",
      {
        src: "https://boardgamegeek.com/jswidget.php?username=josephhansen&numitems=10&header=1&text=none&images=medium&show=recentplays&imagesonly=1&imagepos=left&inline=1&showplaydate=1&domains%5B%5D=boardgame&imagewidget=1",
        border: "0",
      },
      null,
      -1,
    ),
  ),
  Vx = {
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
        s = (i) => {
          if (i >= 4) return "text-emerald-500"
          if (i == 3) return "text-orange-600"
          if (i == 2) return "text-orange-500"
          if (i == 1) return "text-orange-400"
        },
        r = [xx, bx, gx, yx],
        a = [
          "https://www.linkedin.com/in/josephclaytonhansen/",
          "https://www.github.com/josephclaytonhansen",
          "https://blenderartists.org/u/joseph/summary",
          "https://www.instagram.com/jhansen_art/",
        ]
      return (i, l) => (
        te(),
        xe("div", Ex, [
          g("div", Cx, [
            g("div", Tx, [
              g("div", kx, [
                $x,
                g("div", Px, [
                  g("div", Ix, [
                    (te(),
                    xe(
                      Je,
                      null,
                      hn(r, (o, f) =>
                        g(
                          "div",
                          { key: f, class: M(["flex-1", s(t.brightness)]) },
                          [
                            g(
                              "a",
                              { href: a[f] },
                              [
                                (te(),
                                xe("svg", Ox, [
                                  g("path", { d: o.path }, null, 8, Ax),
                                ])),
                              ],
                              8,
                              Mx,
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
              g("div", Lx, [
                g(
                  "h1",
                  { class: M(["text-5xl font-bold mb-0", n(t.brightness)]) },
                  " Joseph Hansen ",
                  2,
                ),
                g(
                  "h3",
                  { class: M(["text-lg", n(t.brightness)]) },
                  " Professionally... ",
                  2,
                ),
                g(
                  "p",
                  { class: M(n(t.brightness)) },
                  " I'm a full-stack web developer with a Strategic Communications degree (and a Visual Communications minor), training in design, extensive marketing experience, and a decade of web design and development experience. My specialities are WordPress and Vue, and I'm also proficient in Django, Ruby on Rails, React, and a massive slate of CMS platforms (including Drupal, Joomla, Caffeine, Shopify, and others.) ",
                  2,
                ),
                g(
                  "p",
                  { class: M(n(t.brightness)) },
                  " Have a WordPress site with an obscure theme? Not to worry, I've worked with every WordPress theme or builder under the sun: Divi, Flatsome, Avada, WP Bakery, Gutenburg, Elementor, and more. I'm experienced in JavaScript, HTML, CSS, PHP, Python, C++, Ruby, and other languages, and I'm passionate about problem-solving through code. ",
                  2,
                ),
                g(
                  "p",
                  { class: M(n(t.brightness)) },
                  " I've been working for marketing agencies for 5 years, and I have extensive freelance experience as well. I've worked with clients in a variety of industries, including healthcare, finance, real estate, and more. I've also worked with a variety of non-profits and educational institutions. ",
                  2,
                ),
                g(
                  "p",
                  { class: M(n(t.brightness)) },
                  " I love problem-solving and I'm passionate about having a good impact. I learn quickly, adapt rapidly, and fit into a team instantaneously. ",
                  2,
                ),
                g(
                  "h3",
                  { class: M(["text-lg", n(t.brightness)]) },
                  " Personally... ",
                  2,
                ),
                g(
                  "p",
                  { class: M(n(t.brightness)) },
                  " If that section above bored you, me too. Luckily, there's a lot more to me than what I do for work. I'd call myself an artist, and that covers a lot of things I love to do. I'm: ",
                  2,
                ),
                g("ul", { class: M(n(t.brightness)) }, Hx, 2),
                g(
                  "p",
                  { class: M(n(t.brightness)) },
                  " I'm also passionate about social justice, advocacy, and equality. I volunteer extensively (including as a crisis counselor for the Trevor Project), spent many years as the assistant director of a regional non-profit organization, and I'm always looking for ways to make the world a better place. ",
                  2,
                ),
                g(
                  "h3",
                  { class: M(["text-lg", n(t.brightness)]) },
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
                Gx,
              ]),
            ]),
          ]),
        ])
      )
    },
  },
  Wx = bn(Vx, [["__scopeId", "data-v-16a9d0a6"]]),
  qx = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  Ux = { class: "py-5 flex-col w-full" },
  Yx = { class: "prose" },
  Kx = ["onMouseover", "onClick"],
  Xx = { class: "image-container" },
  Jx = ["src", "alt"],
  Zx = { class: "flex gap-2 items-center" },
  Qx = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  e5 = ["d"],
  t5 = {
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
        s = (l) => {
          if (l >= 4) return "text-emerald-500"
          if (l == 3) return "text-orange-600"
          if (l == 2) return "text-orange-500"
          if (l == 1) return "text-orange-400"
        },
        r = ee([
          {
            icons: [Pn, Iu, mx],
            title: "BlenderNation Bazaar",
            image: Qi,
            link: "/portfolio/bazaar",
          },
          {
            icons: [Mu, Sx, vx],
            title: "OKC South Stake",
            image: el,
            link: "/portfolio/okc-south-stake",
          },
        ]),
        a = ee([
          {
            icons: [Pn, wx],
            title: "Build On Your Land",
            image: tl,
            link: "/portfolio/build-on-your-land",
          },
          {
            icons: [Pn, Iu],
            title: "Stuart Pipe and Hose",
            image: nl,
            link: "/portfolio/stuart-pipe",
          },
          {
            icons: [Pn, Rs],
            title: "Atlanta Floor One",
            image: sl,
            link: "/portfolio/atlanta-floor-one",
          },
          {
            icons: [Pn, Rs],
            title: "Swim State Pool",
            image: rl,
            link: "/portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [Mu, _x],
            image: al,
            link: "/portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [Pn, Rs],
            image: il,
            link: "/portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [Pn, Rs],
            image: ll,
            link: "/portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [Pn, Rs],
            image: ol,
            link: "/portfolio/aris-search",
          },
        ]),
        i = ee(null)
      return (l, o) => (
        te(),
        xe("div", qx, [
          g("div", Ux, [
            g("span", Yx, [
              g(
                "h2",
                {
                  class: M([
                    "text-5xl text-center text-semibold",
                    n(t.brightness),
                  ]),
                },
                " Web Portfolio ",
                2,
              ),
              g(
                "p",
                { class: M(["text-center", n(t.brightness)]) },
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. ",
                2,
              ),
              g(
                "h3",
                { class: M(["text-2xl text-center", n(t.brightness)]) },
                " Check out these full sites I designed and developed ",
                2,
              ),
            ]),
          ]),
          (te(!0),
          xe(
            Je,
            null,
            hn(
              [r.value, a.value],
              (f) => (
                te(),
                xe(
                  "div",
                  {
                    class: M([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": f == r.value,
                        "lg:grid-cols-3 mt-4": f == a.value,
                      },
                    ]),
                  },
                  [
                    (te(!0),
                    xe(
                      Je,
                      null,
                      hn(
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
                              style: Yr({
                                opacity:
                                  i.value === c.title || i.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              g("div", Xx, [
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
                                  Jx,
                                ),
                              ]),
                              g("div", null, [
                                g("div", null, [
                                  g(
                                    "div",
                                    {
                                      class: M([
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
                                            class: M([
                                              "text-xl m-0 p-0",
                                              s(t.brightness),
                                            ]),
                                          },
                                          $t(c.title),
                                          3,
                                        ),
                                      ]),
                                      g("div", Zx, [
                                        (te(!0),
                                        xe(
                                          Je,
                                          null,
                                          hn(
                                            c.icons,
                                            (p, v) => (
                                              te(),
                                              xe(
                                                "div",
                                                {
                                                  key: v,
                                                  class: M([
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
                                                  xe("svg", Qx, [
                                                    g(
                                                      "path",
                                                      { d: p.path },
                                                      null,
                                                      8,
                                                      e5,
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
                            Kx,
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
  n5 = bn(t5, [["__scopeId", "data-v-21dbf9f7"]]),
  s5 = g(
    "h3",
    { class: "text-2xl font-semibold text-inherit" },
    " The vision: a one-stop shop for Blender users ",
    -1,
  ),
  r5 = g(
    "p",
    { class: "text-inherit" },
    " When Bart from BlenderNation approached me with the idea for Bazaar, I was pumped. Nothing quite like Bazaar existed at the time: one central hub for Blender users to find tutorials, resources, assets, and add-ons. I was heavily involved with every step of the process of making the Bazaar come to life, and the end result is fantastic. ",
    -1,
  ),
  a5 = ["src"],
  i5 = g("figcaption", null, "Bazaar's planning board", -1),
  l5 = { class: "text-inherit" },
  o5 = ["src"],
  u5 = g("figcaption", null, "My approved design for the Bazaar", -1),
  c5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Tight deadlines and high stakes ",
    -1,
  ),
  d5 = g(
    "p",
    null,
    " When Bart approached me, there was about a month until the next Blender Conference, a massive community event that he hoped to present Bazaar at. At this point, the Bazaar was just an idea- there wasn't even a logo yet. Long story short, Bazaar launched successfully with time to spare. This project shows I can work well under pressure and with tight deadlines to achieve exactly what a client needs. ",
    -1,
  ),
  f5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Security: keeping the Bazaar safe ",
    -1,
  ),
  p5 = g(
    "p",
    null,
    " I've implemented powerful security guardrails across Bazaar, ranging from DDoS protection to a comprehensive firewall. I'm proud to report that my security measures are currently preventing around 4500 attacks a month, with that number growing larger all the time. ",
    -1,
  ),
  h5 = "https://bazaar.blendernation.com",
  g5 = "BlenderNation Bazaar",
  v5 = {
    __name: "Bazaar",
    setup(e) {
      const t = ee([Qi, Z2, Q2, ey, ty]),
        n = ee([
          "Bazaar homepage",
          "Bazaar collection page",
          "Bazaar user page",
          "Bazaar search results",
          "Bazaar product listing",
        ]),
        s = {
          planning:
            "https://images.josephhansen.dev/uploads/file2024-02-0619-1707270927524.webp",
          figma:
            "https://images.josephhansen.dev/uploads/file2024-02-0619-1707271001166.webp",
        }
      return (r, a) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: h5,
            title: g5,
            brightness: r.brightness,
          },
          {
            default: Ue(() => [
              Vt(r.$slots, "default", {}, () => [
                s5,
                r5,
                g("figure", null, [
                  g(
                    "img",
                    { src: s.planning, class: "rounded-xl" },
                    null,
                    8,
                    a5,
                  ),
                  i5,
                ]),
                g("p", l5, [
                  $e(
                    " With the above Figma document as a guide from Bart, I dove into both design and the backend details for managing the complex data the site would be handling. Bart wanted to do this through WordPress, and I was able to use my expertise to recommend AdvancedCustomFields to do a lot of the major data-wrangling. I also built the theme from scratch, to make sure it was as simplified and lightweight as possible while still providing beautiful, responsive, and functional results. ",
                  ),
                  g("figure", null, [
                    g(
                      "img",
                      { src: s.figma, class: "rounded-xl" },
                      null,
                      8,
                      o5,
                    ),
                    u5,
                  ]),
                ]),
                c5,
                d5,
                f5,
                p5,
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
  m5 = g(
    "p",
    { class: "text-inherit" },
    ' To describe this project as "massive" would be an understatement. What at first glance appears to be a simple informational website is in fact a comprehensive hub of information, resources, and tools for the members of a regional church. This site is a gigantic, sprawling, and complex project with dozens of custom tools, subdomains, features, and more. ',
    -1,
  ),
  b5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Everything in a single web app ",
    -1,
  ),
  y5 = g(
    "p",
    { class: "text-inherit" },
    " I've designed, built, and developed everything on this site. And I do mean everything. This site has congregation subpages with fully functional and collaborative calendars: ",
    -1,
  ),
  w5 = g(
    "img",
    {
      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277670567.webp",
      alt: "Example of a congregation subpage calendar",
      class: "rounded",
    },
    null,
    -1,
  ),
  x5 = g(
    "p",
    { class: "text-inherit" },
    " This web application also has a fully functional CMS and blog system, scheduling systems, complex communication tools, an internal email system, user roles and restricted access, and more. The scope of this site is frankly staggering. If you can imagine a tool an organization might need, it's somewhere on this site. And it's all built with the same care, attention to detail, and quality that I put into every project I work on. ",
    -1,
  ),
  S5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Built to take a beating",
    -1,
  ),
  _5 = g(
    "p",
    { class: "text-inherit" },
    " This site is built to handle a massive amount of traffic and to be as fast as possible. I've optimized it for speed. It's fully responsive, accessible, and built with the latest technologies. It's a site that's built to last, and to be a valuable resource for the members of the church it serves. ",
    -1,
  ),
  E5 = g(
    "p",
    { class: "text-inherit" },
    " Additionally, this site has advanced security guardrails, DDoS protection, bot monitoring and filtering, extremely strong database encryption, MFA/TFA protection, and other essential security features for a large organizational website. I've extensively tested the security of this site, and I'm proud to say it's rock-solid. ",
    -1,
  ),
  C5 = g(
    "p",
    { class: "text-inherit" },
    " If you need a web application that's built to last, and built to be a valuable resource for your organization, I'm the developer you need. Let me build your site. ",
    -1,
  ),
  T5 = "https://okcsouthstake.org",
  k5 = "OKC South Stake",
  $5 = {
    __name: "OkcSouthStake",
    setup(e) {
      const t = ee([
          el,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277285248.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277310460.webp",
        ]),
        n = ee([
          "OKC South Stake homepage (light)",
          "OKC South Stake congregation subpage",
          "OKC South Stake homepage (dark)",
        ])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: T5,
            title: k5,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [
              Vt(s.$slots, "default", {}, () => [
                m5,
                b5,
                y5,
                w5,
                x5,
                S5,
                _5,
                E5,
                C5,
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
  P5 = g(
    "p",
    { class: "text-inherit" },
    " Aris Search needed a powerful, functional, site to connect recruiters and job applicants. In addition to a clean, professional design with excellent SEO, I developed everything they needed on the backend to handle their data. The result is a site that's fast, functional, and easy to use. ",
    -1,
  ),
  I5 = "https://arissearch.com//",
  M5 = "Aris Search",
  O5 = {
    __name: "ArisSearch",
    setup(e) {
      const t = ee([ol, ay]),
        n = ee(["Aris Search homepage", "Aris Search image effects"])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: I5,
            title: M5,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [Vt(s.$slots, "default", {}, () => [P5])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  A5 = g(
    "p",
    { class: "text-inherit" },
    " Atlanta Floor One needed a new website to replace their old, non-functional one. I built them a fast, clean, responsive new site using WordPress. They was extremely happy with the results. ",
    -1,
  ),
  L5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Clean and professional with an unusual color palette ",
    -1,
  ),
  z5 = g(
    "p",
    { class: "text-inherit" },
    " This site was challenging from a design perspective. Atlanta Floor One's logo colors (light green and very dark brown) look great at a small scale, but initial drafts of their site proved overwhelming. Eventually, I added a lighter brown that was more neutral and used the green as an accent color. I also relied heavily on whitespace, giving the colors room to breathe. The result is a professional and unique site. ",
    -1,
  ),
  B5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Parallax architectural sketch backgrounds ",
    -1,
  ),
  j5 = g(
    "p",
    { class: "text-inherit" },
    ' With large spans of whitespace, the site ran the risk of veering into "boring" territory. To combat this, I decided to use architectural sketches as subtle background overlays. Adding a parallax effect to these sketches gave the site a sense of depth and movement, without overwhelming the user. Atlanta Floor One was delighted with the final result. ',
    -1,
  ),
  N5 = "https://floorsfloors.com/",
  R5 = "Atlanta Floor One",
  F5 = {
    __name: "AtlantaFloorOne",
    setup(e) {
      const t = ee([sl, ny, sy, ry]),
        n = ee([
          "Atlanta Floors One homepage",
          "Atlanta Floors One testimonial section",
          "Contact page (featuring parallax architectural sketch background)",
          "Atlanta Floors One image section",
        ])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: N5,
            title: R5,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [
              Vt(s.$slots, "default", {}, () => [A5, L5, z5, B5, j5]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  D5 = g(
    "p",
    { class: "text-inherit" },
    " Build On Your Land is one of my favorite sites I've ever built. From dynamic showroom hours developed in JavaScript, to parallax home design backgrounds, the site is full of my best work. The client needed a beautiful, responsive site, and they loved what I built for them. ",
    -1,
  ),
  H5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Dynamic showroom hours",
    -1,
  ),
  G5 = g(
    "p",
    { class: "text-inherit" },
    ' Build on Your Land wanted customers to be able to tell at a glance if the showroom was currently open. The JavaScript/PHP solution I built is simple- the hours show "Open" or "Closed" based on the current time and day- but extremely effective. They were thrilled with the result. ',
    -1,
  ),
  V5 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Design elements",
    -1,
  ),
  W5 = g(
    "p",
    { class: "text-inherit" },
    " This site is full of design elements that make it stand out. The parallax home design sketch backgrounds add a unique touch and make the site memorable. ",
    -1,
  ),
  q5 = g(
    "img",
    {
      src: "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
      alt: "Parallax home design sketch backgrounds",
      class: "rounded",
    },
    null,
    -1,
  ),
  U5 = g(
    "p",
    { class: "text-inherit" },
    " Every part of the site is packed with care and intention- it shows my design abilities at their best. ",
    -1,
  ),
  Y5 = "https://www.buildonyourlandllc.com/",
  K5 = "Build on Your Land",
  X5 = {
    __name: "BuildOnYourLand",
    setup(e) {
      const t = ee([
          tl,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275933220.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275982586.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275995615.webp",
        ]),
        n = ee([])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: Y5,
            title: K5,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [
              Vt(s.$slots, "default", {}, () => [D5, H5, G5, V5, W5, q5, U5]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  J5 = g(
    "p",
    { class: "text-inherit" },
    " I built a website for Stehl Family Dental, a small dental practice looking to expand their business. Their site needed to make it easy for potential customers to understand what was available and the benefits of choosing them. I built them a professional and engaging site that presents all the important information in a well-designed, easy-to-navigate format. ",
    -1,
  ),
  Z5 = "https://stehlfamilydental.com/",
  Q5 = "Stuart Hose and Pipe",
  e3 = {
    __name: "StehlFamilyDental",
    setup(e) {
      const t = ee([ll]),
        n = ee(["Stehl Family Dental homepage"])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: Z5,
            title: Q5,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [Vt(s.$slots, "default", {}, () => [J5])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  t3 = g(
    "p",
    { class: "text-inherit" },
    " Tub Boys didn't have a website, and they were hoping to expand their business through a web presence. I built them a site that exceeded their expectations and helped them grow their business. ",
    -1,
  ),
  n3 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " Using design to present minimal text in a compelling way ",
    -1,
  ),
  s3 = g(
    "p",
    { class: "text-inherit" },
    ' They had very little copy, so it was my task to make their site engaging and feel full with what I had to work with. I took the opporunity to use large, engaging, typography as well as swooshing lines that invoke a sense of movement. The result feels professional, while still invoking the "fun" energy the client requested. ',
    -1,
  ),
  r3 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    "Image comparison sliders",
    -1,
  ),
  a3 = g(
    "img",
    {
      src: "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
      class: "rounded",
    },
    null,
    -1,
  ),
  i3 = g(
    "p",
    { class: "text-inherit" },
    " Tub Boys wanted to be able to showcase their work with before and after images. I devloped a custom JavaScript solution for interactive image sliders that integrated nicely with their WordPress platform. ",
    -1,
  ),
  l3 = "https://tub-boys.com/",
  o3 = "Tub Boys",
  u3 = {
    __name: "TubBoys",
    setup(e) {
      const t = ee([
          il,
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274374594.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274402279.webp",
        ]),
        n = ee(["Tub Boys homepage"])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: l3,
            title: o3,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [
              Vt(s.$slots, "default", {}, () => [t3, n3, s3, r3, a3, i3]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  c3 = g(
    "p",
    { class: "text-inherit" },
    " Stuart Pipe Co. presented a unique challenge: they needed a site that matched extremely precise branding requirements from their parent company, while still being clean, professional, and appealing. I built and designed a site that met all of their requirements, and they were extremely happy with the results. ",
    -1,
  ),
  d3 = "https://stuarthose.com/",
  f3 = "Stuart Hose and Pipe",
  p3 = {
    __name: "StuartPipeAndHose",
    setup(e) {
      const t = ee([
          nl,
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275652278.webp",
          "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275668557.webp",
        ]),
        n = ee(["Stuart Hose and Pipe homepage"])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: d3,
            title: f3,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [Vt(s.$slots, "default", {}, () => [c3])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  h3 = g(
    "p",
    { class: "text-inherit" },
    " Swim State Pool Services needed a website to help them grow their business. I built them a site that was both professional and engaging, helping them to attract new customers and grow their business. They loved the results, which were a massive upgrade from their existing site. ",
    -1,
  ),
  g3 = "https://swimstatepoolservice.com/",
  v3 = "Swim State Pool",
  m3 = {
    __name: "SwimStatePool",
    setup(e) {
      const t = ee([rl]),
        n = ee(["Swim State Pool Services homepage"])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: g3,
            title: v3,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [Vt(s.$slots, "default", {}, () => [h3])]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  b3 = g(
    "h3",
    { class: "text-2xl font-bold text-inherit" },
    " A lightning-fast, responsive, accessible site ",
    -1,
  ),
  y3 = g(
    "p",
    { class: "text-inherit" },
    " I built this site with care and pride- it's showcasing my abilities, after all. To that end, I've optimized it for speed to the max. This site scores 99/100 on Google's Page Speed test, a score so rare it's essentially mythical. This site is also highly responsive and features five distinct color themes for perfect user satisfication (check out the header to change them!). ",
    -1,
  ),
  w3 = g(
    "p",
    { class: "text-inherit" },
    " I've built, designed, and developed every part of this site. I use Vue as the JavaScript framework, with Vite, Node.js, Express, MongoDB, and other technologies to make it not just work, but excel. All the images are served in blazing-fast, modern, formats like WebP, and the site is fully accessible, with ARIA roles and other accessibility features. ",
    -1,
  ),
  x3 = g(
    "p",
    { class: "text-inherit" },
    " Looking for a site that will blow your customer's minds? I make those. Let me build yours. ",
    -1,
  ),
  S3 = "/",
  _3 = "josephhansen.dev",
  E3 = {
    __name: "JosephHansenDev",
    setup(e) {
      const t = ee([al]),
        n = ee(["This site's homepage"])
      return (s, r) => (
        te(),
        Ne(
          Zt,
          {
            images: t.value,
            captions: n.value,
            link: S3,
            title: _3,
            brightness: s.brightness,
          },
          {
            default: Ue(() => [
              Vt(s.$slots, "default", {}, () => [b3, y3, w3, x3]),
            ]),
            _: 3,
          },
          8,
          ["images", "captions", "brightness"],
        )
      )
    },
  },
  C3 = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  T3 = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  k3 = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = ee(1),
        n = e,
        s = (l) => {
          ;(t.value = Number(l)),
            window.localStorage.setItem("brightness", t.value)
        },
        r = {
          "okc-south-stake": $5,
          "aris-search": O5,
          "atlanta-floor-one": F5,
          "build-on-your-land": X5,
          "stehl-family-dental": e3,
          "tub-boys": u3,
          "stuart-pipe": p3,
          "swim-state-pool": m3,
          "josephhansen-dev": E3,
          bazaar: v5,
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
        else if (n.component in r) {
          let o = n.component.replace(/-/g, " ")
          ;(i.title = `josephhansen.dev | web developer/designer | ${o}`),
            (i.meta[1].content = `josephhansen.dev | web developer/designer | ${o}`),
            (i.meta[6].content = `josephhansen.dev | web developer/designer | ${o}`),
            (i.meta[4].content = `https://josephhansen.dev/portfolio/${n.component}`),
            (i.meta[9].content = `https://josephhansen.dev/portfolio/${n.component}`)
        }
      })
      const i = Qs({
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
        vn(() => {
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
                  class: M([["w-dvw", a.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  he(J1, { "onUpdate:brightness": s }),
                  g("div", C3, [
                    e.component == "pricing"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 0,
                            class: M([
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
                            he(dx, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : rt("", !0),
                    e.component == "contact"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 1,
                            class: M([
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
                      : rt("", !0),
                    e.component == "portfolio"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 2,
                            class: M([
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
                            he(n5, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : rt("", !0),
                    e.component == "about-me"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 3,
                            class: M([
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
                            he(Wx, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : rt("", !0),
                    e.component in r
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 4,
                            class: M([
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
                            Ne(
                              lg(r[e.component]),
                              { brightness: t.value },
                              null,
                              8,
                              ["brightness"],
                            )),
                          ],
                          2,
                        ))
                      : rt("", !0),
                    e.component == "home"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 5,
                            class: M([
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
                      : rt("", !0),
                  ]),
                  g("div", T3, [
                    e.component == "home"
                      ? (te(),
                        xe(
                          "div",
                          {
                            key: 0,
                            class: M([
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
                            he(Ow, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : rt("", !0),
                  ]),
                ],
                2,
              ),
              he(Lw, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  $3 = bn(k3, [["__scopeId", "data-v-7c607880"]]),
  cl = [
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
cl.map((e) => e.path)
cl.forEach((e) => {
  e.component = $3
})
const P3 = o1({ history: Em(), routes: cl }),
  hd = Ev(Pv)
hd.use(P3)
hd.mount("#app")
