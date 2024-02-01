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
 **/ function Vl(e, t) {
  const n = new Set(e.split(","))
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r)
}
const De = {},
  sr = [],
  jt = () => {},
  eh = () => !1,
  ws = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ql = (e) => e.startsWith("onUpdate:"),
  dt = Object.assign,
  Wl = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  th = Object.prototype.hasOwnProperty,
  Me = (e, t) => th.call(e, t),
  ge = Array.isArray,
  lr = (e) => xs(e) === "[object Map]",
  Oi = (e) => xs(e) === "[object Set]",
  me = (e) => typeof e == "function",
  nt = (e) => typeof e == "string",
  pr = (e) => typeof e == "symbol",
  Ve = (e) => e !== null && typeof e == "object",
  Ri = (e) => (Ve(e) || me(e)) && me(e.then) && me(e.catch),
  Ti = Object.prototype.toString,
  xs = (e) => Ti.call(e),
  nh = (e) => xs(e).slice(8, -1),
  Ni = (e) => xs(e) === "[object Object]",
  Gl = (e) =>
    nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  as = Vl(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  _s = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  rh = /-(\w)/g,
  Xt = _s((e) => e.replace(rh, (t, n) => (n ? n.toUpperCase() : ""))),
  sh = /\B([A-Z])/g,
  vr = _s((e) => e.replace(sh, "-$1").toLowerCase()),
  ks = _s((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  cl = _s((e) => (e ? `on${ks(e)}` : "")),
  Sn = (e, t) => !Object.is(e, t),
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
let Mo
const ji = () =>
  Mo ||
  (Mo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {})
function $s(e) {
  if (ge(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = nt(r) ? ih(r) : $s(r)
      if (s) for (const l in s) t[l] = s[l]
    }
    return t
  } else if (nt(e) || Ve(e)) return e
}
const lh = /;(?![^(]*\))/g,
  ah = /:([^]+)/,
  oh = /\/\*[^]*?\*\//g
function ih(e) {
  const t = {}
  return (
    e
      .replace(oh, "")
      .split(lh)
      .forEach((n) => {
        if (n) {
          const r = n.split(ah)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function M(e) {
  let t = ""
  if (nt(e)) t = e
  else if (ge(e))
    for (let n = 0; n < e.length; n++) {
      const r = M(e[n])
      r && (t += r + " ")
    }
  else if (Ve(e)) for (const n in e) e[n] && (t += n + " ")
  return t.trim()
}
const uh =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ch = Vl(uh)
function Fi(e) {
  return !!e || e === ""
}
const It = (e) =>
    nt(e)
      ? e
      : e == null
        ? ""
        : ge(e) || (Ve(e) && (e.toString === Ti || !me(e.toString)))
          ? JSON.stringify(e, Li, 2)
          : String(e),
  Li = (e, t) =>
    t && t.__v_isRef
      ? Li(e, t.value)
      : lr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [r, s], l) => ((n[fl(r, l) + " =>"] = s), n),
              {},
            ),
          }
        : Oi(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => fl(n)) }
          : pr(t)
            ? fl(t)
            : Ve(t) && !ge(t) && !Ni(t)
              ? String(t)
              : t,
  fl = (e, t = "") => {
    var n
    return pr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ht
class fh {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ht),
      !t && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ht
      try {
        return (Ht = this), t()
      } finally {
        Ht = n
      }
    }
  }
  on() {
    Ht = this
  }
  off() {
    Ht = this.parent
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
function dh(e, t = Ht) {
  t && t.active && t.effects.push(e)
}
function hh() {
  return Ht
}
let jn
class Ul {
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
      dh(this, s)
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      zn()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (ph(n.computed), this._dirtyLevel >= 2)) break
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Dn()
    }
    return this._dirtyLevel >= 2
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = En,
      n = jn
    try {
      return (En = !0), (jn = this), this._runnings++, Ao(this), this.fn()
    } finally {
      Io(this), this._runnings--, (jn = n), (En = t)
    }
  }
  stop() {
    var t
    this.active &&
      (Ao(this),
      Io(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function ph(e) {
  return e.value
}
function Ao(e) {
  e._trackId++, (e._depsLength = 0)
}
function Io(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Bi(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Bi(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let En = !0,
  $l = 0
const Hi = []
function zn() {
  Hi.push(En), (En = !1)
}
function Dn() {
  const e = Hi.pop()
  En = e === void 0 ? !0 : e
}
function Kl() {
  $l++
}
function Yl() {
  for ($l--; !$l && El.length; ) El.shift()()
}
function zi(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && Bi(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const El = []
function Di(e, t, n) {
  Kl()
  for (const r of e.keys())
    if (r._dirtyLevel < t && e.get(r) === r._trackId) {
      const s = r._dirtyLevel
      ;(r._dirtyLevel = t), s === 0 && ((r._shouldSchedule = !0), r.trigger())
    }
  Vi(e), Yl()
}
function Vi(e) {
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
  Cl = new WeakMap(),
  Fn = Symbol(""),
  Sl = Symbol("")
function St(e, t, n) {
  if (En && jn) {
    let r = Cl.get(e)
    r || Cl.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = qi(() => r.delete(n)))), zi(jn, s)
  }
}
function nn(e, t, n, r, s, l) {
  const i = Cl.get(e)
  if (!i) return
  let u = []
  if (t === "clear") u = [...i.values()]
  else if (n === "length" && ge(e)) {
    const f = Number(r)
    i.forEach((h, d) => {
      ;(d === "length" || (!pr(d) && d >= f)) && u.push(h)
    })
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        ge(e)
          ? Gl(n) && u.push(i.get("length"))
          : (u.push(i.get(Fn)), lr(e) && u.push(i.get(Sl)))
        break
      case "delete":
        ge(e) || (u.push(i.get(Fn)), lr(e) && u.push(i.get(Sl)))
        break
      case "set":
        lr(e) && u.push(i.get(Fn))
        break
    }
  Kl()
  for (const f of u) f && Di(f, 2)
  Yl()
}
const vh = Vl("__proto__,__v_isRef,__isVue"),
  Wi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(pr),
  ),
  Oo = gh()
function gh() {
  const e = {}
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = Re(this)
        for (let l = 0, i = this.length; l < i; l++) St(r, "get", l + "")
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(Re)) : s
      }
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        zn(), Kl()
        const r = Re(this)[t].apply(this, n)
        return Yl(), Dn(), r
      }
    }),
    e
  )
}
function bh(e) {
  const t = Re(this)
  return St(t, "has", e), t.hasOwnProperty(e)
}
class Gi {
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
      return r === (s ? (l ? Ah : Xi) : l ? Yi : Ki).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = ge(t)
    if (!s) {
      if (i && Me(Oo, n)) return Reflect.get(Oo, n, r)
      if (n === "hasOwnProperty") return bh
    }
    const u = Reflect.get(t, n, r)
    return (pr(n) ? Wi.has(n) : vh(n)) || (s || St(t, "get", n), l)
      ? u
      : gt(u)
        ? i && Gl(n)
          ? u
          : u.value
        : Ve(u)
          ? s
            ? Zi(u)
            : Br(u)
          : u
  }
}
class Ui extends Gi {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, s) {
    let l = t[n]
    if (!this._shallow) {
      const f = ur(l)
      if (
        (!ps(r) && !ur(r) && ((l = Re(l)), (r = Re(r))),
        !ge(t) && gt(l) && !gt(r))
      )
        return f ? !1 : ((l.value = r), !0)
    }
    const i = ge(t) && Gl(n) ? Number(n) < t.length : Me(t, n),
      u = Reflect.set(t, n, r, s)
    return (
      t === Re(s) && (i ? Sn(r, l) && nn(t, "set", n, r) : nn(t, "add", n, r)),
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
    return (!pr(n) || !Wi.has(n)) && St(t, "has", n), r
  }
  ownKeys(t) {
    return St(t, "iterate", ge(t) ? "length" : Fn), Reflect.ownKeys(t)
  }
}
class mh extends Gi {
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
const yh = new Ui(),
  wh = new mh(),
  xh = new Ui(!0),
  Xl = (e) => e,
  Es = (e) => Reflect.getPrototypeOf(e)
function Zr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = Re(e),
    l = Re(t)
  n || (Sn(t, l) && St(s, "get", t), St(s, "get", l))
  const { has: i } = Es(s),
    u = r ? Xl : n ? Ql : Or
  if (i.call(s, t)) return u(e.get(t))
  if (i.call(s, l)) return u(e.get(l))
  e !== s && e.get(t)
}
function Qr(e, t = !1) {
  const n = this.__v_raw,
    r = Re(n),
    s = Re(e)
  return (
    t || (Sn(e, s) && St(r, "has", e), St(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function es(e, t = !1) {
  return (
    (e = e.__v_raw), !t && St(Re(e), "iterate", Fn), Reflect.get(e, "size", e)
  )
}
function Ro(e) {
  e = Re(e)
  const t = Re(this)
  return Es(t).has.call(t, e) || (t.add(e), nn(t, "add", e, e)), this
}
function To(e, t) {
  t = Re(t)
  const n = Re(this),
    { has: r, get: s } = Es(n)
  let l = r.call(n, e)
  l || ((e = Re(e)), (l = r.call(n, e)))
  const i = s.call(n, e)
  return (
    n.set(e, t), l ? Sn(t, i) && nn(n, "set", e, t) : nn(n, "add", e, t), this
  )
}
function No(e) {
  const t = Re(this),
    { has: n, get: r } = Es(t)
  let s = n.call(t, e)
  s || ((e = Re(e)), (s = n.call(t, e))), r && r.call(t, e)
  const l = t.delete(e)
  return s && nn(t, "delete", e, void 0), l
}
function jo() {
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
      f = t ? Xl : e ? Ql : Or
    return (
      !e && St(u, "iterate", Fn), i.forEach((h, d) => r.call(s, f(h), f(d), l))
    )
  }
}
function ns(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      l = Re(s),
      i = lr(l),
      u = e === "entries" || (e === Symbol.iterator && i),
      f = e === "keys" && i,
      h = s[e](...r),
      d = n ? Xl : t ? Ql : Or
    return (
      !t && St(l, "iterate", f ? Sl : Fn),
      {
        next() {
          const { value: b, done: k } = h.next()
          return k
            ? { value: b, done: k }
            : { value: u ? [d(b[0]), d(b[1])] : d(b), done: k }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function bn(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}
function _h() {
  const e = {
      get(l) {
        return Zr(this, l)
      },
      get size() {
        return es(this)
      },
      has: Qr,
      add: Ro,
      set: To,
      delete: No,
      clear: jo,
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
      add: Ro,
      set: To,
      delete: No,
      clear: jo,
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
      add: bn("add"),
      set: bn("set"),
      delete: bn("delete"),
      clear: bn("clear"),
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
      add: bn("add"),
      set: bn("set"),
      delete: bn("delete"),
      clear: bn("clear"),
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
const [kh, $h, Eh, Ch] = _h()
function Jl(e, t) {
  const n = t ? (e ? Ch : Eh) : e ? $h : kh
  return (r, s, l) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? r
          : Reflect.get(Me(n, s) && s in r ? n : r, s, l)
}
const Sh = { get: Jl(!1, !1) },
  Ph = { get: Jl(!1, !0) },
  Mh = { get: Jl(!0, !1) },
  Ki = new WeakMap(),
  Yi = new WeakMap(),
  Xi = new WeakMap(),
  Ah = new WeakMap()
function Ih(e) {
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
function Oh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ih(nh(e))
}
function Br(e) {
  return ur(e) ? e : Zl(e, !1, yh, Sh, Ki)
}
function Ji(e) {
  return Zl(e, !1, xh, Ph, Yi)
}
function Zi(e) {
  return Zl(e, !0, wh, Mh, Xi)
}
function Zl(e, t, n, r, s) {
  if (!Ve(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const l = s.get(e)
  if (l) return l
  const i = Oh(e)
  if (i === 0) return e
  const u = new Proxy(e, i === 2 ? r : n)
  return s.set(e, u), u
}
function ar(e) {
  return ur(e) ? ar(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ur(e) {
  return !!(e && e.__v_isReadonly)
}
function ps(e) {
  return !!(e && e.__v_isShallow)
}
function Qi(e) {
  return ar(e) || ur(e)
}
function Re(e) {
  const t = e && e.__v_raw
  return t ? Re(t) : e
}
function eu(e) {
  return hs(e, "__v_skip", !0), e
}
const Or = (e) => (Ve(e) ? Br(e) : e),
  Ql = (e) => (Ve(e) ? Zi(e) : e)
class tu {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ul(
        () => t(this._value),
        () => is(this, 1),
        () => this.dep && Vi(this.dep),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = Re(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        Sn(t._value, (t._value = t.effect.run())) &&
        is(t, 2),
      nu(t),
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
function Rh(e, t, n = !1) {
  let r, s
  const l = me(e)
  return (
    l ? ((r = e), (s = jt)) : ((r = e.get), (s = e.set)),
    new tu(r, s, l || !s, n)
  )
}
function nu(e) {
  En &&
    jn &&
    ((e = Re(e)),
    zi(
      jn,
      e.dep ||
        (e.dep = qi(() => (e.dep = void 0), e instanceof tu ? e : void 0)),
    ))
}
function is(e, t = 2, n) {
  e = Re(e)
  const r = e.dep
  r && Di(r, t)
}
function gt(e) {
  return !!(e && e.__v_isRef === !0)
}
function be(e) {
  return ru(e, !1)
}
function Th(e) {
  return ru(e, !0)
}
function ru(e, t) {
  return gt(e) ? e : new Nh(e, t)
}
class Nh {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Re(t)),
      (this._value = n ? t : Or(t))
  }
  get value() {
    return nu(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || ps(t) || ur(t)
    ;(t = n ? t : Re(t)),
      Sn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Or(t)), is(this, 2))
  }
}
function de(e) {
  return gt(e) ? e.value : e
}
const jh = {
  get: (e, t, n) => de(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return gt(s) && !gt(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function su(e) {
  return ar(e) ? e : new Proxy(e, jh)
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Cn(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (l) {
    Cs(l, t, n)
  }
  return s
}
function Dt(e, t, n, r) {
  if (me(e)) {
    const l = Cn(e, t, n, r)
    return (
      l &&
        Ri(l) &&
        l.catch((i) => {
          Cs(i, t, n)
        }),
      l
    )
  }
  const s = []
  for (let l = 0; l < e.length; l++) s.push(Dt(e[l], t, n, r))
  return s
}
function Cs(e, t, n, r = !0) {
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
      Cn(f, null, 10, [e, i, u])
      return
    }
  }
  Fh(e, n, s, r)
}
function Fh(e, t, n, r = !0) {
  console.error(e)
}
let Rr = !1,
  Pl = !1
const pt = []
let Kt = 0
const or = []
let wn = null,
  Tn = 0
const lu = Promise.resolve()
let ea = null
function au(e) {
  const t = ea || lu
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Lh(e) {
  let t = Kt + 1,
    n = pt.length
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = pt[r],
      l = Tr(s)
    l < e || (l === e && s.pre) ? (t = r + 1) : (n = r)
  }
  return t
}
function ta(e) {
  ;(!pt.length || !pt.includes(e, Rr && e.allowRecurse ? Kt + 1 : Kt)) &&
    (e.id == null ? pt.push(e) : pt.splice(Lh(e.id), 0, e), ou())
}
function ou() {
  !Rr && !Pl && ((Pl = !0), (ea = lu.then(uu)))
}
function Bh(e) {
  const t = pt.indexOf(e)
  t > Kt && pt.splice(t, 1)
}
function Hh(e) {
  ge(e)
    ? or.push(...e)
    : (!wn || !wn.includes(e, e.allowRecurse ? Tn + 1 : Tn)) && or.push(e),
    ou()
}
function Fo(e, t, n = Rr ? Kt + 1 : 0) {
  for (; n < pt.length; n++) {
    const r = pt[n]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      pt.splice(n, 1), n--, r()
    }
  }
}
function iu(e) {
  if (or.length) {
    const t = [...new Set(or)].sort((n, r) => Tr(n) - Tr(r))
    if (((or.length = 0), wn)) {
      wn.push(...t)
      return
    }
    for (wn = t, Tn = 0; Tn < wn.length; Tn++) wn[Tn]()
    ;(wn = null), (Tn = 0)
  }
}
const Tr = (e) => (e.id == null ? 1 / 0 : e.id),
  zh = (e, t) => {
    const n = Tr(e) - Tr(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function uu(e) {
  ;(Pl = !1), (Rr = !0), pt.sort(zh)
  try {
    for (Kt = 0; Kt < pt.length; Kt++) {
      const t = pt[Kt]
      t && t.active !== !1 && Cn(t, null, 14)
    }
  } finally {
    ;(Kt = 0),
      (pt.length = 0),
      iu(),
      (Rr = !1),
      (ea = null),
      (pt.length || or.length) && uu()
  }
}
function Dh(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || De
  let s = n
  const l = t.startsWith("update:"),
    i = l && t.slice(7)
  if (i && i in r) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: b, trim: k } = r[d] || De
    k && (s = n.map((S) => (nt(S) ? S.trim() : S))), b && (s = n.map(kl))
  }
  let u,
    f = r[(u = cl(t))] || r[(u = cl(Xt(t)))]
  !f && l && (f = r[(u = cl(vr(t)))]), f && Dt(f, e, 6, s)
  const h = r[u + "Once"]
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[u]) return
    ;(e.emitted[u] = !0), Dt(h, e, 6, s)
  }
}
function cu(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const l = e.emits
  let i = {},
    u = !1
  if (!me(e)) {
    const f = (h) => {
      const d = cu(h, t, !0)
      d && ((u = !0), dt(i, d))
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  return !l && !u
    ? (Ve(e) && r.set(e, null), null)
    : (ge(l) ? l.forEach((f) => (i[f] = null)) : dt(i, l),
      Ve(e) && r.set(e, i),
      i)
}
function Ss(e, t) {
  return !e || !ws(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      Me(e, t[0].toLowerCase() + t.slice(1)) || Me(e, vr(t)) || Me(e, t))
}
let Ct = null,
  Ps = null
function vs(e) {
  const t = Ct
  return (Ct = e), (Ps = (e && e.type.__scopeId) || null), t
}
function na(e) {
  Ps = e
}
function ra() {
  Ps = null
}
function ct(e, t = Ct, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Ko(-1)
    const l = vs(t)
    let i
    try {
      i = e(...s)
    } finally {
      vs(l), r._d && Ko(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function dl(e) {
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
    renderCache: b,
    data: k,
    setupState: S,
    ctx: F,
    inheritAttrs: _,
  } = e
  let C, T
  const W = vs(e)
  try {
    if (n.shapeFlag & 4) {
      const X = s || r,
        K = X
      ;(C = Ut(d.call(K, X, b, l, S, k, F))), (T = f)
    } else {
      const X = t
      ;(C = Ut(
        X.length > 1 ? X(l, { attrs: f, slots: u, emit: h }) : X(l, null),
      )),
        (T = t.props ? f : Vh(f))
    }
  } catch (X) {
    ;(Mr.length = 0), Cs(X, e, 1), (C = ae(Bn))
  }
  let D = C
  if (T && _ !== !1) {
    const X = Object.keys(T),
      { shapeFlag: K } = D
    X.length && K & 7 && (i && X.some(ql) && (T = qh(T, i)), (D = Hn(D, T)))
  }
  return (
    n.dirs && ((D = Hn(D)), (D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (D.transition = n.transition),
    (C = D),
    vs(W),
    C
  )
}
const Vh = (e) => {
    let t
    for (const n in e)
      (n === "class" || n === "style" || ws(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  qh = (e, t) => {
    const n = {}
    for (const r in e) (!ql(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function Wh(e, t, n) {
  const { props: r, children: s, component: l } = e,
    { props: i, children: u, patchFlag: f } = t,
    h = l.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && f >= 0) {
    if (f & 1024) return !0
    if (f & 16) return r ? Lo(r, i, h) : !!i
    if (f & 8) {
      const d = t.dynamicProps
      for (let b = 0; b < d.length; b++) {
        const k = d[b]
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
            ? Lo(r, i, h)
            : !0
          : !!i
  return !1
}
function Lo(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const l = r[s]
    if (t[l] !== e[l] && !Ss(n, l)) return !0
  }
  return !1
}
function Gh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const fu = "components",
  Uh = "directives"
function Kh(e, t) {
  return du(fu, e, !0, t) || e
}
const Yh = Symbol.for("v-ndc")
function Xh(e) {
  return du(Uh, e)
}
function du(e, t, n = !0, r = !1) {
  const s = Ct || vt
  if (s) {
    const l = s.type
    if (e === fu) {
      const u = Dp(l, !1)
      if (u && (u === t || u === Xt(t) || u === ks(Xt(t)))) return l
    }
    const i = Bo(s[e] || l[e], t) || Bo(s.appContext[e], t)
    return !i && r ? l : i
  }
}
function Bo(e, t) {
  return e && (e[t] || e[Xt(t)] || e[ks(Xt(t))])
}
const Jh = (e) => e.__isSuspense
function Zh(e, t) {
  t && t.pendingBranch
    ? ge(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Hh(e)
}
const Qh = Symbol.for("v-scx"),
  ep = () => ft(Qh)
function sn(e, t) {
  return sa(e, null, t)
}
const rs = {}
function rn(e, t, n) {
  return sa(e, t, n)
}
function sa(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: l, onTrack: i, onTrigger: u } = De,
) {
  if (t && l) {
    const I = t
    t = (...he) => {
      I(...he), K()
    }
  }
  const f = vt,
    h = (I) => (r === !0 ? I : Nn(I, r === !1 ? 1 : void 0))
  let d,
    b = !1,
    k = !1
  if (
    (gt(e)
      ? ((d = () => e.value), (b = ps(e)))
      : ar(e)
        ? ((d = () => h(e)), (b = !0))
        : ge(e)
          ? ((k = !0),
            (b = e.some((I) => ar(I) || ps(I))),
            (d = () =>
              e.map((I) => {
                if (gt(I)) return I.value
                if (ar(I)) return h(I)
                if (me(I)) return Cn(I, f, 2)
              })))
          : me(e)
            ? t
              ? (d = () => Cn(e, f, 2))
              : (d = () => (S && S(), Dt(e, f, 3, [F])))
            : (d = jt),
    t && r)
  ) {
    const I = d
    d = () => Nn(I())
  }
  let S,
    F = (I) => {
      S = D.onStop = () => {
        Cn(I, f, 4), (S = D.onStop = void 0)
      }
    },
    _
  if (Os)
    if (
      ((F = jt),
      t ? n && Dt(t, f, 3, [d(), k ? [] : void 0, F]) : d(),
      s === "sync")
    ) {
      const I = ep()
      _ = I.__watcherHandles || (I.__watcherHandles = [])
    } else return jt
  let C = k ? new Array(e.length).fill(rs) : rs
  const T = () => {
    if (!(!D.active || !D.dirty))
      if (t) {
        const I = D.run()
        ;(r || b || (k ? I.some((he, pe) => Sn(he, C[pe])) : Sn(I, C))) &&
          (S && S(),
          Dt(t, f, 3, [I, C === rs ? void 0 : k && C[0] === rs ? [] : C, F]),
          (C = I))
      } else D.run()
  }
  T.allowRecurse = !!t
  let W
  s === "sync"
    ? (W = T)
    : s === "post"
      ? (W = () => Et(T, f && f.suspense))
      : ((T.pre = !0), f && (T.id = f.uid), (W = () => ta(T)))
  const D = new Ul(d, jt, W),
    X = hh(),
    K = () => {
      D.stop(), X && Wl(X.effects, D)
    }
  return (
    t
      ? n
        ? T()
        : (C = D.run())
      : s === "post"
        ? Et(D.run.bind(D), f && f.suspense)
        : D.run(),
    _ && _.push(K),
    K
  )
}
function tp(e, t, n) {
  const r = this.proxy,
    s = nt(e) ? (e.includes(".") ? hu(r, e) : () => r[e]) : e.bind(r, r)
  let l
  me(t) ? (l = t) : ((l = t.handler), (n = t))
  const i = Hr(this),
    u = sa(s, l.bind(r), n)
  return i(), u
}
function hu(e, t) {
  const n = t.split(".")
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function Nn(e, t, n = 0, r) {
  if (!Ve(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((r = r || new Set()), r.has(e))) return e
  if ((r.add(e), gt(e))) Nn(e.value, t, n, r)
  else if (ge(e)) for (let s = 0; s < e.length; s++) Nn(e[s], t, n, r)
  else if (Oi(e) || lr(e))
    e.forEach((s) => {
      Nn(s, t, n, r)
    })
  else if (Ni(e)) for (const s in e) Nn(e[s], t, n, r)
  return e
}
function pu(e, t) {
  if (Ct === null) return e
  const n = Rs(Ct) || Ct.proxy,
    r = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [l, i, u, f = De] = t[s]
    l &&
      (me(l) && (l = { mounted: l, updated: l }),
      l.deep && Nn(i),
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
function On(e, t, n, r) {
  const s = e.dirs,
    l = t && t.dirs
  for (let i = 0; i < s.length; i++) {
    const u = s[i]
    l && (u.oldValue = l[i].value)
    let f = u.dir[r]
    f && (zn(), Dt(f, n, 8, [e.el, u, e, t]), Dn())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Tt(e, t) {
  return me(e) ? dt({ name: e.name }, t, { setup: e }) : e
}
const us = (e) => !!e.type.__asyncLoader,
  vu = (e) => e.type.__isKeepAlive
function np(e, t) {
  gu(e, "a", t)
}
function rp(e, t) {
  gu(e, "da", t)
}
function gu(e, t, n = vt) {
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
  if ((Ms(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) vu(s.parent.vnode) && sp(r, t, n, s), (s = s.parent)
  }
}
function sp(e, t, n, r) {
  const s = Ms(t, e, r, !0)
  Pn(() => {
    Wl(r[t], s)
  }, n)
}
function Ms(e, t, n = vt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          zn()
          const u = Hr(n),
            f = Dt(t, n, e, i)
          return u(), Dn(), f
        })
    return r ? s.unshift(l) : s.push(l), l
  }
}
const ln =
    (e) =>
    (t, n = vt) =>
      (!Os || e === "sp") && Ms(e, (...r) => t(...r), n),
  lp = ln("bm"),
  bt = ln("m"),
  bu = ln("bu"),
  ap = ln("u"),
  op = ln("bum"),
  Pn = ln("um"),
  ip = ln("sp"),
  up = ln("rtg"),
  cp = ln("rtc")
function fp(e, t = vt) {
  Ms("ec", e, t)
}
function ir(e, t, n, r) {
  let s
  const l = n && n[r]
  if (ge(e) || nt(e)) {
    s = new Array(e.length)
    for (let i = 0, u = e.length; i < u; i++)
      s[i] = t(e[i], i, void 0, l && l[i])
  } else if (typeof e == "number") {
    s = new Array(e)
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, l && l[i])
  } else if (Ve(e))
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
const Ml = (e) => (e ? (Mu(e) ? Rs(e) || e.proxy : Ml(e.parent)) : null),
  Pr = dt(Object.create(null), {
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
    $options: (e) => la(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), ta(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = au.bind(e.proxy)),
    $watch: (e) => tp.bind(e),
  }),
  hl = (e, t) => e !== De && !e.__isScriptSetup && Me(e, t),
  dp = {
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
        const S = i[t]
        if (S !== void 0)
          switch (S) {
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
          if (hl(r, t)) return (i[t] = 1), r[t]
          if (s !== De && Me(s, t)) return (i[t] = 2), s[t]
          if ((h = e.propsOptions[0]) && Me(h, t)) return (i[t] = 3), l[t]
          if (n !== De && Me(n, t)) return (i[t] = 4), n[t]
          Al && (i[t] = 0)
        }
      }
      const d = Pr[t]
      let b, k
      if (d) return t === "$attrs" && St(e, "get", t), d(e)
      if ((b = u.__cssModules) && (b = b[t])) return b
      if (n !== De && Me(n, t)) return (i[t] = 4), n[t]
      if (((k = f.config.globalProperties), Me(k, t))) return k[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: l } = e
      return hl(s, t)
        ? ((s[t] = n), !0)
        : r !== De && Me(r, t)
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
        (e !== De && Me(e, i)) ||
        hl(t, i) ||
        ((u = l[0]) && Me(u, i)) ||
        Me(r, i) ||
        Me(Pr, i) ||
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
  return ge(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Al = !0
function hp(e) {
  const t = la(e),
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
    beforeMount: b,
    mounted: k,
    beforeUpdate: S,
    updated: F,
    activated: _,
    deactivated: C,
    beforeDestroy: T,
    beforeUnmount: W,
    destroyed: D,
    unmounted: X,
    render: K,
    renderTracked: I,
    renderTriggered: he,
    errorCaptured: pe,
    serverPrefetch: mt,
    expose: Ge,
    inheritAttrs: Ze,
    components: _t,
    directives: qe,
    filters: Jt,
  } = t
  if ((h && pp(h, r, null), i))
    for (const ne in i) {
      const Z = i[ne]
      me(Z) && (r[ne] = Z.bind(n))
    }
  if (s) {
    const ne = s.call(n, n)
    Ve(ne) && (e.data = Br(ne))
  }
  if (((Al = !0), l))
    for (const ne in l) {
      const Z = l[ne],
        yt = me(Z) ? Z.bind(n, n) : me(Z.get) ? Z.get.bind(n, n) : jt,
        ze = !me(Z) && me(Z.set) ? Z.set.bind(n) : jt,
        ht = ue({ get: yt, set: ze })
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Qe) => (ht.value = Qe),
      })
    }
  if (u) for (const ne in u) mu(u[ne], r, n, ne)
  if (f) {
    const ne = me(f) ? f.call(n) : f
    Reflect.ownKeys(ne).forEach((Z) => {
      Yt(Z, ne[Z])
    })
  }
  d && zo(d, e, "c")
  function z(ne, Z) {
    ge(Z) ? Z.forEach((yt) => ne(yt.bind(n))) : Z && ne(Z.bind(n))
  }
  if (
    (z(lp, b),
    z(bt, k),
    z(bu, S),
    z(ap, F),
    z(np, _),
    z(rp, C),
    z(fp, pe),
    z(cp, I),
    z(up, he),
    z(op, W),
    z(Pn, X),
    z(ip, mt),
    ge(Ge))
  )
    if (Ge.length) {
      const ne = e.exposed || (e.exposed = {})
      Ge.forEach((Z) => {
        Object.defineProperty(ne, Z, {
          get: () => n[Z],
          set: (yt) => (n[Z] = yt),
        })
      })
    } else e.exposed || (e.exposed = {})
  K && e.render === jt && (e.render = K),
    Ze != null && (e.inheritAttrs = Ze),
    _t && (e.components = _t),
    qe && (e.directives = qe)
}
function pp(e, t, n = jt) {
  ge(e) && (e = Il(e))
  for (const r in e) {
    const s = e[r]
    let l
    Ve(s)
      ? "default" in s
        ? (l = ft(s.from || r, s.default, !0))
        : (l = ft(s.from || r))
      : (l = ft(s)),
      gt(l)
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
  Dt(ge(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function mu(e, t, n, r) {
  const s = r.includes(".") ? hu(n, r) : () => n[r]
  if (nt(e)) {
    const l = t[e]
    me(l) && rn(s, l)
  } else if (me(e)) rn(s, e.bind(n))
  else if (Ve(e))
    if (ge(e)) e.forEach((l) => mu(l, t, n, r))
    else {
      const l = me(e.handler) ? e.handler.bind(n) : t[e.handler]
      me(l) && rn(s, l, e)
    }
}
function la(e) {
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
          s.length && s.forEach((h) => gs(f, h, i, !0)),
          gs(f, t, i)),
    Ve(t) && l.set(t, f),
    f
  )
}
function gs(e, t, n, r = !1) {
  const { mixins: s, extends: l } = t
  l && gs(e, l, n, !0), s && s.forEach((i) => gs(e, i, n, !0))
  for (const i in t)
    if (!(r && i === "expose")) {
      const u = vp[i] || (n && n[i])
      e[i] = u ? u(e[i], t[i]) : t[i]
    }
  return e
}
const vp = {
  data: Do,
  props: Vo,
  emits: Vo,
  methods: Sr,
  computed: Sr,
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
  components: Sr,
  directives: Sr,
  watch: bp,
  provide: Do,
  inject: gp,
}
function Do(e, t) {
  return t
    ? e
      ? function () {
          return dt(
            me(e) ? e.call(this, this) : e,
            me(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function gp(e, t) {
  return Sr(Il(e), Il(t))
}
function Il(e) {
  if (ge(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function xt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Sr(e, t) {
  return e ? dt(Object.create(null), e, t) : t
}
function Vo(e, t) {
  return e
    ? ge(e) && ge(t)
      ? [...new Set([...e, ...t])]
      : dt(Object.create(null), Ho(e), Ho(t ?? {}))
    : t
}
function bp(e, t) {
  if (!e) return t
  if (!t) return e
  const n = dt(Object.create(null), e)
  for (const r in t) n[r] = xt(e[r], t[r])
  return n
}
function yu() {
  return {
    app: null,
    config: {
      isNativeTag: eh,
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
let mp = 0
function yp(e, t) {
  return function (r, s = null) {
    me(r) || (r = dt({}, r)), s != null && !Ve(s) && (s = null)
    const l = yu(),
      i = new WeakSet()
    let u = !1
    const f = (l.app = {
      _uid: mp++,
      _component: r,
      _props: s,
      _container: null,
      _context: l,
      _instance: null,
      version: qp,
      get config() {
        return l.config
      },
      set config(h) {},
      use(h, ...d) {
        return (
          i.has(h) ||
            (h && me(h.install)
              ? (i.add(h), h.install(f, ...d))
              : me(h) && (i.add(h), h(f, ...d))),
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
      mount(h, d, b) {
        if (!u) {
          const k = ae(r, s)
          return (
            (k.appContext = l),
            b === !0 ? (b = "svg") : b === !1 && (b = void 0),
            d && t ? t(k, h) : e(k, h, b),
            (u = !0),
            (f._container = h),
            (h.__vue_app__ = f),
            Rs(k.component) || k.component.proxy
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
  if (vt) {
    let n = vt.provides
    const r = vt.parent && vt.parent.provides
    r === n && (n = vt.provides = Object.create(r)), (n[e] = t)
  }
}
function ft(e, t, n = !1) {
  const r = vt || Ct
  if (r || bs) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : bs._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && me(t) ? t.call(r && r.proxy) : t
  }
}
function wp(e, t, n, r = !1) {
  const s = {},
    l = {}
  hs(l, Is, 1), (e.propsDefaults = Object.create(null)), wu(e, t, s, l)
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0)
  n ? (e.props = r ? s : Ji(s)) : e.type.props ? (e.props = s) : (e.props = l),
    (e.attrs = l)
}
function xp(e, t, n, r) {
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
      for (let b = 0; b < d.length; b++) {
        let k = d[b]
        if (Ss(e.emitsOptions, k)) continue
        const S = t[k]
        if (f)
          if (Me(l, k)) S !== l[k] && ((l[k] = S), (h = !0))
          else {
            const F = Xt(k)
            s[F] = Ol(f, u, F, S, e, !1)
          }
        else S !== l[k] && ((l[k] = S), (h = !0))
      }
    }
  } else {
    wu(e, t, s, l) && (h = !0)
    let d
    for (const b in u)
      (!t || (!Me(t, b) && ((d = vr(b)) === b || !Me(t, d)))) &&
        (f
          ? n &&
            (n[b] !== void 0 || n[d] !== void 0) &&
            (s[b] = Ol(f, u, b, void 0, e, !0))
          : delete s[b])
    if (l !== u) for (const b in l) (!t || !Me(t, b)) && (delete l[b], (h = !0))
  }
  h && nn(e, "set", "$attrs")
}
function wu(e, t, n, r) {
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
      h = u || De
    for (let d = 0; d < l.length; d++) {
      const b = l[d]
      n[b] = Ol(s, f, b, h[b], e, !Me(h, b))
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
      if (i.type !== Function && !i.skipFactory && me(f)) {
        const { propsDefaults: h } = s
        if (n in h) r = h[n]
        else {
          const d = Hr(s)
          ;(r = h[n] = f.call(null, t)), d()
        }
      } else r = f
    }
    i[0] && (l && !u ? (r = !1) : i[1] && (r === "" || r === vr(n)) && (r = !0))
  }
  return r
}
function xu(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const l = e.props,
    i = {},
    u = []
  let f = !1
  if (!me(e)) {
    const d = (b) => {
      f = !0
      const [k, S] = xu(b, t, !0)
      dt(i, k), S && u.push(...S)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!l && !f) return Ve(e) && r.set(e, sr), sr
  if (ge(l))
    for (let d = 0; d < l.length; d++) {
      const b = Xt(l[d])
      qo(b) && (i[b] = De)
    }
  else if (l)
    for (const d in l) {
      const b = Xt(d)
      if (qo(b)) {
        const k = l[d],
          S = (i[b] = ge(k) || me(k) ? { type: k } : dt({}, k))
        if (S) {
          const F = Uo(Boolean, S.type),
            _ = Uo(String, S.type)
          ;(S[0] = F > -1),
            (S[1] = _ < 0 || F < _),
            (F > -1 || Me(S, "default")) && u.push(b)
        }
      }
    }
  const h = [i, u]
  return Ve(e) && r.set(e, h), h
}
function qo(e) {
  return e[0] !== "$"
}
function Wo(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? "null" : ""
}
function Go(e, t) {
  return Wo(e) === Wo(t)
}
function Uo(e, t) {
  return ge(t) ? t.findIndex((n) => Go(n, e)) : me(t) && Go(t, e) ? 0 : -1
}
const _u = (e) => e[0] === "_" || e === "$stable",
  aa = (e) => (ge(e) ? e.map(Ut) : [Ut(e)]),
  _p = (e, t, n) => {
    if (t._n) return t
    const r = ct((...s) => aa(t(...s)), n)
    return (r._c = !1), r
  },
  ku = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (_u(s)) continue
      const l = e[s]
      if (me(l)) t[s] = _p(s, l, r)
      else if (l != null) {
        const i = aa(l)
        t[s] = () => i
      }
    }
  },
  $u = (e, t) => {
    const n = aa(t)
    e.slots.default = () => n
  },
  kp = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Re(t)), hs(t, "_", n)) : ku(t, (e.slots = {}))
    } else (e.slots = {}), t && $u(e, t)
    hs(e.slots, Is, 1)
  },
  $p = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let l = !0,
      i = De
    if (r.shapeFlag & 32) {
      const u = t._
      u
        ? n && u === 1
          ? (l = !1)
          : (dt(s, t), !n && u === 1 && delete s._)
        : ((l = !t.$stable), ku(t, s)),
        (i = t)
    } else t && ($u(e, t), (i = { default: 1 }))
    if (l) for (const u in s) !_u(u) && i[u] == null && delete s[u]
  }
function Rl(e, t, n, r, s = !1) {
  if (ge(e)) {
    e.forEach((k, S) => Rl(k, t && (ge(t) ? t[S] : t), n, r, s))
    return
  }
  if (us(r) && !s) return
  const l = r.shapeFlag & 4 ? Rs(r.component) || r.component.proxy : r.el,
    i = s ? null : l,
    { i: u, r: f } = e,
    h = t && t.r,
    d = u.refs === De ? (u.refs = {}) : u.refs,
    b = u.setupState
  if (
    (h != null &&
      h !== f &&
      (nt(h)
        ? ((d[h] = null), Me(b, h) && (b[h] = null))
        : gt(h) && (h.value = null)),
    me(f))
  )
    Cn(f, u, 12, [i, d])
  else {
    const k = nt(f),
      S = gt(f),
      F = e.f
    if (k || S) {
      const _ = () => {
        if (F) {
          const C = k ? (Me(b, f) ? b[f] : d[f]) : f.value
          s
            ? ge(C) && Wl(C, l)
            : ge(C)
              ? C.includes(l) || C.push(l)
              : k
                ? ((d[f] = [l]), Me(b, f) && (b[f] = d[f]))
                : ((f.value = [l]), e.k && (d[e.k] = f.value))
        } else
          k
            ? ((d[f] = i), Me(b, f) && (b[f] = i))
            : S && ((f.value = i), e.k && (d[e.k] = i))
      }
      s || F ? _() : ((_.id = -1), Et(_, n))
    }
  }
}
const Et = Zh
function Ep(e) {
  return Cp(e)
}
function Cp(e, t) {
  const n = ji()
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
      parentNode: b,
      nextSibling: k,
      setScopeId: S = jt,
      insertStaticContent: F,
    } = e,
    _ = (
      v,
      y,
      P,
      N = null,
      R = null,
      q = null,
      Y = void 0,
      V = null,
      G = !!y.dynamicChildren,
    ) => {
      if (v === y) return
      v && !$r(v, y) && ((N = O(v)), Qe(v, R, q, !0), (v = null)),
        y.patchFlag === -2 && ((G = !1), (y.dynamicChildren = null))
      const { type: L, ref: ee, shapeFlag: ce } = y
      switch (L) {
        case As:
          C(v, y, P, N)
          break
        case Bn:
          T(v, y, P, N)
          break
        case cs:
          v == null && W(y, P, N, Y)
          break
        case We:
          _t(v, y, P, N, R, q, Y, V, G)
          break
        default:
          ce & 1
            ? K(v, y, P, N, R, q, Y, V, G)
            : ce & 6
              ? qe(v, y, P, N, R, q, Y, V, G)
              : (ce & 64 || ce & 128) &&
                L.process(v, y, P, N, R, q, Y, V, G, le)
      }
      ee != null && R && Rl(ee, v && v.ref, q, y || v, !y)
    },
    C = (v, y, P, N) => {
      if (v == null) r((y.el = u(y.children)), P, N)
      else {
        const R = (y.el = v.el)
        y.children !== v.children && h(R, y.children)
      }
    },
    T = (v, y, P, N) => {
      v == null ? r((y.el = f(y.children || "")), P, N) : (y.el = v.el)
    },
    W = (v, y, P, N) => {
      ;[v.el, v.anchor] = F(v.children, y, P, N, v.el, v.anchor)
    },
    D = ({ el: v, anchor: y }, P, N) => {
      let R
      for (; v && v !== y; ) (R = k(v)), r(v, P, N), (v = R)
      r(y, P, N)
    },
    X = ({ el: v, anchor: y }) => {
      let P
      for (; v && v !== y; ) (P = k(v)), s(v), (v = P)
      s(y)
    },
    K = (v, y, P, N, R, q, Y, V, G) => {
      y.type === "svg" ? (Y = "svg") : y.type === "math" && (Y = "mathml"),
        v == null ? I(y, P, N, R, q, Y, V, G) : mt(v, y, R, q, Y, V, G)
    },
    I = (v, y, P, N, R, q, Y, V) => {
      let G, L
      const { props: ee, shapeFlag: ce, transition: oe, dirs: ve } = v
      if (
        ((G = v.el = i(v.type, q, ee && ee.is, ee)),
        ce & 8
          ? d(G, v.children)
          : ce & 16 && pe(v.children, G, null, N, R, pl(v, q), Y, V),
        ve && On(v, null, N, "created"),
        he(G, v, v.scopeId, Y, N),
        ee)
      ) {
        for (const Ie in ee)
          Ie !== "value" &&
            !as(Ie) &&
            l(G, Ie, null, ee[Ie], q, v.children, N, R, Ke)
        "value" in ee && l(G, "value", null, ee.value, q),
          (L = ee.onVnodeBeforeMount) && Gt(L, N, v)
      }
      ve && On(v, null, N, "beforeMount")
      const ye = Sp(R, oe)
      ye && oe.beforeEnter(G),
        r(G, y, P),
        ((L = ee && ee.onVnodeMounted) || ye || ve) &&
          Et(() => {
            L && Gt(L, N, v), ye && oe.enter(G), ve && On(v, null, N, "mounted")
          }, R)
    },
    he = (v, y, P, N, R) => {
      if ((P && S(v, P), N)) for (let q = 0; q < N.length; q++) S(v, N[q])
      if (R) {
        let q = R.subTree
        if (y === q) {
          const Y = R.vnode
          he(v, Y, Y.scopeId, Y.slotScopeIds, R.parent)
        }
      }
    },
    pe = (v, y, P, N, R, q, Y, V, G = 0) => {
      for (let L = G; L < v.length; L++) {
        const ee = (v[L] = V ? xn(v[L]) : Ut(v[L]))
        _(null, ee, y, P, N, R, q, Y, V)
      }
    },
    mt = (v, y, P, N, R, q, Y) => {
      const V = (y.el = v.el)
      let { patchFlag: G, dynamicChildren: L, dirs: ee } = y
      G |= v.patchFlag & 16
      const ce = v.props || De,
        oe = y.props || De
      let ve
      if (
        (P && Rn(P, !1),
        (ve = oe.onVnodeBeforeUpdate) && Gt(ve, P, y, v),
        ee && On(y, v, P, "beforeUpdate"),
        P && Rn(P, !0),
        L
          ? Ge(v.dynamicChildren, L, V, P, N, pl(y, R), q)
          : Y || Z(v, y, V, null, P, N, pl(y, R), q, !1),
        G > 0)
      ) {
        if (G & 16) Ze(V, y, ce, oe, P, N, R)
        else if (
          (G & 2 && ce.class !== oe.class && l(V, "class", null, oe.class, R),
          G & 4 && l(V, "style", ce.style, oe.style, R),
          G & 8)
        ) {
          const ye = y.dynamicProps
          for (let Ie = 0; Ie < ye.length; Ie++) {
            const Le = ye[Ie],
              Ue = ce[Le],
              Pt = oe[Le]
            ;(Pt !== Ue || Le === "value") &&
              l(V, Le, Ue, Pt, R, v.children, P, N, Ke)
          }
        }
        G & 1 && v.children !== y.children && d(V, y.children)
      } else !Y && L == null && Ze(V, y, ce, oe, P, N, R)
      ;((ve = oe.onVnodeUpdated) || ee) &&
        Et(() => {
          ve && Gt(ve, P, y, v), ee && On(y, v, P, "updated")
        }, N)
    },
    Ge = (v, y, P, N, R, q, Y) => {
      for (let V = 0; V < y.length; V++) {
        const G = v[V],
          L = y[V],
          ee =
            G.el && (G.type === We || !$r(G, L) || G.shapeFlag & 70)
              ? b(G.el)
              : P
        _(G, L, ee, null, N, R, q, Y, !0)
      }
    },
    Ze = (v, y, P, N, R, q, Y) => {
      if (P !== N) {
        if (P !== De)
          for (const V in P)
            !as(V) && !(V in N) && l(v, V, P[V], null, Y, y.children, R, q, Ke)
        for (const V in N) {
          if (as(V)) continue
          const G = N[V],
            L = P[V]
          G !== L && V !== "value" && l(v, V, L, G, Y, y.children, R, q, Ke)
        }
        "value" in N && l(v, "value", P.value, N.value, Y)
      }
    },
    _t = (v, y, P, N, R, q, Y, V, G) => {
      const L = (y.el = v ? v.el : u("")),
        ee = (y.anchor = v ? v.anchor : u(""))
      let { patchFlag: ce, dynamicChildren: oe, slotScopeIds: ve } = y
      ve && (V = V ? V.concat(ve) : ve),
        v == null
          ? (r(L, P, N),
            r(ee, P, N),
            pe(y.children || [], P, ee, R, q, Y, V, G))
          : ce > 0 && ce & 64 && oe && v.dynamicChildren
            ? (Ge(v.dynamicChildren, oe, P, R, q, Y, V),
              (y.key != null || (R && y === R.subTree)) && Eu(v, y, !0))
            : Z(v, y, P, ee, R, q, Y, V, G)
    },
    qe = (v, y, P, N, R, q, Y, V, G) => {
      ;(y.slotScopeIds = V),
        v == null
          ? y.shapeFlag & 512
            ? R.ctx.activate(y, P, N, Y, G)
            : Jt(y, P, N, R, q, Y, G)
          : qt(v, y, G)
    },
    Jt = (v, y, P, N, R, q, Y) => {
      const V = (v.component = Fp(v, N, R))
      if ((vu(v) && (V.ctx.renderer = le), Lp(V), V.asyncDep)) {
        if ((R && R.registerDep(V, z), !v.el)) {
          const G = (V.subTree = ae(Bn))
          T(null, G, y, P)
        }
      } else z(V, v, y, P, R, q, Y)
    },
    qt = (v, y, P) => {
      const N = (y.component = v.component)
      if (Wh(v, y, P))
        if (N.asyncDep && !N.asyncResolved) {
          ne(N, y, P)
          return
        } else (N.next = y), Bh(N.update), (N.effect.dirty = !0), N.update()
      else (y.el = v.el), (N.vnode = y)
    },
    z = (v, y, P, N, R, q, Y) => {
      const V = () => {
          if (v.isMounted) {
            let { next: ee, bu: ce, u: oe, parent: ve, vnode: ye } = v
            {
              const fn = Cu(v)
              if (fn) {
                ee && ((ee.el = ye.el), ne(v, ee, Y)),
                  fn.asyncDep.then(() => {
                    v.isUnmounted || V()
                  })
                return
              }
            }
            let Ie = ee,
              Le
            Rn(v, !1),
              ee ? ((ee.el = ye.el), ne(v, ee, Y)) : (ee = ye),
              ce && os(ce),
              (Le = ee.props && ee.props.onVnodeBeforeUpdate) &&
                Gt(Le, ve, ee, ye),
              Rn(v, !0)
            const Ue = dl(v),
              Pt = v.subTree
            ;(v.subTree = Ue),
              _(Pt, Ue, b(Pt.el), O(Pt), v, R, q),
              (ee.el = Ue.el),
              Ie === null && Gh(v, Ue.el),
              oe && Et(oe, R),
              (Le = ee.props && ee.props.onVnodeUpdated) &&
                Et(() => Gt(Le, ve, ee, ye), R)
          } else {
            let ee
            const { el: ce, props: oe } = y,
              { bm: ve, m: ye, parent: Ie } = v,
              Le = us(y)
            if (
              (Rn(v, !1),
              ve && os(ve),
              !Le && (ee = oe && oe.onVnodeBeforeMount) && Gt(ee, Ie, y),
              Rn(v, !0),
              ce && Be)
            ) {
              const Ue = () => {
                ;(v.subTree = dl(v)), Be(ce, v.subTree, v, R, null)
              }
              Le
                ? y.type.__asyncLoader().then(() => !v.isUnmounted && Ue())
                : Ue()
            } else {
              const Ue = (v.subTree = dl(v))
              _(null, Ue, P, N, v, R, q), (y.el = Ue.el)
            }
            if ((ye && Et(ye, R), !Le && (ee = oe && oe.onVnodeMounted))) {
              const Ue = y
              Et(() => Gt(ee, Ie, Ue), R)
            }
            ;(y.shapeFlag & 256 ||
              (Ie && us(Ie.vnode) && Ie.vnode.shapeFlag & 256)) &&
              v.a &&
              Et(v.a, R),
              (v.isMounted = !0),
              (y = P = N = null)
          }
        },
        G = (v.effect = new Ul(V, jt, () => ta(L), v.scope)),
        L = (v.update = () => {
          G.dirty && G.run()
        })
      ;(L.id = v.uid), Rn(v, !0), L()
    },
    ne = (v, y, P) => {
      y.component = v
      const N = v.vnode.props
      ;(v.vnode = y),
        (v.next = null),
        xp(v, y.props, N, P),
        $p(v, y.children, P),
        zn(),
        Fo(v),
        Dn()
    },
    Z = (v, y, P, N, R, q, Y, V, G = !1) => {
      const L = v && v.children,
        ee = v ? v.shapeFlag : 0,
        ce = y.children,
        { patchFlag: oe, shapeFlag: ve } = y
      if (oe > 0) {
        if (oe & 128) {
          ze(L, ce, P, N, R, q, Y, V, G)
          return
        } else if (oe & 256) {
          yt(L, ce, P, N, R, q, Y, V, G)
          return
        }
      }
      ve & 8
        ? (ee & 16 && Ke(L, R, q), ce !== L && d(P, ce))
        : ee & 16
          ? ve & 16
            ? ze(L, ce, P, N, R, q, Y, V, G)
            : Ke(L, R, q, !0)
          : (ee & 8 && d(P, ""), ve & 16 && pe(ce, P, N, R, q, Y, V, G))
    },
    yt = (v, y, P, N, R, q, Y, V, G) => {
      ;(v = v || sr), (y = y || sr)
      const L = v.length,
        ee = y.length,
        ce = Math.min(L, ee)
      let oe
      for (oe = 0; oe < ce; oe++) {
        const ve = (y[oe] = G ? xn(y[oe]) : Ut(y[oe]))
        _(v[oe], ve, P, null, R, q, Y, V, G)
      }
      L > ee ? Ke(v, R, q, !0, !1, ce) : pe(y, P, N, R, q, Y, V, G, ce)
    },
    ze = (v, y, P, N, R, q, Y, V, G) => {
      let L = 0
      const ee = y.length
      let ce = v.length - 1,
        oe = ee - 1
      for (; L <= ce && L <= oe; ) {
        const ve = v[L],
          ye = (y[L] = G ? xn(y[L]) : Ut(y[L]))
        if ($r(ve, ye)) _(ve, ye, P, null, R, q, Y, V, G)
        else break
        L++
      }
      for (; L <= ce && L <= oe; ) {
        const ve = v[ce],
          ye = (y[oe] = G ? xn(y[oe]) : Ut(y[oe]))
        if ($r(ve, ye)) _(ve, ye, P, null, R, q, Y, V, G)
        else break
        ce--, oe--
      }
      if (L > ce) {
        if (L <= oe) {
          const ve = oe + 1,
            ye = ve < ee ? y[ve].el : N
          for (; L <= oe; )
            _(null, (y[L] = G ? xn(y[L]) : Ut(y[L])), P, ye, R, q, Y, V, G), L++
        }
      } else if (L > oe) for (; L <= ce; ) Qe(v[L], R, q, !0), L++
      else {
        const ve = L,
          ye = L,
          Ie = new Map()
        for (L = ye; L <= oe; L++) {
          const wt = (y[L] = G ? xn(y[L]) : Ut(y[L]))
          wt.key != null && Ie.set(wt.key, L)
        }
        let Le,
          Ue = 0
        const Pt = oe - ye + 1
        let fn = !1,
          yr = 0
        const dn = new Array(Pt)
        for (L = 0; L < Pt; L++) dn[L] = 0
        for (L = ve; L <= ce; L++) {
          const wt = v[L]
          if (Ue >= Pt) {
            Qe(wt, R, q, !0)
            continue
          }
          let Mt
          if (wt.key != null) Mt = Ie.get(wt.key)
          else
            for (Le = ye; Le <= oe; Le++)
              if (dn[Le - ye] === 0 && $r(wt, y[Le])) {
                Mt = Le
                break
              }
          Mt === void 0
            ? Qe(wt, R, q, !0)
            : ((dn[Mt - ye] = L + 1),
              Mt >= yr ? (yr = Mt) : (fn = !0),
              _(wt, y[Mt], P, null, R, q, Y, V, G),
              Ue++)
        }
        const Dr = fn ? Pp(dn) : sr
        for (Le = Dr.length - 1, L = Pt - 1; L >= 0; L--) {
          const wt = ye + L,
            Mt = y[wt],
            wr = wt + 1 < ee ? y[wt + 1].el : N
          dn[L] === 0
            ? _(null, Mt, P, wr, R, q, Y, V, G)
            : fn && (Le < 0 || L !== Dr[Le] ? ht(Mt, P, wr, 2) : Le--)
        }
      }
    },
    ht = (v, y, P, N, R = null) => {
      const { el: q, type: Y, transition: V, children: G, shapeFlag: L } = v
      if (L & 6) {
        ht(v.component.subTree, y, P, N)
        return
      }
      if (L & 128) {
        v.suspense.move(y, P, N)
        return
      }
      if (L & 64) {
        Y.move(v, y, P, le)
        return
      }
      if (Y === We) {
        r(q, y, P)
        for (let ce = 0; ce < G.length; ce++) ht(G[ce], y, P, N)
        r(v.anchor, y, P)
        return
      }
      if (Y === cs) {
        D(v, y, P)
        return
      }
      if (N !== 2 && L & 1 && V)
        if (N === 0) V.beforeEnter(q), r(q, y, P), Et(() => V.enter(q), R)
        else {
          const { leave: ce, delayLeave: oe, afterLeave: ve } = V,
            ye = () => r(q, y, P),
            Ie = () => {
              ce(q, () => {
                ye(), ve && ve()
              })
            }
          oe ? oe(q, ye, Ie) : Ie()
        }
      else r(q, y, P)
    },
    Qe = (v, y, P, N = !1, R = !1) => {
      const {
        type: q,
        props: Y,
        ref: V,
        children: G,
        dynamicChildren: L,
        shapeFlag: ee,
        patchFlag: ce,
        dirs: oe,
      } = v
      if ((V != null && Rl(V, null, P, v, !0), ee & 256)) {
        y.ctx.deactivate(v)
        return
      }
      const ve = ee & 1 && oe,
        ye = !us(v)
      let Ie
      if ((ye && (Ie = Y && Y.onVnodeBeforeUnmount) && Gt(Ie, y, v), ee & 6))
        kt(v.component, P, N)
      else {
        if (ee & 128) {
          v.suspense.unmount(P, N)
          return
        }
        ve && On(v, null, y, "beforeUnmount"),
          ee & 64
            ? v.type.remove(v, y, P, R, le, N)
            : L && (q !== We || (ce > 0 && ce & 64))
              ? Ke(L, y, P, !1, !0)
              : ((q === We && ce & 384) || (!R && ee & 16)) && Ke(G, y, P),
          N && Wt(v)
      }
      ;((ye && (Ie = Y && Y.onVnodeUnmounted)) || ve) &&
        Et(() => {
          Ie && Gt(Ie, y, v), ve && On(v, null, y, "unmounted")
        }, P)
    },
    Wt = (v) => {
      const { type: y, el: P, anchor: N, transition: R } = v
      if (y === We) {
        Nt(P, N)
        return
      }
      if (y === cs) {
        X(v)
        return
      }
      const q = () => {
        s(P), R && !R.persisted && R.afterLeave && R.afterLeave()
      }
      if (v.shapeFlag & 1 && R && !R.persisted) {
        const { leave: Y, delayLeave: V } = R,
          G = () => Y(P, q)
        V ? V(v.el, q, G) : G()
      } else q()
    },
    Nt = (v, y) => {
      let P
      for (; v !== y; ) (P = k(v)), s(v), (v = P)
      s(y)
    },
    kt = (v, y, P) => {
      const { bum: N, scope: R, update: q, subTree: Y, um: V } = v
      N && os(N),
        R.stop(),
        q && ((q.active = !1), Qe(Y, v, y, P)),
        V && Et(V, y),
        Et(() => {
          v.isUnmounted = !0
        }, y),
        y &&
          y.pendingBranch &&
          !y.isUnmounted &&
          v.asyncDep &&
          !v.asyncResolved &&
          v.suspenseId === y.pendingId &&
          (y.deps--, y.deps === 0 && y.resolve())
    },
    Ke = (v, y, P, N = !1, R = !1, q = 0) => {
      for (let Y = q; Y < v.length; Y++) Qe(v[Y], y, P, N, R)
    },
    O = (v) =>
      v.shapeFlag & 6
        ? O(v.component.subTree)
        : v.shapeFlag & 128
          ? v.suspense.next()
          : k(v.anchor || v.el)
  let Q = !1
  const U = (v, y, P) => {
      v == null
        ? y._vnode && Qe(y._vnode, null, null, !0)
        : _(y._vnode || null, v, y, null, null, null, P),
        Q || ((Q = !0), Fo(), iu(), (Q = !1)),
        (y._vnode = v)
    },
    le = {
      p: _,
      um: Qe,
      m: ht,
      r: Wt,
      mt: Jt,
      mc: pe,
      pc: Z,
      pbc: Ge,
      n: O,
      o: e,
    }
  let Ae, Be
  return (
    t && ([Ae, Be] = t(le)), { render: U, hydrate: Ae, createApp: yp(U, Ae) }
  )
}
function pl({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n
}
function Rn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Sp(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Eu(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (ge(r) && ge(s))
    for (let l = 0; l < r.length; l++) {
      const i = r[l]
      let u = s[l]
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = s[l] = xn(s[l])), (u.el = i.el)),
        n || Eu(i, u)),
        u.type === As && (u.el = i.el)
    }
}
function Pp(e) {
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
function Cu(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Cu(t)
}
const Mp = (e) => e.__isTeleport,
  We = Symbol.for("v-fgt"),
  As = Symbol.for("v-txt"),
  Bn = Symbol.for("v-cmt"),
  cs = Symbol.for("v-stc"),
  Mr = []
let zt = null
function ie(e = !1) {
  Mr.push((zt = e ? null : []))
}
function Ap() {
  Mr.pop(), (zt = Mr[Mr.length - 1] || null)
}
let Nr = 1
function Ko(e) {
  Nr += e
}
function Su(e) {
  return (
    (e.dynamicChildren = Nr > 0 ? zt || sr : null),
    Ap(),
    Nr > 0 && zt && zt.push(e),
    e
  )
}
function Ee(e, t, n, r, s, l) {
  return Su(g(e, t, n, r, s, l, !0))
}
function Xe(e, t, n, r, s) {
  return Su(ae(e, t, n, r, s, !0))
}
function Tl(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function $r(e, t) {
  return e.type === t.type && e.key === t.key
}
const Is = "__vInternal",
  Pu = ({ key: e }) => e ?? null,
  fs = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? nt(e) || gt(e) || me(e)
        ? { i: Ct, r: e, k: t, f: !!n }
        : e
      : null
  )
function g(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  l = e === We ? 0 : 1,
  i = !1,
  u = !1,
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pu(t),
    ref: t && fs(t),
    scopeId: Ps,
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
      ? (oa(f, n), l & 128 && e.normalize(f))
      : n && (f.shapeFlag |= nt(n) ? 8 : 16),
    Nr > 0 &&
      !i &&
      zt &&
      (f.patchFlag > 0 || l & 6) &&
      f.patchFlag !== 32 &&
      zt.push(f),
    f
  )
}
const ae = Ip
function Ip(e, t = null, n = null, r = 0, s = null, l = !1) {
  if (((!e || e === Yh) && (e = Bn), Tl(e))) {
    const u = Hn(e, t, !0)
    return (
      n && oa(u, n),
      Nr > 0 &&
        !l &&
        zt &&
        (u.shapeFlag & 6 ? (zt[zt.indexOf(e)] = u) : zt.push(u)),
      (u.patchFlag |= -2),
      u
    )
  }
  if ((Vp(e) && (e = e.__vccOpts), t)) {
    t = Op(t)
    let { class: u, style: f } = t
    u && !nt(u) && (t.class = M(u)),
      Ve(f) && (Qi(f) && !ge(f) && (f = dt({}, f)), (t.style = $s(f)))
  }
  const i = nt(e) ? 1 : Jh(e) ? 128 : Mp(e) ? 64 : Ve(e) ? 4 : me(e) ? 2 : 0
  return g(e, t, n, r, s, i, l, !0)
}
function Op(e) {
  return e ? (Qi(e) || Is in e ? dt({}, e) : e) : null
}
function Hn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: l, children: i } = e,
    u = t ? Tp(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Pu(u),
    ref:
      t && t.ref
        ? n && s
          ? ge(s)
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
    patchFlag: t && e.type !== We ? (l === -1 ? 16 : l | 16) : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Hn(e.ssContent),
    ssFallback: e.ssFallback && Hn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function _e(e = " ", t = 0) {
  return ae(As, null, e, t)
}
function Rp(e, t) {
  const n = ae(cs, null, e)
  return (n.staticCount = t), n
}
function tt(e = "", t = !1) {
  return t ? (ie(), Xe(Bn, null, e)) : ae(Bn, null, e)
}
function Ut(e) {
  return e == null || typeof e == "boolean"
    ? ae(Bn)
    : ge(e)
      ? ae(We, null, e.slice())
      : typeof e == "object"
        ? xn(e)
        : ae(As, null, String(e))
}
function xn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Hn(e)
}
function oa(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (ge(t)) n = 16
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), oa(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Is in t)
        ? (t._ctx = Ct)
        : s === 3 &&
          Ct &&
          (Ct.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    me(t)
      ? ((t = { default: t, _ctx: Ct }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [_e(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Tp(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = M([t.class, r.class]))
      else if (s === "style") t.style = $s([t.style, r.style])
      else if (ws(s)) {
        const l = t[s],
          i = r[s]
        i &&
          l !== i &&
          !(ge(l) && l.includes(i)) &&
          (t[s] = l ? [].concat(l, i) : i)
      } else s !== "" && (t[s] = r[s])
  }
  return t
}
function Gt(e, t, n, r = null) {
  Dt(e, t, 7, [n, r])
}
const Np = yu()
let jp = 0
function Fp(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Np,
    l = {
      uid: jp++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new fh(!0),
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
      propsOptions: xu(r, s),
      emitsOptions: cu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: De,
      inheritAttrs: r.inheritAttrs,
      ctx: De,
      data: De,
      props: De,
      attrs: De,
      slots: De,
      refs: De,
      setupState: De,
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
    (l.emit = Dh.bind(null, l)),
    e.ce && e.ce(l),
    l
  )
}
let vt = null,
  ms,
  Nl
{
  const e = ji(),
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
  ;(ms = t("__VUE_INSTANCE_SETTERS__", (n) => (vt = n))),
    (Nl = t("__VUE_SSR_SETTERS__", (n) => (Os = n)))
}
const Hr = (e) => {
    const t = vt
    return (
      ms(e),
      e.scope.on(),
      () => {
        e.scope.off(), ms(t)
      }
    )
  },
  Yo = () => {
    vt && vt.scope.off(), ms(null)
  }
function Mu(e) {
  return e.vnode.shapeFlag & 4
}
let Os = !1
function Lp(e, t = !1) {
  t && Nl(t)
  const { props: n, children: r } = e.vnode,
    s = Mu(e)
  wp(e, n, s, t), kp(e, r)
  const l = s ? Bp(e, t) : void 0
  return t && Nl(!1), l
}
function Bp(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = eu(new Proxy(e.ctx, dp)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? zp(e) : null),
      l = Hr(e)
    zn()
    const i = Cn(r, e, 0, [e.props, s])
    if ((Dn(), l(), Ri(i))) {
      if ((i.then(Yo, Yo), t))
        return i
          .then((u) => {
            Xo(e, u, t)
          })
          .catch((u) => {
            Cs(u, e, 0)
          })
      e.asyncDep = i
    } else Xo(e, i, t)
  } else Au(e, t)
}
function Xo(e, t, n) {
  me(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ve(t) && (e.setupState = su(t)),
    Au(e, n)
}
let Jo
function Au(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Jo && !r.render) {
      const s = r.template || la(e).template
      if (s) {
        const { isCustomElement: l, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: f } = r,
          h = dt(dt({ isCustomElement: l, delimiters: u }, i), f)
        r.render = Jo(s, h)
      }
    }
    e.render = r.render || jt
  }
  {
    const s = Hr(e)
    zn()
    try {
      hp(e)
    } finally {
      Dn(), s()
    }
  }
}
function Hp(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return St(e, "get", "$attrs"), t[n]
      },
    }))
  )
}
function zp(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Hp(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Rs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(su(eu(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Pr) return Pr[n](e)
        },
        has(t, n) {
          return n in t || n in Pr
        },
      }))
    )
}
function Dp(e, t = !0) {
  return me(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Vp(e) {
  return me(e) && "__vccOpts" in e
}
const ue = (e, t) => Rh(e, t, Os)
function ot(e, t, n) {
  const r = arguments.length
  return r === 2
    ? Ve(t) && !ge(t)
      ? Tl(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && Tl(n) && (n = [n]),
      ae(e, t, n))
}
const qp = "3.4.15"
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Wp = "http://www.w3.org/2000/svg",
  Gp = "http://www.w3.org/1998/Math/MathML",
  _n = typeof document < "u" ? document : null,
  Zo = _n && _n.createElement("template"),
  Up = {
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
          ? _n.createElementNS(Wp, e)
          : t === "mathml"
            ? _n.createElementNS(Gp, e)
            : _n.createElement(e, n ? { is: n } : void 0)
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      )
    },
    createText: (e) => _n.createTextNode(e),
    createComment: (e) => _n.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => _n.querySelector(e),
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
        Zo.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
              ? `<math>${e}</math>`
              : e
        const u = Zo.content
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
  Kp = Symbol("_vtc")
function Yp(e, t, n) {
  const r = e[Kp]
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
        ? e.setAttribute("class", t)
        : (e.className = t)
}
const Xp = Symbol("_vod"),
  Jp = Symbol("")
function Zp(e, t, n) {
  const r = e.style,
    s = r.display,
    l = nt(n)
  if (n && !l) {
    if (t && !nt(t)) for (const i in t) n[i] == null && jl(r, i, "")
    for (const i in n) jl(r, i, n[i])
  } else if (l) {
    if (t !== n) {
      const i = r[Jp]
      i && (n += ";" + i), (r.cssText = n)
    }
  } else t && e.removeAttribute("style")
  Xp in e && (r.display = s)
}
const Qo = /\s*!important$/
function jl(e, t, n) {
  if (ge(n)) n.forEach((r) => jl(e, t, r))
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n)
  else {
    const r = Qp(e, t)
    Qo.test(n)
      ? e.setProperty(vr(r), n.replace(Qo, ""), "important")
      : (e[r] = n)
  }
}
const ei = ["Webkit", "Moz", "ms"],
  vl = {}
function Qp(e, t) {
  const n = vl[t]
  if (n) return n
  let r = Xt(t)
  if (r !== "filter" && r in e) return (vl[t] = r)
  r = ks(r)
  for (let s = 0; s < ei.length; s++) {
    const l = ei[s] + r
    if (l in e) return (vl[t] = l)
  }
  return t
}
const ti = "http://www.w3.org/1999/xlink"
function e1(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(ti, t.slice(6, t.length))
      : e.setAttributeNS(ti, t, n)
  else {
    const l = ch(t)
    n == null || (l && !Fi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, l ? "" : n)
  }
}
function t1(e, t, n, r, s, l, i) {
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
      ? (n = Fi(n))
      : n == null && h === "string"
        ? ((n = ""), (f = !0))
        : h === "number" && ((n = 0), (f = !0))
  }
  try {
    e[t] = n
  } catch {}
  f && e.removeAttribute(t)
}
function tr(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function n1(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const ni = Symbol("_vei")
function r1(e, t, n, r, s = null) {
  const l = e[ni] || (e[ni] = {}),
    i = l[t]
  if (r && i) i.value = r
  else {
    const [u, f] = s1(t)
    if (r) {
      const h = (l[t] = o1(r, s))
      tr(e, u, h, f)
    } else i && (n1(e, u, i, f), (l[t] = void 0))
  }
}
const ri = /(?:Once|Passive|Capture)$/
function s1(e) {
  let t
  if (ri.test(e)) {
    t = {}
    let r
    for (; (r = e.match(ri)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ":" ? e.slice(3) : vr(e.slice(2)), t]
}
let gl = 0
const l1 = Promise.resolve(),
  a1 = () => gl || (l1.then(() => (gl = 0)), (gl = Date.now()))
function o1(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    Dt(i1(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = a1()), n
}
function i1(e, t) {
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
const si = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  u1 = (e, t, n, r, s, l, i, u, f) => {
    const h = s === "svg"
    t === "class"
      ? Yp(e, r, h)
      : t === "style"
        ? Zp(e, n, r)
        : ws(t)
          ? ql(t) || r1(e, t, n, r, i)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : c1(e, t, r, h)
              )
            ? t1(e, t, r, l, i, u, f)
            : (t === "true-value"
                ? (e._trueValue = r)
                : t === "false-value" && (e._falseValue = r),
              e1(e, t, r, h))
  }
function c1(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && si(t) && me(n))
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
  return si(t) && nt(n) ? !1 : t in e
}
const li = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1
  return ge(t) ? (n) => os(t, n) : t
}
function f1(e) {
  e.target.composing = !0
}
function ai(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")))
}
const bl = Symbol("_assign"),
  d1 = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[bl] = li(s)
      const l = r || (s.props && s.props.type === "number")
      tr(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return
        let u = e.value
        n && (u = u.trim()), l && (u = kl(u)), e[bl](u)
      }),
        n &&
          tr(e, "change", () => {
            e.value = e.value.trim()
          }),
        t ||
          (tr(e, "compositionstart", f1),
          tr(e, "compositionend", ai),
          tr(e, "change", ai))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ""
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      l,
    ) {
      if (((e[bl] = li(l)), e.composing)) return
      const i = s || e.type === "number" ? kl(e.value) : e.value,
        u = t ?? ""
      i !== u &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === u))) ||
          (e.value = u))
    },
  },
  h1 = dt({ patchProp: u1 }, Up)
let oi
function p1() {
  return oi || (oi = Ep(h1))
}
const v1 = (...e) => {
  const t = p1().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (r) => {
      const s = b1(r)
      if (!s) return
      const l = t._component
      !me(l) && !l.render && !l.template && (l.template = s.innerHTML),
        (s.innerHTML = "")
      const i = n(s, !1, g1(s))
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      )
    }),
    t
  )
}
function g1(e) {
  if (e instanceof SVGElement) return "svg"
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml"
}
function b1(e) {
  return nt(e) ? document.querySelector(e) : e
}
const gr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  m1 = {}
function y1(e, t) {
  const n = Kh("router-view")
  return ie(), Xe(n)
}
const w1 = gr(m1, [["render", y1]])
let x1 = 0
function _1() {
  return ++x1
}
function Ln() {
  return _1()
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
var k1 = Object.defineProperty,
  $1 = (e, t, n) =>
    t in e
      ? k1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ii = (e, t, n) => ($1(e, typeof t != "symbol" ? t + "" : t, n), n)
let E1 = class {
    constructor() {
      ii(this, "current", this.detect()), ii(this, "currentId", 0)
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
  Ts = new E1()
function br(e) {
  if (Ts.isServer) return null
  if (e instanceof Node) return e.ownerDocument
  if (e != null && e.hasOwnProperty("value")) {
    let t = se(e)
    if (t) return t.ownerDocument
  }
  return document
}
let Fl = [
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
  $n = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))($n || {}),
  C1 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(C1 || {})
function Ns(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Fl)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      )
}
var ia = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(ia || {})
function Iu(e, t = 0) {
  var n
  return e === ((n = br(e)) == null ? void 0 : n.body)
    ? !1
    : Rt(t, {
        0() {
          return e.matches(Fl)
        },
        1() {
          let r = e
          for (; r !== null; ) {
            if (r.matches(Fl)) return !0
            r = r.parentElement
          }
          return !1
        },
      })
}
var S1 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(S1 || {})
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
let P1 = ["textarea", "input"].join(",")
function M1(e) {
  var t, n
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, P1)) !=
    null
    ? n
    : !1
}
function nr(e, t = (n) => n) {
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
    u = Array.isArray(e) ? (n ? nr(e) : e) : Ns(e)
  s.length > 0 && u.length > 1 && (u = u.filter((F) => !s.includes(F))),
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
    b = 0,
    k = u.length,
    S
  do {
    if (b >= k || b + k <= 0) return 0
    let F = h + b
    if (t & 16) F = (F + k) % k
    else {
      if (F < 0) return 3
      if (F >= k) return 1
    }
    ;(S = u[F]), S == null || S.focus(d), (b += f)
  } while (S !== i.activeElement)
  return t & 6 && M1(S) && S.select(), 2
}
function A1() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  )
}
function I1() {
  return /Android/gi.test(window.navigator.userAgent)
}
function O1() {
  return A1() || I1()
}
function ss(e, t, n) {
  Ts.isServer ||
    sn((r) => {
      document.addEventListener(e, t, n),
        r(() => document.removeEventListener(e, t, n))
    })
}
function Ou(e, t, n) {
  Ts.isServer ||
    sn((r) => {
      window.addEventListener(e, t, n),
        r(() => window.removeEventListener(e, t, n))
    })
}
function R1(e, t, n = ue(() => !0)) {
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
    return !Iu(u, ia.Loose) && u.tabIndex !== -1 && l.preventDefault(), t(l, u)
  }
  let s = be(null)
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
        O1() || (s.value && (r(l, () => s.value), (s.value = null)))
      },
      !0,
    ),
    ss(
      "touchend",
      (l) => r(l, () => (l.target instanceof HTMLElement ? l.target : null)),
      !0,
    ),
    Ou(
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
function ui(e, t) {
  if (e) return e
  let n = t ?? "button"
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}
function Ru(e, t) {
  let n = be(ui(e.value.type, e.value.as))
  return (
    bt(() => {
      n.value = ui(e.value.type, e.value.as)
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
var jr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(jr || {}),
  T1 = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(T1 || {})
function an({
  visible: e = !0,
  features: t = 0,
  ourProps: n,
  theirProps: r,
  ...s
}) {
  var l
  let i = Nu(r, n),
    u = Object.assign(s, { props: i })
  if (e || (t & 2 && i.static)) return ml(u)
  if (t & 1) {
    let f = (l = i.unmount) == null || l ? 0 : 1
    return Rt(f, {
      0() {
        return null
      },
      1() {
        return ml({
          ...s,
          props: { ...i, hidden: !0, style: { display: "none" } },
        })
      },
    })
  }
  return ml(u)
}
function ml({ props: e, attrs: t, slots: n, slot: r, name: s }) {
  var l, i
  let { as: u, ...f } = ju(e, ["unmount", "static"]),
    h = (l = n.default) == null ? void 0 : l.call(n, r),
    d = {}
  if (r) {
    let b = !1,
      k = []
    for (let [S, F] of Object.entries(r))
      typeof F == "boolean" && (b = !0), F === !0 && k.push(S)
    b && (d["data-headlessui-state"] = k.join(" "))
  }
  if (u === "template") {
    if (
      ((h = Tu(h ?? [])),
      Object.keys(f).length > 0 || Object.keys(t).length > 0)
    ) {
      let [b, ...k] = h ?? []
      if (!N1(b) || k.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${s} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(f)
              .concat(Object.keys(t))
              .map((_) => _.trim())
              .filter((_, C, T) => T.indexOf(_) === C)
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
      let S = Nu((i = b.props) != null ? i : {}, f, d),
        F = Hn(b, S, !0)
      for (let _ in S)
        _.startsWith("on") && (F.props || (F.props = {}), (F.props[_] = S[_]))
      return F
    }
    return Array.isArray(h) && h.length === 1 ? h[0] : h
  }
  return ot(u, Object.assign({}, f, d), { default: () => h })
}
function Tu(e) {
  return e.flatMap((t) => (t.type === We ? Tu(t.children) : [t]))
}
function Nu(...e) {
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
function ju(e, t = []) {
  let n = Object.assign({}, e)
  for (let r of t) r in n && delete n[r]
  return n
}
function N1(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function"
}
var cr = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(cr || {})
let fr = Tt({
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
  Fu = Symbol("Context")
var Fr = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Fr || {})
function j1() {
  return ft(Fu, null)
}
function F1(e) {
  Yt(Fu, e)
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
function L1(e) {
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
function B1(e, t, n, r) {
  Ts.isServer ||
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
  let e = be(0)
  return (
    Ou("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }),
    e
  )
}
function H1({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  let r = be(null),
    s = br(r)
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
          h.some((b) => d.contains(b)) ||
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
      return n != null ? null : ot(fr, { features: cr.Hidden, ref: r })
    },
  }
}
let ci = Symbol("PortalParentContext")
function z1() {
  let e = ft(ci, null),
    t = be([])
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
          Yt(ci, s),
          () => {
            var u
            return (u = i.default) == null ? void 0 : u.call(i)
          }
        )
      },
    }),
  ]
}
var D1 = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(D1 || {})
let Bu = Symbol("PopoverContext")
function ua(e) {
  let t = ft(Bu, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${Ll.name} /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ua), n)
  }
  return t
}
let V1 = Symbol("PopoverGroupContext")
function Hu() {
  return ft(V1, null)
}
let zu = Symbol("PopoverPanelContext")
function q1() {
  return ft(zu, null)
}
let Ll = Tt({
    name: "Popover",
    inheritAttrs: !1,
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n, expose: r }) {
      var s
      let l = be(null)
      r({ el: l, $el: l })
      let i = be(1),
        u = be(null),
        f = be(null),
        h = be(null),
        d = be(null),
        b = ue(() => br(l)),
        k = ue(() => {
          var K, I
          if (!se(u) || !se(d)) return !1
          for (let qe of document.querySelectorAll("body > *"))
            if (
              Number(qe == null ? void 0 : qe.contains(se(u))) ^
              Number(qe == null ? void 0 : qe.contains(se(d)))
            )
              return !0
          let he = Ns(),
            pe = he.indexOf(se(u)),
            mt = (pe + he.length - 1) % he.length,
            Ge = (pe + 1) % he.length,
            Ze = he[mt],
            _t = he[Ge]
          return (
            !((K = se(d)) != null && K.contains(Ze)) &&
            !((I = se(d)) != null && I.contains(_t))
          )
        }),
        S = {
          popoverState: i,
          buttonId: be(null),
          panelId: be(null),
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
            S.closePopover()
            let I = K
              ? K instanceof HTMLElement
                ? K
                : K.value instanceof HTMLElement
                  ? se(K)
                  : se(S.button)
              : se(S.button)
            I == null || I.focus()
          },
        }
      Yt(Bu, S), F1(ue(() => Rt(i.value, { 0: Fr.Open, 1: Fr.Closed })))
      let F = {
          buttonId: S.buttonId,
          panelId: S.panelId,
          close() {
            S.closePopover()
          },
        },
        _ = Hu(),
        C = _ == null ? void 0 : _.registerPopover,
        [T, W] = z1(),
        D = H1({
          mainTreeNodeRef: _ == null ? void 0 : _.mainTreeNodeRef,
          portals: T,
          defaultContainers: [u, d],
        })
      function X() {
        var K, I, he, pe
        return (pe = _ == null ? void 0 : _.isFocusWithinPopoverGroup()) != null
          ? pe
          : ((K = b.value) == null ? void 0 : K.activeElement) &&
              (((I = se(u)) == null
                ? void 0
                : I.contains(b.value.activeElement)) ||
                ((he = se(d)) == null
                  ? void 0
                  : he.contains(b.value.activeElement)))
      }
      return (
        sn(() => (C == null ? void 0 : C(F))),
        B1(
          (s = b.value) == null ? void 0 : s.defaultView,
          "focus",
          (K) => {
            var I, he
            K.target !== window &&
              K.target instanceof HTMLElement &&
              i.value === 0 &&
              (X() ||
                (u &&
                  d &&
                  (D.contains(K.target) ||
                    ((I = se(S.beforePanelSentinel)) != null &&
                      I.contains(K.target)) ||
                    ((he = se(S.afterPanelSentinel)) != null &&
                      he.contains(K.target)) ||
                    S.closePopover())))
          },
          !0,
        ),
        R1(
          D.resolveContainers,
          (K, I) => {
            var he
            S.closePopover(),
              Iu(I, ia.Loose) ||
                (K.preventDefault(), (he = se(u)) == null || he.focus())
          },
          ue(() => i.value === 0),
        ),
        () => {
          let K = { open: i.value === 0, close: S.close }
          return ot(We, [
            ot(W, {}, () =>
              an({
                theirProps: { ...e, ...n },
                ourProps: { ref: l },
                slot: K,
                slots: t,
                attrs: n,
                name: "Popover",
              }),
            ),
            ot(D.MainTreeNode),
          ])
        }
      )
    },
  }),
  fi = Tt({
    name: "PopoverButton",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-popover-button-${Ln()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = ua("PopoverButton"),
        l = ue(() => br(s.button))
      r({ el: s.button, $el: s.button }),
        bt(() => {
          s.buttonId.value = e.id
        }),
        Pn(() => {
          s.buttonId.value = null
        })
      let i = Hu(),
        u = i == null ? void 0 : i.closeOthers,
        f = q1(),
        h = ue(() => (f === null ? !1 : f.value === s.panelId.value)),
        d = be(null),
        b = `headlessui-focus-sentinel-${Ln()}`
      h.value ||
        sn(() => {
          s.button.value = se(d)
        })
      let k = Ru(
        ue(() => ({ as: e.as, type: t.type })),
        d,
      )
      function S(D) {
        var X, K, I, he, pe
        if (h.value) {
          if (s.popoverState.value === 1) return
          switch (D.key) {
            case at.Space:
            case at.Enter:
              D.preventDefault(),
                (K = (X = D.target).click) == null || K.call(X),
                s.closePopover(),
                (I = se(s.button)) == null || I.focus()
              break
          }
        } else
          switch (D.key) {
            case at.Space:
            case at.Enter:
              D.preventDefault(),
                D.stopPropagation(),
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
                    (pe = se(s.button)) != null &&
                    pe.contains(l.value.activeElement)
                  ))
              )
                return
              D.preventDefault(), D.stopPropagation(), s.closePopover()
              break
          }
      }
      function F(D) {
        h.value || (D.key === at.Space && D.preventDefault())
      }
      function _(D) {
        var X, K
        e.disabled ||
          (h.value
            ? (s.closePopover(), (X = se(s.button)) == null || X.focus())
            : (D.preventDefault(),
              D.stopPropagation(),
              s.popoverState.value === 1 && (u == null || u(s.buttonId.value)),
              s.togglePopover(),
              (K = se(s.button)) == null || K.focus()))
      }
      function C(D) {
        D.preventDefault(), D.stopPropagation()
      }
      let T = Lu()
      function W() {
        let D = se(s.panel)
        if (!D) return
        function X() {
          Rt(T.value, {
            [tn.Forwards]: () => Ot(D, et.First),
            [tn.Backwards]: () => Ot(D, et.Last),
          }) === $n.Error &&
            Ot(
              Ns().filter((K) => K.dataset.headlessuiFocusGuard !== "true"),
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
        let D = s.popoverState.value === 0,
          X = { open: D },
          { id: K, ...I } = e,
          he = h.value
            ? { ref: d, type: k.value, onKeydown: S, onClick: _ }
            : {
                ref: d,
                id: K,
                type: k.value,
                "aria-expanded": s.popoverState.value === 0,
                "aria-controls": se(s.panel) ? s.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onKeydown: S,
                onKeyup: F,
                onClick: _,
                onMousedown: C,
              }
        return ot(We, [
          an({
            ourProps: he,
            theirProps: { ...t, ...I },
            slot: X,
            attrs: t,
            slots: n,
            name: "PopoverButton",
          }),
          D &&
            !h.value &&
            s.isPortalled.value &&
            ot(fr, {
              id: b,
              features: cr.Focusable,
              "data-headlessui-focus-guard": !0,
              as: "button",
              type: "button",
              onFocus: W,
            }),
        ])
      }
    },
  }),
  di = Tt({
    name: "PopoverPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      focus: { type: Boolean, default: !1 },
      id: { type: String, default: () => `headlessui-popover-panel-${Ln()}` },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: r }) {
      let { focus: s } = e,
        l = ua("PopoverPanel"),
        i = ue(() => br(l.panel)),
        u = `headlessui-focus-sentinel-before-${Ln()}`,
        f = `headlessui-focus-sentinel-after-${Ln()}`
      r({ el: l.panel, $el: l.panel }),
        bt(() => {
          l.panelId.value = e.id
        }),
        Pn(() => {
          l.panelId.value = null
        }),
        Yt(zu, l.panelId),
        sn(() => {
          var C, T
          if (!s || l.popoverState.value !== 0 || !l.panel) return
          let W = (C = i.value) == null ? void 0 : C.activeElement
          ;((T = se(l.panel)) != null && T.contains(W)) ||
            Ot(se(l.panel), et.First)
        })
      let h = j1(),
        d = ue(() =>
          h !== null
            ? (h.value & Fr.Open) === Fr.Open
            : l.popoverState.value === 0,
        )
      function b(C) {
        var T, W
        switch (C.key) {
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
            C.preventDefault(),
              C.stopPropagation(),
              l.closePopover(),
              (W = se(l.button)) == null || W.focus()
            break
        }
      }
      function k(C) {
        var T, W, D, X, K
        let I = C.relatedTarget
        I &&
          se(l.panel) &&
          (((T = se(l.panel)) != null && T.contains(I)) ||
            (l.closePopover(),
            (((D =
              (W = se(l.beforePanelSentinel)) == null ? void 0 : W.contains) !=
              null &&
              D.call(W, I)) ||
              ((K =
                (X = se(l.afterPanelSentinel)) == null ? void 0 : X.contains) !=
                null &&
                K.call(X, I))) &&
              I.focus({ preventScroll: !0 })))
      }
      let S = Lu()
      function F() {
        let C = se(l.panel)
        if (!C) return
        function T() {
          Rt(S.value, {
            [tn.Forwards]: () => {
              var W
              Ot(C, et.First) === $n.Error &&
                ((W = se(l.afterPanelSentinel)) == null || W.focus())
            },
            [tn.Backwards]: () => {
              var W
              ;(W = se(l.button)) == null || W.focus({ preventScroll: !0 })
            },
          })
        }
        T()
      }
      function _() {
        let C = se(l.panel)
        if (!C) return
        function T() {
          Rt(S.value, {
            [tn.Forwards]: () => {
              let W = se(l.button),
                D = se(l.panel)
              if (!W) return
              let X = Ns(),
                K = X.indexOf(W),
                I = X.slice(0, K + 1),
                he = [...X.slice(K + 1), ...I]
              for (let pe of he.slice())
                if (
                  pe.dataset.headlessuiFocusGuard === "true" ||
                  (D != null && D.contains(pe))
                ) {
                  let mt = he.indexOf(pe)
                  mt !== -1 && he.splice(mt, 1)
                }
              Ot(he, et.First, { sorted: !1 })
            },
            [tn.Backwards]: () => {
              var W
              Ot(C, et.Previous) === $n.Error &&
                ((W = se(l.button)) == null || W.focus())
            },
          })
        }
        T()
      }
      return () => {
        let C = { open: l.popoverState.value === 0, close: l.close },
          { id: T, focus: W, ...D } = e,
          X = {
            ref: l.panel,
            id: T,
            onKeydown: b,
            onFocusout: s && l.popoverState.value === 0 ? k : void 0,
            tabIndex: -1,
          }
        return an({
          ourProps: X,
          theirProps: { ...t, ...D },
          attrs: t,
          slot: C,
          slots: {
            ...n,
            default: (...K) => {
              var I
              return [
                ot(We, [
                  d.value &&
                    l.isPortalled.value &&
                    ot(fr, {
                      id: u,
                      ref: l.beforePanelSentinel,
                      features: cr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: F,
                    }),
                  (I = n.default) == null ? void 0 : I.call(n, ...K),
                  d.value &&
                    l.isPortalled.value &&
                    ot(fr, {
                      id: f,
                      ref: l.afterPanelSentinel,
                      features: cr.Focusable,
                      "data-headlessui-focus-guard": !0,
                      as: "button",
                      type: "button",
                      onFocus: _,
                    }),
                ]),
              ]
            },
          },
          features: jr.RenderStrategy | jr.Static,
          visible: d.value,
          name: "PopoverPanel",
        })
      }
    },
  }),
  W1 = Tt({
    props: { onFocus: { type: Function, required: !0 } },
    setup(e) {
      let t = be(!0)
      return () =>
        t.value
          ? ot(fr, {
              as: "button",
              type: "button",
              features: cr.Focusable,
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
var G1 = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
  ))(G1 || {}),
  U1 = ((e) => (
    (e[(e.Less = -1)] = "Less"),
    (e[(e.Equal = 0)] = "Equal"),
    (e[(e.Greater = 1)] = "Greater"),
    e
  ))(U1 || {})
let Du = Symbol("TabsContext")
function zr(e) {
  let t = ft(Du, null)
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <TabGroup /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(n, zr), n)
  }
  return t
}
let ca = Symbol("TabsSSRContext"),
  K1 = Tt({
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
      let l = be((s = e.selectedIndex) != null ? s : e.defaultIndex),
        i = be([]),
        u = be([]),
        f = ue(() => e.selectedIndex !== null),
        h = ue(() => (f.value ? e.selectedIndex : l.value))
      function d(_) {
        var C
        let T = nr(b.tabs.value, se),
          W = nr(b.panels.value, se),
          D = T.filter((X) => {
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
              0: () => T.indexOf(D[0]),
              1: () => T.indexOf(D[D.length - 1]),
            })
          K !== -1 && (l.value = K), (b.tabs.value = T), (b.panels.value = W)
        } else {
          let X = T.slice(0, _),
            K = [...T.slice(_), ...X].find((he) => D.includes(he))
          if (!K) return
          let I = (C = T.indexOf(K)) != null ? C : b.selectedIndex.value
          I === -1 && (I = b.selectedIndex.value),
            (l.value = I),
            (b.tabs.value = T),
            (b.panels.value = W)
        }
      }
      let b = {
        selectedIndex: ue(() => {
          var _, C
          return (C = (_ = l.value) != null ? _ : e.defaultIndex) != null
            ? C
            : null
        }),
        orientation: ue(() => (e.vertical ? "vertical" : "horizontal")),
        activation: ue(() => (e.manual ? "manual" : "auto")),
        tabs: i,
        panels: u,
        setSelectedIndex(_) {
          h.value !== _ && r("change", _), f.value || d(_)
        },
        registerTab(_) {
          var C
          if (i.value.includes(_)) return
          let T = i.value[l.value]
          i.value.push(_), (i.value = nr(i.value, se))
          let W = (C = i.value.indexOf(T)) != null ? C : l.value
          W !== -1 && (l.value = W)
        },
        unregisterTab(_) {
          let C = i.value.indexOf(_)
          C !== -1 && i.value.splice(C, 1)
        },
        registerPanel(_) {
          u.value.includes(_) || (u.value.push(_), (u.value = nr(u.value, se)))
        },
        unregisterPanel(_) {
          let C = u.value.indexOf(_)
          C !== -1 && u.value.splice(C, 1)
        },
      }
      Yt(Du, b)
      let k = be({ tabs: [], panels: [] }),
        S = be(!1)
      bt(() => {
        S.value = !0
      }),
        Yt(
          ca,
          ue(() => (S.value ? null : k.value)),
        )
      let F = ue(() => e.selectedIndex)
      return (
        bt(() => {
          rn(
            [F],
            () => {
              var _
              return d((_ = e.selectedIndex) != null ? _ : e.defaultIndex)
            },
            { immediate: !0 },
          )
        }),
        sn(() => {
          if (!f.value || h.value == null || b.tabs.value.length <= 0) return
          let _ = nr(b.tabs.value, se)
          _.some((C, T) => se(b.tabs.value[T]) !== se(C)) &&
            b.setSelectedIndex(
              _.findIndex((C) => se(C) === se(b.tabs.value[h.value])),
            )
        }),
        () => {
          let _ = { selectedIndex: l.value }
          return ot(We, [
            i.value.length <= 0 &&
              ot(W1, {
                onFocus: () => {
                  for (let C of i.value) {
                    let T = se(C)
                    if ((T == null ? void 0 : T.tabIndex) === 0)
                      return T.focus(), !0
                  }
                  return !1
                },
              }),
            an({
              theirProps: {
                ...n,
                ...ju(e, [
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
  Y1 = Tt({
    name: "TabList",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { attrs: t, slots: n }) {
      let r = zr("TabList")
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
  X1 = Tt({
    name: "Tab",
    props: {
      as: { type: [Object, String], default: "button" },
      disabled: { type: [Boolean], default: !1 },
      id: { type: String, default: () => `headlessui-tabs-tab-${Ln()}` },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = zr("Tab"),
        l = be(null)
      r({ el: l, $el: l }),
        bt(() => s.registerTab(l)),
        Pn(() => s.unregisterTab(l))
      let i = ft(ca),
        u = ue(() => {
          if (i.value) {
            let C = i.value.tabs.indexOf(e.id)
            return C === -1 ? i.value.tabs.push(e.id) - 1 : C
          }
          return -1
        }),
        f = ue(() => {
          let C = s.tabs.value.indexOf(l)
          return C === -1 ? u.value : C
        }),
        h = ue(() => f.value === s.selectedIndex.value)
      function d(C) {
        var T
        let W = C()
        if (W === $n.Success && s.activation.value === "auto") {
          let D = (T = br(l)) == null ? void 0 : T.activeElement,
            X = s.tabs.value.findIndex((K) => se(K) === D)
          X !== -1 && s.setSelectedIndex(X)
        }
        return W
      }
      function b(C) {
        let T = s.tabs.value.map((W) => se(W)).filter(Boolean)
        if (C.key === at.Space || C.key === at.Enter) {
          C.preventDefault(), C.stopPropagation(), s.setSelectedIndex(f.value)
          return
        }
        switch (C.key) {
          case at.Home:
          case at.PageUp:
            return (
              C.preventDefault(), C.stopPropagation(), d(() => Ot(T, et.First))
            )
          case at.End:
          case at.PageDown:
            return (
              C.preventDefault(), C.stopPropagation(), d(() => Ot(T, et.Last))
            )
        }
        if (
          d(() =>
            Rt(s.orientation.value, {
              vertical() {
                return C.key === at.ArrowUp
                  ? Ot(T, et.Previous | et.WrapAround)
                  : C.key === at.ArrowDown
                    ? Ot(T, et.Next | et.WrapAround)
                    : $n.Error
              },
              horizontal() {
                return C.key === at.ArrowLeft
                  ? Ot(T, et.Previous | et.WrapAround)
                  : C.key === at.ArrowRight
                    ? Ot(T, et.Next | et.WrapAround)
                    : $n.Error
              },
            }),
          ) === $n.Success
        )
          return C.preventDefault()
      }
      let k = be(!1)
      function S() {
        var C
        k.value ||
          ((k.value = !0),
          !e.disabled &&
            ((C = se(l)) == null || C.focus({ preventScroll: !0 }),
            s.setSelectedIndex(f.value),
            L1(() => {
              k.value = !1
            })))
      }
      function F(C) {
        C.preventDefault()
      }
      let _ = Ru(
        ue(() => ({ as: e.as, type: t.type })),
        l,
      )
      return () => {
        var C
        let T = { selected: h.value },
          { id: W, ...D } = e,
          X = {
            ref: l,
            onKeydown: b,
            onMousedown: F,
            onClick: S,
            id: W,
            role: "tab",
            type: _.value,
            "aria-controls":
              (C = se(s.panels.value[f.value])) == null ? void 0 : C.id,
            "aria-selected": h.value,
            tabIndex: h.value ? 0 : -1,
            disabled: e.disabled ? !0 : void 0,
          }
        return an({
          ourProps: X,
          theirProps: D,
          slot: T,
          attrs: t,
          slots: n,
          name: "Tab",
        })
      }
    },
  }),
  J1 = Tt({
    name: "TabPanels",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: n }) {
      let r = zr("TabPanels")
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
  er = Tt({
    name: "TabPanel",
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      id: { type: String, default: () => `headlessui-tabs-panel-${Ln()}` },
      tabIndex: { type: Number, default: 0 },
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      let s = zr("TabPanel"),
        l = be(null)
      r({ el: l, $el: l }),
        bt(() => s.registerPanel(l)),
        Pn(() => s.unregisterPanel(l))
      let i = ft(ca),
        u = ue(() => {
          if (i.value) {
            let d = i.value.panels.indexOf(e.id)
            return d === -1 ? i.value.panels.push(e.id) - 1 : d
          }
          return -1
        }),
        f = ue(() => {
          let d = s.panels.value.indexOf(l)
          return d === -1 ? u.value : d
        }),
        h = ue(() => f.value === s.selectedIndex.value)
      return () => {
        var d
        let b = { selected: h.value },
          { id: k, tabIndex: S, ...F } = e,
          _ = {
            ref: l,
            id: k,
            role: "tabpanel",
            "aria-labelledby":
              (d = se(s.tabs.value[f.value])) == null ? void 0 : d.id,
            tabIndex: h.value ? S : -1,
          }
        return !h.value && e.unmount && !e.static
          ? ot(fr, { as: "span", "aria-hidden": !0, ..._ })
          : an({
              ourProps: _,
              theirProps: F,
              slot: b,
              attrs: t,
              slots: n,
              features: jr.Static | jr.RenderStrategy,
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
 */ const Z1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
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
          class: ["lucide", `lucide-${Z1(e)}`],
          ...u,
        },
        [...t.map((d) => ot(...d)), ...(h.default ? [h.default()] : [])],
      )
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hi = rt("CheckIcon", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = rt("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ev = rt("CloudDrizzleIcon", [
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
 */ const tv = rt("CloudSunIcon", [
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
 */ const Vu = rt("EyeOffIcon", [
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
 */ const nv = rt("EyeIcon", [
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
 */ const rv = rt("FrameIcon", [
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
 */ const sv = rt("GaugeCircleIcon", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lv = rt("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = rt("MoonStarIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ov = rt("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iv = rt("PencilRulerIcon", [
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
 */ const uv = rt("RabbitIcon", [
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
 */ const cv = rt("ShowerHeadIcon", [
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
 */ const fv = rt("SunIcon", [
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
 */ const yl = rt("TerminalIcon", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
])
/**
 * @license lucide-vue-next v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dv = rt("TurtleIcon", [
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
  fa = (e) => (na("data-v-8de8c9eb"), (e = e()), ra(), e),
  hv = { class: "flex justify-center p-5 gap-5 content-center" },
  pv = fa(() => g("div", { class: "w-1/12" }, null, -1)),
  vv = { class: "flex justify-between gap-2 w-full content-center" },
  gv = { class: "flex gap-1 p-2" },
  bv = { class: "flex gap-5 p-2 relative" },
  mv = { href: "/portfolio" },
  yv = { href: "/" },
  wv = {
    class: "py-1",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
  },
  xv = fa(() => g("b", null, "Art and Animation", -1)),
  _v = [xv],
  kv = { href: "/about-me" },
  $v = { class: "flex gap-5 content-center" },
  Ev = { href: "/contact" },
  Cv = { class: "lg:hidden flex" },
  Sv = { class: "flex gap-1 p-2" },
  Pv = { class: "flex flex-col gap-2 p-2" },
  Mv = { class: "flex justify-between" },
  Av = fa(() => g("div", { class: "w-1/12" }, null, -1)),
  Iv = { class: "flex justify-between items-center" },
  Ov = { class: "flex gap-1 p-2" },
  Rv = Rp(
    '<a href="/contact" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Contact</li></a><a href="/portfolio" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Web Portfolio</li></a><a href="/" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Web Services</li></a><li class="py-2 px-3 rounded opacity-75" data-v-8de8c9eb>Creative Projects</li><ul class="ml-5" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>Art and Animation</li><li class="py-2 px-3 rounded" data-v-8de8c9eb>Blog / Non-Fiction Writings</li><li class="py-2 px-3 rounded" data-v-8de8c9eb>Custom Software</li><li class="py-2 px-3 rounded" data-v-8de8c9eb>Cooking and Recipes</li></ul><a href="/about-me" data-v-8de8c9eb><li class="py-2 px-3 rounded" data-v-8de8c9eb>About Me</li></a>',
    6,
  ),
  Tv = [Rv],
  Nv = {
    __name: "Header",
    emits: ["update:brightness"],
    setup(e, { emit: t }) {
      const n = be(5),
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
        ie(),
        Ee(
          We,
          null,
          [
            g("div", hv, [
              pv,
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
                  g("div", vv, [
                    g("div", gv, [
                      ae(
                        de(yl),
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
                          onClick: l,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                    g("div", bv, [
                      g("a", mv, [
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
                      ]),
                      g("a", yv, [
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
                          " Web Services ",
                          2,
                        ),
                      ]),
                      ae(
                        de(Ll),
                        { class: "relative inline-block text-left" },
                        {
                          default: ct(() => [
                            ae(
                              de(fi),
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
                                  ae(de(Q1)),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                            ae(
                              de(di),
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
                                  g("div", wv, [
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
                                      _v,
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
                      g("a", kv, [
                        g(
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
                    g("div", $v, [
                      g("a", Ev, [
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
                      ]),
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
                  g("div", Cv, [
                    g("div", Sv, [
                      ae(
                        de(yl),
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
                          onClick: l,
                          id: "logoText",
                        },
                        " josephhansen.dev ",
                        2,
                      ),
                    ]),
                  ]),
                  ae(
                    de(lv),
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
                  ae(de(Ll), null, {
                    default: ct(() => [
                      ae(
                        de(fi),
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
                              ? (ie(),
                                Xe(de(fv), { key: 0, class: "text-slate-900" }))
                              : n.value == 4
                                ? (ie(),
                                  Xe(de(tv), {
                                    key: 1,
                                    class: "text-slate-800",
                                  }))
                                : n.value == 3
                                  ? (ie(),
                                    Xe(de(ev), {
                                      key: 2,
                                      class: "text-slate-300",
                                    }))
                                  : n.value == 2
                                    ? (ie(),
                                      Xe(de(ov), {
                                        key: 3,
                                        class: "text-slate-200",
                                      }))
                                    : (ie(),
                                      Xe(de(av), {
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
                        de(di),
                        {
                          class:
                            "absolute w-full right-4 mt-2 origin-top-right",
                        },
                        {
                          default: ct(() => [
                            g("div", Pv, [
                              g("div", Mv, [
                                pu(
                                  g(
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
                                  [[d1, n.value]],
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
              Av,
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
                g("div", Iv, [
                  g("div", Ov, [
                    ae(
                      de(yl),
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
                  Tv,
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
  jv = gr(Nv, [["__scopeId", "data-v-8de8c9eb"]]),
  Fv = { class: "flex justify-center py-5 flex-col" },
  Lv = { class: "inline-block relative" },
  Bv = { class: "font-semibold text-center px-1" },
  Hv = { class: "flex py-5 justify-center gap-3 w-full" },
  zv = { href: "/portfolio" },
  Dv = { href: "/pricing" },
  Vv = {
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
  qv = Object.assign(Vv, {
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
          Pn(() => {
            window.removeEventListener("mousedown", l),
              window.removeEventListener("mouseup", i)
          })
      }),
        bu(() => {
          r.value = !1
        })
      const s = ue(() => t.value[n.value])
      return (l, i) => {
        const u = Xh("typewriter")
        return (
          ie(),
          Ee("div", Fv, [
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
                _e(" I make "),
                g("div", Lv, [
                  pu((ie(), Ee("span", Bv, [_e(It(s.value), 1)])), [
                    [u, s.value],
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
                _e(" websites. "),
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
            g("div", Hv, [
              g("a", zv, [
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
              g("a", Dv, [
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
function Gv(e) {
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
      b = function (a, o) {
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
      S = function (a) {
        if (a.length < 2) return null
        var o = a.length - 1
        return k(a[o]) == "string" ? a[o].toLowerCase() : null
      },
      F = Math.PI,
      _ = {
        clip_rgb: s,
        limit: n,
        type: h,
        unpack: b,
        last: S,
        PI: F,
        TWOPI: F * 2,
        PITHIRD: F / 3,
        DEG2RAD: F / 180,
        RAD2DEG: 180 / F,
      },
      C = { format: {}, autodetect: [] },
      T = _.last,
      W = _.clip_rgb,
      D = _.type,
      X = C,
      K = function () {
        for (var o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        var p = this
        if (
          D(o[0]) === "object" &&
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
          for (var m = 0, $ = X.autodetect; m < $.length; m += 1) {
            var E = $[m]
            if (((w = E.test.apply(E, o)), w)) break
          }
        }
        if (X.format[w]) {
          var A = X.format[w].apply(null, x ? o : o.slice(0, -1))
          p._rgb = W(A)
        } else throw new Error("unknown format: " + o)
        p._rgb.length === 3 && p._rgb.push(1)
      }
    K.prototype.toString = function () {
      return D(this.hex) == "function"
        ? this.hex()
        : "[" + this._rgb.join(",") + "]"
    }
    var I = K,
      he = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(he.Color, [null].concat(a)))()
      }
    ;(he.Color = I), (he.version = "2.4.2")
    var pe = he,
      mt = _.unpack,
      Ge = Math.max,
      Ze = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = mt(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2]
        ;(p = p / 255), (w = w / 255), (x = x / 255)
        var m = 1 - Ge(p, Ge(w, x)),
          $ = m < 1 ? 1 / (1 - m) : 0,
          E = (1 - p - m) * $,
          A = (1 - w - m) * $,
          j = (1 - x - m) * $
        return [E, A, j, m]
      },
      _t = Ze,
      qe = _.unpack,
      Jt = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = qe(a, "cmyk")
        var c = a[0],
          p = a[1],
          w = a[2],
          x = a[3],
          m = a.length > 4 ? a[4] : 1
        return x === 1
          ? [0, 0, 0, m]
          : [
              c >= 1 ? 0 : 255 * (1 - c) * (1 - x),
              p >= 1 ? 0 : 255 * (1 - p) * (1 - x),
              w >= 1 ? 0 : 255 * (1 - w) * (1 - x),
              m,
            ]
      },
      qt = Jt,
      z = pe,
      ne = I,
      Z = C,
      yt = _.unpack,
      ze = _.type,
      ht = _t
    ;(ne.prototype.cmyk = function () {
      return ht(this._rgb)
    }),
      (z.cmyk = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ne,
          [null].concat(a, ["cmyk"]),
        ))()
      }),
      (Z.format.cmyk = qt),
      Z.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = yt(a, "cmyk")), ze(a) === "array" && a.length === 4))
            return "cmyk"
        },
      })
    var Qe = _.unpack,
      Wt = _.last,
      Nt = function (a) {
        return Math.round(a * 100) / 100
      },
      kt = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = Qe(a, "hsla"),
          p = Wt(a) || "lsa"
        return (
          (c[0] = Nt(c[0] || 0)),
          (c[1] = Nt(c[1] * 100) + "%"),
          (c[2] = Nt(c[2] * 100) + "%"),
          p === "hsla" || (c.length > 3 && c[3] < 1)
            ? ((c[3] = c.length > 3 ? c[3] : 1), (p = "hsla"))
            : (c.length = 3),
          p + "(" + c.join(",") + ")"
        )
      },
      Ke = kt,
      O = _.unpack,
      Q = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = O(a, "rgba")
        var c = a[0],
          p = a[1],
          w = a[2]
        ;(c /= 255), (p /= 255), (w /= 255)
        var x = Math.min(c, p, w),
          m = Math.max(c, p, w),
          $ = (m + x) / 2,
          E,
          A
        return (
          m === x
            ? ((E = 0), (A = Number.NaN))
            : (E = $ < 0.5 ? (m - x) / (m + x) : (m - x) / (2 - m - x)),
          c == m
            ? (A = (p - w) / (m - x))
            : p == m
              ? (A = 2 + (w - c) / (m - x))
              : w == m && (A = 4 + (c - p) / (m - x)),
          (A *= 60),
          A < 0 && (A += 360),
          a.length > 3 && a[3] !== void 0 ? [A, E, $, a[3]] : [A, E, $]
        )
      },
      U = Q,
      le = _.unpack,
      Ae = _.last,
      Be = Ke,
      v = U,
      y = Math.round,
      P = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = le(a, "rgba"),
          p = Ae(a) || "rgb"
        return p.substr(0, 3) == "hsl"
          ? Be(v(c), p)
          : ((c[0] = y(c[0])),
            (c[1] = y(c[1])),
            (c[2] = y(c[2])),
            (p === "rgba" || (c.length > 3 && c[3] < 1)) &&
              ((c[3] = c.length > 3 ? c[3] : 1), (p = "rgba")),
            p + "(" + c.slice(0, p === "rgb" ? 3 : 4).join(",") + ")")
      },
      N = P,
      R = _.unpack,
      q = Math.round,
      Y = function () {
        for (var a, o = [], c = arguments.length; c--; ) o[c] = arguments[c]
        o = R(o, "hsl")
        var p = o[0],
          w = o[1],
          x = o[2],
          m,
          $,
          E
        if (w === 0) m = $ = E = x * 255
        else {
          var A = [0, 0, 0],
            j = [0, 0, 0],
            J = x < 0.5 ? x * (1 + w) : x + w - x * w,
            B = 2 * x - J,
            re = p / 360
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
          ;(a = [q(j[0] * 255), q(j[1] * 255), q(j[2] * 255)]),
            (m = a[0]),
            ($ = a[1]),
            (E = a[2])
        }
        return o.length > 3 ? [m, $, E, o[3]] : [m, $, E, 1]
      },
      V = Y,
      G = V,
      L = C,
      ee = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
      ce =
        /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
      oe =
        /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      ve =
        /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      ye =
        /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
      Ie =
        /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
      Le = Math.round,
      Ue = function (a) {
        a = a.toLowerCase().trim()
        var o
        if (L.format.named)
          try {
            return L.format.named(a)
          } catch {}
        if ((o = a.match(ee))) {
          for (var c = o.slice(1, 4), p = 0; p < 3; p++) c[p] = +c[p]
          return (c[3] = 1), c
        }
        if ((o = a.match(ce))) {
          for (var w = o.slice(1, 5), x = 0; x < 4; x++) w[x] = +w[x]
          return w
        }
        if ((o = a.match(oe))) {
          for (var m = o.slice(1, 4), $ = 0; $ < 3; $++) m[$] = Le(m[$] * 2.55)
          return (m[3] = 1), m
        }
        if ((o = a.match(ve))) {
          for (var E = o.slice(1, 5), A = 0; A < 3; A++) E[A] = Le(E[A] * 2.55)
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
    Ue.test = function (a) {
      return (
        ee.test(a) ||
        ce.test(a) ||
        oe.test(a) ||
        ve.test(a) ||
        ye.test(a) ||
        Ie.test(a)
      )
    }
    var Pt = Ue,
      fn = pe,
      yr = I,
      dn = C,
      Dr = _.type,
      wt = N,
      Mt = Pt
    ;(yr.prototype.css = function (a) {
      return wt(this._rgb, a)
    }),
      (fn.css = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          yr,
          [null].concat(a, ["css"]),
        ))()
      }),
      (dn.format.css = Mt),
      dn.autodetect.push({
        p: 5,
        test: function (a) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && Dr(a) === "string" && Mt.test(a)) return "css"
        },
      })
    var wr = I,
      rc = pe,
      sc = C,
      lc = _.unpack
    ;(sc.format.gl = function () {
      for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
      var c = lc(a, "rgba")
      return (c[0] *= 255), (c[1] *= 255), (c[2] *= 255), c
    }),
      (rc.gl = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          wr,
          [null].concat(a, ["gl"]),
        ))()
      }),
      (wr.prototype.gl = function () {
        var a = this._rgb
        return [a[0] / 255, a[1] / 255, a[2] / 255, a[3]]
      })
    var ac = _.unpack,
      oc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = ac(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2],
          m = Math.min(p, w, x),
          $ = Math.max(p, w, x),
          E = $ - m,
          A = (E * 100) / 255,
          j = (m / (255 - E)) * 100,
          J
        return (
          E === 0
            ? (J = Number.NaN)
            : (p === $ && (J = (w - x) / E),
              w === $ && (J = 2 + (x - p) / E),
              x === $ && (J = 4 + (p - w) / E),
              (J *= 60),
              J < 0 && (J += 360)),
          [J, A, j]
        )
      },
      ic = oc,
      uc = _.unpack,
      cc = Math.floor,
      fc = function () {
        for (var a, o, c, p, w, x, m = [], $ = arguments.length; $--; )
          m[$] = arguments[$]
        m = uc(m, "hcg")
        var E = m[0],
          A = m[1],
          j = m[2],
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
          var we = cc(E),
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
              ;(p = [Se, Oe, lt]), (J = p[0]), (B = p[1]), (re = p[2])
              break
            case 4:
              ;(w = [it, Se, lt]), (J = w[0]), (B = w[1]), (re = w[2])
              break
            case 5:
              ;(x = [lt, Se, Oe]), (J = x[0]), (B = x[1]), (re = x[2])
              break
          }
        }
        return [J, B, re, m.length > 3 ? m[3] : 1]
      },
      dc = fc,
      hc = _.unpack,
      pc = _.type,
      vc = pe,
      ga = I,
      ba = C,
      gc = ic
    ;(ga.prototype.hcg = function () {
      return gc(this._rgb)
    }),
      (vc.hcg = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ga,
          [null].concat(a, ["hcg"]),
        ))()
      }),
      (ba.format.hcg = dc),
      ba.autodetect.push({
        p: 1,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = hc(a, "hcg")), pc(a) === "array" && a.length === 3))
            return "hcg"
        },
      })
    var bc = _.unpack,
      mc = _.last,
      Vr = Math.round,
      yc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = bc(a, "rgba"),
          p = c[0],
          w = c[1],
          x = c[2],
          m = c[3],
          $ = mc(a) || "auto"
        m === void 0 && (m = 1),
          $ === "auto" && ($ = m < 1 ? "rgba" : "rgb"),
          (p = Vr(p)),
          (w = Vr(w)),
          (x = Vr(x))
        var E = (p << 16) | (w << 8) | x,
          A = "000000" + E.toString(16)
        A = A.substr(A.length - 6)
        var j = "0" + Vr(m * 255).toString(16)
        switch (((j = j.substr(j.length - 2)), $.toLowerCase())) {
          case "rgba":
            return "#" + A + j
          case "argb":
            return "#" + j + A
          default:
            return "#" + A
        }
      },
      ma = yc,
      wc = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      xc = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
      _c = function (a) {
        if (a.match(wc)) {
          ;(a.length === 4 || a.length === 7) && (a = a.substr(1)),
            a.length === 3 &&
              ((a = a.split("")), (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]))
          var o = parseInt(a, 16),
            c = o >> 16,
            p = (o >> 8) & 255,
            w = o & 255
          return [c, p, w, 1]
        }
        if (a.match(xc)) {
          ;(a.length === 5 || a.length === 9) && (a = a.substr(1)),
            a.length === 4 &&
              ((a = a.split("")),
              (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2] + a[3] + a[3]))
          var x = parseInt(a, 16),
            m = (x >> 24) & 255,
            $ = (x >> 16) & 255,
            E = (x >> 8) & 255,
            A = Math.round(((x & 255) / 255) * 100) / 100
          return [m, $, E, A]
        }
        throw new Error("unknown hex color: " + a)
      },
      ya = _c,
      kc = pe,
      wa = I,
      $c = _.type,
      xa = C,
      Ec = ma
    ;(wa.prototype.hex = function (a) {
      return Ec(this._rgb, a)
    }),
      (kc.hex = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          wa,
          [null].concat(a, ["hex"]),
        ))()
      }),
      (xa.format.hex = ya),
      xa.autodetect.push({
        p: 4,
        test: function (a) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (
            !o.length &&
            $c(a) === "string" &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(a.length) >= 0
          )
            return "hex"
        },
      })
    var Cc = _.unpack,
      _a = _.TWOPI,
      Sc = Math.min,
      Pc = Math.sqrt,
      Mc = Math.acos,
      Ac = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = Cc(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2]
        ;(p /= 255), (w /= 255), (x /= 255)
        var m,
          $ = Sc(p, w, x),
          E = (p + w + x) / 3,
          A = E > 0 ? 1 - $ / E : 0
        return (
          A === 0
            ? (m = NaN)
            : ((m = (p - w + (p - x)) / 2),
              (m /= Pc((p - w) * (p - w) + (p - x) * (w - x))),
              (m = Mc(m)),
              x > w && (m = _a - m),
              (m /= _a)),
          [m * 360, A, E]
        )
      },
      Ic = Ac,
      Oc = _.unpack,
      Fs = _.limit,
      qn = _.TWOPI,
      Ls = _.PITHIRD,
      Wn = Math.cos,
      Rc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = Oc(a, "hsi")
        var c = a[0],
          p = a[1],
          w = a[2],
          x,
          m,
          $
        return (
          isNaN(c) && (c = 0),
          isNaN(p) && (p = 0),
          c > 360 && (c -= 360),
          c < 0 && (c += 360),
          (c /= 360),
          c < 1 / 3
            ? (($ = (1 - p) / 3),
              (x = (1 + (p * Wn(qn * c)) / Wn(Ls - qn * c)) / 3),
              (m = 1 - ($ + x)))
            : c < 2 / 3
              ? ((c -= 1 / 3),
                (x = (1 - p) / 3),
                (m = (1 + (p * Wn(qn * c)) / Wn(Ls - qn * c)) / 3),
                ($ = 1 - (x + m)))
              : ((c -= 2 / 3),
                (m = (1 - p) / 3),
                ($ = (1 + (p * Wn(qn * c)) / Wn(Ls - qn * c)) / 3),
                (x = 1 - (m + $))),
          (x = Fs(w * x * 3)),
          (m = Fs(w * m * 3)),
          ($ = Fs(w * $ * 3)),
          [x * 255, m * 255, $ * 255, a.length > 3 ? a[3] : 1]
        )
      },
      Tc = Rc,
      Nc = _.unpack,
      jc = _.type,
      Fc = pe,
      ka = I,
      $a = C,
      Lc = Ic
    ;(ka.prototype.hsi = function () {
      return Lc(this._rgb)
    }),
      (Fc.hsi = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          ka,
          [null].concat(a, ["hsi"]),
        ))()
      }),
      ($a.format.hsi = Tc),
      $a.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Nc(a, "hsi")), jc(a) === "array" && a.length === 3))
            return "hsi"
        },
      })
    var Bc = _.unpack,
      Hc = _.type,
      zc = pe,
      Ea = I,
      Ca = C,
      Dc = U
    ;(Ea.prototype.hsl = function () {
      return Dc(this._rgb)
    }),
      (zc.hsl = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Ea,
          [null].concat(a, ["hsl"]),
        ))()
      }),
      (Ca.format.hsl = V),
      Ca.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Bc(a, "hsl")), Hc(a) === "array" && a.length === 3))
            return "hsl"
        },
      })
    var Vc = _.unpack,
      qc = Math.min,
      Wc = Math.max,
      Gc = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = Vc(a, "rgb")
        var c = a[0],
          p = a[1],
          w = a[2],
          x = qc(c, p, w),
          m = Wc(c, p, w),
          $ = m - x,
          E,
          A,
          j
        return (
          (j = m / 255),
          m === 0
            ? ((E = Number.NaN), (A = 0))
            : ((A = $ / m),
              c === m && (E = (p - w) / $),
              p === m && (E = 2 + (w - c) / $),
              w === m && (E = 4 + (c - p) / $),
              (E *= 60),
              E < 0 && (E += 360)),
          [E, A, j]
        )
      },
      Uc = Gc,
      Kc = _.unpack,
      Yc = Math.floor,
      Xc = function () {
        for (var a, o, c, p, w, x, m = [], $ = arguments.length; $--; )
          m[$] = arguments[$]
        m = Kc(m, "hsv")
        var E = m[0],
          A = m[1],
          j = m[2],
          J,
          B,
          re
        if (((j *= 255), A === 0)) J = B = re = j
        else {
          E === 360 && (E = 0),
            E > 360 && (E -= 360),
            E < 0 && (E += 360),
            (E /= 60)
          var te = Yc(E),
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
              ;(p = [$e, Se, j]), (J = p[0]), (B = p[1]), (re = p[2])
              break
            case 4:
              ;(w = [Oe, $e, j]), (J = w[0]), (B = w[1]), (re = w[2])
              break
            case 5:
              ;(x = [j, $e, Se]), (J = x[0]), (B = x[1]), (re = x[2])
              break
          }
        }
        return [J, B, re, m.length > 3 ? m[3] : 1]
      },
      Jc = Xc,
      Zc = _.unpack,
      Qc = _.type,
      ef = pe,
      Sa = I,
      Pa = C,
      tf = Uc
    ;(Sa.prototype.hsv = function () {
      return tf(this._rgb)
    }),
      (ef.hsv = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Sa,
          [null].concat(a, ["hsv"]),
        ))()
      }),
      (Pa.format.hsv = Jc),
      Pa.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Zc(a, "hsv")), Qc(a) === "array" && a.length === 3))
            return "hsv"
        },
      })
    var qr = {
        Kn: 18,
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452,
      },
      Gn = qr,
      nf = _.unpack,
      Ma = Math.pow,
      rf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = nf(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2],
          m = sf(p, w, x),
          $ = m[0],
          E = m[1],
          A = m[2],
          j = 116 * E - 16
        return [j < 0 ? 0 : j, 500 * ($ - E), 200 * (E - A)]
      },
      Bs = function (a) {
        return (a /= 255) <= 0.04045 ? a / 12.92 : Ma((a + 0.055) / 1.055, 2.4)
      },
      Hs = function (a) {
        return a > Gn.t3 ? Ma(a, 1 / 3) : a / Gn.t2 + Gn.t0
      },
      sf = function (a, o, c) {
        ;(a = Bs(a)), (o = Bs(o)), (c = Bs(c))
        var p = Hs((0.4124564 * a + 0.3575761 * o + 0.1804375 * c) / Gn.Xn),
          w = Hs((0.2126729 * a + 0.7151522 * o + 0.072175 * c) / Gn.Yn),
          x = Hs((0.0193339 * a + 0.119192 * o + 0.9503041 * c) / Gn.Zn)
        return [p, w, x]
      },
      Aa = rf,
      Un = qr,
      lf = _.unpack,
      af = Math.pow,
      of = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = lf(a, "lab")
        var c = a[0],
          p = a[1],
          w = a[2],
          x,
          m,
          $,
          E,
          A,
          j
        return (
          (m = (c + 16) / 116),
          (x = isNaN(p) ? m : m + p / 500),
          ($ = isNaN(w) ? m : m - w / 200),
          (m = Un.Yn * Ds(m)),
          (x = Un.Xn * Ds(x)),
          ($ = Un.Zn * Ds($)),
          (E = zs(3.2404542 * x - 1.5371385 * m - 0.4985314 * $)),
          (A = zs(-0.969266 * x + 1.8760108 * m + 0.041556 * $)),
          (j = zs(0.0556434 * x - 0.2040259 * m + 1.0572252 * $)),
          [E, A, j, a.length > 3 ? a[3] : 1]
        )
      },
      zs = function (a) {
        return 255 * (a <= 0.00304 ? 12.92 * a : 1.055 * af(a, 1 / 2.4) - 0.055)
      },
      Ds = function (a) {
        return a > Un.t1 ? a * a * a : Un.t2 * (a - Un.t0)
      },
      Ia = of,
      uf = _.unpack,
      cf = _.type,
      ff = pe,
      Oa = I,
      Ra = C,
      df = Aa
    ;(Oa.prototype.lab = function () {
      return df(this._rgb)
    }),
      (ff.lab = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Oa,
          [null].concat(a, ["lab"]),
        ))()
      }),
      (Ra.format.lab = Ia),
      Ra.autodetect.push({
        p: 2,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = uf(a, "lab")), cf(a) === "array" && a.length === 3))
            return "lab"
        },
      })
    var hf = _.unpack,
      pf = _.RAD2DEG,
      vf = Math.sqrt,
      gf = Math.atan2,
      bf = Math.round,
      mf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = hf(a, "lab"),
          p = c[0],
          w = c[1],
          x = c[2],
          m = vf(w * w + x * x),
          $ = (gf(x, w) * pf + 360) % 360
        return bf(m * 1e4) === 0 && ($ = Number.NaN), [p, m, $]
      },
      Ta = mf,
      yf = _.unpack,
      wf = Aa,
      xf = Ta,
      _f = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = yf(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2],
          m = wf(p, w, x),
          $ = m[0],
          E = m[1],
          A = m[2]
        return xf($, E, A)
      },
      kf = _f,
      $f = _.unpack,
      Ef = _.DEG2RAD,
      Cf = Math.sin,
      Sf = Math.cos,
      Pf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = $f(a, "lch"),
          p = c[0],
          w = c[1],
          x = c[2]
        return isNaN(x) && (x = 0), (x = x * Ef), [p, Sf(x) * w, Cf(x) * w]
      },
      Na = Pf,
      Mf = _.unpack,
      Af = Na,
      If = Ia,
      Of = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = Mf(a, "lch")
        var c = a[0],
          p = a[1],
          w = a[2],
          x = Af(c, p, w),
          m = x[0],
          $ = x[1],
          E = x[2],
          A = If(m, $, E),
          j = A[0],
          J = A[1],
          B = A[2]
        return [j, J, B, a.length > 3 ? a[3] : 1]
      },
      ja = Of,
      Rf = _.unpack,
      Tf = ja,
      Nf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = Rf(a, "hcl").reverse()
        return Tf.apply(void 0, c)
      },
      jf = Nf,
      Ff = _.unpack,
      Lf = _.type,
      Fa = pe,
      Wr = I,
      Vs = C,
      La = kf
    ;(Wr.prototype.lch = function () {
      return La(this._rgb)
    }),
      (Wr.prototype.hcl = function () {
        return La(this._rgb).reverse()
      }),
      (Fa.lch = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Wr,
          [null].concat(a, ["lch"]),
        ))()
      }),
      (Fa.hcl = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Wr,
          [null].concat(a, ["hcl"]),
        ))()
      }),
      (Vs.format.lch = ja),
      (Vs.format.hcl = jf),
      ["lch", "hcl"].forEach(function (a) {
        return Vs.autodetect.push({
          p: 2,
          test: function () {
            for (var o = [], c = arguments.length; c--; ) o[c] = arguments[c]
            if (((o = Ff(o, a)), Lf(o) === "array" && o.length === 3)) return a
          },
        })
      })
    var Bf = {
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
      Ba = Bf,
      Hf = I,
      Ha = C,
      zf = _.type,
      xr = Ba,
      Df = ya,
      Vf = ma
    ;(Hf.prototype.name = function () {
      for (
        var a = Vf(this._rgb, "rgb"), o = 0, c = Object.keys(xr);
        o < c.length;
        o += 1
      ) {
        var p = c[o]
        if (xr[p] === a) return p.toLowerCase()
      }
      return a
    }),
      (Ha.format.named = function (a) {
        if (((a = a.toLowerCase()), xr[a])) return Df(xr[a])
        throw new Error("unknown color name: " + a)
      }),
      Ha.autodetect.push({
        p: 5,
        test: function (a) {
          for (var o = [], c = arguments.length - 1; c-- > 0; )
            o[c] = arguments[c + 1]
          if (!o.length && zf(a) === "string" && xr[a.toLowerCase()])
            return "named"
        },
      })
    var qf = _.unpack,
      Wf = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = qf(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2]
        return (p << 16) + (w << 8) + x
      },
      Gf = Wf,
      Uf = _.type,
      Kf = function (a) {
        if (Uf(a) == "number" && a >= 0 && a <= 16777215) {
          var o = a >> 16,
            c = (a >> 8) & 255,
            p = a & 255
          return [o, c, p, 1]
        }
        throw new Error("unknown num color: " + a)
      },
      Yf = Kf,
      Xf = pe,
      za = I,
      Da = C,
      Jf = _.type,
      Zf = Gf
    ;(za.prototype.num = function () {
      return Zf(this._rgb)
    }),
      (Xf.num = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          za,
          [null].concat(a, ["num"]),
        ))()
      }),
      (Da.format.num = Yf),
      Da.autodetect.push({
        p: 5,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (
            a.length === 1 &&
            Jf(a[0]) === "number" &&
            a[0] >= 0 &&
            a[0] <= 16777215
          )
            return "num"
        },
      })
    var Qf = pe,
      qs = I,
      Va = C,
      qa = _.unpack,
      Wa = _.type,
      Ga = Math.round
    ;(qs.prototype.rgb = function (a) {
      return (
        a === void 0 && (a = !0),
        a === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ga)
      )
    }),
      (qs.prototype.rgba = function (a) {
        return (
          a === void 0 && (a = !0),
          this._rgb.slice(0, 4).map(function (o, c) {
            return c < 3 ? (a === !1 ? o : Ga(o)) : o
          })
        )
      }),
      (Qf.rgb = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          qs,
          [null].concat(a, ["rgb"]),
        ))()
      }),
      (Va.format.rgb = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = qa(a, "rgba")
        return c[3] === void 0 && (c[3] = 1), c
      }),
      Va.autodetect.push({
        p: 3,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (
            ((a = qa(a, "rgba")),
            Wa(a) === "array" &&
              (a.length === 3 ||
                (a.length === 4 &&
                  Wa(a[3]) == "number" &&
                  a[3] >= 0 &&
                  a[3] <= 1)))
          )
            return "rgb"
        },
      })
    var Gr = Math.log,
      ed = function (a) {
        var o = a / 100,
          c,
          p,
          w
        return (
          o < 66
            ? ((c = 255),
              (p =
                o < 6
                  ? 0
                  : -155.25485562709179 -
                    0.44596950469579133 * (p = o - 2) +
                    104.49216199393888 * Gr(p)),
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
              (p =
                325.4494125711974 +
                0.07943456536662342 * (p = o - 50) -
                28.0852963507957 * Gr(p)),
              (w = 255)),
          [c, p, w, 1]
        )
      },
      Ua = ed,
      td = Ua,
      nd = _.unpack,
      rd = Math.round,
      sd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        for (
          var c = nd(a, "rgb"),
            p = c[0],
            w = c[2],
            x = 1e3,
            m = 4e4,
            $ = 0.4,
            E;
          m - x > $;

        ) {
          E = (m + x) * 0.5
          var A = td(E)
          A[2] / A[0] >= w / p ? (m = E) : (x = E)
        }
        return rd(E)
      },
      ld = sd,
      Ws = pe,
      Ur = I,
      Gs = C,
      ad = ld
    ;(Ur.prototype.temp =
      Ur.prototype.kelvin =
      Ur.prototype.temperature =
        function () {
          return ad(this._rgb)
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
      (Gs.format.temp = Gs.format.kelvin = Gs.format.temperature = Ua)
    var od = _.unpack,
      Us = Math.cbrt,
      id = Math.pow,
      ud = Math.sign,
      cd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = od(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2],
          m = [Ks(p / 255), Ks(w / 255), Ks(x / 255)],
          $ = m[0],
          E = m[1],
          A = m[2],
          j = Us(0.4122214708 * $ + 0.5363325363 * E + 0.0514459929 * A),
          J = Us(0.2119034982 * $ + 0.6806995451 * E + 0.1073969566 * A),
          B = Us(0.0883024619 * $ + 0.2817188376 * E + 0.6299787005 * A)
        return [
          0.2104542553 * j + 0.793617785 * J - 0.0040720468 * B,
          1.9779984951 * j - 2.428592205 * J + 0.4505937099 * B,
          0.0259040371 * j + 0.7827717662 * J - 0.808675766 * B,
        ]
      },
      Ka = cd
    function Ks(a) {
      var o = Math.abs(a)
      return o < 0.04045
        ? a / 12.92
        : (ud(a) || 1) * id((o + 0.055) / 1.055, 2.4)
    }
    var fd = _.unpack,
      Kr = Math.pow,
      dd = Math.sign,
      hd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = fd(a, "lab")
        var c = a[0],
          p = a[1],
          w = a[2],
          x = Kr(c + 0.3963377774 * p + 0.2158037573 * w, 3),
          m = Kr(c - 0.1055613458 * p - 0.0638541728 * w, 3),
          $ = Kr(c - 0.0894841775 * p - 1.291485548 * w, 3)
        return [
          255 * Ys(4.0767416621 * x - 3.3077115913 * m + 0.2309699292 * $),
          255 * Ys(-1.2684380046 * x + 2.6097574011 * m - 0.3413193965 * $),
          255 * Ys(-0.0041960863 * x - 0.7034186147 * m + 1.707614701 * $),
          a.length > 3 ? a[3] : 1,
        ]
      },
      Ya = hd
    function Ys(a) {
      var o = Math.abs(a)
      return o > 0.0031308
        ? (dd(a) || 1) * (1.055 * Kr(o, 1 / 2.4) - 0.055)
        : a * 12.92
    }
    var pd = _.unpack,
      vd = _.type,
      gd = pe,
      Xa = I,
      Ja = C,
      bd = Ka
    ;(Xa.prototype.oklab = function () {
      return bd(this._rgb)
    }),
      (gd.oklab = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Xa,
          [null].concat(a, ["oklab"]),
        ))()
      }),
      (Ja.format.oklab = Ya),
      Ja.autodetect.push({
        p: 3,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = pd(a, "oklab")), vd(a) === "array" && a.length === 3))
            return "oklab"
        },
      })
    var md = _.unpack,
      yd = Ka,
      wd = Ta,
      xd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        var c = md(a, "rgb"),
          p = c[0],
          w = c[1],
          x = c[2],
          m = yd(p, w, x),
          $ = m[0],
          E = m[1],
          A = m[2]
        return wd($, E, A)
      },
      _d = xd,
      kd = _.unpack,
      $d = Na,
      Ed = Ya,
      Cd = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        a = kd(a, "lch")
        var c = a[0],
          p = a[1],
          w = a[2],
          x = $d(c, p, w),
          m = x[0],
          $ = x[1],
          E = x[2],
          A = Ed(m, $, E),
          j = A[0],
          J = A[1],
          B = A[2]
        return [j, J, B, a.length > 3 ? a[3] : 1]
      },
      Sd = Cd,
      Pd = _.unpack,
      Md = _.type,
      Ad = pe,
      Za = I,
      Qa = C,
      Id = _d
    ;(Za.prototype.oklch = function () {
      return Id(this._rgb)
    }),
      (Ad.oklch = function () {
        for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
        return new (Function.prototype.bind.apply(
          Za,
          [null].concat(a, ["oklch"]),
        ))()
      }),
      (Qa.format.oklch = Sd),
      Qa.autodetect.push({
        p: 3,
        test: function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          if (((a = Pd(a, "oklch")), Md(a) === "array" && a.length === 3))
            return "oklch"
        },
      })
    var eo = I,
      Od = _.type
    eo.prototype.alpha = function (a, o) {
      return (
        o === void 0 && (o = !1),
        a !== void 0 && Od(a) === "number"
          ? o
            ? ((this._rgb[3] = a), this)
            : new eo([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb")
          : this._rgb[3]
      )
    }
    var Rd = I
    Rd.prototype.clipped = function () {
      return this._rgb._clipped || !1
    }
    var Mn = I,
      Td = qr
    ;(Mn.prototype.darken = function (a) {
      a === void 0 && (a = 1)
      var o = this,
        c = o.lab()
      return (c[0] -= Td.Kn * a), new Mn(c, "lab").alpha(o.alpha(), !0)
    }),
      (Mn.prototype.brighten = function (a) {
        return a === void 0 && (a = 1), this.darken(-a)
      }),
      (Mn.prototype.darker = Mn.prototype.darken),
      (Mn.prototype.brighter = Mn.prototype.brighten)
    var Nd = I
    Nd.prototype.get = function (a) {
      var o = a.split("."),
        c = o[0],
        p = o[1],
        w = this[c]()
      if (p) {
        var x = c.indexOf(p) - (c.substr(0, 2) === "ok" ? 2 : 0)
        if (x > -1) return w[x]
        throw new Error("unknown channel " + p + " in mode " + c)
      } else return w
    }
    var Kn = I,
      jd = _.type,
      Fd = Math.pow,
      Ld = 1e-7,
      Bd = 20
    Kn.prototype.luminance = function (a) {
      if (a !== void 0 && jd(a) === "number") {
        if (a === 0) return new Kn([0, 0, 0, this._rgb[3]], "rgb")
        if (a === 1) return new Kn([255, 255, 255, this._rgb[3]], "rgb")
        var o = this.luminance(),
          c = "rgb",
          p = Bd,
          w = function (m, $) {
            var E = m.interpolate($, 0.5, c),
              A = E.luminance()
            return Math.abs(a - A) < Ld || !p-- ? E : A > a ? w(m, E) : w(E, $)
          },
          x = (
            o > a
              ? w(new Kn([0, 0, 0]), this)
              : w(this, new Kn([255, 255, 255]))
          ).rgb()
        return new Kn(x.concat([this._rgb[3]]))
      }
      return Hd.apply(void 0, this._rgb.slice(0, 3))
    }
    var Hd = function (a, o, c) {
        return (
          (a = Xs(a)),
          (o = Xs(o)),
          (c = Xs(c)),
          0.2126 * a + 0.7152 * o + 0.0722 * c
        )
      },
      Xs = function (a) {
        return (
          (a /= 255), a <= 0.03928 ? a / 12.92 : Fd((a + 0.055) / 1.055, 2.4)
        )
      },
      At = {},
      to = I,
      no = _.type,
      Yr = At,
      ro = function (a, o, c) {
        c === void 0 && (c = 0.5)
        for (var p = [], w = arguments.length - 3; w-- > 0; )
          p[w] = arguments[w + 3]
        var x = p[0] || "lrgb"
        if ((!Yr[x] && !p.length && (x = Object.keys(Yr)[0]), !Yr[x]))
          throw new Error("interpolation mode " + x + " is not defined")
        return (
          no(a) !== "object" && (a = new to(a)),
          no(o) !== "object" && (o = new to(o)),
          Yr[x](a, o, c).alpha(a.alpha() + c * (o.alpha() - a.alpha()))
        )
      },
      so = I,
      zd = ro
    so.prototype.mix = so.prototype.interpolate = function (a, o) {
      o === void 0 && (o = 0.5)
      for (var c = [], p = arguments.length - 2; p-- > 0; )
        c[p] = arguments[p + 2]
      return zd.apply(void 0, [this, a, o].concat(c))
    }
    var lo = I
    lo.prototype.premultiply = function (a) {
      a === void 0 && (a = !1)
      var o = this._rgb,
        c = o[3]
      return a
        ? ((this._rgb = [o[0] * c, o[1] * c, o[2] * c, c]), this)
        : new lo([o[0] * c, o[1] * c, o[2] * c, c], "rgb")
    }
    var Js = I,
      Dd = qr
    ;(Js.prototype.saturate = function (a) {
      a === void 0 && (a = 1)
      var o = this,
        c = o.lch()
      return (
        (c[1] += Dd.Kn * a),
        c[1] < 0 && (c[1] = 0),
        new Js(c, "lch").alpha(o.alpha(), !0)
      )
    }),
      (Js.prototype.desaturate = function (a) {
        return a === void 0 && (a = 1), this.saturate(-a)
      })
    var ao = I,
      oo = _.type
    ao.prototype.set = function (a, o, c) {
      c === void 0 && (c = !1)
      var p = a.split("."),
        w = p[0],
        x = p[1],
        m = this[w]()
      if (x) {
        var $ = w.indexOf(x) - (w.substr(0, 2) === "ok" ? 2 : 0)
        if ($ > -1) {
          if (oo(o) == "string")
            switch (o.charAt(0)) {
              case "+":
                m[$] += +o
                break
              case "-":
                m[$] += +o
                break
              case "*":
                m[$] *= +o.substr(1)
                break
              case "/":
                m[$] /= +o.substr(1)
                break
              default:
                m[$] = +o
            }
          else if (oo(o) === "number") m[$] = o
          else throw new Error("unsupported value for Color.set")
          var E = new ao(m, w)
          return c ? ((this._rgb = E._rgb), this) : E
        }
        throw new Error("unknown channel " + x + " in mode " + w)
      } else return m
    }
    var Vd = I,
      qd = function (a, o, c) {
        var p = a._rgb,
          w = o._rgb
        return new Vd(
          p[0] + c * (w[0] - p[0]),
          p[1] + c * (w[1] - p[1]),
          p[2] + c * (w[2] - p[2]),
          "rgb",
        )
      }
    At.rgb = qd
    var Wd = I,
      Zs = Math.sqrt,
      Yn = Math.pow,
      Gd = function (a, o, c) {
        var p = a._rgb,
          w = p[0],
          x = p[1],
          m = p[2],
          $ = o._rgb,
          E = $[0],
          A = $[1],
          j = $[2]
        return new Wd(
          Zs(Yn(w, 2) * (1 - c) + Yn(E, 2) * c),
          Zs(Yn(x, 2) * (1 - c) + Yn(A, 2) * c),
          Zs(Yn(m, 2) * (1 - c) + Yn(j, 2) * c),
          "rgb",
        )
      }
    At.lrgb = Gd
    var Ud = I,
      Kd = function (a, o, c) {
        var p = a.lab(),
          w = o.lab()
        return new Ud(
          p[0] + c * (w[0] - p[0]),
          p[1] + c * (w[1] - p[1]),
          p[2] + c * (w[2] - p[2]),
          "lab",
        )
      }
    At.lab = Kd
    var io = I,
      Xn = function (a, o, c, p) {
        var w, x, m, $
        p === "hsl"
          ? ((m = a.hsl()), ($ = o.hsl()))
          : p === "hsv"
            ? ((m = a.hsv()), ($ = o.hsv()))
            : p === "hcg"
              ? ((m = a.hcg()), ($ = o.hcg()))
              : p === "hsi"
                ? ((m = a.hsi()), ($ = o.hsi()))
                : p === "lch" || p === "hcl"
                  ? ((p = "hcl"), (m = a.hcl()), ($ = o.hcl()))
                  : p === "oklch" &&
                    ((m = a.oklch().reverse()), ($ = o.oklch().reverse()))
        var E, A, j, J, B, re
        ;(p.substr(0, 1) === "h" || p === "oklch") &&
          ((w = m),
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
                : ((we = A), (B == 1 || B == 0) && p != "hsv" && (te = J))
              : ((we = E), (re == 1 || re == 0) && p != "hsv" && (te = j)),
          te === void 0 && (te = j + c * (J - j)),
          ($e = B + c * (re - B)),
          p === "oklch" ? new io([$e, te, we], p) : new io([we, te, $e], p)
        )
      },
      Yd = Xn,
      uo = function (a, o, c) {
        return Yd(a, o, c, "lch")
      }
    ;(At.lch = uo), (At.hcl = uo)
    var Xd = I,
      Jd = function (a, o, c) {
        var p = a.num(),
          w = o.num()
        return new Xd(p + c * (w - p), "num")
      }
    At.num = Jd
    var Zd = Xn,
      Qd = function (a, o, c) {
        return Zd(a, o, c, "hcg")
      }
    At.hcg = Qd
    var e0 = Xn,
      t0 = function (a, o, c) {
        return e0(a, o, c, "hsi")
      }
    At.hsi = t0
    var n0 = Xn,
      r0 = function (a, o, c) {
        return n0(a, o, c, "hsl")
      }
    At.hsl = r0
    var s0 = Xn,
      l0 = function (a, o, c) {
        return s0(a, o, c, "hsv")
      }
    At.hsv = l0
    var a0 = I,
      o0 = function (a, o, c) {
        var p = a.oklab(),
          w = o.oklab()
        return new a0(
          p[0] + c * (w[0] - p[0]),
          p[1] + c * (w[1] - p[1]),
          p[2] + c * (w[2] - p[2]),
          "oklab",
        )
      }
    At.oklab = o0
    var i0 = Xn,
      u0 = function (a, o, c) {
        return i0(a, o, c, "oklch")
      }
    At.oklch = u0
    var Qs = I,
      c0 = _.clip_rgb,
      el = Math.pow,
      tl = Math.sqrt,
      nl = Math.PI,
      co = Math.cos,
      fo = Math.sin,
      f0 = Math.atan2,
      d0 = function (a, o, c) {
        o === void 0 && (o = "lrgb"), c === void 0 && (c = null)
        var p = a.length
        c ||
          (c = Array.from(new Array(p)).map(function () {
            return 1
          }))
        var w =
          p /
          c.reduce(function (we, $e) {
            return we + $e
          })
        if (
          (c.forEach(function (we, $e) {
            c[$e] *= w
          }),
          (a = a.map(function (we) {
            return new Qs(we)
          })),
          o === "lrgb")
        )
          return h0(a, c)
        for (
          var x = a.shift(), m = x.get(o), $ = [], E = 0, A = 0, j = 0;
          j < m.length;
          j++
        )
          if (
            ((m[j] = (m[j] || 0) * c[0]),
            $.push(isNaN(m[j]) ? 0 : c[0]),
            o.charAt(j) === "h" && !isNaN(m[j]))
          ) {
            var J = (m[j] / 180) * nl
            ;(E += co(J) * c[0]), (A += fo(J) * c[0])
          }
        var B = x.alpha() * c[0]
        a.forEach(function (we, $e) {
          var Se = we.get(o)
          B += we.alpha() * c[$e + 1]
          for (var Oe = 0; Oe < m.length; Oe++)
            if (!isNaN(Se[Oe]))
              if ((($[Oe] += c[$e + 1]), o.charAt(Oe) === "h")) {
                var it = (Se[Oe] / 180) * nl
                ;(E += co(it) * c[$e + 1]), (A += fo(it) * c[$e + 1])
              } else m[Oe] += Se[Oe] * c[$e + 1]
        })
        for (var re = 0; re < m.length; re++)
          if (o.charAt(re) === "h") {
            for (var te = (f0(A / $[re], E / $[re]) / nl) * 180; te < 0; )
              te += 360
            for (; te >= 360; ) te -= 360
            m[re] = te
          } else m[re] = m[re] / $[re]
        return (B /= p), new Qs(m, o).alpha(B > 0.99999 ? 1 : B, !0)
      },
      h0 = function (a, o) {
        for (var c = a.length, p = [0, 0, 0, 0], w = 0; w < a.length; w++) {
          var x = a[w],
            m = o[w] / c,
            $ = x._rgb
          ;(p[0] += el($[0], 2) * m),
            (p[1] += el($[1], 2) * m),
            (p[2] += el($[2], 2) * m),
            (p[3] += $[3] * m)
        }
        return (
          (p[0] = tl(p[0])),
          (p[1] = tl(p[1])),
          (p[2] = tl(p[2])),
          p[3] > 0.9999999 && (p[3] = 1),
          new Qs(c0(p))
        )
      },
      Ft = pe,
      Jn = _.type,
      p0 = Math.pow,
      rl = function (a) {
        var o = "rgb",
          c = Ft("#ccc"),
          p = 0,
          w = [0, 1],
          x = [],
          m = [0, 0],
          $ = !1,
          E = [],
          A = !1,
          j = 0,
          J = 1,
          B = !1,
          re = {},
          te = !0,
          we = 1,
          $e = function (H) {
            if (
              ((H = H || ["#fff", "#000"]),
              H &&
                Jn(H) === "string" &&
                Ft.brewer &&
                Ft.brewer[H.toLowerCase()] &&
                (H = Ft.brewer[H.toLowerCase()]),
              Jn(H) === "array")
            ) {
              H.length === 1 && (H = [H[0], H[0]]), (H = H.slice(0))
              for (var fe = 0; fe < H.length; fe++) H[fe] = Ft(H[fe])
              x.length = 0
              for (var ke = 0; ke < H.length; ke++) x.push(ke / (H.length - 1))
            }
            return $t(), (E = H)
          },
          Se = function (H) {
            if ($ != null) {
              for (var fe = $.length - 1, ke = 0; ke < fe && H >= $[ke]; ) ke++
              return ke - 1
            }
            return 0
          },
          Oe = function (H) {
            return H
          },
          it = function (H) {
            return H
          },
          lt = function (H, fe) {
            var ke, xe
            if ((fe == null && (fe = !1), isNaN(H) || H === null)) return c
            if (fe) xe = H
            else if ($ && $.length > 2) {
              var ut = Se(H)
              xe = ut / ($.length - 2)
            } else J !== j ? (xe = (H - j) / (J - j)) : (xe = 1)
            ;(xe = it(xe)),
              fe || (xe = Oe(xe)),
              we !== 1 && (xe = p0(xe, we)),
              (xe = m[0] + xe * (1 - m[0] - m[1])),
              (xe = Math.min(1, Math.max(0, xe)))
            var He = Math.floor(xe * 1e4)
            if (te && re[He]) ke = re[He]
            else {
              if (Jn(E) === "array")
                for (var Pe = 0; Pe < x.length; Pe++) {
                  var Te = x[Pe]
                  if (xe <= Te) {
                    ke = E[Pe]
                    break
                  }
                  if (xe >= Te && Pe === x.length - 1) {
                    ke = E[Pe]
                    break
                  }
                  if (xe > Te && xe < x[Pe + 1]) {
                    ;(xe = (xe - Te) / (x[Pe + 1] - Te)),
                      (ke = Ft.interpolate(E[Pe], E[Pe + 1], xe, o))
                    break
                  }
                }
              else Jn(E) === "function" && (ke = E(xe))
              te && (re[He] = ke)
            }
            return ke
          },
          $t = function () {
            return (re = {})
          }
        $e(a)
        var Ce = function (H) {
          var fe = Ft(lt(H))
          return A && fe[A] ? fe[A]() : fe
        }
        return (
          (Ce.classes = function (H) {
            if (H != null) {
              if (Jn(H) === "array") ($ = H), (w = [H[0], H[H.length - 1]])
              else {
                var fe = Ft.analyze(w)
                H === 0 ? ($ = [fe.min, fe.max]) : ($ = Ft.limits(fe, "e", H))
              }
              return Ce
            }
            return $
          }),
          (Ce.domain = function (H) {
            if (!arguments.length) return w
            ;(j = H[0]), (J = H[H.length - 1]), (x = [])
            var fe = E.length
            if (H.length === fe && j !== J)
              for (var ke = 0, xe = Array.from(H); ke < xe.length; ke += 1) {
                var ut = xe[ke]
                x.push((ut - j) / (J - j))
              }
            else {
              for (var He = 0; He < fe; He++) x.push(He / (fe - 1))
              if (H.length > 2) {
                var Pe = H.map(function (Ne, je) {
                    return je / (H.length - 1)
                  }),
                  Te = H.map(function (Ne) {
                    return (Ne - j) / (J - j)
                  })
                Te.every(function (Ne, je) {
                  return Pe[je] === Ne
                }) ||
                  (it = function (Ne) {
                    if (Ne <= 0 || Ne >= 1) return Ne
                    for (var je = 0; Ne >= Te[je + 1]; ) je++
                    var Bt = (Ne - Te[je]) / (Te[je + 1] - Te[je]),
                      vn = Pe[je] + Bt * (Pe[je + 1] - Pe[je])
                    return vn
                  })
              }
            }
            return (w = [j, J]), Ce
          }),
          (Ce.mode = function (H) {
            return arguments.length ? ((o = H), $t(), Ce) : o
          }),
          (Ce.range = function (H, fe) {
            return $e(H), Ce
          }),
          (Ce.out = function (H) {
            return (A = H), Ce
          }),
          (Ce.spread = function (H) {
            return arguments.length ? ((p = H), Ce) : p
          }),
          (Ce.correctLightness = function (H) {
            return (
              H == null && (H = !0),
              (B = H),
              $t(),
              B
                ? (Oe = function (fe) {
                    for (
                      var ke = lt(0, !0).lab()[0],
                        xe = lt(1, !0).lab()[0],
                        ut = ke > xe,
                        He = lt(fe, !0).lab()[0],
                        Pe = ke + (xe - ke) * fe,
                        Te = He - Pe,
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
                          (He = lt(fe, !0).lab()[0]),
                          (Te = He - Pe)
                        )
                      })()
                    return fe
                  })
                : (Oe = function (fe) {
                    return fe
                  }),
              Ce
            )
          }),
          (Ce.padding = function (H) {
            return H != null
              ? (Jn(H) === "number" && (H = [H, H]), (m = H), Ce)
              : m
          }),
          (Ce.colors = function (H, fe) {
            arguments.length < 2 && (fe = "hex")
            var ke = []
            if (arguments.length === 0) ke = E.slice(0)
            else if (H === 1) ke = [Ce(0.5)]
            else if (H > 1) {
              var xe = w[0],
                ut = w[1] - xe
              ke = v0(0, H, !1).map(function (je) {
                return Ce(xe + (je / (H - 1)) * ut)
              })
            } else {
              a = []
              var He = []
              if ($ && $.length > 2)
                for (
                  var Pe = 1, Te = $.length, Ne = 1 <= Te;
                  Ne ? Pe < Te : Pe > Te;
                  Ne ? Pe++ : Pe--
                )
                  He.push(($[Pe - 1] + $[Pe]) * 0.5)
              else He = w
              ke = He.map(function (je) {
                return Ce(je)
              })
            }
            return (
              Ft[fe] &&
                (ke = ke.map(function (je) {
                  return je[fe]()
                })),
              ke
            )
          }),
          (Ce.cache = function (H) {
            return H != null ? ((te = H), Ce) : te
          }),
          (Ce.gamma = function (H) {
            return H != null ? ((we = H), Ce) : we
          }),
          (Ce.nodata = function (H) {
            return H != null ? ((c = Ft(H)), Ce) : c
          }),
          Ce
        )
      }
    function v0(a, o, c) {
      for (
        var p = [], w = a < o, x = c ? (w ? o + 1 : o - 1) : o, m = a;
        w ? m < x : m > x;
        w ? m++ : m--
      )
        p.push(m)
      return p
    }
    var _r = I,
      g0 = rl,
      b0 = function (a) {
        for (var o = [1, 1], c = 1; c < a; c++) {
          for (var p = [1], w = 1; w <= o.length; w++)
            p[w] = (o[w] || 0) + o[w - 1]
          o = p
        }
        return o
      },
      m0 = function (a) {
        var o, c, p, w, x, m, $
        if (
          ((a = a.map(function (B) {
            return new _r(B)
          })),
          a.length === 2)
        )
          (o = a.map(function (B) {
            return B.lab()
          })),
            (x = o[0]),
            (m = o[1]),
            (w = function (B) {
              var re = [0, 1, 2].map(function (te) {
                return x[te] + B * (m[te] - x[te])
              })
              return new _r(re, "lab")
            })
        else if (a.length === 3)
          (c = a.map(function (B) {
            return B.lab()
          })),
            (x = c[0]),
            (m = c[1]),
            ($ = c[2]),
            (w = function (B) {
              var re = [0, 1, 2].map(function (te) {
                return (
                  (1 - B) * (1 - B) * x[te] +
                  2 * (1 - B) * B * m[te] +
                  B * B * $[te]
                )
              })
              return new _r(re, "lab")
            })
        else if (a.length === 4) {
          var E
          ;(p = a.map(function (B) {
            return B.lab()
          })),
            (x = p[0]),
            (m = p[1]),
            ($ = p[2]),
            (E = p[3]),
            (w = function (B) {
              var re = [0, 1, 2].map(function (te) {
                return (
                  (1 - B) * (1 - B) * (1 - B) * x[te] +
                  3 * (1 - B) * (1 - B) * B * m[te] +
                  3 * (1 - B) * B * B * $[te] +
                  B * B * B * E[te]
                )
              })
              return new _r(re, "lab")
            })
        } else if (a.length >= 5) {
          var A, j, J
          ;(A = a.map(function (B) {
            return B.lab()
          })),
            (J = a.length - 1),
            (j = b0(J)),
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
              return new _r(te, "lab")
            })
        } else
          throw new RangeError(
            "No point in running bezier with only one color.",
          )
        return w
      },
      y0 = function (a) {
        var o = m0(a)
        return (
          (o.scale = function () {
            return g0(o)
          }),
          o
        )
      },
      sl = pe,
      Lt = function (a, o, c) {
        if (!Lt[c]) throw new Error("unknown blend mode " + c)
        return Lt[c](a, o)
      },
      hn = function (a) {
        return function (o, c) {
          var p = sl(c).rgb(),
            w = sl(o).rgb()
          return sl.rgb(a(p, w))
        }
      },
      pn = function (a) {
        return function (o, c) {
          var p = []
          return (
            (p[0] = a(o[0], c[0])),
            (p[1] = a(o[1], c[1])),
            (p[2] = a(o[2], c[2])),
            p
          )
        }
      },
      w0 = function (a) {
        return a
      },
      x0 = function (a, o) {
        return (a * o) / 255
      },
      _0 = function (a, o) {
        return a > o ? o : a
      },
      k0 = function (a, o) {
        return a > o ? a : o
      },
      $0 = function (a, o) {
        return 255 * (1 - (1 - a / 255) * (1 - o / 255))
      },
      E0 = function (a, o) {
        return o < 128
          ? (2 * a * o) / 255
          : 255 * (1 - 2 * (1 - a / 255) * (1 - o / 255))
      },
      C0 = function (a, o) {
        return 255 * (1 - (1 - o / 255) / (a / 255))
      },
      S0 = function (a, o) {
        return a === 255
          ? 255
          : ((a = (255 * (o / 255)) / (1 - a / 255)), a > 255 ? 255 : a)
      }
    ;(Lt.normal = hn(pn(w0))),
      (Lt.multiply = hn(pn(x0))),
      (Lt.screen = hn(pn($0))),
      (Lt.overlay = hn(pn(E0))),
      (Lt.darken = hn(pn(_0))),
      (Lt.lighten = hn(pn(k0))),
      (Lt.dodge = hn(pn(S0))),
      (Lt.burn = hn(pn(C0)))
    for (
      var P0 = Lt,
        ll = _.type,
        M0 = _.clip_rgb,
        A0 = _.TWOPI,
        I0 = Math.pow,
        O0 = Math.sin,
        R0 = Math.cos,
        ho = pe,
        T0 = function (a, o, c, p, w) {
          a === void 0 && (a = 300),
            o === void 0 && (o = -1.5),
            c === void 0 && (c = 1),
            p === void 0 && (p = 1),
            w === void 0 && (w = [0, 1])
          var x = 0,
            m
          ll(w) === "array" ? (m = w[1] - w[0]) : ((m = 0), (w = [w, w]))
          var $ = function (E) {
            var A = A0 * ((a + 120) / 360 + o * E),
              j = I0(w[0] + m * E, p),
              J = x !== 0 ? c[0] + E * x : c,
              B = (J * j * (1 - j)) / 2,
              re = R0(A),
              te = O0(A),
              we = j + B * (-0.14861 * re + 1.78277 * te),
              $e = j + B * (-0.29227 * re - 0.90649 * te),
              Se = j + B * (1.97294 * re)
            return ho(M0([we * 255, $e * 255, Se * 255, 1]))
          }
          return (
            ($.start = function (E) {
              return E == null ? a : ((a = E), $)
            }),
            ($.rotations = function (E) {
              return E == null ? o : ((o = E), $)
            }),
            ($.gamma = function (E) {
              return E == null ? p : ((p = E), $)
            }),
            ($.hue = function (E) {
              return E == null
                ? c
                : ((c = E),
                  ll(c) === "array"
                    ? ((x = c[1] - c[0]), x === 0 && (c = c[1]))
                    : (x = 0),
                  $)
            }),
            ($.lightness = function (E) {
              return E == null
                ? w
                : (ll(E) === "array"
                    ? ((w = E), (m = E[1] - E[0]))
                    : ((w = [E, E]), (m = 0)),
                  $)
            }),
            ($.scale = function () {
              return ho.scale($)
            }),
            $.hue(c),
            $
          )
        },
        N0 = I,
        j0 = "0123456789abcdef",
        F0 = Math.floor,
        L0 = Math.random,
        B0 = function () {
          for (var a = "#", o = 0; o < 6; o++) a += j0.charAt(F0(L0() * 16))
          return new N0(a, "hex")
        },
        al = h,
        po = Math.log,
        H0 = Math.pow,
        z0 = Math.floor,
        D0 = Math.abs,
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
            al(a) === "object" && (a = Object.values(a)),
            a.forEach(function (p) {
              o && al(p) === "object" && (p = p[o]),
                p != null &&
                  !isNaN(p) &&
                  (c.values.push(p),
                  (c.sum += p),
                  p < c.min && (c.min = p),
                  p > c.max && (c.max = p),
                  (c.count += 1))
            }),
            (c.domain = [c.min, c.max]),
            (c.limits = function (p, w) {
              return go(c, p, w)
            }),
            c
          )
        },
        go = function (a, o, c) {
          o === void 0 && (o = "equal"),
            c === void 0 && (c = 7),
            al(a) == "array" && (a = vo(a))
          var p = a.min,
            w = a.max,
            x = a.values.sort(function (il, ul) {
              return il - ul
            })
          if (c === 1) return [p, w]
          var m = []
          if (
            (o.substr(0, 1) === "c" && (m.push(p), m.push(w)),
            o.substr(0, 1) === "e")
          ) {
            m.push(p)
            for (var $ = 1; $ < c; $++) m.push(p + ($ / c) * (w - p))
            m.push(w)
          } else if (o.substr(0, 1) === "l") {
            if (p <= 0)
              throw new Error(
                "Logarithmic scales are only possible for values > 0",
              )
            var E = Math.LOG10E * po(p),
              A = Math.LOG10E * po(w)
            m.push(p)
            for (var j = 1; j < c; j++) m.push(H0(10, E + (j / c) * (A - E)))
            m.push(w)
          } else if (o.substr(0, 1) === "q") {
            m.push(p)
            for (var J = 1; J < c; J++) {
              var B = ((x.length - 1) * J) / c,
                re = z0(B)
              if (re === B) m.push(x[re])
              else {
                var te = B - re
                m.push(x[re] * (1 - te) + x[re + 1] * te)
              }
            }
            m.push(w)
          } else if (o.substr(0, 1) === "k") {
            var we,
              $e = x.length,
              Se = new Array($e),
              Oe = new Array(c),
              it = !0,
              lt = 0,
              $t = null
            ;($t = []), $t.push(p)
            for (var Ce = 1; Ce < c; Ce++) $t.push(p + (Ce / c) * (w - p))
            for ($t.push(w); it; ) {
              for (var H = 0; H < c; H++) Oe[H] = 0
              for (var fe = 0; fe < $e; fe++)
                for (
                  var ke = x[fe], xe = Number.MAX_VALUE, ut = void 0, He = 0;
                  He < c;
                  He++
                ) {
                  var Pe = D0($t[He] - ke)
                  Pe < xe && ((xe = Pe), (ut = He)), Oe[ut]++, (Se[fe] = ut)
                }
              for (var Te = new Array(c), Ne = 0; Ne < c; Ne++) Te[Ne] = null
              for (var je = 0; je < $e; je++)
                (we = Se[je]),
                  Te[we] === null ? (Te[we] = x[je]) : (Te[we] += x[je])
              for (var Bt = 0; Bt < c; Bt++) Te[Bt] *= 1 / Oe[Bt]
              it = !1
              for (var vn = 0; vn < c; vn++)
                if (Te[vn] !== $t[vn]) {
                  it = !0
                  break
                }
              ;($t = Te), lt++, lt > 200 && (it = !1)
            }
            for (var gn = {}, Zn = 0; Zn < c; Zn++) gn[Zn] = []
            for (var Qn = 0; Qn < $e; Qn++) (we = Se[Qn]), gn[we].push(x[Qn])
            for (var Qt = [], An = 0; An < c; An++)
              Qt.push(gn[An][0]), Qt.push(gn[An][gn[An].length - 1])
            ;(Qt = Qt.sort(function (il, ul) {
              return il - ul
            })),
              m.push(Qt[0])
            for (var kr = 1; kr < Qt.length; kr += 2) {
              var In = Qt[kr]
              !isNaN(In) && m.indexOf(In) === -1 && m.push(In)
            }
          }
          return m
        },
        bo = { analyze: vo, limits: go },
        mo = I,
        V0 = function (a, o) {
          ;(a = new mo(a)), (o = new mo(o))
          var c = a.luminance(),
            p = o.luminance()
          return c > p ? (c + 0.05) / (p + 0.05) : (p + 0.05) / (c + 0.05)
        },
        yo = I,
        Zt = Math.sqrt,
        Ye = Math.pow,
        q0 = Math.min,
        W0 = Math.max,
        wo = Math.atan2,
        xo = Math.abs,
        Xr = Math.cos,
        _o = Math.sin,
        G0 = Math.exp,
        ko = Math.PI,
        U0 = function (a, o, c, p, w) {
          c === void 0 && (c = 1),
            p === void 0 && (p = 1),
            w === void 0 && (w = 1)
          var x = function (In) {
              return (360 * In) / (2 * ko)
            },
            m = function (In) {
              return (2 * ko * In) / 360
            }
          ;(a = new yo(a)), (o = new yo(o))
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
            Ce = Zt(Ye(lt, 2) + Ye(j, 2)),
            H = Zt(Ye($t, 2) + Ye(te, 2)),
            fe = (Ce + H) / 2,
            ke = x(wo(j, lt)),
            xe = x(wo(te, $t)),
            ut = ke >= 0 ? ke : ke + 360,
            He = xe >= 0 ? xe : xe + 360,
            Pe = xo(ut - He) > 180 ? (ut + He + 360) / 2 : (ut + He) / 2,
            Te =
              1 -
              0.17 * Xr(m(Pe - 30)) +
              0.24 * Xr(m(2 * Pe)) +
              0.32 * Xr(m(3 * Pe + 6)) -
              0.2 * Xr(m(4 * Pe - 63)),
            Ne = He - ut
          ;(Ne = xo(Ne) <= 180 ? Ne : He <= ut ? Ne + 360 : Ne - 360),
            (Ne = 2 * Zt(Ce * H) * _o(m(Ne) / 2))
          var je = B - E,
            Bt = H - Ce,
            vn = 1 + (0.015 * Ye(we - 50, 2)) / Zt(20 + Ye(we - 50, 2)),
            gn = 1 + 0.045 * fe,
            Zn = 1 + 0.015 * fe * Te,
            Qn = 30 * G0(-Ye((Pe - 275) / 25, 2)),
            Qt = 2 * Zt(Ye(fe, 7) / (Ye(fe, 7) + Ye(25, 7))),
            An = -Qt * _o(2 * m(Qn)),
            kr = Zt(
              Ye(je / (c * vn), 2) +
                Ye(Bt / (p * gn), 2) +
                Ye(Ne / (w * Zn), 2) +
                An * (Bt / (p * gn)) * (Ne / (w * Zn)),
            )
          return W0(0, q0(100, kr))
        },
        $o = I,
        K0 = function (a, o, c) {
          c === void 0 && (c = "lab"), (a = new $o(a)), (o = new $o(o))
          var p = a.get(c),
            w = o.get(c),
            x = 0
          for (var m in p) {
            var $ = (p[m] || 0) - (w[m] || 0)
            x += $ * $
          }
          return Math.sqrt(x)
        },
        Y0 = I,
        X0 = function () {
          for (var a = [], o = arguments.length; o--; ) a[o] = arguments[o]
          try {
            return (
              new (Function.prototype.bind.apply(Y0, [null].concat(a)))(), !0
            )
          } catch {
            return !1
          }
        },
        Eo = pe,
        Co = rl,
        J0 = {
          cool: function () {
            return Co([Eo.hsl(180, 1, 0.9), Eo.hsl(250, 0.7, 0.4)])
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
        ol = 0,
        So = Object.keys(Jr);
      ol < So.length;
      ol += 1
    ) {
      var Po = So[ol]
      Jr[Po.toLowerCase()] = Jr[Po]
    }
    var Z0 = Jr,
      st = pe
    ;(st.average = d0),
      (st.bezier = y0),
      (st.blend = P0),
      (st.cubehelix = T0),
      (st.mix = st.interpolate = ro),
      (st.random = B0),
      (st.scale = rl),
      (st.analyze = bo.analyze),
      (st.contrast = V0),
      (st.deltaE = U0),
      (st.distance = K0),
      (st.limits = bo.limits),
      (st.valid = X0),
      (st.scales = J0),
      (st.colors = Ba),
      (st.brewer = Z0)
    var Q0 = st
    return Q0
  })
})(qu)
var Uv = qu.exports
const Je = Gv(Uv),
  Kv = {
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
  Yv = {
    __name: "PanelDevelopment",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Xv = { class: "prose text-center" },
  Jv = g("br", null, null, -1),
  Zv = { href: "/pricing" },
  Qv = { id: "cta" },
  da = {
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
                let S = b.getElementsByTagName("input")
                for (let C = 0; C < S.length; C++) S[C].style.display = "none"
                let F = b.getElementsByTagName("textarea")[0]
                F.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, l) => (
        ie(),
        Ee(
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
            g("div", Xv, [
              g(
                "h4",
                { class: M(["text-2xl", t(e.brightness)]) },
                [
                  _e(" Piqued your interest?"),
                  Jv,
                  _e(" Check out the (incredibly simple) service pricing: "),
                ],
                2,
              ),
              g("a", Zv, [
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
              g("form", Qv, [
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
  Vn = (e) => (na("data-v-8a92440e"), (e = e()), ra(), e),
  eg = {
    class: "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center",
    id: "panelSpeed",
  },
  tg = { class: "flex flex-col items-center justify-center w-full" },
  ng = { viewBox: "0 0 36 36", class: "chart" },
  rg = Vn(() =>
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
  sg = ["stroke", "stroke-dasharray", "stroke-dashoffset"],
  lg = Vn(() =>
    g(
      "p",
      null,
      " Page speed and network use are hugely important to your users. If your speed is bad, your users are gone. ",
      -1,
    ),
  ),
  ag = Vn(() =>
    g(
      "p",
      null,
      [
        _e(
          " I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using a whopping ",
        ),
        g("b", null, "315 KB"),
        _e(". That's half of the classic SNES game "),
        g("em", null, "The Legend of Zelda: A Link to The Past"),
        _e(", or 4% of the bandwidth it takes just to open Instagram. "),
      ],
      -1,
    ),
  ),
  og = Vn(() => g("p", null, "You want fast? Let's make it happen.", -1)),
  ig = { id: "speedTable" },
  ug = Vn(() =>
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
  cg = { class: "flex" },
  fg = { class: "flex" },
  dg = Vn(() =>
    g(
      "tbody",
      null,
      [
        g("tr", null, [
          g("td", null, "Huge, resource-heavy images"),
          g("td", null, [
            _e(" Optimize your images. "),
            g("b", null, "A lot. "),
            _e(
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
  hg = Vn(() => g("div", { class: "h-6" }, null, -1)),
  pg = {
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
  vg = Object.assign(pg, {
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
        i = ue(() => {
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
          for (let b = 1; b < h.length; b++)
            b % 2 == 0
              ? (h[b].style.backgroundColor = d.brighten(0))
              : (h[b].style.backgroundColor = d.brighten(0.2))
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
          ie(),
          Ee("div", eg, [
            g("div", tg, [
              g(
                "div",
                { id: "perfChart", class: M(r(e.brightness)) },
                [
                  (ie(),
                  Ee("svg", ng, [
                    rg,
                    g(
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
                      sg,
                    ),
                  ])),
                  g(
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
              g(
                "p",
                {
                  class: M(["text-sm italic opacity-50 mt-3", l(e.brightness)]),
                },
                [
                  _e(
                    " Desktop performance score (using Google Page Speed) for the ",
                  ),
                  g(
                    "a",
                    { href: "", class: M(n(e.brightness)) },
                    "OKC South Stake Project",
                    2,
                  ),
                ],
                2,
              ),
              g(
                "div",
                {
                  class: M([
                    "prose md:w-10/12 sm:w-12/12 mt-8",
                    l(e.brightness),
                  ]),
                  style: { "max-width": "84ch !important" },
                },
                [
                  g(
                    "h2",
                    { class: M(["text-2xl m-0", l(e.brightness)]) },
                    " I can make your website ",
                    2,
                  ),
                  g(
                    "h2",
                    { class: M(["text-5xl", l(e.brightness)]) },
                    " faster, smaller, and lighter. ",
                    2,
                  ),
                  lg,
                  ag,
                  og,
                  g("h3", { class: M(l(e.brightness)) }, "How I help", 2),
                  g("table", ig, [
                    ug,
                    g("thead", null, [
                      g("tr", null, [
                        g("th", null, [
                          g("div", cg, [
                            g(
                              "h4",
                              { class: M([l(e.brightness), "text-lg m-0"]) },
                              [
                                _e(" Problem "),
                                ae(
                                  de(dv),
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
                          g("div", fg, [
                            g(
                              "h4",
                              { class: M([l(e.brightness), "text-lg m-0"]) },
                              [
                                _e(" What I can do "),
                                ae(
                                  de(uv),
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
                    dg,
                  ]),
                ],
                2,
              ),
              hg,
              ae(da, { brightness: e.brightness }, null, 8, ["brightness"]),
            ]),
          ])
        )
      )
    },
  }),
  gg = gr(vg, [["__scopeId", "data-v-8a92440e"]]),
  bg = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-wrap",
  },
  mg = { class: "lg:w-6/12 sm:w-12/12" },
  yg = g(
    "p",
    null,
    " The Internet is a (potentially) dangerous place- not just for users, but for websites as well. Botnets, DDoS attacks, ransomware, and other problems are common enough at this point that every site is vulnerable. ",
    -1,
  ),
  wg = g("p", null, [g("b", null, " Don't worry, I can help!")], -1),
  xg = g(
    "p",
    null,
    "My web security specialities include (but aren't limited to):",
    -1,
  ),
  _g = { class: "flex items-center w-full" },
  kg = g(
    "p",
    null,
    [
      _e(
        " I have nearly a decade of practice securing WordPress sites against attacks. Plugging all the potential holes (and there's a lot!) in a WordPress site takes a ",
      ),
      g("em", null, "very"),
      _e(
        " long time. Save yourself a headache and let someone else (me, perhaps?) deal with that hassle. ",
      ),
    ],
    -1,
  ),
  $g = g("div", { class: "h-3" }, null, -1),
  Eg = { class: "flex items-center w-full" },
  Cg = g(
    "p",
    null,
    [
      _e(
        " The bots are out there... and they're coming for your site. When? Why? Who is behind them? Who knows! What I ",
      ),
      g("em", null, "do"),
      _e(
        " know is how to keep you safe. I can help you make sure your site stays up and your data stays safe, no matter what kind of nefarious botnets find it. ",
      ),
    ],
    -1,
  ),
  Sg = g("div", { class: "h-3" }, null, -1),
  Pg = { class: "flex items-center w-full" },
  Mg = g(
    "p",
    null,
    " If your site has any PHP or JavaScript running (it does), there's a good chance coding errors, outdated libraries, or other problems are imperiling your site. Trust me, I've seen it all- from passwords saved in plain text files to packages decades out of date with 384 critical-risk vulnerabilities... so, whatever nastiness is lurking beneath the surface, I can fix it. ",
    -1,
  ),
  Ag = { class: "flex flex-col gap-4 lg:w-4/12 md:w-12/12" },
  Ig = { class: "prose text-center" },
  Og = g("div", { class: "h-3" }, null, -1),
  Rg = g("div", { class: "h-3" }, null, -1),
  Tg = {
    __name: "PanelSecurity",
    props: { brightness: Number },
    setup(e) {
      be(9274)
      const t = be(4709),
        n = be(new Date("2023-10-01")),
        r = be(new Date()),
        s = ue(
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
        ie(),
        Ee("div", bg, [
          g("div", mg, [
            g(
              "h2",
              { class: M(["text-left text-5xl", u(e.brightness)]) },
              " I can secure your website. ",
              2,
            ),
            g(
              "p",
              {
                class: M([
                  "text-left text-sm italic opacity-50 mt-3",
                  u(e.brightness),
                ]),
              },
              [
                _e(" Website already secure? "),
                g("b", null, [
                  g(
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
            g(
              "hr",
              { class: M(["mb-5 mt-1 w-6/12 opacity-25", u(e.brightness)]) },
              null,
              2,
            ),
            g(
              "div",
              { class: M(["prose", u(e.brightness)]) },
              [
                yg,
                wg,
                xg,
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
                    g("div", _g, [
                      ae(
                        de(ds),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " WordPress Protection ",
                        2,
                      ),
                    ]),
                    kg,
                  ],
                  2,
                ),
                $g,
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
                    g("div", Eg, [
                      ae(
                        de(ds),
                        { size: "2rem", class: M(["mr-2", i(e.brightness)]) },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " DDoS/Malicious Bots Shielding ",
                        2,
                      ),
                    ]),
                    Cg,
                  ],
                  2,
                ),
                Sg,
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
                    g("div", Pg, [
                      ae(
                        de(ds),
                        { class: M(["mr-2", i(e.brightness)]), size: "2rem" },
                        null,
                        8,
                        ["class"],
                      ),
                      g(
                        "h4",
                        { class: M(["font-bold m-0", u(e.brightness)]) },
                        " JavaScript/PHP Vulnerabilities ",
                        2,
                      ),
                    ]),
                    Mg,
                  ],
                  2,
                ),
              ],
              2,
            ),
          ]),
          g("div", Ag, [
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
                g("div", Ig, [
                  g(
                    "h3",
                    {
                      class: M([
                        "text-5xl font-monospace mt-6",
                        i(e.brightness),
                      ]),
                    },
                    It(l(s.value)) + "+ ",
                    3,
                  ),
                  g(
                    "h3",
                    { class: M(["text-xl", u(e.brightness)]) },
                    [
                      _e(" attacks blocked on "),
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
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    " (Over 4500 a month!) ",
                    2,
                  ),
                  g(
                    "p",
                    {
                      class: M(["italic opacity-50 text-sm", u(e.brightness)]),
                    },
                    [
                      g(
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
            Og,
            g("hr", { class: M(["opacity-50", u(e.brightness)]) }, null, 2),
            Rg,
            ae(da, { brightness: e.brightness }, null, 8, ["brightness"]),
          ]),
        ])
      )
    },
  },
  Ng = {
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
  jg = {
    class:
      "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col",
  },
  Fg = {
    class: "prose md:w-10/12 sm:w-12/12 mt-8",
    style: { "max-width": "84ch !important" },
  },
  Lg = { class: "flex w-full" },
  Bg = { class: "flex w-full pt-4 gap-2" },
  Hg = { class: "w-6/12" },
  zg = { class: "w-6/12" },
  Dg = { class: "w-full flex" },
  Vg = { class: "w-6/12" },
  qg = { class: "w-6/12 pb-3" },
  Wg = g("em", null, "huge", -1),
  Gg = g("div", { class: "h-6" }, null, -1),
  Ug = {
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
        r = be(!1),
        s = ue(() =>
          r.value
            ? "bg-emerald-500 hover:bg-emerald-600"
            : "bg-gray-500 hover:bg-gray-600",
        ),
        l = ue(() =>
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
            b
          h == 5
            ? (b = Je("#e2e8f0"))
            : h == 4
              ? (b = Je("#cbd5e1"))
              : h == 3
                ? (b = Je("#475569"))
                : h == 2
                  ? (b = Je("#1e293b"))
                  : h == 1 && (b = Je("#0f172a"))
          for (let k = 1; k < d.length; k++)
            k % 2 == 0
              ? (d[k].style.backgroundColor = b.brighten(0))
              : (d[k].style.backgroundColor = b.brighten(0.2))
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
          ie(),
          Ee("div", jg, [
            g("div", Fg, [
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
                  _e(" What are the "),
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
              g("div", Lg, [
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
                    onClick: f,
                  },
                  [
                    r.value ? (ie(), Xe(de(Vu), { key: 0 })) : tt("", !0),
                    r.value ? tt("", !0) : (ie(), Xe(de(nv), { key: 1 })),
                    _e(" Toggle red/green color blind/screen reader mode "),
                  ],
                  2,
                ),
              ]),
              g("div", Bg, [
                g("div", Hg, [
                  g(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", s.value]) },
                    [r.value ? (ie(), Xe(de(hi), { key: 0 })) : tt("", !0)],
                    2,
                  ),
                ]),
                g("div", zg, [
                  g(
                    "button",
                    { class: M(["rounded px-5 py-2 w-full", l.value]) },
                    [r.value ? (ie(), Xe(de(Bl), { key: 0 })) : tt("", !0)],
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
              g("div", Dg, [
                g("div", Vg, [
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
                    [_e(" Submit "), ae(de(hi))],
                    2,
                  ),
                ]),
                g("div", qg, [
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
                    [_e(" Cancel "), ae(de(Bl))],
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
                  _e(" Changes like these may seem small, but they make a "),
                  Wg,
                  _e(
                    " difference for the usability of your site. Let me help you be in the 2%. ",
                  ),
                ],
                2,
              ),
            ]),
            Gg,
            ae(da, { brightness: e.brightness }, null, 8, ["brightness"]),
          ])
        )
      )
    },
  },
  Kg = ["onMouseover"],
  Yg = {
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
        ie(),
        Xe(de(K1), null, {
          default: ct(() => [
            ae(
              de(Y1),
              { class: "flex justify-center md:gap-5 sm:gap-1 py-5 flex-wrap" },
              {
                default: ct(() => [
                  (ie(!0),
                  Ee(
                    We,
                    null,
                    ir(
                      t.value,
                      (u) => (
                        ie(),
                        Xe(
                          de(X1),
                          {
                            key: u.id,
                            class:
                              "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none",
                            style: { transition: "all 0.2s" },
                          },
                          {
                            default: ct(({ selected: f }) => [
                              g(
                                "div",
                                {
                                  class: M([
                                    "flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3",
                                    r(e.brightness, f, de(n), u.id),
                                  ]),
                                  style: { transition: "all 0.2s" },
                                  onMouseover: (h) =>
                                    gt(n) ? (n.value = u.id) : (n = u.id),
                                  onMouseleave:
                                    i[0] ||
                                    (i[0] = (h) =>
                                      gt(n) ? (n.value = null) : (n = null)),
                                },
                                [
                                  u.id == 0
                                    ? (ie(),
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
                                    ? (ie(),
                                      Xe(
                                        de(sv),
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
                                    ? (ie(),
                                      Xe(
                                        de(cv),
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
                                    ? (ie(),
                                      Xe(
                                        de(iv),
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
                                    ? (ie(),
                                      Xe(
                                        de(rv),
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
                                    ? (ie(),
                                      Xe(
                                        de(Vu),
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
                                  g(
                                    "p",
                                    {
                                      class: M([
                                        "font-semibold cursor-pointer",
                                        s(e.brightness, f),
                                      ]),
                                      style: { transition: "all 0.2s" },
                                    },
                                    It(u.title),
                                    3,
                                  ),
                                ],
                                42,
                                Kg,
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
              de(J1),
              { class: "flex justify-center gap-5 w-full" },
              {
                default: ct(() => [
                  ae(
                    de(er),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(gg, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(er),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(Tg, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(er),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(Ng, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(er),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(Yv, { brightness: e.brightness }, null, 8, [
                          "brightness",
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  ae(
                    de(er),
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
                    de(er),
                    { class: "flex justify-center gap-5 w-full" },
                    {
                      default: ct(() => [
                        ae(Ug, { brightness: e.brightness }, null, 8, [
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
  Xg = { href: "/pricing" },
  Jg = {
    __name: "messageBanner",
    props: { brightness: Number },
    setup(e) {
      const t = be(!1)
      bt(() => {
        const r = () => {
          ;(t.value = window.scrollY > 200),
            window.location.href.includes("pricing") && (t.value = !1)
        }
        window.addEventListener("scroll", r),
          Pn(() => {
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
        ie(),
        Ee(
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
            g("a", Xg, [
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
  mr = (e) => (na("data-v-e20b9d11"), (e = e()), ra(), e),
  Zg = { class: "flex-col" },
  Qg = { class: "prose py-5 flex-col w-full" },
  eb = mr(() => g("br", null, null, -1)),
  tb = mr(() => g("br", null, null, -1)),
  nb = { class: "flex" },
  rb = { class: "w-6/12" },
  sb = ["name", "checked", "onClick"],
  lb = { class: "w-6/12" },
  ab = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  ob = { class: "flex-col gap-4" },
  ib = { class: "flex items-center" },
  ub = ["name", "checked", "onClick"],
  cb = { key: 0 },
  fb = { key: 1 },
  db = { class: "" },
  hb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  pb = { class: "flex-col" },
  vb = { class: "flex justify-between" },
  gb = { key: 0, class: "text-slate-50 opacity-25 line-through pr-2" },
  bb = { class: "gap-4 mt-4", name: "pricing" },
  mb = ["value"],
  yb = ["value"],
  wb = { class: "flex gap-4", id: "leftInputs" },
  xb = { class: "flex gap-4", id: "rightInputs" },
  _b = mr(() => g("br", null, null, -1)),
  kb = mr(() => g("br", null, null, -1)),
  $b = mr(() => g("br", null, null, -1)),
  Eb = mr(() => g("br", null, null, -1)),
  Cb = {
    __name: "servicesCalculator",
    props: { brightness: Number },
    setup(e) {
      const t = async (z) => {
          z.preventDefault()
          const ne = "pricing"
          let Z = document.getElementsByName("name")[0].value,
            yt = document.getElementsByName("email")[0].value,
            ze = document.getElementsByName("website")[0].value,
            ht = document.getElementsByName("notes")[0].value,
            Qe = document.getElementsByName("services")[0].value,
            Wt = document.getElementsByName("total")[0].value,
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
                website: ze,
                notes: ht,
                services: Qe,
                total: Wt,
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
        r = (z) => {
          if (z >= 4) return "text-emerald-500"
          if (z == 3) return "text-orange-200"
          if (z == 2) return "text-orange-500"
          if (z == 1) return "text-orange-400"
        },
        s = (z) => {
          if (z >= 4) return "text-emerald-500"
          if (z == 3) return "text-slate-800"
          if (z == 2) return "text-orange-500"
          if (z == 1) return "text-orange-400"
        },
        l = (z) => {
          if (z >= 4) return "border-emerald-500"
          if (z == 3) return "border-orange-200"
          if (z == 2) return "border-orange-500"
          if (z == 1) return "border-orange-400"
        },
        i = (z) => {
          if (z >= 4) return "text-slate-800"
          if (z == 3) return "text-slate-200"
          if (z == 2) return "text-slate-300"
          if (z == 1) return "text-slate-300"
        },
        u = be({
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
        f = ue(() =>
          u.value.speed.audit.enabled &&
          u.value.speed.optimize.enabled &&
          u.value.speed.caching.enabled &&
          u.value.speed.images.enabled
            ? 2 / 3
            : 3 / 3,
        ),
        h = ue(() =>
          u.value.security.audit.enabled &&
          u.value.security.ddosprotection.enabled &&
          u.value.security.protection.enabled
            ? 5 / 7
            : 3 / 3,
        ),
        d = ue(() =>
          u.value.accessibility.audit.enabled &&
          u.value.accessibility.levelA.enabled &&
          u.value.accessibility.levelAA.enabled
            ? 3 / 4
            : 3 / 3,
        ),
        b = ue(() => 3 / 3),
        k = ue(
          () =>
            Object.values(u.value.speed).reduce(
              (z, ne) => z + (ne.enabled ? ne.price : 0),
              0,
            ) * f.value,
        ),
        S = ue(
          () =>
            Object.values(u.value.security).reduce(
              (z, ne) => z + (ne.enabled ? ne.price : 0),
              0,
            ) * h.value,
        ),
        F = ue(
          () =>
            Object.values(u.value.accessibility).reduce(
              (z, ne) => z + (ne.enabled ? ne.price : 0),
              0,
            ) * d.value,
        ),
        _ = ue(
          () =>
            Object.values(u.value.designOverhaul).reduce(
              (z, ne) => z + (ne.enabled ? ne.price : 0),
              0,
            ) * b.value,
        ),
        C = ue(() => {
          let z = 0
          for (const [ne, Z] of Object.entries(u.value.speed))
            Z.enabled && (z += Z.price)
          return z
        }),
        T = ue(() => {
          let z = 0
          for (const [ne, Z] of Object.entries(u.value.security))
            Z.enabled && (z += Z.price)
          return z
        }),
        W = ue(() => {
          let z = 0
          for (const [ne, Z] of Object.entries(u.value.accessibility))
            Z.enabled && (z += Z.price)
          return z
        }),
        D = ue(() => {
          let z = 0
          for (const [ne, Z] of Object.entries(u.value.designOverhaul))
            Z.enabled && (z += Z.price)
          return z
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
        pe = (z) => {
          z.title == "Speed"
            ? X()
            : z.title == "Security"
              ? K()
              : z.title == "Accessibility"
                ? I()
                : z.title == "Design Overhaul" && he()
        },
        mt = (z) => Object.values(z.services).some((ne) => ne.enabled),
        Ge = be([
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
            discount: b.value,
          },
        ]),
        Ze = (z) => {
          if (z.title === "Speed") return k.value
          if (z.title === "Security") return S.value
          if (z.title === "Accessibility") return F.value
          if (z.title === "Design Overhaul") return _.value
        },
        _t = (z) => {
          if (z.title === "Speed") return C.value
          if (z.title === "Security") return T.value
          if (z.title === "Accessibility") return W.value
          if (z.title === "Design Overhaul") return D.value
        },
        qe = ue(
          () =>
            Ze(Ge.value[0]) +
            Ze(Ge.value[1]) +
            Ze(Ge.value[2]) +
            Ze(Ge.value[3]),
        ),
        Jt = ue(() => {
          let z = []
          for (const [ne, Z] of Object.entries(u.value.speed))
            Z.enabled && z.push(Z.title)
          for (const [ne, Z] of Object.entries(u.value.security))
            Z.enabled && z.push(Z.title)
          for (const [ne, Z] of Object.entries(u.value.accessibility))
            Z.enabled && z.push(Z.title)
          for (const [ne, Z] of Object.entries(u.value.designOverhaul))
            Z.enabled && z.push(Z.title)
          return z
        }),
        qt = (z) => {
          let ne = ""
          return (
            (ne += l(z)),
            z == 5
              ? (ne += " bg-slate-100")
              : z == 4
                ? (ne += " bg-slate-400")
                : z == 3
                  ? (ne += " bg-slate-500")
                  : z == 2
                    ? (ne += " bg-slate-700")
                    : z == 1 && (ne += " bg-slate-800"),
            ne
          )
        }
      return (z, ne) => (
        ie(),
        Ee("div", Zg, [
          g("div", Qg, [
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
                _e(
                  " Faster, simpler, and cheaper than an agency. No need to spend hours on the phone haggling. Pick what you want, I make it happen. That's it!",
                ),
                eb,
                tb,
                _e(
                  " These services are for your existing website- if you're looking for a new site, ",
                ),
                g(
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
          (ie(!0),
          Ee(
            We,
            null,
            ir(
              Ge.value,
              (Z, yt) => (
                ie(),
                Ee(
                  "div",
                  {
                    key: yt,
                    class: M([
                      "md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4",
                      qt(n.brightness),
                    ]),
                  },
                  [
                    g("div", nb, [
                      g("div", rb, [
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
                                name: Z.title,
                                checked: mt(Z),
                                onClick: (ze) => pe(Z),
                                class: M([
                                  "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",
                                  r(e.brightness),
                                ]),
                              },
                              null,
                              10,
                              sb,
                            ),
                            g("h3", null, It(Z.title), 1),
                          ],
                          2,
                        ),
                      ]),
                      g("div", lb, [
                        g(
                          "h3",
                          {
                            class: M([
                              "text-4xl text-bold text-right",
                              r(n.brightness),
                            ]),
                          },
                          [
                            _t(Z) != Math.floor(Ze(Z))
                              ? (ie(), Ee("span", ab, "$" + It(_t(Z)), 1))
                              : tt("", !0),
                            _e("$" + It(Ze(Z)), 1),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                    g(
                      "hr",
                      { class: M(["my-4 w-full", r(n.brightness)]) },
                      null,
                      2,
                    ),
                    g("div", ob, [
                      (ie(!0),
                      Ee(
                        We,
                        null,
                        ir(
                          Z.services,
                          (ze, ht) => (
                            ie(),
                            Ee(
                              "div",
                              {
                                key: ht,
                                class:
                                  "flex w-full items-center justify-between pb-4",
                              },
                              [
                                g("div", ib, [
                                  g(
                                    "input",
                                    {
                                      type: "checkbox",
                                      name: ze.title,
                                      checked: ze.enabled,
                                      onClick: (Qe) =>
                                        (ze.enabled = !ze.enabled),
                                      class: M([
                                        "rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4",
                                        r(e.brightness),
                                      ]),
                                    },
                                    null,
                                    10,
                                    ub,
                                  ),
                                  g(
                                    "p",
                                    { class: M(["", i(n.brightness)]) },
                                    [
                                      ze.title ==
                                      "Detailed speed audit (100% free)"
                                        ? (ie(),
                                          Ee("b", cb, [
                                            g("em", null, It(ze.title), 1),
                                          ]))
                                        : (ie(),
                                          Ee("span", fb, It(ze.title), 1)),
                                    ],
                                    2,
                                  ),
                                ]),
                                g("div", db, [
                                  g(
                                    "h3",
                                    {
                                      class: M([
                                        "text-bold text-right",
                                        r(n.brightness),
                                      ]),
                                    },
                                    [
                                      ze.price !=
                                      Math.floor(ze.price * Z.discount)
                                        ? (ie(),
                                          Ee("span", hb, "$" + It(ze.price), 1))
                                        : tt("", !0),
                                      _e("$" + It(ze.price * Z.discount), 1),
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
          g("hr", { class: M(["my-4 w-full", r(n.brightness)]) }, null, 2),
          g("div", pb, [
            g("div", vb, [
              g(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                " Total ",
                2,
              ),
              g(
                "h3",
                { class: M(["text-4xl text-bold", r(n.brightness)]) },
                [
                  qe.value != Math.floor(qe.value)
                    ? (ie(), Ee("span", gb, "$" + It(qe.value), 1))
                    : tt("", !0),
                  _e("$" + It(qe.value), 1),
                ],
                2,
              ),
            ]),
          ]),
          g("form", bb, [
            g(
              "input",
              { type: "hidden", name: "services", value: Jt.value },
              null,
              8,
              mb,
            ),
            g(
              "input",
              { type: "hidden", name: "total", value: qe.value },
              null,
              8,
              yb,
            ),
            g("div", wb, [
              g(
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
              g(
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
            g("div", xb, [
              g(
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
              g(
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
              _e(
                " I'll get back to you within 48 hours. This form is not a contract, please note that work can't begin until we've connected and signed a contract.",
              ),
              _b,
              kb,
              _e(
                "These are one-time services; for ongoing maintenance, please ",
              ),
              g(
                "a",
                { href: "/contact", class: M(["font-bold", r(e.brightness)]) },
                "shoot me a message",
                2,
              ),
              _e(" and we can get that figured out."),
              $b,
              Eb,
              _e("I look forward to working with you! "),
            ],
            2,
          ),
        ])
      )
    },
  },
  Sb = gr(Cb, [["__scopeId", "data-v-e20b9d11"]]),
  Pb = {
    __name: "Pricing",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => (
        ie(), Xe(Sb, { brightness: e.brightness }, null, 8, ["brightness"])
      )
    },
  },
  Mb = { class: "flex-col" },
  Ab = { class: "py-5 flex-col w-full" },
  Ib = { id: "cta" },
  Ob = {
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
                let S = b.getElementsByTagName("input")
                for (let C = 0; C < S.length; C++) S[C].style.display = "none"
                let F = b.getElementsByTagName("textarea")[0]
                F.style.display = "none"
                let _ = document.getElementById("submitButton")
                _.disabled = !0
              } else alert("Something went wrong. Please try again.")
            })
        }
      return (s, l) => (
        ie(),
        Ee("div", Mb, [
          g("div", Ab, [
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
          g("form", Ib, [
            g(
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
            g(
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
            g(
              "textarea",
              {
                placeholder: "Message",
                name: "message",
                class: M(["rounded p-2 w-full mt-3", s.inputClass]),
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
  Rb = {
    __name: "AboutMe",
    props: { brightness: Number },
    setup(e) {
      return (t, n) => null
    },
  },
  Tb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
  Nb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
  jb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
  Fb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
  Lb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
  Bb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
  Hb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
  zb =
    "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
  Db =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814766447.webp",
  Vb =
    "https://images.josephhansen.dev/uploads/file2024-02-0113-1706814805492.webp",
  on =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',
  un = '</title><path d="',
  cn = '"/></svg>',
  Er = {
    title: "Bootstrap",
    slug: "bootstrap",
    get svg() {
      return on + "Bootstrap" + un + this.path + cn
    },
    path: "M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z",
    source: "https://getbootstrap.com/docs/5.3/about/brand",
    hex: "7952B3",
    guidelines: "https://getbootstrap.com/docs/5.3/about/brand",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  qb = {
    title: "Cloudflare",
    slug: "cloudflare",
    get svg() {
      return on + "Cloudflare" + un + this.path + cn
    },
    path: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
    source: "https://www.cloudflare.com/logo/",
    hex: "F38020",
    guidelines: "https://www.cloudflare.com/trademark/",
  },
  Wb = {
    title: "Figma",
    slug: "figma",
    get svg() {
      return on + "Figma" + un + this.path + cn
    },
    path: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z",
    source: "https://www.figma.com/using-the-figma-brand/",
    hex: "F24E1E",
    guidelines: "https://www.figma.com/using-the-figma-brand/",
  },
  Gb = {
    title: "JavaScript",
    slug: "javascript",
    get svg() {
      return on + "JavaScript" + un + this.path + cn
    },
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
    source:
      "https://github.com/voodootikigod/logo.js/blob/1544bdeed6d618a6cfe4f0650d04ab8d9cfa76d9/js.svg",
    hex: "F7DF1E",
    license: { type: "MIT", url: "https://spdx.org/licenses/MIT" },
  },
  Ub = {
    title: "NGINX",
    slug: "nginx",
    get svg() {
      return on + "NGINX" + un + this.path + cn
    },
    path: "M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",
    source: "https://www.nginx.com/press/",
    hex: "009639",
    guidelines: "https://www.nginx.com/press/",
  },
  pi = {
    title: "PHP",
    slug: "php",
    get svg() {
      return on + "PHP" + un + this.path + cn
    },
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
    source: "https://php.net/download-logos.php",
    hex: "777BB4",
    license: {
      type: "CC-BY-SA-4.0",
      url: "https://spdx.org/licenses/CC-BY-SA-4.0",
    },
  },
  Kb = {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    get svg() {
      return on + "Tailwind CSS" + un + this.path + cn
    },
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    source: "https://tailwindcss.com/brand",
    hex: "06B6D4",
    guidelines: "https://tailwindcss.com/brand",
  },
  vi = {
    title: "Vue.js",
    slug: "vuedotjs",
    get svg() {
      return on + "Vue.js" + un + this.path + cn
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
  mn = {
    title: "WordPress",
    slug: "wordpress",
    get svg() {
      return on + "WordPress" + un + this.path + cn
    },
    path: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
    source: "https://wordpress.org/about/logos",
    hex: "21759B",
    guidelines: "https://wordpressfoundation.org/trademark-policy",
  },
  Yb = { class: "flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12" },
  Xb = { class: "py-5 flex-col w-full" },
  Jb = { class: "prose" },
  Zb = ["onMouseover", "onClick"],
  Qb = { class: "image-container" },
  em = ["src", "alt"],
  tm = { class: "flex gap-2 items-center" },
  nm = {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "24px",
    height: "24px",
  },
  rm = ["d"],
  sm = {
    __name: "Portfolio",
    props: { brightness: Number },
    setup(e) {
      const t = e,
        n = (u) => {
          if (u >= 4) return "text-slate-800"
          if (u == 3) return "text-slate-200"
          if (u == 2) return "text-slate-300"
          if (u == 1) return "text-slate-300"
        },
        r = (u) => {
          if (u >= 4) return "text-emerald-500"
          if (u == 3) return "text-orange-600"
          if (u == 2) return "text-orange-500"
          if (u == 1) return "text-orange-400"
        },
        s = be([
          {
            icons: [mn, pi, Wb],
            title: "BlenderNation Bazaar",
            image: Tb,
            link: "/portfolio/bazaar",
          },
          {
            icons: [vi, Ub, qb],
            title: "OKC South Stake",
            image: Nb,
            link: "/portfolio/okc-south-stake",
          },
        ]),
        l = be([
          {
            icons: [mn, Gb],
            title: "Build On Your Land",
            image: jb,
            link: "/portfolio/build-on-your-land",
          },
          {
            icons: [mn, pi],
            title: "Stuart Pipe and Hose",
            image: Fb,
            link: "/portfolio/stuart-pipe",
          },
          {
            icons: [mn, Er],
            title: "Atlanta Floor One",
            image: Lb,
            link: "/portfolio/atlanta-floor-one",
          },
          {
            icons: [mn, Er],
            title: "Swim State Pool",
            image: Bb,
            link: "/portfolio/swim-state-pool",
          },
          {
            title: "josephhansen.dev",
            icons: [vi, Kb],
            image: Hb,
            link: "/portfolio/josephhansen-dev",
          },
          {
            title: "Tub Boys",
            icons: [mn, Er],
            image: zb,
            link: "/portfolio/tub-boys",
          },
          {
            title: "Stehl Family Dental",
            icons: [mn, Er],
            image: Db,
            link: "/portfolio/stehl-family-dental",
          },
          {
            title: "Aris",
            icons: [mn, Er],
            image: Vb,
            link: "/portfolio/aris-search",
          },
        ]),
        i = be(null)
      return (u, f) => (
        ie(),
        Ee("div", Yb, [
          g("div", Xb, [
            g("span", Jb, [
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
                " I've been working on websites for over a decade. I love the creativity and problem solving that goes into a hiqh-quality website. Check out some of my work below! ",
                2,
              ),
              g(
                "h3",
                { class: M(["text-2xl text-center", n(t.brightness)]) },
                " Full Sites (I designed and developed) ",
                2,
              ),
            ]),
          ]),
          (ie(!0),
          Ee(
            We,
            null,
            ir(
              [s.value, l.value],
              (h) => (
                ie(),
                Ee(
                  "div",
                  {
                    class: M([
                      "grid md:grid-cols-none gap-4 w-full",
                      {
                        "lg:grid-cols-2": h == s.value,
                        "lg:grid-cols-3 mt-4": h == l.value,
                      },
                    ]),
                  },
                  [
                    (ie(!0),
                    Ee(
                      We,
                      null,
                      ir(
                        h,
                        (d) => (
                          ie(),
                          Ee(
                            "div",
                            {
                              class:
                                "flex flex-col justify-end rounded-xl portfolioCard",
                              key: d.title,
                              onMouseover: (b) => (i.value = d.title),
                              onMouseleave:
                                f[0] || (f[0] = (b) => (i.value = null)),
                              onClick: (b) => u.$router.push(d.link),
                              style: $s({
                                opacity:
                                  i.value === d.title || i.value === null
                                    ? 1
                                    : 0.7,
                              }),
                            },
                            [
                              g("div", Qb, [
                                g(
                                  "img",
                                  {
                                    src: d.image,
                                    alt: d.title,
                                    class:
                                      "bg-slate-200 object-contain w-full rounded-t-xl",
                                  },
                                  null,
                                  8,
                                  em,
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
                                              r(t.brightness),
                                            ]),
                                          },
                                          It(d.title),
                                          3,
                                        ),
                                      ]),
                                      g("div", tm, [
                                        (ie(!0),
                                        Ee(
                                          We,
                                          null,
                                          ir(
                                            d.icons,
                                            (b, k) => (
                                              ie(),
                                              Ee(
                                                "div",
                                                {
                                                  key: k,
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
                                                  (ie(),
                                                  Ee("svg", nm, [
                                                    g(
                                                      "path",
                                                      { d: b.path },
                                                      null,
                                                      8,
                                                      rm,
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
  lm = gr(sm, [["__scopeId", "data-v-2bda4711"]]),
  am = { class: "flex justify-center w-full md:px-10 sm:px-5 mt-5" },
  om = { class: "flex justify-center w-full md:px-10 sm:px-5 pt-10" },
  im = {
    __name: "Main",
    props: { component: String },
    setup(e) {
      const t = be(1),
        n = e,
        r = (i) => {
          ;(t.value = Number(i)),
            window.localStorage.setItem("brightness", t.value)
        },
        s = ue(() => {
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
                "josephhansen.dev | web developer/designer | pricing"),
              (l.meta[1].content =
                "josephhansen.dev | web developer/designer | pricing"),
              (l.meta[6].content =
                "josephhansen.dev | web developer/designer | pricing"),
              (l.meta[4].content = "https://josephhansen.dev/pricing"),
              (l.meta[9].content = "https://josephhansen.dev/pricing"))
            : n.component == "contact"
              ? ((l.title =
                  "josephhansen.dev | web developer/designer | contact"),
                (l.meta[1].content =
                  "josephhansen.dev | web developer/designer | contact"),
                (l.meta[6].content =
                  "josephhansen.dev | web developer/designer | contact"),
                (l.meta[4].content = "https://josephhansen.dev/contact"),
                (l.meta[9].content = "https://josephhansen.dev/contact"))
              : n.component == "about"
                ? ((l.title =
                    "josephhansen.dev | web developer/designer | about"),
                  (l.meta[1].content =
                    "josephhansen.dev | web developer/designer | about"),
                  (l.meta[6].content =
                    "josephhansen.dev | web developer/designer | about"),
                  (l.meta[4].content = "https://josephhansen.dev/about"),
                  (l.meta[9].content = "https://josephhansen.dev/about"))
                : n.component == "portfolio" &&
                  ((l.title =
                    "josephhansen.dev | web developer/designer | portfolio"),
                  (l.meta[1].content =
                    "josephhansen.dev | web developer/designer | portfolio"),
                  (l.meta[6].content =
                    "josephhansen.dev | web developer/designer | portfolio"),
                  (l.meta[4].content = "https://josephhansen.dev/portfolio"),
                  (l.meta[9].content = "https://josephhansen.dev/portfolio"))
      })
      const l = Br({
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
          ie(),
          Ee(
            We,
            null,
            [
              g(
                "main",
                {
                  class: M([["w-dvw", s.value], "md:p-7 sm:p-5"]),
                  style: { "min-height": "100vh", "overflow-x": "hidden" },
                },
                [
                  ae(jv, { "onUpdate:brightness": r }),
                  g("div", am, [
                    e.component == "pricing"
                      ? (ie(),
                        Ee(
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
                            ae(Pb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "contact"
                      ? (ie(),
                        Ee(
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
                            ae(Ob, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "portfolio"
                      ? (ie(),
                        Ee(
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
                            ae(lm, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "about-me"
                      ? (ie(),
                        Ee(
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
                            ae(Rb, { brightness: t.value }, null, 8, [
                              "brightness",
                            ]),
                          ],
                          2,
                        ))
                      : tt("", !0),
                    e.component == "home"
                      ? (ie(),
                        Ee(
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
                  g("div", om, [
                    e.component == "home"
                      ? (ie(),
                        Ee(
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
                            ae(Yg, { brightness: t.value }, null, 8, [
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
              ae(Jg, { brightness: t.value }, null, 8, ["brightness"]),
            ],
            64,
          )
        )
      )
    },
  },
  um = gr(im, [["__scopeId", "data-v-4a601def"]])
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const rr = typeof window < "u"
function cm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Fe = Object.assign
function wl(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = Vt(s) ? s.map(e) : e(s)
  }
  return n
}
const Ar = () => {},
  Vt = Array.isArray,
  fm = /\/$/,
  dm = (e) => e.replace(fm, "")
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
    (r = gm(r ?? t, n)),
    { fullPath: r + (l && "?") + l + i, path: r, query: s, hash: i }
  )
}
function hm(e, t) {
  const n = t.query ? e(t.query) : ""
  return t.path + (n && "?") + n + (t.hash || "")
}
function gi(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/"
}
function pm(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    dr(t.matched[r], n.matched[s]) &&
    Wu(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function dr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Wu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!vm(e[n], t[n])) return !1
  return !0
}
function vm(e, t) {
  return Vt(e) ? bi(e, t) : Vt(t) ? bi(t, e) : e === t
}
function bi(e, t) {
  return Vt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function gm(e, t) {
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
var Ir
;(function (e) {
  ;(e.back = "back"), (e.forward = "forward"), (e.unknown = "")
})(Ir || (Ir = {}))
function bm(e) {
  if (!e)
    if (rr) {
      const t = document.querySelector("base")
      ;(e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""))
    } else e = "/"
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), dm(e)
}
const mm = /^[^#]+#/
function ym(e, t) {
  return e.replace(mm, "#") + t
}
function wm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const js = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function xm(e) {
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
    t = wm(s, e)
  } else t = e
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function mi(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Hl = new Map()
function _m(e, t) {
  Hl.set(e, t)
}
function km(e) {
  const t = Hl.get(e)
  return Hl.delete(e), t
}
let $m = () => location.protocol + "//" + location.host
function Gu(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    l = e.indexOf("#")
  if (l > -1) {
    let u = s.includes(e.slice(l)) ? e.slice(l).length : 1,
      f = s.slice(u)
    return f[0] !== "/" && (f = "/" + f), gi(f, "")
  }
  return gi(n, e) + r + s
}
function Em(e, t, n, r) {
  let s = [],
    l = [],
    i = null
  const u = ({ state: k }) => {
    const S = Gu(e, location),
      F = n.value,
      _ = t.value
    let C = 0
    if (k) {
      if (((n.value = S), (t.value = k), i && i === F)) {
        i = null
        return
      }
      C = _ ? k.position - _.position : 0
    } else r(S)
    s.forEach((T) => {
      T(n.value, F, {
        delta: C,
        type: Lr.pop,
        direction: C ? (C > 0 ? Ir.forward : Ir.back) : Ir.unknown,
      })
    })
  }
  function f() {
    i = n.value
  }
  function h(k) {
    s.push(k)
    const S = () => {
      const F = s.indexOf(k)
      F > -1 && s.splice(F, 1)
    }
    return l.push(S), S
  }
  function d() {
    const { history: k } = window
    k.state && k.replaceState(Fe({}, k.state, { scroll: js() }), "")
  }
  function b() {
    for (const k of l) k()
    ;(l = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", d)
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", d, { passive: !0 }),
    { pauseListeners: f, listen: h, destroy: b }
  )
}
function yi(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? js() : null,
  }
}
function Cm(e) {
  const { history: t, location: n } = window,
    r = { value: Gu(e, n) },
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
    const b = e.indexOf("#"),
      k =
        b > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(b)) + f
          : $m() + e + f
    try {
      t[d ? "replaceState" : "pushState"](h, "", k), (s.value = h)
    } catch (S) {
      console.error(S), n[d ? "replace" : "assign"](k)
    }
  }
  function i(f, h) {
    const d = Fe({}, t.state, yi(s.value.back, f, s.value.forward, !0), h, {
      position: s.value.position,
    })
    l(f, d, !0), (r.value = f)
  }
  function u(f, h) {
    const d = Fe({}, s.value, t.state, { forward: f, scroll: js() })
    l(d.current, d, !0)
    const b = Fe({}, yi(r.value, f, null), { position: d.position + 1 }, h)
    l(f, b, !1), (r.value = f)
  }
  return { location: r, state: s, push: u, replace: i }
}
function Sm(e) {
  e = bm(e)
  const t = Cm(e),
    n = Em(e, t.state, t.location, t.replace)
  function r(l, i = !0) {
    i || n.pauseListeners(), history.go(l)
  }
  const s = Fe(
    { location: "", base: e, go: r, createHref: ym.bind(null, e) },
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
function Pm(e) {
  return typeof e == "string" || (e && typeof e == "object")
}
function Uu(e) {
  return typeof e == "string" || typeof e == "symbol"
}
const yn = {
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
  Ku = Symbol("")
var wi
;(function (e) {
  ;(e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated")
})(wi || (wi = {}))
function hr(e, t) {
  return Fe(new Error(), { type: e, [Ku]: !0 }, t)
}
function en(e, t) {
  return e instanceof Error && Ku in e && (t == null || !!(e.type & t))
}
const xi = "[^/]+?",
  Mm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Am = /[.+*?^${}()[\]/\\]/g
function Im(e, t) {
  const n = Fe({}, Mm, t),
    r = []
  let s = n.start ? "^" : ""
  const l = []
  for (const h of e) {
    const d = h.length ? [] : [90]
    n.strict && !h.length && (s += "/")
    for (let b = 0; b < h.length; b++) {
      const k = h[b]
      let S = 40 + (n.sensitive ? 0.25 : 0)
      if (k.type === 0)
        b || (s += "/"), (s += k.value.replace(Am, "\\$&")), (S += 40)
      else if (k.type === 1) {
        const { value: F, repeatable: _, optional: C, regexp: T } = k
        l.push({ name: F, repeatable: _, optional: C })
        const W = T || xi
        if (W !== xi) {
          S += 10
          try {
            new RegExp(`(${W})`)
          } catch (X) {
            throw new Error(
              `Invalid custom RegExp for param "${F}" (${W}): ` + X.message,
            )
          }
        }
        let D = _ ? `((?:${W})(?:/(?:${W}))*)` : `(${W})`
        b || (D = C && h.length < 2 ? `(?:/${D})` : "/" + D),
          C && (D += "?"),
          (s += D),
          (S += 20),
          C && (S += -8),
          _ && (S += -20),
          W === ".*" && (S += -50)
      }
      d.push(S)
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
      b = {}
    if (!d) return null
    for (let k = 1; k < d.length; k++) {
      const S = d[k] || "",
        F = l[k - 1]
      b[F.name] = S && F.repeatable ? S.split("/") : S
    }
    return b
  }
  function f(h) {
    let d = "",
      b = !1
    for (const k of e) {
      ;(!b || !d.endsWith("/")) && (d += "/"), (b = !1)
      for (const S of k)
        if (S.type === 0) d += S.value
        else if (S.type === 1) {
          const { value: F, repeatable: _, optional: C } = S,
            T = F in h ? h[F] : ""
          if (Vt(T) && !_)
            throw new Error(
              `Provided param "${F}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const W = Vt(T) ? T.join("/") : T
          if (!W)
            if (C)
              k.length < 2 &&
                (d.endsWith("/") ? (d = d.slice(0, -1)) : (b = !0))
            else throw new Error(`Missing required param "${F}"`)
          d += W
        }
    }
    return d || "/"
  }
  return { re: i, score: r, keys: l, parse: u, stringify: f }
}
function Om(e, t) {
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
function Rm(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const l = Om(r[n], s[n])
    if (l) return l
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (_i(r)) return 1
    if (_i(s)) return -1
  }
  return s.length - r.length
}
function _i(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Tm = { type: 0, value: "" },
  Nm = /[a-zA-Z0-9_]/
function jm(e) {
  if (!e) return [[]]
  if (e === "/") return [[Tm]]
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`)
  function t(S) {
    throw new Error(`ERR (${n})/"${h}": ${S}`)
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
  function b() {
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
        f === "/" ? (h && b(), i()) : f === ":" ? (b(), (n = 1)) : k()
        break
      case 4:
        k(), (n = r)
        break
      case 1:
        f === "("
          ? (n = 2)
          : Nm.test(f)
            ? k()
            : (b(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--)
        break
      case 2:
        f === ")"
          ? d[d.length - 1] == "\\"
            ? (d = d.slice(0, -1) + f)
            : (n = 3)
          : (d += f)
        break
      case 3:
        b(), (n = 0), f !== "*" && f !== "?" && f !== "+" && u--, (d = "")
        break
      default:
        t("Unknown state")
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${h}"`), b(), i(), s
}
function Fm(e, t, n) {
  const r = Im(jm(e.path), n),
    s = Fe(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function Lm(e, t) {
  const n = [],
    r = new Map()
  t = Ei({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(d) {
    return r.get(d)
  }
  function l(d, b, k) {
    const S = !k,
      F = Bm(d)
    F.aliasOf = k && k.record
    const _ = Ei(t, d),
      C = [F]
    if ("alias" in d) {
      const D = typeof d.alias == "string" ? [d.alias] : d.alias
      for (const X of D)
        C.push(
          Fe({}, F, {
            components: k ? k.record.components : F.components,
            path: X,
            aliasOf: k ? k.record : F,
          }),
        )
    }
    let T, W
    for (const D of C) {
      const { path: X } = D
      if (b && X[0] !== "/") {
        const K = b.record.path,
          I = K[K.length - 1] === "/" ? "" : "/"
        D.path = b.record.path + (X && I + X)
      }
      if (
        ((T = Fm(D, b, _)),
        k
          ? k.alias.push(T)
          : ((W = W || T),
            W !== T && W.alias.push(T),
            S && d.name && !$i(T) && i(d.name)),
        F.children)
      ) {
        const K = F.children
        for (let I = 0; I < K.length; I++) l(K[I], T, k && k.children[I])
      }
      ;(k = k || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          f(T)
    }
    return W
      ? () => {
          i(W)
        }
      : Ar
  }
  function i(d) {
    if (Uu(d)) {
      const b = r.get(d)
      b &&
        (r.delete(d),
        n.splice(n.indexOf(b), 1),
        b.children.forEach(i),
        b.alias.forEach(i))
    } else {
      const b = n.indexOf(d)
      b > -1 &&
        (n.splice(b, 1),
        d.record.name && r.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i))
    }
  }
  function u() {
    return n
  }
  function f(d) {
    let b = 0
    for (
      ;
      b < n.length &&
      Rm(d, n[b]) >= 0 &&
      (d.record.path !== n[b].record.path || !Yu(d, n[b]));

    )
      b++
    n.splice(b, 0, d), d.record.name && !$i(d) && r.set(d.record.name, d)
  }
  function h(d, b) {
    let k,
      S = {},
      F,
      _
    if ("name" in d && d.name) {
      if (((k = r.get(d.name)), !k)) throw hr(1, { location: d })
      ;(_ = k.record.name),
        (S = Fe(
          ki(
            b.params,
            k.keys.filter((W) => !W.optional).map((W) => W.name),
          ),
          d.params &&
            ki(
              d.params,
              k.keys.map((W) => W.name),
            ),
        )),
        (F = k.stringify(S))
    } else if ("path" in d)
      (F = d.path),
        (k = n.find((W) => W.re.test(F))),
        k && ((S = k.parse(F)), (_ = k.record.name))
    else {
      if (((k = b.name ? r.get(b.name) : n.find((W) => W.re.test(b.path))), !k))
        throw hr(1, { location: d, currentLocation: b })
      ;(_ = k.record.name),
        (S = Fe({}, b.params, d.params)),
        (F = k.stringify(S))
    }
    const C = []
    let T = k
    for (; T; ) C.unshift(T.record), (T = T.parent)
    return { name: _, path: F, params: S, matched: C, meta: zm(C) }
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
function ki(e, t) {
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
    props: Hm(e),
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
function Hm(e) {
  const t = {},
    n = e.props || !1
  if ("component" in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n
  return t
}
function $i(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function zm(e) {
  return e.reduce((t, n) => Fe(t, n.meta), {})
}
function Ei(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function Yu(e, t) {
  return t.children.some((n) => n === e || Yu(e, n))
}
const Xu = /#/g,
  Dm = /&/g,
  Vm = /\//g,
  qm = /=/g,
  Wm = /\?/g,
  Ju = /\+/g,
  Gm = /%5B/g,
  Um = /%5D/g,
  Zu = /%5E/g,
  Km = /%60/g,
  Qu = /%7B/g,
  Ym = /%7C/g,
  ec = /%7D/g,
  Xm = /%20/g
function ha(e) {
  return encodeURI("" + e)
    .replace(Ym, "|")
    .replace(Gm, "[")
    .replace(Um, "]")
}
function Jm(e) {
  return ha(e).replace(Qu, "{").replace(ec, "}").replace(Zu, "^")
}
function zl(e) {
  return ha(e)
    .replace(Ju, "%2B")
    .replace(Xm, "+")
    .replace(Xu, "%23")
    .replace(Dm, "%26")
    .replace(Km, "`")
    .replace(Qu, "{")
    .replace(ec, "}")
    .replace(Zu, "^")
}
function Zm(e) {
  return zl(e).replace(qm, "%3D")
}
function Qm(e) {
  return ha(e).replace(Xu, "%23").replace(Wm, "%3F")
}
function e2(e) {
  return e == null ? "" : Qm(e).replace(Vm, "%2F")
}
function ys(e) {
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
function t2(e) {
  const t = {}
  if (e === "" || e === "?") return t
  const r = (e[0] === "?" ? e.slice(1) : e).split("&")
  for (let s = 0; s < r.length; ++s) {
    const l = r[s].replace(Ju, " "),
      i = l.indexOf("="),
      u = ys(i < 0 ? l : l.slice(0, i)),
      f = i < 0 ? null : ys(l.slice(i + 1))
    if (u in t) {
      let h = t[u]
      Vt(h) || (h = t[u] = [h]), h.push(f)
    } else t[u] = f
  }
  return t
}
function Ci(e) {
  let t = ""
  for (let n in e) {
    const r = e[n]
    if (((n = Zm(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n)
      continue
    }
    ;(Vt(r) ? r.map((l) => l && zl(l)) : [r && zl(r)]).forEach((l) => {
      l !== void 0 &&
        ((t += (t.length ? "&" : "") + n), l != null && (t += "=" + l))
    })
  }
  return t
}
function n2(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = Vt(r)
        ? r.map((s) => (s == null ? null : "" + s))
        : r == null
          ? r
          : "" + r)
  }
  return t
}
const r2 = Symbol(""),
  Si = Symbol(""),
  pa = Symbol(""),
  tc = Symbol(""),
  Dl = Symbol("")
function Cr() {
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
  const l = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((i, u) => {
      const f = (b) => {
          b === !1
            ? u(hr(4, { from: n, to: t }))
            : b instanceof Error
              ? u(b)
              : Pm(b)
                ? u(hr(2, { from: t, to: b }))
                : (l &&
                    r.enterCallbacks[s] === l &&
                    typeof b == "function" &&
                    l.push(b),
                  i())
        },
        h = e.call(r && r.instances[s], t, n, f)
      let d = Promise.resolve(h)
      e.length < 3 && (d = d.then(f)), d.catch((b) => u(b))
    })
}
function _l(e, t, n, r) {
  const s = []
  for (const l of e)
    for (const i in l.components) {
      let u = l.components[i]
      if (!(t !== "beforeRouteEnter" && !l.instances[i]))
        if (s2(u)) {
          const h = (u.__vccOpts || u)[t]
          h && s.push(kn(h, n, r, l, i))
        } else {
          let f = u()
          s.push(() =>
            f.then((h) => {
              if (!h)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${l.path}"`),
                )
              const d = cm(h) ? h.default : h
              l.components[i] = d
              const k = (d.__vccOpts || d)[t]
              return k && kn(k, n, r, l, i)()
            }),
          )
        }
    }
  return s
}
function s2(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  )
}
function Pi(e) {
  const t = ft(pa),
    n = ft(tc),
    r = ue(() => t.resolve(de(e.to))),
    s = ue(() => {
      const { matched: f } = r.value,
        { length: h } = f,
        d = f[h - 1],
        b = n.matched
      if (!d || !b.length) return -1
      const k = b.findIndex(dr.bind(null, d))
      if (k > -1) return k
      const S = Mi(f[h - 2])
      return h > 1 && Mi(d) === S && b[b.length - 1].path !== S
        ? b.findIndex(dr.bind(null, f[h - 2]))
        : k
    }),
    l = ue(() => s.value > -1 && i2(n.params, r.value.params)),
    i = ue(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Wu(n.params, r.value.params),
    )
  function u(f = {}) {
    return o2(f)
      ? t[de(e.replace) ? "replace" : "push"](de(e.to)).catch(Ar)
      : Promise.resolve()
  }
  return {
    route: r,
    href: ue(() => r.value.href),
    isActive: l,
    isExactActive: i,
    navigate: u,
  }
}
const l2 = Tt({
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
    useLink: Pi,
    setup(e, { slots: t }) {
      const n = Br(Pi(e)),
        { options: r } = ft(pa),
        s = ue(() => ({
          [Ai(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Ai(
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
  a2 = l2
function o2(e) {
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
function i2(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == "string") {
      if (r !== s) return !1
    } else if (!Vt(s) || s.length !== r.length || r.some((l, i) => l !== s[i]))
      return !1
  }
  return !0
}
function Mi(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ""
}
const Ai = (e, t, n) => e ?? t ?? n,
  u2 = Tt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = ft(Dl),
        s = ue(() => e.route || r.value),
        l = ft(Si, 0),
        i = ue(() => {
          let h = de(l)
          const { matched: d } = s.value
          let b
          for (; (b = d[h]) && !b.components; ) h++
          return h
        }),
        u = ue(() => s.value.matched[i.value])
      Yt(
        Si,
        ue(() => i.value + 1),
      ),
        Yt(r2, u),
        Yt(Dl, s)
      const f = be()
      return (
        rn(
          () => [f.value, u.value, e.name],
          ([h, d, b], [k, S, F]) => {
            d &&
              ((d.instances[b] = h),
              S &&
                S !== d &&
                h &&
                h === k &&
                (d.leaveGuards.size || (d.leaveGuards = S.leaveGuards),
                d.updateGuards.size || (d.updateGuards = S.updateGuards))),
              h &&
                d &&
                (!S || !dr(d, S) || !k) &&
                (d.enterCallbacks[b] || []).forEach((_) => _(h))
          },
          { flush: "post" },
        ),
        () => {
          const h = s.value,
            d = e.name,
            b = u.value,
            k = b && b.components[d]
          if (!k) return Ii(n.default, { Component: k, route: h })
          const S = b.props[d],
            F = S
              ? S === !0
                ? h.params
                : typeof S == "function"
                  ? S(h)
                  : S
              : null,
            C = ot(
              k,
              Fe({}, F, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (b.instances[d] = null)
                },
                ref: f,
              }),
            )
          return Ii(n.default, { Component: C, route: h }) || C
        }
      )
    },
  })
function Ii(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const c2 = u2
function f2(e) {
  const t = Lm(e.routes, e),
    n = e.parseQuery || t2,
    r = e.stringifyQuery || Ci,
    s = e.history,
    l = Cr(),
    i = Cr(),
    u = Cr(),
    f = Th(yn)
  let h = yn
  rr &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual")
  const d = wl.bind(null, (O) => "" + O),
    b = wl.bind(null, e2),
    k = wl.bind(null, ys)
  function S(O, Q) {
    let U, le
    return (
      Uu(O) ? ((U = t.getRecordMatcher(O)), (le = Q)) : (le = O),
      t.addRoute(le, U)
    )
  }
  function F(O) {
    const Q = t.getRecordMatcher(O)
    Q && t.removeRoute(Q)
  }
  function _() {
    return t.getRoutes().map((O) => O.record)
  }
  function C(O) {
    return !!t.getRecordMatcher(O)
  }
  function T(O, Q) {
    if (((Q = Fe({}, Q || f.value)), typeof O == "string")) {
      const y = xl(n, O, Q.path),
        P = t.resolve({ path: y.path }, Q),
        N = s.createHref(y.fullPath)
      return Fe(y, P, {
        params: k(P.params),
        hash: ys(y.hash),
        redirectedFrom: void 0,
        href: N,
      })
    }
    let U
    if ("path" in O) U = Fe({}, O, { path: xl(n, O.path, Q.path).path })
    else {
      const y = Fe({}, O.params)
      for (const P in y) y[P] == null && delete y[P]
      ;(U = Fe({}, O, { params: b(y) })), (Q.params = b(Q.params))
    }
    const le = t.resolve(U, Q),
      Ae = O.hash || ""
    le.params = d(k(le.params))
    const Be = hm(r, Fe({}, O, { hash: Jm(Ae), path: le.path })),
      v = s.createHref(Be)
    return Fe(
      { fullPath: Be, hash: Ae, query: r === Ci ? n2(O.query) : O.query || {} },
      le,
      { redirectedFrom: void 0, href: v },
    )
  }
  function W(O) {
    return typeof O == "string" ? xl(n, O, f.value.path) : Fe({}, O)
  }
  function D(O, Q) {
    if (h !== O) return hr(8, { from: Q, to: O })
  }
  function X(O) {
    return he(O)
  }
  function K(O) {
    return X(Fe(W(O), { replace: !0 }))
  }
  function I(O) {
    const Q = O.matched[O.matched.length - 1]
    if (Q && Q.redirect) {
      const { redirect: U } = Q
      let le = typeof U == "function" ? U(O) : U
      return (
        typeof le == "string" &&
          ((le =
            le.includes("?") || le.includes("#") ? (le = W(le)) : { path: le }),
          (le.params = {})),
        Fe(
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
      v = O.replace === !0,
      y = I(U)
    if (y)
      return he(
        Fe(W(y), {
          state: typeof y == "object" ? Fe({}, Ae, y.state) : Ae,
          force: Be,
          replace: v,
        }),
        Q || U,
      )
    const P = U
    P.redirectedFrom = Q
    let N
    return (
      !Be &&
        pm(r, le, U) &&
        ((N = hr(16, { to: P, from: le })), ht(le, le, !0, !1)),
      (N ? Promise.resolve(N) : Ge(P, le))
        .catch((R) => (en(R) ? (en(R, 2) ? R : ze(R)) : Z(R, P, le)))
        .then((R) => {
          if (R) {
            if (en(R, 2))
              return he(
                Fe({ replace: v }, W(R.to), {
                  state: typeof R.to == "object" ? Fe({}, Ae, R.to.state) : Ae,
                  force: Be,
                }),
                Q || P,
              )
          } else R = _t(P, le, !0, v, Ae)
          return Ze(P, le, R), R
        })
    )
  }
  function pe(O, Q) {
    const U = D(O, Q)
    return U ? Promise.reject(U) : Promise.resolve()
  }
  function mt(O) {
    const Q = Nt.values().next().value
    return Q && typeof Q.runWithContext == "function"
      ? Q.runWithContext(O)
      : O()
  }
  function Ge(O, Q) {
    let U
    const [le, Ae, Be] = d2(O, Q)
    U = _l(le.reverse(), "beforeRouteLeave", O, Q)
    for (const y of le)
      y.leaveGuards.forEach((P) => {
        U.push(kn(P, O, Q))
      })
    const v = pe.bind(null, O, Q)
    return (
      U.push(v),
      Ke(U)
        .then(() => {
          U = []
          for (const y of l.list()) U.push(kn(y, O, Q))
          return U.push(v), Ke(U)
        })
        .then(() => {
          U = _l(Ae, "beforeRouteUpdate", O, Q)
          for (const y of Ae)
            y.updateGuards.forEach((P) => {
              U.push(kn(P, O, Q))
            })
          return U.push(v), Ke(U)
        })
        .then(() => {
          U = []
          for (const y of Be)
            if (y.beforeEnter)
              if (Vt(y.beforeEnter))
                for (const P of y.beforeEnter) U.push(kn(P, O, Q))
              else U.push(kn(y.beforeEnter, O, Q))
          return U.push(v), Ke(U)
        })
        .then(
          () => (
            O.matched.forEach((y) => (y.enterCallbacks = {})),
            (U = _l(Be, "beforeRouteEnter", O, Q)),
            U.push(v),
            Ke(U)
          ),
        )
        .then(() => {
          U = []
          for (const y of i.list()) U.push(kn(y, O, Q))
          return U.push(v), Ke(U)
        })
        .catch((y) => (en(y, 8) ? y : Promise.reject(y)))
    )
  }
  function Ze(O, Q, U) {
    u.list().forEach((le) => mt(() => le(O, Q, U)))
  }
  function _t(O, Q, U, le, Ae) {
    const Be = D(O, Q)
    if (Be) return Be
    const v = Q === yn,
      y = rr ? history.state : {}
    U &&
      (le || v
        ? s.replace(O.fullPath, Fe({ scroll: v && y && y.scroll }, Ae))
        : s.push(O.fullPath, Ae)),
      (f.value = O),
      ht(O, Q, U, v),
      ze()
  }
  let qe
  function Jt() {
    qe ||
      (qe = s.listen((O, Q, U) => {
        if (!kt.listening) return
        const le = T(O),
          Ae = I(le)
        if (Ae) {
          he(Fe(Ae, { replace: !0 }), le).catch(Ar)
          return
        }
        h = le
        const Be = f.value
        rr && _m(mi(Be.fullPath, U.delta), js()),
          Ge(le, Be)
            .catch((v) =>
              en(v, 12)
                ? v
                : en(v, 2)
                  ? (he(v.to, le)
                      .then((y) => {
                        en(y, 20) &&
                          !U.delta &&
                          U.type === Lr.pop &&
                          s.go(-1, !1)
                      })
                      .catch(Ar),
                    Promise.reject())
                  : (U.delta && s.go(-U.delta, !1), Z(v, le, Be)),
            )
            .then((v) => {
              ;(v = v || _t(le, Be, !1)),
                v &&
                  (U.delta && !en(v, 8)
                    ? s.go(-U.delta, !1)
                    : U.type === Lr.pop && en(v, 20) && s.go(-1, !1)),
                Ze(le, Be, v)
            })
            .catch(Ar)
      }))
  }
  let qt = Cr(),
    z = Cr(),
    ne
  function Z(O, Q, U) {
    ze(O)
    const le = z.list()
    return (
      le.length ? le.forEach((Ae) => Ae(O, Q, U)) : console.error(O),
      Promise.reject(O)
    )
  }
  function yt() {
    return ne && f.value !== yn
      ? Promise.resolve()
      : new Promise((O, Q) => {
          qt.add([O, Q])
        })
  }
  function ze(O) {
    return (
      ne ||
        ((ne = !O),
        Jt(),
        qt.list().forEach(([Q, U]) => (O ? U(O) : Q())),
        qt.reset()),
      O
    )
  }
  function ht(O, Q, U, le) {
    const { scrollBehavior: Ae } = e
    if (!rr || !Ae) return Promise.resolve()
    const Be =
      (!U && km(mi(O.fullPath, 0))) ||
      ((le || !U) && history.state && history.state.scroll) ||
      null
    return au()
      .then(() => Ae(O, Q, Be))
      .then((v) => v && xm(v))
      .catch((v) => Z(v, O, Q))
  }
  const Qe = (O) => s.go(O)
  let Wt
  const Nt = new Set(),
    kt = {
      currentRoute: f,
      listening: !0,
      addRoute: S,
      removeRoute: F,
      hasRoute: C,
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
      onError: z.add,
      isReady: yt,
      install(O) {
        const Q = this
        O.component("RouterLink", a2),
          O.component("RouterView", c2),
          (O.config.globalProperties.$router = Q),
          Object.defineProperty(O.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => de(f),
          }),
          rr &&
            !Wt &&
            f.value === yn &&
            ((Wt = !0), X(s.location).catch((Ae) => {}))
        const U = {}
        for (const Ae in yn)
          Object.defineProperty(U, Ae, {
            get: () => f.value[Ae],
            enumerable: !0,
          })
        O.provide(pa, Q), O.provide(tc, Ji(U)), O.provide(Dl, f)
        const le = O.unmount
        Nt.add(O),
          (O.unmount = function () {
            Nt.delete(O),
              Nt.size < 1 &&
                ((h = yn),
                qe && qe(),
                (qe = null),
                (f.value = yn),
                (Wt = !1),
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
function d2(e, t) {
  const n = [],
    r = [],
    s = [],
    l = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < l; i++) {
    const u = t.matched[i]
    u && (e.matched.find((h) => dr(h, u)) ? r.push(u) : n.push(u))
    const f = e.matched[i]
    f && (t.matched.find((h) => dr(h, f)) || s.push(f))
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
va.map((e) => e.path)
va.forEach((e) => {
  e.component = um
})
const h2 = f2({ history: Sm(), routes: va }),
  nc = v1(w1)
nc.use(h2)
nc.mount("#app")
