;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s)
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const l = {}
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    )
  }
  function r(s) {
    if (s.ep) return
    s.ep = !0
    const l = n(s)
    fetch(s.href, l)
  }
})()
/**
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ql(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const ze = {},
  rr = [],
  jt = () => {},
  Q0 = () => !1,
  ws = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Wl = (e) => e.startsWith("onUpdate:"),
  dt = Object.assign,
  Vl = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  eh = Object.prototype.hasOwnProperty,
  Me = (e, t) => eh.call(e, t),
  ve = Array.isArray,
  sr = (e) => xs(e) === "[object Map]",
  Ii = (e) => xs(e) === "[object Set]",
  be = (e) => typeof e == "function",
  nt = (e) => typeof e == "string",
  dr = (e) => typeof e == "symbol",
  qe = (e) => e !== null && typeof e == "object",
  Oi = (e) => (qe(e) || be(e)) && be(e.then) && be(e.catch),
  Ri = Object.prototype.toString,
  xs = (e) => Ri.call(e),
  th = (e) => xs(e).slice(8, -1),
  Ti = (e) => xs(e) === "[object Object]",
  Gl = (e) =>
    nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  as = ql(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  _s = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  nh = /-(\w)/g,
  Xt = _s((e) => e.replace(nh, (t, n) => (n ? n.toUpperCase() : ""))),
  rh = /\B([A-Z])/g,
  hr = _s((e) => e.replace(rh, "-$1").toLowerCase()),
  ks = _s((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ul = _s((e) => (e ? `on${ks(e)}` : "")),
  kn = (e, t) => !Object.is(e, t),
  os = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  hs = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  kl = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Ao
const Ni = () =>
  Ao ||
  (Ao =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function Ul(e) {
  if (ve(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = nt(r) ? oh(r) : Ul(r)
      if (s) for (const l in s) t[l] = s[l]
    }
    return t
  } else if (nt(e) || qe(e)) return e
}
const sh = /;(?![^(]*\))/g,
  lh = /:([^]+)/,
  ah = /\/\*[^]*?\*\//g
function oh(e) {
  const t = {}
  return (
    e
      .replace(ah, "")
      .split(sh)
      .forEach((n) => {
        if (n) {
          const r = n.split(lh)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function M(e) {
  let t = ""
  if (nt(e)) t = e
  else if (ve(e))
    for (let n = 0; n < e.length; n++) {
      const r = M(e[n])
      r && (t += r + " ")
    }
  else if (qe(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const ih =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  uh = ql(ih)
function ji(e) {
  return !!e || e === ""
}
const St = (e) =>
    nt(e)
      ? e
      : e == null
        ? ""
        : ve(e) || (qe(e) && (e.toString === Ri || !be(e.toString)))
          ? JSON.stringify(e, Li, 2)
          : String(e),
  Li = (e, t) =>
    t && t.__v_isRef
      ? Li(e, t.value)
      : sr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], l) => ((n[cl(r, l) + " =>"] = s), n),
              {},
            ),
          }
        : Ii(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => cl(n)) }
          : dr(t)
            ? cl(t)
            : qe(t) && !ve(t) && !Ti(t)
              ? String(t)
              : t,
  cl = (e, t = "") => {
    var n
    return dr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Dt
class ch {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Dt),
      !t && Dt && (this.index = (Dt.scopes || (Dt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Dt
      try {
        return (Dt = this), t()
      } finally {
        Dt = n
      }
    }
  }
  on() {
    Dt = this
  }
  off() {
    Dt = this.parent
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
function fh(e, t = Dt) {
  t && t.active && t.effects.push(e)
}
function dh() {
  return Dt
}
let On
class Kl {
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
      fh(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Ln()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (hh(n.computed), this._dirtyLevel >= 2)) break
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Fn()
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = xn,
      n = On
    try {
      return (xn = !0), (On = this), this._runnings++, Io(this), this.fn()
    } finally {
      Oo(this), this._runnings--, (On = n), (xn = t)
    }
  }
  stop() {
    var t
    this.active &&
      (Io(this),
      Oo(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function hh(e) {
  return e.value
}
function Io(e) {
  e._trackId++, (e._depsLength = 0)
}
function Oo(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Fi(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Fi(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let xn = !0,
  $l = 0
const Bi = []
function Ln() {
  Bi.push(xn), (xn = !1)
}
function Fn() {
  const e = Bi.pop()
  xn = e === void 0 ? !0 : e
}
function Yl() {
  $l++
}
function Xl() {
  for ($l--; !$l && El.length; ) El.shift()()
}
function Di(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Fi(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const El = []
function Hi(e, t, n) {
  Yl()
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel
      ;(r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger())
    }
  zi(e), Xl()
}
function zi(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), El.push(t.scheduler))
}
const qi = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Sl = new WeakMap(),
  Rn = Symbol(""),
  Cl = Symbol("")
function Pt(e, t, n) {
  if (xn && On) {
    let r = Sl.get(e)
    r || Sl.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = qi(() => r.delete(n)))), Di(On, s)
  }
}
function nn(e, t, n, r, s, l) {
  const i = Sl.get(e)
  if (!i) return
  let u = []
  if (t === "clear") u = [...i.values()]
  else if (n === "length" && ve(e)) {
    const f = Number(r)
    i.forEach((h, d) => {
      ;(d === "length" || (!dr(d) && d >= f)) && u.push(h)
    })
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        ve(e)
          ? Gl(n) && u.push(i.get("length"))
          : (u.push(i.get(Rn)), sr(e) && u.push(i.get(Cl)))
        break
      case "delete":
        ve(e) || (u.push(i.get(Rn)), sr(e) && u.push(i.get(Cl)))
        break
      case "set":
        sr(e) && u.push(i.get(Rn))
        break
    }
  Yl()
  for (const f of u) f && Hi(f, 2)
  Xl()
}
const gh = ql("__proto__,__v_isRef,__isVue"),
  Wi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(dr),
  ),
  Ro = ph()
function ph() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = Re(this)
        for (let l = 0, i = this.length; l < i; l++) Pt(r, "get", l + "")
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(Re)) : s
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Ln(), Yl()
        const r = Re(this)[t].apply(this, n)
        return Xl(), Fn(), r
      }
    }),
    e
  )
}
function vh(e) {
  const t = Re(this)
  return Pt(t, "has", e), t.hasOwnProperty(e)
}
class Vi {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._shallow = n)
  }
  get(t, n, r) {
    const s = this._isReadonly,
      l = this._shallow
    if (n === "__v_isReactive") return !s
    if (n === "__v_isReadonly") return s
    if (n === "__v_isShallow") return l
    if (n === "__v_raw")
      return r === (s ? (l ? Mh : Yi) : l ? Ki : Ui).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = ve(t)
    if (!s) {
      if (i && Me(Ro, n)) return Reflect.get(Ro, n, r)
      if (n === "hasOwnProperty") return vh
    }
    const u = Reflect.get(t, n, r)
    return (dr(n) ? Wi.has(n) : gh(n)) || (s || Pt(t, "get", n), l)
      ? u
      : vt(u)
        ? i && Gl(n)
          ? u
          : u.value
        : qe(u)
          ? s
            ? Ji(u)
            : Fr(u)
          : u
  }
}
class Gi extends Vi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let l = t[n]
    if (!this._shallow) {
      const f = or(l)
      if (
        (!gs(r) && !or(r) && ((l = Re(l)), (r = Re(r))),
        !ve(t) && vt(l) && !vt(r))
      )
        return f ? !1 : ((l.value = r), !0)
    }
    const i = ve(t) && Gl(n) ? Number(n) < t.length : Me(t, n),
      u = Reflect.set(t, n, r, s)
    return (
      t === Re(s) && (i ? kn(r, l) && nn(t, "set", n, r) : nn(t, "add", n, r)),
      u
    )
  }
  deleteProperty(t, n) {
    const r = Me(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && r && nn(t, "delete", n, void 0), s
  }
  has(t, n) {
    const r = Reflect.has(t, n)
    return (!dr(n) || !Wi.has(n)) && Pt(t, "has", n), r
  }
  ownKeys(t) {
    return Pt(t, "iterate", ve(t) ? "length" : Rn), Reflect.ownKeys(t)
  }
}
class bh extends Vi {
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
const mh = new Gi(),
  yh = new bh(),
  wh = new Gi(!0),
  Jl = (e) => e,
  $s = (e) => Reflect.getPrototypeOf(e)
function Zr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = Re(e),
    l = Re(t)
  n || (kn(t, l) && Pt(s, "get", t), Pt(s, "get", l))
  const { has: i } = $s(s),
    u = r ? Jl : n ? ea : Ar
  if (i.call(s, t)) return u(e.get(t))
  if (i.call(s, l)) return u(e.get(l))
  e !== s && e.get(t)
}
function Qr(e, t = !1) {
  const n = this.__v_raw,
    r = Re(n),
    s = Re(e)
  return (
    t || (kn(e, s) && Pt(r, "has", e), Pt(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function es(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Pt(Re(e), "iterate", Rn), Reflect.get(e, "size", e)
  )
}
function To(e) {
  e = Re(e)
  const t = Re(this)
  return $s(t).has.call(t, e) || (t.add(e), nn(t, "add", e, e)), this
}
function No(e, t) {
  t = Re(t)
  const n = Re(this),
    { has: r, get: s } = $s(n)
  let l = r.call(n, e)
  l || ((e = Re(e)), (l = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), l ? kn(t, i) && nn(n, "set", e, t) : nn(n, "add", e, t), this
  )
}
function jo(e) {
  const t = Re(this),
    { has: n, get: r } = $s(t)
  let s = n.call(t, e)
  s || ((e = Re(e)), (s = n.call(t, e))), r && r.call(t, e)
  const l = t.delete(e)
  return s && nn(t, "delete", e, void 0), l
}
function Lo() {
  const e = Re(this),
    t = e.size !== 0,
    n = e.clear()
  return t && nn(e, "clear", void 0, void 0), n
}
function ts(e, t) {
  return function (r, s) {
    const l = this,
      i = l.__v_raw,
      u = Re(i),
      f = t ? Jl : e ? ea : Ar
    return (
      !e && Pt(u, "iterate", Rn), i.forEach((h, d) => r.call(s, f(h), f(d), l))
    )
  }
}
function ns(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      l = Re(s),
      i = sr(l),
      u = e === "entries" || (e === Symbol.iterator && i),
      f = e === "keys" && i,
      h = s[e](...r),
      d = n ? Jl : t ? ea : Ar
    return (
      !t && Pt(l, "iterate", f ? Cl : Rn),
      {
        next() {
          const { value: m, done: k } = h.next()
          return k
            ? { value: m, done: k }
            : { value: u ? [d(m[0]), d(m[1])] : d(m), done: k }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function gn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function xh() {
  const e = {
      get(l) {
        return Zr(this, l)
      },
      get size() {
        return es(this)
      },
      has: Qr,
      add: To,
      set: No,
      delete: jo,
      clear: Lo,
      forEach: ts(!1, !1),
    },
    t = {
      get(l) {
        return Zr(this, l, !1, !0)
      },
      get size() {
        return es(this)
      },
      has: Qr,
      add: To,
      set: No,
      delete: jo,
      clear: Lo,
      forEach: ts(!1, !0),
    },
    n = {
      get(l) {
        return Zr(this, l, !0)
      },
      get size() {
        return es(this, !0)
      },
      has(l) {
        return Qr.call(this, l, !0)
      },
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear"),
      forEach: ts(!0, !1),
    },
    r = {
      get(l) {
        return Zr(this, l, !0, !0)
      },
      get size() {
        return es(this, !0)
      },
      has(l) {
        return Qr.call(this, l, !0)
      },
      add: gn("add"),
      set: gn("set"),
      delete: gn("delete"),
      clear: gn("clear"),
      forEach: ts(!0, !0),
    }
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
      ;(e[l] = ns(l, !1, !1)),
        (n[l] = ns(l, !0, !1)),
        (t[l] = ns(l, !1, !0)),
        (r[l] = ns(l, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [_h, kh, $h, Eh] = xh()
function Zl(e, t) {
  const n = t ? (e ? Eh : $h) : e ? kh : _h
  return (r, s, l) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Me(n, s) && s in r ? n : r, s, l)
}
const Sh = { get: Zl(!1, !1) },
  Ch = { get: Zl(!1, !0) },
  Ph = { get: Zl(!0, !1) },
  Ui = new WeakMap(),
  Ki = new WeakMap(),
  Yi = new WeakMap(),
  Mh = new WeakMap()
function Ah(e) {
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
function Ih(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ah(th(e))
}
function Fr(e) {
  return or(e) ? e : Ql(e, !1, mh, Sh, Ui)
}
function Xi(e) {
  return Ql(e, !1, wh, Ch, Ki)
}
function Ji(e) {
  return Ql(e, !0, yh, Ph, Yi)
}
function Ql(e, t, n, r, s) {
  if (!qe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const l = s.get(e)
  if (l) return l
  const i = Ih(e)
  if (i === 0) return e
  const u = new Proxy(e, i === 2 ? r : n)
  return s.set(e, u), u
}
function lr(e) {
  return or(e) ? lr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function or(e) {
  return !!(e && e.__v_isReadonly)
}
function gs(e) {
  return !!(e && e.__v_isShallow)
}
function Zi(e) {
  return lr(e) || or(e)
}
function Re(e) {
  const t = e && e.__v_raw
  return t ? Re(t) : e
}
function Qi(e) {
  return hs(e, "__v_skip", !0), e
}
const Ar = (e) => (qe(e) ? Fr(e) : e),
  ea = (e) => (qe(e) ? Ji(e) : e)
class eu {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Kl(
        () => t(this._value),
        () => is(this, 1),
        () => this.dep && zi(this.dep),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = Re(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        kn(t._value, (t._value = t.effect.run())) &&
        is(t, 2),
      tu(t),
      t.effect._dirtyLevel >= 1 && is(t, 1),
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
function Oh(e, t, n = !1) {
  let r, s
  const l = be(e)
  return (
    l ? ((r = e), (s = jt)) : ((r = e.get), (s = e.set)),
    new eu(r, s, l || !s, n)
  )
}
function tu(e) {
  xn &&
    On &&
    ((e = Re(e)),
    Di(
      On,
      e.dep ||
        (e.dep = qi(() => (e.dep = void 0), e instanceof eu ? e : void 0)),
    ))
}
function is(e, t = 2, n) {
  e = Re(e)
  const r = e.dep
  r && Hi(r, t)
}
function vt(e) {
  return !!(e && e.__v_isRef === !0)
}
function me(e) {
  return nu(e, !1)
}
function Rh(e) {
  return nu(e, !0)
}
function nu(e, t) {
  return vt(e) ? e : new Th(e, t)
}
class Th {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Re(t)),
      (this._value = n ? t : Ar(t))
  }
  get value() {
    return tu(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || gs(t) || or(t)
    ;(t = n ? t : Re(t)),
      kn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Ar(t)), is(this, 2))
  }
}
function de(e) {
  return vt(e) ? e.value : e
}
const Nh = {
  get: (e, t, n) => de(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return vt(s) && !vt(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function ru(e) {
  return lr(e) ? e : new Proxy(e, Nh)
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function _n(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (l) {
    Es(l, t, n)
  }
  return s
}
function zt(e, t, n, r) {
  if (be(e)) {
    const l = _n(e, t, n, r)
    return (
      l &&
        Oi(l) &&
        l.catch((i) => {
          Es(i, t, n)
        }),
      l
    )
  }
  const s = []
  for (let l = 0; l < e.length; l++) s.push(zt(e[l], t, n, r))
  return s
}
function Es(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let l = t.parent
    const i = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const h = l.ec
      if (h) {
        for (let d = 0; d < h.length; d++) if (h[d](e, i, u) === !1) return
      }
      l = l.parent
    }
    const f = t.appContext.config.errorHandler
    if (f) {
      _n(f, null, 10, [e, i, u])
      return
    }
  }
  jh(e, n, s, r)
}
function jh(e, t, n, r = !0) {
  console.error(e)
}
let Ir = !1,
  Pl = !1
const gt = []
let Kt = 0
const ar = []
let vn = null,
  An = 0
const su = Promise.resolve()
let ta = null
function lu(e) {
  const t = ta || su
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Lh(e) {
  let t = Kt + 1,
    n = gt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = gt[r],
      l = Or(s)
    l < e || (l === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function na(e) {
  ;(!gt.length || !gt.includes(e, Ir && e.allowRecurse ? Kt + 1 : Kt)) &&
    (e.id == null ? gt.push(e) : gt.splice(Lh(e.id), 0, e), au())
}
function au() {
  !Ir && !Pl && ((Pl = !0), (ta = su.then(iu)))
}
function Fh(e) {
  const t = gt.indexOf(e)
  t > Kt && gt.splice(t, 1)
}
function Bh(e) {
  ve(e)
    ? ar.push(...e)
    : (!vn || !vn.includes(e, e.allowRecurse ? An + 1 : An)) && ar.push(e),
    au()
}
function Fo(e, t, n = Ir ? Kt + 1 : 0) {
  for (; n < gt.length; n++) {
    const r = gt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      gt.splice(n, 1), n--, r()
    }
  }
}
function ou(e) {
  if (ar.length) {
    const t = [...new Set(ar)].sort((n, r) => Or(n) - Or(r))
    if (((ar.length = 0), vn)) {
      vn.push(...t)
      return
    }
    for (vn = t, An = 0; An < vn.length; An++) vn[An]()
    ;(vn = null), (An = 0)
  }
}
const Or = (e) => (e.id == null ? 1 / 0 : e.id),
  Dh = (e, t) => {
    const n = Or(e) - Or(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function iu(e) {
  ;(Pl = !1), (Ir = !0), gt.sort(Dh)
  try {
    for (Kt = 0; Kt < gt.length; Kt++) {
      const t = gt[Kt]
      t && t.active !== !1 && _n(t, null, 14)
    }
  } finally {
    ;(Kt = 0),
      (gt.length = 0),
      ou(),
      (Ir = !1),
      (ta = null),
      (gt.length || ar.length) && iu()
  }
}
function Hh(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || ze
  let s = n
  const l = t.startsWith("update:"),
    i = l && t.slice(7)
  if (i && i in r) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: m, trim: k } = r[d] || ze
    k && (s = n.map((C) => (nt(C) ? C.trim() : C))), m && (s = n.map(kl))
  }
  let u,
    f = r[(u = ul(t))] || r[(u = ul(Xt(t)))]
  !f && l && (f = r[(u = ul(hr(t)))]), f && zt(f, e, 6, s)
  const h = r[u + "Once"]
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[u]) return
    ;(e.emitted[u] = !0), zt(h, e, 6, s)
  }
}
function uu(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const l = e.emits
  let i = {},
    u = !1
  if (!be(e)) {
    const f = (h) => {
      const d = uu(h, t, !0)
      d && ((u = !0), dt(i, d))
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  return !l && !u
    ? (qe(e) && r.set(e, null), null)
    : (ve(l) ? l.forEach((f) => (i[f] = null)) : dt(i, l),
      qe(e) && r.set(e, i),
      i)
}
function Ss(e, t) {
  return !e || !ws(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, hr(t)) || Me(e, t))
}
let Ct = null,
  Cs = null
function ps(e) {
  const t = Ct
  return (Ct = e), (Cs = (e && e.type.__scopeId) || null), t
}
function ra(e) {
  Cs = e
}
function sa() {
  Cs = null
}
function ct(e, t = Ct, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Yo(-1)
    const l = ps(t)
    let i
    try {
      i = e(...s)
    } finally {
      ps(l), r._d && Yo(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function fl(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: l,
    propsOptions: [i],
    slots: u,
    attrs: f,
    emit: h,
    render: d,
    renderCache: m,
    data: k,
    setupState: C,
    ctx: L,
    inheritAttrs: _,
  } = e
  let S, T
  const V = ps(e)
  try {
    if (n.shapeFlag & 4) {
      const X = s || r,
        K = X
      ;(S = Ut(d.call(K, X, m, l, C, k, L))), (T = f)
    } else {
      const X = t
      ;(S = Ut(
        X.length > 1 ? X(l, { attrs: f, slots: u, emit: h }) : X(l, null),
      )),
        (T = t.props ? f : zh(f))
    }
  } catch (X) {
    ;(Cr.length = 0), Es(X, e, 1), (S = ae(Nn))
  }
  let z = S
  if (T && _ !== !1) {
    const X = Object.keys(T),
      { shapeFlag: K } = z
    X.length && K & 7 && (i && X.some(Wl) && (T = qh(T, i)), (z = jn(z, T)))
  }
  return (
    n.dirs && ((z = jn(z)), (z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (z.transition = n.transition),
    (S = z),
    ps(V),
    S
  )
}
const zh = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || ws(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  qh = (e, t) => {
    const n = {}
    for (const r in e) (!Wl(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function Wh(e, t, n) {
  const { props: r, children: s, component: l } = e,
    { props: i, children: u, patchFlag: f } = t,
    h = l.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && f >= 0) {
    if (f & 1024) return !0
    if (f & 16) return r ? Bo(r, i, h) : !!i
    if (f & 8) {
      const d = t.dynamicProps
      for (let m = 0; m < d.length; m++) {
        const k = d[m]
        if (i[k] !== r[k] && !Ss(h, k)) return !0
      }
    }
  } else
    return (s || u) && (!u || !u.$stable)
      ? !0
      : r === i
        ? !1
        : r
          ? i
            ? Bo(r, i, h)
            : !0
          : !!i
  return !1
}
function Bo(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const l = r[s]
    if (t[l] !== e[l] && !Ss(n, l)) return !0
  }
  return !1
}
function Vh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const cu = "components",
  Gh = "directives"
function Uh(e, t) {
  return fu(cu, e, !0, t) || e
}
const Kh = Symbol.for("v-ndc")
function Yh(e) {
  return fu(Gh, e)
}
function fu(e, t, n = !0, r = !1) {
  const s = Ct || pt
  if (s) {
    const l = s.type
    if (e === cu) {
      const u = Hg(l, !1)
      if (u && (u === t || u === Xt(t) || u === ks(Xt(t)))) return l
    }
    const i = Do(s[e] || l[e], t) || Do(s.appContext[e], t)
    return !i && r ? l : i
  }
}
function Do(e, t) {
  return e && (e[t] || e[Xt(t)] || e[ks(Xt(t))])
}
const Xh = (e) => e.__isSuspense
function Jh(e, t) {
  t && t.pendingBranch
    ? ve(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Bh(e)
}
const Zh = Symbol.for("v-scx"),
  Qh = () => ft(Zh)
function sn(e, t) {
  return la(e, null, t)
}
const rs = {}
function rn(e, t, n) {
  return la(e, t, n)
}
function la(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: l, onTrack: i, onTrigger: u } = ze,
) {
  if (t && l) {
    const I = t
    t = (...he) => {
      I(...he), K()
    }
  }
  const f = pt,
    h = (I) => (r === !0 ? I : In(I, r === !1 ? 1 : void 0))
  let d,
    m = !1,
    k = !1
  if (
    (vt(e)
      ? ((d = () => e.value), (m = gs(e)))
      : lr(e)
        ? ((d = () => h(e)), (m = !0))
        : ve(e)
          ? ((k = !0),
            (m = e.some((I) => lr(I) || gs(I))),
            (d = () =>
              e.map((I) => {
                if (vt(I)) return I.value
                if (lr(I)) return h(I)
                if (be(I)) return _n(I, f, 2)
              })))
          : be(e)
            ? t
              ? (d = () => _n(e, f, 2))
              : (d = () => (C && C(), zt(e, f, 3, [L])))
            : (d = jt),
    t && r)
  ) {
    const I = d
    d = () => In(I())
  }
  let C,
    L = (I) => {
      C = z.onStop = () => {
        _n(I, f, 4), (C = z.onStop = void 0)
      }
    },
    _
  if (Is)
    if (
      ((L = jt),
      t ? n && zt(t, f, 3, [d(), k ? [] : void 0, L]) : d(),
      s === "sync")
    ) {
      const I = Qh()
      _ = I.__watcherHandles || (I.__watcherHandles = [])
    } else return jt
  let S = k ? new Array(e.length).fill(rs) : rs
  const T = () => {
    if (!(!z.active || !z.dirty))
      if (t) {
        const I = z.run()
        ;(r || m || (k ? I.some((he, ge) => kn(he, S[ge])) : kn(I, S))) &&
          (C && C(),
          zt(t, f, 3, [I, S === rs ? void 0 : k && S[0] === rs ? [] : S, L]),
          (S = I))
      } else z.run()
  }
  T.allowRecurse = !!t
  let V
  s === "sync"
    ? (V = T)
    : s === "post"
      ? (V = () => Et(T, f && f.suspense))
      : ((T.pre = !0), f && (T.id = f.uid), (V = () => na(T)))
  const z = new Kl(d, jt, V),
    X = dh(),
    K = () => {
      z.stop(), X && Vl(X.effects, z)
    }
  return (
    t
      ? n
        ? T()
        : (S = z.run())
      : s === "post"
        ? Et(z.run.bind(z), f && f.suspense)
        : z.run(),
    _ && _.push(K),
    K
  )
}
function eg(e, t, n) {
  const r = this.proxy,
    s = nt(e) ? (e.includes(".") ? du(r, e) : () => r[e]) : e.bind(r, r)
  let l
  be(t) ? (l = t) : ((l = t.handler), (n = t))
  const i = Br(this),
    u = la(s, l.bind(r), n)
  return i(), u
}
function du(e, t) {
  const n = t.split(".")
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function In(e, t, n = 0, r) {
  if (!qe(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((r = r || new Set()), r.has(e))) return e
  if ((r.add(e), vt(e))) In(e.value, t, n, r)
  else if (ve(e)) for (let s = 0; s < e.length; s++) In(e[s], t, n, r)
  else if (Ii(e) || sr(e))
    e.forEach((s) => {
      In(s, t, n, r)
    })
  else if (Ti(e)) for (const s in e) In(e[s], t, n, r)
  return e
}
function hu(e, t) {
  if (Ct === null) return e
  const n = Os(Ct) || Ct.proxy,
    r = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [l, i, u, f = ze] = t[s]
    l &&
      (be(l) && (l = { mounted: l, updated: l }),
      l.deep && In(i),
      r.push({
        dir: l,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: u,
        modifiers: f,
      }))
  }
  return e
}
function Pn(e, t, n, r) {
  const s = e.dirs,
    l = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const u = s[i]
    l && (u.oldValue = l[i].value)
    let f = u.dir[r]
    f && (Ln(), zt(f, n, 8, [e.el, u, e, t]), Fn())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Tt(e, t) {
  return be(e) ? dt({ name: e.name }, t, { setup: e }) : e
}
const us = (e) => !!e.type.__asyncLoader,
  gu = (e) => e.type.__isKeepAlive
function tg(e, t) {
  pu(e, "a", t)
}
function ng(e, t) {
  pu(e, "da", t)
}
function pu(e, t, n = pt) {
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
  if ((Ps(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) gu(s.parent.vnode) && rg(r, t, n, s), (s = s.parent)
  }
}
function rg(e, t, n, r) {
  const s = Ps(t, e, r, !0)
  $n(() => {
    Vl(r[t], s)
  }, n)
}
function Ps(e, t, n = pt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          Ln()
          const u = Br(n),
            f = zt(t, n, e, i)
          return u(), Fn(), f
        })
    return r ? s.unshift(l) : s.push(l), l
  }
}
const ln =
    (e) =>
    (t, n = pt) =>
      (!Is || e === "sp") && Ps(e, (...r) => t(...r), n),
  sg = ln("bm"),
  bt = ln("m"),
  vu = ln("bu"),
  lg = ln("u"),
  ag = ln("bum"),
  $n = ln("um"),
  og = ln("sp"),
  ig = ln("rtg"),
  ug = ln("rtc")
function cg(e, t = pt) {
  Ps("ec", e, t)
}
function Rr(e, t, n, r) {
  let s
  const l = n && n[r]
  if (ve(e) || nt(e)) {
    s = new Array(e.length)
    for (let i = 0, u = e.length; i < u; i++)
      s[i] = t(e[i], i, void 0, l && l[i])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, l && l[i])
  } else if (qe(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, u) => t(i, u, void 0, l && l[u]))
    else {
      const i = Object.keys(e)
      s = new Array(i.length)
      for (let u = 0, f = i.length; u < f; u++) {
        const h = i[u]
        s[u] = t(e[h], h, u, l && l[u])
      }
    }
  else s = []
  return n && (n[r] = s), s
}
const Ml = (e) => (e ? (Pu(e) ? Os(e) || e.proxy : Ml(e.parent)) : null),
  Sr = dt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ml(e.parent),
    $root: (e) => Ml(e.root),
    $emit: (e) => e.emit,
    $options: (e) => aa(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), na(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = lu.bind(e.proxy)),
    $watch: (e) => eg.bind(e),
  }),
  dl = (e, t) => e !== ze && !e.__isScriptSetup && Me(e, t),
  fg = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: l,
        accessCache: i,
        type: u,
        appContext: f,
      } = e
      let h
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
              return l[t]
          }
        else {
          if (dl(r, t)) return (i[t] = 1), r[t]
          if (s !== ze && Me(s, t)) return (i[t] = 2), s[t]
          if ((h = e.propsOptions[0]) && Me(h, t)) return (i[t] = 3), l[t]
          if (n !== ze && Me(n, t)) return (i[t] = 4), n[t]
          Al && (i[t] = 0)
        }
      }
      const d = Sr[t]
      let m, k
      if (d) return t === "$attrs" && Pt(e, "get", t), d(e)
      if ((m = u.__cssModules) && (m = m[t])) return m
      if (n !== ze && Me(n, t)) return (i[t] = 4), n[t]
      if (((k = f.config.globalProperties), Me(k, t))) return k[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: l } = e
      return dl(s, t)
        ? ((s[t] = n), !0)
        : r !== ze && Me(r, t)
          ? ((r[t] = n), !0)
          : Me(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((l[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: l,
        },
      },
      i,
    ) {
      let u
      return (
        !!n[i] ||
        (e !== ze && Me(e, i)) ||
        dl(t, i) ||
        ((u = l[0]) && Me(u, i)) ||
        Me(r, i) ||
        Me(Sr, i) ||
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
function Ho(e) {
  return ve(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Al = !0
function dg(e) {
  const t = aa(e),
    n = e.proxy,
    r = e.ctx
  ;(Al = !1), t.beforeCreate && zo(t.beforeCreate, e, "bc")
  const {
    data: s,
    computed: l,
    methods: i,
    watch: u,
    provide: f,
    inject: h,
    created: d,
    beforeMount: m,
    mounted: k,
    beforeUpdate: C,
    updated: L,
    activated: _,
    deactivated: S,
    beforeDestroy: T,
    beforeUnmount: V,
    destroyed: z,
    unmounted: X,
    render: K,
    renderTracked: I,
    renderTriggered: he,
    errorCaptured: ge,
    serverPrefetch: mt,
    expose: Ve,
    inheritAttrs: Ze,
    components: _t,
    directives: We,
    filters: Jt,
  } = t
  if ((h && hg(h, r, null), i))
    for (const ne in i) {
      const Z = i[ne]
      be(Z) && (r[ne] = Z.bind(n))
    }
  if (s) {
    const ne = s.call(n, n)
    qe(ne) && (e.data = Fr(ne))
  }
  if (((Al = !0), l))
    for (const ne in l) {
      const Z = l[ne],
        yt = be(Z) ? Z.bind(n, n) : be(Z.get) ? Z.get.bind(n, n) : jt,
        He = !be(Z) && be(Z.set) ? Z.set.bind(n) : jt,
        ht = ie({ get: yt, set: He })
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Qe) => (ht.value = Qe),
      })
    }
  if (u) for (const ne in u) bu(u[ne], r, n, ne)
  if (f) {
    const ne = be(f) ? f.call(n) : f
    Reflect.ownKeys(ne).forEach((Z) => {
      Yt(Z, ne[Z])
    })
  }
  d && zo(d, e, "c")
  function H(ne, Z) {
    ve(Z) ? Z.forEach((yt) => ne(yt.bind(n))) : Z && ne(Z.bind(n))
  }
  if (
    (H(sg, m),
    H(bt, k),
    H(vu, C),
    H(lg, L),
    H(tg, _),
    H(ng, S),
    H(cg, ge),
    H(ug, I),
    H(ig, he),
    H(ag, V),
    H($n, X),
    H(og, mt),
    ve(Ve))
  )
    if (Ve.length) {
      const ne = e.exposed || (e.exposed = {})
      Ve.forEach((Z) => {
        Object.defineProperty(ne, Z, {
          get: () => n[Z],
          set: (yt) => (n[Z] = yt),
        })
      })
    } else e.exposed || (e.exposed = {})
  K && e.render === jt && (e.render = K),
    Ze != null && (e.inheritAttrs = Ze),
    _t && (e.components = _t),
    We && (e.directives = We)
}
function hg(e, t, n = jt) {
  ve(e) && (e = Il(e))
  for (const r in e) {
    const s = e[r]
    let l
    qe(s)
      ? "default" in s
        ? (l = ft(s.from || r, s.default, !0))
        : (l = ft(s.from || r))
      : (l = ft(s)),
      vt(l)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (i) => (l.value = i),
          })
        : (t[r] = l)
  }
}
function zo(e, t, n) {
  zt(ve(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function bu(e, t, n, r) {
  const s = r.includes(".") ? du(n, r) : () => n[r]
  if (nt(e)) {
    const l = t[e]
    be(l) && rn(s, l)
  } else if (be(e)) rn(s, e.bind(n))
  else if (qe(e))
    if (ve(e)) e.forEach((l) => bu(l, t, n, r))
    else {
      const l = be(e.handler) ? e.handler.bind(n) : t[e.handler]
      be(l) && rn(s, l, e)
    }
}
function aa(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: l,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    u = l.get(t)
  let f
  return (
    u
      ? (f = u)
      : !s.length && !n && !r
        ? (f = t)
        : ((f = {}),
          s.length && s.forEach((h) => vs(f, h, i, !0)),
          vs(f, t, i)),
    qe(t) && l.set(t, f),
    f
  )
}
function vs(e, t, n, r = !1) {
  const { mixins: s, extends: l } = t
  l && vs(e, l, n, !0), s && s.forEach((i) => vs(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const u = gg[i] || (n && n[i])
      e[i] = u ? u(e[i], t[i]) : t[i]
    }
  return e
}
const gg = {
  data: qo,
  props: Wo,
  emits: Wo,
  methods: Er,
  computed: Er,
  beforeCreate: xt,
  created: xt,
  beforeMount: xt,
  mounted: xt,
  beforeUpdate: xt,
  updated: xt,
  beforeDestroy: xt,
  beforeUnmount: xt,
  destroyed: xt,
  unmounted: xt,
  activated: xt,
  deactivated: xt,
  errorCaptured: xt,
  serverPrefetch: xt,
  components: Er,
  directives: Er,
  watch: vg,
  provide: qo,
  inject: pg,
}
function qo(e, t) {
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
function pg(e, t) {
  return Er(Il(e), Il(t))
}
function Il(e) {
  if (ve(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function xt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Er(e, t) {
  return e ? dt(Object.create(null), e, t) : t
}
function Wo(e, t) {
  return e
    ? ve(e) && ve(t)
      ? [...new Set([...e, ...t])]
      : dt(Object.create(null), Ho(e), Ho(t ?? {}))
    : t
}
function vg(e, t) {
  if (!e) return t
  if (!t) return e
  const n = dt(Object.create(null), e)
  for (const r in t) n[r] = xt(e[r], t[r])
  return n
}
function mu() {
  return {
    app: null,
    config: {
      isNativeTag: Q0,
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
let bg = 0
function mg(e, t) {
  return function (r, s = null) {
    be(r) || (r = dt({}, r)), s != null && !qe(s) && (s = null)
    const l = mu(),
      i = new WeakSet()
    let u = !1
    const f = (l.app = {
      _uid: bg++,
      _component: r,
      _props: s,
      _container: null,
      _context: l,
      _instance: null,
      version: qg,
      get config() {
        return l.config
      },
      set config(h) {},
      use(h, ...d) {
        return (
          i.has(h) ||
            (h && be(h.install)
              ? (i.add(h), h.install(f, ...d))
              : be(h) && (i.add(h), h(f, ...d))),
          f
        )
      },
      mixin(h) {
        return l.mixins.includes(h) || l.mixins.push(h), f
      },
      component(h, d) {
        return d ? ((l.components[h] = d), f) : l.components[h]
      },
      directive(h, d) {
        return d ? ((l.directives[h] = d), f) : l.directives[h]
      },
      mount(h, d, m) {
        if (!u) {
          const k = ae(r, s)
          return (
            (k.appContext = l),
            m === !0 ? (m = "svg") : m === !1 && (m = void 0),
            d && t ? t(k, h) : e(k, h, m),
            (u = !0),
            (f._container = h),
            (h.__vue_app__ = f),
            Os(k.component) || k.component.proxy
          )
        }
      },
      unmount() {
        u && (e(null, f._container), delete f._container.__vue_app__)
      },
      provide(h, d) {
        return (l.provides[h] = d), f
      },
      runWithContext(h) {
        bs = f
        try {
          return h()
        } finally {
          bs = null
        }
      },
    })
    return f
  }
}
let bs = null
function Yt(e, t) {
  if (pt) {
    let n = pt.provides
    const r = pt.parent && pt.parent.provides
    r === n && (n = pt.provides = Object.create(r)), (n[e] = t)
  }
}
function ft(e, t, n = !1) {
  const r = pt || Ct
  if (r || bs) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : bs._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && be(t) ? t.call(r && r.proxy) : t
  }
}
function yg(e, t, n, r = !1) {
  const s = {},
    l = {}
  hs(l, As, 1), (e.propsDefaults = Object.create(null)), yu(e, t, s, l)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : Xi(s)) : e.type.props ? (e.props = s) : (e.props = l),
    (e.attrs = l)
}
function wg(e, t, n, r) {
  const {
      props: s,
      attrs: l,
      vnode: { patchFlag: i },
    } = e,
    u = Re(s),
    [f] = e.propsOptions
  let h = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps
      for (let m = 0; m < d.length; m++) {
        let k = d[m]
        if (Ss(e.emitsOptions, k)) continue
        const C = t[k]
        if (f)
          if (Me(l, k)) C !== l[k] && ((l[k] = C), (h = !0))
          else {
            const L = Xt(k)
            s[L] = Ol(f, u, L, C, e, !1)
          }
        else C !== l[k] && ((l[k] = C), (h = !0))
      }
    }
  } else {
    yu(e, t, s, l) && (h = !0)
    let d
    for (const m in u)
      (!t || (!Me(t, m) && ((d = hr(m)) === m || !Me(t, d)))) &&
        (f
          ? n &&
            (n[m] !== void 0 || n[d] !== void 0) &&
            (s[m] = Ol(f, u, m, void 0, e, !0))
          : delete s[m])
    if (l !== u) for (const m in l) (!t || !Me(t, m)) && (delete l[m], (h = !0))
  }
  h && nn(e, "set", "$attrs")
}
function yu(e, t, n, r) {
  const [s, l] = e.propsOptions
  let i = !1,
    u
  if (t)
    for (let f in t) {
      if (as(f)) continue
      const h = t[f]
      let d
      s && Me(s, (d = Xt(f)))
        ? !l || !l.includes(d)
          ? (n[d] = h)
          : ((u || (u = {}))[d] = h)
        : Ss(e.emitsOptions, f) ||
          ((!(f in r) || h !== r[f]) && ((r[f] = h), (i = !0)))
    }
  if (l) {
    const f = Re(n),
      h = u || ze
    for (let d = 0; d < l.length; d++) {
      const m = l[d]
      n[m] = Ol(s, f, m, h[m], e, !Me(h, m))
    }
  }
  return i
}
function Ol(e, t, n, r, s, l) {
  const i = e[n]
  if (i != null) {
    const u = Me(i, "default")
    if (u && r === void 0) {
      const f = i.default
      if (i.type !== Function && !i.skipFactory && be(f)) {
        const { propsDefaults: h } = s
        if (n in h) r = h[n]
        else {
          const d = Br(s)
          ;(r = h[n] = f.call(null, t)), d()
        }
      } else r = f
    }
    i[0] && (l && !u ? (r = !1) : i[1] && (r === "" || r === hr(n)) && (r = !0))
  }
  return r
}
function wu(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const l = e.props,
    i = {},
    u = []
  let f = !1
  if (!be(e)) {
    const d = (m) => {
      f = !0
      const [k, C] = wu(m, t, !0)
      dt(i, k), C && u.push(...C)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!l && !f) return qe(e) && r.set(e, rr), rr
  if (ve(l))
    for (let d = 0; d < l.length; d++) {
      const m = Xt(l[d])
      Vo(m) && (i[m] = ze)
    }
  else if (l)
    for (const d in l) {
      const m = Xt(d)
      if (Vo(m)) {
        const k = l[d],
          C = (i[m] = ve(k) || be(k) ? { type: k } : dt({}, k))
        if (C) {
          const L = Ko(Boolean, C.type),
            _ = Ko(String, C.type)
          ;(C[0] = L > -1),
            (C[1] = _ < 0 || L < _),
            (L > -1 || Me(C, "default")) && u.push(m)
        }
      }
    }
  const h = [i, u]
  return qe(e) && r.set(e, h), h
}
function Vo(e) {
  return e[0] !== "$"
}
function Go(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function Uo(e, t) {
  return Go(e) === Go(t)
}
function Ko(e, t) {
  return ve(t) ? t.findIndex((n) => Uo(n, e)) : be(t) && Uo(t, e) ? 0 : -1
}
const xu = (e) => e[0] === "_" || e === "$stable",
  oa = (e) => (ve(e) ? e.map(Ut) : [Ut(e)]),
  xg = (e, t, n) => {
    if (t._n) return t
    const r = ct((...s) => oa(t(...s)), n)
    return (r._c = !1), r
  },
  _u = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (xu(s)) continue
      const l = e[s]
      if (be(l)) t[s] = xg(s, l, r)
      else if (l != null) {
        const i = oa(l)
        t[s] = () => i
      }
    }
  },
  ku = (e, t) => {
    const n = oa(t)
    e.slots.default = () => n
  },
  _g = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Re(t)), hs(t, "_", n)) : _u(t, (e.slots = {}))
    } else (e.slots = {}), t && ku(e, t)
    hs(e.slots, As, 1)
  },
  kg = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let l = !0,
      i = ze
    if (r.shapeFlag & 32) {
      const u = t._
      u
        ? n && u === 1
          ? (l = !1)
          : (dt(s, t), !n && u === 1 && delete s._)
        : ((l = !t.$stable), _u(t, s)),
        (i = t)
    } else t && (ku(e, t), (i = { default: 1 }))
    if (l) for (const u in s) !xu(u) && i[u] == null && delete s[u]
  }
function Rl(e, t, n, r, s = !1) {
  if (ve(e)) {
    e.forEach((k, C) => Rl(k, t && (ve(t) ? t[C] : t), n, r, s))
    return
  }
  if (us(r) && !s) return
  const l = r.shapeFlag & 4 ? Os(r.component) || r.component.proxy : r.el,
    i = s ? null : l,
    { i: u, r: f } = e,
    h = t && t.r,
    d = u.refs === ze ? (u.refs = {}) : u.refs,
    m = u.setupState
  if (
    (h != null &&
      h !== f &&
      (nt(h)
        ? ((d[h] = null), Me(m, h) && (m[h] = null))
        : vt(h) && (h.value = null)),
    be(f))
  )
    _n(f, u, 12, [i, d])
  else {
    const k = nt(f),
      C = vt(f),
      L = e.f
    if (k || C) {
      const _ = () => {
        if (L) {
          const S = k ? (Me(m, f) ? m[f] : d[f]) : f.value
          s
            ? ve(S) && Vl(S, l)
            : ve(S)
              ? S.includes(l) || S.push(l)
              : k
                ? ((d[f] = [l]), Me(m, f) && (m[f] = d[f]))
                : ((f.value = [l]), e.k && (d[e.k] = f.value))
        } else
          k
            ? ((d[f] = i), Me(m, f) && (m[f] = i))
            : C && ((f.value = i), e.k && (d[e.k] = i))
      }
      s || L ? _() : ((_.id = -1), Et(_, n))
    }
  }
}
const Et = Jh
function $g(e) {
  return Eg(e)
}
function Eg(e, t) {
  const n = Ni()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: l,
      createElement: i,
      createText: u,
      createComment: f,
      setText: h,
      setElementText: d,
      parentNode: m,
      nextSibling: k,
      setScopeId: C = jt,
      insertStaticContent: L,
    } = e,
    _ = (
      p,
      y,
      P,
      N = null,
      R = null,
      W = null,
      Y = void 0,
      q = null,
      G = !!y.dynamicChildren,
    ) => {
      if (p === y) return
      p && !xr(p, y) && ((N = O(p)), Qe(p, R, W, !0), (p = null)),
        y.patchFlag === -2 && ((G = !1), (y.dynamicChildren = null))
      const { type: F, ref: ee, shapeFlag: ue } = y
      switch (F) {
        case Ms:
          S(p, y, P, N)
          break
        case Nn:
          T(p, y, P, N)
          break
        case cs:
          p == null && V(y, P, N, Y)
          break
        case Ue:
          _t(p, y, P, N, R, W, Y, q, G)
          break
        default:
          ue & 1
            ? K(p, y, P, N, R, W, Y, q, G)
            : ue & 6
              ? We(p, y, P, N, R, W, Y, q, G)
              : (ue & 64 || ue & 128) &&
                F.process(p, y, P, N, R, W, Y, q, G, le)
      }
      ee != null && R && Rl(ee, p && p.ref, W, y || p, !y)
    },
    S = (p, y, P, N) => {
      if (p == null) r((y.el = u(y.children)), P, N)
      else {
        const R = (y.el = p.el)
        y.children !== p.children && h(R, y.children)
      }
    },
    T = (p, y, P, N) => {
      p == null ? r((y.el = f(y.children || "")), P, N) : (y.el = p.el)
    },
    V = (p, y, P, N) => {
      ;[p.el, p.anchor] = L(p.children, y, P, N, p.el, p.anchor)
    },
    z = ({ el: p, anchor: y }, P, N) => {
      let R
      for (; p && p !== y; ) (R = k(p)), r(p, P, N), (p = R)
      r(y, P, N)
    },
    X = ({ el: p, anchor: y }) => {
      let P
      for (; p && p !== y; ) (P = k(p)), s(p), (p = P)
      s(y)
    },
    K = (p, y, P, N, R, W, Y, q, G) => {
      y.type === "svg" ? (Y = "svg") : y.type === "math" && (Y = "mathml"),
        p == null ? I(y, P, N, R, W, Y, q, G) : mt(p, y, R, W, Y, q, G)
    },
    I = (p, y, P, N, R, W, Y, q) => {
      let G, F
      const { props: ee, shapeFlag: ue, transition: oe, dirs: pe } = p
      if (
        ((G = p.el = i(p.type, W, ee && ee.is, ee)),
        ue & 8
          ? d(G, p.children)
          : ue & 16 && ge(p.children, G, null, N, R, hl(p, W), Y, q),
        pe && Pn(p, null, N, "created"),
        he(G, p, p.scopeId, Y, N),
        ee)
      ) {
        for (const Ie in ee)
          Ie !== "value" &&
            !as(Ie) &&
            l(G, Ie, null, ee[Ie], W, p.children, N, R, Ke)
        "value" in ee && l(G, "value", null, ee.value, W),
          (F = ee.onVnodeBeforeMount) && Gt(F, N, p)
      }
      pe && Pn(p, null, N, "beforeMount")
      const ye = Sg(R, oe)
      ye && oe.beforeEnter(G),
        r(G, y, P),
        ((F = ee && ee.onVnodeMounted) || ye || pe) &&
          Et(() => {
            F && Gt(F, N, p), ye && oe.enter(G), pe && Pn(p, null, N, "mounted")
          }, R)
    },
    he = (p, y, P, N, R) => {
      if ((P && C(p, P), N)) for (let W = 0; W < N.length; W++) C(p, N[W])
      if (R) {
        let W = R.subTree
        if (y === W) {
          const Y = R.vnode
          he(p, Y, Y.scopeId, Y.slotScopeIds, R.parent)
        }
      }
    },
    ge = (p, y, P, N, R, W, Y, q, G = 0) => {
      for (let F = G; F < p.length; F++) {
        const ee = (p[F] = q ? bn(p[F]) : Ut(p[F]))
        _(null, ee, y, P, N, R, W, Y, q)
      }
    },
    mt = (p, y, P, N, R, W, Y) => {
      const q = (y.el = p.el)
      let { patchFlag: G, dynamicChildren: F, dirs: ee } = y
      G |= p.patchFlag & 16
      const ue = p.props || ze,
        oe = y.props || ze
      let pe
      if (
        (P && Mn(P, !1),
        (pe = oe.onVnodeBeforeUpdate) && Gt(pe, P, y, p),
        ee && Pn(y, p, P, "beforeUpdate"),
        P && Mn(P, !0),
        F
          ? Ve(p.dynamicChildren, F, q, P, N, hl(y, R), W)
          : Y || Z(p, y, q, null, P, N, hl(y, R), W, !1),
        G > 0)
      ) {
        if (G & 16) Ze(q, y, ue, oe, P, N, R)
        else if (
          (G & 2 && ue.class !== oe.class && l(q, "class", null, oe.class, R),
          G & 4 && l(q, "style", ue.style, oe.style, R),
          G & 8)
        ) {
          const ye = y.dynamicProps
          for (let Ie = 0; Ie < ye.length; Ie++) {
            const Fe = ye[Ie],
              Ge = ue[Fe],
              Mt = oe[Fe]
            ;(Mt !== Ge || Fe === "value") &&
              l(q, Fe, Ge, Mt, R, p.children, P, N, Ke)
          }
        }
        G & 1 && p.children !== y.children && d(q, y.children)
      } else !Y && F == null && Ze(q, y, ue, oe, P, N, R)
      ;((pe = oe.onVnodeUpdated) || ee) &&
        Et(() => {
          pe && Gt(pe, P, y, p), ee && Pn(y, p, P, "updated")
        }, N)
    },
    Ve = (p, y, P, N, R, W, Y) => {
      for (let q = 0; q < y.length; q++) {
        const G = p[q],
          F = y[q],
          ee =
            G.el && (G.type === Ue || !xr(G, F) || G.shapeFlag & 70)
              ? m(G.el)
              : P
        _(G, F, ee, null, N, R, W, Y, !0)
      }
    },
    Ze = (p, y, P, N, R, W, Y) => {
      if (P !== N) {
        if (P !== ze)
          for (const q in P)
            !as(q) && !(q in N) && l(p, q, P[q], null, Y, y.children, R, W, Ke)
        for (const q in N) {
          if (as(q)) continue
          const G = N[q],
            F = P[q]
          G !== F && q !== "value" && l(p, q, F, G, Y, y.children, R, W, Ke)
        }
        "value" in N && l(p, "value", P.value, N.value, Y)
      }
    },
    _t = (p, y, P, N, R, W, Y, q, G) => {
      const F = (y.el = p ? p.el : u("")),
        ee = (y.anchor = p ? p.anchor : u(""))
      let { patchFlag: ue, dynamicChildren: oe, slotScopeIds: pe } = y
      pe && (q = q ? q.concat(pe) : pe),
        p == null
          ? (r(F, P, N),
            r(ee, P, N),
            ge(y.children || [], P, ee, R, W, Y, q, G))
          : ue > 0 && ue & 64 && oe && p.dynamicChildren
            ? (Ve(p.dynamicChildren, oe, P, R, W, Y, q),
              (y.key != null || (R && y === R.subTree)) && $u(p, y, !0))
            : Z(p, y, P, ee, R, W, Y, q, G)
    },
    We = (p, y, P, N, R, W, Y, q, G) => {
      ;(y.slotScopeIds = q),
        p == null
          ? y.shapeFlag & 512
            ? R.ctx.activate(y, P, N, Y, G)
            : Jt(y, P, N, R, W, Y, G)
          : Wt(p, y, G)
    },
    Jt = (p, y, P, N, R, W, Y) => {
      const q = (p.component = jg(p, N, R))
      if ((gu(p) && (q.ctx.renderer = le), Lg(q), q.asyncDep)) {
        if ((R && R.registerDep(q, H), !p.el)) {
          const G = (q.subTree = ae(Nn))
          T(null, G, y, P)
        }
      } else H(q, p, y, P, R, W, Y)
    },
    Wt = (p, y, P) => {
      const N = (y.component = p.component)
      if (Wh(p, y, P))
        if (N.asyncDep && !N.asyncResolved) {
          ne(N, y, P)
          return
        } else (N.next = y), Fh(N.update), (N.effect.dirty = !0), N.update()
      else (y.el = p.el), (N.vnode = y)
    },
    H = (p, y, P, N, R, W, Y) => {
      const q = () => {
          if (p.isMounted) {
            let { next: ee, bu: ue, u: oe, parent: pe, vnode: ye } = p
            {
              const on = Eu(p)
              if (on) {
                ee && ((ee.el = ye.el), ne(p, ee, Y)),
                  on.asyncDep.then(() => {
                    p.isUnmounted || q()
                  })
                return
              }
            }
            let Ie = ee,
              Fe
            Mn(p, !1),
              ee ? ((ee.el = ye.el), ne(p, ee, Y)) : (ee = ye),
              ue && os(ue),
              (Fe = ee.props && ee.props.onVnodeBeforeUpdate) &&
                Gt(Fe, pe, ee, ye),
              Mn(p, !0)
            const Ge = fl(p),
              Mt = p.subTree
            ;(p.subTree = Ge),
              _(Mt, Ge, m(Mt.el), O(Mt), p, R, W),
              (ee.el = Ge.el),
              Ie === null && Vh(p, Ge.el),
              oe && Et(oe, R),
              (Fe = ee.props && ee.props.onVnodeUpdated) &&
                Et(() => Gt(Fe, pe, ee, ye), R)
          } else {
            let ee
            const { el: ue, props: oe } = y,
              { bm: pe, m: ye, parent: Ie } = p,
              Fe = us(y)
            if (
              (Mn(p, !1),
              pe && os(pe),
              !Fe && (ee = oe && oe.onVnodeBeforeMount) && Gt(ee, Ie, y),
              Mn(p, !0),
              ue && Be)
            ) {
              const Ge = () => {
                ;(p.subTree = fl(p)), Be(ue, p.subTree, p, R, null)
              }
              Fe
                ? y.type.__asyncLoader().then(() => !p.isUnmounted && Ge())
                : Ge()
            } else {
              const Ge = (p.subTree = fl(p))
              _(null, Ge, P, N, p, R, W), (y.el = Ge.el)
            }
            if ((ye && Et(ye, R), !Fe && (ee = oe && oe.onVnodeMounted))) {
              const Ge = y
              Et(() => Gt(ee, Ie, Ge), R)
            }
            ;(y.shapeFlag & 256 ||
              (Ie && us(Ie.vnode) && Ie.vnode.shapeFlag & 256)) &&
              p.a &&
              Et(p.a, R),
              (p.isMounted = !0),
              (y = P = N = null)
          }
        },
        G = (p.effect = new Kl(q, jt, () => na(F), p.scope)),
        F = (p.update = () => {
          G.dirty && G.run()
        })
      ;(F.id = p.uid), Mn(p, !0), F()
    },
    ne = (p, y, P) => {
      y.component = p
      const N = p.vnode.props
      ;(p.vnode = y),
        (p.next = null),
        wg(p, y.props, N, P),
        kg(p, y.children, P),
        Ln(),
        Fo(p),
        Fn()
    },
    Z = (p, y, P, N, R, W, Y, q, G = !1) => {
      const F = p && p.children,
        ee = p ? p.shapeFlag : 0,
        ue = y.children,
        { patchFlag: oe, shapeFlag: pe } = y
      if (oe > 0) {
        if (oe & 128) {
          He(F, ue, P, N, R, W, Y, q, G)
          return
        } else if (oe & 256) {
          yt(F, ue, P, N, R, W, Y, q, G)
          return
        }
      }
      pe & 8
        ? (ee & 16 && Ke(F, R, W), ue !== F && d(P, ue))
        : ee & 16
          ? pe & 16
            ? He(F, ue, P, N, R, W, Y, q, G)
            : Ke(F, R, W, !0)
          : (ee & 8 && d(P, ""), pe & 16 && ge(ue, P, N, R, W, Y, q, G))
    },
    yt = (p, y, P, N, R, W, Y, q, G) => {
      ;(p = p || rr), (y = y || rr)
      const F = p.length,
        ee = y.length,
        ue = Math.min(F, ee)
      let oe
      for (oe = 0; oe < ue; oe++) {
        const pe = (y[oe] = G ? bn(y[oe]) : Ut(y[oe]))
        _(p[oe], pe, P, null, R, W, Y, q, G)
      }
      F > ee ? Ke(p, R, W, !0, !1, ue) : ge(y, P, N, R, W, Y, q, G, ue)
    },
    He = (p, y, P, N, R, W, Y, q, G) => {
      let F = 0
      const ee = y.length
      let ue = p.length - 1,
        oe = ee - 1
      for (; F <= ue && F <= oe; ) {
        const pe = p[F],
          ye = (y[F] = G ? bn(y[F]) : Ut(y[F]))
        if (xr(pe, ye)) _(pe, ye, P, null, R, W, Y, q, G)
        else break
        F++
      }
      for (; F <= ue && F <= oe; ) {
        const pe = p[ue],
          ye = (y[oe] = G ? bn(y[oe]) : Ut(y[oe]))
        if (xr(pe, ye)) _(pe, ye, P, null, R, W, Y, q, G)
        else break
        ue--, oe--
      }
      if (F > ue) {
        if (F <= oe) {
          const pe = oe + 1,
            ye = pe < ee ? y[pe].el : N
          for (; F <= oe; )
            _(null, (y[F] = G ? bn(y[F]) : Ut(y[F])), P, ye, R, W, Y, q, G), F++
        }
      } else if (F > oe) for (; F <= ue; ) Qe(p[F], R, W, !0), F++
      else {
        const pe = F,
          ye = F,
          Ie = new Map()
        for (F = ye; F <= oe; F++) {
          const wt = (y[F] = G ? bn(y[F]) : Ut(y[F]))
          wt.key != null && Ie.set(wt.key, F)
        }
        let Fe,
          Ge = 0
        const Mt = oe - ye + 1
        let on = !1,
          vr = 0
        const un = new Array(Mt)
        for (F = 0; F < Mt; F++) un[F] = 0
        for (F = pe; F <= ue; F++) {
          const wt = p[F]
          if (Ge >= Mt) {
            Qe(wt, R, W, !0)
            continue
          }
          let At
          if (wt.key != null) At = Ie.get(wt.key)
          else
            for (Fe = ye; Fe <= oe; Fe++)
              if (un[Fe - ye] === 0 && xr(wt, y[Fe])) {
                At = Fe
                break
              }
          At === void 0
            ? Qe(wt, R, W, !0)
            : ((un[At - ye] = F + 1),
              At >= vr ? (vr = At) : (on = !0),
              _(wt, y[At], P, null, R, W, Y, q, G),
              Ge++)
        }
        const zr = on ? Cg(un) : rr
        for (Fe = zr.length - 1, F = Mt - 1; F >= 0; F--) {
          const wt = ye + F,
            At = y[wt],
            br = wt + 1 < ee ? y[wt + 1].el : N
          un[F] === 0
            ? _(null, At, P, br, R, W, Y, q, G)
            : on && (Fe < 0 || F !== zr[Fe] ? ht(At, P, br, 2) : Fe--)
        }
      }
    },
    ht = (p, y, P, N, R = null) => {
      const { el: W, type: Y, transition: q, children: G, shapeFlag: F } = p
      if (F & 6) {
        ht(p.component.subTree, y, P, N)
        return
      }
      if (F & 128) {
        p.suspense.move(y, P, N)
        return
      }
      if (F & 64) {
        Y.move(p, y, P, le)
        return
      }
      if (Y === Ue) {
        r(W, y, P)
        for (let ue = 0; ue < G.length; ue++) ht(G[ue], y, P, N)
        r(p.anchor, y, P)
        return
      }
      if (Y === cs) {
        z(p, y, P)
        return
      }
      if (N !== 2 && F & 1 && q)
        if (N === 0) q.beforeEnter(W), r(W, y, P), Et(() => q.enter(W), R)
        else {
          const { leave: ue, delayLeave: oe, afterLeave: pe } = q,
            ye = () => r(W, y, P),
            Ie = () => {
              ue(W, () => {
                ye(), pe && pe()
              })
            }
          oe ? oe(W, ye, Ie) : Ie()
        }
      else r(W, y, P)
    },
    Qe = (p, y, P, N = !1, R = !1) => {
      const {
        type: W,
        props: Y,
        ref: q,
        children: G,
        dynamicChildren: F,
        shapeFlag: ee,
        patchFlag: ue,
        dirs: oe,
      } = p
      if ((q != null && Rl(q, null, P, p, !0), ee & 256)) {
        y.ctx.deactivate(p)
        return
      }
      const pe = ee & 1 && oe,
        ye = !us(p)
      let Ie
      if ((ye && (Ie = Y && Y.onVnodeBeforeUnmount) && Gt(Ie, y, p), ee & 6))
        kt(p.component, P, N)
      else {
        if (ee & 128) {
          p.suspense.unmount(P, N)
          return
        }
        pe && Pn(p, null, y, "beforeUnmount"),
          ee & 64
            ? p.type.remove(p, y, P, R, le, N)
            : F && (W !== Ue || (ue > 0 && ue & 64))
              ? Ke(F, y, P, !1, !0)
              : ((W === Ue && ue & 384) || (!R && ee & 16)) && Ke(G, y, P),
          N && Vt(p)
      }
      ;((ye && (Ie = Y && Y.onVnodeUnmounted)) || pe) &&
        Et(() => {
          Ie && Gt(Ie, y, p), pe && Pn(p, null, y, "unmounted")
        }, P)
    },
    Vt = (p) => {
      const { type: y, el: P, anchor: N, transition: R } = p
      if (y === Ue) {
        Nt(P, N)
        return
      }
      if (y === cs) {
        X(p)
        return
      }
      const W = () => {
        s(P), R && !R.persisted && R.afterLeave && R.afterLeave()
      }
      if (p.shapeFlag & 1 && R && !R.persisted) {
        const { leave: Y, delayLeave: q } = R,
          G = () => Y(P, W)
        q ? q(p.el, W, G) : G()
      } else W()
    },
    Nt = (p, y) => {
      let P
      for (; p !== y; ) (P = k(p)), s(p), (p = P)
      s(y)
    },
    kt = (p, y, P) => {
      const { bum: N, scope: R, update: W, subTree: Y, um: q } = p
      N && os(N),
        R.stop(),
        W && ((W.active = !1), Qe(Y, p, y, P)),
        q && Et(q, y),
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
    Ke = (p, y, P, N = !1, R = !1, W = 0) => {
      for (let Y = W; Y < p.length; Y++) Qe(p[Y], y, P, N, R)
    },
    O = (p) =>
      p.shapeFlag & 6
        ? O(p.component.subTree)
        : p.shapeFlag & 128
          ? p.suspense.next()
          : k(p.anchor || p.el)
  let Q = !1
  const U = (p, y, P) => {
      p == null
        ? y._vnode && Qe(y._vnode, null, null, !0)
        : _(y._vnode || null, p, y, null, null, null, P),
        Q || ((Q = !0), Fo(), ou(), (Q = !1)),
        (y._vnode = p)
    },
    le = {
      p: _,
      um: Qe,
      m: ht,
      r: Vt,
      mt: Jt,
      mc: ge,
      pc: Z,
      pbc: Ve,
      n: O,
      o: e,
    }
  let Ae, Be
  return (
    t && ([Ae, Be] = t(le)), { render: U, hydrate: Ae, createApp: mg(U, Ae) }
  )
}
function hl({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function Mn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Sg(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function $u(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (ve(r) && ve(s))
    for (let l = 0; l < r.length; l++) {
      const i = r[l]
      let u = s[l]
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = s[l] = bn(s[l])), (u.el = i.el)),
        n || $u(i, u)),
        u.type === Ms && (u.el = i.el)
    }
}
function Cg(e) {
  const t = e.slice(),
    n = [0]
  let r, s, l, i, u
  const f = e.length
  for (r = 0; r < f; r++) {
    const h = e[r]
    if (h !== 0) {
      if (((s = n[n.length - 1]), e[s] < h)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (l = 0, i = n.length - 1; l < i; )
        (u = (l + i) >> 1), e[n[u]] < h ? (l = u + 1) : (i = u)
      h < e[n[l]] && (l > 0 && (t[r] = n[l - 1]), (n[l] = r))
    }
  }
  for (l = n.length, i = n[l - 1]; l-- > 0; ) (n[l] = i), (i = t[i])
  return n
}
function Eu(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Eu(t)
}
const Pg = (e) => e.__isTeleport,
  Ue = Symbol.for("v-fgt"),
  Ms = Symbol.for("v-txt"),
  Nn = Symbol.for("v-cmt"),
  cs = Symbol.for("v-stc"),
  Cr = []
let Ht = null
function ce(e = !1) {
  Cr.push((Ht = e ? null : []))
}
function Mg() {
  Cr.pop(), (Ht = Cr[Cr.length - 1] || null)
}
let Tr = 1
function Yo(e) {
  Tr += e
}
function Su(e) {
  return (
    (e.dynamicChildren = Tr > 0 ? Ht || rr : null),
    Mg(),
    Tr > 0 && Ht && Ht.push(e),
    e
  )
}
function Pe(e, t, n, r, s, l) {
  return Su(v(e, t, n, r, s, l, !0))
}
function Xe(e, t, n, r, s) {
  return Su(ae(e, t, n, r, s, !0))
}
function Tl(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function xr(e, t) {
  return e.type === t.type && e.key === t.key
}
const As = "__vInternal",
  Cu = ({ key: e }) => e ?? null,
  fs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? nt(e) || vt(e) || be(e)
        ? { i: Ct, r: e, k: t, f: !!n }
        : e
      : null
  )
function v(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  l = e === Ue ? 0 : 1,
  i = !1,
  u = !1,
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cu(t),
    ref: t && fs(t),
    scopeId: Cs,
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
    shapeFlag: l,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ct,
  }
  return (
    u
      ? (ia(f, n), l & 128 && e.normalize(f))
      : n && (f.shapeFlag |= nt(n) ? 8 : 16),
    Tr > 0 &&
      !i &&
      Ht &&
      (f.patchFlag > 0 || l & 6) &&
      f.patchFlag !== 32 &&
      Ht.push(f),
    f
  )
}
const ae = Ag
function Ag(e, t = null, n = null, r = 0, s = null, l = !1) {
  if (((!e || e === Kh) && (e = Nn), Tl(e))) {
    const u = jn(e, t, !0)
    return (
      n && ia(u, n),
      Tr > 0 &&
        !l &&
        Ht &&
        (u.shapeFlag & 6 ? (Ht[Ht.indexOf(e)] = u) : Ht.push(u)),
      (u.patchFlag |= -2),
      u
    )
  }
  if ((zg(e) && (e = e.__vccOpts), t)) {
    t = Ig(t)
    let { class: u, style: f } = t
    u && !nt(u) && (t.class = M(u)),
      qe(f) && (Zi(f) && !ve(f) && (f = dt({}, f)), (t.style = Ul(f)))
  }
  const i = nt(e) ? 1 : Xh(e) ? 128 : Pg(e) ? 64 : qe(e) ? 4 : be(e) ? 2 : 0
  return v(e, t, n, r, s, i, l, !0)
}
function Ig(e) {
  return e ? (Zi(e) || As in e ? dt({}, e) : e) : null
}
function jn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: l, children: i } = e,
    u = t ? Rg(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Cu(u),
    ref:
      t && t.ref
        ? n && s
          ? ve(s)
            ? s.concat(fs(t))
            : [s, fs(t)]
          : fs(t)
        : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ue ? (l === -1 ? 16 : l | 16) : l,
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
function _e(e = " ", t = 0) {
  return ae(Ms, null, e, t)
}
function Og(e, t) {
  const n = ae(cs, null, e)
  return (n.staticCount = t), n
}
function tt(e = "", t = !1) {
  return t ? (ce(), Xe(Nn, null, e)) : ae(Nn, null, e)
}
function Ut(e) {
  return e == null || typeof e == "boolean"
    ? ae(Nn)
    : ve(e)
      ? ae(Ue, null, e.slice())
      : typeof e == "object"
        ? bn(e)
        : ae(Ms, null, String(e))
}
function bn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : jn(e)
}
function ia(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (ve(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), ia(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(As in t)
        ? (t._ctx = Ct)
        : s === 3 &&
          Ct &&
          (Ct.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    be(t)
      ? ((t = { default: t, _ctx: Ct }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [_e(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Rg(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = M([t.class, r.class]))
      else if (s === "style") t.style = Ul([t.style, r.style])
      else if (ws(s)) {
        const l = t[s],
          i = r[s]
        i &&
          l !== i &&
          !(ve(l) && l.includes(i)) &&
          (t[s] = l ? [].concat(l, i) : i)
      } else s !== "" && (t[s] = r[s])
  }
  return t
}
function Gt(e, t, n, r = null) {
  zt(e, t, 7, [n, r])
}
const Tg = mu()
let Ng = 0
function jg(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Tg,
    l = {
      uid: Ng++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ch(!0),
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
      propsOptions: wu(r, s),
      emitsOptions: uu(r, s),
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
    (l.ctx = { _: l }),
    (l.root = t ? t.root : l),
    (l.emit = Hh.bind(null, l)),
    e.ce && e.ce(l),
    l
  )
}
let pt = null,
  ms,
  Nl
{
  const e = Ni(),
    t = (n, r) => {
      let s
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (l) => {
          s.length > 1 ? s.forEach((i) => i(l)) : s[0](l)
        }
      )
    }
  ;(ms = t("__VUE_INSTANCE_SETTERS__", (n) => (pt = n))),
    (Nl = t("__VUE_SSR_SETTERS__", (n) => (Is = n)))
}
const Br = (e) => {
    const t = pt
    return (
      ms(e),
      e.scope.on(),
      () => {
        e.scope.off(), ms(t)
      }
    )
  },
  Xo = () => {
    pt && pt.scope.off(), ms(null)
  }
function Pu(e) {
  return e.vnode.shapeFlag & 4
}
let Is = !1
function Lg(e, t = !1) {
  t && Nl(t)
  const { props: n, children: r } = e.vnode,
    s = Pu(e)
  yg(e, n, s, t), _g(e, r)
  const l = s ? Fg(e, t) : void 0
  return t && Nl(!1), l
}
function Fg(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Qi(new Proxy(e.ctx, fg)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Dg(e) : null),
      l = Br(e)
    Ln()
    const i = _n(r, e, 0, [e.props, s])
    if ((Fn(), l(), Oi(i))) {
      if ((i.then(Xo, Xo), t))
        return i
          .then((u) => {
            Jo(e, u, t)
          })
          .catch((u) => {
            Es(u, e, 0)
          })
      e.asyncDep = i
    } else Jo(e, i, t)
  } else Mu(e, t)
}
function Jo(e, t, n) {
  be(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : qe(t) && (e.setupState = ru(t)),
    Mu(e, n)
}
let Zo
function Mu(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Zo && !r.render) {
      const s = r.template || aa(e).template
      if (s) {
        const { isCustomElement: l, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: f } = r,
          h = dt(dt({ isCustomElement: l, delimiters: u }, i), f)
        r.render = Zo(s, h)
      }
    }
    e.render = r.render || jt
  }
  {
    const s = Br(e)
    Ln()
    try {
      dg(e)
    } finally {
      Fn(), s()
    }
  }
}
function Bg(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Pt(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function Dg(e) {
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
function Os(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ru(Qi(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Sr) return Sr[n](e)
        },
        has(t, n) {
          return n in t || n in Sr
        },
      }))
    )
}
function Hg(e, t = !0) {
  return be(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function zg(e) {
  return be(e) && "__vccOpts" in e
}
const ie = (e, t) => Oh(e, t, Is)
function ot(e, t, n) {
  const r = arguments.length
  return r === 2
    ? qe(t) && !ve(t)
      ? Tl(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Tl(n) && (n = [n]),
      ae(e, t, n))
}
const qg = "3.4.15"
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Wg = "http://www.w3.org/2000/svg",
  Vg = "http://www.w3.org/1998/Math/MathML",
  mn = typeof document < "u" ? document : null,
  Qo = mn && mn.createElement("template"),
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
          ? mn.createElementNS(Wg, e)
          : t === "mathml"
            ? mn.createElementNS(Vg, e)
            : mn.createElement(e, n ? { is: n } : void 0)
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      )
    },
    createText: (e) => mn.createTextNode(e),
    createComment: (e) => mn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => mn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, l) {
      const i = n ? n.previousSibling : t.lastChild
      if (s && (s === l || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === l || !(s = s.nextSibling));

        );
      else {
        Qo.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const u = Qo.content
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
  Ug = Symbol("_vtc")
function Kg(e, t, n) {
  const r = e[Ug]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const Yg = Symbol("_vod"),
  Xg = Symbol("")
function Jg(e, t, n) {
  const r = e.style,
    s = r.display,
    l = nt(n)
  if (n && !l) {
    if (t && !nt(t)) for (const i in t) n[i] == null && jl(r, i, "")
    for (const i in n) jl(r, i, n[i])
  } else if (l) {
    if (t !== n) {
      const i = r[Xg]
      i && (n += ";" + i), (r.cssText = n)
    }
  } else t && e.removeAttribute("style")
  Yg in e && (r.display = s)
}
const ei = /\s*!important$/
function jl(e, t, n) {
  if (ve(n)) n.forEach((r) => jl(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = Zg(e, t)
    ei.test(n)
      ? e.setProperty(hr(r), n.replace(ei, ""), "important")
      : (e[r] = n)
  }
}
const ti = ["Webkit", "Moz", "ms"],
  gl = {}
function Zg(e, t) {
  const n = gl[t]
  if (n) return n
  let r = Xt(t)
  if (r !== "filter" && r in e) return (gl[t] = r)
  r = ks(r)
  for (let s = 0; s < ti.length; s++) {
    const l = ti[s] + r
    if (l in e) return (gl[t] = l)
  }
  return t
}
const ni = "http://www.w3.org/1999/xlink"
function Qg(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ni, t.slice(6, t.length))
      : e.setAttributeNS(ni, t, n)
  else {
    const l = uh(t)
    n == null || (l && !ji(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, l ? "" : n)
  }
}
function ep(e, t, n, r, s, l, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, l), (e[t] = n ?? "")
    return
  }
  const u = e.tagName
  if (t === "value" && u !== "PROGRESS" && !u.includes("-")) {
    e._value = n
    const h = u === "OPTION" ? e.getAttribute("value") : e.value,
      d = n ?? ""
    h !== d && (e.value = d), n == null && e.removeAttribute(t)
    return
  }
  let f = !1
  if (n === "" || n == null) {
    const h = typeof e[t]
    h === "boolean"
      ? (n = ji(n))
      : n == null && h === "string"
        ? ((n = ""), (f = !0))
        : h === "number" && ((n = 0), (f = !0))
  }
  try {
    e[t] = n
  } catch {}
  f && e.removeAttribute(t)
}
function er(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function tp(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const ri = Symbol("_vei")
function np(e, t, n, r, s = null) {
  const l = e[ri] || (e[ri] = {}),
    i = l[t]
  if (r && i) i.value = r
  else {
    const [u, f] = rp(t)
    if (r) {
      const h = (l[t] = ap(r, s))
      er(e, u, h, f)
    } else i && (tp(e, u, i, f), (l[t] = void 0))
  }
}
const si = /(?:Once|Passive|Capture)$/
function rp(e) {
  let t
  if (si.test(e)) {
    t = {}
    let r
    for (; (r = e.match(si)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : hr(e.slice(2)), t]
}
let pl = 0
const sp = Promise.resolve(),
  lp = () => pl || (sp.then(() => (pl = 0)), (pl = Date.now()))
function ap(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    zt(op(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = lp()), n
}
function op(e, t) {
  if (ve(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const li = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ip = (e, t, n, r, s, l, i, u, f) => {
    const h = s === "svg"
    t === "class"
      ? Kg(e, r, h)
      : t === "style"
        ? Jg(e, n, r)
        : ws(t)
          ? Wl(t) || np(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : up(e, t, r, h)
              )
            ? ep(e, t, r, l, i, u, f)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              Qg(e, t, r, h))
  }
function up(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && li(t) && be(n))
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
  return li(t) && nt(n) ? !1 : t in e
}
const ai = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return ve(t) ? (n) => os(t, n) : t
}
function cp(e) {
  e.target.composing = !0
}
function oi(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const vl = Symbol("_assign"),
  fp = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[vl] = ai(s)
      const l = r || (s.props && s.props.type === "number")
      er(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let u = e.value
        n && (u = u.trim()), l && (u = kl(u)), e[vl](u)
      }),
        n &&
          er(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (er(e, "compositionstart", cp),
          er(e, "compositionend", oi),
          er(e, "change", oi))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      l,
    ) {
      if (((e[vl] = ai(l)), e.composing)) return
      const i = s || e.type === "number" ? kl(e.value) : e.value,
        u = t ?? ""
      i !== u &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === u))) ||
          (e.value = u))
    },
  },
  dp = dt({ patchProp: ip }, Gg)
let ii
function hp() {
  return ii || (ii = $g(dp))
}
const gp = (...e) => {
  const t = hp().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = vp(r)
      if (!s) return
      const l = t._component
      !be(l) && !l.render && !l.template && (l.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, pp(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function pp(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function vp(e) {
  return nt(e) ? document.querySelector(e) : e
}
const Dr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  bp = {}
function mp(e, t) {
  const n = Uh("router-view")
  return ce(), Xe(n)
}
const yp = Dr(bp, [["render", mp]])
let wp = 0
function xp() {
  return ++wp
}
function Tn() {
  return xp()
}
function se(e) {
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
var _p = Object.defineProperty,
  kp = (e, t, n) =>
    t in e
      ? _p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ui = (e, t, n) => (kp(e, typeof t != "symbol" ? t + "" : t, n), n)
let $p = class {
    constructor() {
      ui(this, "current", this.detect()), ui(this, "currentId", 0)
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
  Rs = new $p()
function gr(e) {
  if (Rs.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = se(e)
    if (t) return t.ownerDocument
  }
  return document
}
let Ll = [
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
var et = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(et || {}),
  wn = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(wn || {}),
  Ep = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Ep || {})
function Ts(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ll)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var ua = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(ua || {})
function Au(e, t = 0) {
  var n
  return e === ((n = gr(e)) == null ? void 0 : n.body)
    ? !1
    : Rt(t, {
        0() {
          return e.matches(Ll)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(Ll)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var Sp = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Sp || {})
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
let Cp = ["textarea", "input"].join(",")
function Pp(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Cp)) !=
    null
    ? n
    : !1
}
function tr(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let s = t(n),
      l = t(r)
    if (s === null || l === null) return 0
    let i = s.compareDocumentPosition(l)
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0
  })
}
function Ot(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: s = [] } = {},
) {
  var l
  let i =
      (l = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e == null
          ? void 0
          : e.ownerDocument) != null
        ? l
        : document,
    u = Array.isArray(e) ? (n ? tr(e) : e) : Ts(e)
  s.length > 0 && u.length > 1 && (u = u.filter((L) => !s.includes(L))),
    (r = r ?? i.activeElement)
  let f = (() => {
      if (t & 5) return 1
      if (t & 10) return -1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    h = (() => {
      if (t & 1) return 0
      if (t & 2) return Math.max(0, u.indexOf(r)) - 1
      if (t & 4) return Math.max(0, u.indexOf(r)) + 1
      if (t & 8) return u.length - 1
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      )
    })(),
    d = t & 32 ? { preventScroll: !0 } : {},
    m = 0,
    k = u.length,
    C
  do {
    if (m >= k || m + k <= 0) return 0
    let L = h + m
    if (t & 16) L = (L + k) % k
    else {
      if (L < 0) return 3
      if (L >= k) return 1
    }
    ;(C = u[L]), C == null || C.focus(d), (m += f)
  } while (C !== i.activeElement)
  return t & 6 && Pp(C) && C.select(), 2
}
function Mp() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function Ap() {
  return /Android/gi.test(window.navigator.userAgent)
}
function Ip() {
  return Mp() || Ap()
}
function ss(e, t, n) {
  Rs.isServer ||
    sn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function Iu(e, t, n) {
  Rs.isServer ||
    sn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function Op(e, t, n = ie(() => !0)) {
  function r(l, i) {
    if (!n.value || l.defaultPrevented) return
    let u = i(l)
    if (u === null || !u.getRootNode().contains(u)) return
    let f = (function h(d) {
      return typeof d == "function"
        ? h(d())
        : Array.isArray(d) || d instanceof Set
          ? d
          : [d]
    })(e)
    for (let h of f) {
      if (h === null) continue
      let d = h instanceof HTMLElement ? h : se(h)
      if (
        (d != null && d.contains(u)) ||
        (l.composed && l.composedPath().includes(d))
      )
        return
    }
    return !Au(u, ua.Loose) && u.tabIndex !== -1 && l.preventDefault(), t(l, u)
  }
  let s = me(null)
  ss(
    "pointerdown",
    (l) => {
      var i, u
      n.value &&
        (s.value =
          ((u = (i = l.composedPath) == null ? void 0 : i.call(l)) == null
            ? void 0
            : u[0]) || l.target)
    },
    !0,
  ),
    ss(
      "mousedown",
      (l) => {
        var i, u
        n.value &&
          (s.value =
            ((u = (i = l.composedPath) == null ? void 0 : i.call(l)) == null
              ? void 0
              : u[0]) || l.target)
      },
      !0,
    ),
    ss(
      "click",
      (l) => {
        Ip() || (s.value && (r(l, () => s.value), (s.value = null)))
      },
      !0,
    ),
    ss(
      "touchend",
      (l) => r(l, () => (l.target instanceof HTMLElement ? l.target : null)),
      !0,
    ),
    Iu(
      "blur",
      (l) =>
        r(l, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    )
}
function ci(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Ou(e, t) {
  let n = me(ci(e.value.type, e.value.as))
  return (
    bt(() => {
      n.value = ci(e.value.type, e.value.as)
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
var Nr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Nr || {}),
  Rp = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Rp || {})
function an({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...s
}) {
  var l
  let i = Tu(r, n),
    u = Object.assign(s, { props: i })
  if (e || (t & 2 && i.static)) return bl(u)
  if (t & 1) {
    let f = (l = i.unmount) == null || l ? 0 : 1
    return Rt(f, {
      0() {
        return null
      },
      1() {
        return bl({
          ...s,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return bl(u)
}
function bl({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var l, i
  let { as: u, ...f } = Nu(e, ["unmount", "static"]),
    h = (l = n.default) == null ? void 0 : l.call(n, r),
    d = {}
  if (r) {
    let m = !1,
      k = []
    for (let [C, L] of Object.entries(r))
      typeof L == "boolean" && (m = !0), L === !0 && k.push(C)
    m && (d["data-headlessui-state"] = k.join(" "))
  }
  if (u === "template") {
    if (
      ((h = Ru(h ?? [])),
      Object.keys(f).length > 0 || Object.keys(t).length > 0)
    ) {
      let [m, ...k] = h ?? []
      if (!Tp(m) || k.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${s} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(f)
              .concat(Object.keys(t))
              .map((_) => _.trim())
              .filter((_, S, T) => T.indexOf(_) === S)
              .sort((_, S) => _.localeCompare(S))
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
      let C = Tu((i = m.props) != null ? i : {}, f, d),
        L = jn(m, C, !0)
      for (let _ in C)
        _.startsWith("on") && (L.props || (L.props = {}), (L.props[_] = C[_]))
      return L
    }
    return Array.isArray(h) && h.length === 1 ? h[0] : h
  }
  return ot(u, Object.assign({}, f, d), { default: () => h })
}
function Ru(e) {
  return e.flatMap((t) => (t.type === Ue ? Ru(t.children) : [t]))
}
function Tu(...e) {
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
      [r](s, ...l) {
        let i = n[r]
        for (let u of i) {
          if (s instanceof Event && s.defaultPrevented) return
          u(s, ...l)
        }
      },
    })
  return t
}
function Nu(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function Tp(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var ir = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ir || {})
let ur = Tt({
    name: "Hidden",
    props: {
      as: { type: [Object, String], default: "div" },
      features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
      return () => {
        var r
        let { features: s, ...l } = e,
          i = {
            "aria-hidden":
              (s & 2) === 2 ? !0 : (r = l["aria-hidden"]) != null ? r : void 0,
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
        return an({
          ourProps: i,
          theirProps: l,
          slot: {},
          attrs: n,
          slots: t,
          name: "Hidden",
        })
      }
    },
  }),
  ju = Symbol("Context")
var jr = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(jr || {})
function Np() {
  return ft(ju, null)
}
function jp(e) {
  Yt(ju, e)
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
function Lp(e) {
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
function Fp(e, t, n, r) {
  Rs.isServer ||
    sn((s) => {
      ;(e = e ?? window),
        e.addEventListener(t, n, r),
        s(() => e.removeEventListener(t, n, r))
    })
}
var tn = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(tn || {})
function Lu() {
  let e = me(0)
  return (
    Iu("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function Bp({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = me(null),
    s = gr(r)
  function l() {
    var i, u, f
    let h = []
    for (let d of e)
      d !== null &&
        (d instanceof HTMLElement
          ? h.push(d)
          : "value" in d && d.value instanceof HTMLElement && h.push(d.value))
    if (t != null && t.value) for (let d of t.value) h.push(d)
    for (let d of (i =
      s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null
      ? i
      : [])
      d !== document.body &&
        d !== document.head &&
        d instanceof HTMLElement &&
        d.id !== "headlessui-portal-root" &&
        (d.contains(se(r)) ||
          d.contains(
            (f = (u = se(r)) == null ? void 0 : u.getRootNode()) == null
              ? void 0
              : f.host,
          ) ||
          h.some((m) => d.contains(m)) ||
          h.push(d))
    return h
  }
  return {
    resolveContainers: l,
    contains(i) {
      return l().some((u) => u.contains(i))
    },
    mainTreeNodeRef: r,
    MainTreeNode() {
      return n != null ? null : ot(ur, { features: ir.Hidden, ref: r })
    },
  }
}
let fi = Symbol("PortalParentContext")
function Dp() {
  let e = ft(fi, null),
    t = me([])
  function n(l) {
    return t.value.push(l), e && e.register(l), () => r(l)
  }
  function r(l) {
    let i = t.value.indexOf(l)
    i !== -1 && t.value.splice(i, 1), e && e.unregister(l)
  }
  let s = { register: n, unregister: r, portals: t }
  return [
    t,
    Tt({
      name: "PortalWrapper",
      setup(l, { slots: i }) {
        return (
          Yt(fi, s),
          () => {
            var u
            return (u = i.default) == null ? void 0 : u.call(i)
          }
        )
      },
    }),
  ]
}
var Hp = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Hp || {})
let Fu = Symbol("PopoverContext")
function ca(e) {
  let t = ft(Fu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${Fl.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ca), n)
  }
  return t
}
let zp = Symbol("PopoverGroupContext")
function Bu() {
  return ft(zp, null)
}
let Du = Symbol("PopoverPanelContext")
function qp() {
  return ft(Du, null)
}
let Fl = Tt({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let l = me(null)
      r({ el: l, $el: l })
      let i = me(1),
        u = me(null),
        f = me(null),
        h = me(null),
        d = me(null),
        m = ie(() => gr(l)),
        k = ie(() => {
          var K, I
          if (!se(u) || !se(d)) return !1
          for (let We of document.querySelectorAll("body > *"))
            if (
              Number(We == null ? void 0 : We.contains(se(u))) ^
              Number(We == null ? void 0 : We.contains(se(d)))
            )
              return !0
          let he = Ts(),
            ge = he.indexOf(se(u)),
            mt = (ge + he.length - 1) % he.length,
            Ve = (ge + 1) % he.length,
            Ze = he[mt],
            _t = he[Ve]
          return (
            !((K = se(d)) != null && K.contains(Ze)) &&
            !((I = se(d)) != null && I.contains(_t))
          )
        }),
        C = {
          popoverState: i,
          buttonId: me(null),
          panelId: me(null),
          panel: d,
          button: u,
          isPortalled: k,
          beforePanelSentinel: f,
          afterPanelSentinel: h,
          togglePopover() {
            i.value = Rt(i.value, { 0: 1, 1: 0 })
          },
          closePopover() {
            i.value !== 1 && (i.value = 1)
          },
          close(K) {
            C.closePopover()
            let I = K
              ? K instanceof HTMLElement
                ? K
                : K.value instanceof HTMLElement
                  ? se(K)
                  : se(C.button)
              : se(C.button)
            I == null || I.focus()
          },
        }
      Yt(Fu, C), jp(ie(() => Rt(i.value, { 0: jr.Open, 1: jr.Closed })))
      let L = {
          buttonId: C.buttonId,
          panelId: C.panelId,
          close() {
            C.closePopover()
          },
        },
        _ = Bu(),
        S = _ == null ? void 0 : _.registerPopover,
        [T, V] = Dp(),
        z = Bp({
          mainTreeNodeRef: _ == null ? void 0 : _.mainTreeNodeRef,
          portals: T,
          defaultContainers: [u, d],
        })
      function X() {
        var K, I, he, ge
        return (ge = _ == null ? void 0 : _.isFocusWithinPopoverGroup()) != null
          ? ge
          : ((K = m.value) == null ? void 0 : K.activeElement) &&
              (((I = se(u)) == null
                ? void 0
                : I.contains(m.value.activeElement)) ||
                ((he = se(d)) == null
                  ? void 0
                  : he.contains(m.value.activeElement)))
      }
      return (
        sn(() => (S == null ? void 0 : S(L))),
        Fp(
          (s = m.value) == null ? void 0 : s.defaultView,
          "focus",
          (K) => {
            var I, he
            K.target !== window &&
              K.target instanceof HTMLElement &&
              i.value === 0 &&
              (X() ||
                (u &&
                  d &&
                  (z.contains(K.target) ||
                    ((I = se(C.beforePanelSentinel)) != null &&
                      I.contains(K.target)) ||
                    ((he = se(C.afterPanelSentinel)) != null &&
                      he.contains(K.target)) ||
                    C.closePopover())))
          },
          !0,
        ),
        Op(
          z.resolveContainers,
          (K, I) => {
            var he
            C.closePopover(),
              Au(I, ua.Loose) ||
                (K.preventDefault(), (he = se(u)) == null || he.focus())
          },
          ie(() => i.value === 0),
        ),
        () => {
          let K = { open: i.value === 0, close: C.close }
          return ot(Ue, [
            ot(V, {}, () =>
              an({
                theirProps: { ...e, ...n },
                ourProps: { ref: l },
                slot: K,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            ot(z.MainTreeNode),
          ])
        }
      )
    },
  }),
  di = Tt({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Tn()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = ca("PopoverButton"),
        l = ie(() => gr(s.button))
      r({ el: s.button, $el: s.button }),
        bt(() => {
          s.buttonId.value = e.id
        }),
        $n(() => {
          s.buttonId.value = null
        })
      let i = Bu(),
        u = i == null ? void 0 : i.closeOthers,
        f = qp(),
        h = ie(() => (f === null ? !1 : f.value === s.panelId.value)),
        d = me(null),
        m = `headlessui-focus-sentinel-${Tn()}`
      h.value ||
        sn(() => {
          s.button.value = se(d)
        })
      let k = Ou(
        ie(() => ({ as: e.as, type: t.type })),
        d,
      )
      function C(z) {
        var X, K, I, he, ge
        if (h.value) {
          if (s.popoverState.value === 1) return
          switch (z.key) {
            case at.Space:
            case at.Enter:
              z.preventDefault(),
                (K = (X = z.target).click) == null || K.call(X),
                s.closePopover(),
                (I = se(s.button)) == null || I.focus()
              break
          }
        } else
          switch (z.key) {
            case at.Space:
            case at.Enter:
              z.preventDefault(),
                z.stopPropagation(),
                s.popoverState.value === 1 &&
                  (u == null || u(s.buttonId.value)),
                s.togglePopover()
              break
            case at.Escape:
              if (s.popoverState.value !== 0)
                return u == null ? void 0 : u(s.buttonId.value)
              if (
                !se(s.button) ||
                ((he = l.value) != null &&
                  he.activeElement &&
                  !(
                    (ge = se(s.button)) != null &&
                    ge.contains(l.value.activeElement)
                  ))
              )
                return
              z.preventDefault(), z.stopPropagation(), s.closePopover()
              break
          }
      }
      function L(z) {
        h.value || (z.key === at.Space && z.preventDefault())
      }
      function _(z) {
        var X, K
        e.disabled ||
          (h.value
            ? (s.closePopover(), (X = se(s.button)) == null || X.focus())
            : (z.preventDefault(),
              z.stopPropagation(),
              s.popoverState.value === 1 && (u == null || u(s.buttonId.value)),
              s.togglePopover(),
              (K = se(s.button)) == null || K.focus()))
      }
      function S(z) {
        z.preventDefault(), z.stopPropagation()
      }
      let T = Lu()
      function V() {
        let z = se(s.panel)
        if (!z) return
        function X() {
          Rt(T.value, {
            [tn.Forwards]: () => Ot(z, et.First),
            [tn.Backwards]: () => Ot(z, et.Last),
          }) === wn.Error &&
            Ot(
              Ts().filter((K) => K.dataset.headlessuiFocusGuard !== "true"),
              Rt(T.value, {
                [tn.Forwards]: et.Next,
                [tn.Backwards]: et.Previous,
              }),
              { relativeTo: se(s.button) },
            )
        }
        X()
      }
      return () => {
        let z = s.popoverState.value === 0,
          X = { open: z },
          { id: K, ...I } = e,
          he = h.value
            ? { ref: d, type: k.value, onKeydown: C, onClick: _ }
            : {
                ref: d,
                id: K,
                type: k.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": se(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: C,
                onKeyup: L,
                onClick: _,
                onMousedown: S,
              }
        return ot(Ue, [
          an({
            ourProps: he,
            theirProps: { ...t, ...I },
            slot: X,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          z &&
            !h.value &&
            s.isPortalled.value &&
            ot(ur, {
              id: m,
              features: ir.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: V,
            }),
        ])
      }
    },
  }),
  hi = Tt({
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
        l = ca("PopoverPanel"),
        i = ie(() => gr(l.panel)),
        u = `headlessui-focus-sentinel-before-${Tn()}`,
        f = `headlessui-focus-sentinel-after-${Tn()}`
      r({ el: l.panel, $el: l.panel }),
        bt(() => {
          l.panelId.value = e.id
        }),
        $n(() => {
          l.panelId.value = null
        }),
        Yt(Du, l.panelId),
        sn(() => {
          var S, T
          if (!s || l.popoverState.value !== 0 || !l.panel) return
          let V = (S = i.value) == null ? void 0 : S.activeElement
          ;((T = se(l.panel)) != null && T.contains(V)) ||
            Ot(se(l.panel), et.First)
        })
      let h = Np(),
        d = ie(() =>
          h !== null
            ? (h.value & jr.Open) === jr.Open
            : l.popoverState.value === 0,
        )
      function m(S) {
        var T, V
        switch (S.key) {
          case at.Escape:
            if (
              l.popoverState.value !== 0 ||
              !se(l.panel) ||
              (i.value &&
                !(
                  (T = se(l.panel)) != null && T.contains(i.value.activeElement)
                ))
            )
              return
            S.preventDefault(),
              S.stopPropagation(),
              l.closePopover(),
              (V = se(l.button)) == null || V.focus()
            break
        }
      }
      function k(S) {
        var T, V, z, X, K
        let I = S.relatedTarget
        I &&
          se(l.panel) &&
          (((T = se(l.panel)) != null && T.contains(I)) ||
            (l.closePopover(),
            (((z =
              (V = se(l.beforePanelSentinel)) == null ? void 0 : V.contains) !=
              null &&
              z.call(V, I)) ||
              ((K =
                (X = se(l.afterPanelSentinel)) == null ? void 0 : X.contains) !=
                null &&
                K.call(X, I))) &&
              I.focus({ preventScroll: !0 })))
      }
      let C = Lu()
      function L() {
        let S = se(l.panel)
        if (!S) return
        function T() {
          Rt(C.value, {
            [tn.Forwards]: () => {
              var V
              Ot(S, et.First) === wn.Error &&
                ((V = se(l.afterPanelSentinel)) == null || V.focus())
            },
            [tn.Backwards]: () => {
              var V
              ;(V = se(l.button)) == null || V.focus({ preventScroll: !0 })
            },
          })
        }
        T()
      }
      function _() {
        let S = se(l.panel)
        if (!S) return
        function T() {
          Rt(C.value, {
            [tn.Forwards]: () => {
              let V = se(l.button),
                z = se(l.panel)
              if (!V) return
              let X = Ts(),
                K = X.indexOf(V),
                I = X.slice(0, K + 1),
                he = [...X.slice(K + 1), ...I]
              for (let ge of he.slice())
                if (
                  ge.dataset.headlessuiFocusGuard === "true" ||
                  (z != null && z.contains(ge))
                ) {
                  let mt = he.indexOf(ge)
                  mt !== -1 && he.splice(mt, 1)
                }
              Ot(he, et.First, { sorted: !1 })
            },
            [tn.Backwards]: () => {
              var V
              Ot(S, et.Previous) === wn.Error &&
                ((V = se(l.button)) == null || V.focus())
            },
          })
        }
        T()
      }
      return () => {
        let S = { open: l.popoverState.value === 0, close: l.close },
          { id: T, focus: V, ...z } = e,
          X = {
            ref: l.panel,
            id: T,
            onKeydown: m,
            onFocusout: s && l.popoverState.value === 0 ? k : void 0,
            tabIndex: -1,
          }
        return an({
          ourProps: X,
          theirProps: { ...t, ...z },
          attrs: t,
          slot: S,
          slots: {
            ...n,
            default: (...K) => {
              var I
              return [
                ot(Ue, [
                  d.value &&
                    l.isPortalled.value &&
                    ot(ur, {
                      id: u,
                      ref: l.beforePanelSentinel,
                      features: ir.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: L,
                    }),
                  (I = n.default) == null ? void 0 : I.call(n, ...K),
                  d.value &&
                    l.isPortalled.value &&
                    ot(ur, {
                      id: f,
                      ref: l.afterPanelSentinel,
                      features: ir.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: _,
                    }),
                ]),
              ]
            },
          },
          features: Nr.RenderStrategy | Nr.Static,
          visible: d.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  Wp = Tt({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = me(!0)
      return () =>
        t.value
          ? ot(ur, {
              as: "button",
              type: "button",
              features: ir.Focusable,
              onFocus(n) {
                n.preventDefault()
                let r,
                  s = 50
                function l() {
                  var i
                  if (s-- <= 0) {
                    r && cancelAnimationFrame(r)
                    return
                  }
                  if ((i = e.onFocus) != null && i.call(e)) {
                    ;(t.value = !1), cancelAnimationFrame(r)
                    return
                  }
                  r = requestAnimationFrame(l)
                }
                r = requestAnimationFrame(l)
              },
            })
          : null
    },
  })
var Vp = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(Vp || {}),
  Gp = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(Gp || {})
let Hu = Symbol("TabsContext")
function Hr(e) {
  let t = ft(Hu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Hr), n)
  }
  return t
}
let fa = Symbol("TabsSSRContext"),
  Up = Tt({
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
      let l = me((s = e.selectedIndex) != null ? s : e.defaultIndex),
        i = me([]),
        u = me([]),
        f = ie(() => e.selectedIndex !== null),
        h = ie(() => (f.value ? e.selectedIndex : l.value))
      function d(_) {
        var S
        let T = tr(m.tabs.value, se),
          V = tr(m.panels.value, se),
          z = T.filter((X) => {
            var K
            return !((K = se(X)) != null && K.hasAttribute("disabled"))
          })
        if (_ < 0 || _ > T.length - 1) {
          let X = Rt(l.value === null ? 0 : Math.sign(_ - l.value), {
              [-1]: () => 1,
              0: () =>
                Rt(Math.sign(_), { [-1]: () => 0, 0: () => 0, 1: () => 1 }),
              1: () => 0,
            }),
            K = Rt(X, {
              0: () => T.indexOf(z[0]),
              1: () => T.indexOf(z[z.length - 1]),
            })
          K !== -1 && (l.value = K), (m.tabs.value = T), (m.panels.value = V)
        } else {
          let X = T.slice(0, _),
            K = [...T.slice(_), ...X].find((he) => z.includes(he))
          if (!K) return
          let I = (S = T.indexOf(K)) != null ? S : m.selectedIndex.value
          I === -1 && (I = m.selectedIndex.value),
            (l.value = I),
            (m.tabs.value = T),
            (m.panels.value = V)
        }
      }
      let m = {
        selectedIndex: ie(() => {
          var _, S
          return (S = (_ = l.value) != null ? _ : e.defaultIndex) != null
            ? S
            : null
        }),
        orientation: ie(() => (e.vertical ? "vertical" : "horizontal")),
        activation: ie(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: u,
        setSelectedIndex(_) {
          h.value !== _ && r("change", _), f.value || d(_)
        },
        registerTab(_) {
          var S
          if (i.value.includes(_)) return
          let T = i.value[l.value]
          i.value.push(_), (i.value = tr(i.value, se))
          let V = (S = i.value.indexOf(T)) != null ? S : l.value
          V !== -1 && (l.value = V)
        },
        unregisterTab(_) {
          let S = i.value.indexOf(_)
          S !== -1 && i.value.splice(S, 1)
        },
        registerPanel(_) {
          u.value.includes(_) || (u.value.push(_), (u.value = tr(u.value, se)))
        },
        unregisterPanel(_) {
          let S = u.value.indexOf(_)
          S !== -1 && u.value.splice(S, 1)
        },
      }
      Yt(Hu, m)
      let k = me({ tabs: [], panels: [] }),
        C = me(!1)
      bt(() => {
        C.value = !0
      }),
        Yt(
          fa,
          ie(() => (C.value ? null : k.value)),
        )
      let L = ie(() => e.selectedIndex)
      return (
        bt(() => {
          rn(
            [L],
            () => {
              var _
              return d((_ = e.selectedIndex) != null ? _ : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        sn(() => {
          if (!f.value || h.value == null || m.tabs.value.length <= 0) return
          let _ = tr(m.tabs.value, se)
          _.some((S, T) => se(m.tabs.value[T]) !== se(S)) &&
            m.setSelectedIndex(
              _.findIndex((S) => se(S) === se(m.tabs.value[h.value])),
            )
        }),
        () => {
          let _ = { selectedIndex: l.value }
          return ot(Ue, [
            i.value.length <= 0 &&
              ot(Wp, {
                onFocus: () => {
                  for (let S of i.value) {
                    let T = se(S)
                    if ((T == null ? void 0 : T.tabIndex) === 0)
                      return T.focus(), !0
                  }
                  return !1
                },
              }),
            an({
              theirProps: {
                ...n,
                ...Nu(e, [
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
  Kp = Tt({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = Hr("TabList")
      return () => {
        let s = { selectedIndex: r.selectedIndex.value },
          l = { role: "tablist", "aria-orientation": r.orientation.value }
        return an({
          ourProps: l,
          theirProps: e,
          slot: s,
          attrs: t,
          slots: n,
          name: "TabList",
        })
      }
    },
  }),
  Yp = Tt({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-tabs-tab-${Tn()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Hr("Tab"),
        l = me(null)
      r({ el: l, $el: l }),
        bt(() => s.registerTab(l)),
        $n(() => s.unregisterTab(l))
      let i = ft(fa),
        u = ie(() => {
          if (i.value) {
            let S = i.value.tabs.indexOf(e.id)
            return S === -1 ? i.value.tabs.push(e.id) - 1 : S
          }
          return -1
        }),
        f = ie(() => {
          let S = s.tabs.value.indexOf(l)
          return S === -1 ? u.value : S
        }),
        h = ie(() => f.value === s.selectedIndex.value)
      function d(S) {
        var T
        let V = S()
        if (V === wn.Success && s.activation.value === "auto") {
          let z = (T = gr(l)) == null ? void 0 : T.activeElement,
            X = s.tabs.value.findIndex((K) => se(K) === z)
          X !== -1 && s.setSelectedIndex(X)
        }
        return V
      }
      function m(S) {
        let T = s.tabs.value.map((V) => se(V)).filter(Boolean)
        if (S.key === at.Space || S.key === at.Enter) {
          S.preventDefault(), S.stopPropagation(), s.setSelectedIndex(f.value)
          return
        }
        switch (S.key) {
          case at.Home:
          case at.PageUp:
            return (
              S.preventDefault(), S.stopPropagation(), d(() => Ot(T, et.First))
            )
          case at.End:
          case at.PageDown:
            return (
              S.preventDefault(), S.stopPropagation(), d(() => Ot(T, et.Last))
            )
        }
        if (
          d(() =>
            Rt(s.orientation.value, {
              vertical() {
                return S.key === at.ArrowUp
                  ? Ot(T, et.Previous | et.WrapAround)
                  : S.key === at.ArrowDown
                    ? Ot(T, et.Next | et.WrapAround)
                    : wn.Error
              },
              horizontal() {
                return S.key === at.ArrowLeft
                  ? Ot(T, et.Previous | et.WrapAround)
                  : S.key === at.ArrowRight
                    ? Ot(T, et.Next | et.WrapAround)
                    : wn.Error
              },
            }),
          ) === wn.Success
        )
          return S.preventDefault()
      }
      let k = me(!1)
      function C() {
        var S
        k.value ||
          ((k.value = !0),
          !e.disabled &&
            ((S = se(l)) == null || S.focus({ preventScroll: !0 }),
            s.setSelectedIndex(f.value),
            Lp(() => {
              k.value = !1
            })))
      }
      function L(S) {
        S.preventDefault()
      }
      let _ = Ou(
        ie(() => ({ as: e.as, type: t.type })),
        l,
      )
      return () => {
        var S
        let T = { selected: h.value },
          { id: V, ...z } = e,
          X = {
            ref: l,
            onKeydown: m,
            onMousedown: L,
            onClick: C,
            id: V,
            role: "tab",
            type: _.value,
            "aria-controls":
              (S = se(s.panels.value[f.value])) == null ? void 0 : S.id,
            "aria-selected": h.value,
            tabIndex: h.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return an({
          ourProps: X,
          theirProps: z,
          slot: T,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  Xp = Tt({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = Hr("TabPanels")
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
  Qn = Tt({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${Tn()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = Hr("TabPanel"),
        l = me(null)
      r({ el: l, $el: l }),
        bt(() => s.registerPanel(l)),
        $n(() => s.unregisterPanel(l))
      let i = ft(fa),
        u = ie(() => {
          if (i.value) {
            let d = i.value.panels.indexOf(e.id)
            return d === -1 ? i.value.panels.push(e.id) - 1 : d
          }
          return -1
        }),
        f = ie(() => {
          let d = s.panels.value.indexOf(l)
          return d === -1 ? u.value : d
        }),
        h = ie(() => f.value === s.selectedIndex.value)
      return () => {
        var d
        let m = { selected: h.value },
          { id: k, tabIndex: C, ...L } = e,
          _ = {
            ref: l,
            id: k,
            role: "tabpanel",
            "aria-labelledby":
              (d = se(s.tabs.value[f.value])) == null ? void 0 : d.id,
            tabIndex: h.value ? C : -1,
          }
        return !h.value && e.unmount && !e.static
          ? ot(ur, { as: "span", "aria-hidden": !0, ..._ })
          : an({
              ourProps: _,
              theirProps: L,
              slot: m,
              attrs: t,
              slots: n,
              features: Nr.Static | Nr.RenderStrategy,
              visible: h.value,
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
 */ var ls = {
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
 */ const Jp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  rt =
    (e, t) =>
    (
      {
        size: n,
        strokeWidth: r = 2,
        absoluteStrokeWidth: s,
        color: l,
        class: i,
        ...u
      },
      { attrs: f, slots: h },
    ) =>
      ot(
        "svg",
        {
          ...ls,
          width: n || ls.width,
          height: n || ls.height,
          stroke: l || ls.stroke,
          "stroke-width": s ? (Number(r) * 24) / Number(n) : r,
          ...f,
          class: ["lucide", `lucide-${Jp(e)}`],
          ...u,
        },
        [...t.map((d) => ot(...d)), ...(h.default ? [h.default()] : [])],
      )
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gi = rt("CheckIcon", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zp = rt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qp = rt("CloudDrizzleIcon", [
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
 */ const ev = rt("CloudSunIcon", [
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
 */ const zu = rt("EyeOffIcon", [
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
 */ const tv = rt("EyeIcon", [
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
 */ const nv = rt("FrameIcon", [
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
 */ const rv = rt("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sv = rt("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lv = rt("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = rt("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ov = rt("PencilRulerIcon", [
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
 */ const iv = rt("RabbitIcon", [
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
 */ const ds = rt("ShieldCheckIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uv = rt("ShowerHeadIcon", [
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
 */ const cv = rt("SunIcon", [
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
 */ const ml = rt("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fv = rt("TurtleIcon", [
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
 */ const Bl = rt("XIcon", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  da = (e) => (ra("data-v-8de8c9eb"), (e = e()), sa(), e),
  dv = { class: "flex justify-center p-5 gap-5 content-center" },
  hv = da(() => v("div", { class: "w-1/12" }, null, -1)),
  gv = { class: "flex justify-between gap-2 w-full content-center" },
  pv = { class: "flex gap-1 p-2" },
  vv = { class: "flex gap-5 p-2 relative" },
  bv = { href: "/portfolio" },
  mv = { href: "/" },
  yv = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  wv = da(() => v("b", null, "Art and Animation", -1)),
  xv = [wv],
  _v = { href: "/about-me" },
  kv = { class: "flex gap-5 content-center" },
  $v = { href: "/contact" },
  Ev = { class: "lg:hidden flex" },
  Sv = { class: "flex gap-1 p-2" },
  Cv = { class: "flex flex-col gap-2 p-2" },
  Pv = { class: "flex justify-between" },
  Mv = da(() => v("div", { class: "w-1/12" }, null, -1)),
  Av = { class: "flex justify-between items-center" },
  Iv = { class: "flex gap-1 p-2" },
  Ov = Og(
    '<a href="/contact" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Contact</li></a><a href="/portfolio" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Web Portfolio</li></a><a href="/" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Web Services</li></a><li class="py-2 px-3 rounded opacity-75" data-v-8de8c9eb>Creative Projects</li><ul class="ml-5" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Art and Animation</li><li class="py-2 px-3 rounded" data-v-8de8c9eb>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-8de8c9eb>Custom Software</li><li class="py-2 px-3 rounded" data-v-8de8c9eb>Cooking and Recipes</li></ul><a href="/about-me" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>About Me</li></a>',
    6,
  ),
  Rv = [Ov],
  Tv = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = me(5),
        r = t,
        s = (u) => {
          ;(n.value = u.target.value), r("update:brightness", n.value)
        }
      bt(() => {
        let u = window.localStorage
        u.getItem("brightness") && (n.value = Number(u.getItem("brightness")))
      })
      const l = () => {
          window.location.href = "/"
        },
        i = () => {
          let u = document.getElementById("mobileMenu")
          u.classList.contains("hidden")
            ? u.classList.remove("hidden")
            : u.classList.add("hidden")
        }
      return (u, f) => (
        ce(),
        Pe(
          Ue,
          null,
          [
            v("div", dv, [
              hv,
              v(
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
                  v("div", gv, [
                    v("div", pv, [
                      ae(
                        de(ml),
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
                      v(
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
                          onClick: l,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                    v("div", vv, [
                      v("a", bv, [
                        v(
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
                      v("a", mv, [
                        v(
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
                      ae(
                        de(Fl),
                        { class: "relative inline-block text-left" },
                        {
                          default: ct(() => [
                            ae(
                              de(di),
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
                                default: ct(() => [
                                  _e(" Creative Projects"),
                                  ae(de(Zp)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            ae(
                              de(hi),
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
                                  v("div", yv, [
                                    v(
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
                                      xv,
                                      2,
                                    ),
                                    v(
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
                                    v(
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
                                    v(
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
                      v("a", _v, [
                        v(
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
                    ]),
                    v("div", kv, [
                      v("a", $v, [
                        v(
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
                  ]),
                ],
                2,
              ),
              v(
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
                  v("div", Ev, [
                    v("div", Sv, [
                      ae(
                        de(ml),
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
                      v(
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
                          onClick: l,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                  ]),
                  ae(
                    de(sv),
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
                      onClick: f[0] || (f[0] = (h) => i()),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  ae(de(Fl), null, {
                    default: ct(() => [
                      ae(
                        de(di),
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
                          default: ct(() => [
                            n.value == 5
                              ? (ce(),
                                Xe(de(cv), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (ce(),
                                  Xe(de(ev), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (ce(),
                                    Xe(de(Qp), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (ce(),
                                      Xe(de(av), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (ce(),
                                      Xe(de(lv), {
                                        key: 4,
                                        class: "text-slate-400",
                                      })),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      ae(
                        de(hi),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: ct(() => [
                            v("div", Cv, [
                              v("div", Pv, [
                                hu(
                                  v(
                                    "input",
                                    {
                                      type: "range",
                                      min: "1",
                                      max: "5",
                                      "onUpdate:modelValue":
                                        f[1] || (f[1] = (h) => (n.value = h)),
                                      onInput: s,
                                      class: "slider w-20 mx-auto",
                                      id: "myRange",
                                    },
                                    null,
                                    544,
                                  ),
                                  [[fp, n.value]],
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
              Mv,
            ]),
            v(
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
                v("div", Av, [
                  v("div", Iv, [
                    ae(
                      de(ml),
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
                    v(
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
                        onClick: l,
                        id: "logoText",
                      },
                      " josephhansen.dev ",
                      2,
                    ),
                  ]),
                  ae(
                    de(Bl),
                    {
                      class: M({
                        "text-emerald-500 hover:text-emerald-400": n.value >= 4,
                        "text-orange-200 hover:text-orange-100": n.value == 3,
                        "text-orange-500 hover:text-orange-400": n.value == 2,
                        "text-orange-400 hover:text-orange-300": n.value == 1,
                      }),
                      onClick: f[2] || (f[2] = (h) => i()),
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
                  Rv,
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
  Nv = Dr(Tv, [["__scopeId", "data-v-8de8c9eb"]]),
  jv = { class: "flex justify-center py-5 flex-col" },
  Lv = { class: "inline-block relative" },
  Fv = { class: "font-semibold text-center px-1" },
  Bv = { class: "flex py-5 justify-center gap-3 w-full" },
  Dv = { href: "/portfolio" },
  Hv = { href: "/pricing" },
  zv = {
    directives: {
      typewriter: {
        beforeUpdate(e, t) {
          if (t.oldValue !== t.value) {
            let n = t.value,
              r = Math.random() * 100 + 25
            ;(e.textContent = ""),
              n.split("").forEach((s, l) => {
                setTimeout(() => {
                  e.textContent += s
                }, r * l)
              })
          }
        },
      },
    },
  },
  qv = Object.assign(zv, {
    __name: "Hero",
    props: { brightness: Number },
    setup(e) {
      const t = me([
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
      let n = me(0),
        r = me(!1)
      bt(() => {
        ;(t.value = t.value.sort(() => Math.random() - 0.5)),
          setInterval(() => {
            r.value ||
              ((r.value = !0), (n.value = (n.value + 1) % t.value.length))
          }, 4e3)
        const l = () => {
            r.value = !1
          },
          i = () => {
            r.value = !0
          }
        window.addEventListener("mousedown", l),
          window.addEventListener("mouseup", i),
          $n(() => {
            window.removeEventListener("mousedown", l),
              window.removeEventListener("mouseup", i)
          })
      }),
        vu(() => {
          r.value = !1
        })
      const s = ie(() => t.value[n.value])
      return (l, i) => {
        const u = Yh("typewriter")
        return (
          ce(),
          Pe("div", jv, [
            v(
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
                _e(" I make "),
                v("div", Lv, [
                  hu((ce(), Pe("span", Fv, [_e(St(s.value), 1)])), [
                    [u, s.value],
                  ]),
                  v(
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
                _e(" websites. "),
              ],
              2,
            ),
            v(
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
            v("div", Bv, [
              v("a", Dv, [
                v(
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
              v("a", Hv, [
                v(
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
var Wv =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {}
function Vv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e
}
var qu = { exports: {} }
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
  })(Wv, function () {
    for (
      var n = function (a, o, c) {
          return (
            o === void 0 && (o = 0),
            c === void 0 && (c = 1),
            a < o ? o : a > c ? c : a
          )
        },
        r = n,
        s = function (a) {
          ;(a._clipped = !1), (a._unclipped = a.slice(0))
          for (var o = 0; o <= 3; o++)
            o < 3
              ? ((a[o] < 0 || a[o] > 255) && (a._clipped = !0),
                (a[o] = r(a[o], 0, 255)))
              : o === 3 && (a[o] = r(a[o], 0, 1))
          return a
        },
        l = {},
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
      l["[object " + f + "]"] = f.toLowerCase()
    }
    var h = function (a) {
        return l[Object.prototype.toString.call(a)] || "object"
      },
      d = h,
      m = function (a, o) {
        return (
          o === void 0 && (o = null),
          a.length >= 3
            ? Array.prototype.slice.call(a)
            : d(a[0]) == "object" && o
              ? o
                  .split("")
                  .filter(function (c) {
                    return a[0][c] !== void 0
                  })
                  .map(function (c) {
                    return a[0][c]
                  })
              : a[0]
        )
      },
      k = h,
      C = function (a) {
        if (a.length < 2) return null
        var o = a.length - 1
        return k(a[o]) == "string" ? a[o].toLowerCase() : null
      },
      L = Math.PI,
      _ = {
        clip_rgb: s,
        limit: n,
        type: h,
        unpack: m,
        last: C,
        PI: L,
        TWOPI: L * 2,
        PITHIRD: L / 3,
        DEG2RAD: L / 180,
        RAD2DEG: 180 / L,
      },
      S = { format: {}, autodetect: [] },
      T = _.last,
      V = _.clip_rgb,
      z = _.type,
      X = S,
      K = function () {
        for (var o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        var g = this
        if (
          z(o[0]) === "object" &&
          o[0].constructor &&
          o[0].constructor === this.constructor
        )
          return o[0]
        var w = T(o),
          x = !1
        if (!w) {
          ;(x = !0),
            X.sorted ||
              ((X.autodetect = X.autodetect.sort(function (j, J) {
                return J.p - j.p
              })),
              (X.sorted = !0))
          for (var b = 0, $ = X.autodetect; b < $.length; b += 1) {
            var E = $[b]
            if (((w = E.test.apply(E, o)), w)) break
          }
        }
        if (X.format[w]) {
          var A = X.format[w].apply(null, x ? o : o.slice(0, -1))
          g._rgb = V(A)
        } else throw new Error("unknown format: " + o)
        g._rgb.length === 3 && g._rgb.push(1)
      }
    K.prototype.toString = function () {
      return z(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var I = K,
      he = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(he.Color, [null].concat(a)))()
      }
    ;(he.Color = I), (he.version = "2.4.2")
    var ge = he,
      mt = _.unpack,
      Ve = Math.max,
      Ze = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = mt(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2]
        ;(g = g / 255), (w = w / 255), (x = x / 255)
        var b = 1 - Ve(g, Ve(w, x)),
          $ = b < 1 ? 1 / (1 - b) : 0,
          E = (1 - g - b) * $,
          A = (1 - w - b) * $,
          j = (1 - x - b) * $
        return [E, A, j, b]
      },
      _t = Ze,
      We = _.unpack,
      Jt = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = We(a, "cmyk")
        var c = a[0],
          g = a[1],
          w = a[2],
          x = a[3],
          b = a.length > 4 ? a[4] : 1
        return x === 1
          ? [0, 0, 0, b]
          : [
              c >= 1 ? 0 : 255 * (1 - c) * (1 - x),
              g >= 1 ? 0 : 255 * (1 - g) * (1 - x),
              w >= 1 ? 0 : 255 * (1 - w) * (1 - x),
              b,
            ]
      },
      Wt = Jt,
      H = ge,
      ne = I,
      Z = S,
      yt = _.unpack,
      He = _.type,
      ht = _t
    ;(ne.prototype.cmyk = function () {
      return ht(this._rgb)
    }),
      (H.cmyk = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ne,
          [null].concat(a, ["cmyk"]),
        ))()
      }),
      (Z.format.cmyk = Wt),
      Z.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = yt(a, "cmyk")), He(a) === "array" && a.length === 4))
            return "cmyk"
        },
      })
    var Qe = _.unpack,
      Vt = _.last,
      Nt = function (a) {
        return Math.round(a * 100) / 100
      },
      kt = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = Qe(a, "hsla"),
          g = Vt(a) || "lsa"
        return (
          (c[0] = Nt(c[0] || 0)),
          (c[1] = Nt(c[1] * 100) + "%"),
          (c[2] = Nt(c[2] * 100) + "%"),
          g === "hsla" || (c.length > 3 && c[3] < 1)
            ? ((c[3] = c.length > 3 ? c[3] : 1), (g = "hsla"))
            : (c.length = 3),
          g + "(" + c.join(",") + ")"
        )
      },
      Ke = kt,
      O = _.unpack,
      Q = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = O(a, "rgba")
        var c = a[0],
          g = a[1],
          w = a[2]
        ;(c /= 255), (g /= 255), (w /= 255)
        var x = Math.min(c, g, w),
          b = Math.max(c, g, w),
          $ = (b + x) / 2,
          E,
          A
        return (
          b === x
            ? ((E = 0), (A = Number.NaN))
            : (E = $ < 0.5 ? (b - x) / (b + x) : (b - x) / (2 - b - x)),
          c == b
            ? (A = (g - w) / (b - x))
            : g == b
              ? (A = 2 + (w - c) / (b - x))
              : w == b && (A = 4 + (c - g) / (b - x)),
          (A *= 60),
          A < 0 && (A += 360),
          a.length > 3 && a[3] !== void 0 ? [A, E, $, a[3]] : [A, E, $]
        )
      },
      U = Q,
      le = _.unpack,
      Ae = _.last,
      Be = Ke,
      p = U,
      y = Math.round,
      P = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = le(a, "rgba"),
          g = Ae(a) || "rgb"
        return g.substr(0, 3) == "hsl"
          ? Be(p(c), g)
          : ((c[0] = y(c[0])),
            (c[1] = y(c[1])),
            (c[2] = y(c[2])),
            (g === "rgba" || (c.length > 3 && c[3] < 1)) &&
              ((c[3] = c.length > 3 ? c[3] : 1), (g = "rgba")),
            g + "(" + c.slice(0, g === "rgb" ? 3 : 4).join(",") + ")")
      },
      N = P,
      R = _.unpack,
      W = Math.round,
      Y = function () {
        for (var a, o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        o = R(o, "hsl")
        var g = o[0],
          w = o[1],
          x = o[2],
          b,
          $,
          E
        if (w === 0) b = $ = E = x * 255
        else {
          var A = [0, 0, 0],
            j = [0, 0, 0],
            J = x < 0.5 ? x * (1 + w) : x + w - x * w,
            B = 2 * x - J,
            re = g / 360
          ;(A[0] = re + 1 / 3), (A[1] = re), (A[2] = re - 1 / 3)
          for (var te = 0; te < 3; te++)
            A[te] < 0 && (A[te] += 1),
              A[te] > 1 && (A[te] -= 1),
              6 * A[te] < 1
                ? (j[te] = B + (J - B) * 6 * A[te])
                : 2 * A[te] < 1
                  ? (j[te] = J)
                  : 3 * A[te] < 2
                    ? (j[te] = B + (J - B) * (2 / 3 - A[te]) * 6)
                    : (j[te] = B)
          ;(a = [W(j[0] * 255), W(j[1] * 255), W(j[2] * 255)]),
            (b = a[0]),
            ($ = a[1]),
            (E = a[2])
        }
        return o.length > 3 ? [b, $, E, o[3]] : [b, $, E, 1]
      },
      q = Y,
      G = q,
      F = S,
      ee = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      ue =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      oe =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      pe =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      ye =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Ie =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Fe = Math.round,
      Ge = function (a) {
        a = a.toLowerCase().trim()
        var o
        if (F.format.named)
          try {
            return F.format.named(a)
          } catch {}
        if ((o = a.match(ee))) {
          for (var c = o.slice(1, 4), g = 0; g < 3; g++) c[g] = +c[g]
          return (c[3] = 1), c
        }
        if ((o = a.match(ue))) {
          for (var w = o.slice(1, 5), x = 0; x < 4; x++) w[x] = +w[x]
          return w
        }
        if ((o = a.match(oe))) {
          for (var b = o.slice(1, 4), $ = 0; $ < 3; $++) b[$] = Fe(b[$] * 2.55)
          return (b[3] = 1), b
        }
        if ((o = a.match(pe))) {
          for (var E = o.slice(1, 5), A = 0; A < 3; A++) E[A] = Fe(E[A] * 2.55)
          return (E[3] = +E[3]), E
        }
        if ((o = a.match(ye))) {
          var j = o.slice(1, 4)
          ;(j[1] *= 0.01), (j[2] *= 0.01)
          var J = G(j)
          return (J[3] = 1), J
        }
        if ((o = a.match(Ie))) {
          var B = o.slice(1, 4)
          ;(B[1] *= 0.01), (B[2] *= 0.01)
          var re = G(B)
          return (re[3] = +o[4]), re
        }
      }
    Ge.test = function (a) {
      return (
        ee.test(a) ||
        ue.test(a) ||
        oe.test(a) ||
        pe.test(a) ||
        ye.test(a) ||
        Ie.test(a)
      )
    }
    var Mt = Ge,
      on = ge,
      vr = I,
      un = S,
      zr = _.type,
      wt = N,
      At = Mt
    ;(vr.prototype.css = function (a) {
      return wt(this._rgb, a)
    }),
      (on.css = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          vr,
          [null].concat(a, ["css"]),
        ))()
      }),
      (un.format.css = At),
      un.autodetect.push({
        p: 5,
        test: function (a) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && zr(a) === "string" && At.test(a)) return "css"
        },
      })
    var br = I,
      nc = ge,
      rc = S,
      sc = _.unpack
    ;(rc.format.gl = function () {
      for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
      var c = sc(a, "rgba")
      return (c[0] *= 255), (c[1] *= 255), (c[2] *= 255), c
    }),
      (nc.gl = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          br,
          [null].concat(a, ["gl"]),
        ))()
      }),
      (br.prototype.gl = function () {
        var a = this._rgb
        return [a[0] / 255, a[1] / 255, a[2] / 255, a[3]]
      })
    var lc = _.unpack,
      ac = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = lc(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2],
          b = Math.min(g, w, x),
          $ = Math.max(g, w, x),
          E = $ - b,
          A = (E * 100) / 255,
          j = (b / (255 - E)) * 100,
          J
        return (
          E === 0
            ? (J = Number.NaN)
            : (g === $ && (J = (w - x) / E),
              w === $ && (J = 2 + (x - g) / E),
              x === $ && (J = 4 + (g - w) / E),
              (J *= 60),
              J < 0 && (J += 360)),
          [J, A, j]
        )
      },
      oc = ac,
      ic = _.unpack,
      uc = Math.floor,
      cc = function () {
        for (var a, o, c, g, w, x, b = [], $ = arguments.length; $--; )
          b[$] = arguments[$]
        b = ic(b, "hcg")
        var E = b[0],
          A = b[1],
          j = b[2],
          J,
          B,
          re
        j = j * 255
        var te = A * 255
        if (A === 0) J = B = re = j
        else {
          E === 360 && (E = 0),
            E > 360 && (E -= 360),
            E < 0 && (E += 360),
            (E /= 60)
          var we = uc(E),
            $e = E - we,
            Se = j * (1 - A),
            Oe = Se + te * (1 - $e),
            it = Se + te * $e,
            lt = Se + te
          switch (we) {
            case 0:
              ;(a = [lt, it, Se]), (J = a[0]), (B = a[1]), (re = a[2])
              break
            case 1:
              ;(o = [Oe, lt, Se]), (J = o[0]), (B = o[1]), (re = o[2])
              break
            case 2:
              ;(c = [Se, lt, it]), (J = c[0]), (B = c[1]), (re = c[2])
              break
            case 3:
              ;(g = [Se, Oe, lt]), (J = g[0]), (B = g[1]), (re = g[2])
              break
            case 4:
              ;(w = [it, Se, lt]), (J = w[0]), (B = w[1]), (re = w[2])
              break
            case 5:
              ;(x = [lt, Se, Oe]), (J = x[0]), (B = x[1]), (re = x[2])
              break
          }
        }
        return [J, B, re, b.length > 3 ? b[3] : 1]
      },
      fc = cc,
      dc = _.unpack,
      hc = _.type,
      gc = ge,
      ba = I,
      ma = S,
      pc = oc
    ;(ba.prototype.hcg = function () {
      return pc(this._rgb)
    }),
      (gc.hcg = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ba,
          [null].concat(a, ["hcg"]),
        ))()
      }),
      (ma.format.hcg = fc),
      ma.autodetect.push({
        p: 1,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = dc(a, "hcg")), hc(a) === "array" && a.length === 3))
            return "hcg"
        },
      })
    var vc = _.unpack,
      bc = _.last,
      qr = Math.round,
      mc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = vc(a, "rgba"),
          g = c[0],
          w = c[1],
          x = c[2],
          b = c[3],
          $ = bc(a) || "auto"
        b === void 0 && (b = 1),
          $ === "auto" && ($ = b < 1 ? "rgba" : "rgb"),
          (g = qr(g)),
          (w = qr(w)),
          (x = qr(x))
        var E = (g << 16) | (w << 8) | x,
          A = "000000" + E.toString(16)
        A = A.substr(A.length - 6)
        var j = "0" + qr(b * 255).toString(16)
        switch (((j = j.substr(j.length - 2)), $.toLowerCase())) {
          case "rgba":
            return "#" + A + j
          case "argb":
            return "#" + j + A
          default:
            return "#" + A
        }
      },
      ya = mc,
      yc = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      wc = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      xc = function (a) {
        if (a.match(yc)) {
          ;(a.length === 4 || a.length === 7) && (a = a.substr(1)),
            a.length === 3 &&
              ((a = a.split("")), (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]))
          var o = parseInt(a, 16),
            c = o >> 16,
            g = (o >> 8) & 255,
            w = o & 255
          return [c, g, w, 1]
        }
        if (a.match(wc)) {
          ;(a.length === 5 || a.length === 9) && (a = a.substr(1)),
            a.length === 4 &&
              ((a = a.split("")),
              (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2] + a[3] + a[3]))
          var x = parseInt(a, 16),
            b = (x >> 24) & 255,
            $ = (x >> 16) & 255,
            E = (x >> 8) & 255,
            A = Math.round(((x & 255) / 255) * 100) / 100
          return [b, $, E, A]
        }
        throw new Error("unknown hex color: " + a)
      },
      wa = xc,
      _c = ge,
      xa = I,
      kc = _.type,
      _a = S,
      $c = ya
    ;(xa.prototype.hex = function (a) {
      return $c(this._rgb, a)
    }),
      (_c.hex = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          xa,
          [null].concat(a, ["hex"]),
        ))()
      }),
      (_a.format.hex = wa),
      _a.autodetect.push({
        p: 4,
        test: function (a) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (
            !o.length &&
            kc(a) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(a.length) >= 0
          )
            return "hex"
        },
      })
    var Ec = _.unpack,
      ka = _.TWOPI,
      Sc = Math.min,
      Cc = Math.sqrt,
      Pc = Math.acos,
      Mc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = Ec(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2]
        ;(g /= 255), (w /= 255), (x /= 255)
        var b,
          $ = Sc(g, w, x),
          E = (g + w + x) / 3,
          A = E > 0 ? 1 - $ / E : 0
        return (
          A === 0
            ? (b = NaN)
            : ((b = (g - w + (g - x)) / 2),
              (b /= Cc((g - w) * (g - w) + (g - x) * (w - x))),
              (b = Pc(b)),
              x > w && (b = ka - b),
              (b /= ka)),
          [b * 360, A, E]
        )
      },
      Ac = Mc,
      Ic = _.unpack,
      js = _.limit,
      qn = _.TWOPI,
      Ls = _.PITHIRD,
      Wn = Math.cos,
      Oc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = Ic(a, "hsi")
        var c = a[0],
          g = a[1],
          w = a[2],
          x,
          b,
          $
        return (
          isNaN(c) && (c = 0),
          isNaN(g) && (g = 0),
          c > 360 && (c -= 360),
          c < 0 && (c += 360),
          (c /= 360),
          c < 1 / 3
            ? (($ = (1 - g) / 3),
              (x = (1 + (g * Wn(qn * c)) / Wn(Ls - qn * c)) / 3),
              (b = 1 - ($ + x)))
            : c < 2 / 3
              ? ((c -= 1 / 3),
                (x = (1 - g) / 3),
                (b = (1 + (g * Wn(qn * c)) / Wn(Ls - qn * c)) / 3),
                ($ = 1 - (x + b)))
              : ((c -= 2 / 3),
                (b = (1 - g) / 3),
                ($ = (1 + (g * Wn(qn * c)) / Wn(Ls - qn * c)) / 3),
                (x = 1 - (b + $))),
          (x = js(w * x * 3)),
          (b = js(w * b * 3)),
          ($ = js(w * $ * 3)),
          [x * 255, b * 255, $ * 255, a.length > 3 ? a[3] : 1]
        )
      },
      Rc = Oc,
      Tc = _.unpack,
      Nc = _.type,
      jc = ge,
      $a = I,
      Ea = S,
      Lc = Ac
    ;($a.prototype.hsi = function () {
      return Lc(this._rgb)
    }),
      (jc.hsi = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          $a,
          [null].concat(a, ["hsi"]),
        ))()
      }),
      (Ea.format.hsi = Rc),
      Ea.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Tc(a, "hsi")), Nc(a) === "array" && a.length === 3))
            return "hsi"
        },
      })
    var Fc = _.unpack,
      Bc = _.type,
      Dc = ge,
      Sa = I,
      Ca = S,
      Hc = U
    ;(Sa.prototype.hsl = function () {
      return Hc(this._rgb)
    }),
      (Dc.hsl = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Sa,
          [null].concat(a, ["hsl"]),
        ))()
      }),
      (Ca.format.hsl = q),
      Ca.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Fc(a, "hsl")), Bc(a) === "array" && a.length === 3))
            return "hsl"
        },
      })
    var zc = _.unpack,
      qc = Math.min,
      Wc = Math.max,
      Vc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = zc(a, "rgb")
        var c = a[0],
          g = a[1],
          w = a[2],
          x = qc(c, g, w),
          b = Wc(c, g, w),
          $ = b - x,
          E,
          A,
          j
        return (
          (j = b / 255),
          b === 0
            ? ((E = Number.NaN), (A = 0))
            : ((A = $ / b),
              c === b && (E = (g - w) / $),
              g === b && (E = 2 + (w - c) / $),
              w === b && (E = 4 + (c - g) / $),
              (E *= 60),
              E < 0 && (E += 360)),
          [E, A, j]
        )
      },
      Gc = Vc,
      Uc = _.unpack,
      Kc = Math.floor,
      Yc = function () {
        for (var a, o, c, g, w, x, b = [], $ = arguments.length; $--; )
          b[$] = arguments[$]
        b = Uc(b, "hsv")
        var E = b[0],
          A = b[1],
          j = b[2],
          J,
          B,
          re
        if (((j *= 255), A === 0)) J = B = re = j
        else {
          E === 360 && (E = 0),
            E > 360 && (E -= 360),
            E < 0 && (E += 360),
            (E /= 60)
          var te = Kc(E),
            we = E - te,
            $e = j * (1 - A),
            Se = j * (1 - A * we),
            Oe = j * (1 - A * (1 - we))
          switch (te) {
            case 0:
              ;(a = [j, Oe, $e]), (J = a[0]), (B = a[1]), (re = a[2])
              break
            case 1:
              ;(o = [Se, j, $e]), (J = o[0]), (B = o[1]), (re = o[2])
              break
            case 2:
              ;(c = [$e, j, Oe]), (J = c[0]), (B = c[1]), (re = c[2])
              break
            case 3:
              ;(g = [$e, Se, j]), (J = g[0]), (B = g[1]), (re = g[2])
              break
            case 4:
              ;(w = [Oe, $e, j]), (J = w[0]), (B = w[1]), (re = w[2])
              break
            case 5:
              ;(x = [j, $e, Se]), (J = x[0]), (B = x[1]), (re = x[2])
              break
          }
        }
        return [J, B, re, b.length > 3 ? b[3] : 1]
      },
      Xc = Yc,
      Jc = _.unpack,
      Zc = _.type,
      Qc = ge,
      Pa = I,
      Ma = S,
      ef = Gc
    ;(Pa.prototype.hsv = function () {
      return ef(this._rgb)
    }),
      (Qc.hsv = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Pa,
          [null].concat(a, ["hsv"]),
        ))()
      }),
      (Ma.format.hsv = Xc),
      Ma.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Jc(a, "hsv")), Zc(a) === "array" && a.length === 3))
            return "hsv"
        },
      })
    var Wr = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      Vn = Wr,
      tf = _.unpack,
      Aa = Math.pow,
      nf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = tf(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2],
          b = rf(g, w, x),
          $ = b[0],
          E = b[1],
          A = b[2],
          j = 116 * E - 16
        return [j < 0 ? 0 : j, 500 * ($ - E), 200 * (E - A)]
      },
      Fs = function (a) {
        return (a /= 255) <= 0.04045 ? a / 12.92 : Aa((a + 0.055) / 1.055, 2.4)
      },
      Bs = function (a) {
        return a > Vn.t3 ? Aa(a, 1 / 3) : a / Vn.t2 + Vn.t0
      },
      rf = function (a, o, c) {
        ;(a = Fs(a)), (o = Fs(o)), (c = Fs(c))
        var g = Bs((0.4124564 * a + 0.3575761 * o + 0.1804375 * c) / Vn.Xn),
          w = Bs((0.2126729 * a + 0.7151522 * o + 0.072175 * c) / Vn.Yn),
          x = Bs((0.0193339 * a + 0.119192 * o + 0.9503041 * c) / Vn.Zn)
        return [g, w, x]
      },
      Ia = nf,
      Gn = Wr,
      sf = _.unpack,
      lf = Math.pow,
      af = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = sf(a, "lab")
        var c = a[0],
          g = a[1],
          w = a[2],
          x,
          b,
          $,
          E,
          A,
          j
        return (
          (b = (c + 16) / 116),
          (x = isNaN(g) ? b : b + g / 500),
          ($ = isNaN(w) ? b : b - w / 200),
          (b = Gn.Yn * Hs(b)),
          (x = Gn.Xn * Hs(x)),
          ($ = Gn.Zn * Hs($)),
          (E = Ds(3.2404542 * x - 1.5371385 * b - 0.4985314 * $)),
          (A = Ds(-0.969266 * x + 1.8760108 * b + 0.041556 * $)),
          (j = Ds(0.0556434 * x - 0.2040259 * b + 1.0572252 * $)),
          [E, A, j, a.length > 3 ? a[3] : 1]
        )
      },
      Ds = function (a) {
        return 255 * (a <= 0.00304 ? 12.92 * a : 1.055 * lf(a, 1 / 2.4) - 0.055)
      },
      Hs = function (a) {
        return a > Gn.t1 ? a * a * a : Gn.t2 * (a - Gn.t0)
      },
      Oa = af,
      of = _.unpack,
      uf = _.type,
      cf = ge,
      Ra = I,
      Ta = S,
      ff = Ia
    ;(Ra.prototype.lab = function () {
      return ff(this._rgb)
    }),
      (cf.lab = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ra,
          [null].concat(a, ["lab"]),
        ))()
      }),
      (Ta.format.lab = Oa),
      Ta.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = of(a, "lab")), uf(a) === "array" && a.length === 3))
            return "lab"
        },
      })
    var df = _.unpack,
      hf = _.RAD2DEG,
      gf = Math.sqrt,
      pf = Math.atan2,
      vf = Math.round,
      bf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = df(a, "lab"),
          g = c[0],
          w = c[1],
          x = c[2],
          b = gf(w * w + x * x),
          $ = (pf(x, w) * hf + 360) % 360
        return vf(b * 1e4) === 0 && ($ = Number.NaN), [g, b, $]
      },
      Na = bf,
      mf = _.unpack,
      yf = Ia,
      wf = Na,
      xf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = mf(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2],
          b = yf(g, w, x),
          $ = b[0],
          E = b[1],
          A = b[2]
        return wf($, E, A)
      },
      _f = xf,
      kf = _.unpack,
      $f = _.DEG2RAD,
      Ef = Math.sin,
      Sf = Math.cos,
      Cf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = kf(a, "lch"),
          g = c[0],
          w = c[1],
          x = c[2]
        return isNaN(x) && (x = 0), (x = x * $f), [g, Sf(x) * w, Ef(x) * w]
      },
      ja = Cf,
      Pf = _.unpack,
      Mf = ja,
      Af = Oa,
      If = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = Pf(a, "lch")
        var c = a[0],
          g = a[1],
          w = a[2],
          x = Mf(c, g, w),
          b = x[0],
          $ = x[1],
          E = x[2],
          A = Af(b, $, E),
          j = A[0],
          J = A[1],
          B = A[2]
        return [j, J, B, a.length > 3 ? a[3] : 1]
      },
      La = If,
      Of = _.unpack,
      Rf = La,
      Tf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = Of(a, "hcl").reverse()
        return Rf.apply(void 0, c)
      },
      Nf = Tf,
      jf = _.unpack,
      Lf = _.type,
      Fa = ge,
      Vr = I,
      zs = S,
      Ba = _f
    ;(Vr.prototype.lch = function () {
      return Ba(this._rgb)
    }),
      (Vr.prototype.hcl = function () {
        return Ba(this._rgb).reverse()
      }),
      (Fa.lch = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Vr,
          [null].concat(a, ["lch"]),
        ))()
      }),
      (Fa.hcl = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Vr,
          [null].concat(a, ["hcl"]),
        ))()
      }),
      (zs.format.lch = La),
      (zs.format.hcl = Nf),
      ["lch", "hcl"].forEach(function (a) {
        return zs.autodetect.push({
          p: 2,
          test: function () {
            for (var o = [], c = arguments.length; c--; ) o[c] = arguments[c]
            if (((o = jf(o, a)), Lf(o) === "array" && o.length === 3)) return a
          },
        })
      })
    var Ff = {
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
      Da = Ff,
      Bf = I,
      Ha = S,
      Df = _.type,
      mr = Da,
      Hf = wa,
      zf = ya
    ;(Bf.prototype.name = function () {
      for (
        var a = zf(this._rgb, "rgb"), o = 0, c = Object.keys(mr);
        o < c.length;
        o += 1
      ) {
        var g = c[o]
        if (mr[g] === a) return g.toLowerCase()
      }
      return a
    }),
      (Ha.format.named = function (a) {
        if (((a = a.toLowerCase()), mr[a])) return Hf(mr[a])
        throw new Error("unknown color name: " + a)
      }),
      Ha.autodetect.push({
        p: 5,
        test: function (a) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && Df(a) === "string" && mr[a.toLowerCase()])
            return "named"
        },
      })
    var qf = _.unpack,
      Wf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = qf(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2]
        return (g << 16) + (w << 8) + x
      },
      Vf = Wf,
      Gf = _.type,
      Uf = function (a) {
        if (Gf(a) == "number" && a >= 0 && a <= 16777215) {
          var o = a >> 16,
            c = (a >> 8) & 255,
            g = a & 255
          return [o, c, g, 1]
        }
        throw new Error("unknown num color: " + a)
      },
      Kf = Uf,
      Yf = ge,
      za = I,
      qa = S,
      Xf = _.type,
      Jf = Vf
    ;(za.prototype.num = function () {
      return Jf(this._rgb)
    }),
      (Yf.num = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          za,
          [null].concat(a, ["num"]),
        ))()
      }),
      (qa.format.num = Kf),
      qa.autodetect.push({
        p: 5,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (
            a.length === 1 &&
            Xf(a[0]) === "number" &&
            a[0] >= 0 &&
            a[0] <= 16777215
          )
            return "num"
        },
      })
    var Zf = ge,
      qs = I,
      Wa = S,
      Va = _.unpack,
      Ga = _.type,
      Ua = Math.round
    ;(qs.prototype.rgb = function (a) {
      return (
        a === void 0 && (a = !0),
        a === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ua)
      )
    }),
      (qs.prototype.rgba = function (a) {
        return (
          a === void 0 && (a = !0),
          this._rgb.slice(0, 4).map(function (o, c) {
            return c < 3 ? (a === !1 ? o : Ua(o)) : o
          })
        )
      }),
      (Zf.rgb = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          qs,
          [null].concat(a, ["rgb"]),
        ))()
      }),
      (Wa.format.rgb = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = Va(a, "rgba")
        return c[3] === void 0 && (c[3] = 1), c
      }),
      Wa.autodetect.push({
        p: 3,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (
            ((a = Va(a, "rgba")),
            Ga(a) === "array" &&
              (a.length === 3 ||
                (a.length === 4 &&
                  Ga(a[3]) == "number" &&
                  a[3] >= 0 &&
                  a[3] <= 1)))
          )
            return "rgb"
        },
      })
    var Gr = Math.log,
      Qf = function (a) {
        var o = a / 100,
          c,
          g,
          w
        return (
          o < 66
            ? ((c = 255),
              (g =
                o < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (g = o - 2) +
                    104.49216199393888 * Gr(g)),
              (w =
                o < 20
                  ? 0
                  : -254.76935184120902 +
                    0.8274096064007395 * (w = o - 10) +
                    115.67994401066147 * Gr(w)))
            : ((c =
                351.97690566805693 +
                0.114206453784165 * (c = o - 55) -
                40.25366309332127 * Gr(c)),
              (g =
                325.4494125711974 +
                0.07943456536662342 * (g = o - 50) -
                28.0852963507957 * Gr(g)),
              (w = 255)),
          [c, g, w, 1]
        )
      },
      Ka = Qf,
      ed = Ka,
      td = _.unpack,
      nd = Math.round,
      rd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        for (
          var c = td(a, "rgb"),
            g = c[0],
            w = c[2],
            x = 1e3,
            b = 4e4,
            $ = 0.4,
            E;
          b - x > $;

        ) {
          E = (b + x) * 0.5
          var A = ed(E)
          A[2] / A[0] >= w / g ? (b = E) : (x = E)
        }
        return nd(E)
      },
      sd = rd,
      Ws = ge,
      Ur = I,
      Vs = S,
      ld = sd
    ;(Ur.prototype.temp =
      Ur.prototype.kelvin =
      Ur.prototype.temperature =
        function () {
          return ld(this._rgb)
        }),
      (Ws.temp =
        Ws.kelvin =
        Ws.temperature =
          function () {
            for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
            return new (Function.prototype.bind.apply(
              Ur,
              [null].concat(a, ["temp"]),
            ))()
          }),
      (Vs.format.temp = Vs.format.kelvin = Vs.format.temperature = Ka)
    var ad = _.unpack,
      Gs = Math.cbrt,
      od = Math.pow,
      id = Math.sign,
      ud = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = ad(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2],
          b = [Us(g / 255), Us(w / 255), Us(x / 255)],
          $ = b[0],
          E = b[1],
          A = b[2],
          j = Gs(0.4122214708 * $ + 0.5363325363 * E + 0.0514459929 * A),
          J = Gs(0.2119034982 * $ + 0.6806995451 * E + 0.1073969566 * A),
          B = Gs(0.0883024619 * $ + 0.2817188376 * E + 0.6299787005 * A)
        return [
          0.2104542553 * j + 0.793617785 * J - 0.0040720468 * B,
          1.9779984951 * j - 2.428592205 * J + 0.4505937099 * B,
          0.0259040371 * j + 0.7827717662 * J - 0.808675766 * B,
        ]
      },
      Ya = ud
    function Us(a) {
      var o = Math.abs(a)
      return o < 0.04045
        ? a / 12.92
        : (id(a) || 1) * od((o + 0.055) / 1.055, 2.4)
    }
    var cd = _.unpack,
      Kr = Math.pow,
      fd = Math.sign,
      dd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = cd(a, "lab")
        var c = a[0],
          g = a[1],
          w = a[2],
          x = Kr(c + 0.3963377774 * g + 0.2158037573 * w, 3),
          b = Kr(c - 0.1055613458 * g - 0.0638541728 * w, 3),
          $ = Kr(c - 0.0894841775 * g - 1.291485548 * w, 3)
        return [
          255 * Ks(4.0767416621 * x - 3.3077115913 * b + 0.2309699292 * $),
          255 * Ks(-1.2684380046 * x + 2.6097574011 * b - 0.3413193965 * $),
          255 * Ks(-0.0041960863 * x - 0.7034186147 * b + 1.707614701 * $),
          a.length > 3 ? a[3] : 1,
        ]
      },
      Xa = dd
    function Ks(a) {
      var o = Math.abs(a)
      return o > 0.0031308
        ? (fd(a) || 1) * (1.055 * Kr(o, 1 / 2.4) - 0.055)
        : a * 12.92
    }
    var hd = _.unpack,
      gd = _.type,
      pd = ge,
      Ja = I,
      Za = S,
      vd = Ya
    ;(Ja.prototype.oklab = function () {
      return vd(this._rgb)
    }),
      (pd.oklab = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ja,
          [null].concat(a, ["oklab"]),
        ))()
      }),
      (Za.format.oklab = Xa),
      Za.autodetect.push({
        p: 3,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = hd(a, "oklab")), gd(a) === "array" && a.length === 3))
            return "oklab"
        },
      })
    var bd = _.unpack,
      md = Ya,
      yd = Na,
      wd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = bd(a, "rgb"),
          g = c[0],
          w = c[1],
          x = c[2],
          b = md(g, w, x),
          $ = b[0],
          E = b[1],
          A = b[2]
        return yd($, E, A)
      },
      xd = wd,
      _d = _.unpack,
      kd = ja,
      $d = Xa,
      Ed = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = _d(a, "lch")
        var c = a[0],
          g = a[1],
          w = a[2],
          x = kd(c, g, w),
          b = x[0],
          $ = x[1],
          E = x[2],
          A = $d(b, $, E),
          j = A[0],
          J = A[1],
          B = A[2]
        return [j, J, B, a.length > 3 ? a[3] : 1]
      },
      Sd = Ed,
      Cd = _.unpack,
      Pd = _.type,
      Md = ge,
      Qa = I,
      eo = S,
      Ad = xd
    ;(Qa.prototype.oklch = function () {
      return Ad(this._rgb)
    }),
      (Md.oklch = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Qa,
          [null].concat(a, ["oklch"]),
        ))()
      }),
      (eo.format.oklch = Sd),
      eo.autodetect.push({
        p: 3,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Cd(a, "oklch")), Pd(a) === "array" && a.length === 3))
            return "oklch"
        },
      })
    var to = I,
      Id = _.type
    to.prototype.alpha = function (a, o) {
      return (
        o === void 0 && (o = !1),
        a !== void 0 && Id(a) === "number"
          ? o
            ? ((this._rgb[3] = a), this)
            : new to([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb")
          : this._rgb[3]
      )
    }
    var Od = I
    Od.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var En = I,
      Rd = Wr
    ;(En.prototype.darken = function (a) {
      a === void 0 && (a = 1)
      var o = this,
        c = o.lab()
      return (c[0] -= Rd.Kn * a), new En(c, "lab").alpha(o.alpha(), !0)
    }),
      (En.prototype.brighten = function (a) {
        return a === void 0 && (a = 1), this.darken(-a)
      }),
      (En.prototype.darker = En.prototype.darken),
      (En.prototype.brighter = En.prototype.brighten)
    var Td = I
    Td.prototype.get = function (a) {
      var o = a.split("."),
        c = o[0],
        g = o[1],
        w = this[c]()
      if (g) {
        var x = c.indexOf(g) - (c.substr(0, 2) === "ok" ? 2 : 0)
        if (x > -1) return w[x]
        throw new Error("unknown channel " + g + " in mode " + c)
      } else return w
    }
    var Un = I,
      Nd = _.type,
      jd = Math.pow,
      Ld = 1e-7,
      Fd = 20
    Un.prototype.luminance = function (a) {
      if (a !== void 0 && Nd(a) === "number") {
        if (a === 0) return new Un([0, 0, 0, this._rgb[3]], "rgb")
        if (a === 1) return new Un([255, 255, 255, this._rgb[3]], "rgb")
        var o = this.luminance(),
          c = "rgb",
          g = Fd,
          w = function (b, $) {
            var E = b.interpolate($, 0.5, c),
              A = E.luminance()
            return Math.abs(a - A) < Ld || !g-- ? E : A > a ? w(b, E) : w(E, $)
          },
          x = (
            o > a
              ? w(new Un([0, 0, 0]), this)
              : w(this, new Un([255, 255, 255]))
          ).rgb()
        return new Un(x.concat([this._rgb[3]]))
      }
      return Bd.apply(void 0, this._rgb.slice(0, 3))
    }
    var Bd = function (a, o, c) {
        return (
          (a = Ys(a)),
          (o = Ys(o)),
          (c = Ys(c)),
          0.2126 * a + 0.7152 * o + 0.0722 * c
        )
      },
      Ys = function (a) {
        return (
          (a /= 255), a <= 0.03928 ? a / 12.92 : jd((a + 0.055) / 1.055, 2.4)
        )
      },
      It = {},
      no = I,
      ro = _.type,
      Yr = It,
      so = function (a, o, c) {
        c === void 0 && (c = 0.5)
        for (var g = [], w = arguments.length - 3; w-- > 0; )
          g[w] = arguments[w + 3]
        var x = g[0] || "lrgb"
        if ((!Yr[x] && !g.length && (x = Object.keys(Yr)[0]), !Yr[x]))
          throw new Error("interpolation mode " + x + " is not defined")
        return (
          ro(a) !== "object" && (a = new no(a)),
          ro(o) !== "object" && (o = new no(o)),
          Yr[x](a, o, c).alpha(a.alpha() + c * (o.alpha() - a.alpha()))
        )
      },
      lo = I,
      Dd = so
    lo.prototype.mix = lo.prototype.interpolate = function (a, o) {
      o === void 0 && (o = 0.5)
      for (var c = [], g = arguments.length - 2; g-- > 0; )
        c[g] = arguments[g + 2]
      return Dd.apply(void 0, [this, a, o].concat(c))
    }
    var ao = I
    ao.prototype.premultiply = function (a) {
      a === void 0 && (a = !1)
      var o = this._rgb,
        c = o[3]
      return a
        ? ((this._rgb = [o[0] * c, o[1] * c, o[2] * c, c]), this)
        : new ao([o[0] * c, o[1] * c, o[2] * c, c], "rgb")
    }
    var Xs = I,
      Hd = Wr
    ;(Xs.prototype.saturate = function (a) {
      a === void 0 && (a = 1)
      var o = this,
        c = o.lch()
      return (
        (c[1] += Hd.Kn * a),
        c[1] < 0 && (c[1] = 0),
        new Xs(c, "lch").alpha(o.alpha(), !0)
      )
    }),
      (Xs.prototype.desaturate = function (a) {
        return a === void 0 && (a = 1), this.saturate(-a)
      })
    var oo = I,
      io = _.type
    oo.prototype.set = function (a, o, c) {
      c === void 0 && (c = !1)
      var g = a.split("."),
        w = g[0],
        x = g[1],
        b = this[w]()
      if (x) {
        var $ = w.indexOf(x) - (w.substr(0, 2) === "ok" ? 2 : 0)
        if ($ > -1) {
          if (io(o) == "string")
            switch (o.charAt(0)) {
              case "+":
                b[$] += +o
                break
              case "-":
                b[$] += +o
                break
              case "*":
                b[$] *= +o.substr(1)
                break
              case "/":
                b[$] /= +o.substr(1)
                break
              default:
                b[$] = +o
            }
          else if (io(o) === "number") b[$] = o
          else throw new Error("unsupported value for Color.set")
          var E = new oo(b, w)
          return c ? ((this._rgb = E._rgb), this) : E
        }
        throw new Error("unknown channel " + x + " in mode " + w)
      } else return b
    }
    var zd = I,
      qd = function (a, o, c) {
        var g = a._rgb,
          w = o._rgb
        return new zd(
          g[0] + c * (w[0] - g[0]),
          g[1] + c * (w[1] - g[1]),
          g[2] + c * (w[2] - g[2]),
          "rgb",
        )
      }
    It.rgb = qd
    var Wd = I,
      Js = Math.sqrt,
      Kn = Math.pow,
      Vd = function (a, o, c) {
        var g = a._rgb,
          w = g[0],
          x = g[1],
          b = g[2],
          $ = o._rgb,
          E = $[0],
          A = $[1],
          j = $[2]
        return new Wd(
          Js(Kn(w, 2) * (1 - c) + Kn(E, 2) * c),
          Js(Kn(x, 2) * (1 - c) + Kn(A, 2) * c),
          Js(Kn(b, 2) * (1 - c) + Kn(j, 2) * c),
          "rgb",
        )
      }
    It.lrgb = Vd
    var Gd = I,
      Ud = function (a, o, c) {
        var g = a.lab(),
          w = o.lab()
        return new Gd(
          g[0] + c * (w[0] - g[0]),
          g[1] + c * (w[1] - g[1]),
          g[2] + c * (w[2] - g[2]),
          "lab",
        )
      }
    It.lab = Ud
    var uo = I,
      Yn = function (a, o, c, g) {
        var w, x, b, $
        g === "hsl"
          ? ((b = a.hsl()), ($ = o.hsl()))
          : g === "hsv"
            ? ((b = a.hsv()), ($ = o.hsv()))
            : g === "hcg"
              ? ((b = a.hcg()), ($ = o.hcg()))
              : g === "hsi"
                ? ((b = a.hsi()), ($ = o.hsi()))
                : g === "lch" || g === "hcl"
                  ? ((g = "hcl"), (b = a.hcl()), ($ = o.hcl()))
                  : g === "oklch" &&
                    ((b = a.oklch().reverse()), ($ = o.oklch().reverse()))
        var E, A, j, J, B, re
        ;(g.substr(0, 1) === "h" || g === "oklch") &&
          ((w = b),
          (E = w[0]),
          (j = w[1]),
          (B = w[2]),
          (x = $),
          (A = x[0]),
          (J = x[1]),
          (re = x[2]))
        var te, we, $e, Se
        return (
          !isNaN(E) && !isNaN(A)
            ? (A > E && A - E > 180
                ? (Se = A - (E + 360))
                : A < E && E - A > 180
                  ? (Se = A + 360 - E)
                  : (Se = A - E),
              (we = E + c * Se))
            : isNaN(E)
              ? isNaN(A)
                ? (we = Number.NaN)
                : ((we = A), (B == 1 || B == 0) && g != "hsv" && (te = J))
              : ((we = E), (re == 1 || re == 0) && g != "hsv" && (te = j)),
          te === void 0 && (te = j + c * (J - j)),
          ($e = B + c * (re - B)),
          g === "oklch" ? new uo([$e, te, we], g) : new uo([we, te, $e], g)
        )
      },
      Kd = Yn,
      co = function (a, o, c) {
        return Kd(a, o, c, "lch")
      }
    ;(It.lch = co), (It.hcl = co)
    var Yd = I,
      Xd = function (a, o, c) {
        var g = a.num(),
          w = o.num()
        return new Yd(g + c * (w - g), "num")
      }
    It.num = Xd
    var Jd = Yn,
      Zd = function (a, o, c) {
        return Jd(a, o, c, "hcg")
      }
    It.hcg = Zd
    var Qd = Yn,
      e0 = function (a, o, c) {
        return Qd(a, o, c, "hsi")
      }
    It.hsi = e0
    var t0 = Yn,
      n0 = function (a, o, c) {
        return t0(a, o, c, "hsl")
      }
    It.hsl = n0
    var r0 = Yn,
      s0 = function (a, o, c) {
        return r0(a, o, c, "hsv")
      }
    It.hsv = s0
    var l0 = I,
      a0 = function (a, o, c) {
        var g = a.oklab(),
          w = o.oklab()
        return new l0(
          g[0] + c * (w[0] - g[0]),
          g[1] + c * (w[1] - g[1]),
          g[2] + c * (w[2] - g[2]),
          "oklab",
        )
      }
    It.oklab = a0
    var o0 = Yn,
      i0 = function (a, o, c) {
        return o0(a, o, c, "oklch")
      }
    It.oklch = i0
    var Zs = I,
      u0 = _.clip_rgb,
      Qs = Math.pow,
      el = Math.sqrt,
      tl = Math.PI,
      fo = Math.cos,
      ho = Math.sin,
      c0 = Math.atan2,
      f0 = function (a, o, c) {
        o === void 0 && (o = "lrgb"), c === void 0 && (c = null)
        var g = a.length
        c ||
          (c = Array.from(new Array(g)).map(function () {
            return 1
          }))
        var w =
          g /
          c.reduce(function (we, $e) {
            return we + $e
          })
        if (
          (c.forEach(function (we, $e) {
            c[$e] *= w
          }),
          (a = a.map(function (we) {
            return new Zs(we)
          })),
          o === "lrgb")
        )
          return d0(a, c)
        for (
          var x = a.shift(), b = x.get(o), $ = [], E = 0, A = 0, j = 0;
          j < b.length;
          j++
        )
          if (
            ((b[j] = (b[j] || 0) * c[0]),
            $.push(isNaN(b[j]) ? 0 : c[0]),
            o.charAt(j) === "h" && !isNaN(b[j]))
          ) {
            var J = (b[j] / 180) * tl
            ;(E += fo(J) * c[0]), (A += ho(J) * c[0])
          }
        var B = x.alpha() * c[0]
        a.forEach(function (we, $e) {
          var Se = we.get(o)
          B += we.alpha() * c[$e + 1]
          for (var Oe = 0; Oe < b.length; Oe++)
            if (!isNaN(Se[Oe]))
              if ((($[Oe] += c[$e + 1]), o.charAt(Oe) === "h")) {
                var it = (Se[Oe] / 180) * tl
                ;(E += fo(it) * c[$e + 1]), (A += ho(it) * c[$e + 1])
              } else b[Oe] += Se[Oe] * c[$e + 1]
        })
        for (var re = 0; re < b.length; re++)
          if (o.charAt(re) === "h") {
            for (var te = (c0(A / $[re], E / $[re]) / tl) * 180; te < 0; )
              te += 360
            for (; te >= 360; ) te -= 360
            b[re] = te
          } else b[re] = b[re] / $[re]
        return (B /= g), new Zs(b, o).alpha(B > 0.99999 ? 1 : B, !0)
      },
      d0 = function (a, o) {
        for (var c = a.length, g = [0, 0, 0, 0], w = 0; w < a.length; w++) {
          var x = a[w],
            b = o[w] / c,
            $ = x._rgb
          ;(g[0] += Qs($[0], 2) * b),
            (g[1] += Qs($[1], 2) * b),
            (g[2] += Qs($[2], 2) * b),
            (g[3] += $[3] * b)
        }
        return (
          (g[0] = el(g[0])),
          (g[1] = el(g[1])),
          (g[2] = el(g[2])),
          g[3] > 0.9999999 && (g[3] = 1),
          new Zs(u0(g))
        )
      },
      Lt = ge,
      Xn = _.type,
      h0 = Math.pow,
      nl = function (a) {
        var o = "rgb",
          c = Lt("#ccc"),
          g = 0,
          w = [0, 1],
          x = [],
          b = [0, 0],
          $ = !1,
          E = [],
          A = !1,
          j = 0,
          J = 1,
          B = !1,
          re = {},
          te = !0,
          we = 1,
          $e = function (D) {
            if (
              ((D = D || ["#fff", "#000"]),
              D &&
                Xn(D) === "string" &&
                Lt.brewer &&
                Lt.brewer[D.toLowerCase()] &&
                (D = Lt.brewer[D.toLowerCase()]),
              Xn(D) === "array")
            ) {
              D.length === 1 && (D = [D[0], D[0]]), (D = D.slice(0))
              for (var fe = 0; fe < D.length; fe++) D[fe] = Lt(D[fe])
              x.length = 0
              for (var ke = 0; ke < D.length; ke++) x.push(ke / (D.length - 1))
            }
            return $t(), (E = D)
          },
          Se = function (D) {
            if ($ != null) {
              for (var fe = $.length - 1, ke = 0; ke < fe && D >= $[ke]; ) ke++
              return ke - 1
            }
            return 0
          },
          Oe = function (D) {
            return D
          },
          it = function (D) {
            return D
          },
          lt = function (D, fe) {
            var ke, xe
            if ((fe == null && (fe = !1), isNaN(D) || D === null)) return c
            if (fe) xe = D
            else if ($ && $.length > 2) {
              var ut = Se(D)
              xe = ut / ($.length - 2)
            } else J !== j ? (xe = (D - j) / (J - j)) : (xe = 1)
            ;(xe = it(xe)),
              fe || (xe = Oe(xe)),
              we !== 1 && (xe = h0(xe, we)),
              (xe = b[0] + xe * (1 - b[0] - b[1])),
              (xe = Math.min(1, Math.max(0, xe)))
            var De = Math.floor(xe * 1e4)
            if (te && re[De]) ke = re[De]
            else {
              if (Xn(E) === "array")
                for (var Ce = 0; Ce < x.length; Ce++) {
                  var Te = x[Ce]
                  if (xe <= Te) {
                    ke = E[Ce]
                    break
                  }
                  if (xe >= Te && Ce === x.length - 1) {
                    ke = E[Ce]
                    break
                  }
                  if (xe > Te && xe < x[Ce + 1]) {
                    ;(xe = (xe - Te) / (x[Ce + 1] - Te)),
                      (ke = Lt.interpolate(E[Ce], E[Ce + 1], xe, o))
                    break
                  }
                }
              else Xn(E) === "function" && (ke = E(xe))
              te && (re[De] = ke)
            }
            return ke
          },
          $t = function () {
            return (re = {})
          }
        $e(a)
        var Ee = function (D) {
          var fe = Lt(lt(D))
          return A && fe[A] ? fe[A]() : fe
        }
        return (
          (Ee.classes = function (D) {
            if (D != null) {
              if (Xn(D) === "array") ($ = D), (w = [D[0], D[D.length - 1]])
              else {
                var fe = Lt.analyze(w)
                D === 0 ? ($ = [fe.min, fe.max]) : ($ = Lt.limits(fe, "e", D))
              }
              return Ee
            }
            return $
          }),
          (Ee.domain = function (D) {
            if (!arguments.length) return w
            ;(j = D[0]), (J = D[D.length - 1]), (x = [])
            var fe = E.length
            if (D.length === fe && j !== J)
              for (var ke = 0, xe = Array.from(D); ke < xe.length; ke += 1) {
                var ut = xe[ke]
                x.push((ut - j) / (J - j))
              }
            else {
              for (var De = 0; De < fe; De++) x.push(De / (fe - 1))
              if (D.length > 2) {
                var Ce = D.map(function (Ne, je) {
                    return je / (D.length - 1)
                  }),
                  Te = D.map(function (Ne) {
                    return (Ne - j) / (J - j)
                  })
                Te.every(function (Ne, je) {
                  return Ce[je] === Ne
                }) ||
                  (it = function (Ne) {
                    if (Ne <= 0 || Ne >= 1) return Ne
                    for (var je = 0; Ne >= Te[je + 1]; ) je++
                    var Bt = (Ne - Te[je]) / (Te[je + 1] - Te[je]),
                      dn = Ce[je] + Bt * (Ce[je + 1] - Ce[je])
                    return dn
                  })
              }
            }
            return (w = [j, J]), Ee
          }),
          (Ee.mode = function (D) {
            return arguments.length ? ((o = D), $t(), Ee) : o
          }),
          (Ee.range = function (D, fe) {
            return $e(D), Ee
          }),
          (Ee.out = function (D) {
            return (A = D), Ee
          }),
          (Ee.spread = function (D) {
            return arguments.length ? ((g = D), Ee) : g
          }),
          (Ee.correctLightness = function (D) {
            return (
              D == null && (D = !0),
              (B = D),
              $t(),
              B
                ? (Oe = function (fe) {
                    for (
                      var ke = lt(0, !0).lab()[0],
                        xe = lt(1, !0).lab()[0],
                        ut = ke > xe,
                        De = lt(fe, !0).lab()[0],
                        Ce = ke + (xe - ke) * fe,
                        Te = De - Ce,
                        Ne = 0,
                        je = 1,
                        Bt = 20;
                      Math.abs(Te) > 0.01 && Bt-- > 0;

                    )
                      (function () {
                        return (
                          ut && (Te *= -1),
                          Te < 0
                            ? ((Ne = fe), (fe += (je - fe) * 0.5))
                            : ((je = fe), (fe += (Ne - fe) * 0.5)),
                          (De = lt(fe, !0).lab()[0]),
                          (Te = De - Ce)
                        )
                      })()
                    return fe
                  })
                : (Oe = function (fe) {
                    return fe
                  }),
              Ee
            )
          }),
          (Ee.padding = function (D) {
            return D != null
              ? (Xn(D) === "number" && (D = [D, D]), (b = D), Ee)
              : b
          }),
          (Ee.colors = function (D, fe) {
            arguments.length < 2 && (fe = "hex")
            var ke = []
            if (arguments.length === 0) ke = E.slice(0)
            else if (D === 1) ke = [Ee(0.5)]
            else if (D > 1) {
              var xe = w[0],
                ut = w[1] - xe
              ke = g0(0, D, !1).map(function (je) {
                return Ee(xe + (je / (D - 1)) * ut)
              })
            } else {
              a = []
              var De = []
              if ($ && $.length > 2)
                for (
                  var Ce = 1, Te = $.length, Ne = 1 <= Te;
                  Ne ? Ce < Te : Ce > Te;
                  Ne ? Ce++ : Ce--
                )
                  De.push(($[Ce - 1] + $[Ce]) * 0.5)
              else De = w
              ke = De.map(function (je) {
                return Ee(je)
              })
            }
            return (
              Lt[fe] &&
                (ke = ke.map(function (je) {
                  return je[fe]()
                })),
              ke
            )
          }),
          (Ee.cache = function (D) {
            return D != null ? ((te = D), Ee) : te
          }),
          (Ee.gamma = function (D) {
            return D != null ? ((we = D), Ee) : we
          }),
          (Ee.nodata = function (D) {
            return D != null ? ((c = Lt(D)), Ee) : c
          }),
          Ee
        )
      }
    function g0(a, o, c) {
      for (
        var g = [], w = a < o, x = c ? (w ? o + 1 : o - 1) : o, b = a;
        w ? b < x : b > x;
        w ? b++ : b--
      )
        g.push(b)
      return g
    }
    var yr = I,
      p0 = nl,
      v0 = function (a) {
        for (var o = [1, 1], c = 1; c < a; c++) {
          for (var g = [1], w = 1; w <= o.length; w++)
            g[w] = (o[w] || 0) + o[w - 1]
          o = g
        }
        return o
      },
      b0 = function (a) {
        var o, c, g, w, x, b, $
        if (
          ((a = a.map(function (B) {
            return new yr(B)
          })),
          a.length === 2)
        )
          (o = a.map(function (B) {
            return B.lab()
          })),
            (x = o[0]),
            (b = o[1]),
            (w = function (B) {
              var re = [0, 1, 2].map(function (te) {
                return x[te] + B * (b[te] - x[te])
              })
              return new yr(re, "lab")
            })
        else if (a.length === 3)
          (c = a.map(function (B) {
            return B.lab()
          })),
            (x = c[0]),
            (b = c[1]),
            ($ = c[2]),
            (w = function (B) {
              var re = [0, 1, 2].map(function (te) {
                return (
                  (1 - B) * (1 - B) * x[te] +
                  2 * (1 - B) * B * b[te] +
                  B * B * $[te]
                )
              })
              return new yr(re, "lab")
            })
        else if (a.length === 4) {
          var E
          ;(g = a.map(function (B) {
            return B.lab()
          })),
            (x = g[0]),
            (b = g[1]),
            ($ = g[2]),
            (E = g[3]),
            (w = function (B) {
              var re = [0, 1, 2].map(function (te) {
                return (
                  (1 - B) * (1 - B) * (1 - B) * x[te] +
                  3 * (1 - B) * (1 - B) * B * b[te] +
                  3 * (1 - B) * B * B * $[te] +
                  B * B * B * E[te]
                )
              })
              return new yr(re, "lab")
            })
        } else if (a.length >= 5) {
          var A, j, J
          ;(A = a.map(function (B) {
            return B.lab()
          })),
            (J = a.length - 1),
            (j = v0(J)),
            (w = function (B) {
              var re = 1 - B,
                te = [0, 1, 2].map(function (we) {
                  return A.reduce(function ($e, Se, Oe) {
                    return (
                      $e +
                      j[Oe] * Math.pow(re, J - Oe) * Math.pow(B, Oe) * Se[we]
                    )
                  }, 0)
                })
              return new yr(te, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return w
      },
      m0 = function (a) {
        var o = b0(a)
        return (
          (o.scale = function () {
            return p0(o)
          }),
          o
        )
      },
      rl = ge,
      Ft = function (a, o, c) {
        if (!Ft[c]) throw new Error("unknown blend mode " + c)
        return Ft[c](a, o)
      },
      cn = function (a) {
        return function (o, c) {
          var g = rl(c).rgb(),
            w = rl(o).rgb()
          return rl.rgb(a(g, w))
        }
      },
      fn = function (a) {
        return function (o, c) {
          var g = []
          return (
            (g[0] = a(o[0], c[0])),
            (g[1] = a(o[1], c[1])),
            (g[2] = a(o[2], c[2])),
            g
          )
        }
      },
      y0 = function (a) {
        return a
      },
      w0 = function (a, o) {
        return (a * o) / 255
      },
      x0 = function (a, o) {
        return a > o ? o : a
      },
      _0 = function (a, o) {
        return a > o ? a : o
      },
      k0 = function (a, o) {
        return 255 * (1 - (1 - a / 255) * (1 - o / 255))
      },
      $0 = function (a, o) {
        return o < 128
          ? (2 * a * o) / 255
          : 255 * (1 - 2 * (1 - a / 255) * (1 - o / 255))
      },
      E0 = function (a, o) {
        return 255 * (1 - (1 - o / 255) / (a / 255))
      },
      S0 = function (a, o) {
        return a === 255
          ? 255
          : ((a = (255 * (o / 255)) / (1 - a / 255)), a > 255 ? 255 : a)
      }
    ;(Ft.normal = cn(fn(y0))),
      (Ft.multiply = cn(fn(w0))),
      (Ft.screen = cn(fn(k0))),
      (Ft.overlay = cn(fn($0))),
      (Ft.darken = cn(fn(x0))),
      (Ft.lighten = cn(fn(_0))),
      (Ft.dodge = cn(fn(S0))),
      (Ft.burn = cn(fn(E0)))
    for (
      var C0 = Ft,
        sl = _.type,
        P0 = _.clip_rgb,
        M0 = _.TWOPI,
        A0 = Math.pow,
        I0 = Math.sin,
        O0 = Math.cos,
        go = ge,
        R0 = function (a, o, c, g, w) {
          a === void 0 && (a = 300),
            o === void 0 && (o = -1.5),
            c === void 0 && (c = 1),
            g === void 0 && (g = 1),
            w === void 0 && (w = [0, 1])
          var x = 0,
            b
          sl(w) === "array" ? (b = w[1] - w[0]) : ((b = 0), (w = [w, w]))
          var $ = function (E) {
            var A = M0 * ((a + 120) / 360 + o * E),
              j = A0(w[0] + b * E, g),
              J = x !== 0 ? c[0] + E * x : c,
              B = (J * j * (1 - j)) / 2,
              re = O0(A),
              te = I0(A),
              we = j + B * (-0.14861 * re + 1.78277 * te),
              $e = j + B * (-0.29227 * re - 0.90649 * te),
              Se = j + B * (1.97294 * re)
            return go(P0([we * 255, $e * 255, Se * 255, 1]))
          }
          return (
            ($.start = function (E) {
              return E == null ? a : ((a = E), $)
            }),
            ($.rotations = function (E) {
              return E == null ? o : ((o = E), $)
            }),
            ($.gamma = function (E) {
              return E == null ? g : ((g = E), $)
            }),
            ($.hue = function (E) {
              return E == null
                ? c
                : ((c = E),
                  sl(c) === "array"
                    ? ((x = c[1] - c[0]), x === 0 && (c = c[1]))
                    : (x = 0),
                  $)
            }),
            ($.lightness = function (E) {
              return E == null
                ? w
                : (sl(E) === "array"
                    ? ((w = E), (b = E[1] - E[0]))
                    : ((w = [E, E]), (b = 0)),
                  $)
            }),
            ($.scale = function () {
              return go.scale($)
            }),
            $.hue(c),
            $
          )
        },
        T0 = I,
        N0 = "0123456789abcdef",
        j0 = Math.floor,
        L0 = Math.random,
        F0 = function () {
          for (var a = "#", o = 0; o < 6; o++) a += N0.charAt(j0(L0() * 16))
          return new T0(a, "hex")
        },
        ll = h,
        po = Math.log,
        B0 = Math.pow,
        D0 = Math.floor,
        H0 = Math.abs,
        vo = function (a, o) {
          o === void 0 && (o = null)
          var c = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0,
          }
          return (
            ll(a) === "object" && (a = Object.values(a)),
            a.forEach(function (g) {
              o && ll(g) === "object" && (g = g[o]),
                g != null &&
                  !isNaN(g) &&
                  (c.values.push(g),
                  (c.sum += g),
                  g < c.min && (c.min = g),
                  g > c.max && (c.max = g),
                  (c.count += 1))
            }),
            (c.domain = [c.min, c.max]),
            (c.limits = function (g, w) {
              return bo(c, g, w)
            }),
            c
          )
        },
        bo = function (a, o, c) {
          o === void 0 && (o = "equal"),
            c === void 0 && (c = 7),
            ll(a) == "array" && (a = vo(a))
          var g = a.min,
            w = a.max,
            x = a.values.sort(function (ol, il) {
              return ol - il
            })
          if (c === 1) return [g, w]
          var b = []
          if (
            (o.substr(0, 1) === "c" && (b.push(g), b.push(w)),
            o.substr(0, 1) === "e")
          ) {
            b.push(g)
            for (var $ = 1; $ < c; $++) b.push(g + ($ / c) * (w - g))
            b.push(w)
          } else if (o.substr(0, 1) === "l") {
            if (g <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var E = Math.LOG10E * po(g),
              A = Math.LOG10E * po(w)
            b.push(g)
            for (var j = 1; j < c; j++) b.push(B0(10, E + (j / c) * (A - E)))
            b.push(w)
          } else if (o.substr(0, 1) === "q") {
            b.push(g)
            for (var J = 1; J < c; J++) {
              var B = ((x.length - 1) * J) / c,
                re = D0(B)
              if (re === B) b.push(x[re])
              else {
                var te = B - re
                b.push(x[re] * (1 - te) + x[re + 1] * te)
              }
            }
            b.push(w)
          } else if (o.substr(0, 1) === "k") {
            var we,
              $e = x.length,
              Se = new Array($e),
              Oe = new Array(c),
              it = !0,
              lt = 0,
              $t = null
            ;($t = []), $t.push(g)
            for (var Ee = 1; Ee < c; Ee++) $t.push(g + (Ee / c) * (w - g))
            for ($t.push(w); it; ) {
              for (var D = 0; D < c; D++) Oe[D] = 0
              for (var fe = 0; fe < $e; fe++)
                for (
                  var ke = x[fe], xe = Number.MAX_VALUE, ut = void 0, De = 0;
                  De < c;
                  De++
                ) {
                  var Ce = H0($t[De] - ke)
                  Ce < xe && ((xe = Ce), (ut = De)), Oe[ut]++, (Se[fe] = ut)
                }
              for (var Te = new Array(c), Ne = 0; Ne < c; Ne++) Te[Ne] = null
              for (var je = 0; je < $e; je++)
                (we = Se[je]),
                  Te[we] === null ? (Te[we] = x[je]) : (Te[we] += x[je])
              for (var Bt = 0; Bt < c; Bt++) Te[Bt] *= 1 / Oe[Bt]
              it = !1
              for (var dn = 0; dn < c; dn++)
                if (Te[dn] !== $t[dn]) {
                  it = !0
                  break
                }
              ;($t = Te), lt++, lt > 200 && (it = !1)
            }
            for (var hn = {}, Jn = 0; Jn < c; Jn++) hn[Jn] = []
            for (var Zn = 0; Zn < $e; Zn++) (we = Se[Zn]), hn[we].push(x[Zn])
            for (var Qt = [], Sn = 0; Sn < c; Sn++)
              Qt.push(hn[Sn][0]), Qt.push(hn[Sn][hn[Sn].length - 1])
            ;(Qt = Qt.sort(function (ol, il) {
              return ol - il
            })),
              b.push(Qt[0])
            for (var wr = 1; wr < Qt.length; wr += 2) {
              var Cn = Qt[wr]
              !isNaN(Cn) && b.indexOf(Cn) === -1 && b.push(Cn)
            }
          }
          return b
        },
        mo = { analyze: vo, limits: bo },
        yo = I,
        z0 = function (a, o) {
          ;(a = new yo(a)), (o = new yo(o))
          var c = a.luminance(),
            g = o.luminance()
          return c > g ? (c + 0.05) / (g + 0.05) : (g + 0.05) / (c + 0.05)
        },
        wo = I,
        Zt = Math.sqrt,
        Ye = Math.pow,
        q0 = Math.min,
        W0 = Math.max,
        xo = Math.atan2,
        _o = Math.abs,
        Xr = Math.cos,
        ko = Math.sin,
        V0 = Math.exp,
        $o = Math.PI,
        G0 = function (a, o, c, g, w) {
          c === void 0 && (c = 1),
            g === void 0 && (g = 1),
            w === void 0 && (w = 1)
          var x = function (Cn) {
              return (360 * Cn) / (2 * $o)
            },
            b = function (Cn) {
              return (2 * $o * Cn) / 360
            }
          ;(a = new wo(a)), (o = new wo(o))
          var $ = Array.from(a.lab()),
            E = $[0],
            A = $[1],
            j = $[2],
            J = Array.from(o.lab()),
            B = J[0],
            re = J[1],
            te = J[2],
            we = (E + B) / 2,
            $e = Zt(Ye(A, 2) + Ye(j, 2)),
            Se = Zt(Ye(re, 2) + Ye(te, 2)),
            Oe = ($e + Se) / 2,
            it = 0.5 * (1 - Zt(Ye(Oe, 7) / (Ye(Oe, 7) + Ye(25, 7)))),
            lt = A * (1 + it),
            $t = re * (1 + it),
            Ee = Zt(Ye(lt, 2) + Ye(j, 2)),
            D = Zt(Ye($t, 2) + Ye(te, 2)),
            fe = (Ee + D) / 2,
            ke = x(xo(j, lt)),
            xe = x(xo(te, $t)),
            ut = ke >= 0 ? ke : ke + 360,
            De = xe >= 0 ? xe : xe + 360,
            Ce = _o(ut - De) > 180 ? (ut + De + 360) / 2 : (ut + De) / 2,
            Te =
              1 -
              0.17 * Xr(b(Ce - 30)) +
              0.24 * Xr(b(2 * Ce)) +
              0.32 * Xr(b(3 * Ce + 6)) -
              0.2 * Xr(b(4 * Ce - 63)),
            Ne = De - ut
          ;(Ne = _o(Ne) <= 180 ? Ne : De <= ut ? Ne + 360 : Ne - 360),
            (Ne = 2 * Zt(Ee * D) * ko(b(Ne) / 2))
          var je = B - E,
            Bt = D - Ee,
            dn = 1 + (0.015 * Ye(we - 50, 2)) / Zt(20 + Ye(we - 50, 2)),
            hn = 1 + 0.045 * fe,
            Jn = 1 + 0.015 * fe * Te,
            Zn = 30 * V0(-Ye((Ce - 275) / 25, 2)),
            Qt = 2 * Zt(Ye(fe, 7) / (Ye(fe, 7) + Ye(25, 7))),
            Sn = -Qt * ko(2 * b(Zn)),
            wr = Zt(
              Ye(je / (c * dn), 2) +
                Ye(Bt / (g * hn), 2) +
                Ye(Ne / (w * Jn), 2) +
                Sn * (Bt / (g * hn)) * (Ne / (w * Jn)),
            )
          return W0(0, q0(100, wr))
        },
        Eo = I,
        U0 = function (a, o, c) {
          c === void 0 && (c = "lab"), (a = new Eo(a)), (o = new Eo(o))
          var g = a.get(c),
            w = o.get(c),
            x = 0
          for (var b in g) {
            var $ = (g[b] || 0) - (w[b] || 0)
            x += $ * $
          }
          return Math.sqrt(x)
        },
        K0 = I,
        Y0 = function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          try {
            return (
              new (Function.prototype.bind.apply(K0, [null].concat(a)))(), !0
            )
          } catch {
            return !1
          }
        },
        So = ge,
        Co = nl,
        X0 = {
          cool: function () {
            return Co([So.hsl(180, 1, 0.9), So.hsl(250, 0.7, 0.4)])
          },
          hot: function () {
            return Co(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
          },
        },
        Jr = {
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
        al = 0,
        Po = Object.keys(Jr);
      al < Po.length;
      al += 1
    ) {
      var Mo = Po[al]
      Jr[Mo.toLowerCase()] = Jr[Mo]
    }
    var J0 = Jr,
      st = ge
    ;(st.average = f0),
      (st.bezier = m0),
      (st.blend = C0),
      (st.cubehelix = R0),
      (st.mix = st.interpolate = so),
      (st.random = F0),
      (st.scale = nl),
      (st.analyze = mo.analyze),
      (st.contrast = z0),
      (st.deltaE = G0),
      (st.distance = U0),
      (st.limits = mo.limits),
      (st.valid = Y0),
      (st.scales = X0),
      (st.colors = Da),
      (st.brewer = J0)
    var Z0 = st
    return Z0
  })
})(qu)
var Gv = qu.exports
const Je = Vv(Gv),
  Uv = {
    __name: "PanelDesign",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          let s = document.querySelectorAll("tr"),
            l
          r == 5
            ? (l = Je("#e2e8f0"))
            : r == 4
              ? (l = Je("#cbd5e1"))
              : r == 3
                ? (l = Je("#475569"))
                : r == 2
                  ? (l = Je("#1e293b"))
                  : r == 1 && (l = Je("#0f172a"))
          for (let i = 1; i < s.length; i++)
            i % 2 == 0
              ? (s[i].style.backgroundColor = l.brighten(0))
              : (s[i].style.backgroundColor = l.brighten(0.2))
        }
      return (
        bt(() => {
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
  Kv = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Yv = { class: "prose text-center" },
  Xv = v("br", null, null, -1),
  Jv = { href: "/pricing" },
  Zv = { id: "cta" },
  ha = {
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
          const l = "contact"
          let i = document.getElementsByName("name")[0].value,
            u = document.getElementsByName("email")[0].value,
            f = document.getElementsByName("message")[0].value,
            h = window.location.href,
            d = new XMLHttpRequest()
          d.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            d.setRequestHeader("Content-Type", "application/json"),
            d.send(
              JSON.stringify({
                form: l,
                name: i,
                email: u,
                message: f,
                referrer: h,
              }),
            ),
            (d.onloadend = function () {
              if (
                (console.log(
                  `Status: ${d.status}, Response: ${d.responseText}`,
                ),
                d.status == 200)
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
                for (let S = 0; S < C.length; S++) C[S].style.display = "none"
                let L = m.getElementsByTagName("textarea")[0]
                L.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, l) => (
        ce(),
        Pe(
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
            v("div", Yv, [
              v(
                "h4",
                { class: M(["text-2xl", t(e.brightness)]) },
                [
                  _e(" Piqued your interest?"),
                  Xv,
                  _e(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              v("a", Jv, [
                v(
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
              v(
                "h4",
                { class: M(["text-2xl mt-8", t(e.brightness)]) },
                " Looking for a new site or a custom quote? Hit me up ",
                2,
              ),
              v("form", Zv, [
                v("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Name",
                  class: M(["rounded p-2 w-full", n]),
                }),
                v("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                v("textarea", {
                  placeholder: "Message",
                  name: "message",
                  class: M(["rounded p-2 w-full mt-3", n]),
                }),
                v(
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
  Bn = (e) => (ra("data-v-8a92440e"), (e = e()), sa(), e),
  Qv = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  e1 = { class: "flex flex-col items-center justify-center w-full" },
  t1 = { viewBox: "0 0 36 36", class: "chart" },
  n1 = Bn(() =>
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
  r1 = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  s1 = Bn(() =>
    v(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  l1 = Bn(() =>
    v(
      "p",
      null,
      [
        _e(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        v("b", null, "315 KB"),
        _e(". That's half of the classic SNES game "),
        v("em", null, "The Legend of Zelda: A Link to The Past"),
        _e(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  a1 = Bn(() => v("p", null, "You want fast? Let's make it happen.", -1)),
  o1 = { id: "speedTable" },
  i1 = Bn(() =>
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
  u1 = { class: "flex" },
  c1 = { class: "flex" },
  f1 = Bn(() =>
    v(
      "tbody",
      null,
      [
        v("tr", null, [
          v("td", null, "Huge, resource-heavy images"),
          v("td", null, [
            _e(" Optimize your images. "),
            v("b", null, "A lot. "),
            _e(
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
  d1 = Bn(() => v("div", { class: "h-6" }, null, -1)),
  h1 = {
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
  g1 = Object.assign(h1, {
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
        l = (f) => {
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
          let h = document.querySelectorAll("tr"),
            d
          f == 5
            ? (d = Je("#e2e8f0"))
            : f == 4
              ? (d = Je("#cbd5e1"))
              : f == 3
                ? (d = Je("#475569"))
                : f == 2
                  ? (d = Je("#1e293b"))
                  : f == 1 && (d = Je("#0f172a"))
          for (let m = 1; m < h.length; m++)
            m % 2 == 0
              ? (h[m].style.backgroundColor = d.brighten(0))
              : (h[m].style.backgroundColor = d.brighten(0.2))
        }
      return (
        bt(() => {
          u(t.brightness)
        }),
        rn(
          () => t.brightness,
          (f, h) => {
            u(f)
          },
        ),
        (f, h) => (
          ce(),
          Pe("div", Qv, [
            v("div", e1, [
              v(
                "div",
                { id: "perfChart", class: M(r(e.brightness)) },
                [
                  (ce(),
                  Pe("svg", t1, [
                    n1,
                    v(
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
                      r1,
                    ),
                  ])),
                  v(
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
              v(
                "p",
                {
                  class: M(["text-sm italic opacity-50 mt-3", l(e.brightness)]),
                },
                [
                  _e(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  v(
                    "a",
                    { href: "", class: M(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              v(
                "div",
                {
                  class: M([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    l(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  v(
                    "h2",
                    { class: M(["text-2xl m-0", l(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  v(
                    "h2",
                    { class: M(["text-5xl", l(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  s1,
                  l1,
                  a1,
                  v("h3", { class: M(l(e.brightness)) }, "How I help", 2),
                  v("table", o1, [
                    i1,
                    v("thead", null, [
                      v("tr", null, [
                        v("th", null, [
                          v("div", u1, [
                            v(
                              "h4",
                              { class: M([l(e.brightness), "text-lg m-0"]) },
                              [
                                _e(" Problem "),
                                ae(
                                  de(fv),
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
                        v("th", null, [
                          v("div", c1, [
                            v(
                              "h4",
                              { class: M([l(e.brightness), "text-lg m-0"]) },
                              [
                                _e(" What I can do "),
                                ae(
                                  de(iv),
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
                    f1,
                  ]),
                ],
                2,
              ),
              d1,
              ae(ha, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  p1 = Dr(g1, [["__scopeId", "data-v-8a92440e"]]),
  v1 = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  b1 = { class: "lg:w-6/12 sm:w-12/12" },
  m1 = v(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  y1 = v("p", null, [v("b", null, " Don't worry, I can help!")], -1),
  w1 = v(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  x1 = { class: "flex items-center w-full" },
  _1 = v(
    "p",
    null,
    [
      _e(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      v("em", null, "very"),
      _e(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  k1 = v("div", { class: "h-3" }, null, -1),
  $1 = { class: "flex items-center w-full" },
  E1 = v(
    "p",
    null,
    [
      _e(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      v("em", null, "do"),
      _e(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  S1 = v("div", { class: "h-3" }, null, -1),
  C1 = { class: "flex items-center w-full" },
  P1 = v(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  M1 = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  A1 = { class: "prose text-center" },
  I1 = v("div", { class: "h-3" }, null, -1),
  O1 = v("div", { class: "h-3" }, null, -1),
  R1 = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      me(9274)
      const t = me(4709),
        n = me(new Date("2023-10-01")),
        r = me(new Date()),
        s = ie(
          () =>
            ((r.value.getFullYear() - n.value.getFullYear()) * 12 +
              (r.value.getMonth() - n.value.getMonth())) *
            t.value,
        ),
        l = (f) => (f > 1e6 ? Math.round(f / 1e6).toString() + "m" : f),
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
      return (f, h) => (
        ce(),
        Pe("div", v1, [
          v("div", b1, [
            v(
              "h2",
              { class: M(["text-left text-5xl", u(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            v(
              "p",
              {
                class: M([
                  "text-left text-sm italic opacity-50 mt-3",
                  u(e.brightness),
                ]),
              },
              [
                _e(" Website already secure? "),
                v("b", null, [
                  v(
                    "a",
                    { href: "", class: M(i(e.brightness)) },
                    "How sure",
                    2,
                  ),
                  _e(" are you?"),
                ]),
              ],
              2,
            ),
            v(
              "hr",
              { class: M(["mb-5 mt-1 w-6/12 opacity-25", u(e.brightness)]) },
              null,
              2,
            ),
            v(
              "div",
              { class: M(["prose", u(e.brightness)]) },
              [
                m1,
                y1,
                w1,
                v(
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
                    v("div", x1, [
                      ae(
                        de(ds),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      v(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    _1,
                  ],
                  2,
                ),
                k1,
                v(
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
                    v("div", $1, [
                      ae(
                        de(ds),
                        { size: "2rem", class: M(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      v(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    E1,
                  ],
                  2,
                ),
                S1,
                v(
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
                    v("div", C1, [
                      ae(
                        de(ds),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      v(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    P1,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          v("div", M1, [
            v(
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
                v("div", A1, [
                  v(
                    "h3",
                    {
                      class: M([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    St(l(s.value)) + "+ ",
                    3,
                  ),
                  v(
                    "h3",
                    { class: M(["text-xl", u(e.brightness)]) },
                    [
                      _e(" attacks blocked on "),
                      v(
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
                  v(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  v(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    [
                      v(
                        "a",
                        { href: "", class: M(i(e.brightness)) },
                        "Read more",
                        2,
                      ),
                      _e(" about the Bazaar project "),
                    ],
                    2,
                  ),
                ]),
              ],
              2,
            ),
            I1,
            v("hr", { class: M(["opacity-50", u(e.brightness)]) }, null, 2),
            O1,
            ae(ha, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  T1 = {
    __name: "PanelDesignOverhaul",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (r) => {
          let s = document.querySelectorAll("tr"),
            l
          r == 5
            ? (l = Je("#e2e8f0"))
            : r == 4
              ? (l = Je("#cbd5e1"))
              : r == 3
                ? (l = Je("#475569"))
                : r == 2
                  ? (l = Je("#1e293b"))
                  : r == 1 && (l = Je("#0f172a"))
          for (let i = 1; i < s.length; i++)
            i % 2 == 0
              ? (s[i].style.backgroundColor = l.brighten(0))
              : (s[i].style.backgroundColor = l.brighten(0.2))
        }
      return (
        bt(() => {
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
  N1 = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  j1 = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  L1 = { class: "flex w-full" },
  F1 = { class: "flex w-full pt-4 gap-2" },
  B1 = { class: "w-6/12" },
  D1 = { class: "w-6/12" },
  H1 = { class: "w-full flex" },
  z1 = { class: "w-6/12" },
  q1 = { class: "w-6/12 pb-3" },
  W1 = v("em", null, "huge", -1),
  V1 = v("div", { class: "h-6" }, null, -1),
  G1 = {
    __name: "PanelAccessibility",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (h) => {
          if (h >= 4) return "text-emerald-500"
          if (h == 3) return "text-orange-200"
          if (h == 2) return "text-orange-500"
          if (h == 1) return "text-orange-400"
        },
        r = me(!1),
        s = ie(() =>
          r.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        l = ie(() =>
          r.value
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        i = (h) => {
          if (h >= 4) return "text-slate-800"
          if (h == 3) return "text-slate-200"
          if (h == 2) return "text-slate-300"
          if (h == 1) return "text-slate-300"
        },
        u = (h) => {
          let d = document.querySelectorAll("tr"),
            m
          h == 5
            ? (m = Je("#e2e8f0"))
            : h == 4
              ? (m = Je("#cbd5e1"))
              : h == 3
                ? (m = Je("#475569"))
                : h == 2
                  ? (m = Je("#1e293b"))
                  : h == 1 && (m = Je("#0f172a"))
          for (let k = 1; k < d.length; k++)
            k % 2 == 0
              ? (d[k].style.backgroundColor = m.brighten(0))
              : (d[k].style.backgroundColor = m.brighten(0.2))
        },
        f = () => {
          ;(r.value = !r.value), r.value
        }
      return (
        bt(() => {
          u(t.brightness)
        }),
        rn(
          () => t.brightness,
          (h, d) => {
            u(h)
          },
        ),
        (h, d) => (
          ce(),
          Pe("div", N1, [
            v("div", j1, [
              v(
                "h2",
                { class: M(["text-5xl", i(e.brightness)]) },
                " 98% of websites don’t comply with the Web Content Accessibility Guidelines. ",
                2,
              ),
              v(
                "h3",
                { class: M(["text-2xl", i(e.brightness)]) },
                "Does yours?",
                2,
              ),
              v(
                "h4",
                { class: M(i(e.brightness)) },
                [
                  _e(" What are the "),
                  v(
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
              v(
                "p",
                { class: M(i(e.brightness)) },
                " The Web Content Accessibility Guidelines (WCAG) are a set of standards for making web content accessible to everyone. ",
                2,
              ),
              v(
                "p",
                { class: M(i(e.brightness)) },
                " I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. ",
                2,
              ),
              v(
                "h4",
                { class: M(i(e.brightness)) },
                ` Here's a real world example from a site I've seen. Which button is the "Submit" button? `,
                2,
              ),
              v(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do. ",
                2,
              ),
              v(
                "p",
                { class: M(i(e.brightness)) },
                " It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable. ",
                2,
              ),
              v("div", L1, [
                v(
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
                    r.value ? (ce(), Xe(de(zu), { key: 0 })) : tt("", !0),
                    r.value ? tt("", !0) : (ce(), Xe(de(tv), { key: 1 })),
                    _e(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              v("div", F1, [
                v("div", B1, [
                  v(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (ce(), Xe(de(gi), { key: 0 })) : tt("", !0)],
                    2,
                  ),
                ]),
                v("div", D1, [
                  v(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", l.value]) },
                    [r.value ? (ce(), Xe(de(Bl), { key: 0 })) : tt("", !0)],
                    2,
                  ),
                ]),
              ]),
              v(
                "h4",
                { class: M(["text-2xl", i(e.brightness)]) },
                " Here's a better version. ",
                2,
              ),
              v("div", H1, [
                v("div", z1, [
                  v(
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
                    [_e(" Submit "), ae(de(gi))],
                    2,
                  ),
                ]),
                v("div", q1, [
                  v(
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
                    [_e(" Cancel "), ae(de(Bl))],
                    2,
                  ),
                ]),
              ]),
              v(
                "p",
                { class: M(i(e.brightness)) },
                " These buttons have screen reader labels and don't rely on color to indicate which is which. ",
                2,
              ),
              v(
                "p",
                { class: M(i(e.brightness)) },
                [
                  _e(" Changes like these may seem small, but they make a "),
                  W1,
                  _e(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            V1,
            ae(ha, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  U1 = ["onMouseover"],
  K1 = {
    __name: "Services",
    props: { brightness: Number },
    setup(e) {
      const t = me([
        { id: 1, title: "Speed Optimization", icon: "GaugeCircle" },
        { id: 0, title: "Security Overhaul", icon: "ShieldCheck" },
        { id: 2, title: "Design Overhaul", icon: "ShowerHead" },
        { id: 3, title: "Web Development", icon: "PencilRuler" },
        { id: 4, title: "Web Design", icon: "Frame" },
        { id: 5, title: "Accessibility", icon: "EyeOff" },
      ])
      let n = me(0)
      const r = (l, i, u, f) => {
          if (i) {
            if (l == 5) return u === f ? "bg-emerald-600" : "bg-emerald-500"
            if (l == 4) return u === f ? "bg-emerald-600" : "bg-emerald-500"
            if (l == 3 || l == 1)
              return u === f ? "bg-orange-500" : "bg-orange-400"
            if (l == 2) return "bg-orange-600"
          } else if (u === f) {
            if (l == 5) return "bg-slate-300"
            if (l == 4) return "bg-slate-400"
            if (l == 3) return "bg-slate-700"
            if (l == 2) return "bg-slate-900"
            if (l == 1) return "bg-black"
          } else {
            if (l == 5) return "bg-slate-200"
            if (l == 4) return "bg-slate-300"
            if (l == 3) return "bg-slate-600"
            if (l == 2) return "bg-slate-800"
            if (l == 1) return "bg-slate-900"
          }
        },
        s = (l, i) => {
          if (i) return l >= 3 ? "text-slate-200" : "text-slate-800"
          if (l >= 4) return "text-emerald-500"
          if (l == 3) return "text-orange-200"
          if (l == 2) return "text-orange-500"
          if (l == 1) return "text-orange-400"
        }
      return (l, i) => (
        ce(),
        Xe(de(Up), null, {
          default: ct(() => [
            ae(
              de(Kp),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: ct(() => [
                  (ce(!0),
                  Pe(
                    Ue,
                    null,
                    Rr(
                      t.value,
                      (u) => (
                        ce(),
                        Xe(
                          de(Yp),
                          {
                            key: u.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: ct(({ selected: f }) => [
                              v(
                                "div",
                                {
                                  class: M([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, f, de(n), u.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (h) =>
                                    vt(n) ? (n.value = u.id) : (n = u.id),
                                  onMouseleave:
                                    i[0] ||
                                    (i[0] = (h) =>
                                      vt(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  u.id == 0
                                    ? (ce(),
                                      Xe(
                                        de(ds),
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
                                    : tt("", !0),
                                  u.id == 1
                                    ? (ce(),
                                      Xe(
                                        de(rv),
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
                                    : tt("", !0),
                                  u.id == 2
                                    ? (ce(),
                                      Xe(
                                        de(uv),
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
                                    : tt("", !0),
                                  u.id == 3
                                    ? (ce(),
                                      Xe(
                                        de(ov),
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
                                    : tt("", !0),
                                  u.id == 4
                                    ? (ce(),
                                      Xe(
                                        de(nv),
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
                                    : tt("", !0),
                                  u.id == 5
                                    ? (ce(),
                                      Xe(
                                        de(zu),
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
                                    : tt("", !0),
                                  v(
                                    "p",
                                    {
                                      class: M([
                                        "font-semibold cursor-pointer",
                                        s(e.brightness, f),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    St(u.title),
                                    3,
                                  ),
                                ],
                                42,
                                U1,
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
            ae(
              de(Xp),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: ct(() => [
                  ae(
                    de(Qn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(p1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(Qn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(R1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(Qn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(T1, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(Qn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(Kv, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(Qn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(Uv, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(Qn),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(G1, { brightness: e.brightness }, null, 8, [
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
  Y1 = { href: "/pricing" },
  X1 = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = me(!1)
      bt(() => {
        const r = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", r),
          $n(() => {
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
            v(
              "p",
              { class: M(["text-center", n(e.brightness)]) },
              " Get a free site speed audit with recommendations for optimizing. My gift to you. ",
              2,
            ),
            v("a", Y1, [
              v(
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
  pr = (e) => (ra("data-v-e20b9d11"), (e = e()), sa(), e),
  J1 = { class: "flex-col" },
  Z1 = { class: "prose py-5 flex-col w-full" },
  Q1 = pr(() => v("br", null, null, -1)),
  eb = pr(() => v("br", null, null, -1)),
  tb = { class: "flex" },
  nb = { class: "w-6/12" },
  rb = ["name", "checked", "onClick"],
  sb = { class: "w-6/12" },
  lb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  ab = { class: "flex-col gap-4" },
  ob = { class: "flex items-center" },
  ib = ["name", "checked", "onClick"],
  ub = { key: 0 },
  cb = { key: 1 },
  fb = { class: "" },
  db = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  hb = { class: "flex-col" },
  gb = { class: "flex justify-between" },
  pb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  vb = { class: "gap-4 mt-4", name: "pricing" },
  bb = ["value"],
  mb = ["value"],
  yb = { class: "flex gap-4", id: "leftInputs" },
  wb = { class: "flex gap-4", id: "rightInputs" },
  xb = pr(() => v("br", null, null, -1)),
  _b = pr(() => v("br", null, null, -1)),
  kb = pr(() => v("br", null, null, -1)),
  $b = pr(() => v("br", null, null, -1)),
  Eb = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (H) => {
          H.preventDefault()
          const ne = "pricing"
          let Z = document.getElementsByName("name")[0].value,
            yt = document.getElementsByName("email")[0].value,
            He = document.getElementsByName("website")[0].value,
            ht = document.getElementsByName("notes")[0].value,
            Qe = document.getElementsByName("services")[0].value,
            Vt = document.getElementsByName("total")[0].value,
            Nt = window.location.href,
            kt = new XMLHttpRequest()
          kt.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            kt.setRequestHeader("Content-Type", "application/json"),
            kt.send(
              JSON.stringify({
                form: ne,
                name: Z,
                email: yt,
                website: He,
                notes: ht,
                services: Qe,
                total: Vt,
                referrer: Nt,
              }),
            ),
            (kt.onloadend = function () {
              if (
                (console.log(
                  `Status: ${kt.status}, Response: ${kt.responseText}`,
                ),
                kt.status == 200)
              ) {
                let Ke = document.getElementsByName(ne)[0],
                  O = document.createElement("div")
                O.classList.add(
                  "text-center",
                  "flex",
                  "justify-center",
                  "items-center",
                  "w-100",
                ),
                  (O.innerHTML =
                    "Thanks for your interest! Your submission has been processed."),
                  Ke.appendChild(O)
                let Q = document.getElementById("leftInputs"),
                  U = document.getElementById("rightInputs")
                ;(Q.style.display = "none"), (U.style.display = "none")
                let le = document.getElementById("submitButton")
                le.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        },
        n = e,
        r = (H) => {
          if (H >= 4) return "text-emerald-500"
          if (H == 3) return "text-orange-200"
          if (H == 2) return "text-orange-500"
          if (H == 1) return "text-orange-400"
        },
        s = (H) => {
          if (H >= 4) return "text-emerald-500"
          if (H == 3) return "text-slate-800"
          if (H == 2) return "text-orange-500"
          if (H == 1) return "text-orange-400"
        },
        l = (H) => {
          if (H >= 4) return "border-emerald-500"
          if (H == 3) return "border-orange-200"
          if (H == 2) return "border-orange-500"
          if (H == 1) return "border-orange-400"
        },
        i = (H) => {
          if (H >= 4) return "text-slate-800"
          if (H == 3) return "text-slate-200"
          if (H == 2) return "text-slate-300"
          if (H == 1) return "text-slate-300"
        },
        u = me({
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
        h = ie(() =>
          u.value.security.audit.enabled &&
          u.value.security.ddosprotection.enabled &&
          u.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        d = ie(() =>
          u.value.accessibility.audit.enabled &&
          u.value.accessibility.levelA.enabled &&
          u.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        m = ie(() => 3 / 3),
        k = ie(
          () =>
            Object.values(u.value.speed).reduce(
              (H, ne) => H + (ne.enabled ? ne.price : 0),
              0,
            ) * f.value,
        ),
        C = ie(
          () =>
            Object.values(u.value.security).reduce(
              (H, ne) => H + (ne.enabled ? ne.price : 0),
              0,
            ) * h.value,
        ),
        L = ie(
          () =>
            Object.values(u.value.accessibility).reduce(
              (H, ne) => H + (ne.enabled ? ne.price : 0),
              0,
            ) * d.value,
        ),
        _ = ie(
          () =>
            Object.values(u.value.designOverhaul).reduce(
              (H, ne) => H + (ne.enabled ? ne.price : 0),
              0,
            ) * m.value,
        ),
        S = ie(() => {
          let H = 0
          for (const [ne, Z] of Object.entries(u.value.speed))
            Z.enabled && (H += Z.price)
          return H
        }),
        T = ie(() => {
          let H = 0
          for (const [ne, Z] of Object.entries(u.value.security))
            Z.enabled && (H += Z.price)
          return H
        }),
        V = ie(() => {
          let H = 0
          for (const [ne, Z] of Object.entries(u.value.accessibility))
            Z.enabled && (H += Z.price)
          return H
        }),
        z = ie(() => {
          let H = 0
          for (const [ne, Z] of Object.entries(u.value.designOverhaul))
            Z.enabled && (H += Z.price)
          return H
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
        K = () => {
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
        I = () => {
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
        he = () => {
          u.value.designOverhaul.designOverhaul.enabled
            ? (u.value.designOverhaul.designOverhaul.enabled = !1)
            : (u.value.designOverhaul.designOverhaul.enabled = !0)
        },
        ge = (H) => {
          H.title == "Speed"
            ? X()
            : H.title == "Security"
              ? K()
              : H.title == "Accessibility"
                ? I()
                : H.title == "Design Overhaul" && he()
        },
        mt = (H) => Object.values(H.services).some((ne) => ne.enabled),
        Ve = me([
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
            discount: h.value,
          },
          {
            title: "Accessibility",
            services: u.value.accessibility,
            enabled: !1,
            discount: d.value,
          },
          {
            title: "Design Overhaul",
            services: u.value.designOverhaul,
            enabled: !1,
            discount: m.value,
          },
        ]),
        Ze = (H) => {
          if (H.title === "Speed") return k.value
          if (H.title === "Security") return C.value
          if (H.title === "Accessibility") return L.value
          if (H.title === "Design Overhaul") return _.value
        },
        _t = (H) => {
          if (H.title === "Speed") return S.value
          if (H.title === "Security") return T.value
          if (H.title === "Accessibility") return V.value
          if (H.title === "Design Overhaul") return z.value
        },
        We = ie(
          () =>
            Ze(Ve.value[0]) +
            Ze(Ve.value[1]) +
            Ze(Ve.value[2]) +
            Ze(Ve.value[3]),
        ),
        Jt = ie(() => {
          let H = []
          for (const [ne, Z] of Object.entries(u.value.speed))
            Z.enabled && H.push(Z.title)
          for (const [ne, Z] of Object.entries(u.value.security))
            Z.enabled && H.push(Z.title)
          for (const [ne, Z] of Object.entries(u.value.accessibility))
            Z.enabled && H.push(Z.title)
          for (const [ne, Z] of Object.entries(u.value.designOverhaul))
            Z.enabled && H.push(Z.title)
          return H
        }),
        Wt = (H) => {
          let ne = ""
          return (
            (ne += l(H)),
            H == 5
              ? (ne += " bg-slate-100")
              : H == 4
                ? (ne += " bg-slate-400")
                : H == 3
                  ? (ne += " bg-slate-500")
                  : H == 2
                    ? (ne += " bg-slate-700")
                    : H == 1 && (ne += " bg-slate-800"),
            ne
          )
        }
      return (H, ne) => (
        ce(),
        Pe("div", J1, [
          v("div", Z1, [
            v(
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
            v(
              "p",
              { class: M(["text-center", i(n.brightness)]) },
              [
                _e(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                Q1,
                eb,
                _e(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                v(
                  "a",
                  {
                    href: "/contact",
                    class: M(["font-bold", r(e.brightness)]),
                  },
                  "contact me ",
                  2,
                ),
                _e(" for a custom quote. "),
              ],
              2,
            ),
          ]),
          (ce(!0),
          Pe(
            Ue,
            null,
            Rr(
              Ve.value,
              (Z, yt) => (
                ce(),
                Pe(
                  "div",
                  {
                    key: yt,
                    class: M([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      Wt(n.brightness),
                    ]),
                  },
                  [
                    v("div", tb, [
                      v("div", nb, [
                        v(
                          "div",
                          {
                            class: M([
                              "text-4xl text-left text-bold flex items-center gap-3",
                              i(n.brightness),
                            ]),
                          },
                          [
                            v(
                              "input",
                              {
                                type: "checkbox",
                                name: Z.title,
                                checked: mt(Z),
                                onClick: (He) => ge(Z),
                                class: M([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              rb,
                            ),
                            v("h3", null, St(Z.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      v("div", sb, [
                        v(
                          "h3",
                          {
                            class: M([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            _t(Z) != Math.floor(Ze(Z))
                              ? (ce(), Pe("span", lb, "$" + St(_t(Z)), 1))
                              : tt("", !0),
                            _e("$" + St(Ze(Z)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    v(
                      "hr",
                      { class: M(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    v("div", ab, [
                      (ce(!0),
                      Pe(
                        Ue,
                        null,
                        Rr(
                          Z.services,
                          (He, ht) => (
                            ce(),
                            Pe(
                              "div",
                              {
                                key: ht,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                v("div", ob, [
                                  v(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: He.title,
                                      checked: He.enabled,
                                      onClick: (Qe) =>
                                        (He.enabled = !He.enabled),
                                      class: M([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    ib,
                                  ),
                                  v(
                                    "p",
                                    { class: M(["", i(n.brightness)]) },
                                    [
                                      He.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (ce(),
                                          Pe("b", ub, [
                                            v("em", null, St(He.title), 1),
                                          ]))
                                        : (ce(),
                                          Pe("span", cb, St(He.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                v("div", fb, [
                                  v(
                                    "h3",
                                    {
                                      class: M([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      He.price !=
                                      Math.floor(He.price * Z.discount)
                                        ? (ce(),
                                          Pe("span", db, "$" + St(He.price), 1))
                                        : tt("", !0),
                                      _e("$" + St(He.price * Z.discount), 1),
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
          v("hr", { class: M(["my-4 w-full", r(n.brightness)]) }, null, 2),
          v("div", hb, [
            v("div", gb, [
              v(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              v(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                [
                  We.value != Math.floor(We.value)
                    ? (ce(), Pe("span", pb, "$" + St(We.value), 1))
                    : tt("", !0),
                  _e("$" + St(We.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          v("form", vb, [
            v(
              "input",
              { type: "hidden", name: "services", value: Jt.value },
              null,
              8,
              bb,
            ),
            v(
              "input",
              { type: "hidden", name: "total", value: We.value },
              null,
              8,
              mb,
            ),
            v("div", yb, [
              v(
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
              v(
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
            v("div", wb, [
              v(
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
              v(
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
            v(
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
          v(
            "p",
            { class: M(["text-center mt-4", i(n.brightness)]) },
            [
              _e(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              xb,
              _b,
              _e(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              v(
                "a",
                { href: "/contact", class: M(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              _e(" and we can get that figured out."),
              kb,
              $b,
              _e("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  Sb = Dr(Eb, [["__scopeId", "data-v-e20b9d11"]]),
  Cb = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        ce(), Xe(Sb, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  Pb = { class: "flex-col" },
  Mb = { class: "py-5 flex-col w-full" },
  Ab = { id: "cta" },
  Ib = {
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
          const l = "contact"
          let i = document.getElementsByName("name")[0].value,
            u = document.getElementsByName("email")[0].value,
            f = document.getElementsByName("message")[0].value,
            h = window.location.href,
            d = new XMLHttpRequest()
          d.open(
            "POST",
            "https://images.josephhansen.dev/api/forms/submit",
            !0,
          ),
            d.setRequestHeader("Content-Type", "application/json"),
            d.send(
              JSON.stringify({
                form: l,
                name: i,
                email: u,
                message: f,
                referrer: h,
              }),
            ),
            (d.onloadend = function () {
              if (
                (console.log(
                  `Status: ${d.status}, Response: ${d.responseText}`,
                ),
                d.status == 200)
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
                for (let S = 0; S < C.length; S++) C[S].style.display = "none"
                let L = m.getElementsByTagName("textarea")[0]
                L.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, l) => (
        ce(),
        Pe("div", Pb, [
          v("div", Mb, [
            v(
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
          v("form", Ab, [
            v(
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
            v(
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
            v(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: M(["rounded p-2 w-full mt-3", s.inputClass]),
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
  Ob = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Dn =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  Hn = '</title><path d="',
  zn = '"/></svg>',
  Rb = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return Dn + "Cloudflare" + Hn + this.path + zn
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  yl = {
    title: "CSS3",
    slug: "css3",
    get svg() {
      return Dn + "CSS3" + Hn + this.path + zn
    },
    path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
    source: "https://www.w3.org/html/logo/",
    hex: "1572B6",
  },
  Tb = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return Dn + "JavaScript" + Hn + this.path + zn
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  Nb = {
    title: "NGINX",
    slug: "nginx",
    get svg() {
      return Dn + "NGINX" + Hn + this.path + zn
    },
    path: "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",
    source: "https://www.nginx.com/press/",
    hex: "009639",
    guidelines: "https://www.nginx.com/press/",
  },
  _r = {
    title: "PHP",
    slug: "php",
    get svg() {
      return Dn + "PHP" + Hn + this.path + zn
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  jb = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return Dn + "Vue.js" + Hn + this.path + zn
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
  kr = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return Dn + "WordPress" + Hn + this.path + zn
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  Lb = { class: "flex-col" },
  Fb = { class: "py-5 flex-col w-full" },
  Bb = { class: "prose" },
  Db = { class: "grid lg:grid-cols-2 md:grid-cols-none gap-4 w-full" },
  Hb = ["src", "alt"],
  zb = { class: "flex gap-2 items-center" },
  qb = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  Wb = ["d"],
  Vb = {
    __name: "Portfolio",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (s) => {
          if (s >= 4) return "text-slate-800"
          if (s == 3) return "text-slate-200"
          if (s == 2) return "text-slate-300"
          if (s == 1) return "text-slate-300"
        },
        r = me([
          {
            icons: [kr, _r],
            title: "BlenderNation Bazaar",
            image:
              "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            link: "",
            width: "w-full",
          },
          {
            icons: [jb, Nb, Rb],
            title: "OKC South Stake",
            image:
              "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
            excerpt: "",
            link: "",
          },
        ])
      return (
        me([
          {
            icons: [kr, _r, Tb],
            title: "Build On Your Land",
            image:
              "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
            excerpt: "",
            link: "",
            width: "w-full",
          },
          {
            icons: [kr, _r, yl],
            title: "Stuart Pipe and Hose",
            image: "",
            excerpt: "",
            link: "",
            width: "w-1/3",
          },
          {
            icons: [kr, _r, yl],
            title: "Atlanta Floor One",
            image: "",
            excerpt: "",
            link: "",
            width: "w-1/3",
          },
          {
            icons: [kr, _r, yl],
            title: "Swim State Pool",
            image: "",
            excerpt: "",
            link: "",
            width: "w-1/3",
          },
        ]),
        (s, l) => (
          ce(),
          Pe("div", Lb, [
            v("div", Fb, [
              v("span", Bb, [
                v(
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
                v(
                  "p",
                  { class: M(["text-center", n(t.brightness)]) },
                  " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. Check out some of my work below! ",
                  2,
                ),
                v(
                  "h3",
                  { class: M(["text-2xl text-center", n(t.brightness)]) },
                  " Full Sites (I designed and developed) ",
                  2,
                ),
              ]),
            ]),
            v("div", Db, [
              (ce(!0),
              Pe(
                Ue,
                null,
                Rr(
                  r.value,
                  (i) => (
                    ce(),
                    Pe(
                      "div",
                      {
                        class: M([
                          "flex-col rounded-xl",
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
                        v("div", null, [
                          v(
                            "img",
                            {
                              src: i.image,
                              alt: i.title,
                              class:
                                "bg-slate-200 object-contain w-full rounded-t-xl",
                            },
                            null,
                            8,
                            Hb,
                          ),
                        ]),
                        v("div", null, [
                          v("div", null, [
                            v(
                              "div",
                              {
                                class: M([
                                  "p-4 flex justify-between items-center",
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
                                      class: M([
                                        "text-xl m-0 p-0",
                                        {
                                          "text-slate-800": e.brightness == 5,
                                          "text-slate-800": e.brightness == 4,
                                          "text-slate-800": e.brightness == 3,
                                          "text-slate-200": e.brightness == 2,
                                          "text-slate-200": e.brightness == 1,
                                        },
                                      ]),
                                    },
                                    St(i.title),
                                    3,
                                  ),
                                ]),
                                v("div", zb, [
                                  (ce(!0),
                                  Pe(
                                    Ue,
                                    null,
                                    Rr(
                                      i.icons,
                                      (u, f) => (
                                        ce(),
                                        Pe(
                                          "div",
                                          {
                                            key: f,
                                            class: M([
                                              "block",
                                              n(t.brightness),
                                            ]),
                                          },
                                          [
                                            (ce(),
                                            Pe("svg", qb, [
                                              v(
                                                "path",
                                                { d: u.path },
                                                null,
                                                8,
                                                Wb,
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
                            v(
                              "div",
                              {
                                class: M([
                                  "p-4 flex",
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
                                v(
                                  "p",
                                  {
                                    class: M([
                                      "text-slate-800 rounded-b-xl",
                                      {
                                        "text-slate-800": e.brightness == 5,
                                        "text-slate-800": e.brightness == 4,
                                        "text-slate-800": e.brightness == 3,
                                        "text-slate-200": e.brightness == 2,
                                        "text-slate-200": e.brightness == 1,
                                      },
                                    ]),
                                  },
                                  St(i.excerpt),
                                  3,
                                ),
                              ],
                              2,
                            ),
                          ]),
                        ]),
                      ],
                      2,
                    )
                  ),
                ),
                256,
              )),
            ]),
          ])
        )
      )
    },
  },
  Gb = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  Ub = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  Kb = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = me(3),
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
      bt(() => {
        let i = window.localStorage
        i.getItem("brightness")
          ? (t.value = Number(i.getItem("brightness")))
          : i.setItem("brightness", t.value),
          n.component == "pricing"
            ? ((l.title =
                "josephhansen.dev | | web developer/designer | pricing"),
              (l.meta[1].content =
                "josephhansen.dev | | web developer/designer | pricing"),
              (l.meta[6].content =
                "josephhansen.dev | | web developer/designer | pricing"),
              (l.meta[4].content = "https://josephhansen.dev/pricing"),
              (l.meta[9].content = "https://josephhansen.dev/pricing"))
            : n.component == "contact"
              ? ((l.title =
                  "josephhansen.dev | | web developer/designer | contact"),
                (l.meta[1].content =
                  "josephhansen.dev | | web developer/designer | contact"),
                (l.meta[6].content =
                  "josephhansen.dev | | web developer/designer | contact"),
                (l.meta[4].content = "https://josephhansen.dev/contact"),
                (l.meta[9].content = "https://josephhansen.dev/contact"))
              : n.component == "about"
                ? ((l.title =
                    "josephhansen.dev | | web developer/designer | about"),
                  (l.meta[1].content =
                    "josephhansen.dev | | web developer/designer | about"),
                  (l.meta[6].content =
                    "josephhansen.dev | | web developer/designer | about"),
                  (l.meta[4].content = "https://josephhansen.dev/about"),
                  (l.meta[9].content = "https://josephhansen.dev/about"))
                : n.component == "portfolio" &&
                  ((l.title =
                    "josephhansen.dev | | web developer/designer | portfolio"),
                  (l.meta[1].content =
                    "josephhansen.dev | | web developer/designer | portfolio"),
                  (l.meta[6].content =
                    "josephhansen.dev | | web developer/designer | portfolio"),
                  (l.meta[4].content = "https://josephhansen.dev/portfolio"),
                  (l.meta[9].content = "https://josephhansen.dev/portfolio"))
      })
      const l = Fr({
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
          ;(document.title = l.title),
            l.meta.forEach((i) => {
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
          ce(),
          Pe(
            Ue,
            null,
            [
              v(
                "main",
                {
                  class: M([["w-dvw", s.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  ae(Nv, { "onUpdate:brightness": r }),
                  v("div", Gb, [
                    e.component == "pricing"
                      ? (ce(),
                        Pe(
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
                            ae(Cb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "contact"
                      ? (ce(),
                        Pe(
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
                            ae(Ib, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "portfolio"
                      ? (ce(),
                        Pe(
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
                            ae(Vb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "about-me"
                      ? (ce(),
                        Pe(
                          "div",
                          {
                            key: 3,
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
                            ae(Ob, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "home"
                      ? (ce(),
                        Pe(
                          "div",
                          {
                            key: 4,
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
                            ae(qv, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                  ]),
                  v("div", Ub, [
                    e.component == "home"
                      ? (ce(),
                        Pe(
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
                            ae(K1, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                  ]),
                ],
                2,
              ),
              ae(X1, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  Yb = Dr(Kb, [["__scopeId", "data-v-2729bdc0"]])
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const nr = typeof window < "u"
function Xb(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Le = Object.assign
function wl(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = qt(s) ? s.map(e) : e(s)
  }
  return n
}
const Pr = () => {},
  qt = Array.isArray,
  Jb = /\/$/,
  Zb = (e) => e.replace(Jb, "")
function xl(e, t, n = "/") {
  let r,
    s = {},
    l = "",
    i = ""
  const u = t.indexOf("#")
  let f = t.indexOf("?")
  return (
    u < f && u >= 0 && (f = -1),
    f > -1 &&
      ((r = t.slice(0, f)),
      (l = t.slice(f + 1, u > -1 ? u : t.length)),
      (s = e(l))),
    u > -1 && ((r = r || t.slice(0, u)), (i = t.slice(u, t.length))),
    (r = nm(r ?? t, n)),
    { fullPath: r + (l && "?") + l + i, path: r, query: s, hash: i }
  )
}
function Qb(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function pi(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function em(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    cr(t.matched[r], n.matched[s]) &&
    Wu(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function cr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Wu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!tm(e[n], t[n])) return !1
  return !0
}
function tm(e, t) {
  return qt(e) ? vi(e, t) : qt(t) ? vi(t, e) : e === t
}
function vi(e, t) {
  return qt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function nm(e, t) {
  if (e.startsWith("/")) return e
  if (!e) return t
  const n = t.split("/"),
    r = e.split("/"),
    s = r[r.length - 1]
  ;(s === ".." || s === ".") && r.push("")
  let l = n.length - 1,
    i,
    u
  for (i = 0; i < r.length; i++)
    if (((u = r[i]), u !== "."))
      if (u === "..") l > 1 && l--
      else break
  return (
    n.slice(0, l).join("/") +
    "/" +
    r.slice(i - (i === r.length ? 1 : 0)).join("/")
  )
}
var Lr
;(function (e) {
  ;(e.pop = "pop"), (e.push = "push")
})(Lr || (Lr = {}))
var Mr
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Mr || (Mr = {}))
function rm(e) {
  if (!e)
    if (nr) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Zb(e)
}
const sm = /^[^#]+#/
function lm(e, t) {
  return e.replace(sm, "#") + t
}
function am(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Ns = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function om(e) {
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
    t = am(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function bi(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Dl = new Map()
function im(e, t) {
  Dl.set(e, t)
}
function um(e) {
  const t = Dl.get(e)
  return Dl.delete(e), t
}
let cm = () => location.protocol + "//" + location.host
function Vu(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    l = e.indexOf("#")
  if (l > -1) {
    let u = s.includes(e.slice(l)) ? e.slice(l).length : 1,
      f = s.slice(u)
    return f[0] !== "/" && (f = "/" + f), pi(f, "")
  }
  return pi(n, e) + r + s
}
function fm(e, t, n, r) {
  let s = [],
    l = [],
    i = null
  const u = ({ state: k }) => {
    const C = Vu(e, location),
      L = n.value,
      _ = t.value
    let S = 0
    if (k) {
      if (((n.value = C), (t.value = k), i && i === L)) {
        i = null
        return
      }
      S = _ ? k.position - _.position : 0
    } else r(C)
    s.forEach((T) => {
      T(n.value, L, {
        delta: S,
        type: Lr.pop,
        direction: S ? (S > 0 ? Mr.forward : Mr.back) : Mr.unknown,
      })
    })
  }
  function f() {
    i = n.value
  }
  function h(k) {
    s.push(k)
    const C = () => {
      const L = s.indexOf(k)
      L > -1 && s.splice(L, 1)
    }
    return l.push(C), C
  }
  function d() {
    const { history: k } = window
    k.state && k.replaceState(Le({}, k.state, { scroll: Ns() }), "")
  }
  function m() {
    for (const k of l) k()
    ;(l = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", d)
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", d, { passive: !0 }),
    { pauseListeners: f, listen: h, destroy: m }
  )
}
function mi(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Ns() : null,
  }
}
function dm(e) {
  const { history: t, location: n } = window,
    r = { value: Vu(e, n) },
    s = { value: t.state }
  s.value ||
    l(
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
  function l(f, h, d) {
    const m = e.indexOf("#"),
      k =
        m > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(m)) + f
          : cm() + e + f
    try {
      t[d ? "replaceState" : "pushState"](h, "", k), (s.value = h)
    } catch (C) {
      console.error(C), n[d ? "replace" : "assign"](k)
    }
  }
  function i(f, h) {
    const d = Le({}, t.state, mi(s.value.back, f, s.value.forward, !0), h, {
      position: s.value.position,
    })
    l(f, d, !0), (r.value = f)
  }
  function u(f, h) {
    const d = Le({}, s.value, t.state, { forward: f, scroll: Ns() })
    l(d.current, d, !0)
    const m = Le({}, mi(r.value, f, null), { position: d.position + 1 }, h)
    l(f, m, !1), (r.value = f)
  }
  return { location: r, state: s, push: u, replace: i }
}
function hm(e) {
  e = rm(e)
  const t = dm(e),
    n = fm(e, t.state, t.location, t.replace)
  function r(l, i = !0) {
    i || n.pauseListeners(), history.go(l)
  }
  const s = Le(
    { location: "", base: e, go: r, createHref: lm.bind(null, e) },
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
function gm(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Gu(e) {
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
  Uu = Symbol("")
var yi
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(yi || (yi = {}))
function fr(e, t) {
  return Le(new Error(), { type: e, [Uu]: !0 }, t)
}
function en(e, t) {
  return e instanceof Error && Uu in e && (t == null || !!(e.type & t))
}
const wi = "[^/]+?",
  pm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  vm = /[.+*?^${}()[\]/\\]/g
function bm(e, t) {
  const n = Le({}, pm, t),
    r = []
  let s = n.start ? "^" : ""
  const l = []
  for (const h of e) {
    const d = h.length ? [] : [90]
    n.strict && !h.length && (s += "/")
    for (let m = 0; m < h.length; m++) {
      const k = h[m]
      let C = 40 + (n.sensitive ? 0.25 : 0)
      if (k.type === 0)
        m || (s += "/"), (s += k.value.replace(vm, "\\$&")), (C += 40)
      else if (k.type === 1) {
        const { value: L, repeatable: _, optional: S, regexp: T } = k
        l.push({ name: L, repeatable: _, optional: S })
        const V = T || wi
        if (V !== wi) {
          C += 10
          try {
            new RegExp(`(${V})`)
          } catch (X) {
            throw new Error(
              `Invalid custom RegExp for param "${L}" (${V}): ` + X.message,
            )
          }
        }
        let z = _ ? `((?:${V})(?:/(?:${V}))*)` : `(${V})`
        m || (z = S && h.length < 2 ? `(?:/${z})` : "/" + z),
          S && (z += "?"),
          (s += z),
          (C += 20),
          S && (C += -8),
          _ && (C += -20),
          V === ".*" && (C += -50)
      }
      d.push(C)
    }
    r.push(d)
  }
  if (n.strict && n.end) {
    const h = r.length - 1
    r[h][r[h].length - 1] += 0.7000000000000001
  }
  n.strict || (s += "/?"), n.end ? (s += "$") : n.strict && (s += "(?:/|$)")
  const i = new RegExp(s, n.sensitive ? "" : "i")
  function u(h) {
    const d = h.match(i),
      m = {}
    if (!d) return null
    for (let k = 1; k < d.length; k++) {
      const C = d[k] || "",
        L = l[k - 1]
      m[L.name] = C && L.repeatable ? C.split("/") : C
    }
    return m
  }
  function f(h) {
    let d = "",
      m = !1
    for (const k of e) {
      ;(!m || !d.endsWith("/")) && (d += "/"), (m = !1)
      for (const C of k)
        if (C.type === 0) d += C.value
        else if (C.type === 1) {
          const { value: L, repeatable: _, optional: S } = C,
            T = L in h ? h[L] : ""
          if (qt(T) && !_)
            throw new Error(
              `Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const V = qt(T) ? T.join("/") : T
          if (!V)
            if (S)
              k.length < 2 &&
                (d.endsWith("/") ? (d = d.slice(0, -1)) : (m = !0))
            else throw new Error(`Missing required param "${L}"`)
          d += V
        }
    }
    return d || "/"
  }
  return { re: i, score: r, keys: l, parse: u, stringify: f }
}
function mm(e, t) {
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
function ym(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const l = mm(r[n], s[n])
    if (l) return l
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (xi(r)) return 1
    if (xi(s)) return -1
  }
  return s.length - r.length
}
function xi(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const wm = { type: 0, value: "" },
  xm = /[a-zA-Z0-9_]/
function _m(e) {
  if (!e) return [[]]
  if (e === "/") return [[wm]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(C) {
    throw new Error(`ERR (${n})/"${h}": ${C}`)
  }
  let n = 0,
    r = n
  const s = []
  let l
  function i() {
    l && s.push(l), (l = [])
  }
  let u = 0,
    f,
    h = "",
    d = ""
  function m() {
    h &&
      (n === 0
        ? l.push({ type: 0, value: h })
        : n === 1 || n === 2 || n === 3
          ? (l.length > 1 &&
              (f === "*" || f === "+") &&
              t(
                `A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`,
              ),
            l.push({
              type: 1,
              value: h,
              regexp: d,
              repeatable: f === "*" || f === "+",
              optional: f === "*" || f === "?",
            }))
          : t("Invalid state to consume buffer"),
      (h = ""))
  }
  function k() {
    h += f
  }
  for (; u < e.length; ) {
    if (((f = e[u++]), f === "\\" && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        f === "/" ? (h && m(), i()) : f === ":" ? (m(), (n = 1)) : k()
        break
      case 4:
        k(), (n = r)
        break
      case 1:
        f === "("
          ? (n = 2)
          : xm.test(f)
            ? k()
            : (m(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--)
        break
      case 2:
        f === ")"
          ? d[d.length - 1] == "\\"
            ? (d = d.slice(0, -1) + f)
            : (n = 3)
          : (d += f)
        break
      case 3:
        m(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--, (d = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), m(), i(), s
}
function km(e, t, n) {
  const r = bm(_m(e.path), n),
    s = Le(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function $m(e, t) {
  const n = [],
    r = new Map()
  t = $i({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(d) {
    return r.get(d)
  }
  function l(d, m, k) {
    const C = !k,
      L = Em(d)
    L.aliasOf = k && k.record
    const _ = $i(t, d),
      S = [L]
    if ("alias" in d) {
      const z = typeof d.alias == "string" ? [d.alias] : d.alias
      for (const X of z)
        S.push(
          Le({}, L, {
            components: k ? k.record.components : L.components,
            path: X,
            aliasOf: k ? k.record : L,
          }),
        )
    }
    let T, V
    for (const z of S) {
      const { path: X } = z
      if (m && X[0] !== "/") {
        const K = m.record.path,
          I = K[K.length - 1] === "/" ? "" : "/"
        z.path = m.record.path + (X && I + X)
      }
      if (
        ((T = km(z, m, _)),
        k
          ? k.alias.push(T)
          : ((V = V || T),
            V !== T && V.alias.push(T),
            C && d.name && !ki(T) && i(d.name)),
        L.children)
      ) {
        const K = L.children
        for (let I = 0; I < K.length; I++) l(K[I], T, k && k.children[I])
      }
      ;(k = k || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          f(T)
    }
    return V
      ? () => {
          i(V)
        }
      : Pr
  }
  function i(d) {
    if (Gu(d)) {
      const m = r.get(d)
      m &&
        (r.delete(d),
        n.splice(n.indexOf(m), 1),
        m.children.forEach(i),
        m.alias.forEach(i))
    } else {
      const m = n.indexOf(d)
      m > -1 &&
        (n.splice(m, 1),
        d.record.name && r.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i))
    }
  }
  function u() {
    return n
  }
  function f(d) {
    let m = 0
    for (
      ;
      m < n.length &&
      ym(d, n[m]) >= 0 &&
      (d.record.path !== n[m].record.path || !Ku(d, n[m]));

    )
      m++
    n.splice(m, 0, d), d.record.name && !ki(d) && r.set(d.record.name, d)
  }
  function h(d, m) {
    let k,
      C = {},
      L,
      _
    if ("name" in d && d.name) {
      if (((k = r.get(d.name)), !k)) throw fr(1, { location: d })
      ;(_ = k.record.name),
        (C = Le(
          _i(
            m.params,
            k.keys.filter((V) => !V.optional).map((V) => V.name),
          ),
          d.params &&
            _i(
              d.params,
              k.keys.map((V) => V.name),
            ),
        )),
        (L = k.stringify(C))
    } else if ("path" in d)
      (L = d.path),
        (k = n.find((V) => V.re.test(L))),
        k && ((C = k.parse(L)), (_ = k.record.name))
    else {
      if (((k = m.name ? r.get(m.name) : n.find((V) => V.re.test(m.path))), !k))
        throw fr(1, { location: d, currentLocation: m })
      ;(_ = k.record.name),
        (C = Le({}, m.params, d.params)),
        (L = k.stringify(C))
    }
    const S = []
    let T = k
    for (; T; ) S.unshift(T.record), (T = T.parent)
    return { name: _, path: L, params: C, matched: S, meta: Cm(S) }
  }
  return (
    e.forEach((d) => l(d)),
    {
      addRoute: l,
      resolve: h,
      removeRoute: i,
      getRoutes: u,
      getRecordMatcher: s,
    }
  )
}
function _i(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function Em(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Sm(e),
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
function Sm(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function ki(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Cm(e) {
  return e.reduce((t, n) => Le(t, n.meta), {})
}
function $i(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function Ku(e, t) {
  return t.children.some((n) => n === e || Ku(e, n))
}
const Yu = /#/g,
  Pm = /&/g,
  Mm = /\//g,
  Am = /=/g,
  Im = /\?/g,
  Xu = /\+/g,
  Om = /%5B/g,
  Rm = /%5D/g,
  Ju = /%5E/g,
  Tm = /%60/g,
  Zu = /%7B/g,
  Nm = /%7C/g,
  Qu = /%7D/g,
  jm = /%20/g
function ga(e) {
  return encodeURI("" + e)
    .replace(Nm, "|")
    .replace(Om, "[")
    .replace(Rm, "]")
}
function Lm(e) {
  return ga(e).replace(Zu, "{").replace(Qu, "}").replace(Ju, "^")
}
function Hl(e) {
  return ga(e)
    .replace(Xu, "%2B")
    .replace(jm, "+")
    .replace(Yu, "%23")
    .replace(Pm, "%26")
    .replace(Tm, "`")
    .replace(Zu, "{")
    .replace(Qu, "}")
    .replace(Ju, "^")
}
function Fm(e) {
  return Hl(e).replace(Am, "%3D")
}
function Bm(e) {
  return ga(e).replace(Yu, "%23").replace(Im, "%3F")
}
function Dm(e) {
  return e == null ? "" : Bm(e).replace(Mm, "%2F")
}
function ys(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function Hm(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const l = r[s].replace(Xu, " "),
      i = l.indexOf("="),
      u = ys(i < 0 ? l : l.slice(0, i)),
      f = i < 0 ? null : ys(l.slice(i + 1))
    if (u in t) {
      let h = t[u]
      qt(h) || (h = t[u] = [h]), h.push(f)
    } else t[u] = f
  }
  return t
}
function Ei(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = Fm(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(qt(r) ? r.map((l) => l && Hl(l)) : [r && Hl(r)]).forEach((l) => {
      l !== void 0 &&
        ((t += (t.length ? "&" : "") + n), l != null && (t += "=" + l))
    })
  }
  return t
}
function zm(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = qt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r)
  }
  return t
}
const qm = Symbol(""),
  Si = Symbol(""),
  pa = Symbol(""),
  ec = Symbol(""),
  zl = Symbol("")
function $r() {
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
function yn(e, t, n, r, s) {
  const l = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((i, u) => {
      const f = (m) => {
          m === !1
            ? u(fr(4, { from: n, to: t }))
            : m instanceof Error
              ? u(m)
              : gm(m)
                ? u(fr(2, { from: t, to: m }))
                : (l &&
                    r.enterCallbacks[s] === l &&
                    typeof m == "function" &&
                    l.push(m),
                  i())
        },
        h = e.call(r && r.instances[s], t, n, f)
      let d = Promise.resolve(h)
      e.length < 3 && (d = d.then(f)), d.catch((m) => u(m))
    })
}
function _l(e, t, n, r) {
  const s = []
  for (const l of e)
    for (const i in l.components) {
      let u = l.components[i]
      if (!(t !== "beforeRouteEnter" && !l.instances[i]))
        if (Wm(u)) {
          const h = (u.__vccOpts || u)[t]
          h && s.push(yn(h, n, r, l, i))
        } else {
          let f = u()
          s.push(() =>
            f.then((h) => {
              if (!h)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${l.path}"`),
                )
              const d = Xb(h) ? h.default : h
              l.components[i] = d
              const k = (d.__vccOpts || d)[t]
              return k && yn(k, n, r, l, i)()
            }),
          )
        }
    }
  return s
}
function Wm(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function Ci(e) {
  const t = ft(pa),
    n = ft(ec),
    r = ie(() => t.resolve(de(e.to))),
    s = ie(() => {
      const { matched: f } = r.value,
        { length: h } = f,
        d = f[h - 1],
        m = n.matched
      if (!d || !m.length) return -1
      const k = m.findIndex(cr.bind(null, d))
      if (k > -1) return k
      const C = Pi(f[h - 2])
      return h > 1 && Pi(d) === C && m[m.length - 1].path !== C
        ? m.findIndex(cr.bind(null, f[h - 2]))
        : k
    }),
    l = ie(() => s.value > -1 && Km(n.params, r.value.params)),
    i = ie(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Wu(n.params, r.value.params),
    )
  function u(f = {}) {
    return Um(f)
      ? t[de(e.replace) ? "replace" : "push"](de(e.to)).catch(Pr)
      : Promise.resolve()
  }
  return {
    route: r,
    href: ie(() => r.value.href),
    isActive: l,
    isExactActive: i,
    navigate: u,
  }
}
const Vm = Tt({
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
    useLink: Ci,
    setup(e, { slots: t }) {
      const n = Fr(Ci(e)),
        { options: r } = ft(pa),
        s = ie(() => ({
          [Mi(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Mi(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active",
          )]: n.isExactActive,
        }))
      return () => {
        const l = t.default && t.default(n)
        return e.custom
          ? l
          : ot(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              l,
            )
      }
    },
  }),
  Gm = Vm
function Um(e) {
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
function Km(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!qt(s) || s.length !== r.length || r.some((l, i) => l !== s[i]))
      return !1
  }
  return !0
}
function Pi(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const Mi = (e, t, n) => e ?? t ?? n,
  Ym = Tt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ft(zl),
        s = ie(() => e.route || r.value),
        l = ft(Si, 0),
        i = ie(() => {
          let h = de(l)
          const { matched: d } = s.value
          let m
          for (; (m = d[h]) && !m.components; ) h++
          return h
        }),
        u = ie(() => s.value.matched[i.value])
      Yt(
        Si,
        ie(() => i.value + 1),
      ),
        Yt(qm, u),
        Yt(zl, s)
      const f = me()
      return (
        rn(
          () => [f.value, u.value, e.name],
          ([h, d, m], [k, C, L]) => {
            d &&
              ((d.instances[m] = h),
              C &&
                C !== d &&
                h &&
                h === k &&
                (d.leaveGuards.size || (d.leaveGuards = C.leaveGuards),
                d.updateGuards.size || (d.updateGuards = C.updateGuards))),
              h &&
                d &&
                (!C || !cr(d, C) || !k) &&
                (d.enterCallbacks[m] || []).forEach((_) => _(h))
          },
          { flush: "post" },
        ),
        () => {
          const h = s.value,
            d = e.name,
            m = u.value,
            k = m && m.components[d]
          if (!k) return Ai(n.default, { Component: k, route: h })
          const C = m.props[d],
            L = C
              ? C === !0
                ? h.params
                : typeof C == "function"
                  ? C(h)
                  : C
              : null,
            S = ot(
              k,
              Le({}, L, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (m.instances[d] = null)
                },
                ref: f,
              }),
            )
          return Ai(n.default, { Component: S, route: h }) || S
        }
      )
    },
  })
function Ai(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Xm = Ym
function Jm(e) {
  const t = $m(e.routes, e),
    n = e.parseQuery || Hm,
    r = e.stringifyQuery || Ei,
    s = e.history,
    l = $r(),
    i = $r(),
    u = $r(),
    f = Rh(pn)
  let h = pn
  nr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const d = wl.bind(null, (O) => "" + O),
    m = wl.bind(null, Dm),
    k = wl.bind(null, ys)
  function C(O, Q) {
    let U, le
    return (
      Gu(O) ? ((U = t.getRecordMatcher(O)), (le = Q)) : (le = O),
      t.addRoute(le, U)
    )
  }
  function L(O) {
    const Q = t.getRecordMatcher(O)
    Q && t.removeRoute(Q)
  }
  function _() {
    return t.getRoutes().map((O) => O.record)
  }
  function S(O) {
    return !!t.getRecordMatcher(O)
  }
  function T(O, Q) {
    if (((Q = Le({}, Q || f.value)), typeof O == "string")) {
      const y = xl(n, O, Q.path),
        P = t.resolve({ path: y.path }, Q),
        N = s.createHref(y.fullPath)
      return Le(y, P, {
        params: k(P.params),
        hash: ys(y.hash),
        redirectedFrom: void 0,
        href: N,
      })
    }
    let U
    if ("path" in O) U = Le({}, O, { path: xl(n, O.path, Q.path).path })
    else {
      const y = Le({}, O.params)
      for (const P in y) y[P] == null && delete y[P]
      ;(U = Le({}, O, { params: m(y) })), (Q.params = m(Q.params))
    }
    const le = t.resolve(U, Q),
      Ae = O.hash || ""
    le.params = d(k(le.params))
    const Be = Qb(r, Le({}, O, { hash: Lm(Ae), path: le.path })),
      p = s.createHref(Be)
    return Le(
      { fullPath: Be, hash: Ae, query: r === Ei ? zm(O.query) : O.query || {} },
      le,
      { redirectedFrom: void 0, href: p },
    )
  }
  function V(O) {
    return typeof O == "string" ? xl(n, O, f.value.path) : Le({}, O)
  }
  function z(O, Q) {
    if (h !== O) return fr(8, { from: Q, to: O })
  }
  function X(O) {
    return he(O)
  }
  function K(O) {
    return X(Le(V(O), { replace: !0 }))
  }
  function I(O) {
    const Q = O.matched[O.matched.length - 1]
    if (Q && Q.redirect) {
      const { redirect: U } = Q
      let le = typeof U == "function" ? U(O) : U
      return (
        typeof le == "string" &&
          ((le =
            le.includes("?") || le.includes("#") ? (le = V(le)) : { path: le }),
          (le.params = {})),
        Le(
          {
            query: O.query,
            hash: O.hash,
            params: "path" in le ? {} : O.params,
          },
          le,
        )
      )
    }
  }
  function he(O, Q) {
    const U = (h = T(O)),
      le = f.value,
      Ae = O.state,
      Be = O.force,
      p = O.replace === !0,
      y = I(U)
    if (y)
      return he(
        Le(V(y), {
          state: typeof y == "object" ? Le({}, Ae, y.state) : Ae,
          force: Be,
          replace: p,
        }),
        Q || U,
      )
    const P = U
    P.redirectedFrom = Q
    let N
    return (
      !Be &&
        em(r, le, U) &&
        ((N = fr(16, { to: P, from: le })), ht(le, le, !0, !1)),
      (N ? Promise.resolve(N) : Ve(P, le))
        .catch((R) => (en(R) ? (en(R, 2) ? R : He(R)) : Z(R, P, le)))
        .then((R) => {
          if (R) {
            if (en(R, 2))
              return he(
                Le({ replace: p }, V(R.to), {
                  state: typeof R.to == "object" ? Le({}, Ae, R.to.state) : Ae,
                  force: Be,
                }),
                Q || P,
              )
          } else R = _t(P, le, !0, p, Ae)
          return Ze(P, le, R), R
        })
    )
  }
  function ge(O, Q) {
    const U = z(O, Q)
    return U ? Promise.reject(U) : Promise.resolve()
  }
  function mt(O) {
    const Q = Nt.values().next().value
    return Q && typeof Q.runWithContext == "function"
      ? Q.runWithContext(O)
      : O()
  }
  function Ve(O, Q) {
    let U
    const [le, Ae, Be] = Zm(O, Q)
    U = _l(le.reverse(), "beforeRouteLeave", O, Q)
    for (const y of le)
      y.leaveGuards.forEach((P) => {
        U.push(yn(P, O, Q))
      })
    const p = ge.bind(null, O, Q)
    return (
      U.push(p),
      Ke(U)
        .then(() => {
          U = []
          for (const y of l.list()) U.push(yn(y, O, Q))
          return U.push(p), Ke(U)
        })
        .then(() => {
          U = _l(Ae, "beforeRouteUpdate", O, Q)
          for (const y of Ae)
            y.updateGuards.forEach((P) => {
              U.push(yn(P, O, Q))
            })
          return U.push(p), Ke(U)
        })
        .then(() => {
          U = []
          for (const y of Be)
            if (y.beforeEnter)
              if (qt(y.beforeEnter))
                for (const P of y.beforeEnter) U.push(yn(P, O, Q))
              else U.push(yn(y.beforeEnter, O, Q))
          return U.push(p), Ke(U)
        })
        .then(
          () => (
            O.matched.forEach((y) => (y.enterCallbacks = {})),
            (U = _l(Be, "beforeRouteEnter", O, Q)),
            U.push(p),
            Ke(U)
          ),
        )
        .then(() => {
          U = []
          for (const y of i.list()) U.push(yn(y, O, Q))
          return U.push(p), Ke(U)
        })
        .catch((y) => (en(y, 8) ? y : Promise.reject(y)))
    )
  }
  function Ze(O, Q, U) {
    u.list().forEach((le) => mt(() => le(O, Q, U)))
  }
  function _t(O, Q, U, le, Ae) {
    const Be = z(O, Q)
    if (Be) return Be
    const p = Q === pn,
      y = nr ? history.state : {}
    U &&
      (le || p
        ? s.replace(O.fullPath, Le({ scroll: p && y && y.scroll }, Ae))
        : s.push(O.fullPath, Ae)),
      (f.value = O),
      ht(O, Q, U, p),
      He()
  }
  let We
  function Jt() {
    We ||
      (We = s.listen((O, Q, U) => {
        if (!kt.listening) return
        const le = T(O),
          Ae = I(le)
        if (Ae) {
          he(Le(Ae, { replace: !0 }), le).catch(Pr)
          return
        }
        h = le
        const Be = f.value
        nr && im(bi(Be.fullPath, U.delta), Ns()),
          Ve(le, Be)
            .catch((p) =>
              en(p, 12)
                ? p
                : en(p, 2)
                  ? (he(p.to, le)
                      .then((y) => {
                        en(y, 20) &&
                          !U.delta &&
                          U.type === Lr.pop &&
                          s.go(-1, !1)
                      })
                      .catch(Pr),
                    Promise.reject())
                  : (U.delta && s.go(-U.delta, !1), Z(p, le, Be)),
            )
            .then((p) => {
              ;(p = p || _t(le, Be, !1)),
                p &&
                  (U.delta && !en(p, 8)
                    ? s.go(-U.delta, !1)
                    : U.type === Lr.pop && en(p, 20) && s.go(-1, !1)),
                Ze(le, Be, p)
            })
            .catch(Pr)
      }))
  }
  let Wt = $r(),
    H = $r(),
    ne
  function Z(O, Q, U) {
    He(O)
    const le = H.list()
    return (
      le.length ? le.forEach((Ae) => Ae(O, Q, U)) : console.error(O),
      Promise.reject(O)
    )
  }
  function yt() {
    return ne && f.value !== pn
      ? Promise.resolve()
      : new Promise((O, Q) => {
          Wt.add([O, Q])
        })
  }
  function He(O) {
    return (
      ne ||
        ((ne = !O),
        Jt(),
        Wt.list().forEach(([Q, U]) => (O ? U(O) : Q())),
        Wt.reset()),
      O
    )
  }
  function ht(O, Q, U, le) {
    const { scrollBehavior: Ae } = e
    if (!nr || !Ae) return Promise.resolve()
    const Be =
      (!U && um(bi(O.fullPath, 0))) ||
      ((le || !U) && history.state && history.state.scroll) ||
      null
    return lu()
      .then(() => Ae(O, Q, Be))
      .then((p) => p && om(p))
      .catch((p) => Z(p, O, Q))
  }
  const Qe = (O) => s.go(O)
  let Vt
  const Nt = new Set(),
    kt = {
      currentRoute: f,
      listening: !0,
      addRoute: C,
      removeRoute: L,
      hasRoute: S,
      getRoutes: _,
      resolve: T,
      options: e,
      push: X,
      replace: K,
      go: Qe,
      back: () => Qe(-1),
      forward: () => Qe(1),
      beforeEach: l.add,
      beforeResolve: i.add,
      afterEach: u.add,
      onError: H.add,
      isReady: yt,
      install(O) {
        const Q = this
        O.component("RouterLink", Gm),
          O.component("RouterView", Xm),
          (O.config.globalProperties.$router = Q),
          Object.defineProperty(O.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => de(f),
          }),
          nr &&
            !Vt &&
            f.value === pn &&
            ((Vt = !0), X(s.location).catch((Ae) => {}))
        const U = {}
        for (const Ae in pn)
          Object.defineProperty(U, Ae, {
            get: () => f.value[Ae],
            enumerable: !0,
          })
        O.provide(pa, Q), O.provide(ec, Xi(U)), O.provide(zl, f)
        const le = O.unmount
        Nt.add(O),
          (O.unmount = function () {
            Nt.delete(O),
              Nt.size < 1 &&
                ((h = pn),
                We && We(),
                (We = null),
                (f.value = pn),
                (Vt = !1),
                (ne = !1)),
              le()
          })
      },
    }
  function Ke(O) {
    return O.reduce((Q, U) => Q.then(() => mt(U)), Promise.resolve())
  }
  return kt
}
function Zm(e, t) {
  const n = [],
    r = [],
    s = [],
    l = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < l; i++) {
    const u = t.matched[i]
    u && (e.matched.find((h) => cr(h, u)) ? r.push(u) : n.push(u))
    const f = e.matched[i]
    f && (t.matched.find((h) => cr(h, f)) || s.push(f))
  }
  return [n, r, s]
}
const va = [
  { path: "/", component: null, props: { component: "home" } },
  { path: "/pricing", component: null, props: { component: "pricing" } },
  { path: "/contact", component: null, props: { component: "contact" } },
  { path: "/contact-me", component: null, props: { component: "contact" } },
  { path: "/about", component: null, props: { component: "about-me" } },
  { path: "/about-me", component: null, props: { component: "about-me" } },
  { path: "/portfolio", component: null, props: { component: "portfolio" } },
  {
    path: "/portfolio/blendernation-bazaar",
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
    path: "/portfolio/hiawatha",
    component: null,
    props: { component: "hiawatha" },
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
]
va.map((e) => e.path)
va.forEach((e) => {
  e.component = Yb
})
const Qm = Jm({ history: hm(), routes: va }),
  tc = gp(yp)
tc.use(Qm)
tc.mount("#app")
